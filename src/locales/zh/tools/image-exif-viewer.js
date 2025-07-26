export default {
  name: '图像EXIF查看器',
  description: '查看和分析照片中的EXIF元数据',

  upload: {
    title: '上传图像',
    dropzone: '将图像拖放到此处或点击浏览',
    maxSize: '最大文件大小：15MB',
    supportedFormats: '支持的格式：JPG、TIFF、HEIC、PNG',
    anyImageFile: '任何包含EXIF数据的图像文件'
  },

  display: {
    title: '图像信息',
    noExif: '在此图像中未找到EXIF数据',
    basicInfo: '基本信息',
    camera: '相机信息',
    exposure: '曝光信息',
    location: '位置信息',
    dates: '日期信息',
    advanced: '高级EXIF数据',
    thumbnail: 'EXIF缩略图'
  },

  exif: {
    fileName: '文件名',
    fileSize: '文件大小',
    fileType: '文件类型',
    dimensions: '尺寸',
    make: '相机制造商',
    model: '相机型号',
    lens: '镜头',
    focalLength: '焦距',
    focalLength35: '焦距（35mm）',
    aperture: '光圈',
    fNumber: 'F值',
    exposureTime: '曝光时间',
    shutterSpeed: '快门速度',
    iso: 'ISO',
    exposureMode: '曝光模式',
    exposureProgram: '曝光程序',
    meteringMode: '测光模式',
    flash: '闪光灯',
    flashMode: '闪光灯模式',
    whiteBalance: '白平衡',
    exposureBias: '曝光补偿',
    latitude: '纬度',
    longitude: '经度',
    altitude: '海拔',
    locationName: '位置名称',
    dateOriginal: '拍摄日期',
    dateDigitized: '数字化日期',
    dateModified: '修改日期',
    software: '软件',
    artist: '艺术家',
    copyright: '版权',
    resolution: '分辨率',
    colorSpace: '色彩空间',
    orientation: '方向',
    compression: '压缩',
    bitsPerSample: '每样本位数',
    maxAperture: '最大光圈',
    contrast: '对比度',
    saturation: '饱和度',
    sharpness: '锐度',
    brightness: '亮度',
    sceneCaptureType: '场景捕捉类型',
    gainControl: '增益控制',
    serialNumber: '序列号',
    width: '宽度',
    height: '高度',
  },

  map: {
    title: '照片位置',
    show: '在地图上显示',
    noLocation: '无位置数据可用',
    directions: '获取路线',
    copy: '复制坐标',
    warning: '警告：此图像包含位置数据。分享时请小心。'
  },

  actions: {
    showAll: '显示所有元数据',
    hideAll: '隐藏所有元数据',
    copyAll: '复制所有元数据',
    save: '将元数据保存为JSON',
    removeMeta: '移除元数据',
    download: '下载清除元数据的图像',
    viewFullSize: '查看原始大小',
    refresh: '重新加载数据'
  },

  settings: {
    title: '显示设置',
    showGroups: '分组元数据',
    showRaw: '显示原始值',
    showTechnical: '显示技术数据',
    showFiltered: '隐藏空字段',
    darkMode: '深色模式',
    mapProvider: '地图提供商'
  },

  tips: {
    privacy: '隐私提示：照片可能包含个人数据，如位置和设备信息。',
    noExif: '看不到EXIF数据？一些社交媒体和图像编辑工具会去除元数据。',
    rawView: '切换到"原始视图"查看所有可用元数据。'
  },

  messages: {
    copied: '元数据已复制到剪贴板',
    saved: '元数据已保存为JSON文件',
    noExif: '在此图像中未找到EXIF数据',
    metadataRemoved: '元数据移除成功',
    imageLoaded: '图像加载成功',
    notUse: '未使用',
    use: '已使用',
    auto: '自动',
    manual: '手动',
    reset: '已重置',
    exifExtracted: '已提取EXIF数据',
  },

  error: {
    copyFailed: '复制失败',
    exportFailed: '导出失败',
    exifExtractionFailed: '提取EXIF数据失败',
    imageLoadFailed: '加载图片失败',
  },

  orientation: {
    normal: '正常',
    horizontalFlip: '水平翻转',
    rotate180: '旋转180°',
    verticalFlip: '垂直翻转',
    rotate90VerticalFlip: '顺时针旋转90°并垂直翻转',
    rotate90: '顺时针旋转90°',
    rotate90HorizontalFlip: '顺时针旋转90°并水平翻转',
    rotate270: '逆时针旋转90°'
  }
}; 