export default {
  name: 'QRコード生成ツール',
  description: 'URL、テキストなどのカスタマイズ可能なQRコードを生成',

  options: {
    content: 'QRコード内容',
    contentType: 'コンテンツタイプ',
    errorCorrectionLevel: 'エラー訂正レベル',
    size: 'サイズ',
    margin: '余白',
    foregroundColor: '前景色',
    backgroundColor: '背景色',
    logo: 'ロゴを追加',
    logoSize: 'ロゴサイズ',
    cornerRadius: '角の丸み'
  },

  contentTypes: {
    url: 'URL',
    text: 'テキスト',
    email: 'メールアドレス',
    phone: '電話番号',
    sms: 'SMS',
    wifi: 'WiFiネットワーク',
    vcard: '電子名刺(vCard)',
    mecard: '電子名刺(MeCard)'
  },

  errorLevels: {
    L: '低 (7%)',
    M: '中 (15%)',
    Q: '高 (25%)',
    H: '最高 (30%)'
  },

  actions: {
    generate: 'QRコードを生成',
    download: 'ダウンロード',
    downloadSVG: 'SVGをダウンロード',
    downloadPNG: 'PNGをダウンロード',
    copy: '画像をコピー',
    clear: 'リセット',
    uploadLogo: 'ロゴをアップロード'
  },

  templates: {
    title: 'クイックテンプレート',
    confirmReplace: '現在の内容を置き換えますか？',
    confirm: '確認',
    cancel: 'キャンセル',
    url: {
      name: 'URLリンク'
    },
    email: {
      name: 'メールアドレス'
    },
    phone: {
      name: '電話番号'
    },
    sms: {
      name: 'SMS'
    },
    wifi: {
      name: 'Wi-Fi設定',
      example: {
        ssid: 'ネットワーク名',
        password: 'パスワード'
      }
    },
    geo: {
      name: '位置情報'
    }
  },

  appearance: {
    title: '外観設定'
  },

  preview: {
    title: 'プレビュー',
    generating: '生成中...',
    clickGenerateButton: '「QRコードを生成」ボタンをクリック',
    clickToDownload: 'クリックしてQRコードをダウンロード'
  },

  tips: {
    title: 'ヒント',
    saveToPrint: '生成されたQRコードは画像として保存でき、印刷や共有に使用できます。',
    errorCorrection: 'エラー訂正レベルは、QRコードが部分的に隠れたり損傷したりしても読み取り可能かどうかを示します。Lレベルは最も低い許容率、Hレベルは最も高いですが、QRコードがより複雑になります。'
  },

  wifi: {
    ssid: 'ネットワーク名(SSID)',
    password: 'パスワード',
    encryption: '暗号化方式',
    hidden: '非表示ネットワーク'
  },

  placeholders: {
    content: 'テキスト、リンクなどの内容を入力...'
  },

  characters: '文字',
  maxChars: '300文字以内を推奨',

  messages: {
    copied: 'クリップボードにコピーしました！',
    generated: 'QRコードが正常に生成されました',
    contentRequired: 'QRコードの内容を入力してください',
    downloaded: 'QRコードがダウンロードされました',
    confirmReplace: '確認をクリックして現在の内容を置き換えます',
    contentUpdated: '内容が更新されました',
    changesCancelled: '変更がキャンセルされました',
    invalidUrl: '有効なURLを入力してください',
    invalidEmail: '有効なメールアドレスを入力してください',
    invalidPhone: '有効な電話番号を入力してください',
    logoTooBig: 'ロゴファイルが大きすぎます。最大ファイルサイズは1MBです'
  },

  errors: {
    canvasNotReady: 'Canvas要素の準備ができていません',
    generationError: 'QRコードの生成中にエラーが発生しました',
    generationErrorWithMessage: 'QRコードの生成中にエラーが発生しました: {message}',
    downloadError: 'QRコードのダウンロード中にエラーが発生しました: {message}'
  }
};