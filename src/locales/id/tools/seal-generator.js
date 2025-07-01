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
  
  // Bagian artikel
  article: {
    title: "Generator Cap: Buat Gambar Cap Digital dengan Mudah",
    intro: {
      title: "Fitur dan Aplikasi Generator Cap",
      p1: "<b>Alat Generator Cap</b> adalah utilitas online untuk membuat gambar cap digital tanpa perlu menginstal perangkat lunak apa pun, langsung di browser Anda. Baik itu cap perusahaan, cap pribadi, atau cap dekoratif, semuanya dapat disesuaikan dengan operasi sederhana. Alat ini sangat cocok untuk skenario yang memerlukan cap elektronik pada dokumen digital, juga dapat digunakan untuk mendesain logo, identitas merek, atau karya seni.",
      p2: "Dalam aplikasi praktis, <b>cap digital digunakan secara luas dalam berbagai skenario</b>. Perusahaan dapat membuat cap elektronik dengan nama perusahaan untuk kontrak elektronik dan penandatanganan dokumen elektronik; desainer dapat membuat berbagai gaya cap sebagai elemen identitas merek; guru dapat membuat cap pribadi untuk memuji pekerjaan siswa; pengguna pribadi dapat membuat cap tanda tangan pribadi untuk menambah kesan formal dan gaya pribadi pada dokumen. Generator Cap membuat aplikasi ini menjadi sederhana dan cepat, tanpa memerlukan keterampilan desain profesional.",
      p3: "<b>Dibandingkan dengan pembuatan cap tradisional</b>, generator cap online memiliki keunggulan yang jelas: pertama, sepenuhnya gratis, tanpa biaya pembuatan cap fisik; kedua, proses pembuatan instan, tanpa menunggu waktu pembuatan dan pengiriman cap fisik; ketiga, Anda dapat menyesuaikan desain dan membuat versi baru kapan saja, sangat fleksibel; terakhir, cap digital yang dihasilkan dapat dengan mudah diterapkan pada berbagai dokumen elektronik. Fitur-fitur ini membuat Generator Cap menjadi pilihan ideal di era digital, memenuhi berbagai kebutuhan cap dalam pekerjaan dan kehidupan modern."
    },
    tutorial: {
      title: "Cara Menggunakan Generator Cap",
      intro: "Berikut adalah panduan langkah demi langkah untuk membuat cap kustom menggunakan Generator Cap:",
      step1: {
        title: "Langkah 1: Atur Teks Cap",
        description: "Pertama, masukkan teks yang ingin Anda tampilkan di sekitar cap di kotak input \"Teks Cap\". Ini biasanya nama perusahaan, nama departemen, atau nama pribadi. Panjang teks disarankan tidak lebih dari 20 karakter untuk memastikan tampilan yang jelas pada cap. Kemudian masukkan teks atau simbol yang ingin ditampilkan di tengah cap di kotak input \"Teks Tengah\", seperti tanda bintang, karakter \"Cap\" atau simbol ikon lainnya."
      },
      step2: {
        title: "Langkah 2: Pilih Font dan Bentuk",
        description: "Pilih font yang sesuai dengan gaya cap Anda dari menu dropdown font. Font SimSun dan KaiTi cocok untuk gaya cap tradisional, sementara SimHei dan Microsoft YaHei lebih modern. Kemudian pilih bentuk cap, cap resmi Tiongkok biasanya berbentuk lingkaran, sedangkan cap pribadi lebih sering berbentuk persegi. Bentuk yang berbeda akan memengaruhi tampilan keseluruhan dan pengaturan teks pada cap."
      },
      step3: {
        title: "Langkah 3: Sesuaikan Ukuran dan Warna",
        description: "Gunakan slider ukuran untuk menyesuaikan dimensi cap, pilih ukuran yang sesuai berdasarkan kebutuhan penggunaan Anda. Untuk skenario penggunaan standar, disarankan memilih 200-300 piksel. Kemudian pilih warna cap dari opsi warna, cap tradisional biasanya berwarna merah, tetapi Anda juga dapat memilih biru, hijau, ungu, atau hitam untuk memenuhi berbagai kebutuhan desain atau sesuai dengan identitas visual perusahaan."
      },
      step4: {
        title: "Langkah 4: Buat dan Unduh",
        description: "Setelah pengaturan selesai, klik tombol \"Buat Cap\" untuk melihat pratinjau. Jika hasilnya tidak memuaskan, Anda dapat menyesuaikan berbagai pengaturan dan membuat ulang kapan saja. Jika sudah puas, klik tombol \"Unduh Gambar\" untuk menyimpan cap dalam format file PNG. File ini memiliki latar belakang transparan dan dapat langsung diterapkan pada berbagai dokumen, desain, atau situs web. Anda juga dapat mengklik tombol \"Reset\" kapan saja untuk mengembalikan pengaturan default dan memulai desain baru."
      }
    },
    faq: {
      title: "Pertanyaan Umum",
      q1: "Bagaimana kualitas gambar cap yang dihasilkan? Bisakah digunakan untuk mencetak?",
      a1: "<b>Gambar cap yang dibuat oleh Generator Cap menggunakan format PNG</b>, dengan latar belakang transparan dan tepi yang jelas. Gambar 300 piksel yang dihasilkan secara default cocok untuk tampilan layar dan kebutuhan pencetakan umum. Jika Anda membutuhkan pencetakan berkualitas tinggi, disarankan menyesuaikan ukuran menjadi 400-500 piksel. Gambar yang dihasilkan dapat dimasukkan ke dalam dokumen Word, file PDF, perangkat lunak desain, atau bahan cetakan. Karena digambar secara vektor, bahkan saat diperbesar tidak akan muncul pixelasi yang jelas, mempertahankan kejelasan dan penampilan profesional cap.",
      
      q2: "Apakah cap yang dihasilkan oleh alat ini memiliki kekuatan hukum?",
      a2: "<b>Perlu dipahami bahwa cap digital yang dihasilkan oleh alat ini hanya untuk desain, dekorasi, dan penggunaan tidak resmi</b>, tidak memiliki kekuatan hukum. Di Tiongkok, cap elektronik yang sah dan efektif perlu dikeluarkan oleh lembaga sertifikasi elektronik dengan kualifikasi terkait, dan mematuhi peraturan hukum seperti \"Hukum Tanda Tangan Elektronik\". Jika Anda membutuhkan cap elektronik dengan kekuatan hukum, disarankan untuk berkonsultasi dengan penyedia layanan sertifikasi elektronik profesional atau penasihat hukum. Alat ini menghasilkan cap yang cocok untuk dokumen internal, prototipe desain, materi pendidikan, atau kreasi pribadi yang tidak memerlukan sertifikasi hukum.",
      
      q3: "Bagaimana cara menambahkan simbol khusus atau gambar pada cap yang dihasilkan?",
      a3: "<b>Di kotak teks tengah, Anda dapat memasukkan berbagai simbol Unicode dan karakter khusus</b>, seperti ★, ✓, ❤, dll. Simbol-simbol ini akan ditampilkan di tengah cap. Saat ini alat mendukung satu atau beberapa karakter sebagai gambar tengah. Jika Anda menginginkan gambar yang lebih kompleks, Anda dapat membuat cap dasar terlebih dahulu, lalu menggunakan perangkat lunak pengeditan gambar seperti Photoshop atau alat online seperti Canva untuk pengeditan lebih lanjut, menambahkan gambar atau logo kustom. Di versi mendatang, kami berencana menambahkan lebih banyak gambar preset dan fungsi unggah gambar kustom untuk menyediakan lebih banyak opsi desain cap.",
      
      q4: "Bagaimana jika teks cap tidak ditampilkan lengkap atau tumpang tindih?",
      a4: "<b>Masalah tampilan teks biasanya terkait dengan panjang teks dan ukuran cap</b>. Jika Anda menemukan teks tidak ditampilkan lengkap atau tumpang tindih, Anda dapat mencoba solusi berikut: pertama, pertimbangkan untuk mengurangi jumlah karakter teks, terutama saat cap berukuran kecil; kedua, tingkatkan ukuran cap untuk memberikan lebih banyak ruang tampilan teks; ketiga, coba font yang berbeda, beberapa font mungkin lebih mudah dibaca dalam ukuran kecil; terakhir, jika teks melingkar terlalu panjang, Anda dapat memindahkan sebagian konten ke posisi tengah, atau menggunakan versi singkat. Dengan penyesuaian ini, sebagian besar masalah tampilan dapat diselesaikan dengan efektif, menghasilkan efek cap yang jelas dan indah."
    },
    relatedTools: {
      title: "Alat Terkait yang Direkomendasikan",
      description: "Berikut adalah alat praktis lainnya yang terkait dengan Generator Cap, yang dapat membantu Anda menyelesaikan lebih banyak tugas desain dan pemrosesan dokumen:",
      tool1: {
        name: "Generator QR Code",
        url: "https://www.ufreetools.com/tool/qr-code-generator",
        description: "Buat QR code kustom, tambahkan Logo dan sesuaikan gaya, cocok untuk pemasaran, kartu nama, dan kemasan produk."
      },
      tool2: {
        name: "Alat Pemotong Gambar",
        url: "https://www.ufreetools.com/tool/image-cropper",
        description: "Potong dan sesuaikan ukuran gambar dengan mudah, cocok untuk berbagai kebutuhan aplikasi."
      },
      tool3: {
        name: "Alat Optimasi SVG",
        url: "https://www.ufreetools.com/tool/svg-optimizer",
        description: "Optimalkan kode gambar SVG, kurangi ukuran file dan tingkatkan kecepatan pemuatan web."
      }
    },
    resources: {
      title: "Lebih Banyak Sumber Daya Tentang Desain Cap",
      resource1: {
        name: "Peraturan Layanan Kepercayaan dan Identitas Elektronik UE (eIDAS)",
        url: "https://eur-lex.europa.eu/eli/reg/2014/910/oj",
        description: "Kerangka hukum UE tentang tanda tangan elektronik dan cap elektronik, menjelaskan kekuatan hukum dan persyaratan teknis cap elektronik."
      },
      resource2: {
        name: "Undang-Undang Tanda Tangan Elektronik AS (ESIGN Act)",
        url: "https://www.ecfr.gov/cgi-bin/text-idx?SID=8e7f4f5d9b7f4f5d9b7f4f5d9b7f4f5d&mc=true&node=pt15.1.11&rgn=div5",
        description: "Regulasi hukum AS tentang tanda tangan elektronik dan cap elektronik, meskipun tidak secara eksplisit mengatur cap elektronik, dokumen cap digital biasanya dapat digunakan sebagai bukti hukum yang valid."
      }
    }
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