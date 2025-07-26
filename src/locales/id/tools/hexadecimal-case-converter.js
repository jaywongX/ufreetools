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
  }
};