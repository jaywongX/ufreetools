export default {
  name: '在线哈希计算器 | 支持 SHA-256、MD5、SHA-3、BLAKE3、SM3 等多种算法',
  description: '免费在线哈希计算器，支持 SHA-256、MD5、SHA-3、BLAKE3、SM3 等多种加密与校验算法，适用于文件完整性验证、数据安全处理等场景。',

  input: {
    title: '输入',
    text: '文本输入',
    file: '文件输入',
    textPlaceholder: '在此输入要计算哈希的文本...',
    fileSelect: '选择文件',
    fileDrop: '拖放文件到此处或点击上传',
    fileSelected: '已选择文件: {name}',
    fileSize: '{size}',
    removeFile: '移除文件',
    localProcessing: '文件将在本地处理，不会上传到服务器',
    encoding: '编码',
    selectAlgorithm: '选择哈希算法',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    latin1: 'Latin1',
    calculate: '计算哈希',
    calculating: '计算中...',
    clear: '清除输入',
    hashValue: '哈希值'
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
    noInput: '输入文本或选择文件以计算哈希',
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
    hashValue: '哈希值',
    allHashesTitle: '所有哈希算法结果',
    hexFormat: '十六进制格式',
    algorithm: '算法',
    digest: '哈希值',
    export: '导出CSV',
    calculating: '正在计算...',
    copyToClipboard: '复制到剪贴板',
    allHashesTitle: '所有算法的哈希值',
  },

  verification: {
    title: '哈希验证',
    inputVerifyHash: '输入要验证的哈希值',
    placeholder: '输入用于比较的哈希值...',
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
    hmacMode: '启用HMAC模式',
    autoCalculate: '自动计算',
    showAllHashes: '显示所有算法的哈希值'
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
    fileTooBig: '文件太大。最大允许大小为100MB。',
    hashCalculated: '哈希计算成功',
    invalidInput: '无效输入',
    readError: '无法读取文件',
    processingError: '处理文件时出错: {error}',
    algorithmNotAvailable: '算法不可用。请安装所需库。',
    algorithmFallback: '{algorithm} 不可用，使用 {fallback} 作为备选',
    moduleNotReady: '{name} 模块尚未准备好',
    algorithmError: '{algorithm} 错误: {error}'
  },

  security: {
    warning: '在不安全的HTTP连接上使用哈希工具存在安全风险'
  },

  algorithmDetails: {
    title: '关于哈希算法',
    usage: '常见用途',
    safe: '安全性',
    md2: {
      name: 'MD2 (128位)',
      description: 'MD2是一种广泛使用的哈希函数，产生128位（16字节）哈希值，通常表示为32个十六进制字符。',
      usage: '文件完整性检查、存储密码（不安全）',
      security: '已被证明缺乏碰撞抵抗性；不应在安全敏感场合使用。'
    },
    md4: {
      name: 'MD4 (128位)',
      description: 'MD4是一种广泛使用的哈希函数，产生128位（16字节）哈希值，通常表示为32个十六进制字符。',
      usage: '文件完整性检查、存储密码（不安全）',
      security: '已被证明缺乏碰撞抵抗性；不应在安全敏感场合使用。'
    },
    md5: {
      name: 'MD5 (128位)',
      description: 'MD5是一种广泛使用的哈希函数，产生128位（16字节）哈希值，通常表示为32个十六进制字符。',
      usage: '文件完整性检查、存储密码（不安全）',
      security: '已被证明缺乏碰撞抵抗性；不应在安全敏感场合使用。'
    },
    sha1: {
      name: 'SHA-1 (160位)',
      description: 'SHA-1是一种加密哈希函数，产生160位（20字节）哈希值，通常表示为40个十六进制字符。',
      usage: '版本控制系统（如Git）、文件完整性验证',
      security: '已被证明存在碰撞攻击漏洞；不推荐用于安全关键应用。'
    },
    sha224: {
      name: 'SHA-224 (224位)',
      description: 'SHA-224是SHA-2家族中的一员，生成224位(28字节)哈希值。',
      usage: '适用于空间受限但仍需较强安全性的场景',
      security: '提供良好的安全性，是SHA-256的截断版本'
    },
    sha256: {
      name: 'SHA-256 (256位)',
      description: 'SHA-256属于SHA-2系列，产生256位（32字节）哈希值，通常表示为64个十六进制字符。',
      usage: '数字签名、数字证书、密码存储、区块链',
      security: '目前被认为是安全的，广泛用于高安全性场景。'
    },
    dsha256: {
      name: 'Double SHA-256',
      description: 'Double SHA-256是连续两次执行SHA-256的加密哈希函数，即SHA-256(SHA-256(x))。',
      usage: '比特币和许多其他加密货币中用于区块哈希、交易ID和地址生成',
      security: '提供与标准SHA-256相同的安全保证，但增加了额外的安全层，使其更难通过碰撞反向计算原始输入。'
    },
    sha384: {
      name: 'SHA-384 (384位)',
      description: 'SHA-384是SHA-512的截断版本，产生384位（48字节）哈希值。',
      usage: '需要比SHA-256更高安全性的场景',
      security: '提供比SHA-256更强的安全性，无已知攻击方法。'
    },
    sha512: {
      name: 'SHA-512 (512位)',
      description: 'SHA-512是SHA-2系列中最长的标准算法，产生512位（64字节）哈希值。',
      usage: '需要最高级别安全性的应用',
      security: '提供最高级别的安全性，无已知有效攻击。'
    },
    sha512_224: {
      name: 'SHA-512/224 (224位)',
      description: 'SHA-512/224是SHA-512的变种，输出被截断为224位。',
      usage: '提供与SHA-224相同长度但基于SHA-512内部结构的哈希',
      security: '对较长数据有更好的性能，同时保持强安全性'
    },
    sha512_256: {
      name: 'SHA-512/256 (256位)',
      description: 'SHA-512/256是SHA-512的变种，输出被截断为256位。',
      usage: '在64位系统上提供比SHA-256更好的性能',
      security: '与SHA-256安全性相当，但在某些硬件上更高效'
    },
    sha3_224: {
      name: 'SHA3-224 (224位)',
      description: 'SHA3-224是SHA-3标准的一部分，提供224位输出。',
      usage: '适用于需要抵抗量子计算的中等安全性场景',
      security: '是NIST认证的安全哈希算法，提供良好的安全保障'
    },
    sha3_256: {
      name: 'SHA3-256 (256位)',
      description: 'SHA3-256是SHA-3标准的一部分，具有与SHA-2系列完全不同的内部结构。',
      usage: '抵抗量子计算威胁的长期安全应用',
      security: '设计用于抵抗未来潜在攻击，包括量子计算攻击。'
    },
    sha3_384: {
      name: 'SHA3-384 (384位)',
      description: 'SHA3-384是SHA-3标准的一部分，提供384位输出。',
      usage: '适用于需要高安全性且抵抗量子计算的场景',
      security: '提供比SHA3-256更强的安全性，适合敏感数据应用'
    },
    sha3_512: {
      name: 'SHA3-512 (512位)',
      description: 'SHA3-512是SHA-3标准中提供最高级别安全性的算法。',
      usage: '需要极高安全性和抵抗量子计算的场景',
      security: '提供最高级别的安全保证，是SHA-3系列中最安全的算法。'
    },
    sm3: {
      name: 'SM3 (256位)',
      description: 'SM3是中国国家密码管理局发布的密码杂凑算法标准，产生256位输出。',
      usage: '中国商用密码应用、数字证书和电子政务系统',
      security: '设计类似SHA-2但优化了抗攻击性能，在中国广泛应用'
    },
    ripemd160: {
      name: 'RIPEMD-160 (160位)',
      description: 'RIPEMD-160是由欧洲RIPE项目开发的哈希函数，产生160位哈希值。',
      usage: '比特币地址生成、区块链应用',
      security: '比同长度的SHA-1更安全，但使用较少。'
    },
    crc32: {
      name: 'CRC32 (32位)',
      description: 'CRC32是一种循环冗余校验函数，常用于错误检测。',
      usage: '数据完整性校验、网络通信、数据传输验证',
      security: '不适用于密码学安全场景，主要用于错误检测而非安全防护'
    },
    murmur3_x86_32: {
      name: 'MurmurHash3 x86 (32位)',
      description: 'MurmurHash3是一种非加密哈希函数，以高性能和低碰撞率著称，32位版本适用于需要速度和空间效率的应用。',
      usage: '哈希表、布隆过滤器、缓存系统、数据分片',
      security: '非加密算法，不适合安全应用，但在性能关键场景表现优异'
    },
    murmur3_x86_128: {
      name: 'MurmurHash3 x86 (128位)',
      description: 'MurmurHash3的128位变体，提供更大的哈希空间和更低的碰撞概率，适用于大规模数据集。',
      usage: '大型哈希表、数据去重、分布式系统中的一致性哈希、内容寻址存储',
      security: '与32位版本一样是非加密算法，但碰撞概率更低，适合需要高唯一性的应用场景'
    },
    murmur3_x64_128: {
      name: 'MurmurHash3 x64 (128位)',
      description: 'MurmurHash3的128位变体，提供更大的哈希空间和更低的碰撞概率，适用于大规模数据集。',
      usage: '大型哈希表、数据去重、分布式系统中的一致性哈希、内容寻址存储',
      security: '与32位版本一样是非加密算法，但碰撞概率更低，适合需要高唯一性的应用场景'
    },
    blake2b: {
      name: 'BLAKE2b (512位)',
      description: 'BLAKE2b是一种快速且安全的哈希函数，针对现代CPU架构优化。',
      usage: '大规模数据处理、哈希表、字符串比较',
      security: '设计目标是速度和良好的哈希分布，但不保证加密安全性'
    },
    blake2s: {
      name: 'BLAKE2s (256位)',
      description: 'BLAKE2s是一种快速且安全的哈希函数，针对现代CPU架构优化。',
      usage: '大规模数据处理、哈希表、字符串比较',
      security: '设计目标是速度和良好的哈希分布，但不保证加密安全性'
    },
    blake3: {
      name: 'BLAKE3 (256位)',
      description: 'BLAKE3是一种快速且安全的哈希函数，针对现代CPU架构优化。',
      usage: '大规模数据处理、哈希表、字符串比较',
      security: '设计目标是速度和良好的哈希分布，但不保证加密安全性'
    },
    keccak224: {
      name: 'Keccak-224 (224位)',
      description: 'Keccak-224是SHA-3原始算法，产生224位哈希值。',
      usage: '以太坊和其他区块链应用、密码系统',
      security: '提供强大的安全性，在区块链技术中比标准化的SHA-3变体更常用'
    },
    keccak256: {
      name: 'Keccak-256 (256位)',
      description: 'Keccak-256是Keccak系列中使用最广泛的变体，产生256位哈希值。',
      usage: '以太坊智能合约、区块链交易、数字签名',
      security: '在区块链应用中广受信任，与标准化的SHA3-256略有不同'
    },
    keccak384: {
      name: 'Keccak-384 (384位)',
      description: 'Keccak-384是Keccak系列的一个变体，产生384位哈希值。',
      usage: '需要比Keccak-256更高安全性的应用',
      security: '提供非常强的安全保证，但使用频率低于Keccak-256'
    },
    keccak512: {
      name: 'Keccak-512 (512位)',
      description: 'Keccak-512是Keccak系列中最长的标准算法，产生512位哈希值。',
      usage: '需要最大碰撞抵抗力的高安全性应用',
      security: '在Keccak系列中提供最高安全级别，适用于最敏感的数据'
    },
    shake128: {
      name: 'SHAKE128 (128位)',
      description: 'SHAKE128是SHA-3家族的一部分，能够产生可变长度的输出，默认生成256位哈希值。',
      usage: '需要可变长度输出的加密应用，密钥派生函数',
      security: '提供良好的安全性，是NIST认可的安全哈希算法'
    },
    shake256: {
      name: 'SHAKE256 (256位)',
      description: 'SHAKE256是SHA-3家族的一部分，能够产生可变长度的输出，默认生成512位哈希值。',
      usage: '需要较长哈希输出的高安全性应用',
      security: '提供比SHAKE128更强的安全保证，适合敏感数据应用'
    },
    cshake128: {
      name: 'cSHAKE128 (可定制变长输出)',
      description: 'cSHAKE128 是 SHAKE128 的可定制版本，支持自定义字符串和函数名称，能够产生可变长度的输出。',
      usage: '需要定制参数的哈希算法场景，NIST标准的密钥衍生函数，加密协议',
      security: '提供与 SHAKE128 相当的安全性，同时支持应用程序级别的定制'
    },
    cshake256: {
      name: 'cSHAKE256 (可定制变长输出)',
      description: 'cSHAKE256 是 SHAKE256 的可定制版本，支持自定义字符串和函数名称，能够产生可变长度的输出。',
      usage: '高安全性要求的定制哈希场景，NIST认证的衍生函数，密码学协议',
      security: '提供与 SHAKE256 相当的强安全保证，同时允许应用程序级别的参数化定制'
    },
  },

  listGroups: {
    common: '常用算法',
    sha2: 'SHA-2系列',
    sha3: 'SHA-3系列',
    other: '其他算法'
  },

  metaTitle: '在线哈希计算器 - 生成和验证加密哈希值',
  metaDescription: '免费在线哈希计算工具，可为文本或文件生成和验证加密哈希值。支持多种算法，包括{algorithms}。'
}; 