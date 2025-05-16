export default {
    name: "RSA密钥对生成器",
    description: "批量生成可自定义密钥长度的RSA密钥对，清晰展示公私钥的结构信息，包括模数（m）、公钥指数（e）、私钥指数（d）、质因数（p、q）、私钥指数的模逆（dp、dq、coef）等",
    settings: "生成设置",
    keySize: "密钥长度",
    bits: "位",
    keySizeHint: "密钥长度必须在256到16384位之间，且必须是8的倍数",
    outputFormat: "输出格式",
    keyPairCount: "密钥对数量",
    generate: "生成密钥对",
    generating: "生成中",
    results: "生成的密钥对",
    noResults: "尚未生成密钥对。请配置设置并点击\"生成密钥对\"按钮。",
    keyPair: "密钥对",
    publicKey: "公钥",
    privateKey: "私钥",
    components: "密钥组件",
    exportAllAsPem: "导出全部为PEM格式",
    exportAllAsPkcs8: "导出全部为PKCS#8格式",
    copyAll: "复制全部",
    copied: "已复制到剪贴板！",
    generationError: "生成密钥对时出错。请重试。",
    aboutRsa: "关于RSA密钥对",
    rsaDescription: "RSA（Rivest–Shamir–Adleman）是一种公钥密码算法，它使用一对密钥：公钥用于加密，私钥用于解密。RSA广泛用于安全数据传输、数字签名和密钥交换。",
    keySizeTitle: "密钥长度建议",
    keySize1024: "1024位：不建议用于敏感数据（被认为安全性较低）",
    keySize2048: "2048位：一般用途的最低建议长度",
    keySize4096: "4096位：建议用于最高安全性或敏感应用",
    keyComponentsTitle: "密钥组件说明",
    modulusDesc: "两个大素数p和q的乘积",
    publicExponentDesc: "公钥指数（通常是一个小的素数，常用65537）",
    privateExponentDesc: "用于解密的私钥指数",
    primesDesc: "用于生成密钥的两个大素数",
    crtParamsDesc: "中国剩余定理参数，用于加速解密过程",
    article: {
      title: "RSA密钥对生成器：在线创建安全加密密钥",
      intro: "<strong>RSA密钥对生成器</strong>是一款强大的在线工具，可以生成密钥长度可自定义（从256位到16384位）的高安全性RSA公钥和私钥对。RSA（Rivest-Shamir-Adleman）是世界上使用最广泛的非对称加密算法之一，构成了互联网和企业系统安全通信的基础。我们的工具使创建这些必不可少的密码学组件变得简单、易用且安全。",
      
      featuresTitle: "RSA密钥对生成器的核心功能",
      feature1: "<strong>灵活的密钥长度选项</strong>：生成从256位到16384位的RSA密钥，以满足您特定的安全需求。",
      feature2: "<strong>多种输出格式</strong>：以行业标准格式导出密钥，包括PEM、PKCS#8、十六进制和Base64编码。",
      feature3: "<strong>批量生成</strong>：同时创建多个密钥对，用于测试或部署目的。",
      feature4: "<strong>组件可视化</strong>：检查密钥的数学组件，包括模数、指数、质因数和CRT参数。",
      feature5: "<strong>客户端处理</strong>：所有密钥生成都在您的浏览器中进行，敏感的加密材料永远不会离开您的设备。",
      
      useCasesTitle: "RSA密钥对的实际应用场景",
      
      useCase1Title: "安全通信和数据加密",
      useCase1Desc: "RSA密钥对是在不安全网络上建立安全通信渠道的基础。公钥可以自由共享，允许他人加密消息，而只有拥有私钥的您才能解密。这种<strong>RSA加密</strong>系统支撑着HTTPS网站的SSL/TLS、安全电子邮件系统和虚拟专用网络（VPN）等技术。",
      
      useCase2Title: "数字签名和文档认证",
      useCase2Desc: "RSA实现了<strong>数字签名</strong>功能，您可以使用私钥对文档进行签名，使任何拥有您公钥的人都能验证该文档确实由您签名且未被篡改。这在代码签名证书、金融交易、法律文档和区块链技术中被广泛使用。",
      
      useCase3Title: "身份验证和访问控制",
      useCase3Desc: "RSA密钥对为<strong>安全认证</strong>系统提供了强大的机制。SSH（安全外壳）使用RSA密钥进行无密码远程服务器登录。像相互TLS认证这样的环境中的客户端证书也依赖RSA密钥对来安全地验证客户端身份。",
      
      useCase4Title: "安全API通信和令牌签名",
      useCase4Desc: "现代应用程序和微服务经常使用RSA密钥来<strong>保护API通信</strong>和签署认证令牌，如JWT（JSON Web令牌）。RSA的非对称性质允许在分布式系统中安全验证令牌，而无需共享密钥。",
      
      relatedToolsText: "您可能还会发现这些相关的密码学工具很有用：",
      relatedTool1: "哈希计算器 - 生成和验证数据完整性的哈希值",
      relatedTool2: "统一社会信用代码生成器 - 创建有效的中国企业注册代码",
      
      tutorialTitle: "如何使用RSA密钥对生成器",
      
      step1Title: "步骤1：选择密钥长度",
      step1Desc: "首先选择所需的密钥长度（以位为单位）。对于一般安全目的，建议至少使用2048位密钥作为最低标准。对于要求更高安全性的应用，请选择4096位或更大的密钥。请记住，更大的密钥提供更好的安全性，但需要更多的计算资源来生成和使用。",
      
      step2Title: "步骤2：选择输出格式",
      step2Desc: "从下拉菜单中选择您偏好的输出格式。PEM是兼容性最广的格式，可通过'-----BEGIN RSA PRIVATE KEY-----'头部识别。PKCS#8是大多数当前系统支持的更现代的格式。十六进制和Base64编码对于特定的编程或系统集成需求很有用。",
      
      step3Title: "步骤3：指定密钥对数量",
      step3Desc: "如果您需要多个密钥对，请使用输入字段调整数量。这对于测试环境或同时部署多个安全系统特别有用。",
      
      step4Title: "步骤4：生成并保护您的密钥",
      step4Desc: "点击\"生成密钥对\"按钮并等待过程完成。对于较大的密钥长度，这可能需要一些时间。生成后，您可以查看、复制或导出您的密钥。确保安全地存储您的私钥，切勿与未经授权的方共享。",
      
      faqTitle: "关于RSA密钥对的常见问题",
      
      faq1Question: "什么是RSA密钥对？为什么我需要生成它们？",
      faq1Answer: "RSA密钥对由一个公钥和一个私钥组成，是非对称加密的基础。公钥用于加密数据或验证签名，而私钥用于解密数据或创建签名。您需要生成RSA密钥对来实现安全通信、数据加密、数字签名和身份验证等功能。",
      
      faq2Question: "我应该选择多少位的RSA密钥长度？",
      faq2Answer: "为了保证安全性，当前推荐的RSA密钥长度至少为2048位。对于一般用途，2048位密钥提供足够的安全性；对于需要长期保护的敏感数据或高安全性要求的系统，建议使用4096位或更长的密钥。密钥越长，安全性越高，但计算资源消耗也越大。",
      
      faq3Question: "PEM格式和PKCS#8格式有什么区别？",
      faq3Answer: "PEM格式和PKCS#8格式是存储和传输RSA密钥的两种常见编码方式。PEM格式使用BASE64编码，密钥文件以'-----BEGIN RSA PRIVATE KEY-----'开头；而PKCS#8是一种更通用的格式，能够存储各种类型的私钥，文件以'-----BEGIN PRIVATE KEY-----'开头。大多数现代系统支持PKCS#8格式，但某些旧系统可能只支持传统的PEM格式。",
      
      faq4Question: "如何安全地存储生成的RSA私钥？",
      faq4Answer: "RSA私钥必须妥善保护，避免被未授权访问。建议的安全存储方法包括：使用密码管理器、加密存储设备、硬件安全模块(HSM)或密钥管理系统。私钥文件应该使用强密码加密保护，并设置适当的访问权限。此外，创建备份也很重要，但要确保备份同样受到保护。",
      
      faq5Question: "生成的RSA密钥对可以用于哪些具体应用？",
      faq5Answer: "RSA密钥对广泛应用于多种安全场景：SSL/TLS证书和HTTPS网站安全；SSH安全远程登录；数字签名验证文件或代码的真实性；安全电子邮件通信(S/MIME)；企业VPN和安全认证系统；区块链和数字货币钱包；以及API身份验证和安全令牌生成。",
      
      referencesTitle: "参考资料与延伸阅读",
      reference1: "NIST特别出版物800-57：密钥管理建议",
      reference2: "RFC 8017：PKCS #1：RSA加密规范版本2.2",
      reference3: "FIPS 186-5：数字签名标准(DSS)",
      
      conclusionTitle: "结论",
      conclusionText: "<strong>RSA密钥对生成器</strong>提供了一种便捷安全的方法，用于创建现代数字安全所必需的加密密钥。无论您是保护网络通信、实施身份验证系统，还是签署敏感文档，正确生成的RSA密钥对都是这些安全措施的基础。通过使用我们的工具，您可以快速生成适当强度和正确格式的密钥，以满足您的特定应用需求，同时确保您的加密材料保持私密和安全。"
    }
  }