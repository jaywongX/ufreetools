export default {
  name: 'Algoritma Enkripsi Simetris',
  description: 'Mengimplementasikan enkripsi dan dekripsi aman untuk teks dan file, mendukung berbagai algoritma enkripsi simetris termasuk AES, DES, dan SM4 Nasional',

  encryption: {
    title: 'Enkripsi/Dekripsi',
    plaintext: 'Teks Asli',
    plaintextPlaceholder: 'Masukkan teks yang akan dienkripsi',
    ciphertext: 'Teks Terenkripsi',
    ciphertextPlaceholder: 'Data terenkripsi akan ditampilkan di sini',
    encrypt: 'Enkripsi',
    decrypt: 'Dekripsi',
    decrypted: 'Teks Terdekripsi',
    decryptedPlaceholder: 'Data terdekripsi akan ditampilkan di sini',
    encryptSuccess: 'Enkripsi berhasil',
    decryptSuccess: 'Dekripsi berhasil',
    encryptError: 'Gagal mengenkripsi: {error}',
    decryptError: 'Gagal mendekripsi: {error}'
  },

  algorithm: {
    title: 'Pilih Algoritma',
    aes: 'AES',
    des: 'DES',
    tripledes: '3DES (Triple DES)',
    sm4: 'SM4 (Standar Nasional)',
    "3des": '3DES (Triple DES)'
  },

  mode: {
    title: 'Mode Operasi',
    ecb: 'ECB - Electronic Codebook',
    cbc: 'CBC - Cipher Block Chaining',
    cfb: 'CFB - Cipher Feedback',
    ofb: 'OFB - Output Feedback',
    ctr: 'CTR - Counter'
  },

  padding: {
    title: 'Metode Padding',
    pkcs7: 'PKCS7',
    zeroPadding: 'Zero Padding',
    zeropadding: 'Zero Padding'
  },

  operation: {
    title: 'Jenis Operasi',
    encrypt: 'Enkripsi',
    decrypt: 'Dekripsi'
  },

  key: {
    title: 'Kunci',
    label: 'Kunci',
    placeholder: 'Masukkan kunci {keySize}',
    placeholderString: 'Masukkan kunci string {keySize} (otomatis diisi jika kurang)',
    placeholderHex: 'Masukkan kunci heksadesimal {keySize} (otomatis diisi jika kurang)',
    placeholderBase64: 'Masukkan kunci Base64 {keySize} (otomatis diisi jika kurang)',
    generateRandom: 'Hasilkan Acak',
    sizeHint: '{keySize}',
    autoFillHint: 'Kunci akan diisi dengan nol jika kurang panjang, bagian yang melebihi akan dipotong'
  },

  iv: {
    title: 'Vektor Inisialisasi (IV)',
    label: 'Vektor Inisialisasi (IV)',
    placeholder: 'Masukkan IV {blockSize}',
    placeholderString: 'Masukkan IV string {blockSize} (otomatis diisi jika kurang)',
    placeholderHex: 'Masukkan IV heksadesimal {blockSize} (otomatis diisi jika kurang)',
    placeholderBase64: 'Masukkan IV Base64 {blockSize} (otomatis diisi jika kurang)',
    generateRandom: 'Hasilkan Acak',
    sizeHint: '{blockSize}',
    autoFillHint: 'IV akan diisi dengan nol jika kurang panjang, bagian yang melebihi akan dipotong'
  },

  input: {
    title: 'Konten untuk Enkripsi',
    titleDecrypt: 'Konten untuk Dekripsi',
    clear: 'Hapus',
    placeholder: 'Masukkan teks yang akan dienkripsi',
    placeholderDecrypt: 'Masukkan teks terenkripsi dalam format {format}'
  },

  inputFormat: {
    title: 'Format Input',
    string: 'String',
    hex: 'HEX',
    base64: 'Base64'
  },

  output: {
    title: 'Hasil Enkripsi',
    titleDecrypt: 'Hasil Dekripsi',
    copyResult: 'Salin Hasil',
    copied: 'Tersalin'
  },

  outputFormat: {
    title: 'Format Output',
    string: 'String',
    hex: 'HEX',
    base64: 'Base64'
  },

  error: {
    title: 'Error',
    invalidHex: 'Kunci harus dalam format HEX',
    invalidIvHex: 'IV harus dalam format HEX',
    invalidHexInput: 'Input format HEX tidak valid',
    invalidBase64: 'Input format Base64 tidak valid',
    unsupportedAlgorithm: 'Algoritma tidak didukung',
    decryptionFailed: 'Gagal mendekripsi: {message}',
    copyFailed: 'Gagal menyalin, silakan salin manual',
    unknownError: 'Terjadi error saat pemrosesan',
    invalidHexFormat: 'Format HEX tidak valid',
    invalidBase64Format: 'Format Base64 tidak valid',
    emptyBase64: 'Encoding Base64 tidak valid',
    decryptFailed: 'Gagal mendekripsi:'
  },

  info: {
    title: 'Penjelasan Algoritma',
    algorithms: {
      aes: 'AES: Standar Enkripsi Lanjutan, menggunakan kunci 128-bit, 192-bit, atau 256-bit',
      des: 'DES: Standar Enkripsi Data, menggunakan kunci 56-bit, keamanan rendah',
      tripledes: '3DES: Triple DES, menggunakan tiga kunci DES 56-bit, keamanan lebih tinggi',
      sm4: 'SM4: Standar Nasional China, algoritma blok cipher, menggunakan kunci 128-bit',
      "3des": '3DES: Triple DES, menggunakan tiga kunci DES 56-bit, keamanan lebih tinggi'
    },
    modes: {
      title: 'Penjelasan Mode Operasi',
      ecb: 'ECB: Setiap blok dienkripsi secara independen, tidak direkomendasikan untuk data sensitif',
      cbc: 'CBC: Setiap blok bergantung pada blok sebelumnya, lebih aman',
      cfb: 'CFB: Mengubah blok cipher menjadi stream cipher',
      ofb: 'OFB: Mode stream cipher, enkripsi dan dekripsi menggunakan operasi yang sama',
      ctr: 'CTR: Menggunakan counter untuk setiap blok, dapat diproses secara paralel'
    }
  },

  buttons: {
    process: 'Enkripsi',
    processDecrypt: 'Dekripsi'
  },

  file: {
    title: 'Enkripsi File',
    select: 'Pilih File',
    drop: 'Atau seret dan lepas file di sini',
    encrypt: 'Enkripsi File',
    decrypt: 'Dekripsi File',
    download: 'Unduh Hasil',
    selected: 'Terpilih: {name}',
    size: 'Ukuran: {size}',
    maxSize: 'Ukuran maksimal: 100MB',
    encryptingFile: 'Mengenkripsi file...',
    decryptingFile: 'Mendekripsi file...',
    downloadReady: 'Siap diunduh',
    fileTooBig: 'File terlalu besar. Ukuran maksimal yang diizinkan adalah 100MB.'
  },

  options: {
    title: 'Opsi',
    autoDecrypt: 'Otomatis dekripsi setelah enkripsi',
    includeMeta: 'Sertakan metadata algoritma dalam output',
    kdf: 'Fungsi Derivasi Kunci',
    pbkdf2: 'PBKDF2',
    scrypt: 'scrypt',
    argon2: 'Argon2id',
    salt: 'Salt (untuk derivasi kunci)',
    saltPlaceholder: 'Masukkan salt dalam HEX atau kosongkan untuk generate acak',
    autoClear: 'Otomatis hapus data sensitif',
    saveSettings: 'Simpan Pengaturan'
  },

  security: {
    title: 'Informasi Keamanan',
    description: 'Tentang keamanan enkripsi',
    warning: 'Peringatan',
    ecbInsecure: 'Mode ECB tidak direkomendasikan untuk aplikasi keamanan karena tidak menyembunyikan pola data dengan baik.',
    useModern: 'Untuk data sensitif, gunakan AES-256 dengan mode GCM atau CBC.',
    keyWarning: 'Lindungi kunci enkripsi Anda. Jika hilang, data tidak dapat dipulihkan.',
    browserWarning: 'Enkripsi berbasis browser nyaman tetapi mungkin tidak cocok untuk data yang sangat sensitif.',
    learnMore: 'Pelajari lebih lanjut tentang enkripsi'
  },

  messages: {
    noAlgorithm: 'Silakan pilih algoritma enkripsi',
    noKey: 'Silakan masukkan kunci enkripsi atau password',
    invalidKeyLength: 'Panjang kunci tidak valid untuk algoritma yang dipilih',
    invalidIv: 'Panjang IV tidak valid untuk algoritma dan mode yang dipilih',
    noData: 'Silakan masukkan data untuk dienkripsi/didekripsi',
    padError: 'Error padding - kunci atau data mungkin tidak benar',
    fileSuccess: 'Pemrosesan file berhasil',
    fileError: 'Error memproses file: {error}',
    clipboardError: 'Gagal menyalin ke clipboard: {error}',
    invalidFormat: 'Format input tidak valid'
  }
};