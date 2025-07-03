export default {
  name: 'SQL 포맷터',
  description: '온라인 SQL 포맷팅 및 검증 도구, 압축 및 미화 기능 지원',
  options: {
    language: 'SQL 방언',
    indent: '들여쓰기 방식',
    spaceCount: '공백 수',
    keywordCase: '키워드 대소문자',
    uppercase: '키워드 대문자',
    lineBreak: '줄바꿈 스타일',
    tabSize: '탭 크기'
  },
  languages: {
    standard: '표준 SQL',
    mysql: 'MySQL',
    postgresql: 'PostgreSQL',
    sqlite: 'SQLite',
    tsql: 'T-SQL (SQL Server)',
    oracle: 'Oracle PL/SQL'
  },
  indentOptions: {
    spaces: '공백',
    tabs: '탭 들여쓰기'
  },
  spaceOptions: {
    two: '2칸 공백',
    four: '4칸 공백'
  },
  caseOptions: {
    preserve: '원본 유지',
    upper: '대문자',
    lower: '소문자'
  },
  actions: {
    format: 'SQL 포맷팅',
    minify: 'SQL 압축',
    clear: '지우기',
    copy: '복사',
    download: '다운로드',
  },
  messages: {
    copied: '클립보드에 복사되었습니다!',
    formatSuccess: 'SQL 포맷팅 성공',
    formatError: 'SQL 포맷팅 중 오류 발생'
  },
  placeholders: {
    input: 'SQL 쿼리를 입력하세요...',
    output: '포맷된 SQL이 여기에 표시됩니다...'
  },
  output: '포맷팅 결과',
  tips: {
    title: '사용 팁',
    dialect: '정확한 포맷팅을 위해 적절한 SQL 방언을 선택하세요.',
    formatting: '선호하는 코딩 스타일에 맞게 들여쓰기 스타일과 공백 수를 커스터마이즈하세요.',
    keywords: 'SQL 키워드를 유지, 대문자 또는 소문자로 선택하세요.',
    copy: '복사 버튼을 사용하여 포맷된 SQL을 클립보드에 빠르게 복사하세요.'
  }
}