export default {
  name: 'Pengatur Gambar Massal',
  description: 'Sesuaikan, konversi, dan optimalkan banyak gambar sekaligus',

  input: {
    title: 'Input Gambar',
    dropzone: 'Seret dan lepas gambar di sini atau klik untuk menjelajah',
    addMore: 'Tambahkan lebih banyak gambar',
    selectImages: 'Pilih Gambar',
    clearAll: 'Hapus Semua',
    maxFiles: 'Maksimal {count} gambar',
    maxSize: 'Ukuran maks per gambar: {size}MB',
    supportedFormats: 'Format yang didukung: {formats}'
  },

  options: {
    title: 'Opsi Penyesuaian',
    settingsTitle: 'Pengaturan Penyesuaian',
    resizeMode: 'Mode Ukuran Ulang',
    resizeMethod: 'Metode Ukuran Ulang',
    pixelMode: 'Piksel',
    percentageMode: 'Persentase',
    maxDimensionMode: 'Ukuran Maksimum',
    outputFormat: 'Format Output',
    quality: 'Kualitas',
    width: 'Lebar',
    height: 'Tinggi',
    maintainAspectRatio: 'Pertahankan Rasio Aspek',
    maxWidth: 'Lebar Maksimum',
    maxHeight: 'Tinggi Maksimum',
    percentage: 'Persentase',
    backgroundColor: 'Warna Latar Belakang',
    naming: 'Penamaan Output',
    filenamePrefix: 'Awalan Nama File',
    filenameSuffix: 'Akhiran Nama File',
    applyToAllImages: 'Terapkan ke semua gambar',
    applyToAll: 'Terapkan ke Semua Gambar'
  },

  resizeModes: {
    exact: 'Ukuran Tepat',
    maxDimensions: 'Ukuran Maksimum',
    percentage: 'Skala Persentase',
    fit: 'Sesuaikan ke Dalam',
    cover: 'Tutupi',
    crop: 'Potong'
  },

  formats: {
    original: 'Sama dengan Sumber',
    jpg: 'JPG/JPEG',
    png: 'PNG',
    webp: 'WebP',
    gif: 'GIF',
    bmp: 'BMP',
    tiff: 'TIFF',
    svg: 'SVG',
    ico: 'ICO'
  },

  namingOptions: {
    original: 'Nama File Asli',
    dimensions: 'Asli + Dimensi',
    format: 'Asli + Format',
    custom: 'Pola Kustom',
    random: 'String Acak'
  },

  output: {
    title: 'Gambar yang Disesuaikan',
    downloadAll: 'Unduh Semua',
    downloadAsZip: 'Unduh sebagai ZIP',
    processingStatus: 'Memproses: {processed}/{total}',
    originalSize: 'Ukuran Asli',
    newSize: 'Ukuran Baru',
    reduction: 'Pengurangan',
    individualDownload: 'Unduh'
  },

  batch: {
    title: 'Pemrosesan Massal',
    process: 'Proses Semua Gambar',
    cancel: 'Batalkan Pemrosesan',
    selectPreset: 'Pilih Preset',
    savePreset: 'Simpan Pengaturan Saat Ini',
    progress: 'Proses Kemajuan'
  },

  watermark: {
    title: 'Watermark',
    enable: 'Tambahkan Watermark',
    text: 'Teks Watermark',
    image: 'Gambar Watermark',
    position: 'Posisi',
    opacity: 'Opasitas',
    rotation: 'Rotasi',
    size: 'Ukuran',
    padding: 'Padding'
  },

  positions: {
    topLeft: 'Kiri Atas',
    topCenter: 'Tengah Atas',
    topRight: 'Kanan Atas',
    middleLeft: 'Kiri Tengah',
    middleCenter: 'Tengah',
    middleRight: 'Kanan Tengah',
    bottomLeft: 'Kiri Bawah',
    bottomCenter: 'Tengah Bawah',
    bottomRight: 'Kanan Bawah'
  },

  actions: {
    resize: 'Ubah Ukuran',
    preview: 'Pratinjau',
    processing: 'Memproses...',
    reset: 'Atur Ulang',
    applySettings: 'Terapkan Pengaturan',
    resetSettings: 'Atur Ulang Pengaturan',
    cancel: 'Batalkan'
  },

  messages: {
    resizeSuccess: 'Pengubahan ukuran gambar berhasil',
    resizeFailed: 'Gagal mengubah ukuran gambar: {error}',
    invalidDimensions: 'Masukkan dimensi yang valid',
    invalidWidthHeight: 'Masukkan lebar dan tinggi yang valid',
    noImages: 'Tambahkan gambar untuk diubah ukurannya',
    noImagesToDownload: 'Tidak ada gambar untuk diunduh',
    processing: 'Memproses gambar...',
    processingComplete: 'Pemrosesan Selesai',
    processingError: 'Kesalahan saat memproses gambar',
    waitingForProcess: 'Menunggu Pemrosesan',
    downloadStarted: 'Pengunduhan Dimulai',
    allDownloaded: 'Semua gambar telah diunduh',
    presetSaved: 'Preset Disimpan',
    presetLoaded: 'Preset Dimuat',
    zipCreated: 'Paket ZIP dengan {count} gambar telah dibuat',
    zipError: 'Kesalahan saat membuat paket ZIP'
  },

  preview: {
    title: 'Pratinjau Gambar ({count} gambar)',
    selectImage: 'Pilih Gambar',
    batchSupport: 'Mendukung pemilihan banyak gambar sekaligus untuk diproses',
    download: 'Unduh',
    delete: 'Hapus'
  },

  qualityOptions: {
    fast: 'Pemrosesan Cepat',
    medium: 'Kualitas Sedang',
    high: 'Kualitas Tinggi (Direkomendasikan)',
    best: 'Kualitas Terbaik (Lebih Lambat)'
  }
};