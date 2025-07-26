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

  // Tambahkan konten berikut ke file terjemahan yang ada
  number: 'Angka',

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
};