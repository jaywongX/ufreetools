export default {
    name: 'AI Profile Photo Analyzer - Professional Headshot Analysis Tool',
    description: 'Free online tool to analyze your profile photos and headshots. Get AI-powered feedback on head position, smile, eye contact, and lighting quality to improve your professional photos.',
    inputTitle: 'Upload Photo',
    outputTitle: 'Analysis Results',
    dragTip: 'Drag and drop photos here or click to upload',
    supported: 'Supported formats: PNG, JPEG, BMP, WEBP',
    analyzeBtn: 'Analyze Photo',
    downloadBtn: 'Download',
    noOutput: 'No analyzed photos yet',
    loadSample: 'Load Sample Photo',
    preview: 'Preview Photos',
    clearAll: 'Clear All',
    originalImage: 'Original Photo',
    deleteImage: 'Delete Photo',
    batchDownload: 'Batch Download (ZIP)',
    exportFormat: 'Export Format',
    imageQuality: 'Image Quality',
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    resetView: 'Reset View',
    fullscreen: 'Fullscreen Preview',
    analysisResults: 'Analysis Results',
    overallScore: 'Overall Score',
    headPosition: 'Head Position',
    smileDetection: 'Smile Detection',
    eyeContact: 'Eye Contact',
    lightingQuality: 'Lighting Quality',
    recommendations: 'Recommendations',
    noFaceDetected: 'No face detected in this image. Please upload a clear photo with a visible face.',
    disclaimer: 'Disclaimer',
    disclaimerText: 'This tool uses AI to analyze profile photos. Results are for reference only and may vary based on image quality and lighting conditions. All processing is done in your browser, and your photos are not uploaded to any server.',
    modelInfo: 'Powered by face-api.js, an open-source JavaScript API for face detection and recognition in the browser.',
    
    positions: {
        straight: 'Straight',
        slightlyTilted: 'Slightly Tilted',
        tilted: 'Tilted',
        unknown: 'Unknown'
    },
    
    tips: {
        headStraight: 'Great! Your head is positioned straight, which is ideal for professional photos.',
        headSlightlyTilted: 'Your head is slightly tilted. A straighter position may look more professional.',
        headTilted: 'Your head is noticeably tilted. Try to keep your head straight for professional photos.',
        
        smileLow: 'Try to smile more naturally to appear approachable and confident.',
        smileMedium: 'Your smile could be more engaging. Try a natural, relaxed smile.',
        smileGood: 'Good smile! You appear approachable and professional.',
        smileExcellent: 'Excellent smile! You appear very approachable and confident.',
        
        eyeContactLow: 'Try to look directly at the camera for better eye contact.',
        eyeContactMedium: 'Your eye contact could be improved. Look directly at the camera lens.',
        eyeContactGood: 'Good eye contact. You appear engaged and attentive.',
        eyeContactExcellent: 'Excellent eye contact. You appear confident and engaged.',
        
        lightingLow: 'The lighting is too dark or uneven. Try taking photos in better lighting conditions.',
        lightingMedium: 'The lighting could be improved. Natural, diffused light works best.',
        lightingGood: 'Good lighting. Your face is well-lit and clearly visible.',
        lightingExcellent: 'Excellent lighting. Your face is perfectly illuminated.'
    },
    
    recommendations: {
        title: 'Improvement Suggestions',
        improveHeadPosition: 'Keep your head straight and level with the camera for a more professional look.',
        improveSmile: 'Try a natural smile that shows confidence and approachability.',
        naturalSmile: 'Your smile appears very wide - a slightly more subtle smile might look more professional in some contexts.',
        improveEyeContact: 'Look directly at the camera lens to establish better eye contact.',
        improveLighting: 'Take photos in better lighting conditions - natural, diffused light from the front works best.',
        goodPhoto: 'Great photo! It meets professional standards for a profile picture.'
    }
};