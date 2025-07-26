export default {
  title: 'Pengkodean & Dekode URL: Panduan Lengkap',
  introduction: {
    title: 'Apa itu Pengkodean & Dekode URL?',
    p1: '<strong>Pengkodean & Dekode URL</strong> adalah proses penting dalam pengembangan web yang mengubah karakter khusus ke format yang aman untuk ditransmisikan melalui internet. Ketika Anda memasukkan informasi ke URL, beberapa karakter (seperti spasi, tanda &, dan garis miring) memiliki makna khusus dalam struktur URL. Pengkodean URL mengganti karakter khusus ini dengan tanda persen (%) diikuti dua digit heksadesimal.',
    p2: 'Alat <strong>Pengkodean & Dekode URL</strong> kami menyediakan antarmuka intuitif yang dapat menangani tiga jenis pengkodean: standar (encodeURI), komponen (encodeURIComponent), dan pengkodean penuh untuk semua karakter. Fleksibilitas ini memudahkan pengembang yang menggunakan fungsi <strong>Pengkodean & Dekode URL JavaScript</strong>, metode <strong>Pengkodean & Dekode URL PHP</strong>, atau bahasa pemrograman lainnya untuk menguji dan memverifikasi operasi pengkodean dan dekode mereka.',
    p3: 'Baik Anda menangani pengiriman formulir, permintaan API, atau parameter URL yang kompleks, memahami dan mengimplementasikan teknik <strong>Pengkodean & Dekode URL</strong> dengan benar sangat penting untuk mencegah kerusakan data dan kerentanan keamanan. Panduan komprehensif ini mengeksplorasi berbagai aspek pengkodean dan dekode URL dalam berbagai bahasa pemrograman dan framework.'
  },
  
  applications: {
    title: 'Skenario Aplikasi Praktis',
    scenario1: {
      title: 'Pengembangan Web & Pemrosesan Formulir',
      content: 'Pengembang web sering menggunakan fungsi <strong>Pengkodean & Dekode URL JavaScript</strong> saat menangani formulir untuk memastikan data diformat dengan benar untuk permintaan HTTP. Ketika pengguna mengirimkan formulir yang berisi karakter khusus, spasi, atau karakter non-ASCII, karakter ini harus dikodekan sebelum dikirim ke server. Fungsi <code>encodeURIComponent()</code> dalam JavaScript biasanya digunakan untuk tujuan ini, sementara <code>decodeURIComponent()</code> digunakan untuk mendekode data di sisi penerima.'
    },
    scenario2: {
      title: 'Pengembangan & Integrasi API',
      content: 'Saat mengembangkan atau menggunakan API, pengembang sering perlu menggunakan fungsi <strong>Pengkodean & Dekode URL</strong> dalam berbagai bahasa seperti <strong>Python</strong>, <strong>Java</strong>, atau <strong>Golang</strong>. Parameter kueri dan segmen jalur mungkin berisi karakter khusus yang perlu dikodekan untuk memastikan permintaan terbentuk dengan benar. Misalnya, operasi <strong>Pengkodean & Dekode URL Python</strong> biasanya menggunakan modul <code>urllib.parse</code>, sementara pengembang Java mungkin menggunakan kelas <code>URLEncoder</code> dan <code>URLDecoder</code>.'
    },
    scenario3: {
      title: 'Interaksi Database',
      content: 'Pengembang database terkadang perlu melakukan operasi <strong>Pengkodean & Dekode URL dalam SQL Server</strong> atau sistem database lainnya. Karakter khusus dalam URL dapat mengganggu kueri SQL jika tidak dikodekan dengan benar. Demikian pula, framework seperti <strong>Laravel</strong> menyediakan utilitas untuk menangani pengkodean dan dekode URL dalam operasi database, memastikan integritas data di seluruh siklus hidup aplikasi.'
    },
    scenario4: {
      title: 'Keamanan & Autentikasi',
      content: 'Profesional keamanan menggunakan teknik <strong>Pengkodean & Dekode URL</strong> untuk menganalisis dan menguji kerentanan aplikasi web. Pengkodean URL yang benar membantu mencegah serangan injeksi dan cross-site scripting (XSS). Saat mengimplementasikan sistem autentikasi, pengembang mungkin perlu mengkodekan token atau informasi sensitif lainnya dalam URL. Pustaka seperti <strong>Base64</strong> sering digunakan untuk tugas pengkodean terkait keamanan ini, terutama dalam implementasi JWT (JSON Web Tokens).'
    },
    scenario5: {
      title: 'Lingkungan Pengembangan Multi-Bahasa',
      content: 'Dalam lingkungan multi-bahasa, pengembang mungkin perlu memastikan penggunaan pengkodean URL yang konsisten di seluruh ekosistem pemrograman. Menguji implementasi <strong>Pengkodean & Dekode URL C#</strong> dengan <strong>TypeScript</strong> atau <strong>PHP</strong> mungkin sangat penting untuk menjaga interoperabilitas. Alat online kami berfungsi sebagai titik referensi netral, memungkinkan pengembang memverifikasi perilaku pengkodean dalam implementasi bahasa yang berbeda tanpa perlu menulis kode pengujian tambahan.'
    }
  },
  
  guide: {
    title: 'Cara Menggunakan Alat Pengkodean & Dekode URL',
    step1: {
      title: 'Langkah 1: Pilih Jenis Operasi',
      content: 'Pertama, pilih operasi yang ingin Anda lakukan dari menu dropdown. Pilih "Kodekan URL" untuk mengubah karakter khusus ke format yang aman untuk URL, atau "Dekodekan URL" untuk mengubah karakter yang dikodekan kembali ke bentuk aslinya. Fleksibilitas ini memungkinkan Anda menguji fungsi yang mungkin Anda implementasikan dalam <strong>JavaScript</strong>, <strong>PHP</strong>, atau <strong>Python</strong>.'
    },
    step2: {  
      title: 'Langkah 2: Pilih Mode Pengkodean',
      content: 'Saat memilih "Kodekan URL", pilih dari tiga mode pengkodean yang berbeda untuk memenuhi kebutuhan Anda: <ul><li><strong>Pengkodean Standar (encodeURI)</strong>: Mengkodekan seluruh URL sambil mempertahankan karakter struktur URL seperti garis miring, tanda tanya, dll. Ini setara dengan menggunakan fungsi <code>encodeURI()</code> dalam <strong>JavaScript</strong>.</li><li><strong>Pengkodean Komponen (encodeURIComponent)</strong>: Mengkodekan semua karakter khusus, termasuk karakter yang memiliki makna khusus dalam URL seperti garis miring, tanda tanya, dll. Ini setara dengan menggunakan fungsi <code>encodeURIComponent()</code> dalam <strong>JavaScript</strong>.</li><li><strong>Pengkodean Penuh</strong>: Mengkodekan semua karakter non-alfanumerik, menyediakan metode pengkodean paling komprehensif, mirip dengan fungsi kustom yang diimplementasikan dalam <strong>Java</strong>.</li></ul>'
    },
    step3: {
      title: 'Langkah 3: Masukkan Teks Anda',
      content: 'Selanjutnya, masukkan teks yang ingin Anda kodekan atau dekodekan ke dalam bidang input. Ini bisa berupa URL lengkap, komponen URL, atau string apa pun yang berisi karakter khusus. Jika Anda menguji fungsi yang setara seperti <strong>PHP</strong> atau <strong>Python</strong>, Anda dapat memasukkan string yang sama di sini untuk perbandingan.'
    },
    step4: {
      title: 'Langkah 4: Proses & Gunakan Hasil',
      content: 'Klik tombol "Kodekan URL" atau "Dekodekan URL" untuk memproses input Anda. Hasil akan ditampilkan di bidang output di bawah. Anda dapat menggunakan tombol salin untuk menyalin hasil ke aplikasi Anda, baik Anda menggunakan <strong>C#</strong>, <strong>TypeScript</strong>, atau mengimplementasikan <strong>Pengkodean & Dekode URL dalam Laravel</strong>. Tabel referensi di bagian bawah alat menampilkan karakter pengkodean URL umum untuk referensi Anda.'
    }
  },
  
  faq: {
    title: 'Pertanyaan Umum',
    q1: 'Apa perbedaan antara encodeURI dan encodeURIComponent?',
    a1: 'Dalam operasi <strong>JavaScript</strong>, kedua fungsi ini memiliki tujuan berbeda. <code>encodeURI()</code> dirancang untuk mengkodekan seluruh URL dan mempertahankan karakter struktur URL (seperti <code>/</code>, <code>?</code>, <code>:</code>, <code>=</code>). Ini berguna ketika Anda perlu mengkodekan seluruh URL sambil mempertahankan strukturnya.<br><br><code>encodeURIComponent()</code>, di sisi lain, mengkodekan semua karakter khusus, termasuk karakter yang memiliki makna khusus dalam URL seperti garis miring, tanda tanya, dll. Ini membuatnya sangat cocok untuk mengkodekan komponen URL seperti parameter kueri. Misalnya, jika Anda membangun URL pencarian yang berisi input pengguna, Anda harus menggunakan <code>encodeURIComponent()</code> untuk mengkodekan istilah pencarian, memastikan karakter khusus tidak merusak struktur URL. Sebagian besar implementasi <strong>JavaScript</strong> akan menggunakan <code>encodeURIComponent()</code> untuk pengiriman formulir dan panggilan API.',

    q2: 'Bagaimana cara mengimplementasikan Pengkodean & Dekode URL di PHP?',
    a2: 'Untuk operasi <strong>PHP</strong>, PHP menyediakan fungsi bawaan: <code>urlencode()</code> dan <code>urldecode()</code>. Fungsi <code>urlencode()</code> bekerja mirip dengan <code>encodeURIComponent()</code> dalam JavaScript, mengkodekan semua karakter khusus termasuk spasi (sebagai tanda +). Untuk mengkodekan seluruh URL, PHP menyediakan <code>rawurlencode()</code>, yang mengikuti standar RFC 3986 dan mengkodekan spasi sebagai %20 bukan +.',

    q3: 'Bagaimana cara mengimplementasikan Pengkodean & Dekode URL di Python?',
    a3: 'Dalam <strong>Python</strong>, Anda dapat menggunakan fungsi <code>quote()</code> dan <code>unquote()</code> dari modul <code>urllib.parse</code>. Fungsi <code>quote()</code> mirip dengan <code>encodeURIComponent()</code> dalam JavaScript, mengkodekan semua karakter khusus termasuk spasi (sebagai %20). Fungsi <code>unquote()</code> digunakan untuk mendekode string yang dikodekan URL.' ,

    q4: 'Bisakah saya menggunakan pengkodean Base64 sebagai pengganti pengkodean URL?',
    a4: 'Meskipun teknik <strong>Base64</strong> terkadang digunakan untuk mengkodekan data dalam URL (terutama dalam implementasi JWT), pengkodean Base64 bukanlah pengganti untuk pengkodean URL. Pengkodean Base64 mengubah data biner ke karakter ASCII, tetapi mungkin menghasilkan karakter URL dengan makna khusus seperti +, /, dan =.',

    q5: 'Bagaimana cara menangani Pengkodean URL dalam kueri SQL?',
    a5: 'Melakukan operasi <strong>Pengkodean & Dekode URL dalam SQL Server</strong> biasanya melibatkan penggunaan fungsi bawaan atau membuat fungsi kustom. SQL Server tidak memiliki fungsi bawaan untuk pengkodean URL, tetapi Anda dapat:<br><br>1. Melakukan operasi pengkodean/dekode dalam kode aplikasi sebelum membuat kueri SQL.<br>2. Membuat fungsi yang ditentukan pengguna dalam SQL. Untuk keamanan, biasanya lebih baik menggunakan metode <strong>C#</strong> (untuk aplikasi .NET) atau implementasi spesifik bahasa lainnya dalam kode aplikasi, daripada menangani pengkodean/dekode URL langsung dalam SQL.'
  },
  
  relatedTools: {
    title: 'Alat Terkait',
    tool1: '<a href="https://meyerweb.com/eric/tools/dencoder/" target="_blank" rel="noopener noreferrer">URL Decoder/Encoder</a>',
    tool2: '<a href="https://www.urldecoder.org/" target="_blank" rel="noopener noreferrer">URL Decode and Encode - Online</a>',
    tool3: '<a href="https://www.url-encode-decode.com/" target="_blank" rel="noopener noreferrer">URL Encode Decode - URL Percent Encoding and Decoding.</a>'
  },
  
  resources: {
    title: 'Sumber Daya Eksternal',
    resource1: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" target="_blank" rel="noopener noreferrer">MDN Web Docs: encodeURIComponent()</a> - Dokumentasi rinci tentang fungsi pengkodean URL JavaScript',
    resource2: '<a href="https://www.php.net/manual/en/function.urlencode.php" target="_blank" rel="noopener noreferrer">PHP Manual: urlencode()</a> - Dokumentasi resmi tentang fungsi pengkodean URL PHP',
    resource3: '<a href="https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1" target="_blank" rel="noopener noreferrer">W3C Form Submission Specification</a> - Spesifikasi resmi tentang cara browser mengkodekan data formulir'
  },
  
  conclusion: {
    title: 'Kesimpulan',
    content: 'Alat <strong>Pengkodean & Dekode URL</strong> kami menyediakan solusi serbaguna untuk semua kebutuhan pengkodean dan dekode URL. Baik Anda perlu menguji <strong>JavaScript</strong>, <strong>PHP</strong>, atau <strong>Python</strong>, alat kami memenuhi kebutuhan Anda.'
  }
}
