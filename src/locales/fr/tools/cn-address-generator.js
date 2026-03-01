export default {
    name: 'Générateur d\'adresses chinoises - Génération en ligne d\'adresses chinoises réelles et d\'informations d\'identité',
    description: 'Générateur gratuit d\'adresses chinoises en ligne, créant des adresses postales chinoises au format réel, des numéros d\'identité, des numéros de téléphone et des numéros de carte bancaire. Prend en charge le filtrage par province, l\'export JSON/CSV, fonctionne côté client pour protéger la confidentialité.',
    inputTitle: 'Paramètres de génération',
    outputTitle: 'Résultats de génération',
    generateBtn: 'Générer les données',
    loadSampleBtn: 'Charger un exemple et générer',
    clearAll: 'Tout effacer',
    noOutput: 'Aucun résultat pour l\'instant',
    preview: 'Aperçu des données',
    
    // Filtrage géographique
    locationTitle: 'Filtrage géographique',
    selectProvince: 'Sélectionner une province',
    selectCity: 'Sélectionner une ville',
    selectDistrict: 'Sélectionner un district',
    allProvinces: 'Toutes les provinces',
    allCities: 'Toutes les villes',
    allDistricts: 'Tous les districts',
    postalCodeLabel: 'Code postal',
    
    // Type d\'adresse
    addressTypeTitle: 'Type d\'adresse',
    addressTypeResidential: 'Adresse résidentielle',
    addressTypeCommercial: 'Adresse commerciale',
    addressTypeCampus: 'Campus universitaire',
    
    // Informations d\'identité
    identityTitle: 'Informations d\'identité',
    fullName: 'Nom complet',
    gender: 'Genre',
    genderMale: 'Homme',
    genderFemale: 'Femme',
    age: 'Âge',
    birthDate: 'Date de naissance',
    zodiac: 'Signe zodiacal',
    
    // Informations de contact
    contactTitle: 'Informations de contact',
    phoneNumber: 'Numéro de téléphone',
    email: 'Adresse e-mail',
    
    // Carte bancaire
    bankCardTitle: 'Informations de carte bancaire',
    bankName: 'Nom de la banque',
    cardNumber: 'Numéro de carte',
    
    // Carte d\'identité
    idCardTitle: 'Carte d\'identité',
    idCardNumber: 'Numéro de carte d\'identité',
    
    // Options d\'export
    exportTitle: 'Format d\'export',
    exportJson: 'Exporter en JSON',
    exportCsv: 'Exporter en CSV',
    downloadBtn: 'Télécharger',
    copyBtn: 'Copier',
    viewDetails: 'Voir les détails',
    
    // Génération par lots
    batchTitle: 'Génération par lots',
    quantityLabel: 'Quantité',
    quantityPlaceholder: 'Entrez un nombre (1-100)',
    
    // Messages
    generating: 'Génération en cours...',
    generated: 'Génération terminée',
    copySuccess: 'Copié dans le presse-papiers',
    downloadSuccess: 'Téléchargement réussi',
    invalidQuantity: 'Veuillez entrer un nombre entre 1 et 100',
    
    // Affichage des résultats
    resultCount: '{count} enregistrements générés',
    resultSummary: 'Résumé des résultats',
    showAll: 'Tout afficher',
    collapse: 'Réduire',
    
    // Options de génération
    generateOptionsTitle: 'Options de génération',
    
    // Affichage des enregistrements
    recordLabel: 'Enregistrement #{num}',
    addressLabel: 'Adresse',
    provinceLabel: 'Province/Municipalité',
    cityLabel: 'Ville',
    districtLabel: 'District/Comté',
    streetLabel: 'Rue',
    communityLabel: 'Résidence/Immeuble',
    
    // Provinces
    provinces: {
        beijing: 'Pékin',
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
        neimenggu: 'Mongolie intérieure',
        ningxia: 'Ningxia',
        xinjiang: 'Xinjiang',
        xizang: 'Tibet'
    },
    
    // Villes principales
    cities: {
        beijing: ['District de Chaoyang', 'District de Haidian', 'District de Dongcheng', 'District de Xicheng', 'District de Fengtai', 'District de Shijingshan', 'District de Tongzhou', 'District de Shunyi', 'District de Daxing', 'District de Changping'],
        shanghai: ['District de Pudong', 'District de Huangpu', 'District de Xuhui', 'District de Changning', 'District de Jing\'an', 'District de Putuo', 'District de Hongkou', 'District de Yangpu', 'District de Minhang', 'District de Baoshan'],
        tianjin: ['District de Heping', 'District de Hedong', 'District de Hexi', 'District de Nankai', 'District de Hebei', 'District de Hongqiao', 'District de Binhai', 'District de Dongli', 'District de Xiqing', 'District de Jinnan'],
        chongqing: ['District de Yuzhong', 'District de Dadukou', 'District de Jiangbei', 'District de Shapingba', 'District de Jiulongpo', 'District de Nan\'an', 'District de Beibei', 'District de Yubei', 'District de Banan'],
        guangzhou: ['District de Tianhe', 'District de Yuexiu', 'District de Haizhu', 'District de Liwan', 'District de Baiyun', 'District de Huangpu', 'District de Panyu', 'District de Huadu', 'District de Nansha', 'District de Zengcheng'],
        shenzhen: ['District de Futian', 'District de Luohu', 'District de Nanshan', 'District de Yantian', 'District de Bao\'an', 'District de Longgang', 'District de Longhua', 'District de Pingshan', 'District de Guangming'],
        hangzhou: ['District de Shangcheng', 'District de Xiacheng', 'District de Jianggan', 'District de Gongshu', 'District de Xihu', 'District de Binjiang', 'District de Xiaoshan', 'District de Yuhang', 'District de Fuyang', 'District de Lin\'an'],
        nanjing: ['District de Xuanwu', 'District de Qinhuai', 'District de Jianye', 'District de Gulou', 'District de Pukou', 'District de Qixia', 'District de Yuhuatai', 'District de Jiangning', 'District de Liuhe', 'District de Lishui'],
        chengdu: ['District de Jinjiang', 'District de Qingyang', 'District de Jinniu', 'District de Wuhou', 'District de Chenghua', 'District de Longquanyi', 'District de Qingbaijiang', 'District de Xindu', 'District de Wenjiang', 'District de Shuangliu'],
        wuhan: ['District de Jiang\'an', 'District de Jianghan', 'District de Qiaokou', 'District de Hanyang', 'District de Wuchang', 'District de Qingshan', 'District de Hongshan', 'District de Dongxihu', 'District de Hannan', 'District de Caidian'],
        xian: ['District de Xincheng', 'District de Beilin', 'District de Lianhu', 'District de Baqiao', 'District de Weiyang', 'District de Yanta', 'District de Yanliang', 'District de Lintong', 'District de Chang\'an', 'District de Gaoling'],
        suzhou: ['District de Gusu', 'District de Huqiu', 'District de Wuzhong', 'District de Xiangcheng', 'District de Wujiang', 'Ville de Kunshan', 'Ville de Changshu', 'Ville de Zhangjiagang', 'Ville de Taicang']
    },
    
    // Préfixes de noms de rues
    streetPrefixes: ['Peuple', 'Libération', 'Construction', 'Paix', 'Zhongshan', 'Pékin', 'Shanghai', 'Nankin', 'Yangtsé', 'Fleuve Jaune', 'Dongfeng', 'Victoire', 'Lumière', 'Bonheur', 'Unité', 'Amitié', 'Culture', 'Technologie', 'Innovation', 'Développement'],
    streetSuffixes: ['rue', 'avenue', 'rue', 'ruelle', 'impasse'],
    
    // Noms de résidences
    communityPrefixes: ['Ensoleillé', 'Jardin', 'Vert', 'Doré', 'Harmonieux', 'Heureux', 'Santé', 'Fleur', 'Rose', 'Pivoine', 'Eau bleue', 'Ciel bleu', 'Brise', 'Lune', 'Galaxie', 'Bambou', 'Peuplier', 'Saule', 'Lotus', 'Lys'],
    communitySuffixes: ['résidence', 'jardin', 'quartier', 'cité', 'baie', 'palais', 'cour', 'parc', 'village', 'hameau', 'appartements', 'tour', 'place', 'centre'],
    
    // Liste des banques
    banks: [
        'Banque industrielle et commerciale de Chine', 'Banque de construction de Chine', 'Banque agricole de Chine', 'Banque de Chine', 'Banque des communications',
        'Banque des marchands', 'Banque CITIC', 'Banque Pudong Development', 'Banque Minsheng', 'Banque industrielle',
        'Banque Ever Bright', 'Banque Hua Xia', 'Banque Ping An', 'Banque Guangfa', 'Banque postale d\'épargne'
    ],
    
    // En-têtes de colonnes CSV
    csv: {
        fullAddress: 'Adresse complète',
        province: 'Province',
        city: 'Ville',
        district: 'District',
        street: 'Rue',
        community: 'Résidence',
        fullName: 'Nom',
        gender: 'Genre',
        age: 'Âge',
        birthDate: 'Date de naissance',
        phone: 'Téléphone',
        email: 'Email',
        idCardNumber: 'Numéro de carte d\'identité',
        bankName: 'Banque',
        cardNumber: 'Numéro de carte'
    }
};
