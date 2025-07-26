export default {
  name: "流程圖生成器",
  description: "使用簡單的基於文本的語法創建流程圖和圖表",
  title: "流程圖和圖表生成器",
  renderBtn: "渲染圖表",
  resetBtn: "重置",
  downloadSvgBtn: "下載SVG",
  copySvgBtn: "複製SVG",

  input: {
    title: "流程圖定義",
    placeholder: "輸入Mermaid語法代碼...",
    loadExample: "加載示例",
    clear: "清除",
    uploadFile: "上傳文件"
  },

  output: {
    title: "生成的流程圖",
    downloadImage: "下載圖片",
    downloadSVG: "下載SVG",
    copyImage: "複製圖片",
    copySVG: "複製SVG",
    zoomIn: "放大",
    zoomOut: "縮小",
    fitView: "適應視圖",
    resetView: "重置視圖",
    preview: "預覽",
    code: "Mermaid 代碼"
  },

  options: {
    title: "選項",
    theme: "主題",
    orientation: "方向",
    nodeShape: "節點形狀",
    arrowStyle: "箭頭樣式",
    lineStyle: "線條樣式",
    textPosition: "文本位置",
    fontSize: "字體大小",
    fontFamily: "字體系列",
    showGrid: "顯示網格",
    autoRender: "自動渲染"
  },

  themes: {
    default: "默認",
    simple: "簡約",
    forest: "森林",
    neutral: "中性",
    dark: "暗黑",
    business: "商務",
    base: "基礎",
    custom: "自定義"
  },

  orientations: {
    topToBottom: "從上到下",
    bottomToTop: "從下到上",
    leftToRight: "從左到右",
    rightToLeft: "從右到左"
  },

  nodeShapes: {
    rectangle: "矩形",
    roundedRectangle: "圓角矩形",
    circle: "圓形",
    diamond: "菱形",
    hexagon: "六邊形",
    parallelogram: "平行四邊形"
  },

  arrowStyles: {
    arrow: "箭頭",
    open: "開放",
    filled: "實心",
    diamond: "菱形",
    circle: "圓形"
  },

  lineStyles: {
    solid: "實線",
    dashed: "虛線",
    dotted: "點線",
    curved: "曲線",
    straight: "直線",
    orthogonal: "正交"
  },

  syntax: {
    title: "語法幫助",
    node: "節點",
    edge: "邊",
    subgraph: "子圖",
    comment: "註釋",
    styling: "樣式",
    showMore: "顯示更多"
  },

  actions: {
    render: "渲染流程圖",
    save: "保存圖表",
    export: "導出",
    share: "分享"
  },

  messages: {
    renderSuccess: "流程圖渲染成功",
    renderError: "渲染流程圖錯誤：{error}",
    syntaxError: "語法錯誤：{error}",
    saved: "圖表已保存",
    copied: "SVG代碼已複製到剪貼板",
    copyFailed: "複製失敗，請手動複製",
    exported: "流程圖已導出",
    emptyCode: "請輸入Mermaid語法代碼",
    rendering: "正在渲染...",
    errorTitle: "渲染錯誤"
  },

  examples: {
    flowchart: "流程圖",
    classDiagram: "類圖",
    sequenceDiagram: "時序圖",
    entityRelationship: "實體關係圖",
    gantt: "甘特圖",
    stateDiagram: "狀態圖",
    pieChart: "餅圖",
    userJourney: "用戶旅程圖"
  },

  exampleCodes: {
    flowchart: `graph TD
    A[開始] --> B{是否正確?}
    B -->|是| C[結果正確]
    B -->|否| D[結果錯誤]
    C --> E[結束]
    D --> E
`,
    sequenceDiagram: `sequenceDiagram
    participant 客戶端
    participant 服務器
    客戶端->>服務器: 請求數據
    服務器-->>客戶端: 響應數據
    客戶端->>服務器: 提交表單
    服務器-->>客戶端: 確認提交
`,
    gantt: `gantt
    title 項目進度計劃
    dateFormat  YYYY-MM-DD
    section 規劃階段
    需求收集           :a1, 2023-01-01, 30d
    系統設計           :after a1, 20d
    section 開發階段
    後端開發           :2023-02-20, 45d
    前端開發           :2023-02-25, 40d
    section 測試階段
    系統測試           :2023-04-05, 20d
    用戶測試           :2023-04-20, 15d
    section 上線階段
    部署上線           :2023-05-05, 10d
`,
    stateDiagram: `stateDiagram-v2
    [*] --> 編輯中
    編輯中 --> 審核中: 提交審核
    審核中 --> 已拒絕: 拒絕
    審核中 --> 已發布: 通過
    已拒絕 --> 編輯中: 修改後重新提交
    已發布 --> [*]
`,
    pieChart: `pie
    title 網站訪問來源分佈
    "搜索引擎" : 42.7
    "直接訪問" : 28.9
    "社交媒體" : 18.5
    "其他渠道" : 9.9
`,
    classDiagram: `classDiagram
    class Animal {
        +String name
        +int age
        +makeSound() void
    }
    class Dog {
        +String breed
        +fetch() void
    }
    class Cat {
        +String color
        +climb() void
    }
    Animal <|-- Dog
    Animal <|-- Cat
`
  }
};