export default {
    title: 'Transformator Tujuh Parameter: Tutorial Konversi Batch Koordinat Geodetik Bursa-Wolf',
    functionTitle: 'Bagaimana Transformator Tujuh Parameter Menyelesaikan Tantangan Integrasi Multi-Sistem Koordinat?',
    intro: '<p>Transformator Tujuh Parameter menyediakan konversi batch antara koordinat XYZ dan BLH <strong>WGS84, CGCS2000, Beijing 54, Xi\'an 80</strong> berdasarkan model Bursa-Wolf, berfokus pada penyelesaian masalah offset dan ketertelusuran dalam penggabungan koordinat multi-sumber di platform survei, teknik, dan SIG. Alat ini dilengkapi dengan algoritma terbuka, penyetelan kesalahan, dan log proses untuk memastikan setiap konversi dapat ditelusuri, direproduksi, dan dievaluasi.</p><p>Dengan penyetelan otomatis dan manajemen parameter berbasis templat, tim dapat dengan cepat menggunakan kembali himpunan tujuh parameter berkualitas tinggi di berbagai proyek dan memverifikasi setiap langkah rotasi dan koreksi skala melalui log, memudahkan pengajuan dokumentasi teknis lengkap selama tahap tender publik dan penerimaan.</p>',
    useCasesTitle: 'Skenario Aplikasi Praktis',
    useCases: {
        first: '<strong>Survei Konstruksi dan Perkotaan</strong>: Mengintegrasikan hasil CGCS2000 dengan sistem koordinat lokal independen untuk memastikan sambungan mulus antara pipa bawah tanah, model BIM, dan gambar as-built.',
        second: '<strong>Teknik Energi dan Transportasi</strong>: Konstruksi lintas provinsi memerlukan interoperabilitas antara koordinat Beijing 54, Xi\'an 80, dan WGS84, Transformator Tujuh Parameter menyediakan evaluasi kesalahan menyeluruh.',
        third: '<strong>Penginderaan Jauh dan UAV</strong>: Hasil pemotretan udara sering kali dihasilkan dalam WGS84, memerlukan konversi tujuh parameter presisi tinggi sebelum mengimpor ke proyeksi Gauss-Kruger lokal.',
        fourth: '<strong>Pendaftaran Sumber Daya Alam</strong>: Koordinat tonggak sejarah sering menggunakan datum geodetik lama, alat ini dapat memetakan mereka secara andal ke CGCS2000 untuk pendaftaran dan peninjauan.'
    },
    tipTitle: 'Ilustrasi Produk',
    logoAlt: '/seven-parameter-transformer-logo.png',
    tipContent: 'Ilustrasi ini dapat diindeks oleh mesin pencari untuk cuplikan media kaya dalam hasil pencarian.',
    conclusion: '<p>Dari pemeriksaan titik tunggal hingga pemrosesan puluhan ribu batch, Transformator Tujuh Parameter dapat menghasilkan laporan yang berisi residu koordinat, RMSE, dan interval kepercayaan. Mengandalkan implementasi frontend 100%, koordinat sensitif tidak akan meninggalkan browser, memenuhi persyaratan kepatuhan untuk proyek rahasia terkait pendaratan data.</p>',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: {
        q1: {
            question: 'Bagaimana Transformator Tujuh Parameter Memastikan Akurasi Perhitungan Tujuh Parameter Bursa-Wolf?',
            answer: '<p>Alat ini menggunakan metode kuadrat terkecil titik umum untuk menyelesaikan tujuh parameter dan menghasilkan vektor residu, Sigma0, dan interval kepercayaan 95%. Anda dapat memverifikasi proses perhitungan matriks melalui log untuk memastikan akurasi tujuh parameter Bursa-Wolf memenuhi spesifikasi proyek.</p>'
        },
        q2: {
            question: 'Bagaimana Mengatur Pembatas Khusus Saat Mengimpor CSV Batch?',
            answer: '<p>Di area "Masukan Data Koordinat", sesuaikan bidang pembatas. Transformator Tujuh Parameter akan mengurai data XYZ/BLH/ENH sesuai dengan pembatas baru sambil mempertahankan kolom nama titik atau komentar untuk pencocokan selanjutnya.</p>'
        },
        q3: {
            question: 'Dapatkah Transformator Tujuh Parameter Menangani Proyeksi Gauss-Kruger dan UTM Secara Bersamaan?',
            answer: '<p>Bisa, cukup pilih mode yang sesuai di "Parameter Proyeksi/Ketinggian" dan isi meridian tengah, lebar zona, dan faktor skala. Proses konversi akan pertama melakukan perhitungan maju 3D, kemudian perhitungan balik ke koordinat proyeksi target.</p>'
        },
        q4: {
            question: 'Bagaimana Mendapatkan Tujuh Parameter Saat Titik Umum Tidak Mencukupi?',
            answer: '<p>Jika Anda memiliki kurang dari tiga titik umum, Anda dapat memanggil parameter contoh terintegrasi di "Templat Parameter", atau memasukkan nilai referensi dari proyek historis, kemudian memperbarui secara iteratif dengan titik baru yang dikumpulkan di lapangan.</p>'
        },
        q5: {
            question: 'Apakah Transformator Tujuh Parameter Mendukung Sistem Koordinat Lokal Independen?',
            answer: '<p>Mendukung. Anda dapat memasukkan setengah sumbu besar dan kebalikan pemampatan di "Parameter Elipsoid Khusus" dan menggabungkannya dengan parameter proyeksi khusus untuk mencapai restorasi realistis dan konversi timbal balik sistem koordinat lokal independen.</p>'
        }
    },
    tutorialTitle: 'Panduan Operasi Transformator Tujuh Parameter',
    steps: {
        step1: {
            title: 'Pilih Sistem Koordinat dan Mode Proyeksi',
            description: 'Pertama pilih sistem koordinat sumber dan target, lalu isi informasi seperti meridian tengah dan lebar zona di area parameter proyeksi untuk memastikan konsistensi dengan data terukur.'
        },
        step2: {
            title: 'Masukkan atau Impor Titik Koordinat',
            description: 'Dapat memasukkan titik tunggal XYZ/BLH/ENH secara manual, atau menyeret CSV/TXT untuk impor batch. Sesuaikan pembatas jika diperlukan untuk menjaga analisis yang benar.'
        },
        step3: {
            title: 'Konfigurasi Tujuh Parameter',
            description: 'Jika parameter sudah diketahui, langsung isi ΔX, ΔY, ΔZ, Rx, Ry, Rz, dan skala; jika belum diketahui, tempel pasangan titik di "Penyelesai Titik Umum" dan jalankan penyetelan.'
        },
        step4: {
            title: 'Lakukan Konversi dan Lihat Log',
            description: 'Setelah mengklik "Lakukan Konversi", log waktu nyata akan menampilkan penguraian, perhitungan maju/balik, rotasi, dan koreksi skala, memudahkan pelacakan masalah.'
        },
        step5: {
            title: 'Evaluasi Akurasi',
            description: 'Panel hasil menampilkan RMSE, residu maksimum, dan interval kepercayaan 95%. Jika metrik melebihi batas, kembali ke area parameter untuk menyesuaikan atau menyetel ulang.'
        },
        step6: {
            title: 'Ekspor Hasil dan Laporan',
            description: 'Setelah mengonfirmasi akurasi, ekspor CSV hasil dan log bersama-sama untuk pengarsipan atau pengajuan peninjauan.'
        }
    },
    successTitle: 'Penerapan Selesai',
    successContent: 'Selamat! Anda telah menguasai seluruh alur kerja Transformator Tujuh Parameter, sekarang dapat dengan cepat menyelesaikan konversi batch dalam proyek penggabungan koordinat multi-sumber dan menghasilkan laporan akurasi tingkat profesional.',
    relatedToolsTitle: 'Alat Terkait yang Direkomendasikan',
    relatedTools: {
        first: {
            name: 'Kalkulator Lembar Peta',
            description: 'Menghitung nomor lembar berdasarkan koordinat lintang dan bujur, mendukung berbagai skala.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        second: {
            name: 'Konverter Waktu GNSS',
            description: 'Alat untuk mengkonversi antara waktu GPS, waktu BeiDou, dan waktu UTC.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        third: {
            name: 'Kalkulator Luas dan Keliling',
            description: 'Mendukung menggambar poligon untuk menghitung luas dan keliling secara otomatis, menyediakan pergantian unit ganda.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        fourth: {
            name: 'Kalkulator Garis Dasar',
            description: 'Memasukkan koordinat titik awal dan akhir untuk menghitung panjang dan azimuth garis dasar, mendukung analisis propagasi kesalahan.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    },
    referencesTitle: 'Referensi Eksternal',
    references: {
        first: {
            name: 'Asosiasi Industri Informasi Geografis Tiongkok - Standar dan Regulasi',
            description: 'Standar teknis dan regulasi industri informasi geografis Tiongkok',
            url: 'http://www.cagis.org.cn/'
        },
        second: {
            name: 'Standar Sistem Koordinat Referensi ISO 19111',
            description: 'Standar internasional otoritatif untuk referensi koordinat dan transformasi proyeksi.',
            url: 'https://www.iso.org/standard/74039.html'
        },
        third: {
            name: 'Standar Konsorsium Geospasial Terbuka (OGC)',
            description: 'Standar internasional untuk transformasi data geospasial',
            url: 'https://www.ogc.org/'
        }
    }
}