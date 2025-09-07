export default {
    title: '고도 쿼리 및 등고선 생성기: 온라인 지형 분석 도구 가이드',
    functionTitle: '고도 쿼리 및 등고선 생성기란 무엇이며 어떤 용도가 있나요?',
    intro: '저희의 <strong>고도 쿼리 및 등고선 생성기</strong>는 전 세계 어느 위치에서든 고도 데이터를 즉시 쿼리하고 정확한 등고선 지도를 생성할 수 있는 강력한 온라인 지형 분석 도구입니다.',
    
    useCasesTitle: '고도 쿼리 및 등고선 생성기의 일반적인 사용 시나리오',
    useCases: [
        '엔지니어링 계획 및 건설 프로젝트를 위한 지형 분석 및 부지 평가',
        '하이킹 및 등산을 위한 경로 계획 및 고도 변화 추정',
        '수문학 분석 및 홍수 위험 평가',
        '지질 연구 및 지형 분석',
        '교육에서의 지리적 지식 시연',
        '게임 개발 및 가상 현실에서의 지형 모델링',
        '농업 계획 및 관개 시스템 설계',
        '환경 영향 평가'
    ],
    
    tipTitle: '전문가 팁:',
    tipContent: '대규모 지역을 분석할 때는 등고선 간격을 적절하게 조정하세요. 평평한 지역에는 더 작은 간격(5-10미터)을, 산악 지역에는 더 큰 간격(50-100미터)을 사용하세요.',
    
    conclusion: '<strong>고도 쿼리 및 등고선 생성기</strong> 도구는 다양한 산업 분야의 전문가와 애호가에게 편리한 지형 분석 기능을 제공합니다.',
    
    faqTitle: '자주 묻는 질문',
    faqs: [
        {
            question: '고도 쿼리 도구의 데이터 소스는 무엇인가요?',
            answer: '저희의 <strong>고도 쿼리 시스템</strong>은 주로 NASA의 SRTM 및 ASTER GDEM 데이터를 사용합니다. 전 세계 범위에서 데이터 해상도는 일반적으로 30미터입니다.'
        },
        {
            question: '지형 분석을 위해 등고선 생성 기능을 어떻게 사용하나요?',
            answer: '지도에서 관심 지역을 선택한 다음 등고선 매개변수를 조정하세요. "등고선 생성" 버튼을 클릭하면 시스템이 자동으로 DEM 데이터를 처리하고 등고선을 그립니다.'
        },
        {
            question: '일괄 고도 쿼리를 위해 내 자신의 포인트 데이터를 업로드할 수 있나요?',
            answer: '네, 저희의 <strong>일괄 고도 쿼리 기능</strong>은 CSV, GeoJSON 또는 KML 파일을 통한 사용자 정의 포인트 데이터 업로드를 지원합니다.'
        },
        {
            question: '고도 프로필 기능은 하이킹이나 사이클링 경로 계획에 어떻게 도움이 되나요?',
            answer: '지도에 계획된 경로를 그리면 시스템이 즉시 오르막, 내리막 및 평평한 구간을 보여주는 고도 프로필을 생성합니다.'
        },
        {
            question: '3D 지형 시각화의 실용적인 응용 분야는 무엇인가요?',
            answer: '저희의 <strong>3D 지형 시각화 시스템</strong>은 교육, 관광 계획, 부동산 개발, 엔지니어링 프로젝트 및 환경 보존에 유용합니다.'
        }
    ],
    
    tutorialTitle: '고도 쿼리 및 등고선 생성기 사용 방법',
    steps: [
        {
            title: '지도 탐색 및 대상 지역 찾기',
            description: '지도 탐색 컨트롤을 사용하여 관심 지역으로 이동하세요.',
            note: '빠른 확대/축소를 위해 마우스 휠을 사용하세요.'
        },
        {
            title: '단일 지점 고도 데이터 쿼리',
            description: '해당 지점의 고도 데이터를 쿼리하려면 지도에서 <strong>아무 위치나 클릭</strong>하세요.',
            note: '마우스를 지도 위에 올리면 현재 위치의 고도가 실시간으로 표시됩니다.'
        },
        {
            title: '일괄 고도 쿼리를 위한 포인트 파일 업로드',
            description: '위도와 경도 좌표가 포함된 파일을 업로드하면 시스템이 자동으로 각 지점의 고도를 쿼리합니다.',
            note: '업로드하기 전에 좌표계가 WGS84인지 확인하세요.'
        },
        {
            title: '등고선 지도 생성',
            description: '등고선 설정 패널에서 매개변수를 조정하고 <strong>"등고선 생성"</strong> 버튼을 클릭하세요.',
            note: '지역의 지형에 따라 적절한 간격을 조정하세요.'
        },
        {
            title: '3D 지형 뷰 사용',
            description: '"3D 지형 활성화" 버튼을 클릭하고 지형의 3차원 특성을 탐색하세요.',
            note: '시점 기울기를 조정하려면 Ctrl 키를 누른 상태에서 드래그하세요.'
        },
        {
            title: '고도 프로필 생성',
            description: '"프로필 라인 그리기" 버튼을 클릭하고 지도에 경로를 그리세요.',
            note: '프로필 위에서 마우스를 이동하면 지도의 해당 위치에 마커가 나타납니다.'
        },
        {
            title: '결과 내보내기 및 공유',
            description: '등고선 지도, 고도 데이터 또는 프로필 차트를 다운로드하고 "지도 공유" 버튼을 사용하세요.',
            note: '내보낸 지도에는 좌표 참조 정보가 포함됩니다.'
        }
    ],
    
    successTitle: '축하합니다!',
    successContent: '고도 쿼리 및 등고선 생성기 도구 사용 방법을 성공적으로 배웠습니다.',
    
    relatedToolsTitle: '관심이 있을 만한 다른 도구',
    relatedTools: [
        {
            name: '좌표 변환 도구',
            description: '다양한 좌표계 간에 지리적 좌표를 변환합니다.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'GPS 트랙 재생',
            description: '다양한 파일 형식에서 GPS 트랙을 시각화하고 재생합니다.',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: '가우스 투영 계산기',
            description: '가우스 투영 좌표와 지리적 좌표 간의 변환.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'LIDAR 포인트 클라우드 뷰어',
            description: 'LAS, XYZ, PLY 및 PCD 형식을 지원하는 무료 온라인 LIDAR 포인트 클라우드 뷰어.',
            url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
        }
    ],
    
    referencesTitle: '참조 자료',
    references: [
        {
            name: '지형도 기초 - 위키백과',
            description: '지형도의 구성 요소와 등고선 해석에 대한 자세한 설명',
            url: 'https://en.wikipedia.org/wiki/Topographic_map'
        },
        {
            name: 'REI 지도 내비게이션 튜토리얼',
            description: '전문 야외 교육 기관에서 제공하는 지형도 읽기 및 내비게이션 기술',
            url: 'https://www.rei.com/learn/expert-advice/navigation-basics.html'
        },
        {
            name: 'OpenTopography 학습 자료',
            description: '오픈 지형 데이터 플랫폼에서 제공하는 지형 분석 방법 및 사례 연구',
            url: 'https://opentopography.org/learn'
        }
    ]
};