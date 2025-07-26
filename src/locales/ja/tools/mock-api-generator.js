export default {
  name: 'Mock APIジェネレーター',
  description: 'OpenAPI仕様に基づいてMock APIを自動生成',

  options: {
    version: 'OpenAPIバージョン',
    format: '出力形式',
    includeExamples: 'サンプルレスポンスを含める',
    responseDynamism: 'レスポンスの動的性',
    responseType: 'レスポンスタイプ',
    arrayLength: '配列の長さ',
    responseFormat: 'レスポンス形式'
  },

  formats: {
    json: 'JSON Server',
    express: 'Express.js',
    mockjs: 'Mock.js',
    msw: 'Mock Service Worker'
  },

  actions: {
    generate: 'Mockを生成',
    preview: 'APIをプレビュー',
    clear: 'クリア',
    copy: 'コードをコピー',
    download: 'ダウンロード',
    uploadSpec: 'OpenAPI仕様をアップロード',
    uploadJava: 'Javaクラスファイルをアップロード',
    generateJson: 'JSONを生成',
    generateBuilder: 'Builderを生成',
    format: '整形'
  },

  messages: {
    copied: 'クリップボードにコピーしました！',
    generationSuccess: 'Mock APIの生成に成功しました',
    generationError: 'Mock APIの生成中にエラーが発生しました',
    specRequired: 'OpenAPI仕様を提供してください',
    fileUploaded: 'アップロード完了',
    parseError: 'Javaクラスの解析に失敗しました。ファイル形式が正しいことを確認してください'
  },

  help: {
    uploadHint: '.javaファイルのアップロードをサポートし、クラス構造を自動的に解析してMock設定を生成します。多層オブジェクトプロパティはまだサポートされていません'
  },

  fields: {
    title: 'フィールド定義',
    addField: 'フィールドを追加',
    addChildField: '子フィールドを追加',
    fieldName: 'フィールド名'
  },

  fieldTypes: {
    string: '文字列',
    number: '数値',
    boolean: '真偽値',
    date: '日付',
    name: '名前',
    email: 'メールアドレス',
    phone: '電話番号',
    address: '住所',
    id: 'ID',
    image: '画像URL',
    array: '配列',
    object: 'オブジェクト'
  },

  array: {
    itemType: '配列項目タイプ',
    arrayFields: '配列項目フィールド'
  },

  object: {
    childFields: '子フィールド'
  },

  responseTypes: {
    object: '単一オブジェクト',
    array: 'オブジェクト配列',
    custom: 'カスタム構造'
  },

  responseFormats: {
    dataOnly: 'データのみ',
    standard: '標準RESTレスポンス (code, data, message)'
  },

  placeholder: {
    output: '// 生成されたMockデータがここに表示されます'
  }
};