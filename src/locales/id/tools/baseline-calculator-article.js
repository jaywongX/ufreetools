export default {
    title: 'Panduan Penggunaan Kalkulator Garis Dasar - Alat online untuk menghitung panjang dan azimuth garis dasar koordinat',
    functionTitle: 'Apa itu Kalkulator Garis Dasar dan apa kegunaannya?',
    intro: '<strong>Kalkulator Garis Dasar</strong> kami adalah alat online profesional yang dapat menghitung panjang dan azimuth garis dasar antara dua titik dengan cepat dan akurat. Alat ini mendukung input varians koordinat, dapat menghitung hasil propagasi kesalahan, dan menghasilkan visualisasi elips kesalahan. Cocok untuk teknik survei, aplikasi GIS, teknik sipil, dan penelitian geografis. Dengan menggunakan <strong>alat perhitungan garis dasar koordinat</strong> kami, Anda dapat dengan mudah memproses sejumlah besar data koordinat dan menampilkan hasilnya dengan cara visual yang intuitif.',

    useCasesTitle: 'Skenario aplikasi umum untuk Kalkulator Garis Dasar',
    useCases: [
        'Pengukuran poligon dan penyesuaian jaringan kontrol dalam teknik survei',
        'Analisis data spasial dan perhitungan jarak dalam proyek GIS',
        'Tata letak konstruksi dan pengukuran dalam teknik sipil',
        'Analisis hubungan spasial dalam penelitian geografis',
        'Solusi garis dasar dalam sistem penentuan posisi navigasi',
        'Analisis hubungan titik dalam eksplorasi geologi'
    ],

    tipTitle: 'Tips Profesional:',
    tipContent: 'Saat melakukan pengukuran presisi tinggi, disarankan untuk memasukkan data varians koordinat untuk mendapatkan hasil analisis kesalahan yang lebih akurat. Fungsi visualisasi elips kesalahan dapat membantu Anda memahami distribusi kesalahan posisi titik secara intuitif.',

    conclusion: '<strong>Kalkulator Garis Dasar</strong> sangat berguna bagi insinyur survei, profesional GIS, insinyur sipil, dan siapa pun yang perlu memproses data koordinat. Dengan menggunakan alat kami, Anda dapat menghemat banyak waktu perhitungan manual, menghindari kesalahan perhitungan, dan memahami data dengan lebih baik melalui fitur visualisasi. Alat kami membuat proses perhitungan garis dasar menjadi sederhana dan efisien, tanpa perlu menginstal perangkat lunak profesional apa pun.',

    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: [
        {
            question: 'Apa itu panjang garis dasar dan azimuth?',
            answer: '<strong>Panjang garis dasar</strong> mengacu pada jarak garis lurus antara dua titik, dan <strong>azimuth</strong> adalah sudut searah jarum jam dari arah utara ke garis dasar. Dalam ilmu survei, garis dasar adalah komponen dasar dari jaringan kontrol, dan panjang serta azimuthnya adalah parameter penting yang menggambarkan hubungan spasial antara dua titik. Dengan menghitung panjang garis dasar dan azimuth secara tepat, data dasar yang andal dapat disediakan untuk pekerjaan survei selanjutnya.'
        },
        {
            question: 'Bagaimana cara memasukkan data varians koordinat?',
            answer: 'Saat menggunakan <strong>Kalkulator Garis Dasar</strong> kami, Anda dapat langsung memasukkan varians koordinat X dan Y dari titik awal dan akhir dalam mode input titik tunggal, atau menambahkan informasi varians setelah setiap baris data dalam mode input batch. Format data varians adalah: titik awal X, titik awal Y, titik akhir X, titik akhir Y, varians titik awal X, varians titik awal Y, varians titik akhir X, varians titik akhir Y. Setelah memasukkan data varians, alat akan secara otomatis menghitung hasil propagasi kesalahan dan menghasilkan elips kesalahan.'
        },
        {
            question: 'Apa yang direpresentasikan oleh elips kesalahan?',
            answer: '<strong>Elips kesalahan</strong> adalah alat grafis yang merepresentasikan distribusi kesalahan posisi titik. Sumbu semi-mayor dan semi-minor elips masing-masing merepresentasikan arah kesalahan maksimum dan minimum, dan sudut orientasi merepresentasikan arah sumbu semi-mayor. Melalui visualisasi elips kesalahan, Anda dapat memahami secara intuitif besaran dan distribusi arah kesalahan posisi titik, yang sangat penting untuk mengevaluasi keakuratan pengukuran dan melakukan kontrol kualitas.'
        },
        {
            question: 'Bagaimana cara memproses beberapa perhitungan garis dasar secara batch?',
            answer: 'Dengan menggunakan <strong>fungsi perhitungan garis dasar batch</strong> kami, Anda dapat memasukkan beberapa data garis dasar baris demi baris di kotak input batch. Format setiap baris data adalah: titik awal X, titik awal Y, titik akhir X, titik akhir Y [, varians titik awal X, varians titik awal Y, varians titik akhir X, varians titik akhir Y]. Setelah selesai memasukkan, klik tombol "Hitung Garis Dasar", dan sistem akan secara otomatis menghitung panjang, azimuth, dan informasi kesalahan terkait untuk semua garis dasar.'
        },
        {
            question: 'Apa tujuan dari fungsi visualisasi peta?',
            answer: 'Fungsi visualisasi peta dapat menampilkan secara intuitif semua garis dasar dan titik yang dihitung dalam sistem koordinat dua dimensi. Titik awal direpresentasikan dengan titik hijau, titik akhir dengan titik merah, dan garis dasar dihubungkan dengan garis biru. Jika data varians dimasukkan, elips kesalahan merah juga akan ditampilkan. Fungsi ini sangat cocok untuk memeriksa kewajaran data, mengidentifikasi nilai yang tidak wajar, dan melakukan analisis hubungan spasial.'
        }
    ],

    tutorialTitle: 'Cara Menggunakan Kalkulator Garis Dasar',
    steps: [
        {
            title: 'Pilih mode input',
            description: 'Pilih mode input yang sesuai di bagian atas area input di sebelah kiri: input titik tunggal atau input batch. Input titik tunggal cocok untuk menghitung beberapa garis dasar, sedangkan input batch cocok untuk memproses sejumlah besar data.',
            note: 'Mode input batch mendukung perhitungan dengan data varians dan menawarkan format yang lebih fleksibel.'
        },
        {
            title: 'Masukkan data koordinat',
            description: 'Masukkan data koordinat sesuai dengan mode input yang dipilih. Dalam mode input titik tunggal, masukkan koordinat X dan Y dari titik awal dan akhir secara terpisah; dalam mode input batch, masukkan beberapa data garis dasar baris demi baris, dengan setiap baris dalam format: titik awal X, titik awal Y, titik akhir X, titik akhir Y.',
            note: 'Jika analisis kesalahan diperlukan, data varians koordinat yang sesuai juga harus dimasukkan.'
        },
        {
            title: 'Jalankan perhitungan',
            description: 'Klik tombol <strong>"Hitung Garis Dasar"</strong> untuk memulai perhitungan. Sistem akan secara otomatis menghitung panjang dan azimuth setiap garis dasar berdasarkan data koordinat yang Anda masukkan, dan menghitung hasil propagasi kesalahan serta menghasilkan parameter elips kesalahan ketika data varians dimasukkan.',
            note: 'Proses perhitungan biasanya selesai dalam hitungan detik, bahkan untuk sejumlah besar data.'
        },
        {
            title: 'Lihat dan analisis hasil',
            description: 'Setelah perhitungan selesai, hasil akan ditampilkan di area output di sebelah kanan. Anda dapat melihat informasi detail untuk setiap garis dasar, termasuk panjang garis dasar, azimuth, hasil propagasi kesalahan, dan parameter elips kesalahan. Area visualisasi peta akan menampilkan distribusi semua garis dasar dan titik.',
            note: 'Klik tombol "Salin" untuk item hasil apa pun untuk dengan cepat menyalin hasil perhitungan untuk catatan tersebut.'
        },
        {
            title: 'Ekspor laporan',
            description: 'Jika Anda perlu menyimpan hasil, Anda dapat mengklik tombol <strong>"Ekspor CSV"</strong> atau <strong>"Ekspor TXT"</strong> di bagian atas area output. Sistem akan menghasilkan laporan yang berisi semua hasil perhitungan, nyaman untuk dicetak dan dibagikan.',
            note: 'Laporan yang diekspor berisi informasi perhitungan lengkap, cocok untuk dokumentasi proyek dan pelaporan.'
        }
    ],

    successTitle: 'Selamat!',
    successContent: 'Anda telah berhasil mempelajari cara menggunakan Kalkulator Garis Dasar kami. Sekarang Anda dapat dengan mudah menghitung panjang dan azimuth garis dasar antara dua titik mana pun, melakukan analisis kesalahan, dan memahami data dengan lebih baik melalui fitur visualisasi.',

    relatedToolsTitle: 'Alat terkait yang mungkin menarik bagi Anda',
    relatedTools: [
        {
            name: 'Konverter Koordinat',
            description: 'Konversi koordinat lintang dan bujur antara sistem koordinat yang berbeda, mendukung beberapa sistem proyeksi.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Kalkulator Pembagian Lembar Peta',
            description: 'Hitung nomor lembar peta berdasarkan koordinat lintang dan bujur, mendukung beberapa skala.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Konverter Waktu GNSS',
            description: 'Konversi antara waktu UTC dan detik minggu GPS, waktu BeiDou.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        {
            name: 'Perhitungan Proyeksi Gauss',
            description: 'Lakukan perhitungan langsung dan terbalik proyeksi Gauss-Krüger, mendukung zona 3 derajat dan 6 derajat.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        }
    ],

    referencesTitle: 'Sumber Referensi',
    references: [
        {
            name: 'NOAA - National Geodetic Survey',
            description: 'Referensi pengukuran, sistem koordinat, dan alat pengukuran yang disediakan oleh National Geodetic Survey AS',
            url: 'https://www.ngs.noaa.gov/TOOLS/'
        },
        {
            name: 'Federasi Internasional Surveyor (FIG)',
            description: 'Standar survei, praktik terbaik, dan sumber daya penelitian yang disediakan oleh Federasi Internasional Surveyor',
            url: 'https://www.fig.net/resources/publications/'
        },
        {
            name: 'Journal of Surveying Engineering - Perpustakaan ASCE',
            description: 'Jurnal akademik teknik survei yang diterbitkan oleh American Society of Civil Engineers, berisi penelitian dan metode terbaru',
            url: 'https://ascelibrary.org/journal/jsued2'
        }
    ]
}