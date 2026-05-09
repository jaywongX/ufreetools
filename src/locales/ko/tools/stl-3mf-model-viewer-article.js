export default {
    title: 'STL/3MF 모델 뷰어 도구: 온라인 3D 모델 뷰어 가이드',
    functionTitle: 'STL/3MF 모델 뷰어 도구란 무엇이며 어떻게 사용하나요?',
    intro: '저희 <strong>STL/3MF 모델 뷰어</strong>는 STL 및 3MF 형식의 3D 모델 파일을 빠르게 로드하고 미리 볼 수 있는 전문 온라인 3D 모델 뷰어입니다. 소프트웨어 설치 없이 브라우저에서 열기만 하면 모든 각도에서 3D 모델을 확인할 수 있습니다.',

    useCasesTitle: '일반적인 사용 사례',
    useCases: [
        '3D 프린팅 전 STL 모델 미리보기',
        '3MF 모델의 색상 및 재질 정보 확인',
        '3D 모델의 치수와 비율 빠르게 확인',
        '와이어프레임 모드로 메시 토폴로지 검사',
        '프레젠테이션용 3D 모델 스크린샷 촬영',
        '3D 모델링 소프트웨어 없이 모델 파일 보기',
        '여러 모델 파일 일괄 미리보기',
        '고객이나 팀원에게 3D 모델 디자인 발표'
    ],

    tipTitle: '전문가 팁:',
    tipContent: '마우스 왼쪽 버튼으로 회전, 오른쪽 버튼으로 이동, 스크롤 휠로 확대/축소합니다. 더블 클릭으로 모델을 자동으로 중앙에 배치합니다.',

    conclusion: '<strong>STL/3MF 모델 뷰어</strong> 도구는 3D 프린팅 애호가, 디자이너, 엔지니어에게 특히 유용합니다.',

    faqTitle: '자주 묻는 질문',
    faqs: [
        { question: '뷰어는 어떤 형식을 지원하나요?', answer: 'STL(바이너리 및 ASCII)과 3MF 형식을 지원합니다.' },
        { question: '모델을 회전하고 확대하려면?', answer: '왼쪽 버튼으로 회전, 스크롤로 확대, 오른쪽 버튼으로 이동합니다.' },
        { question: '정보 패널에는 무엇이 표시되나요?', answer: '정점 수, 면 수, 파일 크기, 물리적 치수(XYZ축)입니다.' },
        { question: '와이어프레임 모드란 무엇인가요?', answer: '토폴로지를 확인하기 위해 메시 구조를 표시합니다.' },
        { question: '스크린샷을 내보낼 수 있나요?', answer: '네! PNG 또는 JPG 형식으로 투명 배경 선택 가능합니다.' },
        { question: '미리보기는 안전한가요?', answer: '완전히 안전합니다! 모든 처리가 브라우저에서 로컬로 수행됩니다.' },
        { question: '어떤 크기의 파일을 지원하나요?', answer: '일반적으로 수십 MB의 STL 파일과 더 큰 3MF 파일을 처리할 수 있습니다.' }
    ],

    tutorialTitle: 'STL/3MF 모델 뷰어 사용 방법',
    steps: [
        { title: '3D 모델 파일 업로드', description: 'STL 또는 3MF 파일을 업로드합니다.', note: '여러 파일 동시 업로드를 지원합니다.' },
        { title: '3D 모델 보기', description: '업로드 후 3D 뷰가 자동으로 모델을 로드합니다.', note: '대형 모델의 첫 로드에 몇 초가 걸릴 수 있습니다.' },
        { title: '모델 정보 보기', description: '오른쪽 패널에 상세 정보가 표시됩니다.', note: '3MF 파일에는 추가 정보도 표시됩니다.' },
        { title: '뷰 및 렌더링 설정 조정', description: '와이어프레임 모드, 색상, 그리드, 축을 설정합니다.', note: '와이어프레임 모드는 토폴로지 확인에 유용합니다.' },
        { title: '스크린샷 내보내기', description: '고해상도 스크린샷을 저장합니다.', note: '프레젠테이션과 문서에 적합합니다.' }
    ],

    successTitle: '축하합니다!',
    successContent: 'STL/3MF 모델 뷰어 사용법을 성공적으로 배웠습니다.',

    relatedToolsTitle: '관련 도구',
    relatedTools: [
        { name: 'STL to 3MF', description: 'STL 파일을 3MF 형식으로 변환합니다.', url: 'https://www.ufreetools.com/tool/stl-to-3mf-converter' },
        { name: 'STL to OBJ', description: 'STL 파일을 OBJ 형식으로 변환합니다.', url: 'https://www.ufreetools.com/tool/stl-to-obj-converter' },
        { name: '이미지 to PNG', description: 'JPG, WebP를 PNG로 변환합니다.', url: 'https://www.ufreetools.com/tool/image-to-png' },
        { name: '이미지 압축기', description: '이미지 파일 크기를 줄입니다.', url: 'https://www.ufreetools.com/tool/image-compressor' }
    ],

    referencesTitle: '참고 자료',
    references: [
        { name: 'STL 파일 형식', description: 'STL 형식의 역사와 구조', url: 'https://en.wikipedia.org/wiki/STL_%28file_format%29' },
        { name: '3MF 사양', description: '3MF 형식의 기술 사양', url: 'https://3mf.io/specification/' },
        { name: 'Three.js 문서', description: '3D 렌더링 엔진의 기술 세부사항', url: 'https://threejs.org/docs/' }
    ]
}