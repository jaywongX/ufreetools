export default {
  name: 'Generator UUID',
  description: 'Menghasilkan UUID dan GUID acak dengan opsi yang dapat disesuaikan, cocok untuk kunci utama database, nama file sementara, dan skenario lainnya',
  options: {
    version: 'Versi UUID',
    quantity: 'Jumlah',
    format: 'Opsi Format',
    includeDash: 'Sertakan tanda hubung (-)',
    generateCount: 'Jumlah yang Dihasilkan'
  },
  versions: {
    v1: 'Versi 1 (berbasis waktu)',
    v4: 'Versi 4 (acak)',
    v5: 'Versi 5 (namespace)',
    custom: 'Kustom'
  },
  quantities: {
    single: 'Tunggal',
    five: '5',
    ten: '10',
    twenty: '20'
  },
  formats: {
    default: 'Default',
    base64: 'Base64',
    binary: 'Biner',
    hex: 'Heksadesimal',
    noDash: 'Tanpa Tanda Hubung'
  },
  actions: {
    generate: 'Hasilkan UUID',
    copy: 'Salin',
    copyAll: 'Salin Semua',
    clear: 'Hapus Hasil',
    download: 'Unduh sebagai TXT'
  },
  messages: {
    copied: 'Tersalin ke clipboard!',
    generated: 'UUID berhasil dihasilkan',
    tooMany: 'Jumlah maksimum yang diizinkan adalah 1000',
    invalidVersion: 'Versi UUID tidak valid',
    invalidNamespace: 'Namespace UUID tidak valid',
    copyFailed: 'Gagal menyalin'
  },
  article: {
    title: "Generator UUID: Buat Pengidentifikasi Unik untuk Aplikasi Anda",
    features: {
      title: "Apa itu Generator UUID?",
      description: "Sebuah <strong>generator UUID (Universal Unique Identifier)</strong> adalah alat khusus untuk membuat pengidentifikasi 128-bit yang distandardisasi yang menjamin keunikan global. <strong>Generator UUID online</strong> kami membuat pengidentifikasi acak ini sesuai dengan spesifikasi RFC 4122, menyediakan <strong>nilai ID unik</strong> untuk berbagai aplikasi.<br><br>Keunggulan utama UUID adalah probabilitas tabrakan yang sangat rendah. Setiap <strong>UUID yang dihasilkan</strong> terdiri dari 32 karakter heksadesimal, biasanya dipisahkan dalam 5 kelompok (format 8-4-4-4-12). Alat kami terutama berfokus pada UUID versi 4, yang menggunakan angka acak atau pseudo-acak untuk membuatnya, sangat cocok untuk sebagian besar aplikasi yang membutuhkan <strong>pengidentifikasi unik</strong> tanpa perlu koordinasi antar sistem.",
      useCases: {
        title: "Skenario Penggunaan Nyata untuk Generator UUID",
        items: [
          "<strong>Kunci utama database</strong>: UUID berfungsi sebagai pengidentifikasi database yang sangat baik, terutama untuk sistem terdistribusi di mana beberapa server mungkin membuat catatan secara bersamaan tanpa perlu koordinasi",
          "<strong>Komputasi terdistribusi</strong>: Untuk layanan mikro dan aplikasi cloud, UUID menyediakan pengidentifikasi unik yang dapat dihasilkan oleh layanan berbeda secara independen tanpa risiko tabrakan",
          "<strong>Pengembangan web</strong>: Buat pengidentifikasi sesi unik, lacak interaksi pengguna, atau hasilkan token sekali pakai untuk reset kata sandi dan verifikasi akun",
          "<strong>Manajemen konten</strong>: Tetapkan pengidentifikasi unik untuk aset digital, dokumen, dan fragmen konten dalam sistem penerbitan yang kompleks",
          "<strong>Identifikasi perangkat IoT</strong>: Berikan pengidentifikasi unik untuk perangkat IoT yang perlu dilacak dalam jaringan, tanpa perlu koordinasi pusat",
          "<strong>Aplikasi game</strong>: Hasilkan pengidentifikasi untuk instance game, sesi pemain, atau item unik dalam lingkungan multipemain dengan risiko tabrakan minimal"
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Pembuatan UUID",
      items: [
        {
          question: "Apa perbedaan antara berbagai versi UUID?",
          answer: "UUID memiliki beberapa versi, masing-masing dengan metode pembuatan yang berbeda: versi 1 menggunakan timestamp dan alamat MAC, versi 3 menggunakan namespace dan hash MD5, versi 4 (paling umum) menggunakan angka acak, versi 5 menggunakan namespace dan hash SHA-1. Generator UUID kami terutama berfokus pada versi 4, yang memberikan kombinasi terbaik dari keunikan, keamanan, dan kemudahan pembuatan. UUID versi 4 dibuat menggunakan angka acak atau pseudo-acak, sangat cocok untuk sebagian besar aplikasi yang membutuhkan jaminan keunikan tanpa membocorkan informasi spesifik sistem."
        },
        {
          question: "Apakah UUID aman untuk aplikasi sensitif?",
          answer: "Karena keacakan dan ketidakpastian UUID versi 4, mereka memberikan keamanan yang baik untuk sebagian besar aplikasi. Dengan 122 bit acak, probabilitas menghasilkan dua UUID yang sama sangat rendah (sekitar 1 dalam 5.3×10³⁸⁸). Namun, mereka tidak memenuhi semua persyaratan keamanan kriptografis. Untuk aplikasi yang sangat sensitif yang membutuhkan keamanan kriptografis, pertimbangkan untuk menggabungkan UUID dengan tindakan keamanan tambahan. UUID tidak boleh digunakan untuk menyembunyikan informasi sensitif karena dirancang untuk memastikan keunikan, bukan enkripsi. Untuk token autentikasi atau pengidentifikasi penting keamanan, pertimbangkan untuk menggunakan alat kriptografi khusus selain UUID."
        },
        {
          question: "Bisakah UUID digunakan sebagai kunci utama database?",
          answer: "Ya, UUID dapat berfungsi sebagai kunci utama database yang sangat baik, terutama dalam sistem terdistribusi. Keunggulan utamanya meliputi: tidak memerlukan koordinasi pusat saat pembuatan, tidak ada risiko tabrakan saat menggabungkan database, meningkatkan privasi karena ID berurutan tidak mengungkapkan jumlah catatan, dan menyederhanakan pengembangan sistem terdistribusi. Namun, UUID juga memiliki beberapa kelemahan: membutuhkan lebih banyak ruang penyimpanan (16 byte dibandingkan 4 byte untuk integer), dapat memengaruhi kinerja indeks, dan dalam beberapa mesin database dapat menyebabkan fragmentasi. Banyak database modern telah dioptimalkan untuk penyimpanan UUID, terutama dalam aplikasi terdistribusi di mana keunggulan biasanya lebih besar daripada potensi kelemahan."
        },
        {
          question: "Apakah UUID dijamin unik secara global?",
          answer: "Meskipun UUID dirancang untuk secara praktis unik, mereka tidak dijamin secara matematis benar-benar unik. UUID versi 4 memiliki 2¹²² kemungkinan nilai (sekitar 5.3×10³⁶⁶), membuat tabrakan dalam praktiknya sangat tidak mungkin. Untuk menggambarkan ini, menghasilkan 1 miliar UUID per detik akan membutuhkan lebih dari 100 miliar tahun untuk memiliki probabilitas 50% terjadi satu tabrakan. Untuk semua aplikasi praktis, UUID dapat dianggap unik secara global. Spesifikasi RFC 4122 menggambarkan UUID sebagai 'secara praktis unik' daripada 'dijamin unik', untuk mengakui kemungkinan teoretis tabrakan ini, tetapi dalam penggunaan praktis, perbedaan ini dapat diabaikan."
        },
        {
          question: "Bagaimana menghapus tanda hubung dari UUID memengaruhi penggunaannya?",
          answer: "Menghapus tanda hubung dari UUID tidak memengaruhi keunikannya atau validitasnya - ini murni preferensi format. Format UUID standar mencakup tanda hubung (misalnya 550e8400-e29b-41d4-a716-446655440000) untuk meningkatkan keterbacaan, tetapi versi tanpa tanda hubung (550e8400e29b41d4a716446655440000) berisi informasi yang sama. Beberapa sistem lebih memilih UUID tanpa tanda hubung untuk menghemat ruang penyimpanan atau memenuhi persyaratan format tertentu. Generator UUID kami menyediakan opsi untuk menghasilkan UUID dengan atau tanpa tanda hubung, untuk menyesuaikan dengan persyaratan sistem yang berbeda. Saat menyimpan UUID dalam database, banyak pengembang memilih untuk menghapus tanda hubung untuk meningkatkan efisiensi, sambil menampilkan versi dengan tanda hubung di antarmuka pengguna untuk meningkatkan keterbacaan."
        }
      ]
    },
    guide: {
      title: "Cara Menggunakan Generator UUID Kami",
      steps: [
        "Pilih <strong>versi UUID</strong> yang Anda inginkan dari menu dropdown (untuk sebagian besar aplikasi, versi 4 direkomendasikan karena menggunakan angka acak untuk memastikan keunikan)",
        "Pilih <strong>jumlah UUID</strong> yang ingin dihasilkan sesuai kebutuhan Anda (1, 5, 10, atau 20)",
        "Konfigurasi <strong>opsi format</strong> dengan mencentang atau tidak mencentang opsi 'Sertakan tanda hubung', tergantung apakah Anda membutuhkan format standar dengan tanda hubung (8-4-4-4-12) atau string berkelanjutan",
        "Klik tombol <strong>'Hasilkan UUID'</strong> untuk membuat pengidentifikasi unik sesuai pengaturan yang Anda tentukan",
        "<strong>Salin UUID individual</strong> dengan mengklik ikon salin di sebelah setiap UUID, atau gunakan tombol 'Hapus Hasil' untuk memulai kembali jika diperlukan"
      ]
    },
    conclusion: "Generator UUID kami menyediakan cara sederhana dan efisien untuk membuat pengidentifikasi unik yang distandardisasi untuk berbagai aplikasi. Dengan menyediakan opsi versi UUID dan format yang dapat disesuaikan, alat ini memenuhi persyaratan sistem yang berbeda, sambil mempertahankan jaminan keunikan dasar yang membuat UUID sangat berharga dalam komputasi modern. Baik Anda mengembangkan aplikasi terdistribusi, menyiapkan database, atau mengelola konten digital, alat ini memastikan Anda dapat dengan cepat menghasilkan pengidentifikasi unik yang Anda butuhkan tanpa khawatir tentang tabrakan atau bentrokan antar sistem."
  }
}