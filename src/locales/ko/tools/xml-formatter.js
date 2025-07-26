export default {
  name: 'XML 포맷터',
  description: 'XML 문서를 포맷팅, 정리 및 검증',

  options: {
    indentSize: '들여쓰기 크기',
    useTabs: '탭 사용',
    collapseContent: '내용 접기',
    maxLineWidth: '최대 줄 너비',
    indentAttributes: '속성 들여쓰기',
    sortAttributes: '속성 정렬',
    newlineAfterPI: '처리 명령 후 줄바꿈',
    operationType: '작업 유형',
    indentSettings: '들여쓰기 설정',
    displayOptions: '표시 옵션',
    showLineNumbers: '줄 번호 표시'
  },

  indentOptions: {
    twoSpaces: '2칸 공백',
    fourSpaces: '4칸 공백',
    tabIndent: '탭 들여쓰기'
  },

  actions: {
    format: 'XML 포맷팅',
    minify: 'XML 압축',
    validate: '검증',
    toJSON: 'JSON 변환',
    copy: '복사',
    clear: '지우기',
    download: '다운로드',
    upload: 'XML 업로드',
    beautify: '정리',
    copyCode: '코드 복사'
  },

  messages: {
    copied: '클립보드에 복사되었습니다!',
    formatSuccess: 'XML 포맷팅 성공',
    formatError: 'XML 포맷팅 오류',
    validXml: '유효한 XML',
    invalidXml: '잘못된 XML: {0}',
    lineCol: '{line}행, {col}열',
    minifySuccess: 'XML 압축 성공',
    conversionSuccess: '변환 성공',
    conversionError: '변환 중 오류 발생',
    pleaseEnterXml: 'XML 내용을 입력하세요',
    processingError: 'XML 처리 오류: {0}',
    formatResult: '포맷팅 결과',
    characterCount: '문자 수: {0}',
    lineCount: '줄 수: {0}',
    characterAndLineCount: '문자 수: {0} | 줄 수: {1}'
  },

  input: {
    xmlInput: 'XML 입력',
    placeholder: '여기에 XML을 붙여넣거나 입력하세요...'
  },

  examples: {
    title: 'XML 예제',
    description: '예제를 로드하려면 클릭:',
    simpleXml: '간단한 XML',
    bookstore: '서점 카탈로그',
    complexXml: '복잡한 XML'
  }
};