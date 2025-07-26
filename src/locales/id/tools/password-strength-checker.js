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
  }
};