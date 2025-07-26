export default {
  name: 'Pembanding Perbedaan Kode',
  description: 'Membandingkan dua kode dan menyorot perbedaannya',

  options: {
    title: 'Opsi',
    ignoreCase: 'Abaikan Huruf Besar/Kecil',
    ignoreWhitespace: 'Abaikan Spasi',
    trimWhitespace: 'Pangkas Spasi',
    diffMode: 'Mode Perbedaan',
    diffModes: {
      chars: 'Karakter',
      words: 'Kata',
      lines: 'Baris',
      sentences: 'Kalimat',
      json: 'JSON'
    },
    diffStyle: 'Gaya Tampilan',
    diffStyles: {
      split: 'Tampilan Terpisah',
      inline: 'Tampilan Sebaris'
    },
    context: 'Jumlah Baris Konteks',
    wrap: 'Pembungkus Otomatis',
    languages: {
      plaintext: 'Teks Biasa',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      json: 'JSON'
    }
  },

  inputs: {
    original: 'Kode Asli',
    modified: 'Kode yang Dimodifikasi',
    placeholderOriginal: 'Masukkan kode asli di sini...',
    placeholderModified: 'Masukkan kode yang dimodifikasi di sini...'
  },

  actions: {
    compare: 'Bandingkan',
    clear: 'Bersihkan',
    swap: 'Tukar',
    copy: 'Salin Perbedaan',
    download: 'Unduh Perbedaan',
    upload: 'Unggah File'
  },

  results: {
    title: 'Hasil Perbedaan',
    changes: 'Perubahan',
    additions: 'Penambahan',
    deletions: 'Penghapusan',
    unchanged: 'Tidak Berubah',
    noChanges: 'Tidak ditemukan perbedaan - kedua teks identik',
    loading: 'Membuat perbedaan...'
  },

  upload: {
    originalFile: 'File Asli',
    modifiedFile: 'File yang Dimodifikasi',
    dropOriginal: 'Seret file asli ke sini atau klik untuk memilih',
    dropModified: 'Seret file yang dimodifikasi ke sini atau klik untuk memilih'
  },

  messages: {
    copied: 'Tersalin ke clipboard!',
    inputRequired: 'Masukkan teks di kedua kotak input',
    diffGenerated: 'Perbedaan berhasil dibuat',
    error: 'Terjadi kesalahan saat membuat perbedaan',
    fileError: 'Kesalahan saat membaca file'
  },

  tips: {
    title: 'Tips Penggunaan',
    compareOptions: 'Sesuaikan opsi perbandingan sesuai kebutuhan Anda - mengabaikan spasi sangat membantu untuk membandingkan kode.',
    diffModes: 'Mode perbedaan yang berbeda memberikan tingkat detail perbandingan yang berbeda.',
    largeFiles: 'Untuk file besar, perbandingan berbasis baris lebih efisien.',
    jsonMode: 'Gunakan mode JSON untuk membandingkan data terstruktur - ini akan menstandarisasi dan membandingkan struktur objek.'
  }
};