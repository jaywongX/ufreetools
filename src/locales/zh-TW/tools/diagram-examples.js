export default {
  name: "圖表示例",
  description: "瀏覽並使用各種圖表示例滿足不同的建模需求",
  title: "高級流程圖示例",

  categories: {
    title: "分類",
    flowcharts: "流程圖",
    uml: "UML圖表",
    network: "網絡圖",
    architecture: "架構圖",
    entity: "實體關係圖",
    sequence: "時序圖",
    mindmaps: "思維導圖",
    gantt: "甘特圖",
    other: "其他圖表"
  },

  actions: {
    search: "搜索示例",
    filter: "按類別篩選",
    sortBy: "排序方式",
    useExample: "使用此示例",
    viewFull: "查看全尺寸",
    copyCode: "複製代碼",
    addToFavorites: "添加到收藏",
    removeFavorite: "從收藏中移除"
  },

  sortOptions: {
    popularity: "流行度",
    newest: "最新優先",
    alphabetical: "字母順序",
    complexity: "複雜度"
  },

  exampleDetail: {
    title: "示例詳情",
    description: "描述",
    syntax: "語法",
    codeView: "代碼視圖",
    diagramView: "圖表視圖",
    complexity: "複雜度",
    tags: "標籤",
    relatedExamples: "相關示例"
  },

  complexityLevels: {
    beginner: "初學者",
    intermediate: "中級",
    advanced: "高級"
  },

  messages: {
    copied: "代碼已複製到剪貼簿",
    copyFailed: "複製失敗，請手動複製",
    added: "已添加到收藏",
    removed: "已從收藏中移除",
    noResults: "沒有符合您搜索條件的示例",
    loading: "加載示例中..."
  },

  filters: {
    all: "所有類別",
    favorites: "僅收藏",
    recently: "最近查看"
  },

  examples: {
    softwareDevelopment: "軟件開發流程圖",
    projectManagement: "項目管理甘特圖",
    userRegistration: "用戶註冊流程"
  },

  exampleCodes: {
    softwareDevelopment: `graph TD
    A[需求分析] --> B[系統設計]
    B --> C[編碼實現]
    C --> D[單元測試]
    D --> E(測試通過?)
    E -- 否 --> C
    E -- 是 --> F[系統集成]
    F --> G[系統測試]
    G --> H(測試通過?)
    H -- 否 --> F
    H -- 是 --> I[部署上線]
    I --> J[維護更新]
    
    style A fill:#f9d5e5,stroke:#333,stroke-width:2px
    style E fill:#e3f0f7,stroke:#333,stroke-width:2px
    style H fill:#e3f0f7,stroke:#333,stroke-width:2px
    style I fill:#d5f5e3,stroke:#333,stroke-width:2px
    style J fill:#d5f5e3,stroke:#333,stroke-width:2px`,
    
    projectManagement: `gantt
    title 產品開發項目計劃
    dateFormat  YYYY-MM-DD
    axisFormat  %m-%d
    
    section 規劃
    市場調研           :a1, 2023-01-01, 15d
    需求分析           :a2, after a1, 10d
    產品規劃           :a3, after a2, 5d
    
    section 設計
    原型設計           :b1, after a3, 15d
    UI設計             :b2, after b1, 10d
    用戶測試           :b3, after b2, 5d
    
    section 開發
    後端架構           :c1, after b1, 20d
    前端開發           :c2, after b2, 15d
    API集成            :c3, after c1, 10d
    
    section 測試
    單元測試           :d1, after c2, 8d
    集成測試           :d2, after c3, 7d
    性能測試           :d3, after d2, 5d
    
    section 發布
    內部審核           :e1, after d3, 5d
    部署準備           :e2, after e1, 2d
    正式發布           :milestone, after e2, 0d`,
    
    userRegistration: `sequenceDiagram
    participant 用戶
    participant 前端
    participant 後端
    participant 數據庫
    participant 郵件服務
    
    用戶->>前端: 填寫註冊表單
    前端->>前端: 表單驗證
    前端->>後端: 提交註冊信息
    後端->>後端: 驗證用戶數據
    後端->>數據庫: 檢查用戶是否存在
    數據庫-->>後端: 返回檢查結果
    
    alt 用戶已存在
        後端-->>前端: 返回用戶已存在錯誤
        前端-->>用戶: 顯示錯誤信息
    else 用戶不存在
        後端->>數據庫: 創建新用戶記錄
        後端->>郵件服務: 發送驗證郵件
        郵件服務-->>用戶: 發送包含驗證鏈接的郵件
        後端-->>前端: 返回註冊成功
        前端-->>用戶: 顯示註冊成功消息
    end
    
    用戶->>郵件服務: 點擊驗證鏈接
    郵件服務->>後端: 驗證請求
    後端->>數據庫: 更新用戶狀態為已驗證
    後端-->>用戶: 重定向到登錄頁面`
  }
};