export default {
    name: '온라인 EXIF 제거기 - 이미지 메타데이터 삭제 도구',
    description: '서버 업로드 없이 JPEG, HEIC, WebP, PNG, RAW, TIFF 형식의 이미지에서 EXIF 메타데이터를 빠르게 삭제하여 개인정보를 보호하는 무료 온라인 EXIF 제거기',
    inputTitle: '이미지 업로드',
    outputTitle: '처리된 이미지',
    dragTip: '이미지를 여기로 드래그하거나 클릭하여 업로드',
    supported: '지원 형식: JPEG, HEIC, WebP, PNG, RAW, TIFF',
    loadSample: '샘플 이미지 로드',
    preview: '미리보기',
    clearAll: '모두 지우기',
    deleteImage: '이미지 삭제',
    noOutput: '처리된 이미지가 없습니다',
    processing: '처리 중...',
    removeExif: 'EXIF 데이터 제거',
    processingImage: '이미지 처리 중...',
    
    // 처리 상태
    beforeRemoval: '제거 전',
    afterRemoval: '제거 후',
    exifRemoved: 'EXIF 데이터가 성공적으로 제거됨',
    noExifFound: '이 이미지에는 EXIF 데이터가 없습니다',
    exifInfo: 'EXIF 정보',
    fileSize: '파일 크기',
    originalSize: '원본 크기',
    processedSize: '처리된 크기',
    
    // 내보내기 옵션
    exportOptions: '내보내기 옵션',
    exportFormat: '내보내기 형식',
    imageQuality: '이미지 품질',
    downloadBtn: '다운로드',
    downloadAll: '일괄 다운로드',
    
    // 기타
    loading: '로딩 중...',
    error: '처리 오류',
    unknown: '알 수 없음',
    success: '성공',
    failed: '실패',
    
    // 팁
    privacyNote: '모든 처리는 브라우저에서 로컬로 완료됩니다. 이미지는 절대 서버에 업로드되지 않으므로 개인정보와 보안이 보장됩니다.',
    exifRemovedNote: 'EXIF 데이터가 이미지에서 제거되었습니다. 촬영 매개변수, GPS 위치, 카메라 정보 등 모든 메타데이터가 포함됩니다.',
    noExifNote: '이 이미지는 원래 EXIF 데이터를 포함하지 않았으므로 제거가 필요하지 않았습니다.'
};