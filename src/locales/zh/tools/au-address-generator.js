export default {
    name: '澳大利亚地址生成器 - 在线生成真实澳大利亚地址、身份信息与联系方式',
    description: '免费在线澳大利亚地址生成器，生成真实格式的澳大利亚地址、电话、信用卡号等完整身份档案。支持按州筛选，导出JSON/CSV格式，纯前端运行保护隐私。',
    inputTitle: '生成配置',
    outputTitle: '生成结果',
    generateBtn: '生成数据',
    loadSampleBtn: '加载示例并生成',
    clearAll: '清除全部',
    noOutput: '暂无生成结果',
    preview: '预览数据',
    
    // 地理筛选
    locationTitle: '地理位置筛选',
    selectState: '选择州/领地',
    selectCity: '选择城市',
    allStates: '全部州/领地',
    allCities: '全部城市',
    postalCodeLabel: '邮政编码',
    validatePostalCode: '验证邮编',
    
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
    
    // 税号
    taxFileTitle: '澳大利亚税号',
    taxFileNumber: '税号(TFN)',
    
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
    streetNumberLabel: '门牌号',
    suburbLabel: '郊区',
    stateLabel: '州',
    postcodeLabel: '邮编',
    unitLabel: '单元',
    
    // 地址格式
    addressNumber: '号',
    addressFloor: '楼',
    addressUnit: '室',
    commercialUnit: '（商业单位）',
    australia: '澳大利亚',
    postOfficeBox: '邮政信箱',
    studentDormitory: '学生宿舍',
    academicBuilding: '教学楼',
    library: '图书馆',
    buildingUnit: '座',
    
    // 州名
    states: {
        NSW: '新南威尔士州',
        VIC: '维多利亚州',
        QLD: '昆士兰州',
        WA: '西澳大利亚州',
        SA: '南澳大利亚州',
        TAS: '塔斯马尼亚州',
        ACT: '澳大利亚首都领地',
        NT: '北领地'
    },
    
    // 城市名
    cities: {
        NSW: {
            sydney: '悉尼',
            newcastle: '纽卡斯尔',
            wollongong: '卧龙岗',
            centralCoast: '中央海岸',
            canberra: '堪培拉'
        },
        VIC: {
            melbourne: '墨尔本',
            geelong: '吉朗',
            ballarat: '巴拉瑞特',
            bendigo: '本迪戈'
        },
        QLD: {
            brisbane: '布里斯班',
            goldCoast: '黄金海岸',
            sunshineCoast: '阳光海岸',
            townsville: '汤斯维尔',
            cairns: '凯恩斯'
        },
        WA: {
            perth: '珀斯',
            fremantle: '弗里曼特尔',
            mandurah: '曼杜拉'
        },
        SA: {
            adelaide: '阿德莱德',
            mountGambier: '甘比尔山',
            whyalla: '怀阿拉'
        },
        TAS: {
            hobart: '霍巴特',
            launceston: '朗塞斯顿',
            devonport: '德文波特'
        },
        ACT: {
            canberra: '堪培拉',
            queanbeyan: '昆比恩'
        },
        NT: {
            darwin: '达尔文',
            aliceSprings: '爱丽斯泉',
            palmerston: '帕默斯顿'
        }
    },
    
    // 大学
    universities: {
        USYD: '悉尼大学',
        UNSW: '新南威尔士大学',
        UMELB: '墨尔本大学',
        UQ: '昆士兰大学',
        ANU: '澳大利亚国立大学'
    },
    
    // CSV列名
    csv: {
        fullAddress: '完整地址',
        street: '街道',
        streetNumber: '门牌号',
        suburb: '郊区',
        state: '州',
        postcode: '邮编',
        fullName: '姓名',
        gender: '性别',
        age: '年龄',
        birthDate: '出生日期',
        phone: '电话',
        email: '邮箱',
        cardType: '卡类型',
        cardNumber: '卡号',
        taxFileNumber: '税号'
    },
    
    // 文章内容
    article: {
        title: '澳大利亚地址生成器：在线生成真实澳洲地址与完整身份档案工具',
        functionTitle: '澳大利亚地址生成器如何帮助你快速生成真实格式的澳洲地址？',
        
        useCasesTitle: '澳大利亚地址生成器的典型应用场景',
        useCase1: '<strong>软件开发测试：</strong>澳大利亚地址生成器为开发者提供大量符合澳洲地址格式要求的测试数据，用于表单验证、地址解析、信用卡验证等功能测试，无需手动输入真实信息。',
        useCase2: '<strong>数据库填充：</strong>澳大利亚地址生成器可批量生成数万条结构化地址数据，快速填充开发环境数据库，提高开发效率。',
        useCase3: '<strong>教育培训演示：</strong>澳大利亚地址生成器帮助教师和培训师创建示例数据，用于讲解澳洲地址格式、邮编规则、电话区号等知识，避免使用真实个人信息。',
        useCase4: '<strong>UI/UX设计原型：</strong>澳大利亚地址生成器为设计师提供真实的澳洲地址、姓名、电话等数据，让界面原型更加逼真，提升用户体验测试效果。',
        useCase5: '<strong>隐私保护测试：</strong>澳大利亚地址生成器生成虚拟身份信息，用于测试需要填写个人资料的网站或应用，保护真实隐私不被泄露。',
        useCase6: '<strong>数据分析练习：</strong>澳大利亚地址生成器创建符合澳洲地理分布规律的地址数据，用于数据分析、地理信息系统(GIS)等学习项目。',
        
        tipTitle: '专业使用建议',
        tipContent: '使用澳大利亚地址生成器时，建议根据实际需求选择对应的州和领地，这样生成的地址、郊区名称、街道命名会更加真实可信。对于需要大量数据的场景，可以使用批量生成功能，然后导出为CSV格式便于后续处理。',
        
        conclusion: '<p>无论是软件开发、数据测试还是教育培训，<strong>澳大利亚地址生成器</strong>都能提供高质量、格式正确的澳洲地址和相关身份信息。澳大利亚地址生成器采用开源算法，确保生成的数据符合澳洲地址标准格式，同时所有处理都在本地完成，无需担心数据泄露风险。通过澳大利亚地址生成器，你可以快速获得完整的身份档案，包括地址、联系方式、信用卡、税号、职业信息等，满足各种测试和演示需求。</p>',
        
        faqTitle: '澳大利亚地址生成器常见问题解答',
        faq1Question: '澳大利亚地址生成器生成的是真实存在的地址吗？',
        faq1Answer: '澳大利亚地址生成器生成的地址符合澳洲真实地址格式规范，包括有效的街道名称、正确的郊区和州特征，但这些地址是随机组合生成的，并非真实存在的具体地址。澳大利亚地址生成器主要用于测试、开发和教育目的，不应用于任何需要真实地址的正式用途。',
        
        faq2Question: '澳大利亚地址生成器生成的税号可以使用吗？',
        faq2Answer: '不可以。澳大利亚地址生成器生成的税号（TFN）虽然格式正确，通过了校验码验证，但这些都是虚拟税号，无法用于实际税务申报。澳大利亚地址生成器生成的税号仅用于测试表单验证、数据格式检查等开发场景，不能进行真实税务操作。',
        
        faq3Question: '澳大利亚地址生成器支持哪些数据导出格式？',
        faq3Answer: '澳大利亚地址生成器支持多种导出格式：JSON格式便于程序处理，CSV格式适合Excel等表格软件打开，可以直接复制或下载。澳大利亚地址生成器支持批量导出，一次可生成并下载多条记录。',
        
        faq4Question: '使用澳大利亚地址生成器会泄露隐私吗？',
        faq4Answer: '不会。澳大利亚地址生成器采用纯前端技术，所有数据生成和处理都在你的浏览器本地完成，不会上传任何信息到服务器。澳大利亚地址生成器不会收集、存储或传输任何用户数据，确保完全隐私安全。',
        
        faq5Question: '澳大利亚地址生成器可以按特定州或领地生成地址吗？',
        faq5Answer: '可以。澳大利亚地址生成器提供州和领地筛选功能，你可以选择特定的州或领地，系统会生成符合该地区特征的地址，包括匹配的街道名称、郊区命名风格等。澳大利亚地址生成器还支持选择城市区域，让数据更加真实。',
        
        tutorialTitle: '澳大利亚地址生成器使用指南',
        step1Title: '步骤一：选择地理位置',
        step1Description: '在澳大利亚地址生成器中，首先选择要生成地址的州和领地。你可以选择"全部州/领地"来随机生成，也可以指定特定地区以获得更符合当地特征的地址数据。',
        step1Note: '选择特定州和领地后，生成的地址、郊区名称会自动匹配该地区，提高数据的真实性。',
        
        step2Title: '步骤二：选择地址类型',
        step2Description: '根据需求在澳大利亚地址生成器中选择地址类型：住宅地址适合个人身份档案，商业地址适合企业信息，邮政信箱适合临时用途，大学校园地址适合学生档案。',
        step2Note: '不同类型的地址在格式和命名上会有差异，澳大利亚地址生成器会根据选择自动调整。',
        
        step3Title: '步骤三：配置生成选项',
        step3Description: '在澳大利亚地址生成器中设置需要生成的数据类型，包括身份信息（姓名、性别、年龄、出生日期）、联系方式（电话、邮箱）、信用卡、税号、职业档案、数字指纹等。你可以根据需要勾选或取消相应选项。',
        step3Note: '如果只需要地址信息，可以取消其他选项以加快生成速度。',
        
        step4Title: '步骤四：设置生成数量',
        step4Description: '在澳大利亚地址生成器中输入要生成的记录数量（1-100条），然后点击"生成数据"按钮。系统会在浏览器本地快速生成所有数据，无需等待服务器响应。',
        step4Note: '批量生成大量数据时，建议先测试少量数据确认格式是否符合需求。',
        
        step5Title: '步骤五：预览和验证数据',
        step5Description: '生成完成后，澳大利亚地址生成器会在输出区域显示所有生成的数据。你可以展开每条记录查看详细信息，验证地址格式、税号格式、电话格式等是否符合要求。',
        step5Note: '澳大利亚地址生成器生成的所有数据都符合澳洲标准格式，可以直接用于测试和演示。',
        
        step6Title: '步骤六：导出数据',
        step6Description: '确认数据无误后，在澳大利亚地址生成器中选择导出格式：JSON用于程序处理，CSV用于表格分析。点击下载按钮即可保存到本地。',
        step6Note: '导出的JSON和CSV文件包含所有生成字段，便于后续数据处理和分析。',
        
        successTitle: '生成完成！',
        successContent: '恭喜，你已成功掌握澳大利亚地址生成器的使用方法。现在你可以快速生成符合格式要求的澳洲地址和完整身份档案，用于开发测试、数据填充、教育培训等各种场景。',
        
        relatedToolsTitle: '你可能还想尝试的相关工具',
        relatedTool1Name: '随机密码生成器',
        relatedTool1Description: '生成安全可靠的随机密码，保护账户安全。',
        relatedTool1Url: 'https://www.ufreetools.com/tool/password-generator',
        
        relatedTool2Name: 'UUID生成器',
        relatedTool2Description: '快速生成唯一标识符(UUID)，用于数据库主键等场景。',
        relatedTool2Url: 'https://www.ufreetools.com/tool/uuid-generator',
        
        relatedTool3Name: 'JSON格式化工具',
        relatedTool3Description: '美化和验证JSON数据，便于阅读和调试。',
        relatedTool3Url: 'https://www.ufreetools.com/tool/json-formatter',
        
        relatedTool4Name: 'CSV转JSON工具',
        relatedTool4Description: '将CSV数据转换为JSON格式，具有可自定义选项。',
        relatedTool4Url: 'https://www.ufreetools.com/tool/csv-json-converter',
        
        reference1Name: 'Luhn算法 - 信用卡号验证',
        reference1Description: '学习信用卡号校验算法原理和实现方法。',
        reference1Url: 'https://en.wikipedia.org/wiki/Luhn_algorithm',
        
        reference2Name: '澳大利亚邮政 - 地址格式规范',
        reference2Description: '查看澳大利亚地址相关的格式规定和邮编规则。',
        reference2Url: 'https://www.auspost.com.au/',
        
        reference3Name: '澳大利亚税务局 - 税号(TFN)说明',
        reference3Description: '了解澳大利亚税号的格式规则和使用说明。',
        reference3Url: 'https://www.ato.gov.au/'
    }
};
