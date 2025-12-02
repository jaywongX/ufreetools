export default {
    title: 'CSV转Excel转换器：高保真批量转换与多表格导出指南',
    functionTitle: 'CSV转Excel转换器如何解决跨系统数据交互难题？',
    intro: '<p>CSV转Excel转换器面向数据分析、系统集成和批量导入场景，能够在浏览器端直接完成CSV、TSV、TXT等文本数据到Excel工作簿的转换。工具支持自动编码识别、分隔符智能检测、多文件批量处理、实时日志与数据预览，让团队无需安装桌面软件，即可快速生成符合规范的.xlsx成果。</p>',
    useCasesTitle: '典型应用场景',
    useCases: [
        '将电商平台导出的CSV订单数据转换为Excel报表，方便财务审核与归档',
        '把日志采集系统生成的TSV文件批量转换为多工作表Excel文件，供BI工具分析',
        '在CRM或ERP系统上线前，将历史CSV资料整理为Excel模板，便于批量导入',
        '为跨部门协作准备带格式的Excel文件，让非技术成员可以安全查看数据',
        '在数据交付或招投标中生成可读性更高的Excel附件，满足审计合规要求',
        '把API返回的CSV批量转换为Excel，结合图表或宏模板进行快速分析',
        '整理物联网设备日志CSV，按照设备类型拆分为多工作表的Excel文档',
        '在培训或授课场景中，将示例CSV数据一键转换为Excel练习文件'
    ],
    logoAlt: "CSV转Excel转换器产品预览",
    tipTitle: '专业提示：',
    conclusion: '<p>依托纯前端实现的 <strong>CSV转Excel转换器</strong>，数据工程师与业务同学可以在不上传敏感文件的前提下完成批量转换、标准化命名与多工作表输出。结合日志记录和编码检测，可最大程度避免因格式不一致导致的导入失败。如果需要进一步清洗或拆分数据，可搭配 <a href=\"https://www.ufreetools.com/tool/excel-to-csv-converter\" target=\"_blank\">Excel转CSV转换器</a> 进行双向转换；若想了解CSV标准，建议查阅 <a href=\"https://tools.ietf.org/html/rfc4180\" target=\"_blank\" rel=\"noopener noreferrer\">RFC 4180</a> 以获取权威规范。</p>',
    faqTitle: '常见问题解答',
    faqs: [
        {
            question: 'CSV转Excel转换器支持哪些分隔符与文本限定符？',
            answer: '<p>工具内置逗号、分号、制表符、竖线以及自定义分隔符选项，同时支持双引号、单引号或无限定符的复杂CSV。若选择“自动检测”，系统会根据前几行数据计算最可能的分隔符组合，确保转换后的Excel列数准确。</p>'
        },
        {
            question: '如何处理不同编码的CSV文件？',
            answer: '<p>我们提供自动编码识别，并允许手动指定UTF-8、UTF-8 BOM、UTF-16 LE、GBK等常见编码。若遇到特殊编码，可先在外部工具中转换为UTF-8再上传，以保证 Excel 中的中文或符号不会出现乱码。</p>'
        },
        {
            question: '能否把多个CSV文件合并到同一个Excel工作簿？',
            answer: '<p>可以。在“Excel工作簿设置”中勾选“合并为单个Excel文件”，系统会为每个CSV生成一个工作表，表名可基于文件名或自定义前缀，并可附加时间戳，方便追踪来源。</p>'
        },
        {
            question: '转换后的Excel会保留CSV中的表头和空行吗？',
            answer: '<p>默认保持第一行作为表头，同时完整保留空行、空单元格以及原始数据顺序。如需忽略表头，可在设置中关闭“第一行包含表头”选项，再重新执行转换，系统会按纯数据模式生成Excel。</p>'
        },
        {
            question: '批量转换时如何查看过程与排查错误？',
            answer: '<p>每次转换都会生成处理日志，记录已解析文件、创建的工作表、行列统计以及可能出现的错误。您可以展开日志面板或点击“一键复制”与团队共享，方便在代码部署或数据交付前排查问题。</p>'
        }
    ],
    tutorialTitle: '操作指南',
    steps: [
        {
            title: '上传或导入CSV文件',
            description: '点击上传按钮或将文件拖拽到指定区域，支持多文件批量处理。也可在“从URL导入”中粘贴公开的CSV链接，系统会自动抓取并加入队列。',
            note: '单个文件建议控制在50MB以内，大文件可拆分后分批转换。'
        },
        {
            title: '检查自动识别结果',
            description: '系统会尝试检测编码与分隔符，并展示前几行原始数据。若识别结果与预期不符，可手动选择编码或分隔符，确保列数与中文字符显示正确。',
            note: '必要时，可先在第三方工具中转换编码后再次上传。'
        },
        {
            title: '配置CSV解析选项',
            description: '在“CSV解析设置”里调整分隔符、文本限定符、行结束符及表头选项。不同语言或系统生成的CSV差异较大，建议根据来源系统的导出规则进行设置。',
            note: '保持“第一行包含表头”可在 Excel 中生成表头行。'
        },
        {
            title: '设置Excel工作簿策略',
            description: '自定义工作簿名、工作表命名规则以及是否合并成一个Excel。对于多文件汇总的场景，可启用“合并为单个Excel文件”并添加时间戳，方便后续追踪。',
            note: '若取消合并，工具会为每个CSV输出一个独立的.xlsx文件。'
        },
        {
            title: '执行转换并监控日志',
            description: '点击“转换为Excel”后，系统会显示实时进度条，并在日志中记录解析、建表、统计等步骤。遇到错误会停止当前文件的处理并在日志中展示详情。',
            note: '日志支持展开、折叠与一键复制，便于协作排查。'
        },
        {
            title: '下载Excel或批量打包',
            description: '转换完成后，可逐个下载Excel文件，或点击“批量下载 (ZIP)”一次性获取全部成果。列表会显示每个工作簿的工作表名称、文件大小与预览片段，方便快速核对。',
            note: '所有操作均在本地浏览器完成，无需上传到服务器，确保数据安全。'
        }
    ],
    successTitle: '完成转换',
    successContent: '恭喜！您已学会使用CSV转Excel转换器，将松散的文本数据快速整理为结构化的Excel成果，用于分析、汇报或系统对接。',
    relatedToolsTitle: '相关工具推荐',
    relatedTools: [
        {
            name: 'Excel转CSV转换器',
            description: '将Excel工作簿批量导出为CSV，保持编码与分隔符一致。',
            url: 'https://www.ufreetools.com/tool/excel-to-csv-converter'
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
            name: 'RFC 4180 - CSV标准',
            description: '了解CSV文件格式的正式规范与字段约定。',
            url: 'https://tools.ietf.org/html/rfc4180'
        },
        {
            name: 'Microsoft Excel Open XML 规范',
            description: '深入了解.xlsx 文件结构与兼容性要求。',
            url: 'https://learn.microsoft.com/en-us/openspecs/office_standards/ms-xlsx/' 
        },
        {
            name: 'WHATWG Encoding 标准',
            description: '浏览器支持的文本编码列表与实现细节。',
            url: 'https://encoding.spec.whatwg.org/'
        }
    ]
}

