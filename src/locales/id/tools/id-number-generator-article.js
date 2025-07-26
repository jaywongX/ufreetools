export default {
  introduction: {
    title: "Generator Nomor KTP China: Fitur dan Cara Kerja",
    p1: "Generator Nomor KTP adalah alat yang dirancang khusus untuk menghasilkan nomor KTP China yang valid secara format, digunakan untuk keperluan pengujian dan pengembangan. Nomor yang dihasilkan mengikuti format resmi dan aturan validasi yang ditetapkan pemerintah China, sehingga secara struktur valid tetapi sepenuhnya fiktif.",
    p2: "Alat ini sangat berharga bagi pengembang perangkat lunak, tester QA, dan desainer UI/UX yang perlu menggunakan nomor KTP China dalam aplikasi mereka tanpa menggunakan data pribadi asli. Nomor yang dihasilkan mencakup informasi tersemat seperti kode wilayah, tanggal lahir, dan jenis kelamin, semuanya sesuai dengan format resmi.",
    p3: "Dengan menyediakan opsi kustomisasi untuk wilayah, rentang tanggal lahir, jenis kelamin, dan jumlah, generator nomor KTP kami menawarkan fleksibilitas sambil tetap mematuhi format yang diperlukan dan algoritma validasi.",
    structureTitle: "Memahami Struktur Nomor KTP",
    structureDesc: "Setiap nomor KTP China terdiri dari 18 digit dengan pola tertentu:"
  },
  useCases: {
    title: "Kasus Penggunaan Praktis Generator Nomor KTP",
    case1: {
      title: "Pengujian dan Pengembangan Perangkat Lunak",
      description: "Bagi pengembang sistem yang perlu memvalidasi nomor KTP China, alat ini dapat menghasilkan data uji yang lolos pemeriksaan validasi tanpa menggunakan informasi pribadi asli. Berguna untuk pengujian validasi formulir, pengisian database, dan pengujian API."
    },
    case2: {
      title: "Desain UI/UX dan Pembuatan Prototipe",
      description: "Desainer yang membuat mockup dan prototipe aplikasi yang perlu menangani identifikasi pengguna China dapat menggunakan nomor KTP yang dihasilkan ini, memastikan representasi data yang realistis tanpa masalah privasi."
    },
    case3: {
      title: "Tujuan Pendidikan",
      description: "Siswa dan pendidik yang mempelajari struktur data, algoritma validasi, atau sistem administrasi China dapat menggunakan alat ini untuk memahami bagaimana nomor KTP mengkodekan informasi dan cara kerja mekanisme validasi."
    },
    case4: {
      title: "Kepatuhan Privasi Data",
      description: "Organisasi dapat menghindari penggunaan nomor KTP asli di lingkungan non-produksi, membantu mematuhi peraturan perlindungan data sambil menyediakan data uji yang realistis untuk sistem mereka."
    }
  },
  guide: {
    title: "Cara Menggunakan Generator Nomor KTP",
    step1: {
      title: "Pilih Pengaturan Wilayah",
      description: "Pilih antara wilayah acak atau provinsi dan kota tertentu"
    },
    step2: {
      title: "Atur Rentang Tanggal Lahir",
      description: "Tentukan rentang tanggal lahir yang ingin Anda sertakan dalam nomor KTP yang dihasilkan. Ini memungkinkan Anda membuat nomor KTP untuk kelompok usia tertentu atau periode waktu, dari tanggal historis hingga yang lebih baru."
    },
    step3: {
      title: "Pilih Opsi Jenis Kelamin",
      description: "Pilih apakah ingin menghasilkan nomor KTP dengan jenis kelamin acak, atau khusus untuk laki-laki atau perempuan. Dalam nomor KTP China, jenis kelamin dikodekan dalam nomor urut (angka ganjil untuk laki-laki, genap untuk perempuan)."
    },
    step4: {
      title: "Hasilkan dan Ekspor",
      description: "Tentukan jumlah nomor KTP yang Anda butuhkan, lalu klik tombol generate. Setelah dihasilkan, Anda dapat menyalin nomor individu, menyalin semua sekaligus, atau mengekspor hasil dalam format TXT, CSV, atau Excel untuk penggunaan lebih lanjut."
    },
    tip: "Untuk hasil terbaik, pertimbangkan persyaratan spesifik skenario pengujian Anda. Jika menguji sistem dengan batasan usia, sesuaikan rentang tanggal lahir. Untuk pengujian regional, pilih provinsi tertentu yang relevan dengan aplikasi Anda.",
    additionalTip: "Untuk memverifikasi keakuratan nomor KTP yang dihasilkan, Anda dapat menggunakan",
    hashCalculatorLink: "alat penghitung hash kami"
  },
  faq: {
    title: "Pertanyaan Umum tentang Nomor KTP China",
    q1: "Apakah nomor KTP China yang dihasilkan sah secara hukum?",
    a1: "Tidak, nomor yang dihasilkan valid secara struktur (memenuhi format dan pemeriksaan checksum), tetapi sepenuhnya fiktif. Hanya untuk tujuan pengujian, pendidikan, dan demonstrasi. Menggunakan nomor ini untuk identifikasi resmi atau representasi identitas palsu adalah ilegal.",
    q2: "Bagaimana jenis kelamin dikodekan dalam nomor KTP China?",
    a2: "Informasi jenis kelamin dikodekan dalam digit ke-17 dari 18 digit nomor KTP. Jika digit ini ganjil (1,3,5,7,9), maka pemiliknya laki-laki. Jika genap (2,4,6,8,0), maka perempuan.",
    q3: "Bisakah saya menghasilkan nomor KTP untuk wilayah tertentu di China?",
    a3: "Ya, alat kami mendukung pemilihan provinsi dan kota tertentu di China. Anda bisa memilih satu wilayah atau mengaktifkan fitur multi-pilihan untuk menghasilkan nomor dari beberapa wilayah sekaligus. Kami mencakup semua kota tingkat prefektur dan divisi administratif tingkat provinsi.",
    q4: "Apa arti digit terakhir nomor KTP China?",
    a4: "Digit terakhir (ke-18) adalah digit pemeriksaan yang dihitung berdasarkan algoritma tertentu dari 17 digit pertama. Checksum ini membantu memverifikasi validitas KTP, bisa berupa angka 0-9 atau X (mewakili 10).",
    q5: "Seberapa sering format nomor KTP China diperbarui?",
    a5: "Format 18 digit telah menjadi standar sejak Oktober 1999. Meskipun formatnya jarang berubah, kode wilayah administratif mungkin diperbarui seiring reorganisasi divisi administratif China. Generator kami menggunakan kode wilayah terbaru.",
    officialSource: "Kementerian Keamanan Publik China (situs resmi)"
  },
  resources: {
    title: "Alat dan Referensi Terkait",
    passwordGenerator: "Generator Password - Buat password acak yang aman dengan opsi kustomisasi",
    wordShuffler: "Pengacak Kata - Acak urutan kata, kalimat, atau baris dalam teks sambil mempertahankan format",
    hashCalculator: "Kalkulator Hash - Verifikasi integritas data menggunakan berbagai algoritma hash",
    wikipediaLink: "Wikipedia: Kartu Identitas Penduduk China - Detail lengkap tentang sistem KTP China"
  },
  conclusion: {
    title: "Kesimpulan",
    p1: "Generator Nomor KTP merupakan sumber daya berharga bagi pengembang, tester, dan desainer yang perlu menangani identifikasi penduduk China. Dengan menghasilkan nomor yang valid secara format tetapi tidak terkait dengan individu nyata, alat ini membantu menyeimbangkan kebutuhan data uji yang realistis dengan pertimbangan privasi dan etika.",
    p2: "Baik untuk mengembangkan aplikasi baru, menguji sistem yang ada, atau membuat materi edukasi, alat ini menyediakan fleksibilitas dan akurasi yang dibutuhkan untuk bekerja dengan format nomor KTP China sambil menghormati prinsip privasi data.",
    disclaimer: "Penafian: Alat ini hanya untuk tujuan pengujian, pendidikan, dan pengembangan yang sah. Nomor yang dihasilkan tidak boleh digunakan untuk penipuan identitas, representasi palsu, atau aktivitas ilegal lainnya."
  }
}
