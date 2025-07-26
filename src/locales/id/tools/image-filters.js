export default {
  name: 'Filter Gambar',
  description: 'Pratinjau langsung berbagai filter dan efek untuk gambar',

  upload: {
    title: 'Unggah Gambar',
    dropzone: 'Seret dan lepas gambar di sini atau klik untuk menelusuri',
    maxSize: 'Ukuran file maksimum: 10MB',
    supportedFormats: 'Format yang didukung: JPG, PNG, WEBP, GIF'
  },

  editor: {
    title: 'Editor Filter',
    original: 'Asli',
    filtered: 'Tersaring',
    reset: 'Reset Semua',
    undo: 'Undo',
    redo: 'Redo',
    zoomIn: 'Perbesar',
    zoomOut: 'Perkecil',
    fitToScreen: 'Sesuaikan ke Layar',
    showOriginal: 'Tampilkan Asli'
  },

  filters: {
    title: 'Filter',
    basic: 'Penyesuaian Dasar',
    brightness: 'Kecerahan',
    contrast: 'Kontras',
    saturation: 'Saturasi',
    hue: 'Rona',
    exposure: 'Eksposur',
    vibrance: 'Vibransi',
    temperature: 'Temperatur Warna',
    gamma: 'Gamma',
    clarity: 'Kejelasan',
    effects: 'Efek',
    grayscale: 'Skala Abu-abu',
    sepia: 'Sepia',
    vintage: 'Vintage',
    polaroid: 'Polaroid',
    duotone: 'Duotone',
    noise: 'Noise',
    pixelate: 'Pixelasi',
    blur: 'Blur',
    sharpen: 'Ketajaman',
    vignette: 'Vignette',
    color: 'Warna',
    colorOverlay: 'Overlay Warna',
    colorize: 'Warnai',
    gradientMap: 'Peta Gradien',
    replaceColor: 'Ganti Warna',
    advanced: 'Lanjutan',
    levels: 'Level',
    curves: 'Kurva',
    shadows: 'Bayangan',
    highlights: 'Highlights',
    blacks: 'Hitam',
    whites: 'Putih',
    channels: 'Saluran RGB'
  },

  presets: {
    title: 'Preset',
    custom: 'Kustom',
    blackAndWhite: 'Hitam Putih',
    highContrast: 'Kontras Tinggi',
    normal: 'Normal',
    cinematic: 'Sinematik',
    warm: 'Hangat',
    cool: 'Dingin',
    sunset: 'Matahari Terbenam',
    vintage: 'Vintage',
    invert: 'Invers',
    cross: 'Cross Process',
    matte: 'Matte',
    flat: 'Flat',
    portrait: 'Potret',
    landscape: 'Lanskap',
    vivid: 'Vivid',
    moody: 'Moody',
    savePreset: 'Simpan sebagai Preset',
    deletePreset: 'Hapus Preset',
    presetName: 'Nama Preset'
  },

  output: {
    title: 'Output',
    fileName: 'Nama File',
    format: 'Format',
    quality: 'Kualitas',
    width: 'Lebar',
    height: 'Tinggi',
    download: 'Unduh Gambar',
    saveOnline: 'Simpan Online',
    share: 'Bagikan',
    applyToNew: 'Terapkan ke Gambar Baru'
  },

  history: {
    title: 'Riwayat',
    revert: 'Kembalikan ke Langkah Ini',
    clear: 'Hapus Riwayat'
  },

  actions: {
    apply: 'Terapkan Filter',
    download: 'Unduh',
    save: 'Simpan',
    reset: 'Reset',
    cancel: 'Batal'
  },

  messages: {
    imageLoaded: 'Gambar berhasil dimuat',
    filterApplied: 'Filter berhasil diterapkan',
    filtersReset: 'Filter telah direset ke default',
    downloadStarted: 'Unduhan dimulai',
    presetSaved: 'Preset berhasil disimpan',
    presetDeleted: 'Preset telah dihapus',
    invalidFile: 'File tidak valid. Harap unggah gambar yang valid.',
    fileTooLarge: 'File terlalu besar. Ukuran maksimum 10MB.'
  }
};