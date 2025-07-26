export default {
  name: '16진수 AND 연산 계산기',
  description: '16진수에 대해 비트 AND 연산을 수행하고 다양한 형식으로 결과를 확인합니다.',

  // 입력 라벨
  firstNumber: '첫 번째 16진수',

  secondNumber: '두 번째 16진수',
  enterHex: '16진수 값 입력 (0x 접두사 없이)',
  invalidHex: '유효하지 않은 16진수 값',

  // 작업
  calculate: '계산',

  import: '가져오기',
  save:'저장',
  copy:'복사',
  paste:'붙여넣기',

  // 결과
  result: '결과',

  decimal: '10진수',
  binary: '2진수',
  copied: '복사 완료!',
  noResult: '값을 입력하고 계산 버튼을 클릭하여 결과 확인',

  // 설명
  explanation: {
    title: '비트 AND 연산 작동 방식',
    content: '비트 AND(AND) 연산은 첫 번째 피연산자의 각 비트를 두 번째 피연산자의 해당 비트와 비교합니다. 두 비트 모두 1이면 결과의 해당 비트는 1로 설정됩니다. 그렇지 않으면 결과의 해당 비트는 0으로 설정됩니다.',
    example: '계산 예시'
  },

  // 예제
  examples: {
    title: '예제',
    example1: {
      description: '기본 AND 연산',
      value1: 'FF',
      value2: '0F',
      result: '0F'
    },
    example2: {
      description: '비트 마스크 적용',
      value1: 'ABCD',
      value2: 'FF00',
      result: 'AB00'
    },
    commonMask: '일반 마스크: 0xFF & 0x0F',
    permissionCheck: '권한 확인: 0xA5 & 0x80',
    bitClearing: '비트 클리어: 0xFFFF & 0xFF00',
    evenCheck: '짝수 확인: 0x42 & 0x01'
  },

  // 문서
  documentation: {
    title: '16진수 AND 연산 계산기: 완전 가이드',
    introduction: '16진수 AND 연산 계산기는 프로그래밍과 디지털 전자 설계에서 일반적으로 사용되는 16진수에 대한 비트 AND 연산을 수행하는 도구입니다.',
    
    whatIs: {
      title: '비트 AND 연산이란 무엇인가요?',
      paragraph1: '비트 AND는 두 개의 동일한 길이의 비트 패턴을 가져와 각각의 해당 비트에 대해 논리 AND 연산을 수행하는 이진 연산입니다. 두 비트 모두 1이면 결과 비트는 1이고, 그렇지 않으면 결과 비트는 0입니다.',
      paragraph2: '이 연산은 마스크 작업, 비트 조작 및 특정 비트 상태 확인을 포함한 다양한 컴퓨팅 시나리오에서 기본적입니다.'
    },
    
    useCases: {
      title: '16진수 AND 연산의 일반적인 사용 사례',
      masks: {
        title: '비트 마스크',
        description: '불필요한 비트를 마스킹하여 값에서 특정 비트를 추출하거나 분리하기 위해 AND 연산을 사용합니다.'
      },
      permissions: {
        title: '권한 확인',
        description: '권한 비트 필드에서 특정 권한 비트가 설정되었는지 확인합니다.'
      },
      flagsCheck: {
        title: '플래그 상태 확인',
        description: '상태 레지스터 또는 플래그 변수에서 특정 플래그가 설정되었는지 확인합니다.'
      },
      evenOdd: {
        title: '홀짝 테스트',
        description: '숫자가 짝수인지 홀수인지 테스트하기 위해 1과 AND 연산을 사용합니다.'
      },
      bitClearing: {
        title: '비트 클리어',
        description: '마스크와 AND 연산을 수행하여 특정 비트를 지우면서 다른 비트는 유지합니다.'
      }
    },
    
    howToUse: {
      title: '16진수 AND 연산 계산기 사용 방법',
      step1: '첫 번째 16진수 입력 ("0x" 접두사 없이)',
      step2: '두 번째 16진수 입력 ("0x" 접두사 없이)',
      step3: '"계산" 버튼 클릭',
      step4: '16진수, 10진수 및 2진수 형식으로 결과 확인',
      step5: '복사 버튼을 사용하여 어떤 형식의 결과든 클립보드에 복사'
    },
    
    tips: {
      title: '16진수 AND 연산 사용 팁',
      tip1: '계산 시 입력의 선행 0은 무시되지만 결과는 가장 긴 입력에 따라 채워집니다',
      tip2: '마스크 작업의 경우, 유지하려는 위치에 FF(또는 F 시퀀스)를 사용하고 지우려는 위치에 00을 사용하세요',
      tip3: '특정 비트가 설정되었는지 확인하려면 해당 비트만 설정된 값과 AND 연산을 수행하세요 (예: 4번째 비트를 확인하려면 0x08과 AND 연산)',
      tip4: '각 16진수 숫자는 4비트(니블)를 나타냅니다',
      tip5: '권한 또는 플래그를 다룰 때 각 비트가 무엇을 나타내는지에 대한 참조를 유지하세요'
    }
  },

  quickExamples: '빠른 예제',
  operation: '연산',

  operations: {
    and: 'AND(와)',
    or: 'OR(또는)',
    xor: 'XOR(배타적 또는)',
    not: 'NOT(아님)',
    shiftLeft: '왼쪽 시프트(<<)',
    shiftRight: '오른쪽 시프트(>>)'
  },

  input: '입력 값',
  chainWith: '연쇄 계산',
  importFromFile: '파일에서 가져오기',
  noResult: '값을 입력하고 계산을 클릭하여 결과 확인',
  bitVisualization: '시각화',
  inputNumbers: '16진수 입력',
  addNumber: '숫자 추가',

  // 기존 번역 파일에 다음 내용 추가
  number: '숫자',

  // 버튼 라벨
  remove: '제거',

  removeButton: '이 입력 제거',
  importTitle: '파일에서 가져오기',
  saveTitle: '파일에 저장',
  copyTitle: '모든 입력 복사',
  pasteTitle: '클립보드에서 붙여넣기',
  saveResult: '결과 저장',
  saveResultTitle: '결과를 파일에 저장',
  copyResult: '결과 복사',
  copyResultTitle: '모든 결과 복사',
  copyAction: '복사',

  // 팁 및 메시지
  importError: '파일 가져오기 오류, 파일 형식이 올바른지 확인하세요',

  inputsCopied: '모든 입력이 클립보드에 복사되었습니다',
  resultsCopied: '모든 결과가 클립보드에 복사되었습니다',
  inputs: '입력'
};