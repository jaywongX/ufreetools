export default {
  name: 'Pembuat Diagram Alir',
  description: 'Buat diagram alir dan bagan menggunakan sintaks berbasis teks sederhana',
  title: 'Pembuat Diagram Alir dan Bagan',
  renderBtn: 'Render Diagram',
  resetBtn: 'Reset',
  downloadSvgBtn: 'Unduh SVG',
  copySvgBtn: 'Salin SVG',
  input: {
    title: 'Definisi Diagram Alir',
    placeholder: 'Masukkan kode sintaks Mermaid...',
    loadExample: 'Muat Contoh',
    clear: 'Hapus',
    uploadFile: 'Unggah File'
  },
  output: {
    title: 'Diagram Alir yang Dihasilkan',
    downloadImage: 'Unduh Gambar',
    downloadSVG: 'Unduh SVG',
    copyImage: 'Salin Gambar',
    copySVG: 'Salin SVG',
    zoomIn: 'Perbesar',
    zoomOut: 'Perkecil',
    fitView: 'Sesuaikan Tampilan',
    resetView: 'Reset Tampilan',
    preview: 'Pratinjau',
    code: 'Kode Mermaid'
  },
  options: {
    title: 'Opsi',
    theme: 'Tema',
    orientation: 'Orientasi',
    nodeShape: 'Bentuk Node',
    arrowStyle: 'Gaya Panah',
    lineStyle: 'Gaya Garis',
    textPosition: 'Posisi Teks',
    fontSize: 'Ukuran Font',
    fontFamily: 'Jenis Font',
    showGrid: 'Tampilkan Grid',
    autoRender: 'Render Otomatis'
  },
  themes: {
    default: 'Default',
    simple: 'Minimalis',
    forest: 'Hutan',
    neutral: 'Netral',
    dark: 'Gelap',
    business: 'Bisnis',
    base: 'Dasar',
    custom: 'Kustom'
  },
  orientations: {
    topToBottom: 'Atas ke Bawah',
    bottomToTop: 'Bawah ke Atas',
    leftToRight: 'Kiri ke Kanan',
    rightToLeft: 'Kanan ke Kiri'
  },
  nodeShapes: {
    rectangle: 'Persegi Panjang',
    roundedRectangle: 'Persegi Panjang Bulat',
    circle: 'Lingkaran',
    diamond: 'Belah Ketupat',
    hexagon: 'Segi Enam',
    parallelogram: 'Jajar Genjang'
  },
  arrowStyles: {
    arrow: 'Panah',
    open: 'Terbuka',
    filled: 'Terisi',
    diamond: 'Belah Ketupat',
    circle: 'Lingkaran'
  },
  lineStyles: {
    solid: 'Garis Padat',
    dashed: 'Garis Putus-putus',
    dotted: 'Garis Titik-titik',
    curved: 'Garis Lengkung',
    straight: 'Garis Lurus',
    orthogonal: 'Ortogonal'
  },
  syntax: {
    title: 'Bantuan Sintaks',
    node: 'Node',
    edge: 'Edge',
    subgraph: 'Subgraph',
    comment: 'Komentar',
    styling: 'Styling',
    showMore: 'Tampilkan Lebih Banyak'
  },
  actions: {
    render: 'Render Diagram Alir',
    save: 'Simpan Diagram',
    export: 'Ekspor',
    share: 'Bagikan'
  },
  messages: {
    renderSuccess: 'Diagram alir berhasil dirender',
    renderError: 'Gagal merender diagram alir: {error}',
    syntaxError: 'Kesalahan sintaks: {error}',
    saved: 'Diagram telah disimpan',
    copied: 'Kode SVG telah disalin ke clipboard',
    copyFailed: 'Gagal menyalin, silakan salin manual',
    exported: 'Diagram alir telah diekspor',
    emptyCode: 'Masukkan kode sintaks Mermaid',
    rendering: 'Sedang merender...',
    errorTitle: 'Kesalahan Render'
  },
  examples: {
    flowchart: 'Diagram Alir',
    classDiagram: 'Diagram Kelas',
    sequenceDiagram: 'Diagram Urutan',
    entityRelationship: 'Diagram Relasi Entitas',
    gantt: 'Diagram Gantt',
    stateDiagram: 'Diagram State',
    pieChart: 'Diagram Pie',
    userJourney: 'Diagram Perjalanan Pengguna'
  },
  exampleCodes: {
    flowchart: `graph TD
    A[Mulai] --> B{Apakah benar?}
    B -->|Ya| C[Hasil Benar]
    B -->|Tidak| D[Hasil Salah]
    C --> E[Selesai]
    D --> E
`,
    sequenceDiagram: `sequenceDiagram
    participant Klien
    participant Server
    Klien->>Server: Permintaan Data
    Server-->>Klien: Respons Data
    Klien->>Server: Kirim Formulir
    Server-->>Klien: Konfirmasi Pengiriman
`,
    gantt: `gantt
    title Rencana Jadwal Proyek
    dateFormat  YYYY-MM-DD
    section Fase Perencanaan
    Pengumpulan Kebutuhan :a1, 2023-01-01, 30d
    Desain Sistem :after a1, 20d
    section Fase Pengembangan
    Pengembangan Backend :2023-02-20, 45d
    Pengembangan Frontend :2023-02-25, 40d
    section Fase Pengujian
    Pengujian Sistem :2023-04-05, 20d
    Pengujian Pengguna :2023-04-20, 15d
    section Fase Peluncuran
    Deploy :2023-05-05, 10d
`,
    stateDiagram: `stateDiagram-v2
    [*] --> Sedang Edit
    Sedang Edit --> Sedang Review: Kirim Review
    Sedang Review --> Ditolak: Tolak
    Sedang Review --> Diterbitkan: Setujui
    Ditolak --> Sedang Edit: Edit Ulang
    Diterbitkan --> [*]
`,
    pieChart: `pie
    title Distribusi Sumber Kunjungan Website
    "Mesin Pencari" : 42.7
    "Akses Langsung" : 28.9
    "Media Sosial" : 18.5
    "Channel Lain" : 9.9
`,
    classDiagram: `classDiagram
    class Hewan {
        +String nama
        +int umur
        +bersuara() void
    }
    class Anjing {
        +String ras
        +ambil() void
    }
    class Kucing {
        +String warna
        +memanjat() void
    }
    Hewan <|-- Anjing
    Hewan <|-- Kucing
`
  },
  article: {
    title: "Pembuat Diagram Alir: Visualisasikan Proses Kompleks dengan Sintaks Teks Sederhana",
    features: {
      title: "Memahami Kekuatan Teknologi Teks-ke-Diagram",
      description: "<strong>Pembuat Diagram Alir</strong> ini adalah alat diagram serbaguna yang mengubah sintaks berbasis teks sederhana menjadi diagram profesional yang menarik secara visual. Menggunakan <strong>sintaks Mermaid</strong> yang kuat, alat ini memungkinkan Anda membuat berbagai jenis diagram tanpa memerlukan keahlian desain grafis atau perangkat lunak menggambar yang kompleks.<br><br>Fitur utamanya adalah mengubah instruksi teks menjadi konten visual terstruktur, memungkinkan Anda merepresentasikan alur, alur kerja, hierarki, dan relasi melalui diagram intuitif. Pendekatan berbasis teks berarti Anda dapat dengan cepat membuat draf, mengedit, dan mengontrol versi diagram Anda, sejajar dengan kode atau dokumen. Baik Anda perlu membuat <strong>diagram alir</strong> dasar, <strong>diagram urutan</strong> kompleks, <strong>diagram kelas</strong> detail, <strong>diagram Gantt</strong> informatif, <strong>diagram state</strong> yang berwawasan, atau <strong>diagram pie</strong> berbasis data, alat ini menyediakan cara yang disederhanakan untuk menghasilkan visualisasi profesional dari deskripsi teks sederhana.",
      useCases: {
        title: "Aplikasi Praktis Pembuatan Diagram Alir",
        items: [
          "<strong>Dokumentasi Pengembangan Perangkat Lunak</strong>: Buat representasi visual yang jelas dari arsitektur kode, skema database, dan alur kerja aplikasi langsung dari deskripsi teks. Pengembang dapat menggunakan <strong>alat pembuat diagram alir</strong> untuk mendokumentasikan algoritma kompleks, hierarki kelas, dan interaksi sistem, membantu anggota tim baru memahami basis kode dengan lebih efektif dan memastikan keputusan arsitektur dikomunikasikan dengan jelas.",
          "<strong>Visualisasi Manajemen Proyek</strong>: Hasilkan diagram Gantt dan diagram alir komprehensif untuk memetakan timeline proyek, dependensi, dan jalur kritis. Manajer proyek dapat menggunakan <strong>diagram alir visual</strong> ini untuk mengkomunikasikan struktur proyek kepada pemangku kepentingan, mengidentifikasi hambatan, dan melacak kemajuan aktivitas yang direncanakan, meningkatkan kemampuan perencanaan dan pelaporan.",
          "<strong>Pemodelan Proses Bisnis</strong>: Dokumentasikan alur kerja organisasi, proses persetujuan, dan prosedur operasional dalam format visual yang terstandarisasi. Analis bisnis dapat membuat <strong>diagram alir bisnis</strong> untuk menganalisis proses yang ada, mengidentifikasi area tidak efisien, dan mensimulasikan usulan perbaikan, membuat proses operasional kompleks mudah dipahami oleh semua pemangku kepentingan, terlepas dari latar belakang teknis mereka.",
          "<strong>Pembuatan Materi Pendidikan</strong>: Kembangkan diagram pengajaran yang jelas untuk konsep kompleks, algoritma, atau sistem. Pendidik dapat menggunakan <strong>pembuat diagram online</strong> untuk membuat alat bantu visual yang meningkatkan pemahaman siswa tentang konsep abstrak, proses teknis, atau kerangka teoritis, meningkatkan retensi pengetahuan melalui prinsip pembelajaran visual.",
          "<strong>Penulisan Dokumen Teknis</strong>: Tingkatkan manual pengguna, dokumentasi API, dan panduan teknis dengan diagram ilustratif yang dihasilkan langsung dari deskripsi teks, yang dapat dipelihara bersama konten tertulis. Penulis teknis dapat menyematkan <strong>diagram alir urutan</strong> untuk memperjelas interaksi atau alur kompleks, membuat dokumen lebih mudah dipahami dan mengurangi permintaan dukungan.",
          "<strong>Visualisasi Pohon Keputusan</strong>: Gambarkan proses pengambilan keputusan kompleks dengan logika cabang dan hasil bersyarat. Analis dan pengambil keputusan dapat menghasilkan <strong>diagram alir keputusan</strong> untuk mengevaluasi opsi, mengkomunikasikan kriteria keputusan kepada pemangku kepentingan, dan mendokumentasikan alasan di balik pilihan strategis, menciptakan referensi visual untuk titik keputusan di masa depan."
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Pembuatan Diagram Alir",
      items: [
        {
          question: "Apa itu sintaks Mermaid dan seberapa sulit mempelajarinya?",
          answer: "Sintaks Mermaid adalah bahasa berbasis teks sederhana untuk membuat diagram, dengan pendekatan intuitif yang mirip dengan markdown. Bahasa ini dirancang khusus agar intuitif dan mudah dipelajari, bahkan untuk pengguna non-teknis. Kebanyakan orang dapat menguasai dasar-dasarnya dalam 15-30 menit latihan. Sintaks ini mengikuti struktur logis, pertama-tama mendeklarasikan jenis diagram (diagram alir, diagram urutan, dll.), kemudian menggunakan pola teks sederhana untuk mendefinisikan elemen dan koneksinya. Misalnya, koneksi diagram alir dasar ditulis sebagai 'A-->B', menunjukkan A terhubung ke B. Kurva pembelajarannya landai karena sintaksnya bersifat deklaratif - Anda mendeskripsikan apa yang Anda inginkan, bukan cara menggambarnya. Pembuat diagram alir kami mencakup template contoh untuk berbagai jenis diagram, memungkinkan Anda memulai dengan memodifikasi contoh yang ada daripada menulis dari awal. Selain itu, umpan balik visual instan membantu Anda dengan cepat memahami bagaimana perubahan sintaks memengaruhi diagram Anda, membuat proses pembelajaran menjadi interaktif dan efisien."
        },
        {
          question: "Bisakah saya mengekspor diagram untuk digunakan di aplikasi lain?",
          answer: "Ya, pembuat diagram alir kami menyediakan berbagai opsi ekspor untuk memastikan kompatibilitas dengan berbagai aplikasi dan kasus penggunaan. Format ekspor utama adalah SVG (Scalable Vector Graphics), yang mempertahankan resolusi sempurna pada ukuran berapa pun, sangat cocok untuk penggunaan web, presentasi, dan dokumen profesional. File SVG dapat langsung diimpor ke aplikasi desain seperti Adobe Illustrator, Figma, atau Inkscape untuk penyesuaian lebih lanjut. Untuk pengguna yang membutuhkan format bitmap, SVG dapat dengan mudah dikonversi ke PNG atau JPEG menggunakan fungsi browser atau alat eksternal. Selain itu, karena diagram dihasilkan dari sintaks teks, Anda selalu dapat menyimpan dan berbagi kode sumbernya sendiri - ini memungkinkan orang lain tidak hanya melihat tetapi juga memodifikasi dan menghasilkan ulang diagram menggunakan alat kami. Sifat berbasis teks ini membuat diagram mudah dikontrol versinya dan dapat disematkan dengan mudah ke dalam sistem dokumen seperti file Markdown, wiki, atau spesifikasi teknis. Untuk lingkungan tim, kemampuan berbagi output visual dan kode pembuatannya memberikan fleksibilitas maksimal untuk alur kerja diagram kolaboratif."
        },
        {
          question: "Jenis diagram apa yang bisa dibuat dengan alat ini?",
          answer: "Pembuat diagram alir kami mendukung berbagai jenis diagram untuk memenuhi kebutuhan visualisasi yang berbeda. Selain diagram alir dasar, Anda dapat membuat diagram urutan, yang menunjukkan bagaimana proses berinteraksi satu sama lain dan dalam urutan apa - sangat cocok untuk mendokumentasikan interaksi sistem atau alur API. Diagram kelas membantu memvisualisasikan struktur berorientasi objek, menunjukkan kelas, properti, metode, dan hubungannya. Diagram Gantt memberikan visualisasi timeline penjadwalan proyek, dengan dukungan untuk dependensi dan milestone. Diagram state mengilustrasikan berbagai state sistem dan transisi di antaranya, sangat bagus untuk memodelkan perilaku aplikasi atau proses bisnis. Diagram relasi entitas (ERD) membantu memvisualisasikan struktur database dan hubungan. Diagram pie memungkinkan visualisasi data sederhana, menunjukkan pemecahan persentase. Diagram perjalanan pengguna mengilustrasikan langkah-langkah yang diambil pengguna saat berinteraksi dengan produk atau layanan. Setiap jenis diagram menggunakan variasi sintaks yang sedikit berbeda, dioptimalkan untuk kebutuhan visualisasi spesifiknya, tetapi semuanya mengikuti pendekatan berbasis teks yang logis dan konsisten, membuat alat ini sangat kuat dan fleksibel untuk kebutuhan diagram yang beragam."
        },
        {
          question: "Bagaimana cara menyesuaikan tampilan diagram saya?",
          answer: "Pembuat diagram alir menyediakan beberapa cara untuk menyesuaikan tampilan diagram sambil mempertahankan kesederhanaan pendekatan berbasis teks. Anda dapat memilih dari beberapa tema bawaan (default, hutan, gelap, netral, dasar) yang memengaruhi skema warna dan gaya keseluruhan diagram. Untuk elemen individual, Anda dapat menentukan bentuk (persegi panjang, lingkaran, berlian, dll.), gaya border, warna isian, dan format teks menggunakan pengubah sederhana dalam sintaks. Misalnya, menambahkan deklarasi gaya seperti 'style A fill:#f9f,stroke:#333,stroke-width:2px' dapat menyesuaikan node tertentu. Garis penghubung antara elemen dapat disesuaikan dengan berbagai gaya panah, jenis garis (padat, titik-titik, putus-putus), dan arah. Penempatan dan penyelarasan teks dapat disesuaikan untuk meningkatkan keterbacaan. Pengguna tingkat lanjut dapat menggabungkan kelas CSS untuk mempertahankan gaya yang konsisten di beberapa elemen. Editor visual memberikan umpan balik real-time saat Anda menyesuaikan elemen gaya ini, memungkinkan Anda menyempurnakan estetika diagram sambil mempertahankan kejelasan strukturnya. Opsi penyesuaian ini memastikan diagram Anda tidak hanya menyampaikan informasi secara efektif tetapi juga sesuai dengan gaya dokumen atau panduan merek Anda."
        },
        {
          question: "Apakah mungkin membuat struktur bersarang kompleks dalam diagram saya?",
          answer: "Ya, pembuat diagram alir kami sepenuhnya mendukung pembuatan struktur bersarang kompleks melalui fitur subgraph dan clustering. Anda dapat mendefinisikan subgraph atau cluster untuk mengelompokkan elemen terkait, menciptakan organisasi hierarkis dalam diagram. Ini sangat berguna untuk merepresentasikan alur bersarang, arsitektur komponen, atau struktur organisasi. Misalnya, dalam diagram arsitektur sistem, Anda dapat membuat subgraph terpisah untuk komponen frontend, layanan backend, dan lapisan database, masing-masing berisi elemennya sendiri. Subgraph ini dapat memiliki gaya berbeda untuk memberikan pembeda visual antara berbagai bagian atau level diagram. Anda juga dapat membuat alur komposit di mana proses melintasi berbagai subgraph, secara akurat merepresentasikan bagaimana komponen berinteraksi di berbagai domain atau lapisan. Sintaks untuk membuat struktur bersarang ini mengikuti pendekatan berbasis teks yang logis dan konsisten - biasanya menggunakan indentasi atau notasi kurung untuk menentukan cakupan setiap subgraph. Kemampuan untuk merepresentasikan hierarki dan hubungan kompleks ini membuat alat ini cocok untuk kebutuhan diagram tingkat perusahaan, sambil mempertahankan kesederhanaan dan kemudahan pemeliharaan pendekatan berbasis teks."
        }
      ]
    },
    guide: {
      title: "Panduan Langkah demi Langkah Menggunakan Pembuat Diagram Alir",
      steps: [
        "<strong>Pilih Jenis Diagram</strong>: Pertama tentukan jenis diagram apa yang paling sesuai dengan kebutuhan Anda. Alat ini mendukung diagram alir, diagram urutan, diagram kelas, diagram Gantt, diagram state, diagram pie, dan lainnya. Anda dapat memuat contoh untuk jenis diagram apa pun dengan mengklik tombol contoh di bawah editor untuk memulai dengan cepat dengan struktur sintaks yang benar.",
        "<strong>Tulis atau Edit Kode Diagram</strong>: Di panel kiri, masukkan kode sintaks Mermaid yang mendeskripsikan diagram Anda. Untuk diagram alir dasar, mulailah dengan 'graph TD' (untuk atas ke bawah) atau 'graph LR' (untuk kiri ke kanan), lalu definisikan node dan koneksinya. Contoh: 'A[Mulai] --> B{Keputusan} --> C[Selesai]' membuat diagram alir tiga node sederhana. Sintaks untuk jenis diagram yang berbeda sedikit bervariasi tetapi mengikuti pola logis yang konsisten.",
        "<strong>Pratinjau dan Validasi</strong>: Klik tombol 'Render Diagram' di toolbar untuk memvisualisasikan diagram Anda di panel kanan. Alat ini akan secara otomatis memvalidasi sintaks Anda dan menampilkan kesalahan apa pun. Jika ada masalah sintaks, pesan kesalahan akan muncul untuk membantu Anda mengidentifikasi dan memperbaiki masalah. Loop umpan balik instan ini membantu Anda dengan cepat memperbaiki kesalahan dan menyempurnakan diagram.",
        "<strong>Sesuaikan dan Perhalus</strong>: Setelah diagram dasar berfungsi, sempurnakan dengan menambahkan lebih banyak node, koneksi, atau detail. Anda dapat menyesuaikan tampilan dengan memilih tema yang berbeda dari menu dropdown di toolbar. Tambahkan deklarasi gaya inline untuk memberikan gaya pada elemen individual, sesuaikan bentuk node, warna, atau gaya koneksi untuk meningkatkan kejelasan visual dan daya tarik.",
        "<strong>Perluas dengan Fitur Lanjutan</strong>: Tingkatkan diagram Anda dengan fitur lanjutan seperti subgraph untuk mengelompokkan elemen terkait, node yang dapat diklik untuk membuat diagram interaktif, atau gaya khusus untuk menekankan poin penting. Untuk diagram kompleks, pertimbangkan untuk memecah alur besar menjadi subgraph logis untuk meningkatkan keterbacaan dan organisasi. Tambahkan komentar dalam kode (menggunakan %% untuk baris komentar) untuk mendokumentasikan struktur diagram Anda untuk referensi di masa mendatang.",
        "<strong>Ekspor Diagram Anda</strong>: Setelah diagram selesai, Anda dapat mengekspornya sebagai file SVG dengan mengklik tombol 'Unduh SVG' di toolbar. Format SVG mempertahankan resolusi sempurna pada skala berapa pun, cocok untuk dokumen, presentasi, atau pengeditan lebih lanjut dalam perangkat lunak desain grafis. Atau, Anda dapat menggunakan tombol 'Salin SVG' untuk langsung menyalin kode SVG ke clipboard untuk penggunaan langsung dalam dokumen HTML atau aplikasi lain.",
        "<strong>Simpan Pekerjaan Anda</strong>: Untuk menyimpan diagram untuk pengeditan di masa mendatang, simpan kode sintaks Mermaid itu sendiri. Karena diagram dihasilkan dari kode ini, menyimpannya memungkinkan Anda memuat ulang dan memodifikasi diagram nanti. Anda dapat menyalin kode dari editor dan menyimpannya dalam file teks, memasukkannya dalam dokumentasi proyek, atau menyimpannya dalam sistem kontrol versi bersama dengan kode atau dokumen terkait."
      ]
    },
    conclusion: "Pembuat Diagram Alir mengubah tugas tradisional yang kompleks dalam membuat diagram profesional menjadi proses yang dapat diakses dan efisien untuk pengguna di semua tingkat keahlian teknis. Dengan memanfaatkan kekuatan pembuatan diagram berbasis teks, alat ini menghilangkan frustrasi dalam memposisikan elemen secara manual dan mempertahankan konsistensi visual yang sering menjadi masalah dalam alat menggambar tradisional. Pendekatan ini tidak hanya menghemat banyak waktu tetapi juga terintegrasi dengan mulus dengan alur kerja pengembangan modern, sistem dokumentasi, dan proses kontrol versi. Karena komunikasi visual menjadi semakin penting dalam lanskap digital yang kompleks, alat yang menyederhanakan pembuatan diagram yang jelas dan akurat menjadi sangat berharga untuk berbagi pengetahuan, dokumentasi proses, dan komunikasi teknis yang efektif. Baik Anda seorang pengembang yang mendokumentasikan arsitektur kode, manajer proyek yang memvisualisasikan timeline, analis bisnis yang memodelkan proses, atau pendidik yang menjelaskan konsep kompleks, Pembuat Diagram Alir menawarkan keseimbangan ideal antara kesederhanakan dan kekuatan, menghidupkan ide-ide Anda secara visual tanpa kurva pembelajaran yang curam dari perangkat lunak diagram profesional."
  }
}