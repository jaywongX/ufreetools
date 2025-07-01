export default {
    name: "Generator Pasangan Kunci SM2",
    description: "Menghasilkan pasangan kunci publik-privat SM2 yang sesuai dengan standar GB/T 32918-2016, mendukung berbagai format output",
    
    // Bagian UI Utama
    settings: "Pengaturan Pembuatan",
    keyLength: "Panjang Kunci",
    bits: "bit",
    standardBits: "Standar SM2 menggunakan panjang kunci 256-bit",
    outputFormat: "Format Output",
    keyPairCount: "Jumlah Pasangan Kunci",
    maxKeysWarning: "Maksimal 10 pasangan kunci dapat dibuat sekaligus",
    generating: "Sedang Membuat",
    generate: "Buat Pasangan Kunci",
    results: "Hasil Pembuatan",
    generatingKeys: "Sedang membuat pasangan kunci...",
    copyAll: "Salin Semua",
    noKeysGenerated: "Belum ada kunci yang dibuat. Atur pengaturan dan klik \"Buat Pasangan Kunci\".",
    keyPair: "Pasangan Kunci",
    copy: "Salin",
    publicKey: "Kunci Publik",
    privateKey: "Kunci Privat",
    keyComponents: "Komponen Kunci",
    invalidCount: "Masukkan angka antara 1-10",
    generateFailed: "Gagal membuat pasangan kunci",
    generateSuccess: "Berhasil membuat {count} pasangan kunci SM2",
    copiedToClipboard: "Tersalin ke clipboard",
    copyFailed: "Gagal menyalin",
    downloadedAs: "Telah diunduh sebagai {filename}",
    exportPem: "Ekspor sebagai PEM",
    exportAllJson: "Ekspor sebagai JSON",
    exportAllTxt: "Ekspor sebagai TXT",
    exportTxt: "Ekspor sebagai TXT",
    singleKeyDownloaded: "{type} telah diunduh sebagai Pem",
    allPemDownloaded: "Semua kunci telah diunduh sebagai Pem",
    keyPairCopied: "Pasangan kunci tersalin ke clipboard",
    allKeysCopied: "Semua pasangan kunci tersalin ke clipboard",
    componentsCopied: "Komponen kunci tersalin ke clipboard",
    componentsDownloaded: "Komponen kunci telah diunduh sebagai file TXT",

    // Konten Artikel
    article: {
        title: "Generator Pasangan Kunci SM2: Panduan Lengkap Standar Kriptografi China",
        introTitle: "Apa itu Generator Pasangan Kunci SM2 dan Kegunaannya?",
        introPara1: "<strong>Generator Pasangan Kunci SM2</strong> adalah alat kriptografi khusus yang membuat pasangan kunci publik dan privat yang aman sesuai dengan algoritma standar nasional China (GB/T 32918-2016). Berbeda dengan standar internasional seperti RSA atau ECC, SM2 dirancang dan disetujui khusus oleh regulator China, menjadikannya penting bagi organisasi yang beroperasi dalam kerangka regulasi China.",
        introPara2: "<strong>Alat pembuatan kunci SM2</strong> kami memungkinkan pengguna dengan mudah membuat pasangan kunci SM2 yang aman secara kriptografis tanpa pengetahuan mendalam tentang algoritma dasarnya. Alat ini mendukung berbagai format output termasuk PEM, HEX, dan Base64, membuatnya serbaguna di berbagai lingkungan pengembangan dan keamanan.",
        
        useCaseTitle: "Skenario Penggunaan Utama",
        useCase1: "<strong>Kepatuhan Layanan Keuangan</strong>: Bank dan perusahaan fintech yang beroperasi di China perlu menggunakan enkripsi SM2 untuk melindungi transaksi keuangan dan data pelanggan guna memenuhi persyaratan regulasi.",
        useCase2: "<strong>Sistem Informasi Pemerintah dan Perusahaan</strong>: Lembaga pemerintah China dan perusahaan besar harus menerapkan SM2 untuk komunikasi aman, penandatanganan dokumen, dan autentikasi.",
        useCase3: "<strong>E-commerce Lintas Batas</strong>: Perusahaan yang berdagang dengan China seringkali perlu menerapkan teknologi kriptografi SM2 untuk pertukaran data aman dan kepatuhan regulasi.",
        useCase4: "<strong>Keamanan Aplikasi Seluler</strong>: Pengembang yang membuat aplikasi untuk pasar China memerlukan pasangan kunci SM2 untuk mengimplementasikan mekanisme autentikasi dan perlindungan data yang aman.",
        standardInfo: "Algoritma SM2 adalah bagian dari rangkaian algoritma kriptografi SM (Shangmi) yang mencakup SM2 (kriptografi kunci publik), SM3 (hash), dan SM4 (enkripsi simetris). Seiring China terus mengembangkan kerangka kerja keamanan sibernya secara independen dari standar internasional, standar-standar ini semakin penting.",
        
        tutorialTitle: "Cara Menggunakan Generator Pasangan Kunci SM2",
        tutorialIntro: "Mengikuti panduan langkah demi langkah ini akan membantu Anda membuat pasangan kunci SM2 yang aman dengan cepat dan efisien. Setiap pasangan kunci yang dibuat mencakup komponen kunci publik dan privat yang diperlukan untuk operasi enkripsi, dekripsi, penandatanganan, dan verifikasi.",
        
        step1Title: "Langkah 1: Pilih Parameter Kunci",
        step1Desc: "Standar SM2 menggunakan panjang kunci tetap 256-bit, memberikan keamanan kuat sekaligus mempertahankan kinerja yang baik. Ini telah dipilih sebelumnya di alat kami dan tidak dapat diubah karena mengikuti standar resmi.",
        
        step2Title: "Langkah 2: Pilih Format Output",
        step2Desc: "Pilih format output yang Anda sukai: <ul><li><strong>PEM</strong>: Format standar untuk sertifikat dan kunci kriptografi, mudah dikenali oleh sebagian besar sistem dan aplikasi.</li><li><strong>HEX</strong>: Representasi heksadesimal, cocok untuk implementasi langsung dalam kode.</li><li><strong>Base64</strong>: Representasi ringkas yang umum digunakan dalam aplikasi web dan komunikasi API.</li></ul>",
        
        step3Title: "Langkah 3: Tentukan Jumlah Pasangan Kunci",
        step3Desc: "Putuskan berapa banyak pasangan kunci yang Anda butuhkan. Ini sangat berguna untuk pengujian atau menyiapkan beberapa saluran keamanan.",
        
        step4Title: "Langkah 4: Buat dan Kelola Kunci",
        step4Desc: "Klik tombol \"Buat Pasangan Kunci\" dan tunggu hingga proses selesai. Setelah dibuat, Anda dapat melihat, menyalin, atau mengekspor kunci. Pastikan untuk menyimpan kunci privat Anda dengan aman dan jangan pernah membagikannya dengan pihak yang tidak berwenang.",
        
        relatedToolsTitle: "Alat Kriptografi Terkait",
        relatedToolsDesc: "Untuk menerapkan langkah-langkah keamanan yang komprehensif, Anda mungkin ingin menjelajahi alat-alat pelengkap ini:",
        relatedTool1: "Generator Pasangan Kunci RSA - Membuat kunci RSA yang sesuai dengan standar kriptografi internasional",
        relatedTool2: "Kalkulator Hash - Menghitung berbagai nilai hash termasuk SM3 untuk verifikasi integritas data",
        
        faqTitle: "Pertanyaan Umum tentang Kriptografi SM2",
        faq1Question: "Apa perbedaan SM2 dengan algoritma kriptografi kunci publik lain seperti RSA?",
        faq1Answer: "SM2 adalah algoritma kriptografi kunci publik berbasis kurva eliptik yang dikembangkan oleh otoritas China. Dibandingkan dengan RSA, SM2 menawarkan keamanan yang setara tetapi dengan panjang kunci yang lebih pendek (256-bit untuk SM2 vs 2048+ bit untuk RSA), menghasilkan kinerja yang lebih baik. Perbedaan utamanya adalah SM2 dirancang khusus untuk mematuhi regulasi di China, sedangkan RSA digunakan lebih luas secara internasional. Dasar matematisnya juga berbeda: SM2 berbasis pada kriptografi kurva eliptik, sedangkan RSA bergantung pada kesulitan memfaktorkan bilangan prima besar.",
        
        faq2Question: "Apakah enkripsi SM2 aman untuk aplikasi bisnis internasional?",
        faq2Answer: "Ya, SM2 memberikan keamanan kriptografi yang kuat sesuai standar internasional. Dengan panjang kunci 256-bit, ia menawarkan keamanan yang setara dengan kunci RSA 3072-bit. SM2 telah melalui analisis kriptografi ekstensif oleh otoritas China dan dianggap tahan terhadap serangan yang diketahui. Namun, untuk interoperabilitas internasional, beberapa organisasi mungkin lebih memilih standar internasional yang lebih banyak diadopsi seperti RSA atau ECDSA. Pilihan biasanya tergantung pada persyaratan kepatuhan spesifik dan lokasi penerapan aplikasi Anda.",
        
        faq3Question: "Bagaimana cara memverifikasi apakah pasangan kunci SM2 saya berfungsi dengan benar?",
        faq3Answer: "Untuk menguji pasangan kunci SM2 Anda, Anda dapat melakukan tes enkripsi dan dekripsi sederhana: gunakan kunci publik untuk mengenkripsi pesan tes, lalu gunakan kunci privat yang sesuai untuk mendekripsinya. Jika pesan yang didekripsi cocok dengan pesan asli, maka pasangan kunci Anda berfungsi dengan benar. Atau, Anda dapat menggunakan kunci privat untuk menandatangani pesan dan menggunakan kunci publik untuk memverifikasi tanda tangan tersebut. Alat kami memastikan semua pasangan kunci yang dibuat secara matematis valid sesuai spesifikasi standar SM2.",
        
        faq4Question: "Dapatkah kunci SM2 digunakan dalam implementasi SSL/TLS standar?",
        faq4Answer: "Dukungan SM2 dalam SSL/TLS tergantung pada implementasi spesifik. China telah mengembangkan varian yang disebut TLCP (Transport Layer Cryptography Protocol) yang menggunakan algoritma SM2/SM3/SM4 sebagai pengganti standar internasional. Browser utama di China umumnya mendukung standar ini. Untuk sistem internasional, Anda mungkin memerlukan library khusus atau konfigurasi untuk mengaktifkan dukungan SM2. OpenSSL 1.1.1 dan yang lebih baru mencakup dukungan untuk kriptografi SM2, membuat integrasi di banyak sistem menjadi lebih mudah.",
        
        faq5Question: "Apa yang diwakili oleh komponen x, y, dan d dalam pasangan kunci SM2?",
        faq5Answer: "Dalam pasangan kunci SM2, komponen ini mewakili nilai matematis penting: <ul><li><strong>x dan y</strong>: Ini adalah koordinat titik pada kurva eliptik yang mewakili kunci publik Anda. Bersama-sama mereka membentuk kunci publik lengkap yang dapat dibagikan secara publik.</li><li><strong>d</strong>: Ini adalah kunci privat Anda, sebuah angka acak besar yang harus dijaga kerahasiaan. Ini digunakan untuk operasi dekripsi dan penandatanganan.</li></ul> Berbeda dengan RSA yang memiliki beberapa komponen seperti p, q, d, e, n, kunci privat SM2 lebih sederhana, hanya memiliki nilai skalar d, sedangkan kunci publik terdiri dari koordinat titik (x,y).",
        
        resourcesTitle: "Sumber Daya Tambahan",
        resourcesDesc: "Untuk mempelajari lebih lanjut tentang kriptografi SM2 dan standar kriptografi China, sumber-sumber otoritatif berikut menyediakan informasi berharga:",
        resource1: "GB/T 32918-2016 - Publikasi Standar SM2 Resmi (Bahasa Mandarin)",
        resource2: "Administrasi Kriptografi Nasional - Dokumen Regulasi Resmi",
        resource3: "ISO/IEC 14888-3:2018 - Standar Internasional yang Mengutip Algoritma Tanda Tangan SM2",
        
        conclusionTitle: "Kesimpulan",
        conclusionPara: "<strong>Generator Pasangan Kunci SM2</strong> menyediakan cara yang ramah pengguna untuk membuat kunci kriptografi yang aman sesuai dengan standar nasional China. Baik Anda mengembangkan aplikasi untuk pasar China, menerapkan saluran komunikasi yang aman, atau memenuhi persyaratan regulasi, alat kami menyederhanakan proses pembuatan kunci SM2 yang kompleks. Dengan mendukung berbagai format output dan menyediakan fungsi manajemen kunci yang komprehensif, <strong>alat kriptografi SM2</strong> ini membantu organisasi menerapkan langkah-langkah keamanan yang kuat sambil mempertahankan kepatuhan terhadap peraturan kriptografi China."
    }
}