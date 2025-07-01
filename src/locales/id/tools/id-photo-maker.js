export default {
  name: 'Pembuat Foto KTP',
  description: 'Buat foto profesional dengan latar belakang dan ukuran yang dapat disesuaikan',
  upload: {
    title: 'Unggah Gambar',
    dropzone: 'Seret dan lepas gambar di sini atau klik untuk menjelajah',
    or: 'atau',
    camera: 'Ambil foto dengan kamera',
    constraints: 'Ukuran maks: 10MB. Format: JPG, PNG, WEBP',
    takePicture: 'Ambil Foto',
    retake: 'Ulangi Pengambilan'
  },
  editing: {
    title: 'Edit Foto',
    faceDetection: 'Deteksi Wajah',
    autoDetect: 'Deteksi wajah otomatis',
    manualMode: 'Mode manual',
    zoom: 'Perbesar',
    rotate: 'Putar',
    brightness: 'Kecerahan',
    contrast: 'Kontras',
    saturation: 'Saturasi',
    filters: 'Filter'
  },
  background: {
    title: 'Latar Belakang',
    original: 'Asli',
    white: 'Putih',
    blue: 'Biru',
    red: 'Merah',
    custom: 'Warna kustom',
    transparent: 'Transparan'
  },
  size: {
    title: 'Ukuran Foto',
    presets: 'Preset Ukuran',
    custom: 'Ukuran Kustom',
    width: 'Lebar',
    height: 'Tinggi',
    unit: 'Satuan',
    mm: 'Milimeter',
    inches: 'Inci',
    pixels: 'Piksel'
  },
  presets: {
    passport: 'Paspor (35×45 mm)',
    visa: 'Visa (2×2 inci)',
    drivingLicense: 'SIM (2.5×3 inci)',
    idCard: 'KTP (25×35 mm)',
    linkedin: 'LinkedIn (400×400 piksel)',
    schengen: 'Visa Schengen (35×45 mm)',
    chinese: 'Visa China (33×48 mm)',
    indian: 'Visa India (2×2 inci)'
  },
  output: {
    title: 'Output',
    preview: 'Pratinjau',
    grid: 'Beberapa Foto',
    columns: 'Kolom',
    rows: 'Baris',
    spacing: 'Spasi',
    background: 'Latar Belakang Halaman',
    paperSize: 'Ukuran Kertas',
    download: 'Unduh',
    print: 'Cetak',
    downloadAs: 'Unduh sebagai',
    jpg: 'Gambar JPG',
    png: 'Gambar PNG',
    pdf: 'Dokumen PDF'
  },
  actions: {
    apply: 'Terapkan',
    reset: 'Atur Ulang',
    undo: 'Batalkan',
    redo: 'Ulangi',
    save: 'Simpan Foto',
    share: 'Bagikan'
  },
  messages: {
    noFaceDetected: 'Tidak terdeteksi wajah. Coba sesuaikan manual atau gunakan foto yang berbeda.',
    multipleFacesDetected: 'Terdeteksi banyak wajah. Menggunakan wajah terbesar.',
    processing: 'Memproses foto Anda...',
    downloadReady: 'Foto Anda siap diunduh',
    photoSaved: 'Foto berhasil disimpan'
  }
}