export default {
  name: 'Konverter YAML-JSON',
  description: 'Konversi antara format YAML dan JSON dengan opsi yang dapat disesuaikan',
  
  input: {
    title: 'Input',
    yamlPlaceholder: 'Masukkan YAML di sini...',
    jsonPlaceholder: 'Masukkan JSON di sini...',
    loadSample: 'Muat Contoh',
    clearInput: 'Hapus Input',
    uploadFile: 'Unggah File'
  },
  
  output: {
    title: 'Output',
    copyOutput: 'Salin Output',
    downloadOutput: 'Unduh Output',
    clearOutput: 'Hapus Output'
  },
  
  options: {
    conversionMode: 'Mode Konversi',
    jsonToYaml: 'JSON ke YAML',
    yamlToJson: 'YAML ke JSON',
    formatOutput: 'Format Output',
    indentSize: 'Ukuran Indentasi',
    quoteKeys: 'Tanda Kutip untuk Kunci Objek',
    sortKeys: 'Urutkan Kunci Secara Alfabetis',
    flowStyle: 'Gaya Aliran YAML',
    jsonCompatible: 'Kompatibel dengan JSON',
    singleQuotes: 'Gunakan Tanda Kutip Tunggal',
    includeSchema: 'Sertakan Skema',
    preserveKeyOrder: 'Pertahankan Urutan Kunci'
  },
  
  flowStyles: {
    block: 'Gaya Blok',
    flow: 'Gaya Aliran',
    auto: 'Otomatis'
  },
  
  validation: {
    validate: 'Validasi Sebelum Konversi',
    validInput: '{format} valid',
    invalidInput: '{format} tidak valid: {error}',
    checkSyntax: 'Periksa Sintaks'
  },
  
  actions: {
    convert: 'Konversi',
    swap: 'Tukar Format',
    beautify: 'Rapikan',
    minify: 'Kompres'
  },
  
  messages: {
    conversionSuccess: 'Konversi berhasil',
    conversionFailed: 'Konversi gagal: {error}',
    copySuccess: 'Tersalin ke clipboard',
    downloadSuccess: 'File berhasil diunduh',
    emptyInput: 'Masukkan konten untuk dikonversi',
    invalidYaml: 'Sintaks YAML tidak valid',
    invalidJson: 'Sintaks JSON tidak valid'
  },
  
  article: {
    title: "Konverter YAML-JSON: Mempermudah Konversi Format Data",
    features: {
      title: "Memahami Format YAML dan JSON",
      description: "<strong>Konverter YAML-JSON</strong> adalah alat khusus yang dirancang untuk mengkonversi data antara dua <strong>format serialisasi data</strong> populer: <strong>YAML</strong> (YAML Ain't Markup Language) dan <strong>JSON</strong> (JavaScript Object Notation). <strong>Konverter dua arah</strong> ini mendukung konversi mulus antara format ini sambil mempertahankan struktur dan integritas data.<br><br><strong>Konverter YAML ke JSON</strong> kami mendukung fitur lanjutan seperti indentasi kustom, pengurutan kunci, dan opsi gaya aliran untuk output YAML. Bagi pengguna yang memproses <strong>konversi JSON ke YAML</strong>, alat ini menyediakan opsi untuk merapikan output atau mempertahankan notasi ringkas. Baik Anda menangani pasangan kunci-nilai sederhana atau struktur bertingkat kompleks, <strong>konverter format data</strong> ini dapat menangani konversi secara efektif sambil mempertahankan hubungan hierarkis dalam data.",
      useCases: {
        title: "Kasus Penggunaan Umum Konversi YAML-JSON",
        items: [
          "Insinyur DevOps mengkonversi antara file konfigurasi untuk berbagai pipeline CI/CD yang membutuhkan YAML (GitHub Actions, GitLab CI) atau JSON (CircleCI, AWS CodeBuild)",
          "Pengembang backend yang menangani API yang menerima payload JSON sambil memelihara file konfigurasi YAML yang lebih mudah dibaca",
          "Arsitek cloud yang mengubah template AWS CloudFormation (JSON) ke format YAML yang lebih mudah dikelola, atau sebaliknya",
          "Ilmuwan data yang mengkonversi definisi struktur data antara lingkungan notebook yang lebih menyukai JSON dan file konfigurasi YAML",
          "Penulis dokumentasi teknis yang perlu menyajikan struktur data yang sama dalam format YAML dan JSON untuk audiens dengan preferensi berbeda",
          "Pengembang frontend yang bekerja dengan manajer paket dan alat build yang menggunakan format konfigurasi berbeda (package.json vs docker-compose.yml)"
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Konversi YAML-JSON",
      items: [
        {
          question: "Apa perbedaan utama antara YAML dan JSON?",
          answer: "YAML dan JSON keduanya adalah format serialisasi data, tetapi memiliki perbedaan signifikan dalam sintaks dan fungsionalitas. JSON menggunakan sintaks ketat yang mencakup kurung kurawal, tanda kutip di sekitar kunci, dan koma eksplisit antara elemen. YAML lebih mudah dibaca manusia, menggunakan spasi yang bermakna, tidak memerlukan tanda kutip atau tanda kurung, dan mendukung komentar. JSON lebih ringkas dan banyak digunakan untuk pertukaran data dalam aplikasi web, sementara YAML memberikan keterbacaan yang lebih baik, mendukung struktur data kompleks, dan umumnya digunakan untuk file konfigurasi. Konverter YAML-JSON kami secara otomatis menangani perbedaan sintaks ini untuk memastikan konversi akurat antar format."
        },
        {
          question: "Apakah konverter dapat menangani struktur bertingkat yang kompleks?",
          answer: "Ya, konverter YAML-JSON kami sepenuhnya mendukung struktur data bertingkat kompleks, termasuk objek bersarang dalam, array, dan hierarki campuran. Terlepas dari arah konversinya, konverter akan mempertahankan hubungan hierarkis, memastikan pemetaan bersarang YAML, urutan, dan skalar sesuai dengan objek JSON, array, dan nilai primitif. Ini membuatnya cocok untuk file konfigurasi kompleks, skema API, dan template data dengan banyak level nesting dan berbagai tipe data."
        },
        {
          question: "Apakah konverter mendukung fitur lanjutan YAML?",
          answer: "Konverter YAML-JSON mendukung banyak fitur lanjutan YAML meskipun JSON memiliki kemampuan yang lebih terbatas. Saat mengkonversi dari YAML ke JSON, fitur seperti komentar dan anchor (referensi) ditangani dengan tepat - komentar dihapus (karena JSON tidak mendukungnya), sedangkan referensi diurai ke nilai aktualnya. Saat mengkonversi dari JSON ke YAML, Anda dapat memilih antara output YAML gaya blok (lebih mudah dibaca) atau gaya aliran (lebih ringkas). Konverter mempertahankan integritas data sambil menyesuaikan dengan kemampuan masing-masing format."
        },
        {
          question: "Bagaimana konverter menangani berbagai tipe data?",
          answer: "Konverter YAML-JSON mempertahankan tipe data yang kompatibel selama proses konversi. Angka, string, boolean, nilai null, array, dan objek dapat dikonversi secara akurat di kedua arah. Tipe data tambahan YAML seperti tanggal dan data biner ditangani secara khusus - tanggal biasanya dikonversi ke format string ISO dalam JSON, sedangkan data biner dikonversi ke string base64. Fungsi tipe dinamis konverter memastikan nilai numerik dikenali dengan benar ketika sesuai, bukan diperlakukan sebagai string."
        },
        {
          question: "Apakah ada batasan ukuran file yang dapat dikonversi?",
          answer: "Karena konverter YAML-JSON berjalan sepenuhnya di browser Anda, batasan ukuran praktis tergantung pada memori dan kapasitas pemrosesan perangkat Anda. Untuk kinerja optimal, kami merekomendasikan file berukuran di bawah 5MB, meskipun browser modern umumnya dapat menangani file yang lebih besar. Untuk dataset yang sangat besar, Anda mungkin mengalami beberapa penundaan pemrosesan. Jika bekerja dengan dataset yang sangat besar, pertimbangkan untuk membaginya menjadi bagian yang lebih kecil atau memprosesnya secara bertahap untuk kinerja yang lebih baik."
        }
      ]
    },
    guide: {
      title: "Panduan Langkah demi Langkah Menggunakan Konverter YAML-JSON",
      steps: [
        "Gunakan tombol toggle di bagian atas alat untuk memilih arah konversi: 'YAML ke JSON' mengubah sintaks YAML ke format JSON, atau 'JSON ke YAML' untuk proses sebaliknya",
        "Di bagian pengaturan, konfigurasikan preferensi format output Anda: untuk output JSON, Anda dapat memilih ukuran indentasi dan opsi perapian; untuk output YAML, Anda dapat memilih antara gaya blok atau aliran, dan mengaktifkan pengurutan kunci",
        "Masukkan data sumber Anda di panel input sebelah kiri, atau gunakan tombol 'Tempel' untuk menempelkan konten dari clipboard (Anda juga dapat menggunakan tombol contoh 'Sederhana', 'Bertingkat', atau 'Kompleks' untuk memuat data contoh dan melihat cara kerja konverter)",
        "Konverter akan memproses secara otomatis saat Anda mengetik, menampilkan output yang dikonversi secara real-time di panel sebelah kanan",
        "Tinjau hasil konversi dan lakukan penyesuaian yang diperlukan pada input atau pengaturan format Anda untuk mendapatkan output yang diinginkan",
        "Klik tombol 'Salin Hasil' untuk menyalin output yang dikonversi ke clipboard, untuk digunakan di aplikasi lain",
        "Atau, gunakan tombol 'Unduh' untuk menyimpan output yang dikonversi sebagai file ke perangkat Anda, untuk digunakan nanti atau diintegrasikan ke proyek Anda"
      ]
    },
    conclusion: "Konverter YAML-JSON menyediakan cara mulus untuk mengubah data antara dua format serialisasi populer ini tanpa kehilangan integritas struktur atau presisi data. Baik Anda seorang pengembang yang bekerja dengan file konfigurasi, insinyur DevOps yang mengelola infrastruktur sebagai kode, atau profesional data yang menangani berbagai format pertukaran data, alat ini menyederhanakan proses konversi melalui antarmuka intuitif dan fitur canggih. Dengan mendukung kedua arah konversi dan menyediakan opsi output yang dapat disesuaikan, alat ini cocok untuk berbagai kasus penggunaan sekaligus menghemat waktu Anda dan mengurangi risiko kesalahan konversi manual."
  }
}