export default {
  name: 'RSA加密工具',
  description: '產生RSA金鑰對，加密/解密資料，建立/驗證數位簽章',
  tabs: {
    title: '功能選擇',
    keyGeneration: '金鑰產生',
    encryptDecrypt: '加密/解密',
    signVerify: '簽章/驗證'
  },
  keyGeneration: {
    title: 'RSA金鑰對產生',
    keyLength: '金鑰長度',
    keySizes: {
      size512: '512位 (不推薦用於安全場景)',
      size1024: '1024位 (基本安全)',
      size2048: '2048位 (推薦)',
      size4096: '4096位 (高安全性)'
    },
    generateButton: '產生金鑰對',
    generating: '產生中...',
    publicKey: '公鑰 (Public Key)',
    privateKey: '私鑰 (Private Key)',
    exportPublicKey: '匯出公鑰',
    exportPrivateKey: '匯出私鑰',
    copy: '複製',
    info: {
      title: '了解RSA金鑰對',
      description: 'RSA是一種非對稱加密演算法，使用一對金鑰：',
      points: {
        0: '公鑰：可以安全地分享給任何人，用於加密資料或驗證簽章。',
        1: '私鑰：必須安全保管，不能洩露，用於解密資料或建立簽章。'
      },
      keyLengthTitle: '金鑰長度決定了安全性級別：',
      keyLengthPoints: {
        0: '512位 - 已不再安全，僅用於測試',
        1: '1024位 - 較弱，不推薦用於敏感資料',
        2: '2048位 - 目前推薦使用的標準',
        3: '4096位 - 提供更高安全性，但處理速度較慢'
      }
    }
  },
  encryptDecrypt: {
    title: '加密與解密',
    encryptMode: '加密模式',
    decryptMode: '解密模式',
    encryptDescription: '使用公鑰加密資料，只有擁有對應私鑰的人才能解密。',
    decryptDescription: '使用私鑰解密之前用公鑰加密的資料。',
    keyLabel: {
      encrypt: '公鑰 (Public Key)',
      decrypt: '私鑰 (Private Key)'
    },
    dataLabel: {
      encrypt: '要加密的資料',
      decrypt: '要解密的資料'
    },
    keyPlaceholder: '請貼上RSA金鑰',
    dataPlaceholder: {
      encrypt: '在此輸入要加密的文字',
      decrypt: '在此輸入要解密的資料（Base64格式）'
    },
    processButton: {
      encrypt: '加密資料',
      decrypt: '解密資料'
    },
    processing: '處理中...',
    resultLabel: {
      encrypt: '加密結果',
      decrypt: '解密結果'
    },
    info: {
      title: '關於RSA加密與解密',
      description: 'RSA是一種非對稱加密演算法，其工作原理如下：',
      points: {
        0: '加密：使用接收者的公鑰加密資料，確保只有擁有對應私鑰的接收者能解密。',
        1: '解密：接收者使用自己的私鑰解密資料。',
        2: 'RSA加密有資料長度限制，通常不適合直接加密大文件。',
        3: '對於大型資料，通常先用對稱加密（如AES）加密資料，再用RSA加密對稱金鑰。'
      }
    },
    encrypt: '加密',
    decrypt: '解密'
  },
  signVerify: {
    title: '簽章與驗證',
    signMode: '簽章模式',
    verifyMode: '驗證模式',
    signDescription: '使用私鑰對資料進行簽章，證明資料來源的真實性和完整性。',
    verifyDescription: '使用公鑰驗證簽章，確認資料未被篡改且來自預期的發送者。',
    keyLabel: {
      sign: '私鑰 (Private Key)',
      verify: '公鑰 (Public Key)'
    },
    dataLabel: '資料',
    hashAlgorithm: '雜湊演算法',
    hashOptions: {
      sha1: 'SHA-1 (不推薦用於安全場景)',
      sha256: 'SHA-256 (推薦)',
      sha512: 'SHA-512 (高安全性)',
      md5: 'MD5 (僅用於測試，不安全)'
    },
    signatureLabel: '簽章 (Base64格式)',
    signaturePlaceholder: '在此輸入簽章資料',
    processButton: {
      sign: '產生簽章',
      verify: '驗證簽章'
    },
    processing: '處理中...',
    signatureResult: '簽章結果 (Base64格式)',
    verificationSuccess: '簽章驗證成功',
    verificationFailure: '簽章驗證失敗',
    verificationSuccessMessage: '資料未被篡改，且來自預期的發送者。',
    verificationFailureMessage: '資料可能已被篡改，或簽章不是由對應的私鑰建立的。',
    info: {
      title: '關於RSA簽章與驗證',
      description: 'RSA簽章是一種數位簽章技術，用於驗證訊息的真實性和完整性：',
      points: {
        0: '簽章過程：使用發送者的私鑰對訊息的雜湊值進行加密，產生數位簽章。',
        1: '驗證過程：接收者使用發送者的公鑰解密簽章，並與訊息的雜湊值進行比對。',
        2: '如果驗證成功，表明訊息確實由擁有私鑰的發送者發出，且內容未被篡改。',
        3: '簽章不對訊息進行加密，僅用於驗證其來源和完整性。要保護訊息內容，還需要加密。'
      }
    },
    sign: '簽章',
    verify: '驗證簽章',
    signatureValue: '簽章值',
    verificationResult: {
      success: '驗證成功！簽章有效，資料完整且來源可信。',
      failed: '驗證失敗！簽章無效，資料可能被篡改或來源不可信。'
    },
    dataPlaceholder: '在此輸入要簽章或驗證的資料',
    keyPlaceholder: '請貼上RSA金鑰'
  },
  messages: {
    copied: '已複製到剪貼簿',
    copyFailed: '複製失敗，請手動複製',
    keygenError: '產生金鑰對時出錯：{error}',
    encryptError: '加密失敗，請檢查您的公鑰和輸入資料。RSA加密對資料長度有限制。',
    decryptError: '解密失敗，請確保私鑰正確且輸入資料是有效的加密文字。',
    signError: '產生簽章失敗，請檢查您的私鑰和輸入資料。',
    verifyError: '驗證失敗，請檢查您的金鑰和輸入資料。',
    processingError: '操作失敗。請檢查您的金鑰和輸入資料。'
  }
}