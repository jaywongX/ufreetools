export default {
    title: 'OBJ转STL工具：在线3D打印格式转换器使用指南',
    functionTitle: '什么是OBJ转STL工具及其用途？',
    intro: '我们的<strong>OBJ转STL工具</strong>是一款专业的在线3D打印格式转换应用，可以快速将OBJ（Wavefront Object）文件转换为STL（Stereo Lithography）格式。STL是3D打印行业最广泛使用的文件格式，被几乎所有3D打印机和切片软件支持。使用我们的<strong>在线OBJ转STL转换器</strong>，您可以批量处理多个OBJ文件，设置模型单位，选择输出格式（二进制或ASCII），无需安装任何软件即可完成格式转换。',

    useCasesTitle: 'OBJ转STL的常见应用场景',
    useCases: [
        '将OBJ格式的3D模型转换为STL格式，准备3D打印',
        '批量转换多个OBJ文件为STL格式，提高3D打印工作流程效率',
        '为3D打印模型设置正确的单位（毫米、厘米、英寸等），避免尺寸错误',
        '将OBJ文件转换为STL格式，以便在支持STL的切片软件中使用',
        '优化3D打印文件格式，STL是3D打印行业的标准格式',
        '为3D打印服务提供商准备标准化的STL格式文件',
        '将OBJ模型迁移到STL格式，便于在不同3D打印系统间交换数据',
        '为3D打印准备文件，STL格式兼容性最广'
    ],

    tipTitle: '专业提示：',
    tipContent: 'STL格式分为二进制和ASCII两种，二进制STL文件体积更小，建议优先选择。OBJ文件包含法线和纹理信息，转换为STL时会自动处理这些数据。对于3D打印，建议使用毫米为单位。',

    conclusion: '<strong>OBJ转STL格式转换</strong>工具对3D打印爱好者、设计师、工程师以及需要处理大量3D模型的用户特别有用。通过使用我们的在线OBJ转STL转换器，您可以快速将通用3D模型格式转换为3D打印专用格式，优化文件大小，提高打印兼容性，或满足特定3D打印平台对文件格式的要求。我们的工具支持批量处理，提供单位设置和格式选择功能，所有处理都在浏览器本地完成，确保您的模型数据隐私和安全。',

    faqTitle: '常见问题解答',
    faqs: [
        {
            question: 'OBJ转STL工具支持哪些OBJ格式？',
            answer: '我们的<strong>在线OBJ转STL转换器</strong>支持标准的OBJ（Wavefront Object）文件格式。工具会自动解析OBJ文件中的顶点、法线和面数据，并将其转换为STL格式。无论是从Blender、Maya、3ds Max等3D建模软件导出的OBJ文件，还是从3D模型库下载的OBJ文件，都可以顺利转换为STL格式。'
        },
        {
            question: 'STL格式相比OBJ有什么优势？',
            answer: 'STL格式在3D打印领域有多个优势：(1) 被几乎所有3D打印机和切片软件支持；(2) 文件结构简单，处理速度快；(3) 二进制格式体积小，传输效率高；(4) 是3D打印行业的事实标准。对于3D打印应用，STL是首选格式。'
        },
        {
            question: '转换时如何选择正确的单位？',
            answer: '我们的<strong>OBJ转STL工具</strong>提供了四种常用单位：毫米、厘米、米和英寸。OBJ文件本身可能包含单位信息，但STL文件不包含单位信息。建议您根据3D打印机的要求选择单位，毫米是最常用的3D打印单位。选择错误的单位可能导致打印尺寸偏差。'
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
            answer: '完全安全！我们的工具采用纯前端技术，所有文件处理都在您的浏览器本地完成。您的OBJ文件不会上传到任何服务器，确保隐私和数据安全。您可以放心处理包含商业机密或个人设计的3D模型文件。'
        },
        {
            question: '转换后的STL文件大小会变化吗？',
            answer: '通常会变化。STL格式使用简单的三角面片表示，文件大小取决于三角面数量。对于复杂模型，STL文件可能比OBJ稍大；对于简单模型，STL文件可能更小。二进制STL通常比ASCII STL小30-50%。'
        }
    ],

    tutorialTitle: '如何使用OBJ转STL工具',
    steps: [
        {
            title: '上传OBJ文件',
            description: '首先上传您想要转换为STL格式的OBJ文件。您可以通过<strong>拖拽文件</strong>到上传区域，或<strong>点击浏览</strong>选择文件。我们的工具支持标准的OBJ文件格式，您可以一次上传多个文件进行批量处理。',
            note: '支持同时上传多个OBJ文件，工具会自动解析并处理。'
        },
        {
            title: '设置转换参数',
            description: '在左侧控制面板中，设置<strong>模型名称</strong>（可选）和<strong>模型单位</strong>。选择<strong>输出格式</strong>（二进制STL或ASCII STL），建议选择二进制格式以获得更小的文件体积。选择正确的单位非常重要，以确保打印尺寸准确。',
            note: '如果不确定单位，通常选择毫米（mm）是最安全的选择。'
        },
        {
            title: '转换为STL格式',
            description: '设置完成后，点击<strong>"转换为STL"</strong>按钮开始处理。工具会依次处理所有上传的OBJ文件，批量处理时会显示进度信息。转换过程包括解析OBJ数据、处理顶点和法线、生成STL文件结构。',
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
    successContent: '您已成功学习如何使用我们的OBJ转STL工具。现在您可以轻松将OBJ格式的3D模型转换为3D打印专用的STL格式，享受更广泛的3D打印机兼容性和优化的文件体积。',

    relatedToolsTitle: '您可能感兴趣的相关工具',
    relatedTools: [
        {
            name: 'STL转OBJ工具',
            description: '将STL文件转换为OBJ格式，支持法线计算和纹理坐标，适合游戏开发和复杂建模。',
            url: 'https://www.ufreetools.com/tool/stl-to-obj-converter'
        },
        {
            name: 'STL转3MF工具',
            description: '将STL文件转换为3MF格式，支持颜色、材质等丰富信息，适合现代3D打印。',
            url: 'https://www.ufreetools.com/tool/stl-to-3mf-converter'
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
            name: 'OBJ文件格式规范',
            description: '了解OBJ格式的技术规范和文件结构',
            url: 'https://en.wikipedia.org/wiki/Wavefront_.obj_file'
        },
        {
            name: 'STL文件格式说明',
            description: '了解STL格式的历史和文件结构',
            url: 'https://en.wikipedia.org/wiki/STL_%28file_format%29'
        },
        {
            name: '3D打印文件格式对比',
            description: 'STL、OBJ、3MF等格式的特点和适用场景',
            url: 'https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/'
        }
    ]
}