export default {
  name: 'Generator Skema Warna',
  description: 'Buat skema warna harmonis berdasarkan teori warna untuk membantu desainer membuat palet warna yang serasi dengan cepat',
  baseColor: {
    title: 'Warna Dasar',
    picker: 'Pemilih Warna',
    hex: 'Heksadesimal',
    rgb: 'RGB',
    hsl: 'HSL',
    random: 'Warna Acak',
    recent: 'Warna Terakhir Digunakan',
    hint: 'Klik blok warna atau masukkan nilai warna heksadesimal',
  },
  schemeTypes: {
    title: 'Teori Warna',
    monochromatic: 'Monokromatik',
    analogous: 'Analog',
    complementary: 'Komplementer',
    splitComplementary: 'Split Komplementer',
    triadic: 'Triadik',
    tetradic: 'Tetradik',
    square: 'Persegi',
    compound: 'Compound',
    shades: 'Gradasi',
    custom: 'Kustom',
  },
  options: {
    colorCount: 'Jumlah Warna',
    saturationRange: 'Rentang Saturasi',
    brightnessRange: 'Rentang Kecerahan',
    includeBaseColor: 'Sertakan Warna Dasar',
    lockBaseColor: 'Kunci Warna Dasar',
    colorSpace: 'Ruang Warna',
    sortBy: 'Urutkan Berdasarkan',
    colorBlindSafe: 'Aman untuk Buta Warna',
    contrastRatio: 'Rasio Kontras Minimum'
  },
  colorSpaces: {
    rgb: 'RGB',
    hsl: 'HSL',
    lab: 'LAB',
    hsv: 'HSV',
    cmyk: 'CMYK'
  },
  sortOptions: {
    hue: 'Hue',
    saturation: 'Saturasi',
    brightness: 'Kecerahan',
    harmony: 'Tingkat Harmoni',
    none: 'Tidak Ada'
  },
  palettes: {
    title: 'Palet Hasil',
    save: 'Simpan Palet',
    copy: 'Salin Palet',
    export: 'Ekspor sebagai Variabel CSS',
    apply: 'Terapkan ke Pratinjau'
  },
  exportFormats: {
    title: 'Format Ekspor',
    css: 'Variabel CSS',
    scss: 'Variabel SCSS',
    less: 'Variabel LESS',
    json: 'JSON',
    svg: 'Palet SVG',
    ase: 'Adobe ASE',
    tailwind: 'Konfigurasi Tailwind',
    pdf: 'PDF'
  },
  preview: {
    title: 'Pratinjau',
    website: 'Website',
    mobilApp: 'Aplikasi Mobile',
    dashboard: 'Dashboard',
    card: 'Kartu',
    poster: 'Poster',
    custom: 'Kustom',
    mainButton: 'Tombol Utama',
    secondButton: 'Tombol Sekunder',
    tag: 'Tag'
  },
  savedPalettes: {
    title: 'Palet Tersimpan',
    load: 'Muat',
    delete: 'Hapus',
    rename: 'Ubah Nama',
    noSavedPalettes: 'Tidak Ada Palet Tersimpan',
    saved: 'Palet Tersimpan',
    schemeNameEmpty: 'Nama Palet Kosong',
  },
  actions: {
    generate: 'Buat Skema',
    regenerate: 'Buat Ulang',
    reset: 'Reset',
    lockColor: 'Kunci Warna',
    unlockColor: 'Buka Kunci Warna',
    save: 'Simpan Palet',
  },
  messages: {
    paletteSaved: 'Palet Berhasil Disimpan',
    paletteDeleted: 'Palet Telah Dihapus',
    copied: 'Tersalin ke Clipboard',
    exported: 'Ekspor Berhasil',
    adjustmentParam: 'Parameter Penyesuaian',
    schemeName: 'Nama Skema',
    copyAllColors: 'Semua Warna Disalin',
  },
  article: {
    title: "Generator Skema Warna: Buat Kombinasi Warna Harmonis untuk Karya Desain yang Menakjubkan",
    overview: {
      title: "Apa itu Generator Skema Warna?",
      content: "<strong>Generator Skema Warna</strong> adalah alat desain profesional yang dapat membuat kombinasi warna harmonis berdasarkan prinsip teori warna. Generator kami menyederhanakan proses kompleks memilih warna komplementer dengan secara otomatis membuat palet seimbang dari satu warna dasar.<br><br>Alat ini menggunakan berbagai aturan harmoni warna seperti monokromatik, analog, komplementer, triadik, dan lainnya untuk menghasilkan kombinasi warna yang menyenangkan secara visual. Ini mempertimbangkan psikologi warna, desain yang dapat diakses, dan praktik terbaik desain untuk memastikan palet Anda tidak hanya indah tetapi juga berfungsi efektif di berbagai aplikasi.<br><br>Baik Anda mendesain website, branding, proyek UI/UX, atau kreasi visual lainnya, Generator Skema Warna kami menghilangkan tebakan dengan menyediakan hubungan warna yang didukung secara ilmiah untuk meningkatkan komunikasi visual dan pengalaman pengguna."
    },
    useCases: {
      title: "Aplikasi Praktis Generator Skema Warna",
      items: [
        {
          title: "Desain dan Pengembangan Website",
          description: "Buat skema warna yang konsisten, dapat diakses, dan menarik secara visual untuk website, memastikan konsistensi branding di semua halaman sambil memenuhi persyaratan kontras WCAG untuk meningkatkan keterbacaan dan pengalaman pengguna."
        },
        {
          title: "Pengembangan Identitas Merek",
          description: "Bangun kombinasi warna merek yang kuat yang membangkitkan emosi tertentu dan membedakan merek Anda dari pesaing, sambil memastikan fleksibilitas di berbagai materi pemasaran dan platform."
        },
        {
          title: "Proyek Desain UI/UX",
          description: "Hasilkan sistem warna fungsional untuk antarmuka pengguna yang mengarahkan perhatian pengguna, menciptakan hierarki visual, dan mempertahankan konsistensi di aplikasi mobile, web app, dan produk perangkat lunak."
        },
        {
          title: "Materi Pemasaran dan Iklan",
          description: "Kembangkan skema warna yang menarik perhatian untuk iklan, grafik media sosial, kampanye email, dan aset pemasaran lainnya yang sesuai dengan prinsip psikologi pemasaran dan tujuan kampanye."
        },
        {
          title: "Desain Presentasi dan Dokumen",
          description: "Buat presentasi dan dokumen profesional dengan kombinasi warna harmonis yang meningkatkan hierarki informasi, keterbacaan, dan daya tarik visual untuk meningkatkan keterlibatan audiens."
        },
        {
          title: "Proyek Desain Cetak",
          description: "Hasilkan palet yang cocok untuk cetak untuk brosur, kartu nama, kemasan, dan materi fisik lainnya dengan mempertimbangkan faktor warna CMYK dan persyaratan produksi cetak."
        },
        {
          title: "Desain Interior dan Lingkungan",
          description: "Rencanakan skema warna yang kohesif untuk ruang fisik seperti kantor, lingkungan ritel, atau interior rumah untuk menciptakan suasana dan efek psikologis yang diinginkan."
        },
        {
          title: "Materi Edukasi dan Infografis",
          description: "Kembangkan kombinasi warna yang dapat diakses untuk sumber belajar, visualisasi data, dan infografis yang meningkatkan pemahaman informasi sekaligus inklusif bagi pengguna dengan gangguan penglihatan warna."
        }
      ]
    },
    guide: {
      title: "Cara Menggunakan Generator Skema Warna",
      intro: "Membuat skema warna sempurna dengan alat intuitif kami sangat mudah. Ikuti langkah-langkah ini untuk menghasilkan palet harmonis untuk proyek Anda:",
      steps: [
        {
          title: "Pilih Warna Dasar",
          description: "Mulailah dengan memilih warna utama yang mewakili merek Anda, membangkitkan emosi yang diinginkan, atau melengkapi elemen desain yang ada. Gunakan pemilih warna, masukkan kode heksadesimal spesifik, atau klik tombol \"Warna Acak\" untuk mencari inspirasi. Warna dasar ini akan menjadi fondasi untuk seluruh skema warna Anda."
        },
        {
          title: "Pilih Teori Harmoni Warna",
          description: "Pilih salah satu opsi teori warna dari menu dropdown. Setiap teori menciptakan hubungan berbeda antara warna: monokromatik (variasi satu warna), analog (warna yang berdekatan di roda warna), komplementer (warna berlawanan), triadik (tiga warna yang berjarak sama), dll. Teori yang Anda pilih akan sangat memengaruhi suasana dan nuansa palet Anda."
        },
        {
          title: "Sesuaikan Parameter Pembuatan",
          description: "Sempurnakan palet Anda dengan menyesuaikan pengaturan seperti jumlah warna yang ingin disertakan, rentang saturasi, dan rentang kecerahan. Parameter ini memberi Anda kendali tepat atas intensitas dan variasi dalam skema warna Anda. Untuk website atau antarmuka yang perlu memenuhi standar desain yang dapat diakses, aktifkan opsi \"Aman untuk Buta Warna\" dan atur kontras yang sesuai."
        },
        {
          title: "Hasilkan Skema Warna Anda",
          description: "Klik tombol \"Buat Skema\" untuk membuat palet berdasarkan pilihan Anda. Alat ini akan menampilkan serangkaian warna harmonis yang bekerja sama dengan baik sesuai prinsip teori warna yang Anda pilih. Jika Anda tidak puas dengan hasilnya, Anda dapat mengklik \"Buat Ulang\" untuk menghasilkan opsi alternatif sambil mempertahankan pengaturan dasar."
        },
        {
          title: "Pratinjau dan Uji Palet Anda",
          description: "Gunakan bagian pratinjau untuk melihat bagaimana warna Anda bekerja sama dalam konteks nyata. Beralihlah antara berbagai template pratinjau seperti tata letak website, aplikasi mobile, dashboard, atau kartu untuk memvisualisasikan bagaimana palet Anda akan berfungsi di berbagai aplikasi. Langkah ini membantu memastikan warna Anda memberikan efek yang diharapkan saat diterapkan pada desain aktual."
        },
        {
          title: "Simpan dan Ekspor Skema Warna Anda",
          description: "Setelah puas dengan palet Anda, simpan untuk referensi masa depan dengan mengklik \"Simpan Palet\" dan beri nama deskriptif. Anda dapat mengekspor palet dalam berbagai format termasuk variabel CSS, SCSS, konfigurasi Tailwind, atau JSON, memudahkan implementasi dalam proyek Anda. Opsi ekspor memastikan integrasi mulus dengan alur kerja pengembangan atau desain pilihan Anda."
        },
        {
          title: "Terapkan dan Iterasi",
          description: "Terapkan skema warna dalam proyek Anda dan evaluasi efektivitasnya. Jika perlu, kembali ke generator untuk penyesuaian, atau buat palet alternatif untuk bagian berbeda dari proyek Anda. Anda dapat memuat palet yang disimpan sebelumnya, membuat varian, atau mempertahankan konsistensi di beberapa proyek."
        }
      ]
    },
    colorTheory: {
      title: "Memahami Prinsip Harmoni Warna",
      intro: "Teori warna menyediakan kerangka kerja ilmiah untuk menciptakan kombinasi harmonis. Berikut cara berbagai model harmoni warna bekerja dalam generator kami:",
      items: [
        {
          name: "Skema Warna Monokromatik",
          description: "Menggunakan variasi kecerahan dan saturasi dari satu hue, menciptakan tampilan yang kohesif dan seragam yang elegan dan mudah dikelola. Sangat cocok untuk desain minimalis, membangun pengenalan merek, atau menciptakan estetika yang halus dan canggih tanpa membanjiri penonton dengan banyak warna yang bersaing."
        },
        {
          name: "Skema Warna Analog",
          description: "Menggabungkan warna yang berdekatan di roda warna untuk menghasilkan efek yang harmonis dan menenangkan dengan cukup variasi untuk tetap menarik. Cocok untuk desain alami dan nyaman yang ingin menciptakan aliran visual antara elemen daripada kontras tinggi atau ketegangan."
        },
        {
          name: "Skema Warna Komplementer",
          description: "Memasangkan warna yang berlawanan di roda warna untuk menciptakan kontras maksimum dan energi visual. Skema ini memberikan efek berenergi tinggi dan mencolok, ideal untuk menyorot elemen ajakan bertindak, menciptakan pemisahan visual, atau mendesain materi pemasaran yang berdampak."
        },
        {
          name: "Skema Warna Split Komplementer",
          description: "Menggunakan warna dasar ditambah dua warna yang berdekatan dengan komplemennya, memberikan kontras visual yang kuat sementara tidak seintens skema komplementer murni. Pendekatan seimbang ini memberikan ketertarikan visual dan energi sementara lebih mudah dikoordinasikan daripada pasangan komplementer langsung."
        },
        {
          name: "Skema Warna Triadik",
          description: "Mengadopsi tiga warna yang berjarak sama di roda warna, memberikan kontras yang kaya sambil mempertahankan harmoni warna. Skema serbaguna ini menawarkan palet yang seimbang dan berenergi untuk desain dinamis dan menyenangkan yang membutuhkan variasi visual dan energi."
        },
        {
          name: "Skema Warna Tetradik (Double Komplementer)",
          description: "Mengombinasikan dua pasang warna komplementer untuk menciptakan palet yang kaya dan beragam dengan banyak kemungkinan kontras. Skema kompleks ini cocok untuk desain canggih yang membutuhkan kedalaman dan variasi, meskipun memerlukan keseimbangan hati-hati untuk menghindari membanjiri penonton."
        },
        {
          name: "Skema Warna Persegi",
          description: "Menggunakan empat warna yang berjarak sama di roda warna (mirip dengan triadik tetapi dengan empat warna). Pendekatan seimbang ini memberikan variasi warna maksimum sambil mempertahankan hubungan harmonis, cocok untuk desain kompleks yang membutuhkan beberapa kelompok warna berbeda."
        }
      ]
    },
    faq: {
      title: "Pertanyaan Umum tentang Skema Warna",
      items: [
        {
          question: "Apa yang membentuk skema warna yang baik?",
          answer: "Skema warna yang baik mencapai beberapa tujuan kunci: menciptakan harmoni visual melalui hubungan warna yang tepat (berdasarkan prinsip teori warna), membangun kontras yang memadai untuk keterbacaan dan aksesibilitas, menyampaikan respons emosional dan kepribadian merek yang diinginkan, mempertahankan fungsionalitas di berbagai konteks, dan membedakan diri dari pesaing sambil tetap sesuai dengan industri. Skema warna terbaik menyeimbangkan daya tarik estetika dan fungsionalitas praktis, menggunakan 3-5 warna dengan peran yang jelas ditentukan (utama, sekunder, aksen, dll.) dan diterapkan secara konsisten di seluruh sistem desain."
        },
        {
          question: "Berapa banyak warna yang harus dimiliki skema warna saya?",
          answer: "Sebagian besar skema warna efektif mengandung 3-5 warna: warna utama yang mewakili identitas merek, warna sekunder yang melengkapi warna utama, 1-2 warna aksen untuk sorotan dan ajakan bertindak, dan 2-3 warna netral (putih, hitam, abu-abu) untuk teks dan latar belakang. Untuk sistem kompleks seperti website besar atau aplikasi, Anda mungkin menambahkan warna sekunder tambahan atau varian aksen, tetapi setiap warna harus memiliki tujuan spesifik. Membatasi palet Anda mencegah kekacauan visual dan memastikan konsistensi, meskipun Anda dapat menyertakan berbagai nuansa dan rona dari setiap warna inti untuk menambah fleksibilitas."
        },
        {
          question: "Bagaimana memastikan skema warna saya dapat diakses?",
          answer: "Untuk membuat skema warna yang dapat diakses, fokuskan pada kontras antara warna teks dan latar belakang (pedoman WCAG merekomendasikan minimal 4.5:1 untuk teks biasa dan 3:1 untuk teks besar), hindari kombinasi warna yang bermasalah bagi pengguna buta warna (terutama kombinasi merah-hijau), dan jangan hanya mengandalkan warna untuk menyampaikan informasi. Generator kami mencakup fitur aksesibilitas seperti pemeriksaan kontras dan simulasi buta warna untuk membantu Anda membuat desain inklusif. Menguji dengan alat aksesibilitas dan menggabungkan petunjuk visual alternatif (pola, ikon, atau label teks) di samping pengkodean warna akan lebih meningkatkan aksesibilitas."
        },
        {
          question: "Bagaimana menerapkan skema warna secara konsisten dalam proyek?",
          answer: "Penerapan konsisten skema warna memerlukan pendekatan sistematis: Pertama, ekspor palet dalam format yang kompatibel dengan alur kerja Anda (variabel CSS, SCSS, dll.) dan buat konvensi penamaan yang jelas. Selanjutnya, tentukan peran spesifik untuk setiap warna (seperti menggunakan warna utama untuk judul, warna sekunder untuk tombol), buat sistem warna yang terdokumentasi dengan panduan penggunaan, gunakan token desain atau variabel alih-alih nilai hard-coded, dan gunakan pendekatan desain berbasis komponen untuk menerapkan skema Anda di semua komponen. Tinjauan desain rutin dan alat pemeriksaan gaya otomatis dapat membantu mempertahankan konsistensi saat proyek berkembang."
        },
        {
          question: "Bisakah saya menggunakan generator skema warna ini untuk desain cetak?",
          answer: "Ya, generator ini dapat digunakan untuk desain cetak, tetapi memerlukan beberapa pertimbangan tambahan. Saat digunakan untuk cetak, sadari bahwa warna akan tampil berbeda dalam ruang warna CMYK (cetak) versus RGB (layar), jadi gunakan opsi ekspor kami untuk mempratinjau dan menguji dalam lingkungan CMYK. Sesuaikan nilai saturasi dengan hati-hati karena warna dengan saturasi tinggi sering kali tidak tercetak dengan baik. Hasilkan palet yang sedikit lebih besar untuk mengakomodasi pergeseran warna selama proses pencetakan, dan selalu minta sampel fisik sebelum pencetakan skala besar. Harmoni dan hubungan warna yang dibuat generator kami berlaku di berbagai media dan sangat berharga bagi desainer cetak."
        },
        {
          question: "Bagaimana membuat skema warna yang membangkitkan emosi tertentu?",
          answer: "Psikologi warna memainkan peran kunci dalam membangkitkan emosi tertentu. Untuk desain yang energik dan mencolok, gunakan merah, oranye, atau kuning cerah sebagai warna utama atau aksen. Untuk kesan tenang dan dapat dipercaya, sertakan biru dan sian dalam skema Anda. Nuansa hijau bekerja baik untuk pesan terkait pertumbuhan, alam, atau kekayaan. Ungu mengisyaratkan kemewahan atau kreativitas, sementara merah muda menyampaikan sifat bermain atau femininitas. Selain hue, pertimbangkan bagaimana saturasi memengaruhi dampak emosional (saturasi tinggi untuk energi, rendah untuk kecanggihan) dan bagaimana kecerahan memengaruhi persepsi (cerah untuk optimisme, lebih gelap untuk keseriusan). Generator kami memungkinkan kontrol tepat atas variabel ini untuk menyempurnakan resonansi emosional skema warna Anda."
        },
        {
          question: "Bagaimana membuat skema warna yang unik namun tetap mengikuti prinsip desain?",
          answer: "Membuat skema warna yang unik namun harmonis memerlukan keseimbangan strategis: Mulailah dengan aturan harmoni warna yang mapan (komplementer, analog, dll.), tetapi perkenalkan variasi yang terkendali. Bereksperimenlah dengan menggeser parameter tak terduga seperti sedikit menggeser hubungan hue standar, menggabungkan elemen dari teori warna berbeda (misalnya, split komplementer dengan gradien monokromatik), menambahkan warna aksen yang tak terduga, atau mencoba kombinasi saturasi atau kecerahan yang tidak konvensional. Generator kami memfasilitasi ini dengan memungkinkan Anda mengunci warna tertentu sambil menghasilkan ulang yang lain, secara bertahap memperkenalkan keunikan sambil mempertahankan prinsip dasar harmoni warna."
        }
      ]
    },
    bestPractices: {
      title: "Praktik Terbaik untuk Skema Warna yang Efektif",
      intro: "Terapkan prinsip desain warna profesional ini untuk memaksimalkan dampak dan fungsionalitas skema warna yang dihasilkan:",
      items: [
        "Mulailah dengan warna inti merek atau elemen desain yang ada untuk memastikan skema baru mempertahankan konsistensi merek",
        "Prioritaskan desain yang dapat diakses dengan mempertahankan kontras yang memadai antara teks dan latar belakang (minimal 4.5:1)",
        "Batasi palet aktif ke 3-5 warna utama dengan peran fungsional yang jelas (utama, sekunder, aksen, netral) untuk mencegah kekacauan visual",
        "Uji skema warna Anda di berbagai perangkat, kondisi pencahayaan, dan lingkungan untuk memastikan penampilan yang konsisten",
        "Pertimbangkan psikologi warna dan asosiasi budaya saat memilih warna untuk audiens internasional atau multikultural",
        "Gunakan aturan 60-30-10 sebagai titik awal: 60% warna dominan, 30% warna sekunder, dan 10% warna aksen",
        "Buat palet yang diperluas yang mencakup berbagai nuansa dan rona dari setiap warna inti untuk memberikan fleksibilitas sambil mempertahankan harmoni",
        "Terapkan warna secara konsisten berdasarkan fungsionalitas daripada hanya estetika (misalnya, gunakan warna yang sama untuk semua tindakan utama)",
        "Uji skema warna Anda dalam mode skala abu-abu untuk memastikan desain mempertahankan kontras yang memadai tanpa mengandalkan perbedaan warna",
        "Dokumentasikan sistem warna Anda dengan konvensi penamaan dan panduan penggunaan yang tepat untuk implementasi yang konsisten",
        "Pertimbangkan lingkungan dan media tampilan saat menentukan warna akhir (digital vs cetak, mobile vs desktop, indoor vs outdoor)",
        "Tinjau dan optimalkan skema warna Anda secara teratur berdasarkan umpan balik pengguna dan metrik kinerja"
      ]
    }
  }
}