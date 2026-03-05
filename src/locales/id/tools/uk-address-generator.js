export default {
    name: 'Generator Alamat Inggris - Hasilkan alamat Inggris nyata, informasi identitas, dan kontak secara online',
    description: 'Generator alamat Inggris online gratis. Menghasilkan alamat Inggris format nyata, nomor asuransi nasional (NINO), telepon, nomor kartu kredit, dan profil identitas lengkap. Filter berdasarkan county, ekspor ke JSON/CSV, pemrosesan frontend murni untuk privasi.',
    inputTitle: 'Konfigurasi Pembuatan',
    outputTitle: 'Hasil',
    generateBtn: 'Hasilkan Data',
    loadSampleBtn: 'Muat Contoh dan Hasilkan',
    clearAll: 'Hapus Semua',
    noOutput: 'Tidak ada hasil',
    preview: 'Pratinjau',
    
    locationTitle: 'Filter Geografis',
    selectCounty: 'Pilih County',
    selectCity: 'Pilih Kota',
    allCounties: 'Semua County',
    allCities: 'Semua Kota',
    postcodeLabel: 'Kode Pos',
    validatePostcode: 'Validasi Kode Pos',
    
    addressTypeTitle: 'Tipe Alamat',
    addressTypeResidential: 'Alamat Tempat Tinggal',
    addressTypeCommercial: 'Alamat Komersial',
    addressTypePoBox: 'Kotak Pos',
    addressTypeCampus: 'Kampus Universitas',
    
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
    
    contactTitle: 'Informasi Kontak',
    phoneNumber: 'Nomor Telepon',
    phoneType: 'Tipe Telepon',
    phoneTypeMobile: 'Seluler',
    phoneTypeLandline: 'Telepon Rumah',
    areaCode: 'Kode Area',
    email: 'Alamat Email',
    tempEmail: 'Email Sementara',
    
    creditCardTitle: 'Informasi Kartu Kredit',
    cardType: 'Tipe Kartu',
    cardNumber: 'Nomor Kartu',
    expiryDate: 'Tanggal Kadaluarsa',
    cvv: 'CVV',
    bankBin: 'Kode BIN Bank',
    
    careerTitle: 'Profil Profesional',
    jobTitle: 'Jabatan',
    salary: 'Gaji',
    companyName: 'Nama Perusahaan',
    companySize: 'Ukuran Perusahaan',
    industry: 'Industri',
    employmentStatus: 'Status Pekerjaan',
    employmentFullTime: 'Penuh Waktu',
    employmentPartTime: 'Paruh Waktu',
    
    idCardTitle: 'Nomor Asuransi Nasional (NINO)',
    idCardNumber: 'Nomor Asuransi Nasional',
    prefixLetter: 'Huruf Awalan',
    serialNumber: 'Nomor Seri',
    suffixLetter: 'Huruf Akhiran',
    
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
    
    exportTitle: 'Format Ekspor',
    exportJson: 'Ekspor JSON',
    exportCsv: 'Ekspor CSV',
    downloadBtn: 'Unduh',
    copyBtn: 'Salin',
    viewDetails: 'Lihat Detail',
    
    batchTitle: 'Pembuatan Batch',
    quantityLabel: 'Jumlah yang Dihasilkan',
    quantityPlaceholder: 'Masukkan jumlah (1-100)',
    
    generating: 'Sedang menghasilkan...',
    generated: 'Pembuatan Selesai',
    copySuccess: 'Disalin ke clipboard',
    downloadSuccess: 'Unduhan berhasil',
    invalidQuantity: 'Masukkan angka antara 1-100',
    
    resultCount: 'Total {count} catatan dihasilkan',
    resultSummary: 'Ringkasan Hasil',
    showAll: 'Tampilkan Semua',
    collapse: 'Lipat',
    
    generateOptionsTitle: 'Opsi Pembuatan',
    
    recordLabel: 'Catatan #{num}',
    addressLabel: 'Alamat',
    streetLabel: 'Jalan',
    houseNumberLabel: 'Nomor Rumah',
    buildingLabel: 'Gedung',
    cityLabel: 'Kota',
    countyLabel: 'County',
    
    counties: {
        LND: 'Greater London',
        GRM: 'Greater Manchester',
        MAN: 'Manchester',
        BIR: 'West Midlands',
        LEE: 'West Yorkshire',
        SHE: 'South Yorkshire',
        LIV: 'Merseyside',
        BRS: 'Bristol',
        NEW: 'Tyne and Wear',
        NOT: 'Nottinghamshire',
        EDB: 'Edinburgh',
        GLA: 'Glasgow',
        CDF: 'Cardiff',
        BEL: 'Belfast',
        SOU: 'Southampton',
        POR: 'Plymouth',
        BRI: 'Brighton',
        CAM: 'Cambridgeshire'
    },
    
    cities: {
        LND: {
            westminster: 'Westminster',
            kensington: 'Kensington',
            chelsea: 'Chelsea',
            camden: 'Camden',
            islington: 'Islington',
            hackney: 'Hackney',
            towerHamlets: 'Tower Hamlets',
            greenwich: 'Greenwich'
        },
        GRM: {
            manchester: 'Manchester',
            salford: 'Salford',
            bolton: 'Bolton',
            bury: 'Bury',
            oldham: 'Oldham',
            rochdale: 'Rochdale',
            stockport: 'Stockport',
            wigan: 'Wigan'
        },
        MAN: {
            manchesterCity: 'Kota Manchester',
            trafford: 'Trafford',
            tameside: 'Tameside',
            sale: 'Sale'
        },
        BIR: {
            birmingham: 'Birmingham',
            coventry: 'Coventry',
            wolverhampton: 'Wolverhampton',
            dudley: 'Dudley',
            walsall: 'Walsall',
            sandwell: 'Sandwell',
            solihull: 'Solihull'
        },
        LEE: {
            leeds: 'Leeds',
            bradford: 'Bradford',
            wakefield: 'Wakefield',
            kirklees: 'Kirklees',
            calderdale: 'Calderdale'
        },
        SHE: {
            sheffield: 'Sheffield',
            rotherham: 'Rotherham',
            doncaster: 'Doncaster',
            barnsley: 'Barnsley'
        },
        LIV: {
            liverpool: 'Liverpool',
            knowsley: 'Knowsley',
            sefton: 'Sefton',
            wirral: 'Wirral',
            stHelens: 'St Helens'
        },
        BRS: {
            bristol: 'Bristol',
            southGloucestershire: 'South Gloucestershire',
            bath: 'Bath'
        },
        NEW: {
            newcastle: 'Newcastle',
            gateshead: 'Gateshead',
            sunderland: 'Sunderland',
            durham: 'Durham',
            northTyneside: 'North Tyneside',
            southTyneside: 'South Tyneside'
        },
        NOT: {
            nottingham: 'Nottingham',
            derby: 'Derby',
            leicester: 'Leicester',
            lincoln: 'Lincoln'
        },
        EDB: {
            edinburgh: 'Edinburgh',
            glasgow: 'Glasgow',
            aberdeen: 'Aberdeen',
            dundee: 'Dundee',
            inverness: 'Inverness'
        },
        GLA: {
            glasgowCity: 'Kota Glasgow',
            paisley: 'Paisley',
            motherwell: 'Motherwell',
            hamilton: 'Hamilton',
            eastKilbride: 'East Kilbride'
        },
        CDF: {
            cardiff: 'Cardiff',
            swansea: 'Swansea',
            newport: 'Newport',
            wrexham: 'Wrexham',
            barry: 'Barry'
        },
        BEL: {
            belfast: 'Belfast',
            derry: 'Derry',
            lisburn: 'Lisburn',
            newry: 'Newry',
            bangor: 'Bangor'
        },
        SOU: {
            southampton: 'Southampton',
            portsmouth: 'Portsmouth',
            bournemouth: 'Bournemouth',
            poole: 'Poole',
            winchester: 'Winchester'
        },
        POR: {
            plymouth: 'Plymouth',
            exeter: 'Exeter',
            truro: 'Truro',
            bath: 'Bath',
            taunton: 'Taunton'
        },
        BRI: {
            brighton: 'Brighton',
            hove: 'Hove',
            worthing: 'Worthing',
            eastbourne: 'Eastbourne',
            hastings: 'Hastings'
        },
        CAM: {
            cambridge: 'Cambridge',
            oxford: 'Oxford',
            peterborough: 'Peterborough',
            luton: 'Luton',
            miltonKeynes: 'Milton Keynes'
        }
    },
    
    universities: {
        OXF: 'Universitas Oxford',
        CAM: 'Universitas Cambridge',
        IMP: 'Imperial College London',
        UCL: 'University College London',
        EDB: 'Universitas Edinburgh'
    },
    
    studentHall: 'Asrama Mahasiswa',
    academicBuilding: 'Gedung Akademik',
    library: 'Perpustakaan',
    
    csv: {
        fullAddress: 'Alamat Lengkap',
        street: 'Jalan',
        houseNumber: 'Nomor Rumah',
        building: 'Gedung',
        postcode: 'Kode Pos',
        city: 'Kota',
        county: 'County',
        fullName: 'Nama',
        gender: 'Jenis Kelamin',
        age: 'Usia',
        birthDate: 'Tanggal Lahir',
        phone: 'Telepon',
        email: 'Email',
        cardType: 'Tipe Kartu',
        cardNumber: 'Nomor Kartu',
        idCardNumber: 'Nomor Asuransi Nasional'
    }
};
