export default {
  name: 'Alat Debug JWT',
  description: 'Alat online untuk mem-parsing, memvalidasi, dan men-debug token JWT',
  sections: {
    encoded: 'JWT Terenkripsi',
    decoded: 'JWT Terdekode',
    header: 'Header',
    payload: 'Payload',
    signature: 'Signature',
    verification: 'Verifikasi'
  },
  actions: {
    decode: 'Dekode',
    verify: 'Verifikasi Signature',
    copy: 'Salin',
    share: 'Bagikan Token',
    generateToken: 'Buat Token',
    generateRandomToken: 'Token Acak',
    clear: 'Hapus',
    generateRandomPayload: 'Buat Payload Acak',
    generateRandomKey: 'Buat Kunci Acak',
    generateKeyPair: 'Buat Pasangan Kunci'
  },
  messages: {
    invalidToken: 'Format JWT tidak valid',
    copied: 'Tersalin ke clipboard!',
    copyFailed: 'Gagal menyalin, silakan salin manual',
    verificationSuccess: 'Verifikasi signature berhasil',
    verificationFailed: 'Verifikasi signature gagal',
    keyGenerated: 'Pasangan kunci berhasil dibuat',
    keyGenerationFailed: 'Gagal membuat pasangan kunci',
    tokenGenerated: 'Token berhasil dibuat',
    tokenGenerationFailed: 'Gagal membuat token',
    randomTokenGenerated: 'Token acak berhasil dibuat dan diparsing',
    certUploadSuccess: 'Sertifikat berhasil diunggah',
    certFormatInvalid: 'Format sertifikat tidak valid',
    certReadFailed: 'Gagal membaca sertifikat',
    tokenFormatError: 'Format token tidak valid - JWT harus terdiri dari 3 bagian yang dipisahkan titik',
    tokenHeaderMissingAlg: 'Header token tidak memiliki field algoritma (alg)',
    tokenHeaderInvalid: 'Format header token tidak valid',
    tokenVerificationFailed: 'Verifikasi format token gagal',
    tokenExpired: 'Token telah kadaluarsa. Waktu kadaluarsa: {time}',
    tokenNotEffective: 'Token belum berlaku. Waktu berlaku: {time}',
    tokenIssuedInFuture: 'Waktu penerbitan token tidak valid - diterbitkan di masa depan. Waktu penerbitan: {time}',
    algorithmNotSupported: 'Algoritma tidak didukung',
    randomSecretGenerated: 'Kunci acak berhasil dibuat',
    randomSecretGenerationFailed: 'Gagal membuat kunci acak',
    randomPayloadGenerated: 'Payload acak berhasil dibuat',
    randomPayloadGenerationFailed: 'Gagal membuat payload acak',
    contentCleared: 'Semua konten telah dihapus',
    tokenDecodeSuccess: 'Token berhasil diparsing',
    tokenDecodeFailed: 'Gagal mem-parsing token',
    pleaseInputKey: 'Silakan masukkan kunci',
    pleaseGenerateKeyPair: 'Silakan buat pasangan kunci {type} terlebih dahulu',
    pleaseInputVerificationKey: 'Silakan masukkan kunci verifikasi',
    pleaseInputPublicKey: 'Silakan masukkan public key verifikasi',
    pleaseInputToken: 'Silakan masukkan token yang akan diverifikasi',
    payloadFormatError: 'Format payload tidak valid - periksa format JSON',
    invalidTimestamp: 'Timestamp tidak valid'
  },
  placeholders: {
    secretKey: 'Masukkan kunci rahasia',
    privateKey: 'Masukkan atau buat private key',
    publicKey: 'Masukkan atau buat public key',
    payload: 'Masukkan payload dalam format JSON',
    token: 'Masukkan atau buat token JWT',
    verificationSecretKey: 'Masukkan kunci verifikasi',
    verificationPublicKey: 'Masukkan public key verifikasi'
  },
  labels: {
    algorithm: 'Algoritma',
    secretKey: 'Kunci Rahasia',
    privateKey: 'Private Key',
    publicKey: 'Public Key',
    certificate: 'Sertifikat Digital (opsional)',
    payload: 'Payload',
    token: 'Token',
    verificationPublicKey: 'Public Key Verifikasi',
    tokenResult: 'Hasil Parsing Token',
    verifyToken: 'Verifikasi Token',
    tokenDecoded: 'Token terdeteksi menggunakan algoritma {alg}',
    timestamp: 'Parsing Timestamp',
    issuedAt: 'Waktu Penerbitan (iat)',
    expiration: 'Waktu Kadaluarsa (exp)',
    notBefore: 'Waktu Berlaku (nbf)',
    tokenFormat: 'Panduan Format',
    tokenFormatDesc: 'Hasil parsing akan ditampilkan di sini setelah memasukkan atau membuat token JWT',
    uploadCert: 'Seret dan lepas file sertifikat atau klik untuk memilih',
    certName: 'Nama Sertifikat',
    sm3Fingerprint: 'Fingerprint SM3 (x5t#sm3)',
    certUploadNote: 'Setelah mengunggah sertifikat, header JWT akan menambahkan field "x5t#sm3"',
    secondsTimestamp: 'Timestamp (detik)',
    millisecondsTimestamp: 'Timestamp (milidetik)'
  },
  buttons: {
    cancel: 'Batal',
    verify: 'Verifikasi',
    clearCert: 'Hapus',
    generateToken: 'Buat Token',
    decodeToken: 'Parsing Token',
    verifyToken: 'Verifikasi Token',
    close: 'Tutup'
  },
  verification: {
    success: 'Verifikasi Berhasil',
    failure: 'Verifikasi Gagal',
    validMessage: 'Verifikasi signature token berhasil - signature valid.',
    invalidMessage: 'Verifikasi signature token gagal - signature tidak valid.'
  },
  errors: {
    noToken: 'Silakan masukkan token yang akan diverifikasi',
    invalidToken: 'Format token tidak valid',
    noSecretKey: 'Silakan berikan kunci verifikasi',
    noPublicKey: 'Silakan berikan public key verifikasi',
    invalidSignature: 'Signature tidak valid',
    verificationFailed: 'Verifikasi token gagal'
  },
  article: {
    title: "Alat Debug JWT: Mem-parsing, Memvalidasi, dan Men-debug JSON Web Tokens",
    features: {
      title: "Memahami Debugging JWT",
      description: "<strong>Alat Debug JWT</strong> ini dirancang khusus untuk pengembang dan profesional keamanan sebagai <strong>alat analisis token</strong> untuk memeriksa, memvalidasi, dan memecahkan masalah JSON Web Tokens (JWT). <strong>Dekoder JWT online</strong> ini memungkinkan Anda menempelkan JWT apa pun dan langsung melihat komponen header, payload, dan signature yang sudah didekode dalam format yang mudah dibaca.<br><br>Selain <strong>dekoding token</strong> sederhana, alat ini juga menyediakan fungsi validasi komprehensif untuk memverifikasi keabsahan signature token menggunakan kunci atau public key yang sesuai. <strong>Alat validasi JWT</strong> ini mendukung semua algoritma JWT standar termasuk HS256, RS256, ES256, dan lainnya, memastikan kompatibilitas dengan sistem otentikasi modern. Bagi pengembang yang membangun atau merawat aplikasi berbasis otentikasi token, <strong>utilitas debug JWT</strong> ini memberikan wawasan penting tentang struktur token, status kadaluarsa, dan klaim keamanan.",
      useCases: {
        title: "Skenario Penggunaan Praktis Debugging JWT",
        items: [
          "<strong>Pemecahan masalah otentikasi API</strong>: Saat panggilan API gagal karena error otentikasi, pengembang dapat menggunakan <strong>alat validasi JWT</strong> untuk memeriksa token dan mengidentifikasi masalah seperti token kadaluarsa, signature tidak valid, atau klaim yang salah",
          "<strong>Integrasi penyedia identitas</strong>: Dalam proses integrasi dengan layanan OAuth atau OpenID Connect, <strong>pemeriksa token</strong> membantu memverifikasi apakah token identitas berisi klaim yang diharapkan dan ditandatangani dengan benar",
          "<strong>Audit keamanan</strong>: Profesional keamanan dapat memeriksa <strong>token otentikasi</strong> untuk memastikan mereka berisi izin yang sesuai, waktu kadaluarsa yang wajar, dan mengikuti praktik keamanan terbaik",
          "<strong>Pembuatan JWT kustom</strong>: Saat mengimplementasikan sistem otentikasi kustom, pengembang dapat menggunakan alat ini untuk membuat dan menguji <strong>token JWT terenkripsi</strong> dengan klaim dan algoritma signature tertentu",
          "<strong>Debugging bearer token</strong>: Pengembang frontend yang menggunakan <strong>otentikasi bearer</strong> dapat memverifikasi apakah token yang digunakan di header aplikasi diformat dengan benar dan berisi data yang diperlukan",
          "<strong>Otentikasi microservice</strong>: Tim yang membangun arsitektur microservice dapat memverifikasi apakah <strong>token layanan</strong> meneruskan informasi otorisasi yang benar antar layanan dan mempertahankan batas keamanan yang tepat"
        ]
      }
    },
    faq: {
      title: "Pertanyaan Umum tentang Debugging JWT",
      items: [
        {
          question: "Aman kah menempelkan JWT saya ke debugger online ini?",
          answer: "Ya, debugger JWT kami dirancang dengan mempertimbangkan keamanan. Semua pemrosesan token dilakukan sepenuhnya di dalam browser Anda menggunakan JavaScript sisi klien, artinya token Anda tidak pernah dikirim ke server mana pun untuk didekode atau divalidasi. Dekoder JWT tidak menyimpan token, kunci, atau data payload Anda dengan cara apa pun. Namun, sebagai praktik keamanan terbaik, kami menyarankan untuk hanya menggunakan token pengujian, bukan token produksi yang berisi informasi sensitif. Jika Anda menangani sistem otentikasi yang sangat sensitif, pertimbangkan untuk menggunakan alat debug JWT lokal di lingkungan pengembangan yang aman daripada layanan validasi token online apa pun."
        },
        {
          question: "Apa perbedaan antara header, payload, dan signature dalam JWT?",
          answer: "JSON Web Token terdiri dari tiga bagian berbeda yang dipisahkan oleh titik: header, payload, dan signature. Header biasanya berisi tipe token ('JWT') dan algoritma signature yang digunakan (seperti 'HS256' atau 'RS256'). Payload berisi klaim atau pernyataan tentang entitas (biasanya pengguna) dan data tambahan. Klaim umum termasuk ID pengguna, waktu kadaluarsa, dan penerbit. Signature dibuat dengan menggunakan algoritma yang ditentukan di header untuk menggabungkan header dan payload yang dienkode dengan kunci. Signature ini memverifikasi bahwa pesan tidak diubah dan, dengan beberapa algoritma, dapat memverifikasi identitas pengirim. Parser token kami menampilkan ketiga bagian dengan jelas, membantu Anda memahami dan men-debug token otentikasi Anda."
        },
        {
          question: "Bagaimana cara memverifikasi apakah signature JWT saya valid?",
          answer: "Untuk memverifikasi signature JWT menggunakan alat validasi kami, masukkan token Anda di field input dan berikan kunci atau public key yang sesuai (tergantung pada algoritma yang digunakan). Untuk algoritma berbasis HMAC seperti HS256, Anda memerlukan kunci yang sama yang digunakan untuk membuat token. Untuk algoritma RSA atau ECDSA seperti RS256 atau ES256, Anda memerlukan public key yang sesuai dengan private key yang digunakan untuk menandatangani. Kemudian, debugger JWT akan menghitung signature berdasarkan header dan payload menggunakan kunci yang Anda berikan dan membandingkannya dengan signature dalam token. Jika cocok, signature valid, mengonfirmasi bahwa token tidak dirusak dan memang ditandatangani oleh pihak tepercaya yang memiliki private key atau kunci yang benar."
        },
        {
          question: "Mengapa validasi JWT bisa gagal meskipun menggunakan kunci yang benar?",
          answer: "Ada beberapa alasan mengapa validasi JWT mungkin gagal di parser token kami meskipun menggunakan kunci yang benar. Masalah umum termasuk: token kadaluarsa (periksa klaim 'exp' di payload), token belum berlaku (periksa klaim 'nbf'), menggunakan algoritma yang salah (pastikan algoritma yang ditentukan di header cocok dengan algoritma yang Anda gunakan untuk verifikasi), token dirusak (bahkan perubahan kecil pada header atau payload akan menyebabkan verifikasi signature gagal), format kunci tidak benar (pastikan kunci Anda diformat dengan benar, terutama untuk kunci RSA dan ECDSA), atau masalah pengkodean (jika kunci Anda berisi karakter khusus). Debugger JWT memberikan pesan error terperinci untuk membantu mengidentifikasi penyebab spesifik kegagalan verifikasi, membuat pemecahan masalah token otentikasi lebih mudah."
        },
        {
          question: "Bisakah saya membuat JWT baru dengan alat ini?",
          answer: "Ya, debugger JWT kami mencakup fungsi pembuatan token. Untuk membuat JWT baru, Anda dapat menentukan payload yang diinginkan (klaim yang ingin Anda sertakan), memilih algoritma signature yang sesuai (seperti HS256, RS256, dll.), dan memberikan kunci signature yang diperlukan. Untuk algoritma simetris seperti HS256, Anda perlu memberikan kunci. Untuk algoritma asimetris seperti RS256, Anda perlu memberikan private key untuk menandatangani. Jika diperlukan, alat ini bahkan dapat membantu menghasilkan kunci acak. Setelah mengkonfigurasi opsi ini, encoder token akan menghasilkan JWT valid yang dapat Anda gunakan untuk pengujian atau implementasi. Fungsi ini sangat berguna bagi pengembang yang mengimplementasikan otentikasi berbasis JWT dan perlu membuat contoh token dengan klaim spesifik untuk tujuan pengujian."
        }
      ]
    },
    guide: {
      title: "Panduan Langkah demi Langkah Menggunakan Alat Debug JWT",
      steps: [
        "Masukkan <strong>JSON Web Token</strong> Anda ke field input token di bagian atas debugger. Anda dapat menempelkan JWT lengkap (termasuk ketiga bagian yang dipisahkan titik) yang mungkin berasal dari sistem otentikasi atau API",
        "Klik tombol <strong>Dekode</strong> untuk segera melihat komponen token yang sudah didekode. Dekoder JWT akan menampilkan bagian header dan payload dalam tampilan JSON yang diformat untuk kemudahan pembacaan",
        "Periksa <strong>bagian header</strong>, yang biasanya menampilkan tipe token ('typ') dan algoritma signature ('alg'). Informasi ini menunjukkan bagaimana token dibuat dan bagaimana signaturenya harus diverifikasi",
        "Periksa <strong>bagian payload</strong>, yang berisi semua klaim atau data yang disimpan dalam token. Berikan perhatian khusus pada klaim waktu kadaluarsa ('exp'), waktu penerbitan ('iat'), dan subjek ('sub') yang menentukan validitas",
        "Untuk memverifikasi signature token, masukkan <strong>kunci verifikasi</strong> yang sesuai di field yang ditentukan. Algoritma simetris (HS256) menggunakan kunci, sedangkan algoritma asimetris (RS256/ES256) menggunakan public key",
        "Klik tombol <strong>Verifikasi Signature</strong> untuk memeriksa apakah signature token valid. Validator JWT akan menunjukkan apakah verifikasi berhasil atau gagal, beserta detail terkait",
        "Untuk <strong>membuat token baru</strong>, klik opsi 'Buat Token', tentukan payload yang diinginkan dalam format JSON, pilih algoritma, berikan kunci signature (atau buat satu), dan alat akan membuat JWT yang diformat dengan benar untuk Anda"
      ]
    },
    conclusion: "Alat Debug JWT adalah utilitas penting bagi pengembang yang bekerja dengan sistem otentikasi modern, menyediakan fungsi komprehensif untuk pemeriksaan, validasi, dan pembuatan token. Dengan memberikan visibilitas jelas terhadap struktur token dan status validasi, alat ini membantu menyederhanakan proses debugging dan memastikan keamanan implementasi JWT. Baik Anda memecahkan masalah otentikasi, mengintegrasikan penyedia identitas, atau merancang sistem berbasis token baru, alat ini menyederhanakan proses kompleks bekerja dengan JWT. Seiring token otentikasi terus menjadi landasan keamanan aplikasi web, memiliki utilitas debug JWT yang andal dalam toolkit pengembangan Anda menjadi semakin berharga untuk mempertahankan alur otentikasi yang aman dan berfungsi dengan baik."
  }
}