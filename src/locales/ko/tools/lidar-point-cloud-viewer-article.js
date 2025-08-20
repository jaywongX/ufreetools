export default {
  title: '온라인 LIDAR 포인트 클라우드 뷰어 - 무료 3D 시각화 도구',
  functionTitle: '도구 기능 소개와 활용 사례',
  intro:
    '저희 <strong>온라인 LIDAR 포인트 클라우드 뷰어</strong>는 여러 포맷의 포인트 클라우드 데이터를 온라인으로 열람·분석할 수 있는 전문 3D 시각화 도구입니다. 이 <strong>무료 포인트 클라우드 뷰어</strong>는 WebGL 기반으로 별도 설치가 필요 없으며, 브라우저에서 고품질 3D 렌더링을 제공합니다. 측량 엔지니어, 건축가, GIS 전문가 등 다양한 분야의 요구를 충족하는 <strong>LIDAR 데이터 뷰어</strong>입니다.',
  useCasesTitle: '주요 활용 사례',
  useCases: [
    '측량·매핑: LiDAR 스캔 데이터 열람 및 분석(지형 측량, 건물 측량)',
    '건축 설계: 건물 포인트 클라우드 시각화로 BIM 워크플로우 지원',
    '도시 계획: 스마트시티 의사결정을 위한 3D 도시 모델 분석',
    '산림 분야: 산림 포인트 클라우드 처리(식생 피복·바이오매스 평가)',
    '고고학: 유적지 3D 스캔 열람(보존·연구 목적)',
    '지질 탐사: 지질 구조 포인트 클라우드 분석(광물 탐사·위험 평가)',
    '자율주행: 차량 탑재 LiDAR 데이터 열람(경로 계획·장애물 감지)',
    '산업 검사: 장비 3D 스캔 분석(품질 관리·결함 탐지)'
  ],
  tipTitle: '전문가 팁',
  tipContent:
    '본 뷰어는 LAS, XYZ, PLY, PCD 등 주요 포맷을 지원하며, 다양한 색상 모드와 대화형 조작을 제공하여 여러 관점에서 포인트 클라우드 데이터를 심층 분석할 수 있습니다.',
  conclusion:
    '저희 <strong>온라인 포인트 클라우드 시각화 도구</strong>를 통해 다양한 LIDAR 데이터셋을 빠르게 미리 보고 분석하여 생산성을 높일 수 있습니다. 이 <strong>3D 포인트 클라우드 뷰어</strong>는 완전 무료이며 프라이버시를 중시합니다. 모든 처리는 브라우저 내 로컬에서 수행됩니다.',
  faqTitle: '자주 묻는 질문(FAQ)',
  faqs: [
    {
      question: '이 LIDAR 포인트 클라우드 뷰어는 어떤 파일 형식을 지원하나요?',
      answer:
        '본 <strong>포인트 클라우드 뷰어</strong>는 LAS(LIDAR 표준), XYZ(ASCII 포인트 클라우드), PLY(Polygon File Format), PCD(Point Cloud Data), TXT 등 주요 형식을 지원합니다. 이는 대부분의 <strong>LIDAR 데이터 처리</strong> 및 3D 스캔 활용 시나리오를 포괄합니다.'
    },
    {
      question: '포인트 클라우드 파일 크기에 제한이 있나요?',
      answer:
        '브라우저 성능을 위해 <strong>포인트 클라우드 파일</strong>은 100MB 이하를 권장합니다. 대용량 데이터셋은 다운샘플링이나 타일 분할을 고려하세요. <strong>온라인 포인트 클라우드 뷰어</strong>는 3D 표시를 부드럽게 유지하도록 렌더링을 자동 최적화합니다.'
    },
    {
      question: '포인트 클라우드의 표시를 어떻게 조정하나요?',
      answer:
        '본 <strong>3D 시각화 도구</strong>는 포인트 크기 조정, 색상 모드 선택(고도·강도·분류·RGB), 포인트 밀도 제어, 애니메이션 활성화 등의 옵션을 제공합니다. 이를 통해 <strong>LiDAR 스캔 데이터</strong>를 더욱 효과적으로 분석할 수 있습니다.'
    },
    {
      question: '내 포인트 클라우드 데이터는 안전한가요?',
      answer:
        '네, 안전합니다. <strong>온라인 LIDAR 뷰어</strong>는 모든 처리를 로컬에서 수행하므로, 귀하의 <strong>포인트 클라우드 데이터</strong>가 서버로 업로드되지 않습니다. 파싱·렌더링·분석이 브라우저 내에서 이뤄져 민감한 측량 데이터나 상업 프로젝트에도 적합합니다.'
    },
    {
      question: '결과 이미지를 내보낼 수 있나요?',
      answer:
        '가능합니다. <strong>시각화 도구</strong>는 현재 보기를 고품질 PNG 이미지로 내보낼 수 있습니다. 다양한 각도와 색상 모드의 캡처를 보고서·프레젠테이션·추가 <strong>데이터 분석</strong>에 활용하세요.'
    }
  ],
  tutorialTitle: '사용 가이드',
  steps: [
    {
      title: '포인트 클라우드 파일 선택',
      description:
        '“파일 선택”을 클릭하거나 <strong>LIDAR 포인트 클라우드 파일</strong>을 업로드 영역으로 드래그 앤 드롭하세요. 지원되는 <strong>3D 포인트 클라우드 데이터</strong> 형식: LAS, XYZ, PLY, PCD, TXT.',
      note: '최적의 성능을 위해 100MB 이하 파일을 권장합니다'
    },
    {
      title: '파싱 대기',
      description:
        '시스템이 <strong>포인트 클라우드 파일</strong>을 파싱하며 진행률과 파일 정보를 표시합니다. 완료 후 3D 뷰어에 자동 로드됩니다.',
      note: '소요 시간은 파일 크기와 복잡도에 따라 달라집니다'
    },
    {
      title: '3D 내비게이션 조작',
      description:
        '마우스로 3D 탐색: <strong>좌클릭 드래그</strong> 회전, <strong>우클릭 드래그</strong> 이동, <strong>휠</strong> 확대/축소. 직관적인 조작으로 <strong>포인트 클라우드 데이터</strong>를 다양한 각도에서 확인할 수 있습니다.',
      note: '모바일 기기에서는 터치 제스처를 지원합니다'
    },
    {
      title: '표시 설정 조정',
      description:
        '오른쪽 패널에서 색상 모드(고도·강도·분류·RGB), 포인트 크기·밀도, 애니메이션을 조정하세요. 이러한 설정은 <strong>LIDAR 데이터</strong>의 효율적 분석에 도움이 됩니다.',
      note: '분석 목적에 따라 색상 모드를 구분해 사용하세요'
    },
    {
      title: '통계 정보 확인',
      description:
        '정보 패널에서 <strong>포인트 클라우드 통계</strong>(총 포인트 수, 좌표 범위, 파일 형식 등)를 확인하세요. 이는 <strong>데이터 품질 평가</strong>에 유용합니다.',
      note: '통계는 실시간으로 업데이트됩니다'
    },
    {
      title: '결과 내보내기',
      description:
        '만족스러운 뷰가 나오면 “이미지 내보내기”를 클릭하여 <strong>3D 시각화</strong>를 PNG로 저장하세요(보고서·추가 분석용).',
      note: '내보낸 이미지는 현재 뷰와 표시 설정을 그대로 유지합니다'
    }
  ],
  successTitle: '모두 완료!',
  successContent:
    '좋습니다! 이제 LIDAR 포인트 클라우드 뷰어를 활용해 효율적인 3D 시각화와 분석을 수행할 수 있습니다.',
  relatedToolsTitle: '관련 도구',
  relatedTools: [
    {
      name: '좌표 변환기',
      description:
        'WGS-84, GCJ-02, BD-09, Web Mercator, UTM 등 좌표계 간 변환',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'GPS 트랙 재생',
      description: '여러 파일 형식(GPX, KML, GeoJSON, CSV)의 GPS 트랙을 시각화 및 재생',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: '가우스 투영(정·역산)',
      description: '가우스 투영 좌표와 지리 좌표(위도/경도) 간 상호 변환',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    }
  ],
  referencesTitle: '참고 자료',
  references: [
    {
      name: 'ASPRS LAS 형식 규격',
      description: '미국 사진측량·원격탐사 학회의 LAS 공식 표준',
      url: 'https://www.asprs.org/divisions-committees/lidar-division/laser-las-file-format-exchange-activities'
    },
    {
      name: 'WebGL 공식 문서',
      description: 'Web Graphics Library의 공식 문서 및 모범 사례',
      url: 'https://www.khronos.org/webgl/'
    },
    {
      name: 'Point Cloud Library (PCL)',
      description: '오픈소스 포인트 클라우드 처리 라이브러리의 공식 문서와 튜토리얼',
      url: 'https://pointclouds.org/'
    }
  ]
};