export default {
    title: 'Panduan Pengguna Kalkulator Format Koordinat - Alat Konversi Garis Lintang dan Bujur Online',
    functionTitle: 'Apa itu Kalkulator Format Koordinat dan Kegunaannya?',
    intro: '<strong>Kalkulator Format Koordinat</strong> kami adalah alat online yang kuat yang memungkinkan konversi presisi antara derajat desimal, derajat menit detik, dan format derajat menit. Alat ini mendukung konversi koordinat tunggal dan batch, menyediakan pengaturan desimal yang dapat disesuaikan, dan memungkinkan penyesuaian presisi secara real-time melalui slider. Hasil konversi menampilkan efek animasi sorotan, mendukung penyalinan satu klik ke clipboard, dan fungsi ekspor batch. Dengan menggunakan <strong>konverter garis lintang dan bujur</strong> kami, Anda dapat dengan mudah menangani berbagai format koordinat geografis untuk memenuhi kebutuhan profesional dalam survei, navigasi, SIG, dan lainnya.',

    useCasesTitle: 'Skenario Aplikasi Umum Kalkulator Format Koordinat',
    useCases: [
        'Pemrosesan data SIG, menyeragamkan data koordinat dari berbagai format',
        'Konversi koordinat perangkat navigasi GPS, menyesuaikan dengan persyaratan koordinat berbagai layanan peta',
        'Pengorganisasian data koordinat dalam proyek survei, meningkatkan efisiensi pemrosesan data',
        'Standarisasi data penelitian geografis, memastikan konsistensi format data',
        'Eksplorasi luar ruangan dan navigasi maritim, konversi cepat format koordinat untuk berbagai perangkat',
        'Pembuatan peta dan analisis spasial, memproses data koordinat dari berbagai sumber'
    ],

    tipTitle: 'Tips Profesional:',
    tipContent: 'Saat melakukan konversi koordinat batch, disarankan untuk menguji hasil konversi terlebih dahulu dengan data sampel untuk memastikan pengaturan format sudah benar. Dengan menyesuaikan slider desimal, Anda dapat melihat dampak perubahan presisi pada hasil secara real-time dan memilih pengaturan presisi yang paling sesuai untuk kebutuhan aplikasi Anda.',

    conclusion: '<strong>Kalkulator Format Koordinat</strong> sangat berguna bagi insinyur survei, profesional SIG, penggemar navigasi, dan siapa pun yang bekerja dengan data koordinat geografis. Dengan menggunakan alat konversi garis lintang dan bujur kami, Anda dapat menghemat banyak waktu perhitungan manual, menghindari kesalahan konversi format, dan meningkatkan efisiensi kerja secara signifikan melalui kemampuan pemrosesan batch. Alat kami membuat proses konversi koordinat menjadi sederhana dan efisien tanpa perlu menginstal perangkat lunak profesional apa pun.',

    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: [
        {
            question: 'Mode konversi apa yang didukung oleh Kalkulator Format Koordinat?',
            answer: '<strong>Konverter koordinat online</strong> kami mendukung tiga mode konversi utama: Derajat Desimal (DD), Derajat Menit Detik (DMS), dan Derajat Menit (DM). Format derajat desimal seperti 40.7128, format derajat menit detik seperti 40°42\'46.08"N, format derajat menit seperti 40°42.768\'N. Anda dapat dengan bebas mengkonversi antara ketiga format ini untuk memenuhi persyaratan berbagai skenario aplikasi.'
        },
        {
            question: 'Bagaimana cara melakukan konversi koordinat batch?',
            answer: 'Dengan menggunakan <strong>alat konversi batch garis lintang dan bujur</strong> kami, Anda hanya perlu memasukkan beberapa pasang koordinat baris demi baris di area input batch, memisahkan garis lintang dan bujur dengan koma. Misalnya: 39.9042,116.4074. Setelah mengklik tombol konversi, sistem akan secara otomatis memproses semua koordinat dan menampilkan hasil konversi. Fungsi ekspor batch dapat menyimpan semua hasil sebagai file teks.'
        },
        {
            question: 'Bagaimana pengaturan desimal mempengaruhi hasil konversi?',
            answer: 'Pengaturan desimal mengontrol tampilan presisi hasil konversi. Dengan menyesuaikan slider desimal, Anda dapat melihat dampak perubahan presisi pada hasil secara real-time. Lebih banyak desimal berarti presisi yang lebih tinggi, tetapi juga dapat meningkatkan redundansi data. Kami merekomendasikan memilih presisi yang sesuai berdasarkan kebutuhan aplikasi nyata, biasanya 6 desimal sudah cukup untuk sebagian besar aplikasi geografis.'
        },
        {
            question: 'Apa tujuan animasi sorotan dalam hasil konversi?',
            answer: '<strong>Alat konversi koordinat</strong> kami menampilkan efek animasi sorotan setelah menyelesaikan operasi konversi atau penyalinan, membantu pengguna dengan cepat menemukan hasil yang baru saja mereka operasikan. Mekanisme umpan balik visual ini meningkatkan pengalaman pengguna, terutama saat memproses beberapa koordinat, memungkinkan Anda dengan jelas melihat hasil mana yang dipilih atau disalin.'
        },
        {
            question: 'Bagaimana memastikan akurasi konversi koordinat?',
            answer: 'Alat kami secara otomatis memvalidasi rentang koordinat (garis lintang -90° hingga 90°, garis bujur -180° hingga 180°) selama konversi dan melakukan perhitungan matematika yang presisi. Untuk memastikan akurasi, disarankan untuk memuat data sampel sebelum digunakan untuk memeriksa hasil konversi dan mengonfirmasi bahwa hasil tersebut memenuhi harapan sebelum memproses data nyata. Alat ini juga mendukung penyalinan satu klik semua hasil konversi format untuk validasi silang.'
        }
    ],

    tutorialTitle: 'Cara Menggunakan Kalkulator Format Koordinat',
    steps: [
        {
            title: 'Pilih Mode Konversi',
            description: 'Di bagian atas area input kiri, pilih mode konversi yang Anda butuhkan: Derajat Desimal (DD), Derajat Menit Detik (DMS), atau Derajat Menit (DM). Mode yang berbeda sesuai dengan format input dan tata letak antarmuka yang berbeda.',
            note: 'Mode konversi menentukan jenis dan jumlah field input, silakan pilih mode yang sesuai berdasarkan format data Anda.'
        },
        {
            title: 'Masukkan Data Koordinat',
            description: 'Berdasarkan mode konversi yang dipilih, masukkan data koordinat di field input yang sesuai. Anda dapat memasukkan koordinat tunggal atau beberapa baris data koordinat di area input batch, dengan garis lintang dan bujur dipisahkan koma per baris.',
            note: 'Mode DMS dan DM memerlukan input terpisah untuk derajat, menit, detik (atau derajat, menit) dan arah (N/S/E/W).'
        },
        {
            title: 'Sesuaikan Pengaturan Presisi',
            description: 'Gunakan slider desimal untuk menyesuaikan presisi hasil konversi. Rentang slider adalah 0-8 desimal, dan hasil diperbarui secara real-time selama penyesuaian, memudahkan Anda memilih presisi yang paling sesuai.',
            note: 'Penyesuaian presisi mempengaruhi semua hasil konversi, termasuk hasil yang saat ini ditampilkan dan hasil konversi batch.'
        },
        {
            title: 'Lakukan Operasi Konversi',
            description: 'Klik tombol "Konversi Koordinat" untuk melakukan operasi konversi. Alat akan secara otomatis menghitung dan menampilkan hasil konversi dalam ketiga format berdasarkan data input Anda dan mode yang dipilih.',
            note: 'Setelah konversi selesai, hasil pertama akan menampilkan animasi sorotan untuk membantu Anda menemukannya dengan cepat.'
        },
        {
            title: 'Ekspor atau Salin Hasil',
            description: 'Klik tombol salin di sebelah setiap hasil untuk menyalin semua format hasil tersebut ke clipboard. Jika ada beberapa hasil, Anda dapat menggunakan tombol "Ekspor Batch" di bagian atas untuk menyimpan semua hasil sebagai file teks.',
            note: 'Operasi penyalinan juga memicu animasi sorotan, memungkinkan Anda dengan jelas mengetahui hasil mana yang telah disalin.'
        }
    ],

    successTitle: 'Selamat!',
    successContent: 'Anda telah berhasil mempelajari cara menggunakan kalkulator format koordinat kami. Sekarang Anda dapat dengan mudah mengkonversi antara format Derajat Desimal, Derajat Menit Detik, dan Derajat Menit, meningkatkan efisiensi kerja melalui fungsi pemrosesan batch dan penyesuaian presisi.',

    relatedToolsTitle: 'Alat Terkait yang Mungkin Anda Minati',
    relatedTools: [
        {
            name: 'Kalkulator Pembagi Lembar Peta',
            description: 'Menghitung nomor lembar peta berdasarkan koordinat garis lintang dan bujur, mendukung beberapa skala.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Konverter Waktu GNSS',
            description: 'Alat untuk konversi timbal balik antara waktu GPS, waktu BeiDou, dan waktu UTC.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        {
            name: 'Kalkulator Luas dan Keliling',
            description: 'Mendukung menggambar poligon untuk menghitung luas dan keliling secara otomatis, menyediakan pergantian beberapa unit.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        {
            name: 'Kalkulator Baseline',
            description: 'Masukkan koordinat titik awal dan akhir untuk menghitung panjang dan azimuth baseline, mendukung analisis propagasi kesalahan.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    ],

    referencesTitle: 'Sumber Referensi',
    references: [
        {
            name: 'Sistem Koordinat Geografis',
            description: 'Pengenalan terperinci tentang sistem koordinat geografis di Wikipedia',
            url: 'https://id.wikipedia.org/wiki/Sistem_koordinat_geografis'
        },
        {
            name: 'Geodesi',
            description: 'Sumber akademis tentang sistem koordinat dan konversi',
            url: 'https://id.wikipedia.org/wiki/Geodesi'
        },
        {
            name: 'Perpustakaan Konversi DMS',
            description: 'Perpustakaan JavaScript open-source untuk konversi koordinat di GitHub',
            url: 'https://github.com/gmaclennan/parse-dms'
        }
    ]
}