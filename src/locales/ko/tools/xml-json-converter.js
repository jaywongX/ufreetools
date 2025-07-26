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
  }
};