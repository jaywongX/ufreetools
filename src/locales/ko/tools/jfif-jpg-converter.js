export default {
  name: 'JFIF에서 JPG로 변환기',
  description: '온라인에서 JFIF 이미지를 JPG 형식으로 고품질 변환, 다양한 옵션 제공',
  tags: ['이미지', '변환', 'jpg', 'jfif', 'jpeg', '포맷', '도구'],
  
  meta: {
    title: 'JFIF에서 JPG로 변환기 - 무료 온라인 이미지 변환 도구',
    description: '무료로 JFIF를 JPG로 변환. 빠르고 안전한 브라우저 내 변환, 일괄 처리, 미리보기 비교 및 고급 품질 설정 지원. 워터마크 없음, 회원가입 불필요.'
  },
  
  upload: {
    title: 'JFIF에서 JPG로 변환기',
    subtitle: '완벽한 품질로 JFIF 이미지를 JPG 형식으로 변환',
    dropzone: 'JFIF 파일을 여기에 드래그 앤 드롭하세요',
    dropzoneActive: '파일을 놓아 변환 시작',
    maxSize: '최대 파일 크기: 50MB',
    supportedFormats: '지원 형식: JFIF, JPEG, JPG'
  },
  
  settings: {
    title: '변환 설정',
    advanced: '고급 설정',
    quality: {
      label: '이미지 품질',
      description: '높은 품질은 더 큰 파일 크기를 의미합니다',
      auto: '자동 최적화 (권장)'
    },
    qualityLabels: {
      maximum: '최고 품질',
      high: '고품질',
      good: '양호 품질',
      medium: '중간 품질',
      low: '저품질',
      veryLow: '매우 낮은 품질'
    },
    metadata: {
      label: '이미지 메타데이터',
      preserve: '모든 메타데이터 보존 (EXIF, GPS 등)',
      strip: '모든 메타데이터 제거 (파일 크기 감소)',
      keepBasic: '기본 메타데이터만 보존'
    },
    filenameOption: '출력 파일 이름',
    filenameOriginal: '원본',
    filenameConverted: '접두사 추가',
    filenameCustom: '사용자 정의',
    filenameTemplatePlaceholder: '예: converted-{name}',
    filenameTemplateHelp: '{name}을 사용하여 원본 파일 이름 삽입',
    preserveMetadata: '이미지 메타데이터 보존'
  },
  
  preview: {
    title: '이미지 미리보기',
    before: 'JFIF 원본',
    after: 'JPG 미리보기',
    noPreview: '미리보기 없음',
    togglePreview: '미리보기 표시/숨기기',
    imageDetails: '이미지 상세 정보'
  },
  
  fileTable: {
    fileName: '파일 이름',
    type: '유형',
    size: '크기',
    status: '상태',
    preview: '미리보기',
    pending: '대기 중',
    converting: '변환 중...',
    done: '완료',
    error: '오류',
    progress: '진행률'
  },
  
  results: {
    title: '변환된 파일',
    summary: '{count}개 파일 변환 완료, 총 {saved} 공간 절약',
    originalName: '원본 이름',
    convertedName: '변환된 이름',
    originalSize: '원본 크기',
    convertedSize: '새 크기',
    compressionRate: '압축률',
    actions: '작업',
    noResults: '변환 결과 없음'
  },
  
  actions: {
    selectFile: '파일 선택',
    addMore: '더 추가',
    clear: '파일 지우기',
    convertAll: '모든 파일 변환',
    converting: '변환 중...',
    download: '다운로드',
    downloadAll: '모두 다운로드',
    clearResults: '결과 지우기',
    viewDetails: '상세 보기',
    compare: '비교',
    retry: '실패 재시도',
    cancelAll: '모두 취소',
    optimizeAll: '자동 최적화'
  },
  
  messages: {
    noValidFiles: '유효한 JFIF 또는 JPEG 파일을 선택하세요.',
    conversionError: '파일 변환 중 오류 발생. 다시 시도하세요.',
    conversionSuccess: '모든 파일이 성공적으로 변환되었습니다!',
    partialSuccess: '{total}개 중 {success}개 파일 변환 성공.',
    downloadStarted: '다운로드 시작 중...',
    processingFiles: '파일 처리 중...',
    dragActive: '파일을 여기에 드래그하여 업로드',
    fileSizeExceeded: '파일 크기가 50MB 제한을 초과함',
    unsupportedFormat: '지원되지 않는 파일 형식'
  },
  
  history: {
    title: '최근 변환',
    empty: '최근 변환 없음',
    clear: '기록 지우기',
    restore: '파일 복원'
  },
  
  info: {
    title: 'JFIF에서 JPG로 변환 정보',
    description: '우리의 JFIF에서 JPG 변환기를 사용하면 JFIF 이미지 파일을 더 널리 호환되는 JPG 형식으로 빠르고 쉽게 변환할 수 있으며, 모든 처리는 브라우저 내에서 안전하게 이루어집니다.',
    
    whatIs: {
      title: 'JFIF란 무엇인가요?',
      content: 'JFIF(JPEG 파일 교환 형식)는 JPEG 파일의 파일 형식 표준입니다. 해상도, 종횡비 및 기타 메타데이터와 같은 추가 정보를 제공하여 JPEG 이미지가 다양한 장치와 플랫폼에서 올바르게 표시되도록 합니다. JFIF와 JPG는 기술적으로 관련된 형식이지만 일부 소프트웨어와 장치는 둘 중 하나에 대해 더 나은 호환성을 가질 수 있습니다.'
    },
    
    whyConvert: {
      title: 'JFIF를 JPG로 변환하는 이유',
      reason1: '다양한 애플리케이션 및 장치와의 더 나은 호환성',
      reason2: 'JFIF 형식을 거부할 수 있는 웹사이트에 더 쉽게 업로드',
      reason3: '일관된 파일 확장자로 이미지 컬렉션 표준화',
      reason4: '일부 프로그램에서 JFIF 파일을 열거나 올바르게 표시하지 못하는 문제 해결'
    },
    
    howItWorks: {
      title: '작동 방식',
      content: '우리의 변환기는 브라우저 내에서 JFIF 파일을 완전히 처리합니다. 이미지는 서버에 업로드되지 않아 완전한 개인 정보 보호와 보안이 보장됩니다. 이 도구는 JFIF 이미지 데이터를 읽고 렌더링한 다음 선택한 품질 설정으로 표준 JPG 형식으로 저장합니다.'
    },
    
    tips: {
      title: '최상의 결과를 위한 팁',
      tip1: '파일 크기와 이미지 품질 사이의 균형을 위해 품질 슬라이더 사용',
      tip2: '텍스트 또는 선명한 디테일이 포함된 이미지의 경우 더 높은 품질 설정 사용',
      tip3: '한 번에 여러 파일을 일괄 변환하고 ZIP 파일로 다운로드',
      tip4: '품질과 파일 크기의 최적 균형을 위해 "자동 최적화" 사용',
      tip5: '개인 정보가 중요한 경우 메타데이터 제거로 파일 크기 감소'
    },
    
    privacy: {
      title: '개인 정보 보호 및 보안',
      content: '우리는 귀하의 개인 정보를 진지하게 고려합니다. 모든 처리는 브라우저 내에서 직접 이루어집니다 - 파일은 서버에 업로드되지 않습니다. 이는 이미지의 완전한 보안과 개인 정보 보호를 보장합니다.'
    }
  },
  
  article: {
    title: "JFIF에서 JPG로 변환기 최종 가이드: 온라인에서 JFIF 파일 변환",
    
    introduction: {
      title: "JFIF에서 JPG로 변환 이해",
      content: "우리의 <strong>JFIF에서 JPG 변환기</strong>는 JFIF 이미지 파일을 더 널리 호환되는 JPG 형식으로 원활하게 변환하도록 설계된 강력한 온라인 도구입니다. JFIF 파일을 열거나 공유하는 데 어려움을 겪은 적이 있다면, 이 변환기는 브라우저 내에서 이미지를 처리하고 업로드 없이 완전한 개인 정보 보호와 보안을 보장하는 완벽한 솔루션을 제공합니다."
    },
    
    whatIsJfif: {
      title: "JFIF란 무엇이며 JPG로 변환하는 이유",
      content: "JFIF(JPEG 파일 교환 형식)는 JPEG 이미지 데이터를 패키징하는 방법을 정의하는 파일 형식 사양입니다. 기술적으로 JPG와 유사하지만 많은 시스템과 애플리케이션은 이를 다르게 처리합니다. <strong>JFIF를 JPG로 변환</strong>하면 모든 장치, 애플리케이션 및 플랫폼에서 최대 호환성을 보장하며, 이미지를 보거나 업로드할 때 \"지원되지 않는 파일 형식\" 오류를 제거합니다."
    },
    
    whyConvert: {
      title: "JFIF를 JPG로 변환의 이점",
      content: "Windows 10 또는 기타 운영 체제에서 <strong>JFIF를 JPG로 변환</strong>하는 주요 이유는 호환성입니다. JPG 파일은 보편적으로 지원되지만 JFIF 파일은 일부 애플리케이션 또는 웹사이트에서 문제를 일으킬 수 있습니다. 우리의 <strong>온라인 JFIF에서 JPG 변환기</strong>를 사용하면 소셜 미디어 플랫폼부터 이미지 편집 소프트웨어, 이메일 첨부 파일 및 문서 삽입까지 모든 곳에서 이미지가 접근 가능하도록 보장할 수 있습니다."
    },
    
    useCases: {
      title: "JFIF에서 JPG로 변환의 일반적인 사용 사례",
      list: [
        "소셜 미디어 업로드: JFIF 파일을 거부할 수 있는 플랫폼에서 이미지가 수락되도록 보장",
        "웹 개발: 모든 브라우저 및 장치와의 더 나은 호환성을 위해 JPG 사용",
        "디지털 출판: 디지털 출판물 및 문서에 포함할 JFIF 이미지 변환",
        "사진 편집: 형식 지원이 제한된 소프트웨어에서 편집 전 JFIF 파일을 JPG로 변환",
        "이메일 첨부 파일: 이메일로 이미지 공유 시 보편적 호환성을 위해 JPG로 변환",
        "사진 인쇄 서비스: 많은 인쇄 서비스가 JPG 형식을 특별히 요구함",
        "사진 아카이브 생성: 일관된 파일 확장자로 이미지 컬렉션 표준화"
      ]
    },
    
    platforms: {
      title: "다른 플랫폼에서 JFIF를 JPG로 변환",
      content: "우리의 도구는 웹 브라우저가 있는 모든 장치에서 작동하지만 사용자는 종종 특정 플랫폼 솔루션을 찾습니다. 다음은 우리의 변환기가 다양한 시스템 요구를 충족하는 방법입니다:",
      list: [
        {
          title: "Windows 10/11에서 JFIF를 JPG로 변환",
          description: "<strong>Windows 10에서 JFIF를 JPG로 변환</strong>하거나 Windows 11에서 추가 소프트웨어 없이 가능합니다. 우리의 온라인 변환기는 PC의 모든 브라우저에서 완벽하게 작동하며 내장 도구보다 더 간단한 대안을 제공합니다."
        },
        {
          title: "Mac에서 JFIF를 JPG로 변환",
          description: "<strong>Mac에서 JFIF를 JPG로 변환</strong>하는 방법을 궁금해하는 Mac 사용자는 추가 소프트웨어 없이 우리의 도구를 사용할 수 있으며, 귀중한 디스크 공간을 보존하고 불필요한 다운로드를 피할 수 있습니다."
        },
        {
          title: "모바일 장치에서 JFIF를 JPG로 변환",
          description: "우리의 모바일 반응형 디자인은 스마트폰이나 태블릿에서 직접 <strong>JFIF 파일을 JPG로 변환</strong>할 수 있도록 보장하며, 터치스크린에 최적화된 인터페이스를 제공합니다."
        },
        {
          title: "브라우저 확장으로 JFIF를 JPG로 변환",
          description: "브라우저 확장이 존재하지만 일반적으로 데이터에 대한 액세스 권한이 필요합니다. 우리의 웹 기반 솔루션은 설치가 필요 없으며 개인 정보를 보호합니다."
        }
      ]
    },
    
    tutorial: {
      title: "JFIF를 JPG로 변환하는 방법: 단계별 안내",
      introduction: "우리의 직관적인 도구로 JFIF 이미지를 JPG로 변환하는 것은 매우 간단합니다. 다음 간단한 단계에 따라 파일을 변환하세요:",
      steps: [
        {
          title: "파일 선택 또는 드래그 앤 드롭",
          description: "\"파일 선택\" 버튼을 클릭하거나 JFIF 이미지를 지정된 영역에 직접 드래그 앤 드롭하세요. 일괄 변환을 위해 여러 파일을 한 번에 선택할 수 있습니다."
        },
        {
          title: "품질 설정 조정 (선택 사항)",
          description: "고급 사용자를 위해 출력 품질과 같은 <strong>JFIF에서 JPG 설정</strong>을 사용자 정의할 수 있습니다. 더 높은 품질은 더 큰 파일 크기를 의미하며, 더 낮은 품질은 더 작은 파일을 생성합니다."
        },
        {
          title: "파일 이름 옵션 선택",
          description: "원본 파일 이름을 유지할지 또는 사용자 정의할지 결정하세요. 우리의 유연한 옵션으로 접두사를 추가하거나 사용자 정의 명명 템플릿을 사용할 수 있습니다."
        },
        {
          title: "메타데이터 설정 구성",
          description: "개인 정보 보호 선호도와 파일 크기 요구 사항에 따라 원본 파일에서 모든 이미지 메타데이터를 보존, 삭제 또는 기본 메타데이터만 보존하도록 선택하세요."
        },
        {
          title: "\"모든 파일 변환\" 클릭",
          description: "설정을 구성한 후 \"모든 파일 변환\" 버튼을 클릭하여 변환 프로세스를 시작하세요. 진행률 표시기가 각 파일의 상태를 보여줍니다."
        },
        {
          title: "변환된 JPG 파일 다운로드",
          description: "변환이 완료되면 개별적으로 JPG 파일을 다운로드하거나 모든 변환된 이미지가 포함된 ZIP 아카이브로 다운로드하세요."
        }
      ],
      tips: {
        title: "JFIF에서 JPG로 변환을 위한 전문가 팁",
        list: [
          "많은 디테일이 있는 사진의 경우 더 높은 품질 설정(85-100%)을 사용하여 이미지 선명도 유지",
          "웹 그래픽 또는 스크린샷의 경우 중간 품질 설정(70-85%)이 일반적으로 품질과 파일 크기 사이의 최적 균형 제공",
          "이미지의 최적 설정이 확실하지 않은 경우 \"자동 최적화\" 옵션 사용",
          "개인 정보 보호를 위해 사진의 잠재적 민감한 정보를 제거하기 위해 \"메타데이터 제거\" 옵션 고려",
          "여러 파일을 변환할 때 각 파일을 개별적으로 다운로드하는 것보다 ZIP 다운로드 옵션 사용으로 시간 절약"
        ]
      }
    },
    
    faq: {
      title: "JFIF에서 JPG로 변환에 대한 자주 묻는 질문",
      questions: [
        {
          question: "Windows 10에서 JFIF를 JPG로 어떻게 변환하나요?",
          answer: "Windows 10에는 파일 확장자 이름 변경 또는 그림판 사용과 같은 내장 옵션이 있지만, 우리의 온라인 변환기가 일반적으로 더 쉽습니다. 모든 브라우저에서 웹사이트를 열고 JFIF 파일을 업로드한 다음 소프트웨어 설치 없이 JPG로 변환하세요. 이 방법은 <strong>Windows 11, Mac 및 모바일 장치</strong>에서도 작동합니다."
        },
        {
          question: "품질 손실 없이 JFIF를 JPG로 변환할 수 있나요?",
          answer: "예, 우리의 도구를 사용하고 최고 품질 설정(100%)을 선택하면 <strong>품질 손실 없이 JFIF를 JPG로 변환</strong>할 수 있습니다. 두 형식 모두 JPEG 압축을 사용하므로 최고 품질 설정으로 변환하면 거의 모든 이미지 디테일이 보존됩니다. 절대적인 최상의 결과를 위해 우리의 \"최고 품질\" 설정을 사용하세요."
        },
        {
          question: "JFIF를 JPG 파일 확장자로 어떻게 변경하나요?",
          answer: "기술적으로 .jfif 파일 확장자를 .jpg로 변경할 수 있지만 이는 항상 신뢰할 수 없습니다. 우리의 <strong>JFIF에서 JPG 변환기</strong>는 단순히 확장자를 변경하는 대신 적절한 호환성을 보장하기 위해 이미지를 올바르게 재인코딩합니다. 이렇게 하면 파일이 모든 시스템과 애플리케이션에서 올바르게 작동합니다."
        },
        {
          question: "다운로드할 수 있는 무료 JFIF에서 JPG 변환기 소프트웨어가 있나요?",
          answer: "예, 다운로드 가능한 애플리케이션이 있지만 우리의 <strong>무료 온라인 JFIF에서 JPG 변환기</strong>는 어떤 소프트웨어도 다운로드할 필요가 없습니다. 모든 장치에서 액세스할 수 있으며, 브라우저 내에서 파일을 로컬로 처리하며(서버에 업로드하지 않음), 설치 또는 등록이 필요하지 않습니다."
        },
        {
          question: "JFIF에서 JPG로 변환하면 이미지 메타데이터에 영향을 미치나요?",
          answer: "기본적으로 우리의 변환기는 EXIF 정보(카메라 설정, 촬영 날짜 등)와 같은 메타데이터를 보존합니다. 그러나 개인 정보 보호 또는 파일 크기 감소를 위해 변환 과정에서 모든 메타데이터를 삭제하도록 선택할 수 있습니다. 원하는 경우 기본적이고 민감하지 않은 메타데이터만 보존하는 옵션도 제공합니다."
        },
        {
          question: "JFIF와 JPG 파일의 차이점은 무엇인가요?",
          answer: "차이점은 주로 기술적입니다. JFIF(JPEG 파일 교환 형식)는 JPEG 표준을 구현하는 특정 파일 형식이며, JPG는 일반적으로 JPEG 압축 이미지의 파일 이름 확장자로 사용됩니다. 실제로 대부분의 JPG 파일은 JFIF 사양을 따르지만 일부 소프트웨어는 파일 확장자에 따라 다르게 처리할 수 있습니다."
        },
        {
          question: "여러 JFIF 파일을 일괄적으로 JPG로 변환할 수 있나요?",
          answer: "물론 가능합니다! 우리의 도구는 일괄 처리를 지원하여 동시에 <strong>여러 JFIF 파일을 JPG로 변환</strong>할 수 있습니다. 한 번에 여러 파일을 선택하거나 드래그하면 우리의 변환기가 모든 파일을 처리합니다. 그런 다음 개별적으로 다운로드하거나 결합된 ZIP 아카이브로 다운로드할 수 있습니다."
        }
      ]
    },
    
    conclusion: {
      title: "우리의 JFIF에서 JPG 변환기를 선택하는 이유",
      content: "우리의 <strong>온라인 JFIF에서 JPG 변환기</strong>는 단순성과 강력한 기능을 결합하여 JFIF 파일을 더 보편적으로 호환되는 JPG 형식으로 변환해야 하는 모든 사람에게 완벽한 솔루션을 제공합니다. Windows, Mac 또는 모바일 장치를 사용하든 관계없이 우리의 브라우저 기반 도구는 다운로드나 설치 없이 원활하게 작동합니다. 일괄 처리 기능, 사용자 정의 설정 및 완전한 개인 정보 보호로 JFIF를 JPG로 변환하는 것이 이전보다 더 쉽고 안전해졌습니다. 지금 우리의 변환기를 사용해 보고 이미지 호환성과 공유 편의성의 차이를 경험해 보세요."
    },
    
    relatedTools: {
      title: "관련 이미지 변환 도구",
      introduction: "우리의 JFIF에서 JPG 변환기 외에도 다음 이미지 도구에 관심이 있을 수 있습니다:",
      list: [
        {
          name: "이미지 압축기",
          url: "http://www.ufreetools.com/tool/image-compressor",
          description: "시각적 품질을 유지하면서 파일 크기 줄이기"
        },
        {
          name: "이미지 일괄 크기 조정기",
          url: "http://www.ufreetools.com/tool/image-batch-resizer",
          description: "한 번에 여러 이미지 크기 조정, 변환 및 최적화"
        },
        {
          name: "GIF 프레임 추출기",
          url: "http://www.ufreetools.com/tool/gif-frame-extractor",
          description: "GIF 애니메이션에서 개별 프레임 추출"
        }
      ]
    },
    
    resources: {
      title: "공식 리소스",
      list: [
        {
          name: "JPEG 표준 문서",
          url: "https://docs.fileformat.com/image/jpeg/",
          description: "JPEG 형식의 기술 사양에 대해 자세히 알아보기"
        },
        {
          name: "JFIF 파일 교환 형식",
          url: "https://docs.fileformat.com/image/jfif/",
          description: "JFIF 형식의 기술 사양에 대해 자세히 알아보기"
        },
        {
          name: "JPEG 파일 교환 형식",
          url: "https://wikipedia.org/wiki/JPEG_File_Interchange_Format",
          description: "많은 이미지 파일 형식에서 사용되는 JPEG 압축"
        }
      ]
    }
  }
}