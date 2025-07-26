export default {
  name: 'Kalkulator HMAC',
  description: 'Menghitung HMAC (Hash-based Message Authentication Code) untuk data',
  title: 'Alat Perhitungan Kode Autentikasi Pesan HMAC',
  intro: 'Hasilkan kode autentikasi pesan menggunakan kunci rahasia, mendukung berbagai algoritma hash dan format output',

  input: {
    title: 'Input',
    message: 'Pesan',
    messagePlaceholder: 'Masukkan pesan yang akan diautentikasi',
    key: 'Kunci',
    keyLabel: 'Kunci (Secret Key)',
    keyPlaceholder: 'Masukkan kunci HMAC',
    messageLabel: 'Pesan (Message)',
    messageLongPlaceholder: 'Masukkan pesan untuk menghitung HMAC',
    file: 'File',
    text: 'Teks',
    fileSelect: 'Pilih File',
    fileDrop: 'Atau seret dan lepas file di sini',
    fileSelected: 'File terpilih: {name}',
    clearFile: 'Hapus File',
    encoding: 'Encoding Input',
    keyEncoding: 'Encoding Kunci',
    outputFormat: 'Format Output',
    inputType: 'Tipe Input',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    base64: 'Base64',
    hex: 'Heksadesimal',
    binary: 'Biner',
    calculate: 'Hitung HMAC',
    calculating: 'Menghitung...',
    clear: 'Hapus Semua'
  },

  algorithms: {
    title: 'Algoritma',
    label: 'Algoritma Hash',
    hmacMd5: 'HMAC-MD5',
    hmacSha1: 'HMAC-SHA1',
    hmacSha224: 'HMAC-SHA224',
    hmacSha256: 'HMAC-SHA256',
    hmacSha384: 'HMAC-SHA384',
    hmacSha512: 'HMAC-SHA512',
    hmacRipemd160: 'HMAC-RIPEMD160',
    hmacSm3: 'HMAC-SM3'
  },

  result: {
    title: 'Hasil HMAC',
    digest: 'Digest HMAC',
    outputLabel: 'Hasil HMAC',
    copy: 'Salin',
    copied: 'Tersalin!',
    noResult: 'Masukkan pesan dan kunci untuk menghitung HMAC',
    calculating: 'Menghitung...',
    placeholder: 'Hasil HMAC akan ditampilkan di sini',
    useExample: 'Gunakan Contoh',
    jsExample: 'Contoh JavaScript:',
  },

  validation: {
    title: 'Validasi HMAC',
    hmacToVerify: 'HMAC yang akan divalidasi',
    verifyPlaceholder: 'Masukkan HMAC untuk divalidasi',
    verify: 'Validasi HMAC',
    valid: 'HMAC Valid',
    invalid: 'HMAC Tidak Valid',
    verifying: 'Memvalidasi...'
  },

  options: {
    title: 'Opsi',
    uppercase: 'Output Huruf Besar',
    showDetails: 'Tampilkan Detail Teknis',
    autoUpdate: 'Update Otomatis',
    truncate: 'Potong Output',
    truncateLength: 'Panjang Pemotongan'
  },

  details: {
    title: 'Detail Teknis',
    algorithm: 'Algoritma',
    keyLength: 'Panjang Kunci',
    blockSize: 'Ukuran Blok',
    outputLength: 'Panjang Output',
    execution: 'Waktu Eksekusi',
    ms: 'milidetik'
  },

  messages: {
    noMessage: 'Masukkan pesan',
    noKey: 'Masukkan kunci',
    invalidEncoding: 'Format encoding tidak valid',
    processingError: 'Error pemrosesan: {error}',
    success: 'Perhitungan HMAC berhasil',
    invalidKey: 'Format kunci tidak valid untuk encoding yang dipilih',
    fileTooBig: 'File terlalu besar. Ukuran maksimum 5MB',
    copied: 'Tersalin ke clipboard',
    copyFailed: 'Gagal menyalin, silakan salin manual',
    invalidHex: 'Kunci bukan format heksadesimal yang valid',
    invalidBase64: 'Kunci bukan format Base64 yang valid',
  },

  security: {
    title: 'Catatan Keamanan',
    keyStorage: 'Jangan pernah membagikan kunci Anda',
    keyStrength: 'Gunakan kunci yang kuat dan unik untuk setiap aplikasi',
    recommendation: 'Untuk aplikasi kritis keamanan, gunakan minimal HMAC-SHA256',
    warning: 'HMAC-MD5 dan HMAC-SHA1 mungkin tidak cocok untuk aplikasi keamanan tinggi'
  }
};