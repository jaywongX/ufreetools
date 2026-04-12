export default {
    name: '尼日利亚地址生成器 - 在线生成真实尼日利亚地址、身份信息与联系方式',
    description: '免费在线尼日利亚地址生成器，生成真实格式的尼日利亚地址、NIN号码、电话、信用卡号等完整身份档案。支持按州筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
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
    selectLga: '选择地方政府区',
    allStates: '全部州',
    allLgas: '全部地方政府区',
    
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
    
    // NIN号码
    ninTitle: '尼日利亚身份号码(NIN)',
    ninNumber: 'NIN号码',
    
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
    areaLabel: '区域',
    lgaLabel: '地方政府区',
    stateLabel: '州',
    
    // 地址格式
    commercialArea: '商业区',
    hostel: '学生宿舍',
    faculty: '学院',
    library: '图书馆',
    
    // 尼日利亚36个州 + FCT
    states: {
        AB: '阿比亚州',
        AD: '阿达马瓦州',
        AK: '阿夸伊博姆州',
        AN: '阿南布拉州',
        BA: '包奇州',
        BY: '巴耶尔萨州',
        CR: '克罗斯河州',
        DE: '三角洲州',
        EB: '埃邦伊州',
        ED: '埃多州',
        EK: '埃基蒂州',
        EN: '埃努古州',
        FC: '联邦首都特区',
        GO: '贡贝州',
        IM: '伊莫州',
        JI: '吉加瓦州',
        KD: '卡杜纳州',
        KE: '凯比州',
        KN: '卡诺州',
        KO: '科吉州',
        KT: '卡齐纳州',
        KW: '夸拉州',
        LA: '拉各斯州',
        NA: '纳萨拉瓦州',
        NI: '尼日尔州',
        OG: '奥贡州',
        ON: '翁多州',
        OS: '奥孙州',
        OY: '奥约州',
        PL: '高原州',
        RI: '河流州',
        SO: '索科托州',
        TA: '塔拉巴州',
        YO: '约贝州',
        ZA: '扎姆法拉州'
    },
    
    // 大学名称
    universities: {
        UNILAG: '拉各斯大学',
        'U.I': '伊巴丹大学',
        ABU: '艾哈迈杜·贝罗大学',
        UNIPORT: '哈科特港大学',
        UNN: '尼日利亚大学恩苏卡分校'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '门牌号',
        area: '区域',
        lga: '地方政府区',
        state: '州',
        fullName: '姓名',
        gender: '性别',
        age: '年龄',
        birthDate: '出生日期',
        phone: '电话',
        email: '邮箱',
        cardType: '卡类型',
        cardNumber: '卡号',
        ninNumber: 'NIN号码'
    }
};
