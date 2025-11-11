export default {
    name: '香港地址生成器 - 在线生成真实香港地址、身份信息与联系方式',
    description: '免费在线香港地址生成器，生成真实格式的香港地址、身份证号、电话、信用卡号等完整身份档案。支持按区筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
    inputTitle: '生成配置',
    outputTitle: '生成结果',
    generateBtn: '生成数据',
    loadSampleBtn: '加载示例并生成',
    clearAll: '清除全部',
    noOutput: '暂无生成结果',
    preview: '预览数据',
    
    // 地理筛选
    locationTitle: '地理位置筛选',
    selectDistrict: '选择区',
    selectArea: '选择区域',
    allDistricts: '全部区',
    allAreas: '全部区域',
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
    idCardTitle: '香港身份证',
    idCardNumber: '身份证号码',
    prefixLetter: '前缀字母',
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
    
    // 地址格式
    addressNumber: '号',
    addressFloor: '楼',
    addressUnit: '室',
    commercialUnit: '（商业单位）',
    hongKong: '香港',
    postOfficeBox: '邮政信箱',
    studentDormitory: '学生宿舍',
    teachingBuilding: '教学楼',
    library: '图书馆',
    buildingUnit: '座',
    
    // 提示信息
    idCardImageAlert: '身份证图片生成功能需要canvas实现',
    businessCardAlert: '名片生成功能需要canvas实现',
    
    // 区名
    districts: {
        CW: '中西区',
        WAN: '湾仔区',
        E: '东区',
        S: '南区',
        YTM: '油尖旺区',
        SSP: '深水埗区',
        KC: '九龙城区',
        WTS: '黄大仙区',
        KT: '观塘区',
        TM: '屯门区',
        YL: '元朗区',
        N: '北区',
        TP: '大埔区',
        ST: '沙田区',
        SK: '西贡区',
        TW: '荃湾区',
        KW: '葵青区',
        IS: '离岛区'
    },
    
    // 区域名
    areas: {
        CW: {
            central: '中环',
            sheungWan: '上环',
            saiWan: '西环',
            midLevels: '半山'
        },
        WAN: {
            wanChai: '湾仔',
            causewayBay: '铜锣湾',
            happyValley: '跑马地',
            taiHang: '大坑'
        },
        E: {
            northPoint: '北角',
            quarryBay: '鰂鱼涌',
            taiKooShing: '太古城',
            shauKeiWan: '筲箕湾',
            chaiWan: '柴湾'
        },
        S: {
            repulseBay: '浅水湾',
            deepWaterBay: '深水湾',
            stanley: '赤柱',
            aberdeen: '香港仔',
            apLeiChau: '鸭脷洲'
        },
        YTM: {
            tsimShaTsui: '尖沙咀',
            yauMaTei: '油麻地',
            mongKok: '旺角',
            jordan: '佐敦'
        },
        SSP: {
            shamShuiPo: '深水埗',
            cheungShaWan: '长沙湾',
            laiChiKok: '荔枝角',
            shekKipMei: '石硖尾'
        },
        KC: {
            kowloonCity: '九龙城',
            toKwaWan: '土瓜湾',
            hungHom: '红磡',
            hoManTin: '何文田'
        },
        WTS: {
            wongTaiSin: '黄大仙',
            diamondHill: '钻石山',
            sanPoKong: '新蒲岗',
            lokFu: '乐富'
        },
        KT: {
            kwunTong: '观塘',
            lamTin: '蓝田',
            ngauTauKok: '牛头角',
            kowloonBay: '九龙湾'
        },
        TM: {
            tuenMun: '屯门',
            yuenLong: '元朗',
            tinShuiWai: '天水围',
            tsingShan: '青山'
        },
        YL: {
            yuenLong: '元朗',
            tinShuiWai: '天水围',
            kamTin: '锦田',
            pingShan: '屏山'
        },
        N: {
            sheungShui: '上水',
            fanLing: '粉岭',
            shaTauKok: '沙头角',
            taKuLing: '打鼓岭'
        },
        TP: {
            taiPo: '大埔',
            taiPoMarket: '大埔墟',
            taiWo: '太和',
            lamTsuen: '林村'
        },
        ST: {
            shaTin: '沙田',
            taiWai: '大围',
            maOnShan: '马鞍山',
            foTan: '火炭'
        },
        SK: {
            saiKung: '西贡',
            tseungKwanO: '将军澳',
            hangHau: '坑口',
            clearWaterBay: '清水湾'
        },
        TW: {
            tsuenWan: '荃湾',
            kwaiChung: '葵涌',
            tsingYi: '青衣',
            shamTseng: '深井'
        }
    },
    
    // 大学名
    universities: {
        HKU: '香港大学',
        CUHK: '香港中文大学',
        HKUST: '香港科技大学',
        PolyU: '香港理工大学',
        CityU: '香港城市大学'
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

