export default {
  name: 'Git冲突解决模拟器',
  description: '模拟Git合并冲突场景，练习解决代码冲突',
  options: {
    conflictStyle: '冲突样式',
    resolveStrategy: '解决策略',
    showLineNumbers: '显示行号'
  },
  actions: {
    generateConflict: '生成冲突',
    resolve: '解决冲突',
    copy: '复制结果',
    reset: '重置'
  },
  messages: {
    copied: '已复制到剪贴板！',
    resolveSuccess: '冲突解决成功',
    resolveError: '解决冲突时出错'
  }
} 