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
  },
  article: {
    title: "Memahami Analisis Kompleksitas Kode Secara Mendalam untuk Meningkatkan Kualitas Pengembangan Perangkat Lunak",
    overview: {
      title: "Apa itu Analisis Kompleksitas Kode?",
      content: "<strong>Analisis kompleksitas kode</strong> adalah alat profesional untuk memeriksa kode sumber dan mengukur kompleksitas strukturnya, kemampuan pemeliharaan, dan faktor risiko potensial. Alat pengembangan yang kuat ini membantu pengembang mengidentifikasi bagian kode yang terlalu kompleks yang mungkin rentan terhadap bug, sulit dipelihara atau dikembangkan.<br><br>Dengan menggunakan metrik yang sudah mapan seperti kompleksitas siklomatik, metrik Halstead, dan indeks pemeliharaan untuk mengukur kompleksitas, alat ini memberikan data objektif tentang kualitas kode, memungkinkan tim pengembangan membuat keputusan yang tepat tentang di mana pekerjaan refaktor harus difokuskan. Analisis kompleksitas kode adalah praktik dasar dalam pengembangan perangkat lunak modern yang mendukung manajemen utang teknis dan program peningkatan kualitas kode."
    },
    useCases: {
      title: "Kasus Penggunaan Umum Analisis Kompleksitas Kode",
      items: [
        {
          title: "Manajemen Utang Teknis",
          description: "Mengidentifikasi area kode kompleks yang berkontribusi pada utang teknis, memungkinkan tim memprioritaskan pekerjaan pengurangan utang dengan fokus pada bagian kode berisiko tinggi dan kompleks."
        },
        {
          title: "Peningkatan Review Kode",
          description: "Melengkapi review kode manual dengan metrik kompleksitas objektif, membantu reviewer menemukan area yang berpotensi bermasalah selama proses review yang memerlukan pemeriksaan tambahan."
        },
        {
          title: "Penentuan Prioritas Refaktor",
          description: "Menggunakan metrik kompleksitas untuk menentukan secara objektif bagian kode mana yang harus direfaktor terlebih dahulu, memastikan pekerjaan pemeliharaan ditargetkan pada area yang paling bermasalah."
        },
        {
          title: "Penerapan Quality Gate",
          description: "Menetapkan ambang batas kompleksitas dalam pipeline integrasi berkelanjutan untuk mencegah kode yang terlalu kompleks digabungkan ke repositori utama dan mempertahankan standar kualitas tinggi."
        },
        {
          title: "Alokasi Sumber Daya Pengujian",
          description: "Mengalokasikan lebih banyak sumber daya pengujian untuk bagian kode dengan kompleksitas tinggi yang secara statistik lebih mungkin mengandung bug, mengoptimalkan pekerjaan jaminan kualitas."
        },
        {
          title: "Onboarding Pengembang Baru",
          description: "Membantu anggota tim baru mengidentifikasi bagian sederhana dari basis kode untuk memulai, secara bertahap beralih ke bagian yang lebih kompleks seiring dengan meningkatnya keakraban mereka."
        },
        {
          title: "Evaluasi Kode Warisan",
          description: "Menilai kompleksitas sistem warisan untuk memperkirakan biaya pemeliharaan, upaya refaktor, atau risiko yang terlibat dalam mengubah kode lama."
        }
      ]
    },
    guide: {
      title: "Cara Menggunakan Analis Kompleksitas Kode",
      intro: "Ikuti langkah-langkah ini untuk menganalisis kompleksitas kode secara efektif dan menafsirkan hasilnya:",
      steps: [
        {
          title: "Siapkan Sampel Kode",
          description: "Pertama, tentukan kode JavaScript yang ingin Anda analisis. Anda dapat menggunakan file lengkap, atau fokus pada fungsi atau modul tertentu yang menarik. Kode yang bersih dan diformat dengan baik memberikan hasil analisis yang paling akurat."
        },
        {
          title: "Masukkan Kode Anda",
          description: "Tempelkan kode JavaScript Anda ke area input teks. Untuk kemudahan, jika Anda baru dalam analisis kompleksitas, Anda dapat menggunakan tombol \"Muat Contoh\" untuk melihat bagaimana analis menangani kode contoh."
        },
        {
          title: "Pilih Opsi Analisis",
          description: "Pilih metrik kompleksitas yang ingin dihitung dengan mencentang opsi yang sesuai: kompleksitas siklomatik mengukur kompleksitas jalur kode, metrik Halstead mengevaluasi volume dan kesulitan kode, indeks pemeliharaan memberikan skor kemampuan pemeliharaan keseluruhan, dan detail fungsi menampilkan metrik untuk setiap fungsi individu."
        },
        {
          title: "Analisis Kode Anda",
          description: "Klik tombol \"Analisis Kode\" untuk memproses input Anda. Alat ini akan mengurai kode JavaScript, menghitung metrik kompleksitas yang dipilih, dan menghasilkan laporan komprehensif."
        },
        {
          title: "Tinjau Ringkasan Keseluruhan",
          description: "Periksa bagian ringkasan yang memberikan gambaran tingkat tinggi tentang kompleksitas kode. Fokus pada kompleksitas siklomatik rata-rata, indeks pemeliharaan, dan metrik jumlah baris kode untuk memahami kesehatan keseluruhan kode Anda."
        },
        {
          title: "Periksa Detail Tingkat Fungsi",
          description: "Jika Anda memilih \"Tampilkan analisis tingkat fungsi\", lihat tabel yang menunjukkan metrik untuk setiap fungsi. Cari fungsi dengan skor kompleksitas tinggi (disorot dengan warna kuning atau merah) sebagai kandidat utama untuk refaktor."
        },
        {
          title: "Ekspor Hasil Jika Diperlukan",
          description: "Gunakan tombol \"Ekspor Laporan\" untuk mengunduh hasil analisis dalam format JSON untuk pemrosesan lebih lanjut, dokumentasi, atau berbagi dengan tim. Ini sangat berguna untuk melacak metrik kompleksitas dari waktu ke waktu."
        }
      ]
    },
    metrics: {
      title: "Memahami Metrik Kompleksitas Kode",
      intro: "Analisis kompleksitas kode menggunakan beberapa metrik yang sudah mapan untuk mengevaluasi berbagai aspek kualitas kode dan kemampuan pemeliharaan:",
      items: [
        {
          name: "Kompleksitas Siklomatik",
          description: "Mengukur jumlah jalur independen dalam kode sumber, pada dasarnya mengkuantifikasi kompleksitas pengambilan keputusan kode. Nilai yang lebih tinggi menunjukkan kode memiliki lebih banyak cabang, kondisi, dan jalur eksekusi potensial. Kode dengan kompleksitas siklomatik tinggi biasanya lebih sulit dipahami, diuji, dan dipelihara. Sebagian besar fungsi harus memiliki nilai target di bawah 10."
        },
        {
          name: "Metrik Halstead",
          description: "Serangkaian metrik yang mengukur ukuran dan upaya program berdasarkan jumlah operator dan operan dalam kode. Ini termasuk panjang program, kosakata, volume, kesulitan, upaya, dan perkiraan bug. Metrik Halstead memberikan wawasan tentang beban kognitif yang diperlukan untuk memahami kode. Nilai kesulitan dan volume yang lebih rendah biasanya menunjukkan kode yang lebih mudah dipelihara."
        },
        {
          name: "Indeks Pemeliharaan",
          description: "Metrik gabungan yang menggabungkan kompleksitas siklomatik, volume Halstead, dan baris kode untuk memberikan indikasi keseluruhan tentang kemampuan pemeliharaan kode. Skor berkisar dari 0 hingga 100, dengan nilai yang lebih tinggi menunjukkan kode yang lebih mudah dipelihara. Skor di atas 70 dianggap baik, sementara di bawah 20 menunjukkan kode mungkin sangat sulit untuk dipelihara."
        },
        {
          name: "Baris Kode (LOC)",
          description: "Metrik sederhana namun efektif untuk ukuran kode. Meskipun bukan metrik kompleksitas secara langsung, LOC sering berkorelasi dengan kompleksitas dan upaya pemeliharaan. Fungsi dengan terlalu banyak baris (biasanya lebih dari 100) mungkin mendapat manfaat dari pemecahan menjadi fungsi yang lebih kecil dan lebih fokus."
        },
        {
          name: "Jumlah Parameter",
          description: "Jumlah parameter yang diterima suatu fungsi. Fungsi dengan banyak parameter (biasanya lebih dari 4) mungkin sulit dipahami dan digunakan dengan benar, sering menunjukkan desain yang dapat ditingkatkan melalui refaktor atau penggunaan objek parameter."
        }
      ]
    },
    faq: {
      title: "Pertanyaan Umum tentang Analisis Kompleksitas Kode",
      items: [
        {
          question: "Mengapa analisis kompleksitas kode penting?",
          answer: "Analisis kompleksitas kode membantu mengidentifikasi kode bermasalah sebelum menyebabkan bug, masalah pemeliharaan, atau hambatan pengembangan. Penelitian menunjukkan bahwa kode kompleks secara signifikan lebih rentan terhadap kesalahan dan lebih mahal untuk dipelihara. Dengan mengidentifikasi dan mengurangi kompleksitas, tim dapat meningkatkan kualitas perangkat lunak, mengurangi biaya pemeliharaan, mempercepat pengembangan, serta meningkatkan produktivitas dan kepuasan pengembang."
        },
        {
          question: "Apa skor kompleksitas siklomatik yang baik?",
          answer: "Biasanya, fungsi dengan kompleksitas siklomatik di bawah 5 dianggap sederhana dan mudah dipelihara. Skor antara 6-10 adalah kompleksitas sedang yang masih dapat diterima. Skor di atas 10 dianggap kompleks dan mungkin memerlukan refaktor, sementara skor di atas 15 menunjukkan kode yang sangat kompleks yang harus diprioritaskan untuk disederhanakan. Organisasi yang berbeda dapat menetapkan ambang batas mereka sendiri berdasarkan standar kualitas mereka."
        },
        {
          question: "Apakah alat ini bekerja untuk bahasa selain JavaScript?",
          answer: "Implementasi saat ini secara khusus menganalisis kode JavaScript. Namun, metrik kompleksitas dasar dan prinsip-prinsipnya berlaku untuk sebagian besar bahasa pemrograman. Untuk menganalisis kode dalam bahasa lain, Anda memerlukan alat khusus untuk bahasa tersebut karena penguraian sintaks bersifat spesifik bahasa."
        },
        {
          question: "Seberapa akurat metrik kompleksitas ini?",
          answer: "Metrik ini memberikan pengukuran objektif berdasarkan prinsip-prinsip rekayasa perangkat lunak yang sudah mapan, tetapi tidak sempurna. Mereka sangat baik dalam mengukur kompleksitas struktural dan mengidentifikasi area masalah potensial, tetapi tidak menangkap semua aspek kualitas kode seperti desain arsitektur, kesesuaian domain, atau faktor keterbacaan seperti konvensi penamaan. Untuk penilaian kualitas yang komprehensif, gabungkan metrik kompleksitas dengan praktik lain seperti review kode dan analisis statis."
        },
        {
          question: "Bisakah saya mengintegrasikan analis ini ke dalam pipeline CI/CD saya?",
          answer: "Meskipun alat berbasis web ini dirancang untuk penggunaan interaktif, metrik kompleksitas yang sama dapat diimplementasikan dalam pipeline CI/CD menggunakan pustaka seperti 'complexity-report', 'eslint-plugin-complexity', atau 'SonarQube' untuk proyek JavaScript. Alat-alat ini dapat menegakkan ambang batas kompleksitas, mencegah penggabungan kode yang terlalu kompleks, dan memastikan pemantauan kualitas kode yang berkelanjutan."
        },
        {
          question: "Apa yang harus saya lakukan jika kode saya memiliki skor kompleksitas tinggi?",
          answer: "Skor kompleksitas tinggi menunjukkan bahwa kode mungkin perlu direfaktor. Pertimbangkan teknik-teknik berikut: memecah fungsi besar menjadi fungsi yang lebih kecil, mengurangi tingkat bersarang, menyederhanakan logika kondisional dengan klausa penjaga atau tabel pencarian, mengekstrak perhitungan kompleks ke fungsi pembantu khusus, menerapkan pola desain untuk menyederhanakan struktur, dan mengganti kode kompleks dengan fungsi pustaka jika sesuai. Fokuskan terlebih dahulu pada fungsi dengan kompleksitas tertinggi yang sering dimodifikasi."
        },
        {
          question: "Apakah skor kompleksitas yang lebih rendah selalu berarti kode yang lebih baik?",
          answer: "Tidak selalu. Meskipun kompleksitas yang lebih rendah biasanya terkait dengan kode yang lebih mudah dipelihara, mungkin ada pengecualian. Terkadang solusi yang sedikit lebih kompleks mungkin lebih efisien, lebih sesuai dengan kebutuhan domain, atau sebenarnya lebih mudah dibaca oleh ahli domain. Metrik kompleksitas harus menginformasikan keputusan Anda, bukan menentukannya. Seimbangkan pertimbangan kompleksitas dengan faktor lain seperti kinerja, kesesuaian domain, dan keakraban tim."
        }
      ]
    },
    optimization: {
      title: "Strategi Optimisasi Kode Berdasarkan Analisis Kompleksitas",
      intro: "Ketika analisis kompleksitas Anda mengungkap masalah, pertimbangkan teknik-teknik efektif ini untuk mengurangi kompleksitas dan meningkatkan kualitas kode:",
      tips: [
        "Memecah fungsi besar menjadi fungsi yang lebih kecil dan lebih fokus, masing-masing melakukan satu operasi logis",
        "Mengurangi tingkat bersarang dengan menggunakan pengembalian awal, klausa penjaga, atau mengekstrak kode bersarang dalam ke fungsi terpisah",
        "Menyederhanakan kondisi boolean yang kompleks dengan memecahnya menjadi variabel bernama atau fungsi yang menjelaskan tujuannya",
        "Mengganti pernyataan switch dan rantai if-else yang kompleks dengan pola strategi atau tabel pencarian",
        "Menggunakan teknik pemrograman fungsional seperti map, filter, dan reduce alih-alih loop kompleks dengan banyak kondisi",
        "Mengekstrak pola kode berulang ke dalam fungsi utilitas atau metode yang dapat digunakan kembali",
        "Menerapkan prinsip tanggung jawab tunggal untuk memastikan kelas dan fungsi hanya memiliki satu alasan untuk berubah",
        "Mengganti algoritma kustom yang kompleks dengan fungsi pustaka yang sudah teruji dengan baik jika sesuai",
        "Menyederhanakan kompleksitas antarmuka dengan menggunakan objek parameter alih-alih daftar parameter panjang",
        "Mendokumentasikan secara menyeluruh kode yang perlu kompleks, menjelaskan mengapa perlu kompleks",
        "Menambahkan pengujian menyeluruh untuk segmen kode kompleks untuk memastikan mereka bekerja seperti yang diharapkan dan memfasilitasi refaktor di masa depan",
        "Menetapkan ambang batas kompleksitas untuk tim Anda dan meninjau kode yang melebihi ambang batas ini sebelum penggabungan"
      ]
    }
  }
}