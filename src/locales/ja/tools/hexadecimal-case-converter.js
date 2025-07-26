export default {
  name: '16進数大文字小文字変換ツール',
  description: '16進数文字列の大文字と小文字を変換・フォーマットし、プレフィックス、区切り文字、グループ化オプションをサポート',

  input: {
    title: '16進数入力',
    placeholder: '16進数値を入力...'
  },

  output: {
    title: '変換結果',
    placeholder: '変換結果がここに表示されます...'
  },

  prefix: {
    title: 'プレフィックス',
    none: 'なし',
    ox: '0x (プログラミング用)',
    hash: '# (カラーコード用)',
    backslash: '\\x (エスケープシーケンス用)',
    hSuffix: 'h (アセンブリ言語用)'
  },

  format: {
    title: '大文字小文字フォーマット',
    uppercase: '大文字',
    lowercase: '小文字'
  },

  separator: {
    title: '区切り文字',
    none: 'なし',
    space: 'スペース',
    comma: 'カンマ',
    colon: 'コロン',
    semicolon: 'セミコロン'
  },

  grouping: {
    title: 'グループ化（バイト単位）',
    none: 'なし',
    byte1: '1バイト',
    byte2: '2バイト',
    byte4: '4バイト',
    byte8: '8バイト'
  },

  actions: {
    copy: 'コピー',
    clear: 'クリア',
    convert: '変換'
  },

  messages: {
    copied: 'クリップボードにコピーしました',
    copyFailed: 'コピーに失敗しました',
    invalidHex: '無効な16進数値です'
  },

  examples: {
    title: '使用例',
    example1: {
      title: '"Hello World"の16進数表現',
      code: '48656C6C6F20576F726C64'
    },
    example2: {
      title: '0xプレフィックス付きASCII Hello',
      code: '0x48 0x65 0x6C 0x6C 0x6F'
    },
    example3: {
      title: 'DEADBEEF（デバッグ用定数値）',
      code: 'DEADBEEF'
    },
    example4: {
      title: 'MACアドレス形式',
      code: '01:23:45:67:89:AB'
    }
  },

  tips: {
    title: 'ヒント',
    tip1: '16進数値は0-9とA-F（またはa-f）の文字を使用します',
    tip2: '異なるプレフィックスが異なる文脈で使用されます：プログラミングでは0x、カラーコードでは#など',
    tip3: 'グループ化と区切り文字を使用すると、長い16進数文字列の可読性が向上します',
    tip4: 'MACアドレスは通常コロン区切りと1バイトグループ化を使用します'
  }
};