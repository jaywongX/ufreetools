export default {
  name: '图像马赛克生成器',
  description: '通过将小图像组合成更大的图片来创建马赛克艺术',

  upload: {
    title: '上传主图像',
    dropzone: '将主图像拖放到此处或点击浏览',
    maxSize: '最大文件大小：15MB',
    supportedFormats: '支持的格式：JPG、PNG、WEBP'
  },

  tiles: {
    title: '瓦片图像',
    uploadTiles: '上传瓦片图像',
    dropzoneTiles: '将瓦片图像拖放到此处或点击浏览',
    maxTiles: '最多{count}张图像',
    useFolder: '上传图像文件夹',
    orUseSample: '或使用示例图库',
    sampleSets: '示例瓦片集',
    nature: '自然',
    people: '人物',
    art: '艺术',
    abstract: '抽象',
    animals: '动物',
    clearAll: '清除所有瓦片'
  },

  settings: {
    title: '马赛克设置',
    tileSize: '瓦片大小',
    small: '小块 (细致)',
    medium: '中',
    large: '大块 (粗糙)',
    square: '方形',
    circle: '圆形',
    applicationMode: '马赛克应用方式',
    all: '全图',
    selectRegion: '选择区域',
    selectingRegion: '选择区域中...',
    autoDetectFaces: '自动检测人脸',
    detectFaces: '检测人脸',
    detectFacesDescription: '检测图片中的人脸并自动为其应用马赛克',
    edgeSmoothing: '边缘平滑',
    edgeSmoothingDescription: '平滑马赛克块的边缘，使过渡更自然',
    custom: '自定义',
    width: '宽度',
    height: '高度',
    tilesWide: '瓦片宽度数',
    tilesHigh: '瓦片高度数',
    colorMatch: '颜色匹配',
    intensity: '强度',
    low: '低',
    high: '高',
    reuseTiles: '重复使用瓦片',
    allowDuplicates: '允许重复',
    maxUses: '每个瓦片最大使用次数',
    colorAdjustment: '颜色调整',
    adjustTiles: '调整瓦片颜色以匹配',
    blendOriginal: '与原始图像混合',
    blendAmount: '混合量',
    random: '随机变化',
    shuffle: '随机排列瓦片'
  },

  advanced: {
    title: '高级选项',
    algorithm: '匹配算法',
    algorithms: {
      average: '平均颜色',
      dominant: '主要颜色',
      histogram: '颜色直方图',
      pattern: '模式匹配'
    },
    tileShape: '瓦片形状',
    shapes: {
      square: '正方形',
      circle: '圆形',
      hexagon: '六边形',
      triangle: '三角形',
      random: '随机'
    },
    tileGap: '瓦片间隙',
    borderColor: '边框颜色',
    backgroundColor: '背景颜色'
  },

  output: {
    fileName: '文件名',
    title: '输出',
    preview: '预览',
    original: '原始',
    mosaic: '马赛克',
    sideBySide: '并排显示',
    zoomIn: '放大',
    zoomOut: '缩小',
    download: '下载马赛克',
    asJpg: '下载为JPG',
    asPng: '下载为PNG',
    highRes: '高分辨率',
    resolution: '输出分辨率',
    format: '格式',
    quality: '质量',
    size: '尺寸',
    pixel: '像素',
    pleaseSelectImage: '请选择图片',
    pleaseSelectImageAndAdjustSettings: '请选择图片并调整设置'
  },

  actions: {
    generate: '生成马赛克',
    regenerate: '重新生成',
    cancel: '取消生成',
    reset: '重置',
    detectFaces: '检测人脸',
    saveSettings: '保存设置',
    loadSettings: '加载设置'
  },

  messages: {
    generating: '正在生成马赛克...这可能需要一些时间。',
    generationComplete: '马赛克生成成功！',
    notEnoughTiles: '瓦片图像不足。请上传更多图像。',
    tileProcessing: '正在处理瓦片图像：{progress}%',
    downloadStarted: '下载已开始',
    settingsSaved: '设置已保存',
    selecting: '选择区域中...',
    preview: '应用马赛克后的效果将显示在这里',
    faceDetected: '已检测到人脸区域',
    facesDetected: '已检测到{count}个人脸',
    noFacesDetected: '未检测到人脸',
    loadingModels: '正在加载人脸检测模型...',
    faceDetectionFailed: '人脸检测失败',
    reset: '已重置',
    error: '错误：{message}'
  }
}; 