export default {
    name: 'AI 證件照分析器 - 專業頭像評估工具',
    description: '免費在線工具，分析您的個人照片和證件照。獲取AI驅動的頭部姿勢、微笑、眼神接觸和光線質量反饋，以改善您的專業照片。',
    inputTitle: '上傳照片',
    outputTitle: '分析結果',
    dragTip: '拖放照片到這裡或點擊上傳',
    supported: '支持的格式: PNG, JPEG, BMP, WEBP',
    analyzeBtn: '分析照片',
    downloadBtn: '下載',
    noOutput: '暫無分析結果',
    loadSample: '加載示例照片',
    preview: '預覽照片',
    clearAll: '清除全部',
    originalImage: '原始照片',
    deleteImage: '刪除照片',
    batchDownload: '批量下載 (ZIP)',
    exportFormat: '導出格式',
    imageQuality: '圖片質量',
    zoomIn: '放大',
    zoomOut: '縮小',
    resetView: '重置視圖',
    fullscreen: '全屏預覽',
    analysisResults: '分析結果',
    overallScore: '總體評分',
    headPosition: '頭部姿勢',
    smileDetection: '微笑檢測',
    eyeContact: '眼神接觸',
    lightingQuality: '光線質量',
    recommendations: '改進建議',
    noFaceDetected: '未在圖像中檢測到人臉。請上傳一張有清晰可見人臉的照片。',
    disclaimer: '免責聲明',
    disclaimerText: '本工具使用AI分析個人照片。結果僅供參考，可能因圖像質量和光線條件而有所不同。所有處理均在您的瀏覽器中完成，您的照片不會上傳到任何服務器。',
    modelInfo: '由face-api.js提供支持，這是一個用於瀏覽器中人臉檢測和識別的開源JavaScript API。',
    
    positions: {
        straight: '正直',
        slightlyTilted: '輕微傾斜',
        tilted: '明顯傾斜',
        unknown: '未知'
    },
    
    tips: {
        headStraight: '很好！您的頭部姿勢正直，這對專業照片來說是理想的。',
        headSlightlyTilted: '您的頭部略微傾斜。更直的姿勢可能看起來更專業。',
        headTilted: '您的頭部明顯傾斜。嘗試保持頭部正直以獲得更專業的照片效果。',
        
        smileLow: '嘗試更自然地微笑，以顯得平易近人和自信。',
        smileMedium: '您的微笑可以更有感染力。嘗試自然、放鬆的微笑。',
        smileGood: '微笑不錯！您看起來平易近人且專業。',
        smileExcellent: '出色的微笑！您看起來非常平易近人且自信。',
        
        eyeContactLow: '嘗試直視相機以獲得更好的眼神接觸。',
        eyeContactMedium: '您的眼神接觸可以改進。直視相機鏡頭。',
        eyeContactGood: '良好的眼神接觸。您看起來專注且投入。',
        eyeContactExcellent: '出色的眼神接觸。您看起來自信且投入。',
        
        lightingLow: '光線太暗或不均勻。嘗試在更好的光線條件下拍照。',
        lightingMedium: '光線可以改進。自然、柔和的光線效果最佳。',
        lightingGood: '光線良好。您的臉部光線充足且清晰可見。',
        lightingExcellent: '光線出色。您的臉部完美地被照亮。'
    },
    
    recommendations: {
        title: '改進建議',
        improveHeadPosition: '保持頭部正直並與相機平齊，以獲得更專業的外觀。',
        improveSmile: '嘗試自然的微笑，展現自信和親和力。',
        naturalSmile: '您的微笑看起來很寬 - 在某些情況下，稍微含蓄的微笑可能看起來更專業。',
        improveEyeContact: '直視相機鏡頭以建立更好的眼神接觸。',
        improveLighting: '在更好的光線條件下拍照 - 來自正面的自然、柔和光線效果最佳。',
        goodPhoto: '很棒的照片！它符合專業證件照的標準。'
    }
};