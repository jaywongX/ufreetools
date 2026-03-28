export default {
    title: 'Editor Visual Audio: Panduan Editor Gelombang Audio Online',
    functionTitle: 'Apa itu Editor Visual Audio dan Kegunaannya?',
    intro: '<strong>Editor Visual Audio</strong> kami adalah aplikasi pengeditan gelombang audio online profesional yang mendukung pengeditan visual WAV, MP3, FLAC, OGG, AAC, M4A dan format audio lainnya. Dengan antarmuka tampilan gelombang yang intuitif, Anda dapat memilih segmen audio secara tepat dan melakukan operasi pengeditan profesional seperti memangkas, menghapus, fade in/out, penyesuaian volume, bisu, normalisasi, dan membalik.',
    
    useCasesTitle: 'Kasus Penggunaan Umum untuk Pengeditan Visual Audio',
    useCases: [
        'Mengedit dan memangkas file audio, menghapus bagian yang tidak diinginkan',
        'Memproduksi podcast dan program radio dengan pasca-produksi audio',
        'Membuat musik latar untuk video, menyesuaikan durasi dan efek audio',
        'Membuat nada dering dan suara notifikasi, memotong klip audio',
        'Memproses rekaman suara, menghapus keheningan dan kebisingan',
        'Membuat mix musik, menggabungkan beberapa klip audio',
        'Menyesuaikan volume audio, melakukan normalisasi',
        'Menambahkan efek fade in/out untuk transisi yang lebih halus'
    ],
    
    tipTitle: 'Tip Profesional:',
    tipContent: 'Kami menyarankan untuk mencadangkan file audio asli Anda sebelum mengedit. Gunakan fungsi seleksi untuk memilih segmen audio yang ingin Anda edit secara tepat. Efek fade in/out membuat transisi audio lebih alami. Fungsi normalisasi mengoptimalkan tingkat volume keseluruhan audio.',
    
    conclusion: '<strong>Editor Visual Audio</strong> sangat berguna untuk produsen podcast, penggemar musik, pembuat video, dan pemula dalam pengeditan audio. Dengan editor audio online kami, Anda dapat melakukan pengeditan audio yang tepat dalam antarmuka gelombang yang intuitif, mendukung berbagai operasi profesional seperti memangkas, menghapus, fade in/out, bisu, normalisasi, dan membalik.',
    
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: [
        {
            question: 'Format input apa yang didukung oleh Editor Visual Audio?',
            answer: '<strong>Editor Audio Online</strong> kami mendukung banyak format audio umum termasuk WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE, dan lainnya. Anda dapat mengunggah format apa pun yang didukung untuk diedit, dan mengekspor sebagai WAV atau MP3 setelah diedit.'
        },
        {
            question: 'Bagaimana cara memilih segmen audio untuk diedit?',
            answer: 'Di area tampilan gelombang, tahan tombol kiri mouse dan seret untuk memilih segmen audio. Area yang dipilih akan disorot biru, menampilkan waktu mulai, waktu selesai, dan durasi seleksi. Setelah memilih, Anda dapat menggunakan alat pengeditan seperti memangkas, menghapus, fade in/out, dll.'
        },
        {
            question: 'Apa yang dilakukan efek fade in/out?',
            answer: 'Efek fade in secara bertahap meningkatkan audio dari keheningan ke volume normal, sementara efek fade out secara bertahap mengurangi audio dari volume normal ke keheningan. Efek-efek ini membuat awal dan akhir audio lebih alami, menghindari perubahan volume mendadak, sangat cocok untuk musik latar dan transisi audio.'
        },
        {
            question: 'Apa itu fungsi normalisasi?',
            answer: 'Normalisasi adalah proses menyesuaikan volume audio ke tingkat optimal. Ini menganalisis volume maksimum dalam audio, kemudian menyesuaikan volume keseluruhan secara proporsional sehingga volume maksimum mencapai mendekati tetapi tidak melebihi maksimum yang diizinkan (biasanya -0.5dB). Ini membuat volume audio keseluruhan lebih penuh sambil menghindari distorsi clipping.'
        },
        {
            question: 'Apakah proses pengeditan aman? Apakah audio akan diunggah ke server?',
            answer: 'Sangat aman! Alat kami menggunakan teknologi frontend murni, semua pemrosesan audio dilakukan secara lokal di browser Anda. File audio Anda tidak diunggah ke server mana pun, memastikan privasi dan keamanan data. Anda dapat mengedit file audio yang berisi konten sensitif dengan percaya diri.'
        },
        {
            question: 'Format apa yang dapat saya ekspor?',
            answer: 'Setelah diedit, Anda dapat mengekspor sebagai WAV (format tanpa kehilangan) atau MP3 (format terkompresi). Jika Anda hanya memilih sebagian audio, Anda dapat memilih untuk mengekspor audio penuh atau hanya seleksi. Tingkat sampel asli dan jumlah saluran dipertahankan selama ekspor.'
        }
    ],
    
    tutorialTitle: 'Cara Menggunakan Editor Visual Audio',
    steps: [
        {
            title: 'Unggah File Audio Anda',
            description: 'Pertama unggah file audio yang ingin Anda edit. Anda dapat mengunggah dengan dua cara: <strong>seret file</strong> ke area unggah atau <strong>klik telusuri</strong> untuk memilih file. Alat ini mendukung WAV, MP3, FLAC, OGG, AAC, M4A dan banyak format lainnya.',
            note: 'Kami menyarankan menggunakan format tanpa kehilangan (seperti WAV, FLAC) untuk mengedit untuk mempertahankan kualitas audio terbaik.'
        },
        {
            title: 'Lihat Gelombang Audio',
            description: 'Setelah mengunggah, gelombang audio akan otomatis ditampilkan di area pengeditan. Gelombang menunjukkan perubahan amplitudo audio, memungkinkan Anda melihat struktur audio secara visual. Informasi file ditampilkan di atas, termasuk durasi, tingkat sampel, dan jumlah saluran.',
            note: 'Puncak dalam gelombang mewakili bagian yang lebih keras, sedangkan area datar mewakili bagian yang lebih lembut atau senyap.'
        },
        {
            title: 'Pilih Wilayah Pengeditan',
            description: '<strong>Tahan tombol kiri mouse dan seret</strong> pada gelombang untuk memilih segmen audio. Area yang dipilih akan disorot biru, menampilkan rentang waktu seleksi. Anda dapat memutar seleksi untuk mengonfirmasi bahwa itu benar.',
            note: 'Jika tidak ada wilayah yang dipilih, beberapa alat pengeditan (seperti normalisasi) akan diterapkan ke seluruh audio.'
        },
        {
            title: 'Gunakan Alat Pengeditan',
            description: 'Setelah memilih wilayah, gunakan alat pengeditan di bawah: <strong>Pangkas</strong> menyimpan seleksi dan menghapus bagian lain, <strong>Hapus</strong> menghapus seleksi, <strong>Fade In/Out</strong> menambahkan efek gradien, <strong>Bisu</strong> membuat seleksi senyap, <strong>Normalisasi</strong> mengoptimalkan volume, <strong>Balik</strong> memutar audio mundur.',
            note: 'Operasi pengeditan berlaku segera, kami menyarankan memeriksa hasil dengan hati-hati sebelum mengekspor.'
        },
        {
            title: 'Putar dan Pratinjau',
            description: 'Gunakan kontrol pemutaran untuk <strong>memutar/jeda</strong>, <strong>maju cepat/mundur</strong>, dan <strong>berhenti</strong> audio. Garis indikator merah menunjukkan posisi pemutaran saat ini. Anda juga dapat menyesuaikan penggeser volume untuk mengontrol volume pemutaran.',
            note: 'Penyesuaian volume pemutaran tidak mempengaruhi audio yang diekspor, yang mempertahankan tingkat volume asli.'
        },
        {
            title: 'Ekspor Hasil Pengeditan',
            description: 'Ketika Anda puas dengan hasil pengeditan, pilih format ekspor (WAV atau MP3), lalu klik tombol <strong>"Ekspor Audio Penuh"</strong> atau <strong>"Ekspor Seleksi"</strong>. File akan otomatis diunduh ke perangkat Anda. Semua pemrosesan dilakukan secara lokal di browser, memastikan privasi dan keamanan audio.',
            note: 'Format WAV mempertahankan kualitas tanpa kehilangan tetapi ukuran file lebih besar; format MP3 memiliki ukuran file lebih kecil, cocok untuk berbagi.'
        }
    ],
    
    successTitle: 'Selamat!',
    successContent: 'Anda telah berhasil mempelajari cara menggunakan Editor Visual Audio kami. Sekarang Anda dapat dengan mudah mengedit file audio dalam berbagai format, melakukan operasi profesional seperti memangkas, fade in/out, penyesuaian volume dan lainnya, memenuhi berbagai kebutuhan seperti produksi podcast, pengeditan musik, dan pemrosesan audio.',
    
    relatedToolsTitle: 'Alat Terkait',
    relatedTools: [
        {
            name: 'Audio ke MP3',
            description: 'Konversi audio ke format MP3, hemat ruang penyimpanan dan mudah dibagikan.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio ke WAV',
            description: 'Konversi audio ke format WAV tanpa kehilangan, cocok untuk pemrosesan audio profesional.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio ke M4A',
            description: 'Konversi audio ke format M4A, kualitas tinggi dengan ukuran kecil.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Audio ke Teks',
            description: 'Konversi ucapan dalam audio ke teks, mendukung banyak bahasa.',
            url: 'https://www.ufreetools.com/tool/audio-to-text'
        }
    ],
    
    referencesTitle: 'Referensi',
    references: [
        {
            name: 'Prinsip Pengeditan Gelombang Audio',
            description: 'Pelajari tentang prinsip teknis tampilan dan pengeditan gelombang audio',
            url: 'https://en.wikipedia.org/wiki/Waveform'
        },
        {
            name: 'Pemrosesan Audio Digital',
            description: 'Pelajari lebih dalam teknik pemrosesan dan pengeditan audio digital',
            url: 'https://en.wikipedia.org/wiki/Digital_audio_editing'
        },
        {
            name: 'Panduan Format Audio',
            description: 'Ketahui karakteristik dan kasus penggunaan berbagai format audio',
            url: 'https://en.wikipedia.org/wiki/Audio_file_format'
        }
    ]
};
