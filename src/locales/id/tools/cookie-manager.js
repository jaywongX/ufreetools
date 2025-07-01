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
  invalidFormat: 'Format tidak valid',
  
  // Konten artikel
  article: {
    title: 'Pengelola Cookie: Memahami dan Mengontrol Cookie Situs Web',
    features: {
      title: 'Fitur dan Skenario Penggunaan',
      description: 'Alat <strong>Pengelola Cookie</strong> kami memberikan kontrol penuh atas cookie situs web, memungkinkan Anda melihat, membuat, mengedit, dan menghapus cookie situs saat ini. Alat yang kuat ini memberikan visibilitas dan kendali penuh atas cookie yang disimpan di browser Anda, membantu mengelola privasi online dan memecahkan masalah fungsionalitas situs web.',
      useCasesTitle: 'Skenario Penggunaan Praktis',
      useCases: {
        items: [
          '<strong>Pengujian Pengembangan Web</strong>: Uji perilaku situs web dengan konfigurasi cookie berbeda tanpa perlu mengedit penyimpanan browser secara manual.',
          '<strong>Pemecahan Masalah Situs Web</strong>: Diagnosa masalah login, sesi, atau masalah terkait cookie lainnya dengan memeriksa dan memodifikasi cookie.',
          '<strong>Manajemen Privasi</strong>: Kendalikan data pribadi Anda dengan melihat informasi yang disimpan situs dalam cookie dan menghapus cookie pelacakan yang tidak diinginkan secara selektif.',
          '<strong>Manajemen Sesi</strong>: Buat atau modifikasi cookie sesi untuk menguji berbagai status pengguna atau skenario autentikasi tanpa perlu login dan logout berulang kali.',
          '<strong>Pengujian Lintas Browser</strong>: Ekspor cookie dari satu browser dan impor ke browser lain untuk menyalin status penjelajahan yang sama di berbagai browser.'
        ]
      }
    },
    faq: {
      title: 'Pertanyaan yang Sering Diajukan',
      items: [
        {
          question: 'Apa itu cookie dan mengapa situs web menggunakannya?',
          answer: 'Cookie adalah potongan data kecil yang disimpan situs web di browser Anda. Mereka memiliki berbagai fungsi termasuk mengingat informasi login, melacak perilaku pengguna, menyimpan preferensi, mempertahankan keranjang belanja, dan mengaktifkan pengalaman yang dipersonalisasi. Cookie sangat penting untuk banyak fungsi web modern tetapi juga dapat menimbulkan kekhawatiran privasi ketika digunakan untuk pelacakan.'
        },
        {
          question: 'Apa perbedaan alat Pengelola Cookie dengan pengaturan cookie bawaan browser?',
          answer: 'Meskipun browser menyediakan manajemen cookie dasar melalui pengaturannya, <strong>Pengelola Cookie</strong> kami menawarkan kontrol dan fungsionalitas yang lebih rinci. Anda tidak hanya dapat melihat dan menghapus cookie (seperti yang diizinkan browser), tetapi juga membuat cookie baru, mengedit cookie yang ada, mengekspor cookie untuk cadangan, dan mengimpor cookie. Ini menjadikannya pilihan ideal untuk pengembang, penguji, dan pengguna yang sadar privasi yang membutuhkan fungsi manajemen cookie yang mendetail.'
        },
        {
          question: 'Aman menghapus cookie? Apakah itu akan memengaruhi pengalaman menjelajah saya?',
          answer: 'Menghapus cookie umumnya aman tetapi dapat memengaruhi pengalaman menjelajah Anda dalam beberapa cara. Anda mungkin akan logout dari situs web, kehilangan preferensi yang disimpan, atau perlu membuat ulang keranjang belanja. <strong>Pengelola Cookie</strong> memungkinkan Anda menghapus cookie tertentu secara selektif alih-alih menghapus semua cookie, memberi Anda kendali tepat atas data penjelajahan mana yang akan disimpan atau dihapus.'
        },
        {
          question: 'Apa arti berbagai atribut cookie seperti "SameSite" dan "HttpOnly"?',
          answer: 'Atribut cookie mengontrol perilaku dan aksesibilitas cookie:<br>- <strong>Secure</strong>: Cookie hanya dikirim melalui koneksi HTTPS<br>- <strong>HttpOnly</strong>: Cookie tidak dapat diakses oleh JavaScript<br>- <strong>SameSite</strong>: Mengontrol kapan cookie dikirim dengan permintaan lintas situs (None, Lax, atau Strict)<br>- <strong>Domain</strong>: Menentukan domain mana yang dapat menerima cookie<br>- <strong>Path</strong>: Membatasi cookie ke path tertentu di situs web<br>- <strong>Expires</strong>: Menetapkan kapan browser harus menghapus cookie'
        },
        {
          question: 'Bisakah saya menggunakan alat ini untuk mengimpor cookie dari komputer atau browser lain?',
          answer: 'Ya, fungsi impor/ekspor <strong>Pengelola Cookie</strong> memungkinkan Anda mentransfer cookie antar browser atau perangkat. Ekspor cookie Anda sebagai file JSON atau teks, transfer file ke perangkat lain, lalu gunakan alat Pengelola Cookie di perangkat tersebut untuk mengimpornya. Ini sangat berguna untuk pengembang yang perlu menyalin status pengguna atau untuk mentransfer sesi penjelajahan antar komputer yang berbeda.'
        }
      ]
    },
    guide: {
      title: 'Cara Menggunakan Alat Pengelola Cookie',
      step1: {
        title: 'Melihat Cookie Saat Ini',
        description: 'Saat Anda membuka <strong>Pengelola Cookie</strong>, tab "Cookie Saat Ini" menampilkan semua cookie untuk situs web saat ini. Daftar ini menunjukkan nama, nilai, dan tanggal kedaluwarsa setiap cookie. Untuk melihat detail lebih lanjut tentang cookie tertentu, klik tombol "Edit" di sampingnya. Untuk menyegarkan daftar dan memastikan Anda melihat cookie terbaru, klik tombol "Segarkan" di bagian atas daftar.'
      },
      step2: {
        title: 'Membuat Cookie Baru',
        description: 'Untuk menambahkan cookie baru, klik tab "Buat Cookie". Isi kolom wajib (nama dan nilai) serta atribut opsional apa pun seperti domain, path, atau waktu kedaluwarsa. Atur opsi keamanan seperti flag Secure atau atribut SameSite sesuai kebutuhan Anda. Setelah cookie dikonfigurasi, klik tombol "Simpan" untuk membuatnya. Alat akan mengonfirmasi pembuatan berhasil dan secara otomatis kembali ke tampilan daftar cookie.'
      },
      step3: {
        title: 'Mengedit Cookie yang Ada',
        description: 'Untuk memodifikasi cookie, temukan di daftar "Cookie Saat Ini" dan klik tombol "Edit". Ini akan memuat detail cookie ke dalam formulir edit. Lakukan perubahan yang diinginkan pada atribut cookie apa pun. Setelah selesai, klik "Simpan" untuk memperbarui cookie. Alat akan mengonfirmasi pembaruan berhasil. Perhatikan bahwa mengedit cookie sebenarnya membuat cookie baru dengan nama yang sama tetapi atribut yang diperbarui.'
      },
      step4: {
        title: 'Menghapus Cookie',
        description: 'Untuk menghapus cookie, temukan di daftar "Cookie Saat Ini" dan klik tombol "Hapus". Dialog konfirmasi akan muncul untuk mencegah penghapusan tidak sengaja. Setelah dikonfirmasi, cookie akan segera dihapus dari browser Anda dan daftar akan disegarkan secara otomatis. Ini memberi Anda kendali penuh atas data apa yang dapat disimpan situs web di browser Anda.'
      },
      step5: {
        title: 'Mengimpor dan Mengekspor Cookie',
        description: 'Untuk mentransfer cookie, navigasikan ke tab "Impor/Ekspor". Untuk ekspor, pilih format JSON (struktur lebih baik) atau format teks (kompatibilitas lebih baik). Klik tombol yang sesuai untuk mengunduh file. Untuk impor, tempelkan data cookie ke area teks dan klik "Impor". Anda dapat mengimpor cookie dalam format teks standar atau format JSON. Alat akan mengonfirmasi impor berhasil dan menunjukkan berapa banyak cookie yang diimpor.'
      }
    },
    conclusion: 'Alat <strong>Pengelola Cookie</strong> memberi Anda kendali penuh atas cookie browser Anda, baik Anda seorang pengembang yang menguji fungsionalitas situs web, pengguna yang sadar privasi yang mengelola data pribadi, atau seseorang yang memecahkan masalah situs web. Dengan memahami dan secara aktif mengelola cookie, Anda dapat meningkatkan pengalaman menjelajah sambil tetap mempertahankan kendali atas privasi online Anda.'
  }
};