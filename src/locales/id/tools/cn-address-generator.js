export default {
    name: 'Generator Alamat Tiongkok - Pembuatan alamat Tiongkok nyata dan informasi identitas online',
    description: 'Generator alamat Tiongkok gratis online, membuat alamat pos Tiongkok dalam format nyata, nomor identitas, nomor telepon, dan nomor kartu bank. Mendukung pemfilteran berdasarkan provinsi, ekspor JSON/CSV, berjalan di sisi klien untuk melindungi privasi.',
    inputTitle: 'Pengaturan Pembuatan',
    outputTitle: 'Hasil Pembuatan',
    generateBtn: 'Buat Data',
    loadSampleBtn: 'Muat Contoh dan Buat',
    clearAll: 'Hapus Semua',
    noOutput: 'Belum ada hasil',
    preview: 'Pratinjau Data',
    
    // Pemfilteran Geografis
    locationTitle: 'Pemfilteran Geografis',
    selectProvince: 'Pilih Provinsi',
    selectCity: 'Pilih Kota',
    selectDistrict: 'Pilih Distrik',
    allProvinces: 'Semua Provinsi',
    allCities: 'Semua Kota',
    allDistricts: 'Semua Distrik',
    postalCodeLabel: 'Kode Pos',
    
    // Jenis Alamat
    addressTypeTitle: 'Jenis Alamat',
    addressTypeResidential: 'Alamat Tempat Tinggal',
    addressTypeCommercial: 'Alamat Komersial',
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
    
    // Informasi Kontak
    contactTitle: 'Informasi Kontak',
    phoneNumber: 'Nomor Telepon',
    email: 'Alamat Email',
    
    // Kartu Bank
    bankCardTitle: 'Informasi Kartu Bank',
    bankName: 'Nama Bank',
    cardNumber: 'Nomor Kartu',
    
    // Kartu Identitas
    idCardTitle: 'Kartu Identitas',
    idCardNumber: 'Nomor Kartu Identitas',
    
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
    quantityPlaceholder: 'Masukkan angka (1-100)',
    
    // Pesan
    generating: 'Membuat...',
    generated: 'Pembuatan Selesai',
    copySuccess: 'Disalin ke clipboard',
    downloadSuccess: 'Unduhan selesai',
    invalidQuantity: 'Harap masukkan angka antara 1 dan 100',
    
    // Tampilan Hasil
    resultCount: '{count} rekaman dibuat',
    resultSummary: 'Ringkasan Hasil',
    showAll: 'Tampilkan Semua',
    collapse: 'Lipat',
    
    // Opsi Pembuatan
    generateOptionsTitle: 'Opsi Pembuatan',
    
    // Tampilan Rekaman
    recordLabel: 'Rekaman #{num}',
    addressLabel: 'Alamat',
    provinceLabel: 'Provinsi/Kotamadya',
    cityLabel: 'Kota',
    districtLabel: 'Distrik/Kabupaten',
    streetLabel: 'Jalan',
    communityLabel: 'Kompleks/Gedung',
    
    // Provinsi
    provinces: {
        beijing: 'Beijing',
        shanghai: 'Shanghai',
        tianjin: 'Tianjin',
        chongqing: 'Chongqing',
        guangdong: 'Guangdong',
        jiangsu: 'Jiangsu',
        zhejiang: 'Zhejiang',
        shandong: 'Shandong',
        henan: 'Henan',
        sichuan: 'Sichuan',
        hubei: 'Hubei',
        hunan: 'Hunan',
        fujian: 'Fujian',
        anhui: 'Anhui',
        hebei: 'Hebei',
        shaanxi: 'Shaanxi',
        liaoning: 'Liaoning',
        jilin: 'Jilin',
        heilongjiang: 'Heilongjiang',
        yunnan: 'Yunnan',
        guizhou: 'Guizhou',
        guangxi: 'Guangxi',
        hainan: 'Hainan',
        shanxi: 'Shanxi',
        jiangxi: 'Jiangxi',
        gansu: 'Gansu',
        qinghai: 'Qinghai',
        neimenggu: 'Mongolia Dalam',
        ningxia: 'Ningxia',
        xinjiang: 'Xinjiang',
        xizang: 'Tibet'
    },
    
    // Kota Utama
    cities: {
        beijing: ['Distrik Chaoyang', 'Distrik Haidian', 'Distrik Dongcheng', 'Distrik Xicheng', 'Distrik Fengtai', 'Distrik Shijingshan', 'Distrik Tongzhou', 'Distrik Shunyi', 'Distrik Daxing', 'Distrik Changping'],
        shanghai: ['Distrik Pudong', 'Distrik Huangpu', 'Distrik Xuhui', 'Distrik Changning', 'Distrik Jing\'an', 'Distrik Putuo', 'Distrik Hongkou', 'Distrik Yangpu', 'Distrik Minhang', 'Distrik Baoshan'],
        tianjin: ['Distrik Heping', 'Distrik Hedong', 'Distrik Hexi', 'Distrik Nankai', 'Distrik Hebei', 'Distrik Hongqiao', 'Distrik Binhai', 'Distrik Dongli', 'Distrik Xiqing', 'Distrik Jinnan'],
        chongqing: ['Distrik Yuzhong', 'Distrik Dadukou', 'Distrik Jiangbei', 'Distrik Shapingba', 'Distrik Jiulongpo', 'Distrik Nan\'an', 'Distrik Beibei', 'Distrik Yubei', 'Distrik Banan'],
        guangzhou: ['Distrik Tianhe', 'Distrik Yuexiu', 'Distrik Haizhu', 'Distrik Liwan', 'Distrik Baiyun', 'Distrik Huangpu', 'Distrik Panyu', 'Distrik Huadu', 'Distrik Nansha', 'Distrik Zengcheng'],
        shenzhen: ['Distrik Futian', 'Distrik Luohu', 'Distrik Nanshan', 'Distrik Yantian', 'Distrik Bao\'an', 'Distrik Longgang', 'Distrik Longhua', 'Distrik Pingshan', 'Distrik Guangming'],
        hangzhou: ['Distrik Shangcheng', 'Distrik Xiacheng', 'Distrik Jianggan', 'Distrik Gongshu', 'Distrik Xihu', 'Distrik Binjiang', 'Distrik Xiaoshan', 'Distrik Yuhang', 'Distrik Fuyang', 'Distrik Lin\'an'],
        nanjing: ['Distrik Xuanwu', 'Distrik Qinhuai', 'Distrik Jianye', 'Distrik Gulou', 'Distrik Pukou', 'Distrik Qixia', 'Distrik Yuhuatai', 'Distrik Jiangning', 'Distrik Liuhe', 'Distrik Lishui'],
        chengdu: ['Distrik Jinjiang', 'Distrik Qingyang', 'Distrik Jinniu', 'Distrik Wuhou', 'Distrik Chenghua', 'Distrik Longquanyi', 'Distrik Qingbaijiang', 'Distrik Xindu', 'Distrik Wenjiang', 'Distrik Shuangliu'],
        wuhan: ['Distrik Jiang\'an', 'Distrik Jianghan', 'Distrik Qiaokou', 'Distrik Hanyang', 'Distrik Wuchang', 'Distrik Qingshan', 'Distrik Hongshan', 'Distrik Dongxihu', 'Distrik Hannan', 'Distrik Caidian'],
        xian: ['Distrik Xincheng', 'Distrik Beilin', 'Distrik Lianhu', 'Distrik Baqiao', 'Distrik Weiyang', 'Distrik Yanta', 'Distrik Yanliang', 'Distrik Lintong', 'Distrik Chang\'an', 'Distrik Gaoling'],
        suzhou: ['Distrik Gusu', 'Distrik Huqiu', 'Distrik Wuzhong', 'Distrik Xiangcheng', 'Distrik Wujiang', 'Kota Kunshan', 'Kota Changshu', 'Kota Zhangjiagang', 'Kota Taicang']
    },
    
    // Awalan Nama Jalan
    streetPrefixes: ['Rakyat', 'Pembebasan', 'Pembangunan', 'Damai', 'Zhongshan', 'Beijing', 'Shanghai', 'Nanjing', 'Yangtze', 'Kuning', 'Dongfeng', 'Kemenangan', 'Cahaya', 'Kebahagiaan', 'Persatuan', 'Persahabatan', 'Budaya', 'Teknologi', 'Inovasi', 'Pengembangan'],
    streetSuffixes: ['jalan', 'avenue', 'jalan', 'gang', 'lorong'],
    
    // Nama Kompleks
    communityPrefixes: ['Cerah', 'Taman', 'Hijau', 'Emas', 'Harmonis', 'Bahagia', 'Sehat', 'Bunga', 'Mawar', 'Peony', 'Air Biru', 'Langit Biru', 'Angin', 'Bulan', 'Galaksi', 'Bambu', 'Poplar', 'Willow', 'Teratai', 'Lily'],
    communitySuffixes: ['kompleks', 'taman', 'lingkungan', 'kota', 'teluk', 'istana', 'halaman', 'taman', 'desa', 'permukiman', 'apartemen', 'menara', 'alun-alun', 'pusat'],
    
    // Daftar Bank
    banks: [
        'Bank Industri dan Komersial Tiongkok', 'Bank Konstruksi Tiongkok', 'Bank Pertanian Tiongkok', 'Bank Tiongkok', 'Bank Komunikasi',
        'Bank Pedagang', 'Bank CITIC', 'Bank Pudong Development', 'Bank Minsheng', 'Bank Industri',
        'Bank Ever Bright', 'Bank Hua Xia', 'Bank Ping An', 'Bank Guangfa', 'Bank Tabungan Pos'
    ],
    
    // Header Kolom CSV
    csv: {
        fullAddress: 'Alamat Lengkap',
        province: 'Provinsi',
        city: 'Kota',
        district: 'Distrik',
        street: 'Jalan',
        community: 'Kompleks',
        fullName: 'Nama',
        gender: 'Jenis Kelamin',
        age: 'Usia',
        birthDate: 'Tanggal Lahir',
        phone: 'Telepon',
        email: 'Email',
        idCardNumber: 'Nomor Kartu Identitas',
        bankName: 'Bank',
        cardNumber: 'Nomor Kartu'
    }
};
