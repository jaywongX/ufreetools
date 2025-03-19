import codeFormatter from './tools/codeFormatter.js';
import jsonViewer from './tools/jsonViewer.js';
// 导入其他工具...

export default {
  // 工具通用文本
  common: {
    tryNow: '立即使用',
    relatedTools: '相关工具',
    popularTools: '热门工具',
    backToHome: '返回首页',
    copyLink: '复制链接',
    share: '分享',
    linkCopied: '链接已复制!',
    runTool: '运行工具',
    processing: '处理中',
    download: '下载',
    upload: '上传',
    dragAndDrop: '拖拽文件到此处',
    or: '或',
    browseFiles: '浏览文件',
    clearFile: '清除文件',
    fileSelected: '已选择文件',
    filesSelected: '已选择多个文件',
    noFileSelected: '未选择文件',
    fileTooBig: '文件过大',
    unsupportedFormat: '不支持的文件格式',
    preview: '预览',
    resetTool: '重置工具',
    settings: '设置',
    saveSettings: '保存设置',
    restoreDefaults: '恢复默认设置',
    history: '历史记录',
    clearHistory: '清除历史',
    noHistory: '无历史记录'
  },
  
  // 具体工具
  codeFormatter,
  jsonViewer,
  // 其他工具...
}; 