export default {
    name: 'AI 얼굴 포커스 자동 크롭 도구',
    description: '인공지능을 사용하여 얼굴 위치를 감지하고, 자동으로 크롭하여 중앙에 표시하며, 소셜 미디어 아바타를 최적화합니다. face-api.js 기술 기반으로, Instagram, LinkedIn, YouTube, Facebook, Twitter, TikTok, Xiaohongshu, WeChat, Reddit 등 주요 소셜 플랫폼의 프리셋 크기를 지원합니다.',
    inputTitle: '입력 이미지',
    outputTitle: '크롭 결과',
    dragTip: '여기에 이미지를 드래그 앤 드롭하거나 클릭하여 업로드',
    supported: '지원되는 형식: PNG, JPEG, BMP, WEBP',
    processBtn: '처리 시작',
    processing: '처리 중...',
    downloadBtn: '다운로드',
    downloadSocial: '소셜 미디어 패키지 다운로드',
    noOutput: '아직 출력 이미지 없음',
    loadSample: '샘플 이미지 로드',
    preview: '이미지 미리보기',
    clearAll: '모두 지우기',
    originalImage: '원본 이미지',
    deleteImage: '이미지 삭제',
    batchDownload: '배치 다운로드 (ZIP)',
    exportFormat: '내보내기 형식',
    imageQuality: '이미지 품질',
    zoomIn: '확대',
    zoomOut: '축소',
    resetView: '보기 초기화',
    fullscreen: '전체 화면 미리보기',
    
    // 매개변수 설정
    paramSettings: '매개변수 설정',
    cropMode: '크롭 모드',
    autoMode: '자동 모드',
    squareMode: '정사각형 모드',
    customMode: '사용자 정의 크기',
    customWidth: '사용자 정의 너비',
    customHeight: '사용자 정의 높이',
    faceMargin: '얼굴 여백',
    confidence: '감지 신뢰도',
    socialPresets: '소셜 미디어 프리셋',
    
    // 분석 결과
    analysisTitle: '분석 결과',
    facesDetected: '{count}개의 얼굴 감지됨',
    noFaceDetected: '얼굴이 감지되지 않았습니다. 더 선명한 정면 사진을 사용해 보세요',
    socialPreview: '소셜 미디어 미리보기',
    
    // 로딩 상태
    loadingModels: '얼굴 인식 모델 로딩 중',
    loadingModelsTip: '첫 사용 시 모델 파일 다운로드가 필요합니다. 잠시만 기다려 주세요...',
    
    // 푸터 면책 조항
    disclaimer: '이 도구는 이미지 처리 및 최적화 전용입니다. 귀하의 이미지는 영구적으로 저장되지 않습니다',
    modelInfo: 'face-api.js에서 제공하는 얼굴 인식 기술 사용'
};