export default {
  name: 'Konverter cURL',
  description: 'Mengubah perintah cURL menjadi potongan kode dalam berbagai bahasa pemrograman',
  title: 'cURL ke Kode',
  subtitle: 'Konversi perintah cURL ke berbagai bahasa pemrograman untuk integrasi cepat permintaan HTTP ke proyek Anda',

  input: {
    title: 'Perintah cURL',
    placeholder: 'Masukkan perintah cURL di sini',
    parse: 'Parse cURL',
    clear: 'Kosongkan',
    examples: 'Contoh perintah:',
    options: 'Opsi Parser',
    validateCommand: 'Validasi Perintah',
    formatCurl: 'Format cURL'
  },

  options: {
    detectAuth: 'Deteksi otomatis otentikasi',
    resolveVariables: 'Parse variabel lingkungan',
    processContinuations: 'Proses kelanjutan baris (\\)',
    followRedirects: 'Ikuti pengalihan',
    preserveHeaders: 'Pertahankan semua header',
    ignoreErrors: 'Abaikan kesalahan parsing',
    noDuplicateHeaders: 'Tidak ada header duplikat (gunakan yang terakhir)'
  },

  output: {
    title: 'Output Kode',
    language: 'Bahasa Target',
    copy: 'Salin',
    copyTooltip: 'Salin ke clipboard',
    download: 'Unduh',
    beautify: 'Perindah',
    codeTitle: 'Kode {language}',
    errorTitle: 'Kesalahan Konversi',
    languages: {
      python: 'Python (requests)',
      pythonHttp: 'Python (http.client)',
      node: 'Node.js (axios)',
      nodeRequest: 'Node.js (request)',
      nodeFetch: 'Node.js (fetch)',
      java: 'Java (HttpClient)',
      javaOkHttp: 'Java (OkHttp)',
      php: 'PHP (cURL)',
      phpGuzzle: 'PHP (Guzzle)',
      go: 'Go',
      rust: 'Rust',
      swift: 'Swift',
      csharp: 'C# (HttpClient)',
      ruby: 'Ruby',
      dart: 'Dart',
      powershell: 'PowerShell',
      browser: 'Browser (fetch)',
      curl: 'cURL (terformat)',
      json: 'JSON (objek permintaan)',
      har: 'HAR (Arsip HTTP)',
      javascript: 'JavaScript (Fetch)'
    }
  },

  request: {
    title: 'Detail Permintaan',
    method: 'Metode',
    url: 'URL',
    headers: 'Header',
    body: 'Badan',
    auth: 'Otentikasi',
    options: 'Opsi',
    cookie: 'Cookie',
    queryParams: 'Parameter Kueri',
    formData: 'Data Formulir',
    visualize: 'Visualisasikan'
  },

  visualization: {
    title: 'Visualisasi Permintaan',
    request: 'Permintaan',
    response: 'Respons',
    headers: 'Header',
    body: 'Badan',
    timing: 'Timing',
    raw: 'Mentah'
  },

  analysis: {
    title: 'Analisis Perintah',
    insecureWarning: 'Peringatan: Perintah ini menggunakan --insecure/-k (validasi SSL dinonaktifkan)',
    verboseIgnored: 'Catatan: Mode verbose (-v) diabaikan dalam konversi',
    unsupportedOptions: 'Opsi Tidak Didukung',
    warnings: 'Peringatan',
    info: 'Informasi'
  },

  messages: {
    parsing: 'Memparsing perintah cURL...',
    parseFailed: 'Gagal memparsing perintah cURL: {error}',
    parseSuccess: 'Perintah cURL berhasil diparsing',
    copied: 'Kode disalin ke clipboard',
    downloaded: 'Kode berhasil diunduh',
    invalidCurl: 'Perintah cURL tidak valid',
    emptyCurl: 'Masukkan perintah cURL',
    validCurl: 'Perintah cURL valid',
    unknownOption: 'Opsi tidak dikenal: {option}',
    unsupportedMethod: 'Peringatan: Tidak semua bahasa mendukung metode HTTP {method}',
    curlRequired: 'Perintah harus diawali dengan "curl "',
    copyFailed: 'Gagal menyalin, silakan salin secara manual'
  },

  examples: {
    title: 'Contoh Perintah cURL',
    basic: 'Permintaan GET Dasar',
    headers: 'Header Kustom',
    post: 'POST dengan JSON',
    formData: 'Pengiriman Data Formulir',
    auth: 'Otentikasi Dasar',
    complex: 'Contoh Kompleks',
    exampleCommands: {
      getRequest: 'Permintaan GET',
      postJson: 'POST JSON',
      postForm: 'POST Formulir',
      withAuth: 'Dengan Otentikasi',
      uploadFile: 'Unggah Berkas'
    }
  },

  actions: {
    convert: 'Konversi',
    converting: 'Mengonversi...'
  }
};