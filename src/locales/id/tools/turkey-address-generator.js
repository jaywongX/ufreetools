export default {
    name: 'Generator Alamat Turki - Buat alamat Turki nyata, informasi identitas, dan detail kontak secara online',
    description: 'Generator alamat Turki gratis online yang membuat alamat Turki dengan format nyata, nomor identifikasi, nomor telepon, nomor kartu kredit, dan profil identitas lengkap. Mendukung penyaringan provinsi, format ekspor JSON/CSV, dan berjalan sepenuhnya di browser untuk perlindungan privasi.',
    inputTitle: 'Pengaturan Generasi',
    outputTitle: 'Hasil yang Dihasilkan',
    generateBtn: 'Buat Data',
    loadSampleBtn: 'Muat Contoh & Buat',
    clearAll: 'Hapus Semua',
    noOutput: 'Belum ada hasil yang dihasilkan',
    preview: 'Pratinjau Data',
    
    // Penyaringan Geografis
    locationTitle: 'Penyaringan Geografis',
    selectProvince: 'Pilih Provinsi',
    selectDistrict: 'Pilih Kabupaten',
    allProvinces: 'Semua Provinsi',
    allDistricts: 'Semua Kabupaten',
    postalCodeLabel: 'Kode Pos',
    validatePostalCode: 'Validasi Kode Pos',
    
    // Tipe Alamat
    addressTypeTitle: 'Tipe Alamat',
    addressTypeResidential: 'Alamat Rumah',
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
    careerTitle: 'Profil Profesional',
    jobTitle: 'Jabatan',
    salary: 'Gaji',
    companyName: 'Nama Perusahaan',
    companySize: 'Ukuran Perusahaan',
    industry: 'Industri',
    employmentStatus: 'Status Pekerjaan',
    employmentFullTime: 'Penuh Waktu',
    employmentPartTime: 'Paruh Waktu',
    
    // Kartu Identitas
    idCardTitle: 'Kartu Identitas Turki',
    idCardNumber: 'Nomor Kartu Identitas',
    nationalId: 'Nomor Identitas Nasional',
    serialNumber: 'Nomor Seri',
    checkDigit: 'Digit Pemeriksaan',
    
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
    copySuccess: 'Disalin ke clipboard',
    downloadSuccess: 'Unduhan berhasil',
    invalidQuantity: 'Masukkan angka antara 1-100',
    
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
    districtLabel: 'Kabupaten',
    provinceLabel: 'Provinsi',
    postalCode: 'Kode Pos',
    
    // Format Alamat
    addressNumber: 'No.',
    addressFloor: 'Lt.',
    addressUnit: 'Unit',
    commercialUnit: '(Unit Bisnis)',
    turkey: 'Turki',
    postOfficeBox: 'Kotak Pos',
    studentDormitory: 'Asrama Mahasiswa',
    teachingBuilding: 'Gedung Pengajaran',
    library: 'Perpustakaan',
    buildingUnit: 'Unit',
    apartment: 'Apartemen',
    
    // Pesan Peringatan
    idCardImageAlert: 'Pembuatan gambar kartu identitas memerlukan implementasi canvas',
    businessCardAlert: 'Pembuatan kartu nama memerlukan implementasi canvas',
    
    // Nama Provinsi (Provinsi Turki utama)
    provinces: {
        IST: 'Istanbul',
        ANK: 'Ankara',
        IZM: 'Izmir',
        BUR: 'Bursa',
        ANT: 'Antalya',
        ADN: 'Adana',
        GAZ: 'Gaziantep',
        KON: 'Konya',
        MRA: 'Mersin',
        KAY: 'Kayseri',
        ESK: 'Eskisehir',
        TRA: 'Trabzon',
        SAM: 'Samsun',
        MAL: 'Malatya',
        DIA: 'Diyarbakir',
        ERZ: 'Erzurum',
        VAN: 'Van',
        SIV: 'Sivas',
        TOK: 'Tokat',
        COR: 'Corum'
    },
    
    // Nama Kabupaten (Contoh Istanbul)
    districtsData: {
        IST: {
            beyoglu: 'Beyoglu',
            fatih: 'Fatih',
            kadikoy: 'Kadikoy',
            besiktas: 'Besiktas',
            sisli: 'Sisli',
            uskudar: 'Uskudar',
            bakirkoy: 'Bakirkoy',
            zeytinburnu: 'Zeytinburnu',
            beylikduzu: 'Beylikduzu',
            pendik: 'Pendik',
            maltepe: 'Maltepe',
            kartal: 'Kartal',
            tuzla: 'Tuzla',
            catalca: 'Catalca'
        },
        ANK: {
            cankaya: 'Cankaya',
            yenimahalle: 'Yenimahalle',
            altindag: 'Altindag',
            pursaklar: 'Pursaklar',
            eryaman: 'Eryaman',
            etimesgut: 'Etimesgut',
            sincan: 'Sincan'
        },
        IZM: {
            konak: 'Konak',
            karsiyaka: 'Karsiyaka',
            bornova: 'Bornova',
            cigli: 'Cigli',
            bayrakli: 'Bayrakli',
            balcova: 'Balcova',
            guzelbahce: 'Guzelbahce'
        },
        BUR: {
            nilufer: 'Nilufer',
            osmangazi: 'Osmangazi',
            yildirim: 'Yildirim',
            mudanya: 'Mudanya',
            gemlik: 'Gemlik'
        },
        ANT: {
            muratpasa: 'Muratpasa',
            kepez: 'Kepez',
            konyaalti: 'Konyaalti',
            aksu: 'Aksu',
            dosenmeadi: 'Dosenmeadi'
        }
    },
    
    // Nama Universitas
    universities: {
        ITU: 'Universitas Teknik Istanbul',
        ITU: 'Universitas Istanbul',
        BOUN: 'Universitas Bogazici',
        METU: 'Universitas Teknik Timur Tengah',
        HU: 'Universitas Hacettepe',
        ANU: 'Universitas Ankara',
        DEU: 'Universitas Dokuz Eylul'
    },
    
    // Nama Kolom CSV
    csv: {
        fullAddress: 'Alamat Lengkap',
        street: 'Jalan',
        houseNumber: 'Nomor Rumah',
        building: 'Gedung',
        floor: 'Lantai',
        unit: 'Unit',
        district: 'Kabupaten',
        province: 'Provinsi',
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