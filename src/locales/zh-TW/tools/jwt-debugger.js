export default {
  name: 'JWT除錯工具',
  description: '解析、驗證和除錯JWT令牌的線上工具',
  sections: {
    encoded: '編碼的JWT',
    decoded: '解碼的JWT',
    header: '頭部',
    payload: '載荷',
    signature: '簽名',
    verification: '驗證'
  },
  actions: {
    decode: '解碼',
    verify: '驗證簽名',
    copy: '複製',
    share: '分享令牌',
    generateToken: '產生Token',
    generateRandomToken: '隨機Token',
    clear: '清空',
    generateRandomPayload: '產生隨機載荷',
    generateRandomKey: '產生隨機密鑰',
    generateKeyPair: '產生密鑰對'
  },
  messages: {
    invalidToken: '無效的JWT格式',
    copied: '已複製到剪貼簿！',
    copyFailed: '複製失敗，請手動複製',
    verificationSuccess: '簽名驗證成功',
    verificationFailed: '簽名驗證失敗',
    keyGenerated: '密鑰對產生成功',
    keyGenerationFailed: '產生密鑰對失敗',
    tokenGenerated: 'Token產生成功',
    tokenGenerationFailed: '產生Token失敗',
    randomTokenGenerated: '隨機Token產生並解析成功',
    certUploadSuccess: '憑證上傳成功',
    certFormatInvalid: '憑證格式無效',
    certReadFailed: '憑證讀取失敗',
    tokenFormatError: '無效的Token格式，JWT應該包含三部分並用點號分隔',
    tokenHeaderMissingAlg: 'Token頭部缺少演算法(alg)欄位',
    tokenHeaderInvalid: 'Token頭部格式無效',
    tokenVerificationFailed: 'Token格式驗證失敗',
    tokenExpired: 'Token已過期。過期時間：{time}',
    tokenNotEffective: 'Token尚未生效。生效時間：{time}',
    tokenIssuedInFuture: 'Token簽發時間異常，簽發時間在未來。簽發時間：{time}',
    algorithmNotSupported: '不支援的演算法',
    randomSecretGenerated: '隨機密鑰產生成功',
    randomSecretGenerationFailed: '產生隨機密鑰失敗',
    randomPayloadGenerated: '已產生隨機Payload',
    randomPayloadGenerationFailed: '產生隨機Payload失敗',
    contentCleared: '已清空所有內容',
    tokenDecodeSuccess: 'Token解析成功',
    tokenDecodeFailed: 'Token解析失敗',
    pleaseInputKey: '請輸入密鑰',
    pleaseGenerateKeyPair: '請先生成{type}密鑰對',
    pleaseInputVerificationKey: '請輸入驗證密鑰',
    pleaseInputPublicKey: '請輸入驗證公鑰',
    pleaseInputToken: '請輸入需要驗證的Token',
    payloadFormatError: 'Payload格式錯誤，請檢查JSON格式',
    invalidTimestamp: '無效的時間戳'
  },
  placeholders: {
    secretKey: '請輸入密鑰',
    privateKey: '請輸入或產生私鑰',
    publicKey: '請輸入或產生公鑰',
    payload: '請輸入JSON格式的Payload',
    token: '請輸入或產生JWT Token',
    verificationSecretKey: '請輸入驗證密鑰',
    verificationPublicKey: '請輸入驗證公鑰'
  },
  labels: {
    algorithm: '演算法',
    secretKey: '密鑰',
    privateKey: '私鑰',
    publicKey: '公鑰',
    certificate: '數位憑證 (可選)',
    payload: '載荷 (Payload)',
    token: 'Token',
    verificationPublicKey: '驗證公鑰',
    tokenResult: 'Token解析結果',
    verifyToken: '驗證Token',
    tokenDecoded: '檢測到Token使用 {alg} 演算法簽名',
    timestamp: '時間戳解析',
    issuedAt: '簽發時間 (iat)',
    expiration: '過期時間 (exp)',
    notBefore: '生效時間 (nbf)',
    tokenFormat: '無內容提示',
    tokenFormatDesc: '輸入或產生JWT Token後將在此顯示解析結果',
    uploadCert: '拖放憑證檔案或點擊選擇',
    certName: '憑證名稱',
    sm3Fingerprint: 'SM3指紋 (x5t#sm3)',
    certUploadNote: '上傳憑證後，JWT頭部將添加"x5t#sm3"欄位',
    secondsTimestamp: '秒級時間戳',
    millisecondsTimestamp: '毫秒級時間戳'
  },
  buttons: {
    cancel: '取消',
    verify: '驗證',
    clearCert: '清除',
    generateToken: '產生Token',
    decodeToken: '解析Token',
    verifyToken: '驗證Token',
    close: '關閉'
  },
  verification: {
    success: '驗證成功',
    failure: '驗證失敗',
    validMessage: 'Token簽名驗證通過，簽名有效。',
    invalidMessage: 'Token簽名驗證失敗，簽名無效。'
  },
  errors: {
    noToken: '請輸入需要驗證的Token',
    invalidToken: '無效的Token格式',
    noSecretKey: '請提供驗證密鑰',
    noPublicKey: '請提供驗證公鑰',
    invalidSignature: '無效的簽名',
    verificationFailed: 'Token驗證失敗'
  },
  article: {
    title: "JWT除錯工具：解碼、驗證和除錯JSON Web令牌",
    features: {
      title: "瞭解JWT除錯",
      description: "這款<strong>JWT除錯工具</strong>是一個專為開發人員和安全專業人士設計的<strong>令牌分析工具</strong>，用於檢查、驗證和排除JSON Web令牌(JWT)故障。這個<strong>線上JWT解碼器</strong>允許您貼上任何JWT並立即以人類可讀格式查看其解碼後的頭部、載荷和簽名組件。<br><br>除了簡單的<strong>令牌解碼</strong>外，該工具還提供全面的驗證功能，可使用適當的密鑰或公鑰確認令牌的簽名是否有效。這個<strong>JWT驗證工具</strong>支援所有標準JWT演算法，包括HS256、RS256、ES256等，確保與現代認證系統相容。對於構建或維護基於令牌認證的應用程序的開發人員，這個<strong>JWT除錯實用程序</strong>提供了關於令牌結構、過期狀態和安全宣告的重要見解。",
      useCases: {
        title: "JWT除錯的實際應用場景",
        items: [
          "<strong>API認證故障排除</strong>：當API呼叫因認證錯誤而失敗時，開發人員可以使用<strong>JWT驗證工具</strong>檢查令牌並識別問題，如令牌過期、簽名無效或宣告不正確",
          "<strong>身份提供商整合</strong>：在與OAuth或OpenID Connect服務整合過程中，<strong>令牌檢查器</strong>幫助驗證身份令牌是否包含預期的宣告並正確簽名",
          "<strong>安全稽核</strong>：安全專業人員可以檢查<strong>認證令牌</strong>，確保它們包含適當的權限、合理的過期時間，並遵循安全最佳實踐",
          "<strong>自訂JWT產生</strong>：在實現自訂認證系統時，開發人員可以使用該工具建立和測試具有特定宣告和簽名演算法的<strong>編碼JWT令牌</strong>",
          "<strong>Bearer令牌除錯</strong>：使用<strong>bearer認證</strong>的前端開發人員可以驗證應用程序頭部中使用的令牌是否格式正確並包含必要數據",
          "<strong>微服務認證</strong>：構建微服務架構的團隊可以驗證<strong>服務令牌</strong>是否在服務之間傳遞正確的授權資訊並維護適當的安全邊界"
        ]
      }
    },
    faq: {
      title: "關於JWT除錯的常見問題",
      items: [
        {
          question: "將我的JWT貼上到這個線上除錯器中安全嗎？",
          answer: "是的，我們的JWT除錯器設計時考慮了安全性。所有令牌處理都完全在您的瀏覽器內使用客戶端JavaScript進行，這意味著您的令牌永遠不會發送到任何伺服器進行解碼或驗證。JWT解碼器不會以任何方式儲存您的令牌、密鑰或載荷數據。但是，作為安全最佳實踐，我們建議僅使用測試令牌，而不是包含敏感資訊的生產令牌。如果您正在處理高度敏感的認證系統，考慮在安全開發環境中使用本地JWT除錯工具，而不是任何線上令牌驗證服務。"
        },
        {
          question: "JWT中的頭部、載荷和簽名有什麼區別？",
          answer: "JSON Web令牌由三個由點分隔的不同部分組成：頭部、載荷和簽名。頭部通常包含令牌類型('JWT')和所使用的簽名演算法(如'HS256'或'RS256')。載荷包含宣告或斷言，這些是關於實體(通常是用戶)的陳述和附加數據。常見的宣告包括用戶ID、過期時間和發行者。簽名是通過使用頭部中指定的演算法將編碼的頭部和載荷與密鑰結合建立的。該簽名驗證訊息未被更改，並且使用某些演算法時，可以驗證發送者的身份。我們的令牌解碼器清晰地顯示所有三個部分，幫助您理解和除錯您的認證令牌。"
        },
        {
          question: "如何驗證我的JWT簽名是否有效？",
          answer: "要使用我們的令牌驗證工具驗證JWT簽名，在輸入欄位中輸入您的令牌並提供適當的密鑰或公鑰(取決於所使用的演算法)。對於基於HMAC的演算法如HS256，您需要與建立令牌時使用的相同密鑰。對於RSA或ECDSA演算法如RS256或ES256，您需要與用於簽名的私鑰相對應的公鑰。然後，JWT除錯器將使用您提供的密鑰基於頭部和載荷計算簽名，並將其與令牌中的簽名進行比較。如果它們匹配，則簽名有效，確認令牌未被篡改並確實由擁有正確私鑰或密鑰的受信任方簽名。"
        },
        {
          question: "為什麼即使使用正確的密鑰，JWT驗證也可能失敗？",
          answer: "即使使用正確的密鑰，JWT驗證在我們的令牌解碼器中可能失敗的原因有幾個。常見問題包括：令牌過期(檢查載荷中的'exp'宣告)，令牌尚未生效(檢查'nbf'宣告)，使用錯誤的演算法(確保頭部中指定的演算法與您用於驗證的演算法匹配)，令牌篡改(即使對頭部或載荷的微小更改也會導致簽名驗證失敗)，密鑰格式不正確(確保您的密鑰格式正確，特別是對於RSA和ECDSA密鑰)，或編碼問題(如果您的密鑰包含特殊字符)。JWT除錯器提供詳細的錯誤訊息，幫助識別驗證失敗的具體原因，使排除認證令牌問題變得更容易。"
        },
        {
          question: "我可以用這個工具產生新的JWT嗎？",
          answer: "是的，我們的JWT除錯器包含令牌產生功能。要建立新的JWT，您可以指定所需的載荷(您想包含的宣告)，選擇適當的簽名演算法(如HS256、RS256等)，並提供必要的簽名密鑰。對於對稱演算法如HS256，您需要提供密鑰。對於非對稱演算法如RS256，您需要提供用於簽名的私鑰。如果需要，該工具甚至可以幫助產生隨機密鑰。配置這些選項後，令牌編碼器將產生一個有效的JWT，您可以將其用於測試或實現。此功能對實現基於JWT的認證並需要建立具有特定宣告的示例令牌用於測試目的的開發人員特別有用。"
        }
      ]
    },
    guide: {
      title: "使用JWT除錯工具的分步指南",
      steps: [
        "將您的<strong>JSON Web令牌</strong>輸入到除錯器頂部的令牌輸入欄位中。您可以貼上一個完整的JWT(包括由點分隔的所有三個部分)，該JWT可能來自認證系統或API",
        "點擊<strong>解碼</strong>按鈕，立即查看令牌的解碼組件。JWT解碼器將以格式化的JSON視圖顯示頭部和載荷部分，便於閱讀",
        "查看<strong>頭部部分</strong>，其通常顯示令牌類型('typ')和簽名演算法('alg')。此資訊指示令牌是如何建立的以及應該如何驗證其簽名",
        "檢查<strong>載荷部分</strong>，其中包含儲存在令牌中的所有宣告或數據。特別注意決定有效性的過期時間('exp')、簽發時間('iat')和主題('sub')宣告",
        "要驗證令牌的簽名，在指定欄位中輸入適當的<strong>驗證密鑰</strong>。對稱演算法(HS256)使用密鑰，非對稱演算法(RS256/ES256)使用公鑰",
        "點擊<strong>驗證簽名</strong>按鈕，檢查令牌的簽名是否有效。JWT驗證器將指示驗證是否成功或失敗，以及相關詳細資訊",
        "要<strong>產生新令牌</strong>，點擊'產生令牌'選項，以JSON格式指定所需的載荷，選擇演算法，提供簽名密鑰(或產生一個)，工具將為您建立格式正確的JWT"
      ]
    },
    conclusion: "JWT除錯工具是開發人員使用現代認證系統的重要工具，提供了令牌檢查、驗證和產生的全面功能。通過提供對令牌結構和驗證狀態的清晰可見性，它有助於簡化除錯過程並確保JWT實現的安全性。無論您是在排除認證問題、與身份提供商整合，還是設計新的基於令牌的系統，此工具都能簡化使用JWT的複雜過程。隨著認證令牌繼續成為Web應用程序安全的基石，在您的開發工具包中擁有一個可靠的JWT除錯實用程序對於維護安全、正常運行的認證流程變得越來越有價值。"
  }
}