export default {
  name: '간단한 그림판',
  description: '온라인 드로잉 도구로 자유롭게 그림을 그리고 색상과 브러시 크기를 변경할 수 있습니다',

  // 도구 모음
  tools: {
    brush: '브러시',
    eraser: '지우개',
    clear: '캔버스 지우기',
    save: '이미지 저장',
    undo: '실행 취소',
    redo: '다시 실행',
    apply: '적용'
  },

  // 설정
  settings: {
    brushSize: '브러시 크기',
    color: '색상',
    opacity: '불투명도',
    backgroundColor: '배경 색상'
  },

  // 색상 선택기
  colors: {
    black: '검정색',
    white: '흰색',
    red: '빨간색',
    green: '초록색',
    blue: '파란색',
    yellow: '노란색',
    orange: '주황색',
    purple: '보라색',
    pink: '분홍색',
    brown: '갈색',
    gray: '회색',
    custom: '사용자 정의 색상'
  },

  // 캔버스 설정
  canvas: {
    width: '너비',
    height: '높이',
    resize: '캔버스 크기 조정',
    orientation: '방향',
    portrait: '세로',
    landscape: '가로',
    square: '정사각형'
  },

  // 팁 및 메시지
  messages: {
    saveSuccess: '이미지가 저장되었습니다',
    confirmClear: '캔버스를 지우시겠습니까? 저장되지 않은 모든 내용이 손실됩니다.',
    unsupportedBrowser: '브라우저가 Canvas를 지원하지 않습니다. 최신 브라우저를 사용해 주세요.',
    fileNamePrompt: '파일 이름을 입력하세요',
    defaultFileName: '내 그림'
  },

  // 도구 소개
  aboutTitle: '간단한 그림판 소개',

  aboutDescription: '간단한 그림판은 직관적이고 사용하기 쉬운 온라인 드로잉 도구로, 자유롭게 창의력을 발휘하여 그림을 그리고 작품을 만들 수 있습니다. 간단한 낙서, 일러스트레이션 제작 또는 아이디어 기록 등 어떤 용도로든 이 도구가 필요를 충족시켜 드립니다.',
  featuresTitle: '주요 기능',
  feature1: '자유로운 드로잉, 다양한 색상과 브러시 크기 지원',
  feature2: '지우개 기능으로 그림 내용 쉽게 수정',
  feature3: '실행 취소 및 다시 실행 기능으로 실수 쉽게 교정',
  feature4: '브러시 불투명도 조절로 풍부한 그림 효과 생성',
  feature5: '한 번의 클릭으로 캔버스 지우기 및 새로 시작',
  feature6: '작품을 이미지 형식으로 저장 지원',
  howToUseTitle: '사용 방법',
  howToUseStep1: '1. 브러시 도구와 색상을 선택하여 그림 그리기 시작',
  howToUseStep2: '2. 슬라이더로 브러시 크기와 불투명도 조정',
  howToUseStep3: '3. 수정이 필요한 경우 지우개 도구로 내용 삭제',
  howToUseStep4: '4. 언제든지 실행 취소 또는 다시 실행 가능',
  howToUseStep5: '5. 완료 후 저장 버튼 클릭하여 작품 다운로드',
  tipsTitle: '사용 팁',
  tip1: '세밀한 그림에는 얇은 브러시 사용, 넓은 영역 채우기에는 두꺼운 브러시 사용',
  tip2: '불투명도를 낮추면 수채화 효과 또는 반투명 효과 생성 가능',
  tip3: '실행 취소 기능을 활용하여 실수에 대해 걱정하지 마세요',
  tip4: '먼저 대략적인 윤곽을 그리고 세부 사항 채우기',
  tip5: '다양한 색상 조합 시도하여 다채로운 작품 만들기'
};