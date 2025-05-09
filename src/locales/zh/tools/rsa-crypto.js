export default {
  name: 'RSA加密工具',
  description: '生成RSA密钥对，加密/解密数据，创建/验证数字签名',
  tabs: {
    title: '功能选择',
    keyGeneration: '密钥生成',
    encryptDecrypt: '加密/解密',
    signVerify: '签名/验证'
  },
  keyGeneration: {
    title: 'RSA密钥对生成',
    keyLength: '密钥长度',
    keySizes: {
      size512: '512位 (不推荐用于安全场景)',
      size1024: '1024位 (基本安全)',
      size2048: '2048位 (推荐)',
      size4096: '4096位 (高安全性)'
    },
    generateButton: '生成密钥对',
    generating: '生成中...',
    publicKey: '公钥 (Public Key)',
    privateKey: '私钥 (Private Key)',
    exportPublicKey: '导出公钥',
    exportPrivateKey: '导出私钥',
    copy: '复制',
    info: {
      title: '了解RSA密钥对',
      description: 'RSA是一种非对称加密算法，使用一对密钥：',
      points: {
        0: '公钥：可以安全地分享给任何人，用于加密数据或验证签名。',
        1: '私钥：必须安全保管，不能泄露，用于解密数据或创建签名。'
      },
      keyLengthTitle: '密钥长度决定了安全性级别：',
      keyLengthPoints: {
        0: '512位 - 已不再安全，仅用于测试',
        1: '1024位 - 较弱，不推荐用于敏感数据',
        2: '2048位 - 目前推荐使用的标准',
        3: '4096位 - 提供更高安全性，但处理速度较慢'
      }
    }
  },
  encryptDecrypt: {
    title: '加密与解密',
    encryptMode: '加密模式',
    decryptMode: '解密模式',
    encryptDescription: '使用公钥加密数据，只有拥有对应私钥的人才能解密。',
    decryptDescription: '使用私钥解密之前用公钥加密的数据。',
    keyLabel: {
      encrypt: '公钥 (Public Key)',
      decrypt: '私钥 (Private Key)'
    },
    dataLabel: {
      encrypt: '要加密的数据',
      decrypt: '要解密的数据'
    },
    keyPlaceholder: '请粘贴RSA密钥',
    dataPlaceholder: {
      encrypt: '在此输入要加密的文本',
      decrypt: '在此输入要解密的数据（Base64格式）'
    },
    processButton: {
      encrypt: '加密数据',
      decrypt: '解密数据'
    },
    processing: '处理中...',
    resultLabel: {
      encrypt: '加密结果',
      decrypt: '解密结果'
    },
    info: {
      title: '关于RSA加密与解密',
      description: 'RSA是一种非对称加密算法，其工作原理如下：',
      points: {
        0: '加密：使用接收者的公钥加密数据，确保只有拥有对应私钥的接收者能解密。',
        1: '解密：接收者使用自己的私钥解密数据。',
        2: 'RSA加密有数据长度限制，通常不适合直接加密大文件。',
        3: '对于大型数据，通常先用对称加密（如AES）加密数据，再用RSA加密对称密钥。'
      }
    },
    encrypt: '加密',
    decrypt: '解密'
  },
  signVerify: {
    title: '签名与验证',
    signMode: '签名模式',
    verifyMode: '验证模式',
    signDescription: '使用私钥对数据进行签名，证明数据来源的真实性和完整性。',
    verifyDescription: '使用公钥验证签名，确认数据未被篡改且来自预期的发送者。',
    keyLabel: {
      sign: '私钥 (Private Key)',
      verify: '公钥 (Public Key)'
    },
    dataLabel: '数据',
    hashAlgorithm: '哈希算法',
    hashOptions: {
      sha1: 'SHA-1 (不推荐用于安全场景)',
      sha256: 'SHA-256 (推荐)',
      sha512: 'SHA-512 (高安全性)',
      md5: 'MD5 (仅用于测试，不安全)'
    },
    signatureLabel: '签名 (Base64格式)',
    signaturePlaceholder: '在此输入签名数据',
    processButton: {
      sign: '生成签名',
      verify: '验证签名'
    },
    processing: '处理中...',
    signatureResult: '签名结果 (Base64格式)',
    verificationSuccess: '签名验证成功',
    verificationFailure: '签名验证失败',
    verificationSuccessMessage: '数据未被篡改，且来自预期的发送者。',
    verificationFailureMessage: '数据可能已被篡改，或签名不是由对应的私钥创建的。',
    info: {
      title: '关于RSA签名与验证',
      description: 'RSA签名是一种数字签名技术，用于验证消息的真实性和完整性：',
      points: {
        0: '签名过程：使用发送者的私钥对消息的哈希值进行加密，生成数字签名。',
        1: '验证过程：接收者使用发送者的公钥解密签名，并与消息的哈希值进行比对。',
        2: '如果验证成功，表明消息确实由拥有私钥的发送者发出，且内容未被篡改。',
        3: '签名不对消息进行加密，仅用于验证其来源和完整性。要保护消息内容，还需要加密。'
      }
    },
    sign: '签名',
    verify: '验证签名',
    signatureValue: '签名值',
    verificationResult: {
      success: '验证成功！签名有效，数据完整且来源可信。',
      failed: '验证失败！签名无效，数据可能被篡改或来源不可信。'
    },
    dataPlaceholder: '在此输入要签名或验证的数据',
    keyPlaceholder: '请粘贴RSA密钥'
  },
  messages: {
    copied: '已复制到剪贴板',
    copyFailed: '复制失败，请手动复制',
    keygenError: '生成密钥对时出错：{error}',
    encryptError: '加密失败，请检查您的公钥和输入数据。RSA加密对数据长度有限制。',
    decryptError: '解密失败，请确保私钥正确且输入数据是有效的加密文本。',
    signError: '生成签名失败，请检查您的私钥和输入数据。',
    verifyError: '验证失败，请检查您的密钥和输入数据。',
    processingError: '操作失败。请检查您的密钥和输入数据。'
  }
} 