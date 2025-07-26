export default {
  name: 'Formatter XML',
  description: 'Format, rapikan, dan validasi dokumen XML',

  options: {
    indentSize: 'Ukuran indentasi',
    useTabs: 'Gunakan tab',
    collapseContent: 'Ciutkan konten',
    maxLineWidth: 'Lebar baris maksimum',
    indentAttributes: 'Indentasi atribut',
    sortAttributes: 'Urutkan atribut',
    newlineAfterPI: 'Baris baru setelah instruksi pemrosesan',
    operationType: 'Jenis operasi',
    indentSettings: 'Pengaturan indentasi',
    displayOptions: 'Opsi tampilan',
    showLineNumbers: 'Tampilkan nomor baris'
  },

  indentOptions: {
    twoSpaces: '2 spasi',
    fourSpaces: '4 spasi',
    tabIndent: 'Indentasi tab'
  },

  actions: {
    format: 'Format XML',
    minify: 'Minifikasi XML',
    validate: 'Validasi',
    toJSON: 'Konversi ke JSON',
    copy: 'Salin',
    clear: 'Bersihkan',
    download: 'Unduh',
    upload: 'Unggah XML',
    beautify: 'Rapikan',
    copyCode: 'Salin kode'
  },

  messages: {
    copied: 'Tersalin ke clipboard!',
    formatSuccess: 'Berhasil memformat XML',
    formatError: 'Error saat memformat XML',
    validXml: 'XML valid',
    invalidXml: 'XML tidak valid: {0}',
    lineCol: 'Baris {line}, kolom {col}',
    minifySuccess: 'Berhasil meminifikasi XML',
    conversionSuccess: 'Konversi berhasil',
    conversionError: 'Error saat konversi',
    pleaseEnterXml: 'Masukkan konten XML',
    processingError: 'Error saat memproses XML: {0}',
    formatResult: 'Hasil format',
    characterCount: 'Jumlah karakter: {0}',
    lineCount: 'Jumlah baris: {0}',
    characterAndLineCount: 'Jumlah karakter: {0} | Jumlah baris: {1}'
  },

  input: {
    xmlInput: 'Input XML',
    placeholder: 'Tempel atau ketik XML di sini...'
  },

  examples: {
    title: 'Contoh XML',
    description: 'Klik untuk memuat contoh:',
    simpleXml: 'XML sederhana',
    bookstore: 'Katalog toko buku',
    complexXml: 'XML kompleks'
  }
};