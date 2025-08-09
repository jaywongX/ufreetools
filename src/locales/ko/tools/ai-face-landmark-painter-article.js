export default {
    title: 'AI 얼굴 랜드마크 페인터 - 스마트 얼굴 특징점 감지 및 편집 도구 가이드',

    functionTitle: '도구 기능 및 응용 시나리오',
    intro: '<strong>AI 얼굴 랜드마크 페인터</strong>는 인공지능 기술을 기반으로 한 <strong>온라인 얼굴 특징점 감지 및 편집 도구</strong>입니다. 눈, 코, 입 및 얼굴 윤곽선과 같은 중요한 영역을 포함하여 얼굴의 68개 주요 특징점을 자동으로 식별하고 표시하여 사용자에게 정확한 <strong>얼굴 구조 분석</strong>과 <strong>시각적 편집 기능</strong>을 제공합니다.',

    useCasesTitle: '주요 응용 시나리오',
    useCases: [
        '아바타 디자인 및 제작: 디자이너에게 정확한 얼굴 특징 참조 제공',
        '얼굴 인식 연구: 학술 연구 및 알고리즘 개발에 사용',
        '뷰티 앱 개발: AR 뷰티 애플리케이션을 위한 랜드마크 데이터 제공',
        '애니메이션 제작: 얼굴 애니메이션을 위한 제어점 제공',
        '의료 미용 분석: 얼굴 비율 및 대칭성 분석',
        'VR/AR 애플리케이션: 가상 현실 애플리케이션을 위한 얼굴 추적 데이터 제공',
        '교육 및 훈련: 컴퓨터 비전 및 AI 교육에 사용',
        '예술적 창작: 디지털 아트 제작을 위한 기술 지원 제공'
    ],

    tipTitle: '전문가 팁',
    tipContent: '최상의 감지 결과를 얻으려면 선명하고 조명이 좋은 정면 얼굴 사진을 사용하세요. 이 도구는 실제 요구에 따라 조정할 수 있는 드래그 앤 드롭 랜드마크 위치 편집을 지원합니다.',

    conclusion: '전문 디자이너, 연구원 또는 개발자 여부에 관계없이 이 <strong>AI 얼굴 랜드마크 페인터</strong>는 프로젝트에 강력한 기술 지원을 제공할 수 있습니다. 이 도구는 완전히 무료이며, 일괄 처리 및 여러 내보내기 형식을 지원하여 창작을 더 효율적이고 편리하게 만듭니다.',

    faqTitle: '자주 묻는 질문',

    faq1: {
        question: '얼굴 랜드마크 감지란 무엇인가요?',
        answer: '<strong>얼굴 랜드마크 감지</strong>는 AI 알고리즘을 사용하여 얼굴의 특징점 위치를 자동으로 식별하는 컴퓨터 비전 분야의 중요한 기술입니다. 우리 도구는 눈, 코, 입 및 얼굴 윤곽선과 같은 주요 영역을 정확하게 표시하는 68점 모델을 사용하여 후속 <strong>얼굴 분석</strong>, <strong>표정 인식</strong> 및 <strong>3D 모델링</strong>을 위한 기본 데이터를 제공합니다.'
    },

    faq2: {
        question: '감지된 랜드마크를 편집할 수 있나요?',
        answer: '네! 우리 도구는 <strong>대화형 편집 기능</strong>을 지원합니다. 감지 후 마우스로 랜드마크를 클릭하고 드래그하여 위치를 조정할 수 있습니다. 이는 <strong>미세 조정</strong>, <strong>예술적 창작</strong> 또는 <strong>특별한 요구에 맞는 사용자 정의</strong>에 매우 유용합니다. 모든 수정 사항은 캔버스에 실시간으로 업데이트됩니다.'
    },

    faq3: {
        question: '어떤 내보내기 형식이 지원되나요?',
        answer: '이 도구는 다양한 요구를 충족하기 위해 여러 내보내기 형식을 지원합니다: <strong>PNG/JPG/WEBP</strong> 형식은 이미지 처리에 적합하고, <strong>SVG 형식</strong>은 벡터 그래픽 디자인에 적합합니다. SVG 형식은 특히 <strong>웹 디자인</strong>, <strong>인쇄물 제작</strong> 및 <strong>확장 가능한 그래픽</strong> 애플리케이션에 적합합니다.'
    },

    faq4: {
        question: '감지는 얼마나 정확한가요?',
        answer: '우리는 업계 선도적인 <strong>face-api.js 라이브러리</strong>와 <strong>68점 얼굴 모델</strong>을 사용하여 이상적인 조건에서 95% 이상의 정확도를 달성할 수 있습니다. 감지 효과는 조명 조건, 얼굴 각도, 이미지 선명도 및 기타 요인에 영향을 받습니다. 최상의 결과를 얻기 위해 <strong>선명한 정면 사진</strong>을 사용하는 것이 좋습니다.'
    },

    faq5: {
        question: '데이터는 안전한가요?',
        answer: '절대적으로 안전합니다! 모든 이미지 처리는 <strong>로컬 브라우저</strong>에서 이루어지며 서버에 업로드되지 않습니다. 우리는 사용자 개인 정보를 엄격하게 보호하고 이미지 데이터가 완전히 안전하도록 보장합니다. 이 도구는 <strong>오프라인 사용</strong>을 지원하여 개인 정보에 최대한의 보호를 제공합니다.'
    },

    tutorialTitle: '상세 사용 튜토리얼',

    step1: {
        title: '얼굴 이미지 업로드',
        description: '업로드 영역을 클릭하거나 <strong>이미지 파일을 직접 드래그 앤 드롭</strong>하여 도구에 넣습니다. PNG, JPEG, BMP, WEBP 등 일반적인 형식을 지원합니다. "샘플 이미지 불러오기"를 클릭하여 도구의 기능을 체험할 수도 있습니다.',
        note: '감지 정확도를 보장하기 위해 측면 프로필이나 그룹 사진을 피하고 선명한 정면 얼굴 사진을 사용하는 것이 좋습니다.'
    },

    step2: {
        title: '그리기 매개변수 구성',
        description: '왼쪽 설정 패널에서 <strong>표시 옵션</strong>과 <strong>스타일 매개변수</strong>를 조정합니다. 랜드마크, 연결선 및 번호를 표시할지 여부를 선택하고 색상, 크기 및 기타 시각적 효과를 사용자 정의할 수 있습니다.',
        note: '다양한 매개변수 설정은 다양한 응용 시나리오에 적합하며 실제 요구에 따라 조정할 수 있습니다.'
    },

    step3: {
        title: '랜드마크 감지 실행',
        description: 'AI 분석을 시작하려면 <strong>"랜드마크 감지"</strong> 버튼을 클릭합니다. 도구가 자동으로 모델을 로드하고 얼굴 특징점을 감지합니다. 전체 과정은 일반적으로 3-10초가 소요됩니다.',
        note: '첫 사용 시 AI 모델 파일을 다운로드해야 하므로 안정적인 네트워크 연결을 확인하세요.'
    },

    step4: {
        title: '랜드마크 위치 편집',
        description: '감지가 완료된 후, 위치를 조정하기 위해 랜드마크를 <strong>클릭하고 드래그</strong>할 수 있습니다. 편집 효과의 실시간 미리보기를 지원하며, 모든 수정 사항은 즉시 캔버스에 반영됩니다.',
        note: '편집 기능은 특히 미세 조정 및 창의적인 디자인에 적합하며, 특정 요구에 따라 자유롭게 조정할 수 있습니다.'
    },

    step5: {
        title: '효과 미리보기 및 조정',
        description: '세부 효과를 보기 위해 오른쪽의 <strong>확대 및 이동</strong> 기능을 사용합니다. 특정 랜드마크 위치를 확인하기 위해 확대하고 편집 결과가 기대에 부합하는지 확인할 수 있습니다.',
        note: '미리보기 기능을 최대한 활용하면 더 정확한 편집 결과를 얻는 데 도움이 될 수 있습니다.'
    },

    step6: {
        title: '처리 결과 내보내기',
        description: '적절한 <strong>내보내기 형식</strong>(PNG/JPG/WEBP/SVG)을 선택하고, 이미지 품질 매개변수를 조정한 다음 다운로드 버튼을 클릭합니다. <strong>일괄 처리</strong> 및 <strong>ZIP 패키지 다운로드</strong>를 지원합니다.',
        note: 'SVG 형식은 특히 웹 디자인 및 인쇄물 제작과 같은 벡터 그래픽이 필요한 애플리케이션에 적합합니다.'
    },

    successTitle: '처리 완료',
    successContent: '축하합니다! 얼굴 랜드마크 감지 및 편집을 성공적으로 완료했습니다. 다양한 창의적 프로젝트, 연구 작업 또는 상업적 애플리케이션에 결과를 사용할 수 있습니다.',

    relatedToolsTitle: '관련 추천 도구',

    relatedTool1: {
        name: 'AI 멀티 페이스 태거',
        description: '여러 얼굴 감지 및 태깅을 지원하며, 팀 사진 처리에 적합합니다',
        url: 'https://www.ufreetools.com/tool/ai-multi-face-tagger'
    },

    relatedTool2: {
        name: 'AI 나이 및 성별 추정기',
        description: 'AI 기술을 기반으로 나이와 성별을 추정하며, 일괄 분석을 지원합니다',
        url: 'https://www.ufreetools.com/tool/ai-age-gender-estimator'
    },

    relatedTool3: {
        name: '이미지 배경 제거 도구',
        description: '이미지 배경을 지능적으로 제거하며, 일괄 처리를 지원합니다',
        url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
    },

    relatedTool4: {
        name: '이미지 색상 반전 도구',
        description: '원클릭 이미지 색상 반전으로 예술적 효과를 만듭니다',
        url: 'https://www.ufreetools.com/tool/invert-image-colors'
    },

    referencesTitle: '참조 및 기술 문서',

    reference1: {
        name: 'face-api.js 공식 문서',
        description: 'face-api.js 라이브러리에 대한 상세한 기술 문서 및 API 참조',
        url: 'https://github.com/justadudewhohacks/face-api.js'
    },

    reference2: {
        name: '얼굴 랜드마크 감지 기술 원리',
        description: '효과적인 얼굴 랜드마크 감지를 위한 강력하고 효율적인 방법',
        url: 'https://www.mdpi.com/2076-3417/14/16/7153'
    },

    reference3: {
        name: 'SVG 형식 기술 사양',
        description: 'SVG 벡터 그래픽 형식에 대한 기술 표준 및 응용 지침',
        url: 'https://www.w3.org/Graphics/SVG/'
    }
};
