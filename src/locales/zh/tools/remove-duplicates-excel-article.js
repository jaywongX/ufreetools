export default {
    title: 'Excel去重工具：在线表格数据去重器使用指南',
    functionTitle: '什么是Excel去重工具及其用途？',
    intro: '我们的<strong>Excel去重工具</strong>是一款专业的在线数据处理应用，能够智能识别和删除Excel表格中的重复数据。该工具支持多种文件格式（XLSX、XLS、CSV），提供灵活的去重规则配置，包括整行去重、单列去重和多列组合去重。通过使用我们的<strong>在线Excel去重器</strong>，您可以快速清理数据，提高数据质量，支持批量处理多个文件，并以多种格式导出结果。',
    
    useCasesTitle: 'Excel去重工具的常见应用场景',
    useCases: [
        '清理客户数据库中的重复联系信息',
        '合并多个Excel文件时去除重复记录',
        '处理调查问卷数据，删除重复提交',
        '整理产品目录，去除重复商品信息',
        '清理财务数据，确保交易记录唯一性',
        '处理员工信息表，删除重复员工记录',
        '整理销售数据，去除重复订单',
        '清理邮件列表，删除重复邮箱地址'
    ],
    
    tipTitle: '专业提示：',
    tipContent: '在使用Excel去重工具时，建议先备份原始数据。对于重要数据，可以先使用"预览"功能查看去重效果，确认无误后再进行实际去重操作。',
    
    conclusion: '<strong>Excel数据去重</strong>工具对数据分析师、业务人员、研究人员以及任何需要处理大量表格数据的人特别有用。通过使用我们的智能去重器处理Excel数据，您可以快速识别和删除重复记录，提高数据质量，为后续的数据分析工作奠定坚实基础。我们的工具使这一过程变得简单高效，无需安装任何软件。',
    
    faqTitle: '常见问题解答',
    faqs: [
        {
            question: 'Excel去重工具支持哪些文件格式？',
            answer: '我们的<strong>在线Excel去重器</strong>支持多种主流表格格式，包括XLSX（Excel 2007及以上版本）、XLS（Excel 97-2003版本）和CSV（逗号分隔值）文件。工具会自动识别文件格式并进行相应的解析处理。'
        },
        {
            question: '去重操作会影响原始数据吗？',
            answer: '不会，我们的工具采用客户端处理方式，所有数据都在您的浏览器中处理，不会上传到服务器。原始文件保持不变，去重结果会生成新的文件供您下载。'
        },
        {
            question: '如何设置自定义的去重规则？',
            answer: '我们的<strong>Excel数据去重</strong>工具提供三种去重模式：整行去重（完全匹配所有列）、单列去重（指定关键列）和多列组合去重（自定义列组合）。您还可以设置大小写敏感、空格处理、模糊匹配等高级选项。'
        },
        {
            question: '可以同时处理多个Excel文件吗？',
            answer: '是的，我们的工具支持批量处理。您可以同时上传多个Excel文件，工具会为每个文件单独进行去重处理，并提供批量下载功能，将所有去重结果打包成ZIP文件。'
        },
        {
            question: '去重后的数据可以导出为哪些格式？',
            answer: '去重后的数据可以导出为Excel格式（XLSX）、CSV格式和JSON格式。Excel格式会保留原始格式和样式，CSV格式适合数据交换，JSON格式便于程序处理。'
        },
        {
            question: '工具如何处理包含公式的Excel文件？',
            answer: '我们的工具会读取Excel文件中的实际值，包括公式的计算结果。如果公式引用了其他单元格，工具会显示公式的最终计算结果，而不是公式本身。'
        }
    ],
    
    tutorialTitle: '如何使用Excel去重工具',
    steps: [
        {
            title: '上传Excel文件',
            description: '首先上传您需要去重的Excel文件。您可以直接将文件<strong>拖放</strong>到上传区域，或点击浏览并从您的设备中选择文件。我们的工具支持XLSX、XLS和CSV格式。',
            note: '您可以一次上传多个文件进行批量处理。'
        },
        {
            title: '预览和检查数据',
            description: '上传后，您将在预览区域看到原始数据的表格视图。检查数据结构和内容，确认这是您要处理的数据。工具会自动识别表头和数据类型。',
            note: '如果数据包含特殊字符或编码问题，工具会自动处理。'
        },
        {
            title: '配置去重规则',
            description: '在去重规则配置区域，选择适合的去重方式：<strong>整行去重</strong>（完全匹配所有列）、<strong>单列去重</strong>（指定关键列）或<strong>多列组合去重</strong>（自定义列组合）。设置大小写敏感、空格处理等选项。',
            note: '建议先使用预览功能查看去重效果，确认规则设置正确。'
        },
        {
            title: '执行去重操作',
            description: '点击<strong>"开始去重"</strong>按钮处理您的数据。工具会显示处理进度，并在完成后展示去重统计信息，包括原始行数、重复行数和去重后行数。',
            note: '对于大文件，处理可能需要几秒钟时间，请耐心等待。'
        },
        {
            title: '查看和验证结果',
            description: '去重完成后，您可以查看结果预览。工具会高亮显示重复项和保留项，帮助您验证去重效果。您可以切换显示模式，查看重复项或唯一项。',
            note: '使用缩放和滚动功能可以更好地查看数据细节。'
        },
        {
            title: '导出去重结果',
            description: '选择导出格式（Excel、CSV或JSON），设置导出选项（如是否包含表头、文件编码等），然后点击<strong>"下载结果"</strong>按钮保存去重后的数据。',
            note: 'Excel格式会保留原始格式，CSV格式适合数据交换，JSON格式便于程序处理。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功学习如何使用我们的Excel去重工具。现在您可以轻松处理各种表格数据，快速识别和删除重复记录，提高数据质量。',
    
    relatedToolsTitle: '您可能感兴趣的相关工具',
    relatedTools: [
        {
            name: 'PDF合并器',
            description: '将多个PDF文件合并为一个完整的PDF文档，支持跨文件页面重新排序。',
            url: 'https://www.ufreetools.com/tool/merge-pdf-online'
        },
        {
            name: 'PDF拆分器',
            description: '将大型PDF文档拆分为多个较小的PDF文件，支持自定义拆分页面。',
            url: 'https://www.ufreetools.com/tool/pdf-splitter'
        },
        {
            name: 'PDF转Word转换器',
            description: '将PDF文档转换为可编辑的Word格式，保留原始布局和格式。',
            url: 'https://www.ufreetools.com/tool/pdf-to-word-converter'
        },
        {
            name: 'PDF转图片转换器',
            description: '将PDF文档的每一页转换为高质量的图像文件，支持多种输出格式。',
            url: 'https://www.ufreetools.com/tool/pdf-to-image-converter'
        }
    ],
    
    referencesTitle: '参考资源',
    references: [
        {
            name: 'Excel数据处理最佳实践',
            description: '了解Excel数据处理的专业技巧和方法',
            url: 'https://support.microsoft.com/zh-cn/excel'
        },
        {
            name: '数据质量管理指南',
            description: '关于数据质量管理和重复数据处理的专业资源',
            url: 'https://www.ibm.com/topics/data-quality'
        },
        {
            name: 'Excel函数参考',
            description: 'Microsoft Excel官方函数参考文档',
            url: 'https://support.microsoft.com/en-us/office/excel-functions-by-category-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb'
        }
    ]
}
