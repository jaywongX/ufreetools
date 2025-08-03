export default {
    title: 'Estimator Usia & Gender AI: Analisis Wajah dalam Foto Anda',
    intro: '<strong>Estimator Usia & Gender AI</strong> kami adalah alat online yang kuat yang menggunakan teknologi pengenalan wajah canggih untuk menganalisis wajah dalam foto Anda dan memberikan perkiraan usia dan gender. Baik Anda penasaran tentang berapa usia Anda terlihat dalam foto tertentu atau ingin menganalisis beberapa wajah dalam foto grup, alat ini menawarkan hasil yang cepat dan akurat tanpa memerlukan keahlian teknis apa pun.',
    
    whatIsTitle: 'Apa itu Estimator Usia & Gender AI?',
    howItWorksTitle: 'Bagaimana Cara Kerjanya?',
    howItWorksContent: 'Estimator Usia & Gender AI menggunakan face-api.js, sebuah API JavaScript yang mengimplementasikan jaringan saraf konvolusional untuk mendeteksi wajah dan menganalisis fitur wajah. Alat ini pertama-tama mengidentifikasi wajah dalam gambar yang Anda unggah, kemudian menerapkan model pembelajaran mesin yang telah dilatih sebelumnya untuk memperkirakan usia dan gender setiap wajah yang terdeteksi. Semua pemrosesan terjadi langsung di browser Anda, memastikan foto Anda tetap pribadi dan tidak pernah diunggah ke server mana pun.',
    
    tipTitle: 'Tips Profesional:',
    tipContent: 'Untuk hasil yang paling akurat, unggah foto dengan wajah yang jelas, pencahayaan baik, dan menghadap langsung ke kamera. Alat ini bekerja paling baik dengan potret menghadap ke depan yang memiliki hambatan minimal atau sudut ekstrem.',
    
    featuresTitle: 'Fitur Utama',
    features: [
        'Deteksi wajah yang akurat dalam berbagai kondisi pencahayaan dan sudut',
        'Estimasi usia dengan akurasi yang wajar untuk sebagian besar kelompok usia',
        'Klasifikasi gender dengan persentase kepercayaan',
        'Dukungan untuk beberapa wajah dalam satu gambar',
        'Mode menyenangkan dengan visualisasi gaya kartun dan efek yang sesuai dengan usia',
        'Pemrosesan batch untuk menganalisis beberapa foto sekaligus'
    ],
    
    useCasesTitle: 'Kapan Menggunakan Alat Ini',
    useCase1Title: 'Keingintahuan Pribadi',
    useCase1Content: 'Puaskan rasa ingin tahu Anda tentang berapa usia Anda terlihat dalam foto yang berbeda atau bagaimana penampilan Anda telah berubah seiring waktu.',
    
    useCase2Title: 'Pembuatan Konten',
    useCase2Content: 'Pembuat konten dapat menggunakan alat ini untuk memahami persepsi demografis orang-orang yang ditampilkan dalam konten visual mereka.',
    
    useCase3Title: 'Fotografi',
    useCase3Content: 'Fotografer dapat menganalisis bagaimana pencahayaan, sudut, dan pasca-pemrosesan memengaruhi usia yang dirasakan dari subjek mereka.',
    
    useCase4Title: 'Hiburan dan Kesenangan',
    useCase4Content: 'Gunakan mode menyenangkan untuk membuat visual yang menghibur untuk postingan media sosial atau pertemuan keluarga.',
    
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: [
        {
            question: 'Seberapa akurat estimasi usia dan gender?',
            answer: 'AI memberikan estimasi berdasarkan fitur visual dan pola yang telah dipelajari dari data pelatihan. Meskipun umumnya akurat, hasil dapat bervariasi tergantung pada faktor seperti pencahayaan, kualitas gambar, ekspresi wajah, riasan, dan variasi individu. Alat ini biasanya mencapai akurasi yang lebih baik untuk orang dewasa daripada untuk anak-anak yang sangat kecil atau orang tua.'
        },
        {
            question: 'Apakah data saya aman saat menggunakan alat ini?',
            answer: 'Ya, semua pemrosesan terjadi secara lokal di browser Anda. Foto Anda tidak pernah diunggah ke server mana pun, memastikan privasi lengkap. Alat ini menggunakan JavaScript sisi klien untuk menganalisis gambar, dan tidak ada data yang disimpan atau ditransmisikan ke tempat lain.'
        },
        {
            question: 'Mengapa alat ini terkadang memberikan estimasi usia yang berbeda untuk orang yang sama?',
            answer: 'Estimasi usia dapat bervariasi berdasarkan faktor seperti pencahayaan, sudut, ekspresi wajah, riasan, dan kualitas gambar. Bahkan perubahan kecil dalam faktor-faktor ini dapat memengaruhi bagaimana AI menafsirkan fitur wajah. Untuk hasil yang paling konsisten, gunakan foto dengan pencahayaan dan posisi yang serupa.'
        },
        {
            question: 'Apa perbedaan antara Mode Standar dan Mode Menyenangkan?',
            answer: 'Mode Standar memberikan analisis langsung dengan indikator visual yang bersih yang menunjukkan usia dan gender yang diperkirakan. Mode Menyenangkan menambahkan efek gaya kartun dan elemen visual yang sesuai dengan usia untuk membuat hasil lebih menghibur dan dapat dibagikan di media sosial.'
        }
    ],
    
    tutorialTitle: 'Cara Menggunakan Estimator Usia & Gender AI',
    steps: [
        {
            title: 'Unggah Foto Anda',
            description: 'Mulailah dengan mengunggah foto yang ingin Anda analisis. Anda dapat menyeret dan melepas file langsung ke area unggahan, atau klik untuk menjelajahi perangkat Anda. Alat ini mendukung format gambar umum termasuk JPG, PNG, WEBP, dan BMP.',
            note: 'Anda dapat mengunggah beberapa foto sekaligus untuk pemrosesan batch.'
        },
        {
            title: 'Pilih Mode Analisis',
            description: 'Pilih antara Mode Standar untuk analisis langsung atau Mode Menyenangkan untuk visualisasi yang menghibur dengan efek gaya kartun.',
            note: 'Mode Menyenangkan sangat cocok untuk membuat konten yang dapat dibagikan untuk media sosial.'
        },
        {
            title: 'Analisis Foto',
            description: 'Klik tombol "Analisis Foto" dan tunggu beberapa detik sementara AI kami mendeteksi wajah dan memperkirakan usia dan gender setiap orang dalam foto Anda.',
            note: 'Waktu pemrosesan tergantung pada jumlah dan ukuran foto Anda, serta kinerja perangkat Anda.'
        },
        {
            title: 'Tinjau dan Unduh Hasil',
            description: 'Periksa hasil analisis untuk setiap wajah yang terdeteksi, termasuk usia yang diperkirakan, gender, dan tingkat kepercayaan. Anda dapat memperbesar/memperkecil dan bergerak di sekitar gambar untuk melihat detail. Pilih format ekspor pilihan Anda dan unduh gambar individual atau semua foto yang diproses sebagai file ZIP.',
            note: 'Untuk berbagi di media sosial, format JPEG atau WEBP dengan pengaturan kualitas menengah-tinggi menawarkan keseimbangan yang baik antara kualitas dan ukuran file.'
        }
    ],
    
    successTitle: 'Siap untuk Mencoba?',
    successContent: 'Unggah foto Anda sekarang dan lihat apa yang dapat diungkapkan oleh Estimator Usia & Gender AI kami tentang wajah dalam gambar Anda!',
    
    relatedToolsTitle: 'Alat Terkait yang Mungkin Anda Sukai',
    relatedTools: [
        {
            name: 'Penghapus Latar Belakang Imgly AI',
            description: 'Hapus latar belakang gambar secara cerdas menggunakan model besar Imgly AI, dengan dukungan untuk pemrosesan batch dan berbagai format output.',
            url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
        },
        {
            name: 'Penganalisis Foto Profil AI - Alat Penilaian Foto Profesional',
            description: 'Alat online gratis yang menganalisis foto pribadi dan foto ID Anda. Dapatkan umpan balik yang didorong oleh AI tentang postur kepala, senyuman, kontak mata, dan kualitas pencahayaan untuk meningkatkan foto profesional Anda.',
            url: 'https://www.ufreetools.com/tool/ai-profile-photo-analyzer'
        }
    ],
    
    techPrivacyTitle: 'Teknologi dan Privasi',
    techPrivacyContent1: 'Estimator Usia & Gender AI menggunakan face-api.js, yang mengimplementasikan model TinyFaceDetector dan AgeGenderNet untuk menganalisis fitur wajah. Jaringan saraf ringan ini dirancang untuk berjalan secara efisien di browser web sambil memberikan akurasi yang wajar.',
    techPrivacyContent2: 'Kami memprioritaskan privasi Anda dengan memproses semua gambar secara lokal di browser Anda. Foto Anda tidak pernah dikirim ke server mana pun untuk analisis, memastikan data pribadi dan gambar Anda tetap sepenuhnya pribadi. Alat ini beroperasi sepenuhnya di sisi klien, menjadikannya aman dan responsif bahkan tanpa koneksi internet setelah halaman dimuat.'
};
