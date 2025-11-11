export default {
    name: '香港地址產生器 - 線上產生真實香港地址、身分資訊與聯繫方式',
    description: '免費線上香港地址產生器，產生真實格式的香港地址、身分證號、電話、信用卡號等完整身分檔案。支援依區篩選，匯出JSON/CSV格式，純前端運行保護隱私。',
    inputTitle: '產生設定',
    outputTitle: '產生結果',
    generateBtn: '產生資料',
    loadSampleBtn: '載入範例並產生',
    clearAll: '清除全部',
    noOutput: '暫無產生結果',
    preview: '預覽資料',
    
    // 地理篩選
    locationTitle: '地理位置篩選',
    selectDistrict: '選擇區',
    selectArea: '選擇區域',
    allDistricts: '全部區',
    allAreas: '全部區域',
    postalCodeLabel: '郵遞區號',
    validatePostalCode: '驗證郵編',
    
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
    idCardTitle: '香港身分證',
    idCardNumber: '身分證號碼',
    prefixLetter: '前置字母',
    serialNumber: '序號',
    checkDigit: '檢查碼',
    
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
    exportIdCard: '產生身分證圖片',
    exportBusinessCard: '產生名片',
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
    buildingLabel: '大廈',
    floorLabel: '樓層',
    unitLabel: '單位',
    districtLabel: '區',
    
    // 地址格式
    addressNumber: '號',
    addressFloor: '樓',
    addressUnit: '室',
    commercialUnit: '（商業單位）',
    hongKong: '香港',
    postOfficeBox: '郵政信箱',
    studentDormitory: '學生宿舍',
    teachingBuilding: '教學樓',
    library: '圖書館',
    buildingUnit: '座',
    
    // 提示訊息
    idCardImageAlert: '身分證圖片產生功能需要canvas實現',
    businessCardAlert: '名片產生功能需要canvas實現',
    
    // 區名
    districts: {
        CW: '中西區',
        WAN: '灣仔區',
        E: '東區',
        S: '南區',
        YTM: '油尖旺區',
        SSP: '深水埗區',
        KC: '九龍城區',
        WTS: '黃大仙區',
        KT: '觀塘區',
        TM: '屯門區',
        YL: '元朗區',
        N: '北區',
        TP: '大埔區',
        ST: '沙田區',
        SK: '西貢區',
        TW: '荃灣區',
        KW: '葵青區',
        IS: '離島區'
    },
    
    // 區域名
    areas: {
        CW: {
            central: '中環',
            sheungWan: '上環',
            saiWan: '西環',
            midLevels: '半山'
        },
        WAN: {
            wanChai: '灣仔',
            causewayBay: '銅鑼灣',
            happyValley: '跑馬地',
            taiHang: '大坑'
        },
        E: {
            northPoint: '北角',
            quarryBay: '鰂魚涌',
            taiKooShing: '太古城',
            shauKeiWan: '筲箕灣',
            chaiWan: '柴灣'
        },
        S: {
            repulseBay: '淺水灣',
            deepWaterBay: '深水灣',
            stanley: '赤柱',
            aberdeen: '香港仔',
            apLeiChau: '鴨脷洲'
        },
        YTM: {
            tsimShaTsui: '尖沙咀',
            yauMaTei: '油麻地',
            mongKok: '旺角',
            jordan: '佐敦'
        },
        SSP: {
            shamShuiPo: '深水埗',
            cheungShaWan: '長沙灣',
            laiChiKok: '荔枝角',
            shekKipMei: '石硤尾'
        },
        KC: {
            kowloonCity: '九龍城',
            toKwaWan: '土瓜灣',
            hungHom: '紅磡',
            hoManTin: '何文田'
        },
        WTS: {
            wongTaiSin: '黃大仙',
            diamondHill: '鑽石山',
            sanPoKong: '新蒲崗',
            lokFu: '樂富'
        },
        KT: {
            kwunTong: '觀塘',
            lamTin: '藍田',
            ngauTauKok: '牛頭角',
            kowloonBay: '九龍灣'
        },
        TM: {
            tuenMun: '屯門',
            yuenLong: '元朗',
            tinShuiWai: '天水圍',
            tsingShan: '青山'
        },
        YL: {
            yuenLong: '元朗',
            tinShuiWai: '天水圍',
            kamTin: '錦田',
            pingShan: '屏山'
        },
        N: {
            sheungShui: '上水',
            fanLing: '粉嶺',
            shaTauKok: '沙頭角',
            taKuLing: '打鼓嶺'
        },
        TP: {
            taiPo: '大埔',
            taiPoMarket: '大埔墟',
            taiWo: '太和',
            lamTsuen: '林村'
        },
        ST: {
            shaTin: '沙田',
            taiWai: '大圍',
            maOnShan: '馬鞍山',
            foTan: '火炭'
        },
        SK: {
            saiKung: '西貢',
            tseungKwanO: '將軍澳',
            hangHau: '坑口',
            clearWaterBay: '清水灣'
        },
        TW: {
            tsuenWan: '荃灣',
            kwaiChung: '葵涌',
            tsingYi: '青衣',
            shamTseng: '深井'
        }
    },
    
    // 大學名
    universities: {
        HKU: '香港大學',
        CUHK: '香港中文大學',
        HKUST: '香港科技大學',
        PolyU: '香港理工大學',
        CityU: '香港城市大學'
    },
    
    // CSV欄位名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '門牌號',
        building: '大廈',
        floor: '樓層',
        unit: '單位',
        district: '區',
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