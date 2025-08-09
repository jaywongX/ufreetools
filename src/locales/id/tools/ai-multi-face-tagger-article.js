export default {
    title: 'AI Multi-Face Tagger: Identifikasi dan Labeli Orang dalam Foto',
    whatIsTitle: 'Apa itu AI Multi-Face Tagger?',
    intro: '<strong>AI Multi-Face Tagger</strong> kami adalah alat online yang kuat yang menggunakan teknologi pengenalan wajah canggih untuk mendeteksi beberapa wajah dalam foto dan memungkinkan Anda menambahkan label untuk setiap orang. Baik Anda sedang mengatur koleksi foto, membuat denah tempat duduk kelas, atau hanya ingin mengidentifikasi semua orang dalam foto grup, alat ini menyediakan cara cepat dan efisien untuk menandai wajah tanpa memerlukan keahlian teknis.',
    
    howItWorksTitle: 'Bagaimana Cara Kerjanya?',
    howItWorksContent: 'AI Multi-Face Tagger menggunakan face-api.js, API JavaScript yang mengimplementasikan jaringan saraf konvolusional untuk mendeteksi wajah dan menganalisis fitur wajah. Alat ini pertama-tama mengidentifikasi semua wajah dalam gambar yang Anda unggah, kemudian memungkinkan Anda menambahkan label atau nama kustom untuk setiap wajah yang terdeteksi. Semua pemrosesan terjadi langsung di browser Anda, memastikan foto Anda tetap pribadi dan tidak pernah diunggah ke server mana pun.',
    
    tipTitle: 'Tips Profesional:',
    tipContent: 'Untuk hasil terbaik, unggah foto dengan wajah yang jelas, pencahayaan baik, dan menghadap kamera. Alat ini bekerja paling baik dengan potret yang menghadap ke depan dengan hambatan minimal atau sudut ekstrem.',
    
    featuresTitle: 'Fitur Utama',
    features: [
        'Deteksi akurat beberapa wajah dalam satu gambar',
        'Sistem pelabelan kustom untuk menandai setiap wajah yang terdeteksi',
        'Dukungan untuk pemrosesan batch beberapa foto',
        'Opsi untuk mengekspor gambar dengan overlay label wajah yang terlihat',
        'Opsi ekspor JSON untuk integrasi dengan sistem manajemen foto',
        'Desain berpusat pada privasi dengan semua pemrosesan dilakukan secara lokal di browser Anda'
    ],
    
    useCasesTitle: 'Kapan Menggunakan Alat Ini',
    useCase1Title: 'Pengorganisasian Foto',
    useCase1Content: 'Identifikasi dan tandai orang dalam koleksi foto dengan cepat untuk membuatnya dapat dicari dan lebih terorganisir.',
    
    useCase2Title: 'Manajemen Kelas',
    useCase2Content: 'Guru dapat menggunakan alat ini untuk membuat foto kelas berlabel untuk membantu mengingat nama siswa atau membuat denah tempat duduk.',
    
    useCase3Title: 'Fotografi Acara',
    useCase3Content: 'Fotografer acara dapat menandai peserta dalam foto grup untuk distribusi dan identifikasi yang lebih mudah.',
    
    useCase4Title: 'Konten Media Sosial',
    useCase4Content: 'Pembuat konten dapat melabeli kolaborator atau anggota tim dalam foto promosi untuk atribusi yang tepat.',
    
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: [
        {
            question: 'Seberapa akurat deteksi wajah?',
            answer: 'AI memberikan deteksi wajah yang umumnya akurat dalam kebanyakan kasus. Namun, hasil dapat bervariasi tergantung pada faktor seperti pencahayaan, kualitas gambar, sudut wajah, dan oklusi. Alat ini biasanya mencapai akurasi yang lebih baik dengan potret yang jelas, menghadap ke depan dalam kondisi pencahayaan yang baik.'
        },
        {
            question: 'Apakah data saya aman saat menggunakan alat ini?',
            answer: 'Ya, semua pemrosesan dilakukan secara lokal di browser Anda. Foto Anda tidak pernah diunggah ke server mana pun, memastikan privasi lengkap. Alat ini menggunakan JavaScript sisi klien untuk menganalisis gambar dan tidak menyimpan atau mengirimkan data apa pun.'
        },
        {
            question: 'Apa yang terjadi jika beberapa wajah tidak terdeteksi?',
            answer: 'Deteksi wajah bergantung pada berbagai faktor termasuk pencahayaan, sudut, dan kualitas gambar. Jika beberapa wajah tidak terdeteksi, coba unggah foto yang berbeda dengan pencahayaan yang lebih baik dan sudut wajah yang lebih langsung. Wajah yang sangat kecil atau sebagian tersembunyi mungkin sulit dideteksi oleh AI.'
        },
        {
            question: 'Bisakah saya mengekspor data penandaan wajah untuk digunakan dalam aplikasi lain?',
            answer: 'Ya, alat kami menyediakan opsi ekspor JSON yang mencakup koordinat untuk setiap wajah yang terdeteksi bersama dengan label kustom Anda. Data ini dapat diimpor ke berbagai sistem manajemen foto atau digunakan untuk aplikasi kustom. Anda juga dapat mengunduh gambar dengan overlay label wajah yang terlihat.'
        }
    ],
    
    tutorialTitle: 'Cara Menggunakan AI Multi-Face Tagger',
    steps: [
        {
            title: 'Unggah Foto Anda',
            description: 'Mulailah dengan mengunggah foto yang ingin Anda analisis. Anda dapat menyeret dan melepas file langsung ke area unggahan atau klik untuk menjelajahi perangkat Anda. Alat ini mendukung format gambar umum termasuk JPG, PNG, WEBP, dan BMP.',
            note: 'Anda dapat mengunggah beberapa foto sekaligus untuk pemrosesan batch.'
        },
        {
            title: 'Deteksi Wajah',
            description: 'Klik tombol "Deteksi Wajah" dan tunggu beberapa detik agar AI kami mengidentifikasi semua wajah dalam foto. Setiap wajah yang terdeteksi akan disorot dengan kotak dan diberi label dengan nomor untuk referensi mudah.',
            note: 'Waktu pemrosesan tergantung pada jumlah dan ukuran foto, serta kinerja perangkat Anda.'
        },
        {
            title: 'Tambahkan Label',
            description: 'Untuk setiap wajah yang terdeteksi, masukkan nama atau label di bidang input yang sesuai. Saat Anda mengetik, label akan secara otomatis diperbarui pada pratinjau gambar, memungkinkan Anda melihat seperti apa hasil akhirnya.',
            note: 'Anda dapat membiarkan beberapa wajah tidak ditandai jika Anda mau, atau menghapus label dengan mengklik tombol X.'
        },
        {
            title: 'Ekspor Hasil Anda',
            description: 'Pilih format dan opsi ekspor yang Anda inginkan. Anda dapat menyertakan overlay label wajah langsung pada gambar dan/atau mengekspor file JSON yang berisi semua koordinat wajah dan label. Pilih format gambar yang Anda inginkan dan, untuk file JPG, sesuaikan kualitas sesuai kebutuhan. Terakhir, unduh gambar individual atau gunakan opsi unduh batch untuk mendapatkan semua foto yang diproses sebagai file ZIP.',
            note: 'Ekspor JSON sangat berguna jika Anda berencana untuk mengimpor data wajah ke aplikasi lain atau sistem manajemen foto.'
        }
    ],
    
    successTitle: 'Siap untuk Mencoba?',
    successContent: 'Unggah foto Anda sekarang dan lihat bagaimana AI Multi-Face Tagger kami dapat membantu Anda mengidentifikasi dan melabeli orang dalam gambar Anda!',
    
    relatedToolsTitle: 'Alat Terkait yang Mungkin Anda Sukai',
    relatedTools: [
        {
            name: 'Imgly AI Penghapus Latar Belakang',
            description: 'Hapus latar belakang gambar secara cerdas menggunakan model besar AI Imgly, dengan dukungan untuk pemrosesan batch dan berbagai format output.',
            url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
        },
        {
            name: 'AI Penganalisis Foto Profil',
            description: 'Dapatkan umpan balik yang didukung AI tentang foto pribadi dan profesional Anda untuk meningkatkan citra profesional Anda.',
            url: 'https://www.ufreetools.com/tool/ai-profile-photo-analyzer'
        },
        {
            name: 'AI Estimator Usia dan Jenis Kelamin',
            description: 'Gunakan teknologi AI untuk menganalisis wajah dalam foto dan memperkirakan usia dan jenis kelamin.',
            url: 'https://www.ufreetools.com/tool/ai-age-gender-estimator'
        }
    ],
    
    techDetailsTitle: 'Detail Teknis',
    techDetailsContent: 'AI Multi-Face Tagger menggunakan face-api.js, yang mengimplementasikan model TinyFaceDetector dan FaceLandmark68 untuk menganalisis fitur wajah. Jaringan saraf ringan ini dirancang untuk berjalan secara efisien di browser web sambil memberikan akurasi yang wajar.',
    privacyNote: 'Kami memprioritaskan privasi Anda dengan memproses semua gambar secara lokal di browser Anda. Foto Anda tidak pernah dikirim ke server mana pun untuk analisis, memastikan data pribadi dan gambar Anda tetap sepenuhnya pribadi. Alat ini berjalan sepenuhnya di sisi klien, menjadikannya aman dan responsif bahkan tanpa koneksi internet setelah halaman dimuat.'
};