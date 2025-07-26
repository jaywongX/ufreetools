export default {
  name: '文字洗牌器',
  description: '随机打乱文本中的单词、句子或行，同时保持格式',
  inputLabel: '输入文本',
  inputPlaceholder: '在此输入或粘贴文本进行洗牌...',
  outputLabel: '洗牌结果',
  shuffleMode: '洗牌模式',

  modes: {
    word: '单词',
    sentence: '句子',
    line: '行'
  },

  preserveOptions: '保留选项',
  preserveCapitalization: '保留大小写',
  preservePunctuation: '保留标点符号',
  shuffleButton: '洗牌',
  copyButton: '复制结果',
  clearButton: '清除全部',
  copiedMessage: '已复制到剪贴板！',
  tagline: '世界上最先进的文本随机化工具',
  wordCount: '个词',
  importButton: '导入文件',
  clearInputButton: '清空输入',
  clearOutputButton: '清空输出',
  downloadButton: '下载',
  useExampleButton: '使用示例',
  advancedOptions: '高级选项',
  delimiterOptions: '分隔符选项',
  wordDelimiters: '单词分隔符',
  wordDelimitersHint: '用于分隔单词的字符',
  sentenceDelimiters: '句子分隔符',
  sentenceDelimitersHint: '用于结束句子的字符',
  additionalOptions: '附加选项',
  repeatCount: '重复次数',
  repeatCountHint: '生成多个洗牌版本',
  shuffleGroup: '洗牌组大小',
  shuffleGroupHint: '按指定大小的组进行单词洗牌',
  removeRepeatedWords: '移除重复单词',
  preserveSpacing: '保留间距',
  examplesTitle: '示例',
  useThisExample: '使用此示例',
  helpTitle: '帮助与信息',
  whatIsTitle: '什么是文字洗牌器？',
  whatIsDescription: '文字洗牌器是一种可以随机化文本中单词、句子、行、字符或段落顺序的工具。它使用复杂的算法确保真正随机的结果，同时保留您选择的格式选项，如大小写和标点符号。',
  howToUseTitle: '如何使用此工具',
  tipsTitle: '最佳使用技巧',

  modes: {
    word: '单词',
    sentence: '句子',
    line: '行',
    character: '字符',
    paragraph: '段落'
  },

  howToUseSteps: [
    '在左侧输入框中输入或粘贴您的文本。',
    '在下方选择您需要的洗牌模式和选项。',
    '点击"洗牌"按钮生成随机文本。',
    '结果将显示在右侧的输出框中。',
    '使用复制或下载按钮保存您的结果。'
  ],

  tips: [
    '对于创意写作练习，尝试使用保留大小写但移除标点符号的单词模式。',
    '对于测试布局，使用句子模式并启用所有保留选项，以维持可读但随机的文本。',
    '使用字符模式可以根据文本输入创建安全的密码或代码。',
    '分组洗牌功能允许您保持相关单词在一起，同时仍然随机化整体文本。',
    '需要多种变体？设置重复计数以一次生成多个洗牌版本。'
  ],

  examples: {
    basic: {
      title: '基本单词洗牌',
      description: '在保持标点和大小写的同时简单随机化单词',
      input: '敏捷的棕色狐狸跳过懒狗。所有五个拳击向导快速跳跃。',
      output: '棕色的敏捷狐狸懒狗跳过。向导快速跳跃五个拳击。'
    },
    sentence: {
      title: '句子洗牌',
      description: '随机化完整句子的顺序',
      input: '第一句话在这里。这是第二句。这是第三句。最后，我们有第四句话。',
      output: '这是第三句。第一句话在这里。最后，我们有第四句话。这是第二句。'
    },
    creative: {
      title: '创意重组',
      description: '通过无格式约束洗牌单词来生成新的创意文本',
      input: '诗歌是文字之美的有节奏创造。它是诗人认为内在和个人的感受的揭示，但读者认识到这是他们自己的。',
      output: '美有节奏是文字诗人揭示但读者个人内在认识到自己创造它作为他们诗歌感受相信的在那和一个是。'
    }
  },

  stepLabel: '步骤',
  emptyInputMessage: '请输入要洗牌的文本',
  errorMessage: '洗牌处理出错，请尝试不同的洗牌模式或选项',
  downloadFileName: '已洗牌文本.txt',

  errorMessages: {
    shuffleError: '洗牌处理错误:',
    sentenceError: '句子洗牌错误:',
    copyError: '复制文本错误:'
  }
};
