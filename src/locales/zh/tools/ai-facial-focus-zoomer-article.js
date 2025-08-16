export default {
    title: 'AI面部聚焦自动裁剪工具：智能头像优化器使用指南',
    functionTitle: '什么是AI面部聚焦自动裁剪工具及其工作原理？',
    intro: '我们的<strong>AI面部聚焦自动裁剪工具</strong>是一款基于人工智能的智能图像处理工具，专门用于检测照片中的面部位置并自动进行最佳裁剪。该工具使用先进的face-api.js技术，能够精确识别面部特征点，智能计算最佳裁剪区域，并为不同社交媒体平台生成优化的头像尺寸。通过<strong>面部识别自动裁剪</strong>技术，用户可以快速将普通照片转换为专业的社交媒体头像，大大提升个人形象展示效果。',

    useCasesTitle: 'AI面部聚焦裁剪的常见应用场景',
    useCases: [
        '社交媒体头像优化 - 为Instagram、LinkedIn、Facebook等平台创建完美头像',
        '职业形象管理 - 制作专业的商务头像和个人资料照片',
        '批量头像处理 - 快速处理多张照片，统一头像风格',
        '电商产品图片 - 优化客服头像和店铺形象展示',
        '团队成员介绍 - 为公司网站制作统一规格的员工头像',
        '在线教育平台 - 优化讲师和学员的个人资料图片',
        '约会应用优化 - 提升交友软件中的个人形象吸引力',
        '游戏头像制作 - 为游戏账户创建个性化头像图片'
    ],

    tipTitle: '专业提示：',
    tipContent: '为获得最佳的面部检测和裁剪效果，建议使用光线充足、面部清晰、正面角度的高质量照片。避免使用过度模糊、侧脸或有遮挡物的图片。',

    conclusion: '<strong>AI面部聚焦自动裁剪工具</strong>是现代数字生活中不可或缺的图像处理助手。无论您是社交媒体达人、职场专业人士，还是内容创作者，这款工具都能帮助您快速创建符合各大平台要求的优质头像。通过智能面部检测和自动裁剪技术，您可以节省大量手动编辑时间，同时确保头像的专业性和一致性。我们的工具完全在浏览器本地运行，保护您的隐私安全。',

    faqTitle: '常见问题解答',
    faqs: [
        {
            question: 'AI面部聚焦自动裁剪技术是如何工作的？',
            answer: '我们的<strong>AI面部聚焦自动裁剪工具</strong>使用face-api.js库中的TinyFaceDetector模型来检测图像中的人脸。系统首先分析图像，识别面部区域和68个关键特征点，然后根据面部大小、位置和用户设定的参数（如边距、裁剪模式）计算最佳裁剪区域。最后，工具会自动裁剪图像并生成适合不同社交媒体平台的多种尺寸版本。'
        },
        {
            question: '这个工具支持哪些社交媒体平台的头像尺寸？',
            answer: '我们的工具支持主流社交媒体平台的标准头像尺寸，包括Instagram（1080×1080）、LinkedIn（400×400）、YouTube（800×800）、Facebook（180×180）、Twitter（400×400）、TikTok（200×200）、小红书（400×400）、微信（132×132）和Reddit（256×256）。您可以选择预设尺寸，也可以自定义裁剪尺寸。工具还提供社交媒体包下载功能，一次性获取所有平台所需的头像尺寸。'
        },
        {
            question: '如果照片中有多个人脸，工具会如何处理？',
            answer: '当检测到多个面部时，我们的<strong>智能头像裁剪工具</strong>会自动选择面积最大的面部作为主要裁剪对象。这通常对应于照片中最突出或最靠近镜头的人物。如果您需要裁剪其他人脸，建议先手动裁剪出目标人物的区域，然后再使用我们的工具进行精确处理。'
        },
        {
            question: '我可以调整裁剪参数来获得不同的效果吗？',
            answer: '是的，我们提供了丰富的参数调整选项。您可以设置面部边距（10%-100%）来控制面部周围的留白空间，调整检测置信度（30%-90%）来优化面部识别准确性，选择不同的裁剪模式（自动、正方形、自定义尺寸）。所有参数调整都会实时生效，您可以立即看到裁剪效果的变化。'
        },
        {
            question: '工具对图片质量和格式有什么要求？',
            answer: '我们的工具支持PNG、JPEG、BMP和WEBP格式的图片。为了获得最佳效果，建议使用分辨率在500×500像素以上的高质量图片。图片应该光线充足、面部清晰可见，避免过度模糊、强烈阴影或面部遮挡。工具会自动处理不同尺寸的输入图片，并生成高质量的裁剪结果。'
        }
    ],

    tutorialTitle: '如何使用AI面部聚焦自动裁剪工具',
    steps: [
        {
            title: '调整裁剪参数',
            description: '在左侧参数设置面板中，选择合适的<strong>裁剪模式</strong>（自动、正方形或自定义尺寸）。调整面部边距滑块来控制面部周围的留白空间，设置检测置信度以优化面部识别准确性。您也可以直接点击社交媒体预设按钮快速应用常用平台的尺寸设置。',
            note: '参数调整会实时影响裁剪效果，建议先设置好参数再上传图片。'
        },
        {
            title: '上传待处理图片',
            description: '将您的照片<strong>拖放</strong>到上传区域，或点击选择文件从设备中选择图片。工具支持PNG、JPEG、BMP、WEBP格式，可以同时上传多张图片进行批量处理。上传后会在预览区域显示缩略图。',
            note: '建议使用光线充足、面部清晰的正面照片以获得最佳效果。'
        },
        {
            title: '开始AI面部检测和裁剪',
            description: '点击<strong>"开始处理"</strong>按钮，工具会自动加载面部识别模型（首次使用需要下载），然后对每张图片进行面部检测和智能裁剪。处理过程中会显示进度状态和检测结果。',
            note: '首次使用时模型下载可能需要几分钟时间，请耐心等待。'
        },
        {
            title: '查看裁剪结果和社交媒体预览',
            description: '处理完成后，右侧会显示裁剪结果和分析信息，包括检测到的面部数量和置信度。每个结果都会显示Instagram、LinkedIn、YouTube三个平台的预览效果，帮助您直观了解在不同平台上的显示效果。',
            note: '您可以使用缩放、平移功能详细查看裁剪结果的细节。'
        },
        {
            title: '选择导出格式和质量',
            description: '为每张处理后的图片选择导出格式（PNG、JPG、WEBP）。如果选择JPG格式，可以调整图片质量滑块来平衡文件大小和图像质量。PNG格式适合需要透明背景的场景，JPG格式文件更小适合网络传输。',
            note: '建议社交媒体头像使用JPG格式，质量设置在80%-95%之间。'
        },
        {
            title: '下载优化后的头像',
            description: '点击<strong>"下载"</strong>按钮下载单张裁剪后的图片，或点击<strong>"下载社交媒体包"</strong>获取包含所有主流平台尺寸的ZIP压缩包。批量处理时还可以使用"批量下载"功能一次性下载所有结果。',
            note: '社交媒体包包含Instagram、LinkedIn、YouTube、Facebook、Twitter五个平台的标准尺寸。'
        }
    ],

    successTitle: '恭喜！',
    successContent: '您已成功掌握AI面部聚焦自动裁剪工具的使用方法。现在您可以快速为各种社交媒体平台创建专业的头像，提升您的数字形象！',

    relatedToolsTitle: '您可能感兴趣的相关工具',
    relatedTools: [
        {
            name: 'AI面部热力图可视化工具',
            description: '分析面部特征分布，优化人像摄影构图和光线效果。',
            url: 'https://www.ufreetools.com/tool/ai-facial-heatmap-visualizer'
        },
        {
            name: '图片压缩器',
            description: '在保持质量的同时减小图片文件大小，适合网络传输。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: '图片批量调整器',
            description: '批量调整图片尺寸，支持多种缩放模式和格式转换。',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: '背景移除工具',
            description: '使用AI技术自动移除图片背景，制作透明背景头像。',
            url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
        }
    ],

    referencesTitle: '参考资源',
    references: [
        {
            name: 'Face-API.js 官方文档',
            description: '本工具使用的JavaScript面部识别库的完整技术文档',
            url: 'https://github.com/vladmandic/face-api'
        },
        {
            name: '社交媒体头像尺寸指南',
            description: '各大社交媒体平台头像的标准尺寸和最佳实践',
            url: 'https://blog.hootsuite.com/social-media-image-sizes-guide/'
        },
        {
            name: '人像摄影构图技巧',
            description: '专业人像摄影的构图原则和技巧分享',
            url: 'https://www.theschoolofphotography.com/tutorials/portrait-photography-tips'
        },
        {
            name: '面部识别技术原理',
            description: '深入了解计算机视觉中的面部检测和识别算法',
            url: 'https://zh.wikipedia.org/wiki/人脸识别'
        }
    ]
}