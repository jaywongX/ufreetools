export default {
  name: 'JavaScript 난독화 도구',
  description: '다양한 난독화 기술로 JavaScript 코드를 보호합니다',
  input: {
    title: 'JavaScript 입력',
    placeholder: '여기에 JavaScript 코드를 입력하거나 붙여넣으세요',
    loadSample: '예제 로드',
    clearInput: '입력 지우기',
    uploadFile: 'JS 파일 업로드'
  },
  output: {
    title: '난독화된 코드',
    copied: '코드가 클립보드에 복사되었습니다',
    download: '난독화된 코드 다운로드',
    copyOutput: '코드 복사',
    clearOutput: '출력 지우기'
  },
  options: {
    title: '난독화 옵션',
    compact: '코드 압축',
    selfDefending: '자기 방어',
    controlFlowFlattening: '제어 흐름 평탄화',
    controlFlowFlatteningThreshold: '제어 흐름 평탄화 임계값',
    deadCodeInjection: '죽은 코드 주입',
    deadCodeInjectionThreshold: '죽은 코드 주입 임계값',
    debugProtection: '디버그 보호',
    debugProtectionInterval: '디버그 보호 간격',
    disableConsoleOutput: '콘솔 출력 비활성화',
    domainLock: '도메인 잠금',
    domainLockRedirectUrl: '도메인 잠금 리디렉션 URL',
    identifierNamesGenerator: '식별자 이름 생성기',
    identifiersPrefix: '식별자 접두사',
    renameGlobals: '전역 변수 이름 변경',
    reservedNames: '예약된 이름',
    reservedStrings: '예약된 문자열',
    rotateStringArray: '문자열 배열 회전',
    seed: '시드',
    shuffleStringArray: '문자열 배열 섞기',
    sourceMap: '소스 맵',
    sourceMapBaseUrl: '소스 맵 기본 URL',
    sourceMapFileName: '소스 맵 파일 이름',
    splitStrings: '문자열 분할',
    splitStringsChunkLength: '문자열 분할 청크 길이',
    stringArray: '문자열 배열',
    stringArrayEncoding: '문자열 배열 인코딩',
    stringArrayThreshold: '문자열 배열 임계값',
    target: '대상',
    transformObjectKeys: '객체 키 변환',
    unicodeEscapeSequence: '유니코드 이스케이프 시퀀스'
  },
  presets: {
    title: '프리셋',
    low: '낮은 난독화',
    medium: '중간 난독화',
    high: '높은 난독화',
    custom: '사용자 정의'
  },
  actions: {
    obfuscate: '난독화',
    reset: '옵션 초기화',
    savePreset: '프리셋 저장',
    loadPreset: '프리셋 로드'
  },
  messages: {
    obfuscationSuccess: '코드 난독화 성공',
    obfuscationFailed: '난독화 실패: {error}',
    emptyCode: '난독화할 JavaScript 코드를 입력하세요',
    uploadSuccess: '파일 업로드 성공',
    presetSaved: '프리셋이 저장되었습니다',
    presetLoaded: '프리셋이 로드되었습니다'
  },
  help: {
    title: '옵션 도움말',
    stringArrayDesc: '문자열 리터럴을 특수 배열로 이동하고 배열 호출로 대체합니다',
    controlFlowDesc: '코드 제어 흐름 평탄화를 활성화하여 논리를 이해하기 어렵게 만듭니다',
    deadCodeDesc: '공격자를 혼동시키기 위해 무작위 죽은 코드를 주입합니다',
    selfDefendingDesc: '출력이 형식 수정에 저항할 수 있도록 합니다'
  }
}