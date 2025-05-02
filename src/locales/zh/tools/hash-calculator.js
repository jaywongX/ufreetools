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
  article: {
    title: "哈希计算器：生成和验证加密哈希摘要",
    intro: "我们的<strong>在线哈希计算器</strong>提供了一种简便的方式，为任何文本或文件生成加密哈希值。这款免费哈希生成工具支持多种算法，包括MD5、SHA-1、SHA-256、SHA-512、RIPEMD、BLAKE等多种算法。",
    features: {
      title: "了解哈希函数及其应用",
      description: "<strong>哈希函数</strong>是一种数学算法，可将任何大小的输入数据转换为固定大小的字符串。UFreeTools上的<strong>哈希计算器</strong>帮助您即时计算这些数字指纹，用于安全验证、数据完整性检查或区块链应用。<br><br>与加密不同，哈希函数是单向操作——它们将数据转换为唯一的<strong>哈希摘要</strong>，无法逆向恢复原始输入。加密哈希的一个关键特性是，即使输入有微小的变化，也会产生完全不同的输出，使这些<strong>哈希算法</strong>非常适合验证数据完整性和检测未授权的修改。",
      useCases: {
        title: "哈希函数的实际应用",
        items: [
          "<strong>文件完整性验证</strong>：安装软件下载前，您可以使用我们的<strong>校验和计算器</strong>通过比较其哈希值与开发者提供的哈希值，验证文件是否被篡改。这确保您安装的正是预期的内容，防止恶意软件注入。",
          "<strong>数据去重</strong>：存储系统通过比较数字签名，使用<strong>哈希值</strong>识别重复文件，无论文件名如何。我们的工具帮助您快速计算这些标识符，满足您自己的去重需求。",
          "<strong>密码安全</strong>：现代认证系统存储<strong>密码哈希</strong>而非实际密码。虽然我们的工具有助于理解这一过程，但请记住，生产环境中应使用带盐值的专用密码哈希函数。",
          "<strong>数字取证</strong>：调查人员使用<strong>哈希计算器</strong>创建文件指纹，确立证据真实性。哈希值证明数字证据在调查过程中未被修改。",
          "<strong>区块链应用</strong>：<strong>加密哈希</strong>构成了区块链技术的基础，SHA-256和Keccak-256等算法(分别用于比特币和以太坊)在防篡改链中保护交易记录。您可以使用我们的工具尝试这些相同的算法。",
          "<strong>内容验证</strong>：作者和内容创作者可以发布其原创作品的<strong>哈希摘要</strong>，为他人提供一种方式，验证他们拥有的是真实、未修改的版本。"
        ]
      },
      toolAdvantages: {
        title: "我们哈希计算器的优势",
        items: [
          "支持30多种哈希算法，从MD5到前沿选项如BLAKE3",
          "本地处理确保您的敏感数据永不离开您的设备",
          "针对预期值验证哈希，确认数据完整性",
          "以多种格式查看结果(十六进制和Base64)",
          "为文本输入和最大100MB的文件计算哈希值",
          "同时比较多种算法的结果"
        ]
      }
    },
    faq: {
      title: "关于哈希函数的常见问题",
      items: [
        {
          question: "MD5、SHA-1和SHA-256之间有什么区别？",
          answer: "这些是不同的加密哈希算法，在安全性和输出长度方面有所不同。<strong>MD5</strong>生成128位(16字节)哈希值，但由于已发现存在碰撞，在加密上被认为已被破解。<strong>SHA-1</strong>生成160位(20字节)哈希，虽然比MD5更强，但由于理论攻击，也不再推荐用于安全关键应用。<strong>SHA-256</strong>属于SHA-2家族，创建256位(32字节)哈希，目前仍被认为对大多数应用是安全的。对于安全敏感目的，我们建议使用SHA-256或更强算法如SHA-512或SHA3，而MD5和SHA-1仍可用于非安全应用，如校验和和去重。从<a href='https://csrc.nist.gov/projects/hash-functions' target='_blank' rel='noopener noreferrer'>美国国家标准与技术研究院(NIST)</a>了解更多关于哈希算法安全性的信息。"
        },
        {
          question: "加密哈希函数有多安全？",
          answer: "哈希函数的安全性取决于三个关键特性：抗碰撞性(难以找到具有相同哈希的两个输入)、抗原像性(无法从哈希确定输入)和抗第二原像性(难以找到与给定输入具有相同哈希的另一个输入)。现代算法如<strong>SHA-256</strong>、<strong>SHA-512</strong>和<strong>SHA3</strong>被认为是加密安全的，但MD5和SHA-1等较旧算法存在已知漏洞。随着计算能力的增加和新攻击方法的发现，安全标准会随时间演变。对于需要高安全性的应用，始终使用最新推荐的哈希函数(目前是SHA-256或更强)，并通过<a href='https://www.schneier.com/blog/archives/2005/02/cryptanalysis_o.html' target='_blank' rel='noopener noreferrer'>Bruce Schneier的加密博客</a>等资源关注加密技术的进展。"
        },
        {
          question: "我可以使用哈希计算器验证文件完整性吗？",
          answer: "是的，我们的<strong>在线哈希计算器</strong>非常适合文件完整性验证。下载软件时，许多提供商会发布其文件的哈希校验和。要验证完整性：1)在我们的工具中选择已下载的文件，2)选择提供商使用的相同哈希算法(通常是SHA-256)，3)计算哈希，4)与发布的值进行比较。如果完全匹配，则您的文件完好无损且未被修改。这个验证过程既可防止下载过程中的意外损坏，也可防止潜在的恶意篡改。该工具在浏览器中本地处理文件，即使对于大文件也很方便，同时保持隐私和安全。您可以验证来自<a href='https://ubuntu.com/download/desktop/thank-you' target='_blank' rel='noopener noreferrer'>Ubuntu</a>或<a href='https://www.python.org/downloads/' target='_blank' rel='noopener noreferrer'>Python</a>等提供安装文件哈希值的来源的校验和。"
        },
        {
          question: "这个哈希计算器适合密码哈希吗？",
          answer: "虽然我们的<strong>哈希生成器</strong>可以演示密码哈希的工作原理，但对于实际的密码存储实现，应使用专用的密码哈希函数，如bcrypt、Argon2或PBKDF2，而不是原始哈希函数。这些专用算法包含重要的安全功能，如加盐(在哈希前为每个密码添加随机数据)和密钥拉伸(故意减慢哈希过程)，以防御彩虹表攻击和暴力尝试。我们的工具非常适合教育目的或测试一般哈希行为，但生产系统应实现专用的密码哈希库，具有适当的加盐、拉伸和安全最佳实践。有关安全密码存储的更多信息，请访问<a href='https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html' target='_blank' rel='noopener noreferrer'>OWASP密码存储速查表</a>。"
        },
        {
          question: "如何比较或验证不同格式的哈希？",
          answer: "我们的<strong>哈希验证工具</strong>使比较哈希变得简单，无论格式差异如何。该工具以多种格式显示结果，包括小写十六进制(最常见的格式)、大写十六进制和Base64编码。要验证哈希：1)计算数据的哈希，2)在验证部分输入要比较的哈希，3)工具将自动比较它们，适当处理大小写敏感性。即使您的参考哈希与计算出的哈希大小写不同(大写vs小写)，此验证也有效。对于跨算法验证，您需要使用与参考哈希相同的算法重新计算哈希，因为不同算法即使对相同的输入数据也会产生根本不同的输出。"
        },
        {
          question: "我应该为特定需求使用哪种哈希算法？",
          answer: "最佳算法取决于您的具体要求：<br><strong>一般用途和高安全性</strong>：SHA-256提供了安全性和性能的良好平衡。<br><strong>区块链应用</strong>：SHA-256(比特币)或Keccak-256(以太坊)是行业标准。<br><strong>极其敏感的数据</strong>：SHA-512或SHA3-512提供最高安全性。<br><strong>性能关键应用</strong>：BLAKE2或BLAKE3提供安全性和卓越的速度。<br><strong>与遗留系统兼容</strong>：可能需要SHA-1或MD5，但请了解其安全限制。<br><strong>文件校验和</strong>：CRC32快速但仅用于错误检测，不提供安全性；推荐SHA-256用于安全校验和。<br>如有疑问，SHA-256是大多数需要安全性的现代应用的可靠默认选择。尝试我们的<a href='https://www.ufreetools.com/tools/hash-calculator' target='_blank'>哈希计算器</a>，实验不同算法并比较它们的输出。"
        }
      ]
    },
    guide: {
      title: "使用哈希计算器的分步指南",
      intro: "按照以下简单步骤为文本或文件生成和验证哈希值：",
      step1: "<strong>选择输入类型</strong>：根据要哈希的内容，在\"文本\"或\"文件\"输入选项之间选择。文本输入适合字符串、密码或小块数据，而文件输入允许处理任何类型的整个文件。",
      step2: "<strong>选择哈希算法</strong>：从下拉菜单中选择合适的<strong>哈希算法</strong>。对于一般用途和高安全性，推荐SHA-256。为了与特定系统兼容，您可能需要选择MD5、SHA-1或其他算法。",
      step3: "<strong>输入您的数据</strong>：对于文本输入，在输入字段中键入或粘贴您的文本。对于文件输入，点击上传区域或拖放您的文件。<strong>哈希函数</strong>将处理这些输入，生成唯一的摘要。",
      step4: "<strong>设置编码选项</strong>：如果使用文本输入，选择适当的字符编码(UTF-8是最常见且推荐用于大多数文本的编码)。这确保文本在哈希前被正确解释。",
      step5: "<strong>生成哈希</strong>：点击\"计算哈希\"按钮处理您的输入并生成<strong>哈希摘要</strong>。工具将使用所选算法计算哈希值并显示结果。",
      step6: "<strong>查看和复制结果</strong>：计算的哈希将以多种格式(十六进制和Base64)显示。使用每种格式旁边的复制按钮将哈希值复制到剪贴板，以供在其他应用程序中使用。",
      step7: "<strong>验证哈希(可选)</strong>：要与现有哈希进行验证，在结果下方的验证部分输入参考哈希。系统将自动将其与您计算的哈希进行比较，并指示它们是否匹配。",
      additionalTips: "对于大文件，处理可能需要一些时间，取决于您设备的性能。请记住，处理完全在您的浏览器中进行，因此您的数据永远不会离开您的计算机。"
    },
    relatedTools: {
      title: "您可能会发现有用的相关工具",
      tools: [
        {
          name: "密码生成器",
          description: "为您的账户创建强大、安全的密码",
          url: "https://www.ufreetools.com/tools/password-generator"
        },
        {
          name: "文本编码器/解码器",
          description: "在Base64、URL和HTML等不同编码之间转换文本",
          url: "https://www.ufreetools.com/tools/text-encoder-decoder"
        },
        {
          name: "文件转换器",
          description: "在不同格式之间转换文件",
          url: "https://www.ufreetools.com/tools/file-converter"
        }
      ]
    },
    conclusion: "哈希计算器提供了一种强大且易于使用的方式，可以为各种应用利用加密哈希函数，从基本的文件完整性验证到高级安全实现。通过提供多种行业标准算法和用户友好的界面，这个工具弥合了复杂的加密概念与实际日常应用之间的差距。无论您是实现安全功能的开发人员，验证软件完整性的IT专业人员，还是仅仅对哈希函数如何工作感到好奇，这个计算器都可以让您直接在浏览器中立即访问强大的加密功能。在数据完整性和安全性成为个人和专业领域的重要关注点的数字世界中，理解和利用哈希函数变得越来越重要。"
  },
  listGroups: {
    common: '常用算法',
    sha2: 'SHA-2系列',
    sha3: 'SHA-3系列',
    other: '其他算法'
  },
  metaTitle: '在线哈希计算器 - 生成和验证加密哈希值',
  metaDescription: '免费在线哈希计算工具，可为文本或文件生成和验证加密哈希值。支持多种算法，包括{algorithms}。'
} 