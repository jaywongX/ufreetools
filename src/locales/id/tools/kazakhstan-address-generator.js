export default {
    name: 'Pembuat Alamat Kazakhstan - Buat alamat Kazakhstan nyata, informasi identitas, dan detail kontak secara online',
    description: 'Pembuat alamat Kazakhstan online gratis yang membuat alamat Kazakhstan format nyata, nomor identitas (ИИН), nomor telepon, nomor kartu kredit, dan profil identitas lengkap. Mendukung penyaringan wilayah, format ekspor JSON/CSV, dan berjalan sepenuhnya di browser untuk perlindungan privasi.',
    inputTitle: 'Pengaturan Pembuatan',
    outputTitle: 'Hasil yang Dihasilkan',
    generateBtn: 'Buat Data',
    loadSampleBtn: 'Muat Contoh & Buat',
    clearAll: 'Hapus Semua',
    noOutput: 'Belum ada hasil yang dihasilkan',
    preview: 'Pratinjau Data',
    
    // Penyaringan Geografis
    locationTitle: 'Penyaringan Geografis',
    selectRegion: 'Pilih Wilayah/Kota',
    selectCity: 'Pilih Kota',
    allRegions: 'Semua Wilayah/Kota',
    allCities: 'Semua Kota',
    postalCodeLabel: 'Kode Pos',
    
    // Tipe Alamat
    addressTypeTitle: 'Tipe Alamat',
    addressTypeResidential: 'Alamat Tempat Tinggal',
    addressTypeCommercial: 'Alamat Bisnis',
    addressTypeVirtual: 'Kotak Surat Virtual',
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
    phoneType: 'Tipe Telepon',
    phoneTypeMobile: 'Ponsel',
    phoneTypeLandline: 'Telepon Rumah',
    areaCode: 'Kode Area',
    email: 'Alamat Email',
    tempEmail: 'Email Sementara',
    
    // Kartu Kredit
    creditCardTitle: 'Informasi Kartu Kredit',
    cardType: 'Tipe Kartu',
    cardNumber: 'Nomor Kartu',
    expiryDate: 'Tanggal Kadaluarsa',
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
    
    // Kartu Identitas
    idCardTitle: 'Kartu Identitas Kazakhstan (ИИН)',
    idCardNumber: 'Nomor Kartu Identitas (ИИН)',
    
    // Sidik Jari Digital
    fingerprintTitle: 'Sidik Jari Digital',
    os: 'Sistem Operasi',
    osVersion: 'Versi Sistem',
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
    copySuccess: 'Disalin ke clipboard',
    downloadSuccess: 'Unduhan berhasil',
    invalidQuantity: 'Masukkan angka antara 1 dan 100',
    
    // Tampilan Hasil
    resultCount: '{count} rekaman dihasilkan',
    resultSummary: 'Ringkasan Hasil',
    showAll: 'Tampilkan Semua',
    collapse: 'Perkecil',
    
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
    regionLabel: 'Wilayah/Kota',
    
    // Format Alamat
    addressFloor: 'Lantai',
    addressUnit: 'Unit',
    commercialUnit: '(Unit Bisnis)',
    postOfficeBox: 'Kotak Pos',
    studentDormitory: 'Asrama Mahasiswa',
    teachingBuilding: 'Gedung Pengajaran',
    library: 'Perpustakaan',
    buildingUnit: 'Gedung',
    
    // Nama Wilayah (Wilayah Kazakhstan)
    regions: {
        NUR: 'Nur-Sultan (Astana)',
        ALA: 'Almaty',
        SHY: 'Shymkent',
        AKM: 'Wilayah Akmola',
        AKT: 'Wilayah Aktobe',
        ATY: 'Wilayah Atyrau',
        MAN: 'Wilayah Mangystau',
        PAV: 'Wilayah Pavlodar',
        SKZ: 'Wilayah Kazakhstan Selatan',
        KUS: 'Wilayah Kostanay',
        KAR: 'Wilayah Karaganda',
        ZAP: 'Wilayah Kazakhstan Barat',
        MNG: 'Wilayah Zhambyl',
        TUR: 'Wilayah Almaty',
        YUZ: 'Wilayah Kyzylorda',
        VOS: 'Wilayah Kazakhstan Timur',
        ZHE: 'Wilayah Zhezkazgan'
    },
    
    // Data Kota
    cities: {
        NUR: {
            nursultan: 'Nur-Sultan'
        },
        ALA: {
            almaty: 'Almaty'
        },
        SHY: {
            shymkent: 'Shymkent'
        },
        AKM: {
            akmola: 'Akmola',
            kokshetau: 'Kokshetau'
        },
        AKT: {
            aktobe: 'Aktobe'
        },
        ATY: {
            atyrau: 'Atyrau'
        },
        MAN: {
            aktau: 'Aktau'
        },
        PAV: {
            pavlodar: 'Pavlodar'
        },
        SKZ: {
            turkestan: 'Turkestan'
        },
        KUS: {
            kostanay: 'Kostanay'
        },
        KAR: {
            karaganda: 'Karaganda'
        },
        ZAP: {
            uralsk: 'Uralsk'
        },
        MNG: {
            taraz: 'Taraz'
        },
        TUR: {
            taldykorgan: 'Taldykorgan'
        },
        YUZ: {
            kyzylorda: 'Kyzylorda'
        },
        VOS: {
            'ust-kamenogorsk': 'Ust-Kamenogorsk'
        },
        ZHE: {
            temirtau: 'Temirtau'
        }
    },
    
    // Nama Kolom CSV
    csv: {
        fullAddress: 'Alamat Lengkap',
        street: 'Jalan',
        houseNumber: 'Nomor Rumah',
        building: 'Gedung',
        floor: 'Lantai',
        unit: 'Unit',
        region: 'Wilayah/Kota',
        postalCode: 'Kode Pos',
        fullName: 'Nama Lengkap',
        gender: 'Jenis Kelamin',
        age: 'Usia',
        birthDate: 'Tanggal Lahir',
        phone: 'Telepon',
        email: 'Email',
        cardType: 'Tipe Kartu',
        cardNumber: 'Nomor Kartu',
        idCardNumber: 'Nomor Kartu Identitas'
    }
};