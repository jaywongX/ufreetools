export default {
    name: 'Gerador de Configuração CORS',
    description: 'Crie rapidamente configurações de Compartilhamento de Recursos entre Origens (CORS) com suporte para diversos ambientes de servidor',
    options: {
      title: 'Opções CORS',
      allowedOrigins: {
        title: 'Origens permitidas (Access-Control-Allow-Origin)',
        allowAll: 'Permitir todas as origens (*) <span class="text-yellow-500 text-xs ml-1">(inseguro, não suporta credenciais)</span>',
        specific: 'Especificar domínios permitidos (recomendado)',
        addOrigin: 'Adicionar origem',
        placeholder: 'Digite a origem (ex: https://exemplo.com)',
        wildcard: 'Permitir subdomínios (curinga)',
        null: 'Permitir origem nula',
        remove: 'Remover domínio'
      },
      allowedMethods: {
        title: 'Métodos HTTP permitidos (Access-Control-Allow-Methods)',
        selectMethods: 'Selecione os métodos HTTP',
        get: 'GET',
        post: 'POST',
        put: 'PUT',
        delete: 'DELETE',
        patch: 'PATCH',
        head: 'HEAD',
        options: 'OPTIONS'
      },
      allowedHeaders: {
        title: 'Cabeçalhos permitidos (Access-Control-Allow-Headers)',
        all: 'Permitir todos os cabeçalhos (*)',
        specific: 'Apenas cabeçalhos específicos',
        addHeader: 'Adicionar cabeçalho',
        headerPlaceholder: 'Digite o nome do cabeçalho',
        common: 'Cabeçalhos comuns',
        custom: 'Cabeçalhos personalizados',
        contentType: 'Content-Type',
        accept: 'Accept',
        authorization: 'Authorization',
        origin: 'Origin',
        xRequestedWith: 'X-Requested-With',
        contentDisposition: 'Content-Disposition',
        remove: 'Remover cabeçalho'
      },
      exposedHeaders: {
        title: 'Cabeçalhos expostos (Access-Control-Expose-Headers)',
        description: 'Cabeçalhos de resposta acessíveis pelo navegador',
        addHeader: 'Adicionar cabeçalho exposto',
        headerPlaceholder: 'Digite o nome do cabeçalho'
      },
      credentials: {
        title: 'Credenciais permitidas (Access-Control-Allow-Credentials)',
        description: 'Permitir uso de cookies e cabeçalhos de autenticação',
        allow: 'Permitir credenciais',
        warning: 'Deve ser usado apenas com origens específicas, não pode ser usado com curinga (*)'
      },
      maxAge: {
        title: 'Tempo de cache para requisições pré-voo (Access-Control-Max-Age)',
        description: 'Tempo de cache para resultados de requisições pré-voo (segundos)',
        seconds: 'segundos',
        default: 'Padrão: ',
        recommended: 'Recomendado: 3600 (1 hora)'
      },
      serverType: {
        title: 'Tipo de servidor',
        apache: 'Apache (.htaccess)',
        nginx: 'Nginx',
        express: 'Express.js',
        springBoot: 'Spring Boot',
        php: 'PHP',
        flask: 'Flask (Python)',
        django: 'Django',
        rails: 'Ruby on Rails',
        aws: 'AWS S3/CloudFront',
        azure: 'Azure',
        iis: 'IIS (web.config)',
        jetty: 'Jetty',
        headers: 'Cabeçalhos HTTP'
      }
    },
    output: {
      title: 'Cabeçalhos gerados',
      instructions: 'Adicione estes cabeçalhos às respostas do seu servidor:',
      copy: 'Copiar cabeçalhos',
      test: 'Testar cabeçalhos',
      downloadConfig: 'Baixar configuração'
    },
    configs: {
      title: 'Exemplos de configuração',
      nginx: 'Nginx',
      apache: 'Apache (.htaccess)',
      express: 'Express.js',
      springBoot: 'Spring Boot',
      php: 'PHP',
      flask: 'Flask (Python)',
      django: 'Django',
      rails: 'Ruby on Rails',
      aws: 'AWS S3/CloudFront',
      azure: 'Azure',
      iis: 'IIS Web.config'
    },
    testing: {
      title: 'Teste CORS',
      description: 'Teste se sua configuração CORS está funcionando corretamente',
      originUrl: 'URL de origem',
      targetUrl: 'URL de destino',
      method: 'Método de requisição',
      credentials: 'Incluir credenciais',
      headers: 'Cabeçalhos personalizados',
      addHeader: 'Adicionar cabeçalho',
      testButton: 'Testar CORS',
      results: 'Resultados do teste',
      success: 'Teste CORS bem-sucedido ✓',
      failure: 'Teste CORS falhou ✗✗',
      details: 'Detalhes da resposta',
      response: 'Resposta',
      logs: 'Logs CORS',
      errorDetails: 'Detalhes do erro'
    },
    presets: {
      title: 'Predefinições',
      api: 'Servidor API',
      assets: 'Recursos estáticos (CDN)',
      auth: 'Serviço de autenticação',
      publicAccess: 'Acesso público',
      restrictive: 'Restritivo',
      load: 'Carregar predefinição',
      save: 'Salvar atual como predefinição'
    },
    tips: {
      title: 'Dicas CORS',
      tip1: 'O Compartilhamento de Recursos entre Origens (CORS) é um mecanismo baseado em cabeçalhos HTTP que permite que servidores indiquem quais outras origens (domínios, protocolos ou portas) podem carregar recursos além de si mesmas.',
      tip2: 'A proteção CORS é um recurso de segurança dos navegadores modernos que impede que páginas web façam requisições para servidores de origens diferentes, protegendo os usuários contra ataques de falsificação de requisição entre sites.',
      usage: {
        title: 'Cenários de uso do CORS:',
        tip1: 'Permitir que JavaScript front-end acesse APIs em domínios diferentes',
        tip2: 'Suportar requisições Ajax ou Fetch entre origens',
        tip3: 'Permitir acesso entre origens a fontes, CSS ou outros recursos',
        tip4: 'Configurar comunicação entre serviços em arquitetura de microsserviços',
      },
      safe: 'Dica de segurança: Geralmente deve-se evitar usar o curinga "*" para origens permitidas, especificando explicitamente os domínios confiáveis para reduzir riscos de segurança.'
    },
    messages: {
      copied: 'Cabeçalhos copiados para a área de transferência',
      configDownloaded: 'Configuração baixada',
      testStarted: 'Teste CORS iniciado',
      testSucceeded: 'Requisição CORS bem-sucedida',
      testFailed: 'Requisição CORS falhou: {error}',
      presetSaved: 'Predefinição salva',
      presetLoaded: 'Predefinição carregada'
    },
    config: {
      title: 'Configuração',
      empty: 'Configure as opções para gerar as definições CORS',
      copied: 'Configuração copiada para a área de transferência!',
      copy: 'Copiar'
    },
    comments: {
      expressMiddleware: "// Usar middleware Express",
      applyGlobalCors: "// Aplicar middleware CORS",
      applySpecificRoute: "// Ou aplicar apenas para rotas específicas",
      applyRequest: "// Processar requisição",
      apacheAllowedOrigins: "# Domínios permitidos",
      apacheAllowedMethods: "# Métodos HTTP permitidos",
      apacheAllowedHeaders: "# Cabeçalhos HTTP permitidos",
      apacheAllowedCredentials: "# Credenciais permitidas",
      preflightCacheDuration: "# Tempo de cache para pré-voo",
      apacheExposeHeaders: '# Cabeçalhos de resposta expostos',
      handlePreflightRequest: "# Processar requisição de pré-voo",
      nginxConfiguration: "# Configuração CORS\n# Adicione esta configuração ao seu bloco server ou location",
      nginxAllowedOrigins: "# Domínios permitidos",
      nginxAllowedMethods: "# Métodos HTTP permitidos",
      nginxAllowedHeaders: "# Cabeçalhos HTTP permitidos",
      nginxAllowedCredentials: "# Credenciais permitidas",
      nginxPreflightCacheDuration: "# Tempo de cache para pré-voo",
      nginxExposeHeaders: '# Cabeçalhos de resposta expostos',
      nginxHandlePreflight: "# Processar requisição de pré-voo",
      httpHeadersConfiguration: "# Configuração de cabeçalhos HTTP CORS",
      httpAllowedOrigins: "# Domínios permitidos",
      httpAllowedMethods: "# Métodos HTTP permitidos",
      httpAllowedHeaders: "# Cabeçalhos HTTP permitidos",
      httpAllowedCredentials: "# Credenciais permitidas",
      httpPreflightCacheDuration: "# Tempo de cache para pré-voo",
      httpExposeHeaders: '# Cabeçalhos de resposta expostos',
    },
    article: {
      title: "Guia Completo do Gerador de Configuração CORS - Configurações Seguras de Compartilhamento de Recursos entre Origens",
      intro: {
        title: "Entenda a configuração CORS e seu papel crucial na segurança na web",
        p1: "<b>O Compartilhamento de Recursos entre Origens (CORS)</b> é um mecanismo de segurança fundamental implementado pelos navegadores modernos para controlar como páginas web em um domínio podem solicitar e interagir com recursos hospedados em outro domínio. Nosso gerador de configuração CORS simplifica o processo complexo de criação dos cabeçalhos e configurações de servidor CORS apropriados, garantindo que suas aplicações web possam se comunicar com segurança entre diferentes domínios, mantendo os limites de segurança adequados. Ao gerar configurações CORS precisamente personalizadas, esta ferramenta ajuda desenvolvedores a implementar controles de acesso apropriados, protegendo dados sensíveis enquanto habilita funcionalidades legítimas entre origens.",
        p2: "<b>Configurações CORS corretas são essenciais para aplicações web modernas</b>, especialmente aquelas que utilizam arquiteturas distribuídas, APIs de terceiros e microsserviços. Sem configurações CORS adequadas, os navegadores bloquearão por padrão requisições entre origens como medida de segurança, impedindo o funcionamento correto de muitas arquiteturas comuns de aplicações web. Nosso gerador cria configurações padronizadas para diversos ambientes de servidor, incluindo Node.js/Express, Apache, Nginx e cabeçalhos HTTP brutos, permitindo que desenvolvedores implementem políticas CORS consistentes, independentemente de sua stack tecnológica. Isso simplifica fluxos de trabalho de desenvolvimento e reduz a probabilidade de erros de configuração de segurança que podem expor aplicações a vulnerabilidades como falsificação de requisição entre sites (CSRF) e roubo de dados.",
        p3: "<b>A criação de políticas CORS requer consideração cuidadosa</b> de vários parâmetros de segurança, incluindo origens permitidas, métodos HTTP, cabeçalhos, tratamento de credenciais e instruções de cache. Configurações manuais são propensas a erros, podendo resultar em políticas excessivamente restritivas que quebram funcionalidades ou configurações perigosamente permissivas que comprometem a segurança. Nossa ferramenta guia os usuários através de cada opção de configuração com explicações claras e valores padrão seguros, ajudando desenvolvedores a tomar decisões informadas sobre sua implementação CORS. As configurações geradas equilibram requisitos de segurança com necessidades de funcionalidade entre origens, oferecendo valor imediato para desenvolvedores front-end, arquitetos de API e engenheiros de segurança trabalhando com aplicações web modernas."
      },
      useCases: {
        title: "Aplicações práticas do Gerador de Configuração CORS",
        case1: "<b>Gateways API e arquiteturas de microsserviços</b>: Organizações desenvolvendo sistemas distribuídos com gateways API e microsserviços frequentemente precisam de configurações CORS precisas para garantir comunicação segura entre aplicações front-end e serviços back-end. Arquitetos de API usam nosso gerador CORS para desenvolver configurações padronizadas de cabeçalhos que podem ser implementadas consistentemente em múltiplos endpoints de serviço. Essa abordagem permite que microsserviços mantenham isolamento apropriado enquanto ainda aceitam requisições entre origens legítimas de aplicações clientes autorizadas. Por exemplo, uma empresa de fintech pode configurar sua API de processamento de pagamentos para aceitar apenas requisições de domínios front-end específicos, bloqueando todas as outras requisições entre origens. Nosso gerador cria configurações que mantêm esses limites de segurança sem exigir que desenvolvedores escrevam manualmente regras complexas de cabeçalhos para cada serviço.",
        case2: "<b>Integrações de API de terceiros e aplicações SaaS</b>: Empresas que fornecem serviços de API e plataformas SaaS precisam habilitar integrações entre origens com configurações CORS apropriadas, mantendo limites de segurança. Engenheiros de plataforma usam nosso gerador para criar configurações que permitam acesso entre origens seletivamente com base em domínios de parceiros e status de assinatura. Por exemplo, uma plataforma de análise de marketing pode configurar sua API de dados para aceitar requisições de domínios de clientes enquanto previne acesso não autorizado. O gerador ajuda a criar políticas CORS de escopo preciso que podem ser ajustadas dinamicamente conforme os relacionamentos com clientes evoluem, garantindo que o acesso à API permaneça seguro e alinhado com o negócio. Essa funcionalidade é especialmente valiosa em cenários de ecossistema de parceiros, onde provedores de API devem equilibrar abertura para integração com necessidades de segurança.",
        case3: "<b>Redes de Distribuição de Conteúdo (CDN) seguras e hospedagem de ativos</b>: Organizações que hospedam ativos estáticos como fontes, folhas de estilo, imagens e bibliotecas JavaScript em CDNs dedicadas precisam de configurações CORS apropriadas para disponibilizar esses recursos para suas aplicações web. Engenheiros DevOps usam nosso gerador para criar configurações que permitam acesso específico de aplicações aos recursos hospedados na CDN, enquanto previnem uso não autorizado por outros domínios. Por exemplo, uma empresa de publicação que hospeda fontes premium configuraria cabeçalhos CORS para permitir apenas seus próprios sites usarem esses ativos. O gerador cria configurações específicas para ambientes CDN e servidores edge, otimizando segurança e desempenho através de instruções de cache e controles de acesso apropriados. Isso garante que recursos estáticos permaneçam protegidos enquanto ainda são entregues eficientemente para aplicações autorizadas.",
        case4: "<b>Ambientes de desenvolvimento e teste</b>: Equipes de desenvolvimento de software trabalhando com múltiplos ambientes (desenvolvimento, staging, produção) precisam de configurações CORS flexíveis para acomodar diferentes requisitos de segurança durante o ciclo de vida de desenvolvimento. Desenvolvedores front-end usam nosso gerador para criar configurações específicas por ambiente, permitindo acesso entre origens durante desenvolvimento e teste enquanto implementam controles mais rigorosos em produção. Por exemplo, ambientes de desenvolvimento podem permitir origens localhost para testes locais, enquanto ambientes de produção se restringiriam apenas a domínios de produção verificados. O gerador ajuda a criar essas políticas de segurança graduadas sem exigir reconfiguração manual extensiva, simplificando fluxos de trabalho de desenvolvimento enquanto mantém limites de segurança apropriados em cada estágio. Essa abordagem previne atalhos de segurança durante o desenvolvimento de persistirem em ambientes de produção.",
        case5: "<b>Aplicações web multi-regionais e internacionais</b>: Organizações globais operando aplicações em múltiplas regiões geográficas frequentemente implantam serviços em domínios e subdomínios regionais específicos que devem se comunicar com segurança. Arquitetos de sistemas usam nosso gerador para criar configurações CORS que permitam requisições entre origens entre diferentes domínios regionais da organização, enquanto bloqueiam requisições externas. Por exemplo, uma empresa multinacional pode precisar permitir que api.br.exemplo.com aceite requisições de app.us.exemplo.com. O gerador cria especificações precisas de origem que consideram essas relações complexas de domínio, mantendo limites de segurança contra domínios não autorizados. Essas configurações garantem que componentes distribuídos geograficamente da mesma aplicação possam operar de forma coordenada enquanto mantêm proteção contra ameaças entre origens não autorizadas."
      },
      tutorial: {
        title: "Como gerar configurações CORS seguras",
        intro: "Siga este guia passo a passo para criar configurações CORS personalizadas para suas necessidades específicas:",
        step1: {
          title: "Passo 1: Configurar origens permitidas",
          description: "Primeiro, especifique quais domínios podem acessar seus recursos na seção <b>Origens permitidas</b>. Para máxima segurança, evite a opção curinga (*) que permite qualquer domínio acessar seus recursos. Em vez disso, selecione \"Especificar domínios permitidos\" e adicione individualmente cada domínio confiável. Por exemplo, digite \"https://seuaplicativoconfiado.com\" para permitir apenas esse domínio específico. Lembre-se de incluir o protocolo (https://) e note que subdomínios são considerados origens diferentes (app.exemplo.com e api.exemplo.com são origens distintas). Se precisar suportar ambientes de desenvolvimento, você pode adicionar domínios de desenvolvimento como \"http://localhost:3000\" junto com seus domínios de produção. Após adicionar todos os domínios confiáveis, verifique cuidadosamente erros de digitação, pois mesmo pequenos erros podem fazer com que navegadores bloqueiem requisições legítimas."
        },
        step2: {
          title: "Passo 2: Especificar métodos HTTP permitidos",
          description: "Em seguida, na seção <b>Métodos HTTP permitidos</b>, selecione quais métodos HTTP sua API ou recursos devem aceitar de requisições entre origens. Siga o princípio do menor privilégio, habilitando apenas os métodos que sua aplicação realmente necessita. Para recursos somente leitura, considere limitar a GET e OPTIONS (OPTIONS é necessário para requisições de pré-voo). Para recursos que aceitam atualizações, habilite seletivamente POST, PUT, PATCH ou DELETE conforme os requisitos reais de sua API. Tenha cuidado especial ao habilitar métodos que modificam dados (POST, PUT, PATCH, DELETE), pois estes requerem considerações adicionais de segurança. O método OPTIONS geralmente deve permanecer habilitado, pois navegadores o usam para requisições de pré-voo que verificam permissões antes de fazer requisições entre origens reais com outros métodos. Suas escolhas aqui afetam diretamente quais operações clientes entre origens podem executar em seus recursos."
        },
        step3: {
          title: "Passo 3: Configurar cabeçalhos e credenciais",
          description: "Na seção <b>Cabeçalhos permitidos</b>, especifique quais cabeçalhos HTTP devem ser permitidos em requisições entre origens. Habilite cabeçalhos comuns que sua aplicação necessita, como 'Content-Type' para especificar formato de requisição, 'Authorization' para tokens de autenticação e quaisquer cabeçalhos personalizados que sua aplicação use. Para autenticação baseada em credenciais (cookies, autenticação HTTP ou certificados clientes), configure apropriadamente a opção <b>Credenciais permitidas</b>. Importante: ao permitir credenciais, você não pode usar curinga (*) para origens permitidas - deve especificar origens explícitas. Em seguida, defina um tempo de cache apropriado para <b>Requisições de pré-voo</b> para reduzir o número de requisições OPTIONS. O valor recomendado de 3600 segundos (1 hora) equilibra desempenho com flexibilidade para atualizar políticas CORS quando necessário. Finalmente, se sua API retorna cabeçalhos personalizados que aplicações clientes precisam acessar, adicione-os à seção <b>Cabeçalhos expostos</b>."
        },
        step4: {
          title: "Passo 4: Gerar e implementar configuração no servidor",
          description: "Após configurar todos parâmetros CORS, selecione seu ambiente de servidor alvo (Node.js/Express, Apache, Nginx ou cabeçalhos HTTP) nas opções de formato. Revise o código de configuração gerado para garantir que atenda seus requisitos. Use o botão \"Copiar\" para copiar a configuração e implementá-la em seu ambiente de servidor seguindo a documentação de sua plataforma. Para aplicações Node.js, instale o pacote 'cors' e aplique a configuração à sua aplicação Express. Para servidores Apache, adicione as diretivas geradas ao seu arquivo .htaccess ou configuração do servidor. Para Nginx, inclua as diretivas em seus blocos server ou location. Após implementação, teste minuciosamente sua configuração CORS com requisições entre origens para verificar se requisições legítimas são permitidas enquanto origens não autorizadas permanecem bloqueadas. Considere usar ferramentas de desenvolvedor do navegador para inspecionar cabeçalhos CORS retornados por seu servidor e depurar quaisquer problemas."
        }
      },
      corsDetails: {
        title: "Detalhes técnicos da implementação CORS",
        intro: "Entender os mecanismos subjacentes do CORS ajuda a criar configurações mais eficazes e seguras:",
        preflight: {
          title: "Requisições de pré-voo e seu papel",
          description: "<b>Requisições de pré-voo são um mecanismo de segurança crucial no protocolo CORS</b>, usado por navegadores para verificar permissões antes de enviar certas requisições entre origens. Quando uma requisição pode modificar dados do servidor (como POST ou PUT) ou usa cabeçalhos não simples, o navegador primeiro envia automaticamente uma requisição OPTIONS ao servidor. Essa requisição de pré-voo inclui cabeçalhos indicando os métodos HTTP e cabeçalhos que a requisição real pretende usar. O servidor deve responder com cabeçalhos Access-Control-Allow-* apropriados indicando se a requisição pretendida é permitida. Esse mecanismo de pré-voo fornece um ponto crítico de verificação de segurança, prevenindo que requisições entre origens potencialmente perigosas sejam enviadas a servidores que não optaram explicitamente por recebê-las. Nosso gerador de configuração CORS cria automaticamente o tratamento necessário do lado do servidor para essas requisições de pré-voo em todas plataformas suportadas, garantindo que seu servidor responda adequadamente a essas verificações de segurança do navegador com as permissões que você especificou."
        },
        security: {
          title: "Impacto de segurança das configurações CORS",
          description: "<b>Configurações CORS afetam diretamente</b> o estado de segurança de sua aplicação web, controlando quais domínios externos podem interagir com seus endpoints de API e recursos. Configurações excessivamente permissivas - especialmente usando origem curinga (*) - podem expor sua aplicação a ataques de falsificação de requisição entre sites, onde sites maliciosos usam sessões autenticadas de usuários para fazer requisições não autorizadas à sua API. Permitir credenciais com origens curinga cria vulnerabilidades particularmente graves, embora navegadores impeçam essa combinação específica (servidores mal configurados podem não). Mesmo sem credenciais, políticas CORS excessivamente abertas podem expor APIs e dados sensíveis a sites não autorizados. O princípio do menor privilégio deve guiar sua configuração CORS: permita apenas origens, métodos e cabeçalhos estritamente necessários para sua aplicação funcionar. Nosso gerador promove melhores práticas de segurança através de avisos claros sobre configurações potencialmente inseguras e valores padrão seguros que protegem seus recursos enquanto habilitam funcionalidades entre origens necessárias. Essa abordagem ajuda a prevenir erros comuns de configuração que podem levar à exposição de dados ou operações não autorizadas."
        },
        headers: {
          title: "Explicação dos principais cabeçalhos CORS",
          description: "<b>Cada cabeçalho CORS tem uma função de segurança específica</b> no controle de acesso entre origens a seus recursos. Access-Control-Allow-Origin especifica quais domínios podem acessar seus recursos - os navegadores aplicam rigorosamente essa correspondência de origem. Access-Control-Allow-Methods declara quais métodos HTTP domínios externos podem usar em requisições a seus recursos, permitindo restringir requisições entre origens a operações somente leitura se necessário. Access-Control-Allow-Headers controla quais cabeçalhos HTTP podem ser incluídos em requisições entre origens, permitindo cabeçalhos específicos como Authorization enquanto bloqueia outros. Access-Control-Allow-Credentials determina se navegadores podem enviar cookies ou informações de autenticação em requisições entre origens, crucial para manter sessões autenticadas entre origens. Access-Control-Max-Age especifica por quanto tempo navegadores devem cachear respostas de pré-voo, otimizando desempenho ao reduzir requisições OPTIONS. Access-Control-Expose-Headers permite tornar certos cabeçalhos de resposta visíveis para clientes entre origens, necessário quando aplicações clientes precis"
        },
        headers: {
          title: "Explicação dos principais cabeçalhos CORS",
          description: "<b>Cada cabeçalho CORS tem uma função de segurança específica</b> no controle de acesso entre origens a seus recursos. Access-Control-Allow-Origin especifica quais domínios podem acessar seus recursos - os navegadores aplicam rigorosamente essa correspondência de origem. Access-Control-Allow-Methods declara quais métodos HTTP domínios externos podem usar em requisições a seus recursos, permitindo restringir requisições entre origens a operações somente leitura se necessário. Access-Control-Allow-Headers controla quais cabeçalhos HTTP podem ser incluídos em requisições entre origens, permitindo cabeçalhos específicos como Authorization enquanto bloqueia outros. Access-Control-Allow-Credentials determina se navegadores podem enviar cookies ou informações de autenticação em requisições entre origens, crucial para manter sessões autenticadas entre origens. Access-Control-Max-Age especifica por quanto tempo navegadores devem cachear respostas de pré-voo, otimizando desempenho ao reduzir requisições OPTIONS. Access-Control-Expose-Headers permite tornar certos cabeçalhos de resposta visíveis para clientes entre origens, necessário quando aplicações clientes precisam acessar cabeçalhos personalizados nas respostas de sua API. Nosso gerador cria combinações apropriadas desses cabeçalhos baseadas em suas necessidades específicas, garantindo uma configuração CORS completa e coerente."
        }
      },
      faq: {
        title: "Perguntas frequentes sobre configuração CORS",
        q1: "Qual a diferença entre a Política de Mesma Origem (Same-Origin Policy) e CORS?",
        a1: "<b>A Política de Mesma Origem (SOP) e o CORS</b> trabalham juntos para criar um ambiente seguro de navegação web, mas com propósitos distintos. A SOP é o mecanismo de segurança padrão nos navegadores que restringe como documentos ou scripts de uma origem podem interagir com recursos de outra origem - é uma linha de base restritiva que bloqueia requisições entre origens por padrão. O CORS, por outro lado, é um relaxamento controlado dessa política - fornece uma maneira estruturada para servidores declararem quais origens devem ter permissão para acessar seus recursos, apesar das restrições da SOP. Enquanto a SOP é uma restrição imposta pelo navegador, o CORS é implementado através de cabeçalhos HTTP que o servidor envia para informar ao navegador quais exceções à SOP devem ser permitidas. Nosso gerador de configuração CORS cria as configurações do lado do servidor que habilitam essas exceções controladas à Política de Mesma Origem. Sem os cabeçalhos CORS apropriados, os navegadores aplicarão a SOP e bloquearão requisições entre origens, mesmo que seu servidor seja tecnicamente capaz de atendê-las - por isso a configuração CORS é essencial para aplicações web modernas que precisam compartilhar recursos entre diferentes domínios.",
        
        q2: "Por que não posso usar o curinga (*) para origens permitidas quando habilito credenciais?",
        a2: "<b>Os navegadores proíbem estritamente o uso do curinga (*) com credenciais</b> como uma medida crítica de segurança para prevenir vulnerabilidades graves. Se os navegadores permitissem a combinação de Access-Control-Allow-Origin: * com Access-Control-Allow-Credentials: true, isso criaria um cenário perigoso onde qualquer website poderia fazer requisições autenticadas (usando cookies, autenticação HTTP ou certificados clientes) à sua API. Isso efetivamente eliminaria a proteção da Política de Mesma Origem contra ataques de falsificação de requisição entre sites (CSRF). Por exemplo, um site malicioso poderia usar os cookies de autenticação de um usuário para fazer requisições à sua API bancária, potencialmente transferindo fundos ou acessando informações sensíveis. Para prevenir esse tipo de vulnerabilidade, todos os principais navegadores aplicam uma regra estrita: quando Access-Control-Allow-Credentials está definido como true, o cabeçalho Access-Control-Allow-Origin deve especificar uma origem exata, não podendo ser o curinga (*). Nosso gerador de CORS reforça essa restrição de segurança desabilitando a opção de credenciais quando o curinga está selecionado, e vice-versa, garantindo que suas configurações geradas sempre cumpram esse requisito crítico de segurança do navegador.",
        
        q3: "Como as requisições de pré-voo CORS afetam o desempenho da minha API?",
        a3: "<b>As requisições de pré-voo CORS podem impactar significativamente o desempenho da API</b>, pois adicionam uma requisição HTTP adicional (OPTIONS) antes de muitas requisições entre origens. Cada requisição de pré-voo cria latência, pois o navegador deve aguardar a resposta OPTIONS antes de prosseguir com a requisição real. Isso efetivamente dobra o número de requisições e viagens de ida e volta (round-trips) para requisições entre origens não simples, impactando especialmente aplicações com chamadas frequentes de API ou conexões com alta latência. Para mitigar esse impacto no desempenho, o cabeçalho Access-Control-Max-Age é essencial - ele instrui o navegador a cachear o resultado da requisição de pré-voo por um tempo especificado (em segundos), evitando requisições OPTIONS adicionais para o mesmo recurso durante esse período. Nosso gerador recomenda um valor padrão de 3600 segundos (1 hora) como um equilíbrio razoável entre otimização de desempenho e flexibilidade para atualizar políticas CORS quando necessário. Para aplicações de alto tráfego, você pode considerar aumentar esse valor (até 86400 segundos/24 horas, embora navegadores possam impor seus próprios limites máximos). Além disso, para máxima performance em ambientes de produção, garanta que seu servidor responda rapidamente às requisições OPTIONS e considere implementar rotas específicas otimizadas para lidar com requisições de pré-voo com sobrecarga mínima de processamento.",
        
        q4: "Como testar corretamente se minha configuração CORS está funcionando?",
        a4: "<b>Testar configurações CORS requer uma abordagem metódica</b>, já que configurações incorretas frequentemente se manifestam como mensagens de erro obscuras nos navegadores, difíceis de diagnosticar. A estratégia de teste mais eficaz envolve criar um cliente de teste simples hospedado em um domínio diferente do seu API. Isso pode ser uma página HTML básica com JavaScript que faz vários tipos de requisições para seus endpoints de API. Use as ferramentas de desenvolvedor do Chrome ou Firefox (aba Network) para observar as requisições OPTIONS de pré-voo e as requisições subsequentes. Verifique se as requisições OPTIONS recebem respostas 200 ou 204 com os cabeçalhos Access-Control-Allow-* corretos. Teste diversos cenários incluindo diferentes métodos HTTP, cabeçalhos personalizados e requisições com credenciais para garantir que sua configuração atenda todos os requisitos da sua aplicação. Problemas comuns de teste incluem esquecer que localhost:3000 e localhost:8080 são considerados origens diferentes pelos navegadores, ou negligenciar diferenças de protocolo (http vs https). Se encontrar erros CORS, verifique se suas origens permitidas correspondem exatamente à origem da página solicitante (incluindo protocolo, domínio e porta), confirme que seu servidor está realmente enviando os cabeçalhos CORS nas respostas (não apenas na configuração), e garanta que as requisições de pré-voo estão sendo tratadas corretamente. Nosso gerador produz configurações para ambientes de servidor comuns, mas você pode precisar ajustá-las para configurações específicas do seu servidor.",
        
        q5: "Quais são os riscos de segurança de políticas CORS excessivamente permissivas?",
        a5: "<b>Políticas CORS excessivamente permissivas podem introduzir vulnerabilidades de segurança graves</b>, minando as proteções da Política de Mesma Origem contra ataques entre sites. O risco mais significativo vem da combinação de Access-Control-Allow-Origin: * com Access-Control-Allow-Credentials: true (embora os navegadores impeçam essa combinação específica, servidores mal configurados podem não). Mesmo sem credenciais, políticas CORS excessivamente abertas podem expor APIs e dados sensíveis a sites não autorizados. Por exemplo, se uma API administrativa interna permitir qualquer origem, um site malicioso poderia fazer requisições a ela e potencialmente acessar dados sensíveis ou executar operações. Outro risco comum é a validação inadequada de origens - como correspondência simples de strings que aprova qualquer origem contendo um domínio confiável (permitindo attacker.com/evil.yourcompany.com em vez de apenas yourcompany.com). Além disso, CORS mal configurado pode habilitar ataques de falsificação de requisição entre sites (CSRF) se a política permitir que origens não confiáveis façam requisições que alteram estado. Para mitigar esses riscos, siga o princípio do menor privilégio: permita apenas as origens, métodos e cabeçalhos estritamente necessários para sua aplicação funcionar. Para APIs internas, nunca use o curinga para origens. Faça auditorias regulares de suas configurações CORS como parte de revisões de segurança e considere implementar mecanismos adicionais de autenticação para operações sensíveis. Nosso gerador cria configurações que promovem essas melhores práticas de segurança enquanto ainda habilitam a funcionalidade entre origens necessária."
      },
      relatedTools: {
        title: "Explore ferramentas relacionadas para desenvolvimento web",
        description: "Aprimore seu fluxo de trabalho de desenvolvimento web com estas ferramentas complementares:",
        tool1: {
          name: "Ferramenta de formatação e validação JSON",
          url: "https://www.ufreetools.com/tool/json-formatter",
          description: "Formate, valide e embeleze dados JSON para respostas e requisições de API."
        },
        tool2: {
          name: "Referência de códigos de status HTTP",
          url: "https://www.ufreetools.com/tool/http-status-code-lookup",
          description: "Guia abrangente sobre códigos de status HTTP para tratamento adequado de respostas de API."
        },
        tool3: {
          name: "Depurador JWT",
          url: "https://www.ufreetools.com/tool/jwt-debugger",
          description: "Analise, valide e depure tokens JWT online."
        },
        tool4: {
          name: "Codificador/Decodificador de URL",
          url: "https://www.ufreetools.com/tool/url-encode-decode",
          description: "Codifique ou decodifique componentes de URL para tratamento adequado de caracteres especiais em requisições entre origens."
        }
      },
      resources: {
        title: "Recursos autorizados sobre CORS e segurança web",
        resource1: {
          name: "Documentação MDN: Compartilhamento de Recursos entre Origens (CORS)",
          url: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS",
          description: "Guia abrangente da Mozilla sobre como entender e implementar CORS, com explicações detalhadas de todos os cabeçalhos e comportamentos do navegador."
        },
        resource2: {
          name: "Especificação CORS do W3C",
          url: "https://www.w3.org/TR/cors/",
          description: "Especificação oficial do W3C que define o padrão de Compartilhamento de Recursos entre Origens implementado pelos navegadores."
        },
        resource3: {
          name: "Folha de dicas sobre configurações incorretas de CORS",
          url: "https://0xn3va.gitbook.io/cheat-sheets/web-application/cors-misconfiguration",
          description: "O Compartilhamento de Recursos entre Origens (CORS) é um mecanismo do navegador que permite acesso controlado a recursos localizados fora do domínio de origem. Ele estende e adiciona flexibilidade à Política de Mesma Origem (SOP)."
        }
      }
    }
  }