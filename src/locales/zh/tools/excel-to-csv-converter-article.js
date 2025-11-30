export default {
    title: 'Excel转CSV转换器：在线批量Excel文件转换使用指南',
    functionTitle: '什么是Excel转CSV转换器及其用途？',
    intro: '我们的<strong>Excel转CSV转换器</strong>是一款强大的在线工具，可以快速将Excel文件（.xlsx和.xls格式）转换为CSV格式。该工具支持批量处理多个文件、多工作表识别、自定义分隔符和编码格式，满足不同系统和软件的数据导入需求。使用我们的<strong>在线Excel转CSV工具</strong>，您可以轻松处理大量数据文件，无需安装任何软件，所有转换都在浏览器本地完成，确保数据安全。',

    useCasesTitle: 'Excel转CSV的常见应用场景',
    useCases: [
        '将Excel数据导入数据库系统（MySQL、PostgreSQL等）',
        '为数据分析工具（Python pandas、R语言）准备CSV格式数据',
        '在Web应用中批量导入用户数据或产品信息',
        '将Excel报表转换为CSV格式供其他系统使用',
        '处理多工作表Excel文件并分别导出为CSV',
        '为数据迁移项目批量转换历史Excel文件',
        '将Excel数据转换为CSV格式进行版本控制',
        '为API接口准备标准化的CSV数据文件'
    ],

    logoAlt: "Excel转CSV转换器产品预览",
    tipTitle: '专业提示：',
    tipContent: '对于包含特殊字符或换行符的数据，建议使用双引号作为文本限定符，这样可以确保CSV文件在导入其他系统时不会出现格式错误。对于中文数据，推荐使用UTF-8 BOM编码，以确保在Excel中打开时能正确显示中文。',

    conclusion: '<strong>Excel转CSV转换</strong>工具对数据分析师、开发人员、数据管理员以及需要频繁处理Excel文件的用户特别有用。通过使用我们的转换器，您可以快速将Excel数据转换为CSV格式，方便在不同系统和工具之间共享数据。我们的工具支持批量处理、自定义格式设置和实时预览，使数据转换过程变得简单高效，无需安装任何软件。',

    faqTitle: '常见问题解答',
    faqs: [
        {
            question: 'Excel转CSV转换器支持哪些Excel格式？',
            answer: '我们的<strong>在线Excel转CSV工具</strong>支持.xlsx（Office Open XML）和.xls（传统二进制格式）两种主要Excel格式。工具可以自动识别文件格式并进行相应处理，支持多工作表Excel文件，您可以选择转换所有工作表或指定工作表。'
        },
        {
            question: '转换后的CSV文件会保留原始数据格式吗？',
            answer: 'CSV格式本身不包含格式信息（如字体、颜色、公式等），但所有数据内容都会完整保留。日期、数字和文本数据都会正确转换。如果Excel单元格包含公式，转换器会提取公式的计算结果值。'
        },
        {
            question: '如何处理包含特殊字符的Excel数据？',
            answer: '我们的工具支持自定义文本限定符（双引号或单引号），可以正确处理包含逗号、换行符、引号等特殊字符的数据。建议在转换包含特殊字符的数据时，选择双引号作为文本限定符，这样可以确保CSV文件格式正确。'
        },
        {
            question: '可以批量转换多个Excel文件吗？',
            answer: '是的，我们的<strong>Excel转CSV批量转换工具</strong>完全支持批量处理。您可以同时上传多个Excel文件，工具会依次处理每个文件，并在完成后提供批量下载功能，将所有转换后的CSV文件打包成ZIP文件下载。'
        },
        {
            question: '转换后的CSV文件支持哪些编码格式？',
            answer: '我们的工具支持多种编码格式，包括UTF-8、UTF-8 BOM、GBK和ANSI。UTF-8 BOM格式特别适合在Excel中打开包含中文的CSV文件，而UTF-8格式更适合在程序中使用。您可以根据目标系统的需求选择合适的编码格式。'
        },
        {
            question: '可以处理加密或受保护的Excel文件吗？',
            answer: '由于浏览器环境的限制，我们的工具无法处理受密码保护的Excel文件。如果您的Excel文件被加密，请先使用Excel软件解密后再进行转换。对于未加密的Excel文件，我们的工具可以完美处理。'
        }
    ],

    tutorialTitle: '如何使用Excel转CSV转换器',
    steps: [
        {
            title: '上传Excel文件',
            description: '首先上传您想要转换的Excel文件。您可以直接将文件<strong>拖放</strong>到上传区域，或点击浏览并从您的设备中选择文件。我们的工具支持.xlsx和.xls格式，可以同时上传多个文件进行批量转换。',
            note: '您也可以使用"从URL导入"功能，直接输入Excel文件的网络地址进行转换。'
        },
        {
            title: '选择工作表（可选）',
            description: '如果您的Excel文件包含多个工作表，您可以在文件列表中为每个文件选择要转换的工作表。默认情况下，工具会转换所有工作表，每个工作表会生成一个独立的CSV文件。',
            note: '对于大型Excel文件，建议先选择单个工作表进行测试，确认转换结果符合预期后再批量处理。'
        },
        {
            title: '配置CSV格式选项',
            description: '在"CSV格式设置"区域，您可以自定义分隔符（逗号、分号、制表符等）、文本限定符（双引号、单引号或无）、行结束符（Windows/Unix/Mac）和编码格式（UTF-8、UTF-8 BOM、GBK、ANSI）。这些设置会影响转换后的CSV文件格式。',
            note: '对于中文数据，建议使用UTF-8 BOM编码；对于需要在Excel中打开的文件，建议使用双引号作为文本限定符。'
        },
        {
            title: '预览数据（可选）',
            description: '在转换前，您可以点击"数据预览"查看Excel文件的内容。预览功能会显示前几行数据，帮助您确认文件格式和内容是否正确。',
            note: '预览功能可以帮助您发现数据格式问题，避免转换后才发现错误。'
        },
        {
            title: '执行转换',
            description: '点击<strong>"开始转换"</strong>按钮开始处理文件。工具会显示转换进度，包括当前处理的文件、工作表和行数。转换过程完全在浏览器本地进行，不会上传数据到服务器。',
            note: '对于大型文件，转换可能需要一些时间，请耐心等待。您可以在处理日志中查看详细的转换过程。'
        },
        {
            title: '下载转换结果',
            description: '转换完成后，您可以点击每个CSV文件下方的<strong>"下载"</strong>按钮单独保存，或使用顶部的<strong>"批量下载"</strong>按钮将所有CSV文件打包成ZIP文件下载。文件名会根据您的设置自动生成。',
            note: '所有处理都在您的浏览器中进行，因此您的Excel文件永远不会上传到任何服务器，确保数据隐私和安全。'
        }
    ],

    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的Excel转CSV转换器。现在您可以轻松将Excel文件转换为CSV格式，用于数据分析、数据库导入或其他用途。',

    relatedToolsTitle: '您可能感兴趣的相关工具',
    relatedTools: [
        {
            name: '仿生阅读转换器',
            description: '免费在线仿生阅读转换器，实时将文本转换为 Bionic Reading 风格。',
            url: 'https://www.ufreetools.com/tool/bionic-reading-converter'
        },
        {
            name: '图片调整器',
            description: '将图像调整为特定尺寸或按百分比缩放。',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: '印章生成器',
            description: '在线制作各类印章图片，生成公司公章、私章等数字印章。',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        },
        {
            name: '二维码生成器',
            description: '为 URL、文本、联系信息等创建自定义二维码。',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],

    referencesTitle: '参考资源',
    references: [
        {
            name: 'CSV文件格式规范 (RFC 4180)',
            description: '了解CSV文件的标准格式规范和最佳实践',
            url: 'https://tools.ietf.org/html/rfc4180'
        },
        {
            name: 'Office Open XML标准',
            description: '了解Excel .xlsx文件格式的技术规范',
            url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-376/'
        },
        {
            name: '字符编码标准 (Unicode)',
            description: '了解UTF-8、GBK等字符编码标准',
            url: 'https://www.unicode.org/standard/standard.html'
        }
    ]
}

