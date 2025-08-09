export default {
    title: 'AI人脸关键点绘制器 - 智能人脸标记与编辑工具使用指南',

    functionTitle: '工具功能介绍与应用场景',
    intro: '<strong>AI人脸关键点绘制器</strong>是一款基于人工智能技术的<strong>在线人脸特征点检测与编辑工具</strong>。它能够自动识别并标记出人脸的68个关键特征点，包括眼部、鼻部、嘴部和面部轮廓等重要区域，为用户提供精确的<strong>人脸结构分析</strong>和<strong>可视化编辑功能</strong>。',

    useCasesTitle: '主要应用场景',
    useCases: [
        '头像设计与创作：为设计师提供精确的面部特征参考',
        '人脸识别研究：用于学术研究和算法开发',
        '美妆应用开发：为AR美妆应用提供关键点数据',
        '动画制作：为面部动画提供控制点',
        '医学美容分析：分析面部比例和对称性',
        'VR/AR应用：为虚拟现实应用提供面部追踪数据',
        '教育培训：用于计算机视觉和AI教学',
        '艺术创作：为数字艺术创作提供技术支持'
    ],

    tipTitle: '专业提示',
    tipContent: '为获得最佳检测效果，请使用清晰、光线充足的正面人脸照片。工具支持拖拽编辑关键点位置，可根据实际需要进行微调。',

    conclusion: '无论您是专业设计师、研究人员还是开发者，这款<strong>AI人脸关键点绘制器</strong>都能为您的项目提供强大的技术支持。工具完全免费，支持批量处理和多种导出格式，让您的创作更加高效便捷。',

    faqTitle: '常见问题解答',

    faq1: {
        question: '什么是人脸关键点检测？',
        answer: '<strong>人脸关键点检测</strong>是计算机视觉领域的重要技术，通过AI算法自动识别人脸上的特征点位置。我们的工具使用68点模型，能够精确标记眼部、鼻部、嘴部和面部轮廓等关键区域，为后续的<strong>面部分析</strong>、<strong>表情识别</strong>和<strong>3D建模</strong>提供基础数据。'
    },

    faq2: {
        question: '检测出的关键点可以编辑吗？',
        answer: '是的！我们的工具支持<strong>交互式编辑功能</strong>。检测完成后，您可以通过鼠标点击并拖拽任意关键点来调整其位置。这对于<strong>精细化调整</strong>、<strong>艺术创作</strong>或<strong>特殊需求定制</strong>非常有用。所有修改都会实时更新在画布上。'
    },

    faq3: {
        question: '支持哪些导出格式？',
        answer: '工具支持多种导出格式以满足不同需求：<strong>PNG/JPG/WEBP</strong>格式适用于图像处理，<strong>SVG格式</strong>适用于矢量图形设计。SVG格式特别适合<strong>网页设计</strong>、<strong>印刷品制作</strong>和<strong>可缩放图形</strong>应用。'
    },

    faq4: {
        question: '检测准确度如何？',
        answer: '我们使用业界先进的<strong>face-api.js库</strong>和<strong>68点人脸模型</strong>，在理想条件下检测准确度可达95%以上。检测效果受光线条件、人脸角度、图片清晰度等因素影响。建议使用<strong>正面清晰照片</strong>以获得最佳效果。'
    },

    faq5: {
        question: '数据安全吗？',
        answer: '绝对安全！所有图片处理都在您的<strong>本地浏览器</strong>中完成，不会上传到任何服务器。我们严格保护用户隐私，确保您的图片数据完全安全。工具支持<strong>离线使用</strong>，让您的隐私得到最大保障。'
    },

    tutorialTitle: '详细使用教程',

    step1: {
        title: '上传人脸图片',
        description: '点击上传区域或直接<strong>拖拽图片文件</strong>到工具中。支持PNG、JPEG、BMP、WEBP等常见格式。也可以点击"加载示例图片"体验工具功能。',
        note: '建议使用清晰的正面人脸照片，避免侧脸或多人照片以确保检测准确度。'
    },

    step2: {
        title: '配置绘制参数',
        description: '在左侧设置面板中调整<strong>显示选项</strong>和<strong>样式参数</strong>。您可以选择是否显示关键点、连线和编号，并自定义颜色、大小等视觉效果。',
        note: '不同的参数设置适用于不同的应用场景，可根据实际需要进行调整。'
    },

    step3: {
        title: '执行关键点检测',
        description: '点击<strong>"检测关键点"</strong>按钮开始AI分析。工具会自动加载模型并检测人脸特征点，整个过程通常需要3-10秒钟。',
        note: '首次使用需要下载AI模型文件，请确保网络连接稳定。'
    },

    step4: {
        title: '编辑关键点位置',
        description: '检测完成后，可以<strong>点击并拖拽</strong>任意关键点来调整位置。支持实时预览编辑效果，所有修改都会立即反映在画布上。',
        note: '编辑功能特别适用于精细化调整和创意设计，可以根据具体需求自由调整。'
    },

    step5: {
        title: '预览和调整效果',
        description: '使用右侧的<strong>缩放和平移</strong>功能查看细节效果。可以放大查看具体关键点位置，确保编辑结果符合预期。',
        note: '充分利用预览功能可以帮助您获得更精确的编辑结果。'
    },

    step6: {
        title: '导出处理结果',
        description: '选择合适的<strong>导出格式</strong>（PNG/JPG/WEBP/SVG），调整图片质量参数，然后点击下载按钮。支持<strong>批量处理</strong>和<strong>ZIP打包下载</strong>。',
        note: 'SVG格式特别适合需要矢量图形的应用场景，如网页设计和印刷品制作。'
    },

    successTitle: '处理完成',
    successContent: '恭喜！您已成功完成人脸关键点检测和编辑。您可以将结果用于各种创意项目、研究工作或商业应用。',

    relatedToolsTitle: '相关推荐工具',

    relatedTool1: {
        name: 'AI多人脸标记工具',
        description: '支持多人脸检测和标记，适用于团队照片处理',
        url: 'https://www.ufreetools.com/tool/ai-multi-face-tagger'
    },

    relatedTool2: {
        name: 'AI年龄性别估计器',
        description: '基于AI技术估算年龄和性别，支持批量分析',
        url: 'https://www.ufreetools.com/tool/ai-age-gender-estimator'
    },

    relatedTool3: {
        name: '图像背景移除工具',
        description: '智能移除图片背景，支持批量处理',
        url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
    },

    relatedTool4: {
        name: '图像颜色反转工具',
        description: '一键反转图片颜色，创造艺术效果',
        url: 'https://www.ufreetools.com/tool/invert-image-colors'
    },

    referencesTitle: '参考资料与技术文档',

    reference1: {
        name: 'face-api.js官方文档',
        description: '了解face-api.js库的详细技术文档和API参考',
        url: 'https://github.com/justadudewhohacks/face-api.js'
    },

    reference2: {
        name: '人脸关键点检测技术原理',
        description: '一种稳健高效的有效面部关键点检测方法',
        url: 'https://www.mdpi.com/2076-3417/14/16/7153'
    },

    reference3: {
        name: 'SVG格式技术规范',
        description: 'SVG矢量图形格式的技术标准和应用指南',
        url: 'https://www.w3.org/Graphics/SVG/'
    }
};