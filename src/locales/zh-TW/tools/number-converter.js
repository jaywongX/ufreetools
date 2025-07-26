export default {
  name: '數字轉換器',
  description: '在不同進制和格式之間轉換數字',

  input: {
    title: '輸入數字',
    placeholder: '輸入要轉換的數字',
    fromBase: '原始進制',
    toBase: '目標進制',
    customBase: '自定義進制'
  },

  bases: {
    binary: '二進制 (2進制)',
    octal: '八進制 (8進制)',
    decimal: '十進制 (10進制)',
    hexadecimal: '十六進制 (16進制)',
    base32: '32進制',
    base36: '36進制',
    base58: '58進制',
    base64: '64進制',
    custom: '自定義進制'
  },

  options: {
    signed: '有符號',
    bitLength: '位元長度',
    byteOrder: '位元組順序',
    formatOutput: '格式化輸出',
    separator: '分隔符',
    prefix: '添加前綴',
    uppercase: '大寫'
  },

  byteOrders: {
    littleEndian: '小端序',
    bigEndian: '大端序'
  },

  bitLengths: {
    '8': '8位元',
    '16': '16位元',
    '32': '32位元',
    '64': '64位元',
    custom: '自定義'
  },

  output: {
    title: '轉換結果',
    binary: '二進制',
    octal: '八進制',
    decimal: '十進制',
    hexadecimal: '十六進制',
    custom: '自定義進制',
    all: '所有轉換'
  },

  actions: {
    convert: '轉換',
    clear: '清除',
    copy: '複製結果',
    swap: '交換進制'
  },

  bitConverters: {
    title: '位元轉換器',
    ieee754: 'IEEE 754浮點數',
    twosComplement: '二進制補碼',
    bitMask: '位元遮罩',
    bitField: '位元字段提取器'
  },

  calculators: {
    title: '計算',
    add: '加',
    subtract: '減',
    multiply: '乘',
    divide: '除',
    modulo: '取模',
    power: '冪'
  },

  messages: {
    invalidInput: '所選進制的無效數字',
    outOfRange: '數字超出所選位元長度的範圍',
    copied: '轉換結果已複製到剪貼簿',
    conversionComplete: '轉換完成'
  }
};