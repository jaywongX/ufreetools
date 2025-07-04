export default {
  name: 'User Agent 產生器',
  description: '產生各種瀏覽器和裝置的 User-Agent 字串，用於網站測試、爬蟲和開發',
  filters: {
    title: '篩選條件',
    browser: '瀏覽器',
    os: '作業系統',
    deviceType: '裝置類型'
  },
  browsers: {
    all: '所有瀏覽器',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    opera: 'Opera',
    edge: 'Edge',
    ie: 'Internet Explorer',
    unknown: '未知瀏覽器'
  },
  operatingSystems: {
    all: '所有系統',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    unknown: '未知系統'
  },
  deviceTypes: {
    all: '所有裝置',
    desktop: '桌上型電腦',
    mobile: '行動裝置',
    tablet: '平板電腦',
    unknown: '未知裝置'
  },
  generation: {
    quantity: '產生數量',
    generateRandom: '產生隨機 User-Agent',
    clearResults: '清空結果'
  },
  results: {
    title: '產生結果',
    copyAll: '複製全部',
    empty: '請點擊"產生隨機 User-Agent"按鈕產生結果'
  },
  messages: {
    copied: '已複製到剪貼簿',
    allCopied: '所有 User-Agent 已複製到剪貼簿',
    copyFailed: '複製失敗，請手動複製'
  },
  info: {
    formatTitle: 'User-Agent 格式說明',
    formatDescription: 'User-Agent 字串通常包含瀏覽器名稱、版本、作業系統和裝置資訊等，格式如下：',
    formatExample: 'Mozilla/5.0 (平台資訊) 引擎資訊 瀏覽器資訊',
    examplesTitle: '常見 User-Agent 範例：',
    chromeWindows: 'Chrome (Windows):',
    firefoxMac: 'Firefox (macOS):',
    safariIOS: 'Safari (iOS):',
    useCasesTitle: '使用場景：',
    useCases: [
      '網站相容性測試',
      '爬蟲和資料採集',
      'API開發和測試',
      '繞過瀏覽器檢測',
      '模擬不同裝置存取'
    ]
  },
  article: {
    title: "User-Agent產生器：建立瀏覽器識別字串",
    features: {
      title: "理解User-Agent字串及其應用",
      description: "我們的<strong>User-Agent產生器</strong>是一款專門設計用於建立各種測試和開發用途的瀏覽器識別字串的工具。這些被稱為<strong>使用者代理標頭</strong>的字串由瀏覽器傳送給網站，包含有關瀏覽器類型、版本、作業系統和裝置特性的關鍵資訊。<br><br>這個強大的<strong>UA字串建立工具</strong>允許您為所有主要瀏覽器（包括Chrome、Firefox、Safari、Edge和Opera）在不同作業系統和裝置類型上產生準確逼真的使用者代理字串。您可以根據特定條件篩選和自訂產生的字串，確保獲得適合您特定使用案例的精確瀏覽器指紋。<br><br>無論您是測試網站相容性、開發網路爬蟲工具，還是排查特定平台問題，獲取多樣化和真實的<strong>瀏覽器識別字串</strong>對於準確結果至關重要。",
      useCases: {
        title: "User-Agent產生的實際應用",
        items: [
          "<strong>跨瀏覽器測試</strong>：網頁開發人員使用<strong>UA字串產生</strong>模擬不同瀏覽器環境，無需安裝多個瀏覽器。透過在HTTP請求中傳送不同的使用者代理字串，您可以測試您的網站在各種瀏覽器和版本下的表現，識別可能影響受眾特定瀏覽器區段的渲染不一致或相容性問題。",
          
          "<strong>網路爬蟲開發</strong>：資料科學家和自動化專家在建立網路爬蟲時依賴<strong>瀏覽器識別模擬</strong>。使用各種使用者代理字串有助於避免被阻止自動存取的網站檢測，透過使請求看起來來自不同的合法瀏覽器而非單一可識別的爬取工具，實現更可靠的資料收集。",
          
          "<strong>行動應用測試</strong>：開發人員利用<strong>裝置UA字串模擬</strong>測試網路服務如何回應行動應用請求。由於許多後端系統根據請求裝置提供不同內容，擁有逼真的行動使用者代理字串允許開發人員驗證其API是否正確識別並回應來自各種行動平台的請求。",
          
          "<strong>SEO分析</strong>：行銷專業人員採用<strong>搜尋引擎機器人模擬</strong>來了解爬蟲如何查看他們的網站。透過使用模仿Googlebot、Bingbot或其他搜尋引擎爬蟲的使用者代理字串，SEO專家可以近似了解搜尋引擎如何解釋他們的網站內容，幫助優化以在搜尋結果中獲得更好的可見性。",
          
          "<strong>地理位置測試</strong>：國際企業利用<strong>區域瀏覽器指紋</strong>測試基於位置的功能。某些使用者代理字串包含區域或語言偏好的微妙指標，允許開發人員測試地理位置功能並確保內容為不同市場正確本地化，而無需變更他們的實體位置。",
          
          "<strong>安全研究</strong>：網路安全專業人員使用<strong>UA字串分析和產生</strong>測試系統漏洞。透過檢查應用程式如何處理異常或格式錯誤的使用者代理字串，安全研究人員可以識別使用者輸入驗證或處理邏輯中可能被攻擊利用的潛在弱點。"
        ]
      }
    },
    faq: {
      title: "關於User-Agent產生的常見問題",
      items: [
        {
          question: "User-Agent字串究竟是什麼，為什麼它很重要？",
          answer: "<strong>User-Agent字串</strong>是瀏覽器隨每個請求傳送給網站的文字識別，包含以下詳細資訊：<br><br>• 瀏覽器名稱和版本（如Chrome 91）<br>• 作業系統（如Windows 10、macOS）<br>• 裝置資訊（特別是行動裝置）<br>• 渲染引擎詳細資訊（如WebKit、Gecko）<br>• 有時包含額外的相容性資訊<br><br>這些字串之所以重要，是因為網站通常使用它們來：<br><br>• 提供適合裝置的內容<br>• 啟用特定瀏覽器功能<br>• 收集分析資料<br>• 實施安全措施<br><br>我們的<strong>User-Agent產生器工具</strong>建立真實的字串，精確模仿真實瀏覽器識別，使開發人員和測試人員能夠模擬不同的瀏覽環境，而無需多種實體裝置或瀏覽器安裝。"
        },
        {
          question: "如何產生行動裝置的User-Agent字串？",
          answer: "使用我們的工具產生<strong>行動裝置User-Agent</strong>非常簡單：<br><br>1. 在裝置類型下拉式選單中選擇\"行動裝置\"<br>2. 可選擇特定作業系統（iOS或Android）<br>3. 可選擇首選行動瀏覽器<br>4. 點擊\"產生隨機User-Agent\"<br><br>該工具將建立包含適當裝置資訊的逼真<strong>行動瀏覽器識別符</strong>。行動使用者代理字串通常包含特定指標如\"Mobile\"或\"Android\"，並常包含裝置型號資訊。對於iOS裝置，字串將包含iPhone或iPad識別符以及iOS版本詳情。<br><br>這些行動字串對於測試響應式設計、行動特定功能或開發需要透過<strong>裝置檢測機制</strong>區分桌面和行動使用者的應用程式特別有價值。"
        },
        {
          question: "產生的User-Agent字串被網站識別為合法嗎？",
          answer: "是的，我們的<strong>瀏覽器指紋產生器</strong>建立的使用者代理字串被網站識別為來自真實瀏覽器，因為：<br><br>• 它們基於來自真實裝置的實際使用者代理字串格式<br>• 它們保持網站期望的正確語法和結構<br>• 它們包含準確的版本編號和平台指標<br>• 它們包含真實瀏覽器使用的適當相容性標記<br><br>網站通常無法區分我們產生的字串和來自實際瀏覽器的字串，使其成為測試的理想選擇。然而，值得注意的是，一些複雜的網站採用除了使用者代理檢查之外的其他瀏覽器指紋技術。這些可能包括JavaScript執行模式、canvas指紋或字型檢測，僅靠我們的<strong>UA字串產生</strong>無法解決。<br><br>不過，對於大多數測試場景，這些產生的字串提供了足夠逼真的<strong>瀏覽器識別</strong>，以觸發適當的網站行為。"
        },
        {
          question: "我應該多久更新一次用於測試的User-Agent字串？",
          answer: "您應該定期更新<strong>瀏覽器識別字串</strong>，因為：<br><br>• 瀏覽器供應商大約每4-6周發佈新版本<br>• 主要版本變更可能顯著改變使用者代理格式<br>• 網站越來越針對較新瀏覽器版本提供功能<br>• 作業系統識別符隨新版本發佈而演變<br><br>作為最佳實踐：<br><br>• 關鍵生產測試：每月更新，匹配主流瀏覽器發佈<br>• 一般開發：每季度刷新，保持合理的當前性<br>• 向後相容性測試：維護當前和歷史字串的集合<br><br>我們的<strong>User-Agent產生器</strong>提供反映最新瀏覽器版本和格式的當前、逼真的字串。對於涉及非常特定瀏覽器版本的專業測試，您可能希望產生並儲存代表目標瀏覽器生態系統的字串庫，定期刷新此集合以保持測試準確性。"
        },
        {
          question: "變更我的瀏覽器User-Agent合法且符合道德嗎？",
          answer: "變更<strong>瀏覽器的識別字串</strong>存在於一個微妙的法律和道德空間：<br><br><strong>法律考慮</strong>：<br>• 用於測試、開發和研究目的通常合法<br>• 可能違反特定網站或服務的使用條款<br>• 可能違反與某些供應商的合約協議<br><br><strong>道德準則</strong>：<br>• 可接受：用於開發、相容性測試、安全研究、隱私保護<br>• 存疑：規避付費牆、存取地理限制內容、逃避速率限制<br>• 不道德：冒充搜尋引擎爬蟲、繞過安全措施、未經許可爬取<br><br>使用我們的<strong>User-Agent字串產生器</strong>的最佳實踐：<br><br>1. 查看目標網站的服務條款<br>2. 進行安全測試時獲取許可<br>3. 將其用於合法開發目的<br>4. 考慮您的測試給他人基礎設施帶來的負載<br><br>請記住，<strong>瀏覽器指紋</strong>只是網站識別使用者的一個方面，僅修改使用者代理可能無法實現完全匿名或成功模擬不同瀏覽器環境的所有方面。"
        }
      ]
    },
    guide: {
      title: "如何使用User-Agent產生器：分步指南",
      step1: "<strong>選擇篩選條件</strong>：首先選擇使用者代理字串的特定參數。使用下拉式選單按瀏覽器類型（Chrome、Firefox、Safari等）、作業系統（Windows、macOS、Android、iOS等）和裝置類型（桌面、行動、平板）進行篩選。這種定向確保您產生與特定測試或開發需求相關的使用者代理字串。",
      step2: "<strong>指定所需數量</strong>：透過在數量欄位中輸入數字，確定您想要一次產生多少個使用者代理字串。該工具允許您在單次操作中建立1到100個字串，無論您是只需要幾個特定範例還是需要用於全面測試場景的更大資料集，都非常方便。",
      step3: "<strong>產生User-Agent字串</strong>：點擊\"產生隨機User-Agent\"按鈕，建立您的自訂瀏覽器識別字串。該工具將立即產生符合您指定條件的請求數量的使用者代理。每個產生的字串都將是唯一的，並按照真實瀏覽器使用的標準慣例格式化。",
      step4: "<strong>查看並選擇字串</strong>：檢查結果部分顯示的產生使用者代理字串。每個條目都顯示瀏覽器類型、作業系統和裝置類別的摘要，便於識別。完整的使用者代理字串顯示在此摘要下方，讓您驗證它是否包含您特定使用案例所需的所有元素。",
      step5: "<strong>複製並實施字串</strong>：當您找到滿足您要求的使用者代理字串時，可以透過點擊每個字串旁邊的複製圖示複製單個字串，或使用結果部分頂部的\"複製全部\"按鈕一次複製所有產生的字串。然後可以在您的測試工具、網路爬蟲應用程式、瀏覽器擴充功能或API請求中實施這些字串。"
    },
    conclusion: "User-Agent字串仍然是網路架構的基本組成部分，作為在網際網路上識別瀏覽器和裝置的數位指紋。雖然它們的主要目的是幫助網站提供優化內容，但它們已成為開發人員、測試人員和研究人員的寶貴工具。我們的User-Agent產生器提供了一種直接方法來為各種瀏覽器、作業系統和裝置建立這些識別字串，實現更全面的測試和開發過程。無論您是建立響應式網站、開發跨瀏覽器應用程式，還是進行相容性研究，獲取準確多樣的使用者代理字串都是必不可少的。隨著瀏覽器技術的不斷發展，這些字串中包含的格式和資訊也將隨之發展，使得可靠的產生器工具對於跟上網路標準和使用者期望變得越來越有價值。"
  }
}