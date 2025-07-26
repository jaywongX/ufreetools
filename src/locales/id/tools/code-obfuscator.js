export default {
  name: 'Pengabur Kode',
  description: 'Mengaburkan kode JavaScript dan CSS untuk meningkatkan keamanan dan melindungi kekayaan intelektual',

  languages: {
    title: 'Pilih Bahasa',
    javascript: 'JavaScript',
    css: 'CSS'
  },

  options: {
    title: 'Opsi Pengaburan',
    javascript: {
      compact: 'Output Ringkas (Hapus spasi)',
      controlFlowFlattening: 'Penyederhanaan Alur Kontrol',
      deadCodeInjection: 'Sisipkan Kode Tidak Berguna',
      debugProtection: 'Proteksi Debug',
      selfDefending: 'Pertahanan Diri (Cegah pemformatan)',
      stringArray: 'Konversi String ke Array',
      renameGlobals: 'Ganti Nama Variabel Global',
      renameProperties: 'Ganti Nama Properti',
      mangle: 'Pengaburan Nama Variabel',
      stringArrayEncoding: 'Enkoding Array String',
      stringArrayThreshold: 'Ambang Array String',
      unicodeEscapeSequence: 'Urutan Escape Unicode'
    },
    css: {
      compact: 'Output Ringkas',
      renameSelectors: 'Ganti Nama Selektor',
      preserveImportant: 'Pertahankan !important',
      restructure: 'Restrukturisasi Aturan',
      keepVendorPrefixes: 'Pertahankan Prefix Browser',
      removeComments: 'Hapus Komentar'
    }
  },

  input: {
    title: 'Masukkan Kode',
    placeholder: 'Masukkan kode yang akan diaburkan di sini...',
    clear: 'Kosongkan',
    paste: 'Tempel',
    upload: 'Unggah File',
    inputObfuscatorCode: 'Masukkan kode yang akan diaburkan',
  },

  output: {
    title: 'Hasil Pengaburan',
    placeholder: 'Kode yang telah diaburkan akan muncul di sini...',
    copy: 'Salin',
    download: 'Unduh',
    stats: {
      original: 'Ukuran Asli',
      obfuscated: 'Ukuran Setelah Diaburkan',
      ratio: 'Rasio Kompresi'
    },
    increase: 'Bertambah',
    decrease: 'Berkurang',
  },

  actions: {
    obfuscate: 'Aburkan',
    clear: 'Hapus'
  },

  messages: {
    copied: 'Tersalin ke clipboard',
    copyFailed: 'Gagal menyalin, silakan salin manual',
    processing: 'Sedang memproses...',
    error: 'Terjadi kesalahan saat pengaburan',
    invalidInput: 'Kode input tidak valid',
    uploadError: 'Gagal mengunggah file',
    fileTooLarge: 'File terlalu besar (maksimal 2MB)'
  },

  tips: {
    title: 'Tips Penggunaan',
    tip1: 'Pengaburan kode dapat meningkatkan kesulitan reverse engineering, tetapi tidak sepenuhnya mencegah kode dibongkar',
    tip2: 'Mengaktifkan lebih banyak opsi pengaburan akan menambah ukuran kode dan overhead eksekusi',
    tip3: 'Beberapa opsi pengaburan mungkin mempengaruhi kemampuan debugging kode',
    tip4: 'Disarankan untuk mencadangkan kode asli sebelum diaburkan',
    tip5: 'Untuk proyek besar, disarankan menggunakan alat pengaburan profesional'
  },

  demo: {
    title: 'Contoh',
    function: 'Contoh Fungsi',
    class: 'Contoh Kelas',
    simple: 'Gaya Sederhana',
    animation: 'Efek Animasi',
  }
};