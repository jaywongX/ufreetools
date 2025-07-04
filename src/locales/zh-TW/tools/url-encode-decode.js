export default {
  name: 'URL編碼解碼',
  description: 'URL編碼用於將特殊字符轉換為URL可接受的格式，常用於處理URL參數和表單提交。',
  options: {
    operationType: '操作類型',
    encodeMode: '編碼模式'
  },
  encodeOptions: {
    standard: '標準編碼 (encodeURI)',
    component: '組件編碼 (encodeURIComponent)',
    full: '完全編碼 (所有字符)',
    standardDescription: '對整個URL進行編碼，保留URL結構字符',
    componentDescription: '適用於URL參數，編碼包括所有特殊字符',
    fullDescription: '對所有非字母數字字符進行編碼，包括空格（轉為%20而非+）'
  },
  actions: {
    encode: 'URL編碼',
    decode: 'URL解碼',
    clear: '清空',
    copyResult: '複製結果'
  },
  input: {
    textToEncode: '需要編碼的文本',
    textToDecode: '需要解碼的文本',
    encodePlaceholder: '輸入要編碼的URL或文本...',
    decodePlaceholder: '輸入要解碼的URL或文本...'
  },
  output: {
    encodeResult: '編碼結果',
    decodeResult: '解碼結果'
  },
  messages: {
    copied: '(已複製',
    error: '錯誤: {message}',
    decodeError: '無法解碼: "{text}"',
    copyFailed: '複製失敗，請手動複製'
  },
  referenceTable: {
    title: '常見URL字符編碼參考表',
    showTable: '顯示表格',
    hideTable: '隱藏表格',
    character: '字符',
    encoded: 'URL編碼',
    description: '說明',
    descriptions: {
      space: '空格',
      exclamation: '驚嘆號',
      doubleQuote: '雙引號',
      hash: '井號',
      dollar: '美元符號',
      percent: '百分號',
      ampersand: '和號',
      singleQuote: '單引號',
      leftParenthesis: '左括號',
      rightParenthesis: '右括號',
      asterisk: '星號',
      plus: '加號',
      comma: '逗號',
      slash: '斜線',
      colon: '冒號',
      semicolon: '分號',
      lessThan: '小於號',
      equals: '等號',
      greaterThan: '大於號',
      questionMark: '問號',
      at: '艾特符號',
      leftBracket: '左方括號',
      backslash: '反斜線',
      rightBracket: '右方括號',
      caret: '脫字符',
      backtick: '反引號',
      leftBrace: '左花括號',
      pipe: '豎線',
      rightBrace: '右花括號',
      tilde: '波浪號',
      chinese: 'UTF-8編碼的中文'
    }
  },
  article: {
    title: 'URL編碼解碼：完整的URL編碼和解碼指南',
    introduction: {
      title: '什麼是URL編碼和解碼？',
      p1: '<strong>URL編碼解碼</strong>是Web開發中的一個重要過程，它將特殊字符轉換為可以安全地通過互聯網傳輸的格式。當您在URL中輸入信息時，某些字符（如空格、&符號和斜線）在URL結構中具有特殊含義。URL編碼會將這些特殊字符替換為百分號(%)後跟兩個十六進制數字。',
      p2: '我們的<strong>URL編碼解碼</strong>工具提供了一個直觀的界面，可以處理三種類型的編碼：標準編碼(encodeURI)、組件編碼(encodeURIComponent)和所有字符的完全編碼。這種多功能性使得使用<strong>JavaScript URL編碼解碼</strong>函數、<strong>PHP URL編碼解碼</strong>方法或任何其他編程語言的開發人員都能輕鬆測試和驗證他們的編碼和解碼操作。',
      p3: '無論您是處理表單提交、API請求還是複雜的URL參數，理解並正確實現<strong>URL編碼解碼</strong>技術對於防止數據損壞和安全漏洞都至關重要。本綜合指南探討了不同編程語言和框架中URL編碼和解碼的各個方面。'
    },
    
    applications: {
      title: '實際應用場景',
      scenario1: {
        title: 'Web開發和表單處理',
        content: 'Web開發人員在處理表單時經常使用<strong>JavaScript URL編碼解碼</strong>或<strong>JS URL編碼解碼</strong>函數，以確保數據為HTTP請求正確格式化。當用戶提交包含特殊字符、空格或非ASCII字符的表單時，這些字符必須在發送到服務器之前進行編碼。JavaScript中的<code>encodeURIComponent()</code>函數通常用於此目的，而<code>decodeURIComponent()</code>則在接收端解碼數據。'
      },
      scenario2: {
        title: 'API開發和集成',
        content: '在開發或使用API時，開發人員經常需要在各種語言中使用<strong>URL編碼解碼</strong>函數，如<strong>Python URL編碼解碼</strong>、<strong>Java URL編碼解碼</strong>或<strong>Golang URL編碼解碼</strong>。查詢參數和路徑段可能包含需要編碼的特殊字符，以確保正確形成請求。例如，在<strong>Python URL編碼解碼</strong>操作中通常使用<code>urllib.parse</code>模塊，而Java開發人員可能使用<code>URLEncoder</code>和<code>URLDecoder</code>類。'
      },
      scenario3: {
        title: '數據庫交互',
        content: '數據庫開發人員在存儲或檢索URL時有時需要執行<strong>SQL Server中的URL編碼解碼</strong>或其他數據庫系統中的類似操作。如果不正確編碼，URL中的特殊字符可能會干擾SQL查詢。類似地，像<strong>Laravel中的URL編碼解碼</strong>這樣的框架提供了在數據庫操作中處理URL編碼和解碼的實用工具，確保整個應用程序生命周期中的數據完整性。'
      },
      scenario4: {
        title: '安全和認證',
        content: '安全專業人員使用<strong>URL編碼解碼</strong>技術來分析和測試Web應用程序的漏洞。正確的URL編碼有助於防止注入攻擊和跨站腳本攻擊(XSS)。在實現認證系統時，開發人員可能需要在URL中編碼令牌或其他敏感信息。<strong>Base64 URL編碼解碼</strong>等庫通常用於這些與安全相關的編碼任務，特別是在JWT(JSON Web Tokens)實現中。'
      },
      scenario5: {
        title: '跨語言開發環境',
        content: '在多語言環境中，開發人員可能需要確保在整個編程生態系統中一致地使用URL編碼。測試<strong>C# URL編碼解碼</strong>與<strong>TypeScript URL編碼解碼</strong>或<strong>PHP URL編碼解碼</strong>實現的行為可能對於維護互操作性至關重要。我們的在線工具充當中立的參考點，允許開發人員驗證不同語言實現中的編碼行為，而無需編寫額外的測試代碼。'
      }
    },
    
    guide: {
      title: '如何使用URL編碼解碼工具',
      step1: {
        title: '第一步：選擇您的操作類型',
        content: '首先從下拉菜單中選擇您想要的操作。選擇"URL編碼"將特殊字符轉換為URL安全的格式，或選擇"URL解碼"將編碼字符轉換回其原始形式。這種靈活性使您可以測試您可能在<strong>JavaScript URL編碼解碼</strong>、<strong>PHP URL編碼解碼</strong>或<strong>Python URL編碼解碼</strong>中實現的功能。'
      },
      step2: {  
        title: '第二步：選擇編碼模式',
        content: '當您選擇"URL編碼"時，從三個不同的編碼模式中進行選擇，以滿足您的需求：<ul><li><strong>標準編碼(encodeURI)</strong>：編碼整個URL，同時保留URL結構字符，如斜線、問號等。這相當於在<strong>JavaScript URL編碼解碼</strong>中使用<code>encodeURI()</code>函數。</li><li><strong>組件編碼(encodeURIComponent)</strong>：編碼所有特殊字符，包括URL中具有特殊含義的字符，如斜線、問號等。這相當於在<strong>JS URL編碼解碼</strong>中使用<code>encodeURIComponent()</code>函數。</li><li><strong>完全編碼</strong>：編碼所有非字母數字字符，提供最全面的編碼方法，類似於在<strong>Java URL編碼解碼</strong>中實現的自定義函數。</li></ul>'
      },
      step3: {
        title: '第三步：輸入您的文本',
        content: '接下來，在輸入字段中輸入您想要編碼或解碼的文本。這可以是完整的URL、URL組件或任何包含特殊字符的字符串。如果您正在測試等效功能，如<strong>PHP URL編碼解碼</strong>或<strong>Python URL編碼解碼</strong>，您可以在這裡輸入相同的字符串以進行比較。'
      },
      step4: {
        title: '第四步：處理和使用結果',
        content: '點擊"URL編碼"或"URL解碼"按鈕處理您的輸入。結果將顯示在下面的輸出字段中。您可以使用複製按鈕將結果複製到您的應用程序中，無論您是在使用<strong>C# URL編碼解碼</strong>、<strong>TypeScript URL編碼解碼</strong>還是實現<strong>URL編碼解碼在Laravel中</strong>。工具底部的參考表顯示了常見的URL編碼字符，供您參考。'
      }
    },
    
    faq: {
      title: '常見問題',
      q1: '什麼是encodeURI和encodeURIComponent之間的區別？',
      a1: '在<strong>JavaScript URL編碼解碼</strong>操作中，這兩個函數具有不同的用途。<code>encodeURI()</code>設計用於編碼整個URL並保留URL結構字符（如<code>/</code>、<code>?</code>、<code>:</code>、<code>=</code>）。這對於需要編碼整個URL並保持其結構的情況非常有用。<br><br><code>encodeURIComponent()</code>，另一方面，編碼所有特殊字符，包括URL中具有特殊含義的字符，如斜線、問號等。這使得它非常適合編碼URL組件，如查詢參數。例如，如果您正在構建一個包含用戶輸入的搜索URL，您應該使用<code>encodeURIComponent()</code>對搜索詞進行編碼，以確保特殊字符不會破壞URL結構。大多數<strong>JS URL編碼解碼</strong>實現將使用<code>encodeURIComponent()</code>進行表單提交和API調用。',

      q2: '如何實現URL編碼解碼在PHP中？',
      a2: '對於<strong>PHP URL編碼解碼</strong>操作，PHP提供了內置函數：<code>urlencode()</code>和<code>urldecode()</code>。<code>urlencode()</code>函數的工作方式類似於JavaScript中的<code>encodeURIComponent()</code>，編碼所有特殊字符，包括空格（作為+號）。對於編碼整個URL，PHP提供了<code>rawurlencode()</code>，它遵循RFC 3986標準，將空格編碼為%20而不是+。',

      q3: '如何實現URL編碼解碼在Python中？',
      a3: '在<strong>Python URL編碼解碼</strong>中，您可以使用<code>urllib.parse</code>模塊中的<code>quote()</code>和<code>unquote()</code>函數。<code>quote()</code>函數類似於JavaScript中的<code>encodeURIComponent()</code>，編碼所有特殊字符，包括空格（作為%20）。<code>unquote()</code>函數用於解碼URL編碼的字符串。' ,

      q4: '我可以使用Base64編碼代替URL編碼嗎？',
      a4: '雖然<strong>Base64 URL編碼解碼</strong>技術有時用於在URL中編碼數據（特別是在JWT實現中），但Base64編碼不是URL編碼的替代品。Base64編碼將二進制數據轉換為ASCII字符，但可能會生成具有特殊含義的URL字符，如+、/和=。',

      q5: '如何處理URL編碼在SQL查詢中？',
      a5: '在SQL Server中執行URL編碼解碼操作通常涉及使用內置函數或創建自定義函數。SQL Server沒有內置的URL編碼函數，但您可以：<br><br>1. 在應用程序代碼中執行編碼/解碼操作，在構造SQL查詢之前。<br>2. 在SQL中創建用戶定義的函數，為安全起見，通常最好在應用程序代碼中使用適當的<strong>C# URL編碼解碼</strong>方法（用於.NET應用程序）或其他語言特定的實現，而不是在SQL中直接處理URL編碼/解碼。'
    },
    
    relatedTools: {
      title: '相關工具',
      tool1: '<a href="https://meyerweb.com/eric/tools/dencoder/" target="_blank" rel="noopener noreferrer">URL Decoder/Encoder</a>',
      tool2: '<a href="https://www.urldecoder.org/" target="_blank" rel="noopener noreferrer">URL Decode and Encode - Online</a>',
      tool3: '<a href="https://www.url-encode-decode.com/" target="_blank" rel="noopener noreferrer">URL Encode Decode - URL Percent Encoding and Decoding.</a>'
    },
    
    resources: {
      title: '外部資源',
      resource1: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent" target="_blank" rel="noopener noreferrer">MDN Web Docs: encodeURIComponent()</a> - 詳細文檔介紹JavaScript的URL編碼函數',
      resource2: '<a href="https://www.php.net/manual/en/function.urlencode.php" target="_blank" rel="noopener noreferrer">PHP Manual: urlencode()</a> - 官方文檔介紹PHP的URL編碼函數',
      resource3: '<a href="https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1" target="_blank" rel="noopener noreferrer">W3C Form Submission Specification</a> - 官方規範介紹瀏覽器如何編碼表單數據'
    },
    
    conclusion: {
      title: '結論',
      content: '我們的<strong>URL編碼解碼</strong>工具為所有URL編碼和解碼需求提供了一個多功能解決方案。無論您需要測試<strong>JavaScript URL編碼解碼</strong>、<strong>PHP URL編碼解碼</strong>或<strong>Python URL編碼解碼</strong>，我們的工具都能滿足您的需求。'
    }
  }
}