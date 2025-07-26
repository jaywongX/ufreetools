export default {
  name: '온라인 해시 계산기 | SHA-256, MD5, SHA-3, BLAKE3, SM3 등 다양한 알고리즘 지원',
  description: '무료 온라인 해시 계산기로 SHA-256, MD5, SHA-3, BLAKE3, SM3 등 다양한 암호화 및 검증 알고리즘을 지원합니다. 파일 무결성 검증, 데이터 보안 처리 등에 사용할 수 있습니다.',

  input: {
    title: '입력',
    text: '텍스트 입력',
    file: '파일 입력',
    textPlaceholder: '해시를 계산할 텍스트를 입력하세요...',
    fileSelect: '파일 선택',
    fileDrop: '파일을 여기에 끌어다 놓거나 클릭하여 업로드',
    fileSelected: '선택된 파일: {name}',
    fileSize: '{size}',
    removeFile: '파일 제거',
    localProcessing: '파일은 로컬에서 처리되며 서버에 업로드되지 않습니다',
    encoding: '인코딩',
    selectAlgorithm: '해시 알고리즘 선택',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    latin1: 'Latin1',
    calculate: '해시 계산',
    calculating: '계산 중...',
    clear: '입력 지우기',
    hashValue: '해시 값'
  },

  algorithms: {
    title: '알고리즘',
    selectAll: '전체 선택',
    deselectAll: '전체 해제',
    md5: 'MD5',
    sha1: 'SHA-1',
    sha224: 'SHA-224',
    sha256: 'SHA-256',
    sha384: 'SHA-384',
    sha512: 'SHA-512',
    sha3_224: 'SHA3-224',
    sha3_256: 'SHA3-256',
    sha3_384: 'SHA3-384',
    sha3_512: 'SHA3-512',
    ripemd160: 'RIPEMD-160',
    blake2b: 'BLAKE2b',
    blake2s: 'BLAKE2s',
    blake3: 'BLAKE3',
    keccak224: 'Keccak-224',
    keccak256: 'Keccak-256',
    keccak384: 'Keccak-384',
    keccak512: 'Keccak-512',
    whirlpool: 'Whirlpool',
    crc32: 'CRC32',
    hmac: 'HMAC 옵션',
    key: 'HMAC 키',
    keyPlaceholder: 'HMAC 키 입력'
  },

  results: {
    title: '해시 결과',
    algorithm: '알고리즘',
    digest: '다이제스트',
    noInput: '해시를 계산할 텍스트 또는 파일을 입력하세요',
    calculating: '계산 중...',
    copy: '복사',
    copied: '클립보드에 복사됨',
    copyFailed: '복사 실패, 수동으로 복사하세요',
    copyAll: '전체 복사',
    download: '결과 다운로드',
    fileInfo: '파일 정보',
    fileName: '이름',
    fileSize: '크기',
    fileType: '유형',
    lastModified: '마지막 수정 시간',
    hexFormat: '16진수 형식',
    base64Format: 'Base64 형식',
    upperHexFormat: '대문자 16진수 형식',
    hashValue: '해시 값',
    allHashesTitle: '모든 해시 알고리즘 결과',
    hexFormat: '16진수 형식',
    algorithm: '알고리즘',
    digest: '해시 값',
    export: 'CSV 내보내기',
    calculating: '계산 중...',
    copyToClipboard: '클립보드에 복사',
    allHashesTitle: '모든 알고리즘의 해시 값',
  },

  verification: {
    title: '해시 검증',
    inputVerifyHash: '검증할 해시 값 입력',
    placeholder: '비교할 해시 값을 입력하세요...',
    paste: '검증을 위해 해시 붙여넣기',
    matches: '해시 일치!',
    doesNotMatch: '해시 불일치',
    notFound: '알고리즘을 찾을 수 없음',
    verify: '검증',
    autoDetect: '알고리즘 자동 감지',
    result: '검증 결과'
  },

  options: {
    title: '옵션',
    uppercase: '대문자 출력',
    showTiming: '계산 시간 표시',
    autoCalculate: '자동 계산',
    formatOutput: '긴 출력 형식화',
    binaryOutput: '바이너리 보기 (비텍스트 파일용)',
    compareHashes: '해시 값 비교',
    hmacMode: 'HMAC 모드 활성화',
    autoCalculate: '자동 계산',
    showAllHashes: '모든 알고리즘의 해시 값 표시'
  },

  tools: {
    title: '도구',
    batchProcessing: '일괄 처리',
    fileHashTool: '파일 해시 디렉토리',
    hashIdentifier: '해시 유형 식별기',
    hmacGenerator: 'HMAC 생성기',
    checksumVerifier: '체크섬 검증기',
    passwordHasher: '패스워드 해셔'
  },

  batchTool: {
    title: '일괄 처리',
    addFiles: '파일 추가',
    processFiles: '파일 처리',
    clearAll: '모두 지우기',
    fileName: '파일 이름',
    algorithm: '알고리즘',
    status: '상태',
    actions: '작업',
    waiting: '대기 중',
    processing: '처리 중',
    complete: '완료',
    failed: '실패',
    remove: '제거',
    filesSelected: '{count}개의 파일 선택됨',
    exportResults: '결과 내보내기',
    selectAlgorithm: '모든 파일에 대한 알고리즘 선택'
  },

  messages: {
    fileTooBig: '파일이 너무 큽니다. 최대 허용 크기는 100MB입니다.',
    hashCalculated: '해시 계산 성공',
    invalidInput: '잘못된 입력',
    readError: '파일을 읽을 수 없음',
    processingError: '파일 처리 중 오류 발생: {error}',
    algorithmNotAvailable: '알고리즘을 사용할 수 없습니다. 필요한 라이브러리를 설치하세요.',
    algorithmFallback: '{algorithm}을(를) 사용할 수 없어 {fallback}을(를) 대신 사용합니다',
    moduleNotReady: '{name} 모듈이 아직 준비되지 않았습니다',
    algorithmError: '{algorithm} 오류: {error}'
  },

  security: {
    warning: '안전하지 않은 HTTP 연결에서 해시 도구를 사용하는 것은 보안 위험이 있습니다'
  },

  algorithmDetails: {
    title: '해시 알고리즘 정보',
    usage: '일반적인 용도',
    safe: '보안성',
    md2: {
      name: 'MD2 (128비트)',
      description: 'MD2는 널리 사용되는 해시 함수로, 128비트(16바이트) 해시 값을 생성하며 일반적으로 32개의 16진수 문자로 표시됩니다.',
      usage: '파일 무결성 검사, 비밀번호 저장(안전하지 않음)',
      security: '충돌 저항성이 부족함이 입증되었으며 보안이 중요한 상황에서는 사용하지 않아야 합니다.'
    },
    md4: {
      name: 'MD4 (128비트)',
      description: 'MD4는 널리 사용되는 해시 함수로, 128비트(16바이트) 해시 값을 생성하며 일반적으로 32개의 16진수 문자로 표시됩니다.',
      usage: '파일 무결성 검사, 비밀번호 저장(안전하지 않음)',
      security: '충돌 저항성이 부족함이 입증되었으며 보안이 중요한 상황에서는 사용하지 않아야 합니다.'
    },
    md5: {
      name: 'MD5 (128비트)',
      description: 'MD5는 널리 사용되는 해시 함수로, 128비트(16바이트) 해시 값을 생성하며 일반적으로 32개의 16진수 문자로 표시됩니다.',
      usage: '파일 무결성 검사, 비밀번호 저장(안전하지 않음)',
      security: '충돌 저항성이 부족함이 입증되었으며 보안이 중요한 상황에서는 사용하지 않아야 합니다.'
    },
    sha1: {
      name: 'SHA-1 (160비트)',
      description: 'SHA-1은 암호화 해시 함수로, 160비트(20바이트) 해시 값을 생성하며 일반적으로 40개의 16진수 문자로 표시됩니다.',
      usage: '버전 제어 시스템(예: Git), 파일 무결성 검증',
      security: '충돌 공격 취약점이 입증되었으며 보안이 중요한 응용 프로그램에는 권장되지 않습니다.'
    },
    sha224: {
      name: 'SHA-224 (224비트)',
      description: 'SHA-224는 SHA-2 패밀리의 일원으로, 224비트(28바이트) 해시 값을 생성합니다.',
      usage: '공간이 제한적이지만 강력한 보안이 필요한 경우에 적합',
      security: '우수한 보안성을 제공하며 SHA-256의 잘린 버전입니다'
    },
    sha256: {
      name: 'SHA-256 (256비트)',
      description: 'SHA-256은 SHA-2 시리즈에 속하며, 256비트(32바이트) 해시 값을 생성하며 일반적으로 64개의 16진수 문자로 표시됩니다.',
      usage: '디지털 서명, 디지털 인증서, 비밀번호 저장, 블록체인',
      security: '현재 안전한 것으로 간주되며 높은 보안이 필요한 상황에서 널리 사용됩니다.'
    },
    dsha256: {
      name: 'Double SHA-256',
      description: 'Double SHA-256은 SHA-256을 연속으로 두 번 실행하는 암호화 해시 함수로, 즉 SHA-256(SHA-256(x))입니다.',
      usage: '비트코인 및 기타 암호화폐에서 블록 해시, 트랜잭션 ID 및 주소 생성에 사용',
      security: '표준 SHA-256과 동일한 보안 보장을 제공하지만 추가적인 보안 계층을 추가하여 원본 입력을 역계산하기 어렵게 만듭니다.'
    },
    sha384: {
      name: 'SHA-384 (384비트)',
      description: 'SHA-384는 SHA-512의 잘린 버전으로, 384비트(48바이트) 해시 값을 생성합니다.',
      usage: 'SHA-256보다 더 높은 보안이 필요한 경우',
      security: 'SHA-256보다 더 강력한 보안을 제공하며 알려진 공격 방법이 없습니다.'
    },
    sha512: {
      name: 'SHA-512 (512비트)',
      description: 'SHA-512는 SHA-2 시리즈에서 가장 긴 표준 알고리즘으로, 512비트(64바이트) 해시 값을 생성합니다.',
      usage: '최고 수준의 보안이 필요한 응용 프로그램',
      security: '최고 수준의 보안을 제공하며 알려진 효과적인 공격이 없습니다.'
    },
    sha512_224: {
      name: 'SHA-512/224 (224비트)',
      description: 'SHA-512/224는 SHA-512의 변형으로, 출력이 224비트로 잘립니다.',
      usage: 'SHA-224와 동일한 길이를 제공하지만 SHA-512 내부 구조를 기반으로 합니다',
      security: '더 긴 데이터에 대해 더 나은 성능을 제공하면서 강력한 보안을 유지합니다'
    },
    sha512_256: {
      name: 'SHA-512/256 (256비트)',
      description: 'SHA-512/256는 SHA-512의 변형으로, 출력이 256비트로 잘립니다.',
      usage: '64비트 시스템에서 SHA-256보다 더 나은 성능 제공',
      security: 'SHA-256과 동등한 보안성을 제공하지만 일부 하드웨어에서 더 효율적입니다'
    },
    sha3_224: {
      name: 'SHA3-224 (224비트)',
      description: 'SHA3-224는 SHA-3 표준의 일부로, 224비트 출력을 제공합니다.',
      usage: '양자 컴퓨팅에 저항하는 중간 수준 보안이 필요한 경우에 적합',
      security: 'NIST 인증 보안 해시 알고리즘으로 우수한 보안을 제공합니다'
    },
    sha3_256: {
      name: 'SHA3-256 (256비트)',
      description: 'SHA3-256는 SHA-3 표준의 일부로, SHA-2 시리즈와 완전히 다른 내부 구조를 가지고 있습니다.',
      usage: '양자 컴퓨팅 위협에 저항하는 장기적인 보안 응용 프로그램',
      security: '향후 잠재적 공격(양자 컴퓨팅 공격 포함)에 저항하도록 설계되었습니다.'
    },
    sha3_384: {
      name: 'SHA3-384 (384비트)',
      description: 'SHA3-384는 SHA-3 표준의 일부로, 384비트 출력을 제공합니다.',
      usage: '높은 보안과 양자 컴퓨팅 저항이 필요한 경우',
      security: 'SHA3-256보다 더 강력한 보안을 제공하며 민감한 데이터 응용 프로그램에 적합합니다'
    },
    sha3_512: {
      name: 'SHA3-512 (512비트)',
      description: 'SHA3-512는 SHA-3 표준에서 최고 수준의 보안을 제공하는 알고리즘입니다.',
      usage: '극도로 높은 보안과 양자 컴퓨팅 저항이 필요한 경우',
      security: '최고 수준의 보안 보장을 제공하며 SHA-3 시리즈에서 가장 안전한 알고리즘입니다.'
    },
    sm3: {
      name: 'SM3 (256비트)',
      description: 'SM3는 중국 국가 암호 관리국에서 발표한 암호 해시 알고리즘 표준으로, 256비트 출력을 생성합니다.',
      usage: '중국 상용 암호 응용, 디지털 인증서 및 전자 정부 시스템',
      security: 'SHA-2와 유사하게 설계되었지만 공격 저항성이 최적화되어 중국에서 널리 사용됩니다'
    },
    ripemd160: {
      name: 'RIPEMD-160 (160비트)',
      description: 'RIPEMD-160은 유럽 RIPE 프로젝트에서 개발된 해시 함수로, 160비트 해시 값을 생성합니다.',
      usage: '비트코인 주소 생성, 블록체인 응용',
      security: '동일한 길이의 SHA-1보다 더 안전하지만 덜 사용됩니다.'
    },
    crc32: {
      name: 'CRC32 (32비트)',
      description: 'CRC32는 오류 감지를 위해 일반적으로 사용되는 순환 중복 검사 함수입니다.',
      usage: '데이터 무결성 검사, 네트워크 통신, 데이터 전송 검증',
      security: '암호학적 보안 시나리오에는 적합하지 않으며 주로 오류 감지용으로 사용됩니다'
    },
    murmur3_x86_32: {
      name: 'MurmurHash3 x86 (32비트)',
      description: 'MurmurHash3는 비암호화 해시 함수로, 높은 성능과 낮은 충돌률로 유명하며 32비트 버전은 속도와 공간 효율성이 필요한 응용 프로그램에 적합합니다.',
      usage: '해시 테이블, 블룸 필터, 캐시 시스템, 데이터 샤딩',
      security: '비암호화 알고리즘이므로 보안 응용에는 적합하지 않지만 성능이 중요한 시나리오에서는 우수합니다'
    },
    murmur3_x86_128: {
      name: 'MurmurHash3 x86 (128비트)',
      description: 'MurmurHash3의 128비트 변형으로, 더 큰 해시 공간과 더 낮은 충돌 확률을 제공하며 대규모 데이터 세트에 적합합니다.',
      usage: '대형 해시 테이블, 데이터 중복 제거, 분산 시스템의 일관성 해시, 콘텐츠 주소 지정 저장소',
      security: '32비트 버전과 마찬가지로 비암호화 알고리즘이지만 충돌 확률이 더 낮아 고유성이 필요한 응용 프로그램에 적합합니다'
    },
    murmur3_x64_128: {
      name: 'MurmurHash3 x64 (128비트)',
      description: 'MurmurHash3의 128비트 변형으로, 더 큰 해시 공간과 더 낮은 충돌 확률을 제공하며 대규모 데이터 세트에 적합합니다.',
      usage: '대형 해시 테이블, 데이터 중복 제거, 분산 시스템의 일관성 해시, 콘텐츠 주소 지정 저장소',
      security: '32비트 버전과 마찬가지로 비암호화 알고리즘이지만 충돌 확률이 더 낮아 고유성이 필요한 응용 프로그램에 적합합니다'
    },
    blake2b: {
      name: 'BLAKE2b (512비트)',
      description: 'BLAKE2b는 빠르고 안전한 해시 함수로, 현대 CPU 아키텍처에 최적화되었습니다.',
      usage: '대규모 데이터 처리, 해시 테이블, 문자열 비교',
      security: '속도와 우수한 해시 분포를 목표로 설계되었지만 암호화 보안은 보장하지 않습니다'
    },
    blake2s: {
      name: 'BLAKE2s (256비트)',
      description: 'BLAKE2s는 빠르고 안전한 해시 함수로, 현대 CPU 아키텍처에 최적화되었습니다.',
      usage: '대규모 데이터 처리, 해시 테이블, 문자열 비교',
      security: '속도와 우수한 해시 분포를 목표로 설계되었지만 암호화 보안은 보장하지 않습니다'
    },
    blake3: {
      name: 'BLAKE3 (256비트)',
      description: 'BLAKE3는 빠르고 안전한 해시 함수로, 현대 CPU 아키텍처에 최적화되었습니다.',
      usage: '대규모 데이터 처리, 해시 테이블, 문자열 비교',
      security: '속도와 우수한 해시 분포를 목표로 설계되었지만 암호화 보안은 보장하지 않습니다'
    },
    keccak224: {
      name: 'Keccak-224 (224비트)',
      description: 'Keccak-224는 SHA-3 원본 알고리즘으로, 224비트 해시 값을 생성합니다.',
      usage: '이더리움 및 기타 블록체인 응용, 암호 시스템',
      security: '강력한 보안을 제공하며 표준화된 SHA-3 변형보다 블록체인 기술에서 더 일반적으로 사용됩니다'
    },
    keccak256: {
      name: 'Keccak-256 (256비트)',
      description: 'Keccak-256는 Keccak 시리즈에서 가장 널리 사용되는 변형으로, 256비트 해시 값을 생성합니다.',
      usage: '이더리움 스마트 계약, 블록체인 트랜잭션, 디지털 서명',
      security: '블록체인 응용에서 널리 신뢰받으며 표준화된 SHA3-256과 약간 다릅니다'
    },
    keccak384: {
      name: 'Keccak-384 (384비트)',
      description: 'Keccak-384는 Keccak 시리즈의 변형으로, 384비트 해시 값을 생성합니다.',
      usage: 'Keccak-256보다 더 높은 보안이 필요한 응용',
      security: '매우 강력한 보안 보장을 제공하지만 Keccak-256보다 덜 사용됩니다'
    },
    keccak512: {
      name: 'Keccak-512 (512비트)',
      description: 'Keccak-512는 Keccak 시리즈에서 가장 긴 표준 알고리즘으로, 512비트 해시 값을 생성합니다.',
      usage: '최대 충돌 저항이 필요한 높은 보안 응용',
      security: 'Keccak 시리즈에서 최고 수준의 보안을 제공하며 가장 민감한 데이터에 적합합니다'
    },
    shake128: {
      name: 'SHAKE128 (128비트)',
      description: 'SHAKE128는 SHA-3 패밀리의 일부로, 가변 길이 출력을 생성할 수 있으며 기본적으로 256비트 해시 값을 생성합니다.',
      usage: '가변 길이 출력이 필요한 암호 응용, 키 유도 함수',
      security: '우수한 보안성을 제공하며 NIST에서 인정한 보안 해시 알고리즘입니다'
    },
    shake256: {
      name: 'SHAKE256 (256비트)',
      description: 'SHAKE256는 SHA-3 패밀리의 일부로, 가변 길이 출력을 생성할 수 있으며 기본적으로 512비트 해시 값을 생성합니다.',
      usage: '더 긴 해시 출력이 필요한 높은 보안 응용',
      security: 'SHAKE128보다 더 강력한 보안 보장을 제공하며 민감한 데이터 응용에 적합합니다'
    },
    cshake128: {
      name: 'cSHAKE128 (사용자 정의 가변 길이 출력)',
      description: 'cSHAKE128는 SHAKE128의 사용자 정의 버전으로, 사용자 정의 문자열 및 함수 이름을 지원하며 가변 길이 출력을 생성할 수 있습니다.',
      usage: '사용자 정의 매개변수가 필요한 해시 알고리즘 시나리오, NIST 표준 키 유도 함수, 암호 프로토콜',
      security: 'SHAKE128과 동등한 보안성을 제공하며 애플리케이션 수준의 사용자 정의를 지원합니다'
    },
    cshake256: {
      name: 'cSHAKE256 (사용자 정의 가변 길이 출력)',
      description: 'cSHAKE256는 SHAKE256의 사용자 정의 버전으로, 사용자 정의 문자열 및 함수 이름을 지원하며 가변 길이 출력을 생성할 수 있습니다.',
      usage: '높은 보안이 필요한 사용자 정의 해시 시나리오, NIST 인증 유도 함수, 암호학 프로토콜',
      security: 'SHAKE256과 동등한 강력한 보안 보장을 제공하며 애플리케이션 수준의 매개변수화 사용자 정의를 허용합니다'
    },
  },

  listGroups: {
    common: '일반 알고리즘',
    sha2: 'SHA-2 시리즈',
    sha3: 'SHA-3 시리즈',
    other: '기타 알고리즘'
  },

  metaTitle: '온라인 해시 계산기 - 암호화 해시 값 생성 및 검증',
  metaDescription: '무료 온라인 해시 도구로 텍스트 또는 파일에 대한 암호화 해시 값을 생성하고 검증할 수 있습니다. {algorithms} 등 다양한 알고리즘을 지원합니다.'
};