export default {
  title: 'PDF加密工具：在线设置打开密码与权限的浏览器端解决方案',
  functionTitle: '什么是在线PDF加密工具，如何保障文档安全？',
  intro: '我们的<strong>在线PDF加密工具</strong>采用纯前端开源技术栈，支持<strong>AES-128/AES-256与RC4-40</strong>加密，能够设置<strong>打开密码（用户密码）</strong>与<strong>权限密码（所有者密码）</strong>，同时提供打印、编辑、复制与表单填写等权限控制选项。支持拖拽上传、传统多选、URL批量导入与分批次添加，提供<strong>实时预览对比</strong>与基本分析，帮助你快速验证加密效果与权限配置。加密完成后可<span style="font-weight:bold">单项下载</span>或<span style="font-weight:bold">批量打包下载 ZIP</span>。所有操作均在浏览器本地完成，无需上传服务器，兼顾隐私与高效。',

  useCasesTitle: 'PDF加密的常见应用场景',
  useCases: [
    '企业共享文档设置打开密码与权限控制',
    '为合同、发票等敏感PDF添加AES-256高安全加密',
    '限制打印与复制以防止未经授权传播',
    '为在线培训资料设定低分辨率打印与有限编辑',
    '批量加密PDF并统一设置权限',
    '在移动端快速加密并预览加密效果',
    '浏览器本地加密，无需上传，保护隐私'
  ],

  tipTitle: '专业提示：',
  tipContent: '建议使用<strong>强密码</strong>结合<strong>AES-256</strong>加密级别以获得更高安全性；如需更好搜索表现，可在元数据中填写标题与关键词并保持一致的命名策略（当前工具不修改PDF元数据）。',

  conclusion: '<strong>PDF加密在线工具</strong>可在浏览器端快速完成加密与权限配置，适用于企业、教育机构、个人用户等多种场景。通过设置用户密码与所有者密码并选择合适的加密算法，你可以在确保安全的同时保持良好可用性。',

  faqTitle: '常见问题解答（FAQ）',
  faqs: [
    {
      question: '在线PDF加密工具支持哪些加密算法？',
      answer: '本工具支持<strong>AES-128</strong>、<strong>AES-256</strong>以及兼容旧版的<strong>RC4-40</strong>加密。对 128 位加密的具体算法选择（AES或RC4）取决于 QPDF 的配置与版本。'
    },
    {
      question: '如何设置打开密码（用户密码）与权限密码（所有者密码）？',
      answer: '在“密码保护”区域分别输入<strong>用户密码</strong>与<strong>所有者密码</strong>；当前工具需同时提供两者以执行加密（可在后续版本放宽为仅用户密码）。'
    },
    {
      question: '是否支持批量加密与实时预览对比？',
      answer: '支持批量导入与分批次添加；执行加密后可进行<strong>实时预览对比</strong>（原始与加密后首页），并提供单项下载按钮（仅在该项加密完成后显示）与<strong>ZIP批量下载</strong>。'
    }
  ],

  tutorialTitle: '如何使用在线PDF加密工具',
  steps: [
    {
      title: '添加PDF文件',
      description: '通过<strong>拖拽上传</strong>或点击选择文件（支持<strong>多选</strong>与<strong>分批次添加</strong>）；也可在“网络PDF URL批量导入”中一次性粘贴多个URL进行添加。',
      note: '建议先用示例PDF熟悉流程。'
    },
    {
      title: '预览与分析',
      description: '工具会自动渲染原始PDF首页并在加密完成后渲染加密后的首页用于对比；如需查看权限效果，请在左侧“权限控制”中调整并重新加密。',
      note: '如预览失败，可能是文件损坏或不兼容。'
    },
    {
      title: '设置密码与权限',
      description: '在“密码保护”中设置<strong>用户密码</strong>与<strong>所有者密码</strong>，同时查看<strong>密码强度</strong>提示；在“权限控制”中配置打印、编辑、复制、表单填写权限。',
      note: '推荐选择AES-256并使用高强度密码。'
    }
  ],

  successTitle: '已完成！',
  successContent: '你已掌握如何使用在线PDF加密工具设置密码与文档权限，并通过预览对比验证加密效果。',

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
    { title: 'QPDF 官方', description: 'QPDF 是强大的 PDF 结构处理与加密工具，提供丰富的权限控制能力。' },
    { title: 'PDF.js 文档', description: 'PDF.js 是浏览器端渲染 PDF 的开源库，适合预览与基本信息读取。' },
    { title: 'Adobe PDF 参考规范', description: 'Adobe PDF 参考文档提供了 PDF 规范细节与安全相关定义。' }
  ],

  coverAlt: '在线PDF加密工具产品页图片'
}