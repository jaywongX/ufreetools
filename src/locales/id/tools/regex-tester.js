export default {
  name: 'Penguji Ekspresi Reguler',
  description: 'Uji dan debug ekspresi reguler dengan penyorotan dan penjelasan waktu nyata',
  actions: {
    test: 'Uji',
    clear: 'Hapus',
    showExamples: 'Tampilkan Contoh',
    hideExamples: 'Sembunyikan Contoh',
    copy: 'Salin'
  },
  sections: {
    examples: 'Contoh Ekspresi Reguler Umum',
    pattern: 'Pola Ekspresi Reguler',
    input: 'String Uji',
    results: 'Hasil Pencocokan',
    flags: 'Flag'
  },
  flags: {
    g: 'Pencocokan Global (g)',
    i: 'Abaikan Huruf Besar/Kecil (i)',
    m: 'Mode Multi-baris (m)',
    s: 'Titik Cocok Semua (s)',
    u: 'Mode Unicode (u)',
    y: 'Pencocokan Lengket (y)'
  },
  errors: {
    emptyRegex: 'Masukkan ekspresi reguler',
    emptyTestString: 'Masukkan teks untuk diuji',
    invalidRegex: 'Ekspresi reguler tidak valid'
  },
  messages: {
    matchesFound: 'Ditemukan {count} hasil cocok',
    noMatches: 'Tidak ada hasil yang cocok',
    copied: 'Tersalin ke clipboard!'
  },
  placeholders: {
    pattern: 'Masukkan pola ekspresi reguler',
    testString: 'Masukkan teks untuk diuji'
  },
  options: {
    flags: 'Flag',
    global: 'Pencocokan Global (g)',
    caseInsensitive: 'Abaikan Huruf Besar/Kecil (i)',
    multiline: 'Mode Multi-baris (m)',
    dotAll: 'Titik Cocok Semua (s)',
    unicode: 'Mode Unicode (u)',
    sticky: 'Pencocokan Lengket (y)'
  },
  labels: {
    pattern: 'Ekspresi Reguler',
    testString: 'String Uji',
    matches: 'Hasil Pencocokan',
    groups: 'Grup',
    noMatches: 'Tidak ada hasil yang cocok'
  },
  tips: {
    title: 'Tips Penggunaan',
    pattern: 'Saat memasukkan pola ekspresi reguler, tidak perlu menyertakan garis miring di kedua sisi.',
    flags: 'Gunakan flag untuk memodifikasi perilaku pencocokan pola (g: global, i: tidak peka huruf besar/kecil, m: multi-baris).',
    examples: 'Klik "Tampilkan Contoh" untuk melihat dan menggunakan pola ekspresi reguler yang umum.',
    testing: 'Setelah memasukkan pola dan string uji, klik "Uji" untuk melihat hasil pencocokan.'
  },
  article: {
    title: "Penguji Ekspresi Reguler: Alat Pencocokan Pola Interaktif",
    features: {
      title: "Memahami Ekspresi Reguler dan Pencocokan Pola",
      description: "<strong>Penguji Ekspresi Reguler</strong> adalah alat interaktif yang kuat, dirancang khusus untuk pengembang, analis data, dan profesional pemrosesan teks untuk membuat, menguji, dan mengekspresi reguler (regex). Ekspresi reguler adalah urutan karakter khusus yang mendefinisikan pola pencarian, memungkinkan pencocokan, ekstraksi, dan manipulasi teks yang kompleks.<br><br><strong>Alat pengujian ekspresi reguler</strong> kami memberikan umpan balik visual waktu nyata saat Anda membangun pola, langsung menyorot hasil yang cocok dalam teks uji, dan menampilkan detail tentang grup tangkapan dan lokasi pencocokan. Lingkaran umpan balik instan ini memudahkan Anda memahami bagaimana pola ekspresi reguler berinteraksi dengan berbagai input teks, membantu Anda dengan cepat mengidentifikasi dan memperbaiki masalah dalam ekspresi.",
      useCases: {
        title: "Aplikasi Praktis Ekspresi Reguler",
        items: [
          "<strong>Validasi Formulir</strong>: Pengembang web dapat menggunakan <strong>penguji pola ekspresi reguler</strong> ini untuk menyempurnakan ekspresi yang digunakan untuk memvalidasi alamat email, nomor telepon, kata sandi, dan bidang input lainnya. Dengan menguji terhadap berbagai contoh yang valid dan tidak valid, Anda dapat memastikan logika validasi menangkap format yang salah sambil menerima semua entri yang valid.",
          
          "<strong>Ekstraksi Data</strong>: Saat menangani data teks tidak terstruktur, ekspresi reguler menyediakan cara yang kuat untuk mengekstrak informasi spesifik. <strong>Alat pencocokan pola</strong> kami membantu analis data mengembangkan ekspresi untuk mengekstrak tanggal, harga, kode produk, atau data terstruktur lainnya dari dokumen teks, log, atau hasil scraping web.",
          
          "<strong>Pemrosesan dan Manipulasi Teks</strong>: Editor konten dan pengembang dapat menggunakan pola ekspresi reguler untuk menemukan dan mengganti pola teks tertentu di beberapa dokumen. <strong>Validator ekspresi reguler</strong> memudahkan verifikasi bahwa pola pencarian hanya cocok dengan konten yang ingin Anda ubah tanpa memengaruhi yang lain.",
          
          "<strong>Analisis File Log</strong>: Administrator sistem dan insinyur DevOps sering menggunakan ekspresi reguler untuk mem-parsing dan menganalisis file log. <strong>Penguji ekspresi</strong> ini membantu membangun pola yang dapat secara akurat mengidentifikasi pesan kesalahan, peringatan, atau peristiwa tertentu dalam volume besar data log.",
          
          "<strong>Pengembangan Kueri Pencarian</strong>: Saat membangun fungsi pencarian lanjutan, ekspresi reguler dapat mendukung pencocokan teks yang kompleks. Alat kami membantu pengembang menguji dan mengoptimalkan pola ekspresi reguler yang digunakan dalam mesin pencari, editor kode, atau kueri basis data, memastikan hasil yang tepat.",
          
          "<strong>Tujuan Pendidikan</strong>: Siswa dan profesional yang mempelajari ekspresi reguler dapat menggunakan <strong>alat ekspresi reguler interaktif</strong> ini untuk mencoba berbagai pola dan langsung melihat hasilnya, mempercepat proses pembelajaran dan membantu membangun pemahaman intuitif tentang cara kerja berbagai komponen ekspresi reguler."
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Ekspresi Reguler",
      items: [
        {
          question: "Apa itu ekspresi reguler dan mengapa mereka berguna?",
          answer: "Ekspresi reguler (regex atau regexp) adalah string teks khusus yang mendefinisikan pola pencarian. Mereka pada dasarnya adalah bahasa pemrograman mikro yang sangat terspesialisasi yang tertanam dalam banyak bahasa pemrograman dan alat.<br><br>Ekspresi reguler sangat berguna karena memungkinkan Anda:<br><br>• <strong>Mencari pola tertentu dalam teks</strong>, bukan hanya pencocokan string yang tepat<br>• <strong>Memvalidasi format teks</strong>, seperti alamat email, nomor telepon, atau tanggal<br>• <strong>Mengekstrak bagian tertentu</strong> dari dokumen yang lebih besar<br>• <strong>Mengganti atau memodifikasi teks berdasarkan pencocokan pola</strong><br>• <strong>Membagi teks pada batas pola tertentu</strong><br><br>Kekuatan mereka terletak pada kemampuan untuk menggabungkan blok pola sederhana menjadi ekspresi kompleks yang dapat mengenali struktur teks yang sangat spesifik. <strong>Penguji pola ekspresi reguler</strong> kami membantu Anda memanfaatkan kekuatan ini sambil menghindari frustrasi dalam mengekspresi kompleks."
        },
        {
          question: "Apa arti dari berbagai flag ekspresi reguler (g, i, m, s, u, y)?",
          answer: "Flag ekspresi reguler memodifikasi perilaku pencocokan pola:<br><br>• <strong>g (global)</strong>: Temukan semua hasil yang cocok, bukan berhenti setelah yang pertama. Tanpa flag ini, ekspresi reguler hanya akan mengembalikan hasil pertama.<br><br>• <strong>i (ignore case)</strong>: Membuat pola mencocokkan huruf besar dan kecil. Misalnya, /hello/i akan mencocokkan 'hello', 'Hello', 'HELLO', dll.<br><br>• <strong>m (multiline)</strong>: Mengubah perilaku ^ dan $ sehingga mereka mencocokkan awal/akhir setiap baris, bukan hanya awal/akhir seluruh string.<br><br>• <strong>s (dotall)</strong>: Membuat titik (.) juga mencocokkan karakter baris baru (\\n). Biasanya, titik mencocokkan karakter apa pun kecuali baris baru.<br><br>• <strong>u (unicode)</strong>: Memperlakukan pola sebagai urutan titik kode Unicode. Memungkinkan pencocokan karakter dan properti Unicode yang benar.<br><br>• <strong>y (sticky)</strong>: Hanya mencocokkan dari posisi yang ditunjukkan oleh properti lastIndex objek ekspresi reguler (penggunaan lanjutan).<br><br>Dalam <strong>alat pengujian ekspresi reguler</strong> kami, Anda dapat mengaktifkan flag ini untuk melihat bagaimana mereka memengaruhi perilaku pencocokan pola."
        },
        {
          question: "Bagaimana cara kerja grup tangkapan dalam ekspresi reguler?",
          answer: "Grup tangkapan memungkinkan Anda mengekstrak bagian tertentu dari teks yang cocok, didefinisikan oleh tanda kurung () dalam pola.<br><br>Misalnya, dalam pola <code>([A-Z]\\w+) (\\d{4})</code>:<br><br>• Grup pertama <code>([A-Z]\\w+)</code> menangkap kata yang dimulai dengan huruf besar<br>• Grup kedua <code>(\\d{4})</code> menangkap 4 digit angka<br><br>Ketika ditemukan kecocokan, kecocokan lengkap dan setiap grup tangkapan dapat digunakan secara terpisah. Dalam <strong>validator ekspresi reguler</strong> kami, grup tangkapan ditampilkan di bagian detail pencocokan, menunjukkan dengan tepat teks yang ditangkap oleh setiap grup.<br><br>Grup tangkapan juga dapat dirujuk dalam pola itu sendiri menggunakan referensi balik (\\1, \\2, dll.), sangat berguna untuk operasi pencarian dan penggantian yang kompleks atau ketika perlu mengekstrak informasi spesifik dari teks yang lebih besar."
        },
        {
          question: "Mengapa ekspresi reguler saya tidak mencocokkan seperti yang diharapkan?",
          answer: "Debugging ekspresi reguler bisa menjadi tantangan. Berikut adalah masalah umum dan solusinya:<br><br>1. <strong>Karakter khusus</strong>: Untuk mencocokkan karakter ini secara harfiah, gunakan backslash (\\) untuk meng-escape mereka.<br><br>2. <strong>Keserakahan</strong>: Secara default, quantifier seperti <code>*</code> dan <code>+</code> bersifat serakah, mencocokkan sebanyak mungkin karakter. Tambahkan <code>?</code> setelah mereka (<code>*?</code> atau <code>+?</code>) untuk membuat mereka tidak serakah.<br><br>3. <strong>Flag yang hilang</strong>: Periksa apakah Anda memerlukan flag global (g) untuk menemukan semua kecocokan, atau flag case-insensitive (i) untuk pencocokan yang tidak peka huruf besar/kecil.<br><br>4. <strong>Spasi dan karakter tak terlihat</strong>: Hati-hati dengan spasi, tab, baris baru, dan karakter tak terlihat lainnya dalam string uji.<br><br>5. <strong>Penyalahgunaan anchor</strong>: <code>^</code> dan <code>$</code> mengikat pola untuk mencocokkan awal atau akhir teks (atau awal/akhir baris dengan flag 'm').<br><br><strong>Alat pencocokan pola</strong> kami membantu mengidentifikasi masalah ini dengan memberikan umpan balik visual waktu nyata, menyoroti kecocokan, dan menampilkan informasi pencocokan yang rinci."
        }
      ]
    },
    guide: {
      title: "Cara Menggunakan Penguji Ekspresi Reguler: Panduan Langkah demi Langkah",
      step1: "<strong>Masukkan pola ekspresi reguler</strong>: Di bidang input yang diberi label 'Ekspresi Reguler', masukkan ekspresi reguler Anda. Anda tidak perlu menyertakan garis miring di sekitarnya - ini akan ditambahkan secara otomatis di UI.",
      step2: "<strong>Pilih flag yang sesuai</strong>: Pilih flag yang memodifikasi cara kerja pola. Pilihan umum termasuk 'g' (global) untuk menemukan semua kecocokan alih-alih hanya yang pertama, 'i' (case-insensitive) untuk mengabaikan perbedaan huruf besar/kecil, dan 'm' (multiline) jika Anda bekerja dengan teks yang mencakup beberapa baris.",
      step3: "<strong>Masukkan teks uji</strong>: Di area 'String Uji', masukkan teks yang ingin Anda uji terhadap ekspresi reguler. Ini bisa berupa data contoh, teks contoh yang berisi pola yang ingin dicocokkan, atau teks yang tidak cocok seperti yang diharapkan.",
      step4: "<strong>Klik tombol 'Uji'</strong>: Setelah mengatur pola dan teks uji, klik tombol 'Uji' untuk melihat hasilnya. Alat akan memproses pola ekspresi reguler terhadap teks uji dan menampilkan semua kecocokan yang ditemukan.",
      step5: "<strong>Analisis hasil pencocokan</strong>: Bagian hasil akan menyoroti semua kecocokan dalam teks uji, memudahkan konfirmasi visual apakah pola Anda cocok dengan yang diharapkan. Untuk setiap kecocokan, Anda akan melihat detail termasuk teks yang cocok persis, posisinya dalam string, dan grup apa pun yang ditangkap.",
      step6: "<strong>Sempurnakan pola Anda</strong>: Berdasarkan hasil, Anda mungkin perlu menyesuaikan pola. Jika mencocokkan terlalu banyak atau terlalu sedikit teks, atau tidak menemukan kecocokan seperti yang diharapkan, modifikasi pola ekspresi reguler dan uji lagi. Proses iteratif ini membantu Anda menentukan pola yang tepat untuk kebutuhan Anda.",
      step7: "<strong>Jelajahi pola contoh</strong>: Jika Anda terjebak atau membutuhkan inspirasi, klik 'Tampilkan Contoh' untuk melihat pola ekspresi reguler umum untuk email, nomor telepon, tanggal, dll. Anda dapat mengklik contoh apa pun untuk memuatnya ke penguji, lalu memodifikasinya sesuai kebutuhan spesifik Anda."
    },
    conclusion: "Penguji Ekspresi Reguler menyederhanakan proses kompleks membuat dan men-debug pola ekspresi reguler dengan memberikan umpan balik visual waktu nyata, memecah setiap komponen yang cocok, menjembatani kesenjangan antara sintaks pola abstrak dan aplikasi pemrosesan teks yang sebenarnya. Baik Anda memvalidasi input pengguna, mengekstrak data dari dokumen, atau mempelajari ekspresi reguler untuk pertama kalinya, alat interaktif ini membantu Anda membangun kepercayaan diri dan kemahiran. Karena pemrosesan teks terus menjadi tugas mendasar dalam pengembangan, analisis data, dan manajemen konten, menguasai ekspresi reguler dengan bantuan alat visual menjadi keterampilan yang semakin berharga bagi para profesional teknologi."
  },
  match: 'Cocok',
  position: 'Posisi',
  group: 'Grup',
  resultsWillAppearHere: 'Hasil pencocokan ekspresi reguler akan muncul di sini...',
  regexError: 'Kesalahan ekspresi reguler: {message}',
  emailAddress: 'Alamat Email',
  phoneNumber: 'Nomor Telepon (China)',
  ipAddress: 'Alamat IP',
  dateFormat: 'Format Tanggal (yyyy-mm-dd)',
  chineseCharacters: 'Karakter Cina',
  phoneNumberExample: 'Kontak: 13912345678\nNomor WeChat sama: 18887654321\nTelepon rumah: 010-12345678',
  urlExample: 'Kunjungi https://example.com\natau http://www.domain.org/path?query=value',
  ipAddressExample: 'Alamat server: 192.168.1.1\nDNS: 8.8.8.8, 114.114.114.114',
  dateFormatExample: 'Tanggal mulai: 2023-01-15\nTanggal berakhir: 2023-02-28\nTanggal tidak valid: 2023-13-45',
  chineseCharactersExample: 'Hello dunia! Halo, World!'
}