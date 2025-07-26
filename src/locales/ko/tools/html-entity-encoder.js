export default {
  name: 'HTML 엔티티 인코더',
  description: 'HTML 텍스트와 엔티티 인코딩 간 변환',
  title: 'HTML 엔티티 인코더/디코더',
  intro: 'HTML 엔티티 인코딩은 특수 문자를 HTML 안전 형식으로 변환하는 데 사용되며, 주로 XSS 공격 방지나 HTML 소스 코드 표시에 활용됩니다.',

  operation: {
    title: '작업 유형',
    encode: 'HTML 엔티티 인코딩',
    decode: 'HTML 엔티티 디코딩'
  },

  mode: {
    title: '인코딩 모드',
    named: '명명된 엔티티 (&amp;lt;)',
    decimal: '10진수 엔티티 (&amp;#60;)',
    hex: '16진수 엔티티 (&amp;#x3C;)',
    full: '완전 인코딩 (모든 문자)'
  },

  input: {
    encodeTitle: '인코딩할 텍스트',
    decodeTitle: '디코딩할 텍스트',
    encodePlaceholder: '인코딩할 HTML 또는 텍스트 입력...',
    decodePlaceholder: '디코딩할 HTML 엔티티 텍스트 입력...',
    clear: '지우기'
  },

  output: {
    encodeTitle: '인코딩 결과',
    decodeTitle: '디코딩 결과',
    copy: '결과 복사',
    copied: '(복사됨',
    preview: '미리보기',
    showSource: '소스 코드 보기'
  },

  reference: {
    title: '엔티티 참조',
    commonReferenceTables: '일반 HTML 엔티티 참조 표',
    show: '표 보기',
    hide: '표 숨기기',
    description: {
      named: '&amp;lt;와 같은 명명된 형식 사용 (일반 HTML 엔티티에만 적용)',
      decimal: '&amp;#60;와 같은 10진수 형식 사용',
      hex: '&amp;#x3C;와 같은 16진수 형식 사용',
      full: '공백, 줄바꿈을 포함한 모든 비알파벳 숫자 문자 인코딩'
    },
    table: {
      char: '문자',
      named: '명명된 엔티티',
      decimal: '10진수 엔티티',
      description: '설명'
    },
    entities: {
      lt: '보다 작음 기호',
      gt: '보다 큼 기호',
      amp: '앰퍼샌드',
      quot: '큰따옴표',
      apos: '작은따옴표',
      copy: '저작권 기호',
      reg: '등록 상표',
      trade: '상표 기호',
      nbsp: '줄바꿈 없는 공백',
      cent: '센트 기호',
      pound: '파운드 기호',
      euro: '유로 기호',
      yen: '엔/위안 기호',
      sect: '섹션 기호',
      minus: '빼기 기호',
      times: '곱하기 기호',
      divide: '나누기 기호',
      deg: '도 기호',
      plusmn: '플러스마이너스 기호',
      frac14: '4분의 1'
    }
  },

  messages: {
    copySuccess: '클립보드에 복사되었습니다',
    copyError: '복사 실패, 수동으로 복사해 주세요',
    encodeSuccess: '인코딩 완료',
    decodeSuccess: '디코딩 완료',
    invalidInput: '잘못된 입력 텍스트'
  }
};