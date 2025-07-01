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
  },
  article: {
    title: "Pemeriksa Keamanan Header HTTP: Meningkatkan Postur Keamanan Situs Anda",
    features: {
      title: "Memahami Keamanan Header HTTP",
      description: "<strong>Pemeriksa Keamanan Header HTTP</strong> adalah alat yang dirancang khusus untuk menganalisis dan mengevaluasi <strong>header keamanan</strong> dari situs web apa pun. <strong>Header keamanan</strong> adalah header respons HTTP khusus yang dapat disetel oleh server untuk memberikan lapisan <strong>keamanan</strong> tambahan dengan membantu mempertahankan terhadap kerentanan web umum seperti serangan cross-site scripting (XSS), clickjacking, dan injeksi kode lainnya.<br><br>Alat kami memindai <strong>header keamanan</strong> kunci termasuk Content Security Policy (CSP), Strict Transport Security (HSTS), X-Content-Type-Options, X-Frame-Options, dan lainnya. Ini mengevaluasi <strong>konfigurasi header</strong> yang ada, mengidentifikasi <strong>header keamanan</strong> yang hilang, dan memberikan <strong>skor keamanan</strong> komprehensif serta rekomendasi yang dapat ditindaklanjuti untuk meningkatkan <strong>postur keamanan</strong> situs Anda.",
      useCases: {
        title: "Kasus Penggunaan Umum untuk Pemeriksa Keamanan Header HTTP",
        items: [
          "Pengembang web melakukan audit keamanan pada situs web yang baru dikembangkan sebelum penyebaran",
          "Profesional keamanan melakukan pengujian penetrasi dan penilaian kerentanan",
          "Administrator sistem memvalidasi konfigurasi keamanan server di beberapa domain",
          "Tim DevOps menerapkan pemantauan keamanan berkelanjutan dalam alur CI/CD",
          "Pemilik situs web memverifikasi postur keamanan mereka setelah menerapkan header yang direkomendasikan",
          "Konsultan keamanan menunjukkan kepada klien perlunya meningkatkan tindakan keamanan",
          "Petugas kepatuhan memastikan situs web mematuhi standar dan peraturan keamanan industri"
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Keamanan Header HTTP",
      items: [
        {
          question: "Apa itu header keamanan HTTP dan mengapa mereka penting?",
          answer: "Header keamanan HTTP adalah instruksi khusus yang dikirim dari server ke browser untuk mengontrol bagaimana browser harus berperilaku saat menangani konten situs web Anda. Mereka sangat penting karena memberikan lapisan keamanan tambahan yang dapat mempertahankan terhadap kerentanan web umum seperti XSS, CSRF, clickjacking, dan injeksi kode. Header keamanan yang dikonfigurasi dengan benar dapat secara signifikan meningkatkan postur keamanan situs web Anda dengan upaya minimal."
        },
        {
          question: "Header keamanan apa yang harus diterapkan oleh setiap situs web?",
          answer: "Setidaknya, setiap situs web modern harus menerapkan: Content Security Policy (CSP) untuk mencegah serangan XSS, Strict Transport Security (HSTS) untuk memaksa penggunaan HTTPS, X-Content-Type-Options untuk mencegah sniffing tipe MIME, X-Frame-Options untuk mencegah clickjacking, dan Referrer-Policy untuk mengontrol informasi dalam header referer. Pemeriksa header keamanan kami secara otomatis mengevaluasi header yang diperlukan ini dan lebih banyak lagi."
        },
        {
          question: "Bagaimana skor keamanan dihitung?",
          answer: "Skor keamanan dihitung berdasarkan keberadaan dan konfigurasi yang benar dari header keamanan kunci. Header keamanan utama seperti Content Security Policy dan HSTS masing-masing menyumbang hingga 20 poin, sementara header lainnya seperti X-Content-Type-Options dan X-Frame-Options menyumbang 10-15 poin masing-masing. Kami juga mengevaluasi kualitas implementasi, bukan hanya keberadaan header, dengan skor maksimum 100."
        },
        {
          question: "Bisakah saya menggunakan alat ini untuk memeriksa situs web yang tidak saya miliki?",
          answer: "Ya, Anda dapat menggunakan Pemeriksa Keamanan Header HTTP untuk menganalisis situs web apa pun yang dapat diakses publik. Alat ini hanya memeriksa header respons HTTP, yang merupakan informasi yang tersedia secara publik yang dikirim oleh server web. Namun, kami merekomendasikan untuk terutama menggunakannya pada situs web yang Anda miliki atau memiliki izin untuk menguji."
        },
        {
          question: "Bagaimana cara menerapkan header keamanan yang direkomendasikan oleh alat ini?",
          answer: "Implementasi tergantung pada server web atau platform Anda. Untuk Apache, Anda dapat menambahkan header di file .htaccess. Untuk Nginx, Anda dapat menambahkannya dalam konfigurasi server. Banyak sistem manajemen konten memiliki plugin untuk header keamanan. Pemeriksa Keamanan Header HTTP menyediakan contoh konfigurasi yang dapat Anda sesuaikan dengan lingkungan spesifik Anda."
        }
      ]
    },
    guide: {
      title: "Cara Menggunakan Pemeriksa Keamanan Header HTTP",
      steps: [
        "Masukkan URL lengkap situs web yang ingin Anda periksa di bidang input URL (harus menyertakan http:// atau https://)",
        "Untuk pemeriksaan lanjutan, pertimbangkan untuk mengaktifkan opsi seperti 'Ikuti Pengalihan' jika situs menggunakan pengalihan",
        "Klik tombol 'Periksa Header' untuk memulai analisis keamanan",
        "Tinjau skor keamanan dan peringkat keseluruhan di bagian atas hasil",
        "Periksa analisis rinci dari header keamanan yang terdeteksi, masing-masing diberi label indikator status (baik, peringatan, atau buruk)",
        "Klik header keamanan apa pun untuk memperluas dan melihat detail termasuk nilai saat ini, tujuan, dan rekomendasi spesifik",
        "Lihat daftar lengkap semua header respons HTTP yang dikembalikan oleh server di bagian 'Semua Header Respons'",
        "Terapkan header keamanan yang direkomendasikan pada server web Anda berdasarkan rekomendasi yang diberikan, lalu jalankan pemeriksa lagi untuk memverifikasi peningkatan"
      ]
    },
    conclusion: "Memeriksa dan memperbarui header keamanan situs web Anda secara teratur adalah praktik mendasar dalam pemeliharaan keamanan web. Dengan menggunakan Pemeriksa Keamanan Header HTTP, Anda dapat dengan mudah mengidentifikasi kelemahan dalam konfigurasi saat ini dan menerapkan perbaikan yang diperlukan untuk meningkatkan pertahanan terhadap serangan web umum. Ingatlah bahwa header keamanan hanyalah satu aspek dari strategi keamanan yang komprehensif, tetapi mereka memberikan perlindungan yang signifikan dengan upaya implementasi yang relatif kecil."
  }
}