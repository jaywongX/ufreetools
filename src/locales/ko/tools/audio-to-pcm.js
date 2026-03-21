export default {
    name: '오디오를 PCM으로 변환 - 온라인 오디오 형식 변환 도구',
    description: '무료 온라인 오디오-PCM 변환 도구. WAV, MP3, FLAC, OGG, AAC, M4A 등 다양한 형식을 PCM 원시 오디오 데이터로 변환. 샘플링 레이트 설정, 채널 선택, 일괄 처리 지원. 음성 인식 및 오디오 분석에 적합.',
    inputTitle: '입력 오디오',
    outputTitle: '변환된 PCM 오디오',
    dragTip: '오디오 파일을 여기에 드래그 앤 드롭하거나 클릭하여 업로드 (일괄 지원)',
    pasteTip: '또는 Ctrl+V (Cmd+V)를 눌러 클립보드 오디오 파일 경로 붙여넣기',
    supported: '지원 형식: WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: 'PCM으로 변환',
    converting: '변환 중...',
    downloadBtn: 'PCM 다운로드',
    batchDownload: '일괄 다운로드 (ZIP)',
    noOutput: '변환 결과 없음',
    loadSample: '샘플 오디오 로드',
    preview: '오디오 미리보기',
    clearAll: '모두 지우기',
    originalAudio: '원본 오디오',
    deleteAudio: '오디오 삭제',
    
    sampleRateTitle: '샘플링 레이트 설정',
    sampleRateLabel: '샘플링 레이트: {rate} Hz',
    sampleRate8000: '8000 Hz (전화 품질)',
    sampleRate16000: '16000 Hz (음성 인식)',
    sampleRate22050: '22050 Hz (음성 품질)',
    sampleRate44100: '44100 Hz (CD 품질)',
    sampleRate48000: '48000 Hz (전문가 품질)',
    
    channelTitle: '채널 설정',
    channelStereo: '스테레오',
    channelMono: '모노',
    
    bitDepthTitle: '비트 깊이 설정',
    bitDepth8: '8비트 (저품질)',
    bitDepth16: '16비트 (표준)',
    bitDepth24: '24비트 (고품질)',
    bitDepth32: '32비트 (전문가)',
    
    volumeTitle: '볼륨 설정',
    volumeLabel: '볼륨: {volume}%',
    
    fileSizeEstimate: '예상 파일 크기: {size}',
    duration: '재생 시간: {duration}',
    originalFormat: '원본 형식: {format}',
    originalSize: '원본 크기: {size}',
    convertedSize: '변환 후 크기: {size}',
    
    tipsTitle: '팁',
    tipContent: 'PCM 형식은 압축되지 않은 원시 오디오 데이터로, 음성 인식, 오디오 분석, 전문 오디오 처리에 사용됩니다. 음성 인식에는 16비트, 16000Hz가 표준; 일반 오디오에는 44100Hz, 16비트; 전문 오디오 제작에는 48000Hz, 24비트를 권장.',
    convertError: '변환 실패, 오디오 형식을 확인하거나 다시 시도하세요.',
    processingMultiple: '{current}/{total}개 오디오 파일 처리 중...',
    convertSuccess: '변환 성공!',
    
    pcmFormatTitle: 'PCM 형식 옵션',
    signedFormat: '부호 있는 형식',
    unsignedFormat: '부호 없는 형식',
    littleEndian: '리틀 엔디안',
    bigEndian: '빅 엔디안',
    
    // 메타데이터
    metadataTitle: '메타데이터 (선택사항)',
    metadataTitle2: '제목',
    metadataArtist: '아티스트',
    
    // 고급 옵션
    advancedTitle: '고급 옵션',
    trimAudio: '오디오 자르기',
    trimStart: '시작 시간',
    trimEnd: '종료 시간',
    
    seoNote: '오디오-PCM 변환 도구, 온라인 오디오 형식 변환기, WAV-PCM, MP3-PCM, 음성 인식 오디오 전처리',
};
