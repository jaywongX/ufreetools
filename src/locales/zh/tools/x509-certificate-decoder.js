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
    exportPem: '导出PEM',
    downloadCert: '下载证书',
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

  keyUsages: {
    digitalSignature: '数字签名',
    nonRepudiation: '防抵赖',
    keyEncipherment: '密钥加密',
    dataEncipherment: '数据加密',
    keyAgreement: '密钥协商',
    keyCertSign: '证书签名',
    crlSign: 'CRL签名',
    encipherOnly: '仅加密',
    decipherOnly: '仅解密'
  }
}; 