export default {
  name: 'Pengabur Kode',
  description: 'Mengaburkan kode JavaScript dan CSS untuk meningkatkan keamanan dan melindungi kekayaan intelektual',
  languages: {
    title: 'Pilih Bahasa',
    javascript: 'JavaScript',
    css: 'CSS'
  },
  options: {
    title: 'Opsi Pengaburan',
    javascript: {
      compact: 'Output Ringkas (Hapus spasi)',
      controlFlowFlattening: 'Penyederhanaan Alur Kontrol',
      deadCodeInjection: 'Sisipkan Kode Tidak Berguna',
      debugProtection: 'Proteksi Debug',
      selfDefending: 'Pertahanan Diri (Cegah pemformatan)',
      stringArray: 'Konversi String ke Array',
      renameGlobals: 'Ganti Nama Variabel Global',
      renameProperties: 'Ganti Nama Properti',
      mangle: 'Pengaburan Nama Variabel',
      stringArrayEncoding: 'Enkoding Array String',
      stringArrayThreshold: 'Ambang Array String',
      unicodeEscapeSequence: 'Urutan Escape Unicode'
    },
    css: {
      compact: 'Output Ringkas',
      renameSelectors: 'Ganti Nama Selektor',
      preserveImportant: 'Pertahankan !important',
      restructure: 'Restrukturisasi Aturan',
      keepVendorPrefixes: 'Pertahankan Prefix Browser',
      removeComments: 'Hapus Komentar'
    }
  },
  input: {
    title: 'Masukkan Kode',
    placeholder: 'Masukkan kode yang akan diaburkan di sini...',
    clear: 'Kosongkan',
    paste: 'Tempel',
    upload: 'Unggah File',
    inputObfuscatorCode: 'Masukkan kode yang akan diaburkan',
  },
  output: {
    title: 'Hasil Pengaburan',
    placeholder: 'Kode yang telah diaburkan akan muncul di sini...',
    copy: 'Salin',
    download: 'Unduh',
    stats: {
      original: 'Ukuran Asli',
      obfuscated: 'Ukuran Setelah Diaburkan',
      ratio: 'Rasio Kompresi'
    },
    increase: 'Bertambah',
    decrease: 'Berkurang',
  },
  actions: {
    obfuscate: 'Aburkan',
    clear: 'Hapus'
  },
  messages: {
    copied: 'Tersalin ke clipboard',
    copyFailed: 'Gagal menyalin, silakan salin manual',
    processing: 'Sedang memproses...',
    error: 'Terjadi kesalahan saat pengaburan',
    invalidInput: 'Kode input tidak valid',
    uploadError: 'Gagal mengunggah file',
    fileTooLarge: 'File terlalu besar (maksimal 2MB)'
  },
  tips: {
    title: 'Tips Penggunaan',
    tip1: 'Pengaburan kode dapat meningkatkan kesulitan reverse engineering, tetapi tidak sepenuhnya mencegah kode dibongkar',
    tip2: 'Mengaktifkan lebih banyak opsi pengaburan akan menambah ukuran kode dan overhead eksekusi',
    tip3: 'Beberapa opsi pengaburan mungkin mempengaruhi kemampuan debugging kode',
    tip4: 'Disarankan untuk mencadangkan kode asli sebelum diaburkan',
    tip5: 'Untuk proyek besar, disarankan menggunakan alat pengaburan profesional'
  },
  demo: {
    title: 'Contoh',
    function: 'Contoh Fungsi',
    class: 'Contoh Kelas',
    simple: 'Gaya Sederhana',
    animation: 'Efek Animasi',
  },
  article: {
    title: "Memahami Teknik Pengaburan Kode Secara Mendalam, Meningkatkan Keamanan Aplikasi dan Perlindungan Kekayaan Intelektual",
    overview: {
      title: "Apa itu Pengaburan Kode?",
      content: "<strong>Pengaburan kode</strong> adalah teknik keamanan yang mengubah kode sumber yang dapat dibaca menjadi versi yang kompleks dan sulit dipahami sambil mempertahankan fungsinya. Langkah pertahanan kuat ini membantu melindungi kekayaan intelektual, mencegah reverse engineering, dan melindungi algoritma sensitif atau logika bisnis dari akses tidak sah.<br><br>Alat pengabur kode mendukung pengaburan JavaScript dan CSS, menggunakan berbagai teknik seperti penggantian nama variabel, penyederhanaan alur kontrol, penyisipan kode tidak berguna, dan enkripsi string, menciptakan lapisan perlindungan untuk kode guna mencegah pencurian dan manipulasi. Dengan membuat kode sumber lebih sulit dianalisis dan dipahami, pengaburan memberikan lapisan keamanan penting untuk aplikasi web dan skrip klien yang telah di-deploy."
    },
    useCases: {
      title: "Skenario Penggunaan Umum Pengaburan Kode",
      items: [
        {
          title: "Perlindungan Kekayaan Intelektual",
          description: "Dengan membuat kode sumber sulit dipahami dan disalin, melindungi algoritma berharga, logika bisnis proprietary, dan implementasi kode inovatif dari pesaing atau penyalinan tidak sah."
        },
        {
          title: "Peningkatan Keamanan Klien",
          description: "Meningkatkan keamanan JavaScript yang berjalan di browser dengan mengaburkan mekanisme otentikasi, rutin validasi, dan kode interaksi API, mencegah penyerang dengan mudah memahami dan mengeksploitasi fungsi sensitif ini."
        },
        {
          title: "Perlindungan Verifikasi Lisensi",
          description: "Melindungi algoritma pemeriksaan lisensi dan kode aktivasi produk agar tidak dilewati atau dibongkar, membuat pengguna tidak sah lebih sulit menghapus atau memodifikasi batasan lisensi."
        },
        {
          title: "Mencegah Analisis Otomatis",
          description: "Dengan memperkenalkan teknik pengaburan, membuat analisis statis menjadi kompleks dan membuat alat berbahaya lebih sulit mengidentifikasi kerentanan keamanan atau titik ekstraksi secara otomatis, sehingga menghambat analisis kode otomatis."
        },
        {
          title: "Perlindungan Aplikasi Web Mobile",
          description: "Melindungi JavaScript dan CSS dalam aplikasi web progresif (PWA) dan aplikasi web mobile yang diunduh ke perangkat pengguna, yang sebaliknya mudah diperiksa dan digunakan kembali."
        },
        {
          title: "Perlindungan Konten Premium",
          description: "Dengan mengaburkan kode yang mengontrol fitur berbayar atau akses konten khusus pelanggan, melindungi mekanisme akses konten premium di situs web dan aplikasi web."
        },
        {
          title: "Deploy Kode Sementara",
          description: "Menggunakan pengaburan untuk melindungi kode promosi, fitur waktu terbatas, atau fitur musiman, mencegah perpanjangan penawaran waktu terbatas atau penemuan fitur mendatang yang tidak sah."
        }
      ]
    },
    guide: {
      title: "Cara Menggunakan Alat Pengabur Kode",
      intro: "Ikuti langkah-langkah ini untuk mengaburkan kode Anda secara efektif dan meningkatkan keamanannya:",
      steps: [
        {
          title: "Pilih Bahasa Kode",
          description: "Pertama, pilih bahasa kode yang ingin Anda aburkan. Alat ini saat ini mendukung JavaScript dan CSS. Setiap bahasa memiliki teknik dan opsi pengaburan yang disesuaikan dengan karakteristik spesifiknya."
        },
        {
          title: "Konfigurasi Opsi Pengaburan",
          description: "Pilih opsi pengaburan yang sesuai dengan kebutuhan Anda. Untuk JavaScript, opsi termasuk penyederhanaan alur kontrol, penyisipan kode tidak berguna, konversi array string, dll. Untuk CSS, Anda dapat mengganti nama selektor, mengompres output, dan merestrukturisasi aturan. Semakin banyak opsi yang Anda aktifkan, semakin kuat pengaburannya tetapi mungkin menambah ukuran kode."
        },
        {
          title: "Masukkan Kode Sumber",
          description: "Di bagian input, masukkan kode yang ingin Anda aburkan. Untuk kemudahan, Anda dapat menggunakan contoh yang disediakan untuk melihat bagaimana pengabur menangani berbagai pola kode. Jika menggunakan kode sendiri, pastikan berfungsi dengan benar sebelum diaburkan."
        },
        {
          title: "Hasilkan Kode Teraburkan",
          description: "Klik tombol \"Aburkan\" untuk memproses kode Anda. Alat ini akan menerapkan teknik pengaburan yang dipilih, mengubah kode Anda menjadi versi yang lebih aman dan sulit dibaca sambil mempertahankan fungsinya yang asli."
        },
        {
          title: "Tinjau Hasil",
          description: "Periksa kode teraburkan yang dihasilkan, pastikan memenuhi persyaratan keamanan Anda. Perhatikan perbedaan ukuran dan rasio kompresi yang ditampilkan di bawah output. Dalam beberapa kasus, kode teraburkan mungkin lebih besar dari kode asli karena penambahan mekanisme keamanan."
        },
        {
          title: "Salin atau Unduh Kode Teraburkan",
          description: "Setelah puas dengan hasilnya, gunakan tombol salin untuk menyalin kode teraburkan atau mengunduhnya untuk diimplementasikan dalam proyek Anda. Kode teraburkan dapat digunakan langsung, berfungsi persis seperti kode asli tetapi dengan fitur keamanan tambahan."
        },
        {
          title: "Uji Kode Teraburkan",
          description: "Sebelum deploy ke lingkungan produksi, uji secara menyeluruh kode teraburkan dalam aplikasi Anda untuk memastikan berfungsi dengan baik. Meskipun proses pengaburan mempertahankan fungsionalitas, selalu merupakan praktik baik untuk memvalidasinya dalam lingkungan implementasi spesifik Anda."
        }
      ]
    },
    techniques: {
      title: "Memahami Teknik Pengaburan",
      intro: "Pengaburan kode menggunakan berbagai teknik untuk melindungi kode Anda. Memahami metode ini dapat membantu Anda memilih opsi yang tepat untuk kebutuhan keamanan:",
      items: [
        {
          name: "Penggantian Nama Variabel dan Fungsi",
          description: "Mengganti nama pengenal yang bermakna dengan nama pendek, terenkripsi, atau menyesatkan, membuat kode lebih sulit dipahami. Teknik ini secara signifikan mengurangi keterbacaan kode sambil mempertahankan fungsionalitas lengkap. Dalam JavaScript, saat diaktifkan, ini dapat diterapkan pada variabel, fungsi, bahkan nama global."
        },
        {
          name: "Penyederhanaan Alur Kontrol",
          description: "Mengubah alur kontrol program menjadi struktur yang tampak acak dengan mengganti jalur kode langsung dengan model mesin keadaan. Ini membuat pelacakan eksekusi logis kode menjadi sangat sulit, secara drastis meningkatkan kompleksitas upaya reverse engineering."
        },
        {
          name: "Penyisipan Kode Tidak Berguna",
          description: "Memasukkan kode non-fungsional yang tidak pernah dieksekusi tetapi tampak penting bagi penganalisis kode dan mereka yang mencoba memahami program. Teknik ini menambah kompleksitas dan gangguan, menyamarkan fungsi sebenarnya dari kode."
        },
        {
          name: "Enkripsi String",
          description: "Mengubah literal string dalam kode menjadi bentuk terenkripsi yang hanya didekripsi saat runtime. Ini mencegah analisis string langsung dan membuat identifikasi komponen kritis kode melalui pencarian pola teks atau pesan tertentu menjadi sulit."
        },
        {
          name: "Kode Pertahanan Diri",
          description: "Menambahkan mekanisme yang mendeteksi apakah kode telah dimodifikasi atau ada upaya debugging atau pemformatan. Jika terdeteksi manipulasi, teknik ini dapat menyebabkan kode sengaja gagal, memberikan lapisan perlindungan tambahan terhadap reverse engineering."
        },
        {
          name: "Penggantian Nama Selektor CSS",
          description: "Untuk pengaburan CSS, teknik ini mengganti nama kelas dan ID selektor yang bermakna dengan nama yang dihasilkan secara acak. Ini melindungi struktur gaya Anda, membuat orang lain lebih sulit memahami atau menyalin pola desain Anda."
        }
      ]
    },
    faq: {
      title: "Pertanyaan Umum tentang Pengaburan Kode",
      items: [
        {
          question: "Apakah pengaburan kode dapat sepenuhnya mencegah reverse engineering?",
          answer: "Tidak ada metode pengaburan yang 100% mencegah reverse engineering dari mereka yang bertekad kuat. Pengaburan kode secara signifikan meningkatkan waktu, usaha, dan keahlian yang diperlukan untuk memahami kode Anda, menjadi pencegah kuat terhadap serangan kasual dan sebagian besar alat otomatis. Ini harus dilihat sebagai lapisan dalam strategi keamanan komprehensif, bukan penghalang yang tidak dapat ditembus. Untuk operasi yang benar-benar sensitif, eksekusi sisi server tetap menjadi pilihan paling aman."
        },
        {
          question: "Apakah pengaburan mempengaruhi kinerja kode saya?",
          answer: "Kode teraburkan biasanya memiliki dampak kecil pada kinerja eksekusi JavaScript. Mesin JavaScript modern mengoptimalkan kode, tidak terpengaruh oleh nama variabel atau struktur. Namun, beberapa teknik pengaburan tingkat lanjut seperti penyederhanaan alur kontrol dan proteksi debug mungkin menimbulkan sedikit overhead kinerja. Untuk sebagian besar aplikasi, perbedaan ini dapat diabaikan, tetapi bagian dengan persyaratan kinerja ketat mungkin perlu memilih opsi pengaburan dengan hati-hati."
        },
        {
          question: "Bagaimana cara debug kode teraburkan jika ada masalah?",
          answer: "Debugging kode teraburkan memang sulit. Praktik terbaik meliputi: (1) selalu menyimpan kode sumber asli yang tidak diaburkan sebagai referensi, (2) menggunakan source map yang tersedia, (3) hanya mengaburkan di lingkungan produksi, tidak dalam pengembangan, (4) menguji secara menyeluruh sebelum pengaburan untuk mengurangi kebutuhan debug kode teraburkan, (5) mempertimbangkan implementasi logging untuk bagian kritis yang dapat bertahan setelah pengaburan. Untuk masalah kritis pada kode yang telah di-deploy, Anda mungkin perlu kembali ke versi tidak diaburkan untuk pemecahan masalah."
        },
        {
          question: "Apakah JavaScript teraburkan masih bekerja di semua browser?",
          answer: "JavaScript yang diaburkan dengan benar sepenuhnya kompatibel dengan semua browser modern. Proses pengaburan mempertahankan fungsionalitas sambil mengubah tampilan dan struktur kode. Namun, jika kode asli Anda menggunakan fitur JavaScript sangat baru (ES6+), pastikan browser target mendukung fitur ini, karena pengaburan tidak mengubah level bahasa atau menambahkan polyfill secara otomatis. Pengujian di beberapa browser setelah pengaburan selalu direkomendasikan."
        },
        {
          question: "Apakah pengaburan CSS akan merusak tampilan situs saya?",
          answer: "Jika situs Anda bergantung pada nama kelas atau ID dengan cara tertentu di luar stylesheet, pengaburan CSS mungkin mempengaruhi situs Anda. Misalnya, jika kode JavaScript memilih elemen dengan nama kelas yang diganti selama pengaburan, atau komponen pihak ketiga memerlukan nama kelas CSS tertentu, fungsionalitas mungkin terganggu. Saat menggunakan pengaburan CSS, pastikan Anda juga mengaburkan HTML dan JavaScript yang sesuai, atau gunakan opsi untuk mempertahankan selektor kunci tertentu."
        },
        {
          question: "Berapa besar biasanya ukuran file bertambah setelah pengaburan?",
          answer: "Dampak ukuran bervariasi tergantung pada teknik pengaburan yang diterapkan. Pengaburan dasar dengan kompresi (output ringkas) biasanya mengurangi ukuran file karena menghapus spasi, komentar, dan mempersingkat nama variabel. Namun, teknik keamanan lanjutan seperti penyisipan kode tidak berguna, konversi array string, dan penyederhanaan alur kontrol dapat meningkatkan ukuran file sebesar 20-100% atau lebih. Alat menampilkan persentase perubahan ukuran, membantu Anda menyeimbangkan kebutuhan keamanan dengan pertimbangan ukuran file."
        },
        {
          question: "Bisakah saya hanya mengaburkan bagian tertentu dari kode?",
          answer: "Alat online ini memproses seluruh input kode sekaligus, tetapi Anda dapat mencapai pengaburan parsial dengan: (1) mengaburkan modul atau fungsi kritis secara terpisah, kemudian mengintegrasikannya dengan kode tidak diaburkan, (2) menggunakan teknik pembatasan lingkup seperti fungsi anonim untuk mengisolasi segmen kode sebelum pengaburan, atau (3) untuk proyek besar, menggunakan alat build seperti Webpack dengan plugin yang mendukung pengaburan selektif berdasarkan pola file atau komentar. Fokuskan upaya pengaburan pada bagian yang paling sensitif atau berharga dari basis kode Anda."
        }
      ]
    },
    bestPractices: {
      title: "Praktik Terbaik untuk Pengaburan Kode yang Efektif",
      intro: "Untuk memaksimalkan keamanan sambil mempertahankan fungsionalitas, pertimbangkan praktik terbaik berikut saat mengaburkan kode:",
      items: [
        "Selalu simpan salinan kode sumber asli yang tidak diaburkan di lokasi aman",
        "Uji secara menyeluruh kode teraburkan sebelum deploy untuk memastikan fungsionalitas sepenuhnya dipertahankan",
        "Sesuaikan kekuatan pengaburan dengan persyaratan ukuran dan kinerja kode untuk aplikasi spesifik Anda",
        "Gabungkan pengaburan dengan langkah keamanan lain seperti HTTPS, otentikasi yang tepat, dan validasi sisi server",
        "Untuk JavaScript, hindari mengaburkan kode yang bergantung pada nama fungsi atau variabel tertentu untuk interaksi eksternal",
        "Saat mengaburkan CSS, perhatikan nama kelas yang mungkin dirujuk oleh JavaScript atau komponen pihak ketiga",
        "Pertimbangkan untuk menghasilkan source map untuk debugging, tetapi pisahkan dari kode produksi dan jaga keamanannya",
        "Perbarui metode pengaburan Anda secara teratur seiring munculnya teknologi dan alat baru",
        "Untuk aplikasi yang sangat sensitif, terapkan pendekatan berlapis yang menggabungkan pengaburan, enkripsi, dan pemrosesan sisi server",
        "Pahami cakupan perlindungan: pengaburan terutama menghambat reverse engineering daripada sepenuhnya mencegahnya",
        "Untuk aplikasi web, pertimbangkan untuk menggabungkan pengaburan dengan Kebijakan Keamanan Konten (CSP) untuk meningkatkan keamanan keseluruhan",
        "Dokumentasikan proses dan konfigurasi pengaburan Anda untuk berbagi pengetahuan tim dan kebutuhan pemeliharaan di masa depan"
      ]
    }
  }
}