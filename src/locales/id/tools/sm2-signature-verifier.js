export default {
    name: "Tanda Tangan dan Verifikasi SM2",
    description: "Gunakan kunci privat SM2 untuk menandatangani data dan kunci publik untuk memverifikasi tanda tangan, mendukung berbagai algoritma hash",
    keyInput: "Masukan kunci",
    privateKey: "Kunci privat (untuk penandatanganan)",
    publicKey: "Kunci publik (untuk verifikasi)",
    privateKeyPlaceholder: "Masukkan kunci privat SM2 dalam format heksadesimal",
    publicKeyPlaceholder: "Masukkan kunci publik SM2 dalam format heksadesimal",
    generateKeyPair: "Buat pasangan kunci",
    clear: "Hapus",
    keyGenError: "Gagal membuat pasangan kunci",
    hashAlgorithm: "Algoritma hash",
    processMode: "Mode pemrosesan",
    originalData: "Data asli",
    preHashed: "Pra-hash",
    sign: "Tanda tangan",
    verify: "Verifikasi",
    dataToSign: "Data yang akan ditandatangani",
    dataToSignPlaceholder: "Masukkan teks atau data yang akan ditandatangani",
    preHashedDataToSign: "Nilai hash yang akan ditandatangani",
    preHashedDataToSignPlaceholder: "Masukkan nilai hash dalam format heksadesimal",
    dataToVerify: "Data yang akan diverifikasi",
    dataToVerifyPlaceholder: "Masukkan teks atau data yang akan diverifikasi",
    preHashedDataToVerify: "Nilai hash yang akan diverifikasi",
    preHashedDataToVerifyPlaceholder: "Masukkan nilai hash dalam format heksadesimal",
    signatureToVerify: "Tanda tangan yang akan diverifikasi",
    signatureToVerifyPlaceholder: "Masukkan tanda tangan yang akan diverifikasi",
    inputFormat: "Format masukan",
    outputFormat: "Format keluaran",
    signatureFormat: "Format tanda tangan",
    text: "Teks",
    hex: "Heksadesimal",
    base64: "Base64",
    signature: "Tanda tangan",
    copySignature: "Salin tanda tangan",
    signatureCopied: "Tanda tangan telah disalin ke clipboard",
    copyError: "Gagal menyalin ke clipboard",
    signError: "Gagal membuat tanda tangan",
    verifyError: "Gagal memverifikasi tanda tangan",
    invalidInputData: "Data masukan tidak valid",
    unsupportedInputFormat: "Format masukan tidak didukung",
    unsupportedHashAlgorithm: "Algoritma hash tidak didukung",
    waitingForVerification: "Masukkan data dan tanda tangan untuk verifikasi",
    verificationSuccess: "Verifikasi berhasil! Tanda tangan valid.",
    verificationFailed: "Verifikasi gagal! Tanda tangan tidak valid.",
    preHashedMustBeHex: "Masukan pra-hash harus dalam format heksadesimal",
    idParameter: "Parameter ID",
    idValue: "Nilai ID",
    idPlaceholder: "Masukkan nilai ID (default: 1234567812345678)",
    idDescription: "Algoritma SM2 menggunakan nilai ID dalam proses pembuatan dan verifikasi tanda tangan. Nilai default adalah 1234567812345678.",
    signatureComponents: "Komponen tanda tangan (nilai R dan S)",
    invalidKeyFormat: "Format kunci tidak valid",
    invalidSignatureFormat: "Format tanda tangan tidak valid",
    formatError: "Kesalahan format",
    signatureHashMismatch: "Hash tanda tangan tidak cocok - pastikan data dan algoritma hash sama dengan yang digunakan saat penandatanganan",
    copy: "Salin",
    export: "Ekspor",
    signatureExported: "Tanda tangan telah diekspor ke file",
    exportError: "Gagal mengekspor tanda tangan",
    privateKeyType: "Kunci privat",
    publicKeyType: "Kunci publik",
    signatureType: "Tanda tangan",
    derEncodingFailed: "Gagal mengkodekan tanda tangan ke format DER",
    invalidIdFormat: "Format ID tidak valid",
    invalidDerFormat: "Format DER tidak valid",
    invalidSignatureLength: "Panjang tanda tangan tidak sesuai untuk pengkodean DER",
    zValue: "Nilai hash pra-pemrosesan",
    zValueFormula: "Rumus perhitungan nilai Z",
    showDetails: "Tampilkan detail",
    hideDetails: "Sembunyikan detail",
    zCalculationFailed: "Gagal menghitung nilai Z",
    invalidPublicKeyFormat: "Format kunci publik tidak valid",
    importPfx: "Impor file PFX/P12",
    enterPin: "Masukkan PIN/kata sandi",
    pinPlaceholder: "Masukkan kata sandi untuk file PFX",
    cancel: "Batal",
    confirm: "Konfirmasi",
    fileReadError: "Kesalahan membaca file",
    pfxImportSuccess: "Berhasil mengimpor file PFX",
    pfxImportError: "Gagal mengimpor file PFX",
    noPrivateKeyFound: "Tidak menemukan kunci privat dalam file PFX",
    invalidPrivateKeyFormat: "Format kunci privat dalam file PFX tidak valid",
    privateKeyExtractionFailed: "Gagal mengekstrak kunci privat",
    pkcs8ParseError: "Kesalahan parsing struktur PKCS#8",
    rsaKeyNotSupported: "Mendeteksi kunci RSA. Alat ini hanya mendukung kunci SM2.",
    rsaCertNotSupported: "Mendeteksi sertifikat RSA. Alat ini hanya mendukung sertifikat SM2.",
    failedToDerivePublicKey: "Gagal menurunkan kunci publik dari kunci privat",
    article: {
        title: "Alat Tanda Tangan Digital SM2 - Pembuatan dan Verifikasi Tanda Tangan Online yang Aman",
        introduction: {
            title: "Apa itu Tanda Tangan Digital SM2?",
            p1: "Tanda tangan digital SM2 adalah bagian dari standar kriptografi komersial China, sebuah algoritma kriptografi. <strong>Alat verifikasi tanda tangan digital SM2</strong> kami menyediakan antarmuka yang ramah pengguna untuk membuat dan memverifikasi tanda tangan digital menggunakan algoritma kurva eliptik SM2, yang memberikan keamanan setara dengan RSA 256-bit dengan ukuran kunci yang lebih kecil.",
            p2: "Alat tanda tangan SM2 online ini dirancang untuk mengatasi tantangan menandatangani dan memverifikasi data digital dengan aman tanpa perlu menginstal perangkat lunak khusus. Baik Anda seorang pengembang yang menerapkan verifikasi tanda tangan SM2 dalam aplikasi, profesional keamanan yang memverifikasi sertifikat digital, atau perusahaan yang perlu mematuhi standar kriptografi China, alat kami menyediakan solusi yang efisien.",
            p3: "Dengan meningkatnya adopsi standar enkripsi SM2 secara global, terutama di wilayah yang perlu mematuhi peraturan China, memiliki <strong>pembuat dan verifikator tanda tangan digital SM2</strong> yang andal sangat penting bagi bisnis internasional dan profesional keamanan."
        },
        applications: {
            title: "Skenario Aplikasi Praktis Tanda Tangan SM2",
            p1: "Verifikasi tanda tangan SM2 memiliki banyak aplikasi praktis di berbagai industri, terutama di bidang di mana integritas data dan autentikasi sangat penting:",
            scenario1: {
                title: "Fintech dan Perbankan",
                description: "Dalam layanan keuangan, <strong>verifikasi tanda tangan SM2 untuk perbankan online</strong> membantu mengamankan transaksi dan mempertahankan kepatuhan. Bank yang beroperasi di wilayah yang memerlukan kepatuhan dengan standar kriptografi SM menggunakan tanda tangan SM2 untuk mengautentikasi permintaan transaksi, memverifikasi identitas pelanggan, dan memastikan keamanan komunikasi antarbank. Kemampuan untuk memverifikasi tanda tangan SM2 dengan cepat memastikan dokumen keuangan tidak dirusak dan berasal dari sumber yang sah."
            },
            scenario2: {
                title: "Pemerintah dan Sektor Publik",
                description: "Lembaga pemerintah yang menerapkan <strong>kode SM2 yang aman untuk dokumen resmi</strong> mengandalkan tanda tangan digital untuk memverifikasi keaslian catatan elektronik. Alat kami mendukung verifikasi tanda tangan pada sertifikat digital, komunikasi resmi, dan dokumen hukum. Ini sangat berharga bagi organisasi internasional yang berurusan dengan entitas pemerintah China yang memerlukan kepatuhan dengan standar kriptografi nasional."
            },
            scenario3: {
                title: "E-commerce Lintas Batas dan Perdagangan Internasional",
                description: "Perusahaan yang terlibat dalam <strong>verifikasi tanda tangan digital SM2 untuk perdagangan lintas batas</strong> menggunakan tanda tangan kriptografi untuk melindungi kontrak, memverifikasi daftar pengiriman, dan mengautentikasi dokumen bea cukai. Alat kami memungkinkan bisnis untuk dengan mudah menerapkan proses verifikasi tanda tangan SM2 tanpa pengetahuan khusus tentang prinsip-prinsip kriptografi yang mendasarinya, memfasilitasi bisnis internasional yang lebih lancar sambil mempertahankan standar keamanan yang tinggi."
            }
        },
        tutorial: {
            title: "Cara Menggunakan Alat Tanda Tangan SM2",
            intro: "Ikuti panduan langkah demi langkah ini untuk membuat dan memverifikasi tanda tangan digital SM2 menggunakan alat online kami:",
            step1: {
                title: "Langkah 1: Manajemen Kunci",
                description: "Pertama, masukkan kunci privat SM2 Anda (untuk penandatanganan) dan kunci publik (untuk verifikasi). Anda dapat menempelkan kunci yang ada dalam berbagai format (HEX, PEM, Base64 atau DER), atau menghasilkan pasangan kunci baru langsung dalam alat dengan mengklik tombol \"Buat pasangan kunci\". Untuk keamanan, semua operasi kripto dilakukan secara lokal di browser Anda - kunci Anda tidak pernah dikirim ke server kami."
            },
            step2: {
                title: "Langkah 2: Konfigurasi Parameter ID",
                description: "Masukkan parameter ID, yang merupakan pengidentifikasi unik yang digunakan dalam algoritma tanda tangan SM2. Nilai default adalah \"1234567812345678\", tetapi Anda dapat menyesuaikannya sesuai kebutuhan spesifik. Anda dapat memasukkan ID dalam format teks, HEX atau Base64 sesuai preferensi Anda."
            },
            step3: {
                title: "Langkah 3: Buat Tanda Tangan",
                description: "Di bagian penandatanganan, masukkan data yang akan ditandatangani dan pilih format masukan yang sesuai (teks, HEX atau Base64). Klik tombol \"Tanda tangan\" untuk menghasilkan tanda tangan. Alat akan menampilkan tanda tangan lengkap dan komponennya (nilai R dan S). Anda dapat memilih format keluaran yang diinginkan (DER, HEX, Base64 atau PEM), dan dengan mudah menyalin atau mengekspor tanda tangan."
            },
            step4: {
                title: "Langkah 4: Verifikasi Tanda Tangan",
                description: "Untuk memverifikasi tanda tangan, masukkan data asli dan tanda tangan yang akan diverifikasi di bagian verifikasi. Pilih format yang sesuai untuk data dan tanda tangan, lalu klik \"Verifikasi\". Alat akan segera memeriksa apakah tanda tangan valid untuk data dan kunci publik yang diberikan, menampilkan pesan sukses atau gagal yang jelas, serta informasi kesalahan terperinci yang berlaku."
            }
        },
        specifications: {
            title: "Spesifikasi Teknis",
            p1: "Alat tanda tangan SM2 kami mengimplementasikan algoritma tanda tangan digital kurva eliptik SM2 yang didefinisikan dalam standar GM/T 0003-2012 yang diterbitkan oleh Administrasi Kripto Nasional China. Alat ini sepenuhnya mematuhi standar ini sambil menyediakan fitur tambahan untuk kemudahan penggunaan.",
            p2: "Fitur teknis utama meliputi:",
            feature1: "Penggunaan tetap algoritma hash SM3 (256-bit) seperti yang disyaratkan oleh standar",
            feature2: "Dukungan untuk parameter ID kustom dalam berbagai format masukan (teks/HEX/Base64)",
            feature3: "Berbagai format keluaran tanda tangan (DER/HEX/Base64/PEM) untuk kompatibilitas dengan berbagai sistem",
            feature4: "Tampilan lengkap komponen tanda tangan (nilai R dan S) untuk verifikasi teknis",
            feature5: "Dukungan untuk berbagai format kunci (PEM/HEX/Base64/DER) untuk manajemen kunci yang fleksibel",
            feature6: "Laporan kesalahan terperinci untuk pemecahan masalah verifikasi"
        },
        faq: {
            title: "Pertanyaan yang Sering Diajukan",
            q1: "Apa perbedaan tanda tangan SM2 dengan algoritma tanda tangan digital lainnya?",
            a1: "Tanda tangan digital SM2 berbasis kriptografi kurva eliptik (ECC) dan merupakan bagian dari standar kriptografi komersial China. Dibandingkan dengan tanda tangan RSA, <strong>enkripsi tanda tangan SM2</strong> memberikan keamanan yang setara dengan ukuran kunci yang lebih kecil, membuatnya lebih efisien. Tidak seperti standar internasional seperti ECDSA, SM2 menggunakan kurva yang berbeda dan memasukkan identitas penandatangan (ID) ke dalam proses pembuatan tanda tangan, menambahkan lapisan keamanan tambahan. SM2 sangat penting untuk aplikasi yang harus mematuhi peraturan China atau beroperasi dalam kerangka kerja keamanan siber China.",

            q2: "Apakah alat tanda tangan SM2 aman untuk data sensitif?",
            a2: "Ya, <strong>alat verifikasi tanda tangan SM2 yang aman</strong> kami menggunakan JavaScript sisi klien yang menjalankan semua operasi kripto langsung di browser Anda. Kunci privat dan data sensitif Anda tidak pernah meninggalkan perangkat Anda atau dikirim ke server kami. Implementasi ini mengikuti standar tanda tangan digital SM2 (GM/T 0003-2012) dan menggunakan SM3 untuk hashing seperti yang disyaratkan oleh spesifikasi. Untuk aplikasi perusahaan yang sangat sensitif, kami merekomendasikan tinjauan tambahan sebelum menggunakan alat online apa pun (termasuk alat kami) dalam lingkungan produksi.",

            q3: "Mengapa parameter ID penting dalam tanda tangan SM2?",
            a3: "Parameter ID adalah fitur unik dari <strong>algoritma tanda tangan digital SM2 dengan ID kustom</strong> yang membedakannya dari skema tanda tangan berbasis ECC lainnya. Ini berfungsi sebagai masukan tambahan untuk proses pembuatan tanda tangan, pada dasarnya mengikat identitas penandatangan ke tanda tangan. Ini dapat mencegah beberapa jenis serangan dan menambah lapisan autentikasi. Dalam sebagian besar implementasi, termasuk alat kami, nilai default '1234567812345678' digunakan ketika ID spesifik tidak diperlukan, tetapi organisasi sering menggunakan ID kustom yang terkait dengan identitas pengguna atau pengidentifikasi sistem untuk meningkatkan keamanan dan kemampuan pelacakan.",

            q4: "Bisakah saya menggunakan tanda tangan SM2 untuk bisnis internasional di luar China?",
            a4: "Tentu saja. Meskipun SM2 berasal dari bagian standar kriptografi China, <strong>adopsi internasional tanda tangan SM2</strong> sedang berkembang, terutama untuk bisnis yang memiliki operasi di China atau kemitraan dengan entitas China. Alat kami memfasilitasi operasi kripto lintas batas dengan mendukung berbagai format masukan dan keluaran yang kompatibel dengan berbagai sistem internasional. Untuk bisnis yang terlibat dalam perdagangan internasional, menggunakan tanda tangan SM2 dapat membantu memastikan kepatuhan dengan persyaratan peraturan China sambil mempertahankan keamanan kripto yang kuat sesuai dengan standar global.",

            q5: "Apa yang harus saya lakukan jika verifikasi tanda tangan gagal?",
            a5: "Jika Anda mengalami <strong>kesalahan verifikasi tanda tangan SM2</strong>, periksa masalah umum berikut: 1) Pastikan Anda menggunakan kunci publik yang benar yang sesuai dengan kunci privat yang digunakan untuk penandatanganan; 2) Verifikasi bahwa parameter ID cocok dengan yang digunakan selama pembuatan tanda tangan; 3) Konfirmasi bahwa data yang diverifikasi persis sama dengan data yang ditandatangani awalnya, termasuk formatnya (teks/HEX/Base64); 4) Periksa apakah format tanda tangan (DER/HEX/Base64/PEM) dipilih dengan benar. Alat kami menyediakan pesan kesalahan terperinci untuk membantu mendiagnosis masalah spesifik. Untuk masalah yang terus berlanjut, Anda mungkin perlu membuat ulang tanda tangan atau memeriksa apakah pasangan kunci valid."
        },
        related: {
            title: "Alat Kriptografi Terkait",
            description: "Tingkatkan perangkat keamanan Anda dengan utilitas kriptografi pelengkap ini:",
            tool1: "<a href='https://www.ufreetools.com/tool/rsa-signature-verifier' target='_blank'>Verifikasi Tanda Tangan RSA</a> - Buat dan verifikasi tanda tangan digital menggunakan algoritma RSA yang banyak diadopsi.",
            tool2: "<a href='https://www.ufreetools.com/tool/hash-calculator' target='_blank'>Kalkulator Hash</a> - Hasilkan nilai hash yang aman menggunakan berbagai algoritma termasuk SM3.",
            tool3: "<a href='https://www.ufreetools.com/tool/x509-certificate-decoder' target='_blank'>Dekoder Sertifikat</a> - Dekode dan periksa sertifikat X.509, termasuk yang menggunakan kriptografi SM2."
        }
    },
}