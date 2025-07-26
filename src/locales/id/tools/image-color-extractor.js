export default {
  name: 'Ekstraktor Warna Gambar',
  description: 'Ekstrak palet warna dan warna dominan dari gambar',

  input: {
    title: 'Unggah Gambar',
    dropzone: 'Seret dan lepas gambar di sini atau klik untuk mengunggah',
    formats: 'Format yang didukung: JPG, PNG, GIF, WebP, SVG',
    browse: 'Jelajahi File',
    selectImage: 'Pilih Gambar',
    orText: 'atau',
    pasteUrl: 'Tempel URL Gambar:',
    loadUrl: 'Muat dari URL',
    urlPlaceholder: 'https://contoh.com/gambar.jpg',
    unnamed: 'Gambar Tanpa Nama'
  },

  options: {
    title: 'Opsi Ekstraksi',
    extractSettings: 'Pengaturan Ekstraksi',
    colorCount: 'Jumlah Warna',
    paletteSize: 'Ukuran Palet',
    paletteMin: 'Minimal (3)',
    paletteMax: 'Maksimal (20)',
    colorSimilarity: 'Kesamaan Warna',
    similiarityToggle: 'Izinkan warna serupa',
    quality: 'Kualitas Ekstraksi',
    colorModel: 'Model Warna',
    colorSpace: 'Ruang Warna',
    colorFormat: 'Format Warna',
    sortBy: 'Urutkan Warna Berdasarkan',
    sortByPopularity: 'Frekuensi Kemunculan',
    sortByLuminance: 'Luminansi',
    sortByHue: 'Rona',
    sortBySaturation: 'Saturasi',
    ignoreWhite: 'Abaikan Putih',
    ignoreBlack: 'Abaikan Hitam',
    threshold: 'Ambang Kesamaan'
  },

  colorModels: {
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB'
  },

  colorFormats: {
    hex: 'Heksadesimal (#RRGGBB)',
    rgb: 'RGB (0-255)',
    rgba: 'RGBA dengan Transparansi',
    hsl: 'HSL',
    hsla: 'HSLA dengan Transparansi',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },

  sortOptions: {
    prevalence: 'Frekuensi',
    luminance: 'Luminansi',
    hue: 'Rona',
    saturation: 'Saturasi',
    original: 'Urutan Asli'
  },

  colorSpaces: {
    srgb: 'sRGB',
    p3: 'Display P3',
    rec2020: 'Rec. 2020',
    prophoto: 'ProPhoto RGB'
  },

  results: {
    title: 'Warna yang Diekstrak',
    colorsFound: '{count} warna ditemukan',
    dominantColor: 'Warna Dominan',
    mainColor: 'Warna Utama',
    complementary: 'Warna Komplementer',
    palette: 'Palet Warna',
    colorPalette: 'Palet Warna',
    palettePreview: 'Pratinjau Palet',
    usage: 'Penggunaan Warna (%)',
    percentage: 'Persentase: {value}%',
    copyAll: 'Salin Semua Warna',
    clickToCopy: 'Klik untuk menyalin: {color}',
    downloading: 'Mengunduh palet...'
  },

  display: {
    originalImage: 'Gambar Asli',
    colorPalette: 'Palet Warna',
    uploadFirst: 'Silakan unggah gambar terlebih dahulu',
    clickExtract: 'Klik tombol "Ekstrak Warna" untuk mendapatkan palet warna gambar',
  },

  actions: {
    extract: 'Ekstrak Warna',
    extracting: 'Memproses...',
    download: 'Unduh Palet',
    copy: 'Salin',
    copyValue: 'Salin Nilai',
    reset: 'Reset',
    copyPalette: 'Salin Palet',
    exportJson: 'Ekspor ke JSON',
    exportCss: 'Ekspor ke Variabel CSS',
    exportSass: 'Ekspor ke Variabel SASS',
    exportSwatch: 'Ekspor ke Swatch ASE'
  },

  palette: {
    title: 'Palet Bernama',
    vibrant: 'Vibrant',
    muted: 'Muted',
    dark: 'Gelap',
    light: 'Terang',
    custom: 'Kustom'
  },

  messages: {
    imageLoaded: 'Gambar berhasil dimuat',
    processingImage: 'Memproses gambar...',
    extractionComplete: 'Ekstraksi warna selesai',
    extractionFailed: 'Gagal mengekstrak warna: {error}',
    copied: 'Tersalin ke clipboard',
    copiedColor: 'Tersalin: {color}',
    copiedAll: 'Semua warna tersalin',
    copyFailed: 'Gagal menyalin',
    resetDone: 'Reset selesai',
    invalidImage: 'File gambar tidak valid',
    noImageSelected: 'Tidak ada gambar yang dipilih'
  }
};