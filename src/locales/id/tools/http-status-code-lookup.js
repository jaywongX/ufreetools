export default {
  name: 'Pencarian Kode Status HTTP',
  description: 'Mencari dan memahami kode status dan pesan respons HTTP',

  search: {
    title: 'Cari Kode Status',
    placeholder: 'Masukkan kode status atau cari berdasarkan deskripsi',
    button: 'Cari',
    recent: 'Pencarian Terakhir',
    common: 'Kode Status Umum',
    filter: {
      all: 'Semua Kategori',
      informational: '1xx - Respons Informasi',
      success: '2xx - Respons Sukses',
      redirection: '3xx - Pengalihan',
      clientError: '4xx - Kesalahan Klien',
      serverError: '5xx - Kesalahan Server'
    }
  },

  results: {
    title: 'Informasi Kode Status',
    code: 'Kode Status',
    type: 'Tipe',
    message: 'Pesan Standar',
    description: 'Deskripsi',
    spec: 'Spesifikasi',
    references: 'Referensi',
    examples: 'Contoh',
    noResults: 'Tidak ditemukan hasil',
    searchError: 'Terjadi kesalahan saat mencari kode status',
    tryAgain: 'Coba pencarian lain',
    example: 'Contoh',
    notes: 'Catatan'
  },

  categories: {
    title: 'Kategori',
    information: 'Respons Informasi (1xx)',
    success: 'Respons Sukses (2xx)',
    redirection: 'Pesan Pengalihan (3xx)',
    clientError: 'Respons Kesalahan Klien (4xx)',
    serverError: 'Respons Kesalahan Server (5xx)',
    unofficial: 'Kode Tidak Resmi',
    internet: 'Internet Information Services',
    nginx: 'Nginx',
    cloudflare: 'Cloudflare',
    aws: 'AWS'
  },

  statusInfo: {
    '100': {
      message: 'Lanjutkan',
      description: 'Server telah menerima header permintaan dan klien harus melanjutkan mengirim body permintaan.',
      shortDescription: 'Lanjutkan mengirim permintaan',
      fullDescription: 'Server telah menerima bagian awal permintaan dan klien harus melanjutkan mengirim sisanya.',
      notes: 'Biasanya digunakan untuk memeriksa apakah server akan menerima permintaan sebelum mengirim body besar.'
    },
    '101': {
      message: 'Beralih Protokol',
      description: 'Pemohon telah meminta server untuk beralih protokol dan server telah setuju untuk melakukannya.',
      shortDescription: 'Beralih protokol',
      fullDescription: 'Server telah memahami permintaan klien dan akan memberi tahu klien untuk menggunakan protokol berbeda melalui header Upgrade.',
      notes: 'Sering digunakan dalam proses pembuatan koneksi WebSocket.'
    },
    '200': {
      message: 'OK',
      description: 'Permintaan berhasil. Makna sukses tergantung pada metode HTTP.'
    },
    '201': {
      message: 'Dibuat',
      description: 'Permintaan berhasil dan telah membuat sumber daya baru.'
    },
    '204': {
      message: 'Tidak Ada Konten',
      description: 'Server berhasil memproses permintaan tetapi tidak perlu mengembalikan konten apa pun.'
    },
    '301': {
      message: 'Dialihkan Secara Permanen',
      description: 'URL sumber daya yang diminta telah diubah secara permanen. URL baru diberikan dalam respons.'
    },
    '302': {
      message: 'Ditemukan',
      description: 'URL sumber daya yang diminta diubah sementara. URL baru diberikan dalam respons.'
    },
    '304': {
      message: 'Tidak Dimodifikasi',
      description: 'Sumber daya tidak perlu dikirim ulang karena klien masih memiliki salinan yang diunduh sebelumnya.'
    },
    '400': {
      message: 'Permintaan Buruk',
      description: 'Server tidak dapat memahami permintaan karena sintaks tidak valid.'
    },
    '401': {
      message: 'Tidak Sah',
      description: 'Klien harus melakukan otentikasi untuk mendapatkan respons yang diminta.'
    },
    '403': {
      message: 'Dilarang',
      description: 'Klien tidak memiliki izin untuk mengakses konten.'
    },
    '404': {
      message: 'Tidak Ditemukan',
      description: 'Server tidak dapat menemukan sumber daya yang diminta.'
    },
    '500': {
      message: 'Kesalahan Internal Server',
      description: 'Server mengalami situasi yang tidak diketahui cara menanganinya.'
    },
    '502': {
      message: 'Gateway Buruk',
      description: 'Server bertindak sebagai gateway atau proxy menerima respons tidak valid dari server upstream.'
    },
    '503': {
      message: 'Layanan Tidak Tersedia',
      description: 'Server belum siap menangani permintaan. Penyebab umum adalah server sedang dalam pemeliharaan atau kelebihan beban.'
    }
  },

  tools: {
    title: 'Alat',
    checkUrl: 'Periksa Status URL',
    statusCodeFlow: 'Diagram Alir Kode Status',
    apiTest: 'Penguji API',
    debugger: 'Debugger Respons',
    statusInspector: 'Pemeriksa Status URL'
  },

  features: {
    title: 'Fitur',
    overview: 'Ikhtisar Kode Status',
    comparison: 'Perbandingan Kode Status',
    troubleshooting: 'Panduan Pemecahan Masalah',
    bestPractices: 'Praktik Terbaik',
    codeExamples: 'Contoh Kode'
  },

  details: {
    title: 'Detail',
    history: 'Sejarah',
    browser: 'Perilaku Browser',
    seo: 'Dampak SEO',
    security: 'Dampak Keamanan',
    bestPractices: 'Praktik Terbaik',
    alternatives: 'Kode Status Alternatif',
    commonErrors: 'Kesalahan Umum'
  },

  codeExamples: {
    title: 'Contoh Kode',
    nodejs: 'Node.js',
    python: 'Python',
    php: 'PHP',
    java: 'Java',
    go: 'Go',
    copyCode: 'Salin Kode',
    response: 'Contoh Respons',
    request: 'Contoh Permintaan'
  },

  category: {
    intro: 'Kode status HTTP adalah respons server terhadap permintaan browser, dibagi menjadi 5 kategori:',
    informational: '1xx (Kode Status Informasi) - Permintaan diterima dan sedang diproses',
    success: '2xx (Kode Status Sukses) - Permintaan berhasil diproses',
    redirection: '3xx (Kode Status Pengalihan) - Diperlukan tindakan tambahan untuk menyelesaikan permintaan',
    clientError: '4xx (Kode Status Kesalahan Klien) - Server tidak dapat memproses permintaan',
    serverError: '5xx (Kode Status Kesalahan Server) - Server gagal memproses permintaan'
  },

  codes: {
    '100': {
      shortDescription: 'Lanjutkan mengirim permintaan',
      description: 'Server telah menerima bagian awal permintaan dan klien harus melanjutkan mengirim sisanya.',
      notes: 'Biasanya digunakan untuk memeriksa apakah server akan menerima permintaan sebelum mengirim body besar.'
    },
    '101': {
      shortDescription: 'Beralih protokol',
      description: 'Server telah memahami permintaan klien dan akan memberi tahu klien untuk menggunakan protokol berbeda melalui header Upgrade.',
      notes: 'Sering digunakan dalam proses pembuatan koneksi WebSocket.'
    },
    '200': {
      shortDescription: 'Permintaan berhasil',
      description: 'Permintaan berhasil dan server telah mengembalikan konten yang diminta. Ini adalah kode status paling umum.',
      notes: 'Semua permintaan GET yang berhasil harus mengembalikan kode status ini.'
    },
    '201': {
      shortDescription: 'Dibuat',
      description: 'Permintaan berhasil dan server membuat sumber daya baru. Biasanya dikembalikan setelah permintaan POST.',
      notes: 'Harus mengembalikan lokasi (URI) sumber daya yang baru dibuat.'
    },
    '204': {
      shortDescription: 'Tidak ada konten',
      description: 'Server berhasil memproses permintaan tetapi tidak perlu mengembalikan konten apa pun.',
      notes: 'Sering digunakan untuk permintaan DELETE yang berhasil atau saat hanya perlu mereset tampilan klien.'
    },
    '301': {
      shortDescription: 'Pengalihan permanen',
      description: 'Sumber daya yang diminta telah dipindahkan secara permanen ke lokasi baru, dan referensi apa pun ke sumber daya ini harus menggunakan URL baru.',
      notes: 'Mesin pencari akan memperbarui URL sumber daya, dan browser biasanya menyimpan cache pengalihan ini.'
    },
    '302': {
      shortDescription: 'Pengalihan sementara',
      description: 'Sumber daya yang diminta sementara merespons permintaan dari URL yang berbeda, tetapi pemohon harus terus menggunakan URL asli untuk akses.',
      notes: 'Berbeda dengan 301, mesin pencari tidak akan memperbarui tautan sumber daya, dan browser mungkin tidak menyimpan cache pengalihan ini.'
    },
    '304': {
      shortDescription: 'Tidak dimodifikasi',
      description: 'Sumber daya tidak dimodifikasi dan dapat menggunakan versi yang di-cache oleh klien. Biasanya digunakan untuk permintaan GET bersyarat.',
      notes: 'Server tidak boleh mengembalikan body respons, membantu meningkatkan kinerja dan mengurangi penggunaan bandwidth.'
    },
    '400': {
      shortDescription: 'Permintaan buruk',
      description: 'Server tidak dapat memahami format permintaan, dan klien tidak boleh mengulangi permintaan tanpa modifikasi.',
      notes: 'Biasanya disebabkan oleh format parameter permintaan yang salah, parameter yang hilang, atau nilai parameter yang tidak valid.'
    },
    '401': {
      shortDescription: 'Tidak sah',
      description: 'Permintaan memerlukan otentikasi pengguna, seperti ketika pengguna tidak memberikan kredensial atau kredensial yang diberikan tidak valid.',
      notes: 'Klien harus memberikan atau memberikan kembali informasi otentikasi yang benar.'
    },
    '403': {
      shortDescription: 'Dilarang',
      description: 'Server memahami permintaan tetapi menolak untuk memenuhinya, berbeda dengan 401, otentikasi tidak akan membantu.',
      notes: 'Biasanya disebabkan oleh kurangnya izin, seperti mencoba mengakses konten yang hanya dapat dilihat oleh administrator.'
    },
    '404': {
      shortDescription: 'Tidak ditemukan',
      description: 'Server tidak dapat menemukan sumber daya yang diminta, mungkin karena kesalahan pengetikan URL atau sumber daya telah dihapus.',
      notes: 'Salah satu kode status kesalahan paling umum, harus memberi tahu pengguna dengan jelas bahwa sumber daya tidak ada.'
    },
    '405': {
      shortDescription: 'Metode tidak diizinkan',
      description: 'Metode permintaan yang ditentukan dalam baris permintaan tidak dapat digunakan untuk sumber daya yang diminta.',
      notes: 'Respons harus menyertakan header Allow yang menunjukkan metode permintaan yang valid untuk sumber daya tersebut.'
    },
    '409': {
      shortDescription: 'Konflik',
      description: 'Permintaan bertentangan dengan status server saat ini, biasanya muncul dalam permintaan PUT.',
      notes: 'Sering terjadi saat mencoba membuat sumber daya yang sudah ada atau mengedit sumber daya yang sama secara bersamaan.'
    },
    '429': {
      shortDescription: 'Terlalu banyak permintaan',
      description: 'Pengguna telah mengirim terlalu banyak permintaan dalam jangka waktu tertentu ("pembatasan").',
      notes: 'Harus menyertakan header Retry-After yang memberi tahu klien kapan dapat mengirim permintaan lagi.'
    },
    '500': {
      shortDescription: 'Kesalahan internal server',
      description: 'Server mengalami situasi yang tidak diketahui cara menanganinya, biasanya karena kesalahan kode atau kegagalan sementara.',
      notes: 'Salah satu kode status kesalahan server yang paling umum, harus memberikan informasi kesalahan dan log yang rinci untuk debugging.'
    },
    '502': {
      shortDescription: 'Gateway buruk',
      description: 'Server bertindak sebagai gateway atau proxy menerima respons tidak valid dari server upstream.',
      notes: 'Biasanya muncul saat menggunakan reverse proxy atau load balancer ketika layanan upstream tidak tersedia atau merespons secara tidak normal.'
    },
    '503': {
      shortDescription: 'Layanan tidak tersedia',
      description: 'Server sementara tidak dapat menangani permintaan, biasanya karena kelebihan beban atau pemeliharaan sistem.',
      notes: 'Harus menyertakan header Retry-After yang memberi tahu klien kapan harus mencoba lagi, membantu mengurangi beban server.'
    },
    '504': {
      shortDescription: 'Gateway timeout',
      description: 'Server bertindak sebagai gateway atau proxy tidak menerima respons tepat waktu dari server upstream.',
      notes: 'Sering terjadi ketika layanan di belakang proxy membutuhkan waktu terlalu lama untuk memproses atau ada masalah koneksi jaringan.'
    }
  }
};