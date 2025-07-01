export default {
  name: 'Kalkulator BMI',
  description: 'Hitung Indeks Massa Tubuh (BMI) dan evaluasi kondisi berat badan Anda',
  
  // Teks antarmuka utama
  height: 'Tinggi badan',
  weight: 'Berat badan',
  calculate: 'Hitung BMI',
  reset: 'Reset',
  yourBmi: 'Nilai BMI Anda',
  bmiCategory: 'Kategori BMI',
  
  // Pilihan satuan
  unitSystem: 'Sistem pengukuran',
  metric: 'Metrik (cm/kg)',
  imperial: 'Imperial (kaki/pon)',
  cm: 'cm',
  ft: 'kaki',
  in: 'inci',
  kg: 'kg',
  lbs: 'pon',
  
  // Kategori BMI
  underweight: 'Kurus',
  normalWeight: 'Normal',
  overweight: 'Kelebihan berat badan',
  obesity: 'Obesitas',
  severeObesity: 'Obesitas parah',
  
  // Detail kategori
  underweightDesc: 'BMI di bawah 18.5',
  normalWeightDesc: 'BMI antara 18.5 sampai 24.9',
  overweightDesc: 'BMI antara 25 sampai 29.9',
  obesityDesc: 'BMI antara 30 sampai 34.9',
  severeObesityDesc: 'BMI 35 ke atas',
  
  // Deskripsi hasil
  resultPrefix: 'Nilai BMI Anda adalah',
  resultSuffix: ', menunjukkan Anda termasuk',
  
  // Bagian pengenalan alat
  aboutTitle: 'Tentang Kalkulator BMI',
  aboutDescription: 'BMI (Indeks Massa Tubuh) adalah indikator untuk menilai apakah proporsi berat badan terhadap tinggi badan seseorang sehat. Alat ini menghitung nilai BMI berdasarkan tinggi dan berat badan Anda, serta memberikan evaluasi kesehatan yang sesuai.',
  
  whatIsTitle: 'Apa itu BMI?',
  whatIsDescription: 'BMI (Body Mass Index) atau Indeks Massa Tubuh dihitung dengan membagi berat badan (kg) dengan kuadrat tinggi badan (m). Nilai BMI digunakan untuk menilai apakah seseorang berada dalam rentang berat badan sehat, dan merupakan standar internasional yang umum digunakan untuk mengukur tingkat kegemukan seseorang.',
  
  howToCalculateTitle: 'Metode Perhitungan BMI',
  metricFormula: 'Rumus metrik: BMI = berat badan(kg) / tinggi badan(m)²',
  imperialFormula: 'Rumus imperial: BMI = berat badan(pon) × 703 / tinggi badan(inci)²',
  
  interpretationTitle: 'Interpretasi Nilai BMI',
  interpretationDesc: 'Klasifikasi status berat badan berdasarkan nilai BMI adalah sebagai berikut:',
  
  limitationsTitle: 'Keterbatasan BMI',
  limitation1: 'BMI tidak mempertimbangkan perbedaan persentase lemak tubuh, massa otot, dan massa tulang',
  limitation2: 'Tidak berlaku untuk menilai status berat badan atlet, wanita hamil, dan anak-anak',
  limitation3: 'Tidak mencerminkan distribusi lemak dalam tubuh',
  limitation4: 'Tidak mempertimbangkan perbedaan ras, usia, dan jenis kelamin',
  
  tipsTitle: 'Tips Berat Badan Sehat',
  tip1: 'Pertahankan pola makan seimbang dengan asupan protein, sayuran, dan biji-bijian yang cukup',
  tip2: 'Lakukan latihan aerobik intensitas sedang minimal 150 menit per minggu',
  tip3: 'Hindari duduk terlalu lama, tingkatkan aktivitas fisik sehari-hari',
  tip4: 'Cukupi tidur dan asupan air',
  tip5: 'Jika nilai BMI tidak normal, disarankan untuk berkonsultasi dengan dokter atau ahli gizi',
  
  // Tambahkan baris ini
  emptyStateMessage: 'Masukkan tinggi dan berat badan Anda, lalu klik tombol "Hitung BMI"'
};