export default {
    name: 'STL/3MF模型預覽 - 線上3D模型檢視器',
    description: '免費線上STL和3MF模型預覽工具，支援拖曳上傳、3D旋轉檢視、模型資訊顯示、線框模式、截圖匯出等功能，無需安裝任何軟體。',
    dragTip: '拖放STL/3MF檔案到這裡或點擊上傳（支援批次）',
    supported: '支援的格式: STL、3MF',
    fileList: '檔案清單',
    clearAll: '清除全部',
    noModel: '暫無模型，請上傳STL或3MF檔案',
    loading: '載入中...',
    loadError: '載入失敗，請檢查檔案格式',
    retry: '重試',
    retryInit: '重設初始化',
    renderInitFailed: '3D渲染初始化失敗',
    
    // 模型資訊
    modelInfo: '模型資訊',
    vertices: '頂點數',
    faces: '面數',
    fileSize: '檔案大小',
    dimensions: '尺寸',
    width: '寬',
    height: '高',
    depth: '深',
    unit: '單位',
    
    // 視圖控制
    viewControls: '視圖控制',
    resetView: '重設視角',
    wireframe: '線框模式',
    autoRotate: '自動旋轉',
    fullscreen: '全螢幕',
    exitFullscreen: '退出全螢幕',
    fullscreenFailed: '全螢幕失敗',
    
    // 渲染設定
    renderSettings: '渲染設定',
    backgroundColor: '背景顏色',
    materialColor: '材質顏色',
    showGrid: '顯示網格',
    showAxes: '顯示座標軸',
    ambientLight: '環境光強度',
    directionalLight: '方向光強度',
    
    // 匯出功能
    export: '匯出',
    screenshot: '截圖匯出',
    screenshotFormat: '截圖格式',
    transparentBg: '透明背景',
    
    // 預設材質
    presetMaterials: '預設材質',
    materialPla: 'PLA塑膠',
    materialResin: '樹脂質感',
    materialMetal: '金屬質感',
    materialDefault: '預設',
    
    // 預設背景
    presetBackgrounds: '預設背景',
    bgChecker: '棋盤格',
    bgWhite: '純白',
    bgBlack: '純黑',
    bgGradient: '漸層',
    
    // 提示
    tipsTitle: '使用小提示',
    tipContent: '支援STL（二進位和ASCII格式）和3MF檔案。滑鼠左鍵拖動旋轉，右鍵拖動平移，滾輪縮放。雙擊模型可自動居中。',
    
    // 錯誤訊息
    unsupportedFormat: '不支援的檔案格式，請上傳STL或3MF檔案',
    parseError: '無法解析檔案，請確保檔案格式正確',
    readError: '讀取檔案失敗，請重試',
    webglError: '您的瀏覽器不支援WebGL，請嘗試使用其他瀏覽器',
    unsupported3mf: '3MF格式暫不支援，請使用STL格式檔案',
};