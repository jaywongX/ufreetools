export default {
  title: "HTTP請求標頭編輯器：完整指南",
  features: {
    title: "了解HTTP請求標頭及其重要性",
    description: "<strong>HTTP請求標頭編輯器</strong>是一款強大的工具，專為開發人員、測試人員和API愛好者設計，用於建立、修改和驗證Web請求的HTTP標頭。這些標頭是HTTP通訊的關鍵組成部分，它們在客戶端和伺服器之間傳遞重要元數據，控制身份驗證、內容協商、快取行為等方面。<br><br>我們的<strong>標頭編輯工具</strong>提供了直觀的介面，使構建複雜的標頭集合、測試不同的配置以及以各種格式匯出結果以便在應用程式中實現變得簡單。無論您是在除錯API問題、開發新的整合，還是學習Web協定，這個工具都能簡化處理HTTP標頭的過程。",
    useCases: {
      title: "HTTP標頭編輯的實際應用",
      items: [
        "<strong>API身份驗證測試</strong>：在處理需要在標頭中使用身份驗證令牌或金鑰的API（如OAuth、JWT或API金鑰）時，我們的<strong>請求標頭建構器</strong>允許您快速建構和測試不同的身份驗證場景，而無需修改應用程式代碼。",
        
        "<strong>跨來源資源共用(CORS)除錯</strong>：對於需要進行跨來源請求的Web應用程式，配置和測試正確的Origin、Access-Control和預檢標頭組合至關重要。這個<strong>HTTP標頭工具</strong>通過允許您嘗試不同的標頭配置來幫助識別和解決CORS問題。",
        
        "<strong>內容協商</strong>：現代Web服務支援多種內容類型、語言和編碼。使用Accept、Accept-Language和Accept-Encoding等標頭，您可以測試伺服器如何回應不同的客戶端偏好，並確保您的應用程式正確實現內容協商。",
        
        "<strong>快取控制最佳化</strong>：正確配置的快取標頭可以顯著提高應用程式效能。通過我們的<strong>標頭管理工具</strong>，您可以嘗試各種Cache-Control指令、ETag配置和條件請求標頭，為您的資源找到最佳快取策略。",
        
        "<strong>安全標頭配置</strong>：為現代Web應用程式實現Content-Security-Policy、Strict-Transport-Security和X-Content-Type-Options等安全標頭至關重要。這個工具允許您在生產環境中實施之前建構和驗證這些複雜的安全標頭。",
        
        "<strong>API客戶端生成</strong>：在完成標頭集後，您可以匯出多種程式語言的即用代碼片段，使在應用程式代碼、curl指令或API測試工具中實現完全相同的標頭變得容易。"
      ]
    }
  },
  faq: {
    title: "關於HTTP標頭的常見問題",
    items: [
      {
        question: "什麼是HTTP請求標頭，為什麼它們很重要？",
        answer: "HTTP請求標頭是作為HTTP請求的一部分從客戶端（如瀏覽器或API客戶端）發送到伺服器的鍵值對。它們提供了關於請求、客戶端能力和偏好的重要元數據。<br><br>這些標頭很重要，因為它們：<br><br>• 控制<strong>身份驗證和授權</strong>機制<br>• 管理<strong>快取行為</strong>以提高效能<br>• 啟用<strong>內容協商</strong>（格式、語言、編碼）<br>• 配置<strong>跨來源請求</strong>和安全策略<br>• 提供用戶代理和引薦者資訊等<strong>客戶端上下文</strong><br><br>沒有適當的標頭，許多現代Web功能將無法正常工作，API將缺乏安全控制，Web效能也會顯著下降。"
      },
      {
        question: "Content-Type、Authorization和Accept等常見標頭有什麼區別？",
        answer: "這三個標頭在HTTP通訊中服務於不同的目的：<br><br><strong>Content-Type</strong>：指定請求主體中資源的媒體類型（發送數據時）或客戶端可以理解的內容類型（請求數據時）。常見值包括：<br>• <code>application/json</code> 用於JSON數據<br>• <code>application/x-www-form-urlencoded</code> 用於表單數據<br>• <code>multipart/form-data</code> 用於檔案上傳<br><br><strong>Authorization</strong>：包含用於向伺服器驗證客戶端身份的憑據。常見格式包括：<br>• <code>Bearer eyJhbGc...</code> 用於JWT/OAuth令牌<br>• <code>Basic dXNlcm5hbWU6cGFzc3dvcmQ=</code> 用於基本身份驗證<br>• <code>ApiKey 12345abcde...</code> 用於API金鑰身份驗證<br><br><strong>Accept</strong>：表示客戶端可以處理的回應內容類型。這使伺服器能夠在多個選項可用時提供最合適的格式。例如：<br>• <code>application/json</code> 接收JSON數據<br>• <code>text/html</code> 接收HTML內容<br>• <code>*/*</code> 接受任何內容類型<br><br>正確使用這些標頭可確保客戶端和伺服器之間的適當數據交換、安全身份驗證和最佳內容交付。"
      },
      {
        question: "如何測試我的標頭是否正常工作？",
        answer: "有效測試HTTP標頭涉及幾種方法：<br><br>1. <strong>使用我們的標頭編輯器工具</strong>建構您的標頭集並將其匯出為cURL指令或代碼片段，您可以直接執行。<br><br>2. <strong>瀏覽器開發者工具</strong>：大多數瀏覽器包含網路檢查工具，顯示所有請求標頭和伺服器回應。檢查您的標頭是否按預期發送，並檢查伺服器如何回應。<br><br>3. <strong>線上API測試服務</strong>：像Postman或Insomnia這樣的工具允許您設定自訂標頭並檢查完整的請求/回應週期。<br><br>4. <strong>回顯服務</strong>：使用像httpbin.org這樣的端點，它們將您的請求詳情反射回您，使驗證標頭傳輸變得容易。<br><br>5. <strong>伺服器日誌</strong>：如果您可以存取伺服器日誌，它們通常會記錄傳入的請求標頭，允許您驗證接收情況。<br><br>測試時，請注意這些常見問題：<br>• 標頭大小寫不正確（雖然HTTP標頭不區分大小寫，但某些實現可能很嚴格）<br>• 缺失或格式錯誤的授權令牌<br>• 您聲明的Content-Type與您發送的內容不匹配<br>• 跨來源請求的CORS標頭配置不正確"
      },
      {
        question: "我能否儲存和重用不同專案的標頭配置？",
        answer: "雖然出於隱私原因，我們當前的線上工具沒有實現持久儲存，但有幾種方法可以儲存和重用您的標頭配置：<br><br>1. <strong>匯出為代碼</strong>：使用匯出功能生成您首選語言（JavaScript、Python、cURL等）的代碼片段。這些片段可以儲存在您的專案儲存庫或文件中。<br><br>2. <strong>複製為原始文字</strong>：原始標頭格式可以複製並儲存在文字檔案、文件系統或團隊維基中，以供將來參考。<br><br>3. <strong>瀏覽器擴充功能</strong>：Chrome、Firefox和其他瀏覽器的幾個瀏覽器擴充功能允許儲存和管理不同網域和專案的標頭集。<br><br>4. <strong>API管理平台</strong>：像Postman或Insomnia這樣的工具提供工作區功能，用於組織和儲存不同的請求配置，包括標頭。<br><br>5. <strong>環境變數</strong>：對於開發工作流程，考慮在.env檔案或CI/CD管道中將標頭定義為環境變數。<br><br>對於致力於API或複雜Web應用程式的團隊，我們建議維護不同環境（開發、測試、生產）的標準標頭配置的中央儲存庫，以確保開發工作流程的一致性。"
      },
      {
        question: "使用HTTP標頭時應避免哪些常見錯誤？",
        answer: "在處理HTTP標頭時，請注意這些常見陷阱：<br><br>1. <strong>安全標頭遺漏</strong>：未能包含關鍵安全標頭如Content-Security-Policy、X-Content-Type-Options和Strict-Transport-Security可能會使應用程式容易受到攻擊。<br><br>2. <strong>不正確的Content-Type</strong>：Content-Type標頭與實際內容格式不匹配會導致解析錯誤。始終確保您的標頭準確反映您發送的數據格式。<br><br>3. <strong>Authorization標頭洩露</strong>：將身份驗證令牌發送到第三方服務或記錄它們可能會造成安全風險。請小心您的標頭髮送到何處。<br><br>4. <strong>缺少CORS標頭</strong>：對於向不同來源提供資源的應用程式，未能正確配置Access-Control-Allow-*標頭將導致跨來源請求失敗。<br><br>5. <strong>冗餘或矛盾的標頭</strong>：設定控制相同行為但具有不同值的多個標頭會產生不可預測的結果，因為伺服器行為各不相同。<br><br>6. <strong>大小寫敏感問題</strong>：雖然HTTP標頭名稱在技術上不區分大小寫，但某些實現可能會嚴格處理它們。在您的應用程式中保持一致的大小寫。<br><br>7. <strong>過於寬鬆的標頭</strong>：像Access-Control-Allow-Origin: *這樣的標頭或廣泛的Content-Security-Policy指令如果使用不當，可能會造成安全漏洞。<br><br>8. <strong>忽略標頭大小限制</strong>：某些伺服器限制HTTP標頭的總大小（通常為8KB）。非常大的cookie或授權令牌可能會超過這些限制。"
      }
    ]
  },
  guide: {
    title: "如何使用HTTP請求標頭編輯器：分步指南",
    step1: "<strong>將標頭新增到您的集合</strong>：點擊\"新增標頭\"按鈕建立新的標頭條目。每個標頭由名稱（如\"Content-Type\"或\"Authorization\"）和值組成。您可以根據需要為請求新增任意數量的標頭。對於常見標頭，您還可以使用\"常用標頭\"預設按鈕快速新增常用標頭。",
    step2: "<strong>輸入標頭名稱和值</strong>：對於每個標頭，輸入適當的名稱和值。標頭名稱應遵循HTTP約定（如\"Content-Type\"或\"Authorization\"），而值則根據標頭的用途而異。該工具將自動驗證您的輸入，確保它們格式正確。",
    step3: "<strong>使用批次編輯新增多個標頭</strong>：如果您需要一次新增多個標頭，請使用編輯器面板底部的批次編輯文字區",
    step4: "<strong>利用標頭指南參考</strong>：如果您不確定要使用哪些值，請參考工具右側的標頭指南部分。點擊標頭名稱如\"Content-Type\"或\"Authorization\"以查看常見值，並點擊它們以將它們新增到您的集合中。",
    step5: "<strong>選擇您喜歡的匯出格式</strong>：一旦您配置了標頭，從下拉選單中選擇所需的匯出格式。選項包括原始文字用於簡單複製、cURL用於命令列請求以及各種程式語言如JavaScript、Python等。",
    step6: "<strong>查看格式化輸出</strong>：工具將根據您的標頭和選定的匯出格式生成格式化代碼或文字。此輸出已準備好用於您的應用程式代碼、API測試工具或文件中。",
    step7: "<strong>將結果複製到剪貼簿</strong>：點擊\"複製\"按鈕將格式化輸出複製到剪貼簿。您可以將其直接貼上到代碼編輯器、終端或任何需要實現這些標頭的工具中。"
  },
  conclusion: "HTTP請求標頭編輯器簡化了建立、測試和實現HTTP標頭的複雜過程，為Web開發人員和API整合商提供了一個直觀的介面，支援多種匯出格式。隨著Web安全性和效能要求的不斷發展，正確配置的標頭變得越來越重要。這個工具幫助確保您的應用程式遵循HTTP通訊的最佳實踐，安全性和效能最佳化。"
}
