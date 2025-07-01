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
  currentPoint: 'Hasil Saat Ini',
  article: {
    title: "Kalkulator Proyeksi Gauss: Alat Konversi Koordinat Geografis ke Bidang",
    introTitle: "Apa itu Proyeksi Gauss dan Mengapa Alat Ini Dibutuhkan",
    introPara1: "<strong>Kalkulator Proyeksi Gauss</strong> (juga dikenal sebagai proyeksi Mercator transversal) adalah alat penting bagi insinyur survei, ahli kartografi, profesional GIS, dan siapa pun yang bekerja dengan sistem informasi geografis. Alat konversi koordinat yang kuat ini memungkinkan Anda mengkonversi antara koordinat geografis (lintang dan bujur) dan koordinat bidang (X dan Y) menggunakan metode proyeksi Gauss.",
    introPara2: "<strong>Alat konversi Proyeksi Gauss</strong> kami dapat menangani perhitungan langsung (geografis ke bidang) dan invers (bidang ke geografis) dengan presisi tinggi. Ini mendukung berbagai model elipsoid termasuk WGS84, CGCS2000, Krasovsky (Beijing 54), dan lainnya. Alat ini secara otomatis menerapkan rumus matematika dan faktor koreksi yang sesuai, memastikan konversi koordinat yang akurat untuk proyek pengukuran dan pemetaan Anda.",
    
    scenariosTitle: "Aplikasi Praktis Kalkulator Proyeksi Gauss",
    scenario1: "<strong>Survei dan Manajemen Lahan:</strong> Surveyor menggunakan konversi proyeksi Gauss untuk mengubah koordinat GPS menjadi sistem koordinat bidang lokal untuk pengukuran lahan yang akurat, penentuan batas properti, dan perencanaan konstruksi.",
    scenario2: "<strong>Pembuatan Peta Topografi:</strong> Kartografer dan profesional pemetaan mengandalkan proyeksi Gauss untuk membuat peta topografi yang akurat, mempertahankan hubungan sudut dan meminimalkan distorsi di area tertentu.",
    scenario3: "<strong>Integrasi Data GIS:</strong> Analis GIS menggunakan kalkulator proyeksi Gauss untuk mengintegrasikan data dari berbagai sumber dengan sistem koordinat yang berbeda ke dalam kerangka referensi yang seragam untuk analisis spasial.",
    scenario4: "<strong>Proyek Teknik:</strong> Insinyur sipil dan tim konstruksi menggunakan proyeksi Gauss untuk desain infrastruktur, memastikan penempatan jalan, jembatan, terowongan, dan utilitas yang tepat relatif terhadap fitur yang ada.",
    scenario5: "<strong>Militer dan Pertahanan:</strong> Operasi militer menggunakan koordinat proyeksi Gauss untuk perencanaan taktis, navigasi, dan penargetan yang membutuhkan penentuan posisi yang tepat.",
    scenariosConclusion: "<strong>Perhitungan Proyeksi Gauss</strong> yang serbaguna membuatnya sangat diperlukan di banyak bidang profesional yang membutuhkan penentuan posisi spasial yang tepat. Alat kami menyederhanakan proses matematika yang kompleks ini menjadi antarmuka yang sederhana dan intuitif, cocok untuk profesional maupun pemula.",
    
    faqTitle: "Pertanyaan Umum tentang Proyeksi Gauss",
    faq1q: "Apa perbedaan antara proyeksi Gauss dan UTM?",
    faq1a: "Proyeksi Gauss adalah dasar matematis untuk sistem Universal Transverse Mercator (UTM). Perbedaan utamanya meliputi:<ul><li>UTM menggunakan sistem pembagian zona standar global dengan zona 6 derajat dan parameter tertentu</li><li>Proyeksi Gauss lebih fleksibel, memungkinkan penentuan meridian tengah dan lebar zona yang disesuaikan (3 derajat atau 6 derajat)</li><li>UTM mencakup offset timur palsu standar 500.000 meter dan faktor skala 0.9996</li><li><strong>Kalkulator Proyeksi Gauss</strong> kami menawarkan lebih banyak opsi penyesuaian parameter elipsoid dibandingkan kalkulator UTM biasa</li></ul>",
    
    faq2q: "Model elipsoid apa yang harus saya pilih untuk perhitungan proyeksi Gauss?",
    faq2a: "Pilihan elipsoid tergantung pada wilayah geografis Anda dan standar sistem koordinat yang digunakan:<ul><li><strong>WGS84:</strong> Digunakan secara global dengan sistem GPS dan pemetaan internasional</li><li><strong>CGCS2000:</strong> Sistem koordinat resmi China sejak tahun 2000</li><li><strong>Krasovsky/Beijing 54:</strong> Digunakan secara historis di China dan sebagian Eropa Timur</li><li><strong>Xi'an 80:</strong> Standar nasional China sebelum CGCS2000</li></ul>Untuk sebagian besar aplikasi modern, disarankan menggunakan WGS84 atau CGCS2000, kecuali Anda secara khusus menangani data lama yang membutuhkan elipsoid berbeda. <strong>Alat konversi Proyeksi Gauss</strong> kami mendukung semua model ini dan lebih banyak lagi.",
    
    faq3q: "Seberapa akurat perhitungan proyeksi Gauss yang disediakan alat ini?",
    faq3a: "<strong>Kalkulator Proyeksi Gauss</strong> kami menerapkan model matematika lengkap dan mencakup faktor koreksi yang sesuai untuk memastikan akurasi tinggi. Untuk sebagian besar aplikasi praktis, alat ini mencapai akurasi sub-milimeter, melebihi persyaratan proyek survei dan pemetaan biasa. Akurasi tergantung pada input parameter elipsoid yang benar dan spesifikasi zona yang tepat. Untuk pekerjaan geodesi dengan akurasi sangat tinggi (persyaratan sub-milimeter), mungkin diperlukan perangkat lunak khusus dengan faktor koreksi tambahan.",
    
    faq4q: "Bisakah saya menggunakan alat proyeksi Gauss ini untuk pengolahan koordinat massal?",
    faq4a: "Ya, <strong>Konverter Proyeksi Gauss</strong> kami mencakup fungsi pengolahan massal lengkap. Anda dapat:<ul><li>Memasukkan banyak pasangan koordinat (lintang/bujur atau X/Y)</li><li>Mengunggah file CSV, TXT, atau Excel yang berisi data koordinat</li><li>Memproses ratusan atau ribuan titik sekaligus</li><li>Mengekspor hasil dalam berbagai format termasuk CSV, Excel, GeoJSON, KML, dan TXT</li></ul>Ini membuat alat ini sangat cocok untuk proyek yang melibatkan kumpulan data besar yang akan memakan waktu lama jika diproses secara individual.",
    
    faq5q: "Apa itu zona 3 derajat dan 6 derajat dalam proyeksi Gauss?",
    faq5a: "Proyeksi Gauss membagi bumi menjadi zona bujur untuk meminimalkan distorsi:<ul><li><strong>Zona 3 derajat:</strong> Zona yang lebih sempit memberikan akurasi lebih tinggi dan distorsi lebih sedikit, biasanya digunakan untuk pemetaan skala besar dan pengukuran rinci. Nomor zona berkisar dari 1 hingga 120.</li><li><strong>Zona 6 derajat:</strong> Zona yang lebih lebar mencakup area lebih besar dengan sedikit lebih banyak distorsi di tepinya, sering digunakan untuk pemetaan regional dan koordinat UTM. Nomor zona berkisar dari 1 hingga 60.</li></ul><strong>Alat Kalkulator Proyeksi Gauss</strong> kami mendukung kedua sistem zona ini dan secara otomatis menghitung meridian tengah berdasarkan pilihan zona Anda.",
    
    tutorialTitle: "Panduan Langkah demi Langkah Menggunakan Kalkulator Proyeksi Gauss",
    forwardCalcTitle: "Perhitungan Langsung (Geografis ke Koordinat Gauss)",
    step1: "<strong>Pilih Jenis Perhitungan:</strong> Pilih \"Langsung\" di opsi jenis perhitungan di bagian atas alat.",
    step2: "<strong>Pilih Parameter Elipsoid:</strong> Pilih tipe elipsoid yang sesuai (WGS84, CGCS2000, Beijing 54, dll.) berdasarkan persyaratan sistem koordinat Anda.",
    step3: "<strong>Atur Parameter Proyeksi:</strong> Pilih zona 3 derajat atau 6 derajat, dan masukkan nomor zona. Meridian tengah akan dihitung secara otomatis, atau Anda dapat memasukkannya secara manual jika diperlukan.",
    step4: "<strong>Masukkan Koordinat Geografis:</strong> Masukkan nilai lintang dan bujur dalam format desimal. Anda juga dapat menggunakan kolom input DMS (derajat-menit-detik) untuk memasukkan notasi tradisional.",
    
    inverseCalcTitle: "Perhitungan Invers (Koordinat Gauss ke Geografis)",
    step5: "<strong>Pilih Jenis Perhitungan:</strong> Pilih \"Invers\" sebagai jenis perhitungan.",
    step6: "<strong>Konfigurasi Elipsoid dan Proyeksi:</strong> Pilih parameter elipsoid dan pengaturan proyeksi yang sama dengan sistem koordinat asli.",
    step7: "<strong>Masukkan Koordinat Bidang:</strong> Masukkan nilai X (utara) dan Y (timur) dalam meter.",
    step8: "<strong>Lihat Hasil:</strong> Lintang dan bujur yang dihitung akan ditampilkan dalam format desimal dan DMS untuk referensi mudah.",
    
    batchTitle: "Pengolahan Massal Banyak Koordinat",
    step9: "<strong>Siapkan Data:</strong> Format pasangan koordinat, satu pasang per baris (lintang,bujur untuk perhitungan langsung; X,Y untuk invers). Anda juga dapat menggunakan tombol \"Unggah CSV\" untuk mengimpor data dari file.",
    step10: "<strong>Proses Data Massal:</strong> Klik tombol \"Proses Massal\" untuk mengkonversi semua koordinat sekaligus.",
    step11: "<strong>Ekspor Hasil:</strong> Gunakan tombol \"Salin Semua\" atau \"Unduh CSV\" untuk menyimpan hasil konversi untuk digunakan di aplikasi lain.",
    
    tutorialConclusion: "Dengan menggunakan <strong>Kalkulator Proyeksi Gauss</strong> ini, Anda dapat dengan cepat mengkonversi koordinat antara sistem geografis dan bidang tanpa perlu melakukan perhitungan manual yang rumit. Antarmuka intuitif alat ini membuat konversi koordinat tingkat profesional mudah digunakan oleh pengguna di semua tingkat keahlian.",
    
    relatedToolsTitle: "Alat Koordinat Terkait",
    relatedTool1: "Konverter Koordinat",
    relatedTool1Desc: "Konversi antara berbagai sistem koordinat termasuk UTM, MGRS, dan berbagai grid nasional.",
    relatedTool2: "Pemutar Ulang Jejak GPS",
    relatedTool2Desc: "Visualisasikan dan analisis jejak GPS dengan data koordinat pada peta interaktif.",
    
    referencesTitle: "Referensi Teknis dan Sumber Daya",
    reference1: "World Geodetic System 1984 (WGS84) - National Geospatial-Intelligence Agency",
    reference2: "Transverse Mercator Projection - Wikipedia",
    reference3: "State Plane Coordinate System 1983 - National Geodetic Survey"
  },
}