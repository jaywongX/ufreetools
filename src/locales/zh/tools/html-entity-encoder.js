export default {
  name: 'HTML实体编码器',
  description: '在HTML文本和实体编码之间进行转换',
  title: 'HTML实体编码器/解码器',
  intro: 'HTML实体编码用于将特殊字符转换为HTML安全的格式，常用于防止XSS攻击或显示HTML源代码。',
  operation: {
    title: '操作类型',
    encode: 'HTML实体编码',
    decode: 'HTML实体解码'
  },
  mode: {
    title: '编码模式',
    named: '命名实体 (&amp;lt;)',
    decimal: '十进制实体 (&amp;#60;)',
    hex: '十六进制实体 (&amp;#x3C;)',
    full: '完全编码 (所有字符)'
  },
  input: {
    encodeTitle: '需要编码的文本',
    decodeTitle: '需要解码的文本',
    encodePlaceholder: '输入要编码的HTML或文本...',
    decodePlaceholder: '输入要解码的HTML实体文本...',
    clear: '清空'
  },
  output: {
    encodeTitle: '编码结果',
    decodeTitle: '解码结果',
    copy: '复制结果',
    copied: '(已复制!)',
    preview: '预览效果',
    showSource: '显示源码'
  },
  reference: {
    title: '实体参考',
    commonReferenceTables: '常见HTML实体参考表',
    show: '显示表格',
    hide: '隐藏表格',
    description: {
      named: '使用命名格式如 &amp;lt; 表示 &lt; (仅适用于常见HTML实体)',
      decimal: '使用十进制格式如 &amp;#60; 表示 &lt;',
      hex: '使用十六进制格式如 &amp;#x3C; 表示 &lt;',
      full: '编码所有非字母数字字符，包括空格、换行等'
    },
    table: {
      char: '字符',
      named: '命名实体',
      decimal: '十进制实体',
      description: '说明'
    },
    entities: {
      lt: '小于号',
      gt: '大于号',
      amp: '和号',
      quot: '双引号',
      apos: '单引号',
      copy: '版权符号',
      reg: '注册商标',
      trade: '商标符号',
      nbsp: '不换行空格',
      cent: '分符号',
      pound: '英镑符号',
      euro: '欧元符号',
      yen: '日元/人民币符号',
      sect: '章节符号',
      minus: '减号',
      times: '乘号',
      divide: '除号',
      deg: '度数符号',
      plusmn: '正负号',
      frac14: '四分之一'
    }
  },
  messages: {
    copySuccess: '已复制到剪贴板',
    copyError: '复制失败，请手动复制',
    encodeSuccess: '编码完成',
    decodeSuccess: '解码完成',
    invalidInput: '无效的输入文本'
  },
  article: {
    title: "HTML实体编码器：Web开发安全的必备工具",
    features: {
      title: "理解HTML实体编码",
      description: "<strong>HTML实体编码器</strong>是一种专门设计用于将特殊字符转换为相应<strong>HTML实体</strong>的工具。这个过程，被称为<strong>HTML编码</strong>，对于网络安全和网页内容的正确呈现至关重要。<br><br>该<strong>实体编码器</strong>的核心功能是将可能被解释为HTML标记的字符（如&lt;和&gt;）转换为它们各自的<strong>字符实体</strong>（如&amp;lt;和&amp;gt;）。该工具提供多种编码模式，包括<strong>命名实体</strong>、<strong>十进制实体</strong>、<strong>十六进制实体</strong>以及所有非字母数字字符的<strong>完全编码</strong>。它还提供了将<strong>HTML实体解码</strong>回原始字符的基本功能。",
      useCases: {
        title: "HTML实体编码的常见应用场景",
        items: [
          "Web开发人员在显示用户输入之前对其进行编码，以防止跨站脚本攻击(XSS)",
          "内容作者在文档或博客文章中嵌入代码片段，其中需要将实际的HTML标签显示为文本",
          "CMS管理员确保特殊字符和符号在不同的浏览器和操作系统中正确显示",
          "电子邮件模板设计师编码特殊字符，以确保在各种电子邮件客户端中一致地呈现",
          "数据库管理员准备HTML数据以安全存储和检索，避免注入漏洞风险",
          "Web安全专业人员审核页面潜在的编码问题，这些问题可能导致安全漏洞"
        ]
      }
    },
    faq: {
      title: "关于HTML实体编码的常见问题",
      items: [
        {
          question: "各种HTML实体编码模式有什么区别？",
          answer: "命名实体（如&lt;）使用易记的标准化名称表示常见特殊字符，是最易读的，但仅适用于某些字符。十进制实体（如&#60;）使用十进制数字表示字符的Unicode代码点。十六进制实体（如&#x3C;）也使用代码点，但格式为十六进制。完全编码将所有非字母数字字符转换为它们的实体形式，提供最全面的保护，但会产生更长的输出。"
        },
        {
          question: "为什么HTML实体编码对Web安全很重要？",
          answer: "HTML实体编码对Web安全至关重要，因为它可以防止跨站脚本(XSS)攻击。通过编码特殊字符，特别是尖括号（< >），用户提供的内容在浏览器中显示时不会被解释为可执行的HTML或JavaScript。没有适当的编码，恶意用户可能注入窃取数据、重定向用户或执行未授权操作的脚本。编码确保用户输入被视为文字文本而非可执行代码。"
        },
        {
          question: "什么时候应该使用HTML实体编码而不是其他类型的编码？",
          answer: "在HTML上下文中显示用户生成的内容时，如网页正文内容、属性或HTML电子邮件模板，应使用HTML实体编码。对于JavaScript上下文，使用JavaScript转义。对于URL参数，使用URL编码。对于CSS值，使用CSS转义。HTML实体编码专为在HTML文档中安全地表示特殊字符而设计，而其他编码方案为具有自身安全考虑的不同上下文服务。"
        },
        {
          question: "HTML实体编码会影响我的内容的视觉外观吗？",
          answer: "正确实现时，HTML实体编码不应影响最终用户看到的内容视觉外观。浏览器会自动解码并渲染实体以显示原始字符。例如，&amp;copy;对查看者将显示为©。编码仅在源代码中可见。但是，如果您编码应被解释为实际HTML的内容（如格式标签），这些元素将按字面显示而不是被渲染。"
        },
        {
          question: "我可以使用HTML实体编码表示所有国际字符和符号吗？",
          answer: "是的，HTML实体编码可以表示任何Unicode字符，使其适用于国际字符、符号和表情符号。虽然常见特殊字符有命名实体（如&amp;euro;表示€），但任何字符都可以使用基于其Unicode代码点的十进制(&#8364;)或十六进制(&#x20AC;)实体格式进行编码。但是，对于大量国际文本，考虑为您的HTML文档使用UTF-8字符编码，同时对特殊字符进行选择性实体编码。"
        }
      ]
    },
    guide: {
      title: "HTML实体编码器使用指南",
      steps: [
        "选择操作类型：选择'HTML实体编码'将特殊字符转换为HTML实体，或选择'HTML实体解码'将实体转换回字符",
        "如果是编码，选择您偏好的编码模式：命名实体用于可读的命名代码，十进制实体用于数字代码，十六进制实体用于基于十六进制的代码，或完全编码用于最大字符转换",
        "在适当的字段中输入您的文本 - 要么是要编码的文本，要么是要解码的HTML实体文本",
        "根据您选择的操作点击'编码'或'解码'按钮",
        "查看下方显示的输出结果。对于编码内容，您可以在查看源代码和渲染预览之间切换",
        "通过点击'复制结果'按钮将结果复制到剪贴板，以便在您的网页或应用程序中使用",
        "作为参考，请查阅页面底部的常见HTML实体参考表，以查看常用的HTML实体及其表示形式"
      ]
    },
    conclusion: "HTML实体编码对重视安全性和跨不同平台正确呈现的Web开发人员和内容创建者来说是一项必不可少的实践。通过使用这个HTML实体编码器工具，您可以确保您的Web内容正确显示，同时防止潜在危险的代码注入攻击。无论您是开发Web应用程序，创建文档还是管理内容系统，适当的HTML实体编码都应该是您安全一致的Web开发工作流程的标准部分。"
  }
} 