export default {
  name: 'Alat Konversi CSV ke JSON',
  description: 'Ubah data CSV ke format JSON dengan opsi yang dapat disesuaikan',

  options: {
    delimiter: 'Pemisah',
    quote: 'Karakter kutip',
    header: 'Baris pertama sebagai header',
    dynamicTyping: 'Pengetikan dinamis',
    dynamicTypingDescription: 'Konversi string angka ke angka, "true/false" ke boolean, dll',
    skipEmptyLines: 'Lewati baris kosong',
    comments: 'Karakter komentar',
    outputFormat: 'Format output',
    indentation: 'Indentasi',
    encoding: 'Encoding',
    newline: 'Karakter baris baru',
    title: 'Opsi Konversi'
  },

  delimiters: {
    comma: 'Koma (,)',
    semicolon: 'Titik koma (;)',
    tab: 'Tab (\\t)',
    pipe: 'Pipa (|)',
    custom: 'Kustom'
  },

  formats: {
    array: 'Array objek',
    arrayOfArrays: 'Array dari array',
    keyed: 'Objek berkey',
    nested: 'Objek bersarang'
  },

  preview: {
    input: 'Input...',
    output: 'Output...',
    rawCsv: 'CSV mentah',
    parsedCsv: 'CSV yang telah diproses',
    jsonOutput: 'Output JSON',
    firstRows: '{count} baris pertama',
    showAll: 'Tampilkan semua'
  },

  actions: {
    convert: 'Konversi',
    copy: 'Salin JSON',
    download: 'Unduh JSON',
    clear: 'Bersihkan',
    uploadCsv: 'Unggah CSV',
    swap: 'Tukar input/output',
    loadExample: 'Muat contoh',
    clearInput: 'Kosongkan input',
    formatOutput: 'Format output',
    copyResult: 'Salin hasil',
    downloadResult: 'Unduh hasil',
    paste: 'Tempel',
    showOptions: 'Tampilkan opsi',
    hideOptions: 'Sembunyikan opsi',
    uploadJson: 'Unggah JSON'
  },

  results: {
    rowsProcessed: '{count} baris telah diproses',
    conversionComplete: 'Konversi selesai',
    copied: 'Telah disalin ke clipboard',
    downloaded: 'Telah diunduh',
    error: 'Error'
  },

  errors: {
    noData: 'Tidak ada data CSV untuk dikonversi',
    invalidCsv: 'Format CSV tidak valid',
    parsingFailed: 'Gagal memproses: {error}',
    missingHeader: 'Baris header tidak ada',
    invalidJson: 'Format JSON tidak valid',
    formatFailed: 'Gagal memformat: {error}',
    copyFailed: 'Gagal menyalin, silakan salin manual',
    downloadFailed: 'Gagal mengunduh',
    pasteError: 'Tidak bisa menempel dari clipboard',
    conversionFailed: 'Konversi gagal'
  },

  conversion: {
    title: 'Arah Konversi',
    csvToJson: {
      title: 'CSV ke JSON',
      delimiterLabel: 'Pemisah',
      headerLabel: 'Baris pertama sebagai header',
      dynamicTypingLabel: 'Deteksi tipe data otomatis',
      skipEmptyLinesLabel: 'Lewati baris kosong',
      convertButton: 'Konversi CSV ke JSON'
    },
    jsonToCsv: {
      title: 'JSON ke CSV',
      delimiterLabel: 'Pemisah',
      headerLabel: 'Sertakan baris header',
      quotesLabel: 'Tambahkan kutip untuk semua field',
      nestedModeLabel: 'Pilih cara menangani data bersarang',
      flat: 'Ratakan',
      stringify: 'Konversi ke string',
      ignore: 'Abaikan',
      convertButton: 'Konversi JSON ke CSV'
    }
  },

  stats: {
    processed: 'Jumlah baris yang diproses',
    fields: 'Jumlah field/kolom',
    inputSize: 'Ukuran input',
    outputSize: 'Ukuran output',
    title: 'Statistik'
  },

  messages: {
    copied: 'Telah disalin ke clipboard',
    download: 'Telah diunduh',
    error: 'Error'
  },

  formatBytes: {
    bytes: 'bytes',
    kb: 'KB',
    mb: 'MB',
    gb: 'GB',
    tb: 'TB'
  }
};