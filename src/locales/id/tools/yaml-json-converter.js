export default {
  name: 'Konverter YAML-JSON',
  description: 'Konversi antara format YAML dan JSON dengan opsi yang dapat disesuaikan',

  input: {
    title: 'Input',
    yamlPlaceholder: 'Masukkan YAML di sini...',
    jsonPlaceholder: 'Masukkan JSON di sini...',
    loadSample: 'Muat Contoh',
    clearInput: 'Hapus Input',
    uploadFile: 'Unggah File'
  },

  output: {
    title: 'Output',
    copyOutput: 'Salin Output',
    downloadOutput: 'Unduh Output',
    clearOutput: 'Hapus Output'
  },

  options: {
    conversionMode: 'Mode Konversi',
    jsonToYaml: 'JSON ke YAML',
    yamlToJson: 'YAML ke JSON',
    formatOutput: 'Format Output',
    indentSize: 'Ukuran Indentasi',
    quoteKeys: 'Tanda Kutip untuk Kunci Objek',
    sortKeys: 'Urutkan Kunci Secara Alfabetis',
    flowStyle: 'Gaya Aliran YAML',
    jsonCompatible: 'Kompatibel dengan JSON',
    singleQuotes: 'Gunakan Tanda Kutip Tunggal',
    includeSchema: 'Sertakan Skema',
    preserveKeyOrder: 'Pertahankan Urutan Kunci'
  },

  flowStyles: {
    block: 'Gaya Blok',
    flow: 'Gaya Aliran',
    auto: 'Otomatis'
  },

  validation: {
    validate: 'Validasi Sebelum Konversi',
    validInput: '{format} valid',
    invalidInput: '{format} tidak valid: {error}',
    checkSyntax: 'Periksa Sintaks'
  },

  actions: {
    convert: 'Konversi',
    swap: 'Tukar Format',
    beautify: 'Rapikan',
    minify: 'Kompres'
  },

  messages: {
    conversionSuccess: 'Konversi berhasil',
    conversionFailed: 'Konversi gagal: {error}',
    copySuccess: 'Tersalin ke clipboard',
    downloadSuccess: 'File berhasil diunduh',
    emptyInput: 'Masukkan konten untuk dikonversi',
    invalidYaml: 'Sintaks YAML tidak valid',
    invalidJson: 'Sintaks JSON tidak valid'
  }
};