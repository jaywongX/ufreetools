export default {
  name: 'LIDAR 포인트 클라우드 뷰어 - 온라인 3D 포인트 클라우드 시각화 도구',
  description:
    '무료 온라인 LIDAR 포인트 클라우드 뷰어로 LAS, XYZ, PLY, PCD 형식을 지원합니다. 3D 시각화, 다양한 색상 모드, 대화형 내비게이션 및 데이터 분석 기능 제공',
  inputTitle: '입력 포인트 클라우드 파일',
  outputTitle: '3D 포인트 클라우드 뷰',
  dragTip: '여기에 포인트 클라우드 파일을 드래그 앤 드롭하거나 클릭하여 업로드',
  supported: '지원 형식: LAS, XYZ, PLY, PCD, TXT',
  loadFromUrl: 'URL에서 불러오기',
  load: '불러오기',
  loadSample: '샘플 데이터 불러오기',
  coloringMode: '색상 모드',
  elevation: '고도 색상',
  intensity: '강도 색상',
  classification: '분류 색상',
  rgb: 'RGB 색상',
  pointSize: '포인트 크기',
  pointDensity: '포인트 밀도',
  enableAnimation: '애니메이션 활성화',
  showTrajectory: '궤적 표시',
  showSensorData: '센서 데이터 표시',
  fileInfo: '파일 정보',
  fileName: '파일 이름',
  pointCount: '포인트 수',
  fileSize: '파일 크기',
  bounds: '경계 범위',
  resetView: '뷰 초기화',
  exportImage: '이미지 내보내기',
  loading: '불러오는 중...',
  noData: '포인트 클라우드 파일을 업로드하거나 샘플 데이터를 불러오세요',
  controls: {
    rotate: '마우스 드래그: 뷰 회전',
    zoom: '마우스 휠: 확대/축소',
    pan: 'Shift+드래그: 뷰 이동'
  },
  stats: {
    visible: '표시 중 포인트',
    total: '총 포인트',
    points: '포인트'
  },
  metadata: {
    title: 'LAS 메타데이터',
    systemId: '시스템 식별자',
    software: '생성 소프트웨어',
    version: 'LAS 버전',
    creationDate: '생성 날짜',
    pointFormat: '포인트 데이터 형식',
    vlrCount: 'VLR 개수',
    returnStats: '리턴 통계',
    extent: '공간 범위'
  },
  error: {
    loadFailed: '포인트 클라우드 파일을 불러오지 못했습니다. 파일 형식을 확인하세요',
    urlLoadFailed: 'URL에서 파일을 불러오지 못했습니다. 주소를 확인하세요'
  },
  disclaimer: {
    title: '기술 참고',
    content:
      '본 도구는 WebGL을 사용하여 브라우저에서 3D 포인트 클라우드 시각화를 구현합니다. 모든 데이터 처리는 로컬에서 수행되어 데이터 보안을 보장합니다.',
    formats:
      '지원 형식: LAS(LIDAR 표준), XYZ(ASCII 포인트 클라우드), PLY(폴리곤 파일 형식), PCD(Point Cloud Data)',
    performance:
      '성능 팁: 대용량 포인트 클라우드 파일은 로드에 시간이 소요될 수 있습니다. 최적의 성능을 위해 최신 브라우저 사용을 권장합니다.'
  }
};