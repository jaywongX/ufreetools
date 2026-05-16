export default {
    name: '墨西哥地址產生器 - 線上產生真實墨西哥地址、身分資訊與聯繫方式',
    description: '免費線上墨西哥地址產生器，產生真實格式的墨西哥地址、RFC/CURP身分證號、電話、信用卡號等完整身分檔案。支援依州/城市篩選，匯出JSON/CSV格式，純前端運行保護隱私。',
    inputTitle: '產生設定',
    outputTitle: '產生結果',
    generateBtn: '產生資料',
    loadSampleBtn: '載入範例並產生',
    clearAll: '清除全部',
    noOutput: '暫無產生結果',
    preview: '預覽資料',
    
    // 地理篩選
    locationTitle: '地理位置篩選',
    selectState: '選擇州',
    selectCity: '選擇城市',
    allStates: '全部州',
    allCities: '全部城市',
    
    // 地址類型
    addressTypeTitle: '地址類型',
    addressTypeResidential: '住宅地址',
    addressTypeCommercial: '商業地址',
    addressTypeVirtual: '虛擬信箱',
    addressTypeCampus: '大學校園',
    
    // 身分資訊
    identityTitle: '身分資訊',
    fullName: '全名',
    gender: '性別',
    genderMale: '男性',
    genderFemale: '女性',
    age: '年齡',
    birthDate: '出生日期',
    zodiac: '星座',
    height: '身高',
    weight: '體重',
    
    // 聯繫方式
    contactTitle: '聯繫方式',
    phoneNumber: '電話號碼',
    phoneType: '電話類型',
    phoneTypeMobile: '手機',
    phoneTypeLandline: '市話',
    areaCode: '區碼',
    email: '電子信箱',
    tempEmail: '臨時信箱',
    
    // 信用卡
    creditCardTitle: '信用卡資訊',
    cardType: '卡類型',
    cardNumber: '卡號',
    expiryDate: '到期日期',
    cvv: 'CVV',
    bankBin: '銀行BIN碼',
    
    // 職業
    careerTitle: '職業檔案',
    jobTitle: '職稱',
    salary: '薪資',
    companyName: '公司名稱',
    companySize: '公司規模',
    industry: '產業',
    employmentStatus: '就業狀態',
    employmentFullTime: '全職',
    employmentPartTime: '兼職',
    
    // 身分證
    idCardTitle: '墨西哥身分證',
    rfcLabel: 'RFC（聯邦納稅人登記號）',
    curpLabel: 'CURP（人口登記唯一密鑰）',
    
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
    neighborhoodLabel: '街區',
    postalCodeLabel: '郵遞區號',
    cityLabel: '城市',
    stateLabel: '州',
    
    // 地址格式
    commercialAddress: '（商業地址）',
    postOfficeBox: '郵政信箱',
    studentDormitory: '學生宿舍',
    teachingBuilding: '教學樓',
    library: '圖書館',
    
    // 墨西哥32個州
    states: {
        AGS: '阿瓜斯卡連特斯州',
        BCN: '下加利福尼亞州',
        BCS: '南下加利福尼亞州',
        CAMP: '坎佩切州',
        COAH: '科阿韋拉州',
        COL: '科利馬州',
        CHIS: '恰帕斯州',
        CHIH: '奇瓦瓦州',
        CDMX: '墨西哥城',
        DUR: '杜蘭戈州',
        GTO: '瓜納華托州',
        GRO: '格雷羅州',
        HGO: '伊達爾戈州',
        JAL: '哈利斯科州',
        MEX: '墨西哥州',
        MIC: '米卻肯州',
        MOR: '莫雷洛斯州',
        NAY: '納亞里特州',
        NLE: '新萊昂州',
        OAX: '瓦哈卡州',
        PUE: '普埃布拉州',
        QRO: '克雷塔羅州',
        QROO: '金塔納羅奧州',
        SLP: '聖路易斯波托西州',
        SIN: '錫那羅亞州',
        SON: '索諾拉州',
        TAB: '塔巴斯科州',
        TAM: '塔毛利帕斯州',
        TLAX: '特拉斯卡拉州',
        VER: '韋拉克魯斯州',
        YUC: '尤卡坦州',
        ZAC: '薩卡特卡斯州'
    },
    
    // 大學名
    universities: {
        UNAM: '墨西哥國立自治大學',
        IPN: '墨西哥國立理工學院',
        UdeG: '瓜達拉哈拉大學',
        UANL: '新萊昂自治大學'
    },
    
    // CSV欄位名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '門牌號',
        neighborhood: '街區',
        postalCode: '郵遞區號',
        city: '城市',
        state: '州',
        fullName: '姓名',
        gender: '性別',
        age: '年齡',
        birthDate: '出生日期',
        phone: '電話',
        email: '信箱',
        cardType: '卡類型',
        cardNumber: '卡號',
        rfc: 'RFC',
        curp: 'CURP'
    }
};