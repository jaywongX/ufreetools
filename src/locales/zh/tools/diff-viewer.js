export default {
  name: '差异查看器',
  description: '比较文本和代码文件以查找差异',
  options: {
    viewMode: '查看模式',
    highlightLanguage: '语法高亮',
    ignoreWhitespace: '忽略空白',
    ignoreCase: '忽略大小写',
    contextLines: '上下文行数',
    lineNumbers: '行号',
    wordDiff: '单词级差异'
  },
  viewModes: {
    split: '分割视图',
    unified: '统一视图',
    side: '并排视图'
  },
  sections: {
    original: '原始',
    modified: '修改后',
    diff: '差异'
  },
  actions: {
    compare: '比较',
    swap: '交换两侧',
    copy: '复制',
    copyDiff: '复制差异',
    clear: '清除',
    download: '下载差异',
    uploadOriginal: '上传原始文件',
    uploadModified: '上传修改后文件'
  },
  messages: {
    copied: '已复制到剪贴板！',
    diffGenerated: '差异生成成功',
    identical: '文件完全相同',
    linesAdded: '添加了{count}行',
    linesRemoved: '删除了{count}行',
    linesChanged: '修改了{count}行',
    diffSummary: '{added}个添加, {removed}个删除, {changed}个修改'
  }
} 