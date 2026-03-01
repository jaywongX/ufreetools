export default {
    name: 'Generatore di Indirizzi Cinesi - Generazione online di indirizzi cinesi reali e informazioni sull\'identità',
    description: 'Generatore gratuito di indirizzi cinesi online, che crea indirizzi postali cinesi in formato reale, numeri di identità, numeri di telefono e numeri di carte bancarie. Supporta il filtraggio per provincia, esportazione JSON/CSV, funziona lato client per proteggere la privacy.',
    inputTitle: 'Impostazioni di Generazione',
    outputTitle: 'Risultati della Generazione',
    generateBtn: 'Genera Dati',
    loadSampleBtn: 'Carica Esempio e Genera',
    clearAll: 'Cancella Tutto',
    noOutput: 'Nessun risultato ancora',
    preview: 'Anteprima Dati',
    
    // Filtraggio Geografico
    locationTitle: 'Filtraggio Geografico',
    selectProvince: 'Seleziona Provincia',
    selectCity: 'Seleziona Città',
    selectDistrict: 'Seleziona Distretto',
    allProvinces: 'Tutte le Province',
    allCities: 'Tutte le Città',
    allDistricts: 'Tutti i Distretti',
    postalCodeLabel: 'Codice Postale',
    
    // Tipo di Indirizzo
    addressTypeTitle: 'Tipo di Indirizzo',
    addressTypeResidential: 'Indirizzo Residenziale',
    addressTypeCommercial: 'Indirizzo Commerciale',
    addressTypeCampus: 'Campus Universitario',
    
    // Informazioni d\'Identità
    identityTitle: 'Informazioni d\'Identità',
    fullName: 'Nome Completo',
    gender: 'Sesso',
    genderMale: 'Maschio',
    genderFemale: 'Femmina',
    age: 'Età',
    birthDate: 'Data di Nascita',
    zodiac: 'Segno Zodiacale',
    
    // Informazioni di Contatto
    contactTitle: 'Informazioni di Contatto',
    phoneNumber: 'Numero di Telefono',
    email: 'Indirizzo Email',
    
    // Carta Bancaria
    bankCardTitle: 'Informazioni Carta Bancaria',
    bankName: 'Nome Banca',
    cardNumber: 'Numero Carta',
    
    // Carta d\'Identità
    idCardTitle: 'Carta d\'Identità',
    idCardNumber: 'Numero Carta d\'Identità',
    
    // Opzioni di Esportazione
    exportTitle: 'Formato di Esportazione',
    exportJson: 'Esporta JSON',
    exportCsv: 'Esporta CSV',
    downloadBtn: 'Scarica',
    copyBtn: 'Copia',
    viewDetails: 'Vedi Dettagli',
    
    // Generazione in Batch
    batchTitle: 'Generazione in Batch',
    quantityLabel: 'Quantità',
    quantityPlaceholder: 'Inserisci un numero (1-100)',
    
    // Messaggi
    generating: 'Generazione in corso...',
    generated: 'Generazione Completata',
    copySuccess: 'Copiato negli appunti',
    downloadSuccess: 'Download completato',
    invalidQuantity: 'Inserisci un numero tra 1 e 100',
    
    // Visualizzazione Risultati
    resultCount: '{count} record generati',
    resultSummary: 'Riepilogo Risultati',
    showAll: 'Mostra Tutto',
    collapse: 'Comprimi',
    
    // Opzioni di Generazione
    generateOptionsTitle: 'Opzioni di Generazione',
    
    // Visualizzazione Record
    recordLabel: 'Record #{num}',
    addressLabel: 'Indirizzo',
    provinceLabel: 'Provincia/Municipalità',
    cityLabel: 'Città',
    districtLabel: 'Distretto/Contea',
    streetLabel: 'Via',
    communityLabel: 'Complesso/Edificio',
    
    // Province
    provinces: {
        beijing: 'Pechino',
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
        neimenggu: 'Mongolia Interna',
        ningxia: 'Ningxia',
        xinjiang: 'Xinjiang',
        xizang: 'Tibet'
    },
    
    // Città Principali
    cities: {
        beijing: ['Distretto di Chaoyang', 'Distretto di Haidian', 'Distretto di Dongcheng', 'Distretto di Xicheng', 'Distretto di Fengtai', 'Distretto di Shijingshan', 'Distretto di Tongzhou', 'Distretto di Shunyi', 'Distretto di Daxing', 'Distretto di Changping'],
        shanghai: ['Distretto di Pudong', 'Distretto di Huangpu', 'Distretto di Xuhui', 'Distretto di Changning', 'Distretto di Jing\'an', 'Distretto di Putuo', 'Distretto di Hongkou', 'Distretto di Yangpu', 'Distretto di Minhang', 'Distretto di Baoshan'],
        tianjin: ['Distretto di Heping', 'Distretto di Hedong', 'Distretto di Hexi', 'Distretto di Nankai', 'Distretto di Hebei', 'Distretto di Hongqiao', 'Distretto di Binhai', 'Distretto di Dongli', 'Distretto di Xiqing', 'Distretto di Jinnan'],
        chongqing: ['Distretto di Yuzhong', 'Distretto di Dadukou', 'Distretto di Jiangbei', 'Distretto di Shapingba', 'Distretto di Jiulongpo', 'Distretto di Nan\'an', 'Distretto di Beibei', 'Distretto di Yubei', 'Distretto di Banan'],
        guangzhou: ['Distretto di Tianhe', 'Distretto di Yuexiu', 'Distretto di Haizhu', 'Distretto di Liwan', 'Distretto di Baiyun', 'Distretto di Huangpu', 'Distretto di Panyu', 'Distretto di Huadu', 'Distretto di Nansha', 'Distretto di Zengcheng'],
        shenzhen: ['Distretto di Futian', 'Distretto di Luohu', 'Distretto di Nanshan', 'Distretto di Yantian', 'Distretto di Bao\'an', 'Distretto di Longgang', 'Distretto di Longhua', 'Distretto di Pingshan', 'Distretto di Guangming'],
        hangzhou: ['Distretto di Shangcheng', 'Distretto di Xiacheng', 'Distretto di Jianggan', 'Distretto di Gongshu', 'Distretto di Xihu', 'Distretto di Binjiang', 'Distretto di Xiaoshan', 'Distretto di Yuhang', 'Distretto di Fuyang', 'Distretto di Lin\'an'],
        nanjing: ['Distretto di Xuanwu', 'Distretto di Qinhuai', 'Distretto di Jianye', 'Distretto di Gulou', 'Distretto di Pukou', 'Distretto di Qixia', 'Distretto di Yuhuatai', 'Distretto di Jiangning', 'Distretto di Liuhe', 'Distretto di Lishui'],
        chengdu: ['Distretto di Jinjiang', 'Distretto di Qingyang', 'Distretto di Jinniu', 'Distretto di Wuhou', 'Distretto di Chenghua', 'Distretto di Longquanyi', 'Distretto di Qingbaijiang', 'Distretto di Xindu', 'Distretto di Wenjiang', 'Distretto di Shuangliu'],
        wuhan: ['Distretto di Jiang\'an', 'Distretto di Jianghan', 'Distretto di Qiaokou', 'Distretto di Hanyang', 'Distretto di Wuchang', 'Distretto di Qingshan', 'Distretto di Hongshan', 'Distretto di Dongxihu', 'Distretto di Hannan', 'Distretto di Caidian'],
        xian: ['Distretto di Xincheng', 'Distretto di Beilin', 'Distretto di Lianhu', 'Distretto di Baqiao', 'Distretto di Weiyang', 'Distretto di Yanta', 'Distretto di Yanliang', 'Distretto di Lintong', 'Distretto di Chang\'an', 'Distretto di Gaoling'],
        suzhou: ['Distretto di Gusu', 'Distretto di Huqiu', 'Distretto di Wuzhong', 'Distretto di Xiangcheng', 'Distretto di Wujiang', 'Città di Kunshan', 'Città di Changshu', 'Città di Zhangjiagang', 'Città di Taicang']
    },
    
    // Prefissi dei Nomi delle Strade
    streetPrefixes: ['Popolo', 'Liberazione', 'Costruzione', 'Pace', 'Zhongshan', 'Pechino', 'Shanghai', 'Nanchino', 'Yangtze', 'Fiume Giallo', 'Dongfeng', 'Vittoria', 'Luce', 'Felicità', 'Unità', 'Amicizia', 'Cultura', 'Tecnologia', 'Innovazione', 'Sviluppo'],
    streetSuffixes: ['via', 'viale', 'via', 'vicolo', 'cortile'],
    
    // Nomi dei Complessi
    communityPrefixes: ['Soleggiato', 'Giardino', 'Verde', 'Dorato', 'Armonioso', 'Felice', 'Salute', 'Fiore', 'Rosa', 'Peonia', 'Acqua Blu', 'Cielo Blu', 'Brezza', 'Luna', 'Galassia', 'Bambù', 'Pioppo', 'Salice', 'Loto', 'Giglio'],
    communitySuffixes: ['complesso', 'giardino', 'quartiere', 'città', 'baia', 'palazzo', 'cortile', 'parco', 'villaggio', 'borgata', 'appartamenti', 'torre', 'piazza', 'centro'],
    
    // Lista delle Banche
    banks: [
        'Banca Industriale e Commerciale Cinese', 'Banca di Costruzione Cinese', 'Banca Agricola Cinese', 'Banca di Cina', 'Banca delle Comunicazioni',
        'Banca dei Mercanti', 'Banca CITIC', 'Banca Pudong Development', 'Banca Minsheng', 'Banca Industriale',
        'Banca Ever Bright', 'Banca Hua Xia', 'Banca Ping An', 'Banca Guangfa', 'Banca Postale di Risparmio'
    ],
    
    // Intestazioni Colonne CSV
    csv: {
        fullAddress: 'Indirizzo Completo',
        province: 'Provincia',
        city: 'Città',
        district: 'Distretto',
        street: 'Via',
        community: 'Complesso',
        fullName: 'Nome',
        gender: 'Sesso',
        age: 'Età',
        birthDate: 'Data di Nascita',
        phone: 'Telefono',
        email: 'Email',
        idCardNumber: 'Numero Carta d\'Identità',
        bankName: 'Banca',
        cardNumber: 'Numero Carta'
    }
};
