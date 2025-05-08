export default {
  name: 'X.509 证书解析器',
  description: '免费在线X.509证书解析工具。解析和分析SSL/TLS证书，查看证书详情，检查有效期，提取公钥，导出报告。',
  instructions: {
    title: '证书解析器',
    description: '上传证书文件或粘贴 PEM 编码的证书以查看其详细信息。'
  },
  dropzone: {
    title: '拖放证书文件到这里',
    formats: '支持 .crt、.cer、.pem、.der、.p12 和 .pfx 文件'
  },
  buttons: {
    browse: '浏览文件',
    decode: '解析证书',
    loadSample: '加载样例',
    downloadPdf: '下载 PDF 报告',
    downloadTxt: '下载文本报告',
    downloadHtml: '下载 HTML 报告',
    downloadJson: '下载 JSON 报告',
    copyBasic: '复制基本信息',
    copySubject: '复制主体/颁发者',
    copyAll: '复制全部信息',
    copyValue: '复制值',
    downloadKey: '下载密钥',
    exportPem: '导出PEM'
  },
  input: {
    paste: '或粘贴证书数据：',
    placeholder: '粘贴您的 PEM 编码证书（-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----）'
  },
  loading: '正在解析证书...',
  error: {
    title: '解析证书时出错',
    invalidFormat: '无效的证书格式',
    invalidBase64: '不是有效的 base64 编码证书',
    invalidStructure: '无效的证书数据结构',
    invalidDer: '无效的 DER 格式证书',
    invalidAsn1: '无效的证书：无法解析 ASN.1 数据',
    unsupportedType: '不支持的证书数据类型',
    failedParse: '无法解析证书数据',
    invalidP12: '无效的 PKCS#12 文件格式',
    invalidP12Password: '无效的 PKCS#12 密码',
    noCertificatesInP12: 'PKCS#12 文件中未找到证书',
    unableToProcessP12: '无法处理 PKCS#12 文件'
  },
  guide: {
    title: '如何使用此工具',
    step1: '上传您的 X.509 证书文件（.crt、.cer、.pem、.der、.p12 或 .pfx）或在下方文本框中粘贴证书数据。',
    step2: '工具会自动检测格式（PEM、DER 或 PKCS#12）并进行解码。',
    step3: '查看详细的证书信息，包括主体、颁发者、有效期、扩展和公钥数据。',
    step4: '您可以使用底部的按钮以多种格式下载证书报告或复制信息到剪贴板。'
  },
  tabs: {
    basic: '基本信息',
    subject: '主体与颁发者',
    extensions: '扩展',
    publicKey: '公钥',
    fingerprints: '指纹',
    raw: '原始证书'
  },
  results: {
    title: '证书详情',
    serialNumber: '序列号',
    version: '版本',
    sigAlg: '签名算法',
    validFrom: '生效时间',
    validTo: '过期时间',
    subject: '主体',
    issuer: '颁发者',
    extensions: '扩展',
    publicKey: '公钥',
    algorithm: '算法',
    keySize: '密钥大小',
    keyValue: '密钥值',
    fingerprints: '指纹',
    rawCertificate: '原始证书',
    field: '字段',
    value: '值',
    critical: '关键',
    noExtensions: '此证书中未找到扩展信息。',
    validity: '证书有效期',
    expired: '已过期 {days} 天',
    expiresIn: '将在 {days} 天后过期',
    visualization: '证书可视化',
    daysRemaining: '剩余天数',
    valid: '有效',
    expired: '已过期',
    expiringSoon: '即将过期',
    fieldDescriptions: '字段说明',
    certificateUsage: '证书用途',
    certificateChain: '证书链',
    signatureValue: '签名值',
    notAvailable: '不可用',
    noSpecificUsage: '未指定特定用途',
    signatureError: '解析签名值时出错',
    keyDetails: '密钥详情',
    enhancedView: '增强视图',
    endEntity: '终端实体',
    intermediate: '中间证书',
    rootCA: '根CA',
    endEntityCert: '终端实体证书',
    intermediateCert: '中间证书',
    rootCert: '根证书颁发机构',
    issuedBy: '颁发者',
    unknownIssuer: '未知颁发者',
    notYetValid: '尚未生效'
  },
  report: {
    title: 'X.509 证书报告',
    generatedOn: '生成于'
  },
  extensions: {
    subjectKeyIdentifier: '主体密钥标识符',
    keyUsage: '密钥用途',
    subjectAltName: '主体备用名称',
    basicConstraints: '基本约束',
    crlDistributionPoints: 'CRL 分发点',
    certificatePolicies: '证书策略',
    authorityKeyIdentifier: '授权密钥标识符',
    extKeyUsage: '扩展密钥用途',
    authorityInfoAccess: '授权信息访问',
    ctPrecertificateScts: 'CT 预证书 SCTs'
  },
  usage: {
    serverAuth: '服务器认证',
    clientAuth: '客户端认证',
    codeSigning: '代码签名',
    emailProtection: '电子邮件保护',
    timeStamping: '时间戳',
    ocspSigning: 'OCSP签名'
  },
  customOID: {
    title: '自定义OID查询',
    placeholder: '输入OID，例如 2.5.29.15',
    lookup: '查询',
    result: '结果',
    value: '值',
    notFound: '未找到此OID的信息',
    foundButComplex: '已找到该OID，但值较复杂',
    unknownName: '未知名称的OID',
    complexValue: '复杂值，无法直接显示'
  },
  descriptions: {
    serialNumber: '证书的唯一序列号，由证书颁发机构分配',
    version: '证书格式的版本号，通常为V3',
    sigAlg: '用于生成证书签名的算法',
    validFrom: '证书有效期的开始日期和时间',
    validTo: '证书有效期的结束日期和时间',
    subject: '证书持有者的身份信息',
    issuer: '签发证书的证书颁发机构的身份信息',
    publicKey: '证书持有者的公钥信息',
    extensions: '包含有关证书用途的其他信息的扩展字段'
  },
  messages: {
    copiedToClipboard: '已复制到剪贴板',
    copyError: '复制到剪贴板失败'
  },
  pkcs12: {
    passwordPrompt: '请输入PKCS#12文件的密码',
    noPassword: '无密码'
  },
  article: {
    title: 'X.509证书解析器：分析和验证SSL/TLS证书',
    introduction: {
      title: 'X.509证书解析器是什么？',
      p1: '<strong>X.509证书解析器</strong>是一种强大的工具，可帮助安全专业人员、Web开发人员和IT管理员分析SSL/TLS协议中使用的数字证书。我们免费的在线X.509证书解析工具提供了对证书组件、有效性状态和安全特性的全面分析，无需安装任何软件。',
      p2: '数字证书对于安全的网络通信至关重要，能够建立浏览器和服务器之间的可信连接。然而，解决证书问题需要理解它们复杂的结构和编码数据。X.509证书解析器通过将原始证书数据解析为人类可读的信息来简化这一过程，从而能够快速识别问题并验证证书的真实性。'
    },
    useCases: {
      title: '证书解析的常见用例',
      case1: '<strong>SSL/TLS证书验证</strong>：在部署前验证网站证书的真实性和完整性。',
      case2: '<strong>证书过期监控</strong>：检查有效期和到期日期，防止意外的服务中断。',
      case3: '<strong>证书路径验证</strong>：检查证书链以确保证书之间的正确信任关系。',
      case4: '<strong>证书配置故障排除</strong>：识别证书中导致浏览器警告或连接问题的配置错误。',
      case5: '<strong>数字签名验证</strong>：检查证书签名算法和公钥参数进行安全评估。'
    },
    faq: {
      title: '关于X.509证书的常见问题',
      q1: '我可以从X.509证书中提取哪些信息？',
      a1: '使用我们的<strong>X.509证书解析器</strong>，您可以提取全面的信息，包括颁发者详情、主体信息、有效期、公钥参数、扩展（如主体备用名称）、数字签名算法和证书指纹。该工具还提供证书健康状况和到期状态的可视化指标，使识别需要更新的证书变得容易。',
      q2: '如何知道我的证书是否被浏览器信任？',
      a2: '如果证书由认可的证书颁发机构（CA）颁发并形成有效的信任链，浏览器通常会信任该证书。我们的解析工具帮助您可视化证书链并验证每个证书的有效性。关键指标包括证书颁发者（应为受信任的CA）、有效日期（未过期）、正确的基本约束（对于中间证书）和适当的密钥用途扩展。浏览器信任还取决于证书未被吊销，可通过证书中的OCSP或CRL信息进行检查。',
      q3: 'PEM和DER证书格式有什么区别？',
      a3: 'PEM（隐私增强邮件）和DER（可分辨编码规则）是X.509证书的两种常见格式。<strong>PEM格式</strong>是Base64编码的，以"-----BEGIN CERTIFICATE-----"开头，是人类可读的文本。它常用于Web服务器和电子邮件。<strong>DER格式</strong>是二进制编码的，不可人类阅读，但更紧凑。我们的证书解析工具自动支持这两种格式，无需手动选择即可检测和解析适当的格式。',
      q4: '如何检查我的证书是否支持特定的TLS功能？',
      a4: '要检查证书中的TLS功能支持，请使用我们的证书解析器检查<strong>扩展密钥用途</strong>和<strong>密钥用途</strong>扩展。对于服务器认证（Web服务器），请在扩展密钥用途中查找"服务器认证"（1.3.6.1.5.5.7.3.1）值。密钥用途扩展指示允许的操作，如数字签名或密钥加密。此外，检查签名算法以确保使用现代、安全的算法（如SHA-256与RSA或ECDSA），而不是过时的算法（如SHA-1或MD5）。',
      q5: '如果我的证书即将过期，我应该怎么做？',
      a5: '如果我们的<strong>证书解析器</strong>显示您的证书即将过期（通常在30天内），您应该通过您的证书提供商或证书颁发机构立即续签。续签过程通常包括：1）生成新的证书签名请求（CSR），2）将其提交给您的CA，3）完成验证要求，以及4）在服务器上安装新证书。我们建议在过期前至少2-4周启动此过程，以避免服务中断或用户安全警告。'
    },
    tutorial: {
      title: '如何使用X.509证书解析器',
      step1: {
        title: '上传或粘贴您的证书',
        content: '首先通过文件上传器上传证书文件（.crt、.cer、.pem或.der），或直接在输入框中粘贴PEM编码的证书文本。我们的工具支持拖放功能，方便文件上传。如果您没有证书可分析，可以点击"加载样例"按钮，查看工具如何处理演示证书。'
      },
      step2: {
        title: '解析证书',
        content: '加载证书后，点击"解析证书"按钮。我们的工具将自动检测格式（PEM或DER）并解析证书数据。处理完全在您的浏览器中进行，确保您的证书数据不会离开您的设备——这使它成为分析敏感证书的安全选择。'
      },
      step3: {
        title: '分析证书详情',
        content: '解析后，工具将以易于导航的选项卡形式显示全面的证书信息。"基本信息"选项卡显示核心细节，如有效期、序列号和签名算法。视觉指标清晰地显示证书是否有效、即将过期或已过期。您可以在专门的选项卡中探索更详细的信息，包括主体和颁发者、扩展、公钥等。'
      },
      step4: {
        title: '导出和下载报告',
        content: '要保存或共享您的证书分析，请使用结果部分底部的导出功能。您可以以多种格式（PDF、TXT、HTML或JSON）下载全面报告，或将特定部分复制到剪贴板。这些报告对于文档记录、合规目的或在故障排除期间与团队成员共享非常有价值。'
      }
    },
    resources: {
      title: '额外资源',
      intro: '通过这些有价值的资源扩展您对X.509证书和相关安全主题的了解：',
      relatedTools: '相关安全工具',
      tool1: '哈希生成器 - 为数据验证创建加密哈希',
      tool2: 'Base64编码器/解码器 - 在二进制和Base64格式之间转换',
      tool3: 'JWT解码器 - 分析用于身份验证的JSON Web令牌',
      externalLinks: '外部参考',
      external1: 'IETF RFC 5280 - 互联网X.509公钥基础设施证书',
      external2: '维基百科 - X.509证书标准概述',
      external3: 'SSL.com - 什么是X.509证书？'
    },
    conclusion: {
      title: '结论',
      content: '<strong>X.509证书解析器</strong>是任何使用数字证书和安全通信的人的必备工具。通过提供关于证书结构和有效性的清晰、详细的信息，我们的工具帮助您确保SSL/TLS实现安全无误。无论您是进行审计的安全专业人员，排除HTTPS问题的Web开发人员，还是管理证书部署的IT管理员，这个解析器都能简化证书分析并增强您的安全实践。'
    }
  }
} 