export default {
  name: '좌표계 변환기',
  description: 'WGS-84, GCJ-02, BD-09, Web 메르카토르 및 UTM 등 다양한 좌표계 간 지리 좌표 변환',
  title: '좌표계 변환기 - WGS84, GCJ02, BD09 등 좌표계 간 변환',
  metaDescription: '무료 온라인 좌표계 변환기로 WGS-84, GCJ-02(화성 좌표), BD-09(바이두 좌표), Web 메르카토르 및 UTM 좌표계 간 좌표 변환 가능. 설치 불필요.',

  seo: {
    title: '좌표계 변환 도구 | 지리 좌표계 상호 변환 도구',
    description: 'WGS-84, GCJ-02(중국), BD-09, Web 메르카토르 및 UTM 투영 등 다양한 지리 좌표계 간 무료 온라인 변환 도구.'
  },

  labels: {
    sourceSystem: '원본 좌표계',
    targetSystem: '대상 좌표계',
    latitude: '위도',
    longitude: '경도',
    x: 'X 좌표(동쪽 거리)',
    y: 'Y 좌표(북쪽 거리)',
    results: '변환 결과',
    formatted: '포맷된 좌표',
    mapPreview: '지도 미리보기',
    batchConversion: '일괄 변환',
    batchInput: '좌표 입력(한 줄에 한 쌍)',
    inputFormat: '입력 형식',
    batchResults: '변환 결과'
  },

  placeholders: {
    latitude: '위도 입력(예: 39.909187)',
    longitude: '경도 입력(예: 116.397451)',
    x: 'X 좌표 입력(예: 12959167.71)',
    y: 'Y 좌표 입력(예: 4825908.23)',
    batchInput: '좌표 입력, 한 줄에 한 쌍\n예시:\n39.909187, 116.397451\n31.230416, 121.473701'
  },

  buttons: {
    convert: '좌표 변환',
    converting: '변환 중...',
    swap: '시스템 교환',
    reset: '초기화',
    batchConvert: '일괄 변환',
    batchConverting: '일괄 변환 중...',
    copyResults: '결과 복사',
    exportCsv: 'CSV로 내보내기',
    loadExample: '예시 로드',
    loadBatchExample: '일괄 예시 로드'
  },

  formats: {
    latlon: '위도 경도(공백 구분)',
    lonlat: '경도 위도(공백 구분)',
    latlon_comma: '위도, 경도(쉼표 구분)',
    lonlat_comma: '경도, 위도(쉼표 구분)',
    latLng: '{lat}, {lng}',
    xy: '{x}, {y}'
  },

  messages: {
    copied: '클립보드에 복사됨',
    noCoordinates: '변환할 좌표를 입력하세요',
    batchSuccess: '모든 좌표 변환 성공'
  },

  errors: {
    invalidCoordinates: '유효하지 않은 좌표 값',
    conversionFailed: '변환 실패',
    copyFailed: '클립보드 복사 실패',
    invalidFormat: '유효하지 않은 좌표 형식',
    batchFailed: '일부 좌표 변환 실패'
  },

  sections: {
    tips: {
      title: '변환 팁',
      item1: 'WGS-84는 GPS 및 중국 외부 Google 지도에서 사용되는 글로벌 표준',
      item2: 'GCJ-02는 중국 본토 지도에서 법적으로 요구되는 좌표계',
      item3: 'BD-09는 바이두 지도 서비스 전용',
      item4: 'Web 메르카토르는 대부분의 웹 지도 앱에서 사용됨'
    },
    about: {
      title: '좌표계 정보',
      wgs84: 'WGS-84(세계 측지 시스템 1984)는 GPS에서 사용되는 참조 좌표계로, 국제 지도 및 위치 지정 표준입니다.',
      gcj02: 'GCJ-02는 중국 본토에서 법적으로 요구되는 공식 좌표계입니다. 보안 이유로 WGS-84에 암호화 알고리즘을 적용하여 위치 오프셋을 생성합니다.',
      bd09: 'BD-09는 바이두 지도 및 서비스에서 사용되는 좌표계로, GCJ-02 좌표에 추가 변환을 적용하여 더욱 암호화합니다.',
      webmercator: 'Web 메르카토르(EPSG:3857)는 많은 웹 지도 서비스에서 사용되는 원통형 투영법입니다. 지구를 평면으로 나타내며 좌표는 미터 단위로, 웹 시각화에 적합합니다.',
      utm: 'UTM(범용 횡단 메르카토르)은 지구를 60개 영역으로 나누는 그리드 기반 시스템입니다. 좌표는 각 영역 원점을 기준으로 미터 단위의 동쪽 거리와 북쪽 거리로 표시됩니다.',
      dms: '도분초(DMS)는 지리 좌표를 나타내는 전통적인 방식입니다. 십진수 대신 좌표를 도(°), 분(′), 초(″)로 나눕니다.',
      epsg3857: 'EPSG:3857은 Web 메르카토르 투영의 공식 식별자로, 주요 웹 지도 앱에서 사용됩니다. 타원체 지구를 평면에 투영하여 화면에 표시합니다.',
      amap: '가오데 좌표계는 GCJ-02와 동일하며, 중국 정부가 요구하는 중국 본토 지도에서 사용되는 좌표계입니다. WGS-84 좌표에 복잡한 암호화 알고리즘을 적용하여 오프셋을 생성합니다.',
      cgcs2000: '중국 2000 국가 측지 좌표계(CGCS2000)는 중국이 2000년에 수립한 국가 좌표계입니다. WGS-84와 매우 유사하며 미세한 차이만 있습니다.',
      lambert: '람베르트 등각 원추형 투영은 작은 영역의 각도와 모양을 유지합니다. 국가, 주 또는 대륙과 같은 중위도 지역의 지도에 자주 사용됩니다.',
      miller: '밀러 원통형 투영은 메르카토르 투영의 변형으로, 고위도 지역의 왜곡을 줄여 세계 지도에 적합합니다.',
      polar: '극좌표는 위치를 기준점(극)에 대한 거리와 기준 방향에 대한 각도로 나타냅니다. 극지역 지도 제작에 유용합니다.',
      dkk: '더린카이트 투영(DKK, 더린하-카시-쿤밍)은 중국 특정의 원추형 투영으로, 일부 국가적 지도 제작에 사용되며 전국적 왜곡을 최소화합니다.'
    },
  },

  export: {
    filename: '좌표_변환',
    originalLat: '원본 위도',
    originalLng: '원본 경도',
    convertedLat: '변환된 위도',
    convertedLng: '변환된 경도'
  },

  systems: {
    wgs84: {
      name: 'WGS-84 (GPS 좌표)',
      description: '세계 측지 시스템 1984, GPS 및 대부분의 국제 지도 앱에서 사용'
    },
    gcj02: {
      name: 'GCJ-02 (화성 좌표계)',
      description: '중국에서 의무적으로 사용되는 좌표계. WGS-84 좌표에 암호화 알고리즘을 적용하여 보안 이유로 위치 오프셋을 생성합니다.'
    },
    bd09: {
      name: 'BD-09 (바이두 좌표계)',
      description: '바이두 지도 및 서비스에서 사용되는 시스템으로, GCJ-02 좌표에 추가 변환을 적용하여 더욱 암호화합니다.'
    },
    webmercator: {
      name: 'Web 메르카토르 (EPSG:3857)',
      description: '많은 웹 지도 서비스에서 사용되는 원통형 투영. 지구를 평면으로 나타내며 좌표는 미터 단위로, 웹 시각화에 적합합니다.'
    },
    utm: {
      name: 'UTM (범용 횡단 메르카토르)',
      description: '지구를 60개 영역으로 나누는 그리드 기반 시스템. 좌표는 각 영역 원점을 기준으로 미터 단위의 동쪽 거리와 북쪽 거리로 표시됩니다.'
    },
    dms: {
      name: '도분초 (DMS)',
    },
    epsg3857: {
      name: 'EPSG:3857',
    },
    amap: {
      name: '가오데 좌표계',
    },
    cgcs2000: {
      name: 'CGCS2000 국가 측지 좌표계',
    },
    lambert: {
      name: '람베르트 투영',
    },
    miller: {
      name: '밀러 투영',
    },
    polar: {
      name: '극좌표',
    },
    dkk: {
      name: '더린카이트 투영',
    }
  }
};