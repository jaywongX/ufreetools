export default {
  name: 'Pengelola Cookie',
  description: 'Lihat, buat, edit, dan hapus cookie situs web saat ini',

  // Label fungsi utama
  currentCookies: 'Cookie Saat Ini',

  createCookie: 'Buat Cookie',
  importExport: 'Impor/Ekspor',

  // Daftar Cookie
  noCookies: 'Tidak ada cookie untuk situs ini',

  cookieName: 'Nama',
  cookieValue: 'Nilai',
  cookieDomain: 'Domain',
  cookiePath: 'Path',
  cookieExpires: 'Kedaluwarsa',
  cookieSecure: 'Secure',
  cookieHttpOnly: 'HttpOnly',
  cookieSameSite: 'SameSite',
  actions: 'Aksi',
  edit: 'Edit',
  delete: 'Hapus',
  save: 'Simpan',
  cancel: 'Batal',
  refresh: 'Segarkan',

  // Formulir buat/edit
  addCookie: 'Tambah Cookie',

  editCookie: 'Edit Cookie',
  required: 'Wajib diisi',
  optional: 'Opsional',
  days: 'Hari',
  hours: 'Jam',
  minutes: 'Menit',
  cookieCreated: 'Cookie berhasil dibuat',
  cookieUpdated: 'Cookie berhasil diperbarui',
  cookieDeleted: 'Cookie berhasil dihapus',
  createError: 'Gagal membuat cookie',
  updateError: 'Gagal memperbarui cookie',
  deleteError: 'Gagal menghapus cookie',

  // Impor/Ekspor
  export: 'Ekspor Cookie',

  import: 'Impor Cookie',
  exportAs: 'Ekspor sebagai',
  exportSuccess: 'Cookie berhasil diekspor',
  importSuccess: 'Berhasil mengimpor {count} cookie',
  importError: 'Gagal mengimpor cookie',

  // Opsi keamanan
  none: 'Tidak ada',

  strict: 'Ketat',
  lax: 'Longgar',

  // Catatan dan penjelasan
  domainNote: 'Biarkan kosong untuk domain saat ini',

  pathNote: 'Default ke path root "/"',
  expiresNote: 'Kosongkan untuk cookie sesi',
  secureNote: 'Hanya dikirim melalui HTTPS',
  httpOnlyNote: 'Tidak bisa diakses JavaScript',
  sameSiteNote: 'Kontrol permintaan lintas situs',

  // Format impor
  importFormat: 'Format impor contoh:\nname=value; expires=date; path=/; domain=example.com; secure; httpOnly; sameSite=strict',

  jsonFormat: 'Format JSON',
  textFormat: 'Format teks',
  invalidFormat: 'Format tidak valid'
};