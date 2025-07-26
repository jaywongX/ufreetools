export default {
  title: "gRPC除錯器：遠程過程呼叫互動式測試工具",
  features: {
    title: "了解gRPC除錯和API測試",
    description: "<strong>gRPC除錯器</strong>是一款綜合性的基於Web的工具，設計用於直接從瀏覽器測試、除錯和探索gRPC服務。與傳統的REST API客戶端不同，這款<strong>協議緩衝區測試工具</strong>提供了專門針對gRPC二進制協議和Protocol Buffers (protobuf)訊息格式的特殊功能，允許開發人員無需編寫自定義客戶端代碼即可與gRPC服務互動。<br><br>我們的<strong>gRPC客戶端測試器</strong>支援包括proto文件解析、服務發現、通過動態表單構建進行請求構造、元數據管理和完整響應可視化等核心功能。這使其成為API開發人員處理現代微服務架構的不可或缺的工具，這些架構利用gRPC實現服務之間高效、強類型和高性能的通訊。",
    useCases: {
      title: "gRPC測試的實際應用場景",
      items: [
        "<strong>微服務API開發</strong>：在構建基於微服務架構的分散式系統時，<strong>gRPC測試工具</strong>允許開發人員驗證服務端點、驗證訊息格式並確保正確實現proto文件中定義的服務契約。這種互動式驗證有助於在服務整合之前儘早發現問題。",
        "<strong>API整合測試</strong>：對於使用第三方或內部gRPC服務的應用程式，我們的除錯器提供了一種方法來探索可用的方法、測試不同的輸入參數並理解響應格式，而無需編寫測試客戶端。工程師可以通過首先通過手動測試了解預期行為來快速原型化整合代碼。",
        "<strong>解決生產問題</strong>：當在使用gRPC的生產系統中遇到意外行為時，除錯器允許支援工程師和開發人員在受控環境中複製特定請求、操作參數並觀察響應。這種隔離有助於確定問題是源於客戶端實現、服務邏輯還是網路配置。",
        "<strong>Protocol Buffer架構開發</strong>：在API的設計階段，<strong>protobuf檢查器</strong>功能通過可視化抽象訊息定義如何轉換為具體的請求和響應結構來幫助驗證架構定義。這種反饋迴圈在廣泛實施前改進proto文件設計。",
        "<strong>性能分析</strong>：除錯器提供請求的時間信息，允許開發人員在不同條件下對gRPC服務性能進行基準測試。通過測試各種有效負載大小和複雜性，團隊可以識別其服務實現中的潛在性能瓶頸。",
        "<strong>文檔和知識共享</strong>：<strong>gRPC服務瀏覽器</strong>的可視界面使向非技術利益相關者、新團隊成員或合作夥伴展示API功能變得更加容易。該工具作為靜態API文檔的互動式替代品，通過實際範例幫助他人理解服務功能。"
      ]
    }
  },
  faq: {
    title: "關於gRPC除錯的常見問題",
    items: [
      {
        question: "gRPC和REST API有什麼區別？",
        answer: "gRPC和REST代表了API設計的不同方法，具有不同的特性，影響著何時應使用每種方法。<br><br><strong>gRPC</strong>是一個高性能的RPC(遠程過程呼叫)框架，使用Protocol Buffers進行訊息序列化並通過HTTP/2運行。主要優勢包括：<br><br>• <strong>契約優先方法</strong>，在.proto文件中定義嚴格類型的接口<br>• <strong>高效的二進制序列化</strong>，產生更小的訊息大小<br>• <strong>內建串流支援</strong>（一元、伺服器串流、客戶端串流和雙向串流）<br>• 通過HTTP/2的<strong>多路複用連接</strong>減少延遲<br>• 跨多種語言的<strong>代碼生成</strong>確保類型安全<br><br><strong>REST</strong>(表述性狀態轉移)是一種架構風格，通常使用HTTP/1.1上的JSON，提供：<br><br>• 由於廣泛採用而帶來的<strong>簡單性和熟悉性</strong><br>• 像JSON或XML這樣的<strong>人類可讀格式</strong><br>• 無需額外庫的<strong>原生瀏覽器支援</strong><br>• 客戶端和伺服器之間的<strong>鬆散耦合</strong><br>• 用於測試和文檔的<strong>廣泛工具生態系統</strong><br><br><strong>gRPC除錯器</strong>彌補了gRPC的工具差距，為傳統上需要自定義客戶端代碼才能測試的gRPC服務提供類似REST的探索功能。"
      },
      {
        question: "如何創建.proto文件用於測試？",
        answer: "創建<strong>Protocol Buffer定義文件</strong>(.proto)是gRPC開發的基本步驟。以下是使用我們的除錯器創建測試文件的指南：<br><br>1. <strong>定義語法版本</strong>：使用`syntax = \"proto3\";`開始文件，使用最新的proto語法版本。<br><br>2. <strong>使用包組織</strong>：使用`package`關鍵字對相關服務和訊息進行分組，這有助於避免名稱衝突（例如，`package ecommerce;`）。<br><br>3. <strong>定義訊息</strong>：創建表示您將使用的數據結構的訊息類型：<br><pre>message Product &#123;\n  string id = 1;\n  string name = 2;\n  double price = 3;\n  repeated string categories = 4;\n&#125;</pre><br>4. <strong>定義服務</strong>：指定服務接口及其方法：<br><pre>service ProductService &#123;\n  rpc GetProduct(GetProductRequest) returns (Product);\n  rpc SearchProducts(SearchRequest) returns (stream Product);\n  rpc UpdateProduct(Product) returns (UpdateResponse);\n&#125;</pre><br>5. <strong>導入其他proto</strong>：使用`import \"path/to/other.proto\";`引用其他文件中的定義。<br><br>6. <strong>添加字段選項</strong>：使用選項如`[deprecated=true]`或自定義選項增強字段以獲得特定行為。<br><br>使用我們的<strong>gRPC除錯器</strong>測試時，您可以直接上傳此文件或將其內容貼上到文字輸入區域。除錯器將解析文件並生成適當的表單界面，用於構建對您服務的請求。"
      },
      {
        question: "這個工具能否連接到安全的gRPC服務(SSL/TLS)？",
        answer: "是的，<strong>gRPC除錯器</strong>支援連接到使用SSL/TLS加密的安全gRPC服務。以下是它如何處理安全連接：<br><br>1. <strong>基於瀏覽器的限制</strong>：由於這是在瀏覽器中運行的基於Web的工具，它在瀏覽器安全約束內運行。它可以連接到：<br><br>• 支援<strong>gRPC-Web協議</strong>的服務（與標準gRPC略有不同）<br>• 具有正確配置的<strong>CORS（跨源資源共享）</strong>頭的服務<br>• 具有有效SSL證書的服務（在大多數情況下不是自簽名的）<br><br>2. <strong>使用TLS</strong>：連接到安全服務時，確保：<br><br>• 使用<strong>\"https://\"</strong>前綴或明確啟用<strong>\"使用TLS/SSL\"</strong>選項<br>• 服務必須具有瀏覽器信任的有效證書<br>• 檢查是否需要客戶端證書認證（相互TLS）<br><br>3. <strong>認證選項</strong>：對於需要認證的服務，您可以添加：<br><br>• 通過元數據的<strong>API密鑰</strong>或<strong>訪問令牌</strong><br>• <strong>基本認證</strong>頭<br>• 授權頭中的<strong>OAuth令牌</strong><br><br>4. <strong>代理考慮</strong>：在某些企業環境中，可能需要在瀏覽器和實際的gRPC服務之間使用gRPC-Web代理（如Envoy）。<br><br>如果您測試的內部服務不滿足這些要求，請考慮使用桌面gRPC客戶端或設置本地代理來處理安全要求並為除錯器公開兼容的端點。"
      },
      {
        question: "為什麼在發送請求前需要解析proto文件？",
        answer: "解析proto文件是使用<strong>gRPC除錯器</strong>時的關鍵第一步，原因如下：<br><br>1. <strong>類型發現和驗證</strong>：gRPC是一個強類型系統，客戶端和伺服器必須就訊息的確切格式達成一致。proto文件作為定義以下內容的契約：<br><br>• 哪些<strong>服務和方法</strong>可用<br>• 每個方法期望的<strong>參數類型</strong><br>• 每個方法返回的<strong>響應類型</strong><br>• API中使用的任何<strong>嵌套訊息結構</strong>或<strong>枚舉</strong><br><br>2. <strong>動態界面生成</strong>：解析後，除錯器可以：<br><br>• 顯示可用服務和方法的列表<br>• 使用正確的字段構建適當的請求表單<br>• 提供類型特定的輸入控件（文字字段、數字輸入、布爾值的切換等）<br>• 根據字段類型設置適當的預設值<br><br>3. <strong>二進制序列化</strong>：gRPC使用Protocol Buffers作為其二進制傳輸格式。proto定義允許除錯器：<br><br>• 將您的JSON輸入<strong>序列化</strong>為正確的二進制protobuf格式<br>• 將二進制響應<strong>反序列化</strong>回可讀的JSON<br>• 確保<strong>字段編號和類型</strong>與伺服器期望的完全匹配<br><br>4. <strong>錯誤預防</strong>：沒有適當的解析，您可能會發送格式不正確的請求，這些請求會在到達服務邏輯之前在序列化級別失敗。<br><br>將proto文件視為API文檔和序列化模式的結合。<strong>gRPC協議</strong>從根本上需要這些信息才能正常運行，這與REST API不同，使用REST API時，您可能在幾乎沒有預先了解的情況下探索端點。"
      },
      {
        question: "我可以用這個除錯器測試哪些類型的gRPC方法？",
        answer: "這個<strong>gRPC除錯器</strong>支援gRPC規範中定義的所有四種通訊模式，每種模式都適用於不同的使用場景：<br><br>1. <strong>一元RPC</strong>：標準的請求-響應模式，客戶端發送單個請求並接收單個響應。這與傳統的REST API呼叫最相似，適用於：<br><br>• 簡單的數據檢索操作<br>• 創建、更新或刪除操作<br>• 認證和驗證請求<br><br>範例：`rpc GetUser(GetUserRequest) returns (User);`<br><br>2. <strong>伺服器串流RPC</strong>：客戶端發送單個請求並接收一系列響應訊息。該模式適用於：<br><br>• 實時數據源<br>• 長時間運行操作的進度更新<br>• 大型數據集檢索與漸進式載入<br><br>範例：`rpc ListProducts(ListRequest) returns (stream Product);`<br><br>3. <strong>客戶端串流RPC</strong>：客戶端發送一系列訊息並接收單個響應。這種方法適用於：<br><br>• 上傳大型數據集<br>• 持續傳輸傳感器數據<br>• 產生單一結果的批量操作<br><br>範例：`rpc UploadData(stream DataChunk) returns (UploadSummary);`<br><br>4. <strong>雙向串流RPC</strong>：客戶端和伺服器可以按任意順序發送和接收多條訊息。這種完全非同步的模式支援：<br><br>• 聊天應用程式<br>• 實時遊戲或協作<br>• 涉及來回通訊的複雜工作流<br><br>範例：`rpc Chat(stream ChatMessage) returns (stream ChatMessage);`<br><br>我們的除錯器為每種類型提供適當的界面元素，允許您測試所有通訊模式，並提供串流響應的可視反饋和從客戶端發送串流訊息的適當控件。"
      }
    ]
  },
  guide: {
    title: "如何使用gRPC除錯器：分步指南",
    step1: "<strong>定義gRPC服務URL</strong>：在URL字段中輸入您的gRPC服務地址。對於基於瀏覽器的測試，這應該是支援gRPC-Web協議並啟用了適當CORS頭的服務。如果您測試的是安全服務，請確保使用HTTPS協議（例如，https://your-grpc-service.com）。",
    step2: "<strong>設置超時和連接選項</strong>：根據您的服務預期的響應時間配置請求超時（以毫秒為單位）。預設的30000ms（30秒）適用於大多數服務，但可能需要針對長時間運行的操作或在緩慢網路上測試時進行調整。",
    step3: "<strong>提供Protocol Buffer定義</strong>：您可以通過將.proto文件拖放到上傳區域或點擊從設備選擇它們來上傳.proto文件，或者使用切換開關切換到文字輸入模式，直接貼上您的Proto定義。對於初學者，\"載入範例Proto\"選項提供了一個起始模板，幫助理解格式。",
    step4: "<strong>解析Proto定義</strong>：點擊\"解析Proto定義\"按鈕處理您的.proto文件。這將分析服務接口、訊息類型和字段定義，使除錯器能夠生成適當的請求表單並正確序列化/反序列化訊息。如果您的proto文件中有任何語法錯誤，您將收到錯誤訊息以幫助識別問題。",
    step5: "<strong>選擇服務和方法</strong>：解析成功後，從下拉列表中選擇特定服務（如果您的proto文件定義了多個服務）。然後從可用方法列表中選擇要測試的方法。將指示方法類型（一元、伺服器串流、客戶端串流或雙向串流），以幫助您理解預期的通訊模式。",
    step6: "<strong>構建和自定義您的請求</strong>：除錯器為所選方法的請求類型生成JSON模板。修改提供的JSON結構以包含您的測試值。編輯器自動格式化和驗證您的JSON內容，確保它匹配預期的訊息結構。如果需要，您可以使用格式按鈕清理您的JSON。",
    step7: "<strong>發送請求並分析響應</strong>：點擊\"發送請求\"按鈕將您的gRPC呼叫傳輸到服務。對於一元呼叫，您將在響應部分看到顯示的響應數據，以及計時信息。對於串流呼叫，您將看到響應訊息在到達時顯示。如果發生任何錯誤，除錯器將顯示錯誤詳情以幫助排除故障。"
  },
  conclusion: "gRPC除錯器提供了一個直觀的基於瀏覽器的界面，用於與強大但複雜的gRPC服務世界互動。通過橋接人類操作者和gRPC二進制協議之間的差距，這個工具顯著簡化了開發、測試和排除現代API服務問題的過程。無論您是設計新的微服務架構、整合現有gRPC服務，還是診斷生產系統中的問題，這個除錯器提供的可視化方法都能降低學習曲線並加速開發工作流程。隨著越來越多的組織採用gRPC以獲得其性能和強類型優勢，擁有可訪問的測試工具對於確保API質量和可靠性變得越來越有價值。"
}
