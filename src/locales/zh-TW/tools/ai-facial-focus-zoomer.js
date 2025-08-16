export default {
    name: 'AI 面部聚焦自動裁剪工具',
    description: '使用人工智能檢測面部位置，自動裁剪並居中顯示，優化社交媒體頭像。基於 face-api.js 技術，支持 Instagram、LinkedIn、YouTube、Facebook、Twitter、TikTok、小紅書、微信、Reddit 等主流社交平台尺寸預設。',
    inputTitle: '輸入圖片',
    outputTitle: '裁剪結果',
    dragTip: '拖放圖片到這裡或點擊上傳',
    supported: '支持的格式: PNG, JPEG, BMP, WEBP',
    processBtn: '開始處理',
    processing: '處理中...',
    downloadBtn: '下載',
    downloadSocial: '下載社交媒體包',
    noOutput: '暫無輸出圖片',
    loadSample: '加載示例圖片',
    preview: '預覽圖片',
    clearAll: '清除全部',
    originalImage: '原始圖片',
    deleteImage: '刪除圖片',
    batchDownload: '批量下載 (ZIP)',
    exportFormat: '導出格式',
    imageQuality: '圖片質量',
    zoomIn: '放大',
    zoomOut: '縮小',
    resetView: '重置視圖',
    fullscreen: '全屏預覽',
    
    // 參數設置
    paramSettings: '參數設置',
    cropMode: '裁剪模式',
    autoMode: '自動模式',
    squareMode: '正方形模式',
    customMode: '自定義尺寸',
    customWidth: '自定義寬度',
    customHeight: '自定義高度',
    faceMargin: '面部邊距',
    confidence: '檢測置信度',
    socialPresets: '社交媒體預設',
    
    // 分析結果
    analysisTitle: '分析結果',
    facesDetected: '檢測到 {count} 個面部',
    noFaceDetected: '未檢測到面部，請嘗試使用更清晰的正面照片',
    socialPreview: '社交媒體預覽',
    
    // 加載狀態
    loadingModels: '正在加載面部識別模型',
    loadingModelsTip: '首次使用需要下載模型文件，請稍候...',
    
    // 底部聲明
    disclaimer: '本工具僅用於圖像處理和優化，不會永久存儲您的圖片',
    modelInfo: '使用 face-api.js 提供的面部識別技術'
};