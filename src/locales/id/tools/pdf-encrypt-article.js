export default {
  title: 'Alat Enkripsi PDF: Solusi Berbasis Browser untuk Mengatur Kata Sandi Pembuka dan Izin',
  functionTitle: 'Apa itu Alat Enkripsi PDF Online dan Bagaimana Cara Melindungi Dokumen?',
  intro: 'Alat enkripsi PDF online kami menggunakan tumpukan teknologi open-source sepenuhnya front-end, mendukung enkripsi <strong>AES-128/AES-256 dan RC4-40</strong>. Alat ini dapat mengatur <strong>kata sandi pembuka (kata sandi pengguna)</strong> dan <strong>kata sandi izin (kata sandi pemilik)</strong>, sekaligus menyediakan opsi kontrol izin untuk mencetak, mengedit, menyalin, dan mengisi formulir. Mendukung unggahan seret dan lepas, pilihan ganda tradisional, impor batch URL, dan penambahan batch, menawarkan <strong>pratinjau perbandingan waktu nyata</strong> dan analisis dasar untuk membantu Anda dengan cepat memverifikasi efek enkripsi dan konfigurasi izin. Setelah enkripsi selesai, Anda dapat <span style="font-weight:bold">mengunduh satu per satu</span> atau <span style="font-weight:bold">mengunduh batch dalam format ZIP</span>. Semua operasi dilakukan secara lokal di browser tanpa mengunggah ke server, menjaga privasi dan efisiensi.',

  useCasesTitle: 'Skenario Penerapan Umum Enkripsi PDF',
  useCases: [
    'Mengatur kata sandi pembuka dan kontrol izin untuk dokumen berbagi perusahaan',
    'Menambahkan enkripsi keamanan tinggi AES-256 untuk PDF sensitif seperti kontrak dan faktur',
    'Membatasi pencetakan dan penyalinan untuk mencegah penyebaran tidak sah',
    'Mengatur pencetakan resolusi rendah dan edit terbatas untuk materi pelatihan online',
    'Mengenkripsi PDF batch dan mengatur izin secara seragam',
    'Mengenkripsi dengan cepat dan melihat pratinjau efek enkripsi di perangkat seluler',
    'Enkripsi lokal browser tanpa unggah untuk melindungi privasi'
  ],

  tipTitle: 'Tips Profesional:',
  tipContent: 'Disarankan menggunakan <strong>kata sandi kuat</strong> dikombinasikan dengan tingkat enkripsi <strong>AES-256</strong> untuk keamanan yang lebih tinggi; untuk performa pencarian yang lebih baik, Anda dapat mengisi judul dan kata kunci di metadata dan mempertahankan strategi penamaan yang konsisten (alat saat ini tidak mengubah metadata PDF).',

  conclusion: '<strong>Alat enkripsi PDF online</strong> dapat dengan cepat menyelesaikan enkripsi dan konfigurasi izin di browser, cocok untuk berbagai skenario seperti perusahaan, institusi pendidikan, dan pengguna individu. Dengan mengatur kata sandi pengguna dan kata sandi pemilik serta memilih algoritma enkripsi yang sesuai, Anda dapat memastikan keamanan sambil mempertahankan kemudahan penggunaan yang baik.',

  faqTitle: 'Pertanyaan Umum (FAQ)',
  faqs: [
    {
      question: 'Algoritma enkripsi apa yang didukung oleh alat enkripsi PDF online?',
      answer: 'Alat ini mendukung enkripsi <strong>AES-128</strong>, <strong>AES-256</strong>, serta enkripsi <strong>RC4-40</strong> yang kompatibel dengan versi lama. Pemilihan algoritma spesifik untuk enkripsi 128 bit (AES atau RC4) tergantung pada konfigurasi dan versi QPDF.'
    },
    {
      question: 'Bagaimana cara mengatur kata sandi pembuka (kata sandi pengguna) dan kata sandi izin (kata sandi pemilik)?',
      answer: 'Masukkan <strong>kata sandi pengguna</strong> dan <strong>kata sandi pemilik</strong> secara terpisah di bagian "Perlindungan Kata Sandi"; alat saat ini memerlukan keduanya untuk melakukan enkripsi (ini dapat dilonggarkan menjadi hanya kata sandi pengguna di versi mendatang).'
    },
    {
      question: 'Apakah mendukung enkripsi batch dan pratinjau perbandingan waktu nyata?',
      answer: 'Mendukung impor batch dan penambahan batch; setelah melakukan enkripsi, Anda dapat melakukan <strong>pratinjau perbandingan waktu nyata</strong> (halaman pertama asli dan terenkripsi), dan menyediakan tombol unduh individu (hanya ditampilkan setelah enkripsi item tersebut selesai) serta <strong>unduh batch ZIP</strong>.'
    }
  ],

  tutorialTitle: 'Cara Menggunakan Alat Enkripsi PDF Online',
  steps: [
    {
      title: 'Tambah File PDF',
      description: 'Unggah melalui <strong>seret dan lepas</strong> atau klik untuk memilih file (mendukung <strong>pilihan ganda</strong> dan <strong>penambahan batch</strong>); Anda juga dapat menempel beberapa URL sekaligus di bagian "Impor Batch URL PDF Online".',
      note: 'Disarankan untuk terlebih dahulu mengenal prosesnya menggunakan PDF contoh.'
    },
    {
      title: 'Pratinjau dan Analisis',
      description: 'Alat akan secara otomatis merender halaman pertama PDF asli dan halaman pertama PDF terenkripsi untuk perbandingan setelah enkripsi selesai; untuk melihat efek izin, sesuaikan di bagian "Kontrol Izin" di sebelah kiri dan enkripsi ulang.',
      note: 'Jika pratinjau gagal, file mungkin rusak atau tidak kompatibel.'
    },
    {
      title: 'Atur Kata Sandi dan Izin',
      description: 'Atur <strong>kata sandi pengguna</strong> dan <strong>kata sandi pemilik</strong> di "Perlindungan Kata Sandi" sambil melihat petunjuk <strong>kekuatan kata sandi</strong>; konfigurasikan izin cetak, edit, salin, dan isi formulir di "Kontrol Izin".',
      note: 'Disarankan memilih AES-256 dan menggunakan kata sandi kuat.'
    }
  ],

  successTitle: 'Selesai!',
  successContent: 'Anda telah menguasai cara menggunakan alat enkripsi PDF online untuk mengatur kata sandi dan izin dokumen, serta memverifikasi efek enkripsi melalui pratinjau perbandingan.',

  relatedToolsTitle: 'Alat Terkait yang Mungkin Menarik bagi Anda',
  relatedTools: [
        {
            name: 'Penggabung PDF',
            description: 'Menggabungkan beberapa file PDF menjadi satu dokumen PDF lengkap, mendukung pengurutan ulang halaman antar file.',
            url: 'https://www.ufreetools.com/tool/merge-pdf-online'
        },
        {
            name: 'Pemisah PDF',
            description: 'Memisahkan dokumen PDF besar menjadi beberapa file PDF kecil, mendukung halaman pemisahan kustom.',
            url: 'https://www.ufreetools.com/tool/pdf-splitter'
        },
        {
            name: 'Konverter PDF ke Word',
            description: 'Mengonversi dokumen PDF ke format Word yang dapat diedit, mempertahankan tata letak dan format asli.',
            url: 'https://www.ufreetools.com/tool/pdf-to-word-converter'
        },
        {
            name: 'Konverter PDF ke Gambar',
            description: 'Mengonversi setiap halaman dokumen PDF ke file gambar berkualitas tinggi, mendukung berbagai format keluaran.',
            url: 'https://www.ufreetools.com/tool/pdf-to-image-converter'
        }
  ],

  referencesTitle: 'Sumber Referensi',
  references: [
    { title: 'QPDF Resmi', description: 'QPDF adalah alat pemrosesan struktur dan enkripsi PDF yang kuat, menyediakan kemampuan kontrol izin yang kaya.' },
    { title: 'Dokumentasi PDF.js', description: 'PDF.js adalah pustaka open-source untuk merender PDF di browser, cocok untuk pratinjau dan pengambilan informasi dasar.' },
    { title: 'Spesifikasi Referensi PDF Adobe', description: 'Dokumen referensi PDF Adobe menyediakan detail spesifikasi PDF dan definisi terkait keamanan.' }
  ],

  coverAlt: 'Gambar Halaman Produk Alat Enkripsi PDF Online'
}