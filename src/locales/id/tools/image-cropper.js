export default {
  name: 'Pemotong Gambar',
  description: 'Potong, ubah ukuran, dan putar gambar dengan presisi',

  upload: {
    title: 'Unggah Gambar',
    dropzone: 'Seret dan lepas gambar di sini atau klik untuk menjelajah',
    maxSize: 'Ukuran file maksimum: 10MB',
    supportedFormats: 'Format yang didukung: JPG, PNG, WEBP, GIF',
    select: 'Pilih gambar untuk mulai memotong dan mengedit'
  },

  editor: {
    title: 'Editor Gambar',
    zoom: 'Perbesar',
    rotate: 'Putar',
    flipHorizontal: 'Balik Horizontal',
    flipVertical: 'Balik Vertikal',
    reset: 'Reset Gambar',
    undo: 'Undo',
    redo: 'Redo',
    dragMode: 'Mode Seret',
    scaleMode: 'Mode Skala'
  },

  crop: {
    title: 'Pengaturan Pemotongan',
    aspectRatio: 'Rasio Aspek',
    freeform: 'Bebas',
    square: 'Persegi (1:1)',
    portrait: 'Portrait (3:4)',
    landscape: 'Landscape (4:3)',
    widescreen: 'Layar Lebar (16:9)',
    panorama: 'Panorama (2:1)',
    custom: 'Kustom',
    width: 'Lebar',
    height: 'Tinggi',
    unit: 'Satuan',
    pixels: 'Pixel',
    percent: 'Persen',
    lockAspectRatio: 'Kunci Rasio Aspek'
  },

  presets: {
    title: 'Preset Ukuran',
    original: 'Ukuran Asli',
    social: 'Media Sosial',
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    print: 'Ukuran Cetak',
    fourBySix: '4×6 inci',
    fiveBySeven: '5×7 inci',
    eightByTen: '8×10 inci'
  },

  output: {
    title: 'Output',
    preview: 'Pratinjau',
    dimensions: 'Dimensi Output',
    quality: 'Kualitas',
    format: 'Format',
    fileName: 'Nama File',
    download: 'Unduh',
    saveAs: 'Simpan Sebagai',
    copy: 'Salin ke Clipboard'
  },

  actions: {
    crop: 'Potong Gambar',
    apply: 'Terapkan',
    cancel: 'Batal',
    save: 'Simpan Gambar',
    download: 'Unduh',
    newImage: 'Gambar Baru'
  },

  messages: {
    cropSuccess: 'Gambar berhasil dipotong',
    downloadReady: 'Gambar yang dipotong siap diunduh',
    processing: 'Memproses gambar...',
    copied: 'Gambar disalin ke clipboard',
    invalidFile: 'File tidak valid. Harap unggah gambar yang valid.',
    fileTooLarge: 'File terlalu besar. Ukuran maksimum 10MB.'
  }
};