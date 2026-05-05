export default {
    title: 'STL转OBJ工具：在线3D打印格式转换器使用指南',
    functionTitle: '什么是STL转OBJ工具及其用途？',
    intro: '我们的<strong>STL转OBJ工具</strong>是一款专业的在线3D打印格式转换应用，可以快速将STL（Stereo Lithography）文件转换为OBJ（Wavefront Object）格式。OBJ是一种广泛使用的3D模型文件格式，支持顶点、法线、纹理坐标等丰富信息，被大多数3D建模软件和游戏引擎支持。使用我们的<strong>在线STL转OBJ转换器</strong>，您可以批量处理多个STL文件，设置模型单位，计算法线向量，无需安装任何软件即可完成格式转换。',

    useCasesTitle: 'STL转OBJ的常见应用场景',
    useCases: [
        '将STL格式的3D打印模型转换为OBJ格式，获得更广泛的软件兼容性',
        '批量转换多个STL文件为OBJ格式，提高3D建模工作流程效率',
        '为3D打印模型设置正确的单位（毫米、厘米、英寸等），避免尺寸错误',
        '将STL文件转换为OBJ格式，以便在游戏引擎（Unity、Unreal等）中使用',
        '计算模型法线向量，改善渲染效果和光照表现',
        '为3D建模软件准备标准化的OBJ格式文件',
        '将STL模型迁移到OBJ格式，便于在不同软件间交换数据',
        '为VR/AR应用准备OBJ格式的3D模型资源'
    ],

    tipTitle: '专业提示：',
    tipContent: 'OBJ格式支持法线和纹理坐标信息，转换时建议启用法线计算以获得更好的渲染效果。OBJ文件通常比STL稍大，但兼容性更广。对于需要纹理映射的模型，OBJ是更好的选择。',

    conclusion: '<strong>STL转OBJ格式转换</strong>工具对3D打印爱好者、游戏开发者、设计师、工程师以及需要处理大量3D模型的用户特别有用。通过使用我们的在线STL转OBJ转换器，您可以快速统一3D模型文件格式，提高软件兼容性，或满足特定平台对文件格式的要求。我们的工具支持批量处理，提供单位设置和法线计算功能，所有处理都在浏览器本地完成，确保您的模型数据隐私和安全。',

    faqTitle: '常见问题解答',
    faqs: [
        {
            question: 'STL转OBJ工具支持哪些STL格式？',
            answer: '我们的<strong>在线STL转OBJ转换器</strong>支持两种主要的STL文件格式：二进制STL和ASCII STL。工具会自动检测文件格式并进行相应处理。无论是从CAD软件导出的STL文件，还是从3D模型库下载的STL文件，都可以顺利转换为OBJ格式。'
        },
        {
            question: 'OBJ格式相比STL有什么优势？',
            answer: 'OBJ格式相比STL有多个优势：(1) 支持法线和纹理坐标信息；(2) 被几乎所有3D软件和游戏引擎支持；(3) 支持多边形面，不限于三角形；(4) 可以包含材质和纹理引用；(5) 文本格式，易于编辑和调试。对于游戏开发和复杂建模，OBJ是更推荐的格式。'
        },
        {
            question: '转换时如何选择正确的单位？',
            answer: '我们的<strong>STL转OBJ工具</strong>提供了四种常用单位：毫米、厘米、米和英寸。STL文件本身不包含单位信息，因此需要您根据原始模型的设计单位来选择。如果不确定，毫米是最常用的3D打印单位。选择错误的单位可能导致模型尺寸偏差。'
        },
        {
            question: '什么是法线计算？为什么需要它？',
            answer: '法线是垂直于模型表面的向量，用于计算光照和渲染效果。STL文件通常不包含法线信息，而OBJ格式支持法线数据。启用法线计算后，工具会自动为每个顶点计算平滑法线，使模型在渲染时具有更好的光照表现和更自然的外观。'
        },
        {
            question: '转换后的OBJ文件可以在哪些软件中使用？',
            answer: 'OBJ格式被主流3D软件广泛支持，包括Blender、Maya、3ds Max、ZBrush、Unity、Unreal Engine等。转换后的OBJ文件可以直接导入这些软件进行进一步编辑、渲染或游戏开发。OBJ是最通用的3D模型交换格式之一。'
        },
        {
            question: '转换过程是否安全？文件会上传到服务器吗？',
            answer: '完全安全！我们的工具采用纯前端技术，所有文件处理都在您的浏览器本地完成。您的STL文件不会上传到任何服务器，确保隐私和数据安全。您可以放心处理包含商业机密或个人设计的3D模型文件。'
        },
        {
            question: '转换后的OBJ文件大小会变化吗？',
            answer: '通常会略有变化。OBJ是文本格式，文件大小取决于模型复杂度。对于简单模型，OBJ文件可能比二进制STL稍大；对于复杂模型，由于OBJ支持更高效的数据组织，文件大小可能相近。启用法线计算会增加文件大小，但能显著改善渲染效果。'
        }
    ],

    tutorialTitle: '如何使用STL转OBJ工具',
    steps: [
        {
            title: '上传STL文件',
            description: '首先上传您想要转换为OBJ格式的STL文件。您可以通过<strong>拖拽文件</strong>到上传区域，或<strong>点击浏览</strong>选择文件。我们的工具支持二进制和ASCII两种STL格式，您可以一次上传多个文件进行批量处理。',
            note: '支持同时上传多个STL文件，工具会自动识别格式并处理。'
        },
        {
            title: '设置转换参数',
            description: '在左侧控制面板中，设置<strong>模型名称</strong>（可选）和<strong>模型单位</strong>。建议启用<strong>"计算法线"</strong>选项以获得更好的渲染效果。选择正确的单位非常重要，以确保模型尺寸准确。',
            note: '如果不确定单位，通常选择毫米（mm）是最安全的选择。'
        },
        {
            title: '转换为OBJ格式',
            description: '设置完成后，点击<strong>"转换为OBJ"</strong>按钮开始处理。工具会依次处理所有上传的STL文件，批量处理时会显示进度信息。转换过程包括解析STL数据、计算法线和生成OBJ文件结构。',
            note: '转换过程中请保持页面打开，大文件可能需要几秒钟时间。'
        },
        {
            title: '预览转换结果',
            description: '转换完成后，右侧输出区域会显示所有转换后的OBJ文件信息。您可以查看<strong>文件大小对比</strong>、<strong>三角面数</strong>和<strong>顶点数</strong>等详细信息。这些信息有助于确认转换结果是否符合预期。',
            note: 'OBJ文件包含详细的几何信息，便于后续编辑和处理。'
        },
        {
            title: '下载OBJ文件',
            description: '满意转换结果后，您可以点击每张文件下方的<strong>"下载OBJ"</strong>按钮单独保存，或使用输出区域顶部的<strong>"批量下载 (ZIP)"</strong>按钮将所有转换后的OBJ文件打包成一个ZIP文件一次性下载。下载的文件可以直接导入支持OBJ的3D软件使用。',
            note: '所有处理都在浏览器本地完成，确保您的3D模型数据隐私和安全。'
        }
    ],

    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的STL转OBJ工具。现在您可以轻松将STL格式的3D打印模型转换为通用的OBJ格式，享受更广泛的软件兼容性和更好的渲染效果。',

    relatedToolsTitle: '您可能感兴趣的相关工具',
    relatedTools: [
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