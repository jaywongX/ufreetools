export default {
  name: 'Konverter Gambar ke ASCII',
  description: 'Mengubah gambar menjadi seni teks ASCII dengan opsi yang dapat disesuaikan',
  
  upload: {
    title: 'Unggah Gambar',
    dropzone: 'Seret dan lepas gambar di sini atau klik untuk menjelajah',
    maxSize: 'Ukuran file maksimum: 5MB',
    supportedFormats: 'Format yang didukung: JPG, PNG, WEBP, GIF',
    pasteImage: 'Atau tempel gambar dari clipboard'
  },
  
  options: {
    title: 'Opsi Konversi',
    width: 'Lebar output',
    height: 'Tinggi output',
    preserveAspect: 'Pertahankan rasio aspek',
    colored: 'Output berwarna',
    charSet: 'Set karakter',
    charSets: {
      standard: 'Standar',
      simple: 'Sederhana',
      complex: 'Kompleks',
      blocks: 'Karakter blok',
      custom: 'Kustom'
    },
    customChars: 'Karakter kustom',
    invert: 'Balikkan warna',
    threshold: 'Ambang kecerahan',
    brightness: 'Kecerahan',
    contrast: 'Kontras',
    fontFamily: 'Keluarga font',
    fontSize: 'Ukuran font',
    lineHeight: 'Tinggi garis',
    backgroundColor: 'Warna latar belakang',
    textColor: 'Warna teks'
  },
  
  output: {
    title: 'Output ASCII',
    preview: 'Pratinjau',
    raw: 'ASCII mentah',
    html: 'HTML',
    copyToClipboard: 'Salin ke clipboard',
    downloadTxt: 'Unduh sebagai TXT',
    downloadHtml: 'Unduh sebagai HTML',
    downloadImage: 'Unduh sebagai gambar',
    stats: {
      title: 'Statistik',
      characters: 'Jumlah karakter',
      lines: 'Jumlah baris',
      colors: 'Jumlah warna',
      size: 'Ukuran teks'
    }
  },
  
  presets: {
    title: 'Preset',
    save: 'Simpan pengaturan saat ini',
    load: 'Muat preset',
    delete: 'Hapus preset',
    presetName: 'Nama preset',
    default: 'Default',
    detailed: 'Detail',
    minimalist: 'Minimalis',
    blocky: 'Gaya blok',
    small: 'Kecil',
    inverted: 'Terbalik'
  },
  
  adjustment: {
    title: 'Penyesuaian Gambar',
    grayscale: 'Skala abu-abu',
    negative: 'Negatif',
    resize: 'Ubah ukuran sebelum konversi',
    crop: 'Potong gambar',
    rotate: 'Putar',
    flipH: 'Balik horizontal',
    flipV: 'Balik vertikal'
  },
  
  animation: {
    title: 'Animasi',
    animated: 'Proses sebagai animasi',
    frameDelay: 'Penundaan frame',
    loop: 'Animasi berulang',
    loopCount: 'Jumlah pengulangan',
    extractFrame: 'Ekstrak frame saat ini'
  },
  
  actions: {
    convert: 'Konversi ke ASCII',
    resetOptions: 'Reset opsi',
    refreshPreview: 'Segarkan pratinjau',
    loadImage: 'Muat gambar baru',
    applyChanges: 'Terapkan perubahan',
    selectImage: 'Pilih gambar',
    reset: 'Reset',
    processing: 'Memproses...',
    generate: 'Buat ASCII',
    copy: 'Salin',
    download: 'Unduh'
  },
  
  messages: {
    converting: 'Mengubah gambar ke ASCII...',
    conversionComplete: 'Konversi selesai',
    conversionFailed: 'Gagal mengubah gambar: {error}',
    copied: 'ASCII telah disalin ke clipboard',
    downloadStarted: 'Unduhan dimulai',
    downloadComplete: 'ASCII telah diunduh',
    downloadFailed: 'Gagal mengunduh',
    copyFailed: 'Gagal menyalin',
    resetComplete: 'Berhasil direset',
    asciiGenerated: 'Seni ASCII telah dibuat',
    generationFailed: 'Gagal membuat ASCII',
    presetSaved: 'Preset disimpan',
    presetLoaded: 'Preset dimuat',
    presetDeleted: 'Preset dihapus',
    invalidImage: 'Format gambar tidak valid atau file rusak',
    imageTooBig: 'Ukuran gambar terlalu besar untuk dikonversi',
    selectOrLoad: 'Silakan pilih gambar atau muat dari URL',
    asciiWillDisplay: 'ASCII akan ditampilkan di sini',
    customCharsPlaceholder: 'Masukkan karakter, diurutkan dari gelap ke terang...',
    tip: 'Klik tombol "Buat ASCII" setelah menyesuaikan pengaturan untuk melihat hasilnya',
    drapPlaceHolder: 'Pilih atau seret gambar ke sini',
    noImage: 'Silakan pilih gambar terlebih dahulu',
    generateAscii: 'Klik tombol "Buat ASCII" untuk mengubah gambar',
    tip2: 'Tip: Gunakan tombol salin untuk menyalin seni ASCII ke clipboard, atau tombol unduh untuk menyimpan sebagai file teks.'
  },
  
  charSets: {
    standard: 'Standar',
    simple: 'Sederhana',
    blocks: 'Blok',
    custom: 'Kustom'
  },
  
  settings: {
    title: 'Pengaturan ASCII',
    customCharsetLabel: 'Set karakter kustom (dari gelap ke terang)',
    asciiWidth: 'Lebar ASCII',
    invert: 'Balikkan warna',
    colored: 'Output berwarna',
    fontSize: 'Ukuran font'
  },
  
  preview: {
    originalImage: 'Gambar asli',
    generatedAscii: 'ASCII yang dihasilkan'
  },
  
  article: {
    title: "Konverter Gambar ke ASCII: Mengubah Foto Menjadi Seni Teks",
    features: {
      title: "Memahami Konversi Gambar ke ASCII",
      description: "<strong>Konverter Gambar ke ASCII</strong> ini adalah <strong>pembuat seni teks</strong> khusus yang menggunakan berbagai karakter ASCII untuk mengubah gambar biasa menjadi karya seni teks. <strong>Alat pembuatan seni ASCII</strong> ini menganalisis nilai kecerahan setiap piksel dalam gambar dan memetakannya ke karakter ASCII yang sesuai berdasarkan kepadatan visualnya.<br><br>Berbeda dengan <strong>pembuat seni teks</strong> dasar, alat kami menawarkan opsi kustomisasi lengkap termasuk lebar yang dapat disesuaikan, berbagai set karakter, preservasi warna, dan kontrol pembalikan. <strong>Konverter gambar ASCII</strong> ini mendukung berbagai format gambar seperti JPG, PNG, dan GIF, memastikan kompatibilitas dengan sebagian besar sumber gambar. Bagi seniman digital, programmer, dan pembuat konten kreatif, <strong>konverter gambar ke teks</strong> ini memberikan cara unik untuk merepresentasikan konten visual dalam format berbasis teks yang dapat dengan mudah dibagikan, disematkan dalam dokumen, atau digunakan di lingkungan yang tidak mendukung tampilan gambar.",
      useCases: {
        title: "Kasus Penggunaan Praktis Seni ASCII",
        items: [
          "<strong>Pesan kreatif</strong>: Tambahkan <strong>gambar ASCII</strong> unik ke tanda tangan email, posting media sosial, atau komunikasi aplikasi pesan untuk membuatnya menonjol dari teks atau gambar biasa",
          "<strong>Proyek pemrograman</strong>: Integrasikan seni ASCII ke antarmuka baris perintah, aplikasi terminal, atau game berbasis teks untuk menambahkan elemen visual tanpa kemampuan rendering gambar aktual",
          "<strong>Materi pendidikan</strong>: Buat representasi visual yang dapat diakses untuk konten edukasi, terutama ketika mengajarkan konsep di lingkungan yang mungkin tidak mendukung gambar standar",
          "<strong>Proyek seni digital</strong>: Kembangkan ekspresi seni unik dengan mengubah foto menjadi <strong>karya seni berbasis teks</strong>, mengeksplorasi persimpangan antara seni visual dan tipografi",
          "<strong>Konten sistem lama</strong>: Hasilkan konten visual untuk sistem komputer lawas, tampilan teks biasa, atau lingkungan dengan kemampuan grafis terbatas yang tidak dapat merender gambar standar",
          "<strong>Pembuatan animasi ASCII</strong>: Ubah frame video atau gambar berurutan menjadi frame ASCII untuk membuat animasi berbasis teks untuk proyek kreatif, situs web, atau aplikasi terminal"
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Konversi Seni ASCII",
      items: [
        {
          question: "Jenis gambar apa yang paling cocok untuk dikonversi menjadi seni ASCII?",
          answer: "Gambar dengan kontras tinggi, subjek yang jelas, dan komposisi yang relatif sederhana cenderung menghasilkan seni ASCII yang paling efektif. Foto potret dengan pencahayaan baik, siluet, dan gambar dengan garis bentuk yang tegas biasanya memberikan hasil terbaik saat diproses melalui pembuat seni ASCII kami. Meskipun alat ini dapat menangani format gambar apa pun (JPG, PNG, GIF, WebP), karakteristik konten lebih penting daripada format file. Hindari gambar dengan latar belakang sangat sibuk, kontras rendah, atau detail halus yang mungkin hilang selama konversi. Untuk hasil terbaik dalam konversi seni teks, pertimbangkan untuk memproses gambar sebelum mengunggahnya ke konverter ASCII untuk meningkatkan kontras dan menyederhanakan area kompleks."
        },
        {
          question: "Bagaimana cara mengontrol tingkat detail dalam seni ASCII?",
          answer: "Dalam konverter gambar ke ASCII kami, ada beberapa pengaturan untuk menyesuaikan tingkat detail dalam seni teks ASCII. Parameter lebar adalah yang paling penting - nilai lebar lebih tinggi (hingga 200 karakter) akan membuat gambar ASCII lebih detail dengan presisi lebih halus, sementara nilai lebih rendah menghasilkan representasi yang lebih luas dengan detail lebih sedikit. Pemilihan set karakter juga memengaruhi detail - set 'standar' dan 'blok' menawarkan lebih banyak gradasi yang mungkin memberikan detail lebih baik daripada set 'sederhana'. Untuk kontrol maksimal, gunakan opsi set karakter kustom untuk mendefinisikan urutan karakter Anda sendiri berdasarkan kepadatan visualnya. Selain itu, opsi pembalikan terkadang dapat meningkatkan detail untuk jenis gambar tertentu dengan membalikkan pemetaan kecerahan, sementara pengaturan ukuran font memengaruhi cara gambar ASCII akhir ditampilkan di layar."
        },
        {
          question: "Mengapa seni ASCII saya terlihat terdistorsi atau meregang?",
          answer: "Seni ASCII mungkin terlihat meregang karena karakter teks standar memiliki tinggi lebih besar daripada lebarnya, menciptakan ketidakseimbangan rasio aspek saat dikonversi dari piksel persegi. Konverter ASCII kami secara otomatis menerapkan faktor koreksi untuk mengkompensasi perbedaan rasio aspek karakter ini, tetapi Anda mungkin masih melihat beberapa distorsi tergantung pada font yang digunakan untuk menampilkan hasil. Jika gambar ASCII Anda terlihat terlalu terkompresi secara vertikal atau meregang secara horizontal, coba sesuaikan pengaturan lebar atau lihat hasilnya menggunakan font monospace (seperti Courier New, Consolas, atau Monaco) yang memiliki dimensi karakter lebih konsisten. Menggunakan set karakter 'blok' juga dapat membantu membuat output yang lebih harmonis karena karakter Unicode ini mempertahankan hubungan spasial lebih baik daripada karakter ASCII standar."
        },
        {
          question: "Bisakah saya membuat seni ASCII berwarna dengan alat ini?",
          answer: "Ya, konverter gambar ke ASCII kami menyediakan opsi output warna yang mempertahankan warna dari gambar asli. Saat Anda mengaktifkan pengaturan 'output berwarna', pembuat teks ASCII akan menganalisis informasi kecerahan dan warna setiap piksel, memetakannya ke karakter ASCII sambil mempertahankan nilai warna yang sesuai. Ini menciptakan gambar ASCII berwarna hidup, bukan seni teks monokrom. Output berwarna dihasilkan sebagai HTML dengan gaya inline untuk mempertahankan informasi warna, artinya Anda dapat menyalin dan menggunakannya dalam dokumen HTML, tetapi untuk aplikasi teks biasa, Anda perlu menggunakan output non-berwarna standar. Perhatikan bahwa preservasi warna bekerja paling baik pada gambar dengan area warna yang jelas, bukan gradasi halus."
        },
        {
          question: "Bagaimana cara berbagi atau menggunakan seni ASCII yang saya buat?",
          answer: "Setelah membuat seni ASCII dengan pembuat seni teks kami, Anda memiliki beberapa cara untuk berbagi atau menggunakan kreasi Anda. Untuk seni ASCII teks biasa, cukup gunakan tombol salin untuk menyalin seluruh output ke clipboard, lalu tempel ke email, dokumen, posting media sosial, atau bidang teks apa pun. Untuk seni ASCII berwarna, Anda perlu menggunakan opsi unduh untuk menyimpan hasil sebagai file HTML yang dapat dilihat di browser web apa pun atau disematkan di situs web. Anda juga dapat mengambil tangkapan layar dari hasil yang dihasilkan untuk berbagi sebagai gambar. Untuk proyek pemrograman, salin output teks biasa dan integrasikan sebagai konstanta string dalam kode Anda. Ingatlah bahwa font monospace akan menampilkan gambar ASCII Anda dengan benar, sementara font proporsional mungkin merusak penyelarasan karakter dan mengganggu efek visual."
        }
      ]
    },
    guide: {
      title: "Panduan Langkah demi Langkah Membuat Seni ASCII dari Gambar",
      steps: [
        "<strong>Pilih gambar</strong>: Klik tombol 'Pilih Gambar' di bagian atas antarmuka <strong>pembuat seni ASCII</strong>. Pilih foto atau grafik yang ingin Anda ubah dari perangkat Anda. Untuk hasil terbaik, pilih gambar dengan kontras baik dan subjek yang jelas.",
        "<strong>Sesuaikan pengaturan lebar</strong>: Gunakan slider di panel pengaturan untuk mengatur lebar ASCII yang diinginkan. Ingat bahwa nilai lebih tinggi (mendekati 200) akan membuat <strong>gambar teks</strong> lebih detail tetapi lebih besar, sementara nilai lebih rendah menghasilkan hasil yang lebih sederhana dan kompak.",
        "<strong>Pilih set karakter</strong>: Pilih dari opsi set karakter yang tersedia (standar, sederhana, blok, atau kustom). Setiap set menghasilkan gaya berbeda dari <strong>gambar ASCII</strong>. Jika memilih 'kustom', Anda dapat memasukkan karakter Anda sendiri, diurutkan dari gelap ke terang.",
        "<strong>Konfigurasikan opsi lain</strong>: Putuskan apakah akan membalikkan warna (ini terkadang dapat meningkatkan keterbacaan di latar belakang putih), mengaktifkan output berwarna (untuk mempertahankan warna gambar asli), dan menyesuaikan ukuran font untuk kebutuhan tampilan.",
        "<strong>Buat seni ASCII</strong>: Klik tombol 'Buat ASCII' untuk memproses gambar Anda melalui <strong>konverter seni teks</strong>. Algoritme akan menganalisis gambar Anda dan membuat representasi ASCII yang sesuai berdasarkan pengaturan Anda.",
        "<strong>Pratinjau dan sempurnakan</strong>: Lihat <strong>karya seni ASCII</strong> yang dihasilkan di panel hasil. Jika tidak puas dengan hasilnya, sesuaikan pengaturan dan buat lagi. Coba set karakter berbeda atau nilai lebar untuk mencapai tingkat detail yang diinginkan.",
        "<strong>Simpan atau bagikan kreasi Anda</strong>: Setelah puas dengan <strong>gambar ASCII</strong> Anda, gunakan tombol salin untuk menyalinnya ke clipboard, atau tombol unduh untuk menyimpannya sebagai file teks. Untuk seni ASCII berwarna, unduh sebagai file HTML untuk mempertahankan informasi warna."
      ]
    },
    conclusion: "Konverter Gambar ke ASCII mengubah gambar biasa menjadi seni teks yang luar biasa, menjembatani media visual dan tekstual. Alat pembuatan seni ASCII yang kuat ini tidak hanya menyediakan saluran kreatif tetapi juga memiliki aplikasi praktis luas dalam komunikasi digital, pemrograman, pendidikan, dan bidang seni. Dengan mengubah gambar standar ke format ASCII, pengguna dapat mengekspresikan konsep visual di lingkungan yang tidak mendukung gambar tradisional, atau membuat interpretasi seni unik dari konten foto. Baik Anda ingin menambahkan sentuhan pribadi pada komunikasi digital, mengatasi tantangan kompatibilitas, atau mengeksplorasi kemungkinan seni gambar berbasis teks, pembuat gambar ASCII ini menyediakan alat kustomisasi dan opsi output yang Anda butuhkan. Seiring perkembangan komunikasi digital, kemampuan untuk mengubah gambar menjadi seni teks tetap bernilai penting dalam pemecahan masalah praktis dan ekspresi kreatif."
  }
}