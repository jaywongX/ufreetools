export default {
  name: 'HTTP狀態碼查詢',
  description: '查詢和理解HTTP響應狀態碼和訊息',
  search: {
    title: '查找狀態碼',
    placeholder: '輸入狀態碼或按描述搜尋',
    button: '查詢',
    recent: '最近搜尋',
    common: '常見狀態碼',
    filter: {
      all: '所有類別',
      informational: '1xx - 資訊響應',
      success: '2xx - 成功響應',
      redirection: '3xx - 重新導向',
      clientError: '4xx - 客戶端錯誤',
      serverError: '5xx - 伺服器錯誤'
    }
  },
  results: {
    title: '狀態碼資訊',
    code: '狀態碼',
    type: '類型',
    message: '標準訊息',
    description: '描述',
    spec: '規範',
    references: '參考資料',
    examples: '範例',
    noResults: '未找到結果',
    searchError: '搜尋狀態碼時出錯',
    tryAgain: '嘗試其他搜尋',
    example: '範例',
    notes: '注意事項'
  },
  categories: {
    title: '分類',
    information: '資訊響應 (1xx)',
    success: '成功響應 (2xx)',
    redirection: '重新導向訊息 (3xx)',
    clientError: '客戶端錯誤響應 (4xx)',
    serverError: '伺服器錯誤響應 (5xx)',
    unofficial: '非官方代碼',
    internet: 'Internet Information Services',
    nginx: 'Nginx',
    cloudflare: 'Cloudflare',
    aws: 'AWS'
  },
  statusInfo: {
    '100': {
      message: '繼續',
      description: '伺服器已收到請求頭，客戶端應繼續發送請求體。',
      shortDescription: '繼續發送請求',
      fullDescription: '伺服器已收到請求的初始部分，客戶端應繼續發送剩餘的請求。',
      notes: '通常用於客戶端在發送較大請求體之前，先檢查伺服器是否會接受該請求。'
    },
    '101': {
      message: '切換協議',
      description: '請求者已要求伺服器切換協議，伺服器已同意這樣做。',
      shortDescription: '切換協議',
      fullDescription: '伺服器已經理解了客戶端的請求，並將通過Upgrade訊息頭通知客戶端採用不同的協議來完成這個請求。',
      notes: '常用於WebSocket連接的建立過程。'
    },
    '200': {
      message: '成功',
      description: '請求已成功。成功的含義取決於HTTP方法。'
    },
    '201': {
      message: '已建立',
      description: '請求已成功，並因此建立了一個新的資源。'
    },
    '204': {
      message: '無內容',
      description: '伺服器成功處理了請求，但不需要返回任何內容。'
    },
    '301': {
      message: '永久移動',
      description: '請求的資源的URL已永久更改。新的URL在響應中給出。'
    },
    '302': {
      message: '找到',
      description: '請求的資源的URL已臨時更改。新的URL在響應中給出。'
    },
    '304': {
      message: '未修改',
      description: '無需重新傳輸資源，因為客戶端仍有之前下載的副本。'
    },
    '400': {
      message: '錯誤請求',
      description: '由於語法無效，伺服器無法理解請求。'
    },
    '401': {
      message: '未授權',
      description: '客戶端必須進行身份驗證才能獲得請求的響應。'
    },
    '403': {
      message: '禁止',
      description: '客戶端沒有訪問內容的權限。'
    },
    '404': {
      message: '未找到',
      description: '伺服器找不到請求的資源。'
    },
    '500': {
      message: '伺服器內部錯誤',
      description: '伺服器遇到了一個它不知道如何處理的情況。'
    },
    '502': {
      message: '錯誤閘道',
      description: '伺服器作為閘道或代理時，從上游伺服器收到無效響應。'
    },
    '503': {
      message: '服務不可用',
      description: '伺服器尚未準備好處理請求。常見原因是伺服器正在進行維護或過載。'
    }
  },
  tools: {
    title: '工具',
    checkUrl: '檢查URL狀態',
    statusCodeFlow: '狀態碼流程圖',
    apiTest: 'API測試器',
    debugger: '響應調試器',
    statusInspector: 'URL狀態檢查器'
  },
  features: {
    title: '功能',
    overview: '狀態碼概述',
    comparison: '狀態碼比較',
    troubleshooting: '故障排除指南',
    bestPractices: '最佳實踐',
    codeExamples: '程式碼範例'
  },
  details: {
    title: '詳細資訊',
    history: '歷史',
    browser: '瀏覽器行為',
    seo: 'SEO影響',
    security: '安全影響',
    bestPractices: '最佳實踐',
    alternatives: '替代狀態碼',
    commonErrors: '常見錯誤'
  },
  codeExamples: {
    title: '程式碼範例',
    nodejs: 'Node.js',
    python: 'Python',
    php: 'PHP',
    java: 'Java',
    go: 'Go',
    copyCode: '複製程式碼',
    response: '響應範例',
    request: '請求範例'
  },
  category: {
    intro: 'HTTP狀態碼是伺服器對瀏覽器請求的響應狀態，分為5個類別：',
    informational: '1xx（資訊性狀態碼）- 接收的請求正在處理',
    success: '2xx（成功狀態碼）- 請求正常處理完畢',
    redirection: '3xx（重新導向狀態碼）- 需要進行附加操作以完成請求',
    clientError: '4xx（客戶端錯誤狀態碼）- 伺服器無法處理請求',
    serverError: '5xx（伺服器錯誤狀態碼）- 伺服器處理請求出錯'
  },
  codes: {
    '100': {
      shortDescription: '繼續發送請求',
      description: '伺服器已收到請求的初始部分，客戶端應繼續發送剩餘的請求。',
      notes: '通常用於客戶端在發送較大請求體之前，先檢查伺服器是否會接受該請求。'
    },
    '101': {
      shortDescription: '切換協議',
      description: '伺服器已經理解了客戶端的請求，並將通過Upgrade訊息頭通知客戶端採用不同的協議來完成這個請求。',
      notes: '常用於WebSocket連接的建立過程。'
    },
    '200': {
      shortDescription: '請求成功',
      description: '請求已成功，伺服器已返回請求的內容。這是最常見的狀態碼。',
      notes: '所有GET請求成功都應返回此狀態碼。'
    },
    '201': {
      shortDescription: '已建立',
      description: '請求已成功，並且伺服器建立了新的資源。通常在POST請求後返回。',
      notes: '應返回新建立資源的位置（URI）。'
    },
    '204': {
      shortDescription: '無內容',
      description: '伺服器成功處理了請求，但不需要返回任何實體內容。',
      notes: '常用於DELETE請求成功或僅需要客戶端重置視圖的情況。'
    },
    '301': {
      shortDescription: '永久重新導向',
      description: '請求的資源已永久移動到新位置，以後任何對此資源的引用都應使用新的URL。',
      notes: '搜索引擎會更新資源的URL，瀏覽器通常會快取此重新導向。'
    },
    '302': {
      shortDescription: '臨時重新導向',
      description: '請求的資源臨時從不同的URL響應請求，但請求者應繼續使用原有URL訪問。',
      notes: '與301不同，搜索引擎不會更新資源連結，瀏覽器可能不會快取此重新導向。'
    },
    '304': {
      shortDescription: '未修改',
      description: '資源未被修改，可使用客戶端快取的版本。通常用於條件性GET請求。',
      notes: '伺服器不應返回響應體，有助於提高性能和減少頻寬消耗。'
    },
    '400': {
      shortDescription: '錯誤請求',
      description: '伺服器無法理解請求的格式，客戶端不應該在未修改請求的情況下重複提交。',
      notes: '通常是由於請求參數格式錯誤、缺少必要參數或參數值無效。'
    },
    '401': {
      shortDescription: '未授權',
      description: '請求要求用戶的身份認證，如用戶未提供憑據或提供的憑據無效。',
      notes: '客戶端應提供或重新提供正確的認證資訊。'
    },
    '403': {
      shortDescription: '禁止訪問',
      description: '伺服器理解請求但拒絕執行，與401不同，身份認證不會提供任何幫助。',
      notes: '通常是由於權限不足，如嘗試訪問只有管理員才能查看的內容。'
    },
    '404': {
      shortDescription: '未找到',
      description: '伺服器找不到請求的資源，可能是URL拼寫錯誤或資源已被刪除。',
      notes: '最常見的錯誤狀態碼之一，應明確告知用戶資源不存在。'
    },
    '405': {
      shortDescription: '方法不允許',
      description: '請求行中指定的請求方法不能被用於請求相應的資源。',
      notes: '響應中必須包含Allow頭，指明對該資源有效的請求方法。'
    },
    '409': {
      shortDescription: '衝突',
      description: '請求與伺服器當前狀態衝突，通常出現在PUT請求中。',
      notes: '常見於嘗試建立已存在的資源或併發編輯同一資源的情況。'
    },
    '429': {
      shortDescription: '請求過多',
      description: '用戶在給定時間內發送了太多請求（"限流"）。',
      notes: '應包含Retry-After頭，告知客戶端多久後可以再次發送請求。'
    },
    '500': {
      shortDescription: '伺服器內部錯誤',
      description: '伺服器遇到了不知道如何處理的情況，通常是程式碼錯誤或臨時故障。',
      notes: '伺服器錯誤狀態碼中最常見的一種，應盡可能提供詳細的錯誤資訊和日誌以便調試。'
    },
    '502': {
      shortDescription: '錯誤閘道',
      description: '作為閘道或代理的伺服器從上游伺服器收到無效響應。',
      notes: '通常出現在使用反向代理或負載平衡器時，上游服務不可用或響應異常。'
    },
    '503': {
      shortDescription: '服務不可用',
      description: '伺服器暫時不可用，通常是由於超載或系統維護。',
      notes: '應包含Retry-After頭指示客戶端多久後重試，這有助於減輕伺服器負載。'
    },
    '504': {
      shortDescription: '閘道超時',
      description: '作為閘道或代理的伺服器未及時從上游伺服器收到響應。',
      notes: '常見於代理後的服務處理時間過長或網路連接問題。'
    }
  },
  article: {
    title: "HTTP狀態碼參考指南 - 理解網路響應代碼",
    intro: {
      title: "什麼是HTTP狀態碼以及為什麼它們很重要？",
      p1: "<b>HTTP狀態碼</b>是Web伺服器發出的標準響應代碼，用於表明客戶端請求的結果。這些三位數的代碼被分為五類，每類在Web通信中都有特定的用途。我們的HTTP狀態碼查詢工具提供對這些代碼的詳細資訊的即時訪問，幫助開發人員、網站管理員和IT專業人員高效地排查與Web相關的問題。",
      p2: "理解<b>HTTP響應代碼</b>對於任何從事網站或Web應用程式工作的人都至關重要。這些代碼傳達了HTTP請求是否已成功完成、需要額外操作或遇到了錯誤。通過快速識別404未找到或500內部伺服器錯誤等狀態碼背後的含義，您可以更快地診斷問題並實施有效的解決方案，以改善用戶體驗和網站功能。",
      p3: "我們全面的<b>狀態碼參考</b>工具不僅提供基本定義，還提供每個代碼的詳細解釋、常見原因和推薦操作。無論您是在調試網站、優化SEO性能還是開發API，該工具都是您解釋伺服器響應和維持Web運行順暢的得力助手。"
    },
    useCases: {
      title: "HTTP狀態碼知識的實際應用",
      case1: "<b>網站故障排除</b>：當用戶報告訪問某些頁面的問題時，HTTP狀態碼可以快速確定問題是缺少資源(404)、伺服器錯誤(5xx)還是權限問題(403)。我們的工具幫助您理解這些錯誤並實施適當的修復。",
      case2: "<b>SEO優化</b>：搜索引擎使用狀態碼來了解您網站的健康狀況。正確管理重新導向(301與302)和錯誤頁面對搜索排名有顯著影響。使用我們的工具確保您的網站正確實施狀態碼，以獲得最佳SEO性能。",
      case3: "<b>API開發和測試</b>：REST API嚴重依賴HTTP狀態碼來傳達響應狀態。開發人員可以使用我們的參考為其API端點實施最合適的狀態碼，確保服務之間的清晰通信。",
      case4: "<b>伺服器配置</b>：系統管理員使用狀態碼來診斷Web伺服器、負載平衡器和代理的配置問題。我們的詳細解釋有助於確定錯誤是源於伺服器設置、網路問題還是應用程式代碼。",
      case5: "<b>Web應用安全</b>：安全專業人員分析異常的狀態碼模式來檢測潛在的攻擊或漏洞。了解不同狀態碼的安全影響有助於實施適當的訪問控制和保護機制。"
    },
    tutorial: {
      title: "如何使用HTTP狀態碼查詢工具",
      intro: "我們的HTTP狀態碼參考工具設計得直觀且高效。按照以下簡單步驟，快速找到您需要的任何HTTP狀態碼資訊：",
      step1: {
        title: "步驟1：輸入搜尋條件",
        description: "首先在工具頂部的搜尋框中輸入特定的狀態碼數字（如404或500）或描述性關鍵詞（如\"未找到\"或\"伺服器錯誤\"）。搜尋功能設計為同時匹配代碼數字和描述，使您在搜尋方式上具有靈活性。"
      },
      step2: {
        title: "步驟2：按類別過濾（可選）",
        description: "如果您想瀏覽特定類別內的代碼，請使用下拉菜單過濾結果。您可以在資訊響應(1xx)、成功響應(2xx)、重新導向(3xx)、客戶端錯誤(4xx)或伺服器錯誤(5xx)之間選擇。當您想探索相關狀態碼時，此過濾選項特別有用。"
      },
      step3: {
        title: "步驟3：查看狀態碼列表",
        description: "搜尋或過濾後，查看匹配的狀態碼列表。每個條目顯示代碼數字、名稱和簡要描述。顏色編碼幫助您快速識別每個狀態碼的類別：資訊類為藍色，成功類為綠色，重新導向為黃色，客戶端錯誤為紅色，伺服器錯誤為紫色。"
      },
      step4: {
        title: "步驟4：展開查看詳細資訊",
        description: "點擊任何狀態碼條目以展開並查看全面詳細資訊。展開視圖提供代碼目的的完整描述、HTTP響應範例以及關於此代碼何時出現以及如何處理的實用說明。這些詳細資訊幫助您充分理解每個狀態碼在實際場景中的含義。"
      }
    },
    common: {
      title: "最重要的HTTP狀態碼解析",
      intro: "雖然各種規範中定義了數十種HTTP狀態碼，但在Web開發和故障排除過程中最常遇到的只有少數幾種。以下是您應該了解的最重要代碼的深入解析：",
      code1: {
        title: "200 OK - 成功響應的基礎",
        description: "<b>200 OK狀態碼</b>表示伺服器已成功處理請求。這是成功HTTP請求的標準響應，特別是獲取數據的GET請求。正常運行的網站應該為大多數用戶交互生成200響應。但是，如果頁面返回200但仍顯示不正確，問題可能出在內容或客戶端代碼，而不是伺服器通信。"
      },
      code2: {
        title: "404 Not Found - 管理缺失資源",
        description: "<b>404 Not Found狀態碼</b>在請求的資源在伺服器上不存在時出現。這通常發生在連結斷開、URL拼寫錯誤或內容已被移除的情況下。從SEO角度看，過多的404錯誤會對您網站的排名產生負面影響。最佳實踐包括實現帶有有用導航選項的自定義404頁面，定期檢查斷開的連結，以及為永久移動的內容設置適當的301重新導向。"
      },
      code3: {
        title: "500 Internal Server Error - 處理伺服器端問題",
        description: "<b>500 Internal Server Error狀態碼</b>表示伺服器遇到了意外情況，阻止它完成請求。這是一個通用的伺服器端錯誤，可能由配置錯誤、腳本錯誤或資源限制引起。在排查500錯誤時，檢查伺服器日誌以獲取具體錯誤訊息，審查最近的代碼更改，並驗證伺服器資源可用性。對於開發人員來說，實現詳細的錯誤日誌和監控對於快速解決這些伺服器端問題至關重要。"
      },
      code4: {
        title: "301 vs 302 重新導向 - 戰略性SEO考慮",
        description: "<b>301（永久重新導向）</b>和<b>302（臨時重新導向）</b>狀態碼之間的區別對SEO策略至關重要。301重新導向向搜索引擎表明內容已永久移動，將原始頁面的大部分排名能力轉移到新URL。相比之下，302重新導向表示暫時移動，不會傳遞相同的SEO價值。使用錯誤的重新導向類型可能會顯著影響您的搜索可見性，因此根據內容重新導向是永久還是臨時選擇適當的重新導向類型很重要。"
      }
    },
    faq: {
      title: "關於HTTP狀態碼的常見問題",
      q1: "4xx和5xx狀態碼有什麼區別？",
      a1: "<b>4xx和5xx狀態碼</b>的主要區別在於錯誤的來源。4xx狀態碼表示客戶端錯誤，意味著問題出在請求本身。例如嘗試訪問不存在的資源(404)、提供無效認證(401)或缺乏適當權限(403)。客戶端需要修改請求來解決這些問題。<br><br>相比之下，5xx狀態碼表示伺服器端錯誤，意味著伺服器未能滿足有效請求。這些可能是由於伺服器配置錯誤、應用程式錯誤或資源限制造成的。例如內部伺服器錯誤(500)、錯誤閘道(502)或服務不可用(503)。通常需要伺服器端干預來修復這些問題，而客戶端通常不能通過修改其請求來解決它們。",
      
      q2: "HTTP狀態碼如何影響SEO和搜索排名？",
      a2: "<b>HTTP狀態碼顯著影響SEO性能</b>以及搜索引擎如何索引您的網站。搜索引擎爬蟲使用這些代碼來確定如何處理它們發現的頁面：<br><br>• 200 (OK) 表示內容可供索引<br>• 301 (永久重新導向) 將排名信號轉移到新URL<br>• 302 (臨時重新導向) 在跟隨重新導向的同時保持原始URL的排名<br>• 404 (未找到) 如果存在太多，可能對排名產生負面影響<br>• 410 (已刪除) 告訴搜索引擎從索引中刪除內容<br>• 500級別錯誤可能阻止索引，如果持續存在，會損害排名<br>• 503 (服務不可用) 帶有Retry-After頭告訴搜索引擎稍後返回<br><br>正確實施狀態碼確保搜索引擎正確理解您的網站結構，這直接影響您的搜索可見性和排名潛力。",
      
      q3: "對於臨時不可用的頁面應該使用什麼HTTP狀態碼？",
      a3: "對於<b>臨時不可用的頁面</b>，最合適的狀態碼是<b>503 Service Unavailable</b>。此代碼特別表示伺服器由於維護、過載或其他臨時條件而暫時無法處理請求。使503對臨時中斷特別有價值的是可以包含Retry-After頭，告訴客戶端和搜索引擎何時再次嘗試訪問資源。<br><br>在計劃維護期間或臨時中斷期間使用503比其他錯誤代碼有幾個優勢：<br><br>• 搜索引擎不會取消索引您的內容，不像持續出現404或500錯誤那樣<br>• 明確告知用戶代理問題是暫時的<br>• 有助於在維護窗口期間維持您的SEO價值<br>• Retry-After頭有助於在停機期間管理爬蟲流量<br><br>為獲得最大效果，將503響應與用戶友好的維護頁面配對，解釋情況和預期的解決時間。",
      
      q4: "如何處理SEO友好的網站遷移重新導向？",
      a4: "對於<b>SEO友好的網站遷移</b>，正確實施重新導向對於保留搜索排名和用戶體驗至關重要。推薦的方法包括以下關鍵步驟：<br><br>1. <b>使用301永久重新導向</b>處理所有已移動的內容，這將約90-99%的排名能力轉移到新URL<br>2. 實施<b>一對一重新導向</b>，從舊URL到其直接對應的新URL，而不是將所有內容重新導向到您的主頁<br>3. 創建<b>全面的重新導向映射</b>，記錄所有舊URL及其對應的新目標<br>4. 設置<b>伺服器端重新導向</b>（通過.htaccess、web.config或伺服器配置），而不是依賴JavaScript或元刷新<br>5. <b>盡可能保留URL結構</b>以最小化對重新導向的需求<br>6. <b>測試所有重新導向</b>，確保它們在啟動前正常運行，並且不會創建重新導向鏈或循環<br><br>此外，遷移後至少保持這些重新導向一年，確保搜索引擎和書籤連結繼續正確找到您的內容。",
      
      q5: "304 Not Modified狀態碼是什麼意思？",
      a5: "<b>304 Not Modified狀態碼</b>表示自上次請求以來，資源未被修改，這基於客戶端發送的條件頭。這實際上是一個積極的狀態碼，通過高效快取幫助優化Web性能。<br><br>當瀏覽器已經有資源的快取版本時，它可以發送帶有If-Modified-Since或If-None-Match（帶有ETags）等條件頭的請求。如果伺服器確定資源未改變，它會響應304狀態而不是再次發送整個資源。這一過程：<br><br>• 減少客戶端和伺服器的頻寬使用<br>• 通過使用快取資源改善頁面加載時間<br>• 通過避免不必要的數據傳輸減少伺服器負載<br>• 通過更快的後續頁面訪問增強用戶體驗<br><br>您通常會看到靜態資產如圖像、CSS、JavaScript文件，以及偶爾未更改的HTML內容的304響應。這個狀態碼是有效Web快取策略的關鍵組成部分。",
      
      q6: "如何調試不尋常或自定義的HTTP狀態碼？",
      a6: "調試<b>不尋常或自定義的HTTP狀態碼</b>需要系統方法和專門工具。從以下方法開始收集詳細資訊：<br><br>1. <b>使用瀏覽器開發者工具</b>：檢查網路選項卡以查看準確的狀態碼和響應頭<br>2. <b>部署HTTP檢查工具</b>如Postman、cURL或專門的HTTP調試器，提供詳細的請求和響應分析<br>3. <b>檢查伺服器日誌</b>以了解生成不尋常狀態碼的更多背景<br>4. <b>審查處理響應的應用程式代碼</b>，特別是使用可能實現自定義狀態碼的框架<br>5. <b>查閱API文檔</b>，如果狀態碼來自第三方服務<br><br>對於非標準狀態碼，請記住：<br>• 9xx範圍內的自定義代碼完全非標準，專用於特定應用程式<br>• 標準範圍內(1xx-5xx)但不在官方註冊表中的代碼可能來自更新的規範或供應商擴展<br>• 一些服務以非標準方式使用標準代碼，需要服務特定的文檔<br><br>我們的HTTP狀態碼查詢工具可以幫助處理標準代碼，但對於真正自定義的代碼，您需要查閱與之交互的應用程式或服務的特定文檔。"
    },
    relatedTools: {
      title: "探索更多Web開發工具",
      description: "使用這些補充工具增強您的Web開發工作流程：",
      tool1: {
        name: "HTTP頭部安全檢查器",
        url: "https://www.ufreetools.com/tool/http-header-security-checker",
        description: "分析和評估HTTP響應頭的安全性。"
      },
      tool2: {
        name: "HTTP代理檢測器",
        url: "https://www.ufreetools.com/tool/http-proxy-detector",
        description: "檢測您的連接是否使用HTTP代理，並分析與代理相關的頭部進行安全驗證。"
      },
      tool3: {
        name: "URL參數解析器",
        url: "https://www.ufreetools.com/tool/url-params-parser",
        description: "解析、分析和操作URL參數和查詢字符串。"
      },
      tool4: {
        name: "JSON格式化與驗證器",
        url: "https://www.ufreetools.com/tool/json-formatter",
        description: "格式化、驗證和美化JSON數據，用於API開發和調試。"
      }
    },
    resources: {
      title: "HTTP狀態碼的權威資源",
      resource1: {
        name: "Mozilla開發者網絡(MDN) HTTP狀態碼參考",
        url: "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status",
        description: "最全面和最新的HTTP狀態碼參考，帶有詳細解釋和Web標準合規性資訊。"
      },
      resource2: {
        name: "IANA HTTP狀態碼註冊表",
        url: "https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml",
        description: "互聯網號碼分配機構(IANA)的官方HTTP狀態碼註冊表，是標準化代碼的權威來源。"
      },
      resource3: {
        name: "RFC 7231 - HTTP/1.1語義：狀態碼",
        url: "https://tools.ietf.org/html/rfc7231#section-6",
        description: "定義標準HTTP狀態碼的語義和用法的官方HTTP/1.1規範。"
      }
    }
  }
}