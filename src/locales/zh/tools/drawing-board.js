export default {
  name: '简易画板',
  description: '在线绘图工具，支持自由绘制、更改颜色和画笔大小',

  // 工具栏
  tools: {
    brush: '画笔',
    eraser: '橡皮擦',
    clear: '清空画布',
    save: '保存图片',
    undo: '撤销',
    redo: '重做',
    apply: '应用'
  },

  // 设置
  settings: {
    brushSize: '画笔大小',
    color: '颜色',
    opacity: '不透明度',
    backgroundColor: '背景颜色'
  },

  // 颜色选择器
  colors: {
    black: '黑色',
    white: '白色',
    red: '红色',
    green: '绿色',
    blue: '蓝色',
    yellow: '黄色',
    orange: '橙色',
    purple: '紫色',
    pink: '粉色',
    brown: '棕色',
    gray: '灰色',
    custom: '自定义颜色'
  },

  // 画布设置
  canvas: {
    width: '宽度',
    height: '高度',
    resize: '调整画布大小',
    orientation: '方向',
    portrait: '纵向',
    landscape: '横向',
    square: '正方形'
  },

  // 提示和消息
  messages: {
    saveSuccess: '图片已保存',
    confirmClear: '确定要清空画布吗？所有未保存的内容将丢失。',
    unsupportedBrowser: '您的浏览器不支持Canvas，请使用现代浏览器。',
    fileNamePrompt: '请输入文件名',
    defaultFileName: '我的画作'
  },

  // 工具介绍
  aboutTitle: '关于简易画板',

  aboutDescription: '简易画板是一个直观易用的在线绘图工具，让您可以自由发挥创意进行绘画和创作。无论是随手涂鸦、制作简单插图，还是记录想法，这个工具都能满足您的需求。',
  featuresTitle: '主要功能',
  feature1: '自由绘制，支持多种颜色和画笔大小',
  feature2: '橡皮擦功能，轻松修改绘图内容',
  feature3: '撤销和重做功能，方便纠正错误',
  feature4: '可调节画笔透明度，创造丰富的绘画效果',
  feature5: '一键清空画布，重新开始创作',
  feature6: '支持保存作品为图片格式',
  howToUseTitle: '如何使用',
  howToUseStep1: '1. 选择画笔工具和颜色开始绘画',
  howToUseStep2: '2. 使用滑块调整画笔大小和不透明度',
  howToUseStep3: '3. 如需修改，可以使用橡皮擦工具擦除内容',
  howToUseStep4: '4. 可以随时撤销或重做操作',
  howToUseStep5: '5. 完成后，点击保存按钮下载您的作品',
  tipsTitle: '使用小贴士',
  tip1: '使用较细的画笔进行精细绘制，较粗的画笔填充大面积',
  tip2: '调低不透明度可以创造水彩效果或半透明效果',
  tip3: '善用撤销功能，不必担心画错',
  tip4: '先画出大致轮廓，再进行细节填充',
  tip5: '尝试不同颜色组合，创造丰富多彩的作品'
}; 