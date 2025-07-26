export default {
  name: 'Penampil EXIF Gambar',
  description: 'Lihat dan analisis metadata EXIF dalam foto',

  upload: {
    title: 'Unggah Gambar',
    dropzone: 'Seret dan lepas gambar di sini atau klik untuk menelusuri',
    maxSize: 'Ukuran file maksimum: 15MB',
    supportedFormats: 'Format yang didukung: JPG, TIFF, HEIC, PNG',
    anyImageFile: 'File gambar apa pun yang mengandung data EXIF'
  },

  display: {
    title: 'Informasi Gambar',
    noExif: 'Tidak ditemukan data EXIF dalam gambar ini',
    basicInfo: 'Informasi Dasar',
    camera: 'Informasi Kamera',
    exposure: 'Informasi Eksposur',
    location: 'Informasi Lokasi',
    dates: 'Informasi Tanggal',
    advanced: 'Data EXIF Lanjutan',
    thumbnail: 'Thumbnail EXIF'
  },

  exif: {
    fileName: 'Nama File',
    fileSize: 'Ukuran File',
    fileType: 'Tipe File',
    dimensions: 'Dimensi',
    make: 'Pembuat Kamera',
    model: 'Model Kamera',
    lens: 'Lensa',
    focalLength: 'Panjang Fokus',
    focalLength35: 'Panjang Fokus (35mm)',
    aperture: 'Apertur',
    fNumber: 'Nilai F',
    exposureTime: 'Waktu Eksposur',
    shutterSpeed: 'Kecepatan Rana',
    iso: 'ISO',
    exposureMode: 'Mode Eksposur',
    exposureProgram: 'Program Eksposur',
    meteringMode: 'Mode Pengukuran',
    flash: 'Flash',
    flashMode: 'Mode Flash',
    whiteBalance: 'Keseimbangan Warna Putih',
    exposureBias: 'Kompensasi Eksposur',
    latitude: 'Lintang',
    longitude: 'Bujur',
    altitude: 'Ketinggian',
    locationName: 'Nama Lokasi',
    dateOriginal: 'Tanggal Pengambilan',
    dateDigitized: 'Tanggal Digitalisasi',
    dateModified: 'Tanggal Modifikasi',
    software: 'Perangkat Lunak',
    artist: 'Artis',
    copyright: 'Hak Cipta',
    resolution: 'Resolusi',
    colorSpace: 'Ruang Warna',
    orientation: 'Orientasi',
    compression: 'Kompresi',
    bitsPerSample: 'Bit per Sampel',
    maxAperture: 'Apertur Maksimum',
    contrast: 'Kontras',
    saturation: 'Saturasi',
    sharpness: 'Ketajaman',
    brightness: 'Kecerahan',
    sceneCaptureType: 'Tipe Pengambilan Adegan',
    gainControl: 'Kontrol Gain',
    serialNumber: 'Nomor Seri',
    width: 'Lebar',
    height: 'Tinggi',
  },

  map: {
    title: 'Lokasi Foto',
    show: 'Tampilkan di Peta',
    noLocation: 'Tidak ada data lokasi yang tersedia',
    directions: 'Dapatkan Petunjuk Arah',
    copy: 'Salin Koordinat',
    warning: 'Peringatan: Gambar ini mengandung data lokasi. Berhati-hatilah saat membagikannya.'
  },

  actions: {
    showAll: 'Tampilkan Semua Metadata',
    hideAll: 'Sembunyikan Semua Metadata',
    copyAll: 'Salin Semua Metadata',
    save: 'Simpan Metadata sebagai JSON',
    removeMeta: 'Hapus Metadata',
    download: 'Unduh Gambar Tanpa Metadata',
    viewFullSize: 'Lihat Ukuran Asli',
    refresh: 'Muat Ulang Data'
  },

  settings: {
    title: 'Pengaturan Tampilan',
    showGroups: 'Kelompokkan Metadata',
    showRaw: 'Tampilkan Nilai Mentah',
    showTechnical: 'Tampilkan Data Teknis',
    showFiltered: 'Sembunyikan Kolom Kosong',
    darkMode: 'Mode Gelap',
    mapProvider: 'Penyedia Peta'
  },

  tips: {
    privacy: 'Tips Privasi: Foto mungkin mengandung data pribadi seperti lokasi dan informasi perangkat.',
    noExif: 'Tidak melihat data EXIF? Beberapa media sosial dan alat pengeditan gambar menghapus metadata.',
    rawView: 'Beralih ke "Tampilan Mentah" untuk melihat semua metadata yang tersedia.'
  },

  messages: {
    copied: 'Metadata telah disalin ke clipboard',
    saved: 'Metadata telah disimpan sebagai file JSON',
    noExif: 'Tidak ditemukan data EXIF dalam gambar ini',
    metadataRemoved: 'Metadata berhasil dihapus',
    imageLoaded: 'Gambar berhasil dimuat',
    notUse: 'Tidak Digunakan',
    use: 'Digunakan',
    auto: 'Otomatis',
    manual: 'Manual',
    reset: 'Diatur Ulang',
    exifExtracted: 'Data EXIF telah diekstrak',
  },

  error: {
    copyFailed: 'Gagal menyalin',
    exportFailed: 'Gagal mengekspor',
    exifExtractionFailed: 'Gagal mengekstrak data EXIF',
    imageLoadFailed: 'Gagal memuat gambar',
  },

  orientation: {
    normal: 'Normal',
    horizontalFlip: 'Flip Horizontal',
    rotate180: 'Putar 180°',
    verticalFlip: 'Flip Vertikal',
    rotate90VerticalFlip: 'Putar 90° dan Flip Vertikal',
    rotate90: 'Putar 90°',
    rotate90HorizontalFlip: 'Putar 90° dan Flip Horizontal',
    rotate270: 'Putar 270°'
  }
};