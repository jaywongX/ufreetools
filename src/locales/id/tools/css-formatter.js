export default {
  name: 'Format CSS',
  description: 'Format dan perindah kode CSS untuk meningkatkan keterbacaan',
  options: {
    indentSize: 'Ukuran Indentasi',
    indentWithTabs: 'Gunakan Tab untuk Indentasi',
    convertQuotes: 'Konversi Tanda Kutip',
    sortSelectors: 'Urutkan Selektor',
    sortProperties: 'Urutkan Properti',
    compressColors: 'Kompres Nilai Warna',
    expandShorthand: 'Perluas Properti Singkat'
  },
  actions: {
    format: 'Format CSS',
    minify: 'Kompres',
    clear: 'Hapus',
    copy: 'Salin',
    download: 'Unduh',
    upload: 'Unggah File'
  },
  messages: {
    copied: 'Telah disalin ke clipboard!',
    formatSuccess: 'CSS berhasil diformat',
    formatError: 'Terjadi kesalahan saat memformat CSS',
    invalidCss: 'Sintaks CSS tidak valid'
  }
}