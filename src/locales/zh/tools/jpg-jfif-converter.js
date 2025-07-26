export default {
  name: 'JPG转JFIF转换器',
  description: '在线将JPG图像转换为JFIF格式，高质量，多种选项',
  tags: ['图片', '转换', 'jpg', 'jfif', 'jpeg', '格式', '工具'],

  meta: {
    title: 'JPG转JFIF转换器 - 免费在线图像转换工具',
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
  }
};