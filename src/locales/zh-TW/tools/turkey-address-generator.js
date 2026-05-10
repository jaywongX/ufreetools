export default {
    name: '土耳其地址生成器 - 在線生成真實土耳其地址、身份信息與聯繫方式',
    description: '免費在線土耳其地址生成器，生成真實格式的土耳其地址、身份證號、電話、信用卡號等完整身份檔案。支持按省篩選，導出JSON/CSV格式，純前端運行保護隱私。',
    inputTitle: '生成配置',
    outputTitle: '生成結果',
    generateBtn: '生成數據',
    loadSampleBtn: '加載示例並生成',
    clearAll: '清除全部',
    noOutput: '暫無生成結果',
    preview: '預覽數據',
    
    // 地理篩選
    locationTitle: '地理位置篩選',
    selectProvince: '選擇省',
    selectDistrict: '選擇區',
    allProvinces: '全部省',
    allDistricts: '全部區',
    postalCodeLabel: '郵政編碼',
    validatePostalCode: '驗證郵編',
    
    // 地址類型
    addressTypeTitle: '地址類型',
    addressTypeResidential: '住宅地址',
    addressTypeCommercial: '商業地址',
    addressTypeVirtual: '虛擬郵箱',
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
    
    // 身份證
    idCardTitle: '土耳其身份證',
    idCardNumber: '身份證號碼',
    nationalId: '國民身份證號',
    serialNumber: '序列號',
    checkDigit: '校驗碼',
    
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
    exportIdCard: '生成身份證圖片',
    exportBusinessCard: '生成名片',
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
    houseNumberLabel: '門牌號',
    buildingLabel: '大廈',
    floorLabel: '樓層',
    unitLabel: '單位',
    districtLabel: '區',
    provinceLabel: '省',
    postalCode: '郵政編碼',
    
    // 地址格式
    addressNumber: '號',
    addressFloor: '樓',
    addressUnit: '室',
    commercialUnit: '（商業單位）',
    turkey: '土耳其',
    postOfficeBox: '郵政信箱',
    studentDormitory: '學生宿舍',
    teachingBuilding: '教學樓',
    library: '圖書館',
    buildingUnit: '座',
    apartment: '公寓',
    
    // 提示信息
    idCardImageAlert: '身份證圖片生成功能需要canvas實現',
    businessCardAlert: '名片生成功能需要canvas實現',
    
    // 省名（土耳其主要省份）
    provinces: {
        IST: '伊斯坦布爾',
        ANK: '安卡拉',
        IZM: '伊茲密爾',
        BUR: '布爾薩',
        ANT: '安塔利亞',
        ADN: '阿達納',
        GAZ: '加濟安泰普',
        KON: '科尼亞',
        MRA: '梅爾辛',
        KAY: '開塞利',
        ESK: '埃斯基謝希爾',
        TRA: '特拉布宗',
        SAM: '薩姆松',
        MAL: '馬拉蒂亞',
        DIA: '迪亞巴克爾',
        ERZ: '埃爾祖魯姆',
        VAN: '凡城',
        SIV: '錫瓦斯',
        TOK: '托卡特',
        COR: '喬魯姆'
    },
    
    // 區域名（以伊斯坦布爾為例）
    districtsData: {
        IST: {
            beyoglu: '貝伊奧盧',
            fatih: '法提赫',
            kadikoy: '卡德柯伊',
            besiktas: '貝西克塔斯',
            sisli: '希什利',
            uskudar: '於斯屈達爾',
            bakirkoy: '巴克爾柯伊',
            zeytinburnu: '澤伊廷布爾努',
            beylikduzu: '貝伊利克杜祖',
            pendik: '彭迪克',
            maltepe: '馬爾泰佩',
            kartal: '卡爾塔爾',
            tuzla: '圖茲拉',
            catalca: '賈特爾賈'
        },
        ANK: {
            cankaya: '恰卡亞',
            yenimahalle: '耶尼馬哈萊',
            altindag: '阿勒丁達格',
            pursaklar: '普爾薩克拉爾',
            eryaman: '埃里亞曼',
            etimesgut: '埃蒂梅斯古特',
            sincan: '辛詹'
        },
        IZM: {
            konak: '科納克',
            karsiyaka: '卡爾什亞卡',
            bornova: '博爾諾瓦',
            cigli: '吉格利',
            bayrakli: '拜拉克勒',
            balcova: '巴爾科瓦',
            guzelbahce: '居澤爾巴赫切'
        },
        BUR: {
            nilufer: '尼呂費爾',
            osmangazi: '奧斯曼加齊',
            yildirim: '耶爾德勒姆',
            mudanya: '穆達尼亞',
            gemlik: '格姆利克'
        },
        ANT: {
            muratpasa: '穆拉特帕夏',
            kepez: '凱佩茲',
            konyaalti: '科尼亞阿勒',
            aksu: '阿克蘇',
            dosenmeadi: '多森梅阿迪'
        }
    },
    
    // 大學名
    universities: {
        ITU: '伊斯坦布爾理工大學',
        ITU: '伊斯坦布爾大學',
        BOUN: '博阿齊奇大學',
        METU: '中東技術大學',
        HU: '哈傑泰佩大學',
        ANU: '安卡拉大學',
        DEU: '代尼茲利大學'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '門牌號',
        building: '大廈',
        floor: '樓層',
        unit: '單位',
        district: '區',
        province: '省',
        postalCode: '郵政編碼',
        fullName: '姓名',
        gender: '性別',
        age: '年齡',
        birthDate: '出生日期',
        phone: '電話',
        email: '郵箱',
        cardType: '卡類型',
        cardNumber: '卡號',
        idCardNumber: '身份證號'
    }
};