export default {
    name: '荷蘭地址產生器 - 線上產生真實荷蘭地址、身份資訊與聯絡方式',
    description: '免費線上荷蘭地址產生器，產生真實格式的荷蘭地址、身份證號、電話、信用卡號等完整身份檔案。支援按省份篩選，匯出JSON/CSV格式，純前端運行保護隱私。',
    inputTitle: '產生設定',
    outputTitle: '產生結果',
    generateBtn: '產生資料',
    loadSampleBtn: '載入範例並產生',
    clearAll: '清除全部',
    noOutput: '暫無產生結果',
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
    phoneTypeLandline: '市話',
    areaCode: '區號',
    email: '電子郵件',
    tempEmail: '臨時電子郵件',
    
    // 信用卡
    creditCardTitle: '信用卡資訊',
    cardType: '卡類型',
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
    idCardTitle: '荷蘭身份證',
    idCardNumber: '身份證號碼',
    bsnNumber: 'BSN號碼',
    
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
    viewDetails: '查看詳情',
    
    // 批次產生
    batchTitle: '批次產生',
    quantityLabel: '產生數量',
    quantityPlaceholder: '輸入數量（1-100）',
    
    // 提示資訊
    generating: '正在產生...',
    generated: '產生完成',
    copySuccess: '已複製到剪貼簿',
    downloadSuccess: '下載成功',
    invalidQuantity: '請輸入1-100之間的數字',
    
    // 結果展示
    resultCount: '共產生 {count} 筆記錄',
    resultSummary: '產生結果摘要',
    showAll: '顯示全部',
    collapse: '收合',
    
    // 產生選項
    generateOptionsTitle: '產生選項',
    
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
    netherlands: '荷蘭',
    postOfficeBox: '郵政信箱',
    studentDormitory: '學生宿舍',
    teachingBuilding: '教學樓',
    library: '圖書館',
    buildingUnit: '座',
    apartment: '公寓',
    
    // 省份名（荷蘭12個省）
    regions: {
        'Noord-Holland': '北荷蘭省',
        'Zuid-Holland': '南荷蘭省',
        'Utrecht': '烏特勒支省',
        'Gelderland': '海爾德蘭省',
        'Overijssel': '上艾瑟爾省',
        'Flevoland': '弗萊福蘭省',
        'Friesland': '弗里斯蘭省',
        'Drenthe': '德倫特省',
        'Groningen': '格羅寧根省',
        'Limburg': '林堡省',
        'Noord-Brabant': '北布拉班特省',
        'Zeeland': '澤蘭省'
    },
    
    // 大學名
    universities: {
        'UvA': '阿姆斯特丹大學',
        'VU': '阿姆斯特丹自由大學',
        'TU': '代爾夫特理工大學',
        'UU': '烏特勒支大學',
        'EUR': '鹿特丹伊拉斯謨大學',
        'RUG': '格羅寧根大學',
        'WUR': '瓦赫寧根大學',
        'UL': '萊頓大學',
        'RU': '內梅亨大學',
        'UM': '馬斯特里赫特大學'
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
        cardType: '卡類型',
        cardNumber: '卡號',
        idCardNumber: '身份證號'
    }
};