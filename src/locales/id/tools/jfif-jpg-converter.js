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
  }
};