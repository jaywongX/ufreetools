export default {
  name: '對稱加密算法',
  description: '實現文本和文件的安全加密與解密，支援多種對稱加密算法，包括AES、DES和國密SM4',

  encryption: {
    title: '加密/解密',
    plaintext: '明文',
    plaintextPlaceholder: '輸入要加密的文本',
    ciphertext: '密文',
    ciphertextPlaceholder: '加密後的數據將顯示在這裡',
    encrypt: '加密',
    decrypt: '解密',
    decrypted: '解密文本',
    decryptedPlaceholder: '解密後的數據將顯示在這裡',
    encryptSuccess: '加密成功',
    decryptSuccess: '解密成功',
    encryptError: '加密失敗：{error}',
    decryptError: '解密失敗：{error}'
  },

  algorithm: {
    title: '選擇算法',
    aes: 'AES',
    des: 'DES',
    tripledes: '3DES（三重DES）',
    sm4: 'SM4 (國密)',
    "3des": '3DES（三重DES）'
  },

  mode: {
    title: '工作模式',
    ecb: 'ECB - 電子密碼本模式',
    cbc: 'CBC - 密碼分組鏈接模式',
    cfb: 'CFB - 密文反饋模式',
    ofb: 'OFB - 輸出反饋模式',
    ctr: 'CTR - 計數器模式'
  },

  padding: {
    title: '填充方式',
    pkcs7: 'PKCS7',
    zeroPadding: '零填充',
    zeropadding: '零填充'
  },

  operation: {
    title: '操作類型',
    encrypt: '加密',
    decrypt: '解密'
  },

  key: {
    title: '密鑰',
    label: '密鑰',
    placeholder: '輸入{keySize}密鑰',
    placeholderString: '輸入{keySize}字符串密鑰 (不足自動填充)',
    placeholderHex: '輸入{keySize}十六進制密鑰 (不足自動填充)',
    placeholderBase64: '輸入{keySize}Base64密鑰 (不足自動填充)',
    generateRandom: '隨機生成',
    sizeHint: '{keySize}',
    autoFillHint: '密鑰長度不足時將自動補零填充，超出部分將被截斷'
  },

  iv: {
    title: '初始向量 (IV)',
    label: '初始向量 (IV)',
    placeholder: '輸入{blockSize}初始向量',
    placeholderString: '輸入{blockSize}字符串IV (不足自動填充)',
    placeholderHex: '輸入{blockSize}十六進制IV (不足自動填充)',
    placeholderBase64: '輸入{blockSize}Base64 IV (不足自動填充)',
    generateRandom: '隨機生成',
    sizeHint: '{blockSize}',
    autoFillHint: 'IV長度不足時將自動補零填充，超出部分將被截斷'
  },

  input: {
    title: '待加密內容',
    titleDecrypt: '待解密內容',
    clear: '清空',
    placeholder: '輸入要加密的文本',
    placeholderDecrypt: '輸入要解密的{format}格式密文'
  },

  inputFormat: {
    title: '輸入格式',
    string: '字符串',
    hex: 'HEX',
    base64: 'Base64'
  },

  output: {
    title: '加密結果',
    titleDecrypt: '解密結果',
    copyResult: '複製結果',
    copied: '已複製'
  },

  outputFormat: {
    title: '輸出格式',
    string: '字符串',
    hex: 'HEX',
    base64: 'Base64'
  },

  error: {
    title: '錯誤',
    invalidHex: '密鑰必須是HEX格式',
    invalidIvHex: 'IV必須是HEX格式',
    invalidHexInput: '無效的HEX格式輸入',
    invalidBase64: '無效的Base64格式輸入',
    unsupportedAlgorithm: '不支援的算法',
    decryptionFailed: '解密失敗：{message}',
    copyFailed: '複製失敗，請手動複製',
    unknownError: '處理過程中發生錯誤',
    invalidHexFormat: '無效的HEX格式',
    invalidBase64Format: '無效的Base64格式',
    emptyBase64: '無效的Base64編碼',
    decryptFailed: '解密失敗：'
  },

  info: {
    title: '算法說明',
    algorithms: {
      aes: 'AES：高級加密標準，可以使用128位、192位或256位密鑰',
      des: 'DES：數據加密標準，使用56位密鑰，安全性較低',
      tripledes: '3DES：三重DES，使用三個56位DES密鑰，提供更高安全性',
      sm4: 'SM4：中國國密標準，分組密碼算法，使用128位密鑰',
      "3des": '3DES：三重DES，使用三個56位DES密鑰，提供更高安全性'
    },
    modes: {
      title: '工作模式說明',
      ecb: 'ECB：電子密碼本模式，各個分組獨立加密，不推薦用於敏感數據',
      cbc: 'CBC：密碼分組鏈接模式，每個分組依賴前一個分組，更加安全',
      cfb: 'CFB：密文反饋模式，將分組密碼轉換為流密碼',
      ofb: 'OFB：輸出反饋模式，也是一種流密碼模式，加解密使用相同操作',
      ctr: 'CTR：計數器模式，每個分組使用遞增計數器進行加密，可並行處理'
    }
  },

  buttons: {
    process: '加密',
    processDecrypt: '解密'
  },

  file: {
    title: '文件加密',
    select: '選擇文件',
    drop: '或將文件拖放至此',
    encrypt: '加密文件',
    decrypt: '解密文件',
    download: '下載結果',
    selected: '已選擇：{name}',
    size: '大小：{size}',
    maxSize: '最大大小：100MB',
    encryptingFile: '正在加密文件...',
    decryptingFile: '正在解密文件...',
    downloadReady: '可以下載',
    fileTooBig: '文件太大。允許的最大大小為100MB。'
  },

  options: {
    title: '選項',
    autoDecrypt: '加密後自動解密',
    includeMeta: '在輸出中包含算法元數據',
    kdf: '密鑰派生函數',
    pbkdf2: 'PBKDF2',
    scrypt: 'scrypt',
    argon2: 'Argon2id',
    salt: '鹽（用於密鑰派生）',
    saltPlaceholder: '以十六進制輸入鹽或留空隨機生成',
    autoClear: '自動清除敏感數據',
    saveSettings: '保存設置'
  },

  security: {
    title: '安全信息',
    description: '關於加密安全性',
    warning: '警告',
    ecbInsecure: 'ECB模式不推薦用於安全應用，因為它不能很好地隱藏數據模式。',
    useModern: '對於敏感數據，請使用帶有GCM或CBC模式的AES-256。',
    keyWarning: '保護您的加密密鑰。如果丟失，數據將無法恢復。',
    browserWarning: '基於瀏覽器的加密方便，但可能不適合高度敏感的數據。',
    learnMore: '了解更多關於加密的信息'
  },

  messages: {
    noAlgorithm: '請選擇加密算法',
    noKey: '請輸入加密密鑰或密碼',
    invalidKeyLength: '所選算法的密鑰長度無效',
    invalidIv: '所選算法和模式的IV長度無效',
    noData: '請輸入要加密/解密的數據',
    padError: '填充錯誤 - 密鑰或數據可能不正確',
    fileSuccess: '文件處理成功',
    fileError: '處理文件錯誤：{error}',
    clipboardError: '複製到剪貼板錯誤：{error}',
    invalidFormat: '無效的輸入格式'
  }
};