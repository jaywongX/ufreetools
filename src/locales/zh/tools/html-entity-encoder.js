export default {
  name: 'HTML实体编码',
  description: '在线HTML实体编码工具，支持多种编码格式',
  options: {
    encodeType: '编码类型',
    encodeNonASCII: '编码非ASCII字符',
    encodeReserved: '编码保留字符'
  },
  actions: {
    encode: '编码',
    decode: '解码',
    clear: '清除',
    copy: '复制',
    swap: '交换输入/输出'
  },
  messages: {
    copied: '已复制到剪贴板！',
    inputRequired: '请输入要编码/解码的文本'
  }
} 