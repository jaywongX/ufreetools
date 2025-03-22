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
  }
} 