export default {
  name: 'Generator Kode QR',
  description: 'Buat kode QR yang dapat disesuaikan untuk URL, teks, dan lainnya',

  // Opsi
  options: {
    content: 'Konten Kode QR',
    contentType: 'Jenis Konten',
    errorCorrectionLevel: 'Tingkat Koreksi Kesalahan',
    size: 'Ukuran',
    margin: 'Margin',
    foregroundColor: 'Warna Depan',
    backgroundColor: 'Warna Latar',
    logo: 'Tambahkan Logo',
    logoSize: 'Ukuran Logo',
    cornerRadius: 'Sudut Melengkung'
  },

  // Jenis konten
  contentTypes: {
    url: 'URL',
    text: 'Teks Biasa',
    email: 'Email',
    phone: 'Nomor Telepon',
    sms: 'SMS',
    wifi: 'Jaringan WiFi',
    vcard: 'Kartu Virtual (vCard)',
    mecard: 'Kartu Virtual (MeCard)'
  },

  // Tingkat koreksi kesalahan
  errorLevels: {
    L: 'Rendah (7%)',
    M: 'Sedang (15%)',
    Q: 'Tinggi (25%)',
    H: 'Tertinggi (30%)'
  },

  // Aksi
  actions: {
    generate: 'Buat Kode QR',
    download: 'Unduh',
    downloadSVG: 'Unduh SVG',
    downloadPNG: 'Unduh PNG',
    copy: 'Salin Gambar',
    clear: 'Reset',
    uploadLogo: 'Unggah Logo'
  },

  // Template
  templates: {
    title: 'Template Cepat',
    confirmReplace: 'Yakin ingin mengganti konten saat ini?',
    confirm: 'Konfirmasi',
    cancel: 'Batal',
    url: {
      name: 'Tautan URL'
    },
    email: {
      name: 'Alamat Email'
    },
    phone: {
      name: 'Nomor Telepon'
    },
    sms: {
      name: 'Pesan SMS'
    },
    wifi: {
      name: 'Konfigurasi WiFi',
      example: {
        ssid: 'Nama Jaringan',
        password: 'Kata Sandi'
      }
    },
    geo: {
      name: 'Lokasi Geografis'
    }
  },

  // Tampilan
  appearance: {
    title: 'Pengaturan Tampilan'
  },

  // Pratinjau
  preview: {
    title: 'Pratinjau',
    generating: 'Sedang membuat...',
    clickGenerateButton: 'Klik tombol "Buat Kode QR"',
    clickToDownload: 'Klik untuk mengunduh kode QR'
  },

  // Tips
  tips: {
    title: 'Tips',
    saveToPrint: 'Kode QR yang dibuat dapat disimpan sebagai gambar untuk dicetak atau dibagikan.',
    errorCorrection: 'Tingkat koreksi kesalahan menunjukkan seberapa baik kode QR dapat dibaca jika sebagian tertutup atau rusak. Level L memiliki toleransi terendah, level H tertinggi tetapi membuat kode lebih kompleks.'
  },

  // WiFi
  wifi: {
    ssid: 'Nama Jaringan (SSID)',
    password: 'Kata Sandi',
    encryption: 'Enkripsi',
    hidden: 'Jaringan Tersembunyi'
  },

  // Placeholder
  placeholders: {
    content: 'Masukkan teks, tautan, atau konten lainnya...'
  },

  // Karakter
  characters: 'karakter',

  maxChars: 'Disarankan tidak lebih dari 300 karakter',

  // Pesan
  messages: {
    copied: 'Tersalin ke clipboard!',
    generated: 'Kode QR berhasil dibuat',
    contentRequired: 'Masukkan konten kode QR',
    downloaded: 'Kode QR telah diunduh',
    confirmReplace: 'Klik konfirmasi untuk mengganti konten saat ini',
    contentUpdated: 'Konten telah diperbarui',
    changesCancelled: 'Perubahan dibatalkan',
    invalidUrl: 'Masukkan URL yang valid',
    invalidEmail: 'Masukkan alamat email yang valid',
    invalidPhone: 'Masukkan nomor telepon yang valid',
    logoTooBig: 'File logo terlalu besar, ukuran maksimal 1MB'
  },

  // Error
  errors: {
    canvasNotReady: 'Elemen Canvas belum siap',
    generationError: 'Gagal membuat kode QR',
    generationErrorWithMessage: 'Gagal membuat kode QR: {message}',
    downloadError: 'Gagal mengunduh kode QR: {message}'
  }
};