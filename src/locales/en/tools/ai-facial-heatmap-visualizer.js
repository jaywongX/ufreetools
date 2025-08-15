export default {
    name: 'AI Facial Heatmap Visualizer',
    description: 'Use artificial intelligence to analyze facial features, generate heatmaps, and provide photo improvement suggestions. Based on facial recognition technology to help optimize photo lighting and composition.',
    inputTitle: 'Input Image',
    outputTitle: 'Heatmap Analysis',
    dragTip: 'Drag and drop images here or click to upload',
    supported: 'Supported formats: PNG, JPEG, BMP, WEBP',
    processBtn: 'Generate Heatmap',
    downloadBtn: 'Download',
    noOutput: 'No output images yet',
    loadSample: 'Load Sample Image',
    preview: 'Preview Images',
    clearAll: 'Clear All',
    originalImage: 'Original Image',
    deleteImage: 'Delete Image',
    batchDownload: 'Batch Download (ZIP)',
    exportFormat: 'Export Format',
    imageQuality: 'Image Quality',
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    resetView: 'Reset View',
    fullscreen: 'Fullscreen Preview',
    closePreview: 'Close Preview',
    analysisTitle: 'Analysis Results',
    noFaceDetected: 'No face detected, please try using a clearer front-facing photo',
    loadingModels: 'Loading facial recognition models',
    loadingModelsTip: 'First-time use requires downloading model files, please wait...',
    disclaimer: 'This tool is for image analysis and educational purposes only and does not permanently store your images',
    modelInfo: 'Using facial recognition technology provided by face-api.js',
    
    // Parameter settings translations
    paramSettings: 'Parameter Settings',
    heatmapIntensity: 'Heatmap Intensity',
    heatmapRadius: 'Heat Point Size',
    colorScheme: 'Color Scheme',
    showLandmarks: 'Show Landmarks',
    
    expressions: {
        neutral: 'Neutral',
        happy: 'Happy',
        sad: 'Sad',
        angry: 'Angry',
        fearful: 'Fearful',
        disgusted: 'Disgusted',
        surprised: 'Surprised'
    },
    
    expressionDetected: 'Expression detected: {expression}',
    
    lightingTips: {
        leftDark: 'Insufficient light on the left side, try adding a light source on the left',
        rightDark: 'Insufficient light on the right side, try adding a light source on the right',
        tooLow: 'Overall lighting is insufficient, consider adding ambient light or flash',
        tooHigh: 'Light is too strong, may cause overexposure, consider reducing light source or using soft light',
        good: 'Good lighting, facial illumination is even'
    },
    
    positionTips: {
        tooLeft: 'Face position is too far left, suggest moving to the right',
        tooRight: 'Face position is too far right, suggest moving to the left',
        tooHigh: 'Face position is too high, suggest moving down',
        tooLow: 'Face position is too low, suggest moving up',
        tooSmall: 'Face proportion in the frame is too small, suggest moving closer',
        tooBig: 'Face proportion in the frame is too large, suggest increasing shooting distance'
    }
};