export default {
    title: "GLB에서 STL로 도구: 온라인 3D 모델 형식 변환기 사용 가이드",
    functionTitle: "GLB에서 STL로 도구란?",
    intro: "저희 <strong>GLB에서 STL로 도구</strong>는 GLB (Binary glTF) 파일을 STL (Stereo Lithography) 형식으로 빠르게 변환할 수 있는 전문적인 온라인 3D 모델 형식 변환 응용 프로그램입니다. STL은 3D 프린팅 산업에서 가장 널리 사용되는 파일 형식입니다. 저희 온라인 변환기를 사용하여 여러 GLB 파일을 일괄 처리하고 소프트웨어 설치 없이 변환을 완료할 수 있습니다.",

    useCasesTitle: "GLB에서 STL로의 일반적인 사용 사례",
    useCases: [
        "GLB 형식의 게임 모델을 3D 프린팅을 위한 STL로 변환",
        "여러 GLB 파일을 STL로 일괄 변환",
        "GLB 파일을 STL로 변환하여 물리적 모델 제작",
        "GLB 파일에서 기하학적 정보 추출",
        "3D 프린팅 서비스 제공업체를 위한 표준화된 STL 준비",
        "GLB 모델을 STL로 변환하여 쉬운 데이터 교환",
        "3D 프린트 파일 형식 최적화, STL은 가장 넓은 호환성",
        "3D 프린팅을 위한 파일 준비"
    ],

    tipTitle: "전문가 팁:",
    tipContent: "GLB 형식은 재질, 텍스처 및 애니메이션과 같은 풍부한 정보를 지원합니다. STL로 변환할 때 이 정보는 손실되고 기하학적 모양만 유지됩니다.",

    conclusion: "<strong>GLB에서 STL로 형식 변환</strong> 도구는 3D 프린팅 애호가, 게임 개발자, 디자이너 및 디지털 모델을 물리적으로 만들어야 하는 사용자에게 특히 유용합니다.",

    faqTitle: "자주 묻는 질문",
    faqs: [
        {
            question: "어떤 GLB 형식을 지원합니까?",
            answer: "저희 변환기는 glTF 1.0 및 glTF 2.0 버전을 포함한 표준 GLB (Binary glTF) 파일 형식을 지원합니다."
        },
        {
            question: "GLB에 비해 STL의 장점은?",
            answer: "STL의 장점: (1) 가장 넓은 호환성; (2) 단순한 파일 구조; (3) 전통적 표준; (4) 기하학적 정보에 중점."
        },
        {
            question: "어떤 정보가 손실됩니까?",
            answer: "GLB는 재질, 텍스처, 애니메이션을 지원합니다. STL은 기하학적 정보만 포함합니다. 이 정보는 손실됩니다."
        },
        {
            question: "바이너리 STL과 ASCII STL의 차이점?",
            answer: "바이너리 STL은 더 작은 파일 크기로 바이너리 인코딩을 사용합니다. ASCII STL은 텍스트 형식을 사용합니다."
        },
        {
            question: "STL 파일은 어떤 소프트웨어에서 사용할 수 있습니까?",
            answer: "STL은 Cura, PrusaSlicer, Simplify3D, 3D Builder를 포함한 주요 슬라이싱 소프트웨어에서 지원됩니다."
        },
        {
            question: "변환 프로세스가 안전합니까?",
            answer: "완전히 안전합니다! 모든 처리는 브라우저에서 로컬로 수행됩니다."
        },
        {
            question: "STL 파일 크기가 변경됩니까?",
            answer: "일반적으로 변경됩니다. GLB는 바이너리 압축을 사용합니다. STL로 변환 후 크기는 모델 복잡도에 따라 다릅니다."
        }
    ],

    tutorialTitle: "GLB에서 STL로 도구 사용 방법",
    steps: [
        {
            title: "GLB 파일 업로드",
            description: "GLB 파일을 업로드합니다. <strong>파일을 끌어다 놓거나</strong> <strong>찾아보기를 클릭</strong>할 수 있습니다.",
            note: "여러 GLB 파일을 동시에 업로드할 수 있습니다."
        },
        {
            title: "매개변수 설정",
            description: "<strong>모델 이름</strong>(선택 사항)과 <strong>출력 형식</strong>(바이너리 STL 또는 ASCII STL)을 설정합니다.",
            note: "더 작은 크기를 위해 바이너리 형식이 권장됩니다."
        },
        {
            title: "STL로 변환",
            description: "<strong>\"STL로 변환\"</strong> 버튼을 클릭합니다.",
            note: "페이지를 열어 두십시오."
        },
        {
            title: "결과 미리보기",
            description: "출력 영역에 변환된 모든 STL 파일의 정보가 표시됩니다.",
            note: "STL은 3D 프린팅에 적합합니다."
        },
        {
            title: "STL 파일 다운로드",
            description: "<strong>\"STL 다운로드\"</strong>를 클릭하거나 <strong>\"일괄 다운로드(ZIP)\"</strong>을 사용하십시오.",
            note: "모든 처리는 로컬입니다."
        }
    ],

    successTitle: "축하합니다!",
    successContent: "저희의 GLB에서 STL로 도구 사용법을 성공적으로 배웠습니다.",

    relatedToolsTitle: "관심을 가질 만한 관련 도구",
    relatedTools: [
        {
            name: "STL에서 GLB로 도구",
            description: "STL을 GLB로 변환.",
            url: "https://www.ufreetools.com/tool/stl-to-glb-converter"
        },
        {
            name: "STL에서 OBJ로 도구",
            description: "STL을 OBJ로 변환.",
            url: "https://www.ufreetools.com/tool/stl-to-obj-converter"
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
