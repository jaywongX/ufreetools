export default {
    title: 'STL/3MF模型预览工具：在线3D模型查看器使用指南',
    functionTitle: '什么是STL/3MF模型预览工具及其用途？',
    intro: '我们的<strong>STL/3MF模型预览工具</strong>是一款专业的在线3D模型查看器，可以快速加载和预览STL（Stereo Lithography）和3MF（3D Manufacturing Format）格式的3D模型文件。无需安装任何软件，只需在浏览器中打开即可查看3D模型的各个角度。使用我们的<strong>在线3D模型查看器</strong>，您可以旋转、缩放、平移模型，查看模型的顶点数、面数、尺寸等详细信息，还可以切换线框模式、调整材质颜色、导出高清截图，是3D打印爱好者和设计师的必备工具。',

    useCasesTitle: 'STL/3MF模型预览的常见应用场景',
    useCases: [
        '在3D打印前预览STL模型，检查模型是否完整、有无破面或错误',
        '查看3MF模型的颜色、材质等丰富信息，确认打印效果',
        '快速检查3D模型的尺寸和比例，确保符合打印要求',
        '使用线框模式检查模型的网格拓扑结构，发现潜在问题',
        '为3D模型截图用于产品展示、社交媒体分享或文档说明',
        '在没有安装3D建模软件的情况下快速查看模型文件',
        '批量预览多个3D模型文件，快速筛选需要的模型',
        '向客户或团队成员展示3D模型设计，无需安装专业软件'
    ],

    tipTitle: '专业提示：',
    tipContent: '使用鼠标左键拖动可旋转模型，右键拖动可平移视图，滚轮可缩放。双击模型可自动将其居中显示。对于大型模型文件，首次加载可能需要几秒钟时间。',

    conclusion: '<strong>STL/3MF模型预览</strong>工具对3D打印爱好者、设计师、工程师以及需要查看3D模型的用户特别有用。通过使用我们的在线3D模型查看器，您可以随时随地查看STL和3MF格式的3D模型，无需安装任何专业软件。我们的工具支持多种视图控制、渲染设置和导出功能，所有处理都在浏览器本地完成，确保您的模型数据隐私和安全。',

    faqTitle: '常见问题解答',
    faqs: [
        {
            question: 'STL/3MF模型预览工具支持哪些文件格式？',
            answer: '我们的<strong>在线3D模型查看器</strong>支持两种主要的3D打印文件格式：STL（包括二进制和ASCII格式）和3MF格式。STL是最常用的3D打印格式，而3MF是新一代格式，支持颜色、材质等丰富信息。工具会自动检测文件格式并进行相应处理。'
        },
        {
            question: '如何旋转和缩放3D模型？',
            answer: '使用鼠标左键拖动可以旋转模型，查看不同角度。使用鼠标滚轮可以缩放模型，放大查看细节或缩小查看整体。使用鼠标右键拖动可以平移视图。双击模型可以自动将其居中并重置视角。这些操作让您能够全方位查看3D模型。'
        },
        {
            question: '模型信息面板显示哪些信息？',
            answer: '模型信息面板显示以下关键数据：(1) 顶点数（Vertices）- 模型的顶点总数；(2) 面数（Faces/Triangles）- 模型的三角面数；(3) 文件大小 - 原始文件的大小；(4) 物理尺寸 - 模型的长宽高尺寸（XYZ三轴）。这些信息有助于您了解模型的复杂度和尺寸。'
        },
        {
            question: '什么是线框模式？有什么用途？',
            answer: '线框模式会显示模型的网格线框结构，而不显示实体表面。这对于检查模型的拓扑结构非常有用，可以帮助您发现破面、重面、孔洞等潜在问题。在3D打印前使用线框模式检查模型，可以避免打印失败或质量问题。'
        },
        {
            question: '可以导出3D模型的截图吗？',
            answer: '可以！我们的工具支持一键导出当前视角的高清截图。您可以选择PNG或JPG格式，还可以选择是否导出透明背景的截图（方便放入PPT或文档）。截图功能会捕获当前3D视图的内容，不包含UI界面，非常适合用于产品展示或社交媒体分享。'
        },
        {
            question: '预览过程是否安全？文件会上传到服务器吗？',
            answer: '完全安全！我们的工具采用纯前端技术，所有文件处理都在您的浏览器本地完成。您的STL和3MF文件不会上传到任何服务器，确保隐私和数据安全。您可以放心预览包含商业机密或个人设计的3D模型文件。'
        },
        {
            question: '支持多大的3D模型文件？',
            answer: '文件大小限制主要取决于您的设备性能和浏览器内存。一般来说，我们的工具可以处理几十MB的STL文件和更大的3MF文件。对于非常大的模型文件（超过100MB），加载时间可能会较长，建议使用性能较好的设备。如果遇到加载问题，请尝试刷新页面或使用较小的文件。'
        }
    ],

    tutorialTitle: '如何使用STL/3MF模型预览工具',
    steps: [
        {
            title: '上传3D模型文件',
            description: '首先上传您想要预览的STL或3MF文件。您可以通过<strong>拖拽文件</strong>到上传区域，或<strong>点击浏览</strong>选择文件。我们的工具支持二进制和ASCII两种STL格式，以及3MF格式。您可以一次上传多个文件进行批量预览。',
            note: '支持同时上传多个文件，工具会自动识别格式并加载。'
        },
        {
            title: '查看3D模型',
            description: '文件上传后，3D视图会自动加载并显示模型。使用<strong>鼠标左键拖动</strong>旋转模型，<strong>鼠标滚轮</strong>缩放，<strong>鼠标右键拖动</strong>平移视图。<strong>双击模型</strong>可自动将其居中显示。模型会自动计算包围盒并居中显示。',
            note: '首次加载大型模型可能需要几秒钟，请耐心等待。'
        },
        {
            title: '查看模型信息',
            description: '右侧面板会显示模型的详细信息，包括<strong>顶点数</strong>、<strong>面数</strong>、<strong>文件大小</strong>和<strong>物理尺寸</strong>。这些信息有助于您了解模型的复杂度和尺寸，确认是否符合3D打印要求。',
            note: '对于3MF文件，还会显示颜色、材质等额外信息。'
        },
        {
            title: '调整视图和渲染设置',
            description: '使用右侧面板的控制选项调整视图效果。您可以开启<strong>线框模式</strong>检查网格结构，启用<strong>自动旋转</strong>展示模型，调整<strong>背景颜色</strong>和<strong>材质颜色</strong>，显示<strong>网格</strong>和<strong>坐标轴</strong>辅助参考。',
            note: '线框模式特别适合检查模型是否有破面或拓扑问题。'
        },
        {
            title: '导出截图',
            description: '调整好视角后，点击<strong>"截图导出"</strong>按钮保存当前视角的高清截图。您可以选择PNG或JPG格式，还可以选择<strong>透明背景</strong>导出（方便放入PPT或文档）。截图只包含3D视图内容，不包含UI界面。',
            note: '截图功能非常适合用于产品展示、社交媒体分享或文档说明。'
        }
    ],

    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的STL/3MF模型预览工具。现在您可以随时随地在线查看3D模型，无需安装任何专业软件。',

    relatedToolsTitle: '您可能感兴趣的相关工具',
    relatedTools: [
        {
            name: 'STL转3MF工具',
            description: '将STL文件转换为3MF格式，支持颜色、材质等丰富信息，适合现代3D打印。',
            url: 'https://www.ufreetools.com/tool/stl-to-3mf-converter'
        },
        {
            name: 'STL转OBJ工具',
            description: '将STL文件转换为OBJ格式，支持法线计算，适合游戏开发和3D建模。',
            url: 'https://www.ufreetools.com/tool/stl-to-obj-converter'
        },
        {
            name: '图片转PNG工具',
            description: '将JPG、WebP等多种格式转换为PNG格式，支持透明背景和批量处理。',
            url: 'https://www.ufreetools.com/tool/image-to-png'
        },
        {
            name: '图片压缩器',
            description: '在不明显损失质量的情况下减小图像文件大小，支持多种格式。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        }
    ],

    referencesTitle: '参考资源',
    references: [
        {
            name: 'STL文件格式说明',
            description: '了解STL格式的历史和文件结构',
            url: 'https://en.wikipedia.org/wiki/STL_%28file_format%29'
        },
        {
            name: '3MF格式官方规范',
            description: '了解3MF格式的技术规范和文件结构',
            url: 'https://3mf.io/specification/'
        },
        {
            name: 'Three.js官方文档',
            description: '了解3D渲染引擎的技术细节',
            url: 'https://threejs.org/docs/'
        }
    ]
}