export default {
    title: "STL에서 GLB로 도구: 온라인 3D 모델 형식 변환기 사용 가이드",
    functionTitle: "STL에서 GLB로 도구란 무엇이며 그 용도는?",
    intro: "저희 <strong>STL에서 GLB로 도구</strong>는 STL (Stereo Lithography) 파일을 GLB (Binary glTF) 형식으로 빠르게 변환할 수 있는 전문적인 온라인 3D 모델 형식 변환 응용 프로그램입니다. GLB는 glTF의 바이너리 버전으로, 게임 개발, AR/VR 응용 프로그램, 웹 3D 디스플레이 등에 널리 사용되는 효율적인 3D 파일 형식입니다. <strong>온라인 STL에서 GLB로 변환기</strong>를 사용하여 여러 STL 파일을 일괄 처리하고, 모델 단위를 설정하고, 재질 색상을 조정하고, 소프트웨어 설치 없이 변환을 완료할 수 있습니다.",

    useCasesTitle: "STL에서 GLB로의 일반적인 사용 사례",
    useCases: [
        "STL 형식의 3D 프린팅 모델을 게임 개발 또는 AR/VR을 위한 GLB로 변환",
        "3D 콘텐츠 제작 효율성을 향상시키기 위해 여러 STL 파일을 GLB로 일괄 변환",
        "웹 3D 디스플레이용 GLB 형식 모델 파일 준비",
        "Unity, Unreal Engine과 같은 게임 엔진에서 사용하기 위해 STL을 GLB로 변환",
        "AR/VR 응용 프로그램을 위한 최적화된 3D 모델 리소스 준비",
        "재질 및 텍스처 지원으로 STL 모델을 GLB로 변환",
        "모바일 응용 프로그램을 위한 경량 3D 모델 형식 준비",
        "다양한 플랫폼 간 쉬운 공유를 위해 STL을 GLB로 마이그레이션"
    ],

    tipTitle: "전문가 팁:",
    tipContent: "GLB 형식은 재질, 텍스처 및 애니메이션을 포함한 풍부한 정보를 지원하며, 작은 파일 크기와 빠른 로딩을 제공합니다. STL 파일에는 기하학적 정보만 포함되어 있으므로, GLB로 변환할 때 재질 색상을 추가할 수 있습니다. 웹 응용 프로그램의 경우, GLB가 선호되는 형식입니다.",

    conclusion: "<strong>STL에서 GLB로 형식 변환</strong> 도구는 게임 개발자, AR/VR 디자이너, 웹 개발자 및 3D 모델을 처리하는 사용자에게 특히 유용합니다. 저희 온라인 변환기를 사용하면 3D 프린팅 모델을 게임 및 AR/VR 응용 프로그램에 적합한 형식으로 빠르게 변환할 수 있습니다. 저희 도구는 일괄 처리를 지원하며 모든 처리는 브라우저에서 로컬로 수행됩니다.",

    faqTitle: "자주 묻는 질문",
    faqs: [
        {
            question: "STL에서 GLB로 도구는 어떤 STL 형식을 지원합니까?",
            answer: "저희 <strong>온라인 STL에서 GLB로 변환기</strong>는 두 가지 주요 STL 파일 형식인 바이너리 STL과 ASCII STL을 모두 지원합니다. 도구는 자동으로 형식을 감지합니다."
        },
        {
            question: "STL에 비해 GLB 형식의 장점은 무엇입니까?",
            answer: "GLB 형식은 여러 장점이 있습니다: (1) 재질, 텍스처 및 애니메이션 정보 지원; (2) 작은 파일 크기의 바이너리 형식; (3) 실시간 렌더링을 위한 빠른 로딩; (4) 주류 게임 엔진과 AR/VR 플랫폼에서 지원; (5) PBR 재질 지원."
        },
        {
            question: "변환 중 재질 색상을 어떻게 설정합니까?",
            answer: "저희 <strong>STL에서 GLB로 도구</strong>는 재질 색상 설정을 제공합니다. 사전 설정된 색상을 선택하거나 RGB 값을 사용자 정의할 수 있습니다."
        },
        {
            question: "변환된 GLB 파일은 어떤 소프트웨어에서 사용할 수 있습니까?",
            answer: "GLB 형식은 Unity, Unreal Engine, Blender, Three.js, Babylon.js 등을 포함한 주요 게임 엔진과 3D 플랫폼에서 광범위하게 지원됩니다."
        },
        {
            question: "변환 프로세스가 안전합니까?",
            answer: "완전히 안전합니다! 저희 도구는 순수 프런트 엔드 기술을 사용하며, 모든 처리는 브라우저에서 로컬로 수행됩니다."
        },
        {
            question: "GLB 파일 크기가 변경됩니까?",
            answer: "일반적으로 변경됩니다. GLB는 바이너리 인코딩과 압축을 사용합니다. 단순 모델의 경우 바이너리 STL보다 약간 클 수 있습니다; 복잡한 모델의 경우 일반적으로 더 작습니다."
        },
        {
            question: "GLB 형식은 어떤 3D 기능을 지원합니까?",
            answer: "GLB 형식은 기하학적 데이터, PBR 재질, 텍스처 매핑, 골격 애니메이션, 모프 타겟, 장면 계층 구조 등 많은 3D 기능을 지원합니다."
        }
    ],

    tutorialTitle: "STL에서 GLB로 도구 사용 방법",
    steps: [
        {
            title: "STL 파일 업로드",
            description: "먼저 STL 파일을 업로드합니다. <strong>파일을 끌어다 놓거나</strong> <strong>찾아보기를 클릭</strong>하여 선택할 수 있습니다.",
            note: "여러 STL 파일을 동시에 업로드할 수 있습니다."
        },
        {
            title: "매개변수 설정",
            description: "<strong>모델 이름</strong>(선택 사항)과 <strong>모델 단위</strong>를 설정합니다. <strong>재질 색상</strong>을 선택합니다.",
            note: "밀리미터(mm)가 일반적으로 가장 안전한 선택입니다."
        },
        {
            title: "GLB로 변환",
            description: "<strong>\"GLB로 변환\"</strong> 버튼을 클릭합니다. 도구가 모든 STL 파일을 처리합니다.",
            note: "페이지를 열어 두십시오. 큰 파일은 몇 초가 걸릴 수 있습니다."
        },
        {
            title: "결과 미리보기",
            description: "오른쪽 출력 영역에 변환된 GLB 파일 정보(<strong>파일 크기 비교</strong>, <strong>삼각형 수</strong> 포함)가 표시됩니다.",
            note: "GLB 파일은 일반적으로 원본 STL보다 작습니다."
        },
        {
            title: "GLB 파일 다운로드",
            description: "각 파일 아래의 <strong>\"GLB 다운로드\"</strong>를 클릭하거나 <strong>\"일괄 다운로드(ZIP)\"</strong>을 사용하십시오.",
            note: "모든 처리는 브라우저에서 로컬로 수행됩니다."
        }
    ],

    successTitle: "축하합니다!",
    successContent: "저희의 STL에서 GLB로 도구 사용법을 성공적으로 배웠습니다. 이제 STL 형식의 3D 프린팅 모델을 GLB 형식으로 쉽게 변환할 수 있습니다.",

    relatedToolsTitle: "관심을 가질 만한 관련 도구",
    relatedTools: [
        {
            name: "STL에서 OBJ로 도구",
            description: "STL을 OBJ로 변환.",
            url: "https://www.ufreetools.com/tool/stl-to-obj-converter"
        },
        {
            name: "STL에서 3MF로 도구",
            description: "STL을 3MF로 변환.",
            url: "https://www.ufreetools.com/tool/stl-to-3mf-converter"
        },
        {
            name: "이미지를 PNG로 변환 도구",
            description: "JPG/WebP를 PNG로 변환.",
            url: "https://www.ufreetools.com/tool/image-to-png"
        },
        {
            name: "이미지를 JPG로 변환 도구",
            description: "PNG/WebP를 JPG로 변환.",
            url: "https://www.ufreetools.com/tool/image-to-jpg"
        }
    ],

    referencesTitle: "참고 자료",
    references: [
        {
            name: "glTF 형식 공식 사양",
            description: "glTF/GLB의 기술 사양 이해",
            url: "https://www.khronos.org/gltf/"
        },
        {
            name: "STL 파일 형식",
            description: "STL의 역사와 구조",
            url: "https://en.wikipedia.org/wiki/STL_%28file_format%29"
        },
        {
            name: "3D 파일 형식 비교",
            description: "STL, OBJ, glTF의 특성",
            url: "https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/"
        }
    ]
}
