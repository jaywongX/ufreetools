export default {
  name: 'Kompresor Gambar',
  description: 'Kompres dan optimalkan gambar tanpa mengurangi kualitas',

  input: {
    dragDrop: 'Seret dan lepas gambar di sini atau klik untuk mengunggah',
    supportedFormats: 'Format yang didukung: JPG, PNG, GIF, WEBP',
    selected: '{count} file dipilih',
    changeFiles: 'Ganti File',
    width: 'Lebar',
    height: 'Tinggi',
    keepOriginal: 'Setel ke 0 untuk mempertahankan ukuran asli',
  },

  results: {
    originalImage: 'Gambar Asli',
    compressedImage: 'Setelah Kompresi',
    filename: 'Nama File:',
    dimensions: 'Dimensi:',
    fileSize: 'Ukuran File:',
    compressionRatio: 'Rasio Kompresi:',
    viewOriginal: 'Lihat Asli',
  },

  about: {
    title: 'Tentang Kompresi Gambar',
    description: 'Alat ini menggunakan Canvas API browser untuk mengompres gambar. Semua pemrosesan dilakukan di perangkat Anda, gambar tidak diunggah ke server.',
    principlesTitle: 'Prinsip Kompresi:',
    principles: {
      resize: 'Ubah ukuran gambar: ukuran lebih kecil berarti data piksel lebih sedikit',
      quality: 'Turunkan kualitas: kurangi parameter kualitas gambar untuk mengurangi ukuran file',
      format: 'Konversi format: format gambar berbeda memiliki karakteristik kompresi berbeda'
    },
    useCasesTitle: 'Skenario Penggunaan:',
    useCases: {
      web: 'Optimasi gambar website untuk meningkatkan kecepatan loading',
      email: 'Perkecil ukuran lampiran email',
      social: 'Kompresi sebelum unggah ke media sosial',
      storage: 'Optimasi penyimpanan'
    }
  },

  options: {
    quality: 'Kualitas',
    qualityValue: 'Kualitas ({value}%)',
    lowQuality: 'Kualitas Rendah/Ukuran Kecil',
    highQuality: 'Kualitas Tinggi/Ukuran Besar',
    format: 'Format Output',
    maxSize: 'Ukuran Maksimal ({width} × {height} px)',
    keepExif: 'Pertahankan Data EXIF',
    resizeImage: 'Ubah Ukuran Gambar',
    maxWidth: 'Lebar Maksimal',
    maxHeight: 'Tinggi Maksimal',
    compressionLevel: 'Tingkat Kompresi',
    maxFileSize: 'Ukuran File Target',
    optimizationLevel: 'Tingkat Optimasi',
    convertTo: 'Konversi ke'
  },

  presets: {
    web: 'Optimasi Web',
    highQuality: 'Kualitas Tinggi',
    balanced: 'Seimbang',
    smallSize: 'Ukuran Kecil',
    custom: 'Kustom'
  },

  formats: {
    original: 'Format Asli',
    jpeg: 'JPEG',
    jpegDesc: 'Format JPEG cocok untuk foto, tidak mendukung transparansi',
    png: 'PNG',
    pngDesc: 'Format PNG mendukung transparansi, cocok untuk ikon dan ilustrasi',
    webp: 'WebP',
    webpDesc: 'Format WebP memberikan rasio kompresi tinggi, ideal untuk web',
    avif: 'AVIF',
    gif: 'GIF',
    bmp: 'BMP'
  },

  resizeOptions: {
    noResize: 'Jangan Ubah Ukuran',
    maxDimension: 'Dimensi Maksimal',
    exactDimensions: 'Dimensi Tepat',
    percentage: 'Skala Persentase'
  },

  actions: {
    upload: 'Unggah Gambar',
    compress: 'Kompres',
    processing: 'Memproses...',
    download: 'Unduh',
    downloadAll: 'Unduh Semua',
    batchDownload: 'Unduh Batch',
    clear: 'Hapus',
    addMore: 'Tambah Gambar',
    removeAll: 'Hapus Semua',
    preview: 'Pratinjau',
    delete: 'Hapus'
  },

  table: {
    filename: 'Nama File',
    originalSize: 'Ukuran Asli',
    original: 'Ukuran File Asli',
    compressedSize: 'Ukuran Setelah Kompresi',
    compressed: 'Ukuran Terkompresi',
    savings: 'Penghematan',
    ratio: 'Rasio Kompresi',
    quality: 'Kualitas',
    dimensions: 'Dimensi',
    originalDimensions: 'Dimensi Asli',
    newDimensions: 'Dimensi Baru',
    status: 'Status'
  },

  messages: {
    dropped: '{count} gambar diunggah',
    uploading: 'Mengunggah gambar...',
    compressing: 'Mengompres gambar...',
    compressed: 'Gambar berhasil dikompresi',
    downloadPreparing: 'Mempersiapkan unduhan...',
    downloadReady: 'Siap diunduh',
    cleared: 'Semua gambar dihapus',
    tooManyFiles: 'Terlalu banyak file. Maksimal: {max}',
    fileTooLarge: 'File terlalu besar. Maksimal: {max}MB',
    unsupportedFormat: 'Format tidak didukung: {format}',
    imageError: 'Error saat memproses gambar: {error}',
    batchDownloadNotSupported: 'Unduh batch membutuhkan library JSZip. Silakan unduh satu per satu atau tambahkan library zip.',
    batchDownloadError: 'Error saat mengunduh batch: {error}',
    invalidImage: 'Pilih file gambar yang valid'
  }
};