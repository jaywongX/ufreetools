export default {
  name: 'Pemformatan JavaScript',
  description: 'Alat pemformatan dan validasi JavaScript online, mendukung kompresi dan perapian',
  options: {
    indent: 'Indentasi',
    quotes: 'Gaya Kutipan',
    semicolons: 'Titik Koma',
    trailingComma: 'Koma Trailing'
  },
  actions: {
    format: 'Format JavaScript',
    minify: 'Kompres',
    beautify: 'Rapikan',
    clear: 'Hapus',
    copy: 'Salin',
    download: 'Unduh'
  },
  messages: {
    copied: 'Tersalin ke clipboard!',
    formatSuccess: 'Pemformatan JavaScript berhasil',
    formatError: 'Terjadi kesalahan saat memformat JavaScript'
  }
}