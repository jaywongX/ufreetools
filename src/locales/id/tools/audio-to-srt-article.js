export default {
    title: 'Alat Audio ke SRT Subtitle: Panduan Penggunaan Konverter Audio ke Subtitle Online',
    functionTitle: 'Apa itu Alat Audio ke SRT Subtitle dan untuk apa gunanya?',
    intro: '<strong>Alat audio ke SRT subtitle</strong> kami adalah aplikasi online profesional yang dapat mengonversi berbagai format audio seperti WAV, MP3, FLAC, OGG, AAC, M4A ke format subtitle SRT. SRT (SubRip Text) adalah salah satu format subtitle yang paling banyak digunakan, didukung oleh hampir semua pemutar video dan perangkat lunak pengeditan. Dengan <strong>konverter audio ke subtitle online</strong> kami, Anda dapat menganalisis energi audio untuk mendeteksi segmen ucapan secara otomatis dan menghasilkan kode waktu subtitle yang akurat. Alat ini mendukung pengaturan sensitivitas, konfigurasi durasi subtitle, dan pemrosesan batch, dengan semua pemrosesan dilakukan secara lokal di browser tanpa perlu menginstal perangkat lunak apa pun.',
    
    useCasesTitle: 'Skenario Penggunaan Umum Konversi Audio ke SRT Subtitle',
    useCases: [
        'Membuat file subtitle SRT untuk video dan mengunggah ke YouTube, TikTok, dan platform lainnya',
        'Mensegmentasi rekaman podcast secara otomatis untuk memudahkan penambahan teks kemudian',
        'Menghasilkan timeline subtitle untuk video kursus online',
        'Mengonversi rekaman rapat menjadi file subtitle dengan kode waktu',
        'Mempersiapkan subtitle untuk video pendek (Reels, Shorts, TikTok)',
        'Mensegmentasi rekaman buku audio dan menggabungkannya dengan teks untuk membuat subtitle',
        'Menghasilkan kode waktu subtitle untuk video lirik lagu',
        'Membuat kerangka subtitle untuk materi mentah wawancara atau dokumenter'
    ],
    
    tipTitle: 'Tip Profesional:',
    tipContent: 'Alat ini mengidentifikasi segmen ucapan melalui deteksi energi audio, tetapi tidak mengenali konten ucapan secara otomatis. File SRT yang dihasilkan berisi kode waktu dan teks pengganti yang dapat diimpor ke perangkat lunak pengedit subtitle (seperti Aegisub, Subtitle Edit, dll.) untuk diganti dengan teks asli. Untuk audio dengan noise latar belakang yang besar, disarankan melakukan pengurangan noise terlebih dahulu untuk mendapatkan kode waktu yang lebih akurat.',
    
    conclusion: 'Alat <strong>konversi audio ke SRT subtitle</strong> sangat berguna untuk kreator video, produser podcast, kreator konten, dan semua pengguna yang perlu menambahkan subtitle ke audio/video. Dengan konverter audio ke subtitle online kami, Anda dapat dengan cepat menghasilkan timeline subtitle yang akurat dari audio, menghemat waktu pembuatan subtitle manual secara signifikan. Alat kami mendukung pemrosesan batch dan menyediakan kontrol parameter sensitivitas, durasi subtitle, dan interval diam, dengan semua pemrosesan dilakukan secara lokal di browser, menjamin privasi dan keamanan audio Anda.',
    
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: [
        {
            question: 'Format input apa saja yang didukung oleh alat konversi audio ke SRT?',
            answer: '<strong>Konverter audio ke subtitle online</strong> kami mendukung berbagai format audio umum, termasuk WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE, dan lainnya. Anda dapat mengunggah beberapa file audio dalam format berbeda secara bersamaan untuk konversi batch.'
        },
        {
            question: 'Apa itu format subtitle SRT?',
            answer: 'SRT (SubRip Text) adalah salah satu format file subtitle paling populer, dibuat oleh perangkat lunak SubRip. Menggunakan format teks sederhana dengan nomor urut, kode waktu, dan teks subtitle. Hampir semua pemutar video (VLC, PotPlayer, dll.) dan perangkat lunak pengeditan video (Premiere, Final Cut, dll.) mendukung format SRT.'
        },
        {
            question: 'Apakah alat ini mengenali konten ucapan secara otomatis?',
            answer: 'Saat ini, alat ini menganalisis energi audio untuk mendeteksi segmen ucapan dan keheningan secara otomatis, menghasilkan kode waktu subtitle, tetapi tidak mengonversi ucapan ke teks secara otomatis. File subtitle yang dihasilkan berisi kode waktu dan teks pengganti; Anda perlu memasukkan teks secara manual di perangkat lunak pengedit subtitle atau menggunakan alat pengenalan ucapan untuk menambahkan teks asli.'
        },
        {
            question: 'Bagaimana cara mendapatkan kode waktu yang lebih akurat?',
            answer: 'Untuk kode waktu yang lebih akurat, kami sarankan: 1) Gunakan file audio berkualitas tinggi dengan sedikit noise; 2) Pilih pengaturan sensitivitas yang sesuai dengan karakteristik audio; 3) Sesuaikan interval diam minimum dengan kecepatan bicara; 4) Untuk audio dengan noise latar belakang besar, lakukan pengurangan noise terlebih dahulu. Sensitivitas tinggi cocok untuk audio volume rendah, sensitivitas rendah cocok untuk audio dengan noise latar belakang.'
        },
        {
            question: 'Bisakah saya mengonversi beberapa file audio ke SRT secara batch?',
            answer: 'Tentu saja! <strong>Alat audio ke SRT subtitle</strong> kami mendukung pemrosesan batch. Anda dapat mengunggah beberapa file audio sekaligus dan alat akan memproses semua file secara berurutan. Setelah selesai, Anda dapat mengunduh setiap file SRT secara individual atau menggunakan fungsi unduh batch untuk mengemas semua hasil ke file ZIP.'
        },
        {
            question: 'Di perangkat lunak apa saja saya bisa menggunakan file SRT yang dikonversi?',
            answer: 'File SRT yang dikonversi dapat digunakan di hampir semua perangkat lunak pengedit subtitle dan pengeditan video, termasuk: Aegisub, Subtitle Edit, PotPlayer, VLC, Adobe Premiere, Final Cut Pro, DaVinci Resolve, dan lainnya. Juga dapat diunggah langsung ke YouTube, TikTok, Vimeo, dan platform video lainnya sebagai subtitle.'
        },
        {
            question: 'Apakah proses konversi aman? Apakah audio diunggah ke server?',
            answer: 'Aman sepenuhnya! Alat kami menggunakan teknologi front-end murni, dengan semua pemrosesan audio dilakukan secara lokal di browser Anda. File audio Anda tidak diunggah ke server mana pun, menjamin privasi dan keamanan data.'
        }
    ],
    
    tutorialTitle: 'Cara Menggunakan Alat Audio ke SRT Subtitle',
    steps: [
        {
            title: 'Unggah File Audio Anda',
            description: 'Pertama, unggah file audio yang ingin Anda konversi ke subtitle SRT. Anda dapat mengunggah dengan dua cara: <strong>seret dan lepas file</strong> ke area unggah atau <strong>klik untuk menelusuri</strong> dan pilih file. Alat ini mendukung berbagai format seperti WAV, MP3, FLAC, OGG, AAC, M4A, dan Anda dapat mengunggah beberapa file sekaligus untuk pemrosesan batch.',
            note: 'Disarankan menggunakan file audio yang jelas dengan sedikit noise latar belakang untuk mendapatkan kode waktu yang lebih akurat.'
        },
        {
            title: 'Pratinjau File Audio',
            description: 'Setelah diunggah, Anda akan melihat daftar semua file audio yang diunggah di area pratinjau sebelah kiri. Setiap file menampilkan nama file, format, dan ukuran. Anda dapat mengklik tombol putar untuk mempratinjau audio dan memastikan file yang benar telah dipilih.',
            note: 'Saat pemrosesan batch, disarankan mempratinjau daftar audio terlebih dahulu untuk memastikan semua file yang diperlukan telah diunggah dengan benar.'
        },
        {
            title: 'Atur Parameter Konversi',
            description: 'Sebelum konversi, Anda dapat menyesuaikan pengaturan output. Pilih <strong>sensitivitas deteksi</strong> yang sesuai (tinggi/sedang/rendah), atur <strong>durasi maksimum subtitle</strong> (durasi maksimum segmen subtitle), konfigurasi <strong>interval diam minimum</strong> (berapa lama keheningan diperlukan untuk membagi subtitle), dan pilih <strong>encoding file</strong>.',
            note: 'Sensitivitas sedang, durasi maksimum 5 detik, dan interval diam 0,5 detik cocok untuk sebagian besar audio. Sesuaikan pengaturan jika hasilnya tidak ideal.'
        },
        {
            title: 'Konversi ke Subtitle SRT',
            description: 'Setelah konfigurasi, klik tombol <strong>"Konversi ke SRT"</strong> untuk memulai pemrosesan. Alat akan menganalisis perubahan energi setiap file audio, mendeteksi segmen ucapan, dan menghasilkan kode waktu yang sesuai. Informasi kemajuan akan ditampilkan saat pemrosesan batch.',
            note: 'Tetap buka halaman selama konversi dan jangan tutup tab browser.'
        },
        {
            title: 'Pratinjau Hasil Konversi',
            description: 'Setelah konversi selesai, area output di sebelah kanan akan menampilkan semua file subtitle SRT yang dikonversi. Setiap file menyediakan <strong>fungsi pratinjau subtitle</strong>, menampilkan beberapa baris pertama konten subtitle. Anda dapat memeriksa informasi seperti jumlah subtitle, durasi, dan ukuran file.',
            note: 'Subtitle yang dihasilkan adalah teks pengganti yang dapat diganti dengan teks asli di perangkat lunak pengedit subtitle.'
        },
        {
            title: 'Unduh Hasil Konversi',
            description: 'Setelah puas dengan hasilnya, Anda dapat mengklik tombol <strong>"Unduh SRT"</strong> di bawah setiap file untuk menyimpan secara individual, atau menggunakan tombol <strong>"Unduh Batch (ZIP)"</strong> di bagian atas area output untuk mengunduh semua file SRT dalam satu arsip.',
            note: 'Saat unduh batch, file SRT di dalam arsip ZIP akan mempertahankan nama file asli dengan ekstensi .srt ditambahkan secara otomatis.'
        }
    ],
    
    successTitle: 'Selamat!',
    successContent: 'Anda telah berhasil belajar cara menggunakan alat audio ke SRT subtitle kami. Sekarang Anda dapat dengan mudah menghasilkan kode waktu subtitle yang akurat untuk berbagai audio, untuk pembuatan subtitle video, segmentasi podcast, dan banyak kegunaan lainnya.',
    
    relatedToolsTitle: 'Alat Terkait yang Mungkin Anda Minati',
    relatedTools: [
        {
            name: 'Audio ke MP3',
            description: 'Konversi audio ke format MP3, menghemat ruang penyimpanan dan memudahkan berbagi.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio ke WAV',
            description: 'Konversi audio ke format WAV tanpa kehilangan kualitas, cocok untuk pemrosesan audio profesional.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio ke MIDI',
            description: 'Konversi audio ke format MIDI, cocok untuk produksi musik dan analisis.',
            url: 'https://www.ufreetools.com/tool/audio-to-midi'
        },
        {
            name: 'Audio ke M4A',
            description: 'Konversi audio ke format M4A, kompatibel dengan perangkat Apple dengan kualitas suara yang sangat baik.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        }
    ],
    
    referencesTitle: 'Sumber Referensi',
    references: [
        {
            name: 'Spesifikasi Format Subtitle SRT',
            description: 'Pahami spesifikasi teknis dan skenario penggunaan format subtitle SRT',
            url: 'https://en.wikipedia.org/wiki/SubRip'
        },
        {
            name: 'Teknologi Deteksi Energi Audio',
            description: 'Pelajari lebih lanjut tentang algoritma deteksi aktivitas ucapan berbasis energi',
            url: 'https://en.wikipedia.org/wiki/Voice_activity_detection'
        },
        {
            name: 'Praktik Terbaik Pembuatan Subtitle',
            description: 'Pelajari alur kerja dan standar profesional untuk pembuatan subtitle',
            url: 'https://en.wikipedia.org/wiki/Subtitle'
        }
    ]
};
