export default {
  name: 'HTML实体编码器',
  description: '在HTML文本和实体编码之间进行转换',
  title: 'HTML实体编码器/解码器',
  intro: 'HTML实体编码用于将特殊字符转换为HTML安全的格式，常用于防止XSS攻击或显示HTML源代码。',

  operation: {
    title: '操作类型',
    encode: 'HTML实体编码',
    decode: 'HTML实体解码'
  },

  mode: {
    title: '编码模式',
    named: '命名实体 (&amp;lt;)',
    decimal: '十进制实体 (&amp;#60;)',
    hex: '十六进制实体 (&amp;#x3C;)',
    full: '完全编码 (所有字符)'
  },

  input: {
    encodeTitle: '需要编码的文本',
    decodeTitle: '需要解码的文本',
    encodePlaceholder: '输入要编码的HTML或文本...',
    decodePlaceholder: '输入要解码的HTML实体文本...',
    clear: '清空'
  },

  output: {
    encodeTitle: '编码结果',
    decodeTitle: '解码结果',
    copy: '复制结果',
    copied: '(已复制!)',
    preview: '预览效果',
    showSource: '显示源码'
  },

  reference: {
    title: '实体参考',
    commonReferenceTables: '常见HTML实体参考表',
    show: '显示表格',
    hide: '隐藏表格',
    description: {
      named: '使用命名格式如 &amp;lt; 表示 &lt; (仅适用于常见HTML实体)',
      decimal: '使用十进制格式如 &amp;#60; 表示 &lt;',
      hex: '使用十六进制格式如 &amp;#x3C; 表示 &lt;',
      full: '编码所有非字母数字字符，包括空格、换行等'
    },
    table: {
      char: '字符',
      named: '命名实体',
      decimal: '十进制实体',
      description: '说明'
    },
    entities: {
      lt: '小于号',
      gt: '大于号',
      amp: '和号',
      quot: '双引号',
      apos: '单引号',
      copy: '版权符号',
      reg: '注册商标',
      trade: '商标符号',
      nbsp: '不换行空格',
      cent: '分符号',
      pound: '英镑符号',
      euro: '欧元符号',
      yen: '日元/人民币符号',
      sect: '章节符号',
      minus: '减号',
      times: '乘号',
      divide: '除号',
      deg: '度数符号',
      plusmn: '正负号',
      frac14: '四分之一'
    }
  },

  messages: {
    copySuccess: '已复制到剪贴板',
    copyError: '复制失败，请手动复制',
    encodeSuccess: '编码完成',
    decodeSuccess: '解码完成',
    invalidInput: '无效的输入文本'
  }
}; 