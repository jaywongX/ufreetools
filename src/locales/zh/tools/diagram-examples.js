export default {
  name: '图表示例',
  description: '浏览并使用各种图表示例满足不同的建模需求',
  title: '高级流程图示例',

  categories: {
    title: '分类',
    flowcharts: '流程图',
    uml: 'UML图表',
    network: '网络图',
    architecture: '架构图',
    entity: '实体关系图',
    sequence: '时序图',
    mindmaps: '思维导图',
    gantt: '甘特图',
    other: '其他图表'
  },

  actions: {
    search: '搜索示例',
    filter: '按类别筛选',
    sortBy: '排序方式',
    useExample: '使用此示例',
    viewFull: '查看全尺寸',
    copyCode: '复制代码',
    addToFavorites: '添加到收藏',
    removeFavorite: '从收藏中移除'
  },

  sortOptions: {
    popularity: '流行度',
    newest: '最新优先',
    alphabetical: '字母顺序',
    complexity: '复杂度'
  },

  exampleDetail: {
    title: '示例详情',
    description: '描述',
    syntax: '语法',
    codeView: '代码视图',
    diagramView: '图表视图',
    complexity: '复杂度',
    tags: '标签',
    relatedExamples: '相关示例'
  },

  complexityLevels: {
    beginner: '初学者',
    intermediate: '中级',
    advanced: '高级'
  },

  messages: {
    copied: '代码已复制到剪贴板',
    copyFailed: '复制失败，请手动复制',
    added: '已添加到收藏',
    removed: '已从收藏中移除',
    noResults: '没有符合您搜索条件的示例',
    loading: '加载示例中...'
  },

  filters: {
    all: '所有类别',
    favorites: '仅收藏',
    recently: '最近查看'
  },

  examples: {
    softwareDevelopment: '软件开发流程图',
    projectManagement: '项目管理甘特图',
    userRegistration: '用户注册流程'
  },

  exampleCodes: {
    softwareDevelopment: `graph TD
    A[需求分析] --> B[系统设计]
    B --> C[编码实现]
    C --> D[单元测试]
    D --> E(测试通过?)
    E -- 否 --> C
    E -- 是 --> F[系统集成]
    F --> G[系统测试]
    G --> H(测试通过?)
    H -- 否 --> F
    H -- 是 --> I[部署上线]
    I --> J[维护更新]
    
    style A fill:#f9d5e5,stroke:#333,stroke-width:2px
    style E fill:#e3f0f7,stroke:#333,stroke-width:2px
    style H fill:#e3f0f7,stroke:#333,stroke-width:2px
    style I fill:#d5f5e3,stroke:#333,stroke-width:2px
    style J fill:#d5f5e3,stroke:#333,stroke-width:2px`,
    
    projectManagement: `gantt
    title 产品开发项目计划
    dateFormat  YYYY-MM-DD
    axisFormat  %m-%d
    
    section 规划
    市场调研           :a1, 2023-01-01, 15d
    需求分析           :a2, after a1, 10d
    产品规划           :a3, after a2, 5d
    
    section 设计
    原型设计           :b1, after a3, 15d
    UI设计             :b2, after b1, 10d
    用户测试           :b3, after b2, 5d
    
    section 开发
    后端架构           :c1, after b1, 20d
    前端开发           :c2, after b2, 15d
    API集成            :c3, after c1, 10d
    
    section 测试
    单元测试           :d1, after c2, 8d
    集成测试           :d2, after c3, 7d
    性能测试           :d3, after d2, 5d
    
    section 发布
    内部审核           :e1, after d3, 5d
    部署准备           :e2, after e1, 2d
    正式发布           :milestone, after e2, 0d`,
    
    userRegistration: `sequenceDiagram
    participant 用户
    participant 前端
    participant 后端
    participant 数据库
    participant 邮件服务
    
    用户->>前端: 填写注册表单
    前端->>前端: 表单验证
    前端->>后端: 提交注册信息
    后端->>后端: 验证用户数据
    后端->>数据库: 检查用户是否存在
    数据库-->>后端: 返回检查结果
    
    alt 用户已存在
        后端-->>前端: 返回用户已存在错误
        前端-->>用户: 显示错误信息
    else 用户不存在
        后端->>数据库: 创建新用户记录
        后端->>邮件服务: 发送验证邮件
        邮件服务-->>用户: 发送包含验证链接的邮件
        后端-->>前端: 返回注册成功
        前端-->>用户: 显示注册成功消息
    end
    
    用户->>邮件服务: 点击验证链接
    邮件服务->>后端: 验证请求
    后端->>数据库: 更新用户状态为已验证
    后端-->>用户: 重定向到登录页面`
  }
}; 