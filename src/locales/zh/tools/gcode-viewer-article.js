export default {
    title: 'GCode查看器工具：在线3D打印预览指南',
    functionTitle: '什么是GCode查看器工具及其用途？',
    intro: '我们的<strong>GCode查看器</strong>是一款专业的在线3D打印预览工具，可以快速加载和预览GCode格式的3D打印文件。无需安装任何软件，只需在浏览器中打开即可查看3D打印路径的各个角度。使用我们的<strong>在线GCode查看器</strong>，您可以旋转、缩放、平移查看打印路径，查看打印设置信息如层高、温度等，还可以逐层查看打印过程、调整显示设置、导出高清截图，是3D打印爱好者和设计师的必备工具。',

    useCasesTitle: 'GCode查看器的常见应用场景',
    useCases: [
        '在3D打印前预览GCode文件，检查打印路径是否正确、有无异常',
        '查看打印设置如层高、温度、打印速度等参数是否符合要求',
        '逐层查看打印过程，检查每一层的路径和填充情况',
        '使用路径可视化检查空驶路径和回抽设置是否合理',
        '为3D打印路径截图用于产品展示、社交媒体分享或文档说明',
        '在没有安装切片软件的情况下快速查看GCode文件',
        '批量预览多个GCode文件，快速筛选需要的打印文件',
        '向客户或团队成员展示3D打印路径设计，无需安装专业软件'
    ],

    tipTitle: '专业提示：',
    tipContent: '使用鼠标左键拖动可旋转视角，右键拖动可平移视图，滚轮可缩放。双击可自动将其居中显示。使用层控制滑块可以逐层查看打印过程，播放动画功能可以自动展示每一层的打印路径。',

    conclusion: '<strong>GCode查看器</strong>工具对3D打印爱好者、设计师、工程师以及需要查看3D打印文件的用户特别有用。通过使用我们的在线GCode查看器，您可以随时随地查看GCode格式的3D打印文件，无需安装任何专业软件。我们的工具支持多种视图控制、渲染设置和导出功能，所有处理都在浏览器本地完成，确保您的打印数据隐私和安全。',

    faqTitle: '常见问题解答',
    faqs: [
        {
            question: 'GCode查看器支持哪些文件格式？',
            answer: '我们的<strong>在线GCode查看器</strong>支持GCode格式的3D打印文件。GCode是3D打印机使用的标准指令格式，包含G0、G1等移动命令和打印设置信息。工具会自动解析GCode文件并提取打印路径和设置信息。'
        },
        {
            question: '如何旋转和缩放3D打印路径？',
            answer: '使用鼠标左键拖动可以旋转视角，查看打印路径的不同角度。使用鼠标滚轮可以缩放视图，放大查看细节或缩小查看整体。使用鼠标右键拖动可以平移视图。双击可以自动将打印路径居中并重置视角。这些操作让您能够全方位查看3D打印路径。'
        },
        {
            question: 'GCode信息面板显示哪些信息？',
            answer: 'GCode信息面板显示以下关键数据：(1) 总行数 - GCode文件的总行数；(2) 总命令数 - 解析出的移动命令总数；(3) 文件大小 - 原始文件的大小；(4) 预计时间 - 根据路径计算的预计打印时间；(5) 打印尺寸 - XYZ三轴的打印尺寸；(6) 打印设置 - 包括层高、喷嘴温度、热床温度等。这些信息有助于您了解打印文件的基本情况。'
        },
        {
            question: '什么是层控制功能？有什么用途？',
            answer: '层控制功能允许您逐层查看3D打印的路径。使用层控制滑块可以选择显示到某一层的所有路径，上一层/下一层按钮可以逐层切换，播放动画功能可以自动展示每一层的打印过程。这对于检查每一层的打印路径、填充情况和支撑结构非常有用，可以在打印前发现潜在问题。'
        },
        {
            question: '可以导出3D打印路径的截图吗？',
            answer: '可以！我们的工具支持一键导出当前视角的高清截图。您可以选择PNG或JPG格式，还可以选择是否导出透明背景的截图（方便放入PPT或文档）。截图功能会捕获当前3D视图的内容，不包含UI界面，非常适合用于产品展示或社交媒体分享。'
        },
        {
            question: '预览过程是否安全？文件会上传到服务器吗？',
            answer: '完全安全！我们的工具采用纯前端技术，所有文件处理都在您的浏览器本地完成。您的GCode文件不会上传到任何服务器，确保隐私和数据安全。您可以放心预览包含商业机密或个人设计的3D打印文件。'
        },
        {
            question: '支持多大的GCode文件？',
            answer: '我们的工具支持各种大小的GCode文件，从几KB的小文件到几百MB的大型打印文件都可以处理。对于大型文件，首次加载可能需要几秒钟时间，因为需要解析所有打印命令。工具会在本地浏览器中进行所有处理，不会消耗服务器资源。'
        }
    ],

    tutorialTitle: '使用教程',
    steps: [
        {
            title: '上传GCode文件',
            description: '点击上传区域或直接拖放GCode文件到指定区域。支持批量上传多个文件。',
            note: '支持标准的GCode格式文件，包括各种切片软件生成的GCode文件。'
        },
        {
            title: '查看打印路径',
            description: '上传后自动显示3D打印路径。使用鼠标左键拖动旋转视角，滚轮缩放，右键拖动平移。',
            note: '绿色线条表示正常打印路径，红色线条表示回抽路径。'
        },
        {
            title: '查看打印信息',
            description: '在左侧面板查看GCode信息，包括打印尺寸、层高、温度等设置。',
            note: '这些信息有助于确认打印参数是否符合要求。'
        },
        {
            title: '逐层查看',
            description: '使用层控制功能逐层查看打印过程。可以播放动画自动展示每一层。',
            note: '逐层查看有助于发现每一层的潜在问题。'
        },
        {
            title: '调整设置并导出',
            description: '根据需要调整显示设置，如颜色、线条粗细等。然后点击截图按钮导出图片。',
            note: '可以选择PNG或JPG格式，支持透明背景导出。'
        }
    ],

    successTitle: '成功！',
    successContent: '您已成功掌握GCode查看器的使用方法。现在可以开始使用该工具来预览和分析您的3D打印文件了。',

    relatedToolsTitle: '相关工具',
    relatedTools: [
        {
            name: 'STL/3MF模型预览',
            description: '在线预览STL和3MF格式的3D模型文件',
            url: '/tools/stl-3mf-model-viewer'
        },
        {
            name: 'STL转3MF转换器',
            description: '将STL文件转换为3MF格式',
            url: '/tools/stl-to-3mf-converter'
        },
        {
            name: 'STL转OBJ转换器',
            description: '将STL文件转换为OBJ格式',
            url: '/tools/stl-to-obj-converter'
        },
        {
            name: 'OBJ转STL转换器',
            description: '将OBJ文件转换为STL格式',
            url: '/tools/obj-to-stl-converter'
        }
    ],

    referencesTitle: '参考资源',
    references: [
        {
            name: 'GCode基础教程',
            description: '了解GCode的基本语法和常用命令',
            url: 'https://en.wikipedia.org/wiki/G-code'
        },
        {
            name: '3D打印切片软件比较',
            description: '了解不同切片软件的特点和使用方法',
            url: 'https://all3dp.com/1/best-3d-slicer-software/'
        },
        {
            name: '3D打印故障排除指南',
            description: '解决常见的3D打印问题',
            url: 'https://www.simplify3d.com/resources/print-quality-troubleshooting/'
        }
    ]
};