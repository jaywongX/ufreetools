export default {
    title: 'Panduan Penggunaan Pembanding Trajektori Koordinat - Alat Analisis Perbedaan Trajektori Online',
    functionTitle: 'Apa itu Pembanding Trajektori Koordinat dan kegunaannya?',
    intro: '<strong>Pembanding Trajektori Koordinat</strong> kami adalah alat online yang kuat yang memungkinkan Anda mengunggah dua set data trajektori dan melakukan analisis perbandingan visual pada peta. Alat ini mendukung translasi, rotasi, dan perhitungan deviasi trajektori, secara otomatis menghitung indikator kunci seperti Root Mean Square Error (RMSE) dan offset antara dua set trajektori. Dengan menampilkan dua trajektori dalam warna berbeda dengan efek perbandingan "berkedip" dinamis, bagian yang berbeda akan secara otomatis disorot. Menggunakan <strong>alat analisis perbedaan trajektori</strong> kami, Anda dapat mengekspor laporan perbandingan terperinci yang berisi tangkapan layar peta dan grafik statistik kesalahan, dengan salin hasil ke clipboard dengan satu klik, memenuhi kebutuhan profesional dalam survei, navigasi, dan analisis trajektori.',

    useCasesTitle: 'Skenario aplikasi umum Pembanding Trajektori Koordinat',
    useCases: [
        'Evaluasi akurasi trajektori GPS, membandingkan trajektori terukur dengan trajektori referensi',
        'Optimasi algoritma navigasi, menganalisis perbedaan trajektori antara algoritma perencanaan rute yang berbeda',
        'Pengujian berkendara otomatis, membandingkan trajektori berkendara kendaraan nyata dengan trajektori yang diharapkan',
        'Analisis trajektori olahraga, membandingkan kinerja trajektori atlet yang berbeda atau fase pelatihan',
        'Optimasi pengiriman logistik, menganalisis deviasi antara rute pengiriman dan jalur optimal',
        'Validasi data penelitian geografis, mengevaluasi akurasi dan konsistensi data trajektori'
    ],

    tipTitle: 'Tips Profesional:',
    tipContent: 'Saat melakukan analisis perbandingan trajektori, disarankan untuk pertama kali menggunakan data sampel untuk mengenal fungsi alat dan memahami arti indikator kesalahan yang berbeda. Melalui efek perbandingan "berkedip" dinamis, Anda dapat lebih intuitif mengamati perbedaan antara dua trajektori. Laporan perbandingan yang diekspor berisi statistik kesalahan terperinci dan grafik visual, memudahkan analisis lanjutan dan pengarsipan.',

    conclusion: '<strong>Pembanding Trajektori Koordinat</strong> sangat berguna bagi insinyur survei, pengembang algoritma navigasi, peneliti berkendara otomatis, dan siapa pun yang perlu melakukan analisis data trajektori. Dengan menggunakan alat analisis perbedaan trajektori kami, Anda dapat dengan cepat dan akurat mengevaluasi kualitas data trajektori, mengidentifikasi deviasi trajektori, dan mengoptimalkan kinerja algoritma. Alat kami membuat proses analisis perbandingan trajektori menjadi sederhana dan efisien, tanpa perlu menginstal perangkat lunak profesional apa pun.',

    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: [
        {
            question: 'Format file apa yang didukung oleh Pembanding Trajektori Koordinat?',
            answer: '<strong>Alat perbandingan trajektori online</strong> kami mendukung beberapa format file trajektori umum, termasuk GeoJSON, JSON, dan KML. Format-format ini banyak digunakan dalam perangkat lunak SIG dan perangkat GPS, memastikan Anda dapat dengan mudah mengimpor data trajektori dari berbagai sumber. Setelah mengunggah file, alat akan secara otomatis mengurai titik trajektori dan melakukan analisis perbandingan.'
        },
        {
            question: 'Bagaimana cara menginterpretasi RMSE dan indikator kesalahan lainnya?',
            answer: '<strong>Alat analisis perbedaan trajektori</strong> kami menyediakan beberapa indikator kesalahan untuk membantu Anda mengevaluasi perbedaan trajektori secara menyeluruh. Root Mean Square Error (RMSE) adalah indikator yang umum digunakan untuk mengukur deviasi keseluruhan trajektori, dengan nilai yang lebih kecil menunjukkan trajektori yang lebih dekat; kesalahan rata-rata mewakili rata-rata aritmatika dari semua kesalahan titik; kesalahan maksimum menampilkan titik dengan deviasi terbesar dalam trajektori; standar deviasi mencerminkan tingkat dispersi distribusi kesalahan. Indikator-indikator ini digunakan bersama dapat mengevaluasi kualitas trajektori secara menyeluruh.'
        },
        {
            question: 'Bagaimana efek visualisasi perbandingan trajektori dicapai?',
            answer: '<strong>Pembanding Trajektori Koordinat</strong> kami menampilkan dua trajektori dalam warna berbeda, satu ditampilkan dalam biru dan satu lagi dalam merah. Melalui efek "berkedip" dinamis, Anda dapat lebih intuitif mengamati perbedaan trajektori. Titik dengan perbedaan besar akan secara otomatis disorot, memudahkan identifikasi cepat area bermasalah. Antarmuka peta mendukung operasi zoom dan geser, memungkinkan Anda melihat detail perbandingan trajektori di area tertentu.'
        },
        {
            question: 'Konten apa saja yang termasuk dalam laporan perbandingan?',
            answer: 'Laporan yang dihasilkan oleh <strong>alat perbandingan trajektori</strong> kami berisi informasi yang kaya: 1) Informasi dasar: nama file trajektori, jumlah titik, dll.; 2) Statistik kesalahan: indikator kunci seperti RMSE, kesalahan rata-rata, kesalahan maksimum, dan standar deviasi; 3) Analisis perbedaan: jumlah dan distribusi titik perbedaan; 4) Tangkapan layar peta: hasil visual perbandingan trajektori; 5) Grafik statistik kesalahan: tampilan intuitif distribusi kesalahan. Laporan dapat diekspor dalam format teks, memudahkan pengarsipan dan berbagi.'
        },
        {
            question: 'Bagaimana meningkatkan akurasi perbandingan trajektori?',
            answer: 'Untuk mendapatkan hasil perbandingan trajektori yang lebih akurat, disarankan: 1) Memastikan sinkronisasi waktu dua trajektori atau melakukan pemrosesan penyelarasan waktu; 2) Pra-pemrosesan trajektori, seperti penyaringan dan penghilangan kebisingan, konversi sistem koordinat, dll.; 3) Memilih metode perhitungan kesalahan dan pengaturan parameter yang sesuai; 4) Untuk trajektori dengan panjang berbeda, menggunakan interpolasi trajektori atau pengambilan sampel untuk membuat jumlah titik konsisten. Alat kami menyediakan fungsi perbandingan dasar, dan untuk aplikasi profesional yang kompleks, mungkin perlu menggabungkan pengetahuan domain untuk analisis mendalam.'
        }
    ],

    tutorialTitle: 'Cara menggunakan Pembanding Trajektori Koordinat',
    steps: [
        {
            title: 'Unggah File Trajektori',
            description: 'Di area input kiri, unggah dua file trajektori yang perlu dibandingkan. Klik area unggah untuk Trajektori 1 dan Trajektori 2, pilih file trajektori lokal format GeoJSON, JSON, atau KML, atau langsung seret file ke area unggah. Alat akan secara otomatis menganalisis file dan menampilkan jumlah titik trajektori.',
            note: 'Format file yang didukung meliputi GeoJSON, JSON, dan KML, memastikan file berisi data koordinat trajektori yang valid.'
        },
        {
            title: 'Muat Data Sampel',
            description: 'Jika Anda menggunakan alat untuk pertama kalinya, Anda dapat mengklik tombol "Muat Contoh" untuk memuat data trajektori yang telah ditetapkan sebelumnya. Ini akan membantu Anda dengan cepat memahami fungsi alat dan hasil output, serta mengenal seluruh proses perbandingan trajektori.',
            note: 'Data sampel berisi dua trajektori yang telah ditetapkan sebelumnya dengan perbedaan tertentu, memudahkan demonstrasi berbagai fungsi alat.'
        },
        {
            title: 'Lakukan Perbandingan Trajektori',
            description: 'Setelah mengunggah dua trajektori, klik tombol "Bandingkan Trajektori" untuk memulai analisis. Alat akan secara otomatis menghitung perbedaan trajektori, termasuk indikator RMSE, kesalahan rata-rata, kesalahan maksimum, dan standar deviasi, serta menampilkan visual dua trajektori di peta.',
            note: 'Proses perbandingan mungkin memerlukan beberapa detik, tergantung pada ukuran dan kompleksitas data trajektori.'
        },
        {
            title: 'Lihat Hasil Perbandingan',
            description: 'Setelah perbandingan selesai, area kanan akan menampilkan statistik kesalahan terperinci dan hasil analisis perbedaan. Anda dapat melihat perbandingan visual dua trajektori di peta, dengan titik perbedaan besar disorot. Melalui efek "berkedip" dinamis, Anda dapat lebih intuitif mengamati perbedaan trajektori.',
            note: 'Peta mendukung operasi zoom dan geser, memudahkan melihat detail perbandingan trajektori di area tertentu.'
        },
        {
            title: 'Ekspor atau Salin Hasil',
            description: 'Anda dapat mengklik tombol "Ekspor Laporan" untuk menghasilkan laporan perbandingan terperinci yang berisi statistik kesalahan, analisis perbedaan, dan tangkapan layar peta. Jika hanya memerlukan indikator kunci, Anda dapat menggunakan tombol "Salin Hasil" untuk menyalin data inti seperti RMSE ke clipboard.',
            note: 'Laporan yang diekspor dalam format teks, memudahkan pengarsipan dan berbagi. Fungsi salin hanya menyalin indikator kesalahan kunci.'
        }
    ],

    successTitle: 'Selamat!',
    successContent: 'Anda telah berhasil mempelajari cara menggunakan Pembanding Trajektori Koordinat kami. Sekarang Anda dapat dengan mudah mengunggah dan membandingkan dua trajektori, menganalisis perbedaan trajektori melalui statistik kesalahan terperinci dan efek visual, serta mengekspor laporan perbandingan profesional.',

    relatedToolsTitle: 'Alat terkait yang mungkin Anda minati',
    relatedTools: [
        {
            name: 'Kalkulator Luas dan Keliling',
            description: 'Mendukung menggambar poligon untuk menghitung luas dan keliling secara otomatis, menyediakan pengalihan unit ganda.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        {
            name: 'Kalkulator Luas dan Keliling',
            description: 'Mendukung menggambar poligon untuk menghitung luas dan keliling secara otomatis, menyediakan pengalihan unit ganda.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        {
            name: 'Pencari Zona Proyeksi',
            description: 'Masukkan bujur untuk menghitung nomor zona UTM 3° dan 6° secara otomatis, mendukung pemrosesan batch.',
            url: 'https://www.ufreetools.com/tool/projection-zone-finder'
        },
        {
            name: 'Konverter Format Koordinat',
            description: 'Mendukung konversi antara format derajat desimal, derajat-menit-detik, dan derajat-menit, menyediakan fungsi konversi batch.',
            url: 'https://www.ufreetools.com/tool/coordinate-format-converter'
        }
    ],

    referencesTitle: 'Sumber Referensi',
    references: [
        {
            name: 'Analisis Data Trajektori',
            description: 'Sumber akademis tentang pemrosesan dan analisis data trajektori GPS',
            url: 'https://id.wikipedia.org/wiki/Penambangan_data_trajektori'
        },
        {
            name: 'Root Mean Square Error',
            description: 'Pengenalan terperinci tentang RMSE di Wikipedia',
            url: 'https://id.wikipedia.org/wiki/Galat_kuadrat_rata-rata'
        },
        {
            name: 'Spesifikasi Format GeoJSON',
            description: 'Dokumen spesifikasi resmi untuk format data geografis GeoJSON',
            url: 'https://tools.ietf.org/html/rfc7946'
        }
    ]
}