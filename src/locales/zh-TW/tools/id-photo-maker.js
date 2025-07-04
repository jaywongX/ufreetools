export default {
  name: '證件照製作器',
  description: '創建具有可自定義背景和尺寸的專業證件照',
  upload: {
    title: '上傳圖像',
    dropzone: '將圖像拖放到此處或點擊瀏覽',
    or: '或者',
    camera: '使用相機拍照',
    constraints: '最大尺寸：10MB。格式：JPG、PNG、WEBP',
    takePicture: '拍照',
    retake: '重新拍攝'
  },
  editing: {
    title: '編輯照片',
    faceDetection: '人臉檢測',
    autoDetect: '自動檢測人臉',
    manualMode: '手動調整',
    zoom: '縮放',
    rotate: '旋轉',
    brightness: '亮度',
    contrast: '對比度',
    saturation: '飽和度',
    filters: '濾鏡'
  },
  background: {
    title: '背景',
    original: '原始',
    white: '白色',
    blue: '藍色',
    red: '紅色',
    custom: '自定義顏色',
    transparent: '透明'
  },
  size: {
    title: '照片尺寸',
    presets: '尺寸預設',
    custom: '自定義尺寸',
    width: '寬度',
    height: '高度',
    unit: '單位',
    mm: '毫米',
    inches: '英寸',
    pixels: '像素'
  },
  presets: {
    passport: '護照 (35×45毫米)',
    visa: '簽證 (2×2英寸)',
    drivingLicense: '駕照 (2.5×3英寸)',
    idCard: '身份證 (25×35毫米)',
    linkedin: '領英 (400×400像素)',
    schengen: '申根簽證 (35×45毫米)',
    chinese: '中國簽證 (33×48毫米)',
    indian: '印度簽證 (2×2英寸)'
  },
  output: {
    title: '輸出',
    preview: '預覽',
    grid: '多張照片',
    columns: '列數',
    rows: '行數',
    spacing: '間距',
    background: '頁面背景',
    paperSize: '紙張尺寸',
    download: '下載',
    print: '打印',
    downloadAs: '下載為',
    jpg: 'JPG圖像',
    png: 'PNG圖像',
    pdf: 'PDF文檔'
  },
  actions: {
    apply: '應用',
    reset: '重置',
    undo: '撤銷',
    redo: '重做',
    save: '保存照片',
    share: '分享'
  },
  messages: {
    noFaceDetected: '未檢測到人臉。嘗試手動調整或使用不同的照片。',
    multipleFacesDetected: '檢測到多個人臉。使用最大的人臉。',
    processing: '正在處理您的照片...',
    downloadReady: '您的照片已準備好下載',
    photoSaved: '照片保存成功'
  }
}