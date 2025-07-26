export default {
  name: 'Proyeksi Gauss Langsung & Invers',
  title: 'Proyeksi Gauss Langsung & Invers',
  description: 'Alat konversi antara koordinat proyeksi Gauss dan koordinat geografis (lintang/bujur)',
  calculationType: 'Jenis Perhitungan',
  forward: 'Perhitungan Langsung (Lintang/Bujur → Koordinat Gauss)',
  inverse: 'Perhitungan Invers (Koordinat Gauss → Lintang/Bujur)',
  ellipsoidParameters: 'Parameter Elipsoid',
  ellipsoidType: 'Tipe Elipsoid',
  centralMeridian: 'Meridian Tengah (derajat)',
  a: 'Sumbu Semi-Mayor',
  f: 'Pemepatan',
  projectionParameters: 'Parameter Zona Proyeksi',
  projectionType: 'Tipe Zona Proyeksi',
  '3degree': 'Zona 3 Derajat',
  '6degree': 'Zona 6 Derajat',
  zoneNumber: 'Nomor Zona',
  forwardInput: 'Masukkan Lintang/Bujur',
  latitude: 'Lintang',
  longitude: 'Bujur',
  inverseInput: 'Masukkan Koordinat Gauss',
  x: 'Koordinat X (Utara)',
  y: 'Koordinat Y (Timur)',
  calculate: 'Hitung',
  results: 'Hasil Perhitungan',
  dms: 'Format Derajat-Menit-Detik',
  batchProcessing: 'Pengolahan Massal',
  inputFormat: 'Format Input',
  batchForwardFormat: 'Setiap baris berisi pasangan lintang/bujur, format: lintang,bujur',
  batchInverseFormat: 'Setiap baris berisi pasangan koordinat, format: X,Y',
  processBatch: 'Proses Massal',
  batchResults: 'Hasil Massal',
  copyAll: 'Salin Semua',
  downloadCSV: 'Unduh CSV',
  copySuccess: 'Berhasil disalin',
  copyFailed: 'Gagal menyalin',
  clear: 'Hapus',
  formula: 'Penjelasan Rumus',
  mapView: 'Tampilan Peta',
  dmsInput: 'Input Derajat-Menit-Detik',
  dmsInputPlaceholder: '40°26\'46"LU 79°58\'56"BB',
  parse: 'Parse',
  dmsParseError: 'Error parsing format derajat-menit-detik',
  invalidLatitude: 'Lintang tidak valid',
  invalidLongitude: 'Bujur tidak valid',
  invalidX: 'Koordinat X tidak valid',
  invalidY: 'Koordinat Y tidak valid',
  copyToClipboard: 'Salin ke Clipboard',
  autoCalculate: 'Hitung Otomatis',
  formulaExplanation: 'Penjelasan Rumus Proyeksi Gauss',
  uploadCSV: 'Unggah CSV',
  exportResults: 'Ekspor Hasil',
  exportAsGeoJSON: 'Ekspor sebagai GeoJSON',
  exportAsKML: 'Ekspor sebagai KML',
  exportAsTXT: 'Ekspor sebagai TXT',
  mapLayers: 'Layer Peta',
  standard: 'Standar',
  satellite: 'Satelit',
  terrain: 'Topografi',
  pointsOnMap: 'Titik pada Peta',
  clearPoints: 'Hapus Semua Titik',
  unitSystem: 'Sistem Satuan',
  metric: 'Meter (m)',
  imperial: 'Kaki (ft)',
  customEllipsoid: 'Elipsoid Kustom',
  saveCustomEllipsoid: 'Simpan Elipsoid Kustom',

  formulaContent: `
    <p>Proyeksi Gauss menggunakan rumus utama berikut:</p>
    <h4>Perhitungan Langsung (Lintang/Bujur → Koordinat Gauss)</h4>
    <p>Mengubah koordinat geografis menjadi koordinat bidang:</p>
    <ul>
      <li>X = m + faktor koreksi</li>
      <li>Y = ν·cos(B)·l + faktor koreksi</li>
    </ul>
    <h4>Perhitungan Invers (Koordinat Gauss → Lintang/Bujur)</h4>
    <p>Mengubah koordinat bidang menjadi koordinat geografis:</p>
    <ul>
      <li>B = μ + faktor koreksi</li>
      <li>L = L₀₀ + faktor koreksi</li>
    </ul>
    <p>Dimana:</p>
    <ul>
      <li>B: Lintang</li>
      <li>L: Bujur</li>
      <li>L₀₀: Meridian Tengah</li>
      <li>m: Panjang busur meridian</li>
      <li>ν: Jari-jari kelengkungan vertikal</li>
    </ul>
  `,

  close: 'Tutup',

  ellipsoids: {
    WGS84: 'Elipsoid WGS84',
    Krasovsky: 'Elipsoid Krasovsky',
    CGCS2000: 'Elipsoid CGCS2000',
    GRS80: 'Elipsoid GRS80',
    Beijing54: 'Elipsoid Beijing 54',
    Xian80: 'Elipsoid Xi\'an 80',
    Custom: 'Elipsoid Kustom'
  },

  about: {
    title: 'Tentang Proyeksi Gauss',
    description: 'Proyeksi Gauss (Gauss Projection) adalah proyeksi konformal silinder transversal yang banyak digunakan dalam pengukuran dan pembuatan peta. Ini memproyeksikan titik-titik pada permukaan elipsoid bumi ke bidang datar, dan merupakan metode proyeksi yang umum digunakan untuk peta topografi skala menengah hingga besar.',
    forwardTitle: 'Perhitungan Langsung (Lintang/Bujur → Koordinat Gauss)',
    forwardDescription: 'Perhitungan langsung adalah proses mengubah koordinat geografis (bujur, lintang) menjadi koordinat bidang (X, Y). Sumbu X mengarah ke utara, sumbu Y mengarah ke timur, dengan titik origin di perpotongan meridian tengah dan ekuator.',
    inverseTitle: 'Perhitungan Invers (Koordinat Gauss → Lintang/Bujur)',
    inverseDescription: 'Perhitungan invers adalah proses mengubah koordinat bidang (X, Y) kembali menjadi koordinat geografis (bujur, lintang), merupakan kebalikan dari perhitungan langsung.',
    parametersTitle: 'Penjelasan Parameter',
    ellipsoidParam: 'Parameter Elipsoid',
    ellipsoidDescription: 'Model matematika yang menggambarkan bentuk bumi, sistem geodesi yang berbeda menggunakan parameter elipsoid yang berbeda. Yang umum digunakan antara lain WGS84, Beijing 54, Xi\'an 80, CGCS2000, dll.',
    projectionParam: 'Parameter Zona Proyeksi',
    projectionDescription: 'Proyeksi Gauss biasanya dibagi menjadi zona 3 derajat dan 6 derajat. Zona 3 derajat cocok untuk peta topografi skala besar, zona 6 derajat cocok untuk peta topografi skala kecil hingga menengah. Nomor zona menentukan posisi meridian tengah.'
  },

  loadExample: 'Muat Contoh',
  customEllipsoidSaved: 'Elipsoid kustom berhasil disimpan',

  guide: {
    title: 'Panduan Penggunaan',
    forwardTitle: 'Perhitungan Langsung (Lintang/Bujur → Koordinat Gauss)',
    step1: 'Pilih jenis perhitungan "Langsung" di bagian atas',
    step2: 'Pilih parameter elipsoid dan zona proyeksi yang sesuai',
    step3: 'Masukkan nilai lintang dan bujur dalam format desimal (contoh: 39.9042, 116.4074) atau gunakan input derajat-menit-detik',
    step4: 'Hasil akan diperbarui secara otomatis, atau klik tombol "Hitung" untuk menjalankan perhitungan',
    
    inverseTitle: 'Perhitungan Invers (Koordinat Gauss → Lintang/Bujur)',
    step5: 'Pilih jenis perhitungan "Invers" di bagian atas',
    step6: 'Masukkan koordinat X dan Y (dalam meter)',
    step7: 'Lihat hasil lintang/bujur dalam format desimal dan derajat-menit-detik',
    
    batchTitle: 'Pengolahan Massal',
    step8: 'Masukkan beberapa pasangan koordinat di area pengolahan massal (satu pasang per baris)',
    step9: 'Klik "Proses Massal" untuk menghitung semua koordinat sekaligus',
    step10: 'Ekspor hasil sebagai CSV atau salin ke clipboard',
    
    mapTitle: 'Interaksi Peta',
    step11: 'Klik pada peta untuk menambahkan titik dan mengisi nilai input secara otomatis',
    step12: 'Gunakan menu dropdown untuk beralih antara layer peta yang berbeda',
    step13: 'Ekspor titik sebagai GeoJSON, KML atau TXT untuk digunakan di aplikasi lain'
  },

  gaussianProjectionPoints: 'Titik Proyeksi Gauss',
  point: 'Titik',
  gaussianProjection: 'Proyeksi Gauss',
  supportedFormats: 'Format yang didukung: CSV, TXT, Excel',
  excelExportNotice: 'Ekspor Excel siap, file dapat langsung dibuka di Excel.',
  excelProcessNotice: 'Pemrosesan Excel belum sepenuhnya didukung, disarankan menggunakan format CSV untuk hasil terbaik.',
  exportAsCSV: 'Ekspor sebagai CSV',
  exportAsExcel: 'Ekspor sebagai Excel',
  excelExportSuccess: 'File Excel berhasil diekspor',
  excelExportFailed: 'Gagal mengekspor Excel, kembali ke format CSV',
  excelImportSuccess: 'File Excel berhasil diimpor',
  excelImportFailed: 'Gagal mengimpor Excel, coba gunakan format CSV',

  units: {
    metric: 'Meter (m)',
    km: 'Kilometer (km)',
    imperial: 'Kaki (ft)',
    miles: 'Mil (mi)'
  },

  resetView: 'Reset Tampilan Peta',
  pointsTotal: 'titik',
  currentPoint: 'Hasil Saat Ini'
};