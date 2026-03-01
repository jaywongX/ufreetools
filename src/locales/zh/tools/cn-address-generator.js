export default {
    name: '中国地址生成器 - 在线生成真实中国地址、身份信息与联系方式',
    description: '免费在线中国地址生成器，生成真实格式的中国大陆地址、身份证号、手机号、银行卡号等完整身份档案。支持按省份筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
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
    selectDistrict: '选择区县',
    allProvinces: '全部省份',
    allCities: '全部城市',
    allDistricts: '全部区县',
    postalCodeLabel: '邮政编码',
    
    // 地址类型
    addressTypeTitle: '地址类型',
    addressTypeResidential: '住宅地址',
    addressTypeCommercial: '商业地址',
    addressTypeCampus: '大学校园',
    
    // 身份信息
    identityTitle: '身份信息',
    fullName: '姓名',
    gender: '性别',
    genderMale: '男性',
    genderFemale: '女性',
    age: '年龄',
    birthDate: '出生日期',
    zodiac: '生肖',
    
    // 联系方式
    contactTitle: '联系方式',
    phoneNumber: '手机号码',
    email: '邮箱地址',
    
    // 银行卡
    bankCardTitle: '银行卡信息',
    bankName: '银行名称',
    cardNumber: '卡号',
    
    // 身份证
    idCardTitle: '身份证',
    idCardNumber: '身份证号码',
    
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
    provinceLabel: '省/直辖市',
    cityLabel: '市',
    districtLabel: '区/县',
    streetLabel: '街道',
    communityLabel: '小区/大厦',
    
    // 省份（部分主要省份）
    provinces: {
        beijing: '北京市',
        shanghai: '上海市',
        tianjin: '天津市',
        chongqing: '重庆市',
        guangdong: '广东省',
        jiangsu: '江苏省',
        zhejiang: '浙江省',
        shandong: '山东省',
        henan: '河南省',
        sichuan: '四川省',
        hubei: '湖北省',
        hunan: '湖南省',
        fujian: '福建省',
        anhui: '安徽省',
        hebei: '河北省',
        shaanxi: '陕西省',
        liaoning: '辽宁省',
        jilin: '吉林省',
        heilongjiang: '黑龙江省',
        yunnan: '云南省',
        guizhou: '贵州省',
        guangxi: '广西壮族自治区',
        hainan: '海南省',
        shanxi: '山西省',
        jiangxi: '江西省',
        gansu: '甘肃省',
        qinghai: '青海省',
        neimenggu: '内蒙古自治区',
        ningxia: '宁夏回族自治区',
        xinjiang: '新疆维吾尔自治区',
        xizang: '西藏自治区'
    },
    
    // 热门城市
    cities: {
        beijing: ['朝阳区', '海淀区', '东城区', '西城区', '丰台区', '石景山区', '通州区', '顺义区', '大兴区', '昌平区'],
        shanghai: ['浦东新区', '黄浦区', '徐汇区', '长宁区', '静安区', '普陀区', '虹口区', '杨浦区', '闵行区', '宝山区'],
        tianjin: ['和平区', '河东区', '河西区', '南开区', '河北区', '红桥区', '滨海新区', '东丽区', '西青区', '津南区'],
        chongqing: ['渝中区', '大渡口区', '江北区', '沙坪坝区', '九龙坡区', '南岸区', '北碚区', '渝北区', '巴南区'],
        guangzhou: ['天河区', '越秀区', '海珠区', '荔湾区', '白云区', '黄埔区', '番禺区', '花都区', '南沙区', '增城区'],
        shenzhen: ['福田区', '罗湖区', '南山区', '盐田区', '宝安区', '龙岗区', '龙华区', '坪山区', '光明区'],
        hangzhou: ['上城区', '下城区', '江干区', '拱墅区', '西湖区', '滨江区', '萧山区', '余杭区', '富阳区', '临安区'],
        nanjing: ['玄武区', '秦淮区', '建邺区', '鼓楼区', '浦口区', '栖霞区', '雨花台区', '江宁区', '六合区', '溧水区'],
        chengdu: ['锦江区', '青羊区', '金牛区', '武侯区', '成华区', '龙泉驿区', '青白江区', '新都区', '温江区', '双流区'],
        wuhan: ['江岸区', '江汉区', '硚口区', '汉阳区', '武昌区', '青山区', '洪山区', '东西湖区', '汉南区', '蔡甸区'],
        xian: ['新城区', '碑林区', '莲湖区', '灞桥区', '未央区', '雁塔区', '阎良区', '临潼区', '长安区', '高陵区'],
        suzhou: ['姑苏区', '虎丘区', '吴中区', '相城区', '吴江区', '昆山市', '常熟市', '张家港市', '太仓市']
    },
    
    // 街道名称模板
    streetPrefixes: ['人民', '解放', '建设', '和平', '中山', '北京', '上海', '南京', '长江', '黄河', '东风', '胜利', '光明', '幸福', '团结', '友谊', '文化', '科技', '创新', '发展'],
    streetSuffixes: ['路', '大道', '街', '巷', '胡同'],
    
    // 小区/大厦名称
    communityPrefixes: ['阳光', '花园', '绿地', '金色', '和谐', '幸福', '康乐', '紫荆', '玫瑰', '牡丹', '碧水', '蓝天', '清风', '明月', '星河', '翠竹', '梧桐', '杨柳', '芙蓉', '百合'],
    communitySuffixes: ['小区', '花园', '苑', '城', '湾', '府', '庭', '园', '居', '庄', '公寓', '大厦', '广场', '中心'],
    
    // 银行列表
    banks: [
        '中国工商银行', '中国建设银行', '中国农业银行', '中国银行', '交通银行',
        '招商银行', '中信银行', '浦发银行', '民生银行', '兴业银行',
        '光大银行', '华夏银行', '平安银行', '广发银行', '邮储银行'
    ],
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        province: '省份',
        city: '城市',
        district: '区县',
        street: '街道',
        community: '小区',
        fullName: '姓名',
        gender: '性别',
        age: '年龄',
        birthDate: '出生日期',
        phone: '手机号',
        email: '邮箱',
        idCardNumber: '身份证号',
        bankName: '银行',
        cardNumber: '银行卡号'
    }
};
