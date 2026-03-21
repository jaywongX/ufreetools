export default {
    title: 'Alat Audio ke PCM: Panduan Konverter Format Audio Online',
    functionTitle: 'Apa itu Alat Audio ke PCM dan Kegunaannya?',
    intro: 'Alat <strong>Audio ke PCM</strong> kami adalah konverter format audio online profesional yang dapat mengonversi WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE dan format audio lainnya ke data audio PCM mentah. PCM (Pulse Code Modulation) adalah bentuk paling asli dari representasi audio digital, tanpa kompresi apa pun, mempertahankan informasi audio lengkap. Menggunakan <strong>konverter audio ke PCM online</strong> kami, Anda dapat mengontrol secara presisi sample rate, bit depth, dan pengaturan channel untuk pengenalan suara, analisis audio, pemrosesan audio profesional, dan lainnya.',
    
    useCasesTitle: 'Kasus Penggunaan Umum untuk Konversi Audio ke PCM',
    useCases: [
        'Menyiapkan input audio PCM standar untuk sistem pengenalan suara (mis. Baidu Speech, iFlytek)',
        'Mengonversi berbagai format audio ke data PCM mentah untuk pemrosesan dan analisis sinyal audio',
        'Menyiapkan data audio mentah untuk perangkat audio tersemat atau game engine',
        'Analisis data waveform mentah dalam penelitian dan pendidikan audio',
        'Konversi format perantara untuk software editing audio',
        'Preprocessing audio untuk sistem komunikasi suara (mis. VoIP)',
        'Ekstraksi fitur audio dan pelatihan model machine learning',
        'Generasi sinyal tes audio dan kalibrasi perangkat'
    ],
    
    tipTitle: 'Tips Profesional:',
    tipContent: 'Rekomendasi parameter format PCM: Untuk pengenalan suara, gunakan sample rate 16000 Hz, bit depth 16-bit, mono; standar kualitas CD adalah 44100 Hz, 16-bit, stereo; untuk produksi audio profesional disarankan 48000 Hz atau lebih tinggi, 24-bit. File PCM besar, sekitar 10 kali ukuran MP3 durasi yang sama, pastikan ruang penyimpanan yang cukup.',
    
    conclusion: 'Alat <strong>konversi format audio ke PCM</strong> sangat berguna bagi developer pengenalan suara, engineer algoritma audio, developer game, dan peneliti audio. Dengan menggunakan konverter audio ke PCM online kami, Anda dapat mengonversi audio berbagai format ke data PCM mentah dengan kontrol presisi atas sample rate dan bit depth, memenuhi persyaratan teknis untuk berbagai skenario aplikasi. Alat kami mendukung pemrosesan batch, semua pemrosesan dilakukan secara lokal di browser Anda, memastikan privasi dan keamanan data audio Anda.',
    
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: [
        {
            question: 'Format input apa yang didukung oleh alat audio ke PCM?',
            answer: '<strong>Konverter audio ke PCM online</strong> kami mendukung berbagai format audio umum termasuk WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE, dan lainnya. Anda dapat mengunggah beberapa file audio format berbeda secara bersamaan untuk konversi batch. Alat secara otomatis mendeteksi format input dan memproses konversi.'
        },
        {
            question: 'Apa perbedaan antara format PCM dan WAV?',
            answer: 'WAV adalah format kontainer yang biasanya berisi data audio yang dikodekan PCM, tetapi file WAV menyertakan informasi header (metadata seperti sample rate, bit depth, channel). Data PCM murni adalah sampel audio mentah tanpa header file. Beberapa aplikasi (seperti API pengenalan suara) memerlukan input data PCM murni, di mana header file WAV perlu dihapus.'
        },
        {
            question: 'Bagaimana cara menyiapkan audio PCM untuk pengenalan suara?',
            answer: 'Sebagian besar sistem pengenalan suara (mis. Baidu Speech Recognition, iFlytek, Google Speech API) memerlukan parameter format PCM: <strong>sample rate 16000 Hz, bit depth 16-bit, mono</strong>. Pilih parameter ini selama konversi untuk mendapatkan audio PCM yang memenuhi persyaratan. Beberapa sistem juga mendukung sample rate 8000 Hz.'
        },
        {
            question: 'Apa itu sample rate dan bit depth?',
            answer: '<strong>Sample rate</strong> adalah jumlah sampel audio yang dikumpulkan per detik, menentukan rentang frekuensi audio. 8000 Hz cocok untuk suara telepon, 16000 Hz untuk pengenalan suara, 44100 Hz adalah standar CD, 48000 Hz adalah standar audio profesional. <strong>Bit depth</strong> menentukan presisi setiap titik sampel, 8-bit presisi lebih rendah, 16-bit adalah standar, 24-bit dan 32-bit untuk produksi audio profesional.'
        },
        {
            question: 'Mengapa file PCM begitu besar?',
            answer: 'PCM adalah data audio mentah yang tidak dikompresi tanpa pemrosesan kompresi apa pun. Misalnya, 1 menit audio PCM stereo 16-bit, 44100 Hz sekitar 10 MB. Ini adalah trade-off format PCM untuk menjamin integritas audio. Jika Anda perlu mengurangi ukuran file, pertimbangkan konversi ke format FLAC (kompresi lossless) atau MP3 (kompresi lossy).'
        },
        {
            question: 'Apakah proses konversi aman? Apakah audio akan diunggah ke server?',
            answer: 'Sangat aman! Alat kami menggunakan teknologi frontend murni, semua pemrosesan audio dilakukan secara lokal di browser Anda. File audio Anda tidak diunggah ke server mana pun, memastikan privasi dan keamanan data. Anda dapat memproses file audio yang berisi konten sensitif dengan aman.'
        },
        {
            question: 'Apa perbedaan antara PCM signed dan unsigned?',
            answer: 'Ini adalah format penyimpanan data PCM. <strong>Format signed</strong> (Signed) menggunakan two\'s complement untuk merepresentasikan nilai positif dan negatif, yang merupakan format standar untuk sebagian besar pemrosesan audio dengan kompatibilitas yang lebih baik. <strong>Format unsigned</strong> (Unsigned) hanya merepresentasikan nilai positif, terutama digunakan untuk perangkat keras tertentu atau sistem lama. Umumnya disarankan memilih format signed.'
        }
    ],
    
    tutorialTitle: 'Cara Menggunakan Alat Audio ke PCM',
    steps: [
        {
            title: 'Unggah File Audio Anda',
            description: 'Pertama, unggah file audio yang ingin Anda konversi ke format PCM. Anda dapat mengunggah dengan dua cara: <strong>seret file</strong> ke area unggah atau <strong>klik telusuri</strong> untuk memilih file. Alat mendukung WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE, dan format lain, Anda dapat mengunggah beberapa file sekaligus untuk pemrosesan batch.',
            note: 'Beberapa file audio format berbeda dapat diunggah secara bersamaan, alat akan secara otomatis mengidentifikasi dan memprosesnya.'
        },
        {
            title: 'Pratinjau File Audio',
            description: 'Setelah mengunggah, Anda akan melihat semua file audio yang diunggah di area pratinjau di sebelah kiri. Setiap file menampilkan nama file, format asli, ukuran file, dan durasi. Anda dapat mengklik tombol play untuk mempratinjau audio dan mengonfirmasi file yang benar dipilih. Untuk menghapus file, klik ikon hapus.',
            note: 'Untuk pemrosesan batch, disarankan untuk mempratinjau daftar audio terlebih dahulu untuk memastikan semua file yang akan dikonversi telah diunggah dengan benar.'
        },
        {
            title: 'Atur Parameter PCM',
            description: 'Sebelum konversi, Anda perlu mengatur parameter output PCM. Pilih <strong>sample rate</strong> yang sesuai (8000-48000 Hz), atur <strong>bit depth</strong> (8-bit, 16-bit, 24-bit, 32-bit), pilih <strong>channel</strong> (mono atau stereo). Untuk aplikasi pengenalan suara, disarankan memilih sample rate 16000 Hz, bit depth 16-bit, mono.',
            note: 'Skenario aplikasi berbeda memiliki persyaratan parameter PCM yang berbeda, pilih kombinasi parameter yang sesuai berdasarkan penggunaan target.'
        },
        {
            title: 'Konversi ke Format PCM',
            description: 'Setelah pengaturan, klik tombol <strong>"Konversi ke PCM"</strong> untuk memulai pemrosesan. Alat akan memproses semua file audio yang diunggah secara berurutan, menampilkan informasi kemajuan selama pemrosesan batch. Waktu konversi tergantung pada ukuran dan jumlah file, sebagian besar audio dapat diselesaikan dalam beberapa detik hingga puluhan detik.',
            note: 'Harap tetap buka halaman selama konversi, jangan tutup tab browser.'
        },
        {
            title: 'Pratinjau Hasil Konversi',
            description: 'Setelah konversi selesai, semua file PCM yang dikonversi akan ditampilkan di area output di sebelah kanan. Setiap file menampilkan ukuran asli, ukuran setelah konversi, dan informasi lainnya. Karena PCM adalah format data mentah, beberapa browser mungkin tidak dapat memutarnya secara langsung, Anda dapat mengunduh dan menggunakannya di software audio profesional.',
            note: 'File PCM besar, pastikan ruang penyimpanan yang cukup.'
        },
        {
            title: 'Unduh Hasil Konversi',
            description: 'Setelah puas dengan hasil konversi, Anda dapat mengklik tombol <strong>"Unduh PCM"</strong> di bawah setiap file untuk menyimpan secara individual, atau menggunakan tombol <strong>"Unduh Batch (ZIP)"</strong> di bagian atas area output untuk mengemas semua file PCM yang dikonversi ke dalam satu file ZIP untuk diunduh sekaligus. Semua pemrosesan dilakukan secara lokal di browser Anda, memastikan privasi dan keamanan data audio Anda.',
            note: 'File PCM yang diunduh dapat langsung digunakan di API pengenalan suara, software analisis audio, atau aplikasi lain yang mendukung format PCM.'
        }
    ],
    
    successTitle: 'Selamat!',
    successContent: 'Anda telah berhasil mempelajari cara menggunakan alat audio ke PCM kami. Sekarang Anda dapat mengonversi audio berbagai format ke data PCM mentah untuk pengenalan suara, analisis audio, pemrosesan audio profesional, dan skenario aplikasi lainnya.',
    
    relatedToolsTitle: 'Alat Terkait yang Mungkin Menarik bagi Anda',
    relatedTools: [
        {
            name: 'Audio ke MP3',
            description: 'Konversi audio ke format MP3 dengan kompatibilitas terbaik untuk pemutaran musik dan berbagi.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio ke WAV',
            description: 'Konversi audio ke format WAV lossless untuk editing profesional dan pengarsipan.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio ke M4A',
            description: 'Konversi audio ke format M4A yang cocok untuk perangkat Apple.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Gambar ke ASCII Art',
            description: 'Konversi gambar ke ASCII character art untuk efek seni teks yang unik.',
            url: 'https://www.ufreetools.com/tool/image-to-ascii'
        }
    ],
    
    referencesTitle: 'Sumber Referensi',
    references: [
        {
            name: 'Detail Format Audio PCM',
            description: 'Pelajari prinsip dan detail teknis Pulse Code Modulation',
            url: 'https://en.wikipedia.org/wiki/Pulse-code_modulation'
        },
        {
            name: 'Persyaratan Audio Pengenalan Suara',
            description: 'Persyaratan format audio untuk platform pengenalan suara utama',
            url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats'
        },
        {
            name: 'Dasar-dasar Audio Digital',
            description: 'Penjelasan rinci tentang sample rate, bit depth, channel, dan konsep lainnya',
            url: 'https://en.wikipedia.org/wiki/Digital_audio'
        }
    ]
};
