export default {
    title: 'JSON差异对比工具：在线JSON文件比较检查器使用指南',
    functionTitle: '什么是JSON差异对比工具及其核心功能？',
    intro: '我们的<strong>JSON差异对比工具</strong>是一款专业的在线JSON文件比较检查器，能够快速识别和高亮显示两个JSON文件之间的差异。这款<strong>在线JSON比较工具</strong>通过智能算法分析JSON数据结构，准确检测新增、删除、修改的字段和值，为开发者提供直观的差异可视化界面。使用我们的<strong>JSON文件差异检查器</strong>，您可以轻松进行API响应对比、配置文件变更检测、数据迁移验证等工作，大幅提升开发效率和代码质量。',
    
    useCasesTitle: 'JSON差异对比的实际应用场景',
    useCases: [
        'API接口开发中对比不同版本的响应数据结构变化',
        '配置文件管理中检测环境配置的差异和变更',
        '数据库迁移过程中验证数据结构的一致性',
        '前端开发中对比Mock数据与真实API数据的差异',
        '微服务架构中检查服务间数据格式的兼容性',
        '版本控制中追踪JSON配置文件的历史变更',
        '测试环境与生产环境数据结构的对比验证',
        '第三方API集成时对比文档示例与实际返回数据',
        'JSON Schema验证和数据格式标准化检查',
        '团队协作中审查JSON数据结构的修改内容'
    ],
    
    tipTitle: '专业提示：',
    tipContent: '使用JSON差异对比工具时，建议先格式化JSON数据以获得更清晰的比较结果。对于大型JSON文件，可以启用"仅显示差异"选项来聚焦关键变更内容。',
    
    conclusion: '<strong>JSON差异检测工具</strong>是现代软件开发中不可或缺的实用工具。通过使用我们的在线JSON比较器，开发者可以快速定位数据结构变化，减少因数据不一致导致的bug，提高代码审查效率。我们的工具支持深度比较、忽略顺序、自定义比较选项等高级功能，满足各种复杂的JSON数据对比需求。',
    
    faqTitle: '常见问题解答',
    faqs: [
        {
            question: 'JSON差异对比工具如何检测数据结构的变化？',
            answer: '我们的<strong>JSON比较检查器</strong>采用深度遍历算法，逐层分析JSON对象的键值对结构。工具会识别四种类型的变化：新增字段（绿色高亮）、删除字段（红色高亮）、修改值（黄色高亮）和未变化字段（灰色显示）。对于嵌套对象和数组，工具会递归比较每个层级的数据，确保不遗漏任何细微差异。'
        },
        {
            question: '这个在线JSON差异工具支持哪些比较选项？',
            answer: '我们的<strong>JSON文件对比工具</strong>提供多种灵活的比较选项：忽略数组元素顺序、忽略字符串大小写差异、忽略空白字符、仅显示差异内容等。这些选项帮助您根据具体需求定制比较规则，例如在API测试中忽略数组顺序，或在配置文件比较中忽略格式差异。'
        },
        {
            question: '如何使用JSON差异检查器进行大文件比较？',
            answer: '对于大型JSON文件，我们的<strong>在线JSON比较器</strong>采用了优化的算法和渲染策略。建议启用"仅显示差异"选项来减少显示内容，使用格式化功能确保数据结构清晰，并可以导出差异报告进行离线分析。工具支持处理复杂的嵌套结构和大量数据字段。'
        },
        {
            question: 'JSON比较工具的数据安全性如何保障？',
            answer: '我们的<strong>JSON差异对比工具</strong>完全在浏览器本地运行，您的JSON数据不会上传到任何服务器。所有的比较计算、差异分析和结果展示都在客户端完成，确保敏感数据的安全性。这对于处理包含商业机密或个人信息的JSON文件尤为重要。'
        },
        {
            question: '如何导出和分享JSON差异比较结果？',
            answer: '我们的工具提供多种结果导出选项。您可以导出包含差异统计和详细变更内容的文本报告，复制比较结果到剪贴板，或保存差异高亮的HTML格式文件。这些功能便于在团队中分享比较结果，或将差异报告集成到开发文档中。'
        }
    ],
    
    tutorialTitle: '如何使用JSON差异对比工具',
    steps: [
        {
            title: '准备JSON数据',
            description: '首先准备需要比较的两个JSON文件或数据。您可以直接<strong>复制粘贴JSON内容</strong>到左侧的输入框中，或者点击"加载示例"按钮查看工具的演示效果。确保JSON数据格式正确，工具会实时显示JSON的有效性状态。',
            note: '支持从文件、API响应、剪贴板等多种来源获取JSON数据。'
        },
        {
            title: '输入对比数据',
            description: '在左侧面板的两个文本框中分别输入<strong>原始JSON</strong>和<strong>修改后的JSON</strong>数据。工具会自动验证JSON语法的正确性，并显示行数统计。如果JSON格式有误，会显示红色的"无效JSON"提示。',
            note: '可以使用"格式化JSON"按钮自动整理JSON数据的缩进和格式。'
        },
        {
            title: '配置比较选项',
            description: '根据您的比较需求，在"比较选项"区域选择合适的设置。例如，如果您关心数据内容而不关心数组顺序，可以勾选<strong>"忽略数组顺序"</strong>选项。对于大型JSON文件，建议启用"仅显示差异"来聚焦变更内容。',
            note: '不同的选项组合适用于不同的使用场景，可以根据需要灵活调整。'
        },
        {
            title: '执行差异比较',
            description: '点击<strong>"开始比较"</strong>按钮执行JSON差异分析。工具会快速处理数据并在右侧面板显示详细的比较结果，包括差异统计和高亮显示的变更内容。绿色表示新增，红色表示删除，黄色表示修改。',
            note: '比较过程完全在本地进行，确保数据安全和处理速度。'
        },
        {
            title: '分析差异结果',
            description: '在右侧的结果面板中查看详细的差异分析。顶部的统计信息显示新增、删除、修改和未变化的字段数量。下方的详细差异列表展示每个变更的具体位置和内容，帮助您快速定位关键变化。',
            note: '可以通过滚动查看完整的差异列表，每个差异项都有清晰的路径标识。'
        },
        {
            title: '导出比较报告',
            description: '完成差异分析后，点击<strong>"导出报告"</strong>按钮将比较结果保存为文本文件。报告包含完整的差异统计、变更详情和时间戳，便于存档或与团队成员分享。',
            note: '导出的报告格式清晰，适合集成到开发文档或变更记录中。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已经掌握了JSON差异对比工具的使用方法。现在可以高效地进行JSON数据比较，快速识别数据结构变化，提升开发和测试工作的效率。',
    
    relatedToolsTitle: '您可能感兴趣的相关工具',
    relatedTools: [
        {
            name: 'JSON格式化工具',
            description: '在线JSON格式化和压缩工具，美化JSON数据结构。',
            url: 'https://www.ufreetools.com/tool/json-formatter'
        },
        {
            name: 'Base64编解码',
            description: '在线Base64编码解码工具，支持文本和文件格式转换。',
            url: 'https://www.ufreetools.com/tool/base64-encoder-decoder'
        },
        {
            name: 'URL编解码工具',
            description: '在线URL编码解码工具，处理特殊字符和中文URL。',
            url: 'https://www.ufreetools.com/tool/url-encode-decode'
        },
        {
            name: '在线哈希计算器',
            description: '免费在线哈希计算器，支持 SHA-256、MD5、SHA-3、BLAKE3、SM3 等多种加密与校验算法，适用于文件完整性验证、数据安全处理等场景。',
            url: 'https://www.ufreetools.com/tool/hash-calculator'
        }
    ],
    
    referencesTitle: '参考资源',
    references: [
        {
            name: 'JSON官方规范文档',
            description: 'JSON数据交换格式的官方标准规范和语法说明',
            url: 'https://www.json.org/json-zh.html'
        },
        {
            name: 'MDN JSON文档',
            description: 'Mozilla开发者网络提供的JSON使用指南和最佳实践',
            url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON'
        },
        {
            name: 'RFC 7159 JSON标准',
            description: 'JSON数据交换格式的互联网工程任务组标准文档',
            url: 'https://tools.ietf.org/html/rfc7159'
        },
        {
            name: 'JSON Schema规范',
            description: 'JSON数据验证和文档化的标准规范',
            url: 'https://json-schema.org/'
        }
    ]
}