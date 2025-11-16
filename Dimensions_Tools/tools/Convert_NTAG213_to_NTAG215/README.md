# Convert NTAG213 to NTAG215

This script was originally used during the creation of the Dimensions NFC Pack.
It’s provided here primarily for archival purposes.

You’re free to use or adapt it as needed, but please note that no dedicated tutorials or step-by-step guides are provided. You will need to review and understand the Python code on your own.

---

Convert all NTAG213 dumps in "dump/" to NTAG215-sized dumps.
- Input: dump/*.bin
- Output: overwrites each original file with expanded NTAG215 version
- Preserves UID and lock bytes, zero-pads extra pages
- Updates CC to NTAG215 capacity