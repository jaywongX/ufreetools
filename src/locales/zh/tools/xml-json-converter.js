export default {
  name: 'XML/JSON 转换器',
  title: 'XML ↔ JSON 转换',
  description: '在 XML 和 JSON 格式之间进行双向转换，支持高级选项和自定义设置',
  
  conversion: {
    direction: '转换方向',
    xmlToJson: 'XML 转 JSON',
    jsonToXml: 'JSON 转 XML'
  },
  
  options: {
    title: '转换选项',
    show: '显示选项',
    hide: '隐藏选项',
    
    xmlToJson: {
      ignoreAttributes: '忽略属性',
      ignoreAttributesHint: '禁用此选项可在JSON中保留XML属性信息',
      parseAttributeValue: '解析属性值',
      parseAttributeValueHint: '将属性中的数字、布尔值等转换为实际类型而非字符串',
      ignoreDeclaration: '忽略XML声明',
      ignoreDeclarationHint: '忽略<?xml version="1.0"?>等声明信息',
      parseTagValue: '解析标签值',
      parseTagValueHint: '将标签内容中的数字、布尔值等转换为实际类型而非字符串',
      trimValues: '去除值前后空白',
      attributePrefix: '属性前缀',
      attributePrefixPlaceholder: '例如: at符号, 下划线, attr_',
      attributePrefixHint: '在JSON中表示XML属性的前缀，默认为at符号'
    },
    
    jsonToXml: {
      format: '格式化XML',
      formatHint: '启用缩进和换行，使XML更易读',
      indentBy: '添加缩进（2个空格）',
      addDeclaration: '添加XML声明',
      addDeclarationHint: '在XML开头添加 <?xml version="1.0" encoding="UTF-8"?>',
      rootName: '根元素名称（可选）',
      rootNamePlaceholder: '如: root, data, xml',
      rootNameHint: '当JSON顶层有多个键时使用的根元素名称',
      attributePrefix: '属性前缀识别',
      attributePrefixPlaceholder: '例如: at符号, 下划线, attr_',
      attributePrefixHint: '用于识别JSON中的XML属性的前缀，默认为at符号'
    }
  },
  
  buttons: {
    convert: '转换',
    swap: '交换内容',
    clear: '清空',
    loadExample: '加载示例'
  },
  
  input: {
    xmlInput: 'XML 输入',
    jsonInput: 'JSON 输入',
    placeholder: {
      xml: '输入XML...',
      json: '输入JSON...'
    }
  },
  
  output: {
    xmlResult: 'XML 结果',
    jsonResult: 'JSON 结果',
    copy: '复制'
  },
  
  stats: {
    title: '转换统计',
    inputSize: '输入大小',
    outputSize: '输出大小',
    sizeChange: '大小变化',
    conversionTime: '转换耗时'
  },
  
  help: {
    title: '使用帮助',
    show: '显示帮助',
    hide: '隐藏帮助',
    about: {
      title: 'XML和JSON格式说明',
      content: 'XML (eXtensible Markup Language) 是一种可扩展标记语言，广泛用于配置文件、数据交换和Web服务。JSON (JavaScript Object Notation) 是一种轻量级的数据交换格式，易于人阅读和编写，也易于机器解析和生成。'
    },
    xmlToJson: {
      title: 'XML转JSON注意事项',
      items: [
        'XML的属性在JSON中默认会转换为以at符号开头的键',
        'XML的文本内容在JSON中默认以#text为键',
        '开启"解析标签值"可将数字、布尔值等转换为实际JSON类型',
        'XML可以有多个同名标签，转换为JSON时会自动转为数组'
      ]
    },
    jsonToXml: {
      title: 'JSON转XML注意事项',
      items: [
        'JSON中以at符号开头的键默认被视为XML属性',
        'JSON中使用数组会在XML中创建多个同名标签',
        '复杂的嵌套JSON对象会生成层级化的XML结构',
        'JSON顶层有多个键且未指定根元素名称时，将生成多个XML根元素'
      ]
    }
  },
  
  errors: {
    xmlParse: 'XML 解析错误: {0}',
    jsonParse: 'JSON 解析错误: {0}',
    xmlGeneration: 'XML 生成错误: {0}',
    emptyObject: 'JSON 对象为空或无效',
    conversion: '转换错误: {0}'
  },
  
  alerts: {
    copied: '已复制到剪贴板'
  },
  
  article: {
    title: "XML/JSON转换器: 无缝转换您的数据结构",
    features: {
      title: "理解XML和JSON数据转换",
      description: "<strong>XML/JSON转换器</strong>是一种强大的工具，旨在促进Web开发和系统集成中两种最广泛使用的<strong>数据交换格式</strong>之间的转换。这种双向<strong>格式转换器</strong>允许您在保持数据结构完整性的同时，进行<strong>XML转JSON</strong>和<strong>JSON转XML</strong>的转换。<br><br>我们的<strong>XML/JSON解析器</strong>为处理属性、声明和嵌套数据结构提供了广泛的自定义选项。对于<strong>XML到JSON的转换</strong>，您可以配置属性前缀、控制标签值的解析方式以及确定如何处理空白。执行<strong>JSON到XML的转换</strong>时，您可以指定格式化首选项、添加XML声明并为结构良好的输出定义根元素名称。这个<strong>数据格式转换器</strong>确保在两种格式之间准确表示复杂的层次数据。",
      useCases: {
        title: "XML-JSON转换的常见应用场景",
        items: [
          "API开发人员在基于XML的SOAP Web服务和基于JSON的REST API之间进行转换，以确保不同集成点之间的兼容性",
          "前端开发人员将XML配置文件转换为JSON，以便在JavaScript应用程序和现代框架中更轻松地使用",
          "后端工程师处理使用XML的遗留系统，同时实现需要JSON格式的新服务",
          "数据集成专家在ETL（提取、转换、加载）过程中映射不同的系统格式",
          "提取XML数据（如RSS源）并需要将其转换为JSON以进行存储或分析的Web抓取应用程序",
          "移动应用开发人员从企业系统中使用XML数据，并将其转换为JSON以实现更高效的客户端处理"
        ]
      }
    },
    faq: {
      title: "关于XML-JSON转换的常见问题",
      items: [
        {
          question: "转换器在转换为JSON时如何处理XML属性？",
          answer: "当将XML转换为JSON时，我们的XML/JSON转换器通过在属性前加上特殊字符（默认为'@'）来处理属性，以区别于常规元素。例如，像'<book id=\"123\">Content</book>'这样的XML会变成像'{\"book\": {\"@id\": \"123\", \"#text\": \"Content\"}}'这样的JSON。这个属性前缀可以在转换器设置中自定义，允许您选择最适合您特定应用需求的表示法，同时在生成的JSON结构中保持属性和子元素之间的清晰分离。"
        },
        {
          question: "转换器能否处理两种格式中的复杂嵌套结构？",
          answer: "是的，我们的XML/JSON解析器完全支持两个方向的复杂嵌套结构。转换器准确维护层次关系，处理数组、对象和混合内容。从XML转换为JSON时，嵌套元素变成嵌套对象，重复元素自动转换为数组。从JSON转换为XML时，嵌套对象被保留为子元素，数组表示为具有相同标签名的重复元素。这种结构保存对于在任一格式中处理复杂的数据模型和配置文件都至关重要。"
        },
        {
          question: "该工具如何处理特殊字符和编码？",
          answer: "XML/JSON转换器自动管理两个方向的特殊字符和编码问题。处理XML时，它正确解码XML实体（如&amp;表示&，&lt;表示<）并处理CDATA部分以保留格式。在JSON到XML转换期间，该工具将特殊字符编码为适当的XML实体，以确保有效的XML输出。转换器在整个过程中保持UTF-8兼容性，正确处理两种格式中的国际字符、符号和表情符号，使其适用于多语言内容和全球应用。"
        },
        {
          question: "XML注释在转换为JSON期间会发生什么？",
          answer: "由于JSON本身不支持注释，XML注释通常在XML到JSON转换期间被删除。但是，如果您需要保留此信息，我们的XML/JSON转换器提供了一个可选设置，通过将注释转换为特殊JSON属性（例如作为\"__comment\"字段）来保留注释。这为需要保留包含重要文档或处理指令的注释的场景提供了灵活性，即使在格式之间转换时也是如此。您可以通过转换器界面中的高级选项面板自定义此行为。"
        },
        {
          question: "如何在转换过程中处理XML命名空间？",
          answer: "XML/JSON转换器提供了在转换过程中处理XML命名空间的选项。默认情况下，当转换为JSON时，命名空间及其前缀包含在元素名称中。例如，'<ns:element xmlns:ns=\"namespace\">value</ns:element>'将转换为JSON，并保留命名空间前缀。您可以通过转换器选项自定义此行为，选择完全忽略命名空间，以特定格式保留它们，或将它们作为单独的属性保留在生成的JSON结构中，以满足您特定的集成需求。"
        }
      ]
    },
    guide: {
      title: "使用XML-JSON转换器的步骤指南",
      steps: [
        "使用工具顶部的单选按钮选择所需的转换方向：选择'XML转JSON'将XML标记转换为JSON格式，或选择'JSON转XML'进行相反的过程",
        "点击'显示选项'访问高级设置，自定义转换过程：对于XML转JSON，配置属性处理和解析选项；对于JSON转XML，设置格式化首选项和XML声明选项",
        "在转换器左侧的输入字段中输入您的源数据，或使用'加载示例'按钮查看工具如何处理预定义数据",
        "点击'转换'按钮处理您的数据 - 转换器将转换您的输入并在右侧的输出字段中显示结果",
        "查看转换输出，如有必要，调整您的转换设置以根据您的特定需求微调结果",
        "点击输出字段旁边的'复制'按钮，将转换后的结果复制到剪贴板，以便在您的应用程序或文档中使用",
        "您还可以使用'交换内容'按钮反转过程，将当前输出设置为输入，以便在相反方向进行转换"
      ]
    },
    conclusion: "XML/JSON转换器为在现代计算中这两种基础格式之间转换数据提供了强大的解决方案。无论您是整合不同系统、现代化遗留应用程序，还是优化数据以进行客户端处理，这个工具都能帮您避免手动转换的复杂性和潜在错误。通过其用于处理属性、格式化和结构元素的综合选项，您可以确保您的数据在跨越格式边界时保持其完整性和含义。通过简化XML和JSON之间的转换，这个转换器有助于弥合不同技术和标准之间的差距，实现更灵活和可互操作的软件系统。"
  }
} 