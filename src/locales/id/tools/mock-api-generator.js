export default {
  name: 'Generator Mock API',
  description: 'Hasilkan Mock API secara otomatis berdasarkan spesifikasi OpenAPI',

  options: {
    version: 'Versi OpenAPI',
    format: 'Format Output',
    includeExamples: 'Sertakan contoh respons',
    responseDynamism: 'Dinamisme Respons',
    responseType: 'Tipe Respons',
    arrayLength: 'Panjang Array',
    responseFormat: 'Format Respons'
  },

  formats: {
    json: 'JSON Server',
    express: 'Express.js',
    mockjs: 'Mock.js',
    msw: 'Mock Service Worker'
  },

  actions: {
    generate: 'Hasilkan Mock',
    preview: 'Pratinjau API',
    clear: 'Bersihkan',
    copy: 'Salin Kode',
    download: 'Unduh',
    uploadSpec: 'Unggah Spesifikasi OpenAPI',
    uploadJava: 'Unggah File Kelas Java',
    generateJson: 'Hasilkan JSON',
    generateBuilder: 'Hasilkan Builder',
    format: 'Perindah'
  },

  messages: {
    copied: 'Tersalin ke clipboard!',
    generationSuccess: 'Pembuatan Mock API berhasil',
    generationError: 'Terjadi kesalahan saat membuat Mock API',
    specRequired: 'Harap berikan spesifikasi OpenAPI',
    fileUploaded: 'Berhasil diunggah',
    parseError: 'Gagal mem-parsing kelas Java, pastikan format file benar'
  },

  help: {
    uploadHint: 'Mendukung unggahan file .java, parsing otomatis struktur kelas untuk membuat konfigurasi Mock. Belum mendukung properti objek bertingkat'
  },

  fields: {
    title: 'Definisi Field',
    addField: 'Tambah Field',
    addChildField: 'Tambah Sub Field',
    fieldName: 'Nama Field'
  },

  fieldTypes: {
    string: 'String',
    number: 'Angka',
    boolean: 'Boolean',
    date: 'Tanggal',
    name: 'Nama',
    email: 'Email',
    phone: 'Telepon',
    address: 'Alamat',
    id: 'ID',
    image: 'URL Gambar',
    array: 'Array',
    object: 'Objek'
  },

  array: {
    itemType: 'Tipe Item Array',
    arrayFields: 'Field Array'
  },

  object: {
    childFields: 'Sub Field'
  },

  responseTypes: {
    object: 'Objek Tunggal',
    array: 'Array Objek',
    custom: 'Struktur Kustom'
  },

  responseFormats: {
    dataOnly: 'Hanya Data',
    standard: 'Respons REST Standar (code, data, message)'
  },

  placeholder: {
    output: '// Data Mock yang dihasilkan akan muncul di sini'
  }
};