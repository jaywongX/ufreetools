export default {
  name: 'URLエンコード/デコード',
  description: 'URLエンコードは特殊文字をURL対応形式に変換するために使用され、URLパラメータやフォーム送信によく使われます。',

  options: {
    operationType: '操作タイプ',
    encodeMode: 'エンコードモード'
  },

  encodeOptions: {
    standard: '標準エンコード (encodeURI)',
    component: 'コンポーネントエンコード (encodeURIComponent)',
    full: '完全エンコード (すべての文字)',
    standardDescription: 'URL全体をエンコードし、URL構造文字を保持',
    componentDescription: 'URLパラメータに適用、すべての特殊文字をエンコード',
    fullDescription: 'すべての英数字以外の文字をエンコード、スペースを+ではなく%20に変換'
  },

  actions: {
    encode: 'URLエンコード',
    decode: 'URLデコード',
    clear: 'クリア',
    copyResult: '結果をコピー'
  },

  input: {
    textToEncode: 'エンコードするテキスト',
    textToDecode: 'デコードするテキスト',
    encodePlaceholder: 'エンコードするURLまたはテキストを入力...',
    decodePlaceholder: 'デコードするURLまたはテキストを入力...'
  },

  output: {
    encodeResult: 'エンコード結果',
    decodeResult: 'デコード結果'
  },

  messages: {
    copied: '(コピーしました!)',
    error: 'エラー: {message}',
    decodeError: 'デコードできません: "{text}"',
    copyFailed: 'コピーに失敗しました。手動でコピーしてください'
  },

  referenceTable: {
    title: '一般的なURL文字エンコード参照表',
    showTable: '表を表示',
    hideTable: '表を非表示',
    character: '文字',
    encoded: 'URLエンコード',
    description: '説明',
    descriptions: {
      space: 'スペース',
      exclamation: '感嘆符',
      doubleQuote: '二重引用符',
      hash: 'ハッシュ記号',
      dollar: 'ドル記号',
      percent: 'パーセント記号',
      ampersand: 'アンパサンド',
      singleQuote: '一重引用符',
      leftParenthesis: '左括弧',
      rightParenthesis: '右括弧',
      asterisk: 'アスタリスク',
      plus: 'プラス記号',
      comma: 'カンマ',
      slash: 'スラッシュ',
      colon: 'コロン',
      semicolon: 'セミコロン',
      lessThan: '小なり記号',
      equals: '等号',
      greaterThan: '大なり記号',
      questionMark: '疑問符',
      at: 'アットマーク',
      leftBracket: '左角括弧',
      backslash: 'バックスラッシュ',
      rightBracket: '右角括弧',
      caret: 'キャレット',
      backtick: 'バッククォート',
      leftBrace: '左中括弧',
      pipe: '縦線',
      rightBrace: '右中括弧',
      tilde: 'チルダ',
      chinese: 'UTF-8エンコードされた中国語'
    }
  }
}; 