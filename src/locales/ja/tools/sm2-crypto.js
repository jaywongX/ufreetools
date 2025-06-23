export default {
  name: 'SM2暗号化ツール',
  description: 'SM2暗号アルゴリズムを使用して鍵ペアの生成、データの暗号化/復号化、デジタル署名の作成/検証を行う',
  tabs: {
    title: '機能選択',
    keyGeneration: '鍵生成',
    encryptDecrypt: '暗号化/復号化',
    signVerify: '署名/検証'
  },
  keyGeneration: {
    title: 'SM2鍵ペア生成',
    generateButton: '鍵ペアを生成',
    generating: '生成中...',
    publicKey: '公開鍵',
    privateKey: '秘密鍵',
    exportPublicKey: '公開鍵をエクスポート',
    exportPrivateKey: '秘密鍵をエクスポート',
    copy: 'コピー',
    info: {
      title: 'SM2鍵ペアについて',
      description: 'SM2は中国国家暗号管理局が発表した楕円曲線公開鍵暗号アルゴリズムで、非対称暗号化アルゴリズムの一種です：',
      points: [
        '公開鍵：他者と共有でき、データの暗号化や署名の検証に使用',
        '秘密鍵：安全に保管する必要があり、漏洩してはならない、データの復号化や署名の作成に使用'
      ],
      features: 'SM2アルゴリズムの特徴：',
      featuresList: [
        '256ビット楕円曲線ベースで、RSA 3072ビットと同等のセキュリティ',
        '実行速度が速く、鍵が短い',
        '中国の国家標準（GB/T 32918シリーズ）、中国国内の商用暗号シーンに適用',
        '暗号化、署名、鍵交換などの機能を統合'
      ],
      securityTip: 'セキュリティヒント：秘密鍵は決して他人に漏らさないでください。鍵ペアを適切に管理してください。'
    }
  },
  encryptDecrypt: {
    title: '操作タイプ',
    encrypt: '暗号化',
    decrypt: '復号化',
    keyLabel: {
      encrypt: '公開鍵',
      decrypt: '秘密鍵'
    },
    dataLabel: {
      encrypt: '暗号化するデータ',
      decrypt: '復号化するデータ'
    },
    keyPlaceholder: 'SM2鍵を貼り付けてください',
    dataPlaceholder: {
      encrypt: '暗号化するテキストを入力',
      decrypt: '復号化する暗号文を入力'
    },
    processButton: {
      encrypt: '暗号化',
      decrypt: '復号化'
    },
    processing: '処理中...',
    resultLabel: {
      encrypt: '暗号化結果',
      decrypt: '復号化結果'
    },
    info: {
      title: 'SM2暗号化/復号化の説明',
      usage: 'SM2暗号化/復号化の使用方法：',
      points: [
        '暗号化：受信者の公開鍵を使用して暗号化し、対応する秘密鍵を持つ人だけが復号化できる',
        '復号化：あなたの秘密鍵を使用して、あなたの公開鍵で暗号化されたデータを復号化'
      ],
      limitations: '使用制限：',
      limitationsList: [
        'SM2アルゴリズムは平文の長さに制限があり、短いメッセージ、鍵、機密データの暗号化に適している',
        '長文の暗号化には、まず対称暗号化（SM4など）を使用し、次にSM2で対称鍵を暗号化することをお勧め'
      ],
      note: '注意：SM2で暗号化されたデータの形式はRSAと互換性がありません。受信者がSM2アルゴリズムをサポートしていることを確認してください。'
    }
  },
  signVerify: {
    title: '操作タイプ',
    sign: '署名',
    verify: '検証',
    keyLabel: {
      sign: '秘密鍵',
      verify: '公開鍵'
    },
    dataLabel: '{operation}するデータ',
    signatureLabel: '署名値',
    signatureValue: '生成された署名',
    keyPlaceholder: 'SM2鍵を貼り付けてください',
    dataPlaceholder: '元のデータテキストを入力',
    signaturePlaceholder: '検証する署名値を入力',
    processButton: {
      sign: '署名を生成',
      verify: '署名を検証'
    },
    processing: '処理中...',
    verificationSuccess: '署名検証成功！データは完全で改ざんされていません。',
    verificationFailed: '署名検証失敗！データが改ざんされているか、署名が正しくありません。',
    info: {
      title: 'SM2署名/検証の説明',
      mainUses: 'SM2デジタル署名の主な用途：',
      usesList: [
        'データ完全性：転送中にデータが改ざんされていないことを確認',
        '身元認証：データが主張している送信者から確かに来ていることを証明',
        '否認防止：送信者がそのメッセージを送信したことを否定できない'
      ],
      usage: '使用方法：',
      usageList: [
        '署名：あなたの秘密鍵を使用してデータの署名を生成',
        '検証：送信者の公開鍵を使用して署名の真正性を検証'
      ],
      note: '注意：SM2署名は中国の国家標準アルゴリズムを採用しており、国際的に一般的な署名アルゴリズムとは互換性がありません。受信者がSM2アルゴリズムをサポートしている必要があります。'
    }
  },
  messages: {
    copied: 'クリップボードにコピーしました',
    copyFailed: 'コピーに失敗しました。手動でコピーしてください',
    keygenError: '鍵ペアの生成中にエラーが発生しました：{error}',
    processError: '操作に失敗しました。鍵と入力データを確認してください。',
    emptyKey: '鍵を入力してください',
    emptyData: '処理するデータを入力してください'
  }
} 