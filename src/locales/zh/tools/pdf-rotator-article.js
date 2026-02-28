export default {
    title: 'PDF旋转器使用指南：在线PDF页面旋转工具',
    functionTitle: '什么是PDF旋转器及其用途？',
    intro: '我们的<strong>PDF旋转器</strong>是一款强大的在线工具，可以轻松旋转PDF文件的页面方向。无论您需要将横向页面转为纵向，还是需要批量调整多个PDF文件的页面方向，我们的<strong>在线PDF旋转工具</strong>都能快速高效地完成。该工具支持90°、180°、270°三种旋转角度，可以针对单页、多页或整个文档进行旋转操作，并且完全在浏览器中处理，保护您的文件隐私。',
    
    useCasesTitle: 'PDF旋转的常见应用场景',
    useCases: [
        '扫描文档时页面方向错误，需要批量修正',
        '将横向PDF页面调整为纵向，便于阅读和打印',
        '批量处理多个PDF文件，统一页面方向',
        '处理扫描的合同、发票等文档，修正页面方向',
        '调整电子书PDF的页面方向，提升阅读体验',
        '处理从手机或扫描仪导出的PDF，自动修正方向',
        '为打印准备PDF文件，确保页面方向正确',
        '整理PDF文档库，统一所有文件的页面方向'
    ],
    
    tipTitle: '专业提示：',
    tipContent: '当处理大量PDF文件时，建议先使用单页预览功能检查旋转效果，确认无误后再进行批量处理。这样可以避免重复操作，提高工作效率。',
    
    conclusion: '<strong>PDF页面旋转</strong>工具对办公人员、学生、图书管理员以及任何需要处理PDF文档的用户特别有用。通过使用我们的PDF旋转器，您可以快速修正扫描文档的方向问题，批量处理多个文件，并且所有操作都在本地浏览器中完成，无需上传文件到服务器，确保文档安全。我们的工具使PDF旋转变得简单高效，无需安装任何软件。',
    
    faqTitle: '常见问题解答',
    faqs: [
        {
            question: 'PDF旋转会影响文件质量吗？',
            answer: '不会，我们的<strong>在线PDF旋转工具</strong>使用PDF.js库进行旋转处理，保持原始文件的质量和格式。旋转操作只是改变页面的显示方向，不会压缩或降低PDF的质量。所有文本、图像和矢量图形都会保持原始清晰度。'
        },
        {
            question: '我可以同时旋转多个PDF文件吗？',
            answer: '是的，我们的工具支持批量处理多个PDF文件。您可以一次上传多个PDF文件，然后为每个文件设置不同的旋转角度和页面范围。处理完成后，可以单独下载每个文件，或使用批量下载功能将所有旋转后的PDF打包成一个ZIP文件。'
        },
        {
            question: '如何只旋转PDF的某些页面？',
            answer: '我们的工具提供了灵活的页面选择功能。您可以选择"全部页面"来旋转整个文档，或者选择"选择页面"并指定页面范围（例如从第3页到第10页）。这样您可以只旋转需要调整的页面，而保持其他页面不变。'
        },
        {
            question: '支持哪些旋转角度？',
            answer: '我们的<strong>PDF旋转器</strong>支持三种旋转角度：顺时针90°、180°和逆时针90°（相当于顺时针270°）。这些角度足以处理大多数常见的页面方向问题。如果需要多次旋转，您可以连续应用旋转操作。'
        },
        {
            question: '旋转后的PDF文件大小会改变吗？',
            answer: '文件大小可能会有轻微变化，这取决于PDF的内部结构。但通常变化很小，不会显著影响文件大小。我们的工具会尽量保持原始文件的压缩设置和结构，确保文件大小接近原始文件。'
        },
        {
            question: '我的PDF文件会被上传到服务器吗？',
            answer: '不会，所有处理都在您的浏览器本地完成。您的PDF文件不会上传到任何服务器，确保文档的隐私和安全。这是纯前端工具，完全在您的设备上运行。'
        },
        {
            question: '可以处理加密的PDF文件吗？',
            answer: '如果PDF文件有密码保护，您需要先输入密码解锁文件，然后才能进行旋转操作。对于没有密码保护的PDF文件，可以直接上传处理。'
        },
        {
            question: '处理大型PDF文件需要多长时间？',
            answer: '处理时间取决于PDF文件的大小和页数。对于大多数常见的PDF文件（小于50MB，少于100页），处理通常在几秒内完成。对于非常大的文件，可能需要稍长的时间，但所有处理都在本地进行，不会受到网络速度的影响。'
        }
    ],
    
    tutorialTitle: '如何使用PDF旋转器',
    steps: [
        {
            title: '上传PDF文件',
            description: '首先上传您想要旋转的PDF文件。您可以直接将文件<strong>拖放</strong>到上传区域，或点击浏览并从您的设备中选择文件。我们的工具支持标准的PDF格式，您可以一次上传多个文件进行批量处理。',
            note: '支持的文件大小取决于您的浏览器和设备性能，建议单个文件不超过100MB。'
        },
        {
            title: '预览PDF页面',
            description: '上传后，您可以在预览区域查看PDF的第一页。使用页面导航按钮可以浏览所有页面，了解文档内容。预览功能帮助您确定需要旋转的页面和角度。',
            note: '点击预览区域可以放大查看页面细节，使用鼠标滚轮可以缩放。'
        },
        {
            title: '选择旋转角度',
            description: '在旋转选项中选择您需要的角度：<strong>顺时针90°</strong>、<strong>180°</strong>或<strong>逆时针90°</strong>。您可以为每个PDF文件设置不同的旋转角度。',
            note: '如果需要旋转360°（回到原方向），可以选择180°旋转两次，或者选择逆时针90°四次。'
        },
        {
            title: '选择页面范围',
            description: '选择要旋转的页面范围。如果选择"全部页面"，整个PDF文档的所有页面都会被旋转。如果选择"选择页面"，您可以指定起始页和结束页，只旋转指定范围内的页面。',
            note: '页面编号从1开始，例如"从第1页到第5页"表示旋转前5页。'
        },
        {
            title: '执行旋转操作',
            description: '点击<strong>"旋转PDF"</strong>按钮开始处理。工具会在浏览器中处理您的PDF文件，旋转指定的页面。处理过程中会显示进度提示，处理完成后旋转后的PDF会出现在输出区域。',
            note: '处理时间取决于文件大小和页数，请耐心等待处理完成。'
        },
        {
            title: '预览和下载结果',
            description: '处理完成后，您可以在输出区域预览旋转后的PDF。使用页面导航查看所有页面，确认旋转效果符合预期。确认无误后，点击<strong>"下载"</strong>按钮保存单个文件，或使用<strong>"批量下载"</strong>按钮将所有处理后的PDF打包成ZIP文件下载。',
            note: '所有处理都在您的浏览器中进行，因此您的PDF文件永远不会上传到任何服务器，确保隐私和安全。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的PDF旋转器工具。现在您可以轻松旋转PDF文件的页面方向，批量处理多个文件，并且所有操作都在本地完成，保护您的文档安全。',
    
    relatedToolsTitle: '您可能感兴趣的相关工具',
    relatedTools: [
        {
            name: 'PDF合并器',
            description: '将多个PDF文件合并成一个文档，方便管理和分享。',
            url: 'https://www.ufreetools.com/tool/merge-pdf-onliner'
        },
        {
            name: 'PDF拆分器',
            description: '将一个PDF文件拆分成多个独立的PDF文档。',
            url: 'https://www.ufreetools.com/tool/pdf-splitter'
        },
        {
            name: 'PDF压缩器',
            description: '减小PDF文件大小，便于存储和传输。',
            url: 'https://www.ufreetools.com/tool/pdf-compressor'
        },
        {
            name: 'PDF转图片',
            description: '将PDF页面转换为图片格式，支持PNG、JPG等格式。',
            url: 'https://www.ufreetools.com/tool/pdf-to-image'
        }
    ],
    
    referencesTitle: '参考资源',
    references: [
        {
            name: 'PDF格式规范',
            description: '了解PDF文件格式的技术规范和标准',
            url: 'https://www.iso.org/standard/51502.html'
        },
        {
            name: 'PDF.js官方文档',
            description: 'Mozilla开发的PDF.js库，用于在浏览器中渲染PDF',
            url: 'https://mozilla.github.io/pdf.js/'
        },
        {
            name: '数字文档管理最佳实践',
            description: '关于如何有效管理和处理数字文档的指南',
            url: 'https://zh.wikipedia.org/wiki/文档管理系统'
        }
    ]
}
