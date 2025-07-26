export default {
  name: 'Parser User-Agent',
  description: 'Analisis dan identifikasi string User-Agent browser untuk mengetahui informasi browser, sistem operasi, dan perangkat',

  input: {
    label: 'String User-Agent',
    placeholder: 'Masukkan atau tempel string User-Agent...'
  },

  actions: {
    parse: 'Parse',
    detect: 'Deteksi Browser Saat Ini',
    clear: 'Hapus'
  },

  results: {
    title: 'Hasil Analisis',
    summary: 'Ringkasan',
    details: 'Detail',
    originalUA: 'String User-Agent Asli'
  },

  sections: {
    browser: 'Browser',
    os: 'Sistem Operasi',
    device: 'Perangkat',
    other: 'Informasi Lain'
  },

  deviceTypes: {
    mobile: 'Perangkat Mobile',
    tablet: 'Tablet',
    desktop: 'Desktop'
  },

  fields: {
    name: 'Nama',
    version: 'Versi',
    engine: 'Engine',
    platform: 'Platform',
    type: 'Tipe',
    vendor: 'Vendor',
    model: 'Model',
    isMobile: 'Perangkat Mobile',
    isTablet: 'Tablet',
    isDesktop: 'Desktop'
  },

  messages: {
    parsingError: 'Error saat memparsing string User-Agent',
    emptyInput: 'Masukkan string User-Agent',
    unknown: 'Tidak Diketahui',
    yes: 'Ya',
    no: 'Tidak'
  },

  tips: {
    description: 'User-Agent adalah string identifikasi yang dikirim browser ke server, berisi informasi tentang browser, sistem operasi, dan perangkat.',
    useCases: 'Biasa digunakan untuk analisis website, penanganan kompatibilitas browser, dan adaptasi perangkat.'
  }
};