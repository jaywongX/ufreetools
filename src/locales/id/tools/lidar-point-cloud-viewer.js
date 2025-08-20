export default {
  name: 'Penampil Awan Titik LIDAR - Alat Visualisasi Awan Titik 3D Daring',
  description:
    'Penampil awan titik LIDAR online gratis yang mendukung format LAS, XYZ, PLY, PCD. Menyediakan visualisasi 3D, berbagai mode pewarnaan, navigasi interaktif, dan fitur analisis data',
  inputTitle: 'Berkas Awan Titik Masukan',
  outputTitle: 'Tampilan Awan Titik 3D',
  dragTip: 'Seret dan jatuhkan berkas awan titik ke sini atau klik untuk mengunggah',
  supported: 'Format yang didukung: LAS, XYZ, PLY, PCD, TXT',
  loadFromUrl: 'Muat dari URL',
  load: 'Muat',
  loadSample: 'Muat Data Contoh',
  coloringMode: 'Mode Pewarnaan',
  elevation: 'Pewarnaan Elevasi',
  intensity: 'Pewarnaan Intensitas',
  classification: 'Pewarnaan Klasifikasi',
  rgb: 'Pewarnaan RGB',
  pointSize: 'Ukuran Titik',
  pointDensity: 'Kerapatan Titik',
  enableAnimation: 'Aktifkan Animasi',
  showTrajectory: 'Tampilkan Trajektori',
  showSensorData: 'Tampilkan Data Sensor',
  fileInfo: 'Info Berkas',
  fileName: 'Nama Berkas',
  pointCount: 'Jumlah Titik',
  fileSize: 'Ukuran Berkas',
  bounds: 'Batas',
  resetView: 'Atur Ulang Tampilan',
  exportImage: 'Ekspor Gambar',
  loading: 'Memuat...',
  noData: 'Silakan unggah berkas awan titik atau muat data contoh',
  controls: {
    rotate: 'Seret mouse: Putar tampilan',
    zoom: 'Roda mouse: Perbesar/Perkecil',
    pan: 'Shift+seret: Geser tampilan'
  },
  stats: {
    visible: 'Titik Terlihat',
    total: 'Total Titik',
    points: 'titik'
  },
  metadata: {
    title: 'Metadata LAS',
    systemId: 'Pengenal Sistem',
    software: 'Perangkat Lunak Pembuat',
    version: 'Versi LAS',
    creationDate: 'Tanggal Pembuatan',
    pointFormat: 'Format Data Titik',
    vlrCount: 'Jumlah VLR',
    returnStats: 'Statistik Return',
    extent: 'Cakupan Spasial'
  },
  error: {
    loadFailed: 'Gagal memuat berkas awan titik, periksa apakah format berkas benar',
    urlLoadFailed: 'Gagal memuat berkas dari URL, periksa alamat URL'
  },
  disclaimer: {
    title: 'Catatan Teknis',
    content:
      'Alat ini menggunakan WebGL untuk mewujudkan visualisasi awan titik 3D di peramban. Seluruh pemrosesan data dilakukan secara lokal untuk memastikan keamanan data.',
    formats:
      'Format yang didukung: LAS (format standar LIDAR), XYZ (awan titik ASCII), PLY (Polygon File Format), PCD (Point Cloud Data)',
    performance:
      'Tips kinerja: Berkas awan titik berukuran besar mungkin membutuhkan waktu muat lebih lama. Disarankan menggunakan peramban modern untuk kinerja terbaik.'
  }
};