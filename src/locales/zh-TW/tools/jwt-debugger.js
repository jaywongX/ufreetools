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
  }
};