export default {
  name: 'Generator Gradien Warna',
  description: 'Buat dan sesuaikan gradien CSS yang indah, lihat pratinjau secara real-time, salin kode ke proyek Anda',

  gradientTypes: {
    title: 'Jenis Gradien',
    linear: 'Gradien Linear',
    radial: 'Gradien Radial',
    conic: 'Gradien Konik'
  },

  controls: {
    title: 'Kontrol Warna',
    addColor: 'Tambahkan Warna',
    color: 'Warna',
    position: 'Posisi (%)',
    delete: 'Hapus Warna',
    angle: 'Sudut',
    degrees: 'derajat',
    shape: 'Bentuk',
    circle: 'Lingkaran',
    ellipse: 'Elips',
    positionX: 'Posisi X (%)',
    positionY: 'Posisi Y (%)',
    size: 'Ukuran',
    closestSide: 'Sisi Terdekat',
    closestCorner: 'Sudut Terdekat',
    farthestSide: 'Sisi Terjauh',
    farthestCorner: 'Sudut Terjauh',
    fromAngle: 'Sudut Awal'
  },

  output: {
    title: 'Kode CSS',
    copyCode: 'Salin Kode',
    preview: 'Area Pratinjau',
    copied: 'Kode CSS telah disalin ke clipboard!',
    download: 'Unduh PNG'
  },

  presets: {
    title: 'Preset Gradien',
    apply: 'Terapkan Preset',
    sunnyMorning: 'Pagi Cerah',
    winterNeva: 'Musim Dingin Neva',
    rareWind: 'Angin Langka',
    deepBlue: 'Biru Tua',
    perfect: 'Putih Sempurna',
    cloudyKnoxville: 'Knoxville Berawan',
    greenBeach: 'Pantai Hijau',
    plumBath: 'Mandi Plum',
    everlasting: 'Langit Abadi'
  },

  accessibility: {
    colorPicker: 'Pemilih Warna',
    deleteSwatch: 'Hapus Titik Henti Warna',
    dragToReposition: 'Seret untuk mengubah posisi titik henti warna'
  },

  actions: {
    reset: 'Reset',
    generateCSS: 'Buat CSS',
    clickToCopy: 'Klik dan salin kode',
    completeEdit: 'Selesai Edit'
  },

  messages: {
    copied: 'Kode CSS telah disalin ke clipboard!',
    noColors: 'Tambahkan setidaknya dua warna untuk membuat gradien',
    maxColors: 'Jumlah maksimum titik henti warna tercapai (10)',
    useKeyboard: 'Gunakan tombol Delete untuk menghapus titik henti warna yang dipilih',
    invalidHex: 'Masukkan kode warna heksadesimal yang valid',
    downloadError: 'Gagal mengunduh PNG, coba lagi nanti',
    preview: 'Pratinjau'
  },

  anglePresets: {
    top: 'Atas',
    topRight: 'Kanan Atas',
    right: 'Kanan',
    bottomRight: 'Kanan Bawah',
    bottom: 'Bawah',
    bottomLeft: 'Kiri Bawah',
    left: 'Kiri',
    topLeft: 'Kiri Atas'
  },

  radialShapes: {
    circle: 'Lingkaran',
    ellipse: 'Elips'
  },

  radialSizes: {
    farthestCorner: 'Sudut Terjauh',
    closestCorner: 'Sudut Terdekat',
    farthestSide: 'Sisi Terjauh',
    closestSide: 'Sisi Terdekat',
  }
};