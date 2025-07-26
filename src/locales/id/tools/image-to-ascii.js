export default {
  name: 'Konverter Gambar ke ASCII',
  description: 'Mengubah gambar menjadi seni teks ASCII dengan opsi yang dapat disesuaikan',

  upload: {
    title: 'Unggah Gambar',
    dropzone: 'Seret dan lepas gambar di sini atau klik untuk menjelajah',
    maxSize: 'Ukuran file maksimum: 5MB',
    supportedFormats: 'Format yang didukung: JPG, PNG, WEBP, GIF',
    pasteImage: 'Atau tempel gambar dari clipboard'
  },

  options: {
    title: 'Opsi Konversi',
    width: 'Lebar output',
    height: 'Tinggi output',
    preserveAspect: 'Pertahankan rasio aspek',
    colored: 'Output berwarna',
    charSet: 'Set karakter',
    charSets: {
      standard: 'Standar',
      simple: 'Sederhana',
      complex: 'Kompleks',
      blocks: 'Karakter blok',
      custom: 'Kustom'
    },
    customChars: 'Karakter kustom',
    invert: 'Balikkan warna',
    threshold: 'Ambang kecerahan',
    brightness: 'Kecerahan',
    contrast: 'Kontras',
    fontFamily: 'Keluarga font',
    fontSize: 'Ukuran font',
    lineHeight: 'Tinggi garis',
    backgroundColor: 'Warna latar belakang',
    textColor: 'Warna teks'
  },

  output: {
    title: 'Output ASCII',
    preview: 'Pratinjau',
    raw: 'ASCII mentah',
    html: 'HTML',
    copyToClipboard: 'Salin ke clipboard',
    downloadTxt: 'Unduh sebagai TXT',
    downloadHtml: 'Unduh sebagai HTML',
    downloadImage: 'Unduh sebagai gambar',
    stats: {
      title: 'Statistik',
      characters: 'Jumlah karakter',
      lines: 'Jumlah baris',
      colors: 'Jumlah warna',
      size: 'Ukuran teks'
    }
  },

  presets: {
    title: 'Preset',
    save: 'Simpan pengaturan saat ini',
    load: 'Muat preset',
    delete: 'Hapus preset',
    presetName: 'Nama preset',
    default: 'Default',
    detailed: 'Detail',
    minimalist: 'Minimalis',
    blocky: 'Gaya blok',
    small: 'Kecil',
    inverted: 'Terbalik'
  },

  adjustment: {
    title: 'Penyesuaian Gambar',
    grayscale: 'Skala abu-abu',
    negative: 'Negatif',
    resize: 'Ubah ukuran sebelum konversi',
    crop: 'Potong gambar',
    rotate: 'Putar',
    flipH: 'Balik horizontal',
    flipV: 'Balik vertikal'
  },

  animation: {
    title: 'Animasi',
    animated: 'Proses sebagai animasi',
    frameDelay: 'Penundaan frame',
    loop: 'Animasi berulang',
    loopCount: 'Jumlah pengulangan',
    extractFrame: 'Ekstrak frame saat ini'
  },

  actions: {
    convert: 'Konversi ke ASCII',
    resetOptions: 'Reset opsi',
    refreshPreview: 'Segarkan pratinjau',
    loadImage: 'Muat gambar baru',
    applyChanges: 'Terapkan perubahan',
    selectImage: 'Pilih gambar',
    reset: 'Reset',
    processing: 'Memproses...',
    generate: 'Buat ASCII',
    copy: 'Salin',
    download: 'Unduh'
  },

  messages: {
    converting: 'Mengubah gambar ke ASCII...',
    conversionComplete: 'Konversi selesai',
    conversionFailed: 'Gagal mengubah gambar: {error}',
    copied: 'ASCII telah disalin ke clipboard',
    downloadStarted: 'Unduhan dimulai',
    downloadComplete: 'ASCII telah diunduh',
    downloadFailed: 'Gagal mengunduh',
    copyFailed: 'Gagal menyalin',
    resetComplete: 'Berhasil direset',
    asciiGenerated: 'Seni ASCII telah dibuat',
    generationFailed: 'Gagal membuat ASCII',
    presetSaved: 'Preset disimpan',
    presetLoaded: 'Preset dimuat',
    presetDeleted: 'Preset dihapus',
    invalidImage: 'Format gambar tidak valid atau file rusak',
    imageTooBig: 'Ukuran gambar terlalu besar untuk dikonversi',
    selectOrLoad: 'Silakan pilih gambar atau muat dari URL',
    asciiWillDisplay: 'ASCII akan ditampilkan di sini',
    customCharsPlaceholder: 'Masukkan karakter, diurutkan dari gelap ke terang...',
    tip: 'Klik tombol "Buat ASCII" setelah menyesuaikan pengaturan untuk melihat hasilnya',
    drapPlaceHolder: 'Pilih atau seret gambar ke sini',
    noImage: 'Silakan pilih gambar terlebih dahulu',
    generateAscii: 'Klik tombol "Buat ASCII" untuk mengubah gambar',
    tip2: 'Tip: Gunakan tombol salin untuk menyalin seni ASCII ke clipboard, atau tombol unduh untuk menyimpan sebagai file teks.'
  },

  charSets: {
    standard: 'Standar',
    simple: 'Sederhana',
    blocks: 'Blok',
    custom: 'Kustom'
  },

  settings: {
    title: 'Pengaturan ASCII',
    customCharsetLabel: 'Set karakter kustom (dari gelap ke terang)',
    asciiWidth: 'Lebar ASCII',
    invert: 'Balikkan warna',
    colored: 'Output berwarna',
    fontSize: 'Ukuran font'
  },

  preview: {
    originalImage: 'Gambar asli',
    generatedAscii: 'ASCII yang dihasilkan'
  }
};