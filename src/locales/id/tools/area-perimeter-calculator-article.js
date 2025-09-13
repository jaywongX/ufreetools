export default {
    title: 'Panduan Pengguna Kalkulator Luas dan Keliling - Alat Pengukuran Luas dan Keliling Poligon Online',
    functionTitle: 'Apa itu Kalkulator Luas dan Keliling dan Kegunaannya?',
    intro: '<strong>Kalkulator Luas dan Keliling</strong> kami adalah alat online yang kuat yang memungkinkan Anda menggambar poligon di peta dan secara otomatis menghitung luas dan kelilingnya. Alat ini mendukung beberapa pengalihan satuan, termasuk meter persegi, hektar, kilometer persegi, dan mu, serta menyediakan mode perhitungan elipsoid bumi untuk hasil yang lebih akurat. Anda juga dapat langsung memasukkan titik koordinat untuk menghitung luas dan keliling, dan mendukung ekspor dalam berbagai format, termasuk GeoJSON, KML, gambar, CSV, TXT, dan PDF.',

    useCasesTitle: 'Skenario Aplikasi Umum Kalkulator Luas dan Keliling',
    useCases: [
        'Pengukuran dan penilaian lahan, menghitung luas dan keliling petak tanah',
        'Perencanaan kota dan desain, mengukur area bangunan dan ruang publik',
        'Manajemen pertanian, menghitung luas lahan pertanian dan cakupan irigasi',
        'Penilaian properti, mengukur batas properti dan luas yang dapat digunakan',
        'Pemantauan lingkungan, menghitung cakupan area yang dilindungi dan area yang terpengaruh',
        'Konstruksi teknik, mengukur area konstruksi dan kebutuhan material'
    ],

    tipTitle: 'Tips Profesional:',
    tipContent: 'Saat mengukur area yang luas, disarankan menggunakan mode perhitungan elipsoid untuk mendapatkan hasil yang lebih akurat. Anda dapat langsung memasukkan titik koordinat untuk menghitung luas dan keliling area yang kompleks, mendukung berbagai format input koordinat. Pengalihan antar satuan yang berbeda dapat membantu Anda menampilkan hasil pengukuran dengan cara yang paling sesuai.',

    conclusion: '<strong>Kalkulator Luas dan Keliling</strong> sangat berguna bagi pengukur tanah, perencana kota, manajer pertanian, penaksir properti, dan siapa pun yang membutuhkan pengukuran area yang akurat. Dengan menggunakan alat kami, Anda dapat menghemat banyak waktu perhitungan manual, menghindari kesalahan pengukuran, dan memahami data dengan lebih baik melalui fitur visualisasi. Alat kami membuat proses perhitungan luas dan keliling menjadi sederhana dan efisien tanpa perlu menginstal perangkat lunak profesional apa pun.',

    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: [
        {
            question: 'Mode perhitungan apa yang didukung oleh Kalkulator Luas dan Keliling?',
            answer: '<strong>Kalkulator Luas dan Keliling</strong> kami mendukung dua mode perhitungan: perhitungan planar dan perhitungan elipsoid. Perhitungan planar cocok untuk pengukuran area kecil dengan kecepatan perhitungan yang cepat; perhitungan elipsoid mempertimbangkan dampak kelengkungan bumi, cocok untuk pengukuran area besar dengan hasil yang lebih akurat. Anda dapat memilih mode perhitungan yang sesuai berdasarkan kebutuhan spesifik.'
        },
        {
            question: 'Bagaimana cara menggambar poligon di peta untuk pengukuran?',
            answer: 'Dengan menggunakan <strong>alat pengukur luas online</strong> kami, Anda hanya perlu memilih alat gambar poligon di kotak peralatan kiri, lalu klik di peta untuk menentukan titik sudut poligon. Klik dua kali titik sudut terakhir untuk menyelesaikan penggambaran, dan sistem akan secara otomatis menghitung dan menampilkan luas dan keliling. Anda juga dapat menggunakan alat persegi panjang dan lingkaran untuk menggambar bentuk teratur untuk pengukuran.'
        },
        {
            question: 'Satuan luas dan panjang apa yang didukung?',
            answer: 'Alat kami mendukung berbagai satuan luas dan panjang yang umum digunakan. Satuan luas meliputi meter persegi, hektar, kilometer persegi, ekar, dan mu; satuan panjang meliputi meter, kilometer, dan mil. Anda dapat mengganti satuan kapan saja untuk menyesuaikan dengan berbagai skenario penggunaan dan kebiasaan regional, dan hasil pengukuran akan diperbarui secara real-time.'
        },
        {
            question: 'Bagaimana cara menggunakan fungsi input koordinat?',
            answer: 'Fungsi <strong>input koordinat kalkulator luas</strong> kami memungkinkan Anda langsung memasukkan titik koordinat untuk menghitung luas dan keliling tanpa perlu menggambar secara manual di peta. Anda dapat menggunakan berbagai format untuk memasukkan koordinat, termasuk format "bujur,lintang", "[bujur,lintang]" atau "bujur lintang", dengan satu titik per baris. Setelah memasukkan minimal 3 titik, klik tombol "Hitung", dan sistem akan secara otomatis membuat poligon dan menghitung luas serta kelilingnya. Ini sangat berguna untuk pengukuran area dengan koordinat yang diketahui.'
        },
        {
            question: 'Bagaimana cara mengekspor hasil pengukuran?',
            answer: 'Setelah menyelesaikan pengukuran, Anda dapat mengekspor hasil dalam berbagai format: GeoJSON dan KML adalah format data spasial standar yang dapat diimpor ke perangkat lunak GIS lainnya; fungsi ekspor gambar dapat menyimpan tampilan peta saat ini sebagai gambar PNG; format CSV dan TXT cocok untuk membuka dan menganalisis data di perangkat lunak spreadsheet seperti Excel; format PDF cocok untuk menghasilkan laporan dan dokumen resmi. Pilih format ekspor yang paling sesuai berdasarkan kebutuhan Anda.'
        }
    ],

    tutorialTitle: 'Cara Menggunakan Kalkulator Luas dan Keliling',
    steps: [
        {
            title: 'Memilih Alat Gambar dan Mode Perhitungan',
            description: 'Sebelum memulai pengukuran, pertama-tama pilih alat gambar yang sesuai (poligon, persegi panjang, atau lingkaran) di kotak peralatan kiri. Lalu pilih mode perhitungan, untuk area yang luas disarankan memilih perhitungan elipsoid untuk mendapatkan hasil yang lebih akurat.',
            note: 'Alat gambar dan mode perhitungan dapat diubah kapan saja sesuai kebutuhan.'
        },
        {
            title: 'Menggambar Area Pengukuran di Peta',
            description: 'Setelah mengaktifkan alat gambar, klik di peta untuk menentukan batas area. Untuk alat poligon, klik setiap titik sudut secara berurutan, dan klik dua kali titik sudut terakhir untuk menyelesaikan penggambaran. Luas dan keliling area saat ini akan ditampilkan secara real-time selama proses penggambaran.',
            note: 'Anda dapat menyesuaikan bentuk area dengan menyeret titik sudut, dan hasil pengukuran akan diperbarui secara real-time.'
        },
        {
            title: 'Menggunakan Fungsi Input Koordinat',
            description: 'Jika Anda sudah memiliki data titik koordinat area, Anda dapat langsung menggunakan fungsi input koordinat. Di kotak input koordinat, masukkan satu titik koordinat per baris (format: bujur,lintang), lalu klik tombol "Hitung", dan sistem akan secara otomatis membuat poligon dan menghitung luas serta kelilingnya.',
            note: 'Mendukung berbagai format input koordinat, termasuk "bujur,lintang", "[bujur,lintang]" atau "bujur lintang".'
        },
        {
            title: 'Melihat dan Mengelola Hasil Pengukuran',
            description: 'Di daftar hasil di bawah area peta kanan, Anda dapat melihat luas dan keliling semua area yang telah digambar. Setiap area memiliki pengenal tipe dan data pengukuran yang sesuai, memudahkan Anda untuk membandingkan dan menganalisis.',
            note: 'Daftar hasil diperbarui secara real-time, menampilkan jumlah dan data semua area pengukuran saat ini.'
        },
        {
            title: 'Mengekspor Hasil Pengukuran',
            description: 'Setelah menyelesaikan pengukuran, Anda dapat mengekspor hasil dalam berbagai format, termasuk GeoJSON, KML, gambar, CSV, TXT, dan PDF. Klik tombol ekspor di kotak peralatan dan pilih format yang sesuai untuk menyelesaikan operasi ekspor.',
            note: 'File yang diekspor berisi semua informasi pengukuran, yang dapat digunakan untuk perangkat lunak GIS lainnya, analisis data, atau berbagi dengan orang lain. Format CSV dan TXT cocok untuk dibuka di perangkat lunak spreadsheet, dan format PDF cocok untuk laporan resmi.'
        }
    ],

    successTitle: 'Selamat!',
    successContent: 'Anda telah berhasil mempelajari cara menggunakan kalkulator luas dan keliling kami. Sekarang Anda dapat dengan mudah menggambar area di peta dan menghitung luas serta kelilingnya, mendapatkan pengalaman pengukuran terbaik melalui berbagai satuan dan mode tampilan.',

    relatedToolsTitle: 'Alat Terkait yang Mungkin Anda Minati',
    relatedTools: [
        {
            name: 'Kalkulator Baseline',
            description: 'Masukkan koordinat titik awal dan akhir untuk menghitung panjang dan azimuth baseline, mendukung analisis propagasi kesalahan.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        },
        {
            name: 'Kalkulator Pembagi Lembar Peta',
            description: 'Menghitung nomor lembar peta berdasarkan koordinat bujur dan lintang, mendukung berbagai skala.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Konverter Koordinat',
            description: 'Mengonversi koordinat bujur dan lintang antara berbagai sistem koordinat, mendukung berbagai sistem proyeksi.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Konverter Waktu GNSS',
            description: 'Mewujudkan konversi timbal balik antara waktu UTC dan detik minggu GPS, waktu BeiDou.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        }
    ],

    referencesTitle: 'Sumber Referensi',
    references: [
        {
            name: 'Perpustakaan GeographicLib',
            description: 'Perpustakaan open-source yang berfokus pada perhitungan geospasial presisi tinggi',
            url: 'https://geographiclib.sourceforge.io/'
        },
        {
            name: 'Perpustakaan Peta Leaflet',
            description: 'Perpustakaan JavaScript peta interaktif open-source',
            url: 'https://leafletjs.com/'
        },
        {
            name: 'Perpustakaan Analisis Spasial Turf.js',
            description: 'Perpustakaan JavaScript untuk analisis geospasial',
            url: 'https://turfjs.org/'
        },
        {
            name: 'Perpustakaan jsPDF',
            description: 'Perpustakaan JavaScript untuk menghasilkan dokumen PDF di sisi klien',
            url: 'https://github.com/parallax/jsPDF'
        }
    ]
}