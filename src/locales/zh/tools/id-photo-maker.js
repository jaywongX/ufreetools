export default {
  name: '证件照制作器',
  description: '创建具有可自定义背景和尺寸的专业证件照',
  upload: {
    title: '上传图像',
    dropzone: '将图像拖放到此处或点击浏览',
    or: '或者',
    camera: '使用相机拍照',
    constraints: '最大尺寸：10MB。格式：JPG、PNG、WEBP',
    takePicture: '拍照',
    retake: '重新拍摄'
  },
  editing: {
    title: '编辑照片',
    faceDetection: '人脸检测',
    autoDetect: '自动检测人脸',
    manualMode: '手动调整',
    zoom: '缩放',
    rotate: '旋转',
    brightness: '亮度',
    contrast: '对比度',
    saturation: '饱和度',
    filters: '滤镜'
  },
  background: {
    title: '背景',
    original: '原始',
    white: '白色',
    blue: '蓝色',
    red: '红色',
    custom: '自定义颜色',
    transparent: '透明'
  },
  size: {
    title: '照片尺寸',
    presets: '尺寸预设',
    custom: '自定义尺寸',
    width: '宽度',
    height: '高度',
    unit: '单位',
    mm: '毫米',
    inches: '英寸',
    pixels: '像素'
  },
  presets: {
    passport: '护照 (35×45毫米)',
    visa: '签证 (2×2英寸)',
    drivingLicense: '驾照 (2.5×3英寸)',
    idCard: '身份证 (25×35毫米)',
    linkedin: '领英 (400×400像素)',
    schengen: '申根签证 (35×45毫米)',
    chinese: '中国签证 (33×48毫米)',
    indian: '印度签证 (2×2英寸)'
  },
  output: {
    title: '输出',
    preview: '预览',
    grid: '多张照片',
    columns: '列数',
    rows: '行数',
    spacing: '间距',
    background: '页面背景',
    paperSize: '纸张尺寸',
    download: '下载',
    print: '打印',
    downloadAs: '下载为',
    jpg: 'JPG图像',
    png: 'PNG图像',
    pdf: 'PDF文档'
  },
  actions: {
    apply: '应用',
    reset: '重置',
    undo: '撤销',
    redo: '重做',
    save: '保存照片',
    share: '分享'
  },
  messages: {
    noFaceDetected: '未检测到人脸。尝试手动调整或使用不同的照片。',
    multipleFacesDetected: '检测到多个人脸。使用最大的人脸。',
    processing: '正在处理您的照片...',
    downloadReady: '您的照片已准备好下载',
    photoSaved: '照片保存成功'
  }
} 