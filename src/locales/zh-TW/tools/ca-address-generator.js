export default {
    name: '加拿大地址生成器 - 線上生成真實加拿大地址、身份資訊與聯絡方式',
    description: '免費線上加拿大地址生成器，生成真實格式的加拿大地址、郵遞區號、電話、信用卡號等完整身份檔案。支援按省篩選，匯出JSON/CSV格式，純前端執行保護隱私。',
    inputTitle: '生成配置',
    outputTitle: '生成結果',
    generateBtn: '生成資料',
    loadSampleBtn: '載入範例並生成',
    clearAll: '清除全部',
    noOutput: '暫無生成結果',
    preview: '預覽資料',
    
    locationTitle: '地理位置篩選',
    selectProvince: '選擇省份',
    selectCity: '選擇城市',
    allProvinces: '全部省份',
    allCities: '全部城市',
    postalCodeLabel: '郵遞區號',
    validatePostalCode: '驗證郵編',
    
    addressTypeTitle: '地址類型',
    addressTypeResidential: '住宅地址',
    addressTypeCommercial: '商業地址',
    addressTypeVirtual: '虛擬信箱',
    addressTypeCampus: '大學校園',
    
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
    
    contactTitle: '聯絡方式',
    phoneNumber: '電話號碼',
    phoneType: '電話類型',
    phoneTypeMobile: '手機',
    phoneTypeLandline: '市話',
    areaCode: '區號',
    email: '電子信箱',
    tempEmail: '臨時信箱',
    
    creditCardTitle: '信用卡資訊',
    cardType: '卡類型',
    cardNumber: '卡號',
    expiryDate: '到期日',
    cvv: 'CVV',
    bankBin: '銀行BIN碼',
    
    careerTitle: '職業檔案',
    jobTitle: '職位',
    salary: '薪資',
    companyName: '公司名稱',
    companySize: '公司規模',
    industry: '行業',
    employmentStatus: '就業狀態',
    employmentFullTime: '全職',
    employmentPartTime: '兼職',
    
    sinTitle: '社會保險號(SIN)',
    sinNumber: 'SIN號碼',
    
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
    
    exportTitle: '匯出格式',
    exportJson: '匯出JSON',
    exportCsv: '匯出CSV',
    exportIdCard: '生成ID卡片',
    exportBusinessCard: '生成名片',
    downloadBtn: '下載',
    copyBtn: '複製',
    viewDetails: '查看詳情',
    
    batchTitle: '批量生成',
    quantityLabel: '生成數量',
    quantityPlaceholder: '輸入數量（1-100）',
    
    generating: '正在生成...',
    generated: '生成完成',
    copySuccess: '已複製到剪貼簿',
    downloadSuccess: '下載成功',
    invalidQuantity: '請輸入1-100之間的數字',
    
    resultCount: '共生成 {count} 條記錄',
    resultSummary: '生成結果摘要',
    showAll: '顯示全部',
    collapse: '收起',
    
    generateOptionsTitle: '生成選項',
    
    recordLabel: '記錄 #{num}',
    addressLabel: '地址',
    streetLabel: '街道',
    houseNumberLabel: '門牌號',
    buildingLabel: '建築',
    unitLabel: '單元',
    cityLabel: '城市',
    provinceLabel: '省份',
    postalCodeDisplay: '郵編',
    
    addressUnit: 'Unit',
    aptNumber: 'Apt',
    suiteNumber: 'Suite',
    pobox: 'PO Box',
    
    idCardImageAlert: 'ID卡片生成功能需要canvas實現',
    businessCardAlert: '名片生成功能需要canvas實現',
    
    provinces: {
        ON: '安大略省',
        QC: '魁北克省',
        BC: '不列顛哥倫比亞省',
        AB: '阿爾伯塔省',
        MB: '曼尼托巴省',
        SK: '薩斯喀徹溫省',
        NS: '新斯科舍省',
        NB: '新不倫瑞克省',
        NL: '紐芬蘭與拉布拉多省',
        PE: '愛德華王子島省',
        NT: '西北地區',
        YT: '育空地區',
        NU: '努納武特地區'
    },
    
    cities: {
        ON: {
            toronto: '多倫多',
            ottawa: '渥太華',
            mississauga: '密西沙加',
            hamilton: '哈密爾頓',
            london: '倫敦',
            markham: '萬錦',
            vaughan: '旺市',
            kitchener: '基奇納',
            waterloo: '滑鐵盧',
            brampton: '布蘭普頓'
        },
        QC: {
            montreal: '蒙特利爾',
            quebec: '魁北克城',
            laval: '拉瓦爾',
            gatineau: '加蒂諾',
            sherbrooke: '舍布魯克'
        },
        BC: {
            vancouver: '溫哥華',
            victoria: '維多利亞',
            burnaby: '本拿比',
            richmond: '列治文',
            surrey: '素里',
            kelowna: '基洛納'
        },
        AB: {
            calgary: '卡爾加里',
            edmonton: '埃德蒙頓',
            redDeer: '紅鹿市',
            lethbridge: '萊斯布里奇'
        },
        MB: {
            winnipeg: '溫尼伯',
            brandon: '布蘭登'
        },
        SK: {
            saskatoon: '薩斯卡通',
            regina: '里賈納'
        },
        NS: {
            halifax: '哈利法克斯'
        },
        NB: {
            fredericton: '弗雷德里克頓',
            moncton: '蒙克頓',
            saintJohn: '聖約翰'
        },
        NL: {
            stJohns: '聖約翰斯'
        },
        PE: {
            charlottetown: '夏洛特敦'
        },
        NT: {
            yellowknife: '耶洛奈夫'
        },
        YT: {
            whitehorse: '白馬市'
        },
        NU: {
            iqaluit: '伊卡盧伊特'
        }
    },
    
    universities: {
        UofT: '多倫多大學',
        UBC: '不列顛哥倫比亞大學',
        McGill: '麥吉爾大學',
        McMaster: '麥克馬斯特大學',
        Waterloo: '滑鐵盧大學',
        Alberta: '阿爾伯塔大學',
        Ottawa: '渥太華大學',
        Montreal: '蒙特利爾大學'
    },
    
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '門牌號',
        building: '建築',
        unit: '單元',
        city: '城市',
        province: '省份',
        postalCode: '郵編',
        fullName: '姓名',
        gender: '性別',
        age: '年齡',
        birthDate: '出生日期',
        phone: '電話',
        email: '信箱',
        cardType: '卡類型',
        cardNumber: '卡號',
        sinNumber: 'SIN號碼'
    }
};
