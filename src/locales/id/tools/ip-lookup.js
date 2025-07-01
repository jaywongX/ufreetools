export default {
  name: 'Alat Pencari Alamat IP',
  description: 'Dapatkan detail lengkap alamat IP termasuk lokasi dan informasi jaringan',
  input: {
    title: 'Pencarian Alamat IP',
    ipAddress: 'Alamat IP',
    ipPlaceholder: 'Masukkan alamat IP (contoh: 8.8.8.8)',
    hostname: 'Nama Host',
    hostnamePlaceholder: 'Atau masukkan nama host (contoh: google.com)',
    options: 'Opsi Pencarian',
    includeGeolocation: 'Sertakan lokasi geografis',
    includeASN: 'Sertakan informasi ASN',
    includeDomains: 'Sertakan domain terkait',
    includeAbuse: 'Sertakan kontak pelaporan penyalahgunaan',
    myIP: 'Gunakan alamat IP saya'
  },
  actions: {
    lookup: 'Cari IP',
    clear: 'Hapus Hasil',
    copyIP: 'Salin IP',
    copyAll: 'Salin Semua Informasi',
    export: 'Ekspor Hasil'
  },
  results: {
    title: 'Informasi IP',
    noResults: 'Tidak ada informasi yang ditampilkan',
    error: 'Error: {message}',
    unknown: 'Tidak diketahui',
    queryTime: 'Waktu Pencarian',
    dataSource: 'Sumber Data',
    general: {
      title: 'Informasi Umum',
      ipAddress: 'Alamat IP',
      hostname: 'Nama Host',
      type: 'Tipe',
      ipv4: 'IPv4',
      ipv6: 'IPv6',
      isPublic: 'IP Publik',
      yes: 'Ya',
      no: 'Tidak',
      reverse: 'DNS Balik'
    },
    location: {
      title: 'Lokasi',
      country: 'Negara',
      region: 'Wilayah',
      city: 'Kota',
      postalCode: 'Kode Pos',
      timezone: 'Zona Waktu',
      coordinates: 'Koordinat',
      latitude: 'Lintang',
      longitude: 'Bujur'
    },
    network: {
      title: 'Jaringan',
      asn: 'ASN',
      organization: 'Organisasi',
      isp: 'Penyedia Layanan Internet',
      usage: 'Tipe Penggunaan',
      domain: 'Domain',
      route: 'Rute',
      subnet: 'Subnet',
      netmask: 'Netmask',
      cidr: 'Notasi CIDR'
    },
    security: {
      title: 'Informasi Keamanan',
      threat: 'Deteksi Ancaman',
      isTor: 'Node Keluar Tor',
      isProxy: 'Proxy',
      isVpn: 'VPN',
      isAttacker: 'Penyerang Diketahui',
      isAbuser: 'Penyalahguna Diketahui',
      threatLevel: 'Tingkat Ancaman',
      confidenceScore: 'Skor Keyakinan',
      abuseReports: 'Laporan Penyalahgunaan',
      lastReported: 'Terakhir Dilaporkan'
    },
    additional: {
      title: 'Informasi Tambahan',
      mobile: 'Jaringan Seluler',
      hosting: 'Penyedia Hosting',
      associated: 'Domain Terkait',
      abuseContact: 'Kontak Pelaporan Penyalahgunaan'
    }
  },
  map: {
    title: 'Peta Lokasi',
    noLocation: 'Tidak ada data lokasi yang tersedia',
    viewLarger: 'Lihat peta yang lebih besar'
  },
  messages: {
    lookingUp: 'Mencari informasi untuk {query}...',
    copied: 'Tersalin ke clipboard',
    exported: 'Hasil berhasil diekspor',
    invalidIP: 'Alamat IP tidak valid',
    invalidHostname: 'Nama host tidak valid',
    publicIPOnly: 'Alat ini hanya untuk alamat IP publik',
    rateLimited: 'Batas pencarian terlampaui. Silakan coba lagi nanti.',
    historyCleared: 'Riwayat telah dihapus'
  },
  history: {
    title: 'Riwayat Pencarian',
    clear: 'Hapus Riwayat'
  },
  article: {
    title: "Panduan Lengkap Pencarian Alamat IP - Pelacakan Lokasi Geografis",
    intro: {
      title: "Apa itu Alat Pencari IP dan Mengapa Anda Membutuhkannya?",
      p1: "<b>Alat Pencari Alamat IP</b> adalah utilitas penting yang memungkinkan Anda menemukan detail lengkap tentang alamat IP apa pun di internet. Alat kami memberikan analisis komprehensif termasuk informasi lokasi geografis (negara, wilayah, kota), detail jaringan (ISP, organisasi) serta informasi keamanan. Bagi administrator jaringan, profesional keamanan siber, dan pengguna internet biasa, fungsi pencarian IP sangat penting untuk mengidentifikasi dan memecahkan berbagai masalah jaringan.",
      p2: "Melakukan <b>pelacakan lokasi geografis IP yang akurat</b> memiliki banyak aplikasi praktis di berbagai bidang. Dari personalisasi konten hingga deteksi penipuan, informasi IP menggerakkan banyak sistem online yang kritis. Alat kami memanfaatkan beberapa database terpercaya untuk memberikan hasil akurat baik untuk alamat IPv4 maupun IPv6, membantu Anda memahami dengan tepat asal dan tujuan komunikasi digital.",
      p3: "Dengan meningkatnya perhatian terhadap <b>privasi dan keamanan online</b>, memiliki layanan pencarian IP yang andal menjadi lebih penting dari sebelumnya. Baik Anda memecahkan masalah jaringan, memverifikasi lokasi pengguna, atau menyelidiki aktivitas mencurigakan, alat pencarian IP komprehensif kami menyediakan informasi yang Anda butuhkan dalam format yang intuitif dan mudah dipahami."
    },
    useCases: {
      title: "Aplikasi Praktis Pencarian Alamat IP",
      case1: "<b>Investigasi Keamanan Siber</b>: Tim keamanan menggunakan pencarian IP untuk menyelidiki upaya login mencurigakan, mengidentifikasi potensi ancaman, dan melacak asal aktivitas berbahaya. Ketika log server menunjukkan lalu lintas mencurigakan, pencarian IP dapat dengan cepat menentukan apakah itu berasal dari wilayah berisiko tinggi atau jaringan yang terkait dengan aktivitas berbahaya.",
      case2: "<b>Lokalisasi Konten dan Geolokasi</b>: Bisnis online mengandalkan pelacakan lokasi geografis IP yang akurat untuk menyediakan konten regional, menerapkan pembatasan berbasis lokasi, dan menyesuaikan pengalaman pengguna. Ini memastikan pelanggan menerima bahasa, mata uang, dan konten yang sesuai berdasarkan lokasi geografis mereka.",
      case3: "<b>Pemecahan Masalah Jaringan</b>: Profesional TI sering menggunakan alat pencarian IP untuk mendiagnosis masalah koneksi, memverifikasi konfigurasi routing, dan mengidentifikasi hambatan jaringan. Ketika pengguna melaporkan masalah koneksi, memeriksa rute geografis lalu lintas jaringan dapat membantu menentukan di mana terjadi latency atau kegagalan.",
      case4: "<b>Tindakan Pencegahan Penipuan</b>: Lembaga keuangan dan platform e-commerce memanfaatkan data IP untuk mendeteksi potensi penipuan dengan mengidentifikasi perbedaan antara lokasi yang diklaim pengguna dengan lokasi IP sebenarnya. Ini membantu mencegah transaksi tidak sah dan pembajakan akun.",
      case5: "<b>Kepatuhan dan Pembatasan Geografis</b>: Banyak layanan perlu membatasi akses berdasarkan lokasi karena perjanjian lisensi atau persyaratan hukum. Pencarian IP menyediakan data yang diperlukan untuk menerapkan pembatasan ini secara efektif sambil meminimalkan kemungkinan kesalahan identifikasi."
    },
    tutorial: {
      title: "Cara Menggunakan Alat Pencarian Alamat IP Kami",
      intro: "Alat pencarian IP kami dirancang secara intuitif namun kuat. Ikuti langkah sederhana ini untuk mendapatkan informasi lengkap tentang alamat IP apa pun:",
      step1: {
        title: "Langkah 1: Masukkan Alamat IP atau Nama Host",
        description: "Pertama, masukkan alamat IP (contoh 8.8.8.8) atau nama host (contoh google.com) di kolom input. Jika Anda ingin memeriksa alamat IP Anda sendiri, cukup klik tombol \"Gunakan alamat IP saya\" dan alat kami akan secara otomatis mendeteksi dan memasukkan alamat IP publik Anda saat ini."
      },
      step2: {
        title: "Langkah 2: Konfigurasi Opsi Pencarian",
        description: "Sesuaikan pencarian dengan memilih informasi yang ingin Anda dapatkan. Anda dapat memilih untuk menyertakan data lokasi geografis, informasi ASN, domain terkait, dan kontak pelaporan penyalahgunaan. Untuk sebagian besar pengguna, kami sarankan mengaktifkan semua opsi untuk mendapatkan hasil paling komprehensif. Jika Anda hanya tertarik pada informasi tertentu, Anda dapat menonaktifkan opsi lain untuk menyederhanakan hasil."
      },
      step3: {
        title: "Langkah 3: Mulai Pencarian",
        description: "Klik tombol \"Cari IP\" untuk memulai proses pencarian. Alat kami kemudian akan menghubungi beberapa database IP terpercaya untuk mengumpulkan informasi paling akurat dan terbaru yang tersedia. Ini biasanya hanya membutuhkan beberapa detik, tetapi mungkin bervariasi tergantung kecepatan koneksi Anda dan beban server kami saat ini."
      },
      step4: {
        title: "Langkah 4: Analisis Hasil",
        description: "Tinjau detail yang ditampilkan di bagian hasil. Data diorganisir ke dalam kategori logis untuk navigasi yang mudah: informasi dasar (tipe IP, nama host), lokasi (negara, kota, koordinat), jaringan (ISP, organisasi, ASN) dan informasi keamanan (deteksi ancaman, status proxy/VPN). Anda dapat menyimpan hasil lengkap menggunakan tombol \"Salin Semua Informasi\" atau mengekspornya untuk analisis lebih lanjut."
      }
    },
    ipTypes: {
      title: "Memahami Berbagai Jenis Alamat IP",
      intro: "Alamat IP memiliki berbagai jenis dan format, masing-masing dengan tujuan khusus dalam komunikasi jaringan. Berikut adalah jenis utama alamat IP yang perlu Anda ketahui:",
      public: {
        title: "Alamat IP Publik",
        description: "<b>Alamat IP publik</b> adalah alamat yang dapat dirutekan secara global yang diberikan oleh Penyedia Layanan Internet (ISP) untuk mengidentifikasi jaringan Anda di internet. Alamat ini unik di seluruh internet dan memungkinkan sistem eksternal berkomunikasi dengan jaringan Anda. Ketika situs web melacak pengunjung atau layanan menerapkan pembatasan geografis, mereka menggunakan alamat IP publik. Alat pencarian IP kami terutama memberikan detail untuk IP publik karena ini mengandung informasi geografis dan jaringan yang bermakna."
      },
      private: {
        title: "Alamat IP Privat",
        description: "<b>Alamat IP privat</b> digunakan dalam jaringan lokal dan mengikuti rentang tertentu yang dicadangkan (seperti 192.168.x.x, 10.x.x.x atau 172.16.x.x). Alamat ini tidak dapat dirutekan di internet dan digunakan untuk mengidentifikasi perangkat dalam jaringan rumah atau bisnis. Ketika Anda memiliki beberapa perangkat yang terhubung ke Wi-Fi rumah, setiap perangkat mendapatkan alamat IP privat sambil berbagi satu alamat IP publik yang diberikan oleh ISP. Alat kami akan menunjukkan apakah suatu alamat bersifat privat, tetapi pelacakan lokasi geografis terperinci tidak berlaku untuk IP privat."
      },
      ipv4: {
        title: "Alamat IPv4",
        description: "<b>Alamat IPv4</b> adalah format alamat IP asli yang terdiri dari empat angka yang dipisahkan titik (contoh 192.0.2.1), masing-masing berkisar dari 0 hingga 255. Dengan sekitar 4,3 miliar kemungkinan alamat, IPv4 masih menjadi protokol yang paling banyak digunakan. Namun, karena ledakan perangkat yang terhubung ke internet, alamat IPv4 menjadi langka, yang mengarah pada pengembangan IPv6. Alat kami memberikan informasi lengkap untuk alamat IPv4 termasuk lokasi geografis yang tepat dan detail jaringan."
      },
      ipv6: {
        title: "Alamat IPv6",
        description: "<b>Alamat IPv6</b> mewakili generasi berikutnya dari pengalamatan IP, menggunakan ruang alamat yang lebih besar dengan format delapan kelompok angka heksadesimal yang dipisahkan titik dua (contoh 2001:0db8:85a3:0000:0000:8a2e:0370:7334). Dengan 340 triliun triliun triliun alamat unik yang tersedia, IPv6 memastikan kita tidak akan kehabisan alamat di masa depan yang dapat diperkirakan. Alat kami sepenuhnya mendukung pencarian IPv6, memberikan detail yang sama dengan alamat IPv4, membantu Anda mempersiapkan transisi yang sedang berlangsung ke standar yang lebih baru ini."
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Pencarian IP",
      q1: "Seberapa akurat pelacakan lokasi geografis berbasis IP?",
      a1: "Akurasi pelacakan lokasi geografis berbasis IP bergantung pada beberapa faktor. Untuk <b>deteksi tingkat negara</b>, akurasi biasanya sangat tinggi (95-99%). Namun, untuk akurasi tingkat kota, tingkat akurasi bervariasi antara 50-80% tergantung wilayah dan ketersediaan data. Pelacakan lokasi biasanya lebih akurat di daerah perkotaan padat penduduk dan negara dengan infrastruktur internet yang mapan.<br><br>Beberapa faktor yang mempengaruhi akurasi:<br>• Realokasi alamat IP oleh ISP<br>• Penggunaan proxy, VPN atau jaringan Tor<br>• Jaringan perusahaan dengan pintu keluar internet terpusat<br>• Jaringan seluler di mana alamat IP mungkin mencakup area geografis besar<br><br>Alat pencarian IP kami menggabungkan beberapa database terpercaya untuk memberikan hasil seakurat mungkin, tetapi penting untuk memahami bahwa pelacakan lokasi geografis IP harus dianggap sebagai perkiraan bukan lokasi setepat GPS. Untuk aplikasi yang membutuhkan akurasi tinggi, pelacakan lokasi geografis IP harus dikombinasikan dengan metode verifikasi lain.",
      
      q2: "Bisakah pencarian IP mendeteksi VPN dan proxy?",
      a2: "Alat pencarian IP kami dapat mendeteksi banyak <b>VPN, proxy, dan layanan anonimisasi</b> dengan akurasi yang wajar. Deteksi dilakukan dengan membandingkan alamat IP dengan database server VPN, layanan proxy, dan node keluar Tor yang diketahui. Selain itu, alat ini menganalisis berbagai indikator teknis yang menunjukkan penggunaan proxy, seperti pola port, sidik jari hosting, dan karakteristik jaringan.<br><br>Namun, penting untuk memahami keterbatasannya:<br>• Layanan VPN baru atau kecil mungkin belum termasuk dalam database deteksi<br>• Proxy pribadi atau khusus mungkin lebih sulit dideteksi<br>• Beberapa layanan VPN berkualitas tinggi secara aktif membuat koneksi mereka terlihat seperti koneksi biasa<br>• Akurasi deteksi bervariasi berdasarkan wilayah dan penyedia<br><br>Ketika alat kami mengidentifikasi bahwa koneksi mungkin melalui VPN atau proxy, ini akan ditunjukkan di bagian informasi keamanan dengan skor keyakinan. Ini sangat berguna untuk aplikasi keamanan, jaringan distribusi konten, dan layanan yang perlu menegakkan pembatasan geografis.",
      
      q3: "Apakah legal mencari alamat IP orang lain?",
      a3: "Di sebagian besar yurisdiksi, mencari informasi yang tersedia secara publik tentang alamat IP umumnya <b>legal</b>, mirip dengan mencari pemilik domain atau nomor telepon di direktori publik. Alat pencarian IP kami hanya mengakses informasi yang tersedia secara publik melalui database legal.<br><br>Namun, ada pertimbangan etika dan hukum penting:<br><br>• Informasi ini harus digunakan untuk tujuan legal seperti pemecahan masalah jaringan, analisis keamanan, atau pencegahan penipuan<br>• Pencarian IP saja tidak akan memberikan informasi identitas pribadi pengguna alamat tersebut<br>• Menggunakan data IP untuk pelecehan, pelacakan, atau aktivitas jahat lainnya adalah ilegal di sebagian besar tempat<br>• Beberapa yurisdiksi memiliki peraturan khusus tentang data alamat IP sebagai bagian dari undang-undang privasi yang lebih luas (seperti GDPR di Eropa)<br><br>Untuk aplikasi komersial, disarankan untuk menyertakan informasi tentang pengumpulan data IP dalam kebijakan privasi dan memastikan Anda memiliki dasar hukum yang tepat untuk memproses informasi ini. Alat kami dirancang untuk skenario penggunaan legal dan mencakup pembatasan kecepatan untuk mencegah pola penyalahgunaan.",
      
      q4: "Mengapa alamat IP mungkin menunjukkan lokasi yang salah?",
      a4: "Ada beberapa alasan mengapa alamat IP mungkin menunjukkan lokasi yang tidak terduga atau <b>tidak benar</b>:<br><br>1. <b>Arsitektur Jaringan ISP</b>: Penyedia layanan internet Anda mungkin merutekan lalu lintas melalui titik pusat yang mungkin berada di kota atau bahkan negara yang berbeda dari lokasi fisik Anda.<br><br>2. <b>Jaringan Perusahaan</b>: Perusahaan sering mengkonsolidasikan lalu lintas internet melalui kantor pusat atau pusat data tertentu, membuat semua koneksi karyawan tampak berasal dari lokasi tersebut, terlepas dari di mana mereka sebenarnya bekerja.<br><br>3. <b>VPN dan Proxy</b>: Saat menggunakan layanan ini, lokasi yang tampak akan sesuai dengan lokasi server keluar, bukan lokasi fisik Anda.<br><br>4. <b>Jaringan Seluler</b>: Alamat IP seluler biasanya dipetakan ke gateway pusat yang mungkin jauh dari lokasi pengguna sebenarnya.<br><br>5. <b>Keterbatasan Database</b>: Database pelacakan lokasi geografis IP diperbarui secara berkala tetapi mungkin berisi informasi yang kedaluwarsa, terutama ketika ISP mengalokasikan kembali blok IP.<br><br>6. <b>Mesin Virtual dan Layanan Cloud</b>: Ini biasanya menggunakan alamat IP yang terdaftar ke lokasi penyedia cloud, bukan lokasi pengguna.<br><br>Untuk hasil paling akurat, alat kami memeriksa silang beberapa database IP, tetapi karena keterbatasan inherent dalam pelacakan lokasi geografis berbasis IP, beberapa perbedaan mungkin masih terjadi.",
      
      q5: "Seberapa sering lokasi alamat IP berubah?",
      a5: "Frekuensi <b>perubahan lokasi alamat IP</b> bergantung pada beberapa faktor:<br><br>1. <b>IP Dinamis vs Statis</b>: Sebagian besar koneksi perumahan menggunakan alamat IP dinamis yang dapat berubah secara berkala - dari harian hingga bulanan, atau ketika router menyambung kembali. Koneksi bisnis dan server biasanya menggunakan IP statis yang jarang berubah.<br><br>2. <b>Kebijakan ISP</b>: Penyedia layanan internet yang berbeda memiliki kebijakan yang berbeda tentang rotasi IP dan realokasi. Beberapa ISP sering mengubah IP pelanggan, sementara yang lain mungkin mempertahankannya relatif stabil selama berbulan-bulan.<br><br>3. <b>Realokasi Blok IP</b>: Kadang-kadang, blok besar alamat IP dialokasikan kembali antara organisasi atau wilayah, yang dapat menyebabkan perubahan lokasi yang lebih signifikan.<br><br>4. <b>Koneksi Seluler</b>: Alamat IP perangkat seluler dapat sering berubah, terutama saat beralih antara jaringan seluler dan Wi-Fi, atau saat berpindah antara menara seluler yang berbeda.<br><br>Karena faktor-faktor ini, data pelacakan lokasi geografis IP harus dianggap sebagai cuplikan yang mungkin kedaluwarsa. Untuk aplikasi yang membutuhkan verifikasi lokasi berkelanjutan, disarankan untuk memeriksa ulang informasi IP secara berkala. Sumber database kami diperbarui secara teratur untuk mengakomodasi perubahan ini, tetapi selalu mungkin menemukan alamat yang baru dialokasikan."
    },
    relatedTools: {
      title: "Jelajahi Alat Jaringan Terkait",
      description: "Tingkatkan analisis jaringan Anda dengan alat pelengkap ini:",
      tool1: {
        name: "Pemeriksa Keamanan Header HTTP",
        url: "https://www.ufreetools.com/tool/http-header-security-checker",
        description: "Analisis dan evaluasi keamanan header respons HTTP."
      },
      tool2: {
        name: "Editor Header Permintaan",
        url: "https://www.ufreetools.com/tool/request-header-editor",
        description: "Buat, edit, dan uji header permintaan HTTP."
      },
      tool3: {
        name: "Detektor Proxy HTTP",
        url: "https://www.ufreetools.com/tool/http-proxy-detector",
        description: "Deteksi apakah koneksi Anda menggunakan proxy HTTP, dan analisis header terkait proxy untuk verifikasi keamanan."
      },
      tool4: {
        name: "Parser Parameter URL",
        url: "https://www.ufreetools.com/tool/url-params-parser",
        description: "Parse, analisis, dan manipulasi parameter URL dan string query."
      },
    },
    resources: {
      title: "Sumber Otoritatif tentang Pengalamatan IP",
      resource1: {
        name: "IANA (Internet Assigned Numbers Authority)",
        url: "https://www.iana.org/numbers",
        description: "Koordinator global resmi untuk sistem pengalamatan IP dan alokasi ASN, menyediakan informasi otoritatif tentang alokasi alamat."
      },
      resource2: {
        name: "Regional Internet Registries (RIRs)",
        url: "https://www.nro.net/about/rirs",
        description: "Organisasi yang bertanggung jawab untuk alokasi blok alamat IP di wilayah geografis tertentu, memelihara database registri resmi."
      },
      resource3: {
        name: "RFC 8890 - Internet adalah untuk Pengguna Akhir",
        url: "https://datatracker.ietf.org/doc/html/rfc8890",
        description: "Dokumen penting IETF yang membahas prinsip pengalamatan internet dan hubungannya dengan privasi dan hak pengguna akhir."
      }
    }
  }
}