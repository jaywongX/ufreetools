export default {
  name: 'Penguji Ekspresi Reguler',
  description: 'Uji dan debug ekspresi reguler dengan penyorotan dan penjelasan waktu nyata',

  actions: {
    test: 'Uji',
    clear: 'Hapus',
    showExamples: 'Tampilkan Contoh',
    hideExamples: 'Sembunyikan Contoh',
    copy: 'Salin'
  },

  sections: {
    examples: 'Contoh Ekspresi Reguler Umum',
    pattern: 'Pola Ekspresi Reguler',
    input: 'String Uji',
    results: 'Hasil Pencocokan',
    flags: 'Flag'
  },

  flags: {
    g: 'Pencocokan Global (g)',
    i: 'Abaikan Huruf Besar/Kecil (i)',
    m: 'Mode Multi-baris (m)',
    s: 'Titik Cocok Semua (s)',
    u: 'Mode Unicode (u)',
    y: 'Pencocokan Lengket (y)'
  },

  errors: {
    emptyRegex: 'Masukkan ekspresi reguler',
    emptyTestString: 'Masukkan teks untuk diuji',
    invalidRegex: 'Ekspresi reguler tidak valid'
  },

  messages: {
    matchesFound: 'Ditemukan {count} hasil cocok',
    noMatches: 'Tidak ada hasil yang cocok',
    copied: 'Tersalin ke clipboard!'
  },

  placeholders: {
    pattern: 'Masukkan pola ekspresi reguler',
    testString: 'Masukkan teks untuk diuji'
  },

  options: {
    flags: 'Flag',
    global: 'Pencocokan Global (g)',
    caseInsensitive: 'Abaikan Huruf Besar/Kecil (i)',
    multiline: 'Mode Multi-baris (m)',
    dotAll: 'Titik Cocok Semua (s)',
    unicode: 'Mode Unicode (u)',
    sticky: 'Pencocokan Lengket (y)'
  },

  labels: {
    pattern: 'Ekspresi Reguler',
    testString: 'String Uji',
    matches: 'Hasil Pencocokan',
    groups: 'Grup',
    noMatches: 'Tidak ada hasil yang cocok'
  },

  tips: {
    title: 'Tips Penggunaan',
    pattern: 'Saat memasukkan pola ekspresi reguler, tidak perlu menyertakan garis miring di kedua sisi.',
    flags: 'Gunakan flag untuk memodifikasi perilaku pencocokan pola (g: global, i: tidak peka huruf besar/kecil, m: multi-baris).',
    examples: 'Klik "Tampilkan Contoh" untuk melihat dan menggunakan pola ekspresi reguler yang umum.',
    testing: 'Setelah memasukkan pola dan string uji, klik "Uji" untuk melihat hasil pencocokan.'
  },

  match: 'Cocok',
  position: 'Posisi',
  group: 'Grup',
  resultsWillAppearHere: 'Hasil pencocokan ekspresi reguler akan muncul di sini...',
  regexError: 'Kesalahan ekspresi reguler: {message}',
  emailAddress: 'Alamat Email',
  phoneNumber: 'Nomor Telepon (China)',
  ipAddress: 'Alamat IP',
  dateFormat: 'Format Tanggal (yyyy-mm-dd)',
  chineseCharacters: 'Karakter Cina',
  phoneNumberExample: 'Kontak: 13912345678\nNomor WeChat sama: 18887654321\nTelepon rumah: 010-12345678',
  urlExample: 'Kunjungi https://example.com\natau http://www.domain.org/path?query=value',
  ipAddressExample: 'Alamat server: 192.168.1.1\nDNS: 8.8.8.8, 114.114.114.114',
  dateFormatExample: 'Tanggal mulai: 2023-01-15\nTanggal berakhir: 2023-02-28\nTanggal tidak valid: 2023-13-45',
  chineseCharactersExample: 'Hello dunia! Halo, World!'
};