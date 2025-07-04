export default {
  name: 'URL參數解析器',
  description: '解析、分析和操作URL參數和查詢字符串',
  input: {
    title: 'URL輸入',
    url: 'URL',
    urlPlaceholder: 'https://example.com/path?param1=value1&param2=value2 或 param1=value1&param2=value2',
    parse: '使用當前頁面URL',
    clear: '清空',
    examples: '載入範例',
    parseFromClipboard: '從剪貼簿貼上',
    history: '歷史記錄'
  },
  params: {
    title: '參數列表',
    name: '參數名稱',
    value: '參數值',
    decoded: '解碼值',
    type: '類型',
    actions: '操作',
    add: '新增參數',
    remove: '移除',
    edit: '編輯',
    copy: '複製為文字',
    sort: '排序方式',
    encode: '編碼',
    decode: '解碼',
    noParams: '未檢測到任何URL參數',
    noMatchingParams: '沒有找到匹配的參數',
    modified: '已修改',
    original: '原始',
    search: '搜尋參數...'
  },
  results: {
    title: 'URL組成部分',
    parsed: 'URL組成部分',
    protocol: '協定',
    domain: '主機名稱',
    port: '埠號',
    path: '路徑',
    queryString: '查詢字符串',
    fragment: '錨點（哈希）',
    constructed: '構造的URL',
    copyUrl: '複製URL',
    openUrl: '開啟URL',
    shareUrl: '分享URL',
    shortenUrl: '縮短URL',
    encoded: '編碼的URL',
    decoded: '解碼的URL'
  },
  tools: {
    title: '工具',
    buildQuery: '構建查詢',
    compareUrls: '比較URL',
    validateUrl: '驗證URL',
    trackingRemoval: '移除追蹤參數',
    convertToCode: '轉換為程式碼',
    diffTool: '參數差異',
    baseConversion: '進制轉換',
    jsonToQuery: 'JSON轉查詢字符串',
    queryToJson: '查詢字符串轉JSON'
  },
  visualization: {
    title: '視覺化',
    tree: '樹狀視圖',
    table: '參數表格',
    json: 'JSON格式',
    raw: '原始視圖',
    hierarchical: '層次視圖',
    nested: '嵌套參數',
    auto: '自動檢測',
    fullUrl: '完整URL',
    queryOnly: '僅查詢字符串',
    hideJson: '收起JSON',
    viewAsJson: '查看為JSON'
  },
  types: {
    string: '字串',
    number: '數字',
    boolean: '布林值',
    array: '陣列',
    object: '物件',
    date: '日期',
    email: '電子郵件',
    ip: 'IP位址',
    color: '顏色',
    unknown: '未知'
  },
  settings: {
    title: '設定',
    detectTypes: '解析模式',
    decodeAutomatically: 'URL解碼',
    decodeAuto: '自動解碼',
    decodeOnce: '解碼一次',
    decodeTwice: '解碼兩次',
    noDecode: '不解碼',
    encodeAutomatically: '編碼特殊字符',
    preserveCase: '保留參數大小寫',
    sortAlphabetically: '按字母順序排序參數',
    sortDefault: '預設順序',
    sortNameAsc: '參數名升序',
    sortNameDesc: '參數名降序',
    sortValueAsc: '參數值升序',
    sortValueDesc: '參數值降序',
    arrayFormat: '陣列格式',
    objectFormat: '物件格式',
    emptyValues: '空值',
    defaultProtocol: '預設協定'
  },
  codes: {
    title: '匯出選項',
    javascript: 'JavaScript (URLSearchParams)',
    python: 'Python',
    php: 'PHP',
    ruby: 'Ruby',
    java: 'Java',
    csharp: 'C#',
    go: 'Go',
    copyCode: '複製',
    copyJson: '複製JSON',
    jsComment1: '建立URLSearchParams物件',
    jsComment2: '取得查詢字符串',
    jsComment3: '添加到URL',
    phpComment1: '參數陣列',
    phpComment2: '構建查詢字符串',
    phpComment3: '完整URL',
    pythonComment1: '使用 urllib.parse',
    pythonComment2: '參數字典',
    pythonComment3: '構建查詢字符串',
    pythonComment4: '完整URL'
  },
  messages: {
    parsed: 'URL解析成功',
    noUrl: '請輸入URL',
    invalidUrl: '無效的URL或查詢字符串',
    copied: '已複製到剪貼簿',
    paramAdded: '參數已新增',
    paramRemoved: '參數已移除',
    trackingRemoved: '追蹤參數已移除',
    urlOpened: 'URL已在新標籤頁中開啟',
    urlShortened: 'URL已縮短',
    error: '錯誤：{message}',
    importSuccess: 'URL匯入成功',
    exportSuccess: '資料匯出成功',
    clipboardError: '無法從剪貼簿讀取內容。請確保您已授予剪貼簿權限，或手動貼上內容。',
    copyFailed: '複製失敗，請手動複製'
  },
  article: {
    title: "URL參數解析器：查詢字符串分析完全指南",
    features: {
      title: "了解URL參數和查詢字符串",
      description: "<strong>URL參數解析器</strong>是一款綜合性工具，專為解碼、分析和操作URL查詢字符串和參數而設計。查詢字符串是URL中問號（?）後面的部分，包含名值對形式的資料，通常用於在網頁之間傳遞資訊或在API請求中使用。<br><br>我們的<strong>查詢字符串分析器</strong>將複雜的URL分解為組成部分，自動檢測和解析參數，並提供多種視覺化格式。它同時支援標準URL解析和專門的查詢字符串分析，具有參數提取、值檢查和流行程式語言的程式碼生成等功能。",
      useCases: {
        title: "URL參數分析的實際應用",
        items: [
          "<strong>網路分析和UTM追蹤</strong>：數位行銷人員經常使用包含多個UTM參數（如utm_source、utm_medium、utm_campaign）的URL。我們的<strong>URL查詢解碼器</strong>使分析這些追蹤參數變得容易，驗證它們是否正確配置，並解決行銷活動中的追蹤問題。",
          
          "<strong>API除錯和開發</strong>：當使用帶有查詢參數的REST API時，開發人員可以使用此工具檢查請求URL，驗證參數格式，並確保特殊字符的正確編碼。<strong>URL參數提取器</strong>有助於隔離可能導致錯誤或意外行為的特定值。",
          
          "<strong>SEO分析和URL結構優化</strong>：搜尋引擎優化專業人員可以檢查URL結構，確保它們遵循最佳實踐。通過解析查詢字符串，他們可以識別潛在的參數重複問題、過多的參數或可能阻止搜尋引擎正確索引的值。",
          
          "<strong>電子商務過濾和搜尋分析</strong>：線上購物網站通常使用複雜的查詢字符串來表示產品過濾器、排序選項和搜尋條件。<strong>查詢參數解析器</strong>幫助開發人員和分析師了解這些參數如何相互作用並影響產品列表。",
          
          "<strong>Web應用程式測試</strong>：QA工程師可以使用此工具從測試場景中提取參數，修改值以建立邊緣情況，並生成新的URL，用於對依賴查詢字符串參數的Web應用程式進行系統測試。",
          
          "<strong>教育目的</strong>：學習URL結構和HTTP通訊的學生和開發人員可以使用視覺化和程式碼範例，更好地理解參數在不同程式上下文中如何格式化、編碼和使用。"
        ]
      }
    },
    faq: {
      title: "關於URL參數的常見問題",
      items: [
        {
          question: "URL參數和查詢字符串有什麼區別？",
          answer: "雖然這兩個術語經常互換使用，但它們有細微的差別：<br><br><strong>查詢字符串</strong>：URL中問號(?)後面包含所有參數的整個部分。例如，在<code>https://example.com/search?q=coffee&page=2</code>中，查詢字符串是<code>q=coffee&page=2</code>。<br><br><strong>URL參數</strong>：查詢字符串內的各個名值對。在上面的例子中，有兩個URL參數：<code>q=coffee</code>和<code>page=2</code>。<br><br>我們的<strong>URL參數解析器</strong>既分析完整的查詢字符串，又將其分解為各個參數，讓您同時看到大局和細節。"
        },
        {
          question: "為什麼有些URL參數會出現編碼的%20或+符號？",
          answer: "URL編碼（也稱為百分比編碼）是必要的，因為URL只能包含某些ASCII字符。特殊字符、空格和非ASCII字符必須進行編碼才能安全地包含在URL中。<br><br>常見的URL編碼範例：<br>• 空格變成<code>%20</code>或<code>+</code><br>• 問號變成<code>%3F</code><br>• 與號變成<code>%26</code><br>• 等號變成<code>%3D</code><br><br>我們的<strong>URL解碼器</strong>自動處理這種編碼，顯示原始和解碼的值，以便您了解實際傳輸的內容。當參數包含特殊字符（如空格、表情符號或國際字符）時，URL編碼可防止它們破壞URL結構。"
        },
        {
          question: "我可以分析查詢字符串中的複雜嵌套參數或JSON嗎？",
          answer: "是的，我們的<strong>URL查詢解析器</strong>處理高級參數格式：<br><br>1. <strong>陣列形式的參數</strong>，如<code>colors[]=red&colors[]=blue</code>或<code>colors=red,blue</code><br><br>2. <strong>嵌套物件表示法</strong>，如<code>filter[price][min]=10&filter[price][max]=50</code><br><br>3. <strong>參數中的JSON編碼值</strong>，如<code>data=&#123;&quot;name&quot;:&quot;John&quot;,&quot;age&quot;:30&#125;</code><br><br>該工具會自動檢測這些複雜結構並為它們提供專門的視圖。對於JSON值，它提供格式化視圖選項，使嵌套資料更具可讀性。這對於通過URL接受複雜過濾、排序或配置選項的API端點特別有用。"
        },
        {
          question: "如何在我的應用程式中使用生成的程式碼片段？",
          answer: "程式碼生成功能提供了在不同程式語言中使用所分析URL參數的即用程式碼片段：<br><br>1. <strong>前端開發</strong>：使用JavaScript (URLSearchParams)程式碼在基於瀏覽器的應用程式中提取或操作參數。<br><br>2. <strong>後端處理</strong>：使用Python、PHP或其他伺服器端語言片段解析傳入的請求URL或構建具有相同參數結構的新URL。<br><br>3. <strong>API整合</strong>：在構建需要相同參數結構的API請求時，使用適當的語言片段作為起點。<br><br>每個程式碼片段都展示了使用各種語言的標準庫構建、修改和提取URL參數的正確方式，遵循URL處理和編碼的最佳實踐。"
        },
        {
          question: "我可以分析哪些類型的URL，有什麼限制？",
          answer: "雖然我們的<strong>URL參數分析器</strong>設計用於處理大多數標準URL和查詢字符串，但有幾個限制需要注意：<br><br>1. <strong>URL長度</strong>：極長的URL（超過100,000個字符）可能會導致效能問題，不過大多數實際URL遠低於此限制。<br><br>2. <strong>非標準格式</strong>：某些應用程式使用不遵循標準約定的自定義參數格式。該工具嘗試解析這些格式，但可能無法最佳地視覺化其結構。<br><br>3. <strong>基於哈希的參數</strong>：URL片段/哈希部分（#之後）中的參數與常規查詢參數分開分析。<br><br>4. <strong>多層編碼</strong>：有時，參數可能被多次編碼。該工具為這些情況提供了\"解碼兩次\"選項，但極其複雜的分層編碼可能需要專門處理。<br><br>對於大多數Web開發、數位行銷和API測試目的，這些限制很少出現，該工具可處理整個Web上使用的常見URL格式。"
        }
      ]
    },
    guide: {
      title: "如何使用URL參數解析器：分步指南",
      step1: "<strong>輸入URL或查詢字符串</strong>：在URL輸入欄位中，貼上完整的URL（如https://example.com/page?param=value）或僅查詢字符串部分（param=value）。您還可以點擊\"使用當前頁面URL\"來分析您當前所在頁面的URL，或點擊\"從剪貼簿貼上\"來快速插入複製的內容。",
      step2: "<strong>選擇解析選項</strong>：根據您的輸入選擇適當的解析模式。\"自動檢測\"適用於大多數情況，自動確定您是輸入了完整URL還是僅查詢字符串。對於URL解碼，您可以選擇\"解碼一次\"用於標準URL，或\"解碼兩次\"用於雙重編碼的參數。",
      step3: "<strong>查看提取的參數</strong>：解析後，工具在表格視圖中顯示所有檢測到的參數。您可以看到每個參數的名稱、值，並執行複製等操作。使用搜尋過濾器快速在複雜URL中查找特定參數。",
      step4: "<strong>探索不同的視覺化選項</strong>：使用結果部分下的選項卡切換不同視圖。\"參數表格\"以結構化列表顯示所有參數，\"JSON格式\"將參數顯示為JSON物件，\"URL組成部分\"分解整個URL結構，包括協定、域名、路徑和查詢字符串。",
      step5: "<strong>分析複雜的參數值</strong>：對於包含JSON或結構化資料的參數，點擊\"查看為JSON\"查看格式化表示。這使得理解可能編碼在單個參數值內的嵌套資料結構變得更容易。",
      step6: "<strong>排序和過濾參數</strong>：使用排序選項按名稱或值以升序或降序排列參數。這在處理包含多個參數的URL時特別有用，允許您邏輯地組織它們。",
      step7: "<strong>匯出和使用結果</strong>：在\"匯出選項\"選項卡中，您可以查看和複製JavaScript、Python、PHP等語言的生成程式碼片段。這些片段展示了如何以程式方式處理相同的參數，在您的應用程式中實現類似功能時節省開發時間。"
    },
    conclusion: "URL參數解析器簡化了處理查詢字符串和URL參數的複雜任務，為開發人員、行銷人員和分析師提供了強大的工具，用於理解和操作網址。通過將URL分解為組成部分並提供多種視覺化選項，它彌合了原始URL和結構化資料之間的差距。無論您是在除錯複雜的API呼叫、分析行銷活動參數，還是學習Web開發，這個工具都能提供寶貴的見解，幫助您了解在現代Web生態系統中如何通過URL傳遞資料。"
  }
}