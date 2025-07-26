export default {
  name: 'Analis Kompleksitas Kode',
  description: 'Menganalisis metrik kompleksitas kode seperti kompleksitas siklomatik dan kemampuan pemeliharaan',
  title: 'Analisis Kompleksitas Kode',
  subtitle: 'Menganalisis berbagai metrik kompleksitas kode JavaScript termasuk kompleksitas siklomatik, metrik Halstead, dan indeks pemeliharaan',

  input: {
    title: 'Masukkan Kode JavaScript',
    placeholder: 'Tempelkan kode JavaScript di sini...',
    loadExample: 'Muat Contoh',
    clear: 'Hapus'
  },

  options: {
    title: 'Opsi Analisis',
    cyclomaticComplexity: 'Hitung kompleksitas siklomatik (Kompleksitas McCabe)',
    halsteadMetrics: 'Hitung metrik Halstead (panjang program, kosakata, volume, dll)',
    maintainabilityIndex: 'Hitung indeks pemeliharaan (indikator kemampuan pemeliharaan kode)',
    functionDetails: 'Tampilkan hasil analisis tingkat fungsi'
  },

  languages: {
    title: 'Bahasa',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    python: 'Python',
    java: 'Java',
    csharp: 'C#',
    php: 'PHP',
    go: 'Go',
    ruby: 'Ruby'
  },

  metrics: {
    title: 'Metrik',
    cyclomaticComplexity: 'Kompleksitas Siklomatik',
    maintainabilityIndex: 'Indeks Pemeliharaan',
    halsteadVolume: 'Volume Halstead',
    halsteadDifficulty: 'Tingkat Kesulitan Halstead',
    halsteadEffort: 'Upaya Halstead',
    halsteadTime: 'Waktu Halstead',
    halsteadBugs: 'Bug Halstead',
    linesOfCode: 'Jumlah Baris Kode',
    logicalLoc: 'Baris Kode Logis',
    commentLines: 'Jumlah Baris Komentar',
    commentRatio: 'Rasio Komentar',
    operatorCount: 'Jumlah Operator',
    operandCount: 'Jumlah Operan',
    functionCount: 'Jumlah Fungsi',
    maxNestingDepth: 'Kedalaman Bersarang Maksimum',
    averageDepth: 'Kedalaman Rata-rata',
    halstead: {
      title: 'Metrik Halstead',
      length: 'Panjang Program',
      vocabulary: 'Kosakata',
      volume: 'Volume Program',
      difficulty: 'Tingkat Kesulitan'
    }
  },

  results: {
    title: 'Hasil Analisis',
    file: 'File',
    method: 'Metode',
    score: 'Skor',
    complexity: 'Kompleksitas',
    rating: 'Peringkat',
    loc: 'Baris',
    issues: 'Masalah',
    summary: 'Ringkasan Kode Keseluruhan',
    details: 'Detail',
    noResults: 'Belum ada hasil analisis. Masukkan kode dan klik "Analisis Kode" untuk melihat metrik.',
    avgCyclomaticComplexity: 'Kompleksitas Siklomatik Rata-rata',
    maintainabilityIndex: 'Indeks Pemeliharaan',
    linesOfCode: 'Jumlah Baris Kode',
    functionDetails: 'Analisis Tingkat Fungsi',
    functionName: 'Nama Fungsi',
    parameters: 'Jumlah Parameter',
    anonymousFunction: '(Fungsi Anonim)'
  },

  ratings: {
    excellent: 'Sangat Baik',
    good: 'Baik',
    moderate: 'Sedang',
    poor: 'Buruk',
    veryPoor: 'Sangat Buruk'
  },

  complexity: {
    title: 'Penjelasan Indikator Kompleksitas:',
    low: 'Kompleksitas Rendah - Kode sederhana dan jelas, mudah dipahami dan dipelihara',
    medium: 'Kompleksitas Sedang - Kode agak kompleks tetapi masih dapat diterima',
    high: 'Kompleksitas Tinggi - Kode terlalu kompleks, pertimbangkan untuk melakukan refaktor'
  },

  actions: {
    analyze: 'Analisis Kode',
    analyzing: 'Menganalisis...',
    clearCode: 'Hapus Kode',
    uploadFile: 'Unggah File',
    copy: 'Salin Hasil',
    download: 'Unduh Laporan',
    export: 'Ekspor Laporan (JSON)'
  },

  messages: {
    analyzing: 'Menganalisis kode...',
    analysisComplete: 'Analisis Selesai',
    analysisError: 'Terjadi kesalahan saat menganalisis kode',
    analysisFailure: 'Tidak dapat menganalisis kode: {error}',
    copied: 'Tersalin ke clipboard!',
    emptyCode: 'Masukkan kode yang akan dianalisis',
    fileTooBig: 'File terlalu besar (maksimal 1MB)',
    invalidFile: 'Jenis file tidak valid atau tidak didukung',
    errorTitle: 'Kesalahan Analisis'
  },

  tips: {
    title: 'Tips Penggunaan',
    cyclomaticComplexity: 'Kompleksitas siklomatik adalah ukuran jumlah jalur independen dalam kode sumber.',
    maintainability: 'Indeks pemeliharaan menunjukkan kemampuan pemeliharaan kode, semakin tinggi semakin baik.',
    recommendations: 'Untuk kualitas kode yang lebih baik, usahakan untuk menjaga kompleksitas rendah dan skor pemeliharaan tinggi.',
    refactoring: 'Pertimbangkan untuk melakukan refaktor pada fungsi dengan skor kompleksitas di atas 10.'
  }
};