export default {
    name: 'Depurador gRPC',
    description: 'Teste e depure serviços gRPC e mensagens protobuf',
    title: 'Depurador gRPC Online',
    intro: 'Depure serviços gRPC diretamente no navegador com suporte a análise de arquivos proto e construção dinâmica de formulários',
    connection: {
      title: 'Conexão',
      server: 'Endereço do servidor',
      serverPlaceholder: 'Insira o endereço do servidor gRPC (ex: localhost:50051)',
      useTLS: 'Usar TLS/SSL',
      tlsOptions: 'Opções TLS',
      caCert: 'Certificado CA',
      clientCert: 'Certificado do cliente',
      clientKey: 'Chave do cliente',
      insecure: 'Ignorar verificação TLS (inseguro)',
      timeout: 'Tempo limite (segundos)',
      serverUrl: 'URL do serviço gRPC',
      serverUrlPlaceholder: 'https://seu-servidor-grpc.com',
      timeoutMs: 'Tempo limite da requisição (ms)',
      timeoutPlaceholder: '30000',
      defaultTimeout: 'Padrão: 30000ms (30 segundos)',
      corsNote: 'Nota: O servidor precisa suportar protocolo gRPC-Web e CORS',
      keepalive: 'Ativar Keepalive',
      connect: 'Conectar',
      disconnect: 'Desconectar'
    },
    service: {
      title: 'Serviço',
      definition: 'Definição do serviço',
      load: 'Carregar arquivo Proto',
      paste: 'Colar definição Proto',
      protoPath: 'Caminho do arquivo Proto',
      importPath: 'Caminho de importação',
      services: 'Serviços',
      methods: 'Métodos',
      selectService: 'Selecionar serviço',
      selectMethod: 'Selecionar método',
      methodType: 'Tipo de método',
      unary: 'Unário',
      serverStreaming: 'Streaming do servidor',
      clientStreaming: 'Streaming do cliente',
      bidirectional: 'Bidirecional',
      protoDefinition: 'Definição do arquivo Proto',
      switchToText: 'Alternar para entrada de texto',
      switchToFile: 'Alternar para upload de arquivo',
      dragDrop: 'Arraste e solte arquivos .proto aqui ou',
      clickUpload: 'clique para enviar',
      onlyProto: 'Apenas arquivos .proto são suportados',
      loadExample: 'Carregar Proto de exemplo',
      formatProto: 'Formatar',
      clear: 'Limpar',
      parse: 'Analisar definição Proto',
      parsing: 'Analisando...'
    },
    request: {
      title: 'Requisição',
      metadata: 'Metadados',
      addMetadata: 'Adicionar metadados',
      key: 'Chave',
      value: 'Valor',
      message: 'Mensagem',
      jsonEditor: 'Editor JSON',
      protoEditor: 'Editor Proto',
      formEditor: 'Editor de formulário',
      send: 'Enviar requisição',
      cancel: 'Cancelar',
      stream: 'Mensagens de streaming',
      endStream: 'Finalizar streaming',
      exampleMessage: 'Mensagem de exemplo',
      validJson: 'JSON válido',
      invalidJson: 'JSON inválido',
      history: 'Histórico de requisições',
      body: 'Corpo da requisição',
      bodyPlaceholder: 'Insira o corpo da requisição em JSON...',
      runQuery: 'Executar consulta',
      requestSent: 'Enviada',
      param: 'Parâmetro da requisição',
      edit: 'Editar',
      sending: 'Enviando...',
      time: 'Tempo da requisição',
    },
    response: {
      title: 'Resposta',
      status: 'Status',
      metadata: 'Metadados',
      message: 'Mensagem',
      stream: 'Stream',
      noResponse: 'Nenhuma resposta recebida',
      receivedAt: 'Recebido em',
      duration: 'Duração',
      copy: 'Copiar resposta',
      download: 'Download',
      clear: 'Limpar',
      streamClosed: 'Stream finalizado',
      streamMessage: 'Mensagem de stream #{number}',
      stats: 'Estatísticas',
      messagesReceived: 'Mensagens recebidas',
      startTime: 'Hora de início',
      endTime: 'Hora de término',
      time: 'Tempo de resposta'
    },
    settings: {
      title: 'Configurações',
      theme: 'Tema',
      light: 'Claro',
      dark: 'Escuro',
      language: 'Idioma',
      maxResponseSize: 'Tamanho máximo da resposta',
      timeoutMs: 'Tempo limite padrão (ms)',
      prettyPrint: 'Formatação JSON',
      saveDir: 'Diretório de salvamento',
      clearHistory: 'Limpar histórico',
      protoFormat: 'Formato Proto',
      protobuf: 'Protobuf.js',
      grpcTools: 'Ferramentas gRPC',
      reflection: 'Usar reflexão do servidor'
    },
    messages: {
      connecting: 'Conectando a {server}...',
      connected: 'Conectado a {server}',
      disconnected: 'Desconectado do servidor',
      connectionError: 'Erro de conexão: {error}',
      requestSent: 'Requisição enviada',
      responseReceived: 'Resposta recebida',
      streamingStarted: 'Streaming iniciado',
      streamingEnded: 'Streaming finalizado',
      protoLoaded: 'Arquivo Proto carregado com sucesso',
      protoError: 'Erro ao carregar arquivo Proto: {error}',
      metadataAdded: 'Metadados adicionados',
      metadataError: 'Metadados inválidos',
      savedToFile: 'Resposta salva em arquivo',
      parsingError: 'Erro ao analisar mensagem: {error}',
      reflectionError: 'Erro de reflexão do servidor: {error}',
      invalidProto: 'Definição Proto inválida',
      emptyUrl: 'Insira a URL do serviço',
      selectServiceMethod: 'Selecione um serviço e método',
      invalidJson: 'Corpo da requisição não é um JSON válido: {error}',
      copy: 'Copiar',
      copied: 'Resposta copiada para área de transferência',
      copyFailed: 'Falha ao copiar, copie manualmente'
    },
    errors: {
      invalidArgument: 'ARGUMENTO_INVÁLIDO - Parâmetro inválido',
      notFound: 'NÃO_ENCONTRADO - Recurso não encontrado',
      alreadyExists: 'JÁ_EXISTE - Recurso já existe',
      permissionDenied: 'PERMISSÃO_NEGADA - Acesso negado',
      internal: 'INTERNO - Erro interno',
      requestFailed: 'Requisição falhou: {error}'
    },
    
    article: {
      title: "Depurador gRPC: Ferramenta interativa para teste de chamadas remotas",
      features: {
        title: "Entendendo a depuração gRPC e teste de APIs",
        description: "O <strong>Depurador gRPC</strong> é uma ferramenta web abrangente projetada para testar, depurar e explorar serviços gRPC diretamente do navegador. Diferente de clientes REST API tradicionais, este <strong>testador de buffers de protocolo</strong> oferece funcionalidades específicas para o protocolo binário gRPC e formato de mensagens Protocol Buffers (protobuf), permitindo que desenvolvedores interajam com serviços gRPC sem escrever código cliente personalizado.<br><br>Nosso <strong>testador de cliente gRPC</strong> suporta recursos essenciais como análise de arquivos proto, descoberta de serviços, construção dinâmica de requisições, gerenciamento de metadados e visualização completa de respostas. Isso o torna uma ferramenta indispensável para desenvolvedores de APIs trabalhando com arquiteturas de microsserviços modernas que utilizam gRPC para comunicação eficiente, fortemente tipada e de alto desempenho entre serviços.",
        useCases: {
          title: "Cenários práticos para teste gRPC",
          items: [
            "<strong>Desenvolvimento de APIs para microsserviços</strong>: Ao construir sistemas distribuídos baseados em arquiteturas de microsserviços, o <strong>testador gRPC</strong> permite que desenvolvedores validem endpoints de serviço, verifiquem formatos de mensagem e garantam a implementação correta dos contratos de serviço definidos em arquivos proto. Essa validação interativa ajuda a identificar problemas antecipadamente, antes da integração de serviços.",
            "<strong>Teste de integração de APIs</strong>: Para aplicações que utilizam serviços gRPC de terceiros ou internos, nosso depurador fornece uma maneira de explorar métodos disponíveis, testar diferentes parâmetros de entrada e entender formatos de resposta sem escrever clientes de teste. Engenheiros podem prototipar rapidamente códigos de integração primeiro entendendo o comportamento esperado através de testes manuais.",
            "<strong>Solução de problemas em produção</strong>: Quando comportamentos inesperados são encontrados em sistemas em produção usando gRPC, o depurador permite que engenheiros de suporte e desenvolvedores repliquem requisições específicas em ambiente controlado, manipulem parâmetros e observem respostas. Esse isolamento ajuda a determinar se problemas são originados da implementação do cliente, lógica do serviço ou configuração de rede.",
            "<strong>Desenvolvimento de esquemas Protocol Buffer</strong>: Na fase de design de APIs, a funcionalidade de <strong>inspetor protobuf</strong> ajuda a validar definições de esquema visualizando como definições abstratas de mensagem são traduzidas para estruturas concretas de requisição e resposta. Esse ciclo de feedback melhora o design de arquivos proto antes da implementação em larga escala.",
            "<strong>Análise de desempenho</strong>: O depurador fornece informações temporais sobre requisições, permitindo que desenvolvedores façam benchmark de desempenho de serviços gRPC sob diferentes condições. Testando com vários tamanhos e complexidades de payload, equipes podem identificar potenciais gargalos em suas implementações de serviço.",
            "<strong>Documentação e compartilhamento de conhecimento</strong>: A interface visual do <strong>navegador de serviços gRPC</strong> facilita demonstrar funcionalidades de API para partes interessadas não técnicas, novos membros da equipe ou parceiros. A ferramenta serve como alternativa interativa para documentação estática de APIs, ajudando outros a entenderem funcionalidades de serviço através de exemplos práticos."
          ]
        }
      },
      faq: {
        title: "Perguntas frequentes sobre depuração gRPC",
        items: [
          {
            question: "Qual a diferença entre gRPC e APIs REST?",
            answer: "gRPC e REST representam abordagens diferentes para design de APIs, com características distintas que influenciam quando cada um deve ser usado.<br><br><strong>gRPC</strong> é um framework RPC (Chamada Remota de Procedimento) de alta performance que usa Protocol Buffers para serialização de mensagens e opera sobre HTTP/2. Principais vantagens incluem:<br><br>• Abordagem <strong>contrato primeiro</strong> com interfaces fortemente tipadas definidas em arquivos .proto<br>• <strong>Serialização binária eficiente</strong> que produz mensagens menores<br>• Suporte nativo a <strong>streaming</strong> (unário, streaming do servidor, streaming do cliente e bidirecional)<br>• <strong>Conexões multiplexadas</strong> via HTTP/2 reduzindo latência<br>• <strong>Geração de código</strong> para múltiplas linguagens garantindo segurança de tipos<br><br><strong>REST</strong> (Transferência Representacional de Estado) é um estilo arquitetural que tipicamente usa JSON sobre HTTP/1.1, oferecendo:<br><br>• <strong>Simplicidade e familiaridade</strong> devido à ampla adoção<br>• Formatos <strong>legíveis por humanos</strong> como JSON ou XML<br>• Suporte nativo em navegadores <strong>sem bibliotecas adicionais</strong><br>• <strong>Acoplamento fraco</strong> entre cliente e servidor<br>• Amplo ecossistema de ferramentas para teste e documentação<br><br>O <strong>Depurador gRPC</strong> preenche a lacuna de ferramentas para gRPC, provendo funcionalidades de exploração similares a REST para serviços gRPC que tradicionalmente requeriam código cliente personalizado para teste."
          },
          {
            question: "Como criar arquivos .proto para teste?",
            answer: "Criar <strong>arquivos de definição Protocol Buffer</strong> (.proto) é um passo fundamental no desenvolvimento gRPC. Aqui está um guia para criar arquivos de teste para uso com nosso depurador:<br><br>1. <strong>Defina a versão da sintaxe</strong>: Comece com `syntax = \"proto3\";` para usar a versão mais recente da sintaxe proto.<br><br>2. <strong>Organize com pacotes</strong>: Use a palavra-chave `package` para agrupar serviços e mensagens relacionados, ajudando a evitar conflitos de nomes (ex: `package ecommerce;`).<br><br>3. <strong>Defina mensagens</strong>: Crie tipos de mensagem representando estruturas de dados que você usará:<br><pre>message Produto &#123;\n  string id = 1;\n  string nome = 2;\n  double preco = 3;\n  repeated string categorias = 4;\n&#125;</pre><br>4. <strong>Defina serviços</strong>: Especifique interfaces de serviço e seus métodos:<br><pre>service ServicoProduto &#123;\n  rpc ObterProduto(RequisicaoProduto) returns (Produto);\n  rpc BuscarProdutos(RequisicaoBusca) returns (stream Produto);\n  rpc AtualizarProduto(Produto) returns (RespostaAtualizacao);\n&#125;</pre><br>5. <strong>Importe outros protos</strong>: Use `import \"caminho/para/outro.proto\";` para referenciar definições de outros arquivos.<br><br>6. <strong>Adicione opções de campo</strong>: Use opções como `[deprecated=true]` ou opções personalizadas para aprimorar campos com comportamentos específicos.<br><br>Ao usar nosso <strong>Depurador gRPC</strong> para teste, você pode enviar este arquivo diretamente ou colar seu conteúdo na área de entrada de texto. O depurador analisará o arquivo e gerará a interface de formulário apropriada para construir requisições para seu serviço."
          },
          {
            question: "Esta ferramenta pode conectar a serviços gRPC seguros (SSL/TLS)?",
            answer: "Sim, o <strong>Depurador gRPC</strong> suporta conexão com serviços gRPC protegidos por SSL/TLS. Veja como ele lida com conexões seguras:<br><br>1. <strong>Limitações baseadas no navegador</strong>: Por rodar no navegador como ferramenta web, ele opera dentro das restrições de segurança do navegador. Pode conectar a:<br><br>• Serviços que suportam protocolo <strong>gRPC-Web</strong> (ligeiramente diferente do gRPC padrão)<br>• Serviços com cabeçalhos <strong>CORS (Compartilhamento de Recursos entre Origens)</strong> configurados corretamente<br>• Serviços com certificados SSL válidos (na maioria dos casos não autoassinados)<br><br>2. <strong>Uso de TLS</strong>: Ao conectar a serviços seguros, garanta que:<br><br>• Use prefixo <strong>\"https://\"</strong> ou ative explicitamente opção <strong>\"Usar TLS/SSL\"</strong><br>• O serviço deve ter certificado válido confiável pelo navegador<br>• Verifique se é necessária autenticação por certificado cliente (TLS mútuo)<br><br>3. <strong>Opções de autenticação</strong>: Para serviços que requerem autenticação, você pode adicionar:<br><br>• <strong>Chave API</strong> ou <strong>token de acesso</strong> via metadados<br>• Cabeçalho de <strong>autenticação básica</strong><br>• Token <strong>OAuth</strong> em cabeçalho de autorização<br><br>4. <strong>Considerações sobre proxy</strong>: Em alguns ambientes corporativos, pode ser necessário usar um proxy gRPC-Web (como Envoy) entre o navegador e o serviço gRPC real.<br><br>Se você está testando serviços internos que não atendem a esses requisitos, considere usar um cliente gRPC desktop ou configurar um proxy local para lidar com requisitos de segurança e expor um endpoint compatível para o depurador."
          },
          {
            question: "Por que é necessário analisar o arquivo proto antes de enviar requisições?",
            answer: "Analisar o arquivo proto é um passo crítico ao usar o <strong>Depurador gRPC</strong>, pelas seguintes razões:<br><br>1. <strong>Descoberta e validação de tipos</strong>: gRPC é um sistema fortemente tipado onde cliente e servidor devem concordar exatamente sobre formatos de mensagem. O arquivo proto serve como contrato definindo:<br><br>• Quais <strong>serviços e métodos</strong> estão disponíveis<br>• <strong>Tipos de parâmetros</strong> que cada método espera<br>• <strong>Tipos de resposta</strong> que cada método retorna<br>• Qualquer <strong>estrutura aninhada</strong> ou <strong>enumerações</strong> usadas na API<br><br>2. <strong>Geração dinâmica de interface</strong>: Após análise, o depurador pode:<br><br>• Mostrar lista de serviços e métodos disponíveis<br>• Construir formulários de requisição apropriados com campos corretos<br>• Fornecer controles de entrada específicos por tipo (campos de texto, entrada numérica, toggles para booleanos, etc)<br>• Definir valores padrão apropriados baseados no tipo de campo<br><br>3. <strong>Serialização binária</strong>: gRPC usa Protocol Buffers como formato binário de transporte. A definição proto permite que o depurador:<br><br>• <strong>Serializar</strong> sua entrada JSON para o formato binário protobuf correto<br>• <strong>Desserializar</strong> respostas binárias de volta para JSON legível<br>• Garantir que <strong>números e tipos de campo</strong> correspondam exatamente ao que o servidor espera<br><br>4. <strong>Prevenção de erros</strong>: Sem análise adequada, você poderia enviar requisições malformadas que falhariam no nível de serialização antes mesmo de alcançar a lógica do serviço.<br><br>Pense no arquivo proto como documentação da API combinada com esquema de serialização. O <strong>protocolo gRPC</strong> fundamentalmente requer essa informação para funcionar corretamente, diferentemente de APIs REST onde você pode explorar endpoints com pouco conhecimento prévio."
          },
          {
            question: "Quais tipos de métodos gRPC posso testar com este depurador?",
            answer: "Este <strong>Depurador gRPC</strong> suporta todos os quatro modos de comunicação definidos na especificação gRPC, cada um adequado para diferentes cenários de uso:<br><br>1. <strong>RPC Unário</strong>: Modo padrão de requisição-resposta onde o cliente envia uma única requisição e recebe uma única resposta. Mais similar a chamadas tradicionais de API REST, adequado para:<br><br>• Operações simples de recuperação de dados<br>• Criação, atualização ou exclusão de registros<br>• Requisições de autenticação e validação<br><br>Exemplo: `rpc ObterUsuario(RequisicaoUsuario) returns (Usuario);`<br><br>2. <strong>RPC de Streaming do Servidor</strong>: Cliente envia uma única requisição e recebe uma sequência de mensagens de resposta. Adequado para:<br><br>• Fontes de dados em tempo real<br>• Atualizações de progresso de operações longas<br>• Recuperação de grandes conjuntos de dados com carregamento progressivo<br><br>Exemplo: `rpc ListarProdutos(RequisicaoLista) returns (stream Produto);`<br><br>3. <strong>RPC de Streaming do Cliente</strong>: Cliente envia uma sequência de mensagens e recebe uma única resposta. Útil para:<br><br>• Upload de grandes conjuntos de dados<br>• Transmissão contínua de dados de sensores<br>• Operações em lote que produzem um único resultado<br><br>Exemplo: `rpc EnviarDados(stream PedacoDados) returns (ResumoEnvio);`<br><br>4. <strong>RPC Bidirecional</strong>: Cliente e servidor podem enviar e receber múltiplas mensagens em qualquer ordem. Esse modo totalmente assíncrono suporta:<br><br>• Aplicativos de chat<br>• Jogos ou colaboração em tempo real<br>• Fluxos de trabalho complexos envolvendo comunicação bidirecional<br><br>Exemplo: `rpc Chat(stream MensagemChat) returns (stream MensagemChat);`<br><br>Nosso depurador fornece elementos de interface apropriados para cada tipo, permitindo que você teste todos os modos de comunicação, com feedback visual para respostas em streaming e controles adequados para enviar mensagens em streaming do cliente."
          }
        ]
      },
      guide: {
        title: "Como usar o Depurador gRPC: Guia passo a passo",
        step1: "<strong>Defina a URL do serviço gRPC</strong>: No campo URL, insira o endereço do seu serviço gRPC. Para testes baseados em navegador, este deve ser um serviço que suporte protocolo gRPC-Web e tenha cabeçalhos CORS apropriados habilitados. Se testando um serviço seguro, use protocolo HTTPS (ex: https://seu-servico-grpc.com).",
        step2: "<strong>Configure tempo limite e opções de conexão</strong>: Configure o tempo limite da requisição (em milissegundos) de acordo com o tempo de resposta esperado do seu serviço. O padrão de 30000ms (30 segundos) é adequado para maioria dos serviços, mas pode precisar de ajuste para operações longas ou testes em redes lentas.",
        step3: "<strong>Forneça definições Protocol Buffer</strong>: Você pode enviar arquivos .proto arrastando e soltando na área de upload ou clicando para selecionar do dispositivo, ou alternar para modo de entrada de texto e colar suas definições Proto diretamente. Para iniciantes, a opção \"Carregar Proto de exemplo\" fornece um modelo inicial para entender o formato.",
        step4: "<strong>Analise as definições Proto</strong>: Clique no botão \"Analisar definição Proto\" para processar seu arquivo .proto. Isso analisará a interface de serviço, tipos de mensagem e definições de campo, permitindo que o depurador gere formulários de requisição apropriados e serialize/desserialize mensagens corretamente. Se houver erros de sintaxe em seu arquivo proto, você receberá mensagens de erro para ajudar a identificar problemas.",
        step5: "<strong>Selecione serviço e método</strong>: Após análise bem-sucedida, selecione um serviço específico (se seu arquivo proto definir múltiplos serviços) na lista suspensa. Então selecione o método que deseja testar na lista de métodos disponíveis. O tipo do método (unário, streaming do servidor, streaming do cliente ou bidirecional) será indicado para ajudar você a entender o modo de comunicação esperado.",
        step6: "<strong>Construa e personalize sua requisição</strong>: O depurador gera um template JSON para o tipo de requisição do método selecionado. Modifique a estrutura JSON fornecida para incluir seus valores de teste. O editor formata e valida automaticamente seu conteúdo JSON, garantindo que corresponda à estrutura de mensagem esperada. Se necessário, use o botão de formatação para limpar seu JSON.",
        step7: "<strong>Envie a requisição e analise a resposta</strong>: Clique no botão \"Enviar requisição\" para transmitir sua chamada gRPC ao serviço. Para chamadas unárias, você verá os dados de resposta exibidos na seção de resposta, junto com informações de tempo. Para chamadas em streaming, mensagens de resposta serão exibidas conforme chegarem. Se ocorrerem erros, o depurador mostrará detalhes para ajudar na solução de problemas."
      },
      conclusion: "O Depurador gRPC fornece uma interface intuitiva baseada em navegador para interagir com o mundo poderoso mas complexo dos serviços gRPC. Ao preencher a lacuna entre operadores humanos e o protocolo binário gRPC, esta ferramenta simplifica significativamente o processo de desenvolvimento, teste e solução de problemas de serviços de API modernos. Seja você projetando novas arquiteturas de microsserviços, integrando serviços gRPC existentes ou diagnosticando problemas em sistemas de produção, a abordagem visual fornecida por este depurador reduz a curva de aprendizado e acelera fluxos de trabalho de desenvolvimento. À medida que mais organizações adot"
    }
}