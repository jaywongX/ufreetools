export default {
  title: "Pengkode/Pengurai Base64: Konversi dan Lindungi Data Anda",
  features: {
    title: "Memahami pengkodean dan penguraian Base64",
    description: "<strong>Pengkode/Pengurai Base64</strong> adalah alat penting untuk mengkonversi antara data biner dan format teks ASCII. <strong>Alat pengkodean data</strong> yang kuat ini dapat mengubah segala jenis informasi biner menjadi representasi teks aman yang hanya menggunakan 64 karakter ASCII yang dapat dicetak (A-Z, a-z, 0-9, +, /), sangat cocok untuk mentransmisikan data melalui sistem berbasis teks.<br><br><strong>Alat konversi Base64</strong> kami mendukung berbagai metode input termasuk teks, berkas, dan input heksadesimal, dengan opsi lanjutan untuk pengkodean karakter (UTF-8 dan GBK). Dalam proses <strong>penguraian Base64</strong>, alat ini dapat secara otomatis mendeteksi tipe berkas seperti gambar, dokumen, dan arsip, menyediakan fitur pratinjau untuk gambar, dan mendukung unduhan berkas dalam berbagai format. Untuk berkas besar, <strong>pengkode Base64</strong> kami menerapkan pemrosesan per bagian yang efisien dan menyediakan visualisasi progres secara real-time.",
    useCases: {
      title: "Skenario umum penggunaan pengkodean Base64",
      items: [
        "Menanamkan gambar dan berkas biner lainnya langsung ke dalam kode HTML, CSS, atau JavaScript menggunakan URI data, memungkinkan halaman web mandiri tanpa sumber eksternal",
        "Mentransmisikan data biner dengan aman melalui sistem email atau protokol teks biasa, menghindari kerusakan data yang mungkin disebabkan oleh karakter non-teks",
        "Menyimpan struktur data kompleks dalam cookies, localStorage, atau mekanisme penyimpanan Web lain yang hanya mendukung format teks",
        "Mengkodekan kredensial autentikasi atau token API untuk transmisi aman dalam header HTTP (autentikasi dasar)",
        "Mengkonversi lampiran berkas biner untuk disertakan dalam XML, JSON, atau format pertukaran data berbasis teks lainnya",
        "Membuat string data aman URL untuk parameter URL, menghindari karakter khusus yang memerlukan pengkodean URL"
      ]
    }
  },
  faq: {
    title: "Pertanyaan umum tentang pengkodean Base64",
    items: [
      {
        question: "Mengapa data yang dikodekan Base64 lebih besar dari data asli?",
        answer: "Pengkodean Base64 akan menambah ukuran data sekitar 33% karena menggunakan 4 byte teks ASCII untuk merepresentasikan setiap 3 byte data biner. Ini adalah sifat dasar pengkodean Base64, karena setiap karakter hanya menggunakan 6 bit (2^6 = 64 nilai yang mungkin) bukan 8 bit. Penambahan ukuran ini adalah kompromi yang tak terhindarkan untuk mendapatkan kompatibilitas teks lintas sistem, terutama dalam sistem yang hanya mendukung karakter ASCII. Untuk berkas besar, pertimbangkan penambahan ukuran ini saat merencanakan kebutuhan penyimpanan atau transmisi."
      },
      {
        question: "Apa perbedaan antara Base64 standar dan Base64 aman URL?",
        answer: "Pengkodean Base64 standar menggunakan karakter '+' dan '/', yang memiliki makna khusus dalam URL dan dapat menyebabkan masalah saat data yang dikodekan disertakan dalam parameter URL. Pengkodean Base64 aman URL mengganti karakter ini masing-masing dengan '-' dan '_', membuat string yang dikodekan dapat digunakan dengan aman dalam URL tanpa perlu pengkodean tambahan. Pengkode Base64 kami termasuk opsi untuk menghasilkan output aman URL, memungkinkan Anda memilih format pengkodean yang sesuai berdasarkan tempat penggunaan data yang dikodekan."
      },
      {
        question: "Apakah pengkodean Base64 dapat digunakan untuk enkripsi atau keamanan data?",
        answer: "Tidak, pengkodean Base64 bukanlah enkripsi dan tidak menyediakan keamanan atau kerahasiaan data. Ini hanyalah skema pengkodean data untuk mengubah data biner ke format teks. Pengkodean Base64 dapat dengan mudah diuraikan oleh siapa pun menggunakan alat yang tersedia luas (termasuk pengurai Base64 kami). Jika Anda memerlukan kerahasiaan data, Anda harus menggunakan algoritma enkripsi yang sesuai (seperti AES, RSA) sebelum pengkodean Base64. Base64 terutama digunakan untuk kompatibilitas, bukan keamanan."
      },
      {
        question: "Bagaimana cara mengenali teks yang dikodekan Base64?",
        answer: "Teks yang dikodekan Base64 biasanya memiliki karakteristik berikut: hanya terdiri dari huruf (A-Z, a-z), angka (0-9) dan biasanya karakter '+' dan '/' (atau varian aman URL '-' dan '_'); panjangnya selalu kelipatan 4 karakter (terkadang diisi dengan '=' di akhir); biasanya terlihat seperti string acak tanpa pola kata alami. Pengurai Base64 kami termasuk fungsi validasi yang dapat memverifikasi apakah input adalah Base64 yang valid sebelum mencoba menguraikannya."
      },
      {
        question: "Apa yang terjadi jika string Base64 saya tidak memiliki karakter pengisi?",
        answer: "Pengkodean Base64 terkadang menambahkan karakter pengisi ('=') di akhir untuk memastikan panjang string adalah kelipatan 4. Meskipun spesifikasi Base64 standar mengharuskan pengisian ini, banyak pengurai Base64 modern (termasuk kami) dapat menangani string Base64 tanpa pengisian, dengan secara otomatis menghitung pengisian yang benar berdasarkan panjang string. Namun, untuk kompatibilitas maksimum dengan semua pengurai Base64, sebaiknya sertakan pengisian yang sesuai saat menghasilkan data yang dikodekan Base64."
      }
    ]
  },
  guide: {
    title: "Panduan langkah demi langkah menggunakan Pengkode/Pengurai Base64",
    steps: [
      "Pilih mode operasi yang diinginkan dengan mengklik tombol 'Enkode' atau 'Dekode' di bagian atas antarmuka alat",
      "Untuk pengkodean, pilih metode input Anda: 'Teks' untuk input teks biasa, 'Berkas' untuk mengunggah berkas biner, atau 'Hex' untuk representasi string heksadesimal",
      "Jika mengkodekan berkas, Anda dapat memilih untuk mencentang 'Tambahkan header Base64 gambar', untuk menyertakan awalan URI data yang sesuai, memudahkan penggunaan langsung dalam lingkungan Web",
      "Untuk penguraian, pilih 'Teks' untuk input string Base64 atau 'Berkas' untuk mengunggah berkas teks yang berisi data Base64",
      "Saat mengurai, Anda dapat memilih pengkodean karakter yang diinginkan (UTF-8 atau GBK) dari menu tarik-turun, untuk memproses karakter internasional dengan benar",
      "Masukkan data atau unggah berkas sesuai metode input yang dipilih",
      "Klik tombol 'Enkode' atau 'Dekode' untuk memproses data - hasil akan ditampilkan di bidang output di bawah",
      "Untuk gambar yang diurai, gunakan tombol 'Tampilkan gambar' untuk melihat pratinjau hasil, atau gunakan opsi unduhan untuk menyimpan konten yang diurai sebagai berkas dalam format pilihan Anda"
    ]
  },
  conclusion: "Pengkode/Pengurai Base64 adalah alat serbaguna yang cocok untuk berbagai skenario yang memerlukan transmisi data antara sistem yang hanya mendukung teks. Baik Anda seorang pengembang web yang menanamkan gambar ke CSS, insinyur sistem yang mengirim data biner melalui protokol teks, atau hanya perlu mengurai string Base64 yang Anda temui, alat ini menyediakan solusi efisien dengan opsi lanjutan untuk memenuhi kebutuhan spesifik Anda. Dengan dukungan berbagai metode input, pengkodean karakter, dan format berkas, alat Base64 kami membantu menghubungkan sistem biner dan berbasis teks dalam lingkungan komputasi yang beragam saat ini."
}
