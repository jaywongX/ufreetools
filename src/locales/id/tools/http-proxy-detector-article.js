export default {
  title: "Detektor Proxy HTTP - Mengidentifikasi dan Menganalisis Proxy Jaringan",
  intro: {
    title: "Apa itu Deteksi Proxy HTTP?",
    p1: "<b>Deteksi proxy HTTP</b> adalah proses untuk menentukan apakah koneksi internet Anda melewati satu atau lebih server perantara yang disebut proxy. Alat deteksi proxy HTTP kami menganalisis permintaan jaringan Anda dengan memeriksa header HTTP (seperti X-Forwarded-For, Via, dan indikator lainnya) untuk mengidentifikasi keberadaan proxy dalam jalur koneksi Anda.",
    p2: "Proxy adalah server perantara yang berada di antara perangkat Anda dan situs web yang Anda kunjungi. Mereka dapat digunakan untuk berbagai tujuan yang sah, seperti meningkatkan kinerja melalui caching, menerapkan kontrol akses, atau menyediakan anonimitas. Namun, penggunaan proxy tanpa pengetahuan atau persetujuan Anda juga dapat menimbulkan risiko keamanan. Alat <b>deteksi proxy</b> kami membantu Anda mengidentifikasi proxy tersembunyi dalam jaringan Anda, meningkatkan kesadaran keamanan dan membantu pemecahan masalah.",
    p3: "Ketika Anda terhubung melalui <b>server proxy HTTP</b>, informasi tertentu tentang aktivitas penjelajahan Anda mungkin terlihat oleh operator proxy. Alat deteksi proxy online ini memberi Anda pemahaman apakah koneksi Anda langsung atau melalui satu atau lebih lapisan proxy, memberi Anda kendali lebih besar atas privasi dan keamanan online Anda."
  },
  useCases: {
    title: "Kasus Penggunaan Praktis Deteksi Proxy",
    case1: "<b>Pemecahan Masalah Jaringan</b>: Saat mengalami masalah koneksi, mendeteksi proxy dapat membantu menentukan apakah server perantara menyebabkan masalah. Profesional TI sering perlu memverifikasi konfigurasi proxy untuk mendiagnosis masalah jaringan.",
    case2: "<b>Verifikasi Keamanan</b>: Memastikan penjelajahan pribadi Anda tidak melewati server proxy yang tidak sah yang mungkin memantau atau memodifikasi lalu lintas Anda. Organisasi dapat menggunakan deteksi proxy untuk memverifikasi apakah kebijakan keamanan perusahaan diterapkan dengan benar.",
    case3: "<b>Pengembang Situs Web</b>: Pengembang situs web perlu memahami bagaimana konten mereka disampaikan kepada pengguna, terutama saat menggunakan jaringan distribusi konten (CDN) atau load balancer yang berfungsi sebagai proxy. Menguji penanganan header yang benar sangat penting untuk keamanan dan analisis.",
    case4: "<b>Verifikasi Pembatasan Geografis</b>: Memeriksa apakah layanan VPN atau proxy Anda benar-benar menyembunyikan lokasi Anda untuk mengakses konten yang dibatasi wilayah. Alat kami membantu memverifikasi apakah tindakan bypass geolokasi berfungsi dengan baik.",
    case5: "<b>Pemeriksaan Lingkungan Perusahaan</b>: Untuk karyawan yang bekerja di lingkungan perusahaan, memverifikasi keberadaan dan konfigurasi proxy perusahaan yang dapat memengaruhi akses internet atau fungsi aplikasi Anda. Ini sangat penting saat memecahkan masalah koneksi aplikasi."
  },
  tutorial: {
    title: "Cara Mendeteksi Proxy HTTP dalam Koneksi Anda",
    intro: "Ikuti panduan langkah demi langkah ini untuk menggunakan alat deteksi proxy HTTP kami secara efektif dan memahami konfigurasi jaringan Anda:",
    step1: {
      title: "Langkah 1: Mulai Proses Deteksi",
      description: "Klik tombol <b>\"Mulai Deteksi\"</b> pada antarmuka alat untuk memulai. Detektor akan segera mulai menganalisis koneksi Anda dengan mengirimkan permintaan ke titik akhir API khusus. Secara default, alat ini akan secara otomatis memilih metode deteksi yang paling andal, tetapi Anda dapat menggunakan pemilih dropdown untuk memilih API yang berbeda untuk pengujian yang lebih komprehensif."
    },
    step2: {
      title: "Langkah 2: Tinjau Hasil Ringkasan",
      description: "Setelah deteksi selesai, tab <b>\"Ringkasan Proxy\"</b> akan menunjukkan apakah proxy terdeteksi dalam koneksi Anda. Cari tanda centang hijau yang menunjukkan koneksi langsung atau ikon peringatan kuning yang menunjukkan proxy terdeteksi. Ringkasan juga akan menampilkan informasi alamat IP dan lokasi yang terdeteksi, yang dapat membantu memverifikasi apakah lokasi asli Anda disembunyikan."
    },
    step3: {
      title: "Langkah 3: Periksa Header Proxy Secara Detail",
      description: "Klik tab <b>\"Header Permintaan Lengkap\"</b> untuk melihat semua header HTTP dalam permintaan Anda. Perhatikan khususnya header seperti X-Forwarded-For, Via, dan Forwarded yang menunjukkan penggunaan proxy. Header X-Forwarded-For sangat penting karena berisi rangkaian alamat IP yang menunjukkan jalur permintaan Anda melalui berbagai proxy. Anda dapat menggunakan tombol di bagian bawah untuk menyalin semua header ke clipboard untuk analisis lebih lanjut."
    },
    step4: {
      title: "Langkah 4: Pahami Informasi Proxy",
      description: "Untuk pemahaman lebih mendalam tentang arti header yang terdeteksi, kunjungi tab <b>\"Penjelasan Informasi Proxy\"</b>. Bagian ini menjelaskan tujuan dari berbagai header terkait proxy dan dampaknya terhadap keamanan koneksi. Gunakan pengetahuan ini untuk menentukan apakah proxy yang terdeteksi adalah yang diharapkan (seperti proxy jaringan perusahaan Anda) atau perantara yang tidak diinginkan."
    }
  },
  techniques: {
    title: "Memahami Teknik Deteksi Proxy HTTP",
    intro: "Alat kami menggunakan berbagai metode untuk mendeteksi proxy dalam koneksi jaringan secara akurat. Berikut adalah ikhtisar teknik utama yang digunakan:",
    method1: {
      title: "Analisis Header",
      description: "Metode deteksi paling umum adalah memeriksa header HTTP yang biasanya ditambahkan oleh server proxy, seperti X-Forwarded-For, Via, dan Forwarded. Header ini sering berisi informasi tentang alamat IP klien asli dan rantai proxy."
    },
    method2: {
      title: "Perbandingan IP",
      description: "Alat kami membandingkan alamat IP yang dilihat oleh server dengan IP klien yang diharapkan. Perbedaan antara IP ini sering menunjukkan keberadaan proxy. Metode ini sangat berguna untuk mendeteksi proxy transparan."
    },
    method3: {
      title: "Analisis Waktu Respons",
      description: "Dengan menganalisis waktu respons, kami terkadang dapat mendeteksi proxy karena mereka biasanya menambah latensi pada permintaan jaringan. Proxy caching mungkin menunjukkan pola waktu yang tidak konsisten tergantung pada apakah konten di-cache atau tidak."
    },
    method4: {
      title: "Deteksi Sisi Server",
      description: "API kami melakukan pemeriksaan sisi server yang dapat mengidentifikasi beberapa jenis proxy berdasarkan pemindaian port, basis data IP proxy yang diketahui, dan pola perilaku dalam permintaan HTTP."
    }
  },
  faq: {
    title: "Pertanyaan Umum tentang Deteksi Proxy HTTP",
    q1: "Mengapa saya harus memeriksa apakah koneksi saya menggunakan proxy?",
    a1: "Memeriksa proxy penting karena beberapa alasan: <b>Kesadaran keamanan</b> (memahami apakah lalu lintas Anda dipantau), <b>masalah privasi</b> (mengetahui siapa yang mungkin mengakses data penjelajahan Anda), <b>pemecahan masalah jaringan</b> (menentukan apakah proxy menyebabkan masalah koneksi), dan <b>verifikasi fungsi VPN</b> (memastikan alat privasi Anda berfungsi dengan baik). Melakukan deteksi proxy secara teratur membantu menjaga kesadaran akan status keamanan jaringan Anda.",
    
    q2: "Apakah alat deteksi proxy HTTP dapat mengidentifikasi semua jenis proxy?",
    a2: "Meskipun detektor proxy HTTP kami efektif mengidentifikasi proxy biasa melalui analisis header, beberapa jenis proxy tingkat lanjut mungkin lebih sulit dideteksi. <b>Proxy transparan</b> yang tidak memodifikasi header terkadang dapat diidentifikasi melalui perbedaan IP. <b>Proxy anonim</b> yang dirancang untuk menyembunyikan keberadaannya mungkin terdeteksi melalui analisis waktu atau teknik sisi server. Namun, <b>proxy elite</b> yang dirancang khusus untuk menghindari deteksi mungkin tidak dapat diidentifikasi oleh alat klien. Untuk deteksi yang lebih komprehensif, kami sarankan menggunakan beberapa opsi API dalam alat kami.",
    
    q3: "Apakah menggunakan proxy ilegal atau berbahaya bagi komputer saya?",
    a3: "Di sebagian besar negara, menggunakan proxy umumnya legal dan tidak berbahaya bagi komputer Anda. Proxy memiliki banyak kegunaan yang sah, termasuk <b>meningkatkan kinerja internet</b> melalui caching, <b>meningkatkan privasi</b> dengan menyembunyikan alamat IP, <b>mengakses konten yang dibatasi wilayah</b>, dan <b>menerapkan kebijakan keamanan</b> dalam lingkungan perusahaan. Namun, legalitas tergantung pada bagaimana proxy digunakan - menggunakan proxy untuk melewati pembatasan hak cipta atau melanggar ketentuan layanan mungkin bermasalah. Pastikan Anda menggunakan proxy sesuai dengan hukum setempat dan ketentuan layanan.",
    
    q4: "Apa perbedaan antara proxy dan VPN?",
    a4: "Meskipun proxy dan VPN keduanya merutekan lalu lintas Anda melalui server perantara, mereka berbeda dalam beberapa aspek penting: <b>VPN mengenkripsi semua lalu lintas</b> (antara perangkat Anda dan server VPN), sedangkan kebanyakan proxy tidak menyediakan enkripsi. VPN biasanya merutekan <b>semua lalu lintas internet</b> perangkat Anda, sedangkan proxy biasanya hanya menangani lalu lintas aplikasi atau protokol tertentu. VPN umumnya memberikan <b>perlindungan privasi yang lebih baik</b> dan fitur keamanan dibandingkan proxy standar. Karena kedua teknologi ini mengubah jalur koneksi Anda, detektor proxy kami mungkin mengenali koneksi VPN Anda sebagai proxy.",
    
    q5: "Mengapa perusahaan saya menggunakan server proxy, dan haruskah saya khawatir?",
    a5: "Perusahaan menerapkan server proxy untuk beberapa alasan yang sah: <b>penyaringan konten</b> (membatasi akses ke situs web tertentu), <b>optimasi bandwidth</b> (meng-cache konten yang sering diakses), <b>peningkatan keamanan</b> (memindai malware atau kerentanan), <b>pemantauan aktivitas karyawan</b> (memastikan kepatuhan terhadap kebijakan penggunaan yang dapat diterima), dan <b>menyediakan akses jarak jauh</b> ke sumber daya internal. Meskipun proxy perusahaan umumnya bukan masalah privasi, penting untuk diingat bahwa aktivitas online Anda di jaringan perusahaan mungkin dipantau. Jika detektor proxy kami mengidentifikasi proxy perusahaan, ini biasanya normal dalam lingkungan perusahaan.",
    
    q6: "Apa hubungan antara jaringan distribusi konten (CDN) dengan proxy?",
    a6: "Jaringan distribusi konten (CDN) berfungsi mirip dengan <b>proxy reverse</b> dan mungkin terdeteksi oleh alat kami. CDN mendistribusikan konten situs web melalui jaringan server global untuk meningkatkan kecepatan pemuatan dan keandalan. Saat Anda mengakses situs web menggunakan CDN, permintaan Anda biasanya dirutekan ke server CDN terdekat, bukan ke server asli. Ini muncul sebagai proxy dalam koneksi Anda karena server CDN bertindak sebagai perantara. Berbeda dengan proxy tradisional yang mungkin menjadi perhatian privasi, CDN diterapkan oleh pemilik situs web untuk meningkatkan pengalaman pengguna dan merupakan bagian normal dari infrastruktur web modern."
  },
  relatedTools: {
    title: "Alat Analisis Jaringan Terkait",
    description: "Jelajahi alat tambahan ini untuk mendapatkan wawasan lebih lanjut tentang konfigurasi jaringan dan keamanan Anda:",
    tool1: {
      name: "Pemeriksa Keamanan Header HTTP",
      url: "https://www.ufreetools.com/tool/http-header-security-checker",
      description: "Menganalisis header respons HTTP situs web, mendeteksi konfigurasi keamanan seperti CSP, HSTS, dan memberikan rekomendasi perbaikan"
    },
    tool2: {
      name: "Editor Header Permintaan",
      url: "https://www.ufreetools.com/tool/request-header-editor",
      description: "Membuat, mengedit, dan menguji header permintaan HTTP"
    },
    tool3: {
      name: "Pencarian Kode Status HTTP",
      url: "https://www.ufreetools.com/tool/http-status-code-lookup",
      description: "Mencari dan memahami kode status dan pesan respons HTTP"
    },
    tool4: {
      name: "Parser Parameter URL",
      url: "https://www.ufreetools.com/tool/url-params-parser",
      description: "Mengurai, menganalisis, dan memanipulasi parameter dan string kueri URL"
    }
  },
  resources: {
    title: "Pelajari Lebih Lanjut tentang Proxy dan Keamanan Jaringan",
    resource1: {
      name: "Panduan Pengujian OWASP",
      url: "https://owasp.org/www-project-web-security-testing-guide/assets/archive/OWASP_Testing_Guide_v4.pdf",
      description: "OWASP adalah komunitas global gratis dan terbuka yang berfokus pada peningkatan keamanan perangkat lunak aplikasi."
    },
    resource2: {
      name: "Header HTTP - Dokumentasi Web MDN",
      url: "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers",
      description: "Dokumentasi MDN yang mendetail tentang header HTTP, termasuk konten terkait proxy dan forwarding."
    },
    resource3: {
      name: "Internet Engineering Task Force (IETF) - Header HTTP Forwarded",
      url: "https://tools.ietf.org/html/rfc7239",
      description: "Dokumen RFC 7239 resmi yang mendefinisikan header HTTP Forwarded yang menstandarkan informasi yang ditambahkan oleh proxy."
    }
  }
}
