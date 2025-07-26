export default {
  name: 'HMAC計算ツール',
  description: 'データのHMAC（ハッシュベースのメッセージ認証コード）を計算',
  title: 'HMAC メッセージ認証コード計算ツール',
  intro: '鍵を使用してメッセージ認証コードを生成、複数のハッシュアルゴリズムと出力形式をサポート',

  input: {
    title: '入力',
    message: 'メッセージ',
    messagePlaceholder: '認証するメッセージを入力',
    key: '鍵',
    keyLabel: '秘密鍵 (Secret Key)',
    keyPlaceholder: 'HMAC鍵を入力',
    messageLabel: 'メッセージ (Message)',
    messageLongPlaceholder: 'HMACを計算するメッセージを入力',
    file: 'ファイル',
    text: 'テキスト',
    fileSelect: 'ファイルを選択',
    fileDrop: 'またはファイルをここにドロップ',
    fileSelected: '選択されたファイル：{name}',
    clearFile: 'ファイルをクリア',
    encoding: '入力エンコーディング',
    keyEncoding: '鍵エンコーディング',
    outputFormat: '出力形式',
    inputType: '入力タイプ',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    base64: 'Base64',
    hex: '16進数',
    binary: 'バイナリ',
    calculate: 'HMACを計算',
    calculating: '計算中...',
    clear: 'すべてクリア'
  },

  algorithms: {
    title: 'アルゴリズム',
    label: 'ハッシュアルゴリズム',
    hmacMd5: 'HMAC-MD5',
    hmacSha1: 'HMAC-SHA1',
    hmacSha224: 'HMAC-SHA224',
    hmacSha256: 'HMAC-SHA256',
    hmacSha384: 'HMAC-SHA384',
    hmacSha512: 'HMAC-SHA512',
    hmacRipemd160: 'HMAC-RIPEMD160',
    hmacSm3: 'HMAC-SM3'
  },

  result: {
    title: 'HMAC結果',
    digest: 'HMACダイジェスト',
    outputLabel: 'HMAC 結果',
    copy: 'コピー',
    copied: 'コピーしました！',
    noResult: 'メッセージと鍵を入力してHMACを計算',
    calculating: '計算中...',
    placeholder: 'HMAC 結果がここに表示されます',
    useExample: '例を使用',
    jsExample: 'JavaScript 例：',
  },

  validation: {
    title: 'HMAC検証',
    hmacToVerify: '検証するHMAC',
    verifyPlaceholder: '検証するHMACを入力',
    verify: 'HMACを検証',
    valid: 'HMACは有効です',
    invalid: 'HMACは無効です',
    verifying: '検証中...'
  },

  options: {
    title: 'オプション',
    uppercase: '大文字で出力',
    showDetails: '技術詳細を表示',
    autoUpdate: '自動更新',
    truncate: '出力を切り詰める',
    truncateLength: '切り詰め長'
  },

  details: {
    title: '技術詳細',
    algorithm: 'アルゴリズム',
    keyLength: '鍵の長さ',
    blockSize: 'ブロックサイズ',
    outputLength: '出力長',
    execution: '実行時間',
    ms: 'ミリ秒'
  },

  messages: {
    noMessage: 'メッセージを入力してください',
    noKey: '鍵を入力してください',
    invalidEncoding: '無効なエンコーディング形式',
    processingError: '処理エラー：{error}',
    success: 'HMAC計算成功',
    invalidKey: '選択したエンコーディングの鍵形式が無効です',
    fileTooBig: 'ファイルが大きすぎます。最大サイズは5MBです',
    copied: 'クリップボードにコピーしました',
    copyFailed: 'コピーに失敗しました、手動でコピーしてください',
    invalidHex: '鍵は有効な16進数形式ではありません',
    invalidBase64: '鍵は有効なBase64形式ではありません',
  },

  security: {
    title: 'セキュリティに関する注意',
    keyStorage: '鍵を共有しないでください',
    keyStrength: '各アプリケーションに強力でユニークな鍵を使用してください',
    recommendation: 'セキュリティが重要なアプリケーションでは、少なくともHMAC-SHA256を使用してください',
    warning: 'HMAC-MD5とHMAC-SHA1は高セキュリティアプリケーションには適さない場合があります'
  }
};