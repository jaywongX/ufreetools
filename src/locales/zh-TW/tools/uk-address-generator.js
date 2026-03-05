export default {
    name: '英國地址生成器 - 線上生成真實英國地址、身份資訊與聯繫方式',
    description: '免費線上英國地址生成器，生成真實格式的英國地址、國家保險號(NINO)、電話、信用卡號等完整身份檔案。支持按郡篩選，匯出JSON/CSV格式，純前端運行保護隱私。',
    inputTitle: '生成配置',
    outputTitle: '生成結果',
    generateBtn: '生成數據',
    loadSampleBtn: '載入範例並生成',
    clearAll: '清除全部',
    noOutput: '暫無生成結果',
    preview: '預覽數據',
    
    // 地理篩選
    locationTitle: '地理位置篩選',
    selectCounty: '選擇郡',
    selectCity: '選擇城市',
    allCounties: '全部郡',
    allCities: '全部城市',
    postcodeLabel: '郵遞區號',
    validatePostcode: '驗證郵遞區號',
    
    // 地址類型
    addressTypeTitle: '地址類型',
    addressTypeResidential: '住宅地址',
    addressTypeCommercial: '商業地址',
    addressTypePoBox: '郵政信箱',
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
    creditCardTitle: '信用卡資訊',
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
    idCardTitle: '國家保險號(NINO)',
    idCardNumber: '國家保險號碼',
    prefixLetter: '前綴字母',
    serialNumber: '序列號',
    suffixLetter: '後綴字母',
    
    // 數位指紋
    fingerprintTitle: '數位指紋',
    os: '作業系統',
    osVersion: '系統版本',
    browser: '瀏覽器',
    userAgent: 'User Agent',
    screenResolution: '螢幕解析度',
    timezone: '時區',
    guid: 'GUID',
    ipAddress: 'IP地址',
    macAddress: 'MAC地址',
    cookiePolicy: 'Cookie策略',
    
    // 匯出選項
    exportTitle: '匯出格式',
    exportJson: '匯出JSON',
    exportCsv: '匯出CSV',
    downloadBtn: '下載',
    copyBtn: '複製',
    viewDetails: '查看詳情',
    
    // 批量生成
    batchTitle: '批量生成',
    quantityLabel: '生成數量',
    quantityPlaceholder: '輸入數量（1-100）',
    
    // 提示資訊
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
    cityLabel: '城市',
    countyLabel: '郡',
    
    // 郡名
    counties: {
        LND: '大倫敦',
        GRM: '大曼徹斯特',
        MAN: '曼徹斯特',
        BIR: '西米德蘭茲',
        LEE: '西約克郡',
        SHE: '南約克郡',
        LIV: '默西塞德',
        BRS: '布里斯托爾',
        NEW: '泰恩-威爾',
        NOT: '諾丁漢郡',
        EDB: '愛丁堡',
        GLA: '格拉斯哥',
        CDF: '加的夫',
        BEL: '貝爾法斯特',
        SOU: '南安普頓',
        POR: '普利茅斯',
        BRI: '布萊頓',
        CAM: '劍橋郡'
    },
    
    // 城市名
    cities: {
        LND: {
            westminster: '威斯敏斯特',
            kensington: '肯辛頓',
            chelsea: '切爾西',
            camden: '卡姆登',
            islington: '伊斯靈頓',
            hackney: '哈克尼',
            towerHamlets: '塔哈姆雷特',
            greenwich: '格林威治'
        },
        GRM: {
            manchester: '曼徹斯特',
            salford: '索爾福德',
            bolton: '博爾頓',
            bury: '伯里',
            oldham: '奧爾德姆',
            rochdale: '羅奇代爾',
            stockport: '斯托克波特',
            wigan: '維根'
        },
        MAN: {
            manchesterCity: '曼徹斯特市',
            trafford: '特拉福德',
            tameside: '泰姆賽德',
            sale: '塞爾'
        },
        BIR: {
            birmingham: '伯明翰',
            coventry: '考文垂',
            wolverhampton: '伍爾弗漢普頓',
            dudley: '達德利',
            walsall: '沃爾索爾',
            sandwell: '桑德韋爾',
            solihull: '索利赫爾'
        },
        LEE: {
            leeds: '利茲',
            bradford: '布拉德福德',
            wakefield: '韋克菲爾德',
            kirklees: '柯克里斯',
            calderdale: '考爾德達爾'
        },
        SHE: {
            sheffield: '謝菲爾德',
            rotherham: '羅瑟勒姆',
            doncaster: '唐卡斯特',
            barnsley: '巴恩斯利'
        },
        LIV: {
            liverpool: '利物浦',
            knowsley: '諾斯利',
            sefton: '塞夫頓',
            wirral: '威勒爾',
            stHelens: '聖海倫斯'
        },
        BRS: {
            bristol: '布里斯托爾',
            southGloucestershire: '南格洛斯特郡',
            bath: '巴斯'
        },
        NEW: {
            newcastle: '紐卡斯爾',
            gateshead: '蓋茨黑德',
            sunderland: '桑德蘭',
            durham: '達勒姆',
            northTyneside: '北泰恩賽德',
            southTyneside: '南泰恩賽德'
        },
        NOT: {
            nottingham: '諾丁漢',
            derby: '德比',
            leicester: '萊斯特',
            lincoln: '林肯'
        },
        EDB: {
            edinburgh: '愛丁堡',
            glasgow: '格拉斯哥',
            aberdeen: '阿伯丁',
            dundee: '鄧迪',
            inverness: '因弗內斯'
        },
        GLA: {
            glasgowCity: '格拉斯哥市',
            paisley: '佩斯利',
            motherwell: '馬瑟韋爾',
            hamilton: '漢密爾頓',
            eastKilbride: '東基爾布賴德'
        },
        CDF: {
            cardiff: '加的夫',
            swansea: '斯旺西',
            newport: '紐波特',
            wrexham: '雷克瑟姆',
            barry: '巴里'
        },
        BEL: {
            belfast: '貝爾法斯特',
            derry: '德里',
            lisburn: '利斯本',
            newry: '紐里',
            bangor: '班戈'
        },
        SOU: {
            southampton: '南安普頓',
            portsmouth: '樸茨茅斯',
            bournemouth: '伯恩茅斯',
            poole: '普爾',
            winchester: '溫徹斯特'
        },
        POR: {
            plymouth: '普利茅斯',
            exeter: '埃克塞特',
            truro: '特魯羅',
            bath: '巴斯',
            taunton: '湯頓'
        },
        BRI: {
            brighton: '布萊頓',
            hove: '霍夫',
            worthing: '沃辛',
            eastbourne: '伊斯特本',
            hastings: '黑斯廷斯'
        },
        CAM: {
            cambridge: '劍橋',
            oxford: '牛津',
            peterborough: '彼得伯勒',
            luton: '盧頓',
            miltonKeynes: '米爾頓凱恩斯'
        }
    },
    
    // 大學名稱
    universities: {
        OXF: '牛津大學',
        CAM: '劍橋大學',
        IMP: '帝國理工學院',
        UCL: '倫敦大學學院',
        EDB: '愛丁堡大學'
    },
    
    // 校園地址
    studentHall: '學生宿舍',
    academicBuilding: '教學樓',
    library: '圖書館',
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '門牌號',
        building: '建築',
        postcode: '郵遞區號',
        city: '城市',
        county: '郡',
        fullName: '姓名',
        gender: '性別',
        age: '年齡',
        birthDate: '出生日期',
        phone: '電話',
        email: '郵箱',
        cardType: '卡類型',
        cardNumber: '卡號',
        idCardNumber: '國家保險號'
    }
};
