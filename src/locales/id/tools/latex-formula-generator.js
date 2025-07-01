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
  errorMessage: 'Periksa sintaks LaTeX Anda',
  
  article: {
    title: "Panduan Lengkap Generator Formula LaTeX - Buat Persamaan Matematika yang Indah",
    intro: {
      title: "Mengenal Kekuatan Pembuatan Formula LaTeX",
      p1: "<b>Generator Formula LaTeX</b> adalah alat penting untuk membuat persamaan dan formula matematika profesional dalam makalah akademik, materi pendidikan, dan dokumen teknis. Berbeda dengan editor teks standar, generator LaTeX kami merender ekspresi matematika kompleks dengan presisi, dengan penyelarasan simbol, spasi, dan format yang mengikuti standar tata letak yang ditetapkan dalam publikasi ilmiah. Alat online ini tidak memerlukan instalasi perangkat lunak khusus atau pembelajaran pemrograman LaTeX yang kompleks, memungkinkan pembuatan formula berkualitas publikasi melalui antarmuka yang sederhana dan intuitif, langsung mengubah kode LaTeX menjadi persamaan yang terlihat indah.",
      p2: "<b>Simbol Matematika LaTeX</b> telah menjadi standar emas dalam persiapan dokumen ilmiah dan matematika sejak dikembangkan oleh Donald Knuth pada tahun 1970-an. Generator Formula LaTeX membawa sistem tata letak yang kuat ini kepada semua orang, terlepas dari latar belakang teknis mereka, memungkinkan siswa, guru, peneliti, dan profesional untuk menghasilkan persamaan yang sempurna secara visual untuk makalah, laporan penelitian, materi pengajaran, atau presentasi. Alat ini menangani segala hal mulai dari ekspresi aljabar dasar hingga kalkulus tingkat tinggi, matriks, dan formula statistik, mempertahankan gaya yang konsisten dan penampilan profesional di semua konten matematika.",
      p3: "<b>Rendering formula real-time</b> adalah salah satu keunggulan utama generator LaTeX kami, memungkinkan Anda memvisualisasikan persamaan Anda saat mengetik. Umpan balik instan ini memudahkan pembelajaran sintaks LaTeX dan mempercepat proses pembuatan persamaan. Selain itu, kemampuan mengekspor formula sebagai gambar resolusi tinggi memudahkan integrasinya ke dalam dokumen, presentasi, atau halaman web apa pun tanpa masalah kompatibilitas. Dengan opsi tampilan yang dapat disesuaikan seperti ukuran font, skema warna, dan mode tampilan, Generator Formula LaTeX menyesuaikan dengan kebutuhan spesifik Anda sambil mempertahankan presisi dan keanggunan yang membuat LaTeX menjadi pilihan utama untuk dokumen matematika."
    },
    useCases: {
      title: "Aplikasi Praktis Generator Formula LaTeX",
      case1: "<h3>Penelitian Akademik dan Publikasi Ilmiah</h3><p><b>Pembuatan Formula LaTeX</b> sangat penting bagi peneliti yang mempersiapkan makalah untuk jurnal ilmiah dan konferensi. Disiplin akademik seperti fisika, matematika, teknik, dan ilmu komputer memerlukan representasi persamaan kompleks yang hanya dapat disediakan oleh LaTeX. Generator kami membantu peneliti dengan mudah membuat persamaan untuk mekanika kuantum, model statistik, analisis kompleksitas algoritma, dan bukti teoretis tanpa harus berjuang dengan kurva pembelajaran LaTeX yang curam. Dengan menghasilkan simbol matematika berkualitas tinggi yang memenuhi standar publikasi, peneliti dapat fokus pada konten mereka, bukan tantangan pemformatan. Misalnya, mahasiswa doktoral fisika teoretis dapat dengan cepat menghasilkan persamaan Schrödinger, kalkulus tensor, atau formula relativitas tanpa harus menghafal banyak perintah LaTeX, memastikan makalah mereka selalu mempertahankan kualitas profesional.</p>",
      case2: "<h3>Materi Pendidikan dan Kursus Online</h3><p><b>Pendidik matematika dan pembuat kursus online</b> mengandalkan Generator Formula LaTeX untuk mengembangkan materi pengajaran yang jelas dan konsisten. Guru yang mempersiapkan rencana pelajaran, lembar kerja, penilaian, atau sumber belajar digital membutuhkan cara yang andal untuk menyajikan konsep matematika dengan simbol yang tepat. Alat kami memungkinkan pendidik membuat masalah aljabar, bukti geometri, demonstrasi kalkulus, dan contoh statistik yang profesional, yang dirender dengan benar di berbagai perangkat dan platform. Ini sangat berharga untuk mengembangkan kursus online, di mana konten matematika harus ditampilkan dengan benar dalam sistem manajemen pembelajaran. Misalnya, guru kalkulus dapat menghasilkan formula integral, persamaan diferensial, dan ekspresi limit yang terlihat persis seperti di papan tulis kelas, meningkatkan pemahaman siswa melalui kejelasan visual dan presisi matematika.</p>",
      case3: "<h3>Dokumen Teknis dan Spesifikasi Teknik</h3><p><b>Insinyur dan penulis teknis</b> memanfaatkan pembuatan formula LaTeX untuk membuat dokumen yang mencakup ekspresi matematika, konstanta fisik, dan simbol ilmiah yang tepat. Industri seperti dirgantara, elektronik, telekomunikasi, dan pengembangan perangkat lunak memerlukan dokumen yang mengandung formula kompleks yang harus disajikan secara akurat untuk spesifikasi, manual pengguna, dan laporan teknis. Generator LaTeX kami menyederhanakan proses ini dengan memungkinkan insinyur membuat persamaan untuk algoritma pemrosesan sinyal, sistem kontrol, perhitungan medan elektromagnetik, atau algoritma perangkat lunak tanpa keahlian LaTeX yang luas. Misalnya, insinyur telekomunikasi dapat secara efisien menghasilkan persamaan Maxwell atau rumus transformasi Fourier untuk dokumen spesifikasi teknis, memastikan konsep matematika dikomunikasikan dengan jelas dan akurat kepada tim manufaktur atau badan pengatur.</p>",
      case4: "<h3>Ilmu Data dan Laporan Analisis Statistik</h3><p><b>Ilmuwan data dan statistikawan</b> mengandalkan Generator Formula LaTeX saat mempersiapkan laporan yang memerlukan representasi simbol matematika yang kompleks untuk metode statistik, algoritma pembelajaran mesin, dan model probabilitas. Presentasi analisis data profesional sering kali mencakup formula kompleks untuk model regresi, pengujian hipotesis, distribusi probabilitas, dan kompleksitas algoritma. Alat kami membantu profesional data membuat persamaan yang konsisten secara visual untuk interval kepercayaan, uji signifikansi, inferensi Bayesian, atau arsitektur jaringan saraf, meningkatkan kredibilitas dan keterbacaan temuan mereka. Misalnya, analis riset pasar dapat menggunakan generator LaTeX kami untuk memformat formula statistik kompleks dengan benar dalam laporan klien, membuat metode yang kompleks lebih mudah dipahami oleh pemangku kepentingan non-teknis sambil mempertahankan presisi matematika.</p>",
      case5: "<h3>Materi Pembelajaran Interaktif dan Teknologi Pendidikan</h3><p><b>Pengembang teknologi pendidikan</b> mengintegrasikan Generator Formula LaTeX ke dalam aplikasi pembelajaran interaktif untuk menampilkan konten matematika secara dinamis. Situs web pendidikan berfokus matematika, aplikasi pembelajaran seluler, dan buku teks interaktif memerlukan persamaan yang dirender dengan benar di berbagai jenis perangkat dan ukuran layar. Formula yang dihasilkan oleh generator LaTeX kami dapat diekspor sebagai gambar atau dirender langsung dalam aplikasi web, memastikan tampilan yang konsisten terlepas dari perangkat atau browser pengguna. Misalnya, pengembang aplikasi pembelajaran aljabar dapat menggunakan alat kami untuk menghasilkan formula yang ditampilkan dengan benar di smartphone dan tablet, membuat latihan pemecahan masalah interaktif dengan simbol matematika yang diformat dengan benar, meningkatkan pengalaman belajar melalui kejelasan visual dan presisi matematika.</p>"
    },
    tutorial: {
      title: "Cara Membuat Formula Matematika Sempurna dengan Generator LaTeX",
      intro: "Ikuti langkah-langkah ini untuk menggunakan alat Generator Formula LaTeX kami untuk membuat formula matematika profesional:",
      step1: {
        title: "Langkah 1: Masukkan Kode LaTeX Anda",
        description: "Pertama, masukkan ekspresi matematika LaTeX Anda di kotak input di sisi kiri layar. Jika Anda baru mengenal sintaks LaTeX, Anda dapat memulai dengan contoh kami dengan mengklik tombol di bawah area pratinjau. Untuk operasi matematika dasar, gunakan operator standar seperti <code>+</code>, <code>-</code>, <code>*</code>, dan <code>/</code>. Untuk pecahan, gunakan struktur <code>\\frac{pembilang}{penyebut}</code>. Superskrip dibuat dengan tanda sisipan <code>^</code>, dan subskrip dengan garis bawah <code>_</code>. Misalnya, untuk membuat rumus persamaan kuadrat, Anda perlu memasukkan: <code>\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}</code>. Alat akan merender formula Anda secara real-time saat Anda mengetik, memberi Anda umpan balik visual instan."
      },
      step2: {
        title: "Langkah 2: Sesuaikan Tampilan Formula",
        description: "Setelah memasukkan kode LaTeX, Anda dapat menyesuaikan tampilan formula menggunakan panel pengaturan. Sesuaikan slider ukuran font untuk membuat formula lebih besar atau lebih kecil sesuai kebutuhan Anda. Gunakan pemilih warna untuk mengubah warna teks dan latar belakang formula. Ini sangat berguna ketika Anda perlu mencocokkan tampilan formula dengan gaya dokumen atau tema presentasi yang ada. Selanjutnya, pilih mode tampilan yang Anda sukai. Mode inline (default) cocok untuk formula yang muncul dalam teks, sedangkan mode blok membuat persamaan independen yang terpusat dengan spasi lebih besar, ideal untuk formula penting yang perlu ditekankan."
      },
      step3: {
        title: "Langkah 3: Pratinjau dan Sempurnakan Formula Anda",
        description: "Periksa formula Anda di area pratinjau di sisi kanan layar. Identifikasi kesalahan atau masalah format yang perlu diselesaikan. Jika Anda melihat masalah, kembali ke kotak input untuk menyempurnakan kode LaTeX Anda. Masalah umum termasuk kurung kurawal yang hilang, pembatas yang tidak cocok, atau sintaks perintah yang tidak benar. Jika Anda melihat pesan kesalahan di bawah formula, pesan tersebut biasanya memberikan informasi berguna tentang apa yang salah. Manfaatkan rendering real-time untuk perbaikan iteratif sampai formula Anda terlihat persis seperti yang Anda inginkan. Untuk formula kompleks, pertimbangkan untuk membangunnya secara bertahap, memeriksa pratinjau setelah setiap penambahan baru untuk lebih mudah mengidentifikasi dan memperbaiki masalah apa pun."
      },
      step4: {
        title: "Langkah 4: Ekspor atau Salin Formula Anda",
        description: "Setelah puas dengan formula Anda, Anda dapat mengekspornya sebagai gambar atau menyalin kode LaTeX untuk digunakan di tempat lain. Klik tombol \"Ekspor sebagai Gambar\" untuk menyimpan formula sebagai file gambar PNG dengan latar belakang transparan, memudahkan penyisipan ke dalam dokumen, presentasi, situs web, atau materi pendidikan. Gambar mempertahankan pengaturan khusus yang Anda terapkan, termasuk ukuran font dan warna. Atau, klik tombol \"Salin Kode LaTeX\" untuk menyalin kode LaTeX formula ke clipboard, untuk digunakan dalam dokumen LaTeX atau sistem yang kompatibel dengan LaTeX lainnya. Ini sangat berguna jika Anda perlu menyesuaikan formula lebih lanjut dalam lingkungan LaTeX lengkap, atau ingin memasukkannya ke dalam makalah akademik atau dokumen teknis."
      }
    },
    syntaxReference: {
      title: "Referensi Sintaks Matematika LaTeX Dasar",
      intro: "Untuk membantu Anda membuat formula lebih efisien, berikut adalah panduan referensi untuk sintaks simbol LaTeX matematika yang umum:",
      basic: {
        title: "Simbol dan Operator Dasar",
        description: "<p>Sintaks matematika LaTeX menggunakan perintah khusus yang dimulai dengan garis miring terbalik (\\) untuk membuat berbagai simbol dan struktur. Berikut adalah simbol dasar yang paling sering digunakan:</p><ul><li><b>Pecahan:</b> <code>\\frac{pembilang}{penyebut}</code> membuat pecahan.</li><li><b>Eksponen/Superskrip:</b> <code>x^2</code> menghasilkan x².</li><li><b>Subskrip:</b> <code>x_i</code> menghasilkan x dengan subskrip i.</li><li><b>Akar kuadrat:</b> <code>\\sqrt{x}</code> membuat √x.</li><li><b>Akar ke-n:</b> <code>\\sqrt[n]{x}</code> membuat akar ke-n dari x.</li><li><b>Huruf Yunani:</b> <code>\\alpha</code>, <code>\\beta</code>, <code>\\gamma</code>, <code>\\pi</code>, dll.</li><li><b>Simbol tak hingga:</b> <code>\\infty</code></li><li><b>Penjumlahan:</b> <code>\\sum_{i=1}^{n}</code> membuat penjumlahan dengan batas bawah i=1 dan batas atas n.</li><li><b>Produk:</b> <code>\\prod_{i=1}^{n}</code> membuat simbol produk.</li><li><b>Limit:</b> <code>\\lim_{x \\to 0}</code> membuat limit saat x mendekati 0.</li><li><b>Integral:</b> <code>\\int_{a}^{b}</code> membuat integral dengan batas bawah a dan batas atas b.</li></ul>"
      },
      advanced: {
        title: "Struktur Matematika Lanjutan",
        description: "<p>Untuk ekspresi matematika yang lebih kompleks, LaTeX menyediakan sistem simbol yang kuat:</p><ul><li><b>Matriks:</b> Gunakan <code>\\begin{matrix}...\\end{matrix}</code>, dengan ampersand (&) memisahkan kolom dan garis miring ganda (\\\\) menunjukkan baris baru. Untuk matriks dengan tanda kurung, gunakan <code>pmatrix</code>, <code>bmatrix</code>, <code>vmatrix</code>, atau <code>Vmatrix</code>.</li><li><b>Fungsi piecewise:</b><code>\\begin{cases}...\\end{cases}</code>, dengan & memisahkan ekspresi dan kondisi.</li><li><b>Persamaan sejajar:</b><code>\\begin{align}...\\end{align}</code>, digunakan untuk beberapa persamaan dengan titik sejajar.</li><li><b>Simbol turunan:</b><code>\\frac{d}{dx}</code> menunjukkan turunan, atau <code>\\frac{\\partial f}{\\partial x}</code> untuk turunan parsial.</li><li><b>Simbol vektor:</b><code>\\vec{v}</code> atau <code>\\overrightarrow{AB}</code></li><li><b>Tanda topi/aksen:</b><code>\\hat{x}</code> untuk variabel estimasi, atau <code>\\bar{x}</code> untuk rata-rata.</li><li><b>Simbol himpunan:</b><code>\\{x \\in \\mathbb{R} : x > 0\\}</code>, gunakan <code>\\mathbb{}</code> untuk himpunan angka.</li><li><b>Simbol logika:</b><code>\\forall</code> (untuk semua), <code>\\exists</code> (ada), <code>\\implies</code> (mengimplikasikan), <code>\\iff</code> (jika dan hanya jika).</li></ul>"
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Generator Formula LaTeX",
      q1: "Apa keunggulan Generator Formula LaTeX dibandingkan editor persamaan standar?",
      a1: "<b>Generator Formula LaTeX menawarkan beberapa keunggulan jelas</b> dibandingkan editor persamaan biasa dalam pengolah kata. Pertama, ini mengikuti standar tata letak yang ditetapkan dalam publikasi ilmiah, memastikan spasi simbol yang tepat, penyelarasan, dan penskalaan, menghormati konvensi matematika. Tidak seperti editor dasar yang sering menghasilkan inkonsistensi spasi atau penyelarasan pecahan yang salah, LaTeX mempertahankan kualitas profesional yang diharapkan dalam publikasi akademis. Kedua, generator kami memberikan umpan balik visual instan melalui rendering real-time, memungkinkan Anda melihat tampilan persis formula saat mengetik, yang mempercepat proses pembelajaran sintaks LaTeX. Ketiga, kemampuan mengekspor gambar resolusi tinggi dengan latar belakang transparan, memungkinkan integrasi mulus ke dalam jenis dokumen apa pun, terlepas dari perangkat lunak yang Anda gunakan. Terakhir, LaTeX menyediakan perpustakaan simbol dan kemampuan struktur yang lebih komprehensif, menangani struktur matematika kompleks yang tidak dapat ditangani oleh editor persamaan dasar, seperti diagram komutatif, fungsi piecewise, dan larik persamaan multi-baris.",
      
      q2: "Perlukah saya memahami pemrograman LaTeX untuk menggunakan generator formula ini?",
      a2: "<b>Tidak diperlukan pengetahuan LaTeX sebelumnya</b> untuk menggunakan generator formula kami secara efektif, meskipun tentu saja keakraban dasar dengan simbol matematika akan membantu. Alat ini dirancang untuk aksesibilitas, dengan antarmuka sederhana yang membuat pembelajaran sintaks LaTeX menjadi intuitif melalui pratinjau visual instan. Kami menyertakan berbagai contoh formula yang dapat Anda klik untuk langsung memuatnya ke editor, memungkinkan Anda mempelajari strukturnya dan memodifikasinya sesuai kebutuhan Anda. Ini memberikan kesempatan belajar yang sangat baik untuk memahami sintaks LaTeX melalui contoh praktis. Struktur matematika paling umum, seperti pecahan, eksponen, akar, dan integral, hanya memerlukan beberapa perintah sederhana yang akan Anda ingat dengan cepat melalui penggunaan rutin. Untuk persamaan yang lebih kompleks, Anda dapat membangunnya langkah demi langkah, memeriksa pratinjau setelah setiap penambahan untuk memastikan pemformatan yang benar. Dengan fitur-fitur ini, bahkan pemula total dapat mulai membuat formula matematika profesional dalam hitungan menit, secara bertahap memperluas pengetahuan LaTeX mereka melalui pengalaman praktis.",
      
      q3: "Bagaimana cara menyisipkan formula yang dihasilkan ke dalam dokumen dan presentasi saya?",
      a3: "<b>Menyisipkan formula ke berbagai jenis dokumen</b> sangat mudah dengan opsi ekspor kami. Metode yang paling serbaguna adalah menggunakan tombol \"Ekspor sebagai Gambar\" untuk menyimpan formula sebagai file gambar PNG dengan latar belakang transparan, yang dapat disisipkan ke dalam dokumen Microsoft Word, presentasi PowerPoint, Google Documents, situs web, atau sistem manajemen pembelajaran. Saat menempatkan gambar yang diekspor, Anda harus menyesuaikan ukurannya secara tepat untuk mencocokkan ukuran teks dokumen, mempertahankan konsistensi visual. Untuk dokumen LaTeX, makalah akademik, atau naskah ilmiah, Anda dapat menggunakan tombol \"Salin Kode LaTeX\" untuk menyalin kode LaTeX formula ke clipboard, untuk digunakan dalam dokumen LaTeX atau sistem lain yang kompatibel dengan LaTeX. Ini sangat berguna untuk publikasi akademis yang memerlukan pengiriman LaTeX, atau ketika Anda perlu menyertakan formula dalam makalah penelitian atau dokumen teknis. Untuk pengembang web, gambar yang diekspor dapat disertakan dalam konten HTML dengan teks alternatif yang sesuai untuk meningkatkan aksesibilitas. Sebagian besar editor dokumen modern juga mendukung fungsi seret dan lepas, memungkinkan Anda menyeret gambar yang diekspor langsung dari folder unduhan ke dokumen, memungkinkan penyisipan cepat.",
      
      q4: "Dapatkah formula yang dihasilkan digunakan dalam platform pembelajaran online dan teknologi pendidikan?",
      a4: "<b>Ya, formula yang dibuat dengan generator kami sangat cocok untuk teknologi pendidikan di semua platform utama</b>. File PNG yang diekspor dengan latar belakang transparan dapat diintegrasikan dengan mulus ke dalam sistem manajemen pembelajaran seperti Canvas, Blackboard, Moodle, dan Google Classroom. Untuk sistem penilaian online, Anda dapat menyertakan gambar formula dalam petunjuk soal, jawaban pilihan ganda, atau penjelasan solusi. Saat membuat konten kursus atau video instruksional, gambar formula berkualitas tinggi ini meningkatkan kejelasan visual dan mempertahankan penampilan profesional di berbagai ukuran layar dan perangkat. Aplikasi pendidikan berbasis web dapat menyematkan gambar formula ini langsung dalam konten HTML, dengan teks alternatif yang sesuai untuk meningkatkan aksesibilitas. Untuk materi pembelajaran interaktif, Anda dapat menghasilkan formula untuk berbagai status atau langkah dalam proses pemecahan masalah, membuat penjelasan visual bertahap. Fleksibilitas ini membuat generator LaTeX kami sangat berharga bagi pendidik yang bertransisi antara mode pengajaran tatap muka dan online, karena konten matematika berkualitas tinggi yang sama dapat digunakan secara konsisten di semua format pengajaran. Pembuat konten pendidikan sangat menghargai bagaimana hal ini mempertahankan konsistensi visual dalam materi mereka, meningkatkan kualitas profesional desain pengajaran mereka.",
      
      q5: "Apa praktik terbaik untuk membuat ekspresi matematika kompleks dalam LaTeX?",
      a5: "<b>Membuat ekspresi matematika kompleks dalam LaTeX menjadi mudah dikelola</b> selama Anda mengikuti praktik terbaik ini. Pertama, bangun formula kompleks secara bertahap—mulai dari struktur dasar, tambahkan satu komponen pada satu waktu, periksa pratinjau setelah setiap penambahan untuk mendeteksi kesalahan sejak dini. Untuk ekspresi berlapis seperti pecahan bersarang atau integral kompleks, kerjakan dari dalam ke luar, pastikan setiap elemen internal benar sebelum menambahkan struktur eksternal. Saat menangani matriks atau persamaan sejajar, buat sketsa struktur di atas kertas terlebih dahulu untuk memvisualisasikan lingkungan LaTeX dan titik sejajar yang diperlukan. Gunakan kurung kurawal secara strategis untuk pengelompokan, mengontrol cakupan operasi, terutama untuk superskrip, subskrip, dan pecahan. Untuk ekspresi panjang, pertimbangkan untuk memecahnya menjadi paragraf yang bermakna secara semantik menggunakan perintah spasi yang tepat seperti \\quad atau lingkungan sejajar. Saat men-debug kesalahan formula, periksa dengan cermat pembatas yang seimbang (tanda kurung, tanda kurung siku, dan kurung kurawal) dan sintaks perintah yang benar—karakter yang hilang atau salah tempat adalah sumber kesalahan paling umum. Terakhir, pertahankan konsistensi simbol dalam formula terkait, terutama variabel yang mewakili kuantitas yang sama, untuk meningkatkan keterbacaan dan penampilan profesional dalam konteks ilmiah dan pendidikan."
    },
    relatedTools: {
      title: "Jelajahi Alat Matematika dan Dokumen Terkait",
      description: "Tingkatkan alur kerja pembuatan dokumen teknis Anda dengan alat pelengkap ini:",
      tool1: {
        name: "Editor Markdown",
        url: "https://www.ufreetools.com/tool/markdown-editor",
        description: "Buat dokumen teks terformat dengan formula LaTeX yang disematkan menggunakan sintaks Markdown."
      },
      tool2: {
        name: "Gambar ke ASCII",
        url: "https://www.ufreetools.com/tool/image-to-ascii",
        description: "Ubah gambar menjadi seni ASCII dengan opsi yang dapat disesuaikan."
      },
      tool3: {
        name: "Pemilih dan Konverter Warna",
        url: "https://www.ufreetools.com/tool/color-picker",
        description: "Pilih warna sempurna untuk formula LaTeX kustom dan mencocokkan tema dokumen."
      },
      tool4: {
        name: "Kompresor Gambar",
        url: "https://www.ufreetools.com/tool/image-compressor",
        description: "Optimalkan gambar formula yang diekspor untuk web sambil mempertahankan kejelasan dan kualitas."
      }
    },
    resources: {
      title: "Sumber Daya Otoritatif untuk LaTeX dan Tata Letak Matematika",
      resource1: {
        name: "Daftar Simbol LaTeX Komprehensif",
        url: "https://tug.ctan.org/info/symbols/comprehensive/symbols-a4.pdf",
        description: "Dokumen referensi lengkap yang mencantumkan semua simbol yang tersedia dalam LaTeX beserta perintahnya."
      },
      resource2: {
        name: "Dokumentasi LaTeX Overleaf",
        url: "https://www.overleaf.com/learn",
        description: "Tutorial dan panduan komprehensif untuk mempelajari simbol matematika LaTeX dan persiapan dokumen."
      },
      resource3: {
        name: "American Mathematical Society - Sumber Daya Publikasi Matematika",
        url: "https://www.ams.org/publications/authors/tex/tex",
        description: "Panduan dan sumber daya profesional untuk tata letak matematika dalam publikasi akademis."
      }
    }
  }
};