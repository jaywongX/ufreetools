export default {
    title: 'STL to OBJ 변환 도구: 온라인 3D 프린팅 포맷 변환기 사용 가이드',
    functionTitle: 'STL to OBJ 변환 도구란 무엇이며 어떤 용도로 사용되나요?',
    intro: '저희 <strong>STL to OBJ 변환 도구</strong>는 전문적인 온라인 3D 프린팅 포맷 변환 애플리케이션으로, STL(Stereo Lithography) 파일을 OBJ(Wavefront Object) 형식으로 빠르게 변환할 수 있습니다. OBJ는 널리 사용되는 3D 모델 파일 형식으로, 정점, 법선, 텍스처 좌표 등 풍부한 정보를 지원하며 대부분의 3D 모델링 소프트웨어와 게임 엔진에서 사용 가능합니다. <strong>온라인 STL to OBJ 변환기</strong>를 사용하면 여러 STL 파일을 배치 처리하고, 모델 단위를 설정하고, 법선 벡터를 계산할 수 있으며, 소프트웨어를 설치하지 않고도 포맷 변환을 완료할 수 있습니다.',

    useCasesTitle: 'STL to OBJ 변환의 일반적인 사용 사례',
    useCases: [
        'STL 형식의 3D 프린팅 모델을 OBJ 형식으로 변환하여 더 넓은 소프트웨어 호환성 확보',
        '여러 STL 파일을 OBJ 형식으로 배치 변환하여 3D 모델링 워크플로우 효율성 향상',
        '3D 프린팅 모델에 올바른 단위(밀리미터, 센티미터, 인치 등)를 설정하여 크기 오류 방지',
        'STL 파일을 OBJ 형식으로 변환하여 게임 엔진(Unity, Unreal 등)에서 사용 가능하게 변환',
        '모델 법선 벡터를 계산하여 렌더링 효과와 조명 표현 개선',
        '3D 모델링 소프트웨어용 표준화된 OBJ 형식 파일 준비',
        'STL 모델을 OBJ 형식으로 마이그레이션하여 다양한 소프트웨어 간 데이터 교환 용이하게',
        'VR/AR 애플리케이션용 OBJ 형식의 3D 모델 리소스 준비'
    ],

    tipTitle: '전문가 팁:',
    tipContent: 'OBJ 형식은 법선과 텍스처 좌표 정보를 지원하므로, 변환 시 법선 계산을 활성화하여 더 나은 렌더링 효과를 얻는 것이 좋습니다. OBJ 파일은 일반적으로 STL보다 약간 크지만, 호환성이 더 넓습니다. 텍스처 매핑이 필요한 모델의 경우 OBJ가 더 나은 선택입니다.',

    conclusion: '<strong>STL to OBJ 포맷 변환</strong> 도구는 3D 프린팅 애호가, 게임 개발자, 디자이너, 엔지니어 및 대량의 3D 모델을 처리해야 하는 사용자에게 특히 유용합니다. 저희 온라인 STL to OBJ 변환기를 사용하면 3D 모델 파일 포맷을 신속하게 통일하고, 소프트웨어 호환성을 향상시키거나, 특정 플랫폼의 파일 포맷 요구 사항을 충족시킬 수 있습니다. 저희 도구는 배치 처리를 지원하고, 단위 설정과 법선 계산 기능을 제공하며, 모든 처리는 브라우저 로컬에서 수행되어 모델 데이터의 프라이버시와 보안이 보장됩니다.',

    faqTitle: '자주 묻는 질문',
    faqs: [
        {
            question: 'STL to OBJ 변환 도구는 어떤 STL 형식을 지원하나요?',
            answer: '저희 <strong>온라인 STL to OBJ 변환기</strong>는 두 가지 주요 STL 파일 형식을 지원합니다: 바이너리 STL과 ASCII STL입니다. 도구는 파일 형식을 자동으로 감지하여 적절히 처리합니다. CAD 소프트웨어에서 내보낸 STL 파일이든, 3D 모델 라이브러리에서 다운로드한 STL 파일이든 모두 OBJ 형식으로 원활하게 변환할 수 있습니다.'
        },
        {
            question: 'OBJ 형식은 STL과 비교하여 어떤 장점이 있나요?',
            answer: 'OBJ 형식은 STL과 비교하여 여러 장점이 있습니다: (1) 법선과 텍스처 좌표 정보 지원; (2) 거의 모든 3D 소프트웨어와 게임 엔진에서 지원; (3) 삼각형뿐만 아니라 다각형 면 지원; (4) 재질과 텍스처 참조 포함 가능; (5) 텍스트 형식으로 편집과 디버깅이 용이. 게임 개발과 복잡한 모델링의 경우 OBJ가 더 권장되는 형식입니다.'
        },
        {
            question: '변환 시 올바른 단위는 어떻게 선택하나요?',
            answer: '저희 <strong>STL to OBJ 변환 도구</strong>는 밀리미터, 센티미터, 미터, 인치의 네 가지 일반적인 단위를 제공합니다. STL 파일 자체에는 단위 정보가 포함되어 있지 않으므로, 원본 모델의 설계 단위에 따라 선택해야 합니다. 확실하지 않은 경우 밀리미터는 3D 프린팅에서 가장 일반적인 단위입니다. 잘못된 단위를 선택하면 모델 크기에 편차가 생길 수 있습니다.'
        },
        {
            question: '법선 계산이란 무엇이며 왜 필요한가요?',
            answer: '법선은 모델 표면에 수직인 벡터로, 조명과 렌더링 효과 계산에 사용됩니다. STL 파일에는 일반적으로 법선 정보가 포함되어 있지 않지만, OBJ 형식은 법선 데이터를 지원합니다. 법선 계산을 활성화하면 도구가 각 정점에 대해 부드러운 법선을 자동으로 계산하여 모델이 렌더링 시 더 나은 조명 표현과 더 자연스러운 외관을 가지게 됩니다.'
        },
        {
            question: '변환된 OBJ 파일은 어떤 소프트웨어에서 사용할 수 있나요?',
            answer: 'OBJ 형식은 주요 3D 소프트웨어에서 널리 지원되며, Blender, Maya, 3ds Max, ZBrush, Unity, Unreal Engine 등이 포함됩니다. 변환된 OBJ 파일은 이러한 소프트웨어에 직접 가져와서 추가 편집, 렌더링 또는 게임 개발에 사용할 수 있습니다. OBJ는 가장 범용적인 3D 모델 교환 포맷 중 하나입니다.'
        },
        {
            question: '변환 과정은 안전한가요? 파일이 서버에 업로드되나요?',
            answer: '완전히 안전합니다! 저희 도구는 순수 프론트엔드 기술을 채택하고 있으며, 모든 파일 처리는 사용자의 브라우저 로컬에서 수행됩니다. STL 파일은 어떤 서버에도 업로드되지 않으므로 프라이버시와 데이터 보안이 보장됩니다. 영업 비밀이나 개인 디자인이 포함된 3D 모델 파일을 안심하고 처리할 수 있습니다.'
        },
        {
            question: '변환된 OBJ 파일의 크기는 변하나요?',
            answer: '일반적으로 약간의 변화가 있습니다. OBJ는 텍스트 형식이며, 파일 크기는 모델의 복잡성에 따라 달라집니다. 단순한 모델의 경우 OBJ 파일이 바이너리 STL보다 약간 클 수 있습니다. 복잡한 모델의 경우 OBJ가 더 효율적인 데이터 구조를 지원하므로 파일 크기가 비슷할 수 있습니다. 법선 계산을 활성화하면 파일 크기가 증가하지만 렌더링 효과가 크게 개선됩니다.'
        }
    ],

    tutorialTitle: 'STL to OBJ 변환 도구 사용 방법',
    steps: [
        {
            title: 'STL 파일 업로드',
            description: '먼저 OBJ 형식으로 변환하려는 STL 파일을 업로드합니다. <strong>파일을 업로드 영역으로 드래그</strong>하거나 <strong>클릭하여 찾아보기</strong>로 파일을 선택할 수 있습니다. 저희 도구는 바이너리와 ASCII의 두 가지 STL 형식을 지원하며, 여러 파일을 한 번에 업로드하여 배치 처리할 수 있습니다.',
            note: '여러 STL 파일의 동시 업로드를 지원하며, 도구가 자동으로 형식을 식별하여 처리합니다.'
        },
        {
            title: '변환 매개변수 설정',
            description: '왼쪽 제어 패널에서 <strong>모델 이름</strong>(선택사항)과 <strong>모델 단위</strong>를 설정합니다. 더 나은 렌더링 효과를 위해 <strong>"법선 계산"</strong> 옵션을 활성화하는 것이 좋습니다. 모델 크기가 정확한지 확인하려면 올바른 단위를 선택하는 것이 매우 중요합니다.',
            note: '단위가 확실하지 않은 경우, 일반적으로 밀리미터(mm)를 선택하는 것이 가장 안전한 선택입니다.'
        },
        {
            title: 'OBJ 형식으로 변환',
            description: '설정이 완료되면 <strong>"OBJ로 변환"</strong> 버튼을 클릭하여 처리를 시작합니다. 도구는 업로드된 모든 STL 파일을 순차적으로 처리하며, 배치 처리 시 진행 정보가 표시됩니다. 변환 과정에는 STL 데이터 분석, 법선 계산, OBJ 파일 구조 생성이 포함됩니다.',
            note: '변환 중에는 페이지를 열어 두세요. 큰 파일은 몇 초가 소요될 수 있습니다.'
        },
        {
            title: '변환 결과 미리보기',
            description: '변환이 완료되면 오른쪽 출력 영역에 모든 변환된 OBJ 파일 정보가 표시됩니다. <strong>파일 크기 비교</strong>, <strong>삼각형 면 수</strong>, <strong>정점 수</strong> 등의 상세 정보를 확인할 수 있습니다. 이 정보는 변환 결과가 예상대로인지 확인하는 데 도움이 됩니다.',
            note: 'OBJ 파일에는 상세한 기하학 정보가 포함되어 있어 후속 편집 및 처리에 편리합니다.'
        },
        {
            title: 'OBJ 파일 다운로드',
            description: '변환 결과에 만족하면 각 파일 아래의 <strong>"OBJ 다운로드"</strong> 버튼을 클릭하여 개별적으로 저장하거나, 출력 영역 상단의 <strong>"일괄 다운로드 (ZIP)"</strong> 버튼을 사용하여 모든 변환된 OBJ 파일을 하나의 ZIP 파일로 묶어 일괄 다운로드할 수 있습니다. 다운로드한 파일은 OBJ를 지원하는 3D 소프트웨어에 직접 가져와 사용할 수 있습니다.',
            note: '모든 처리는 브라우저 로컬에서 수행되므로 3D 모델 데이터의 프라이버시와 보안이 보장됩니다.'
        }
    ],

    successTitle: '축하합니다!',
    successContent: 'STL to OBJ 변환 도구 사용 방법을 성공적으로 학습했습니다. 이제 STL 형식의 3D 프린팅 모델을 범용적인 OBJ 형식으로 쉽게 변환하여 더 넓은 소프트웨어 호환성과 더 나은 렌더링 효과를 누릴 수 있습니다.',

    relatedToolsTitle: '관심 있을 수 있는 관련 도구',
    relatedTools: [
        {
            name: 'STL to 3MF 변환 도구',
            description: 'STL 파일을 3MF 형식으로 변환. 색상, 재질 등 풍부한 정보를 지원하며 최신 3D 프린팅에 적합합니다.',
            url: 'https://www.ufreetools.com/tool/stl-to-3mf-converter'
        },
        {
            name: '이미지 PNG 변환 도구',
            description: 'JPG, WebP 등 다양한 형식을 PNG 형식으로 변환. 투명 배경과 배치 처리를 지원합니다.',
            url: 'https://www.ufreetools.com/tool/image-to-png'
        },
        {
            name: '이미지 JPG 변환 도구',
            description: 'PNG, WebP 등 다양한 형식을 JPG 형식으로 변환. 사진과 복잡한 이미지에 적합합니다.',
            url: 'https://www.ufreetools.com/tool/image-to-jpg'
        },
        {
            name: '이미지 압축 도구',
            description: '품질 저하 없이 이미지 파일 크기를 줄입니다. 다양한 형식을 지원합니다.',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        }
    ],

    referencesTitle: '참고 자료',
    references: [
        {
            name: 'OBJ 파일 포맷 사양',
            description: 'OBJ 형식의 기술 사양과 파일 구조에 대해 알아보기',
            url: 'https://en.wikipedia.org/wiki/Wavefront_.obj_file'
        },
        {
            name: 'STL 파일 포맷 설명',
            description: 'STL 형식의 역사와 파일 구조에 대해 알아보기',
            url: 'https://en.wikipedia.org/wiki/STL_%28file_format%29'
        },
        {
            name: '3D 프린팅 파일 포맷 비교',
            description: 'STL, OBJ, 3MF 등의 형식 특징과 적합한 사용 사례',
            url: 'https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/'
        }
    ]
}