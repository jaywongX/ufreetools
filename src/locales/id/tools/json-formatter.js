export default {
  name: 'Formatter JSON',
  description: 'Alat pemformat dan validasi JSON online, mendukung kompresi dan perapian',
  options: {
    indent: 'Indentasi',
    sort: 'Urutkan kunci',
    compress: 'Kompresi',
    beautify: 'Perapian'
  },
  actions: {
    format: 'Format JSON',
    compress: 'Kompres',
    clear: 'Hapus',
    copy: 'Salin',
    download: 'Unduh',
    transferMeaning: 'Escape',
    contraposition: 'Unescape'
  },
  messages: {
    invalidJson: 'Sintaks JSON tidak valid',
    copied: 'Tersalin ke clipboard!',
    empty: 'Silakan masukkan konten JSON',
    formatTip: 'Tampilkan daftar properti setelah memformat atau mengompres JSON',
    formatSuccess: 'Pemformatan JSON berhasil',
    compressSuccess: 'Kompresi JSON berhasil',
    escapeSuccess: 'Escape JSON berhasil',
    unescapeSuccess: 'Unescape JSON berhasil',
    copyFailed: 'Gagal menyalin, silakan salin secara manual'
  },
  labels: {
    jsonData: 'Data JSON',
    propertyList: 'Daftar Properti',
    clickToCopy: '(Klik nilai untuk menyalin)'
  },
  placeholders: {
    jsonInput: 'Tempel data JSON Anda...'
  },
  article: {
    title: "Alat Pemformat JSON: Panduan Utama untuk Pemrosesan Data Terstruktur",
    features: {
      title: "Memahami Pemformatan JSON dan Manfaatnya",
      description: "<strong>Alat Pemformat JSON</strong> ini adalah alat online yang dirancang dengan cermat untuk mengubah string JSON mentah menjadi struktur terorganisir yang mudah dibaca, sekaligus memvalidasi kebenaran sintaks. Ini menyediakan fitur komprehensif termasuk <strong>perapian JSON</strong>, kompresi data, visualisasi properti, serta operasi profesional seperti escape dan unescape urutan karakter.<br><br>Pada fungsionalitas intinya, alat ini memungkinkan pengguna untuk secara instan mengubah teks JSON padat yang tidak diformat menjadi format dengan indentasi tepat dan navigasi visual, menyoroti hubungan hierarkis antara elemen data. Komponen <strong>validator JSON</strong> secara otomatis memeriksa kesalahan sintaks seperti tanda kurung yang hilang, koma yang salah, atau nilai yang tidak diformat dengan benar, memberikan pesan error yang jelas saat mendeteksi masalah. Penjelajah properti menampilkan tampilan pohon yang dapat dinavigasi dari struktur data Anda, memungkinkan Anda dengan mudah menelusuri objek dan array bersarang yang kompleks, dengan pembedaan visual untuk tipe data. Baik saat menangani respons API, file konfigurasi, atau format pertukaran data, <strong>alat perapian JSON</strong> ini menyederhanakan proses pengelolaan dan pemahaman data terstruktur.",
      useCases: {
        title: "Skenario Penggunaan Nyata Pemformatan JSON",
        items: [
          "<strong>Analisis Respons API</strong>: Saat bekerja dengan API eksternal, respons sering dikembalikan dalam format JSON terkompresi untuk mengurangi ukuran transfer data. Menggunakan <strong>pemerapih JSON</strong> memungkinkan pengembang untuk segera mengubah respons padat ini menjadi format yang mudah dibaca, mempermudah pencarian field data spesifik, memahami struktur respons, dan mengidentifikasi masalah potensial dalam data yang dikembalikan.",
          "<strong>Debugging Data Aplikasi</strong>: Dalam pengembangan, memeriksa struktur data JSON sangat penting untuk pemecahan masalah. <strong>Validator struktur JSON</strong> membantu mengidentifikasi kesalahan sintaks dalam objek JSON, dengan segera menyoroti data yang salah format yang dapat menyebabkan error aplikasi, menghemat waktu debugging yang berharga. Representasi visual memudahkan pelacakan jalur nilai bersarang yang mungkin menyebabkan masalah.",
          "<strong>Manajemen File Konfigurasi</strong>: Aplikasi modern sering menggunakan file JSON untuk pengaturan konfigurasi. <strong>Pemeriksa format JSON</strong> memastikan file penting ini mempertahankan sintaks yang valid, sementara fitur perapian membuat struktur konfigurasi kompleks lebih mudah dipahami saat diperlukan pengeditan manual. Ini mencegah error runtime potensial yang disebabkan oleh data konfigurasi yang tidak diformat dengan benar.",
          "<strong>Persiapan dan Transformasi Data</strong>: Sebelum mengimpor data JSON ke database atau alat analisis, seringkali diperlukan pembersihan dan validasi struktur. <strong>Parser JSON online</strong> memungkinkan analis data untuk dengan cepat memvalidasi integritas data, memahami skema, dan mempersiapkan kumpulan data JSON untuk pemrosesan lebih lanjut, memastikan operasi pipa data berjalan lancar.",
          "<strong>Dokumentasi dan Berbagi Pengetahuan</strong>: Saat membuat dokumentasi API atau berbagi model data dengan anggota tim, menyertakan contoh JSON yang diformat dengan benar dapat meningkatkan pemahaman. Menggunakan fitur <strong>perapian format JSON</strong> untuk membuat contoh yang jelas dan konsisten yang secara jelas menampilkan struktur data, membuat spesifikasi teknis lebih mudah dipahami oleh pengembang lain.",
          "<strong>Persiapan Pembuatan Kode</strong>: Banyak alat pembuatan kode menerima definisi skema JSON sebagai input. <strong>Validator sintaks JSON</strong> memastikan definisi skema ini bebas error sebelum diproses oleh generator kode, mencegah kegagalan build dan memastikan kode yang dihasilkan secara akurat mencerminkan model data yang diharapkan."
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Pemformatan JSON",
      items: [
        {
          question: "Apa perbedaan antara memformat dan mengompres JSON?",
          answer: "Memformat JSON (juga dikenal sebagai beautify atau pretty print) menambahkan indentasi yang tepat, baris baru, dan spasi untuk membuat struktur mudah dibaca manusia, pada dasarnya memperluas JSON untuk visualisasi yang lebih baik. Setiap elemen memiliki barisnya sendiri dengan indentasi yang tepat untuk menunjukkan levelnya dalam hierarki, ideal untuk debugging, pengembangan, dan pembuatan dokumentasi. Kompresi JSON adalah kebalikannya - menghilangkan semua spasi yang tidak perlu, membuat versi padat dan minimalis untuk meminimalkan ukuran file, memungkinkan penyimpanan dan transfer yang efisien. Sementara JSON yang diformat dioptimalkan untuk pembacaan manusia, JSON terkompresi dioptimalkan untuk pemrosesan mesin dan pengurangan penggunaan bandwidth. Alat pemformat JSON kami menyediakan kedua opsi ini, memungkinkan Anda beralih antara format yang mudah dibaca dan format padat sesuai kebutuhan spesifik Anda."
        },
        {
          question: "Mengapa validasi JSON saya gagal meskipun terlihat benar?",
          answer: "Validasi JSON yang gagal biasanya berasal dari masalah sintaks halus yang mungkin sulit dilihat dengan mata telanjang. Kesalahan umum meliputi: koma setelah properti terakhir dalam objek atau array (tidak diizinkan dalam JSON standar); penggunaan tanda kutip tunggal alih-alih tanda kutip ganda yang diperlukan untuk string; karakter khusus yang tidak di-escape dalam string (baris baru, tab, tanda kutip); koma yang hilang antara properti; komentar gaya JavaScript (JSON tidak mendukung komentar); dan nilai undefined atau NaN (tidak valid dalam JSON). Alat pemformat JSON akan menyoroti error ini dan menunjukkan lokasinya, membantu Anda mengidentifikasi dan memperbaiki masalah dengan cepat. Jika data Anda mengandung nilai atau struktur khusus yang tidak didukung oleh standar JSON, pertimbangkan untuk menggunakan fitur escape/unescape kami untuk mengkodekan elemen ini dengan benar, memastikan JSON yang valid dapat di-parse dengan sukses di semua platform dan bahasa."
        },
        {
          question: "Bagaimana cara kerja escape dan unescape JSON?",
          answer: "Escape JSON mengubah karakter khusus menjadi representasi urutan escape-nya, untuk memastikan mereka dikodekan dengan benar dalam string JSON. Misalnya, tanda kutip menjadi \\\", baris baru menjadi \\n, dan garis miring terbalik menjadi \\\\. Proses ini sangat penting ketika data JSON Anda mengandung karakter yang mungkin merusak sintaks JSON, seperti tanda kutip dalam nilai string atau karakter kontrol. Unescape melakukan operasi sebaliknya, mengubah urutan escape kembali ke representasi karakter literalnya. Ini sangat berguna saat menganalisis JSON yang telah di-escape beberapa kali atau saat Anda perlu melihat konten aktual dengan karakter khusus lengkap. Alat pemformat JSON kami menyediakan kedua fungsi ini, memungkinkan Anda mempersiapkan JSON yang di-escape dengan benar untuk transfer atau penyimpanan, dan mengubah JSON yang di-escape kembali ke bentuk yang lebih mudah dibaca untuk analisis atau debugging."
        },
        {
          question: "Bisakah saya menggunakan alat pemformat JSON untuk file data besar?",
          answer: "Ya, alat pemformat JSON kami dirancang untuk menangani file JSON yang cukup besar, tetapi ada batasan praktis berdasarkan kemampuan browser. Untuk kinerja terbaik, kami menyarankan memproses file tidak lebih dari beberapa megabyte. Saat menangani kumpulan data JSON yang sangat besar (puluhan atau ratusan megabyte), Anda mungkin mengalami perlambatan karena browser memiliki batasan memori untuk pemrosesan JavaScript teks besar. Untuk file yang sangat besar, pertimbangkan untuk menggunakan alat JSON berbasis desktop yang memiliki manajemen memori khusus, atau memproses data dalam potongan-potongan kecil. Selain itu, fitur kompresi kami berguna untuk file besar karena menghilangkan spasi tanpa mengubah struktur data, mungkin membuat file besar lebih mudah dikelola. Jika Anda sering bekerja dengan struktur JSON yang sangat besar, pertimbangkan untuk menjelajahi alat pemrosesan sisi server atau database JSON profesional yang dirancang khusus untuk manajemen data volume tinggi."
        },
        {
          question: "Bagaimana cara menemukan nilai spesifik dalam struktur JSON yang kompleks?",
          answer: "Menggunakan tampilan daftar properti dari alat pemformat JSON kami dapat menyederhanakan proses menemukan nilai spesifik dalam struktur JSON yang kompleks. Setelah memformat JSON, panel sebelah kanan menampilkan pohon hierarki semua properti, memungkinkan Anda memperluas objek dan array bersarang untuk menelusuri struktur. Representasi visual ini membuat pelacakan jalur ke nilai bersarang yang dalam lebih mudah dibandingkan memindai teks mentah. Setiap properti dan nilai dilengkapi dengan indikator tipe, dan nilai dapat disalin secara individual dengan mengkliknya. Untuk pencarian yang lebih spesifik dalam dokumen JSON besar, Anda dapat menggunakan fungsi pencarian browser (Ctrl+F/Cmd+F) setelah pemformatan, karena struktur yang dirapikan dengan indentasi tepat membuat pola lebih mudah dikenali. Daftar properti sangat ahli dalam membantu Anda memahami struktur keseluruhan data JSON yang kompleks, mengungkapkan hubungan antara bagian-bagian berbeda dari dokumen yang mungkin tidak langsung terlihat dalam tampilan teks datar."
        }
      ]
    },
    guide: {
      title: "Panduan Langkah demi Langkah Menggunakan Alat Pemformat JSON",
      steps: [
        "<strong>Tempel data JSON Anda</strong>: Pertama, salin data JSON mentah dari sumbernya (respons API, file, dll.) dan tempel ke area input di sebelah kiri alat. Alat ini menerima string JSON valid apa pun, baik yang sudah diformat maupun dikompresi.",
        "<strong>Format JSON</strong>: Klik tombol 'Format JSON' di toolbar untuk merapikan data yang Anda tempel. Proses ini akan menambahkan indentasi dan baris baru yang tepat, membuat strukturnya mudah dibaca, sambil memvalidasi sintaks. Jika JSON Anda mengandung kesalahan sintaks, Anda akan melihat pesan error merah yang menunjukkan di mana masalahnya.",
        "<strong>Jelajahi daftar properti</strong>: Setelah pemformatan, periksa daftar properti yang muncul di panel kanan. Tampilan hierarkis ini menampilkan semua objek, array, dan nilai dalam struktur JSON Anda. Anda dapat memperluas dan menciutkan elemen bersarang dengan mengklik panah di sebelah objek dan array, memungkinkan navigasi melalui struktur data yang kompleks.",
        "<strong>Salin nilai spesifik</strong>: Jika Anda perlu mengekstrak bagian tertentu dari data JSON, klik nilai apa pun dalam daftar properti untuk menyalinnya ke clipboard. Ini sangat berguna ketika Anda perlu merujuk ke nilai tunggal atau sub-struktur dari dokumen JSON yang lebih besar.",
        "<strong>Lakukan operasi lain</strong>: Sesuai kebutuhan Anda, gunakan tombol fitur tambahan di toolbar: 'Kompres' untuk meminimalkan JSON dengan menghapus semua spasi (untuk mengurangi ukuran file); 'Hapus' untuk menghapus semua konten dan memulai kembali; 'Escape' untuk mengubah karakter khusus menjadi representasi escape-nya; atau 'Unescape' untuk membalikkan proses escape.",
        "<strong>Salin hasil pemrosesan</strong>: Setelah Anda memformat atau memanipulasi JSON untuk memenuhi kebutuhan Anda, klik tombol 'Salin' di kanan atas untuk menyalin seluruh string JSON yang diproses ke clipboard. Ini memudahkan untuk menempelkan JSON yang diformat atau dimodifikasi ke editor kode, dokumen, atau tujuan lainnya.",
        "<strong>Validasi perubahan</strong>: Jika Anda melakukan pengeditan manual pada JSON setelah pemformatan, klik 'Format JSON' lagi untuk memastikan perubahan Anda mempertahankan sintaks JSON yang valid. Langkah validasi ini sangat penting sebelum menggunakan JSON dalam aplikasi, karena bahkan kesalahan sintaks kecil dapat menyebabkan penguraian JSON gagal total."
      ]
    },
    conclusion: "JSON telah menjadi bahasa universal untuk pertukaran data dalam pengembangan web dan aplikasi modern, membuat alat pemformat JSON seperti ini menjadi penting bagi pengembang, analis data, dan profesional TI. Dengan mengubah string JSON padat yang berorientasi mesin menjadi format yang mudah dibaca manusia, alat ini menjembatani kesenjangan antara efisiensi komputer dan pemahaman manusia. Kemampuan untuk dengan cepat memvalidasi, memformat, dan menjelajahi struktur JSON menghemat banyak waktu debugging dan pemformatan manual, sekaligus memastikan integritas data lintas sistem. Baik Anda mengintegrasikan API, mengonfigurasi aplikasi, memecahkan masalah data, atau berbagi contoh kode, alat pemformat JSON menyediakan kemampuan visualisasi dan validasi yang diperlukan untuk menangani struktur data yang kompleks. Seiring dengan terus mendominasinya layanan web dan aplikasi berbasis data di bidang teknologi, memiliki alat pemrosesan JSON yang andal tetap menjadi persyaratan dasar untuk alur kerja pengembangan dan pemeliharaan yang efektif."
  }
}