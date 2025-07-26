export default {
  name: '텍스트 셔플러',
  description: '텍스트의 단어, 문장 또는 줄을 무작위로 섞는 도구. 형식 유지 가능',
  inputLabel: '입력 텍스트',
  inputPlaceholder: '여기에 셔플할 텍스트를 입력하거나 붙여넣기...',
  outputLabel: '셔플 결과',
  shuffleMode: '셔플 모드',

  modes: {
    word: '단어',
    sentence: '문장',
    line: '줄'
  },

  preserveOptions: '유지 옵션',
  preserveCapitalization: '대소문자 유지',
  preservePunctuation: '구두점 유지',
  shuffleButton: '셔플',
  copyButton: '결과 복사',
  clearButton: '모두 지우기',
  copiedMessage: '클립보드에 복사되었습니다!',
  tagline: '세계에서 가장 진보된 텍스트 무작위화 도구',
  wordCount: '단어',
  importButton: '파일 가져오기',
  clearInputButton: '입력 지우기',
  clearOutputButton: '출력 지우기',
  downloadButton: '다운로드',
  useExampleButton: '예제 사용',
  advancedOptions: '고급 옵션',
  delimiterOptions: '구분자 옵션',
  wordDelimiters: '단어 구분자',
  wordDelimitersHint: '단어를 구분하는 데 사용되는 문자',
  sentenceDelimiters: '문장 구분자',
  sentenceDelimitersHint: '문장을 종료하는 데 사용되는 문자',
  additionalOptions: '추가 옵션',
  repeatCount: '반복 횟수',
  repeatCountHint: '여러 셔플 버전 생성',
  shuffleGroup: '셔플 그룹 크기',
  shuffleGroupHint: '지정된 크기의 그룹으로 단어 셔플',
  removeRepeatedWords: '반복 단어 제거',
  preserveSpacing: '간격 유지',
  examplesTitle: '예제',
  useThisExample: '이 예제 사용',
  helpTitle: '도움말 및 정보',
  whatIsTitle: '텍스트 셔플러란 무엇인가요?',
  whatIsDescription: '텍스트 셔플러는 텍스트의 단어, 문장, 줄, 문자 또는 문단 순서를 무작위화할 수 있는 도구입니다. 대소문자와 구두점과 같은 형식 옵션을 유지하면서 진정한 무작위 결과를 보장하기 위해 복잡한 알고리즘을 사용합니다.',
  howToUseTitle: '이 도구 사용 방법',
  tipsTitle: '최적 사용 팁',

  modes: {
    word: '단어',
    sentence: '문장',
    line: '줄',
    character: '문자',
    paragraph: '문단'
  },

  howToUseSteps: [
    '왼쪽 입력 상자에 텍스트를 입력하거나 붙여넣습니다.',
    '아래에서 필요한 셔플 모드와 옵션을 선택합니다.',
    '"셔플" 버튼을 클릭하여 무작위 텍스트를 생성합니다.',
    '결과는 오른쪽 출력 상자에 표시됩니다.',
    '복사 또는 다운로드 버튼을 사용하여 결과를 저장합니다.'
  ],

  tips: [
    '창의적인 글쓰기 연습을 위해 구두점은 제거하되 대소문자는 유지하는 단어 모드를 사용해 보세요.',
    '레이아웃 테스트를 위해 모든 유지 옵션을 활성화한 문장 모드를 사용하여 읽기 쉽지만 무작위인 텍스트를 유지합니다.',
    '문자 모드를 사용하여 텍스트 입력에서 안전한 암호나 코드를 생성합니다.',
    '그룹 셔플 기능을 사용하면 관련 단어를 함께 유지하면서 전체 텍스트를 무작위화할 수 있습니다.',
    '여러 변형이 필요하신가요? 반복 횟수를 설정하여 한 번에 여러 셔플 버전을 생성합니다.'
  ],

  examples: {
    basic: {
      title: '기본 단어 셔플',
      description: '구두점과 대소문자를 유지하면서 단순히 단어를 무작위화',
      input: '날렵한 갈색 여우가 게으른 개를 뛰어넘었다. 다섯 명의 권투 마법사들이 빠르게 점프했다.',
      output: '갈색 날렵한 여우가 개를 게으른 뛰어넘었다. 마법사들이 빠르게 점프했다 다섯 명의 권투.'
    },
    sentence: {
      title: '문장 셔플',
      description: '완전한 문장의 순서를 무작위화',
      input: '첫 번째 문장이 여기에 있습니다. 이것은 두 번째 문장입니다. 이것은 세 번째 문장입니다. 마지막으로, 네 번째 문장이 있습니다.',
      output: '이것은 세 번째 문장입니다. 첫 번째 문장이 여기에 있습니다. 마지막으로, 네 번째 문장이 있습니다. 이것은 두 번째 문장입니다.'
    },
    creative: {
      title: '창의적 재구성',
      description: '형식 제약 없이 단어를 셔플하여 새로운 창의적인 텍스트 생성',
      input: '시는 단어의 아름다움에 대한 리듬적인 창조물이다. 그것은 시인이 내적이고 개인적이라고 생각하는 감정의 계시이지만, 독자들은 그것이 자신들의 것임을 인식한다.',
      output: '아름다움 리듬은 단어 시인 계시하지만 독자들 개인적 내적 인식 자신 창조물 그것이 감정 생각하는 그들의 것임을 시는 것이다.'
    }
  },

  stepLabel: '단계',
  emptyInputMessage: '셔플할 텍스트를 입력하세요',
  errorMessage: '셔플 처리 중 오류 발생, 다른 셔플 모드나 옵션을 시도해 보세요',
  downloadFileName: '셔플된_텍스트.txt',

  errorMessages: {
    shuffleError: '셔플 오류:',
    sentenceError: '문장 셔플 오류:',
    copyError: '텍스트 복사 오류:'
  }
};