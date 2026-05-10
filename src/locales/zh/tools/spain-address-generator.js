export default {
    name: '西班牙地址生成器 - 在线生成真实西班牙地址、身份信息与联系方式',
    description: '免费在线西班牙地址生成器，生成真实格式的西班牙地址、DNI/NIE身份证号、电话、信用卡号等完整身份档案。支持按自治区筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
    inputTitle: '生成配置',
    outputTitle: '生成结果',
    generateBtn: '生成数据',
    loadSampleBtn: '加载示例并生成',
    clearAll: '清除全部',
    noOutput: '暂无生成结果',
    preview: '预览数据',
    
    // 地理筛选
    locationTitle: '地理位置筛选',
    selectRegion: '选择自治区',
    allRegions: '全部自治区',
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
    idCardTitle: '西班牙身份证',
    idCardNumber: '身份证号码',
    dniNumber: 'DNI号码',
    nieNumber: 'NIE号码',
    
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
    regionLabel: '自治区',
    postalCode: '邮政编码',
    
    // 地址格式
    addressNumber: '号',
    addressFloor: '楼',
    addressUnit: '室',
    commercialUnit: '（商业单位）',
    spain: '西班牙',
    postOfficeBox: '邮政信箱',
    studentDormitory: '学生宿舍',
    teachingBuilding: '教学楼',
    library: '图书馆',
    buildingUnit: '座',
    apartment: '公寓',
    
    // 自治区名（西班牙17个自治区+2个自治市）
    regions: {
        'Andalucía': '安达卢西亚',
        'Aragón': '阿拉贡',
        'Asturias': '阿斯图里亚斯',
        'Islas Baleares': '巴利阿里群岛',
        'Canarias': '加那利群岛',
        'Cantabria': '坎塔布里亚',
        'Castilla-La Mancha': '卡斯蒂利亚-拉曼恰',
        'Castilla y León': '卡斯蒂利亚-莱昂',
        'Cataluña': '加泰罗尼亚',
        'Extremadura': '埃斯特雷马杜拉',
        'Galicia': '加利西亚',
        'La Rioja': '拉里奥哈',
        'Comunidad de Madrid': '马德里',
        'Región de Murcia': '穆尔西亚',
        'Comunidad Foral de Navarra': '纳瓦拉',
        'País Vasco': '巴斯克',
        'Comunidad Valenciana': '瓦伦西亚',
        'Ceuta': '休达',
        'Melilla': '梅利利亚'
    },
    
    // 大学名
    universities: {
        'UCM': '马德里康普顿斯大学',
        'UPF': '庞培法布拉大学',
        'IE': 'IE大学',
        'UAM': '马德里自治大学',
        'UC3M': '卡洛斯三世大学',
        'UB': '巴塞罗那大学',
        'UPC': '加泰罗尼亚理工大学',
        'US': '塞维利亚大学',
        'UV': '瓦伦西亚大学',
        'USC': '圣地亚哥·德·孔波斯特拉大学'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '门牌号',
        building: '建筑',
        floor: '楼层',
        unit: '单位',
        region: '自治区',
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
