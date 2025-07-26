export default {
  name: 'Parser Sertifikat X.509',
  description: 'Alat online gratis untuk menganalisis sertifikat X.509. Parsing dan analisis sertifikat SSL/TLS, lihat detail sertifikat, periksa masa berlaku, ekstrak kunci publik, ekspor laporan.',

  instructions: {
    title: 'Parser Sertifikat',
    description: 'Unggah file sertifikat atau tempel sertifikat berformat PEM untuk melihat detailnya.'
  },

  dropzone: {
    title: 'Seret dan lepas file sertifikat di sini',
    formats: 'Mendukung file .crt, .cer, .pem, .der, .p12, dan .pfx'
  },

  buttons: {
    browse: 'Jelajahi File',
    decode: 'Parse Sertifikat',
    loadSample: 'Muat Contoh',
    downloadPdf: 'Unduh Laporan PDF',
    downloadTxt: 'Unduh Laporan Teks',
    downloadHtml: 'Unduh Laporan HTML',
    downloadJson: 'Unduh Laporan JSON',
    copyBasic: 'Salin Info Dasar',
    copySubject: 'Salin Subjek/Penerbit',
    copyAll: 'Salin Semua Info',
    copyValue: 'Salin Nilai',
    downloadKey: 'Unduh Kunci',
    exportPem: 'Ekspor PEM',
    downloadCert: 'Unduh Sertifikat',
  },

  input: {
    paste: 'Atau tempel data sertifikat:',
    placeholder: 'Tempel sertifikat berformat PEM Anda (-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----)'
  },

  loading: 'Memproses sertifikat...',

  error: {
    title: 'Error saat parsing sertifikat',
    invalidFormat: 'Format sertifikat tidak valid',
    invalidBase64: 'Bukan sertifikat berenkode base64 yang valid',
    invalidStructure: 'Struktur data sertifikat tidak valid',
    invalidDer: 'Format sertifikat DER tidak valid',
    invalidAsn1: 'Sertifikat tidak valid: gagal parsing data ASN.1',
    unsupportedType: 'Tipe data sertifikat tidak didukung',
    failedParse: 'Gagal memparsing data sertifikat',
    invalidP12: 'Format file PKCS#12 tidak valid',
    invalidP12Password: 'Password PKCS#12 tidak valid',
    noCertificatesInP12: 'Tidak ditemukan sertifikat dalam file PKCS#12',
    unableToProcessP12: 'Tidak dapat memproses file PKCS#12'
  },

  guide: {
    title: 'Cara Menggunakan Alat Ini',
    step1: 'Unggah file sertifikat X.509 Anda (.crt, .cer, .pem, .der, .p12, atau .pfx) atau tempel data sertifikat di kotak teks di bawah.',
    step2: 'Alat akan secara otomatis mendeteksi format (PEM, DER, atau PKCS#12) dan mendekodenya.',
    step3: 'Lihat informasi detail sertifikat termasuk subjek, penerbit, masa berlaku, ekstensi, dan data kunci publik.',
    step4: 'Anda dapat menggunakan tombol di bagian bawah untuk mengunduh laporan sertifikat dalam berbagai format atau menyalin informasi ke clipboard.'
  },

  tabs: {
    basic: 'Info Dasar',
    subject: 'Subjek & Penerbit',
    extensions: 'Ekstensi',
    publicKey: 'Kunci Publik',
    fingerprints: 'Fingerprint',
    raw: 'Sertifikat Mentah'
  },

  results: {
    title: 'Detail Sertifikat',
    serialNumber: 'Nomor Seri',
    version: 'Versi',
    sigAlg: 'Algoritma Tanda Tangan',
    validFrom: 'Berlaku Dari',
    validTo: 'Berlaku Sampai',
    subject: 'Subjek',
    issuer: 'Penerbit',
    extensions: 'Ekstensi',
    publicKey: 'Kunci Publik',
    algorithm: 'Algoritma',
    keySize: 'Ukuran Kunci',
    keyValue: 'Nilai Kunci',
    fingerprints: 'Fingerprint',
    rawCertificate: 'Sertifikat Mentah',
    field: 'Field',
    value: 'Nilai',
    critical: 'Kritis',
    noExtensions: 'Tidak ditemukan ekstensi dalam sertifikat ini.',
    validity: 'Masa Berlaku Sertifikat',
    expiresIn: 'Akan kedaluwarsa dalam {days} hari',
    visualization: 'Visualisasi Sertifikat',
    daysRemaining: 'Hari Tersisa',
    valid: 'Valid',
    expired: 'Kedaluwarsa',
    expiringSoon: 'Akan Segera Kedaluwarsa',
    fieldDescriptions: 'Deskripsi Field',
    certificateUsage: 'Penggunaan Sertifikat',
    certificateChain: 'Rantai Sertifikat',
    signatureValue: 'Nilai Tanda Tangan',
    notAvailable: 'Tidak Tersedia',
    noSpecificUsage: 'Tidak ada penggunaan spesifik yang ditentukan',
    signatureError: 'Error saat parsing nilai tanda tangan',
    keyDetails: 'Detail Kunci',
    enhancedView: 'Tampilan Enhanced',
    endEntity: 'Entitas Akhir',
    intermediate: 'Sertifikat Perantara',
    rootCA: 'Root CA',
    endEntityCert: 'Sertifikat Entitas Akhir',
    intermediateCert: 'Sertifikat Perantara',
    rootCert: 'Otoritas Sertifikat Root',
    issuedBy: 'Diterbitkan Oleh',
    unknownIssuer: 'Penerbit Tidak Dikenal',
    notYetValid: 'Belum Valid'
  },

  report: {
    title: 'Laporan Sertifikat X.509',
    generatedOn: 'Dibuat pada'
  },

  extensions: {
    subjectKeyIdentifier: 'Pengidentifikasi Kunci Subjek',
    keyUsage: 'Penggunaan Kunci',
    subjectAltName: 'Nama Alternatif Subjek',
    basicConstraints: 'Kendala Dasar',
    crlDistributionPoints: 'Poin Distribusi CRL',
    certificatePolicies: 'Kebijakan Sertifikat',
    authorityKeyIdentifier: 'Pengidentifikasi Kunci Otoritas',
    extKeyUsage: 'Penggunaan Kunci Extended',
    authorityInfoAccess: 'Akses Info Otoritas',
    ctPrecertificateScts: 'SCTs Pra-sertifikat CT'
  },

  usage: {
    serverAuth: 'Autentikasi Server',
    clientAuth: 'Autentikasi Klien',
    codeSigning: 'Penandatanganan Kode',
    emailProtection: 'Proteksi Email',
    timeStamping: 'Pencatatan Waktu',
    ocspSigning: 'Penandatanganan OCSP'
  },

  customOID: {
    title: 'Pencarian OID Kustom',
    placeholder: 'Masukkan OID, contoh 2.5.29.15',
    lookup: 'Cari',
    result: 'Hasil',
    value: 'Nilai',
    notFound: 'Informasi OID ini tidak ditemukan',
    foundButComplex: 'OID ditemukan tetapi nilainya kompleks',
    unknownName: 'OID dengan nama tidak dikenal',
    complexValue: 'Nilai kompleks, tidak dapat ditampilkan langsung'
  },

  descriptions: {
    serialNumber: 'Nomor seri unik sertifikat yang ditetapkan oleh otoritas sertifikat',
    version: 'Nomor versi format sertifikat, biasanya V3',
    sigAlg: 'Algoritma yang digunakan untuk membuat tanda tangan sertifikat',
    validFrom: 'Tanggal dan waktu mulai masa berlaku sertifikat',
    validTo: 'Tanggal dan waktu akhir masa berlaku sertifikat',
    subject: 'Informasi identitas pemegang sertifikat',
    issuer: 'Informasi identitas otoritas sertifikat yang menerbitkan sertifikat',
    publicKey: 'Informasi kunci publik pemegang sertifikat',
    extensions: 'Field ekstensi yang berisi informasi tambahan tentang penggunaan sertifikat'
  },

  messages: {
    copiedToClipboard: 'Disalin ke clipboard',
    copyError: 'Gagal menyalin ke clipboard'
  },

  pkcs12: {
    passwordPrompt: 'Masukkan password untuk file PKCS#12',
    noPassword: 'Tidak ada password'
  },

  keyUsages: {
    digitalSignature: 'Tanda Tangan Digital',
    nonRepudiation: 'Non-Repudiasi',
    keyEncipherment: 'Enkripsi Kunci',
    dataEncipherment: 'Enkripsi Data',
    keyAgreement: 'Persetujuan Kunci',
    keyCertSign: 'Penandatanganan Sertifikat',
    crlSign: 'Penandatanganan CRL',
    encipherOnly: 'Hanya Enkripsi',
    decipherOnly: 'Hanya Dekripsi'
  }
};