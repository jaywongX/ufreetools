export default {
  name: '対称暗号化アルゴリズム',
  description: 'テキストとファイルの安全な暗号化と復号化を実現、AES、DES、中国国家標準SM4など複数の対称暗号化アルゴリズムをサポート',

  encryption: {
    title: '暗号化/復号化',
    plaintext: '平文',
    plaintextPlaceholder: '暗号化するテキストを入力',
    ciphertext: '暗号文',
    ciphertextPlaceholder: '暗号化されたデータがここに表示されます',
    encrypt: '暗号化',
    decrypt: '復号化',
    decrypted: '復号化テキスト',
    decryptedPlaceholder: '復号化されたデータがここに表示されます',
    encryptSuccess: '暗号化成功',
    decryptSuccess: '復号化成功',
    encryptError: '暗号化失敗：{error}',
    decryptError: '復号化失敗：{error}'
  },

  algorithm: {
    title: 'アルゴリズム選択',
    aes: 'AES',
    des: 'DES',
    tripledes: '3DES（トリプルDES）',
    sm4: 'SM4 (中国国家標準)',
    "3des": '3DES（トリプルDES）'
  },

  mode: {
    title: '動作モード',
    ecb: 'ECB - 電子コードブックモード',
    cbc: 'CBC - 暗号ブロック連鎖モード',
    cfb: 'CFB - 暗号フィードバックモード',
    ofb: 'OFB - 出力フィードバックモード',
    ctr: 'CTR - カウンターモード'
  },

  padding: {
    title: 'パディング方式',
    pkcs7: 'PKCS7',
    zeroPadding: 'ゼロパディング',
    zeropadding: 'ゼロパディング'
  },

  operation: {
    title: '操作タイプ',
    encrypt: '暗号化',
    decrypt: '復号化'
  },

  key: {
    title: '鍵',
    label: '鍵',
    placeholder: '{keySize}鍵を入力',
    placeholderString: '{keySize}文字列鍵を入力（不足分は自動補完）',
    placeholderHex: '{keySize}16進数鍵を入力（不足分は自動補完）',
    placeholderBase64: '{keySize}Base64鍵を入力（不足分は自動補完）',
    generateRandom: 'ランダム生成',
    sizeHint: '{keySize}',
    autoFillHint: '鍵の長さが不足している場合は自動的にゼロで埋められ、超過部分は切り捨てられます'
  },

  iv: {
    title: '初期化ベクトル (IV)',
    label: '初期化ベクトル (IV)',
    placeholder: '{blockSize}初期化ベクトルを入力',
    placeholderString: '{blockSize}文字列IVを入力（不足分は自動補完）',
    placeholderHex: '{blockSize}16進数IVを入力（不足分は自動補完）',
    placeholderBase64: '{blockSize}Base64 IVを入力（不足分は自動補完）',
    generateRandom: 'ランダム生成',
    sizeHint: '{blockSize}',
    autoFillHint: 'IVの長さが不足している場合は自動的にゼロで埋められ、超過部分は切り捨てられます'
  },

  input: {
    title: '暗号化するコンテンツ',
    titleDecrypt: '復号化するコンテンツ',
    clear: 'クリア',
    placeholder: '暗号化するテキストを入力',
    placeholderDecrypt: '復号化する{format}形式の暗号文を入力'
  },

  inputFormat: {
    title: '入力形式',
    string: '文字列',
    hex: 'HEX',
    base64: 'Base64'
  },

  output: {
    title: '暗号化結果',
    titleDecrypt: '復号化結果',
    copyResult: '結果をコピー',
    copied: 'コピーしました'
  },

  outputFormat: {
    title: '出力形式',
    string: '文字列',
    hex: 'HEX',
    base64: 'Base64'
  },

  error: {
    title: 'エラー',
    invalidHex: '鍵はHEX形式である必要があります',
    invalidIvHex: 'IVはHEX形式である必要があります',
    invalidHexInput: '無効なHEX形式入力',
    invalidBase64: '無効なBase64形式入力',
    unsupportedAlgorithm: 'サポートされていないアルゴリズム',
    decryptionFailed: '復号化失敗：{message}',
    copyFailed: 'コピーに失敗しました。手動でコピーしてください',
    unknownError: '処理中にエラーが発生しました',
    invalidHexFormat: '無効なHEX形式',
    invalidBase64Format: '無効なBase64形式',
    emptyBase64: '無効なBase64エンコーディング',
    decryptFailed: '復号化失敗：'
  },

  info: {
    title: 'アルゴリズム説明',
    algorithms: {
      aes: 'AES：高度暗号化標準、128ビット、192ビット、または256ビットの鍵を使用可能',
      des: 'DES：データ暗号化標準、56ビットの鍵を使用、セキュリティレベルは低め',
      tripledes: '3DES：トリプルDES、3つの56ビットDES鍵を使用し、より高いセキュリティを提供',
      sm4: 'SM4：中国国家標準、ブロック暗号アルゴリズム、128ビットの鍵を使用',
      "3des": '3DES：トリプルDES、3つの56ビットDES鍵を使用し、より高いセキュリティを提供'
    },
    modes: {
      title: '動作モード説明',
      ecb: 'ECB：電子コードブックモード、各ブロックが独立して暗号化され、機密データには推奨されません',
      cbc: 'CBC：暗号ブロック連鎖モード、各ブロックが前のブロックに依存し、より安全です',
      cfb: 'CFB：暗号フィードバックモード、ブロック暗号をストリーム暗号に変換します',
      ofb: 'OFB：出力フィードバックモード、これもストリーム暗号モードで、暗号化と復号化に同じ操作を使用します',
      ctr: 'CTR：カウンターモード、各ブロックは増分カウンターを使用して暗号化され、並列処理が可能です'
    }
  },

  buttons: {
    process: '暗号化',
    processDecrypt: '復号化'
  },

  file: {
    title: 'ファイル暗号化',
    select: 'ファイルを選択',
    drop: 'またはファイルをここにドロップ',
    encrypt: 'ファイルを暗号化',
    decrypt: 'ファイルを復号化',
    download: '結果をダウンロード',
    selected: '選択済み：{name}',
    size: 'サイズ：{size}',
    maxSize: '最大サイズ：100MB',
    encryptingFile: 'ファイルを暗号化中...',
    decryptingFile: 'ファイルを復号化中...',
    downloadReady: 'ダウンロード可能',
    fileTooBig: 'ファイルが大きすぎます。許可される最大サイズは100MBです。'
  },

  options: {
    title: 'オプション',
    autoDecrypt: '暗号化後に自動復号化',
    includeMeta: '出力にアルゴリズムメタデータを含める',
    kdf: '鍵導出関数',
    pbkdf2: 'PBKDF2',
    scrypt: 'scrypt',
    argon2: 'Argon2id',
    salt: 'ソルト（鍵導出用）',
    saltPlaceholder: '16進数でソルトを入力するか、空欄でランダム生成',
    autoClear: '機密データを自動クリア',
    saveSettings: '設定を保存'
  },

  security: {
    title: 'セキュリティ情報',
    description: '暗号化セキュリティについて',
    warning: '警告',
    ecbInsecure: 'ECBモードはデータパターンを適切に隠さないため、セキュリティアプリケーションには推奨されません。',
    useModern: '機密データには、GCMまたはCBCモードを備えたAES-256を使用してください。',
    keyWarning: '暗号化鍵を保護してください。紛失すると、データは復元できなくなります。',
    browserWarning: 'ブラウザベースの暗号化は便利ですが、高度に機密性の高いデータには適さない場合があります。',
    learnMore: '暗号化についてもっと学ぶ'
  },

  messages: {
    noAlgorithm: '暗号化アルゴリズムを選択してください',
    noKey: '暗号化鍵またはパスワードを入力してください',
    invalidKeyLength: '選択したアルゴリズムの鍵の長さが無効です',
    invalidIv: '選択したアルゴリズムとモードのIVの長さが無効です',
    noData: '暗号化/復号化するデータを入力してください',
    padError: 'パディングエラー - 鍵またはデータが正しくない可能性があります',
    fileSuccess: 'ファイル処理成功',
    fileError: 'ファイル処理エラー：{error}',
    clipboardError: 'クリップボードへのコピーエラー：{error}',
    invalidFormat: '無効な入力形式'
  }
}; 