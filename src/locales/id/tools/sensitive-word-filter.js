export default {
  name: 'Penyaring Kata Sensitif',
  description: 'Deteksi dan saring kata sensitif dalam teks, dukung kamus kata sensitif kustom dan aturan penyaringan',
  
  // Input
  input: {
    title: 'Masukkan Teks',
    placeholder: 'Masukkan teks yang ingin diperiksa...',
    loadSample: 'Muat Contoh',
    clearInput: 'Hapus Input',
    uploadFile: 'Unggah File Teks'
  },
  
  // Output
  output: {
    title: 'Teks yang Disaring',
    original: 'Teks Asli',
    filtered: 'Teks yang Disaring',
    statistics: 'Statistik',
    copyOutput: 'Salin Teks yang Disaring',
    clearOutput: 'Hapus Output',
    download: 'Unduh Teks yang Disaring'
  },
  
  // Opsi
  options: {
    title: 'Opsi Penyaringan',
    filterMode: 'Mode Penyaringan',
    caseSensitive: 'Perhatikan Huruf Besar/Kecil',
    wholeWordOnly: 'Hanya Kata Utuh',
    customReplacement: 'Penggantian Kustom',
    replacementChar: 'Karakter Pengganti',
    highlightWords: 'Sorot Kata Sensitif',
    customDictionary: 'Kamus Kustom',
    importDictionary: 'Impor Kamus',
    exportDictionary: 'Ekspor Kamus'
  },
  
  // Mode Penyaringan
  filterModes: {
    replace: 'Ganti Kata Sensitif',
    highlight: 'Sorot Kata Sensitif',
    remove: 'Hapus Kata Sensitif',
    detect: 'Hanya Deteksi'
  },
  
  // Kamus
  dictionary: {
    title: 'Kamus Kata',
    add: 'Tambah Kata',
    remove: 'Hapus',
    clear: 'Hapus Kamus',
    wordInput: 'Masukkan kata yang ingin ditambahkan',
    categories: 'Kategori',
    severity: 'Tingkat Keparahan',
    bulkAdd: 'Tambah Massal',
    search: 'Cari di Kamus'
  },
  
  // Kategori
  categories: {
    profanity: 'Kata Kasar',
    slurs: 'Fitur',
    adult: 'Konten Dewasa',
    offensive: 'Konten Ofensif',
    violence: 'Kekerasan',
    discrimination: 'Diskriminasi',
    personal: 'Informasi Pribadi',
    custom: 'Kustom'
  },
  
  // Tingkat Keparahan
  severityLevels: {
    low: 'Rendah',
    medium: 'Sedang',
    high: 'Tinggi',
    critical: 'Kritis'
  },
  
  // Statistik
  statistics: {
    totalWords: 'Total Kata',
    sensitiveWords: 'Jumlah Kata Sensitif',
    uniqueSensitiveWords: 'Kata Sensitif Unik',
    severityBreakdown: 'Distribusi Tingkat Keparahan',
    categoryBreakdown: 'Distribusi Kategori',
    cleanlinessScore: 'Skor Kebersihan'
  },
  
  // Opsi Penyaringan
  filterOptions: {
    title: 'Mode Penyaringan',
    modes: {
      asterisk: 'Ganti dengan *',
      custom: 'Karakter Pengganti Kustom',
      remove: 'Hapus Kata Sensitif'
    },
    replaceChar: {
      title: 'Karakter Pengganti',
      placeholder: 'Masukkan karakter pengganti'
    }
  },
  
  // Kata Kustom
  customWords: {
    title: 'Kamus Kata Sensitif Kustom',
    addWord: 'Tambah Kata',
    addPrompt: 'Masukkan kata sensitif yang ingin ditambahkan:',
    removeWord: 'Hapus'
  },
  
  // Aksi
  actions: {
    filter: 'Mulai Penyaringan',
    reset: 'Reset',
    processing: 'Memproses...',
    clearAll: 'Hapus Semua',
    copyFiltered: 'Salin Teks yang Disaring',
    downloadReport: 'Unduh Laporan',
    resetSettings: 'Reset Pengaturan'
  },
  
  // Hasil
  results: {
    title: 'Hasil Penyaringan',
    tabs: {
      filteredResult: 'Hasil Penyaringan',
      detectionReport: 'Laporan Deteksi'
    },
    filteredText: {
      title: 'Teks yang Disaring',
      copy: 'Salin Hasil',
      empty: 'Tidak ada hasil penyaringan'
    },
    statistics: {
      detectedCount: 'Jumlah Kata Sensitif Terdeteksi',
      retentionRate: 'Tingkat Retensi Teks',
      totalWords: 'Total Kata dalam Teks'
    },
    detectedWords: {
      title: 'Kata Sensitif Terdeteksi',
      empty: 'Tidak ada kata sensitif terdeteksi'
    }
  },
  
  // Pesan
  messages: {
    copied: 'Tersalin ke clipboard',
    copyFailed: 'Gagal menyalin, silakan salin manual',
    noInput: 'Masukkan teks yang ingin disaring',
    inputTooLong: 'Teks input terlalu panjang',
    wordAdded: 'Kata berhasil ditambahkan ke kamus',
    wordExists: 'Kata sudah ada dalam kamus',
    wordRemoved: 'Kata berhasil dihapus dari kamus',
    filterSuccess: 'Penyaringan teks berhasil',
    noSensitiveWords: 'Tidak ada kata sensitif ditemukan',
    dictionaryCleared: 'Kamus berhasil dihapus',
    dictionaryImported: 'Kamus berhasil diimpor',
    dictionaryExported: 'Kamus berhasil diekspor',
    emptyText: 'Masukkan teks yang ingin disaring'
  },
  
  // Artikel
  article: {
    title: 'Penyaring Kata Sensitif: Alat Penyaringan Teks Komprehensif',
    
    functionality: {
      title: 'Fitur dan Keunggulan',
      description: '<strong>Penyaring Kata Sensitif</strong> adalah alat pemrosesan teks canggih yang dirancang untuk mengidentifikasi dan menyaring konten sensitif, tidak pantas, atau ofensif dalam teks. Alat ini menggunakan algoritma pencocokan pola mutakhir untuk mendeteksi kata dan frasa bermasalah, lalu secara otomatis mengganti atau menghapusnya sesuai preferensi Anda. Alat penyaringan teks ini mendukung kamus kustom, berbagai mode penyaringan, dan menyediakan analisis statistik mendetail tentang konten sensitif yang terdeteksi.'
    },
    
    useCases: {
      title: 'Aplikasi dan Skenario Penggunaan',
      list: [
        '<strong>Moderasi Konten Situs Web</strong>: Otomatis menyaring konten yang dibuat pengguna seperti komentar, posting forum, dan ulasan untuk mempertahankan lingkungan online yang aman dan sopan.',
        '<strong>Pemeriksaan Materi Pendidikan</strong>: Memastikan materi pengajaran dan tugas siswa bebas dari bahasa tidak pantas, cocok untuk kelas atau platform pendidikan.',
        '<strong>Penyaringan Konten Layanan Pelanggan</strong>: Menyaring komunikasi eksternal untuk memverifikasi bahwa mereka memenuhi standar profesional dan menghindari bahasa yang berpotensi ofensif.',
        '<strong>Manajemen Media Sosial</strong>: Memeriksa dan membersihkan konten sebelum dipublikasikan di platform media sosial untuk mencegah pelanggaran kebijakan platform.',
        '<strong>Persiapan Data Teks</strong>: Membersihkan kumpulan data teks untuk pembelajaran mesin dan analisis dengan menghapus bahasa ofensif atau bias.',
        '<strong>Kepatuhan Komunikasi Perusahaan</strong>: Memverifikasi bahwa komunikasi internal dan eksternal sesuai dengan kebijakan bahasa perusahaan dan standar profesional.'
      ]
    },
    
    faq: {
      title: 'Pertanyaan Umum tentang Penyaringan Kata Sensitif',
      items: [
        {
          question: 'Seberapa akurat deteksi kata sensitif ini?',
          answer: 'Sistem <strong>deteksi kata sensitif</strong> menggunakan algoritma pencocokan pola yang presisi dengan akurasi tinggi. Namun, penyaringan berbasis konteks (memahami makna di balik kata) masih menjadi tantangan. Alat ini memungkinkan Anda melihat kata yang terdeteksi dan menyesuaikan kamus untuk meningkatkan akurasi sesuai kebutuhan spesifik.'
        },
        {
          question: 'Bisakah saya membuat dan menyimpan kamus kustom sendiri?',
          answer: 'Ya, fitur <strong>kamus kata sensitif kustom</strong> memungkinkan Anda menambahkan kata sensitif sesuai kebutuhan konten Anda. Anda dapat dengan mudah menambahkan kata ke penyaring yang akan diterapkan selama proses penyaringan.'
        },
        {
          question: 'Mode penyaringan apa saja yang tersedia?',
          answer: 'Alat ini menyediakan berbagai <strong>mode penyaringan teks</strong>: mengganti kata sensitif dengan tanda bintang (*), menggunakan karakter pengganti kustom, atau menghapus kata sensitif sepenuhnya dari teks. Anda dapat memilih mode yang paling sesuai dengan kebutuhan Anda.'
        },
        {
          question: 'Apakah alat ini bisa menangani berbagai bahasa?',
          answer: 'Ya, <strong>penyaring kata sensitif multibahasa</strong> bekerja dengan berbagai bahasa, meskipun efektivitasnya mungkin bervariasi tergantung bahasa. Alat ini terutama berfokus pada pencocokan pola karakter yang berlaku untuk berbagai sistem penulisan.'
        },
        {
          question: 'Bagaimana cara menangani teks dalam jumlah besar?',
          answer: 'Untuk <strong>penyaringan teks massal</strong>, cukup tempelkan konten ke area input. Alat ini dioptimalkan untuk memproses teks dalam jumlah besar secara efisien, meskipun teks yang sangat besar mungkin membutuhkan waktu pemrosesan lebih lama. Untuk dokumen yang sangat besar, pertimbangkan untuk memprosesnya secara terpisah.'
        }
      ]
    },
    
    tutorial: {
      title: 'Panduan Langkah demi Langkah Menggunakan Penyaring Kata Sensitif',
      steps: [
        '<strong>Masukkan Teks</strong>: Pertama, masukkan atau tempel teks yang ingin Anda saring di area input teks.',
        '<strong>Konfigurasi Opsi Penyaringan</strong>: Pilih mode penyaringan yang Anda inginkan (ganti dengan tanda bintang, karakter kustom, atau hapus kata).',
        '<strong>Kustomisasi Kamus Kata Sensitif</strong> (opsional): Tambahkan kata spesifik yang ingin Anda deteksi dan saring dengan mengklik tombol "Tambah Kata".',
        '<strong>Mulai Penyaringan</strong>: Klik tombol "Mulai Penyaringan" untuk memproses teks Anda dan mendeteksi konten sensitif.',
        '<strong>Lihat Hasil</strong>: Periksa teks yang telah disaring di tab "Hasil Penyaringan", dan lihat analisis statistik di tab "Laporan Deteksi".',
        '<strong>Salin atau Simpan Hasil</strong>: Salin teks yang telah disaring ke clipboard untuk digunakan dalam aplikasi atau dokumen Anda.'
      ]
    }
  }
}