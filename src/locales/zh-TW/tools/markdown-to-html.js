export default {
  name: 'Markdown轉HTML',
  description: '將Markdown文本轉換為HTML，具有可自定義選項',
  input: {
    title: '輸入Markdown',
    placeholder: '在此輸入或貼上您的Markdown文本...',
    loadSample: '載入範例',
    clearInput: '清空',
    uploadFile: '上傳Markdown文件',
    paste: '從剪貼簿貼上',
    charCount: '字元數',
    lineCount: '行數'
  },
  output: {
    title: 'HTML輸出',
    copied: 'HTML已複製到剪貼簿',
    download: '下載HTML',
    copyOutput: '複製HTML',
    clearOutput: '清除輸出',
    previewTab: '預覽',
    htmlTab: 'HTML程式碼',
    previewMode: '預覽模式',
    sourceMode: 'HTML原始碼'
  },
  options: {
    title: '轉換選項',
    headerIds: '自動標題ID',
    gfm: 'GitHub風格Markdown',
    tables: '表格',
    breaks: '換行',
    smartLists: '智能列表',
    smartypants: '智能標點',
    xhtml: 'XHTML',
    highlight: '語法高亮',
    sanitize: '淨化HTML',
    footnotes: '註腳',
    taskLists: '任務列表',
    emoji: '表情符號支援',
    includeStyle: '包含預設CSS',
    realtimePreview: '即時預覽',
    scrollSync: '滾動同步',
    htmlOptions: 'HTML選項'
  },
  styles: {
    title: '樣式選項',
    theme: '主題',
    codeTheme: '程式碼主題',
    customCSS: '自定義CSS',
    fontSize: '字型大小',
    lineHeight: '行高',
    enableCustom: '啟用自定義樣式'
  },
  themes: {
    default: '預設',
    github: 'GitHub',
    bootstrap: 'Bootstrap',
    bulma: 'Bulma',
    medium: 'Medium',
    solarized: 'Solarized',
    dark: '深色模式',
    custom: '自定義'
  },
  codeThemes: {
    default: '預設',
    github: 'GitHub',
    vscode: 'VS Code',
    atom: 'Atom',
    dracula: 'Dracula',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },
  actions: {
    convert: '轉換為HTML',
    clearAll: '全部清除',
    copyHtml: '複製HTML',
    saveAsHtml: '儲存為HTML',
    generateToc: '生成目錄'
  },
  messages: {
    conversionSuccess: 'Markdown轉換成功',
    conversionFailed: 'Markdown轉換失敗：{error}',
    emptyInput: '請輸入要轉換的Markdown',
    copied: 'HTML已複製到剪貼簿',
    tocGenerated: '已生成目錄'
  },
  alerts: {
    copied: '已複製到剪貼簿',
    copyFailed: '複製到剪貼簿失敗',
    pasteFailed: '從剪貼簿貼上失敗',
    confirmClear: '確定要清空輸入內容嗎？'
  },
  status: {
    lastConversion: '最後轉換時間'
  },
  samples: {
    basic: '基礎範例',
    extended: '擴充範例',
    article: '文章範例'
  },
  download: {
    title: 'Markdown轉HTML匯出'
  },
  
  // 新增文章部分
  article: {
    title: "Markdown轉HTML轉換器：將文本轉換為格式化網頁內容",
    features: {
      title: "Markdown轉HTML：簡化內容創建過程",
      description: "<strong>Markdown轉HTML轉換器</strong>是一款強大的工具，專為將輕量級Markdown語法轉換成適合網頁發布的格式化HTML程式碼而設計。這款<strong>文本格式化轉換工具</strong>架起了簡單文本寫作與網頁內容創建之間的橋樑，允許內容創作者專注於寫作，無需擔心複雜的HTML標籤。<br><br>Markdown的簡潔性使其成為內容創建的理想選擇，但瀏覽器需要HTML才能正確顯示格式化內容。我們的<strong>Markdown處理器</strong>自動處理這種轉換，支援標準Markdown特性，包括標題、列表、連結、圖片、表格、程式碼塊、引用塊和文本格式化，同時提供自定義和預覽選項。",
      useCases: {
        title: "Markdown轉HTML的實際應用場景",
        items: [
          "<strong>部落格文章創作</strong>：內容寫作者可以使用易於編寫的Markdown格式起草文章，然後轉換為HTML以在各種部落格平台上發布。<strong>Markdown解析器</strong>確保適當的格式化，同時保持乾淨的HTML結構，與WordPress、Ghost或Jekyll等內容管理系統無縫配合。",
          "<strong>文件開發</strong>：技術作者使用Markdown編寫軟體文件、使用者指南和技術手冊，然後轉換為HTML用於基於網路的文件站點。該工具對程式碼格式化和語法高亮的支援使其成為創建包含程式碼範例的<strong>開發者文件</strong>的理想選擇。",
          "<strong>程式碼倉庫的README文件</strong>：為GitHub、GitLab或Bitbucket倉庫編寫文件的開發人員可以使用此工具預覽他們的Markdown渲染效果，並在需要時為不原生支援Markdown的其他平台提取乾淨的HTML。",
          "<strong>電子郵件通訊格式化</strong>：行銷人員可以用簡單的Markdown編寫電子郵件內容，然後轉換為HTML用於電子郵件行銷平台。<strong>HTML生成器</strong>創建的乾淨程式碼在各種電子郵件客戶端中都能良好工作，同時保持格式的一致性。",
          "<strong>教育內容</strong>：教師和講師創建學習材料時可以用Markdown編寫內容，並轉換為HTML用於學習管理系統或在線課程平台，利用該工具的格式化功能創建帶有標題、列表和強調的<strong>結構化內容</strong>。",
          "<strong>協作寫作</strong>：團隊在共享文件上工作時可以使用Markdown來簡化流程，然後在需要發布時轉換為HTML。這種工作流程簡化了編輯過程，同時確保最終的HTML輸出乾淨且一致。"
        ]
      }
    },
    faq: {
      title: "關於Markdown轉HTML轉換的常見問題",
      items: [
        {
          question: "Markdown和HTML有什麼區別？",
          answer: "Markdown和HTML在內容創建工作流中服務於不同的目的。<strong>HTML（超文本標記語言）</strong>是創建網頁和Web應用程式的標準語言。它使用諸如&lt;p&gt;、&lt;h1&gt;和&lt;ul&gt;等標籤來定義文件結構和格式。雖然功能強大，但HTML可能冗長且對非技術使用者來說難以正確編寫。<br><br>另一方面，<strong>Markdown</strong>是一種輕量級標記語言，旨在最大限度地提高可讀性和易寫性。它使用簡單符號，如#表示標題，*表示列表和**表示粗體文本。這種簡單性使Markdown成為初始內容創建的理想選擇，尤其是在專注於文本而非佈局時。<br><br>我們的<strong>Markdown轉HTML轉換器</strong>連接了這兩個世界，允許您使用簡單的Markdown編寫內容，並在需要時為Web發布生成正確的HTML程式碼。這讓您同時獲得兩方面的優勢：使用Markdown的簡單性進行寫作和HTML的通用瀏覽器支援進行顯示。"
        },
        {
          question: "為什麼我的程式碼塊在轉換後看起來不同？",
          answer: "轉換後<strong>HTML輸出</strong>中的程式碼塊看起來與您的Markdown不同，可能有以下幾個原因：<br><br>1. <strong>語法高亮</strong>：如果您啟用了語法高亮選項，我們的轉換器會對您的程式碼應用特定語言的著色，增強可讀性並使其更具視覺吸引力。這會添加額外的HTML和CSS，根據語言語法對程式碼的不同部分進行樣式設置。<br><br>2. <strong>格式增強</strong>：轉換器會將程式碼塊包裝在適當的HTML元素（&lt;pre&gt;和&lt;code&gt;標籤）中，並可能應用背景色、行號或字型調整等樣式以提高可讀性。<br><br>3. <strong>字元轉義</strong>：程式碼中的特殊字元必須在HTML中正確轉義才能正確顯示。例如，程式碼塊中使用的HTML標籤中的尖括號將被轉換為&amp;lt;和&amp;gt;實體。<br><br>這些轉換是有意為之的，有助於使您的程式碼在瀏覽器中顯示時更具可讀性，同時保持程式碼範例的功能完整性。您可以使用工具的樣式和格式選項自定義這些方面。"
        },
        {
          question: "我可以自定義HTML輸出樣式嗎？",
          answer: "是的，我們的<strong>Markdown轉換器</strong>提供多種選項來自定義HTML輸出的樣式：<br><br>1. <strong>包含預設CSS</strong>：啟用此選項可包含一組基本CSS樣式，使您的HTML立即看起來視覺上更吸引人。這些樣式包括增強可讀性的排版、間距和配色方案。<br><br>2. <strong>自定義樣式選項</strong>：根據您的輸出需求，您可以選擇不同的主題選項，這些選項會影響標題、列表、引用塊和連結等元素的顯示方式。<br><br>3. <strong>程式碼塊主題</strong>：對於技術內容，您可以選擇不同的語法高亮主題，改變程式碼塊在輸出中的外觀。<br><br>4. <strong>直接HTML編輯</strong>：轉換後，如果您需要非常特定的格式，可以切換到HTML視圖並手動添加自定義CSS類或內聯樣式。<br><br>這些自定義選項允許您生成與您的設計要求相匹配的<strong>網頁就緒HTML</strong>，同時保持Markdown格式提供的清晰結構。預覽面板會準確顯示您的內容在選定樣式選項下的外觀。"
        },
        {
          question: "這個轉換器會保留我的文件結構嗎？",
          answer: "是的，<strong>Markdown轉HTML轉換器</strong>專門設計用於在轉換過程中保留文件的結構完整性。以下是文件結構如何維護的方式：<br><br>1. <strong>標題層次結構</strong>：Markdown標題（#到######）被正確轉換為它們的HTML等效項（&lt;h1&gt;到&lt;h6&gt;），保持文件的邏輯大綱和章節層次結構。<br><br>2. <strong>列表結構</strong>：有序和無序列表，包括嵌套列表，都使用適當的HTML標籤（&lt;ul&gt;，&lt;ol&gt;，&lt;li&gt;）正確轉換，同時保留它們的層次關係。<br><br>3. <strong>段落分隔</strong>：Markdown中分隔段落的空行被正確轉換為HTML中的單獨&lt;p&gt;元素。<br><br>4. <strong>塊元素</strong>：特殊塊，如引用塊、程式碼塊和表格，在生成的HTML中仍然與常規段落文本保持分離。<br><br>5. <strong>換行與段落</strong>：轉換器根據標準Markdown約定，智能處理段落內換行和實際段落換行之間的區別。<br><br>這種結構保存確保您的<strong>文件層次結構</strong>保持完整，使轉換後的HTML在語義上正確，並為Web瀏覽器、屏幕閱讀器和搜索引擎適當組織。"
        },
        {
          question: "生成的HTML是否乾淨且對SEO友好？",
          answer: "是的，我們的<strong>Markdown轉換器</strong>生成乾淨、語義正確的HTML，非常有利於SEO。以下是為什麼輸出支援良好搜索引擎優化的原因：<br><br>1. <strong>語義結構</strong>：轉換器生成的HTML正確使用語義元素（&lt;h1&gt;，&lt;h2&gt;，&lt;p&gt;，&lt;ul&gt;等），這有助於搜索引擎理解不同內容部分的結構和重要性。<br><br>2. <strong>乾淨程式碼</strong>：生成的HTML輕量化，沒有不必要的標記或可能使頁面臃腫的內聯樣式。這種乾淨的程式碼更容易被搜索引擎解析和索引。<br><br>3. <strong>適當的標題層次結構</strong>：Markdown標題被轉換為相應的HTML標題標籤，保持邏輯文件大綱，搜索引擎使用這些來了解內容關係和主題層次結構。<br><br>4. <strong>可訪問內容</strong>：HTML輸出遵循可訪問性最佳實踐，這與SEO要求一致，因為兩者都專注於適當的文件結構和語義。<br><br>5. <strong>淨化選項</strong>：HTML淨化功能可移除潛在不安全的元素，同時保留內容的結構完整性，確保安全和乾淨的HTML輸出。<br><br>這種<strong>SEO優化的HTML</strong>為您的Web內容提供了堅實的基礎，允許搜索引擎有效地爬取、理解和索引您的頁面，可能改善您的搜索排名和可見性。"
        }
      ]
    },
    guide: {
      title: "如何使用Markdown轉HTML轉換器：分步指南",
      step1: "<strong>輸入您的Markdown文本</strong>：首先在轉換器左側的輸入區域中輸入或貼上您的Markdown內容。如果您是Markdown新手或需要起點，使用\"載入範例\"按鈕查看基本語法、擴充功能或完整文章結構的範例。",
      step2: "<strong>選擇轉換選項</strong>：使用工具頂部的選項配置您的轉換首選項。您可以啟用\"即時預覽\"以立即查看更改，\"滾動同步\"使輸入和輸出區域一起滾動，\"淨化HTML\"移除潛在不安全元素，以及\"包含預設CSS\"為HTML輸出添加基本樣式。",
      step3: "<strong>預覽您的內容</strong>：在輸入或貼上內容時，右側的預覽區域將顯示您的Markdown渲染為HTML後的外觀。在\"預覽\"模式和\"HTML程式碼\"模式之間切換，前者查看格式化結果，後者查看實際生成的HTML標記。",
      step4: "<strong>完善您的Markdown</strong>：對您的Markdown文本進行必要調整，參考預覽確保您的格式顯示符合預期。如果啟用了即時轉換，轉換器會即時更新，讓您立即看到更改的效果。",
      step5: "<strong>格式化程式碼塊</strong>：對於技術內容，使用三個反引號(```)後跟語言名稱創建語法高亮程式碼塊。例如，在程式碼前使用```javascript，程式碼後使用```，可以為JavaScript程式碼添加適當的語法高亮。",
      step6: "<strong>複製生成的HTML</strong>：對轉換結果滿意後，點擊輸出區域上方的\"複製HTML\"按鈕（向上箭頭圖標）將HTML程式碼複製到剪貼簿。然後您可以將其貼上到您的網站編輯器、CMS或任何接受HTML的應用程式中。",
      step7: "<strong>下載為HTML文件</strong>：如果您需要保存完整的HTML文件，點擊\"下載HTML\"按鈕（下載圖標）將轉換結果保存為可以在任何網路瀏覽器中打開的HTML文件。"
    },
    conclusion: "Markdown轉HTML轉換器作為Markdown寫作簡單性與HTML網路顯示通用性之間的重要橋樑。通過提供直觀的界面、即時預覽和可自定義的輸出選項，這個工具簡化了部落格作者、開發人員、技術寫作者和內容管理者的內容創建工作流程。無論您是創建文件、部落格文章還是技術文章，這個轉換器都能幫助您專注於內容，同時確保它適合網路發布的格式正確。隨著Markdown和HTML持續作為數字內容生態系統中的基礎語言，能夠高效地在它們之間轉換的工具對現代內容創作者來說仍然是無價之寶。"
  }
}