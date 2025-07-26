export default {
  name: 'Konversi Gambar Landscape ke Portrait',
  description: 'Mengubah gambar horizontal ke format vertikal, cocok untuk video pendek, wallpaper ponsel, dan posting media sosial',
  tags: ['Gambar', 'Konversi', 'Ponsel', 'Sosial', 'Story', 'Vertikal', 'Portrait'],

  upload: {
    title: 'Konverter Landscape ke Portrait',
    dropzone: 'Seret dan lepas gambar di sini',
    maxSize: 'Ukuran maksimal file: 10MB',
    supportedFormats: 'Format yang didukung: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Pengaturan Konversi',
    presets: 'Preset',
    conversionMode: 'Mode Konversi',
    modes: {
      crop: 'Potong',
      fill: 'Isi Warna',
      blur: 'Blur Latar Belakang',
      stretch: 'Regangkan Tepi',
      dualColor: 'Latar Dua Warna'
    },
    cropPosition: 'Posisi Potong',
    positions: {
      left: 'Kiri',
      center: 'Tengah',
      right: 'Kanan'
    },
    fillColor: 'Warna Isian',
    blurRadius: 'Radius Blur',
    stretchFactor: 'Faktor Regangan',
    topColor: 'Warna Atas',
    bottomColor: 'Warna Bawah',
    sizeOption: 'Ukuran Output',
    sizeModes: {
      auto: 'Otomatis',
      preset: 'Preset',
      custom: 'Kustom'
    },
    sizePresets: 'Preset Ukuran',
    outputSize: 'Ukuran Kustom',
    width: 'Lebar',
    height: 'Tinggi',
    dimensionsHint: 'Masukkan ukuran dalam piksel',
    outputFormat: 'Format Output',
    quality: 'Kualitas Gambar',
    advancedOptions: 'Opsi Lanjutan',
    preserveRatio: 'Pertahankan Rasio',
    sharpen: 'Tajamkan',
    addWatermark: 'Tambahkan Watermark',
    watermarkPlaceholder: 'Masukkan teks watermark',
    watermarkColor: 'Warna Watermark'
  },

  output: {
    preview: 'Pratinjau Output',
    before: 'Sebelum',
    after: 'Sesudah',
    dimensions: 'Dimensi'
  },

  actions: {
    selectImage: 'Pilih Gambar',
    convert: 'Konversi ke Portrait',
    download: 'Unduh Gambar',
    showSideBySide: 'Tampilkan Perbandingan',
    hideSideBySide: 'Sembunyikan Perbandingan',
    hideComparison: 'Sembunyikan Perbandingan'
  },

  messages: {
    convertPrompt: 'Unggah gambar horizontal dan konversi ke format vertikal',
    processing: 'Memproses gambar Anda...',
    imageOnly: 'Harap pilih file gambar'
  },

  examples: {
    title: 'Contoh Aplikasi',
    social: 'Buat story vertikal untuk Instagram, TikTok, dll.',
    socialTip: 'Mengubah foto horizontal menjadi konten vertikal yang menarik',
    mobile: 'Buat wallpaper ponsel dari gambar horizontal',
    mobileTip: 'Optimalkan gambar untuk berbagai rasio layar smartphone'
  }
};