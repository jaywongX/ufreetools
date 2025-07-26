export default {
  title: "Alat Tanda Tangan dan Verifikasi RSA: Tanda Tangan Digital yang Aman untuk Memastikan Integritas Data",
  
  introduction: {
    title: "Apa itu Verifikasi Tanda Tangan RSA?",
    p1: "Verifikasi tanda tangan RSA adalah proses kriptografi yang memastikan integritas data, keaslian, dan non-repudiasi dalam komunikasi digital. Alat verifikasi tanda tangan RSA kami memungkinkan Anda menandatangani data menggunakan kunci privat RSA dan memverifikasi tanda tangan menggunakan kunci publik yang sesuai, memberikan cara yang aman untuk memverifikasi bahwa informasi tidak diubah selama transmisi.",
    p2: "Di era di mana keamanan data sangat penting, tanda tangan digital RSA telah menjadi standar industri untuk melindungi dokumen elektronik, distribusi perangkat lunak, dan komunikasi yang aman. Alat ini mengimplementasikan skema padding PKCS#1 v1.5 dan PSS, mendukung berbagai algoritma hash termasuk SHA-1, SHA-256, SHA-384, dan SHA-512.",
    p3: "Baik Anda seorang pengembang yang menguji implementasi kriptografi, profesional keamanan yang memverifikasi tanda tangan digital, atau mahasiswa yang mempelajari kriptografi kunci publik, alat verifikasi tanda tangan RSA kami menyediakan antarmuka yang ramah pengguna dan fitur komprehensif untuk memenuhi semua kebutuhan tanda tangan digital Anda.",
    p4: "Proses verifikasi tanda tangan RSA bekerja dengan membuat hash kriptografi dari data, yang kemudian dienkripsi menggunakan kunci privat pengirim. Siapapun yang memiliki kunci publik yang sesuai dapat memverifikasi tanda tangan, sekaligus mengkonfirmasi integritas data dan identitas pengirim."
  },
  
  useCases: {
    title: "Aplikasi Umum Verifikasi Tanda Tangan RSA",
    case1: "Memverifikasi keaslian unduhan perangkat lunak dan pembaruan untuk mencegah distribusi malware",
    case2: "Memverifikasi sertifikat digital dalam komunikasi jaringan yang aman (HTTPS)",
    case3: "Memastikan integritas dokumen elektronik dan kontrak dalam konteks hukum dan bisnis",
    case4: "Mengimplementasikan otentikasi pesan yang aman dalam protokol komunikasi dan aplikasi"
  },
  
  tutorial: {
    title: "Cara Menggunakan Alat Verifikasi Tanda Tangan RSA",
    step1: {
      title: "Langkah 1: Siapkan Kunci",
      description: "Sebelum menandatangani atau memverifikasi, Anda memerlukan kunci RSA:",
      option1: "Buat pasangan kunci baru langsung di alat dengan mengklik tombol \"Buat Pasangan Kunci\" dan memilih panjang kunci yang diinginkan (disarankan 2048-bit atau lebih tinggi untuk keamanan)",
      option2: "Impor kunci yang ada dalam berbagai format (PEM, DER, HEX, atau Base64)"
    },
    step2: {
      title: "Langkah 2: Konfigurasikan Pengaturan Tanda Tangan",
      description: "Pilih pengaturan yang sesuai untuk operasi tanda tangan Anda:",
      option1: "Algoritma Hash: Pilih dari SHA-1, SHA-256, SHA-384, atau SHA-512 (disarankan SHA-256 atau lebih tinggi)",
      option2: "Skema Padding: Pilih antara PKCS#1 v1.5 (paling umum) atau PSS (lebih modern dan aman)",
      option3: "Format Input: Tentukan apakah input Anda adalah teks biasa, heksadesimal, atau pengkodean Base64"
    },
    step3: {
      title: "Langkah 3: Tandatangani atau Verifikasi Data",
      description: "Sesuai dengan kebutuhan Anda:",
      option1: "Tandatangani: Masukkan data Anda di bagian tanda tangan, lalu klik \"Tandatangani Data\" untuk menghasilkan tanda tangan",
      option2: "Verifikasi: Masukkan data asli dan tanda tangan di bagian verifikasi, lalu klik \"Verifikasi Tanda Tangan\""
    },
    step4: {
      title: "Langkah 4: Lihat Hasil dan Ekspor (jika diperlukan)",
      description: "Setelah menandatangani, Anda dapat menyalin tanda tangan atau mengekspornya dalam berbagai format (Base64, HEX, DER, PEM). Untuk verifikasi, alat akan menampilkan apakah tanda tangan valid atau tidak."
    },
    note: "Catatan: Untuk pengguna tingkat lanjut, alat ini juga menampilkan informasi praproses yang rinci, termasuk hash digest dan data padding, membantu Anda memahami setiap langkah proses tanda tangan RSA."
  },
  
  faq: {
    title: "Pertanyaan Umum tentang Tanda Tangan RSA",
    q1: "Apa perbedaan antara skema padding PKCS#1 v1.5 dan PSS?",
    a1: "PKCS#1 v1.5 adalah skema padding tradisional untuk tanda tangan RSA, didukung secara luas di berbagai sistem tetapi memiliki kerentanan teoritis yang diketahui. PSS (Probabilistic Signature Scheme) adalah metode yang lebih modern dengan keamanan yang dapat dibuktikan dan padding acak, membuatnya lebih tahan terhadap serangan kriptografi tertentu. Untuk sebagian besar aplikasi, kedua skema memberikan keamanan yang memadai ketika digunakan dengan algoritma hash yang kuat dan panjang kunci yang tepat.",
    
    q2: "Algoritma hash apa yang harus saya gunakan untuk tanda tangan RSA?",
    a2: "Untuk aplikasi modern, kami merekomendasikan setidaknya menggunakan SHA-256 untuk memastikan keamanan yang memadai. SHA-1 dianggap lemah secara kriptografi dan sebaiknya hanya digunakan untuk kompatibilitas warisan. Untuk aplikasi yang sangat sensitif atau saat menandatangani data dalam jumlah besar, SHA-384 atau SHA-512 memberikan margin keamanan tambahan.",
    
    q3: "Ukuran kunci apa yang direkomendasikan untuk tanda tangan RSA yang aman?",
    a3: "Per 2023, kunci RSA direkomendasikan minimal 2048-bit, dengan 3072 atau 4096-bit lebih disukai untuk keamanan jangka panjang. Kunci yang lebih kecil dari 2048-bit dianggap rentan terhadap serangan faktorisasi dengan sumber daya komputasi modern. Perhatikan bahwa ukuran kunci yang lebih besar akan meningkatkan waktu pemrosesan operasi tanda tangan.",
    
    q4: "Dapatkah saya menggunakan alat ini untuk memproses data yang sudah di-hash?",
    a4: "Ya, alat kami mendukung penandatanganan dan verifikasi data yang sudah di-hash. Ini sangat berguna ketika Anda telah menghitung hash digest menggunakan alat eksternal, atau saat menangani file besar dan ingin menghitung hash secara terpisah. Cukup pilih opsi \"pra-hash\" dan berikan nilai hash dalam format heksadesimal.",
    
    q5: "Apakah aman menggunakan alat online ini untuk penandatanganan sensitif?",
    a5: "Alat ini memproses semua data sepenuhnya di browser Anda - tidak ada informasi yang dikirim ke server kami. Namun, untuk operasi kriptografi yang sangat sensitif atau lingkungan produksi, kami merekomendasikan penggunaan perangkat keras keamanan khusus (seperti HSM) atau pustaka kriptografi yang matang di lingkungan yang terkendali.",
    a5_extra: "Untuk tujuan pendidikan, pengujian, atau aplikasi non-kritis, alat ini menyediakan cara yang nyaman dan aman untuk menangani tanda tangan RSA."
  },
  
  resources: {
    title: "Alat dan Sumber Daya Terkait",
    description: "Tingkatkan alur kerja kriptografi Anda dengan alat pelengkap ini:",
    tool1: "Generator Hash - Buat hash digest menggunakan berbagai algoritma",
    tool2: "Encoder/Decoder Base64 - Konversi antara data mentah dan format Base64",
    tool3: "Alat Debug JWT - Alat online untuk mengurai, memverifikasi, dan men-debug token JWT",
    
    external: {
      title: "Sumber Daya Eksternal",
      resource1: "RFC 8017 - PKCS #1: Spesifikasi Kriptografi RSA Versi 2.2",
      resource2: "NIST FIPS 186-4 - Standar Tanda Tangan Digital (DSS)"
    }
  },
  
  conclusion: {
    title: "Kesimpulan",
    p1: "Verifikasi tanda tangan RSA tetap menjadi landasan keamanan kriptografi modern, menyediakan mekanisme yang kuat untuk memastikan integritas data dan keaslian. Alat verifikasi tanda tangan RSA kami membuat teknologi yang kuat ini dapat diakses oleh semua orang, dari pemula dalam kriptografi hingga profesional keamanan.",
    p2: "Baik Anda menandatangani kode, memverifikasi keaslian dokumen, atau mempelajari kriptografi kunci publik, alat ini menyediakan serangkaian fitur komprehensif untuk menangani tanda tangan RSA dalam lingkungan berbasis browser yang aman. Mulailah menggunakan alat verifikasi tanda tangan RSA sekarang, dan lindungi aset digital dan komunikasi Anda."
  }
}
