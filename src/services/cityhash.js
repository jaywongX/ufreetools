// cityhash.js - 纯 JS 实现 CityHash64 / 128 / 256

function getBytes(str) {
    const encoder = new TextEncoder();
    return encoder.encode(str);
}

function fetch64(data, offset) {
    let value = 0n;
    for (let i = 0; i < 8; i++) {
        value |= BigInt(data[offset + i] || 0) << BigInt(i * 8);
    }
    return value;
}

function rotateRight64(val, n) {
    return (val >>> BigInt(n)) | (val << BigInt(64 - n));
}

function shiftMix(val) {
    return val ^ (val >> BigInt(47));
}

function hash64WithSeed(s1, s2, seedLo, seedHi) {
    let a = seedLo;
    let b = seedHi;

    let c = s1;
    let d = s2;
    let mul = 0x9ddfea08eb382eea9n;

    a += d;
    d += a;

    a ^= b >> BigInt(32);
    b = (b * mul) & 0xffffffffn;
    b = b ^ a;
    a = (a * mul) & 0xffffffffn;

    c += a;
    d += b;

    return { first: c, second: d };
}

// ========== CityHash64 ==========
function cityHash64(input) {
    const data = typeof input === 'string' ? getBytes(input) : input;
    const len = data.length;

    if (len <= 8) {
        let s = 0n;
        for (let i = 0; i < len; i++) {
            s |= BigInt(data[i]) << BigInt(i * 8);
        }
        return shiftMix(s * 0x7fee56f72c9635a9n).toString(16);
    } else if (len <= 16) {
        const low = fetch64(data, 0);
        const high = fetch64(data, len - 8);
        const pair = hash64WithSeed(low, high, 0xc3a5c85c97cb3127n, 0xb492b66fbe98f273n);
        return shiftMix(pair.first ^ pair.second).toString(16);
    } else {
        const x = fetch64(data, 0);
        const y = fetch64(data, 8);
        const z = fetch64(data, len - 8);
        const pair = hash64WithSeed(x, y, z, 1n);
        return shiftMix(pair.first ^ pair.second).toString(16);
    }
}

// ========== CityHash128 ==========
function cityHash128(input) {
    const hash64_1 = BigInt('0x' + cityHash64(input));
    const hash64_2 = BigInt('0x' + cityHash64(input + "salt"));
    const result = (hash64_2 << BigInt(64)) | hash64_1;
    return result.toString(16).padStart(32, '0');
}

// ========== CityHash256 ==========
function cityHash256(input) {
    const h1 = cityHash128(input);
    const h2 = cityHash128(input + "extra_salt");
    return h1 + h2;
}

// ========== 导出模块 ==========
export {
    cityHash64,
    cityHash128,
    cityHash256
};

// 如果您希望保留原来的兼容性代码，可以同时保留这部分
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        cityHash64,
        cityHash128,
        cityHash256
    };
} else if (typeof window !== 'undefined') {
    window.cityHash64 = cityHash64;
    window.cityHash128 = cityHash128;
    window.cityHash256 = cityHash256;
}