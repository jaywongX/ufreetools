export default {
    title: '图片转ICO图标工具：在线多尺寸ICO图标生成器使用全指南',
    functionTitle: '什么是图片转ICO图标工具，它能帮你解决什么问题？',
    intro: '我们的<strong>图片转ICO图标工具</strong>是一款纯前端、开源的在线ICO图标生成器，可以把PNG、JPG、WEBP等常见图片一键转换为多尺寸ICO图标包。工具会基于HTML5 Canvas对图片进行高质量缩放与优化，然后生成同时包含16×16、32×32、48×48、64×64、128×128、256×256等尺寸的标准ICO文件，非常适合作为<strong>网站favicon图标</strong>、<strong>Windows程序图标</strong>与<strong>文件夹ICO图标</strong>使用。',

    useCasesTitle: '图片转ICO图标工具的典型应用场景',
    useCases: [
        '为网站生成favicon.ico图标，使网站在浏览器标签和收藏夹中清晰展示品牌标识',
        '为Windows桌面程序和安装包生成多尺寸ICO图标，适配不同DPI和显示缩放',
        '为资源管理器中的文件夹自定义ICO图标，快速区分项目与文档类型',
        '将品牌Logo批量转换为标准ICO图标，用于内部系统、运维工具或测试环境',
        '为Electron、Tauri等桌面应用构建流程生成所需ICO图标资源',
        '为开发者提供统一的图标输出，避免手动处理多尺寸PNG和ICO打包',
        '将设计师提供的高分辨率PNG图标转换为网站favicon和桌面ICO图标',
        '在不依赖后端服务的前提下，本地安全地完成图片转ICO图标的整个流程'
    ],

    tipTitle: '专业小贴士：',
    tipContent: '在使用图片转ICO图标工具时，建议上传方形、高分辨率的PNG透明图标（如512×512或1024×1024），这样生成出来的多尺寸ICO图标在16×16和32×32等小尺寸下也能保持清晰锐利。',

    conclusion: '<strong>图片转ICO图标工具</strong>非常适合前端开发者、独立开发者、网站站长和设计师快速生成图标资源。通过在线图片转ICO图标工具，你可以在浏览器本地完成多尺寸图标生成，避免安装复杂的桌面软件，同时保证网站favicon图标和Windows ICO图标在各类设备上都能清晰呈现。',

    faqTitle: '图片转ICO图标工具常见问题解答',
    faqs: [
        {
            question: '图片转ICO图标工具支持哪些输入格式？',
            answer: '我们的<strong>图片转ICO图标工具</strong>支持PNG、JPG、JPEG和WEBP等常见图片格式，其中推荐使用带透明通道的PNG图片进行在线图片转ICO图标操作，这样生成的ICO图标边缘更平滑、背景更自然。'
        },
        {
            question: '在线图片转ICO图标工具能生成哪些尺寸的ICO？',
            answer: '默认情况下，<strong>在线图片转ICO图标工具</strong>会生成包含16×16、32×32、48×48、64×64、128×128、256×256多种尺寸的ICO图标，你也可以根据需求勾选或关闭部分尺寸，灵活定制网站favicon图标和Windows多尺寸ICO图标包。'
        },
        {
            question: '使用图片转ICO图标工具生成的ICO文件可以直接作为网站favicon吗？',
            answer: '是的，使用<strong>图片转ICO图标工具</strong>生成的ICO文件可以直接命名为favicon.ico并放置在网站根目录，或通过HTML &lt;link rel="icon"&gt; 标签引用，浏览器会自动从多尺寸ICO图标包中选择合适的尺寸展示网站favicon图标。'
        },
        {
            question: '在线图片转ICO图标工具是否完全在浏览器本地运行？',
            answer: '我们的<strong>在线图片转ICO图标工具</strong>是纯前端实现，所有图片转ICO图标的处理过程均在浏览器本地完成，不会上传到服务器，因此适合对隐私与安全要求较高的图标制作场景。'
        },
        {
            question: '图片转ICO图标工具生成的ICO是否适配高分辨率和高DPI屏幕？',
            answer: '当你在<strong>图片转ICO图标工具</strong>中勾选64×64、128×128、256×256等尺寸时，生成的多尺寸ICO图标会同时包含适配高DPI和4K屏幕的图标资源，从而让网站favicon和Windows ICO图标在高分屏上保持清晰细腻。'
        }
    ],

    tutorialTitle: '如何使用在线图片转ICO图标工具（图文教程）',
    steps: [
        {
            title: '步骤一：上传准备转换的图片',
            description: '首先打开<strong>图片转ICO图标工具</strong>页面，在输入区域点击上传按钮或将图片直接拖放到指定区域。工具支持PNG、JPG、JPEG和WEBP等格式，建议优先使用方形高分辨率PNG图标，以便后续在线图片转ICO图标时获得最佳清晰度。',
            note: '如果你暂时没有合适图片，可以使用工具内置的示例图片快速体验图片转ICO图标工具的完整流程。'
        },
        {
            title: '步骤二：确认预览并检查图片比例',
            description: '上传完成后，工具会在预览区域展示原始图片缩略图。此时请检查图片是否为正方形、主体是否居中，如果不是，你可以返回设计工具进行裁剪后重新上传，以保证图片转ICO图标工具生成的各尺寸ICO图标在小图标下依然清晰可辨。',
            note: '如果发现上传错误的图片，可以点击清除按钮重新选择合适的图标图片。'
        },
        {
            title: '步骤三：选择ICO图标尺寸与平台预设',
            description: '接下来，在“图标尺寸配置”区域选择你希望生成的尺寸。在线图片转ICO图标工具默认勾选16×16、32×32、48×48、64×64、128×128、256×256全套尺寸，你也可以根据需求勾选“Windows图标套件”或“网站Favicon套件”等预设，让工具自动为对应平台生成最合适的多尺寸ICO图标组合。',
            note: '如果你只为网站生成favicon.ico，一般勾选16×16与32×32即可；若为桌面程序或高分屏设备，建议保留全部默认尺寸。'
        },
        {
            title: '步骤四：一键生成多尺寸ICO图标',
            description: '确认图片和尺寸配置无误后，点击<strong>“生成ICO图标”</strong>按钮，在线图片转ICO图标工具会在浏览器本地自动完成图片缩放、透明背景处理以及多尺寸ICO图标打包过程。整个图片转ICO图标过程无需任何服务器参与，速度快且安全可靠。',
            note: '在生成过程中请稍候片刻，具体时间取决于图片分辨率和浏览器性能。'
        },
        {
            title: '步骤五：预览ICO图标效果并下载',
            description: '生成完成后，你会在输出区域看到ICO图标的实时预览。此时你可以直观地查看多尺寸ICO图标在不同分辨率下的整体效果，确认无误后点击<strong>“下载ICO图标”</strong>按钮，将生成的icon-multi-size.ico文件保存到本地，用于网站favicon或Windows图标设置。',
            note: '如果预览效果不理想，可以返回上方重新上传图片或调整图标尺寸配置，再次使用图片转ICO图标工具生成新的ICO图标。'
        },
        {
            title: '步骤六：在网站或系统中应用ICO图标',
            description: '最后，你可以将通过<strong>图片转ICO图标工具</strong>生成的ICO文件应用到实际项目中：例如将文件命名为favicon.ico放在网站根目录，或在Windows快捷方式属性中选择ICO文件作为自定义图标。这样，你就完成了从普通图片到多尺寸ICO图标的在线转换与实际部署全过程。',
            note: '有关favicon配置的更多细节，可参考主流浏览器对网站图标的支持规范，确保图片转ICO图标工具生成的图标在各平台均能被正确识别。'
        }
    ],

    successTitle: '恭喜，你已经学会高效使用图片转ICO图标工具！',
    successContent: '通过上述步骤，你已经掌握了如何使用我们的在线图片转ICO图标工具，从上传图片、配置尺寸到生成并下载多尺寸ICO图标包的完整流程。现在就将它应用到你的网站favicon、Windows程序图标或桌面快捷方式中，让统一而专业的ICO图标为你的产品提升辨识度。',

    relatedToolsTitle: '你可能感兴趣的相关图片和图标工具',
    relatedTools: [
        {
            name: '图片压缩器',
            description: '在不明显损失画质的前提下压缩PNG、JPG等图片体积，便于与图片转ICO图标工具配合使用。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: '图片批量调整尺寸工具',
            description: '将多张图片批量缩放到统一尺寸，为后续在线图片转ICO图标或其他格式转换打好基础。',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: '印章生成器',
            description: '在线生成公司公章、个人印章等图形，可与图片转ICO图标工具搭配使用，制作个性化图标。',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        },
        {
            name: '二维码生成器',
            description: '为网址、文本或应用下载页生成二维码，可与网站favicon及ICO图标统一品牌视觉形象。',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],

    referencesTitle: '更多关于ICO图标与网站favicon的参考资源',
    references: [
        {
            name: 'ICO（图标文件格式）介绍 - 维基百科',
            description: '了解ICO图标文件格式的结构、历史以及在Windows和浏览器中的应用场景。',
            url: 'https://zh.wikipedia.org/wiki/ICO'
        },
        {
            name: 'Favicon 教程与最佳实践 - MDN Web Docs',
            description: '学习如何在网站中正确配置favicon.ico和多尺寸图标，搭配图片转ICO图标工具获得更佳效果。',
            url: 'https://developer.mozilla.org/zh-CN/docs/Glossary/Favicon'
        },
        {
            name: '高分辨率图标与多尺寸资源设计指南',
            description: '了解在高DPI和4K屏幕环境下设计多尺寸图标的原则，与在线图片转ICO图标工具生成的多尺寸ICO图标相结合。',
            url: 'https://learn.microsoft.com/zh-cn/windows/win32/uxguide/vis-icons'
        }
    ]
};


