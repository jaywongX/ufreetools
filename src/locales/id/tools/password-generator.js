export default {
  name: 'Pembuat Kata Sandi',
  description: 'Hasilkan kata sandi acak yang aman dengan opsi yang dapat disesuaikan',

  options: {
    length: 'Panjang kata sandi',
    quantity: 'Jumlah kata sandi',
    includeLowercase: 'Huruf kecil (a-z)',
    includeUppercase: 'Huruf besar (A-Z)',
    includeNumbers: 'Angka (0-9)',
    includeSymbols: 'Simbol (!@#$%)',
    excludeSimilar: 'Kecualikan karakter yang mirip (i, l, 1, L, o, 0, O)',
    excludeAmbiguous: 'Kecualikan simbol ambigu ({}<>[]()\'"`\\)',
    requireAll: 'Wajibkan semua jenis karakter',
    noConsecutive: 'Tidak ada karakter berurutan yang mirip',
    advancedOptions: 'Opsi Lanjutan',
    characterTypes: 'Jenis Karakter'
  },

  presets: {
    standard: 'Standar',
    strong: 'Kuat',
    memorable: 'Mudah Diingat',
    pin: 'PIN',
    pronounceable: 'Dapat Diucapkan',
    custom: 'Kustom',
    easyToRemember: 'Mudah Diingat',
    balanced: 'Seimbang',
    secure: 'Aman'
  },

  strength: {
    title: 'Kekuatan Kata Sandi',
    veryWeak: 'Sangat Lemah',
    weak: 'Lemah', 
    medium: 'Sedang',
    strong: 'Kuat',
    veryStrong: 'Sangat Kuat',
    unknown: 'Tidak Diketahui'
  },

  actions: {
    generate: 'Buat Kata Sandi',
    regenerate: 'Buat Ulang',
    copy: 'Salin',
    copyAll: 'Salin Semua',
    clear: 'Hapus',
    expand: 'Perluas',
    collapse: 'Ciutkan'
  },

  messages: {
    copied: 'Tersalin ke clipboard!',
    allCopied: 'Semua kata sandi telah disalin ke clipboard!',
    generated: 'Kata sandi berhasil dibuat',
    invalidOptions: 'Harap pilih setidaknya satu jenis karakter',
    tooManyPasswords: 'Jumlah maksimal kata sandi adalah 100',
    clickToGenerate: 'Klik tombol di atas untuk membuat kata sandi'
  },

  errors: {
    copyFailed: 'Gagal menyalin kata sandi: ',
    copyFailedManual: 'Gagal menyalin, harap salin secara manual'
  },

  results: {
    title: 'Kata Sandi yang Dihasilkan'
  },

  units: {
    passwords: 'kata sandi'
  },

  tips: {
    title: 'Tips Keamanan Kata Sandi',
    useLength: 'Gunakan kata sandi yang cukup panjang (minimal 12 karakter) untuk meningkatkan keamanan',
    useDifferent: 'Gunakan kata sandi yang berbeda untuk setiap situs atau layanan',
    changeRegularly: 'Ganti kata sandi secara berkala untuk akun penting',
    useManager: 'Pertimbangkan untuk menggunakan pengelola kata sandi untuk menyimpan kata sandi kompleks dengan aman',
    use2FA: 'Aktifkan autentikasi dua faktor untuk lapisan perlindungan tambahan'
  }
};