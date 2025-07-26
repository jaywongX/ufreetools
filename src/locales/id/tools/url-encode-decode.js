export default {
  name: 'Pengkodean & Dekode URL',
  description: 'Pengkodean URL mengubah karakter khusus ke format yang dapat diterima URL, sering digunakan untuk menangani parameter URL dan pengiriman formulir.',

  options: {
    operationType: 'Jenis Operasi',
    encodeMode: 'Mode Pengkodean'
  },

  encodeOptions: {
    standard: 'Pengkodean Standar (encodeURI)',
    component: 'Pengkodean Komponen (encodeURIComponent)',
    full: 'Pengkodean Penuh (semua karakter)',
    standardDescription: 'Mengkodekan seluruh URL, mempertahankan karakter struktur URL',
    componentDescription: 'Cocok untuk parameter URL, mengkodekan semua karakter khusus',
    fullDescription: 'Mengkodekan semua karakter non-alfanumerik, termasuk spasi (diubah menjadi %20 bukan +)'
  },

  actions: {
    encode: 'Kodekan URL',
    decode: 'Dekodekan URL',
    clear: 'Bersihkan',
    copyResult: 'Salin Hasil'
  },

  input: {
    textToEncode: 'Teks yang akan dikodekan',
    textToDecode: 'Teks yang akan didekodekan',
    encodePlaceholder: 'Masukkan URL atau teks untuk dikodekan...',
    decodePlaceholder: 'Masukkan URL atau teks untuk didekodekan...'
  },

  output: {
    encodeResult: 'Hasil Pengkodean',
    decodeResult: 'Hasil Dekode'
  },

  messages: {
    copied: '(Tersalin',
    error: 'Error: {message}',
    decodeError: 'Gagal mendekode: "{text}"',
    copyFailed: 'Gagal menyalin, silakan salin secara manual'
  },

  referenceTable: {
    title: 'Tabel Referensi Pengkodean Karakter URL Umum',
    showTable: 'Tampilkan Tabel',
    hideTable: 'Sembunyikan Tabel',
    character: 'Karakter',
    encoded: 'Pengkodean URL',
    description: 'Keterangan',
    descriptions: {
      space: 'Spasi',
      exclamation: 'Tanda seru',
      doubleQuote: 'Tanda kutip ganda',
      hash: 'Tanda pagar',
      dollar: 'Tanda dolar',
      percent: 'Persen',
      ampersand: 'Tanda dan',
      singleQuote: 'Tanda kutip tunggal',
      leftParenthesis: 'Tanda kurung buka',
      rightParenthesis: 'Tanda kurung tutup',
      asterisk: 'Tanda bintang',
      plus: 'Tanda plus',
      comma: 'Koma',
      slash: 'Garis miring',
      colon: 'Titik dua',
      semicolon: 'Titik koma',
      lessThan: 'Tanda kurang dari',
      equals: 'Tanda sama dengan',
      greaterThan: 'Tanda lebih dari',
      questionMark: 'Tanda tanya',
      at: 'Tanda at',
      leftBracket: 'Tanda kurung siku buka',
      backslash: 'Garis miring terbalik',
      rightBracket: 'Tanda kurung siku tutup',
      caret: 'Tanda sisip',
      backtick: 'Tanda kutip terbalik',
      leftBrace: 'Tanda kurung kurawal buka',
      pipe: 'Garis vertikal',
      rightBrace: 'Tanda kurung kurawal tutup',
      tilde: 'Tanda tilde',
      chinese: 'Karakter Tionghoa dalam UTF-8'
    }
  }
};