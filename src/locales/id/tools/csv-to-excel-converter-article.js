export default {
    title: 'Konverter CSV ke Excel: Panduan Konversi Batch Berkualitas Tinggi dan Ekspor Multi-Tabel',
    functionTitle: 'Bagaimana Konverter CSV ke Excel Menyelesaikan Tantangan Interaksi Data Lintas Sistem?',
    intro: '<p>Konverter CSV ke Excel dirancang untuk skenario analisis data, integrasi sistem, dan impor batch, memungkinkan konversi langsung data teks seperti CSV, TSV, dan TXT ke buku kerja Excel di browser. Alat ini mendukung deteksi pengkodean otomatis, deteksi pembatas pintar, pemrosesan batch file multipel, pencatatan waktu nyata, dan pratinjau data, memungkinkan tim untuk dengan cepat menghasilkan hasil .xlsx yang sesuai tanpa perlu menginstal perangkat lunak desktop.</p>',
    useCasesTitle: 'Skenario Aplikasi Khas',
    useCases: [
        'Mengonversi data pesanan CSV yang diekspor dari platform e-commerce ke laporan Excel untuk tinjauan keuangan dan pengarsipan',
        'Mengonversi batch file TSV yang dihasilkan oleh sistem pengumpulan log ke file Excel multi-lembar kerja untuk analisis alat BI',
        'Mengatur data CSV historis ke template Excel sebelum peluncuran sistem CRM atau ERP untuk impor batch',
        'Menyiapkan file Excel yang diformat untuk kolaborasi lintas departemen, memungkinkan anggota non-teknis melihat data dengan aman',
        'Menghasilkan lampiran Excel yang lebih mudah dibaca untuk pengiriman data atau penawaran untuk memenuhi persyaratan kepatuhan audit',
        'Mengonversi batch CSV yang dikembalikan oleh API ke Excel, menggabungkan dengan template grafik atau makro untuk analisis cepat',
        'Mengatur log perangkat IoT CSV ke dokumen Excel multi-lembar kerja sesuai dengan tipe perangkat',
        'Mengonversi data CSV sampel ke file latihan Excel dengan satu klik dalam skenario pelatihan atau pengajaran'
    ],
    logoAlt: "Pratinjau Produk Konverter CSV ke Excel",
    tipTitle: 'Tips Profesional:',
    conclusion: '<p>Berdasarkan implementasi frontend murni, <strong>Konverter CSV ke Excel</strong> memungkinkan insinyur data dan pengguna bisnis menyelesaikan konversi batch, penamaan standar, dan output multi-lembar kerja tanpa mengunggah file sensitif. Dikombinasikan dengan pencatatan dan deteksi pengkodean, ini meminimalkan kegagalan impor yang disebabkan oleh inkonsistensi format. Untuk pembersihan atau pemisahan data lebih lanjut, Anda dapat menggunakan <a href="https://www.ufreetools.com/tool/excel-to-csv-converter" target="_blank">Konverter Excel ke CSV</a> untuk konversi dua arah; untuk memahami standar CSV, lihat <a href="https://tools.ietf.org/html/rfc4180" target="_blank" rel="noopener noreferrer">RFC 4180</a> untuk spesifikasi otoritatif.</p>',
    faqTitle: 'Pertanyaan Umum',
    faqs: [
        {
            question: 'Pembatas dan pembatas teks apa yang didukung oleh Konverter CSV ke Excel?',
            answer: '<p>Alat ini memiliki opsi terintegrasi koma, titik koma, tab, garis vertikal, dan pembatas kustom, serta mendukung CSV kompleks dengan tanda petik ganda, tunggal, atau tanpa pembatas. Jika Anda memilih "Deteksi Otomatis", sistem akan menghitung kombinasi pembatas yang paling mungkin berdasarkan baris data pertama untuk memastikan jumlah kolom yang akurat di Excel yang dikonversi.</p>'
        },
        {
            question: 'Bagaimana menangani file CSV dengan pengkodean berbeda?',
            answer: '<p>Kami menyediakan deteksi pengkodean otomatis dan memungkinkan spesifikasi manual pengkodean umum seperti UTF-8, UTF-8 BOM, UTF-16 LE, dan GBK. Jika Anda menghadapi pengkodean khusus, Anda dapat mengonversinya ke UTF-8 di alat eksternal terlebih dahulu sebelum mengunggah untuk memastikan karakter atau simbol Tiongkok di Excel tidak muncul cacat.</p>'
        },
        {
            question: 'Dapatkah beberapa file CSV digabungkan ke buku kerja Excel yang sama?',
            answer: '<p>Ya. Centang "Gabungkan ke File Excel Tunggal" di "Pengaturan Buku Kerja Excel", dan sistem akan menghasilkan lembar kerja untuk setiap CSV. Nama lembar kerja dapat berdasarkan nama file atau awalan kustom, dan timestamp dapat ditambahkan untuk pelacakan sumber yang mudah.</p>'
        },
        {
            question: 'Apakah Excel yang dikonversi akan mempertahankan header dan baris kosong dari CSV?',
            answer: '<p>Secara default, baris pertama dipertahankan sebagai header, dan baris kosong, sel kosong, serta urutan data asli sepenuhnya dipertahankan. Untuk mengabaikan header, Anda dapat menonaktifkan opsi "Baris Pertama Berisi Header" di pengaturan dan menjalankan kembali konversi, dan sistem akan menghasilkan Excel dalam mode data murni.</p>'
        },
        {
            question: 'Bagaimana melihat proses dan memecahkan masalah selama konversi batch?',
            answer: '<p>Setiap konversi menghasilkan log proses yang mencatat file yang diproses, lembar kerja yang dibuat, statistik baris/kolom, dan kemungkinan kesalahan. Anda dapat memperluas panel log atau mengklik "Salin Log" untuk berbagi dengan tim, memudahkan pemecahan masalah sebelum penerapan kode atau pengiriman data.</p>'
        }
    ],
    tutorialTitle: 'Panduan Operasi',
    steps: [
        {
            title: 'Unggah atau Impor File CSV',
            description: 'Klik tombol unggah atau seret file ke area yang ditentukan, mendukung pemrosesan batch file multipel. Anda juga dapat menempel tautan CSV publik di "Impor dari URL", dan sistem akan secara otomatis mengambilnya dan menambahkannya ke antrean.',
            note: 'Disarankan untuk menjaga file individu di bawah 50MB. File besar dapat dibagi dan dikonversi secara batch.'
        },
        {
            title: 'Periksa Hasil Deteksi Otomatis',
            description: 'Sistem akan mencoba mendeteksi pengkodean dan pembatas, dan menampilkan beberapa baris data mentah pertama. Jika hasil deteksi tidak sesuai dengan harapan, Anda dapat memilih pengkodean atau pembatas secara manual untuk memastikan jumlah kolom yang benar dan tampilan karakter Tiongkok yang tepat.',
            note: 'Jika perlu, konversi pengkodean di alat pihak ketiga sebelum mengunggah kembali.'
        },
        {
            title: 'Konfigurasi Opsi Parsing CSV',
            description: 'Sesuaikan pembatas, pembatas teks, akhir baris, dan opsi header di "Pengaturan Parsing CSV". CSV yang dihasilkan oleh bahasa atau sistem berbeda sangat bervariasi, jadi disarankan untuk mengonfigurasi sesuai dengan aturan ekspor sistem sumber.',
            note: 'Mem pertahankan "Baris Pertama Berisi Header" akan menghasilkan baris header di Excel.'
        },
        {
            title: 'Tetapkan Kebijakan Buku Kerja Excel',
            description: 'Sesuaikan nama buku kerja, aturan penamaan lembar kerja, dan apakah akan menggabungkan ke satu Excel. Untuk skenario agregasi file multipel, aktifkan "Gabungkan ke File Excel Tunggal" dan tambahkan timestamp untuk pelacakan mudah selanjutnya.',
            note: 'Jika penggabungan dibatalkan, alat akan menghasilkan file .xlsx independen untuk setiap CSV.'
        },
        {
            title: 'Jalankan Konversi dan Pantau Log',
            description: 'Setelah mengklik "Konversi ke Excel", sistem akan menampilkan bilah kemajuan waktu nyata dan mencatat langkah analisis, pembuatan tabel, statistik, dll. di log. Kesalahan akan menghentikan pemrosesan file saat ini dan menampilkan detail di log.',
            note: 'Log mendukung ekspansi, penyusutan, dan salin sekali klik untuk pemecahan masalah kolaboratif.'
        },
        {
            title: 'Unduh Excel atau Paket Batch',
            description: 'Setelah konversi selesai, Anda dapat mengunduh file Excel secara individual, atau mengklik "Unduh Batch (ZIP)" untuk mendapatkan semua hasil sekaligus. Daftar akan menampilkan nama lembar kerja, ukuran file, dan cuplikan pratinjau untuk setiap buku kerja untuk verifikasi cepat.',
            note: 'Semua operasi diselesaikan di browser lokal tanpa mengunggah ke server, memastikan keamanan data.'
        }
    ],
    successTitle: 'Konversi Selesai',
    successContent: 'Selamat! Anda telah mempelajari cara menggunakan Konverter CSV ke Excel untuk dengan cepat mengatur data teks yang tersebar ke hasil Excel terstruktur untuk analisis, pelaporan, atau integrasi sistem.',
    relatedToolsTitle: 'Alat Terkait yang Direkomendasikan',
    relatedTools: [
        {
            name: 'Konverter Excel ke CSV',
            description: 'Ekspor batch buku kerja Excel ke CSV, mempertahankan pengkodean dan pembatas yang konsisten.',
            url: 'https://www.ufreetools.com/tool/excel-to-csv-converter'
        },
        {
            name: 'Pengubah Ukuran Gambar',
            description: 'Mengubah ukuran gambar ke dimensi tertentu atau penskalaan berdasarkan persentase.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: 'Generator Cap',
            description: 'Membuat berbagai gambar cap online, menghasilkan cap perusahaan, cap pribadi, dan cap digital lainnya.',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        },
        {
            name: 'Generator Kode QR',
            description: 'Membuat kode QR kustom untuk URL, teks, informasi kontak, dll.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],
    referencesTitle: 'Sumber Referensi',
    references: [
        {
            name: 'RFC 4180 - Standar CSV',
            description: 'Pelajari spesifikasi formal dan konvensi bidang format file CSV.',
            url: 'https://tools.ietf.org/html/rfc4180'
        },
        {
            name: 'Spesifikasi Microsoft Excel Open XML',
            description: 'Dapatkan pemahaman mendalam tentang struktur file .xlsx dan persyaratan kompatibilitas.',
            url: 'https://learn.microsoft.com/en-us/openspecs/office_standards/ms-xlsx/' 
        },
        {
            name: 'Standar Pengkodean WHATWG',
            description: 'Daftar pengkodean teks yang didukung browser dan detail implementasi.',
            url: 'https://encoding.spec.whatwg.org/'
        }
    ]
}