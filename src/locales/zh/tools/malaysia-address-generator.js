export default {
    name: '马来西亚地址生成器 - 在线生成真实马来西亚地址、身份信息与联系方式',
    description: '免费在线马来西亚地址生成器，生成真实格式的马来西亚地址、身份证号、电话、信用卡号等完整身份档案。支持按州筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
    inputTitle: '生成配置',
    outputTitle: '生成结果',
    generateBtn: '生成数据',
    loadSampleBtn: '加载示例并生成',
    clearAll: '清除全部',
    noOutput: '暂无生成结果',
    preview: '预览数据',
    
    // 地理筛选
    locationTitle: '地理位置筛选',
    selectRegion: '选择州',
    allRegions: '全部州',
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
    idCardTitle: '马来西亚身份证',
    idCardNumber: '身份证号码',
    mykadNumber: 'MyKad号码',
    
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
    regionLabel: '州',
    postalCode: '邮政编码',
    
    // 地址格式
    addressNumber: '号',
    addressFloor: '楼',
    addressUnit: '室',
    commercialUnit: '（商业单位）',
    malaysia: '马来西亚',
    postOfficeBox: '邮政信箱',
    studentDormitory: '学生宿舍',
    teachingBuilding: '教学楼',
    library: '图书馆',
    buildingUnit: '座',
    apartment: '公寓',
    
    // 州名（马来西亚13个州+3个联邦直辖区）
    regions: {
        'Johor': '柔佛州',
        'Kedah': '吉打州',
        'Kelantan': '吉兰丹州',
        'Malacca': '马六甲州',
        'Negeri Sembilan': '森美兰州',
        'Pahang': '彭亨州',
        'Penang': '槟城州',
        'Perak': '霹雳州',
        'Perlis': '玻璃市州',
        'Sabah': '沙巴州',
        'Sarawak': '砂拉越州',
        'Selangor': '雪兰莪州',
        'Terengganu': '登嘉楼州',
        'Kuala Lumpur': '吉隆坡联邦直辖区',
        'Putrajaya': '布城联邦直辖区',
        'Labuan': '纳闽联邦直辖区'
    },
    
    // 大学名
    universities: {
        'UM': '马来亚大学',
        'UKM': '国民大学',
        'UPM': '博特拉大学',
        'USM': '理科大学',
        'UTM': '工艺大学',
        'UKM': '国民大学',
        'UUM': '北方大学',
        'UMS': '沙巴大学',
        'UMK': '吉兰丹大学',
        'UPSI': '苏丹依德理斯教育大学'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '门牌号',
        building: '建筑',
        floor: '楼层',
        unit: '单位',
        region: '州',
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