export default {
  name: 'WebSocket測試器',
  description: '連接到WebSocket伺服器，發送訊息並查看回應',
  connection: {
    url: 'WebSocket地址',
    urlPlaceholder: '例如: ws://echo.websocket.org',
    protocol: '子協議 (可選)',
    protocolPlaceholder: '逗號分隔',
    connect: '連接',
    disconnect: '斷開',
    status: '連接狀態',
    connected: '已連接',
    disconnected: '未連接',
    waiting: '等待連接',
    autoReconnect: '自動重連',
    reconnectMessage: '將在 {0} 秒後嘗試重新連接...'
  },
  options: {
    title: '選項',
    autoScroll: '自動滾動日誌'
  },
  messages: {
    send: '發送訊息',
    logs: '訊息日誌',
    emptyLogs: '連接後的訊息將顯示在這裡',
    placeholder: '輸入要發送的訊息...',
    sendButton: '發送',
    clearButton: '清空',
    copyButton: '複製',
    clearLogs: '清空日誌',
    copyLogs: '複製日誌',
    format: {
      title: '格式',
      text: '純文字',
      json: 'JSON',
      binary: '二進制'
    },
    templates: {
      json: 'JSON',
      text: '文字'
    },
    types: {
      sent: '發送 →',
      received: '接收 ←',
      error: '錯誤 !',
      info: '資訊'
    }
  },
  savedConnections: {
    title: '已保存的連接',
    empty: '暫無保存的連接',
    save: '保存當前連接',
    saveConnection: '保存連接',
    connectionName: '連接名稱',
    load: '載入',
    delete: '刪除',
    cancel: '取消'
  },
  testServers: {
    title: '測試伺服器',
    description: '以下是一些可用於測試的公共WebSocket伺服器:',
    useServer: '使用此伺服器',
    servers: {
      echo: {
        name: 'Echo測試',
        description: '安全的回顯測試伺服器，支援WSS連接'
      },
      postman: {
        name: 'WebSocket.org',
        description: 'Postman提供的Echo服務，支援WSS'
      }
    }
  },
  logs: {
    connectingTo: '正在連接到 {0}...',
    connectionSuccess: '連接成功',
    connectionError: 'WebSocket錯誤',
    connectionClosed: '連接關閉 (代碼: {0}{1})',
    invalidJson: '無效的JSON格式: {0}',
    sendFailed: '發送失敗: {0}',
    emptyMessage: '訊息不能為空',
    notConnected: '未連接WebSocket',
    copied: '日誌已複製到剪貼簿',
    copyFailed: '複製失敗: {0}',
    serverSelected: '已選擇伺服器: {0}',
    binaryData: '[二進制數據]'
  },
  article: {
    title: "WebSocket測試器：即時通訊測試工具",
    features: {
      title: "瞭解WebSocket技術及其應用",
      description: "<strong>WebSocket測試器</strong>是一款綜合工具，專為測試、除錯和探索使用WebSocket協議進行的客戶端與伺服器之間的即時通訊而設計。與傳統的HTTP連接不同，傳統HTTP連接需要為每次互動發起新請求，而WebSocket提供持久的雙向通訊通道，這些通道在任一方明確關閉之前保持開放狀態。<br><br>這款<strong>WebSocket客戶端工具</strong>允許開發人員建立與WebSocket伺服器的連接，發送各種格式（文字、JSON或二進制）的自訂訊息，並即時查看回應。借助連接管理、訊息日誌記錄和格式驗證等功能，這個<strong>即時通訊測試器</strong>提供了在不同平台和環境中開發和除錯WebSocket實現所需的一切。",
      useCases: {
        title: "WebSocket測試的實際應用場景",
        items: [
          "<strong>API開發和除錯</strong>：在開發基於WebSocket的API時，<strong>WebSocket除錯工具</strong>允許您連接到開發端點，發送測試訊息，並驗證伺服器是否對不同的請求格式和邊緣情況做出正確回應。這種互動式測試方法有助於在開發週期的早期識別問題，遠在客戶端嘗試連接到您的服務之前。",
          
          "<strong>即時應用程式測試</strong>：對於依賴<strong>即時數據流</strong>的應用程式，如聊天系統、即時儀表板或協作平台，此測試器讓您能夠模擬客戶端連接，並驗證訊息傳遞、事件廣播和狀態同步按預期工作。您可以測試訊息傳遞延遲、伺服器推送通知和客戶端訂閱機制。",
          
          "<strong>物聯網設備通訊</strong>：物聯網設備經常使用WebSocket建立與中央伺服器或雲平台的<strong>輕量級持久連接</strong>。WebSocket測試器可以模擬物聯網設備通訊模式，幫助您測試設備註冊、命令傳輸、遙測報告和其他基本的物聯網通訊流程，無需部署物理硬體。",
          
          "<strong>遊戲伺服器互動</strong>：線上多人遊戲經常依靠WebSocket實現<strong>即時玩家互動</strong>和遊戲狀態更新。遊戲開發人員可以使用此工具測試伺服器對玩家行為的回應，驗證遊戲狀態同步，並在不同條件下測量訊息吞吐量和延遲等性能特徵。",
          
          "<strong>金融數據流</strong>：交易平台和金融服務利用WebSocket提供<strong>即時市場數據</strong>和處理交易。WebSocket測試器允許金融應用開發人員驗證對數據流的訂閱，測試市場事件處理，並確保對時間敏感的金融資訊進行可靠處理。",
          
          "<strong>生產環境問題排查</strong>：當在生產環境中遇到連接或訊息傳遞問題時，支援工程師可以使用<strong>WebSocket連接測試器</strong>複製用戶場景，驗證伺服器可用性，並診斷訊息格式或協議問題，而無需修改生產應用程式代碼。"
        ]
      }
    },
    faq: {
      title: "關於WebSocket測試的常見問題",
      items: [
        {
          question: "WebSocket和HTTP之間有什麼區別？",
          answer: "WebSocket和HTTP在Web應用程式中滿足不同的通訊需求。HTTP是一種請求-回應協議，每次互動都需要由客戶端發起的新連接。客戶端發送請求，伺服器回應，然後連接關閉。這種模式適用於傳統的網頁瀏覽，但對即時應用程式來說會產生大量開銷。<br><br>另一方面，WebSocket在客戶端和伺服器之間建立<strong>持久連接</strong>，該連接在明確關閉前一直保持開放狀態。在初始握手（通過HTTP進行）之後，連接升級到WebSocket協議，允許客戶端和伺服器隨時發送訊息，無需額外的連接開銷。與基於輪詢的HTTP方法相比，這種<strong>全雙工通訊</strong>實現了真正的即時應用，具有更低的延遲和頻寬使用率。我們的WebSocket測試工具通過讓您建立WebSocket連接並體驗雙向訊息交換功能，幫助您親身探索這些差異。"
        },
        {
          question: "為什麼我的WebSocket連接在一段時間不活動後會斷開？",
          answer: "WebSocket連接可能在不活動期間斷開，這是由於客戶端和伺服器之間網路路徑中的幾個因素造成的。最常見的原因包括：<br><br>• <strong>代理超時</strong>：企業代理、負載均衡器或網路閘道通常有空閒連接超時，會關閉不活動的連接以節省資源。<br>• <strong>防火牆設定</strong>：網路防火牆可能有會話超時策略，終止最近沒有活動的長期連接。<br>• <strong>伺服器端超時</strong>：許多WebSocket伺服器實現自己的不活動超時來管理資源。<br>• <strong>客戶端網路變化</strong>：移動設備在網路之間切換或進入休眠模式會中斷連接。<br><br>要維持持久的WebSocket連接，請實現<strong>心跳機制</strong>，定期（通常每30-45秒）交換小型ping/pong訊息。這保持連接活躍，防止中間網路組件關閉它。我們的WebSocket測試工具包含自動重連功能，可幫助您測試連接彈性和恢復策略。"
        },
        {
          question: "我可以使用WebSocket測試器連接安全連接(WSS)嗎？",
          answer: "是的，<strong>WebSocket測試器</strong>完全支援安全WebSocket連接(WSS)，這些連接通過TLS/SSL運行，類似於HTTPS如何用於常規Web流量。連接到WSS端點（以\"wss://\"開頭的URL）時，我們的工具自動處理TLS握手和憑證驗證過程。<br><br>安全WebSocket對以下方面至關重要：<br><br>• 保護客戶端和伺服器之間傳輸的敏感數據<br>• 滿足安全通訊的合規要求<br>• 連接到託管在HTTPS域上的服務（由於現代瀏覽器限制混合內容）<br>• 防止中間人攻擊和訊息篡改<br><br>該工具與安全(WSS)和非安全(WS)端點無縫配合，允許您測試本地主機上的開發伺服器或生產級安全服務。在開發過程中使用自簽名憑證進行測試時，請注意，雖然我們的基於Web的工具必須遵守瀏覽器安全策略，但您仍然可以建立與正確配置的安全WebSocket伺服器的連接。"
        },
        {
          question: "如何為WebSocket通訊正確格式化JSON訊息？",
          answer: "為WebSocket通訊正確格式化JSON訊息對於與大多數現代WebSocket API成功互動至關重要。以下是需要遵循的關鍵做法：<br><br>1. <strong>有效的JSON語法</strong>：確保您的訊息遵循正確的JSON格式，包括帶引號的鍵、適當使用數據類型和平衡的大括號。我們的WebSocket測試器的JSON格式選項在發送前自動驗證您的JSON。<br><br>2. <strong>訊息結構</strong>：大多數WebSocket API期望特定的訊息結構，通常包括：<br>• 訊息類型或動作字段（例如，\"type\": \"subscribe\"）<br>• 包含實際資訊的數據負載<br>• 可選的元數據，如訊息ID或時間戳<br><br>結構良好的訊息示例：<br><pre>&#123;<br>  \"type\": \"subscribe\",<br>  \"channel\": \"market_data\",<br>  \"symbols\": [\"BTC/USD\", \"ETH/USD\"],<br>  \"requestId\": \"12345\"<br>&#125;</pre><br><br>3. <strong>轉義特殊字符</strong>：在JSON字符串值中包含引號或反斜杠時，確保它們被正確轉義。<br><br>4. <strong>使用適當的數據類型</strong>：發送數字作為數字（不帶引號），布林值作為true/false，數組使用方括號。<br><br>我們的WebSocket測試器提供了JSON模板選項，幫助您開始使用格式正確的訊息。"
        },
        {
          question: "如何保存和重複使用WebSocket連接進行反覆測試？",
          answer: "<strong>WebSocket測試器</strong>提供了幾個功能，幫助您保存和重複使用連接配置，實現高效的重複測試：<br><br>1. <strong>連接管理</strong>：該工具允許您使用自訂名稱保存WebSocket連接，以便於識別。每個保存的配置都存儲WebSocket URL和可選的子協議。<br><br>2. <strong>一鍵重連</strong>：保存的連接可以被載入並通過單擊連接，無需在測試會話期間重複輸入連接詳情。<br><br>3. <strong>持久存儲</strong>：您的保存的連接存儲在瀏覽器的本地存儲中，這意味著它們會在瀏覽器會話和重啟之間保持可用。<br><br>4. <strong>測試訊息模板</strong>：除了保存連接外，您還可以使用提供的JSON和文字模板高效地測試常見訊息模式。<br><br>5. <strong>測試伺服器快捷方式</strong>：如果沒有自己的伺服器進行快速測試，該工具包括可靠的公共WebSocket回顯伺服器的快捷方式。<br><br>這個全面的<strong>連接管理系統</strong>對於在不同環境（開發、暫存、生產）中使用多個WebSocket端點的開發人員或那些常規測試需要不同連接參數的各種API操作的人特別有價值。"
        }
      ]
    },
    guide: {
      title: "使用WebSocket測試器的步驟指南",
      steps: [
        "<strong>輸入WebSocket URL</strong>：首先在URL字段中輸入WebSocket伺服器地址。WebSocket URL以'ws://'開頭表示標準連接，或以'wss://'開頭表示安全連接（類似於http://和https://）。如果您沒有可測試的WebSocket伺服器，可以從工具底部的\"測試伺服器\"部分選擇一個提供的測試伺服器。",
        "<strong>配置連接選項</strong>：如果您的WebSocket伺服器需要特定子協議，請在\"子協議\"字段中以逗號分隔的列表形式輸入它們。如果希望工具在連接意外斷開時自動嘗試重新連接，您還可以啟用\"自動重連\"。\"自動滾動日誌\"選項可保持訊息日誌滾動到最新訊息。",
        "<strong>建立連接</strong>：點擊\"連接\"按鈕啟動WebSocket連接。連接狀態指示器在握手過程中會顯示\"正在連接\"，然後在成功時變為\"已連接\"，或在連接嘗試失敗時變為\"未連接\"。任何連接事件或錯誤都會顯示在訊息日誌區域。",
        "<strong>準備您的訊息</strong>：連接成功後，您可以在\"發送訊息\"文字區域中輸入要發送的訊息。使用格式下拉菜單為您的訊息選擇適當的格式：\"純文字\"用於簡單字符串訊息，\"JSON\"用於發送結構化數據（工具將驗證JSON格式），或\"二進制\"用於發送二進制數據。",
        "<strong>發送和監控訊息</strong>：點擊\"發送\"按鈕將您的訊息傳輸到WebSocket伺服器。發送的訊息將在\"訊息日誌\"區域顯示，帶有時間戳和\"發送\"標籤。當伺服器回應時，傳入訊息將以\"接收\"標籤顯示。您可以根據需要使用各自的清除按鈕清除訊息輸入字段或日誌。",
        "<strong>保存連接供將來使用</strong>：如果您將頻繁測試此WebSocket端點，點擊\"保存當前連接\"存儲連接詳情。系統將提示您為此連接提供名稱。保存的連接出現在\"已保存的連接\"面板中，以便在未來的測試會話中快速訪問。",
        "<strong>分析通訊模式</strong>：使用按時間順序排列的訊息日誌分析客戶端和伺服器之間訊息的順序和時間。這有助於識別訊息處理、回應時間或通訊協議中的問題。出於除錯目的，您可以複製整個日誌以與團隊成員共享或用於錯誤報告中的文檔。"
      ]
    },
    conclusion: "WebSocket測試器作為開發即時應用程式的開發人員的重要工具，能夠高效測試和除錯WebSocket連接，無需自訂客戶端實現。通過提供用於建立連接、以各種格式發送訊息和監控雙向通訊的可視界面，它顯著加速了基於WebSocket的應用程式的開發工作流程。無論您是構建聊天系統、即時儀表板、物聯網平台還是多人遊戲，這個測試器都提供了確保您的WebSocket實現提供可靠、即時通訊所需的功能。隨著Web應用程式不斷向更具互動性、即時體驗的方向發展，擁有一個專門用於測試這一關鍵通訊層的工具對於在各種網路條件和客戶端平台上維持高質量用戶體驗變得越來越有價值。"
  }
}