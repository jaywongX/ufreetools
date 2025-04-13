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
  },
  article: {
    title: "哈希计算器：生成和验证密码学哈希摘要",
    features: {
      title: "理解哈希函数及其应用",
      description: "<strong>哈希计算器</strong>是一种多功能<strong>密码学工具</strong>，设计用于从任何输入数据（无论是文本还是文件）生成固定长度的摘要（哈希值）。这个<strong>哈希生成器</strong>实现了多种行业标准算法，包括MD5、SHA-1、SHA-256、SHA-512以及更高级的选项，如SHA3和RIPEMD-160。<br><br>与加密不同，哈希函数是单向操作——它们将数据转换为独特的<strong>哈希摘要</strong>，无法逆向还原为原始输入。密码学哈希的一个关键特性是，即使输入发生微小变化，也会创建完全不同的输出，使这些<strong>哈希算法</strong>非常适合验证数据完整性和检测未授权的修改。我们的<strong>在线哈希计算器</strong>提供了一个用户友好的界面，用于计算这些数学指纹，使您能够轻松验证文件完整性、检查密码安全性或实现数据验证系统。",
      useCases: {
        title: "哈希函数的实际应用",
        items: [
          "<strong>文件完整性验证</strong>：通过将下载文件的<strong>哈希值</strong>与原始源提供的哈希值进行比较，确认下载的文件没有被损坏或篡改。这种<strong>校验和验证</strong>确保文件的精确按位准确性，这对软件分发尤为重要。",
          "<strong>数据去重</strong>：通过比较文件的<strong>哈希签名</strong>，识别重复文件，而不考虑文件名。存储系统使用这种技术来消除冗余数据副本，优化存储效率，无需手动比较文件内容。",
          "<strong>密码安全</strong>：在身份验证系统中存储<strong>密码哈希</strong>而不是实际密码。这种安全做法确保即使数据库被泄露，实际用户密码仍然受到保护，因为哈希无法被逆向还原。",
          "<strong>数字取证</strong>：创建<strong>文件指纹</strong>以确立数字调查中证据的真实性。取证专家使用哈希值来证明证据在调查过程中没有被修改。",
          "<strong>区块链应用</strong>：通过<strong>密码学哈希</strong>保护分布式账本中的交易记录。区块链中的每个区块包含前一个区块的哈希，创建一个极难被追溯修改的数据链。",
          "<strong>内容寻址</strong>：使用<strong>内容哈希值</strong>为分布式系统中的内容生成唯一标识符。这使得内容可寻址存储成为可能，数据可以基于其内容而非位置进行检索。"
        ]
      }
    },
    faq: {
      title: "关于哈希函数的常见问题",
      items: [
        {
          question: "MD5、SHA-1和SHA-256之间有什么区别？",
          answer: "这些是不同的密码学哈希算法，在安全性和输出长度方面有所不同。MD5生成128位（16字节）哈希值，但由于已发现碰撞（不同输入产生相同哈希），被认为在密码学上已被破解。SHA-1生成160位（20字节）哈希，虽然比MD5更强，但由于理论攻击，也不再推荐用于安全关键应用。SHA-256作为SHA-2家族的一部分，创建256位（32字节）哈希，对大多数当前应用仍然安全。使用我们的哈希计算器时，我们建议为安全敏感目的选择SHA-256或更强的算法（SHA-512、SHA3），而MD5和SHA-1可能仍适用于非安全应用，如校验和和去重。"
        },
        {
          question: "密码学哈希函数有多安全？",
          answer: "哈希函数的安全性取决于特定算法特性：抗碰撞性（难以找到两个具有相同哈希的输入）、抗原像性（不可能从哈希确定输入）和抗第二原像性（难以找到另一个与给定输入具有相同哈希的输入）。我们哈希生成器中实现的现代算法如SHA-256、SHA-512和SHA3被认为是密码学安全的，但MD5和SHA-1等旧算法存在已知漏洞。随着计算能力的增加和新攻击方法的发现，安全标准会随时间演变。对于需要高安全性的应用，请始终使用最新推荐的哈希函数（目前为SHA-256或更强），并了解密码学进展。"
        },
        {
          question: "我可以使用哈希计算器验证文件完整性吗？",
          answer: "是的，我们的在线哈希计算器非常适合文件完整性验证。下载软件时，许多提供商会发布其文件的哈希校验和。要验证完整性，只需在我们的工具中选择已下载的文件，选择与提供商使用的相同哈希算法（通常是SHA-256），计算哈希，并与发布的值进行比较。如果它们完全匹配，则您的文件完好无损且未被修改。这种验证过程可以防止下载过程中的意外损坏和潜在的恶意篡改。该工具在您的浏览器中本地处理文件，使其即使对大文件也很方便，同时保持隐私和安全。"
        },
        {
          question: "这个哈希计算器适合密码哈希处理吗？",
          answer: "虽然我们的哈希计算器可以演示密码哈希的工作原理，但对于实际的密码存储实现，应该使用专门的密码哈希函数，如bcrypt、Argon2或PBKDF2，而不是原始哈希函数。这些专门的算法包含重要的安全特性，如加盐（在哈希处理前向每个密码添加随机数据）和密钥拉伸（使哈希过程故意变慢），以防御彩虹表攻击和暴力破解尝试。我们的工具非常适合教育目的或测试一般哈希行为，但生产系统应实现专门构建的密码哈希库，具有适当的加盐、拉伸和安全最佳实践。"
        },
        {
          question: "如何比较或验证不同格式的哈希值？",
          answer: "我们的哈希计算器使比较哈希变得简单，无论格式差异如何。该工具以多种格式显示结果，包括小写十六进制（最常见的格式）、大写十六进制和Base64编码。要验证哈希：1）计算数据的哈希，2）在验证部分输入要比较的哈希，3）工具将自动比较它们，适当处理大小写敏感性。即使参考哈希与计算出的哈希大小写不同（大写与小写），此验证也有效。对于跨算法验证，您需要使用与参考哈希相同的算法重新计算哈希，因为不同算法即使对相同的输入数据也会产生根本不同的输出。"
        }
      ]
    },
    guide: {
      title: "使用哈希计算器的步骤指南",
      steps: [
        "<strong>选择输入类型</strong>：根据要哈希的内容，选择'文本'或'文件'输入选项。文本输入适用于字符串、密码或小块数据，而文件输入允许处理任何类型的整个文件。",
        "<strong>选择哈希算法</strong>：从下拉菜单中选择适当的<strong>哈希算法</strong>。对于一般用途和高安全性，推荐使用SHA-256。对于与特定系统的兼容性，您可能需要选择MD5、SHA-1或其他算法。",
        "<strong>输入数据</strong>：对于文本输入，在输入字段中键入或粘贴文本。对于文件输入，点击上传区域或拖放文件。<strong>哈希函数</strong>将处理此输入以生成唯一摘要。",
        "<strong>设置编码选项</strong>：如果使用文本输入，选择适当的字符编码（UTF-8是最常见且适用于大多数文本的推荐编码）。这确保在哈希前正确解释文本。",
        "<strong>生成哈希</strong>：点击'计算哈希'按钮处理输入并生成<strong>哈希摘要</strong>。工具将使用所选算法计算哈希值并显示结果。",
        "<strong>查看和复制结果</strong>：计算出的哈希将以多种格式显示（十六进制和Base64）。使用每种格式旁边的复制按钮将哈希值复制到剪贴板，以便在其他应用程序中使用。",
        "<strong>验证哈希（可选）</strong>：要与现有哈希进行验证，在结果下方的验证部分输入参考哈希。系统将自动将其与计算出的哈希进行比较，并指示它们是否匹配。"
      ]
    },
    conclusion: "哈希计算器提供了一种强大且易于使用的方式，可以将密码学哈希函数应用于广泛的应用场景，从基本的文件完整性验证到高级安全实现。通过提供多种行业标准算法和用户友好的界面，这个工具弥合了复杂密码学概念与实际日常应用之间的差距。无论您是实现安全功能的开发人员、验证软件完整性的IT专业人员，还是只是对哈希函数工作原理感到好奇，这个计算器都能让您直接在浏览器中立即访问强大的密码学功能。在我们的数字世界中，数据完整性和安全性是个人和专业领域的首要关注点，理解和利用哈希函数变得越来越重要。"
  }
} 