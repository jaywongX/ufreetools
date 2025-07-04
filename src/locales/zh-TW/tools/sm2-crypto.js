export default {
  name: 'SM2加密工具',
  description: '使用SM2密碼算法生成密鑰對、加密/解密數據以及創建/驗證數字簽名',
  tabs: {
    title: '功能選擇',
    keyGeneration: '密鑰生成',
    encryptDecrypt: '加密/解密',
    signVerify: '簽名/驗證'
  },
  keyGeneration: {
    title: 'SM2密鑰對生成',
    generateButton: '生成密鑰對',
    generating: '生成中...',
    publicKey: '公鑰',
    privateKey: '私鑰',
    exportPublicKey: '導出公鑰',
    exportPrivateKey: '導出私鑰',
    copy: '複製',
    info: {
      title: '了解SM2密鑰對',
      description: 'SM2是中國國家密碼管理局發布的橢圓曲線公鑰密碼算法，是一種非對稱加密算法：',
      points: [
        '公鑰：可以分享給他人，用於加密數據或驗證簽名',
        '私鑰：必須安全保管，不能洩露，用於解密數據或創建簽名'
      ],
      features: 'SM2算法特點：',
      featuresList: [
        '基於256位橢圓曲線，安全性相當於RSA 3072位',
        '執行速度快，密鑰短',
        '國密標準（GB/T 32918系列），適用於中國國內商用密碼場景',
        '集成了加密、簽名、密鑰交換等功能'
      ],
      securityTip: '安全提示：私鑰決不能洩露給他人，請妥善保管您的密鑰對。'
    }
  },
  encryptDecrypt: {
    title: '操作類型',
    encrypt: '加密',
    decrypt: '解密',
    keyLabel: {
      encrypt: '公鑰',
      decrypt: '私鑰'
    },
    dataLabel: {
      encrypt: '要加密的數據',
      decrypt: '要解密的數據'
    },
    keyPlaceholder: '請粘貼SM2密鑰',
    dataPlaceholder: {
      encrypt: '輸入要加密的文本',
      decrypt: '輸入要解密的密文'
    },
    processButton: {
      encrypt: '加密',
      decrypt: '解密'
    },
    processing: '處理中...',
    resultLabel: {
      encrypt: '加密結果',
      decrypt: '解密結果'
    },
    info: {
      title: 'SM2加密/解密說明',
      usage: 'SM2加密/解密使用方法：',
      points: [
        '加密：使用接收方的公鑰加密，只有擁有對應私鑰的人才能解密',
        '解密：使用您的私鑰解密由您公鑰加密的數據'
      ],
      limitations: '使用限制：',
      limitationsList: [
        'SM2算法對明文長度有限制，適合加密短消息、密鑰或敏感數據',
        '加密長文本建議先使用對稱加密（如SM4），再用SM2加密對稱密鑰'
      ],
      note: '注意：SM2加密的數據格式與RSA不相容，確保接收方支持SM2算法。'
    }
  },
  signVerify: {
    title: '操作類型',
    sign: '簽名',
    verify: '驗證',
    keyLabel: {
      sign: '私鑰',
      verify: '公鑰'
    },
    dataLabel: '要{operation}的數據',
    signatureLabel: '簽名值',
    signatureValue: '生成的簽名',
    keyPlaceholder: '請粘貼SM2密鑰',
    dataPlaceholder: '輸入原始數據文本',
    signaturePlaceholder: '輸入要驗證的簽名值',
    processButton: {
      sign: '生成簽名',
      verify: '驗證簽名'
    },
    processing: '處理中...',
    verificationSuccess: '簽名驗證成功！數據完整且未被篡改。',
    verificationFailed: '簽名驗證失敗！數據可能已被篡改或簽名不正確。',
    info: {
      title: 'SM2簽名/驗證說明',
      mainUses: 'SM2數字簽名主要用途：',
      usesList: [
        '數據完整性：確保數據在傳輸過程中未被篡改',
        '身份認證：證明數據確實來自聲稱的發送者',
        '不可抵賴性：發送者無法否認曾發送過該消息'
      ],
      usage: '使用方法：',
      usageList: [
        '簽名：使用您的私鑰為數據生成簽名',
        '驗證：使用發送者的公鑰驗證簽名的真實性'
      ],
      note: '注意：SM2簽名採用國密標準算法，與國際通用的簽名算法不相容，需要接收方支持SM2算法。'
    }
  },
  messages: {
    copied: '已複製到剪貼板',
    copyFailed: '複製失敗，請手動複製',
    keygenError: '生成密鑰對時出錯：{error}',
    processError: '操作失敗。請檢查您的密鑰和輸入數據。',
    emptyKey: '請輸入密鑰',
    emptyData: '請輸入要處理的數據'
  }
}