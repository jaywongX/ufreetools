export default {
    name: '日本地址產生器 - 線上產生真實日本地址、身分資訊與聯絡方式',
    description: '免費線上日本地址產生器，產生真實格式的日本地址、住民票番號、電話、信用卡號等完整身分檔案。支援按都道府縣篩選，匯出JSON/CSV格式，純前端執行保護隱私。',
    inputTitle: '產生設定',
    outputTitle: '產生結果',
    generateBtn: '產生資料',
    loadSampleBtn: '載入範例並產生',
    clearAll: '清除全部',
    noOutput: '暫無產生結果',
    preview: '預覽資料',
    
    // 地理篩選
    locationTitle: '地理位置篩選',
    selectPrefecture: '選擇都道府縣',
    selectCity: '選擇市區町村',
    allPrefectures: '全部都道府縣',
    allCities: '全部市區町村',
    postalCodeLabel: '郵遞區號',
    validatePostalCode: '驗證郵遞區號',
    
    // 地址類型
    addressTypeTitle: '地址類型',
    addressTypeResidential: '住宅地址',
    addressTypeCommercial: '商業地址',
    addressTypeVirtual: '虛擬信箱',
    addressTypeCampus: '大學校園',
    
    // 身分資訊
    identityTitle: '身分資訊',
    fullName: '全名',
    fullNameKana: '片假名',
    gender: '性別',
    genderMale: '男性',
    genderFemale: '女性',
    age: '年齡',
    birthDate: '出生日期',
    zodiac: '星座',
    bloodType: '血型',
    height: '身高',
    weight: '體重',
    
    // 聯絡方式
    contactTitle: '聯絡方式',
    phoneNumber: '電話號碼',
    phoneType: '電話類型',
    phoneTypeMobile: '手機',
    phoneTypeLandline: '市話',
    areaCode: '區碼',
    email: '電子郵件地址',
    tempEmail: '臨時信箱',
    
    // 信用卡
    creditCardTitle: '信用卡資訊',
    cardType: '卡類型',
    cardNumber: '卡號',
    expiryDate: '到期日',
    cvv: 'CVV',
    bankBin: '銀行BIN碼',
    
    // 職業
    careerTitle: '職業檔案',
    jobTitle: '職位',
    salary: '薪資',
    companyName: '公司名稱',
    companySize: '公司規模',
    industry: '行業',
    employmentStatus: '就業狀態',
    employmentFullTime: '正社員',
    employmentPartTime: '契約社員',
    
    // 個人番號（My Number）
    idCardTitle: '個人番號(My Number)',
    idCardNumber: '個人番號',
    
    // 數位指紋
    fingerprintTitle: '數位指紋',
    os: '作業系統',
    osVersion: '系統版本',
    browser: '瀏覽器',
    userAgent: 'User Agent',
    screenResolution: '螢幕解析度',
    timezone: '時區',
    guid: 'GUID',
    ipAddress: 'IP地址',
    macAddress: 'MAC地址',
    cookiePolicy: 'Cookie政策',
    
    // 匯出選項
    exportTitle: '匯出格式',
    exportJson: '匯出JSON',
    exportCsv: '匯出CSV',
    exportIdCard: '產生住民票圖片',
    exportBusinessCard: '產生名片',
    downloadBtn: '下載',
    copyBtn: '複製',
    viewDetails: '查看詳情',
    
    // 批次產生
    batchTitle: '批次產生',
    quantityLabel: '產生數量',
    quantityPlaceholder: '輸入數量（1-100）',
    
    // 提示訊息
    generating: '正在產生...',
    generated: '產生完成',
    copySuccess: '已複製到剪貼簿',
    downloadSuccess: '下載成功',
    invalidQuantity: '請輸入1-100之間的數字',
    
    // 結果展示
    resultCount: '共產生 {count} 條記錄',
    resultSummary: '產生結果摘要',
    showAll: '顯示全部',
    collapse: '收起',
    
    // 產生選項
    generateOptionsTitle: '產生選項',
    
    // 記錄顯示
    recordLabel: '記錄 #{num}',
    addressLabel: '地址',
    postalCodeLabelDisplay: '郵便番號',
    prefectureLabel: '都道府縣',
    cityLabel: '市區町村',
    townLabel: '町名',
    chomeLabel: '丁目',
    banLabel: '番地',
    goLabel: '號',
    buildingLabel: '建物名',
    floorLabel: '階',
    roomLabel: '室',
    
    // 地址格式
    addressNumber: '號',
    addressFloor: '階',
    addressRoom: '室',
    commercialUnit: '（商業單位）',
    japan: '日本',
    postOfficeBox: '郵政信箱',
    studentDormitory: '學生宿舍',
    teachingBuilding: '教學樓',
    library: '圖書館',
    buildingUnit: '棟',
    
    // 提示訊息
    idCardImageAlert: '住民票圖片產生功能需要canvas實作',
    businessCardAlert: '名片產生功能需要canvas實作',
    
    // 都道府縣
    prefectures: {
        '01': '北海道',
        '02': '青森縣',
        '03': '岩手縣',
        '04': '宮城縣',
        '05': '秋田縣',
        '06': '山形縣',
        '07': '福島縣',
        '08': '茨城縣',
        '09': '栃木縣',
        '10': '群馬縣',
        '11': '埼玉縣',
        '12': '千葉縣',
        '13': '東京都',
        '14': '神奈川縣',
        '15': '新潟縣',
        '16': '富山縣',
        '17': '石川縣',
        '18': '福井縣',
        '19': '山梨縣',
        '20': '長野縣',
        '21': '岐阜縣',
        '22': '靜岡縣',
        '23': '愛知縣',
        '24': '三重縣',
        '25': '滋賀縣',
        '26': '京都府',
        '27': '大阪府',
        '28': '兵庫縣',
        '29': '奈良縣',
        '30': '和歌山縣',
        '31': '鳥取縣',
        '32': '島根縣',
        '33': '岡山縣',
        '34': '廣島縣',
        '35': '山口縣',
        '36': '德島縣',
        '37': '香川縣',
        '38': '愛媛縣',
        '39': '高知縣',
        '40': '福岡縣',
        '41': '佐賀縣',
        '42': '長崎縣',
        '43': '熊本縣',
        '44': '大分縣',
        '45': '宮崎縣',
        '46': '鹿兒島縣',
        '47': '沖繩縣'
    },
    
    // 市區町村
    cities: {
        '01': {
            sapporo: '札幌市',
            asahikawa: '旭川市',
            hakodate: '函館市',
            obihiro: '帶廣市'
        },
        '04': {
            sendai: '仙台市',
            shiogama: '鹽釜市',
            ishinomaki: '石卷市'
        },
        '13': {
            chiyoda: '千代田區',
            chuo: '中央區',
            minato: '港區',
            shinjuku: '新宿區',
            shibuya: '澀谷區',
            shinagawa: '品川區',
            meguro: '目黑區',
            setagaya: '世田谷區',
            ota: '大田區',
            nerima: '練馬區'
        },
        '14': {
            yokohama: '橫濱市',
            kawasaki: '川崎市',
            sagamihara: '相模原市',
            fujisawa: '藤澤市'
        },
        '23': {
            nagoya: '名古屋市',
            toyohashi: '豐橋市',
            okazaki: '岡崎市'
        },
        '26': {
            kyoto: '京都市',
            utsunomiya: '宇治市'
        },
        '27': {
            osaka: '大阪市',
            sakai: '堺市',
            hirakata: '枚方市',
            toyonaka: '豐中市'
        },
        '28': {
            kobe: '神戶市',
            himeji: '姬路市',
            amagasaki: '尼崎市'
        },
        '40': {
            fukuoka: '福岡市',
            kitakyushu: '北九州市',
            kurume: '久留米市'
        },
        '47': {
            naha: '那霸市',
            okinawa: '沖繩市'
        }
    },
    
    // 大學名稱
    universities: {
        UTokyo: '東京大學',
        KyotoU: '京都大學',
        OsakaU: '大阪大學',
        TohokuU: '東北大學',
        NagoyaU: '名古屋大學',
        KyushuU: '九州大學',
        HokkaidoU: '北海道大學',
        Keio: '慶應義塾大學',
        Waseda: '早稻田大學'
    },
    
    // 血型
    bloodTypes: {
        A: 'A型',
        B: 'B型',
        O: 'O型',
        AB: 'AB型'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        postalCode: '郵便番號',
        prefecture: '都道府縣',
        city: '市區町村',
        town: '町名',
        building: '建物名',
        fullName: '姓名',
        fullNameKana: '片假名',
        gender: '性別',
        age: '年齡',
        birthDate: '出生日期',
        phone: '電話',
        email: '電子郵件',
        cardType: '卡類型',
        cardNumber: '卡號',
        idCardNumber: '個人番號'
    }
};
