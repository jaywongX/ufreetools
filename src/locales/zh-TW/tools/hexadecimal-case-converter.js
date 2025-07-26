export default {
  name: "十六進制大小寫轉換器",
  description: "在大寫和小寫之間轉換和格式化十六進制字符串，支援不同的前綴、分隔符和分組選項",

  input: {
    title: "輸入十六進制",
    placeholder: "輸入十六進制值..."
  },

  output: {
    title: "轉換結果",
    placeholder: "轉換結果將顯示在這裡..."
  },

  prefix: {
    title: "前綴",
    none: "無",
    "0x": "0x (程式設計)",
    hash: "# (顏色)",
    backslash: "\\x (轉義序列)",
    h: "h (組合語言)"
  },

  format: {
    title: "大小寫格式",
    uppercase: "大寫",
    lowercase: "小寫"
  },

  separator: {
    title: "分隔符",
    none: "無",
    space: "空格",
    comma: "逗號",
    colon: "冒號",
    semicolon: "分號"
  },

  grouping: {
    title: "分組（位元組）",
    none: "無",
    "1": "1位元組",
    "2": "2位元組",
    "4": "4位元組",
    "8": "8位元組"
  },

  actions: {
    copy: "複製",
    clear: "清除",
    convert: "轉換"
  },

  messages: {
    copied: "已複製到剪貼簿",
    copyFailed: "複製失敗",
    invalidHex: "無效的十六進制值"
  },

  examples: {
    title: "範例",
    example1: {
      title: "十六進制的\"Hello World\"",
      value: "48656C6C6F20576F726C64"
    },
    example2: {
      title: "帶0x前綴的ASCII Hello",
      value: "0x48656C6C6F"
    },
    example3: {
      title: "DEADBEEF（常見除錯值）",
      value: "DEADBEEF"
    },
    example4: {
      title: "MAC地址格式",
      value: "01:23:45:67:89:AB"
    }
  },

  tips: {
    title: "提示",
    tip1: "十六進制值使用字元0-9和A-F（或a-f）",
    tip2: "不同的前綴在不同的上下文中使用：程式設計中的0x，顏色中的#等",
    tip3: "使用分組和分隔符可以提高長十六進制字符串的可讀性",
    tip4: "MAC地址通常使用冒號分隔符和1位元組分組"
  }
};