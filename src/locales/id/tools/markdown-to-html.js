export default {
  name: 'Konversi Markdown ke HTML',
  description: 'Ubah teks Markdown menjadi HTML dengan opsi yang dapat disesuaikan',
  input: {
    title: 'Input Markdown',
    placeholder: 'Ketik atau tempel teks Markdown Anda di sini...',
    loadSample: 'Muat Contoh',
    clearInput: 'Hapus',
    uploadFile: 'Unggah File Markdown',
    paste: 'Tempel dari Clipboard',
    charCount: 'Jumlah Karakter',
    lineCount: 'Jumlah Baris'
  },
  output: {
    title: 'Output HTML',
    copied: 'HTML telah disalin ke clipboard',
    download: 'Unduh HTML',
    copyOutput: 'Salin HTML',
    clearOutput: 'Hapus Output',
    previewTab: 'Pratinjau',
    htmlTab: 'Kode HTML',
    previewMode: 'Mode Pratinjau',
    sourceMode: 'Mode Sumber HTML'
  },
  options: {
    title: 'Opsi Konversi',
    headerIds: 'ID Judul Otomatis',
    gfm: 'Markdown Gaya GitHub',
    tables: 'Tabel',
    breaks: 'Garis Baru',
    smartLists: 'Daftar Pintar',
    smartypants: 'Tanda Baca Pintar',
    xhtml: 'XHTML',
    highlight: 'Penyorotan Sintaks',
    sanitize: 'Bersihkan HTML',
    footnotes: 'Catatan Kaki',
    taskLists: 'Daftar Tugas',
    emoji: 'Dukungan Emoji',
    includeStyle: 'Sertakan CSS Default',
    realtimePreview: 'Pratinjau Real-time',
    scrollSync: 'Sinkronisasi Scroll',
    htmlOptions: 'Opsi HTML'
  },
  styles: {
    title: 'Opsi Gaya',
    theme: 'Tema',
    codeTheme: 'Tema Kode',
    customCSS: 'CSS Kustom',
    fontSize: 'Ukuran Font',
    lineHeight: 'Tinggi Baris',
    enableCustom: 'Aktifkan Gaya Kustom'
  },
  themes: {
    default: 'Default',
    github: 'GitHub',
    bootstrap: 'Bootstrap',
    bulma: 'Bulma',
    medium: 'Medium',
    solarized: 'Solarized',
    dark: 'Mode Gelap',
    custom: 'Kustom'
  },
  codeThemes: {
    default: 'Default',
    github: 'GitHub',
    vscode: 'VS Code',
    atom: 'Atom',
    dracula: 'Dracula',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },
  actions: {
    convert: 'Konversi ke HTML',
    clearAll: 'Hapus Semua',
    copyHtml: 'Salin HTML',
    saveAsHtml: 'Simpan sebagai HTML',
    generateToc: 'Buat Daftar Isi'
  },
  messages: {
    conversionSuccess: 'Konversi Markdown berhasil',
    conversionFailed: 'Konversi Markdown gagal: {error}',
    emptyInput: 'Masukkan teks Markdown untuk dikonversi',
    copied: 'HTML telah disalin ke clipboard',
    tocGenerated: 'Daftar isi telah dibuat'
  },
  alerts: {
    copied: 'Tersalin ke clipboard',
    copyFailed: 'Gagal menyalin ke clipboard',
    pasteFailed: 'Gagal menempel dari clipboard',
    confirmClear: 'Yakin ingin menghapus input?'
  },
  status: {
    lastConversion: 'Waktu konversi terakhir'
  },
  samples: {
    basic: 'Contoh Dasar',
    extended: 'Contoh Lanjutan',
    article: 'Contoh Artikel'
  },
  download: {
    title: 'Ekspor Markdown ke HTML'
  },
  
  // Bagian artikel baru
  article: {
    title: "Konverter Markdown ke HTML: Ubah Teks Menjadi Konten Web Terformat",
    features: {
      title: "Konversi Markdown ke HTML: Sederhanakan Proses Pembuatan Konten",
      description: "<strong>Konverter Markdown ke HTML</strong> adalah alat canggih yang dirancang untuk mengubah sintaks Markdown ringan menjadi kode HTML siap web. <strong>Alat konversi format teks</strong> ini menjembatani penulisan teks sederhana dengan pembuatan konten web, memungkinkan penulis fokus pada konten tanpa khawatir dengan tag HTML yang kompleks.<br><br>Kesederhanaan Markdown menjadikannya pilihan ideal untuk pembuatan konten, tetapi browser membutuhkan HTML untuk menampilkan konten dengan benar. <strong>Prosesor Markdown</strong> kami secara otomatis menangani konversi ini, mendukung fitur standar Markdown termasuk judul, daftar, tautan, gambar, tabel, blok kode, kutipan, dan pemformatan teks, sambil menyediakan opsi kustomisasi dan pratinjau.",
      useCases: {
        title: "Aplikasi Praktis Konversi Markdown ke HTML",
        items: [
          "<strong>Pembuatan Artikel Blog</strong>: Penulis konten dapat menggunakan format Markdown yang mudah untuk membuat draf artikel, lalu mengubahnya menjadi HTML untuk dipublikasikan di berbagai platform blog. <strong>Parser Markdown</strong> memastikan pemformatan yang tepat sekaligus menjaga struktur HTML yang bersih, bekerja mulus dengan sistem manajemen konten seperti WordPress, Ghost, atau Jekyll.",
          "<strong>Pengembangan Dokumentasi</strong>: Penulis teknis menggunakan Markdown untuk menulis dokumentasi perangkat lunak, panduan pengguna, dan manual teknis, lalu mengonversinya menjadi HTML untuk situs dokumentasi berbasis web. Dukungan alat ini untuk pemformatan kode dan penyorotan sintaks membuatnya ideal untuk membuat <strong>dokumentasi pengembang</strong> yang berisi contoh kode.",
          "<strong>File README Repositori Kode</strong>: Pengembang yang mendokumentasikan repositori untuk GitHub, GitLab, atau Bitbucket dapat menggunakan alat ini untuk mempratinjau render Markdown mereka dan mengekstrak HTML bersih untuk platform lain yang tidak mendukung Markdown secara native.",
          "<strong>Pemformatan Buletin Email</strong>: Pemasaran dapat menulis konten email dalam Markdown sederhana, lalu mengonversinya menjadi HTML untuk platform pemasaran email. <strong>Generator HTML</strong> ini membuat kode bersih yang bekerja dengan baik di berbagai klien email sambil mempertahankan konsistensi format.",
          "<strong>Konten Pendidikan</strong>: Guru dan dosen dapat membuat materi pembelajaran dalam Markdown dan mengonversinya menjadi HTML untuk sistem manajemen pembelajaran atau platform kursus online, memanfaatkan fitur pemformatan alat ini untuk membuat <strong>konten terstruktur</strong> dengan judul, daftar, dan penekanan.",
          "<strong>Penulisan Kolaboratif</strong>: Tim yang bekerja pada dokumen bersama dapat menggunakan Markdown untuk menyederhanakan proses, lalu mengonversinya menjadi HTML saat siap dipublikasikan. Alur kerja ini menyederhanakan proses penyuntingan sekaligus memastikan output HTML akhir bersih dan konsisten."
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Konversi Markdown ke HTML",
      items: [
        {
          question: "Apa perbedaan antara Markdown dan HTML?",
          answer: "Markdown dan HTML melayani tujuan berbeda dalam alur kerja pembuatan konten. <strong>HTML (HyperText Markup Language)</strong> adalah bahasa standar untuk membuat halaman web dan aplikasi web. Ia menggunakan tag seperti &lt;p&gt;, &lt;h1&gt;, dan &lt;ul&gt; untuk mendefinisikan struktur dan format dokumen. Meskipun kuat, HTML bisa bertele-tele dan sulit ditulis dengan benar oleh pengguna non-teknis.<br><br>Di sisi lain, <strong>Markdown</strong> adalah bahasa markup ringan yang dirancang untuk memaksimalkan keterbacaan dan kemudahan penulisan. Ia menggunakan simbol sederhana seperti # untuk judul, * untuk daftar, dan ** untuk teks tebal. Kesederhanaan ini membuat Markdown ideal untuk pembuatan konten awal, terutama ketika fokus pada teks daripada tata letak.<br><br><strong>Konverter Markdown ke HTML</strong> kami menjembatani kedua dunia ini, memungkinkan Anda menulis konten dengan Markdown sederhana dan menghasilkan kode HTML yang benar saat diperlukan untuk publikasi web. Ini memberi Anda yang terbaik dari kedua dunia: kemudahan Markdown untuk menulis dan dukungan browser universal HTML untuk menampilkan."
        },
        {
          question: "Mengapa blok kode saya terlihat berbeda setelah dikonversi?",
          answer: "Blok kode dalam <strong>output HTML</strong> Anda mungkin terlihat berbeda dari Markdown asli karena beberapa alasan:<br><br>1. <strong>Penyorotan Sintaks</strong>: Jika Anda mengaktifkan opsi penyorotan sintaks, konverter kami akan menerapkan pewarnaan khusus bahasa ke kode Anda, meningkatkan keterbacaan dan membuatnya lebih menarik secara visual. Ini menambahkan HTML dan CSS tambahan untuk memberi gaya pada berbagai bagian kode sesuai sintaks bahasa.<br><br>2. <strong>Peningkatan Format</strong>: Konverter akan membungkus blok kode dalam elemen HTML yang sesuai (tag &lt;pre&gt; dan &lt;code&gt;) dan mungkin menerapkan gaya seperti warna latar belakang, nomor baris, atau penyesuaian font untuk meningkatkan keterbacaan.<br><br>3. <strong>Escape Karakter</strong>: Karakter khusus dalam kode harus di-escape dengan benar dalam HTML untuk ditampilkan dengan benar. Misalnya, tanda kurung sudut dalam tag HTML dalam blok kode akan diubah menjadi entitas &amp;lt; dan &amp;gt;.<br><br>Konversi ini disengaja dan membantu membuat kode Anda lebih mudah dibaca saat ditampilkan di browser, sekaligus mempertahankan integritas fungsional contoh kode. Anda dapat menyesuaikan aspek-aspek ini menggunakan opsi gaya dan format alat."
        },
        {
          question: "Bisakah saya menyesuaikan gaya output HTML?",
          answer: "Ya, <strong>konverter Markdown</strong> kami menyediakan beberapa opsi untuk menyesuaikan gaya output HTML:<br><br>1. <strong>Sertakan CSS Default</strong>: Aktifkan opsi ini untuk menyertakan set gaya CSS dasar yang membuat HTML Anda langsung terlihat lebih menarik secara visual. Gaya ini mencakup tipografi, spasi, dan skema warna yang meningkatkan keterbacaan.<br><br>2. <strong>Opsi Gaya Kustom</strong>: Bergantung pada kebutuhan output Anda, Anda dapat memilih berbagai opsi tema yang memengaruhi tampilan elemen seperti judul, daftar, blok kutipan, dan tautan.<br><br>3. <strong>Tema Blok Kode</strong>: Untuk konten teknis, Anda dapat memilih berbagai tema penyorotan sintaks yang mengubah tampilan blok kode dalam output Anda.<br><br>4. <strong>Edit HTML Langsung</strong>: Setelah konversi, jika Anda memerlukan format yang sangat spesifik, Anda dapat beralih ke tampilan HTML dan menambahkan kelas CSS kustom atau gaya sebaris secara manual.<br><br>Opsi kustomisasi ini memungkinkan Anda menghasilkan <strong>HTML siap web</strong> yang sesuai dengan persyaratan desain Anda, sekaligus mempertahankan struktur jelas yang disediakan oleh format Markdown. Panel pratinjau akan menunjukkan dengan tepat bagaimana konten Anda akan terlihat dengan opsi gaya yang dipilih."
        },
        {
          question: "Apakah konverter ini mempertahankan struktur dokumen saya?",
          answer: "Ya, <strong>konverter Markdown ke HTML</strong> secara khusus dirancang untuk mempertahankan integritas struktur dokumen selama proses konversi. Berikut adalah cara struktur dokumen dipertahankan:<br><br>1. <strong>Hierarki Judul</strong>: Judul Markdown (# hingga ######) dikonversi dengan benar ke padanan HTML-nya (&lt;h1&gt; hingga &lt;h6&gt;), mempertahankan garis besar logis dokumen dan hierarki bagian.<br><br>2. <strong>Struktur Daftar</strong>: Daftar bernomor dan tidak bernomor, termasuk daftar bersarang, dikonversi dengan benar menggunakan tag HTML yang sesuai (&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;) sambil mempertahankan hubungan hierarkisnya.<br><br>3. <strong>Pemisahan Paragraf</strong>: Baris kosong yang memisahkan paragraf dalam Markdown dikonversi dengan benar ke elemen &lt;p&gt; terpisah dalam HTML.<br><br>4. <strong>Elemen Blok</strong>: Blok khusus seperti blok kutipan, blok kode, dan tabel tetap terpisah dari teks paragraf biasa dalam HTML yang dihasilkan.<br><br>5. <strong>Baris Baru vs Paragraf</strong>: Konverter secara cerdas menangani perbedaan antara baris baru dalam paragraf dan pemisah paragraf aktual sesuai konvensi Markdown standar.<br><br>Pemeliharaan struktur ini memastikan <strong>hierarki dokumen</strong> Anda tetap utuh, membuat HTML yang dikonversi benar secara semantik dan diorganisir dengan tepat untuk browser web, pembaca layar, dan mesin pencari."
        },
        {
          question: "Apakah HTML yang dihasilkan bersih dan ramah SEO?",
          answer: "Ya, <strong>konverter Markdown</strong> kami menghasilkan HTML yang bersih, benar secara semantik, dan sangat ramah SEO. Berikut adalah alasan mengapa output mendukung pengoptimalan mesin pencari yang baik:<br><br>1. <strong>Struktur Semantik</strong>: HTML yang dihasilkan menggunakan elemen semantik (&lt;h1&gt;, &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, dll.) dengan benar, yang membantu mesin pencari memahami struktur dan pentingnya berbagai bagian konten.<br><br>2. <strong>Kode Bersih</strong>: HTML yang dihasilkan ringan, tanpa markup yang tidak perlu atau gaya sebaris yang dapat membebani halaman. Kode bersih ini lebih mudah diurai dan diindeks oleh mesin pencari.<br><br>3. <strong>Hierarki Judul yang Tepat</strong>: Judul Markdown dikonversi ke tag judul HTML yang sesuai, mempertahankan garis besar dokumen logis yang digunakan mesin pencari untuk memahami hubungan konten dan hierarki topik.<br><br>4. <strong>Konten yang Dapat Diakses</strong>: Output HTML mengikuti praktik terbaik aksesibilitas, yang selaras dengan persyaratan SEO, karena keduanya berfokus pada struktur dokumen dan semantik yang tepat.<br><br>5. <strong>Opsi Pemurnian</strong>: Fungsi pemurnian HTML menghapus elemen yang berpotensi tidak aman sambil mempertahankan integritas struktur konten, memastikan output HTML yang aman dan bersih.<br><br><strong>HTML yang Dioptimalkan untuk SEO</strong> ini memberikan dasar yang kuat untuk konten web Anda, memungkinkan mesin pencari merayapi, memahami, dan mengindeks halaman Anda secara efektif, berpotensi meningkatkan peringkat pencarian dan visibilitas Anda."
        }
      ]
    },
    guide: {
      title: "Cara Menggunakan Konverter Markdown ke HTML: Panduan Langkah demi Langkah",
      step1: "<strong>Masukkan Teks Markdown Anda</strong>: Pertama, ketik atau tempel konten Markdown Anda di area input di sebelah kiri konverter. Jika Anda baru mengenal Markdown atau membutuhkan titik awal, gunakan tombol \"Muat Contoh\" untuk melihat contoh sintaks dasar, fitur lanjutan, atau struktur artikel lengkap.",
      step2: "<strong>Pilih Opsi Konversi</strong>: Gunakan opsi di bagian atas alat untuk mengonfigurasi preferensi konversi Anda. Anda dapat mengaktifkan \"Pratinjau Real-time\" untuk segera melihat perubahan, \"Sinkronisasi Scroll\" untuk menggulir area input dan output bersama-sama, \"Bersihkan HTML\" untuk menghapus elemen yang berpotensi tidak aman, dan \"Sertakan CSS Default\" untuk menambahkan gaya dasar ke output HTML.",
      step3: "<strong>Pratinjau Konten Anda</strong>: Saat Anda mengetik atau menempel konten, area pratinjau di sebelah kanan akan menunjukkan bagaimana Markdown Anda dirender sebagai HTML. Beralihlah antara mode \"Pratinjau\" untuk melihat hasil yang diformat dan mode \"Kode HTML\" untuk melihat markup HTML yang sebenarnya dihasilkan.",
      step4: "<strong>Sempurnakan Markdown Anda</strong>: Lakukan penyesuaian yang diperlukan pada teks Markdown Anda, merujuk pada pratinjau untuk memastikan format Anda muncul seperti yang diharapkan. Jika konversi real-time diaktifkan, konverter akan memperbarui secara otomatis, memungkinkan Anda melihat efek perubahan secara instan.",
      step5: "<strong>Format Blok Kode</strong>: Untuk konten teknis, gunakan tiga backtick (```) diikuti dengan nama bahasa untuk membuat blok kode dengan penyorotan sintaks. Misalnya, gunakan ```javascript sebelum kode dan ``` setelahnya untuk menerapkan penyorotan sintaks yang tepat untuk kode JavaScript.",
      step6: "<strong>Salin HTML yang Dihasilkan</strong>: Setelah puas dengan hasil konversi, klik tombol \"Salin HTML\" (ikon panah atas) di atas area output untuk menyalin kode HTML ke clipboard. Anda kemudian dapat menempelkannya ke editor situs web, CMS, atau aplikasi apa pun yang menerima HTML.",
      step7: "<strong>Unduh sebagai File HTML</strong>: Jika Anda perlu menyimpan dokumen HTML lengkap, klik tombol \"Unduh HTML\" (ikon unduh) untuk menyimpan hasil konversi sebagai file HTML yang dapat dibuka di browser web apa pun."
    },
    conclusion: "Konverter Markdown ke HTML berfungsi sebagai jembatan penting antara kesederhanaan penulisan Markdown dan universalitas tampilan HTML di web. Dengan menyediakan antarmuka yang intuitif, pratinjau real-time, dan opsi output yang dapat disesuaikan, alat ini menyederhanakan alur kerja pembuatan konten untuk penulis blog, pengembang, penulis teknis, dan manajer konten. Baik Anda membuat dokumentasi, artikel blog, atau makalah teknis, konverter ini membantu Anda fokus pada konten sambil memastikannya diformat dengan benar untuk publikasi web. Seiring Markdown dan HTML terus menjadi bahasa dasar dalam ekosistem konten digital, kemampuan untuk mengonversi di antara keduanya secara efisien tetap menjadi aset yang tak ternilai bagi pembuat konten modern."
  }
}