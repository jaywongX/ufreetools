export default {
  name: 'Formatter JSON',
  description: 'Alat pemformat dan validasi JSON online, mendukung kompresi dan perapian',

  options: {
    indent: 'Indentasi',
    sort: 'Urutkan kunci',
    compress: 'Kompresi',
    beautify: 'Perapian'
  },

  actions: {
    format: 'Format JSON',
    compress: 'Kompres',
    clear: 'Hapus',
    copy: 'Salin',
    download: 'Unduh',
    transferMeaning: 'Escape',
    contraposition: 'Unescape'
  },

  messages: {
    invalidJson: 'Sintaks JSON tidak valid',
    copied: 'Tersalin ke clipboard!',
    empty: 'Silakan masukkan konten JSON',
    formatTip: 'Tampilkan daftar properti setelah memformat atau mengompres JSON',
    formatSuccess: 'Pemformatan JSON berhasil',
    compressSuccess: 'Kompresi JSON berhasil',
    escapeSuccess: 'Escape JSON berhasil',
    unescapeSuccess: 'Unescape JSON berhasil',
    copyFailed: 'Gagal menyalin, silakan salin secara manual'
  },

  labels: {
    jsonData: 'Data JSON',
    propertyList: 'Daftar Properti',
    clickToCopy: '(Klik nilai untuk menyalin)'
  },

  placeholders: {
    jsonInput: 'Tempel data JSON Anda...'
  }
};