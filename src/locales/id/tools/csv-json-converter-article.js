export default {
  title: "Alat CSV ke JSON: Menyederhanakan Konversi Format Data",
  features: {
    title: "Pengenalan Alat Konversi CSV dan JSON",
    description: "<strong>Konverter CSV ke JSON</strong> adalah alat yang dirancang khusus untuk mengubah data dari format <strong>CSV</strong> (Comma-Separated Values) ke <strong>JSON</strong> (JavaScript Object Notation) dan sebaliknya. Alat <strong>konversi data</strong> dua arah ini mampu mengubah data tabel menjadi objek JSON terstruktur dengan mudah.<br><br><strong>Alat CSV JSON</strong> kami menyediakan berbagai opsi yang dapat disesuaikan untuk menangani berbagai <strong>format data</strong>, termasuk pemisah yang berbeda (koma, titik koma, tab, pipa), manajemen baris header, dan <strong>deteksi tipe data</strong> cerdas. Untuk struktur JSON yang kompleks, alat ini menyediakan opsi untuk meratakan objek bersarang atau mengubahnya menjadi string, menjadikannya solusi serbaguna untuk berbagai kebutuhan <strong>konversi data</strong>.",
    useCases: {
      title: "Skenario Penggunaan Umum Konversi CSV JSON",
      items: [
        "Analis data mengkonversi ekspor spreadsheet ke JSON untuk alat visualisasi data atau API",
        "Pengembang menyiapkan data untuk aplikasi web yang membutuhkan struktur data JSON",
        "Admin database memigrasikan data antara sistem dengan kebutuhan format yang berbeda",
        "Pengembang API mengkonversi ekspor data CSV ke format JSON untuk RESTful API",
        "Ilmuwan data mengkonversi hasil eksperimen antara format spreadsheet dan struktur JSON",
        "Analis bisnis menyiapkan laporan CSV dari sistem akuntansi atau CRM untuk dashboard web"
      ]
    }
  },
  faq: {
    title: "Pertanyaan Umum tentang Konversi CSV ke JSON",
    items: [
      {
        question: "Apa perbedaan antara format CSV dan JSON?",
        answer: "CSV (Comma-Separated Values) adalah format tabel sederhana di mana data diatur dalam baris dan kolom yang dipisahkan oleh karakter tertentu (biasanya koma). JSON (JavaScript Object Notation) adalah format data terstruktur hierarkis yang mendukung objek dan array bersarang. JSON dapat merepresentasikan hubungan data yang lebih kompleks dan merupakan format standar untuk API web dan aplikasi JavaScript."
      },
      {
        question: "Bagaimana alat ini menangani JSON bersarang saat dikonversi ke CSV?",
        answer: "Konverter CSV JSON kami menyediakan tiga opsi untuk menangani objek JSON bersarang: 'Ratakan' akan mengubah properti bersarang menjadi nama kolom dengan notasi titik (contoh 'user.name'), 'Konversi ke string' akan mengubah seluruh objek bersarang menjadi representasi string, dan 'Abaikan' akan mengecualikan objek bersarang dari konversi. Opsi ini memberikan fleksibilitas sesuai kebutuhan konversi data Anda."
      },
      {
        question: "Apakah konverter CSV ke JSON bisa menangani pemisah yang berbeda dalam file CSV?",
        answer: "Ya, alat konversi data kami mendukung berbagai opsi pemisah termasuk koma, titik koma, tab, dan karakter pipa. Fleksibilitas ini memungkinkan Anda memproses berbagai varian format CSV dari sistem atau wilayah yang berbeda. Cukup pilih pemisah yang sesuai di panel opsi sebelum melakukan konversi."
      },
      {
        question: "Bagaimana cara kerja pengetikan dinamis dalam konversi CSV ke JSON?",
        answer: "Pengetikan dinamis secara otomatis mendeteksi dan mengkonversi tipe data dalam CSV. Ketika diaktifkan, nilai string yang terlihat seperti angka (contoh '42') akan dikonversi ke tipe angka, string 'true'/'false' menjadi boolean, dan field kosong bisa dikonversi ke null. Ini menghasilkan data JSON dengan tipe data yang benar, bukan semuanya sebagai string."
      },
      {
        question: "Seberapa besar file CSV atau JSON yang bisa diproses alat ini?",
        answer: "Konverter CSV JSON memproses data langsung di browser Anda, jadi batas ukuran file tergantung pada memori perangkat Anda. Untuk performa terbaik, kami rekomendasikan menggunakan file kurang dari 5MB, meskipun browser modern bisa menangani file yang lebih besar. Untuk dataset yang sangat besar, pertimbangkan untuk membagi file menjadi bagian yang lebih kecil atau menggunakan alat konversi berbasis server."
      }
    ]
  },
  guide: {
    title: "Cara Menggunakan Alat CSV ke JSON",
    steps: [
      "Pilih arah konversi: 'CSV ke JSON' atau 'JSON ke CSV' sesuai format data sumber Anda",
      "Klik 'Tampilkan opsi' untuk mengkonfigurasi pengaturan konversi seperti pemisah, baris header, dan aturan pemrosesan khusus",
      "Untuk CSV ke JSON, pilih pemisah yang sesuai (koma, titik koma, tab, dll) dan centang 'Baris pertama sebagai header' jika CSV Anda berisi header kolom",
      "Untuk JSON ke CSV, konfigurasikan cara menangani objek bersarang (ratakan, konversi ke string, atau abaikan) dan apakah akan menambahkan kutip untuk semua nilai field",
      "Masukkan data Anda dengan menempelkannya ke field input atau klik 'Muat contoh' untuk melihat cara alat memproses data contoh",
      "Klik tombol 'Konversi' untuk melakukan konversi data antara format CSV dan JSON",
      "Tinjau statistik konversi dan hasil output, lalu gunakan tombol 'Salin hasil' atau 'Unduh hasil' untuk menyimpan data yang telah dikonversi"
    ]
  },
  conclusion: "Konverter CSV ke JSON adalah alat penting bagi profesional data yang sering bekerja dengan berbagai format data. Dengan menyederhanakan proses konversi antara data tabel CSV dan objek JSON terstruktur, alat ini menghemat waktu dan mengurangi kesalahan dalam alur kerja pemrosesan data. Baik Anda menyiapkan data untuk integrasi API, mengkonversi ekspor dari aplikasi spreadsheet, atau melakukan konversi antara kebutuhan format sistem yang berbeda, konverter ini menyediakan solusi berbasis browser yang fleksibel untuk kebutuhan konversi data Anda."
}
