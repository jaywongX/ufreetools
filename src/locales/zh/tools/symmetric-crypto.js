export default {
  name: '对称加密算法',
  description: '实现文本和文件的安全加密与解密，支持多种对称加密算法，包括AES、DES和国密SM4',
  encryption: {
    title: '加密/解密',
    plaintext: '明文',
    plaintextPlaceholder: '输入要加密的文本',
    ciphertext: '密文',
    ciphertextPlaceholder: '加密后的数据将显示在这里',
    encrypt: '加密',
    decrypt: '解密',
    decrypted: '解密文本',
    decryptedPlaceholder: '解密后的数据将显示在这里',
    encryptSuccess: '加密成功',
    decryptSuccess: '解密成功',
    encryptError: '加密失败：{error}',
    decryptError: '解密失败：{error}'
  },
  algorithm: {
    title: '选择算法',
    aes: 'AES',
    des: 'DES',
    tripledes: '3DES（三重DES）',
    sm4: 'SM4 (国密)',
    "3des": '3DES（三重DES）'
  },
  mode: {
    title: '工作模式',
    ecb: 'ECB - 电子密码本模式',
    cbc: 'CBC - 密码分组链接模式',
    cfb: 'CFB - 密文反馈模式',
    ofb: 'OFB - 输出反馈模式',
    ctr: 'CTR - 计数器模式'
  },
  padding: {
    title: '填充方式',
    pkcs7: 'PKCS7',
    zeroPadding: '零填充',
    zeropadding: '零填充'
  },
  operation: {
    title: '操作类型',
    encrypt: '加密',
    decrypt: '解密'
  },
  key: {
    title: '密钥',
    label: '密钥',
    placeholder: '输入{keySize}密钥',
    placeholderString: '输入{keySize}字符串密钥 (不足自动填充)',
    placeholderHex: '输入{keySize}十六进制密钥 (不足自动填充)',
    placeholderBase64: '输入{keySize}Base64密钥 (不足自动填充)',
    generateRandom: '随机生成',
    sizeHint: '{keySize}',
    autoFillHint: '密钥长度不足时将自动补零填充，超出部分将被截断'
  },
  iv: {
    title: '初始向量 (IV)',
    label: '初始向量 (IV)',
    placeholder: '输入{blockSize}初始向量',
    placeholderString: '输入{blockSize}字符串IV (不足自动填充)',
    placeholderHex: '输入{blockSize}十六进制IV (不足自动填充)',
    placeholderBase64: '输入{blockSize}Base64 IV (不足自动填充)',
    generateRandom: '随机生成',
    sizeHint: '{blockSize}',
    autoFillHint: 'IV长度不足时将自动补零填充，超出部分将被截断'
  },
  input: {
    title: '待加密内容',
    titleDecrypt: '待解密内容',
    clear: '清空',
    placeholder: '输入要加密的文本',
    placeholderDecrypt: '输入要解密的{format}格式密文'
  },
  inputFormat: {
    title: '输入格式',
    string: '字符串',
    hex: 'HEX',
    base64: 'Base64'
  },
  output: {
    title: '加密结果',
    titleDecrypt: '解密结果',
    copyResult: '复制结果',
    copied: '已复制'
  },
  outputFormat: {
    title: '输出格式',
    string: '字符串',
    hex: 'HEX',
    base64: 'Base64'
  },
  error: {
    title: '错误',
    invalidHex: '密钥必须是HEX格式',
    invalidIvHex: 'IV必须是HEX格式',
    invalidHexInput: '无效的HEX格式输入',
    invalidBase64: '无效的Base64格式输入',
    unsupportedAlgorithm: '不支持的算法',
    decryptionFailed: '解密失败：{message}',
    copyFailed: '复制失败，请手动复制',
    unknownError: '处理过程中发生错误',
    invalidHexFormat: '无效的HEX格式',
    invalidBase64Format: '无效的Base64格式',
    emptyBase64: '无效的Base64编码',
    decryptFailed: '解密失败：'
  },
  info: {
    title: '算法说明',
    algorithms: {
      aes: 'AES：高级加密标准，可以使用128位、192位或256位密钥',
      des: 'DES：数据加密标准，使用56位密钥，安全性较低',
      tripledes: '3DES：三重DES，使用三个56位DES密钥，提供更高安全性',
      sm4: 'SM4：中国国密标准，分组密码算法，使用128位密钥',
      "3des": '3DES：三重DES，使用三个56位DES密钥，提供更高安全性'
    },
    modes: {
      title: '工作模式说明',
      ecb: 'ECB：电子密码本模式，各个分组独立加密，不推荐用于敏感数据',
      cbc: 'CBC：密码分组链接模式，每个分组依赖前一个分组，更加安全',
      cfb: 'CFB：密文反馈模式，将分组密码转换为流密码',
      ofb: 'OFB：输出反馈模式，也是一种流密码模式，加解密使用相同操作',
      ctr: 'CTR：计数器模式，每个分组使用递增计数器进行加密，可并行处理'
    }
  },
  buttons: {
    process: '加密',
    processDecrypt: '解密'
  },
  file: {
    title: '文件加密',
    select: '选择文件',
    drop: '或将文件拖放至此',
    encrypt: '加密文件',
    decrypt: '解密文件',
    download: '下载结果',
    selected: '已选择：{name}',
    size: '大小：{size}',
    maxSize: '最大大小：100MB',
    encryptingFile: '正在加密文件...',
    decryptingFile: '正在解密文件...',
    downloadReady: '可以下载',
    fileTooBig: '文件太大。允许的最大大小为100MB。'
  },
  options: {
    title: '选项',
    autoDecrypt: '加密后自动解密',
    includeMeta: '在输出中包含算法元数据',
    kdf: '密钥派生函数',
    pbkdf2: 'PBKDF2',
    scrypt: 'scrypt',
    argon2: 'Argon2id',
    salt: '盐（用于密钥派生）',
    saltPlaceholder: '以十六进制输入盐或留空随机生成',
    autoClear: '自动清除敏感数据',
    saveSettings: '保存设置'
  },
  security: {
    title: '安全信息',
    description: '关于加密安全性',
    warning: '警告',
    ecbInsecure: 'ECB模式不推荐用于安全应用，因为它不能很好地隐藏数据模式。',
    useModern: '对于敏感数据，请使用带有GCM或CBC模式的AES-256。',
    keyWarning: '保护您的加密密钥。如果丢失，数据将无法恢复。',
    browserWarning: '基于浏览器的加密方便，但可能不适合高度敏感的数据。',
    learnMore: '了解更多关于加密的信息'
  },
  messages: {
    noAlgorithm: '请选择加密算法',
    noKey: '请输入加密密钥或密码',
    invalidKeyLength: '所选算法的密钥长度无效',
    invalidIv: '所选算法和模式的IV长度无效',
    noData: '请输入要加密/解密的数据',
    padError: '填充错误 - 密钥或数据可能不正确',
    fileSuccess: '文件处理成功',
    fileError: '处理文件错误：{error}',
    clipboardError: '复制到剪贴板错误：{error}',
    invalidFormat: '无效的输入格式'
  }
} 