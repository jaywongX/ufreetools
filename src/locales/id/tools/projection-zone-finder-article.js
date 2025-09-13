export default {
    title: 'Panduan Pengguna Pencari Zona Proyeksi - Kalkulator Zona Proyeksi UTM Online',
    functionTitle: 'Apa itu Pencari Zona Proyeksi dan Kegunaannya?',
    intro: '<strong>Pencari Zona Proyeksi</strong> kami adalah alat online yang kuat yang secara otomatis menghitung nomor zona UTM 3° dan 6° berdasarkan koordinat lintang dan bujur yang dimasukkan. Alat ini mendukung input koordinat tunggal dan batch, menyediakan fungsi tampilan kisi zona peta, dan menampilkan informasi zona proyeksi secara real-time saat Anda menggerakkan mouse di atas peta. Melalui penyorotan dinamis area zona, Anda dapat memahami hubungan antara koordinat dan zona proyeksi secara intuitif. Dengan menggunakan <strong>Kalkulator Zona Proyeksi UTM</strong> kami, Anda dapat dengan mudah memperoleh nomor zona proyeksi yang sesuai untuk titik koordinat, dengan fungsi salin satu klik dan ekspor batch untuk memenuhi kebutuhan profesional survei dan SIG.',

    useCasesTitle: 'Skenario Aplikasi Umum Pencari Zona Proyeksi',
    useCases: [
        'Pemrosesan data SIG, menentukan nomor zona proyeksi UTM untuk titik koordinat',
        'Pemrosesan citra penginderaan jauh, memilih parameter proyeksi yang benar untuk citra satelit',
        'Pengaturan parameter proyeksi dalam proyek survei, memastikan konsistensi sistem koordinat data',
        'Pembuatan peta dan analisis spasial, memilih sistem koordinat proyeksi yang sesuai',
        'Standarisasi data penelitian geografis, menyatukan nomor zona proyeksi untuk integrasi data',
        'Aplikasi navigasi dan penentuan posisi, mengatur parameter proyeksi UTM yang benar untuk perangkat GPS'
    ],

    tipTitle: 'Tips Profesional:',
    tipContent: 'Saat memproses koordinat batch, disarankan untuk menguji hasil perhitungan zona proyeksi terlebih dahulu dengan data sampel untuk memastikan tipe proyeksi yang dipilih (zona 3° atau zona 6°) memenuhi persyaratan proyek Anda. Dengan menggerakkan mouse di atas peta, Anda dapat melihat distribusi zona proyeksi di berbagai area secara intuitif, membantu Anda memahami prinsip zonasi proyeksi UTM dengan lebih baik.',

    conclusion: '<strong>Pencari Zona Proyeksi</strong> sangat berguna bagi insinyur survei, profesional SIG, pemroses data penginderaan jauh, dan siapa pun yang perlu menggunakan koordinat proyeksi UTM. Dengan menggunakan Kalkulator Zona Proyeksi UTM kami, Anda dapat menghemat banyak waktu perhitungan manual, menghindari kesalahan pemilihan zona proyeksi, dan memahami hubungan antara koordinat dan zona proyeksi dengan lebih baik melalui fitur visualisasi. Alat kami membuat proses pengaturan parameter proyeksi menjadi sederhana dan efisien tanpa perlu menginstal perangkat lunak profesional apa pun.',

    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: [
        {
            question: 'Tipe proyeksi apa yang didukung oleh Pencari Zona Proyeksi?',
            answer: '<strong>Pencari Zona Proyeksi online</strong> kami mendukung dua tipe proyeksi UTM utama: zona 6° dan zona 3°. Zona 6° adalah metode pembagian zona standar untuk proyeksi UTM, dengan 60 zona proyeksi secara global, masing-masing lebar 6° bujur; zona 3° adalah metode pembagian yang lebih rinci, dengan 120 zona proyeksi secara global, masing-masing lebar 3° bujur. Anda dapat memilih tipe proyeksi yang sesuai untuk perhitungan berdasarkan persyaratan proyek Anda.'
        },
        {
            question: 'Bagaimana cara melakukan kueri zona proyeksi koordinat batch?',
            answer: 'Dengan menggunakan <strong>Kalkulator Zona Proyeksi UTM</strong> kami, Anda hanya perlu memasukkan beberapa pasang koordinat baris demi baris di area input batch, memisahkan bujur dan lintang dengan koma. Contohnya: 116.3975,39.9085. Setelah mengklik tombol hitung, sistem akan secara otomatis menghitung nomor zona proyeksi yang sesuai untuk semua titik koordinat, menampilkan informasi nomor zona, belahan bumi, dan meridian tengah. Fungsi ekspor batch dapat menyimpan semua hasil sebagai file teks.'
        },
        {
            question: 'Bagaimana kisi zona ditampilkan di peta?',
            answer: '<strong>Alat Pencari Zona Proyeksi</strong> kami menampilkan kisi zona proyeksi UTM di area peta kanan. Saat Anda menggerakkan mouse di atas peta, akan menampilkan nomor zona proyeksi posisi saat ini secara real-time. Fitur visualisasi ini membantu Anda memahami pola distribusi zona proyeksi UTM secara intuitif dan lebih memahami hubungan antara koordinat dan zona proyeksi.'
        },
        {
            question: 'Bagaimana akurasi perhitungan zona proyeksi dijamin?',
            answer: 'Alat kami menggunakan rumus perhitungan zona proyeksi UTM standar untuk memastikan akurasi hasil perhitungan. Untuk zona 6°, rumus perhitungan nomor zona adalah: Math.floor((bujur + 180) / 6) + 1; untuk zona 3°, rumus perhitungan nomor zona adalah: Math.floor((bujur + 180) / 3) + 1. Alat ini juga memvalidasi validitas koordinat yang dimasukkan (bujur -180° hingga 180°, lintang -90° hingga 90°) untuk memastikan keandalan hasil perhitungan.'
        },
        {
            question: 'Bagaimana cara menggunakan hasil kueri?',
            answer: 'Nomor zona proyeksi yang dihitung dapat digunakan untuk pengaturan parameter di berbagai perangkat lunak SIG dan peralatan survei. Anda dapat menyalin hasil individu dengan satu klik, atau menggunakan fungsi ekspor batch untuk menyimpan semua hasil sebagai file teks. Hasilnya mencakup informasi bujur, lintang, nomor zona, belahan bumi, dan meridian tengah, memberikan referensi lengkap untuk pengaturan sistem koordinat proyeksi Anda.'
        }
    ],

    tutorialTitle: 'Cara Menggunakan Pencari Zona Proyeksi',
    steps: [
        {
            title: 'Pilih Tipe Proyeksi',
            description: 'Di bagian atas area input kiri, pilih tipe proyeksi yang Anda butuhkan: zona UTM 6° atau zona UTM 3°. Zona 6° cocok untuk sebagian besar kebutuhan proyeksi peta standar, sedangkan zona 3° cocok untuk proyek survei yang membutuhkan presisi lebih tinggi.',
            note: 'Tipe proyeksi menentukan kepadatan zona dan metode perhitungan. Silakan pilih tipe yang sesuai berdasarkan persyaratan proyek Anda.'
        },
        {
            title: 'Masukkan Data Koordinat',
            description: 'Saat memasukkan koordinat tunggal, masukkan nilai di kotak input bujur dan lintang masing-masing; untuk input batch, masukkan beberapa pasang koordinat baris demi baris di area teks, memisahkan bujur dan lintang dengan koma per baris. Contohnya: 116.3975,39.9085.',
            note: 'Rentang bujur adalah -180° hingga 180°, rentang lintang adalah -90° hingga 90°. Koordinat di luar rentang ini akan diabaikan.'
        },
        {
            title: 'Lakukan Operasi Perhitungan',
            description: 'Klik tombol "Hitung Zona" untuk melakukan operasi perhitungan. Alat akan secara otomatis menghitung dan menampilkan nomor zona proyeksi yang sesuai, belahan bumi, dan meridian tengah untuk setiap titik koordinat berdasarkan koordinat yang Anda masukkan dan tipe proyeksi yang dipilih.',
            note: 'Setelah perhitungan selesai, hasil pertama akan menampilkan efek sorotan untuk membantu Anda menemukannya dengan cepat.'
        },
        {
            title: 'Lihat Zona Peta',
            description: 'Di area peta kanan, Anda dapat melihat nomor zona proyeksi di berbagai lokasi dengan menggerakkan mouse. Peta akan menampilkan informasi nomor zona posisi mouse secara real-time, membantu Anda memahami distribusi zona proyeksi UTM secara intuitif.',
            note: 'Kisi zona di peta akan ditampilkan secara dinamis sesuai dengan tipe proyeksi yang Anda pilih (zona 3° atau zona 6°).'
        },
        {
            title: 'Ekspor atau Salin Hasil',
            description: 'Klik tombol salin di sebelah setiap hasil untuk menyalin hasil tersebut ke clipboard. Jika ada beberapa hasil, Anda dapat menggunakan tombol "Ekspor Batch" di bagian atas untuk menyimpan semua hasil sebagai file teks.',
            note: 'Operasi salin juga memicu animasi sorotan, memungkinkan Anda mengetahui hasil mana yang telah disalin dengan jelas.'
        }
    ],

    successTitle: 'Selamat!',
    successContent: 'Anda telah berhasil mempelajari cara menggunakan Pencari Zona Proyeksi kami. Sekarang Anda dapat dengan mudah menghitung nomor zona proyeksi UTM untuk titik koordinat apa pun, meningkatkan efisiensi kerja melalui fungsi pemrosesan batch dan visualisasi.',

    relatedToolsTitle: 'Alat Terkait yang Mungkin Anda Minati',
    relatedTools: [
        {
            name: 'Konverter Format Koordinat',
            description: 'Mendukung konversi antara format derajat desimal, derajat menit detik, dan derajat menit, menyediakan fungsi konversi dan ekspor batch.',
            url: 'https://www.ufreetools.com/tool/coordinate-format-converter'
        },
        {
            name: 'Kalkulator Pembagi Lembar Peta',
            description: 'Menghitung nomor lembar peta berdasarkan koordinat lintang dan bujur, mendukung beberapa skala.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
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
            name: 'Sistem Koordinat Universal Transverse Mercator',
            description: 'Pengenalan terperinci tentang proyeksi Mercator Transverse Universal di Wikipedia',
            url: 'https://id.wikipedia.org/wiki/Sistem_koordinat_Universal_Transverse_Mercator'
        },
        {
            name: 'Proyeksi Peta',
            description: 'Sumber akademis tentang metode dan aplikasi proyeksi peta',
            url: 'https://id.wikipedia.org/wiki/Proyeksi_peta'
        },
        {
            name: 'Sistem Koordinat Gauss-Krüger',
            description: 'Pengenalan metode proyeksi peta yang umum digunakan di Tiongkok',
            url: 'https://id.wikipedia.org/wiki/Proyeksi_Mercator_transversal'
        }
    ]
}