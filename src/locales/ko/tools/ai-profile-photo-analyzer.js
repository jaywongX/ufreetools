export default {
    name: 'AI 프로필 사진 분석기 - 전문 헤드샷 분석 도구',
    description: '프로필 사진과 헤드샷을 분석하는 무료 온라인 도구입니다. 머리 위치, 미소, 눈 맞춤, 조명 품질에 대한 AI 기반 피드백을 받아 전문적인 사진을 개선하세요.',
    inputTitle: '사진 업로드',
    outputTitle: '분석 결과',
    dragTip: '여기에 사진을 끌어다 놓거나 클릭하여 업로드하세요',
    supported: '지원 형식: PNG, JPEG, BMP, WEBP',
    analyzeBtn: '사진 분석',
    downloadBtn: '다운로드',
    noOutput: '아직 분석된 사진이 없습니다',
    loadSample: '샘플 사진 불러오기',
    preview: '사진 미리보기',
    clearAll: '모두 지우기',
    originalImage: '원본 사진',
    deleteImage: '사진 삭제',
    batchDownload: '일괄 다운로드 (ZIP)',
    exportFormat: '내보내기 형식',
    imageQuality: '이미지 품질',
    zoomIn: '확대',
    zoomOut: '축소',
    resetView: '보기 초기화',
    fullscreen: '전체 화면 미리보기',
    analysisResults: '분석 결과',
    overallScore: '전체 점수',
    headPosition: '머리 위치',
    smileDetection: '미소 감지',
    eyeContact: '눈 맞춤',
    lightingQuality: '조명 품질',
    recommendations: '추천 사항',
    noFaceDetected: '이 이미지에서 얼굴이 감지되지 않았습니다. 얼굴이 명확하게 보이는 사진을 업로드해 주세요.',
    disclaimer: '면책 조항',
    disclaimerText: '이 도구는 프로필 사진을 분석하기 위해 AI를 사용합니다. 결과는 참고용일 뿐이며 이미지 품질 및 조명 조건에 따라 달라질 수 있습니다. 모든 처리는 브라우저에서 이루어지며 사진은 어떤 서버에도 업로드되지 않습니다.',
    modelInfo: '브라우저에서 얼굴 감지 및 인식을 위한 오픈 소스 JavaScript API인 face-api.js에 의해 구동됩니다.',
    
    positions: {
        straight: '똑바로',
        slightlyTilted: '약간 기울어짐',
        tilted: '기울어짐',
        unknown: '알 수 없음'
    },
    
    tips: {
        headStraight: '훌륭합니다! 머리가 똑바로 위치해 있어 전문적인 사진에 이상적입니다.',
        headSlightlyTilted: '머리가 약간 기울어져 있습니다. 더 똑바른 자세가 더 전문적으로 보일 수 있습니다.',
        headTilted: '머리가 눈에 띄게 기울어져 있습니다. 전문적인 사진을 위해 머리를 똑바로 유지하세요.',
        
        smileLow: '더 자연스럽게 웃어보세요. 친근하고 자신감 있게 보일 것입니다.',
        smileMedium: '미소가 더 매력적일 수 있습니다. 자연스럽고 편안한 미소를 시도해 보세요.',
        smileGood: '좋은 미소입니다! 친근하고 전문적으로 보입니다.',
        smileExcellent: '훌륭한 미소입니다! 매우 친근하고 자신감 있게 보입니다.',
        
        eyeContactLow: '더 나은 눈 맞춤을 위해 카메라를 직접 바라보세요.',
        eyeContactMedium: '눈 맞춤이 개선될 수 있습니다. 카메라 렌즈를 직접 바라보세요.',
        eyeContactGood: '좋은 눈 맞춤입니다. 참여적이고 주의 깊게 보입니다.',
        eyeContactExcellent: '훌륭한 눈 맞춤입니다. 자신감 있고 참여적으로 보입니다.',
        
        lightingLow: '조명이 너무 어둡거나 고르지 않습니다. 더 나은 조명 조건에서 사진을 찍어보세요.',
        lightingMedium: '조명이 개선될 수 있습니다. 자연광, 확산광이 가장 효과적입니다.',
        lightingGood: '좋은 조명입니다. 얼굴이 잘 조명되어 명확하게 보입니다.',
        lightingExcellent: '훌륭한 조명입니다. 얼굴이 완벽하게 조명되어 있습니다.'
    },
    
    recommendations: {
        title: '개선 제안',
        improveHeadPosition: '더 전문적인 모습을 위해 머리를 똑바로 유지하고 카메라와 수평을 맞추세요.',
        improveSmile: '자신감과 친근함을 보여주는 자연스러운 미소를 시도해 보세요.',
        naturalSmile: '미소가 매우 넓게 보입니다 - 일부 상황에서는 약간 더 미묘한 미소가 더 전문적으로 보일 수 있습니다.',
        improveEyeContact: '더 나은 눈 맞춤을 위해 카메라 렌즈를 직접 바라보세요.',
        improveLighting: '더 나은 조명 조건에서 사진을 찍으세요 - 앞쪽에서 오는 자연광, 확산광이 가장 효과적입니다.',
        goodPhoto: '훌륭한 사진입니다! 프로필 사진에 대한 전문적인 기준을 충족합니다.'
    }
};