export default {
  name: 'Pemeriksa Kekuatan Kata Sandi',
  description: 'Periksa dan analisis kekuatan kata sandi dengan indikator keamanan rinci',
  input: {
    title: 'Masukkan kata sandi untuk diperiksa',
    placeholder: 'Masukkan kata sandi di sini...',
    showPassword: 'Tampilkan kata sandi',
    hidePassword: 'Sembunyikan kata sandi',
    clear: 'Hapus',
    generate: 'Buat Kata Sandi',
    check: 'Periksa Kekuatan',
    empty: 'Masukkan kata sandi untuk melihat hasil evaluasi',
    disclaimer: 'Masukkan kata sandi apa pun untuk evaluasi keamanan. Kata sandi Anda tidak akan disimpan atau dikirim ke server mana pun.'
  },
  results: {
    title: 'Evaluasi Kekuatan Kata Sandi',
    strength: 'Kekuatan',
    score: 'Skor',
    entropy: 'Entropi',
    crackTime: 'Perkiraan Waktu Peretasan',
    very_weak: 'Sangat Lemah',
    weak: 'Lemah',
    fair: 'Sedang',
    good: 'Baik',
    strong: 'Kuat',
    very_strong: 'Sangat Kuat',
    feedback: 'Umpan Balik',
    suggestions: 'Saran Perbaikan',
    warnings: 'Masalah Terdeteksi',
    noWarnings: 'Tidak Ada Peringatan',
    noSuggestions: 'Tidak Ada Saran'
  },
  details: {
    title: 'Analisis Rinci',
    length: 'Panjang Kata Sandi',
    charset: 'Keragaman Karakter',
    patterns: 'Pola yang Digunakan',
    uniqueChars: 'Karakter Unik',
    uppercase: 'Huruf Besar',
    lowercase: 'Huruf Kecil',
    numbers: 'Angka',
    symbols: 'Simbol Khusus',
    repetitions: 'Pengulangan',
    sequences: 'Urutan',
    dictionary: 'Kata Kamus',
    leaked: 'Telah Bocor',
    reused: 'Pola yang Digunakan Ulang'
  },
  patterns: {
    dictionary: 'Kata Kamus',
    sequence: 'Karakter Berurutan',
    repeat: 'Karakter Berulang',
    spatial: 'Pola Spasial (Keyboard)',
    date: 'Pola Tanggal',
    year: 'Pola Tahun',
    common: 'Kata Sandi Umum',
    name: 'Pola Nama',
    reversal: 'Kata Terbalik',
    leet: 'Substitusi Bahasa Hacker',
    predictable: 'Pola yang Dapat Diprediksi'
  },
  crackTimes: {
    instantly: 'Seketika',
    seconds: 'Dalam Beberapa Detik',
    minutes: 'Dalam Beberapa Menit',
    hours: 'Dalam Beberapa Jam',
    days: 'Dalam Beberapa Hari',
    months: 'Dalam Beberapa Bulan',
    years: 'Dalam Beberapa Tahun',
    centuries: 'Dalam Beberapa Abad',
    forever: 'Secara Virtual Selamanya'
  },
  suggestions: {
    addWords: 'Tambahkan lebih banyak kata atau karakter',
    addSymbols: 'Sertakan simbol',
    addNumbers: 'Sertakan angka',
    upperLower: 'Campur huruf besar dan kecil',
    avoidPatterns: 'Hindari karakter berurutan atau berulang pada keyboard',
    avoidCommon: 'Hindari kata sandi berbasis kamus atau umum, bahkan dengan mengganti huruf dengan angka (misal "e" jadi "3")',
    avoidPersonal: 'Hindari informasi pribadi',
    avoidDictionary: 'Hindari kata kamus',
    usePassphrase: 'Pertimbangkan menggunakan gabungan kata, kombinasi kata tidak terkait, atau akronim untuk membuat kata sandi yang lebih mudah diingat',
    increaseLonger: 'Perpanjang kata sandi',
    avoidSequence: 'Hindari pola berurutan',
    avoidRepeated: 'Hindari karakter berulang',
    avoidDates: 'Hindari tanggal dan tahun',
    addMoreChars: 'Perpanjang kata sandi minimal 12 karakter - setiap karakter tambahan meningkatkan kesulitan peretasan secara eksponensial',
    addTypes: 'Tambahkan {types} untuk meningkatkan kompleksitas',
    useManager: 'Gunakan pengelola kata sandi untuk membuat dan mengelola kata sandi kuat yang berbeda untuk setiap situs'
  },
  generator: {
    title: 'Pembuat Kata Sandi',
    length: 'Panjang',
    options: 'Opsi',
    uppercase: 'Sertakan huruf besar',
    lowercase: 'Sertakan huruf kecil',
    numbers: 'Sertakan angka',
    symbols: 'Sertakan simbol',
    excludeSimilar: 'Kecualikan karakter serupa',
    excludeAmbiguous: 'Kecualikan karakter ambigu',
    generate: 'Buat Kata Sandi',
    passphrase: 'Buat Frasa Sandi',
    wordCount: 'Jumlah Kata',
    separator: 'Pemisah Kata',
    capitalize: 'Kapitalisasi Huruf Pertama',
    includeNumber: 'Sertakan angka',
    includeSymbol: 'Sertakan simbol'
  },
  common: {
    copy: 'Salin ke Clipboard',
    save: 'Simpan ke Riwayat',
    clear: 'Hapus',
    refresh: 'Segarkan',
    copied: 'Tersalin ke Clipboard',
    saved: 'Tersimpan di Riwayat',
    history: 'Riwayat',
    noHistory: 'Tidak Ada Riwayat',
    common: 'Umum'
  },
  breach: {
    title: 'Pemeriksaan Kebocoran Data',
    description: 'Periksa apakah kata sandi Anda muncul dalam kebocoran data yang diketahui',
    disclaimer: 'Kata sandi Anda tidak akan pernah dikirim melalui jaringan. Hanya hash parsial yang diperiksa.',
    checkButton: 'Periksa Kebocoran',
    safe: 'Tidak ditemukan dalam kebocoran yang diketahui',
    found: 'Ditemukan dalam {count} kebocoran data!',
    warning: 'Kata sandi ini telah terpapar dalam kebocoran data dan tidak boleh digunakan lagi.',
    checking: 'Memeriksa kebocoran...'
  },
  settings: {
    title: 'Pengaturan',
    algorithm: 'Algoritma Kekuatan',
    history: 'Simpan Riwayat',
    clearHistory: 'Hapus Riwayat',
    breachCheck: 'Periksa Kebocoran',
    timeout: 'Hapus Setelah Timeout',
    timeoutDuration: 'Durasi Timeout (detik)',
    clipboard: 'Hapus Clipboard Setelah Menyalin',
    language: 'Bahasa'
  },
  score: {
    none: 'Tidak Ada Skor'
  },
  descriptions: {
    none: 'Tidak dapat mengevaluasi kekuatan kata sandi',
    veryWeak: 'Kata sandi ini sangat mudah ditebak atau diretas, sangat tidak aman',
    weak: 'Kata sandi ini memiliki keamanan rendah dan mungkin mudah diretas',
    fair: 'Kata sandi ini memiliki keamanan cukup tetapi masih bisa ditingkatkan',
    good: 'Ini adalah kata sandi yang cukup aman dan sulit diretas',
    veryStrong: 'Ini adalah kata sandi yang sangat aman dan hampir tidak mungkin diretas'
  },
  length: {
    none: 'Tidak Ada',
    tooShort: 'Terlalu Pendek',
    acceptable: 'Dapat Diterima',
    good: 'Baik',
    excellent: 'Luar Biasa'
  },
  lengthMessage: {
    none: 'Belum memasukkan kata sandi',
    needMore: 'Diperlukan minimal {min} karakter',
    better: '{min} karakter atau lebih akan lebih aman',
    good: 'Bagus! Kata sandi panjang lebih sulit diretas',
    excellent: 'Panjang yang luar biasa!'
  },
  complexity: {
    none: 'Tidak Ada',
    veryLow: 'Sangat Rendah',
    fair: 'Sedang',
    good: 'Baik',
    excellent: 'Luar Biasa'
  },
  issues: {
    tooShort: 'Kata sandi terlalu pendek (kurang dari 8 karakter)',
    noUppercase: 'Tidak mengandung huruf besar',
    noLowercase: 'Tidak mengandung huruf kecil',
    noNumbers: 'Tidak mengandung angka',
    noSymbols: 'Tidak mengandung simbol khusus',
    hasSequence: 'Mengandung urutan keyboard umum (seperti "qwerty" atau "123456")',
    hasRepeated: 'Mengandung karakter berulang (seperti "aaa" atau "111")',
    commonPassword: 'Menggunakan kata sandi umum atau mudah ditebak'
  },
  characters: 'karakter',
  tips: {
    title: 'Tips Keamanan Kata Sandi',
    length: 'Gunakan kata sandi minimal 12 karakter',
    mix: 'Campurkan huruf besar, huruf kecil, angka, dan simbol khusus',
    avoid: 'Hindari kata umum, frasa, atau informasi pribadi',
    unique: 'Jangan gunakan kata sandi yang sama di banyak situs',
    manager: 'Pertimbangkan menggunakan pengelola kata sandi untuk membuat dan menyimpan kata sandi kompleks'
  },
  article: {
    title: "Pemeriksa Kekuatan Kata Sandi: Evaluasi dan Tingkatkan Keamanan Online Anda",
    features: {
      title: "Memahami Evaluasi Keamanan Kata Sandi",
      description: "<strong>Pemeriksa kekuatan kata sandi</strong> ini adalah <strong>alat evaluasi keamanan</strong> komprehensif yang dirancang untuk menganalisis dan menilai efektivitas kata sandi Anda terhadap potensi ancaman. <strong>Analis kata sandi</strong> ini memeriksa berbagai faktor yang menentukan keamanan kata sandi, termasuk panjang, keragaman karakter, pola potensial, dan kesamaan dengan kata sandi umum.<br><br>Alat <strong>penguji keamanan kata sandi</strong> kami memberikan umpan balik rinci tentang kekuatan dan kelemahan kata sandi Anda, dengan analisis lengkap tentang apa yang membuatnya aman atau rentan. Alat ini menghasilkan skor keamanan dan peringkat berwarna, serta memberikan saran perbaikan spesifik berdasarkan karakteristik kata sandi Anda. Sebagai <strong>pendeteksi kerentanan kata sandi</strong>, alat ini membantu mengidentifikasi masalah keamanan potensial sambil memastikan privasi penuh selama proses evaluasi dengan tidak pernah menyimpan atau mengirimkan kata sandi Anda.",
      useCases: {
        title: "Skenario Praktis Pengujian Keamanan Kata Sandi",
        items: [
          "<strong>Pembuatan Akun</strong>: Saat membuat akun online baru, gunakan <strong>pemeriksa keamanan kata sandi</strong> untuk memastikan kredensial yang Anda buat memenuhi standar keamanan modern sebelum menyelesaikan pendaftaran",
          "<strong>Audit Keamanan</strong>: Secara berkala tinjau dan uji kata sandi yang ada di berbagai akun Anda, identifikasi dan prioritaskan kata sandi mana yang perlu diperkuat sebagai bagian dari <strong>evaluasi keamanan siber</strong> pribadi Anda",
          "<strong>Penyusunan Kebijakan Kata Sandi</strong>: Organisasi dapat menggunakan alat ini untuk menunjukkan panduan kata sandi yang efektif kepada karyawan dan menguji kepatuhan terhadap standar keamanan sebagai bagian dari <strong>protokol keamanan informasi</strong> mereka",
          "<strong>Demonstrasi Edukasi</strong>: Guru, orang tua, dan profesional keamanan dapat menggunakan umpan balik visual untuk menunjukkan perbedaan spesifik antara kata sandi lemah dan kuat kepada orang lain, untuk <strong>pelatihan kesadaran keamanan</strong>",
          "<strong>Verifikasi Pasca Kebocoran Data</strong>: Setelah berita tentang kebocoran data muncul, segera verifikasi apakah kata sandi saat ini memenuhi praktik terbaik keamanan atau perlu diperbarui segera, sebagai <strong>tindakan keamanan preventif</strong>",
          "<strong>Transisi ke Pengelola Kata Sandi</strong>: Saat beralih ke pengelola kata sandi, evaluasi kata sandi yang ada untuk menentukan mana yang harus dibuat ulang dengan pengganti yang lebih kuat selama proses <strong>peningkatan keamanan digital</strong>"
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Keamanan Kata Sandi",
      items: [
        {
          question: "Apakah kata sandi saya aman saat menggunakan alat ini?",
          answer: "Ya, kata sandi Anda sepenuhnya aman saat menggunakan analis keamanan kata sandi kami. Alat ini memproses kata sandi Anda sepenuhnya di dalam browser - kata sandi Anda tidak pernah dikirim melalui internet atau disimpan di server mana pun. Pemrosesan sisi klien ini berarti kata sandi Anda tidak pernah meninggalkan perangkat Anda selama pemeriksaan kekuatan. Alat ini menggunakan algoritma JavaScript lokal untuk mengevaluasi kompleksitas, mengidentifikasi pola, dan menghitung skor tanpa memerlukan pemrosesan eksternal. Metode pemeriksaan kata sandi tanpa transmisi ini memberikan keamanan maksimal sambil tetap memberikan evaluasi kekuatan kata sandi yang komprehensif. Anda dapat memverifikasi perilaku ini dengan menggunakan alat saat tidak terhubung ke internet, karena alat akan tetap berfungsi normal."
        },
        {
          question: "Apa yang membuat kata sandi benar-benar kuat?",
          answer: "Kata sandi yang benar-benar kuat menggabungkan beberapa faktor keamanan yang dievaluasi oleh penguji keamanan kata sandi kami. Elemen terpenting meliputi: panjang yang cukup (minimal 12-14 karakter), kompleksitas melalui keragaman karakter (huruf besar, huruf kecil, angka, dan simbol khusus), ketidakpastian (menghindari kata umum, frasa, atau pola), keunikan (tidak digunakan ulang di banyak situs), dan ketahanan terhadap serangan otomatis. Kata sandi terkuat menghindari informasi pribadi, kata kamus, dan substitusi yang dapat diprediksi (seperti mengganti 'e' dengan '3'). Alat evaluasi kata sandi kami merekomendasikan penggunaan kata sandi yang dihasilkan secara acak atau frasa sandi yang menggabungkan beberapa kata tidak terkait dengan angka dan simbol. Ingatlah bahwa panjang biasanya berkontribusi lebih besar pada kekuatan kata sandi daripada kompleksitas saja."
        },
        {
          question: "Mengapa alat menandai kata sandi saya yang tampaknya kompleks sebagai lemah?",
          answer: "Pendeteksi kerentanan kata sandi mungkin menandai kata sandi yang tampaknya kompleks sebagai lemah karena beberapa faktor halus yang memengaruhi keamanan. Masalah umum meliputi: mengandalkan pola yang dapat diprediksi (seperti urutan keyboard 'qwerty' atau karakter berulang), menggunakan variasi kata sandi yang diketahui dalam database kebocoran data, memasukkan informasi pribadi yang mudah ditebak, atau mengikuti pola substitusi umum yang secara khusus ditargetkan oleh alat peretas kata sandi (seperti 'pssw0rd'). Analisis kata sandi modern melampaui jenis karakter sederhana, mengevaluasi kerentanan dunia nyata. Pengujian keamanan kata sandi tingkat lanjut mempertimbangkan faktor-faktor seperti entropi (keacakan), serangan berbasis kamus, dan pengenalan pola. Bahkan kata sandi dengan simbol khusus mungkin rentan jika mengikuti pola yang dapat diprediksi."
        },
        {
          question: "Seberapa sering saya harus memeriksa dan memperbarui kata sandi saya?",
          answer: "Anda harus memeriksa kata sandi kunci Anda dengan evaluator kekuatan kata sandi setidaknya setiap 3-6 bulan dan memperbaruinya sesuai kebutuhan. Selain itu, verifikasi dan perubahan kata sandi segera disarankan dalam situasi tertentu: setelah berita tentang kebocoran data yang memengaruhi layanan yang Anda gunakan, ketika perlu berbagi kata sandi (setelah itu kata sandi baru diperlukan), jika Anda telah login di perangkat publik atau yang mungkin telah disusupi, ketika Anda mencurigai akses tidak sah ke akun apa pun, atau ketika terjadi perubahan hidup yang signifikan (pekerjaan baru, pindah rumah). Menerapkan jadwal evaluasi keamanan untuk kategori kata sandi yang berbeda (keuangan, email, media sosial) membantu memprioritaskan akun Anda yang paling sensitif. Ingatlah bahwa bahkan kata sandi terkuat pun tidak berguna jika telah terpapar dalam kebocoran data."
        },
        {
          question: "Mana yang lebih baik: kata sandi pendek yang kompleks atau kata sandi panjang yang sederhana?",
          answer: "Seperti yang akan ditunjukkan oleh pemeriksa keamanan kata sandi kami, kata sandi panjang yang sederhana biasanya lebih aman daripada kata sandi pendek yang kompleks. Manfaat keamanan yang diberikan oleh panjang meningkat secara eksponensial dan lebih efektif daripada kompleksitas saja. Misalnya, kata sandi 16 karakter yang hanya menggunakan huruf kecil (seperti 'empatkatahurufkecil') secara matematis lebih sulit diretas dengan metode brute force daripada kata sandi 8 karakter dengan campuran jenis karakter (seperti 'Ps$w0rd'). Ini karena setiap karakter tambahan secara eksponensial meningkatkan total kemungkinan kombinasi yang harus dicoba peretas. Namun, analisis kata sandi lengkap menunjukkan bahwa pendekatan ideal menggabungkan panjang yang signifikan (16 karakter atau lebih) dengan kompleksitas moderat (berbagai jenis karakter). Untuk keamanan maksimal, alat evaluasi kata sandi merekomendasikan penggunaan frasa sandi acak yang menggabungkan beberapa kata tidak terkait dengan beberapa angka atau simbol."
        }
      ]
    },
    guide: {
      title: "Panduan Langkah demi Langkah untuk Menggunakan Pemeriksa Kekuatan Kata Sandi",
      steps: [
        "Masukkan kata sandi yang ada atau yang diusulkan di bidang input <strong>kata sandi</strong> yang aman. Desain alat yang berfokus pada privasi ini memastikan kata sandi Anda tidak pernah dikirim atau disimpan selama analisis keamanan",
        "Tinjau <strong>skor kekuatan</strong> keseluruhan yang ditampilkan pada pengukur berwarna, yang memberikan indikasi visual tentang tingkat keamanan kata sandi Anda dari sangat lemah (merah) hingga sangat kuat (hijau)",
        "Periksa bagian <strong>analisis rinci</strong> untuk memahami aspek spesifik dari kekuatan kata sandi yang memengaruhi peringkat keamanan keseluruhan Anda, termasuk evaluasi panjang dan indikator keragaman karakter",
        "Perhatikan bagian peringatan yang menyoroti <strong>masalah yang terdeteksi</strong>, yang mengidentifikasi kerentanan spesifik seperti pola umum, karakter berulang, atau komponen berbasis kamus",
        "Baca <strong>saran perbaikan</strong> yang disesuaikan dengan kelemahan kata sandi Anda, memberikan rekomendasi spesifik dan dapat ditindaklanjuti tentang cara memperkuat kata sandi Anda terhadap berbagai metode serangan",
        "Terapkan perubahan yang disarankan untuk membuat kata sandi yang lebih kuat, lalu <strong>uji ulang</strong> untuk memverifikasi peningkatan, dan terus menyempurnakan hingga mencapai peringkat keamanan yang memuaskan"
      ]
    },
    conclusion: "Pemeriksa kekuatan kata sandi adalah alat keamanan yang penting dalam lingkungan digital saat ini di mana kebocoran data dan serangan kata sandi terus meningkat. Dengan memberikan analisis rinci tentang kerentanan kata sandi dan saran perbaikan spesifik, alat ini memberdayakan pengguna untuk mengambil kendali atas keamanan online mereka. Ingatlah bahwa kata sandi yang kuat mewakili garis pertahanan pertama Anda terhadap akses tidak sah - kata sandi harus unik untuk setiap akun penting, cukup kompleks, dan diperbarui secara teratur. Untuk keamanan maksimal, pertimbangkan untuk menggunakan alat ini bersama dengan pengelola kata sandi terkemuka yang dapat menghasilkan dan menyimpan kata sandi yang sangat aman dan unik untuk semua akun Anda. Meluangkan waktu sekarang untuk mengevaluasi dan memperkuat kata sandi Anda dapat menghemat banyak masalah di masa depan akibat pembajakan akun."
  }
}