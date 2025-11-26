export default {
    title: '7파라미터 변환기: Bursa-Wolf 지오데식 좌표 배치 변환 튜토리얼',
    functionTitle: '7파라미터 변환기가 다중 좌표계 통합 문제를 어떻게 해결하는가?',
    intro: '<p>7파라미터 변환기는 Bursa-Wolf 모델을 기반으로 <strong>WGS84, CGCS2000, 베이징54, 시안80</strong> 간 XYZ와 BLH 배치 변환을 제공하며, 측량, 공학, GIS 플랫폼에서 다중 소스 좌표 융합 시 발생하는 오프셋과 정확도 추적 불가능 문제 해결에 중점을 둡니다. 도구는 오픈 알고리즘, 오차 조정 및 프로세스 로그를 내장하여 각 변환이 추적 가능하고 재현 가능하며 평가 가능하도록 합니다.</p><p>자동 조정과 템플릿화 파라미터 관리를 통해 팀은 프로젝트 간 고신뢰성 7파라미터 세트를 빠르게 재사용할 수 있으며 로그를 통해 각 회전과 축척 보정 단계를 검증하여 공개 입찰 및 수용 단계에서 완전한 기술 설명서 제출을 용이하게 합니다.</p>',
    useCasesTitle: '실제 응용 시나리오',
    useCases: {
        first: '<strong>건설 및 시설물 측량</strong>: CGCS2000 결과와 지역 독립 좌표계 연동으로 지하 파이프라인, BIM 모델 및 준공도의 원활한 접합 보장.',
        second: '<strong>에너지 및 교통 공학</strong>: 광역 건설에서는 베이징54, 시안80, WGS84 좌표 간 상호 운용성이 필요하며, 7파라미터 변환기가 전체 과정 오차 평가를 제공함.',
        third: '<strong>원격 탐사 및 UAV</strong>: 항공 사진 결과는 종종 WGS84로 출력되며, 지역 가우스-크뤼게르 투영으로 가져오기 전 고정밀 7파라미터 변환이 필요함.',
        fourth: '<strong>자연 자원 등록</strong>: 역사적 경계점 좌표는 종종 구형 대지 기준을 사용하며, 도구는 이를 CGCS2000으로 신뢰성 있게 매핑하여 등록 및 심사에 용이하게 함.'
    },
    tipTitle: '제품 도해',
    logoAlt: '/seven-parameter-transformer-logo.png',
    tipContent: '이 도해는 검색 엔진에서 검색 결과의 리치 미디어 스니펫을 위해 크롤링될 수 있습니다.',
    conclusion: '<p>단일 점 검사부터 수만 건의 배치 처리까지, 7파라미터 변환기는 좌표 잔차, RMSE, 신뢰 구간을 포함한 보고서를 출력할 수 있습니다. 100% 프론트엔드 구현에 의존하여 민감한 점 좌표가 브라우저를 떠나지 않아 기밀 프로젝트의 데이터 저장소 규정 요건을 충족합니다.</p>',
    faqTitle: '자주 묻는 질문',
    faqs: {
        q1: {
            question: '7파라미터 변환기는 Bursa-Wolf 7파라미터 계산 정확도를 어떻게 보장하는가?',
            answer: '<p>도구는 최소자승법 공통점 방식으로 7파라미터를 풀고 잔차 벡터, Sigma0, 95% 신뢰 구간을 출력합니다. 로그를 통해 행렬 연산 과정을 검증하여 Bursa-Wolf 7파라미터 정확도가 프로젝트 사양을 충족하는지 확인할 수 있습니다.</p>'
        },
        q2: {
            question: '배치 CSV 가져올 때 사용자 정의 구분자를 어떻게 설정하는가?',
            answer: '<p>"좌표 데이터 입력" 영역에서 구분자 필드를 조정합니다. 7파라미터 변환기는 새 구분자로 XYZ/BLH/ENH 데이터를 파싱하면서 후속 매칭을 위해 점명 또는 주석 열을 유지합니다.</p>'
        },
        q3: {
            question: '7파라미터 변환기로 가우스-크뤼게르 투영과 UTM 투영을 동시에 처리할 수 있는가?',
            answer: '<p>가능합니다. "투영/고도 파라미터"에서 해당 모드를 선택하고 중앙 경도, 대역폭, 축척 계수를 입력하면 됩니다. 변환 프로세스는 먼저 3D 순산을 수행한 다음 대상 투영 좌표로 역산합니다.</p>'
        },
        q4: {
            question: '공통점이 부족할 때 7파라미터를 어떻게 얻는가?',
            answer: '<p>3개 미만의 공통점이 있을 경우 "파라미터 템플릿"에서 플랫폼 내장 샘플 파라미터를 호출하거나, 과거 프로젝트의 참조 값을 입력한 다음 현장 수집 새 점으로 반복 업데이트할 수 있습니다.</p>'
        },
        q5: {
            question: '7파라미터 변환기가 지역 독립 좌표계를 지원하는가?',
            answer: '<p>지원합니다. "사용자 정의 타원체 파라미터"에서 장반경과 편평률 역수를 입력하고 사용자 정의 투영 파라미터와 결합하여 지역 독립 좌표계의 현실적인 복원과 상호 변환을 실현할 수 있습니다.</p>'
        }
    },
    tutorialTitle: '7파라미터 변환기 운영 가이드',
    steps: {
        step1: {
            title: '좌표계 및 투영 모드 선택',
            description: '먼저 원본과 대상 좌표계를 선택하고 투영 파라미터 영역에 중앙 자오선, 대역폭 등의 정보를 입력하여 측정 데이터와 일치하도록 합니다.'
        },
        step2: {
            title: '좌표 점 입력 또는 가져오기',
            description: '단일 XYZ/BLH/ENH 점을 수동으로 입력하거나 CSV/TXT를 드래그하여 배치 가져오기를 할 수 있습니다. 필요시 구분자를 조정하여 올바른 파싱을 유지합니다.'
        },
        step3: {
            title: '7파라미터 구성',
            description: '파라미터가 알려져 있으면 ΔX, ΔY, ΔZ, Rx, Ry, Rz 및 축척을 직접 입력합니다. 알 수 없는 경우 "공통점 솔버"에 점 쌍을 붙여넣고 조정을 실행합니다.'
        },
        step4: {
            title: '변환 실행 및 로그 보기',
            description: '"변환 실행"을 클릭하면 실시간 로그가 파싱, 순/역산, 회전, 축척 보정 등의 과정을 표시하여 문제 추적을 용이하게 합니다.'
        },
        step5: {
            title: '정확도 평가',
            description: '결과 패널은 RMSE, 최대 잔차, 95% 신뢰 구간을 표시합니다. 지표가 한계를 초과하면 파라미터 영역으로 돌아가 조정하거나 재조정합니다.'
        },
        step6: {
            title: '결과 및 보고서 내보내기',
            description: '정확도를 확인한 후 결과 CSV와 로그를 함께 내보내어 보관하거나 심사 제출용으로 사용합니다.'
        }
    },
    successTitle: '배포 완료',
    successContent: '축하합니다! 7파라미터 변환기의 전체 워크플로우를 습득했으며 이제 다중 소스 좌표 융합 프로젝트에서 배치 변환을 빠르게 완료하고 전문가 수준의 정확도 보고서를 출력할 수 있습니다.',
    relatedToolsTitle: '추천 관련 도구',
    relatedTools: {
        first: {
            name: '지도 분할 계산기',
            description: '위도 경도 좌표를 기반으로 도엽 번호를 계산하며 다양한 축척을 지원합니다.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        second: {
            name: 'GNSS 시간 변환기',
            description: 'GPS 시간, 베이Dou 시간, UTC 시간 간 상호 변환 도구입니다.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        third: {
            name: '면적 및 둘레 계산기',
            description: '다각형 그리기를 지원하여 면적과 둘레를 자동 계산하고 여러 단위 전환을 제공합니다.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        fourth: {
            name: '기선 계산기',
            description: '시작점과 종점 좌표를 입력하여 기선 길이와 방위각을 계산하며 오차 전파 분석을 지원합니다.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    },
    referencesTitle: '외부 참고자료',
    references: {
        first: {
            name: '중국 지리정보산업협회 - 표준규범',
            description: '중국 지리정보 업계 표준 및 기술규범',
            url: 'http://www.cagis.org.cn/'
        },
        second: {
            name: 'ISO 19111 좌표참조계 표준',
            description: '좌표 기준 및 투영 변환의 국제적 권위 표준입니다.',
            url: 'https://www.iso.org/standard/74039.html'
        },
        third: {
            name: '오픈 지오스페이셜 컨소시엄(OGC) 표준',
            description: '지리공간 데이터 변환을 위한 국제 표준',
            url: 'https://www.ogc.org/'
        }
    }
}