export default {
  name: 'Perencana Anggaran Perjalanan',
  description: 'Merencanakan dan menghitung anggaran perjalanan Anda, mengelola pengeluaran perjalanan dengan mudah',
  
  // Elemen antarmuka utama
  planYourTrip: 'Rencanakan Perjalanan Anda',
  destination: 'Tujuan',
  startDate: 'Tanggal Mulai',
  endDate: 'Tanggal Berakhir',
  travelers: 'Jumlah Traveler',
  currency: 'Mata Uang Tampilan',
  tripDuration: 'Durasi Perjalanan (hari)',
  totalBudget: 'Total Anggaran',
  perPersonBudget: 'Anggaran per Orang',
  perDayBudget: 'Anggaran per Hari',
  
  // Tombol dan tindakan
  calculate: 'Hitung Anggaran',
  reset: 'Reset',
  addExpense: 'Tambahkan Item Pengeluaran',
  removeExpense: 'Hapus',
  saveAsPDF: 'Simpan sebagai PDF',
  
  // Judul kategori
  categories: {
    transport: 'Transportasi',
    accommodation: 'Akomodasi',
    food: 'Makanan',
    activities: 'Aktivitas dan Atraksi',
    shopping: 'Belanja',
    misc: 'Biaya Lainnya',
    emergency: 'Dana Darurat'
  },
  
  // Opsi transportasi
  transport: {
    title: 'Biaya Transportasi',
    flight: 'Tiket Pesawat',
    train: 'Kereta',
    bus: 'Bus',
    car: 'Sewa Mobil/Bahan Bakar',
    taxi: 'Taksi/Transportasi Online',
    publicTransport: 'Transportasi Umum',
    other: 'Transportasi Lainnya'
  },
  
  // Opsi akomodasi
  accommodation: {
    title: 'Biaya Akomodasi',
    hotel: 'Hotel',
    hostel: 'Hostel',
    apartment: 'Penginapan/Apartemen',
    camping: 'Berkemah',
    other: 'Akomodasi Lainnya'
  },
  
  // Opsi makanan
  food: {
    title: 'Biaya Makanan',
    restaurants: 'Makan di Restoran',
    streetFood: 'Makanan Jalanan',
    groceries: 'Belanja Bahan Makanan',
    drinks: 'Minuman/Alkohol',
    other: 'Makanan Lainnya'
  },
  
  // Opsi aktivitas
  activities: {
    title: 'Aktivitas dan Atraksi',
    attractions: 'Tiket Masuk Atraksi',
    tours: 'Tur/Kegiatan Kelompok',
    entertainment: 'Aktivitas Hiburan',
    other: 'Aktivitas Lainnya'
  },
  
  // Biaya lainnya
  misc: {
    title: 'Biaya Lainnya',
    insurance: 'Asuransi Perjalanan',
    visa: 'Biaya Visa',
    souvenirs: 'Oleh-oleh',
    internet: 'Biaya Internet',
    tips: 'Tip',
    other: 'Biaya Lain-lain'
  },
  
  // Judul tabel
  table: {
    category: 'Kategori',
    description: 'Deskripsi',
    amount: 'Jumlah',
    actions: 'Aksi'
  },
  
  // Statistik dan analisis
  analysis: {
    title: 'Analisis Anggaran',
    summary: 'Ringkasan Anggaran',
    breakdown: 'Rincian Pengeluaran',
    distribution: 'Distribusi Anggaran',
    dailyAverage: 'Rata-rata Harian',
    suggestions: 'Saran Anggaran'
  },
  
  // Mata uang
  currencies: {
    CNY: 'Yuan China (¥)',
    USD: 'Dolar AS ($)',
    EUR: 'Euro (€)',
    JPY: 'Yen Jepang (¥)',
    GBP: 'Pound Sterling (£)',
    KRW: 'Won Korea (₩₩)',
    AUD: 'Dolar Australia ($)',
    CAD: 'Dolar Kanada ($)',
    THB: 'Baht Thailand (฿฿)',
    SGD: 'Dolar Singapura ($)'
  },
  
  // Tujuan umum
  destinations: {
    domestic: 'Tujuan Domestik',
    international: 'Tujuan Internasional',
    popularCities: 'Kota Populer',
    beijing: 'Beijing',
    shanghai: 'Shanghai',
    guangzhou: 'Guangzhou',
    shenzhen: 'Shenzhen',
    hangzhou: 'Hangzhou',
    chengdu: 'Chengdu',
    xian: 'Xi\'an',
    sanya: 'Sanya',
    tokyo: 'Tokyo',
    osaka: 'Osaka',
    seoul: 'Seoul',
    bangkok: 'Bangkok',
    singapore: 'Singapura',
    paris: 'Paris',
    london: 'London',
    newyork: 'New York',
    sydney: 'Sydney',
    custom: 'Tujuan Kustom'
  },
  
  // Tips dan saran
  tips: {
    general: 'Saran Umum',
    saveMoney: 'Saran Penghematan',
    localCurrency: 'Tips Mata Uang Lokal',
    emergencyFund: 'Disarankan menyisihkan 10-15% dari total anggaran sebagai dana darurat',
    transport: 'Memesan tiket pesawat lebih awal biasanya bisa menghemat biaya',
    accommodation: 'Pertimbangkan akomodasi dengan dapur untuk mengurangi pengeluaran makanan',
    food: 'Mencoba makanan lokal yang terjangkau lebih hemat daripada restoran internasional',
    planning: 'Membuat rencana perjalanan harian yang rinci membantu mengontrol anggaran',
    extraCosts: 'Jangan lupa mempertimbangkan biaya kecil seperti tip, internet, dan kartu transportasi'
  },
  
  // Pesan informasi
  messages: {
    success: 'Anggaran berhasil dihitung',
    error: 'Harap isi semua bidang yang wajib diisi',
    dateError: 'Tanggal berakhir harus setelah tanggal mulai',
    saved: 'Rencana anggaran telah disimpan',
    deleted: 'Rencana anggaran telah dihapus',
    highBudget: 'Anggaran Anda tampak lebih tinggi dari rata-rata tujuan ini',
    lowBudget: 'Anggaran Anda mungkin terlalu rendah, pastikan mencakup semua pengeluaran penting'
  },
  
  // Informasi footer
  about: {
    title: 'Tentang Perencana Anggaran Perjalanan',
    description: 'Perencana Anggaran Perjalanan adalah alat untuk membantu Anda mengelola pengeluaran perjalanan, membuat perjalanan Anda menyenangkan dan ekonomis. Dengan merencanakan setiap pengeluaran secara rinci, Anda dapat menghindari tekanan keuangan selama perjalanan dan menikmati pengalaman perjalanan sepenuhnya.',
    
    featuresTitle: 'Fitur Utama',
    feature1: 'Membuat anggaran yang masuk akal berdasarkan tujuan, durasi, dan jumlah traveler',
    feature2: 'Membagi pengeluaran perjalanan ke dalam kategori seperti transportasi, akomodasi, makanan, dan aktivitas',
    feature3: 'Menyediakan analisis anggaran dan tampilan visual',
    feature4: 'Mendukung berbagai mata uang dan konversi',
    feature5: 'Memberikan saran praktis untuk menghemat biaya perjalanan',
    feature6: 'Dapat mengekspor dan menyimpan rencana anggaran',
    
    benefitsTitle: 'Manfaat Penggunaan',
    benefit1: 'Menghindari anggaran berlebihan selama perjalanan',
    benefit2: 'Mengalokasikan dana secara proporsional ke berbagai aspek perjalanan',
    benefit3: 'Mengurangi tekanan keuangan selama perjalanan',
    benefit4: 'Meningkatkan efisiensi perencanaan perjalanan',
    benefit5: 'Sesuai dengan berbagai gaya perjalanan dan kebutuhan anggaran',
    
    tipsTitle: 'Tips Perencanaan Anggaran',
    tip1: 'Sesuaikan anggaran dengan tingkat konsumsi tujuan perjalanan',
    tip2: 'Sisihkan 10-15% dana untuk keadaan darurat',
    tip3: 'Bepergian di musim sepi dapat menghemat biaya akomodasi dan transportasi secara signifikan',
    tip4: 'Perhatikan biaya transaksi kartu kredit saat di luar negeri',
    tip5: 'Pertimbangkan untuk membeli asuransi perjalanan untuk mengantisipasi keadaan darurat'
  }
};