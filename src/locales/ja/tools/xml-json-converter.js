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
  }
};