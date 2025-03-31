export default {
  name: 'LaTeX公式生成器',
  description: '实时生成并导出LaTeX数学公式',
  
  // UI文本
  input: '输入LaTeX代码',
  output: '预览结果',
  renderButton: '渲染公式',
  exportButton: '导出为图片',
  copyButton: '复制LaTeX代码',
  
  // 设置
  settings: {
    title: '设置',
    fontSize: '字体大小',
    textColor: '文本颜色',
    backgroundColor: '背景颜色',
    displayMode: '显示模式',
    displayModeInline: '行内模式',
    displayModeBlock: '块级模式'
  },
  
  // 示例
  examples: {
    title: '示例',
    basic: '基础公式',
    fraction: '分数',
    superscript: '上标/下标',
    integral: '积分',
    matrix: '矩阵',
    more: '更多示例'
  },
  
  // 消息
  copied: '已复制到剪贴板',
  errorTitle: '渲染错误',
  errorMessage: '请检查您的LaTeX语法'
}; 