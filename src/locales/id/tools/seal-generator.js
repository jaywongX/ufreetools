export default {
  name: 'Generator Cap',
  description: 'Buat berbagai gambar cap digital secara online, termasuk cap perusahaan dan cap pribadi',

  // Antarmuka utama
  text: 'Teks Cap',

  textPlaceholder: 'Masukkan teks melingkar',
  centerText: 'Teks Tengah',
  centerTextPlaceholder: 'Masukkan teks atau simbol tengah',
  font: 'Pilih Font',
  shape: 'Bentuk Cap',
  size: 'Ukuran Cap',
  color: 'Warna Cap',
  generate: 'Buat Cap',
  download: 'Unduh Gambar',
  reset: 'Reset',
  preview: 'Pratinjau Cap',
  previewPlaceholder: 'Klik tombol "Buat Cap" untuk melihat pratinjau',
  bottomText: 'Teks Bawah',
  bottomTextPlaceholder: 'Masukkan teks bawah',
  centerSymbol: 'Simbol Tengah',
  centerImage: 'Unggah Gambar Tengah',
  template: 'Template Cap',
  centerSymbolSize: 'Ukuran Simbol Tengah',
  exportFormat: 'Format Ekspor',
  lineWidth: 'Ketebalan Garis',
  defaultSealText: 'PT. Contoh Terbatas',
  defaultBottomText: 'Cap Khusus Kontrak',
  width: 'Lebar',
  height: 'Tinggi',
  agingEffect: 'Efek Usang',
  colorHex: 'Nilai Warna Hex',
  customColor: 'Warna Kustom',

  // Opsi font
  fonts: {
    simsun: 'SimSun',
    kaiti: 'KaiTi',
    simhei: 'SimHei',
    yahei: 'Microsoft YaHei',
    stxingkai: 'STXingkai',
    stzhongsong: 'STZhongsong',
    stfangsong: 'STFangsong',
    arial: 'Arial',
    times: 'Times New Roman',
    georgia: 'Georgia'
  },

  // Opsi bentuk
  shapes: {
    circle: 'Lingkaran',
    ellipse: 'Elips',
    square: 'Persegi'
  },

  // Opsi warna
  colors: {
    red: 'Merah',
    darkRed: 'Merah Tua',
    blue: 'Biru',
    navy: 'Biru Navy',
    green: 'Hijau',
    darkGreen: 'Hijau Tua',
    purple: 'Ungu',
    magenta: 'Magenta',
    brown: 'Coklat',
    black: 'Hitam',
    custom: 'Warna Kustom'
  },

  // Panduan penggunaan
  howToUse: 'Panduan Penggunaan',

  instructions: {
    step1: 'Masukkan teks yang ingin ditampilkan di sekitar cap, seperti nama perusahaan atau nama pribadi',
    step2: 'Pilih teks atau gambar tengah untuk cap, bisa berupa bintang, karakter "Cap" atau simbol lainnya',
    step3: 'Sesuaikan bentuk, ukuran dan warna cap, lalu lihat pratinjau',
    step4: 'Jika sudah puas, klik tombol "Unduh Gambar" untuk menyimpan cap kustom Anda'
  },

  templates: {
    custom: 'Kustom',
    company: 'Cap Perusahaan',
    contract: 'Cap Khusus Kontrak',
    finance: 'Cap Khusus Keuangan',
    legal: 'Cap Nama Hukum',
    personal: 'Cap Pribadi'
  }
};