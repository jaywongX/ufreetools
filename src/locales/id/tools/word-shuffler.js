export default {
  name: 'Pengacak Teks',
  description: 'Acak kata, kalimat, atau baris dalam teks secara acak sambil mempertahankan format',
  inputLabel: 'Masukkan Teks',
  inputPlaceholder: 'Masukkan atau tempel teks di sini untuk diacak...',
  outputLabel: 'Hasil Pengacakan',
  shuffleMode: 'Mode Pengacakan',

  modes: {
    word: 'Kata',
    sentence: 'Kalimat',
    line: 'Baris'
  },

  preserveOptions: 'Opsi Penyimpanan',
  preserveCapitalization: 'Pertahankan Kapitalisasi',
  preservePunctuation: 'Pertahankan Tanda Baca',
  shuffleButton: 'Acak',
  copyButton: 'Salin Hasil',
  clearButton: 'Hapus Semua',
  copiedMessage: 'Tersalin ke clipboard!',
  tagline: 'Alat randomisasi teks paling canggih di dunia',
  wordCount: 'kata',
  importButton: 'Impor File',
  clearInputButton: 'Hapus Input',
  clearOutputButton: 'Hapus Output',
  downloadButton: 'Unduh',
  useExampleButton: 'Gunakan Contoh',
  advancedOptions: 'Opsi Lanjutan',
  delimiterOptions: 'Opsi Pemisah',
  wordDelimiters: 'Pemisah Kata',
  wordDelimitersHint: 'Karakter yang digunakan untuk memisahkan kata',
  sentenceDelimiters: 'Pemisah Kalimat',
  sentenceDelimitersHint: 'Karakter yang digunakan untuk mengakhiri kalimat',
  additionalOptions: 'Opsi Tambahan',
  repeatCount: 'Jumlah Pengulangan',
  repeatCountHint: 'Hasilkan beberapa versi acak',
  shuffleGroup: 'Ukuran Grup Pengacakan',
  shuffleGroupHint: 'Acak kata dalam grup dengan ukuran tertentu',
  removeRepeatedWords: 'Hapus Kata Berulang',
  preserveSpacing: 'Pertahankan Spasi',
  examplesTitle: 'Contoh',
  useThisExample: 'Gunakan Contoh Ini',
  helpTitle: 'Bantuan & Informasi',
  whatIsTitle: 'Apa itu Pengacak Teks?',
  whatIsDescription: 'Pengacak Teks adalah alat yang dapat merandomisasi urutan kata, kalimat, baris, karakter, atau paragraf dalam teks. Ini menggunakan algoritma kompleks untuk memastikan hasil yang benar-benar acak sambil mempertahankan opsi format yang Anda pilih, seperti kapitalisasi dan tanda baca.',
  howToUseTitle: 'Cara Menggunakan Alat Ini',
  tipsTitle: 'Tips Penggunaan Terbaik',

  modes: {
    word: 'Kata',
    sentence: 'Kalimat',
    line: 'Baris',
    character: 'Karakter',
    paragraph: 'Paragraf'
  },

  howToUseSteps: [
    'Masukkan atau tempel teks Anda di kotak input sebelah kiri.',
    'Pilih mode pengacakan dan opsi yang Anda butuhkan di bawah.',
    'Klik tombol "Acak" untuk menghasilkan teks acak.',
    'Hasil akan ditampilkan di kotak output sebelah kanan.',
    'Gunakan tombol salin atau unduh untuk menyimpan hasil Anda.'
  ],

  tips: [
    'Untuk latihan menulis kreatif, coba gunakan mode kata dengan mempertahankan kapitalisasi tetapi menghapus tanda baca.',
    'Untuk pengujian tata letak, gunakan mode kalimat dan aktifkan semua opsi penyimpanan untuk mempertahankan teks yang dapat dibaca tetapi acak.',
    'Gunakan mode karakter untuk membuat sandi atau kode yang aman berdasarkan input teks.',
    'Fitur pengacakan grup memungkinkan Anda menjaga kata-kata terkait tetap bersama sambil tetap merandomisasi teks secara keseluruhan.',
    'Butuh beberapa variasi? Atur jumlah pengulangan untuk menghasilkan beberapa versi acak sekaligus.'
  ],

  examples: {
    basic: {
      title: 'Pengacakan Kata Dasar',
      description: 'Randomisasi kata sederhana sambil mempertahankan tanda baca dan kapitalisasi',
      input: 'Rubah cokelat yang lincah melompati anjing yang malas. Kelima penyihir tinju melompat dengan cepat.',
      output: 'Cokelat rubah yang lincah anjing melompati yang malas. Penyihir melompat dengan cepat kelima tinju.'
    },
    sentence: {
      title: 'Pengacakan Kalimat',
      description: 'Mengacak urutan kalimat lengkap',
      input: 'Kalimat pertama ada di sini. Ini adalah kalimat kedua. Ini kalimat ketiga. Terakhir, kita punya kalimat keempat.',
      output: 'Ini kalimat ketiga. Kalimat pertama ada di sini. Terakhir, kita punya kalimat keempat. Ini adalah kalimat kedua.'
    },
    creative: {
      title: 'Penyusunan Kreatif',
      description: 'Hasilkan teks kreatif baru dengan mengacak kata tanpa batasan format',
      input: 'Puisi adalah penciptaan berirama dari keindahan kata-kata. Ini adalah pengungkapan perasaan yang menurut penyair bersifat internal dan pribadi, tetapi pembaca mengenalinya sebagai milik mereka sendiri.',
      output: 'Kata-kata berirama adalah keindahan penciptaan puisi. Penyair menurut pengungkapan adalah perasaan internal yang pribadi dan bersifat tetapi pembaca milik mereka sendiri mengenalinya sebagai.'
    }
  },

  stepLabel: 'Langkah',
  emptyInputMessage: 'Masukkan teks untuk diacak',
  errorMessage: 'Terjadi kesalahan saat mengacak, coba mode atau opsi pengacakan yang berbeda',
  downloadFileName: 'teks_teracak.txt',

  errorMessages: {
    shuffleError: 'Kesalahan pengacakan:',
    sentenceError: 'Kesalahan pengacakan kalimat:',
    copyError: 'Kesalahan menyalin teks:'
  }
};