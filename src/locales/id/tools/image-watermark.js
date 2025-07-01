export default {
  name: 'Pembuat Watermark Gambar',
  description: 'Tambahkan watermark teks atau gambar ke foto Anda dengan pengaturan yang dapat disesuaikan',
  upload: {
    title: 'Unggah Gambar',
    dropzone: 'Seret dan lepas gambar di sini atau klik untuk menelusuri',
    addMore: 'Tambahkan lebih banyak gambar',
    clearAll: 'Hapus semua',
    maxFiles: 'Maksimal {count} gambar',
    maxSize: 'Ukuran maksimum per gambar: {size}MB',
    supportedFormats: 'Format yang didukung: JPG, PNG, WEBP, GIF'
  },
  watermarkType: {
    title: 'Jenis Watermark',
    text: 'Watermark Teks',
    image: 'Watermark Gambar',
    both: 'Teks dan Gambar'
  },
  textWatermark: {
    title: 'Watermark Teks',
    text: 'Teks Watermark',
    font: 'Font',
    size: 'Ukuran',
    color: 'Warna',
    opacity: 'Transparansi',
    rotation: 'Rotasi',
    shadow: 'Bayangan Teks',
    background: 'Latar Belakang Teks',
    padding: 'Padding',
    border: 'Border',
    spacing: 'Jarak Antar Huruf'
  },
  imageWatermark: {
    title: 'Watermark Gambar',
    upload: 'Unggah Gambar Watermark',
    selectLogo: 'Pilih Logo',
    presetLogos: 'Logo Preset',
    size: 'Ukuran',
    opacity: 'Transparansi',
    rotation: 'Rotasi',
    offset: 'Offset'
  },
  positioning: {
    title: 'Penempatan',
    position: 'Posisi',
    custom: 'Posisi Kustom',
    xPosition: 'Posisi X',
    yPosition: 'Posisi Y',
    tiled: 'Mode Tile',
    margin: 'Margin',
    scale: 'Skala Sesuai Gambar'
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
    bottomRight: 'Kanan Bawah',
    custom: 'Posisi Kustom'
  },
  output: {
    title: 'Output',
    quality: 'Kualitas Output',
    format: 'Format Output',
    original: 'Sama dengan Asli',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    preview: 'Pratinjau',
    downloadIndividual: 'Unduh Per File',
    downloadAll: 'Unduh Semua',
    downloadAsZip: 'Unduh sebagai ZIP'
  },
  presets: {
    title: 'Preset',
    save: 'Simpan Pengaturan Saat Ini',
    load: 'Muat Preset',
    delete: 'Hapus Preset',
    presetName: 'Nama Preset'
  },
  actions: {
    apply: 'Terapkan Watermark',
    applyToAll: 'Terapkan ke Semua',
    reset: 'Reset',
    preview: 'Pratinjau',
    undo: 'Undo',
    cancel: 'Batalkan Proses'
  },
  messages: {
    processing: 'Memproses...',
    success: 'Watermark berhasil diterapkan',
    error: 'Error: {error}',
    noImages: 'Silakan tambahkan gambar terlebih dahulu',
    noWatermark: 'Silakan tambahkan watermark teks atau gambar',
    presetSaved: 'Preset berhasil disimpan',
    presetLoaded: 'Preset berhasil dimuat',
    presetDeleted: 'Preset telah dihapus',
    watermarkApplied: 'Watermark telah diterapkan',
    watermarkImageLoadError: 'Gagal memuat gambar watermark',
    imageLoadError: 'Gagal memuat gambar',
    resetSuccess: 'Berhasil direset',
    downloadStarted: 'Unduhan dimulai',
    downloadError: 'Gagal mengunduh gambar',
    imageLoaded: 'Gambar berhasil dimuat',
    canvasInitError: 'Gagal menginisialisasi canvas',
    tiledWatermarkError: 'Gagal membuat watermark tile'
  },
  article: {
    title: "Alat Watermark Gambar: Lindungi dan Branding Konten Visual Anda",
    features: {
      title: "Memahami Teknologi Watermark Gambar",
      description: "<strong>Alat watermark gambar</strong> adalah solusi canggih untuk menambahkan <strong>tanda kepemilikan</strong> yang terlihat pada <strong>gambar digital</strong> Anda. Alat <strong>watermark online</strong> ini memungkinkan Anda menerapkan <strong>watermark teks</strong> dan <strong>watermark gambar</strong> untuk melindungi <strong>kekayaan intelektual</strong> dan meningkatkan <strong>branding</strong>.<br><br>Alat <strong>watermark foto</strong> kami menawarkan berbagai opsi kustomisasi termasuk kontrol transparansi, penempatan, rotasi dan penyesuaian skala untuk menciptakan <strong>efek watermark</strong> yang sempurna. Baik Anda membutuhkan <strong>watermark hak cipta</strong> yang halus atau <strong>overlay logo</strong> yang mencolok, alat ini memberikan fleksibilitas untuk mencapai hasil profesional tanpa perlu <strong>software editing gambar</strong> yang rumit.",
      useCases: {
        title: "Aplikasi Umum Watermark Gambar",
        items: [
          "Fotografer menambahkan informasi hak cipta untuk mencegah penggunaan tidak sah pada gambar portofolio mereka",
          "Bisnis dan pemasar menyematkan logo pada foto produk untuk memperkuat identitas merek",
          "Profesional properti menambahkan watermark pada gambar properti untuk mencegah daftar listing tidak sah",
          "Desainer grafis melindungi sketsa desain yang dibagikan dengan klien selama proses persetujuan",
          "Kreator media sosial menambahkan identitas merek pada konten visual mereka untuk meningkatkan pengenalan saat gambar dibagikan",
          "Penjual e-commerce menambahkan watermark pada foto produk untuk mencegah pesaing menggunakan gambar mereka"
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum Tentang Watermark Gambar",
      items: [
        {
          question: "Apa perbedaan antara watermark teks dan gambar?",
          answer: "Watermark teks menggunakan teks kustom seperti pernyataan hak cipta atau URL website, yang dapat diberi gaya dengan berbagai font, warna dan efek. Ini ideal untuk menampilkan informasi kepemilikan. Watermark gambar menggunakan grafik seperti logo atau tanda tangan yang ditimpa pada foto Anda, membantu pengenalan merek. Alat kami mendukung kedua jenis ini, memungkinkan Anda memilih opsi yang paling sesuai dengan kebutuhan spesifik Anda, atau mengkombinasikannya untuk perlindungan dan branding maksimal."
        },
        {
          question: "Bagaimana cara membuat watermark yang terlihat tetapi tidak mengganggu?",
          answer: "Untuk membuat watermark yang efektif tetapi tidak mencolok, atur transparansi antara 30-50% agar semi-transparan. Tempatkan watermark di sudut atau sepanjang tepi, bukan di atas subjek utama. Untuk watermark teks, pilih warna yang kontras dengan gambar dan pertimbangkan untuk mengaktifkan mode tile watermark dengan jarak yang cukup untuk efek pengulangan yang halus. Teknik ini memastikan watermark Anda terlihat untuk tujuan perlindungan, sambil mempertahankan daya tarik visual gambar asli."
        },
        {
          question: "Bisakah watermark dihapus sepenuhnya dari gambar?",
          answer: "Meskipun tidak ada watermark yang 100% anti penghapusan, watermark yang dirancang dengan baik akan sangat menghambat penggunaan tidak sah. Watermark profesional yang diterapkan dengan alat kami - terutama yang menggunakan penempatan strategis, transparansi yang tepat dan mode tile - sulit dihapus tanpa mengurangi kualitas gambar atau membutuhkan keahlian teknis tingkat lanjut. Untuk perlindungan maksimal, pertimbangkan untuk menggabungkan watermark teks dan gambar, dan menempatkannya di area penting gambar sehingga upaya penghapusan akan lebih mudah terdeteksi."
        },
        {
          question: "Format gambar apa yang didukung oleh alat watermark?",
          answer: "Alat watermark gambar kami mendukung semua format gambar utama termasuk file JPG, PNG, WEBP dan GIF. Output yang sudah diberi watermark dapat diunduh dalam format pilihan Anda, dengan rekomendasi format PNG ketika Anda perlu mempertahankan transparansi atau kualitas tertinggi, dan JPG untuk sebagian besar keperluan umum dengan ukuran file yang lebih kecil. Alat ini mempertahankan dimensi gambar asli saat menambahkan watermark kustom Anda, memastikan efek yang konsisten pada konten visual Anda."
        },
        {
          question: "Bisakah saya membuat banyak gambar watermark sekaligus?",
          answer: "Saat ini, alat watermark kami memproses satu gambar dalam satu waktu untuk memastikan penempatan dan kustomisasi watermark yang presisi. Pendekatan ini memungkinkan Anda meninjau dan menyesuaikan pengaturan watermark untuk setiap gambar secara individual, memastikan hasil terbaik untuk berbagai komposisi dan skema warna. Antarmuka intuitif alat ini membuat prosesnya cepat dan efisien, memungkinkan Anda membuat gambar watermark profesional hanya dengan beberapa klik."
        }
      ]
    },
    guide: {
      title: "Panduan Penggunaan Alat Watermark Gambar",
      steps: [
        "Klik tombol 'Unggah Gambar' di bagian atas alat untuk memilih foto yang ingin diberi watermark dari perangkat Anda",
        "Pilih jenis watermark Anda: 'Watermark Teks' untuk menambahkan teks kustom, atau 'Watermark Gambar' untuk menggunakan logo atau grafik lainnya",
        "Untuk watermark teks, masukkan teks yang diinginkan, pilih gaya font, dan sesuaikan ukuran, warna dan transparansi di panel sebelah kiri",
        "Untuk watermark gambar, gunakan tombol unggah untuk mengupload logo atau grafik Anda, lalu sesuaikan skala dan transparansi sesuai kebutuhan",
        "Gunakan grid penempatan (dengan 9 posisi yang tersedia) untuk memilih lokasi watermark, atau aktifkan opsi 'Mode Tile' untuk membuat watermark berulang di seluruh gambar",
        "Gunakan slider untuk menyesuaikan sudut rotasi jika ingin membuat efek watermark diagonal",
        "Pratinjau perubahan Anda secara real-time di panel sebelah kanan, dan terus lakukan penyesuaian sampai hasilnya sesuai keinginan",
        "Klik tombol 'Unduh' untuk menyimpan gambar berwatermark ke perangkat Anda dalam format yang diinginkan"
      ]
    },
    conclusion: "Menambahkan watermark profesional pada gambar Anda adalah praktik penting dalam melindungi konten visual dan memperkuat identitas merek di lingkungan digital saat ini. Alat watermark gambar membuat proses ini menjadi mudah diakses, memungkinkan Anda membuat watermark kustom tanpa keahlian desain tingkat lanjut atau software mahal. Baik Anda seorang fotografer, pemilik bisnis, atau pembuat konten, memasukkan watermark dalam alur kerja Anda membantu melindungi kekayaan intelektual sekaligus meningkatkan pengenalan saat karya Anda dibagikan secara online."
  }
}