export default {
  name: 'Pengatur Gambar Massal',
  description: 'Sesuaikan, konversi, dan optimalkan banyak gambar sekaligus',
  input: {
    title: 'Input Gambar',
    dropzone: 'Seret dan lepas gambar di sini atau klik untuk menjelajah',
    addMore: 'Tambahkan lebih banyak gambar',
    selectImages: 'Pilih Gambar',
    clearAll: 'Hapus Semua',
    maxFiles: 'Maksimal {count} gambar',
    maxSize: 'Ukuran maks per gambar: {size}MB',
    supportedFormats: 'Format yang didukung: {formats}'
  },
  options: {
    title: 'Opsi Penyesuaian',
    settingsTitle: 'Pengaturan Penyesuaian',
    resizeMode: 'Mode Ukuran Ulang',
    resizeMethod: 'Metode Ukuran Ulang',
    pixelMode: 'Piksel',
    percentageMode: 'Persentase',
    maxDimensionMode: 'Ukuran Maksimum',
    outputFormat: 'Format Output',
    quality: 'Kualitas',
    width: 'Lebar',
    height: 'Tinggi',
    maintainAspectRatio: 'Pertahankan Rasio Aspek',
    maxWidth: 'Lebar Maksimum',
    maxHeight: 'Tinggi Maksimum',
    percentage: 'Persentase',
    backgroundColor: 'Warna Latar Belakang',
    naming: 'Penamaan Output',
    filenamePrefix: 'Awalan Nama File',
    filenameSuffix: 'Akhiran Nama File',
    applyToAllImages: 'Terapkan ke semua gambar',
    applyToAll: 'Terapkan ke Semua Gambar'
  },
  resizeModes: {
    exact: 'Ukuran Tepat',
    maxDimensions: 'Ukuran Maksimum',
    percentage: 'Skala Persentase',
    fit: 'Sesuaikan ke Dalam',
    cover: 'Tutupi',
    crop: 'Potong'
  },
  formats: {
    original: 'Sama dengan Sumber',
    jpg: 'JPG/JPEG',
    png: 'PNG',
    webp: 'WebP',
    gif: 'GIF',
    bmp: 'BMP',
    tiff: 'TIFF',
    svg: 'SVG',
    ico: 'ICO'
  },
  namingOptions: {
    original: 'Nama File Asli',
    dimensions: 'Asli + Dimensi',
    format: 'Asli + Format',
    custom: 'Pola Kustom',
    random: 'String Acak'
  },
  output: {
    title: 'Gambar yang Disesuaikan',
    downloadAll: 'Unduh Semua',
    downloadAsZip: 'Unduh sebagai ZIP',
    processingStatus: 'Memproses: {processed}/{total}',
    originalSize: 'Ukuran Asli',
    newSize: 'Ukuran Baru',
    reduction: 'Pengurangan',
    individualDownload: 'Unduh'
  },
  batch: {
    title: 'Pemrosesan Massal',
    process: 'Proses Semua Gambar',
    cancel: 'Batalkan Pemrosesan',
    selectPreset: 'Pilih Preset',
    savePreset: 'Simpan Pengaturan Saat Ini',
    progress: 'Proses Kemajuan'
  },
  watermark: {
    title: 'Watermark',
    enable: 'Tambahkan Watermark',
    text: 'Teks Watermark',
    image: 'Gambar Watermark',
    position: 'Posisi',
    opacity: 'Opasitas',
    rotation: 'Rotasi',
    size: 'Ukuran',
    padding: 'Padding'
  },
  positions: {
    topLeft: 'Kiri Atas',
    topCenter: 'Tengah Atas',
    topRight: 'Kanan Atas',
    middleLeft: 'Kiri Tengah',
    middleCenter: 'Tengah',
    middleRight: 'Kanan Tengah',
    bottomLeft: 'Kiri Bawah',
    bottomCenter: 'Tengah Bawah',
    bottomRight: 'Kanan Bawah'
  },
  actions: {
    resize: 'Ubah Ukuran',
    preview: 'Pratinjau',
    processing: 'Memproses...',
    reset: 'Atur Ulang',
    applySettings: 'Terapkan Pengaturan',
    resetSettings: 'Atur Ulang Pengaturan',
    cancel: 'Batalkan'
  },
  messages: {
    resizeSuccess: 'Pengubahan ukuran gambar berhasil',
    resizeFailed: 'Gagal mengubah ukuran gambar: {error}',
    invalidDimensions: 'Masukkan dimensi yang valid',
    invalidWidthHeight: 'Masukkan lebar dan tinggi yang valid',
    noImages: 'Tambahkan gambar untuk diubah ukurannya',
    noImagesToDownload: 'Tidak ada gambar untuk diunduh',
    processing: 'Memproses gambar...',
    processingComplete: 'Pemrosesan Selesai',
    processingError: 'Kesalahan saat memproses gambar',
    waitingForProcess: 'Menunggu Pemrosesan',
    downloadStarted: 'Pengunduhan Dimulai',
    allDownloaded: 'Semua gambar telah diunduh',
    presetSaved: 'Preset Disimpan',
    presetLoaded: 'Preset Dimuat',
    zipCreated: 'Paket ZIP dengan {count} gambar telah dibuat',
    zipError: 'Kesalahan saat membuat paket ZIP'
  },
  preview: {
    title: 'Pratinjau Gambar ({count} gambar)',
    selectImage: 'Pilih Gambar',
    batchSupport: 'Mendukung pemilihan banyak gambar sekaligus untuk diproses',
    download: 'Unduh',
    delete: 'Hapus'
  },
  qualityOptions: {
    fast: 'Pemrosesan Cepat',
    medium: 'Kualitas Sedang',
    high: 'Kualitas Tinggi (Direkomendasikan)',
    best: 'Kualitas Terbaik (Lebih Lambat)'
  },
  article: {
    title: "Pengatur Gambar Massal: Proses Banyak Gambar Sekaligus dengan Efisien",
    features: {
      title: "Pelajari tentang pemrosesan gambar massal dan keuntungannya",
      description: "<strong>Pengatur Gambar Massal</strong> adalah alat online yang dirancang untuk menyederhanakan proses penyesuaian, konversi, dan pengoptimalan banyak gambar sekaligus. Berbeda dengan perangkat lunak pengeditan tradisional yang memproses gambar satu per satu, <strong>pengolah gambar massal</strong> ini memungkinkan Anda menerapkan penyesuaian yang sama ke puluhan bahkan ratusan gambar hanya dengan beberapa klik.<br><br>Alat kami menyediakan opsi komprehensif untuk <strong>penyesuaian ukuran gambar</strong>, konversi format, dan pengoptimalan kualitas, sambil menjaga integritas visual gambar. Baik Anda perlu mengurangi ukuran file untuk penggunaan web, menyiapkan gambar untuk platform tertentu, atau menjaga konsistensi ukuran dalam koleksi gambar, <strong>pengatur massal</strong> dapat menangani tugas-tugas ini dengan efisien di browser Anda tanpa perlu menginstal perangkat lunak apa pun atau memiliki keahlian teknis.",
      useCases: {
        title: "Aplikasi praktis penyesuaian gambar massal",
        items: [
          "<strong>Optimasi Website</strong>: Pengembang web dan administrator konten dapat menggunakan <strong>pengatur gambar massal</strong> untuk mempersiapkan sumber daya gambar situs web dengan cepat. Dengan mengurangi ukuran dan file, Anda dapat meningkatkan kecepatan pemuatan halaman secara signifikan, yang sangat penting untuk pengalaman pengguna dan peringkat SEO. Kemampuan alat ini untuk mengonversi gambar secara massal ke format yang dioptimalkan seperti WebP lebih meningkatkan kinerja situs web.",
          
          "<strong>Fotografi Produk E-commerce</strong>: Penjual online yang menangani katalog produk besar dapat menggunakan <strong>pengatur foto massal</strong> kami untuk menstandarisasi semua gambar produk ke ukuran tertentu yang diperlukan oleh pasar seperti Amazon, eBay, atau Shopify, menghemat jam kerja. Ini memastikan semua daftar memiliki tampilan yang konsisten dan profesional sambil memenuhi persyaratan platform.",
          
          "<strong>Pembuatan Konten Media Sosial</strong>: Manajer media sosial yang mengelola konten untuk beberapa platform dapat menyesuaikan ukuran gambar secara massal untuk memenuhi persyaratan ukuran spesifik dari berbagai jaringan. Baik itu posting Instagram, sampul Facebook, kartu Twitter, atau pin Pinterest, <strong>pengolah gambar massal</strong> kami membantu mempertahankan kualitas visual terbaik di semua platform.",
          
          "<strong>Penyiapan Portofolio Fotografi</strong>: Fotografer profesional dapat dengan cepat mempersiapkan gambar untuk situs web portofolio, pengiriman klien, atau layanan cetak. <strong>Pengatur gambar multi</strong> memungkinkan penyesuaian ke ukuran tertentu sambil mempertahankan rasio aspek, memastikan konsistensi di seluruh koleksi foto tanpa perlu pengeditan individual yang memakan waktu.",
          
          "<strong>Pengembangan Materi Pendidikan</strong>: Guru dan pembuat konten pendidikan dapat menyesuaikan sekumpulan diagram, grafik, atau foto ke ukuran yang seragam untuk dimasukkan ke dalam materi pembelajaran, presentasi, atau kursus online. Fungsi pemrosesan massal membuat konsistensi visual dalam sumber daya pendidikan yang luas menjadi praktis.",
          
          "<strong>Penyiapan Sumber Daya Pengembangan Aplikasi</strong>: Pengembang aplikasi seluler dapat menggunakan alat ini untuk menghasilkan beberapa versi dari gambar yang sama dalam resolusi berbeda (seperti 1x, 2x, 3x) untuk menyesuaikan dengan berbagai tampilan perangkat. <strong>Konverter gambar massal</strong> menyederhanakan proses ini, memastikan sumber daya aplikasi terlihat jelas di semua jenis perangkat sambil mempertahankan ukuran file yang dapat dikelola."
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Penyesuaian Gambar Massal",
      items: [
        {
          question: "Apakah menggunakan pengatur gambar massal mengurangi kualitas gambar?",
          answer: "<strong>Pengolah gambar massal</strong> kami berhati-hati untuk mempertahankan kualitas gambar, tetapi ada beberapa faktor yang perlu dipertimbangkan:<br><br>• Alat kami menggunakan algoritma berkualitas tinggi yang dirancang khusus untuk mempertahankan kesetiaan gambar selama proses pengubahan ukuran<br>• Anda dapat mengontrol pengaturan kualitas, terutama saat mengonversi ke format seperti JPEG atau WebP<br>• Mengurangi ukuran gambar (membuat gambar lebih kecil) biasanya mempertahankan kualitas lebih baik daripada memperbesar gambar<br>• Semakin tinggi pengaturan kualitas yang Anda pilih, semakin baik hasilnya, tetapi file akan lebih besar<br>• Untuk pemrosesan massal, pengaturan kualitas 80-90% memberikan keseimbangan yang sangat baik untuk sebagian besar skenario penggunaan<br><br>Untuk pekerjaan profesional yang membutuhkan kualitas tertinggi, kami merekomendasikan menggunakan pengaturan \"Kualitas Tinggi\" atau \"Kualitas Terbaik\" dalam opsi prosesor. Fungsi pratinjau <strong>pengatur foto massal</strong> memungkinkan Anda memeriksa hasil sebelum mengunduh, memastikannya memenuhi standar kualitas Anda."
        },
        {
          question: "Format gambar apa yang didukung oleh pengatur gambar massal?",
          answer: "<strong>Konverter gambar massal</strong> kami mendukung berbagai format gambar:<br><br><strong>Format Input:</strong><br>• JPEG/JPG - Format umum untuk foto<br>• PNG - Cocok untuk grafik dengan transparansi<br>• WebP - Format modern dengan kompresi yang sangat baik<br>• GIF - Untuk animasi sederhana<br>• BMP - Format bitmap yang tidak dikompresi<br>• TIFF - Format berkualitas tinggi yang umum digunakan dalam fotografi<br><br><strong>Format Output:</strong><br>• JPEG/JPG - Terbaik untuk foto dan penggunaan web umum<br>• PNG - Mempertahankan transparansi dan tanpa kehilangan kualitas<br>• WebP - Menyediakan kompresi yang lebih baik sambil mempertahankan kualitas<br><br><strong>Pengatur gambar multi</strong> dapat mengonversi antara format ini selama pemrosesan massal, memungkinkan Anda menstandarisasi koleksi gambar ke satu format atau memilih format yang paling sesuai untuk setiap skenario penggunaan."
        },
        {
          question: "Berapa banyak gambar yang dapat diproses oleh pengatur gambar massal sekaligus?",
          answer: "<strong>Pengatur gambar massal</strong> dirancang untuk menangani volume gambar besar secara efisien:<br><br>• Anda dapat memproses puluhan gambar dalam satu batch (biasanya batas per batch sekitar 100 gambar)<br>• Ukuran file gambar individual dibatasi hingga 5MB per gambar untuk kinerja optimal<br>• Waktu pemrosesan total tergantung pada beberapa faktor, termasuk:<br>  - Jumlah dan ukuran gambar input<br>  - Kompleksitas operasi penyesuaian<br>  - Kemampuan pemrosesan perangkat Anda<br>  - Kecepatan koneksi internet Anda<br><br><strong>Pengolah gambar massal</strong> menggunakan pemrosesan klien, yang berarti gambar tidak pernah meninggalkan komputer Anda, meningkatkan kecepatan dan privasi. Untuk koleksi yang sangat besar (ratusan atau ribuan gambar), kami merekomendasikan membaginya menjadi batch yang lebih kecil (20-50 gambar) untuk diproses demi pengalaman terbaik."
        },
        {
          question: "Bisakah rasio aspek dipertahankan saat mengubah ukuran gambar secara massal?",
          answer: "Ya, mempertahankan rasio aspek adalah fitur kunci dari <strong>pengatur gambar massal</strong> kami:<br><br>• Opsi \"Pertahankan Rasio Aspek\" memastikan gambar tidak diregangkan atau terdistorsi<br>• Saat mengaktifkan opsi ini, Anda hanya perlu menentukan lebar atau tinggi, dimensi lainnya akan dihitung secara otomatis<br>• Untuk ukuran yang tepat (seperti persyaratan media sosial), Anda dapat menonaktifkan opsi ini<br>• Metode penyesuaian \"Ukuran Maksimum\" sangat cocok untuk mempertahankan rasio aspek sambil memastikan tidak ada gambar yang melebihi ukuran yang ditentukan<br>• \"Skala Persentase\" menyesuaikan semua gambar secara seragam sambil mempertahankan rasio aspek asli dengan sempurna<br><br><strong>Pengatur foto massal</strong> menyediakan pratinjau untuk setiap gambar, memungkinkan Anda mengonfirmasi bahwa rasio aspek dipertahankan dengan benar sebelum mengunduh gambar yang diproses."
        },
        {
          question: "Bagaimana cara mengunduh semua gambar yang diproses setelah penyesuaian massal?",
          answer: "<strong>Pengatur gambar multi</strong> menyediakan opsi yang nyaman untuk mendapatkan gambar yang diproses:<br><br>1. <strong>Unduh Massal sebagai ZIP</strong>: Setelah pemrosesan selesai, klik tombol \"Unduh Semua\" untuk mendapatkan semua gambar yang disesuaikan dalam satu arsip ZIP<br><br>2. <strong>Unduh Individu</strong>: Jika Anda hanya membutuhkan gambar tertentu, setiap gambar yang diproses memiliki tombol unduhnya sendiri<br><br>3. <strong>Penamaan File Otomatis</strong>: Gambar yang diproses mempertahankan nama file aslinya dengan tambahan pengenal yang menunjukkan bahwa mereka telah disesuaikan ukurannya<br><br>4. <strong>Pertahankan Format</strong>: Jika Anda memilih \"Sama dengan Sumber\" dalam format output, setiap gambar mempertahankan format aslinya; jika tidak, semua gambar akan dikonversi ke format yang Anda pilih<br><br><strong>Konverter gambar massal</strong> menyimpan semua gambar yang diproses sementara di browser Anda, jadi kami sarankan untuk mengunduh hasil Anda sebelum menutup tab browser."
        }
      ]
    },
    guide: {
      title: "Cara Menggunakan Pengatur Gambar Massal: Panduan Langkah demi Langkah",
      step1: "<strong>Unggah Gambar Anda</strong>: Klik tombol \"Pilih Gambar\" atau seret dan lepas file ke area unggahan. <strong>Pengolah gambar massal</strong> menerima format gambar umum termasuk JPEG, PNG, WebP, GIF, dan lainnya. Anda dapat menambahkan banyak gambar sekaligus atau menambahkan lebih banyak gambar setelah pemilihan awal.",
      step2: "<strong>Pilih Metode Penyesuaian</strong>: Pilih dari tiga metode penyesuaian yang kuat:<ul class='ml-5 list-disc'><li>Mode \"Piksel\" memungkinkan Anda menentukan ukuran piksel yang tepat</li><li>Mode \"Persentase\" menyesuaikan gambar secara proporsional berdasarkan ukuran asli</li><li>Mode \"Ukuran Maksimum\" memastikan gambar tidak melebihi ukuran yang ditentukan sambil mempertahankan proporsi</li></ul>Fleksibilitas ini membuat <strong>pengatur foto massal</strong> kami cocok untuk hampir semua kebutuhan pemrosesan gambar.",
      step3: "<strong>Atur Dimensi Anda</strong>: Masukkan nilai lebar dan/atau tinggi yang diinginkan sesuai dengan metode penyesuaian yang dipilih. Jika Anda mengaktifkan \"Pertahankan Rasio Aspek\" (direkomendasikan untuk sebagian besar kasus), Anda hanya perlu menentukan satu dimensi, <strong>pengatur gambar massal</strong> akan secara otomatis menghitung dimensi lainnya untuk mencegah distorsi gambar.",
      step4: "<strong>Konfigurasi Opsi Output</strong>: Pilih format output yang Anda sukai (JPEG, PNG, atau WebP) dan sesuaikan pengaturan kualitas sesuai kebutuhan. <strong>Konverter gambar massal</strong> memungkinkan Anda menyeimbangkan antara kualitas gambar dan ukuran file. Untuk format JPEG dan WebP, Anda dapat menyesuaikan persentase kualitas, nilai yang lebih tinggi menghasilkan gambar yang terlihat lebih baik tetapi dengan ukuran file yang lebih besar.",
      step5: "<strong>Proses Gambar Anda</strong>: Klik tombol \"Terapkan ke Semua Gambar\" untuk memulai pemrosesan massal. <strong>Pengatur gambar multi</strong> akan menampilkan indikator kemajuan pemrosesan saat memproses file Anda. Setiap gambar diproses menggunakan algoritma berkualitas tinggi yang mempertahankan kesetiaan visual sambil mencapai dimensi yang Anda tentukan.",
      step6: "<strong>Tinjau Hasilnya</strong>: Setelah pemrosesan selesai, periksa pratinjau setiap gambar untuk memastikan hasilnya sesuai dengan harapan Anda. <strong>Pengatur gambar massal</strong> menampilkan informasi berguna termasuk ukuran asli dan baru, memungkinkan Anda mengonfirmasi bahwa pengubahan ukuran telah dilakukan dengan benar.",
      step7: "<strong>Unduh Gambar yang Diproses</strong>: Klik \"Unduh Semua\" untuk mendapatkan file ZIP yang berisi semua gambar yang disesuaikan ukurannya, atau unduh gambar individual sesuai kebutuhan. <strong>Pengolah gambar massal</strong> mempertahankan file asli Anda dan menyediakan versi yang diproses dengan penamaan yang tepat untuk membedakannya dari aslinya."
    },
    conclusion: "Pengatur Gambar Massal memberikan solusi praktis untuk tantangan umum yang dihadapi oleh pengembang web, fotografer, pemasar, dan pembuat konten: memproses banyak gambar secara efisien sambil mempertahankan kualitas dan konsistensi. Dengan menghilangkan kebutuhan akan perangkat lunak desktop yang mahal atau pengeditan individual yang memakan waktu, alat ini menyederhanakan alur kerja dan membantu mempertahankan standar visual untuk aset digital. Baik Anda mempersiapkan foto produk untuk platform e-commerce, mengoptimalkan gambar untuk situs web responsif, atau menstandarkan konten visual untuk media sosial, fungsi pemrosesan massal menghemat waktu berharga dan memastikan hasil yang konsisten. Karena konten digital terus menekankan elemen visual, alat yang membantu mengelola dan mengoptimalkan gambar dalam skala besar menjadi sumber daya penting bagi para profesional di berbagai industri."
  }
}