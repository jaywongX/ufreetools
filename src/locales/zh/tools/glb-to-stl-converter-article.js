export default {
    title: 'GLB转STL工具：在线3D模型格式转换器使用指南',
    functionTitle: '什么是GLB转STL工具及其用途？',
    intro: '我们的<strong>GLB转STL工具</strong>是一款专业的在线3D模型格式转换应用，可以快速将GLB（Binary glTF）文件转换为STL（Stereo Lithography）格式。GLB是glTF的二进制版本，是一种高效的3D文件格式，广泛用于游戏开发、AR/VR应用、网页3D展示等场景。STL是3D打印行业最广泛使用的文件格式。使用我们的<strong>在线GLB转STL转换器</strong>，您可以批量处理多个GLB文件，设置模型单位，选择输出格式（二进制或ASCII），无需安装任何软件即可完成格式转换。',

    useCasesTitle: 'GLB转STL的常见应用场景',
    useCases: [
        '将GLB格式的游戏模型转换为STL格式，准备3D打印',
        '批量转换多个GLB文件为STL格式，提高3D打印工作流程效率',
        '将GLB文件转换为STL格式，以便在3D打印机上制作实体模型',
        '从GLB文件中提取几何信息，转换为简单的STL格式',
        '为3D打印服务提供商准备标准化的STL格式文件',
        '将GLB模型转换为STL格式，便于在不同系统间交换数据',
        '优化3D打印文件格式，STL格式兼容性最广',
        '为3D打印准备文件，STL格式支持所有3D打印机'
    ],

    tipTitle: '专业提示：',
    tipContent: 'GLB格式支持材质、纹理、动画等丰富信息，转换为STL时这些信息会丢失，只保留几何形状。如果需要保留材质信息，请考虑使用其他格式。对于3D打印，建议使用毫米为单位。',

    conclusion: '<strong>GLB转STL格式转换</strong>工具对3D打印爱好者、游戏开发者、设计师以及需要将数字模型实体化的用户特别有用。通过使用我们的在线GLB转STL转换器，您可以快速将游戏和AR/VR应用中的3D模型转换为3D打印专用格式。我们的工具支持批量处理，提供格式选择功能，所有处理都在浏览器本地完成，确保您的模型数据隐私和安全。',

    faqTitle: '常见问题解答',
    faqs: [
        {
            question: 'GLB转STL工具支持哪些GLB格式？',
            answer: '我们的<strong>在线GLB转STL转换器</strong>支持标准的GLB（Binary glTF）文件格式，包括glTF 1.0和glTF 2.0版本。工具会解析GLB文件中的几何数据，包括顶点、法线和面信息，并将其转换为STL格式。'
        },
        {
            question: 'STL格式相比GLB有什么优势？',
            answer: 'STL格式在3D打印领域的优势包括：(1) 兼容性最广，支持所有3D打印机和切片软件；(2) 文件结构简单，处理速度快；(3) 是3D打印行业的传统标准；(4) 专注于几何信息，没有复杂特性。对于3D打印应用，STL是首选格式。'
        },
        {
            question: '转换时会丢失哪些信息？',
            answer: 'GLB格式支持材质、纹理、动画、骨骼等丰富信息，而STL格式只包含几何信息（顶点和面）。转换时，材质、纹理、动画等信息会丢失，只保留模型的几何形状。如果这些信息很重要，请考虑使用其他转换方式。'
        },
        {
            question: '二进制STL和ASCII STL有什么区别？',
            answer: '二进制STL使用二进制编码，文件体积小，处理速度快，是3D打印的首选格式。ASCII STL使用文本格式，文件体积大，但便于人工阅读和编辑。我们的工具支持生成两种格式，建议大多数情况下选择二进制STL以获得更好的性能。'
        },
        {
            question: '转换后的STL文件可以在哪些软件中使用？',
            answer: 'STL格式被主流3D打印切片软件广泛支持，包括Cura、PrusaSlicer、Simplify3D、3D Builder（Windows）等。转换后的STL文件可以直接导入这些软件进行切片和打印准备。STL是3D打印行业最通用的格式。'
        },
        {
            question: '转换过程是否安全？文件会上传到服务器吗？',
            answer: '完全安全！我们的工具采用纯前端技术，所有文件处理都在您的浏览器本地完成。您的GLB文件不会上传到任何服务器，确保隐私和数据安全。您可以放心处理包含商业机密或个人设计的3D模型文件。'
        },
        {
            question: '转换后的STL文件大小会变化吗？',
            answer: '通常会变化。GLB格式使用二进制编码和压缩技术，文件体积通常比STL小。转换为STL后，文件大小取决于模型复杂度和三角面数量。二进制STL通常比ASCII STL小30-50%。'
        }
    ],

    tutorialTitle: '如何使用GLB转STL工具',
    steps: [
        {
            title: '上传GLB文件',
            description: '首先上传您想要转换为STL格式的GLB文件。您可以通过<strong>拖拽文件</strong>到上传区域，或<strong>点击浏览</strong>选择文件。我们的工具支持标准的GLB文件格式，您可以一次上传多个文件进行批量处理。',
            note: '支持同时上传多个GLB文件，工具会自动解析并处理。'
        },
        {
            title: '设置转换参数',
            description: '在左侧控制面板中，设置<strong>模型名称</strong>（可选）和<strong>输出格式</strong>（二进制STL或ASCII STL）。建议选择二进制格式以获得更小的文件体积。',
            note: '如果不确定格式，通常选择二进制STL是最安全的选择。'
        },
        {
            title: '转换为STL格式',
            description: '设置完成后，点击<strong>"转换为STL"</strong>按钮开始处理。工具会依次处理所有上传的GLB文件，批量处理时会显示进度信息。转换过程包括解析GLB数据、提取几何信息、生成STL文件结构。',
            note: '转换过程中请保持页面打开，大文件可能需要几秒钟时间。'
        },
        {
            title: '预览转换结果',
            description: '转换完成后，右侧输出区域会显示所有转换后的STL文件信息。您可以查看<strong>文件大小对比</strong>、<strong>三角面数</strong>和<strong>顶点数</strong>等详细信息。这些信息有助于确认转换结果是否符合预期。',
            note: 'STL文件使用三角面片表示模型，适合3D打印。'
        },
        {
            title: '下载STL文件',
            description: '满意转换结果后，您可以点击每张文件下方的<strong>"下载STL"</strong>按钮单独保存，或使用输出区域顶部的<strong>"批量下载 (ZIP)"</strong>按钮将所有转换后的STL文件打包成一个ZIP文件一次性下载。下载的文件可以直接导入支持STL的切片软件使用。',
            note: '所有处理都在浏览器本地完成，确保您的3D模型数据隐私和安全。'
        }
    ],

    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的GLB转STL工具。现在您可以轻松将GLB格式的3D游戏模型转换为3D打印专用的STL格式，实现数字模型到实体的转换。',

    relatedToolsTitle: '您可能感兴趣的相关工具',
    relatedTools: [
        {
            name: 'STL转GLB工具',
            description: '将STL文件转换为GLB格式，支持材质颜色设置，适合游戏开发和AR/VR应用。',
            url: 'https://www.ufreetools.com/tool/stl-to-glb-converter'
        },
        {
            name: 'STL转OBJ工具',
            description: '将STL文件转换为OBJ格式，支持法线计算和纹理坐标，适合游戏开发和复杂建模。',
            url: 'https://www.ufreetools.com/tool/stl-to-obj-converter'
        },
        {
            name: '图片转PNG工具',
            description: '将JPG、WebP等多种格式转换为PNG格式，支持透明背景和批量处理。',
            url: 'https://www.ufreetools.com/tool/image-to-png'
        },
        {
            name: '图片转JPG工具',
            description: '将PNG、WebP等多种格式转换为JPG格式，适合照片和复杂图像。',
            url: 'https://www.ufreetools.com/tool/image-to-jpg'
        }
    ],

    referencesTitle: '参考资源',
    references: [
        {
            name: 'glTF格式官方规范',
            description: '了解glTF/GLB格式的技术规范和文件结构',
            url: 'https://www.khronos.org/gltf/'
        },
        {
            name: 'STL文件格式说明',
            description: '了解STL格式的历史和文件结构',
            url: 'https://en.wikipedia.org/wiki/STL_%28file_format%29'
        },
        {
            name: '3D文件格式对比',
            description: 'STL、OBJ、glTF等格式的特点和适用场景',
            url: 'https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/'
        }
    ]
}