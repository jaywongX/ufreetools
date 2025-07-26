export default {
  name: 'X.509 証明書デコーダー',
  description: '無料オンラインX.509証明書解析ツール。SSL/TLS証明書を解析・分析し、証明書の詳細を確認し、有効期限をチェックし、公開鍵を抽出し、レポートをエクスポートします。',

  instructions: {
    title: '証明書デコーダー',
    description: '証明書ファイルをアップロードするか、PEMエンコードされた証明書を貼り付けて詳細を確認してください。'
  },

  dropzone: {
    title: '証明書ファイルをここにドラッグ＆ドロップ',
    formats: '.crt、.cer、.pem、.der、.p12、.pfxファイルに対応'
  },

  buttons: {
    browse: 'ファイル参照',
    decode: '証明書を解析',
    loadSample: 'サンプルを読み込む',
    downloadPdf: 'PDFレポートをダウンロード',
    downloadTxt: 'テキストレポートをダウンロード',
    downloadHtml: 'HTMLレポートをダウンロード',
    downloadJson: 'JSONレポートをダウンロード',
    copyBasic: '基本情報をコピー',
    copySubject: 'サブジェクト/発行者をコピー',
    copyAll: 'すべての情報をコピー',
    copyValue: '値をコピー',
    downloadKey: '鍵をダウンロード',
    exportPem: 'PEMとしてエクスポート',
    downloadCert: '証明書をダウンロード',
  },

  input: {
    paste: 'または証明書データを貼り付け：',
    placeholder: 'PEMエンコードされた証明書を貼り付けてください（-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----）'
  },

  loading: '証明書を解析中...',

  error: {
    title: '証明書の解析中にエラーが発生しました',
    invalidFormat: '無効な証明書フォーマット',
    invalidBase64: '有効なbase64エンコード証明書ではありません',
    invalidStructure: '無効な証明書データ構造',
    invalidDer: '無効なDERフォーマット証明書',
    invalidAsn1: '無効な証明書：ASN.1データを解析できません',
    unsupportedType: 'サポートされていない証明書データタイプ',
    failedParse: '証明書データを解析できません',
    invalidP12: '無効なPKCS#12ファイル形式',
    invalidP12Password: '無効なPKCS#12パスワード',
    noCertificatesInP12: 'PKCS#12ファイル内に証明書が見つかりません',
    unableToProcessP12: 'PKCS#12ファイルを処理できません'
  },

  guide: {
    title: 'このツールの使用方法',
    step1: 'X.509証明書ファイル（.crt、.cer、.pem、.der、.p12、または.pfx）をアップロードするか、下のテキストボックスに証明書データを貼り付けてください。',
    step2: 'ツールは自動的にフォーマット（PEM、DER、またはPKCS#12）を検出し、デコードします。',
    step3: 'サブジェクト、発行者、有効期限、拡張機能、公開鍵データなど、詳細な証明書情報を確認します。',
    step4: '下部のボタンを使用して、さまざまな形式で証明書レポートをダウンロードしたり、情報をクリップボードにコピーしたりできます。'
  },

  tabs: {
    basic: '基本情報',
    subject: 'サブジェクトと発行者',
    extensions: '拡張機能',
    publicKey: '公開鍵',
    fingerprints: 'フィンガープリント',
    raw: '生の証明書'
  },

  results: {
    title: '証明書の詳細',
    serialNumber: 'シリアル番号',
    version: 'バージョン',
    sigAlg: '署名アルゴリズム',
    validFrom: '有効開始日',
    validTo: '有効期限',
    subject: 'サブジェクト',
    issuer: '発行者',
    extensions: '拡張機能',
    publicKey: '公開鍵',
    algorithm: 'アルゴリズム',
    keySize: '鍵サイズ',
    keyValue: '鍵の値',
    fingerprints: 'フィンガープリント',
    rawCertificate: '生の証明書',
    field: 'フィールド',
    value: '値',
    critical: '重要',
    noExtensions: 'この証明書に拡張情報は見つかりませんでした。',
    validity: '証明書の有効期間',
    expiresIn: '{days}日後に期限切れになります',
    visualization: '証明書の可視化',
    daysRemaining: '残り日数',
    valid: '有効',
    expired: '期限切れ',
    expiringSoon: 'まもなく期限切れ',
    fieldDescriptions: 'フィールドの説明',
    certificateUsage: '証明書の用途',
    certificateChain: '証明書チェーン',
    signatureValue: '署名値',
    notAvailable: '利用不可',
    noSpecificUsage: '特定の用途が指定されていません',
    signatureError: '署名値の解析中にエラーが発生しました',
    keyDetails: '鍵の詳細',
    enhancedView: '拡張ビュー',
    endEntity: 'エンドエンティティ',
    intermediate: '中間証明書',
    rootCA: 'ルートCA',
    endEntityCert: 'エンドエンティティ証明書',
    intermediateCert: '中間証明書',
    rootCert: 'ルート認証局',
    issuedBy: '発行者',
    unknownIssuer: '不明な発行者',
    notYetValid: 'まだ有効ではありません'
  },

  report: {
    title: 'X.509証明書レポート',
    generatedOn: '生成日時'
  },

  extensions: {
    subjectKeyIdentifier: 'サブジェクト鍵識別子',
    keyUsage: '鍵の使用法',
    subjectAltName: 'サブジェクト代替名',
    basicConstraints: '基本制約',
    crlDistributionPoints: 'CRL配布ポイント',
    certificatePolicies: '証明書ポリシー',
    authorityKeyIdentifier: '機関鍵識別子',
    extKeyUsage: '拡張鍵使用法',
    authorityInfoAccess: '機関情報アクセス',
    ctPrecertificateScts: 'CT事前証明書SCTs'
  },

  usage: {
    serverAuth: 'サーバー認証',
    clientAuth: 'クライアント認証',
    codeSigning: 'コード署名',
    emailProtection: 'メール保護',
    timeStamping: 'タイムスタンプ',
    ocspSigning: 'OCSP署名'
  },

  customOID: {
    title: 'カスタムOIDクエリ',
    placeholder: 'OIDを入力してください（例：2.5.29.15）',
    lookup: '検索',
    result: '結果',
    value: '値',
    notFound: 'このOIDに関する情報が見つかりません',
    foundButComplex: 'OIDが見つかりましたが、値が複雑です',
    unknownName: '不明な名前のOID',
    complexValue: '複雑な値、直接表示できません'
  },

  descriptions: {
    serialNumber: '証明書の一意のシリアル番号、認証局によって割り当てられます',
    version: '証明書フォーマットのバージョン番号、通常はV3です',
    sigAlg: '証明書の署名生成に使用されるアルゴリズム',
    validFrom: '証明書の有効期間の開始日時',
    validTo: '証明書の有効期間の終了日時',
    subject: '証明書所有者の識別情報',
    issuer: '証明書を発行した認証局の識別情報',
    publicKey: '証明書所有者の公開鍵情報',
    extensions: '証明書の使用に関する追加情報を含む拡張フィールド'
  },

  messages: {
    copiedToClipboard: 'クリップボードにコピーしました',
    copyError: 'クリップボードへのコピーに失敗しました'
  },

  pkcs12: {
    passwordPrompt: 'PKCS#12ファイルのパスワードを入力してください',
    noPassword: 'パスワードなし'
  },

  keyUsages: {
    digitalSignature: 'デジタル署名',
    nonRepudiation: '否認防止',
    keyEncipherment: '鍵暗号化',
    dataEncipherment: 'データ暗号化',
    keyAgreement: '鍵合意',
    keyCertSign: '証明書署名',
    crlSign: 'CRL署名',
    encipherOnly: '暗号化のみ',
    decipherOnly: '復号化のみ'
  }
}; 