export default {
  name: 'Generator Mock API',
  description: 'Hasilkan Mock API secara otomatis berdasarkan spesifikasi OpenAPI',
  options: {
    version: 'Versi OpenAPI',
    format: 'Format Output',
    includeExamples: 'Sertakan contoh respons',
    responseDynamism: 'Dinamisme Respons',
    responseType: 'Tipe Respons',
    arrayLength: 'Panjang Array',
    responseFormat: 'Format Respons'
  },
  formats: {
    json: 'JSON Server',
    express: 'Express.js',
    mockjs: 'Mock.js',
    msw: 'Mock Service Worker'
  },
  actions: {
    generate: 'Hasilkan Mock',
    preview: 'Pratinjau API',
    clear: 'Bersihkan',
    copy: 'Salin Kode',
    download: 'Unduh',
    uploadSpec: 'Unggah Spesifikasi OpenAPI',
    uploadJava: 'Unggah File Kelas Java',
    generateJson: 'Hasilkan JSON',
    generateBuilder: 'Hasilkan Builder',
    format: 'Perindah'
  },
  messages: {
    copied: 'Tersalin ke clipboard!',
    generationSuccess: 'Pembuatan Mock API berhasil',
    generationError: 'Terjadi kesalahan saat membuat Mock API',
    specRequired: 'Harap berikan spesifikasi OpenAPI',
    fileUploaded: 'Berhasil diunggah',
    parseError: 'Gagal mem-parsing kelas Java, pastikan format file benar'
  },
  help: {
    uploadHint: 'Mendukung unggahan file .java, parsing otomatis struktur kelas untuk membuat konfigurasi Mock. Belum mendukung properti objek bertingkat'
  },
  fields: {
    title: 'Definisi Field',
    addField: 'Tambah Field',
    addChildField: 'Tambah Sub Field',
    fieldName: 'Nama Field'
  },
  fieldTypes: {
    string: 'String',
    number: 'Angka',
    boolean: 'Boolean',
    date: 'Tanggal',
    name: 'Nama',
    email: 'Email',
    phone: 'Telepon',
    address: 'Alamat',
    id: 'ID',
    image: 'URL Gambar',
    array: 'Array',
    object: 'Objek'
  },
  array: {
    itemType: 'Tipe Item Array',
    arrayFields: 'Field Array'
  },
  object: {
    childFields: 'Sub Field'
  },
  responseTypes: {
    object: 'Objek Tunggal',
    array: 'Array Objek',
    custom: 'Struktur Kustom'
  },
  responseFormats: {
    dataOnly: 'Hanya Data',
    standard: 'Respons REST Standar (code, data, message)'
  },
  placeholder: {
    output: '// Data Mock yang dihasilkan akan muncul di sini'
  },
  article: {
    title: "Memahami Aplikasi Generator Mock API dalam Pengembangan Frontend",
    overview: {
      title: "Apa itu Generator Mock API?",
      content: "<strong>Generator Mock API</strong> adalah alat khusus yang dapat membuat endpoint API simulasi dan respons berdasarkan spesifikasi OpenAPI atau definisi field kustom. Alat pengembangan yang kuat ini membantu pengembang frontend bekerja secara independen dari tim backend dengan menyediakan struktur data realistis yang meniru perilaku API sebenarnya.<br><br>Generator Mock API membuat endpoint yang berfungsi penuh yang mengembalikan data terstruktur dan konsisten sesuai spesifikasi Anda. Ini memungkinkan pengembangan frontend berjalan tanpa menunggu implementasi backend sebenarnya, secara signifikan mempercepat proses pengembangan dan memungkinkan alur kerja paralel."
    },
    useCases: {
      title: "Skenario Umum Penggunaan Mock API",
      items: [
        {
          title: "Pengembangan Frontend Sebelum Backend Selesai",
          description: "Ketika API backend masih dalam pengembangan atau belum diimplementasikan, mock API memungkinkan pengembang frontend mulai membangun komponen UI dengan struktur data realistis, menghindari hambatan pengembangan."
        },
        {
          title: "Prototyping dan Pengujian UI",
          description: "Buat prototipe cepat atau uji komponen UI menggunakan kumpulan data terkontrol, memungkinkan desainer dan pengembang memvalidasi antarmuka dengan data realistis tanpa terhubung ke layanan backend sebenarnya."
        },
        {
          title: "Pengembangan Offline",
          description: "Memungkinkan pengembang bekerja di lingkungan offline atau tanpa akses ke API produksi/staging dengan menyediakan server mock API lokal yang meniru respons API sebenarnya."
        },
        {
          title: "Pengujian Kasus Edge",
          description: "Hasilkan respons API spesifik yang mereplikasi kasus edge atau kondisi error yang sulit dipicu di lingkungan backend sebenarnya, memungkinkan pengujian menyeluruh terhadap penanganan error dan kondisi batas."
        },
        {
          title: "Pengujian Performa",
          description: "Buat mock API dengan waktu respons atau ukuran beban berbeda untuk menguji bagaimana komponen frontend menangani berbagai skenario performa, dari kondisi optimal hingga degradasi."
        },
        {
          title: "Lingkungan Demo",
          description: "Bangun lingkungan demo yang berfungsi penuh tanpa perlu terhubung ke layanan backend sebenarnya, sangat cocok untuk presentasi penjualan, pelatihan, atau tujuan pameran."
        }
      ]
    },
    guide: {
      title: "Cara Menggunakan Generator Mock API",
      intro: "Ikuti langkah-langkah ini untuk membuat dan menggunakan mock API secara efektif untuk mendukung alur kerja pengembangan Anda:",
      steps: [
        {
          title: "Pilih Metode Input",
          description: "Pertama, pilih bagaimana Anda ingin mendefinisikan struktur API. Anda dapat mengunggah spesifikasi OpenAPI (direkomendasikan untuk konsistensi dengan API sebenarnya), mengunggah file kelas Java untuk mengekstrak struktur data secara otomatis, atau mendefinisikan field dan tipe secara manual melalui antarmuka."
        },
        {
          title: "Definisikan Struktur Data",
          description: "Jika tidak menggunakan spesifikasi OpenAPI, definisikan struktur data mock dengan menambahkan field dan menetapkan tipenya (string, angka, boolean, tanggal, dll.). Untuk struktur kompleks, buat objek bersarang atau array objek untuk mencocokkan model data API sebenarnya."
        },
        {
          title: "Konfigurasi Opsi Output",
          description: "Pilih format output yang diinginkan (JSON Server, Express.js, Mock.js, atau Mock Service Worker) sesuai kebutuhan proyek. Sesuaikan pengaturan lain seperti dinamisme respons (seberapa acak data yang dihasilkan), panjang array, dan format respons."
        },
        {
          title: "Hasilkan Kode Mock API",
          description: "Klik tombol \"Hasilkan Mock\" untuk membuat kode mock API berdasarkan spesifikasi Anda. Alat ini akan memproses input Anda dan menghasilkan kode yang mensimulasikan endpoint API dan respons yang telah ditentukan."
        },
        {
          title: "Tinjau dan Salin Kode yang Dihasilkan",
          description: "Periksa kode mock API yang dihasilkan untuk memastikannya memenuhi persyaratan Anda. Anda dapat menyalin kode ke clipboard atau mengunduhnya sebagai file untuk diintegrasikan dengan proyek Anda."
        },
        {
          title: "Integrasikan dengan Lingkungan Pengembangan",
          description: "Sesuaikan dengan format yang Anda pilih, integrasikan mock API yang dihasilkan dengan lingkungan pengembangan Anda. Ini mungkin melibatkan penyiapan JSON Server, penambahan rute Express.js, konfigurasi Mock.js, atau implementasi Mock Service Worker di aplikasi Anda."
        },
        {
          title: "Hubungkan ke Aplikasi Frontend",
          description: "Perbarui aplikasi frontend Anda untuk terhubung ke endpoint mock API alih-alih layanan backend sebenarnya. Ini biasanya melibatkan perubahan URL dasar permintaan API untuk mengarah ke server mock lokal atau interceptor."
        }
      ]
    },
    bestPractices: {
      title: "Praktik Terbaik Pengembangan Mock API",
      intro: "Ikuti rekomendasi ini untuk membuat mock API yang efektif dan mudah dikelola:",
      items: [
        "Gunakan spesifikasi OpenAPI bila memungkinkan untuk memastikan mock API Anda mencerminkan struktur API sebenarnya secara akurat",
        "Cerminkan struktur respons persis yang akan digunakan API sebenarnya, termasuk format paginasi, respons error, dan metadata",
        "Sertakan kasus edge realistis dalam data mock, seperti array kosong, nilai null, dan berbagai status error",
        "Untuk data dinamis seperti tanggal atau ID, gunakan fungsi alih-alih nilai statis untuk meniru perilaku dunia nyata",
        "Versikan mock API bersama kode frontend untuk mempertahankan kompatibilitas historis selama pengembangan",
        "Pertimbangkan penggunaan variabel lingkungan untuk beralih antara mock dan API sebenarnya berdasarkan konteks pengembangan",
        "Dokumentasikan penyimpangan apa pun antara mock dan API sebenarnya untuk mencegah kebingungan selama integrasi",
        "Terapkan simulasi latensi yang konsisten untuk menguji bagaimana UI Anda menangani status pemuatan",
        "Otomatisasi pembuatan layanan mock dalam pipeline build untuk memastikannya tetap sinkron dengan perubahan API",
        "Sertakan logika validasi dalam mock API untuk meniru batasan yang sama yang akan diterapkan API sebenarnya"
      ]
    },
    faq: {
      title: "Pertanyaan Umum tentang Pembuatan Mock API",
      items: [
        {
          question: "Apa perbedaan antara format output yang tersedia?",
          answer: "JSON Server menyediakan REST API sederhana berbasis file JSON, cocok untuk kebutuhan dasar. Express.js menawarkan lebih banyak penyesuaian dan kontrol routing untuk skenario kompleks. Mock.js terintegrasi langsung dengan JavaScript untuk mengintercept permintaan AJAX di browser. Mock Service Worker (MSW) menggunakan Service Workers untuk mengintercept permintaan di tingkat jaringan, memungkinkan peralihan mulus antara mock dan API sebenarnya tanpa mengubah kode."
        },
        {
          question: "Bisakah saya membuat respons mock yang berubah setiap kali?",
          answer: "Ya, opsi 'Dinamisme Respons' mengontrol seberapa banyak data mock Anda bervariasi. Dinamisme rendah berarti respons konsisten untuk setiap permintaan, sementara dinamisme tinggi menghasilkan nilai berbeda dalam tipe data yang ditentukan. Anda juga dapat mengimplementasikan logika kustom dalam format Express.js atau MSW untuk perilaku dinamis yang lebih kompleks."
        },
        {
          question: "Bagaimana cara menangani autentikasi dalam mock API?",
          answer: "Untuk JSON Server, Anda dapat menggunakan plugin json-server-auth. Dengan Express.js, implementasikan middleware untuk memeriksa token autentikasi. Untuk Mock.js dan MSW, Anda dapat mengintercept permintaan autentikasi dan mengembalikan token atau error yang sesuai berdasarkan kredensial yang diberikan, meniru alur autentikasi sebenarnya."
        },
        {
          question: "Bisakah saya mensimulasikan error jaringan atau respons lambat?",
          answer: "Ya. Di Express.js, Anda dapat menggunakan middleware untuk secara acak memperkenalkan latensi atau error. Dengan MSW, Anda dapat menggunakan fungsi ctx.delay() untuk menambahkan latensi atau mengembalikan respons error. Untuk JSON Server, Anda dapat menggunakan flag --delay untuk menambahkan latensi tetap ke semua respons."
        },
        {
          question: "Bagaimana cara beralih antara mock dan API sebenarnya di lingkungan produksi?",
          answer: "Untuk MSW, gunakan variabel lingkungan untuk mengaktifkan service worker secara kondisional. Untuk metode lain, gunakan nilai konfigurasi untuk mengubah URL dasar API atau implementasikan proxy yang merutekan permintaan sesuai kebutuhan. Ini memungkinkan Anda beralih dengan mudah antara endpoint mock dan sebenarnya selama pengembangan dan pengujian."
        },
        {
          question: "Bisakah saya menghasilkan data realistis alih-alih teks lorem ipsum?",
          answer: "Ya, Generator Mock API mencakup tipe field khusus seperti 'Nama', 'Email', 'Telepon', 'Alamat', dan 'URL Gambar' yang menghasilkan data realistis untuk field umum ini. Untuk skenario lebih lanjut, pertimbangkan menggunakan library seperti Faker.js dengan format output Express.js atau MSW."
        },
        {
          question: "Bagaimana cara menangani unggahan file dalam mock API?",
          answer: "Untuk output Express.js, Anda dapat mengimplementasikan rute yang menerima permintaan multipart/form-data dan mengembalikan respons yang sesuai. Dengan MSW, Anda dapat mengintercept permintaan unggahan file dan mensimulasikan pemrosesan sebelum mengembalikan respons sukses. Ini memungkinkan Anda menguji komponen UI unggahan file tanpa pemrosesan file sebenarnya."
        }
      ]
    },
    advancedTips: {
      title: "Teknik Integrasi Mock API Tingkat Lanjut",
      intro: "Bawa implementasi mock API Anda ke level berikutnya dengan teknik integrasi canggih ini:",
      items: [
        "Implementasikan perilaku stateful dalam mock API untuk mensimulasikan persistensi antar permintaan, seperti mengembalikan item yang baru dibuat dalam permintaan GET berikutnya",
        "Gabungkan validasi OpenAPI dengan server mock untuk memastikan permintaan frontend memenuhi persyaratan spesifikasi API",
        "Buat manajer skenario yang memungkinkan Anda beralih antara kumpulan data yang telah ditentukan untuk menguji berbagai skenario bisnis",
        "Implementasikan paginasi realistis dengan metadata dan tautan yang tepat untuk menguji kontrol paginasi UI secara efektif",
        "Gunakan service worker mock dengan GraphQL untuk mensimulasikan respons query kompleks sambil mempertahankan type safety",
        "Buat pendekatan hybrid yang memproksi beberapa permintaan ke layanan backend sebenarnya sambil mensimulasikan layanan lain yang belum tersedia",
        "Implementasikan simulasi websocket untuk menguji fungsionalitas real-time tanpa implementasi backend",
        "Siapkan pengujian integrasi berkelanjutan yang menggunakan mock API untuk memvalidasi perilaku frontend secara otomatis",
        "Buat layanan direktori mock API yang memungkinkan pengembang menelusuri dan memilih endpoint mock yang tersedia di organisasi Anda",
        "Implementasikan template respons yang mengubah respons mock secara dinamis berdasarkan parameter atau header permintaan"
      ]
    }
  }
}