export default {
  name: '渐变配色生成器',
  description: '创建并自定义漂亮的CSS渐变，实时预览效果，复制代码到您的项目中',
  
  gradientTypes: {
    title: '渐变类型',
    linear: '线性渐变',
    radial: '径向渐变',
    conic: '锥形渐变'
  },
  
  controls: {
    title: '颜色控制',
    addColor: '添加颜色',
    color: '颜色',
    position: '位置 (%)',
    delete: '删除颜色',
    angle: '角度',
    degrees: '度',
    shape: '形状',
    circle: '圆形',
    ellipse: '椭圆形',
    positionX: '位置 X (%)',
    positionY: '位置 Y (%)',
    size: '尺寸',
    closestSide: '最近边',
    closestCorner: '最近角',
    farthestSide: '最远边',
    farthestCorner: '最远角',
    fromAngle: '起始角度'
  },
  
  output: {
    title: 'CSS代码',
    copyCode: '复制代码',
    preview: '预览区域',
    copied: 'CSS代码已复制到剪贴板！',
    download: '下载PNG'
  },
  
  presets: {
    title: '渐变预设',
    apply: '应用预设',
    sunnyMorning: '晴朗早晨',
    winterNeva: '冬日涅瓦',
    rareWind: '稀有风',
    deepBlue: '深蓝',
    perfect: '完美白',
    cloudyKnoxville: '多云诺克斯维尔',
    greenBeach: '绿色海滩',
    plumBath: '梅花浴',
    everlasting: '永恒天空'
  },

  accessibility: {
    colorPicker: '颜色选择器',
    deleteSwatch: '删除颜色停止点',
    dragToReposition: '拖动以重新定位颜色停止点'
  },
  
  actions: {
    reset: '重置',
    generateCSS: '生成CSS',
    clickToCopy: '点击并拷贝代码',
    completeEdit: '完成编辑'
  },
  
  messages: {
    copied: 'CSS代码已复制到剪贴板！',
    noColors: '添加至少两种颜色以创建渐变',
    maxColors: '已达到最大颜色停止点数量(10)',
    useKeyboard: '使用Delete键删除选中的颜色停止点',
    invalidHex: '请输入有效的十六进制颜色代码',
    downloadError: '下载PNG失败，请稍后重试',
    preview: '预览'
  },
  
  anglePresets: {
    top: '上',
    topRight: '右上',
    right: '右',
    bottomRight: '右下',
    bottom: '下',
    bottomLeft: '左下',
    left: '左',
    topLeft: '左上'
  },

  radialShapes: {
    circle: '圆形',
    ellipse: '椭圆'
  },

  radialSizes: {
    farthestCorner: '最远角',
    closestCorner: '最近角',
    farthestSide: '最远边',
    closestSide: '最近边',
  },
}