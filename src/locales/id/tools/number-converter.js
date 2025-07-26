export default {
  name: 'Konverter Angka',
  description: 'Mengkonversi angka antara berbagai basis dan format',

  input: {
    title: 'Input Angka',
    placeholder: 'Masukkan angka yang akan dikonversi',
    fromBase: 'Basis Asal',
    toBase: 'Basis Target',
    customBase: 'Basis Kustom'
  },

  bases: {
    binary: 'Biner (Basis 2)',
    octal: 'Oktal (Basis 8)',
    decimal: 'Desimal (Basis 10)',
    hexadecimal: 'Heksadesimal (Basis 16)',
    base32: 'Basis 32',
    base36: 'Basis 36',
    base58: 'Basis 58',
    base64: 'Basis 64',
    custom: 'Basis Kustom'
  },

  options: {
    signed: 'Bertanda',
    bitLength: 'Panjang Bit',
    byteOrder: 'Urutan Byte',
    formatOutput: 'Format Output',
    separator: 'Pemisah',
    prefix: 'Tambahkan Prefix',
    uppercase: 'Huruf Besar'
  },

  byteOrders: {
    littleEndian: 'Little Endian',
    bigEndian: 'Big Endian'
  },

  bitLengths: {
    '8': '8 bit',
    '16': '16 bit',
    '32': '32 bit',
    '64': '64 bit',
    custom: 'Kustom'
  },

  output: {
    title: 'Hasil Konversi',
    binary: 'Biner',
    octal: 'Oktal',
    decimal: 'Desimal',
    hexadecimal: 'Heksadesimal',
    custom: 'Basis Kustom',
    all: 'Semua Konversi'
  },

  actions: {
    convert: 'Konversi',
    clear: 'Bersihkan',
    copy: 'Salin Hasil',
    swap: 'Tukar Basis'
  },

  bitConverters: {
    title: 'Konverter Bit',
    ieee754: 'IEEE 754 Floating Point',
    twosComplement: 'Komplemen Dua',
    bitMask: 'Bit Mask',
    bitField: 'Ekstraktor Bidang Bit'
  },

  calculators: {
    title: 'Kalkulator',
    add: 'Tambah',
    subtract: 'Kurang',
    multiply: 'Kali',
    divide: 'Bagi',
    modulo: 'Modulo',
    power: 'Pangkat'
  },

  messages: {
    invalidInput: 'Angka tidak valid untuk basis yang dipilih',
    outOfRange: 'Angka melebihi rentang panjang bit yang dipilih',
    copied: 'Hasil konversi telah disalin ke clipboard',
    conversionComplete: 'Konversi selesai'
  }
};