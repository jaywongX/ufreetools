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
    },
    
    article: {
      title: "Conversor XML/JSON: Transformação perfeita entre formatos",
      features: {
        title: "Conversão entre XML e JSON",
        description: "O <strong>Conversor XML/JSON</strong> é uma ferramenta essencial para desenvolvedores que trabalham com integração de sistemas, permitindo a conversão bidirecional entre esses dois formatos amplamente utilizados. Com suporte a <strong>conversão XML para JSON</strong> e vice-versa, este <strong>transformador de dados</strong> preserva a estrutura hierárquica dos documentos durante o processo.<br><br>Nossa ferramenta oferece <strong>opções avançadas</strong> para personalizar a conversão, incluindo tratamento de atributos, declarações XML, prefixos personalizados e formatação de saída. O <strong>processador de dados</strong> é capaz de lidar com estruturas complexas, arrays aninhados e tipos de dados diversos, garantindo uma representação precisa em ambos os formatos.",
        useCases: {
          title: "Aplicações práticas",
          items: [
            "Integração entre sistemas legados (XML) e APIs modernas (JSON)",
            "Transformação de feeds de dados para aplicações web/mobile",
            "Processamento de configurações em diferentes formatos",
            "Conversão de respostas de API para armazenamento em bancos NoSQL",
            "Migração de bases de dados entre sistemas heterogêneos",
            "Preparação de dados para visualizações e dashboards"
          ]
        }
      },
      faq: {
        title: "Perguntas frequentes",
        items: [
          {
            question: "Como são tratados caracteres especiais?",
            answer: "O conversor gerencia automaticamente caracteres especiais, entidades XML e codificação UTF-8 em ambas as direções, preservando acentos, símbolos e emojis."
          },
          {
            question: "É possível converter grandes volumes de dados?",
            answer: "Sim, a ferramenta é otimizada para documentos de tamanho médio (até alguns MB). Para arquivos muito grandes, recomendamos processamento em lotes."
          },
          {
            question: "Como funciona a conversão de arrays?",
            answer: "Arrays JSON são convertidos para elementos XML repetidos, e elementos XML repetidos são convertidos para arrays JSON, mantendo a semântica dos dados."
          },
          {
            question: "Posso personalizar os nomes dos elementos?",
            answer: "Sim, através das opções avançadas você pode definir prefixos para atributos, nome do elemento raiz e outras configurações de nomenclatura."
          }
        ]
      },
      guide: {
        title: "Guia rápido de uso",
        steps: [
          "Selecione a direção de conversão (XML→JSON ou JSON→XML)",
          "Insira seu conteúdo no campo correspondente",
          "Digite seus dados de origem no campo de entrada no lado esquerdo do conversor ou use o botão 'load exam'para ver como a ferramenta lida com os dados pré-definidos",
          "Ajuste as opções avançadas conforme necessário",
          "Clique em 'Converter' para processar",
          "Revise o resultado e copie/baixe conforme necessário",
          "Use 'Inverter conteúdo' para converter na direção oposta"
        ]
      },
      conclusion: "Este conversor elimina as barreiras entre sistemas que utilizam formatos diferentes, simplificando integrações e modernização de aplicações. Com sua capacidade de preservar a estrutura e semântica dos dados durante a conversão, é uma ferramenta indispensável para desenvolvedores e arquitetos de sistemas."
    }
  }