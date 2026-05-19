export default {
    title: 'STL转GLB工具：在线3D模型格式转换器使用指南',
    functionTitle: '什么是STL转GLB工具及其用途？',
    intro: '我们的<strong>STL转GLB工具</strong>是一款专业的在线3D模型格式转换应用，可以快速将STL（Stereo Lithography）文件转换为GLB（Binary glTF）格式。GLB是glTF的二进制版本，是一种高效的3D文件格式，广泛用于游戏开发、AR/VR应用、网页3D展示等场景。使用我们的<strong>在线STL转GLB转换器</strong>，您可以批量处理多个STL文件，设置模型单位，调整材质颜色，无需安装任何软件即可完成格式转换。',

    useCasesTitle: 'STL转GLB的常见应用场景',
    useCases: [
        '将STL格式的3D打印模型转换为GLB格式，用于游戏开发或AR/VR应用',
        '批量转换多个STL文件为GLB格式，提高3D内容制作效率',
        '为网页3D展示准备GLB格式的模型文件',
        '将STL文件转换为GLB格式，以便在Unity、Unreal Engine等游戏引擎中使用',
        '为AR/VR应用准备优化的3D模型资源',
        '将STL模型转换为GLB格式，支持材质和纹理信息',
        '为移动端应用准备轻量级的3D模型格式',
        '将STL模型迁移到GLB格式，便于在不同平台间共享3D内容'
    ],

    tipTitle: '专业提示：',
    tipContent: 'GLB格式支持材质、纹理、动画等丰富信息，文件体积小，加载速度快。STL文件只包含几何信息，转换为GLB时可以添加材质颜色。对于Web应用，GLB是首选格式。',

    conclusion: '<strong>STL转GLB格式转换</strong>工具对游戏开发者、AR/VR设计师、网页开发者以及需要处理3D模型的用户特别有用。通过使用我们的在线STL转GLB转换器，您可以快速将3D打印模型转换为适合游戏和AR/VR应用的格式，支持材质信息，优化文件大小。我们的工具支持批量处理，提供材质颜色设置功能，所有处理都在浏览器本地完成，确保您的模型数据隐私和安全。',

    faqTitle: '常见问题解答',
    faqs: [
        {
            question: 'STL转GLB工具支持哪些STL格式？',
            answer: '我们的<strong>在线STL转GLB转换器</strong>支持两种主要的STL文件格式：二进制STL和ASCII STL。工具会自动检测文件格式并进行相应处理。无论是从CAD软件导出的STL文件，还是从3D模型库下载的STL文件，都可以顺利转换为GLB格式。'
        },
        {
            question: 'GLB格式相比STL有什么优势？',
            answer: 'GLB格式相比STL有多个优势：(1) 支持材质、纹理和动画信息；(2) 使用二进制格式，文件体积小；(3) 加载速度快，适合实时渲染；(4) 被主流游戏引擎和AR/VR平台支持；(5) 支持PBR（基于物理的渲染）材质。对于游戏和AR/VR应用，GLB是更推荐的格式。'
        },
        {
            question: '转换时如何设置材质颜色？',
            answer: '我们的<strong>STL转GLB工具</strong>提供了材质颜色设置功能。您可以选择预设颜色或自定义RGB颜色值。设置的颜色将应用到整个模型表面。如果需要更复杂的材质效果，可以在导入GLB文件后使用3D软件进行进一步编辑。'
        },
        {
            question: '转换后的GLB文件可以在哪些软件中使用？',
            answer: 'GLB格式被主流游戏引擎和3D平台广泛支持，包括Unity、Unreal Engine、Blender、Three.js、Babylon.js等。转换后的GLB文件可以直接导入这些软件进行进一步编辑、渲染或集成到游戏和AR/VR应用中。'
        },
        {
            question: '转换过程是否安全？文件会上传到服务器吗？',
            answer: '完全安全！我们的工具采用纯前端技术，所有文件处理都在您的浏览器本地完成。您的STL文件不会上传到任何服务器，确保隐私和数据安全。您可以放心处理包含商业机密或个人设计的3D模型文件。'
        },
        {
            question: '转换后的GLB文件大小会变化吗？',
            answer: '通常会变化。GLB格式使用二进制编码和压缩技术，文件大小通常比STL小。对于简单模型，GLB文件可能比二进制STL稍大（因为包含材质信息）；对于复杂模型，GLB文件通常更小。具体大小取决于模型复杂度和材质设置。'
        },
        {
            question: 'GLB格式支持哪些3D特性？',
            answer: 'GLB格式支持多种3D特性：几何数据、PBR材质、纹理贴图、骨骼动画、变形目标、场景层次结构等。它基于glTF 2.0标准，是Web 3D和实时渲染的推荐格式。'
        }
    ],

    tutorialTitle: '如何使用STL转GLB工具',
    steps: [
        {
            title: '上传STL文件',
            description: '首先上传您想要转换为GLB格式的STL文件。您可以通过<strong>拖拽文件</strong>到上传区域，或<strong>点击浏览</strong>选择文件。我们的工具支持二进制和ASCII两种STL格式，您可以一次上传多个文件进行批量处理。',
            note: '支持同时上传多个STL文件，工具会自动识别格式并处理。'
        },
        {
            title: '设置转换参数',
            description: '在左侧控制面板中，设置<strong>模型名称</strong>（可选）和<strong>模型单位</strong>。选择<strong>材质颜色</strong>，您可以使用预设颜色或自定义RGB值。选择正确的单位非常重要，以确保模型尺寸准确。',
            note: '如果不确定单位，通常选择毫米（mm）是最安全的选择。'
        },
        {
            title: '转换为GLB格式',
            description: '设置完成后，点击<strong>"转换为GLB"</strong>按钮开始处理。工具会依次处理所有上传的STL文件，批量处理时会显示进度信息。转换过程包括解析STL数据、计算法线、生成GLB二进制数据。',
            note: '转换过程中请保持页面打开，大文件可能需要几秒钟时间。'
        },
        {
            title: '预览转换结果',
            description: '转换完成后，右侧输出区域会显示所有转换后的GLB文件信息。您可以查看<strong>文件大小对比</strong>、<strong>三角面数</strong>和<strong>顶点数</strong>等详细信息。这些信息有助于确认转换结果是否符合预期。',
            note: 'GLB文件通常比原始STL文件更小，适合实时渲染。'
        },
        {
            title: '下载GLB文件',
            description: '满意转换结果后，您可以点击每张文件下方的<strong>"下载GLB"</strong>按钮单独保存，或使用输出区域顶部的<strong>"批量下载 (ZIP)"</strong>按钮将所有转换后的GLB文件打包成一个ZIP文件一次性下载。下载的文件可以直接导入支持GLB的游戏引擎或3D软件使用。',
            note: '所有处理都在浏览器本地完成，确保您的3D模型数据隐私和安全。'
        }
    ],

    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的STL转GLB工具。现在您可以轻松将STL格式的3D打印模型转换为适合游戏开发和AR/VR应用的GLB格式，享受更小的文件体积和更丰富的功能。',

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