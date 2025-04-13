export default {
  name: '图像颜色提取器',
  description: '从图像中提取颜色调色板和主要颜色',
  input: {
    title: '上传图像',
    dropzone: '将图像拖放到此处或点击上传',
    formats: '支持的格式：JPG、PNG、GIF、WebP、SVG',
    browse: '浏览文件',
    selectImage: '选择图片',
    orText: '或',
    pasteUrl: '粘贴图像URL：',
    loadUrl: '从URL加载',
    urlPlaceholder: 'https://example.com/image.jpg',
    unnamed: '未命名图像'
  },
  options: {
    title: '提取选项',
    extractSettings: '提取设置',
    colorCount: '颜色数量',
    paletteSize: '调色板大小',
    paletteMin: '最少 (3)',
    paletteMax: '最多 (20)',
    colorSimilarity: '颜色相似度',
    similiarityToggle: '允许相似颜色',
    quality: '提取质量',
    colorModel: '颜色模型',
    colorSpace: '色彩空间',
    colorFormat: '颜色格式',
    sortBy: '颜色排序方式',
    sortByPopularity: '按颜色出现频率',
    sortByLuminance: '按亮度',
    sortByHue: '按色相',
    sortBySaturation: '按饱和度',
    ignoreWhite: '忽略白色',
    ignoreBlack: '忽略黑色',
    threshold: '相似度阈值'
  },
  colorModels: {
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB'
  },
  colorFormats: {
    hex: '十六进制 (#RRGGBB)',
    rgb: 'RGB (0-255)',
    rgba: '带透明度的RGBA',
    hsl: 'HSL',
    hsla: '带透明度的HSLA',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },
  sortOptions: {
    prevalence: '出现频率',
    luminance: '亮度',
    hue: '色相',
    saturation: '饱和度',
    original: '原始顺序'
  },
  colorSpaces: {
    srgb: 'sRGB',
    p3: 'Display P3',
    rec2020: 'Rec. 2020',
    prophoto: 'ProPhoto RGB'
  },
  results: {
    title: '已提取颜色',
    colorsFound: '已提取{count}种颜色',
    dominantColor: '主要颜色',
    mainColor: '主色调',
    complementary: '互补色',
    palette: '颜色调色板',
    colorPalette: '颜色调色板',
    palettePreview: '调色板预览',
    usage: '颜色使用率 (%)',
    percentage: '占比: {value}%',
    copyAll: '复制所有颜色',
    clickToCopy: '点击复制颜色: {color}',
    downloading: '正在下载调色板...'
  },
  display: {
    originalImage: '原始图片',
    colorPalette: '色彩调色板',
    uploadFirst: '请先上传一张图片',
    clickExtract: '点击"提取颜色"按钮获取图片的调色板',
  },
  actions: {
    extract: '提取颜色',
    extracting: '处理中...',
    download: '下载调色板',
    copy: '复制',
    copyValue: '复制值',
    reset: '重置',
    copyPalette: '复制调色板',
    exportJson: '导出为JSON',
    exportCss: '导出为CSS变量',
    exportSass: '导出为SASS变量',
    exportSwatch: '导出为ASE色板'
  },
  palette: {
    title: '命名调色板',
    vibrant: '鲜艳',
    muted: '柔和',
    dark: '暗色',
    light: '亮色',
    custom: '自定义'
  },
  messages: {
    imageLoaded: '图像加载成功',
    processingImage: '正在处理图像...',
    extractionComplete: '颜色提取完成',
    extractionFailed: '颜色提取失败：{error}',
    copied: '已复制到剪贴板',
    copiedColor: '已复制: {color}',
    copiedAll: '已复制所有颜色',
    copyFailed: '复制失败',
    resetDone: '已重置',
    invalidImage: '无效的图像文件',
    noImageSelected: '未选择图像'
  },
  article: {
    title: "图像颜色提取器：从任何图像中识别和提取颜色",
    features: {
      title: "了解图像颜色提取及其应用",
      description: "<strong>图像颜色提取器</strong>是一款功能强大的在线工具，旨在分析图像并识别其关键颜色。该实用工具采用先进的<strong>颜色检测算法</strong>扫描您上传的图像，识别定义整体调色板的主要颜色和增添视觉趣味的点缀色。<br><br>与基本的吸管工具不同，我们的<strong>调色板生成器</strong>智能地将相似颜色聚集在一起，为您提供连贯且实用的颜色集合，而不是简单地采样单个像素。该工具支持包括JPEG、PNG、GIF和WebP在内的各种图像格式，使其适用于不同的使用场景。<br><br>提取的<strong>配色方案</strong>立即以多种格式提供，包括HEX、RGB和HSL，允许您轻松地将它们整合到您的设计项目、代码或文档中，无需手动转换。",
      useCases: {
        title: "图像颜色提取的实际应用",
        items: [
          "<strong>网页设计与开发</strong>：从客户标志或参考图像中提取连贯的<strong>调色板</strong>，确保网站的品牌一致性。提取的颜色可以直接用于CSS样式表，使设计师能够匹配灵感图像中的精确颜色，或基于现有视觉资产建立一致的设计系统。",
          
          "<strong>数字营销</strong>：通过从产品照片或品牌图像中提取并使用一致的<strong>配色方案</strong>，创建视觉和谐的社交媒体活动。营销专业人员可以通过基于从关键品牌图像中提取的颜色数据，确保所有宣传材料保持颜色和谐。",
          
          "<strong>品牌标识开发</strong>：分析竞争对手的<strong>品牌颜色</strong>或通过从灵感图像中提取调色板来探索色彩选项。品牌策略师可以使用该工具了解行业色彩趋势，完善品牌指南或建立与竞争对手不同的独特视觉标识。",
          
          "<strong>UI/UX设计</strong>：从模型或灵感图像中提取精确的<strong>颜色值</strong>，以在用户界面设计中实施。UI设计师可以确保在从概念艺术过渡到功能界面时完美匹配颜色，在所有应用程序界面中保持预期的视觉体验。",
          
          "<strong>印刷设计</strong>：从数字参考中识别精确的<strong>颜色代码</strong>，确保在印刷材料中准确再现。从事印刷项目的平面设计师可以提取精确的颜色，以便进行准确的CMYK转换，确保实体材料与数字设计相匹配。",
          
          "<strong>艺术与插画</strong>：基于启发您的艺术作品或照片构建自定义<strong>数字调色板</strong>。数字艺术家可以分析杰作或参考照片中的颜色关系，然后将相似的颜色和谐应用到自己的作品中，以获得更大的视觉冲击力。"
        ]
      }
    },
    faq: {
      title: "关于图像颜色提取的常见问题",
      items: [
        {
          question: "图像颜色提取器在识别颜色方面的准确性如何？",
          answer: "<strong>图像颜色提取器</strong>通过分析像素数据并对相似颜色进行分组的复杂算法，提供高精度的颜色识别。影响准确性的关键因素包括：<br><br>• 图像质量和分辨率 - 高质量图像提供更准确的颜色提取<br>• 色彩空间复杂性 - 具有微妙渐变的图像可能在识别颜色时有轻微变化<br>• 提取颜色的数量 - 算法优先考虑最重要和最主要的颜色<br><br>对于需要精确匹配颜色的专业设计工作，该工具提供可直接应用于设计软件或代码的精确<strong>HEX、RGB和HSL值</strong>。在大多数情况下，用户报告称提取的<strong>调色板</strong>准确地表示了分析图像的基本颜色。"
        },
        {
          question: "颜色提取器支持哪些图像格式？",
          answer: "我们的<strong>图像颜色提取器</strong>支持网络和设计行业中使用的所有主要图像格式：<br><br>• JPEG/JPG - 适用于照片和复杂图像<br>• PNG - 适用于带透明度的图形<br>• GIF - 支持简单动画和图形<br>• WebP - 具有出色压缩效果的现代格式<br>• SVG - 矢量图形格式（从渲染视图中提取颜色）<br><br>每个图像的最大文件大小限制为5MB，以确保最佳性能。为了在提取<strong>配色方案</strong>时获得最佳结果，我们建议使用具有明显色彩区域的清晰、高质量图像。<strong>颜色检测</strong>在没有过多噪点或压缩伪影的图像上表现最佳。"
        },
        {
          question: "该工具将从我的图像中提取多少种颜色？",
          answer: "<strong>图像颜色提取器</strong>提供灵活的颜色提取选项：<br><br>• 默认情况下，该工具提取5-10种最能代表图像<strong>调色板</strong>的主要颜色<br>• 您可以自定义提取，提取少至1-2种关键颜色或多至20种以上的颜色<br>• 算法智能地平衡主要颜色（覆盖大面积的颜色）和点缀色（视觉上重要但不太普遍的颜色）<br><br>出于设计目的，使用5-7种提取的颜色通常可以提供最佳的<strong>配色方案</strong>，既能捕捉图像的精髓，又便于在设计项目中应用。当为详细分析或复杂设计提取颜色时，您可以增加颜色数量以获得更全面的调色板。"
        },
        {
          question: "我可以保存或导出提取的调色板吗？",
          answer: "是的，<strong>图像颜色提取器</strong>提供多种保存和导出提取的<strong>调色板</strong>的选项：<br><br>• 单击即可<strong>复制单个颜色代码</strong>，格式为HEX、RGB或HSL<br>• 以与设计软件兼容的各种格式<strong>导出整个调色板</strong><br>• 将调色板<strong>保存</strong>到浏览器的本地存储中，以供将来参考<br>• <strong>生成CSS变量</strong>，立即用于Web开发<br><br>对于在多个项目中工作的设计团队，导出<strong>配色方案</strong>的能力确保了一致性和效率。许多专业人士将这些提取的调色板整合到他们的设计系统或风格指南中，以保持所有品牌接触点的视觉连贯性。"
        },
        {
          question: "如何在我的设计软件中使用提取的颜色？",
          answer: "我们工具提取的<strong>颜色值</strong>可以通过几种方法轻松转移到任何设计软件中：<br><br>1. 将HEX代码（例如#FF5733）<strong>直接复制粘贴</strong>到Adobe Photoshop、Illustrator、Figma、Sketch等设计软件的颜色输入字段中<br>2. <strong>RGB值</strong>（例如rgb(255, 87, 51)）可以输入到设计应用程序的RGB颜色选择器中<br>3. <strong>HSL格式</strong>特别适用于调整亮度或饱和度，同时保持相同的色调<br>4. 一些设计软件允许<strong>导入我们工具可以导出的格式的调色板</strong><br><br>对于网页设计师和开发人员，提取的<strong>配色方案</strong>可以直接在CSS中实现，可以作为单独的颜色属性，也可以作为一组全面的CSS自定义属性（变量），以更系统地管理颜色。"
        }
      ]
    },
    guide: {
      title: "如何使用图像颜色提取器：分步指南",
      step1: "<strong>上传您的图像</strong>：点击\"选择图像\"按钮或将图像拖放到上传区域。<strong>颜色提取器</strong>接受常见的图像格式，包括JPEG、PNG、WebP和GIF。为了获得最佳结果，请选择具有清晰、明显颜色和足够分辨率的图像。",
      step2: "<strong>调整提取设置</strong>：在处理之前，您可以自定义颜色提取参数。设置您想要提取的颜色数量（通常5-10种提供平衡的<strong>调色板</strong>），并选择是优先考虑主要颜色还是包含点缀色。这些设置有助于根据您的特定需求定制结果。",
      step3: "<strong>处理图像</strong>：点击\"提取颜色\"按钮开始分析。<strong>颜色检测算法</strong>将扫描您的图像，识别关键颜色，并将相似色调分组。这个过程通常只需几秒钟，具体取决于图像大小和复杂性。",
      step4: "<strong>查看提取的颜色</strong>：处理后，工具将以您首选的格式（HEX、RGB或HSL）显示提取的<strong>配色方案</strong>和精确的颜色代码。每种颜色都以色板形式呈现，并附有相应的代码，便于参考。颜色从最主要到点缀色排列，为您提供清晰的视觉层次。",
      step5: "<strong>保存和导出您的调色板</strong>：通过点击单个<strong>颜色代码</strong>复制它们，或使用导出选项导出整个调色板。您可以将调色板保存到浏览器中供将来参考，下载与设计软件兼容的各种格式，或生成CSS变量立即用于Web开发项目。"
    },
    conclusion: "图像颜色提取器是设计师、营销人员、开发人员和艺术家的宝贵工具，他们需要从视觉参考中识别、捕捉和实施特定颜色。通过桥接视觉灵感和实际应用之间的差距，这个工具简化了颜色选择过程，并确保了数字和印刷项目的一致性。无论您是在制定品牌指南、设计网站还是创建数字艺术作品，从图像中提取精确调色板的能力消除了猜测工作，提高了创意输出的质量。随着设计继续强调连贯的颜色系统，能够准确识别和实施配色方案的工具成为各创意和技术领域专业人士的重要资源。"
  }
} 