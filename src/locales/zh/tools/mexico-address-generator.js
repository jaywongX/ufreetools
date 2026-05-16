export default {
    name: '墨西哥地址生成器 - 在线生成真实墨西哥地址、身份信息与联系方式',
    description: '免费在线墨西哥地址生成器，生成真实格式的墨西哥地址、RFC/CURP身份证号、电话、信用卡号等完整身份档案。支持按州/城市筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
    inputTitle: '生成配置',
    outputTitle: '生成结果',
    generateBtn: '生成数据',
    loadSampleBtn: '加载示例并生成',
    clearAll: '清除全部',
    noOutput: '暂无生成结果',
    preview: '预览数据',
    
    // 地理筛选
    locationTitle: '地理位置筛选',
    selectState: '选择州',
    selectCity: '选择城市',
    allStates: '全部州',
    allCities: '全部城市',
    
    // 地址类型
    addressTypeTitle: '地址类型',
    addressTypeResidential: '住宅地址',
    addressTypeCommercial: '商业地址',
    addressTypeVirtual: '虚拟邮箱',
    addressTypeCampus: '大学校园',
    
    // 身份信息
    identityTitle: '身份信息',
    fullName: '全名',
    gender: '性别',
    genderMale: '男性',
    genderFemale: '女性',
    age: '年龄',
    birthDate: '出生日期',
    zodiac: '星座',
    height: '身高',
    weight: '体重',
    
    // 联系方式
    contactTitle: '联系方式',
    phoneNumber: '电话号码',
    phoneType: '电话类型',
    phoneTypeMobile: '手机',
    phoneTypeLandline: '座机',
    areaCode: '区号',
    email: '邮箱地址',
    tempEmail: '临时邮箱',
    
    // 信用卡
    creditCardTitle: '信用卡信息',
    cardType: '卡类型',
    cardNumber: '卡号',
    expiryDate: '过期日期',
    cvv: 'CVV',
    bankBin: '银行BIN码',
    
    // 职业
    careerTitle: '职业档案',
    jobTitle: '职位',
    salary: '薪资',
    companyName: '公司名称',
    companySize: '公司规模',
    industry: '行业',
    employmentStatus: '就业状态',
    employmentFullTime: '全职',
    employmentPartTime: '兼职',
    
    // 身份证
    idCardTitle: '墨西哥身份证',
    rfcLabel: 'RFC（联邦纳税人登记号）',
    curpLabel: 'CURP（人口登记唯一密钥）',
    
    // 数字指纹
    fingerprintTitle: '数字指纹',
    os: '操作系统',
    osVersion: '系统版本',
    browser: '浏览器',
    userAgent: 'User Agent',
    screenResolution: '屏幕分辨率',
    timezone: '时区',
    guid: 'GUID',
    ipAddress: 'IP地址',
    macAddress: 'MAC地址',
    cookiePolicy: 'Cookie策略',
    
    // 导出选项
    exportTitle: '导出格式',
    exportJson: '导出JSON',
    exportCsv: '导出CSV',
    downloadBtn: '下载',
    copyBtn: '复制',
    viewDetails: '查看详情',
    
    // 批量生成
    batchTitle: '批量生成',
    quantityLabel: '生成数量',
    quantityPlaceholder: '输入数量（1-100）',
    
    // 提示信息
    generating: '正在生成...',
    generated: '生成完成',
    copySuccess: '已复制到剪贴板',
    downloadSuccess: '下载成功',
    invalidQuantity: '请输入1-100之间的数字',
    
    // 结果展示
    resultCount: '共生成 {count} 条记录',
    resultSummary: '生成结果摘要',
    showAll: '显示全部',
    collapse: '收起',
    
    // 生成选项
    generateOptionsTitle: '生成选项',
    
    // 记录显示
    recordLabel: '记录 #{num}',
    addressLabel: '地址',
    streetLabel: '街道',
    houseNumberLabel: '门牌号',
    neighborhoodLabel: '街区',
    postalCodeLabel: '邮政编码',
    cityLabel: '城市',
    stateLabel: '州',
    
    // 地址格式
    commercialAddress: '（商业地址）',
    postOfficeBox: '邮政信箱',
    studentDormitory: '学生宿舍',
    teachingBuilding: '教学楼',
    library: '图书馆',
    
    // 墨西哥32个州
    states: {
        AGS: '阿瓜斯卡连特斯州',
        BCN: '下加利福尼亚州',
        BCS: '南下加利福尼亚州',
        CAMP: '坎佩切州',
        COAH: '科阿韦拉州',
        COL: '科利马州',
        CHIS: '恰帕斯州',
        CHIH: '奇瓦瓦州',
        CDMX: '墨西哥城',
        DUR: '杜兰戈州',
        GTO: '瓜纳华托州',
        GRO: '格雷罗州',
        HGO: '伊达尔戈州',
        JAL: '哈利斯科州',
        MEX: '墨西哥州',
        MIC: '米却肯州',
        MOR: '莫雷洛斯州',
        NAY: '纳亚里特州',
        NLE: '新莱昂州',
        OAX: '瓦哈卡州',
        PUE: '普埃布拉州',
        QRO: '克雷塔罗州',
        QROO: '金塔纳罗奥州',
        SLP: '圣路易斯波托西州',
        SIN: '锡那罗亚州',
        SON: '索诺拉州',
        TAB: '塔巴斯科州',
        TAM: '塔毛利帕斯州',
        TLAX: '特拉斯卡拉州',
        VER: '韦拉克鲁斯州',
        YUC: '尤卡坦州',
        ZAC: '萨卡特卡斯州'
    },
    
    // 大学名
    universities: {
        UNAM: '墨西哥国立自治大学',
        IPN: '墨西哥国立理工学院',
        UdeG: '瓜达拉哈拉大学',
        UANL: '新莱昂自治大学'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '门牌号',
        neighborhood: '街区',
        postalCode: '邮政编码',
        city: '城市',
        state: '州',
        fullName: '姓名',
        gender: '性别',
        age: '年龄',
        birthDate: '出生日期',
        phone: '电话',
        email: '邮箱',
        cardType: '卡类型',
        cardNumber: '卡号',
        rfc: 'RFC',
        curp: 'CURP'
    }
};
