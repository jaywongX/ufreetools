export default {
  name: 'Generator UUID',
  description: 'Menghasilkan UUID dan GUID acak dengan opsi yang dapat disesuaikan, cocok untuk kunci utama database, nama file sementara, dan skenario lainnya',

  options: {
    version: 'Versi UUID',
    quantity: 'Jumlah',
    format: 'Opsi Format',
    includeDash: 'Sertakan tanda hubung (-)',
    generateCount: 'Jumlah yang Dihasilkan'
  },

  versions: {
    v1: 'Versi 1 (berbasis waktu)',
    v4: 'Versi 4 (acak)',
    v5: 'Versi 5 (namespace)',
    custom: 'Kustom'
  },

  quantities: {
    single: 'Tunggal',
    five: '5',
    ten: '10',
    twenty: '20'
  },

  formats: {
    default: 'Default',
    base64: 'Base64',
    binary: 'Biner',
    hex: 'Heksadesimal',
    noDash: 'Tanpa Tanda Hubung'
  },

  actions: {
    generate: 'Hasilkan UUID',
    copy: 'Salin',
    copyAll: 'Salin Semua',
    clear: 'Hapus Hasil',
    download: 'Unduh sebagai TXT'
  },

  messages: {
    copied: 'Tersalin ke clipboard!',
    generated: 'UUID berhasil dihasilkan',
    tooMany: 'Jumlah maksimum yang diizinkan adalah 1000',
    invalidVersion: 'Versi UUID tidak valid',
    invalidNamespace: 'Namespace UUID tidak valid',
    copyFailed: 'Gagal menyalin'
  }
};