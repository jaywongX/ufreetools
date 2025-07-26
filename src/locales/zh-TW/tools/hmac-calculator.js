export default {
  name: 'HMAC計算器',
  description: '計算數據的HMAC（基於哈希的消息認證碼）',
  title: 'HMAC 消息認證碼計算工具',
  intro: '使用密鑰生成消息認證碼，支持多種哈希算法和輸出格式',

  input: {
    title: '輸入',
    message: '消息',
    messagePlaceholder: '輸入要認證的消息',
    key: '密鑰',
    keyLabel: '密鑰 (Secret Key)',
    keyPlaceholder: '輸入HMAC密鑰',
    messageLabel: '消息 (Message)',
    messageLongPlaceholder: '輸入要計算HMAC的消息',
    file: '文件',
    text: '文本',
    fileSelect: '選擇文件',
    fileDrop: '或將文件拖放至此',
    fileSelected: '已選擇文件：{name}',
    clearFile: '清除文件',
    encoding: '輸入編碼',
    keyEncoding: '密鑰編碼',
    outputFormat: '輸出格式',
    inputType: '輸入類型',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    base64: 'Base64',
    hex: '十六進制',
    binary: '二進制',
    calculate: '計算HMAC',
    calculating: '計算中...',
    clear: '清除全部'
  },

  algorithms: {
    title: '算法',
    label: '哈希算法',
    hmacMd5: 'HMAC-MD5',
    hmacSha1: 'HMAC-SHA1',
    hmacSha224: 'HMAC-SHA224',
    hmacSha256: 'HMAC-SHA256',
    hmacSha384: 'HMAC-SHA384',
    hmacSha512: 'HMAC-SHA512',
    hmacRipemd160: 'HMAC-RIPEMD160',
    hmacSm3: 'HMAC-SM3'
  },

  result: {
    title: 'HMAC結果',
    digest: 'HMAC摘要',
    outputLabel: 'HMAC 結果',
    copy: '複製',
    copied: '已複製！',
    noResult: '輸入消息和密鑰以計算HMAC',
    calculating: '計算中...',
    placeholder: 'HMAC 結果將顯示在這裡',
    useExample: '使用實例',
    jsExample: 'JavaScript 示例：',
  },

  validation: {
    title: 'HMAC驗證',
    hmacToVerify: '要驗證的HMAC',
    verifyPlaceholder: '輸入要驗證的HMAC',
    verify: '驗證HMAC',
    valid: 'HMAC有效',
    invalid: 'HMAC無效',
    verifying: '驗證中...'
  },

  options: {
    title: '選項',
    uppercase: '大寫輸出',
    showDetails: '顯示技術細節',
    autoUpdate: '自動更新',
    truncate: '截斷輸出',
    truncateLength: '截斷長度'
  },

  details: {
    title: '技術細節',
    algorithm: '算法',
    keyLength: '密鑰長度',
    blockSize: '塊大小',
    outputLength: '輸出長度',
    execution: '執行時間',
    ms: '毫秒'
  },

  messages: {
    noMessage: '請輸入消息',
    noKey: '請輸入密鑰',
    invalidEncoding: '無效的編碼格式',
    processingError: '處理錯誤：{error}',
    success: 'HMAC計算成功',
    invalidKey: '所選編碼的密鑰格式無效',
    fileTooBig: '文件太大。最大大小為5MB',
    copied: '已複製到剪貼板',
    copyFailed: '複製失敗，請手動複製',
    invalidHex: '密鑰不是有效的十六進制格式',
    invalidBase64: '密鑰不是有效的Base64格式',
  },

  security: {
    title: '安全說明',
    keyStorage: '切勿共享您的密鑰',
    keyStrength: '為每個應用程序使用強大且唯一的密鑰',
    recommendation: '對於安全關鍵型應用，請至少使用HMAC-SHA256',
    warning: 'HMAC-MD5和HMAC-SHA1可能不適合高安全性應用'
  }
};