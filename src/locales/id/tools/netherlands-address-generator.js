export default {
    name: 'Pembuat Alamat Belanda - Buat Alamat Belanda Nyata, Informasi Identitas & Detail Kontak Online',
    description: 'Pembuat alamat Belanda online gratis yang membuat alamat format nyata, nomor ID, nomor telepon, nomor kartu kredit, dan profil identitas lengkap. Mendukung penyaringan provinsi, format ekspor JSON/CSV, dan berjalan sepenuhnya di browser untuk perlindungan privasi.',
    inputTitle: 'Pengaturan Pembuatan',
    outputTitle: 'Hasil yang Dihasilkan',
    generateBtn: 'Buat Data',
    loadSampleBtn: 'Muat Contoh & Buat',
    clearAll: 'Hapus Semua',
    noOutput: 'Belum ada hasil yang dihasilkan',
    preview: 'Pratinjau Data',
    
    // Penyaringan Geografis
    locationTitle: 'Penyaringan Geografis',
    selectRegion: 'Pilih Provinsi',
    allRegions: 'Semua Provinsi',
    postalCodeLabel: 'Kode Pos',
    validatePostalCode: 'Validasi Kode Pos',
    
    // Jenis Alamat
    addressTypeTitle: 'Jenis Alamat',
    addressTypeResidential: 'Alamat Tempat Tinggal',
    addressTypeCommercial: 'Alamat Bisnis',
    addressTypeVirtual: 'Kotak Virtual',
    addressTypeCampus: 'Kampus Universitas',
    
    // Informasi Identitas
    identityTitle: 'Informasi Identitas',
    fullName: 'Nama Lengkap',
    gender: 'Jenis Kelamin',
    genderMale: 'Laki-laki',
    genderFemale: 'Perempuan',
    age: 'Usia',
    birthDate: 'Tanggal Lahir',
    zodiac: 'Zodiak',
    height: 'Tinggi Badan',
    weight: 'Berat Badan',
    
    // Informasi Kontak
    contactTitle: 'Informasi Kontak',
    phoneNumber: 'Nomor Telepon',
    phoneType: 'Jenis Telepon',
    phoneTypeMobile: 'Seluler',
    phoneTypeLandline: 'Telepon Tetap',
    areaCode: 'Kode Area',
    email: 'Alamat Email',
    tempEmail: 'Email Sementara',
    
    // Kartu Kredit
    creditCardTitle: 'Informasi Kartu Kredit',
    cardType: 'Jenis Kartu',
    cardNumber: 'Nomor Kartu',
    expiryDate: 'Tanggal Kedaluwarsa',
    cvv: 'CVV',
    bankBin: 'BIN Bank',
    
    // Karir
    careerTitle: 'Profil Karir',
    jobTitle: 'Jabatan',
    salary: 'Gaji',
    companyName: 'Nama Perusahaan',
    companySize: 'Ukuran Perusahaan',
    industry: 'Industri',
    employmentStatus: 'Status Pekerjaan',
    employmentFullTime: 'Penuh Waktu',
    employmentPartTime: 'Paruh Waktu',
    
    // Kartu Identitas
    idCardTitle: 'Kartu Identitas Belanda',
    idCardNumber: 'Nomor Kartu Identitas',
    bsnNumber: 'Nomor BSN',
    
    // Sidik Jari Digital
    fingerprintTitle: 'Sidik Jari Digital',
    os: 'Sistem Operasi',
    osVersion: 'Versi OS',
    browser: 'Browser',
    userAgent: 'User Agent',
    screenResolution: 'Resolusi Layar',
    timezone: 'Zona Waktu',
    guid: 'GUID',
    ipAddress: 'Alamat IP',
    macAddress: 'Alamat MAC',
    cookiePolicy: 'Kebijakan Cookie',
    
    // Opsi Ekspor
    exportTitle: 'Format Ekspor',
    exportJson: 'Ekspor JSON',
    exportCsv: 'Ekspor CSV',
    downloadBtn: 'Unduh',
    copyBtn: 'Salin',
    viewDetails: 'Lihat Detail',
    
    // Pembuatan Batch
    batchTitle: 'Pembuatan Batch',
    quantityLabel: 'Jumlah',
    quantityPlaceholder: 'Masukkan jumlah (1-100)',
    
    // Pesan Notifikasi
    generating: 'Membuat...',
    generated: 'Pembuatan Selesai',
    copySuccess: 'Disalin ke papan klip',
    downloadSuccess: 'Unduhan berhasil',
    invalidQuantity: 'Masukkan angka antara 1-100',
    
    // Tampilan Hasil
    resultCount: '{count} rekaman dihasilkan',
    resultSummary: 'Ringkasan Hasil',
    showAll: 'Tampilkan Semua',
    collapse: 'Ciutkan',
    
    // Opsi Pembuatan
    generateOptionsTitle: 'Opsi Pembuatan',
    
    // Tampilan Rekaman
    recordLabel: 'Rekaman #{num}',
    addressLabel: 'Alamat',
    streetLabel: 'Jalan',
    houseNumberLabel: 'Nomor Rumah',
    buildingLabel: 'Gedung',
    floorLabel: 'Lantai',
    unitLabel: 'Unit',
    regionLabel: 'Provinsi',
    postalCode: 'Kode Pos',
    
    // Format Alamat
    addressNumber: 'No.',
    addressFloor: 'Lt.',
    addressUnit: 'Unit',
    commercialUnit: '(Unit Komersial)',
    netherlands: 'Belanda',
    postOfficeBox: 'Kotak Pos',
    studentDormitory: 'Asrama Mahasiswa',
    teachingBuilding: 'Gedung Pengajaran',
    library: 'Perpustakaan',
    buildingUnit: 'Blok',
    apartment: 'Apartemen',
    
    // Nama Provinsi (Provinsi Belanda)
    regions: {
        'Noord-Holland': 'Holland Utara',
        'Zuid-Holland': 'Holland Selatan',
        'Utrecht': 'Utrecht',
        'Gelderland': 'Gelderland',
        'Overijssel': 'Overijssel',
        'Flevoland': 'Flevoland',
        'Friesland': 'Friesland',
        'Drenthе': 'Drenthe',
        'Groningen': 'Groningen',
        'Limburg': 'Limburg',
        'Noord-Brabant': 'Brabant Utara',
        'Zeeland': 'Zeeland'
    },
    
    // Nama Universitas
    universities: {
        'UvA': 'Universitas Amsterdam',
        'VU': 'Universitas Bebas Amsterdam',
        'TU': 'Universitas Teknologi Delft',
        'UU': 'Universitas Utrecht',
        'EUR': 'Universitas Erasmus Rotterdam',
        'RUG': 'Universitas Groningen',
        'WUR': 'Universitas Wageningen',
        'UL': 'Universitas Leiden',
        'RU': 'Universitas Radboud',
        'UM': 'Universitas Maastricht'
    },
    
    // Nama Kolom CSV
    csv: {
        fullAddress: 'Alamat Lengkap',
        street: 'Jalan',
        houseNumber: 'Nomor Rumah',
        building: 'Gedung',
        floor: 'Lantai',
        unit: 'Unit',
        region: 'Provinsi',
        postalCode: 'Kode Pos',
        fullName: 'Nama Lengkap',
        gender: 'Jenis Kelamin',
        age: 'Usia',
        birthDate: 'Tanggal Lahir',
        phone: 'Telepon',
        email: 'Email',
        cardType: 'Jenis Kartu',
        cardNumber: 'Nomor Kartu',
        idCardNumber: 'Nomor Kartu Identitas'
    }
};