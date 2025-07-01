export default {
  name: 'Pengacak Teks',
  description: 'Acak kata, kalimat, atau baris dalam teks secara acak sambil mempertahankan format',
  
  inputLabel: 'Masukkan Teks',
  inputPlaceholder: 'Masukkan atau tempel teks di sini untuk diacak...',
  outputLabel: 'Hasil Pengacakan',
  
  shuffleMode: 'Mode Pengacakan',
  modes: {
    word: 'Kata',
    sentence: 'Kalimat',
    line: 'Baris'
  },
  
  preserveOptions: 'Opsi Penyimpanan',
  preserveCapitalization: 'Pertahankan Kapitalisasi',
  preservePunctuation: 'Pertahankan Tanda Baca',
  
  shuffleButton: 'Acak',
  copyButton: 'Salin Hasil',
  clearButton: 'Hapus Semua',
  copiedMessage: 'Tersalin ke clipboard!',
  
  article: {
    title: "Pengacak Teks: Membuat Teks Acak dengan Struktur Terjaga",
    features: {
      title: "Memahami Pengacakan Teks dan Randomisasi",
      description: "<strong>Pengacak Teks</strong> adalah <strong>alat pengolah teks</strong> serbaguna yang memungkinkan Anda mengatur ulang kata, kalimat, atau baris dalam teks secara acak sambil mempertahankan elemen format penting. <strong>Alat pengacak teks</strong> ini menyediakan berbagai mode pengacakan untuk memenuhi kebutuhan berbeda, baik untuk membuat konten acak untuk pengujian, menghasilkan prompt penulisan kreatif, atau membuat teks dengan urutan kata acak yang tetap mudah dibaca.<br><br><strong>Pengacak Kata</strong> kami memberikan kontrol halus melalui opsi untuk mempertahankan kapitalisasi dan tanda baca, memastikan teks acak Anda tetap memiliki format yang tepat. Baik Anda menggunakan paragraf sederhana atau dokumen kompleks, alat ini menyediakan cara efisien untuk menghasilkan teks acak yang mempertahankan elemen struktur kunci."
    },
    primaryFeatures: [
      {
        title: "Beragam Mode Pengacakan",
        description: "Pilih antara mengacak kata, kalimat, baris, karakter, atau seluruh paragraf untuk mencapai tingkat randomisasi yang Anda butuhkan."
      },
      {
        title: "Pemeliharaan Format",
        description: "Pertahankan kapitalisasi dan tanda baca bahkan setelah pengacakan, membuat teks terlihat alami dan diformat dengan benar."
      },
      {
        title: "Pemisah Kustom",
        description: "Tentukan pemisah kata dan kalimat Anda sendiri untuk mengontrol secara tepat bagaimana teks dibagi sebelum pengacakan."
      },
      {
        title: "Pengacakan Berkelompok",
        description: "Acak kata dalam kelompok, mempertahankan hubungan semantik tertentu sambil tetap merandomisasi konten."
      }
    ],
    howToUse: {
      title: "Cara Menggunakan Alat Pengacak Teks",
      steps: [
        "Masukkan atau tempel teks Anda di kotak input di sebelah kiri alat.",
        "Pilih mode pengacakan yang Anda inginkan (kata, kalimat, baris, karakter, atau paragraf).",
        "Konfigurasikan opsi lanjutan seperti pengaturan penyimpanan dan pemisah jika diperlukan.",
        "Klik tombol \"Acak\" untuk menghasilkan konten acak.",
        "Lihat hasilnya di kotak output dan gunakan tombol salin atau unduh untuk menyimpan teks Anda.",
        "Untuk menghasilkan beberapa variasi, sesuaikan pengaturan jumlah pengulangan dan acak lagi."
      ]
    },
    useCases: {
      title: "Aplikasi Praktis Pengacakan Teks",
      examples: [
        {
          title: "Latihan Menulis",
          description: "Hasilkan prompt menulis atau latihan dengan mengacak teks yang ada, menciptakan pengaturan baru dan inspirasi untuk kelas menulis kreatif, lokakarya puisi, atau proyek pribadi."
        },
        {
          title: "Pengujian Antarmuka",
          description: "Buat konten teks acak untuk menguji antarmuka pengguna, memastikan mereka dapat menangani konten yang bervariasi. Sangat berguna bagi pengembang web untuk memvalidasi tata letak responsif dan adaptasi konten."
        },
        {
          title: "Aktivitas Edukasi",
          description: "Kembangkan aktivitas pembelajaran bahasa di mana siswa harus mengurutkan kembali teks yang diacak ke urutan yang benar, meningkatkan pemahaman dan keterampilan tata bahasa melalui latihan interaktif."
        },
        {
          title: "Inspirasi Kreatif",
          description: "Temukan perspektif atau ide baru dengan mengacak konten yang ada dan mengidentifikasi kombinasi menarik yang baru, membantu penulis mengatasi kebuntuan dan menemukan pendekatan baru."
        },
        {
          title: "Anonimisasi Data",
          description: "Acak kata dalam teks sensitif untuk membuat konten yang realistis tetapi anonim untuk presentasi, pidato, atau lingkungan pengujian di mana data asli tidak dapat digunakan."
        },
        {
          title: "Latihan Presentasi",
          description: "Buat variasi konten presentasi, berlatih menyampaikan pidato dengan pengaturan kata yang berbeda untuk meningkatkan adaptabilitas dan mengurangi ketergantungan pada urutan yang dihafal."
        }
      ]
    },
    faqs: {
      title: "Pertanyaan Umum tentang Pengacak Teks",
      questions: [
        {
          question: "Apakah pengacakan akan memengaruhi format teks saya?",
          answer: "Dengan opsi penyimpanan diaktifkan, Pengacak Teks akan mempertahankan kapitalisasi dan tanda baca dalam teks Anda, memastikan hasil acak mempertahankan format yang tepat. Ini berarti huruf kapital di awal kalimat dan tanda baca di akhir akan tetap sama meskipun kata-katanya diatur ulang."
        },
        {
          question: "Bisakah saya hanya mengacak bagian tertentu dari teks saya?",
          answer: "Alat ini beroperasi pada seluruh teks input, tetapi Anda dapat mengolah bagian yang lebih kecil secara terpisah kemudian menggabungkannya dengan konten yang tidak diacak untuk mencapai pengacakan parsial. Untuk kontrol yang lebih halus, coba gunakan mode paragraf untuk hanya mengacak bagian tertentu."
        },
        {
          question: "Apakah pengacakan benar-benar acak?",
          answer: "Ya, alat ini menggunakan algoritma pengacakan standar (Fisher-Yates shuffle) untuk memastikan pengaturan ulang elemen teks yang benar-benar acak setiap kali pengacakan dilakukan. Setiap kali Anda mengklik tombol acak, Anda akan mendapatkan pengaturan teks yang berbeda."
        },
        {
          question: "Apa perbedaan antara berbagai mode pengacakan?",
          answer: "Mode kata mengacak kata individual sambil mempertahankan tanda baca (jika dipilih). Mode kalimat menjaga setiap kalimat tetap utuh tetapi mengacak urutannya. Mode baris mempertahankan setiap baris tetapi mengacak urutannya dalam dokumen. Mode karakter mengacak karakter individual untuk hasil yang benar-benar acak. Mode paragraf menjaga paragraf tetap utuh tetapi mengatur ulang urutannya."
        },
        {
          question: "Bisakah saya menyesuaikan karakter apa yang dianggap sebagai pemisah kata atau kalimat?",
          answer: "Ya, panel opsi lanjutan memungkinkan Anda menentukan pemisah kustom untuk kata dan kalimat. Ini memberi Anda kontrol yang tepat atas bagaimana teks dibagi sebelum pengacakan, sangat berguna untuk konten profesional atau bahasa dengan tanda baca unik."
        },
        {
          question: "Bagaimana cara menghapus kata yang berulang dari teks acak?",
          answer: "Aktifkan opsi \"Hapus Kata Berulang\" di panel pengaturan lanjutan. Ini memastikan setiap kata hanya muncul sekali dalam output, berguna untuk membuat glosarium atau menghilangkan redundansi dalam teks acak."
        },
        {
          question: "Apakah ada batasan jumlah teks yang bisa diacak?",
          answer: "Alat ini dapat menangani teks dalam jumlah besar, tetapi dokumen yang sangat besar (lebih dari 100.000 karakter) mungkin mengalami penurunan kinerja. Untuk teks yang sangat besar, pertimbangkan untuk membaginya menjadi bagian yang lebih kecil untuk diproses."
        }
      ]
    },
    advancedTips: {
      title: "Tips Lanjutan untuk Menguasai Pengacakan Teks",
      description: "Manfaatkan alat pengacak teks sepenuhnya dengan tips dan wawasan ahli ini, membantu Anda membuat jenis teks acak yang tepat untuk tujuan spesifik.",
      tips: [
        "Gunakan pengaturan \"Ukuran Grup Pengacakan\" untuk menjaga frasa kecil tetap bersama sambil tetap mengacak urutannya - sangat bagus untuk menjaga pasangan kata sifat-kata benda tetap utuh.",
        "Untuk menghasilkan tulisan surealis atau eksperimental, jalankan teks melalui alat ini dua kali dengan mode berbeda, gabungkan pengacakan karakter dan kata.",
        "Sesuaikan pemisah kata untuk menyertakan atau mengecualikan tanda baca tertentu, menciptakan pola pengaturan kata yang lebih beragam.",
        "Saat mengolah puisi atau syair, gunakan mode baris untuk mempertahankan baris individual sambil mengeksplorasi pengaturan bait yang berbeda.",
        "Untuk tujuan pengujian, gunakan fitur hitungan pengulangan untuk menghasilkan beberapa variasi sekaligus daripada mengklik acak beberapa kali.",
        "Pertahankan kapitalisasi tetapi hapus tanda baca untuk membuat teks gaya aliran kesadaran yang lancar sambil tetap mempertahankan kata benda khusus dan awal kalimat.",
        "Gunakan mode pengacakan karakter pada frasa untuk membuat kode atau sandi unik berdasarkan teks bermakna.",
        "Impor teks dari beberapa sumber, acak secara terpisah, lalu gabungkan hasilnya untuk mencapai perpaduan ide dan gaya yang menarik."
      ]
    }
  },
  tagline: 'Alat randomisasi teks paling canggih di dunia',
  wordCount: 'kata',
  importButton: 'Impor File',
  clearInputButton: 'Hapus Input',
  clearOutputButton: 'Hapus Output',
  downloadButton: 'Unduh',
  useExampleButton: 'Gunakan Contoh',
  advancedOptions: 'Opsi Lanjutan',
  delimiterOptions: 'Opsi Pemisah',
  wordDelimiters: 'Pemisah Kata',
  wordDelimitersHint: 'Karakter yang digunakan untuk memisahkan kata',
  sentenceDelimiters: 'Pemisah Kalimat',
  sentenceDelimitersHint: 'Karakter yang digunakan untuk mengakhiri kalimat',
  additionalOptions: 'Opsi Tambahan',
  repeatCount: 'Jumlah Pengulangan',
  repeatCountHint: 'Hasilkan beberapa versi acak',
  shuffleGroup: 'Ukuran Grup Pengacakan',
  shuffleGroupHint: 'Acak kata dalam grup dengan ukuran tertentu',
  removeRepeatedWords: 'Hapus Kata Berulang',
  preserveSpacing: 'Pertahankan Spasi',
  examplesTitle: 'Contoh',
  useThisExample: 'Gunakan Contoh Ini',
  helpTitle: 'Bantuan & Informasi',
  whatIsTitle: 'Apa itu Pengacak Teks?',
  whatIsDescription: 'Pengacak Teks adalah alat yang dapat merandomisasi urutan kata, kalimat, baris, karakter, atau paragraf dalam teks. Ini menggunakan algoritma kompleks untuk memastikan hasil yang benar-benar acak sambil mempertahankan opsi format yang Anda pilih, seperti kapitalisasi dan tanda baca.',
  howToUseTitle: 'Cara Menggunakan Alat Ini',
  tipsTitle: 'Tips Penggunaan Terbaik',
  modes: {
    word: 'Kata',
    sentence: 'Kalimat',
    line: 'Baris',
    character: 'Karakter',
    paragraph: 'Paragraf'
  },
  howToUseSteps: [
    'Masukkan atau tempel teks Anda di kotak input sebelah kiri.',
    'Pilih mode pengacakan dan opsi yang Anda butuhkan di bawah.',
    'Klik tombol "Acak" untuk menghasilkan teks acak.',
    'Hasil akan ditampilkan di kotak output sebelah kanan.',
    'Gunakan tombol salin atau unduh untuk menyimpan hasil Anda.'
  ],
  tips: [
    'Untuk latihan menulis kreatif, coba gunakan mode kata dengan mempertahankan kapitalisasi tetapi menghapus tanda baca.',
    'Untuk pengujian tata letak, gunakan mode kalimat dan aktifkan semua opsi penyimpanan untuk mempertahankan teks yang dapat dibaca tetapi acak.',
    'Gunakan mode karakter untuk membuat sandi atau kode yang aman berdasarkan input teks.',
    'Fitur pengacakan grup memungkinkan Anda menjaga kata-kata terkait tetap bersama sambil tetap merandomisasi teks secara keseluruhan.',
    'Butuh beberapa variasi? Atur jumlah pengulangan untuk menghasilkan beberapa versi acak sekaligus.'
  ],
  examples: {
    basic: {
      title: 'Pengacakan Kata Dasar',
      description: 'Randomisasi kata sederhana sambil mempertahankan tanda baca dan kapitalisasi',
      input: 'Rubah cokelat yang lincah melompati anjing yang malas. Kelima penyihir tinju melompat dengan cepat.',
      output: 'Cokelat rubah yang lincah anjing melompati yang malas. Penyihir melompat dengan cepat kelima tinju.'
    },
    sentence: {
      title: 'Pengacakan Kalimat',
      description: 'Mengacak urutan kalimat lengkap',
      input: 'Kalimat pertama ada di sini. Ini adalah kalimat kedua. Ini kalimat ketiga. Terakhir, kita punya kalimat keempat.',
      output: 'Ini kalimat ketiga. Kalimat pertama ada di sini. Terakhir, kita punya kalimat keempat. Ini adalah kalimat kedua.'
    },
    creative: {
      title: 'Penyusunan Kreatif',
      description: 'Hasilkan teks kreatif baru dengan mengacak kata tanpa batasan format',
      input: 'Puisi adalah penciptaan berirama dari keindahan kata-kata. Ini adalah pengungkapan perasaan yang menurut penyair bersifat internal dan pribadi, tetapi pembaca mengenalinya sebagai milik mereka sendiri.',
      output: 'Kata-kata berirama adalah keindahan penciptaan puisi. Penyair menurut pengungkapan adalah perasaan internal yang pribadi dan bersifat tetapi pembaca milik mereka sendiri mengenalinya sebagai.'
    }
  },
  stepLabel: 'Langkah',
  emptyInputMessage: 'Masukkan teks untuk diacak',
  errorMessage: 'Terjadi kesalahan saat mengacak, coba mode atau opsi pengacakan yang berbeda',
  downloadFileName: 'teks_teracak.txt',
  errorMessages: {
    shuffleError: 'Kesalahan pengacakan:',
    sentenceError: 'Kesalahan pengacakan kalimat:',
    copyError: 'Kesalahan menyalin teks:'
  }
}