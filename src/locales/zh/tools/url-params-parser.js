export default {
  name: 'URL参数解析器',
  description: '解析、分析和操作URL参数和查询字符串',
  input: {
    title: 'URL输入',
    url: 'URL',
    urlPlaceholder: 'https://example.com/path?param1=value1&param2=value2 或 param1=value1&param2=value2',
    parse: '使用当前页面URL',
    clear: '清空',
    examples: '加载示例',
    parseFromClipboard: '从剪贴板粘贴',
    history: '历史记录'
  },
  params: {
    title: '参数列表',
    name: '参数名',
    value: '参数值',
    decoded: '解码值',
    type: '类型',
    actions: '操作',
    add: '添加参数',
    remove: '移除',
    edit: '编辑',
    copy: '复制为文本',
    sort: '排序方式',
    encode: '编码',
    decode: '解码',
    noParams: '未检测到任何URL参数',
    noMatchingParams: '没有找到匹配的参数',
    modified: '已修改',
    original: '原始',
    search: '搜索参数...'
  },
  results: {
    title: 'URL组成部分',
    parsed: 'URL组成部分',
    protocol: '协议',
    domain: '主机名',
    port: '端口',
    path: '路径',
    queryString: '查询字符串',
    fragment: '锚点（哈希）',
    constructed: '构造的URL',
    copyUrl: '复制URL',
    openUrl: '打开URL',
    shareUrl: '分享URL',
    shortenUrl: '缩短URL',
    encoded: '编码的URL',
    decoded: '解码的URL'
  },
  tools: {
    title: '工具',
    buildQuery: '构建查询',
    compareUrls: '比较URL',
    validateUrl: '验证URL',
    trackingRemoval: '移除跟踪参数',
    convertToCode: '转换为代码',
    diffTool: '参数差异',
    baseConversion: '进制转换',
    jsonToQuery: 'JSON转查询字符串',
    queryToJson: '查询字符串转JSON'
  },
  visualization: {
    title: '可视化',
    tree: '树视图',
    table: '参数表格',
    json: 'JSON格式',
    raw: '原始视图',
    hierarchical: '层次视图',
    nested: '嵌套参数',
    auto: '自动检测',
    fullUrl: '完整URL',
    queryOnly: '仅查询字符串',
    hideJson: '收起JSON',
    viewAsJson: '查看为JSON'
  },
  types: {
    string: '字符串',
    number: '数字',
    boolean: '布尔值',
    array: '数组',
    object: '对象',
    date: '日期',
    email: '电子邮件',
    ip: 'IP地址',
    color: '颜色',
    unknown: '未知'
  },
  settings: {
    title: '设置',
    detectTypes: '解析模式',
    decodeAutomatically: 'URL解码',
    decodeAuto: '自动解码',
    decodeOnce: '解码一次',
    decodeTwice: '解码两次',
    noDecode: '不解码',
    encodeAutomatically: '编码特殊字符',
    preserveCase: '保留参数大小写',
    sortAlphabetically: '按字母顺序排序参数',
    sortDefault: '默认顺序',
    sortNameAsc: '参数名升序',
    sortNameDesc: '参数名降序',
    sortValueAsc: '参数值升序',
    sortValueDesc: '参数值降序',
    arrayFormat: '数组格式',
    objectFormat: '对象格式',
    emptyValues: '空值',
    defaultProtocol: '默认协议'
  },
  codes: {
    title: '导出选项',
    javascript: 'JavaScript (URLSearchParams)',
    python: 'Python',
    php: 'PHP',
    ruby: 'Ruby',
    java: 'Java',
    csharp: 'C#',
    go: 'Go',
    copyCode: '复制',
    copyJson: '复制JSON',
    jsComment1: '创建URLSearchParams对象',
    jsComment2: '获取查询字符串',
    jsComment3: '添加到URL',
    phpComment1: '参数数组',
    phpComment2: '构建查询字符串',
    phpComment3: '完整URL',
    pythonComment1: '使用 urllib.parse',
    pythonComment2: '参数字典',
    pythonComment3: '构建查询字符串',
    pythonComment4: '完整URL'
  },
  messages: {
    parsed: 'URL解析成功',
    noUrl: '请输入URL',
    invalidUrl: '无效的URL或查询字符串',
    copied: '已复制到剪贴板',
    paramAdded: '参数已添加',
    paramRemoved: '参数已移除',
    trackingRemoved: '跟踪参数已移除',
    urlOpened: 'URL已在新标签页中打开',
    urlShortened: 'URL已缩短',
    error: '错误：{message}',
    importSuccess: 'URL导入成功',
    exportSuccess: '数据导出成功',
    clipboardError: '无法从剪贴板读取内容。请确保您已授予剪贴板权限，或手动粘贴内容。',
    copyFailed: '复制失败，请手动复制'
  },
  article: {
    title: "URL参数解析器：查询字符串分析完全指南",
    features: {
      title: "了解URL参数和查询字符串",
      description: "<strong>URL参数解析器</strong>是一款综合性工具，专为解码、分析和操作URL查询字符串和参数而设计。查询字符串是URL中问号（?）后面的部分，包含名值对形式的数据，通常用于在网页之间传递信息或在API请求中使用。<br><br>我们的<strong>查询字符串分析器</strong>将复杂的URL分解为组成部分，自动检测和解析参数，并提供多种可视化格式。它同时支持标准URL解析和专门的查询字符串分析，具有参数提取、值检查和流行编程语言的代码生成等功能。",
      useCases: {
        title: "URL参数分析的实际应用",
        items: [
          "<strong>网络分析和UTM跟踪</strong>：数字营销人员经常使用包含多个UTM参数（如utm_source、utm_medium、utm_campaign）的URL。我们的<strong>URL查询解码器</strong>使分析这些跟踪参数变得容易，验证它们是否正确配置，并解决营销活动中的跟踪问题。",
          
          "<strong>API调试和开发</strong>：当使用带有查询参数的REST API时，开发人员可以使用此工具检查请求URL，验证参数格式，并确保特殊字符的正确编码。<strong>URL参数提取器</strong>有助于隔离可能导致错误或意外行为的特定值。",
          
          "<strong>SEO分析和URL结构优化</strong>：搜索引擎优化专业人员可以检查URL结构，确保它们遵循最佳实践。通过解析查询字符串，他们可以识别潜在的参数重复问题、过多的参数或可能阻止搜索引擎正确索引的值。",
          
          "<strong>电子商务过滤和搜索分析</strong>：在线购物网站通常使用复杂的查询字符串来表示产品过滤器、排序选项和搜索条件。<strong>查询参数解析器</strong>帮助开发人员和分析师了解这些参数如何相互作用并影响产品列表。",
          
          "<strong>Web应用程序测试</strong>：QA工程师可以使用此工具从测试场景中提取参数，修改值以创建边缘情况，并生成新的URL，用于对依赖查询字符串参数的Web应用程序进行系统测试。",
          
          "<strong>教育目的</strong>：学习URL结构和HTTP通信的学生和开发人员可以使用可视化和代码示例，更好地理解参数在不同编程上下文中如何格式化、编码和使用。"
        ]
      }
    },
    faq: {
      title: "关于URL参数的常见问题",
      items: [
        {
          question: "URL参数和查询字符串有什么区别？",
          answer: "虽然这两个术语经常互换使用，但它们有细微的差别：<br><br><strong>查询字符串</strong>：URL中问号(?)后面包含所有参数的整个部分。例如，在<code>https://example.com/search?q=coffee&page=2</code>中，查询字符串是<code>q=coffee&page=2</code>。<br><br><strong>URL参数</strong>：查询字符串内的各个名值对。在上面的例子中，有两个URL参数：<code>q=coffee</code>和<code>page=2</code>。<br><br>我们的<strong>URL参数解析器</strong>既分析完整的查询字符串，又将其分解为各个参数，让您同时看到大局和细节。"
        },
        {
          question: "为什么有些URL参数会出现编码的%20或+符号？",
          answer: "URL编码（也称为百分比编码）是必要的，因为URL只能包含某些ASCII字符。特殊字符、空格和非ASCII字符必须进行编码才能安全地包含在URL中。<br><br>常见的URL编码示例：<br>• 空格变成<code>%20</code>或<code>+</code><br>• 问号变成<code>%3F</code><br>• 与号变成<code>%26</code><br>• 等号变成<code>%3D</code><br><br>我们的<strong>URL解码器</strong>自动处理这种编码，显示原始和解码的值，以便您了解实际传输的内容。当参数包含特殊字符（如空格、表情符号或国际字符）时，URL编码可防止它们破坏URL结构。"
        },
        {
          question: "我可以分析查询字符串中的复杂嵌套参数或JSON吗？",
          answer: "是的，我们的<strong>URL查询解析器</strong>处理高级参数格式：<br><br>1. <strong>数组形式的参数</strong>，如<code>colors[]=red&colors[]=blue</code>或<code>colors=red,blue</code><br><br>2. <strong>嵌套对象表示法</strong>，如<code>filter[price][min]=10&filter[price][max]=50</code><br><br>3. <strong>参数中的JSON编码值</strong>，如<code>data=&#123;&quot;name&quot;:&quot;John&quot;,&quot;age&quot;:30&#125;</code><br><br>该工具会自动检测这些复杂结构并为它们提供专门的视图。对于JSON值，它提供格式化视图选项，使嵌套数据更具可读性。这对于通过URL接受复杂过滤、排序或配置选项的API端点特别有用。"
        },
        {
          question: "如何在我的应用程序中使用生成的代码片段？",
          answer: "代码生成功能提供了在不同编程语言中使用所分析URL参数的即用代码片段：<br><br>1. <strong>前端开发</strong>：使用JavaScript (URLSearchParams)代码在基于浏览器的应用程序中提取或操作参数。<br><br>2. <strong>后端处理</strong>：使用Python、PHP或其他服务器端语言片段解析传入的请求URL或构建具有相同参数结构的新URL。<br><br>3. <strong>API集成</strong>：在构建需要相同参数结构的API请求时，使用适当的语言片段作为起点。<br><br>每个代码片段都展示了使用各种语言的标准库构建、修改和提取URL参数的正确方式，遵循URL处理和编码的最佳实践。"
        },
        {
          question: "我可以分析哪些类型的URL，有什么限制？",
          answer: "虽然我们的<strong>URL参数分析器</strong>设计用于处理大多数标准URL和查询字符串，但有几个限制需要注意：<br><br>1. <strong>URL长度</strong>：极长的URL（超过100,000个字符）可能会导致性能问题，不过大多数实际URL远低于此限制。<br><br>2. <strong>非标准格式</strong>：某些应用程序使用不遵循标准约定的自定义参数格式。该工具尝试解析这些格式，但可能无法最佳地可视化其结构。<br><br>3. <strong>基于哈希的参数</strong>：URL片段/哈希部分（#之后）中的参数与常规查询参数分开分析。<br><br>4. <strong>多层编码</strong>：有时，参数可能被多次编码。该工具为这些情况提供了\"解码两次\"选项，但极其复杂的分层编码可能需要专门处理。<br><br>对于大多数Web开发、数字营销和API测试目的，这些限制很少出现，该工具可处理整个Web上使用的常见URL格式。"
        }
      ]
    },
    guide: {
      title: "如何使用URL参数解析器：分步指南",
      step1: "<strong>输入URL或查询字符串</strong>：在URL输入字段中，粘贴完整的URL（如https://example.com/page?param=value）或仅查询字符串部分（param=value）。您还可以点击\"使用当前页面URL\"来分析您当前所在页面的URL，或点击\"从剪贴板粘贴\"来快速插入复制的内容。",
      step2: "<strong>选择解析选项</strong>：根据您的输入选择适当的解析模式。\"自动检测\"适用于大多数情况，自动确定您是输入了完整URL还是仅查询字符串。对于URL解码，您可以选择\"解码一次\"用于标准URL，或\"解码两次\"用于双重编码的参数。",
      step3: "<strong>查看提取的参数</strong>：解析后，工具在表格视图中显示所有检测到的参数。您可以看到每个参数的名称、值，并执行复制等操作。使用搜索过滤器快速在复杂URL中查找特定参数。",
      step4: "<strong>探索不同的可视化选项</strong>：使用结果部分下的选项卡切换不同视图。\"参数表格\"以结构化列表显示所有参数，\"JSON格式\"将参数显示为JSON对象，\"URL组成部分\"分解整个URL结构，包括协议、域名、路径和查询字符串。",
      step5: "<strong>分析复杂的参数值</strong>：对于包含JSON或结构化数据的参数，点击\"查看为JSON\"查看格式化表示。这使得理解可能编码在单个参数值内的嵌套数据结构变得更容易。",
      step6: "<strong>排序和过滤参数</strong>：使用排序选项按名称或值以升序或降序排列参数。这在处理包含多个参数的URL时特别有用，允许您逻辑地组织它们。",
      step7: "<strong>导出和使用结果</strong>：在\"导出选项\"选项卡中，您可以查看和复制JavaScript、Python、PHP等语言的生成代码片段。这些片段展示了如何以编程方式处理相同的参数，在您的应用程序中实现类似功能时节省开发时间。"
    },
    conclusion: "URL参数解析器简化了处理查询字符串和URL参数的复杂任务，为开发人员、营销人员和分析师提供了强大的工具，用于理解和操作网址。通过将URL分解为组成部分并提供多种可视化选项，它弥合了原始URL和结构化数据之间的差距。无论您是在调试复杂的API调用、分析营销活动参数，还是学习Web开发，这个工具都能提供宝贵的见解，帮助您了解在现代Web生态系统中如何通过URL传递数据。"
  }
} 