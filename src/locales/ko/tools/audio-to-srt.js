export default {
    name: '오디오 SRT 자막 변환 - 온라인 오디오 자막 변환기',
    description: '무료 온라인 오디오 SRT 자막 변환 도구. WAV, MP3, FLAC, OGG 등 다양한 오디오 형식을 SRT 자막 파일로 변환합니다. 오디오 에너지 분석을 통해 음성 구간을 자동으로 감지하며, 감도 조절, 자막 길이 설정, 일괄 처리를 지원합니다. 영상 자막 제작, 팟캐스트 전사 등에 적합합니다.',
    inputTitle: '오디오 입력',
    outputTitle: '변환된 SRT 자막 파일',
    dragTip: '오디오 파일을 여기로 드래그 앤 드롭하거나 클릭하여 업로드하세요 (일괄 지원)',
    supported: '지원 형식: WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: 'SRT로 변환',
    converting: '변환 중...',
    downloadBtn: 'SRT 다운로드',
    batchDownload: '일괄 다운로드 (ZIP)',
    noOutput: '변환 결과가 없습니다',
    loadSample: '샘플 오디오 불러오기',
    preview: '오디오 미리보기',
    clearAll: '전체 삭제',
    previewBtn: '자막 미리보기',
    previewTitle: '자막 미리보기',
    subtitleCount: '자막 수',
    duration: '재생 시간',
    fileSize: '파일 크기',
    
    // 설정 옵션
    settingsTitle: 'SRT 변환 설정',
    sensitivityLabel: '감지 감도',
    sensitivityHigh: '높은 감도 (작은 볼륨의 오디오에 적합)',
    sensitivityMedium: '중간 감도 (권장)',
    sensitivityLow: '낮은 감도 (배경 소음이 많은 오디오에 적합)',
    
    maxDurationLabel: '최대 자막 길이',
    maxDuration2: '2초',
    maxDuration3: '3초',
    maxDuration5: '5초 (권장)',
    maxDuration10: '10초',
    
    minSilenceLabel: '최소 무음 간격',
    'minSilence0.3': '0.3초 (빠른 말하기)',
    'minSilence0.5': '0.5초 (권장)',
    'minSilence0.8': '0.8초 (보통 속도)',
    'minSilence1.0': '1.0초 (느린 말하기)',
    
    encodingLabel: '파일 인코딩',
    
    // 팁
    tipsTitle: '사용 팁',
    tipContent: '이 도구는 오디오 에너지를 분석하여 음성 구간을 자동으로 감지하고 SRT 타임코드를 생성합니다. 생성된 자막은 플레이스홀더 텍스트이며, 나중에 자막 편집 소프트웨어에서 실제 텍스트로 교체할 수 있습니다. 배경 소음이 적고 깨끗한 오디오를 사용하면 더 정확한 타임코드를 얻을 수 있습니다.',
    convertError: '변환에 실패했습니다. 오디오 형식을 확인하거나 다시 시도해 주세요.',
    convertSuccess: '변환이 성공적으로 완료되었습니다!',
    
    seoNote: '오디오 SRT 자막 변환 도구, 온라인 오디오 자막 변환기, 오디오에서 자막 자동 생성, WAV를 SRT로, MP3를 SRT로, 영상 자막 제작 도구',
};
