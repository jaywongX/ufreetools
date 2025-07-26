export default {
  name: 'HTML實體編碼器',
  description: '在HTML文本和實體編碼之間進行轉換',
  title: 'HTML實體編碼器/解碼器',
  intro: 'HTML實體編碼用於將特殊字符轉換為HTML安全的格式，常用於防止XSS攻擊或顯示HTML源代碼。',

  operation: {
    title: '操作類型',
    encode: 'HTML實體編碼',
    decode: 'HTML實體解碼'
  },

  mode: {
    title: '編碼模式',
    named: '命名實體 (&amp;lt;)',
    decimal: '十進制實體 (&amp;#60;)',
    hex: '十六進制實體 (&amp;#x3C;)',
    full: '完全編碼 (所有字符)'
  },

  input: {
    encodeTitle: '需要編碼的文本',
    decodeTitle: '需要解碼的文本',
    encodePlaceholder: '輸入要編碼的HTML或文本...',
    decodePlaceholder: '輸入要解碼的HTML實體文本...',
    clear: '清空'
  },

  output: {
    encodeTitle: '編碼結果',
    decodeTitle: '解碼結果',
    copy: '複製結果',
    copied: '(已複製',
    preview: '預覽效果',
    showSource: '顯示源碼'
  },

  reference: {
    title: '實體參考',
    commonReferenceTables: '常見HTML實體參考表',
    show: '顯示表格',
    hide: '隱藏表格',
    description: {
      named: '使用命名格式如 &amp;lt; 表示 &lt; (僅適用於常見HTML實體)',
      decimal: '使用十進制格式如 &amp;#60; 表示 &lt;',
      hex: '使用十六進制格式如 &amp;#x3C; 表示 &lt;',
      full: '編碼所有非字母數字字符，包括空格、換行等'
    },
    table: {
      char: '字符',
      named: '命名實體',
      decimal: '十進制實體',
      description: '說明'
    },
    entities: {
      lt: '小於號',
      gt: '大於號',
      amp: '和號',
      quot: '雙引號',
      apos: '單引號',
      copy: '版權符號',
      reg: '註冊商標',
      trade: '商標符號',
      nbsp: '不換行空格',
      cent: '分符號',
      pound: '英鎊符號',
      euro: '歐元符號',
      yen: '日元/人民幣符號',
      sect: '章節符號',
      minus: '減號',
      times: '乘號',
      divide: '除號',
      deg: '度數符號',
      plusmn: '正負號',
      frac14: '四分之一'
    }
  },

  messages: {
    copySuccess: '已複製到剪貼板',
    copyError: '複製失敗，請手動複製',
    encodeSuccess: '編碼完成',
    decodeSuccess: '解碼完成',
    invalidInput: '無效的輸入文本'
  }
};