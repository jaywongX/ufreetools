export default {
  title: 'PDF解密工具：在线移除打开密码与权限限制的浏览器端方案',
  functionTitle: '什么是在线PDF解密工具，什么时候需要解密？',
  intro: '我们的<strong>在线PDF解密工具</strong>基于纯前端开源技术栈，支持为加密的PDF提供<strong>打开密码（用户密码）</strong>以执行解密，移除打印、编辑、复制与表单填写等权限限制。支持拖拽上传、传统多选、URL批量导入与分批次添加，提供<strong>实时预览对比</strong>与基本分析，帮助你快速验证解密效果。解密完成后可<span style="font-weight:bold">单项下载</span>或<span style="font-weight:bold">批量打包下载 ZIP</span>。所有操作均在浏览器本地完成，无需上传服务器，保护隐私且高效。',

  useCasesTitle: 'PDF解密的常见应用场景',
  useCases: [
    '移除企业共享文档的权限限制以便内部编辑',
    '针对遗忘所有者权限配置的文档进行合规解密',
    '恢复打印与复制能力以便校对和内容再利用',
    '为培训资料或报告去除低分辨率限制以提升输出质量',
    '批量解密多个PDF并统一处理',
    '在移动端快速解密并预览解密效果',
    '浏览器本地解密，无需上传，保护隐私'
  ],

  tipTitle: '专业提示：',
  tipContent: '建议仅对具有合法使用授权的PDF进行解密；如需更好搜索表现，可在元数据中填写标题与关键词并保持一致的命名策略（当前工具不修改PDF元数据）。',

  conclusion: '<strong>PDF解密在线工具</strong>可在浏览器端快速完成权限解除与内容恢复，适用于企业、教育机构、个人用户等多种场景。通过提供正确的打开密码并执行解密，你可以在合规范围内提升文档可用性。',

  faqTitle: '常见问题解答（FAQ）',
  faqs: [
    {
      question: '在线PDF解密工具如何工作？',
      answer: '本工具基于QPDF的解密能力，在提供<strong>打开密码</strong>后执行<strong>--decrypt</strong>操作，移除文档的权限限制并生成新的可用PDF。'
    },
    {
      question: '是否支持批量解密与实时预览对比？',
      answer: '支持批量导入与分批次添加；执行解密后可进行<strong>实时预览对比</strong>（原始与解密后首页），并提供单项下载按钮与<strong>ZIP批量下载</strong>。'
    },
    {
      question: '如果PDF没有加密，是否可以使用该工具？',
      answer: '可以。对于未加密的PDF，工具会直接输出与原始内容一致的文件，用于统一流程处理。'
    }
  ],

  tutorialTitle: '如何使用在线PDF解密工具',
  steps: [
    {
      title: '添加PDF文件',
      description: '通过<strong>拖拽上传</strong>或点击选择文件（支持<strong>多选</strong>与<strong>分批次添加</strong>）；也可在“网络PDF URL批量导入”中一次性粘贴多个URL进行添加。',
      note: '建议先用示例PDF熟悉流程。'
    },
    {
      title: '提供打开密码（如需）',
      description: '如果PDF被加密，请在“解密密码”中输入<strong>打开密码（用户密码）</strong>以进行解密；若未加密可直接执行。',
      note: '密码错误会导致解密失败或预览失败。'
    },
    {
      title: '执行解密并预览',
      description: '点击“执行解密”后生成新的PDF，并在右侧预览区域对比原始与解密后的首页。',
      note: '如预览失败，可能是文件损坏或不兼容。'
    }
  ],

  successTitle: '已完成！',
  successContent: '你已掌握如何使用在线PDF解密工具移除文档权限限制并验证解密效果。',

  relatedToolsTitle: '你可能感兴趣的相关工具',
  relatedTools: [
    {
      name: 'PDF合并器',
      description: '将多个PDF文件合并为一个完整的PDF文档，支持跨文件页面重新排序。',
      url: 'https://www.ufreetools.com/tool/merge-pdf-online'
    },
    {
      name: 'PDF拆分器',
      description: '将大型PDF文档拆分为多个较小的PDF文件，支持自定义拆分页面。',
      url: 'https://www.ufreetools.com/tool/pdf-splitter'
    },
    {
      name: 'PDF转Word转换器',
      description: '将PDF文档转换为可编辑的Word格式，保留原始布局和格式。',
      url: 'https://www.ufreetools.com/tool/pdf-to-word-converter'
    },
    {
      name: 'PDF转图片转换器',
      description: '将PDF文档的每一页转换为高质量的图像文件，支持多种输出格式。',
      url: 'https://www.ufreetools.com/tool/pdf-to-image-converter'
    }
  ],

  referencesTitle: '参考资源',
  references: [
    { title: 'QPDF 官方', description: 'QPDF 提供了强大的PDF结构处理能力，包括加密与解密。' },
    { title: 'PDF.js 文档', description: 'PDF.js 是浏览器端渲染 PDF 的开源库，适合预览与基本信息读取。' },
    { title: 'PDF技术概述', description: '了解PDF文件格式的技术细节' },
  ],

  coverAlt: '在线PDF解密工具产品页图片'
}