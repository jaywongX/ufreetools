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
  }
};
