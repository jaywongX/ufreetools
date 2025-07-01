export default {
  name: 'Konverter Huruf Besar/Kecil Heksadesimal',
  description: 'Konversi dan format string heksadesimal antara huruf besar dan kecil, mendukung berbagai awalan, pemisah, dan opsi pengelompokan',
  
  input: {
    title: 'Input Heksadesimal',
    placeholder: 'Masukkan nilai heksadesimal...'
  },
  
  output: {
    title: 'Hasil Konversi',
    placeholder: 'Hasil konversi akan ditampilkan di sini...'
  },
  
  prefix: {
    title: 'Awalan',
    none: 'Tanpa',
  },
  
  format: {
    title: 'Format Huruf',
    uppercase: 'Huruf Besar',
    lowercase: 'Huruf Kecil'
  },
  
  separator: {
    title: 'Pemisah',
    none: 'Tanpa',
    space: 'Spasi',
    comma: 'Koma',
    colon: 'Titik Dua',
    semicolon: 'Titik Koma'
  },
  
  grouping: {
    title: 'Pengelompokan (byte)',
    none: 'Tanpa'
  },
  
  actions: {
    copy: 'Salin',
    clear: 'Hapus',
    convert: 'Konversi'
  },
  
  messages: {
    copied: 'Tersalin ke clipboard',
    copyFailed: 'Gagal menyalin',
    invalidHex: 'Nilai heksadesimal tidak valid'
  },
  
  examples: {
    title: 'Contoh',
    example1: {
      title: '"Hello World" dalam heksadesimal',
    },
    example2: {
      title: 'ASCII Hello dengan awalan 0x',
    },
    example3: {
      title: 'DEADBEEF (nilai debug umum)',
    },
    example4: {
      title: 'Format Alamat MAC',
    }
  },
  
  tips: {
    title: 'Tips',
    tip1: 'Nilai heksadesimal menggunakan karakter 0-9 dan A-F (atau a-f)',
    tip2: 'Awalan berbeda digunakan dalam konteks berbeda: 0x dalam pemrograman, # untuk warna, dll',
    tip3: 'Pengelompokan dan pemisah meningkatkan keterbacaan string heksadesimal panjang',
    tip4: 'Alamat MAC biasanya menggunakan pemisah titik dua dan pengelompokan 1 byte'
  },
  
  article: {
    title: 'Konverter Huruf Heksadesimal: Panduan Lengkap Format Konversi Heksadesimal',
    
    introduction: {
      title: 'Apa itu Konverter Huruf Heksadesimal?',
      p1: '<strong>Konverter Huruf Heksadesimal</strong> kami adalah alat khusus untuk mengkonversi string heksadesimal antara format huruf besar dan kecil, dengan opsi pemformatan tambahan. Baik Anda perlu <strong>mengkonversi heksadesimal ke huruf kecil</strong> untuk konsistensi pemrograman atau mengubah heksadesimal kecil ke huruf besar untuk keterbacaan, alat ini menyediakan solusi lengkap untuk semua kebutuhan konversi huruf heksadesimal Anda.',
      p2: 'Notasi heksadesimal (basis 16) menggunakan angka 0-9 dan huruf A-F (atau a-f) untuk merepresentasikan nilai. Pilihan antara <strong>heksadesimal huruf kecil</strong> dan besar dapat mempengaruhi keterbacaan kode, kompatibilitas, dan dalam beberapa kasus perilaku sistem. Konverter kami tidak hanya menangani konversi huruf sederhana, tetapi juga pemformatan kompleks dengan awalan, pemisah, dan pengelompokan khusus.',
      p3: 'Perdebatan tentang <strong>heksadesimal menggunakan huruf kecil atau besar</strong> umum di kalangan pengembang. Meskipun kedua format mewakili nilai yang sama, bahasa pemrograman, protokol, dan sistem berbeda mungkin lebih menyukai atau memerlukan format huruf tertentu. Alat ini menjembatani kesenjangan dengan menyediakan konversi instan antara huruf serta opsi pemformatan tambahan yang sesuai dengan berbagai spesifikasi teknis dan panduan gaya.'
    },
    
    applications: {
      title: 'Aplikasi Praktis dan Skenario Penggunaan',
      scenario1: {
        title: 'Pemrograman & Pengembangan',
        content: 'Pengembang perangkat lunak sering perlu <strong>mengkonversi heksadesimal ke representasi alfanumerik</strong> atau beralih format huruf dalam basis kode untuk konsistensi. Saat menggunakan Java, pengembang mungkin perlu <strong>mengkonversi heksadesimal ke long integer Java</strong>, di mana konsistensi huruf penting untuk keterbacaan. Alat kami menyederhanakan proses ini sambil mengikuti panduan gaya kode.'
      },
      scenario2: {
        title: 'Jaringan & Protokol Komunikasi',
        content: 'Insinyur jaringan yang menangani alamat MAC, IPv6, atau protokol lain yang menggunakan representasi heksadesimal dapat mempertahankan konsistensi dalam dokumentasi atau implementasi sistem. Banyak protokol memiliki persyaratan khusus untuk format <strong>heksadesimal huruf kecil</strong> dengan pemisah dan pengelompokan tertentu, yang dapat dengan mudah dipenuhi oleh alat kami.'
      },
      scenario3: {
        title: 'Pemformatan Kode Warna',
        content: 'Desainer web dan seniman grafis yang menggunakan kode warna heksadesimal (#RRGGBB) sering perlu <strong>mengkonversi heksadesimal ke huruf tertentu</strong> untuk alat desain berbeda atau spesifikasi CSS. Beberapa sistem desain memerlukan huruf besar untuk konsistensi merek, sementara yang lain lebih menyukai huruf kecil untuk mengikuti konvensi HTML/CSS.'
      },
      scenario4: {
        title: 'Analisis & Konversi Data',
        content: 'Analis data sering perlu mengkonversi format huruf teks di berbagai alat. Misalnya, Anda mungkin perlu <strong>mengubah sel Excel yang berisi nilai heksadesimal dari teks kecil ke huruf besar</strong>, atau mengubah output perintah Linux <strong>dari huruf kecil ke besar</strong> untuk pemrosesan lebih lanjut.'
      },
      scenario5: {
        title: 'Forensik Digital & Keamanan',
        content: 'Profesional keamanan yang menganalisis hex dump, file biner, atau data enkripsi sering memerlukan format konsisten untuk dokumentasi, perbandingan, dan analisis. Konversi antar format memungkinkan integrasi yang lebih lancar dengan berbagai alat keamanan, yang banyak mengharuskan <strong>konversi heksadesimal ke huruf kecil</strong> untuk pemrosesan yang konsisten.'
      }
    },
    
    guide: {
      title: 'Cara Menggunakan Konverter Huruf Heksadesimal',
      step1: {
        title: 'Langkah 1: Masukkan Nilai Heksadesimal Anda',
        content: 'Pertama, masukkan nilai heksadesimal apa pun di bidang input. Alat kami menerima karakter heksadesimal valid (0-9, A-F, a-f) dan pemisah umum. Baik Anda ingin <strong>mengkonversi heksadesimal ke huruf berbeda</strong> atau memformat string yang ada, mulailah dengan memasukkan nilai heksadesimal Anda.'
      },
      step2: {
        title: 'Langkah 2: Pilih Format Huruf yang Diinginkan',
        content: 'Pilih antara format huruf besar (ABCDEF) dan kecil (abcdef). Opsi ini menentukan apakah <strong>konversi heksadesimal kecil ke besar</strong> Anda akan menggunakan huruf besar atau kecil untuk merepresentasikan bagian huruf dari nilai heksadesimal.'
      },
      step3: {
        title: 'Langkah 3: Pilih Opsi Awalan',
        content: 'Jika diperlukan, pilih awalan untuk nilai heksadesimal Anda. Opsi umum termasuk 0x (untuk pemrograman), # (untuk warna), \\x (untuk urutan escape), atau h (akhiran assembly). Ini sangat berguna ketika Anda perlu <strong>mengkonversi heksadesimal ke format alfanumerik</strong> untuk bahasa pemrograman atau sistem tertentu.'
      },
      step4: {
        title: 'Langkah 4: Atur Pemisah dan Pengelompokan',
        content: 'Pilih karakter pemisah (spasi, koma, titik dua, titik koma) dan ukuran pengelompokan untuk memformat output Anda. Misalnya, alamat MAC biasanya menggunakan pemisah titik dua dan pengelompokan 1 byte. Langkah ini penting ketika Anda perlu <strong>mengkonversi heksadesimal ke format panjang</strong> dengan pengelompokan tertentu untuk keterbacaan.'
      },
      step5: {
        title: 'Langkah 5: Salin dan Gunakan Hasil Konversi Anda',
        content: 'Setelah konversi selesai, nilai heksadesimal yang diformat akan ditampilkan di bidang output. Klik tombol "Salin" untuk menyalin hasil ke clipboard, siap digunakan untuk kode, dokumen, atau aplikasi lain Anda. Baik Anda perlu <strong>mengkonversi heksadesimal ke huruf kecil</strong> atau menerapkan format khusus dengan pengelompokan dan awalan, sekarang Anda memiliki heksadesimal yang diformat dengan sempurna.'
      }
    },
    
    faq: {
      title: 'Pertanyaan Umum',
      q1: 'Apa perbedaan antara heksadesimal huruf kecil dan besar?',
      a1: 'Perbedaan antara <strong>heksadesimal huruf kecil dan besar</strong> terletak pada cara huruf A-F (untuk mewakili nilai 10-15) ditampilkan. Secara fungsional, "1a2b3c" dan "1A2B3C" mewakili nilai yang sama. Namun, banyak bahasa pemrograman dan sistem memiliki konvensi gaya atau persyaratan tertentu untuk huruf. Misalnya, kode warna CSS secara tradisional menggunakan huruf kecil, sementara beberapa bahasa assembly lebih menyukai huruf besar untuk keterbacaan.',
      
      q2: 'Bagaimana cara mengkonversi heksadesimal ke karakter alfanumerik?',
      a2: 'Heksadesimal sendiri sudah alfanumerik, menggunakan angka (0-9) dan huruf (A-F). Jika Anda ingin <strong>mengkonversi heksadesimal ke huruf di luar A-F</strong>, Anda mungkin mengacu pada konversi ASCII atau Unicode, yang merupakan proses berbeda yang menginterpretasikan nilai heksadesimal sebagai kode karakter. Alat ini berfokus pada konversi huruf dan pemformatan representasi heksadesimal standar, bukan pengkodean/dekoding teks.',
      
      q3: 'Mengapa saya perlu mengkonversi heksadesimal ke huruf kecil atau besar?',
      a3: 'Ada beberapa alasan Anda mungkin perlu <strong>mengkonversi heksadesimal ke huruf kecil</strong> atau besar:<ul><li>Kepatuhan gaya kode (banyak bahasa memiliki panduan gaya yang menentukan huruf)</li><li>Persyaratan sistem (beberapa API atau protokol memerlukan format huruf tertentu)</li><li>Preferensi keterbacaan (huruf besar lebih terlihat dalam dokumentasi)</li><li>Pemrosesan data yang konsisten (saat membandingkan atau menganalisis nilai heksadesimal)</li></ul>Alat kami membuat konversi ini sederhana dan efisien.',

      q4: 'Bagaimana menggunakan konverter huruf heksadesimal untuk mengkonversi heksadesimal ke long integer di Java?',
      a4: 'Untuk <strong>mengkonversi heksadesimal ke long integer di Java</strong>, pertama pastikan string heksadesimal Anda diformat dengan benar (biasanya dengan awalan 0x dan huruf kecil) menggunakan alat kami. Kemudian, Anda dapat menyalin hasilnya dan menguraikannya di Java menggunakan <code>Long.parseLong(hexString.substring(2), 16)</code> untuk string berawalan 0x, atau <code>Long.parseLong(hexString, 16)</code> untuk string tanpa awalan. Alat kami membantu memastikan string heksadesimal Anda diformat dengan benar sebelum pemrosesan Java.',

      q5: 'Bisakah saya mengkonversi beberapa nilai heksadesimal sekaligus?',
      a5: 'Ya, Anda dapat memproses beberapa nilai heksadesimal sekaligus dengan memasukkan pemisah yang sesuai di bidang input. Jika Anda perlu <strong>mengkonversi teks kecil ke huruf besar di Excel yang berisi banyak nilai heksadesimal</strong>, Anda dapat menyalin seluruh kolom, mengkonversinya di sini, lalu menempelkan hasilnya kembali. Alat akan menerapkan format pilihan Anda (huruf, awalan, pemisah, dan pengelompokan) ke semua karakter heksadesimal valid dalam input.'
    },

    resources: {
      title: 'Sumber Daya Tambahan',
      resource1: '<a href="https://en.wikipedia.org/wiki/Hexadecimal" target="_blank" rel="noopener noreferrer">Wikipedia: Notasi Heksadesimal</a> - Informasi latar belakang komprehensif tentang notasi heksadesimal.',
      resource2: '<a href="https://www.ietf.org/rfc/rfc5952.txt" target="_blank" rel="noopener noreferrer">IETF RFC 5952</a> - Rekomendasi untuk representasi teks alamat IPv6, termasuk penggunaan heksadesimal huruf kecil.'
    },  
    
    conclusion: {
      title: 'Kesimpulan',
      content: '<strong>Konverter Huruf Heksadesimal</strong> kami menyediakan solusi serbaguna untuk semua kebutuhan pemformatan heksadesimal. Baik Anda perlu <strong>mengkonversi heksadesimal ke huruf kecil</strong>, menerapkan awalan khusus, memformat string, atau menggunakan pemisah dan pengelompokan khusus, alat kami memenuhi kebutuhan Anda.'
    }
  }
};