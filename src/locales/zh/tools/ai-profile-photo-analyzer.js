export default {
    name: 'AI 证件照分析器 - 专业头像评估工具',
    description: '免费在线工具，分析您的个人照片和证件照。获取AI驱动的头部姿势、微笑、眼神接触和光线质量反馈，以改善您的专业照片。',
    inputTitle: '上传照片',
    outputTitle: '分析结果',
    dragTip: '拖放照片到这里或点击上传',
    supported: '支持的格式: PNG, JPEG, BMP, WEBP',
    analyzeBtn: '分析照片',
    downloadBtn: '下载',
    noOutput: '暂无分析结果',
    loadSample: '加载示例照片',
    preview: '预览照片',
    clearAll: '清除全部',
    originalImage: '原始照片',
    deleteImage: '删除照片',
    batchDownload: '批量下载 (ZIP)',
    exportFormat: '导出格式',
    imageQuality: '图片质量',
    zoomIn: '放大',
    zoomOut: '缩小',
    resetView: '重置视图',
    fullscreen: '全屏预览',
    analysisResults: '分析结果',
    overallScore: '总体评分',
    headPosition: '头部姿势',
    smileDetection: '微笑检测',
    eyeContact: '眼神接触',
    lightingQuality: '光线质量',
    recommendations: '改进建议',
    noFaceDetected: '未在图像中检测到人脸。请上传一张有清晰可见人脸的照片。',
    disclaimer: '免责声明',
    disclaimerText: '本工具使用AI分析个人照片。结果仅供参考，可能因图像质量和光线条件而有所不同。所有处理均在您的浏览器中完成，您的照片不会上传到任何服务器。',
    modelInfo: '由face-api.js提供支持，这是一个用于浏览器中人脸检测和识别的开源JavaScript API。',
    
    positions: {
        straight: '正直',
        slightlyTilted: '轻微倾斜',
        tilted: '明显倾斜',
        unknown: '未知'
    },
    
    tips: {
        headStraight: '很好！您的头部姿势正直，这对专业照片来说是理想的。',
        headSlightlyTilted: '您的头部略微倾斜。更直的姿势可能看起来更专业。',
        headTilted: '您的头部明显倾斜。尝试保持头部正直以获得更专业的照片效果。',
        
        smileLow: '尝试更自然地微笑，以显得平易近人和自信。',
        smileMedium: '您的微笑可以更有感染力。尝试自然、放松的微笑。',
        smileGood: '微笑不错！您看起来平易近人且专业。',
        smileExcellent: '出色的微笑！您看起来非常平易近人且自信。',
        
        eyeContactLow: '尝试直视相机以获得更好的眼神接触。',
        eyeContactMedium: '您的眼神接触可以改进。直视相机镜头。',
        eyeContactGood: '良好的眼神接触。您看起来专注且投入。',
        eyeContactExcellent: '出色的眼神接触。您看起来自信且投入。',
        
        lightingLow: '光线太暗或不均匀。尝试在更好的光线条件下拍照。',
        lightingMedium: '光线可以改进。自然、柔和的光线效果最佳。',
        lightingGood: '光线良好。您的脸部光线充足且清晰可见。',
        lightingExcellent: '光线出色。您的脸部完美地被照亮。'
    },
    
    recommendations: {
        title: '改进建议',
        improveHeadPosition: '保持头部正直并与相机平齐，以获得更专业的外观。',
        improveSmile: '尝试自然的微笑，展现自信和亲和力。',
        naturalSmile: '您的微笑看起来很宽 - 在某些情况下，稍微含蓄的微笑可能看起来更专业。',
        improveEyeContact: '直视相机镜头以建立更好的眼神接触。',
        improveLighting: '在更好的光线条件下拍照 - 来自正面的自然、柔和光线效果最佳。',
        goodPhoto: '很棒的照片！它符合专业证件照的标准。'
    }
};
