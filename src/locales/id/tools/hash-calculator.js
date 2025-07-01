export default {
  name: 'Kalkulator Hash Online | Mendukung SHA-256, MD5, SHA-3, BLAKE3, SM3 dan banyak algoritma lainnya',
  description: 'Kalkulator hash online gratis yang mendukung berbagai algoritma enkripsi dan verifikasi seperti SHA-256, MD5, SHA-3, BLAKE3, SM3, cocok untuk verifikasi integritas file, pengolahan data aman, dan skenario lainnya.',
  input: {
    title: 'Input',
    text: 'Input Teks',
    file: 'Input File',
    textPlaceholder: 'Masukkan teks untuk dihitung hashnya di sini...',
    fileSelect: 'Pilih File',
    fileDrop: 'Seret dan lepas file di sini atau klik untuk mengunggah',
    fileSelected: 'File terpilih: {name}',
    fileSize: '{size}',
    removeFile: 'Hapus File',
    localProcessing: 'File akan diproses secara lokal, tidak diunggah ke server',
    encoding: 'Encoding',
    selectAlgorithm: 'Pilih Algoritma Hash',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    latin1: 'Latin1',
    calculate: 'Hitung Hash',
    calculating: 'Menghitung...',
    clear: 'Hapus Input',
    hashValue: 'Nilai Hash'
  },
  algorithms: {
    title: 'Algoritma',
    selectAll: 'Pilih Semua',
    deselectAll: 'Batalkan Pilihan',
    md5: 'MD5',
    sha1: 'SHA-1',
    sha224: 'SHA-224',
    sha256: 'SHA-256',
    sha384: 'SHA-384',
    sha512: 'SHA-512',
    sha3_224: 'SHA3-224',
    sha3_256: 'SHA3-256',
    sha3_384: 'SHA3-384',
    sha3_512: 'SHA3-512',
    ripemd160: 'RIPEMD-160',
    blake2b: 'BLAKE2b',
    blake2s: 'BLAKE2s',
    blake3: 'BLAKE3',
    keccak224: 'Keccak-224',
    keccak256: 'Keccak-256',
    keccak384: 'Keccak-384',
    keccak512: 'Keccak-512',
    whirlpool: 'Whirlpool',
    crc32: 'CRC32',
    hmac: 'Opsi HMAC',
    key: 'Kunci HMAC',
    keyPlaceholder: 'Masukkan kunci HMAC'
  },
  results: {
    title: 'Hasil Hash',
    algorithm: 'Algoritma',
    digest: 'Digest',
    noInput: 'Masukkan teks atau pilih file untuk menghitung hash',
    calculating: 'Menghitung...',
    copy: 'Salin',
    copied: 'Tersalin ke clipboard',
    copyFailed: 'Gagal menyalin, silakan salin manual',
    copyAll: 'Salin Semua',
    download: 'Unduh Hasil',
    fileInfo: 'Informasi File',
    fileName: 'Nama',
    fileSize: 'Ukuran',
    fileType: 'Tipe',
    lastModified: 'Terakhir Diubah',
    hexFormat: 'Format Heksadesimal',
    base64Format: 'Format Base64',
    upperHexFormat: 'Format Heksadesimal Huruf Besar',
    hashValue: 'Nilai Hash',
    allHashesTitle: 'Hasil Semua Algoritma Hash',
    hexFormat: 'Format Heksadesimal',
    algorithm: 'Algoritma',
    digest: 'Nilai Hash',
    export: 'Ekspor CSV',
    calculating: 'Sedang menghitung...',
    copyToClipboard: 'Salin ke Clipboard',
    allHashesTitle: 'Nilai Hash Semua Algoritma',
  },
  verification: {
    title: 'Verifikasi Hash',
    inputVerifyHash: 'Masukkan nilai hash untuk diverifikasi',
    placeholder: 'Masukkan nilai hash untuk dibandingkan...',
    paste: 'Tempel hash untuk verifikasi',
    matches: 'Hash cocok!',
    doesNotMatch: 'Hash tidak cocok',
    notFound: 'Algoritma tidak ditemukan',
    verify: 'Verifikasi',
    autoDetect: 'Deteksi Otomatis Algoritma',
    result: 'Hasil Verifikasi'
  },
  options: {
    title: 'Opsi',
    uppercase: 'Output Huruf Besar',
    showTiming: 'Tampilkan Waktu Perhitungan',
    autoCalculate: 'Hitung Otomatis',
    formatOutput: 'Format Output Panjang',
    binaryOutput: 'Tampilan Biner (untuk file non-teks)',
    compareHashes: 'Bandingkan Nilai Hash',
    hmacMode: 'Aktifkan Mode HMAC',
    autoCalculate: 'Hitung Otomatis',
    showAllHashes: 'Tampilkan Hash Semua Algoritma'
  },
  tools: {
    title: 'Alat',
    batchProcessing: 'Proses Batch',
    fileHashTool: 'Alat Hash File',
    hashIdentifier: 'Pengidentifikasi Jenis Hash',
    hmacGenerator: 'Generator HMAC',
    checksumVerifier: 'Verifier Checksum',
    passwordHasher: 'Pembuat Hash Password'
  },
  batchTool: {
    title: 'Proses Batch',
    addFiles: 'Tambahkan File',
    processFiles: 'Proses File',
    clearAll: 'Hapus Semua',
    fileName: 'Nama File',
    algorithm: 'Algoritma',
    status: 'Status',
    actions: 'Aksi',
    waiting: 'Menunggu',
    processing: 'Memproses',
    complete: 'Selesai',
    failed: 'Gagal',
    remove: 'Hapus',
    filesSelected: '{count} file terpilih',
    exportResults: 'Ekspor Hasil',
    selectAlgorithm: 'Pilih Algoritma untuk Semua File'
  },
  messages: {
    fileTooBig: 'File terlalu besar. Ukuran maksimum yang diizinkan adalah 100MB.',
    hashCalculated: 'Hash berhasil dihitung',
    invalidInput: 'Input tidak valid',
    readError: 'Tidak dapat membaca file',
    processingError: 'Error saat memproses file: {error}',
    algorithmNotAvailable: 'Algoritma tidak tersedia. Silakan instal library yang diperlukan.',
    algorithmFallback: '{algorithm} tidak tersedia, menggunakan {fallback} sebagai alternatif',
    moduleNotReady: 'Modul {name} belum siap',
    algorithmError: 'Error {algorithm}: {error}'
  },
  security: {
    warning: 'Menggunakan alat hash pada koneksi HTTP yang tidak aman memiliki risiko keamanan'
  },
  algorithmDetails: {
    title: 'Tentang Algoritma Hash',
    usage: 'Kegunaan Umum',
    safe: 'Keamanan',
    md2: {
      name: 'MD2 (128-bit)',
      description: 'MD2 adalah fungsi hash yang banyak digunakan, menghasilkan nilai hash 128-bit (16 byte), biasanya direpresentasikan sebagai 32 karakter heksadesimal.',
      usage: 'Pemeriksaan integritas file, penyimpanan password (tidak aman)',
      security: 'Telah terbukti tidak tahan terhadap tabrakan; tidak boleh digunakan untuk keperluan sensitif keamanan.'
    },
    md4: {
      name: 'MD4 (128-bit)',
      description: 'MD4 adalah fungsi hash yang banyak digunakan, menghasilkan nilai hash 128-bit (16 byte), biasanya direpresentasikan sebagai 32 karakter heksadesimal.',
      usage: 'Pemeriksaan integritas file, penyimpanan password (tidak aman)',
      security: 'Telah terbukti tidak tahan terhadap tabrakan; tidak boleh digunakan untuk keperluan sensitif keamanan.'
    },
    md5: {
      name: 'MD5 (128-bit)',
      description: 'MD5 adalah fungsi hash yang banyak digunakan, menghasilkan nilai hash 128-bit (16 byte), biasanya direpresentasikan sebagai 32 karakter heksadesimal.',
      usage: 'Pemeriksaan integritas file, penyimpanan password (tidak aman)',
      security: 'Telah terbukti tidak tahan terhadap tabrakan; tidak boleh digunakan untuk keperluan sensitif keamanan.'
    },
    sha1: {
      name: 'SHA-1 (160-bit)',
      description: 'SHA-1 adalah fungsi hash kriptografis yang menghasilkan nilai hash 160-bit (20 byte), biasanya direpresentasikan sebagai 40 karakter heksadesimal.',
      usage: 'Sistem kontrol versi (seperti Git), verifikasi integritas file',
      security: 'Telah terbukti rentan terhadap serangan tabrakan; tidak direkomendasikan untuk aplikasi kritis keamanan.'
    },
    sha224: {
      name: 'SHA-224 (224-bit)',
      description: 'SHA-224 adalah bagian dari keluarga SHA-2, menghasilkan nilai hash 224-bit (28 byte).',
      usage: 'Cocok untuk skenario dengan ruang terbatas tetapi masih membutuhkan keamanan yang kuat',
      security: 'Memberikan keamanan yang baik, merupakan versi terpotong dari SHA-256'
    },
    sha256: {
      name: 'SHA-256 (256-bit)',
      description: 'SHA-256 termasuk dalam seri SHA-2, menghasilkan nilai hash 256-bit (32 byte), biasanya direpresentasikan sebagai 64 karakter heksadesimal.',
      usage: 'Tanda tangan digital, sertifikat digital, penyimpanan password, blockchain',
      security: 'Saat ini dianggap aman, banyak digunakan untuk skenario keamanan tinggi.'
    },
    dsha256: {
      name: 'Double SHA-256',
      description: 'Double SHA-256 adalah fungsi hash kriptografis yang menjalankan SHA-256 dua kali berturut-turut, yaitu SHA-256(SHA-256(x)).',
      usage: 'Digunakan dalam Bitcoin dan banyak cryptocurrency lainnya untuk hash blok, ID transaksi, dan pembuatan alamat',
      security: 'Memberikan jaminan keamanan yang sama dengan SHA-256 standar, tetapi menambahkan lapisan keamanan tambahan, membuatnya lebih sulit untuk menghitung input asli melalui tabrakan.'
    },
    sha384: {
      name: 'SHA-384 (384-bit)',
      description: 'SHA-384 adalah versi terpotong dari SHA-512, menghasilkan nilai hash 384-bit (48 byte).',
      usage: 'Skenario yang membutuhkan keamanan lebih tinggi dari SHA-256',
      security: 'Memberikan keamanan lebih kuat dari SHA-256, tidak ada metode serangan yang diketahui.'
    },
    sha512: {
      name: 'SHA-512 (512-bit)',
      description: 'SHA-512 adalah algoritma standar terpanjang dalam seri SHA-2, menghasilkan nilai hash 512-bit (64 byte).',
      usage: 'Aplikasi yang membutuhkan tingkat keamanan tertinggi',
      security: 'Memberikan tingkat keamanan tertinggi, tidak ada serangan efektif yang diketahui.'
    },
    sha512_224: {
      name: 'SHA-512/224 (224-bit)',
      description: 'SHA-512/224 adalah varian dari SHA-512, output dipotong menjadi 224-bit.',
      usage: 'Memberikan hash dengan panjang yang sama seperti SHA-224 tetapi berdasarkan struktur internal SHA-512',
      security: 'Memiliki kinerja lebih baik untuk data yang lebih panjang sambil mempertahankan keamanan yang kuat'
    },
    sha512_256: {
      name: 'SHA-512/256 (256-bit)',
      description: 'SHA-512/256 adalah varian dari SHA-512, output dipotong menjadi 256-bit.',
      usage: 'Memberikan kinerja lebih baik dari SHA-256 pada sistem 64-bit',
      security: 'Setara dengan keamanan SHA-256, tetapi lebih efisien pada beberapa perangkat keras'
    },
    sha3_224: {
      name: 'SHA3-224 (224-bit)',
      description: 'SHA3-224 adalah bagian dari standar SHA-3, menyediakan output 224-bit.',
      usage: 'Cocok untuk skenario keamanan menengah yang membutuhkan resistensi terhadap komputasi kuantum',
      security: 'Merupakan algoritma hash aman yang disertifikasi NIST, memberikan jaminan keamanan yang baik'
    },
    sha3_256: {
      name: 'SHA3-256 (256-bit)',
      description: 'SHA3-256 adalah bagian dari standar SHA-3, memiliki struktur internal yang sangat berbeda dari seri SHA-2.',
      usage: 'Aplikasi keamanan jangka panjang yang tahan terhadap ancaman komputasi kuantum',
      security: 'Dirancang untuk menahan serangan potensial di masa depan, termasuk serangan komputasi kuantum.'
    },
    sha3_384: {
      name: 'SHA3-384 (384-bit)',
      description: 'SHA3-384 adalah bagian dari standar SHA-3, menyediakan output 384-bit.',
      usage: 'Cocok untuk skenario yang membutuhkan keamanan tinggi dan resistensi terhadap komputasi kuantum',
      security: 'Memberikan keamanan lebih kuat dari SHA3-256, cocok untuk aplikasi data sensitif'
    },
    sha3_512: {
      name: 'SHA3-512 (512-bit)',
      description: 'SHA3-512 adalah algoritma dalam standar SHA-3 yang menyediakan tingkat keamanan tertinggi.',
      usage: 'Skenario yang membutuhkan keamanan sangat tinggi dan resistensi terhadap komputasi kuantum',
      security: 'Memberikan jaminan keamanan tingkat tertinggi, merupakan algoritma teraman dalam seri SHA-3.'
    },
    sm3: {
      name: 'SM3 (256-bit)',
      description: 'SM3 adalah standar algoritma hash kriptografi yang dirilis oleh Administrasi Kriptografi Nasional China, menghasilkan output 256-bit.',
      usage: 'Aplikasi kriptografi komersial China, sertifikat digital dan sistem e-government',
      security: 'Dirancang mirip SHA-2 tetapi dioptimalkan untuk resistensi serangan, banyak digunakan di China'
    },
    ripemd160: {
      name: 'RIPEMD-160 (160-bit)',
      description: 'RIPEMD-160 adalah fungsi hash yang dikembangkan oleh proyek Eropa RIPE, menghasilkan nilai hash 160-bit.',
      usage: 'Pembuatan alamat Bitcoin, aplikasi blockchain',
      security: 'Lebih aman dari SHA-1 dengan panjang yang sama, tetapi kurang digunakan.'
    },
    crc32: {
      name: 'CRC32 (32-bit)',
      description: 'CRC32 adalah fungsi pemeriksaan redundansi siklik, sering digunakan untuk deteksi kesalahan.',
      usage: 'Pemeriksaan integritas data, komunikasi jaringan, verifikasi transfer data',
      security: 'Tidak cocok untuk skenario keamanan kriptografi, terutama digunakan untuk deteksi kesalahan daripada perlindungan keamanan'
    },
    murmur3_x86_32: {
      name: 'MurmurHash3 x86 (32-bit)',
      description: 'MurmurHash3 adalah fungsi hash non-kriptografi yang terkenal dengan kinerja tinggi dan tingkat tabrakan rendah, versi 32-bit cocok untuk aplikasi yang membutuhkan kecepatan dan efisiensi ruang.',
      usage: 'Tabel hash, filter Bloom, sistem cache, pembagian data',
      security: 'Bukan algoritma kriptografi, tidak cocok untuk aplikasi keamanan, tetapi unggul dalam skenario yang mengutamakan kinerja'
    },
    murmur3_x86_128: {
      name: 'MurmurHash3 x86 (128-bit)',
      description: 'Varian 128-bit dari MurmurHash3, menyediakan ruang hash yang lebih besar dan probabilitas tabrakan yang lebih rendah, cocok untuk kumpulan data besar.',
      usage: 'Tabel hash besar, deduplikasi data, hashing konsisten dalam sistem terdistribusi, penyimpanan berbasis alamat konten',
      security: 'Seperti versi 32-bit, bukan algoritma kriptografi, tetapi probabilitas tabrakan lebih rendah, cocok untuk aplikasi yang membutuhkan keunikan tinggi'
    },
    murmur3_x64_128: {
      name: 'MurmurHash3 x64 (128-bit)',
      description: 'Varian 128-bit dari MurmurHash3, menyediakan ruang hash yang lebih besar dan probabilitas tabrakan yang lebih rendah, cocok untuk kumpulan data besar.',
      usage: 'Tabel hash besar, deduplikasi data, hashing konsisten dalam sistem terdistribusi, penyimpanan berbasis alamat konten',
      security: 'Seperti versi 32-bit, bukan algoritma kriptografi, tetapi probabilitas tabrakan lebih rendah, cocok untuk aplikasi yang membutuhkan keunikan tinggi'
    },
    blake2b: {
      name: 'BLAKE2b (512-bit)',
      description: 'BLAKE2b adalah fungsi hash cepat dan aman yang dioptimalkan untuk arsitektur CPU modern.',
      usage: 'Pengolahan data skala besar, tabel hash, perbandingan string',
      security: 'Dirancang untuk kecepatan dan distribusi hash yang baik, tetapi tidak menjamin keamanan kriptografi'
    },
    blake2s: {
      name: 'BLAKE2s (256-bit)',
      description: 'BLAKE2s adalah fungsi hash cepat dan aman yang dioptimalkan untuk arsitektur CPU modern.',
      usage: 'Pengolahan data skala besar, tabel hash, perbandingan string',
      security: 'Dirancang untuk kecepatan dan distribusi hash yang baik, tetapi tidak menjamin keamanan kriptografi'
    },
    blake3: {
      name: 'BLAKE3 (256-bit)',
      description: 'BLAKE3 adalah fungsi hash cepat dan aman yang dioptimalkan untuk arsitektur CPU modern.',
      usage: 'Pengolahan data skala besar, tabel hash, perbandingan string',
      security: 'Dirancang untuk kecepatan dan distribusi hash yang baik, tetapi tidak menjamin keamanan kriptografi'
    },
    keccak224: {
      name: 'Keccak-224 (224-bit)',
      description: 'Keccak-224 adalah algoritma asli SHA-3, menghasilkan nilai hash 224-bit.',
      usage: 'Aplikasi Ethereum dan blockchain lainnya, sistem kriptografi',
      security: 'Memberikan keamanan yang kuat, lebih umum digunakan dalam teknologi blockchain daripada varian SHA-3 yang distandarisasi'
    },
    keccak256: {
      name: 'Keccak-256 (256-bit)',
      description: 'Keccak-256 adalah varian yang paling banyak digunakan dalam seri Keccak, menghasilkan nilai hash 256-bit.',
      usage: 'Kontrak pintar Ethereum, transaksi blockchain, tanda tangan digital',
      security: 'Dipercaya dalam aplikasi blockchain, sedikit berbeda dari SHA3-256 yang distandarisasi'
    },
    keccak384: {
      name: 'Keccak-384 (384-bit)',
      description: 'Keccak-384 adalah varian dari seri Keccak, menghasilkan nilai hash 384-bit.',
      usage: 'Aplikasi yang membutuhkan keamanan lebih tinggi dari Keccak-256',
      security: 'Memberikan jaminan keamanan yang sangat kuat, tetapi lebih jarang digunakan daripada Keccak-256'
    },
    keccak512: {
      name: 'Keccak-512 (512-bit)',
      description: 'Keccak-512 adalah algoritma standar terpanjang dalam seri Keccak, menghasilkan nilai hash 512-bit.',
      usage: 'Aplikasi keamanan tinggi yang membutuhkan resistensi tabrakan maksimum',
      security: 'Memberikan tingkat keamanan tertinggi dalam seri Keccak, cocok untuk data yang paling sensitif'
    },
    shake128: {
      name: 'SHAKE128 (128-bit)',
      description: 'SHAKE128 adalah bagian dari keluarga SHA-3, mampu menghasilkan output dengan panjang variabel, default menghasilkan nilai hash 256-bit.',
      usage: 'Aplikasi kriptografi yang membutuhkan output panjang variabel, fungsi derivasi kunci',
      security: 'Memberikan keamanan yang baik, merupakan algoritma hash aman yang diakui NIST'
    },
    shake256: {
      name: 'SHAKE256 (256-bit)',
      description: 'SHAKE256 adalah bagian dari keluarga SHA-3, mampu menghasilkan output dengan panjang variabel, default menghasilkan nilai hash 512-bit.',
      usage: 'Aplikasi keamanan tinggi yang membutuhkan output hash panjang',
      security: 'Memberikan jaminan keamanan lebih kuat dari SHAKE128, cocok untuk aplikasi data sensitif'
    },
    cshake128: {
      name: 'cSHAKE128 (Output Panjang Variabel yang Dapat Disesuaikan)',
      description: 'cSHAKE128 adalah versi yang dapat disesuaikan dari SHAKE128, mendukung string dan nama fungsi yang dapat disesuaikan, mampu menghasilkan output dengan panjang variabel.',
      usage: 'Skenario algoritma hash yang membutuhkan parameter khusus, fungsi derivasi kunci standar NIST, protokol kriptografi',
      security: 'Memberikan keamanan setara dengan SHAKE128, sambil mendukung penyesuaian tingkat aplikasi'
    },
    cshake256: {
      name: 'cSHAKE256 (Output Panjang Variabel yang Dapat Disesuaikan)',
      description: 'cSHAKE256 adalah versi yang dapat disesuaikan dari SHAKE256, mendukung string dan nama fungsi yang dapat disesuaikan, mampu menghasilkan output dengan panjang variabel.',
      usage: 'Skenario hash yang membutuhkan keamanan tinggi dan penyesuaian, fungsi derivasi bersertifikat NIST, protokol kriptografi',
      security: 'Memberikan jaminan keamanan kuat setara dengan SHAKE256, sambil memungkinkan penyesuaian parameter tingkat aplikasi'
    },
  },
  article: {
    title: "Kalkulator Hash: Menghasilkan dan Memverifikasi Digest Hash Kriptografi",
    intro: "<strong>Kalkulator hash online</strong> kami menyediakan cara mudah untuk menghasilkan hash kriptografi untuk teks atau file apa pun. Alat pembuat hash gratis ini mendukung berbagai algoritma termasuk MD5, SHA-1, SHA-256, SHA-512, RIPEMD, BLAKE dan banyak lagi.",
    features: {
      title: "Memahami Fungsi Hash dan Aplikasinya",
      description: "<strong>Fungsi hash</strong> adalah algoritma matematika yang mengubah input data dengan ukuran berapa pun menjadi string dengan ukuran tetap. <strong>Kalkulator hash</strong> di UFreeTools membantu Anda menghitung sidik digital ini secara instan untuk verifikasi keamanan, pemeriksaan integritas data, atau aplikasi blockchain.<br><br>Berbeda dengan enkripsi, fungsi hash adalah operasi satu arah - mereka mengubah data menjadi <strong>digest hash</strong> unik yang tidak dapat dikembalikan ke input aslinya. Fitur kunci dari hash kriptografi adalah bahwa bahkan perubahan kecil pada input akan menghasilkan output yang sangat berbeda, membuat <strong>algoritma hash</strong> ini sangat cocok untuk memverifikasi integritas data dan mendeteksi modifikasi yang tidak sah.",
      useCases: {
        title: "Aplikasi Praktis Fungsi Hash",
        items: [
          "<strong>Verifikasi integritas file</strong>: Sebelum mengunduh perangkat lunak, Anda dapat menggunakan <strong>kalkulator checksum</strong> kami untuk memverifikasi file dengan membandingkan nilai hashnya dengan nilai yang diberikan oleh pengembang. Ini memastikan Anda menginstal apa yang diharapkan, mencegah injeksi malware.",
          "<strong>Deduplikasi data</strong>: Sistem penyimpanan menggunakan <strong>nilai hash</strong> untuk mengidentifikasi file duplikat dengan membandingkan sidik digitalnya, terlepas dari nama file. Alat kami membantu Anda menghitung pengidentifikasi ini dengan cepat untuk kebutuhan deduplikasi Anda sendiri.",
          "<strong>Keamanan password</strong>: Sistem otentikasi modern menyimpan <strong>hash password</strong> daripada password sebenarnya. Meskipun alat kami membantu memahami proses ini, ingatlah bahwa dalam lingkungan produksi sebaiknya menggunakan fungsi hash password khusus dengan salt.",
          "<strong>Forensik digital</strong>: Penyidik menggunakan <strong>kalkulator hash</strong> untuk membuat sidik digital file, membuktikan keaslian bukti. Nilai hash membuktikan bahwa bukti digital tidak diubah selama penyelidikan.",
          "<strong>Aplikasi blockchain</strong>: <strong>Hash kriptografi</strong> membentuk dasar teknologi blockchain, dengan algoritma seperti SHA-256 dan Keccak-256 (masing-masing digunakan di Bitcoin dan Ethereum) melindungi catatan transaksi dalam rantai yang tahan terhadap perubahan. Anda dapat mencoba algoritma yang sama dengan alat kami.",
          "<strong>Verifikasi konten</strong>: Penulis dan pembuat konten dapat mempublikasikan <strong>digest hash</strong> karya orisinal mereka, memberi orang lain cara untuk memverifikasi bahwa mereka memiliki versi asli yang tidak dimodifikasi."
        ]
      },
      toolAdvantages: {
        title: "Keunggulan Kalkulator Hash Kami",
        items: [
          "Mendukung lebih dari 30 algoritma hash, dari MD5 hingga opsi terkini seperti BLAKE3",
          "Pemrosesan lokal memastikan data sensitif Anda tidak pernah meninggalkan perangkat Anda",
          "Verifikasi hash terhadap nilai yang diharapkan, mengonfirmasi integritas data",
          "Lihat hasil dalam berbagai format (heksadesimal dan Base64)",
          "Hitung hash untuk input teks dan file hingga 100MB",
          "Bandingkan hasil dari beberapa algoritma secara bersamaan"
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Fungsi Hash",
      items: [
        {
          question: "Seberapa amankah fungsi hash kriptografi?",
          answer: "Keamanan fungsi hash bergantung pada tiga karakteristik kunci: resistensi tabrakan (sulit menemukan dua input dengan hash yang sama), resistensi pra-gambar (tidak dapat menentukan input dari hash), dan resistensi pra-gambar kedua (sulit menemukan input lain yang cocok dengan hash input tertentu). Algoritma modern seperti <strong>SHA-256</strong>, <strong>SHA-512</strong>, dan <strong>SHA3</strong> dianggap aman secara kriptografis, tetapi algoritma lama seperti MD5 dan SHA-1 memiliki kerentanan yang diketahui. Standar keamanan berkembang seiring peningkatan daya komputasi dan penemuan metode serangan baru. Untuk aplikasi yang membutuhkan keamanan tinggi, selalu gunakan fungsi hash yang paling baru direkomendasikan (saat ini SHA-256 atau lebih kuat), dan pantau perkembangan kriptografi melalui sumber seperti <a href='https://www.schneier.com/blog/archives/2005/02/cryptanalysis_o.html' target='_blank' rel='noopener noreferrer'>blog kriptografi Bruce Schneier</a>."
        },
        {
          question: "Bisakah saya menggunakan kalkulator hash untuk memverifikasi integritas file?",
          answer: "Ya, <strong>kalkulator hash online</strong> kami sangat cocok untuk verifikasi integritas file. Saat mengunduh perangkat lunak, banyak penyedia yang mempublikasikan checksum hash file mereka. Untuk memverifikasi integritas: 1) Pilih file yang diunduh di alat kami, 2) Pilih algoritma hash yang sama dengan yang digunakan penyedia (biasanya SHA-256), 3) Hitung hash, 4) Bandingkan dengan nilai yang dipublikasikan. Jika cocok persis, file Anda utuh dan tidak dimodifikasi. Proses verifikasi ini melindungi dari kerusakan tidak sengaja saat pengunduhan maupun potensi perubahan berbahaya. Alat ini memproses file secara lokal di browser Anda, nyaman bahkan untuk file besar, sekaligus menjaga privasi dan keamanan. Anda dapat memverifikasi checksum dari sumber seperti <a href='https://ubuntu.com/download/desktop/thank-you' target='_blank' rel='noopener noreferrer'>Ubuntu</a> atau <a href='https://www.python.org/downloads/' target='_blank' rel='noopener noreferrer'>Python</a> yang menyediakan nilai hash untuk file instalasi mereka."
        },
        {
          question: "Apakah kalkulator hash ini cocok untuk hashing password?",
          answer: "Meskipun <strong>pembuat hash</strong> kami dapat mendemonstrasikan cara kerja hashing password, untuk implementasi penyimpanan password yang sebenarnya, Anda harus menggunakan fungsi hash password khusus seperti bcrypt, Argon2, atau PBKDF2, bukan fungsi hash mentah. Algoritma khusus ini mencakup fitur keamanan penting seperti salting (menambahkan data acak ke setiap password sebelum hashing) dan key stretching (secara sengaja memperlambat proses hashing) untuk melindungi dari serangan tabel pelangi dan upaya brute force. Alat kami sangat baik untuk tujuan pendidikan atau menguji perilaku hashing umum, tetapi sistem produksi harus mengimplementasikan library hash password khusus dengan salting yang tepat, stretching, dan praktik keamanan terbaik. Untuk informasi lebih lanjut tentang penyimpanan password yang aman, kunjungi <a href='https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html' target='_blank' rel='noopener noreferrer'>OWASP Password Storage Cheat Sheet</a>."
        },
        {
          question: "Bagaimana cara membandingkan atau memverifikasi hash dalam format yang berbeda?",
          answer: "<strong>Alat verifikasi hash</strong> kami memudahkan perbandingan hash terlepas dari perbedaan format. Alat ini menampilkan hasil dalam berbagai format termasuk heksadesimal huruf kecil (format paling umum), heksadesimal huruf besar, dan pengkodean Base64. Untuk memverifikasi hash: 1) Hitung hash data Anda, 2) Masukkan hash yang ingin dibandingkan di bagian verifikasi, 3) Alat akan membandingkannya secara otomatis, menangani sensitivitas huruf besar/kecil dengan tepat. Bahkan jika hash referensi Anda berbeda dalam huruf besar/kecil dengan hash yang dihitung, verifikasi ini tetap berfungsi. Untuk verifikasi lintas algoritma, Anda perlu menghitung ulang hash menggunakan algoritma yang sama dengan hash referensi, karena algoritma berbeda akan menghasilkan output yang sangat berbeda bahkan untuk data input yang sama."
        },
        {
          question: "Algoritma hash apa yang harus saya gunakan untuk kebutuhan tertentu?",
          answer: "Algoritma terbaik tergantung pada kebutuhan spesifik Anda:<br><strong>Penggunaan umum dan keamanan tinggi</strong>: SHA-256 menawarkan keseimbangan yang baik antara keamanan dan kinerja.<br><strong>Aplikasi blockchain</strong>: SHA-256 (Bitcoin) atau Keccak-256 (Ethereum) adalah standar industri.<br><strong>Data yang sangat sensitif</strong>: SHA-512 atau SHA3-512 memberikan keamanan tertinggi.<br><strong>Aplikasi yang mengutamakan kinerja</strong>: BLAKE2 atau BLAKE3 menawarkan keamanan dan kecepatan yang luar biasa.<br><strong>Kompatibilitas dengan sistem lama</strong>: Mungkin memerlukan SHA-1 atau MD5, tetapi ketahuilah batasan keamanannya.<br><strong>Checksum file</strong>: CRC32 cepat tetapi hanya untuk deteksi kesalahan, tidak memberikan keamanan; gunakan SHA-256 untuk checksum yang aman.<br>Jika ragu, SHA-256 adalah pilihan default yang andal untuk sebagian besar aplikasi modern yang membutuhkan keamanan. Coba <a href='https://www.ufreetools.com/tools/hash-calculator' target='_blank'>kalkulator hash</a> kami, eksperimen dengan berbagai algoritma dan bandingkan outputnya."
        }
      ]
    },
    guide: {
      title: "Panduan Langkah Demi Langkah Menggunakan Kalkulator Hash",
      intro: "Ikuti langkah-langkah sederhana ini untuk menghasilkan dan memverifikasi hash untuk teks atau file:",
      step1: "<strong>Pilih jenis input</strong>: Pilih antara opsi input \"Teks\" atau \"File\" berdasarkan konten yang ingin di-hash. Input teks cocok untuk string, password, atau data kecil, sedangkan input file memungkinkan pemrosesan seluruh file dari jenis apa pun.",
      step2: "<strong>Pilih algoritma hash</strong>: Pilih <strong>algoritma hash</strong> yang sesuai dari menu dropdown. Untuk penggunaan umum dan keamanan tinggi, SHA-256 direkomendasikan. Untuk kompatibilitas dengan sistem tertentu, Anda mungkin perlu memilih MD5, SHA-1, atau algoritma lain.",
      step3: "<strong>Masukkan data Anda</strong>: Untuk input teks, ketik atau tempel teks Anda di bidang input. Untuk input file, klik area unggahan atau seret dan lepas file Anda. <strong>Fungsi hash</strong> akan memproses input ini dan menghasilkan digest unik.",
      step4: "<strong>Atur opsi encoding</strong>: Jika menggunakan input teks, pilih encoding karakter yang sesuai (UTF-8 adalah yang paling umum dan direkomendasikan untuk sebagian besar teks). Ini memastikan teks diinterpretasikan dengan benar sebelum di-hash.",
      step5: "<strong>Hasilkan hash</strong>: Klik tombol \"Hitung Hash\" untuk memproses input Anda dan menghasilkan <strong>digest hash</strong>. Alat akan menghitung nilai hash menggunakan algoritma yang dipilih dan menampilkan hasilnya.",
      step6: "<strong>Lihat dan salin hasil</strong>: Hash yang dihitung akan ditampilkan dalam berbagai format (heksadesimal dan Base64). Gunakan tombol salin di samping setiap format untuk menyalin nilai hash ke clipboard, untuk digunakan di aplikasi lain.",
      step7: "<strong>Verifikasi hash (opsional)</strong>: Untuk memverifikasi terhadap hash yang ada, masukkan hash referensi di bagian verifikasi di bawah hasil. Sistem akan membandingkannya secara otomatis dengan hash yang Anda hitung dan menunjukkan apakah cocok.",
      additionalTips: "Untuk file besar, pemrosesan mungkin membutuhkan waktu, tergantung pada kinerja perangkat Anda. Ingatlah bahwa pemrosesan dilakukan sepenuhnya di browser Anda, sehingga data Anda tidak pernah meninggalkan komputer Anda."
    },
    relatedTools: {
      title: "Alat terkait yang mungkin berguna",
      tools: [
        {
          name: "Pembuat Password",
          description: "Buat password yang kuat dan aman untuk akun Anda",
          url: "https://www.ufreetools.com/tools/password-generator"
        },
        {
          name: "Pengkode/Decode Teks",
          description: "Konversi teks antara berbagai encoding seperti Base64, URL, dan HTML",
          url: "https://www.ufreetools.com/tools/text-encoder-decoder"
        },
        {
          name: "Konverter File",
          description: "Konversi file antara berbagai format",
          url: "https://www.ufreetools.com/tools/file-converter"
        }
      ]
    },
    conclusion: "Kalkulator hash menyediakan cara yang kuat dan mudah digunakan untuk memanfaatkan fungsi hash kriptografi untuk berbagai aplikasi, dari verifikasi integritas file dasar hingga implementasi keamanan tingkat lanjut. Dengan mendukung berbagai algoritma standar industri dan antarmuka yang ramah pengguna, alat ini menjembatani konsep kriptografi yang kompleks dengan aplikasi praktis sehari-hari. Baik Anda seorang pengembang yang mengimplementasikan fitur keamanan, profesional TI yang memverifikasi integritas perangkat lunak, atau sekadar penasaran tentang cara kerja fungsi hash, kalkulator ini memberi Anda akses instan ke kemampuan kriptografi yang kuat langsung di browser Anda. Di dunia digital di mana integritas dan keamanan data menjadi perhatian utama baik di ranah pribadi maupun profesional, memahami dan memanfaatkan fungsi hash menjadi semakin penting."
  },
  listGroups: {
    common: 'Algoritma Umum',
    sha2: 'Keluarga SHA-2',
    sha3: 'Keluarga SHA-3',
    other: 'Algoritma Lain'
  },
  metaTitle: 'Kalkulator Hash Online - Hasilkan dan Verifikasi Nilai Hash Kriptografi',
  metaDescription: 'Alat kalkulator hash online gratis untuk menghasilkan dan memverifikasi hash kriptografi untuk teks atau file. Mendukung berbagai algoritma termasuk {algorithms}.'
}