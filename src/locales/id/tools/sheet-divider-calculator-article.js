export default {
    title: 'Panduan Kalkulator Pembagian Lembar Peta - Alat Kueri Nomor Lembar Peta Online',
    functionTitle: 'Apa itu Kalkulator Pembagian Lembar Peta dan apa tujuannya?',
    intro: '<strong>Kalkulator Pembagian Lembar Peta</strong> kami adalah alat online yang kuat yang menghitung nomor lembar peta dengan cepat dan akurat berdasarkan koordinat lintang dan bujur. Alat ini mendukung berbagai skala (termasuk 1:500, 1:1000, 1:50000, dll.) dan menyediakan fitur perhitungan batch dan visualisasi grid lembar. Dengan menggunakan <strong>alat kueri nomor lembar peta</strong> kami, Anda dapat dengan mudah memproses sejumlah besar data koordinat dan mengekspor hasilnya dalam format Excel atau PDF.',

    useCasesTitle: 'Aplikasi Umum Kalkulator Pembagian Lembar Peta',
    useCases: [
        'Pengelolaan dan penomoran lembar peta dalam proyek survei dan pemetaan',
        'Pengorganisasian data spasial dalam proyek Sistem Informasi Geografis (GIS)',
        'Pembagian lembar dalam perencanaan lahan dan desain perkotaan',
        'Pembagian area kerja dalam eksplorasi geologi dan survei sumber daya',
        'Produksi peta militer dan pembagian medan perang',
        'Pemrosesan data geografis skala besar dalam proyek penelitian'
    ],

    tipTitle: 'Tips Profesional:',
    tipContent: 'Saat membagi peta untuk area yang luas, disarankan untuk menggunakan zona 3 derajat untuk akurasi yang lebih tinggi, sementara zona 6 derajat dapat digunakan untuk area yang lebih kecil untuk menyederhanakan perhitungan.',

    conclusion: '<strong>Kalkulator Pembagian Lembar Peta</strong> sangat berguna bagi insinyur survei, profesional GIS, perencana kota, dan siapa pun yang perlu memproses data geospasial. Dengan menggunakan alat kami, Anda dapat menghemat waktu yang signifikan dalam perhitungan manual, menghindari kesalahan penomoran, dan meningkatkan efisiensi kerja. Alat kami membuat proses pembagian lembar peta menjadi sederhana dan efisien, tanpa perlu instalasi perangkat lunak profesional.',

    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: [
        {
            question: 'Skala apa saja yang didukung oleh Kalkulator Pembagian Lembar Peta?',
            answer: '<strong>Kalkulator Pembagian Lembar Peta online</strong> kami mendukung berbagai skala umum dari 1:500 hingga 1:1000000, termasuk 1:500, 1:1000, 1:2000, 1:5000, 1:10000, 1:25000, 1:50000, 1:100000, 1:250000, 1:500000, dan 1:1000000. Anda dapat memilih skala yang sesuai berdasarkan kebutuhan spesifik Anda.'
        },
        {
            question: 'Apa itu zona 3 derajat dan zona 6 derajat?',
            answer: 'Zona 3 derajat dan zona 6 derajat adalah dua metode zonasi dalam proyeksi Gauss-Krüger. Zona 6 derajat dimulai dari 0° bujur timur, setiap zona mencakup 6°, membagi bola dunia menjadi 60 zona. Zona 3 derajat dimulai dari 1,5° bujur timur, setiap zona mencakup 3°, membagi bola dunia menjadi 120 zona. Zona 3 derajat memberikan akurasi yang lebih tinggi dan cocok untuk pemetaan skala besar; zona 6 derajat mencakup area yang lebih luas dan cocok untuk pemetaan skala kecil.'
        },
        {
            question: 'Bagaimana cara menghitung nomor lembar peta untuk beberapa titik koordinat secara batch?',
            answer: 'Dengan menggunakan <strong>fitur perhitungan batch</strong> kami, Anda dapat memasukkan beberapa titik koordinat di kotak input batch, setiap baris dalam format "lintang,bujur,deskripsi(opsional)". Misalnya: "39.9042,116.4074,Pusat Beijing". Setelah input, klik tombol "Hitung Lembar", dan sistem akan secara otomatis menghitung nomor lembar peta untuk semua titik koordinat.'
        },
        {
            question: 'Dalam format apa hasil perhitungan dapat diekspor?',
            answer: 'Alat kami mendukung ekspor hasil perhitungan dalam format Excel dan PDF. Format Excel nyaman untuk pemrosesan dan analisis data lebih lanjut, sementara format PDF cocok untuk pencetakan dan berbagi. Anda dapat menyelesaikan ekspor dengan mengklik tombol "Ekspor ke Excel" atau "Ekspor ke PDF" di bagian atas area output.'
        },
        {
            question: 'Apa tujuan fitur visualisasi grid peta?',
            answer: 'Fitur visualisasi grid peta menampilkan secara intuitif posisi dan distribusi semua titik yang dihitung pada peta. Dengan mengklik titik-titik di grid, Anda dapat melihat informasi detail tentang titik tersebut. Lembar yang dipilih akan disorot, membantu Anda lebih memahami karakteristik distribusi spasial data. Fitur ini sangat berguna untuk memverifikasi hasil perhitungan dan melakukan analisis spasial.'
        }
    ],

    tutorialTitle: 'Cara Menggunakan Kalkulator Pembagian Lembar Peta',
    steps: [
        {
            title: 'Masukkan Data Koordinat',
            description: 'Masukkan data koordinat yang ingin Anda hitung di area input di sebelah kiri. Anda dapat memasukkan satu titik koordinat (masukkan lintang dan bujur di kotak input masing-masing) atau memasukkan beberapa titik koordinat secara batch (masukkan di kotak input batch, setiap baris dalam format "lintang,bujur,deskripsi(opsional)").',
            note: 'Format koordinat harus dalam derajat desimal, misalnya lintang 39.9042, bujur 116.4074.'
        },
        {
            title: 'Atur Parameter Perhitungan',
            description: 'Di area pengaturan parameter, pilih skala yang sesuai dan metode zona proyeksi. Skala umum termasuk 1:500, 1:1000, 1:50000, dll., dan metode zona termasuk zona 3 derajat atau zona 6 derajat.',
            note: 'Untuk skala besar (seperti 1:500, 1:1000), disarankan menggunakan zona 3 derajat untuk akurasi yang lebih tinggi.'
        },
        {
            title: 'Jalankan Perhitungan',
            description: 'Klik tombol <strong>"Hitung Lembar"</strong> untuk memulai perhitungan. Sistem akan secara otomatis menghitung nomor lembar peta dan informasi terkait untuk setiap titik berdasarkan koordinat dan parameter yang Anda tetapkan.',
            note: 'Proses perhitungan biasanya selesai dalam hitungan detik, bahkan untuk volume data yang besar.'
        },
        {
            title: 'Lihat dan Analisis Hasil',
            description: 'Setelah perhitungan selesai, hasil akan ditampilkan di area output di sebelah kanan. Anda dapat melihat informasi detail seperti nomor lembar peta, koordinat, dan skala untuk setiap titik. Area visualisasi grid peta akan menunjukkan distribusi semua titik pada peta.',
            note: 'Klik item hasil apa pun atau titik di grid untuk melihat informasi detail dan menyorotnya.'
        },
        {
            title: 'Ekspor Hasil',
            description: 'Jika Anda perlu menyimpan hasil, Anda dapat mengklik tombol <strong>"Ekspor ke Excel"</strong> atau <strong>"Ekspor ke PDF"</strong> di bagian atas area output. Format Excel nyaman untuk pemrosesan data, sementara format PDF cocok untuk pencetakan dan berbagi.',
            note: 'File yang diekspor akan berisi informasi lengkap tentang semua hasil perhitungan.'
        },
        {
            title: 'Gunakan Fitur Lanjutan',
            description: 'Anda dapat menggunakan tombol "Muat Data Contoh" untuk dengan cepat mengalami fungsionalitas alat, atau tombol "Hapus Semua" untuk mengatur ulang semua input dan hasil. Dengan mengklik item hasil yang berbeda, Anda dapat melihat posisinya di grid peta.',
            note: 'Alat ini berjalan sepenuhnya di browser, dan data Anda tidak akan diunggah ke server mana pun, memastikan privasi dan keamanan.'
        }
    ],

    successTitle: 'Selamat!',
    successContent: 'Anda telah berhasil mempelajari cara menggunakan Kalkulator Pembagian Lembar Peta kami. Sekarang Anda dapat dengan mudah menghitung nomor lembar peta untuk titik koordinat apa pun untuk digunakan dalam survei, GIS, perencanaan kota, dan berbagai skenario aplikasi lainnya.',

    relatedToolsTitle: 'Alat Terkait Yang Mungkin Menarik Bagi Anda',
    relatedTools: [
        {
            name: 'Konverter Koordinat',
            description: 'Mengkonversi koordinat lintang dan bujur antara sistem koordinat yang berbeda, mendukung banyak sistem proyeksi.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Pemutaran Ulang Trek GPS',
            description: 'Mengunggah dan memvisualisasikan data trek GPS, mendukung banyak format file.',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Kalkulator Proyeksi Gaussian',
            description: 'Melakukan perhitungan proyeksi Gauss-Krüger maju dan mundur, mendukung zona 3 derajat dan 6 derajat.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'Generator Garis Kontur',
            description: 'Membuat peta garis kontur berdasarkan data elevasi, mendukung banyak format output.',
            url: 'https://www.ufreetools.com/tool/elevation-contour-generator'
        }
    ],

    referencesTitle: 'Sumber Referensi',
    references: [
        {
            name: 'Sistem Grid Peta Internasional',
            description: 'Standar internasional untuk grid peta dan sistem penomoran lembar',
            url: 'https://www.icsm.gov.au/education/fundamentals-mapping/map-grids'
        },
        {
            name: 'Proyeksi Mercator Transversal',
            description: 'Penjelasan rinci tentang prinsip matematika di balik proyeksi UTM/Gauss-Krüger',
            url: 'https://en.wikipedia.org/wiki/Transverse_Mercator_projection'
        },
        {
            name: 'Proyeksi Peta',
            description: 'Panduan rinci untuk proyeksi peta dan sistem koordinat yang disediakan oleh lembaga pemerintah Australia',
            url: 'https://www.icsm.gov.au/education/fundamentals-mapping/map-projections'
        }
    ]
}