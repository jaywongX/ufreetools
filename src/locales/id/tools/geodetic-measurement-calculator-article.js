export default {
    title: 'Kalkulator Pengukuran Geodetik Online: Perhitungan Akurat Jarak dan Luas di Permukaan Bumi',
    functionTitle: 'Apa itu Kalkulator Geodetik dan Kegunaannya?',
    intro: '<strong>Kalkulator pengukuran geodetik online</strong> kami adalah alat perhitungan geospasial profesional yang secara akurat menghitung jarak, azimut, dan luas di permukaan Bumi berdasarkan model elipsoid. Berbeda dengan perhitungan bidang datar sederhana, pengukuran geodetik mempertimbangkan kelengkungan Bumi dan bentuk elipsoidalnya, memberikan hasil pengukuran geospasial presisi tinggi untuk survei, navigasi, perencanaan lahan, dan penelitian ilmiah. <strong>Alat pengukuran geodetik</strong> ini mendukung berbagai parameter elipsoid standar internasional (seperti WGS84, CGCS2000, dll.) dan menyediakan visualisasi peta yang intuitif, memungkinkan Anda melihat hasil pengukuran dengan jelas.',

    useCasesTitle: 'Aplikasi Umum Kalkulator Pengukuran Geodetik',
    useCases: [
        'Profesional survei dan sistem informasi geografis (GIS) yang melakukan analisis geospasial presisi',
        'Surveyor tanah yang menghitung luas bidang dan panjang batas',
        'Perencanaan navigasi maritim dan penerbangan, menghitung jarak rute lingkaran besar dan azimut',
        'Peneliti geografi yang menganalisis data geospasial',
        'Insinyur yang merencanakan infrastruktur yang mencakup jarak jauh (seperti pipa, kabel, jalan)',
        'Sektor militer dan pertahanan untuk penentuan posisi presisi dan perhitungan jarak',
        'Profesional manajemen lingkungan dan sumber daya yang mengevaluasi ukuran kawasan lindung',
        'Pendidik yang mendemonstrasikan dampak kelengkungan Bumi pada perhitungan jarak'
    ],

    tipTitle: 'Tips Profesional:',
    tipContent: 'Untuk perhitungan jarak jauh yang mencakup skala benua, kami merekomendasikan menggunakan opsi algoritma presisi tinggi, yang menggunakan model elipsoid lengkap. Meskipun lebih lambat secara komputasi, ini memberikan hasil yang lebih akurat, terutama di wilayah kutub.',

    conclusion: '<strong>Pengukuran geodetik</strong> memainkan peran penting dalam teknologi geospasial modern. Dengan menggunakan kalkulator kami, Anda dapat menghindari kesalahan yang diperkenalkan oleh perhitungan bidang datar dan mendapatkan hasil akurat yang mempertimbangkan kelengkungan Bumi. Baik Anda seorang surveyor profesional, peneliti akademis, atau penggemar yang tertarik dengan perhitungan geospasial, alat ini memenuhi persyaratan presisi Anda sambil menyediakan visualisasi intuitif dan demonstrasi terperinci dari proses perhitungan.',

    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: [
        {
            question: 'Apa perbedaan antara perhitungan geodetik dan perhitungan jarak bidang datar?',
            answer: 'Perhitungan geodetik mempertimbangkan kelengkungan Bumi dan bentuk elipsoidalnya, sementara perhitungan jarak bidang datar memperlakukan permukaan Bumi sebagai datar. Untuk jarak pendek (beberapa kilometer), perbedaannya minimal, tetapi seiring bertambahnya jarak, perbedaannya menjadi signifikan. Misalnya, pada jarak 1000 km, perhitungan bidang datar dapat menyebabkan kesalahan puluhan kilometer. <strong>Kalkulator geodetik</strong> kami menggunakan model elipsoid (seperti WGS84) untuk perhitungan, memberikan jarak yang lebih akurat di permukaan Bumi.'
        },
        {
            question: 'Bagaimana cara memilih parameter elipsoid yang tepat?',
            answer: 'Pemilihan parameter elipsoid harus didasarkan pada lokasi geografis Anda dan kebutuhan aplikasi. WGS84 adalah standar yang digunakan oleh Sistem Pemosisian Global (GPS) dan cocok untuk sebagian besar aplikasi global; CGCS2000 adalah standar nasional China, cocok untuk pengukuran di China; wilayah lain mungkin memiliki standar mereka sendiri. Untuk kasus di mana Anda bekerja dengan peta atau dataset tertentu, pilih parameter elipsoid yang sama dengan yang digunakan oleh dataset tersebut untuk memastikan konsistensi dalam hasil perhitungan.'
        },
        {
            question: 'Apa perbedaan antara jarak lingkaran besar dan jarak geodetik?',
            answer: 'Jarak lingkaran besar adalah jarak terpendek antara dua titik sepanjang lingkaran besar (lingkaran terbesar pada bola), sementara jarak geodetik adalah jarak terpendek pada permukaan elipsoid. <strong>Alat pengukuran geodetik presisi tinggi</strong> kami menghitung jarak geodetik, mempertimbangkan bentuk elipsoidal Bumi. Dalam aplikasi praktis, untuk jarak pendek hingga menengah, perbedaannya kecil, tetapi untuk jarak jauh atau aplikasi yang memerlukan presisi tinggi, perhitungan jarak geodetik lebih akurat.'
        },
        {
            question: 'Bagaimana cara menghitung luas poligon?',
            answer: 'Untuk menghitung luas poligon, pertama tambahkan minimal tiga titik di area input koordinat (dalam urutan untuk membentuk poligon), kemudian pilih mode "Perhitungan Luas". Alat kami menggunakan metode perhitungan luas poligon sferis, mempertimbangkan kelengkungan Bumi, yang lebih akurat daripada perhitungan bidang datar. Untuk kebutuhan presisi tinggi, pilih opsi "Algoritma Presisi Tinggi", yang menggunakan model elipsoid lengkap untuk perhitungan. Hasil akan menampilkan luas dan keliling poligon, dengan representasi visual pada peta.'
        },
        {
            question: 'Seberapa akurat hasil perhitungan?',
            answer: '<strong>Kalkulator pengukuran geospasial</strong> kami menawarkan dua opsi presisi: algoritma cepat dan algoritma presisi tinggi. Algoritma cepat cocok untuk tujuan umum, biasanya akurat dalam 0,1%; algoritma presisi tinggi menggunakan model elipsoid lengkap dengan perhitungan iteratif, mencapai presisi hingga 0,001% (level sentimeter), cocok untuk survei profesional dan penelitian ilmiah. Akurasi aktual juga bergantung pada ketepatan koordinat input dan seberapa baik parameter elipsoid yang dipilih sesuai dengan wilayah aktual.'
        }
    ],

    tutorialTitle: 'Cara Menggunakan Kalkulator Pengukuran Geodetik Online',
    steps: [
        {
            title: 'Masukkan Titik Koordinat',
            description: 'Di area input koordinat, masukkan lintang dan bujur titik yang ingin Anda hitung. Anda dapat mengklik tombol <strong>"Tambah Titik"</strong> untuk menambahkan lebih banyak titik. Untuk perhitungan jarak, minimal diperlukan dua titik; untuk perhitungan luas, minimal diperlukan tiga titik.',
            note: 'Koordinat dalam format derajat desimal (misalnya, 39.9042, 116.4074), di mana nilai positif mewakili lintang utara/bujur timur dan nilai negatif mewakili lintang selatan/bujur barat.'
        },
        {
            title: 'Pilih Parameter Elipsoid',
            description: 'Pilih parameter elipsoid yang sesuai dengan kebutuhan Anda dari menu dropdown. WGS84 adalah standar yang digunakan oleh sistem GPS global dan cocok untuk sebagian besar aplikasi; CGCS2000 adalah standar nasional China; opsi lain berlaku untuk wilayah tertentu atau data historis.',
            note: 'Memilih parameter elipsoid yang sama dengan yang digunakan oleh data peta atau perangkat GPS Anda memastikan konsistensi dalam hasil perhitungan.'
        },
        {
            title: 'Atur Mode Perhitungan dan Presisi',
            description: 'Pilih mode <strong>"Jarak dan Azimut"</strong> untuk menghitung jarak dan azimut antara dua titik, atau pilih mode <strong>"Perhitungan Luas"</strong> untuk menghitung luas poligon. Kemudian pilih tingkat presisi yang diinginkan: algoritma cepat atau algoritma presisi tinggi.',
            note: 'Untuk jarak pendek atau tujuan umum, algoritma cepat cukup akurat; untuk jarak jauh atau aplikasi profesional, algoritma presisi tinggi direkomendasikan.'
        },
        {
            title: 'Konfigurasi Opsi Visualisasi',
            description: 'Centang opsi <strong>"Tampilkan Rumus Perhitungan"</strong> dan <strong>"Tampilkan Demonstrasi Dinamis"</strong> sesuai kebutuhan. Yang pertama menampilkan rumus matematika dan langkah-langkah yang digunakan dalam proses perhitungan, sementara yang kedua secara dinamis mendemonstrasikan jalur lingkaran besar atau proses konstruksi poligon pada peta.',
            note: 'Menampilkan rumus perhitungan sangat berguna untuk tujuan pendidikan atau untuk memverifikasi proses perhitungan; demonstrasi dinamis membantu memahami prinsip pengukuran permukaan Bumi secara intuitif.'
        },
        {
            title: 'Jalankan Perhitungan dan Lihat Hasil',
            description: 'Klik tombol <strong>"Hitung"</strong> untuk melakukan perhitungan. Area hasil akan menampilkan data jarak, azimut, atau luas yang dihitung, sementara peta akan memvisualisasikan hasil pengukuran. Anda dapat menyesuaikan unit (seperti kilometer, meter, mil, dll.) untuk melihat hasil dalam unit yang berbeda.',
            note: 'Visualisasi peta secara otomatis diskalakan untuk mengakomodasi semua titik input; Anda dapat menggunakan kontrol peta untuk memperbesar, menggeser, atau beralih jenis peta.'
        },
        {
            title: 'Ekspor atau Bagikan Hasil',
            description: 'Setelah perhitungan, Anda dapat menggunakan tombol <strong>"Ekspor ke PDF"</strong> atau <strong>"Ekspor ke Excel"</strong> untuk menyimpan hasil. File yang diekspor mencakup semua parameter input, hasil perhitungan, dan diagram visualisasi, nyaman untuk berbagi atau analisis lebih lanjut.',
            note: 'Semua perhitungan dilakukan di browser Anda dan tidak diunggah ke server mana pun, memastikan keamanan dan privasi data geografis Anda.'
        }
    ],

    successTitle: 'Selamat!',
    successContent: 'Anda telah berhasil mempelajari cara menggunakan kalkulator pengukuran geodetik online kami. Sekarang Anda dapat melakukan perhitungan jarak dan luas yang akurat di permukaan Bumi untuk berbagai tujuan profesional dan pendidikan.',

    relatedToolsTitle: 'Alat Terkait yang Mungkin Menarik Bagi Anda',
    relatedTools: [
        {
            name: 'Konverter Sistem Koordinat',
            description: 'Konversi koordinat geografis antara sistem koordinat yang berbeda, termasuk WGS-84, GCJ-02, BD-09, Web Mercator, dan UTM',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Pemutaran Ulang Trek GPS',
            description: 'Visualisasikan dan putar ulang trek GPS dari berbagai format file (GPX, KML, GeoJSON, CSV).',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Kalkulator Proyeksi Gauss',
            description: 'Alat untuk konversi antara koordinat proyeksi Gauss dan koordinat geografis (lintang dan bujur)',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'Penampil Awan Titik LIDAR',
            description: 'Penampil awan titik LIDAR online gratis yang mendukung format LAS, XYZ, PLY, PCD. Menyediakan visualisasi 3D, beberapa mode pewarnaan, navigasi interaktif, dan fitur analisis data',
            url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
        }
    ],

    referencesTitle: 'Sumber Referensi',
    references: [
        {
            name: 'Dasar-dasar Geodesi',
            description: 'Sumber akademis tentang parameter elipsoid dan metode perhitungan geodetik',
            url: 'https://id.wikipedia.org/wiki/Geodesi'
        },
        {
            name: 'Layanan Internasional Rotasi Bumi dan Sistem Referensi',
            description: 'Organisasi otoritatif yang menyediakan kerangka referensi terestrial internasional dan parameter elipsoid',
            url: 'https://www.iers.org/IERS/EN/Home/home_node.html'
        },
        {
            name: 'Alat Perhitungan Survei Geodetik Nasional AS',
            description: 'Materi referensi untuk berbagai metode dan algoritma perhitungan geodetik',
            url: 'https://www.ngs.noaa.gov/TOOLS/'
        }
    ]
}