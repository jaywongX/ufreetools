export default {
    title: 'Transformator Empat Parameter: Panduan Batch untuk Transformasi Similaritas Planar dan Transformasi Helmert',
    functionTitle: 'Bagaimana Transformator Empat Parameter Memastikan Integrasi Koordinat Regional dengan Satu Klik?',
    intro: '<p>Transformator empat parameter dibangun berdasarkan model similaritas planar, Bursa sederhana, dan Helmert, mencakup semua parameter termasuk translasi ΔX, ΔY, rotasi θ, dan skala m. Melalui algoritma frontend murni, sistem dapat menyelesaikan perhitungan maju/mundur titik tunggal dan batch secara lokal di browser, memberikan vektor residu, RMSE, interval kepercayaan 95%, dan peta panas akurasi secara real-time, memastikan setiap integrasi koordinat dapat dilacak, diverifikasi, dan dievaluasi.</p>',
    useCasesTitle: 'Fungsi Alat dan Skenario Aplikasi',
    useCases: {
        first: '<strong>Integrasi Koordinat Teknik</strong>: Dalam proyek pembaruan kota atau transportasi rel, dengan cepat memetakan sistem koordinat independen lokal ke sistem koordinat teknik terpadu, meningkatkan efisiensi kolaborasi desain dan konstruksi.',
        second: '<strong>Mosaik Proyeksi Regional</strong>: Hasil penginderaan jauh dan UAV sering berasal dari zona proyeksi yang berbeda, transformator empat parameter dapat memperbarui titik kontrol planar secara batch untuk mencapai penyambungan tanpa jahitan.',
        third: '<strong>Fusi Sistem Planar Khusus</strong>: Mengintegrasikan sistem koordinat yang dibangun sendiri di pabrik atau taman industri, menggunakan model empat parameter untuk menghilangkan perbedaan skala dan rotasi, mencapai konsistensi antara gambar dan kondisi lapangan.',
        fourth: '<strong>Tinjauan Hasil dan Penerimaan</strong>: Menghasilkan histogram distribusi residu dan interval kepercayaan untuk mengirimkan laporan evaluasi kuantitatif kepada klien atau otoritas pengatur.'
    },
    tipTitle: 'Gambar Halaman Produk',
    logoAlt: 'Pratinjau Produk Transformator Empat Parameter',
    tipContent: 'Ilustrasi ini dapat di-crawl oleh mesin pencari untuk cuplikan media kaya dalam hasil pencarian.',
    conclusion: '<p>Dengan transformator empat parameter, tim survei, desain, dan pengawasan dapat menyelesaikan konversi lokal, tinjauan residu, dan output laporan tanpa membocorkan koordinat asli, memenuhi persyaratan siklus hidup proyek untuk keterlacakkan dan verifikasi data. Untuk transformasi zona proyeksi lebih lanjut, dapat digunakan dengan <a href="https://www.ufreetools.com/tool/coordinate-zone-switcher" target="_blank">Alat Pengalih Zona Koordinat Batch</a>; untuk standar internasional, kunjungi <a href="https://www.ogc.org/" target="_blank" rel="noopener noreferrer">Transformasi Koordinat OGC</a> untuk panduan lebih lanjut.</p>',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: {
        q1: {
            question: 'Bagaimana Transformator Empat Parameter Memastikan Akurasi dan Stabilitas Transformasi Similaritas Planar?',
            answer: '<p>Alat menggunakan penyetelan kuadrat terkecil untuk menyelesaikan ΔX, ΔY, θ, m, dan menghasilkan RMSE, residu maksimum, dan interval kepercayaan 95%. Pengguna dapat meninjau operasi matriks melalui log untuk memverifikasi akurasi transformasi similaritas planar.</p>'
        },
        q2: {
            question: 'Dapatkah koordinat yang salah dilewati secara otomatis selama impor batch?',
            answer: '<p>Ya. Jika ditemukan perhitungan kolom yang tidak konsisten atau data anomali selama fase analisis, sistem akan mencatat dan melewati entri tersebut dalam log, melanjutkan pemrosesan koordinat yang tersisa untuk memastikan konversi batch tidak terputus.</p>'
        },
        q3: {
            question: 'Apakah Transformator Empat Parameter mendukung perhitungan maju dan mundur?',
            answer: '<p>Ya. Alat menyediakan tombol perhitungan maju (sumber → target) dan perhitungan mundur (target → sumber), memudahkan perbandingan koordinat sebelum dan sesudah transformasi serta menghasilkan visualisasi tumpang tindih.</p>'
        },
        q4: {
            question: 'Bagaimana melihat distribusi residu di Transformator Empat Parameter?',
            answer: '<p>Setelah menyelesaikan konversi, sistem secara otomatis menggambar diagram distribusi titik kontrol, histogram residu, dan kisi peta panas akurasi, membantu Anda menentukan apakah kelompok titik seragam dan kesalahan terkonsentrasi.</p>'
        },
        q5: {
            question: 'Dapatkah laporan yang dihasilkan Transformator Empat Parameter dikutip?',
            answer: '<p>Ya. Area hasil mendukung ekspor CSV, log dapat disalin dengan satu klik, dan diagram dapat di-screenshot dan disematkan dalam laporan teknis, memenuhi persyaratan penerimaan atau pengarsipan teknik.</p>'
        }
    },
    tutorialTitle: 'Panduan Operasi Transformator Empat Parameter',
    steps: {
        step1: {
            title: 'Menyiapkan Koordinat Sumber dan Titik Kontrol',
            description: 'Pertama-tama atur koordinat sumber dengan koordinat target yang sesuai, dan konfirmasi format pembatas, pastikan setiap baris data berisi X, Y, dan nilai target opsional serta nama titik.'
        },
        step2: {
            title: 'Memilih Model dan Memasukkan Parameter',
            description: 'Di "Pengaturan Model", pilih similaritas planar, model Bursa sederhana, atau model Helmert, masukkan ΔX, ΔY, θ, m, atau biarkan kosong untuk menunggu hasil penyetelan.'
        },
        step3: {
            title: 'Memuat Contoh atau Mengimpor File',
            description: 'Anda dapat menggunakan "Muat Contoh" untuk pengalaman cepat, atau menyeret file CSV/TXT untuk mengimpor jumlah besar koordinat dan menganalisisnya secara otomatis.'
        },
        step4: {
            title: 'Melakukan Penyetelan dan Konversi',
            description: 'Tempelkan koordinat berpasangan di area solusi titik umum, klik "Penyetelan Similaritas Planar" untuk mendapatkan parameter optimal, lalu jalankan perhitungan maju atau mundur untuk menyelesaikan konversi batch.'
        },
        step5: {
            title: 'Melihat Log dan Visualisasi',
            description: 'Log real-time akan menampilkan proses analisis, penyetelan, konversi, dan statistik, sambil menggambar distribusi titik kontrol, histogram residu, dan ikhtisar peta panas.'
        },
        step6: {
            title: 'Mengekspor Hasil dan Berbagi',
            description: 'Setelah mengonfirmasi hasil, ekspor CSV dan log, serta ambil tangkapan layar diagram visualisasi untuk pengajuan hasil, tinjauan, atau pengarsipan dokumen.'
        }
    },
    successTitle: 'Penerapan Selesai',
    successContent: 'Selamat! Anda telah menguasai seluruh alur kerja transformator empat parameter dan sekarang dapat dengan percaya diri menangani berbagai tugas integrasi koordinat planar serta menghasilkan laporan evaluasi akurasi.',
    relatedToolsTitle: 'Alat Terkait yang Direkomendasikan',
    relatedTools: {
        first: {
            name: 'Kalkulator Lembar Peta',
            description: 'Menghitung nomor lembar berdasarkan koordinat lintang dan bujur, mendukung beberapa skala.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        second: {
            name: 'Konverter Waktu GNSS',
            description: 'Alat untuk mengkonversi antara waktu GPS, waktu BeiDou, dan waktu UTC.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        third: {
            name: 'Kalkulator Luas dan Keliling',
            description: 'Mendukung menggambar poligon untuk menghitung luas dan keliling secara otomatis, menyediakan beberapa sakelar unit.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        fourth: {
            name: 'Kalkulator Garis Dasar',
            description: 'Memasukkan koordinat titik awal dan akhir untuk menghitung panjang dan azimuth garis dasar, mendukung analisis propagasi kesalahan.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    },
    referencesTitle: 'Referensi',
    references: {
        first: {
            name: 'Asosiasi Industri Informasi Geografis Tiongkok - Standar dan Peraturan',
            description: 'Standar teknis dan peraturan industri informasi geografis Tiongkok',
            url: 'http://www.cagis.org.cn/'
        },
        second: {
            name: 'Standar Sistem Referensi Spasial ISO 19111',
            description: 'Standar internasional otoritatif untuk transformasi referensi spasial dan proyeksi.',
            url: 'https://www.iso.org/standard/74039.html'
        },
        third: {
            name: 'Standar Konsorsium Geospasial Terbuka (OGC)',
            description: 'Standar internasional untuk transformasi data geospasial',
            url: 'https://www.ogc.org/'
        }
    }
}