export default {
  name: 'Pembanding Perbedaan Kode',
  description: 'Membandingkan dua kode dan menyorot perbedaannya',
  options: {
    title: 'Opsi',
    ignoreCase: 'Abaikan Huruf Besar/Kecil',
    ignoreWhitespace: 'Abaikan Spasi',
    trimWhitespace: 'Pangkas Spasi',
    diffMode: 'Mode Perbedaan',
    diffModes: {
      chars: 'Karakter',
      words: 'Kata',
      lines: 'Baris',
      sentences: 'Kalimat',
      json: 'JSON'
    },
    diffStyle: 'Gaya Tampilan',
    diffStyles: {
      split: 'Tampilan Terpisah',
      inline: 'Tampilan Sebaris'
    },
    context: 'Jumlah Baris Konteks',
    wrap: 'Pembungkus Otomatis',
    languages: {
      plaintext: 'Teks Biasa',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      json: 'JSON'
    }
  },
  inputs: {
    original: 'Kode Asli',
    modified: 'Kode yang Dimodifikasi',
    placeholderOriginal: 'Masukkan kode asli di sini...',
    placeholderModified: 'Masukkan kode yang dimodifikasi di sini...'
  },
  actions: {
    compare: 'Bandingkan',
    clear: 'Bersihkan',
    swap: 'Tukar',
    copy: 'Salin Perbedaan',
    download: 'Unduh Perbedaan',
    upload: 'Unggah File'
  },
  results: {
    title: 'Hasil Perbedaan',
    changes: 'Perubahan',
    additions: 'Penambahan',
    deletions: 'Penghapusan',
    unchanged: 'Tidak Berubah',
    noChanges: 'Tidak ditemukan perbedaan - kedua teks identik',
    loading: 'Membuat perbedaan...'
  },
  upload: {
    originalFile: 'File Asli',
    modifiedFile: 'File yang Dimodifikasi',
    dropOriginal: 'Seret file asli ke sini atau klik untuk memilih',
    dropModified: 'Seret file yang dimodifikasi ke sini atau klik untuk memilih'
  },
  messages: {
    copied: 'Tersalin ke clipboard!',
    inputRequired: 'Masukkan teks di kedua kotak input',
    diffGenerated: 'Perbedaan berhasil dibuat',
    error: 'Terjadi kesalahan saat membuat perbedaan',
    fileError: 'Kesalahan saat membaca file'
  },
  tips: {
    title: 'Tips Penggunaan',
    compareOptions: 'Sesuaikan opsi perbandingan sesuai kebutuhan Anda - mengabaikan spasi sangat membantu untuk membandingkan kode.',
    diffModes: 'Mode perbedaan yang berbeda memberikan tingkat detail perbandingan yang berbeda.',
    largeFiles: 'Untuk file besar, perbandingan berbasis baris lebih efisien.',
    jsonMode: 'Gunakan mode JSON untuk membandingkan data terstruktur - ini akan menstandarisasi dan membandingkan struktur objek.'
  },
  article: {
    title: "Alat Pembanding Perbedaan Kode: Memahami Perubahan Kode dengan Efisien",
    features: {
      title: "Memahami Pembanding Perbedaan Kode",
      description: "<strong>Alat pembanding perbedaan kode</strong> ini adalah <strong>alat perbandingan kode</strong> tingkat lanjut yang dirancang khusus untuk pengembang dan programmer, membantu pengguna mengidentifikasi perbedaan antara dua kode. <strong>Pemeriksa perbedaan</strong> yang kuat ini dapat menyorot bagian yang ditambahkan, dihapus, dan dimodifikasi antara file teks, yang sangat berharga untuk proses tinjauan kode, kontrol versi, dan debugging.<br><br><strong>Alat perbandingan teks</strong> kami menawarkan berbagai mode perbandingan termasuk karakter, kata, baris, kalimat, dan analisis JSON khusus. Alat ini juga menyediakan dua opsi visualisasi: tampilan terpisah dan tampilan sebaris, untuk menyesuaikan preferensi dan skenario penggunaan yang berbeda. Baik Anda bekerja dengan kode sumber, file konfigurasi, atau konten berbasis teks apa pun, <strong>alat perbandingan kode</strong> ini memberikan wawasan yang akurat tentang perubahan antara versi.",
      useCases: {
        title: "Skenario Penggunaan Nyata untuk Perbandingan Kode",
        items: [
          "Pengembang perangkat lunak melacak <strong>perubahan kode</strong> antara versi aplikasi yang berbeda untuk mengidentifikasi sumber bug atau perilaku tak terduga",
          "Pemimpin tim melakukan <strong>tinjauan kode</strong>, melihat secara visual apa yang dimodifikasi anggota tim dalam permintaan tarik sebelum menyetujui perubahan",
          "Insinyur DevOps membandingkan <strong>file konfigurasi</strong> di lingkungan yang berbeda untuk memastikan konsistensi atau mengidentifikasi penyesuaian khusus lingkungan",
          "Penulis teknis membandingkan <strong>draf dokumen</strong> untuk melihat bagaimana konten berkembang atau menentukan bagian yang perlu diperbarui berdasarkan perubahan produk",
          "Analis data memeriksa perbedaan antara <strong>struktur JSON</strong> atau ekspor data untuk memahami perubahan model data dari waktu ke waktu",
          "Siswa yang belajar pemrograman membandingkan <strong>solusi kode</strong> mereka dengan implementasi referensi untuk memahami berbagai pendekatan pemecahan masalah"
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Analisis Perbedaan Kode",
      items: [
        {
          question: "Apa perbedaan antara perbandingan berbasis karakter dan berbasis baris?",
          answer: "Perbandingan berbasis karakter mengidentifikasi perubahan pada tingkat karakter individu, menyorot modifikasi tepat dalam kata atau segmen kode. Ini sangat cocok untuk mendeteksi perubahan kecil dan halus seperti modifikasi nama variabel. Perbandingan berbasis baris memperlakukan setiap baris sebagai satu unit, menyorot seluruh baris yang telah ditambahkan, dihapus, atau dimodifikasi. Mode ini lebih efisien untuk file besar dan memberikan gambaran yang lebih jelas ketika ada bagian kode yang mengalami perubahan signifikan, dan ini juga merupakan pengaturan default untuk sebagian besar sistem tinjauan kode dan alat kontrol versi."
        },
        {
          question: "Bisakah alat pembanding perbedaan kode menangani file atau basis kode besar?",
          answer: "Ya, alat pembanding perbedaan kode kami dioptimalkan untuk kinerja dalam membandingkan file besar. Untuk basis kode besar, kami merekomendasikan penggunaan mode perbandingan berbasis baris, yang lebih efisien dalam menangani perbedaan dibandingkan mode berbasis karakter atau kata. Alat ini menerapkan teknik throttling dan pemrosesan yang cerdas untuk tetap responsif bahkan saat menangani input yang besar. Namun, untuk file yang sangat besar (teks beberapa MB), Anda mungkin menemukan bahwa fokus pada bagian kode tertentu daripada membandingkan seluruh file sekaligus akan memberikan kinerja yang lebih baik."
        },
        {
          question: "Bagaimana mode perbandingan JSON bekerja?",
          answer: "Mode perbandingan JSON dirancang khusus untuk membandingkan data terstruktur. Berbeda dengan perbandingan teks standar, mode ini pertama-tama mengurai kedua input sebagai objek JSON, menstandarisasi strukturnya (menangani spasi, indentasi, dan pengurutan properti yang berbeda), kemudian mengidentifikasi perbedaan data yang sebenarnya. Ini berarti dua objek JSON dengan data yang sama tetapi format atau pengurutan properti yang berbeda akan dianggap sama. Mode ini sangat berharga untuk membandingkan struktur respons API, manajemen konfigurasi, dan analisis data, di mana konten semantik lebih penting daripada representasi teks yang tepat."
        },
        {
          question: "Bisakah saya menggunakan alat ini untuk membandingkan kode dalam bahasa pemrograman yang berbeda?",
          answer: "Tentu saja. Alat pembanding perbedaan kode bekerja dengan format berbasis teks apa pun, membuatnya tidak terikat bahasa. Baik Anda membandingkan JavaScript, Python, Java, C++, HTML, CSS, atau kode lainnya, alat ini dapat secara efektif menyorot perbedaan sintaksis. Untuk meningkatkan keterbacaan, alat ini menyediakan penyorotan sintaks untuk bahasa pemrograman populer, yang membantu memvisualisasikan perubahan dalam konteks yang sesuai dengan bahasa. Ini membuatnya sama berharganya untuk pengembang full-stack yang bekerja dengan berbagai teknologi maupun ahli yang fokus pada ekosistem bahasa tunggal."
        },
        {
          question: "Bagaimana cara berbagi atau menyimpan hasil perbandingan?",
          answer: "Alat pembanding perbedaan kode kami menyediakan berbagai opsi untuk berbagi dan menyimpan hasil perbandingan. Anda dapat menggunakan tombol 'Salin Perbedaan' untuk menyalin perbedaan yang telah diformat ke clipboard, lalu menempelkannya ke dokumen, email, atau aplikasi obrolan. Fungsi 'Unduh Perbedaan' memungkinkan Anda menyimpan perbandingan lengkap sebagai file HTML yang mempertahankan semua sorotan dan format. Untuk integrasi alur kerja, Anda juga dapat menghasilkan tautan permanen ke perbandingan tertentu untuk dibagikan dengan anggota tim. Opsi-opsi ini memudahkan untuk memasukkan hasil perbedaan ke dalam dokumentasi Anda, proses tinjauan kode, atau diskusi pemecahan masalah."
        }
      ]
    },
    guide: {
      title: "Panduan Langkah demi Langkah untuk Perbandingan Kode",
      steps: [
        "Pertama, pilih <strong>mode perbandingan</strong> yang paling sesuai dengan kebutuhan Anda - perbandingan berbasis baris cocok untuk sebagian besar perbandingan kode, sedangkan mode kata atau karakter lebih cocok untuk perbedaan teks yang halus",
        "Pilih <strong>tampilan terpisah</strong> (berdampingan) atau <strong>tampilan sebaris</strong> berdasarkan preferensi dan ukuran layar Anda",
        "Tempel atau ketik <strong>kode asli</strong> Anda di area input kiri, pastikan formatnya benar untuk meningkatkan keterbacaan",
        "Tambahkan <strong>kode yang dimodifikasi</strong> Anda di area input kanan - jika perlu, Anda juga dapat menggunakan tombol tukar untuk membalikkan arah perbandingan",
        "Klik tombol <strong>Bandingkan</strong> untuk menghasilkan perbedaan visual antara dua kode",
        "Tinjau hasilnya, di mana <strong>tambahan</strong> disorot dengan warna hijau, <strong>penghapusan</strong> dengan warna merah, dan bagian yang tidak berubah tetap netral",
        "Gunakan <strong>statistik ringkasan</strong> di bagian bawah untuk memahami cakupan perubahan dengan cepat (jumlah penambahan, penghapusan, dan total baris yang diubah)",
        "Untuk file yang kompleks, gunakan fungsi pencarian untuk menemukan bagian atau perubahan tertentu dalam kode yang dibandingkan"
      ]
    },
    conclusion: "Alat pembanding perbedaan kode menyederhanakan tugas yang biasanya kompleks dalam mengidentifikasi dan memahami perubahan kode. Dengan memberikan representasi yang jelas dan visual tentang perbedaan antara file teks, alat ini menghemat waktu berharga bagi pengembang dan profesional teknis dalam proses debugging, tinjauan kode, dan manajemen versi. Baik Anda melacak perubahan dalam basis kode besar, meninjau pekerjaan rekan, atau mencoba menentukan kapan dan di mana bug diperkenalkan, alat perbandingan ini memberikan ketepatan dan fleksibilitas yang diperlukan untuk memahami kode yang terus berkembang. Penggunaan alat ini secara teratur dapat meningkatkan alur kerja pengembangan Anda, meningkatkan kualitas kode melalui tinjauan yang lebih baik, dan membantu mempertahankan konsistensi antara versi proyek."
  }
}