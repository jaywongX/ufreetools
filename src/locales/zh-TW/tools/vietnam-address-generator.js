export default {
    name: '越南地址生成器 - 線上生成真實越南地址、身份資訊與聯絡方式',
    description: '免費線上越南地址生成器，生成真實格式的越南地址、身分證號、電話、信用卡號等完整身份檔案。支援按省篩選，匯出JSON/CSV格式，純前端運行保護隱私。',
    inputTitle: '生成配置',
    outputTitle: '生成結果',
    generateBtn: '生成資料',
    loadSampleBtn: '載入範例並生成',
    clearAll: '清除全部',
    noOutput: '暫無生成結果',
    preview: '預覽資料',
    
    // 地理篩選
    locationTitle: '地理位置篩選',
    selectProvince: '選擇省/市',
    selectDistrict: '選擇縣/區',
    allProvinces: '全部省/市',
    allDistricts: '全部縣/區',
    postalCodeLabel: '郵遞區號',
    validatePostalCode: '驗證郵編',
    
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
    phoneTypeLandline: '座機',
    areaCode: '區號',
    email: '電子郵件',
    tempEmail: '臨時電子郵件',
    
    // 信用卡
    creditCardTitle: '信用卡資訊',
    cardType: '卡類型',
    cardNumber: '卡號',
    expiryDate: '有效日期',
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
    
    // 身分證
    idCardTitle: '越南身分證',
    idCardNumber: '身分證號碼',
    cmndNumber: 'CMND號碼',
    cccdNumber: 'CCCD號碼',
    serialNumber: '序號',
    
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
    exportIdCard: '生成身分證圖片',
    exportBusinessCard: '生成名片',
    downloadBtn: '下載',
    copyBtn: '複製',
    viewDetails: '查看詳情',
    
    // 批次生成
    batchTitle: '批次生成',
    quantityLabel: '生成數量',
    quantityPlaceholder: '輸入數量（1-100）',
    
    // 提示訊息
    generating: '正在生成...',
    generated: '生成完成',
    copySuccess: '已複製到剪貼簿',
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
    buildingLabel: '建築',
    floorLabel: '樓層',
    unitLabel: '單位',
    wardLabel: '坊/社',
    districtLabel: '縣/區',
    provinceLabel: '省/市',
    postalCode: '郵遞區號',
    
    // 地址格式
    addressNumber: '號',
    addressFloor: '樓',
    addressUnit: '室',
    commercialUnit: '（商業單位）',
    vietnam: '越南',
    postOfficeBox: '郵政信箱',
    studentDormitory: '學生宿舍',
    teachingBuilding: '教學樓',
    library: '圖書館',
    buildingUnit: '座',
    apartment: '公寓',
    
    // 提示訊息
    idCardImageAlert: '身分證圖片生成功能需要canvas實現',
    businessCardAlert: '名片生成功能需要canvas實現',
    
    // 省/直轄市名（越南63個省級行政區）
    provinces: {
        HN: '河內市',
        HCM: '胡志明市',
        HP: '海防市',
        DN: '峴港市',
        CT: '芹苴市',
        BH: '巴地頭頓省',
        BD: '平陽省',
        QN: '廣寧省',
        QG: '廣南省',
        KG: '金甌省',
        DT: '同奈省',
        HB: '河南省',
        TH: '太平省',
        NB: '南定省',
        VL: '永隆省',
        TG: '朔莊省',
        NT: '寧順省',
        PY: '富安省',
        TV: '西寧省',
        BD: '平定省',
        HT: '和平省',
        TB: '宣光省',
        TN: '太原省',
        LC: '萊州省',
        YB: '安沛省',
        DB: '多博省',
        LA: '老街省',
        CB: '高平省',
        LD: '林同省',
        DC: '得樂省',
        QN: '廣平省',
        QT: '廣治省',
        HT: '河靜省',
        NA: '乂安省',
        TT: '清化省',
        NB: '寧平省',
        ST: '安江省',
        CT: '茶榮省',
        BP: '檳知省',
        BL: '薄遼省',
        KG: '金甌省',
        CM: '金甌省'
    },
    
    // 縣/區資料（以河內市和胡志明市為例）
    districtsData: {
        HN: {
            hoanKiem: '還劍郡',
            baDinh: '巴亭郡',
            dongDa: '東多郡',
            haiBaTrung: '二征夫人郡',
            thanhXuan: '清春郡',
            cauGiay: '紙橋郡',
            hoangMai: '黃梅郡',
            longBien: '龍編郡',
            tayHo: '西湖郡',
            bacTuLiem: '北慈廉郡',
            namTuLiem: '南慈廉郡',
            haDong: '河東郡'
        },
        HCM: {
            quan1: '第一郡',
            quan3: '第三郡',
            quan4: '第四郡',
            quan5: '第五郡',
            quan6: '第六郡',
            quan7: '第七郡',
            quan10: '第十郡',
            quan11: '第十一郡',
            binhThanh: '平盛郡',
            phuNhuan: '富潤郡',
            tanBinh: '新平郡',
            goVap: '舊邑郡',
            binhChanh: '平政縣',
            thuDuc: '守德市'
        },
        DN: {
            haiChau: '海洲郡',
            thanhKhe: '清溪郡',
            sonTra: '山茶郡',
            NguHanhSon: '五行山郡',
            LienChieu: '連朝區',
            CamLe: '嘉萊區'
        },
        HP: {
            HongBang: '鴻龐郡',
            LeChan: '黎真郡',
            NgoQuyen: '吳權郡',
            HaiAn: '海安郡',
            KiAn: '啟發郡'
        }
    },
    
    // 大學名
    universities: {
        HUST: '河內科技大學',
        VNU: '越南國立大學',
        HANU: '河內國立大學',
        HCMUS: '胡志明市國立大學',
        RMIT: '皇家墨爾本理工大學越南分校',
        FTU: '對外貿易大學',
        NEU: '國民經濟大學',
        HPU: '河內藥科大學',
        PTIT: '郵電電信技術學院',
        FPT: 'FPT大學'
    },
    
    // CSV欄位名稱
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '門牌號',
        building: '建築',
        floor: '樓層',
        unit: '單位',
        ward: '坊/社',
        district: '縣/區',
        province: '省/市',
        postalCode: '郵遞區號',
        fullName: '姓名',
        gender: '性別',
        age: '年齡',
        birthDate: '出生日期',
        phone: '電話',
        email: '電子郵件',
        cardType: '卡類型',
        cardNumber: '卡號',
        idCardNumber: '身分證號'
    }
};