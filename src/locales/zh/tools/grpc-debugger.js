export default {
  name: 'gRPC调试器',
  description: '测试和调试gRPC服务和protobuf消息',
  title: 'gRPC在线调试器',
  intro: '通过浏览器直接调试gRPC服务，支持proto文件解析和动态表单构建',
  connection: {
    title: '连接',
    server: '服务器地址',
    serverPlaceholder: '输入gRPC服务器地址（例如：localhost:50051）',
    useTLS: '使用TLS/SSL',
    tlsOptions: 'TLS选项',
    caCert: 'CA证书',
    clientCert: '客户端证书',
    clientKey: '客户端密钥',
    insecure: '跳过TLS验证（不安全）',
    timeout: '超时（秒）',
    serverUrl: 'gRPC服务URL',
    serverUrlPlaceholder: 'https://your-grpc-server.com',
    timeoutMs: '请求超时 (毫秒)',
    timeoutPlaceholder: '30000',
    defaultTimeout: '默认: 30000ms (30秒)',
    corsNote: '注意：服务器需要支持gRPC-Web协议和CORS',
    keepalive: '启用Keepalive',
    connect: '连接',
    disconnect: '断开连接'
  },
  service: {
    title: '服务',
    definition: '服务定义',
    load: '加载Proto文件',
    paste: '粘贴Proto定义',
    protoPath: 'Proto文件路径',
    importPath: '导入路径',
    services: '服务',
    methods: '方法',
    selectService: '选择服务',
    selectMethod: '选择方法',
    methodType: '方法类型',
    unary: '一元',
    serverStreaming: '服务器流式',
    clientStreaming: '客户端流式',
    bidirectional: '双向流式',
    protoDefinition: 'Proto文件定义',
    switchToText: '切换到文本输入',
    switchToFile: '切换到文件上传',
    dragDrop: '拖放.proto文件到此处，或',
    clickUpload: '点击上传',
    onlyProto: '仅支持.proto文件格式',
    loadExample: '加载示例Proto',
    formatProto: '格式化',
    clear: '清除',
    parse: '解析Proto定义',
    parsing: '解析中...'
  },
  request: {
    title: '请求',
    metadata: '元数据',
    addMetadata: '添加元数据',
    key: '键',
    value: '值',
    message: '消息',
    jsonEditor: 'JSON编辑器',
    protoEditor: 'Proto编辑器',
    formEditor: '表单编辑器',
    send: '发送请求',
    cancel: '取消',
    stream: '流式消息',
    endStream: '结束流',
    exampleMessage: '示例消息',
    validJson: '有效的JSON',
    invalidJson: '无效的JSON',
    history: '请求历史',
    body: '请求体',
    bodyPlaceholder: '在此输入JSON格式的请求体...',
    runQuery: '运行查询',
    requestSent: '已发送',
    param: '请求参数',
    edit: '编辑',
    sending: '发送中...',
    time: '请求时间',
  },
  response: {
    title: '响应',
    status: '状态',
    metadata: '元数据',
    message: '消息',
    stream: '流',
    noResponse: '未收到响应',
    receivedAt: '接收时间',
    duration: '持续时间',
    copy: '复制响应',
    download: '下载',
    clear: '清除',
    streamClosed: '流已关闭',
    streamMessage: '流消息 #{number}',
    stats: '统计信息',
    messagesReceived: '已接收消息数',
    startTime: '开始时间',
    endTime: '结束时间',
    time: '响应时间'
  },
  settings: {
    title: '设置',
    theme: '主题',
    light: '浅色',
    dark: '深色',
    language: '语言',
    maxResponseSize: '最大响应大小',
    timeoutMs: '默认超时（毫秒）',
    prettyPrint: '美化打印JSON',
    saveDir: '保存目录',
    clearHistory: '清除历史',
    protoFormat: 'Proto格式',
    protobuf: 'Protobuf.js',
    grpcTools: 'gRPC工具',
    reflection: '使用服务器反射'
  },
  messages: {
    connecting: '正在连接到{server}...',
    connected: '已连接到{server}',
    disconnected: '已从服务器断开连接',
    connectionError: '连接错误：{error}',
    requestSent: '请求已发送',
    responseReceived: '响应已接收',
    streamingStarted: '流式传输已开始',
    streamingEnded: '流式传输已结束',
    protoLoaded: 'Proto文件加载成功',
    protoError: '加载Proto文件错误：{error}',
    metadataAdded: '元数据已添加',
    metadataError: '无效的元数据',
    savedToFile: '已将响应保存到文件',
    parsingError: '解析消息错误：{error}',
    reflectionError: '服务器反射错误：{error}',
    invalidProto: '无效的Proto定义',
    emptyUrl: '请输入服务URL',
    selectServiceMethod: '请选择服务和方法',
    invalidJson: '请求体不是有效的JSON: {error}',
    copy: '复制',
    copied: '响应已复制到剪贴板',
    copyFailed: '复制失败，请手动复制'
  },
  errors: {
    invalidArgument: 'INVALID_ARGUMENT - 无效参数',
    notFound: 'NOT_FOUND - 未找到资源',
    alreadyExists: 'ALREADY_EXISTS - 资源已存在',
    permissionDenied: 'PERMISSION_DENIED - 权限被拒绝',
    internal: 'INTERNAL - 内部错误',
    requestFailed: '请求失败: {error}'
  },
  
  article: {
    title: "gRPC调试器：远程过程调用交互式测试工具",
    features: {
      title: "了解gRPC调试和API测试",
      description: "<strong>gRPC调试器</strong>是一款综合性的基于Web的工具，设计用于直接从浏览器测试、调试和探索gRPC服务。与传统的REST API客户端不同，这款<strong>协议缓冲区测试工具</strong>提供了专门针对gRPC二进制协议和Protocol Buffers (protobuf)消息格式的特殊功能，允许开发人员无需编写自定义客户端代码即可与gRPC服务交互。<br><br>我们的<strong>gRPC客户端测试器</strong>支持包括proto文件解析、服务发现、通过动态表单构建进行请求构造、元数据管理和完整响应可视化等核心功能。这使其成为API开发人员处理现代微服务架构的不可或缺的工具，这些架构利用gRPC实现服务之间高效、强类型和高性能的通信。",
      useCases: {
        title: "gRPC测试的实际应用场景",
        items: [
          "<strong>微服务API开发</strong>：在构建基于微服务架构的分布式系统时，<strong>gRPC测试工具</strong>允许开发人员验证服务端点、验证消息格式并确保正确实现proto文件中定义的服务契约。这种交互式验证有助于在服务集成之前尽早发现问题。",
          "<strong>API集成测试</strong>：对于使用第三方或内部gRPC服务的应用程序，我们的调试器提供了一种方法来探索可用的方法、测试不同的输入参数并理解响应格式，而无需编写测试客户端。工程师可以通过首先通过手动测试了解预期行为来快速原型化集成代码。",
          "<strong>解决生产问题</strong>：当在使用gRPC的生产系统中遇到意外行为时，调试器允许支持工程师和开发人员在受控环境中复制特定请求、操作参数并观察响应。这种隔离有助于确定问题是源于客户端实现、服务逻辑还是网络配置。",
          "<strong>Protocol Buffer架构开发</strong>：在API的设计阶段，<strong>protobuf检查器</strong>功能通过可视化抽象消息定义如何转换为具体的请求和响应结构来帮助验证架构定义。这种反馈循环在广泛实施前改进proto文件设计。",
          "<strong>性能分析</strong>：调试器提供请求的时间信息，允许开发人员在不同条件下对gRPC服务性能进行基准测试。通过测试各种有效负载大小和复杂性，团队可以识别其服务实现中的潜在性能瓶颈。",
          "<strong>文档和知识共享</strong>：<strong>gRPC服务浏览器</strong>的可视界面使向非技术利益相关者、新团队成员或合作伙伴展示API功能变得更加容易。该工具作为静态API文档的交互式替代品，通过实际示例帮助他人理解服务功能。"
        ]
      }
    },
    faq: {
      title: "关于gRPC调试的常见问题",
      items: [
        {
          question: "gRPC和REST API有什么区别？",
          answer: "gRPC和REST代表了API设计的不同方法，具有不同的特性，影响着何时应使用每种方法。<br><br><strong>gRPC</strong>是一个高性能的RPC(远程过程调用)框架，使用Protocol Buffers进行消息序列化并通过HTTP/2运行。主要优势包括：<br><br>• <strong>契约优先方法</strong>，在.proto文件中定义严格类型的接口<br>• <strong>高效的二进制序列化</strong>，产生更小的消息大小<br>• <strong>内置流支持</strong>（一元、服务器流、客户端流和双向流）<br>• 通过HTTP/2的<strong>多路复用连接</strong>减少延迟<br>• 跨多种语言的<strong>代码生成</strong>确保类型安全<br><br><strong>REST</strong>(表述性状态转移)是一种架构风格，通常使用HTTP/1.1上的JSON，提供：<br><br>• 由于广泛采用而带来的<strong>简单性和熟悉性</strong><br>• 像JSON或XML这样的<strong>人类可读格式</strong><br>• 无需额外库的<strong>原生浏览器支持</strong><br>• 客户端和服务器之间的<strong>松散耦合</strong><br>• 用于测试和文档的<strong>广泛工具生态系统</strong><br><br><strong>gRPC调试器</strong>弥补了gRPC的工具差距，为传统上需要自定义客户端代码才能测试的gRPC服务提供类似REST的探索功能。"
        },
        {
          question: "如何创建.proto文件用于测试？",
          answer: "创建<strong>Protocol Buffer定义文件</strong>(.proto)是gRPC开发的基本步骤。以下是使用我们的调试器创建测试文件的指南：<br><br>1. <strong>定义语法版本</strong>：使用`syntax = \"proto3\";`开始文件，使用最新的proto语法版本。<br><br>2. <strong>使用包组织</strong>：使用`package`关键字对相关服务和消息进行分组，这有助于避免名称冲突（例如，`package ecommerce;`）。<br><br>3. <strong>定义消息</strong>：创建表示您将使用的数据结构的消息类型：<br><pre>message Product &#123;\n  string id = 1;\n  string name = 2;\n  double price = 3;\n  repeated string categories = 4;\n&#123;</pre><br>4. <strong>定义服务</strong>：指定服务接口及其方法：<br><pre>service ProductService &#123;\n  rpc GetProduct(GetProductRequest) returns (Product);\n  rpc SearchProducts(SearchRequest) returns (stream Product);\n  rpc UpdateProduct(Product) returns (UpdateResponse);\n&#125;</pre><br>5. <strong>导入其他proto</strong>：使用`import \"path/to/other.proto\";`引用其他文件中的定义。<br><br>6. <strong>添加字段选项</strong>：使用选项如`[deprecated=true]`或自定义选项增强字段以获得特定行为。<br><br>使用我们的<strong>gRPC调试器</strong>测试时，您可以直接上传此文件或将其内容粘贴到文本输入区域。调试器将解析文件并生成适当的表单界面，用于构建对您服务的请求。"
        },
        {
          question: "这个工具能否连接到安全的gRPC服务(SSL/TLS)？",
          answer: "是的，<strong>gRPC调试器</strong>支持连接到使用SSL/TLS加密的安全gRPC服务。以下是它如何处理安全连接：<br><br>1. <strong>基于浏览器的限制</strong>：由于这是在浏览器中运行的基于Web的工具，它在浏览器安全约束内运行。它可以连接到：<br><br>• 支持<strong>gRPC-Web协议</strong>的服务（与标准gRPC略有不同）<br>• 具有正确配置的<strong>CORS（跨源资源共享）</strong>头的服务<br>• 具有有效SSL证书的服务（在大多数情况下不是自签名的）<br><br>2. <strong>使用TLS</strong>：连接到安全服务时，确保：<br><br>• 使用<strong>\"https://\"</strong>前缀或明确启用<strong>\"使用TLS/SSL\"</strong>选项<br>• 服务必须具有浏览器信任的有效证书<br>• 检查是否需要客户端证书认证（相互TLS）<br><br>3. <strong>认证选项</strong>：对于需要认证的服务，您可以添加：<br><br>• 通过元数据的<strong>API密钥</strong>或<strong>访问令牌</strong><br>• <strong>基本认证</strong>头<br>• 授权头中的<strong>OAuth令牌</strong><br><br>4. <strong>代理考虑</strong>：在某些企业环境中，可能需要在浏览器和实际的gRPC服务之间使用gRPC-Web代理（如Envoy）。<br><br>如果您测试的内部服务不满足这些要求，请考虑使用桌面gRPC客户端或设置本地代理来处理安全要求并为调试器公开兼容的端点。"
        },
        {
          question: "为什么在发送请求前需要解析proto文件？",
          answer: "解析proto文件是使用<strong>gRPC调试器</strong>时的关键第一步，原因如下：<br><br>1. <strong>类型发现和验证</strong>：gRPC是一个强类型系统，客户端和服务器必须就消息的确切格式达成一致。proto文件作为定义以下内容的契约：<br><br>• 哪些<strong>服务和方法</strong>可用<br>• 每个方法期望的<strong>参数类型</strong><br>• 每个方法返回的<strong>响应类型</strong><br>• API中使用的任何<strong>嵌套消息结构</strong>或<strong>枚举</strong><br><br>2. <strong>动态界面生成</strong>：解析后，调试器可以：<br><br>• 显示可用服务和方法的列表<br>• 使用正确的字段构建适当的请求表单<br>• 提供类型特定的输入控件（文本字段、数字输入、布尔值的切换等）<br>• 根据字段类型设置适当的默认值<br><br>3. <strong>二进制序列化</strong>：gRPC使用Protocol Buffers作为其二进制传输格式。proto定义允许调试器：<br><br>• 将您的JSON输入<strong>序列化</strong>为正确的二进制protobuf格式<br>• 将二进制响应<strong>反序列化</strong>回可读的JSON<br>• 确保<strong>字段编号和类型</strong>与服务器期望的完全匹配<br><br>4. <strong>错误预防</strong>：没有适当的解析，您可能会发送格式不正确的请求，这些请求会在到达服务逻辑之前在序列化级别失败。<br><br>将proto文件视为API文档和序列化模式的结合。<strong>gRPC协议</strong>从根本上需要这些信息才能正常运行，这与REST API不同，使用REST API时，您可能在几乎没有预先了解的情况下探索端点。"
        },
        {
          question: "我可以用这个调试器测试哪些类型的gRPC方法？",
          answer: "这个<strong>gRPC调试器</strong>支持gRPC规范中定义的所有四种通信模式，每种模式都适用于不同的使用场景：<br><br>1. <strong>一元RPC</strong>：标准的请求-响应模式，客户端发送单个请求并接收单个响应。这与传统的REST API调用最相似，适用于：<br><br>• 简单的数据检索操作<br>• 创建、更新或删除操作<br>• 认证和验证请求<br><br>示例：`rpc GetUser(GetUserRequest) returns (User);`<br><br>2. <strong>服务器流式RPC</strong>：客户端发送单个请求并接收一系列响应消息。该模式适用于：<br><br>• 实时数据源<br>• 长时间运行操作的进度更新<br>• 大型数据集检索与渐进式加载<br><br>示例：`rpc ListProducts(ListRequest) returns (stream Product);`<br><br>3. <strong>客户端流式RPC</strong>：客户端发送一系列消息并接收单个响应。这种方法适用于：<br><br>• 上传大型数据集<br>• 持续传输传感器数据<br>• 产生单一结果的批量操作<br><br>示例：`rpc UploadData(stream DataChunk) returns (UploadSummary);`<br><br>4. <strong>双向流式RPC</strong>：客户端和服务器可以按任意顺序发送和接收多条消息。这种完全异步的模式支持：<br><br>• 聊天应用程序<br>• 实时游戏或协作<br>• 涉及来回通信的复杂工作流<br><br>示例：`rpc Chat(stream ChatMessage) returns (stream ChatMessage);`<br><br>我们的调试器为每种类型提供适当的界面元素，允许您测试所有通信模式，并提供流式响应的可视反馈和从客户端发送流式消息的适当控件。"
        }
      ]
    },
    guide: {
      title: "如何使用gRPC调试器：分步指南",
      step1: "<strong>定义gRPC服务URL</strong>：在URL字段中输入您的gRPC服务地址。对于基于浏览器的测试，这应该是支持gRPC-Web协议并启用了适当CORS头的服务。如果您测试的是安全服务，请确保使用HTTPS协议（例如，https://your-grpc-service.com）。",
      step2: "<strong>设置超时和连接选项</strong>：根据您的服务预期的响应时间配置请求超时（以毫秒为单位）。默认的30000ms（30秒）适用于大多数服务，但可能需要针对长时间运行的操作或在缓慢网络上测试时进行调整。",
      step3: "<strong>提供Protocol Buffer定义</strong>：您可以通过将.proto文件拖放到上传区域或点击从设备选择它们来上传.proto文件，或者使用切换开关切换到文本输入模式，直接粘贴您的Proto定义。对于初学者，\"加载示例Proto\"选项提供了一个起始模板，帮助理解格式。",
      step4: "<strong>解析Proto定义</strong>：点击\"解析Proto定义\"按钮处理您的.proto文件。这将分析服务接口、消息类型和字段定义，使调试器能够生成适当的请求表单并正确序列化/反序列化消息。如果您的proto文件中有任何语法错误，您将收到错误消息以帮助识别问题。",
      step5: "<strong>选择服务和方法</strong>：解析成功后，从下拉列表中选择特定服务（如果您的proto文件定义了多个服务）。然后从可用方法列表中选择要测试的方法。将指示方法类型（一元、服务器流式、客户端流式或双向流式），以帮助您理解预期的通信模式。",
      step6: "<strong>构建和自定义您的请求</strong>：调试器为所选方法的请求类型生成JSON模板。修改提供的JSON结构以包含您的测试值。编辑器自动格式化和验证您的JSON内容，确保它匹配预期的消息结构。如果需要，您可以使用格式按钮清理您的JSON。",
      step7: "<strong>发送请求并分析响应</strong>：点击\"发送请求\"按钮将您的gRPC调用传输到服务。对于一元调用，您将在响应部分看到显示的响应数据，以及计时信息。对于流式调用，您将看到响应消息在到达时显示。如果发生任何错误，调试器将显示错误详情以帮助排除故障。"
    },
    conclusion: "gRPC调试器提供了一个直观的基于浏览器的界面，用于与强大但复杂的gRPC服务世界交互。通过桥接人类操作者和gRPC二进制协议之间的差距，这个工具显著简化了开发、测试和排除现代API服务问题的过程。无论您是设计新的微服务架构、集成现有gRPC服务，还是诊断生产系统中的问题，这个调试器提供的可视化方法都能降低学习曲线并加速开发工作流程。随着越来越多的组织采用gRPC以获得其性能和强类型优势，拥有可访问的测试工具对于确保API质量和可靠性变得越来越有价值。"
  }
} 