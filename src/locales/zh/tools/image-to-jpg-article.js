export default {
    title: '图片转JPG工具：在线图片格式转换器使用指南',
    functionTitle: '什么是图片转JPG工具及其用途？',
    intro: '我们的<strong>图片转JPG工具</strong>是一款强大的在线图片格式转换应用，可以快速将PNG、WebP、GIF、BMP、TIFF、SVG、HEIC等多种图片格式转换为JPG格式。JPG（JPEG）是最广泛使用的图片格式之一，具有出色的压缩比和兼容性，特别适合照片、复杂图像和网页展示。使用我们的<strong>在线图片转JPG转换器</strong>，您可以批量处理多张图片，精确控制输出质量和尺寸，无需安装任何软件即可完成格式转换。',
    
    useCasesTitle: '图片转JPG的常见应用场景',
    useCases: [
        '将PNG透明图片转换为JPG用于网站展示，减小文件体积提升加载速度',
        '将WebP格式图片转换为JPG以确保在旧版浏览器中的兼容性',
        '将HEIC/HEIF格式（iPhone照片）转换为JPG以便在Windows电脑上查看',
        '将SVG矢量图转换为JPG位图用于打印或社交媒体分享',
        '批量压缩照片文件，在保持可接受质量的同时减小存储空间',
        '为网站优化图片，将大尺寸PNG转换为压缩后的JPG提升页面性能',
        '将GIF动图转换为JPG静态图片用于文档或演示文稿',
        '统一图片格式，将各种来源的图片转换为标准JPG格式便于管理'
    ],
    
    tipTitle: '专业提示：',
    tipContent: 'JPG格式使用有损压缩，适合照片和复杂图像。对于需要透明背景或文字清晰的图片，建议保留PNG格式。质量设置80%通常能在文件大小和视觉质量之间取得良好平衡。',
    
    conclusion: '<strong>图片转JPG格式转换</strong>工具对网站开发者、摄影师、设计师以及需要处理大量图片的用户特别有用。通过使用我们的在线图片转JPG转换器，您可以快速统一图片格式，优化文件大小，提升网站加载速度，或满足特定平台对图片格式的要求。我们的工具支持批量处理，提供精确的质量和尺寸控制，所有处理都在浏览器本地完成，确保您的图片隐私和安全。',
    
    faqTitle: '常见问题解答',
    faqs: [
        {
            question: '图片转JPG工具支持哪些输入格式？',
            answer: '我们的<strong>在线图片转JPG转换器</strong>支持多种常见图片格式，包括PNG、WebP、GIF、BMP、TIFF、SVG以及HEIC/HEIF格式。对于HEIC格式（iPhone照片），工具会自动处理转换。您也可以同时上传多张不同格式的图片进行批量转换。'
        },
        {
            question: '转换JPG时如何选择合适的质量设置？',
            answer: 'JPG质量设置范围从1%到100%，数值越高图片质量越好但文件也越大。对于网页展示，建议使用60-80%的质量设置，既能保持良好的视觉效果又能控制文件大小。对于打印用途，建议使用90-100%的高质量设置。工具会实时显示预估的文件大小，帮助您做出最佳选择。'
        },
        {
            question: '转换JPG会丢失图片的透明背景吗？',
            answer: '是的，JPG格式不支持透明通道。当您将带有透明背景的PNG图片转换为JPG时，透明区域会被填充为白色背景。如果您需要保留透明效果，建议保持PNG格式或使用其他支持透明的格式。'
        },
        {
            question: '可以批量转换多张图片为JPG吗？',
            answer: '完全可以！我们的<strong>图片转JPG工具</strong>支持批量处理功能。您可以一次性上传多张图片（支持拖拽或文件选择），工具会依次处理所有图片。处理完成后，您可以单独下载每张转换后的JPG图片，或使用批量下载功能将所有结果打包成ZIP文件一次性下载。'
        },
        {
            question: '转换后的JPG图片可以调整尺寸吗？',
            answer: '是的，我们的工具提供了灵活的尺寸调整选项。您可以选择保持原始尺寸，或指定目标宽度和高度，也可以按百分比缩放，还可以设置最长边限制。所有尺寸调整都支持保持宽高比，确保图片不变形。'
        },
        {
            question: 'HEIC格式（iPhone照片）可以转换为JPG吗？',
            answer: '可以！我们的<strong>在线图片转JPG转换器</strong>完全支持HEIC和HEIF格式转换。这是iPhone和部分Android设备默认的照片格式。您可以直接上传HEIC文件，工具会自动将其转换为JPG格式，方便在Windows电脑或其他不支持HEIC的设备上查看。'
        },
        {
            question: '转换过程是否安全？图片会上传到服务器吗？',
            answer: '完全安全！我们的工具采用纯前端技术，所有图片处理都在您的浏览器本地完成。您的图片不会上传到任何服务器，确保隐私和数据安全。您可以放心处理包含敏感信息的图片。'
        }
    ],
    
    tutorialTitle: '如何使用图片转JPG工具',
    steps: [
        {
            title: '上传您的图片',
            description: '首先上传您想要转换为JPG格式的图片。您可以通过三种方式上传：<strong>拖拽文件</strong>到上传区域、<strong>点击浏览</strong>选择文件，或使用<strong>Ctrl+V（Mac为Cmd+V）</strong>粘贴剪贴板中的图片。工具支持PNG、WebP、GIF、BMP、TIFF、SVG、HEIC等多种格式，您可以一次上传多张图片进行批量处理。',
            note: '支持同时上传多张不同格式的图片，工具会自动识别并处理。'
        },
        {
            title: '预览和选择图片',
            description: '上传后，您会在左侧预览区域看到所有上传的图片缩略图。每张图片下方显示原始格式和文件大小。您可以检查图片列表，确认选择了正确的文件。如果需要删除某张图片，将鼠标悬停在缩略图上并点击删除图标即可。',
            note: '批量处理时，建议先检查图片列表，确保所有需要转换的图片都已正确上传。'
        },
        {
            title: '设置JPG质量和尺寸',
            description: '在转换前，您可以调整输出设置。使用<strong>质量滑块</strong>设置JPG压缩质量（1%-100%），滑块右侧会实时显示预估的文件大小。如果需要调整图片尺寸，可以选择"保持原始尺寸"、"指定目标尺寸"、"百分比缩放"或"最长边限制"等选项。所有尺寸调整都支持保持宽高比。',
            note: '质量设置80%通常能在文件大小和视觉质量之间取得良好平衡，适合大多数网页展示场景。'
        },
        {
            title: '转换为JPG格式',
            description: '设置完成后，点击<strong>"转换为JPG"</strong>按钮开始处理。工具会依次处理所有上传的图片，批量处理时会显示进度信息。对于大多数图片，转换过程会立即完成，但大文件或批量处理可能需要几秒钟时间。',
            note: '转换过程中请保持页面打开，不要关闭浏览器标签页。'
        },
        {
            title: '预览转换结果',
            description: '转换完成后，右侧输出区域会显示所有转换后的JPG图片。每张图片都提供<strong>转换前后对比</strong>功能，您可以直观地看到原始图片和JPG预览的差异。图片下方显示原始大小、转换后大小和压缩比等信息，帮助您评估转换效果。',
            note: '如果对质量不满意，可以调整质量设置后重新转换。'
        },
        {
            title: '下载转换结果',
            description: '满意转换结果后，您可以点击每张图片下方的<strong>"下载JPG"</strong>按钮单独保存，或使用输出区域顶部的<strong>"批量下载 (ZIP)"</strong>按钮将所有转换后的JPG图片打包成一个ZIP文件一次性下载。所有处理都在浏览器本地完成，确保您的图片隐私和安全。',
            note: '批量下载时，ZIP文件中的图片会保持原始文件名，并自动添加.jpg扩展名。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的图片转JPG工具。现在您可以轻松将各种格式的图片转换为JPG，优化文件大小，提升网站性能，或满足特定平台对图片格式的要求。',
    
    relatedToolsTitle: '您可能感兴趣的相关工具',
    relatedTools: [
        {
            name: '图片压缩器',
            description: '在不明显损失质量的情况下减小图像文件大小，支持多种格式。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: '图片调整器',
            description: '将图像调整为特定尺寸或按百分比缩放，支持批量处理。',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: '印章生成器',
            description: '在线生成公司公章、个人印章等图形，可与图片转ICO图标工具搭配使用，制作个性化图标。',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        },
        {
            name: '图片颜色反转工具',
            description: '在线将图片颜色进行反转处理，创建负片效果。',
            url: 'https://www.ufreetools.com/tool/invert-image-colors'
        }
    ],
    
    referencesTitle: '参考资源',
    references: [
        {
            name: 'JPEG图像压缩标准 (ISO/IEC 10918)',
            description: '了解JPEG格式的压缩原理和技术标准',
            url: 'https://en.wikipedia.org/wiki/JPEG'
        },
        {
            name: 'Web图像格式对比指南',
            description: 'PNG、JPG、WebP等格式的特点和适用场景',
            url: 'https://developer.mozilla.org/zh-CN/docs/Web/Media/Formats/Image_types'
        },
        {
            name: '图片优化最佳实践',
            description: '网站图片优化的专业建议和技巧',
            url: 'https://web.dev/fast/#optimize-your-images'
        }
    ]
}

