export default {
    name: 'JFIF转JPG转换器',
    description: '在线将JFIF图像转换为JPG格式，高质量，多种选项',
    tags: ['图片', '转换', 'jpg', 'jfif', 'jpeg', '格式', '工具'],
    
    meta: {
      title: 'JFIF转JPG转换器 - 免费在线图像转换工具',
      description: '免费在线将JFIF转换为JPG。快速、安全的浏览器内转换，支持批量处理、预览对比和高级质量设置。无水印，无需注册。'
    },
    
    upload: {
      title: 'JFIF转JPG转换器',
      subtitle: '以完美质量将JFIF图像转换为JPG格式',
      dropzone: '将您的JFIF文件拖放到这里',
      dropzoneActive: '松开文件开始转换',
      maxSize: '最大文件大小：50MB',
      supportedFormats: '支持的格式：JFIF、JPEG、JPG'
    },
    
    settings: {
      title: '转换设置',
      advanced: '高级设置',
      quality: {
        label: '图像质量',
        description: '更高的质量会产生更大的文件',
        auto: '自动优化（推荐）'
      },
      qualityLabels: {
        maximum: '最高质量',
        high: '高质量',
        good: '良好质量',
        medium: '中等质量',
        low: '低质量',
        veryLow: '非常低质量'
      },
      metadata: {
        label: '图像元数据',
        preserve: '保留所有元数据（EXIF、GPS等）',
        strip: '移除所有元数据（文件更小）',
        keepBasic: '仅保留基本元数据'
      },
      filenameOption: '输出文件名',
      filenameOriginal: '原始',
      filenameConverted: '添加前缀',
      filenameCustom: '自定义',
      filenameTemplatePlaceholder: '例如：converted-{name}',
      filenameTemplateHelp: '使用{name}插入原始文件名',
      preserveMetadata: '保留图像元数据'
    },
    
    preview: {
      title: '图像预览',
      before: 'JFIF原图',
      after: 'JPG预览',
      noPreview: '无可用预览',
      togglePreview: '显示/隐藏预览',
      imageDetails: '图像详情'
    },
    
    fileTable: {
      fileName: '文件名',
      type: '类型',
      size: '大小',
      status: '状态',
      preview: '预览',
      pending: '等待中',
      converting: '转换中...',
      done: '已完成',
      error: '错误',
      progress: '进度'
    },
    
    results: {
      title: '转换后的文件',
      summary: '已转换{count}个文件，共节省{saved}空间',
      originalName: '原始名称',
      convertedName: '转换后名称',
      originalSize: '原始大小',
      convertedSize: '新大小',
      compressionRate: '压缩率',
      actions: '操作',
      noResults: '尚无转换结果'
    },
    
    actions: {
      selectFile: '选择文件',
      addMore: '添加更多',
      clear: '清除文件',
      convertAll: '转换所有文件',
      converting: '转换中...',
      download: '下载',
      downloadAll: '下载全部',
      clearResults: '清除结果',
      viewDetails: '查看详情',
      compare: '对比',
      retry: '重试失败',
      cancelAll: '取消',
      optimizeAll: '自动优化'
    },
    
    messages: {
      noValidFiles: '请选择有效的JFIF或JPEG文件。',
      conversionError: '转换文件时出错。请重试。',
      conversionSuccess: '所有文件转换成功！',
      partialSuccess: '{total}个文件中的{success}个成功转换。',
      downloadStarted: '下载已开始...',
      processingFiles: '正在处理您的文件...',
      dragActive: '拖放文件到此处上传',
      fileSizeExceeded: '文件大小超过50MB限制',
      unsupportedFormat: '不支持的文件格式'
    },
    
    history: {
      title: '最近转换',
      empty: '无最近转换',
      clear: '清除历史',
      restore: '恢复文件'
    },
    
    info: {
      title: '关于JFIF到JPG转换',
      description: '我们的JFIF转JPG转换器允许您快速轻松地将JFIF图像文件转换为更广泛兼容的JPG格式，所有处理都安全地在您的浏览器中完成。',
      
      whatIs: {
        title: '什么是JFIF？',
        content: 'JFIF（JPEG文件交换格式）是JPEG文件的一种文件格式标准。它提供额外信息如分辨率、宽高比和其他元数据，帮助确保JPEG图像在不同设备和平台上正确显示。虽然JFIF和JPG技术上是相关格式，但某些软件和设备可能对其中一种有更好的兼容性。'
      },
      
      whyConvert: {
        title: '为什么将JFIF转换为JPG？',
        reason1: '与各种应用程序和设备有更好的兼容性',
        reason2: '更容易上传到可能拒绝JFIF格式的网站',
        reason3: '使用一致的文件扩展名标准化您的图像集合',
        reason4: '解决某些程序无法打开或正确显示JFIF文件的问题'
      },
      
      howItWorks: {
        title: '工作原理',
        content: '我们的转换器完全在您的浏览器中处理JFIF文件。您的图像永远不会上传到任何服务器，确保完全的隐私和安全。该工具读取JFIF图像数据，渲染它，然后以您选择的质量设置将其保存为标准JPG格式。'
      },
      
      tips: {
        title: '获得最佳效果的提示',
        tip1: '使用质量滑块平衡文件大小和图像质量',
        tip2: '对于包含文本或锐利细节的图像，使用较高的质量设置',
        tip3: '一次批量转换多个文件并将它们下载为ZIP文件',
        tip4: '使用"自动优化"以获得质量和文件大小的最佳平衡',
        tip5: '当隐私很重要时，移除元数据以获得更小的文件大小'
      },
      
      privacy: {
        title: '隐私与安全',
        content: '我们严肃对待您的隐私。所有处理都直接在您的浏览器中进行 - 您的文件永远不会上传到任何服务器。这确保了您的图像的完全安全和隐私。'
      }
    },
    
    article: {
      title: "JFIF转JPG转换器终极指南：在线转换JFIF文件",
      
      introduction: {
        title: "了解JFIF到JPG的转换",
        content: "我们的<strong>JFIF转JPG转换器</strong>是一款功能强大的在线工具，专为将JFIF图像文件无缝转换为更广泛兼容的JPG格式而设计。如果您曾经在打开或分享JFIF文件时遇到困难，这个转换器提供了完美的解决方案，直接在您的浏览器中处理图像，无需上传，确保完全的隐私和安全。"
      },
      
      whatIsJfif: {
        title: "什么是JFIF以及为什么要转换为JPG？",
        content: "JFIF（JPEG文件交换格式）是一种定义JPEG图像数据打包方式的文件格式规范。虽然技术上与JPG相似，但许多系统和应用程序对它们的处理方式不同。<strong>将JFIF转换为JPG</strong>可确保在所有设备、应用程序和平台上的最大兼容性，消除在尝试查看或上传图像时出现\"不支持的文件类型\"错误的烦恼。"
      },
      
      whyConvert: {
        title: "将JFIF转换为JPG的好处",
        content: "在Windows 10或任何其他操作系统中<strong>将JFIF转换为JPG</strong>的主要原因是兼容性。JPG文件获得普遍支持，而JFIF文件可能在某些应用程序或网站上引起问题。通过使用我们的<strong>在线JFIF到JPG转换器</strong>，您可以确保您的图像在任何地方都可以访问，从社交媒体平台到图像编辑软件、电子邮件附件和文档插入。"
      },
      
      useCases: {
        title: "JFIF到JPG转换的常见用例",
        list: [
          "社交媒体上传：确保您的图像在可能拒绝JFIF文件的平台上被接受",
          "网站开发：使用JPG以获得与所有浏览器和设备的更好兼容性",
          "数字出版：转换JFIF图像以包含在数字出版物和文档中",
          "照片编辑：在支持格式有限的软件中编辑前，将JFIF文件转换为JPG",
          "电子邮件附件：通过电子邮件分享图像时，转换为JPG以获得普遍兼容性",
          "照片打印服务：许多打印服务专门要求JPG格式",
          "创建照片档案：使用一致的文件扩展名标准化图像集合"
        ]
      },
      
      platforms: {
        title: "在不同平台上将JFIF转换为JPG",
        content: "虽然我们的工具适用于任何带有网络浏览器的设备，但用户经常寻找特定平台的解决方案。以下是我们的转换器如何满足各种系统的需求：",
        list: [
          {
            title: "Windows 10/11上的JFIF到JPG转换",
            description: "无需安装任何软件即可<strong>在Windows 10中将JFIF转换为JPG</strong>或Windows 11。我们的在线转换器在PC上的任何浏览器中都能完美运行，提供比内置工具更简单的替代方案。"
          },
          {
            title: "Mac上的JFIF到JPG转换",
            description: "想知道<strong>如何在Mac上将JFIF转换为JPG</strong>的Mac用户可以使用我们的工具，无需任何额外的软件，保留宝贵的磁盘空间并避免不必要的下载。"
          },
          {
            title: "移动设备上的JFIF到JPG转换",
            description: "我们的移动响应式设计确保您可以直接从智能手机或平板电脑<strong>将JFIF文件转换为JPG</strong>，界面针对触摸屏进行了优化。"
          },
          {
            title: "使用浏览器扩展的JFIF到JPG转换",
            description: "虽然浏览器扩展存在，但它们通常需要访问您的数据的权限。我们的基于网络的解决方案不需要安装，并保护您的隐私。"
          }
        ]
      },
      
      tutorial: {
        title: "如何将JFIF转换为JPG：逐步指南",
        introduction: "使用我们直观的工具将JFIF图像转换为JPG非常简单。按照以下简单步骤转换您的文件：",
        steps: [
          {
            title: "选择或拖放您的文件",
            description: "点击\"选择文件\"按钮或直接将JFIF图像拖放到指定区域。您可以一次选择多个文件进行批量转换。"
          },
          {
            title: "调整质量设置（可选）",
            description: "对于高级用户，您可以自定义<strong>JFIF到JPG的设置</strong>，如输出质量。更高的质量意味着更大的文件大小，而更低的质量会导致更小的文件。"
          },
          {
            title: "选择文件名选项",
            description: "决定是保留原始文件名还是自定义它们。您可以通过我们灵活的选项添加前缀或使用自定义命名模板。"
          },
          {
            title: "配置元数据设置",
            description: "根据您的隐私偏好和文件大小要求，选择是保留、删除还是只保留原始文件中的基本图像元数据。"
          },
          {
            title: "点击\"转换所有文件\"",
            description: "配置完设置后，点击\"转换所有文件\"按钮开始转换过程。进度指示器将显示每个文件的状态。"
          },
          {
            title: "下载您转换后的JPG文件",
            description: "转换完成后，单独下载您的JPG文件或作为包含所有转换图像的ZIP存档下载。"
          }
        ],
        tips: {
          title: "JFIF到JPG转换的专业提示",
          list: [
            "对于有大量细节的照片，使用更高的质量设置（85-100%）以保持图像清晰度",
            "对于网络图形或截图，中等质量设置（70-85%）通常在质量和文件大小之间提供最佳平衡",
            "如果您不确定图像的最佳设置，请使用\"自动优化\"选项",
            "出于隐私考虑，考虑使用\"删除元数据\"选项以删除照片中潜在的敏感信息",
            "转换多个文件时，使用ZIP下载选项比单独下载每个文件节省时间"
          ]
        }
      },
      
      faq: {
        title: "关于JFIF到JPG转换的常见问题",
        questions: [
          {
            question: "如何在Windows 10中将JFIF转换为JPG？",
            answer: "虽然Windows 10有内置选项，如重命名文件扩展名或使用画图，但我们的在线转换器通常更容易。只需在任何浏览器中打开我们的网站，上传您的JFIF文件，然后将它们转换为JPG，无需安装任何软件。这种方法不仅适用于Windows 10，还适用于<strong>Windows 11、Mac和移动设备</strong>。"
          },
          {
            question: "我可以在不损失质量的情况下将JFIF转换为JPG吗？",
            answer: "是的，您可以通过使用我们的工具并选择最高质量设置（100%）<strong>将JFIF转换为JPG而不损失质量</strong>。由于两种格式都使用JPEG压缩，使用最高质量设置在它们之间转换可以保留几乎所有图像细节。为了获得绝对最佳效果，请使用我们的\"最高质量\"设置。"
          },
          {
            question: "如何更改JFIF为JPG文件扩展名？",
            answer: "虽然您可以技术上将文件扩展名从.jfif重命名为.jpg，但这并不总是可靠的。我们的<strong>JFIF到JPG转换器</strong>正确地重新编码图像以确保适当的兼容性，而不仅仅是更改扩展名。这确保文件在所有系统和应用程序上正常工作。"
          },
          {
            question: "有免费的JFIF到JPG转换器软件可以下载吗？",
            answer: "是的，有可下载的应用程序，但我们的<strong>免费在线JFIF到JPG转换器</strong>消除了下载任何软件的需要。它可以从任何设备访问，在您的浏览器中本地处理文件（而不是在我们的服务器上），并且不需要安装或注册。"
          },
          {
            question: "JFIF到JPG的转换会影响图像元数据吗？",
            answer: "默认情况下，我们的转换器会保留元数据，如EXIF信息（相机设置、拍摄日期等）。但是，为了隐私或减小文件大小，您可以选择在转换过程中删除所有元数据。如果您愿意，我们还提供了一个选项，只保留基本的、非敏感的元数据。"
          },
          {
            question: "JFIF和JPG文件之间有什么区别？",
            answer: "区别主要是技术性的。JFIF（JPEG文件交换格式）是实现JPEG标准的特定文件格式，而JPG通常用作JPEG压缩图像的文件名扩展名。在实际应用中，大多数JPG文件实际上遵循JFIF规范，但一些软件根据文件扩展名对它们进行不同的处理。"
          },
          {
            question: "我可以批量将多个JFIF文件转换为JPG吗？",
            answer: "当然可以！我们的工具支持批处理，允许您同时<strong>将多个JFIF文件转换为JPG</strong>。只需一次选择或拖动多个文件，我们的转换器将处理所有文件。然后，您可以单独下载它们或作为组合的ZIP存档下载。"
          }
        ]
      },
      
      conclusion: {
        title: "为什么选择我们的JFIF到JPG转换器",
        content: "我们的<strong>在线JFIF到JPG转换器</strong>将简单性与强大功能相结合，为任何需要将JFIF文件转换为更通用兼容的JPG格式的人提供完美解决方案。无论您使用的是Windows、Mac还是移动设备，我们基于浏览器的工具都能无缝运行，无需任何下载或安装。凭借批处理功能、可自定义设置和完整的隐私保护，将JFIF转换为JPG从未如此简单或安全。立即尝试我们的转换器，体验图像兼容性和分享便利性的差异。"
      },
      
      relatedTools: {
        title: "相关图像转换工具",
        introduction: "除了我们的JFIF到JPG转换器外，您可能还会对这些图像工具感兴趣：",
        list: [
          {
            name: "图像压缩器",
            url: "http://www.ufreetools.com/tool/image-compressor",
            description: "在保持视觉质量的同时减小文件大小"
          },
          {
            name: "图像批量调整器",
            url: "http://www.ufreetools.com/tool/image-batch-resizer",
            description: "一次性调整、转换和优化多张图像"
          },
          {
            name: "GIF帧提取器",
            url: "http://www.ufreetools.com/tool/gif-frame-extractor",
            description: "从GIF动画中提取单个帧"
          }
        ]
      },
      
      resources: {
        title: "官方资源",
        list: [
          {
            name: "JPEG标准文档",
            url: "https://docs.fileformat.com/image/jpeg/",
            description: "了解更多关于JPEG格式背后的技术规范"
          },
          {
            name: "JFIF 文件交换格式",
            url: "https://docs.fileformat.com/image/jfif/",
            description: "了解更多关于JFIF格式背后的技术规范"
          },
          {
            name: "JPEG 文件交换格式",
            url: "https://wikipedia.org/wiki/JPEG_File_Interchange_Format",
            description: "JPEG压缩在许多图像文件格式中使用"
          }
        ]
      }
    }
  }