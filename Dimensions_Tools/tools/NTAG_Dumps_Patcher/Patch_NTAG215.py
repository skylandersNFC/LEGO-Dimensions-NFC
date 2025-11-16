# Patch all LEGO Dimensions NTAG dumps in "dump/" with correct keys and password.
# - Input: dump/*.bin
# - Output: overwrites each original .bin file with patched version
# - Extracts UID and detects entity type/ID (Character, Vehicle, Gadget)
# - Generates encryption keys and password using LegoTag
# - Applies updates directly into the binary data

import os
import re
from pathlib import Path
import struct

from lib.lego_tag import LegoTag
from list.characters import CHARACTER_IDS
from list.vehicles import VEHICLE_IDS
from list.gadgets import GADGET_IDS

# Build lowercase name -> ID maps
CHAR_NAME_TO_ID = {name.lower(): id_ for id_, name in CHARACTER_IDS.items()}
VEH_NAME_TO_ID = {name.lower(): id_ for id_, name in VEHICLE_IDS.items()}
GAD_NAME_TO_ID = {name.lower(): id_ for id_, name in GADGET_IDS.items()}


def detect_entity_id(bin_name):
    base_name = Path(bin_name).stem.lower()

    # 1. Exact match
    if base_name in CHAR_NAME_TO_ID:
        return "Character", CHAR_NAME_TO_ID[base_name]
    elif base_name in VEH_NAME_TO_ID:
        return "Vehicle", VEH_NAME_TO_ID[base_name]
    elif base_name in GAD_NAME_TO_ID:
        return "Gadget", GAD_NAME_TO_ID[base_name]

    # 2. ID from prefix
    id_match = re.match(r"(\d+)", base_name)
    if id_match:
        id_ = int(id_match.group(1))
        if id_ in CHARACTER_IDS:
            return "Character", id_
        elif id_ in VEHICLE_IDS:
            return "Vehicle", id_
        elif id_ in GADGET_IDS:
            return "Gadget", id_

    # 3. Substring match
    for name, id_ in CHAR_NAME_TO_ID.items():
        if name in base_name:
            return "Character", id_
    for name, id_ in VEH_NAME_TO_ID.items():
        if name in base_name:
            return "Vehicle", id_
    for name, id_ in GAD_NAME_TO_ID.items():
        if name in base_name:
            return "Gadget", id_

    return "NOT FOUND", None


def extract_uid(binary_data):
    if len(binary_data) < 8:
        raise ValueError("Binary file too small to extract UID.")

    addr_00 = binary_data[0:4]
    addr_01 = binary_data[4:8]
    uid_bytes = addr_00[:3] + addr_01
    uid_hex = ''.join(f'{b:02X}' for b in uid_bytes)
    return uid_hex, uid_bytes


def generate_updates(uid_bytes, entity_id):
    updates = {}
    pwd = LegoTag.generate_card_password(uid_bytes)

    if entity_id is None:
        raise ValueError("Could not determine entity ID.")

    if entity_id < 1000:  # Character
        keys = LegoTag.encrypt_character_id(uid_bytes, entity_id)
        updates[0x24] = keys[:4]
        updates[0x25] = keys[4:8]
        updates[0x26] = [0x00, 0x00, 0x00, 0x00]  # placeholder
        updates[0x85] = list(pwd)
    elif entity_id in VEHICLE_IDS:
        keys = LegoTag.encrypt_vehicle_id(entity_id)
        updates[0x24] = keys
        updates[0x25] = [0x00, 0x00, 0x00, 0x00]
        updates[0x26] = [0x00, 0x01, 0x00, 0x00]
        updates[0x85] = list(pwd)
    elif entity_id in GADGET_IDS:
        keys = LegoTag.encrypt_vehicle_id(entity_id)
        updates[0x24] = keys
        updates[0x25] = [0x00, 0x00, 0x00, 0x00]
        updates[0x26] = [0x00, 0x01, 0x00, 0x00]
        updates[0x85] = list(pwd)
    else:
        raise ValueError(f"Unknown ID: {entity_id}")

    return updates


def apply_updates(binary_data, updates):
    for addr, values in updates.items():
        start = addr * 4
        binary_data[start:start + 4] = bytearray(values)
    return binary_data


def main():
    base_dir = Path(os.path.dirname(os.path.abspath(__file__)))
    dump_dir = base_dir / "dump"

    if not dump_dir.exists():
        print("No 'dump' folder found.")
        input("\nPress Enter to exit...")
        return

    bin_files = list(dump_dir.glob("*.bin"))
    if not bin_files:
        print("No .bin files found in the 'dump' folder.")
        input("\nPress Enter to exit...")
        return

    print(f"Found {len(bin_files)} .bin file(s) in dump folder.\n")

    for file_path in bin_files:
        try:
            print(f"Processing {file_path.name}...")
            binary_data = bytearray(file_path.read_bytes())

            # Step 1: Extract UID + ID
            entity_type, entity_id = detect_entity_id(file_path.name)
            uid_hex, uid_bytes = extract_uid(binary_data)
            print(f"  UID: {uid_hex}")
            print(f"  {entity_type} ID: {entity_id}")

            # Step 2: Generate updates
            updates = generate_updates(uid_bytes, entity_id)

            # Step 3: Apply updates
            binary_data = apply_updates(binary_data, updates)

            # Step 4: Overwrite original
            file_path.write_bytes(binary_data)
            print(f"Patched and overwritten: {file_path.name}\n")

        except Exception as e:
            print(f"Failed to patch {file_path.name}: {e}\n")

    input("\nAll files processed. Press Enter to exit...")


if __name__ == "__main__":
    main()
