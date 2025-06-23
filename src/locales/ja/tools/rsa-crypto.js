export default {
  name: 'RSA暗号化ツール',
  description: 'RSA鍵ペアの生成、データの暗号化/復号化、デジタル署名の作成/検証',
  tabs: {
    title: '機能選択',
    keyGeneration: '鍵生成',
    encryptDecrypt: '暗号化/復号化',
    signVerify: '署名/検証'
  },
  keyGeneration: {
    title: 'RSA鍵ペア生成',
    keyLength: '鍵長',
    keySizes: {
      size512: '512ビット (セキュリティ環境には非推奨)',
      size1024: '1024ビット (基本的なセキュリティ)',
      size2048: '2048ビット (推奨)',
      size4096: '4096ビット (高セキュリティ)'
    },
    generateButton: '鍵ペアを生成',
    generating: '生成中...',
    publicKey: '公開鍵 (Public Key)',
    privateKey: '秘密鍵 (Private Key)',
    exportPublicKey: '公開鍵をエクスポート',
    exportPrivateKey: '秘密鍵をエクスポート',
    copy: 'コピー',
    info: {
      title: 'RSA鍵ペアについて',
      description: 'RSAは非対称暗号化アルゴリズムで、一対の鍵を使用します：',
      points: {
        0: '公開鍵：誰とでも安全に共有でき、データの暗号化や署名の検証に使用されます。',
        1: '秘密鍵：安全に保管し、漏洩させてはならず、データの復号化や署名の作成に使用されます。'
      },
      keyLengthTitle: '鍵長はセキュリティレベルを決定します：',
      keyLengthPoints: {
        0: '512ビット - もはや安全ではなく、テスト用のみ',
        1: '1024ビット - 弱く、機密データには推奨されません',
        2: '2048ビット - 現在推奨される標準',
        3: '4096ビット - より高いセキュリティを提供しますが、処理速度が遅くなります'
      }
    }
  },
  encryptDecrypt: {
    title: '暗号化と復号化',
    encryptMode: '暗号化モード',
    decryptMode: '復号化モード',
    encryptDescription: '公開鍵を使用してデータを暗号化します。対応する秘密鍵を持つ人だけが復号化できます。',
    decryptDescription: '以前に公開鍵で暗号化されたデータを秘密鍵を使用して復号化します。',
    keyLabel: {
      encrypt: '公開鍵 (Public Key)',
      decrypt: '秘密鍵 (Private Key)'
    },
    dataLabel: {
      encrypt: '暗号化するデータ',
      decrypt: '復号化するデータ'
    },
    keyPlaceholder: 'RSA鍵を貼り付けてください',
    dataPlaceholder: {
      encrypt: '暗号化するテキストをここに入力',
      decrypt: '復号化するデータをここに入力（Base64形式）'
    },
    processButton: {
      encrypt: 'データを暗号化',
      decrypt: 'データを復号化'
    },
    processing: '処理中...',
    resultLabel: {
      encrypt: '暗号化結果',
      decrypt: '復号化結果'
    },
    info: {
      title: 'RSA暗号化と復号化について',
      description: 'RSAは非対称暗号化アルゴリズムで、次のように機能します：',
      points: {
        0: '暗号化：受信者の公開鍵を使用してデータを暗号化し、対応する秘密鍵を持つ受信者のみが復号化できるようにします。',
        1: '復号化：受信者は自分の秘密鍵を使用してデータを復号化します。',
        2: 'RSA暗号化にはデータ長の制限があり、通常は大きなファイルを直接暗号化するのには適していません。',
        3: '大きなデータの場合、通常は対称暗号化（AESなど）でデータを暗号化し、RSAで対称鍵を暗号化します。'
      }
    },
    encrypt: '暗号化',
    decrypt: '復号化'
  },
  signVerify: {
    title: '署名と検証',
    signMode: '署名モード',
    verifyMode: '検証モード',
    signDescription: '秘密鍵を使用してデータに署名し、データの出所の信頼性と完全性を証明します。',
    verifyDescription: '公開鍵を使用して署名を検証し、データが改ざんされておらず、予期された送信者からのものであることを確認します。',
    keyLabel: {
      sign: '秘密鍵 (Private Key)',
      verify: '公開鍵 (Public Key)'
    },
    dataLabel: 'データ',
    hashAlgorithm: 'ハッシュアルゴリズム',
    hashOptions: {
      sha1: 'SHA-1 (セキュリティ環境には非推奨)',
      sha256: 'SHA-256 (推奨)',
      sha512: 'SHA-512 (高セキュリティ)',
      md5: 'MD5 (テスト用のみ、安全ではない)'
    },
    signatureLabel: '署名 (Base64形式)',
    signaturePlaceholder: '署名データをここに入力',
    processButton: {
      sign: '署名を生成',
      verify: '署名を検証'
    },
    processing: '処理中...',
    signatureResult: '署名結果 (Base64形式)',
    verificationSuccess: '署名検証成功',
    verificationFailure: '署名検証失敗',
    verificationSuccessMessage: 'データは改ざんされておらず、予期された送信者からのものです。',
    verificationFailureMessage: 'データが改ざんされているか、署名が対応する秘密鍵で作成されていない可能性があります。',
    info: {
      title: 'RSA署名と検証について',
      description: 'RSA署名はメッセージの信頼性と完全性を検証するためのデジタル署名技術です：',
      points: {
        0: '署名プロセス：送信者の秘密鍵を使用してメッセージのハッシュ値を暗号化し、デジタル署名を生成します。',
        1: '検証プロセス：受信者は送信者の公開鍵を使用して署名を復号化し、メッセージのハッシュ値と比較します。',
        2: '検証が成功した場合、メッセージが秘密鍵を持つ送信者から確かに送信され、内容が改ざんされていないことを示します。',
        3: '署名はメッセージを暗号化せず、その出所と完全性を検証するためだけに使用されます。メッセージの内容を保護するには、暗号化も必要です。'
      }
    },
    sign: '署名',
    verify: '署名を検証',
    signatureValue: '署名値',
    verificationResult: {
      success: '検証成功！署名は有効で、データは完全で信頼できる出所からのものです。',
      failed: '検証失敗！署名が無効で、データが改ざんされているか、信頼できない出所からのものである可能性があります。'
    },
    dataPlaceholder: '署名または検証するデータをここに入力',
    keyPlaceholder: 'RSA鍵を貼り付けてください'
  },
  messages: {
    copied: 'クリップボードにコピーされました',
    copyFailed: 'コピーに失敗しました。手動でコピーしてください',
    keygenError: '鍵ペアの生成中にエラーが発生しました：{error}',
    encryptError: '暗号化に失敗しました。公開鍵と入力データを確認してください。RSA暗号化にはデータ長の制限があります。',
    decryptError: '復号化に失敗しました。秘密鍵が正しいこと、および入力データが有効な暗号化テキストであることを確認してください。',
    signError: '署名の生成に失敗しました。秘密鍵と入力データを確認してください。',
    verifyError: '検証に失敗しました。鍵と入力データを確認してください。',
    processingError: '操作に失敗しました。鍵と入力データを確認してください。'
  }
}