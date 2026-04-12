export default {
    name: '德國地址產生器 - 線上產生真實德國地址、身分資訊與聯絡方式',
    description: '免費線上德國地址產生器，產生真實格式的德國地址、身分證號、電話、信用卡號等完整身分檔案。支援按邦篩選，匯出JSON/CSV格式，純前端執行保護隱私。',
    inputTitle: '產生配置',
    outputTitle: '產生結果',
    generateBtn: '產生資料',
    loadSampleBtn: '載入範例並產生',
    clearAll: '清除全部',
    noOutput: '暫無產生結果',
    preview: '預覽資料',
    
    // 地理篩選
    locationTitle: '地理位置篩選',
    selectState: '選擇聯邦州',
    selectCity: '選擇城市',
    allStates: '全部聯邦州',
    allCities: '全部城市',
    
    // 地址類型
    addressTypeTitle: '地址類型',
    addressTypeResidential: '住宅地址',
    addressTypeCommercial: '商業地址',
    addressTypePoBox: '郵政信箱',
    addressTypeCampus: '大學校園',
    
    // 身分資訊
    identityTitle: '身分資訊',
    fullName: '全名',
    firstName: '名',
    lastName: '姓',
    gender: '性別',
    genderMale: '男性',
    genderFemale: '女性',
    age: '年齡',
    birthDate: '出生日期',
    height: '身高',
    weight: '體重',
    
    // 聯絡方式
    contactTitle: '聯絡方式',
    phoneNumber: '電話號碼',
    phoneType: '電話類型',
    phoneTypeMobile: '手機',
    phoneTypeLandline: '市話',
    areaCode: '區碼',
    email: '電子郵件',
    tempEmail: '臨時郵箱',
    
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
    
    // 身分證
    idCardTitle: '德國身分證(Personalausweis)',
    idCardNumber: '身分證號碼',
    
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
    
    // 提示訊息
    generating: '正在產生...',
    generated: '產生完成',
    copySuccess: '已複製到剪貼簿',
    downloadSuccess: '下載成功',
    invalidQuantity: '請輸入1-100之間的數字',
    
    // 結果顯示
    resultCount: '共產生 {count} 條記錄',
    resultSummary: '產生結果摘要',
    showAll: '顯示全部',
    collapse: '收起',
    
    // 產生選項
    generateOptionsTitle: '產生選項',
    
    // 記錄顯示
    recordLabel: '記錄 #{num}',
    addressLabel: '地址',
    streetLabel: '街道',
    houseNumberLabel: '門牌號',
    postalCodeLabel: '郵遞區號',
    cityLabel: '城市',
    stateLabel: '聯邦州',
    
    // 地址格式
    commercialArea: '商業區',
    studentDormitory: '學生宿舍',
    library: '圖書館',
    
    // 德國16個聯邦州
    states: {
        BW: '巴登-符騰堡州',
        BY: '巴伐利亞州',
        BE: '柏林',
        BB: '布蘭登堡州',
        HB: '不萊梅',
        HH: '漢堡',
        HE: '黑森州',
        MV: '梅克倫堡-前波美拉尼亞州',
        NI: '下薩克森州',
        NW: '北萊茵-威斯特法倫州',
        RP: '萊茵蘭-普法爾茨州',
        SL: '薩爾州',
        SN: '薩克森州',
        ST: '薩克森-安哈特州',
        SH: '什勒斯維希-霍爾斯坦州',
        TH: '圖林根州'
    },
    
    // 大學名稱
    universities: {
        TUM: '慕尼黑工業大學',
        LMU: '慕尼黑大學',
        HU: '柏林洪堡大學',
        TU: '柏林工業大學',
        UniHeidelberg: '海德堡大學'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '門牌號',
        postalCode: '郵遞區號',
        city: '城市',
        state: '聯邦州',
        fullName: '姓名',
        gender: '性別',
        age: '年齡',
        birthDate: '出生日期',
        phone: '電話',
        email: '郵箱',
        cardType: '卡類型',
        cardNumber: '卡號',
        idCardNumber: '身分證號'
    }
};
