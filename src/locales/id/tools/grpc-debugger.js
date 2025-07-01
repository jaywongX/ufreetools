export default {
  name: 'Debugger gRPC',
  description: 'Uji dan debug layanan gRPC serta pesan protobuf',
  title: 'Debugger gRPC Online',
  intro: 'Debug layanan gRPC langsung dari browser, dukung parsing file proto dan pembuatan form dinamis',
  connection: {
    title: 'Koneksi',
    server: 'Alamat Server',
    serverPlaceholder: 'Masukkan alamat server gRPC (contoh: localhost:50051)',
    useTLS: 'Gunakan TLS/SSL',
    tlsOptions: 'Opsi TLS',
    caCert: 'Sertifikat CA',
    clientCert: 'Sertifikat Klien',
    clientKey: 'Kunci Klien',
    insecure: 'Lewati verifikasi TLS (tidak aman)',
    timeout: 'Timeout (detik)',
    serverUrl: 'URL Layanan gRPC',
    serverUrlPlaceholder: 'https://server-grpc-anda.com',
    timeoutMs: 'Timeout Permintaan (ms)',
    timeoutPlaceholder: '30000',
    defaultTimeout: 'Default: 30000ms (30 detik)',
    corsNote: 'Catatan: Server perlu mendukung protokol gRPC-Web dan CORS',
    keepalive: 'Aktifkan Keepalive',
    connect: 'Sambungkan',
    disconnect: 'Putuskan'
  },
  service: {
    title: 'Layanan',
    definition: 'Definisi Layanan',
    load: 'Muat File Proto',
    paste: 'Tempel Definisi Proto',
    protoPath: 'Path File Proto',
    importPath: 'Path Impor',
    services: 'Layanan',
    methods: 'Metode',
    selectService: 'Pilih Layanan',
    selectMethod: 'Pilih Metode',
    methodType: 'Tipe Metode',
    unary: 'Unary',
    serverStreaming: 'Streaming Server',
    clientStreaming: 'Streaming Klien',
    bidirectional: 'Streaming Dua Arah',
    protoDefinition: 'Definisi File Proto',
    switchToText: 'Beralih ke Input Teks',
    switchToFile: 'Beralih ke Unggah File',
    dragDrop: 'Seret dan lepas file .proto di sini, atau',
    clickUpload: 'klik untuk mengunggah',
    onlyProto: 'Hanya mendukung format file .proto',
    loadExample: 'Muat Contoh Proto',
    formatProto: 'Format',
    clear: 'Bersihkan',
    parse: 'Parse Definisi Proto',
    parsing: 'Memproses...'
  },
  request: {
    title: 'Permintaan',
    metadata: 'Metadata',
    addMetadata: 'Tambah Metadata',
    key: 'Kunci',
    value: 'Nilai',
    message: 'Pesan',
    jsonEditor: 'Editor JSON',
    protoEditor: 'Editor Proto',
    formEditor: 'Editor Form',
    send: 'Kirim Permintaan',
    cancel: 'Batal',
    stream: 'Pesan Streaming',
    endStream: 'Akhiri Streaming',
    exampleMessage: 'Contoh Pesan',
    validJson: 'JSON Valid',
    invalidJson: 'JSON Tidak Valid',
    history: 'Riwayat Permintaan',
    body: 'Badan Permintaan',
    bodyPlaceholder: 'Masukkan badan permintaan dalam format JSON di sini...',
    runQuery: 'Jalankan Kueri',
    requestSent: 'Terkirim',
    param: 'Parameter Permintaan',
    edit: 'Edit',
    sending: 'Mengirim...',
    time: 'Waktu Permintaan',
  },
  response: {
    title: 'Respons',
    status: 'Status',
    metadata: 'Metadata',
    message: 'Pesan',
    stream: 'Stream',
    noResponse: 'Tidak ada respons diterima',
    receivedAt: 'Diterima Pada',
    duration: 'Durasi',
    copy: 'Salin Respons',
    download: 'Unduh',
    clear: 'Bersihkan',
    streamClosed: 'Stream Ditutup',
    streamMessage: 'Pesan Stream #{number}',
    stats: 'Statistik',
    messagesReceived: 'Pesan Diterima',
    startTime: 'Waktu Mulai',
    endTime: 'Waktu Selesai',
    time: 'Waktu Respons'
  },
  settings: {
    title: 'Pengaturan',
    theme: 'Tema',
    light: 'Terang',
    dark: 'Gelap',
    language: 'Bahasa',
    maxResponseSize: 'Ukuran Respons Maksimum',
    timeoutMs: 'Timeout Default (ms)',
    prettyPrint: 'Cetak JSON Rapi',
    saveDir: 'Direktori Penyimpanan',
    clearHistory: 'Bersihkan Riwayat',
    protoFormat: 'Format Proto',
    protobuf: 'Protobuf.js',
    grpcTools: 'Alat gRPC',
    reflection: 'Gunakan Refleksi Server'
  },
  messages: {
    connecting: 'Menghubungkan ke {server}...',
    connected: 'Terhubung ke {server}',
    disconnected: 'Terputus dari server',
    connectionError: 'Error koneksi: {error}',
    requestSent: 'Permintaan terkirim',
    responseReceived: 'Respons diterima',
    streamingStarted: 'Streaming dimulai',
    streamingEnded: 'Streaming berakhir',
    protoLoaded: 'File Proto berhasil dimuat',
    protoError: 'Error memuat file Proto: {error}',
    metadataAdded: 'Metadata ditambahkan',
    metadataError: 'Metadata tidak valid',
    savedToFile: 'Respons disimpan ke file',
    parsingError: 'Error parsing pesan: {error}',
    reflectionError: 'Error refleksi server: {error}',
    invalidProto: 'Definisi Proto tidak valid',
    emptyUrl: 'Masukkan URL layanan',
    selectServiceMethod: 'Pilih layanan dan metode',
    invalidJson: 'Badan permintaan bukan JSON valid: {error}',
    copy: 'Salin',
    copied: 'Respons disalin ke clipboard',
    copyFailed: 'Gagal menyalin, silakan salin manual'
  },
  errors: {
    invalidArgument: 'INVALID_ARGUMENT - Argumen tidak valid',
    notFound: 'NOT_FOUND - Sumber tidak ditemukan',
    alreadyExists: 'ALREADY_EXISTS - Sumber sudah ada',
    permissionDenied: 'PERMISSION_DENIED - Izin ditolak',
    internal: 'INTERNAL - Error internal',
    requestFailed: 'Permintaan gagal: {error}'
  },
  
  article: {
    title: "Debugger gRPC: Alat Uji Interaktif untuk Remote Procedure Call",
    features: {
      title: "Memahami Debug gRPC dan Pengujian API",
      description: "<strong>Debugger gRPC</strong> adalah alat berbasis web yang komprehensif, dirancang untuk menguji, debug, dan mengeksplorasi layanan gRPC langsung dari browser. Berbeda dengan klien API REST tradisional, <strong>alat pengujian buffer protokol</strong> ini menyediakan fitur khusus untuk protokol biner gRPC dan format pesan Protocol Buffers (protobuf), memungkinkan pengembang berinteraksi dengan layanan gRPC tanpa perlu menulis kode klien khusus.<br><br><strong>Penguji klien gRPC</strong> kami mendukung fitur inti termasuk parsing file proto, penemuan layanan, konstruksi permintaan melalui pembuatan form dinamis, manajemen metadata, dan visualisasi respons lengkap. Ini menjadikannya alat yang sangat penting bagi pengembang API yang menangani arsitektur layanan mikro modern yang memanfaatkan gRPC untuk komunikasi antar layanan yang efisien, bertipe ketat, dan berkinerja tinggi.",
      useCases: {
        title: "Skenario Penggunaan Nyata Pengujian gRPC",
        items: [
          "<strong>Pengembangan API Layanan Mikro</strong>: Saat membangun sistem terdistribusi berbasis arsitektur layanan mikro, <strong>alat pengujian gRPC</strong> memungkinkan pengembang memverifikasi endpoint layanan, memvalidasi format pesan, dan memastikan implementasi yang benar dari kontrak layanan yang didefinisikan dalam file proto. Verifikasi interaktif ini membantu mengidentifikasi masalah lebih awal sebelum integrasi layanan.",
          "<strong>Pengujian Integrasi API</strong>: Untuk aplikasi yang menggunakan layanan gRPC pihak ketiga atau internal, debugger kami menyediakan cara untuk mengeksplorasi metode yang tersedia, menguji berbagai parameter input, dan memahami format respons tanpa perlu menulis klien pengujian. Insinyur dapat dengan cepat membuat prototipe kode integrasi dengan terlebih dahulu memahami perilaku yang diharapkan melalui pengujian manual.",
          "<strong>Penyelesaian Masalah Produksi</strong>: Ketika menghadapi perilaku tak terduga dalam sistem produksi yang menggunakan gRPC, debugger memungkinkan insinyur dukungan dan pengembang mereplikasi permintaan spesifik dalam lingkungan terkontrol, memanipulasi parameter, dan mengamati respons. Isolasi ini membantu menentukan apakah masalah berasal dari implementasi klien, logika layanan, atau konfigurasi jaringan.",
          "<strong>Pengembangan Skema Protocol Buffer</strong>: Pada tahap desain API, fitur <strong>pemeriksa protobuf</strong> membantu memvalidasi definisi skema dengan memvisualisasikan bagaimana definisi pesan abstrak diterjemahkan ke dalam struktur permintaan dan respons konkret. Lingkaran umpan balik ini meningkatkan desain file proto sebelum implementasi luas.",
          "<strong>Analisis Kinerja</strong>: Debugger menyediakan informasi waktu permintaan, memungkinkan pengembang melakukan benchmark kinerja layanan gRPC dalam berbagai kondisi. Dengan menguji berbagai ukuran dan kompleksitas muatan, tim dapat mengidentifikasi potensi hambatan kinerja dalam implementasi layanan mereka.",
          "<strong>Dokumentasi dan Berbagi Pengetahuan</strong>: Antarmuka visual dari <strong>penjelajah layanan gRPC</strong> membuatnya lebih mudah untuk menunjukkan fungsionalitas API kepada pemangku kepentingan non-teknis, anggota tim baru, atau mitra. Alat ini berfungsi sebagai alternatif interaktif untuk dokumentasi API statis, membantu orang lain memahami fungsionalitas layanan melalui contoh nyata."
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Debug gRPC",
      items: [
        {
          question: "Apa perbedaan antara gRPC dan API REST?",
          answer: "gRPC dan REST mewakili pendekatan berbeda untuk desain API, dengan karakteristik berbeda yang memengaruhi kapan masing-masing harus digunakan.<br><br><strong>gRPC</strong> adalah kerangka kerja RPC (Remote Procedure Call) berkinerja tinggi yang menggunakan Protocol Buffers untuk serialisasi pesan dan berjalan di atas HTTP/2. Keunggulan utamanya meliputi:<br><br>• <strong>Pendekatan kontrak-pertama</strong>, mendefinisikan antarmuka yang diketik ketat dalam file .proto<br>• <strong>Serialisasi biner yang efisien</strong>, menghasilkan ukuran pesan yang lebih kecil<br>• <strong>Dukungan streaming bawaan</strong> (unary, streaming server, streaming klien, dan streaming dua arah)<br>• <strong>Koneksi multiplex</strong> melalui HTTP/2 mengurangi latensi<br>• <strong>Generasi kode</strong> di berbagai bahasa memastikan keamanan tipe<br><br><strong>REST</strong> (Representational State Transfer) adalah gaya arsitektur yang biasanya menggunakan JSON di atas HTTP/1.1, menyediakan:<br><br>• <strong>Kesederhanaan dan keakraban</strong> karena adopsi yang luas<br>• <strong>Format yang dapat dibaca manusia</strong> seperti JSON atau XML<br>• <strong>Dukungan browser asli</strong> tanpa memerlukan library tambahan<br>• <strong>Ikatan longgar</strong> antara klien dan server<br>• <strong>Ekosistem alat yang luas</strong> untuk pengujian dan dokumentasi<br><br><strong>Debugger gRPC</strong> menjembatani kesenjangan alat untuk gRPC, menyediakan kemampuan eksplorasi mirip REST untuk layanan gRPC yang secara tradisional memerlukan kode klien khusus untuk diuji."
        },
        {
          question: "Bagaimana cara membuat file .proto untuk pengujian?",
          answer: "Membuat <strong>file definisi Protocol Buffer</strong> (.proto) adalah langkah mendasar dalam pengembangan gRPC. Berikut panduan untuk membuat file pengujian menggunakan debugger kami:<br><br>1. <strong>Definisikan versi sintaks</strong>: Mulailah file dengan `syntax = \"proto3\";` untuk menggunakan versi sintaks proto terbaru.<br><br>2. <strong>Organisasi dengan paket</strong>: Gunakan kata kunci `package` untuk mengelompokkan layanan dan pesan terkait, membantu menghindari konflik nama (misalnya, `package ecommerce;`).<br><br>3. <strong>Definisikan pesan</strong>: Buat tipe pesan yang mewakili struktur data yang akan Anda gunakan:<br><pre>message Product &#123;\n  string id = 1;\n  string name = 2;\n  double price = 3;\n  repeated string categories = 4;\n&#125;</pre><br>4. <strong>Definisikan layanan</strong>: Tentukan antarmuka layanan dan metodenya:<br><pre>service ProductService &#123;\n  rpc GetProduct(GetProductRequest) returns (Product);\n  rpc SearchProducts(SearchRequest) returns (stream Product);\n  rpc UpdateProduct(Product) returns (UpdateResponse);\n&#125;</pre><br>5. <strong>Impor proto lain</strong>: Gunakan `import \"path/to/other.proto\";` untuk merujuk definisi dari file lain.<br><br>6. <strong>Tambah opsi bidang</strong>: Gunakan opsi seperti `[deprecated=true]` atau opsi kustom untuk meningkatkan bidang dengan perilaku spesifik.<br><br>Saat menguji dengan <strong>debugger gRPC</strong> kami, Anda dapat langsung mengunggah file ini atau menempelkan kontennya ke area input teks. Debugger akan memparse file dan menghasilkan antarmuka form yang sesuai untuk membangun permintaan ke layanan Anda."
        },
        {
          question: "Bisakah alat ini terhubung ke layanan gRPC aman (SSL/TLS)?",
          answer: "Ya, <strong>Debugger gRPC</strong> mendukung koneksi ke layanan gRPC yang dienkripsi dengan SSL/TLS. Berikut cara alat ini menangani koneksi aman:<br><br>1. <strong>Pembatasan berbasis browser</strong>: Karena ini adalah alat berbasis web yang berjalan di browser, ia beroperasi dalam batasan keamanan browser. Itu dapat terhubung ke:<br><br>• Layanan yang mendukung <strong>protokol gRPC-Web</strong> (sedikit berbeda dari gRPC standar)<br>• Layanan dengan <strong>header CORS (Cross-Origin Resource Sharing)</strong> yang dikonfigurasi dengan benar<br>• Layanan dengan sertifikat SSL valid (dalam kebanyakan kasus bukan yang ditandatangani sendiri)<br><br>2. <strong>Penggunaan TLS</strong>: Saat terhubung ke layanan aman, pastikan:<br><br>• Gunakan awalan <strong>\"https://\"</strong> atau aktifkan opsi <strong>\"Gunakan TLS/SSL\"</strong> secara eksplisit<br>• Layanan harus memiliki sertifikat yang dipercaya browser<br>• Periksa apakah diperlukan autentikasi sertifikat klien (TLS mutual)<br><br>3. <strong>Opsi autentikasi</strong>: Untuk layanan yang memerlukan autentikasi, Anda dapat menambahkan:<br><br>• <strong>Kunci API</strong> atau <strong>token akses</strong> melalui metadata<br>• Header <strong>Autentikasi Dasar</strong><br>• <strong>Token OAuth</strong> dalam header otorisasi<br><br>4. <strong>Pertimbangan proxy</strong>: Di beberapa lingkungan perusahaan, mungkin perlu menggunakan proxy gRPC-Web (seperti Envoy) antara browser dan layanan gRPC aktual.<br><br>Jika layanan internal yang Anda uji tidak memenuhi persyaratan ini, pertimbangkan untuk menggunakan klien gRPC desktop atau menyiapkan proxy lokal untuk menangani persyaratan keamanan dan mengekspos endpoint yang kompatibel untuk debugger."
        },
        {
          question: "Mengapa perlu memparse file proto sebelum mengirim permintaan?",
          answer: "Memparsing file proto adalah langkah penting saat menggunakan <strong>Debugger gRPC</strong>, karena alasan berikut:<br><br>1. <strong>Penemuan tipe dan validasi</strong>: gRPC adalah sistem bertipe ketat di mana klien dan server harus menyepakati format pesan yang tepat. File proto berfungsi sebagai kontrak yang mendefinisikan:<br><br>• <strong>Layanan dan metode</strong> yang tersedia<br>• <strong>Tipe parameter</strong> yang diharapkan oleh setiap metode<br>• <strong>Tipe respons</strong> yang dikembalikan oleh setiap metode<br>• <strong>Struktur pesan bersarang</strong> atau <strong>enum</strong> yang digunakan dalam API<br><br>2. <strong>Pembuatan antarmuka dinamis</strong>: Setelah parsing, debugger dapat:<br><br>• Menampilkan daftar layanan dan metode yang tersedia<br>• Membangun form permintaan yang sesuai dengan bidang yang benar<br>• Menyediakan kontrol input spesifik tipe (bidang teks, input angka, toggle untuk boolean, dll.)<br>• Menetapkan nilai default yang sesuai berdasarkan tipe bidang<br><br>3. <strong>Serialisasi biner</strong>: gRPC menggunakan Protocol Buffers sebagai format transport biner. Definisi proto memungkinkan debugger:<br><br>• <strong>Menserialisasi</strong> input JSON Anda ke format protobuf biner yang benar<br>• <strong>Mendeserialisasi</strong> respons biner kembali ke JSON yang dapat dibaca<br>• Memastikan <strong>nomor dan tipe bidang</strong> cocok persis dengan yang diharapkan server<br><br>4. <strong>Pencegahan kesalahan</strong>: Tanpa parsing yang tepat, Anda mungkin mengirim permintaan yang diformat salah yang akan gagal pada tingkat serialisasi sebelum mencapai logika layanan.<br><br>Anggap file proto sebagai kombinasi dokumentasi API dan skema serialisasi. <strong>Protokol gRPC</strong> pada dasarnya memerlukan informasi ini untuk berfungsi dengan benar, tidak seperti API REST di mana Anda mungkin mengeksplorasi endpoint dengan sedikit pengetahuan sebelumnya."
        },
        {
          question: "Metode gRPC apa saja yang bisa saya uji dengan debugger ini?",
          answer: "<strong>Debugger gRPC</strong> ini mendukung keempat mode komunikasi yang didefinisikan dalam spesifikasi gRPC, masing-masing cocok untuk skenario penggunaan berbeda:<br><br>1. <strong>RPC Unary</strong>: Mode permintaan-respons standar di mana klien mengirim satu permintaan dan menerima satu respons. Ini paling mirip dengan panggilan API REST tradisional, cocok untuk:<br><br>• Operasi pengambilan data sederhana<br>• Pembuatan, pembaruan, atau penghapusan operasi<br>• Permintaan autentikasi dan validasi<br><br>Contoh: `rpc GetUser(GetUserRequest) returns (User);`<br><br>2. <strong>RPC Streaming Server</strong>: Klien mengirim satu permintaan dan menerima serangkaian pesan respons. Mode ini cocok untuk:<br><br>• Sumber data real-time<br>• Pembaruan kemajuan untuk operasi berjalan lama<br>• Pengambilan kumpulan data besar dengan pemuatan bertahap<br><br>Contoh: `rpc ListProducts(ListRequest) returns (stream Product);`<br><br>3. <strong>RPC Streaming Klien</strong>: Klien mengirim serangkaian pesan dan menerima satu respons. Pendekatan ini berguna untuk:<br><br>• Mengunggah kumpulan data besar<br>• Transmisi data sensor berkelanjutan<br>• Operasi batch yang menghasilkan satu hasil<br><br>Contoh: `rpc UploadData(stream DataChunk) returns (UploadSummary);`<br><br>4. <strong>RPC Streaming Dua Arah</strong>: Klien dan server dapat mengirim dan menerima banyak pesan dalam urutan apa pun. Mode asinkron penuh ini mendukung:<br><br>• Aplikasi chat<br>• Game real-time atau kolaborasi<br>• Alur kerja kompleks yang melibatkan komunikasi bolak-balik<br><br>Contoh: `rpc Chat(stream ChatMessage) returns (stream ChatMessage);`<br><br>Debugger kami menyediakan elemen antarmuka yang sesuai untuk setiap tipe, memungkinkan Anda menguji semua mode komunikasi, dengan umpan balik visual untuk respons streaming dan kontrol yang tepat untuk mengirim pesan streaming dari klien."
        }
      ]
    },
    guide: {
      title: "Cara Menggunakan Debugger gRPC: Panduan Langkah demi Langkah",
      step1: "<strong>Definisikan URL Layanan gRPC</strong>: Di bidang URL, masukkan alamat layanan gRPC Anda. Untuk pengujian berbasis browser, ini harus menjadi layanan yang mendukung protokol gRPC-Web dan mengaktifkan header CORS yang sesuai. Jika Anda menguji layanan aman, pastikan menggunakan protokol HTTPS (misalnya, https://layanan-grpc-anda.com).",
      step2: "<strong>Atur Timeout dan Opsi Koneksi</strong>: Konfigurasikan timeout permintaan (dalam milidetik) sesuai dengan waktu respons yang diharapkan oleh layanan Anda. Default 30000ms (30 detik) cocok untuk sebagian besar layanan, tetapi mungkin perlu disesuaikan untuk operasi yang berjalan lama atau saat menguji di jaringan lambat.",
      step3: "<strong>Sediakan Definisi Protocol Buffer</strong>: Anda dapat mengunggah file .proto dengan menyeret dan menjatuhkannya ke area unggahan atau mengklik untuk memilihnya dari perangkat Anda, atau menggunakan tombol toggle untuk beralih ke mode input teks dan langsung menempelkan definisi Proto Anda. Untuk pemula, opsi \"Muat Contoh Proto\" menyediakan template awal untuk memahami format.",
      step4: "<strong>Parse Definisi Proto</strong>: Klik tombol \"Parse Definisi Proto\" untuk memproses file .proto Anda. Ini akan menganalisis antarmuka layanan, tipe pesan, dan definisi bidang, memungkinkan debugger menghasilkan form permintaan yang sesuai dan secara benar menserialisasi/mendeserialisasi pesan. Jika ada kesalahan sintaks dalam file proto Anda, Anda akan menerima pesan kesalahan untuk membantu mengidentifikasi masalah.",
      step5: "<strong>Pilih Layanan dan Metode</strong>: Setelah parsing berhasil, pilih layanan tertentu dari daftar dropdown (jika file proto Anda mendefinisikan banyak layanan). Kemudian pilih metode yang ingin Anda uji dari daftar yang tersedia. Jenis metode (unary, streaming server, streaming klien, atau streaming dua arah) akan ditunjukkan untuk membantu Anda memahami mode komunikasi yang diharapkan.",
      step6: "<strong>Bangun dan Sesuaikan Permintaan Anda</strong>: Debugger menghasilkan template JSON untuk tipe permintaan metode yang dipilih. Modifikasi struktur JSON yang disediakan untuk menyertakan nilai pengujian Anda. Editor secara otomatis memformat dan memvalidasi konten JSON Anda, memastikannya cocok dengan struktur pesan yang diharapkan. Jika perlu, Anda dapat menggunakan tombol format untuk membersihkan JSON Anda.",
      step7: "<strong>Kirim Permintaan dan Analisis Respons</strong>: Klik tombol \"Kirim Permintaan\" untuk mengirim panggilan gRPC Anda ke layanan. Untuk panggilan unary, Anda akan melihat data respons yang ditampilkan di bagian respons, bersama dengan informasi waktu. Untuk panggilan streaming, Anda akan melihat pesan respons muncul saat tiba. Jika terjadi kesalahan, debugger akan menampilkan detail kesalahan untuk membantu pemecahan masalah."
    },
    conclusion: "Debugger gRPC menyediakan antarmuka berbasis browser yang intuitif untuk berinteraksi dengan dunia layanan gRPC yang kuat namun kompleks. Dengan menjembatani kesenjangan antara operator manusia dan protokol biner gRPC, alat ini secara signifikan menyederhanakan proses pengembangan, pengujian, dan pemecahan masalah layanan API modern. Baik Anda merancang arsitektur layanan mikro baru, mengintegrasikan layanan gRPC yang ada, atau mendiagnosis masalah dalam sistem produksi, pendekatan visual yang disediakan oleh debugger ini mengurangi kurva pembelajaran dan mempercepat alur kerja pengembangan. Seiring semakin banyak organisasi mengadopsi gRPC untuk keunggulan kinerja dan ketatnya tipe, memiliki alat pengujian yang dapat diakses menjadi semakin berharga untuk memastikan kualitas dan keandalan API."
  }
}