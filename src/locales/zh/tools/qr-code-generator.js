export default {
  name: '二维码生成器',
  description: '为URL、文本等生成可自定义的二维码',
  options: {
    content: '二维码内容',
    contentType: '内容类型',
    errorCorrectionLevel: '错误校正级别',
    size: '尺寸',
    margin: '边距',
    foregroundColor: '前景色',
    backgroundColor: '背景色',
    logo: '添加Logo',
    logoSize: 'Logo尺寸',
    cornerRadius: '圆角'
  },
  contentTypes: {
    url: '网址',
    text: '纯文本',
    email: '电子邮件',
    phone: '电话号码',
    sms: '短信',
    wifi: 'WiFi网络',
    vcard: '电子名片(vCard)',
    mecard: '电子名片(MeCard)'
  },
  errorLevels: {
    L: '低 (7%)',
    M: '中 (15%)',
    Q: '高 (25%)',
    H: '最高 (30%)'
  },
  actions: {
    generate: '生成二维码',
    download: '下载',
    downloadSVG: '下载SVG',
    downloadPNG: '下载PNG',
    copy: '复制图像',
    clear: '重置',
    uploadLogo: '上传Logo'
  },
  templates: {
    title: '快速模板',
    confirmReplace: '确定要替换当前内容吗？',
    confirm: '确认',
    cancel: '取消',
    url: {
      name: '网址链接'
    },
    email: {
      name: '邮箱地址'
    },
    phone: {
      name: '电话号码'
    },
    sms: {
      name: '短信'
    },
    wifi: {
      name: 'Wi-Fi配置',
      example: {
        ssid: '网络名',
        password: '密码'
      }
    },
    geo: {
      name: '地理位置'
    }
  },
  appearance: {
    title: '外观设置'
  },
  preview: {
    title: '预览',
    generating: '生成中...',
    clickGenerateButton: '点击"生成二维码"按钮',
    clickToDownload: '点击下载二维码'
  },
  tips: {
    title: '提示',
    saveToPrint: '生成的二维码可以保存为图片，用于打印或分享。',
    errorCorrection: '错误校正级别表示二维码被部分遮挡或损坏时的可读性。L级别容错率最低，H级别最高但会使二维码更复杂。'
  },
  wifi: {
    ssid: '网络名称(SSID)',
    password: '密码',
    encryption: '加密方式',
    hidden: '隐藏网络'
  },
  placeholders: {
    content: '输入文本、链接或其他内容...'
  },
  characters: '个字符',
  maxChars: '建议不超过300字符',
  messages: {
    copied: '已复制到剪贴板！',
    generated: '二维码生成成功',
    contentRequired: '请输入二维码内容',
    downloaded: '二维码已下载',
    confirmReplace: '点击确认替换当前内容',
    contentUpdated: '内容已更新',
    changesCancelled: '已取消更改',
    invalidUrl: '请输入有效的URL',
    invalidEmail: '请输入有效的电子邮件地址',
    invalidPhone: '请输入有效的电话号码',
    logoTooBig: 'Logo文件太大，最大文件大小为1MB'
  },
  errors: {
    canvasNotReady: 'Canvas元素尚未准备好',
    generationError: '生成二维码出错',
    generationErrorWithMessage: '生成二维码时出错: {message}',
    downloadError: '下载二维码时出错: {message}'
  },
  article: {
    title: "二维码生成器：创建和自定义快速响应码",
    features: {
      title: "了解二维码及其应用",
      description: "我们的<strong>二维码生成器</strong>是一款多功能在线工具，可为各种类型的信息创建可自定义的二维码。与传统条形码不同，<strong>二维码</strong>能够在紧凑、机器可读的格式中存储大量数据，可以使用智能手机和专用扫描器快速扫描。<br><br>这款高级<strong>二维码制作工具</strong>支持多种内容类型，包括网址、纯文本、联系信息、WiFi凭据和地理坐标。每个生成的码都可以完全自定义，提供大小、颜色、纠错级别选项，甚至可以添加徽标或修改码的外观，同时保持可扫描性。<br><br><strong>二维码创建器</strong>生成的高分辨率码可以PNG或SVG格式下载，使其既适用于数字使用，也适用于在营销材料、产品包装或标牌上进行物理打印。",
      useCases: {
        title: "二维码的实际应用",
        items: [
          "<strong>商业营销</strong>：为名片、宣传册和促销材料创建<strong>自定义二维码</strong>，将潜在客户与您的网站、特别优惠或联系信息连接起来。公司可以使用融入品牌颜色和徽标的独特风格二维码，在提供便捷方式让客户访问数字内容的同时，增强品牌识别度。",
          
          "<strong>非接触式支付</strong>：生成直接链接到支付平台或包含加密货币钱包信息的<strong>支付二维码</strong>，实现快速和非接触式交易。这对于小型企业和街头小贩变得越来越重要，他们可以在不需要昂贵的销售点终端的情况下接受数字支付。",
          
          "<strong>餐厅菜单</strong>：开发<strong>可扫描二维码</strong>用于无接触菜单访问，让就餐者无需触摸实体菜单即可在手机上查看菜品。餐厅可以即时更新数字菜单而无需重新打印，甚至可以包含传统菜单上不适合的照片、详细描述或饮食信息。",
          
          "<strong>活动管理</strong>：为会议、音乐会或展览创建<strong>二维码门票</strong>和登记证，可以快速扫描进行验证。活动组织者可以实时跟踪出席情况，减少伪造，简化登记流程，同时最大限度地减少身体接触。",
          
          "<strong>产品包装</strong>：在产品上加入<strong>二维码标签</strong>，链接到用户手册、设置说明、保修注册或认证验证。制造商可以提供广泛的产品信息、教程视频和支持资源，而不增加包装尺寸或印刷成本。",
          
          "<strong>教育资源</strong>：生成连接学生到补充学习材料、互动测验或视频演示的<strong>教育二维码</strong>。教师可以将这些代码放在讲义或演示文稿中，在物理和数字学习环境之间创建桥梁，同时跟踪与特定资源的互动。"
        ]
      }
    },
    faq: {
      title: "关于二维码的常见问题",
      items: [
        {
          question: "各种二维码纠错级别有什么区别？",
          answer: "<strong>二维码</strong>中的纠错级别决定了码在仍然可扫描的情况下能承受多少损坏：<br><br>• <strong>L级（低）</strong>：恢复高达7%的损坏，创建最紧凑的码，适合受控环境<br>• <strong>M级（中）</strong>：处理高达15%的损坏，为大多数标准应用提供良好平衡<br>• <strong>Q级（四分位）</strong>：承受高达25%的损坏，推荐用于工业用途或室外展示<br>• <strong>H级（高）</strong>：容忍高达30%的损坏，最适合恶劣环境或添加徽标时使用<br><br>更高的纠错级别会创建具有额外冗余的更复杂<strong>二维码图案</strong>，这使得码略大但在具挑战性的条件下或自定义颜色或徽标时显著更可靠。"
        },
        {
          question: "我可以在不破坏二维码功能的情况下添加徽标吗？",
          answer: "是的，您可以在保持可扫描性的同时向<strong>二维码</strong>添加徽标，方法是遵循以下指南：<br><br>1. 创建<strong>带徽标的自定义二维码</strong>时使用更高的纠错级别（最好是H级）<br>2. 保持徽标相对较小，理想情况下覆盖中央区域不超过30%<br>3. 确保徽标与二维码颜色有足够对比度<br>4. 避免将徽标放在三个定位检测图案（角落的方块）上<br><br>我们的<strong>二维码生成器</strong>在您添加徽标时自动调整码的数据密度，确保生成的码保持完全功能。添加徽标后，务必使用多个设备测试您的二维码，以验证它在各种条件下是否正确扫描。"
        },
        {
          question: "我可以在二维码中编码哪些信息？",
          answer: "二维码可以编码各种类型的信息，使其极为多功能：<br><br>• <strong>网站URL</strong>：引导扫描者到特定网页、登陆页面或在线资源<br>• <strong>纯文本</strong>：存储消息、标识符或任何字母数字信息（最多约4,000个字符）<br>• <strong>联系信息（vCard/meCard）</strong>：分享可直接保存到手机联系人的完整联系详情<br>• <strong>WiFi网络凭据</strong>：无需输入密码即可即时连接到WiFi网络<br>• <strong>电话号码</strong>：扫描时发起呼叫<br>• <strong>短信</strong>：打开预填充的文本消息<br>• <strong>电子邮件地址</strong>：向指定收件人开始新邮件<br>• <strong>地理位置</strong>：打开地图应用到特定坐标<br><br>我们的<strong>二维码制作工具</strong>为每种内容类型提供专门模板，自动正确格式化数据，确保与大多数扫描应用程序兼容。"
        },
        {
          question: "我应该打印多大的二维码才能获得最佳扫描效果？",
          answer: "打印<strong>二维码</strong>的最佳尺寸取决于扫描距离：<br><br>• <strong>最小尺寸</strong>：2 × 2厘米（0.8 × 0.8英寸），用于近距离扫描<br>• <strong>标准建议</strong>：3 × 3厘米（1.2 × 1.2英寸），适用于典型使用场景<br>• <strong>从1-2米远处扫描</strong>：10 × 10厘米（4 × 4英寸）或更大<br>• <strong>广告牌或远距离扫描</strong>：至少30 × 30厘米（12 × 12英寸）<br><br>一般经验法则是，<strong>打印的二维码</strong>应该至少是扫描距离的1/10。此外，始终在代码周围包含安静区（空白边距），其测量至少为单个模块（码中最小的正方形）宽度的四倍。<br><br>我们的<strong>二维码生成器</strong>生成高分辨率SVG文件，可以缩放到任何尺寸而不失去质量，确保您的码无论打印尺寸如何，都保持清晰且可扫描。"
        },
        {
          question: "如何跟踪我的二维码的扫描次数？",
          answer: "要跟踪<strong>二维码</strong>的扫描次数并收集分析数据，您可以：<br><br>1. 使用带跟踪功能的<strong>URL缩短器</strong>（如Bit.ly、TinyURL或Rebrandly）作为二维码目的地，它提供扫描指标<br>2. 将二维码指向您网站上特定的登陆页面，通过Google Analytics或类似工具监控<br>3. 使用提供内置分析功能的专业<strong>动态二维码</strong>服务，让您无需创建新码即可更改目标URL<br>4. 为每个二维码创建唯一的UTM参数，以在分析中区分流量来源<br><br>虽然我们的<strong>二维码生成器</strong>创建静态码，但您可以轻松实现这些跟踪策略，方法是编码适当的跟踪URL。对于需要全面扫描分析（包括位置数据、设备信息和扫描时间）的企业级应用，请考虑使用专用二维码营销平台。"
        }
      ]
    },
    guide: {
      title: "如何创建二维码：分步指南",
      step1: "<strong>选择内容类型</strong>：首先决定您想在二维码中编码的信息。从网站URL、纯文本、联系信息或WiFi凭据等选项中选择。为了更方便，您可以使用我们<strong>二维码生成器</strong>提供的模板之一，它将根据内容类型自动正确格式化您的数据。",
      step2: "<strong>输入您的信息</strong>：在内容字段中填写必要的详细信息。对于URL，确保包含完整的网址，以'http://'或'https://'开头。对于WiFi网络，提供网络名称(SSID)、密码和加密类型。<strong>二维码制作工具</strong>将验证您的输入，确保它能被正确编码和后续扫描。",
      step3: "<strong>自定义外观</strong>：通过调整大小、颜色和纠错级别等设置来个性化您的二维码。您可以选择不同的前景和背景颜色以匹配您的品牌，调整圆角以获得更柔和的外观，甚至可以在您的码中心添加徽标。我们的<strong>二维码创建器</strong>通过根据需要调整纠错级别，自动确保这些自定义保持可扫描性。",
      step4: "<strong>生成并测试您的二维码</strong>：点击\"生成二维码\"按钮，基于您提供的信息和选择的设计选项创建您的码。生成后，使用您的智能手机相机或专用二维码扫描应用测试您的二维码，验证它是否正确显示或执行预期操作。如果您已自定义外观或添加徽标，测试特别重要。",
      step5: "<strong>下载并部署您的二维码</strong>：在验证您的二维码正常工作后，以您喜欢的格式下载它（用于数字使用的PNG或可缩放打印材料的SVG）。然后，您可以将<strong>二维码图像</strong>整合到您的营销材料、网站、产品包装或任何需要提供快速访问您信息的地方。请记住，对于打印材料，SVG格式是首选的，因为它在任何大小下都能保持质量。"
    },
    conclusion: "二维码已经改变了我们连接物理和数字世界的方式，提供了一种无缝共享信息和吸引用户的方法。随着它们在各行业的日益采用，创建有效且可扫描的二维码已成为营销人员、企业、教育工作者和个人的一项基本技能。我们的二维码生成器简化了这一过程，提供了创建自定义码的工具，这些码在保持完美功能的同时反映您的品牌标识。无论您是链接到高级网页内容，简化支付流程，还是增强教育材料，二维码都提供了一种多功能解决方案，将便利性与技术效率相结合。随着移动技术的不断发展，这些二维码的重要性和应用将只会扩大，使它们在我们相互连接的世界中成为越来越有价值的资产。"
  }
} 