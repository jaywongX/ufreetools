export default {
    name: 'AI 面部热力图可视化工具',
    description: '使用人工智能分析面部特征，生成热力图并提供照片改进建议。基于面部识别技术，帮助优化照片光线和构图。',
    inputTitle: '输入图片',
    outputTitle: '热力图分析',
    dragTip: '拖放图片到这里或点击上传',
    supported: '支持的格式: PNG, JPEG, BMP, WEBP',
    processBtn: '生成热力图',
    downloadBtn: '下载',
    noOutput: '暂无输出图片',
    loadSample: '加载示例图片',
    preview: '预览图片',
    clearAll: '清除全部',
    originalImage: '原始图片',
    deleteImage: '删除图片',
    batchDownload: '批量下载 (ZIP)',
    exportFormat: '导出格式',
    imageQuality: '图片质量',
    zoomIn: '放大',
    zoomOut: '缩小',
    resetView: '重置视图',
    fullscreen: '全屏预览',
    closePreview: '关闭预览',
    analysisTitle: '分析结果',
    noFaceDetected: '未检测到人脸，请尝试使用更清晰的正面照片',
    loadingModels: '正在加载面部识别模型',
    loadingModelsTip: '首次使用需要下载模型文件，请稍候...',
    disclaimer: '本工具仅用于图像分析和教育目的，不会永久存储您的图片',
    modelInfo: '使用 face-api.js 提供的面部识别技术',
    
    // 参数设置相关翻译
    paramSettings: '参数设置',
    heatmapIntensity: '热图强度',
    heatmapRadius: '热点大小',
    colorScheme: '颜色方案',
    showLandmarks: '显示特征点',
    
    expressions: {
        neutral: '中性表情',
        happy: '开心',
        sad: '悲伤',
        angry: '愤怒',
        fearful: '恐惧',
        disgusted: '厌恶',
        surprised: '惊讶'
    },
    
    expressionDetected: '检测到表情: {expression}',
    
    lightingTips: {
        leftDark: '左侧光线不足，可以尝试增加左侧光源',
        rightDark: '右侧光线不足，可以尝试增加右侧光源',
        tooLow: '整体光线不足，建议增加环境光或闪光灯',
        tooHigh: '光线过强，可能导致过曝，建议减弱光源或使用柔光',
        good: '光线良好，面部照明均匀'
    },
    
    positionTips: {
        tooLeft: '人脸位置偏左，建议向右移动',
        tooRight: '人脸位置偏右，建议向左移动',
        tooHigh: '人脸位置偏高，建议向下移动',
        tooLow: '人脸位置偏低，建议向上移动',
        tooSmall: '人脸在画面中比例过小，建议靠近拍摄',
        tooBig: '人脸在画面中比例过大，建议增加拍摄距离'
    }
};