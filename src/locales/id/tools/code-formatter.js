export default {
  name: 'Pemformatan Kode',
  description: 'Memformat dan memperindah kode dalam berbagai bahasa',
  languages: {
    title: 'Bahasa',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown'
  },
  options: {
    title: 'Opsi',
    indent: 'Indentasi',
    tabSize: 'Ukuran Tab',
    insertSpaces: 'Sisipkan Spasi',
    formatSelection: 'Format Seleksi',
    formatOnType: 'Format Saat Mengetik',
    removeComments: 'Hapus Komentar',
    mangle: 'Obfuskasi Nama Variabel',
    lineBreak: 'Gaya Baris Baru'
  },
  actions: {
    beautify: 'Perindah',
    minify: 'Kompres',
    format: 'Format',
    copy: 'Salin Hasil',
    clear: 'Kosongkan',
    download: 'Unduh',
    paste: 'Tempel dari Clipboard',
    loadSample: 'Muat Contoh Kode'
  },
  messages: {
    formatSuccess: 'Pemformatan kode berhasil',
    formatError: 'Terjadi kesalahan saat memformat kode',
    copied: 'Tersalin ke clipboard!',
    languageChangeWarning: 'Mengubah bahasa akan mereset kode Anda. Lanjutkan?'
  },
  errors: {
    emptyCode: 'Masukkan kode yang akan diformat',
    invalidJson: 'JSON tidak valid',
    jsCompressionError: 'Kesalahan kompresi JavaScript'
  },
  input: 'Input',
  output: 'Output',
  placeholders: {
    input: 'Tempel kode Anda di sini...',
    output: 'Kode yang telah diformat akan muncul di sini...'
  },
  characters: 'Karakter',
  space: 'Spasi',
  spaces: 'Spasi',
  auto: 'Otomatis',
  tips: {
    title: 'Tips Penggunaan',
    selectLanguage: 'Untuk hasil pemformatan terbaik, pilih bahasa yang sesuai dengan kode Anda.',
    beautifyMinify: 'Gunakan fitur "Perindah" untuk membuat kode lebih mudah dibaca, gunakan "Kompres" untuk mengurangi ukuran file.',
    customizeOptions: 'Gunakan panel pengaturan di bawah untuk menyesuaikan opsi pemformatan.',
    keyboard: 'Tekan tombol Tab di editor untuk menyisipkan indentasi.'
  }
}