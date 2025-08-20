export default {
  name: 'LIDAR點雲檢視器 - 線上三維點雲資料視覺化工具',
  description:
    '免費線上LIDAR點雲檢視器，支援LAS、XYZ、PLY、PCD格式。提供三維視覺化、多種著色模式、互動式導覽與資料分析功能',
  inputTitle: '輸入點雲檔案',
  outputTitle: '三維點雲視圖',
  dragTip: '將點雲檔案拖放到此處或點擊上傳',
  supported: '支援的格式：LAS、XYZ、PLY、PCD、TXT',
  loadFromUrl: '從URL載入',
  load: '載入',
  loadSample: '載入範例資料',
  coloringMode: '著色模式',
  elevation: '高程著色',
  intensity: '強度著色',
  classification: '分類著色',
  rgb: 'RGB著色',
  pointSize: '點大小',
  pointDensity: '點密度',
  enableAnimation: '啟用動畫',
  showTrajectory: '顯示軌跡線',
  showSensorData: '顯示感測器資料',
  fileInfo: '檔案資訊',
  fileName: '檔名',
  pointCount: '點數量',
  fileSize: '檔案大小',
  bounds: '邊界範圍',
  resetView: '重設視圖',
  exportImage: '匯出影像',
  loading: '載入中...',
  noData: '請上傳點雲檔案或載入範例資料',
  controls: {
    rotate: '滑鼠拖曳：旋轉視圖',
    zoom: '滾輪：縮放視圖',
    pan: 'Shift+拖曳：平移視圖'
  },
  stats: {
    visible: '可見點數',
    total: '總點數',
    points: '個點'
  },
  metadata: {
    title: 'LAS 中繼資料',
    systemId: '系統識別碼',
    software: '產生軟體',
    version: 'LAS 版本',
    creationDate: '建立日期',
    pointFormat: '點資料格式',
    vlrCount: 'VLR 數量',
    returnStats: '各次回波統計',
    extent: '空間範圍'
  },
  error: {
    loadFailed: '載入點雲檔案失敗，請檢查檔案格式是否正確',
    urlLoadFailed: '從 URL 載入檔案失敗，請檢查網址是否正確'
  },
  disclaimer: {
    title: '技術說明',
    content:
      '本工具使用 WebGL 技術在瀏覽器中實現三維點雲視覺化，所有資料處理均於本機完成，確保資料安全。',
    formats:
      '支援格式：LAS（雷射測距標準格式）、XYZ（ASCII 點雲）、PLY（多邊形檔格式）、PCD（點雲資料格式）',
    performance:
      '效能提示：大型點雲檔案可能需要較長載入時間，建議使用現代瀏覽器以獲得最佳效能。'
  }
};