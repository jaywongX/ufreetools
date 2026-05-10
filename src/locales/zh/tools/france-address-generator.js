export default {
    name: '法国地址生成器 - 在线生成真实法国地址、身份信息与联系方式',
    description: '免费在线法国地址生成器，生成真实格式的法国地址、身份证号、电话、信用卡号等完整身份档案。支持按省筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
    inputTitle: '生成配置',
    outputTitle: '生成结果',
    generateBtn: '生成数据',
    loadSampleBtn: '加载示例并生成',
    clearAll: '清除全部',
    noOutput: '暂无生成结果',
    preview: '预览数据',
    
    // 地理筛选
    locationTitle: '地理位置筛选',
    selectRegion: '选择大区',
    selectDepartment: '选择省',
    allRegions: '全部大区',
    allDepartments: '全部省',
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
    idCardTitle: '法国身份证',
    idCardNumber: '身份证号码',
    nirNumber: 'NIR号码',
    serialNumber: '序列号',
    checkKey: '校验码',
    
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
    departmentLabel: '省',
    regionLabel: '大区',
    postalCode: '邮政编码',
    
    // 地址格式
    addressNumber: '号',
    addressFloor: '楼',
    addressUnit: '室',
    commercialUnit: '（商业单位）',
    france: '法国',
    postOfficeBox: '邮政信箱',
    studentDormitory: '学生宿舍',
    teachingBuilding: '教学楼',
    library: '图书馆',
    buildingUnit: '座',
    apartment: '公寓',
    
    // 提示信息
    idCardImageAlert: '身份证图片生成功能需要canvas实现',
    businessCardAlert: '名片生成功能需要canvas实现',
    
    // 大区名（法国18个大区）
    regions: {
        IDF: '法兰西岛',
        ARA: '奥弗涅-罗讷-阿尔卑斯',
        OCC: '奥克西塔尼',
        NAQ: '新阿基坦',
        PAC: '普罗旺斯-阿尔卑斯-蔚蓝海岸',
        HDF: '上法兰西',
        BFC: '勃艮第-弗朗什-孔泰',
        NAC: '卢瓦尔河地区',
        PDL: '卢瓦尔河地区',
        BRE: '布列塔尼',
        NOR: '诺曼底',
        GUA: '瓜德罗普',
        MQ: '马提尼克',
        GUY: '法属圭亚那',
        REU: '留尼汪',
        COR: '科西嘉',
        ALO: '阿尔萨斯-洛林',
        MP: '梅斯-波摩拉'
    },
    
    // 省份数据（以法兰西岛大区为例）
    departmentsData: {
        IDF: {
            paris: '巴黎',
            hautsDeSeine: '上塞纳省',
            seineSaintDenis: '塞纳-圣但尼省',
            valDeMarne: '马恩河谷省',
            yvelines: '伊夫林省',
            essonne: '埃松省',
            valDOise: '瓦兹河谷省',
            seineEtMarne: '塞纳-马恩省'
        },
        ARA: {
            rhone: '罗讷省',
            loire: '卢瓦尔省',
            isere: '伊泽尔省',
            ain: '安省',
            savoie: '萨瓦省',
            hauteSavoie: '上萨瓦省',
            allier: '阿列省',
            puyDeDome: '多姆山省'
        },
        OCC: {
            herault: '埃罗省',
            gard: '加尔省',
            aude: '奥德省',
            pyreneesOrientales: '东比利牛斯省',
            tarn: '塔恩省',
            hauteGaronne: '上加龙省',
            gers: '热尔省',
            lotEtGaronne: '洛特-加龙省'
        },
        NAQ: {
            gironde: '吉伦特省',
            charenteMaritime: '滨海夏朗德省',
            dordogne: '多尔多涅省',
            landes: '朗德省',
            vienne: '维埃纳省',
            hauteVienne: '上维埃纳省',
            charente: '夏朗德省',
            correze: '科雷兹省'
        },
        PAC: {
            bouchesDuRhone: '罗讷河口省',
            alpesMaritimes: '滨海阿尔卑斯省',
            var: '瓦尔省',
            vaucluse: '沃克吕兹省',
            alpesDeHauteProvence: '上普罗旺斯阿尔卑斯省',
            hautesAlpes: '上阿尔卑斯省'
        },
        HDF: {
            nord: '北部省',
            pasDeCalais: '加来海峡省',
            somme: '索姆省',
            aisne: '埃纳省',
            oise: '瓦兹省',
            aisne: '埃纳省'
        }
    },
    
    // 大学名
    universities: {
        UP1: '巴黎第一大学',
        UP2: '巴黎第二大学',
        UP3: '巴黎第三大学',
        UP4: '巴黎第四大学',
        UP5: '巴黎第五大学',
        UP6: '巴黎第六大学',
        UP7: '巴黎第七大学',
        UP8: '巴黎第八大学',
        UP9: '巴黎第九大学',
        UP10: '巴黎第十大学',
        UP11: '巴黎第十一大学',
        UP12: '巴黎第十二大学',
        UP13: '巴黎第十三大学',
        ENS: '巴黎高等师范学校',
        X: '巴黎综合理工学院'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '门牌号',
        building: '建筑',
        floor: '楼层',
        unit: '单位',
        department: '省',
        region: '大区',
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