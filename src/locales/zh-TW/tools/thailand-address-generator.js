export default {
    name: '泰國地址生成器 - 線上生成真實泰國地址、身份資訊與聯絡方式',
    description: '免費線上泰國地址生成器，生成真實格式的泰國地址、身份證號、電話、信用卡號等完整身份檔案。支援按省份篩選，匯出JSON/CSV格式，純前端執行保護隱私。',
    inputTitle: '生成設定',
    outputTitle: '生成結果',
    generateBtn: '生成資料',
    loadSampleBtn: '載入範例並生成',
    clearAll: '清除全部',
    noOutput: '暫無生成結果',
    preview: '預覽資料',
    
    // 地理篩選
    locationTitle: '地理位置篩選',
    selectRegion: '選擇省份',
    allRegions: '全部省份',
    postalCodeLabel: '郵遞區號',
    validatePostalCode: '驗證郵遞區號',
    
    // 地址類型
    addressTypeTitle: '地址類型',
    addressTypeResidential: '住宅地址',
    addressTypeCommercial: '商業地址',
    addressTypeVirtual: '虛擬郵箱',
    addressTypeCampus: '大學校園',
    
    // 身份資訊
    identityTitle: '身份資訊',
    fullName: '全名',
    gender: '性別',
    genderMale: '男性',
    genderFemale: '女性',
    age: '年齡',
    birthDate: '出生日期',
    zodiac: '星座',
    height: '身高',
    weight: '體重',
    
    // 聯絡方式
    contactTitle: '聯絡方式',
    phoneNumber: '電話號碼',
    phoneType: '電話類型',
    phoneTypeMobile: '手機',
    phoneTypeLandline: '市話',
    areaCode: '區號',
    email: '電子郵件',
    tempEmail: '臨時郵箱',
    
    // 信用卡
    creditCardTitle: '信用卡資訊',
    cardType: '卡片類型',
    cardNumber: '卡號',
    expiryDate: '有效期限',
    cvv: 'CVV',
    bankBin: '銀行BIN碼',
    
    // 職業
    careerTitle: '職業檔案',
    jobTitle: '職位',
    salary: '薪資',
    companyName: '公司名稱',
    companySize: '公司規模',
    industry: '產業',
    employmentStatus: '就業狀態',
    employmentFullTime: '全職',
    employmentPartTime: '兼職',
    
    // 身份證
    idCardTitle: '泰國身份證',
    idCardNumber: '身份證號碼',
    
    // 數位指紋
    fingerprintTitle: '數位指紋',
    os: '作業系統',
    osVersion: '系統版本',
    browser: '瀏覽器',
    userAgent: 'User Agent',
    screenResolution: '螢幕解析度',
    timezone: '時區',
    guid: 'GUID',
    ipAddress: 'IP位址',
    macAddress: 'MAC位址',
    cookiePolicy: 'Cookie政策',
    
    // 匯出選項
    exportTitle: '匯出格式',
    exportJson: '匯出JSON',
    exportCsv: '匯出CSV',
    downloadBtn: '下載',
    copyBtn: '複製',
    viewDetails: '檢視詳情',
    
    // 批次生成
    batchTitle: '批次生成',
    quantityLabel: '生成數量',
    quantityPlaceholder: '輸入數量（1-100）',
    
    // 提示資訊
    generating: '正在生成...',
    generated: '生成完成',
    copySuccess: '已複製到剪貼簿',
    downloadSuccess: '下載成功',
    invalidQuantity: '請輸入1-100之間的數字',
    
    // 結果展示
    resultCount: '共生成 {count} 條記錄',
    resultSummary: '生成結果摘要',
    showAll: '顯示全部',
    collapse: '收起',
    
    // 生成選項
    generateOptionsTitle: '生成選項',
    
    // 記錄顯示
    recordLabel: '記錄 #{num}',
    addressLabel: '地址',
    streetLabel: '街道',
    houseNumberLabel: '門牌號',
    buildingLabel: '建築',
    floorLabel: '樓層',
    unitLabel: '單位',
    regionLabel: '省份',
    postalCode: '郵遞區號',
    
    // 地址格式
    addressNumber: '號',
    addressFloor: '樓',
    addressUnit: '室',
    commercialUnit: '（商業單位）',
    thailand: '泰國',
    postOfficeBox: '郵政信箱',
    studentDormitory: '學生宿舍',
    teachingBuilding: '教學樓',
    library: '圖書館',
    buildingUnit: '座',
    apartment: '公寓',
    
    // 省份名（泰國76個省+曼谷，列出主要省份）
    regions: {
        'Bangkok': '曼谷',
        'Chiang Mai': '清邁府',
        'Phuket': '普吉府',
        'Pattaya': '芭達雅',
        'Nonthaburi': '暖武里府',
        'Pathum Thani': '巴吞他尼府',
        'Samut Prakan': '北欖府',
        'Nakhon Ratchasima': '呵叻府',
        'Chiang Rai': '清萊府',
        'Khon Kaen': '孔敬府',
        'Nakhon Si Thammarat': '那空是貪瑪叻府',
        'Surat Thani': '素叻他尼府',
        'Udon Thani': '烏隆他尼府',
        'Rayong': '羅勇府',
        'Lampang': '南邦府',
        'Nakhon Pathom': '佛統府',
        'Ayutthaya': '大城府',
        'Chanthaburi': '尖竹汶府',
        'Trat': '達叻府',
        'Kanchanaburi': '北碧府'
    },
    
    // 大學名
    universities: {
        'CU': '朱拉隆功大學',
        'TU': '瑪希隆大學',
        'KU': ' kasetsart大學',
        'TU': '泰國國立法政大學',
        'KMUTT': '國王科技大學',
        'KMUTNB': '北曼谷先驅科技大學',
        'SIIT': '詩琳通國際工學院',
        'AIT': '亞洲理工學院',
        'ABAC': '易三倉大學'
    },
    
    // CSV欄位名稱
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '門牌號',
        building: '建築',
        floor: '樓層',
        unit: '單位',
        region: '省份',
        postalCode: '郵遞區號',
        fullName: '姓名',
        gender: '性別',
        age: '年齡',
        birthDate: '出生日期',
        phone: '電話',
        email: '電子郵件',
        cardType: '卡片類型',
        cardNumber: '卡號',
        idCardNumber: '身份證號'
    }
};