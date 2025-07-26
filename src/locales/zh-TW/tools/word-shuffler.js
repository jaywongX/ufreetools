export default {
  name: '文字洗牌器',
  description: '隨機打亂文本中的單詞、句子或行，同時保持格式',
  inputLabel: '輸入文本',
  inputPlaceholder: '在此輸入或貼上文本進行洗牌...',
  outputLabel: '洗牌結果',
  shuffleMode: '洗牌模式',

  modes: {
    word: '單詞',
    sentence: '句子',
    line: '行'
  },

  preserveOptions: '保留選項',
  preserveCapitalization: '保留大小寫',
  preservePunctuation: '保留標點符號',
  shuffleButton: '洗牌',
  copyButton: '複製結果',
  clearButton: '清除全部',
  copiedMessage: '已複製到剪貼簿！',
  tagline: '世界上最先進的文本隨機化工具',
  wordCount: '個詞',
  importButton: '導入文件',
  clearInputButton: '清空輸入',
  clearOutputButton: '清空輸出',
  downloadButton: '下載',
  useExampleButton: '使用示例',
  advancedOptions: '高級選項',
  delimiterOptions: '分隔符選項',
  wordDelimiters: '單詞分隔符',
  wordDelimitersHint: '用於分隔單詞的字符',
  sentenceDelimiters: '句子分隔符',
  sentenceDelimitersHint: '用於結束句子的字符',
  additionalOptions: '附加選項',
  repeatCount: '重複次數',
  repeatCountHint: '生成多個洗牌版本',
  shuffleGroup: '洗牌組大小',
  shuffleGroupHint: '按指定大小的組進行單詞洗牌',
  removeRepeatedWords: '移除重複單詞',
  preserveSpacing: '保留間距',
  examplesTitle: '示例',
  useThisExample: '使用此示例',
  helpTitle: '幫助與信息',
  whatIsTitle: '什麼是文字洗牌器？',
  whatIsDescription: '文字洗牌器是一種可以隨機化文本中單詞、句子、行、字符或段落順序的工具。它使用複雜的算法確保真正隨機的結果，同時保留您選擇的格式選項，如大小寫和標點符號。',
  howToUseTitle: '如何使用此工具',
  tipsTitle: '最佳使用技巧',

  modes: {
    word: '單詞',
    sentence: '句子',
    line: '行',
    character: '字符',
    paragraph: '段落'
  },

  howToUseSteps: [
    '在左側輸入框中輸入或貼上您的文本。',
    '在下方選擇您需要的洗牌模式和選項。',
    '點擊"洗牌"按鈕生成隨機文本。',
    '結果將顯示在右側的輸出框中。',
    '使用複製或下載按鈕保存您的結果。'
  ],

  tips: [
    '對於創意寫作練習，嘗試使用保留大小寫但移除標點符號的單詞模式。',
    '對於測試佈局，使用句子模式並啟用所有保留選項，以維持可讀但隨機的文本。',
    '使用字符模式可以根據文本輸入創建安全的密碼或代碼。',
    '分組洗牌功能允許您保持相關單詞在一起，同時仍然隨機化整體文本。',
    '需要多種變體？設置重複計數以一次生成多個洗牌版本。'
  ],

  examples: {
    basic: {
      title: '基本單詞洗牌',
      description: '在保持標點和大小寫的同時簡單隨機化單詞',
      input: '敏捷的棕色狐狸跳過懶狗。所有五個拳擊嚮導快速跳躍。',
      output: '棕色的敏捷狐狸懶狗跳過。嚮導快速跳躍五個拳擊。'
    },
    sentence: {
      title: '句子洗牌',
      description: '隨機化完整句子的順序',
      input: '第一句話在這裡。這是第二句。這是第三句。最後，我們有第四句話。',
      output: '這是第三句。第一句話在這裡。最後，我們有第四句話。這是第二句。'
    },
    creative: {
      title: '創意重組',
      description: '通過無格式約束洗牌單詞來生成新的創意文本',
      input: '詩歌是文字之美的有節奏創造。它是詩人認為內在和個人的感受的揭示，但讀者認識到這是他們自己的。',
      output: '美有節奏是文字詩人揭示但讀者個人內在認識到自己創造它作為他們詩歌感受相信的在那和一個是。'
    }
  },

  stepLabel: '步驟',
  emptyInputMessage: '請輸入要洗牌的文本',
  errorMessage: '洗牌處理出錯，請嘗試不同的洗牌模式或選項',
  downloadFileName: '已洗牌文本.txt',

  errorMessages: {
    shuffleError: '洗牌處理錯誤:',
    sentenceError: '句子洗牌錯誤:',
    copyError: '複製文本錯誤:'
  }
};