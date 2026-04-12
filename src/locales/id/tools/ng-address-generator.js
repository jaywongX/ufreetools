export default {
    name: 'Generator Alamat Nigeria - Hasilkan Alamat Nigeria Asli & Info Identitas Online',
    description: 'Generator alamat Nigeria gratis online, menghasilkan alamat Nigeria dengan format asli, nomor NIN, telepon, nomor kartu kredit, dan profil identitas lengkap. Mendukung filter berdasarkan negara bagian, ekspor JSON/CSV, berjalan sepenuhnya di frontend untuk melindungi privasi.',
    inputTitle: 'Konfigurasi Pembuatan',
    outputTitle: 'Hasil Pembuatan',
    generateBtn: 'Hasilkan Data',
    loadSampleBtn: 'Muat Contoh dan Hasilkan',
    clearAll: 'Hapus Semua',
    noOutput: 'Belum ada hasil pembuatan',
    preview: 'Pratinjau Data',
    
    // Filter Geografis
    locationTitle: 'Filter Lokasi Geografis',
    selectState: 'Pilih Negara Bagian',
    selectLga: 'Pilih Pemerintah Daerah',
    allStates: 'Semua Negara Bagian',
    allLgas: 'Semua Pemerintah Daerah',
    
    // Jenis Alamat
    addressTypeTitle: 'Jenis Alamat',
    addressTypeResidential: 'Alamat Tempat Tinggal',
    addressTypeCommercial: 'Alamat Komersial',
    addressTypePoBox: 'Kotak PO',
    addressTypeCampus: 'Kampus Universitas',
    
    // Informasi Identitas
    identityTitle: 'Informasi Identitas',
    fullName: 'Nama Lengkap',
    firstName: 'Nama Depan',
    lastName: 'Nama Belakang',
    gender: 'Jenis Kelamin',
    genderMale: 'Laki-laki',
    genderFemale: 'Perempuan',
    age: 'Usia',
    birthDate: 'Tanggal Lahir',
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
    bankBin: 'Kode BIN Bank',
    
    // Karir
    careerTitle: 'Profil Karir',
    jobTitle: 'Jabatan',
    salary: 'Gaji',
    companyName: 'Nama Perusahaan',
    companySize: 'Ukuran Perusahaan',
    industry: 'Industri',
    employmentStatus: 'Status Pekerjaan',
    
    // Nomor NIN
    ninTitle: 'Nomor Identitas Nasional Nigeria (NIN)',
    ninNumber: 'Nomor NIN',
    
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
    quantityLabel: 'Jumlah Pembuatan',
    quantityPlaceholder: 'Masukkan jumlah (1-100)',
    
    // Pesan Notifikasi
    generating: 'Sedang menghasilkan...',
    generated: 'Pembuatan selesai',
    copySuccess: 'Disalin ke clipboard',
    downloadSuccess: 'Unduhan berhasil',
    invalidQuantity: 'Harap masukkan angka antara 1-100',
    
    // Tampilan Hasil
    resultCount: 'Total {count} rekaman dihasilkan',
    resultSummary: 'Ringkasan Hasil',
    showAll: 'Tampilkan Semua',
    collapse: 'Lipat',
    
    // Opsi Pembuatan
    generateOptionsTitle: 'Opsi Pembuatan',
    
    // Tampilan Rekaman
    recordLabel: 'Rekaman #{num}',
    addressLabel: 'Alamat',
    streetLabel: 'Jalan',
    houseNumberLabel: 'Nomor Rumah',
    areaLabel: 'Area',
    lgaLabel: 'Pemerintah Daerah',
    stateLabel: 'Negara Bagian',
    
    // Format Alamat
    commercialArea: 'Area Komersial',
    hostel: 'Asrama Mahasiswa',
    faculty: 'Fakultas',
    library: 'Perpustakaan',
    
    // 36 Negara Bagian Nigeria + FCT
    states: {
        AB: 'Abia',
        AD: 'Adamawa',
        AK: 'Akwa Ibom',
        AN: 'Anambra',
        BA: 'Bauchi',
        BY: 'Bayelsa',
        CR: 'Cross River',
        DE: 'Delta',
        EB: 'Ebonyi',
        ED: 'Edo',
        EK: 'Ekiti',
        EN: 'Enugu',
        FC: 'Wilayah Ibu Kota Federal',
        GO: 'Gombe',
        IM: 'Imo',
        JI: 'Jigawa',
        KD: 'Kaduna',
        KE: 'Kebbi',
        KN: 'Kano',
        KO: 'Kogi',
        KT: 'Katsina',
        KW: 'Kwara',
        LA: 'Lagos',
        NA: 'Nasarawa',
        NI: 'Niger',
        OG: 'Ogun',
        ON: 'Ondo',
        OS: 'Osun',
        OY: 'Oyo',
        PL: 'Plateau',
        RI: 'Rivers',
        SO: 'Sokoto',
        TA: 'Taraba',
        YO: 'Yobe',
        ZA: 'Zamfara'
    },
    
    // Nama Universitas
    universities: {
        UNILAG: 'Universitas Lagos',
        'U.I': 'Universitas Ibadan',
        ABU: 'Universitas Ahmadu Bello',
        UNIPORT: 'Universitas Port Harcourt',
        UNN: 'Universitas Nigeria Nsukka'
    },
    
    // Judul Kolom CSV
    csv: {
        fullAddress: 'Alamat Lengkap',
        street: 'Jalan',
        houseNumber: 'Nomor Rumah',
        area: 'Area',
        lga: 'Pemerintah Daerah',
        state: 'Negara Bagian',
        fullName: 'Nama',
        gender: 'Jenis Kelamin',
        age: 'Usia',
        birthDate: 'Tanggal Lahir',
        phone: 'Telepon',
        email: 'Email',
        cardType: 'Jenis Kartu',
        cardNumber: 'Nomor Kartu',
        ninNumber: 'Nomor NIN'
    }
};
