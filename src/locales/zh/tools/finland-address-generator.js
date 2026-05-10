export default {
    name: '芬兰地址生成器 - 在线生成真实芬兰地址、身份信息与联系方式',
    description: '免费在线芬兰地址生成器，生成真实格式的芬兰地址、身份证号、电话、信用卡号等完整身份档案。支持按地区筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
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
    selectMunicipality: '选择市镇',
    allRegions: '全部地区',
    allMunicipalities: '全部市镇',
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
    idCardTitle: '芬兰身份证',
    idCardNumber: '身份证号码',
    henkilötunnus: '个人身份号码',
    serialNumber: '序列号',
    checkDigit: '校验码',
    
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
    exportIdCard: '生成身份证图片',
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
    floorLabel: '楼层',
    unitLabel: '单位',
    municipalityLabel: '市镇',
    regionLabel: '地区',
    postalCode: '邮政编码',
    
    // 地址格式
    addressNumber: '号',
    addressFloor: '楼',
    addressUnit: '室',
    commercialUnit: '（商业单位）',
    finland: '芬兰',
    postOfficeBox: '邮政信箱',
    studentDormitory: '学生宿舍',
    teachingBuilding: '教学楼',
    library: '图书馆',
    buildingUnit: '座',
    apartment: '公寓',
    
    // 提示信息
    idCardImageAlert: '身份证图片生成功能需要canvas实现',
    businessCardAlert: '名片生成功能需要canvas实现',
    
    // 地区名（芬兰5个大区）
    regions: {
        Uusimaa: '新地区',
        Pirkanmaa: '皮尔卡马',
        VarsinaisSuomi: '本部芬兰',
        PohjoisPohjanmaa: '北波的尼亚',
        KeskiSuomi: '中芬兰',
        PäijätHäme: '于韦斯屈莱地区',
        KantaHäme: '坎塔哈梅',
        EteläKarjala: '南卡累利阿',
        PohjoisKarjala: '北卡累利阿',
        PohjoisSavo: '北萨沃',
        EteläSavo: '南萨沃',
        Kainuu: '凯努',
        PohjoisPohjanmaa: '北波的尼亚',
        KeskiPohjanmaa: '中波的尼亚',
        EteläPohjanmaa: '南波的尼亚',
        Satakunta: '萨塔昆塔',
        Ahvenanmaa: '奥兰',
        Lapland: '拉普兰'
    },
    
    // 市镇数据（以新地区大区为例）
    municipalitiesData: {
        Uusimaa: {
            helsinki: '赫尔辛基',
            espoo: '埃斯波',
            vantaa: '万塔',
            kauniainen: '考尼艾宁',
            järvenpää: '耶尔文佩',
            kerava: '凯拉瓦',
            tuusula: '图苏拉',
            nurmijärvi: '努尔米耶尔维',
            lyly: '林利耶尔维',
            sipoo: '西波',
            vantaa: '万塔',
            espoo: '埃斯波'
        },
        Pirkanmaa: {
            tampere: '坦佩雷',
            Nokia: '诺基亚',
            ylöjärvi: '于勒耶尔维',
            kangasala: '康加萨拉',
            lempäälä: '伦帕艾莱',
            pirkkala: '皮尔卡拉',
            orivesi: '奥里韦西',
            hängenkyrö: '杭根屈吕'
        },
        VarsinaisSuomi: {
            turku: '图尔库',
            rauma: '劳马',
            salo: '萨洛',
            pori: '波里',
            kaarina: '卡里纳',
            littoinen: '利托伊宁',
            raisio: '拉伊西奥',
            naantali: '纳坦利'
        },
        KeskiSuomi: {
            jyväskylä: '于韦斯屈莱',
            jyväskylänML: '于韦斯屈莱农村',
            lahti: '拉赫蒂',
            hollola: '霍洛拉',
            hrmeentti: '赫尔门蒂',
            asikkala: '阿西卡拉'
        },
        PäijätHäme: {
            lahti: '拉赫蒂',
            hollola: '霍洛拉',
            hrmeentti: '赫尔门蒂',
            asikkala: '阿西卡拉',
            pertunmaa: '佩尔图恩马',
            hartola: '哈托拉'
        }
    },
    
    // 大学名
    universities: {
        HY: '赫尔辛基大学',
        AALTO: '阿尔托大学',
        TUNI: '坦佩雷大学',
        UTA: '奥卢大学',
        UTU: '图尔库大学',
        JYU: '于韦斯屈莱大学',
        UEF: '东芬兰大学',
        TAMK: '坦佩雷应用科技大学',
        HAAGA: '海格应用科技大学',
        Laurea: '拉瑞亚应用科技大学'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '门牌号',
        building: '建筑',
        floor: '楼层',
        unit: '单位',
        municipality: '市镇',
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