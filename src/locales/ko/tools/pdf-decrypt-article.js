export default {
  title: 'PDF 복호화 도구: 열기 비밀번호 및 권한 제한을 제거하는 브라우저 기반 솔루션',
  functionTitle: '온라인 PDF 복호화 도구란 무엇이며 언제 복호화가 필요한가요?',
  intro: '저희의 <strong>온라인 PDF 복호화 도구</strong>는 순수 프론트엔드 오픈소스 기술 스택을 기반으로 합니다. 암호화된 PDF에 <strong>열기 비밀번호(사용자 비밀번호)</strong>를 제공하여 복호화를 수행하고, 인쇄, 편집, 복사, 양식 작성 등의 권한 제한을 제거합니다. 드래그 앤 드롭 업로드, 전통적인 다중 선택, URL 배치 가져오기, 배치 추가를 지원하며, <strong>실시간 미리보기 비교</strong>와 기본 분석을 제공하여 복호화 효과를 빠르게 확인할 수 있습니다. 복호화 완료 후 <span style="font-weight:bold">개별 다운로드</span> 또는 <span style="font-weight:bold">ZIP 배치 다운로드</span>가 가능합니다. 모든 작업은 서버에 업로드하지 않고 브라우저 로컬에서 수행되어 프라이버시를 보호하고 효율성을 보장합니다.',

  useCasesTitle: 'PDF 복호화의 일반적인 응용 시나리오',
  useCases: [
    '내부 편집을 위해 기업 공유 문서의 권한 제한 제거',
    '소유자 권한 구성이 잊혀진 문서에 대한 규정 준수 복호화 수행',
    '교정 및 콘텐츠 재사용을 위해 인쇄 및 복사 기능 복원',
    '출력 품질 향상을 위해 교육 자료나 보고서의 저해상도 제한 제거',
    '여러 PDF를 배치로 복호화하고 통일 처리',
    '모바일 기기에서 빠르게 복호화 및 복호화 효과 미리보기',
    '업로드 없이 브라우저 로컬에서 복호화하여 프라이버시 보호'
  ],

  tipTitle: '전문가 팁:',
  tipContent: '합법적인 사용 권한이 있는 PDF만 복호화하는 것을 권장합니다. 더 나은 검색 성능을 위해 메타데이터에 제목과 키워드를 입력하고 일관된 명명 전략을 유지할 수 있습니다 (현재 도구는 PDF 메타데이터를 수정하지 않습니다).',

  conclusion: '<strong>온라인 PDF 복호화 도구</strong>는 브라우저에서 권한 제한을 빠르게 제거하고 콘텐츠를 복원할 수 있어 기업, 교육 기관, 개인 사용자 등 다양한 시나리오에 적합합니다. 올바른 열기 비밀번호를 제공하고 복호화를 수행함으로써 규정 준수 범위 내에서 문서 사용성을 향상시킬 수 있습니다.',

  faqTitle: '자주 묻는 질문 (FAQ)',
  faqs: [
    {
      question: '온라인 PDF 복호화 도구는 어떻게 작동하나요?',
      answer: '이 도구는 QPDF의 복호화 기능을 기반으로 합니다. <strong>열기 비밀번호</strong>를 제공한 후 <strong>--decrypt</strong> 작업을 수행하여 문서의 권한 제한을 제거하고 새로운 사용 가능한 PDF를 생성합니다.'
    },
    {
      question: '배치 복호화 및 실시간 미리보기 비교를 지원하나요?',
      answer: '배치 가져오기 및 배치 추가를 지원합니다. 복호화 수행 후 <strong>실시간 미리보기 비교</strong>(원본 및 복호화 후 첫 페이지)를 수행할 수 있으며, 개별 다운로드 버튼과 <strong>ZIP 배치 다운로드</strong>를 제공합니다.'
    },
    {
      question: 'PDF가 암호화되지 않은 경우 이 도구를 사용할 수 있나요?',
      answer: '네. 암호화되지 않은 PDF의 경우, 도구는 원본 콘텐츠와 일치하는 파일을 직접 출력하여 통일된 프로세스 처리에 사용합니다.'
    }
  ],

  tutorialTitle: '온라인 PDF 복호화 도구 사용 방법',
  steps: [
    {
      title: 'PDF 파일 추가',
      description: '<strong>드래그 앤 드롭</strong>으로 업로드하거나 파일을 클릭하여 선택 (<strong>다중 선택</strong> 및 <strong>배치 추가</strong> 지원). "네트워크 PDF URL 배치 가져오기" 섹션에서 여러 URL을 한 번에 붙여넣을 수도 있습니다.',
      note: '먼저 샘플 PDF로 프로세스를 익히는 것을 권장합니다.'
    },
    {
      title: '열기 비밀번호 제공 (필요한 경우)',
      description: 'PDF가 암호화된 경우, "복호화 비밀번호"에 <strong>열기 비밀번호(사용자 비밀번호)</strong>를 입력하여 복호화를 수행하세요. 암호화되지 않은 경우 직접 실행할 수 있습니다.',
      note: '비밀번호가 잘못되면 복호화 실패 또는 미리보기 실패가 발생합니다.'
    },
    {
      title: '복호화 수행 및 미리보기',
      description: '"복호화 실행"을 클릭하면 새 PDF가 생성되고, 오른쪽 미리보기 영역에서 원본 및 복호화된 첫 페이지를 비교합니다.',
      note: '미리보기에 실패하면 파일이 손상되었거나 호환되지 않을 수 있습니다.'
    }
  ],

  successTitle: '완료!',
  successContent: '온라인 PDF 복호화 도구를 사용하여 문서 권한 제한을 제거하고 복호화 효과를 확인하는 방법을 익혔습니다.',

  relatedToolsTitle: '관심 있을 만한 관련 도구',
  relatedTools: [
        {
            name: 'PDF 병합기',
            description: '여러 PDF 파일을 하나의 완전한 PDF 문서로 병합하며, 파일 간 페이지 재정렬을 지원합니다.',
            url: 'https://www.ufreetools.com/tool/merge-pdf-online'
        },
        {
            name: 'PDF 분할기',
            description: '대형 PDF 문서를 여러 개의 작은 PDF 파일로 분할하며, 사용자 정의 분할 페이지를 지원합니다.',
            url: 'https://www.ufreetools.com/tool/pdf-splitter'
        },
        {
            name: 'PDF to Word 변환기',
            description: 'PDF 문서를 편집 가능한 Word 형식으로 변환하며, 원본 레이아웃과 형식을 유지합니다.',
            url: 'https://www.ufreetools.com/tool/pdf-to-word-converter'
        },
        {
            name: 'PDF to 이미지 변환기',
            description: 'PDF 문서의 각 페이지를 고품질 이미지 파일로 변환하며, 다양한 출력 형식을 지원합니다.',
            url: 'https://www.ufreetools.com/tool/pdf-to-image-converter'
        }
  ],

  referencesTitle: '참조 자료',
  references: [
    { title: 'QPDF 공식', description: 'QPDF는 암호화 및 복호화를 포함한 강력한 PDF 구조 처리 기능을 제공합니다.' },
    { title: 'PDF.js 문서', description: 'PDF.js는 브라우저에서 PDF를 렌더링하는 오픈소스 라이브러리로, 미리보기 및 기본 정보 검색에 적합합니다.' },
    { title: 'Adobe PDF 참조 사양', description: 'Adobe PDF 참조 문서는 PDF 사양 세부사항 및 보안 관련 정의를 제공합니다.' }
  ],

  coverAlt: '온라인 PDF 복호화 도구 제품 페이지 이미지'
}