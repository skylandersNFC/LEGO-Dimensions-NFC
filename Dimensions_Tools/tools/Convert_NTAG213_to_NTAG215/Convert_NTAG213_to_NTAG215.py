# Convert all NTAG213 dumps in "dump/" to NTAG215-sized dumps.
# - Input: dump/*.bin
# - Output: overwrites each original file with expanded NTAG215 version
# - Preserves UID and lock bytes, zero-pads extra pages
# - Updates CC to NTAG215 capacity

import os
from pathlib import Path

# Constants
PAGE_SIZE = 4
PAGES_213 = 45
BYTES_213 = PAGES_213 * PAGE_SIZE  # 180 bytes
PAGES_215 = 135
BYTES_215 = PAGES_215 * PAGE_SIZE  # 540 bytes

# CC bytes positions (Type 2 Tag): bytes 12-15 (page 3)
CC_OFFSET = 12
CC_E1 = 0xE1
CC_VERSION = 0x10
CC_SIZE_215 = 0x3F  # 504 bytes user memory / 8
CC_ACCESS = 0x00

def convert_file(src_path: Path):
    print(f"Processing: {src_path.name}")

    data = bytearray(src_path.read_bytes())

    # Create output buffer of 540 bytes initialized to 0x00
    out = bytearray(BYTES_215)
    out[:] = b"\x00" * BYTES_215

    # Copy as much as fits from the source (not exceeding 540)
    copy_len = min(len(data), BYTES_215)
    out[:copy_len] = data[:copy_len]

    # Update Capability Container for NTAG215
    out[CC_OFFSET:CC_OFFSET+4] = bytes([CC_E1, CC_VERSION, CC_SIZE_215, CC_ACCESS])

    # Overwrite original file
    src_path.write_bytes(out)
    print(f"Converted to NTAG215 size: {src_path.name}")


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

    print(f"Found {len(bin_files)} dump(s). Starting conversion...\n")

    for src_path in bin_files:
        try:
            convert_file(src_path)
        except Exception as e:
            print(f"Error converting {src_path.name}: {e}")

    print("\nAll files processed.")
    input("\nPress Enter to exit...")


if __name__ == "__main__":
    main()
