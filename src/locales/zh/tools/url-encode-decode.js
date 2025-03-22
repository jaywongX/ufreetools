export default {
  name: 'URL编码/解码器',
  description: '编码和解码URL及URL组件',
  options: {
    mode: '模式',
    encodeType: '编码类型',
    charset: '字符集',
    spaceAsPlus: '将空格编码为+'
  },
  modes: {
    encode: '编码',
    decode: '解码',
    component: '组件'
  },
  encodeTypes: {
    full: '完整URL',
    component: 'URL组件',
    query: '查询字符串',
    path: '路径段'
  },
  actions: {
    process: '处理',
    swap: '交换输入/输出',
    copy: '复制',
    clear: '清除',
    parse: '解析URL'
  },
  messages: {
    copied: '已复制到剪贴板！',
    encodeSuccess: 'URL编码成功',
    decodeSuccess: 'URL解码成功',
    invalidUrl: '无效的URL格式',
    components: 'URL组件',
    protocol: '协议',
    host: '主机',
    port: '端口',
    path: '路径',
    query: '查询',
    hash: '哈希'
  }
} 