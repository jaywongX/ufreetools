export default {
  name: 'Alat Format HTML',
  description: 'Memformat dan mempercantik kode HTML untuk meningkatkan keterbacaan',
  formatMode: 'Mode Format',
  beautify: 'Perindah',
  minify: 'Minifikasi',
  formatOptions: 'Opsi Format',
  removeComments: 'Hapus Komentar',
  preserveComments: 'Pertahankan Komentar',
  showLineNumbers: 'Tampilkan Nomor Baris',
  helpText: 'Alat Perindah/Minifikasi HTML membantu pengembang dengan cepat merapikan atau mengoptimalkan kode HTML, meningkatkan keterbacaan atau mengurangi ukuran file.',
  input: 'Input HTML',
  inputPlaceholder: 'Tempel atau ketik kode HTML di sini...',
  examples: 'Contoh',

  exampleNames: {
    simple: 'HTML Sederhana',
    complex: 'Halaman HTML Kompleks'
  },

  beautifiedResult: 'Hasil Perindahan',
  minifiedResult: 'Hasil Minifikasi',

  stats: {
    chars: 'Jumlah Karakter',
    lines: 'Jumlah Baris',
    reduction: 'Berkurang {chars} karakter ({percent}%)'
  },

  indentOptions: {
    spaces: '{count} spasi',
    tab: 'Indentasi Tab'
  },

  errorMessages: {
    emptyInput: 'Masukkan kode HTML yang akan diproses',
    processingFailed: 'Gagal memproses HTML: {message}'
  },

  options: {
    indentSize: 'Ukuran Indentasi',
    wrapLength: 'Panjang Pembungkusan',
    indentInnerHtml: 'Indentasi HTML Internal',
    preserveNewlines: 'Pertahankan Baris Baru',
    maxPreserveNewlines: 'Jumlah Maksimal Baris Baru',
    wrapAttributes: 'Bungkus Atribut',
    sortAttributes: 'Urutkan Atribut',
    sortClassNames: 'Urutkan Nama Kelas'
  },

  actions: {
    format: 'Format HTML',
    minify: 'Minifikasi',
    clear: 'Bersihkan',
    copy: 'Salin',
    download: 'Unduh',
    upload: 'Unggah File'
  },

  messages: {
    copied: 'Tersalin ke clipboard!',
    formatSuccess: 'Berhasil memformat HTML',
    formatError: 'Terjadi kesalahan saat memformat HTML',
    invalidHtml: 'Sintaks HTML tidak valid'
  }
};