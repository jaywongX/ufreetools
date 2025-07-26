export default {
  name: 'Pembuat Watermark Gambar',
  description: 'Tambahkan watermark teks atau gambar ke foto Anda dengan pengaturan yang dapat disesuaikan',

  upload: {
    title: 'Unggah Gambar',
    dropzone: 'Seret dan lepas gambar di sini atau klik untuk menelusuri',
    addMore: 'Tambahkan lebih banyak gambar',
    clearAll: 'Hapus semua',
    maxFiles: 'Maksimal {count} gambar',
    maxSize: 'Ukuran maksimum per gambar: {size}MB',
    supportedFormats: 'Format yang didukung: JPG, PNG, WEBP, GIF'
  },

  watermarkType: {
    title: 'Jenis Watermark',
    text: 'Watermark Teks',
    image: 'Watermark Gambar',
    both: 'Teks dan Gambar'
  },

  textWatermark: {
    title: 'Watermark Teks',
    text: 'Teks Watermark',
    font: 'Font',
    size: 'Ukuran',
    color: 'Warna',
    opacity: 'Transparansi',
    rotation: 'Rotasi',
    shadow: 'Bayangan Teks',
    background: 'Latar Belakang Teks',
    padding: 'Padding',
    border: 'Border',
    spacing: 'Jarak Antar Huruf'
  },

  imageWatermark: {
    title: 'Watermark Gambar',
    upload: 'Unggah Gambar Watermark',
    selectLogo: 'Pilih Logo',
    presetLogos: 'Logo Preset',
    size: 'Ukuran',
    opacity: 'Transparansi',
    rotation: 'Rotasi',
    offset: 'Offset'
  },

  positioning: {
    title: 'Penempatan',
    position: 'Posisi',
    custom: 'Posisi Kustom',
    xPosition: 'Posisi X',
    yPosition: 'Posisi Y',
    tiled: 'Mode Tile',
    margin: 'Margin',
    scale: 'Skala Sesuai Gambar'
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
    bottomRight: 'Kanan Bawah',
    custom: 'Posisi Kustom'
  },

  output: {
    title: 'Output',
    quality: 'Kualitas Output',
    format: 'Format Output',
    original: 'Sama dengan Asli',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    preview: 'Pratinjau',
    downloadIndividual: 'Unduh Per File',
    downloadAll: 'Unduh Semua',
    downloadAsZip: 'Unduh sebagai ZIP'
  },

  presets: {
    title: 'Preset',
    save: 'Simpan Pengaturan Saat Ini',
    load: 'Muat Preset',
    delete: 'Hapus Preset',
    presetName: 'Nama Preset'
  },

  actions: {
    apply: 'Terapkan Watermark',
    applyToAll: 'Terapkan ke Semua',
    reset: 'Reset',
    preview: 'Pratinjau',
    undo: 'Undo',
    cancel: 'Batalkan Proses'
  },

  messages: {
    processing: 'Memproses...',
    success: 'Watermark berhasil diterapkan',
    error: 'Error: {error}',
    noImages: 'Silakan tambahkan gambar terlebih dahulu',
    noWatermark: 'Silakan tambahkan watermark teks atau gambar',
    presetSaved: 'Preset berhasil disimpan',
    presetLoaded: 'Preset berhasil dimuat',
    presetDeleted: 'Preset telah dihapus',
    watermarkApplied: 'Watermark telah diterapkan',
    watermarkImageLoadError: 'Gagal memuat gambar watermark',
    imageLoadError: 'Gagal memuat gambar',
    resetSuccess: 'Berhasil direset',
    downloadStarted: 'Unduhan dimulai',
    downloadError: 'Gagal mengunduh gambar',
    imageLoaded: 'Gambar berhasil dimuat',
    canvasInitError: 'Gagal menginisialisasi canvas',
    tiledWatermarkError: 'Gagal membuat watermark tile'
  }
};