export default {
  name: '哈希计算器',
  description: '使用各种算法为文本或文件生成和验证哈希摘要',
  input: {
    title: '输入',
    text: '文本输入',
    file: '文件输入',
    textPlaceholder: '在此输入要计算哈希值的文本...',
    fileSelect: '选择文件',
    fileDrop: '将文件拖放到此处或点击上传',
    fileSelected: '已选择文件：{name}',
    fileSize: '{size}',
    removeFile: '移除文件',
    localProcessing: '文件将在本地处理，不会上传到服务器',
    encoding: '编码',
    selectAlgorithm: '选择哈希算法',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    latin1: 'Latin1',
    calculate: '计算哈希值',
    calculating: '计算中...',
    clear: '清除输入',
    hashValue: '哈希值',
  },
  algorithms: {
    title: '算法',
    selectAll: '全选',
    deselectAll: '取消全选',
    md5: 'MD5',
    sha1: 'SHA-1',
    sha224: 'SHA-224',
    sha256: 'SHA-256',
    sha384: 'SHA-384',
    sha512: 'SHA-512',
    sha3_224: 'SHA3-224',
    sha3_256: 'SHA3-256',
    sha3_384: 'SHA3-384',
    sha3_512: 'SHA3-512',
    ripemd160: 'RIPEMD-160',
    blake2b: 'BLAKE2b',
    blake2s: 'BLAKE2s',
    blake3: 'BLAKE3',
    keccak224: 'Keccak-224',
    keccak256: 'Keccak-256',
    keccak384: 'Keccak-384',
    keccak512: 'Keccak-512',
    whirlpool: 'Whirlpool',
    crc32: 'CRC32',
    hmac: 'HMAC选项',
    key: 'HMAC密钥',
    keyPlaceholder: '输入HMAC密钥'
  },
  results: {
    title: '哈希结果',
    algorithm: '算法',
    digest: '摘要',
    noInput: '输入文本或选择文件来计算哈希',
    calculating: '计算中...',
    copy: '复制',
    copied: '已复制到剪贴板',
    copyFailed: '复制失败，请手动复制',
    copyAll: '复制全部',
    download: '下载结果',
    fileInfo: '文件信息',
    fileName: '名称',
    fileSize: '大小',
    fileType: '类型',
    lastModified: '最后修改时间',
    hexFormat: '十六进制格式',
    base64Format: 'Base64格式',
    upperHexFormat: '大写十六进制格式',
  },
  verification: {
    title: '哈希验证',
    inputVerifyHash: '输入待验证的哈希值',
    placeholder: '输入哈希值进行比对...',
    paste: '粘贴哈希进行验证',
    matches: '哈希匹配！',
    doesNotMatch: '哈希不匹配',
    notFound: '未找到算法',
    verify: '验证',
    autoDetect: '自动检测算法',
    result: '验证结果'
  },
  options: {
    title: '选项',
    uppercase: '大写输出',
    showTiming: '显示计算时间',
    autoCalculate: '自动计算',
    formatOutput: '格式化长输出',
    binaryOutput: '二进制视图（用于非文本文件）',
    compareHashes: '比较哈希值',
    hmacMode: '启用HMAC模式'
  },
  tools: {
    title: '工具',
    batchProcessing: '批量处理',
    fileHashTool: '文件哈希目录',
    hashIdentifier: '哈希类型识别器',
    hmacGenerator: 'HMAC生成器',
    checksumVerifier: '校验和验证器',
    passwordHasher: '密码哈希器'
  },
  batchTool: {
    title: '批量处理',
    addFiles: '添加文件',
    processFiles: '处理文件',
    clearAll: '清除全部',
    fileName: '文件名',
    algorithm: '算法',
    status: '状态',
    actions: '操作',
    waiting: '等待中',
    processing: '处理中',
    complete: '完成',
    failed: '失败',
    remove: '移除',
    filesSelected: '已选择{count}个文件',
    exportResults: '导出结果',
    selectAlgorithm: '为所有文件选择算法'
  },
  messages: {
    fileTooBig: '文件太大。允许的最大大小为100MB。',
    hashCalculated: '哈希计算成功',
    invalidInput: '无效输入',
    readError: '读取文件失败',
    processingError: '处理文件错误：{error}'
  },
  security: {
    warning: '在不安全的HTTP连接上使用哈希工具有安全风险'
  },
  algorithmDetails: {
    title: '关于哈希算法',
    usage: '常见用途',
    safe: '安全性',
    md5: {
      name: 'MD5 (128位)',
      description: 'MD5是一种广泛使用的哈希函数，可产生128位（16字节）哈希值，通常以32位十六进制数表示。',
      usage: '文件完整性校验、存储密码（不安全）',
      security: '已被证明不具备抗碰撞性，不应用于安全场景。'
    },
    sha1: {
      name: 'SHA-1 (160位)',
      description: 'SHA-1是一种密码哈希函数，可产生160位（20字节）哈希值，通常以40位十六进制数表示。',
      usage: '版本控制系统（如Git）、文件完整性验证',
      security: '已被证明存在碰撞攻击风险，不建议用于安全关键应用。'
    },
    sha256: {
      name: 'SHA-256 (256位)',
      description: 'SHA-256属于SHA-2家族，产生256位（32字节）哈希值，通常以64位十六进制数表示。',
      usage: '数字签名、数字证书、密码存储、区块链',
      security: '目前被认为安全，广泛应用于需要高安全性的场景。'
    },
    sha384: {
      name: 'SHA-384 (384位)',
      description: 'SHA-384是SHA-512的截断版本，产生384位（48字节）哈希值。',
      usage: '需要比SHA-256更高安全性的场景',
      security: '提供比SHA-256更强的安全性，尚无已知的攻击方法。'
    },
    sha512: {
      name: 'SHA-512 (512位)',
      description: 'SHA-512是SHA-2家族中最长的标准算法，产生512位（64字节）哈希值。',
      usage: '要求最高安全级别的应用',
      security: '提供最高级别的安全性，目前没有已知的有效攻击。'
    },
    sha3_256: {
      name: 'SHA3-256 (256位)',
      description: 'SHA3-256是SHA-3标准的一部分，与SHA-2系列有完全不同的内部结构。',
      usage: '对抗量子计算威胁的长期安全应用',
      security: '设计目标是抵抗未来可能出现的攻击，包括量子计算攻击。'
    },
    sha3_512: {
      name: 'SHA3-512 (512位)',
      description: 'SHA3-512是SHA-3标准中提供最高安全性的算法。',
      usage: '需要极高安全性和抗量子计算能力的场景',
      security: '提供最高级别的安全保障，是SHA-3系列中最安全的算法。'
    },
    ripemd160: {
      name: 'RIPEMD-160 (160位)',
      description: 'RIPEMD-160是欧洲RIPE项目开发的哈希函数，产生160位哈希值。',
      usage: '比特币地址生成、区块链应用',
      security: '比同长度的SHA-1更安全，但使用率较低。'
    }
  }
} 