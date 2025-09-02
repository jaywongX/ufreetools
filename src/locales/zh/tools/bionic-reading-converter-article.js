export default {
  title: '仿生阅读转换器：Bionic Reading 在线工具（Markdown/PDF/EPUB 转换与导出指南）',
  functionTitle: '什么是仿生阅读转换器（Bionic Reading）？它能解决哪些阅读痛点？',
  intro: '我们的<strong>仿生阅读转换器</strong>是一款专业的<strong>Bionic Reading 在线工具</strong>，通过对词语的前半部分进行加粗突出（Fixation），并降低其余部分的对比度（Contrast），帮助读者快速捕捉关键信息、降低视觉负担、提升专注力与阅读速度。该在线仿生阅读生成器支持实时预览、手动编辑、字体与字号自定义，并可一键导入<strong>Markdown、PDF、EPUB</strong>，最终导出为<strong>Markdown、PDF、EPUB、PNG、JPG、HTML、Word</strong>等格式，满足学习、写作、编辑与移动端阅读需求。通过本工具，您可以更高效地处理长文内容，改善注意力分散与跳读问题，是提升工作与学习效率的高价值方案。',
  useCasesTitle: '仿生阅读的常见应用场景',
  useCases: [
    '长篇内容精读：论文、白皮书、技术文档的高效阅读与重点提取',
    '移动端阅读优化：手机与平板上的小屏阅读更易聚焦关键信息',
    '学习与备考：通过 Bionic Reading 强化段落主旨与关键词记忆',
    '内容编辑与发布：为博客与社交媒体生成可读性更强的文本',
    '注意力支持：在疲劳、注意力分散时保持阅读节奏与理解力',
    '跨语言阅读：在中英日等多语言文本中突出词首，减轻跳词与漏读',
    '无障碍与可访问性：适配不同阅读偏好的样式（字体/字号/对比度）',
    '格式转换工作流：Markdown/PDF/EPUB 文档批注后导出 PNG/JPG/HTML/Word'
  ],
  tipTitle: '专业提示：',
  tipContent: '为获得更自然的仿生阅读效果，建议将 Fixation 设置在 25%–40% 区间，Contrast 控制在 30%–60% 之间；在移动端适当增大字号与行高以提升可读性。可在自动模式生成后切换到手动编辑模式，微调需要强化的关键词。',
  conclusion: '作为一款高效的<strong>仿生阅读转换器</strong>与<strong>Bionic Reading 在线工具</strong>，本工具覆盖了从实时预览、手动编辑、参数调节、文件导入到多格式导出的完整流程，适用于学习、创作、发布与知识管理等多种场景。合理设置 Fixation 与 Contrast，并结合字体、字号与导出格式，能够在不同设备与平台上保持优质阅读体验。',

  faqTitle: '常见问题解答',
  faqs: [
    {
      question: '仿生阅读转换器（Bionic Reading 在线工具）是如何工作的？',
      answer: '本工具按照仿生阅读（Bionic Reading）的核心思路：对每个词语的前半部分进行加粗（Fixation），其余文本降低对比度（Contrast），从而引导视线更快捕捉词根与语义核心，减少回视与跳读。您可以在自动模式下快速生成仿生阅读效果，并进入手动编辑模式对关键字进行微调，以获得更符合领域语境的结果。'
    },
    {
      question: '如何把 PDF/EPUB/Markdown 转换为 Bionic Reading 格式并导出？',
      answer: '点击“导入 Markdown/文本、导入 PDF、导入 EPUB”按钮上传文件，工具会在浏览器本地解析文本并生成仿生阅读效果。完成调整后，可选择“导出 Markdown、PDF、EPUB、PNG、JPG、HTML、Word”任一格式保存或分享。无需安装软件与注册账号，全流程在本地进行，便捷安全。'
    },
    {
      question: '仿生阅读对中文、英文、日文、韩文是否有效？',
      answer: '工具针对多语言做了通用分词兼容：英文等基于空格的语言按词处理；中文、日文、韩文等 CJK 文字按连续字符段处理，依然可突出前段字形来达到 Bionic Reading 的引导效果。不同语言可尝试调整 Fixation 与 Contrast，以获得更适合的可读性与视觉节奏。'
    },
    {
      question: '是否支持复制 PNG 图片到剪贴板以及多格式导出？',
      answer: '支持。您可以直接“复制 PNG 到剪贴板”，也可以一键导出 PNG/JPG 供社交平台与文档插图使用；此外还支持导出 HTML 与 Word（.doc），便于在 CMS、PPT 或 OA 系统中继续编辑与排版。'
    },
    {
      question: '仿生阅读会影响可访问性或 SEO 吗？',
      answer: '仿生阅读的本质是视觉强调，不改变原文语义。导出 HTML 时建议保留语义化结构与合理标题层级（H1/H2/H3），并控制对比度与字号确保可访问性。发布到网站时可结合结构化数据（如 FAQPage）增强搜索引擎理解，有助于提升可见度与点击率。'
    },
    {
      question: '我的文本会被上传到服务器吗？隐私如何保障？',
      answer: '不会。文本解析与仿生阅读渲染均在浏览器本地完成，文件不会上传到服务器。导出、复制到剪贴板等操作同样在本地执行，从源头降低隐私风险。'
    }
  ],

  tutorialTitle: '如何使用仿生阅读转换器（逐步教程）',
  steps: {
    step1: {
      title: '输入或导入文档',
      description: '在左侧输入框粘贴文本，或点击“导入 Markdown/文本、导入 PDF、导入 EPUB”上传文件。工具将自动解析内容并在右侧生成<strong>仿生阅读</strong>预览。',
      note: '较大 PDF/EPUB 解析时间更长，请耐心等待处理完成。'
    },
    step2: {
      title: '调节 Fixation 与 Contrast',
      description: '拖动滑块设置 Fixation（词首加粗比例）与 Contrast（非加粗部分对比度），观察实时预览变化，找到兼顾速度与舒适度的平衡点。',
      note: '建议先从 Fixation 30% 与 Contrast 50% 起步，再根据内容密度微调。'
    },
    step3: {
      title: '选择字体与字号',
      description: '根据阅读场景切换字体，并适度增大字号与行高以提升可读性，特别是在移动端或投屏场景下能显著提高阅读体验。',
      note: '无衬线字体通常在屏幕阅读中表现更清晰。'
    },
    step4: {
      title: '切换到手动编辑模式',
      description: '若需要精细控制重点词语，点击“手动编辑模式”直接在右侧进行局部加粗或还原。也可随时用“从自动结果同步”回到基础方案。',
      note: '手动编辑适合标题、副标题与专业术语的定向强化。'
    },
    step5: {
      title: '导出为多种格式',
      description: '完成调整后，选择导出 Markdown、PDF、EPUB、PNG、JPG、HTML 或 Word（.doc）。导出图像便于分享，HTML/Word 便于排版与二次编辑。',
      note: '导出 PDF/PNG/JPG 时建议保持白底与足够留白，确保打印与展示效果。'
    },
    step6: {
      title: '分享与复制',
      description: '使用“复制 PNG 到剪贴板”“复制 HTML/Markdown”快速分享到知识库、博客或社交平台，保持仿生阅读的可视强调效果。',
      note: '若平台压缩图片，可优先分享 HTML/Markdown 保留文本清晰度。'
    }
  },

  successTitle: '恭喜！',
  successContent: '您已经掌握了使用仿生阅读转换器（Bionic Reading 在线工具）的完整流程。现在即可将长文快速转为更易专注的阅读格式，并在任意平台高效发布与分享。',

  relatedToolsTitle: '你可能感兴趣的相关工具',
  relatedTools: [
    {
      name: '图片压缩器',
      description: '在不明显损失质量的情况下减小图像文件大小。',
      url: 'https://www.ufreetools.com/tool/image-compressor'
    },
    {
      name: '图片调整器',
      description: '将图像调整为特定尺寸或按百分比缩放。',
      url: 'https://www.ufreetools.com/tool/image-batch-resizer'
    },
    {
      name: '印章生成器',
      description: '在线制作各类印章图片，生成公司公章、私章等数字印章。',
      url: 'https://www.ufreetools.com/tool/seal-generator'
    },
    {
      name: '二维码生成器',
      description: '为 URL、文本、联系信息等创建自定义二维码。',
      url: 'https://www.ufreetools.com/tool/qr-code-generator'
    }
  ],

  referencesTitle: '参考资源',
  references: [
    {
      name: 'Bionic Reading 官方网站',
      description: '了解 Bionic Reading 的理念与实践案例',
      url: 'https://bionic-reading.com/'
    },
    {
      name: '可读性与排版（Typography）',
      description: '关于字体、字号与版式如何影响阅读效率的参考资料',
      url: 'https://en.wikipedia.org/wiki/Typography'
    },
    {
      name: '网页内容无障碍指南 (WCAG)',
      description: '在可访问性、对比度与结构化内容上的最佳实践',
      url: 'https://www.w3.org/WAI/standards-guidelines/wcag/'
    }
  ]
}