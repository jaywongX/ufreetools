export default {
    title: '4파라미터 변환기: 평면 유사와 헬머트 변환 배치 가이드',
    functionTitle: '4파라미터 변환기가 지역 좌표 일괄 연동을 어떻게 보장하는가?',
    intro: '<p>4파라미터 변환기는 평면 유사, 버사 간략, 헬머트 모델 기반으로 구축되어 ΔX, ΔY 평행이동, 회전 θ, 척도 m을 포함한 모든 파라미터를 커버합니다. 순수 프론트엔드 알고리즘을 통해 시스템은 브라우저 내에서 단점 및 배치 정역산을 로컬로 완료하고, 실시간으로 잔차 벡터, RMSE, 95% 신뢰 구간 및 정확도 히트맵을 제공하여 각 좌표 연동의 추적 가능성, 검증 가능성, 평가 가능성을 보장합니다.</p>',
    useCasesTitle: '도구 기능 및 응용 시나리오',
    useCases: {
        first: '<strong>공학 좌표 일체화</strong>: 도시 갱신이나 궤도교통 프로젝트에서 지역 독립 좌표계를 통합 공학 좌표계에 신속하게 매핑하여 설계와 시공의 협업 효율을 향상시킵니다.',
        second: '<strong>지역 투영 모자이크</strong>: 원격탐사 및 UAV 성과는 종종 다른 투영대에서 오므로 4파라미터 변환기는 평면 제어점을 배치 업데이트하여 끊김 없는 접합을 실현할 수 있습니다.',
        third: '<strong>사용자 정의 평면계 융합</strong>: 공장 및 산업단지 내 자체 구축 좌표계 연동, 4파라미터 모델을 활용하여 척도와 회전 차이를 해소하고 도면과 현장의 일치를 실현합니다.',
        fourth: '<strong>성과 리뷰 및 수용</strong>: 잔차 분포 히스토그램과 신뢰 구간을 출력하여 고객이나 감독 부서에 정량 평가 보고서를 제출합니다.'
    },
    tipTitle: '제품 페이지 이미지',
    logoAlt: '4파라미터 변환기 제품 미리보기',
    tipContent: '이 도해는 검색 엔진에 의해 검색 결과의 리치 미디어 스니펫을 위해 크롤링될 수 있습니다.',
    conclusion: '<p>4파라미터 변환기로 측량, 설계, 감독 팀은 원본 좌표 누출 없이 로컬라이즈 변환, 잔차 리뷰, 보고서 출력을 완료할 수 있어 프로젝트 전 생애 주기에 걸친 데이터 추적성 및 검증성 요구사항을 충족합니다. 추가 투영대 변환을 위해서는 <a href="https://www.ufreetools.com/tool/coordinate-zone-switcher" target="_blank">좌표 배치대 스위처</a>와 함께 사용할 수 있습니다. 국제 표준은 <a href="https://www.ogc.org/" target="_blank" rel="noopener noreferrer">OGC 좌표 변환</a>에 액세스하여 더 많은 안내를 받을 수 있습니다.</p>',
    faqTitle: '자주 묻는 질문',
    faqs: {
        q1: {
            question: '4파라미터 변환기가 평면 유사 변환의 정확도와 안정성을 어떻게 보장하는가?',
            answer: '<p>도구는 최소자승 조정을 이용하여 ΔX, ΔY, θ, m을 해석하고 RMSE, 최대 잔차, 95% 신뢰 구간을 출력합니다. 사용자는 로그를 통해 행렬 연산을 검증하여 평면 유사 변환의 정확도를 확인할 수 있습니다.</p>'
        },
        q2: {
            question: '배치 임포트 시 잘못된 좌표를 자동으로 건너뛸 수 있는가?',
            answer: '<p>가능합니다. 분석 단계에서 열 수의 불일치나 이상 데이터가 발견되면 시스템은 로그에 기록하고 해당 항목을 건너뛰며 나머지 좌표 처리를 계속하여 배치 변환의 중단을 방지합니다.</p>'
        },
        q3: {
            question: '4파라미터 변환기가 정산과 역산을 지원하는가?',
            answer: '<p>예. 도구는 정산(원본→목표)과 역산(목표→원본) 버튼을 제공하여 변환 전후 좌표 비교와 오버레이 시각화를 용이하게 합니다.</p>'
        },
        q4: {
            question: '4파라미터 변환기에서 잔차 분포를 확인하는 방법은?',
            answer: '<p>변환 완료 후 시스템은 자동으로 제어점 분포도, 잔차 히스토그램, 정확도 히트맵 격자를 그려 점군의 균일성과 오차 집중도를 판단하는 데 도움을 줍니다.</p>'
        },
        q5: {
            question: '4파라미터 변환기가 생성한 보고서를 인용할 수 있는가?',
            answer: '<p>예. 결과 영역은 CSV 내보내기를 지원하며 로그는 원클릭으로 복사 가능하고 차트는 스크린샷으로 기술 보고서에 삽입할 수 있어 공학 수용이나 파일 보존 요구사항을 충족합니다.</p>'
        }
    },
    tutorialTitle: '4파라미터 변환기 운영 가이드',
    steps: {
        step1: {
            title: '원본 좌표 및 제어점 준비',
            description: '먼저 원본 좌표와 대응하는 목표 좌표를 정리하고 구분자 형식을 확인하여 각 데이터 행에 X, Y 및 선택적 목표값과 점명이 포함되도록 합니다.'
        },
        step2: {
            title: '모델 선택 및 파라미터 입력',
            description: '「모델 설정」에서 평면 유사, 버사 간략, 헬머트 모델을 선택하고 ΔX, ΔY, θ, m을 입력하거나 조정 결과를 기다리기 위해 공백으로 둡니다.'
        },
        step3: {
            title: '샘플 불러오기 또는 파일 임포트',
            description: '「샘플 불러오기」로 빠른 체험이 가능하고 CSV/TXT 파일을 드래그하여 대용량 좌표를 임포트하고 자동 분석할 수 있습니다.'
        },
        step4: {
            title: '조정 및 변환 실행',
            description: '공통점 해산 영역에 쌍 좌표를 붙여넣고 「평면 유사 조정」을 클릭하여 최적 파라미터를 얻고 정산 또는 역산을 실행하여 배치 변환을 완료합니다.'
        },
        step5: {
            title: '로그 및 시각화 확인',
            description: '실시간 로그는 분석, 조정, 변환, 통계 프로세스를 표시하고 제어점 분포, 잔차 히스토그램, 히트맵 개요를 그립니다.'
        },
        step6: {
            title: '결과 내보내기 및 공유',
            description: '결과 확인 후 CSV와 로그를 내보내고 시각화 차트의 스크린샷을 찍어 성과 제출, 리뷰, 문서 아카이빙에 사용합니다.'
        }
    },
    successTitle: '배포 완료',
    successContent: '축하합니다! 4파라미터 변환기의 워크플로우 전체를 습득하여 다양한 평면 좌표 연동 작업을 자신 있게 처리하고 정확도 평가 보고서를 생성할 수 있게 되었습니다.',
    relatedToolsTitle: '추천 관련 도구',
    relatedTools: {
        first: {
            name: '지도 분할 계산기',
            description: '위도 경도 좌표를 기반으로 도엽 번호를 계산하며 여러 스케일을 지원합니다.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        second: {
            name: 'GNSS 시간 변환기',
            description: 'GPS 시간, 베이Dou 시간, UTC 시간 간 변환 도구입니다.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        third: {
            name: '면적과 둘레 계산기',
            description: '다각형 그리기를 지원하여 면적과 둘레를 자동 계산하고 여러 단위 전환을 제공합니다.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        fourth: {
            name: '기선 계산기',
            description: '시점과 종점 좌표를 입력하여 기선 길이와 방위각을 계산하고 오차 전파 분석을 지원합니다.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    },
    referencesTitle: '참고 문헌',
    references: {
        first: {
            name: '중국 지리정보 산업협회 - 표준 규범',
            description: '중국 지리정보 업계의 표준과 기술 규범',
            url: 'http://www.cagis.org.cn/'
        },
        second: {
            name: 'ISO 19111 좌표 참조계 표준',
            description: '좌표 참조와 투영 변환의 권위적 국제 표준입니다.',
            url: 'https://www.iso.org/standard/74039.html'
        },
        third: {
            name: '오픈 지오파셜 컨소시엄(OGC) 표준',
            description: '지오파셜 데이터 변환의 국제 표준',
            url: 'https://www.ogc.org/'
        }
    }
}