export default {
  name: 'User-Agent 生成器',
  description: '生成各种浏览器和设备的 User-Agent 字符串，用于网站测试、爬虫和开发',
  filters: {
    title: '过滤条件',
    browser: '浏览器',
    os: '操作系统',
    deviceType: '设备类型'
  },
  browsers: {
    all: '所有浏览器',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    opera: 'Opera',
    edge: 'Edge',
    ie: 'Internet Explorer',
    unknown: '未知浏览器'
  },
  operatingSystems: {
    all: '所有系统',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    unknown: '未知系统'
  },
  deviceTypes: {
    all: '所有设备',
    desktop: '桌面电脑',
    mobile: '移动设备',
    tablet: '平板电脑',
    unknown: '未知设备'
  },
  generation: {
    quantity: '生成数量',
    generateRandom: '生成随机 User-Agent',
    clearResults: '清空结果'
  },
  results: {
    title: '生成结果',
    copyAll: '复制全部',
    empty: '请点击"生成随机 User-Agent"按钮生成结果'
  },
  messages: {
    copied: '已复制到剪贴板',
    allCopied: '所有 User-Agent 已复制到剪贴板',
    copyFailed: '复制失败，请手动复制'
  },
  info: {
    formatTitle: 'User-Agent 格式说明',
    formatDescription: 'User-Agent 字符串通常包含浏览器名称、版本、操作系统和设备信息等，格式如下：',
    formatExample: 'Mozilla/5.0 (平台信息) 引擎信息 浏览器信息',
    examplesTitle: '常见 User-Agent 示例：',
    chromeWindows: 'Chrome (Windows):',
    firefoxMac: 'Firefox (macOS):',
    safariIOS: 'Safari (iOS):',
    useCasesTitle: '使用场景：',
    useCases: [
      '网站兼容性测试',
      '爬虫和数据采集',
      'API开发和测试',
      '绕过浏览器检测',
      '模拟不同设备访问'
    ]
  },
  article: {
    title: "User-Agent生成器：创建浏览器标识字符串",
    features: {
      title: "理解User-Agent字符串及其应用",
      description: "我们的<strong>User-Agent生成器</strong>是一款专门设计用于创建各种测试和开发用途的浏览器标识字符串的工具。这些被称为<strong>用户代理头</strong>的字符串由浏览器发送给网站，包含有关浏览器类型、版本、操作系统和设备特性的关键信息。<br><br>这个强大的<strong>UA字符串创建工具</strong>允许您为所有主要浏览器（包括Chrome、Firefox、Safari、Edge和Opera）在不同操作系统和设备类型上生成准确逼真的用户代理字符串。您可以根据特定条件过滤和自定义生成的字符串，确保获得适合您特定用例的精确浏览器指纹。<br><br>无论您是测试网站兼容性、开发网络爬虫工具，还是排查特定平台问题，获取多样化和真实的<strong>浏览器标识字符串</strong>对于准确结果至关重要。",
      useCases: {
        title: "User-Agent生成的实际应用",
        items: [
          "<strong>跨浏览器测试</strong>：网页开发人员使用<strong>UA字符串生成</strong>模拟不同浏览器环境，无需安装多个浏览器。通过在HTTP请求中发送不同的用户代理字符串，您可以测试您的网站在各种浏览器和版本下的表现，识别可能影响受众特定浏览器段的渲染不一致或兼容性问题。",
          
          "<strong>网络爬虫开发</strong>：数据科学家和自动化专家在构建网络爬虫时依赖<strong>浏览器标识模拟</strong>。使用各种用户代理字符串有助于避免被阻止自动访问的网站检测，通过使请求看起来来自不同的合法浏览器而非单一可识别的爬取工具，实现更可靠的数据收集。",
          
          "<strong>移动应用测试</strong>：开发人员利用<strong>设备UA字符串模拟</strong>测试网络服务如何响应移动应用请求。由于许多后端系统根据请求设备提供不同内容，拥有逼真的移动用户代理字符串允许开发人员验证其API是否正确识别并响应来自各种移动平台的请求。",
          
          "<strong>SEO分析</strong>：营销专业人员采用<strong>搜索引擎机器人模拟</strong>来了解爬虫如何查看他们的网站。通过使用模仿Googlebot、Bingbot或其他搜索引擎爬虫的用户代理字符串，SEO专家可以近似了解搜索引擎如何解释他们的网站内容，帮助优化以在搜索结果中获得更好的可见性。",
          
          "<strong>地理位置测试</strong>：国际企业利用<strong>区域浏览器指纹</strong>测试基于位置的功能。某些用户代理字符串包含区域或语言偏好的微妙指标，允许开发人员测试地理位置功能并确保内容为不同市场正确本地化，而无需更改他们的物理位置。",
          
          "<strong>安全研究</strong>：网络安全专业人员使用<strong>UA字符串分析和生成</strong>测试系统漏洞。通过检查应用程序如何处理异常或格式错误的用户代理字符串，安全研究人员可以识别用户输入验证或处理逻辑中可能被攻击利用的潜在弱点。"
        ]
      }
    },
    faq: {
      title: "关于User-Agent生成的常见问题",
      items: [
        {
          question: "User-Agent字符串究竟是什么，为什么它很重要？",
          answer: "<strong>User-Agent字符串</strong>是浏览器随每个请求发送给网站的文本标识，包含以下详细信息：<br><br>• 浏览器名称和版本（如Chrome 91）<br>• 操作系统（如Windows 10、macOS）<br>• 设备信息（特别是移动设备）<br>• 渲染引擎详细信息（如WebKit、Gecko）<br>• 有时包含额外的兼容性信息<br><br>这些字符串之所以重要，是因为网站通常使用它们来：<br><br>• 提供适合设备的内容<br>• 启用特定浏览器功能<br>• 收集分析数据<br>• 实施安全措施<br><br>我们的<strong>User-Agent生成器工具</strong>创建真实的字符串，精确模仿真实浏览器标识，使开发人员和测试人员能够模拟不同的浏览环境，而无需多种物理设备或浏览器安装。"
        },
        {
          question: "如何生成移动设备的User-Agent字符串？",
          answer: "使用我们的工具生成<strong>移动设备User-Agent</strong>非常简单：<br><br>1. 在设备类型下拉菜单中选择\"移动设备\"<br>2. 可选择特定操作系统（iOS或Android）<br>3. 可选择首选移动浏览器<br>4. 点击\"生成随机User-Agent\"<br><br>该工具将创建包含适当设备信息的逼真<strong>移动浏览器标识符</strong>。移动用户代理字符串通常包含特定指标如\"Mobile\"或\"Android\"，并常包含设备型号信息。对于iOS设备，字符串将包含iPhone或iPad标识符以及iOS版本详情。<br><br>这些移动字符串对于测试响应式设计、移动特定功能或开发需要通过<strong>设备检测机制</strong>区分桌面和移动用户的应用程序特别有价值。"
        },
        {
          question: "生成的User-Agent字符串被网站识别为合法吗？",
          answer: "是的，我们的<strong>浏览器指纹生成器</strong>创建的用户代理字符串被网站识别为来自真实浏览器，因为：<br><br>• 它们基于来自真实设备的实际用户代理字符串格式<br>• 它们保持网站期望的正确语法和结构<br>• 它们包含准确的版本编号和平台指标<br>• 它们包含真实浏览器使用的适当兼容性标记<br><br>网站通常无法区分我们生成的字符串和来自实际浏览器的字符串，使其成为测试的理想选择。然而，值得注意的是，一些复杂的网站采用除了用户代理检查之外的其他浏览器指纹技术。这些可能包括JavaScript执行模式、canvas指纹或字体检测，仅靠我们的<strong>UA字符串生成</strong>无法解决。<br><br>不过，对于大多数测试场景，这些生成的字符串提供了足够逼真的<strong>浏览器标识</strong>，以触发适当的网站行为。"
        },
        {
          question: "我应该多久更新一次用于测试的User-Agent字符串？",
          answer: "您应该定期更新<strong>浏览器标识字符串</strong>，因为：<br><br>• 浏览器供应商大约每4-6周发布新版本<br>• 主要版本变更可能显著改变用户代理格式<br>• 网站越来越针对较新浏览器版本提供功能<br>• 操作系统标识符随新版本发布而演变<br><br>作为最佳实践：<br><br>• 关键生产测试：每月更新，匹配主流浏览器发布<br>• 一般开发：每季度刷新，保持合理的当前性<br>• 向后兼容性测试：维护当前和历史字符串的集合<br><br>我们的<strong>User-Agent生成器</strong>提供反映最新浏览器版本和格式的当前、逼真的字符串。对于涉及非常特定浏览器版本的专业测试，您可能希望生成并保存代表目标浏览器生态系统的字符串库，定期刷新此集合以保持测试准确性。"
        },
        {
          question: "更改我的浏览器User-Agent合法且符合道德吗？",
          answer: "更改<strong>浏览器的标识字符串</strong>存在于一个微妙的法律和道德空间：<br><br><strong>法律考虑</strong>：<br>• 用于测试、开发和研究目的通常合法<br>• 可能违反特定网站或服务的使用条款<br>• 可能违反与某些供应商的合同协议<br><br><strong>道德准则</strong>：<br>• 可接受：用于开发、兼容性测试、安全研究、隐私保护<br>• 存疑：规避付费墙、访问地理限制内容、逃避速率限制<br>• 不道德：冒充搜索引擎爬虫、绕过安全措施、未经许可爬取<br><br>使用我们的<strong>User-Agent字符串生成器</strong>的最佳实践：<br><br>1. 查看目标网站的服务条款<br>2. 进行安全测试时获取许可<br>3. 将其用于合法开发目的<br>4. 考虑您的测试给他人基础设施带来的负载<br><br>请记住，<strong>浏览器指纹</strong>只是网站识别用户的一个方面，仅修改用户代理可能无法实现完全匿名或成功模拟不同浏览器环境的所有方面。"
        }
      ]
    },
    guide: {
      title: "如何使用User-Agent生成器：分步指南",
      step1: "<strong>选择过滤条件</strong>：首先选择用户代理字符串的特定参数。使用下拉菜单按浏览器类型（Chrome、Firefox、Safari等）、操作系统（Windows、macOS、Android、iOS等）和设备类型（桌面、移动、平板）进行过滤。这种定向确保您生成与特定测试或开发需求相关的用户代理字符串。",
      step2: "<strong>指定所需数量</strong>：通过在数量字段中输入数字，确定您想要一次生成多少个用户代理字符串。该工具允许您在单次操作中创建1到100个字符串，无论您是只需要几个特定示例还是需要用于全面测试场景的更大数据集，都非常方便。",
      step3: "<strong>生成User-Agent字符串</strong>：点击\"生成随机User-Agent\"按钮，创建您的自定义浏览器标识字符串。该工具将立即生成符合您指定条件的请求数量的用户代理。每个生成的字符串都将是唯一的，并按照真实浏览器使用的标准惯例格式化。",
      step4: "<strong>查看并选择字符串</strong>：检查结果部分显示的生成用户代理字符串。每个条目都显示浏览器类型、操作系统和设备类别的摘要，便于识别。完整的用户代理字符串显示在此摘要下方，让您验证它是否包含您特定用例所需的所有元素。",
      step5: "<strong>复制并实施字符串</strong>：当您找到满足您要求的用户代理字符串时，可以通过点击每个字符串旁边的复制图标复制单个字符串，或使用结果部分顶部的\"复制全部\"按钮一次复制所有生成的字符串。然后可以在您的测试工具、网络爬虫应用程序、浏览器扩展或API请求中实施这些字符串。"
    },
    conclusion: "User-Agent字符串仍然是网络架构的基本组成部分，作为在互联网上识别浏览器和设备的数字指纹。虽然它们的主要目的是帮助网站提供优化内容，但它们已成为开发人员、测试人员和研究人员的宝贵工具。我们的User-Agent生成器提供了一种直接方法来为各种浏览器、操作系统和设备创建这些标识字符串，实现更全面的测试和开发过程。无论您是构建响应式网站、开发跨浏览器应用程序，还是进行兼容性研究，获取准确多样的用户代理字符串都是必不可少的。随着浏览器技术的不断发展，这些字符串中包含的格式和信息也将随之发展，使得可靠的生成器工具对于跟上网络标准和用户期望变得越来越有价值。"
  }
} 