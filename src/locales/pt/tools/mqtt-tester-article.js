export default {
  title: "Ferramenta de Teste MQTT - Guia Completo para Testar o Protocolo de Mensagens IoT",
  intro: {
    title: "O que é a Ferramenta de Teste MQTT e por que você precisa",
    p1: "<b>MQTT (Message Queuing Telemetry Transport)</b> é um protocolo de mensagens leve projetado para dispositivos com recursos limitados e redes de baixa largura de banda/alta latência, tornando-o ideal para aplicações IoT (Internet das Coisas). Nossa ferramenta de teste MQTT fornece um ambiente abrangente para testar, depurar e otimizar conexões MQTT, permitindo que desenvolvedores validem sua infraestrutura de comunicação IoT de forma eficiente e confiável.",
    p2: "<b>A ferramenta de teste de protocolo MQTT</b> serve como ponte crucial entre o desenvolvimento e a implantação de dispositivos IoT, permitindo que você simule tanto publicadores quanto assinantes no ecossistema MQTT. Ao implementar publicação de mensagens em tempo real, assinatura de tópicos e diagnóstico de conexão, nossa ferramenta ajuda a identificar problemas potenciais antes que eles afetem ambientes de produção. Essa abordagem proativa reduz significativamente o tempo de depuração e aumenta a confiabilidade de aplicações IoT.",
    p3: "Usando nosso <b>cliente MQTT online</b>, você pode conectar-se a qualquer broker MQTT, testar vários níveis de Qualidade de Serviço (QoS), implementar mensagens de testamento (LWT) e verificar mensagens retidas. Se você está desenvolvendo sistemas de casa inteligente, soluções de monitoramento industrial ou qualquer aplicação IoT, nossa ferramenta de teste MQTT fornece os recursos necessários para garantir que sua infraestrutura de mensagens funcione corretamente em várias condições de rede e cenários de uso."
  },
  useCases: {
    title: "Aplicações Práticas do Teste MQTT",
    case1: "<b>Desenvolvimento e Depuração de Dispositivos IoT</b>: Engenheiros de hardware e desenvolvedores de firmware usam ferramentas de teste MQTT para validar a comunicação de dispositivos antes do design final. Ao desenvolver novos produtos IoT, a capacidade de verificar padrões de publicação de mensagens, formatos de conteúdo e respostas de assinatura ajuda a identificar e corrigir problemas de comunicação no início do ciclo de desenvolvimento, reduzindo significativamente o tempo para o mercado.",
    case2: "<b>Integração de Automação Residencial Inteligente</b>: Desenvolvedores que constroem sistemas de casa inteligente confiam no teste MQTT para garantir comunicação confiável entre vários dispositivos como termostatos, sistemas de iluminação e sensores de segurança. Nossa ferramenta de teste MQTT permite simular gatilhos e analisar respostas de dispositivos para verificar regras de automação, garantindo que seu ecossistema de casa inteligente funcione perfeitamente.",
    case3: "<b>Sistemas de Monitoramento Industrial</b>: Em ambientes IoT industriais, o teste MQTT ajuda a verificar se dados de sensores são transmitidos, processados e respondidos corretamente. Integradores de sistemas usam nossa ferramenta para simular leituras de sensores, testar limiares de alarme e verificar respostas adequadas do sistema de controle a diferentes cenários operacionais, aumentando a confiabilidade no chão de fábrica.",
    case4: "<b>Configuração e Otimização de Broker MQTT</b>: Administradores de sistemas usam ferramentas de teste MQTT para avaliar o desempenho do broker sob várias cargas, testar mecanismos de autenticação e otimizar configurações de Qualidade de Serviço. Nossa ferramenta de teste permite simular múltiplos clientes simultaneamente, ajudando a identificar possíveis gargalos e problemas de configuração que possam afetar sistemas de produção.",
    case5: "<b>Desenvolvimento de Aplicações Multiplataforma</b>: Desenvolvedores que constroem aplicações IoT para várias plataformas precisam garantir comportamento consistente de mensagens entre interfaces web, móveis e desktop. A ferramenta de teste MQTT fornece uma implementação de referência padrão para verificar se todos os aplicativos cliente interpretam mensagens consistentemente, reduzindo erros específicos de plataforma."
  },
  tutorial: {
    title: "Como Usar Nossa Ferramenta de Teste MQTT",
    intro: "Nossa ferramenta de teste MQTT foi projetada para ser intuitiva e poderosa. Siga estas etapas simples para testar efetivamente sua implementação MQTT:",
    step1: {
      title: "Etapa 1: Configurar Conexão",
      description: "Primeiro, na seção de conexão, insira os <b>detalhes do broker MQTT</b>. Informe a URL do broker (por exemplo, mqtt://broker.exemplo.com:1883 ou ws://broker.exemplo.com:8083 para conexões WebSocket). Você pode especificar um ID de cliente ou deixar em branco para gerar um aleatório. Se seu broker requer autenticação, insira nome de usuário e senha. Para conexões seguras, habilite a opção SSL/TLS. Após configurar, clique no botão \"Conectar\" para estabelecer conexão com o broker MQTT."
    },
    step2: {
      title: "Etapa 2: Assinar Tópicos",
      description: "Após conectar-se com sucesso ao broker, navegue até a <b>seção de assinatura</b> para ouvir mensagens. No campo de tópico, insira o tópico que deseja assinar. Tópicos MQTT suportam curingas - use # para corresponder a múltiplos níveis de tópico e + para um único nível (por exemplo, casa/+/temperatura assina leituras de temperatura de qualquer cômodo). Selecione o nível de Qualidade de Serviço (QoS) desejado e clique em \"Assinar\". A ferramenta agora monitorará qualquer mensagem publicada em tópicos correspondentes."
    },
    step3: {
      title: "Etapa 3: Publicar Mensagens",
      description: "Para enviar mensagens ao broker, use a <b>seção de publicação</b> da ferramenta. Insira o tópico de destino e componha o conteúdo da mensagem. Você pode formatar o conteúdo como texto simples, JSON (com validação), hexadecimal ou dados binários. Defina o nível QoS apropriado e decida se deseja definir o flag \"reter\", que instrui o broker a armazenar a mensagem para assinantes futuros. Clique no botão \"Publicar\" para enviar sua mensagem ao broker."
    },
    step4: {
      title: "Etapa 4: Monitorar e Analisar Mensagens",
      description: "A <b>seção de mensagens</b> exibe todas as comunicações recebidas e enviadas. Cada mensagem mostra o tópico, conteúdo, nível QoS, status de retenção e timestamp. Você pode filtrar mensagens por tópico ou conteúdo para focar em fluxos de dados específicos. Para inspeção detalhada, clique em qualquer mensagem para ver seu conteúdo completo. Use o botão \"Copiar Conteúdo\" para extrair dados da mensagem para análise adicional, ou a opção \"Duplicar para Publicação\" para responder rapidamente a mensagens recebidas."
    }
  },
  mqttBasics: {
    title: "Entendendo os Fundamentos do Protocolo MQTT",
    intro: "Para usar efetivamente a ferramenta de teste MQTT, é útil entender estes conceitos-chave do protocolo MQTT:",
    pubsub: {
      title: "Modelo Publicar-Assinar",
      description: "<b>MQTT usa uma arquitetura pub/sub</b> que desacopla remetentes de mensagens (publicadores) de receptores (assinantes). Esse modelo difere da comunicação tradicional cliente-servidor, introduzindo um broker que gerencia a distribuição de mensagens. Publicadores enviam mensagens para tópicos sem saber quem (se alguém) as receberá, enquanto assinantes expressam interesse em tópicos sem saber quem publica neles. Esse desacoplamento fornece escalabilidade e flexibilidade, permitindo modos de comunicação um-para-muitos, muitos-para-um e muitos-para-muitos."
    },
    qos: {
      title: "Níveis de Qualidade de Serviço (QoS)",
      description: "<b>MQTT oferece três níveis QoS</b> que equilibram confiabilidade e eficiência: QoS 0 (no máximo uma vez) não garante entrega mas tem overhead mínimo, ideal para dados não críticos como leituras de temperatura. QoS 1 (pelo menos uma vez) garante que mensagens chegam aos destinatários mas podem entregar duplicatas, adequado para mensagens importantes que podem lidar com duplicatas. QoS 2 (exatamente uma vez) garante entrega única através de handshake em quatro partes, perfeito para comandos críticos ou transações financeiras onde duplicatas causariam problemas."
    },
    retain: {
      title: "Mensagens Retidas",
      description: "<b>Mensagens retidas</b> são mensagens MQTT especiais que o broker armazena para assinantes futuros. Quando uma mensagem é publicada com o flag retain definido como true, o broker a salva como o valor mais recente para aquele tópico. Qualquer novo assinante do tópico recebe imediatamente a mensagem retida mais recente, mesmo que tenha se inscrito muito tempo após a publicação. Esse recurso é particularmente útil para informações de estado de dispositivos, valores de configuração ou outros dados de \"último valor conhecido\" que novos assinantes devem receber ao conectar."
    },
    lastwill: {
      title: "Mensagem de Testamento (LWT)",
      description: "<b>O recurso de testamento</b> fornece aos clientes um mecanismo para registrar uma mensagem de \"testamento\" com o broker durante a conexão. Se o cliente desconectar inesperadamente (sem enviar uma mensagem DISCONNECT apropriada), o broker automaticamente publica essa mensagem de testamento no tópico especificado. Esse sistema de notificação permite que outras partes do sistema IoT sejam alertadas sobre desconexões inesperadas e tomem ações apropriadas, como marcar dispositivos como offline ou acionar mecanismos de failover."
    }
  },
  faq: {
    title: "Perguntas Frequentes sobre Teste MQTT",
    q1: "Qual a diferença entre MQTT e HTTP para aplicações IoT?",
    a1: "<b>MQTT e HTTP representam abordagens diferentes para comunicação IoT</b>, cada um com vantagens distintas em cenários específicos. MQTT foi projetado para ambientes com restrições, usando modelo pub/sub, tamanho mínimo de pacote (tão pequeno quanto 2 bytes) e conexões persistentes para reduzir overhead. Ele se destaca em ambientes com largura de banda limitada, redes não confiáveis ou dispositivos alimentados por bateria.<br><br>Em contraste, HTTP segue um modelo solicitação-resposta, exigindo que clientes iniciem toda comunicação. Com maior overhead devido à necessidade de estabelecer conexões para cada transação e tamanhos de mensagem tipicamente maiores, HTTP beneficia-se de suporte universal, ecossistema rico de ferramentas e integração direta com aplicações web.<br><br>Para aplicações em tempo real que requerem comunicação bidirecional, MQTT geralmente oferece melhor desempenho, com recursos como níveis QoS, mensagens retidas e testamento. Nossa ferramenta de teste MQTT permite verificar esses recursos e determinar se MQTT é adequado para seu caso de uso IoT específico.",
    
    q2: "Como proteger comunicações MQTT?",
    a2: "<b>Proteger comunicações MQTT</b> envolve múltiplas camadas de proteção, todas testáveis com nossa ferramenta:<br><br>1. <b>Segurança de transporte</b>: Habilite criptografia TLS/SSL conectando-se a endpoints seguros (mqtts:// ou wss://) e configurando certificados apropriados. Nossa ferramenta suporta conexões criptografadas e não criptografadas, permitindo verificar implementações TLS corretas.<br><br>2. <b>Autenticação</b>: Implemente autenticação por usuário/senha ou certificados de cliente. Use as configurações de conexão de nossa ferramenta para testar essas credenciais, garantindo que seu broker aplique políticas de autenticação corretamente.<br><br>3. <b>Autorização</b>: Configure permissões em nível de tópico para controlar quais clientes podem publicar ou assinar tópicos específicos. Use nossa ferramenta para verificar se tentativas não autorizadas de publicação/assinatura são corretamente rejeitadas pelo broker.<br><br>4. <b>Criptografia de conteúdo</b>: Para segurança adicional, criptografe mensagens antes da publicação. Você pode usar nossa ferramenta para testar criptografia ponta-a-ponta, publicando mensagens criptografadas e verificando se assinantes autorizados podem descriptografá-las corretamente.<br><br>Lembre-se que segurança deve ser implementada em profundidade, combinando múltiplos métodos em vez de depender de um único mecanismo.",
    
    q3: "Quais as melhores práticas para design de tópicos MQTT?",
    a3: "<b>Design eficaz de tópicos MQTT</b> é crucial para sistemas IoT escaláveis e sustentáveis. Siga estes princípios-chave:<br><br>1. <b>Use hierarquia</b>, com barras como separadores (ex: prédio/andar/sala/dispositivo/medida). Essa organização permite filtragem eficiente com curingas e reflete a estrutura lógica do sistema.<br><br>2. <b>Evite tópicos começando com barra</b>, pois isso cria níveis vazios desnecessários e pode causar inconsistências na correspondência de tópicos entre implementações de broker.<br><br>3. <b>Inclua identificadores de dispositivo</b> em tópicos (ex: sensores/deviceID/temperatura), garantindo que cada dispositivo tenha um tópico único e simplificando roteamento de mensagens.<br><br>4. <b>Use namespaces padronizados</b> para funcionalidades comuns como status (status/deviceID), comandos (comandos/deviceID) e configuração (config/deviceID).<br><br>5. <b>Considere limites de tamanho</b> - embora MQTT permita tópicos longos, mantê-los concisos melhora eficiência, especialmente em dispositivos com restrições.<br><br>Nossa ferramenta de teste MQTT pode ajudar a validar seu design de tópicos, permitindo testar padrões de assinatura com curingas e verificar entrega de mensagens aos destinatários pretendidos.",
    
    q4: "Como solucionar problemas de conexão MQTT?",
    a4: "Ao enfrentar <b>problemas de conexão MQTT</b>, siga esta abordagem sistemática:<br><br>1. <b>Verifique conectividade de rede</b>: Assegure que o dispositivo pode alcançar o endereço IP e porta do broker. Use o indicador de status de conexão de nossa ferramenta para confirmar acesso básico à rede.<br><br>2. <b>Verifique URL e porta do broker</b>: Confirme se está usando a URL correta do broker, número da porta e protocolo (mqtt:// para TCP, ws:// para WebSocket). Portas comuns incluem 1883 (MQTT), 8883 (MQTT sobre TLS), 8083 (WebSocket) e 8084 (WebSocket seguro).<br><br>3. <b>Valide credenciais</b>: Se autenticação estiver habilitada, garanta que usuário e senha estão corretos. Erros de conexão frequentemente resultam de falhas de autenticação.<br><br>4. <b>Verifique configurações SSL/TLS</b>: Para conexões seguras, valide configuração de certificados, incluindo certificados CA, certificados de cliente e versões TLS suportadas.<br><br>5. <b>Verifique conflitos de ID de cliente</b>: Brokers MQTT geralmente não permitem múltiplas conexões com o mesmo ID. Nossa ferramenta pode ajudar a identificar se sua conexão está sendo rejeitada por conflito de ID.<br><br>6. <b>Consulte logs do broker</b>: A maioria dos brokers MQTT fornece logs detalhados de conexão que revelam a causa específica de falhas.<br><br>Nossa ferramenta de teste MQTT fornece status de conexão em tempo real e mensagens de erro detalhadas para ajudar a identificar a causa exata de problemas de conexão.",
    
    q5: "Qual a melhor abordagem para lidar com desconexões e reconexões MQTT?",
    a5: "Implementar um tratamento robusto para <b>desconexões MQTT</b> é essencial para aplicações IoT confiáveis:<br><br>1. <b>Habilite reconexão automática</b>: Configure seu cliente MQTT para tentar reconectar automaticamente quando a conexão for perdida. Nossa ferramenta tem esse recurso embutido, ajudando você a testar o comportamento do aplicativo em cenários de reconexão.<br><br>2. <b>Implemente backoff exponencial</b>: Não tente reconectar em intervalos fixos, mas use atrasos progressivamente maiores entre tentativas para evitar sobrecarregar o broker durante interrupções.<br><br>3. <b>Configure mensagem de testamento</b>: Defina uma LWT para notificar outras partes do sistema quando um dispositivo desconectar inesperadamente. Você pode testar esse recurso nas configurações avançadas de conexão de nossa ferramenta.<br><br>4. <b>Mantenha fila de mensagens</b>: Para dados críticos, implemente enfileiramento de mensagens no cliente durante desconexões, enviando-as quando a conexão for restabelecida.<br><br>5. <b>Use sessões persistentes</b>: Quando apropriado, habilite o flag \"limpar sessão\" para manter informações de assinatura e mensagens enfileiradas entre conexões.<br><br>6. <b>Monitore status de conexão</b>: Em ambientes de produção, implemente monitoramento de conexão e alertas para desconexões prolongadas.<br><br>Nossa ferramenta de teste MQTT pode simular vários cenários de desconexão, ajudando você a verificar se seu aplicativo lida adequadamente com problemas de conexão."
  },
  relatedTools: {
    title: "Explore Outras Ferramentas IoT e de Rede",
    description: "Aprimore seu fluxo de trabalho de desenvolvimento IoT com estas ferramentas complementares:",
    tool1: {
      name: "Testador WebSocket",
      url: "https://www.ufreetools.com/tool/websocket-tester",
      description: "Teste conexões WebSocket com envio e recebimento de mensagens em tempo real."
    },
    tool2: {
      name: "Formatador e Validador JSON",
      url: "https://www.ufreetools.com/tool/json-formatter",
      description: "Formate, valide e embeleze dados JSON comumente usados em conteúdos MQTT."
    },
    tool3: {
      name: "Detector de Proxy HTTP",
      url: "https://www.ufreetools.com/tool/http-proxy-detector",
      description: "Detecte se sua conexão usa proxy HTTP e analise cabeçalhos relacionados para verificação de segurança."
    },
    tool4: {
      name: "Codificador/Decodificador Base64",
      url: "https://www.ufreetools.com/tool/base64-encoder-decoder",
      description: "Codifique e decodifique dados binários em Base64 frequentemente usados em mensagens MQTT."
    }
  },
  resources: {
    title: "Recursos Autoritativos sobre Protocolo MQTT",
    resource1: {
      name: "MQTT.org - Documentação Oficial",
      url: "https://mqtt.org/",
      description: "Documentação, especificações e melhores práticas do protocolo MQTT mantidas pelo consórcio OASIS."
    },
    resource2: {
      name: "HiveMQ - Guia Essencial MQTT",
      url: "https://www.hivemq.com/mqtt-essentials/",
      description: "Série abrangente de artigos cobrindo todos os aspectos fundamentais do protocolo MQTT de forma prática."
    },
    resource3: {
      name: "Eclipse Mosquitto - Broker MQTT Open Source",
      url: "https://mosquitto.org/",
      description: "Documentação do popular broker MQTT open source, incluindo opções de configuração e melhores práticas de segurança."
    }
  }
}
