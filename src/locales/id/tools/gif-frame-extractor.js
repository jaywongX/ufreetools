export default {
  name: 'Ekstraktor Frame GIF',
  description: 'Ekstrak frame individu dari animasi GIF',
  uploadBtn: 'Pilih GIF',
  resetBtn: 'Reset',
  extractBtn: 'Ekstrak Frame',
  extractingBtn: 'Sedang Mengekstrak...',
  downloadAllBtn: 'Unduh Semua Frame',
  upload: {
    title: 'Unggah GIF',
    dropzone: 'Seret dan lepas file GIF di sini atau klik untuk memilih',
    maxSize: 'Ukuran file maksimal: 20MB',
    onlyGif: 'Hanya mendukung file GIF',
    selectGif: 'Silakan pilih file GIF'
  },
  analysis: {
    title: 'Informasi GIF',
    dimensions: 'Dimensi',
    frameCount: 'Jumlah Frame',
    duration: 'Durasi',
    fps: 'Frame per Detik',
    fileSize: 'Ukuran File',
    loopCount: 'Jumlah Loop',
    infinite: 'Tak Terbatas',
    fileName: 'Nama File',
    size: 'Ukuran',
    totalFrames: 'Total Frame',
    notExtracted: 'Belum Diekstrak'
  },
  extraction: {
    title: 'Ekstraksi Frame',
    selectFrames: 'Pilih Frame',
    allFrames: 'Semua Frame',
    rangeOfFrames: 'Rentang Frame',
    from: 'Dari',
    to: 'Ke',
    specificFrames: 'Frame Spesifik',
    frameNumbers: 'Nomor Frame (pisahkan dengan koma)',
    everyNth: 'Setiap N Frame',
    nth: 'Setiap',
    frames: 'Frame',
    selectFirst: 'Frame Pertama',
    selectLast: 'Frame Terakhir',
    selectMiddle: 'Frame Tengah',
    selectKeyFrames: 'Deteksi Otomatis Frame Kunci'
  },
  output: {
    title: 'Pengaturan Ekspor',
    format: 'Format Output',
    png: 'PNG',
    jpeg: 'JPEG',
    webp: 'WebP',
    scaling: 'Skala',
    originalSize: 'Ukuran Asli',
    customSize: 'Ukuran Kustom',
    width: 'Lebar',
    height: 'Tinggi',
    quality: 'Kualitas',
    qualityValue: 'Kualitas: {value}%',
    lowQuality: 'Kualitas Rendah (File Kecil)',
    highQuality: 'Kualitas Tinggi (File Besar)',
    naming: 'Penamaan File',
    pattern: 'Pola',
    filename: 'Nama File Asli',
    framenumber: 'Nomor Frame',
    timestamp: 'Timestamp',
    preview: 'Pratinjau',
    downloadOptions: 'Opsi Unduh',
    separateFiles: 'File Terpisah',
    zipArchive: 'Arsip ZIP',
    spritesheet: 'Spritesheet',
    gridSize: 'Ukuran Grid',
    columns: 'Jumlah Kolom',
    animation: 'Animasi Baru'
  },
  frames: {
    title: 'Frame yang Diekstrak',
    frameInfo: 'Frame {number} dari {total}',
    frame: 'Frame',
    delay: 'Delay: {delay}ms',
    downloadFrame: 'Unduh',
    copyFrame: 'Salin',
    selectAll: 'Pilih Semua',
    unselectAll: 'Batalkan Pilihan',
    invertSelection: 'Balik Pilihan',
    noFrames: 'Belum Ada Frame yang Diekstrak',
    extractFirst: 'Harap ekstrak frame terlebih dahulu'
  },
  actions: {
    extract: 'Ekstrak Frame',
    preview: 'Pratinjau',
    downloadSelected: 'Unduh yang Dipilih',
    downloadAll: 'Unduh Semua',
    createSpritesheet: 'Buat Spritesheet',
    createNewGif: 'Buat GIF Baru',
    cancel: 'Batal',
    processing: 'Memproses...'
  },
  messages: {
    extractionComplete: 'Ekstraksi Frame Selesai',
    extracting: 'Sedang mengekstrak frame...',
    noFramesSelected: 'Tidak Ada Frame yang Dipilih',
    processingGif: 'Sedang memproses GIF...',
    invalidGif: 'File GIF Tidak Valid',
    framesCopied: 'Frame telah disalin ke clipboard',
    downloadStarted: 'Unduhan Dimulai',
    spritesheetCreated: 'Spritesheet Berhasil Dibuat',
    frameDownloaded: 'Frame Telah Diunduh',
    preparingFrames: 'Mempersiapkan semua frame, harap tunggu...',
    allFramesDownloaded: 'Semua Frame Telah Diunduh',
    downloadError: 'Gagal mengunduh semua frame',
    resetComplete: 'Reset Selesai',
    fileEmpty: 'Data File Kosong',
  },
  article: {
    title: "Ekstraktor Frame GIF: Analisis dan Ekstrak Frame Animasi",
    features: {
      title: "Memahami Ekstraksi Frame GIF",
      description: "<strong>Ekstraktor Frame GIF</strong> adalah alat profesional yang dirancang khusus untuk memecah file animasi GIF menjadi frame individu. <strong>Pemisah animasi</strong> yang kuat ini menyediakan metode komprehensif untuk menganalisis dan mengekstrak setiap gambar statis yang membentuk GIF, memungkinkan Anda memisahkan momen tertentu dari <strong>urutan animasi</strong> apa pun.<br><br><strong>Pemisah GIF</strong> kami menawarkan berbagai opsi format output (PNG, JPEG, WebP), pengaturan kualitas kompresi, dan navigasi frame yang intuitif. Alat ini secara otomatis mendeteksi dan menampilkan <strong>metadata GIF</strong> dasar termasuk dimensi, jumlah frame, ukuran file, dan waktu delay setiap frame. Setelah ekstraksi selesai, Anda dapat melihat pratinjau setiap <strong>frame gambar</strong>, mengunduh frame individu, atau mengekspor semua frame sekaligus sebagai file arsip ZIP untuk pengeditan atau analisis lebih lanjut.",
      useCases: {
        title: "Skenario Penggunaan Ekstraksi Frame GIF",
        items: [
          "Desainer grafis mengekstrak frame tertentu dari animasi GIF untuk dimodifikasi dan diintegrasikan ke dalam desain atau presentasi baru",
          "Pengembang web memisahkan frame dari animasi untuk membuat loading spinner, indikator progres, atau spritesheet kustom",
          "Seniman digital menganalisis teknik animasi frame-by-frame dalam GIF yang ada untuk meningkatkan keterampilan animasi mereka",
          "Kreator konten mengekstrak frame kunci dari reaksi animasi atau meme untuk digunakan sebagai gambar statis di postingan media sosial",
          "Pendidik dan penulis teknis menangkap tahapan spesifik dari tutorial atau demonstrasi animasi untuk dimasukkan ke dalam materi pengajaran",
          "Analis gerakan dan peneliti mengekstrak frame berurutan untuk mempelajari pola gerakan, visualisasi fisika, atau animasi ilmiah"
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Ekstraksi Frame GIF",
      items: [
        {
          question: "Berapa ukuran maksimum file GIF yang dapat ditangani alat ini?",
          answer: "Ekstraktor Frame GIF kami dirancang untuk menangani file GIF hingga 20MB. Batasan ini dapat mengakomodasi sebagian besar animasi GIF online sekaligus memastikan kinerja optimal. Untuk GIF yang lebih besar, kami sarankan menggunakan perangkat lunak pengeditan video atau alat animasi profesional. Kecepatan ekstraksi tergantung pada ukuran file dan jumlah frame dalam animasi GIF - file besar dengan banyak frame secara alami membutuhkan waktu pemrosesan lebih lama dibandingkan animasi kecil dengan lebih sedikit frame."
        },
        {
          question: "Format output apa yang harus saya pilih untuk frame yang diekstrak?",
          answer: "Format output terbaik tergantung pada kebutuhan spesifik Anda: Format PNG ideal untuk mempertahankan kualitas tertinggi dan mendukung transparansi, sempurna ketika Anda perlu mempertahankan saluran alpha dalam frame GIF atau melakukan pengeditan lebih lanjut. JPEG menawarkan ukuran file lebih kecil tetapi tidak mendukung transparansi dan mungkin menimbulkan artefak kompresi, cocok untuk gambar sederhana atau publikasi web di mana ukuran file penting. WebP memberikan keseimbangan bagus antara kualitas dan kompresi, mendukung transparansi sambil memberikan ukuran file lebih kecil daripada PNG, pilihan modern yang sangat baik jika perangkat lunak Anda mendukung format ini."
        },
        {
          question: "Bagaimana cara membuat animasi baru dari frame yang diekstrak?",
          answer: "Setelah mengekstrak frame menggunakan Ekstraktor Frame GIF kami, Anda dapat membuat animasi baru dengan beberapa metode: 1) Gunakan perangkat lunak animasi seperti Adobe Animate, After Effects atau alternatif gratis GIMP untuk mengimpor frame yang diekstrak dan mengekspornya sebagai GIF baru dengan waktu kustom. 2) Alat animasi online seperti EZGIF atau Canva dapat mengimpor urutan gambar dan mengubahnya menjadi GIF dengan pengaturan yang dapat disesuaikan. 3) Untuk pengembang, pertimbangkan untuk menggunakan animasi CSS atau pustaka JavaScript seperti GSAP untuk membuat animasi web dari gambar frame. Anda dapat memodifikasi frame individu sebelum menggabungkannya kembali, membuat versi yang disempurnakan atau diedit dari GIF asli."
        },
        {
          question: "Mengapa beberapa frame yang diekstrak terlihat berbeda dari yang saya lihat di GIF?",
          answer: "Perbedaan antara frame yang diekstrak dan apa yang Anda lihat saat memutar animasi GIF dapat disebabkan oleh beberapa alasan: 1) GIF sering menggunakan teknik pengoptimalan frame seperti area transparan atau metode pemrosesan yang hanya bermakna dalam urutan. 2) Beberapa frame dalam animasi mungkin ditampilkan dalam waktu sangat singkat, hampir tidak terlihat saat diputar tetapi terlihat saat diekstrak. 3) Beberapa pemutar GIF mungkin menerapkan blending frame atau interpolasi untuk menghaluskan animasi. 4) GIF mungkin menggunakan tabel warna lokal yang mengubah palet di antara frame. Ekstraktor Frame GIF kami mempertahankan data piksel tepat dari setiap frame yang disimpan dalam file GIF, memberikan representasi paling akurat dari frame asli."
        },
        {
          question: "Apa yang dapat dipelajari dari waktu delay frame?",
          answer: "Waktu delay dalam GIF memberikan wawasan berharga tentang ritme dan kecepatan animasi. Delay setiap frame (dalam milidetik) mengungkapkan: 1) Kecepatan animasi keseluruhan - delay pendek menciptakan animasi lebih cepat, sementara delay lebih panjang memperlambat gerakan. 2) Pola waktu yang menunjukkan penekanan, di mana animasi berhenti pada frame tertentu untuk efek. 3) Teknik animasi seperti efek 'ease-in' atau 'ease-out' di mana delay frame berubah secara bertahap. 4) Peluang pengoptimalan potensial - frame dengan waktu delay sama atau sangat mirip mungkin menjadi kandidat untuk standardisasi. Ekstraktor Frame GIF kami menampilkan nilai delay ini untuk setiap frame yang diekstrak, membantu Anda memahami struktur waktu dari animasi asli."
        }
      ]
    },
    guide: {
      title: "Panduan Langkah demi Langkah Menggunakan Ekstraktor Frame GIF",
      steps: [
        "Klik tombol <strong>Pilih GIF</strong> di bagian atas antarmuka alat untuk memilih file animasi GIF yang ingin Anda proses dari perangkat Anda. Alat ini mendukung file GIF hingga 20MB.",
        "Setelah mengunggah, tinjau panel <strong>Informasi GIF</strong> yang muncul di sebelah kiri, menampilkan detail seperti dimensi, ukuran file, dan jumlah frame untuk memverifikasi Anda memilih file yang benar.",
        "Klik tombol <strong>Ekstrak Frame</strong> di bilah alat atas untuk memulai proses ekstraksi frame. Alat akan menampilkan indikator progres saat menganalisis dan mengekstrak setiap frame dalam GIF.",
        "Pilih <strong>format output</strong> yang Anda sukai (PNG, JPEG, WebP) dari opsi di panel kiri. Jika memilih JPEG atau WebP, Anda dapat menyesuaikan slider kualitas untuk menyeimbangkan antara kualitas gambar dan ukuran file.",
        "Jelajahi frame yang diekstrak yang ditampilkan dalam tampilan grid di sebelah kanan alat. Setiap thumbnail menampilkan nomor frame dan waktu delay (berapa lama frame tersebut muncul dalam animasi).",
        "Untuk menyimpan frame individu, arahkan kursor ke thumbnail frame mana pun dan klik ikon unduh yang muncul. Frame tersebut akan disimpan ke perangkat Anda dalam format output yang dipilih.",
        "Untuk mengunduh semua frame yang diekstrak sekaligus, klik tombol <strong>Unduh Semua Frame</strong> di bilah alat. Ini akan membuat file arsip ZIP yang berisi semua frame yang disimpan dalam format pilihan Anda, memudahkan penyimpanan dan pengeditan lebih lanjut."
      ]
    },
    conclusion: "Ekstraktor Frame GIF menyediakan solusi komprehensif untuk memecah animasi GIF menjadi frame penyusunnya. Baik Anda seorang desainer yang mencari gambar spesifik dalam animasi, pengembang yang membuat animasi web kustom, atau pendidik yang menganalisis urutan visual, alat ini menawarkan ekstraksi frame-by-frame yang presisi dan opsi output yang fleksibel. Dengan mengubah animasi waktu menjadi urutan gambar statis, Anda mendapatkan kendali penuh atas konten GIF, memungkinkan pengeditan lanjutan, analisis, dan penggunaan kembali konten animasi. Seiring GIF terus menjadi media populer untuk mengekspresikan ide, reaksi, dan demonstrasi di web, kemampuan untuk mengekstrak dan memanipulasi frame individu tetap menjadi keterampilan penting bagi kreator konten digital dan analis."
  }
}