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
  }
};