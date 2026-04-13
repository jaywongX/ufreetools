export default {
    name: '德国地址生成器 - 在线生成真实德国地址、身份信息与联系方式',
    description: '免费在线德国地址生成器，生成真实格式的德国地址、身份证号、电话、信用卡号等完整身份档案。支持按州筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
    inputTitle: '生成配置',
    outputTitle: '生成结果',
    generateBtn: '生成数据',
    loadSampleBtn: '加载示例并生成',
    clearAll: '清除全部',
    noOutput: '暂无生成结果',
    preview: '预览数据',
    
    // 地理筛选
    locationTitle: '地理位置筛选',
    selectState: '选择联邦州',
    selectCity: '选择城市',
    allStates: '全部联邦州',
    allCities: '全部城市',
    
    // 地址类型
    addressTypeTitle: '地址类型',
    addressTypeResidential: '住宅地址',
    addressTypeCommercial: '商业地址',
    addressTypePoBox: '邮政信箱',
    addressTypeCampus: '大学校园',
    
    // 身份信息
    identityTitle: '身份信息',
    fullName: '全名',
    firstName: '名',
    lastName: '姓',
    gender: '性别',
    genderMale: '男性',
    genderFemale: '女性',
    age: '年龄',
    birthDate: '出生日期',
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
    
    // 身份证
    idCardTitle: '德国身份证(Personalausweis)',
    idCardNumber: '身份证号码',
    
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
    postalCodeLabel: '邮政编码',
    cityLabel: '城市',
    stateLabel: '联邦州',
    
    // 地址格式
    commercialArea: '商业区',
    studentDormitory: '学生宿舍',
    library: '图书馆',
    
    // 德国16个联邦州
    states: {
        BW: '巴登-符腾堡州',
        BY: '巴伐利亚州',
        BE: '柏林',
        BB: '勃兰登堡州',
        HB: '不来梅',
        HH: '汉堡',
        HE: '黑森州',
        MV: '梅克伦堡-前波美拉尼亚州',
        NI: '下萨克森州',
        NW: '北莱茵-威斯特法伦州',
        RP: '莱茵兰-普法尔茨州',
        SL: '萨尔州',
        SN: '萨克森州',
        ST: '萨克森-安哈尔特州',
        SH: '石勒苏益格-荷尔斯泰因州',
        TH: '图林根州'
    },
    
    // 大学名称
    universities: {
        TUM: '慕尼黑工业大学',
        LMU: '慕尼黑大学',
        HU: '柏林洪堡大学',
        TU: '柏林工业大学',
        UniHeidelberg: '海德堡大学'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '门牌号',
        postalCode: '邮政编码',
        city: '城市',
        state: '联邦州',
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
