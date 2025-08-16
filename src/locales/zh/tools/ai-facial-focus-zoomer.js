export default {
    name: 'AI 面部聚焦自动裁剪工具',
    description: '使用人工智能检测面部位置，自动裁剪并居中显示，优化社交媒体头像。基于 face-api.js 技术，支持 Instagram、LinkedIn、YouTube、Facebook、Twitter、TikTok、小红书、微信、Reddit 等主流社交平台尺寸预设。',
    inputTitle: '输入图片',
    outputTitle: '裁剪结果',
    dragTip: '拖放图片到这里或点击上传',
    supported: '支持的格式: PNG, JPEG, BMP, WEBP',
    processBtn: '开始处理',
    processing: '处理中...',
    downloadBtn: '下载',
    downloadSocial: '下载社交媒体包',
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

    // 参数设置
    paramSettings: '参数设置',
    cropMode: '裁剪模式',
    autoMode: '自动模式',
    squareMode: '正方形模式',
    customMode: '自定义尺寸',
    customWidth: '自定义宽度',
    customHeight: '自定义高度',
    faceMargin: '面部边距',
    confidence: '检测置信度',
    socialPresets: '社交媒体预设',

    // 分析结果
    analysisTitle: '分析结果',
    facesDetected: '检测到 {count} 个面部',
    noFaceDetected: '未检测到面部，请尝试使用更清晰的正面照片',
    socialPreview: '社交媒体预览',

    // 加载状态
    loadingModels: '正在加载面部识别模型',
    loadingModelsTip: '首次使用需要下载模型文件，请稍候...',

    // 底部声明
    disclaimer: '本工具仅用于图像处理和优化，不会永久存储您的图片',
    modelInfo: '使用 face-api.js 提供的面部识别技术'
};