export default {
  name: '随机文本生成器',
  description: '为设计布局生成Lorem Ipsum占位文本',
  options: {
    type: '内容类型',
    quantity: '数量',
    startWithLorem: '以"Lorem ipsum dolor sit amet..."开始',
    lengthUnit: '长度单位',
    language: '语言',
    randomize: '随机化',
    maxCharsPerParagraph: '每段最大字符数'
  },
  contentTypes: {
    paragraphs: '段落',
    sentences: '句子',
    words: '单词',
    lists: '列表',
    customLength: '自定义长度'
  },
  languages: {
    latin: '拉丁文 (Lorem Ipsum)',
    english: '英文',
    french: '法文',
    spanish: '西班牙文',
    german: '德文',
    japanese: '日文',
    chinese: '中文',
    russian: '俄文'
  },
  units: {
    words: '单词',
    characters: '字符',
    bytes: '字节'
  },
  actions: {
    generate: '生成',
    copy: '复制',
    clear: '清除',
    download: '下载为TXT',
    html: '生成HTML'
  },
  messages: {
    copied: '已复制到剪贴板！',
    generated: 'Lorem Ipsum文本已生成',
    invalidQuantity: '请输入有效数量',
    maxExceeded: '超过最大允许数量'
  }
} 