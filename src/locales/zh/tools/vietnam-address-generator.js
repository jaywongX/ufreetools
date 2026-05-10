export default {
    name: '越南地址生成器 - 在线生成真实越南地址、身份信息与联系方式',
    description: '免费在线越南地址生成器，生成真实格式的越南地址、身份证号、电话、信用卡号等完整身份档案。支持按省筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
    inputTitle: '生成配置',
    outputTitle: '生成结果',
    generateBtn: '生成数据',
    loadSampleBtn: '加载示例并生成',
    clearAll: '清除全部',
    noOutput: '暂无生成结果',
    preview: '预览数据',
    
    // 地理筛选
    locationTitle: '地理位置筛选',
    selectProvince: '选择省/市',
    selectDistrict: '选择县/区',
    allProvinces: '全部省/市',
    allDistricts: '全部县/区',
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
    idCardTitle: '越南身份证',
    idCardNumber: '身份证号码',
    cmndNumber: 'CMND号码',
    cccdNumber: 'CCCD号码',
    serialNumber: '序列号',
    
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
    wardLabel: '坊/社',
    districtLabel: '县/区',
    provinceLabel: '省/市',
    postalCode: '邮政编码',
    
    // 地址格式
    addressNumber: '号',
    addressFloor: '楼',
    addressUnit: '室',
    commercialUnit: '（商业单位）',
    vietnam: '越南',
    postOfficeBox: '邮政信箱',
    studentDormitory: '学生宿舍',
    teachingBuilding: '教学楼',
    library: '图书馆',
    buildingUnit: '座',
    apartment: '公寓',
    
    // 提示信息
    idCardImageAlert: '身份证图片生成功能需要canvas实现',
    businessCardAlert: '名片生成功能需要canvas实现',
    
    // 省/直辖市名（越南63个省级行政区）
    provinces: {
        HN: '河内市',
        HCM: '胡志明市',
        HP: '海防市',
        DN: '岘港市',
        CT: '芹苴市',
        BH: '巴地头顿省',
        BD: '平阳省',
        QN: '广宁省',
        QG: '广南省',
        KG: '金瓯省',
        DT: '同奈省',
        HB: '河南省',
        TH: '太平省',
        NB: '南定省',
        VL: '永隆省',
        TG: '朔庄省',
        NT: '宁顺省',
        PY: '富安省',
        TV: '西宁省',
        BD: '平定省',
        HT: '和平省',
        TB: '宣光省',
        TN: '太原省',
        LC: '莱州省',
        YB: '安沛省',
        DB: '多博省',
        LA: '老街省',
        CB: '高平省',
        LD: '林同省',
        DC: '得乐省',
        QN: '广平省',
        QT: '广治省',
        HT: '河静省',
        NA: '乂安省',
        TT: '清化省',
        NB: '宁平省',
        ST: '安江省',
        CT: '茶荣省',
        BP: '槟知省',
        BL: '薄辽省',
        KG: '金瓯省',
        CM: '金瓯省'
    },
    
    // 县/区数据（以河内市和胡志明市为例）
    districtsData: {
        HN: {
            hoanKiem: '还剑郡',
            baDinh: '巴亭郡',
            dongDa: '东多郡',
            haiBaTrung: '二征夫人郡',
            thanhXuan: '清春郡',
            cauGiay: '纸桥郡',
            hoangMai: '黄梅郡',
            longBien: '龙编郡',
            tayHo: '西湖郡',
            bacTuLiem: '北慈廉郡',
            namTuLiem: '南慈廉郡',
            haDong: '河东郡'
        },
        HCM: {
            quan1: '第一郡',
            quan3: '第三郡',
            quan4: '第四郡',
            quan5: '第五郡',
            quan6: '第六郡',
            quan7: '第七郡',
            quan10: '第十郡',
            quan11: '第十一郡',
            binhThanh: '平盛郡',
            phuNhuan: '富润郡',
            tanBinh: '新平郡',
            goVap: '旧邑郡',
            binhChanh: '平政县',
            thuDuc: '守德市'
        },
        DN: {
            haiChau: '海洲郡',
            thanhKhe: '清溪郡',
            sonTra: '山茶郡',
           NguHanhSon: '五行山郡',
            LienChieu: '连朝区',
            CamLe: '嘉莱区'
        },
        HP: {
            HongBang: '鸿庞郡',
            LeChan: '黎真郡',
            NgoQuyen: '吴权郡',
            HaiAn: '海安郡',
            KiAn: '启发郡'
        }
    },
    
    // 大学名
    universities: {
        HUST: '河内科技大学',
        VNU: '越南国立大学',
        HANU: '河内国立大学',
        HCMUS: '胡志明市国立大学',
        RMIT: '皇家墨尔本理工大学越南分校',
        FTU: '对外贸易大学',
        NEU: '国民经济大学',
        HPU: '河内药科大学',
        PTIT: '邮电电信技术学院',
        FPT: 'FPT大学'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        houseNumber: '门牌号',
        building: '建筑',
        floor: '楼层',
        unit: '单位',
        ward: '坊/社',
        district: '县/区',
        province: '省/市',
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