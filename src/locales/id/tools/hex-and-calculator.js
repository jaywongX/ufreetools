export default {
  name: 'Kalkulator Operasi AND Heksadesimal',
  description: 'Melakukan operasi bitwise AND pada bilangan heksadesimal dan menampilkan hasil dalam berbagai format.',
  
  // Label input
  firstNumber: 'Bilangan heksadesimal pertama',
  secondNumber: 'Bilangan heksadesimal kedua',
  enterHex: 'Masukkan nilai heksadesimal (tanpa awalan 0x)',
  invalidHex: 'Nilai heksadesimal tidak valid',
  
  // Operasi
  calculate: 'Hitung',
  import: 'Impor',
  save:'Simpan',
  copy:'Salin',
  paste:'Tempel',
  
  // Hasil
  result: 'Hasil',
  decimal: 'Desimal',
  binary: 'Biner',
  copied: 'Tersalin!',
  noResult: 'Masukkan nilai dan klik tombol hitung untuk melihat hasil',
  
  // Penjelasan
  explanation: {
    title: 'Cara kerja operasi bitwise AND',
    content: 'Operasi bitwise AND membandingkan setiap bit dari operand pertama dengan bit yang sesuai pada operand kedua. Jika kedua bit bernilai 1, maka bit hasil akan bernilai 1. Jika tidak, bit hasil akan bernilai 0.',
    example: 'Penjelasan perhitungan'
  },
  
  // Contoh
  examples: {
    title: 'Contoh',
    example1: {
      description: 'Operasi AND dasar',
      value1: 'FF',
      value2: '0F',
      result: '0F'
    },
    example2: {
      description: 'Aplikasi bit mask',
      value1: 'ABCD',
      value2: 'FF00',
      result: 'AB00'
    },
    commonMask: 'Mask umum: 0xFF & 0x0F',
    permissionCheck: 'Pemeriksaan izin: 0xA5 & 0x80',
    bitClearing: 'Pembersihan bit: 0xFFFF & 0xFF00',
    evenCheck: 'Pemeriksaan genap: 0x42 & 0x01'
  },
  
  // Dokumentasi
  documentation: {
    title: 'Kalkulator Operasi AND Heksadesimal: Panduan Lengkap',
    introduction: 'Kalkulator operasi AND heksadesimal adalah alat untuk melakukan operasi bitwise AND pada bilangan heksadesimal, umum digunakan dalam pemrograman dan desain elektronik digital.',
    
    whatIs: {
      title: 'Apa itu operasi bitwise AND?',
      paragraph1: 'Operasi bitwise AND adalah operasi biner yang mengambil dua pola bit dengan panjang sama dan melakukan operasi logika AND pada setiap pasangan bit yang sesuai. Jika kedua bit bernilai 1, maka bit hasil akan bernilai 1, jika tidak bit hasil bernilai 0.',
      paragraph2: 'Operasi ini sangat mendasar dalam berbagai skenario komputasi, termasuk operasi masking, manipulasi bit, dan pemeriksaan status bit tertentu.'
    },
    
    useCases: {
      title: 'Kasus penggunaan umum operasi AND heksadesimal',
      masks: {
        title: 'Bit masking',
        description: 'Menggunakan operasi AND untuk mengekstrak atau mengisolasi bit tertentu dalam nilai dengan menyembunyikan bit yang tidak diinginkan.'
      },
      permissions: {
        title: 'Pemeriksaan izin',
        description: 'Menentukan apakah bit izin tertentu diatur dalam field bit izin.'
      },
      flagsCheck: {
        title: 'Pemeriksaan status flag',
        description: 'Memeriksa apakah flag tertentu diatur dalam register status atau variabel flag.'
      },
      evenOdd: {
        title: 'Tes paritas',
        description: 'Menggunakan operasi AND dengan 1 untuk menguji apakah suatu bilangan genap atau ganjil.'
      },
      bitClearing: {
        title: 'Pembersihan bit',
        description: 'Menggunakan operasi AND dengan mask untuk membersihkan bit tertentu sambil mempertahankan bit lainnya.'
      }
    },
    
    howToUse: {
      title: 'Cara menggunakan kalkulator operasi AND heksadesimal',
      step1: 'Masukkan bilangan heksadesimal pertama (tanpa awalan "0x")',
      step2: 'Masukkan bilangan heksadesimal kedua (tanpa awalan "0x")',
      step3: 'Klik tombol "Hitung"',
      step4: 'Lihat hasil dalam format heksadesimal, desimal, dan biner',
      step5: 'Gunakan tombol salin untuk menyalin hasil dalam format apa pun ke clipboard'
    },
    
    tips: {
      title: 'Tips penggunaan operasi AND heksadesimal',
      tip1: 'Nol di depan diabaikan dalam perhitungan, tetapi hasil akan di-padding sesuai input terpanjang',
      tip2: 'Untuk operasi masking, gunakan FF (atau urutan F) pada posisi yang ingin dipertahankan dan 00 pada posisi yang ingin dibersihkan',
      tip3: 'Untuk memeriksa apakah bit tertentu diatur, lakukan operasi AND dengan nilai yang hanya mengatur bit tersebut (misalnya, AND dengan 0x08 untuk memeriksa bit ke-4)',
      tip4: 'Ingatlah bahwa setiap digit heksadesimal mewakili 4 bit (nibble)',
      tip5: 'Saat menangani izin atau flag, pertahankan referensi tentang apa yang diwakili oleh setiap bit'
    }
  },
  quickExamples: 'Contoh cepat',
  operation: 'Operasi',
  operations: {
    and: 'AND',
    or: 'OR',
    xor: 'XOR',
    not: 'NOT',
    shiftLeft: 'Geser kiri (<<)',
    shiftRight: 'Geser kanan (>>)'
  },
  input: 'Nilai input',
  chainWith: 'Perhitungan berantai',
  importFromFile: 'Impor dari file',
  noResult: 'Masukkan nilai dan klik hitung untuk melihat hasil',
  bitVisualization: 'Visualisasi bit',
  inputNumbers: 'Masukkan angka heksadesimal',
  addNumber: 'Tambahkan angka lain',
  number: 'Angka',
  // Tambahkan konten berikut ke file terjemahan yang ada
article: {
  title: 'Kalkulator Operasi AND Heksadesimal: Panduan Lengkap',
  introduction: {
    title: 'Memahami Operasi AND Heksadesimal',
    content: [
      'Kalkulator operasi AND heksadesimal adalah alat khusus yang dirancang untuk melakukan operasi bitwise AND pada bilangan heksadesimal. Operasi ini membandingkan setiap posisi bit dalam dua atau lebih nilai heksadesimal dan menghasilkan hasil di mana bit hasil hanya bernilai 1 jika semua bit yang sesuai dalam operand bernilai 1.',
      'Operasi bitwise AND bersifat fundamental dalam ilmu komputer, terutama saat menangani data biner, antarmuka perangkat keras, flag izin, dan tugas pemrograman tingkat rendah lainnya. Representasi heksadesimal membuat operasi ini lebih mudah dibaca dan dikelola oleh pengembang dan insinyur perangkat keras.',
      'Kalkulator operasi AND heksadesimal kami mendukung beberapa nilai input, menyediakan cara mudah untuk melakukan operasi AND pada beberapa bilangan heksadesimal sekaligus. Hasil ditampilkan dalam format heksadesimal, desimal, dan biner, serta menyediakan representasi visual bit-per-bit untuk membantu memahami bagaimana operasi memengaruhi setiap posisi bit.'
    ]
  },
  useCases: {
    title: 'Kasus Penggunaan Umum Operasi AND Heksadesimal',
    cases: [
      {
        title: 'Pemeriksaan Izin',
        description: 'Pengembang menggunakan operasi AND untuk memeriksa apakah bit izin tertentu diatur dalam sistem kontrol akses. Misalnya, melakukan operasi AND antara nilai izin pengguna (0xA5) dengan mask izin (0x80) dapat menentukan apakah izin tertentu diberikan.'
      },
      {
        title: 'Manipulasi Register Perangkat Keras',
        description: 'Insinyur yang menangani perangkat keras sering menggunakan operasi AND untuk membersihkan bit tertentu dalam register kontrol sambil mempertahankan bit lainnya. Dengan melakukan operasi AND dengan mask (misalnya, 0xFFFF & 0xFF00), bit tertentu dapat dibersihkan secara selektif.'
      },
      {
        title: 'Bit Masking dalam Protokol Jaringan',
        description: 'Protokol jaringan sering menggunakan operasi AND untuk mengekstrak field tertentu dari header paket data. Misalnya, melakukan operasi AND antara alamat IP dengan subnet mask dapat memisahkan bagian jaringan dari alamat.'
      },
      {
        title: 'Ekstraksi Saluran Warna',
        description: 'Programer grafis menggunakan operasi AND untuk memisahkan saluran warna tertentu dari nilai warna heksadesimal. Misalnya, 0x00FF00 & 0xFFFFFF dapat mengekstrak saluran hijau dari warna RGB.'
      },
      {
        title: 'Pengujian Flag dalam Pemrograman Sistem',
        description: 'Programer sistem memanfaatkan operasi AND untuk menguji bit flag tertentu dalam register status. Ini sangat penting untuk menentukan status perangkat keras atau konfigurasi pengaturan.'
      }
    ]
  },
  faq: {
    title: 'Pertanyaan Umum tentang Operasi AND Heksadesimal',
    questions: [
      {
        question: 'Apa itu operasi bitwise AND?',
        answer: 'Operasi bitwise AND membandingkan setiap posisi bit dari dua bilangan biner dan menghasilkan bilangan biner baru di mana setiap bit hanya bernilai 1 jika bit yang sesuai dalam kedua operand bernilai 1, jika tidak bit hasil bernilai 0. Saat menangani bilangan heksadesimal, setiap digit heksadesimal mewakili 4 bit biner, membuat representasi lebih ringkas.'
      },
      {
        question: 'Mengapa menggunakan heksadesimal bukan biner dalam operasi bit?',
        answer: 'Notasi heksadesimal lebih ringkas daripada biner (satu digit heksadesimal mewakili 4 bit biner) sambil tetap mempertahankan hubungan yang jelas dengan biner. Ini membuat nilai heksadesimal lebih mudah dibaca, ditulis, dan dikomunikasikan, terutama untuk angka besar yang umum digunakan dalam komputasi dan pemrograman.'
      },
      {
        question: 'Apakah kalkulator operasi AND heksadesimal dapat menangani lebih dari dua input?',
        answer: 'Ya, kalkulator kami mendukung beberapa input. Ketika diberikan lebih dari dua nilai, operasi AND akan dimulai dari nilai pertama dan diterapkan secara berurutan ke semua nilai berikutnya. Ini berguna untuk operasi masking kompleks yang memerlukan beberapa kondisi.'
      },
      {
        question: 'Apa perbedaan antara logical AND dan bitwise AND?',
        answer: 'Logical AND (&&) mengevaluasi ekspresi sebagai benar atau salah, memperlakukan operand sebagai nilai boolean tunggal. Bitwise AND (&) bekerja pada setiap posisi bit individual, membandingkan bit yang sesuai antara operand. Kalkulator operasi AND heksadesimal kami melakukan operasi bitwise AND.'
      },
      {
        question: 'Apakah ada batasan ukuran bilangan heksadesimal yang dapat digunakan?',
        answer: 'Kalkulator mendukung presisi angka JavaScript standar, biasanya memungkinkan bilangan bulat hingga 53 bit. Untuk sebagian besar aplikasi praktis seperti manipulasi register atau operasi flag, ini sudah cukup.'
      },
      {
        question: 'Bagaimana cara menafsirkan visualisasi biner dalam hasil?',
        answer: 'Visualisasi biner menunjukkan dekomposisi bit-per-bit dari setiap nilai input dan hasil operasi AND. Bit yang ditampilkan sebagai "1" (disorot) berarti bit tersebut aktif, sedangkan "0" berarti tidak aktif. Representasi visual ini membantu Anda memahami secara tepat posisi bit mana yang terpengaruh oleh operasi AND.'
      }
    ]
  },
  tutorial: {
    title: 'Panduan Langkah Demi Langkah Menggunakan Kalkulator Operasi AND Heksadesimal',
    steps: [
      {
        title: 'Masukkan nilai heksadesimal pertama',
        description: 'Masukkan bilangan heksadesimal di kolom input pertama. Anda tidak perlu menyertakan awalan "0x" karena sudah disediakan. Misalnya, masukkan "FF" untuk nilai heksadesimal FF (desimal 255).'
      },
      {
        title: 'Masukkan nilai heksadesimal kedua',
        description: 'Masukkan bilangan heksadesimal lain di kolom kedua. Misalnya, masukkan "0F" untuk nilai heksadesimal 0F (desimal 15).'
      },
      {
        title: 'Tambahkan lebih banyak nilai (opsional)',
        description: 'Jika operasi Anda memerlukan lebih dari dua nilai, klik tombol "+ Tambahkan angka lain" untuk menambahkan kolom input tambahan. Masukkan nilai heksadesimal di setiap kolom baru.'
      },
      {
        title: 'Klik Hitung',
        description: 'Tekan tombol "Hitung" untuk melakukan operasi bitwise AND pada semua nilai input. Kalkulator akan memproses nilai-nilai ini secara berurutan, menerapkan operasi AND di antara setiap nilai.'
      },
      {
        title: 'Lihat hasil',
        description: 'Lihat hasil yang ditampilkan dalam berbagai format: heksadesimal, desimal, dan biner. Misalnya, hasil FF & 0F akan menjadi 0F (desimal 15). Bagian visualisasi menunjukkan secara tepat bit mana yang dipertahankan dalam hasil.'
      },
      {
        title: 'Salin atau gunakan hasil',
        description: 'Klik tombol salin di samping format hasil apa pun untuk menyalin nilai tersebut ke clipboard. Anda dapat menempelkannya ke kode, dokumen, atau untuk perhitungan lebih lanjut.'
      }
    ],
    advancedTips: {
      title: 'Tips Lanjutan untuk Operasi AND Heksadesimal',
      tips: [
        'Gunakan contoh cepat untuk menguji pola bit masking umum seperti 0xFF & 0x0F atau 0xA5 & 0x80.',
        'Untuk operasi kompleks, Anda dapat merantai beberapa nilai heksadesimal dengan menambahkan lebih banyak kolom input alih-alih melakukan perhitungan terpisah.',
        'Perhatikan visualisasi biner untuk memahami secara tepat bit mana yang terpengaruh oleh operasi AND Anda.',
        'Saat bekerja dengan register status atau bit flag, gunakan hasil biner untuk memastikan posisi bit tertentu terisolasi dengan benar.',
        'Ingatlah bahwa operasi AND hanya dapat menghasilkan bit 1 di posisi di mana semua input memiliki bit 1; ini berguna untuk membersihkan bit tetapi tidak untuk mengatur bit.',
        'Anda dapat menggunakan representasi heksadesimal untuk notasi yang lebih ringkas, sementara visualisasi biner membantu memahami operasi tingkat bit.'
      ]
    }
  }
},
  // Label tombol
  remove: 'Hapus',
  removeButton: 'Hapus input ini',
  importTitle: 'Impor dari file',
  saveTitle: 'Simpan ke file',
  copyTitle: 'Salin semua input',
  pasteTitle: 'Tempel dari clipboard',
  saveResult: 'Simpan hasil',
  saveResultTitle: 'Simpan hasil ke file',
  copyResult: 'Salin hasil',
  copyResultTitle: 'Salin semua hasil',
  copyAction: 'Salin',
  
  // Tips dan pesan
  importError: 'Error mengimpor file, pastikan format file benar',
  inputsCopied: 'Semua input telah disalin ke clipboard',
  resultsCopied: 'Semua hasil telah disalin ke clipboard',
  inputs: 'Input'
}