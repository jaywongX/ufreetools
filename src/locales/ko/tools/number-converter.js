export default {
  name: '숫자 변환기',
  description: '다양한 진법과 형식 간에 숫자 변환',

  input: {
    title: '숫자 입력',
    placeholder: '변환할 숫자 입력',
    fromBase: '원본 진법',
    toBase: '대상 진법',
    customBase: '사용자 정의 진법'
  },

  bases: {
    binary: '이진법 (2진수)',
    octal: '팔진법 (8진수)',
    decimal: '십진법 (10진수)',
    hexadecimal: '십육진법 (16진수)',
    base32: '32진법',
    base36: '36진법',
    base58: '58진법',
    base64: '64진법',
    custom: '사용자 정의 진법'
  },

  options: {
    signed: '부호 있음',
    bitLength: '비트 길이',
    byteOrder: '바이트 순서',
    formatOutput: '출력 형식 지정',
    separator: '구분자',
    prefix: '접두사 추가',
    uppercase: '대문자'
  },

  byteOrders: {
    littleEndian: '리틀 엔디안',
    bigEndian: '빅 엔디안'
  },

  bitLengths: {
    '8': '8비트',
    '16': '16비트',
    '32': '32비트',
    '64': '64비트',
    custom: '사용자 정의'
  },

  output: {
    title: '변환 결과',
    binary: '이진법',
    octal: '팔진법',
    decimal: '십진법',
    hexadecimal: '십육진법',
    custom: '사용자 정의 진법',
    all: '모든 변환'
  },

  actions: {
    convert: '변환',
    clear: '지우기',
    copy: '결과 복사',
    swap: '진법 교환'
  },

  bitConverters: {
    title: '비트 변환기',
    ieee754: 'IEEE 754 부동소수점',
    twosComplement: '2의 보수',
    bitMask: '비트 마스크',
    bitField: '비트 필드 추출기'
  },

  calculators: {
    title: '계산',
    add: '덧셈',
    subtract: '뺄셈',
    multiply: '곱셈',
    divide: '나눗셈',
    modulo: '모듈로',
    power: '거듭제곱'
  },

  messages: {
    invalidInput: '선택한 진법에 유효하지 않은 숫자',
    outOfRange: '선택한 비트 길이 범위를 초과한 숫자',
    copied: '변환 결과가 클립보드에 복사됨',
    conversionComplete: '변환 완료'
  }
};