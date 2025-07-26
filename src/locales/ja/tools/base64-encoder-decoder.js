export default {
  name: 'Base64 エンコーダー/デコーダー',
  description: 'テキストとBase64エンコード間でデータを素早く変換',

  mode: {
    title: 'モード',
    encode: 'エンコード',
    decode: 'デコード'
  },

  input: {
    title: '入力',
    placeholder: '処理するテキストを入力...',
    clear: 'クリア',
    copy: 'コピー',
    paste: '貼り付け',
    upload: 'ファイルをアップロード',
    dragDrop: 'ここにファイルをドラッグ&ドロップするか、クリックしてアップロード',
    textOption: 'テキスト',
    fileOption: 'ファイル',
    hexOption: 'Hex',
    selectFile: 'ファイルを選択',
  },

  output: {
    title: '出力',
    placeholder: '結果がここに表示されます...',
    copy: 'コピー',
    download: 'ダウンロード',
    empty: '出力なし'
  },

  options: {
    title: 'オプション',
    encoding: '文字エンコーディング',
    encodings: {
      utf8: 'UTF-8',
      ascii: 'ASCII',
      iso88591: 'ISO-8859-1',
      windows1252: 'Windows-1252'
    },
    urlSafe: 'URL安全エンコーディングを使用',
    autoDecode: '自動検出してデコード',
    includeDataURI: 'Data URIプレフィックスを含める',
    trimWhitespace: '空白文字を削除',
    preserveLineBreaks: '改行を保持',
    addImageHeader:'画像Base64ヘッダーを追加',
  },

  dataUri: {
    title: 'Data URI',
    mimeType: 'MIMEタイプ',
    common: '一般的なタイプ',
    custom: 'カスタム'
  },

  messages: {
    copied: 'クリップボードにコピーしました',
    copyFailed: 'コピーに失敗しました',
    pasteFailed: '貼り付けに失敗しました',
    uploadSuccess: 'ファイルのアップロードに成功しました',
    uploadFailed: 'ファイルのアップロードに失敗しました',
    readFailed: 'ファイルの読み込みに失敗しました',
    invalidBase64: '無効なBase64エンコーディング',
    invalidHex: '無効なHexエンコーディング',
    fileTooLarge: 'ファイルが大きすぎます。直接ダウンロードして確認してください',
    processError: '処理中にエラーが発生しました',
    encodeSuccess: 'エンコードに成功しました',
    decodeSuccess: 'デコードに成功しました',
    processing: '処理中...'
  },

  mimeTypes: {
    'text/plain': 'テキスト',
    'application/json': 'JSON',
    'text/html': 'HTML',
    'text/css': 'CSS',
    'text/javascript': 'JavaScript',
    'application/xml': 'XML',
    'image/jpeg': 'JPEG画像',
    'image/png': 'PNG画像',
    'image/gif': 'GIF画像',
    'image/svg+xml': 'SVG画像',
    'application/pdf': 'PDF文書'
  },

  tips: {
    title: '使用ヒント',
    tip1: 'Base64エンコーディングはあらゆるバイナリデータを純粋なテキスト形式に変換できます',
    tip2: 'URL安全オプションを使用すると、標準Base64の"+"と"/"文字が削除されます',
    tip3: 'Data URIプレフィックスを使用すると、HTMLのimgやその他のタグでエンコードされたデータを直接使用できます',
    tip4: '大きなファイルのエンコードはより多くのリソースを消費するため、2MB以内に制限することをお勧めします',
    tip5: '特殊文字によっては、正しく処理するために特定の文字エンコーディングが必要な場合があります'
  },

  about: {
    title: 'Base64エンコード/デコードについて',
    description: 'Base64は64個の印刷可能な文字を使用してバイナリデータを表現する方法で、テキスト処理の場面でバイナリデータの表現、転送、保存によく使用されます。'
  },

  features: {
    title: '機能説明',
    multiInput: 'テキスト、Hex、ファイルの3種類の入力方法をサポート',
    charsetSupport: 'UTF-8とGBK文字セットのデコードをサポート',
    imagePreview: '画像プレビューをサポート（1MB未満の画像ファイル）',
    fileDownload: '様々な形式のファイルダウンロードをサポート（デフォルトはPDF形式）',
    chunkProcessing: '大きなファイルの分割処理、リアルタイムの処理進捗表示',
    autoDetect: '画像タイプの自動認識とプレビュー'
  },

  notes: {
    title: '注意事項',
    sizeIncrease: 'Base64エンコードによりデータ量が約33%増加します',
    chunkProcessing: '大きなファイルの処理は分割処理を採用し、進捗バーは2段階で表示されます',
    largeFiles: '10MB以上のファイルはダウンロードでの確認のみサポートし、テキスト内容は表示されません',
    fileInput: '大きなファイルはテキストボックスに貼り付けるのを避け、ファイル入力方式を使用することをお勧めします'
  },

  fileTypeLabel: {
    pdf: 'PDF文書',
    txt: 'テキストファイル',
    jpg: 'JPG画像', 
    png: 'PNG画像', 
    zip: 'ZIPアーカイブ',
    bin: 'バイナリファイル',
  }
};