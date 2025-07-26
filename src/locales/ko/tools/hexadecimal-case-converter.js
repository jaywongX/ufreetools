export default {
  name: '16진수 대소문자 변환기',
  description: '16진수 문자열을 대문자와 소문자 간 변환 및 다양한 접두사, 구분자, 그룹화 옵션 지원',

  input: {
    title: '16진수 입력',
    placeholder: '16진수 값을 입력하세요...'
  },

  output: {
    title: '변환 결과',
    placeholder: '변환 결과가 여기에 표시됩니다...'
  },

  prefix: {
    title: '접두사',
    none: '없음',
  },

  format: {
    title: '대소문자 형식',
    uppercase: '대문자',
    lowercase: '소문자'
  },

  separator: {
    title: '구분자',
    none: '없음',
    space: '공백',
    comma: '쉼표',
    colon: '콜론',
    semicolon: '세미콜론'
  },

  grouping: {
    title: '그룹화 (바이트)',
    none: '없음'
  },

  actions: {
    copy: '복사',
    clear: '지우기',
    convert: '변환'
  },

  messages: {
    copied: '클립보드에 복사되었습니다',
    copyFailed: '복사 실패',
    invalidHex: '유효하지 않은 16진수 값'
  },

  examples: {
    title: '예시',
    example1: {
      title: '"Hello World"의 16진수',
    },
    example2: {
      title: '0x 접두사가 있는 ASCII Hello',
    },
    example3: {
      title: 'DEADBEEF (일반적인 디버그 값)',
    },
    example4: {
      title: 'MAC 주소 형식',
    }
  },

  tips: {
    title: '팁',
    tip1: '16진수 값은 0-9와 A-F(또는 a-f) 문자를 사용합니다',
    tip2: '다른 접두사는 다른 상황에서 사용됩니다: 프로그래밍의 0x, 색상의 # 등',
    tip3: '그룹화와 구분자를 사용하면 긴 16진수 문자열의 가독성을 높일 수 있습니다',
    tip4: 'MAC 주소는 일반적으로 콜론 구분자와 1바이트 그룹화를 사용합니다'
  }
};