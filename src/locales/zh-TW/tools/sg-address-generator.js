export default {
    name: '新加坡地址產生器 - 線上產生真實新加坡地址、身分資訊與聯絡方式',
    description: '免費線上新加坡地址產生器，產生真實格式的新加坡地址、NRIC身分證號、電話、信用卡號等完整身分檔案。支援按區域區域篩選，匯出JSON/CSV格式，純前端執行保護隱私。',
    inputTitle: '產生設定',
    outputTitle: '產生結果',
    generateBtn: '產生資料',
    loadSampleBtn: '載入範例並產生',
    clearAll: '清除全部',
    noOutput: '暫無產生結果',
    preview: '預覽資料',
    
    locationTitle: '地理位置篩選',
    selectRegion: '選擇區域',
    selectArea: '選擇地區',
    allRegions: '全部區域',
    allAreas: '全部地區',
    postalCodeLabel: '郵遞區號',
    
    addressTypeTitle: '地址類型',
    addressTypeResidential: '住宅地址',
    addressTypeCommercial: '商業地址',
    addressTypeHDB: 'HDB組屋',
    addressTypeCondo: '私人公寓',
    
    identityTitle: '身分資訊',
    fullName: '全名',
    gender: '性別',
    genderMale: '男性',
    genderFemale: '女性',
    age: '年齡',
    birthDate: '出生日期',
    race: '種族',
    raceChinese: '華人',
    raceMalay: '馬來族',
    raceIndian: '印度族',
    raceOthers: '其他',
    
    contactTitle: '聯絡方式',
    phoneNumber: '電話號碼',
    areaCode: '區號',
    email: '電子信箱',
    tempEmail: '臨時信箱',
    
    creditCardTitle: '信用卡資訊',
    cardType: '卡類型',
    cardNumber: '卡號',
    expiryDate: '過期日期',
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
    
    idCardTitle: 'NRIC身分證',
    idCardNumber: 'NRIC號碼',
    prefixLetter: '前綴字母',
    serialNumber: '序列號',
    checkLetter: '校驗字母',
    
    exportTitle: '匯出格式',
    exportJson: '匯出JSON',
    exportCsv: '匯出CSV',
    downloadBtn: '下載',
    copyBtn: '複製',
    viewDetails: '檢視詳情',
    
    batchTitle: '批量產生',
    quantityLabel: '產生數量',
    quantityPlaceholder: '輸入數量（1-100）',
    
    generating: '正在產生...',
    generated: '產生完成',
    copySuccess: '已複製到剪貼簿',
    downloadSuccess: '下載成功',
    invalidQuantity: '請輸入1-100之間的數字',
    
    resultCount: '共產生 {count} 條記錄',
    resultSummary: '產生結果摘要',
    showAll: '顯示全部',
    collapse: '收起',
    
    generateOptionsTitle: '產生選項',
    
    recordLabel: '記錄 #{num}',
    addressLabel: '地址',
    streetLabel: '街道',
    houseNumberLabel: '門牌號',
    buildingLabel: '大廈/組屋',
    unitLabel: '單位',
    postalCodeLabel: '郵編',
    regionLabel: '區域',
    
    regions: {
        CR: '中區',
        ER: '東區',
        NR: '北區',
        NER: '東北區',
        WR: '西區'
    },
    
    areas: {
        CR: {
            orchard: '烏節路',
            riverValley: '里峇峇利',
            newton: '紐頓',
            tanglin: '東陵',
            bukitTimah: '武吉知馬',
            clementi: '金文泰',
            queenstown: '女皇鎮'
        },
        ER: {
            bedok: '勿洛',
            changi: '樟宜',
            pasirRis: '巴西立',
            tampines: '淡濱尼',
            payaLebar: '巴耶利峇'
        },
        NR: {
            angMoKio: '宏茂橋',
            bishan: '碧山',
            serangoon: '實龍岡',
            hougang: '後港',
            sengkang: '盛港',
            punggol: '榜鵝'
        },
        NER: {
            hougang: '後港',
            punggol: '榜鵝',
            seletar: '實里達',
            sengkang: '盛港',
            serangoon: '實龍岡'
        },
        WR: {
            jurongEast: '裕廊東',
            jurongWest: '裕廊西',
            bukitBatok: '武吉巴督',
            choaChuKang: '蔡厝港',
            woodlands: '兀蘭',
            sembawang: '三巴旺',
            yishun: '義順'
        }
    },
    
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '門牌號',
        building: '大廈',
        postalCode: '郵編',
        fullName: '姓名',
        gender: '性別',
        age: '年齡',
        birthDate: '出生日期',
        phone: '電話',
        email: '信箱',
        cardType: '卡類型',
        cardNumber: '卡號',
        idCardNumber: 'NRIC號碼'
    }
};
