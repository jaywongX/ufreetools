export default {
  name: 'Timer Pomodoro',
  description: 'Tingkatkan produktivitas dan fokus dengan teknik Pomodoro',
  
  // Teks antarmuka utama
  start: 'Mulai',
  pause: 'Jeda',
  reset: 'Atur Ulang',
  skip: 'Lewati',
  work: 'Kerja',
  shortBreak: 'Istirahat Pendek',
  longBreak: 'Istirahat Panjang',
  settings: 'Pengaturan',
  stats: 'Statistik',
  
  // Pengaturan
  settingsTitle: 'Pengaturan Timer',
  workDuration: 'Durasi Kerja',
  shortBreakDuration: 'Durasi Istirahat Pendek',
  longBreakDuration: 'Durasi Istirahat Panjang',
  cyclesBeforeLongBreak: 'Siklus Kerja Sebelum Istirahat Panjang',
  enableSound: 'Aktifkan Suara Notifikasi',
  autoStartBreaks: 'Mulai Istirahat Otomatis',
  autoStartWork: 'Mulai Kerja Otomatis',
  minutes: 'menit',
  saveSettings: 'Simpan Pengaturan',
  resetDefaults: 'Kembalikan ke Default',
  
  // Statistik
  statsTitle: 'Statistik Hari Ini',
  completedPomodoros: 'Pomodoro Selesai',
  totalWorkTime: 'Total Waktu Kerja',
  averageDailyPomodoros: 'Rata-rata Pomodoro Harian',
  currentStreak: 'Streak Hari Kerja Beruntun',
  
  // Pesan status
  workStarted: 'Mulai bekerja! Fokus pada tugas saat ini.',
  shortBreakStarted: 'Mulai istirahat pendek. Santai sebentar!',
  longBreakStarted: 'Mulai istirahat panjang. Istirahat yang nyaman!',
  pausedMessage: 'Timer dijeda',
  resetMessage: 'Timer diatur ulang',
  workCompleted: 'Sesi kerja selesai!',
  breakCompleted: 'Waktu istirahat habis!',
  
  // Pengenalan alat
  aboutTitle: 'Tentang Teknik Pomodoro',
  aboutDescription: 'Teknik Pomodoro adalah metode manajemen waktu yang dikembangkan oleh Francesco Cirillo pada akhir 1980-an. Teknik ini menggunakan timer untuk membagi pekerjaan menjadi interval waktu, biasanya 25 menit, diselingi dengan istirahat singkat. Interval ini disebut "pomodoro", berasal dari timer dapur berbentuk tomat yang digunakan Cirillo.',
  
  howToUseTitle: 'Cara Menggunakan',
  howToUseStep1: '1. Tentukan tugas yang akan diselesaikan',
  howToUseStep2: '2. Atur timer Pomodoro ke 25 menit (dapat disesuaikan di pengaturan)',
  howToUseStep3: '3. Bekerja dengan fokus sampai timer berbunyi',
  howToUseStep4: '4. Ambil istirahat singkat 5 menit',
  howToUseStep5: '5. Setelah 4 Pomodoro, ambil istirahat lebih panjang 15-30 menit',
  
  benefitsTitle: 'Manfaat Teknik Pomodoro',
  benefit1: 'Meningkatkan perhatian dan konsentrasi',
  benefit2: 'Mengurangi gangguan dan penundaan',
  benefit3: 'Meningkatkan motivasi dan daya tahan kerja',
  benefit4: 'Memperbaiki keseimbangan kerja dan istirahat',
  benefit5: 'Mengurangi kelelahan mental',
  
  tipsTitle: 'Tips Penggunaan',
  tip1: 'Pilih lingkungan yang tenang untuk mengurangi gangguan',
  tip2: 'Gunakan waktu istirahat untuk benar-benar menjauh dari pekerjaan',
  tip3: 'Pertahankan durasi Pomodoro yang konsisten untuk membentuk kebiasaan',
  tip4: 'Gunakan alat ini untuk merekam dan menganalisis pola kerja Anda',
  tip5: 'Gabungkan dengan daftar tugas, fokus pada satu tugas per Pomodoro',
  
  // Konten artikel
  article: {
    title: 'Timer Pomodoro: Maksimalkan Produktivitas dengan Manajemen Waktu',
    features: {
      title: 'Fitur dan Skenario Penggunaan',
      description: '<strong>Timer Pomodoro</strong> adalah alat produktivitas berbasis teknik Pomodoro terkenal yang dikembangkan oleh Francesco Cirillo. Teknik ini membagi pekerjaan menjadi interval fokus (biasanya 25 menit, disebut "pomodoro") dengan istirahat singkat di antaranya. Aplikasi Pomodoro kami meningkatkan metode ini dengan durasi kerja yang dapat disesuaikan, notifikasi suara, transisi sesi otomatis, dan statistik produktivitas terperinci.',
      useCasesTitle: 'Skenario Penggunaan Praktis',
      useCases: {
        items: [
          '<strong>Sesi Belajar Fokus</strong>: Siswa dapat menggunakan timer Pomodoro untuk mempertahankan fokus saat belajar, mencegah kelelahan sekaligus memaksimalkan retensi informasi dan efisiensi belajar.',
          '<strong>Kerja Mendalam untuk Profesional</strong>: Pekerja pengetahuan dapat memanfaatkan interval waktu kerja untuk tugas kompleks seperti pemrograman, penulisan, atau analisis data, meningkatkan kualitas dan kuantitas output secara signifikan.',
          '<strong>Mengatasi Prokrastinasi</strong>: Timer membantu memecah tugas yang menakutkan menjadi bagian-bagian kecil yang lebih mudah dikelola, memudahkan untuk memulai dan mempertahankan motivasi pada proyek yang menantang.',
          '<strong>Manajemen Kerja Jarak Jauh</strong>: Pekerja remote dapat menetapkan batasan jelas antara waktu kerja fokus dan istirahat, membantu menjaga produktivitas di lingkungan yang rentan gangguan.',
          '<strong>Pembuatan Konten</strong>: Penulis, seniman, dan kreator dapat menggunakan sesi waktu untuk menyeimbangkan output kreatif dengan istirahat yang diperlukan, mencegah kelelahan kreatif dan menjaga inspirasi.',
          '<strong>Kontrol Pergantian Tugas</strong>: Profesional yang menangani berbagai tanggung jawab dapat mengalokasikan Pomodoro spesifik untuk proyek berbeda, memastikan kemajuan seimbang di berbagai alur kerja.'
        ]
      }
    },
    faq: {
      title: 'Pertanyaan Umum',
      items: [
        {
          question: 'Apa dasar ilmiah di balik teknik Pomodoro?',
          answer: 'Teknik Pomodoro memanfaatkan beberapa prinsip psikologi: kemampuan otak untuk mempertahankan fokus dalam periode terbatas (biasanya 25-45 menit), pentingnya istirahat teratur untuk mencegah kelelahan mental, dan manfaat motivasi dari batasan waktu. Penelitian psikologi kognitif mendukung bahwa bergantian antara kerja fokus dan istirahat singkat mengoptimalkan kinerja mental dan mengurangi konsumsi sumber daya kognitif. Teknik ini juga memanfaatkan Efek Zeigarnik - kecenderungan orang untuk lebih mengingat tugas yang belum selesai daripada yang sudah selesai - dengan menyediakan metode terstruktur untuk penyelesaian tugas.'
        },
        {
          question: 'Bagaimana cara menyesuaikan durasi Pomodoro untuk berbagai jenis pekerjaan?',
          answer: 'Berbagai tugas mendapat manfaat dari <strong>interval Pomodoro</strong> yang disesuaikan:<br>- <strong>Pekerjaan analitis kompleks</strong> (pemrograman, penulisan, penelitian): Pertimbangkan Pomodoro lebih panjang 30-45 menit untuk mengakomodasi pemikiran mendalam.<br>- <strong>Tugas administratif atau rutin</strong>: Interval standar 25 menit biasanya bekerja dengan baik.<br>- <strong>Pekerjaan kreatif</strong>: Beberapa orang mungkin mendapat manfaat dari sesi lebih pendek (15-20 menit) untuk menjaga kesegaran kreatif, atau sesi lebih panjang (hingga 50 menit) saat dalam keadaan flow.<br>- <strong>Mempelajari materi baru</strong>: Sesi lebih pendek (15-20 menit) sering membantu retensi informasi.<br>Kuncinya adalah bereksperimen - sesuaikan pengaturan <strong>timer Pomodoro</strong> Anda berdasarkan tingkat energi, kompleksitas tugas, dan saat Anda melihat pengembalian yang berkurang.'
        },
        {
          question: 'Apakah teknik Pomodoro dapat membantu orang dengan ADHD atau kesulitan fokus?',
          answer: 'Ya, banyak orang dengan ADHD atau gangguan perhatian menemukan <strong>teknik Pomodoro</strong> sangat bermanfaat. Blok waktu terstruktur menciptakan motivasi eksternal dan batasan yang jelas, sementara istirahat sering mengakomodasi rentang perhatian yang lebih pendek. Teknik ini membantu membangun "otot fokus" secara bertahap dan menyediakan kerangka kerja untuk mengelola gangguan. Beberapa modifikasi yang membantu termasuk: menggunakan interval kerja lebih pendek awalnya (15-20 menit), melakukan aktivitas fisik selama istirahat, menggunakan timer visual, dan menggabungkan daftar tugas tertulis. Banyak pelatih ADHD dan ahli merekomendasikan teknik kerja waktu seperti <strong>timer Pomodoro</strong> sebagai bagian dari strategi produktivitas yang komprehensif.'
        },
        {
          question: 'Bagaimana menangani interupsi selama sesi Pomodoro?',
          answer: 'Interupsi tidak dapat dihindari, tetapi dapat dikelola dengan strategi <strong>timer Pomodoro</strong> ini:<br>1. <strong>Interupsi internal</strong> (pikiran Anda sendiri): Catat dengan cepat di kertas, lalu kembali ke tugas.<br>2. <strong>Interupsi eksternal</strong> (rekan kerja, notifikasi): Pilih:<br>- <strong>Beri tahu-Negosiasi-Jadwalkan</strong>: Beri tahu mereka Anda dalam sesi fokus, negosiasi waktu untuk menangani kebutuhan mereka, dan jadwalkan.<br>- <strong>Aturan lima menit</strong>: Jika interupsi tidak lebih dari 5 menit, pertimbangkan untuk menanganinya segera, lalu mulai ulang Pomodoro Anda.<br>3. <strong>Interupsi darurat</strong>: Untuk keadaan darurat nyata, hentikan timer, tangani situasi, lalu mulai Pomodoro baru.<br>Ingat, Pomodoro tidak dapat dibagi - jika ada interupsi substansial, lebih baik mengabaikan sesi itu dan memulai yang baru daripada menjeda timer.'
        },
        {
          question: 'Bagaimana melacak dan meningkatkan produktivitas saya dengan teknik Pomodoro?',
          answer: 'Aplikasi <strong>timer Pomodoro</strong> kami mencakup fitur pelacakan statistik bawaan untuk mengukur kemajuan produktivitas Anda. Untuk memaksimalkan manfaat:<br>1. <strong>Tetapkan target Pomodoro harian</strong>: Mulailah dengan target realistis (misalnya 6-8 Pomodoro), lalu tingkatkan secara bertahap.<br>2. <strong>Lacak tingkat penyelesaian</strong>: Pantau berapa banyak Pomodoro yang direncanakan benar-benar selesai.<br>3. <strong>Analisis pola interupsi</strong>: Catat apa yang biasanya mengganggu fokus Anda, dan kembangkan strategi mitigasi.<br>4. <strong>Tinjau tren produktivitas</strong>: Fitur statistik aplikasi menunjukkan jumlah Pomodoro harian dan mingguan Anda, membantu mengidentifikasi hari dan waktu paling produktif.<br>5. <strong>Eksperimen dengan durasi berbeda</strong>: Uji panjang kerja/istirahat berbeda untuk menemukan siklus fokus optimal Anda.<br>6. <strong>Rayakan streak</strong>: Penghitung hari beruntun mendorong pembentukan kebiasaan Pomodoro yang konsisten.<br>Pendekatan berbasis data ini membantu menyempurnakan metode manajemen waktu Anda untuk mencapai produktivitas tertinggi.'
        }
      ]
    },
    guide: {
      title: 'Panduan Menggunakan Timer Pomodoro',
      step1: {
        title: 'Atur Timer Anda',
        description: 'Pertama, sesuaikan <strong>timer Pomodoro</strong> sesuai preferensi pribadi. Di panel pengaturan (kiri), sesuaikan durasi kerja (tradisional 25 menit), durasi istirahat pendek (biasanya 5 menit), durasi istirahat panjang (15-30 menit), dan jumlah siklus sebelum istirahat panjang (biasanya 4). Anda juga dapat mengaktifkan notifikasi suara dan transisi otomatis antara kerja dan istirahat. Klik "Simpan Pengaturan" untuk menerapkan preferensi Anda. Penyesuaian ini memastikan timer sesuai dengan pola perhatian dan kebutuhan kerja pribadi Anda.'
      },
      step2: {
        title: 'Rencanakan Tugas Anda',
        description: 'Sebelum memulai timer, identifikasi dan prioritaskan tugas spesifik yang akan Anda kerjakan selama sesi Pomodoro. Untuk hasil terbaik, pecah proyek besar menjadi item yang lebih kecil dan dapat ditindaklanjuti yang dapat diselesaikan atau dikerjakan dalam satu Pomodoro. Memiliki daftar tugas yang jelas mencegah pemborosan waktu berharga untuk memutuskan apa yang harus dilakukan selanjutnya selama waktu fokus. <strong>Teknik Pomodoro</strong> bekerja paling baik ketika dikombinasikan dengan perencanaan tugas yang matang.'
      },
      step3: {
        title: 'Mulai Sesi Kerja',
        description: 'Pilih mode "Kerja" (jika belum dipilih) dan klik tombol "Mulai" untuk memulai timer kerja. Berkomitmen untuk fokus pada tugas yang direncanakan sampai timer selesai. Layar digital besar menampilkan waktu tersisa. Selama periode ini, hilangkan semua potensi gangguan - matikan notifikasi, tutup tab yang tidak relevan, dan jika mungkin, beri tahu rekan kerja bahwa Anda sedang dalam sesi fokus. <strong>Timer Pomodoro</strong> menciptakan wadah psikologis untuk kerja mendalam, jadi hormati waktu ini dengan perhatian penuh Anda.'
      },
      step4: {
        title: 'Istirahat di Antara Sesi',
        description: 'Ketika interval kerja Anda berakhir, timer akan memberi tahu Anda (jika suara diaktifkan) dan secara otomatis beralih ke periode istirahat. Istirahat pendek (biasanya 5 menit) mengikuti sebagian besar sesi kerja, dengan istirahat lebih panjang (15-30 menit) setelah menyelesaikan sejumlah Pomodoro. Selama istirahat, jauhkan diri dari pekerjaan - regangkan, berjalan-jalan, istirahatkan mata, minum air, atau lakukan latihan mindfulness singkat. Hindari memeriksa email atau media sosial selama istirahat pendek, karena aktivitas ini dapat dengan mudah melebihi waktu yang dialokasikan. <strong>Sistem Pomodoro</strong> bergantung pada istirahat yang tepat untuk mempertahankan kesegaran kognitif dan mencegah kelelahan.'
      },
      step5: {
        title: 'Lacak Kemajuan Anda',
        description: '<strong>Timer Pomodoro</strong> secara otomatis mencatat sesi yang Anda selesaikan di panel statistik (kanan). Di sini Anda dapat memantau jumlah Pomodoro harian, total waktu kerja, rata-rata harian, dan streak hari kerja beruntun saat ini. Gunakan metrik ini untuk memahami pola produktivitas Anda, menetapkan tujuan peningkatan, dan tetap termotivasi dengan kemajuan yang terlihat. Seiring waktu, data ini akan membantu Anda mengoptimalkan kebiasaan kerja dan menyempurnakan metode manajemen waktu untuk mencapai efisiensi dan kualitas output maksimal.'
      }
    },
    conclusion: '<strong>Timer Pomodoro</strong> mengubah cara Anda bekerja dengan menyusun waktu Anda ke dalam interval fokus dan istirahat yang optimal. Dengan menerapkan metode manajemen waktu yang didukung sains ini, Anda mungkin akan mengalami fokus yang lebih baik, penundaan yang berkurang, output kerja yang lebih tinggi, dan kelelahan mental yang berkurang. Teknik ini sangat fleksibel dan serbaguna, bermanfaat bagi siswa, profesional, pekerja kreatif, dan siapa pun yang ingin meningkatkan produktivitas sambil menjaga kesehatan. Saat Anda terus menggunakan teknik Pomodoro, Anda akan mengembangkan kesadaran yang lebih besar tentang bagaimana memanfaatkan waktu dan membangun kemampuan fokus yang lebih kuat yang dapat ditransfer ke berbagai bidang kehidupan.'
  }
};