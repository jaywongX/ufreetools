// RIPEMD变体通用实现
function RIPEMDCore(blockSize, digestSize, rounds, h0, f, g, k, k2) {
    function toHexString(bytes) {
        return bytes.map(b => ('0' + b.toString(16)).slice(-2)).join('');
    }

    function leftRotate(x, n) {
        return (x << n) | (x >>> (32 - n));
    }

    function pad(data) {
        const l = data.length * 8;
        const n = blockSize - (data.length % blockSize);
        
        const pad = new Array(n > 0 ? n : blockSize + n);
        for (let i = 0; i < pad.length; i++) pad[i] = 0;
        
        pad[0] = 0x80;
        data = data.concat(pad);
        
        for (let i = 0; i < 8; i++) {
            data.push((l >> (i * 8)) & 0xff);
        }
        
        return data;
    }

    function processBlock(data, offset, state) {
        const X = new Array(16);
        for (let i = 0; i < 16; i++) {
            X[i] = data[offset + i * 4] |
                  (data[offset + i * 4 + 1] << 8) |
                  (data[offset + i * 4 + 2] << 16) |
                  (data[offset + i * 4 + 3] << 24);
        }

        let a = state[0], b = state[1], c = state[2], d = state[3], e = state[4];
        let A, B, C, D, E;

        for (let t = 0; t < rounds; t++) {
            const div = rounds === 80 ? (t < 16 ? 0 : t < 32 ? 1 : t < 48 ? 2 : t < 64 ? 3 : 4) : t % 5;
            const fVal = f(div, b, c, d);
            const T = leftRotate(a, 11) + e + fVal + k[t] + X[g(t)];
            e = d;
            d = c;
            c = leftRotate(b, 10);
            b = a;
            a = T;
        }

        A = a; B = b; C = c; D = d; E = e;

        a = state[0]; b = state[1]; c = state[2]; d = state[3]; e = state[4];

        for (let t = 0; t < rounds; t++) {
            const div = rounds === 80 ? (t < 16 ? 4 : t < 32 ? 3 : t < 48 ? 2 : t < 64 ? 1 : 0) : t % 5;
            const fVal = f(div, b, c, d);
            const T = leftRotate(a, 11) + e + fVal + k2[t] + X[g(rounds - 1 - t)];
            e = d;
            d = c;
            c = leftRotate(b, 10);
            b = a;
            a = T;
        }

        state[0] += a;
        state[1] += B;
        state[2] += c;
        state[3] += d;
        state[4] += E;
    }

    function hash(data) {
        if (typeof data === 'string') {
            data = new TextEncoder().encode(data);
        } else if (data instanceof Uint8Array) {
            data = Array.from(data);
        }

        data = pad(data);

        const state = h0.slice();
        for (let i = 0; i < data.length; i += blockSize) {
            processBlock(data, i, state);
        }

        const result = new Uint8Array(digestSize);
        for (let i = 0; i < state.length; i++) {
            for (let j = 0; j < 4; j++) {
                result[i * 4 + j] = (state[i] >> (j * 8)) & 0xff;
            }
        }

        return result;
    }

    return {
        update(data) {
            this._buffer = this._buffer || [];
            this._buffer = this._buffer.concat(Array.from(data));
            return this;
        },
        digest(encoding = 'hex') {
            const result = hash(this._buffer);
            this._buffer = null;
            return encoding === 'hex' ? toHexString(result) : result;
        }
    };
}

// ================== RIPEMD-128 ==================
function createRIPEMD128() {
    const h0 = [0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef];
    const f = (t, x, y, z) => t === 0 ? (x ^ y ^ z) :
               t === 1 ? ((x & y) | (~x & z)) :
               t === 2 ? ((x | ~y) ^ z) :
               t === 3 ? ((x & z) | (y & ~z)) :
                        (x ^ (y | ~z));

    const g = t => (t < 16 ? t : t < 32 ? (5 * t + 1) % 16 :
                   (7 * t) % 16) & 0xf;

    const k = Array(16).fill(0x00).map((_, i) => i < 4 ? 0x00 : i < 8 ? 0x5a82 : i < 12 ? 0x6ed9 : 0x8f1b);
    const k2 = Array(16).fill(0x00).map((_, i) => i < 4 ? 0x50a2 : i < 8 ? 0x5c4d : i < 12 ? 0x6d70 : 0x7a6d);

    return RIPEMDCore(64, 16, 16, h0, f, g, k, k2);
}

// ================== RIPEMD-256 ==================
function createRIPEMD256() {
    const h0 = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];
    const f = (t, x, y, z) => t === 0 ? (x ^ y ^ z) :
               t === 1 ? ((x & y) | (~x & z)) :
               t === 2 ? ((x | ~y) ^ z) :
               t === 3 ? ((x & z) | (y & ~z)) :
                        (x ^ (y | ~z));

    const g = t => t < 16 ? t :
               t < 32 ? (5 * t + 1) % 16 :
               t < 48 ? (3 * t + 5) % 16 :
               t < 64 ? (7 * t) % 16 :
                        (t + 3) % 16;

    const k = Array(80).fill(0x00).map((_, i) => i < 16 ? 0x00 :
                   i < 32 ? 0x5A827999 :
                   i < 48 ? 0x6ED9EBA1 :
                   i < 64 ? 0x8F1BBCDC : 0xA953FD4E);

    const k2 = Array(80).fill(0x00).map((_, i) => i < 16 ? 0x50A28BE6 :
                    i < 32 ? 0x5C4DD124 :
                    i < 48 ? 0x6D703EF3 :
                    i < 64 ? 0x7A6D76E0 : 0x00);

    return RIPEMDCore(64, 32, 80, h0, f, g, k, k2);
}

// ================== RIPEMD-320 ==================
function createRIPEMD320() {
    const h0 = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0, 0x12345678];
    const f = (t, x, y, z) => t === 0 ? (x ^ y ^ z) :
               t === 1 ? ((x & y) | (~x & z)) :
               t === 2 ? ((x | ~y) ^ z) :
               t === 3 ? ((x & z) | (y & ~z)) :
                        (x ^ (y | ~z));

    const g = t => t < 16 ? t :
               t < 32 ? (5 * t + 1) % 16 :
               t < 48 ? (3 * t + 5) % 16 :
               t < 64 ? (7 * t) % 16 :
                        (t + 3) % 16;

    const k = Array(80).fill(0x00).map((_, i) => i < 16 ? 0x00 :
                   i < 32 ? 0x5A827999 :
                   i < 48 ? 0x6ED9EBA1 :
                   i < 64 ? 0x8F1BBCDC : 0xA953FD4E);

    const k2 = Array(80).fill(0x00).map((_, i) => i < 16 ? 0x50A28BE6 :
                    i < 32 ? 0x5C4DD124 :
                    i < 48 ? 0x6D703EF3 :
                    i < 64 ? 0x7A6D76E0 : 0x00);

    return RIPEMDCore(64, 40, 80, h0, f, g, k, k2);
}

// ========== 导出模块 ==========
export {
    createRIPEMD128, createRIPEMD256, createRIPEMD320
};

// 如果您希望保留原来的兼容性代码，可以同时保留这部分
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        createRIPEMD128, createRIPEMD256, createRIPEMD320
    };
} else if (typeof window !== 'undefined') {
    window.createRIPEMD128 = createRIPEMD128;
    window.createRIPEMD256 = createRIPEMD256;
    window.createRIPEMD320 = createRIPEMD320;
}