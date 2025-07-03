export default {
  name: 'URL 인코딩/디코딩',
  description: 'URL 인코딩은 특수 문자를 URL에서 허용되는 형식으로 변환하는 데 사용되며, 주로 URL 매개변수 및 폼 제출 처리에 활용됩니다.',
  options: {
    operationType: '작업 유형',
    encodeMode: '인코딩 모드'
  },
  encodeOptions: {
    standard: '표준 인코딩 (encodeURI)',
    component: '컴포넌트 인코딩 (encodeURIComponent)',
    full: '전체 인코딩 (모든 문자)',
    standardDescription: '전체 URL을 인코딩하며 URL 구조 문자는 유지합니다',
    componentDescription: 'URL 매개변수에 적합하며 모든 특수 문자를 인코딩합니다',
    fullDescription: '알파벳과 숫자가 아닌 모든 문자를 인코딩하며 공백은 + 대신 %20으로 변환합니다'
  },
  actions: {
    encode: 'URL 인코딩',
    decode: 'URL 디코딩',
    clear: '초기화',
    copyResult: '결과 복사'
  },
  input: {
    textToEncode: '인코딩할 텍스트',
    textToDecode: '디코딩할 텍스트',
    encodePlaceholder: '인코딩할 URL 또는 텍스트 입력...',
    decodePlaceholder: '디코딩할 URL 또는 텍스트 입력...'
  },
  output: {
    encodeResult: '인코딩 결과',
    decodeResult: '디코딩 결과'
  },
  messages: {
    copied: '(복사 완료',
    error: '오류: {message}',
    decodeError: '디코딩 불가: "{text}"',
    copyFailed: '복사 실패, 수동으로 복사해 주세요'
  },
  referenceTable: {
    title: '일반적인 URL 문자 인코딩 참조 테이블',
    showTable: '테이블 보기',
    hideTable: '테이블 숨기기',
    character: '문자',
    encoded: 'URL 인코딩',
    description: '설명',
    descriptions: {
      space: '공백',
      exclamation: '느낌표',
      doubleQuote: '큰따옴표',
      hash: '해시 기호',
      dollar: '달러 기호',
      percent: '퍼센트 기호',
      ampersand: '앰퍼샌드',
      singleQuote: '작은따옴표',
      leftParenthesis: '왼쪽 괄호',
      rightParenthesis: '오른쪽 괄호',
      asterisk: '별표',
      plus: '더하기 기호',
      comma: '쉼표',
      slash: '슬래시',
      colon: '콜론',
      semicolon: '세미콜론',
      lessThan: '보다 작음 기호',
      equals: '등호',
      greaterThan: '보다 큼 기호',
      questionMark: '물음표',
      at: '앳 기호',
      leftBracket: '왼쪽 대괄호',
      backslash: '역슬래시',
      rightBracket: '오른쪽 대괄호',
      caret: '캐럿',
      backtick: '백틱',
      leftBrace: '왼쪽 중괄호',
      pipe: '파이프',
      rightBrace: '오른쪽 중괄호',
      tilde: '물결표',
      chinese: 'UTF-8 인코딩된 한자'
    }
  },
  article: {
    title: 'URL 인코딩/디코딩: 완벽한 가이드',
    introduction: {
      title: 'URL 인코딩과 디코딩이란 무엇인가요?',
      p1: '<strong>URL 인코딩/디코딩</strong>은 웹 개발에서 중요한 과정으로, 특수 문자를 인터넷을 통해 안전하게 전송할 수 있는 형식으로 변환합니다. URL에 정보를 입력할 때 공백, 앰퍼샌드(&), 슬래시 등의 특정 문자는 URL 구조에서 특별한 의미를 가집니다. URL 인코딩은 이러한 특수 문자를 퍼센트 기호(%)와 두 개의 16진수 숫자로 대체합니다.',
      p2: '우리의 <strong>URL 인코딩/디코딩</strong> 도구는 세 가지 유형의 인코딩을 처리할 수 있는 직관적인 인터페이스를 제공합니다: 표준 인코딩(encodeURI), 컴포넌트 인코딩(encodeURIComponent) 및 모든 문자에 대한 전체 인코딩. 이러한 다기능성은 <strong>JavaScript URL 인코딩/디코딩</strong> 함수, <strong>PHP URL 인코딩/디코딩</strong> 메서드 또는 기타 프로그래밍 언어를 사용하는 개발자가 쉽게 인코딩 및 디코딩 작업을 테스트하고 검증할 수 있도록 합니다.',
      p3: '폼 제출, API 요청 또는 복잡한 URL 매개변수를 처리할 때 <strong>URL 인코딩/디코딩</strong> 기술을 이해하고 올바르게 구현하는 것은 데이터 손상과 보안 취약점을 방지하는 데 중요합니다. 이 포괄적인 가이드는 다양한 프로그래밍 언어와 프레임워크에서 URL 인코딩과 디코딩의 모든 측면을 탐구합니다.'
    },
    
    applications: {
      title: '실제 적용 시나리오',
      scenario1: {
        title: '웹 개발 및 폼 처리',
        content: '웹 개발자는 폼을 처리할 때 <strong>JavaScript URL 인코딩/디코딩</strong> 또는 <strong>JS URL 인코딩/디코딩</strong> 함수를 자주 사용하여 데이터가 HTTP 요청에 맞게 올바르게 포맷되도록 합니다. 사용자가 특수 문자, 공백 또는 비ASCII 문자를 포함한 폼을 제출할 때, 이러한 문자는 서버로 전송되기 전에 인코딩되어야 합니다. JavaScript의 <code>encodeURIComponent()</code> 함수는 일반적으로 이 목적으로 사용되며, <code>decodeURIComponent()</code>는 수신 측에서 데이터를 디코딩하는 데 사용됩니다.'
      },
      scenario2: {
        title: 'API 개발 및 통합',
        content: 'API를 개발하거나 사용할 때 개발자는 종종 <strong>Python URL 인코딩/디코딩</strong>, <strong>Java URL 인코딩/디코딩</strong> 또는 <strong>Golang URL 인코딩/디코딩</strong>과 같은 다양한 언어에서 URL 인코딩/디코딩 함수를 사용해야 합니다. 쿼리 매개변수와 경로 세그먼트는 요청이 올바르게 형성되도록 특수 문자가 인코딩되어야 할 수 있습니다. 예를 들어, <strong>Python URL 인코딩/디코딩</strong> 작업에서는 일반적으로 <code>urllib.parse</code> 모듈을 사용하며, Java 개발자는 <code>URLEncoder</code> 및 <code>URLDecoder</code> 클래스를 사용할 수 있습니다.'
      },
      scenario3: {
        title: '데이터베이스 상호 작용',
        content: '데이터베이스 개발자는 URL을 저장하거나 검색할 때 때때로 <strong>SQL Server에서 URL 인코딩/디코딩</strong> 또는 다른 데이터베이스 시스템에서 유사한 작업을 수행해야 합니다. URL의 특수 문자가 SQL 쿼리를 방해할 수 있습니다. 마찬가지로, <strong>Laravel에서 URL 인코딩/디코딩</strong>과 같은 프레임워크는 데이터베이스 작업에서 URL 인코딩과 디코딩을 처리하기 위한 유틸리티를 제공하여 애플리케이션 수명 주기 전반에 걸쳐 데이터 무결성을 보장합니다.'
      },
      scenario4: {
        title: '보안 및 인증',
        content: '보안 전문가는 <strong>URL 인코딩/디코딩</strong> 기술을 사용하여 웹 애플리케이션의 취약점을 분석하고 테스트합니다. 올바른 URL 인코딩은 주입 공격과 크로스 사이트 스크립팅(XSS) 공격을 방지하는 데 도움이 됩니다. 인증 시스템을 구현할 때 개발자는 URL에서 토큰이나 기타 민감한 정보를 인코딩해야 할 수 있습니다. <strong>Base64 URL 인코딩/디코딩</strong>과 같은 라이브러리는 특히 JWT(JSON Web Tokens) 구현에서 이러한 보안 관련 인코딩 작업에 자주 사용됩니다.'
      },
      scenario5: {
        title: '크로스 언어 개발 환경',
        content: '다중 언어 환경에서 개발자는 프로그래밍 생태계 전반에 걸쳐 URL 인코딩이 일관되게 사용되도록 해야 할 수 있습니다. <strong>C# URL 인코딩/디코딩</strong>과 <strong>TypeScript URL 인코딩/디코딩</strong> 또는 <strong>PHP URL 인코딩/디코딩</strong> 구현의 동작을 테스트하는 것은 상호 운용성을 유지하는 데 중요할 수 있습니다. 우리의 온라인 도구는 추가 테스트 코드를 작성할 필요 없이 다양한 언어 구현에서 인코딩 동작을 검증할 수 있는 중립적인 참조 지점 역할을 합니다.'
      }
    },
    
    guide: {
      title: 'URL 인코딩/디코딩 도구 사용 방법',
      step1: {
        title: '1단계: 작업 유형 선택',
        content: '먼저 드롭다운 메뉴에서 원하는 작업을 선택하세요. "URL 인코딩"은 특수 문자를 URL 안전 형식으로 변환하고, "URL 디코딩"은 인코딩된 문자를 원래 형식으로 변환합니다. 이러한 유연성을 통해 <strong>JavaScript URL 인코딩/디코딩</strong>, <strong>PHP URL 인코딩/디코딩</strong> 또는 <strong>Python URL 인코딩/디코딩</strong>에서 구현할 수 있는 기능을 테스트할 수 있습니다.'
      },
      step2: {  
        title: '2단계: 인코딩 모드 선택',
        content: '"URL 인코딩"을 선택할 때 세 가지 다른 인코딩 모드 중에서 선택하여 요구 사항에 맞게 조정할 수 있습니다:<ul><li><strong>표준 인코딩(encodeURI)</strong>: 전체 URL을 인코딩하며 슬래시, 물음표 등 URL 구조 문자를 유지합니다. 이는 <strong>JavaScript URL 인코딩/디코딩</strong>에서 <code>encodeURI()</code> 함수를 사용하는 것과 동일합니다.</li><li><strong>컴포넌트 인코딩(encodeURIComponent)</strong>: 슬래시, 물음표 등 URL에서 특별한 의미를 가진 문자를 포함한 모든 특수 문자를 인코딩합니다. 이는 <strong>JS URL 인코딩/디코딩</strong>에서 <code>encodeURIComponent()</code> 함수를 사용하는 것과 동일합니다.</li><li><strong>전체 인코딩</strong>: 알파벳과 숫자가 아닌 모든 문자를 인코딩하며, <strong>Java URL 인코딩/디코딩</strong>에서 구현된 사용자 정의 함수와 유사한 가장 포괄적인 인코딩 방법을 제공합니다.</li></ul>'
      },
      step3: {
        title: '3단계: 텍스트 입력',
        content: '다음으로, 인코딩하거나 디코딩하려는 텍스트를 입력 필드에 입력하세요. 이는 전체 URL, URL 구성 요소 또는 특수 문자가 포함된 문자열일 수 있습니다. <strong>PHP URL 인코딩/디코딩</strong> 또는 <strong>Python URL 인코딩/디코딩</strong>과 같은 동등한 기능을 테스트하는 경우 여기에 동일한 문자열을 입력하여 비교할 수 있습니다.'
      },
      step4: {
        title: '4단계: 결과 처리 및 사용',
        content: '"URL 인코딩" 또는 "URL 디코딩" 버튼을 클릭하여 입력을 처리하세요. 결과는 아래 출력 필드에 표시됩니다. 복사 버튼을 사용하여 결과를 애플리케이션에 복사할 수 있으며, <strong>C# URL 인코딩/디코딩</strong>, <strong>TypeScript URL 인코딩/디코딩</strong> 또는 <strong>Laravel에서 URL 인코딩/디코딩</strong>을 구현하는 경우에도 사용할 수 있습니다. 도구 하단의 참조 테이블은 참조용으로 일반적인 URL 인코딩 문자를 보여줍니다.'
      }
    },
    
    faq: {
      title: '자주 묻는 질문',
      q1: 'encodeURI와 encodeURIComponent의 차이점은 무엇인가요?',
      a1: '<strong>JavaScript URL 인코딩/디코딩</strong> 작업에서 이 두 함수는 다른 용도로 사용됩니다. <code>encodeURI()</code>는 전체 URL을 인코딩하도록 설계되었으며 URL 구조 문자(<code>/</code>, <code>?</code>, <code>:</code>, <code>=</code> 등)를 유지합니다. 이는 전체 URL을 인코딩하고 구조를 유지해야 하는 경우에 유용합니다.<br><br>반면 <code>encodeURIComponent()</code>는 슬래시, 물음표 등 URL에서 특별한 의미를 가진 문자를 포함한 모든 특수 문자를 인코딩합니다. 이는 쿼리 매개변수와 같은 URL 구성 요소를 인코딩하는 데 적합합니다. 예를 들어, 사용자 입력을 포함하는 검색 URL을 구성할 때 검색어를 인코딩하여 특수 문자가 URL 구조를 파괴하지 않도록 해야 합니다. 대부분의 <strong>JS URL 인코딩/디코딩</strong> 구현은 폼 제출 및 API 호출에 <code>encodeURIComponent()</code>를 사용할 것입니다.',

      q2: 'PHP에서 URL 인코딩/디코딩을 어떻게 구현하나요?',
      a2: '<strong>PHP URL 인코딩/디코딩</strong> 작업을 위해 PHP는 내장 함수인 <code>urlencode()</code>와 <code>urldecode()</code>를 제공합니다. <code>urlencode()</code> 함수는 JavaScript의 <code>encodeURIComponent()</code>와 유사하게 작동하며 공백을 + 기호로 포함한 모든 특수 문자를 인코딩합니다. 전체 URL을 인코딩하기 위해 PHP는 공백을 + 대신 %20으로 인코딩하는 RFC 3986 표준을 따르는 <code>rawurlencode()</code>를 제공합니다.',

      q3: 'Python에서 URL 인코딩/디코딩을 어떻게 구현하나요?',
      a3: '<strong>Python URL 인코딩/디코딩</strong>에서는 <code>urllib.parse</code> 모듈의 <code>quote()</code>와 <code>unquote()</code> 함수를 사용할 수 있습니다. <code>quote()</code> 함수는 JavaScript의 <code>encodeURIComponent()</code>와 유사하며 공백을 %20으로 포함한 모든 특수 문자를 인코딩합니다. <code>unquote()</code> 함수는 URL 인코딩된 문자열을 디코딩하는 데 사용됩니다.',

      q4: 'URL 인코딩 대신 Base64 인코딩을 사용할 수 있나요?',
      a4: '<strong>Base64 URL 인코딩/디코딩</strong> 기술이 때때로 URL에서 데이터를 인코딩하는 데 사용되지만(특히 JWT 구현에서), Base64 인코딩은 URL 인코딩의 대체재가 아닙니다. Base64 인코딩은 바이너리 데이터를 ASCII 문자로 변환하지만 +, /, = 등 URL에서 특별한 의미를 가진 문자를 생성할 수 있습니다.',

      q5: 'SQL 쿼리에서 URL 인코딩을 어떻게 처리하나요?',
      a5: 'SQL Server에서 URL 인코딩/디코딩 작업을 수행하는 것은 일반적으로 내장 함수를 사용하거나 사용자 정의 함수를 생성하는 것을 포함합니다. SQL Server에는 URL 인코딩 함수가 내장되어 있지 않지만 다음을 수행할 수 있습니다:<br><br>1. SQL 쿼리를 구성하기 전에 애플리케이션 코드에서 인코딩/디코딩 작업을 수행합니다.<br>2. SQL에서 사용자 정의 함수를 생성합니다. 보안상의 이유로 일반적으로 .NET 애플리케이션의 경우 적절한 <strong>C# URL 인코딩/디코딩</strong> 메서드 또는 기타 언어별 구현을 사용하여 SQL에서 직접 URL 인코딩/디코딩을 처리하는 것보다 애플리케이션 코드에서 처리하는 것이 좋습니다.'
    },
    
    relatedTools: {
      title: '관련 도구',
      tool1: '<a href="https://meyerweb.com/eric/tools/dencoder/" target="_blank" rel="noopener noreferrer">URL 디코더/인코더</a>',
      tool2: '<a href="https://www.urldecoder.org/" target="_blank" rel="noopener noreferrer">URL 디코드 및 인코드 - 온라인</a>',
      tool3: '<a href="https://www.url-encode-decode.com/" target="_blank" rel="noopener noreferrer">URL 인코드 디코드 - URL 퍼센트 인코딩 및 디코딩</a>'
    },
    
    resources: {
      title: '외부 리소스',
      resource1: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" target="_blank" rel="noopener noreferrer">MDN 웹 문서: encodeURIComponent()</a> - JavaScript URL 인코딩 함수에 대한 상세 문서',
      resource2: '<a href="https://www.php.net/manual/en/function.urlencode.php" target="_blank" rel="noopener noreferrer">PHP 매뉴얼: urlencode()</a> - PHP URL 인코딩 함수에 대한 공식 문서',
      resource3: '<a href="https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1" target="_blank" rel="noopener noreferrer">W3C 폼 제출 사양</a> - 브라우저가 폼 데이터를 인코딩하는 방법에 대한 공식 사양'
    },
    
    conclusion: {
      title: '결론',
      content: '우리의 <strong>URL 인코딩/디코딩</strong> 도구는 모든 URL 인코딩 및 디코딩 요구 사항에 대한 다기능 솔루션을 제공합니다. <strong>JavaScript URL 인코딩/디코딩</strong>, <strong>PHP URL 인코딩/디코딩</strong> 또는 <strong>Python URL 인코딩/디코딩</strong>을 테스트해야 하는 경우에도 우리의 도구가 필요를 충족시켜 줄 것입니다.'
    }
  }
}