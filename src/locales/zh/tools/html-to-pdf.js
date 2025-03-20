export default {
  name: 'HTML转PDF转换器',
  description: '使用可自定义选项将HTML文档转换为PDF文件',
  options: {
    pageSize: '页面大小',
    orientation: '方向',
    margins: '页边距',
    includeStyles: '包含样式',
    includeImages: '包含图片',
    headerTemplate: '页眉模板',
    footerTemplate: '页脚模板',
    pageNumbers: '页码',
    scale: '缩放'
  },
  pageSizes: {
    letter: '信纸',
    legal: '法律文书',
    tabloid: '小报',
    a3: 'A3',
    a4: 'A4',
    a5: 'A5',
    custom: '自定义'
  },
  orientations: {
    portrait: '纵向',
    landscape: '横向'
  },
  sections: {
    htmlInput: 'HTML输入',
    cssInput: 'CSS输入（可选）',
    preview: '预览'
  },
  actions: {
    convert: '转换为PDF',
    preview: '生成预览',
    download: '下载PDF',
    copy: '复制HTML',
    clear: '清除',
    uploadHTML: '上传HTML',
    uploadCSS: '上传CSS'
  },
  messages: {
    copied: '已复制到剪贴板！',
    generating: '正在生成PDF...',
    conversionSuccess: 'HTML成功转换为PDF',
    conversionError: '转换HTML为PDF时出错',
    previewGenerated: '预览已生成',
    invalidHtml: '无效的HTML结构',
    fileSaved: 'PDF文件已保存为{filename}'
  }
} 