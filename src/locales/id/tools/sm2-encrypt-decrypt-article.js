export default {
  title: 'Enkripsi dan Dekripsi SM2: Panduan Lengkap',
  introduction: {
    title: 'Apa itu Enkripsi SM2 dan Bagaimana Cara Kerjanya?',
    p1: 'Enkripsi SM2 adalah komponen penting dari standar kriptografi komersial China, sebuah algoritma kriptografi kunci publik yang kuat. Dibuat oleh Kantor Manajemen Kriptografi Komersial China, enkripsi SM2 memberikan keamanan setara dengan RSA-2048 tetapi dengan panjang kunci yang lebih pendek, performa lebih tinggi, sangat cocok untuk komunikasi digital aman dan perlindungan data.',
    p2: 'Berbeda dengan metode enkripsi simetris, SM2 menggunakan sepasang kunci: kunci publik untuk enkripsi yang dapat dibagikan secara bebas, dan kunci privat untuk dekripsi yang harus dijaga kerahasiaannya. Pendekatan asimetris ini memecahkan masalah distribusi kunci dalam metode enkripsi tradisional, memungkinkan pihak-pihak berkomunikasi secara aman tanpa perlu berbagi kunci sebelumnya.',
    p3: 'Alat enkripsi SM2 kami menyediakan antarmuka yang ramah pengguna untuk membuat pasangan kunci, mengenkripsi informasi sensitif, dan mendekripsi pesan terenkripsi SM2 tanpa memerlukan pengetahuan kriptografi profesional. Ini membuat teknologi enkripsi canggih dapat diakses oleh semua orang, dari profesional keamanan jaringan hingga individu yang peduli dengan privasi data.'
  },
  useCases: {
    title: 'Kasus Penggunaan Enkripsi SM2',
    item1: 'Komunikasi aman dalam sistem perbankan dan keuangan, terutama di wilayah di mana SM2 adalah standar regulasi',
    item2: 'Melindungi komunikasi pemerintah dan militer yang sensitif',
    item3: 'Sistem tanda tangan digital untuk autentikasi dokumen dan non-repudiasi',
    item4: 'Melindungi data dalam transit untuk platform e-commerce dan layanan online',
    item5: 'Mengimplementasikan autentikasi dalam sistem sertifikat digital dan infrastruktur PKI'
  },
  guide: {
    title: 'Cara Menggunakan Alat Enkripsi/Dekripsi SM2',
    step1: {
      title: 'Langkah 1: Manajemen Kunci',
      description: 'Pertama-tama siapkan kunci enkripsi. Anda memiliki tiga pilihan:',
      option1: 'Klik "Buat Pasangan Kunci Baru" untuk membuat pasangan kunci SM2 baru',
      option2: 'Impor kunci yang sudah ada dengan mengklik tombol "Impor Kunci"',
      option3: 'Klik "Muat Contoh" untuk mencoba alat ini dengan kunci yang sudah dibuat sebelumnya'
    },
    step2: {
      title: 'Langkah 2: Mempersiapkan Data',
      description: 'Untuk enkripsi atau dekripsi, Anda perlu memasukkan data:',
      option1: 'Pilih format input (teks, heksadesimal, Base64, atau file)',
      option2: 'Untuk enkripsi, masukkan plaintext Anda di bidang input',
      option3: 'Untuk dekripsi, masukkan ciphertext yang ingin Anda dekripsi',
      option4: 'Saat menggunakan mode file, seret dan lepas file atau klik untuk memilih'
    },
    step3: {
      title: 'Langkah 3: Konfigurasi Pengaturan Enkripsi',
      description: 'Sebelum memproses data, konfigurasikan pengaturan penting ini:',
      option1: 'Pilih format ciphertext (C1C2C3 atau C1C3C2) - aplikasi di China biasanya menggunakan C1C3C2',
      option2: 'Pilih format output yang Anda sukai (teks, heksadesimal, atau Base64)'
    },
    step4: {
      title: 'Langkah 4: Proses dan Dapatkan Hasil',
      description: 'Klik tombol "Enkripsi" atau "Dekripsi" untuk memproses data Anda. Setelah selesai, Anda dapat menyalin hasil ke clipboard, mengunduh sebagai file, atau melihat komponen detail ciphertext (bagian C1, C2, dan C3) saat mengenkripsi.'
    }
  },
  faq: {
    title: 'Pertanyaan Umum tentang Enkripsi SM2',
    q1: 'Apa keunggulan enkripsi SM2 dibandingkan algoritma enkripsi lainnya?',
    a1: 'Enkripsi SM2 menawarkan beberapa keunggulan, termasuk panjang kunci yang lebih pendek (256-bit) tetapi memberikan keamanan setara dengan RSA-2048, waktu pemrosesan operasi enkripsi/dekripsi yang lebih cepat, dan kepatuhan terhadap standar regulasi China. Ini juga dirancang untuk menahan serangan komputasi kuantum, menjadikannya solusi enkripsi yang berorientasi masa depan.',
    q2: 'Apa perbedaan antara format ciphertext C1C2C3 dan C1C3C2?',
    a2: 'Kedua format berisi tiga komponen yang sama tetapi dengan susunan berbeda. C1 mewakili titik kurva eliptik, C2 adalah data terenkripsi aktual, C3 adalah nilai hash untuk verifikasi integritas. C1C2C3 adalah format standar asli, sedangkan C1C3C2 lebih umum digunakan dalam aplikasi dan sistem China. Alat kami mendukung kedua format untuk kompatibilitas maksimum.',
    q3: 'Apakah enkripsi SM2 cocok untuk data pribadi atau bisnis yang sensitif?',
    a3: 'Ya, enkripsi SM2 cocok untuk melindungi data sensitif karena memberikan keamanan kriptografi yang kuat. Namun, untuk aplikasi bisnis yang sangat sensitif, kami merekomendasikan penerapan enkripsi SM2 dengan sistem manajemen kunci yang tepat dan protokol. Meskipun alat online kami nyaman, lingkungan produksi sensitif harus menggunakan pustaka enkripsi yang terinstal lokal dan penyimpanan kunci yang aman.',
    q4: 'Bagaimana cara memverifikasi apakah enkripsi SM2 saya bekerja dengan benar?',
    a4: 'Anda dapat memverifikasi implementasi SM2 Anda dengan mengenkripsi pesan contoh, kemudian mendekripsinya untuk memastikan Anda mendapatkan plaintext asli kembali. Alat kami menyediakan opsi "Muat Contoh" yang secara otomatis mendemonstrasikan proses ini. Untuk sistem produksi, pertimbangkan untuk menggunakan vektor uji dari dokumen standar SM2 untuk memverifikasi implementasi Anda.',
    q5: 'Bisakah data terenkripsi SM2 didekripsi tanpa kunci privat?',
    a5: 'Tidak, enkripsi SM2 yang diimplementasikan dengan benar tidak dapat didekripsi tanpa kunci privat yang sesuai. Keamanan SM2 didasarkan pada masalah logaritma diskrit kurva eliptik, yang secara komputasi tidak layak dipecahkan dengan teknologi saat ini. Itulah mengapa sangat penting untuk menjaga kerahasiaan kunci privat dan tidak pernah membagikannya dengan pihak yang tidak berwenang.'
  },
  comparison: {
    title: 'Perbandingan SM2 dengan Algoritma Enkripsi Lain',
    p1: 'Enkripsi SM2 termasuk dalam keluarga algoritma kriptografi kurva eliptik (ECC), mirip dengan ECDSA tetapi dengan parameter khusus yang ditentukan oleh standar China. Dibandingkan dengan RSA, SM2 memberikan keamanan setara dengan panjang kunci yang jauh lebih pendek (kunci SM2 256-bit memberikan keamanan yang mirip dengan kunci RSA 2048-bit), menghasilkan operasi yang lebih cepat dan kebutuhan sumber daya yang lebih rendah.',
    p2: 'Untuk aplikasi yang memerlukan kepatuhan terhadap standar kriptografi China, SM2 adalah pilihan yang lebih disukai daripada algoritma internasional seperti RSA atau ECDSA. Keunggulan performanya membuatnya sangat cocok untuk lingkungan dengan sumber daya terbatas seperti kartu pintar, perangkat IoT, dan aplikasi seluler di mana kapasitas pemrosesan dan memori terbatas.',
    p3: 'Meskipun SM2 semakin mendapatkan pengakuan internasional, RSA masih didukung lebih luas dalam perangkat lunak dan perangkat keras global. Untuk membandingkan dengan metode enkripsi asimetris populer lainnya, lihat',
    linkText: 'Alat Enkripsi/Dekripsi RSA'
  },
  references: {
    title: 'Referensi dan Bacaan Lebih Lanjut',
    link1: 'Wikipedia-SM2',
    link2: 'Algoritma Kriptografi Kunci Publik Kurva Eliptik SM2',
    link3: 'Parameter Kurva yang Direkomendasikan untuk Algoritma Kriptografi Kunci Publik Kurva Eliptik SM2',
  },
  relatedTools: {
    title: 'Alat Enkripsi Terkait',
    tool1: 'Alat Enkripsi/Dekripsi RSA',
    tool2: 'Kalkulator Hash',
    tool3: 'Alat Enkripsi Simetris',
    tool4: 'Generator Kata Sandi Aman'
  }
}
