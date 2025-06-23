export default {
    name: "ASN.1構造解析ツール",
    description: "暗号化、通信、ネットワークプロトコルで使用されるASN.1エンコードデータ構造をデコード、視覚化、分析するための包括的なツール。PEM、HEX、Base64、DER形式をサポートし、インタラクティブなツリー表示と様々なエクスポートオプションを提供します。",
    input: "入力データ",
    output: "解析構造",
    inputFormat: "入力形式",
    inputPlaceholder: "選択した形式のASN.1データを入力してください...",
    loadExample: "サンプルを読み込む",
    clickToUpload: "クリックしてファイルをアップロード",
    orDragDrop: "またはファイルをドラッグ＆ドロップ",
    supportedFormats: "PEM、DER、HEX、Base64ファイルをサポート",
    showHexDump: "16進数ダンプを表示",
    trimLargeData: "大きなデータ値を切り詰める",
    useDefinitionFile: "ASN.1定義ファイルを使用して解析",
    error: "エラー",
    noData: "表示するASN.1データがありません。入力エリアにデータを入力するか、ファイルをアップロードしてください。",
    treeStructure: "ASN.1ツリー構造",
    hexDump: "16進数ダンプ",
    parseError: "ASN.1データの解析に失敗しました。入力形式とデータを確認してください。",
    invalidPEM: "無効なPEM形式です。正しいBEGIN/ENDマーカーがあることを確認してください。",
    invalidHex: "無効な16進数データです。16進数文字(0-9, A-F)のみ許可されています。",
    invalidBase64: "無効なBase64データです。",
    derTextNotSupported: "DER形式はテキスト入力として使用できません。DERファイルをアップロードしてください。",
    unsupportedFormat: "サポートされていない入力形式が選択されました。",
    unexpectedEOF: "ASN.1構造の解析中に予期せずデータが終了しました。",
    lengthTooLong: "ASN.1長さフィールドが大きすぎて処理できません。",
    fileReadError: "アップロードされたファイルの読み込み中にエラーが発生しました。",
    fileTooLarge: "ファイルが大きすぎます。最大サイズは10MBです。",

    // Feature descriptions
    featureHeading: "主な機能",
    feature1: "複数形式サポート：PEM、HEX、Base64またはDER形式のASN.1データを解析",
    feature2: "インタラクティブツリービュー：展開可能なノードでASN.1構造を視覚化",
    feature3: "16進数ダンプ視覚化：生データバイトを表示し、ノードにカーソルを合わせると強調表示",
    feature4: "OID解析：一般的なオブジェクト識別子にその名前を表示",
    feature5: "大きなデータ処理：読みやすさを向上させるために大きな値を切り詰めるオプション",

    // Common ASN.1 applications
    applicationsHeading: "一般的な用途",
    application1: "X.509証明書：SSL/TLS証明書構造の表示と分析",
    application2: "PKCSファイル：秘密鍵、証明書リクエスト、証明書ストレージ形式の検査",
    application3: "CMS/PKCS#7：署名および暗号化されたデータ構造の検査",
    application4: "SNMP MIB：簡易ネットワーク管理プロトコルデータのデコード",

    // Instructions
    instructionsHeading: "使用方法",
    step1: "入力データの形式を選択（PEM、HEX、Base64、DER）",
    step2: "テキストエリアにデータを入力するか、ファイルをアップロード",
    step3: "パーサーが自動的にデータを処理して構造を表示",
    step4: "ノードの展開/折りたたみでASN.1ツリーを探索",
    step5: "ノードにマウスを合わせると16進数ダンプ内の対応するバイトが強調表示",

    // Export
    exportAsJson: "JSONとしてエクスポート",
    exportFormat: "エクスポート形式",
    exportSuccess: "構造のエクスポートに成功しました",
    exportFailed: "構造のエクスポートに失敗しました",
    noDataToExport: "エクスポートするデータがありません",
    copiedToClipboard: "クリップボードにコピーしました",
    copyFailed: "コピーに失敗しました",
    hexSeparator: "16進数セパレータ",
    none: "なし",
    space: "スペース",
    colon: "コロン",
    dash: "ダッシュ",
    dot: "ドット",
    colorHighlight: "タイプ別に色付け",
    settings: "設定",
    displayOptions: "表示オプション",
    advancedOptions: "詳細オプション",
    expandAllNodes: "すべてのノードを展開",
    hexDumpDisabled: "16進数ダンプ表示は無効になっています。生データバイトを表示するには設定で有効にしてください。",
    copyValue: "値をコピー",
    expandAll: "展開",
    collapseAll: "折りたたむ",
    autoScroll: "自動スクロール",
    article: {
        title: "ASN.1構造解析ツール - ASN.1エンコードデータのデコードと視覚化",

        // Introduction section
        introTitle: "ASN.1構造解析ツールとは？",
        introPara1: "ASN.1構造解析ツールは、抽象構文記法1（Abstract Syntax Notation One、ASN.1）でエンコードされたデータ構造をデコードして視覚化するための強力なツールです。ASN.1は、プラットフォーム間でシリアル化および逆シリアル化できるデータ構造を定義するための標準インターフェース記述言語です。これは通信やコンピュータネットワークで広く使用されており、特に暗号化プロトコルで使用されています。",
        introPara2: "私たちのASN.1構造解析ツールは、複雑なASN.1構造を検査するためのインタラクティブな方法を提供し、PEM、HEX、Base64、DERを含む複数の入力形式をサポートしています。ツリーベースの視覚化を提供し、ネストされたASN.1要素を簡単に探索できるようにするため、開発者、セキュリティ研究者、ネットワークエンジニアにとって非常に価値があります。",

        applicationTitle: "ASN.1パーサーの一般的な用途",
        application1: "<strong>X.509証明書分析</strong>：セキュリティ監査やトラブルシューティングのためのSSL/TLS証明書構造とコンテンツの検査。",
        application2: "<strong>PKCSファイル検査</strong>：秘密鍵、証明書リクエスト、証明書ストレージ形式の詳細分析。",
        application3: "<strong>暗号メッセージ構文（CMS）</strong>：セキュアメッセージングプロトコルで使用される署名および暗号化されたデータ構造の検査。",
        application4: "<strong>ネットワークプロトコル分析</strong>：SNMP、LDAP、H.323などのプロトコルで使用されるASN.1データのデコード。",
        introPara3: "ASN.1構造解析は、現代のセキュリティシステムで使用される複雑なデータ形式を理解するために不可欠です。私たちのパーサーは、カラーコード化された視覚化、展開可能なツリービュー、エンコードされたデータの16進数ダンプを提供することで、このプロセスを直感的にします。",

        // FAQ section
        faqTitle: "ASN.1構造解析ツールに関するよくある質問",

        faq1Question: "ASN.1構造解析ツールはどのような形式を受け入れますか？",
        faq1Answer: "私たちのASN.1構造解析ツールは、PEM（Privacy Enhanced Mail）、HEX（16進数）、Base64、DER（Distinguished Encoding Rules）バイナリファイルを含む複数の入力形式をサポートしています。この柔軟性により、フォーマット変換ツールを使用せずに、様々なソースからのASN.1データを処理できます。",

        faq2Question: "ASN.1パーサーを使用してX.509証明書を分析するにはどうすればよいですか？",
        faq2Answer: "X.509証明書を分析するには、入力形式として「PEM」を選択し、証明書（BEGIN/END CERTIFICATE マーカーを含む）を入力エリアに貼り付けるだけです。パーサーは自動的に構造をデコードし、インタラクティブなツリーとして表示します。これにより、ノードを展開して、サブジェクト、発行者、有効期間、拡張機能などの特定の証明書フィールドを検査できます。",

        faq3Question: "解析されたASN.1構造をドキュメント用にエクスポートできますか？",
        faq3Answer: "はい、設定パネルの「JSONとしてエクスポート」ボタンをクリックすることで、解析されたASN.1構造をJSONとしてエクスポートできます。この機能は、構造の文書化、同僚との共有、または独自のアプリケーションでの構造化データのさらなる処理に役立ちます。",

        faq4Question: "ASN.1、DER、BERエンコーディングの違いは何ですか？",
        faq4Answer: "ASN.1（抽象構文記法1）はデータ構造を定義するための言語であり、DER（識別符号化規則）とBER（基本符号化規則）はASN.1構造をバイナリ形式に変換する方法を決定する特定の符号化規則です。DERはBERのサブセットであり、各ASN.1値に対して1つの符号化のみを確保するため、暗号化アプリケーションでより好まれます。私たちのパーサーは主に、セキュリティアプリケーションで最も一般的なDERエンコードされたASN.1構造を処理します。",

        faq5Question: "ASN.1パーサーはオブジェクト識別子（OID）をどのように処理しますか？",
        faq5Answer: "ASN.1構造解析ツールは、一般的なオブジェクト識別子（OID）を自動的に認識し、数値OID値の横にその分かりやすい名前を表示します。例えば、「1.2.840.113549.1.1.11」は「sha256WithRSAEncryption」として表示されます。この機能により、X.509証明書や暗号化メッセージなどの複雑な構造内のさまざまな要素の目的を理解しやすくなります。",

        // Tutorial section
        tutorialTitle: "ASN.1構造解析ツールの使用方法",

        step1Title: "ステップ1：入力形式の選択",
        step1Content: "まず、ASN.1データに適切な入力形式を選択します。入力パネルのラジオボタンを使用して、PEM、HEX、Base64、DERオプションから選択します。選択した形式によって、パーサーが入力データをどのように解釈するかが決まります。",

        step2Title: "ステップ2：ASN.1データの入力またはアップロード",
        step2Content: "ASN.1エンコードデータをテキストエリアに入力するか、アップロードエリアをクリックしてファイルをアップロードします。PEM形式の場合、データに正しいBEGIN/ENDマーカーが含まれていることを確認してください。16進数入力の場合、設定パネルで構成できる様々なセパレータ（スペース、コロンなど）を使用できます。",
        step2Example: "-----BEGIN CERTIFICATE-----\nMIIDazCCAlOgAwIBAgIUXF3AmOAMqvdXdFLJV8C5c9K6cI8wDQYJKoZIhvcNAQEL\n...\n-----END CERTIFICATE-----",

        step3Title: "ステップ3：ASN.1ツリー構造の探索",
        step3Content: "データが解析されると、ASN.1ツリー構造が左下のパネルに表示されます。三角形をクリックしてノードを展開および折りたたむことができます。各ノードには、ラベルタイプ（SEQUENCE、INTEGER、OBJECT IDENTIFIERなど）と値が表示されます。カラーコード化により、異なるASN.1タイプを区別するのに役立ちます。",

        step4Title: "ステップ4：16進数表現の検査",
        step4Content: "「16進数ダンプを表示」オプションが有効になっている場合、右側のパネルにASN.1データの16進数ダンプが表示されます。ツリー内の要素にマウスを合わせると、16進数ダンプ内の対応するバイトが強調表示され、エンコードされたバイナリ構造を理解するのに役立ちます。",
        step4Example: "00000000 30 82 03 6a 30 82 02 52 a0 03 02 01 02 02 14 5c 0..j0..R........\\",

        step5Title: "ステップ5：表示オプションの設定",
        step5Content: "設定パネルを使用して、ニーズに合わせて表示をカスタマイズします。オプションには、16進数ダンプの表示/非表示、読みやすさを向上させるための大きなデータ値の切り詰め、16進数セパレータの選択、タイプ別のカラーハイライトの有効化などがあります。また、構造の完全なビューを得るために、すべてのノードを一度に展開することもできます。",

        // Resources section
        resourcesTitle: "その他のリソース",

        relatedToolsTitle: "関連ツール",
        relatedTool1: "Base64コンバーター - Base64データのエンコードとデコード",
        relatedTool2: "Base64 Hex コンバーター - Base64と16進数形式間の簡単な変換、カスタムセパレータと大文字小文字のサポート",
        relatedTool3: "証明書デコーダー - X.509証明書の詳細分析",

        externalResourcesTitle: "外部リソース",
        externalResource1: "ITU-T ASN.1入門 - ASN.1標準の公式ドキュメント",
        externalResource2: "RFC 5280 - インターネットX.509公開鍵インフラストラクチャ証明書とCRLプロファイル"
    },
};