export default {
  name: 'Pemeriksa Keamanan Header HTTP',
  description: 'Analisis dan evaluasi keamanan header respons HTTP',
  title: 'Alat Pemeriksaan Keamanan Header HTTP',
  intro: 'Analisis header respons HTTP situs web, deteksi konfigurasi keamanan seperti CSP, HSTS, dan berikan rekomendasi perbaikan',

  input: {
    title: 'Masukkan URL atau Header',
    url: 'URL',
    urlPlaceholder: 'Masukkan URL yang akan diperiksa (contoh: https://example.com)',
    headers: 'Atau tempel langsung header HTTP',
    headersPlaceholder: 'Tempel header HTTP mentah di sini...',
    options: 'Opsi Pemindaian',
    followRedirects: 'Ikuti Pengalihan',
    includeSubresources: 'Periksa Sub-Sumber Daya (CSS, JS, dll)',
    timeout: 'Timeout (detik)',
    checkButton: 'Periksa Header',
    analyzing: 'Menganalisis...'
  },

  results: {
    title: 'Analisis Header Keamanan',
    overview: 'Ringkasan',
    score: 'Skor Keamanan',
    totalScore: 'Total Skor 100',
    scanned: 'URL yang Dipindai',
    date: 'Tanggal Pemindaian',
    headers: {
      title: 'Header yang Ditemukan',
      name: 'Header',
      value: 'Nilai',
      status: 'Status'
    },
    allHeaders: {
      title: 'Semua Header Respons',
      name: 'Nama',
      value: 'Nilai',
      noData: 'Tidak ada data header respons'
    },
    missing: {
      title: 'Header Keamanan yang Hilang',
      description: 'Header keamanan yang direkomendasikan berikut tidak ditemukan:'
    },
    issues: {
      title: 'Masalah Keamanan',
      critical: 'Kritis',
      high: 'Tinggi',
      medium: 'Sedang',
      low: 'Rendah',
      info: 'Informasi'
    },
    recommendations: {
      title: 'Rekomendasi',
      description: 'Pertimbangkan untuk menambahkan header berikut untuk meningkatkan keamanan:',
      example: 'Contoh Konfigurasi'
    },
    rating: {
      unknown: 'Tidak Diketahui',
      excellent: 'Sangat Baik',
      good: 'Baik',
      fair: 'Cukup',
      poor: 'Buruk',
      high_risk: 'Berisiko Tinggi',
      descriptions: {
        unknown: 'Tidak dapat memperoleh informasi header keamanan situs',
        excellent: 'Situs telah menerapkan semua header keamanan utama',
        good: 'Situs telah menerapkan sebagian besar header keamanan penting',
        fair: 'Situs kehilangan beberapa header keamanan penting',
        poor: 'Situs kehilangan beberapa header keamanan kunci',
        high_risk: 'Situs hampir tidak memiliki perlindungan header keamanan'
      }
    }
  },

  headers: {
    strictTransportSecurity: {
      name: 'Strict-Transport-Security',
      description: 'Memaksa penggunaan koneksi HTTPS daripada HTTP',
      recommendation: 'Tambahkan "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"',
      status: {
        good: 'Terkonfigurasi dengan benar',
        bad: 'Tidak dikonfigurasi',
        warning: 'Konfigurasi dapat ditingkatkan'
      },
      recommendationConfigured: 'Konfigurasi saat ini telah diterapkan, pastikan mencakup max-age yang cukup panjang dan includeSubDomains',
      recommendationMissing: 'Disarankan untuk mengaktifkan HSTS untuk memastikan semua komunikasi dilakukan melalui HTTPS'
    },
    xContentTypeOptions: {
      name: 'X-Content-Type-Options',
      description: 'Mencegah sniffing tipe MIME',
      recommendation: 'Tambahkan "X-Content-Type-Options: nosniff"',
      status: {
        good: 'Terkonfigurasi dengan benar',
        bad: 'Tidak dikonfigurasi atau konfigurasi salah'
      },
      recommendationConfigured: 'Konfigurasi benar, pertahankan pengaturan saat ini',
      recommendationMissing: 'Disarankan untuk mengatur header ini ke nilai "nosniff"'
    },
    xFrameOptions: {
      name: 'X-Frame-Options',
      description: 'Mencegah situs ditanam dalam iframe, sehingga mencegah serangan clickjacking',
      recommendation: 'Tambahkan "X-Frame-Options: DENY" atau "SAMEORIGIN"',
      status: {
        good: 'Terkonfigurasi',
        bad: 'Tidak dikonfigurasi'
      },
      recommendationConfigured: 'Konfigurasi saat ini telah diterapkan, disarankan menggunakan DENY atau SAMEORIGIN',
      recommendationMissing: 'Disarankan untuk mengkonfigurasi header ini ke DENY atau SAMEORIGIN untuk mencegah clickjacking'
    },
    contentSecurityPolicy: {
      name: 'Content-Security-Policy',
      description: 'Mengontrol sumber daya apa yang boleh dimuat oleh user agent',
      recommendation: 'Tambahkan header Content-Security-Policy dengan arahan yang sesuai',
      status: {
        good: 'Terkonfigurasi dengan benar',
        bad: 'Tidak dikonfigurasi',
        warning: 'Konfigurasi dapat ditingkatkan'
      },
      recommendationConfigured: 'Konfigurasi saat ini telah diterapkan, pastikan untuk meninjau dan memperbarui kebijakan secara berkala',
      recommendationMissing: 'Disarankan untuk mengkonfigurasi CSP untuk membatasi sumber asal sumber daya yang dapat dimuat, sehingga meningkatkan pertahanan terhadap serangan XSS'
    },
    xXssProtection: {
      name: 'X-XSS-Protection',
      description: 'Header ini mengaktifkan penyaringan XSS di browser versi lama. Di browser modern, disarankan menggunakan CSP sebagai gantinya.',
      recommendation: 'Meskipun header ini telah digantikan oleh CSP di browser modern, tetap disarankan untuk mengaturnya ke "1; mode=block" untuk kompatibilitas dengan browser lama',
      status: {
        enabled: 'Diaktifkan',
        disabled: 'Dinonaktifkan',
        notConfigured: 'Tidak dikonfigurasi (disarankan menggunakan CSP untuk browser modern)'
      }
    },
    referrerPolicy: {
      name: 'Referrer-Policy',
      description: 'Mengontrol informasi yang disertakan dalam header Referer',
      recommendation: 'Tambahkan "Referrer-Policy: no-referrer-when-downgrade" atau kebijakan yang lebih ketat',
      status: {
        good: 'Terkonfigurasi',
        bad: 'Tidak dikonfigurasi'
      },
      recommendationConfigured: 'Konfigurasi saat ini telah diterapkan, disarankan menggunakan strict-origin atau strict-origin-when-cross-origin',
      recommendationMissing: 'Disarankan untuk mengkonfigurasi header ini untuk mengontrol transmisi informasi referer'
    },
    permissionsPolicy: {
      name: 'Permissions-Policy',
      description: 'Mengontrol fitur dan API browser apa yang dapat digunakan',
      recommendation: 'Tambahkan header Permissions-Policy dengan pembatasan yang sesuai',
      status: {
        good: 'Terkonfigurasi',
        bad: 'Tidak dikonfigurasi'
      },
      recommendationConfigured: 'Konfigurasi saat ini telah diterapkan, pastikan untuk membatasi fitur yang tidak perlu',
      recommendationMissing: 'Disarankan untuk mengkonfigurasi header ini untuk membatasi fitur browser yang dapat digunakan situs'
    }
  },

  status: {
    good: 'Baik',
    warning: 'Peringatan',
    bad: 'Buruk',
    info: 'Informasi',
    notApplicable: 'Tidak Berlaku'
  },

  actions: {
    export: 'Ekspor Laporan',
    copyHeaders: 'Salin Header',
    copyRecommendations: 'Salin Rekomendasi',
    scan: 'Pemindaian Baru',
    share: 'Bagikan Hasil',
    analyze: 'Analisis Informasi Header'
  },

  emptyState: {
    line1: 'Masukkan URL situs web untuk menganalisis konfigurasi keamanan header respons HTTP',
    line2: 'Dapatkan penilaian dan rekomendasi rinci tentang header keamanan seperti CSP, HSTS, dll.'
  },

  messages: {
    scanning: 'Memindai {url}...',
    completed: 'Pemindaian selesai',
    error: 'Error: {message}',
    timeout: 'Permintaan timeout',
    invalidUrl: 'URL tidak valid',
    invalidUrlFormat: 'Masukkan URL valid yang dimulai dengan http:// atau https://',
    copied: 'Tersalin ke clipboard',
    exportComplete: 'Laporan berhasil diekspor',
    httpWarning: 'Peringatan: Menggunakan HTTP mungkin tidak aman',
    noHeaders: 'Tidak ditemukan informasi header',
    fetchError: 'Tidak dapat mengambil informasi header: {error}'
  }
};