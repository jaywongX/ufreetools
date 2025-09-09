export default {
    name: '도엽 분할 계산기 - 온라인 지도 도엽 번호 조회 도구',
    description: '좌표를 기반으로 도엽 번호를 계산하고, 다양한 축척과 투영 방법을 지원합니다',
    icon: 'map',
    tags: ['지도', '분할', '좌표', '축척', '투영'],
    
    // 사용자 인터페이스
    ui: {
        title: '도엽 분할 계산기',
        subtitle: '좌표를 기반으로 도엽 번호 계산',
        inputTitle: '좌표 입력',
        outputTitle: '계산 결과',
        
        // 좌표 입력
        latitudePlaceholder: '위도 (예: 39.9042)',
        longitudePlaceholder: '경도 (예: 116.4074)',
        batchInputPlaceholder: '일괄 입력: 위도,경도,설명(선택사항)\n예시: 39.9042,116.4074,베이징\n40.7128,-74.0060,뉴욕',
        
        // 버튼
        calculateButton: '도엽 계산',
        clearButton: '모두 지우기',
        loadSampleButton: '샘플 데이터 불러오기',
        exportExcelButton: 'Excel로 내보내기',
        exportPDFButton: 'PDF로 내보내기',
        
        // 매개변수 설정
        parameterSettings: '매개변수 설정',
        scaleLabel: '축척',
        zoneMethodLabel: '구역 방법',
        threeDegreeZone: '3도 구역',
        sixDegreeZone: '6도 구역',
        
        // 결과 표시
        resultColumns: {
            sheetNumber: '도엽 번호',
            latitude: '위도',
            longitude: '경도',
            scale: '축척',
            zone: '구역',
            centralMeridian: '중앙 자오선',
            description: '설명'
        },
        
        // 지도 그리드
        gridTitle: '지도 그리드',
        noResults: '표시할 결과 없음',
        
        // 메시지
        invalidCoordinates: '유효하지 않은 좌표입니다. 입력을 확인하세요',
        calculationSuccess: '도엽이 성공적으로 계산되었습니다',
        excelExportSuccess: '데이터가 Excel로 성공적으로 내보내졌습니다',
        pdfExportSuccess: '데이터가 PDF로 성공적으로 내보내졌습니다',
        exportFailed: '내보내기 실패, 다시 시도하세요',
        noDataToExport: '내보낼 데이터가 없습니다',
        
        // 설명
        singlePointDesc: '단일 지점',
        batchPointDesc: '일괄 지점',
        
        // 내보내기 제목
        exportFileName: '도엽_계산_결과',
        exportTitle: '도엽 계산 결과'
    }
}