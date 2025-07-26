export default {
  name: 'Conversor XML/JSON',
  title: 'Conversão XML ↔ JSON',
  description: 'Converta bidirecionalmente entre formatos XML e JSON com opções avançadas e configurações personalizadas',

  conversion: {
    direction: 'Direção de conversão',
    xmlToJson: 'XML para JSON',
    jsonToXml: 'JSON para XML'
  },

  options: {
    title: 'Opções de conversão',
    show: 'Mostrar opções',
    hide: 'Ocultar opções',
    
    xmlToJson: {
      ignoreAttributes: 'Ignorar atributos',
      ignoreAttributesHint: 'Desative para preservar atributos XML no JSON',
      parseAttributeValue: 'Interpretar valores de atributos',
      parseAttributeValueHint: 'Converte números, booleanos etc. em tipos reais ao invés de strings',
      ignoreDeclaration: 'Ignorar declaração XML',
      ignoreDeclarationHint: 'Ignora informações como <?xml version="1.0"?>',
      parseTagValue: 'Interpretar valores de tags',
      parseTagValueHint: 'Converte conteúdo de tags (números, booleanos) em tipos reais',
      trimValues: 'Remover espaços em branco',
      attributePrefix: 'Prefixo de atributos',
      attributePrefixPlaceholder: 'Ex: @, _, attr_',
      attributePrefixHint: 'Prefixo para identificar atributos XML no JSON (padrão: @)'
    },
    
    jsonToXml: {
      format: 'Formatar XML',
      formatHint: 'Ativa indentação e quebras de linha para melhor legibilidade',
      indentBy: 'Indentar com (2 espaços)',
      addDeclaration: 'Adicionar declaração XML',
      addDeclarationHint: 'Insere <?xml version="1.0" encoding="UTF-8"?> no início',
      rootName: 'Nome do elemento raiz (opcional)',
      rootNamePlaceholder: 'Ex: root, data, xml',
      rootNameHint: 'Nome usado quando JSON tem múltiplas chaves no nível superior',
      attributePrefix: 'Identificar prefixo de atributos',
      attributePrefixPlaceholder: 'Ex: @, _, attr_',
      attributePrefixHint: 'Prefixo usado para identificar atributos no JSON (padrão: @)'
    }
  },

  buttons: {
    convert: 'Converter',
    swap: 'Inverter conteúdo',
    clear: 'Limpar',
    loadExample: 'Carregar exemplo'
  },

  input: {
    xmlInput: 'Entrada XML',
    jsonInput: 'Entrada JSON',
    placeholder: {
      xml: 'Insira XML...',
      json: 'Insira JSON...'
    }
  },

  output: {
    xmlResult: 'Resultado XML',
    jsonResult: 'Resultado JSON',
    copy: 'Copiar'
  },

  stats: {
    title: 'Estatísticas',
    inputSize: 'Tamanho de entrada',
    outputSize: 'Tamanho de saída',
    sizeChange: 'Variação de tamanho',
    conversionTime: 'Tempo de conversão'
  },

  help: {
    title: 'Ajuda',
    show: 'Mostrar ajuda',
    hide: 'Ocultar ajuda',
    about: {
      title: 'Sobre XML e JSON',
      content: 'XML (eXtensible Markup Language) é uma linguagem de marcação extensível usada em configurações, troca de dados e serviços web. JSON (JavaScript Object Notation) é um formato leve de troca de dados, fácil para humanos lerem/escreverem e para máquinas processarem.'
    },
    xmlToJson: {
      title: 'Observações sobre XML→JSON',
      items: [
        'Atributos XML são convertidos para chaves com prefixo @',
        'Conteúdo textual é representado pela chave #text',
        'Ative "Interpretar valores" para converter números/booleanos',
        'Tags repetidas são automaticamente convertidas para arrays'
      ]
    },
    jsonToXml: {
      title: 'Observações sobre JSON→XML',
      items: [
        'Chaves com prefixo @ são convertidas para atributos XML',
        'Arrays no JSON geram tags repetidas no XML',
        'Objetos aninhados criam hierarquia XML',
        'JSON com múltiplas chaves no topo requer nome de elemento raiz'
      ]
    }
  },

  errors: {
    xmlParse: 'Erro ao analisar XML: {0}',
    jsonParse: 'Erro ao analisar JSON: {0}',
    xmlGeneration: 'Erro ao gerar XML: {0}',
    emptyObject: 'Objeto JSON vazio ou inválido',
    conversion: 'Erro na conversão: {0}'
  },

  alerts: {
    copied: 'Copiado para área de transferência'
  }
};