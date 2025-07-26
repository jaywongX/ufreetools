export default {
  name: 'LaTeX公式生成器',
  description: '即時生成並匯出LaTeX數學公式',

  // UI文本
  input: '輸入LaTeX代碼',

  output: '預覽結果',
  renderButton: '渲染公式',
  exportButton: '匯出為圖片',
  copyButton: '複製LaTeX代碼',

  // 設置
  settings: {
    title: '設置',
    fontSize: '字型大小',
    textColor: '文字顏色',
    backgroundColor: '背景顏色',
    displayMode: '顯示模式',
    displayModeInline: '行內模式',
    displayModeBlock: '區塊模式'
  },

  // 範例
  examples: {
    title: '範例',
    basic: '基礎公式',
    fraction: '分數',
    superscript: '上標/下標',
    integral: '積分',
    matrix: '矩陣',
    more: '更多範例'
  },

  // 訊息
  copied: '已複製到剪貼簿',

  errorTitle: '渲染錯誤',
  errorMessage: '請檢查您的LaTeX語法'
};