export default {
  name: 'Konversi Gambar Vertikal ke Horizontal',
  description: 'Mengubah gambar potret vertikal menjadi format lanskap horizontal dengan berbagai opsi konversi',

  upload: {
    title: 'Unggah Gambar',
    dropzone: 'Seret dan lepas gambar di sini',
    maxSize: 'Ukuran file maksimal: 10MB',
    supportedFormats: 'Format yang didukung: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Pengaturan Konversi',
    presets: 'Preset Cepat',
    conversionMode: 'Mode Konversi',
    modes: {
      rotate: 'Rotasi',
      fill: 'Isi Latar Belakang',
      blur: 'Latar Belakang Buram',
      stretch: 'Regangkan Tepi',
      dualColor: 'Latar Belakang Dua Warna'
    },
    rotationAngle: 'Sudut Rotasi',
    fillColor: 'Warna Latar Belakang',
    blurRadius: 'Tingkat Keburaman',
    stretchEdges: 'Tingkat Peregangan',
    leftColor: 'Warna Kiri',
    rightColor: 'Warna Kanan',
    sizeOption: 'Pengaturan Ukuran',
    sizeModes: {
      auto: 'Ukuran Otomatis',
      preset: 'Ukuran Standar',
      custom: 'Ukuran Kustom'
    },
    sizePresets: 'Preset Ukuran',
    outputSize: 'Ukuran Output',
    width: 'Lebar',
    height: 'Tinggi',
    dimensionsHint: 'Masukkan ukuran dalam piksel',
    autoSize: 'Hitung Ukuran Otomatis',
    outputFormat: 'Format Output',
    quality: 'Kualitas Gambar',
    advancedOptions: 'Opsi Lanjutan',
    preserveRatio: 'Pertahankan Rasio Aspek',
    sharpen: 'Ketajaman',
    addWatermark: 'Tambahkan Watermark',
    watermarkPlaceholder: 'Masukkan teks watermark',
    watermarkColor: 'Warna Watermark'
  },

  output: {
    preview: 'Pratinjau Hasil',
    dimensions: 'Dimensi',
    before: 'Sebelum',
    after: 'Sesudah'
  },

  actions: {
    selectImage: 'Pilih Gambar',
    convert: 'Konversi Gambar',
    download: 'Unduh Gambar',
    reset: 'Hapus',
    showSideBySide: 'Tampilkan Perbandingan',
    hideComparison: 'Sembunyikan Perbandingan',
    hideSideBySide: 'Tutup'
  },

  messages: {
    processing: 'Memproses gambar...',
    convertPrompt: 'Hasil konversi akan ditampilkan di sini',
    error: 'Terjadi kesalahan saat memproses gambar',
    success: 'Konversi berhasil diselesaikan!'
  },

  examples: {
    title: 'Tips Penggunaan',
    social: 'Sangat cocok untuk posting media sosial, format horizontal lebih baik',
    socialTip: 'Gunakan mode blur untuk hasil terbaik di media sosial',
    website: 'Buat gambar banner untuk website dan blog',
    websiteTip: 'Mode dua warna sangat cocok untuk banner web'
  },

  help: {
    title: 'Cara Menggunakan Alat Ini',
    description: 'Alat ini memungkinkan Anda mengubah gambar vertikal (potret) menjadi format horizontal (lanskap) dengan berbagai metode sambil mempertahankan kualitas visual dan efek.',
    example1: {
      title: 'Posting Media Sosial',
      description: 'Konversi foto potret ke format horizontal yang ramah media sosial dengan latar belakang buram'
    },
    example2: {
      title: 'Banner Website',
      description: 'Gunakan isian warna latar belakang untuk membuat header dan banner website dari gambar vertikal'
    }
  }
};