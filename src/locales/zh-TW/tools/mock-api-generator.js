export default {
  name: 'Mock API生成器',
  description: '根據OpenAPI規範自動生成Mock API',
  options: {
    version: 'OpenAPI版本',
    format: '輸出格式',
    includeExamples: '包含範例響應',
    responseDynamism: '響應動態性',
    responseType: '響應類型',
    arrayLength: '陣列長度',
    responseFormat: '響應格式'
  },
  formats: {
    json: 'JSON Server',
    express: 'Express.js',
    mockjs: 'Mock.js',
    msw: 'Mock Service Worker'
  },
  actions: {
    generate: '生成Mock',
    preview: '預覽API',
    clear: '清除',
    copy: '複製程式碼',
    download: '下載',
    uploadSpec: '上傳OpenAPI規範',
    uploadJava: '上傳Java類別檔案',
    generateJson: '生成JSON',
    generateBuilder: '生成Builder',
    format: '美化'
  },
  messages: {
    copied: '已複製到剪貼簿！',
    generationSuccess: 'Mock API生成成功',
    generationError: '生成Mock API時出錯',
    specRequired: '請提供OpenAPI規範',
    fileUploaded: '已上傳',
    parseError: '解析Java類別失敗，請確保檔案格式正確'
  },
  help: {
    uploadHint: '支援上傳 .java 檔案，自動解析類別結構生成Mock配置 暫未支援多層物件屬性'
  },
  fields: {
    title: '欄位定義',
    addField: '新增欄位',
    addChildField: '新增子欄位',
    fieldName: '欄位名稱'
  },
  fieldTypes: {
    string: '字串',
    number: '數字',
    boolean: '布林值',
    date: '日期',
    name: '姓名',
    email: '電子郵件',
    phone: '電話',
    address: '地址',
    id: 'ID',
    image: '圖片URL',
    array: '陣列',
    object: '物件'
  },
  array: {
    itemType: '陣列項類型',
    arrayFields: '陣列項欄位'
  },
  object: {
    childFields: '子欄位'
  },
  responseTypes: {
    object: '單一物件',
    array: '物件陣列',
    custom: '自訂結構'
  },
  responseFormats: {
    dataOnly: '僅資料',
    standard: '標準REST響應 (code, data, message)'
  },
  placeholder: {
    output: '// 生成的Mock資料將顯示在這裡'
  },
  article: {
    title: "瞭解Mock API生成器在前端開發中的應用",
    overview: {
      title: "什麼是Mock API生成器？",
      content: "<strong>Mock API生成器</strong>是一種專門的工具，可以根據OpenAPI規範或自訂欄位定義建立模擬API端點和響應。這個強大的開發工具通過提供模仿實際API行為的真實資料結構，幫助前端開發人員獨立於後端團隊工作。<br><br>Mock API生成器建立功能完備的端點，根據您的規範返回一致的、結構化的資料。這使得前端開發可以在不等待實際後端實現的情況下進行，顯著加速開發過程並實現平行工作流。"
    },
    useCases: {
      title: "Mock API生成的常見應用場景",
      items: [
        {
          title: "後端完成前的前端開發",
          description: "當後端API仍在開發中或尚未實現時，模擬API允許前端開發人員開始使用真實資料結構建構UI元件，避免開發瓶頸。"
        },
        {
          title: "UI原型設計和測試",
          description: "使用受控資料集建立快速原型或測試UI元件，使設計師和開發人員能夠在不連接實際後端服務的情況下，使用真實資料驗證介面。"
        },
        {
          title: "離線開發",
          description: "通過提供模擬實際API響應的本地模擬API伺服器，使開發人員能夠在離線或無法存取生產或暫存API的環境中工作。"
        },
        {
          title: "邊緣情況測試",
          description: "生成複製邊緣情況或在真實後端環境中可能難以觸發的錯誤條件的特定API響應，允許徹底測試錯誤處理和邊界條件。"
        },
        {
          title: "效能測試",
          description: "建立模擬不同響應時間或負載大小的模擬API，以測試前端元件如何處理各種效能場景，從最佳到降級條件。"
        },
        {
          title: "演示環境",
          description: "建構不需要連接到真實後端服務的完全功能性演示環境，非常適合銷售演示、培訓或展覽用途。"
        }
      ]
    },
    guide: {
      title: "如何使用Mock API生成器",
      intro: "按照以下步驟有效建立和使用模擬API來支援您的開發工作流：",
      steps: [
        {
          title: "選擇輸入方法",
          description: "首先選擇您希望如何定義API結構。您可以上傳OpenAPI規範（推薦用於與實際API保持一致性）、上傳Java類別檔案以自動提取資料結構，或通過介面手動定義欄位和類型。"
        },
        {
          title: "定義資料結構",
          description: "如果不使用OpenAPI規範，通過新增欄位並設定其類型（字串、數字、布林值、日期等）來定義模擬資料的結構。對於複雜結構，建立巢狀物件或物件陣列，以匹配實際API的資料模型。"
        },
        {
          title: "配置輸出選項",
          description: "根據專案需求選擇首選輸出格式（JSON Server、Express.js、Mock.js或Mock Service Worker）。調整其他設定，如響應動態性（生成資料應該有多隨機）、陣列長度和響應格式。"
        },
        {
          title: "生成Mock API程式碼",
          description: "點擊\"生成Mock\"按鈕，根據您的規範建立模擬API程式碼。該工具將處理您的輸入，並以您選擇的格式生成模擬定義的API端點和響應的程式碼。"
        },
        {
          title: "審查並複製生成的程式碼",
          description: "檢查生成的模擬API程式碼，確保它滿足您的要求。您可以將程式碼複製到剪貼簿或將其下載為檔案，以便與您的專案整合。"
        },
        {
          title: "與開發環境整合",
          description: "根據您選擇的格式，將生成的模擬API與您的開發環境整合。這可能涉及設定JSON Server、新增Express.js路由、配置Mock.js或在應用程式中實現Mock Service Worker。"
        },
        {
          title: "連接前端應用程式",
          description: "更新您的前端應用程式，使其連接到模擬API端點而不是真實的後端服務。這通常涉及將API請求的基本URL更改為指向本地模擬伺服器或攔截器。"
        }
      ]
    },
    bestPractices: {
      title: "Mock API開發的最佳實踐",
      intro: "遵循這些建議建立有效且可維護的模擬API：",
      items: [
        "盡可能使用OpenAPI規範，確保您的模擬API準確反映真實API的結構",
        "鏡像真實API將使用的精確響應結構，包括分頁格式、錯誤響應和元資料",
        "在模擬資料中包含真實的邊緣情況，如空陣列、空值和各種錯誤狀態",
        "對於日期或ID等動態資料，使用函數而不是靜態值來模擬真實世界的行為",
        "將模擬API與前端程式碼一起版本化，以在開發過程中保持歷史相容性",
        "考慮使用環境變數根據開發上下文在模擬和真實API之間切換",
        "記錄模擬和真實API之間的任何偏差，以防止整合期間出現混淆",
        "實施一致的延遲模擬，測試您的UI如何處理載入狀態",
        "在建構管道中自動化模擬服務的生成，確保它們與API更改保持同步",
        "在模擬API中包含驗證邏輯，模擬真實API將執行的相同約束"
      ]
    },
    faq: {
      title: "關於Mock API生成的常見問題",
      items: [
        {
          question: "可用輸出格式之間有什麼區別？",
          answer: "JSON Server基於JSON檔案提供簡單的REST API，適合基本需求。Express.js為複雜場景提供更多自訂和路由控制。Mock.js直接與JavaScript整合，在瀏覽器中攔截AJAX請求。Mock Service Worker(MSW)使用Service Workers在網路級別攔截請求，允許在模擬和真實API之間無縫切換，而無需更改程式碼。"
        },
        {
          question: "我可以建立每次都變化的動態模擬響應嗎？",
          answer: "是的，'響應動態性'選項控制您的模擬資料的變化程度。低動態性意味著每個請求的響應一致，而高動態性在定義的資料類型內生成不同的值。您還可以在Express.js或MSW格式中實現自訂邏輯，以實現更複雜的動態行為。"
        },
        {
          question: "如何在模擬API中處理身份驗證？",
          answer: "對於JSON Server，您可以使用json-server-auth外掛。使用Express.js，實現中介軟體來檢查身份驗證令牌。對於Mock.js和MSW，您可以攔截身份驗證請求，並根據提供的憑證返回適當的令牌或錯誤，模擬真實的身份驗證流程。"
        },
        {
          question: "我可以模擬網路錯誤或慢響應嗎？",
          answer: "是的。在Express.js中，您可以使用中介軟體隨機引入延遲或錯誤。使用MSW，您可以使用ctx.delay()函數新增延遲或返回錯誤響應。對於JSON Server，您可以使用--delay標誌為所有響應新增固定延遲。"
        },
        {
          question: "如何在生產環境中在模擬和真實API之間切換？",
          answer: "對於MSW，使用環境變數有條件地啟動服務工作器。對於其他方法，使用配置值更改API基本URL或實現相應路由請求的代理。這使您在開發和測試期間可以輕鬆地在模擬和真實端點之間切換。"
        },
        {
          question: "我可以生成真實的資料而不是lorem ipsum文字嗎？",
          answer: "是的，Mock API生成器包括專門的欄位類型，如'姓名'、'電子郵件'、'電話'、'地址'和'圖片URL'，為這些常見欄位生成真實資料。對於更高級的場景，考慮使用Express.js或MSW輸出格式的Faker.js等庫。"
        },
        {
          question: "如何在模擬API中處理檔案上傳？",
          answer: "對於Express.js輸出，您可以實現接受multipart/form-data請求並返回適當響應的路由。使用MSW，您可以攔截檔案上傳請求並在返回成功響應之前模擬處理。這允許您測試檔案上傳UI元件，而無需實際的檔案處理。"
        }
      ]
    },
    advancedTips: {
      title: "高級Mock API整合技術",
      intro: "使用這些高級整合技術將您的模擬API實現提升到新水平：",
      items: [
        "在模擬API中實現有狀態行為，以模擬請求之間的持久性，例如在後續GET請求中返回新建立的項目",
        "將OpenAPI驗證與模擬伺服器結合，確保前端請求滿足API規範要求",
        "建立場景管理器，允許您在不同的預定義資料集之間切換，以測試各種業務場景",
        "實現具有適當元資料和連結的真實分頁，有效測試UI的分頁控制",
        "將模擬服務工作者與GraphQL一起使用，在保持類型安全的同時模擬複雜的查詢響應",
        "建立將某些請求代理到實際後端服務的混合方法，同時模擬尚未可用的其他服務",
        "實現websocket模擬，無需後端實現即可測試即時功能",
        "設定使用模擬API自動驗證前端行為的持續整合測試",
        "建立模擬API目錄服務，讓開發人員瀏覽並選擇組織中可用的模擬端點",
        "實現響應模板，根據請求參數或標頭動態更改模擬響應"
      ]
    }
  }
}