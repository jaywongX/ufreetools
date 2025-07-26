export default {
  name: 'Pengkode/Pengurai Base64',
  description: 'Konversi cepat antara teks dan pengkodean Base64',

  mode: {
    title: 'Mode',
    encode: 'Enkode',
    decode: 'Dekode'
  },

  input: {
    title: 'Input',
    placeholder: 'Masukkan teks yang akan diproses...',
    clear: 'Bersihkan',
    copy: 'Salin',
    paste: 'Tempel',
    upload: 'Unggah berkas',
    dragDrop: 'Seret dan lepas berkas di sini atau klik untuk mengunggah',
    textOption: 'Teks',
    fileOption: 'Berkas',
    hexOption: 'Hex',
    selectFile: 'Pilih berkas',
  },

  output: {
    title: 'Output',
    placeholder: 'Hasil akan ditampilkan di sini...',
    copy: 'Salin',
    download: 'Unduh',
    empty: 'Belum ada output'
  },

  options: {
    title: 'Opsi',
    encoding: 'Pengkodean karakter',
    encodings: {
      utf8: 'UTF-8',
      ascii: 'ASCII',
      iso88591: 'ISO-8859-1',
      windows1252: 'Windows-1252'
    },
    urlSafe: 'Gunakan pengkodean aman URL',
    autoDecode: 'Deteksi dan dekode otomatis',
    includeDataURI: 'Sertakan awalan Data URI',
    trimWhitespace: 'Hapus spasi kosong',
    preserveLineBreaks: 'Pertahankan jeda baris',
    addImageHeader:'Tambahkan header Base64 gambar',
  },

  dataUri: {
    title: 'Data URI',
    mimeType: 'Tipe MIME',
    common: 'Tipe umum',
    custom: 'Kustom'
  },

  messages: {
    copied: 'Tersalin ke clipboard',
    copyFailed: 'Gagal menyalin',
    pasteFailed: 'Gagal menempel',
    uploadSuccess: 'Berkas berhasil diunggah',
    uploadFailed: 'Gagal mengunggah berkas',
    readFailed: 'Gagal membaca berkas',
    invalidBase64: 'Pengkodean Base64 tidak valid',
    invalidHex: 'Pengkodean Hex tidak valid',
    fileTooLarge: 'Berkas terlalu besar, silakan unduh untuk melihat',
    processError: 'Terjadi kesalahan saat memproses',
    encodeSuccess: 'Enkode berhasil',
    decodeSuccess: 'Dekode berhasil',
    processing: 'Memproses...'
  },

  mimeTypes: {
    'text/plain': 'Teks',
    'application/json': 'JSON',
    'text/html': 'HTML',
    'text/css': 'CSS',
    'text/javascript': 'JavaScript',
    'application/xml': 'XML',
    'image/jpeg': 'Gambar JPEG',
    'image/png': 'Gambar PNG',
    'image/gif': 'Gambar GIF',
    'image/svg+xml': 'Gambar SVG',
    'application/pdf': 'Dokumen PDF'
  },

  tips: {
    title: 'Tips penggunaan',
    tip1: 'Pengkodean Base64 dapat mengubah data biner apa pun ke format teks biasa',
    tip2: 'Gunakan opsi aman URL untuk menghilangkan karakter "+" dan "/" dari Base64 standar',
    tip3: 'Gunakan awalan Data URI untuk langsung menggunakan data yang dikodekan dalam tag img HTML dan lainnya',
    tip4: 'Pengkodean berkas besar akan menggunakan lebih banyak sumber daya, disarankan maksimal 2MB',
    tip5: 'Beberapa karakter khusus mungkin memerlukan pengkodean karakter tertentu untuk diproses dengan benar'
  },

  about: {
    title: 'Tentang pengkodean/penguraian Base64',
    description: 'Base64 adalah metode representasi data biner menggunakan 64 karakter yang dapat dicetak, sering digunakan dalam konteks pemrosesan teks untuk merepresentasikan, mentransmisikan, dan menyimpan data biner.'
  },

  features: {
    title: 'Penjelasan fitur',
    multiInput: 'Mendukung tiga metode input: teks, Hex, dan berkas',
    charsetSupport: 'Mendukung penguraian set karakter UTF-8 dan GBK',
    imagePreview: 'Mendukung pratinjau gambar (berkas gambar di bawah 1MB)',
    fileDownload: 'Mendukung unduhan berbagai format berkas (default format PDF)',
    chunkProcessing: 'Pemrosesan berkas besar per bagian, menampilkan progres secara real-time',
    autoDetect: 'Deteksi otomatis dan pratinjau tipe gambar'
  },

  notes: {
    title: 'Catatan penting',
    sizeIncrease: 'Pengkodean Base64 akan menambah ukuran data sekitar 33%',
    chunkProcessing: 'Pemrosesan berkas besar dilakukan per bagian, bilah progres ditampilkan dalam dua tahap',
    largeFiles: 'Berkas di atas 10MB hanya mendukung unduhan, tidak menampilkan konten teks',
    fileInput: 'Disarankan menggunakan metode input berkas untuk berkas besar, hindari menempel di kotak teks'
  },

  fileTypeLabel: {
    pdf: 'Dokumen PDF',
    txt: 'Berkas teks',
    jpg: 'Gambar JPG', 
    png: 'Gambar PNG', 
    zip: 'Arsip ZIP',
    bin: 'Berkas biner',
  }
};