export default {
    title: 'Panduan Konverter Waktu GNSS - Alat online untuk konversi antara minggu/detik GPS dan waktu UTC',
    functionTitle: 'Apa itu Konverter Waktu GNSS dan apa tujuannya?',
    intro: '<strong>Konverter Waktu GNSS</strong> kami adalah alat profesional online yang memungkinkan konversi timbal balik antara waktu UTC, minggu/detik GPS, dan waktu BeiDou. Alat ini mendukung perhitungan tanggal Julian, pemrosesan batch, dan fungsi visualisasi garis waktu, cocok untuk penentuan posisi navigasi satelit, teknik survei, penelitian ilmiah, dan bidang lainnya. Dengan menggunakan <strong>alat konversi minggu/detik GPS</strong> kami, Anda dapat dengan cepat dan akurat menyelesaikan berbagai kebutuhan konversi sistem waktu GNSS.',

    useCasesTitle: 'Skenario aplikasi umum untuk Konverter Waktu GNSS',
    useCases: [
        'Sinkronisasi waktu dalam pemrosesan data penentuan posisi navigasi satelit',
        'Analisis dan pasca-pemrosesan data penerima GNSS',
        'Konversi waktu presisi dalam teknik survei',
        'Penyatuan referensi waktu di bidang kedirgantaraan',
        'Penggabungan data waktu dari beberapa sistem dalam proyek penelitian ilmiah',
        'Analisis komparatif data antara sistem navigasi BeiDou dan GPS'
    ],

    tipTitle: 'Tip Profesional:',
    tipContent: 'Saat melakukan konversi waktu presisi tinggi, perhatikan perbedaan detik kabisat antara sistem GNSS yang berbeda. Waktu GPS memiliki perbedaan detik kabisat tetap dengan waktu UTC, dan waktu BeiDou juga memiliki perbedaan detik kabisat yang berbeda dengan waktu UTC. Perbedaan ini berubah seiring waktu.',

    conclusion: '<strong>Konverter Waktu GNSS</strong> sangat berguna bagi insinyur navigasi satelit, profesional survei, peneliti ilmiah, dan siapa pun yang perlu memproses data waktu GNSS. Dengan menggunakan alat kami, Anda dapat menghemat banyak waktu perhitungan manual, menghindari kesalahan konversi, dan meningkatkan efisiensi kerja. Alat kami membuat proses konversi waktu GNSS menjadi sederhana dan efisien, tanpa perlu menginstal perangkat lunak profesional apa pun.',

    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: [
        {
            question: 'Apa itu minggu GPS dan waktu minggu?',
            answer: 'Minggu GPS adalah hitungan berkelanjutan minggu mulai dari 6 Januari 1980 pukul 00:00:00, dan waktu minggu (TOW) adalah jumlah detik dalam seminggu mulai dari hari Minggu pukul 00:00. Sistem waktu GPS menggunakan detik waktu atom sebagai referensi waktu, tidak menambahkan detik kabisat setelah awalnya, dan mempertahankan kontinuitas waktu. Metode representasi ini banyak digunakan dalam navigasi satelit karena dapat menghindari kompleksitas yang disebabkan oleh penyesuaian detik kabisat.'
        },
        {
            question: 'Apa perbedaan antara waktu UTC dan waktu GPS?',
            answer: 'UTC (Waktu Universal Terkoordinasi) adalah standar waktu internasional, yang secara berkala menambahkan detik kabisat untuk beradaptasi dengan perubahan kecepatan rotasi Bumi. Waktu GPS didasarkan pada waktu atom, selaras dengan waktu UTC sejak 6 Januari 1980, tetapi tidak disesuaikan dengan detik kabisat. Oleh karena itu, ada perbedaan detik penuh antara waktu GPS dan waktu UTC, dan perbedaan ini meningkat seiring dengan penambahan detik kabisat. Hingga saat ini, waktu GPS sekitar 18 detik lebih maju dari waktu UTC.'
        },
        {
            question: 'Bagaimana cara mengkonversi beberapa data waktu secara batch?',
            answer: 'Dengan menggunakan <strong>fungsi konversi waktu batch</strong> kami, Anda dapat memasukkan beberapa data waktu baris demi baris di kotak input batch. Sesuai dengan mode input yang dipilih (tanggal dan waktu, waktu GPS, atau waktu BeiDou), masukkan data dalam format yang sesuai, satu catatan per baris. Misalnya, format waktu GPS adalah "minggu,detik", seperti "2234,172800". Setelah menyelesaikan input, klik tombol "Konversi Waktu", dan sistem akan secara otomatis mengkonversi semua data.'
        },
        {
            question: 'Apa itu tanggal Julian? Mengapa kita perlu menghitungnya?',
            answer: 'Tanggal Julian adalah metode penghitungan hari yang berkelanjutan, menghitung hari sejak 1 Januari 4713 SM pukul 12:00, banyak digunakan dalam astronomi dan bidang kedirgantaraan. Tanggal Julian menyediakan metode terpadu representasi waktu, memudahkan konversi waktu antar sistem dan perhitungan periode waktu yang panjang. Dalam aplikasi GNSS, tanggal Julian umumnya digunakan untuk perhitungan orbit dan skenario sinkronisasi waktu.'
        },
        {
            question: 'Apa tujuan fungsi visualisasi garis waktu?',
            answer: 'Fungsi visualisasi garis waktu dapat secara intuitif menunjukkan hubungan posisi relatif dari semua titik waktu yang dikonversi dalam antarmuka grafis. Dengan melihat garis waktu, Anda dapat dengan cepat memahami interval dan distribusi antara titik waktu yang berbeda, membantu menemukan anomali atau pola dalam data. Fungsi ini sangat cocok untuk menganalisis data GNSS deret waktu panjang.'
        }
    ],

    tutorialTitle: 'Cara Menggunakan Konverter Waktu GNSS',
    steps: [
        {
            title: 'Pilih Mode Input',
            description: 'Pilih mode input yang sesuai di bagian atas area input kiri: tanggal dan waktu, waktu GPS, atau waktu BeiDou. Pilih mode yang sesuai menurut jenis data Anda untuk menganalisis data input dengan benar.',
            note: 'Mode tanggal dan waktu mendukung format ISO standar, seperti 2023-01-01T00:00:00.'
        },
        {
            title: 'Masukkan Data Waktu',
            description: 'Masukkan data waktu ke dalam kotak input yang sesuai. Anda dapat memasukkan satu titik waktu atau beberapa titik waktu di kotak input batch, satu catatan per baris. Sistem mendukung beberapa format input untuk menyesuaikan dengan kebutuhan yang berbeda.',
            note: 'Saat input batch, pastikan setiap baris data memiliki format yang konsisten untuk menghindari kesalahan konversi.'
        },
        {
            title: 'Atur Format Output',
            description: 'Pilih format waktu output di area pengaturan parameter. Anda dapat memilih format ISO standar (YYYY-MM-DD HH:mm:ss) atau format kustom. Pilih format yang sesuai menurut persyaratan penggunaan selanjutnya.',
            note: 'Format ISO nyaman untuk pemrosesan program, sementara format kustom nyaman untuk pembacaan manusia.'
        },
        {
            title: 'Jalankan Konversi',
            description: 'Klik tombol <strong>"Konversi Waktu"</strong> untuk memulai konversi. Sistem akan secara otomatis menghitung dan menampilkan waktu UTC, waktu GPS, waktu BeiDou, tanggal Julian, dan informasi lain berdasarkan mode input yang dipilih dan data yang dimasukkan.',
            note: 'Proses konversi biasanya selesai dalam hitungan detik, bahkan untuk jumlah data yang besar.'
        },
        {
            title: 'Lihat dan Ekspor Hasil',
            description: 'Setelah konversi selesai, hasil akan ditampilkan di area output kanan. Anda dapat melihat informasi konversi terperinci untuk setiap titik waktu, menggunakan fungsi visualisasi garis waktu untuk melihat distribusi waktu, atau mengklik tombol "Ekspor CSV" untuk menyimpan hasil sebagai file.',
            note: 'Klik tombol "Salin" untuk setiap item hasil untuk dengan cepat menyalin hasil konversi catatan tersebut.'
        }
    ],

    successTitle: 'Selamat!',
    successContent: 'Anda telah berhasil mempelajari cara menggunakan Konverter Waktu GNSS kami. Sekarang Anda dapat dengan mudah menyelesaikan konversi timbal balik antara waktu UTC, waktu GPS, dan waktu BeiDou untuk navigasi satelit, teknik survei, penelitian ilmiah, dan berbagai skenario aplikasi lainnya.',

    relatedToolsTitle: 'Alat Terkait Yang Mungkin Menarik Bagi Anda',
    relatedTools: [
        {
            name: 'Konverter Koordinat',
            description: 'Mengkonversi koordinat lintang dan bujur antara sistem koordinat yang berbeda, kompatibel dengan berbagai sistem proyeksi.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Pemutaran Ulang Jejak GPS',
            description: 'Memuat dan memvisualisasikan data jejak GPS, kompatibel dengan berbagai format file.',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Kalkulator Proyeksi Gaussian',
            description: 'Melakukan perhitungan proyeksi Gauss-Krüger langsung dan terbalik, kompatibel dengan zona 3 dan 6 derajat.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'Kalkulator Pembagi Lembar',
            description: 'Menghitung nomor lembar peta berdasarkan koordinat lintang dan bujur, kompatibel dengan berbagai skala.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        }
    ],

    referencesTitle: 'Sumber Referensi',
    references: [
        {
            name: 'Dasar-dasar Waktu dalam Sistem Navigasi Satelit Global',
            description: 'Pengantar terperinci tentang sistem waktu GNSS',
            url: 'https://www.ngs.noaa.gov/CORS/GNSS-Time.shtml'
        },
        {
            name: 'Sistem Waktu GPS Dijelaskan',
            description: 'Pengantar terperinci tentang sistem waktu GPS',
            url: 'https://en.wikipedia.org/wiki/GPS_time'
        },
        {
            name: 'Sistem Waktu BeiDou',
            description: 'Penjelasan referensi waktu sistem navigasi BeiDou',
            url: 'https://en.wikipedia.org/wiki/BeiDou'
        }
    ]
}