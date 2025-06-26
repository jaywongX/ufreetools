export default {
    name: 'Gerador de Mock API',
    description: 'Gere automaticamente APIs mock baseadas em especificações OpenAPI',
    
    options: {
      version: 'Versão OpenAPI',
      format: 'Formato de saída',
      includeExamples: 'Incluir respostas de exemplo',
      responseDynamism: 'Dinamismo da resposta',
      responseType: 'Tipo de resposta',
      arrayLength: 'Tamanho do array',
      responseFormat: 'Formato da resposta'
    },
    
    formats: {
      json: 'JSON Server',
      express: 'Express.js',
      mockjs: 'Mock.js',
      msw: 'Mock Service Worker'
    },
    
    actions: {
      generate: 'Gerar Mock',
      preview: 'Visualizar API',
      clear: 'Limpar',
      copy: 'Copiar código',
      download: 'Baixar',
      uploadSpec: 'Enviar especificação OpenAPI',
      uploadJava: 'Enviar arquivo Java',
      generateJson: 'Gerar JSON',
      generateBuilder: 'Gerar Builder',
      format: 'Formatar'
    },
    
    messages: {
      copied: 'Copiado para a área de transferência!',
      generationSuccess: 'Mock API gerado com sucesso',
      generationError: 'Erro ao gerar Mock API',
      specRequired: 'Forneça uma especificação OpenAPI',
      fileUploaded: 'Arquivo enviado',
      parseError: 'Falha ao analisar classe Java - verifique o formato do arquivo'
    },
    
    help: {
      uploadHint: 'Suporte para arquivos .java - análise automática da estrutura da classe para gerar configuração mock (propriedades aninhadas ainda não suportadas)'
    },
    
    fields: {
      title: 'Definição de campos',
      addField: 'Adicionar campo',
      addChildField: 'Adicionar subcampo',
      fieldName: 'Nome do campo'
    },
    
    fieldTypes: {
      string: 'Texto',
      number: 'Número',
      boolean: 'Booleano',
      date: 'Data',
      name: 'Nome',
      email: 'E-mail',
      phone: 'Telefone',
      address: 'Endereço',
      id: 'ID',
      image: 'URL de imagem',
      array: 'Array',
      object: 'Objeto'
    },
    
    array: {
      itemType: 'Tipo do item',
      arrayFields: 'Campos do array'
    },
    
    object: {
      childFields: 'Subcampos'
    },
    
    responseTypes: {
      object: 'Objeto único',
      array: 'Array de objetos',
      custom: 'Estrutura personalizada'
    },
    
    responseFormats: {
      dataOnly: 'Apenas dados',
      standard: 'Resposta REST padrão (code, data, message)'
    },
    
    placeholder: {
      output: '// Os dados mock gerados aparecerão aqui'
    },
    
    article: {
      title: "Aplicações do Gerador de Mock API no Desenvolvimento Front-end",
      overview: {
        title: "O que é um Gerador de Mock API?",
        content: "O <strong>Gerador de Mock API</strong> é uma ferramenta especializada que cria endpoints e respostas de API simuladas baseadas em especificações OpenAPI ou definições de campos personalizados. Este poderoso <strong>instrumento de desenvolvimento</strong> permite que equipes front-end trabalhem independentemente do back-end, fornecendo estruturas de dados realistas que imitam o comportamento de APIs reais.<br><br>Ao gerar endpoints totalmente funcionais que retornam dados estruturados conforme sua especificação, o Mock API acelera significativamente o processo de desenvolvimento e permite fluxos de trabalho paralelos entre front-end e back-end."
      },
      
      useCases: {
        title: "Cenários Comuns para Mock APIs",
        items: [
          {
            title: "Desenvolvimento Front-end Antecipado",
            description: "Quando as APIs back-end ainda estão em desenvolvimento, os mocks permitem que equipes front-end comecem a construir componentes UI com estruturas de dados reais, evitando gargalos."
          },
          {
            title: "Prototipagem e Teste de UI",
            description: "Crie protótipos rápidos ou teste componentes UI com conjuntos de dados controlados, validando interfaces sem depender de serviços back-end reais."
          },
          {
            title: "Desenvolvimento Offline",
            description: "Permite que desenvolvedores trabalhem em ambientes sem acesso a APIs de produção ou staging, através de servidores mock locais."
          },
          {
            title: "Teste de Casos Extremos",
            description: "Simule respostas específicas que replicam condições de erro ou casos extremos difíceis de reproduzir em ambientes reais."
          },
          {
            title: "Teste de Performance",
            description: "Crie mocks com diferentes tempos de resposta para testar como componentes front-end lidam com vários cenários de performance."
          },
          {
            title: "Ambientes de Demonstração",
            description: "Construa demonstrações funcionais completas sem conexão com back-ends reais, ideais para vendas, treinamentos ou exposições."
          }
        ]
      },
      
      guide: {
        title: "Como Usar o Gerador de Mock API",
        intro: "Siga estas etapas para criar e utilizar APIs mock de forma eficaz:",
        steps: [
          {
            title: "Selecione o Método de Entrada",
            description: "Escolha como definir a estrutura da API: envie uma especificação OpenAPI (recomendado para consistência), envie um arquivo Java para extração automática da estrutura de dados, ou defina campos manualmente."
          },
          {
            title: "Defina a Estrutura de Dados",
            description: "Para configuração manual, adicione campos e defina seus tipos (texto, número, booleano, data etc.). Crie objetos aninhados ou arrays para estruturas complexas."
          },
          {
            title: "Configure Opções de Saída",
            description: "Selecione o formato de saída desejado (JSON Server, Express.js, Mock.js ou Mock Service Worker) e ajuste configurações como dinamismo das respostas e tamanho de arrays."
          },
          {
            title: "Gere o Código Mock",
            description: "Clique em 'Gerar Mock' para criar o código da API simulada com base em suas especificações."
          },
          {
            title: "Revise e Copie o Código",
            description: "Verifique o código gerado e copie para sua área de transferência ou faça o download como arquivo."
          },
          {
            title: "Integre ao Ambiente",
            description: "Implemente o mock no seu ambiente de desenvolvimento conforme o formato escolhido (configurando JSON Server, adicionando rotas Express.js etc.)."
          },
          {
            title: "Conecte ao Front-end",
            description: "Atualize sua aplicação front-end para apontar para os endpoints mock em vez dos serviços reais."
          }
        ]
      },
      
      bestPractices: {
        title: "Melhores Práticas para Mock APIs",
        intro: "Recomendações para criar mocks eficientes e sustentáveis:",
        items: [
          "Prefira especificações OpenAPI para garantir fidelidade às APIs reais",
          "Replique estruturas de resposta reais, incluindo formatos de paginação e erros",
          "Inclua casos extremos como arrays vazios e valores nulos",
          "Use funções para dados dinâmicos como datas e IDs",
          "Versionize os mocks junto com o código front-end",
          "Utilize variáveis de ambiente para alternar entre mocks e APIs reais",
          "Documente discrepâncias entre mocks e APIs reais",
          "Simule delays consistentes para testar estados de carregamento",
          "Automatize a geração de mocks em pipelines de build",
          "Inclua lógica de validação para simular restrições reais"
        ]
      },
      
      faq: {
        title: "Perguntas Frequentes sobre Mock APIs",
        items: [
          {
            question: "Quais as diferenças entre os formatos de saída?",
            answer: "JSON Server oferece APIs REST simples baseadas em JSON. Express.js permite maior controle e customização. Mock.js integra diretamente com JavaScript no navegador. Mock Service Worker (MSW) intercepta requisições em nível de rede, permitindo transição transparente entre mocks e APIs reais."
          },
          {
            question: "Posso gerar respostas dinâmicas que variam a cada requisição?",
            answer: "Sim, a opção 'Dinamismo da resposta' controla a variação nos dados gerados. Você também pode implementar lógica customizada nos formatos Express.js ou MSW para comportamentos mais complexos."
          },
          {
            question: "Como lidar com autenticação em mocks?",
            answer: "Para JSON Server, use o plugin json-server-auth. No Express.js, implemente middlewares para verificar tokens. Com Mock.js e MSW, intercepte requisições de autenticação e retorne tokens ou erros apropriados."
          },
          {
            question: "É possível simular erros de rede ou respostas lentas?",
            answer: "Sim. No Express.js use middlewares para introduzir delays ou erros. Com MSW, utilize ctx.delay(). Para JSON Server, use a flag --delay."
          },
          {
            question: "Como alternar entre mocks e APIs reais em produção?",
            answer: "Use variáveis de ambiente para ativar/desativar MSW ou altere a URL base da API via configuração."
          },
          {
            question: "Posso gerar dados realistas em vez de texto aleatório?",
            answer: "Sim, o gerador inclui tipos específicos como nome, e-mail e telefone para dados realistas. Para cenários avançados, considere bibliotecas como Faker.js."
          },
          {
            question: "Como simular upload de arquivos?",
            answer: "No Express.js, implemente rotas que aceitem multipart/form-data. Com MSW, intercepte requisições de upload e retorne respostas simuladas."
          }
        ]
      },
      
      advancedTips: {
        title: "Técnicas Avançadas de Integração",
        intro: "Leve sua implementação de mocks para o próximo nível:",
        items: [
          "Implemente comportamento stateful para simular persistência entre requisições",
          "Combine validação OpenAPI com servidores mock",
          "Crie gerenciadores de cenários para alternar entre conjuntos de dados pré-definidos",
          "Simule paginação realista com metadados e links",
          "Use MSW com GraphQL para respostas complexas com type safety",
          "Crie abordagens híbridas que encaminhem algumas requisições para APIs reais",
          "Implemente websockets mock para testar funcionalidades em tempo real",
          "Configure testes de CI que usem mocks para validar comportamentos front-end",
          "Crie serviços de catálogo para mocks disponíveis na organização",
          "Implemente templates de resposta que variam dinamicamente conforme parâmetros"
        ]
      }
    }
  }