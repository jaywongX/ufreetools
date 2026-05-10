export default {
    name: 'Pembuat Alamat Prancis - Buat Alamat Prancis Nyata, Informasi Identitas & Detail Kontak Online',
    description: 'Pembuat alamat Prancis online gratis yang membuat alamat format nyata, nomor ID, nomor telepon, nomor kartu kredit, dan profil identitas lengkap. Mendukung penyaringan departemen, format ekspor JSON/CSV, dan berjalan sepenuhnya di browser untuk perlindungan privasi.',
    inputTitle: 'Pengaturan Pembuatan',
    outputTitle: 'Hasil yang Dihasilkan',
    generateBtn: 'Buat Data',
    loadSampleBtn: 'Muat Contoh & Buat',
    clearAll: 'Hapus Semua',
    noOutput: 'Belum ada hasil yang dihasilkan',
    preview: 'Pratinjau Data',
    
    // Penyaringan Geografis
    locationTitle: 'Penyaringan Geografis',
    selectRegion: 'Pilih Wilayah',
    selectDepartment: 'Pilih Departemen',
    allRegions: 'Semua Wilayah',
    allDepartments: 'Semua Departemen',
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
    idCardTitle: 'Kartu Identitas Prancis',
    idCardNumber: 'Nomor Kartu Identitas',
    nirNumber: 'Nomor NIR',
    serialNumber: 'Nomor Seri',
    checkKey: 'Kunci Pemeriksaan',
    
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
    exportIdCard: 'Buat Gambar Kartu Identitas',
    exportBusinessCard: 'Buat Kartu Nama',
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
    departmentLabel: 'Departemen',
    regionLabel: 'Wilayah',
    postalCode: 'Kode Pos',
    
    // Format Alamat
    addressNumber: 'No.',
    addressFloor: 'Lt.',
    addressUnit: 'Unit',
    commercialUnit: '(Unit Komersial)',
    france: 'Prancis',
    postOfficeBox: 'Kotak Pos',
    studentDormitory: 'Asrama Mahasiswa',
    teachingBuilding: 'Gedung Pengajaran',
    library: 'Perpustakaan',
    buildingUnit: 'Blok',
    apartment: 'Apartemen',
    
    // Pesan Peringatan
    idCardImageAlert: 'Pembuatan gambar kartu identitas memerlukan implementasi canvas',
    businessCardAlert: 'Pembuatan kartu nama memerlukan implementasi canvas',
    
    // Nama Wilayah (Wilayah Prancis)
    regions: {
        IDF: 'Île-de-France',
        ARA: 'Auvergne-Rhône-Alpes',
        OCC: 'Occitanie',
        NAQ: 'Nouvelle-Aquitaine',
        PAC: 'Provence-Alpes-Côte d\'Azur',
        HDF: 'Hauts-de-France',
        BFC: 'Bourgogne-Franche-Comté',
        NAC: 'Pays de la Loire',
        PDL: 'Pays de la Loire',
        BRE: 'Bretagne',
        NOR: 'Normandie',
        GUA: 'Guadeloupe',
        MQ: 'Martinique',
        GUY: 'Guyane Prancis',
        REU: 'Réunion',
        COR: 'Corse',
        ALO: 'Alsace-Lorraine',
        MP: 'Metz-Poméranie'
    },
    
    // Data Departemen (contoh Wilayah Île-de-France)
    departmentsData: {
        IDF: {
            paris: 'Paris',
            hautsDeSeine: 'Hauts-de-Seine',
            seineSaintDenis: 'Seine-Saint-Denis',
            valDeMarne: 'Val-de-Marne',
            yvelines: 'Yvelines',
            essonne: 'Essonne',
            valDOise: 'Val-d\'Oise',
            seineEtMarne: 'Seine-et-Marne'
        },
        ARA: {
            rhone: 'Rhône',
            loire: 'Loire',
            isere: 'Isère',
            ain: 'Ain',
            savoie: 'Savoie',
            hauteSavoie: 'Haute-Savoie',
            allier: 'Allier',
            puyDeDome: 'Puy-de-Dôme'
        },
        OCC: {
            herault: 'Hérault',
            gard: 'Gard',
            aude: 'Aude',
            pyreneesOrientales: 'Pyrénées-Orientales',
            tarn: 'Tarn',
            hauteGaronne: 'Haute-Garonne',
            gers: 'Gers',
            lotEtGaronne: 'Lot-et-Garonne'
        },
        NAQ: {
            gironde: 'Gironde',
            charenteMaritime: 'Charente-Maritime',
            dordogne: 'Dordogne',
            landes: 'Landes',
            vienne: 'Vienne',
            hauteVienne: 'Haute-Vienne',
            charente: 'Charente',
            correze: 'Corrèze'
        },
        PAC: {
            bouchesDuRhone: 'Bouches-du-Rhône',
            alpesMaritimes: 'Alpes-Maritimes',
            var: 'Var',
            vaucluse: 'Vaucluse',
            alpesDeHauteProvence: 'Alpes-de-Haute-Provence',
            hautesAlpes: 'Hautes-Alpes'
        },
        HDF: {
            nord: 'Nord',
            pasDeCalais: 'Pas-de-Calais',
            somme: 'Somme',
            aisne: 'Aisne',
            oise: 'Oise',
            aisne: 'Aisne'
        }
    },
    
    // Nama Universitas
    universities: {
        UP1: 'Universitas Paris 1 Panthéon-Sorbonne',
        UP2: 'Universitas Paris 2 Panthéon-Assas',
        UP3: 'Universitas Paris 3 Sorbonne Nouvelle',
        UP4: 'Universitas Paris 1 Panthéon-Sorbonne',
        UP5: 'Universitas Paris Descartes',
        UP6: 'Universitas Pierre dan Marie Curie',
        UP7: 'Universitas Paris Diderot',
        UP8: 'Universitas Paris 8 Vincennes-Saint-Denis',
        UP9: 'Universitas Paris Dauphine',
        UP10: 'Universitas Paris Nanterre',
        UP11: 'Universitas Paris-Saclay',
        UP12: 'Universitas Paris-Est Créteil',
        UP13: 'Universitas Sorbonne Paris Nord',
        ENS: 'École normale supérieure',
        X: 'École polytechnique'
    },
    
    // Nama Kolom CSV
    csv: {
        fullAddress: 'Alamat Lengkap',
        street: 'Jalan',
        houseNumber: 'Nomor Rumah',
        building: 'Gedung',
        floor: 'Lantai',
        unit: 'Unit',
        department: 'Departemen',
        region: 'Wilayah',
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