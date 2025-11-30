export default {
    title: 'Excel to CSV 변환기: 온라인 배치 Excel 파일 변환 사용 가이드',
    functionTitle: 'Excel to CSV 변환기란 무엇이며 어떤 용도로 사용되나요?',
    intro: '우리의 <strong>Excel to CSV 변환기</strong>는 Excel 파일(.xlsx 및 .xls 형식)을 신속하게 CSV 형식으로 변환할 수 있는 강력한 온라인 도구입니다. 이 도구는 여러 파일의 일괄 처리, 다중 시트 인식, 사용자 정의 구분자 및 인코딩 형식을 지원하여 다양한 시스템과 소프트웨어의 데이터 가져오기 요구를 충족합니다. 우리의 <strong>온라인 Excel to CSV 도구</strong>를 사용하면 소프트웨어를 설치할 필요 없이 대용량 데이터 파일을 쉽게 처리할 수 있으며, 모든 변환은 브라우저 내에서 로컬로 수행되어 데이터 보안을 보장합니다.',

    useCasesTitle: 'Excel to CSV 변환의 일반적인 응용 시나리오',
    useCases: [
        'Excel 데이터를 데이터베이스 시스템(MySQL, PostgreSQL 등)으로 가져오기',
        '데이터 분석 도구(Python pandas, R 언어)를 위한 CSV 형식 데이터 준비',
        '웹 애플리케이션에서 사용자 데이터나 제품 정보를 일괄 가져오기',
        'Excel 보고서를 다른 시스템에서 사용할 수 있도록 CSV 형식으로 변환',
        '다중 시트 Excel 파일을 처리하고 각각을 CSV로 개별적으로 내보내기',
        '데이터 마이그레이션 프로젝트를 위해 기존 Excel 파일을 일괄 변환',
        'Excel 데이터를 버전 관리를 위해 CSV 형식으로 변환',
        'API 인터페이스를 위한 표준화된 CSV 데이터 파일 준비'
    ],

    logoAlt: "Excel to CSV 변환기 제품 미리보기",
    tipTitle: '전문가 팁:',
    tipContent: '특수 문자나 줄 바꿈이 포함된 데이터의 경우 텍스트 한정자로 이중 따옴표를 사용하는 것이 좋습니다. 이렇게 하면 CSV 파일을 다른 시스템으로 가져올 때 형식 오류가 발생하지 않도록 할 수 있습니다. 중국어 데이터의 경우 Excel에서 열 때 중국어가 올바르게 표시되도록 UTF-8 BOM 인코딩을 사용하는 것을 권장합니다.',

    conclusion: '<strong>Excel to CSV 변환</strong> 도구는 데이터 분석가, 개발자, 데이터 관리자 및 Excel 파일을 자주 처리해야 하는 사용자에게 특히 유용합니다. 당사의 변환기를 사용하면 Excel 데이터를 신속하게 CSV 형식으로 변환하여 다양한 시스템과 도구 간에 데이터 공유를 쉽게 할 수 있습니다. 당사의 도구는 일괄 처리, 사용자 정의 형식 설정, 실시간 미리보기를 지원하여 데이터 변환 프로세스를 단순하고 효율적으로 만듭니다.',

    faqTitle: '자주 묻는 질문',
    faqs: [
        {
            question: 'Excel to CSV 변환기는 어떤 Excel 형식을 지원하나요?',
            answer: '당사의 <strong>온라인 Excel to CSV 도구</strong>는 .xlsx(Office Open XML)와 .xls(기존 바이너리 형식) 두 가지 주요 Excel 형식을 지원합니다. 도구는 파일 형식을 자동으로 식별하고 적절한 처리를 수행하며, 다중 시트 Excel 파일을 지원하여 모든 시트를 변환하거나 특정 시트만 선택하여 변환할 수 있습니다.'
        },
        {
            question: '변환된 CSV 파일은 원본 데이터 형식을 유지하나요?',
            answer: 'CSV 형식 자체는 글꼴, 색상, 수식 등의 서식 정보를 포함하지 않지만 모든 데이터 내용은 완전히 보존됩니다. 날짜, 숫자 및 텍스트 데이터는 모두 올바르게 변환됩니다. Excel 셀에 수식이 포함된 경우 변환기는 수식의 계산 결과 값을 추출합니다.'
        },
        {
            question: '특수 문자가 포함된 Excel 데이터는 어떻게 처리하나요?',
            answer: '당사의 도구는 사용자 정의 텍스트 한정자(이중 따옴표 또는 단일 따옴표)를 지원하여 쉼표, 줄 바꿈, 따옴표 및 기타 특수 문자가 포함된 데이터를 올바르게 처리할 수 있습니다. 특수 문자가 포함된 데이터를 변환할 때는 텍스트 한정자로 이중 따옴표를 선택하는 것이 좋으며, 이렇게 하면 CSV 파일 형식이 올바르게 유지됩니다.'
        },
        {
            question: '여러 Excel 파일을 일괄 변환할 수 있나요?',
            answer: '네, 당사의 <strong>Excel to CSV 일괄 변환 도구</strong>는 일괄 처리를 완전히 지원합니다. 여러 Excel 파일을 동시에 업로드할 수 있으며, 도구는 각 파일을 순차적으로 처리하고 완료 후 모든 변환된 CSV 파일을 ZIP 파일로 패키징하여 다운로드할 수 있는 일괄 다운로드 기능을 제공합니다.'
        },
        {
            question: '변환된 CSV 파일은 어떤 인코딩 형식을 지원하나요?',
            answer: '당사의 도구는 UTF-8, UTF-8 BOM, GBK, ANSI를 포함한 여러 인코딩 형식을 지원합니다. UTF-8 BOM 형식은 Excel에서 중국어가 포함된 CSV 파일을 여는 데 특히 적합하며, UTF-8 형식은 프로그램에서 사용하기에 더 적합합니다. 대상 시스템의 요구사항에 따라 적절한 인코딩 형식을 선택할 수 있습니다.'
        },
        {
            question: '암호화되거나 보호된 Excel 파일을 처리할 수 있나요?',
            answer: '브라우저 환경의 제약으로 인해 당사의 도구는 비밀번호로 보호된 Excel 파일을 처리할 수 없습니다. Excel 파일이 암호화된 경우 변환 전에 Excel 소프트웨어를 사용하여 먼저 복호화해야 합니다. 암호화되지 않은 Excel 파일의 경우 당사의 도구로 완벽하게 처리할 수 있습니다.'
        }
    ],

    tutorialTitle: 'Excel to CSV 변환기 사용 방법',
    steps: [
        {
            title: 'Excel 파일 업로드',
            description: '먼저 변환하려는 Excel 파일을 업로드합니다. 파일을 업로드 영역으로 <strong>드래그 앤 드롭</strong>하거나 찾아보기를 클릭하여 장치에서 파일을 선택할 수 있습니다. 당사의 도구는 .xlsx 및 .xls 형식을 지원하며, 여러 파일을 동시에 업로드하여 일괄 변환할 수 있습니다.',
            note: '"URL에서 가져오기" 기능을 사용하여 Excel 파일의 웹 주소를 직접 입력하여 변환할 수도 있습니다.'
        },
        {
            title: '시트 선택 (선택 사항)',
            description: 'Excel 파일에 여러 시트가 포함된 경우 파일 목록에서 각 파일의 변환할 시트를 선택할 수 있습니다. 기본적으로 도구는 모든 시트를 변환하며, 각 시트는 독립된 CSV 파일을 생성합니다.',
            note: '대용량 Excel 파일의 경우 먼저 단일 시트를 선택하여 테스트하고, 변환 결과가 예상대로인지 확인한 후 일괄 처리하는 것이 좋습니다.'
        },
        {
            title: 'CSV 형식 옵션 설정',
            description: '「CSV 형식 설정」영역에서 구분자(쉼표, 세미콜론, 탭 등), 텍스트 한정자(이중 따옴표, 단일 따옴표 또는 없음), 줄 끝 문자(Windows/Unix/Mac) 및 인코딩 형식(UTF-8, UTF-8 BOM, GBK, ANSI)을 사용자 정의할 수 있습니다. 이러한 설정은 변환된 CSV 파일의 형식에 영향을 미칩니다.',
            note: '중국어 데이터의 경우 UTF-8 BOM 인코딩 사용을 권장합니다. Excel에서 열 파일의 경우 텍스트 한정자로 이중 따옴표 사용을 권장합니다.'
        },
        {
            title: '데이터 미리보기 (선택 사항)',
            description: '변환 전에 「데이터 미리보기」를 클릭하여 Excel 파일의 내용을 확인할 수 있습니다. 미리보기 기능은 처음 몇 줄의 데이터를 표시하여 파일 형식과 내용이 올바른지 확인하는 데 도움이 됩니다.',
            note: '미리보기 기능을 사용하면 데이터 형식 문제를 발견할 수 있어 변환 후 오류가 발생하는 것을 방지할 수 있습니다.'
        },
        {
            title: '변환 실행',
            description: '<strong>「변환 시작」</strong> 버튼을 클릭하여 파일 처리를 시작합니다. 도구는 현재 처리 중인 파일, 시트 및 행 수를 포함한 변환 진행 상황을 표시합니다. 변환 프로세스는 데이터를 서버에 업로드하지 않고 브라우저 내에서 로컬로 완전히 수행됩니다.',
            note: '대용량 파일의 경우 변환에 시간이 걸릴 수 있으므로 기다려 주세요. 처리 로그에서 자세한 변환 프로세스를 확인할 수 있습니다.'
        },
        {
            title: '변환 결과 다운로드',
            description: '변환이 완료되면 각 CSV 파일 아래에 있는 <strong>「다운로드」</strong> 버튼을 클릭하여 개별적으로 저장하거나 상단의 <strong>「일괄 다운로드」</strong> 버튼을 사용하여 모든 CSV 파일을 ZIP 파일로 패키징하여 다운로드할 수 있습니다. 파일명은 설정에 따라 자동으로 생성됩니다.',
            note: '모든 처리는 브라우저 내에서 수행되므로 Excel 파일이 서버에 업로드되지 않아 데이터의 개인 정보 보호와 보안을 보장합니다.'
        }
    ],

    successTitle: '축하합니다!',
    successContent: '당사의 Excel to CSV 변환기 사용 방법을 성공적으로 학습했습니다. 이제 데이터 분석, 데이터베이스 가져오기 또는 기타 용도로 Excel 파일을 쉽게 CSV 형식으로 변환할 수 있습니다.',

    relatedToolsTitle: '관심 있을 만한 관련 도구',
    relatedTools: [
        {
            name: '바이오닉 리딩 변환기',
            description: '무료 온라인 바이오닉 리딩 변환기로 텍스트를 Bionic Reading 스타일로 실시간 변환합니다.',
            url: 'https://www.ufreetools.com/tool/bionic-reading-converter'
        },
        {
            name: '이미지 리사이저',
            description: '이미지를 특정 크기로 조정하거나 백분율로 확대/축소합니다.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: '도장 생성기',
            description: '온라인으로 다양한 종류의 도장 이미지를 만들고 회사 도장, 개인 도장 및 기타 디지털 도장을 생성합니다.',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        },
        {
            name: 'QR 코드 생성기',
            description: 'URL, 텍스트, 연락처 정보 등에 대한 사용자 정의 QR 코드를 만듭니다.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],

    referencesTitle: '참조 자료',
    references: [
        {
            name: 'CSV 파일 형식 사양 (RFC 4180)',
            description: 'CSV 파일의 표준 형식 사양 및 모범 사례 알아보기',
            url: 'https://tools.ietf.org/html/rfc4180'
        },
        {
            name: 'Office Open XML 표준',
            description: 'Excel .xlsx 파일 형식의 기술 사양 알아보기',
            url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-376/'
        },
        {
            name: '문자 인코딩 표준 (Unicode)',
            description: 'UTF-8, GBK 등의 문자 인코딩 표준 알아보기',
            url: 'https://www.unicode.org/standard/standard.html'
        }
    ]
}