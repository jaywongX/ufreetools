export default {
    name: 'XML/JSON コンバーター',
    title: 'XML ↔ JSON 変換',
    description: 'XMLとJSON形式間で双方向変換、高度なオプションとカスタム設定に対応',
    
    conversion: {
      direction: '変換方向',
      xmlToJson: 'XML → JSON',
      jsonToXml: 'JSON → XML'
    },
    
    options: {
      title: '変換オプション',
      show: 'オプションを表示',
      hide: 'オプションを非表示',
      
      xmlToJson: {
        ignoreAttributes: '属性を無視',
        ignoreAttributesHint: '無効にするとJSONにXML属性情報を保持',
        parseAttributeValue: '属性値を解析',
        parseAttributeValueHint: '属性内の数値、真偽値などを文字列ではなく実際の型に変換',
        ignoreDeclaration: 'XML宣言を無視',
        ignoreDeclarationHint: '<?xml version="1.0"?>などの宣言情報を無視',
        parseTagValue: 'タグ値を解析',
        parseTagValueHint: 'タグ内容内の数値、真偽値などを文字列ではなく実際の型に変換',
        trimValues: '値の前後空白を削除',
        attributePrefix: '属性プレフィックス',
        attributePrefixPlaceholder: '例: @, _, attr_',
        attributePrefixHint: 'JSONでXML属性を表すプレフィックス（デフォルトは@）'
      },
      
      jsonToXml: {
        format: 'XMLをフォーマット',
        formatHint: 'インデントと改行を追加してXMLを読みやすく',
        indentBy: 'インデントを追加（2スペース）',
        addDeclaration: 'XML宣言を追加',
        addDeclarationHint: 'XMLの先頭に <?xml version="1.0" encoding="UTF-8"?> を追加',
        rootName: 'ルート要素名（オプション）',
        rootNamePlaceholder: '例: root, data, xml',
        rootNameHint: 'JSONトップレベルに複数キーがある場合のルート要素名',
        attributePrefix: '属性プレフィックス識別',
        attributePrefixPlaceholder: '例: @, _, attr_',
        attributePrefixHint: 'JSON内のXML属性を識別するプレフィックス（デフォルトは@）'
      }
    },
    
    buttons: {
      convert: '変換',
      swap: '内容を入れ替え',
      clear: 'クリア',
      loadExample: 'サンプルを読み込み'
    },
    
    input: {
      xmlInput: 'XML 入力',
      jsonInput: 'JSON 入力',
      placeholder: {
        xml: 'XMLを入力...',
        json: 'JSONを入力...'
      }
    },
    
    output: {
      xmlResult: 'XML 結果',
      jsonResult: 'JSON 結果',
      copy: 'コピー'
    },
    
    stats: {
      title: '変換統計',
      inputSize: '入力サイズ',
      outputSize: '出力サイズ',
      sizeChange: 'サイズ変化',
      conversionTime: '変換時間'
    },
    
    help: {
      title: 'ヘルプ',
      show: 'ヘルプを表示',
      hide: 'ヘルプを非表示',
      about: {
        title: 'XMLとJSON形式について',
        content: 'XML (eXtensible Markup Language) は拡張可能なマークアップ言語で、設定ファイル、データ交換、Webサービスで広く使用されています。JSON (JavaScript Object Notation) は軽量なデータ交換フォーマットで、人間が読み書きしやすく、機械でも解析・生成が容易です。'
      },
      xmlToJson: {
        title: 'XML→JSON変換の注意点',
        items: [
          'XML属性はデフォルトで@で始まるJSONキーに変換されます',
          'XMLテキスト内容はデフォルトで#textキーになります',
          '"タグ値を解析"を有効にすると数値、真偽値などが実際のJSON型に変換されます',
          'XMLに同名タグが複数ある場合、JSONでは自動的に配列になります'
        ]
      },
      jsonToXml: {
        title: 'JSON→XML変換の注意点',
        items: [
          'JSONで@で始まるキーはデフォルトでXML属性として扱われます',
          'JSON配列はXMLで同名タグの複数要素として生成されます',
          '複雑なネストされたJSONオブジェクトは階層化されたXML構造になります',
          'JSONトップレベルに複数キーがありルート要素名が指定されていない場合、複数のXMLルート要素が生成されます'
        ]
      }
    },
    
    errors: {
      xmlParse: 'XML 解析エラー: {0}',
      jsonParse: 'JSON 解析エラー: {0}',
      xmlGeneration: 'XML 生成エラー: {0}',
      emptyObject: 'JSON オブジェクトが空または無効です',
      conversion: '変換エラー: {0}'
    },
    
    alerts: {
      copied: 'クリップボードにコピーしました'
    },
    
    article: {
      title: "XML/JSONコンバーター: データ構造をシームレスに変換",
      features: {
        title: "XMLとJSONデータ変換の理解",
        description: "<strong>XML/JSONコンバーター</strong>は、Web開発とシステム統合で最も広く使用されている2つの<strong>データ交換フォーマット</strong>間の変換を促進する強力なツールです。この双方向<strong>フォーマットコンバーター</strong>では、データ構造の整合性を保ちながら、<strong>XMLからJSON</strong>、<strong>JSONからXML</strong>への変換が可能です。<br><br>当社の<strong>XML/JSONパーサー</strong>は、属性、宣言、ネストされたデータ構造を処理するための幅広いカスタマイズオプションを提供します。<strong>XMLからJSONへの変換</strong>では、属性プレフィックスの設定、タグ値の解析方法の制御、空白処理の決定が可能です。<strong>JSONからXMLへの変換</strong>では、フォーマット設定、XML宣言の追加、整形式出力のためのルート要素名の定義が可能です。この<strong>データフォーマットコンバーター</strong>は、複雑な階層データを両フォーマット間で正確に表現します。",
        useCases: {
          title: "XML-JSON変換の一般的な使用例",
          items: [
            "API開発者がXMLベースのSOAP WebサービスとJSONベースのREST API間で変換し、異なる統合ポイント間の互換性を確保",
            "フロントエンド開発者がXML設定ファイルをJSONに変換し、JavaScriptアプリケーションやモダンフレームワークで簡単に使用",
            "バックエンドエンジニアがXMLを使用するレガシーシステムを扱いながら、JSONフォーマットを必要とする新しいサービスを実装",
            "データ統合専門家がETL（抽出、変換、ロード）プロセスで異なるシステムフォーマットをマッピング",
            "WebスクレイピングアプリケーションがRSSフィードなどのXMLデータを抽出し、保存や分析のためにJSONに変換",
            "モバイルアプリ開発者が企業システムからXMLデータを使用し、より効率的なクライアント処理のためにJSONに変換"
          ]
        }
      },
      faq: {
        title: "XML-JSON変換に関するよくある質問",
        items: [
          {
            question: "コンバーターは複雑なネスト構造を処理できますか？",
            answer: "はい、当社のXML/JSONパーサーは双方向の複雑なネスト構造を完全にサポートしています。コンバーターは階層関係を正確に維持し、配列、オブジェクト、混合コンテンツを処理します。XMLからJSONへの変換では、ネストされた要素がネストされたオブジェクトになり、重複要素は自動的に配列に変換されます。JSONからXMLへの変換では、ネストされたオブジェクトは子要素として保持され、配列は同じタグ名の重複要素として表現されます。この構造保存は、どちらのフォーマットでも複雑なデータモデルや設定ファイルを処理するために不可欠です。"
          },
          {
            question: "特殊文字とエンコーディングはどのように処理されますか？",
            answer: "XML/JSONコンバーターは双方向の特殊文字とエンコーディング問題を自動的に管理します。XML処理時には、XMLエンティティ（例: &amp;は&、&lt;は<）を正しくデコードし、CDATAセクションを処理してフォーマットを保持します。JSONからXMLへの変換時には、ツールは特殊文字を適切なXMLエンティティにエンコードして有効なXML出力を保証します。コンバーターはプロセス全体でUTF-8互換性を維持し、両フォーマットの国際文字、記号、絵文字を正しく処理するため、多言語コンテンツやグローバルアプリケーションに適しています。"
          },
          {
            question: "XMLコメントはJSON変換時にどうなりますか？",
            answer: "JSON自体がコメントをサポートしていないため、XMLコメントは通常XMLからJSONへの変換時に削除されます。ただし、この情報を保持する必要がある場合、当社のXML/JSONコンバーターはオプション設定を提供し、コメントを特別なJSON属性（例: \"__comment\"フィールド）として保持します。これにより、重要なドキュメントや処理命令を含むコメントを保持する必要があるシナリオでも、フォーマット間変換時に柔軟性を提供します。コンバーターインターフェースの詳細オプションパネルでこの動作をカスタマイズできます。"
          },
          {
            question: "XML名前空間は変換プロセスでどのように処理されますか？",
            answer: "XML/JSONコンバーターは、変換プロセスでXML名前空間を処理するオプションを提供します。デフォルトでは、JSONへの変換時に名前空間とそのプレフィックスが要素名に含まれます。例えば、'<ns:element xmlns:ns=\"namespace\">value</ns:element>'は名前空間プレフィックスを保持したJSONに変換されます。コンバーターオプションでこの動作をカスタマイズでき、名前空間を完全に無視する、特定のフォーマットで保持する、または生成されたJSON構造内で別々の属性として保持するかを選択できます。これにより、特定の統合ニーズに合わせて調整可能です。"
          }
        ]
      },
      guide: {
        title: "XML-JSONコンバーター使用ガイド",
        steps: [
          "ツール上部のラジオボタンで必要な変換方向を選択：'XML→JSON'でXMLマークアップをJSONフォーマットに、'JSON→XML'で逆方向に変換",
          "'オプションを表示'をクリックして詳細設定にアクセスし、変換プロセスをカスタマイズ：XML→JSONでは属性処理と解析オプションを、JSON→XMLではフォーマット設定とXML宣言オプションを設定",
          "コンバーター左側の入力フィールドにソースデータを入力するか、'サンプルを読み込み'ボタンでツールが定義済みデータをどのように処理するか確認",
          "'変換'ボタンをクリックしてデータを処理 - コンバーターは入力を変換し、右側の出力フィールドに結果を表示",
          "変換出力を確認し、必要に応じて変換設定を調整して特定のニーズに合わせて結果を微調整",
          "出力フィールド横の'コピー'ボタンをクリックして変換結果をクリップボードにコピーし、アプリケーションやドキュメントで使用",
          "'内容を入れ替え'ボタンを使用して現在の出力を入力に設定し、逆方向に変換することも可能"
        ]
      },
      conclusion: "XML/JSONコンバーターは、現代のコンピューティングにおけるこれら2つの基本的なフォーマット間のデータ変換に対する強力なソリューションを提供します。異なるシステムを統合したり、レガシーアプリケーションを近代化したり、クライアント処理のためにデータを最適化したりする場合、このツールは手動変換の複雑さと潜在的なエラーを回避するのに役立ちます。属性処理、フォーマット設定、構造要素に関する包括的なオプションにより、フォーマット境界を越えてもデータの整合性と意味を維持できます。XMLとJSON間の変換を簡素化することで、このコンバーターは異なる技術と標準間のギャップを埋め、より柔軟で相互運用可能なソフトウェアシステムを実現します。"
    }
  }