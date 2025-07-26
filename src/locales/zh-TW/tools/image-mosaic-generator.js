export default {
  name: '圖像馬賽克生成器',
  description: '通過將小圖像組合成更大的圖片來創建馬賽克藝術',

  upload: {
    title: '上傳主圖像',
    dropzone: '將主圖像拖放到此處或點擊瀏覽',
    maxSize: '最大檔案大小：15MB',
    supportedFormats: '支援的格式：JPG、PNG、WEBP'
  },

  tiles: {
    title: '瓦片圖像',
    uploadTiles: '上傳瓦片圖像',
    dropzoneTiles: '將瓦片圖像拖放到此處或點擊瀏覽',
    maxTiles: '最多{count}張圖像',
    useFolder: '上傳圖像資料夾',
    orUseSample: '或使用範例圖庫',
    sampleSets: '範例瓦片集',
    nature: '自然',
    people: '人物',
    art: '藝術',
    abstract: '抽象',
    animals: '動物',
    clearAll: '清除所有瓦片'
  },

  settings: {
    title: '馬賽克設置',
    tileSize: '瓦片大小',
    small: '小塊 (細緻)',
    medium: '中',
    large: '大塊 (粗糙)',
    square: '方形',
    circle: '圓形',
    applicationMode: '馬賽克應用方式',
    all: '全圖',
    selectRegion: '選擇區域',
    selectingRegion: '選擇區域中...',
    autoDetectFaces: '自動檢測人臉',
    detectFaces: '檢測人臉',
    detectFacesDescription: '檢測圖片中的人臉並自動為其應用馬賽克',
    edgeSmoothing: '邊緣平滑',
    edgeSmoothingDescription: '平滑馬賽克塊的邊緣，使過渡更自然',
    custom: '自訂',
    width: '寬度',
    height: '高度',
    tilesWide: '瓦片寬度數',
    tilesHigh: '瓦片高度數',
    colorMatch: '顏色匹配',
    intensity: '強度',
    low: '低',
    high: '高',
    reuseTiles: '重複使用瓦片',
    allowDuplicates: '允許重複',
    maxUses: '每個瓦片最大使用次數',
    colorAdjustment: '顏色調整',
    adjustTiles: '調整瓦片顏色以匹配',
    blendOriginal: '與原始圖像混合',
    blendAmount: '混合量',
    random: '隨機變化',
    shuffle: '隨機排列瓦片'
  },

  advanced: {
    title: '進階選項',
    algorithm: '匹配算法',
    algorithms: {
      average: '平均顏色',
      dominant: '主要顏色',
      histogram: '顏色直方圖',
      pattern: '模式匹配'
    },
    tileShape: '瓦片形狀',
    shapes: {
      square: '正方形',
      circle: '圓形',
      hexagon: '六邊形',
      triangle: '三角形',
      random: '隨機'
    },
    tileGap: '瓦片間隙',
    borderColor: '邊框顏色',
    backgroundColor: '背景顏色'
  },

  output: {
    fileName: '檔案名稱',
    title: '輸出',
    preview: '預覽',
    original: '原始',
    mosaic: '馬賽克',
    sideBySide: '並排顯示',
    zoomIn: '放大',
    zoomOut: '縮小',
    download: '下載馬賽克',
    asJpg: '下載為JPG',
    asPng: '下載為PNG',
    highRes: '高解析度',
    resolution: '輸出解析度',
    format: '格式',
    quality: '品質',
    size: '尺寸',
    pixel: '像素',
    pleaseSelectImage: '請選擇圖片',
    pleaseSelectImageAndAdjustSettings: '請選擇圖片並調整設置'
  },

  actions: {
    generate: '生成馬賽克',
    regenerate: '重新生成',
    cancel: '取消生成',
    reset: '重置',
    detectFaces: '檢測人臉',
    saveSettings: '儲存設置',
    loadSettings: '載入設置'
  },

  messages: {
    generating: '正在生成馬賽克...這可能需要一些時間。',
    generationComplete: '馬賽克生成成功！',
    notEnoughTiles: '瓦片圖像不足。請上傳更多圖像。',
    tileProcessing: '正在處理瓦片圖像：{progress}%',
    downloadStarted: '下載已開始',
    settingsSaved: '設置已儲存',
    selecting: '選擇區域中...',
    preview: '應用馬賽克後的效果將顯示在這裡',
    faceDetected: '已檢測到人臉區域',
    facesDetected: '已檢測到{count}個人臉',
    noFacesDetected: '未檢測到人臉',
    loadingModels: '正在載入人臉檢測模型...',
    faceDetectionFailed: '人臉檢測失敗',
    reset: '已重置',
    error: '錯誤：{message}'
  }
};