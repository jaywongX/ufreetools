export default {
    name: 'Chinesischer Adressgenerator - Online-Generierung realer chinesischer Adressen und Identitätsinformationen',
    description: 'Kostenloser Online-Chinesischer Adressgenerator, der chinesische Postadressen im realen Format, Identitätsnummern, Telefonnummern und Bankkartennummern erstellt. Unterstützt Filterung nach Provinz, JSON/CSV-Export, läuft clientseitig zum Schutz der Privatsphäre.',
    inputTitle: 'Generierungseinstellungen',
    outputTitle: 'Generierungsergebnisse',
    generateBtn: 'Daten generieren',
    loadSampleBtn: 'Beispiel laden und generieren',
    clearAll: 'Alles löschen',
    noOutput: 'Noch keine Ergebnisse',
    preview: 'Datenvorschau',
    
    // Geografische Filterung
    locationTitle: 'Geografische Filterung',
    selectProvince: 'Provinz auswählen',
    selectCity: 'Stadt auswählen',
    selectDistrict: 'Bezirk auswählen',
    allProvinces: 'Alle Provinzen',
    allCities: 'Alle Städte',
    allDistricts: 'Alle Bezirke',
    postalCodeLabel: 'Postleitzahl',
    
    // Adresstyp
    addressTypeTitle: 'Adresstyp',
    addressTypeResidential: 'Wohnadresse',
    addressTypeCommercial: 'Geschäftsadresse',
    addressTypeCampus: 'Universitätscampus',
    
    // Identitätsinformationen
    identityTitle: 'Identitätsinformationen',
    fullName: 'Vollständiger Name',
    gender: 'Geschlecht',
    genderMale: 'Männlich',
    genderFemale: 'Weiblich',
    age: 'Alter',
    birthDate: 'Geburtsdatum',
    zodiac: 'Tierkreiszeichen',
    
    // Kontaktinformationen
    contactTitle: 'Kontaktinformationen',
    phoneNumber: 'Telefonnummer',
    email: 'E-Mail-Adresse',
    
    // Bankkarte
    bankCardTitle: 'Bankkarteninformationen',
    bankName: 'Bankname',
    cardNumber: 'Kartennummer',
    
    // Personalausweis
    idCardTitle: 'Personalausweis',
    idCardNumber: 'Personalausweisnummer',
    
    // Exportoptionen
    exportTitle: 'Exportformat',
    exportJson: 'JSON exportieren',
    exportCsv: 'CSV exportieren',
    downloadBtn: 'Herunterladen',
    copyBtn: 'Kopieren',
    viewDetails: 'Details anzeigen',
    
    // Stapelverarbeitung
    batchTitle: 'Stapelverarbeitung',
    quantityLabel: 'Anzahl',
    quantityPlaceholder: 'Zahl eingeben (1-100)',
    
    // Nachrichten
    generating: 'Generierung läuft...',
    generated: 'Generierung abgeschlossen',
    copySuccess: 'In die Zwischenablage kopiert',
    downloadSuccess: 'Download abgeschlossen',
    invalidQuantity: 'Bitte geben Sie eine Zahl zwischen 1 und 100 ein',
    
    // Ergebnisanzeige
    resultCount: '{count} Datensätze generiert',
    resultSummary: 'Ergebniszusammenfassung',
    showAll: 'Alle anzeigen',
    collapse: 'Einklappen',
    
    // Generierungsoptionen
    generateOptionsTitle: 'Generierungsoptionen',
    
    // Datensatzanzeige
    recordLabel: 'Datensatz #{num}',
    addressLabel: 'Adresse',
    provinceLabel: 'Provinz/Regierungsbezirk',
    cityLabel: 'Stadt',
    districtLabel: 'Bezirk/Landkreis',
    streetLabel: 'Straße',
    communityLabel: 'Wohnanlage/Gebäude',
    
    // Provinzen
    provinces: {
        beijing: 'Peking',
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
        neimenggu: 'Innere Mongolei',
        ningxia: 'Ningxia',
        xinjiang: 'Xinjiang',
        xizang: 'Tibet'
    },
    
    // Hauptstädte
    cities: {
        beijing: ['Bezirk Chaoyang', 'Bezirk Haidian', 'Bezirk Dongcheng', 'Bezirk Xicheng', 'Bezirk Fengtai', 'Bezirk Shijingshan', 'Bezirk Tongzhou', 'Bezirk Shunyi', 'Bezirk Daxing', 'Bezirk Changping'],
        shanghai: ['Bezirk Pudong', 'Bezirk Huangpu', 'Bezirk Xuhui', 'Bezirk Changning', 'Bezirk Jing\'an', 'Bezirk Putuo', 'Bezirk Hongkou', 'Bezirk Yangpu', 'Bezirk Minhang', 'Bezirk Baoshan'],
        tianjin: ['Bezirk Heping', 'Bezirk Hedong', 'Bezirk Hexi', 'Bezirk Nankai', 'Bezirk Hebei', 'Bezirk Hongqiao', 'Bezirk Binhai', 'Bezirk Dongli', 'Bezirk Xiqing', 'Bezirk Jinnan'],
        chongqing: ['Bezirk Yuzhong', 'Bezirk Dadukou', 'Bezirk Jiangbei', 'Bezirk Shapingba', 'Bezirk Jiulongpo', 'Bezirk Nan\'an', 'Bezirk Beibei', 'Bezirk Yubei', 'Bezirk Banan'],
        guangzhou: ['Bezirk Tianhe', 'Bezirk Yuexiu', 'Bezirk Haizhu', 'Bezirk Liwan', 'Bezirk Baiyun', 'Bezirk Huangpu', 'Bezirk Panyu', 'Bezirk Huadu', 'Bezirk Nansha', 'Bezirk Zengcheng'],
        shenzhen: ['Bezirk Futian', 'Bezirk Luohu', 'Bezirk Nanshan', 'Bezirk Yantian', 'Bezirk Bao\'an', 'Bezirk Longgang', 'Bezirk Longhua', 'Bezirk Pingshan', 'Bezirk Guangming'],
        hangzhou: ['Bezirk Shangcheng', 'Bezirk Xiacheng', 'Bezirk Jianggan', 'Bezirk Gongshu', 'Bezirk Xihu', 'Bezirk Binjiang', 'Bezirk Xiaoshan', 'Bezirk Yuhang', 'Bezirk Fuyang', 'Bezirk Lin\'an'],
        nanjing: ['Bezirk Xuanwu', 'Bezirk Qinhuai', 'Bezirk Jianye', 'Bezirk Gulou', 'Bezirk Pukou', 'Bezirk Qixia', 'Bezirk Yuhuatai', 'Bezirk Jiangning', 'Bezirk Liuhe', 'Bezirk Lishui'],
        chengdu: ['Bezirk Jinjiang', 'Bezirk Qingyang', 'Bezirk Jinniu', 'Bezirk Wuhou', 'Bezirk Chenghua', 'Bezirk Longquanyi', 'Bezirk Qingbaijiang', 'Bezirk Xindu', 'Bezirk Wenjiang', 'Bezirk Shuangliu'],
        wuhan: ['Bezirk Jiang\'an', 'Bezirk Jianghan', 'Bezirk Qiaokou', 'Bezirk Hanyang', 'Bezirk Wuchang', 'Bezirk Qingshan', 'Bezirk Hongshan', 'Bezirk Dongxihu', 'Bezirk Hannan', 'Bezirk Caidian'],
        xian: ['Bezirk Xincheng', 'Bezirk Beilin', 'Bezirk Lianhu', 'Bezirk Baqiao', 'Bezirk Weiyang', 'Bezirk Yanta', 'Bezirk Yanliang', 'Bezirk Lintong', 'Bezirk Chang\'an', 'Bezirk Gaoling'],
        suzhou: ['Bezirk Gusu', 'Bezirk Huqiu', 'Bezirk Wuzhong', 'Bezirk Xiangcheng', 'Bezirk Wujiang', 'Stadt Kunshan', 'Stadt Changshu', 'Stadt Zhangjiagang', 'Stadt Taicang']
    },
    
    // Straßennamen-Präfixe
    streetPrefixes: ['Volk', 'Befreiung', 'Aufbau', 'Frieden', 'Zhongshan', 'Peking', 'Shanghai', 'Nanjing', 'Jangtse', 'Gelber Fluss', 'Dongfeng', 'Sieg', 'Licht', 'Glück', 'Einheit', 'Freundschaft', 'Kultur', 'Technologie', 'Innovation', 'Entwicklung'],
    streetSuffixes: ['Straße', 'Allee', 'Straße', 'Gasse', 'Weg'],
    
    // Wohnanlagen-Namen
    communityPrefixes: ['Sonnig', 'Garten', 'Grün', 'Golden', 'Harmonisch', 'Glücklich', 'Gesund', 'Blume', 'Rose', 'Pfingstrose', 'Blaues Wasser', 'Blauer Himmel', 'Brise', 'Mond', 'Galaxie', 'Bambus', 'Pappel', 'Weide', 'Lotus', 'Lilie'],
    communitySuffixes: ['Anlage', 'Garten', 'Viertel', 'Stadt', 'Bucht', 'Palast', 'Hof', 'Park', 'Dorf', 'Siedlung', 'Apartments', 'Turm', 'Platz', 'Zentrum'],
    
    // Bankenliste
    banks: [
        'Industrie- und Handelsbank China', 'China Construction Bank', 'Landwirtschaftsbank China', 'Bank of China', 'Verkehrsbank',
        'Händlerbank', 'CITIC Bank', 'Pudong Development Bank', 'Minsheng Bank', 'Industriebank',
        'Ever Bright Bank', 'Hua Xia Bank', 'Ping An Bank', 'Guangfa Bank', 'Postsparkasse'
    ],
    
    // CSV-Spaltenüberschriften
    csv: {
        fullAddress: 'Vollständige Adresse',
        province: 'Provinz',
        city: 'Stadt',
        district: 'Bezirk',
        street: 'Straße',
        community: 'Wohnanlage',
        fullName: 'Name',
        gender: 'Geschlecht',
        age: 'Alter',
        birthDate: 'Geburtsdatum',
        phone: 'Telefon',
        email: 'E-Mail',
        idCardNumber: 'Personalausweisnummer',
        bankName: 'Bank',
        cardNumber: 'Kartennummer'
    }
};
