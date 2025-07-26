export default {
  name: 'Kalkulator Pajak Penghasilan Pribadi',
  description: 'Hitung pajak penghasilan yang harus dibayar dari gaji dan penghasilan bersih',

  // Teks antarmuka utama
  taxSystem: 'Sistem Pajak',

  china: 'China',
  usa: 'Amerika Serikat',
  uk: 'Inggris',
  monthlyIncome: 'Penghasilan Bulanan',
  annualIncome: 'Penghasilan Tahunan',
  socialSecurity: 'Jaminan Sosial & Dana Perumahan',
  socialSecurityAmount: 'Jumlah Jaminan Sosial',
  socialSecurityPercent: 'Persentase Jaminan Sosial',
  socialSecurityBase: 'Dasar Jaminan Sosial',
  deductions: 'Pengurangan Tambahan',
  childrenEducation: 'Pendidikan Anak',
  continuingEducation: 'Pendidikan Lanjutan',
  housingLoanInterest: 'Bunga Pinjaman Rumah',
  housingRent: 'Sewa Rumah',
  elderlySupport: 'Dukungan Orang Tua',
  medicalTreatment: 'Pengobatan Serius',
  otherDeductions: 'Pengurangan Lainnya',
  calculate: 'Hitung',
  reset: 'Reset',

  // Area hasil
  results: 'Hasil Perhitungan',

  taxableIncome: 'Penghasilan Kena Pajak',
  taxRate: 'Tarif Pajak',
  quickDeduction: 'Pengurangan Cepat',
  taxPayable: 'Pajak Terutang',
  afterTaxIncome: 'Penghasilan Bersih',
  effectiveTaxRate: 'Tarif Pajak Efektif',
  monthlyBreakdown: 'Rincian Bulanan',

  // Area grafik
  taxAnalysis: 'Analisis Pajak',

  incomeDistribution: 'Distribusi Penghasilan',
  income: 'Penghasilan',
  tax: 'Pajak',
  takeHome: 'Bersih',

  // Area tabel tarif
  taxBrackets: 'Tabel Tarif',

  bracketRange: 'Rentang Golongan',
  rate: 'Tarif',

  // Rincian bulanan
  month: 'Bulan',

  cumulativeIncome: 'Penghasilan Kumulatif',
  cumulativeDeduction: 'Pengurangan Kumulatif',
  cumulativeTaxable: 'Penghasilan Kena Pajak Kumulatif',
  cumulativeTax: 'Pajak Terutang Kumulatif',
  previousTax: 'Pajak Bulan Sebelumnya',
  currentMonthTax: 'Pajak Bulan Ini',

  // Pemilihan kota
  city: 'Kota',

  firstTier: 'Kota Tier 1',
  secondTier: 'Kota Tier 2',
  otherCity: 'Kota Lainnya',

  // Penjelasan alat
  aboutTitle: 'Tentang Pajak Penghasilan Pribadi',

  aboutDescription: 'Pajak penghasilan pribadi adalah pajak yang dikenakan pada penghasilan individu dan merupakan salah satu jenis pajak utama di banyak negara. Di China, pajak penghasilan menggunakan tarif progresif mulai dari 3% hingga 45%, di mana penghasilan lebih tinggi dikenakan tarif lebih tinggi.',
  howToUseTitle: 'Cara Menggunakan Kalkulator Ini',
  howToUseStep1: '1. Pilih sistem pajak (saat ini mendukung pajak China)',
  howToUseStep2: '2. Masukkan penghasilan bulanan atau tahunan (akan dikonversi otomatis)',
  howToUseStep3: '3. Masukkan jumlah jaminan sosial atau pilih hitung berdasarkan persentase',
  howToUseStep4: '4. Isi berbagai pengurangan tambahan',
  howToUseStep5: '5. Klik tombol "Hitung" untuk mendapatkan hasil',
  chinaTaxRulesTitle: 'Aturan Perhitungan Pajak China',
  chinaTaxRule1: 'Penghasilan Tidak Kena Pajak: 5,000 yuan/bulan',
  chinaTaxRule2: 'Penghasilan Kena Pajak = Penghasilan - Jaminan Sosial - Pengurangan Tambahan - Penghasilan Tidak Kena Pajak',
  chinaTaxRule3: 'Pajak = Penghasilan Kena Pajak × Tarif Pajak - Pengurangan Cepat',
  deductionExplainTitle: 'Penjelasan Pengurangan Tambahan',
  childrenEducationExplain: 'Pendidikan Anak: 1,000 yuan/bulan per anak',
  continuingEducationExplain: 'Pendidikan Lanjutan: 400 yuan/bulan untuk pendidikan formal atau 3,600 yuan/tahun untuk sertifikasi profesional',
  housingLoanExplain: 'Bunga Pinjaman Rumah: 1,000 yuan/bulan',
  housingRentExplain: 'Sewa Rumah: 1,500 yuan/bulan (kota tier 1), 1,100 yuan/bulan (kota tier 2), atau 800 yuan/bulan (kota lainnya)',
  elderlyExplain: 'Dukungan Orang Tua: 2,000 yuan/bulan untuk anak tunggal atau dibagi untuk anak lainnya',
  medicalExplain: 'Pengobatan Serius: Pengeluaran medis tahunan melebihi 15,000 yuan, maksimal 60,000 yuan/tahun',
  taxTipsTitle: 'Tips Perpajakan',
  taxTip1: 'Memanfaatkan pengurangan tambahan dapat mengurangi beban pajak',
  taxTip2: 'Bonus akhir tahun dapat dipilih untuk dihitung terpisah atau digabung dengan penghasilan tahunan',
  taxTip3: 'Jika memiliki penghasilan dari beberapa sumber, harus digabungkan untuk perhitungan pajak',
  taxTip4: 'Dana pensiun perusahaan dan asuransi kesehatan komersial juga dapat dikurangi dalam batas tertentu',
  taxTip5: 'Laporkan pengurangan tambahan dengan akurat untuk menghindari risiko pajak'
};