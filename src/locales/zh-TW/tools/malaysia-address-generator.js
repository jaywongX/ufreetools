export default {
    name: '馬來西亞地址生成器 - 線上生成真實馬來西亞地址、身份資訊與聯絡方式',
    description: '免費線上馬來西亞地址生成器，生成真實格式的馬來西亞地址、MyKad號碼、電話號碼、信用卡號碼等完整身份檔案。支援按州篩選，導出JSON/CSV格式，純前端運行保護隱私。',
    inputTitle: '生成配置',
    outputTitle: '生成結果',
    generateBtn: '生成資料',
    loadSampleBtn: '載入範例並生成',
    clearAll: '清除全部',
    noOutput: '暫無生成結果',
    preview: '預覽資料',
    
    // 地理篩選
    locationTitle: '地理位置篩選',
    selectRegion: '選擇州',
    allRegions: '全部州',
    postalCodeLabel: '郵遞區號',
    validatePostalCode: '驗證郵遞區號',
    
    // 地址類型
    addressTypeTitle: '地址類型',
    addressTypeResidential: '住宅地址',
    addressTypeCommercial: '商業地址',
    addressTypeVirtual: '虛擬信箱',
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
    phoneTypeLandline: '座機',
    areaCode: '區號',
    email: '電子郵件地址',
    tempEmail: '臨時電子郵件',
    
    // 信用卡
    creditCardTitle: '信用卡資訊',
    cardType: '卡類型',
    cardNumber: '卡號',
    expiryDate: '過期日期',
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
    employmentFullTime: '全職',
    employmentPartTime: '兼職',
    
    // 身份證
    idCardTitle: '馬來西亞身份證',
    idCardNumber: '身份證號碼',
    mykadNumber: 'MyKad號碼',
    
    // 數字指紋
    fingerprintTitle: '數字指紋',
    os: '作業系統',
    osVersion: '系統版本',
    browser: '瀏覽器',
    userAgent: 'User Agent',
    screenResolution: '螢幕解析度',
    timezone: '時區',
    guid: 'GUID',
    ipAddress: 'IP位址',
    macAddress: 'MAC位址',
    cookiePolicy: 'Cookie策略',
    
    // 導出選項
    exportTitle: '導出格式',
    exportJson: '導出JSON',
    exportCsv: '導出CSV',
    downloadBtn: '下載',
    copyBtn: '複製',
    viewDetails: '查看詳情',
    
    // 批次生成
    batchTitle: '批次生成',
    quantityLabel: '生成數量',
    quantityPlaceholder: '輸入數量（1-100）',
    
    // 提示訊息
    generating: '正在生成...',
    generated: '生成完成',
    copySuccess: '已複製到剪貼簿',
    downloadSuccess: '下載成功',
    invalidQuantity: '請輸入1-100之間的數字',
    
    // 結果展示
    resultCount: '共生成 {count} 筆記錄',
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
    regionLabel: '州',
    postalCode: '郵遞區號',
    
    // 地址格式
    addressNumber: '號',
    addressFloor: '樓',
    addressUnit: '室',
    commercialUnit: '（商業單位）',
    malaysia: '馬來西亞',
    postOfficeBox: '郵政信箱',
    studentDormitory: '學生宿舍',
    teachingBuilding: '教學樓',
    library: '圖書館',
    buildingUnit: '座',
    apartment: '公寓',
    
    // 州名（馬來西亞13個州+3個聯邦直轄區）
    regions: {
        'Johor': '柔佛州',
        'Kedah': '吉打州',
        'Kelantan': '吉蘭丹州',
        'Malacca': '馬六甲州',
        'Negeri Sembilan': '森美蘭州',
        'Pahang': '彭亨州',
        'Penang': '檳城州',
        'Perak': '霹靂州',
        'Perlis': '玻璃市州',
        'Sabah': '沙巴州',
        'Sarawak': '砂拉越州',
        'Selangor': '雪蘭莪州',
        'Terengganu': '登嘉樓州',
        'Kuala Lumpur': '吉隆坡聯邦直轄區',
        'Putrajaya': '布城聯邦直轄區',
        'Labuan': '納閩聯邦直轄區'
    },
    
    // 大學名
    universities: {
        'UM': '馬來亞大學',
        'UKM': '國民大學',
        'UPM': '博特拉大學',
        'USM': '理科大學',
        'UTM': '工藝大學',
        'UUM': '北方大學',
        'UMS': '沙巴大學',
        'UMK': '吉蘭丹大學',
        'UPSI': '蘇丹依德理斯教育大學'
    },
    
    // CSV欄位名稱
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '門牌號',
        building: '建築',
        floor: '樓層',
        unit: '單位',
        region: '州',
        postalCode: '郵遞區號',
        fullName: '姓名',
        gender: '性別',
        age: '年齡',
        birthDate: '出生日期',
        phone: '電話',
        email: '電子郵件',
        cardType: '卡類型',
        cardNumber: '卡號',
        idCardNumber: '身份證號碼'
    }
};