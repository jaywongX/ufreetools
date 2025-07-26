export default {
  name: 'X.509 證書解析器',
  description: '免費線上X.509證書解析工具。解析和分析SSL/TLS證書，查看證書詳情，檢查有效期，提取公鑰，導出報告。',

  instructions: {
    title: '證書解析器',
    description: '上傳證書文件或粘貼 PEM 編碼的證書以查看其詳細信息。'
  },

  dropzone: {
    title: '拖放證書文件到這裡',
    formats: '支援 .crt、.cer、.pem、.der、.p12 和 .pfx 文件'
  },

  buttons: {
    browse: '瀏覽文件',
    decode: '解析證書',
    loadSample: '載入範例',
    downloadPdf: '下載 PDF 報告',
    downloadTxt: '下載文字報告',
    downloadHtml: '下載 HTML 報告',
    downloadJson: '下載 JSON 報告',
    copyBasic: '複製基本信息',
    copySubject: '複製主體/頒發者',
    copyAll: '複製全部信息',
    copyValue: '複製值',
    downloadKey: '下載密鑰',
    exportPem: '導出PEM',
    downloadCert: '下載證書',
  },

  input: {
    paste: '或粘貼證書數據：',
    placeholder: '粘貼您的 PEM 編碼證書（-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----）'
  },

  loading: '正在解析證書...',

  error: {
    title: '解析證書時出錯',
    invalidFormat: '無效的證書格式',
    invalidBase64: '不是有效的 base64 編碼證書',
    invalidStructure: '無效的證書數據結構',
    invalidDer: '無效的 DER 格式證書',
    invalidAsn1: '無效的證書：無法解析 ASN.1 數據',
    unsupportedType: '不支援的證書數據類型',
    failedParse: '無法解析證書數據',
    invalidP12: '無效的 PKCS#12 文件格式',
    invalidP12Password: '無效的 PKCS#12 密碼',
    noCertificatesInP12: 'PKCS#12 文件中未找到證書',
    unableToProcessP12: '無法處理 PKCS#12 文件'
  },

  guide: {
    title: '如何使用此工具',
    step1: '上傳您的 X.509 證書文件（.crt、.cer、.pem、.der、.p12 或 .pfx）或在下方文本框中粘貼證書數據。',
    step2: '工具會自動檢測格式（PEM、DER 或 PKCS#12）並進行解碼。',
    step3: '查看詳細的證書信息，包括主體、頒發者、有效期、擴展和公鑰數據。',
    step4: '您可以使用底部的按鈕以多種格式下載證書報告或複製信息到剪貼板。'
  },

  tabs: {
    basic: '基本信息',
    subject: '主體與頒發者',
    extensions: '擴展',
    publicKey: '公鑰',
    fingerprints: '指紋',
    raw: '原始證書'
  },

  results: {
    title: '證書詳情',
    serialNumber: '序列號',
    version: '版本',
    sigAlg: '簽名算法',
    validFrom: '生效時間',
    validTo: '過期時間',
    subject: '主體',
    issuer: '頒發者',
    extensions: '擴展',
    publicKey: '公鑰',
    algorithm: '算法',
    keySize: '密鑰大小',
    keyValue: '密鑰值',
    fingerprints: '指紋',
    rawCertificate: '原始證書',
    field: '字段',
    value: '值',
    critical: '關鍵',
    noExtensions: '此證書中未找到擴展信息。',
    validity: '證書有效期',
    expiresIn: '將在 {days} 天後過期',
    visualization: '證書可視化',
    daysRemaining: '剩餘天數',
    valid: '有效',
    expired: '已過期',
    expiringSoon: '即將過期',
    fieldDescriptions: '字段說明',
    certificateUsage: '證書用途',
    certificateChain: '證書鏈',
    signatureValue: '簽名值',
    notAvailable: '不可用',
    noSpecificUsage: '未指定特定用途',
    signatureError: '解析簽名值時出錯',
    keyDetails: '密鑰詳情',
    enhancedView: '增強視圖',
    endEntity: '終端實體',
    intermediate: '中間證書',
    rootCA: '根CA',
    endEntityCert: '終端實體證書',
    intermediateCert: '中間證書',
    rootCert: '根證書頒發機構',
    issuedBy: '頒發者',
    unknownIssuer: '未知頒發者',
    notYetValid: '尚未生效'
  },

  report: {
    title: 'X.509 證書報告',
    generatedOn: '生成於'
  },

  extensions: {
    subjectKeyIdentifier: '主體密鑰標識符',
    keyUsage: '密鑰用途',
    subjectAltName: '主體備用名稱',
    basicConstraints: '基本約束',
    crlDistributionPoints: 'CRL 分發點',
    certificatePolicies: '證書策略',
    authorityKeyIdentifier: '授權密鑰標識符',
    extKeyUsage: '擴展密鑰用途',
    authorityInfoAccess: '授權信息訪問',
    ctPrecertificateScts: 'CT 預證書 SCTs'
  },

  usage: {
    serverAuth: '服務器認證',
    clientAuth: '客戶端認證',
    codeSigning: '代碼簽名',
    emailProtection: '電子郵件保護',
    timeStamping: '時間戳',
    ocspSigning: 'OCSP簽名'
  },

  customOID: {
    title: '自定義OID查詢',
    placeholder: '輸入OID，例如 2.5.29.15',
    lookup: '查詢',
    result: '結果',
    value: '值',
    notFound: '未找到此OID的信息',
    foundButComplex: '已找到該OID，但值較複雜',
    unknownName: '未知名稱的OID',
    complexValue: '複雜值，無法直接顯示'
  },

  descriptions: {
    serialNumber: '證書的唯一序列號，由證書頒發機構分配',
    version: '證書格式的版本號，通常為V3',
    sigAlg: '用於生成證書簽名的算法',
    validFrom: '證書有效期的開始日期和時間',
    validTo: '證書有效期的結束日期和時間',
    subject: '證書持有者的身份信息',
    issuer: '簽發證書的證書頒發機構的身份信息',
    publicKey: '證書持有者的公鑰信息',
    extensions: '包含有關證書用途的其他信息的擴展字段'
  },

  messages: {
    copiedToClipboard: '已複製到剪貼板',
    copyError: '複製到剪貼板失敗'
  },

  pkcs12: {
    passwordPrompt: '請輸入PKCS#12文件的密碼',
    noPassword: '無密碼'
  },

  keyUsages: {
    digitalSignature: '數字簽名',
    nonRepudiation: '防抵賴',
    keyEncipherment: '密鑰加密',
    dataEncipherment: '數據加密',
    keyAgreement: '密鑰協商',
    keyCertSign: '證書簽名',
    crlSign: 'CRL簽名',
    encipherOnly: '僅加密',
    decipherOnly: '僅解密'
  }
};