export default {
    name: '랜덤 IP 생성기 - IPv4/IPv6 주소 온라인 생성',
    description: '무료 온라인 랜덤 IP 생성기. IPv4 및 IPv6 주소, 공용 및 사설 IP, 지역 필터링, 배치 생성 및 다양한 내보내기 형식을 지원합니다. 개인 정보 보호를 위해 완전히 프론트엔드에서 실행됩니다.',
    inputTitle: '생성 구성',
    outputTitle: '생성 결과',
    generateBtn: 'IP 주소 생성',
    loadSampleBtn: '샘플 로드 및 생성',
    clearAll: '모두 지우기',
    noOutput: '생성된 결과 없음',
    preview: '데이터 미리보기',
    
    ipVersionTitle: 'IP 버전',
    ipv4: 'IPv4',
    ipv6: 'IPv6',
    bothVersions: '두 버전 모두',
    
    ipTypeTitle: 'IP 유형',
    ipTypePublic: '공용 IP',
    ipTypePrivate: '사설 IP',
    ipTypeAny: '모든 유형',
    
    regionTitle: 'IP 지역',
    allRegions: '모든 지역',
    
    formatTitle: '출력 형식',
    formatPlain: '일반 텍스트',
    formatList: '목록 형식',
    
    optionsTitle: '추가 옵션',
    includePort: '포트 번호 포함',
    includeSubnet: '서브넷 마스크 포함',
    includeGeo: '지리 정보 포함',
    
    batchTitle: '배치 생성',
    quantityLabel: '수량',
    quantityPlaceholder: '수량 입력 (1-1000)',
    
    generating: '생성 중...',
    generated: '생성 완료',
    copySuccess: '클립보드에 복사됨',
    downloadSuccess: '다운로드 성공',
    invalidQuantity: '1-1000 사이의 숫자를 입력하세요',
    
    resultCount: '{count}개 레코드 생성됨',
    resultSummary: '결과 요약',
    showAll: '모두 표시',
    collapse: '접기',
    
    exportTitle: '내보내기 형식',
    exportJson: 'JSON 내보내기',
    exportCsv: 'CSV 내보내기',
    exportTxt: 'TXT 내보내기',
    copyBtn: '복사',
    downloadBtn: '다운로드',
    viewDetails: '상세 보기',
    
    regions: {
        US: '미국',
        EU: '유럽',
        AS: '아시아',
        CN: '중국',
        JP: '일본',
        KR: '대한민국',
        AU: '호주',
        BR: '브라질',
        IN: '인도',
        RU: '러시아'
    },
    
    csv: {
        ip: 'IP 주소',
        version: '버전',
        port: '포트',
        subnet: '서브넷 마스크',
        country: '국가',
        city: '도시',
        isp: 'ISP'
    }
};
