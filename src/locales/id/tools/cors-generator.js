export default {
  name: 'Generator Konfigurasi CORS',
  description: 'Buat konfigurasi Cross-Origin Resource Sharing (CORS) dengan cepat untuk berbagai lingkungan server',
  options: {
    title: 'Opsi CORS',
    allowedOrigins: {
      title: 'Domain Asal yang Diizinkan (Access-Control-Allow-Origin)',
      allowAll: 'Izinkan semua asal (*) <span class="text-yellow-500 text-xs ml-1">(tidak aman, tidak mendukung kredensial)</span>',
      specific: 'Tentukan domain yang diizinkan (direkomendasikan)',
      addOrigin: 'Tambahkan asal',
      placeholder: 'Masukkan asal (contoh: https://example.com)',
      wildcard: 'Izinkan subdomain (wildcard)',
      null: 'Izinkan asal null',
      remove: 'Hapus domain'
    },
    allowedMethods: {
      title: 'Metode HTTP yang Diizinkan (Access-Control-Allow-Methods)',
      selectMethods: 'Pilih metode HTTP',
      get: 'GET',
      post: 'POST',
      put: 'PUT',
      delete: 'DELETE',
      patch: 'PATCH',
      head: 'HEAD',
      options: 'OPTIONS'
    },
    allowedHeaders: {
      title: 'Header Permintaan yang Diizinkan (Access-Control-Allow-Headers)',
      all: 'Izinkan semua header(*)',
      specific: 'Hanya header tertentu',
      addHeader: 'Tambahkan header',
      headerPlaceholder: 'Masukkan nama header',
      common: 'Header umum',
      custom: 'Header kustom',
      contentType: 'Content-Type',
      accept: 'Accept',
      authorization: 'Authorization',
      origin: 'Origin',
      xRequestedWith: 'X-Requested-With',
      contentDisposition: 'Content-Disposition',
      remove: 'Hapus header'
    },
    exposedHeaders: {
      title: 'Header Respons yang Diekspos (Access-Control-Expose-Headers)',
      description: 'Header respons yang dapat diakses oleh browser',
      addHeader: 'Tambahkan header yang diekspos',
      headerPlaceholder: 'Masukkan nama header'
    },
    credentials: {
      title: 'Izinkan Kredensial (Access-Control-Allow-Credentials)',
      description: 'Izinkan penggunaan cookie dan header otentikasi',
      allow: 'Izinkan kredensial',
      warning: 'Harus digunakan dengan asal tertentu, tidak bisa dengan wildcard(*)'
    },
    maxAge: {
      title: 'Durasi Cache Permintaan Preflight (Access-Control-Max-Age)',
      description: 'Durasi cache hasil permintaan preflight (detik)',
      seconds: 'detik',
      default: 'Default: ',
      recommended: 'Direkomendasikan: 3600 (1 jam)'
    },
    serverType: {
      title: 'Tipe Server',
      apache: 'Apache (.htaccess)',
      nginx: 'Nginx',
      express: 'Express.js',
      springBoot: 'Spring Boot',
      php: 'PHP',
      flask: 'Flask (Python)',
      django: 'Django',
      rails: 'Ruby on Rails',
      aws: 'AWS S3/CloudFront',
      azure: 'Azure',
      iis: 'IIS (web.config)',
      jetty: 'Jetty',
      headers: 'Header HTTP'
    }
  },
  output: {
    title: 'Header yang Dihasilkan',
    instructions: 'Tambahkan header ini ke respons server Anda:',
    copy: 'Salin header',
    test: 'Uji header',
    downloadConfig: 'Unduh konfigurasi'
  },
  configs: {
    title: 'Contoh Konfigurasi',
    nginx: 'Nginx',
    apache: 'Apache (.htaccess)',
    express: 'Express.js',
    springBoot: 'Spring Boot',
    php: 'PHP',
    flask: 'Flask (Python)',
    django: 'Django',
    rails: 'Ruby on Rails',
    aws: 'AWS S3/CloudFront',
    azure: 'Azure',
    iis: 'IIS Web.config'
  },
  testing: {
    title: 'Pengujian CORS',
    description: 'Uji apakah konfigurasi CORS Anda berfungsi dengan benar',
    originUrl: 'URL Asal',
    targetUrl: 'URL Target',
    method: 'Metode Permintaan',
    credentials: 'Sertakan kredensial',
    headers: 'Header kustom',
    addHeader: 'Tambahkan header',
    testButton: 'Uji CORS',
    results: 'Hasil Pengujian',
    success: 'Pengujian CORS berhasil ✓',
    failure: 'Pengujian CORS gagal ✗✗',
    details: 'Detail Respons',
    response: 'Respons',
    logs: 'Log CORS',
    errorDetails: 'Detail Kesalahan'
  },
  presets: {
    title: 'Preset',
    api: 'Server API',
    assets: 'Aset Statis (CDN)',
    auth: 'Layanan Otentikasi',
    publicAccess: 'Akses Publik',
    restrictive: 'Restriktif',
    load: 'Muat preset',
    save: 'Simpan sebagai preset'
  },
  tips: {
    title: 'Tips CORS',
    tip1: 'Cross-Origin Resource Sharing (CORS) adalah mekanisme berbasis header HTTP yang memungkinkan server menunjukkan asal lain (domain, protokol, atau port) selain dirinya sendiri, browser dapat memuat sumber daya dari asal tersebut.',
    tip2: 'Perlindungan CORS adalah fitur keamanan browser modern yang dapat mencegah halaman web membuat permintaan ke server yang bukan asal yang sama, sehingga melindungi pengguna dari serangan pemalsuan permintaan lintas situs.',
    usage: {
      title: 'Skenario Penggunaan CORS:',
      tip1: 'Izinkan JavaScript frontend mengakses API dari domain berbeda',
      tip2: 'Dukung permintaan Ajax atau Fetch lintas domain',
      tip3: 'Izinkan akses lintas domain ke font, CSS, atau sumber daya lainnya',
      tip4: 'Atur komunikasi antar layanan dalam arsitektur microservice',
    },
    safe: 'Tips Keamanan: Biasanya hindari menggunakan wildcard "*" sebagai asal yang diizinkan, sebaiknya tentukan secara eksplisit domain yang Anda percayai untuk mengurangi risiko keamanan potensial.'
  },
  messages: {
    copied: 'Header telah disalin ke clipboard',
    configDownloaded: 'Konfigurasi telah diunduh',
    testStarted: 'Pengujian CORS telah dimulai',
    testSucceeded: 'Permintaan CORS berhasil',
    testFailed: 'Permintaan CORS gagal: {error}',
    presetSaved: 'Preset telah disimpan',
    presetLoaded: 'Preset telah dimuat'
  },
  config: {
    title: 'Konfigurasi',
    empty: 'Konfigurasikan opsi untuk menghasilkan pengaturan CORS',
    copied: 'Konfigurasi telah disalin ke clipboard!',
    copy: 'Salin'
  },
  comments: {
    expressMiddleware: "// Gunakan middleware Express",
    applyGlobalCors: "// Terapkan middleware CORS",
    applySpecificRoute: "// Atau terapkan hanya ke rute tertentu",
    applyRequest: "// Tangani permintaan",
    apacheAllowedOrigins: "# Domain yang diizinkan",
    apacheAllowedMethods: "# Metode HTTP yang diizinkan",
    apacheAllowedHeaders: "# Header HTTP yang diizinkan",
    apacheAllowedCredentials: "# Kredensial yang diizinkan",
    preflightCacheDuration: "# Durasi cache preflight",
    apacheExposeHeaders: '# Header respons yang diekspos',
    handlePreflightRequest: "# Tangani permintaan preflight",
    nginxConfiguration: "# Konfigurasi CORS\n# Tambahkan konfigurasi ini ke blok server atau lokasi Anda",
    nginxAllowedOrigins: "# Domain yang diizinkan",
    nginxAllowedMethods: "# Metode HTTP yang diizinkan",
    nginxAllowedHeaders: "# Header HTTP yang diizinkan",
    nginxAllowedCredentials: "# Kredensial yang diizinkan",
    nginxPreflightCacheDuration: "# Durasi cache preflight",
    nginxExposeHeaders: '# Header respons yang diekspos',
    nginxHandlePreflight: "# Tangani permintaan preflight",
    httpHeadersConfiguration: "# Konfigurasi Header HTTP CORS",
    httpAllowedOrigins: "# Domain yang diizinkan",
    httpAllowedMethods: "# Metode HTTP yang diizinkan",
    httpAllowedHeaders: "# Header HTTP yang diizinkan",
    httpAllowedCredentials: "# Kredensial yang diizinkan",
    httpPreflightCacheDuration: "# Durasi cache preflight",
    httpExposeHeaders: '# Header respons yang diekspos',
  },
  article: {
    title: "Panduan Lengkap Generator Konfigurasi CORS - Pengaturan Berbagi Sumber Lintas Asal yang Aman",
    intro: {
      title: "Memahami Konfigurasi CORS dan Peran Kuncinya dalam Keamanan Jaringan",
      p1: "<b>Cross-Origin Resource Sharing (CORS)</b> adalah mekanisme keamanan dasar yang diimplementasikan oleh browser modern untuk mengontrol bagaimana halaman web di satu domain dapat meminta dan berinteraksi dengan sumber daya yang dihosting di domain lain. Alat Generator Konfigurasi CORS kami menyederhanakan proses kompleks pembuatan header dan konfigurasi server CORS yang tepat, memastikan aplikasi web Anda dapat berkomunikasi dengan aman di antara domain yang berbeda sambil mempertahankan batas keamanan yang sesuai. Dengan menghasilkan pengaturan CORS yang disesuaikan secara presisi, alat ini membantu pengembang menerapkan kontrol akses yang tepat, mengaktifkan fungsionalitas lintas asal yang sah sambil melindungi data sensitif.",
      p2: "<b>Konfigurasi CORS yang benar sangat penting untuk aplikasi web modern</b>, terutama yang menggunakan arsitektur terdistribusi, API pihak ketiga, dan layanan mikro. Tanpa pengaturan CORS yang tepat, browser akan secara default memblokir permintaan lintas asal sebagai tindakan keamanan, mencegah banyak arsitektur aplikasi web umum berfungsi dengan benar. Generator kami membuat konfigurasi standar untuk berbagai lingkungan server termasuk Node.js/Express, Apache, Nginx dan header HTTP mentah, memungkinkan pengembang menerapkan kebijakan CORS yang konsisten terlepas dari teknologi backend yang mereka gunakan. Ini menyederhanakan alur kerja pengembangan dan mengurangi kemungkinan kesalahan konfigurasi keamanan yang dapat membuat aplikasi rentan terhadap pemalsuan permintaan lintas situs (CSRF) dan kerentanan pencurian data.",
      p3: "<b>Pembuatan kebijakan CORS memerlukan pertimbangan cermat</b> berbagai parameter keamanan termasuk asal yang diizinkan, metode HTTP, header, penanganan kredensial dan instruksi caching. Konfigurasi manual rentan terhadap kesalahan yang dapat menghasilkan kebijakan yang terlalu ketat sehingga merusak fungsionalitas, atau terlalu longgar sehingga membahayakan keamanan. Alat kami memandu pengguna melalui setiap opsi konfigurasi dengan penjelasan yang jelas dan nilai default yang aman, membantu pengembang membuat keputusan yang tepat tentang implementasi CORS mereka. Konfigurasi yang dihasilkan menyeimbangkan persyaratan keamanan dengan kebutuhan fungsionalitas lintas asal, memberikan nilai instan bagi pengembang frontend, arsitek API dan insinyur keamanan yang bekerja pada aplikasi web modern."
    },
    useCases: {
      title: "Aplikasi Praktis Generator Konfigurasi CORS",
      case1: "<b>Gerbang API dan Arsitektur Layanan Mikro</b>: Organisasi yang mengembangkan sistem terdistribusi menggunakan gerbang API dan layanan mikro sering membutuhkan konfigurasi CORS yang tepat untuk memastikan komunikasi yang aman antara aplikasi frontend dan layanan backend. Arsitek API menggunakan Generator CORS kami untuk mengembangkan konfigurasi header yang dapat diterapkan secara konsisten di beberapa titik akhir layanan. Pendekatan ini memungkinkan layanan mikro tetap terisolasi dengan tepat sambil tetap mengizinkan permintaan lintas asal yang sah dari aplikasi klien yang berwenang. Misalnya, perusahaan fintech mungkin mengonfigurasi API pemrosesan pembayaran mereka untuk hanya menerima permintaan dari domain frontend tertentu sambil memblokir semua permintaan lintas asal lainnya. Generator kami membuat konfigurasi yang mempertahankan batas keamanan ini tanpa mengharuskan pengembang menulis aturan header yang kompleks untuk setiap layanan.",
      case2: "<b>Integrasi API Pihak Ketiga dan Aplikasi SaaS</b>: Perusahaan yang menyediakan layanan API dan platform SaaS perlu mengaktifkan integrasi pihak ketiga melalui konfigurasi CORS yang tepat sambil mempertahankan batas keamanan. Insinyur platform menggunakan generator kami untuk membuat konfigurasi yang secara selektif mengizinkan akses lintas asal berdasarkan domain mitra dan status langganan. Misalnya, platform analitik pemasaran mungkin mengonfigurasi API data mereka untuk menerima permintaan dari domain pelanggan sambil mencegah akses yang tidak sah. Generator membantu membuat kebijakan CORS yang tepat yang dapat disesuaikan secara dinamis seiring evolusi hubungan pelanggan, memastikan akses API tetap aman dan sesuai bisnis. Fitur ini sangat berharga dalam skenario ekosistem mitra di mana penyedia API harus menyeimbangkan keterbukaan integrasi dengan kebutuhan keamanan.",
      case3: "<b>Jaringan Pengiriman Konten (CDN) yang Aman dan Hosting Aset</b>: Organisasi yang menghosting aset statis seperti font, stylesheet, gambar dan pustaka JavaScript pada CDN khusus memerlukan pengaturan CORS yang tepat untuk membuat sumber daya ini dapat diakses oleh aplikasi web mereka. Insinyur DevOps menggunakan generator kami untuk membuat konfigurasi yang mengizinkan aplikasi tertentu mengakses aset yang dihosting CDN sambil mencegah penggunaan yang tidak sah oleh domain lain. Misalnya, perusahaan penerbitan yang menghosting font premium akan mengonfigurasi header CORS untuk hanya mengizinkan situs web mereka sendiri menggunakan aset tersebut. Generator membuat konfigurasi khusus untuk lingkungan CDN dan server edge yang mengoptimalkan keamanan dan kinerja melalui pengaturan instruksi cache dan kontrol akses yang tepat. Ini memastikan aset statis tetap terlindungi sambil tetap dapat dikirimkan secara efisien ke aplikasi yang berwenang.",
      case4: "<b>Lingkungan Pengembangan dan Pengujian</b>: Tim pengembangan perangkat lunak yang bekerja dengan beberapa lingkungan (pengembangan, staging, produksi) membutuhkan konfigurasi CORS yang fleksibel untuk mengakomodasi persyaratan keamanan yang berbeda dalam siklus pengembangan. Pengembang frontend menggunakan generator kami untuk membuat konfigurasi khusus lingkungan yang mengizinkan akses lintas asal selama pengembangan dan pengujian sambil menerapkan kontrol yang lebih ketat di produksi. Misalnya, lingkungan pengembangan mungkin mengizinkan asal localhost untuk pengujian lokal, sementara lingkungan produksi akan dibatasi hanya untuk domain produksi yang diverifikasi. Generator membantu membuat kebijakan keamanan bertingkat ini tanpa memerlukan konfigurasi ulang manual yang besar, menyederhanakan alur kerja pengembangan sambil mempertahankan batas keamanan yang sesuai di setiap tahap. Pendekatan ini mencegah jalan pintas keamanan selama pengembangan bertahan ke lingkungan produksi.",
      case5: "<b>Aplikasi Web Multiregional dan Internasional</b>: Organisasi global yang mengoperasikan aplikasi di beberapa wilayah geografis sering kali menyebarkan layanan ke domain dan subdomain khusus wilayah yang harus berkomunikasi dengan aman satu sama lain. Arsitek sistem menggunakan generator kami untuk membuat konfigurasi CORS yang mengizinkan permintaan lintas asal antara domain organisasi yang berbeda sambil memblokir permintaan eksternal. Misalnya, perusahaan multinasional mungkin perlu mengizinkan api.us.example.com menerima permintaan dari app.eu.example.com. Generator membuat spesifikasi asal yang tepat yang mempertimbangkan hubungan domain yang kompleks ini sambil mempertahankan batas keamanan terhadap domain eksternal. Konfigurasi ini memastikan komponen geografis yang terdistribusi dari aplikasi yang sama dapat beroperasi secara terkoordinasi sambil mempertahankan perlindungan terhadap ancaman lintas asal yang tidak sah."
    },
    tutorial: {
      title: "Cara Membuat Konfigurasi CORS yang Aman",
      intro: "Ikuti panduan langkah demi langkah ini untuk membuat konfigurasi CORS yang disesuaikan dengan kebutuhan spesifik Anda:",
      step1: {
        title: "Langkah 1: Konfigurasikan Asal yang Diizinkan",
        description: "Pertama, tentukan domain mana yang dapat mengakses sumber daya Anda melalui bagian <b>Asal yang Diizinkan</b>. Untuk keamanan maksimum, hindari opsi wildcard (*) yang mengizinkan domain apa pun mengakses sumber daya Anda. Sebaliknya, pilih opsi \"Tentukan Domain yang Diizinkan\" dan tambahkan setiap domain tepercaya secara individual. Misalnya, masukkan \"https://yourtrustedapp.com\" untuk hanya mengizinkan domain tertentu itu. Ingatlah untuk menyertakan protokol (https://) dan perhatikan bahwa subdomain dianggap sebagai asal yang berbeda (app.example.com dan api.example.com adalah asal yang berbeda). Jika Anda perlu mendukung lingkungan pengembangan, Anda dapat menambahkan domain pengembangan seperti \"http://localhost:3000\" di samping domain produksi. Setelah menambahkan semua domain tepercaya, periksa kembali apakah ada kesalahan ketik karena bahkan kesalahan kecil dapat menyebabkan browser memblokir permintaan yang sah."
      },
      step2: {
        title: "Langkah 2: Tentukan Metode HTTP yang Diizinkan",
        description: "Selanjutnya, di bagian <b>Metode HTTP yang Diizinkan</b>, pilih metode HTTP yang harus diterima oleh API atau sumber daya Anda dari permintaan lintas asal. Ikuti prinsip hak istimewa minimum dengan hanya mengaktifkan metode yang benar-benar dibutuhkan oleh aplikasi Anda. Untuk sumber daya hanya-baca, pertimbangkan untuk membatasi hanya pada GET dan OPTIONS (OPTIONS diperlukan untuk permintaan preflight). Untuk sumber daya yang menerima pembaruan, aktifkan secara selektif POST, PUT, PATCH atau DELETE tergantung pada kebutuhan aktual API Anda. Berhati-hatilah saat mengaktifkan metode yang memodifikasi data (POST, PUT, PATCH, DELETE) karena ini memerlukan pertimbangan keamanan tambahan. Metode OPTIONS biasanya harus tetap diaktifkan karena browser menggunakannya untuk permintaan preflight untuk memverifikasi izin sebelum membuat permintaan lintas asal aktual dengan metode lain. Pilihan Anda di sini secara langsung memengaruhi operasi apa yang dapat dilakukan klien lintas asal pada sumber daya Anda."
      },
      step3: {
        title: "Langkah 3: Konfigurasikan Header dan Kredensial",
        description: "Di bagian <b>Header yang Diizinkan</b>, tentukan header permintaan HTTP yang harus diizinkan dalam permintaan lintas asal. Aktifkan header umum yang dibutuhkan aplikasi Anda seperti 'Content-Type' untuk menentukan format permintaan, 'Authorization' untuk token otentikasi, dan header kustom apa pun yang dibutuhkan aplikasi Anda. Untuk otentikasi berbasis kredensial (cookie, otentikasi HTTP atau sertifikat klien), konfigurasikan opsi <b>Izinkan Kredensial</b> dengan tepat. Catatan penting: Saat mengizinkan kredensial, Anda tidak dapat menggunakan wildcard (*) untuk asal yang diizinkan - Anda harus menentukan asal secara eksplisit. Selanjutnya, atur <b>Durasi Cache Preflight</b> yang sesuai untuk mengurangi jumlah permintaan preflight. Nilai yang direkomendasikan 3600 detik (satu jam) menyeimbangkan kinerja dengan fleksibilitas untuk memperbarui kebijakan CORS jika diperlukan. Terakhir, jika API Anda mengembalikan header kustom yang perlu diakses oleh aplikasi klien, tambahkan ini ke bagian <b>Header yang Diekspos</b>."
      },
      step4: {
        title: "Langkah 4: Hasilkan dan Terapkan Konfigurasi Server",
        description: "Setelah mengkonfigurasi semua parameter CORS, pilih lingkungan server target Anda (Node.js/Express, Apache, Nginx atau header HTTP) dari opsi format. Tinjau kode konfigurasi yang dihasilkan untuk memastikannya memenuhi persyaratan Anda. Gunakan tombol \"Salin\" untuk menyalin konfigurasi dan terapkan di lingkungan server Anda sesuai dokumentasi platform Anda. Untuk aplikasi Node.js, instal paket 'cors' dan terapkan konfigurasi ke aplikasi Express Anda. Untuk server Apache, tambahkan arahan yang dihasilkan ke file .htaccess atau konfigurasi server Anda. Untuk Nginx, sertakan arahan dalam blok server atau lokasi Anda. Setelah diterapkan, uji secara menyeluruh konfigurasi CORS Anda dengan permintaan lintas asal untuk memverifikasi bahwa permintaan yang sah diizinkan sementara asal yang tidak sah tetap diblokir. Pertimbangkan untuk menggunakan alat pengembang browser (tab Network) untuk memeriksa header CORS yang dikembalikan oleh server Anda dan men-debug masalah apa pun."
      }
    },
    corsDetails: {
      title: "Detail Teknis Implementasi CORS",
      intro: "Memahami mekanisme di balik CORS membantu membuat konfigurasi yang lebih efektif dan aman:",
      preflight: {
        title: "Permintaan Preflight dan Perannya",
        description: "<b>Permintaan preflight adalah mekanisme keamanan kunci dalam protokol CORS</b> yang digunakan browser untuk memeriksa apakah memiliki izin untuk membuat permintaan lintas asal tertentu sebelum benar-benar mengirimkannya. Ketika permintaan dapat memodifikasi data server (seperti permintaan POST atau PUT) atau menggunakan header non-sederhana, browser pertama-tama secara otomatis mengirim permintaan OPTIONS ke server. Permintaan preflight ini menyertakan header yang menunjukkan metode HTTP dan header yang dimaksudkan untuk digunakan oleh permintaan aktual. Server harus merespons dengan header Access-Control-Allow-* yang sesuai untuk menunjukkan apakah permintaan yang dimaksud diizinkan. Mekanisme preflight ini memberikan titik pemeriksaan keamanan penting yang mencegah permintaan lintas asal yang berpotensi berbahaya dikirim ke server yang tidak secara eksplisit memilih untuk menerimanya. Generator Konfigurasi CORS kami secara otomatis membuat penanganan sisi server yang diperlukan untuk permintaan preflight ini untuk semua platform server yang didukung, memastikan server Anda merespons dengan benar terhadap pemeriksaan keamanan browser ini dengan izin yang Anda tentukan."
      },
      security: {
        title: "Dampak Keamanan dari Pengaturan CORS",
        description: "<b>Konfigurasi CORS secara langsung memengaruhi</b> postur keamanan aplikasi web Anda, karena mengontrol domain eksternal mana yang dapat berinteraksi dengan endpoint API dan sumber daya Anda. Pengaturan CORS yang terlalu longgar - terutama menggunakan asal wildcard (*) - dapat membuat aplikasi Anda rentan terhadap serangan pemalsuan permintaan lintas situs, di mana situs jahat membuat permintaan tidak sah ke API Anda menggunakan sesi otentikasi pengguna. Sangat penting untuk menentukan asal yang diizinkan secara eksplisit daripada menggunakan wildcard saat menggunakan header Access-Control-Allow-Credentials: true, karena mengizinkan kredensial dengan asal wildcard akan menciptakan kerentanan keamanan yang serius. Prinsip hak istimewa minimum harus memandu konfigurasi CORS Anda: hanya izinkan asal, metode, dan header tertentu yang benar-benar dibutuhkan oleh aplikasi Anda. Generator kami mendorong praktik terbaik keamanan dengan memberikan peringatan yang jelas tentang konfigurasi yang berpotensi tidak aman dan memberikan nilai default yang aman yang melindungi sumber daya Anda sambil mengaktifkan fungsionalitas lintas asal yang diperlukan. Pendekatan ini membantu mencegah kesalahan konfigurasi keamanan umum yang dapat menyebabkan paparan data atau operasi yang tidak sah."
      },
      headers: {
        title: "Penjelasan Header CORS Dasar",
        description: "<b>Setiap header CORS memiliki fungsi keamanan spesifik</b> dalam mengontrol akses lintas asal ke sumber daya Anda. Access-Control-Allow-Origin menentukan domain mana yang dapat mengakses sumber daya Anda dan merupakan header CORS paling dasar - browser secara ketat menegakkan pencocokan asal ini. Access-Control-Allow-Methods mendeklarasikan metode HTTP mana yang dapat digunakan domain eksternal saat meminta sumber daya Anda, memungkinkan Anda membatasi permintaan lintas asal ke operasi hanya-baca jika diperlukan. Access-Control-Allow-Headers mengontrol header HTTP mana yang dapat disertakan dalam permintaan lintas asal, memungkinkan Anda mengizinkan header spesifik seperti Authorization sambil memblokir yang lain. Access-Control-Allow-Credentials menentukan apakah browser dapat mengirim cookie atau informasi otentikasi dalam permintaan lintas asal, yang sangat penting untuk mempertahankan sesi otentikasi lintas asal. Access-Control-Max-Age menentukan berapa lama browser harus meng-cache respons preflight, mengoptimalkan kinerja dengan mengurangi permintaan preflight. Access-Control-Expose-Headers memungkinkan Anda membuat header respons tertentu terlihat oleh klien lintas asal, yang diperlukan ketika klien perlu mengakses header kustom dalam respons API Anda. Generator kami membuat kombinasi yang tepat dari header ini berdasarkan kebutuhan spesifik Anda, memastikan konfigurasi CORS yang lengkap dan koheren."
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Konfigurasi CORS",
      q1: "Apa perbedaan antara CORS dan kebijakan same-origin tradisional?",
      a1: "<b>Kebijakan same-origin (SOP) dan Cross-Origin Resource Sharing (CORS)</b> bekerja sama untuk menciptakan lingkungan penjelajahan web yang aman, meskipun melayani tujuan yang berbeda. Kebijakan same-origin adalah mekanisme keamanan default",
      q2: "Mengapa wildcard (*) tidak bisa digunakan bersama kredensial?",
      a2: "<b>Browser secara ketat melarang penggunaan wildcard dengan kredensial</b>, ini merupakan tindakan keamanan penting untuk mencegah kerentanan serius. Jika browser mengizinkan kombinasi Access-Control-Allow-Origin: * dengan Access-Control-Allow-Credentials: true, akan tercipta skenario berbahaya di mana situs web mana pun dapat membuat permintaan terautentikasi ke API Anda menggunakan kredensial pengguna (cookie, otentikasi HTTP atau sertifikat klien). Ini pada dasarnya akan menghilangkan perlindungan kebijakan same-origin terhadap serangan pemalsuan permintaan lintas situs (CSRF). Sebagai contoh, jika kombinasi ini diizinkan, situs jahat dapat menggunakan cookie otentikasi pengguna untuk membuat permintaan ke API perbankan Anda, berpotensi mentransfer dana atau mengakses informasi sensitif. Untuk mencegah kerentanan ini, semua browser utama menegakkan aturan ketat: ketika Access-Control-Allow-Credentials disetel ke true, header Access-Control-Allow-Origin harus menentukan asal yang tepat, bukan wildcard. Generator CORS kami menegakkan batasan keamanan ini dengan menonaktifkan opsi kredensial saat memilih wildcard, dan sebaliknya. Ini memastikan konfigurasi yang Anda hasilkan selalu memenuhi persyaratan keamanan penting browser ini.",
      
      q3: "Bagaimana permintaan preflight CORS memengaruhi kinerja API?",
      a3: "<b>Permintaan preflight CORS dapat berdampak signifikan pada kinerja API</b>, karena menambahkan permintaan HTTP tambahan (OPTIONS) sebelum permintaan data aktual dalam banyak skenario lintas asal. Setiap permintaan preflight menciptakan latensi karena browser harus menunggu respons OPTIONS sebelum melanjutkan dengan permintaan sebenarnya. Ini secara efektif menggandakan jumlah permintaan HTTP dan putaran server untuk permintaan lintas asal non-sederhana. Dampak kinerja sangat terlihat pada aplikasi dengan panggilan API yang sering atau koneksi latensi tinggi. Untuk mengurangi dampak kinerja ini, header Access-Control-Max-Age sangat penting - header ini memberi tahu browser berapa lama (dalam detik) untuk meng-cache hasil preflight, mencegah permintaan preflight tambahan dalam jangka waktu tersebut. Generator kami merekomendasikan nilai default 3600 detik (satu jam) sebagai keseimbangan yang wajar antara pengoptimalan kinerja dan fleksibilitas untuk memperbarui kebijakan CORS jika diperlukan. Untuk aplikasi lalu lintas tinggi, Anda mungkin mempertimbangkan untuk meningkatkan nilai ini lebih jauh (hingga maksimum 86400 detik/24 jam, meskipun browser mungkin menerapkan batas atas mereka sendiri). Selain itu, untuk kinerja maksimum di lingkungan produksi, pastikan server Anda merespons permintaan OPTIONS dengan cepat, dan pertimbangkan untuk menerapkan rute penanganan preflight khusus dengan overhead pemrosesan minimal.",
      
      q4: "Bagaimana cara menguji konfigurasi CORS saya berfungsi dengan benar?",
      a4: "<b>Menguji konfigurasi CORS memerlukan pendekatan metodis</b>, karena konfigurasi yang salah sering muncul sebagai pesan kesalahan browser yang samar dan sulit didiagnosis. Strategi pengujian yang paling efektif melibatkan pembuatan klien pengujian lintas asal sederhana yang dihosting di domain yang berbeda dari API Anda. Ini bisa berupa halaman HTML dasar dengan JavaScript yang membuat berbagai jenis permintaan ke endpoint API Anda. Gunakan alat pengembang Chrome atau Firefox (tab Jaringan) untuk mengamati permintaan preflight OPTIONS dan permintaan sebenarnya yang mengikutinya. Verifikasi bahwa permintaan OPTIONS menerima respons 200 atau 204 dengan header Access-Control-Allow-* yang benar. Uji berbagai skenario termasuk metode HTTP yang berbeda, header kustom, dan permintaan dengan kredensial untuk memastikan konfigurasi Anda menangani semua persyaratan aplikasi Anda. Masalah pengujian umum termasuk lupa bahwa localhost:3000 dan localhost:8080 dianggap sebagai asal yang berbeda oleh browser, atau mengabaikan perbedaan protokol (http vs https). Jika Anda melihat kesalahan CORS, periksa apakah asal yang diizinkan Anda benar-benar cocok dengan asal halaman permintaan (termasuk protokol, domain, dan port), verifikasi bahwa server Anda benar-benar mengirim header CORS dalam responsnya (bukan hanya dalam konfigurasi), dan pastikan permintaan preflight ditangani dengan benar. Generator kami membuat konfigurasi untuk lingkungan server umum, tetapi Anda mungkin perlu menyesuaikannya dengan pengaturan server spesifik Anda.",
      
      q5: "Apa risiko keamanan dari kebijakan CORS yang terlalu longgar?",
      a5: "<b>Kebijakan CORS yang terlalu longgar dapat memperkenalkan kerentanan keamanan serius</b>, melemahkan perlindungan kebijakan same-origin terhadap serangan lintas situs. Risiko paling signifikan berasal dari mengkonfigurasi Access-Control-Allow-Origin: * bersama dengan Access-Control-Allow-Credentials: true (meskipun browser memblokir kombinasi khusus ini, proxy yang salah konfigurasi mungkin tidak). Bahkan tanpa kredensial, kebijakan CORS yang terlalu terbuka dapat mengekspos API dan data sensitif ke situs web yang tidak berwenang. Misalnya, jika API manajemen internal mengizinkan semua asal, situs jahat dapat membuat permintaan ke sana dan berpotensi mengakses data sensitif atau melakukan manipulasi. Risiko umum lainnya adalah validasi asal yang tidak tepat - seperti pencocokan string sederhana yang menyetujui asal apa pun yang berisi domain tepercaya (mengizinkan attacker.com/evil.yourcompany.com alih-alih hanya yourcompany.com). Selain itu, CORS yang salah konfigurasi dapat mengaktifkan serangan pemalsuan permintaan lintas situs jika kebijakan mengizinkan asal yang tidak tepercaya untuk membuat permintaan yang mengubah status. Untuk mengurangi risiko ini, ikuti prinsip hak istimewa minimum: hanya izinkan asal, metode, dan header spesifik yang benar-benar dibutuhkan aplikasi Anda. Untuk API internal, jangan pernah menggunakan wildcard asal. Lakukan audit rutin terhadap konfigurasi CORS Anda sebagai bagian dari tinjauan keamanan, dan pertimbangkan untuk menerapkan mekanisme otentikasi tambahan untuk operasi sensitif. Generator kami membuat konfigurasi yang mendorong praktik terbaik keamanan ini sambil tetap mengaktifkan fungsionalitas lintas asal yang diperlukan."
    },
    relatedTools: {
      title: "Jelajahi Alat Pengembangan Web Terkait",
      description: "Tingkatkan alur kerja pengembangan web Anda dengan alat pelengkap ini:",
      tool1: {
        name: "Alat Pemformatan dan Validasi JSON",
        url: "https://www.ufreetools.com/tool/json-formatter",
        description: "Format, validasi, dan perindah data JSON untuk respons dan permintaan API Anda."
      },
      tool2: {
        name: "Referensi Kode Status HTTP",
        url: "https://www.ufreetools.com/tool/http-status-code-lookup",
        description: "Panduan komprehensif untuk kode status HTTP, untuk penanganan respons API yang tepat."
      },
      tool3: {
        name: "Debugger JWT",
        url: "https://www.ufreetools.com/tool/jwt-debugger",
        description: "Parsing, validasi, dan debug token JWT secara online."
      },
      tool4: {
        name: "Pengkode/Decode URL",
        url: "https://www.ufreetools.com/tool/url-encode-decode",
        description: "Enkode atau dekode komponen URL untuk penanganan karakter khusus yang tepat dalam permintaan lintas asal."
      }
    },
    resources: {
      title: "Sumber Daya Otoritatif tentang CORS dan Keamanan Web",
      resource1: {
        name: "Dokumen Web MDN: Cross-Origin Resource Sharing (CORS)",
        url: "https://developer.mozilla.org/id/docs/Web/HTTP/CORS",
        description: "Panduan komprehensif Mozilla tentang pemahaman dan implementasi CORS, dengan penjelasan rinci tentang semua header dan perilaku browser."
      },
      resource2: {
        name: "Spesifikasi CORS W3C",
        url: "https://www.w3.org/TR/cors/",
        description: "Spesifikasi resmi W3C yang mendefinisikan standar Cross-Origin Resource Sharing seperti yang diimplementasikan oleh browser."
      },
      resource3: {
        name: "Cheat Sheet Keamanan Aplikasi: Kesalahan Konfigurasi CORS",
        url: "https://0xn3va.gitbook.io/cheat-sheets/web-application/cors-misconfiguration",
        description: "Cross-Origin Resource Sharing (CORS) adalah mekanisme browser yang mendukung akses terkontrol ke sumber daya di luar domain tertentu. Ini memperluas dan menambah fleksibilitas pada Same-Origin Policy (SOP)."
      }
    }
  }
}
