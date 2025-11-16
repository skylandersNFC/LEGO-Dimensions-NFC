# NTAG Dumps Patcher

This script was originally used during the creation of the Dimensions NFC Pack.
It’s provided here primarily for archival purposes.

You’re free to use or adapt it as needed, but please note that no dedicated tutorials or step-by-step guides are provided. You will need to review and understand the Python code on your own.

---

Patch all LEGO Dimensions NTAG dumps in "dump/" with correct keys and password.
- Input: dump/*.bin
- Output: overwrites each original .bin file with patched version
- Extracts UID and detects entity type/ID (Character, Vehicle, Gadget)
- Generates encryption keys and password using LegoTag
- Applies updates directly into the binary data