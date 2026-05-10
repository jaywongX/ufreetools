export default {
    name: '俄罗斯地址生成器 - 在线生成真实俄罗斯地址、身份信息与联系方式',
    description: '免费在线俄罗斯地址生成器，生成真实格式的俄罗斯地址、INN/SNILS身份证号、电话、信用卡号等完整身份档案。支持按地区筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
    inputTitle: '生成配置',
    outputTitle: '生成结果',
    generateBtn: '生成数据',
    loadSampleBtn: '加载示例并生成',
    clearAll: '清除全部',
    noOutput: '暂无生成结果',
    preview: '预览数据',
    
    // 地理筛选
    locationTitle: '地理位置筛选',
    selectRegion: '选择地区',
    allRegions: '全部地区',
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
    idCardTitle: '俄罗斯身份证',
    idCardNumber: '身份证号码',
    innNumber: 'INN号码',
    snilsNumber: 'SNILS号码',
    
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
    regionLabel: '地区',
    postalCode: '邮政编码',
    
    // 地址格式
    addressNumber: '号',
    addressFloor: '楼',
    addressUnit: '室',
    commercialUnit: '（商业单位）',
    russia: '俄罗斯',
    postOfficeBox: '邮政信箱',
    studentDormitory: '学生宿舍',
    teachingBuilding: '教学楼',
    library: '图书馆',
    buildingUnit: '座',
    apartment: '公寓',
    
    // 地区名
    regions: {
        'Moscow': '莫斯科',
        'Saint Petersburg': '圣彼得堡',
        'Krasnodar': '克拉斯诺达尔',
        'Novosibirsk': '新西伯利亚',
        'Yekaterinburg': '叶卡捷琳堡',
        'Kazan': '喀山',
        'Nizhny Novgorod': '下诺夫哥罗德',
        'Chelyabinsk': '车里雅宾斯克',
        'Samara': '萨马拉',
        'Omsk': '鄂木斯克',
        'Rostov-on-Don': '顿河畔罗斯托夫',
        'Ufa': '乌法',
        'Krasnoyarsk': '克拉斯诺亚尔斯克',
        'Voronezh': '沃罗涅日',
        'Perm': '彼尔姆',
        'Volgograd': '伏尔加格勒'
    },
    
    // 大学名
    universities: {
        'MSU': '莫斯科国立大学',
        'SPbSU': '圣彼得堡国立大学',
        'Bauman': '鲍曼技术大学',
        'HSE': '高等经济学院',
        'MEPhI': '国家核能研究大学',
        'MIPT': '莫斯科物理技术学院',
        'PFUR': '普列汉诺夫经济大学',
        'RUDN': '人民友谊大学',
        'MAI': '莫斯科航空学院',
        'MSTU': '莫斯科钢铁合金学院'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '门牌号',
        building: '建筑',
        floor: '楼层',
        unit: '单位',
        region: '地区',
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
