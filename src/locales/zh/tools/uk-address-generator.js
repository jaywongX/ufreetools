export default {
    name: '英国地址生成器 - 在线生成真实英国地址、身份信息与联系方式',
    description: '免费在线英国地址生成器，生成真实格式的英国地址、国家保险号(NINO)、电话、信用卡号等完整身份档案。支持按郡筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
    inputTitle: '生成配置',
    outputTitle: '生成结果',
    generateBtn: '生成数据',
    loadSampleBtn: '加载示例并生成',
    clearAll: '清除全部',
    noOutput: '暂无生成结果',
    preview: '预览数据',
    
    // 地理筛选
    locationTitle: '地理位置筛选',
    selectCounty: '选择郡',
    selectCity: '选择城市',
    allCounties: '全部郡',
    allCities: '全部城市',
    postcodeLabel: '邮政编码',
    validatePostcode: '验证邮编',
    
    // 地址类型
    addressTypeTitle: '地址类型',
    addressTypeResidential: '住宅地址',
    addressTypeCommercial: '商业地址',
    addressTypePoBox: '邮政信箱',
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
    idCardTitle: '国家保险号(NINO)',
    idCardNumber: '国家保险号码',
    prefixLetter: '前缀字母',
    serialNumber: '序列号',
    suffixLetter: '后缀字母',
    
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
    cityLabel: '城市',
    countyLabel: '郡',
    
    // 郡名
    counties: {
        LND: '大伦敦',
        GRM: '大曼彻斯特',
        MAN: '曼彻斯特',
        BIR: '西米德兰兹',
        LEE: '西约克郡',
        SHE: '南约克郡',
        LIV: '默西塞德',
        BRS: '布里斯托尔',
        NEW: '泰恩-威尔',
        NOT: '诺丁汉郡',
        EDB: '爱丁堡',
        GLA: '格拉斯哥',
        CDF: '加的夫',
        BEL: '贝尔法斯特',
        SOU: '南安普顿',
        POR: '普利茅斯',
        BRI: '布莱顿',
        CAM: '剑桥郡'
    },
    
    // 城市名
    cities: {
        LND: {
            westminster: '威斯敏斯特',
            kensington: '肯辛顿',
            chelsea: '切尔西',
            camden: '卡姆登',
            islington: '伊斯灵顿',
            hackney: '哈克尼',
            towerHamlets: '塔哈姆雷特',
            greenwich: '格林威治'
        },
        GRM: {
            manchester: '曼彻斯特',
            salford: '索尔福德',
            bolton: '博尔顿',
            bury: '伯里',
            oldham: '奥尔德姆',
            rochdale: '罗奇代尔',
            stockport: '斯托克波特',
            wigan: '维根'
        },
        MAN: {
            manchesterCity: '曼彻斯特市',
            trafford: '特拉福德',
            tameside: '泰姆赛德',
            sale: '塞尔'
        },
        BIR: {
            birmingham: '伯明翰',
            coventry: '考文垂',
            wolverhampton: '伍尔弗汉普顿',
            dudley: '达德利',
            walsall: '沃尔索尔',
            sandwell: '桑德韦尔',
            solihull: '索利赫尔'
        },
        LEE: {
            leeds: '利兹',
            bradford: '布拉德福德',
            wakefield: '韦克菲尔德',
            kirklees: '柯克里斯',
            calderdale: '考尔德达尔'
        },
        SHE: {
            sheffield: '谢菲尔德',
            rotherham: '罗瑟勒姆',
            doncaster: '唐卡斯特',
            barnsley: '巴恩斯利'
        },
        LIV: {
            liverpool: '利物浦',
            knowsley: '诺斯利',
            sefton: '塞夫顿',
            wirral: '威勒尔',
            stHelens: '圣海伦斯'
        },
        BRS: {
            bristol: '布里斯托尔',
            southGloucestershire: '南格洛斯特郡',
            bath: '巴斯'
        },
        NEW: {
            newcastle: '纽卡斯尔',
            gateshead: '盖茨黑德',
            sunderland: '桑德兰',
            durham: '达勒姆',
            northTyneside: '北泰恩赛德',
            southTyneside: '南泰恩赛德'
        },
        NOT: {
            nottingham: '诺丁汉',
            derby: '德比',
            leicester: '莱斯特',
            lincoln: '林肯'
        },
        EDB: {
            edinburgh: '爱丁堡',
            glasgow: '格拉斯哥',
            aberdeen: '阿伯丁',
            dundee: '邓迪',
            inverness: '因弗内斯'
        },
        GLA: {
            glasgowCity: '格拉斯哥市',
            paisley: '佩斯利',
            motherwell: '马瑟韦尔',
            hamilton: '汉密尔顿',
            eastKilbride: '东基尔布赖德'
        },
        CDF: {
            cardiff: '加的夫',
            swansea: '斯旺西',
            newport: '纽波特',
            wrexham: '雷克瑟姆',
            barry: '巴里'
        },
        BEL: {
            belfast: '贝尔法斯特',
            derry: '德里',
            lisburn: '利斯本',
            newry: '纽里',
            bangor: '班戈'
        },
        SOU: {
            southampton: '南安普顿',
            portsmouth: '朴茨茅斯',
            bournemouth: '伯恩茅斯',
            poole: '普尔',
            winchester: '温彻斯特'
        },
        POR: {
            plymouth: '普利茅斯',
            exeter: '埃克塞特',
            truro: '特鲁罗',
            bath: '巴斯',
            taunton: '汤顿'
        },
        BRI: {
            brighton: '布莱顿',
            hove: '霍夫',
            worthing: '沃辛',
            eastbourne: '伊斯特本',
            hastings: '黑斯廷斯'
        },
        CAM: {
            cambridge: '剑桥',
            oxford: '牛津',
            peterborough: '彼得伯勒',
            luton: '卢顿',
            miltonKeynes: '米尔顿凯恩斯'
        }
    },
    
    // 大学名称
    universities: {
        OXF: '牛津大学',
        CAM: '剑桥大学',
        IMP: '帝国理工学院',
        UCL: '伦敦大学学院',
        EDB: '爱丁堡大学'
    },
    
    // 校园地址
    studentHall: '学生宿舍',
    academicBuilding: '教学楼',
    library: '图书馆',
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '门牌号',
        building: '建筑',
        postcode: '邮编',
        city: '城市',
        county: '郡',
        fullName: '姓名',
        gender: '性别',
        age: '年龄',
        birthDate: '出生日期',
        phone: '电话',
        email: '邮箱',
        cardType: '卡类型',
        cardNumber: '卡号',
        idCardNumber: '国家保险号'
    }
};
