export default {
  name: 'Alat Uji MQTT',
  description: 'Uji dan debug koneksi MQTT, publikasi pesan dan subskripsi topik',
  connection: {
    title: 'Koneksi',
    broker: 'Port Broker',
    url: 'URL Broker',
    urlPlaceholder: 'Contoh: mqtt://broker.example.com:1883',
    clientId: 'ID Klien',
    clientIdPlaceholder: 'Masukkan ID klien atau biarkan kosong untuk generate otomatis',
    username: 'Username',
    password: 'Password',
    keepAlive: 'Keep Alive',
    cleanSession: 'Sesi Bersih',
    autoReconnect: 'Reconnect Otomatis',
    ssl: 'Gunakan SSL/TLS',
    sslOptions: 'Opsi SSL/TLS',
    protocol: 'Versi Protokol',
    portInfo: 'Port default: MQTT(1883), WebSocket(8083)',
    connect: 'Hubungkan',
    disconnect: 'Putuskan',
    status: 'Status',
    connected: 'Terhubung',
    disconnected: 'Terputus',
    connecting: 'Menghubungkan...'
  },
  publish: {
    title: 'Publikasi',
    topic: 'Topik',
    topicPlaceholder: 'Masukkan topik untuk dipublikasikan',
    message: 'Pesan',
    messagePlaceholder: 'Masukkan konten pesan',
    qos: 'Kualitas Layanan (QoS)',
    retain: 'Retain',
    format: 'Format Konten',
    text: 'Teks',
    json: 'JSON',
    hex: 'Heksadesimal',
    binary: 'Biner',
    send: 'Publikasikan',
    clear: 'Bersihkan',
    history: 'Riwayat',
    addToFavorites: 'Tambahkan ke Favorit',
    validateJson: 'Validasi JSON'
  },
  subscribe: {
    title: 'Subskripsi',
    topic: 'Topik',
    topicPlaceholder: 'Masukkan topik untuk disubskripsi (dukung wildcard # dan +)',
    qos: 'Kualitas Layanan (QoS)',
    subscribe: 'Subscribe',
    unsubscribe: 'Unsubscribe',
    unsubscribeAll: 'Unsubscribe Semua',
    subscriptions: 'Subskripsi Aktif',
    noSubscriptions: 'Tidak ada subskripsi aktif',
    addSubscription: 'Tambah Subskripsi',
    topicPatterns: 'Pola Topik',
    systemTopics: 'Topik Sistem'
  },
  messages: {
    title: 'Pesan',
    received: 'Pesan Diterima',
    sent: 'Pesan Terkirim',
    topic: 'Topik',
    payload: 'Payload',
    qos: 'QoS',
    retained: 'Retained',
    time: 'Waktu',
    clear: 'Bersihkan Pesan',
    export: 'Ekspor Pesan',
    filter: 'Filter',
    noMessages: 'Tidak ada pesan',
    view: 'Lihat Detail',
    copy: 'Salin Payload',
    duplicate: 'Duplikat sebagai Publikasi'
  },
  tools: {
    title: 'Alat',
    topicGenerator: 'Generator Topik',
    payloadFormatter: 'Formatter Payload',
    qosExplainer: 'Penjelas QoS',
    wildcardTester: 'Penguji Wildcard',
    packetInspector: 'Inspektor Paket',
    loadTest: 'Uji Beban'
  },
  settings: {
    title: 'Pengaturan',
    maxMessages: 'Maksimal Pesan',
    timeFormat: 'Format Waktu',
    theme: 'Tema',
    autoExpand: 'Otomatis Buka Pesan',
    saveHistory: 'Simpan Riwayat',
    clearOnDisconnect: 'Bersihkan saat Terputus',
    advanced: 'Pengaturan Lanjut',
    lastWill: 'Pesan Wasiat'
  },
  lastWill: {
    title: 'Wasiat',
    enable: 'Aktifkan Wasiat',
    topic: 'Topik Wasiat',
    message: 'Pesan Wasiat',
    qos: 'QoS Wasiat',
    retain: 'Retain Wasiat'
  },
  notifications: {
    connectSuccess: 'Terhubung ke {broker}',
    connectError: 'Error koneksi: {error}',
    disconnected: 'Terputus dari broker',
    subscribeSuccess: 'Berlangganan {topic}',
    subscribeError: 'Gagal subscribe: {error}',
    unsubscribeSuccess: 'Berhenti berlangganan {topic}',
    publishSuccess: 'Pesan terkirim ke {topic}',
    publishError: 'Gagal publikasi: {error}',
    invalidJson: 'Payload JSON tidak valid',
    packetReceived: 'Menerima {packets} paket'
  },
  article: {
    title: "Alat Uji MQTT - Panduan Lengkap Pengujian Protokol Pesan IoT",
    intro: {
      title: "Apa itu Alat Uji MQTT dan Mengapa Dibutuhkan",
      p1: "<b>MQTT (Message Queuing Telemetry Transport)</b> adalah protokol pesan ringan yang dirancang untuk perangkat terbatas dan jaringan dengan bandwidth rendah serta latensi tinggi, sangat cocok untuk aplikasi IoT (Internet of Things). Alat uji MQTT kami menyediakan lingkungan komprehensif untuk menguji, mendebug, dan mengoptimalkan koneksi MQTT, memungkinkan pengembang memverifikasi infrastruktur komunikasi IoT mereka dengan efisien dan andal.",
      p2: "<b>Alat uji protokol MQTT</b> berfungsi sebagai jembatan penting antara pengembangan perangkat IoT dan penyebarannya, memungkinkan Anda mensimulasikan penerbit dan pelanggan secara bersamaan dalam ekosistem MQTT. Dengan mengimplementasikan publikasi pesan real-time, subskripsi topik, dan diagnostik koneksi, alat kami membantu mengidentifikasi masalah potensial sebelum memengaruhi lingkungan produksi. Pendekatan proaktif ini secara signifikan mengurangi waktu debugging dan meningkatkan keandalan aplikasi IoT.",
      p3: "Dengan <b>klien MQTT online</b> kami, Anda dapat terhubung ke broker MQTT mana pun, menguji berbagai tingkat kualitas layanan (QoS), mengimplementasikan pesan wasiat (LWT), dan memverifikasi pesan yang dipertahankan. Baik Anda mengembangkan sistem smart home, solusi pemantauan industri, atau aplikasi IoT apa pun, alat uji MQTT kami menyediakan fungsionalitas yang diperlukan untuk memastikan infrastruktur pengiriman pesan berfungsi dengan baik dalam berbagai kondisi jaringan dan skenario penggunaan."
    },
    useCases: {
      title: "Aplikasi Praktis Pengujian MQTT",
      case1: "<b>Pengembangan dan Debugging Perangkat IoT</b>: Insinyur perangkat keras dan pengembang firmware menggunakan alat uji MQTT untuk memverifikasi komunikasi perangkat sebelum menyelesaikan desain. Saat mengembangkan produk IoT baru, kemampuan untuk memvalidasi pola publikasi pesan, format payload, dan respons subskripsi membantu mengidentifikasi dan memperbaiki masalah komunikasi sejak awal siklus pengembangan, secara signifikan mempercepat waktu ke pasar.",
      case2: "<b>Integrasi Otomasi Rumah Pintar</b>: Pengembang yang membangun sistem smart home mengandalkan pengujian MQTT untuk memastikan komunikasi yang andal antara berbagai perangkat seperti termostat, sistem pencahayaan, dan sensor keamanan. Alat uji MQTT kami memungkinkan validasi aturan otomatisasi dengan mensimulasikan pemicu dan menganalisis respons perangkat, memastikan ekosistem rumah pintar Anda berfungsi dengan mulus.",
      case3: "<b>Sistem Pemantauan Industri</b>: Dalam lingkungan IoT industri, pengujian MQTT membantu memverifikasi apakah data sensor dikirim, diproses, dan ditanggapi dengan benar. Integrator sistem menggunakan alat kami untuk mensimulasikan pembacaan sensor, menguji ambang batas alarm, dan memverifikasi respons sistem kontrol terhadap berbagai skenario operasi, meningkatkan keandalan di lantai pabrik.",
      case4: "<b>Konfigurasi dan Optimasi Broker MQTT</b>: Administrator sistem menggunakan alat uji MQTT untuk menguji kinerja broker di bawah berbagai beban, menguji mekanisme otentikasi, dan mengoptimalkan pengaturan kualitas layanan. Alat pengujian kami memungkinkan simulasi beberapa klien secara bersamaan, membantu mengidentifikasi kemacetan dan masalah konfigurasi potensial yang dapat memengaruhi sistem produksi.",
      case5: "<b>Pengembangan Aplikasi Multi-Platform</b>: Pengembang yang membangun aplikasi IoT multi-platform perlu memastikan perilaku pesan yang konsisten di seluruh antarmuka web, seluler, dan desktop. Alat uji MQTT menyediakan implementasi referensi standar untuk memverifikasi bahwa semua aplikasi klien menafsirkan pesan secara konsisten, mengurangi kesalahan spesifik platform."
    },
    tutorial: {
      title: "Cara Menggunakan Alat Uji MQTT Kami",
      intro: "Alat uji MQTT kami dirancang secara intuitif namun kuat. Ikuti langkah-langkah sederhana ini untuk menguji implementasi MQTT Anda secara efektif:",
      step1: {
        title: "Langkah 1: Konfigurasi Pengaturan Koneksi",
        description: "Pertama, masukkan <b>detail broker MQTT</b> Anda di bagian koneksi. Masukkan URL broker (misalnya, mqtt://broker.example.com:1883 atau ws://broker.example.com:8083 untuk koneksi WebSocket). Anda dapat menentukan ID klien atau membiarkannya kosong untuk menghasilkan ID acak. Jika broker Anda memerlukan otentikasi, masukkan username dan password. Untuk koneksi aman, aktifkan opsi SSL/TLS. Setelah konfigurasi selesai, klik tombol \"Hubungkan\" untuk membangun koneksi ke broker MQTT."
      },
      step2: {
        title: "Langkah 2: Berlangganan Topik",
        description: "Setelah terhubung ke broker, navigasikan ke <b>bagian subskripsi</b> untuk mendengarkan pesan. Masukkan topik yang ingin Anda langgani di kolom topik. Topik MQTT mendukung wildcard - gunakan # untuk mencocokkan beberapa level topik dan + untuk mencocokkan satu level (misalnya, home/+/temperature berlangganan pembacaan suhu dari ruangan mana pun). Pilih tingkat kualitas layanan (QoS) yang diinginkan, lalu klik \"Subscribe\". Alat sekarang akan mendengarkan pesan apa pun yang dipublikasikan ke topik yang cocok."
      },
      step3: {
        title: "Langkah 3: Publikasikan Pesan",
        description: "Untuk mengirim pesan ke broker, gunakan <b>bagian publikasi</b> alat. Masukkan topik tujuan dan tulis payload pesan Anda. Anda dapat memformat payload sebagai teks biasa, JSON (dengan validasi), heksadesimal, atau data biner. Atur tingkat QoS yang sesuai dan putuskan apakah akan mengatur flag \"retain\", yang menginstruksikan broker untuk menyimpan pesan untuk pelanggan di masa mendatang. Klik tombol \"Publikasikan\" untuk mengirim pesan Anda ke broker."
      },
      step4: {
        title: "Langkah 4: Pantau dan Analisis Pesan",
        description: "<b>Bagian pesan</b> menampilkan semua komunikasi yang diterima dan dikirim. Setiap pesan menunjukkan topik, payload, tingkat QoS, status retain, dan stempel waktu. Anda dapat memfilter pesan berdasarkan topik atau konten untuk fokus pada aliran data tertentu. Untuk pemeriksaan mendetail, klik pesan apa pun untuk melihat konten lengkapnya. Gunakan tombol \"Salin Payload\" untuk mengekstrak data pesan untuk analisis lebih lanjut, atau gunakan opsi \"Duplikat sebagai Publikasi\" untuk merespons pesan yang diterima dengan cepat."
      }
    },
    mqttBasics: {
      title: "Memahami Dasar-Dasar Protokol MQTT",
      intro: "Untuk menggunakan alat uji MQTT secara efektif, pemahaman tentang konsep-konsep kunci protokol MQTT ini akan membantu:",
      pubsub: {
        title: "Model Publish-Subscribe",
        description: "<b>MQTT menggunakan arsitektur publish-subscribe</b>, yang memisahkan pengirim pesan (publisher) dari penerima (subscriber). Model ini berbeda dari komunikasi client-server tradisional dengan memperkenalkan broker yang mengelola distribusi pesan. Publisher mengirim pesan ke topik tanpa mengetahui siapa (jika ada) yang akan menerimanya, sementara subscriber menyatakan minat pada topik tanpa mengetahui siapa yang mempublikasikan ke topik tersebut. Pemisahan ini memberikan skalabilitas dan fleksibilitas, memungkinkan pola komunikasi satu-ke-banyak, banyak-ke-satu, dan banyak-ke-banyak."
      },
      qos: {
        title: "Tingkat Kualitas Layanan (QoS)",
        description: "<b>MQTT menyediakan tiga tingkat kualitas layanan</b> yang menyeimbangkan keandalan dan efisiensi: QoS 0 (paling banyak sekali) tidak memberikan jaminan pengiriman tetapi memiliki overhead minimal, sangat cocok untuk data non-kritis yang sering, seperti pembacaan suhu. QoS 1 (setidaknya sekali) memastikan pesan sampai ke penerima tetapi mungkin mengirim duplikat, cocok untuk pesan penting yang dapat menerima pemrosesan duplikat. QoS 2 (tepat sekali) menjamin pengiriman tunggal melalui jabat tangan empat bagian, ideal untuk perintah kritis atau transaksi keuangan di mana duplikasi dapat menyebabkan masalah."
      },
      retain: {
        title: "Pesan yang Dipertahankan",
        description: "<b>Pesan yang dipertahankan</b> adalah pesan MQTT khusus yang disimpan oleh broker untuk pelanggan di masa depan. Ketika pesan dipublikasikan dengan flag retain disetel ke true, broker menyimpannya sebagai nilai terbaru untuk topik tersebut. Setiap pelanggan baru yang berlangganan topik tersebut akan segera menerima pesan yang dipertahankan terakhir, bahkan jika mereka berlangganan lama setelah pesan dipublikasikan. Fitur ini sangat berguna untuk informasi status perangkat, nilai konfigurasi, atau data \"terakhir yang diketahui baik\" yang harus diterima pelanggan baru saat terhubung."
      },
      lastwill: {
        title: "Pesan Wasiat (LWT)",
        description: "<b>Fungsi wasiat</b> menyediakan mekanisme bagi klien untuk mendaftarkan pesan \"wasiat\" dengan broker selama koneksi. Jika klien terputus secara tidak terduga (tanpa mengirim pesan DISCONNECT yang tepat), broker akan secara otomatis mempublikasikan pesan wasiat ini ke topik yang ditentukan. Sistem notifikasi ini memungkinkan bagian lain dari sistem IoT diberitahu tentang pemutusan yang tidak terduga dan mengambil tindakan yang sesuai, seperti menandai perangkat sebagai offline atau memicu mekanisme failover."
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Pengujian MQTT",
      q1: "Apa perbedaan antara MQTT dan HTTP dalam aplikasi IoT?",
      a1: "<b>MQTT dan HTTP mewakili pendekatan berbeda untuk komunikasi IoT</b>, masing-masing memiliki keunggulan unik dalam skenario tertentu. MQTT dirancang untuk lingkungan terbatas, menggunakan model publish-subscribe, ukuran paket minimal (sekecil 2 byte) dan koneksi persisten untuk mengurangi overhead. Ini unggul dalam lingkungan dengan bandwidth terbatas, jaringan tidak dapat diandalkan, atau perangkat bertenaga baterai.<br><br>Sebaliknya, HTTP mengikuti model permintaan-respons, mengharuskan klien memulai semua komunikasi. Karena setiap transaksi memerlukan pembentukan koneksi dan biasanya ukuran pesan yang lebih besar, overheadnya lebih tinggi. Namun, HTTP mendapat manfaat dari dukungan universal, ekosistem alat yang kaya, dan integrasi langsung dengan aplikasi web.<br><br>Untuk aplikasi real-time yang memerlukan komunikasi dua arah, MQTT biasanya memberikan kinerja yang lebih baik, dengan fitur seperti tingkat QoS, pesan yang dipertahankan, dan fungsi wasiat. Alat uji MQTT kami memungkinkan Anda memverifikasi fitur-fitur ini dan menentukan apakah MQTT sesuai untuk kasus penggunaan IoT spesifik Anda.",
      
      q2: "Bagaimana cara mengamankan komunikasi MQTT?",
      a2: "<b>Mengamankan komunikasi MQTT</b> melibatkan beberapa lapisan perlindungan, yang semuanya dapat diuji dengan alat kami:<br><br>1. <b>Keamanan Transportasi</b>: Aktifkan enkripsi TLS/SSL dengan menghubungkan ke endpoint aman (mqtts:// atau wss://) dan mengonfigurasi sertifikat yang sesuai. Alat pengujian kami mendukung koneksi terenkripsi dan tidak terenkripsi, memungkinkan Anda memverifikasi implementasi TLS yang benar.<br><br>2. <b>Otentikasi</b>: Implementasikan otentikasi username/password atau sertifikat klien. Anda dapat menguji kredensial ini dengan pengaturan koneksi alat kami, memastikan broker Anda menegakkan kebijakan otentikasi dengan benar.<br><br>3. <b>Otorisasi</b>: Atur izin tingkat topik untuk mengontrol klien mana yang dapat mempublikasikan atau berlangganan topik tertentu. Gunakan alat kami untuk memverifikasi bahwa upaya publikasi atau subskripsi yang tidak sah ditolak dengan benar oleh broker Anda.<br><br>4. <b>Enkripsi Payload</b>: Untuk keamanan tambahan, enkripsi payload pesan sebelum publikasi. Anda dapat menguji enkripsi end-to-end dengan alat kami dengan mempublikasikan pesan terenkripsi dan memverifikasi apakah pelanggan yang berwenang dapat mendekripsinya dengan benar.<br><br>Ingatlah bahwa keamanan harus diterapkan secara mendalam, menggabungkan beberapa metode daripada mengandalkan mekanisme tunggal.",
      
      q3: "Apa praktik terbaik untuk desain topik MQTT?",
      a3: "<b>Desain topik MQTT yang efektif</b> sangat penting untuk sistem IoT yang dapat diskalakan dan dapat dipelihara. Berikut adalah prinsip-prinsip utama yang harus diikuti:<br><br>1. <b>Gunakan hierarki</b>, dengan garis miring sebagai pemisah (misalnya, gedung/lantai/ruang/perangkat/pengukuran). Organisasi ini memungkinkan penyaringan yang efisien melalui wildcard dan mencerminkan struktur logis sistem Anda.<br><br>2. <b>Hindari memulai topik dengan garis miring</b>, karena ini membuat level kosong yang tidak perlu dan dapat menyebabkan ketidakcocokan topik yang tidak konsisten di antara implementasi broker yang berbeda.<br><br>3. <b>Sertakan pengidentifikasi perangkat</b> dalam topik (misalnya, sensor/deviceID/suhu), memastikan setiap perangkat memiliki topik unik dan menyederhanakan perutean pesan.<br><br>4. <b>Gunakan namespace topik standar</b> untuk fungsionalitas umum seperti status perangkat (status/deviceID), perintah (perintah/deviceID), dan konfigurasi (config/deviceID).<br><br>5. <b>Pertimbangkan batasan panjang topik</b> - meskipun MQTT mengizinkan topik panjang, tetap ringkas meningkatkan efisiensi, terutama untuk perangkat terbatas.<br><br>Alat uji MQTT kami dapat membantu memvalidasi desain topik Anda, memungkinkan Anda menguji pola subskripsi dengan wildcard dan memverifikasi pengiriman pesan ke penerima yang dimaksud.",
      
      q4: "Bagaimana cara memecahkan masalah koneksi MQTT?",
      a4: "Saat menghadapi <b>masalah koneksi MQTT</b>, ikuti pendekatan pemecahan masalah yang sistematis ini:<br><br>1. <b>Verifikasi koneksi jaringan</b>: Pastikan perangkat dapat mencapai alamat IP dan port broker. Gunakan indikator status koneksi alat kami untuk mengonfirmasi akses jaringan dasar.<br><br>2. <b>Periksa alamat dan port broker</b>: Konfirmasi bahwa Anda menggunakan URL broker, nomor port, dan protokol yang benar (mqtt:// untuk koneksi TCP, ws:// untuk koneksi WebSocket). Port umum termasuk 1883 (MQTT), 8883 (MQTT over TLS), 8083 (WebSockets), dan 8084 (WebSockets aman).<br><br>3. <b>Verifikasi kredensial</b>: Jika otentikasi diaktifkan, pastikan username dan password benar. Kesalahan koneksi sering disebabkan oleh kegagalan otentikasi.<br><br>4. <b>Periksa pengaturan SSL/TLS</b>: Untuk koneksi aman, verifikasi konfigurasi sertifikat, termasuk sertifikat CA, sertifikat klien, dan versi TLS yang didukung.<br><br>5. <b>Periksa konflik ID klien</b>: Broker MQTT biasanya tidak mengizinkan beberapa koneksi menggunakan ID klien yang sama. Alat pengujian kami dapat membantu mengidentifikasi apakah koneksi Anda ditolak karena konflik ID.<br><br>6. <b>Tinjau log broker</b>: Sebagian besar broker MQTT menyediakan log koneksi terperinci yang dapat mengungkapkan penyebab spesifik kegagalan koneksi.<br><br>Alat uji MQTT kami menyediakan status koneksi real-time dan pesan error terperinci untuk membantu menentukan penyebab pasti masalah koneksi.",
      
      q5: "Apa metode terbaik untuk menangani pemutusan dan re-koneksi MQTT?",
      a5: "Mengimplementasikan penanganan <b>pemutusan MQTT</b> yang kuat sangat penting untuk aplikasi IoT yang andal:<br><br>1. <b>Aktifkan re-koneksi otomatis</b>: Konfigurasikan klien MQTT Anda untuk mencoba menyambung kembali secara otomatis saat koneksi terputus. Alat uji MQTT kami memiliki fitur bawaan ini untuk membantu Anda menguji perilaku aplikasi dalam skenario re-koneksi.<br><br>2. <b>Implementasikan exponential backoff</b>: Jangan mencoba menyambung kembali pada interval tetap, tetapi gunakan penundaan yang semakin lama di antara upaya re-koneksi untuk mencegah kelebihan beban broker selama gangguan.<br><br>3. <b>Atur pesan wasiat yang sesuai</b>: Konfigurasikan pesan LWT untuk memberi tahu bagian lain dari sistem ketika perangkat terputus secara tidak terduga. Anda dapat menguji fitur ini di pengaturan koneksi lanjutan alat kami.<br><br>4. <b>Pertahankan antrian pesan</b>: Untuk data penting, implementasikan antrian pesan sisi klien selama pemutusan, lalu kirim saat koneksi pulih.<br><br>5. <b>Gunakan sesi persisten</b>: Aktifkan flag \"bersihkan sesi\" bila sesuai untuk mempertahankan informasi subskripsi dan pesan antrian di antara koneksi.<br><br>6. <b>Pantau status koneksi</b>: Dalam lingkungan produksi, implementasikan pemantauan status koneksi dan peringatan untuk pemutasan yang berkepanjangan.<br><br>Alat uji MQTT kami dapat mensimulasikan berbagai skenario pemutasan koneksi, membantu Anda memverifikasi bahwa aplikasi Anda menangani masalah koneksi dengan baik."
    },
    relatedTools: {
      title: "Jelajahi Alat IoT dan Jaringan Terkait",
      description: "Tingkatkan alur kerja pengembangan IoT Anda dengan alat pelengkap ini:",
      tool1: {
        name: "Alat Uji WebSocket",
        url: "https://www.ufreetools.com/tool/websocket-tester",
        description: "Uji koneksi WebSocket dengan kemampuan pengiriman dan penerimaan pesan real-time."
      },
      tool2: {
        name: "Formatter dan Validator JSON",
        url: "https://www.ufreetools.com/tool/json-formatter",
        description: "Format, validasi, dan perindah data JSON yang umum digunakan dalam payload MQTT."
      },
      tool3: {
        name: "Detektor Proxy HTTP",
        url: "https://www.ufreetools.com/tool/http-proxy-detector",
        description: "Deteksi apakah koneksi Anda menggunakan proxy HTTP dan analisis header terkait proxy untuk verifikasi keamanan."
      },
      tool4: {
        name: "Encoder/Decoder Base64",
        url: "https://www.ufreetools.com/tool/base64-encoder-decoder",
        description: "Enkode dan dekode data biner payload MQTT yang umum dikodekan Base64."
      }
    },
    resources: {
      title: "Sumber Daya Otoritatif Protokol MQTT",
      resource1: {
        name: "MQTT.org - Dokumentasi Resmi MQTT",
        url: "https://mqtt.org/",
        description: "Dokumentasi, spesifikasi, dan praktik terbaik protokol MQTT resmi yang dikelola oleh konsorsium OASIS."
      },
      resource2: {
        name: "HiveMQ - Panduan Dasar MQTT",
        url: "https://www.hivemq.com/mqtt-essentials/",
        description: "Serangkaian artikel komprehensif yang mencakup semua aspek dasar protokol MQTT secara praktis."
      },
      resource3: {
        name: "Eclipse Mosquitto - Broker MQTT Open Source",
        url: "https://mosquitto.org/",
        description: "Dokumentasi broker MQTT open source populer, termasuk opsi konfigurasi dan praktik terbaik keamanan."
      }
    }
  }
}