export default {
  name: 'XML/JSON 변환기',
  title: 'XML ↔ JSON 변환',
  description: 'XML과 JSON 형식 간 양방향 변환, 고급 옵션 및 사용자 정의 설정 지원',
  
  conversion: {
    direction: '변환 방향',
    xmlToJson: 'XML → JSON',
    jsonToXml: 'JSON → XML'
  },
  
  options: {
    title: '변환 옵션',
    show: '옵션 표시',
    hide: '옵션 숨기기',
    
    xmlToJson: {
      ignoreAttributes: '속성 무시',
      ignoreAttributesHint: '이 옵션을 비활성화하면 JSON에서 XML 속성 정보를 유지합니다',
      parseAttributeValue: '속성 값 파싱',
      parseAttributeValueHint: '속성의 숫자, 불리언 값 등을 문자열 대신 실제 유형으로 변환',
      ignoreDeclaration: 'XML 선언 무시',
      ignoreDeclarationHint: '<?xml version="1.0"?>와 같은 선언 정보 무시',
      parseTagValue: '태그 값 파싱',
      parseTagValueHint: '태그 내용의 숫자, 불리언 값 등을 문자열 대신 실제 유형으로 변환',
      trimValues: '값 앞뒤 공백 제거',
      attributePrefix: '속성 접두사',
      attributePrefixPlaceholder: '예: @, _, attr_',
      attributePrefixHint: 'JSON에서 XML 속성을 나타내는 접두사, 기본값은 @'
    },
    
    jsonToXml: {
      format: 'XML 포맷팅',
      formatHint: '들여쓰기 및 줄 바꿈을 활성화하여 XML을 더 읽기 쉽게 만듭니다',
      indentBy: '들여쓰기 추가(2칸 공백)',
      addDeclaration: 'XML 선언 추가',
      addDeclarationHint: 'XML 시작 부분에 <?xml version="1.0" encoding="UTF-8"?> 추가',
      rootName: '루트 요소 이름(선택 사항)',
      rootNamePlaceholder: '예: root, data, xml',
      rootNameHint: 'JSON 최상위에 여러 키가 있을 때 사용할 루트 요소 이름',
      attributePrefix: '속성 접두사 인식',
      attributePrefixPlaceholder: '예: @, _, attr_',
      attributePrefixHint: 'JSON에서 XML 속성을 식별하는 데 사용할 접두사, 기본값은 @'
    }
  },
  
  buttons: {
    convert: '변환',
    swap: '내용 교환',
    clear: '비우기',
    loadExample: '예제 로드'
  },
  
  input: {
    xmlInput: 'XML 입력',
    jsonInput: 'JSON 입력',
    placeholder: {
      xml: 'XML 입력...',
      json: 'JSON 입력...'
    }
  },
  
  output: {
    xmlResult: 'XML 결과',
    jsonResult: 'JSON 결과',
    copy: '복사'
  },
  
  stats: {
    title: '변환 통계',
    inputSize: '입력 크기',
    outputSize: '출력 크기',
    sizeChange: '크기 변화',
    conversionTime: '변환 소요 시간'
  },
  
  help: {
    title: '사용 도움말',
    show: '도움말 표시',
    hide: '도움말 숨기기',
    about: {
      title: 'XML과 JSON 형식 설명',
      content: 'XML(Extensible Markup Language)은 구성 파일, 데이터 교환 및 웹 서비스에 널리 사용되는 확장 가능한 마크업 언어입니다. JSON(JavaScript Object Notation)은 사람이 읽고 쓰기 쉬운 경량의 데이터 교환 형식이며 기계가 파싱하고 생성하기도 쉽습니다.'
    },
    xmlToJson: {
      title: 'XML에서 JSON으로 변환 시 주의 사항',
      items: [
        'XML 속성은 JSON에서 기본적으로 @로 시작하는 키로 변환됩니다',
        'XML의 텍스트 내용은 JSON에서 기본적으로 #text 키로 표시됩니다',
        '"태그 값 파싱"을 활성화하면 숫자, 불리언 값 등이 실제 JSON 유형으로 변환됩니다',
        'XML은 동일한 이름의 여러 태그를 가질 수 있으며 JSON으로 변환될 때 자동으로 배열로 변환됩니다'
      ]
    },
    jsonToXml: {
      title: 'JSON에서 XML으로 변환 시 주의 사항',
      items: [
        'JSON에서 @로 시작하는 키는 기본적으로 XML 속성으로 간주됩니다',
        'JSON에서 배열을 사용하면 XML에서 동일한 이름의 여러 태그가 생성됩니다',
        '복잡한 중첩 JSON 객체는 계층화된 XML 구조를 생성합니다',
        'JSON 최상위에 여러 키가 있고 루트 요소 이름이 지정되지 않은 경우 여러 XML 루트 요소가 생성됩니다'
      ]
    }
  },
  
  errors: {
    xmlParse: 'XML 파싱 오류: {0}',
    jsonParse: 'JSON 파싱 오류: {0}',
    xmlGeneration: 'XML 생성 오류: {0}',
    emptyObject: 'JSON 객체가 비어 있거나 유효하지 않음',
    conversion: '변환 오류: {0}'
  },
  
  alerts: {
    copied: '클립보드에 복사됨'
  },
  
  article: {
    title: "XML/JSON 변환기: 데이터 구조를 원활하게 변환",
    features: {
      title: "XML과 JSON 데이터 변환 이해",
      description: "<strong>XML/JSON 변환기</strong>는 웹 개발 및 시스템 통합에서 가장 널리 사용되는 두 가지 <strong>데이터 교환 형식</strong> 간의 변환을 용이하게 하는 강력한 도구입니다. 이 양방향 <strong>형식 변환기</strong>는 데이터 구조 무결성을 유지하면서 <strong>XML에서 JSON으로</strong> 및 <strong>JSON에서 XML으로</strong> 변환할 수 있게 합니다.<br><br>우리의 <strong>XML/JSON 파서</strong>는 속성, 선언 및 중첩 데이터 구조를 처리하기 위한 광범위한 사용자 정의 옵션을 제공합니다. <strong>XML에서 JSON으로 변환</strong>의 경우 속성 접두사, 태그 값 파싱 방식 및 공백 처리 방법을 구성할 수 있습니다. <strong>JSON에서 XML으로 변환</strong>의 경우 포맷팅 기본 설정, XML 선언 추가 및 구조적으로 잘 구성된 출력을 위한 루트 요소 이름을 지정할 수 있습니다. 이 <strong>데이터 형식 변환기</strong>는 두 형식 간에 복잡한 계층적 데이터를 정확하게 표현합니다.",
      useCases: {
        title: "XML-JSON 변환의 일반적인 사용 사례",
        items: [
          "API 개발자가 XML 기반 SOAP 웹 서비스와 JSON 기반 REST API 간에 변환하여 다른 통합 지점 간의 호환성 보장",
          "프론트엔드 개발자가 XML 구성 파일을 JSON으로 변환하여 JavaScript 애플리케이션 및 현대적 프레임워크에서 더 쉽게 사용",
          "백엔드 엔지니어가 XML을 사용하는 레거시 시스템을 처리하면서 JSON 형식이 필요한 새로운 서비스 구현",
          "데이터 통합 전문가가 ETL(추출, 변환, 로드) 프로세스에서 다른 시스템 형식 매핑",
          "XML 데이터(예: RSS 피드)를 추출하고 저장 또는 분석을 위해 JSON으로 변환해야 하는 웹 스크래핑 애플리케이션",
          "모바일 앱 개발자가 기업 시스템에서 XML 데이터를 사용하고 더 효율적인 클라이언트 처리를 위해 JSON으로 변환"
        ]
      }
    },
    faq: {
      title: "XML-JSON 변환에 관한 자주 묻는 질문",
      items: [
        {
          question: "변환기는 두 형식의 복잡한 중첩 구조를 처리할 수 있나요?",
          answer: "예, 우리의 XML/JSON 파서는 양방향으로 복잡한 중첩 구조를 완벽하게 지원합니다. 변환기는 배열, 객체 및 혼합 콘텐츠를 처리하면서 계층 관계를 정확하게 유지합니다. XML에서 JSON으로 변환할 때 중첩 요소는 중첩 객체가 되고 반복 요소는 자동으로 배열로 변환됩니다. JSON에서 XML으로 변환할 때 중첩 객체는 자식 요소로 유지되고 배열은 동일한 태그 이름을 가진 반복 요소로 표시됩니다. 이 구조 보존은 구성 파일 및 데이터 모델을 포함한 모든 형식에서 복잡한 데이터를 처리하는 데 중요합니다."
        },
        {
          question: "이 도구는 특수 문자와 인코딩을 어떻게 처리하나요?",
          answer: "XML/JSON 변환기는 양방향으로 특수 문자 및 인코딩 문제를 자동으로 관리합니다. XML을 처리할 때 XML 엔터티(예: &amp;는 &, &lt;는 <)를 올바르게 디코딩하고 형식을 유지하기 위해 CDATA 섹션을 처리합니다. JSON에서 XML로 변환하는 동안 이 도구는 유효한 XML 출력을 보장하기 위해 특수 문자를 적절한 XML 엔터티로 인코딩합니다. 변환기는 전체 프로세스에서 UTF-8 호환성을 유지하며 두 형식에서 국제 문자, 기호 및 이모티콘을 올바르게 처리하므로 다국어 콘텐츠 및 글로벌 애플리케이션에 적합합니다."
        },
        {
          question: "XML 주석은 JSON으로 변환되는 동안 어떻게 되나요?",
          answer: "JSON 자체가 주석을 지원하지 않기 때문에 XML 주석은 일반적으로 XML에서 JSON으로 변환되는 동안 삭제됩니다. 그러나 이 정보를 유지해야 하는 경우 우리의 XML/JSON 변환기는 주석을 특수 JSON 속성(예: \"__comment\" 필드)으로 변환하여 주석을 유지하는 선택적 설정을 제공합니다. 이는 중요한 문서 또는 처리 지침을 포함하는 주석을 유지해야 하는 시나리오에 유연성을 제공합니다. 변환기 인터페이스의 고급 옵션 패널에서 이 동작을 사용자 정의할 수 있습니다."
        },
        {
          question: "변환 과정에서 XML 네임스페이스는 어떻게 처리되나요?",
          answer: "XML/JSON 변환기는 변환 과정에서 XML 네임스페이스를 처리하는 옵션을 제공합니다. 기본적으로 JSON으로 변환할 때 네임스페이스 및 접두사가 요소 이름에 포함됩니다. 예를 들어 '<ns:element xmlns:ns=\"namespace\">value</ns:element>'는 JSON으로 변환될 때 네임스페이스 접두사를 유지합니다. 변환기 옵션에서 이 동작을 사용자 정의하여 네임스페이스를 완전히 무시하거나 특정 형식으로 유지하거나 생성된 JSON 구조에서 별도의 속성으로 유지할 수 있습니다."
        }
      ]
    },
    guide: {
      title: "XML/JSON 변환기 사용 단계 안내",
      steps: [
        "도구 상단의 라디오 버튼을 사용하여 원하는 변환 방향을 선택하세요: 'XML에서 JSON으로'는 XML 마크업을 JSON 형식으로 변환하고, 'JSON에서 XML으로'는 반대 과정을 수행합니다",
        "'옵션 표시'를 클릭하여 고급 설정에 액세스하고 변환 프로세스를 사용자 정의하세요: XML에서 JSON의 경우 속성 처리 및 파싱 옵션을 구성합니다. JSON에서 XML의 경우 포맷팅 기본 설정 및 XML 선언 옵션을 설정합니다",
        "변환기 왼쪽의 입력 필드에 소스 데이터를 입력하거나 '예제 로드' 버튼을 사용하여 도구가 미리 정의된 데이터를 어떻게 처리하는지 확인하세요",
        "'변환' 버튼을 클릭하여 데이터를 처리하세요. 변환기는 입력을 변환하고 오른쪽의 출력 필드에 결과를 표시합니다",
        "변환 출력을 검토하고 특정 요구 사항에 따라 결과를 미세 조정하기 위해 변환 설정을 조정하세요",
        "출력 필드 옆의 '복사' 버튼을 클릭하여 변환된 결과를 클립보드에 복사하여 애플리케이션 또는 문서에서 사용하세요",
        "'내용 교환' 버튼을 사용하여 현재 출력을 입력으로 설정하여 반대 방향으로 변환할 수도 있습니다"
      ]
    },
    conclusion: "XML/JSON 변환기는 현대 컴퓨팅에서 이 두 가지 기본 형식 간에 데이터를 변환하는 강력한 솔루션을 제공합니다. 다른 시스템을 통합하거나 레거시 애플리케이션을 현대화하거나 클라이언트 처리를 위해 데이터를 최적화하는 경우 이 도구는 수동 변환의 복잡성과 잠재적 오류를 피하는 데 도움을 줍니다. 속성, 포맷팅 및 구조 요소를 처리하기 위한 포괄적인 옵션을 통해 형식 경계를 넘어 데이터가 무결성과 의미를 유지하도록 할 수 있습니다. XML과 JSON 간의 변환을 단순화함으로써 이 변환기는 다른 기술과 표준 간의 격차를 해소하고 더 유연하고 상호 운용 가능한 소프트웨어 시스템을 가능하게 합니다."
  }
}