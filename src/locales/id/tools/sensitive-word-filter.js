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
  }
};