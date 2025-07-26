export default {
  name: 'LaTeX 수식 생성기',
  description: '실시간 LaTeX 수식 생성 및 이미지 내보내기 도구',

  // UI 텍스트
  input: 'LaTeX 코드 입력',

  output: '미리보기 결과',
  renderButton: '수식 렌더링',
  exportButton: '이미지로 내보내기',
  copyButton: 'LaTeX 코드 복사',

  // 설정
  settings: {
    title: '설정',
    fontSize: '글자 크기',
    textColor: '텍스트 색상',
    backgroundColor: '배경 색상',
    displayMode: '표시 모드',
    displayModeInline: '인라인 모드',
    displayModeBlock: '블록 모드'
  },

  // 예제
  examples: {
    title: '예제',
    basic: '기본 수식',
    fraction: '분수',
    superscript: '위첨자/아래첨자',
    integral: '적분',
    matrix: '행렬',
    more: '더 많은 예제'
  },

  // 메시지
  copied: '클립보드에 복사되었습니다',

  errorTitle: '렌더링 오류',
  errorMessage: 'LaTeX 문법을 확인해주세요'
};