export default {
  name: 'JWT調査ツール',
  description: 'JWTトークンを解析、検証、デバッグするためのオンラインツール',

  sections: {
    encoded: 'エンコードされたJWT',
    decoded: 'デコードされたJWT',
    header: 'ヘッダー',
    payload: 'ペイロード',
    signature: '署名',
    verification: '検証'
  },

  actions: {
    decode: 'デコード',
    verify: '署名を検証',
    copy: 'コピー',
    share: 'トークンを共有',
    generateToken: 'トークン生成',
    generateRandomToken: 'ランダムトークン',
    clear: 'クリア',
    generateRandomPayload: 'ランダムペイロード生成',
    generateRandomKey: 'ランダム鍵生成',
    generateKeyPair: '鍵ペア生成'
  },

  messages: {
    invalidToken: '無効なJWT形式',
    copied: 'クリップボードにコピーしました！',
    copyFailed: 'コピーに失敗しました。手動でコピーしてください',
    verificationSuccess: '署名検証成功',
    verificationFailed: '署名検証失敗',
    keyGenerated: '鍵ペア生成成功',
    keyGenerationFailed: '鍵ペア生成失敗',
    tokenGenerated: 'トークン生成成功',
    tokenGenerationFailed: 'トークン生成失敗',
    randomTokenGenerated: 'ランダムトークン生成および解析成功',
    certUploadSuccess: '証明書アップロード成功',
    certFormatInvalid: '証明書形式が無効',
    certReadFailed: '証明書読み取り失敗',
    tokenFormatError: '無効なトークン形式、JWTは3つの部分がドットで区切られている必要があります',
    tokenHeaderMissingAlg: 'トークンヘッダーにアルゴリズム(alg)フィールドがありません',
    tokenHeaderInvalid: 'トークンヘッダー形式が無効',
    tokenVerificationFailed: 'トークン形式検証失敗',
    tokenExpired: 'トークンの有効期限が切れています。有効期限：{time}',
    tokenNotEffective: 'トークンはまだ有効ではありません。有効開始時間：{time}',
    tokenIssuedInFuture: 'トークン発行時間が異常です。発行時間が未来になっています。発行時間：{time}',
    algorithmNotSupported: '対応していないアルゴリズム',
    randomSecretGenerated: 'ランダム鍵生成成功',
    randomSecretGenerationFailed: 'ランダム鍵生成失敗',
    randomPayloadGenerated: 'ランダムペイロードを生成しました',
    randomPayloadGenerationFailed: 'ランダムペイロード生成失敗',
    contentCleared: 'すべての内容をクリアしました',
    tokenDecodeSuccess: 'トークン解析成功',
    tokenDecodeFailed: 'トークン解析失敗',
    pleaseInputKey: '鍵を入力してください',
    pleaseGenerateKeyPair: '{type}鍵ペアを先に生成してください',
    pleaseInputVerificationKey: '検証鍵を入力してください',
    pleaseInputPublicKey: '検証公開鍵を入力してください',
    pleaseInputToken: '検証するトークンを入力してください',
    payloadFormatError: 'ペイロード形式エラー、JSON形式を確認してください',
    invalidTimestamp: '無効なタイムスタンプ'
  },

  placeholders: {
    secretKey: '鍵を入力してください',
    privateKey: '秘密鍵を入力または生成してください',
    publicKey: '公開鍵を入力または生成してください',
    payload: 'JSON形式のペイロードを入力してください',
    token: 'JWTトークンを入力または生成してください',
    verificationSecretKey: '検証鍵を入力してください',
    verificationPublicKey: '検証公開鍵を入力してください'
  },

  labels: {
    algorithm: 'アルゴリズム',
    secretKey: '鍵',
    privateKey: '秘密鍵',
    publicKey: '公開鍵',
    certificate: 'デジタル証明書（オプション）',
    payload: 'ペイロード',
    token: 'トークン',
    verificationPublicKey: '検証公開鍵',
    tokenResult: 'トークン解析結果',
    verifyToken: 'トークン検証',
    tokenDecoded: 'トークンは{alg}アルゴリズムで署名されています',
    timestamp: 'タイムスタンプ解析',
    issuedAt: '発行時間（iat）',
    expiration: '有効期限（exp）',
    notBefore: '有効開始時間（nbf）',
    tokenFormat: '内容なしの提示',
    tokenFormatDesc: 'JWTトークンを入力または生成すると、ここに解析結果が表示されます',
    uploadCert: '証明書ファイルをドラッグ＆ドロップまたはクリックして選択',
    certName: '証明書名',
    sm3Fingerprint: 'SM3フィンガープリント（x5t#sm3）',
    certUploadNote: '証明書をアップロードすると、JWTヘッダーに「x5t#sm3」フィールドが追加されます',
    secondsTimestamp: '秒単位タイムスタンプ',
    millisecondsTimestamp: 'ミリ秒単位タイムスタンプ'
  },

  buttons: {
    cancel: 'キャンセル',
    verify: '検証',
    clearCert: 'クリア',
    generateToken: 'トークン生成',
    decodeToken: 'トークン解析',
    verifyToken: 'トークン検証',
    close: '閉じる'
  },

  verification: {
    success: '検証成功',
    failure: '検証失敗',
    validMessage: 'トークン署名検証に成功しました。署名は有効です。',
    invalidMessage: 'トークン署名検証に失敗しました。署名は無効です。'
  },

  errors: {
    noToken: '検証するトークンを入力してください',
    invalidToken: '無効なトークン形式',
    noSecretKey: '検証鍵を提供してください',
    noPublicKey: '検証公開鍵を提供してください',
    invalidSignature: '無効な署名',
    verificationFailed: 'トークン検証失敗'
  }
};