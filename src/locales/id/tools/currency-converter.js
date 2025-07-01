export default {
  name: 'Konverter Nilai Tukar',
  description: 'Konversi cepat dan akurat antara mata uang yang berbeda dan pencarian nilai tukar',
  
  // Teks antarmuka utama
  amount: 'Jumlah',
  from: 'Dari',
  to: 'Ke',
  convert: 'Konversi',
  result: 'Hasil Konversi',
  swap: 'Tukar Mata Uang',
  rate: 'Nilai Tukar Saat Ini',
  lastUpdated: 'Terakhir Diperbarui',
  addCurrency: 'Tambahkan Mata Uang',
  
  // Riwayat
  history: 'Riwayat',
  clearHistory: 'Hapus Riwayat',
  noHistory: 'Belum ada riwayat',
  
  // Mata uang
  currencies: {
    USD: 'Dolar AS',
    EUR: 'Euro',
    JPY: 'Yen Jepang',
    GBP: 'Pound Sterling',
    AUD: 'Dolar Australia',
    CAD: 'Dolar Kanada',
    CHF: 'Franc Swiss',
    CNY: 'Yuan China',
    HKD: 'Dolar Hong Kong',
    NZD: 'Dolar Selandia Baru',
    SEK: 'Krona Swedia',
    KRW: 'Won Korea',
    SGD: 'Dolar Singapura',
    NOK: 'Krone Norwegia',
    MXN: 'Peso Meksiko',
    INR: 'Rupee India',
    RUB: 'Rubel Rusia',
    ZAR: 'Rand Afrika Selatan',
    TRY: 'Lira Turki',
    BRL: 'Real Brasil',
    TWD: 'Dolar Taiwan Baru',
    DKK: 'Krone Denmark',
    PLN: 'Zloty Polandia',
    THB: 'Baht Thailand',
    IDR: 'Rupiah Indonesia',
    MYR: 'Ringgit Malaysia',
    PHP: 'Peso Filipina'
  },
  
  // Pesan kesalahan
  errors: {
    invalidAmount: 'Masukkan jumlah yang valid',
    apiError: 'Gagal mendapatkan data nilai tukar',
    samecurrencies: 'Pilih mata uang yang berbeda untuk dikonversi'
  },
  
  // Tips dan informasi
  tips: {
    offline: 'Mode offline: Menampilkan data nilai tukar yang terakhir di-cache',
    refreshing: 'Memperbarui data nilai tukar...'
  },
  
  // Lihat riwayat nilai tukar
  historicalRates: 'Riwayat Nilai Tukar',
  dateRange: 'Rentang Tanggal',
  from7days: '7 Hari Terakhir',
  from30days: '30 Hari Terakhir',
  from90days: '90 Hari Terakhir',
  customRange: 'Rentang Kustom',
  startDate: 'Tanggal Mulai',
  endDate: 'Tanggal Akhir',
  viewChart: 'Lihat Grafik',
  
  // Pengaturan
  settings: 'Pengaturan',
  decimalPlaces: 'Desimal',
  autoUpdate: 'Pembaruan otomatis nilai tukar',
  defaultCurrency: 'Mata Uang Default',
  
  // Tentang alat
  aboutTitle: 'Tentang Alat Konverter Nilai Tukar',
  aboutDescription: 'Alat Konverter Nilai Tukar adalah aplikasi konversi mata uang yang sederhana dan efisien, membantu Anda melakukan konversi cepat dan akurat antara mata uang yang berbeda. Baik untuk perencanaan perjalanan, perdagangan internasional, atau penelitian investasi, alat ini dapat memenuhi kebutuhan Anda.',
  
  featuresTitle: 'Fitur Utama',
  feature1: 'Mendukung konversi nilai tukar untuk lebih dari 30 mata uang utama',
  feature2: 'Mendapatkan data nilai tukar pasar terbaru secara real-time',
  feature3: 'Perhitungan konversi mata uang yang cepat dan intuitif',
  feature4: 'Pencarian data nilai tukar historis dan tampilan grafik',
  feature5: 'Menyimpan riwayat konversi untuk penggunaan berulang',
  feature6: 'Dapat menyesuaikan pengaturan tampilan dan mata uang default',
  
  howToUseTitle: 'Cara Menggunakan',
  howToUseStep1: '1. Masukkan jumlah yang ingin Anda konversi',
  howToUseStep2: '2. Pilih mata uang asal (dari mata uang apa)',
  howToUseStep3: '3. Pilih mata uang tujuan (ke mata uang apa)',
  howToUseStep4: '4. Klik tombol "Konversi" untuk mendapatkan hasil',
  howToUseStep5: '5. Gunakan tombol "Tukar Mata Uang" untuk cepat membalikkan arah konversi',
  
  tipsTitle: 'Tips Penggunaan',
  tip1: 'Data nilai tukar diperbarui setiap jam untuk memastikan hasil konversi yang akurat',
  tip2: 'Tambahkan mata uang favorit ke daftar favorit untuk akses cepat',
  tip3: 'Gunakan fitur grafik historis untuk menganalisis tren nilai tukar',
  tip4: 'Hasil konversi secara otomatis disimpan dalam riwayat untuk dilihat nanti',
  tip5: 'Dalam mode offline, alat akan menggunakan data nilai tukar yang terakhir di-cache'
};