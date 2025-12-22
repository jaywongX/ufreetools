export default {
    title: '图片Base64转换器：在线图片编码解码工具使用指南',
    functionTitle: '什么是图片Base64转换器及其用途？',
    intro: '我们的<strong>图片Base64转换器</strong>是一款强大的纯前端在线工具，可以轻松实现图片与Base64编码之间的双向转换。该工具支持PNG、JPEG、WebP、GIF、SVG等多种图片格式，提供质量控制和批量处理功能。使用我们的<strong>在线图片转Base64工具</strong>，您可以快速将图片转换为Base64编码用于网页嵌入、API传输或数据存储，也可以将Base64编码还原为图片文件。所有处理都在浏览器本地完成，无需上传到服务器，确保您的隐私和数据安全。',
    
    useCasesTitle: '图片Base64转换的常见应用场景',
    useCases: [
        '在网页开发中将小图标和图片直接嵌入HTML或CSS，减少HTTP请求',
        '在移动应用开发中使用Base64编码存储和传输图片数据',
        '在API接口中传递图片数据，避免文件上传的复杂性',
        '在邮件模板中嵌入图片，确保图片能够正常显示',
        '在数据存储系统中将图片转换为文本格式存储',
        '在前端缓存策略中使用Base64编码的图片数据',
        '在Web Worker中处理图片数据，提高性能',
        '在离线应用中预加载和存储图片资源'
    ],
    
    tipTitle: '专业提示：',
    tipContent: '对于需要透明背景的图片，建议使用PNG格式并保持原始质量。对于照片类图片，可以使用JPEG格式并适当调整质量以减小文件大小。Base64编码后的数据大小约为原文件的133%，请注意控制文件大小以避免性能问题。',
    
    conclusion: '<strong>图片Base64转换</strong>工具对前端开发者、移动应用开发者、API开发者以及任何需要处理图片数据的用户特别有用。通过使用我们的Base64转换器，您可以快速实现图片与文本编码之间的转换，简化开发流程，提高工作效率。我们的工具使这一过程变得简单高效，无需安装任何软件，完全在浏览器中运行。',
    
    faqTitle: '常见问题解答',
    faqs: [
        {
            question: '什么是Base64编码？为什么需要将图片转换为Base64？',
            answer: 'Base64是一种将二进制数据编码为ASCII字符的编码方式。将图片转换为Base64编码后，可以将其作为文本字符串嵌入到HTML、CSS、JSON等文本格式中，无需单独的文件请求。这对于小图标、内联图片、API数据传输等场景非常有用。我们的<strong>图片转Base64工具</strong>可以快速完成这一转换过程。'
        },
        {
            question: 'Base64编码会影响图片质量吗？',
            answer: 'Base64编码本身不会影响图片质量，它只是改变了数据的表示方式。但是，在转换过程中如果选择了较低的质量设置（仅适用于JPEG格式），可能会影响图片质量。我们的工具允许您调整质量参数，在文件大小和图片质量之间找到平衡。对于PNG、WebP等格式，转换过程是无损的。'
        },
        {
            question: '我可以处理哪些图片格式？',
            answer: '我们的<strong>Base64图片转换器</strong>支持多种常见图片格式，包括PNG（支持透明背景）、JPEG/JPG（可调整质量）、WebP（现代格式优化）、GIF（包括动图）和SVG（矢量图）。您可以将这些格式的图片转换为Base64编码，也可以将Base64编码还原为这些格式的图片。'
        },
        {
            question: '如何一次批量处理多张图片？',
            answer: '我们的工具支持批量处理功能。在图片转Base64模式下，您可以同时拖放多张图片或使用文件选择器选择多个文件。上传后，点击"开始转换"按钮即可同时处理所有图片。转换完成后，您可以使用"批量下载"功能将所有Base64编码打包成ZIP文件下载。'
        },
        {
            question: 'Base64编码后的数据大小会增加多少？',
            answer: 'Base64编码会将原始二进制数据转换为文本格式，编码后的数据大小约为原文件的133%（即增加约33%）。这是因为Base64使用4个ASCII字符表示3个字节的原始数据。我们的工具会显示原始大小和压缩率信息，帮助您了解转换效果。'
        },
        {
            question: '我可以将Base64编码转换回图片吗？',
            answer: '是的，我们的工具支持双向转换。在Base64转图片模式下，您可以粘贴Base64编码字符串（可以包含或不包含data:image前缀），工具会自动识别格式并生成图片。您还可以选择输出格式（PNG、JPEG或WebP），即使原始格式不同也可以转换。'
        },
        {
            question: '处理大文件时会有性能问题吗？',
            answer: '我们的工具在浏览器本地处理所有数据，对于大多数常见大小的图片（几MB以内）都能快速处理。对于非常大的图片，我们提供了最大文件大小限制和质量调整功能，可以帮助控制处理时间和内存使用。如果遇到性能问题，建议适当降低图片质量或使用图片压缩工具预先处理。'
        },
        {
            question: '我的图片数据会被上传到服务器吗？',
            answer: '不会。我们的<strong>纯前端Base64转换工具</strong>完全在您的浏览器中运行，所有图片处理和转换都在本地完成，不会上传任何数据到服务器。这确保了您的隐私和数据安全，特别适合处理敏感或私密的图片。'
        }
    ],
    
    tutorialTitle: '如何使用图片Base64转换器',
    steps: [
        {
            title: '选择转换方向',
            description: '首先选择您需要的转换方向：<strong>图片转Base64</strong>或<strong>Base64转图片</strong>。根据您的需求点击相应的单选按钮。',
            note: '图片转Base64适用于将图片文件转换为编码字符串，Base64转图片适用于将编码字符串还原为图片文件。'
        },
        {
            title: '上传图片或输入Base64编码',
            description: '如果选择图片转Base64，您可以<strong>拖放图片</strong>到上传区域，或点击区域从设备中选择文件。支持同时选择多个文件进行批量处理。如果选择Base64转图片，请在文本框中粘贴Base64编码字符串。',
            note: 'Base64编码可以包含data:image前缀，工具会自动识别和处理。'
        },
        {
            title: '调整转换参数（可选）',
            description: '在图片转Base64模式下，您可以调整<strong>图片质量</strong>滑块（1%-100%）来控制输出质量，也可以设置<strong>最大文件大小</strong>限制。工具会自动优化以确保结果符合您的要求。',
            note: '质量设置主要影响JPEG格式，PNG和WebP格式通常保持原始质量。'
        },
        {
            title: '执行转换',
            description: '点击<strong>"开始转换"</strong>按钮开始处理。对于图片转Base64，工具会将每张图片转换为Base64编码字符串。对于Base64转图片，工具会解码字符串并生成图片预览。',
            note: '处理时间取决于图片数量和大小，大多数情况下转换会立即完成。'
        },
        {
            title: '查看转换结果',
            description: '转换完成后，您可以在输出区域查看结果。对于图片转Base64，会显示图片预览、Base64编码文本、编码长度、原始大小和压缩率等信息。对于Base64转图片，会显示生成的图片预览、图片尺寸和检测到的格式。',
            note: '您可以点击"复制Base64"按钮快速复制编码字符串，或点击"下载"按钮保存图片文件。'
        },
        {
            title: '下载或使用结果',
            description: '对于图片转Base64的结果，点击<strong>"复制Base64"</strong>按钮将编码复制到剪贴板，然后可以直接在代码中使用。如果有多个结果，可以使用<strong>"批量下载"</strong>功能将所有Base64文本打包下载。对于Base64转图片的结果，点击"下载"按钮保存图片文件。',
            note: '所有处理都在您的浏览器中进行，确保数据安全和隐私保护。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的图片Base64转换器。现在您可以轻松实现图片与Base64编码之间的转换，提高开发效率，简化工作流程。',
    
    relatedToolsTitle: '您可能感兴趣的相关工具',
    relatedTools: [
        {
            name: '图片压缩器',
            description: '在不明显损失质量的情况下减小图像文件大小。',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: '图片调整器',
            description: '将图像调整为特定尺寸或按百分比缩放。',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: '图片颜色反转工具',
            description: '在线将图片颜色进行反转处理，创建负片效果。',
            url: 'https://www.ufreetools.com/tool/invert-image-colors'
        },
        {
            name: '二维码生成器',
            description: '为URL、文本、联系信息等创建自定义二维码。',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],
    
    referencesTitle: '参考资源',
    references: [
        {
            name: 'Base64编码标准 (RFC 4648)',
            description: '了解Base64编码的官方规范和实现细节',
            url: 'https://datatracker.ietf.org/doc/html/rfc4648'
        },
        {
            name: 'Web图片格式指南',
            description: '关于PNG、JPEG、WebP等图片格式的技术文档',
            url: 'https://developer.mozilla.org/zh-CN/docs/Web/Media/Formats/Image_types'
        },
        {
            name: 'Data URL规范',
            description: '关于data: URL格式和Base64内联图片的标准',
            url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URIs'
        }
    ]
}

