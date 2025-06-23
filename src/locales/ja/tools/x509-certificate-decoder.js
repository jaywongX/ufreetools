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
  },
  article: {
    title: 'X.509証明書デコーダー：SSL/TLS証明書の分析と検証',
    introduction: {
      title: 'X.509証明書デコーダーとは？',
      p1: '<strong>X.509証明書デコーダー</strong>は、セキュリティ専門家、Web開発者、IT管理者がSSL/TLSプロトコルで使用されるデジタル証明書を分析するのに役立つ強力なツールです。当社の無料オンラインX.509証明書解析ツールは、ソフトウェアをインストールすることなく、証明書コンポーネント、有効性ステータス、セキュリティ特性の包括的な分析を提供します。',
      p2: 'デジタル証明書は、ブラウザとサーバー間の信頼できる接続を確立するために、安全なウェブ通信に不可欠です。しかし、証明書の問題を解決するには、複雑な構造とエンコードされたデータを理解する必要があります。X.509証明書デコーダーは、生の証明書データを人間が読める情報に解析することでこのプロセスを簡素化し、問題を迅速に特定し、証明書の信頼性を検証できるようにします。'
    },
    useCases: {
      title: '証明書解析の一般的なユースケース',
      case1: '<strong>SSL/TLS証明書検証</strong>：展開前にウェブサイト証明書の信頼性と整合性を検証します。',
      case2: '<strong>証明書有効期限監視</strong>：有効期間と期限切れ日をチェックして、予期しないサービス中断を防止します。',
      case3: '<strong>証明書パス検証</strong>：証明書間の適切な信頼関係を確保するために証明書チェーンを確認します。',
      case4: '<strong>証明書構成のトラブルシューティング</strong>：ブラウザ警告や接続問題を引き起こす証明書の設定ミスを特定します。',
      case5: '<strong>デジタル署名検証</strong>：セキュリティ評価のために証明書署名アルゴリズムと公開鍵パラメータを確認します。'
    },
    faq: {
      title: 'X.509証明書に関するよくある質問',
      q1: 'X.509証明書からどのような情報を抽出できますか？',
      a1: '当社の<strong>X.509証明書デコーダー</strong>を使用すると、発行者の詳細、サブジェクト情報、有効期間、公開鍵パラメータ、拡張機能（サブジェクト代替名など）、デジタル署名アルゴリズム、証明書フィンガープリントなど、包括的な情報を抽出できます。このツールはまた、証明書の健全性と有効期限ステータスの視覚的な指標を提供し、更新が必要な証明書を簡単に特定できるようにします。',
      q2: '証明書がブラウザによって信頼されているかどうかをどのように知ることができますか？',
      a2: '証明書が認められた認証局（CA）によって発行され、有効な信頼チェーンを形成している場合、ブラウザは通常その証明書を信頼します。当社の解析ツールは、証明書チェーンを視覚化し、各証明書の有効性を検証するのに役立ちます。重要な指標には、証明書発行者（信頼されたCAであるべき）、有効期限（期限切れでない）、正しい基本制約（中間証明書の場合）、適切な鍵使用法拡張などが含まれます。ブラウザの信頼は、証明書が失効していないことにも依存しており、これは証明書のOCSPまたはCRL情報を通じて確認できます。',
      q3: 'PEMとDER証明書フォーマットの違いは何ですか？',
      a3: 'PEM（Privacy Enhanced Mail）とDER（Distinguished Encoding Rules）はX.509証明書の2つの一般的なフォーマットです。<strong>PEMフォーマット</strong>はBase64エンコードされ、"-----BEGIN CERTIFICATE-----"で始まり、人間が読めるテキストです。これはウェブサーバーやメールで一般的に使用されます。<strong>DERフォーマット</strong>はバイナリエンコードされ、人間が読めませんが、よりコンパクトです。当社の証明書解析ツールは、手動で選択する必要なく、自動的に両方のフォーマットをサポートし、適切なフォーマットを検出して解析します。',
      q4: '証明書が特定のTLS機能をサポートしているかどうかをどのように確認できますか？',
      a4: '証明書のTLS機能サポートを確認するには、当社の証明書デコーダーを使用して<strong>拡張鍵使用法</strong>と<strong>鍵使用法</strong>拡張をチェックします。サーバー認証（ウェブサーバー）の場合、拡張鍵使用法で「サーバー認証」（1.3.6.1.5.5.7.3.1）値を探します。鍵使用法拡張は、デジタル署名や鍵暗号化など、許可された操作を示します。また、署名アルゴリズムをチェックして、SHA-1やMD5などの時代遅れのアルゴリズムではなく、SHA-256とRSAやECDSAなどの現代的で安全なアルゴリズムが使用されていることを確認します。',
      q5: '証明書の有効期限が近づいている場合、どうすればよいですか？',
      a5: '当社の<strong>証明書デコーダー</strong>が証明書の有効期限が近づいている（通常30日以内）ことを示している場合、証明書プロバイダーまたは認証局を通じて直ちに更新する必要があります。更新プロセスには通常、1）新しい証明書署名要求（CSR）の生成、2）それをCAに提出、3）検証要件の完了、4）サーバーへの新しい証明書のインストールが含まれます。サービスの中断やユーザーセキュリティ警告を避けるため、有効期限の少なくとも2〜4週間前にこのプロセスを開始することをお勧めします。'
    },
    tutorial: {
      title: 'X.509証明書デコーダーの使用方法',
      step1: {
        title: '証明書のアップロードまたは貼り付け',
        content: 'まず、ファイルアップローダーを使用して証明書ファイル（.crt、.cer、.pem、または.der）をアップロードするか、入力ボックスに直接PEMエンコードされた証明書テキストを貼り付けます。当社のツールはドラッグ＆ドロップ機能をサポートしており、ファイルのアップロードが容易です。分析する証明書がない場合は、「サンプルを読み込む」ボタンをクリックして、ツールがデモ証明書をどのように処理するかを確認できます。'
      },
      step2: {
        title: '証明書の解析',
        content: '証明書を読み込んだら、「証明書を解析」ボタンをクリックします。当社のツールは自動的にフォーマット（PEMまたはDER）を検出し、証明書データを解析します。処理はすべてブラウザ内で行われ、証明書データがデバイスを離れることはありません—これにより、機密証明書を分析するための安全な選択となります。'
      },
      step3: {
        title: '証明書詳細の分析',
        content: '解析後、ツールは包括的な証明書情報をナビゲーションしやすいタブ形式で表示します。「基本情報」タブには、有効期間、シリアル番号、署名アルゴリズムなどの主要な詳細が表示されます。視覚的な指標は、証明書が有効か、期限が近いか、または期限切れかを明確に示します。サブジェクトと発行者、拡張機能、公開鍵などのより詳細な情報は、専用のタブで探索できます。'
      },
      step4: {
        title: 'レポートのエクスポートとダウンロード',
        content: '証明書分析を保存または共有するには、結果セクションの下部にあるエクスポート機能を使用します。包括的なレポートを複数の形式（PDF、TXT、HTML、またはJSON）でダウンロードしたり、特定のセクションをクリップボードにコピーしたりできます。これらのレポートは、ドキュメント化、コンプライアンス目的、またはトラブルシューティング中にチームメンバーと共有するのに非常に価値があります。'
      }
    },
    resources: {
      title: '追加リソース',
      intro: 'これらの貴重なリソースを通じて、X.509証明書と関連するセキュリティトピックに関する知識を拡大してください：',
      relatedTools: '関連セキュリティツール',
      tool1: 'ハッシュジェネレーター - データ検証用の暗号化ハッシュを作成',
      tool2: 'Base64エンコーダー/デコーダー - バイナリとBase64形式間の変換',
      tool3: 'JWTデコーダー - 認証に使用されるJSON Webトークンを分析',
      externalLinks: '外部参照',
      external1: 'IETF RFC 5280 - インターネットX.509公開鍵インフラストラクチャ証明書',
      external2: 'Wikipedia - X.509証明書標準の概要',
      external3: 'SSL.com - X.509証明書とは？'
    },
    conclusion: {
      title: '結論',
      content: '<strong>X.509証明書デコーダー</strong>は、デジタル証明書と安全な通信を使用するすべての人にとって不可欠なツールです。証明書の構造と有効性に関する明確で詳細な情報を提供することで、当社のツールはSSL/TLS実装が安全で正確であることを確認するのに役立ちます。監査を行うセキュリティ専門家、HTTPS問題のトラブルシューティングを行うWeb開発者、または証明書展開を管理するIT管理者であるかにかかわらず、このデコーダーは証明書分析を簡素化し、セキュリティプラクティスを強化します。'
    }
  },
} 