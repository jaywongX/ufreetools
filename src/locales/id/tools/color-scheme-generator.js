export default {
  name: 'Generator Skema Warna',
  description: 'Buat skema warna harmonis berdasarkan teori warna untuk membantu desainer membuat palet warna yang serasi dengan cepat',

  baseColor: {
    title: 'Warna Dasar',
    picker: 'Pemilih Warna',
    hex: 'Heksadesimal',
    rgb: 'RGB',
    hsl: 'HSL',
    random: 'Warna Acak',
    recent: 'Warna Terakhir Digunakan',
    hint: 'Klik blok warna atau masukkan nilai warna heksadesimal',
  },

  schemeTypes: {
    title: 'Teori Warna',
    monochromatic: 'Monokromatik',
    analogous: 'Analog',
    complementary: 'Komplementer',
    splitComplementary: 'Split Komplementer',
    triadic: 'Triadik',
    tetradic: 'Tetradik',
    square: 'Persegi',
    compound: 'Compound',
    shades: 'Gradasi',
    custom: 'Kustom',
  },

  options: {
    colorCount: 'Jumlah Warna',
    saturationRange: 'Rentang Saturasi',
    brightnessRange: 'Rentang Kecerahan',
    includeBaseColor: 'Sertakan Warna Dasar',
    lockBaseColor: 'Kunci Warna Dasar',
    colorSpace: 'Ruang Warna',
    sortBy: 'Urutkan Berdasarkan',
    colorBlindSafe: 'Aman untuk Buta Warna',
    contrastRatio: 'Rasio Kontras Minimum'
  },

  colorSpaces: {
    rgb: 'RGB',
    hsl: 'HSL',
    lab: 'LAB',
    hsv: 'HSV',
    cmyk: 'CMYK'
  },

  sortOptions: {
    hue: 'Hue',
    saturation: 'Saturasi',
    brightness: 'Kecerahan',
    harmony: 'Tingkat Harmoni',
    none: 'Tidak Ada'
  },

  palettes: {
    title: 'Palet Hasil',
    save: 'Simpan Palet',
    copy: 'Salin Palet',
    export: 'Ekspor sebagai Variabel CSS',
    apply: 'Terapkan ke Pratinjau'
  },

  exportFormats: {
    title: 'Format Ekspor',
    css: 'Variabel CSS',
    scss: 'Variabel SCSS',
    less: 'Variabel LESS',
    json: 'JSON',
    svg: 'Palet SVG',
    ase: 'Adobe ASE',
    tailwind: 'Konfigurasi Tailwind',
    pdf: 'PDF'
  },

  preview: {
    title: 'Pratinjau',
    website: 'Website',
    mobilApp: 'Aplikasi Mobile',
    dashboard: 'Dashboard',
    card: 'Kartu',
    poster: 'Poster',
    custom: 'Kustom',
    mainButton: 'Tombol Utama',
    secondButton: 'Tombol Sekunder',
    tag: 'Tag'
  },

  savedPalettes: {
    title: 'Palet Tersimpan',
    load: 'Muat',
    delete: 'Hapus',
    rename: 'Ubah Nama',
    noSavedPalettes: 'Tidak Ada Palet Tersimpan',
    saved: 'Palet Tersimpan',
    schemeNameEmpty: 'Nama Palet Kosong',
  },

  actions: {
    generate: 'Buat Skema',
    regenerate: 'Buat Ulang',
    reset: 'Reset',
    lockColor: 'Kunci Warna',
    unlockColor: 'Buka Kunci Warna',
    save: 'Simpan Palet',
  },

  messages: {
    paletteSaved: 'Palet Berhasil Disimpan',
    paletteDeleted: 'Palet Telah Dihapus',
    copied: 'Tersalin ke Clipboard',
    exported: 'Ekspor Berhasil',
    adjustmentParam: 'Parameter Penyesuaian',
    schemeName: 'Nama Skema',
    copyAllColors: 'Semua Warna Disalin',
  }
};