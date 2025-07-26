export default {
  name: 'Generator User-Agent',
  description: 'Buat string User-Agent untuk berbagai browser dan perangkat, digunakan untuk pengujian website, web scraping, dan pengembangan',

  filters: {
    title: 'Filter',
    browser: 'Browser',
    os: 'Sistem Operasi',
    deviceType: 'Tipe Perangkat'
  },

  browsers: {
    all: 'Semua Browser',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    opera: 'Opera',
    edge: 'Edge',
    ie: 'Internet Explorer',
    unknown: 'Browser Tidak Dikenal'
  },

  operatingSystems: {
    all: 'Semua Sistem',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    unknown: 'Sistem Tidak Dikenal'
  },

  deviceTypes: {
    all: 'Semua Perangkat',
    desktop: 'Desktop',
    mobile: 'Perangkat Mobile',
    tablet: 'Tablet',
    unknown: 'Perangkat Tidak Dikenal'
  },

  generation: {
    quantity: 'Jumlah',
    generateRandom: 'Buat User-Agent Acak',
    clearResults: 'Hapus Hasil'
  },

  results: {
    title: 'Hasil',
    copyAll: 'Salin Semua',
    empty: 'Klik tombol "Buat User-Agent Acak" untuk menghasilkan hasil'
  },

  messages: {
    copied: 'Tersalin ke clipboard',
    allCopied: 'Semua User-Agent telah disalin',
    copyFailed: 'Gagal menyalin, salin manual'
  },

  info: {
    formatTitle: 'Format User-Agent',
    formatDescription: 'String User-Agent biasanya berisi nama browser, versi, sistem operasi dan informasi perangkat dengan format:',
    formatExample: 'Mozilla/5.0 (informasi platform) informasi mesin informasi browser',
    examplesTitle: 'Contoh User-Agent Umum:',
    chromeWindows: 'Chrome (Windows):',
    firefoxMac: 'Firefox (macOS):',
    safariIOS: 'Safari (iOS):',
    useCasesTitle: 'Kasus Penggunaan:',
    useCases: [
      'Pengujian kompatibilitas website',
      'Web scraping dan pengumpulan data',
      'Pengembangan dan pengujian API',
      'Melewati deteksi browser',
      'Simulasi akses dari perangkat berbeda'
    ]
  }
};