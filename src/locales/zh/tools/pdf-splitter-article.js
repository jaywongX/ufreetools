export default {
    title: 'PDF分割工具：在线PDF拆分器完整使用指南',
    functionTitle: '什么是PDF分割工具及其核心功能？',
    intro: '我们的<strong>PDF分割工具</strong>是一款功能强大的在线应用，专门用于将大型PDF文档拆分成多个较小的文件。这个<strong>在线PDF拆分器</strong>支持多种分割模式，包括按页面范围、书签结构、页面大小和空白页自动检测等智能分割方式。用户可以精确控制每个分割片段的内容，实现高效的文档管理和分发。我们的工具完全基于浏览器运行，无需安装任何软件，确保您的文档安全性和隐私保护。',
    
    useCasesTitle: 'PDF分割工具的实际应用场景',
    useCases: [
        '将大型报告按章节分割，便于团队协作和分发',
        '从合同文档中提取特定页面，如签名页或条款页',
        '将电子书按章节拆分，方便阅读和管理',
        '从扫描文档中分离不同的表单或证件',
        '将演示文稿按主题分割，用于不同场合展示',
        '从学术论文中提取图表和参考文献部分',
        '将发票批次文档拆分成单独的发票文件',
        '从产品手册中提取特定产品的说明页面'
    ],
    
    tipTitle: '专业提示：',
    tipContent: '使用页面范围分割时，建议先预览PDF文档确定准确的页码。对于包含书签的PDF，选择按书签分割可以自动识别章节结构，大大提高分割效率。',
    
    conclusion: '<strong>PDF文档分割</strong>是现代办公和学术工作中的重要需求。我们的在线PDF分割工具通过提供多种智能分割模式，帮助用户高效管理大型文档。无论是按精确页面范围分割，还是利用书签结构自动分割，都能满足不同场景的需求。工具支持批量处理和高质量输出，确保分割后的文档保持原有的格式和清晰度。',
    
    faqTitle: '常见问题解答',
    faqs: [
        {
            question: '如何使用页面范围功能精确分割PDF？',
            answer: '我们的<strong>PDF页面分割工具</strong>支持灵活的页面范围语法。您可以输入单个页面（如"5"）、连续范围（如"1-10"）或多个不连续范围（如"1-5,8,10-15"）。系统会自动解析您的输入并创建相应的分割文件。建议在分割前先查看PDF的总页数，确保输入的页码在有效范围内。'
        },
        {
            question: '按书签分割功能是如何工作的？',
            answer: '按书签分割功能会自动识别PDF文档中的书签结构，并根据书签层级创建分割点。这种方式特别适合处理有明确章节结构的文档，如技术手册、学术论文或电子书。如果PDF没有书签，系统会提示您选择其他分割模式。'
        },
        {
            question: '什么是按页面大小分割，适用于哪些场景？',
            answer: '按页面大小分割会检测PDF中不同尺寸的页面，并将相同尺寸的页面归为一组。这种方式适合处理混合格式的文档，比如包含A4正文页面和A3图表页面的报告。<strong>智能PDF分割器</strong>会自动识别页面尺寸差异并创建相应的分组。'
        },
        {
            question: '空白页检测分割如何提高文档处理效率？',
            answer: '空白页检测功能会自动识别PDF中的空白或近似空白页面，并以这些页面作为自然分割点。这对于处理扫描文档特别有用，因为扫描过程中经常会产生空白页。系统会智能跳过这些空白页，确保每个分割文件都包含有意义的内容。'
        },
        {
            question: '分割后的PDF文件质量会受到影响吗？',
            answer: '我们的工具采用无损分割技术，直接复制原始PDF页面而不进行重新渲染，因此分割后的文件质量与原文档完全相同。您可以通过输出设置调整预览分辨率和图像质量参数，但这些设置只影响预览显示，不会改变最终输出文件的质量。所有文本、图像和矢量图形都会完整保留。'
        }
    ],
    
    tutorialTitle: '如何使用PDF分割工具',
    steps: [
        {
            title: '上传PDF文件',
            description: '首先上传您需要分割的PDF文件。您可以通过<strong>拖放</strong>方式直接将文件拖到上传区域，或点击上传按钮选择文件。工具还支持从URL直接导入PDF文件，方便处理网络上的文档。',
            note: '支持同时上传多个PDF文件进行批量处理。每个文件都会显示详细的信息包括文件大小和页数。'
        },
        {
            title: '选择分割模式',
            description: '根据您的需求选择合适的分割模式。<strong>按页面范围分割</strong>适合精确控制；按书签分割适合有结构的文档；按页面大小分割适合混合格式文档；按空白页分割适合扫描文档。',
            note: '不同的分割模式适用于不同类型的文档，选择正确的模式可以大大提高分割效率。'
        },
        {
            title: '设置分割参数',
            description: '如果选择按页面范围分割，请在页面范围输入框中指定要提取的页面。支持多种格式：单页（5）、范围（1-10）、多个范围（1-5,8,10-15）。系统会实时验证输入的有效性。',
            note: '页面编号从1开始计算。您可以参考文件信息中显示的总页数来确定范围。'
        },
        {
            title: '预览文档内容',
            description: '上传后系统会自动生成PDF的缩略图预览，帮助您确认文档内容和页面顺序。预览功能让您可以直观地看到每一页的内容，确保分割设置的准确性。',
            note: '缩略图预览有助于您更好地理解文档结构，特别是在设置页面范围时非常有用。'
        },
        {
            title: '调整输出设置',
            description: '在输出设置区域，您可以调整分辨率（72-300 DPI）和图像质量参数。这些设置主要影响预览显示效果，实际分割的PDF文件会保持原始质量。',
            note: '较高的分辨率设置会提供更清晰的预览效果，但可能会增加处理时间。'
        },
        {
            title: '执行分割并下载',
            description: '点击<strong>"开始分割"</strong>按钮执行分割操作。处理完成后，分割结果会显示在右侧输出区域，每个分割文件都包含预览和下载选项。您可以单独下载每个文件，或使用批量下载功能将所有文件打包成ZIP。',
            note: '所有处理都在您的浏览器中完成，确保文档安全性。分割后的文件会保持原始PDF的所有格式和属性。'
        }
    ],
    
    successTitle: '恭喜！',
    successContent: '您已成功掌握PDF分割工具的使用方法。现在您可以高效地将大型PDF文档分割成所需的片段，提高文档管理和分发效率。',
    
    relatedToolsTitle: '您可能感兴趣的相关工具',
    relatedTools: [
        {
            name: 'PDF合并工具',
            description: '将多个PDF文件合并成一个文档，支持页面排序和质量控制。',
            url: 'https://www.ufreetools.com/tool/merge-pdf-online'
        },
        {
            name: 'PDF转Excel转换器',
            description: '免费在线PDF转Excel转换器，将PDF文件中的表格数据提取并转换为可编辑的Excel电子表格。',
            url: 'https://www.ufreetools.com/tool/pdf-to-excel-converter'
        },
        {
            name: 'PDF转图片转换器',
            description: '将PDF文档的每一页转换为高质量的图像文件，支持多种输出格式。',
            url: 'https://www.ufreetools.com/tool/pdf-to-image-converter'
        },
        {
            name: 'PDF转Word转换器',
            description: '将PDF文档转换为可编辑的Word格式，保留原始布局和格式。',
            url: 'https://www.ufreetools.com/tool/pdf-to-word-converter'
        },
    ],
    
    referencesTitle: '参考资源',
    references: [
        {
            name: 'PDF技术概述',
            description: '了解PDF文件格式的技术细节',
            url: 'https://opensource.adobe.com/dc-acrobat-sdk-docs/standards/pdfstandards/pdf/PDF32000_2008.pdf'
        },
        {
            name: 'Office Open XML标准',
            description: '关于Excel电子表格格式的技术规范',
            url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-376/'
        },
        {
            name: 'Web内容无障碍指南(WCAG)',
            description: '关于文档可访问性的指南',
            url: 'https://www.w3.org/WAI/standards-guidelines/wcag/'
        }
    ]
}