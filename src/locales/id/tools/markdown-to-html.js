export default {
  name: 'Konversi Markdown ke HTML',
  description: 'Ubah teks Markdown menjadi HTML dengan opsi yang dapat disesuaikan',

  input: {
    title: 'Input Markdown',
    placeholder: 'Ketik atau tempel teks Markdown Anda di sini...',
    loadSample: 'Muat Contoh',
    clearInput: 'Hapus',
    uploadFile: 'Unggah File Markdown',
    paste: 'Tempel dari Clipboard',
    charCount: 'Jumlah Karakter',
    lineCount: 'Jumlah Baris'
  },

  output: {
    title: 'Output HTML',
    copied: 'HTML telah disalin ke clipboard',
    download: 'Unduh HTML',
    copyOutput: 'Salin HTML',
    clearOutput: 'Hapus Output',
    previewTab: 'Pratinjau',
    htmlTab: 'Kode HTML',
    previewMode: 'Mode Pratinjau',
    sourceMode: 'Mode Sumber HTML'
  },

  options: {
    title: 'Opsi Konversi',
    headerIds: 'ID Judul Otomatis',
    gfm: 'Markdown Gaya GitHub',
    tables: 'Tabel',
    breaks: 'Garis Baru',
    smartLists: 'Daftar Pintar',
    smartypants: 'Tanda Baca Pintar',
    xhtml: 'XHTML',
    highlight: 'Penyorotan Sintaks',
    sanitize: 'Bersihkan HTML',
    footnotes: 'Catatan Kaki',
    taskLists: 'Daftar Tugas',
    emoji: 'Dukungan Emoji',
    includeStyle: 'Sertakan CSS Default',
    realtimePreview: 'Pratinjau Real-time',
    scrollSync: 'Sinkronisasi Scroll',
    htmlOptions: 'Opsi HTML'
  },

  styles: {
    title: 'Opsi Gaya',
    theme: 'Tema',
    codeTheme: 'Tema Kode',
    customCSS: 'CSS Kustom',
    fontSize: 'Ukuran Font',
    lineHeight: 'Tinggi Baris',
    enableCustom: 'Aktifkan Gaya Kustom'
  },

  themes: {
    default: 'Default',
    github: 'GitHub',
    bootstrap: 'Bootstrap',
    bulma: 'Bulma',
    medium: 'Medium',
    solarized: 'Solarized',
    dark: 'Mode Gelap',
    custom: 'Kustom'
  },

  codeThemes: {
    default: 'Default',
    github: 'GitHub',
    vscode: 'VS Code',
    atom: 'Atom',
    dracula: 'Dracula',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },

  actions: {
    convert: 'Konversi ke HTML',
    clearAll: 'Hapus Semua',
    copyHtml: 'Salin HTML',
    saveAsHtml: 'Simpan sebagai HTML',
    generateToc: 'Buat Daftar Isi'
  },

  messages: {
    conversionSuccess: 'Konversi Markdown berhasil',
    conversionFailed: 'Konversi Markdown gagal: {error}',
    emptyInput: 'Masukkan teks Markdown untuk dikonversi',
    copied: 'HTML telah disalin ke clipboard',
    tocGenerated: 'Daftar isi telah dibuat'
  },

  alerts: {
    copied: 'Tersalin ke clipboard',
    copyFailed: 'Gagal menyalin ke clipboard',
    pasteFailed: 'Gagal menempel dari clipboard',
    confirmClear: 'Yakin ingin menghapus input?'
  },

  status: {
    lastConversion: 'Waktu konversi terakhir'
  },

  samples: {
    basic: 'Contoh Dasar',
    extended: 'Contoh Lanjutan',
    article: 'Contoh Artikel'
  },

  download: {
    title: 'Ekspor Markdown ke HTML'
  }
};