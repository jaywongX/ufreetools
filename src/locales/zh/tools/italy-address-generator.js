export default {
    name: '意大利地址生成器 - 在线生成真实意大利地址、身份信息与联系方式',
    description: '免费在线意大利地址生成器，生成真实格式的意大利地址、Codice Fiscale税号、电话、信用卡号等完整身份档案。支持按大区筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
    inputTitle: '生成配置',
    outputTitle: '生成结果',
    generateBtn: '生成数据',
    loadSampleBtn: '加载示例并生成',
    clearAll: '清除全部',
    noOutput: '暂无生成结果',
    preview: '预览数据',
    
    // 地理筛选
    locationTitle: '地理位置筛选',
    selectRegion: '选择大区',
    allRegions: '全部大区',
    postalCodeLabel: '邮政编码',
    validatePostalCode: '验证邮编',
    
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
    idCardTitle: '意大利身份证',
    idCardNumber: '身份证号码',
    codiceFiscale: 'Codice Fiscale税号',
    
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
    buildingLabel: '建筑',
    floorLabel: '楼层',
    unitLabel: '单位',
    regionLabel: '大区',
    postalCode: '邮政编码',
    
    // 地址格式
    addressNumber: '号',
    addressFloor: '楼',
    addressUnit: '室',
    commercialUnit: '（商业单位）',
    italy: '意大利',
    postOfficeBox: '邮政信箱',
    studentDormitory: '学生宿舍',
    teachingBuilding: '教学楼',
    library: '图书馆',
    buildingUnit: '座',
    apartment: '公寓',
    
    // 大区名（意大利20个大区）
    regions: {
        'Lombardia': '伦巴第大区',
        'Lazio': '拉齐奥大区',
        'Campania': '坎帕尼亚大区',
        'Sicilia': '西西里大区',
        'Veneto': '威尼托大区',
        'Emilia-Romagna': '艾米利亚-罗马涅大区',
        'Piemonte': '皮埃蒙特大区',
        'Toscana': '托斯卡纳大区',
        'Puglia': '普利亚大区',
        'Calabria': '卡拉布里亚大区',
        'Sardegna': '撒丁大区',
        'Friuli Venezia Giulia': '弗留利-威尼斯朱利亚大区',
        'Liguria': '利古里亚大区',
        'Marche': '马尔凯大区',
        'Abruzzo': '阿布鲁佐大区',
        'Molise': '莫利塞大区',
        'Basilicata': '巴西利卡塔大区',
        'Umbria': '翁布里亚大区',
        "Valle d'Aosta": '瓦莱达奥斯塔大区',
        'Trentino-Alto Adige': '特伦蒂诺-上阿迪杰大区'
    },
    
    // 大学名
    universities: {
        'Politecnico di Milano': '米兰理工大学',
        'Sapienza': '罗马第一大学',
        'Bocconi': '博科尼大学',
        'Politecnico di Torino': '都灵理工大学',
        'UniMI': '米兰大学',
        'UniFI': '佛罗伦萨大学',
        'UniBO': '博洛尼亚大学',
        'UniPd': '帕多瓦大学',
        'UniNa': '那不勒斯 Federico II 大学',
        'UniTo': '都灵大学'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '门牌号',
        building: '建筑',
        floor: '楼层',
        unit: '单位',
        region: '大区',
        postalCode: '邮政编码',
        fullName: '姓名',
        gender: '性别',
        age: '年龄',
        birthDate: '出生日期',
        phone: '电话',
        email: '邮箱',
        cardType: '卡类型',
        cardNumber: '卡号',
        idCardNumber: '身份证号'
    }
};
