export default {
  name: 'SM2加密工具',
  description: '使用SM2密码算法生成密钥对、加密/解密数据以及创建/验证数字签名',
  tabs: {
    title: '功能选择',
    keyGeneration: '密钥生成',
    encryptDecrypt: '加密/解密',
    signVerify: '签名/验证'
  },
  keyGeneration: {
    title: 'SM2密钥对生成',
    generateButton: '生成密钥对',
    generating: '生成中...',
    publicKey: '公钥',
    privateKey: '私钥',
    exportPublicKey: '导出公钥',
    exportPrivateKey: '导出私钥',
    copy: '复制',
    info: {
      title: '了解SM2密钥对',
      description: 'SM2是中国国家密码管理局发布的椭圆曲线公钥密码算法，是一种非对称加密算法：',
      points: [
        '公钥：可以分享给他人，用于加密数据或验证签名',
        '私钥：必须安全保管，不能泄露，用于解密数据或创建签名'
      ],
      features: 'SM2算法特点：',
      featuresList: [
        '基于256位椭圆曲线，安全性相当于RSA 3072位',
        '执行速度快，密钥短',
        '国密标准（GB/T 32918系列），适用于中国国内商用密码场景',
        '集成了加密、签名、密钥交换等功能'
      ],
      securityTip: '安全提示：私钥决不能泄露给他人，请妥善保管您的密钥对。'
    }
  },
  encryptDecrypt: {
    title: '操作类型',
    encrypt: '加密',
    decrypt: '解密',
    keyLabel: {
      encrypt: '公钥',
      decrypt: '私钥'
    },
    dataLabel: {
      encrypt: '要加密的数据',
      decrypt: '要解密的数据'
    },
    keyPlaceholder: '请粘贴SM2密钥',
    dataPlaceholder: {
      encrypt: '输入要加密的文本',
      decrypt: '输入要解密的密文'
    },
    processButton: {
      encrypt: '加密',
      decrypt: '解密'
    },
    processing: '处理中...',
    resultLabel: {
      encrypt: '加密结果',
      decrypt: '解密结果'
    },
    info: {
      title: 'SM2加密/解密说明',
      usage: 'SM2加密/解密使用方法：',
      points: [
        '加密：使用接收方的公钥加密，只有拥有对应私钥的人才能解密',
        '解密：使用您的私钥解密由您公钥加密的数据'
      ],
      limitations: '使用限制：',
      limitationsList: [
        'SM2算法对明文长度有限制，适合加密短消息、密钥或敏感数据',
        '加密长文本建议先使用对称加密（如SM4），再用SM2加密对称密钥'
      ],
      note: '注意：SM2加密的数据格式与RSA不兼容，确保接收方支持SM2算法。'
    }
  },
  signVerify: {
    title: '操作类型',
    sign: '签名',
    verify: '验证',
    keyLabel: {
      sign: '私钥',
      verify: '公钥'
    },
    dataLabel: '要{operation}的数据',
    signatureLabel: '签名值',
    signatureValue: '生成的签名',
    keyPlaceholder: '请粘贴SM2密钥',
    dataPlaceholder: '输入原始数据文本',
    signaturePlaceholder: '输入要验证的签名值',
    processButton: {
      sign: '生成签名',
      verify: '验证签名'
    },
    processing: '处理中...',
    verificationSuccess: '签名验证成功！数据完整且未被篡改。',
    verificationFailed: '签名验证失败！数据可能已被篡改或签名不正确。',
    info: {
      title: 'SM2签名/验证说明',
      mainUses: 'SM2数字签名主要用途：',
      usesList: [
        '数据完整性：确保数据在传输过程中未被篡改',
        '身份认证：证明数据确实来自声称的发送者',
        '不可抵赖性：发送者无法否认曾发送过该消息'
      ],
      usage: '使用方法：',
      usageList: [
        '签名：使用您的私钥为数据生成签名',
        '验证：使用发送者的公钥验证签名的真实性'
      ],
      note: '注意：SM2签名采用国密标准算法，与国际通用的签名算法不兼容，需要接收方支持SM2算法。'
    }
  },
  messages: {
    copied: '已复制到剪贴板',
    copyFailed: '复制失败，请手动复制',
    keygenError: '生成密钥对时出错：{error}',
    processError: '操作失败。请检查您的密钥和输入数据。',
    emptyKey: '请输入密钥',
    emptyData: '请输入要处理的数据'
  }
} 