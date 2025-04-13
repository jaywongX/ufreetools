export default {
  name: 'Markdown转HTML',
  description: '将Markdown文本转换为HTML，具有可自定义选项',
  input: {
    title: '输入Markdown',
    placeholder: '在此输入或粘贴您的Markdown文本...',
    loadSample: '加载示例',
    clearInput: '清空',
    uploadFile: '上传Markdown文件',
    paste: '从剪贴板粘贴',
    charCount: '字符数',
    lineCount: '行数'
  },
  output: {
    title: 'HTML输出',
    copied: 'HTML已复制到剪贴板',
    download: '下载HTML',
    copyOutput: '复制HTML',
    clearOutput: '清除输出',
    previewTab: '预览',
    htmlTab: 'HTML代码',
    previewMode: '预览模式',
    sourceMode: 'HTML源码'
  },
  options: {
    title: '转换选项',
    headerIds: '自动标题ID',
    gfm: 'GitHub风格Markdown',
    tables: '表格',
    breaks: '换行',
    smartLists: '智能列表',
    smartypants: '智能标点',
    xhtml: 'XHTML',
    highlight: '语法高亮',
    sanitize: '净化HTML',
    footnotes: '脚注',
    taskLists: '任务列表',
    emoji: '表情符号支持',
    includeStyle: '包含默认CSS',
    realtimePreview: '实时预览',
    scrollSync: '滚动同步',
    htmlOptions: 'HTML选项'
  },
  styles: {
    title: '样式选项',
    theme: '主题',
    codeTheme: '代码主题',
    customCSS: '自定义CSS',
    fontSize: '字体大小',
    lineHeight: '行高',
    enableCustom: '启用自定义样式'
  },
  themes: {
    default: '默认',
    github: 'GitHub',
    bootstrap: 'Bootstrap',
    bulma: 'Bulma',
    medium: 'Medium',
    solarized: 'Solarized',
    dark: '深色模式',
    custom: '自定义'
  },
  codeThemes: {
    default: '默认',
    github: 'GitHub',
    vscode: 'VS Code',
    atom: 'Atom',
    dracula: 'Dracula',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },
  actions: {
    convert: '转换为HTML',
    clearAll: '全部清除',
    copyHtml: '复制HTML',
    saveAsHtml: '保存为HTML',
    generateToc: '生成目录'
  },
  messages: {
    conversionSuccess: 'Markdown转换成功',
    conversionFailed: 'Markdown转换失败：{error}',
    emptyInput: '请输入要转换的Markdown',
    copied: 'HTML已复制到剪贴板',
    tocGenerated: '已生成目录'
  },
  alerts: {
    copied: '已复制到剪贴板',
    copyFailed: '复制到剪贴板失败',
    pasteFailed: '从剪贴板粘贴失败',
    confirmClear: '确定要清空输入内容吗？'
  },
  status: {
    lastConversion: '最后转换时间'
  },
  samples: {
    basic: '基础示例',
    extended: '扩展示例',
    article: '文章示例'
  },
  download: {
    title: 'Markdown转HTML导出'
  },
  
  // 新增文章部分
  article: {
    title: "Markdown转HTML转换器：将文本转换为格式化网页内容",
    features: {
      title: "Markdown转HTML：简化内容创建过程",
      description: "<strong>Markdown转HTML转换器</strong>是一款强大的工具，专为将轻量级Markdown语法转换成适合网页发布的格式化HTML代码而设计。这款<strong>文本格式化转换工具</strong>架起了简单文本写作与网页内容创建之间的桥梁，允许内容创作者专注于写作，无需担心复杂的HTML标签。<br><br>Markdown的简洁性使其成为内容创建的理想选择，但浏览器需要HTML才能正确显示格式化内容。我们的<strong>Markdown处理器</strong>自动处理这种转换，支持标准Markdown特性，包括标题、列表、链接、图片、表格、代码块、引用块和文本格式化，同时提供自定义和预览选项。",
      useCases: {
        title: "Markdown转HTML的实际应用场景",
        items: [
          "<strong>博客文章创作</strong>：内容写作者可以使用易于编写的Markdown格式起草文章，然后转换为HTML以在各种博客平台上发布。<strong>Markdown解析器</strong>确保适当的格式化，同时保持干净的HTML结构，与WordPress、Ghost或Jekyll等内容管理系统无缝配合。",
          "<strong>文档开发</strong>：技术作者使用Markdown编写软件文档、用户指南和技术手册，然后转换为HTML用于基于网络的文档站点。该工具对代码格式化和语法高亮的支持使其成为创建包含代码示例的<strong>开发者文档</strong>的理想选择。",
          "<strong>代码仓库的README文件</strong>：为GitHub、GitLab或Bitbucket仓库编写文档的开发人员可以使用此工具预览他们的Markdown渲染效果，并在需要时为不原生支持Markdown的其他平台提取干净的HTML。",
          "<strong>电子邮件通讯格式化</strong>：营销人员可以用简单的Markdown编写电子邮件内容，然后转换为HTML用于电子邮件营销平台。<strong>HTML生成器</strong>创建的干净代码在各种电子邮件客户端中都能良好工作，同时保持格式的一致性。",
          "<strong>教育内容</strong>：教师和讲师创建学习材料时可以用Markdown编写内容，并转换为HTML用于学习管理系统或在线课程平台，利用该工具的格式化功能创建带有标题、列表和强调的<strong>结构化内容</strong>。",
          "<strong>协作写作</strong>：团队在共享文档上工作时可以使用Markdown来简化流程，然后在需要发布时转换为HTML。这种工作流程简化了编辑过程，同时确保最终的HTML输出干净且一致。"
        ]
      }
    },
    faq: {
      title: "关于Markdown转HTML转换的常见问题",
      items: [
        {
          question: "Markdown和HTML有什么区别？",
          answer: "Markdown和HTML在内容创建工作流中服务于不同的目的。<strong>HTML（超文本标记语言）</strong>是创建网页和Web应用程序的标准语言。它使用诸如&lt;p&gt;、&lt;h1&gt;和&lt;ul&gt;等标签来定义文档结构和格式。虽然功能强大，但HTML可能冗长且对非技术用户来说难以正确编写。<br><br>另一方面，<strong>Markdown</strong>是一种轻量级标记语言，旨在最大限度地提高可读性和易写性。它使用简单符号，如#表示标题，*表示列表和**表示粗体文本。这种简单性使Markdown成为初始内容创建的理想选择，尤其是在专注于文本而非布局时。<br><br>我们的<strong>Markdown转HTML转换器</strong>连接了这两个世界，允许您使用简单的Markdown编写内容，并在需要时为Web发布生成正确的HTML代码。这让您同时获得两方面的优势：使用Markdown的简单性进行写作和HTML的通用浏览器支持进行显示。"
        },
        {
          question: "为什么我的代码块在转换后看起来不同？",
          answer: "转换后<strong>HTML输出</strong>中的代码块看起来与您的Markdown不同，可能有以下几个原因：<br><br>1. <strong>语法高亮</strong>：如果您启用了语法高亮选项，我们的转换器会对您的代码应用特定语言的着色，增强可读性并使其更具视觉吸引力。这会添加额外的HTML和CSS，根据语言语法对代码的不同部分进行样式设置。<br><br>2. <strong>格式增强</strong>：转换器会将代码块包装在适当的HTML元素（&lt;pre&gt;和&lt;code&gt;标签）中，并可能应用背景色、行号或字体调整等样式以提高可读性。<br><br>3. <strong>字符转义</strong>：代码中的特殊字符必须在HTML中正确转义才能正确显示。例如，代码块中使用的HTML标签中的尖括号将被转换为&amp;lt;和&amp;gt;实体。<br><br>这些转换是有意为之的，有助于使您的代码在浏览器中显示时更具可读性，同时保持代码示例的功能完整性。您可以使用工具的样式和格式选项自定义这些方面。"
        },
        {
          question: "我可以自定义HTML输出样式吗？",
          answer: "是的，我们的<strong>Markdown转换器</strong>提供多种选项来自定义HTML输出的样式：<br><br>1. <strong>包含默认CSS</strong>：启用此选项可包含一组基本CSS样式，使您的HTML立即看起来视觉上更吸引人。这些样式包括增强可读性的排版、间距和配色方案。<br><br>2. <strong>自定义样式选项</strong>：根据您的输出需求，您可以选择不同的主题选项，这些选项会影响标题、列表、引用块和链接等元素的显示方式。<br><br>3. <strong>代码块主题</strong>：对于技术内容，您可以选择不同的语法高亮主题，改变代码块在输出中的外观。<br><br>4. <strong>直接HTML编辑</strong>：转换后，如果您需要非常特定的格式，可以切换到HTML视图并手动添加自定义CSS类或内联样式。<br><br>这些自定义选项允许您生成与您的设计要求相匹配的<strong>网页就绪HTML</strong>，同时保持Markdown格式提供的清晰结构。预览面板会准确显示您的内容在选定样式选项下的外观。"
        },
        {
          question: "这个转换器会保留我的文档结构吗？",
          answer: "是的，<strong>Markdown转HTML转换器</strong>专门设计用于在转换过程中保留文档的结构完整性。以下是文档结构如何维护的方式：<br><br>1. <strong>标题层次结构</strong>：Markdown标题（#到######）被正确转换为它们的HTML等效项（&lt;h1&gt;到&lt;h6&gt;），保持文档的逻辑大纲和章节层次结构。<br><br>2. <strong>列表结构</strong>：有序和无序列表，包括嵌套列表，都使用适当的HTML标签（&lt;ul&gt;，&lt;ol&gt;，&lt;li&gt;）正确转换，同时保留它们的层次关系。<br><br>3. <strong>段落分隔</strong>：Markdown中分隔段落的空行被正确转换为HTML中的单独&lt;p&gt;元素。<br><br>4. <strong>块元素</strong>：特殊块，如引用块、代码块和表格，在生成的HTML中仍然与常规段落文本保持分离。<br><br>5. <strong>换行与段落</strong>：转换器根据标准Markdown约定，智能处理段落内换行和实际段落换行之间的区别。<br><br>这种结构保存确保您的<strong>文档层次结构</strong>保持完整，使转换后的HTML在语义上正确，并为Web浏览器、屏幕阅读器和搜索引擎适当组织。"
        },
        {
          question: "生成的HTML是否干净且对SEO友好？",
          answer: "是的，我们的<strong>Markdown转换器</strong>生成干净、语义正确的HTML，非常有利于SEO。以下是为什么输出支持良好搜索引擎优化的原因：<br><br>1. <strong>语义结构</strong>：转换器生成的HTML正确使用语义元素（&lt;h1&gt;，&lt;h2&gt;，&lt;p&gt;，&lt;ul&gt;等），这有助于搜索引擎理解不同内容部分的结构和重要性。<br><br>2. <strong>干净代码</strong>：生成的HTML轻量化，没有不必要的标记或可能使页面臃肿的内联样式。这种干净的代码更容易被搜索引擎解析和索引。<br><br>3. <strong>适当的标题层次结构</strong>：Markdown标题被转换为相应的HTML标题标签，保持逻辑文档大纲，搜索引擎使用这些来了解内容关系和主题层次结构。<br><br>4. <strong>可访问内容</strong>：HTML输出遵循可访问性最佳实践，这与SEO要求一致，因为两者都专注于适当的文档结构和语义。<br><br>5. <strong>净化选项</strong>：HTML净化功能可移除潜在不安全的元素，同时保留内容的结构完整性，确保安全和干净的HTML输出。<br><br>这种<strong>SEO优化的HTML</strong>为您的Web内容提供了坚实的基础，允许搜索引擎有效地爬取、理解和索引您的页面，可能改善您的搜索排名和可见性。"
        }
      ]
    },
    guide: {
      title: "如何使用Markdown转HTML转换器：分步指南",
      step1: "<strong>输入您的Markdown文本</strong>：首先在转换器左侧的输入区域中输入或粘贴您的Markdown内容。如果您是Markdown新手或需要起点，使用\"加载示例\"按钮查看基本语法、扩展功能或完整文章结构的示例。",
      step2: "<strong>选择转换选项</strong>：使用工具顶部的选项配置您的转换首选项。您可以启用\"实时预览\"以立即查看更改，\"滚动同步\"使输入和输出区域一起滚动，\"净化HTML\"移除潜在不安全元素，以及\"包含默认CSS\"为HTML输出添加基本样式。",
      step3: "<strong>预览您的内容</strong>：在输入或粘贴内容时，右侧的预览区域将显示您的Markdown渲染为HTML后的外观。在\"预览\"模式和\"HTML代码\"模式之间切换，前者查看格式化结果，后者查看实际生成的HTML标记。",
      step4: "<strong>完善您的Markdown</strong>：对您的Markdown文本进行必要调整，参考预览确保您的格式显示符合预期。如果启用了实时转换，转换器会实时更新，让您立即看到更改的效果。",
      step5: "<strong>格式化代码块</strong>：对于技术内容，使用三个反引号(```)后跟语言名称创建语法高亮代码块。例如，在代码前使用```javascript，代码后使用```，可以为JavaScript代码添加适当的语法高亮。",
      step6: "<strong>复制生成的HTML</strong>：对转换结果满意后，点击输出区域上方的\"复制HTML\"按钮（向上箭头图标）将HTML代码复制到剪贴板。然后您可以将其粘贴到您的网站编辑器、CMS或任何接受HTML的应用程序中。",
      step7: "<strong>下载为HTML文件</strong>：如果您需要保存完整的HTML文档，点击\"下载HTML\"按钮（下载图标）将转换结果保存为可以在任何网络浏览器中打开的HTML文件。"
    },
    conclusion: "Markdown转HTML转换器作为Markdown写作简单性与HTML网络显示通用性之间的重要桥梁。通过提供直观的界面、实时预览和可自定义的输出选项，这个工具简化了博客作者、开发人员、技术写作者和内容管理者的内容创建工作流程。无论您是创建文档、博客文章还是技术文章，这个转换器都能帮助您专注于内容，同时确保它适合网络发布的格式正确。随着Markdown和HTML持续作为数字内容生态系统中的基础语言，能够高效地在它们之间转换的工具对现代内容创作者来说仍然是无价之宝。"
  }
} 