export default {
    title: 'MAC地址生成器：在线生成随机MAC地址与网络设备标识工具',
    functionTitle: 'MAC地址生成器如何帮助你快速生成有效的网络设备标识？',

    useCasesTitle: 'MAC地址生成器的典型应用场景',
    useCase1: '<strong>网络设备测试：</strong>MAC地址生成器为网络工程师和开发者提供大量符合IEEE标准的MAC地址，用于路由器、交换机、防火墙等网络设备的配置测试和功能验证。',
    useCase2: '<strong>软件开发调试：</strong>MAC地址生成器可批量生成结构化MAC地址数据，用于网络应用开发、物联网(IoT)项目、蓝牙设备模拟等场景的测试和调试。',
    useCase3: '<strong>物联网设备模拟：</strong>MAC地址生成器帮助开发者创建虚拟设备标识，用于智能家居、工业物联网、车联网等项目的设备管理和通信测试。',
    useCase4: '<strong>安全测试研究：</strong>MAC地址生成器为安全研究人员提供匿名化的MAC地址，用于网络安全测试、渗透测试、MAC过滤绕过研究等场景。',
    useCase5: '<strong>教育培训演示：</strong>MAC地址生成器生成标准格式的MAC地址，帮助教师和学生理解网络层地址结构、OUI分配规则、单播多播区分等网络基础知识。',
    useCase6: '<strong>数据库填充：</strong>MAC地址生成器创建符合实际规律的MAC地址数据，用于网络管理系统、设备监控平台、资产管理系统的开发和测试数据库。',

    tipTitle: '专业使用建议',
    tipContent: '使用MAC地址生成器时，建议根据实际需求选择合适的格式和厂商前缀。对于需要模拟真实设备的场景，可以选择特定厂商的OUI前缀；对于安全测试场景，建议使用本地管理地址(LAA)避免与真实设备冲突。',

    conclusion: '<p>无论是网络工程、软件开发还是安全研究，<strong>MAC地址生成器</strong>都能提供高质量、符合IEEE标准的MAC地址。MAC地址生成器支持多种格式输出，包括冒号分隔、连字符分隔、点分隔等常用格式，同时提供厂商OUI前缀选择功能，让生成的地址更加真实可信。所有处理都在浏览器本地完成，无需担心数据泄露风险。</p>',

    faqTitle: 'MAC地址生成器常见问题解答',
    faq1Question: 'MAC地址生成器生成的地址是真实有效的吗？',
    faq1Answer: 'MAC地址生成器生成的MAC地址完全符合IEEE 802标准格式，通过正确的校验位设置确保地址有效性。但这些地址是随机生成的虚拟地址，不与任何真实网络设备关联。MAC地址生成器主要用于测试和开发目的，不应用于生产环境中的真实设备标识。',

    faq2Question: '什么是OUI前缀？如何使用厂商前缀功能？',
    faq2Answer: 'OUI(Organizationally Unique Identifier)是MAC地址前3个字节，由IEEE分配给各网络设备厂商。MAC地址生成器提供常见厂商的OUI前缀选择，选择特定厂商后，生成的MAC地址将使用该厂商的OUI，使地址看起来更像真实设备。你也可以输入自定义OUI前缀。',

    faq3Question: 'MAC地址生成器支持哪些输出格式？',
    faq3Answer: 'MAC地址生成器支持多种常用格式：冒号分隔格式(XX:XX:XX:XX:XX:XX)用于Linux/Unix系统，连字符分隔格式(XX-XX-XX-XX-XX-XX)用于Windows系统，点分隔格式(XXXX.XXXX.XXXX)用于Cisco设备，无分隔符格式(XXXXXXXXXXXX)用于部分嵌入式系统。',

    faq4Question: '单播地址和多播地址有什么区别？',
    faq4Answer: 'MAC地址的第一个字节的最低位(Least Significant Bit)决定地址类型。单播地址(Unicast)的该位为0，用于点对点通信，标识特定网络设备；多播地址(Multicast)的该位为1，用于组播通信，标识一组网络设备。MAC地址生成器支持生成这两种类型。',

    faq5Question: '全局唯一地址(UAA)和本地管理地址(LAA)有什么区别？',
    faq5Answer: '全局唯一地址(UAA, Universally Administered Address)由设备厂商分配，MAC地址第一个字节的倒数第二位为0；本地管理地址(LAA, Locally Administered Address)由网络管理员分配，该位为1。MAC地址生成器支持生成两种类型，LAA常用于虚拟机和测试环境。',

    tutorialTitle: 'MAC地址生成器使用指南',
    step1Title: '步骤一：选择MAC地址格式',
    step1Description: '在MAC地址生成器中，首先选择输出格式。冒号分隔格式适用于大多数Linux/Unix系统，连字符分隔格式适用于Windows系统，点分隔格式适用于Cisco网络设备。你也可以选择大写或小写字母输出。',
    step1Note: '不同系统和设备可能需要不同的格式，请根据实际使用场景选择合适的格式。',

    step2Title: '步骤二：选择地址类型',
    step2Description: '在MAC地址生成器中选择地址类型：单播地址用于标识单个设备，多播地址用于标识设备组；全局唯一地址(UAA)模拟真实设备，本地管理地址(LAA)用于虚拟环境。根据测试需求选择合适的组合。',
    step2Note: '大多数测试场景使用单播+全局唯一地址组合，虚拟机环境常用单播+本地管理地址组合。',

    step3Title: '步骤三：选择厂商前缀（可选）',
    step3Description: 'MAC地址生成器提供常见网络设备厂商的OUI前缀，如Apple、Cisco、Intel、华为等。选择特定厂商后，生成的MAC地址将使用该厂商的真实OUI前缀，使测试数据更加真实。也可以输入自定义OUI前缀。',
    step3Note: '如果不需要模拟特定厂商设备，可以选择"随机厂商"生成完全随机的MAC地址。',

    step4Title: '步骤四：设置生成数量',
    step4Description: '在MAC地址生成器中输入要生成的MAC地址数量（1-1000条），然后点击"生成地址"按钮。系统会在浏览器本地快速生成所有地址，无需等待服务器响应。',
    step4Note: '批量生成大量地址时，建议先测试少量数据确认格式和类型符合需求。',

    step5Title: '步骤五：查看和验证结果',
    step5Description: '生成完成后，MAC地址生成器会在输出区域显示所有生成的地址。你可以展开每条记录查看详细信息，包括厂商名称、地址类型、格式等。验证地址格式和类型是否符合要求。',
    step5Note: 'MAC地址生成器生成的所有地址都符合IEEE 802标准，可以直接用于测试和开发。',

    step6Title: '步骤六：导出数据',
    step6Description: '确认数据无误后，在MAC地址生成器中选择导出格式：JSON用于程序处理，CSV用于表格分析。你也可以复制单个地址或全部地址到剪贴板，粘贴到其他应用程序中使用。',
    step6Note: '导出的文件包含所有生成字段，便于后续数据处理和批量导入。',

    successTitle: '生成完成！',
    successContent: '恭喜，你已成功掌握MAC地址生成器的使用方法。现在你可以快速生成符合IEEE标准的MAC地址，用于网络设备测试、软件开发、物联网模拟等各种场景。',

    relatedToolsTitle: '你可能还想尝试的相关工具',
    relatedTool1Name: 'UUID生成器',
    relatedTool1Description: '生成唯一标识符(UUID)，用于数据库主键和唯一标识。',
    relatedTool1Url: 'https://www.ufreetools.com/tool/uuid-generator',

    relatedTool2Name: '香港地址生成器',
    relatedTool2Description: '在线生成真实香港地址、身份信息与联系方式。',
    relatedTool2Url: 'https://www.ufreetools.com/tool/hk-address-generator',

    relatedTool3Name: '随机密码生成器',
    relatedTool3Description: '生成安全可靠的随机密码，保护账户安全。',
    relatedTool3Url: 'https://www.ufreetools.com/tool/password-generator',

    relatedTool4Name: 'JSON格式化工具',
    relatedTool4Description: '美化和验证JSON数据，便于阅读和调试。',
    relatedTool4Url: 'https://www.ufreetools.com/tool/json-formatter',

    reference1Name: 'IEEE OUI数据库',
    reference1Description: '查询官方OUI分配信息和厂商列表。',
    reference1Url: 'https://standards-oui.ieee.org/',

    reference2Name: 'MAC地址 - 维基百科',
    reference2Description: '了解MAC地址的结构、类型和应用场景。',
    reference2Url: 'https://en.wikipedia.org/wiki/MAC_address',

    reference3Name: 'IEEE 802标准',
    reference3Description: '深入了解网络地址标准和规范。',
    reference3Url: 'https://standards.ieee.org/ieee/802/10328/'
};
