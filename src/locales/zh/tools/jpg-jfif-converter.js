export default {
    name: 'JPG转JFIF转换器',
    description: '在线将JPG图像转换为JFIF格式，高质量，多种选项',
    tags: ['图片', '转换', 'jpg', 'jfif', 'jpeg', '格式', '工具'],
    
    meta: {
      title: 'JPG转JFIF转换器 - 免费在线图像转换工具 | UFreeTools',
      description: '免费在线将JPG转换为JFIF。快速、安全的浏览器内转换，支持批量处理、预览对比和高级质量设置。无水印，无需注册。'
    },
    
    upload: {
      title: 'JPG转JFIF转换器',
      subtitle: '以完美质量将JPG图像转换为JFIF格式',
      dropzone: '将您的JPG文件拖放到这里',
      dropzoneActive: '松开文件开始转换',
      maxSize: '最大文件大小：50MB',
      supportedFormats: '支持的格式：JPG、JPEG'
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
      before: 'JPG原图',
      after: 'JFIF预览',
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
      noValidFiles: '请选择有效的JPG或JPEG文件。',
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
      title: '关于JPG到JFIF转换',
      description: '我们的JPG转JFIF转换器允许您快速轻松地将JPG图像文件转换为JFIF格式，所有处理都安全地在您的浏览器中完成。',
      
      whatIs: {
        title: '什么是JFIF？',
        content: 'JFIF（JPEG文件交换格式）是JPEG文件的一种文件格式标准。它提供额外信息如分辨率、宽高比和其他元数据，帮助确保JPEG图像在不同设备和平台上正确显示。虽然JFIF和JPG技术上是相关格式，但某些软件和设备可能对其中一种有更好的兼容性。'
      },
      
      whyConvert: {
        title: '为什么将JPG转换为JFIF？',
        reason1: '某些较旧的软件系统专门需要JFIF格式',
        reason2: '某些专业应用程序可能与JFIF有更好的兼容性',
        reason3: '使用一致的文件扩展名标准化您的图像集合',
        reason4: '确保在特定成像工作流程中正确处理元数据'
      },
      
      howItWorks: {
        title: '工作原理',
        content: '我们的转换器完全在您的浏览器中处理JPG文件。您的图像永远不会上传到任何服务器，确保完全的隐私和安全。该工具读取JPG图像数据，渲染它，然后以您选择的质量设置将其保存为标准JFIF格式。'
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
      title: "JPG转JFIF转换器终极指南：在线转换JPG文件",
      
      introduction: {
        title: "了解JPG到JFIF的转换",
        content: "我们的<strong>JPG转JFIF转换器</strong>是一款功能强大的在线工具，专为将JPG图像文件无缝转换为JFIF格式而设计。虽然JPG被广泛使用，但在某些特定场景中，JFIF格式可能更受欢迎或需要。我们的转换器直接在您的浏览器中处理图像，无需上传，确保完全的隐私和安全。"
      },
      
      whatIsJfif: {
        title: "什么是JFIF以及为什么要从JPG转换？",
        content: "JFIF（JPEG文件交换格式）是一种定义JPEG图像数据打包方式的文件格式规范。虽然技术上与JPG相似，但许多系统和应用程序对它们的处理方式不同。<strong>将JPG转换为JFIF</strong>对于与某些传统系统、专业软件兼容，或在需要特定元数据处理时可能是必要的。"
      },
      
      whyConvert: {
        title: "将JPG转换为JFIF的好处",
        content: "虽然今天JPG更常用，但您可能需要<strong>将JPG转换为JFIF</strong>的原因有几个。一些较旧的系统和专业应用程序专门需要JFIF格式。此外，JFIF可以对某些类型的元数据提供更一致的处理。通过使用我们的<strong>在线JPG到JFIF转换器</strong>，您可以确保您的图像在这些系统上工作，同时保持质量。"
      },
      
      useCases: {
        title: "JPG到JFIF转换的常见用例",
        list: [
          "传统系统：与特别需要JFIF格式的较旧软件兼容",
          "专业应用程序：某些专业成像软件对JFIF处理更好",
          "档案标准化：将图像集合标准化为一致的格式",
          "发布工作流程：某些发布系统对JFIF有特定要求",
          "技术合规性：满足需要JFIF的特定技术标准",
          "元数据保存：JFIF有时对某些元数据的处理方式不同",
          "软件测试：创建JFIF文件以测试应用程序兼容性"
        ]
      },
      
      platforms: {
        title: "在不同平台上将JPG转换为JFIF",
        content: "我们的工具适用于任何带有网络浏览器的设备，无论您的操作系统如何，都是理想的解决方案。以下是我们的转换器如何满足各种系统的需求：",
        list: [
          {
            title: "Windows 10/11上的JPG到JFIF转换",
            description: "Windows用户可以<strong>在Windows 10中将JPG转换为JFIF</strong>或Windows 11，无需安装任何软件。我们的在线转换器在您PC上的任何浏览器中都能完美运行。"
          },
          {
            title: "Mac上的JPG到JFIF转换",
            description: "想知道<strong>如何在Mac上将JPG转换为JFIF</strong>的Mac用户可以使用我们的工具，无需任何额外的软件，保留宝贵的磁盘空间并避免不必要的下载。"
          },
          {
            title: "移动设备上的JPG到JFIF转换",
            description: "我们的移动响应式设计确保您可以直接从智能手机或平板电脑<strong>将JPG文件转换为JFIF</strong>，界面针对触摸屏进行了优化。"
          },
          {
            title: "使用浏览器扩展的JPG到JFIF转换",
            description: "虽然浏览器扩展存在，但它们通常需要访问您的数据的权限。我们的基于网络的解决方案不需要安装，并保护您的隐私。"
          }
        ]
      },
      
      tutorial: {
        title: "如何将JPG转换为JFIF：逐步指南",
        introduction: "使用我们直观的工具将JPG图像转换为JFIF非常简单。按照以下简单步骤转换您的文件：",
        steps: [
          {
            title: "选择或拖放您的文件",
            description: "点击\"选择文件\"按钮或直接将JPG图像拖放到指定区域。您可以一次选择多个文件进行批量转换。"
          },
          {
            title: "调整质量设置（可选）",
            description: "对于高级用户，您可以自定义<strong>JPG到JFIF的设置</strong>，如输出质量。更高的质量意味着更大的文件大小，而更低的质量会导致更小的文件。"
          },
          {
            title: "选择文件名选项",
            description: "决定是保留原始文件名还是自定义它们。您可以通过我们灵活的选项添加前缀或使用自定义命名模板。"
          },
          {
            title: "配置元数据设置",
            description: "根据您的偏好和要求，选择是保留、删除还是只保留原始文件中的基本图像元数据。"
          },
          {
            title: "点击\"转换所有文件\"",
            description: "配置完设置后，点击\"转换所有文件\"按钮开始转换过程。进度指示器将显示每个文件的状态。"
          },
          {
            title: "下载您转换后的JFIF文件",
            description: "转换完成后，单独下载您的JFIF文件或作为包含所有转换图像的ZIP存档下载。"
          }
        ],
        tips: {
          title: "JPG到JFIF转换的专业提示",
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
        title: "关于JPG到JFIF转换的常见问题",
        questions: [
          {
            question: "为什么我需要将JPG转换为JFIF？",
            answer: "虽然两种格式相似，但一些传统系统和专业应用程序专门需要JFIF格式。此外，某些工作流程可能受益于JFIF处理元数据的方式。我们的在线转换器使这种转换快速简单，无论您的具体原因是什么。"
          },
          {
            question: "我可以在不损失质量的情况下将JPG转换为JFIF吗？",
            answer: "是的，您可以通过使用我们的工具并选择最高质量设置（100%）<strong>将JPG转换为JFIF而不损失质量</strong>。由于两种格式都使用JPEG压缩，使用最高质量设置在它们之间转换可以保留几乎所有图像细节。"
          },
          {
            question: "JPG和JFIF文件之间有区别吗？",
            answer: "是的，虽然微妙。JPG通常用作JPEG压缩图像的文件扩展名，而JFIF是实现JPEG标准的特定文件格式。主要区别在于元数据的存储方式以及某些应用程序如何识别和处理文件。我们的<strong>JPG到JFIF转换器</strong>确保按照JFIF规范进行正确的格式化。"
          },
          {
            question: "转换为JFIF会影响我的图像外观吗？",
            answer: "使用高质量设置时，外观应该没有明显差异。JPG和JFIF都使用相同的JPEG压缩算法。但是，在较低的质量设置下，图像格式之间的任何转换都可能引入一些压缩伪影。我们的工具允许您在下载前预览转换。"
          },
          {
            question: "我可以一次将多个JPG文件转换为JFIF吗？",
            answer: "当然可以！我们的工具支持批处理，允许您同时<strong>将多个JPG文件转换为JFIF</strong>。只需一次选择或拖动多个文件，我们的转换器将处理所有文件。然后，您可以单独下载它们或作为组合的ZIP存档下载。"
          },
          {
            question: "如何确保在转换为JFIF时保留元数据？",
            answer: "默认情况下，我们的转换器会保留元数据，如EXIF信息（相机设置、拍摄日期等）。您可以在高级设置中明确选择\"保留所有元数据\"选项，以确保在转换过程中保留所有元数据。"
          },
          {
            question: "JPG到JFIF的转换安全吗？",
            answer: "是的，我们的转换器直接在您的浏览器中处理所有文件。您的图像永远不会上传到任何服务器，确保完全的隐私和安全。这种本地处理方法意味着您的敏感图像及其元数据永远不会离开您的设备。"
          },
          {
            question: "可以将JPG转换为JFIF然后转为PDF吗？",
            answer: "是的，您可以先使用我们的<strong>免费在线JPG转JFIF转换器</strong>将JPG图像转换为JFIF，然后使用JFIF到PDF转换器创建PDF文件。对于文档创建，如果PDF是您的最终目标，您可能考虑直接从JPG转换为PDF，这样可以减少转换步骤和潜在的质量损失。"
          },
          {
            question: "JFIF和JPEG文件格式有什么区别？",
            answer: "<strong>JFIF与JPEG</strong>的主要区别在于文件结构而不是图像数据本身。JFIF（JPEG文件交换格式）实际上是JPEG标准的特定实现，它定义了压缩图像数据如何打包到文件中。虽然JPG/JPEG通常用作文件扩展名，但JFIF提供特定的元数据格式，确保在不同系统上一致显示。大多数用户不会注意到两种格式之间的视觉差异。"
          },
          {
            question: "是否可以将JFIF转换为PNG格式？",
            answer: "是的，从<strong>JFIF转换为PNG</strong>是可能的，并且在某些情况下可能有益。PNG文件使用无损压缩并支持透明度，使其成为文本、徽标或需要保持完美清晰度的图像的理想选择。但是，PNG文件通常比JFIF文件大。虽然我们的工具专注于JPG到JFIF的转换，但您可以使用专门的JFIF到PNG转换器来实现这一目的。"
          }
        ]
      },
      
      relatedTools: {
        title: "相关图像转换工具",
        introduction: "除了我们的JPG到JFIF转换器外，您可能还会对这些图像工具感兴趣：",
        list: [
          {
            name: "JFIF转JPG转换器",
            url: "https://www.ufreetools.com/tool/jfif-jpg-converter",
            description: "将JFIF文件转换回JPG格式以获得最大兼容性"
          },
          {
            name: "图像压缩器",
            url: "https://www.ufreetools.com/tool/image-compressor",
            description: "在保持视觉质量的同时减小文件大小"
          },
          {
            name: "图像批量调整器",
            url: "https://www.ufreetools.com/tool/image-batch-resizer",
            description: "使用可自定义设置一次调整多个图像的大小"
          }
        ]
      },
      
      resources: {
        title: "官方资源",
        list: [
          {
            name: "JPEG文件交换格式",
            url: "https://www.w3.org/Graphics/JPEG/jfif3.pdf",
            description: "官方JFIF格式规范文档"
          },
          {
            name: "图像文件格式指南",
            url: "https://docs.fileformat.com/image/",
            description: "不同图像文件格式及其应用的综合指南"
          },
          {
            name: "JPEG压缩概述",
            url: "https://en.wikipedia.org/wiki/JPEG",
            description: "了解JPEG压缩的技术细节"
          },
          {
            name: "图像文件类型和格式指南",
            url: "https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types",
            description: "介绍web浏览器通常支持的图像文件类型"
          },
          {
            name: "图像压缩技术",
            url: "https://zh.wikipedia.org/wiki/图像压缩",
            description: "了解不同图像压缩技术及其应用"
          }
        ]
      },
      
      conclusion: {
        title: "为什么选择我们的JPG到JFIF转换器",
        content: "我们的<strong>在线JPG到JFIF转换器</strong>将简单性与强大功能相结合，为任何需要将JPG文件转换为更专业的JFIF格式的人提供完美解决方案。无论您是在处理传统系统、专业应用程序，还是只想标准化您的图像集合，我们基于浏览器的工具都能无缝运行，无需任何下载或安装。凭借批处理功能、可自定义设置和完整的隐私保护，将JPG转换为JFIF从未如此简单或安全。"
      },
      
      formatComparison: {
        title: "JFIF与JPEG和其他图像格式的比较",
        content: "我们的<strong>JPG转JFIF转换器</strong>在密切相关的格式之间进行转换，但了解JFIF与JPEG、PNG甚至PDF格式的比较很重要。这种比较可以帮助您确定哪种格式最适合您的特定需求。",
        table: {
          feature: "特性",
          rows: [
            {
              feature: "文件扩展名",
              jfif: ".jfif",
              jpeg: ".jpg, .jpeg",
              png: ".png",
              pdf: ".pdf"
            },
            {
              feature: "压缩方式",
              jfif: "有损",
              jpeg: "有损",
              png: "无损",
              pdf: "多种"
            },
            {
              feature: "透明度支持",
              jfif: "不支持",
              jpeg: "不支持",
              png: "支持",
              pdf: "支持"
            },
            {
              feature: "元数据处理",
              jfif: "标准化",
              jpeg: "可变",
              png: "有限",
              pdf: "广泛"
            },
            {
              feature: "最佳用例",
              jfif: "传统系统",
              jpeg: "摄影",
              png: "图形/徽标",
              pdf: "文档"
            }
          ]
        }
      },
      
      otherConversions: {
        title: "除了JPG到JFIF：其他格式转换",
        content: "虽然我们的<strong>在线JPG转JFIF转换器</strong>专门将JPG图像转换为JFIF文件，但您可能也对其他相关转换感兴趣。以下是一些补充我们主要服务的常见格式转换：",
        options: [
          {
            title: "JFIF转JPG转换",
            description: "使用我们的<a href='/tool/jfif-jpg-converter' class='text-blue-600 dark:text-blue-400 hover:underline'>JFIF转JPG转换器</a>将JFIF文件转换回更广泛兼容的JPG格式。当您需要与可能不熟悉JFIF格式的用户共享图像时，这很有用。"
          },
          {
            title: "JPG转PDF转换",
            description: "需要在文档中包含您的图像？"
          },
          {
            title: "JFIF转PNG转换",
            description: "对于需要透明度或无损质量的情况，从JFIF转换为PNG可能是有益的，尤其是对于图形、徽标或需要保持完美清晰的文本图像。"
          },
          {
            title: "批量转换",
            description: "我们的免费<strong>在线JPG转JFIF转换器</strong>支持批量处理，允许您同时转换多个文件，从而节省时间，比单独处理每个图像。"
          }
        ]
      },
      
      specificPlatform: {
        title: "平台特定转换说明",
        windows10: {
          title: "如何在Windows 10中将JFIF转换为JPG",
          intro: "虽然我们的<strong>免费在线JPG转JFIF转换器</strong>适用于所有平台，包括Windows 10，一些用户可能更喜欢使用内置的Windows工具。以下是如何直接在Windows 10中转换这些格式：",
          steps: [
            "右键单击您的JFIF图像并选择'打开方式' > '照片'（默认的Windows 10图像查看器）",
            "一旦图像打开，点击右上角的三个点（...）并选择'编辑并创建'",
            "从下拉菜单中选择'编辑'以在编辑器中打开图像",
            "对图像进行任何所需的调整（可选）",
            "点击右上角的'保存'按钮",
            "在保存对话框中，将文件类型从JFIF更改为JPG/JPEG",
            "选择您想要保存的位置并点击'保存'"
          ]
        }
      },
      
      conclusion: {
        title: "为什么选择我们的JPG到JFIF转换器",
        content: "我们的<strong>在线JPG到JFIF转换器</strong>将简单性与强大功能相结合，为任何需要将JPG文件转换为更专业的JFIF格式的人提供完美解决方案。无论您是在处理传统系统、专业应用程序，还是只想标准化您的图像集合，我们基于浏览器的工具都能无缝运行，无需任何下载或安装。凭借批处理功能、可自定义设置和完整的隐私保护，将JPG转换为JFIF从未如此简单或安全。",
        cta: "现在尝试我们的JPG到JFIF转换器"
      }
    }
}