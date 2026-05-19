export default {
    title: "OBJ에서 STL로 도구: 온라인 3D 프린팅 형식 변환기 사용 가이드",
    functionTitle: "OBJ에서 STL로 도구란 무엇이며 그 용도는?",
    intro: "저희 <strong>OBJ에서 STL로 도구</strong>는 OBJ (Wavefront Object) 파일을 STL (Stereo Lithography) 형식으로 빠르게 변환할 수 있는 전문적인 온라인 3D 프린팅 형식 변환 응용 프로그램입니다. STL은 3D 프린팅 산업에서 가장 널리 사용되는 파일 형식이며, 거의 모든 3D 프린터 및 슬라이싱 소프트웨어에서 지원됩니다.",

    useCasesTitle: "OBJ에서 STL로의 일반적인 사용 사례",
    useCases: [
        "OBJ 형식의 3D 모델을 3D 프린팅을 위해 STL로 변환",
        "여러 OBJ 파일을 STL로 일괄 변환",
        "3D 프린팅 모델에 올바른 단위 설정",
        "슬라이싱 소프트웨어에서 사용하기 위해 OBJ 파일을 STL로 변환",
        "3D 프린트 파일 형식 최적화, STL은 가장 넓은 호환성을 가짐",
        "3D 프린팅 서비스 제공업체를 위한 표준화된 STL 준비",
        "쉬운 데이터 교환을 위해 OBJ 모델을 STL로 변환",
        "3D 프린팅을 위해 STL 형식 파일 준비"
    ],

    tipTitle: "전문가 팁:",
    tipContent: "STL 형식은 바이너리와 ASCII 두 가지가 있습니다. 바이너리 STL 파일은 파일 크기가 작아 대부분의 경우 권장됩니다. OBJ 파일에는 정점 및 노멀 정보가 포함되어 있으며, STL로 변환할 때 보존됩니다. 3D 프린팅의 경우 밀리미터가 권장되는 단위입니다.",

    conclusion: "<strong>OBJ에서 STL로 형식 변환</strong> 도구는 3D 프린팅 애호가, 디자이너, 엔지니어 및 대량의 3D 모델을 처리해야 하는 사용자에게 특히 유용합니다.",

    faqTitle: "자주 묻는 질문",
    faqs: [
        {
            question: "OBJ에서 STL로 도구는 어떤 OBJ 형식을 지원합니까?",
            answer: "저희 변환기는 표준 OBJ (Wavefront Object) 파일 형식을 지원합니다. 도구는 정점, 노멀, 면 데이터를 자동으로 분석합니다."
        },
        {
            question: "OBJ에 비해 STL 형식의 장점은 무엇입니까?",
            answer: "3D 프린팅에서 STL 형식의 장점: (1) 가장 넓은 호환성; (2) 단순한 파일 구조; (3) 작은 바이너리 파일 크기; (4) 업계 전통적 표준."
        },
        {
            question: "올바른 단위 선택 방법은?",
            answer: "저희 도구는 네 가지 일반 단위를 제공합니다: 밀리미터, 센티미터, 미터, 인치. 3D 프린터 요구사항에 따라 선택하는 것을 권장합니다."
        },
        {
            question: "바이너리 STL과 ASCII STL의 차이점은 무엇입니까?",
            answer: "바이너리 STL은 더 작은 파일 크기로 바이너리 인코딩을 사용합니다. ASCII STL은 더 큰 텍스트 형식을 사용하지만 읽기 쉽습니다."
        },
        {
            question: "변환된 STL 파일은 어떤 소프트웨어에서 사용할 수 있습니까?",
            answer: "STL은 Cura, PrusaSlicer, Simplify3D, 3D Builder를 포함한 주요 슬라이싱 소프트웨어에서 광범위하게 지원됩니다."
        },
        {
            question: "변환 프로세스가 안전합니까?",
            answer: "완전히 안전합니다! 모든 처리는 브라우저에서 로컬로 수행됩니다."
        },
        {
            question: "STL 파일 크기가 변경됩니까?",
            answer: "일반적으로 변경됩니다. 바이너리 STL은 일반적으로 ASCII STL보다 30-50% 작습니다."
        }
    ],

    tutorialTitle: "OBJ에서 STL로 도구 사용 방법",
    steps: [
        {
            title: "OBJ 파일 업로드",
            description: "OBJ 파일을 업로드합니다. <strong>끌어다 놓거나</strong> <strong>찾아보기를 클릭</strong>할 수 있습니다.",
            note: "여러 OBJ 파일을 동시에 업로드할 수 있습니다."
        },
        {
            title: "매개변수 설정",
            description: "<strong>모델 이름</strong>(선택 사항), <strong>모델 단위</strong>, <strong>출력 형식</strong>(바이너리 STL 또는 ASCII)을 설정합니다.",
            note: "단위에 대해 확신이 없으면 밀리미터(mm)가 일반적으로 가장 안전합니다."
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
    successContent: "저희의 OBJ에서 STL로 도구 사용법을 성공적으로 배웠습니다.",

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
            name: "OBJ 파일 형식 사양",
            description: "OBJ의 기술 사양 이해",
            url: "https://en.wikipedia.org/wiki/Wavefront_.obj_file"
        },
        {
            name: "STL 파일 형식 설명",
            description: "STL 형식의 역사와 구조",
            url: "https://en.wikipedia.org/wiki/STL_%28file_format%29"
        },
        {
            name: "3D 프린팅 파일 형식 비교",
            description: "STL, OBJ, 3MF의 특성",
            url: "https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/"
        }
    ]
}
