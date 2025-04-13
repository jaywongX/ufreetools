export default {
  name: 'GIF帧提取器',
  description: '从GIF动画中提取单个帧',
  uploadBtn: '选择GIF',
  resetBtn: '重置',
  extractBtn: '提取帧',
  extractingBtn: '提取中...',
  downloadAllBtn: '下载所有帧',
  upload: {
    title: '上传GIF',
    dropzone: '将GIF文件拖放到此处或点击浏览',
    maxSize: '最大文件大小：20MB',
    onlyGif: '仅支持GIF文件',
    selectGif: '请选择一个GIF文件'
  },
  analysis: {
    title: 'GIF信息',
    dimensions: '尺寸',
    frameCount: '帧数',
    duration: '持续时间',
    fps: '每秒帧数',
    fileSize: '文件大小',
    loopCount: '循环次数',
    infinite: '无限',
    fileName: '文件名',
    size: '尺寸',
    totalFrames: '总帧数',
    notExtracted: '未提取'
  },
  extraction: {
    title: '帧提取',
    selectFrames: '选择帧',
    allFrames: '所有帧',
    rangeOfFrames: '帧范围',
    from: '从',
    to: '到',
    specificFrames: '特定帧',
    frameNumbers: '帧编号（逗号分隔）',
    everyNth: '每N帧',
    nth: '每',
    frames: '帧',
    selectFirst: '第一帧',
    selectLast: '最后一帧',
    selectMiddle: '中间帧',
    selectKeyFrames: '自动检测关键帧'
  },
  output: {
    title: '导出设置',
    format: '输出格式',
    png: 'PNG',
    jpeg: 'JPEG',
    webp: 'WebP',
    scaling: '缩放',
    originalSize: '原始大小',
    customSize: '自定义大小',
    width: '宽度',
    height: '高度',
    quality: '质量',
    qualityValue: '质量: {value}%',
    lowQuality: '低质量 (小文件)',
    highQuality: '高质量 (大文件)',
    naming: '文件命名',
    pattern: '模式',
    filename: '原始文件名',
    framenumber: '帧编号',
    timestamp: '时间戳',
    preview: '预览',
    downloadOptions: '下载选项',
    separateFiles: '单独文件',
    zipArchive: 'ZIP归档',
    spritesheet: '精灵表',
    gridSize: '网格大小',
    columns: '列数',
    animation: '新动画'
  },
  frames: {
    title: '提取的帧',
    frameInfo: '第{number}帧，共{total}帧',
    frame: '帧',
    delay: '延迟：{delay}毫秒',
    downloadFrame: '下载',
    copyFrame: '复制',
    selectAll: '全选',
    unselectAll: '取消全选',
    invertSelection: '反选',
    noFrames: '暂无提取的帧',
    extractFirst: '请先提取帧'
  },
  actions: {
    extract: '提取帧',
    preview: '预览',
    downloadSelected: '下载选中项',
    downloadAll: '下载全部',
    createSpritesheet: '创建精灵表',
    createNewGif: '创建新GIF',
    cancel: '取消',
    processing: '处理中...'
  },
  messages: {
    extractionComplete: '帧提取完成',
    extracting: '正在提取帧...',
    noFramesSelected: '未选择帧',
    processingGif: '正在处理GIF...',
    invalidGif: '无效的GIF文件',
    framesCopied: '帧已复制到剪贴板',
    downloadStarted: '下载已开始',
    spritesheetCreated: '精灵表创建成功',
    frameDownloaded: '帧已下载',
    preparingFrames: '正在准备所有帧，请稍候...',
    allFramesDownloaded: '已下载所有帧',
    downloadError: '下载所有帧失败',
    resetComplete: '已重置',
    fileEmpty: '文件数据为空',
  },
  article: {
    title: "GIF帧提取器：分析和提取动画帧",
    features: {
      title: "了解GIF帧提取",
      description: "<strong>GIF帧提取器</strong>是一款专为解构动画GIF文件成单独帧而设计的专业工具。这个强大的<strong>动画分解器</strong>提供了全面的方法来分析和提取构成GIF的每一个静态图像，使您能够从任何<strong>动画序列</strong>中分离出特定时刻。<br><br>我们的<strong>GIF分割器</strong>提供多种输出格式选项（PNG、JPEG、WebP）、压缩质量设置和直观的帧导航。该工具自动检测并显示基本的<strong>GIF元数据</strong>，包括尺寸、帧数、文件大小和单个帧延迟时间。提取完成后，您可以预览每个<strong>帧图像</strong>，下载单个帧，或将所有帧一起导出为ZIP归档文件，以便进一步编辑或分析。",
      useCases: {
        title: "GIF帧提取的常见应用场景",
        items: [
          "平面设计师从动画GIF中提取特定帧，以修改并整合到新的设计或演示中",
          "网页开发人员分离动画中的帧，创建自定义加载旋转器、进度指示器或精灵表",
          "数字艺术家分析现有GIF中的逐帧动画技术，以提高自己的动画技能",
          "内容创作者从动画反应或表情包中提取关键帧，用作社交媒体帖子中的静态图像",
          "教育工作者和技术写作人员捕捉动画教程或演示的特定阶段，以纳入教学材料中",
          "动作分析师和研究人员提取连续帧，以研究运动模式、物理可视化或科学动画"
        ]
      }
    },
    faq: {
      title: "关于GIF帧提取的常见问题",
      items: [
        {
          question: "这个工具能处理的GIF文件最大尺寸是多少？",
          answer: "我们的GIF帧提取器设计为可以处理大小达20MB的GIF文件。这个限制能够适应网上大多数的动画GIF，同时确保最佳性能。对于更大的GIF，我们建议使用视频编辑软件或专业的动画工具。提取速度取决于文件大小和GIF动画中的帧数 - 有大量帧的大文件自然比帧较少的小动画需要更长的处理时间。"
        },
        {
          question: "我应该为提取的帧选择哪种输出格式？",
          answer: "最佳输出格式取决于您的具体需求：PNG格式理想用于保持最高质量和支持透明度，当您需要在GIF帧中保留alpha通道或进行进一步编辑时，它是完美的选择。JPEG提供更小的文件大小但不支持透明度，并可能引入压缩伪影，适用于简单图像或文件大小很重要的网页发布。WebP在质量和压缩之间提供良好平衡，支持透明度的同时提供比PNG更小的文件大小，如果您的软件支持这种格式，它是一个极佳的现代选择。"
        },
        {
          question: "如何从提取的帧创建新的动画？",
          answer: "使用我们的GIF帧提取器提取帧后，您可以通过几种方法创建新的动画：1) 使用动画软件如Adobe Animate、After Effects或免费替代品GIMP导入提取的帧并导出为自定义时间的新GIF。2) 在线动画工具如EZGIF或Canva可以导入图像序列并转换为可调设置的GIF。3) 对于开发人员，考虑使用CSS动画或JavaScript库如GSAP从帧图像创建Web动画。您可以在重新组合前修改单个帧，创建原始GIF的增强或编辑版本。"
        },
        {
          question: "为什么有些提取的帧看起来与我在GIF中看到的不同？",
          answer: "提取的帧与查看GIF动画时看到的内容之间的差异可能有几个原因：1) GIF经常使用帧优化技术，如透明区域或仅在序列中有意义的处理方法。2) 动画中的某些帧可能显示时间非常短，播放时几乎不可见，但提取时可见。3) 一些GIF查看器可能应用帧混合或插值来平滑动画。4) GIF可能使用局部颜色表，在帧之间改变调色板。我们的GIF帧提取器保留了GIF文件中存储的每个帧的确切像素数据，提供原始帧的最准确表示。"
        },
        {
          question: "从帧延迟时间中可以学到什么信息？",
          answer: "GIF中的帧延迟时间提供了关于动画节奏和步调的宝贵见解。每个帧的延迟（以毫秒计）揭示了：1) 整体动画速度 - 较短的延迟创造更快的动画，而较长的延迟则减慢动作。2) 表示重点的时间模式，动画在某些帧上停留以产生效果。3) 动画技术，如'缓入'或'缓出'效果，其中帧延迟逐渐变化。4) 潜在的优化机会 - 具有相同或非常相似延迟时间的帧可能是标准化的候选者。我们的GIF帧提取器显示每个提取帧的这些延迟值，帮助您理解原始动画的时间结构。"
        }
      ]
    },
    guide: {
      title: "使用GIF帧提取器的步骤指南",
      steps: [
        "点击工具界面顶部的<strong>选择GIF</strong>按钮，从您的设备中选择您想处理的动画GIF文件。该工具支持大小达20MB的GIF文件。",
        "上传后，查看左侧出现的<strong>GIF信息</strong>面板，显示尺寸、文件大小和帧数等详细信息，以验证您选择了正确的文件。",
        "点击顶部工具栏中的<strong>提取帧</strong>按钮开始帧提取过程。工具分析和提取GIF中的每一帧时会显示进度指示器。",
        "从左侧面板的选项中选择您偏好的<strong>输出格式</strong>（PNG、JPEG、WebP）。如果选择JPEG或WebP，您可以调整质量滑块，在图像质量和文件大小之间取得平衡。",
        "浏览工具右侧网格视图中显示的提取帧。每个缩略图显示帧号和延迟时间（该帧在动画中出现的时长）。",
        "要保存单个帧，将鼠标悬停在任何帧缩略图上并点击出现的下载图标。该帧将以您选择的输出格式保存到您的设备上。",
        "要一次下载所有提取的帧，点击工具栏中的<strong>下载所有帧</strong>按钮。这将创建一个ZIP归档文件，包含所有以您选择的格式保存的帧，方便存储和进一步编辑。"
      ]
    },
    conclusion: "GIF帧提取器为将动画GIF解构为其组成帧提供了全面的解决方案。无论您是寻求动画中特定图像的设计师，创建自定义Web动画的开发人员，还是分析视觉序列的教育工作者，这个工具都提供精确的逐帧提取和灵活的输出选项。通过将时间动画转换为静态图像序列，您可以完全控制GIF内容，实现对动画内容的高级编辑、分析和重新利用。随着GIF继续成为在网络上表达思想、反应和演示的流行媒介，提取和操作单个帧的能力仍然是数字内容创作者和分析师的重要技能。"
  }
} 