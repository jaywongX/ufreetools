export default {
    name: '土耳其地址生成器 - 在线生成真实土耳其地址、身份信息与联系方式',
    description: '免费在线土耳其地址生成器，生成真实格式的土耳其地址、身份证号、电话、信用卡号等完整身份档案。支持按省筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
    inputTitle: '生成配置',
    outputTitle: '生成结果',
    generateBtn: '生成数据',
    loadSampleBtn: '加载示例并生成',
    clearAll: '清除全部',
    noOutput: '暂无生成结果',
    preview: '预览数据',
    
    // 地理筛选
    locationTitle: '地理位置筛选',
    selectProvince: '选择省',
    selectDistrict: '选择区',
    allProvinces: '全部省',
    allDistricts: '全部区',
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
    idCardTitle: '土耳其身份证',
    idCardNumber: '身份证号码',
    nationalId: '国民身份证号',
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
    buildingLabel: '大厦',
    floorLabel: '楼层',
    unitLabel: '单位',
    districtLabel: '区',
    provinceLabel: '省',
    postalCode: '邮政编码',
    
    // 地址格式
    addressNumber: '号',
    addressFloor: '楼',
    addressUnit: '室',
    commercialUnit: '（商业单位）',
    turkey: '土耳其',
    postOfficeBox: '邮政信箱',
    studentDormitory: '学生宿舍',
    teachingBuilding: '教学楼',
    library: '图书馆',
    buildingUnit: '座',
    apartment: '公寓',
    
    // 提示信息
    idCardImageAlert: '身份证图片生成功能需要canvas实现',
    businessCardAlert: '名片生成功能需要canvas实现',
    
    // 省名（土耳其81个省，这里列出主要省份）
    provinces: {
        IST: '伊斯坦布尔',
        ANK: '安卡拉',
        IZM: '伊兹密尔',
        BUR: '布尔萨',
        ANT: '安塔利亚',
        ADN: '阿达纳',
        GAZ: '加济安泰普',
        KON: '科尼亚',
        MRA: '梅尔辛',
        KAY: '开塞利',
        ESK: '埃斯基谢希尔',
        TRA: '特拉布宗',
        SAM: '萨姆松',
        MAL: '马拉蒂亚',
        DIA: '迪亚巴克尔',
        ERZ: '埃尔祖鲁姆',
        VAN: '凡城',
        SIV: '锡瓦斯',
        TOK: '托卡特',
        COR: '乔鲁姆'
    },
    
    // 区域名（以伊斯坦布尔为例）
    districtsData: {
        IST: {
            beyoglu: '贝伊奥卢',
            fatih: '法提赫',
            kadikoy: '卡德柯伊',
            besiktas: '贝西克塔斯',
            sisli: '希什利',
            uskudar: '于斯屈达尔',
            bakirkoy: '巴克尔柯伊',
            zeytinburnu: '泽伊廷布尔努',
            beylikduzu: '贝伊利克杜祖',
            pendik: '彭迪克',
            maltepe: '马尔泰佩',
            kartal: '卡尔塔尔',
            tuzla: '图兹拉',
            bakirkoy: '巴克尔柯伊',
            catalca: '贾特尔贾'
        },
        ANK: {
            cankaya: '恰卡亚',
            yenimahalle: '耶尼马哈莱',
            altindag: '阿勒丁达格',
            pursaklar: '普尔萨克拉尔',
            eryaman: '埃里亚曼',
            etimesgut: '埃蒂梅斯古特',
            sincan: '辛詹'
        },
        IZM: {
            konak: '科纳克',
            karsiyaka: '卡尔什亚卡',
            bornova: '博尔诺瓦',
            cigli: '吉格利',
            bayrakli: '拜拉克勒',
            balcova: '巴尔科瓦',
            guzelbahce: '居泽尔巴赫切'
        },
        BUR: {
            nilufer: '尼吕费尔',
            osmangazi: '奥斯曼加齐',
            yildirim: '耶尔德勒姆',
            mudanya: '穆达尼亚',
            gemlik: '格姆利克'
        },
        ANT: {
            muratpasa: '穆拉特帕夏',
            kepez: '凯佩兹',
            konyaalti: '科尼亚阿勒',
            aksu: '阿克苏',
            dosenmeadi: '多森梅阿迪'
        }
    },
    
    // 大学名
    universities: {
        ITU: '伊斯坦布尔理工大学',
        ITU: '伊斯坦布尔大学',
        BOUN: '博阿齐奇大学',
        METU: '中东技术大学',
        HU: '哈杰泰佩大学',
        ANU: '安卡拉大学',
        DEU: '代尼兹利大学'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '门牌号',
        building: '大厦',
        floor: '楼层',
        unit: '单位',
        district: '区',
        province: '省',
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