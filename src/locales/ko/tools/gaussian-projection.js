export default {
  name: '가우스 투영 정반산',
  title: '가우스 투영 정반산',
  description: '가우스 투영 좌표와 지리 좌표(위도/경도) 간 상호 변환 도구',
  calculationType: '계산 유형',
  forward: '정산(위경도→가우스 좌표)',
  inverse: '반산(가우스 좌표→위경도)',
  ellipsoidParameters: '타원체 파라미터',
  ellipsoidType: '타원체 유형',
  centralMeridian: '중앙 자오선(도)',
  a: '장반경',
  f: '편평률',
  projectionParameters: '투영대 파라미터',
  projectionType: '투영대 유형',
  '3degree': '3도대',
  '6degree': '6도대',
  zoneNumber: '대번호',
  forwardInput: '위경도 입력',
  latitude: '위도',
  longitude: '경도',
  inverseInput: '가우스 좌표 입력',
  x: 'X좌표(북향)',
  y: 'Y좌표(동향)',
  calculate: '계산',
  results: '계산 결과',
  dms: '도분초 형식',
  batchProcessing: '일괄 처리',
  inputFormat: '입력 형식',
  batchForwardFormat: '한 줄에 위도,경도 쌍 입력',
  batchInverseFormat: '한 줄에 X좌표,Y좌표 쌍 입력',
  processBatch: '일괄 계산',
  batchResults: '일괄 결과',
  copyAll: '전체 복사',
  downloadCSV: 'CSV 다운로드',
  copySuccess: '복사 성공',
  copyFailed: '복사 실패',
  clear: '초기화',
  formula: '공식 설명',
  mapView: '지도 보기',
  dmsInput: '도분초 입력',
  dmsInputPlaceholder: '40°26\'46"N 79°58\'56"W',
  parse: '파싱',
  dmsParseError: '도분초 형식 파싱 오류',
  invalidLatitude: '유효하지 않은 위도',
  invalidLongitude: '유효하지 않은 경도',
  invalidX: '유효하지 않은 X좌표',
  invalidY: '유효하지 않은 Y좌표',
  copyToClipboard: '클립보드에 복사',
  autoCalculate: '자동 계산',
  formulaExplanation: '가우스 투영 공식 설명',
  uploadCSV: 'CSV 업로드',
  exportResults: '결과 내보내기',
  exportAsGeoJSON: 'GeoJSON으로 내보내기',
  exportAsKML: 'KML로 내보내기',
  exportAsTXT: 'TXT로 내보내기',
  mapLayers: '지도 레이어',
  standard: '표준',
  satellite: '위성',
  terrain: '지형',
  pointsOnMap: '지도 상의 점들',
  clearPoints: '모든 점 지우기',
  unitSystem: '단위 체계',
  metric: '미터 (m)',
  imperial: '피트 (ft)',
  customEllipsoid: '사용자 정의 타원체',
  saveCustomEllipsoid: '사용자 정의 타원체 저장',

  formulaContent: `
    <p>가우스 투영은 다음 주요 공식을 사용합니다:</p>
    <h4>정산(위경도→가우스 좌표)</h4>
    <p>지리 좌표를 평면 직각 좌표로 변환:</p>
    <ul>
      <li>X = m + 보정항</li>
      <li>Y = ν·cos(B)·l + 보정항</li>
    </ul>
    <h4>반산(가우스 좌표→위경도)</h4>
    <p>평면 직각 좌표를 지리 좌표로 변환:</p>
    <ul>
      <li>B = μ + 보정항</li>
      <li>L = L₀₀ + 보정항</li>
    </ul>
    <p>여기서:</p>
    <ul>
      <li>B: 위도</li>
      <li>L: 경도</li>
      <li>L₀₀: 중앙 자오선</li>
      <li>m: 자오선 호 길이</li>
      <li>ν: 동서권 곡률 반경</li>
    </ul>
  `,

  close: '닫기',

  ellipsoids: {
    WGS84: 'WGS84 타원체',
    Krasovsky: '크라소프스키 타원체',
    CGCS2000: 'CGCS2000 타원체',
    GRS80: 'GRS80 타원체',
    Beijing54: '베이징54 타원체',
    Xian80: '시안80 타원체',
    Custom: '사용자 정의 타원체'
  },

  about: {
    title: '가우스 투영 정보',
    description: '가우스 투영(Gauss Projection)은 각도를 보존하는 횡축 타원기둥 투영으로 측량 및 지도 제작에 널리 사용됩니다. 지구 타원체상의 점을 평면에 투영하며 대중축척 지형도에 일반적으로 사용되는 투영 방식입니다.',
    forwardTitle: '정산(위경도→가우스 좌표)',
    forwardDescription: '정산은 지리 좌표(경도, 위도)를 평면 직각 좌표(X, Y)로 변환하는 과정입니다. X축은 북쪽을, Y축은 동쪽을 가리키며 원점은 중앙 자오선과 적도의 교점입니다.',
    inverseTitle: '반산(가우스 좌표→위경도)',
    inverseDescription: '반산은 평면 직각 좌표(X, Y)를 다시 지리 좌표(경도, 위도)로 변환하는 과정으로 정산의 역과정입니다.',
    parametersTitle: '파라미터 설명',
    ellipsoidParam: '타원체 파라미터',
    ellipsoidDescription: '지구 모양을 설명하는 수학적 모델로 다양한 측지 시스템에서 서로 다른 타원체 파라미터를 사용합니다. 일반적으로 WGS84, 베이징54, 시안80, CGCS2000 등이 사용됩니다.',
    projectionParam: '투영대 파라미터',
    projectionDescription: '가우스 투영은 일반적으로 3도대와 6도대로 구분됩니다. 3도대는 대축척 지형도에, 6도대는 중소축척 지형도에 적합합니다. 대번호는 중앙 자오선의 위치를 결정합니다.'
  },

  loadExample: '예제 로드',
  customEllipsoidSaved: '사용자 정의 타원체 저장 성공',

  guide: {
    title: '사용 가이드',
    forwardTitle: '정산(위경도→가우스 좌표)',
    step1: '상단에서 "정산" 계산 유형 선택',
    step2: '적절한 타원체 파라미터와 투영대 선택',
    step3: '십진수 형식의 위도와 경도 값 입력(예: 39.9042, 116.4074) 또는 도분초 입력 사용',
    step4: '결과가 자동으로 업데이트되거나 "계산" 버튼 클릭',
    
    inverseTitle: '반산(가우스 좌표→위경도)',
    step5: '상단에서 "반산" 계산 유형 선택',
    step6: 'X와 Y 좌표 입력(단위: 미터)',
    step7: '십진수 및 도분초 형식의 위경도 결과 확인',
    
    batchTitle: '일괄 처리',
    step8: '일괄 처리 영역에 여러 좌표 쌍 입력(한 줄에 한 쌍)',
    step9: '"일괄 계산" 버튼 클릭하여 모든 좌표를 한 번에 계산',
    step10: '결과를 CSV로 내보내거나 클립보드에 복사',
    
    mapTitle: '지도 상호작용',
    step11: '지도 클릭하여 점 추가 및 입력 값 자동 채우기',
    step12: '드롭다운 메뉴 사용하여 다른 지도 레이어 전환',
    step13: '점들을 GeoJSON, KML 또는 TXT 형식으로 내보내 다른 애플리케이션에서 사용'
  },

  gaussianProjectionPoints: '가우스 투영 점들',
  point: '점',
  gaussianProjection: '가우스 투영',
  supportedFormats: '지원 형식: CSV, TXT, Excel',
  excelExportNotice: 'Excel 내보내기 준비 완료, Excel에서 직접 이 파일을 열 수 있습니다.',
  excelProcessNotice: 'Excel 처리 완전 지원 안됨, 최상의 결과를 위해 CSV 형식 사용 권장.',
  exportAsCSV: 'CSV로 내보내기',
  exportAsExcel: 'Excel로 내보내기',
  excelExportSuccess: 'Excel 파일 내보내기 성공',
  excelExportFailed: 'Excel 내보내기 실패, CSV 형식으로 대체됨',
  excelImportSuccess: 'Excel 파일 가져오기 성공',
  excelImportFailed: 'Excel 가져오기 실패, CSV 형식 시도 바람',

  units: {
    metric: '미터 (m)',
    km: '킬로미터 (km)',
    imperial: '피트 (ft)',
    miles: '마일 (mi)'
  },

  resetView: '지도 뷰 초기화',
  pointsTotal: '개 점',
  currentPoint: '현재 결과'
};