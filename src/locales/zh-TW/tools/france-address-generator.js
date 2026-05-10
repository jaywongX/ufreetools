export default {
    name: '法國地址產生器 - 線上產生真實法國地址、身份資訊與聯絡方式',
    description: '免費線上法國地址產生器，產生真實格式的法國地址、身份證號、電話、信用卡號等完整身份檔案。支援按省篩選，匯出JSON/CSV格式，純前端運行保護隱私。',
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
    selectDepartment: '選擇省',
    allRegions: '全部大區',
    allDepartments: '全部省',
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
    idCardTitle: '法國身份證',
    idCardNumber: '身份證號碼',
    nirNumber: 'NIR號碼',
    serialNumber: '序列號',
    checkKey: '校驗碼',
    
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
    departmentLabel: '省',
    regionLabel: '大區',
    postalCode: '郵遞區號',
    
    // 地址格式
    addressNumber: '號',
    addressFloor: '樓',
    addressUnit: '室',
    commercialUnit: '（商業單位）',
    france: '法國',
    postOfficeBox: '郵政信箱',
    studentDormitory: '學生宿舍',
    teachingBuilding: '教學樓',
    library: '圖書館',
    buildingUnit: '座',
    apartment: '公寓',
    
    // 提示資訊
    idCardImageAlert: '身份證圖片生成功能需要canvas實作',
    businessCardAlert: '名片生成功能需要canvas實作',
    
    // 大區名（法國18個大區）
    regions: {
        IDF: '法蘭西島',
        ARA: '奧弗涅-羅訥-阿爾卑斯',
        OCC: '奧克西塔尼',
        NAQ: '新阿基坦',
        PAC: '普羅旺斯-阿爾卑斯-蔚藍海岸',
        HDF: '上法蘭西',
        BFC: '勃艮第-弗朗什-孔泰',
        NAC: '盧瓦爾河地區',
        PDL: '盧瓦爾河地區',
        BRE: '布列塔尼',
        NOR: '諾曼第',
        GUA: '瓜德羅普',
        MQ: '馬提尼克',
        GUY: '法屬圭亞那',
        REU: '留尼汪',
        COR: '科西嘉',
        ALO: '阿爾薩斯-洛林',
        MP: '梅斯-波摩拉'
    },
    
    // 省份資料（以法蘭西島大區為例）
    departmentsData: {
        IDF: {
            paris: '巴黎',
            hautsDeSeine: '上塞納省',
            seineSaintDenis: '塞納-聖但尼省',
            valDeMarne: '馬恩河谷省',
            yvelines: '伊夫林省',
            essonne: '埃松省',
            valDOise: '瓦茲河谷省',
            seineEtMarne: '塞納-馬恩省'
        },
        ARA: {
            rhone: '羅訥省',
            loire: '盧瓦爾省',
            isere: '伊澤爾省',
            ain: '安省',
            savoie: '薩瓦省',
            hauteSavoie: '上薩瓦省',
            allier: '阿列省',
            puyDeDome: '多姆山省'
        },
        OCC: {
            herault: '埃羅省',
            gard: '加爾省',
            aude: '奧德省',
            pyreneesOrientales: '東比利牛斯省',
            tarn: '塔恩省',
            hauteGaronne: '上加龍省',
            gers: '熱爾省',
            lotEtGaronne: '洛特-加龍省'
        },
        NAQ: {
            gironde: '吉倫特省',
            charenteMaritime: '濱海夏朗德省',
            dordogne: '多爾多涅省',
            landes: '朗德省',
            vienne: '維埃納省',
            hauteVienne: '上維埃納省',
            charente: '夏朗德省',
            correze: '科雷茲省'
        },
        PAC: {
            bouchesDuRhone: '羅訥河口省',
            alpesMaritimes: '濱海阿爾卑斯省',
            var: '瓦爾省',
            vaucluse: '沃克呂茲省',
            alpesDeHauteProvence: '上普羅旺斯阿爾卑斯省',
            hautesAlpes: '上阿爾卑斯省'
        },
        HDF: {
            nord: '北部省',
            pasDeCalais: '加萊海峽省',
            somme: '索姆省',
            aisne: '埃納省',
            oise: '瓦茲省',
            aisne: '埃納省'
        }
    },
    
    // 大學名
    universities: {
        UP1: '巴黎第一大學',
        UP2: '巴黎第二大學',
        UP3: '巴黎第三大學',
        UP4: '巴黎第四大學',
        UP5: '巴黎第五大學',
        UP6: '巴黎第六大學',
        UP7: '巴黎第七大學',
        UP8: '巴黎第八大學',
        UP9: '巴黎第九大學',
        UP10: '巴黎第十大學',
        UP11: '巴黎第十一大學',
        UP12: '巴黎第十二大學',
        UP13: '巴黎第十三大學',
        ENS: '巴黎高等師範學校',
        X: '巴黎綜合理工學院'
    },
    
    // CSV欄位名稱
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '門牌號',
        building: '建築',
        floor: '樓層',
        unit: '單位',
        department: '省',
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