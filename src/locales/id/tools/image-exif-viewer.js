export default {
  name: 'Penampil EXIF Gambar',
  description: 'Lihat dan analisis metadata EXIF dalam foto',
  upload: {
    title: 'Unggah Gambar',
    dropzone: 'Seret dan lepas gambar di sini atau klik untuk menelusuri',
    maxSize: 'Ukuran file maksimum: 15MB',
    supportedFormats: 'Format yang didukung: JPG, TIFF, HEIC, PNG',
    anyImageFile: 'File gambar apa pun yang mengandung data EXIF'
  },
  display: {
    title: 'Informasi Gambar',
    noExif: 'Tidak ditemukan data EXIF dalam gambar ini',
    basicInfo: 'Informasi Dasar',
    camera: 'Informasi Kamera',
    exposure: 'Informasi Eksposur',
    location: 'Informasi Lokasi',
    dates: 'Informasi Tanggal',
    advanced: 'Data EXIF Lanjutan',
    thumbnail: 'Thumbnail EXIF'
  },
  exif: {
    fileName: 'Nama File',
    fileSize: 'Ukuran File',
    fileType: 'Tipe File',
    dimensions: 'Dimensi',
    make: 'Pembuat Kamera',
    model: 'Model Kamera',
    lens: 'Lensa',
    focalLength: 'Panjang Fokus',
    focalLength35: 'Panjang Fokus (35mm)',
    aperture: 'Apertur',
    fNumber: 'Nilai F',
    exposureTime: 'Waktu Eksposur',
    shutterSpeed: 'Kecepatan Rana',
    iso: 'ISO',
    exposureMode: 'Mode Eksposur',
    exposureProgram: 'Program Eksposur',
    meteringMode: 'Mode Pengukuran',
    flash: 'Flash',
    flashMode: 'Mode Flash',
    whiteBalance: 'Keseimbangan Warna Putih',
    exposureBias: 'Kompensasi Eksposur',
    latitude: 'Lintang',
    longitude: 'Bujur',
    altitude: 'Ketinggian',
    locationName: 'Nama Lokasi',
    dateOriginal: 'Tanggal Pengambilan',
    dateDigitized: 'Tanggal Digitalisasi',
    dateModified: 'Tanggal Modifikasi',
    software: 'Perangkat Lunak',
    artist: 'Artis',
    copyright: 'Hak Cipta',
    resolution: 'Resolusi',
    colorSpace: 'Ruang Warna',
    orientation: 'Orientasi',
    compression: 'Kompresi',
    bitsPerSample: 'Bit per Sampel',
    maxAperture: 'Apertur Maksimum',
    contrast: 'Kontras',
    saturation: 'Saturasi',
    sharpness: 'Ketajaman',
    brightness: 'Kecerahan',
    sceneCaptureType: 'Tipe Pengambilan Adegan',
    gainControl: 'Kontrol Gain',
    serialNumber: 'Nomor Seri',
    width: 'Lebar',
    height: 'Tinggi',
  },
  map: {
    title: 'Lokasi Foto',
    show: 'Tampilkan di Peta',
    noLocation: 'Tidak ada data lokasi yang tersedia',
    directions: 'Dapatkan Petunjuk Arah',
    copy: 'Salin Koordinat',
    warning: 'Peringatan: Gambar ini mengandung data lokasi. Berhati-hatilah saat membagikannya.'
  },
  actions: {
    showAll: 'Tampilkan Semua Metadata',
    hideAll: 'Sembunyikan Semua Metadata',
    copyAll: 'Salin Semua Metadata',
    save: 'Simpan Metadata sebagai JSON',
    removeMeta: 'Hapus Metadata',
    download: 'Unduh Gambar Tanpa Metadata',
    viewFullSize: 'Lihat Ukuran Asli',
    refresh: 'Muat Ulang Data'
  },
  settings: {
    title: 'Pengaturan Tampilan',
    showGroups: 'Kelompokkan Metadata',
    showRaw: 'Tampilkan Nilai Mentah',
    showTechnical: 'Tampilkan Data Teknis',
    showFiltered: 'Sembunyikan Kolom Kosong',
    darkMode: 'Mode Gelap',
    mapProvider: 'Penyedia Peta'
  },
  tips: {
    privacy: 'Tips Privasi: Foto mungkin mengandung data pribadi seperti lokasi dan informasi perangkat.',
    noExif: 'Tidak melihat data EXIF? Beberapa media sosial dan alat pengeditan gambar menghapus metadata.',
    rawView: 'Beralih ke "Tampilan Mentah" untuk melihat semua metadata yang tersedia.'
  },
  messages: {
    copied: 'Metadata telah disalin ke clipboard',
    saved: 'Metadata telah disimpan sebagai file JSON',
    noExif: 'Tidak ditemukan data EXIF dalam gambar ini',
    metadataRemoved: 'Metadata berhasil dihapus',
    imageLoaded: 'Gambar berhasil dimuat',
    notUse: 'Tidak Digunakan',
    use: 'Digunakan',
    auto: 'Otomatis',
    manual: 'Manual',
    reset: 'Diatur Ulang',
    exifExtracted: 'Data EXIF telah diekstrak',
  },
  error: {
    copyFailed: 'Gagal menyalin',
    exportFailed: 'Gagal mengekspor',
    exifExtractionFailed: 'Gagal mengekstrak data EXIF',
    imageLoadFailed: 'Gagal memuat gambar',
  },
  orientation: {
    normal: 'Normal',
    horizontalFlip: 'Flip Horizontal',
    rotate180: 'Putar 180°',
    verticalFlip: 'Flip Vertikal',
    rotate90VerticalFlip: 'Putar 90° dan Flip Vertikal',
    rotate90: 'Putar 90°',
    rotate90HorizontalFlip: 'Putar 90° dan Flip Horizontal',
    rotate270: 'Putar 270°'
  },
  article: {
    title: "Panduan Lengkap Penampil Data EXIF Gambar - Ekstrak Metadata Tersembunyi Foto",
    intro: {
      title: "Apa itu Data EXIF dan Mengapa Anda Membutuhkan Penampil EXIF",
      p1: "<b>Data EXIF (Exchangeable Image File Format)</b> adalah informasi tersembunyi yang tertanam dalam foto digital yang mengungkapkan banyak detail tentang bagaimana, kapan, dan di mana gambar tersebut diambil. Penampil EXIF gambar kami menyediakan solusi komprehensif untuk mengekstrak dan menganalisis metadata ini, memberikan fotografer, ahli forensik digital, dan pengguna yang peduli privasi alat yang kuat untuk mengungkap informasi yang tidak terlihat oleh mata.",
      p2: "Di dunia digital saat ini, <b>ekstraksi metadata foto</b> menjadi semakin berharga baik untuk keperluan profesional maupun pribadi. Baik Anda seorang fotografer yang mencari verifikasi pengaturan kamera untuk perbaikan teknis, penyelidik digital yang memeriksa keaslian gambar, atau hanya penasaran tentang informasi apa yang mungkin dibocorkan oleh foto yang Anda bagikan, alat penampil EXIF kami memberikan akses instan ke metadata penting ini tanpa perlu menginstal perangkat lunak khusus.",
      p3: "<b>Analisis data EXIF online</b> yang kami kembangkan memungkinkan pengguna untuk segera mengungkap model kamera, pengaturan eksposur, koordinat GPS, tanggal pembuatan, dan puluhan bidang metadata lainnya yang menyertai gambar digital. Solusi berbasis browser ini bekerja di semua platform dan perangkat, menghormati privasi Anda dengan memproses gambar secara lokal tanpa mengunggah ke server eksternal, memastikan informasi foto sensitif tetap sepenuhnya di bawah kendali Anda."
    },
    useCases: {
      title: "Aplikasi Praktis Analisis Data EXIF",
      case1: "<b>Pengembangan Keterampilan Fotografi</b>: Fotografer profesional dan amatir menggunakan data EXIF untuk mempelajari gambar yang sukses dan meniru kondisi pemotretan. Dengan memeriksa pengaturan aperture, kecepatan rana, ISO, dan lensa yang tepat dari foto yang menarik, fotografer dapat memahami pilihan teknis yang menciptakan efek visual tertentu dan menerapkan wawasan ini untuk meningkatkan karya mereka sendiri.",
      case2: "<b>Forensik Digital dan Autentikasi</b>: Penyidik dan profesional keamanan siber menganalisis data EXIF untuk memverifikasi keaslian dan sumber gambar. Stempel waktu yang tertanam, informasi perangkat, dan detail perangkat lunak pemrosesan dapat membantu menentukan apakah gambar telah dimanipulasi, memberikan bukti penting untuk proses hukum atau memverifikasi keaslian konten digital di era disinformasi.",
      case3: "<b>Organisasi Foto Berbasis Lokasi</b>: Fotografer perjalanan dan pencatat liburan menggunakan koordinat GPS dalam data EXIF untuk mengatur koleksi foto secara geografis. Metadata lokasi ini dapat secara otomatis memetakan perjalanan fotografi, membuat album berbasis lokasi, dan dengan mudah mencari gambar dari tujuan tertentu, bahkan bertahun-tahun setelah pemotretan.",
      case4: "<b>Audit Privasi dan Keamanan</b>: Pengguna yang sadar keamanan memeriksa data EXIF sebelum berbagi gambar secara online untuk mencegah pengungkapan informasi sensitif yang tidak disengaja. Dengan meninjau dan secara selektif menghapus data lokasi, pengidentifikasi perangkat, dan stempel waktu, individu dapat melindungi diri dari risiko privasi, pelacakan potensial, atau pengungkapan pola yang dapat membahayakan keamanan fisik atau digital.",
      case5: "<b>Pemecahan Masalah Teknis</b>: Teknisi kamera dan profesional dukungan memeriksa data EXIF untuk mendiagnosis masalah perangkat dan memverifikasi fungsi yang benar. Informasi teknis komprehensif yang disimpan dalam EXIF membantu mengidentifikasi masalah potensial dalam pengaturan kamera, komunikasi lensa, atau pemrosesan perangkat lunak yang mungkin memengaruhi kualitas gambar atau kinerja kamera."
    },
    tutorial: {
      title: "Cara Menggunakan Alat Penampil EXIF Gambar Kami",
      intro: "Alat ekstraksi data EXIF kami dirancang secara intuitif dan kuat, memungkinkan Anda dengan cepat menganalisis metadata tersembunyi dari gambar digital apa pun. Ikuti langkah-langkah sederhana ini untuk memulai:",
      step1: {
        title: "Langkah 1: Unggah Gambar Anda",
        description: "Pertama, klik tombol <b>\"Unggah Gambar\"</b> di bagian atas antarmuka alat. Anda dapat memilih file gambar apa pun yang mengandung data EXIF (biasanya file JPG, TIFF, HEIC, atau RAW) dari perangkat Anda. Atau, Anda dapat langsung menyeret dan melepaskan gambar ke area yang ditentukan. Alat ini memproses gambar secara lokal di browser Anda, sehingga tidak ada data yang diunggah ke server kami, menjaga privasi dan keamanan Anda."
      },
      step2: {
        title: "Langkah 2: Tinjau Informasi EXIF Dasar",
        description: "Setelah gambar Anda selesai dimuat, alat akan segera menampilkan informasi EXIF dasar dalam kategori yang terorganisir. Anda akan melihat <b>informasi kamera</b> (merek, model, lensa), <b>detail eksposur</b> (apertur, kecepatan rana, ISO), <b>atribut gambar</b> (dimensi, resolusi), dan tanggal pembuatan. Ikhtisar ini memberikan sekilas metadata yang paling sering dibutuhkan, membantu Anda dengan cepat menilai aspek teknis gambar."
      },
      step3: {
        title: "Langkah 3: Jelajahi Data GPS dan Lokasi",
        description: "Jika gambar Anda mengandung informasi geolokasi, alat akan menampilkan koordinat dan menyediakan tautan untuk melihat lokasi tepat di peta. Fitur ini sangat berguna untuk <b>foto dengan geotag</b> ketika Anda perlu mengingat di mana gambar tertentu diambil. Berhati-hatilah dengan implikasi privasi saat berbagi gambar dengan data GPS lengkap, karena ini mengungkapkan lokasi tepat di mana foto diambil, yang mungkin termasuk informasi sensitif seperti alamat rumah Anda."
      },
      step4: {
        title: "Langkah 4: Ekspor atau Hapus Data EXIF",
        description: "Setelah meninjau metadata, Anda dapat memilih untuk <b>mengekspor data EXIF lengkap sebagai file JSON</b> untuk arsip atau analisis lebih lanjut. Ekspor ini menciptakan catatan komprehensif dari semua bidang metadata yang tersedia. Jika Anda khawatir tentang privasi, Anda dapat menggunakan fitur \"Salin Semua Metadata\" untuk menganalisis data dengan lebih hati-hati atau mempersiapkan penghapusan selektif. Untuk fotografer yang berbagi karya mereka secara online, meninjau dan mungkin menghapus data EXIF sensitif sebelum publikasi membantu mempertahankan batas privasi yang tepat."
      }
    },
    exifDetails: {
      title: "Memahami Kategori Data EXIF Kunci",
      intro: "Metadata EXIF mengandung banyak informasi, yang dibagi menjadi beberapa kategori penting. Memahami kategori ini dapat membantu Anda mendapatkan nilai maksimal dari analisis gambar:",
      camera: {
        title: "Informasi Kamera dan Lensa",
        description: "<b>Metadata kamera</b> mencakup pembuat perangkat, nama model, versi firmware, dan dalam beberapa kasus nomor seri unik. Data lensa menentukan lensa yang digunakan tepatnya, panjang fokus (termasuk setara 35mm untuk sensor yang dipotong), apertur maksimum, dan apakah stabilisasi gambar diaktifkan. Informasi teknis ini sangat berharga bagi fotografer yang membandingkan kinerja perangkat atau memecahkan masalah masalah kualitas gambar antara badan kamera dan lensa yang berbeda."
      },
      exposure: {
        title: "Parameter Eksposur dan Pemotretan",
        description: "<b>Metadata eksposur</b> memberikan catatan lengkap tentang pengaturan yang digunakan untuk menangkap gambar, termasuk nilai apertur (nilai f), kecepatan rana, sensitivitas ISO, mode eksposur (manual, aperture priority, dll.), mode pengukuran, dan kompensasi eksposur. Data pemotretan tambahan mungkin mencakup pengaturan keseimbangan warna putih, informasi flash, mode fokus, dan parameter kedalaman bidang. Detail teknis ini membantu fotografer menciptakan kembali kondisi pemotretan yang sukses atau menganalisis mengapa beberapa gambar unggul sementara yang lain kurang."
      },
      location: {
        title: "Koordinat Geografis",
        description: "<b>Metadata GPS</b> mencatat lokasi tepat di mana gambar diambil, termasuk garis lintang, bujur, dan terkadang ketinggian. Kamera modern dengan GPS bawaan atau layanan lokasi secara otomatis menanamkan informasi ini kecuali jika fitur tersebut dinonaktifkan. Data lokasi mengaktifkan fungsi organisasi yang kuat seperti pemetaan otomatis dan pencarian berbasis lokasi, tetapi juga menimbulkan pertimbangan privasi saat berbagi gambar yang berisi lokasi yang dapat diidentifikasi seperti rumah atau fasilitas sensitif."
      },
      time: {
        title: "Informasi Stempel Waktu",
        description: "<b>Metadata waktu</b> secara akurat mencatat kapan gambar dibuat, dimodifikasi, atau didigitalkan. Sebagian besar kamera menyimpan tanggal dan waktu penangkapan asli, sementara perangkat lunak pengeditan dapat menambahkan stempel waktu tambahan saat memproses atau mengekspor file. Penanda waktu ini sangat penting untuk mengatur koleksi foto, membuat garis waktu yang akurat dari peristiwa, dan menetapkan asal gambar untuk tujuan dokumentasi atau bukti. Penyidik sering menggunakan metadata stempel waktu untuk memverifikasi keaslian gambar atau mengidentifikasi ketidakkonsistenan."
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Data EXIF",
      q1: "Mengapa saya tidak melihat data EXIF apa pun dalam gambar saya?",
      a1: "Tidak semua gambar mengandung data EXIF, dan ada beberapa kemungkinan alasan untuk ini. Pertama, <b>format file seperti PNG, GIF, dan beberapa WebP biasanya tidak mendukung metadata EXIF</b>, jadi jika gambar Anda menggunakan format ini, tidak akan ada data EXIF. Kedua, banyak platform media sosial dan aplikasi pesan secara otomatis menghapus data EXIF selama proses unggah untuk melindungi privasi pengguna dan mengurangi ukuran file. Jika Anda mengunduh gambar dari media sosial atau menerimanya melalui aplikasi pesan, metadata asli mungkin telah dihapus. Ketiga, beberapa alat pengeditan atau pengoptimalan gambar mungkin sengaja menghapus EXIF selama pemrosesan. Terakhir, jika Anda mencoba menganalisis tangkapan layar, ini biasanya tidak mengandung data EXIF tradisional karena tidak ditangkap dengan kamera. Untuk analisis EXIF yang andal, selalu gunakan file gambar asli yang belum diproses langsung dari kamera atau smartphone.",
      
      q2: "Apakah data EXIF sama dengan metadata di semua file gambar?",
      a2: "<b>Data EXIF adalah jenis metadata tertentu yang terutama ada dalam format JPG dan TIFF</b>, tetapi ini bukan satu-satunya standar metadata yang digunakan dalam gambar digital. Format metadata umum lainnya termasuk XMP (Extensible Metadata Platform), yang digunakan oleh produk Adobe dan mendukung lebih banyak jenis file termasuk PNG dan PDF; IPTC (International Press Telecommunications Council), yang berfokus pada deskripsi konten, hak cipta, dan hak penggunaan; dan profil ICC untuk informasi manajemen warna. Meskipun alat penampil EXIF kami terutama berfokus pada ekstraksi data EXIF, ia juga dapat mendeteksi dan menampilkan beberapa informasi XMP dan IPTC jika ada. Setiap standar metadata melayani tujuan yang berbeda, dengan EXIF berfokus pada informasi teknis kamera, XMP menangani riwayat pengeditan dan penyesuaian kreatif, dan IPTC mengelola hak konten dan deskripsi. Untuk alur kerja fotografi profesional, memahami perbedaan antara jenis metadata ini dapat membantu mengelola gambar dengan benar dan melestarikan informasi penting.",
      
      q3: "Bagaimana cara menghapus data lokasi sensitif sebelum berbagi foto?",
      a3: "<b>Menghapus koordinat GPS</b> sebelum berbagi gambar secara online adalah praktik privasi yang penting, terutama untuk foto yang diambil di lokasi sensitif seperti rumah atau sekolah anak Anda. Alat penampil EXIF kami memungkinkan Anda mengidentifikasi apakah gambar mengandung data lokasi, yang merupakan langkah kritis pertama sebelum penghapusan. Untuk benar-benar menghapus data ini, Anda memiliki beberapa pilihan: 1) Gunakan alat penghapus EXIF khusus atau editor yang mendukung pembersihan metadata; 2) Sebagian besar perangkat lunak pengeditan foto modern, termasuk Adobe Lightroom dan Photoshop, menyertakan opsi untuk menghapus metadata secara selektif saat mengekspor; 3) Di smartphone, Anda biasanya dapat menonaktifkan penandaan lokasi dalam pengaturan aplikasi kamera untuk mencegah pencatatan data ini sejak awal; 4) Beberapa platform media sosial secara otomatis menghapus data EXIF selama proses unggah, tetapi Anda tidak boleh mengandalkan ini sebagai metode perlindungan utama. Sebagai praktik terbaik, buat alur kerja yang konsisten untuk meninjau dan membersihkan metadata sensitif sebelum berbagi foto apa pun, terutama untuk gambar yang mungkin mengungkapkan lokasi rutin atau informasi pribadi Anda.",
      
      q4: "Seberapa akurat stempel waktu dalam data EXIF?",
      a4: "<b>Akurasi stempel waktu EXIF</b> sepenuhnya bergantung pada apakah jam internal kamera diatur dengan benar saat foto diambil. Banyak pengguna lupa mengonfigurasi waktu, tanggal, atau zona waktu yang akurat di kamera mereka, yang mengakibatkan metadata waktu yang tidak akurat. Ketika jam kamera dipelihara dengan benar, data waktu EXIF dapat akurat hingga detik, sangat berharga untuk organisasi kronologis atau verifikasi. Namun, beberapa faktor dapat memengaruhi akurasi ini: 1) Kamera tidak menyesuaikan perubahan waktu musim panas secara otomatis; 2) Saat bepergian melintasi zona waktu, fotografer sering lupa memperbarui pengaturan kamera; 3) Jam kamera dapat melayang seperti jam elektronik apa pun seiring waktu; 4) Pengangkatan atau kehabisan baterai dapat mengatur ulang jam kamera ke default pabrik. Untuk verifikasi waktu yang kritis, yang terbaik adalah secara berkala menyinkronkan jam kamera dengan sumber waktu yang akurat. Beberapa kamera canggih sekarang mendukung sinkronisasi waktu otomatis melalui GPS atau koneksi smartphone, yang secara signifikan meningkatkan keandalan stempel waktu.",
      
      q5: "Bisakah data EXIF digunakan untuk menentukan apakah foto telah diedit?",
      a5: "<b>Data EXIF dapat memberikan petunjuk tentang pengeditan gambar</b>, tetapi ini bukan metode yang tidak dapat dielakkan untuk mendeteksi semua jenis manipulasi. Indikator yang paling jelas adalah adanya label perangkat lunak yang menunjukkan pemrosesan di aplikasi seperti Photoshop atau Lightroom. Beberapa program pengeditan juga mencatat tanggal modifikasi yang berbeda dari waktu penangkapan asli. Namun, EXIF memiliki keterbatasan signifikan sebagai alat autentikasi: 1) Metadata itu sendiri dapat dimanipulasi dengan perangkat lunak khusus; 2) Pengeditan dasar mungkin tidak meninggalkan jejak yang jelas dalam metadata; 3) Banyak alat pengeditan mempertahankan EXIF kamera asli sambil menambahkan informasi pemrosesan mereka sendiri; 4) Metadata dapat sepenuhnya dihapus dan diganti dengan perangkat lunak yang tepat. Untuk kebutuhan autentikasi yang serius, seperti analisis forensik atau verifikasi gambar jurnalistik, teknik tambahan di luar pemeriksaan EXIF diperlukan, termasuk analisis artefak kompresi, pola noise, dan metode forensik digital lainnya. Verifikasi profesional biasanya memerlukan alat yang melampaui penampil EXIF konsumen."
    },
    relatedTools: {
      title: "Jelajahi Alat Fotografi dan Gambar Terkait",
      description: "Tingkatkan alur kerja gambar digital Anda dengan alat pelengkap ini:",
      tool1: {
        name: "Alat Kompresi Gambar",
        url: "https://www.ufreetools.com/tool/image-compressor",
        description: "Kurangi ukuran file gambar sambil mempertahankan kualitas, untuk pemuatan situs yang lebih cepat dan berbagi yang lebih mudah."
      },
      tool2: {
        name: "Pengubah Ukuran Gambar Batch",
        description: "Ubah ukuran, konversi, dan optimalkan banyak gambar sekaligus.",
        url: "https://www.ufreetools.com/tool/image-batch-resizer"
      },
      tool3: {
        name: "Watermark Gambar",
        description: "Tambahkan watermark teks atau gambar ke foto Anda dengan pengaturan yang dapat disesuaikan.",
        url: "https://www.ufreetools.com/tool/image-watermark"
      },
      tool4: {
        name: "Alat Pixelasi Gambar",
        url: "https://www.ufreetools.com/tool/image-pixelator",
        description: "Buat seni piksel atau buramkan bagian sensitif gambar untuk melindungi privasi atau menciptakan efek artistik."
      }
    },
    resources: {
      title: "Sumber Daya Otoritatif tentang Data EXIF",
      resource1: {
        name: "Wikipedia EXIF",
        url: "https://en.wikipedia.org/wiki/Exif",
        description: "Spesifikasi teknis dan dokumen standar resmi untuk format EXIF."
      },
      resource2: {
        name: "Camera & Imaging Products Association (CIPA)",
        url: "https://www.cipa.jp/c/index.html",
        description: "Organisasi industri yang bertanggung jawab untuk mengembangkan dan memelihara standar EXIF."
      },
      resource3: {
        name: "Digital Photography Review - Memahami Metadata",
        url: "https://www.dpreview.com/forums/thread/4175094",
        description: "Panduan dan diskusi komprehensif tentang metadata gambar dan dampaknya terhadap fotografer."
      }
    }
  }
}