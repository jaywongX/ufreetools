export default {
  name: 'Generator Mosaik Gambar',
  description: 'Membuat seni mosaik dengan menggabungkan gambar-gambar kecil menjadi gambar yang lebih besar',

  upload: {
    title: 'Unggah Gambar Utama',
    dropzone: 'Seret dan lepas gambar utama di sini atau klik untuk menjelajah',
    maxSize: 'Ukuran file maksimum: 15MB',
    supportedFormats: 'Format yang didukung: JPG, PNG, WEBP'
  },

  tiles: {
    title: 'Gambar Ubin',
    uploadTiles: 'Unggah Gambar Ubin',
    dropzoneTiles: 'Seret dan lepas gambar ubin di sini atau klik untuk menjelajah',
    maxTiles: 'Maksimal {count} gambar',
    useFolder: 'Unggah Folder Gambar',
    orUseSample: 'Atau gunakan galeri contoh',
    sampleSets: 'Set Ubin Contoh',
    nature: 'Alam',
    people: 'Orang',
    art: 'Seni',
    abstract: 'Abstrak',
    animals: 'Hewan',
    clearAll: 'Hapus Semua Ubin'
  },

  settings: {
    title: 'Pengaturan Mosaik',
    tileSize: 'Ukuran Ubin',
    small: 'Kecil (detail)',
    medium: 'Sedang',
    large: 'Besar (kasar)',
    square: 'Persegi',
    circle: 'Lingkaran',
    applicationMode: 'Mode Aplikasi Mosaik',
    all: 'Seluruh Gambar',
    selectRegion: 'Pilih Area',
    selectingRegion: 'Memilih area...',
    autoDetectFaces: 'Deteksi Wajah Otomatis',
    detectFaces: 'Deteksi Wajah',
    detectFacesDescription: 'Mendeteksi wajah dalam gambar dan secara otomatis menerapkan mosaik',
    edgeSmoothing: 'Pelepasan Tepi',
    edgeSmoothingDescription: 'Melicinkan tepi ubin mosaik untuk transisi yang lebih alami',
    custom: 'Kustom',
    width: 'Lebar',
    height: 'Tinggi',
    tilesWide: 'Jumlah Ubin Lebar',
    tilesHigh: 'Jumlah Ubin Tinggi',
    colorMatch: 'Pencocokan Warna',
    intensity: 'Intensitas',
    low: 'Rendah',
    high: 'Tinggi',
    reuseTiles: 'Gunakan Ulang Ubin',
    allowDuplicates: 'Izinkan Duplikat',
    maxUses: 'Penggunaan Maksimum per Ubin',
    colorAdjustment: 'Penyesuaian Warna',
    adjustTiles: 'Sesuaikan Warna Ubin untuk Cocok',
    blendOriginal: 'Campur dengan Gambar Asli',
    blendAmount: 'Jumlah Pencampuran',
    random: 'Variasi Acak',
    shuffle: 'Acak Ubin'
  },

  advanced: {
    title: 'Opsi Lanjutan',
    algorithm: 'Algoritma Pencocokan',
    algorithms: {
      average: 'Rata-rata Warna',
      dominant: 'Warna Dominan',
      histogram: 'Histogram Warna',
      pattern: 'Pencocokan Pola'
    },
    tileShape: 'Bentuk Ubin',
    shapes: {
      square: 'Persegi',
      circle: 'Lingkaran',
      hexagon: 'Segi Enam',
      triangle: 'Segitiga',
      random: 'Acak'
    },
    tileGap: 'Jarak Ubin',
    borderColor: 'Warna Border',
    backgroundColor: 'Warna Latar Belakang'
  },

  output: {
    fileName: 'Nama File',
    title: 'Output',
    preview: 'Pratinjau',
    original: 'Asli',
    mosaic: 'Mosaik',
    sideBySide: 'Tampilan Berdampingan',
    zoomIn: 'Perbesar',
    zoomOut: 'Perkecil',
    download: 'Unduh Mosaik',
    asJpg: 'Unduh sebagai JPG',
    asPng: 'Unduh sebagai PNG',
    highRes: 'Resolusi Tinggi',
    resolution: 'Resolusi Output',
    format: 'Format',
    quality: 'Kualitas',
    size: 'Ukuran',
    pixel: 'Pixel',
    pleaseSelectImage: 'Silakan pilih gambar',
    pleaseSelectImageAndAdjustSettings: 'Silakan pilih gambar dan sesuaikan pengaturan'
  },

  actions: {
    generate: 'Buat Mosaik',
    regenerate: 'Buat Ulang',
    cancel: 'Batalkan Pembuatan',
    reset: 'Reset',
    detectFaces: 'Deteksi Wajah',
    saveSettings: 'Simpan Pengaturan',
    loadSettings: 'Muat Pengaturan'
  },

  messages: {
    generating: 'Membuat mosaik... Ini mungkin membutuhkan waktu.',
    generationComplete: 'Mosaik berhasil dibuat!',
    notEnoughTiles: 'Gambar ubin tidak cukup. Silakan unggah lebih banyak gambar.',
    tileProcessing: 'Memproses gambar ubin: {progress}%',
    downloadStarted: 'Unduhan dimulai',
    settingsSaved: 'Pengaturan disimpan',
    selecting: 'Memilih area...',
    preview: 'Efek mosaik yang diterapkan akan ditampilkan di sini',
    faceDetected: 'Area wajah terdeteksi',
    facesDetected: '{count} wajah terdeteksi',
    noFacesDetected: 'Tidak ada wajah yang terdeteksi',
    loadingModels: 'Memuat model deteksi wajah...',
    faceDetectionFailed: 'Deteksi wajah gagal',
    reset: 'Di-reset',
    error: 'Error: {message}'
  }
};