export default {
  name: '민감어 필터',
  description: '텍스트 내 민감어를 감지하고 필터링하며, 사용자 정의 민감어 사전과 필터링 규칙을 지원합니다',
  input: {
    title: '입력 텍스트',
    placeholder: '검사할 텍스트 내용을 입력하세요...',
    loadSample: '예제 불러오기',
    clearInput: '입력 지우기',
    uploadFile: '텍스트 파일 업로드'
  },
  output: {
    title: '필터링된 텍스트',
    original: '원본 텍스트',
    filtered: '필터링된 텍스트',
    statistics: '통계 데이터',
    copyOutput: '필터링된 텍스트 복사',
    clearOutput: '출력 지우기',
    download: '필터링된 텍스트 다운로드'
  },
  options: {
    title: '필터 옵션',
    filterMode: '필터 모드',
    caseSensitive: '대소문자 구분',
    wholeWordOnly: '완전한 단어만',
    customReplacement: '사용자 정의 대체',
    replacementChar: '대체 문자',
    highlightWords: '민감어 강조 표시',
    customDictionary: '사용자 정의 사전',
    importDictionary: '사전 가져오기',
    exportDictionary: '사전 내보내기'
  },
  filterModes: {
    replace: '민감어 대체',
    highlight: '민감어 강조',
    remove: '민감어 제거',
    detect: '감지만'
  },
  dictionary: {
    title: '단어 사전',
    add: '단어 추가',
    remove: '제거',
    clear: '사전 비우기',
    wordInput: '추가할 단어 입력',
    categories: '분류',
    severity: '심각도',
    bulkAdd: '일괄 추가',
    search: '사전 검색'
  },
  categories: {
    profanity: '욕설',
    slurs: '비방',
    adult: '성인 콘텐츠',
    offensive: '모욕적 내용',
    violence: '폭력',
    discrimination: '차별',
    personal: '개인 정보',
    custom: '사용자 정의'
  },
  severityLevels: {
    low: '낮음',
    medium: '중간',
    high: '높음',
    critical: '심각'
  },
  statistics: {
    totalWords: '총 단어 수',
    sensitiveWords: '민감어 수',
    uniqueSensitiveWords: '고유 민감어 수',
    severityBreakdown: '심각도 분포',
    categoryBreakdown: '분류별 분포',
    cleanlinessScore: '청결도 점수'
  },
  filterOptions: {
    title: '필터 모드',
    modes: {
      asterisk: '*로 대체',
      custom: '사용자 정의 대체 문자',
      remove: '민감어 삭제'
    },
    replaceChar: {
      title: '대체 문자',
      placeholder: '대체 문자 입력'
    }
  },
  customWords: {
    title: '사용자 정의 민감어 사전',
    addWord: '단어 추가',
    addPrompt: '추가할 민감어를 입력하세요:',
    removeWord: '제거'
  },
  actions: {
    filter: '필터링 시작',
    reset: '초기화',
    processing: '처리 중...',
    clearAll: '모두 지우기',
    copyFiltered: '필터링된 텍스트 복사',
    downloadReport: '보고서 다운로드',
    resetSettings: '설정 초기화'
  },
  results: {
    title: '필터 결과',
    tabs: {
      filteredResult: '필터 결과',
      detectionReport: '감지 보고서'
    },
    filteredText: {
      title: '필터링된 텍스트',
      copy: '결과 복사',
      empty: '표시할 필터 결과 없음'
    },
    statistics: {
      detectedCount: '감지된 민감어 수',
      retentionRate: '텍스트 보존율',
      totalWords: '텍스트 총 글자 수'
    },
    detectedWords: {
      title: '감지된 민감어',
      empty: '민감어가 감지되지 않았습니다'
    }
  },
  messages: {
    copied: '클립보드에 복사되었습니다',
    copyFailed: '복사 실패, 수동으로 복사해 주세요',
    noInput: '필터링할 텍스트를 입력하세요',
    inputTooLong: '입력 텍스트가 너무 깁니다',
    wordAdded: '민감어 사전에 단어가 추가되었습니다',
    wordExists: '이 단어는 이미 민감어 사전에 존재합니다',
    wordRemoved: '민감어 사전에서 단어가 제거되었습니다',
    filterSuccess: '텍스트 필터링이 성공했습니다',
    noSensitiveWords: '민감어가 발견되지 않았습니다',
    dictionaryCleared: '사전이 비워졌습니다',
    dictionaryImported: '사전이 가져와졌습니다',
    dictionaryExported: '사전이 내보내졌습니다',
    emptyText: '필터링할 텍스트를 입력하세요'
  },
  article: {
    title: '민감어 필터: 포괄적인 텍스트 콘텐츠 필터링 도구',
    functionality: {
      title: '도구 기능 및 특징',
      description: '<strong>민감어 필터</strong>는 텍스트 내 민감적이거나 부적절하거나 모욕적인 내용을 식별하고 필터링하기 위해 설계된 강력한 텍스트 처리 도구입니다. 이 도구는 잠재적인 문제 단어와 구문을 감지하기 위해 고급 패턴 매칭 알고리즘을 사용하며, 사용자의 선호에 따라 자동으로 대체하거나 삭제합니다. 이 텍스트 필터링 도구는 사용자 정의 사전, 다양한 필터 모드를 지원하며 감지된 민감 콘텐츠에 대한 상세한 통계 분석을 제공합니다.'
    },
    useCases: {
      title: '실제 적용 및 사용 시나리오',
      list: [
        '<strong>웹사이트 콘텐츠 검토</strong>: 댓글, 포럼 게시물 및 리뷰와 같은 사용자 생성 콘텐츠를 자동으로 필터링하여 안전하고 존중하는 온라인 환경을 유지합니다.',
        '<strong>교육 자료 검토</strong>: 교수 자료와 학생 제출 과제가 부적절한 언어를 포함하지 않도록 보장하며, 교실이나 교육 플랫폼에 적합합니다.',
        '<strong>고객 서비스 콘텐츠 필터링</strong>: 외부 커뮤니케이션을 필터링하여 전문적 기준을 유지하고 잠재적 모욕적 언어를 피합니다.',
        '<strong>소셜 미디어 관리</strong>: 소셜 미디어 플랫폼에 게시하기 전 콘텐츠를 검토하고 정리하여 플랫폼 정책 위반을 방지합니다.',
        '<strong>텍스트 데이터 준비</strong>: 기계 학습 및 분석을 위한 텍스트 데이터 세트에서 모욕적이거나 편향된 언어를 제거하여 정리합니다.',
        '<strong>기업 커뮤니케이션 준수</strong>: 내부 및 외부 커뮤니케이션이 기업 언어 정책과 전문적 기준을 준수하는지 확인합니다.'
      ]
    },
    faq: {
      title: '민감어 필터링에 관한 자주 묻는 질문',
      items: [
        {
          question: '민감어 감지의 정확도는 어떻게 되나요?',
          answer: '<strong>민감어 감지</strong> 시스템은 정확한 패턴 매칭 알고리즘을 사용하여 매우 높은 정확도를 가집니다. 그러나 문맥 인식 필터링(단어 뒤의 의미 이해)은 여전히 도전적입니다. 이 도구는 감지된 단어를 확인하고 특정 요구 사항에 맞게 정확도를 높이기 위해 사전을 사용자 정의할 수 있도록 합니다.'
        },
        {
          question: '자신만의 사용자 정의 단어 사전을 생성하고 저장할 수 있나요?',
          answer: '예, <strong>사용자 정의 민감어 사전</strong> 기능을 통해 콘텐츠 요구 사항에 특정한 민감어를 추가할 수 있습니다. 필터에 단어를 쉽게 추가할 수 있으며, 이 단어들은 필터링 과정에서 적용됩니다.'
        },
        {
          question: '어떤 필터 모드가 사용 가능한가요?',
          answer: '이 도구는 여러 <strong>텍스트 필터링 모드</strong>를 제공합니다: 별표(*)로 민감어 대체, 사용자 정의 대체 문자 사용 또는 텍스트에서 민감어 완전 삭제. 사용자는 자신의 필요에 가장 적합한 모드를 선택할 수 있습니다.'
        },
        {
          question: '이 도구는 다른 언어를 처리할 수 있나요?',
          answer: '예, <strong>다국어 민감어 필터</strong>는 다양한 언어에 적용 가능하지만, 효과는 언어에 따라 다를 수 있습니다. 이 도구는 주로 다양한 문자 시스템에 적용 가능한 문자 패턴 매칭에 중점을 둡니다.'
        },
        {
          question: '대량의 텍스트는 어떻게 처리하나요?',
          answer: '<strong>대량 텍스트 필터링</strong>을 위해 콘텐츠를 입력 영역에 붙여넣기만 하면 됩니다. 이 도구는 대량의 텍스트를 효율적으로 처리하도록 최적화되어 있지만, 매우 큰 텍스트는 더 많은 처리 시간이 필요할 수 있습니다. 매우 큰 문서의 경우, 분할하여 처리하는 것을 고려하세요.'
        }
      ]
    },
    tutorial: {
      title: '민감어 필터 사용 단계 안내',
      steps: [
        '<strong>텍스트 입력</strong>: 먼저 입력 텍스트 영역에 필터링할 텍스트를 입력하거나 붙여넣습니다.',
        '<strong>필터 옵션 구성</strong>: 선호하는 필터 모드(별표로 대체, 사용자 정의 문자 또는 단어 삭제)를 선택합니다.',
        '<strong>사용자 정의 민감어 사전</strong>(선택 사항): "단어 추가" 버튼을 클릭하여 감지하고 필터링할 특정 단어를 추가합니다.',
        '<strong>필터링 시작</strong>: "필터링 시작" 버튼을 클릭하여 텍스트를 처리하고 민감 콘텐츠를 감지합니다.',
        '<strong>결과 확인</strong>: "필터 결과" 탭에서 필터링된 텍스트를 확인하고 "감지 보고서" 탭에서 통계 분석을 봅니다.',
        '<strong>결과 복사 또는 저장</strong>: 필터링된 텍스트를 클립보드에 복사하여 애플리케이션이나 문서에서 사용합니다.'
      ]
    }
  }
}