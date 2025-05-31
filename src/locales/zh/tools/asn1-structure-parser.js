export default {
    name: "ASN.1结构解析器",
    description: "一个全面的工具，用于解码、可视化和分析加密、电信和网络协议中使用的ASN.1编码数据结构。支持PEM、HEX、Base64和DER格式，具有交互式树状可视化和多种导出选项。",
    input: "输入数据",
    output: "解析结构",
    inputFormat: "输入格式",
    inputPlaceholder: "请输入选定格式的ASN.1数据...",
    loadExample: "加载示例",
    clickToUpload: "点击上传文件",
    orDragDrop: "或拖放文件",
    supportedFormats: "支持PEM、DER、HEX、Base64文件",
    showHexDump: "显示十六进制转储",
    trimLargeData: "截断大数据值",
    useDefinitionFile: "使用ASN.1定义文件进行解析",
    error: "错误",
    noData: "没有ASN.1数据可显示。请在输入区域输入数据或上传文件。",
    treeStructure: "ASN.1树结构",
    hexDump: "十六进制转储",
    parseError: "解析ASN.1数据失败。请检查您的输入格式和数据。",
    invalidPEM: "无效的PEM格式。请确保具有正确的BEGIN/END标记。",
    invalidHex: "无效的十六进制数据。仅允许十六进制字符(0-9, A-F)。",
    invalidBase64: "无效的Base64数据。",
    derTextNotSupported: "DER格式不能作为文本输入。请上传DER文件。",
    unsupportedFormat: "选择了不支持的输入格式。",
    unexpectedEOF: "解析ASN.1结构时意外遇到数据结束。",
    lengthTooLong: "ASN.1长度字段太大，无法处理。",
    fileReadError: "读取上传文件时出错。",
    fileTooLarge: "文件太大。最大大小为10MB。",

    // Feature descriptions
    featureHeading: "主要功能",
    feature1: "多格式支持：解析PEM、HEX、Base64或DER格式的ASN.1数据",
    feature2: "交互式树视图：通过可展开的节点可视化ASN.1结构",
    feature3: "十六进制转储可视化：查看原始数据字节，悬停在节点上时突出显示",
    feature4: "OID解析：常见对象标识符显示其名称",
    feature5: "大数据处理：可选择截断大值以提高可读性",

    // Common ASN.1 applications
    applicationsHeading: "常见应用",
    application1: "X.509证书：查看和分析SSL/TLS证书结构",
    application2: "PKCS文件：检查私钥、证书请求和证书存储格式",
    application3: "CMS/PKCS#7：检查已签名和加密的数据结构",
    application4: "SNMP MIB：解码简单网络管理协议数据",

    // Instructions
    instructionsHeading: "使用方法",
    step1: "选择输入数据的格式（PEM、HEX、Base64、DER）",
    step2: "在文本区域输入数据或上传文件",
    step3: "解析器将自动处理数据并显示结构",
    step4: "通过展开/折叠节点探索ASN.1树",
    step5: "将鼠标悬停在节点上以突出显示十六进制转储中的相应字节",

    // Export
    exportAsJson: "导出为JSON",
    exportFormat: "导出格式",
    exportSuccess: "结构导出成功",
    exportFailed: "导出结构失败",
    noDataToExport: "没有数据可导出",
    copiedToClipboard: "已复制到剪贴板",
    copyFailed: "复制失败",
    hexSeparator: "十六进制分隔符",
    none: "无",
    space: "空格",
    colon: "冒号",
    dash: "破折号",
    dot: "点",
    colorHighlight: "按类型着色",
    settings: "设置",
    displayOptions: "显示选项",
    advancedOptions: "高级选项",
    expandAllNodes: "展开所有节点",
    hexDumpDisabled: "十六进制转储显示已禁用。在设置中启用它以查看原始数据字节。",
    copyValue: "复制值",
    expandAll: "展开",
    collapseAll: "折叠",
    autoScroll: "自动滚动",
    article: {
        title: "ASN.1结构解析器 - 解码和可视化ASN.1编码数据",

        // Introduction section
        introTitle: "什么是ASN.1结构解析器？",
        introPara1: "ASN.1结构解析器是一个强大的工具，用于解码和可视化抽象语法标记一（Abstract Syntax Notation One，ASN.1）编码的数据结构。ASN.1是一种标准接口描述语言，用于定义可以跨平台序列化和反序列化的数据结构。它广泛应用于电信和计算机网络中，特别是在加密协议中。",
        introPara2: "我们的ASN.1结构解析器提供了一种交互式方法来检查复杂的ASN.1结构，支持多种输入格式，包括PEM、HEX、Base64和DER。它提供基于树的可视化，使您能够轻松探索嵌套的ASN.1元素，对开发人员、安全研究人员和网络工程师非常有价值。",

        applicationTitle: "ASN.1解析器的常见应用",
        application1: "<strong>X.509证书分析</strong>：检查SSL/TLS证书结构和内容，用于安全审计和故障排除。",
        application2: "<strong>PKCS文件检查</strong>：详细分析私钥、证书请求和证书存储格式。",
        application3: "<strong>加密消息语法（CMS）</strong>：检查用于安全消息协议的签名和加密数据结构。",
        application4: "<strong>网络协议分析</strong>：解码SNMP、LDAP和H.323等协议中使用的ASN.1数据。",
        introPara3: "ASN.1结构解析对于理解现代安全系统中使用的复杂数据格式至关重要。我们的解析器通过提供彩色编码可视化、可展开的树视图和编码数据的十六进制转储，使这一过程变得直观。",

        // FAQ section
        faqTitle: "关于ASN.1结构解析器的常见问题",

        faq1Question: "ASN.1结构解析器可以接受哪些格式？",
        faq1Answer: "我们的ASN.1结构解析器支持多种输入格式，包括PEM（Privacy Enhanced Mail）、HEX（十六进制）、Base64和DER（Distinguished Encoding Rules）二进制文件。这种灵活性使您能够处理来自各种源的ASN.1数据，而无需格式转换工具。",

        faq2Question: "如何使用ASN.1解析器分析X.509证书？",
        faq2Answer: "要分析X.509证书，只需选择'PEM'作为输入格式，并将您的证书（包括BEGIN/END CERTIFICATE标记）粘贴到输入区域。解析器将自动解码结构并将其显示为交互式树，允许您展开节点并检查特定的证书字段，如主题、颁发者、有效期和扩展。",

        faq3Question: "我可以导出解析后的ASN.1结构用于文档吗？",
        faq3Answer: "是的，您可以通过点击设置面板中的\"导出为JSON\"按钮将解析后的ASN.1结构导出为JSON。此功能对于记录结构、与同事共享或在自己的应用程序中进一步处理结构化数据非常有用。",

        faq4Question: "ASN.1、DER和BER编码之间有什么区别？",
        faq4Answer: "ASN.1（抽象语法标记一）是用于定义数据结构的语言，而DER（区分编码规则）和BER（基本编码规则）是确定ASN.1结构如何转换为二进制格式的特定编码规则。DER是BER的一个子集，确保每个ASN.1值只有一种编码，因此在加密应用中更受青睐。我们的解析器主要处理DER编码的ASN.1结构，这在安全应用中最为常见。",

        faq5Question: "ASN.1解析器如何处理对象标识符（OID）？",
        faq5Answer: "ASN.1结构解析器会自动识别常见的对象标识符（OID），并在数字OID值旁边显示其友好名称。例如，'1.2.840.113549.1.1.11'将显示为'sha256WithRSAEncryption'。此功能使理解X.509证书和加密消息等复杂结构中不同元素的用途变得更加容易。",

        // Tutorial section
        tutorialTitle: "如何使用ASN.1结构解析器",

        step1Title: "步骤1：选择输入格式",
        step1Content: "首先，为您的ASN.1数据选择适当的输入格式。使用输入面板中的单选按钮从PEM、HEX、Base64或DER选项中进行选择。您选择的格式决定了解析器如何解释您的输入数据。",

        step2Title: "步骤2：输入或上传ASN.1数据",
        step2Content: "将您的ASN.1编码数据输入到文本区域，或通过点击上传区域上传文件。对于PEM格式，确保您的数据包含正确的BEGIN/END标记。对于十六进制输入，您可以使用各种分隔符（空格、冒号等），这些可以在设置面板中配置。",
        step2Example: "-----BEGIN CERTIFICATE-----\nMIIDazCCAlOgAwIBAgIUXF3AmOAMqvdXdFLJV8C5c9K6cI8wDQYJKoZIhvcNAQEL\n...\n-----END CERTIFICATE-----",

        step3Title: "步骤3：探索ASN.1树结构",
        step3Content: "一旦数据被解析，ASN.1树结构将显示在左下方面板中。您可以通过点击三角形来展开和折叠节点。每个节点显示其标签类型（如SEQUENCE、INTEGER、OBJECT IDENTIFIER）和值。颜色编码有助于区分不同的ASN.1类型。",

        step4Title: "步骤4：检查十六进制表示",
        step4Content: "如果启用了\"显示十六进制转储\"选项，右侧面板将显示ASN.1数据的十六进制转储。将鼠标悬停在树中的元素上将突出显示十六进制转储中的相应字节，帮助您理解编码的二进制结构。",
        step4Example: "00000000 30 82 03 6a 30 82 02 52 a0 03 02 01 02 02 14 5c 0..j0..R........\\",

        step5Title: "步骤5：配置显示选项",
        step5Content: "使用设置面板根据您的需求自定义显示。选项包括显示/隐藏十六进制转储、截断大数据值以提高可读性、选择十六进制分隔符以及按类型启用颜色突出显示。您还可以一次性展开所有节点，以获得结构的完整视图。",

        // Resources section
        resourcesTitle: "其他资源",

        relatedToolsTitle: "相关工具",
        relatedTool1: "Base64转换器 - 编码和解码Base64数据",
        relatedTool2: "Base64 Hex 转换器 - 在 Base64 和十六进制格式之间轻松转换，支持自定义分隔符和大小写",
        relatedTool3: "证书解码器 - 详细分析X.509证书",

        externalResourcesTitle: "外部资源",
        externalResource1: "ITU-T ASN.1介绍 - ASN.1标准的官方文档",
        externalResource2: "RFC 5280 - 互联网X.509公钥基础设施证书和CRL配置文件"
    },
}; 