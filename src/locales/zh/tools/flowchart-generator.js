export default {
  name: '流程图生成器',
  description: '使用简单的基于文本的语法创建流程图和图表',
  title: '流程图和图表生成器',
  renderBtn: '渲染图表',
  resetBtn: '重置',
  downloadSvgBtn: '下载SVG',
  copySvgBtn: '复制SVG',
  input: {
    title: '流程图定义',
    placeholder: '输入Mermaid语法代码...',
    loadExample: '加载示例',
    clear: '清除',
    uploadFile: '上传文件'
  },
  output: {
    title: '生成的流程图',
    downloadImage: '下载图片',
    downloadSVG: '下载SVG',
    copyImage: '复制图片',
    copySVG: '复制SVG',
    zoomIn: '放大',
    zoomOut: '缩小',
    fitView: '适应视图',
    resetView: '重置视图',
    preview: '预览',
    code: 'Mermaid 代码'
  },
  options: {
    title: '选项',
    theme: '主题',
    orientation: '方向',
    nodeShape: '节点形状',
    arrowStyle: '箭头样式',
    lineStyle: '线条样式',
    textPosition: '文本位置',
    fontSize: '字体大小',
    fontFamily: '字体系列',
    showGrid: '显示网格',
    autoRender: '自动渲染'
  },
  themes: {
    default: '默认',
    simple: '简约',
    forest: '森林',
    neutral: '中性',
    dark: '暗黑',
    business: '商务',
    base: '基础',
    custom: '自定义'
  },
  orientations: {
    topToBottom: '从上到下',
    bottomToTop: '从下到上',
    leftToRight: '从左到右',
    rightToLeft: '从右到左'
  },
  nodeShapes: {
    rectangle: '矩形',
    roundedRectangle: '圆角矩形',
    circle: '圆形',
    diamond: '菱形',
    hexagon: '六边形',
    parallelogram: '平行四边形'
  },
  arrowStyles: {
    arrow: '箭头',
    open: '开放',
    filled: '实心',
    diamond: '菱形',
    circle: '圆形'
  },
  lineStyles: {
    solid: '实线',
    dashed: '虚线',
    dotted: '点线',
    curved: '曲线',
    straight: '直线',
    orthogonal: '正交'
  },
  syntax: {
    title: '语法帮助',
    node: '节点',
    edge: '边',
    subgraph: '子图',
    comment: '注释',
    styling: '样式',
    showMore: '显示更多'
  },
  actions: {
    render: '渲染流程图',
    save: '保存图表',
    export: '导出',
    share: '分享'
  },
  messages: {
    renderSuccess: '流程图渲染成功',
    renderError: '渲染流程图错误：{error}',
    syntaxError: '语法错误：{error}',
    saved: '图表已保存',
    copied: 'SVG代码已复制到剪贴板',
    copyFailed: '复制失败，请手动复制',
    exported: '流程图已导出',
    emptyCode: '请输入Mermaid语法代码',
    rendering: '正在渲染...',
    errorTitle: '渲染错误'
  },
  examples: {
    flowchart: '流程图',
    classDiagram: '类图',
    sequenceDiagram: '时序图',
    entityRelationship: '实体关系图',
    gantt: '甘特图',
    stateDiagram: '状态图',
    pieChart: '饼图',
    userJourney: '用户旅程图'
  },
  exampleCodes: {
    flowchart: `graph TD
    A[开始] --> B{是否正确?}
    B -->|是| C[结果正确]
    B -->|否| D[结果错误]
    C --> E[结束]
    D --> E
`,
    sequenceDiagram: `sequenceDiagram
    participant 客户端
    participant 服务器
    客户端->>服务器: 请求数据
    服务器-->>客户端: 响应数据
    客户端->>服务器: 提交表单
    服务器-->>客户端: 确认提交
`,
    gantt: `gantt
    title 项目进度计划
    dateFormat  YYYY-MM-DD
    section 规划阶段
    需求收集           :a1, 2023-01-01, 30d
    系统设计           :after a1, 20d
    section 开发阶段
    后端开发           :2023-02-20, 45d
    前端开发           :2023-02-25, 40d
    section 测试阶段
    系统测试           :2023-04-05, 20d
    用户测试           :2023-04-20, 15d
    section 上线阶段
    部署上线           :2023-05-05, 10d
`,
    stateDiagram: `stateDiagram-v2
    [*] --> 编辑中
    编辑中 --> 审核中: 提交审核
    审核中 --> 已拒绝: 拒绝
    审核中 --> 已发布: 通过
    已拒绝 --> 编辑中: 修改后重新提交
    已发布 --> [*]
`,
    pieChart: `pie
    title 网站访问来源分布
    "搜索引擎" : 42.7
    "直接访问" : 28.9
    "社交媒体" : 18.5
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
} 