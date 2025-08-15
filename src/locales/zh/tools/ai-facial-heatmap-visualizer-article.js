export default {
    title: 'AI面部热图可视化工具：提升您的人像摄影',
    functionTitle: '什么是AI面部热图可视化工具及其工作原理？',
    intro: '我们的<strong>AI面部热图可视化工具</strong>是一款先进的工具，它利用人工智能分析您照片中的面部特征并生成有见解的热图。这项创新技术可识别关键面部特征点，并叠加一个色彩编码的可视化层，突出显示感兴趣区域、检测准确度和光线条件。通过复杂的面部识别算法处理您的图像，我们的工具提供可操作的反馈，以改善您的人像摄影，帮助您获得更专业、更吸引人的效果。',

    useCasesTitle: '面部热图分析的常见应用',
    useCases: [
        '人像摄影优化 - 识别光线问题并改善构图',
        '摄影教育 - 学习适当的面部光线技巧',
        '内容创作 - 确保个人资料图片和头像的一致质量',
        '社交媒体优化 - 通过更高质量的人像提高互动',
        '专业头像改进 - 获取关于光线和定位的反馈',
        '摄影作品集增强 - 分析并改进您的人像收藏'
    ],

    tipTitle: '专业提示：',
    tipContent: '为了获得最准确的面部分析，请使用光线良好、面部清晰可见且没有太阳镜或浓重阴影等遮挡物的照片。',

    conclusion: '<strong>AI面部热图可视化工具</strong>对摄影师、内容创作者和任何希望改进人像摄影的人来说都是一个宝贵的工具。通过提供面部特征、光线条件和定位的详细分析，该工具帮助您了解什么构成了一张出色的人像，以及如何持续获得专业质量的效果。我们的技术在您的浏览器中本地处理所有内容，确保您的照片保持私密，同时仍然提供强大的见解。',

    faqTitle: '常见问题',
    faqs: [
        {
            question: '面部热图技术是如何工作的？',
            answer: '我们的<strong>AI面部热图可视化工具</strong>使用先进的机器学习模型在您的照片上检测68个面部特征点。然后，它分析这些点以创建一个色彩编码的叠加层，可视化检测置信度、光线分布和面部特征突出度。红色区域表示高强度或高置信度，绿色表示中等水平，蓝色代表较低值。这种可视化有助于识别您的人像摄影中可能需要改进的区域。'
        },
        {
            question: '使用此工具时，我的照片数据安全吗？',
            answer: '是的，您的隐私是我们的首要任务。所有处理都在您的浏览器中使用JavaScript本地进行。您的照片永远不会上传到任何服务器，也不会存储或传输面部数据。该工具使用完全在您设备上运行的预训练模型，确保您的图像完全保持私密。'
        },
        {
            question: '该工具提供什么样的摄影技巧？',
            answer: '该工具分析您的人像并提供关于几个方面的可操作反馈：光线平衡（识别过暗或过亮的区域）、面部定位（如果主体太近、太远或偏离中心）、表情检测和特征点准确性。这些见解可以帮助您调整摄影设置、相机设置或主体定位，以获得更好的效果。'
        },
        {
            question: '我可以在一张照片中使用此工具分析多个人吗？',
            answer: '是的，我们的<strong>AI面部热图可视化工具</strong>可以在单个图像中检测和分析多个面孔。它将为每个检测到的面孔创建单独的热图并提供个别分析。这对于团体人像或在相同光线条件下比较不同主体特别有用。'
        },
        {
            question: '支持哪些图像格式和尺寸？',
            answer: '该工具支持常见的图像格式，包括PNG、JPEG、WEBP和BMP。为了获得最佳性能，我们建议使用最长边在500px到2000px之间的图像。非常大的图像可能会自动调整大小以确保流畅处理。面部检测在清晰、光线充足且面部在画面中相当突出的照片上效果最佳。'
        }
    ],

    tutorialTitle: '如何使用AI面部热图可视化工具',
    steps: [
        {
            title: '上传您的照片',
            description: '首先上传您想要分析的人像照片。您可以<strong>拖放</strong>图像到上传区域，或点击浏览并从您的设备中选择文件。该工具支持JPG、PNG、BMP和WEBP格式。',
            note: '您可以上传多张图像进行批量处理。'
        },
        {
            title: '预览和确认',
            description: '上传后，您将在预览区域看到图像的缩略图。检查它们以确保您选择了正确的文件，然后再继续。',
            note: '如果需要删除任何图像，将鼠标悬停在缩略图上并点击删除图标。'
        },
        {
            title: '生成热图',
            description: '点击<strong>"生成热图"</strong>按钮处理您的图像。该工具将检测面部，分析面部特征，并创建色彩编码的热图可视化。',
            note: '首次使用该工具时，可能需要一点时间来下载面部识别模型。'
        },
        {
            title: '查看分析结果',
            description: '处理完成后，每张图像将与其对应的热图叠加层一起显示。在每个可视化下方，您将找到关于光线、定位和人像其他方面的具体反馈。',
            note: '使用缩放和平移控件详细检查特定感兴趣区域。'
        },
        {
            title: '选择导出选项',
            description: '对于每张处理过的图像，选择您偏好的导出格式（PNG、JPG、WEBP或BMP）。如果您选择JPG，还可以使用滑块调整质量，以平衡文件大小和图像质量。',
            note: '推荐使用PNG以保留热图可视化的完整细节。'
        }
    ],

    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的AI面部热图可视化工具来改进您的人像摄影。应用获得的见解来提升您的摄影技巧，创作更专业的人像。',

    relatedToolsTitle: '您可能会觉得有用的相关工具',
    relatedTools: [
        {
            name: '图像压缩器',
            description: '在不明显损失质量的情况下减小图像文件大小。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: '图像调整器',
            description: '将图像调整为特定尺寸或按百分比缩放。',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: '颜色反转工具',
            description: '使用我们的颜色反转工具创建图像的负片版本。',
            url: 'https://www.ufreetools.com/tool/invert-image-colors'
        },
        {
            name: '二维码生成器',
            description: '为URL、文本、联系信息等创建自定义二维码。',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],

    referencesTitle: '参考资源',
    references: [
        {
            name: 'Face-API.js文档',
            description: '该工具使用的面部识别库的技术文档',
            url: 'https://github.com/vladmandic/face-api'
        },
        {
            name: '人像摄影光线指南',
            description: '理解人像摄影光线的综合指南',
            url: 'https://www.studiobinder.com/blog/portrait-lighting-setup-guide/'
        },
        {
            name: '面部识别技术概述',
            description: '关于面部识别算法工作原理的教育资源',
            url: 'https://en.wikipedia.org/wiki/Facial_recognition_system'
        }
    ]
}
