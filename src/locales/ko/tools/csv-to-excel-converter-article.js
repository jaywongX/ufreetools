export default {
    title: 'CSV to Excel 변환기: 고품질 배치 변환 및 멀티 테이블 내보내기 가이드',
    functionTitle: 'CSV to Excel 변환기가 시스템 간 데이터 상호작용 문제를 어떻게 해결하나요?',
    intro: '<p>CSV to Excel 변환기는 데이터 분석, 시스템 통합 및 배치 가져오기 시나리오를 위해 설계되어 CSV, TSV, TXT와 같은 텍스트 데이터를 브라우저에서 직접 Excel 통합 문서로 변환할 수 있습니다. 이 도구는 자동 인코딩 감지, 구분자 스마트 감지, 다중 파일 배치 처리, 실시간 로깅 및 데이터 미리보기를 지원하여 팀이 데스크톱 소프트웨어를 설치하지 않고도 호환되는 .xlsx 결과를 빠르게 생성할 수 있습니다.</p>',
    useCasesTitle: '대표적인 응용 시나리오',
    useCases: [
        '전자상거래 플랫폼에서 내보낸 CSV 주문 데이터를 재무 검토 및 보관을 위해 Excel 보고서로 변환',
        '로그 수집 시스템이 생성한 TSV 파일을 BI 도구 분석을 위해 다중 시트 Excel 파일로 배치 변환',
        'CRM 또는 ERP 시스템 시작 전에 기존 CSV 데이터를 Excel 템플릿으로 정리하여 배치 가져오기 준비',
        '부서 간 협업을 위해 형식이 지정된 Excel 파일을 준비하여 비기술 직원도 안전하게 데이터를 볼 수 있도록 함',
        '데이터 제공 또는 입찰 시 더 읽기 쉬운 Excel 첨부 파일을 생성하여 감사 규정 요건 충족',
        'API가 반환하는 CSV를 차트나 매크로 템플릿과 결합하여 빠른 분석을 위해 Excel로 배치 변환',
        'IoT 장치 로그 CSV를 장치 유형에 따라 다중 시트 Excel 문서로 정리',
        '교육 또는 강의 시나리오에서 샘플 CSV 데이터를 한 번의 클릭으로 Excel 연습 파일로 변환'
    ],
    logoAlt: "CSV to Excel 변환기 제품 미리보기",
    tipTitle: '전문가 팁:',
    conclusion: '<p>순수한 프론트엔드 구현을 기반으로 한 <strong>CSV to Excel 변환기</strong>를 통해 데이터 엔지니어와 비즈니스 사용자가 민감한 파일을 업로드하지 않고도 배치 변환, 표준화된 명명 및 다중 시트 출력을 완료할 수 있습니다. 로깅 및 인코딩 감지와 결합하면 형식 불일치로 인한 가져오기 실패를 최소화할 수 있습니다. 추가 데이터 정리나 분할이 필요한 경우 <a href="https://www.ufreetools.com/tool/excel-to-csv-converter" target="_blank">Excel to CSV 변환기</a>를 사용하여 양방향 변환을 수행할 수 있습니다. CSV 표준을 이해하려면 권위 있는 사양인 <a href="https://tools.ietf.org/html/rfc4180" target="_blank" rel="noopener noreferrer">RFC 4180</a>을 참조하세요.</p>',
    faqTitle: '자주 묻는 질문',
    faqs: [
        {
            question: 'CSV to Excel 변환기가 어떤 구분자와 텍스트 한정자를 지원하나요?',
            answer: '<p>이 도구에는 쉼표, 세미콜론, 탭, 수직선 및 사용자 정의 구분자 옵션이 내장되어 있으며, 이중 따옴표, 단일 따옴표 또는 한정자가 없는 복잡한 CSV를 지원합니다. "자동 감지"를 선택하면 시스템은 처음 몇 줄의 데이터를 기반으로 가장 가능성 있는 구분자 조합을 계산하여 변환된 Excel의 열 수가 정확하도록 합니다.</p>'
        },
        {
            question: '다른 인코딩의 CSV 파일을 어떻게 처리하나요?',
            answer: '<p>자동 인코딩 감지를 제공하며 UTF-8, UTF-8 BOM, UTF-16 LE, GBK와 같은 일반적인 인코딩을 수동으로 지정할 수 있습니다. 특수 인코딩이 있는 경우 업로드하기 전에 외부 도구에서 UTF-8로 변환하는 것이 좋습니다. 이렇게 하면 Excel에서 중국어 문자나 기호가 깨지지 않도록 할 수 있습니다.</p>'
        },
        {
            question: '여러 CSV 파일을 동일한 Excel 통합 문서에 병합할 수 있나요?',
            answer: '<p>예. "Excel 통합 문서 설정"에서 "단일 Excel 파일로 결합"을 체크하면 시스템이 각 CSV에 대해 워크시트를 생성합니다. 시트 이름은 파일 이름이나 사용자 정의 접두사를 기반으로 할 수 있으며, 소스 추적을 쉽게 하기 위해 타임스탬프를 추가할 수 있습니다.</p>'
        },
        {
            question: '변환된 Excel이 CSV의 헤더와 빈 행을 유지하나요?',
            answer: '<p>기본적으로 첫 번째 행을 헤더로 유지하며, 빈 행, 빈 셀 및 원본 데이터 순서를 완전히 보존합니다. 헤더를 무시하려면 설정에서 "첫 번째 행에 헤더 포함" 옵션을 비활성화하고 변환을 다시 실행하면 시스템이 순수 데이터 모드에서 Excel을 생성합니다.</p>'
        },
        {
            question: '배치 변환 중에 프로세스를 보고 오류를 해결하려면 어떻게 하나요?',
            answer: '<p>각 변환은 처리된 파일, 생성된 워크시트, 행/열 통계 및 가능한 오류를 기록하는 프로세스 로그를 생성합니다. 로그 패널을 확장하거나 "로그 복사"를 클릭하여 팀과 공유할 수 있으며, 코드 배포나 데이터 제공 전에 문제 해결을 용이하게 합니다.</p>'
        }
    ],
    tutorialTitle: '운영 가이드',
    steps: [
        {
            title: 'CSV 파일 업로드 또는 가져오기',
            description: '업로드 버튼을 클릭하거나 파일을 지정된 영역으로 드래그하여 다중 파일 배치 처리를 지원합니다. "URL에서 가져오기"에 공개 CSV 링크를 붙여넣을 수도 있으며, 시스템이 자동으로 가져와 대기열에 추가합니다.',
            note: '개별 파일은 50MB 미만으로 유지하는 것이 좋습니다. 대용량 파일은 분할하여 배치 변환할 수 있습니다.'
        },
        {
            title: '자동 감지 결과 확인',
            description: '시스템이 인코딩과 구분자를 감지하려고 시도하며 원시 데이터의 처음 몇 줄을 표시합니다. 감지 결과가 기대와 일치하지 않으면 수동으로 인코딩이나 구분자를 선택하여 열 수와 중국어 문자 표시가 올바른지 확인할 수 있습니다.',
            note: '필요한 경우 타사 도구에서 인코딩을 변환한 후 다시 업로드하세요.'
        },
        {
            title: 'CSV 파싱 옵션 구성',
            description: '"CSV 파싱 설정"에서 구분자, 텍스트 한정자, 줄 끝 문자 및 헤더 옵션을 조정합니다. 다른 언어나 시스템에서 생성된 CSV는 크게 다르므로 소스 시스템의 내보내기 규칙에 따라 구성하는 것이 좋습니다.',
            note: '"첫 번째 행에 헤더 포함"을 유지하면 Excel에 헤더 행이 생성됩니다.'
        },
        {
            title: 'Excel 통합 문서 정책 설정',
            description: '통합 문서 이름, 시트 명명 규칙 및 단일 Excel로 결합 여부를 사용자 정의합니다. 다중 파일 집계 시나리오의 경우 "단일 Excel 파일로 결합"을 활성화하고 타임스탬프를 추가하여 후속 추적을 쉽게 합니다.',
            note: '병합이 취소되면 도구는 각 CSV에 대해 독립적인 .xlsx 파일을 출력합니다.'
        },
        {
            title: '변환 실행 및 로그 모니터링',
            description: '"Excel로 변환"을 클릭하면 시스템이 실시간 진행률 표시줄을 표시하고 분석, 테이블 생성, 통계 등의 단계를 로그에 기록합니다. 오류가 발생하면 현재 파일의 처리가 중지되고 로그에 세부 정보가 표시됩니다.',
            note: '로그는 확장, 축소 및 원클릭 복사를 지원하여 협업 문제 해결에 도움이 됩니다.'
        },
        {
            title: 'Excel 다운로드 또는 배치 패키지',
            description: '변환이 완료되면 Excel 파일을 개별적으로 다운로드하거나 "배치 다운로드 (ZIP)"를 클릭하여 모든 결과를 한 번에 얻을 수 있습니다. 목록에는 각 통합 문서의 워크시트 이름, 파일 크기 및 미리보기 조각이 표시되어 빠른 확인이 가능합니다.',
            note: '모든 작업은 로컬 브라우저에서 완료되며 서버에 업로드할 필요가 없어 데이터 보안을 보장합니다.'
        }
    ],
    successTitle: '변환 완료',
    successContent: '축하합니다! CSV to Excel 변환기 사용법을 배워 산재한 텍스트 데이터를 구조화된 Excel 결과로 빠르게 정리하여 분석, 보고 또는 시스템 통합에 활용할 수 있게 되었습니다.',
    relatedToolsTitle: '추천 관련 도구',
    relatedTools: [
        {
            name: 'Excel to CSV 변환기',
            description: 'Excel 통합 문서를 일관된 인코딩과 구분자로 유지하면서 CSV로 배치 내보내기.',
            url: 'https://www.ufreetools.com/tool/excel-to-csv-converter'
        },
        {
            name: '이미지 리사이저',
            description: '이미지를 특정 크기로 조정하거나 백분율로 크기 조절.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: '도장 생성기',
            description: '온라인으로 다양한 도장 이미지를 만들고 회사 도장, 개인 도장 및 기타 디지털 도장을 생성.',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        },
        {
            name: 'QR 코드 생성기',
            description: 'URL, 텍스트, 연락처 정보 등에 대한 사용자 정의 QR 코드 생성.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],
    referencesTitle: '참조 리소스',
    references: [
        {
            name: 'RFC 4180 - CSV 표준',
            description: 'CSV 파일 형식의 공식 사양 및 필드 규칙에 대해 알아보세요.',
            url: 'https://tools.ietf.org/html/rfc4180'
        },
        {
            name: 'Microsoft Excel Open XML 사양',
            description: '.xlsx 파일 구조 및 호환성 요구 사항에 대한 심층적인 이해를 얻으세요.',
            url: 'https://learn.microsoft.com/en-us/openspecs/office_standards/ms-xlsx/' 
        },
        {
            name: 'WHATWG 인코딩 표준',
            description: '브라우저가 지원하는 텍스트 인코딩 목록 및 구현 세부 정보.',
            url: 'https://encoding.spec.whatwg.org/'
        }
    ]
}