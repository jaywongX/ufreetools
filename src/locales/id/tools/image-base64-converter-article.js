export default {
    title: 'Konverter Gambar Base64: Panduan Alat Encoding/Dekoding Gambar Online',
    functionTitle: 'Apa itu Konverter Gambar Base64 dan Apa Kegunaannya?',
    intro: '<strong>Konverter Gambar Base64</strong> kami adalah alat online yang kuat berjalan sepenuhnya di frontend yang memudahkan konversi dua arah antara gambar dan encoding Base64. Alat ini mendukung berbagai format gambar termasuk PNG, JPEG, WebP, GIF, dan SVG, dengan kemampuan kontrol kualitas dan pemrosesan batch. Menggunakan <strong>alat online gambar ke Base64</strong> kami, Anda dapat dengan cepat mengubah gambar menjadi encoding Base64 untuk integrasi web, transmisi API, atau penyimpanan data, dan juga memulihkan encoding Base64 kembali ke file gambar. Semua pemrosesan dilakukan secara lokal di browser tanpa perlu diunggah ke server, memastikan privasi dan keamanan data Anda.',
    
    useCasesTitle: 'Skenario Aplikasi Umum untuk Konversi Gambar Base64',
    useCases: [
        'Menyematkan ikon kecil dan gambar secara langsung di HTML atau CSS dalam pengembangan web untuk mengurangi permintaan HTTP',
        'Menggunakan gambar yang dienkode Base64 untuk menyimpan dan mentransmisikan data gambar dalam pengembangan aplikasi seluler',
        'Meneruskan data gambar di antarmuka API untuk menghindari kompleksitas unggahan file',
        'Menyematkan gambar dalam template email untuk memastikan tampilan yang benar',
        'Mengubah gambar menjadi format teks untuk penyimpanan dalam sistem penyimpanan data',
        'Menggunakan data gambar yang dienkode Base64 dalam strategi cache frontend',
        'Memproses data gambar di Web Workers untuk meningkatkan kinerja',
        'Memuat dan menyimpan sumber daya gambar sebelumnya dalam aplikasi offline'
    ],
    
    tipTitle: 'Tips Profesional:',
    tipContent: 'Untuk gambar yang memerlukan latar belakang transparan, disarankan menggunakan format PNG sambil menjaga kualitas asli. Untuk gambar bertipe foto, Anda dapat menggunakan format JPEG dan menyesuaikan kualitas secara tepat untuk mengurangi ukuran file. Data yang dienkode Base64 sekitar 133% dari ukuran file asli, harap kendalikan ukuran file untuk menghindari masalah kinerja.',
    
    conclusion: 'Alat <strong>konversi gambar Base64</strong> sangat berguna bagi pengembang frontend, pengembang aplikasi seluler, pengembang API, dan pengguna apa pun yang perlu memproses data gambar. Dengan menggunakan konverter Base64 kami, Anda dapat dengan cepat menerapkan konversi antara gambar dan encoding teks, menyederhanakan proses pengembangan, dan meningkatkan efisiensi kerja. Alat kami membuat proses ini sederhana dan efisien, tidak memerlukan instalasi perangkat lunak apa pun, dan berjalan sepenuhnya di browser.',
    
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqs: [
        {
            question: 'Apa itu encoding Base64? Mengapa saya perlu mengubah gambar menjadi Base64?',
            answer: 'Base64 adalah metode encoding yang mengubah data biner menjadi karakter ASCII. Setelah mengubah gambar menjadi encoding Base64, gambar dapat disematkan sebagai string teks dalam format teks seperti HTML, CSS, dan JSON tanpa permintaan file terpisah. Ini sangat berguna untuk ikon kecil, gambar sebaris, transmisi data API, dan skenario lainnya. <strong>Alat gambar ke Base64</strong> kami dapat menyelesaikan proses konversi ini dengan cepat.'
        },
        {
            question: 'Apakah encoding Base64 akan mempengaruhi kualitas gambar?',
            answer: 'Encoding Base64 itu sendiri tidak mempengaruhi kualitas gambar; ini hanya mengubah representasi data. Namun, jika pengaturan kualitas yang lebih rendah dipilih selama proses konversi (hanya berlaku untuk format JPEG), ini dapat mempengaruhi kualitas gambar. Alat kami memungkinkan Anda menyesuaikan parameter kualitas untuk menemukan keseimbangan antara ukuran file dan kualitas gambar. Untuk format PNG, WebP, dan lainnya, proses konversi bebas kerugian.'
        },
        {
            question: 'Format gambar apa yang dapat saya proses?',
            answer: '<strong>Konverter gambar Base64</strong> kami mendukung berbagai format gambar umum, termasuk PNG (mendukung latar belakang transparan), JPEG/JPG (kualitas dapat disesuaikan), WebP (optimasi format modern), GIF (termasuk animasi) dan SVG (grafik vektor). Anda dapat mengubah format gambar ini menjadi encoding Base64, dan juga memulihkan encoding Base64 kembali ke format gambar ini.'
        },
        {
            question: 'Bagaimana cara memproses beberapa gambar sekaligus secara batch?',
            answer: 'Alat kami mendukung fungsionalitas pemrosesan batch. Dalam mode gambar ke Base64, Anda dapat seret dan lepas beberapa gambar secara bersamaan atau menggunakan pemilih file untuk memilih beberapa file. Setelah mengunggah, klik tombol "Mulai Konversi" untuk memproses semua gambar secara bersamaan. Setelah konversi selesai, Anda dapat menggunakan fungsi "Unduh Batch" untuk mengemas semua encoding Base64 ke dalam file ZIP untuk diunduh.'
        },
        {
            question: 'Seberapa besar peningkatan ukuran data setelah encoding Base64?',
            answer: 'Encoding Base64 mengubah data biner asli menjadi format teks, dan ukuran data yang dienkode sekitar 133% dari file asli (yaitu peningkatan sekitar 33%). Ini karena Base64 menggunakan 4 karakter ASCII untuk merepresentasikan 3 byte data asli. Alat kami akan menampilkan informasi ukuran asli dan rasio kompresi untuk membantu Anda memahami efek konversi.'
        },
        {
            question: 'Bisakah saya mengubah encoding Base64 kembali menjadi gambar?',
            answer: 'Ya, alat kami mendukung konversi dua arah. Dalam mode Base64 ke gambar, Anda dapat menempel string encoding Base64 (dengan atau tanpa awalan data:image), dan alat akan secara otomatis mengenali format dan menghasilkan gambar. Anda juga dapat memilih format output (PNG, JPEG, atau WebP), bahkan jika format asli berbeda.'
        },
        {
            question: 'Akan ada masalah kinerja saat memproses file besar?',
            answer: 'Alat kami memproses semua data secara lokal di browser Anda dan dapat dengan cepat memproses sebagian besar gambar dengan ukuran umum (dalam beberapa MB). Untuk gambar yang sangat besar, kami telah menyediakan batas ukuran file maksimal dan fitur penyesuaian kualitas untuk membantu mengontrol waktu pemrosesan dan penggunaan memori. Jika Anda mengalami masalah kinerja, disarankan untuk mengurangi kualitas gambar secara tepat atau menggunakan alat kompresi gambar untuk pra-pemrosesan.'
        },
        {
            question: 'Apakah data gambar saya akan diunggah ke server?',
            answer: 'Tidak. <strong>Alat konversi Base64 murni frontend</strong> kami berjalan sepenuhnya di browser Anda, dan semua pemrosesan dan konversi gambar selesai secara lokal tanpa mengunggah data apa pun ke server. Ini memastikan privasi dan keamanan data Anda, sangat cocok untuk memproses gambar sensitif atau pribadi.'
        }
    ],
    
    tutorialTitle: 'Cara Menggunakan Konverter Gambar Base64',
    steps: [
        {
            title: 'Pilih Arah Konversi',
            description: 'Pertama, pilih arah konversi yang Anda butuhkan: <strong>Gambar ke Base64</strong> atau <strong>Base64 ke Gambar</strong>. Klik tombol radio yang sesuai sesuai kebutuhan Anda.',
            note: 'Gambar ke Base64 cocok untuk mengubah file gambar menjadi string yang dienkode, Base64 ke Gambar cocok untuk memulihkan string yang dienkode ke file gambar.'
        },
        {
            title: 'Unggah Gambar atau Input Encoding Base64',
            description: 'Jika Anda memilih Gambar ke Base64, Anda dapat <strong>seret dan lepas gambar</strong> ke area unggah atau klik area untuk memilih file dari perangkat Anda. Mendukung pemilihan beberapa file secara bersamaan untuk pemrosesan batch. Jika Anda memilih Base64 ke Gambar, harap tempel string encoding Base64 di kotak teks.',
            note: 'Encoding Base64 dapat menyertakan awalan data:image, alat akan mengenali dan memproses secara otomatis.'
        },
        {
            title: 'Sesuaikan Parameter Konversi (Opsional)',
            description: 'Dalam mode Gambar ke Base64, Anda dapat menyesuaikan slider <strong>Kualitas Gambar</strong> (1%-100%) untuk mengontrol kualitas output, dan juga dapat mengatur <strong>Ukuran File Maksimal</strong>. Alat akan mengoptimalkan secara otomatis untuk memastikan hasil memenuhi kebutuhan Anda.',
            note: 'Pengaturan kualitas terutama mempengaruhi format JPEG, format PNG dan WebP biasanya menjaga kualitas asli.'
        },
        {
            title: 'Jalankan Konversi',
            description: 'Klik tombol <strong>"Mulai Konversi"</strong> untuk mulai pemrosesan. Untuk Gambar ke Base64, alat akan mengubah setiap gambar menjadi string encoding Base64. Untuk Base64 ke Gambar, alat akan mendekode string dan menghasilkan pratinjau gambar.',
            note: 'Waktu pemrosesan tergantung pada jumlah dan ukuran gambar, sebagian besar konversi selesai secara instan.'
        },
        {
            title: 'Lihat Hasil Konversi',
            description: 'Setelah konversi selesai, Anda dapat melihat hasil di area output. Untuk Gambar ke Base64, akan menampilkan pratinjau gambar, teks encoding Base64, panjang encoding, ukuran asli, dan rasio kompresi. Untuk Base64 ke Gambar, akan menampilkan pratinjau gambar yang dihasilkan, dimensi gambar, dan format yang terdeteksi.',
            note: 'Anda dapat mengklik tombol "Salin Base64" untuk menyalin string encoding dengan cepat, atau mengklik tombol "Unduh" untuk menyimpan file gambar.'
        },
        {
            title: 'Unduh atau Gunakan Hasil',
            description: 'Untuk hasil Gambar ke Base64, klik tombol <strong>"Salin Base64"</strong> untuk menyalin encoding ke clipboard, lalu Anda dapat menggunakannya langsung di kode. Jika ada beberapa hasil, Anda dapat menggunakan fungsi <strong>"Unduh Batch"</strong> untuk mengemas dan mengunduh semua teks Base64. Untuk hasil Base64 ke Gambar, klik tombol "Unduh" untuk menyimpan file gambar.',
            note: 'Semua pemrosesan dilakukan di browser Anda, memastikan keamanan data dan perlindungan privasi.'
        }
    ],
    
    successTitle: 'Selamat!',
    successContent: 'Anda telah berhasil mempelajari cara menggunakan Konverter Gambar Base64 kami. Sekarang Anda dapat dengan mudah menerapkan konversi antara gambar dan encoding Base64, meningkatkan efisiensi pengembangan, dan menyederhanakan alur kerja.',
    
    relatedToolsTitle: 'Alat Terkait yang Mungkin Anda Minati',
    relatedTools: [
        {
            name: 'Kompresor Gambar',
            description: 'Mengurangi ukuran file gambar tanpa kehilangan kualitas yang signifikan.',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: 'Pengubah Ukuran Gambar',
            description: 'Mengubah ukuran gambar ke dimensi tertentu atau mengubah skala berdasarkan persentase.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: 'Alat Pembalik Warna Gambar',
            description: 'Alat online untuk membalik warna gambar dan membuat efek negatif.',
            url: 'https://www.ufreetools.com/tool/invert-image-colors'
        },
        {
            name: 'Generator Kode QR',
            description: 'Membuat kode QR khusus untuk URL, teks, informasi kontak, dll.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],
    
    referencesTitle: 'Sumber Referensi',
    references: [
        {
            name: 'Standar Encoding Base64 (RFC 4648)',
            description: 'Pelajari spesifikasi resmi dan detail implementasi encoding Base64',
            url: 'https://datatracker.ietf.org/doc/html/rfc4648'
        },
        {
            name: 'Panduan Format Gambar Web',
            description: 'Dokumentasi teknis tentang PNG, JPEG, WebP, dan format gambar lainnya',
            url: 'https://developer.mozilla.org/id/docs/Web/Media/Formats/Image_types'
        },
        {
            name: 'Spesifikasi Data URL',
            description: 'Standar untuk format data: URL dan gambar inline Base64',
            url: 'https://developer.mozilla.org/id/docs/Web/HTTP/Basics_of_HTTP/Data_URIs'
        }
    ]
}