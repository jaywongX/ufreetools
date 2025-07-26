export default {
  title: 'Parser Sertifikat X.509: Analisis dan Validasi Sertifikat SSL/TLS',
  introduction: {
    title: 'Apa itu Parser Sertifikat X.509?',
    p1: '<strong>Parser Sertifikat X.509</strong> adalah alat canggih yang membantu profesional keamanan, pengembang web, dan admin IT menganalisis sertifikat digital yang digunakan dalam protokol SSL/TLS. Alat online gratis kami untuk parsing sertifikat X.509 memberikan analisis komprehensif terhadap komponen sertifikat, status validitas, dan fitur keamanan tanpa perlu menginstal software apa pun.',
    p2: 'Sertifikat digital sangat penting untuk komunikasi jaringan yang aman, memungkinkan koneksi tepercaya antara browser dan server. Namun, memecahkan masalah sertifikat membutuhkan pemahaman tentang struktur kompleks dan data terenkodenya. Parser Sertifikat X.509 menyederhanakan proses ini dengan mengurai data mentah sertifikat menjadi informasi yang dapat dibaca manusia, memungkinkan identifikasi cepat masalah dan verifikasi keaslian sertifikat.'
  },
  useCases: {
    title: 'Kasus Penggunaan Umum untuk Parsing Sertifikat',
    case1: '<strong>Validasi Sertifikat SSL/TLS</strong>: Verifikasi keaslian dan integritas sertifikat website sebelum deployment.',
    case2: '<strong>Pemantauan Kedaluwarsa Sertifikat</strong>: Periksa masa berlaku dan tanggal kedaluwarsa untuk mencegah gangguan layanan tak terduga.',
    case3: '<strong>Validasi Rantai Sertifikat</strong>: Periksa rantai sertifikat untuk memastikan hubungan kepercayaan yang benar antara sertifikat.',
    case4: '<strong>Pemecahan Masalah Konfigurasi Sertifikat</strong>: Identifikasi kesalahan konfigurasi dalam sertifikat yang menyebabkan peringatan browser atau masalah koneksi.',
    case5: '<strong>Validasi Tanda Tangan Digital</strong>: Periksa algoritma tanda tangan sertifikat dan parameter kunci publik untuk penilaian keamanan.'
  },
  faq: {
    title: 'Pertanyaan Umum tentang Sertifikat X.509',
    q1: 'Informasi apa yang bisa saya ekstrak dari sertifikat X.509?',
    a1: 'Dengan <strong>Parser Sertifikat X.509</strong> kami, Anda dapat mengekstrak informasi komprehensif termasuk detail penerbit, informasi subjek, masa berlaku, parameter kunci publik, ekstensi (seperti Nama Alternatif Subjek), algoritma tanda tangan digital, dan fingerprint sertifikat. Alat ini juga menyediakan indikator visual kesehatan sertifikat dan status kedaluwarsa, memudahkan identifikasi sertifikat yang perlu diperbarui.',
    q2: 'Bagaimana cara mengetahui apakah sertifikat saya dipercaya oleh browser?',
    a2: 'Browser umumnya mempercayai sertifikat jika diterbitkan oleh Otoritas Sertifikat (CA) yang diakui dan membentuk rantai kepercayaan yang valid. Parser kami membantu Anda memvisualisasikan rantai sertifikat dan memvalidasi validitas setiap sertifikat. Indikator kunci termasuk penerbit sertifikat (harus CA tepercaya), tanggal valid (tidak kedaluwarsa), kendala dasar yang benar (untuk sertifikat perantara), dan ekstensi penggunaan kunci yang tepat. Kepercayaan browser juga bergantung pada sertifikat yang tidak dicabut, yang dapat diperiksa melalui informasi OCSP atau CRL dalam sertifikat.',
    q3: 'Apa perbedaan antara format sertifikat PEM dan DER?',
    a3: 'PEM (Privacy Enhanced Mail) dan DER (Distinguished Encoding Rules) adalah dua format umum untuk sertifikat X.509. <strong>Format PEM</strong> dikodekan Base64, dimulai dengan "-----BEGIN CERTIFICATE-----", dan dapat dibaca manusia. Ini biasa digunakan di server web dan email. <strong>Format DER</strong> adalah pengkodean biner, tidak dapat dibaca manusia, tetapi lebih ringkas. Parser sertifikat kami secara otomatis mendukung kedua format ini, mendeteksi dan memparsing format yang sesuai tanpa perlu pemilihan manual.',
    q4: 'Bagaimana cara memeriksa apakah sertifikat saya mendukung fitur TLS tertentu?',
    a4: 'Untuk memeriksa dukungan fitur TLS dalam sertifikat, gunakan parser kami untuk memeriksa ekstensi <strong>Penggunaan Kunci Extended</strong> dan <strong>Penggunaan Kunci</strong>. Untuk autentikasi server (web server), cari nilai "Autentikasi Server" (1.3.6.1.5.5.7.3.1) dalam Penggunaan Kunci Extended. Ekstensi Penggunaan Kunci menunjukkan operasi yang diizinkan, seperti tanda tangan digital atau enkripsi kunci. Selain itu, periksa algoritma tanda tangan untuk memastikan penggunaan algoritma modern yang aman (seperti SHA-256 dengan RSA atau ECDSA), bukan algoritma usang (seperti SHA-1 atau MD5).',
    q5: 'Apa yang harus saya lakukan jika sertifikat saya akan segera kedaluwarsa?',
    a5: 'Jika <strong>Parser Sertifikat</strong> kami menunjukkan sertifikat Anda akan segera kedaluwarsa (biasanya dalam 30 hari), Anda harus segera memperbaruinya melalui penyedia sertifikat atau Otoritas Sertifikat Anda. Proses pembaruan biasanya mencakup: 1) Membuat Permintaan Tanda Tangan Sertifikat (CSR) baru, 2) Mengirimkannya ke CA Anda, 3) Menyelesaikan persyaratan validasi, dan 4) Menginstal sertifikat baru di server. Kami merekomendasikan memulai proses ini setidaknya 2-4 minggu sebelum kedaluwarsa untuk menghindari gangguan layanan atau peringatan keamanan pengguna.'
  },
  tutorial: {
    title: 'Cara Menggunakan Parser Sertifikat X.509',
    step1: {
      title: 'Unggah atau Tempel Sertifikat Anda',
      content: 'Pertama, unggah file sertifikat (.crt, .cer, .pem, atau .der) melalui pengunggah file, atau tempel teks sertifikat berformat PEM langsung di kotak input. Alat kami mendukung fungsi seret dan lepas untuk memudahkan pengunggahan file. Jika Anda tidak memiliki sertifikat untuk dianalisis, Anda dapat mengklik tombol "Muat Contoh" untuk melihat bagaimana alat menangani sertifikat demo.'
    },
    step2: {
      title: 'Parse Sertifikat',
      content: 'Setelah memuat sertifikat, klik tombol "Parse Sertifikat". Alat kami akan secara otomatis mendeteksi format (PEM atau DER) dan memparsing data sertifikat. Pemrosesan dilakukan sepenuhnya di browser Anda, memastikan data sertifikat Anda tidak meninggalkan perangkat - menjadikannya pilihan aman untuk menganalisis sertifikat sensitif.'
    },
    step3: {
      title: 'Analisis Detail Sertifikat',
      content: 'Setelah parsing, alat akan menampilkan informasi sertifikat komprehensif dalam bentuk tab yang mudah dinavigasi. Tab "Info Dasar" menunjukkan detail inti seperti masa berlaku, nomor seri, dan algoritma tanda tangan. Indikator visual dengan jelas menunjukkan apakah sertifikat valid, akan segera kedaluwarsa, atau sudah kedaluwarsa. Anda dapat menjelajahi informasi lebih detail di tab khusus, termasuk subjek dan penerbit, ekstensi, kunci publik, dll.'
    },
    step4: {
      title: 'Ekspor dan Unduh Laporan',
      content: 'Untuk menyimpan atau berbagi analisis sertifikat Anda, gunakan fungsi ekspor di bagian hasil. Anda dapat mengunduh laporan komprehensif dalam berbagai format (PDF, TXT, HTML, atau JSON), atau menyalin bagian tertentu ke clipboard. Laporan ini sangat berharga untuk dokumentasi, tujuan kepatuhan, atau berbagi dengan anggota tim selama pemecahan masalah.'
    }
  },
  resources: {
    title: 'Sumber Daya Tambahan',
    intro: 'Perluas pengetahuan Anda tentang sertifikat X.509 dan topik keamanan terkait dengan sumber daya berharga ini:',
    relatedTools: 'Alat Keamanan Terkait',
    tool1: 'Pembuat Hash - Buat hash kriptografi untuk validasi data',
    tool2: 'Encoder/Decoder Base64 - Konversi antara biner dan format Base64',
    tool3: 'Decoder JWT - Analisis JSON Web Token yang digunakan untuk autentikasi',
    externalLinks: 'Referensi Eksternal',
    external1: 'IETF RFC 5280 - Sertifikat Infrastruktur Kunci Publik X.509 Internet',
    external2: 'Wikipedia - Ikhtisar Standar Sertifikat X.509',
    external3: 'SSL.com - Apa itu Sertifikat X.509?'
  },
  conclusion: {
    title: 'Kesimpulan',
    content: '<strong>Parser Sertifikat X.509</strong> adalah alat penting bagi siapa pun yang bekerja dengan sertifikat digital dan komunikasi aman. Dengan memberikan informasi yang jelas dan terperinci tentang struktur dan validitas sertifikat, alat kami membantu Anda memastikan implementasi SSL/TLS yang aman dan bebas kesalahan. Baik Anda seorang profesional keamanan yang melakukan audit, pengembang web yang memecahkan masalah HTTPS, atau admin IT yang mengelola deployment sertifikat, parser ini menyederhanakan analisis sertifikat dan meningkatkan praktik keamanan Anda.'
  }
}
