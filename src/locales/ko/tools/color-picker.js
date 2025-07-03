export default {
  name: '색상 선택기',
  description: '고급 색상 도구로 색상 팔레트를 선택, 변환 및 생성합니다',
  options: {
    colorSpace: '색 공간',
    paletteType: '팔레트 유형',
    includeAlpha: '투명도 포함',
    colorNaming: '색상 이름 지정'
  },
  colorSpaces: {
    rgb: 'RGB',
    hex: 'HEX',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB',
    named: '색상 이름'
  },
  palettes: {
    monochromatic: '모노크로마틱',
    complementary: '보색',
    analogous: '유사색',
    triadic: '트라이어드',
    tetradic: '테트라드',
    split: '스플릿 컴플리멘터리'
  },
  actions: {
    pickColor: '색상 선택',
    randomColor: '무작위 색상',
    generatePalette: '팔레트 생성',
    convert: '변환',
    copyColor: '현재 색상 복사',
    copyAll: '모두 복사',
    save: '색상 저장',
    reset: '초기화',
    clear: '지우기'
  },
  formats: {
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL'
  },
  colorSchemes: {
    title: '색상 구성표',
    complementary: '보색',
    triadic: '트라이어드',
    analogous: '유사색',
    monochromatic: '모노크로마틱',
    split: '스플릿 컴플리멘터리',
    double: '더블 컴플리멘터리',
    square: '스퀘어',
    compound: '컴파운드'
  },
  colorAdjust: {
    title: '색상 조정',
    hue: '색조',
    saturation: '채도',
    lightness: '명도',
    alpha: '투명도'
  },
  colorInfo: {
    title: '색상 정보',
    name: '색상 이름',
    format: '형식',
    contrast: '대비',
    accessibility: {
      title: '접근성',
      pass: 'WCAG 표준 충족',
      fail: 'WCAG 표준 미충족',
      normal: '일반 텍스트',
      large: '큰 텍스트'
    }
  },
  messages: {
    copied: '색상이 클립보드에 복사되었습니다',
    copyFailed: '색상을 복사할 수 없습니다',
    invalidColor: '잘못된 색상 형식',
    contrastWarning: '낮은 대비',
    saved: '색상이 저장되었습니다',
    contrast: '대비: {ratio}',
    accessibility: {
      AAA: '우수한 대비 (AAA)',
      AA: '좋은 대비 (AA)',
      fail: '불충분한 대비 - 접근성 부족'
    },
    preview: '미리보기',
    colorValue: '색상 값',
  },
  history: {
    title: '색상 기록',
    empty: '기록된 색상이 없습니다',
    clear: '기록 지우기'
  },
  colorPalette: {
    title: '색상 팔레트',
    addToPalette: '팔레트에 추가',
    removeFromPalette: '팔레트에서 제거',
    exportPalette: '팔레트 내보내기',
    importPalette: '팔레트 가져오기',
    clearPalette: '팔레트 비우기'
  },
  article: {
    title: "고급 색상 선택기: 완벽한 색상 구성표 선택, 변환 및 생성",
    features: {
      title: "색상 선택기 도구 기능",
      description: "우리의 <strong>고급 색상 선택기</strong>는 정밀한 색상 선택 및 편집을 위한 포괄적인 온라인 도구입니다. 간단한 색상 선택기와 달리 이 <strong>전문 색상 도구</strong>는 픽셀 단위 디자인 작업을 위한 색조, 채도, 명도 및 투명도에 대한 완전한 제어를 제공합니다.<br><br>이 도구는 RGB, HEX, HSL, HSV 및 CMYK와 같은 여러 <strong>색상 모델</strong>에서 작동하며 정확한 색상 값을 유지하면서 형식 간 자동 변환을 수행합니다. 이렇게 하면 수동 계산이나 여러 도구 사용이 필요 없습니다. 또한 <strong>색상 팔레트 기능</strong>은 확립된 디자인 원칙에 따라 조화로운 조합을 생성합니다.<br><br>디자이너와 개발자를 위해 색상 저장, 팔레트 생성 및 다양한 형식으로 내보내기와 같은 기능은 워크플로를 단순화하고 프로젝트 전반에 걸쳐 색상 일관성을 보장합니다. 이는 이 <strong>웹 색상 선택기</strong>를 디지털 크리에이티브를 위한 귀중한 리소스로 만듭니다.",
      useCases: {
        title: "색상 선택기의 실제 적용 사례",
        items: [
          "<strong>웹 디자인 및 개발</strong>: CSS 스타일시트 및 디자인 요소를 위한 정확한 <strong>HEX 색상 코드</strong> 및 RGB 값 선택. 프론트엔드 개발자는 React, Vue 또는 Angular와 같은 프레임워크 전반에 걸쳐 색상 일관성을 보장할 수 있습니다.",
          
          "<strong>그래픽 디자인</strong>: 로고, 마케팅 자료 및 브랜드 디자인을 위한 일관된 <strong>색상 팔레트</strong> 생성. 디자이너는 색상 변형을 테스트하고, 색상 관계를 확인하며, 완벽한 시각적 결과를 얻을 때까지 미세 조정할 수 있습니다.",
          
          "<strong>디지털 페인팅 및 일러스트레이션</strong>: 디지털 작품을 위한 사용자 정의 <strong>색상 스와치</strong> 선택 및 저장. 예술가는 자신의 스타일이나 특정 요구 사항을 반영하는 개인화된 팔레트를 생성하고 Photoshop, Illustrator 또는 Procreate와 같은 소프트웨어에서 사용할 수 있습니다.",
          
          "<strong>UI/UX 디자인</strong>: WCAG 대비 지침에 따라 접근 가능한 <strong>색상 구성표</strong> 개발. 인터페이스 디자이너는 색상 조합을 접근성에 대해 테스트하여 시각적으로 매력적이면서도 시각 장애가 있는 사람들이 사용할 수 있는 디자인을 만들 수 있습니다.",
          
          "<strong>인쇄 디자인</strong>: 인쇄물을 위한 정확한 색상을 위해 RGB와 <strong>CMYK 값</strong> 간 변환. 인쇄 전문가는 디지털 색상이 인쇄에서 어떻게 나타날지 예측하여 차이를 피할 수 있습니다.",
          
          "<strong>브랜드 개발</strong>: 모든 디지털 및 물리적 접점에 걸쳐 일관된 <strong>브랜드 색상</strong> 확립. 마케팅 전문가는 모든 자료에서 균일한 색상 사용을 보장하기 위해 정확한 색상 사양을 문서화할 수 있습니다."
        ]
      }
    },
    faq: {
      title: "색상 선택기에 대한 자주 묻는 질문",
      items: [
        {
          question: "RGB, HEX, HSL 및 기타 색상 형식의 차이점은 무엇인가요?",
          answer: "다양한 <strong>색상 형식</strong>은 동일한 색상을 다른 시스템으로 표현합니다:<br><br>• <strong>HEX 코드</strong> (예: #FF5733)는 웹 디자인에서 널리 사용되는 6자리 16진수 값입니다<br><br>• <strong>RGB 값</strong> (예: rgb(255, 87, 51))은 빨강, 녹색 및 파랑의 정확한 비율을 지정합니다 (0-255)<br><br>• <strong>HSL</strong> (색조, 채도, 명도)은 인간의 색상 인지에 맞춰 조정을 더 쉽게 합니다<br><br>• <strong>CMYK</strong>는 시안, 마젠타, 노랑 및 검정의 백분율을 사용하며 인쇄에 최적화되어 있습니다<br><br>우리의 <strong>색상 도구</strong>는 이러한 형식 간 자동 변환을 수행합니다."
        },
        {
          question: "프로젝트를 위한 조화로운 색상 구성표를 어떻게 만들 수 있나요?",
          answer: "우리 도구는 조화로운 <strong>색상 조합</strong> 생성을 단순화합니다:<br><br>1. 자동 보색, 유사색 또는 모노크로마틱 구성표를 위해 <strong>팔레트 생성</strong> 기능을 사용하세요<br><br>2. 색상 이론(예: 색상환에서 반대편의 보색)을 적용하세요<br><br>3. 다양한 팔레트를 만들기 위해 채도와 명도를 조정하세요<br><br>4. 최종 선택 전에 <strong>색상 조화</strong>를 실시간으로 테스트하세요<br><br>시각적 미리보기는 디자인 초보자도 전문적인 <strong>색상 구성표</strong>를 만들 수 있도록 도와줍니다."
        },
        {
          question: "색상과 팔레트를 나중에 사용하기 위해 저장할 수 있나요?",
          answer: "예, 우리의 <strong>색상 선택기</strong>는 여러 저장 옵션을 제공합니다:<br><br>• <strong>색상 기록</strong>은 최근 사용한 색상을 기록합니다<br>• 설명이 포함된 <strong>사용자 정의 팔레트</strong>를 생성하고 저장하세요<br>• 디자인 소프트웨어(Adobe ASE, GIMP 등)용 형식으로 구성표를 내보내세요<br>• 스타일시트를 위한 <strong>CSS 색상 변수</strong>를 생성하세요<br>• 팀워크를 위해 팔레트 링크를 공유하세요<br><br>이러한 기능은 프로젝트와 팀에서 일관된 <strong>색상 값</strong>을 보장합니다."
        },
        {
          question: "색상이 접근성 기준을 충족하는지 어떻게 확인할 수 있나요?",
          answer: "우리의 <strong>색상 선택기</strong>에는 접근성 기능이 포함되어 있습니다:<br><br>• <strong>대비 계산기</strong>는 WCAG 지침에 따라 텍스트/배경을 평가합니다<br>• AA/AAA 표준에 대한 시각적 표시기<br>• <strong>대비 개선</strong>을 위한 제안<br>• 다양한 색맹 시뮬레이션<br><br>이렇게 하면 시각적으로 매력적이면서도 시각 장애가 있는 사람들이 사용할 수 있는 디자인을 만들 수 있습니다."
        },
        {
          question: "디자인 소프트웨어에서 결과를 어떻게 사용하나요?",
          answer: "우리의 <strong>색상 도구</strong>는 일반적인 소프트웨어와 원활하게 통합됩니다:<br><br>1. 선호하는 형식(HEX, RGB, HSL)으로 <strong>색상 코드</strong>를 복사하세요<br>2. Creative Cloud용 Adobe Swatch Exchange(.ase)로 팔레트를 내보내세요<br>3. CSS 변수 또는 SCSS/LESS 믹스인을 생성하세요<br>4. 값이 포함된 전체 <strong>색상 구성표</strong>의 스크린샷을 만드세요<br><br>먼저 우리 도구에서 팔레트를 생성한 다음 적절한 형식으로 내보내는 것이 좋습니다. 이렇게 하면 일관된 <strong>색상 값</strong>과 수동 오류가 줄어듭니다."
        }
      ]
    },
    guide: {
      title: "고급 색상 선택기 사용 가이드",
      step1: "<strong>기본 색상 선택</strong>: 색상 필드 클릭, 색조 슬라이더, 직접 <strong>색상 코드</strong> 입력 또는 기록에서 선택하세요. 이 유연성은 정확한 시작점이나 창의적인 실험을 가능하게 합니다.",
      step2: "<strong>미세 조정</strong>: 색조(0-360°), 채도(0-100%), 명도(0-100%) 및 투명도(0-100%)를 정밀 슬라이더로 조정하세요. 실시간 미리보기가 모든 변경 사항을 즉시 표시합니다.",
      step3: "<strong>색상 구성표 생성</strong>: 기본 색상을 기반으로 조화로운 <strong>색상 조합</strong>을 만드세요 - 보색, 유사색, 트라이어드 또는 모노크로마틱. 알고리즘 구성표는 미학적 결과를 위한 색상 이론 원칙을 따릅니다.",
      step4: "<strong>형식 변환</strong>: HEX(#FF5733), RGB(rgb(255, 87, 51)) 또는 HSL(hsl(14, 100%, 60%))과 같은 <strong>색상 형식</strong> 간 전환하세요. 정확한 색상은 유지됩니다. 웹 디자인부터 인쇄까지 다양한 응용 프로그램에 이상적입니다.",
      step5: "<strong>색상 저장 및 내보내기</strong>: <strong>색상 코드</strong>를 복사하거나 팔레트에 추가하거나 전체 구성표를 내보내세요. 웹 개발자의 경우: 스타일시트에 직접 구현하기 위한 CSS 변수를 생성하고 프로젝트 전체에 걸쳐 일관된 <strong>색상 값</strong>을 보장하세요."
    },
    conclusion: "고급 색상 선택기는 현대적인 디자이너와 개발자를 위한 필수 도구로, 창의적인 색상 선택과 기술적 구현 사이의 격차를 해소합니다. 정밀한 색상 제어, 자동 변환 및 지능형 팔레트 생성을 통해 추측 작업과 수동 계산을 제거합니다. 브랜드 시스템, 웹 인터페이스 또는 디지털 아트를 위한 것이든, 미학적 원칙을 유지하면서 과학적으로 정밀하게 색상을 선택하고 구성하는 능력은 결정적인 이점을 제공합니다. 디자인이 시각적 매력과 기술적 일관성을 점점 더 결합해야 함에 따라, 창의적인 비전을 정확한 사양으로 번역하는 이러한 도구는 모든 창의적 및 기술적 분야에서 점점 더 가치가 있습니다."
  }
}