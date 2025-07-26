export default {
  name: 'Pemilih Warna',
  description: 'Gunakan alat warna canggih untuk memilih, mengonversi, dan menghasilkan skema warna',

  options: {
    colorSpace: 'Ruang Warna',
    paletteType: 'Jenis Palet',
    includeAlpha: 'Sertakan Transparansi',
    colorNaming: 'Penamaan Warna'
  },

  colorSpaces: {
    rgb: 'RGB',
    hex: 'HEX',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB',
    named: 'Warna Bernama'
  },

  palettes: {
    monochromatic: 'Monokromatik',
    complementary: 'Komplementer',
    analogous: 'Analog',
    triadic: 'Triadik',
    tetradic: 'Tetradik',
    split: 'Split Komplementer'
  },

  actions: {
    pickColor: 'Pilih Warna',
    randomColor: 'Warna Acak',
    generatePalette: 'Buat Palet',
    convert: 'Konversi',
    copyColor: 'Salin Warna Saat Ini',
    copyAll: 'Salin Semua',
    save: 'Simpan Warna',
    reset: 'Reset',
    clear: 'Hapus'
  },

  formats: {
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL'
  },

  colorSchemes: {
    title: 'Skema Warna',
    complementary: 'Komplementer',
    triadic: 'Triadik',
    analogous: 'Analog',
    monochromatic: 'Monokromatik',
    split: 'Split Komplementer',
    double: 'Double Komplementer',
    square: 'Square',
    compound: 'Compound'
  },

  colorAdjust: {
    title: 'Penyesuaian Warna',
    hue: 'Hue',
    saturation: 'Saturasi',
    lightness: 'Kecerahan',
    alpha: 'Transparansi'
  },

  colorInfo: {
    title: 'Informasi Warna',
    name: 'Nama Warna',
    format: 'Format',
    contrast: 'Kontras',
    accessibility: {
      title: 'Aksesibilitas',
      pass: 'Memenuhi Standar WCAG',
      fail: 'Tidak Memenuhi Standar WCAG',
      normal: 'Teks Normal',
      large: 'Teks Besar'
    }
  },

  messages: {
    copied: 'Warna telah disalin ke clipboard',
    copyFailed: 'Gagal menyalin warna',
    invalidColor: 'Format warna tidak valid',
    contrastWarning: 'Kontras rendah',
    saved: 'Warna disimpan',
    contrast: 'Kontras: {ratio}',
    accessibility: {
      AAA: 'Kontras Sangat Baik (AAA)',
      AA: 'Kontras Baik (AA)',
      fail: 'Kontras tidak cukup - tidak memenuhi standar aksesibilitas'
    },
    preview: 'Pratinjau',
    colorValue: 'Nilai Warna',
  },

  history: {
    title: 'Riwayat Warna',
    empty: 'Belum ada riwayat warna',
    clear: 'Hapus Riwayat'
  },

  colorPalette: {
    title: 'Palet Warna',
    addToPalette: 'Tambahkan ke Palet',
    removeFromPalette: 'Hapus dari Palet',
    exportPalette: 'Ekspor Palet',
    importPalette: 'Impor Palet',
    clearPalette: 'Hapus Palet'
  }
};