export default {
  name: 'コード難読化',
  description: 'JavaScriptおよびCSSコードを難読化して、コードの安全性と知的財産権を保護',

  languages: {
    title: '言語を選択',
    javascript: 'JavaScript',
    css: 'CSS'
  },

  options: {
    title: '難読化オプション',
    javascript: {
      compact: 'コンパクト出力 (空白を削除)',
      controlFlowFlattening: '制御フロー平坦化',
      deadCodeInjection: '無効コード注入',
      debugProtection: 'デバッグ保護',
      selfDefending: '自己防御 (フォーマット防止)',
      stringArray: '文字列配列化',
      renameGlobals: 'グローバル変数の名前変更',
      renameProperties: 'プロパティの名前変更',
      mangle: '変数名難読化',
      stringArrayEncoding: '文字列配列エンコーディング',
      stringArrayThreshold: '文字列配列閾値',
      unicodeEscapeSequence: 'Unicodeエスケープシーケンス'
    },
    css: {
      compact: 'コンパクト出力',
      renameSelectors: 'セレクター名の変更',
      preserveImportant: '!importantを保持',
      restructure: 'ルールの再構成',
      keepVendorPrefixes: 'ベンダープレフィックスを保持',
      removeComments: 'コメントを削除'
    }
  },

  input: {
    title: '入力コード',
    placeholder: 'ここに難読化するコードを入力...',
    clear: 'クリア',
    paste: '貼り付け',
    upload: 'ファイルをアップロード',
    inputObfuscatorCode: '難読化するコードを入力してください'
  },

  output: {
    title: '難読化結果',
    placeholder: '難読化されたコードはここに表示されます...',
    copy: 'コピー',
    download: 'ダウンロード',
    stats: {
      original: 'オリジナルサイズ',
      obfuscated: '難読化後サイズ',
      ratio: '圧縮率'
    },
    increase: '増加',
    decrease: '減少'
  },

  actions: {
    obfuscate: '難読化',
    clear: 'クリア'
  },

  messages: {
    copied: 'クリップボードにコピーされました',
    copyFailed: 'コピーに失敗しました。手動でコピーしてください',
    processing: '処理中...',
    error: '難読化中にエラーが発生しました',
    invalidInput: '無効な入力コードです',
    uploadError: 'ファイルのアップロードに失敗しました',
    fileTooLarge: 'ファイルが大きすぎます（最大2MB）'
  },

  tips: {
    title: '使用ヒント',
    tip1: 'コードの難読化により逆解析の難易度を高めることができますが、完全にコードを防ぐことはできません',
    tip2: '多くの難読化オプションを使用するとコード容量と実行時のオーバーヘッドが増加します',
    tip3: '一部の難読化オプションはコードのデバッグ性に影響を与える可能性があります',
    tip4: '難読化する前に必ずオリジナルコードのバックアップを取ってください',
    tip5: '大規模プロジェクトでは専門の難読化ツールの使用をお勧めします'
  },

  demo: {
    title: '例',
    function: '関数例',
    class: 'クラス例',
    simple: 'シンプルスタイル',
    animation: 'アニメーション効果'
  }
};