export default {
  name: 'Markdown编辑器',
  description: '编辑和实时预览Markdown文档',
  options: {
    mode: '模式',
    syntaxHighlighting: '语法高亮',
    autoSave: '自动保存',
    lineNumbers: '行号',
    spellCheck: '拼写检查',
    wordWrap: '自动换行'
  },
  modes: {
    split: '分屏视图',
    edit: '仅编辑',
    preview: '仅预览'
  },
  actions: {
    bold: '粗体',
    italic: '斜体',
    strikethrough: '删除线',
    heading: '标题',
    link: '链接',
    image: '图片',
    list: '列表',
    quote: '引用',
    code: '代码',
    table: '表格',
    hr: '水平分割线',
    preview: '预览',
    copy: '复制',
    clear: '清除',
    download: '下载Markdown',
    downloadHTML: '下载HTML',
    upload: '上传Markdown'
  },
  messages: {
    copied: 'Markdown内容已复制到剪贴板！',
    copyError: '复制失败，请手动复制',
    clearConfirm: '确定要清空编辑器内容吗？',
    templateConfirm: '应用模板将替换当前内容，确定继续吗？',
    templateApplied: '已应用"{name}"模板',
    saved: '文档已保存',
    uploadSuccess: '文档上传成功',
    uploadError: '上传文档时出错',
    wordCount: '{count}个单词',
    charCount: '{count}个字符'
  },
  placeholder: '在这里输入Markdown内容...',
  templates: {
    title: '快速模板',
    apply: '应用模板',
    confirm: '确认应用'
  },
  dialogs: {
    clear: {
      title: '清空编辑器',
      message: '确定要清空编辑器内容吗？'
    },
    template: {
      title: '应用模板',
      message: '应用模板将替换当前内容，确定继续吗？'
    }
  },
  article: {
    title: "Markdown编辑器：轻松创建格式化文档",
    features: {
      title: "了解Markdown编辑",
      description: "这款<strong>Markdown编辑器</strong>是一个多功能的<strong>文本格式化工具</strong>，旨在帮助用户使用简单的Markdown语法创建结构精美的文档。这个强大的<strong>文档编辑器</strong>结合了直观的写作环境和实时预览功能，使其成为各种平台上内容创作的理想选择。<br><br>我们的<strong>富文本编辑器</strong>支持所有标准的Markdown语法元素，包括标题、列表、链接、图片、代码块和表格。编辑器具有语法高亮、分屏预览和便捷的格式化快捷方式等功能。无论您是起草文档、准备博客文章还是做结构化笔记，这款<strong>Markdown写作工具</strong>都能提供简单性和功能性的完美平衡，简化您的内容创作工作流程。",
      useCases: {
        title: "Markdown编辑的实际应用场景",
        items: [
          "软件开发人员为GitHub存储库编写<strong>技术文档</strong>和README文件，使用Markdown的代码格式化和标题结构进行清晰组织",
          "内容创作者起草带有嵌入图像、链接和格式化文本的<strong>博客文章</strong>，这些内容可以轻松导出到WordPress或Medium等内容管理系统",
          "技术作者创建格式一致的<strong>产品文档</strong>，使用表格进行数据展示，通过标题实现层次组织",
          "学生在讲座或研究期间做<strong>结构化笔记</strong>，使用Markdown简单的语法快速格式化，不会打断思路",
          "项目经理为团队知识库开发带有链接部分、任务列表和格式化内容的<strong>组织化wiki页面</strong>",
          "学术研究人员在专业出版软件进行最终格式化之前，起草带有引用、嵌入公式和结构化标题的<strong>研究论文</strong>或笔记"
        ]
      }
    },
    faq: {
      title: "关于Markdown编辑的常见问题",
      items: [
        {
          question: "Markdown与传统文字处理器有什么区别？",
          answer: "Markdown是一种轻量级标记语言，使用纯文本语法来指示格式化，不同于传统文字处理器使用所见即所得(WYSIWYG)界面，带有格式化按钮和菜单。Markdown的主要优势包括：基本格式化任务的简单性和速度、跨平台的极佳可移植性、更小的文件大小、版本控制兼容性、注重内容而非样式以及一致的输出。传统文字处理器提供更复杂的格式化选项和直接的可视化编辑，但通常创建具有兼容性问题的专有文件格式。对于需要转换为多种格式(HTML、PDF)或在不同平台上共享的内容，Markdown是理想选择。"
        },
        {
          question: "我可以将Markdown文档导出为其他格式吗？",
          answer: "是的，我们的Markdown编辑器允许您以多种格式导出文档。您可以直接下载内容为Markdown(.md)文件以便将来编辑，或作为HTML用于网络发布。对于其他格式转换如PDF、DOCX(Word)或其他专业格式，您可以使用HTML导出结合第三方转换器或Pandoc等工具。Markdown干净、结构化的特性使其成为转换为几乎任何文档类型的优秀源格式。这种灵活性是Markdown成为需要在多种格式或平台上存在的内容的首选格式的原因。"
        },
        {
          question: "这个编辑器支持GitHub风格的Markdown吗？",
          answer: "是的，我们的Markdown编辑器完全支持GitHub风格的Markdown(GFM)，它包括所有标准Markdown功能以及几个扩展，使其特别适合技术和代码文档。这些扩展包括语法高亮的代码围栏、表格、删除线文本、带有复选框的任务列表以及URL的自动链接。编辑器还在预览模式中正确渲染GFM特定元素，如用户提及、问题引用和表情符号短代码。这种兼容性确保了在我们编辑器中创建的文档将在GitHub的存储库、问题、拉取请求和wiki页面上正确显示。"
        },
        {
          question: "我可以使用这个Markdown编辑器与他人协作吗？",
          answer: "虽然我们的Markdown编辑器不包括内置的实时协作功能(如Google文档)，但您仍然可以使用以编辑器为中心的工作流程与他人有效协作。您可以导出Markdown文档并通过电子邮件或消息应用程序共享，或者将编辑器与Git等版本控制系统一起使用，实现更结构化的协作。对于团队，您可以考虑将编辑器与GitHub等平台结合使用，多个贡献者可以在那里处理Markdown文件，包括版本历史、拉取请求和评论。与二进制文件格式相比，Markdown的纯文本特性使其特别适合跟踪更改和合并贡献。"
        },
        {
          question: "如果我是初学者，如何学习Markdown语法？",
          answer: "即使对完全初学者来说，学习Markdown语法也很直接。我们的编辑器包含一个格式化工具栏，允许您通过点击应用常见的Markdown元素，帮助您直观地学习语法。当您使用这些按钮时，您会看到相应的Markdown出现在文本中，创造自然的学习过程。此外，实时预览显示您的Markdown将如何呈现，提供即时反馈。对于结构化的学习方法，我们建议从基本元素(标题、粗体、斜体、链接和列表)开始，然后再进入更高级的功能如表格和代码块。由于Markdown的直观设计，许多用户发现他们能在不到30分钟内掌握基础知识。"
        }
      ]
    },
    guide: {
      title: "使用Markdown编辑器的步骤指南",
      steps: [
        "首先从顶部工具栏选择您偏好的<strong>编辑模式</strong> - 选择分屏视图(编辑和预览并排)、仅编辑(获得最大写作空间)或仅预览(查看最终格式)",
        "开始在编辑器窗格中输入内容，使用<strong>Markdown语法</strong>进行格式化，或利用编辑器上方的格式化工具栏按钮自动插入适当的语法",
        "使用井号符号创建文档结构，设置<strong>标题</strong>(#用于主标题，##用于副标题，等等)，将内容组织成逻辑部分",
        "使用<strong>内联样式</strong>格式化文本，如星号表示*斜体*或**粗体**，反引号表示`代码`，或波浪线表示~~删除线~~文本，以强调重要点",
        "使用语法[链接文本](URL)插入<strong>链接和图像</strong>，图像则使用![替代文本](图片URL)，创建丰富、互动的内容",
        "用<strong>列表和表格</strong>组织信息 - 使用连字符或数字创建列表，使用竖线符号和连字符创建带有行和列的结构化表格",
        "实时预览您的作品，查看<strong>格式化文档</strong>将如何呈现，在下载或复制最终内容前进行必要的调整"
      ]
    },
    conclusion: "Markdown编辑器简化了创建格式良好的文档的过程，避免了传统文字处理器的复杂性和HTML的学习曲线。通过提供干净、无干扰的写作环境和强大的格式化功能，它使您能够专注于内容，同时保持一致、专业的呈现。无论您是记录代码的开发人员、撰写博客文章的作家，还是整理笔记的学生，Markdown直观的语法结合我们编辑器的实时预览，使文档创建更快速、更直观。随着更多平台采用Markdown支持，使用我们的编辑器掌握这种多功能格式给您提供了一项宝贵技能，可以在众多应用程序和工作流程中转换，为您的所有文档需求节省时间并提高生产力。"
  }
} 