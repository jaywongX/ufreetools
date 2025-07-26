export default {
  title: "Detector de Proxy HTTP - Identifique e Analise Proxies de Rede",
  intro: {
    title: "O que é Detecção de Proxy HTTP?",
    p1: "<b>Detecção de proxy HTTP</b> é o processo de determinar se sua conexão de internet passa por um ou mais servidores intermediários conhecidos como proxies. Nossa ferramenta de detecção de proxy analisa cabeçalhos HTTP (como X-Forwarded-For, Via e outros indicadores) para identificar a presença de proxies no caminho de sua conexão.",
    p2: "Proxies são servidores intermediários entre seu dispositivo e os sites que você acessa. Eles podem ser usados para diversos propósitos legítimos, como melhorar performance através de cache, implementar controles de acesso ou fornecer anonimato. No entanto, o uso de proxies sem seu conhecimento ou consentimento pode representar riscos de segurança. Nosso <b>detector de proxy</b> ajuda a identificar proxies ocultos em sua rede, aumentando sua consciência de segurança e auxiliando na solução de problemas.",
    p3: "Quando você se conecta através de um <b>servidor proxy HTTP</b>, certas informações sobre sua atividade de navegação podem ficar visíveis para o operador do proxy. Esta ferramenta online permite que você saiba se sua conexão é direta ou passa por uma ou mais camadas de proxy, dando maior controle sobre sua privacidade e segurança online."
  },
  useCases: {
    title: "Casos de Uso Prático para Detecção de Proxy",
    case1: "<b>Solução de Problemas de Rede</b>: Quando enfrentando problemas de conexão, detectar proxies pode ajudar a determinar se servidores intermediários são a causa. Profissionais de TI frequentemente precisam verificar configurações de proxy para diagnosticar problemas de rede.",
    case2: "<b>Verificação de Segurança</b>: Assegurar que sua navegação privada não passe por proxies não autorizados que possam monitorar ou modificar seu tráfego. Organizações podem usar detecção de proxy para verificar se políticas de segurança corporativas estão sendo implementadas corretamente.",
    case3: "<b>Desenvolvedores Web</b>: Desenvolvedores precisam entender como seu conteúdo é entregue aos usuários, especialmente quando usando redes de distribuição de conteúdo (CDNs) ou balanceadores de carga que atuam como proxies. Testar o tratamento correto de cabeçalhos é crucial para segurança e análise.",
    case4: "<b>Verificação de Restrições Geográficas</b>: Verificar se seu serviço VPN ou proxy está mascarando corretamente sua localização para acessar conteúdo com restrição regional. Nossa ferramenta ajuda a validar se medidas de bypass geográfico estão funcionando como esperado.",
    case5: "<b>Verificação em Ambientes Corporativos</b>: Para funcionários em ambientes corporativos, verificar a presença e configuração de proxies da empresa que podem afetar seu acesso à internet ou funcionalidade de aplicativos. Isso é especialmente importante ao solucionar problemas de conexão de aplicativos."
  },
  tutorial: {
    title: "Como Detectar Proxies HTTP em Sua Conexão",
    intro: "Siga este guia passo a passo para usar efetivamente nosso detector de proxy HTTP e entender sua configuração de rede:",
    step1: {
      title: "Passo 1: Inicie o Processo de Detecção",
      description: "Clique no botão <b>\"Iniciar Detecção\"</b> na interface da ferramenta para começar. O detector imediatamente começará a analisar sua conexão fazendo requisições para endpoints de API especializados. Por padrão, a ferramenta seleciona automaticamente o método de detecção mais confiável, mas você pode usar o seletor para escolher diferentes APIs para testes mais abrangentes."
    },
    step2: {
      title: "Passo 2: Veja os Resultados Resumidos",
      description: "Após a detecção, a aba <b>\"Resumo de Proxy\"</b> mostrará se proxies foram detectados em sua conexão. Procure pelo ícone verde de confirmação indicando conexão direta ou pelo ícone amarelo de aviso mostrando proxies detectados. O resumo também mostrará seu endereço IP detectado e informações de localização, que podem ajudar a verificar se sua localização real está sendo mascarada."
    },
    step3: {
      title: "Passo 3: Inspecione Cabeçalhos de Proxy em Detalhe",
      description: "Clique na aba <b>\"Cabeçalhos Completos\"</b> para ver todos os cabeçalhos HTTP na requisição. Preste atenção especial a cabeçalhos como X-Forwarded-For, Via e Forwarded que indicam uso de proxy. O cabeçalho X-Forwarded-For é especialmente importante, pois contém uma cadeia de endereços IP mostrando o caminho que sua requisição tomou através de vários proxies. Você pode usar os botões no final desta seção para copiar todos os cabeçalhos para análise posterior."
    },
    step4: {
      title: "Passo 4: Entenda as Informações de Proxy",
      description: "Para um entendimento mais profundo do significado dos cabeçalhos detectados, visite a aba <b>\"Explicação das Informações de Proxy\"</b>. Esta seção explica o propósito de diferentes cabeçalhos relacionados a proxy e seu impacto na segurança da conexão. Use este conhecimento para determinar se os proxies detectados são esperados (como proxies corporativos) ou intermediários indesejados."
    }
  },
  techniques: {
    title: "Entendendo as Técnicas de Detecção de Proxy HTTP",
    intro: "Nossa ferramenta usa múltiplos métodos para detectar com precisão proxies em conexões de rede. Aqui está uma visão geral das principais técnicas utilizadas:",
    method1: {
      title: "Análise de Cabeçalhos",
      description: "O método mais comum de detecção é verificar cabeçalhos HTTP normalmente adicionados por servidores proxy, como X-Forwarded-For, Via e Forwarded. Estes cabeçalhos geralmente contêm informações sobre o endereço IP original do cliente e a cadeia de proxies."
    },
    method2: {
      title: "Comparação de IP",
      description: "Nossa ferramenta compara o endereço IP visto pelo servidor com o IP esperado do cliente. Diferenças entre estes IPs frequentemente indicam a presença de um proxy. Este método é particularmente eficaz para detectar proxies transparentes."
    },
    method3: {
      title: "Análise de Tempo de Resposta",
      description: "Analisando tempos de resposta, podemos às vezes detectar proxies, pois eles geralmente adicionam latência às requisições de rede. Proxies de cache podem mostrar padrões de tempo inconsistentes dependendo se o conteúdo está ou não em cache."
    },
    method4: {
      title: "Detecção no Lado do Servidor",
      description: "Nossas APIs realizam verificações no servidor que podem identificar certos tipos de proxies baseados em varreduras de portas, bancos de dados de IPs de proxy conhecidos e padrões de comportamento em requisições HTTP."
    }
  },
  faq: {
    title: "Perguntas Frequentes sobre Detecção de Proxy HTTP",
    q1: "Por que devo verificar se minha conexão usa proxy?",
    a1: "Verificar proxies é importante por várias razões: <b>Consciência de Segurança</b> (saber se seu tráfego está sendo monitorado), <b>Preocupações com Privacidade</b> (saber quem pode acessar seus dados de navegação), <b>Solução de Problemas de Rede</b> (determinar se proxies estão causando problemas de conexão), e <b>Validação de Funcionalidade de VPN</b> (assegurar que suas ferramentas de privacidade estão funcionando corretamente). Verificação regular de proxy ajuda a manter consciência sobre seu estado de segurança de rede.",
    
    q2: "Ferramentas de detecção de proxy podem identificar todos os tipos de proxy?",
    a2: "Embora nosso detector de proxy HTTP seja eficaz em identificar proxies comuns através de análise de cabeçalhos, alguns tipos avançados de proxy podem ser mais difíceis de detectar. <b>Proxies transparentes</b> que não modificam cabeçalhos podem às vezes ser identificados por diferenças de IP. <b>Proxies anônimos</b> projetados para esconder sua presença podem ser detectados através de análise temporal ou técnicas no lado do servidor. No entanto, <b>proxies elite</b> especialmente projetados para evitar detecção podem não ser identificados por ferramentas clientes. Para detecção mais abrangente, recomendamos usar múltiplas opções de API em nossa ferramenta.",
    
    q3: "Usar proxy é ilegal ou prejudicial para meu computador?",
    a3: "Em maioria dos países, usar proxies é geralmente legal e não prejudicial ao computador. Proxies têm muitos usos legítimos, incluindo <b>melhorar performance de internet</b> através de cache, <b>aumentar privacidade</b> mascarando endereços IP, <b>acessar conteúdo com restrição regional</b>, e <b>implementar políticas de segurança</b> em ambientes corporativos. Entretanto, a legalidade depende de como o proxy é usado - contornar restrições de copyright ou violar termos de serviço pode ser problemático. Certifique-se de usar proxies em conformidade com leis locais e termos de serviço.",
    
    q4: "Qual a diferença entre proxy e VPN?",
    a4: "Embora proxies e VPNs ambos roteiem seu tráfego através de servidores intermediários, eles diferem em vários aspectos importantes: <b>VPNs criptografam todo o tráfego</b> (entre seu dispositivo e o servidor VPN), enquanto maioria dos proxies não fornecem criptografia. VPNs normalmente roteiam <b>todo o tráfego de internet</b> do seu dispositivo, enquanto proxies geralmente lidam apenas com tráfego de aplicativos ou protocolos específicos. Comparado a proxies padrão, VPNs geralmente oferecem <b>melhor proteção de privacidade</b> e recursos de segurança. Como ambas tecnologias modificam seu caminho de conexão, nosso detector pode identificar sua conexão VPN como um proxy.",
    
    q5: "Por que minha empresa usa servidores proxy, devo me preocupar?",
    a5: "Empresas implementam servidores proxy por várias razões legítimas: <b>Filtragem de conteúdo</b> (restringir acesso a certos sites), <b>otimização de banda</b> (cache de conteúdo frequentemente acessado), <b>aumento de segurança</b> (varredura por malware ou vulnerabilidades), <b>monitoramento de atividades de funcionários</b> (assegurar conformidade com políticas de uso aceitável), e <b>fornecer acesso remoto</b> a recursos internos. Embora proxies corporativos geralmente não sejam preocupações de privacidade, é importante lembrar que sua atividade online na rede corporativa pode ser monitorada. Se nosso detector identificar um proxy corporativo, isto é normalmente esperado em ambientes empresariais.",
    
    q6: "Como redes de distribuição de conteúdo (CDNs) se relacionam com proxies?",
    a6: "Redes de distribuição de conteúdo (CDNs) funcionam de forma similar a <b>proxies reversos</b> e podem ser detectadas por nossa ferramenta. CDNs distribuem conteúdo de sites através de uma rede global de servidores para melhorar velocidade de carregamento e confiabilidade. Quando você acessa um site usando CDN, sua requisição é normalmente roteada para o servidor CDN mais próximo ao invés do servidor original. Isto aparece em sua conexão como um proxy, pois o servidor CDN age como intermediário. Diferente de proxies tradicionais que podem ser preocupações de privacidade, CDNs são implementadas por donos de sites para melhorar experiência do usuário e são parte normal da infraestrutura web moderna."
  },
  relatedTools: {
    title: "Ferramentas Relacionadas para Análise de Rede",
    description: "Explore estas ferramentas adicionais para mais insights sobre sua configuração de rede e segurança:",
    tool1: {
      name: "Verificador de Segurança de Cabeçalhos HTTP",
      url: "https://www.ufreetools.com/tool/http-header-security-checker",
      description: "Analisa cabeçalhos de resposta HTTP de sites, verificando configurações como CSP, HSTS e fornecendo recomendações de melhorias"
    },
    tool2: {
      name: "Editor de Cabeçalhos de Requisição",
      url: "https://www.ufreetools.com/tool/request-header-editor",
      description: "Cria, edita e testa cabeçalhos de requisição HTTP"
    },
    tool3: {
      name: "Consultor de Códigos de Status HTTP",
      url: "https://www.ufreetools.com/tool/http-status-code-lookup",
      description: "Consulta e explica códigos de status e mensagens de resposta HTTP"
    },
    tool4: {
      name: "Analisador de Parâmetros de URL",
      url: "https://www.ufreetools.com/tool/url-params-parser",
      description: "Analisa, interpreta e manipula parâmetros e strings de consulta em URLs"
    }
  },
  resources: {
    title: "Aprenda Mais sobre Proxies e Segurança de Rede",
    resource1: {
      name: "Guia de Testes OWASP",
      url: "https://owasp.org/www-project-web-security-testing-guide/assets/archive/OWASP_Testing_Guide_v4.pdf",
      description: "OWASP é uma comunidade global focada em melhorar a segurança de softwares aplicativos."
    },
    resource2: {
      name: "Cabeçalhos HTTP - Documentação MDN Web",
      url: "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers",
      description: "Documentação detalhada da Mozilla Developer Network sobre cabeçalhos HTTP, incluindo conteúdo relacionado a proxies e encaminhamento."
    },
    resource3: {
      name: "Internet Engineering Task Force (IETF) - Cabeçalho HTTP Forwarded",
      url: "https://tools.ietf.org/html/rfc7239",
      description: "Documento oficial RFC 7239 definindo o cabeçalho Forwarded HTTP, que padroniza informações adicionadas por proxies."
    }
  }
}
