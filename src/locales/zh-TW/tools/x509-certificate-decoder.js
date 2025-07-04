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
  },
  article: {
    title: 'X.509證書解析器：分析和驗證SSL/TLS證書',
    introduction: {
      title: 'X.509證書解析器是什麼？',
      p1: '<strong>X.509證書解析器</strong>是一種強大的工具，可幫助安全專業人員、Web開發人員和IT管理員分析SSL/TLS協議中使用的數字證書。我們免費的線上X.509證書解析工具提供了對證書組件、有效性狀態和安全特性的全面分析，無需安裝任何軟件。',
      p2: '數字證書對於安全的網絡通信至關重要，能夠建立瀏覽器和服務器之間的可信連接。然而，解決證書問題需要理解它們複雜的結構和編碼數據。X.509證書解析器通過將原始證書數據解析為人類可讀的信息來簡化這一過程，從而能夠快速識別問題並驗證證書的真實性。'
    },
    useCases: {
      title: '證書解析的常見用例',
      case1: '<strong>SSL/TLS證書驗證</strong>：在部署前驗證網站證書的真實性和完整性。',
      case2: '<strong>證書過期監控</strong>：檢查有效期和到期日期，防止意外的服務中斷。',
      case3: '<strong>證書路徑驗證</strong>：檢查證書鏈以確保證書之間的正確信任關係。',
      case4: '<strong>證書配置故障排除</strong>：識別證書中導致瀏覽器警告或連接問題的配置錯誤。',
      case5: '<strong>數字簽名驗證</strong>：檢查證書簽名算法和公鑰參數進行安全評估。'
    },
    faq: {
      title: '關於X.509證書的常見問題',
      q1: '我可以從X.509證書中提取哪些信息？',
      a1: '使用我們的<strong>X.509證書解析器</strong>，您可以提取全面的信息，包括頒發者詳情、主體信息、有效期、公鑰參數、擴展（如主體備用名稱）、數字簽名算法和證書指紋。該工具還提供證書健康狀況和到期狀態的可視化指標，使識別需要更新的證書變得容易。',
      q2: '如何知道我的證書是否被瀏覽器信任？',
      a2: '如果證書由認可的證書頒發機構（CA）頒發並形成有效的信任鏈，瀏覽器通常會信任該證書。我們的解析工具幫助您可視化證書鏈並驗證每個證書的有效性。關鍵指標包括證書頒發者（應為受信任的CA）、有效日期（未過期）、正確的基本約束（對於中間證書）和適當的密鑰用途擴展。瀏覽器信任還取決於證書未被吊銷，可通過證書中的OCSP或CRL信息進行檢查。',
      q3: 'PEM和DER證書格式有什麼區別？',
      a3: 'PEM（隱私增強郵件）和DER（可分辨編碼規則）是X.509證書的兩種常見格式。<strong>PEM格式</strong>是Base64編碼的，以"-----BEGIN CERTIFICATE-----"開頭，是人類可讀的文本。它常用於Web服務器和電子郵件。<strong>DER格式</strong>是二進制編碼的，不可人類閱讀，但更緊湊。我們的證書解析工具自動支援這兩種格式，無需手動選擇即可檢測和解析適當的格式。',
      q4: '如何檢查我的證書是否支援特定的TLS功能？',
      a4: '要檢查證書中的TLS功能支援，請使用我們的證書解析器檢查<strong>擴展密鑰用途</strong>和<strong>密鑰用途</strong>擴展。對於服務器認證（Web服務器），請在擴展密鑰用途中查找"服務器認證"（1.3.6.1.5.5.7.3.1）值。密鑰用途擴展指示允許的操作，如數字簽名或密鑰加密。此外，檢查簽名算法以確保使用現代、安全的算法（如SHA-256與RSA或ECDSA），而不是過時的算法（如SHA-1或MD5）。',
      q5: '如果我的證書即將過期，我應該怎麼做？',
      a5: '如果我們的<strong>證書解析器</strong>顯示您的證書即將過期（通常在30天內），您應該通過您的證書提供商或證書頒發機構立即續簽。續簽過程通常包括：1）生成新的證書簽名請求（CSR），2）將其提交給您的CA，3）完成驗證要求，以及4）在服務器上安裝新證書。我們建議在過期前至少2-4周啟動此過程，以避免服務中斷或用戶安全警告。'
    },
    tutorial: {
      title: '如何使用X.509證書解析器',
      step1: {
        title: '上傳或粘貼您的證書',
        content: '首先通過文件上傳器上傳證書文件（.crt、.cer、.pem或.der），或直接在輸入框中粘貼PEM編碼的證書文本。我們的工具支援拖放功能，方便文件上傳。如果您沒有證書可分析，可以點擊"載入範例"按鈕，查看工具如何處理演示證書。'
      },
      step2: {
        title: '解析證書',
        content: '載入證書後，點擊"解析證書"按鈕。我們的工具將自動檢測格式（PEM或DER）並解析證書數據。處理完全在您的瀏覽器中進行，確保您的證書數據不會離開您的設備——這使它成為分析敏感證書的安全選擇。'
      },
      step3: {
        title: '分析證書詳情',
        content: '解析後，工具將以易於導航的選項卡形式顯示全面的證書信息。"基本信息"選項卡顯示核心細節，如有效期、序列號和簽名算法。視覺指標清晰地顯示證書是否有效、即將過期或已過期。您可以在專門的選項卡中探索更詳細的信息，包括主體和頒發者、擴展、公鑰等。'
      },
      step4: {
        title: '導出和下載報告',
        content: '要保存或共享您的證書分析，請使用結果部分底部的導出功能。您可以以多種格式（PDF、TXT、HTML或JSON）下載全面報告，或將特定部分複製到剪貼板。這些報告對於文檔記錄、合規目的或在故障排除期間與團隊成員共享非常有價值。'
      }
    },
    resources: {
      title: '額外資源',
      intro: '通過這些有價值的資源擴展您對X.509證書和相關安全主題的了解：',
      relatedTools: '相關安全工具',
      tool1: '哈希生成器 - 為數據驗證創建加密哈希',
      tool2: 'Base64編碼器/解碼器 - 在二進制和Base64格式之間轉換',
      tool3: 'JWT解碼器 - 分析用於身份驗證的JSON Web令牌',
      externalLinks: '外部參考',
      external1: 'IETF RFC 5280 - 互聯網X.509公鑰基礎設施證書',
      external2: '維基百科 - X.509證書標準概述',
      external3: 'SSL.com - 什麼是X.509證書？'
    },
    conclusion: {
      title: '結論',
      content: '<strong>X.509證書解析器</strong>是任何使用數字證書和安全通信的人的必備工具。通過提供關於證書結構和有效性的清晰、詳細的信息，我們的工具幫助您確保SSL/TLS實現安全無誤。無論您是進行審計的安全專業人員，排除HTTPS問題的Web開發人員，還是管理證書部署的IT管理員，這個解析器都能簡化證書分析並增強您的安全實踐。'
    }
  },
}