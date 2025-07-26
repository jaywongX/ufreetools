export default {
  name: '十六进制大小写转换器',
  description: '在大写和小写之间转换和格式化十六进制字符串，支持不同的前缀、分隔符和分组选项',

  input: {
    title: '输入十六进制',
    placeholder: '输入十六进制值...'
  },

  output: {
    title: '转换结果',
    placeholder: '转换结果将显示在这里...'
  },

  prefix: {
    title: '前缀',
    none: '无',
  },

  format: {
    title: '大小写格式',
    uppercase: '大写',
    lowercase: '小写'
  },

  separator: {
    title: '分隔符',
    none: '无',
    space: '空格',
    comma: '逗号',
    colon: '冒号',
    semicolon: '分号'
  },

  grouping: {
    title: '分组（字节）',
    none: '无'
  },

  actions: {
    copy: '复制',
    clear: '清除',
    convert: '转换'
  },

  messages: {
    copied: '已复制到剪贴板',
    copyFailed: '复制失败',
    invalidHex: '无效的十六进制值'
  },

  examples: {
    title: '示例',
    example1: {
      title: '十六进制的"Hello World"',
    },
    example2: {
      title: '带0x前缀的ASCII Hello',
    },
    example3: {
      title: 'DEADBEEF（常见调试值）',
    },
    example4: {
      title: 'MAC地址格式',
    }
  },

  tips: {
    title: '提示',
    tip1: '十六进制值使用字符0-9和A-F（或a-f）',
    tip2: '不同的前缀在不同的上下文中使用：编程中的0x，颜色中的#等',
    tip3: '使用分组和分隔符可以提高长十六进制字符串的可读性',
    tip4: 'MAC地址通常使用冒号分隔符和1字节分组'
  }
};
