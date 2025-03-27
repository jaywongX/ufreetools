export default {
  name: '数字转换器',
  description: '在不同进制和格式之间转换数字',
  input: {
    title: '输入数字',
    placeholder: '输入要转换的数字',
    fromBase: '原始进制',
    toBase: '目标进制',
    customBase: '自定义进制'
  },
  bases: {
    binary: '二进制 (2进制)',
    octal: '八进制 (8进制)',
    decimal: '十进制 (10进制)',
    hexadecimal: '十六进制 (16进制)',
    base32: '32进制',
    base36: '36进制',
    base58: '58进制',
    base64: '64进制',
    custom: '自定义进制'
  },
  options: {
    signed: '有符号',
    bitLength: '位长度',
    byteOrder: '字节顺序',
    formatOutput: '格式化输出',
    separator: '分隔符',
    prefix: '添加前缀',
    uppercase: '大写'
  },
  byteOrders: {
    littleEndian: '小端序',
    bigEndian: '大端序'
  },
  bitLengths: {
    '8': '8位',
    '16': '16位',
    '32': '32位',
    '64': '64位',
    custom: '自定义'
  },
  output: {
    title: '转换结果',
    binary: '二进制',
    octal: '八进制',
    decimal: '十进制',
    hexadecimal: '十六进制',
    custom: '自定义进制',
    all: '所有转换'
  },
  actions: {
    convert: '转换',
    clear: '清除',
    copy: '复制结果',
    swap: '交换进制'
  },
  bitConverters: {
    title: '位转换器',
    ieee754: 'IEEE 754浮点数',
    twosComplement: '二进制补码',
    bitMask: '位掩码',
    bitField: '位字段提取器'
  },
  calculators: {
    title: '计算',
    add: '加',
    subtract: '减',
    multiply: '乘',
    divide: '除',
    modulo: '取模',
    power: '幂'
  },
  messages: {
    invalidInput: '所选进制的无效数字',
    outOfRange: '数字超出所选位长度的范围',
    copied: '转换结果已复制到剪贴板',
    conversionComplete: '转换完成'
  }
} 