export default {
  name: 'MQTT测试工具',
  description: '测试和调试MQTT连接，发布消息和订阅主题',
  connection: {
    title: '连接',
    broker: '端口号',
    url: '代理URL',
    urlPlaceholder: '例如：mqtt://broker.example.com:1883',
    clientId: '客户端ID',
    clientIdPlaceholder: '输入客户端ID或留空随机生成',
    username: '用户名',
    password: '密码',
    keepAlive: '保持连接',
    cleanSession: '清除会话',
    autoReconnect: '自动重连',
    ssl: '使用SSL/TLS',
    sslOptions: 'SSL/TLS选项',
    protocol: '协议版本',
    portInfo: '默认端口: MQTT(1883), WebSocket(8083)',
    connect: '连接',
    disconnect: '断开连接',
    status: '状态',
    connected: '已连接',
    disconnected: '已断开连接',
    connecting: '连接中...'
  },
  publish: {
    title: '发布',
    topic: '主题',
    topicPlaceholder: '输入要发布的主题',
    message: '消息',
    messagePlaceholder: '输入消息内容',
    qos: '服务质量(QoS)',
    retain: '保留',
    format: '内容格式',
    text: '文本',
    json: 'JSON',
    hex: '十六进制',
    binary: '二进制',
    send: '发布',
    clear: '清除',
    history: '历史记录',
    addToFavorites: '添加到收藏',
    validateJson: '验证JSON'
  },
  subscribe: {
    title: '订阅',
    topic: '主题',
    topicPlaceholder: '输入要订阅的主题（支持通配符#和+）',
    qos: '服务质量(QoS)',
    subscribe: '订阅',
    unsubscribe: '取消订阅',
    unsubscribeAll: '取消所有订阅',
    subscriptions: '活动订阅',
    noSubscriptions: '没有活动订阅',
    addSubscription: '添加订阅',
    topicPatterns: '主题模式',
    systemTopics: '系统主题'
  },
  messages: {
    title: '消息',
    received: '接收的消息',
    sent: '发送的消息',
    topic: '主题',
    payload: '负载',
    qos: 'QoS',
    retained: '保留',
    time: '时间',
    clear: '清除消息',
    export: '导出消息',
    filter: '筛选',
    noMessages: '没有消息',
    view: '查看详情',
    copy: '复制负载',
    duplicate: '复制为发布'
  },
  tools: {
    title: '工具',
    topicGenerator: '主题生成器',
    payloadFormatter: '负载格式化器',
    qosExplainer: 'QoS说明',
    wildcardTester: '通配符测试器',
    packetInspector: '数据包检查器',
    loadTest: '负载测试'
  },
  settings: {
    title: '设置',
    maxMessages: '最大消息数',
    timeFormat: '时间格式',
    theme: '主题',
    autoExpand: '自动展开消息',
    saveHistory: '保存历史记录',
    clearOnDisconnect: '断开连接时清除消息',
    advanced: '高级设置',
    lastWill: '遗嘱消息'
  },
  lastWill: {
    title: '遗嘱',
    enable: '启用遗嘱',
    topic: '遗嘱主题',
    message: '遗嘱消息',
    qos: '遗嘱QoS',
    retain: '遗嘱保留'
  },
  notifications: {
    connectSuccess: '已连接到{broker}',
    connectError: '连接错误：{error}',
    disconnected: '已从代理断开连接',
    subscribeSuccess: '已订阅{topic}',
    subscribeError: '订阅失败：{error}',
    unsubscribeSuccess: '已取消订阅{topic}',
    publishSuccess: '消息已发布到{topic}',
    publishError: '发布失败：{error}',
    invalidJson: '无效的JSON负载',
    packetReceived: '已接收{packets}个数据包'
  },
  article: {
    title: "MQTT测试工具 - 物联网消息协议测试全指南",
    intro: {
      title: "什么是MQTT测试工具，为什么需要它",
      p1: "<b>MQTT（消息队列遥测传输）</b>是为受限设备和低带宽、高延迟网络设计的轻量级消息协议，非常适合物联网(IoT)应用。我们的MQTT测试工具提供了全面的测试、调试和优化MQTT连接的环境，使开发人员能够高效可靠地验证其物联网通信基础设施。",
      p2: "<b>MQTT协议测试工具</b>是IoT设备开发与部署之间的重要桥梁，允许您在MQTT生态系统中同时模拟发布者和订阅者。通过实现实时消息发布、主题订阅和连接诊断，我们的工具有助于在问题影响生产环境之前识别潜在问题。这种主动方法显著减少了调试时间，提高了物联网应用的可靠性。",
      p3: "使用我们的<b>在线MQTT客户端</b>，您可以连接到任何MQTT代理，测试各种服务质量(QoS)级别，实现遗嘱消息(LWT)，并验证保留消息。无论您是开发智能家居系统、工业监控解决方案还是任何IoT应用，我们的MQTT测试工具都提供了确保消息传递基础设施在各种网络条件和使用场景下正常运行所需的功能。"
    },
    useCases: {
      title: "MQTT测试的实际应用",
      case1: "<b>IoT设备开发和调试</b>：硬件工程师和固件开发人员使用MQTT测试工具在完成设计前验证设备通信。在开发新的IoT产品时，验证消息发布模式、负载格式和订阅响应的能力有助于在开发周期早期识别和修复通信问题，显著缩短上市时间。",
      case2: "<b>智能家居自动化集成</b>：构建智能家居系统的开发人员依靠MQTT测试确保恒温器、照明系统和安全传感器等各种设备之间的可靠通信。我们的MQTT测试工具通过模拟触发器并分析设备响应，验证自动化规则，确保您的智能家居生态系统无缝运行。",
      case3: "<b>工业监控系统</b>：在工业IoT环境中，MQTT测试有助于验证传感器数据是否正确传输、处理和响应。系统集成商使用我们的工具模拟传感器读数，测试警报阈值，并验证控制系统对不同操作场景的适当响应，提高工厂车间的可靠性。",
      case4: "<b>MQTT代理配置和优化</b>：系统管理员使用MQTT测试工具在各种负载下对代理性能进行基准测试，测试认证机制，并优化服务质量设置。我们的测试工具允许同时模拟多个客户端，帮助识别可能影响生产系统的潜在瓶颈和配置问题。",
      case5: "<b>跨平台应用开发</b>：构建多平台IoT应用的开发人员需要确保跨Web、移动和桌面界面的一致消息行为。MQTT测试工具提供了标准参考实现，以验证所有客户端应用程序一致地解释消息，减少特定平台的错误。"
    },
    tutorial: {
      title: "如何使用我们的MQTT测试工具",
      intro: "我们的MQTT测试工具设计直观而强大。按照以下简单步骤有效测试您的MQTT实现：",
      step1: {
        title: "步骤1：配置连接设置",
        description: "首先在连接部分输入您的<b>MQTT代理详细信息</b>。输入代理URL（例如，mqtt://broker.example.com:1883或ws://broker.example.com:8083用于WebSocket连接）。您可以选择指定客户端ID，或留空以获取随机ID。如果您的代理需要认证，请输入用户名和密码。对于安全连接，启用SSL/TLS选项。配置完成后，点击\"连接\"按钮与MQTT代理建立连接。"
      },
      step2: {
        title: "步骤2：订阅主题",
        description: "成功连接到代理后，导航至<b>订阅部分</b>以监听消息。在主题字段中输入您希望订阅的主题。MQTT主题支持通配符 - 使用#匹配多个主题层级，使用+匹配单个层级（例如，home/+/temperature订阅任何房间的温度读数）。选择所需的服务质量(QoS)级别，然后点击\"订阅\"。工具现在将监听发布到匹配主题的任何消息。"
      },
      step3: {
        title: "步骤3：发布消息",
        description: "要向代理发送消息，请使用工具的<b>发布部分</b>。输入目标主题并撰写您的消息负载。您可以将负载格式化为纯文本、JSON（带验证）、十六进制或二进制数据。设置适当的QoS级别，并决定是否设置\"保留\"标志，该标志指示代理为未来的订阅者存储消息。点击\"发布\"按钮将您的消息发送到代理。"
      },
      step4: {
        title: "步骤4：监控和分析消息",
        description: "<b>消息部分</b>显示所有接收和发送的通信。每条消息显示主题、负载、QoS级别、保留状态和时间戳。您可以按主题或内容过滤消息，以专注于特定的数据流。要进行详细检查，点击任何消息查看其完整内容。使用\"复制负载\"按钮提取消息数据以进行进一步分析，或使用\"复制为发布\"选项快速响应收到的消息。"
      }
    },
    mqttBasics: {
      title: "理解MQTT协议基础",
      intro: "要有效地使用MQTT测试工具，了解MQTT协议的这些关键概念会很有帮助：",
      pubsub: {
        title: "发布-订阅模型",
        description: "<b>MQTT使用发布-订阅架构</b>，将消息发送者（发布者）与接收者（订阅者）解耦。这种模型与传统的客户端-服务器通信不同，引入了管理消息分发的代理。发布者将消息发送到主题，而不知道谁（如果有的话）会接收它们，而订阅者表达对主题的兴趣，而不知道谁发布到这些主题。这种解耦提供了可扩展性和灵活性，允许一对多、多对一和多对多的通信模式。"
      },
      qos: {
        title: "服务质量(QoS)级别",
        description: "<b>MQTT提供三种服务质量级别</b>，平衡可靠性与效率：QoS 0（最多一次）不提供交付保证但开销最小，非常适合频繁、非关键数据，如温度读数。QoS 1（至少一次）确保消息到达接收者但可能传递重复，适用于可接受处理重复的重要消息。QoS 2（恰好一次）通过四部分握手保证单次交付，非常适合重复可能导致问题的关键命令或金融交易。"
      },
      retain: {
        title: "保留消息",
        description: "<b>保留消息</b>是代理为未来订阅者存储的特殊MQTT消息。当消息以retain标志设置为true发布时，代理将其保存为该主题的最新值。任何新订阅该主题的用户都会立即收到最近的保留消息，即使他们在消息发布很久后才订阅。这一功能对设备状态信息、配置值或其他新订阅者应在连接时接收的\"最后已知良好\"数据特别有用。"
      },
      lastwill: {
        title: "遗嘱消息(LWT)",
        description: "<b>遗嘱功能</b>为客户端提供了一种机制，在连接期间向代理注册\"遗嘱\"消息。如果客户端意外断开连接（没有发送适当的DISCONNECT消息），代理会自动将此遗嘱消息发布到指定主题。这种通知系统允许IoT系统的其他部分被告知意外断开连接并采取适当行动，如将设备标记为离线或触发故障转移机制。"
      }
    },
    faq: {
      title: "关于MQTT测试的常见问题",
      q1: "MQTT和HTTP在物联网应用中有什么区别？",
      a1: "<b>MQTT和HTTP代表了物联网通信的不同方法</b>，每种方法在特定场景中都有其独特优势。MQTT专为受限环境设计，采用发布-订阅模型，最小封包大小（小至2字节）和持久连接减少开销。它在带宽有限、网络不可靠或电池供电的设备环境中表现出色。<br><br>相比之下，HTTP遵循请求-响应模型，要求客户端发起所有通信。由于每次事务都需要建立连接和通常更大的消息大小，它的开销更高。然而，HTTP受益于普遍支持、丰富的工具生态系统和与Web应用程序的直接集成。<br><br>对于需要双向通信的实时应用，MQTT通常提供更好的性能，具有QoS级别、保留消息和遗嘱功能等特性。我们的MQTT测试工具允许您验证这些功能，并确定MQTT是否适合您特定的IoT用例。",
      
      q2: "如何保障MQTT通信安全？",
      a2: "<b>保障MQTT通信安全</b>涉及多层保护，所有这些都可以用我们的工具进行测试：<br><br>1. <b>传输安全</b>：通过连接到安全端点（mqtts://或wss://）并配置适当的证书，启用TLS/SSL加密。我们的测试工具支持加密和非加密连接，允许您验证正确的TLS实现。<br><br>2. <b>认证</b>：实现用户名/密码认证或客户端证书认证。您可以使用我们工具的连接设置测试这些凭据，确保您的代理正确执行认证策略。<br><br>3. <b>授权</b>：设置主题级别权限，控制哪些客户端可以发布或订阅特定主题。使用我们的工具验证未授权的发布或订阅尝试是否被您的代理正确拒绝。<br><br>4. <b>负载加密</b>：为额外安全，在发布前加密消息负载。您可以使用我们的工具测试端到端加密，通过发布加密消息并验证授权订阅者是否能正确解密来实现。<br><br>记住，安全应深度实施，结合多种方法而不是仅依赖单一机制。",
      
      q3: "MQTT主题设计的最佳实践是什么？",
      a3: "<b>有效的MQTT主题设计</b>对可扩展和可维护的IoT系统至关重要。以下是应遵循的关键原则：<br><br>1. <b>使用层次结构</b>，以正斜杠作为分隔符（例如，building/floor/room/device/measurement）。这种组织能够通过通配符实现高效过滤，并反映系统的逻辑结构。<br><br>2. <b>避免以正斜杠开始主题</b>，因为这会创建不必要的空层级，并可能导致不同代理实现之间的主题匹配不一致。<br><br>3. <b>在主题中包含设备标识符</b>（例如，sensors/deviceID/temperature），确保每个设备有唯一主题并简化消息路由。<br><br>4. <b>使用标准化主题命名空间</b>用于常见功能，如设备状态（status/deviceID）、命令（commands/deviceID）和配置（config/deviceID）。<br><br>5. <b>考虑主题长度限制</b> - 虽然MQTT允许长主题，但保持简洁可提高效率，特别是对受限设备。<br><br>我们的MQTT测试工具可以帮助验证您的主题设计，允许您用通配符测试订阅模式，并验证消息传递到预期接收者。",
      
      q4: "如何排查MQTT连接问题？",
      a4: "面对<b>MQTT连接问题</b>时，请遵循这一系统化的故障排除方法：<br><br>1. <b>验证网络连接</b>：确保设备可以到达代理的IP地址和端口。使用我们工具的连接状态指示器确认基本网络访问。<br><br>2. <b>检查代理地址和端口</b>：确认您使用的是正确的代理URL、端口号和协议（mqtt://用于TCP连接，ws://用于WebSocket连接）。常见端口有1883（MQTT），8883（MQTT over TLS），8083（WebSockets）和8084（安全WebSockets）。<br><br>3. <b>验证凭据</b>：如果启用了认证，确保用户名和密码正确。连接错误通常是由认证失败引起的。<br><br>4. <b>检查SSL/TLS设置</b>：对于安全连接，验证证书配置，包括CA证书、客户端证书和支持的TLS版本。<br><br>5. <b>检查客户端ID冲突</b>：MQTT代理通常不允许多个连接使用相同的客户端ID。我们的测试工具可以帮助识别您的连接是否因ID冲突而被拒绝。<br><br>6. <b>查看代理日志</b>：大多数MQTT代理提供详细的连接日志，可揭示连接失败的具体原因。<br><br>我们的MQTT测试工具提供实时连接状态和详细错误消息，帮助精确定位连接问题的确切原因。",
      
      q5: "处理MQTT断开连接和重新连接的最佳方法是什么？",
      a5: "实现强健的<b>MQTT断开连接处理</b>对可靠的IoT应用至关重要：<br><br>1. <b>启用自动重连</b>：配置您的MQTT客户端在连接丢失时自动尝试重新连接。我们的MQTT测试工具内置此功能，可帮助您测试应用程序在重新连接场景中的行为。<br><br>2. <b>实现指数退避</b>：不要以固定间隔尝试重新连接，而是在重新连接尝试之间使用渐进式更长的延迟，以防止在中断期间过载代理。<br><br>3. <b>设置适当的遗嘱消息</b>：配置LWT消息，在设备意外断开连接时通知系统的其他部分。您可以在我们工具的高级连接设置中测试此功能。<br><br>4. <b>维护消息队列</b>：对关键数据，实现断开连接期间的客户端消息排队，然后在连接恢复时发送它们。<br><br>5. <b>使用持久会话</b>：在适当时启用\"清除会话\"标志，以在连接之间维护订阅信息和排队消息。<br><br>6. <b>监控连接状态</b>：在生产环境中实现连接状态监控和长时间断开连接的警报。<br><br>我们的MQTT测试工具可以模拟各种断开连接场景，帮助您验证应用程序是否优雅地处理连接问题。"
    },
    relatedTools: {
      title: "探索相关物联网和网络工具",
      description: "使用这些补充工具增强您的物联网开发工作流程：",
      tool1: {
        name: "WebSocket测试工具",
        url: "https://www.ufreetools.com/tool/websocket-tester",
        description: "测试WebSocket连接，具有实时消息发送和接收功能。"
      },
      tool2: {
        name: "JSON格式化和验证器",
        url: "https://www.ufreetools.com/tool/json-formatter",
        description: "格式化、验证和美化MQTT负载中常用的JSON数据。"
      },
      tool3: {
        name: "HTTP代理检测器",
        url: "https://www.ufreetools.com/tool/http-proxy-detector",
        description: "检测您的连接是否使用HTTP代理，并分析与代理相关的头部进行安全验证。"
      },
      tool4: {
        name: "Base64编码/解码器",
        url: "https://www.ufreetools.com/tool/base64-encoder-decoder",
        description: "编码和解码MQTT消息中常用的Base64二进制负载数据。"
      }
    },
    resources: {
      title: "MQTT协议权威资源",
      resource1: {
        name: "MQTT.org - 官方MQTT文档",
        url: "https://mqtt.org/",
        description: "由OASIS联盟维护的官方MQTT协议文档、规范和最佳实践。"
      },
      resource2: {
        name: "HiveMQ - MQTT基础指南",
        url: "https://www.hivemq.com/mqtt-essentials/",
        description: "一系列全面的文章，实用地涵盖MQTT协议的所有基本方面。"
      },
      resource3: {
        name: "Eclipse Mosquitto - 开源MQTT代理",
        url: "https://mosquitto.org/",
        description: "流行的开源MQTT代理文档，包括配置选项和安全最佳实践。"
      }
    }
  }
} 