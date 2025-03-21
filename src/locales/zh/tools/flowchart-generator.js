export default {
  name: '流程图生成器',
  description: '使用简单的基于文本的语法创建流程图和图表',
  input: {
    title: '流程图定义',
    placeholder: '在此输入您的流程图定义...',
    loadExample: '加载示例',
    clear: '清除',
    uploadFile: '上传文件'
  },
  output: {
    title: '生成的流程图',
    downloadImage: '下载图片',
    downloadSVG: '下载SVG',
    copyImage: '复制图片',
    zoomIn: '放大',
    zoomOut: '缩小',
    fitView: '适应视图',
    resetView: '重置视图'
  },
  options: {
    title: '选项',
    theme: '主题',
    orientation: '方向',
    nodeShape: '节点形状',
    arrowStyle: '箭头样式',
    lineStyle: '线条样式',
    textPosition: '文本位置',
    fontSize: '字体大小',
    fontFamily: '字体系列',
    showGrid: '显示网格',
    autoRender: '自动渲染'
  },
  themes: {
    default: '默认',
    simple: '简约',
    forest: '森林',
    neutral: '中性',
    dark: '深色',
    business: '商务',
    custom: '自定义'
  },
  orientations: {
    topToBottom: '从上到下',
    bottomToTop: '从下到上',
    leftToRight: '从左到右',
    rightToLeft: '从右到左'
  },
  nodeShapes: {
    rectangle: '矩形',
    roundedRectangle: '圆角矩形',
    circle: '圆形',
    diamond: '菱形',
    hexagon: '六边形',
    parallelogram: '平行四边形'
  },
  arrowStyles: {
    arrow: '箭头',
    open: '开放',
    filled: '实心',
    diamond: '菱形',
    circle: '圆形'
  },
  lineStyles: {
    solid: '实线',
    dashed: '虚线',
    dotted: '点线',
    curved: '曲线',
    straight: '直线',
    orthogonal: '正交'
  },
  syntax: {
    title: '语法帮助',
    node: '节点',
    edge: '边',
    subgraph: '子图',
    comment: '注释',
    styling: '样式',
    showMore: '显示更多'
  },
  actions: {
    render: '渲染流程图',
    save: '保存图表',
    export: '导出',
    share: '分享'
  },
  messages: {
    renderSuccess: '流程图渲染成功',
    renderError: '渲染流程图错误：{error}',
    syntaxError: '语法错误：{error}',
    saved: '图表已保存',
    copied: '已复制到剪贴板',
    exported: '流程图已导出'
  }
} 