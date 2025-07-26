export default {
  name: '코드 차이 비교',
  description: '두 코드 섹션을 비교하고 차이점을 강조합니다',

  options: {
    title: '옵션',
    ignoreCase: '대소문자 무시',
    ignoreWhitespace: '공백 무시',
    trimWhitespace: '공백 트리밍',
    diffMode: '차이 모드',
    diffModes: {
      chars: '문자',
      words: '단어',
      lines: '줄',
      sentences: '문장',
      json: 'JSON'
    },
    diffStyle: '표시 스타일',
    diffStyles: {
      split: '분할 보기',
      inline: '인라인 보기'
    },
    context: '컨텍스트 줄',
    wrap: '줄 바꿈',
    languages: {
      plaintext: '일반 텍스트',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      json: 'JSON'
    }
  },

  inputs: {
    original: '원본 코드',
    modified: '수정된 코드',
    placeholderOriginal: '원본 코드를 여기에 붙여넣기...',
    placeholderModified: '수정된 코드를 여기에 붙여넣기...'
  },

  actions: {
    compare: '비교',
    clear: '지우기',
    swap: '교환',
    copy: '차이점 복사',
    download: '차이점 다운로드',
    upload: '파일 업로드'
  },

  results: {
    title: '차이점 결과',
    changes: '변경 사항',
    additions: '추가됨',
    deletions: '삭제됨',
    unchanged: '변경 없음',
    noChanges: '차이점이 없습니다 - 텍스트가 동일합니다',
    loading: '차이점 생성 중...'
  },

  upload: {
    originalFile: '원본 파일',
    modifiedFile: '수정된 파일',
    dropOriginal: '원본 파일을 여기에 드롭하거나 탐색',
    dropModified: '수정된 파일을 여기에 드롭하거나 탐색'
  },

  messages: {
    copied: '클립보드에 복사되었습니다!',
    inputRequired: '두 입력 필드에 텍스트를 입력해 주세요',
    diffGenerated: '차이점이 성공적으로 생성되었습니다',
    error: '차이점 생성 중 오류 발생',
    fileError: '파일 읽기 오류'
  },

  tips: {
    title: '사용 팁',
    compareOptions: '코드 비교를 위해 공백 무시와 같은 비교 옵션을 필요에 맞게 조정하세요.',
    diffModes: '다양한 차이 모드는 비교 시 다른 수준의 세부 정보를 제공합니다.',
    largeFiles: '대용량 파일의 경우 줄 단위 비교가 더 효율적입니다.',
    jsonMode: '구조화된 데이터에는 JSON 모드를 사용하세요 - 객체 구조를 정규화하고 비교합니다.'
  }
};