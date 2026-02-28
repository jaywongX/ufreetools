export default {
    name: '日本地址生成器 - 在线生成真实日本地址、身份信息与联系方式',
    description: '免费在线日本地址生成器，生成真实格式的日本地址、住民票番号、电话、信用卡号等完整身份档案。支持按都道府县筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
    inputTitle: '生成配置',
    outputTitle: '生成结果',
    generateBtn: '生成数据',
    loadSampleBtn: '加载示例并生成',
    clearAll: '清除全部',
    noOutput: '暂无生成结果',
    preview: '预览数据',
    
    // 地理筛选
    locationTitle: '地理位置筛选',
    selectPrefecture: '选择都道府县',
    selectCity: '选择市区町村',
    allPrefectures: '全部都道府县',
    allCities: '全部市区町村',
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
    fullNameKana: '片假名',
    gender: '性别',
    genderMale: '男性',
    genderFemale: '女性',
    age: '年龄',
    birthDate: '出生日期',
    zodiac: '星座',
    bloodType: '血型',
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
    employmentFullTime: '正社员',
    employmentPartTime: '契约社员',
    
    // 个人番号（My Number）
    idCardTitle: '个人番号(My Number)',
    idCardNumber: '个人番号',
    
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
    exportIdCard: '生成住民票图片',
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
    postalCodeLabelDisplay: '邮便番号',
    prefectureLabel: '都道府县',
    cityLabel: '市区町村',
    townLabel: '町名',
    chomeLabel: '丁目',
    banLabel: '番地',
    goLabel: '号',
    buildingLabel: '建物名',
    floorLabel: '阶',
    roomLabel: '室',
    
    // 地址格式
    addressNumber: '号',
    addressFloor: '阶',
    addressRoom: '室',
    commercialUnit: '（商业单位）',
    japan: '日本',
    postOfficeBox: '邮政信箱',
    studentDormitory: '学生寮',
    teachingBuilding: '教学楼',
    library: '图书馆',
    buildingUnit: '栋',
    
    // 提示信息
    idCardImageAlert: '住民票图片生成功能需要canvas实现',
    businessCardAlert: '名片生成功能需要canvas实现',
    
    // 都道府县
    prefectures: {
        '01': '北海道',
        '02': '青森县',
        '03': '岩手县',
        '04': '宫城县',
        '05': '秋田县',
        '06': '山形县',
        '07': '福岛县',
        '08': '茨城县',
        '09': '枥木县',
        '10': '群马县',
        '11': '崎玉县',
        '12': '千叶县',
        '13': '东京都',
        '14': '神奈川县',
        '15': '新潟县',
        '16': '富山县',
        '17': '石川县',
        '18': '福井县',
        '19': '山梨县',
        '20': '长野县',
        '21': '岐阜县',
        '22': '静冈县',
        '23': '爱知县',
        '24': '三重县',
        '25': '滋贺县',
        '26': '京都府',
        '27': '大阪府',
        '28': '兵库县',
        '29': '奈良县',
        '30': '和歌山县',
        '31': '鸟取县',
        '32': '岛根县',
        '33': '冈山县',
        '34': '广岛县',
        '35': '山口县',
        '36': '德岛县',
        '37': '香川县',
        '38': '爱媛县',
        '39': '高知县',
        '40': '福冈县',
        '41': '佐贺县',
        '42': '长崎县',
        '43': '熊本县',
        '44': '大分县',
        '45': '宫崎县',
        '46': '鹿儿岛县',
        '47': '冲绳县'
    },
    
    // 市区町村
    cities: {
        '01': {
            sapporo: '札幌市',
            asahikawa: '旭川市',
            hakodate: '函馆市',
            obihiro: '带广市'
        },
        '04': {
            sendai: '仙台市',
            shiogama: '盐釜市',
            ishinomaki: '石卷市'
        },
        '13': {
            chiyoda: '千代田区',
            chuo: '中央区',
            minato: '港区',
            shinjuku: '新宿区',
            shibuya: '涩谷区',
            shinagawa: '品川区',
            meguro: '目黑区',
            setagaya: '世田谷区',
            ota: '大田区',
            nerima: '练马区'
        },
        '14': {
            yokohama: '横滨市',
            kawasaki: '川崎市',
            sagamihara: '相模原市',
            fujisawa: '藤泽市'
        },
        '23': {
            nagoya: '名古屋市',
            toyohashi: '丰桥市',
            okazaki: '冈崎市'
        },
        '26': {
            kyoto: '京都市',
            utsunomiya: '宇治市'
        },
        '27': {
            osaka: '大阪市',
            sakai: '堺市',
            hirakata: '枚方市',
            toyonaka: '丰中市'
        },
        '28': {
            kobe: '神户市',
            himeji: '姬路市',
            amagasaki: '尼崎市'
        },
        '40': {
            fukuoka: '福冈市',
            kitakyushu: '北九州市',
            kurume: '久留米市'
        },
        '47': {
            naha: '那霸市',
            okinawa: '冲绳市'
        }
    },
    
    // 大学名称
    universities: {
        UTokyo: '东京大学',
        KyotoU: '京都大学',
        OsakaU: '大阪大学',
        TohokuU: '东北大学',
        NagoyaU: '名古屋大学',
        KyushuU: '九州大学',
        HokkaidoU: '北海道大学',
        Keio: '庆应义塾大学',
        Waseda: '早稻田大学'
    },
    
    // 血型
    bloodTypes: {
        A: 'A型',
        B: 'B型',
        O: 'O型',
        AB: 'AB型'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        postalCode: '邮便番号',
        prefecture: '都道府县',
        city: '市区町村',
        town: '町名',
        building: '建物名',
        fullName: '姓名',
        fullNameKana: '片假名',
        gender: '性别',
        age: '年龄',
        birthDate: '出生日期',
        phone: '电话',
        email: '邮箱',
        cardType: '卡类型',
        cardNumber: '卡号',
        idCardNumber: '个人番号'
    }
};
