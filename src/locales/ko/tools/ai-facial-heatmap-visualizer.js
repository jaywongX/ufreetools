export default {
    name: 'AI 얼굴 히트맵 시각화 도구',
    description: '인공지능을 사용하여 얼굴 특징을 분석하고, 히트맵을 생성하며, 사진 개선 제안을 제공합니다. 얼굴 인식 기술을 기반으로 사진의 조명과 구도를 최적화하는 데 도움을 줍니다.',
    inputTitle: '입력 이미지',
    outputTitle: '히트맵 분석',
    dragTip: '이미지를 여기에 끌어다 놓거나 클릭하여 업로드',
    supported: '지원되는 형식: PNG, JPEG, BMP, WEBP',
    processBtn: '히트맵 생성',
    downloadBtn: '다운로드',
    noOutput: '아직 출력 이미지 없음',
    loadSample: '샘플 이미지 로드',
    preview: '이미지 미리보기',
    clearAll: '모두 지우기',
    originalImage: '원본 이미지',
    deleteImage: '이미지 삭제',
    batchDownload: '일괄 다운로드 (ZIP)',
    exportFormat: '내보내기 형식',
    imageQuality: '이미지 품질',
    zoomIn: '확대',
    zoomOut: '축소',
    resetView: '보기 초기화',
    fullscreen: '전체 화면 미리보기',
    closePreview: '미리보기 닫기',
    analysisTitle: '분석 결과',
    noFaceDetected: '얼굴이 감지되지 않았습니다. 더 선명한 정면 사진을 사용해 보세요',
    loadingModels: '얼굴 인식 모델 로딩 중',
    loadingModelsTip: '첫 사용 시 모델 파일을 다운로드해야 합니다. 잠시만 기다려 주세요...',
    disclaimer: '이 도구는 이미지 분석 및 교육 목적으로만 사용되며 이미지를 영구적으로 저장하지 않습니다',
    modelInfo: 'face-api.js에서 제공하는 얼굴 인식 기술 사용',
    
    // 매개변수 설정 관련 번역
    paramSettings: '매개변수 설정',
    heatmapIntensity: '히트맵 강도',
    heatmapRadius: '히트 포인트 크기',
    colorScheme: '색상 구성표',
    showLandmarks: '랜드마크 표시',
    
    expressions: {
        neutral: '무표정',
        happy: '행복',
        sad: '슬픔',
        angry: '분노',
        fearful: '두려움',
        disgusted: '혐오',
        surprised: '놀람'
    },
    
    expressionDetected: '감지된 표정: {expression}',
    
    lightingTips: {
        leftDark: '왼쪽 조명이 부족합니다. 왼쪽에 광원을 추가해 보세요',
        rightDark: '오른쪽 조명이 부족합니다. 오른쪽에 광원을 추가해 보세요',
        tooLow: '전체적인 조명이 부족합니다. 주변 조명이나 플래시를 추가하는 것을 고려해 보세요',
        tooHigh: '조명이 너무 강합니다. 과노출을 일으킬 수 있으니 광원을 줄이거나 부드러운 조명을 사용하는 것을 고려해 보세요',
        good: '좋은 조명입니다. 얼굴 조명이 균일합니다'
    },
    
    positionTips: {
        tooLeft: '얼굴 위치가 너무 왼쪽에 있습니다. 오른쪽으로 이동하는 것이 좋습니다',
        tooRight: '얼굴 위치가 너무 오른쪽에 있습니다. 왼쪽으로 이동하는 것이 좋습니다',
        tooHigh: '얼굴 위치가 너무 높습니다. 아래로 이동하는 것이 좋습니다',
        tooLow: '얼굴 위치가 너무 낮습니다. 위로 이동하는 것이 좋습니다',
        tooSmall: '프레임 내 얼굴 비율이 너무 작습니다. 더 가까이 다가가는 것이 좋습니다',
        tooBig: '프레임 내 얼굴 비율이 너무 큽니다. 촬영 거리를 늘리는 것이 좋습니다'
    }
};