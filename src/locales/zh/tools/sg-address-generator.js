export default {
    name: '新加坡地址生成器 - 在线生成真实新加坡地址、身份信息与联系方式',
    description: '免费在线新加坡地址生成器，生成真实格式的新加坡地址、NRIC身份证号、电话、信用卡号等完整身份档案。支持按区域筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
    inputTitle: '生成配置',
    outputTitle: '生成结果',
    generateBtn: '生成数据',
    loadSampleBtn: '加载示例并生成',
    clearAll: '清除全部',
    noOutput: '暂无生成结果',
    preview: '预览数据',
    
    // 地理筛选
    locationTitle: '地理位置筛选',
    selectRegion: '选择区域',
    selectArea: '选择地区',
    allRegions: '全部区域',
    allAreas: '全部地区',
    postalCodeLabel: '邮政编码',
    
    // 地址类型
    addressTypeTitle: '地址类型',
    addressTypeResidential: '住宅地址',
    addressTypeCommercial: '商业地址',
    addressTypeHDB: 'HDB组屋',
    addressTypeCondo: '私人公寓',
    
    // 身份信息
    identityTitle: '身份信息',
    fullName: '全名',
    gender: '性别',
    genderMale: '男性',
    genderFemale: '女性',
    age: '年龄',
    birthDate: '出生日期',
    race: '种族',
    raceChinese: '华人',
    raceMalay: '马来族',
    raceIndian: '印度族',
    raceOthers: '其他',
    
    // 联系方式
    contactTitle: '联系方式',
    phoneNumber: '电话号码',
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
    idCardTitle: 'NRIC身份证',
    idCardNumber: 'NRIC号码',
    prefixLetter: '前缀字母',
    serialNumber: '序列号',
    checkLetter: '校验字母',
    
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
    buildingLabel: '大厦/组屋',
    unitLabel: '单位',
    postalCodeLabel: '邮编',
    regionLabel: '区域',
    
    // 区域名
    regions: {
        CR: '中区',
        ER: '东区',
        NR: '北区',
        NER: '东北区',
        WR: '西区'
    },
    
    // 地区名
    areas: {
        CR: {
            orchard: '乌节路',
            riverValley: '里峇峇利',
            newton: '纽顿',
            tanglin: '东陵',
            bukitTimah: '武吉知马',
            clementi: '金文泰',
            queenstown: '女皇镇'
        },
        ER: {
            bedok: '勿洛',
            changi: '樟宜',
            pasirRis: '巴西立',
            tampines: '淡滨尼',
            payaLebar: '巴耶利峇'
        },
        NR: {
            angMoKio: '宏茂桥',
            bishan: '碧山',
            serangoon: '实龙岗',
            hougang: '后港',
            sengkang: '盛港',
            punggol: '榜鹅'
        },
        NER: {
            hougang: '后港',
            punggol: '榜鹅',
            seletar: '实里达',
            sengkang: '盛港',
            serangoon: '实龙岗'
        },
        WR: {
            jurongEast: '裕廊东',
            jurongWest: '裕廊西',
            bukitBatok: '武吉巴督',
            choaChuKang: '蔡厝港',
            woodlands: '兀兰',
            sembawang: '三巴旺',
            yishun: '义顺'
        }
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '门牌号',
        building: '大厦',
        postalCode: '邮编',
        fullName: '姓名',
        gender: '性别',
        age: '年龄',
        birthDate: '出生日期',
        phone: '电话',
        email: '邮箱',
        cardType: '卡类型',
        cardNumber: '卡号',
        idCardNumber: 'NRIC号码'
    }
};
