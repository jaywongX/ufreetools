export default {
    name: 'Generator Alamat HK - Hasilkan alamat Hong Kong asli, informasi identitas & detail kontak secara online',
    description: 'Generator alamat HK online gratis yang membuat alamat Hong Kong dengan format asli, nomor identitas, nomor telepon, nomor kartu kredit dan profil identitas lengkap. Mendukung penyaringan distrik, format ekspor JSON/CSV, dan berjalan sepenuhnya di browser untuk perlindungan privasi.',
    inputTitle: 'Pengaturan Pembuatan',
    outputTitle: 'Hasil yang Dihasilkan',
    generateBtn: 'Hasilkan Data',
    loadSampleBtn: 'Muat Contoh & Hasilkan',
    clearAll: 'Bersihkan Semua',
    noOutput: 'Belum ada hasil yang dihasilkan',
    preview: 'Pratinjau Data',
    
    // Penyaringan Geografis
    locationTitle: 'Penyaringan Geografis',
    selectDistrict: 'Pilih Distrik',
    selectArea: 'Pilih Area',
    allDistricts: 'Semua Distrik',
    allAreas: 'Semua Area',
    postalCodeLabel: 'Kode Pos',
    validatePostalCode: 'Validasi Kode Pos',
    
    // Jenis Alamat
    addressTypeTitle: 'Jenis Alamat',
    addressTypeResidential: 'Alamat Tempat Tinggal',
    addressTypeCommercial: 'Alamat Komersial',
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
    height: 'Tinggi',
    weight: 'Berat',
    
    // Informasi Kontak
    contactTitle: 'Informasi Kontak',
    phoneNumber: 'Nomor Telepon',
    phoneType: 'Jenis Telepon',
    phoneTypeMobile: 'Ponsel',
    phoneTypeLandline: 'Telepon Rumah',
    areaCode: 'Kode Area',
    email: 'Alamat Email',
    tempEmail: 'Email Sementara',
    
    // Kartu Kredit
    creditCardTitle: 'Informasi Kartu Kredit',
    cardType: 'Jenis Kartu',
    cardNumber: 'Nomor Kartu',
    expiryDate: 'Tanggal Kadaluarsa',
    cvv: 'CVV',
    bankBin: 'BIN Bank',
    
    // Karier
    careerTitle: 'Profil Karier',
    jobTitle: 'Jabatan',
    salary: 'Gaji',
    companyName: 'Nama Perusahaan',
    companySize: 'Ukuran Perusahaan',
    industry: 'Industri',
    employmentStatus: 'Status Pekerjaan',
    employmentFullTime: 'Penuh Waktu',
    employmentPartTime: 'Paruh Waktu',
    
    // Kartu Identitas
    idCardTitle: 'Kartu Identitas Hong Kong',
    idCardNumber: 'Nomor Kartu Identitas',
    prefixLetter: 'Huruf Awalan',
    serialNumber: 'Nomor Seri',
    checkDigit: 'Angka Pemeriksa',
    
    // Sidik Jari Digital
    fingerprintTitle: 'Sidik Jari Digital',
    os: 'Sistem Operasi',
    osVersion: 'Versi OS',
    browser: 'Browser',
    userAgent: 'Agen Pengguna',
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
    exportIdCard: 'Hasilkan Gambar Kartu Identitas',
    exportBusinessCard: 'Hasilkan Kartu Nama',
    downloadBtn: 'Unduh',
    copyBtn: 'Salin',
    viewDetails: 'Lihat Detail',
    
    // Pembuatan Batch
    batchTitle: 'Pembuatan Batch',
    quantityLabel: 'Kuantitas',
    quantityPlaceholder: 'Masukkan kuantitas (1-100)',
    
    // Pesan Notifikasi
    generating: 'Menghasilkan...',
    generated: 'Pembuatan Selesai',
    copySuccess: 'Disalin ke papan klip',
    downloadSuccess: 'Unduhan berhasil',
    invalidQuantity: 'Silakan masukkan angka antara 1-100',
    
    // Tampilan Hasil
    resultCount: '{count} catatan dihasilkan',
    resultSummary: 'Ringkasan Hasil',
    showAll: 'Tampilkan Semua',
    collapse: 'Ciutkan',
    
    // Opsi Pembuatan
    generateOptionsTitle: 'Opsi Pembuatan',
    
    // Tampilan Catatan
    recordLabel: 'Catatan #{num}',
    addressLabel: 'Alamat',
    streetLabel: 'Jalan',
    houseNumberLabel: 'Nomor Rumah',
    buildingLabel: 'Gedung',
    floorLabel: 'Lantai',
    unitLabel: 'Unit',
    districtLabel: 'Distrik',
    
    // Format Alamat
    addressNumber: 'No.',
    addressFloor: 'Lantai',
    addressUnit: 'Unit',
    commercialUnit: '(Unit Komersial)',
    hongKong: 'Hong Kong',
    postOfficeBox: 'Kotak Pos',
    studentDormitory: 'Asrama Mahasiswa',
    teachingBuilding: 'Gedung Pengajaran',
    library: 'Perpustakaan',
    buildingUnit: 'Unit',
    
    // Pesan Peringatan
    idCardImageAlert: 'Pembuatan gambar kartu identitas memerlukan implementasi kanvas',
    businessCardAlert: 'Pembuatan kartu nama memerlukan implementasi kanvas',
    
    // Nama Distrik
    districts: {
        CW: 'Tengah & Barat',
        WAN: 'Wan Chai',
        E: 'Timur',
        S: 'Selatan',
        YTM: 'Yau Tsim Mong',
        SSP: 'Sham Shui Po',
        KC: 'Kota Kowloon',
        WTS: 'Wong Tai Sin',
        KT: 'Kwun Tong',
        TM: 'Tuen Mun',
        YL: 'Yuen Long',
        N: 'Utara',
        TP: 'Tai Po',
        ST: 'Sha Tin',
        SK: 'Sai Kung',
        TW: 'Tsuen Wan',
        KW: 'Kwai Tsing',
        IS: 'Pulau-pulau'
    },
    
    // Nama Area
    areas: {
        CW: {
            central: 'Central',
            sheungWan: 'Sheung Wan',
            saiWan: 'Sai Wan',
            midLevels: 'Mid-Levels'
        },
        WAN: {
            wanChai: 'Wan Chai',
            causewayBay: 'Causeway Bay',
            happyValley: 'Happy Valley',
            taiHang: 'Tai Hang'
        },
        E: {
            northPoint: 'North Point',
            quarryBay: 'Quarry Bay',
            taiKooShing: 'Tai Koo Shing',
            shauKeiWan: 'Shau Kei Wan',
            chaiWan: 'Chai Wan'
        },
        S: {
            repulseBay: 'Repulse Bay',
            deepWaterBay: 'Deep Water Bay',
            stanley: 'Stanley',
            aberdeen: 'Aberdeen',
            apLeiChau: 'Ap Lei Chau'
        },
        YTM: {
            tsimShaTsui: 'Tsim Sha Tsui',
            yauMaTei: 'Yau Ma Tei',
            mongKok: 'Mong Kok',
            jordan: 'Jordan'
        },
        SSP: {
            shamShuiPo: 'Sham Shui Po',
            cheungShaWan: 'Cheung Sha Wan',
            laiChiKok: 'Lai Chi Kok',
            shekKipMei: 'Shek Kip Mei'
        },
        KC: {
            kowloonCity: 'Kota Kowloon',
            toKwaWan: 'To Kwa Wan',
            hungHom: 'Hung Hom',
            hoManTin: 'Ho Man Tin'
        },
        WTS: {
            wongTaiSin: 'Wong Tai Sin',
            diamondHill: 'Diamond Hill',
            sanPoKong: 'San Po Kong',
            lokFu: 'Lok Fu'
        },
        KT: {
            kwunTong: 'Kwun Tong',
            lamTin: 'Lam Tin',
            ngauTauKok: 'Ngau Tau Kok',
            kowloonBay: 'Kowloon Bay'
        },
        TM: {
            tuenMun: 'Tuen Mun',
            yuenLong: 'Yuen Long',
            tinShuiWai: 'Tin Shui Wai',
            tsingShan: 'Tsing Shan'
        },
        YL: {
            yuenLong: 'Yuen Long',
            tinShuiWai: 'Tin Shui Wai',
            kamTin: 'Kam Tin',
            pingShan: 'Ping Shan'
        },
        N: {
            sheungShui: 'Sheung Shui',
            fanLing: 'Fan Ling',
            shaTauKok: 'Sha Tau Kok',
            taKuLing: 'Ta Ku Ling'
        },
        TP: {
            taiPo: 'Tai Po',
            taiPoMarket: 'Pasar Tai Po',
            taiWo: 'Tai Wo',
            lamTsuen: 'Lam Tsuen'
        },
        ST: {
            shaTin: 'Sha Tin',
            taiWai: 'Tai Wai',
            maOnShan: 'Ma On Shan',
            foTan: 'Fo Tan'
        },
        SK: {
            saiKung: 'Sai Kung',
            tseungKwanO: 'Tseung Kwan O',
            hangHau: 'Hang Hau',
            clearWaterBay: 'Clear Water Bay'
        },
        TW: {
            tsuenWan: 'Tsuen Wan',
            kwaiChung: 'Kwai Chung',
            tsingYi: 'Tsing Yi',
            shamTseng: 'Sham Tseng'
        }
    },
    
    // Nama Universitas
    universities: {
        HKU: 'Universitas Hong Kong',
        CUHK: 'Universitas Tiongkok Hong Kong',
        HKUST: 'Universitas Sains dan Teknologi Hong Kong',
        PolyU: 'Universitas Politeknik Hong Kong',
        CityU: 'Universitas Kota Hong Kong'
    },
    
    // Nama Kolom CSV
    csv: {
        fullAddress: 'Alamat Lengkap',
        street: 'Jalan',
        houseNumber: 'Nomor Rumah',
        building: 'Gedung',
        floor: 'Lantai',
        unit: 'Unit',
        district: 'Distrik',
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