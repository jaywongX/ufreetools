export default {
    title: "Parser Struktur ASN.1 - Dekode dan Visualisasikan Data yang Dikodekan ASN.1",

    // Bagian pengantar
    introTitle: "Apa itu Parser Struktur ASN.1?",
    introPara1: "Parser Struktur ASN.1 adalah alat yang kuat untuk mendekode dan memvisualisasikan struktur data yang dikodekan dalam Abstract Syntax Notation One (ASN.1). ASN.1 adalah bahasa deskripsi antarmuka standar yang digunakan untuk mendefinisikan struktur data yang dapat diserialisasi dan deserialisasi lintas platform. Ini banyak digunakan dalam telekomunikasi dan jaringan komputer, terutama dalam protokol kriptografi.",
    introPara2: "Parser Struktur ASN.1 kami menyediakan pendekatan interaktif untuk memeriksa struktur ASN.1 yang kompleks, mendukung berbagai format input termasuk PEM, HEX, Base64 dan DER. Ini menyediakan visualisasi berbasis pohon yang memungkinkan Anda dengan mudah menjelajahi elemen ASN.1 yang bersarang, sangat berharga bagi pengembang, peneliti keamanan, dan insinyur jaringan.",

    applicationTitle: "Aplikasi Umum Parser ASN.1",
    application1: "<strong>Analisis Sertifikat X.509</strong>: Periksa struktur dan konten sertifikat SSL/TLS untuk audit keamanan dan pemecahan masalah.",
    application2: "<strong>Pemeriksaan File PKCS</strong>: Analisis mendetail format penyimpanan kunci privat, permintaan sertifikat, dan sertifikat.",
    application3: "<strong>Sintaks Pesan Kriptografi (CMS)</strong>: Periksa struktur data yang ditandatangani dan dienkripsi yang digunakan dalam protokol pesan aman.",
    application4: "<strong>Analisis Protokol Jaringan</strong>: Dekode data ASN.1 yang digunakan dalam protokol seperti SNMP, LDAP dan H.323.",
    introPara3: "Parsing struktur ASN.1 sangat penting untuk memahami format data kompleks yang digunakan dalam sistem keamanan modern. Parser kami membuat proses ini menjadi intuitif dengan menyediakan visualisasi berwarna, tampilan pohon yang dapat diperluas, dan hex dump dari data yang dikodekan.",

    // Bagian FAQ
    faqTitle: "Pertanyaan Umum tentang Parser Struktur ASN.1",

    faq1Question: "Format apa saja yang dapat diterima oleh Parser Struktur ASN.1?",
    faq1Answer: "Parser Struktur ASN.1 kami mendukung berbagai format input termasuk PEM (Privacy Enhanced Mail), HEX (heksadesimal), Base64 dan file biner DER (Distinguished Encoding Rules). Fleksibilitas ini memungkinkan Anda menangani data ASN.1 dari berbagai sumber tanpa memerlukan alat konversi format.",

    faq2Question: "Bagaimana cara menggunakan Parser ASN.1 untuk menganalisis sertifikat X.509?",
    faq2Answer: "Untuk menganalisis sertifikat X.509, cukup pilih 'PEM' sebagai format input, dan tempelkan sertifikat Anda (termasuk tanda BEGIN/END CERTIFICATE) ke area input. Parser akan secara otomatis mendekode struktur dan menampilkannya sebagai pohon interaktif, memungkinkan Anda memperluas node dan memeriksa field sertifikat tertentu seperti subjek, penerbit, masa berlaku, dan ekstensi.",

    faq3Question: "Bisakah saya mengekspor struktur ASN.1 yang telah di-parse untuk dokumentasi?",
    faq3Answer: "Ya, Anda dapat mengekspor struktur ASN.1 yang telah di-parse sebagai JSON dengan mengklik tombol \"Ekspor sebagai JSON\" di panel pengaturan. Fitur ini sangat berguna untuk mendokumentasikan struktur, berbagi dengan kolega, atau memproses lebih lanjut data terstruktur dalam aplikasi Anda sendiri.",

    faq4Question: "Apa perbedaan antara pengkodean ASN.1, DER dan BER?",
    faq4Answer: "ASN.1 (Abstract Syntax Notation One) adalah bahasa untuk mendefinisikan struktur data, sedangkan DER (Distinguished Encoding Rules) dan BER (Basic Encoding Rules) adalah aturan pengkodean spesifik yang menentukan bagaimana struktur ASN.1 dikonversi ke format biner. DER adalah subset dari BER yang memastikan setiap nilai ASN.1 hanya memiliki satu pengkodean, sehingga lebih disukai dalam aplikasi kriptografi. Parser kami terutama menangani struktur ASN.1 yang dikodekan DER, yang paling umum dalam aplikasi keamanan.",

    faq5Question: "Bagaimana Parser ASN.1 menangani Penanda Objek (OID)?",
    faq5Answer: "Parser Struktur ASN.1 secara otomatis mengenali Penanda Objek (OID) umum dan menampilkan nama yang mudah dipahami di samping nilai OID numerik. Misalnya, '1.2.840.113549.1.1.11' akan ditampilkan sebagai 'sha256WithRSAEncryption'. Fitur ini memudahkan pemahaman tujuan elemen berbeda dalam struktur kompleks seperti sertifikat X.509 dan pesan kriptografi.",

    // Bagian tutorial
    tutorialTitle: "Cara Menggunakan Parser Struktur ASN.1",

    step1Title: "Langkah 1: Pilih format input",
    step1Content: "Pertama, pilih format input yang sesuai untuk data ASN.1 Anda. Gunakan tombol radio di panel input untuk memilih dari opsi PEM, HEX, Base64 atau DER. Format yang Anda pilih menentukan bagaimana parser akan menafsirkan data input Anda.",

    step2Title: "Langkah 2: Masukkan atau unggah data ASN.1",
    step2Content: "Masukkan data yang dikodekan ASN.1 ke area teks, atau unggah file dengan mengklik area unggahan. Untuk format PEM, pastikan data Anda menyertakan tanda BEGIN/END yang benar. Untuk input heksadesimal, Anda dapat menggunakan berbagai pemisah (spasi, titik dua, dll) yang dapat dikonfigurasi di panel pengaturan.",
    step2Example: "-----BEGIN CERTIFICATE-----\nMIIDazCCAlOgAwIBAgIUXF3AmOAMqvdXdFLJV8C5c9K6cI8wDQYJKoZIhvcNAQEL\n...\n-----END CERTIFICATE-----",

    step3Title: "Langkah 3: Jelajahi struktur pohon ASN.1",
    step3Content: "Setelah data di-parse, struktur pohon ASN.1 akan ditampilkan di panel kiri bawah. Anda dapat memperluas dan menutup node dengan mengklik segitiga. Setiap node menampilkan jenis labelnya (seperti SEQUENCE, INTEGER, OBJECT IDENTIFIER) dan nilainya. Pewarnaan membantu membedakan berbagai jenis ASN.1.",

    step4Title: "Langkah 4: Periksa representasi heksadesimal",
    step4Content: "Jika opsi \"Tampilkan hex dump\" diaktifkan, panel kanan akan menampilkan hex dump dari data ASN.1. Arahkan mouse ke elemen dalam pohon akan menyorot byte yang sesuai dalam hex dump, membantu Anda memahami struktur biner yang dikodekan.",
    step4Example: "00000000 30 82 03 6a 30 82 02 52 a0 03 02 01 02 02 14 5c 0..j0..R........\\",

    step5Title: "Langkah 5: Konfigurasikan opsi tampilan",
    step5Content: "Gunakan panel pengaturan untuk menyesuaikan tampilan sesuai kebutuhan Anda. Opsi termasuk menampilkan/menyembunyikan hex dump, memotong nilai data besar untuk meningkatkan keterbacaan, memilih pemisah heksadesimal, dan mengaktifkan pewarnaan berdasarkan jenis. Anda juga dapat memperluas semua node sekaligus untuk mendapatkan tampilan lengkap struktur.",

    // Bagian sumber daya
    resourcesTitle: "Sumber Daya Tambahan",

    relatedToolsTitle: "Alat Terkait",
    relatedTool1: "Konverter Base64 - Enkode dan dekode data Base64",
    relatedTool2: "Konverter Base64 Hex - Konversi mudah antara format Base64 dan heksadesimal, dengan dukungan pemisah kustom dan huruf besar/kecil",
    relatedTool3: "Dekoder Sertifikat - Analisis mendetail sertifikat X.509",

    externalResourcesTitle: "Sumber Daya Eksternal",
    externalResource1: "Pengantar ASN.1 ITU-T - Dokumen resmi standar ASN.1",
    externalResource2: "RFC 5280 - Profil sertifikat dan CRL infrastruktur kunci publik X.509 internet"
}
