export default {
    name: 'Pembuat Alamat Vietnam - Buat Alamat Vietnam Nyata, Informasi Identitas & Detail Kontak Online',
    description: 'Pembuat alamat Vietnam online gratis yang membuat alamat format nyata, nomor ID, nomor telepon, nomor kartu kredit, dan profil identitas lengkap. Mendukung penyaringan provinsi, format ekspor JSON/CSV, dan berjalan sepenuhnya di browser untuk perlindungan privasi.',
    inputTitle: 'Pengaturan Pembuatan',
    outputTitle: 'Hasil yang Dihasilkan',
    generateBtn: 'Buat Data',
    loadSampleBtn: 'Muat Contoh & Buat',
    clearAll: 'Hapus Semua',
    noOutput: 'Belum ada hasil yang dihasilkan',
    preview: 'Pratinjau Data',
    
    // Penyaringan Geografis
    locationTitle: 'Penyaringan Geografis',
    selectProvince: 'Pilih Provinsi/Kota',
    selectDistrict: 'Pilih Kabupaten',
    allProvinces: 'Semua Provinsi/Kota',
    allDistricts: 'Semua Kabupaten',
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
    idCardTitle: 'Kartu Identitas Vietnam',
    idCardNumber: 'Nomor Kartu Identitas',
    cmndNumber: 'Nomor CMND',
    cccdNumber: 'Nomor CCCD',
    serialNumber: 'Nomor Seri',
    
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
    exportIdCard: 'Buat Gambar Kartu Identitas',
    exportBusinessCard: 'Buat Kartu Nama',
    downloadBtn: 'Unduh',
    copyBtn: 'Salin',
    viewDetails: 'Lihat Detail',
    
    // Pembuatan Batch
    batchTitle: 'Pembuatan Batch',
    quantityLabel: 'Jumlah',
    quantityPlaceholder: 'Masukkan jumlah (1-100)',
    
    // Pesan Pemberitahuan
    generating: 'Membuat...',
    generated: 'Pembuatan Selesai',
    copySuccess: 'Disalin ke clipboard',
    downloadSuccess: 'Unduhan berhasil',
    invalidQuantity: 'Masukkan angka antara 1-100',
    
    // Tampilan Hasil
    resultCount: '{count} catatan dibuat',
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
    wardLabel: 'Kelurahan',
    districtLabel: 'Kabupaten',
    provinceLabel: 'Provinsi/Kota',
    postalCode: 'Kode Pos',
    
    // Format Alamat
    addressNumber: 'No.',
    addressFloor: 'Lt',
    addressUnit: 'Unit',
    commercialUnit: '(Unit Komersial)',
    vietnam: 'Vietnam',
    postOfficeBox: 'Kotak Pos',
    studentDormitory: 'Asrama Mahasiswa',
    teachingBuilding: 'Gedung Pengajaran',
    library: 'Perpustakaan',
    buildingUnit: 'Unit',
    apartment: 'Apartemen',
    
    // Pesan Peringatan
    idCardImageAlert: 'Pembuatan gambar kartu identitas memerlukan implementasi canvas',
    businessCardAlert: 'Pembuatan kartu nama memerlukan implementasi canvas',
    
    // Nama Provinsi (Provinsi Vietnam)
    provinces: {
        HN: 'Hanoi',
        HCM: 'Kota Ho Chi Minh',
        HP: 'Haiphong',
        DN: 'Da Nang',
        CT: 'Can Tho',
        BH: 'Ba Ria-Vung Tau',
        BD: 'Binh Duong',
        QN: 'Quang Ninh',
        QG: 'Quang Nam',
        KG: 'Ca Mau',
        DT: 'Dong Nai',
        HB: 'Ha Nam',
        TH: 'Thai Binh',
        NB: 'Nam Dinh',
        VL: 'Vinh Long',
        TG: 'Soc Trang',
        NT: 'Ninh Thuan',
        PY: 'Phu Yen',
        TV: 'Tay Ninh',
        BD: 'Binh Dinh',
        HT: 'Hoa Binh',
        TB: 'Tuyen Quang',
        TN: 'Thai Nguyen',
        LC: 'Lai Chau',
        YB: 'Yen Bai',
        DB: 'Dien Bien',
        LA: 'Lao Cai',
        CB: 'Cao Bang',
        LD: 'Lam Dong',
        DC: 'Dak Lak',
        QN: 'Quang Binh',
        QT: 'Quang Tri',
        HT: 'Ha Tinh',
        NA: 'Nghe An',
        TT: 'Thanh Hoa',
        NB: 'Ninh Binh',
        ST: 'An Giang',
        CT: 'Tra Vinh',
        BP: 'Ben Tre',
        BL: 'Bac Lieu',
        KG: 'Ca Mau',
        CM: 'Ca Mau'
    },
    
    // Data Kabupaten (contoh untuk Hanoi dan Kota Ho Chi Minh)
    districtsData: {
        HN: {
            hoanKiem: 'Hoan Kiem',
            baDinh: 'Ba Dinh',
            dongDa: 'Dong Da',
            haiBaTrung: 'Hai Ba Trung',
            thanhXuan: 'Thanh Xuan',
            cauGiay: 'Cau Giay',
            hoangMai: 'Hoang Mai',
            longBien: 'Long Bien',
            tayHo: 'Tay Ho',
            bacTuLiem: 'Bac Tu Liem',
            namTuLiem: 'Nam Tu Liem',
            haDong: 'Ha Dong'
        },
        HCM: {
            quan1: 'Distrik 1',
            quan3: 'Distrik 3',
            quan4: 'Distrik 4',
            quan5: 'Distrik 5',
            quan6: 'Distrik 6',
            quan7: 'Distrik 7',
            quan10: 'Distrik 10',
            quan11: 'Distrik 11',
            binhThanh: 'Binh Thanh',
            phuNhuan: 'Phu Nhuan',
            tanBinh: 'Tan Binh',
            goVap: 'Go Vap',
            binhChanh: 'Binh Chanh',
            thuDuc: 'Thu Duc'
        },
        DN: {
            haiChau: 'Hai Chau',
            thanhKhe: 'Thanh Khe',
            sonTra: 'Son Tra',
            NguHanhSon: 'Ngu Hanh Son',
            LienChieu: 'Lien Chieu',
            CamLe: 'Cam Le'
        },
        HP: {
            HongBang: 'Hong Bang',
            LeChan: 'Le Chan',
            NgoQuyen: 'Ngo Quyen',
            HaiAn: 'Hai An',
            KiAn: 'Ki An'
        }
    },
    
    // Nama Universitas
    universities: {
        HUST: 'Universitas Sains dan Teknologi Hanoi',
        VNU: 'Universitas Nasional Vietnam',
        HANU: 'Universitas Nasional Hanoi',
        HCMUS: 'Universitas Nasional Kota Ho Chi Minh',
        RMIT: 'Universitas RMIT Vietnam',
        FTU: 'Universitas Perdagangan Luar Negeri',
        NEU: 'Universitas Ekonomi Nasional',
        HPU: 'Universitas Farmasi Hanoi',
        PTIT: 'Institut Pos dan Telekomunikasi',
        FPT: 'Universitas FPT'
    },
    
    // Nama Kolom CSV
    csv: {
        fullAddress: 'Alamat Lengkap',
        street: 'Jalan',
        houseNumber: 'Nomor Rumah',
        building: 'Gedung',
        floor: 'Lantai',
        unit: 'Unit',
        ward: 'Kelurahan',
        district: 'Kabupaten',
        province: 'Provinsi/Kota',
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