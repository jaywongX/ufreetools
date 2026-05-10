export default {
    name: '芬蘭地址產生器 - 線上產生真實芬蘭地址、身份資訊與聯絡方式',
    description: '免費線上芬蘭地址產生器，產生真實格式的芬蘭地址、身份證號、電話、信用卡號等完整身份檔案。支援按大區篩選，匯出JSON/CSV格式，純前端運行保護隱私。',
    inputTitle: '產生設定',
    outputTitle: '產生結果',
    generateBtn: '產生資料',
    loadSampleBtn: '載入範例並產生',
    clearAll: '清除全部',
    noOutput: '暫無產生結果',
    preview: '預覽資料',
    
    // 地理篩選
    locationTitle: '地理位置篩選',
    selectRegion: '選擇大區',
    selectMunicipality: '選擇市鎮',
    allRegions: '全部大區',
    allMunicipalities: '全部市鎮',
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
    idCardTitle: '芬蘭身份證',
    idCardNumber: '身份證號碼',
    henkilötunnus: '個人身份號碼',
    serialNumber: '序列號',
    checkDigit: '校驗碼',
    
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
    exportIdCard: '產生身份證圖片',
    exportBusinessCard: '產生名片',
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
    municipalityLabel: '市鎮',
    regionLabel: '大區',
    postalCode: '郵遞區號',
    
    // 地址格式
    addressNumber: '號',
    addressFloor: '樓',
    addressUnit: '室',
    commercialUnit: '（商業單位）',
    finland: '芬蘭',
    postOfficeBox: '郵政信箱',
    studentDormitory: '學生宿舍',
    teachingBuilding: '教學樓',
    library: '圖書館',
    buildingUnit: '座',
    apartment: '公寓',
    
    // 提示資訊
    idCardImageAlert: '身份證圖片生成功能需要canvas實作',
    businessCardAlert: '名片生成功能需要canvas實作',
    
    // 大區名（芬蘭5個大區）
    regions: {
        Uusimaa: '新地區',
        Pirkanmaa: '皮爾卡馬',
        VarsinaisSuomi: '本部芬蘭',
        PohjoisPohjanmaa: '北波的尼亞',
        KeskiSuomi: '中芬蘭',
        PäijätHäme: '於韋斯屈萊地區',
        KantaHäme: '坎塔哈梅',
        EteläKarjala: '南卡累利阿',
        PohjoisKarjala: '北卡累利阿',
        PohjoisSavo: '北薩沃',
        EteläSavo: '南薩沃',
        Kainuu: '凱努',
        KeskiPohjanmaa: '中波的尼亞',
        EteläPohjanmaa: '南波的尼亞',
        Satakunta: '薩塔昆塔',
        Ahvenanmaa: '奧蘭',
        Lapland: '拉普蘭'
    },
    
    // 市鎮資料（以新地區大區為例）
    municipalitiesData: {
        Uusimaa: {
            helsinki: '赫爾辛基',
            espoo: '埃斯波',
            vantaa: '萬塔',
            kauniainen: '考尼艾寧',
            järvenpää: '耶爾文佩',
            kerava: '凱拉瓦',
            tuusula: '圖蘇拉',
            nurmijärvi: '努爾米耶爾維',
            lyly: '林利耶爾維',
            sipoo: '西波'
        },
        Pirkanmaa: {
            tampere: '坦佩雷',
            Nokia: '諾基亞',
            ylöjärvi: '於勒耶爾維',
            kangasala: '康加薩拉',
            lempäälä: '倫帕艾萊',
            pirkkala: '皮爾卡拉',
            orivesi: '奧里韋西',
            hängenkyrö: '杭根屈呂'
        },
        VarsinaisSuomi: {
            turku: '圖爾庫',
            rauma: '勞馬',
            salo: '薩洛',
            pori: '波里',
            kaarina: '卡里納',
            littoinen: '利托伊寧',
            raisio: '拉伊西奧',
            naantali: '納坦利'
        },
        KeskiSuomi: {
            jyväskylä: '於韋斯屈萊',
            jyväskylänML: '於韋斯屈萊農村',
            lahti: '拉赫蒂',
            hollola: '霍洛拉',
            hrmeentti: '赫爾門蒂',
            asikkala: '阿西卡拉'
        },
        PäijätHäme: {
            lahti: '拉赫蒂',
            hollola: '霍洛拉',
            hrmeentti: '赫爾門蒂',
            asikkala: '阿西卡拉',
            pertunmaa: '佩爾圖恩馬',
            hartola: '哈托拉'
        }
    },
    
    // 大學名
    universities: {
        HY: '赫爾辛基大學',
        AALTO: '阿爾托大學',
        TUNI: '坦佩雷大學',
        UTA: '奧盧大學',
        UTU: '圖爾庫大學',
        JYU: '於韋斯屈萊大學',
        UEF: '東芬蘭大學',
        TAMK: '坦佩雷應用科技大學',
        HAAGA: '海格應用科技大學',
        Laurea: '拉瑞亞應用科技大學'
    },
    
    // CSV欄位名稱
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '門牌號',
        building: '建築',
        floor: '樓層',
        unit: '單位',
        municipality: '市鎮',
        region: '大區',
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