export default {
  name: 'Generator Klien TypeScript dari OpenAPI',
  description: 'Secara otomatis menghasilkan antarmuka TypeScript dan kode klien berdasarkan spesifikasi OpenAPI, meningkatkan efisiensi kolaborasi frontend-backend',

  options: {
    exportSchemas: 'Ekspor semua definisi model',
    generateClient: 'Hasilkan kode klien API',
    addComments: 'Tambahkan komentar dan dokumentasi',
    useEnums: 'Gunakan enum TypeScript (daripada tipe union string)',
    indentSize: 'Ukuran indentasi',
    operationType: 'Tipe operasi',
    displayOptions: 'Opsi tampilan'
  },

  inputMode: {
    toggleToFile: 'Beralih ke unggah file',
    toggleToText: 'Beralih ke input teks',
    loadExample: 'Muat contoh'
  },

  fileUpload: {
    dragAndDrop: 'Seret dan lepas file OpenAPI di sini, atau klik untuk mengunggah',
    supportedFormats: 'Format file yang didukung: .json, .yaml, dan .yml',
    fileSelected: 'Terpilih: {0} ({1})'
  },

  textInput: {
    placeholder: 'Tempel spesifikasi OpenAPI (JSON atau YAML) di sini...'
  },

  actions: {
    generate: 'Hasilkan kode TypeScript',
    processing: 'Memproses...',
    clear: 'Bersihkan',
    copy: 'Salin kode',
    download: 'Unduh kode'
  },

  results: {
    generatedCode: 'Kode TypeScript yang dihasilkan',
    copied: 'Tersalin ke clipboard',
    error: 'Error',
    characterCount: 'Jumlah karakter: {0}'
  },

  errors: {
    parseError: 'Tidak dapat mem-parsing spesifikasi OpenAPI. Pastikan format JSON atau YAML valid.',
    invalidSpec: 'Spesifikasi OpenAPI tidak valid. Tidak ditemukan identifier versi openapi atau swagger.',
    processingError: 'Error saat memproses spesifikasi OpenAPI: {0}'
  }
};