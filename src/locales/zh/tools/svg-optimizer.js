export default {
  name: 'SVG优化器',
  description: '优化和清理SVG文件以提高性能和减小文件大小',

  upload: {
    title: '上传SVG',
    dropzone: '拖放SVG文件到此处或点击上传',
    or: '或者',
    pasteCode: '粘贴SVG代码',
    maxSize: '最大文件大小：5MB',
    onlySvg: '只支持SVG格式文件',
    selected: '已选择',
    changeFile: '更换文件'
  },

  input: {
    title: '输入SVG',
    pasteHere: '在此粘贴SVG代码...',
    loadExample: '加载示例',
    clear: '清除',
    validate: '验证SVG'
  },

  output: {
    title: '优化结果',
    copyToClipboard: '复制到剪贴板',
    download: '下载SVG',
    beforeSize: '原始大小',
    afterSize: '优化后大小',
    reduction: '减少量',
    reductionBy: '减少了',
    svgCode: 'SVG代码'
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
    removeCommentsDesc: '移除注释和cdata部分',
    removeHiddenElements: '移除隐藏元素',
    removeEmptyContainers: '移除空容器',
    removeUnusedDefs: '移除未使用的定义',
    removeViewBox: '移除viewBox',
    keepViewBox: '保留viewBox',
    keepViewBoxDesc: '保留viewBox属性以确保SVG可缩放性',
    cleanupIDs: '清理ID',
    cleanupIDsDesc: '移除或减短未引用的ID',
    convertColors: '将颜色转换为十六进制',
    removeMetadata: '移除元数据',
    removeMetadataDesc: '移除&lt;metadata&gt;元素',
    removeDoctype: '移除文档类型',
    removeXMLProcInst: '移除XML指令',
    removeEditorsNS: '移除编辑器命名空间',
    collapseGroups: '合并组',
    collapseGroupsDesc: '合并没有特殊属性的组元素',
    convertPathData: '优化路径数据',
    convertPathDataDesc: '转换路径数据为相对坐标，减少小数点位数等',
    convertTransforms: '优化变换',
    convertShapeToPath: '形状转路径',
    convertShapeToPathDesc: '将基本形状转换为&lt;path&gt;元素',
    removeUselessStrokeAndFill: '移除无用的描边和填充',
    moveElemsAttrsToGroup: '将元素属性移至组',
    mergePaths: '合并路径',
    minifyStyles: '压缩样式',
    inlineStyles: '内联样式',
    inlineStylesDesc: '将&lt;style&gt;元素中的样式转为内联',
    cleanupNumericValues: '四舍五入数值',
    precision: '数值精度',
    decimalPlaces: '位小数',
    lowPrecision: '低精度 (更小体积)',
    highPrecision: '高精度 (更好质量)',
    removeDimensions: '移除宽高属性',
    removeDimensionsDesc: '移除宽度/高度属性，使用viewBox控制大小',
    sortAttrs: '属性排序',
    sortAttrsDesc: '按字母顺序排列元素属性'
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
    optimize: '开始优化',
    optimizing: '优化中...',
    resetOptions: '重置选项',
    download: '下载优化后的SVG',
    copy: '复制代码',
    copyCode: '复制代码',
    viewCode: '查看代码',
    viewPreview: '查看预览'
  },

  messages: {
    optimizationSuccess: 'SVG优化成功',
    optimizationFailed: 'SVG优化失败：{error}',
    invalidSvg: '无效的SVG文件或代码',
    copied: '已复制到剪贴板',
    copyFailed: '复制失败，请手动复制',
    downloaded: '优化后的SVG已下载',
    emptyInput: '请提供要优化的SVG代码或文件',
    onlySvgAllowed: '请上传SVG格式文件!',
    failedToLoadLibrary: '无法加载SVGO库'
  }
}; 