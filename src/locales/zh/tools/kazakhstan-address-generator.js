export default {
    name: '哈萨克斯坦地址生成器 - 在线生成真实哈萨克斯坦地址、身份信息与联系方式',
    description: '免费在线哈萨克斯坦地址生成器，生成真实格式的哈萨克斯坦地址、身份证号、电话、信用卡号等完整身份档案。支持按州/城市筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
    inputTitle: '生成配置',
    outputTitle: '生成结果',
    generateBtn: '生成数据',
    loadSampleBtn: '加载示例并生成',
    clearAll: '清除全部',
    noOutput: '暂无生成结果',
    preview: '预览数据',
    
    // 地理筛选
    locationTitle: '地理位置筛选',
    selectRegion: '选择州/直辖市',
    selectCity: '选择城市',
    allRegions: '全部州/直辖市',
    allCities: '全部城市',
    postalCodeLabel: '邮政编码',
    
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
    
    // 身份证
    idCardTitle: '哈萨克斯坦身份证',
    idCardNumber: '身份证号码（ИИН）',
    
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
    unitLabel: '单元',
    regionLabel: '州/直辖市',
    
    // 地址格式
    addressFloor: '楼',
    addressUnit: '室',
    commercialUnit: '（商业单位）',
    postOfficeBox: '邮政信箱',
    studentDormitory: '学生宿舍',
    teachingBuilding: '教学楼',
    library: '图书馆',
    buildingUnit: '座',
    
    // 州名
    regions: {
        NUR: '阿斯塔纳（努尔苏丹）',
        ALA: '阿拉木图',
        SHY: '奇姆肯特',
        AKM: '阿克莫拉州',
        AKT: '阿克托别州',
        ATY: '阿特劳州',
        MAN: '曼格斯套州',
        PAV: '巴甫洛达尔州',
        SKZ: '南哈萨克斯坦州',
        KUS: '库斯塔奈州',
        KAR: '卡拉干达州',
        ZAP: '西哈萨克斯坦州',
        MNG: '江布尔州',
        TUR: '阿拉木图州',
        YUZ: '克孜勒奥尔达州',
        VOS: '东哈萨克斯坦州',
        ZHE: '杰兹卡兹甘州'
    },
    
    // 城市名
    cities: {
        NUR: {
            nursultan: '阿斯塔纳'
        },
        ALA: {
            almaty: '阿拉木图'
        },
        SHY: {
            shymkent: '奇姆肯特'
        },
        AKM: {
            akmola: '阿克莫拉',
            kokshetau: '科克舍套'
        },
        AKT: {
            aktobe: '阿克托别'
        },
        ATY: {
            atyrau: '阿特劳'
        },
        MAN: {
            aktau: '阿克套'
        },
        PAV: {
            pavlodar: '巴甫洛达尔'
        },
        SKZ: {
            turkestan: '突厥斯坦'
        },
        KUS: {
            kostanay: '库斯塔奈'
        },
        KAR: {
            karaganda: '卡拉干达'
        },
        ZAP: {
            uralsk: '乌拉尔斯克'
        },
        MNG: {
            taraz: '塔拉兹'
        },
        TUR: {
            taldykorgan: '塔尔迪库尔干'
        },
        YUZ: {
            kyzylorda: '克孜勒奥尔达'
        },
        VOS: {
            'ust-kamenogorsk': '乌斯季卡缅诺戈尔斯克'
        },
        ZHE: {
            temirtau: '铁米尔套'
        }
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '门牌号',
        building: '建筑',
        floor: '楼层',
        unit: '单元',
        region: '州/直辖市',
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
