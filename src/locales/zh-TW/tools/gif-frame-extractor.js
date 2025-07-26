export default {
  name: "GIF幀提取器",
  description: "從GIF動畫中提取單個幀",
  uploadBtn: "選擇GIF",
  resetBtn: "重置",
  extractBtn: "提取幀",
  extractingBtn: "提取中...",
  downloadAllBtn: "下載所有幀",

  upload: {
    title: "上傳GIF",
    dropzone: "將GIF文件拖放到此處或點擊瀏覽",
    maxSize: "最大文件大小：20MB",
    onlyGif: "僅支援GIF文件",
    selectGif: "請選擇一個GIF文件"
  },

  analysis: {
    title: "GIF信息",
    dimensions: "尺寸",
    frameCount: "幀數",
    duration: "持續時間",
    fps: "每秒幀數",
    fileSize: "文件大小",
    loopCount: "循環次數",
    infinite: "無限",
    fileName: "文件名",
    size: "尺寸",
    totalFrames: "總幀數",
    notExtracted: "未提取"
  },

  extraction: {
    title: "幀提取",
    selectFrames: "選擇幀",
    allFrames: "所有幀",
    rangeOfFrames: "幀範圍",
    from: "從",
    to: "到",
    specificFrames: "特定幀",
    frameNumbers: "幀編號（逗號分隔）",
    everyNth: "每N幀",
    nth: "每",
    frames: "幀",
    selectFirst: "第一幀",
    selectLast: "最後一幀",
    selectMiddle: "中間幀",
    selectKeyFrames: "自動檢測關鍵幀"
  },

  output: {
    title: "導出設置",
    format: "輸出格式",
    png: "PNG",
    jpeg: "JPEG",
    webp: "WebP",
    scaling: "縮放",
    originalSize: "原始大小",
    customSize: "自定義大小",
    width: "寬度",
    height: "高度",
    quality: "質量",
    qualityValue: "質量: {value}%",
    lowQuality: "低質量 (小文件)",
    highQuality: "高質量 (大文件)",
    naming: "文件命名",
    pattern: "模式",
    filename: "原始文件名",
    framenumber: "幀編號",
    timestamp: "時間戳",
    preview: "預覽",
    downloadOptions: "下載選項",
    separateFiles: "單獨文件",
    zipArchive: "ZIP歸檔",
    spritesheet: "精靈表",
    gridSize: "網格大小",
    columns: "列數",
    animation: "新動畫"
  },

  frames: {
    title: "提取的幀",
    frameInfo: "第{number}幀，共{total}幀",
    frame: "幀",
    delay: "延遲：{delay}毫秒",
    downloadFrame: "下載",
    copyFrame: "複製",
    selectAll: "全選",
    unselectAll: "取消全選",
    invertSelection: "反選",
    noFrames: "暫無提取的幀",
    extractFirst: "請先提取幀"
  },

  actions: {
    extract: "提取幀",
    preview: "預覽",
    downloadSelected: "下載選中項",
    downloadAll: "下載全部",
    createSpritesheet: "創建精靈表",
    createNewGif: "創建新GIF",
    cancel: "取消",
    processing: "處理中..."
  },

  messages: {
    extractionComplete: "幀提取完成",
    extracting: "正在提取幀...",
    noFramesSelected: "未選擇幀",
    processingGif: "正在處理GIF...",
    invalidGif: "無效的GIF文件",
    framesCopied: "幀已複製到剪貼板",
    downloadStarted: "下載已開始",
    spritesheetCreated: "精靈表創建成功",
    frameDownloaded: "幀已下載",
    preparingFrames: "正在準備所有幀，請稍候...",
    allFramesDownloaded: "已下載所有幀",
    downloadError: "下載所有幀失敗",
    resetComplete: "已重置",
    fileEmpty: "文件數據為空"
  }
};