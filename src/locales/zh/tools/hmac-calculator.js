export default {
  name: 'HMAC计算器',
  description: '计算数据的HMAC（基于哈希的消息认证码）',
  input: {
    title: '输入',
    message: '消息',
    messagePlaceholder: '输入要认证的消息',
    key: '密钥',
    keyPlaceholder: '输入您的密钥',
    file: '文件',
    text: '文本',
    fileSelect: '选择文件',
    fileDrop: '或将文件拖放至此',
    fileSelected: '已选择文件：{name}',
    clearFile: '清除文件',
    encoding: '输入编码',
    keyEncoding: '密钥编码',
    outputFormat: '输出格式',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    base64: 'Base64',
    hex: '十六进制',
    binary: '二进制',
    calculate: '计算HMAC',
    clear: '清除全部'
  },
  algorithms: {
    title: '算法',
    hmacMd5: 'HMAC-MD5',
    hmacSha1: 'HMAC-SHA1',
    hmacSha224: 'HMAC-SHA224',
    hmacSha256: 'HMAC-SHA256',
    hmacSha384: 'HMAC-SHA384',
    hmacSha512: 'HMAC-SHA512',
    hmacRipemd160: 'HMAC-RIPEMD160'
  },
  result: {
    title: 'HMAC结果',
    digest: 'HMAC摘要',
    copy: '复制',
    copied: '已复制！',
    noResult: '输入消息和密钥以计算HMAC',
    calculating: '计算中...'
  },
  validation: {
    title: 'HMAC验证',
    hmacToVerify: '要验证的HMAC',
    verifyPlaceholder: '输入要验证的HMAC',
    verify: '验证HMAC',
    valid: 'HMAC有效',
    invalid: 'HMAC无效',
    verifying: '验证中...'
  },
  options: {
    title: '选项',
    uppercase: '大写输出',
    showDetails: '显示技术细节',
    autoUpdate: '自动更新',
    truncate: '截断输出',
    truncateLength: '截断长度'
  },
  details: {
    title: '技术细节',
    algorithm: '算法',
    keyLength: '密钥长度',
    blockSize: '块大小',
    outputLength: '输出长度',
    execution: '执行时间',
    ms: '毫秒'
  },
  messages: {
    noMessage: '请输入消息',
    noKey: '请输入密钥',
    invalidEncoding: '无效的编码格式',
    processingError: '处理错误：{error}',
    success: 'HMAC计算成功',
    invalidKey: '所选编码的密钥格式无效',
    fileTooBig: '文件太大。最大大小为5MB'
  },
  security: {
    title: '安全说明',
    keyStorage: '切勿共享您的密钥',
    keyStrength: '为每个应用程序使用强大且唯一的密钥',
    recommendation: '对于安全关键型应用，请至少使用HMAC-SHA256',
    warning: 'HMAC-MD5和HMAC-SHA1可能不适合高安全性应用'
  }
} 