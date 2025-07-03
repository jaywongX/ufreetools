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
  article: {
    title: "해시 계산기: 암호화 해시 다이제스트 생성 및 검증",
    intro: "우리의 <strong>온라인 해시 계산기</strong>는 모든 텍스트 또는 파일에 대한 암호화 해시 값을 생성하는 간편한 방법을 제공합니다. 이 무료 해시 생성 도구는 MD5, SHA-1, SHA-256, SHA-512, RIPEMD, BLAKE 등 다양한 알고리즘을 지원합니다.",
    features: {
      title: "해시 함수 및 응용 분야 이해",
      description: "<strong>해시 함수</strong>는 모든 크기의 입력 데이터를 고정 크기의 문자열로 변환하는 수학적 알고리즘입니다. UFreeTools의 <strong>해시 계산기</strong>는 보안 검증, 데이터 무결성 검사 또는 블록체인 응용을 위해 이러한 디지털 지문을 즉시 계산하는 데 도움을 줍니다.<br><br>암호화와 달리 해시 함수는 단방향 작업입니다. 데이터를 고유한 <strong>해시 다이제스트</strong>로 변환하지만 원본 입력을 복구할 수 없습니다. 암호화 해시의 핵심 특징은 입력의 작은 변화라도 완전히 다른 출력을 생성한다는 점으로, 이러한 <strong>해시 알고리즘</strong>은 데이터 무결성 검증 및 무단 수정 감지에 이상적입니다.",
      useCases: {
        title: "해시 함수의 실제 응용 사례",
        items: [
          "<strong>파일 무결성 검증</strong>: 소프트웨어 설치 전 다운로드한 파일의 해시 값을 개발자가 제공한 해시 값과 비교하여 변조 여부를 확인할 수 있습니다. 이렇게 하면 의도한 내용이 설치되며 악성 코드 주입을 방지할 수 있습니다.",
          "<strong>데이터 중복 제거</strong>: 저장 시스템은 디지털 서명을 비교하여 파일 이름에 관계없이 중복 파일을 식별하기 위해 <strong>해시 값</strong>을 사용합니다. 우리의 도구는 자체 중복 제거 요구 사항을 위해 이러한 식별자를 빠르게 계산하는 데 도움을 줍니다.",
          "<strong>비밀번호 보안</strong>: 현대 인증 시스템은 실제 비밀번호 대신 <strong>비밀번호 해시</strong>를 저장합니다. 우리의 도구는 이 프로세스를 이해하는 데 도움이 되지만, 프로덕션 환경에서는 솔트가 포함된 전용 비밀번호 해시 함수를 사용해야 합니다.",
          "<strong>디지털 포렌식</strong>: 조사관은 <strong>해시 계산기</strong>를 사용하여 파일 지문을 생성하고 증거의 진위를 확립합니다. 해시 값은 조사 과정에서 디지털 증거가 수정되지 않았음을 증명합니다.",
          "<strong>블록체인 응용</strong>: <strong>암호화 해시</strong>는 블록체인 기술의 기초를 형성하며, SHA-256 및 Keccak-256과 같은 알고리즘(각각 비트코인 및 이더리움에서 사용)은 변조 방지 체인에서 트랜잭션 기록을 보호합니다. 우리의 도구를 사용하여 이러한 동일한 알고리즘을 시험해 볼 수 있습니다.",
          "<strong>콘텐츠 검증</strong>: 저자 및 콘텐츠 제작자는 원본 작품의 <strong>해시 다이제스트</strong>를 게시하여 다른 사람들이 진정하고 수정되지 않은 버전을 소유하고 있는지 확인할 수 있는 방법을 제공할 수 있습니다."
        ]
      },
      toolAdvantages: {
        title: "우리 해시 계산기의 장점",
        items: [
          "MD5부터 BLAKE3와 같은 최신 옵션까지 30개 이상의 해시 알고리즘 지원",
          "로컬 처리로 민감한 데이터가 장치를 떠나지 않음",
          "예상 값에 대해 해시를 검증하여 데이터 무결성 확인",
          "다양한 형식(16진수 및 Base64)으로 결과 확인",
          "텍스트 입력 및 최대 100MB 파일에 대한 해시 계산",
          "여러 알고리즘의 결과 동시 비교"
        ]
      }
    },
    faq: {
      title: "해시 함수에 관한 자주 묻는 질문",
      items: [
        {
          question: "MD5, SHA-1 및 SHA-256의 차이점은 무엇인가요?",
          answer: "이들은 보안성과 출력 길이 측면에서 차이가 있는 다양한 암호화 해시 알고리즘입니다. <strong>MD5</strong>는 128비트(16바이트) 해시 값을 생성하지만 충돌이 발견되어 암호학적으로 깨진 것으로 간주됩니다. <strong>SHA-1</strong>은 160비트(20바이트) 해시를 생성하며 MD5보다 강력하지만 이론적 공격으로 인해 더 이상 보안이 중요한 응용에는 권장되지 않습니다. <strong>SHA-256</strong>은 SHA-2 패밀리에 속하며 256비트(32바이트) 해시를 생성하며 현재 대부분의 응용에서 안전한 것으로 간주됩니다. 보안이 중요한 목적에는 SHA-256 또는 SHA-512, SHA3과 같은 더 강력한 알고리즘을 사용하는 것이 좋으며, MD5와 SHA-1은 체크섬 및 중복 제거와 같은 비보안 응용에만 사용할 수 있습니다. <a href='https://csrc.nist.gov/projects/hash-functions' target='_blank' rel='noopener noreferrer'>미국 국립표준기술연구소(NIST)</a>에서 해시 알고리즘 보안에 대해 자세히 알아보세요."
        },
        {
          question: "암호화 해시 함수는 얼마나 안전한가요?",
          answer: "해시 함수의 보안성은 세 가지 핵심 특성에 달려 있습니다: 충돌 저항성(동일한 해시를 가진 두 입력을 찾기 어려움), 역상 저항성(해시에서 입력을 결정할 수 없음), 제2 역상 저항성(주어진 입력과 동일한 해시를 가진 다른 입력을 찾기 어려움). <strong>SHA-256</strong>, <strong>SHA-512</strong> 및 <strong>SHA3</strong>과 같은 현대 알고리즘은 암호학적으로 안전한 것으로 간주되지만 MD5 및 SHA-1과 같은 오래된 알고리즘에는 알려진 취약점이 있습니다. 컴퓨팅 성능 증가 및 새로운 공격 방법 발견에 따라 보안 표준은 시간이 지남에 따라 진화합니다. 높은 보안이 필요한 응용의 경우 항상 최신 권장 해시 함수(현재는 SHA-256 이상)를 사용하고 <a href='https://www.schneier.com/blog/archives/2005/02/cryptanalysis_o.html' target='_blank' rel='noopener noreferrer'>Bruce Schneier의 암호학 블로그</a>와 같은 리소스를 통해 암호학 발전을 주시하세요."
        },
        {
          question: "해시 계산기로 파일 무결성을 검증할 수 있나요?",
          answer: "예, 우리의 <strong>온라인 해시 계산기</strong>는 파일 무결성 검증에 완벽합니다. 소프트웨어를 다운로드할 때 많은 공급자가 파일의 해시 체크섬을 게시합니다. 무결성을 검증하려면: 1) 우리의 도구에서 다운로드한 파일을 선택하세요, 2) 공급자가 사용한 동일한 해시 알고리즘(일반적으로 SHA-256)을 선택하세요, 3) 해시를 계산하세요, 4) 게시된 값과 비교하세요. 완전히 일치하면 파일이 손상되지 않고 변조되지 않았습니다. 이 검증 프로세스는 다운로드 중 우발적 손상과 잠재적 악의적 변조로부터 보호합니다. 이 도구는 브라우저에서 로컬로 파일을 처리하므로 대용량 파일도 편리하게 처리할 수 있으며 개인 정보와 보안을 유지합니다. <a href='https://ubuntu.com/download/desktop/thank-you' target='_blank' rel='noopener noreferrer'>Ubuntu</a> 또는 <a href='https://www.python.org/downloads/' target='_blank' rel='noopener noreferrer'>Python</a>과 같이 설치 파일에 해시 값을 제공하는 소스에서 체크섬을 검증할 수 있습니다."
        },
        {
          question: "이 해시 계산기는 비밀번호 해싱에 적합한가요?",
          answer: "우리의 <strong>해시 생성기</strong>는 비밀번호 해싱이 어떻게 작동하는지 보여줄 수 있지만, 실제 비밀번호 저장 구현에는 bcrypt, Argon2 또는 PBKDF2와 같은 전용 비밀번호 해시 함수를 사용해야 하며 원시 해시 함수는 사용하지 않아야 합니다. 이러한 전용 알고리즘은 솔팅(각 비밀번호에 임의 데이터 추가) 및 키 스트레칭(해시 프로세스를 의도적으로 느리게 함)과 같은 중요한 보안 기능을 포함하여 레인보우 테이블 공격 및 무차별 대입 시도로부터 보호합니다. 우리의 도구는 교육 목적이나 일반 해시 동작 테스트에 적합하지만 프로덕션 시스템은 적절한 솔팅, 스트레칭 및 보안 모범 사례를 갖춘 전용 비밀번호 해시 라이브러리를 구현해야 합니다. 안전한 비밀번호 저장에 대한 자세한 정보는 <a href='https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html' target='_blank' rel='noopener noreferrer'>OWASP 비밀번호 저장 치트 시트</a>를 참조하세요."
        },
        {
          question: "다른 형식의 해시를 어떻게 비교하거나 검증하나요?",
          answer: "우리의 <strong>해시 검증 도구</strong>는 형식 차이에 관계없이 해시를 쉽게 비교할 수 있도록 합니다. 이 도구는 소문자 16진수(가장 일반적인 형식), 대문자 16진수 및 Base64 인코딩을 포함한 여러 형식으로 결과를 표시합니다. 해시를 검증하려면: 1) 데이터의 해시를 계산하세요, 2) 검증 섹션에 비교할 해시를 입력하세요, 3) 도구가 자동으로 비교하여 적절하게 대소문자 민감도를 처리합니다. 참조 해시가 계산된 해시와 대소문자가 다르더라도(대문자 대 소문자) 이 검증은 유효합니다. 알고리즘 간 검증의 경우 참조 해시와 동일한 알고리즘을 사용하여 해시를 다시 계산해야 합니다. 다른 알고리즘은 동일한 입력 데이터에 대해 근본적으로 다른 출력을 생성하기 때문입니다."
        },
        {
          question: "특정 요구 사항에 어떤 해시 알고리즘을 사용해야 하나요?",
          answer: "최적의 알고리즘은 특정 요구 사항에 따라 다릅니다:<br><strong>일반 용도 및 높은 보안</strong>: SHA-256은 보안과 성능의 좋은 균형을 제공합니다.<br><strong>블록체인 응용</strong>: SHA-256(비트코인) 또는 Keccak-256(이더리움)은 업계 표준입니다.<br><strong>극도로 민감한 데이터</strong>: SHA-512 또는 SHA3-512는 최고 수준의 보안을 제공합니다.<br><strong>성능이 중요한 응용</strong>: BLAKE2 또는 BLAKE3는 보안성과 탁월한 속도를 제공합니다.<br><strong>레거시 시스템 호환성</strong>: SHA-1 또는 MD5가 필요할 수 있지만 보안 제한 사항을 이해하세요.<br><strong>파일 체크섬</strong>: CRC32는 빠르지만 오류 감지 전용이며 보안에는 적합하지 않습니다. 보안 체크섬에는 SHA-256을 권장합니다.<br>의심스러운 경우 SHA-256은 보안이 필요한 대부분의 현대 응용에 대한 신뢰할 수 있는 기본 선택입니다. 우리의 <a href='https://www.ufreetools.com/tools/hash-calculator' target='_blank'>해시 계산기</a>를 사용하여 다양한 알고리즘을 실험하고 출력을 비교해 보세요."
        }
      ]
    },
    guide: {
      title: "해시 계산기 사용 단계별 안내",
      intro: "다음 간단한 단계에 따라 텍스트 또는 파일에 대한 해시를 생성하고 검증하세요:",
      step1: "<strong>입력 유형 선택</strong>: 해시할 내용에 따라 \"텍스트\" 또는 \"파일\" 입력 옵션 중에서 선택하세요. 텍스트 입력은 문자열, 비밀번호 또는 작은 데이터 조각에 적합하며, 파일 입력은 모든 유형의 전체 파일을 처리할 수 있습니다.",
      step2: "<strong>해시 알고리즘 선택</strong>: 드롭다운 메뉴에서 적절한 <strong>해시 알고리즘</strong>을 선택하세요. 일반 용도 및 높은 보안에는 SHA-256을 권장합니다. 특정 시스템과 호환되려면 MD5, SHA-1 또는 기타 알고리즘을 선택해야 할 수 있습니다.",
      step3: "<strong>데이터 입력</strong>: 텍스트 입력의 경우 입력 필드에 텍스트를 입력하거나 붙여넣으세요. 파일 입력의 경우 업로드 영역을 클릭하거나 파일을 드래그 앤 드롭하세요. <strong>해시 함수</strong>는 이 입력을 처리하여 고유한 다이제스트를 생성합니다.",
      step4: "<strong>인코딩 옵션 설정</strong>: 텍스트 입력을 사용하는 경우 적절한 문자 인코딩(UTF-8이 가장 일반적이며 대부분의 텍스트에 권장됨)을 선택하세요. 이렇게 하면 텍스트가 해시되기 전에 올바르게 해석됩니다.",
      step5: "<strong>해시 생성</strong>: \"해시 계산\" 버튼을 클릭하여 입력을 처리하고 <strong>해시 다이제스트</strong>를 생성하세요. 도구는 선택한 알고리즘을 사용하여 해시 값을 계산하고 결과를 표시합니다.",
      step6: "<strong>결과 확인 및 복사</strong>: 계산된 해시는 여러 형식(16진수 및 Base64)으로 표시됩니다. 각 형식 옆의 복사 버튼을 사용하여 해시 값을 클립보드에 복사하여 다른 응용 프로그램에서 사용할 수 있습니다.",
      step7: "<strong>해시 검증(선택 사항)</strong>: 기존 해시와 검증하려면 결과 아래의 검증 섹션에 참조 해시를 입력하세요. 시스템은 자동으로 이를 계산된 해시와 비교하고 일치 여부를 표시합니다.",
      additionalTips: "대용량 파일의 경우 장치 성능에 따라 처리에 시간이 걸릴 수 있습니다. 처리는 브라우저에서 완전히 이루어지므로 데이터가 컴퓨터를 떠나지 않는다는 점을 기억하세요."
    },
    relatedTools: {
      title: "유용할 수 있는 관련 도구",
      tools: [
        {
          name: "비밀번호 생성기",
          description: "계정을 위한 강력하고 안전한 비밀번호 생성",
          url: "https://www.ufreetools.com/tools/password-generator"
        },
        {
          name: "텍스트 인코더/디코더",
          description: "Base64, URL 및 HTML과 같은 다양한 인코딩 간에 텍스트 변환",
          url: "https://www.ufreetools.com/tools/text-encoder-decoder"
        },
        {
          name: "파일 변환기",
          description: "파일을 다른 형식으로 변환",
          url: "https://www.ufreetools.com/tools/file-converter"
        }
      ]
    },
    conclusion: "해시 계산기는 기본 파일 무결성 검증부터 고급 보안 구현까지 다양한 응용 분야에서 암호화 해시 함수를 활용할 수 있는 강력하고 사용하기 쉬운 방법을 제공합니다. 다양한 업계 표준 알고리즘과 사용자 친화적인 인터페이스를 제공함으로써 이 도구는 복잡한 암호학 개념과 실제 일상 응용 사이의 격차를 해소합니다. 보안 기능을 구현하는 개발자, 소프트웨어 무결성을 검증하는 IT 전문가 또는 단순히 해시 함수 작동 방식에 관심이 있는 사람이든 이 계산기를 통해 브라우저에서 직접 강력한 암호화 기능에 즉시 액세스할 수 있습니다. 데이터 무결성과 보안이 개인 및 전문 분야에서 중요한 관심사가 되는 디지털 세계에서 해시 함수를 이해하고 활용하는 것은 점점 더 중요해지고 있습니다."
  },
  listGroups: {
    common: '일반 알고리즘',
    sha2: 'SHA-2 시리즈',
    sha3: 'SHA-3 시리즈',
    other: '기타 알고리즘'
  },
  metaTitle: '온라인 해시 계산기 - 암호화 해시 값 생성 및 검증',
  metaDescription: '무료 온라인 해시 도구로 텍스트 또는 파일에 대한 암호화 해시 값을 생성하고 검증할 수 있습니다. {algorithms} 등 다양한 알고리즘을 지원합니다.'
}