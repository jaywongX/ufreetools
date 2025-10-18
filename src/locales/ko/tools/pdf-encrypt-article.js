export default {
  title: 'PDF 암호화 도구: 열기 비밀번호와 권한을 설정하는 브라우저 기반 솔루션',
  functionTitle: '온라인 PDF 암호화 도구란 무엇이며 문서 보안은 어떻게 이루어지나요?',
  intro: '저희의 <strong>온라인 PDF 암호화 도구</strong>는 순수 프론트엔드 오픈소스 기술 스택을 사용하여 <strong>AES-128/AES-256 및 RC4-40</strong> 암호화를 지원합니다. <strong>열기 비밀번호(사용자 비밀번호)</strong>와 <strong>권한 비밀번호(소유자 비밀번호)</strong>를 설정할 수 있으며, 인쇄, 편집, 복사, 양식 작성 등의 권한 제어 옵션을 제공합니다. 드래그 앤 드롭 업로드, 전통적인 다중 선택, URL 배치 가져오기, 배치 추가를 지원하며, <strong>실시간 미리보기 비교</strong>와 기본 분석을 제공하여 암호화 효과와 권한 설정을 빠르게 확인할 수 있습니다. 암호화 완료 후 <span style="font-weight:bold">개별 다운로드</span> 또는 <span style="font-weight:bold">ZIP 배치 다운로드</span>가 가능합니다. 모든 작업은 서버에 업로드하지 않고 브라우저 로컬에서 수행되어 프라이버시와 효율성을 모두 보장합니다.',

  useCasesTitle: 'PDF 암호화의 일반적인 응용 시나리오',
  useCases: [
    '기업 공유 문서의 열기 비밀번호와 권한 제어 설정',
    '계약서, 송장 등 민감한 PDF에 AES-256 고보안 암호화 추가',
    '무단 배포를 방지하기 위한 인쇄 및 복사 제한',
    '온라인 교육 자료에 저해상도 인쇄 및 제한된 편집 설정',
    'PDF 배치 암호화 및 권한 통일 설정',
    '모바일 기기에서 빠르게 암호화 및 암호화 효과 미리보기',
    '업로드 없이 브라우저 로컬에서 암호화하여 프라이버시 보호'
  ],

  tipTitle: '전문가 팁:',
  tipContent: '더 높은 보안을 위해 <strong>강력한 비밀번호</strong>와 <strong>AES-256</strong> 암호화 수준을 결합하여 사용하는 것을 권장합니다. 더 나은 검색 성능을 위해 메타데이터에 제목과 키워드를 입력하고 일관된 명명 전략을 유지할 수 있습니다 (현재 도구는 PDF 메타데이터를 수정하지 않습니다).',

  conclusion: '<strong>온라인 PDF 암호화 도구</strong>는 브라우저에서 암호화와 권한 설정을 빠르게 완료할 수 있어 기업, 교육 기관, 개인 사용자 등 다양한 시나리오에 적합합니다. 사용자 비밀번호와 소유자 비밀번호를 설정하고 적절한 암호화 알고리즘을 선택함으로써 보안을 보장하면서도 우수한 사용성을 유지할 수 있습니다.',

  faqTitle: '자주 묻는 질문 (FAQ)',
  faqs: [
    {
      question: '온라인 PDF 암호화 도구는 어떤 암호화 알고리즘을 지원하나요?',
      answer: '이 도구는 <strong>AES-128</strong>, <strong>AES-256</strong> 및 레거시 호환 <strong>RC4-40</strong> 암호화를 지원합니다. 128비트 암호화의 구체적인 알고리즘 선택(AES 또는 RC4)은 QPDF의 구성과 버전에 따라 달라집니다.'
    },
    {
      question: '열기 비밀번호(사용자 비밀번호)와 권한 비밀번호(소유자 비밀번호)는 어떻게 설정하나요?',
      answer: '"비밀번호 보호" 영역에 <strong>사용자 비밀번호</strong>와 <strong>소유자 비밀번호</strong>를 각각 입력하세요. 현재 도구는 암호화를 실행하기 위해 둘 다 필요합니다 (향후 버전에서는 사용자 비밀번호만으로도 가능해질 수 있습니다).'
    },
    {
      question: '배치 암호화와 실시간 미리보기 비교를 지원하나요?',
      answer: '배치 가져오기와 배치 추가를 지원합니다. 암호화 실행 후 <strong>실시간 미리보기 비교</strong>(원본과 암호화 후 첫 페이지)를 수행할 수 있으며, 개별 다운로드 버튼(해당 항목의 암호화 완료 후에만 표시)과 <strong>ZIP 배치 다운로드</strong>를 제공합니다.'
    }
  ],

  tutorialTitle: '온라인 PDF 암호화 도구 사용 방법',
  steps: [
    {
      title: 'PDF 파일 추가',
      description: '<strong>드래그 앤 드롭</strong>으로 업로드하거나 파일을 클릭하여 선택 ( <strong>다중 선택</strong>과 <strong>배치 추가</strong> 지원). "네트워크 PDF URL 배치 가져오기"에서 여러 URL을 한 번에 붙여넣을 수도 있습니다.',
      note: '먼저 샘플 PDF로 프로세스를 익히는 것을 권장합니다.'
    },
    {
      title: '미리보기 및 분석',
      description: '도구는 원본 PDF의 첫 페이지를 자동으로 렌더링하고 암호화 완료 후 암호화된 PDF의 첫 페이지를 비교용으로 렌더링합니다. 권한 효과를 확인하려면 왼쪽 "권한 제어"에서 조정하고 다시 암호화하세요.',
      note: '미리보기에 실패하면 파일이 손상되었거나 호환되지 않을 수 있습니다.'
    },
    {
      title: '비밀번호 및 권한 설정',
      description: '"비밀번호 보호"에서 <strong>사용자 비밀번호</strong>와 <strong>소유자 비밀번호</strong>를 설정하고 동시에 <strong>비밀번호 강도</strong> 힌트를 확인합니다. "권한 제어"에서 인쇄, 편집, 복사, 양식 작성 권한을 구성합니다.',
      note: 'AES-256을 선택하고 강력한 비밀번호를 사용하는 것을 권장합니다.'
    }
  ],

  successTitle: '완료!',
  successContent: '온라인 PDF 암호화 도구를 사용하여 비밀번호와 문서 권한을 설정하는 방법을 익히고 미리보기 비교를 통해 암호화 효과를 확인했습니다.',

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
    { title: 'QPDF 공식', description: 'QPDF는 강력한 PDF 구조 처리 및 암호화 도구로, 풍부한 권한 제어 기능을 제공합니다.' },
    { title: 'PDF.js 문서', description: 'PDF.js는 브라우저에서 PDF를 렌더링하는 오픈소스 라이브러리로, 미리보기 및 기본 정보 검색에 적합합니다.' },
    { title: 'Adobe PDF 참조 사양', description: 'Adobe PDF 참조 문서는 PDF 사양 세부사항과 보안 관련 정의를 제공합니다.' }
  ],

  coverAlt: '온라인 PDF 암호화 도구 제품 페이지 이미지'
}