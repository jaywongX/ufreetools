export default {
    name: 'AI 面部熱力圖可視化工具',
    description: '使用人工智能分析面部特徵，生成熱力圖並提供照片改進建議。基於面部識別技術，幫助優化照片光線和構圖。',
    inputTitle: '輸入圖片',
    outputTitle: '熱力圖分析',
    dragTip: '拖放圖片到這裡或點擊上傳',
    supported: '支持的格式: PNG, JPEG, BMP, WEBP',
    processBtn: '生成熱力圖',
    downloadBtn: '下載',
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
    closePreview: '關閉預覽',
    analysisTitle: '分析結果',
    noFaceDetected: '未檢測到人臉，請嘗試使用更清晰的正面照片',
    loadingModels: '正在加載面部識別模型',
    loadingModelsTip: '首次使用需要下載模型文件，請稍候...',
    disclaimer: '本工具僅用於圖像分析和教育目的，不會永久存儲您的圖片',
    modelInfo: '使用 face-api.js 提供的面部識別技術',
    
    // 參數設置相關翻譯
    paramSettings: '參數設置',
    heatmapIntensity: '熱圖強度',
    heatmapRadius: '熱點大小',
    colorScheme: '顏色方案',
    showLandmarks: '顯示特徵點',
    
    expressions: {
        neutral: '中性表情',
        happy: '開心',
        sad: '悲傷',
        angry: '憤怒',
        fearful: '恐懼',
        disgusted: '厭惡',
        surprised: '驚訝'
    },
    
    expressionDetected: '檢測到表情: {expression}',
    
    lightingTips: {
        leftDark: '左側光線不足，可以嘗試增加左側光源',
        rightDark: '右側光線不足，可以嘗試增加右側光源',
        tooLow: '整體光線不足，建議增加環境光或閃光燈',
        tooHigh: '光線過強，可能導致過曝，建議減弱光源或使用柔光',
        good: '光線良好，面部照明均勻'
    },
    
    positionTips: {
        tooLeft: '人臉位置偏左，建議向右移動',
        tooRight: '人臉位置偏右，建議向左移動',
        tooHigh: '人臉位置偏高，建議向下移動',
        tooLow: '人臉位置偏低，建議向上移動',
        tooSmall: '人臉在畫面中比例過小，建議靠近拍攝',
        tooBig: '人臉在畫面中比例過大，建議增加拍攝距離'
    }
};