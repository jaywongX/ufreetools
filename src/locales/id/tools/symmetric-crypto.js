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
  },
  article: {
    title: "Algoritma Enkripsi Simetris: Alat Keamanan Data yang Komprehensif",
    features: {
      title: "Fitur Enkripsi Simetris",
      description: "<strong>Enkripsi simetris</strong> adalah alat <strong>kriptografi</strong> yang kuat untuk melindungi data sensitif menggunakan berbagai algoritma standar industri. Berbeda dengan enkripsi asimetris yang menggunakan pasangan kunci, enkripsi simetris menggunakan satu <strong>kunci</strong> untuk proses enkripsi dan dekripsi. Alat kami mendukung berbagai algoritma termasuk <strong>AES (Advanced Encryption Standard)</strong>, <strong>DES (Data Encryption Standard)</strong>, <strong>3DES (Triple DES)</strong>, dan <strong>SM4 (Standar Nasional China)</strong>.<br><br>Fitur utama mencakup enkripsi teks dan file dengan opsi yang dapat dikonfigurasi seperti <strong>mode enkripsi</strong> (CBC, ECB, CFB, OFB, CTR), <strong>metode padding</strong>, dan format input/output yang fleksibel. <strong>Alat enkripsi data</strong> ini menyediakan antarmuka yang ramah pengguna, memungkinkan implementasi keamanan yang kuat tanpa pengetahuan kriptografi yang mendalam, membuat enkripsi tingkat tinggi dapat diakses oleh semua orang sambil mempertahankan standar keamanan tinggi.",
      useCases: {
        title: "Aplikasi Praktis Enkripsi Simetris",
        items: [
          "<strong>Berbagi File Aman</strong>: Enkripsi dokumen sensitif, spreadsheet, atau file media sebelum berbagi melalui saluran yang berpotensi tidak aman. Penerima dengan kunci yang benar dapat dengan mudah mendekripsi dan mengakses konten asli, memastikan kerahasiaan selama transmisi.",
          "<strong>Penyimpanan dan Manajemen Password</strong>: Buat penyimpanan terenkripsi untuk password dan kredensial autentikasi Anda. Dengan mengenkripsi informasi sensitif ini menggunakan password utama, Anda dapat mempertahankan kumpulan detail login yang aman sementara hanya perlu mengingat satu password yang kuat.",
          "<strong>Autentikasi API</strong>: Hasilkan dan verifikasi token terenkripsi untuk sistem autentikasi API. Enkripsi simetris menawarkan keseimbangan antara keamanan dan kinerja, sangat cocok untuk menangani token autentikasi dalam aplikasi web dan layanan.",
          "<strong>Enkripsi Field Database</strong>: Lindungi field sensitif tertentu dalam database tanpa merekonstruksi seluruh sistem. <strong>Cipher simetris</strong> memungkinkan enkripsi selektif informasi kritis seperti pengenal pribadi, detail keuangan, atau data pengguna pribadi.",
          "<strong>Keamanan Konfigurasi</strong>: Enkripsi file konfigurasi aplikasi yang berisi kredensial sensitif seperti password database, kunci API, dan token layanan. Ini mencegah paparan tidak sengaja informasi akses kritis bahkan jika file konfigurasi bocor.",
          "<strong>Saluran Komunikasi Aman</strong>: Implementasikan komunikasi terenkripsi end-to-end dengan menghasilkan kunci simetris untuk setiap sesi. Pendekatan ini memungkinkan pengiriman pesan real-time yang aman sambil mempertahankan kinerja untuk aplikasi dengan bandwidth terbatas."
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Enkripsi Simetris",
      items: [
        {
          question: "Apa perbedaan antara algoritma AES, DES, 3DES dan SM4?",
          answer: "Ini adalah berbagai <strong>algoritma enkripsi simetris</strong> dengan tingkat keamanan dan karakteristik kinerja yang berbeda. <strong>AES (Advanced Encryption Standard)</strong> adalah standar global saat ini, menawarkan keamanan dan kinerja yang sangat baik dengan ukuran kunci 128, 192, atau 256-bit. <strong>DES (Data Encryption Standard)</strong> adalah algoritma yang lebih tua menggunakan kunci 56-bit, sekarang dianggap tidak aman untuk aplikasi kritis karena kerentanannya terhadap serangan brute-force. <strong>3DES</strong> meningkatkan keamanan DES dengan menerapkan algoritma tiga kali dengan kunci berbeda, memberikan perlindungan yang lebih kuat tetapi lebih lambat. <strong>SM4</strong> adalah algoritma blok cipher Standar Nasional China dengan kunci 128-bit, dirancang sebagai padanan AES dengan keamanan yang sebanding. Untuk sebagian besar aplikasi modern yang membutuhkan keamanan, AES direkomendasikan karena memberikan keseimbangan terbaik antara keamanan kuat dan efisiensi."
        },
        {
          question: "Mode enkripsi apa yang harus saya pilih untuk aplikasi saya?",
          answer: "<strong>Mode enkripsi</strong> menentukan bagaimana algoritma blok cipher memproses blok data. <strong>ECB (Electronic Codebook)</strong> paling sederhana tetapi paling tidak aman, karena blok plaintext yang sama akan dienkripsi ke blok ciphertext yang sama, berpotensi mengungkapkan pola. <strong>CBC (Cipher Block Chaining)</strong> meningkatkan keamanan dengan membuat setiap blok terenkripsi bergantung pada blok sebelumnya, membutuhkan vektor inisialisasi (IV). <strong>CFB (Cipher Feedback)</strong>, <strong>OFB (Output Feedback)</strong>, dan <strong>CTR (Counter)</strong> mengubah blok cipher menjadi stream cipher dengan karakteristik berbeda. Untuk enkripsi data sensitif umum, CBC dengan implementasi IV acak yang benar memberikan keamanan yang baik dan kinerja yang wajar. Mode CTR sangat baik untuk implementasi paralel, menghindari persyaratan padding. Sistem kripto modern sering lebih memilih mode enkripsi terautentikasi seperti GCM (tidak disediakan langsung oleh alat ini) yang memberikan kerahasiaan dan integritas data secara bersamaan."
        },
        {
          question: "Apakah alat enkripsi online ini aman untuk data sensitif?",
          answer: "<strong>Alat enkripsi berbasis browser</strong> ini memproses semua data secara lokal di browser tanpa mengirim informasi apa pun ke server eksternal, memberikan tingkat kerahasiaan dasar. Namun, untuk informasi yang benar-benar sensitif, pertimbangkan beberapa faktor: 1) Alat ini menggunakan implementasi <strong>library enkripsi</strong> standar JavaScript yang mungkin tidak memiliki jaminan keamanan yang sama dengan implementasi native yang diaudit. 2) Lingkungan browser menghadapi potensi ancaman seperti ekstensi browser, malware, atau pemeriksaan memori. 3) Manajemen kunci tetap penting - jika Anda kehilangan kunci enkripsi, pemulihan data menjadi tidak mungkin. Untuk data yang sangat sensitif atau sistem produksi, kami merekomendasikan penggunaan perangkat lunak enkripsi khusus atau library enkripsi dalam lingkungan terkontrol dengan praktik manajemen kunci yang tepat. Alat ini paling cocok untuk tujuan pendidikan, penggunaan sesekali, atau enkripsi informasi dengan sensitivitas sedang."
        },
        {
          question: "Bagaimana cara menangani dan berbagi kunci enkripsi dengan aman?",
          answer: "<strong>Manajemen kunci enkripsi</strong> yang aman sangat penting untuk mempertahankan keamanan kriptografi. Jangan pernah berbagi kunci melalui saluran yang sama dengan data terenkripsi - ini mengalahkan tujuan enkripsi karena siapa pun yang mencegat keduanya dapat mendekripsi informasi Anda. Sebagai gantinya: 1) Gunakan saluran komunikasi terpisah yang aman untuk pertukaran kunci. 2) Pertimbangkan pembagian kunci, mengirim bagian berbeda melalui saluran berbeda. 3) Jika memungkinkan, gunakan protokol pertukaran kunci yang aman. 4) Untuk komunikasi berkelanjutan, pertimbangkan penggunaan enkripsi asimetris untuk pertukaran kunci simetris yang aman. 5) Terapkan praktik rotasi kunci untuk meningkatkan keamanan jangka panjang. 6) Simpan kunci dengan aman, jangan pernah dalam bentuk teks biasa, sebaiknya menggunakan sistem manajemen kunci khusus. 7) Untuk keamanan maksimum kunci kritis, pertimbangkan penggunaan Hardware Security Module (HSM) atau layanan manajemen kunci khusus. Ingatlah bahwa keamanan data terenkripsi Anda hanya sekuat praktik manajemen kunci Anda."
        },
        {
          question: "Bagaimana memastikan data terenkripsi saya tetap utuh dan tidak dimodifikasi?",
          answer: "<strong>Enkripsi simetris</strong> standar memberikan kerahasiaan tetapi tidak menjamin integritas data secara inheren. Untuk memverifikasi bahwa data terenkripsi Anda belum diubah: 1) Jika memungkinkan, gunakan mode enkripsi terautentikasi. Meskipun alat ini terutama menyediakan mode tradisional (CBC, ECB, dll.), sistem kripto modern lebih memilih enkripsi terautentikasi seperti AES-GCM yang memberikan kerahasiaan dan verifikasi integritas secara bersamaan. 2) Implementasikan pemeriksaan integritas terpisah dengan menghitung hash kriptografi (seperti SHA-256) atau HMAC dari data terenkripsi dan menyimpannya dengan aman. Hitung ulang dan bandingkan nilai ini sebelum dekripsi untuk mendeteksi perubahan. 3) Untuk aplikasi kritis, pertimbangkan penggunaan tanda tangan digital di luar enkripsi. 4) Selalu periksa panjang dan struktur ciphertext sebelum dekripsi untuk memastikan penerimaan ciphertext lengkap. 5) Jika memungkinkan, sertakan informasi versi dan metadata lain dalam skema enkripsi untuk mencegah serangan downgrade. Langkah-langkah ini membantu memastikan kerahasiaan dan integritas informasi sensitif Anda di saluran yang mungkin tidak tepercaya."
        }
      ]
    },
    guide: {
      title: "Panduan Langkah demi Langkah untuk Alat Enkripsi Simetris",
      steps: [
        "<strong>Pilih algoritma enkripsi</strong>: Berdasarkan kebutuhan keamanan dan persyaratan kompatibilitas Anda, pilih dari AES (direkomendasikan untuk sebagian besar aplikasi), DES, 3DES, atau SM4 (standar China). AES menawarkan keseimbangan terbaik antara keamanan dan kinerja untuk aplikasi modern.",
        "<strong>Pilih mode operasi</strong>: Pilih salah satu <strong>mode enkripsi</strong> yang tersedia (CBC, ECB, CFB, OFB, CTR). Untuk keamanan umum, mode CBC direkomendasikan karena memberikan keamanan yang baik ketika digunakan dengan vektor inisialisasi (IV) acak.",
        "<strong>Konfigurasikan metode padding</strong>: Jika mode yang Anda pilih memerlukan padding (seperti CBC atau ECB), pilih antara PKCS7 (standar) atau zero padding. Pengaturan ini menentukan bagaimana blok terakhir diisi ketika panjang data bukan kelipatan ukuran blok.",
        "<strong>Hasilkan atau masukkan kunci enkripsi</strong>: Masukkan kunci kustom atau gunakan tombol 'Hasilkan Acak' untuk membuat kunci dengan kekuatan kriptografi. Untuk AES, panjang kunci akan menjadi 16, 24, atau 32 byte tergantung pada kekuatan yang diinginkan. Pilih format input yang sesuai untuk kunci Anda (string, heksadesimal, atau Base64).",
        "<strong>Jika diperlukan, sediakan Vektor Inisialisasi (IV)</strong>: Untuk mode selain ECB, Anda memerlukan IV. Klik 'Hasilkan Acak' untuk membuat IV acak yang aman, atau masukkan IV Anda sendiri. IV tidak perlu dirahasiakan tetapi harus unik untuk setiap operasi enkripsi.",
        "<strong>Masukkan data yang akan dienkripsi</strong>: Masukkan atau tempel teks yang akan dienkripsi ke dalam field input. Pilih format input yang sesuai (string untuk teks biasa, atau heksadesimal/Base64 untuk data yang sudah dienkode). Untuk dekripsi, berikan ciphertext dalam format output asli (biasanya heksadesimal atau Base64).",
        "<strong>Proses dan gunakan hasil</strong>: Klik tombol 'Enkripsi' atau 'Dekripsi' untuk memproses data Anda. Hasil akan ditampilkan dalam format output yang ditentukan. Gunakan tombol salin untuk dengan mudah mentransfer hasil ke aplikasi atau dokumen lain. Untuk enkripsi, pastikan untuk menyimpan kunci dan IV (jika digunakan) dengan aman, karena keduanya diperlukan untuk dekripsi."
      ]
    },
    conclusion: "Alat Enkripsi Simetris menyediakan cara yang kuat dan mudah digunakan untuk melindungi informasi sensitif Anda menggunakan algoritma enkripsi standar industri. Dengan mengikuti praktik keamanan yang tepat dan memahami opsi yang tersedia, Anda dapat secara efektif menerapkan enkripsi yang kuat untuk berbagai aplikasi, mulai dari melindungi file pribadi hingga mengimplementasikan sistem keamanan yang lebih kompleks. Meskipun alat berbasis browser ini memberikan kenyamanan dan fleksibilitas untuk banyak kebutuhan enkripsi, ingatlah bahwa aplikasi yang sangat penting untuk keamanan mungkin memerlukan solusi enkripsi khusus dengan infrastruktur manajemen kunci yang tepat. Baik Anda ingin menambahkan lapisan privasi ke data pribadi atau mengeksplorasi konsep kriptografi, alat ini memberikan pengantar praktis untuk enkripsi simetris, teknologi keamanan dasar ini."
  }
}