export default {
  name: 'Konverter JFIF ke JPG',
  description: 'Ubah gambar JFIF ke format JPG secara online dengan kualitas tinggi dan berbagai opsi',
  tags: ['gambar', 'konversi', 'jpg', 'jfif', 'jpeg', 'format', 'alat'],
  
  meta: {
    title: 'Konverter JFIF ke JPG - Alat Konversi Gambar Online Gratis',
    description: 'Konversi gratis JFIF ke JPG secara online. Konversi cepat dan aman dalam browser, dukung pemrosesan batch, pratinjau perbandingan, dan pengaturan kualitas lanjutan. Tanpa watermark, tidak perlu registrasi.'
  },
  
  upload: {
    title: 'Konverter JFIF ke JPG',
    subtitle: 'Konversi gambar JFIF ke format JPG dengan kualitas sempurna',
    dropzone: 'Seret dan lepas file JFIF Anda di sini',
    dropzoneActive: 'Lepaskan file untuk memulai konversi',
    maxSize: 'Ukuran file maksimum: 50MB',
    supportedFormats: 'Format yang didukung: JFIF, JPEG, JPG'
  },
  
  settings: {
    title: 'Pengaturan Konversi',
    advanced: 'Pengaturan Lanjutan',
    quality: {
      label: 'Kualitas Gambar',
      description: 'Kualitas lebih tinggi menghasilkan file lebih besar',
      auto: 'Optimasi otomatis (direkomendasikan)'
    },
    qualityLabels: {
      maximum: 'Kualitas Maksimum',
      high: 'Kualitas Tinggi',
      good: 'Kualitas Baik',
      medium: 'Kualitas Sedang',
      low: 'Kualitas Rendah',
      veryLow: 'Kualitas Sangat Rendah'
    },
    metadata: {
      label: 'Metadata Gambar',
      preserve: 'Pertahankan semua metadata (EXIF, GPS, dll)',
      strip: 'Hapus semua metadata (file lebih kecil)',
      keepBasic: 'Hanya pertahankan metadata dasar'
    },
    filenameOption: 'Nama File Output',
    filenameOriginal: 'Asli',
    filenameConverted: 'Tambahkan awalan',
    filenameCustom: 'Kustom',
    filenameTemplatePlaceholder: 'Contoh: converted-{name}',
    filenameTemplateHelp: 'Gunakan {name} untuk menyisipkan nama file asli',
    preserveMetadata: 'Pertahankan metadata gambar'
  },
  
  preview: {
    title: 'Pratinjau Gambar',
    before: 'JFIF Asli',
    after: 'Pratinjau JPG',
    noPreview: 'Tidak ada pratinjau tersedia',
    togglePreview: 'Tampilkan/Sembunyikan pratinjau',
    imageDetails: 'Detail Gambar'
  },
  
  fileTable: {
    fileName: 'Nama File',
    type: 'Tipe',
    size: 'Ukuran',
    status: 'Status',
    preview: 'Pratinjau',
    pending: 'Menunggu',
    converting: 'Mengkonversi...',
    done: 'Selesai',
    error: 'Error',
    progress: 'Progres'
  },
  
  results: {
    title: 'File yang Telah Dikonversi',
    summary: '{count} file telah dikonversi, menghemat {saved} ruang',
    originalName: 'Nama Asli',
    convertedName: 'Nama Hasil Konversi',
    originalSize: 'Ukuran Asli',
    convertedSize: 'Ukuran Baru',
    compressionRate: 'Tingkat Kompresi',
    actions: 'Aksi',
    noResults: 'Belum ada hasil konversi'
  },
  
  actions: {
    selectFile: 'Pilih File',
    addMore: 'Tambah Lagi',
    clear: 'Hapus File',
    convertAll: 'Konversi Semua File',
    converting: 'Mengkonversi...',
    download: 'Unduh',
    downloadAll: 'Unduh Semua',
    clearResults: 'Hapus Hasil',
    viewDetails: 'Lihat Detail',
    compare: 'Bandingkan',
    retry: 'Ulangi yang Gagal',
    cancelAll: 'Batalkan',
    optimizeAll: 'Optimasi Otomatis'
  },
  
  messages: {
    noValidFiles: 'Silakan pilih file JFIF atau JPEG yang valid.',
    conversionError: 'Terjadi kesalahan saat mengkonversi file. Silakan coba lagi.',
    conversionSuccess: 'Semua file berhasil dikonversi!',
    partialSuccess: '{success} dari {total} file berhasil dikonversi.',
    downloadStarted: 'Unduhan dimulai...',
    processingFiles: 'Memproses file Anda...',
    dragActive: 'Seret dan lepas file di sini untuk mengunggah',
    fileSizeExceeded: 'Ukuran file melebihi batas 50MB',
    unsupportedFormat: 'Format file tidak didukung'
  },
  
  history: {
    title: 'Konversi Terakhir',
    empty: 'Tidak ada konversi terakhir',
    clear: 'Hapus Riwayat',
    restore: 'Pulihkan File'
  },
  
  info: {
    title: 'Tentang Konversi JFIF ke JPG',
    description: 'Konverter JFIF ke JPG kami memungkinkan Anda dengan cepat dan mudah mengubah file gambar JFIF ke format JPG yang lebih kompatibel secara luas, semua pemrosesan dilakukan dengan aman di browser Anda.',
    
    whatIs: {
      title: 'Apa itu JFIF?',
      content: 'JFIF (JPEG File Interchange Format) adalah standar format file untuk file JPEG. Ini menyediakan informasi tambahan seperti resolusi, rasio aspek, dan metadata lainnya yang membantu memastikan gambar JPEG ditampilkan dengan benar di berbagai perangkat dan platform. Meskipun JFIF dan JPG secara teknis adalah format terkait, beberapa perangkat lunak dan perangkat mungkin memiliki kompatibilitas yang lebih baik dengan salah satunya.'
    },
    
    whyConvert: {
      title: 'Mengapa Mengkonversi JFIF ke JPG?',
      reason1: 'Kompatibilitas lebih baik dengan berbagai aplikasi dan perangkat',
      reason2: 'Lebih mudah diunggah ke situs web yang mungkin menolak format JFIF',
      reason3: 'Standarisasi koleksi gambar Anda dengan ekstensi file yang konsisten',
      reason4: 'Mengatasi masalah beberapa program yang tidak dapat membuka atau menampilkan file JFIF dengan benar'
    },
    
    howItWorks: {
      title: 'Cara Kerja',
      content: 'Konverter kami memproses file JFIF sepenuhnya di browser Anda. Gambar Anda tidak pernah diunggah ke server mana pun, memastikan privasi dan keamanan penuh. Alat ini membaca data gambar JFIF, merendernya, lalu menyimpannya dalam format JPG standar dengan pengaturan kualitas yang Anda pilih.'
    },
    
    tips: {
      title: 'Tips untuk Hasil Terbaik',
      tip1: 'Gunakan slider kualitas untuk menyeimbangkan ukuran file dan kualitas gambar',
      tip2: 'Untuk gambar yang berisi teks atau detail tajam, gunakan pengaturan kualitas lebih tinggi',
      tip3: 'Konversi beberapa file sekaligus dan unduh sebagai file ZIP',
      tip4: 'Gunakan "Optimasi Otomatis" untuk keseimbangan terbaik antara kualitas dan ukuran file',
      tip5: 'Hapus metadata untuk ukuran file lebih kecil ketika privasi penting'
    },
    
    privacy: {
      title: 'Privasi & Keamanan',
      content: 'Kami sangat serius dengan privasi Anda. Semua pemrosesan dilakukan langsung di browser Anda - file Anda tidak pernah diunggah ke server mana pun. Ini memastikan keamanan dan privasi penuh untuk gambar Anda.'
    }
  },
  
  article: {
    title: "Panduan Utama Konverter JFIF ke JPG: Mengkonversi File JFIF Online",
    
    introduction: {
      title: "Memahami Konversi JFIF ke JPG",
      content: "<strong>Konverter JFIF ke JPG</strong> kami adalah alat online yang kuat yang dirancang khusus untuk mengubah file gambar JFIF secara mulus ke format JPG yang lebih kompatibel. Jika Anda pernah kesulitan membuka atau berbagi file JFIF, konverter ini memberikan solusi sempurna, memproses gambar langsung di browser Anda tanpa perlu mengunggah, memastikan privasi dan keamanan penuh."
    },
    
    whatIsJfif: {
      title: "Apa itu JFIF dan Mengapa Mengkonversi ke JPG?",
      content: "JFIF (JPEG File Interchange Format) adalah spesifikasi format file yang menentukan cara data gambar JPEG dikemas. Meskipun secara teknis mirip dengan JPG, banyak sistem dan aplikasi memperlakukannya secara berbeda. <strong>Mengkonversi JFIF ke JPG</strong> memastikan kompatibilitas maksimum di semua perangkat, aplikasi, dan platform, menghilangkan masalah pesan error 'tipe file tidak didukung' saat mencoba melihat atau mengunggah gambar."
    },
    
    whyConvert: {
      title: "Manfaat Mengkonversi JFIF ke JPG",
      content: "Alasan utama <strong>mengkonversi JFIF ke JPG</strong> di Windows 10 atau sistem operasi lain adalah kompatibilitas. File JPG didukung secara universal, sedangkan file JFIF mungkin menyebabkan masalah di beberapa aplikasi atau situs web. Dengan menggunakan <strong>konverter online JFIF ke JPG</strong> kami, Anda dapat memastikan gambar Anda dapat diakses di mana saja, dari platform media sosial hingga perangkat lunak pengeditan gambar, lampiran email, dan penyisipan dokumen."
    },
    
    useCases: {
      title: "Kasus Penggunaan Umum Konversi JFIF ke JPG",
      list: [
        "Unggahan media sosial: Pastikan gambar Anda diterima di platform yang mungkin menolak file JFIF",
        "Pengembangan web: Gunakan JPG untuk kompatibilitas lebih baik dengan semua browser dan perangkat",
        "Penerbitan digital: Konversi gambar JFIF untuk disertakan dalam publikasi dan dokumen digital",
        "Pengeditan foto: Konversi file JFIF ke JPG sebelum mengedit di perangkat lunak dengan dukungan format terbatas",
        "Lampiran email: Konversi ke JPG untuk kompatibilitas universal saat berbagi gambar melalui email",
        "Layanan cetak foto: Banyak layanan cetak secara khusus meminta format JPG",
        "Membuat arsip foto: Standarisasi koleksi gambar dengan ekstensi file yang konsisten"
      ]
    },
    
    platforms: {
      title: "Mengkonversi JFIF ke JPG di Berbagai Platform",
      content: "Meskipun alat kami bekerja di perangkat apa pun dengan browser web, pengguna sering mencari solusi untuk platform tertentu. Berikut cara konverter kami memenuhi kebutuhan berbagai sistem:",
      list: [
        {
          title: "Konversi JFIF ke JPG di Windows 10/11",
          description: "Tidak perlu menginstal perangkat lunak apa pun untuk <strong>mengkonversi JFIF ke JPG di Windows 10</strong> atau Windows 11. Konverter online kami bekerja sempurna di browser apa pun di PC, memberikan alternatif yang lebih sederhana daripada alat bawaan."
        },
        {
          title: "Konversi JFIF ke JPG di Mac",
          description: "Pengguna Mac yang ingin tahu <strong>cara mengkonversi JFIF ke JPG di Mac</strong> dapat menggunakan alat kami tanpa perangkat lunak tambahan, menghemat ruang disk berharga dan menghindari unduhan yang tidak perlu."
        },
        {
          title: "Konversi JFIF ke JPG di Perangkat Seluler",
          description: "Desain responsif seluler kami memastikan Anda dapat <strong>mengkonversi file JFIF ke JPG</strong> langsung dari smartphone atau tablet, dengan antarmuka yang dioptimalkan untuk layar sentuh."
        },
        {
          title: "Konversi JFIF ke JPG dengan Ekstensi Browser",
          description: "Meskipun ada ekstensi browser, mereka biasanya memerlukan izin untuk mengakses data Anda. Solusi berbasis web kami tidak memerlukan instalasi dan melindungi privasi Anda."
        }
      ]
    },
    
    tutorial: {
      title: "Cara Mengkonversi JFIF ke JPG: Panduan Langkah demi Langkah",
      introduction: "Menggunakan alat intuitif kami untuk mengkonversi gambar JFIF ke JPG sangat mudah. Ikuti langkah sederhana ini untuk mengkonversi file Anda:",
      steps: [
        {
          title: "Pilih atau seret dan lepas file Anda",
          description: "Klik tombol \"Pilih File\" atau langsung seret dan lepas gambar JFIF ke area yang ditentukan. Anda dapat memilih beberapa file sekaligus untuk konversi batch."
        },
        {
          title: "Sesuaikan pengaturan kualitas (opsional)",
          description: "Untuk pengguna tingkat lanjut, Anda dapat menyesuaikan <strong>pengaturan JFIF ke JPG</strong> seperti kualitas output. Kualitas lebih tinggi berarti ukuran file lebih besar, sedangkan kualitas lebih rendah menghasilkan file lebih kecil."
        },
        {
          title: "Pilih opsi nama file",
          description: "Putuskan apakah akan mempertahankan nama file asli atau menyesuaikannya. Anda dapat menambahkan awalan atau menggunakan template penamaan kustom melalui opsi fleksibel kami."
        },
        {
          title: "Konfigurasi pengaturan metadata",
          description: "Sesuai preferensi privasi dan persyaratan ukuran file Anda, pilih untuk mempertahankan, menghapus, atau hanya mempertahankan metadata gambar dasar dari file asli."
        },
        {
          title: "Klik \"Konversi Semua File\"",
          description: "Setelah mengkonfigurasi pengaturan, klik tombol \"Konversi Semua File\" untuk memulai proses konversi. Indikator progres akan menampilkan status setiap file."
        },
        {
          title: "Unduh file JPG yang telah dikonversi",
          description: "Setelah konversi selesai, unduh file JPG Anda secara individual atau sebagai arsip ZIP yang berisi semua gambar yang telah dikonversi."
        }
      ],
      tips: {
        title: "Tips Profesional untuk Konversi JFIF ke JPG",
        list: [
          "Untuk foto dengan banyak detail, gunakan pengaturan kualitas lebih tinggi (85-100%) untuk mempertahankan kejelasan gambar",
          "Untuk grafik web atau tangkapan layar, pengaturan kualitas sedang (70-85%) biasanya memberikan keseimbangan terbaik antara kualitas dan ukuran file",
          "Jika Anda tidak yakin tentang pengaturan terbaik untuk gambar, gunakan opsi \"Optimasi Otomatis\"",
          "Untuk pertimbangan privasi, pertimbangkan untuk menggunakan opsi \"Hapus Metadata\" untuk menghapus informasi sensitif yang berpotensi ada di foto",
          "Saat mengkonversi banyak file, menggunakan opsi unduh ZIP menghemat waktu dibandingkan mengunduh setiap file secara terpisah"
        ]
      }
    },
    
    faq: {
      title: "Pertanyaan Umum tentang Konversi JFIF ke JPG",
      questions: [
        {
          question: "Bagaimana cara mengkonversi JFIF ke JPG di Windows 10?",
          answer: "Meskipun Windows 10 memiliki opsi bawaan seperti mengganti ekstensi file atau menggunakan Paint, konverter online kami biasanya lebih mudah. Cukup buka situs web kami di browser apa pun, unggah file JFIF Anda, lalu konversikan ke JPG tanpa perlu menginstal perangkat lunak apa pun. Metode ini tidak hanya bekerja di <strong>Windows 10, tetapi juga Windows 11, Mac, dan perangkat seluler</strong>."
        },
        {
          question: "Bisakah saya mengkonversi JFIF ke JPG tanpa kehilangan kualitas?",
          answer: "Ya, Anda dapat <strong>mengkonversi JFIF ke JPG tanpa kehilangan kualitas</strong> dengan menggunakan alat kami dan memilih pengaturan kualitas tertinggi (100%). Karena kedua format menggunakan kompresi JPEG, mengkonversi di antara mereka dengan pengaturan kualitas tertinggi mempertahankan hampir semua detail gambar. Untuk hasil yang benar-benar terbaik, gunakan pengaturan \"Kualitas Maksimum\" kami."
        },
        {
          question: "Bagaimana cara mengubah ekstensi file JFIF ke JPG?",
          answer: "Meskipun Anda secara teknis dapat mengganti nama ekstensi file dari .jfif ke .jpg, ini tidak selalu dapat diandalkan. <strong>Konverter JFIF ke JPG</strong> kami mengkode ulang gambar dengan benar untuk memastikan kompatibilitas yang tepat, bukan hanya mengubah ekstensi. Ini memastikan file berfungsi dengan baik di semua sistem dan aplikasi."
        },
        {
          question: "Apakah ada perangkat lunak konverter JFIF ke JPG gratis yang bisa diunduh?",
          answer: "Ya, ada aplikasi yang dapat diunduh, tetapi <strong>konverter online gratis JFIF ke JPG</strong> kami menghilangkan kebutuhan untuk mengunduh perangkat lunak apa pun. Ini dapat diakses dari perangkat apa pun, memproses file secara lokal di browser Anda (bukan di server kami), dan tidak memerlukan instalasi atau registrasi."
        },
        {
          question: "Apakah konversi JFIF ke JPG memengaruhi metadata gambar?",
          answer: "Secara default, konverter kami mempertahankan metadata seperti informasi EXIF (pengaturan kamera, tanggal pengambilan, dll.). Namun, untuk privasi atau mengurangi ukuran file, Anda dapat memilih untuk menghapus semua metadata selama proses konversi. Jika Anda mau, kami juga menyediakan opsi untuk hanya mempertahankan metadata dasar yang tidak sensitif."
        },
        {
          question: "Apa perbedaan antara file JFIF dan JPG?",
          answer: "Perbedaan terutama bersifat teknis. JFIF (JPEG File Interchange Format) adalah format file spesifik yang mengimplementasikan standar JPEG, sedangkan JPG biasanya digunakan sebagai ekstensi nama file untuk gambar terkompresi JPEG. Dalam praktiknya, sebagian besar file JPG sebenarnya mengikuti spesifikasi JFIF, tetapi beberapa perangkat lunak memperlakukannya secara berbeda berdasarkan ekstensi file."
        },
        {
          question: "Bisakah saya mengkonversi banyak file JFIF ke JPG sekaligus?",
          answer: "Tentu saja! Alat kami mendukung pemrosesan batch, memungkinkan Anda <strong>mengkonversi banyak file JFIF ke JPG</strong> sekaligus. Cukup pilih atau seret dan lepas beberapa file sekaligus, dan konverter kami akan memproses semuanya. Anda kemudian dapat mengunduhnya secara individual atau sebagai arsip ZIP gabungan."
        }
      ]
    },
    
    conclusion: {
      title: "Mengapa Memilih Konverter JFIF ke JPG Kami",
      content: "<strong>Konverter online JFIF ke JPG</strong> kami menggabungkan kesederhanaan dengan kekuatan, memberikan solusi sempurna bagi siapa pun yang perlu mengubah file JFIF ke format JPG yang lebih kompatibel secara universal. Baik Anda menggunakan Windows, Mac, atau perangkat seluler, alat berbasis browser kami bekerja dengan mulus tanpa perlu unduhan atau instalasi apa pun. Dengan fitur pemrosesan batch, pengaturan yang dapat disesuaikan, dan perlindungan privasi lengkap, mengkonversi JFIF ke JPG tidak pernah semudah atau seaman ini. Coba konverter kami sekarang dan rasakan perbedaan dalam kompatibilitas gambar dan kemudahan berbagi."
    },
    
    relatedTools: {
      title: "Alat Konversi Gambar Terkait",
      introduction: "Selain konverter JFIF ke JPG kami, Anda mungkin juga tertarik dengan alat gambar ini:",
      list: [
        {
          name: "Kompresor Gambar",
          url: "http://www.ufreetools.com/tool/image-compressor",
          description: "Mengurangi ukuran file sambil mempertahankan kualitas visual"
        },
        {
          name: "Alat Pengubah Ukuran Gambar Batch",
          url: "http://www.ufreetools.com/tool/image-batch-resizer",
          description: "Ubah ukuran, konversi, dan optimasi banyak gambar sekaligus"
        },
        {
          name: "Ekstraktor Frame GIF",
          url: "http://www.ufreetools.com/tool/gif-frame-extractor",
          description: "Ekstrak frame individu dari animasi GIF"
        }
      ]
    },
    
    resources: {
      title: "Sumber Daya Resmi",
      list: [
        {
          name: "Dokumentasi Standar JPEG",
          url: "https://docs.fileformat.com/image/jpeg/",
          description: "Pelajari lebih lanjut tentang spesifikasi teknis di balik format JPEG"
        },
        {
          name: "Format Pertukaran File JFIF",
          url: "https://docs.fileformat.com/image/jfif/",
          description: "Pelajari lebih lanjut tentang spesifikasi teknis di balik format JFIF"
        },
        {
          name: "Format Pertukaran File JPEG",
          url: "https://wikipedia.org/wiki/JPEG_File_Interchange_Format",
          description: "Kompresi JPEG digunakan dalam banyak format file gambar"
        }
      ]
    }
  }
}