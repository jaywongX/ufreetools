export default {
    name: 'Gerador OpenAPI → Cliente TypeScript',
    description: 'Gera automaticamente interfaces TypeScript e código de cliente a partir de especificações OpenAPI, melhorando a eficiência da colaboração entre front-end e back-end',
    options: {
      exportSchemas: 'Exportar todas as definições de modelo',
      generateClient: 'Gerar código de cliente API',
      addComments: 'Adicionar comentários e documentação',
      useEnums: 'Usar enums TypeScript (em vez de tipos união de strings)',
      indentSize: 'Tamanho da indentação',
      operationType: 'Tipo de operação',
      displayOptions: 'Opções de exibição'
    },
    inputMode: {
      toggleToFile: 'Alternar para upload de arquivo',
      toggleToText: 'Alternar para entrada de texto',
      loadExample: 'Carregar exemplo'
    },
    fileUpload: {
      dragAndDrop: 'Arraste e solte o arquivo OpenAPI aqui ou clique para fazer upload',
      supportedFormats: 'Formatos suportados: .json, .yaml e .yml',
      fileSelected: 'Selecionado: {0} ({1})'
    },
    textInput: {
      placeholder: 'Cole a especificação OpenAPI (JSON ou YAML) aqui...'
    },
    actions: {
      generate: 'Gerar código TypeScript',
      processing: 'Processando...',
      clear: 'Limpar',
      copy: 'Copiar código',
      download: 'Baixar código'
    },
    results: {
      generatedCode: 'Código TypeScript gerado',
      copied: 'Copiado para a área de transferência',
      error: 'Erro',
      characterCount: 'Contagem de caracteres: {0}'
    },
    errors: {
      parseError: 'Não foi possível analisar a especificação OpenAPI. Certifique-se de fornecer um formato JSON ou YAML válido.',
      invalidSpec: 'Especificação OpenAPI inválida. Nenhum identificador de versão openapi ou swagger encontrado.',
      processingError: 'Erro ao processar a especificação OpenAPI: {0}'
    },
    article: {
      title: "OpenAPI para TypeScript: Geração Automatizada de Cliente API",
      overview: {
        title: "Entendendo o Gerador OpenAPI para TypeScript",
        content: "O <strong>Gerador OpenAPI para Cliente TypeScript</strong> é uma ferramenta especializada que converte automaticamente especificações OpenAPI (anteriormente conhecidas como Swagger) em interfaces TypeScript e código de cliente API totalmente funcional. Essa conversão simplifica o processo de desenvolvimento front-end, garantindo segurança de tipos e eliminando a necessidade de escrever manualmente código de integração de API.<br><br>A especificação OpenAPI serve como um contrato padronizado entre front-end e serviços back-end, descrevendo endpoints disponíveis, parâmetros de requisição, estruturas de resposta e modelos de dados. Ao utilizar este gerador, os desenvolvedores podem focar na construção de funcionalidades em vez de manter código de integração de API, enquanto se beneficiam do poderoso sistema de tipos do TypeScript para capturar erros potenciais em tempo de compilação em vez de tempo de execução."
      },
      useCases: {
        title: "Casos de Uso Comuns para Geração OpenAPI para TypeScript",
        items: [
          {
            title: "Desenvolvimento Front-end para APIs Complexas",
            description: "Ao trabalhar com APIs back-end grandes ou complexas, codificar manualmente as interfaces do cliente torna-se demorado e propenso a erros. Este gerador cria interfaces TypeScript precisas e código de cliente que correspondem perfeitamente à especificação da API, garantindo consistência entre front-end e back-end."
          },
          {
            title: "Arquitetura de Microsserviços",
            description: "Em ambientes com múltiplos serviços API, o gerador facilita a rápida integração com cada serviço. À medida que os serviços evoluem, basta regenerar os clientes TypeScript a partir das especificações OpenAPI atualizadas para manter a sincronização."
          },
          {
            title: "Migração de Versão de API",
            description: "Ao atualizar para uma nova versão de API, gere clientes TypeScript para ambas as versões para identificar alterações significativas e implementar estratégias de migração suave no código front-end."
          },
          {
            title: "Integração de Novos Desenvolvedores",
            description: "Novos membros da equipe podem rapidamente entender a funcionalidade da API examinando as interfaces TypeScript geradas, que servem como documentação abrangente com informações completas de tipos."
          },
          {
            title: "Desenvolvimento de Protótipos",
            description: "Durante o desenvolvimento rápido de protótipos, gere um cliente TypeScript a partir de um rascunho da especificação OpenAPI para começar imediatamente a construir componentes de UI com estruturas de dados reais, mesmo antes da implementação do back-end estar concluída."
          }
        ]
      },
      guide: {
        title: "Guia Passo a Passo para Usar o Gerador OpenAPI para TypeScript",
        intro: "Siga estas etapas para converter efetivamente uma especificação OpenAPI em interfaces TypeScript e código de cliente:",
        steps: [
          {
            title: "Prepare sua Especificação OpenAPI",
            description: "Certifique-se de ter uma especificação OpenAPI válida em formato JSON ou YAML. A especificação deve definir seus endpoints de API, parâmetros de requisição, estruturas de resposta e modelos de dados. Você pode fazer upload de um arquivo ou colar o conteúdo diretamente na área de texto."
          },
          {
            title: "Selecione Opções de Geração",
            description: "Configure as opções de geração de acordo com suas necessidades: 'Exportar todas as definições de modelo' cria interfaces TypeScript para todos os modelos de dados, 'Gerar código de cliente API' gera métodos de cliente API, 'Adicionar comentários e documentação' inclui documentação no código gerado e 'Usar enums TypeScript' cria enums TypeScript para uniões de strings literais."
          },
          {
            title: "Gerar Código TypeScript",
            description: "Clique no botão 'Gerar código TypeScript' para processar sua especificação OpenAPI. A ferramenta analisará a especificação e gerará interfaces TypeScript e código de cliente com base nas opções selecionadas."
          },
          {
            title: "Revisar o Código Gerado",
            description: "Examine a saída para garantir que atenda às suas expectativas. O código gerado inclui interfaces para tipos de requisição/resposta e uma classe cliente com métodos para cada endpoint da API."
          },
          {
            title: "Copiar ou Baixar os Resultados",
            description: "Use o botão 'Copiar código' para copiar o TypeScript gerado para a área de transferência ou 'Baixar código' para salvá-lo como um arquivo .ts. Você pode então integrar este código ao seu projeto TypeScript."
          },
          {
            title: "Integrar com seu Projeto",
            description: "Importe o cliente gerado no código do seu aplicativo. Inicialize o cliente com sua URL base da API e quaisquer cabeçalhos necessários, então use os métodos fortemente tipados para fazer chamadas de API."
          },
          {
            title: "Atualizar quando a API Mudar",
            description: "Sempre que sua especificação de API for alterada, regenere o código TypeScript e atualize sua base de código para garantir que seu front-end permaneça sincronizado com a API back-end."
          }
        ]
      },
      bestPractices: {
        title: "Melhores Práticas para Especificações OpenAPI",
        intro: "Siga estas melhores práticas para criar especificações OpenAPI de alta qualidade que geram o melhor código TypeScript:",
        items: [
          "Use IDs de operação descritivos para cada endpoint, para criar nomes de métodos significativos no cliente gerado",
          "Forneça descrições detalhadas para esquemas, propriedades, parâmetros e respostas, para gerar comentários TypeScript úteis",
          "Use convenções de nomenclatura consistentes para esquemas e propriedades, para criar interfaces TypeScript previsíveis",
          "Defina componentes reutilizáveis na seção 'components', para evitar duplicação e promover reuso de código",
          "Especifique tipos de dados precisos para todas as propriedades, para gerar tipos TypeScript exatos",
          "Inclua exemplos na especificação OpenAPI, para ajudar desenvolvedores a entender as estruturas de dados esperadas",
          "Use valores enum para propriedades com conjuntos fixos de valores possíveis, para criar enums ou tipos união TypeScript",
          "Organize endpoints logicamente, usando tags apropriadas para agrupar operações relacionadas",
          "Controle versões da API e indique claramente alterações significativas, para facilitar estratégias de migração front-end",
          "Valide sua especificação OpenAPI com ferramentas lint ou validadores antes de gerar código TypeScript"
        ]
      },
      faq: {
        title: "Perguntas Frequentes sobre Geração OpenAPI para TypeScript",
        items: [
          {
            question: "Qual é a diferença entre OpenAPI e Swagger?",
            answer: "OpenAPI é o nome atual do padrão de especificação, enquanto Swagger era seu nome original. OpenAPI 3.0+ é a evolução moderna do que antes era chamado Swagger 2.0. Este gerador suporta especificações OpenAPI 3.x e Swagger 2.0, embora seja recomendado usar OpenAPI 3.x por seus recursos aprimorados e melhor geração de código TypeScript."
          },
          {
            question: "Posso personalizar o código TypeScript gerado?",
            answer: "Sim, o gerador oferece várias opções de personalização: você pode escolher exportar apenas definições de modelo, gerar código de cliente, adicionar comentários de documentação e usar enums TypeScript em vez de uniões de strings. Para personalizações mais extensas, você pode modificar manualmente o código gerado, mas observe que a regeneração substituirá essas alterações."
          },
          {
            question: "Como lidar com autenticação no cliente gerado?",
            answer: "O cliente gerado aceita cabeçalhos personalizados em seu construtor, onde você pode fornecer tokens de autenticação. Para fluxos de autenticação mais complexos (como OAuth), você pode precisar estender o cliente gerado com lógica adicional ou criar um wrapper que lide com renovação de tokens e outros problemas de autenticação."
          },
          {
            question: "Posso usá-lo com React, Vue, Angular ou outros frameworks?",
            answer: "Sim, o cliente TypeScript gerado é independente de framework e pode ser usado com qualquer framework JavaScript ou TypeScript. No React, você pode encapsular o cliente em hooks personalizados; no Vue, pode criar funções de composição; no Angular, pode estender o cliente como um serviço injetável."
          },
          {
            question: "Como usar o cliente gerado para upload de arquivos?",
            answer: "Para uploads de arquivos definidos na especificação OpenAPI (usando tipo de conteúdo 'multipart/form-data'), o gerador criará assinaturas de método apropriadas. Ao chamar esses métodos, você precisará construir objetos FormData para o corpo da requisição. Certifique-se de que sua especificação OpenAPI defina corretamente as operações de upload de arquivos."
          },
          {
            question: "E se minha especificação OpenAPI tiver erros?",
            answer: "O gerador tentará identificar problemas comuns na especificação e fornecer mensagens de erro apropriadas. Recomenda-se validar seu documento OpenAPI com um validador dedicado antes da geração. Erros na especificação podem resultar em código TypeScript incorreto ou incompleto."
          },
          {
            question: "Como manter o cliente TypeScript sincronizado com mudanças na API?",
            answer: "Sempre que sua API mudar e a especificação OpenAPI for atualizada, regenere o cliente TypeScript e atualize-o em seu projeto. Considere automatizar esse processo em seu fluxo de construção, para garantir que seu front-end sempre use o código mais recente do cliente API."
          }
        ]
      },
      integrationTips: {
        title: "Dicas para Integração do Cliente TypeScript Gerado",
        intro: "Depois de gerar seu cliente TypeScript, considere estas recomendações para uma integração suave com seu projeto:",
        items: [
          "Crie um módulo dedicado de cliente API em seu projeto, que reexporta o cliente gerado com qualquer configuração personalizada",
          "Use padrões de injeção de dependência para fornecer o cliente API em todo o aplicativo, facilitando o mock para testes",
          "Considere implementar interceptadores de requisição/resposta para lidar com problemas comuns como tratamento de erros, logging e autenticação",
          "Encapsule os métodos do cliente gerado em funções personalizadas que lidam com casos de erro específicos ou transformam dados para necessidades do aplicativo",
          "Configure a geração automática do cliente TypeScript como parte de seu pipeline CI/CD, para manter front-end e back-end sincronizados",
          "Use variáveis de ambiente ou arquivos de configuração para especificar URLs base da API para diferentes ambientes (desenvolvimento, staging, produção)",
          "Adicione lógica de retry para falhas temporárias, encapsulando métodos do cliente gerado com funcionalidade de repetição",
          "Implemente cache de requisições para dados acessados frequentemente, para melhorar desempenho e reduzir chamadas de API",
          "Combine os tipos gerados com bibliotecas de gerenciamento de estado (como Redux, MobX ou Vuex) para um estado de aplicativo com segurança de tipos",
          "Se estiver fazendo muitas requisições pequenas, considere implementar batch de requisições ou GraphQL para otimizar chamadas de API"
        ]
      }
    }
  }