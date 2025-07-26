export default {
  name: 'OpenAPI → TypeScriptクライアント生成ツール',
  description: 'OpenAPI仕様に基づいてTypeScriptインターフェースとクライアントコードを自動生成し、フロントエンドとバックエンドの連携効率を向上',

  options: {
    exportSchemas: 'すべてのモデル定義をエクスポート',
    generateClient: 'APIクライアントコードを生成',
    addComments: 'コメントとドキュメントの説明を追加',
    useEnums: 'TypeScript列挙型を使用（文字列ユニオン型の代わりに）',
    indentSize: 'インデントサイズ',
    operationType: '操作タイプ',
    displayOptions: '表示オプション'
  },

  inputMode: {
    toggleToFile: 'ファイルアップロードに切り替え',
    toggleToText: 'テキスト入力に切り替え',
    loadExample: '例を読み込む'
  },

  fileUpload: {
    dragAndDrop: 'OpenAPIファイルをここにドラッグ＆ドロップ、またはクリックしてアップロード',
    supportedFormats: '.json、.yamlおよび.yml形式をサポート',
    fileSelected: '選択済み: {0} ({1})'
  },

  textInput: {
    placeholder: 'OpenAPI仕様（JSONまたはYAML）をここに貼り付け...'
  },

  actions: {
    generate: 'TypeScriptコードを生成',
    processing: '処理中...',
    clear: 'クリア',
    copy: 'コードをコピー',
    download: 'コードをダウンロード'
  },

  results: {
    generatedCode: '生成されたTypeScriptコード',
    copied: 'クリップボードにコピーしました',
    error: 'エラー',
    characterCount: '文字数: {0}'
  },

  errors: {
    parseError: 'OpenAPI仕様を解析できません。有効なJSONまたはYAML形式であることを確認してください。',
    invalidSpec: '無効なOpenAPI仕様です。openapiまたはswaggerバージョン識別子が見つかりません。',
    processingError: 'OpenAPI仕様の処理中にエラーが発生しました: {0}'
  }
};