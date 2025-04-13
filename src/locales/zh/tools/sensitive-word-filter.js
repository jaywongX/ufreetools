export default {
  name: '敏感词过滤器',
  description: '检测和过滤文本中的敏感词，支持自定义敏感词库和过滤规则',
  input: {
    title: '输入文本',
    placeholder: '请输入需要检测的文本内容...',
    loadSample: '加载示例',
    clearInput: '清除输入',
    uploadFile: '上传文本文件'
  },
  output: {
    title: '过滤后文本',
    original: '原始文本',
    filtered: '过滤后文本',
    statistics: '统计数据',
    copyOutput: '复制过滤后文本',
    clearOutput: '清除输出',
    download: '下载过滤后文本'
  },
  options: {
    title: '过滤选项',
    filterMode: '过滤模式',
    caseSensitive: '区分大小写',
    wholeWordOnly: '仅完整词',
    customReplacement: '自定义替换',
    replacementChar: '替换字符',
    highlightWords: '高亮敏感词',
    customDictionary: '自定义词典',
    importDictionary: '导入词典',
    exportDictionary: '导出词典'
  },
  filterModes: {
    replace: '替换敏感词',
    highlight: '高亮敏感词',
    remove: '移除敏感词',
    detect: '仅检测'
  },
  dictionary: {
    title: '词汇词典',
    add: '添加词汇',
    remove: '移除',
    clear: '清空词典',
    wordInput: '输入要添加的词',
    categories: '分类',
    severity: '严重程度',
    bulkAdd: '批量添加',
    search: '搜索词典'
  },
  categories: {
    profanity: '脏话',
    slurs: '诽谤',
    adult: '成人内容',
    offensive: '冒犯性内容',
    violence: '暴力',
    discrimination: '歧视',
    personal: '个人信息',
    custom: '自定义'
  },
  severityLevels: {
    low: '低',
    medium: '中',
    high: '高',
    critical: '严重'
  },
  statistics: {
    totalWords: '总词数',
    sensitiveWords: '敏感词数',
    uniqueSensitiveWords: '唯一敏感词数',
    severityBreakdown: '严重程度分布',
    categoryBreakdown: '类别分布',
    cleanlinessScore: '纯净度分数'
  },
  filterOptions: {
    title: '过滤模式',
    modes: {
      asterisk: '替换为 *',
      custom: '自定义替换字符',
      remove: '删除敏感词'
    },
    replaceChar: {
      title: '替换字符',
      placeholder: '输入替换字符'
    }
  },
  customWords: {
    title: '自定义敏感词库',
    addWord: '添加词语',
    addPrompt: '请输入要添加的敏感词：',
    removeWord: '移除'
  },
  actions: {
    filter: '开始过滤',
    reset: '重置',
    processing: '处理中...',
    clearAll: '全部清除',
    copyFiltered: '复制过滤后文本',
    downloadReport: '下载报告',
    resetSettings: '重置设置'
  },
  results: {
    title: '过滤结果',
    tabs: {
      filteredResult: '过滤结果',
      detectionReport: '检测报告'
    },
    filteredText: {
      title: '过滤后的文本',
      copy: '复制结果',
      empty: '无过滤结果显示'
    },
    statistics: {
      detectedCount: '检测到的敏感词数量',
      retentionRate: '文本保留率',
      totalWords: '文本总字数'
    },
    detectedWords: {
      title: '检测到的敏感词',
      empty: '未检测到敏感词'
    }
  },
  messages: {
    copied: '已复制到剪贴板',
    copyFailed: '复制失败，请手动复制',
    noInput: '请输入要过滤的文本',
    inputTooLong: '输入文本过长',
    wordAdded: '词语已添加到敏感词库',
    wordExists: '此词已存在于敏感词库中',
    wordRemoved: '词语已从敏感词库中移除',
    filterSuccess: '文本过滤成功',
    noSensitiveWords: '未发现敏感词',
    dictionaryCleared: '词典已清空',
    dictionaryImported: '词典已导入',
    dictionaryExported: '词典已导出',
    emptyText: '请输入要过滤的文本'
  },
  article: {
    title: '敏感词过滤器：全面的文本内容过滤工具',
    functionality: {
      title: '工具功能与特点',
      description: '<strong>敏感词过滤器</strong>是一款强大的文本处理工具，专为识别和过滤文本中的敏感、不适当或冒犯性内容而设计。它使用先进的模式匹配算法来检测潜在问题词汇和短语，然后根据您的偏好自动替换或删除它们。这款文本过滤工具支持自定义词典、多种过滤模式，并提供检测到的敏感内容的详细统计分析。'
    },
    useCases: {
      title: '实际应用和使用场景',
      list: [
        '<strong>网站内容审核</strong>：自动筛选用户生成的内容，如评论、论坛帖子和评论，以维护安全和尊重的在线环境。',
        '<strong>教育材料审查</strong>：确保教学材料和学生提交的作业不含不适当语言，适用于课堂或教育平台。',
        '<strong>客户服务内容筛选</strong>：过滤对外通信，验证它们是否保持专业标准并避免潜在的冒犯性语言。',
        '<strong>社交媒体管理</strong>：在社交媒体平台上发布前审查和清理内容，防止违反平台政策。',
        '<strong>文本数据准备</strong>：通过删除冒犯性或有偏见的语言来清理用于机器学习和分析的文本数据集。',
        '<strong>企业通信合规</strong>：验证内部和外部通信是否符合企业语言政策和专业标准。'
      ]
    },
    faq: {
      title: '关于敏感词过滤的常见问题',
      items: [
        {
          question: '敏感词检测的准确性如何？',
          answer: '<strong>敏感词检测</strong>系统采用精确的模式匹配算法，具有很高的准确性。但是，上下文感知过滤（理解词语背后的含义）仍然具有挑战性。该工具允许您查看检测到的词语并自定义词典，以提高特定需求的准确性。'
        },
        {
          question: '我可以创建并保存自己的自定义词库吗？',
          answer: '是的，<strong>自定义敏感词库</strong>功能允许您添加特定于您内容需求的敏感词。您可以轻松地将词语添加到过滤器中，这些词语将在过滤过程中应用。'
        },
        {
          question: '有哪些过滤模式可用？',
          answer: '该工具提供多种<strong>文本过滤模式</strong>：用星号(*)替换敏感词、使用自定义替换字符或从文本中完全删除敏感词。您可以选择最适合您需求的模式。'
        },
        {
          question: '这个工具能处理不同的语言吗？',
          answer: '是的，<strong>多语言敏感词过滤器</strong>适用于各种语言，尽管其效果可能因语言而异。该工具主要专注于字符模式匹配，适用于不同的书写系统。'
        },
        {
          question: '如何处理大量文本？',
          answer: '对于<strong>批量文本过滤</strong>，只需将内容粘贴到输入区域即可。该工具经过优化，可以高效处理大量文本，尽管极大的文本可能需要更多处理时间。对于非常大的文档，考虑分段处理它们。'
        }
      ]
    },
    tutorial: {
      title: '使用敏感词过滤器的步骤指南',
      steps: [
        '<strong>输入文本</strong>：首先在输入文本区域输入或粘贴您想要过滤的文本。',
        '<strong>配置过滤选项</strong>：选择您偏好的过滤模式（替换为星号、自定义字符或删除词语）。',
        '<strong>自定义敏感词库</strong>（可选）：通过点击"添加词语"按钮，添加您希望检测和过滤的特定词语。',
        '<strong>开始过滤</strong>：点击"开始过滤"按钮处理您的文本并检测敏感内容。',
        '<strong>查看结果</strong>：在"过滤结果"选项卡中检查过滤后的文本，并在"检测报告"选项卡中查看统计分析。',
        '<strong>复制或保存结果</strong>：将过滤后的文本复制到剪贴板，以便在您的应用程序或文档中使用。'
      ]
    }
  }
} 