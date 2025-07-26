export default {
  name: 'Generator Formula LaTeX',
  description: 'Hasilkan dan ekspor formula matematika LaTeX secara real-time',

  // Teks UI
  input: 'Masukkan kode LaTeX',

  output: 'Pratinjau hasil',
  renderButton: 'Render Formula',
  exportButton: 'Ekspor sebagai Gambar',
  copyButton: 'Salin Kode LaTeX',

  // Pengaturan
  settings: {
    title: 'Pengaturan',
    fontSize: 'Ukuran Font',
    textColor: 'Warna Teks',
    backgroundColor: 'Warna Latar',
    displayMode: 'Mode Tampilan',
    displayModeInline: 'Mode Inline',
    displayModeBlock: 'Mode Blok'
  },

  // Contoh
  examples: {
    title: 'Contoh',
    basic: 'Formula Dasar',
    fraction: 'Pecahan',
    superscript: 'Superskrip/Subskrip',
    integral: 'Integral',
    matrix: 'Matriks',
    more: 'Contoh Lainnya'
  },

  // Pesan
  copied: 'Tersalin ke clipboard',

  errorTitle: 'Error Rendering',
  errorMessage: 'Periksa sintaks LaTeX Anda'
};