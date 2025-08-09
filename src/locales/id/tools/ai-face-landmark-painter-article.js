export default {
    title: 'AI Face Landmark Painter - Panduan Alat Deteksi dan Pengeditan Landmark Wajah Cerdas',

    functionTitle: 'Fitur Alat dan Skenario Aplikasi',
    intro: '<strong>AI Face Landmark Painter</strong> adalah <strong>alat online untuk deteksi dan pengeditan titik fitur wajah</strong> berbasis teknologi kecerdasan buatan. Alat ini dapat secara otomatis mengidentifikasi dan menandai 68 titik fitur utama pada wajah, termasuk area penting seperti mata, hidung, mulut, dan kontur wajah, memberikan pengguna <strong>analisis struktur wajah yang akurat</strong> dan <strong>kemampuan pengeditan visual</strong>.',

    useCasesTitle: 'Skenario Aplikasi Utama',
    useCases: [
        'Desain dan Pembuatan Avatar: Menyediakan referensi fitur wajah yang akurat untuk desainer',
        'Penelitian Pengenalan Wajah: Digunakan untuk penelitian akademis dan pengembangan algoritma',
        'Pengembangan Aplikasi Kecantikan: Menyediakan data landmark untuk aplikasi kecantikan AR',
        'Produksi Animasi: Menyediakan titik kontrol untuk animasi wajah',
        'Analisis Kosmetik Medis: Menganalisis proporsi wajah dan simetri',
        'Aplikasi VR/AR: Menyediakan data pelacakan wajah untuk aplikasi realitas virtual',
        'Pendidikan dan Pelatihan: Digunakan untuk pengajaran visi komputer dan AI',
        'Kreasi Artistik: Menyediakan dukungan teknis untuk pembuatan seni digital'
    ],

    tipTitle: 'Tips Profesional',
    tipContent: 'Untuk hasil deteksi terbaik, gunakan foto wajah frontal yang jelas dan pencahayaan baik. Alat ini mendukung pengeditan posisi landmark dengan drag-and-drop, yang dapat disesuaikan sesuai kebutuhan aktual.',

    conclusion: 'Baik Anda seorang desainer profesional, peneliti, atau pengembang, <strong>AI Face Landmark Painter</strong> ini dapat memberikan dukungan teknis yang kuat untuk proyek Anda. Alat ini sepenuhnya gratis, mendukung pemrosesan batch dan beberapa format ekspor, membuat kreasi Anda lebih efisien dan nyaman.',

    faqTitle: 'Pertanyaan yang Sering Diajukan',

    faq1: {
        question: 'Apa itu deteksi landmark wajah?',
        answer: '<strong>Deteksi landmark wajah</strong> adalah teknologi penting di bidang visi komputer yang secara otomatis mengidentifikasi posisi titik fitur pada wajah menggunakan algoritma AI. Alat kami menggunakan model 68 titik yang secara akurat menandai area kunci seperti mata, hidung, mulut, dan kontur wajah, menyediakan data dasar untuk <strong>analisis wajah</strong>, <strong>pengenalan ekspresi</strong>, dan <strong>pemodelan 3D</strong> selanjutnya.'
    },

    faq2: {
        question: 'Bisakah landmark yang terdeteksi diedit?',
        answer: 'Ya! Alat kami mendukung <strong>fungsionalitas pengeditan interaktif</strong>. Setelah deteksi, Anda dapat mengklik dan menyeret landmark mana pun untuk menyesuaikan posisinya dengan mouse. Ini sangat berguna untuk <strong>penyesuaian halus</strong>, <strong>kreasi artistik</strong>, atau <strong>kustomisasi untuk kebutuhan khusus</strong>. Semua modifikasi diperbarui secara real-time pada kanvas.'
    },

    faq3: {
        question: 'Format ekspor apa yang didukung?',
        answer: 'Alat ini mendukung beberapa format ekspor untuk memenuhi berbagai kebutuhan: format <strong>PNG/JPG/WEBP</strong> cocok untuk pemrosesan gambar, sementara <strong>format SVG</strong> cocok untuk desain grafis vektor. Format SVG sangat cocok untuk aplikasi <strong>desain web</strong>, <strong>produksi cetak</strong>, dan <strong>grafik yang dapat diskalakan</strong>.'
    },

    faq4: {
        question: 'Seberapa akurat deteksinya?',
        answer: 'Kami menggunakan <strong>pustaka face-api.js</strong> terkemuka di industri dan <strong>model wajah 68 titik</strong>, yang dapat mencapai akurasi lebih dari 95% dalam kondisi ideal. Efektivitas deteksi dipengaruhi oleh kondisi pencahayaan, sudut wajah, kejelasan gambar, dan faktor lainnya. Kami merekomendasikan penggunaan <strong>foto frontal yang jelas</strong> untuk hasil terbaik.'
    },

    faq5: {
        question: 'Apakah data aman?',
        answer: 'Benar-benar aman! Semua pemrosesan gambar dilakukan di <strong>browser lokal</strong> Anda dan tidak diunggah ke server mana pun. Kami melindungi privasi pengguna dengan ketat dan memastikan data gambar Anda sepenuhnya aman. Alat ini mendukung <strong>penggunaan offline</strong>, memberikan perlindungan maksimal untuk privasi Anda.'
    },

    tutorialTitle: 'Tutorial Penggunaan Terperinci',

    step1: {
        title: 'Unggah Gambar Wajah',
        description: 'Klik pada area unggah atau <strong>seret dan lepas file gambar</strong> langsung ke dalam alat. Mendukung format umum termasuk PNG, JPEG, BMP, WEBP. Anda juga dapat mengklik "Muat Gambar Contoh" untuk mencoba fungsionalitas alat.',
        note: 'Disarankan untuk menggunakan foto wajah frontal yang jelas, menghindari profil samping atau foto grup untuk memastikan akurasi deteksi.'
    },

    step2: {
        title: 'Konfigurasi Parameter Gambar',
        description: 'Sesuaikan <strong>opsi tampilan</strong> dan <strong>parameter gaya</strong> di panel pengaturan sebelah kiri. Anda dapat memilih untuk menampilkan atau tidak menampilkan landmark, koneksi, dan angka, serta menyesuaikan warna, ukuran, dan efek visual lainnya.',
        note: 'Pengaturan parameter yang berbeda cocok untuk skenario aplikasi yang berbeda dan dapat disesuaikan sesuai kebutuhan aktual.'
    },

    step3: {
        title: 'Jalankan Deteksi Landmark',
        description: 'Klik tombol <strong>"Deteksi Landmark"</strong> untuk memulai analisis AI. Alat akan secara otomatis memuat model dan mendeteksi titik fitur wajah. Seluruh proses biasanya membutuhkan waktu 3-10 detik.',
        note: 'Penggunaan pertama memerlukan pengunduhan file model AI, jadi pastikan Anda memiliki koneksi jaringan yang stabil.'
    },

    step4: {
        title: 'Edit Posisi Landmark',
        description: 'Setelah deteksi selesai, Anda dapat <strong>mengklik dan menyeret</strong> landmark mana pun untuk menyesuaikan posisinya. Mendukung pratinjau efek pengeditan secara real-time, dan semua modifikasi langsung tercermin pada kanvas.',
        note: 'Fungsi pengeditan sangat cocok untuk penyesuaian halus dan desain kreatif, memungkinkan penyesuaian bebas sesuai kebutuhan spesifik.'
    },

    step5: {
        title: 'Pratinjau dan Sesuaikan Efek',
        description: 'Gunakan fungsi <strong>zoom dan pan</strong> di sebelah kanan untuk melihat efek detail. Anda dapat memperbesar untuk memeriksa posisi landmark tertentu dan memastikan hasil pengeditan memenuhi harapan.',
        note: 'Memanfaatkan fungsi pratinjau sepenuhnya dapat membantu Anda mencapai hasil pengeditan yang lebih presisi.'
    },

    step6: {
        title: 'Ekspor Hasil Pemrosesan',
        description: 'Pilih <strong>format ekspor</strong> yang sesuai (PNG/JPG/WEBP/SVG), sesuaikan parameter kualitas gambar, lalu klik tombol unduh. Mendukung <strong>pemrosesan batch</strong> dan <strong>unduhan paket ZIP</strong>.',
        note: 'Format SVG sangat cocok untuk aplikasi yang memerlukan grafik vektor, seperti desain web dan produksi cetak.'
    },

    successTitle: 'Pemrosesan Selesai',
    successContent: 'Selamat! Anda telah berhasil menyelesaikan deteksi dan pengeditan landmark wajah. Anda dapat menggunakan hasilnya untuk berbagai proyek kreatif, pekerjaan penelitian, atau aplikasi komersial.',

    relatedToolsTitle: 'Alat Terkait yang Direkomendasikan',

    relatedTool1: {
        name: 'AI Multi-Face Tagger',
        description: 'Mendukung deteksi dan penandaan beberapa wajah, cocok untuk pemrosesan foto tim',
        url: 'https://www.ufreetools.com/tool/ai-multi-face-tagger'
    },

    relatedTool2: {
        name: 'AI Age Gender Estimator',
        description: 'Memperkirakan usia dan gender berdasarkan teknologi AI, mendukung analisis batch',
        url: 'https://www.ufreetools.com/tool/ai-age-gender-estimator'
    },

    relatedTool3: {
        name: 'Alat Penghapus Latar Belakang Gambar',
        description: 'Menghapus latar belakang gambar secara cerdas, mendukung pemrosesan batch',
        url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
    },

    relatedTool4: {
        name: 'Alat Inversi Warna Gambar',
        description: 'Inversi warna gambar dengan satu klik, menciptakan efek artistik',
        url: 'https://www.ufreetools.com/tool/invert-image-colors'
    },

    referencesTitle: 'Referensi dan Dokumentasi Teknis',

    reference1: {
        name: 'Dokumentasi Resmi face-api.js',
        description: 'Dokumentasi teknis terperinci dan referensi API untuk pustaka face-api.js',
        url: 'https://github.com/justadudewhohacks/face-api.js'
    },

    reference2: {
        name: 'Prinsip Teknis Deteksi Landmark Wajah',
        description: 'Metode yang kuat dan efisien untuk deteksi landmark wajah yang efektif',
        url: 'https://www.mdpi.com/2076-3417/14/16/7153'
    },

    reference3: {
        name: 'Spesifikasi Teknis Format SVG',
        description: 'Standar teknis dan pedoman aplikasi untuk format grafik vektor SVG',
        url: 'https://www.w3.org/Graphics/SVG/'
    }
};
