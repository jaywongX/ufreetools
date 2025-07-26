export default {
  name: 'XML/JSON 轉換器',
  title: 'XML ↔ JSON 轉換',
  description: '在 XML 和 JSON 格式之間進行雙向轉換，支援進階選項和自定義設定',

  conversion: {
    direction: '轉換方向',
    xmlToJson: 'XML 轉 JSON',
    jsonToXml: 'JSON 轉 XML'
  },

  options: {
    title: '轉換選項',
    show: '顯示選項',
    hide: '隱藏選項',
    
    xmlToJson: {
      ignoreAttributes: '忽略屬性',
      ignoreAttributesHint: '停用此選項可在JSON中保留XML屬性資訊',
      parseAttributeValue: '解析屬性值',
      parseAttributeValueHint: '將屬性中的數字、布林值等轉換為實際類型而非字串',
      ignoreDeclaration: '忽略XML宣告',
      ignoreDeclarationHint: '忽略<?xml version="1.0"?>等宣告資訊',
      parseTagValue: '解析標籤值',
      parseTagValueHint: '將標籤內容中的數字、布林值等轉換為實際類型而非字串',
      trimValues: '去除值前後空白',
      attributePrefix: '屬性前綴',
      attributePrefixPlaceholder: '例如: at符號, 底線, attr_',
      attributePrefixHint: '在JSON中表示XML屬性的前綴，預設為at符號'
    },
    
    jsonToXml: {
      format: '格式化XML',
      formatHint: '啟用縮排和換行，使XML更易讀',
      indentBy: '新增縮排（2個空格）',
      addDeclaration: '新增XML宣告',
      addDeclarationHint: '在XML開頭新增 <?xml version="1.0" encoding="UTF-8"?>',
      rootName: '根元素名稱（可選）',
      rootNamePlaceholder: '如: root, data, xml',
      rootNameHint: '當JSON頂層有多個鍵時使用的根元素名稱',
      attributePrefix: '屬性前綴識別',
      attributePrefixPlaceholder: '例如: at符號, 底線, attr_',
      attributePrefixHint: '用於識別JSON中的XML屬性的前綴，預設為at符號'
    }
  },

  buttons: {
    convert: '轉換',
    swap: '交換內容',
    clear: '清空',
    loadExample: '載入範例'
  },

  input: {
    xmlInput: 'XML 輸入',
    jsonInput: 'JSON 輸入',
    placeholder: {
      xml: '輸入XML...',
      json: '輸入JSON...'
    }
  },

  output: {
    xmlResult: 'XML 結果',
    jsonResult: 'JSON 結果',
    copy: '複製'
  },

  stats: {
    title: '轉換統計',
    inputSize: '輸入大小',
    outputSize: '輸出大小',
    sizeChange: '大小變化',
    conversionTime: '轉換耗時'
  },

  help: {
    title: '使用幫助',
    show: '顯示幫助',
    hide: '隱藏幫助',
    about: {
      title: 'XML和JSON格式說明',
      content: 'XML (eXtensible Markup Language) 是一種可擴充套件標記語言，廣泛用於設定檔、資料交換和Web服務。JSON (JavaScript Object Notation) 是一種輕量級的資料交換格式，易於人閱讀和編寫，也易於機器解析和生成。'
    },
    xmlToJson: {
      title: 'XML轉JSON注意事項',
      items: [
        'XML的屬性在JSON中預設會轉換為以at符號開頭的鍵',
        'XML的文字內容在JSON中預設以#text為鍵',
        '開啟"解析標籤值"可將數字、布林值等轉換為實際JSON類型',
        'XML可以有多個同名標籤，轉換為JSON時會自動轉為陣列'
      ]
    },
    jsonToXml: {
      title: 'JSON轉XML注意事項',
      items: [
        'JSON中以at符號開頭的鍵預設被視為XML屬性',
        'JSON中使用陣列會在XML中建立多個同名標籤',
        '複雜的巢狀JSON物件會生成層級化的XML結構',
        'JSON頂層有多個鍵且未指定根元素名稱時，將生成多個XML根元素'
      ]
    }
  },

  errors: {
    xmlParse: 'XML 解析錯誤: {0}',
    jsonParse: 'JSON 解析錯誤: {0}',
    xmlGeneration: 'XML 生成錯誤: {0}',
    emptyObject: 'JSON 物件為空或無效',
    conversion: '轉換錯誤: {0}'
  },

  alerts: {
    copied: '已複製到剪貼簿'
  }
};