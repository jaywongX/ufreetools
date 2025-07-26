export default {
  name: 'Konverter Sistem Koordinat',
  description: 'Mengkonversi koordinat geografis antara berbagai sistem koordinat termasuk WGS-84, GCJ-02, BD-09, Web Mercator dan UTM',
  title: 'Konverter Sistem Koordinat - Konversi antara WGS84, GCJ02, BD09 dan lainnya',
  metaDescription: 'Konverter sistem koordinat online gratis untuk mengubah antara sistem koordinat WGS-84, GCJ-02 (Mars), BD-09 (Baidu), Web Mercator dan UTM. Tanpa perlu instalasi.',

  seo: {
    title: 'Alat Konversi Sistem Koordinat | Alat Konversi Geospasial',
    description: 'Alat online gratis untuk mengkonversi antara berbagai sistem koordinat geografis seperti WGS-84, GCJ-02 (China), BD-09, Web Mercator dan proyeksi UTM.'
  },

  labels: {
    sourceSystem: 'Sistem Koordinat Sumber',
    targetSystem: 'Sistem Koordinat Target',
    latitude: 'Lintang',
    longitude: 'Bujur',
    x: 'Koordinat X (Timur)',
    y: 'Koordinat Y (Utara)',
    results: 'Hasil Konversi',
    formatted: 'Koordinat Terformat',
    mapPreview: 'Pratinjau Peta',
    batchConversion: 'Konversi Massal',
    batchInput: 'Masukkan Koordinat (satu pasang per baris)',
    inputFormat: 'Format Input',
    batchResults: 'Hasil Konversi'
  },

  placeholders: {
    latitude: 'Masukkan lintang (contoh: 39.909187)',
    longitude: 'Masukkan bujur (contoh: 116.397451)',
    x: 'Masukkan koordinat X (contoh: 12959167.71)',
    y: 'Masukkan koordinat Y (contoh: 4825908.23)',
    batchInput: 'Masukkan koordinat, satu pasang per baris\nContoh:\n39.909187, 116.397451\n31.230416, 121.473701'
  },

  buttons: {
    convert: 'Konversi Koordinat',
    converting: 'Mengkonversi...',
    swap: 'Tukar Sistem',
    reset: 'Reset',
    batchConvert: 'Konversi Massal',
    batchConverting: 'Mengkonversi Massal...',
    copyResults: 'Salin Hasil',
    exportCsv: 'Ekspor ke CSV',
    loadExample: 'Muat Contoh',
    loadBatchExample: 'Muat Contoh Massal'
  },

  formats: {
    latlon: 'Lintang Bujur (dipisahkan spasi)',
    lonlat: 'Bujur Lintang (dipisahkan spasi)',
    latlon_comma: 'Lintang, Bujur (dipisahkan koma)',
    lonlat_comma: 'Bujur, Lintang (dipisahkan koma)',
    latLng: '{lat}, {lng}',
    xy: '{x}, {y}'
  },

  messages: {
    copied: 'Tersalin ke clipboard',
    noCoordinates: 'Masukkan koordinat untuk dikonversi',
    batchSuccess: 'Semua koordinat berhasil dikonversi'
  },

  errors: {
    invalidCoordinates: 'Nilai koordinat tidak valid',
    conversionFailed: 'Konversi gagal',
    copyFailed: 'Gagal menyalin ke clipboard',
    invalidFormat: 'Format koordinat tidak valid',
    batchFailed: 'Sebagian koordinat gagal dikonversi'
  },

  sections: {
    tips: {
      title: 'Tips Konversi',
      item1: 'WGS-84 adalah standar global yang digunakan GPS dan Google Maps di luar China',
      item2: 'GCJ-02 adalah sistem koordinat wajib di China daratan',
      item3: 'BD-09 khusus digunakan untuk layanan peta Baidu',
      item4: 'Web Mercator digunakan oleh sebagian besar aplikasi peta web'
    },
    about: {
      title: 'Tentang Sistem Koordinat',
      wgs84: 'WGS-84 (World Geodetic System 1984) adalah sistem referensi koordinat yang digunakan oleh GPS, merupakan standar internasional untuk pemetaan dan penentuan posisi.',
      gcj02: 'GCJ-02 adalah sistem koordinat resmi yang diwajibkan di China daratan. Sistem ini menerapkan algoritma enkripsi pada koordinat WGS-84 untuk alasan keamanan yang menyebabkan pergeseran lokasi.',
      bd09: 'BD-09 adalah sistem koordinat yang digunakan oleh peta dan layanan Baidu, menerapkan transformasi tambahan pada koordinat GCJ-02 untuk enkripsi lebih lanjut.',
      webmercator: 'Web Mercator (EPSG:3857) adalah proyeksi silinder yang digunakan oleh banyak layanan peta web. Ini merepresentasikan bumi sebagai bidang datar dengan koordinat dalam meter, cocok untuk visualisasi web.',
      utm: 'UTM (Universal Transverse Mercator) adalah sistem berbasis grid global yang membagi bumi menjadi 60 zona. Koordinat dinyatakan dalam meter sebagai jarak timur dan utara relatif terhadap asal setiap zona.',
      dms: 'Derajat Menit Detik (DMS) adalah cara tradisional untuk merepresentasikan koordinat geografis. Ini membagi koordinat menjadi derajat (°), menit (′), dan detik (″).',
      epsg3857: 'EPSG:3857 adalah identifikasi resmi untuk proyeksi Web Mercator, digunakan oleh aplikasi peta web utama. Ini memproyeksikan bumi elipsoid ke bidang datar untuk ditampilkan di layar.',
      amap: 'Sistem koordinat Gaode sama dengan GCJ-02, sistem koordinat yang diwajibkan pemerintah China untuk peta di China daratan.',
      cgcs2000: 'China Geodetic Coordinate System 2000 (CGCS2000) adalah sistem koordinat nasional China yang didirikan pada tahun 2000. Ini sangat mirip dengan WGS-84 dengan perbedaan kecil.',
      lambert: 'Proyeksi konformal Lambert mempertahankan sudut dan bentuk di area kecil. Sering digunakan untuk pemetaan daerah lintang menengah seperti negara bagian atau benua.',
      miller: 'Proyeksi silinder Miller adalah modifikasi dari proyeksi Mercator yang mengurangi distorsi di daerah lintang tinggi, cocok untuk peta dunia.',
      polar: 'Sistem koordinat kutub merepresentasikan posisi sebagai jarak dari titik referensi (kutub) dan sudut relatif terhadap arah referensi. Berguna untuk pemetaan daerah kutub.',
      dkk: 'Proyeksi Deling-Kashi-Kunming (DKK) adalah proyeksi kerucut khusus China yang digunakan untuk beberapa pemetaan nasional, dapat meminimalkan distorsi di seluruh negeri.'
    },
  },

  export: {
    filename: 'Konversi_Koordinat',
    originalLat: 'Lintang Asli',
    originalLng: 'Bujur Asli',
    convertedLat: 'Lintang Terkonversi',
    convertedLng: 'Bujur Terkonversi'
  },

  systems: {
    wgs84: {
      name: 'WGS-84 (Koordinat GPS)',
      description: 'World Geodetic System 1984, digunakan oleh GPS dan sebagian besar aplikasi peta internasional'
    },
    gcj02: {
      name: 'GCJ-02 (Koordinat Mars)',
      description: 'Sistem koordinat wajib di China. Menerapkan algoritma enkripsi pada koordinat WGS-84 untuk alasan keamanan yang menyebabkan pergeseran lokasi.'
    },
    bd09: {
      name: 'BD-09 (Koordinat Baidu)',
      description: 'Sistem yang digunakan oleh peta dan layanan Baidu, menerapkan transformasi tambahan pada koordinat GCJ-02 untuk enkripsi lebih lanjut.'
    },
    webmercator: {
      name: 'Web Mercator (EPSG:3857)',
      description: 'Proyeksi silinder yang digunakan oleh banyak layanan peta web. Merepresentasikan bumi sebagai bidang datar dengan koordinat dalam meter, cocok untuk visualisasi web.'
    },
    utm: {
      name: 'UTM (Universal Transverse Mercator)',
      description: 'Sistem berbasis grid global yang membagi bumi menjadi 60 zona. Koordinat dinyatakan dalam meter sebagai jarak timur dan utara relatif terhadap asal setiap zona.'
    },
    dms: {
      name: 'Derajat Menit Detik (DMS)',
    },
    epsg3857: {
      name: 'EPSG:3857',
    },
    amap: {
      name: 'Sistem Koordinat Gaode',
    },
    cgcs2000: {
      name: 'Sistem Geodesi Nasional CGCS2000',
    },
    lambert: {
      name: 'Proyeksi Lambert',
    },
    miller: {
      name: 'Proyeksi Miller',
    },
    polar: {
      name: 'Koordinat Kutub',
    },
    dkk: {
      name: 'Proyeksi Deling-Kashi-Kunming',
    }
  }
};