export default {
  name: 'Pengkode Entitas HTML',
  description: 'Konversi antara teks HTML dan pengkodean entitas',
  title: 'Pengkode/Dekode Entitas HTML',
  intro: 'Pengkodean entitas HTML digunakan untuk mengubah karakter khusus ke format yang aman untuk HTML, sering digunakan untuk mencegah serangan XSS atau menampilkan kode sumber HTML.',
  operation: {
    title: 'Jenis Operasi',
    encode: 'Pengkodean Entitas HTML',
    decode: 'Dekode Entitas HTML'
  },
  mode: {
    title: 'Mode Pengkodean',
    named: 'Entitas bernama (&amp;lt;)',
    decimal: 'Entitas desimal (&amp;#60;)',
    hex: 'Entitas heksadesimal (&amp;#x3C;)',
    full: 'Pengkodean penuh (semua karakter)'
  },
  input: {
    encodeTitle: 'Teks yang akan dikodekan',
    decodeTitle: 'Teks yang akan didekodekan',
    encodePlaceholder: 'Masukkan HTML atau teks yang akan dikodekan...',
    decodePlaceholder: 'Masukkan teks entitas HTML yang akan didekodekan...',
    clear: 'Hapus'
  },
  output: {
    encodeTitle: 'Hasil Pengkodean',
    decodeTitle: 'Hasil Dekode',
    copy: 'Salin Hasil',
    copied: '(Tersalin',
    preview: 'Pratinjau Hasil',
    showSource: 'Tampilkan Kode Sumber'
  },
  reference: {
    title: 'Referensi Entitas',
    commonReferenceTables: 'Tabel Referensi Entitas HTML Umum',
    show: 'Tampilkan Tabel',
    hide: 'Sembunyikan Tabel',
    description: {
      named: 'Gunakan format bernama seperti &amp;lt; untuk &lt; (hanya untuk entitas HTML umum)',
      decimal: 'Gunakan format desimal seperti &amp;#60; untuk &lt;',
      hex: 'Gunakan format heksadesimal seperti &amp;#x3C; untuk &lt;',
      full: 'Kodekan semua karakter non-alfanumerik termasuk spasi, baris baru, dll.'
    },
    table: {
      char: 'Karakter',
      named: 'Entitas Bernama',
      decimal: 'Entitas Desimal',
      description: 'Deskripsi'
    },
    entities: {
      lt: 'Tanda kurang dari',
      gt: 'Tanda lebih dari',
      amp: 'Tanda dan',
      quot: 'Tanda kutip ganda',
      apos: 'Tanda kutip tunggal',
      copy: 'Simbol hak cipta',
      reg: 'Simbol merek terdaftar',
      trade: 'Simbol merek dagang',
      nbsp: 'Spasi tanpa jeda',
      cent: 'Simbol sen',
      pound: 'Simbol pound',
      euro: 'Simbol euro',
      yen: 'Simbol yen/yuan',
      sect: 'Simbol bagian',
      minus: 'Tanda minus',
      times: 'Tanda kali',
      divide: 'Tanda bagi',
      deg: 'Simbol derajat',
      plusmn: 'Tanda plus-minus',
      frac14: 'Seperempat'
    }
  },
  messages: {
    copySuccess: 'Berhasil disalin ke clipboard',
    copyError: 'Gagal menyalin, silakan salin manual',
    encodeSuccess: 'Pengkodean selesai',
    decodeSuccess: 'Dekode selesai',
    invalidInput: 'Teks input tidak valid'
  },
  article: {
    title: "Pengkode Entitas HTML: Alat Penting untuk Keamanan Pengembangan Web",
    features: {
      title: "Memahami Pengkodean Entitas HTML",
      description: "<strong>Pengkode entitas HTML</strong> adalah alat yang dirancang khusus untuk mengubah karakter khusus menjadi <strong>entitas HTML</strong> yang sesuai. Proses ini, disebut <strong>pengkodean HTML</strong>, sangat penting untuk keamanan jaringan dan tampilan konten web yang benar.<br><br>Fungsi inti dari <strong>pengkode entitas</strong> ini adalah mengubah karakter yang mungkin diinterpretasikan sebagai tag HTML (seperti &lt; dan &gt;) menjadi <strong>entitas karakter</strong> yang sesuai (seperti &amp;lt; dan &amp;gt;). Alat ini menyediakan berbagai mode pengkodean termasuk <strong>entitas bernama</strong>, <strong>entitas desimal</strong>, <strong>entitas heksadesimal</strong>, serta <strong>pengkodean penuh</strong> untuk semua karakter non-alfanumerik. Ini juga menyediakan fungsi dasar untuk <strong>mendekode entitas HTML</strong> kembali ke karakter aslinya.",
      useCases: {
        title: "Aplikasi Umum Pengkodean Entitas HTML",
        items: [
          "Pengembang web mengkodekan input pengguna sebelum menampilkannya untuk mencegah serangan cross-site scripting (XSS)",
          "Penulis konten menyematkan cuplikan kode dalam dokumen atau posting blog di mana tag HTML aktual perlu ditampilkan sebagai teks",
          "Admin CMS memastikan karakter khusus dan simbol ditampilkan dengan benar di berbagai browser dan sistem operasi",
          "Desainer template email mengkodekan karakter khusus untuk memastikan tampilan yang konsisten di berbagai klien email",
          "Admin database menyiapkan data HTML untuk penyimpanan dan pengambilan yang aman, menghindari risiko injeksi",
          "Profesional keamanan web mengaudit halaman untuk masalah pengkodean potensial yang dapat menyebabkan kerentanan keamanan"
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Pengkodean Entitas HTML",
      items: [
        {
          question: "Apa perbedaan antara berbagai mode pengkodean entitas HTML?",
          answer: "Entitas bernama (seperti &lt;) menggunakan nama standar yang mudah diingat untuk karakter khusus umum, paling mudah dibaca, tetapi hanya tersedia untuk karakter tertentu. Entitas desimal (seperti &#60;) menggunakan angka desimal yang mewakili titik kode Unicode karakter. Entitas heksadesimal (seperti &#x3C;) juga menggunakan titik kode tetapi dalam format heksadesimal. Pengkodean penuh mengubah semua karakter non-alfanumerik ke bentuk entitasnya, memberikan perlindungan paling menyeluruh tetapi menghasilkan output yang lebih panjang."
        },
        {
          question: "Mengapa pengkodean entitas HTML penting untuk keamanan web?",
          answer: "Pengkodean entitas HTML sangat penting untuk keamanan web karena dapat mencegah serangan cross-site scripting (XSS). Dengan mengkodekan karakter khusus, terutama tanda kurung sudut (< >), konten yang disediakan pengguna akan ditampilkan sebagai teks literal di browser daripada diinterpretasikan sebagai HTML atau JavaScript yang dapat dieksekusi. Tanpa pengkodean yang tepat, pengguna jahat dapat menyuntikkan skrip yang mencuri data, mengalihkan pengguna, atau melakukan tindakan tidak sah. Pengkodean memastikan input pengguna diperlakukan sebagai teks literal bukan kode yang dapat dieksekusi."
        },
        {
          question: "Kapan harus menggunakan pengkodean entitas HTML dibanding jenis pengkodean lain?",
          answer: "Gunakan pengkodean entitas HTML saat menampilkan konten yang dibuat pengguna dalam konteks HTML, seperti konten badan halaman web, atribut, atau template email HTML. Untuk konteks JavaScript, gunakan escape JavaScript. Untuk parameter URL, gunakan pengkodean URL. Untuk nilai CSS, gunakan escape CSS. Pengkodean entitas HTML dirancang khusus untuk merepresentasikan karakter khusus dengan aman dalam dokumen HTML, sementara skema pengkodean lain melayani konteks berbeda dengan pertimbangan keamanannya sendiri."
        },
        {
          question: "Apakah pengkodean entitas HTML memengaruhi tampilan visual konten saya?",
          answer: "Jika diimplementasikan dengan benar, pengkodean entitas HTML tidak akan memengaruhi tampilan visual konten yang dilihat pengguna akhir. Browser akan secara otomatis mendekode dan merender entitas untuk menampilkan karakter aslinya. Misalnya, &amp;copy; akan ditampilkan sebagai © bagi pengguna. Pengkodean hanya terlihat dalam kode sumber. Namun, jika Anda mengkodekan konten yang seharusnya diinterpretasikan sebagai HTML aktual (seperti tag pemformatan), elemen ini akan ditampilkan secara literal daripada dirender."
        },
        {
          question: "Bisakah saya menggunakan pengkodean entitas HTML untuk merepresentasikan semua karakter dan simbol internasional?",
          answer: "Ya, pengkodean entitas HTML dapat merepresentasikan semua karakter Unicode, membuatnya cocok untuk karakter internasional, simbol, dan emoji. Meskipun karakter khusus umum memiliki entitas bernama (seperti &amp;euro; untuk €), semua karakter dapat dikodekan menggunakan format entitas berbasis titik kode Unicode mereka dalam desimal (&#8364;) atau heksadesimal (&#x20AC;). Namun, untuk teks internasional dalam jumlah besar, pertimbangkan untuk menggunakan pengkodean karakter UTF-8 untuk dokumen HTML Anda sambil melakukan pengkodean entitas selektif untuk karakter khusus."
        }
      ]
    },
    guide: {
      title: "Panduan Penggunaan Pengkode Entitas HTML",
      steps: [
        "Pilih jenis operasi: Pilih 'Pengkodean Entitas HTML' untuk mengubah karakter khusus menjadi entitas HTML, atau pilih 'Dekode Entitas HTML' untuk mengubah entitas kembali ke karakter",
        "Jika melakukan pengkodean, pilih mode pengkodean yang Anda sukai: entitas bernama untuk kode bernama yang mudah dibaca, entitas desimal untuk kode numerik, entitas heksadesimal untuk kode berbasis heksadesimal, atau pengkodean penuh untuk konversi karakter maksimal",
        "Masukkan teks Anda di bidang yang sesuai - baik teks yang akan dikodekan atau teks entitas HTML yang akan didekodekan",
        "Klik tombol 'Kodekan' atau 'Dekode' sesuai dengan operasi yang Anda pilih",
        "Tinjau hasil yang ditampilkan di bawah. Untuk konten yang dikodekan, Anda dapat beralih antara melihat kode sumber dan pratinjau yang dirender",
        "Salin hasil ke clipboard dengan mengklik tombol 'Salin Hasil' untuk digunakan di halaman web atau aplikasi Anda",
        "Sebagai referensi, lihat tabel referensi entitas HTML umum di bagian bawah halaman untuk melihat entitas HTML umum dan representasinya"
      ]
    },
    conclusion: "Pengkodean entitas HTML adalah praktik penting bagi pengembang web dan pembuat konten yang mengutamakan keamanan dan tampilan yang benar di berbagai platform. Dengan menggunakan alat pengkode entitas HTML ini, Anda dapat memastikan konten web Anda ditampilkan dengan benar sekaligus mencegah serangan injeksi kode yang berpotensi berbahaya. Baik Anda mengembangkan aplikasi web, membuat dokumen, atau mengelola sistem konten, pengkodean entitas HTML yang tepat harus menjadi bagian standar dari alur kerja pengembangan web Anda yang aman dan konsisten."
  }
}