export default {
    title: 'STL转3MF工具：在线3D打印格式转换器使用指南',
    functionTitle: '什么是STL转3MF工具及其用途？',
    intro: '我们的<strong>STL转3MF工具</strong>是一款专业的在线3D打印格式转换应用，可以快速将STL（Stereo Lithography）文件转换为3MF（3D Manufacturing Format）格式。3MF是由3MF联盟开发的新一代3D打印文件格式，相比传统STL格式，它支持颜色、材质、纹理等丰富信息，文件体积更小，数据完整性更好。使用我们的<strong>在线STL转3MF转换器</strong>，您可以批量处理多个STL文件，设置模型单位，甚至将多个模型合并为单个3MF文件，无需安装任何软件即可完成格式转换。',

    useCasesTitle: 'STL转3MF的常见应用场景',
    useCases: [
        '将STL格式的3D打印模型转换为3MF格式，获得更好的打印兼容性',
        '批量转换多个STL文件为3MF格式，提高3D打印工作流程效率',
        '将多个STL模型合并为单个3MF文件，方便统一管理和打印',
        '为3D打印模型设置正确的单位（毫米、厘米、英寸等），避免尺寸错误',
        '将STL文件转换为3MF格式，以便在支持3MF的切片软件中使用',
        '优化3D打印文件大小，3MF格式通常比STL更紧凑',
        '为3D打印服务提供商准备标准化的3MF格式文件',
        '将旧的STL模型迁移到更现代的3MF格式，便于长期存档和管理'
    ],

    tipTitle: '专业提示：',
    tipContent: '3MF格式使用ZIP压缩，文件体积通常比STL小30-50%。3MF支持多种单位系统，转换时请确保选择正确的单位以避免打印尺寸问题。对于需要颜色和材质信息的模型，3MF是更好的选择。',

    conclusion: '<strong>STL转3MF格式转换</strong>工具对3D打印爱好者、设计师、工程师以及需要处理大量3D模型的用户特别有用。通过使用我们的在线STL转3MF转换器，您可以快速统一3D打印文件格式，优化文件大小，提高打印兼容性，或满足特定3D打印平台对文件格式的要求。我们的工具支持批量处理，提供单位设置和文件合并功能，所有处理都在浏览器本地完成，确保您的模型数据隐私和安全。',

    faqTitle: '常见问题解答',
    faqs: [
        {
            question: 'STL转3MF工具支持哪些STL格式？',
            answer: '我们的<strong>在线STL转3MF转换器</strong>支持两种主要的STL文件格式：二进制STL和ASCII STL。工具会自动检测文件格式并进行相应处理。无论是从CAD软件导出的STL文件，还是从3D模型库下载的STL文件，都可以顺利转换为3MF格式。'
        },
        {
            question: '3MF格式相比STL有什么优势？',
            answer: '3MF格式相比STL有多个优势：(1) 支持颜色、材质和纹理信息；(2) 使用ZIP压缩，文件更小；(3) 数据完整性更好，不会出现STL常见的网格错误；(4) 支持多种单位系统；(5) 可以包含多个对象和打印参数。对于现代3D打印工作流程，3MF是更推荐的格式。'
        },
        {
            question: '转换时如何选择正确的单位？',
            answer: '我们的<strong>STL转3MF工具</strong>提供了四种常用单位：毫米、厘米、米和英寸。STL文件本身不包含单位信息，因此需要您根据原始模型的设计单位来选择。如果不确定，毫米是最常用的3D打印单位。选择错误的单位可能导致打印尺寸偏差。'
        },
        {
            question: '可以将多个STL文件合并为一个3MF文件吗？',
            answer: '可以！我们的工具支持将多个STL文件合并为单个3MF文件。勾选"合并所有STL为单个3MF文件"选项后，工具会自动将所有上传的STL模型合并到一个3MF文件中。每个模型会自动偏移以避免重叠，方便您在切片软件中统一处理。'
        },
        {
            question: '转换后的3MF文件可以在哪些软件中使用？',
            answer: '3MF格式被主流3D打印切片软件广泛支持，包括Cura、PrusaSlicer、Simplify3D、3D Builder（Windows）等。转换后的3MF文件可以直接导入这些软件进行切片和打印准备。越来越多的3D打印服务提供商也开始支持3MF格式。'
        },
        {
            question: '转换过程是否安全？文件会上传到服务器吗？',
            answer: '完全安全！我们的工具采用纯前端技术，所有文件处理都在您的浏览器本地完成。您的STL文件不会上传到任何服务器，确保隐私和数据安全。您可以放心处理包含商业机密或个人设计的3D模型文件。'
        },
        {
            question: '转换后的3MF文件大小会变化吗？',
            answer: '通常会变化。3MF格式使用ZIP压缩，文件大小通常比STL小30-50%。对于二进制STL文件，压缩效果可能更明显。对于ASCII STL文件，由于其本身是文本格式，压缩效果会更显著。具体的文件大小取决于模型的复杂度和三角面数量。'
        }
    ],

    tutorialTitle: '如何使用STL转3MF工具',
    steps: [
        {
            title: '上传STL文件',
            description: '首先上传您想要转换为3MF格式的STL文件。您可以通过<strong>拖拽文件</strong>到上传区域，或<strong>点击浏览</strong>选择文件。我们的工具支持二进制和ASCII两种STL格式，您可以一次上传多个文件进行批量处理。',
            note: '支持同时上传多个STL文件，工具会自动识别格式并处理。'
        },
        {
            title: '设置转换参数',
            description: '在左侧控制面板中，设置<strong>模型名称</strong>（可选）和<strong>模型单位</strong>。如果需要将多个STL合并为一个3MF文件，勾选"合并所有STL为单个3MF文件"选项。选择正确的单位非常重要，以确保打印尺寸准确。',
            note: '如果不确定单位，通常选择毫米（mm）是最安全的选择。'
        },
        {
            title: '转换为3MF格式',
            description: '设置完成后，点击<strong>"转换为3MF"</strong>按钮开始处理。工具会依次处理所有上传的STL文件，批量处理时会显示进度信息。转换过程包括解析STL数据、优化顶点和生成3MF文件结构。',
            note: '转换过程中请保持页面打开，大文件可能需要几秒钟时间。'
        },
        {
            title: '预览转换结果',
            description: '转换完成后，右侧输出区域会显示所有转换后的3MF文件信息。您可以查看<strong>文件大小对比</strong>、<strong>三角面数</strong>和<strong>顶点数</strong>等详细信息。这些信息有助于确认转换结果是否符合预期。',
            note: '3MF文件通常比原始STL文件更小，这是因为使用了ZIP压缩。'
        },
        {
            title: '下载3MF文件',
            description: '满意转换结果后，您可以点击每张文件下方的<strong>"下载3MF"</strong>按钮单独保存，或使用输出区域顶部的<strong>"批量下载 (ZIP)"</strong>按钮将所有转换后的3MF文件打包成一个ZIP文件一次性下载。下载的文件可以直接导入支持3MF的切片软件使用。',
            note: '所有处理都在浏览器本地完成，确保您的3D模型数据隐私和安全。'
        }
    ],

    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的STL转3MF工具。现在您可以轻松将STL格式的3D打印模型转换为更现代的3MF格式，享受更好的打印兼容性和更小的文件体积。',

    relatedToolsTitle: '您可能感兴趣的相关工具',
    relatedTools: [
        {
            name: '图片转PNG工具',
            description: '将JPG、WebP等多种格式转换为PNG格式，支持透明背景和批量处理。',
            url: 'https://www.ufreetools.com/tool/image-to-png'
        },
        {
            name: '图片转JPG工具',
            description: '将PNG、WebP等多种格式转换为JPG格式，适合照片和复杂图像。',
            url: 'https://www.ufreetools.com/tool/image-to-jpg'
        },
        {
            name: '图片压缩器',
            description: '在不明显损失质量的情况下减小图像文件大小，支持多种格式。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: '图片调整器',
            description: '将图像调整为特定尺寸或按百分比缩放，支持批量处理。',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        }
    ],

    referencesTitle: '参考资源',
    references: [
        {
            name: '3MF格式官方规范',
            description: '了解3MF格式的技术规范和文件结构',
            url: 'https://3mf.io/specification/'
        },
        {
            name: 'STL文件格式说明',
            description: '了解STL格式的历史和文件结构',
            url: 'https://en.wikipedia.org/wiki/STL_%28file_format%29'
        },
        {
            name: '3D打印文件格式对比',
            description: 'STL、3MF、OBJ等格式的特点和适用场景',
            url: 'https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/'
        }
    ]
}
