export default {
    title: 'Konverter Excel ke CSV: Panduan Penggunaan Alat Konversi File Excel Batch Online',
    functionTitle: 'Apa itu konverter Excel ke CSV dan untuk apa fungsinya?',
    intro: '<strong>Konverter Excel ke CSV</strong> kami adalah alat online yang kuat yang dapat dengan cepat mengonversi file Excel (.xlsx dan .xls) ke format CSV. Alat ini mendukung pemrosesan batch beberapa file, pengenalan multi-lembar kerja, pembatas khusus, dan format pengkodean, memenuhi kebutuhan impor data berbagai sistem dan perangkat lunak. Dengan menggunakan <strong>alat Excel ke CSV online</strong> kami, Anda dapat dengan mudah menangani volume data besar tanpa perlu menginstal perangkat lunak apa pun, semua konversi dilakukan secara lokal di browser, memastikan keamanan data.',

    useCasesTitle: 'Skenario Penerapan Umum Konversi Excel ke CSV',
    useCases: [
        'Mengimpor data Excel ke sistem basis data (MySQL, PostgreSQL, dll)',
        'Menyiapkan data dalam format CSV untuk alat analisis data (Python pandas, bahasa R)',
        'Mengimpor data pengguna atau informasi produk secara batch dalam aplikasi web',
        'Mengonversi laporan Excel ke format CSV untuk digunakan oleh sistem lain',
        'Memproses file Excel multi-lembar kerja dan mengekspornya secara terpisah sebagai CSV',
        'Mengonversi file Excel historis secara batch untuk proyek migrasi data',
        'Mengonversi data Excel ke format CSV untuk kontrol versi',
        'Menyiapkan file data CSV standar untuk antarmuka API'
    ],

    logoAlt: "Pratinjau produk konverter Excel ke CSV",
    tipTitle: 'Tips Profesional:',
    tipContent: 'Untuk data yang mengandung karakter khusus atau jeda baris, disarankan menggunakan tanda kutip ganda sebagai pembatas teks, hal ini dapat memastikan tidak terjadi kesalahan format saat mengimpor file CSV ke sistem lain. Untuk data bahasa Tiongkok, disarankan menggunakan pengkodean UTF-8 BOM, untuk memastikan karakter Tiongkok ditampilkan dengan benar saat dibuka di Excel.',

    conclusion: 'Alat <strong>konversi Excel ke CSV</strong> sangat berguna bagi analis data, pengembang, administrator data, dan pengguna yang perlu sering memproses file Excel. Dengan menggunakan konverter kami, Anda dapat dengan cepat mengonversi data Excel ke format CSV, memudahkan berbagi data antara sistem dan alat yang berbeda. Alat kami mendukung pemrosesan batch, pengaturan format khusus, dan pratinjau waktu nyata, membuat proses konversi data menjadi sederhana dan efisien, tanpa perlu menginstal perangkat lunak.',

    faqTitle: 'Pertanyaan Umum',
    faqs: [
        {
            question: 'Format Excel apa yang didukung oleh konverter Excel ke CSV?',
            answer: '<strong>Alat Excel ke CSV online</strong> kami mendukung dua format Excel utama: .xlsx (Office Open XML) dan .xls (format biner tradisional). Alat ini dapat secara otomatis mengenali format file dan melakukan pemrosesan yang sesuai, mendukung file Excel multi-lembar kerja, Anda dapat memilih untuk mengonversi semua lembar kerja atau lembar kerja tertentu.'
        },
        {
            question: 'Apakah file CSV yang dikonversi akan mempertahankan format data asli?',
            answer: 'Format CSV itu sendiri tidak mengandung informasi pemformatan (seperti font, warna, rumus, dll), tetapi semua konten data akan sepenuhnya dipertahankan. Tanggal, angka, dan data teks akan dikonversi dengan benar. Jika sel Excel mengandung rumus, konverter akan mengekstrak nilai hasil perhitungan rumus.'
        },
        {
            question: 'Bagaimana cara menangani data Excel yang mengandung karakter khusus?',
            answer: 'Alat kami mendukung pembatas teks khusus (tanda kutip ganda atau tunggal), yang dapat menangani data yang mengandung koma, jeda baris, tanda kutip, dan karakter khusus lainnya dengan benar. Disarankan memilih tanda kutip ganda sebagai pembatas teks saat mengonversi data yang mengandung karakter khusus, hal ini dapat memastikan format file CSV benar.'
        },
        {
            question: 'Dapatkah mengonversi beberapa file Excel secara batch?',
            answer: 'Ya, <strong>alat konversi batch Excel ke CSV</strong> kami sepenuhnya mendukung pemrosesan batch. Anda dapat mengunggah beberapa file Excel secara bersamaan, alat ini akan memproses setiap file secara berurutan dan menyediakan fungsi unduh batch setelah selesai, mengemas semua file CSV yang dikonversi dalam file ZIP untuk diunduh.'
        },
        {
            question: 'Format pengkodean apa yang didukung oleh file CSV yang dikonversi?',
            answer: 'Alat kami mendukung beberapa format pengkodean, termasuk UTF-8, UTF-8 BOM, GBK, dan ANSI. Format UTF-8 BOM sangat cocok untuk membuka file CSV yang mengandung karakter Tiongkok di Excel, sedangkan format UTF-8 lebih cocok untuk digunakan dalam program. Anda dapat memilih format pengkodean yang sesuai berdasarkan kebutuhan sistem target.'
        },
        {
            question: 'Dapatkah memproses file Excel terenkripsi atau dilindungi?',
            answer: 'Karena keterbatasan lingkungan browser, alat kami tidak dapat memproses file Excel yang dilindungi kata sandi. Jika file Excel Anda terenkripsi, silakan dekripsi terlebih dahulu menggunakan perangkat lunak Excel sebelum melakukan konversi. Untuk file Excel yang tidak terenkripsi, alat kami dapat menanganinya dengan sempurna.'
        }
    ],

    tutorialTitle: 'Cara Menggunakan Konverter Excel ke CSV',
    steps: [
        {
            title: 'Unggah File Excel',
            description: 'Pertama, unggah file Excel yang ingin Anda konversi. Anda dapat <strong>menyeret dan menjatuhkan</strong> file langsung ke area unggah, atau mengklik jelajahi dan memilih file dari perangkat Anda. Alat kami mendukung format .xlsx dan .xls, Anda dapat mengunggah beberapa file secara bersamaan untuk konversi batch.',
            note: 'Anda juga dapat menggunakan fungsi "Impor dari URL" untuk memasukkan alamat web file Excel secara langsung dan melakukan konversi.'
        },
        {
            title: 'Pilih Lembar Kerja (opsional)',
            description: 'Jika file Excel Anda mengandung beberapa lembar kerja, Anda dapat memilih lembar kerja yang akan dikonversi untuk setiap file dalam daftar file. Secara default, alat akan mengonversi semua lembar kerja, setiap lembar kerja akan menghasilkan file CSV terpisah.',
            note: 'Untuk file Excel besar, disarankan terlebih dahulu memilih satu lembar kerja untuk pengujian, memastikan hasil konversi sesuai harapan sebelum pemrosesan batch.'
        },
        {
            title: 'Konfigurasi Opsi Format CSV',
            description: 'Di area "Pengaturan Format CSV", Anda dapat menyesuaikan pembatas (koma, titik koma, tab, dll), pembatas teks (tanda kutip ganda, tanda kutip tunggal, atau tidak ada), akhir baris (Windows/Unix/Mac), dan format pengkodean (UTF-8, UTF-8 BOM, GBK, ANSI). Pengaturan ini akan mempengaruhi format file CSV yang dikonversi.',
            note: 'Untuk data bahasa Tiongkok, disarankan menggunakan pengkodean UTF-8 BOM; untuk file yang akan dibuka di Excel, disarankan menggunakan tanda kutip ganda sebagai pembatas teks.'
        },
        {
            title: 'Pratinjau Data (opsional)',
            description: 'Sebelum konversi, Anda dapat mengklik "Pratinjau data" untuk melihat isi file Excel. Fungsi pratinjau akan menampilkan beberapa baris pertama data, membantu Anda memastikan format dan isi file sudah benar.',
            note: 'Fungsi pratinjau dapat membantu Anda menemukan masalah format data, menghindari menemukan kesalahan setelah konversi.'
        },
        {
            title: 'Jalankan Konversi',
            description: 'Klik tombol <strong>"Mulai konversi"</strong> untuk memulai pemrosesan file. Alat akan menampilkan kemajuan konversi, termasuk file saat ini yang sedang diproses, lembar kerja, dan jumlah baris. Proses konversi sepenuhnya dilakukan secara lokal di browser, tanpa mengunggah data ke server.',
            note: 'Untuk file besar, konversi mungkin memerlukan waktu, mohon bersabar. Anda dapat melihat proses konversi terperinci dalam log pemrosesan.'
        },
        {
            title: 'Unduh Hasil Konversi',
            description: 'Setelah konversi selesai, Anda dapat mengklik tombol <strong>"Unduh"</strong> di bawah setiap file CSV untuk menyimpannya secara individual, atau menggunakan tombol <strong>"Unduh batch"</strong> di bagian atas untuk mengemas semua file CSV dalam file ZIP dan mengunduhnya. Nama file akan dibuat secara otomatis sesuai dengan pengaturan Anda.',
            note: 'Semua pemrosesan dilakukan di browser Anda, sehingga file Excel Anda tidak akan pernah diunggah ke server mana pun, memastikan privasi dan keamanan data.'
        }
    ],

    successTitle: 'Selamat!',
    successContent: 'Anda telah berhasil mempelajari cara menggunakan konverter Excel ke CSV kami. Sekarang Anda dapat dengan mudah mengonversi file Excel ke format CSV untuk analisis data, impor basis data, atau kegunaan lainnya.',

    relatedToolsTitle: 'Alat Terkait yang Mungkin Menarik bagi Anda',
    relatedTools: [
        {
            name: 'Konverter Bionic Reading',
            description: 'Konverter Bionic Reading online gratis, mengonversi teks secara real-time ke gaya Bionic Reading.',
            url: 'https://www.ufreetools.com/tool/bionic-reading-converter'
        },
        {
            name: 'Pengubah Ukuran Gambar',
            description: 'Menyesuaikan gambar ke dimensi tertentu atau menskalanya berdasarkan persentase.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: 'Generator Cap',
            description: 'Membuat berbagai jenis gambar cap secara online, menghasilkan cap perusahaan, cap pribadi, dan cap digital lainnya.',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        },
        {
            name: 'Generator Kode QR',
            description: 'Membuat kode QR khusus untuk URL, teks, informasi kontak, dll.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],

    referencesTitle: 'Sumber Referensi',
    references: [
        {
            name: 'Spesifikasi Format File CSV (RFC 4180)',
            description: 'Pelajari spesifikasi format standar dan praktik terbaik file CSV',
            url: 'https://tools.ietf.org/html/rfc4180'
        },
        {
            name: 'Standar Office Open XML',
            description: 'Pelajari spesifikasi teknis format file Excel .xlsx',
            url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-376/'
        },
        {
            name: 'Standar Pengkodean Karakter (Unicode)',
            description: 'Pelajari standar pengkodean karakter seperti UTF-8, GBK, dll.',
            url: 'https://www.unicode.org/standard/standard.html'
        }
    ]
}