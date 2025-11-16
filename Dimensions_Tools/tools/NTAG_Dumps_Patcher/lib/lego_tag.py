import struct

class LegoTag:
    @staticmethod
    def generate_card_password(uid):
        if uid is None or len(uid) != 7:
            raise ValueError("UID must be 7 bytes long")

        v2 = 0
        basic = bytearray([
            0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x28,
            0x63, 0x29, 0x20, 0x43, 0x6f, 0x70, 0x79, 0x72,
            0x69, 0x67, 0x68, 0x74, 0x20, 0x4c, 0x45, 0x47,
            0x4f, 0x20, 0x32, 0x30, 0x31, 0x34, 0xaa, 0xaa
        ])

        basic[0:7] = uid

        for i in range(8):
            v4 = LegoTag.rotate_right(v2, 25)
            v5 = LegoTag.rotate_right(v2, 10)
            b = basic[i*4+3] << 24 | basic[i*4+2] << 16 | basic[i*4+1] << 8 | basic[i*4]
            v2 = (b + v4 + v5 - v2) & 0xFFFFFFFF

        return struct.pack('<I', v2)

    @staticmethod
    def encrypt_character_id(uid, charid):
        if uid is None or len(uid) != 7:
            raise ValueError("UID must be 7 bytes long")

        key = LegoTag.generate_keys(uid)
        buf = [charid, charid]
        LegoTag.tea_encrypt(buf, key)

        data = bytearray(8)
        for i in range(4):
            data[i] = (buf[0] >> (i * 8)) & 0xFF
            data[i + 4] = (buf[1] >> (i * 8)) & 0xFF

        return data

    @staticmethod
    def encrypt_vehicle_id(vec_id):
        return bytearray([vec_id & 0xFF, (vec_id >> 8) & 0xFF, 0x00, 0x00])

    @staticmethod
    def rotate_right(value, count):
        return ((value >> count) | (value << (32 - count))) & 0xFFFFFFFF

    @staticmethod
    def scramble(uid, cnt):
        basic = bytearray([
            0xFF, 0xFF, 0xFF, 0xFF,
            0xFF, 0xFF, 0xFF, 0xb7,
            0xd5, 0xd7, 0xe6, 0xe7,
            0xba, 0x3c, 0xa8, 0xd8,
            0x75, 0x47, 0x68, 0xcf,
            0x23, 0xe9, 0xfe, 0xaa
        ])

        v2 = 0
        basic[0:7] = uid
        basic[cnt * 4 - 1] = 0xaa

        for i in range(cnt):
            b = struct.unpack('<I', basic[i*4:i*4+4])[0]
            v2 = (b + LegoTag.rotate_right(v2, 25) + LegoTag.rotate_right(v2, 10) - v2) & 0xFFFFFFFF

        return v2

    @staticmethod
    def generate_keys(uid):
        return [
            LegoTag.scramble(uid, 3),
            LegoTag.scramble(uid, 4),
            LegoTag.scramble(uid, 5),
            LegoTag.scramble(uid, 6)
        ]

    @staticmethod
    def tea_encrypt(v, k):
        v0, v1 = v
        sum = 0
        delta = 0x9e3779b9

        for _ in range(32):
            sum = (sum + delta) & 0xFFFFFFFF
            v0 = (v0 + (((v1 << 4) + k[0]) ^ (v1 + sum) ^ ((v1 >> 5) + k[1]))) & 0xFFFFFFFF
            v1 = (v1 + (((v0 << 4) + k[2]) ^ (v0 + sum) ^ ((v0 >> 5) + k[3]))) & 0xFFFFFFFF

        v[0], v[1] = v0, v1