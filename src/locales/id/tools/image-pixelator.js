export default {
  name: 'Pixelator Gambar',
  description: 'Ubah gambar menjadi seni piksel dengan resolusi dan efek yang dapat disesuaikan',

  upload: {
    title: 'Unggah Gambar',
    dropzone: 'Seret dan lepas gambar di sini atau klik untuk menelusuri',
    maxSize: 'Ukuran file maksimum: 10MB',
    supportedFormats: 'Format yang didukung: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Pengaturan Pixelasi',
    pixelSize: 'Ukuran Piksel',
    pixelShape: 'Bentuk Piksel',
    shapes: {
      square: 'Kotak',
      rounded: 'Bulat',
      circle: 'Lingkaran',
      diamond: 'Berlian',
      custom: 'Kustom'
    },
    resolution: 'Resolusi',
    width: 'Lebar',
    height: 'Tinggi',
    preserveAspect: 'Pertahankan Rasio Aspek',
    colorReduction: 'Pengurangan Warna',
    colors: 'Jumlah Warna',
    dithering: 'Dithering',
    ditheringTypes: {
      none: 'Tidak ada',
      floydSteinberg: 'Floyd-Steinberg',
      atkinson: 'Atkinson',
      ordered: 'Terurut',
      bayer: 'Bayer'
    },
    palette: 'Palet Warna',
    palettes: {
      auto: 'Otomatis',
      grayscale: 'Skala Abu-abu',
      gameboy: 'Game Boy',
      nes: 'NES',
      cpc: 'CPC',
      c64: 'C64',
      custom: 'Kustom',
      normal: 'Normal',
      retro: 'Retro',
      sepia: 'Sepia',
      bright: 'Cerah',
      cool: 'Dingin',
      warm: 'Hangat',
      bw: 'Hitam Putih',
      invert: 'Balik Warna'
    },
    customPalette: 'Warna Palet Kustom',
    small: 'Kecil (halus)',
    large: 'Besar (kasar)',
    low: 'Rendah (retro)',
    high:'Tinggi (warna asli)',
  },

  effects: {
    title: 'Efek',
    brightness: 'Kecerahan',
    contrast: 'Kontras',
    saturation: 'Saturasi',
    hue: 'Rona',
    outline: 'Garis Tepi',
    outlineColor: 'Warna Garis Tepi',
    noise: 'Noise',
    posterize: 'Posterisasi',
    invert: 'Balik Warna',
    grayscale: 'Skala Abu-abu',
    sepia: 'Sepia',
    vignette: 'Vignette'
  },

  animation: {
    title: 'Pengaturan Animasi',
    animated: 'Proses sebagai Animasi',
    frameRate: 'Frame Rate',
    optimizeFrames: 'Optimalkan Frame',
    looping: 'Looping',
    loopCount: 'Jumlah Loop'
  },

  output: {
    title: 'Output',
    preview: 'Pratinjau',
    original: 'Asli',
    pixelated: 'Pixelasi',
    comparison: 'Perbandingan',
    zoomIn: 'Perbesar',
    zoomOut: 'Perkecil',
    gridOverlay: 'Overlay Grid',
    downloadAs: 'Unduh sebagai',
    png: 'PNG',
    jpg: 'JPG',
    gif: 'GIF',
    webp: 'WebP',
    spritesheet: 'Spritesheet',
    quality: 'Kualitas',
    scale: 'Skala',
    loading: 'Memuat...',
    noImage: 'Silakan pilih gambar',
    processing: 'Memproses...'
  },

  presets: {
    title: 'Preset',
    save: 'Simpan pengaturan saat ini',
    load: 'Muat preset',
    delete: 'Hapus preset',
    presetName: 'Nama Preset',
    defaults: {
      lowRes: 'Resolusi Rendah',
      highContrast: 'Kontras Tinggi',
      retro: 'Retro',
      minimal: 'Minimalis',
      sketch: 'Sketsa',
      blueprint: 'Cetak Biru'
    }
  },

  actions: {
    pixelate: 'Pixelasi Gambar',
    reset: 'Reset Pengaturan',
    applyChanges: 'Terapkan Perubahan',
    undoChanges: 'Batalkan Perubahan',
    downloadImage: 'Unduh Gambar',
    selectImage: 'Pilih Gambar'
  },

  messages: {
    processing: 'Memproses gambar...',
    success: 'Gambar berhasil dipixelasi',
    downloading: 'Mempersiapkan unduhan...',
    presetSaved: 'Preset berhasil disimpan',
    presetLoaded: 'Preset dimuat',
    presetDeleted: 'Preset dihapus',
    error: 'Error: {error}',
    fileSize: 'Ukuran File',
    pixels: 'Piksel',
    imageSize: 'Ukuran Gambar',
    downloadSuccess: 'Gambar berhasil diunduh',
    downloadFailed: 'Gagal mengunduh',
    resetSuccess: 'Berhasil direset',
    fileName: 'Nama File'
  }
};