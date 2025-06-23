export default {
  name: 'CSVからJSONへの変換ツール',
  description: 'CSVデータをJSONフォーマットに変換、カスタマイズ可能なオプション付き',
  
  options: {
    delimiter: '区切り文字',
    quote: '引用符',
    header: '先頭行をヘッダーとして使用',
    dynamicTyping: '動的型変換',
    dynamicTypingDescription: '数字の文字列を数値に、「true/false」をブール値に変換など',
    skipEmptyLines: '空行をスキップ',
    comments: 'コメント文字',
    outputFormat: '出力形式',
    indentation: 'インデント',
    encoding: 'エンコーディング',
    newline: '改行文字',
    title: '変換オプション'
  },
  
  delimiters: {
    comma: 'カンマ (,)',
    semicolon: 'セミコロン (;)',
    tab: 'タブ (\\t)',
    pipe: 'パイプ (|)',
    custom: 'カスタム'
  },
  
  formats: {
    array: 'オブジェクト配列',
    arrayOfArrays: '配列の配列',
    keyed: 'キー付きオブジェクト',
    nested: 'ネストされたオブジェクト'
  },
  
  preview: {
    input: '入力...',
    output: '出力...',
    rawCsv: '生のCSV',
    parsedCsv: '解析後のCSV',
    jsonOutput: 'JSON出力',
    firstRows: '最初の {count} 行',
    showAll: 'すべて表示'
  },
  
  actions: {
    convert: '変換',
    copy: 'JSONをコピー',
    download: 'JSONをダウンロード',
    clear: 'クリア',
    uploadCsv: 'CSVをアップロード',
    swap: '入力/出力を入れ替え',
    loadExample: '例を読み込む',
    clearInput: '入力をクリア',
    formatOutput: '出力をフォーマット',
    copyResult: '結果をコピー',
    downloadResult: '結果をダウンロード',
    paste: '貼り付け',
    showOptions: 'オプションを表示',
    hideOptions: 'オプションを非表示',
    uploadJson: 'JSONをアップロード'
  },
  
  results: {
    rowsProcessed: '{count} 行が処理されました',
    conversionComplete: '変換完了',
    copied: 'クリップボードにコピーしました',
    downloaded: 'ダウンロードしました',
    error: 'エラー'
  },
  
  errors: {
    noData: '変換するCSVデータがありません',
    invalidCsv: '無効なCSV形式です',
    parsingFailed: '解析に失敗しました: {error}',
    missingHeader: 'ヘッダー行がありません',
    invalidJson: '無効なJSON形式です',
    formatFailed: 'フォーマットに失敗しました: {error}',
    copyFailed: 'コピーに失敗しました。手動でコピーしてください',
    downloadFailed: 'ダウンロードに失敗しました',
    pasteError: 'クリップボードから貼り付けできません',
    conversionFailed: '変換に失敗しました'
  },
  
  conversion: {
    title: '変換方向',
    csvToJson: {
      title: 'CSVからJSONへ',
      delimiterLabel: '区切り文字',
      headerLabel: '最初の行をヘッダーとして使用',
      dynamicTypingLabel: 'データ型を自動推測',
      skipEmptyLinesLabel: '空行をスキップ',
      convertButton: 'CSVをJSONに変換'
    },
    jsonToCsv: {
      title: 'JSONからCSVへ',
      delimiterLabel: '区切り文字',
      headerLabel: 'ヘッダー行を含める',
      quotesLabel: 'すべてのフィールドに引用符を追加',
      nestedModeLabel: 'ネストされたデータの処理方法を選択',
      flat: 'フラット化',
      stringify: '文字列に変換',
      ignore: '無視',
      convertButton: 'JSONをCSVに変換'
    }
  },
  
  stats: {
    processed: '処理されたデータ行数',
    fields: 'フィールド数/列数',
    inputSize: '変換前のサイズ',
    outputSize: '変換後のサイズ',
    title: '統計データ'
  },
  
  messages: {
    copied: 'クリップボードにコピーしました',
    download: 'ダウンロードしました',
    error: 'エラー'
  },
  
  formatBytes: {
    bytes: 'バイト',
    kb: 'KB',
    mb: 'MB',
    gb: 'GB',
    tb: 'TB'
  },
  
  article: {
    title: "CSV-JSONツール：データ形式変換の簡素化",
    features: {
      title: "CSVとJSON変換ツールの紹介",
      description: "<strong>CSV-JSON変換ツール</strong>は、<strong>CSV形式</strong>（カンマ区切り値）と<strong>JSON形式</strong>（JavaScript Object Notation）の間でデータを変換するために設計された強力なツールです。この双方向<strong>データコンバーター</strong>は、表形式のデータを構造化されたJSONオブジェクトにシームレスに変換し、その逆も可能です。<br><br>私たちの<strong>CSV JSONツール</strong>は、さまざまな<strong>データ形式</strong>を処理するためのカスタマイズ可能なオプションを提供しており、異なる区切り文字（カンマ、セミコロン、タブ、パイプ）、ヘッダー行の管理、およびスマートな<strong>データ型検出</strong>が含まれます。複雑なJSON構造については、このツールはネストされたオブジェクトをフラット化したり文字列に変換したりするオプションを提供し、さまざまなアプリケーションやワークフローに適用できる<strong>データ変換</strong>タスクの多目的ソリューションとなっています。",
      useCases: {
        title: "CSV JSON変換の一般的なユースケース",
        items: [
          "データアナリストがスプレッドシートのエクスポートをJSONに変換し、データ可視化ツールやAPIで使用",
          "開発者がJSONデータ構造を必要とするWebアプリケーション用にデータを準備",
          "データベース管理者が異なる形式要件を持つシステム間でデータを移行",
          "API開発者がCSVデータエクスポートをRESTful APIで使用するためのJSON形式に変換",
          "データサイエンティストがスプレッドシート形式とコードフレンドリーなJSON構造の間で実験結果を変換",
          "ビジネスアナリストが会計やCRMシステムからCSVレポートを準備し、JSONを使用するWebダッシュボードで使用"
        ]
      }
    },
    faq: {
      title: "CSV-JSON変換に関するよくある質問",
      items: [
        {
          question: "CSVとJSON形式の違いは何ですか？",
          answer: "CSV（カンマ区切り値）は、データが行と列で整理され、区切り文字（通常はカンマ）で区切られるシンプルな表形式です。フラットで軽量であり、スプレッドシートでよく使用されます。JSON（JavaScript Object Notation）は階層的な構造化データ形式で、ネストされたオブジェクトと配列をサポートしています。JSONはより複雑なデータ関係を表現でき、Web APIやJavaScriptアプリケーションの標準形式です。"
        },
        {
          question: "CSVに変換する際、ツールはネストされたJSONをどのように処理しますか？",
          answer: "私たちのCSV JSON変換ツールは、ネストされたJSONオブジェクトを処理するための3つのオプションを提供しています：'フラット化'はネストされたプロパティをドット表記の列名に変換し（例：'user.name'）、'文字列に変換'はネストされたオブジェクト全体を文字列表現に変換し、'無視'はネストされたオブジェクトを変換から除外します。これらのオプションは、特定のデータ変換ニーズに応じて柔軟性を提供します。"
        },
        {
          question: "CSV-JSON変換ツールはCSVファイル内の異なる区切り文字を処理できますか？",
          answer: "はい、私たちのデータコンバーターはカンマ、セミコロン、タブ、パイプ文字など、複数の区切り文字オプションをサポートしています。この柔軟性により、異なるシステムや地域からのさまざまなCSV形式のバリエーションを処理できます。変換前にオプションパネルで適切な区切り文字を選択するだけです。"
        },
        {
          question: "CSV-JSON変換における動的型変換はどのように機能しますか？",
          answer: "動的型変換は、CSV内のデータ型を自動的に検出して変換します。有効にすると、数値のように見える文字列値（例：'42'）は実際の数値型に変換され、'true'/'false'文字列はブール値になり、空のフィールドはnull値に変換できます。これにより、すべてを文字列として扱うのではなく、正しいデータ型を持つより使いやすいJSONデータが作成されます。"
        },
        {
          question: "この変換ツールはどれくらいの大きさのCSVまたはJSONファイルを処理できますか？",
          answer: "CSV JSON変換ツールはブラウザ上で直接データを処理するため、ファイルサイズの制限はデバイスのメモリに依存します。最適なパフォーマンスを得るには、5MB未満のファイルを使用することをお勧めしますが、最新のブラウザはより大きなファイルも処理できます。非常に大きなデータセットの場合は、ファイルを小さな塊に分割するか、サーバーベースの変換ツールの使用を検討してください。"
        }
      ]
    },
    guide: {
      title: "CSV-JSONツールの使用方法",
      steps: [
        "変換方向を選択：ソースデータ形式に応じて'CSVからJSONへ'または'JSONからCSVへ'を選択",
        "'オプションを表示'をクリックして、区切り文字、ヘッダー行、特殊処理ルールなどの変換設定を構成",
        "CSVからJSONへの変換では、適切な区切り文字（カンマ、セミコロン、タブなど）を選択し、CSVに列ヘッダーが含まれている場合は'最初の行をヘッダーとして使用'にチェックを入れる",
        "JSONからCSVへの変換では、ネストされたオブジェクトの処理方法（フラット化、文字列に変換、または無視）と、すべてのフィールド値に引用符を追加するかどうかを設定",
        "入力フィールドにデータを貼り付けるか、'例を読み込む'をクリックして変換ツールがサンプルデータをどのように処理するかを確認することでデータを入力",
        "'変換'ボタンをクリックしてCSVとJSON形式間のデータ変換を実行",
        "変換統計と出力結果を確認し、'結果をコピー'または'結果をダウンロード'ボタンを使用して変換したデータを保存"
      ]
    },
    conclusion: "CSV-JSON変換ツールは、異なるデータ形式を頻繁に扱うデータプロフェッショナルにとって必須のツールです。表形式のCSVデータと構造化されたJSONオブジェクト間の変換プロセスを簡素化することで、このツールは時間を節約し、データ処理ワークフローでのエラーを減らします。APIインテグレーション用のデータを準備する場合でも、スプレッドシートアプリケーションのエクスポートを変換する場合でも、異なるシステムの形式要件間で変換する場合でも、この変換ツールはデータ変換ニーズに柔軟なブラウザベースのソリューションを提供します。"
  }
}