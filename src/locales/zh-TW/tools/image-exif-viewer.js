export default {
  name: '圖像EXIF檢視器',
  description: '檢視和分析照片中的EXIF元數據',

  upload: {
    title: '上傳圖像',
    dropzone: '將圖像拖放到此處或點擊瀏覽',
    maxSize: '最大檔案大小：15MB',
    supportedFormats: '支援的格式：JPG、TIFF、HEIC、PNG',
    anyImageFile: '任何包含EXIF數據的圖像檔案'
  },

  display: {
    title: '圖像資訊',
    noExif: '在此圖像中未找到EXIF數據',
    basicInfo: '基本資訊',
    camera: '相機資訊',
    exposure: '曝光資訊',
    location: '位置資訊',
    dates: '日期資訊',
    advanced: '進階EXIF數據',
    thumbnail: 'EXIF縮圖'
  },

  exif: {
    fileName: '檔案名稱',
    fileSize: '檔案大小',
    fileType: '檔案類型',
    dimensions: '尺寸',
    make: '相機製造商',
    model: '相機型號',
    lens: '鏡頭',
    focalLength: '焦距',
    focalLength35: '焦距（35mm）',
    aperture: '光圈',
    fNumber: 'F值',
    exposureTime: '曝光時間',
    shutterSpeed: '快門速度',
    iso: 'ISO',
    exposureMode: '曝光模式',
    exposureProgram: '曝光程序',
    meteringMode: '測光模式',
    flash: '閃光燈',
    flashMode: '閃光燈模式',
    whiteBalance: '白平衡',
    exposureBias: '曝光補償',
    latitude: '緯度',
    longitude: '經度',
    altitude: '海拔',
    locationName: '位置名稱',
    dateOriginal: '拍攝日期',
    dateDigitized: '數位化日期',
    dateModified: '修改日期',
    software: '軟體',
    artist: '藝術家',
    copyright: '版權',
    resolution: '解析度',
    colorSpace: '色彩空間',
    orientation: '方向',
    compression: '壓縮',
    bitsPerSample: '每樣本位數',
    maxAperture: '最大光圈',
    contrast: '對比度',
    saturation: '飽和度',
    sharpness: '銳度',
    brightness: '亮度',
    sceneCaptureType: '場景捕捉類型',
    gainControl: '增益控制',
    serialNumber: '序號',
    width: '寬度',
    height: '高度',
  },

  map: {
    title: '照片位置',
    show: '在地圖上顯示',
    noLocation: '無位置數據可用',
    directions: '獲取路線',
    copy: '複製座標',
    warning: '警告：此圖像包含位置數據。分享時請小心。'
  },

  actions: {
    showAll: '顯示所有元數據',
    hideAll: '隱藏所有元數據',
    copyAll: '複製所有元數據',
    save: '將元數據保存為JSON',
    removeMeta: '移除元數據',
    download: '下載清除元數據的圖像',
    viewFullSize: '查看原始大小',
    refresh: '重新載入數據'
  },

  settings: {
    title: '顯示設定',
    showGroups: '分組元數據',
    showRaw: '顯示原始值',
    showTechnical: '顯示技術數據',
    showFiltered: '隱藏空欄位',
    darkMode: '深色模式',
    mapProvider: '地圖提供商'
  },

  tips: {
    privacy: '隱私提示：照片可能包含個人數據，如位置和設備資訊。',
    noExif: '看不到EXIF數據？一些社交媒體和圖像編輯工具會去除元數據。',
    rawView: '切換到"原始檢視"查看所有可用元數據。'
  },

  messages: {
    copied: '元數據已複製到剪貼簿',
    saved: '元數據已保存為JSON檔案',
    noExif: '在此圖像中未找到EXIF數據',
    metadataRemoved: '元數據移除成功',
    imageLoaded: '圖像載入成功',
    notUse: '未使用',
    use: '已使用',
    auto: '自動',
    manual: '手動',
    reset: '已重置',
    exifExtracted: '已提取EXIF數據',
  },

  error: {
    copyFailed: '複製失敗',
    exportFailed: '匯出失敗',
    exifExtractionFailed: '提取EXIF數據失敗',
    imageLoadFailed: '載入圖片失敗',
  },

  orientation: {
    normal: '正常',
    horizontalFlip: '水平翻轉',
    rotate180: '旋轉180°',
    verticalFlip: '垂直翻轉',
    rotate90VerticalFlip: '順時針旋轉90°並垂直翻轉',
    rotate90: '順時針旋轉90°',
    rotate90HorizontalFlip: '順時針旋轉90°並水平翻轉',
    rotate270: '逆時針旋轉90°'
  }
};