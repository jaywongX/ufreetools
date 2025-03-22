export default {
  name: 'SVG优化器',
  description: '优化和清理SVG文件以提高性能和减小文件大小',
  upload: {
    title: '上传SVG',
    dropzone: '将SVG文件拖放到此处或点击浏览',
    or: '或者',
    pasteCode: '粘贴SVG代码',
    maxSize: '最大文件大小：5MB',
    onlySvg: '仅支持SVG文件'
  },
  input: {
    title: '输入SVG',
    pasteHere: '在此粘贴SVG代码...',
    loadExample: '加载示例',
    clear: '清除',
    validate: '验证SVG'
  },
  output: {
    title: '优化后的SVG',
    copyToClipboard: '复制到剪贴板',
    download: '下载SVG',
    beforeSize: '优化前大小',
    afterSize: '优化后大小',
    reduction: '减少量'
  },
  options: {
    title: '优化选项',
    preset: '预设',
    presets: {
      default: '默认',
      light: '轻度',
      aggressive: '激进',
      custom: '自定义'
    },
    removeComments: '移除注释',
    removeHiddenElements: '移除隐藏元素',
    removeEmptyContainers: '移除空容器',
    removeUnusedDefs: '移除未使用的定义',
    removeViewBox: '移除viewBox',
    cleanupIDs: '清理ID',
    convertColors: '将颜色转换为十六进制',
    removeMetadata: '移除元数据',
    removeDoctype: '移除文档类型',
    removeXMLProcInst: '移除XML指令',
    removeEditorsNS: '移除编辑器命名空间',
    collapseGroups: '折叠组',
    convertPathData: '优化路径数据',
    convertTransforms: '优化变换',
    removeUselessStrokeAndFill: '移除无用的描边和填充',
    moveElemsAttrsToGroup: '将元素属性移至组',
    mergePaths: '合并路径',
    minifyStyles: '压缩样式',
    inlineStyles: '内联样式',
    cleanupNumericValues: '四舍五入数值'
  },
  view: {
    title: '预览',
    original: '原始',
    optimized: '优化后',
    showBorder: '显示边框',
    backgroundColor: '背景颜色',
    grid: '显示网格',
    zoom: '缩放',
    toggleAnimation: '切换动画'
  },
  actions: {
    optimize: '优化SVG',
    resetOptions: '重置选项',
    download: '下载',
    copy: '复制代码',
    viewCode: '查看代码',
    viewPreview: '查看预览'
  },
  messages: {
    optimizationSuccess: 'SVG优化成功',
    optimizationFailed: 'SVG优化失败：{error}',
    invalidSvg: '无效的SVG文件或代码',
    copied: 'SVG代码已复制到剪贴板',
    downloaded: '优化后的SVG已下载',
    emptyInput: '请提供要优化的SVG代码或文件'
  }
} 