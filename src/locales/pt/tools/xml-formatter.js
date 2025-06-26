export default {
    name: 'Formatador XML',
    description: 'Formate, embeleze e valide documentos XML',
    options: {
      indentSize: 'Tamanho da indentação',
      useTabs: 'Usar tabulações',
      collapseContent: 'Recolher conteúdo',
      maxLineWidth: 'Largura máxima da linha',
      indentAttributes: 'Indentar atributos',
      sortAttributes: 'Ordenar atributos',
      newlineAfterPI: 'Nova linha após instruções',
      operationType: 'Tipo de operação',
      indentSettings: 'Configurações de indentação',
      displayOptions: 'Opções de exibição',
      showLineNumbers: 'Mostrar números de linha'
    },
    indentOptions: {
      twoSpaces: '2 espaços',
      fourSpaces: '4 espaços',
      tabIndent: 'Tabulação'
    },
    actions: {
      format: 'Formatar XML',
      minify: 'Minificar XML',
      validate: 'Validar',
      toJSON: 'Converter para JSON',
      copy: 'Copiar',
      clear: 'Limpar',
      download: 'Baixar',
      upload: 'Carregar XML',
      beautify: 'Embelezar',
      copyCode: 'Copiar código'
    },
    messages: {
      copied: 'Copiado para área de transferência!',
      formatSuccess: 'XML formatado com sucesso',
      formatError: 'Erro ao formatar XML',
      validXml: 'XML válido',
      invalidXml: 'XML inválido: {0}',
      lineCol: 'Linha {line}, Coluna {col}',
      minifySuccess: 'XML minificado com sucesso',
      conversionSuccess: 'Conversão bem-sucedida',
      conversionError: 'Erro durante conversão',
      pleaseEnterXml: 'Insira o conteúdo XML',
      processingError: 'Erro ao processar XML: {0}',
      formatResult: 'Resultado da formatação',
      characterCount: 'Caracteres: {0}',
      lineCount: 'Linhas: {0}',
      characterAndLineCount: 'Caracteres: {0} | Linhas: {1}'
    },
    input: {
      xmlInput: 'Entrada XML',
      placeholder: 'Cole ou digite XML aqui...'
    },
    examples: {
      title: 'Exemplos XML',
      description: 'Clique para carregar:',
      simpleXml: 'XML Simples',
      bookstore: 'Catálogo de livraria',
      complexXml: 'XML Complexo'
    },
    article: {
      title: "Formatador XML: Ferramenta essencial para dados estruturados",
      features: {
        title: "Formatando XML e suas aplicações",
        description: "O <strong>Formatador XML</strong> é uma ferramenta online poderosa que transforma código XML bruto em um formato bem estruturado e legível. Ele permite embelezar documentos XML compactados ou mal formatados, validar sua sintaxe e converter facilmente entre diferentes representações XML.<br><br>Este <strong>embelezador XML</strong> analisa a estrutura hierárquica dos dados XML e aplica indentação consistente, quebras de linha adequadas e formatação organizada, tornando documentos XML complexos mais fáceis de ler, editar e entender. A ferramenta suporta tanto embelezamento (expandindo e organizando o XML com espaçamento adequado) quanto minificação (comprimindo o XML removendo espaços desnecessários), permitindo otimizar seu XML tanto para legibilidade humana quanto para eficiência de processamento e armazenamento por máquinas.",
        useCases: {
          title: "Aplicações práticas",
          items: [
            "<strong>Desenvolvimento e teste de serviços web</strong>: Ao construir ou depurar serviços SOAP, desenvolvedores podem usar o <strong>validador XML</strong> para verificar requisições e respostas, garantindo conformidade com esquemas esperados.",
            "<strong>Gerenciamento de arquivos de configuração</strong>: Administradores de sistemas podem usar o <strong>formatador de estrutura XML</strong> para padronizar arquivos de configuração antes da implantação, reduzindo erros de sintaxe.",
            "<strong>Processamento de integração de dados</strong>: Engenheiros de dados podem usar a ferramenta para verificar e validar arquivos XML antes do processamento.",
            "<strong>Documentação de APIs</strong>: Desenvolvedores podem usar a ferramenta para gerar exemplos XML bem formatados para documentação técnica.",
            "<strong>Manutenção de sistemas legados</strong>: Desenvolvedores podem usar o <strong>formatador XML</strong> para entender artefatos XML mal documentados.",
            "<strong>Sistemas de gerenciamento de conteúdo</strong>: Autores podem usar o <strong>formatador de sintaxe XML</strong> para estruturar corretamente templates de conteúdo."
          ]
        }
      },
      faq: {
        title: "Perguntas frequentes sobre formatação XML",
        items: [
          {
            question: "Qual a diferença entre embelezar e minificar XML?",
            answer: "Embelezar XML transforma código compactado ou mal formatado em uma versão estruturada e legível, adicionando indentação e quebras de linha. Minificar faz o oposto - remove espaços desnecessários para criar uma versão compacta, ideal para produção."
          },
          {
            question: "Como funciona a validação XML e quais erros detecta?",
            answer: "A validação verifica se o XML segue regras básicas de sintaxe, como tags aninhadas corretamente, atributos com aspas e um único elemento raiz. Erros comuns incluem tags não fechadas, atributos sem aspas e caracteres ilegais."
          },
          {
            question: "Esta ferramenta pode lidar com arquivos XML grandes?",
            answer: "Sim, para arquivos de tamanho médio (alguns megabytes). Para arquivos muito grandes, recomendamos processar em partes ou usar ferramentas desktop especializadas."
          },
          {
            question: "Formatar XML altera sua funcionalidade?",
            answer: "Não, a formatação apenas muda a aparência visual. Todos os elementos, atributos e valores permanecem os mesmos. Parsers XML ignoram espaços em branco extras entre tags."
          },
          {
            question: "Como personalizar o estilo de formatação?",
            answer: "Você pode escolher entre 2 ou 4 espaços para indentação, ou usar tabulações. Também pode alternar a exibição de números de linha para referência."
          }
        ]
      },
      guide: {
        title: "Guia passo a passo para usar o formatador XML",
        steps: [
          "<strong>Insira seu XML</strong>: Cole ou digite seu código XML na área de entrada, ou carregue um exemplo.",
          "<strong>Escolha a operação</strong>: Selecione 'Embelezar' para melhorar legibilidade ou 'Minificar' para compactar.",
          "<strong>Personalize as opções</strong>: Defina preferências de indentação e exibição de números de linha.",
          "<strong>Processe seu XML</strong>: Clique no botão correspondente para formatar seu XML.",
          "<strong>Verifique o resultado</strong>: Analise o XML formatado e estatísticas de caracteres/linhas.",
          "<strong>Copie ou edite</strong>: Copie o resultado para uso ou faça ajustes no XML original.",
          "<strong>Limpe e recomece</strong>: Clique em 'Limpar' para iniciar com novo conteúdo."
        ]
      },
      conclusion: "O Formatador XML é uma ferramenta indispensável para desenvolvedores que trabalham com dados estruturados. Ao transformar XML denso em documentos claramente organizados - e vice-versa - ele reduz significativamente o tempo e esforço necessários para trabalhar com XML em diversos contextos. Seja desenvolvendo serviços web, gerenciando configurações de sistema ou processando fontes de dados, XML bem formatado melhora qualidade do código, reduz erros e facilita colaboração entre equipes."
    }
  }