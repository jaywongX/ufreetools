export default {
  title: '좌표 선택기 및 위경도 쿼리 도구: 온라인 위경도 쿼리 및 EPSG 투영 좌표 변환 가이드',
  functionTitle: '좌표 선택기 및 위경도 쿼리 도구란 무엇인가요? 주요 기능은 무엇인가요?',
  intro: '<strong>좌표 선택기 및 위경도 쿼리 도구</strong>는 지도 클릭 포인트 선택, <strong>위경도 쿼리</strong>, <strong>EPSG 투영 좌표 변환</strong>, 지명 검색을 통합하여 좌표 선택과 좌표 형식 내보내기를 빠르고 정확하게 완료할 수 있습니다. 이 온라인 도구를 통해 브라우저에서 지명을 좌표로 변환하고, WGS84를 다양한 EPSG 투영 좌표로 변환할 수 있어 측량 주석, 위치 분석, 지도 제작의 효율성을 크게 향상시킵니다.',
  useCasesTitle: '일반적인 응용 시나리오: 좌표 선택기 및 위경도 쿼리 도구가 해결하는 문제',
  useCases: [
    '뉴미디어 위치 선택 및 체크인 포인트 생성: 빠른 위경도 선택, 지도 시각화를 위한 내보내기',
    'GIS 지도 제작 및 현장 수집: 포인트 클릭 선택, CSV/GeoJSON 내보내기, ArcGIS/QGIS 가져오기에 적용',
    '정부 및 부동산 위치 선택: 지명 검색 ← 좌표, 후보 위치 원클릭 수집',
    '물류 및 서비스 위치 결정: 여러 시설/작업 주문 좌표 기록, 일괄 내보내기',
    '교육 및 연구: WGS84와 EPSG 투영 좌표 간의 차이점 및 변환 시연',
    '관광 및 야외 내비게이션: 관광지 및 캠핑장의 위경도 및 투영 좌표 저장',
    '개발 및 테스트: 프론트엔드/백엔드 통합에 필요한 정밀 위경도 샘플',
    '다지역 콘텐츠 주석: 통합 형식 좌표 파일, 지역 간 데이터 통합에 유용'
  ],
  tipTitle: '전문가 팁:',
  tipContent: 'CSV 내보내기 시 name, lat, lon, epsg, x, y, time 필드를 포함하는 것을 권장하며, QGIS/Excel에서 일괄 처리 및 추적에 적합합니다.',
  conclusion: '이 <strong>좌표 선택기 및 위경도 쿼리 도구</strong>는 측량, 시각화, 개발, 서비스 등 다양한 시나리오를 위해 설계되었으며, <strong>EPSG 투영 좌표 변환</strong>, 지명 검색, 일괄 내보내기를 지원합니다. 온라인 위경도 쿼리 및 좌표 변환을 완료함으로써 소프트웨어 설치 비용을 크게 줄이고 협업 효율성을 향상시킬 수 있습니다.',
  faqTitle: '자주 묻는 질문 (FAQ)',
  faqs: [
    {
      question: '좌표 선택기 및 위경도 쿼리 도구는 어떤 EPSG 투영 좌표 변환을 지원하나요?',
      answer: '이 도구는 WGS84(EPSG:4326), Web Mercator(EPSG:3857), CGCS2000(EPSG:4490)에 대한 통합 변환을 제공하며, 사용자 정의 PROJ4 정의 입력도 지원합니다. 지도를 클릭하면 선택된 위경도와 EPSG 투영 좌표가 동시에 표시됩니다.'
    },
    {
      question: '지명을 빠르게 위경도 좌표로 변환하고 지도에 표시하는 방법은?',
      answer: '검색 상자에 지명을 입력한 후 지명 검색 ← 좌표 기능을 사용하여 Nominatim 결과를 얻고, 후보를 선택하여 위치 지정 및 마커 추가를 한 다음 CSV 또는 GeoJSON으로 내보냅니다.'
    },
    {
      question: '위경도 쿼리 결과를 복사하거나 좌표 파일을 일괄 내보내는 방법은?',
      answer: '오른쪽 결과 영역은 전체 좌표 텍스트의 원클릭 복사를 지원하며, CSV 또는 GeoJSON 형식으로 파일을 내보낼 수 있어 대부분의 GIS/시각화 플랫폼과 호환됩니다.'
    },
    {
      question: '좌표 선택기는 모바일 및 태블릿을 지원하나요?',
      answer: '네, 인터페이스는 반응형 그리드를 사용하며, <strong>위경도 쿼리</strong>, 마킹, 내보내기 작업이 휴대폰과 태블릿에서 원활하게 실행됩니다.'
    },
    {
      question: 'EPSG 투영 좌표 변환 사용 시 주의사항은?',
      answer: '다른 EPSG 시스템은 데이텀과 투영에 차이가 있습니다. 대상 좌표계가 통합되지 않은 경우 올바른 PROJ4 정의를 제공하고 변환 전 단위를 확인하세요(위경도는 도 단위, 투영은 일반적으로 미터 단위).'
    }
  ],
  tutorialTitle: '좌표 선택기 및 위경도 쿼리 도구 사용법: 상세 작업 단계',
  steps: [
    {
      title: '도구 열기 및 지도 로드',
      description: '도구 페이지에 진입하면 지도가 자동으로 로드됩니다. 네트워크가 제한된 경우 외부 네트워크 액세스를 확인하거나 네트워크 환경을 변경하여 기본 지도와 지명 검색의 가용성을 보장하세요.',
      note: '지도의 기본 좌표계는 WGS84이며, 위경도 단위는 도입니다.'
    },
    {
      title: '지명 검색 및 위치 지정',
      description: '검색 상자에 지명을 입력하고(다국어 지원) "검색"을 클릭한 후, 후보에서 대상 위치를 선택하여 지도 중앙에 배치합니다.',
      note: '후보는 OpenStreetMap Nominatim에서 제공됩니다.'
    },
    {
      title: '지도 클릭으로 위경도 선택',
      description: '지도의 아무 곳이나 클릭하면 선택된 위경도와 EPSG 투영 좌표가 자동으로 기록되어 오른쪽 좌표 결과 목록에 표시됩니다.',
      note: '여러 번 클릭을 지원하여 여러 포인트를 표시할 수 있습니다.'
    },
    {
      title: 'EPSG 투영 변경 또는 조정',
      description: '왼쪽에서 일반 좌표계(4326/3857/4490)를 선택하거나 사용자 정의 PROJ4 정의를 입력하면, 도구가 즉시 투영 좌표를 변환하여 다음 포인트 선택에 적용합니다.',
      note: '좌표계 변경은 기존 포인트의 위경도를 수정하지 않으며, 투영 좌표 필드에만 영향을 줍니다.'
    },
    {
      title: '좌표 복사 또는 내보내기',
      description: '내보내기 형식(CSV 또는 GeoJSON)을 선택하고 "모두 복사" 또는 "파일 내보내기"를 클릭하여 GIS/시각화/개발 작업에서 좌표를 사용합니다.',
      note: 'CSV는 Excel/QGIS에서 일괄 처리에 적합하고, GeoJSON은 웹 지도 및 API 사용에 적합합니다.'
    },
    {
      title: '삭제 또는 계속 마킹',
      description: '다시 시작해야 하는 경우 "마커 삭제"를 클릭합니다. 그런 다음 검색이나 포인트 선택을 계속하여 점진적으로 좌표 목록을 완성합니다.',
      note: '다양한 프로젝트 요구에 따라 적시에 EPSG 좌표계를 변경하는 것을 잊지 마세요.'
    }
  ],
  successTitle: '축하합니다!',
  successContent: '좌표 선택기 및 위경도 쿼리 도구를 사용하여 좌표 수집과 EPSG 투영 좌표 변환을 완료하는 방법을 배웠으며, GIS 및 시각화를 위한 표준 데이터 파일을 효율적으로 생성할 수 있습니다.',
  relatedToolsTitle: '관심 있을 만한 관련 도구',
  relatedTools: [
    {
      name: '좌표계 변환기',
      description: 'WGS-84, GCJ-02, BD-09, Web Mercator, UTM을 포함한 다양한 좌표계 간의 지리 좌표 변환',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'GPS 트랙 재생',
      description: '다양한 형식 파일(GPX, KML, GeoJSON, CSV)의 GPS 트랙 시각화 및 재생',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: '가우스 투영 정역변환',
      description: '가우스 투영 좌표와 지리 좌표(위경도) 간의 상호 변환 도구',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    },
    {
      name: 'LIDAR 포인트 클라우드 뷰어',
      description: '무료 온라인 LIDAR 포인트 클라우드 뷰어, LAS, XYZ, PLY, PCD 형식 지원. 3D 시각화, 다중 색상 모드, 대화형 내비게이션 및 데이터 분석 기능 제공',
      url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
    }
  ],
  referencesTitle: '참고 자료',
  references: [
    {
      name: 'OpenStreetMap Nominatim',
      description: '지명 검색 및 지오코딩 서비스',
      url: 'https://nominatim.org/'
    },
    {
      name: 'EPSG.io',
      description: 'EPSG 좌표 참조 시스템 검색 및 PROJ4 정의',
      url: 'https://epsg.io/'
    },
    {
      name: 'Leaflet 문서',
      description: '경량 웹 지도 라이브러리',
      url: 'https://leafletjs.com/'
    },
    {
      name: 'Proj4 문서',
      description: '좌표 변환 라이브러리 문서',
      url: 'https://proj.org/apps/proj.html'
    }
  ]
}