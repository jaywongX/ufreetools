export default {
  title: "Alat Konversi Sistem Koordinat: Konversi Presisi antara Berbagai Sistem Koordinat",
  introduction: "Alat Konversi Sistem Koordinat adalah alat online canggih yang dirancang khusus untuk mengkonversi koordinat geografis antara berbagai sistem koordinat. Baik Anda seorang profesional GIS, pengembang, atau analis data geospasial, alat ini menyederhanakan proses kompleks konversi koordinat antara WGS-84 (standar GPS), GCJ-02 (standar China), BD-09 (peta Baidu), Web Mercator dan sistem koordinat UTM.",
  
  whyNeeded: {
    title: "Mengapa Konversi Sistem Koordinat Diperlukan?",
    p1: "Konversi sistem koordinat sangat penting saat menangani data geospasial dari berbagai sumber atau wilayah. Negara dan layanan peta yang berbeda menggunakan sistem koordinat yang berbeda karena alasan hukum, historis, atau keamanan. Misalnya, peta di China daratan secara hukum diwajibkan menggunakan sistem koordinat GCJ-02 alih-alih standar global WGS-84, sementara peta Baidu menggunakan sistem BD-09 sendiri.",
    p2: "Tanpa konversi yang tepat, peta dan data lokasi dapat menampilkan kesalahan posisi yang signifikan - terkadang hingga ratusan meter. Perbedaan ini dapat menyebabkan masalah serius dalam aplikasi mulai dari navigasi hingga perencanaan kota dan layanan darurat. Alat Konversi Sistem Koordinat mengatasi masalah kritis ini, memastikan data lokasi tetap akurat dan konsisten di berbagai sistem peta."
  },
  
  systems: {
    title: "Memahami Berbagai Sistem Koordinat",
    
    wgs84: {
      title: "WGS-84 (World Geodetic System)",
      description: "WGS-84 (World Geodetic System 1984) adalah sistem referensi koordinat yang digunakan oleh satelit GPS, dan merupakan standar internasional untuk pemetaan dan penentuan posisi. Ini digunakan oleh Google Maps di luar China, OpenStreetMap, dan sebagian besar aplikasi peta internasional. Koordinat biasanya dinyatakan dalam lintang dan bujur dalam derajat desimal. Sebagai dasar sistem penentuan posisi global, sistem koordinat WGS-84 memiliki posisi sentral dalam pertukaran data geografis internasional."
    },
    
    gcj02: {
      title: "GCJ-02 (Sistem Resmi China)",
      description: "GCJ-02, biasa disebut 'Koordinat Mars', adalah sistem koordinat wajib yang digunakan di China daratan sesuai peraturan pemerintah. Ini menerapkan algoritma enkripsi khusus pada koordinat WGS-84, menghasilkan pergeseran lokasi di berbagai tempat. Sistem ini digunakan oleh peta Gaode, Google Maps versi China, Apple Maps versi China, dan banyak aplikasi China. Karena persyaratan keamanan nasional khusus, setiap aplikasi yang menyediakan layanan peta di China daratan secara hukum harus menggunakan sistem koordinat GCJ-02."
    },
    
    bd09: {
      title: "BD-09 (Sistem Koordinat Baidu)",
      description: "BD-09 adalah sistem koordinat khusus Baidu yang digunakan khusus untuk peta Baidu dan layanan terkait. Ini menerapkan transformasi tambahan pada koordinat GCJ-02 untuk enkripsi lebih lanjut. Setiap aplikasi yang terhubung dengan layanan peta Baidu harus menggunakan sistem koordinat ini untuk penentuan posisi yang akurat. Sebagai salah satu penyedia layanan peta terbesar di China, peta Baidu banyak digunakan di banyak aplikasi domestik, sehingga memahami dan mengkonversi koordinat BD-09 dengan benar sangat penting."
    },
    
    webmercator: {
      title: "Web Mercator (EPSG:3857)",
      description: "Web Mercator, nama resmi EPSG:3857, adalah proyeksi peta silinder yang umum digunakan oleh aplikasi peta web seperti Google Maps dan OpenStreetMap. Ini merepresentasikan bumi sebagai bidang datar dengan koordinat dalam meter bukan derajat. Proyeksi ini mengoptimalkan visualisasi web tetapi memperkenalkan distorsi yang nyata di daerah lintang tinggi. Bagi pengembang aplikasi yang perlu menampilkan peta di web, memahami proyeksi Web Mercator dan konversi koordinatnya sangat penting."
    },
    
    utm: {
      title: "UTM (Universal Transverse Mercator)",
      description: "UTM adalah sistem berbasis grid global yang membagi dunia menjadi 60 zona, masing-masing selebar 6 derajat bujur. Koordinat dinyatakan dalam meter sebagai 'jarak timur' dan 'jarak utara' relatif terhadap asal setiap zona. Ini biasa digunakan dalam survei, aplikasi militer, dan sistem GIS yang lebih menyukai pengukuran metrik. Di China, sistem koordinat UTM memiliki aplikasi penting dalam survei profesional dan proyek teknik, terutama dalam skenario yang membutuhkan perhitungan jarak yang tepat."
    }
  },
  
  useCases: {
    title: "Skenario Penggunaan Umum untuk Konversi Koordinat",
    
    case1: {
      title: "Pengembangan Aplikasi Mobile",
      description: "Saat mengembangkan aplikasi berbasis lokasi yang mungkin digunakan di berbagai negara, pengembang perlu mempertimbangkan persyaratan sistem koordinat regional. Misalnya, aplikasi navigasi yang digunakan di China dan pasar internasional perlu mengkonversi antara koordinat WGS-84 dan GCJ-02 untuk menampilkan posisi yang akurat di masing-masing peta. Ini sangat penting untuk e-niaga lintas batas, aplikasi perjalanan internasional, dan platform logistik global."
    },
    
    case2: {
      title: "Integrasi Data GIS",
      description: "Proyek Sistem Informasi Geografis (GIS) sering kali perlu menggabungkan data dari berbagai sumber yang menggunakan sistem koordinat berbeda. Misalnya, mengintegrasikan citra satelit (biasanya menggunakan WGS-84) dengan data perencanaan kota dari sumber China (menggunakan GCJ-02) memerlukan konversi koordinat untuk memastikan keselarasan spasial yang benar. Dalam proyek pembangunan kota pintar, pemantauan lingkungan, dan perencanaan regional di China, konversi koordinat ini merupakan langkah kunci dalam integrasi data."
    },
    
    case3: {
      title: "Navigasi Lintas Batas",
      description: "Perusahaan transportasi dan logistik yang beroperasi di daerah perbatasan (terutama di sekitar China) perlu mengkonversi koordinat saat kendaraan atau aset mereka melintasi daerah yang menggunakan standar peta berbeda. Ini memastikan pelacakan yang terus-menerus dan akurat terlepas dari lokasi. Dengan dorongan Inisiatif Sabuk dan Jalan, kebutuhan akan peralihan sistem koordinat yang mulus dalam logistik lintas batas semakin meningkat."
    },
    
    case4: {
      title: "Visualisasi Data Peta",
      description: "Peneliti dan analis yang menangani kumpulan data global sering kali perlu mengkonversi koordinat untuk memastikan visualisasi yang benar di berbagai platform peta. Misalnya, memplot data penelitian di peta Baidu memerlukan konversi koordinat WGS-84 ke BD-09, sementara memvisualisasikan data yang sama di Google Maps memerlukan penggunaan koordinat WGS-84 asli. Kemampuan konversi koordinat ini sangat penting dalam proyek penelitian kolaboratif internasional yang dilakukan di China."
    }
  },
  
  howToUse: {
    title: "Cara Menggunakan Alat Konversi Sistem Koordinat",
    introduction: "Alat konversi koordinat kami membuat konversi antara berbagai sistem menjadi mudah. Berikut panduan langkah demi langkah untuk menggunakan alat ini secara efektif:",
    
    step1: {
      title: "Pilih Sistem Koordinat Anda",
      description: "Pertama, pilih sistem koordinat sumber (sistem tempat koordinat Anda saat ini berada) dan sistem koordinat target (sistem yang ingin Anda konversikan) dari menu dropdown. Pilihan umum termasuk mengkonversi dari WGS-84 perangkat GPS ke GCJ-02 yang digunakan oleh peta China, atau dari GCJ-02 peta Gaode ke BD-09 peta Baidu."
    },
    
    step2: {
      title: "Masukkan Koordinat Anda",
      description: "Masukkan koordinat Anda di bidang yang sesuai. Untuk sistem lintang/bujur (WGS-84, GCJ-02, BD-09), masukkan derajat desimal. Untuk sistem proyeksi (Web Mercator, UTM), masukkan nilai dalam meter. Pastikan untuk memasukkan data dengan format yang benar seperti yang ditunjukkan oleh petunjuk alat, misalnya koordinat WGS-84 Lapangan Tiananmen Beijing adalah: 39.909187, 116.397451."
    },
    
    step3: {
      title: "Konversi Koordinat Anda",
      description: "Klik tombol \"Konversi Koordinat\" untuk melakukan konversi. Hasil akan ditampilkan di bawah, menunjukkan nilai koordinat individual dan string koordinat terformat yang dapat Anda salin dengan satu klik. Hasil konversi akan akurat hingga 6 desimal, cukup untuk sebagian besar kebutuhan aplikasi."
    },
    
    step4: {
      title: "Konversi Massal (Opsional)",
      description: "Untuk beberapa pasang koordinat, gunakan bagian konversi massal. Masukkan koordinat Anda (satu pasang per baris), pilih format input, lalu klik \"Konversi Massal\" untuk memprosesnya sekaligus. Anda kemudian dapat mengekspor hasil ke file CSV untuk digunakan di aplikasi lain atau analisis lebih lanjut."
    },
    
    example: {
      title: "Contoh Konversi",
      description: "Mengkonversi koordinat Kota Terlarang Beijing:\n\n• WGS-84: 39.916345, 116.397155\n• Konversi ke GCJ-02: 39.91748, 116.40382\n• Konversi ke BD-09: 39.92373, 116.41029\n\nPerhatikan pergeseran koordinat beberapa ratus meter antara sistem, yang menyoroti pentingnya menggunakan sistem koordinat yang benar untuk aplikasi tertentu. Dalam perangkat lunak navigasi, perbedaan ini dapat menyebabkan kesalahan posisi yang nyata."
    }
  },
  
  tips: {
    title: "Praktik Terbaik untuk Konversi Koordinat",
    tip1: "Selalu verifikasi sistem koordinat sumber data Anda sebelum konversi untuk memastikan akurasi. Terutama saat menangani data dari pihak ketiga, memahami sistem koordinat mereka sangat penting.",
    tip2: "Untuk aplikasi yang digunakan di China daratan, ingatlah bahwa menggunakan koordinat WGS-84 secara langsung di peta dapat menyebabkan kesalahan posisi 100-500 meter, yang sangat terlihat dalam aplikasi navigasi dan penentuan posisi yang presisi.",
    tip3: "Saat menangani data di dekat perbatasan (misalnya, Hong Kong/China daratan), berhati-hatilah dengan sistem koordinat yang digunakan. Daerah ini sering menjadi zona transisi perubahan sistem koordinat.",
    tip4: "Untuk aplikasi presisi tinggi, pertimbangkan untuk menggunakan pustaka konversi yang lebih kompleks yang mempertimbangkan variasi lokal dan parameter geodesi. Dalam aplikasi survei dan teknik profesional, konversi koordinat dengan akurasi tingkat sentimeter mungkin diperlukan."
  },
  
  faq: {
    title: "Pertanyaan yang Sering Diajukan",
    q1: "Mengapa koordinat GPS saya tidak cocok dengan peta China?",
    a1: "Perangkat GPS menyediakan koordinat dalam sistem WGS-84, sementara peta China secara hukum harus menggunakan sistem GCJ-02 dengan pergeseran yang disengaja. Ini menciptakan perbedaan biasanya 100-500 meter. Menggunakan alat konversi ini dapat membantu menyelaraskan data GPS Anda dengan peta China. Banyak pengguna menghadapi masalah ini saat menggunakan perangkat GPS internasional untuk navigasi di China.",
    
    q2: "Apakah konversi ini reversibel dan tanpa kehilangan data?",
    a2: "Karena sifat algoritma enkripsi, konversi antara WGS-84 dan GCJ-02 atau BD-09 tidak sepenuhnya reversibel. Namun, alat ini mengimplementasikan algoritma paling akurat yang tersedia untuk meminimalkan kesalahan, biasanya mengontrol kesalahan dalam operasi reversibel hingga 1-2 meter. Untuk sebagian besar aplikasi komersial dan konsumen, akurasi ini sudah cukup.",
    
    q3: "Sistem koordinat apa yang harus digunakan aplikasi saya?",
    a3: "Ini tergantung pada penyedia peta dan wilayah Anda: untuk aplikasi global dan layanan seperti Google Maps di luar China, gunakan WGS-84; untuk peta Gaode dan Google Maps versi China, gunakan GCJ-02; untuk peta Baidu, gunakan BD-09; untuk pustaka peta web seperti Leaflet atau OpenLayers, gunakan Web Mercator; untuk aplikasi yang membutuhkan pengukuran dalam meter di wilayah tertentu, gunakan UTM. Ini sangat penting saat mengembangkan aplikasi layanan lokasi untuk pasar domestik.",
    
    q4: "Seberapa akurat konversi ini?",
    a4: "Konversi yang diimplementasikan dalam alat ini didasarkan pada algoritma publik terbaik yang tersedia, akurat hingga 1-2 meter dalam sebagian besar kasus. Namun, algoritma enkripsi asli untuk GCJ-02 dan BD-09 adalah kepemilikan, sehingga mungkin ada perbedaan kecil dibandingkan dengan konversi resmi. Untuk aplikasi profesional yang membutuhkan akurasi tingkat sentimeter, solusi sistem informasi geografis tingkat komersial mungkin perlu dipertimbangkan."
  },
  
  conclusion: {
    title: "Sederhanakan Pekerjaan Geospasial Anda dengan Alat Konversi Koordinat Kami",
    text: "Konversi sistem koordinat adalah aspek penting tetapi sering diabaikan dalam menangani data geospasial. Alat konversi koordinat online gratis kami menghilangkan kompleksitas proses ini, memungkinkan Anda dengan cepat dan akurat mengkonversi antara sistem WGS-84, GCJ-02, BD-09, Web Mercator dan UTM. Baik Anda mengembangkan aplikasi peta, menganalisis data geografis, atau hanya perlu memplot titik yang akurat di berbagai peta, alat ini memberikan solusi langsung dan efektif untuk tantangan sistem koordinat. Alat Konversi Sistem Koordinat membantu Anda bekerja dengan mulus dalam lingkungan sistem informasi geografis global yang beragam."
  },
  
  relatedTools: {
    title: "Alat Geospasial Terkait",
    tools: [
      {
        name: "Penampil GeoJSON",
        description: "Visualisasi dan edit file GeoJSON dengan alat peta interaktif kami.",
        url: "https://www.ufreetools.com/tools/geojson-viewer"
      },
      {
        name: "Pencari Lokasi IP",
        description: "Temukan lokasi geografis alamat IP dengan alat pencarian IP kami.",
        url: "https://www.ufreetools.com/tools/ip-lookup"
      }
    ]
  },
  
  externalLinks: {
    intro: "Pelajari lebih lanjut tentang sistem koordinat dari sumber-sumber otoritatif ini:",
    wikipedia: "Wikipedia: Sistem Koordinat Geografis",
    epsg: "Basis Data Sistem Koordinat EPSG.io"
  }
}
