export default {
    name: 'Pembuat Alamat Meksiko - Buat alamat Meksiko nyata, informasi identitas, dan detail kontak secara online',
    description: 'Pembuat alamat Meksiko online gratis yang membuat alamat Meksiko format nyata, nomor identitas RFC/CURP, nomor telepon, nomor kartu kredit, dan profil identitas lengkap. Mendukung penyaringan negara bagian, format ekspor JSON/CSV, dan berjalan sepenuhnya di browser untuk perlindungan privasi.',
    inputTitle: 'Pengaturan Pembuatan',
    outputTitle: 'Hasil yang Dihasilkan',
    generateBtn: 'Buat Data',
    loadSampleBtn: 'Muat Contoh & Buat',
    clearAll: 'Hapus Semua',
    noOutput: 'Belum ada hasil yang dihasilkan',
    preview: 'Pratinjau Data',
    
    // Penyaringan Geografis
    locationTitle: 'Penyaringan Geografis',
    selectState: 'Pilih Negara Bagian',
    selectCity: 'Pilih Kota',
    allStates: 'Semua Negara Bagian',
    allCities: 'Semua Kota',
    
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
    employmentFullTime: 'Penuh Waktu',
    employmentPartTime: 'Paruh Waktu',
    
    // Kartu Identitas
    idCardTitle: 'Kartu Identitas Meksiko',
    rfcLabel: 'RFC (Pendaftar Pajak Federal)',
    curpLabel: 'CURP (Kode Pendaftaran Penduduk Unik)',
    
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
    neighborhoodLabel: 'Lingkungan',
    postalCodeLabel: 'Kode Pos',
    cityLabel: 'Kota',
    stateLabel: 'Negara Bagian',
    
    // Format Alamat
    commercialAddress: '(Alamat Bisnis)',
    postOfficeBox: 'Kotak Pos',
    studentDormitory: 'Asrama Mahasiswa',
    teachingBuilding: 'Gedung Pengajaran',
    library: 'Perpustakaan',
    
    // Negara Bagian Meksiko (32 negara bagian)
    states: {
        AGS: 'Aguascalientes',
        BCN: 'Baja California',
        BCS: 'Baja California Selatan',
        CAMP: 'Campeche',
        COAH: 'Coahuila',
        COL: 'Colima',
        CHIS: 'Chiapas',
        CHIH: 'Chihuahua',
        CDMX: 'Kota Meksiko',
        DUR: 'Durango',
        GTO: 'Guanajuato',
        GRO: 'Guerrero',
        HGO: 'Hidalgo',
        JAL: 'Jalisco',
        MEX: 'Negara Bagian Meksiko',
        MIC: 'Michoacán',
        MOR: 'Morelos',
        NAY: 'Nayarit',
        NLE: 'Nuevo León',
        OAX: 'Oaxaca',
        PUE: 'Puebla',
        QRO: 'Querétaro',
        QROO: 'Quintana Roo',
        SLP: 'San Luis Potosí',
        SIN: 'Sinaloa',
        SON: 'Sonora',
        TAB: 'Tabasco',
        TAM: 'Tamaulipas',
        TLAX: 'Tlaxcala',
        VER: 'Veracruz',
        YUC: 'Yucatán',
        ZAC: 'Zacatecas'
    },
    
    // Nama Universitas
    universities: {
        UNAM: 'Universitas Nasional Otonom Meksiko',
        IPN: 'Institut Politeknik Nasional',
        UdeG: 'Universitas Guadalajara',
        UANL: 'Universitas Otonom Nuevo León'
    },
    
    // Nama Kolom CSV
    csv: {
        fullAddress: 'Alamat Lengkap',
        street: 'Jalan',
        houseNumber: 'Nomor Rumah',
        neighborhood: 'Lingkungan',
        postalCode: 'Kode Pos',
        city: 'Kota',
        state: 'Negara Bagian',
        fullName: 'Nama Lengkap',
        gender: 'Jenis Kelamin',
        age: 'Usia',
        birthDate: 'Tanggal Lahir',
        phone: 'Telepon',
        email: 'Email',
        cardType: 'Tipe Kartu',
        cardNumber: 'Nomor Kartu',
        rfc: 'RFC',
        curp: 'CURP'
    }
};