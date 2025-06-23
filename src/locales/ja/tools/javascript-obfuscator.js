export default {
  name: 'JavaScript難読化ツール',
  description: '様々な難読化技術によりJavaScriptコードを保護',
  input: {
    title: 'JavaScript入力',
    placeholder: 'ここにJavaScriptコードを入力または貼り付け',
    loadSample: 'サンプルを読み込む',
    clearInput: '入力をクリア',
    uploadFile: 'JSファイルをアップロード'
  },
  output: {
    title: '難読化されたコード',
    copied: 'コードがクリップボードにコピーされました',
    download: '難読化されたコードをダウンロード',
    copyOutput: 'コードをコピー',
    clearOutput: '出力をクリア'
  },
  options: {
    title: '難読化オプション',
    compact: 'コードを圧縮',
    selfDefending: '自己防衛',
    controlFlowFlattening: '制御フロー平坦化',
    controlFlowFlatteningThreshold: '制御フロー平坦化しきい値',
    deadCodeInjection: 'デッドコード注入',
    deadCodeInjectionThreshold: 'デッドコード注入しきい値',
    debugProtection: 'デバッグ保護',
    debugProtectionInterval: 'デバッグ保護間隔',
    disableConsoleOutput: 'コンソール出力を無効化',
    domainLock: 'ドメインロック',
    domainLockRedirectUrl: 'ドメインロックリダイレクトURL',
    identifierNamesGenerator: '識別子名ジェネレーター',
    identifiersPrefix: '識別子プレフィックス',
    renameGlobals: 'グローバル変数の名前変更',
    reservedNames: '予約名',
    reservedStrings: '予約文字列',
    rotateStringArray: '文字列配列を回転',
    seed: 'シード',
    shuffleStringArray: '文字列配列をシャッフル',
    sourceMap: 'ソースマップ',
    sourceMapBaseUrl: 'ソースマップベースURL',
    sourceMapFileName: 'ソースマップファイル名',
    splitStrings: '文字列分割',
    splitStringsChunkLength: '文字列分割チャンク長',
    stringArray: '文字列配列',
    stringArrayEncoding: '文字列配列エンコーディング',
    stringArrayThreshold: '文字列配列しきい値',
    target: 'ターゲット',
    transformObjectKeys: 'オブジェクトキー変換',
    unicodeEscapeSequence: 'Unicodeエスケープシーケンス'
  },
  presets: {
    title: 'プリセット',
    low: '低難読化',
    medium: '中難読化',
    high: '高難読化',
    custom: 'カスタム'
  },
  actions: {
    obfuscate: '難読化',
    reset: 'オプションをリセット',
    savePreset: 'プリセットを保存',
    loadPreset: 'プリセットを読み込む'
  },
  messages: {
    obfuscationSuccess: 'コードの難読化に成功しました',
    obfuscationFailed: '難読化に失敗しました：{error}',
    emptyCode: '難読化するJavaScriptコードを入力してください',
    uploadSuccess: 'ファイルのアップロードに成功しました',
    presetSaved: 'プリセットが保存されました',
    presetLoaded: 'プリセットが読み込まれました'
  },
  help: {
    title: 'オプションヘルプ',
    stringArrayDesc: '文字列リテラルを特殊な配列に移動し、配列呼び出しに置き換えます',
    controlFlowDesc: 'コード制御フローの平坦化を有効にし、ロジックを理解しにくくします',
    deadCodeDesc: 'ランダムなデッドコードを注入して攻撃者を混乱させます',
    selfDefendingDesc: '出力がフォーマット変更に対して抵抗できるようにします'
  }
}