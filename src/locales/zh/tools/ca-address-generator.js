export default {
    name: '加拿大地址生成器 - 在线生成真实加拿大地址、身份信息与联系方式',
    description: '免费在线加拿大地址生成器，生成真实格式的加拿大地址、邮政编码、电话、信用卡号等完整身份档案。支持按省筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
    inputTitle: '生成配置',
    outputTitle: '生成结果',
    generateBtn: '生成数据',
    loadSampleBtn: '加载示例并生成',
    clearAll: '清除全部',
    noOutput: '暂无生成结果',
    preview: '预览数据',
    
    // 地理筛选
    locationTitle: '地理位置筛选',
    selectProvince: '选择省份',
    selectCity: '选择城市',
    allProvinces: '全部省份',
    allCities: '全部城市',
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
    
    // 社会保险号
    sinTitle: '社会保险号(SIN)',
    sinNumber: 'SIN号码',
    
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
    exportIdCard: '生成ID卡片',
    exportBusinessCard: '生成名片',
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
    unitLabel: '单元',
    cityLabel: '城市',
    provinceLabel: '省份',
    postalCodeDisplay: '邮编',
    
    // 地址格式
    addressUnit: 'Unit',
    aptNumber: 'Apt',
    suiteNumber: 'Suite',
    pobox: 'PO Box',
    
    // 提示信息
    idCardImageAlert: 'ID卡片生成功能需要canvas实现',
    businessCardAlert: '名片生成功能需要canvas实现',
    
    // 省份名
    provinces: {
        ON: '安大略省',
        QC: '魁北克省',
        BC: '不列颠哥伦比亚省',
        AB: '阿尔伯塔省',
        MB: '曼尼托巴省',
        SK: '萨斯喀彻温省',
        NS: '新斯科舍省',
        NB: '新不伦瑞克省',
        NL: '纽芬兰与拉布拉多省',
        PE: '爱德华王子岛省',
        NT: '西北地区',
        YT: '育空地区',
        NU: '努纳武特地区'
    },
    
    // 城市名
    cities: {
        ON: {
            toronto: '多伦多',
            ottawa: '渥太华',
            mississauga: '密西沙加',
            hamilton: '哈密尔顿',
            london: '伦敦',
            markham: '万锦',
            vaughan: '旺市',
            kitchener: '基奇纳',
            waterloo: '滑铁卢',
            brampton: '布兰普顿'
        },
        QC: {
            montreal: '蒙特利尔',
            quebec: '魁北克城',
            laval: '拉瓦尔',
            gatineau: '加蒂诺',
            sherbrooke: '舍布鲁克'
        },
        BC: {
            vancouver: '温哥华',
            victoria: '维多利亚',
            burnaby: '本拿比',
            richmond: '列治文',
            surrey: '素里',
            kelowna: '基洛纳'
        },
        AB: {
            calgary: '卡尔加里',
            edmonton: '埃德蒙顿',
            redDeer: '红鹿市',
            lethbridge: '莱斯布里奇'
        },
        MB: {
            winnipeg: '温尼伯',
            brandon: '布兰登'
        },
        SK: {
            saskatoon: '萨斯卡通',
            regina: '里贾纳'
        },
        NS: {
            halifax: '哈利法克斯'
        },
        NB: {
            fredericton: '弗雷德里克顿',
            moncton: '蒙克顿',
            saintJohn: '圣约翰'
        },
        NL: {
            stJohns: '圣约翰斯'
        },
        PE: {
            charlottetown: '夏洛特敦'
        },
        NT: {
            yellowknife: '耶洛奈夫'
        },
        YT: {
            whitehorse: '白马市'
        },
        NU: {
            iqaluit: '伊卡卢伊特'
        }
    },
    
    // 大学名
    universities: {
        UofT: '多伦多大学',
        UBC: '不列颠哥伦比亚大学',
        McGill: '麦吉尔大学',
        McMaster: '麦克马斯特大学',
        Waterloo: '滑铁卢大学',
        Alberta: '阿尔伯塔大学',
        Ottawa: '渥太华大学',
        Montreal: '蒙特利尔大学'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '门牌号',
        building: '建筑',
        unit: '单元',
        city: '城市',
        province: '省份',
        postalCode: '邮编',
        fullName: '姓名',
        gender: '性别',
        age: '年龄',
        birthDate: '出生日期',
        phone: '电话',
        email: '邮箱',
        cardType: '卡类型',
        cardNumber: '卡号',
        sinNumber: 'SIN号码'
    }
};
