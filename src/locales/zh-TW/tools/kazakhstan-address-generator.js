export default {
    name: '哈薩克斯坦地址產生器 - 線上產生真實哈薩克斯坦地址、身分資訊與聯繫方式',
    description: '免費線上哈薩克斯坦地址產生器，產生真實格式的哈薩克斯坦地址、身分證號、電話、信用卡號等完整身分檔案。支援依州/城市篩選，匯出JSON/CSV格式，純前端運行保護隱私。',
    inputTitle: '產生設定',
    outputTitle: '產生結果',
    generateBtn: '產生資料',
    loadSampleBtn: '載入範例並產生',
    clearAll: '清除全部',
    noOutput: '暫無產生結果',
    preview: '預覽資料',
    
    // 地理篩選
    locationTitle: '地理位置篩選',
    selectRegion: '選擇州/直轄市',
    selectCity: '選擇城市',
    allRegions: '全部州/直轄市',
    allCities: '全部城市',
    postalCodeLabel: '郵遞區號',
    
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
    
    // 身分證
    idCardTitle: '哈薩克斯坦身分證',
    idCardNumber: '身分證號碼（ИИН）',
    
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
    buildingLabel: '建築',
    floorLabel: '樓層',
    unitLabel: '單位',
    regionLabel: '州/直轄市',
    
    // 地址格式
    addressFloor: '樓',
    addressUnit: '室',
    commercialUnit: '（商業單位）',
    postOfficeBox: '郵政信箱',
    studentDormitory: '學生宿舍',
    teachingBuilding: '教學樓',
    library: '圖書館',
    buildingUnit: '座',
    
    // 州名
    regions: {
        NUR: '阿斯塔納（努爾蘇丹）',
        ALA: '阿拉木圖',
        SHY: '奇姆肯特',
        AKM: '阿克莫拉州',
        AKT: '阿克托別州',
        ATY: '阿特勞州',
        MAN: '曼格斯套州',
        PAV: '巴甫洛達爾州',
        SKZ: '南哈薩克斯坦州',
        KUS: '庫斯塔奈州',
        KAR: '卡拉干達州',
        ZAP: '西哈薩克斯坦州',
        MNG: '江布爾州',
        TUR: '阿拉木圖州',
        YUZ: '克孜勒奧爾達州',
        VOS: '東哈薩克斯坦州',
        ZHE: '傑茲卡茲甘州'
    },
    
    // 城市名
    cities: {
        NUR: {
            nursultan: '阿斯塔納'
        },
        ALA: {
            almaty: '阿拉木圖'
        },
        SHY: {
            shymkent: '奇姆肯特'
        },
        AKM: {
            akmola: '阿克莫拉',
            kokshetau: '科克舍套'
        },
        AKT: {
            aktobe: '阿克托別'
        },
        ATY: {
            atyrau: '阿特勞'
        },
        MAN: {
            aktau: '阿克套'
        },
        PAV: {
            pavlodar: '巴甫洛達爾'
        },
        SKZ: {
            turkestan: '突厥斯坦'
        },
        KUS: {
            kostanay: '庫斯塔奈'
        },
        KAR: {
            karaganda: '卡拉干達'
        },
        ZAP: {
            uralsk: '烏拉爾斯克'
        },
        MNG: {
            taraz: '塔拉茲'
        },
        TUR: {
            taldykorgan: '塔爾迪庫爾干'
        },
        YUZ: {
            kyzylorda: '克孜勒奧爾達'
        },
        VOS: {
            'ust-kamenogorsk': '烏斯季卡緬諾戈爾斯克'
        },
        ZHE: {
            temirtau: '鐵米爾套'
        }
    },
    
    // CSV欄位名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '門牌號',
        building: '建築',
        floor: '樓層',
        unit: '單位',
        region: '州/直轄市',
        postalCode: '郵遞區號',
        fullName: '姓名',
        gender: '性別',
        age: '年齡',
        birthDate: '出生日期',
        phone: '電話',
        email: '信箱',
        cardType: '卡類型',
        cardNumber: '卡號',
        idCardNumber: '身分證號'
    }
};