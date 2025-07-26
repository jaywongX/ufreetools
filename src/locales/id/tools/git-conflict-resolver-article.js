export default {
  title: "Memahami Konflik Git dan Cara Menyelesaikannya",
  overview: {
    title: "Apa itu Resolusi Konflik Git?",
    content: "Resolusi konflik Git adalah proses mengelola dan menyelesaikan konflik yang muncul saat menggabungkan atau merebase cabang di Git. Ketika beberapa pengembang mengubah bagian yang sama dari file yang sama, Git tidak dapat secara otomatis menentukan perubahan mana yang harus dipertahankan. Di sinilah alat penyelesaian konflik Git diperlukan.<br><br>Simulator Resolusi Konflik Git ini membantu Anda memahami dan berlatih menyelesaikan konflik penggabungan Git dalam lingkungan yang aman. Dengan mensimulasikan skenario konflik umum, Anda dapat mempelajari mekanisme penyelesaian konflik tanpa memengaruhi kode proyek aktual. Simulator menyoroti konflik penggabungan, menampilkan perubahan yang bertentangan secara berdampingan, dan menyediakan alat untuk berlatih menyelesaikan konflik ini secara efisien."
  },
  useCases: {
    title: "Skenario Umum yang Membutuhkan Resolusi Konflik Git",
    items: [
      {
        title: "Kolaborasi Tim dalam Repositori Bersama",
        description: "Ketika beberapa anggota tim mengubah file yang sama secara bersamaan, konflik kemungkinan besar akan muncul selama proses penggabungan. Mempelajari keterampilan resolusi konflik memastikan kolaborasi tim berjalan lancar."
      },
      {
        title: "Integrasi Cabang Fitur",
        description: "Saat menggabungkan cabang fitur ke cabang pengembangan utama, konflik sering muncul di area yang dikembangkan secara paralel."
      },
      {
        title: "Manajemen Pull Request",
        description: "Menyelesaikan konflik yang muncul saat mengintegrasikan pull request ke repositori utama, memastikan perubahan dapat digabungkan dengan aman."
      },
      {
        title: "Manajemen Cabang Jangka Panjang",
        description: "Ketika sebuah cabang terpisah dari jalur pengembangan utama untuk waktu yang lama, menyelesaikan konflik yang terakumulasi selama reintegrasi bisa menjadi tantangan."
      },
      {
        title: "Kontribusi Proyek Open Source",
        description: "Kontributor proyek open source sering menghadapi konflik ketika perubahan mereka tumpang tindih dengan pembaruan yang dibuat oleh kontributor lain atau pemelihara."
      }
    ]
  },
  guide: {
    title: "Panduan Langkah demi Langkah untuk Menyelesaikan Konflik Git",
    intro: "Menyelesaikan konflik Git mungkin tampak menakutkan pada awalnya, tetapi mengikuti pendekatan sistematis membuat prosesnya dapat dikelola. Berikut cara efektif menyelesaikan konflik Git:",
    steps: [
      {
        title: "Identifikasi File yang Bermasalah",
        description: "Gunakan 'git status' untuk mengidentifikasi file yang ditandai sebagai bermasalah. File-file ini berisi penanda konflik yang perlu diselesaikan."
      },
      {
        title: "Buka File yang Bermasalah",
        description: "Buka file yang bermasalah di editor Anda. Cari penanda konflik (<<<<<<< HEAD, =======, dan >>>>>>> nama cabang), yang menunjukkan di mana konflik terjadi."
      },
      {
        title: "Pahami Kedua Perubahan",
        description: "Tinjau perubahan dari kedua sisi konflik. Konten antara <<<<<<< HEAD dan ======= menunjukkan perubahan dari cabang saat ini, sementara konten antara ======= dan >>>>>>> menunjukkan perubahan yang masuk."
      },
      {
        title: "Putuskan Cara Menyelesaikan Setiap Konflik",
        description: "Putuskan apakah akan mempertahankan perubahan Anda, menerima perubahan yang masuk, atau membuat kombinasi keduanya. Pertimbangkan maksud di balik setiap perubahan, bukan hanya memilih salah satu secara membabi buta."
      },
      {
        title: "Edit File untuk Menyelesaikan Konflik",
        description: "Edit file untuk menghapus penanda konflik, hanya menyisakan konten akhir yang diinginkan. Ini mungkin melibatkan memilih satu versi atau menggabungkan elemen dari keduanya secara manual."
      },
      {
        title: "Tandai sebagai Terselesaikan",
        description: "Setelah mengedit, gunakan 'git add <nama file>' untuk menandai file sebagai terselesaikan. Ini akan mempersiapkan file yang sudah diselesaikan untuk di-commit."
      },
      {
        title: "Selesaikan Proses Penggabungan",
        description: "Setelah semua konflik terselesaikan dan file sudah dipersiapkan, gunakan 'git commit' untuk menyelesaikan proses penggabungan. Git akan membuat commit penggabungan untuk mencatat solusi Anda."
      }
    ]
  },
  conflictTypes: {
    title: "Jenis Konflik Git yang Umum",
    intro: "Konflik Git dapat muncul dalam berbagai bentuk, masing-masing membutuhkan pendekatan yang sedikit berbeda. Memahami jenis-jenis ini membantu Anda mengidentifikasi dan menyelesaikannya dengan efisien:",
    types: [
      {
        title: "Konflik Konten",
        description: "Jenis konflik paling umum yang terjadi ketika dua cabang mengubah baris kode yang sama. Git tidak dapat secara otomatis menentukan perubahan mana yang harus dipertahankan."
      },
      {
        title: "Konflik Penghapusan File",
        description: "Konflik yang muncul ketika satu cabang memodifikasi file sementara cabang lain menghapus file tersebut. Git perlu tahu apakah akan mempertahankan file yang dimodifikasi atau mengonfirmasi penghapusannya."
      },
      {
        title: "Konflik Penggantian Nama File",
        description: "Ketika satu cabang mengganti nama file sementara cabang lain memodifikasi file aslinya, Git mungkin kesulitan melacak perubahan ini dengan benar."
      },
      {
        title: "Konflik File Biner",
        description: "Konflik dalam file non-teks (seperti gambar atau file yang dikompilasi) yang tidak dapat digabungkan baris per baris. Ini biasanya mengharuskan memilih satu versi sepenuhnya."
      },
      {
        title: "Konflik Spasi Putih",
        description: "Terkadang konflik muncul karena perubahan karakter spasi (seperti indentasi atau akhir baris), yang bisa sangat membuat frustrasi tetapi biasanya mudah diselesaikan."
      }
    ]
  },
  faq: {
    title: "Pertanyaan Umum tentang Resolusi Konflik Git",
    items: [
      {
        question: "Bagaimana cara menghindari konflik Git?",
        answer: "Meskipun Anda tidak dapat sepenuhnya menghindari konflik, terutama dalam proyek yang aktif, Anda dapat meminimalkannya dengan: berkomunikasi dengan tim tentang file yang sedang Anda kerjakan, sering menarik perubahan, menjaga cabang fitur berumur pendek, dan menggunakan commit yang lebih kecil dan lebih fokus yang lebih mudah digabungkan."
      },
      {
        question: "Bisakah saya menggunakan alat untuk membantu menyelesaikan konflik Git?",
        answer: "Ya, banyak klien Git dan IDE menyediakan alat resolusi konflik visual yang membuat proses lebih mudah dengan menampilkan konflik secara berdampingan. Opsi populer termasuk Visual Studio Code, IntelliJ IDEA, GitKraken, dan SourceTree. Alat-alat ini menyoroti konflik dan menyediakan tombol untuk memilih antara versi yang berbeda."
      },
      {
        question: "Bagaimana jika saya salah menyelesaikan konflik?",
        answer: "Jika Anda membuat kesalahan selama proses resolusi konflik, Anda selalu dapat menggunakan 'git merge --abort' untuk membatalkan penggabungan saat ini (jika Anda belum melakukan commit), atau membatalkan commit setelah selesai. Selalu uji kode Anda setelah menyelesaikan konflik untuk memastikannya berfungsi seperti yang diharapkan."
      },
      {
        question: "Bagaimana cara menyelesaikan konflik selama operasi rebase?",
        answer: "Prosesnya mirip dengan menyelesaikan konflik penggabungan, tetapi dilakukan untuk setiap commit yang sedang direbase. Anda perlu menyelesaikan konflik, lalu menggunakan 'git add' untuk menandai file sebagai terselesaikan, kemudian menggunakan 'git rebase --continue' untuk melanjutkan ke commit berikutnya (atau konflik) dalam proses rebase."
      },
      {
        question: "Haruskah menggunakan merge atau rebase untuk meminimalkan konflik?",
        answer: "Kedua strategi memiliki kegunaannya masing-masing. Merge mempertahankan sejarah yang akurat tetapi dapat membuat grafik yang kompleks dengan banyak commit penggabungan. Rebase menciptakan sejarah yang lebih bersih dan linear tetapi menulis ulang sejarah commit, yang bisa bermasalah untuk cabang bersama. Tim harus menyepakati alur kerja yang sesuai dengan kebutuhan mereka."
      },
      {
        question: "Apa itu 'penanda konflik penggabungan' di Git?",
        answer: "Penanda konflik penggabungan adalah urutan teks khusus yang dimasukkan Git ke dalam file untuk menunjukkan perubahan yang bertentangan. Ini termasuk: <<<<<<< HEAD (menandai awal perubahan Anda), ======= (memisahkan perubahan Anda dan perubahan yang masuk), dan >>>>>>> nama cabang (menandai akhir perubahan yang masuk dari cabang yang ditentukan)."
      },
      {
        question: "Bagaimana cara berlatih resolusi konflik Git dengan aman?",
        answer: "Simulator Resolusi Konflik Git ini dirancang khusus untuk berlatih. Selain itu, Anda dapat membuat repositori uji lokal, membuat perubahan yang bertentangan di cabang berbeda, dan berlatih menggabungkannya. Ini memberi Anda lingkungan yang aman untuk membangun kepercayaan diri dalam menangani konflik."
      }
    ]
  },
  bestPractices: {
    title: "Praktik Terbaik untuk Resolusi Konflik yang Efisien",
    items: [
      "Berkomunikasi dengan tim sebelum mulai mengerjakan file yang mungkin menimbulkan konflik",
      "Sering menarik dan menggabungkan dari cabang utama untuk mengurangi ukuran dan kompleksitas konflik",
      "Gunakan fitur flag untuk memungkinkan fitur yang belum selesai digabungkan lebih awal tanpa memengaruhi fungsionalitas",
      "Pecah perubahan besar menjadi commit yang lebih kecil dan lebih fokus yang lebih mudah digabungkan",
      "Pahami konteks kode dan maksud di balik kedua perubahan sebelum menyelesaikan konflik",
      "Pertimbangkan pemrograman berpasangan saat menyelesaikan konflik kompleks untuk menggabungkan perspektif berbeda",
      "Selalu uji aplikasi Anda setelah menyelesaikan konflik untuk memastikannya berfungsi dengan benar",
      "Dokumentasikan strategi resolusi konflik Anda untuk menjaga konsistensi di seluruh tim",
      "Gunakan pesan commit yang bermakna saat menyelesaikan konflik untuk menjelaskan keputusan Anda",
      "Manfaatkan opsi konfigurasi Git seperti 'git config merge.conflictstyle diff3' untuk melihat konten asli bersama dengan perubahan yang bertentangan"
    ]
  }
}
