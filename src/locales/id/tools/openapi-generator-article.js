export default {
  title: "OpenAPI ke TypeScript: Otomatisasi Pembuatan Klien API",
  overview: {
    title: "Memahami Generator OpenAPI ke TypeScript",
    content: "<strong>Generator Klien TypeScript dari OpenAPI</strong> adalah alat khusus yang secara otomatis mengubah spesifikasi OpenAPI (sebelumnya disebut Swagger) menjadi antarmuka TypeScript dan kode klien API yang lengkap. Konversi ini menyederhanakan proses pengembangan frontend dengan memastikan type safety dan menghilangkan kebutuhan menulis kode integrasi API secara manual.<br><br>Spesifikasi OpenAPI berfungsi sebagai kontrak terstandarisasi antara frontend dan layanan backend, yang mendeskripsikan endpoint yang tersedia, parameter request, struktur response, dan model data. Dengan memanfaatkan generator ini, developer dapat fokus membangun fungsionalitas daripada memelihara kode integrasi API, sekaligus mendapatkan manfaat dari sistem tipe kuat TypeScript yang menangkap potensi error pada waktu kompilasi daripada runtime."
  },
  useCases: {
    title: "Kasus Penggunaan Umum untuk Generasi OpenAPI ke TypeScript",
    items: [
      {
        title: "Pengembangan Frontend untuk API Kompleks",
        description: "Saat menangani API backend yang besar atau kompleks, menulis antarmuka klien secara manual menjadi memakan waktu dan rentan error. Generator ini membuat antarmuka TypeScript dan kode klien yang sepenuhnya sesuai dengan spesifikasi API, memastikan konsistensi antara frontend dan backend."
      },
      {
        title: "Arsitektur Microservice",
        description: "Dalam lingkungan microservice dengan beberapa layanan API, generator memudahkan integrasi cepat dengan setiap layanan. Saat layanan berkembang, cukup generate ulang klien TypeScript dari spesifikasi OpenAPI yang diperbarui untuk tetap sinkron."
      },
      {
        title: "Migrasi Versi API",
        description: "Saat mengupgrade ke versi API baru, generate klien TypeScript untuk kedua versi untuk mengidentifikasi breaking changes dan menerapkan strategi migrasi dengan lancar di kode frontend."
      },
      {
        title: "Onboarding Developer",
        description: "Anggota tim baru dapat dengan cepat memahami fungsionalitas API dengan memeriksa antarmuka TypeScript yang dihasilkan, yang berfungsi sebagai dokumentasi komprehensif dengan informasi tipe lengkap."
      },
      {
        title: "Pengembangan Prototipe",
        description: "Selama pengembangan prototipe cepat, generate klien TypeScript dari draf spesifikasi OpenAPI untuk segera mulai membangun komponen UI dengan struktur data nyata, bahkan sebelum implementasi backend selesai."
      }
    ]
  },
  guide: {
    title: "Panduan Langkah demi Langkah untuk Menggunakan Generator OpenAPI ke TypeScript",
    intro: "Ikuti langkah-langkah ini untuk secara efektif mengubah spesifikasi OpenAPI menjadi antarmuka TypeScript dan kode klien:",
    steps: [
      {
        title: "Siapkan Spesifikasi OpenAPI Anda",
        description: "Pastikan Anda memiliki spesifikasi OpenAPI yang valid dalam format JSON atau YAML. Spesifikasi harus mendefinisikan endpoint API, parameter request, struktur response, dan model data Anda. Anda dapat mengunggah file atau langsung menempelkan konten ke area teks."
      },
      {
        title: "Pilih Opsi Generasi",
        description: "Konfigurasi opsi generasi sesuai kebutuhan Anda: 'Ekspor semua definisi model' membuat antarmuka TypeScript untuk semua model data, 'Hasilkan kode klien API' menghasilkan metode klien API, 'Tambahkan komentar dan dokumentasi' menyertakan dokumentasi dalam kode yang dihasilkan, dan 'Gunakan enum TypeScript' membuat enum TypeScript untuk string literal union."
      },
      {
        title: "Hasilkan Kode TypeScript",
        description: "Klik tombol 'Hasilkan kode TypeScript' untuk memproses spesifikasi OpenAPI Anda. Alat akan menganalisis spesifikasi dan menghasilkan antarmuka TypeScript dan kode klien berdasarkan opsi yang Anda pilih."
      },
      {
        title: "Tinjau Kode yang Dihasilkan",
        description: "Periksa output untuk memastikannya sesuai dengan harapan Anda. Kode yang dihasilkan mencakup antarmuka untuk tipe request/response serta kelas klien dengan metode untuk setiap endpoint API."
      },
      {
        title: "Salin atau Unduh Hasil",
        description: "Gunakan tombol 'Salin kode' untuk menyalin TypeScript yang dihasilkan ke clipboard, atau 'Unduh kode' untuk menyimpannya sebagai file .ts. Anda kemudian dapat mengintegrasikan kode ini ke proyek TypeScript Anda."
      },
      {
        title: "Integrasikan dengan Proyek Anda",
        description: "Impor klien yang dihasilkan dalam kode aplikasi Anda. Inisialisasi klien dengan URL dasar API dan header yang diperlukan, lalu gunakan metode yang strongly-typed untuk melakukan panggilan API."
      },
      {
        title: "Perbarui Saat API Berubah",
        description: "Setiap kali spesifikasi API Anda berubah, generate ulang kode TypeScript dan perbarui basis kode Anda untuk memastikan frontend tetap sinkron dengan API backend."
      }
    ]
  },
  bestPractices: {
    title: "Best Practices untuk Spesifikasi OpenAPI",
    intro: "Ikuti best practices ini untuk membuat spesifikasi OpenAPI berkualitas tinggi yang menghasilkan kode TypeScript terbaik:",
    items: [
      "Gunakan operationId yang deskriptif untuk setiap endpoint, untuk membuat nama metode yang bermakna di klien yang dihasilkan",
      "Sediakan deskripsi rinci untuk skema, properti, parameter, dan response, untuk menghasilkan komentar TypeScript yang berguna",
      "Gunakan konvensi penamaan yang konsisten untuk skema dan properti, untuk membuat antarmuka TypeScript yang dapat diprediksi",
      "Definisikan komponen yang dapat digunakan kembali di bagian 'components', untuk menghindari duplikasi dan mendorong penggunaan kembali kode",
      "Tentukan tipe data yang akurat untuk semua properti, untuk menghasilkan tipe TypeScript yang presisi",
      "Sertakan contoh dalam spesifikasi OpenAPI, untuk membantu developer memahami struktur data yang diharapkan",
      "Gunakan nilai enum untuk properti dengan set nilai tetap, untuk membuat enum atau tipe union TypeScript",
      "Organisasikan endpoint secara logis dengan menggunakan tag yang sesuai untuk mengelompokkan operasi terkait",
      "Lakukan versioning pada API dan tunjukkan perubahan besar dengan jelas, untuk memudahkan strategi migrasi frontend",
      "Validasi spesifikasi OpenAPI Anda dengan linter atau validator sebelum menghasilkan kode TypeScript"
    ]
  },
  faq: {
    title: "Pertanyaan Umum tentang Generasi OpenAPI ke TypeScript",
    items: [
      {
        question: "Apa perbedaan antara OpenAPI dan Swagger?",
        answer: "OpenAPI adalah nama saat ini untuk standar spesifikasi, sedangkan Swagger adalah nama aslinya. OpenAPI 3.0+ adalah evolusi modern dari apa yang sebelumnya disebut Swagger 2.0. Generator ini mendukung spesifikasi OpenAPI 3.x dan Swagger 2.0, meskipun OpenAPI 3.x direkomendasikan karena fitur yang lebih baik dan generasi kode TypeScript yang lebih optimal."
      },
      {
        question: "Bisakah saya menyesuaikan kode TypeScript yang dihasilkan?",
        answer: "Ya, generator menyediakan beberapa opsi penyesuaian: Anda dapat memilih hanya mengekspor definisi model, menghasilkan kode klien, menambahkan komentar dokumentasi, dan menggunakan enum TypeScript alih-alih string union. Untuk penyesuaian yang lebih luas, Anda dapat memodifikasi kode yang dihasilkan secara manual, tetapi perlu diperhatikan bahwa regenerasi akan menimpa perubahan tersebut."
      },
      {
        question: "Bagaimana cara menangani autentikasi di klien yang dihasilkan?",
        answer: "Klien yang dihasilkan menerima custom header di konstruktornya, di mana Anda dapat menyediakan token autentikasi. Untuk alur autentikasi yang lebih kompleks (seperti OAuth), Anda mungkin perlu memperluas klien yang dihasilkan dengan logika tambahan, atau membuat wrapper yang menangani token refresh dan masalah autentikasi lainnya."
      },
      {
        question: "Bisakah saya menggunakannya dengan React, Vue, Angular, atau framework lain?",
        answer: "Ya, klien TypeScript yang dihasilkan adalah framework-agnostic dan dapat digunakan dengan framework JavaScript atau TypeScript apa pun. Di React, Anda mungkin membungkus klien dalam custom hook; di Vue, Anda dapat membuat composable function; di Angular, Anda dapat memperluas klien sebagai service yang dapat diinjeksi."
      },
      {
        question: "Bagaimana cara menangani unggahan file dengan klien yang dihasilkan?",
        answer: "Untuk unggahan file yang didefinisikan dalam spesifikasi OpenAPI (menggunakan content type 'multipart/form-data'), generator akan membuat method signature yang sesuai. Saat memanggil method ini, Anda perlu membuat objek FormData untuk request body. Pastikan spesifikasi OpenAPI Anda mendefinisikan operasi unggahan file dengan benar."
      },
      {
        question: "Apa yang terjadi jika spesifikasi OpenAPI saya memiliki error?",
        answer: "Generator akan mencoba mengidentifikasi masalah umum dalam spesifikasi dan memberikan pesan error yang sesuai. Disarankan untuk memvalidasi dokumen OpenAPI Anda dengan validator khusus sebelum generasi. Error dalam spesifikasi dapat mengakibatkan kode TypeScript yang tidak benar atau tidak lengkap."
      },
      {
        question: "Bagaimana cara menjaga klien TypeScript tetap sinkron dengan perubahan API?",
        answer: "Setiap kali API Anda berubah dan spesifikasi OpenAPI diperbarui, generate ulang klien TypeScript dan perbarui di proyek Anda. Pertimbangkan untuk mengotomatisasi proses ini dalam build pipeline untuk memastikan frontend Anda selalu menggunakan kode klien API terbaru."
      }
    ]
  },
  integrationTips: {
    title: "Tips untuk Mengintegrasikan Klien TypeScript yang Dihasilkan",
    intro: "Setelah Anda menghasilkan klien TypeScript, pertimbangkan saran ini untuk integrasi yang mulus dengan proyek Anda:",
    items: [
      "Buat modul klien API khusus di proyek Anda yang mengekspor ulang klien yang dihasilkan dengan konfigurasi kustom apa pun",
      "Gunakan pola dependency injection untuk menyediakan klien API di seluruh aplikasi, membuatnya lebih mudah untuk dimock untuk pengujian",
      "Pertimbangkan untuk mengimplementasikan request/response interceptor untuk masalah umum seperti penanganan error, logging, dan autentikasi",
      "Bungkus method klien yang dihasilkan dalam fungsi kustom yang menangani kasus error spesifik atau mengubah data untuk kebutuhan aplikasi",
      "Setel generasi otomatis klien TypeScript sebagai bagian dari pipeline CI/CD Anda, untuk menjaga frontend dan backend tetap sinkron",
      "Gunakan environment variable atau file konfigurasi untuk menentukan URL dasar API untuk lingkungan yang berbeda (development, staging, production)",
      "Tambahkan logika retry untuk kegagalan sementara dengan membungkus method klien yang dihasilkan menggunakan fungsi retry",
      "Implementasikan request caching untuk data yang sering diakses, untuk meningkatkan performa dan mengurangi panggilan API",
      "Gunakan tipe yang dihasilkan dengan state management library seperti Redux, MobX, atau Vuex, untuk mencapai application state yang type-safe",
      "Jika Anda melakukan banyak request kecil, pertimbangkan untuk mengimplementasikan request batching atau GraphQL untuk mengoptimalkan panggilan API"
    ]
  }
}
