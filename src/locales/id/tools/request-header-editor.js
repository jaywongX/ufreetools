export default {
  name: 'Editor Header Permintaan',
  description: 'Buat, edit, dan uji header permintaan HTTP',

  editor: {
    title: 'Editor Header',
    headers: 'Header Permintaan',
    add: 'Tambah Header',
    bulk: 'Edit Massal',
    import: 'Impor Header',
    export: 'Ekspor Header',
    clear: 'Hapus Semua',
    importError: 'Kesalahan Impor'
  },

  header: {
    name: 'Nama Header',
    value: 'Nilai',
    description: 'Deskripsi',
    namePlaceholder: 'Masukkan nama header',
    valuePlaceholder: 'Masukkan nilai header',
    actions: 'Aksi',
    enabled: 'Aktif',
    duplicate: 'Duplikat',
    delete: 'Hapus',
    noHeaders: 'Tidak ada header, klik tombol "Tambah" atau muat template untuk memulai',
    bulkPlaceholder: 'Tempel header, format: \'Nama: Nilai\', satu per baris, atau tempel teks header mentah'
  },

  presets: {
    title: 'Preset',
    save: 'Simpan Sekarang',
    load: 'Muat Preset',
    delete: 'Hapus Preset',
    presetName: 'Nama Preset',
    namePlaceholder: 'Masukkan nama preset',
    confirmDelete: 'Apakah Anda yakin ingin menghapus preset ini?',
    common: 'Header Umum',
    custom: 'Preset Kustom'
  },

  common: {
    userAgent: 'User-Agent',
    contentType: 'Content-Type',
    authorization: 'Authorization',
    acceptLanguage: 'Accept-Language',
    acceptEncoding: 'Accept-Encoding',
    cacheControl: 'Cache-Control',
    cookie: 'Cookie',
    referer: 'Referer',
    origin: 'Origin'
  },

  test: {
    title: 'Uji Header',
    url: 'URL',
    urlPlaceholder: 'Masukkan URL untuk menguji header',
    method: 'Metode',
    send: 'Kirim Permintaan',
    response: 'Respons'
  },

  response: {
    title: 'Respons',
    status: 'Status',
    headers: 'Header Respons',
    body: 'Badan',
    time: 'Waktu',
    size: 'Ukuran',
    loading: 'Memuat...',
    noResponse: 'Tambahkan header untuk melihat pratinjau',
    headerCount: 'header'
  },

  options: {
    title: 'Opsi',
    followRedirects: 'Ikuti Pengalihan',
    timeout: 'Timeout (detik)',
    validateSSL: 'Validasi Sertifikat SSL',
    sendCredentials: 'Kirim Kredensial'
  },

  formats: {
    title: 'Format Ekspor',
    raw: 'Teks Mentah',
    json: 'JSON',
    curl: 'Perintah cURL',
    javascript: 'JavaScript',
    python: 'Python',
    php: 'PHP',
    fetch: 'Fetch API',
    axios: 'Axios'
  },

  guides: {
    title: 'Panduan Header',
    description: 'Pelajari tentang header HTTP umum dan penggunaannya',
    securityHeaders: 'Header Keamanan',
    cachingHeaders: 'Header Cache',
    corsHeaders: 'Header CORS',
    authenticationHeaders: 'Header Autentikasi',
    commonValues: 'Nilai Umum'
  },

  actions: {
    copy: 'Salin',
    format: 'Format',
    validate: 'Validasi',
    clear: 'Kosongkan'
  },

  messages: {
    headerAdded: 'Header ditambahkan',
    headerDeleted: 'Header dihapus',
    headersCleared: 'Semua header dihapus',
    presetSaved: 'Preset disimpan',
    presetLoaded: 'Preset dimuat',
    presetDeleted: 'Preset dihapus',
    requestSent: 'Permintaan dikirim',
    requestFailed: 'Permintaan gagal: {error}',
    copied: 'Disalin ke clipboard',
    importSuccess: 'Header berhasil diimpor',
    exportSuccess: 'Header berhasil diekspor',
    invalidUrl: 'URL tidak valid',
    pleaseEnterHeader: 'Masukkan teks header',
    invalidHeader: 'Tidak dapat mengurai header yang valid, gunakan format \'Nama: Nilai\'',
    invalidHeaderName: 'Nama header tidak valid: {error}',
    copyFailed: 'Gagal menyalin, salin secara manual'
  }
};