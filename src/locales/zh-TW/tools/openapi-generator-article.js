export default {
  title: "OpenAPI轉TypeScript：自動化API客戶端生成",
  overview: {
    title: "了解OpenAPI轉TypeScript生成器",
    content: "<strong>OpenAPI轉TypeScript客戶端生成器</strong>是一個專門的工具，可自動將OpenAPI規範（以前稱為Swagger）轉換為TypeScript接口和功能完整的API客戶端代碼。這種轉換通過確保類型安全並消除手動編寫API集成代碼的需求，簡化了前端開發過程。<br><br>OpenAPI規範作為前端和後端服務之間的標準化合約，描述了可用的端點、請求參數、響應結構和數據模型。通過利用此生成器，開發人員可以專注於構建功能而不是維護API集成代碼，同時受益於TypeScript強大的類型系統，在編譯時而非運行時捕獲潛在錯誤。"
  },
  useCases: {
    title: "OpenAPI轉TypeScript生成的常見用例",
    items: [
      {
        title: "複雜API的前端開發",
        description: "在處理大型或複雜的後端API時，手動編碼客戶端接口變得耗時且容易出錯。這個生成器創建與API規範完全匹配的準確TypeScript接口和客戶端代碼，確保前端和後端之間的一致性。"
      },
      {
        title: "微服務架構",
        description: "在具有多個API服務的微服務環境中，生成器便於與每個服務快速集成。隨著服務的發展，只需從更新的OpenAPI規範重新生成TypeScript客戶端即可保持同步。"
      },
      {
        title: "API版本遷移",
        description: "當升級到新的API版本時，為兩個版本生成TypeScript客戶端，以識別重大更改並在前端代碼中平穩實施遷移策略。"
      },
      {
        title: "開發人員入職",
        description: "新團隊成員可以通過檢查生成的TypeScript接口快速了解API功能，這些接口作為具有完整類型信息的綜合文檔。"
      },
      {
        title: "原型開發",
        description: "在快速原型開發期間，從草稿OpenAPI規範生成TypeScript客戶端，以便立即開始構建具有真實數據結構的UI組件，甚至在後端實現完成之前。"
      }
    ]
  },
  guide: {
    title: "使用OpenAPI轉TypeScript生成器的分步指南",
    intro: "按照以下步驟有效地將OpenAPI規範轉換為TypeScript接口和客戶端代碼：",
    steps: [
      {
        title: "準備您的OpenAPI規範",
        description: "確保您有一個有效的JSON或YAML格式的OpenAPI規範。該規範應定義您的API端點、請求參數、響應結構和數據模型。您可以上傳文件或直接將內容粘貼到文本區域。"
      },
      {
        title: "選擇生成選項",
        description: "根據您的需求配置生成選項：'導出所有模型定義'創建所有數據模型的TypeScript接口，'生成API客戶端代碼'生成API客戶端方法，'添加註釋和文檔說明'在生成的代碼中包含文檔，以及'使用TypeScript枚舉'為字符串字面量聯合創建TypeScript枚舉。"
      },
      {
        title: "生成TypeScript代碼",
        description: "點擊'生成TypeScript代碼'按鈕處理您的OpenAPI規範。工具將分析規範並根據您選擇的選項生成TypeScript接口和客戶端代碼。"
      },
      {
        title: "審查生成的代碼",
        description: "檢查輸出以確保它符合您的期望。生成的代碼包括請求/響應類型的接口以及具有每個API端點方法的客戶端類。"
      },
      {
        title: "複製或下載結果",
        description: "使用'複製代碼'按鈕將生成的TypeScript複製到剪貼板，或使用'下載代碼'將其保存為.ts文件。然後，您可以將此代碼集成到您的TypeScript項目中。"
      },
      {
        title: "與您的項目集成",
        description: "在您的應用程序代碼中導入生成的客戶端。使用您的API基礎URL和任何必需的標頭初始化客戶端，然後使用強類型方法進行API調用。"
      },
      {
        title: "API變更時更新",
        description: "每當您的API規範發生變化時，重新生成TypeScript代碼並更新您的代碼庫，以確保您的前端與後端API保持同步。"
      }
    ]
  },
  bestPractices: {
    title: "OpenAPI規範的最佳實踐",
    intro: "遵循這些最佳實踐創建高質量的OpenAPI規範，生成最佳的TypeScript代碼：",
    items: [
      "為每個端點使用描述性的操作ID，以在生成的客戶端中創建有意義的方法名稱",
      "為模式、屬性、參數和響應提供詳細描述，以生成有用的TypeScript註釋",
      "為模式和屬性使用一致的命名約定，以創建可預測的TypeScript接口",
      "在'components'部分定義可重用組件，以避免重複並促進代碼重用",
      "為所有屬性指定準確的數據類型，以生成精確的TypeScript類型",
      "在OpenAPI規範中包含示例，以幫助開發人員理解預期的數據結構",
      "對具有固定可能值集的屬性使用枚舉值，以創建TypeScript枚舉或聯合類型",
      "通過使用適當的標籤對相關操作進行分組，邏輯地組織端點",
      "對API進行版本控制，並清楚地指示重大更改，以便於前端遷移策略",
      "在生成TypeScript代碼之前使用lint工具或驗證器驗證您的OpenAPI規範"
    ]
  },
  faq: {
    title: "關於OpenAPI轉TypeScript生成的常見問題",
    items: [
      {
        question: "OpenAPI和Swagger有什麼區別？",
        answer: "OpenAPI是規範標準的當前名稱，而Swagger是其原始名稱。OpenAPI 3.0+是以前稱為Swagger 2.0的現代演變。此生成器支持OpenAPI 3.x和Swagger 2.0規範，儘管建議使用OpenAPI 3.x，因為它具有增強的功能和更好的TypeScript代碼生成。"
      },
      {
        question: "我可以自定義生成的TypeScript代碼嗎？",
        answer: "是的，生成器提供了幾個自定義選項：您可以選擇僅導出模型定義，生成客戶端代碼，添加文檔註釋，並使用TypeScript枚舉而不是字符串聯合。對於更廣泛的自定義，您可以手動修改生成的代碼，但請注意，重新生成將覆蓋這些更改。"
      },
      {
        question: "如何在生成的客戶端中處理身份驗證？",
        answer: "生成的客戶端在其構造函數中接受自定義標頭，您可以在其中提供身份驗證令牌。對於更複雜的身份驗證流程（如OAuth），您可能需要使用額外的邏輯擴展生成的客戶端，或創建一個處理令牌刷新和其他身份驗證問題的包裝器。"
      },
      {
        question: "我可以將其與React、Vue、Angular或其他框架一起使用嗎？",
        answer: "是的，生成的TypeScript客戶端與框架無關，可以與任何JavaScript或TypeScript框架一起使用。在React中，您可能會將客戶端包裝在自定義鉤子中；在Vue中，您可以創建組合式函數；在Angular中，您可以將客戶端擴展為可注入服務。"
      },
      {
        question: "如何使用生成的客戶端處理文件上傳？",
        answer: "對於在OpenAPI規範中定義的文件上傳（使用內容類型'multipart/form-data'），生成器會創建適當的方法簽名。調用這些方法時，您需要為請求正文構造FormData對象。確保您的OpenAPI規範正確定義文件上傳操作。"
      },
      {
        question: "如果我的OpenAPI規範有錯誤會怎樣？",
        answer: "生成器將嘗試識別規範中的常見問題並相應地提供錯誤消息。建議在生成之前使用專用驗證器驗證您的OpenAPI文檔。規範中的錯誤可能導致不正確或不完整的TypeScript代碼。"
      },
      {
        question: "如何保持TypeScript客戶端與API更改同步？",
        answer: "每當您的API發生變化並且OpenAPI規範更新時，重新生成TypeScript客戶端並在您的項目中更新它。考慮在構建流程中自動化此過程，以確保您的前端始終使用最新的API客戶端代碼。"
      }
    ]
  },
  integrationTips: {
    title: "集成生成的TypeScript客戶端的技巧",
    intro: "一旦您生成了TypeScript客戶端，請考慮這些建議以便與您的項目平穩集成：",
    items: [
      "在您的項目中創建一個專用的API客戶端模塊，該模塊重新導出帶有任何自定義配置的生成客戶端",
      "使用依賴注入模式在整個應用程序中提供API客戶端，使其更容易為測試進行模擬",
      "考慮為常見問題（如錯誤處理、日誌記錄和身份驗證）實現請求/響應攔截器",
      "將生成的客戶端方法包裝在處理特定錯誤情況或為應用程序需求轉換數據的自定義函數中",
      "將TypeScript客戶端的自動生成設置為CI/CD管道的一部分，以保持前端和後端同步",
      "使用環境變量或配置文件為不同環境（開發、預發布、生產）指定API基礎URL",
      "通過使用重試功能包裝生成的客戶端方法，為臨時故障添加重試邏輯",
      "為頻繁訪問的數據實現請求緩存，以提高性能並減少API調用",
      "將生成的類型與狀態管理庫（如Redux、MobX或Vuex）結合使用，以實現類型安全的應用程序狀態",
      "如果發現自己進行許多小請求，請考慮實現請求批處理或GraphQL以優化API調用"
    ]
  }
}
