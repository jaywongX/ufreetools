export default {
  loading: '加载中...',
  error: '错误',
  success: '成功',
  cancel: '取消',
  save: '保存',
  delete: '删除',
  confirm: '确认',
  navigation: '导航',
  expand: '展开',
  collapse: '折叠',
  
  languageDetector: {
    detected: '我们检测到您的浏览器语言是 {lang}',
    switchQuestion: '您想切换到这种语言吗？',
    switchNow: '立即切换',
    stayOn: '继续使用{lang}'
  },
  defaultDescription: '为开发者、设计师和日常用户提供的免费在线工具。',
  site: {
    name: '工具集'
  },
  characters: '字符数',
  lines: '行数',
  pasteFromClipboard: '从剪贴板粘贴',
  pasteError: '无法从剪贴板读取',
  copyFailed: '复制失败',
  simple: '简单',
  nested: '嵌套',
  complex: '复杂',
  example: '示例',
  loadExample: '加载示例',
  spaces: '空格',
  donate: '捐赠',
  buyMeACoffee: '请我喝咖啡',
  donateInternational: '海外用户',
  donateChina: '中国大陆',
  wechatPay: '微信赞赏码',
  wechatDonation: '微信赞赏码',
  scanToSupport: '扫描下面的二维码进行赞赏',
  thankYouForSupport: '感谢您的支持！',
  backToHome: "返回首页",
  submit: '提交',
  submitting: '提交中...',
  useTool: '使用工具',
  favorites: {
    title: '我的收藏',
    description: '查看和管理您收藏的工具',
    add: '添加到收藏',
    remove: '从收藏中移除',
    empty: '您的收藏夹中还没有工具',
    browseTools: '浏览所有工具',
    article: {
      title: "收藏夹功能: 高效管理您喜爱的工具",
      intro: {
        title: "收藏夹功能介绍与应用场景",
        p1: "<b>收藏夹功能</b>让您可以轻松保存和管理您最常用的在线工具。通过将工具添加到收藏夹中，您可以创建一个个性化的工具集合，无需每次都在众多工具中搜索寻找。这对于经常使用特定工具的用户来说，可以显著提高工作效率，节省宝贵的时间。收藏夹功能完全在浏览器本地运行，无需创建账户或登录，保护您的隐私的同时提供便捷服务。",
        p2: "在日常工作和学习中，<b>我们经常使用多种在线工具</b>辅助完成各类任务。例如，开发人员可能需要频繁访问JSON格式化工具、编码转换器和压缩工具；设计师可能需要定期使用颜色选择器、图像处理和SVG优化工具；而普通用户则可能依赖于文档转换、随机生成器或计算工具。通过收藏夹功能，您可以将这些常用工具组织在一起，创建一个专属于您的工作流程的工具箱。",
        p3: "<b>收藏夹功能适用于多种场景</b>，包括但不限于：编程开发中快速访问常用编码工具；学习过程中整理教育资源和计算工具；工作环境中组织文档处理和格式转换工具；以及个人用途如收集实用的日常小工具。无论您是专业人士还是普通用户，收藏夹功能都能帮助您更高效地使用在线工具，打造专属于您的工具集合。"
      },
      tutorial: {
        title: "如何使用收藏夹功能",
        intro: "以下是使用收藏夹功能的简单步骤指南，帮助您开始组织和管理您喜爱的工具：",
        step1: {
          title: "步骤1：添加工具到收藏夹",
          description: "在浏览工具时，每个工具卡片或工具详情页面右上角都有一个星形图标。点击这个星形图标即可将工具添加到您的收藏夹。当工具被成功添加后，星形图标会变为黄色，表示该工具已在您的收藏列表中。您可以在任何时候添加或取消收藏工具，系统会自动保存您的选择。"
        },
        step2: {
          title: "步骤2：访问您的收藏夹",
          description: "要查看您已收藏的所有工具，可以点击导航栏或侧边栏中的'收藏夹'链接。这将带您进入收藏夹页面，显示所有您添加过的工具。您也可以通过首页上的'我的收藏'部分快速访问最近添加的收藏工具，并通过'查看全部'链接进入完整的收藏夹页面。"
        },
        step3: {
          title: "步骤3：管理您的收藏工具",
          description: "在收藏夹页面中，您可以查看、使用和管理您的收藏工具。每个工具条目右上角都有一个删除按钮（垃圾桶图标），点击即可将该工具从收藏夹中移除。您还可以点击工具名称或描述直接进入工具使用页面。收藏夹列表会自动保存，下次访问网站时仍能看到您的收藏。"
        },
        step4: {
          title: "步骤4：了解本地存储限制",
          description: "由于收藏夹功能使用浏览器的localStorage进行数据存储，有几点限制需要注意：1) 数据仅保存在当前浏览器中，不会跨设备同步；2) 如果清除浏览器数据或使用隐私模式，收藏记录可能会丢失；3) localStorage通常有5-10MB的存储限制，虽然对于收藏夹功能来说绰绰有余，但理论上存在上限；4) 不同浏览器和设备上的收藏列表是相互独立的。"
        }
      },
      faq: {
        title: "常见问题解答",
        q1: "收藏的工具数据保存在哪里？是否会跨设备同步？",
        a1: "<b>收藏夹数据完全保存在您的本地浏览器中</b>，使用浏览器提供的localStorage API进行存储。这意味着您的收藏列表不会上传到任何服务器，也不会在不同设备或浏览器之间自动同步。这种设计有两个主要优势：首先，它保护了您的隐私，因为数据完全在您的设备上；其次，它无需注册账号或登录即可使用。但这也意味着，如果您使用不同的设备、浏览器或清除了浏览器数据，您需要重新创建收藏列表。考虑到大多数用户通常使用固定的设备和浏览器访问工具，这种权衡是合理的。",
        
        q2: "我可以收藏多少个工具？有没有上限？",
        a2: "<b>收藏工具的数量理论上受到浏览器localStorage存储限制</b>，但这个限制通常在5-10MB之间，对于收藏夹功能来说绰绰有余。以平均每个工具数据占用1KB计算，您可以轻松收藏数千个工具而不会遇到存储问题。实际上，大多数用户一般不会收藏超过100个工具，因此不必担心达到上限。如果您是重度用户并收藏了大量工具，可以考虑适当整理收藏列表，移除不再使用的工具，保持收藏夹的整洁和实用性。在极少数情况下，如果您确实遇到存储限制问题，浏览器通常会显示相关错误消息。",
        
        q3: "如果我清除浏览器数据，我的收藏会丢失吗？",
        a3: "<b>是的，如果您清除浏览器数据（特别是本地存储或Cookie数据），您的收藏记录将会丢失</b>。这是因为收藏夹功能依赖于浏览器的localStorage来保存您的偏好。同样，如果您使用浏览器的隐私/无痕模式，在关闭窗口后收藏记录也不会保留。为了避免意外丢失收藏数据，请考虑以下建议：在清除浏览器数据时，可以选择性地保留网站数据；在进行浏览器升级或更换设备前，可以记下您重要的收藏工具；避免在隐私模式下添加重要工具到收藏夹。如果您频繁使用多设备或经常清理浏览器数据，可以考虑使用浏览器书签功能作为备份方式，将重要工具页面添加为书签。",
        
        q4: "为什么不提供账号系统来保存我的收藏？",
        a4: "<b>我们选择使用本地存储而不是账号系统主要出于以下考虑</b>：首先，这保护了用户隐私，您无需提供任何个人信息即可使用收藏功能；其次，它简化了用户体验，无需注册、登录或记住密码；第三，它减少了安全风险，因为没有账户信息可能被泄露；最后，它使网站加载更快，因为不需要进行账户验证和数据同步。我们理解跨设备同步是一个有用的功能，但我们优先考虑了简单性、隐私和无摩擦的用户体验。在未来的更新中，我们可能会考虑提供可选的账户系统，让用户可以选择是否使用账户来同步收藏，但本地存储选项将始终保留，以尊重那些优先考虑隐私和简便性的用户。"
      },
      relatedTools: {
        title: "您可能也会喜欢的工具",
        description: "探索这些热门工具，将它们添加到您的收藏夹中：",
        tool1: {
          name: "JSON格式化工具",
          url: "https://www.ufreetools.com/tool/json-formatter",
          description: "美化、压缩和验证JSON数据，支持语法高亮和错误检测。"
        },
        tool2: {
          name: "密码生成器",
          url: "https://www.ufreetools.com/tool/password-generator",
          description: "创建强密码，可自定义长度、复杂度和字符类型。"
        },
        tool3: {
          name: "图片压缩器",
          url: "https://www.ufreetools.com/tool/image-compressor",
          description: "压缩图片大小，保持图片质量，适用于网页和社交媒体。"
        }
      },
      resources: {
        title: "了解更多关于本地存储技术",
        resource1: {
          name: "MDN Web文档: localStorage",
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
          description: "Mozilla开发者网络关于localStorage API的详细技术文档和使用指南。"
        },
        resource2: {
          name: "W3C Web存储规范",
          url: "https://www.w3.org/TR/webstorage/",
          description: "Web存储技术的官方规范文档，详细说明了localStorage的标准实现。"
        }
      }
    }
  },
  home: {
    favoritedToolsTitle: '我的收藏',
    viewAllFavorites: '查看全部',
  },
  featuredIn: "推荐于：",
  browserExtensionsDesc: "只需点击一下获取所有工具通过扩展",
  addToChrome: "使用Chrome",
  addToFireFox: "使用FireFox",
  addToEdge: "使用Edge",
  
  share: '分享',
  shareTo: '分享到',
  like: '点赞',
  tweet: '推文',
  copyLink: '复制链接',
  copied: '已复制',
  freeTools: '免费工具',
  telegram: 'Telegram',
  youtube: 'YouTube',
  line: 'Line',
  qq: 'QQ',
  weibo: '微博',
  defaultTitle: 'UFreeTools - 免费在线工具集合',
  defaultDescription: '发现强大的免费在线工具集合，提升工作效率！包含图像处理、文本工具、开发工具等多种实用功能。',
  toolShareDescription: '我正在使用 {toolName} 工具，这是一个免费的在线工具，帮助解决各种问题。功能强大，界面简洁，完全免费使用！快来试试吧！',
  categoryShareDescription: '探索 {categoryName} 分类下的实用工具，全部免费使用！包含多种专业工具，提升工作效率。',
  homeShareDescription: 'UFreeTools - 免费在线工具集合，包含图像处理、文本工具、开发工具、设计工具等多种实用功能。所有工具完全免费，无需注册即可使用！',
  searchShareDescription: '在 UFreeTools 中搜索 "{searchQuery}" 的结果，发现实用的免费在线工具！',
}; 