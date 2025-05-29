export default {
    name: "Base64 Hex 转换器",
    description: "在 Base64 和十六进制格式之间轻松转换，支持自定义分隔符和大小写",
    inputLabel: "输入",
    outputLabel: "输出",
    inputPlaceholder: "输入要转换的 Base64 或十六进制字符串",
    convert: "转换",
    copy: "复制",
    download: "下载",
    clear: "清空",
    uploadFile: "上传文件",
    conversionType: "转换类型",
    base64ToHex: "Base64 转 Hex",
    hexToBase64: "Hex 转 Base64",
    hexOptions: "Hex 选项",
    upperCase: "大写",
    lowerCase: "小写",
    separator: "分隔符",
    none: "无",
    space: "空格",
    colon: "冒号 (:)",
    dash: "短横线 (-)",
    autoConvert: "自动转换",
    invalidBase64: "无效的 Base64 输入",
    invalidHex: "无效的十六进制输入",
    oddHexLength: "十六进制字符串长度必须为偶数",
    fileTooLarge: "文件太大（最大 {size}MB）",
    fileReadError: "读取文件错误",
    copied: "已复制到剪贴板！",
    copyFailed: "复制到剪贴板失败",
    dragAndDrop: "将文件拖放到此处",
    maxFileSize: "最大文件大小：{size}MB",
    custom: "自定义",
    processing: "处理中...",
    tagConvert: "转换",
    tagHex: "十六进制",
    tagEncode: "编码",
    tagDecode: "解码",
    article:
    {
        title: "Base64 转 Hex 转换器：完整指南与教程",
        introduction: {
            title: "什么是 Base64 Hex 转换器？",
            paragraph1: "<strong>Base64 转 Hex 转换器</strong>是一款强大的在线工具，专为在 Base64 编码和十六进制表示之间无缝转换数据而设计。这个必不可少的转换工具帮助开发人员、安全专业人士和数据分析师高效处理各种技术应用中常用的不同数据编码格式。",
            paragraph2: "Base64 编码广泛用于通过基于文本的协议传输二进制数据，而十六进制表示则更适合调试、分析二进制数据和处理低级编程任务。我们的<strong>Base64 Hex 转换工具</strong>连接了这两种重要格式，允许在两个方向上进行快速准确的转换。",
            paragraph3: "凭借对自定义分隔符、大小写选项和文件上传的支持，这款 Base64 到 Hex 的转换工具为您的所有编码需求提供了全面的解决方案。无论您是处理加密密钥、二进制数据还是调试网络数据包，这款转换器都能简化您的工作流程并消除手动转换错误。"
        },
        useCases: {
            title: "应用场景与用例",
            webDevelopment: {
                title: "Web 开发与数据 URI",
                content: "Web 开发人员在处理数据 URI、SVG 图形或调试 Web 应用程序中的二进制数据时，经常使用<strong>Base64 转 Hex 转换</strong>。例如，当使用数据 URI 将图像等二进制资源直接嵌入到 CSS 或 HTML 中时，您可能需要在 Base64 和十六进制格式之间进行转换，以正确分析或修改数据。我们的转换器使这个过程变得无缝，让您能够专注于开发而不是手动编码转换。"
            },
            cryptography: {
                title: "密码学与安全",
                content: "在密码学和安全应用中，<strong>在 Base64 和十六进制之间转换</strong>是一个常见需求。加密密钥、哈希值和签名通常以 Base64 或十六进制格式表示，具体取决于所使用的系统或协议。安全专业人士使用我们的工具来验证数字签名、检查证书内容或分析加密数据。能够在这些格式之间快速转换对于安全测试和密码协议的实现是无价的。"
            },
            dataAnalysis: {
                title: "数据分析与二进制处理",
                content: "处理二进制数据的数据分析师和研究人员经常需要在不同的编码格式之间进行转换。<strong>十六进制转 Base64 转换器</strong>在分析二进制文件、网络捕获或任何可能在各种系统中以不同格式表示的原始数据时非常有用。自定义分隔符选项对于格式化十六进制输出以满足特定分析要求或在处理大型数据集时提高可读性特别有用。"
            },
            debugging: {
                title: "调试与故障排除",
                content: "在调试使用不同编码格式的应用程序或协议时，可靠的<strong>Base64 和十六进制转换器</strong>是必不可少的。软件工程师使用我们的工具快速转换在日志、内存转储或网络流量中找到的编码数据。在格式之间切换的能力有助于识别与编码相关的问题，并验证数据在整个应用程序堆栈中是否被正确编码或解码。"
            }
        },
        tutorial: {
            title: "如何使用 Base64 Hex 转换器",
            basicUsage: {
                title: "基本转换步骤"
            },
            step1: {
                title: "步骤 1：选择转换方向",
                content: "首先，使用转换类型部分中的单选按钮选择您想要<strong>从 Base64 转换到 Hex</strong>还是<strong>从 Hex 转换到 Base64</strong>。这决定了工具将如何处理您的输入数据。"
            },
            step2: {
                title: "步骤 2：输入您的数据",
                content: "在输入文本区域中键入或粘贴您的 Base64 字符串或十六进制数据。该工具会自动验证您的输入，确保它符合所选转换方向的正确格式。"
            },
            step3: {
                title: "步骤 3：配置输出选项（适用于 Base64 转 Hex）",
                content: "如果您是从 Base64 转换到 Hex，可以自定义输出格式：<ul><li><strong>大小写选项：</strong>选择大写或小写十六进制输出</li><li><strong>分隔符选项：</strong>在十六进制字节之间选择无、空格、冒号、短横线或自定义分隔符</li></ul>"
            },
            step4: {
                title: "步骤 4：获取转换结果",
                content: "点击\"转换\"按钮（或启用\"自动转换\"实现实时转换）处理您的数据。结果将显示在右侧的输出区域。然后，您可以将结果复制到剪贴板或下载为文件以供进一步使用。"
            },
            advancedOptions: {
                title: "高级功能与选项",
                content: "我们的<strong>Base64 转十六进制转换器</strong>包含多项高级功能，以增强您的工作流程：<ul><li><strong>自动转换：</strong>在您输入时启用实时转换</li><li><strong>自定义分隔符：</strong>为十六进制输出定义您自己的分隔符字符</li><li><strong>复制和下载：</strong>轻松导出您的转换数据</li><li><strong>错误检测：</strong>当输入数据无效时获得清晰的反馈</li></ul>"
            },
            fileConversion: {
                title: "在 Base64 和 Hex 之间转换文件",
                content: "要在 Base64 和十六进制格式之间转换文件：<ol><li>选择您想要的转换方向（Base64 转 Hex 或 Hex 转 Base64）</li><li>点击\"上传文件\"按钮并选择您的文件</li><li>该工具将读取文件并根据您选择的选项转换其内容</li><li>转换完成后，您可以使用\"下载\"按钮下载结果</li></ol>这个功能在处理需要以不同编码格式表示的二进制文件时特别有用。"
            }
        },
        faq: {
            title: "常见问题解答",
            q1: "Base64 和十六进制编码有什么区别？",
            a1: "<p>Base64 和十六进制都是用来表示二进制数据的编码方法，但它们在几个重要方面有所不同：</p><p><strong>Base64 编码</strong>使用 64 个字符集（A-Z、a-z、0-9、+ 和 /）来表示二进制数据。它被设计用于将二进制数据编码成可以通过电子邮件或 HTML 等基于文本的协议安全传输的格式。Base64 比十六进制更紧凑，大约使用 4 个字符表示 3 个字节的数据。</p><p><strong>十六进制编码</strong>使用 16 个字符（0-9 和 A-F）来表示二进制数据。每个字节由两个十六进制数字表示，这使得它比 Base64 不那么紧凑，但更易于人类阅读和分析。十六进制在编程、调试和需要直接表示二进制值时常用。</p><p>我们的<strong>Base64 Hex 转换器</strong>允许您根据特定需求轻松在这两种编码格式之间进行转换。</p>",

            q2: "为什么我需要在 Base64 和十六进制之间进行转换？",
            a2: "<p>有几种常见情况需要在 Base64 和十六进制格式之间进行转换：</p><ul><li><strong>跨系统兼容性：</strong>不同的系统或协议可能使用不同的编码标准</li><li><strong>数据分析：</strong>对于某些类型的二进制数据，十六进制格式通常更易于分析和操作</li><li><strong>密码学：</strong>许多加密操作以 Base64 或十六进制格式提供输出</li><li><strong>调试：</strong>在格式之间转换可以帮助识别编码问题</li><li><strong>数据存储优化：</strong>对于存储相同的二进制数据，Base64 比十六进制更紧凑</li></ul><p>我们的<strong>在线 Base64 转 Hex 转换工具</strong>简化了这些转换，为您节省时间并防止手动转换错误。</p>",

            q3: "Base64 Hex 转换器对敏感数据安全吗？",
            a3: "<p>是的，我们的<strong>Base64 Hex 转换工具</strong>在设计时考虑了安全性：</p><ul><li>所有转换完全在您的浏览器中进行 - 您的数据永远不会离开您的计算机</li><li>不会进行服务器端处理或存储您的数据</li><li>页面加载后，该工具可以离线工作</li><li>我们不在转换过程中使用跟踪或分析</li></ul><p>然而，对于高度敏感的数据，如加密密钥或密码，我们建议在安全、隔离的系统上使用离线工具作为最佳实践。虽然我们的在线转换器是安全的，但最敏感的操作应始终遵循安全最佳实践。</p>",

            q4: "在 Base64 和十六进制之间转换时有哪些常见错误？",
            a4: "<p>使用<strong>Base64 转 Hex 转换器</strong>或反之时，您可能遇到的最常见错误有：</p><ul><li><strong>无效的 Base64 输入：</strong>Base64 字符串必须只包含有效的 Base64 字符（A-Z、a-z、0-9、+、/，有时还有 = 作为填充）</li><li><strong>无效的十六进制输入：</strong>十六进制字符串必须只包含有效的十六进制字符（0-9、A-F、a-f）</li><li><strong>奇数长度的十六进制字符串：</strong>二进制数据的十六进制表示必须有偶数个字符（每个字节由两个十六进制数字表示）</li><li><strong>填充错误：</strong>Base64 字符串有时需要用 = 字符填充以保持适当的长度</li></ul><p>我们的转换器会自动检测这些问题，并提供清晰的错误消息，帮助您解决任何转换问题。</p>",

            q5: "我可以使用 Base64 Hex 转换器转换大文件吗？",
            a5: "<p>是的，我们的<strong>Base64 Hex 转换器</strong>支持文件上传进行批量转换。但是，需要考虑一些实际限制：</p><ul><li>基于浏览器的工具有基于您设备的内存限制</li><li>非常大的文件（超过 10MB）可能在某些浏览器中导致性能问题</li><li>大文件的转换过程可能需要一些时间才能完成</li></ul><p>为获得最佳性能，我们建议：</p><ul><li>转换小于 10MB 的文件以获得最佳体验</li><li>使用具有良好 JavaScript 性能的现代浏览器</li><li>在转换较大文件时保持耐心，因为该过程完全在您的浏览器中进行</li></ul><p>对于极大的文件或批处理需求，请考虑使用 OpenSSL 等命令行工具或专门的桌面应用程序。</p>"
        },
        relatedTools: {
            title: "相关转换工具",
            tool1: {
                title: "Base64 编码/解码器",
                description: "使用这个多功能在线工具将文本编码为 Base64 或将 Base64 解码回原始文本。"
            },
            tool2: {
                title: "十六进制计算器",
                description: "使用这个专门的计算器对十六进制数字执行算术和位运算。"
            },
            tool3: {
                title: "哈希计算器",
                description: "从文本或文件输入生成密码学哈希（MD5、SHA-1、SHA-256 等）。"
            },
            tool4: {
                title: "十六进制大小写转换器",
                description: "快速在大写和小写格式之间转换十六进制字符串。"
            }
        },
        references: {
            title: "参考资料与资源",
            ref1: "RFC 4648: Base16、Base32 和 Base64 数据编码",
            ref2: "MDN Web 文档: Window.btoa() - Base64 编码",
            ref3: "维基百科: Base64 编码",
            ref4: "维基百科: 十六进制数字系统"
        }
    }
} 