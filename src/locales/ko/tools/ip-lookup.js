export default {
  name: 'IP 주소 조회 도구',
  description: 'IP 주소의 상세 정보 확인, 위치 및 네트워크 정보 포함',

  input: {
    title: 'IP 주소 조회',
    ipAddress: 'IP 주소',
    ipPlaceholder: 'IP 주소 입력 (예: 8.8.8.8)',
    hostname: '호스트명',
    hostnamePlaceholder: '또는 호스트명 입력 (예: google.com)',
    options: '조회 옵션',
    includeGeolocation: '지리적 위치 포함',
    includeASN: 'ASN 정보 포함',
    includeDomains: '연관 도메인 포함',
    includeAbuse: '남용 연락처 포함',
    myIP: '내 IP 주소 사용'
  },

  actions: {
    lookup: 'IP 조회',
    clear: '결과 초기화',
    copyIP: 'IP 복사',
    copyAll: '모든 정보 복사',
    export: '결과 내보내기'
  },

  results: {
    title: 'IP 정보',
    noResults: '표시할 정보 없음',
    error: '오류: {message}',
    unknown: '알 수 없음',
    queryTime: '조회 시간',
    dataSource: '데이터 소스',
    general: {
      title: '기본 정보',
      ipAddress: 'IP 주소',
      hostname: '호스트명',
      type: '유형',
      ipv4: 'IPv4',
      ipv6: 'IPv6',
      isPublic: '공용 IP',
      yes: '예',
      no: '아니오',
      reverse: '역방향 DNS'
    },
    location: {
      title: '위치',
      country: '국가',
      region: '지역',
      city: '도시',
      postalCode: '우편번호',
      timezone: '시간대',
      coordinates: '좌표',
      latitude: '위도',
      longitude: '경도'
    },
    network: {
      title: '네트워크',
      asn: 'ASN',
      organization: '조직',
      isp: '인터넷 서비스 제공자',
      usage: '사용 유형',
      domain: '도메인',
      route: '경로',
      subnet: '서브넷',
      netmask: '네트워크 마스크',
      cidr: 'CIDR 표기법'
    },
    security: {
      title: '보안 정보',
      threat: '위협 감지',
      isTor: 'Tor 출구 노드',
      isProxy: '프록시',
      isVpn: 'VPN',
      isAttacker: '알려진 공격자',
      isAbuser: '알려진 남용자',
      threatLevel: '위협 수준',
      confidenceScore: '신뢰도 점수',
      abuseReports: '남용 보고서',
      lastReported: '마지막 보고 시간'
    },
    additional: {
      title: '추가 정보',
      mobile: '모바일 네트워크',
      hosting: '호스팅 제공자',
      associated: '연관 도메인',
      abuseContact: '남용 연락처'
    }
  },

  map: {
    title: '위치 지도',
    noLocation: '사용 가능한 위치 데이터 없음',
    viewLarger: '더 큰 지도 보기'
  },

  messages: {
    lookingUp: '{query} 정보 조회 중...',
    copied: '클립보드에 복사됨',
    exported: '결과 내보내기 성공',
    invalidIP: '유효하지 않은 IP 주소',
    invalidHostname: '유효하지 않은 호스트명',
    publicIPOnly: '이 도구는 공용 IP 주소만 지원합니다',
    rateLimited: '요청 제한 초과. 잠시 후 다시 시도해 주세요.',
    historyCleared: '기록이 초기화되었습니다'
  },

  history: {
    title: '검색 기록',
    clear: '기록 지우기'
  }
};