export default {
  name: 'Pemformat Kode',
  description: 'Memformat dan memperindah kode dengan penyorotan sintaks dan indentasi',
  languages: {
    title: 'Bahasa',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown',
    php: 'PHP',
    python: 'Python',
    ruby: 'Ruby',
    java: 'Java',
    csharp: 'C#',
    cpp: 'C++',
    typescript: 'TypeScript'
  },
  actions: {
    beautify: 'Perindah',
    minify: 'Kompres',
    clear: 'Hapus',
    copy: 'Salin',
    download: 'Unduh',
    upload: 'Unggah File'
  },
  options: {
    title: 'Opsi',
    indentSize: 'Ukuran Indentasi',
    indentWith: 'Jenis Indentasi',
    spaces: 'Spasi',
    tabs: 'Tab',
    lineBreaks: 'Gaya Baris Baru',
    quoteStyle: 'Gaya Kutipan',
    bracketStyle: 'Gaya Kurung',
    preserveNewlines: 'Pertahankan Baris Baru',
    endWithNewline: 'Akhiri dengan Baris Baru',
    removeComments: 'Hapus Komentar',
    wrapLineLength: 'Panjang Pembungkus Baris',
    lineNumbers: 'Nomor Baris',
    showLineNumbers: 'Tampilkan Nomor Baris',
    wrapLines: 'Pembungkusan Otomatis',
    theme: 'Tema',
    autoDetect: 'Deteksi Otomatis',
    tryAutoDetect: 'Coba Deteksi Bahasa Otomatis'
  },
  input: {
    title: 'Input',
    placeholder: 'Tempel kode Anda di sini...'
  },
  output: {
    title: 'Output',
    placeholder: 'Kode yang telah diformat akan muncul di sini...'
  },
  messages: {
    copied: 'Tersalin ke clipboard!',
    beautifySuccess: 'Pemformatan kode berhasil',
    minifySuccess: 'Kompresi kode berhasil',
    beautifyError: 'Gagal memformat kode',
    minifyError: 'Gagal mengompres kode',
    emptyCode: 'Masukkan kode yang akan diformat',
    fileTooBig: 'File terlalu besar (maksimal 2MB)',
    invalidFile: 'Jenis file tidak valid atau tidak didukung',
    preview: 'Pratinjau',
    HTMLCode: 'Kode HTML',
  },
  stats: {
    original: 'Asli',
    beautified: 'Setelah Diperindah',
    minified: 'Setelah Dikompres',
    size: 'Ukuran',
    characters: 'Karakter',
    lines: 'Jumlah Baris'
  },
  tips: {
    title: 'Tips Penggunaan',
    tip1: 'Pilih bahasa pemrograman yang sesuai untuk efek penyorotan sintaks terbaik',
    tip2: 'Pilih berbagai gaya tema yang sesuai dengan gaya situs web Anda',
    tip3: 'Salin kode HTML yang dihasilkan, bisa langsung ditempel ke editor atau situs web yang mendukung HTML',
    tip4: 'Kode yang disorot mendukung mode adaptif dan gelap',
    tip5: 'Menambahkan nomor baris saat menampilkan kode dapat meningkatkan keterbacaan dan kemudahan referensi'
  }
}