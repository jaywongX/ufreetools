export default {
  name: '数値変換ツール',
  description: '異なる進数と形式間で数値を変換',

  input: {
    title: '数値入力',
    placeholder: '変換する数値を入力',
    fromBase: '元の進数',
    toBase: '変換先の進数',
    customBase: 'カスタム進数'
  },

  bases: {
    binary: '2進数 (バイナリ)',
    octal: '8進数 (オクタル)',
    decimal: '10進数 (デシマル)',
    hexadecimal: '16進数 (ヘキサデシマル)',
    base32: '32進数',
    base36: '36進数',
    base58: '58進数',
    base64: '64進数',
    custom: 'カスタム進数'
  },

  options: {
    signed: '符号付き',
    bitLength: 'ビット長',
    byteOrder: 'バイト順',
    formatOutput: '出力フォーマット',
    separator: '区切り文字',
    prefix: 'プレフィックス追加',
    uppercase: '大文字'
  },

  byteOrders: {
    littleEndian: 'リトルエンディアン',
    bigEndian: 'ビッグエンディアン'
  },

  bitLengths: {
    '8': '8ビット',
    '16': '16ビット',
    '32': '32ビット',
    '64': '64ビット',
    custom: 'カスタム'
  },

  output: {
    title: '変換結果',
    binary: '2進数',
    octal: '8進数',
    decimal: '10進数',
    hexadecimal: '16進数',
    custom: 'カスタム進数',
    all: 'すべての変換'
  },

  actions: {
    convert: '変換',
    clear: 'クリア',
    copy: '結果をコピー',
    swap: '進数を入れ替え'
  },

  bitConverters: {
    title: 'ビット変換',
    ieee754: 'IEEE 754浮動小数点',
    twosComplement: '2の補数',
    bitMask: 'ビットマスク',
    bitField: 'ビットフィールド抽出'
  },

  calculators: {
    title: '計算',
    add: '加算',
    subtract: '減算',
    multiply: '乗算',
    divide: '除算',
    modulo: '剰余',
    power: '累乗'
  },

  messages: {
    invalidInput: '選択した進数では無効な数値です',
    outOfRange: '数値が選択したビット長の範囲を超えています',
    copied: '変換結果がクリップボードにコピーされました',
    conversionComplete: '変換完了'
  }
};