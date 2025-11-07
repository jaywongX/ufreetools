export default {
    title: '图片转SVG在线：位图矢量化与SVGZ压缩全指南',
    logoAlt: '图片转SVG在线工具产品图片',
    functionTitle: '什么是图片转SVG工具？它如何帮助你快速矢量化位图',
    intro: '我们的<strong>图片转SVG在线工具</strong>采用开源算法在浏览器本地执行，将PNG、JPG、GIF、BMP等位图即时转换为可缩放的<strong>SVG矢量图</strong>，同时支持导出<strong>压缩SVGZ</strong>。无需上传服务器、即时预览、参数可调，帮助你在设计、开发与印刷场景中获得干净、可编辑的矢量路径。凭借高效的颜色量化和路径优化，该<strong>图片转SVG在线</strong>解决方案为你的跨平台工作流程提供强大支持。',

    useCasesTitle: '图片转SVG在线工具的典型应用场景',
    useCases: [
        '将Logo、图标、扁平插画快速矢量化，便于缩放与编辑',
        '把扫描的手绘线稿转换成SVG路径，适合后续上色与排版',
        '为网页与小程序生成体积更小的矢量图，优化加载与SEO',
        '将位图导出为SVGZ压缩格式，进一步减少体积用于移动端',
        '把透明背景PNG矢量化，保留边缘与透明信息的视觉效果',
        '将静态GIF帧矢量化（首帧），用于图形再设计与动画',
        '用于激光雕刻、CNC、切割机等需要SVG路径的制造场景'
    ],

    tipTitle: '专业提示：',
    tipContent: '在<strong>图片转SVG在线</strong>时，适当减少颜色数量与提高路径忽略阈值（pathomit）能有效降低噪点；同时开启线条过滤（linefilter）更有利于线稿与图标获得平滑路径。',

    conclusion: '选择我们的<strong>图片转SVG在线工具</strong>，你可以在浏览器本地完成矢量化、预览、编辑与导出，避免上传隐私数据。通过标准<strong>SVG</strong>与<strong>SVGZ</strong>导出，这一<strong>图片转SVG在线</strong>流程既适配设计与Web开发，也适合制造场景路径处理。',

    faqTitle: '常见问题解答（FAQ）',
    faqs: [
        {
            question: '图片转SVG在线工具如何实现矢量化？',
            answer: '本工具基于开源算法在浏览器本地执行颜色量化、边缘检测与路径拟合，将位图转换为可编辑的SVG路径。整个过程无需上传服务器，真正实现<strong>图片转SVG在线</strong>与隐私保护。'
        },
        {
            question: '能否导出压缩的SVGZ？图片转SVG在线是否支持？',
            answer: '可以。你可以在导出选项中选择<strong>SVGZ</strong>，我们会在本地对SVG字符串进行GZIP压缩，输出更小体积的文件，适用于移动端与弱网场景的<strong>图片转SVG在线</strong>需求。'
        },
        {
            question: '透明背景PNG矢量化效果如何？',
            answer: '工具会对透明像素进行合理近似并保持边缘视觉，适用于Logo、图标等<strong>图片转SVG在线</strong>场景。你也可以通过降低颜色数量与增加pathomit优化结果。'
        },
        {
            question: '支持哪些输入格式进行图片转SVG在线？',
            answer: '我们支持PNG、JPG、GIF、BMP与WEBP等常见格式（GIF取首帧），可通过拖拽、点击上传或粘贴板直接导入，实现高效的<strong>图片转SVG在线</strong>工作流。'
        }
    ],

    tutorialTitle: '如何使用图片转SVG在线工具（详细步骤）',
    step1: {
        title: '上传或粘贴图片',
        description: '点击上传区域或直接<strong>拖拽</strong>文件进入；同时支持<strong>粘贴板</strong>粘贴图片。推荐使用清晰的源图，以便获得更高质量的矢量路径。',
        note: '支持PNG/JPG/GIF/BMP/WEBP，多图将进入批量队列。'
    },
    step2: {
        title: '预览输入并检查透明背景',
        description: '在左侧预览区确认导入文件是否正确；对于<strong>透明背景PNG</strong>，可先观察边缘与透明区域是否符合预期。',
        note: '你可以删除误选图片，保持队列干净。'
    },
    step3: {
        title: '调整矢量化参数',
        description: '根据图像特征调整<strong>颜色数量</strong>、<strong>ltres</strong>、<strong>qtres</strong>、<strong>pathomit</strong>与<strong>线条过滤</strong>，右侧预览会实时刷新，帮助你在<strong>图片转SVG在线</strong>中获得最佳平衡。',
        note: '线稿可增大pathomit，Logo可减少颜色获得更干净的路径。'
    },
    step4: {
        title: '执行转换并查看对比',
        description: '点击“开始转换为SVG”，工具将在本地生成<strong>SVG</strong>并给出交互式预览。通过原图与矢量图的对比视图，快速检查路径质量。',
        note: '在移动端亦可流畅查看与放大细节。'
    },
    step5: {
        title: '选择导出格式：SVG 或 SVGZ',
        description: '若追求最小文件体积，选择<strong>SVGZ</strong>；若需要进一步编辑与兼容，选择<strong>SVG</strong>。两者均可用于Web与设计工具的<strong>图片转SVG在线</strong>成果应用。',
        note: 'SVGZ在弱网与移动端加载更友好。'
    },
    step6: {
        title: '下载或批量打包',
        description: '单独下载每张矢量图，或使用“批量下载（ZIP）”一次性导出队列结果，在<strong>图片转SVG在线</strong>流程中节省时间。',
        note: '所有操作均在本地浏览器完成，保护图片隐私。'
    },

    successTitle: '恭喜！',
    successContent: '你已掌握如何使用<strong>图片转SVG在线</strong>完成位图矢量化、参数优化与多格式导出。',

    relatedToolsTitle: '你可能感兴趣的相关工具',
    relatedTools: [
        {
            name: '图片压缩器',
            description: '在不明显损失质量的情况下减小图像文件大小。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: '图片尺寸批量调整',
            description: '将图像调整为特定尺寸或按百分比缩放。',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: '黑白图像反转',
            description: '一键反转颜色，生成摄影负片与创意效果。',
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
            name: 'SVG基础与最佳实践（MDN）',
            description: '了解SVG语法、渲染与可访问性要点。',
            url: 'https://developer.mozilla.org/zh-CN/docs/Web/SVG'
        },
        {
            name: '色彩量化与图像矢量化研究',
            description: '探索量化、边缘检测与路径拟合方法的理论基础。',
            url: 'https://zh.wikipedia.org/wiki/%E5%9B%BE%E5%83%8F%E9%87%8F%E5%8C%96'
        },
        {
            name: 'Schema.org FAQPage 标记',
            description: '使用结构化数据帮助搜索引擎理解FAQ内容。',
            url: 'https://schema.org/FAQPage'
        }
    ]
}
