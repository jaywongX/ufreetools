export default {
  name: 'XML/JSON Converter',
  title: 'XML ↔ JSON Converter',
  description: 'Convert between XML and JSON formats with advanced options and custom settings',
  
  conversion: {
    direction: 'Conversion Direction',
    xmlToJson: 'XML to JSON',
    jsonToXml: 'JSON to XML'
  },
  
  options: {
    title: 'Conversion Options',
    show: 'Show Options',
    hide: 'Hide Options',
    
    xmlToJson: {
      ignoreAttributes: 'Ignore Attributes',
      ignoreAttributesHint: 'Disable to preserve XML attribute information in JSON',
      parseAttributeValue: 'Parse Attribute Values',
      parseAttributeValueHint: 'Convert numbers, booleans, etc. in attributes to actual types instead of strings',
      ignoreDeclaration: 'Ignore XML Declaration',
      ignoreDeclarationHint: 'Ignore declarations like <?xml version="1.0"?>',
      parseTagValue: 'Parse Tag Values',
      parseTagValueHint: 'Convert numbers, booleans, etc. in tag content to actual types instead of strings',
      trimValues: 'Trim Whitespace',
      attributePrefix: 'Attribute Prefix',
      attributePrefixPlaceholder: 'Examples: at-sign, underscore, attr_',
      attributePrefixHint: 'Prefix for XML attributes in JSON, default is at-sign'
    },
    
    jsonToXml: {
      format: 'Format XML',
      formatHint: 'Enable indentation and line breaks for better readability',
      indentBy: 'Add Indentation (2 spaces)',
      addDeclaration: 'Add XML Declaration',
      addDeclarationHint: 'Add <?xml version="1.0" encoding="UTF-8"?> at the beginning',
      rootName: 'Root Element Name (Optional)',
      rootNamePlaceholder: 'e.g.: root, data, xml',
      rootNameHint: 'Root element name to use when JSON has multiple top-level keys',
      attributePrefix: 'Attribute Prefix Recognition',
      attributePrefixPlaceholder: 'Examples: at-sign, underscore, attr_',
      attributePrefixHint: 'Prefix used to identify XML attributes in JSON, default is at-sign'
    }
  },
  
  buttons: {
    convert: 'Convert',
    swap: 'Swap Content',
    clear: 'Clear',
    loadExample: 'Load Example'
  },
  
  input: {
    xmlInput: 'XML Input',
    jsonInput: 'JSON Input',
    placeholder: {
      xml: 'Enter XML...',
      json: 'Enter JSON...'
    }
  },
  
  output: {
    xmlResult: 'XML Result',
    jsonResult: 'JSON Result',
    copy: 'Copy'
  },
  
  stats: {
    title: 'Conversion Statistics',
    inputSize: 'Input Size',
    outputSize: 'Output Size',
    sizeChange: 'Size Change',
    conversionTime: 'Conversion Time'
  },
  
  help: {
    title: 'Usage Help',
    show: 'Show Help',
    hide: 'Hide Help',
    about: {
      title: 'About XML and JSON',
      content: 'XML (eXtensible Markup Language) is a markup language widely used for configuration files, data exchange, and web services. JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy to read and write by humans and parse and generate by machines.'
    },
    xmlToJson: {
      title: 'XML to JSON Considerations',
      items: [
        'XML attributes are converted to keys prefixed with at-sign by default',
        'XML text content is represented with the #text key by default',
        'Enabling "Parse Tag Values" will convert numbers, booleans, etc. to actual JSON types',
        'Multiple tags with the same name are automatically converted to arrays in JSON'
      ]
    },
    jsonToXml: {
      title: 'JSON to XML Considerations',
      items: [
        'Keys prefixed with at-sign are treated as XML attributes by default',
        'Arrays in JSON create multiple tags with the same name in XML',
        'Complex nested JSON objects generate hierarchical XML structures',
        'Multiple top-level keys without a specified root element name will generate multiple XML root elements'
      ]
    }
  },
  
  errors: {
    xmlParse: 'XML parsing error: {0}',
    jsonParse: 'JSON parsing error: {0}',
    xmlGeneration: 'XML generation error: {0}',
    emptyObject: 'JSON object is empty or invalid',
    conversion: 'Conversion error: {0}'
  },
  
  alerts: {
    copied: 'Copied to clipboard'
  }
} 