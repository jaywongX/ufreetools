export default {
  name: 'Detektor Proxy HTTP',
  description: 'Mendeteksi dan menganalisis proxy HTTP serta perangkat perantara dalam koneksi',
  title: 'Detektor Proxy Frontend',
  intro: 'Deteksi apakah koneksi jaringan Anda menggunakan proxy, analisis header HTTP terkait proxy seperti X-Forwarded-For',

  detection: {
    title: 'Deteksi Proxy',
    start: 'Mulai Deteksi',
    detecting: 'Mendeteksi...',
    stop: 'Hentikan Deteksi',
    completed: 'Deteksi Selesai',
    noProxies: 'Tidak terdeteksi proxy',
    proxiesFound: 'Proxy yang terdeteksi: {count}'
  },

  options: {
    title: 'Opsi Deteksi',
    testUrl: 'URL Tes',
    urlPlaceholder: 'Masukkan URL yang akan diuji (default: otomatis)',
    testMethod: 'Metode HTTP',
    get: 'GET',
    head: 'HEAD',
    options: 'OPTIONS',
    timeout: 'Timeout (detik)',
    parallel: 'Tes Paralel',
    techniques: 'Teknik Deteksi',
    headerAnalysis: 'Analisis Header',
    traceMethod: 'Metode TRACE',
    viaHeader: 'Pemeriksaan Header Via',
    maxForwards: 'Tes Max-Forwards',
    fingerprinting: 'Identifikasi Sidik Jari Proxy',
    timing: 'Analisis Waktu',
    advanced: 'Opsi Lanjutan',
    apiSelection: 'Pilih API'
  },

  apis: {
    ipify: 'API ipify',
    ipapi: 'IP-API',
    httpbin: 'httpbin'
  },

  results: {
    title: 'Hasil Deteksi',
    summary: 'Ringkasan Proxy',
    headers: 'Header Permintaan Lengkap',
    info: 'Penjelasan Informasi Proxy',
    detected: 'Proxy Terdeteksi',
    notDetected: 'Proxy Tidak Terdeteksi',
    detectedDescription: 'Permintaan Anda mungkin melewati satu atau lebih server proxy',
    notDetectedDescription: 'Permintaan Anda tampaknya langsung mencapai server tujuan tanpa melalui proxy',
    clientInfo: 'Informasi IP Klien',
    remoteIp: 'Alamat IP Remote',
    location: 'Lokasi Geografis',
    isp: 'Penyedia Layanan Internet',
    proxyHeaders: 'Header Terkait Proxy',
    details: 'Hasil Detail',
    proxy: 'Proxy',
    type: 'Jenis',
    ip: 'Alamat IP',
    software: 'Perangkat Lunak',
    confidence: 'Tingkat Kepercayaan',
    latency: 'Latensi',
    headers: 'Header yang Dimodifikasi',
    fingerprint: 'Sidik Jari',
    export: 'Ekspor Hasil',
    clear: 'Hapus Hasil',
    noData: 'Tidak ada data tersedia',
    originalRequest: 'Permintaan Asli',
    modifiedRequest: 'Permintaan yang Dimodifikasi',
    proxyChain: 'Rantai Proxy',
    server: 'Server',
    notSet: 'Tidak diatur'
  },

  types: {
    forward: 'Proxy Forward',
    reverse: 'Proxy Reverse',
    transparent: 'Proxy Transparan',
    anonymous: 'Proxy Anonim',
    elite: 'Proxy Elite',
    caching: 'Proxy Cache',
    gateway: 'Gateway',
    loadBalancer: 'Load Balancer',
    cdn: 'CDN',
    corporate: 'Proxy Perusahaan',
    unknown: 'Jenis Tidak Dikenal'
  },

  headers: {
    title: 'Analisis Header',
    original: 'Header Asli',
    modified: 'Header yang Dimodifikasi',
    added: 'Header yang Ditambahkan',
    removed: 'Header yang Dihapus',
    changed: 'Header yang Diubah',
    suspicious: 'Header Mencurigakan',
    select: 'Pilih Header untuk Dianalisis',
    name: 'Nama Header',
    value: 'Nilai',
    all: 'Semua Header Permintaan HTTP',
    notFound: 'Header ini tidak ditemukan'
  },

  details: {
    title: 'Detail Proxy',
    software: 'Perangkat Lunak',
    version: 'Versi',
    features: 'Fitur',
    modifications: 'Modifikasi',
    behavior: 'Perilaku',
    security: 'Dampak Keamanan',
    recommendations: 'Rekomendasi'
  },

  map: {
    title: 'Peta Koneksi',
    client: 'Klien Anda',
    target: 'Server Tujuan',
    hop: 'Hop {n}',
    direct: 'Koneksi Langsung',
    proxied: 'Koneksi Proxy',
    unknown: 'Jalur Tidak Dikenal'
  },

  actions: {
    copyHeaders: 'Salin Header',
    copyToClipboard: 'Salin ke Clipboard'
  },

  messages: {
    startDetection: 'Memulai deteksi proxy...',
    detectionComplete: 'Deteksi proxy selesai',
    error: 'Deteksi gagal: {message}',
    timeout: 'Deteksi timeout',
    exportComplete: 'Berhasil mengekspor hasil',
    noConnection: 'Tidak dapat membuat koneksi',
    limitedResults: 'Hasil terbatas karena pembatasan',
    privateNetwork: 'Jaringan pribadi terdeteksi',
    publicNetwork: 'Jaringan publik terdeteksi',
    warning: 'Peringatan: {message}',
    proxyRemoved: 'Mungkin ada proxy yang menghapus header deteksi',
    copied: 'Header berhasil disalin ke clipboard',
    copyFailed: 'Gagal menyalin, silakan salin manual',
    unknown: 'Kesalahan tidak diketahui'
  },

  info: {
    description: 'Proxy HTTP adalah server perantara yang berada di antara klien dan server, yang dapat memproses permintaan HTTP untuk berbagai tujuan. Proxy dapat diatur oleh penyedia jaringan, organisasi, perusahaan, atau individu.'
  },

  xff: {
    title: 'Apa itu X-Forwarded-For?',
    description: 'X-Forwarded-For (XFF) adalah field header HTTP yang digunakan untuk mengidentifikasi alamat IP asli klien yang terhubung ke server web melalui proxy HTTP atau load balancer. Ketika permintaan melewati proxy, server biasanya hanya dapat melihat alamat IP server proxy, sedangkan header XFF menyediakan metode untuk melacak alamat IP klien asli.',
    notFound: 'Header X-Forwarded-For tidak ditemukan, ini menunjukkan bahwa permintaan mungkin tidak melalui proxy atau proxy tidak menambahkan header ini.',
    format: {
      title: 'Format Header XFF',
      description: 'Format standar header XFF adalah daftar alamat IP yang dipisahkan koma, dengan IP paling kiri adalah klien asli dan IP berikutnya adalah server proxy yang dilalui:'
    },
    related: {
      title: 'Header Proxy Terkait Lainnya',
      forwardedProto: 'Mengidentifikasi protokol (HTTP atau HTTPS) yang digunakan klien untuk terhubung ke proxy',
      forwardedHost: 'Mengidentifikasi nama host asli yang diminta klien',
      via: 'Menunjukkan server proxy yang dilalui oleh permintaan dan respons',
      forwarded: 'Header standar yang lebih baru, berisi informasi klien dan semua proxy'
    },
    importance: {
      title: 'Mengapa Informasi Proxy Penting',
      security: 'Keamanan dan kontrol akses - Mengidentifikasi IP klien secara akurat penting untuk mencegah penyalahgunaan dan menerapkan kontrol akses berbasis IP',
      logging: 'Pencatatan - Untuk audit dan diagnosis masalah, mencatat IP klien asli lebih berguna daripada IP proxy',
      geolocation: 'Layanan geolokasi - Layanan geolokasi berbasis IP memerlukan IP klien asli untuk memberikan hasil yang akurat',
      content: 'Penyesuaian konten - Beberapa layanan menyediakan konten lokal berdasarkan lokasi geografis pengguna'
    },
    security: {
      title: 'Pertimbangan Keamanan',
      description: 'Perlu diperhatikan bahwa header X-Forwarded-For dapat dipalsukan oleh klien. Dalam lingkungan dengan persyaratan keamanan tinggi, hanya informasi XFF dari server proxy yang dikenal yang harus dipercaya, atau gunakan metode lain untuk memverifikasi IP klien.'
    }
  },

  privacy: {
    title: 'Peringatan Privasi',
    description: 'Selama proses deteksi, alamat IP dan informasi header HTTP Anda akan dikirim ke layanan API pihak ketiga untuk dianalisis. Layanan ini dapat mengumpulkan dan menyimpan informasi ini untuk menyediakan layanan.',
    suggestion: 'Jika memiliki kekhawatiran privasi, pilih penyedia API yang berbeda atau pertimbangkan untuk menggunakan layanan VPN.'
  }
};