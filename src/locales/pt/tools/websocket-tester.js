export default {
    name: 'Testador WebSocket',
    description: 'Conecte-se a servidores WebSocket, envie mensagens e visualize respostas',
    connection: {
      url: 'URL WebSocket',
      urlPlaceholder: 'Exemplo: wss://echo.websocket.org',
      protocol: 'Subprotocolo (opcional)',
      protocolPlaceholder: 'Separados por vírgula',
      connect: 'Conectar',
      disconnect: 'Desconectar',
      status: 'Status da conexão',
      connected: 'Conectado',
      disconnected: 'Desconectado',
      waiting: 'Aguardando conexão',
      autoReconnect: 'Reconexão automática',
      reconnectMessage: 'Tentando reconectar em {0} segundos...'
    },
    options: {
      title: 'Opções',
      autoScroll: 'Rolagem automática'
    },
    messages: {
      send: 'Enviar mensagem',
      logs: 'Registro de mensagens',
      emptyLogs: 'Mensagens aparecerão aqui após conexão',
      placeholder: 'Digite a mensagem...',
      sendButton: 'Enviar',
      clearButton: 'Limpar',
      copyButton: 'Copiar',
      clearLogs: 'Limpar registros',
      copyLogs: 'Copiar registros',
      format: {
        title: 'Formato',
        text: 'Texto simples',
        json: 'JSON',
        binary: 'Binário'
      },
      templates: {
        json: 'JSON',
        text: 'Texto'
      },
      types: {
        sent: 'Enviado →',
        received: 'Recebido ←',
        error: 'Erro !',
        info: 'Informação'
      }
    },
    savedConnections: {
      title: 'Conexões salvas',
      empty: 'Nenhuma conexão salva',
      save: 'Salvar conexão',
      saveConnection: 'Salvar conexão',
      connectionName: 'Nome da conexão',
      load: 'Carregar',
      delete: 'Excluir',
      cancel: 'Cancelar'
    },
    testServers: {
      title: 'Servidores de teste',
      description: 'Servidores WebSocket públicos para testes:',
      useServer: 'Usar este servidor',
      servers: {
        echo: {
          name: 'Servidor Echo',
          description: 'Servidor de eco seguro com suporte WSS'
        },
        postman: {
          name: 'WebSocket.org',
          description: 'Serviço Echo do Postman com WSS'
        }
      }
    },
    logs: {
      connectingTo: 'Conectando a {0}...',
      connectionSuccess: 'Conexão estabelecida',
      connectionError: 'Erro WebSocket',
      connectionClosed: 'Conexão fechada (código: {0}{1})',
      invalidJson: 'JSON inválido: {0}',
      sendFailed: 'Falha ao enviar: {0}',
      emptyMessage: 'Mensagem não pode estar vazia',
      notConnected: 'Não conectado',
      copied: 'Registros copiados',
      copyFailed: 'Falha ao copiar: {0}',
      serverSelected: 'Servidor selecionado: {0}',
      binaryData: '[Dados binários]'
    },
    article: {
      title: "Testador WebSocket: Ferramenta para comunicação em tempo real",
      features: {
        title: "Entendendo WebSocket e suas aplicações",
        description: "O <strong>Testador WebSocket</strong> é uma ferramenta completa para testar, depurar e explorar comunicação em tempo real entre clientes e servidores usando o protocolo WebSocket. Diferente de conexões HTTP tradicionais que exigem novas requisições para cada interação, o WebSocket fornece um canal de comunicação bidirecional persistente que permanece aberto até ser explicitamente fechado.<br><br>Este <strong>cliente WebSocket</strong> permite que desenvolvedores estabeleçam conexões com servidores WebSocket, enviem mensagens personalizadas em vários formatos (texto, JSON ou binário) e vejam respostas em tempo real. Com gerenciamento de conexão, registro de mensagens e validação de formato, este <strong>testador de comunicação real-time</strong> fornece tudo necessário para desenvolver e depurar implementações WebSocket em diferentes plataformas e ambientes.",
        useCases: {
          title: "Aplicações práticas do Testador WebSocket",
          items: [
            "<strong>Desenvolvimento e depuração de APIs</strong>: Ao desenvolver APIs baseadas em WebSocket, o <strong>depurador WebSocket</strong> permite conectar-se a endpoints de desenvolvimento, enviar mensagens de teste e verificar se o servidor responde corretamente a diferentes formatos e casos extremos. Essa abordagem interativa ajuda a identificar problemas cedo no ciclo de desenvolvimento.",
            
            "<strong>Teste de aplicações em tempo real</strong>: Para apps que dependem de <strong>fluxo de dados em tempo real</strong> como chats, dashboards ou plataformas colaborativas, este testador permite simular conexões de clientes e verificar mensagens, notificações e mecanismos de sincronização.",
            
            "<strong>Comunicação IoT</strong>: Dispositivos IoT frequentemente usam WebSocket para <strong>conexões leves e persistentes</strong> com servidores. O testador pode simular padrões de comunicação IoT, ajudando a testar registro de dispositivos, transmissão de comandos e relatórios de telemetria sem hardware físico.",
            
            "<strong>Interação com servidores de jogos</strong>: Jogos online multiplayer usam WebSocket para <strong>interação em tempo real</strong> entre jogadores. Desenvolvedores podem usar esta ferramenta para testar respostas do servidor a ações dos jogadores e medir desempenho.",
            
            "<strong>Fluxo de dados financeiros</strong>: Plataformas de trading usam WebSocket para fornecer <strong>dados de mercado em tempo real</strong>. O testador permite validar assinaturas de dados e testar processamento de eventos financeiros sensíveis ao tempo.",
            
            "<strong>Solução de problemas em produção</strong>: Quando ocorrem problemas de conexão em produção, engenheiros podem usar o <strong>testador de conexão WebSocket</strong> para replicar cenários de usuários, verificar disponibilidade do servidor e diagnosticar problemas sem modificar código em produção."
          ]
        }
      },
      faq: {
        title: "Perguntas frequentes sobre WebSocket",
        items: [
          {
            question: "Qual a diferença entre WebSocket e HTTP?",
            answer: "WebSocket e HTTP atendem necessidades diferentes. HTTP é um protocolo request-response onde cada interação requer nova conexão. WebSocket estabelece <strong>conexões persistentes</strong> que permanecem abertas até serem explicitamente fechadas, permitindo comunicação bidirecional em tempo real com menor latência e uso de banda. Nosso testador WebSocket ajuda a explorar essas diferenças na prática."
          },
          {
            question: "Por que minha conexão WebSocket cai após inatividade?",
            answer: "Conexões podem cair devido a:<br><br>• <strong>Timeouts em proxies</strong> que fecham conexões inativas<br>• <strong>Configurações de firewall</strong> com políticas de timeout<br>• <strong>Timeout no servidor</strong> para gerenciar recursos<br>• <strong>Mudanças de rede</strong> em dispositivos móveis<br><br>Para manter conexões ativas, implemente <strong>mecanismos de heartbeat</strong> com mensagens ping/pong periódicas. Nosso testador inclui função de reconexão automática para ajudar nesses casos."
          },
          {
            question: "Posso testar conexões seguras (WSS)?",
            answer: "Sim, o <strong>Testador WebSocket</strong> suporta totalmente conexões seguras WSS (com TLS/SSL), essenciais para:<br><br>• Proteger dados sensíveis<br>• Cumprir requisitos de compliance<br>• Evitar restrições de navegadores<br>• Prevenir ataques MITM<br><br>A ferramenta funciona com endpoints seguros (wss://) e não seguros (ws://)."
          },
          {
            question: "Como formatar corretamente mensagens JSON?",
            answer: "Para mensagens JSON em WebSocket:<br><br>1. Use <strong>sintaxe JSON válida</strong> com chaves entre aspas<br>2. Estruture com campos como tipo, dados e ID<br>3. Escape caracteres especiais corretamente<br>4. Use tipos de dados apropriados<br><br>Exemplo:<br><pre>&#123;<br>  \"tipo\": \"inscrever\",<br>  \"canal\": \"dados_mercado\",<br>  \"símbolos\": [\"BTC/USD\", \"ETH/USD\"]<br>&#125;</pre><br>O testador inclui validação JSON e templates para ajudar."
          },
          {
            question: "Como salvar conexões para reuso?",
            answer: "O <strong>Testador WebSocket</strong> permite:<br><br>1. Salvar configurações de conexão com nomes<br>2. Reconectar com um clique<br>3. Armazenar conexões localmente<br>4. Usar templates de mensagem<br>5. Acessar servidores de teste públicos<br><br>Esse <strong>gerenciamento de conexões</strong> é valioso para testar múltiplos endpoints em diferentes ambientes."
          }
        ]
      },
      guide: {
        title: "Guia passo a passo do Testador WebSocket",
        steps: [
          "<strong>Insira a URL WebSocket</strong>: Comece inserindo o endereço do servidor WebSocket (ws:// ou wss://). Use servidores de teste públicos se necessário.",
          "<strong>Configure opções</strong>: Especifique subprotocolos se requeridos e ative reconexão automática para lidar com quedas.",
          "<strong>Estabeleça conexão</strong>: Clique \"Conectar\" para iniciar handshake. Monitore o status da conexão.",
          "<strong>Prepare mensagens</strong>: Digite mensagens para enviar, selecionando formato (texto, JSON ou binário).",
          "<strong>Envie e monitore</strong>: Envie mensagens e observe respostas no log. Use botões para limpar ou copiar logs.",
          "<strong>Salve conexões</strong>: Armazene configurações de conexão frequentes para acesso rápido.",
          "<strong>Analise padrões</strong>: Use logs cronológicos para identificar problemas de tempo ou sequenciamento."
        ]
      },
      conclusion: "O Testador WebSocket é uma ferramenta essencial para desenvolvedores de aplicações em tempo real, permitindo testar e depurar conexões WebSocket eficientemente sem clientes customizados. Com interface para estabelecer conexões, enviar mensagens em vários formatos e monitorar comunicação bidirecional, ele acelera significativamente o desenvolvimento de soluções baseadas em WebSocket. Seja para sistemas de chat, dashboards, IoT, jogos ou plataformas financeiras, este testador fornece funcionalidades necessárias para garantir implementações WebSocket confiáveis e responsivas. À medida que aplicações web evoluem para experiências mais interativas e em tempo real, ter uma ferramenta dedicada para testar essa camada crítica de comunicação torna-se cada vez mais valioso para manter experiências de usuário de alta qualidade em diversas condições de rede e plataformas cliente."
    }
  }