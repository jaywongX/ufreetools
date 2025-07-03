export default {
  name: 'SVG 최적화 도구',
  description: 'SVG 파일을 최적화하고 정리하여 성능 향상 및 파일 크기 감소',
  upload: {
    title: 'SVG 업로드',
    dropzone: 'SVG 파일을 여기에 끌어다 놓거나 클릭하여 업로드',
    or: '또는',
    pasteCode: 'SVG 코드 붙여넣기',
    maxSize: '최대 파일 크기: 5MB',
    onlySvg: 'SVG 형식 파일만 지원',
    selected: '선택됨',
    changeFile: '파일 변경'
  },
  input: {
    title: 'SVG 입력',
    pasteHere: '여기에 SVG 코드를 붙여넣으세요...',
    loadExample: '예제 로드',
    clear: '지우기',
    validate: 'SVG 검증'
  },
  output: {
    title: '최적화 결과',
    copyToClipboard: '클립보드에 복사',
    download: 'SVG 다운로드',
    beforeSize: '원본 크기',
    afterSize: '최적화 후 크기',
    reduction: '감소량',
    reductionBy: '감소율',
    svgCode: 'SVG 코드'
  },
  options: {
    title: '최적화 옵션',
    preset: '프리셋',
    presets: {
      default: '기본',
      light: '경량',
      aggressive: '공격적',
      custom: '사용자 정의'
    },
    removeComments: '주석 제거',
    removeCommentsDesc: '주석 및 cdata 섹션 제거',
    removeHiddenElements: '숨겨진 요소 제거',
    removeEmptyContainers: '빈 컨테이너 제거',
    removeUnusedDefs: '사용되지 않는 정의 제거',
    removeViewBox: 'viewBox 제거',
    keepViewBox: 'viewBox 유지',
    keepViewBoxDesc: 'SVG 확장성을 위해 viewBox 속성 유지',
    cleanupIDs: 'ID 정리',
    cleanupIDsDesc: '참조되지 않은 ID 제거 또는 단축',
    convertColors: '색상을 16진수로 변환',
    removeMetadata: '메타데이터 제거',
    removeMetadataDesc: '&lt;metadata&gt; 요소 제거',
    removeDoctype: '문서 유형 제거',
    removeXMLProcInst: 'XML 처리 명령 제거',
    removeEditorsNS: '편집기 네임스페이스 제거',
    collapseGroups: '그룹 병합',
    collapseGroupsDesc: '특별한 속성이 없는 그룹 요소 병합',
    convertPathData: '경로 데이터 최적화',
    convertPathDataDesc: '상대 좌표로 변환, 소수점 자리 수 감소 등',
    convertTransforms: '변환 최적화',
    convertShapeToPath: '도형을 경로로 변환',
    convertShapeToPathDesc: '기본 도형을 &lt;path&gt; 요소로 변환',
    removeUselessStrokeAndFill: '불필요한 스트로크 및 채우기 제거',
    moveElemsAttrsToGroup: '요소 속성을 그룹으로 이동',
    mergePaths: '경로 병합',
    minifyStyles: '스타일 압축',
    inlineStyles: '인라인 스타일',
    inlineStylesDesc: '&lt;style&gt; 요소의 스타일을 인라인으로 변환',
    cleanupNumericValues: '숫자 값 반올림',
    precision: '숫자 정밀도',
    decimalPlaces: '소수 자리',
    lowPrecision: '낮은 정밀도 (더 작은 크기)',
    highPrecision: '높은 정밀도 (더 나은 품질)',
    removeDimensions: '너비/높이 속성 제거',
    removeDimensionsDesc: '너비/높이 속성 제거, viewBox로 크기 제어',
    sortAttrs: '속성 정렬',
    sortAttrsDesc: '요소 속성을 알파벳 순으로 정렬'
  },
  view: {
    title: '미리보기',
    original: '원본',
    optimized: '최적화 후',
    showBorder: '테두리 표시',
    backgroundColor: '배경 색상',
    grid: '그리드 표시',
    zoom: '확대/축소',
    toggleAnimation: '애니메이션 전환'
  },
  actions: {
    optimize: '최적화 시작',
    optimizing: '최적화 중...',
    resetOptions: '옵션 초기화',
    download: '최적화된 SVG 다운로드',
    copy: '코드 복사',
    copyCode: '코드 복사',
    viewCode: '코드 보기',
    viewPreview: '미리보기 보기'
  },
  messages: {
    optimizationSuccess: 'SVG 최적화 성공',
    optimizationFailed: 'SVG 최적화 실패: {error}',
    invalidSvg: '잘못된 SVG 파일 또는 코드',
    copied: '클립보드에 복사됨',
    copyFailed: '복사 실패, 수동으로 복사하세요',
    downloaded: '최적화된 SVG 다운로드 완료',
    emptyInput: '최적화할 SVG 코드 또는 파일을 제공하세요',
    onlySvgAllowed: 'SVG 형식 파일만 업로드 가능합니다!',
    failedToLoadLibrary: 'SVGO 라이브러리 로드 실패'
  },
  article: {
    title: "SVG 최적화 도구: 벡터 그래픽 성능 향상 및 파일 크기 감소",
    features: {
      title: "SVG 최적화 및 이점 이해",
      description: "<strong>SVG 최적화 도구</strong>는 확장 가능한 벡터 그래픽(SVG) 파일을 단순화하고 향상시키기 위해 특별히 설계된 도구입니다. SVG는 XML 기반의 벡터 이미지 형식으로, 어떤 확대 수준에서도 완벽한 선명도를 유지하므로 반응형 웹 디자인, 로고, 아이콘 및 일러스트레이션에 이상적입니다. 그러나 SVG 파일에는 종종 시각적 가치를 추가하지 않으면서 파일 크기를 증가시키는 불필요한 데이터가 포함되어 있습니다.<br><br>저희의 <strong>SVG 최적화 도구</strong>는 SVG 파일에서 중복 정보를 지능적으로 분석하고 제거하면서 시각적 모양을 유지합니다. 메타데이터, 주석, 빈 그룹, 사용되지 않는 정의를 제거하고 경로 데이터를 최적화함으로써 이 도구는 파일 크기를 크게 줄입니다(일반적으로 30-70%). 결과는 더 깔끔하고 효율적인 <strong>벡터 그래픽</strong>으로, 더 빠르게 로드되고 더 적은 대역폭을 사용하며 웹 사이트 성능 지표와 사용자 경험을 직접 개선합니다.",
      useCases: {
        title: "SVG 최적화의 실제 적용 사례",
        items: [
          "<strong>웹 사이트 성능 향상</strong>: 웹 개발자 및 디자이너는 <strong>SVG 파일 최적화 도구</strong>를 사용하여 전체 웹 사이트에서 사용되는 벡터 그래픽의 크기를 줄일 수 있습니다. 더 작은 SVG 파일은 더 빠른 페이지 로드 시간, 더 낮은 대역폭 사용 및 개선된 핵심 웹 지표 점수를 의미하며, 이는 검색 엔진 순위에 긍정적인 영향을 미칠 수 있습니다.",
          
          "<strong>모바일 앱 개발</strong>: 모바일 앱 개발자는 리소스가 제한된 장치에서 빠르게 로드되고 더 적은 메모리를 소비하는 최적화된 SVG의 이점을 누릴 수 있습니다. 저희의 <strong>벡터 그래픽 최적화 도구</strong>는 SVG로 렌더링된 UI 요소가 불필요한 오버헤드 없이 부드럽고 반응성이 뛰어난 사용자 경험에 기여하도록 보장합니다.",
          
          "<strong>아이콘 라이브러리 유지 관리</strong>: 디자인 시스템 관리자 및 UI/UX 디자이너는 SVG 아이콘을 일괄 처리하여 일관성과 최적의 성능을 보장할 수 있습니다. <strong>SVG 정리 도구</strong>는 제품 및 플랫폼 간에 벡터 자산을 표준화하는 방법을 구축하는 데 도움이 됩니다.",
          
          "<strong>전자상거래 제품 그래픽</strong>: 온라인 상점 소유자는 페이지 속도와 전환율을 향상시키기 위해 제품 벡터 그래픽을 최적화할 수 있습니다. 저희의 <strong>SVG 압축 도구</strong>로 생성된 더 빠르게 로드되는 제품 이미지는 이탈률을 줄이고 특히 모바일 장치에서 쇼핑 경험을 개선하는 데 도움이 됩니다.",
          
          "<strong>이메일 마케팅 캠페인</strong>: 마케터는 이메일 캠페인에서 최적화된 SVG를 사용하여 시각적으로 매력적이고 이메일 클라이언트에서 빠르게 로드되는 뉴스레터를 만들 수 있습니다. 저희 도구는 메시지 크기를 늘리지 않으면서 다양한 이메일 플랫폼에서 올바르게 표시되는 경량 <strong>벡터 일러스트레이션</strong>을 만드는 데 도움이 됩니다.",
          
          "<strong>디자인 자산 전달</strong>: 그래픽 디자이너는 SVG 파일을 클라이언트 또는 팀 구성원에게 전달하기 전에 최적화하여 최종 자산이 프로덕션 준비가 되도록 할 수 있습니다. <strong>SVG 파일 정리 도구</strong>는 개발자가 구현하기 쉬운 효율적이고 깔끔한 코드를 생성하여 전문적인 표준을 유지하는 데 도움이 됩니다."
        ]
      }
    },
    faq: {
      title: "SVG 최적화에 관한 자주 묻는 질문",
      items: [
        {
          question: "SVG 최적화는 실제로 내 파일에 무엇을 하나요?",
          answer: "SVG 최적화는 시각적 품질을 유지하면서 파일 크기를 줄이는 과정으로, 여러 기술을 통해 이루어집니다:<br><br>• <strong>메타데이터 제거</strong>: 편집기 데이터, 주석 및 숨겨진 요소와 같은 불필요한 정보 제거<br>• <strong>경로 데이터 정리</strong>: 외관에 영향을 미치지 않는 소수 정밀도를 줄이는 등 경로 명령 및 좌표 단순화<br>• <strong>그룹 병합</strong>: 불필요한 중첩 그룹 및 컨테이너 제거<br>• <strong>속성 최소화</strong>: 요소 속성 통합 및 단순화<br>• <strong>변환 최적화</strong>: 변환 행렬 간소화<br>• <strong>사용되지 않는 정의 제거</strong>: &lt;defs&gt; 섹션에서 참조되지 않은 요소 삭제<br><br>저희의 <strong>SVG 최적화 도구</strong>는 시각적 출력이 동일하게 유지되도록 하면서 이러한 기술을 지능적으로 적용하여 파일 크기를 크게 줄입니다."
        },
        {
          question: "SVG 최적화는 내 그래픽 품질에 영향을 미치나요?",
          answer: "올바르게 구성된 경우, SVG 최적화는 그래픽의 시각적 품질에 눈에 띄게 영향을 미치지 않아야 합니다. 저희의 <strong>벡터 그래픽 최적화 도구</strong>는 불필요한 데이터를 제거하면서 시각적 외관을 유지하도록 설계되었습니다.<br><br>저희 도구의 정밀도 설정을 통해 파일 크기와 정밀도 사이의 균형을 제어할 수 있습니다. 더 높은 정밀도 설정(5-8 소수 자리)에서는 가장 복잡한 일러스트레이션도 정확한 외관을 유지합니다. 더 낮은 설정(1-3 소수 자리)에서는 더 큰 파일 크기 감소를 달성하며 시각적 차이는 최소화됩니다(일반적으로 인간의 눈으로는 감지할 수 없음).<br><br>대부분의 웹 그래픽의 경우, 2-3 소수 자리의 정밀도가 최적화와 품질 사이에 훌륭한 균형을 제공합니다. 항상 최적화된 <strong>SVG 이미지</strong>를 원본과 나란히 미리 보고 결과가 요구 사항을 충족하는지 확인할 수 있습니다."
        },
        {
          question: "애니메이션이나 상호작용이 있는 SVG를 최적화할 수 있나요?",
          answer: "예, 애니메이션 또는 상호작용 요소가 포함된 SVG를 최적화할 수 있지만 특별한 주의가 필요합니다. 저희의 <strong>SVG 파일 최적화 도구</strong>는 중요한 구조 요소를 유지하면서 불필요한 데이터를 정리합니다.<br><br>CSS 애니메이션, SMIL 애니메이션 또는 JavaScript 상호작용이 있는 SVG의 경우 다음을 권장합니다:<br><br>1. 애니메이션 또는 스크립트에서 참조되는 ID 유지<br>2. 스타일 또는 이벤트 처리에 사용되는 클래스 이름 유지<br>3. 더 보수적인 최적화 프리셋 사용<br>4. 기능이 유지되는지 확인하기 위해 최적화된 <strong>벡터 그래픽</strong>을 철저히 테스트<br><br>복잡한 상호작용 SVG를 최적화하는 경우 애니메이션 또는 상호작용에 영향을 줄 수 있는 특정 최적화를 비활성화하는 사용자 정의 옵션을 고려하세요. 예를 들어, JavaScript가 SVG 내의 특정 요소 ID를 참조하는 경우 ID 정리 기능을 비활성화하고 싶을 수 있습니다."
        },
        {
          question: "최적화된 SVG는 어떻게 웹 사이트 성능을 향상시키나요?",
          answer: "최적화된 SVG는 몇 가지 중요한 방식으로 웹 사이트 성능을 향상시킵니다:<br><br>• <strong>더 빠른 로드 시간</strong>: 더 작은 파일 크기는 특히 데이터 요금제가 제한된 모바일 사용자에게 더 빠른 다운로드를 의미합니다<br>• <strong>대역폭 사용 감소</strong>: 최적화된 <strong>벡터 그래픽</strong>은 더 적은 데이터를 소비하여 호스팅 비용과 환경 영향을 줄입니다<br>• <strong>렌더링 속도 향상</strong>: 더 간단한 SVG 구조는 브라우저가 처리해야 하는 작업을 줄입니다<br>• <strong>핵심 웹 지표 개선</strong>: 최대 콘텐츠 렌더링(LCP) 및 첫 입력 지연(FID) 지표 개선에 기여합니다<br>• <strong>메모리 사용 감소</strong>: 더 깔끔한 SVG는 특히 모바일 장치에서 브라우저 메모리를 덜 사용합니다<br><br>Google의 PageSpeed Insights 및 기타 성능 측정 도구는 이러한 개선 사항을 반영하며, 검색 엔진 순위 향상에 도움이 될 수 있습니다. 효율적으로 최적화된 <strong>SVG 이미지</strong>를 사용하는 페이지는 부풀려지고 최적화되지 않은 그래픽을 사용하는 페이지보다 성능 지표에서 상당히 높은 점수를 받을 수 있습니다."
        },
        {
          question: "SVG 최적화와 래스터 이미지 압축의 차이점은 무엇인가요?",
          answer: "SVG 최적화와 래스터 이미지 압축(JPEG 또는 PNG 압축 등)은 파일 크기 감소 측면에서 근본적으로 다릅니다:<br><br><strong>SVG 최적화:</strong><br>• 수학적 경로 및 도형을 사용하는 벡터 기반 그래픽에 적용<br>• 모든 해상도에서 완벽한 확장 유지<br>• 코드 정리 및 수학적 표현 최적화를 통해 파일 크기 감소<br>• 올바르게 수행할 경우 품질 손실 없음<br>• 로고, 아이콘, 일러스트레이션 및 UI 요소에 적합<br>• 출력은 여전히 편집 가능하며 추가 수정 가능<br><br><strong>래스터 압축:</strong><br>• 픽셀 기반 이미지에 적용<br>• 고정 해상도; 확대 시 품질 저하<br>• 픽셀 데이터 삭제 또는 픽셀 패턴을 나타내는 수학적 알고리즘 사용을 통해 파일 크기 감소<br>• 일반적으로 일부 품질 손실 발생(손실 압축)<br>• 다양한 색상을 가진 사진 및 복잡한 이미지에 더 적합<br>• 압축된 파일은 일반적으로 편집 불가능<br><br>저희의 <strong>SVG 최적화 도구</strong>는 벡터 그래픽의 고유한 구조에 특화되어 있으며, 완벽한 확장, 편집 가능성 및 모든 크기에서의 선명한 외관이라는 벡터 형식의 이점을 유지하면서 파일 크기를 줄입니다."
        }
      ]
    },
    guide: {
      title: "SVG 최적화 도구 사용 방법: 단계별 가이드",
      step1: "<strong>SVG 파일 업로드</strong>: SVG 파일을 업로드 영역으로 끌어다 놓거나 파일을 클릭하여 업로드하세요. 또는 파일 대신 코드가 있는 경우 SVG 코드를 입력 필드에 직접 붙여넣을 수 있습니다. 저희의 <strong>SVG 최적화 도구</strong>는 최대 5MB 크기의 파일을 허용합니다.",
      step2: "<strong>최적화 옵션 구성</strong>: 대부분의 SVG에 적합한 기본 최적화 설정을 검토하세요. 특정 요구 사항에 대해 다음 옵션을 사용자 정의할 수 있습니다:<ul class='ml-5 list-disc'><li>정밀도 수준(유지할 소수 자리 수)</li><li>메타데이터, 주석 및 빈 요소 제거 여부</li><li>경로 데이터 최적화 설정</li><li>ID 및 속성 처리</li></ul>기본 설정은 대부분의 <strong>벡터 그래픽</strong>에 대해 파일 크기 감소와 시각적 충실도 사이에 좋은 균형을 제공합니다.",
      step3: "<strong>\"최적화 시작\" 버튼 클릭</strong>: 최적화 버튼을 클릭하여 최적화 프로세스를 시작하세요. 이 도구는 선택한 옵션을 사용하여 SVG를 처리하고 파일 크기를 줄이기 위해 다양한 기술을 적용하면서 시각적 외관을 유지합니다. 크거나 복잡한 파일의 경우 몇 초가 걸릴 수 있습니다.",
      step4: "<strong>최적화 결과 확인</strong>: 처리 후 원본 파일 크기, 최적화된 파일 크기 및 달성된 백분율 감소를 보여주는 통계를 볼 수 있습니다. 더 중요한 것은 원본과 최적화된 <strong>SVG 이미지</strong>를 나란히 시각적으로 비교하여 외관이 유지되었는지 확인할 수 있다는 점입니다.",
      step5: "<strong>필요한 경우 설정 조정</strong>: 결과에 만족하지 못하는 경우(파일 크기 감소가 충분하지 않거나 원하지 않는 시각적 차이가 있는 경우) 최적화 설정을 조정하고 다시 시도할 수 있습니다. 정밀도를 높이면 더 많은 시각적 세부 사항이 유지되지만 파일 크기가 커지며, 정밀도를 낮추면 약간의 시각적 차이가 있을 수 있는 더 작은 파일이 생성됩니다.",
      step6: "<strong>최적화된 SVG 코드 검토</strong>: 정리된 SVG 코드를 검토하여 어떤 변경이 이루어졌는지 확인하세요. 이 도구는 불필요한 요소를 제거하고 경로 데이터를 최적화하며 일반적으로 코드를 더 효율적으로 만듭니다. 이는 교육적일 뿐만 아니라 <strong>벡터 그래픽</strong>의 구조를 이해하는 데 도움이 됩니다.",
      step7: "<strong>최적화된 SVG 다운로드 또는 복사</strong>: 최적화에 만족하면 최적화된 SVG 파일을 다운로드하거나 SVG 코드를 클립보드에 복사할 수 있습니다. 최적화된 파일은 웹 프로젝트, 디자인 시스템 또는 효율적인 <strong>벡터 그래픽</strong>이 필요한 기타 애플리케이션에서 사용할 수 있습니다."
    },
    conclusion: "SVG 최적화 도구는 시각적 품질을 손상시키지 않으면서 벡터 그래픽 파일 크기를 줄이는 과정을 단순화합니다. 중복 정보를 제거하고 SVG 파일 구조를 최적화함으로써 이 도구는 웹 사이트 성능 향상, 대역폭 사용 감소 및 다양한 장치에서의 사용자 경험 개선에 기여합니다. 더 빠른 페이지 로드를 추구하는 웹 개발자, 일관된 아이콘 시스템을 유지 관리하는 디자이너 또는 반응형 이메일 캠페인을 만드는 마케터이든, SVG 최적화는 프로덕션 워크플로의 표준 부분이 되어야 합니다. 벡터 자산을 최적화하는 데 소요된 몇 분은 특히 모바일 장치나 느린 연결에서 상당한 성능 향상과 더 부드러운 사용자 경험으로 이어질 수 있습니다. 웹 표준이 계속 발전하면서 성능과 사용자 경험을 선호함에 따라, 저희 SVG 최적화 도구와 같은 도구는 현대 웹 개발 도구 키트의 필수 구성 요소가 되고 있습니다."
  }
}