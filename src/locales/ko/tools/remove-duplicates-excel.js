export default {
    name: 'Excel 중복 제거 도구 - 온라인 스프레드시트 데이터 중복 제거기',
    description: '무료 온라인 Excel 중복 제거 도구로, xlsx/xls/csv 파일 중복 제거를 지원합니다. 중복 데이터를 스마트하게 식별하고, 다양한 중복 제거 규칙을 제공하며, 배치 처리를 지원하고, Excel/CSV 형식으로 원클릭 다운로드를 제공합니다',
    inputTitle: 'Excel 파일 업로드',
    outputTitle: '중복 제거 결과',
    dragTip: 'Excel 파일을 여기에 드래그 앤 드롭하거나 클릭하여 업로드',
    supported: '지원 형식: XLSX, XLS, CSV',
    removeDuplicatesBtn: '중복 제거 시작',
    downloadBtn: '결과 다운로드',
    noOutput: '중복 제거 결과 없음',
    loadSample: '샘플 데이터 로드',
    preview: '데이터 미리보기',
    clearAll: '모두 지우기',
    originalData: '원본 데이터',
    deleteFile: '파일 삭제',
    batchDownload: '배치 다운로드 (ZIP)',
    exportFormat: '내보내기 형식',
    dataQuality: '데이터 품질',
    zoomIn: '확대',
    zoomOut: '축소',
    resetView: '보기 재설정',
    fullscreen: '전체 화면 미리보기',
    
    // 중복 제거 규칙 구성
    duplicateRulesTitle: '중복 제거 규칙 구성',
    ruleType: '중복 제거 유형',
    ruleTypes: {
        fullRow: '전체 행 중복 제거',
        singleColumn: '단일 열 중복 제거',
        multiColumn: '다중 열 조합 중복 제거'
    },
    selectedColumns: '열 선택',
    selectColumns: '중복 제거할 열을 선택하세요',
    caseSensitive: '대소문자 구분',
    trimSpaces: '앞뒤 공백 제거',
    ignoreEmpty: '빈 값 무시',
    fuzzyMatch: '퍼지 매칭',
    similarityThreshold: '유사도 임계값',
    
    // 데이터 통계
    statisticsTitle: '데이터 통계',
    originalRows: '원본 행 수',
    duplicateRows: '중복 행 수',
    uniqueRows: '중복 제거 후 행 수',
    duplicateRate: '중복 비율',
    
    // 미리보기 표
    previewTitle: '데이터 미리보기',
    showDuplicates: '중복 항목 표시',
    showUnique: '고유 항목 표시',
    highlightDuplicates: '중복 항목 강조',
    
    // 내보내기 옵션
    exportOptions: '내보내기 옵션',
    includeHeaders: '헤더 포함',
    encoding: '파일 인코딩',
    delimiter: '구분자',
    
    // 작업 버튼
    processBtn: '데이터 처리',
    resetBtn: '재설정',
    saveTemplate: '템플릿 저장',
    loadTemplate: '템플릿 로드',
    
    // 템플릿 관리
    savedTemplates: '저장된 템플릿',
    deleteTemplate: '삭제',
    templateNamePrompt: '템플릿 이름을 입력하세요:',
    templateSaved: '템플릿이 성공적으로 저장되었습니다!',
    deleteTemplateConfirm: '이 템플릿을 삭제하시겠습니까?',
    templateLoadError: '템플릿 로드 실패:',
    
    // 샘플 데이터
    sampleHeaders: {
        name: '이름',
        email: '이메일',
        phone: '전화',
        department: '부서'
    },
    sampleData: {
        zhangsan: '김철수',
        lisi: '이영희',
        wangwu: '박민수',
        zhaoliu: '최지영',
        techDept: '기술부',
        salesDept: '영업부',
        hrDept: '인사부',
        financeDept: '재무부'
    },
    
    // 내보내기 관련
    exportSheetName: '중복 제거 결과',
    exportFileName: '중복 제거 결과',
    jsonMetadataTitle: 'Excel 중복 제거 결과',
    columnNumber: '열 {number}',
    
    // 오류 메시지
    processError: '파일 처리 중 오류가 발생했습니다. 파일 형식을 확인하세요'
};