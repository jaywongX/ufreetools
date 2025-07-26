export default {
  name: 'HTMLエンティティエンコーダー',
  description: 'HTMLテキストとエンティティエンコード間の変換',
  title: 'HTMLエンティティエンコーダー/デコーダー',
  intro: 'HTMLエンティティエンコードは特殊文字をHTML安全な形式に変換するために使用され、XSS攻撃の防止やHTMLソースコードの表示によく使われます。',

  operation: {
    title: '操作タイプ',
    encode: 'HTMLエンティティエンコード',
    decode: 'HTMLエンティティデコード'
  },

  mode: {
    title: 'エンコードモード',
    named: '名前付きエンティティ (&amp;lt;)',
    decimal: '10進数エンティティ (&amp;#60;)',
    hex: '16進数エンティティ (&amp;#x3C;)',
    full: '完全エンコード (すべての文字)'
  },

  input: {
    encodeTitle: 'エンコードするテキスト',
    decodeTitle: 'デコードするテキスト',
    encodePlaceholder: 'エンコードするHTMLまたはテキストを入力...',
    decodePlaceholder: 'デコードするHTMLエンティティテキストを入力...',
    clear: 'クリア'
  },

  output: {
    encodeTitle: 'エンコード結果',
    decodeTitle: 'デコード結果',
    copy: '結果をコピー',
    copied: '(コピーしました!)',
    preview: 'プレビュー',
    showSource: 'ソースを表示'
  },

  reference: {
    title: 'エンティティリファレンス',
    commonReferenceTables: '一般的なHTMLエンティティ参照表',
    show: '表を表示',
    hide: '表を非表示',
    description: {
      named: '&amp;lt; のような名前付き形式を使用して &lt; を表します（一般的なHTMLエンティティのみ）',
      decimal: '&amp;#60; のような10進数形式を使用して &lt; を表します',
      hex: '&amp;#x3C; のような16進数形式を使用して &lt; を表します',
      full: 'スペース、改行などを含むすべての英数字以外の文字をエンコードします'
    },
    table: {
      char: '文字',
      named: '名前付きエンティティ',
      decimal: '10進数エンティティ',
      description: '説明'
    },
    entities: {
      lt: '小なり記号',
      gt: '大なり記号',
      amp: 'アンパサンド',
      quot: '二重引用符',
      apos: '一重引用符',
      copy: '著作権記号',
      reg: '登録商標',
      trade: '商標記号',
      nbsp: '改行なしスペース',
      cent: 'セント記号',
      pound: 'ポンド記号',
      euro: 'ユーロ記号',
      yen: '円/人民元記号',
      sect: 'セクション記号',
      minus: 'マイナス記号',
      times: '乗算記号',
      divide: '除算記号',
      deg: '度数記号',
      plusmn: 'プラスマイナス記号',
      frac14: '4分の1'
    }
  },

  messages: {
    copySuccess: 'クリップボードにコピーしました',
    copyError: 'コピーに失敗しました、手動でコピーしてください',
    encodeSuccess: 'エンコード完了',
    decodeSuccess: 'デコード完了',
    invalidInput: '無効な入力テキスト'
  }
};