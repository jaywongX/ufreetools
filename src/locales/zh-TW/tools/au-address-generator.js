export default {
    name: '澳大利亞地址生成器 - 在線生成真實澳大利亞地址、身份信息與聯繫方式',
    description: '免費在線澳大利亞地址生成器，生成真實格式的澳大利亞地址、電話、信用卡號等完整身份檔案。支持按州篩選，導出JSON/CSV格式，純前端運行保護隱私。',
    inputTitle: '生成配置',
    outputTitle: '生成結果',
    generateBtn: '生成數據',
    loadSampleBtn: '加載示例並生成',
    clearAll: '清除全部',
    noOutput: '暫無生成結果',
    preview: '預覽數據',
    
    // 地理篩選
    locationTitle: '地理位置篩選',
    selectState: '選擇州/領地',
    selectCity: '選擇城市',
    allStates: '全部州/領地',
    allCities: '全部城市',
    postalCodeLabel: '郵政編碼',
    validatePostalCode: '驗證郵編',
    
    // 地址類型
    addressTypeTitle: '地址類型',
    addressTypeResidential: '住宅地址',
    addressTypeCommercial: '商業地址',
    addressTypePoBox: '郵政信箱',
    addressTypeCampus: '大學校園',
    
    // 身份信息
    identityTitle: '身份信息',
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
    phoneTypeLandline: '座機',
    areaCode: '區號',
    email: '郵箱地址',
    tempEmail: '臨時郵箱',
    
    // 信用卡
    creditCardTitle: '信用卡信息',
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
    
    // 稅號
    taxFileTitle: '澳大利亞稅號',
    taxFileNumber: '稅號(TFN)',
    
    // 數字指紋
    fingerprintTitle: '數字指紋',
    os: '操作系統',
    osVersion: '系統版本',
    browser: '瀏覽器',
    userAgent: 'User Agent',
    screenResolution: '屏幕分辨率',
    timezone: '時區',
    guid: 'GUID',
    ipAddress: 'IP地址',
    macAddress: 'MAC地址',
    cookiePolicy: 'Cookie策略',
    
    // 導出選項
    exportTitle: '導出格式',
    exportJson: '導出JSON',
    exportCsv: '導出CSV',
    downloadBtn: '下載',
    copyBtn: '複製',
    viewDetails: '查看詳情',
    
    // 批量生成
    batchTitle: '批量生成',
    quantityLabel: '生成數量',
    quantityPlaceholder: '輸入數量（1-100）',
    
    // 提示信息
    generating: '正在生成...',
    generated: '生成完成',
    copySuccess: '已複製到剪貼板',
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
    streetNumberLabel: '門牌號',
    suburbLabel: '郊區',
    stateLabel: '州',
    postcodeLabel: '郵編',
    unitLabel: '單元',
    
    // 地址格式
    addressNumber: '號',
    addressFloor: '樓',
    addressUnit: '室',
    commercialUnit: '（商業單位）',
    australia: '澳大利亞',
    postOfficeBox: '郵政信箱',
    studentDormitory: '學生宿舍',
    academicBuilding: '教學樓',
    library: '圖書館',
    buildingUnit: '座',
    
    // 州名
    states: {
        NSW: '新南威爾士州',
        VIC: '維多利亞州',
        QLD: '昆士蘭州',
        WA: '西澳大利亞州',
        SA: '南澳大利亞州',
        TAS: '塔斯馬尼亞州',
        ACT: '澳大利亞首都領地',
        NT: '北領地'
    },
    
    // 城市名
    cities: {
        NSW: {
            sydney: '悉尼',
            newcastle: '紐卡斯爾',
            wollongong: '臥龍崗',
            centralCoast: '中央海岸',
            canberra: '堪培拉'
        },
        VIC: {
            melbourne: '墨爾本',
            geelong: '吉朗',
            ballarat: '巴拉瑞特',
            bendigo: '本迪戈'
        },
        QLD: {
            brisbane: '布里斯班',
            goldCoast: '黃金海岸',
            sunshineCoast: '陽光海岸',
            townsville: '湯斯維爾',
            cairns: '凱恩斯'
        },
        WA: {
            perth: '珀斯',
            fremantle: '弗里曼特爾',
            mandurah: '曼杜拉'
        },
        SA: {
            adelaide: '阿德萊德',
            mountGambier: '甘比爾山',
            whyalla: '懷阿拉'
        },
        TAS: {
            hobart: '霍巴特',
            launceston: '朗塞斯頓',
            devonport: '德文波特'
        },
        ACT: {
            canberra: '堪培拉',
            queanbeyan: '昆比恩'
        },
        NT: {
            darwin: '達爾文',
            aliceSprings: '愛麗斯泉',
            palmerston: '帕默斯頓'
        }
    },
    
    // 大學
    universities: {
        USYD: '悉尼大學',
        UNSW: '新南威爾士大學',
        UMELB: '墨爾本大學',
        UQ: '昆士蘭大學',
        ANU: '澳大利亞國立大學'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        streetNumber: '門牌號',
        suburb: '郊區',
        state: '州',
        postcode: '郵編',
        fullName: '姓名',
        gender: '性別',
        age: '年齡',
        birthDate: '出生日期',
        phone: '電話',
        email: '郵箱',
        cardType: '卡類型',
        cardNumber: '卡號',
        taxFileNumber: '稅號'
    }
};
