export default {
  title: "Guia de Referência de Códigos de Status HTTP - Entenda os códigos de resposta da web",
  intro: {
    title: "O que são códigos de status HTTP e por que são importantes?",
    p1: "<b>Códigos de status HTTP</b> são respostas padronizadas enviadas por servidores web para indicar o resultado de requisições feitas por clientes. Esses códigos de três dígitos são divididos em cinco categorias, cada uma com propósito específico na comunicação web. Nosso consultor de códigos HTTP fornece acesso instantâneo a informações detalhadas sobre esses códigos, ajudando desenvolvedores, administradores de sites e profissionais de TI a solucionar problemas relacionados à web de forma eficiente.",
    p2: "Compreender <b>códigos de resposta HTTP</b> é essencial para qualquer pessoa que trabalhe com websites ou aplicações web. Esses códigos comunicam se uma requisição HTTP foi concluída com sucesso, requer ação adicional ou encontrou algum erro. Ao identificar rapidamente o significado por trás de códigos como 404 Não Encontrado ou 500 Erro Interno do Servidor, você pode diagnosticar problemas mais rapidamente e implementar soluções eficazes para melhorar a experiência do usuário e a funcionalidade do site.",
    p3: "Nossa ferramenta abrangente de <b>consulta de códigos</b> não apenas fornece definições básicas, mas também explicações detalhadas, causas comuns e ações recomendadas para cada código. Seja para depurar um site, otimizar performance SEO ou desenvolver APIs, esta ferramenta é seu aliado para interpretar respostas do servidor e manter sua presença web funcionando sem problemas."
  },
  useCases: {
    title: "Aplicações práticas do conhecimento sobre códigos HTTP",
    case1: "<b>Solução de problemas em websites</b>: Quando usuários relatam problemas ao acessar certas páginas, códigos HTTP ajudam a determinar se o problema é recurso ausente (404), erro do servidor (5xx) ou problema de permissão (403). Nossa ferramenta ajuda a entender esses erros e implementar correções apropriadas.",
    case2: "<b>Otimização SEO</b>: Mecanismos de busca usam códigos de status para entender a saúde do seu site. Gerenciar corretamente redirecionamentos (301 vs 302) e páginas de erro impacta significativamente o ranking. Use nossa ferramenta para garantir implementação correta visando melhor performance SEO.",
    case3: "<b>Desenvolvimento e teste de APIs</b>: APIs REST dependem fortemente de códigos HTTP para comunicar status de respostas. Desenvolvedores podem usar nossa referência para implementar os códigos mais apropriados em endpoints, garantindo comunicação clara entre serviços.",
    case4: "<b>Configuração de servidores</b>: Administradores usam códigos para diagnosticar problemas em servidores web, balanceadores de carga e proxies. Nossas explicações detalhadas ajudam a determinar se erros são causados por configuração, problemas de rede ou código de aplicação.",
    case5: "<b>Segurança de aplicações web</b>: Profissionais de segurança analisam padrões anormais de códigos para detectar possíveis ataques ou vulnerabilidades. Entender o impacto de segurança de diferentes códigos ajuda a implementar controles de acesso e proteções adequadas."
  },
  tutorial: {
    title: "Como usar o Consultor de Códigos HTTP",
    intro: "Nossa ferramenta foi projetada para ser intuitiva e eficiente. Siga estes passos simples para encontrar rapidamente informações sobre qualquer código HTTP:",
    step1: {
      title: "Passo 1: Insira critérios de busca",
      description: "Comece digitando um código específico (como 404 ou 500) ou palavras-chave descritivas (como \"não encontrado\" ou \"erro do servidor\") na caixa de busca no topo da ferramenta. A busca funciona tanto por código quanto por descrição, oferecendo flexibilidade."
    },
    step2: {
      title: "Passo 2: Filtre por categoria (opcional)",
      description: "Para explorar códigos dentro de uma categoria específica, use o menu suspenso para filtrar resultados. Você pode escolher entre respostas informativas (1xx), sucesso (2xx), redirecionamento (3xx), erros do cliente (4xx) ou erros do servidor (5xx). Essa opção é especialmente útil para descobrir códigos relacionados."
    },
    step3: {
      title: "Passo 3: Veja a lista de códigos",
      description: "Após buscar ou filtrar, veja a lista de códigos correspondentes. Cada entrada mostra o número, nome e breve descrição. Cores ajudam a identificar rapidamente a categoria: azul para informativo, verde para sucesso, amarelo para redirecionamento, vermelho para erro do cliente e roxo para erro do servidor."
    },
    step4: {
      title: "Passo 4: Expanda para detalhes",
      description: "Clique em qualquer código para expandir e ver informações completas. A visualização expandida fornece descrição detalhada, exemplos de resposta HTTP e notas práticas sobre quando esse código ocorre e como lidar com ele. Esses detalhes ajudam a entender completamente o significado de cada código em cenários reais."
    }
  },
  common: {
    title: "Análise dos códigos HTTP mais importantes",
    intro: "Embora existam dezenas de códigos HTTP definidos em várias especificações, apenas alguns são encontrados com frequência durante desenvolvimento web e solução de problemas. Aqui está uma análise detalhada dos códigos mais importantes que você deve conhecer:",
    code1: {
      title: "200 OK - O básico de respostas bem-sucedidas",
      description: "<b>O código 200 OK</b> indica que o servidor processou a requisição com sucesso. Esta é a resposta padrão para requisições HTTP bem-sucedidas, especialmente requisições GET para obter dados. Sites funcionando normalmente devem gerar respostas 200 para a maioria das interações dos usuários. No entanto, se uma página retorna 200 mas ainda aparece incorretamente, o problema pode estar no conteúdo ou código do cliente, não na comunicação com o servidor."
    },
    code2: {
      title: "404 Not Found - Gerenciando recursos ausentes",
      description: "<b>O código 404 Not Found</b> aparece quando o recurso solicitado não existe no servidor. Isso geralmente ocorre com links quebrados, URLs digitados incorretamente ou conteúdo que foi removido. Do ponto de vista SEO, muitos erros 404 podem afetar negativamente o ranking do seu site. Melhores práticas incluem implementar páginas 404 personalizadas com opções de navegação úteis, verificar regularmente links quebrados e configurar redirecionamentos 301 adequados para conteúdo que foi movido permanentemente."
    },
    code3: {
      title: "500 Internal Server Error - Lidando com problemas no servidor",
      description: "<b>O código 500 Internal Server Error</b> indica que o servidor encontrou uma situação inesperada que o impediu de completar a requisição. Este é um erro genérico do lado do servidor que pode ser causado por erros de configuração, erros em scripts ou limitações de recursos. Ao solucionar erros 500, verifique os logs do servidor para mensagens específicas, revise alterações recentes no código e verifique a disponibilidade de recursos do servidor. Para desenvolvedores, implementar logs de erro detalhados e monitoramento é essencial para resolver rapidamente esses problemas do lado do servidor."
    },
    code4: {
      title: "301 vs 302 Redirecionamentos - Considerações estratégicas para SEO",
      description: "A diferença entre <b>301 (redirecionamento permanente)</b> e <b>302 (redirecionamento temporário)</b> é crucial para estratégias SEO. Um redirecionamento 301 informa aos mecanismos de busca que o conteúdo foi movido permanentemente, transferindo a maior parte do \"valor\" de ranking para o novo URL. Em contraste, um 302 indica uma mudança temporária e não transfere o mesmo valor SEO. Usar o tipo errado de redirecionamento pode impactar significativamente sua visibilidade nos mecanismos de busca, portanto é importante escolher o tipo apropriado com base em se o redirecionamento do conteúdo é permanente ou temporário."
    }
  },
  faq: {
    title: "Perguntas frequentes sobre códigos HTTP",
    q1: "Qual a diferença entre códigos 4xx e 5xx?",
    a1: "A principal diferença entre <b>códigos 4xx e 5xx</b> está na origem do problema. Códigos 4xx indicam erros do cliente, significando que o problema está na requisição em si - como tentar acessar um recurso inexistente (404), fornecer autenticação inválida (401) ou falta de permissões adequadas (403). O cliente precisa modificar a requisição para resolver esses problemas.<br><br>Já códigos 5xx indicam erros do servidor, significando que o servidor falhou em atender uma requisição válida. Esses podem ser causados por erros de configuração, bugs na aplicação ou limitações de recursos. Normalmente é necessária intervenção no servidor para corrigir esses problemas, enquanto o cliente geralmente não pode resolvê-los apenas modificando sua requisição.",
    
    q2: "Como códigos HTTP afetam SEO e ranking?",
    a2: "<b>Códigos HTTP impactam significativamente o desempenho SEO</b> e como mecanismos de busca indexam seu site. Rastreadores usam esses códigos para determinar como processar páginas encontradas:<br><br>• 200 (OK) - Conteúdo disponível para indexação<br>• 301 (Permanente) - Transfere valor de ranking para novo URL<br>• 302 (Temporário) - Mantém ranking no URL original<br>• 404 (Não encontrado) - Muitos podem prejudicar ranking<br>• 410 (Removido) - Remove conteúdo do índice<br>• 500+ (Erros) - Podem impedir indexação se persistentes<br>• 503 (Indisponível) - Com cabeçalho Retry-After diz para voltar depois<br><br>Implementar corretamente esses códigos garante que mecanismos entendam corretamente a estrutura do seu site, impactando diretamente sua visibilidade e potencial de ranking.",
    
    q3: "Qual código usar para páginas temporariamente indisponíveis?",
    a3: "Para <b>páginas temporariamente indisponíveis</b>, o código mais apropriado é <b>503 Service Unavailable</b>. Este código especificamente indica que o servidor está temporariamente incapaz de processar requisições devido a manutenção, sobrecarga ou outras condições temporárias. O que torna o 503 especialmente valioso para interrupções temporárias é a possibilidade de incluir o cabeçalho Retry-After, informando quando clientes podem tentar novamente.<br><br>Usar 503 durante manutenção planejada ou interrupções temporárias oferece vantagens sobre outros códigos de erro:<br><br>• Mecanismos não removem seu conteúdo do índice, ao contrário de 404/500 persistentes<br>• Comunica claramente que o problema é temporário<br>• Ajuda a manter valor SEO durante janelas de manutenção<br>• Retry-After ajuda a gerenciar tráfego de rastreadores<br><br>Para melhor efeito, combine a resposta 503 com uma página de manutenção amigável explicando a situação e tempo estimado para normalização.",
    
    q4: "Como lidar com migrações de site com SEO?",
    a4: "Para <b>migrações de site com SEO</b>, implementar redirecionamentos corretamente é crucial para preservar ranking e experiência do usuário. O método recomendado inclui:<br><br>1. <b>Use 301 para todo conteúdo movido</b> - Transfere 90-99% do valor de ranking<br>2. Implemente <b>redirecionamentos 1:1</b> do URL antigo para seu equivalente novo<br>3. Crie <b>mapeamento completo</b> de todos URLs antigos e seus novos destinos<br>4. Configure <b>redirecionamentos no servidor</b> (via .htaccess, web.config) ao invés de JavaScript<br>5. <b>Mantenha estrutura de URLs</b> quando possível para minimizar redirecionamentos<br>6. <b>Teste todos redirecionamentos</b> antes do lançamento<br><br>Além disso, mantenha esses redirecionamentos por pelo menos um ano após a migração para garantir que mecanismos e links continuem funcionando corretamente.",
    
    q5: "O que significa o código 304 Not Modified?",
    a5: "<b>O código 304 Not Modified</b> indica que o recurso não foi alterado desde a última requisição, baseado em cabeçalhos condicionais enviados pelo cliente. Este é efetivamente um código positivo que ajuda na otimização de performance web através de cache eficiente.<br><br>Quando o navegador já tem uma versão em cache do recurso, pode enviar uma requisição condicional com cabeçalhos como If-Modified-Since ou If-None-Match. Se o servidor determina que o recurso não mudou, responde com status 304 ao invés de enviar o recurso novamente. Este processo:<br><br>• Reduz uso de banda<br>• Melhora tempo de carregamento<br>• Diminui carga no servidor<br>• Melhora experiência do usuário<br><br>Você normalmente verá respostas 304 para recursos estáticos como imagens, CSS, JavaScript e ocasionalmente HTML não modificado. Este código é componente chave de estratégias eficientes de cache web.",
    
    q6: "Como depurar códigos HTTP incomuns?",
    a6: "Depurar <b>códigos HTTP incomuns ou personalizados</b> requer abordagem sistemática e ferramentas especializadas. Comece coletando detalhes com:<br><br>1. <b>Ferramentas do navegador</b>: Verifique aba Network para ver código exato e cabeçalhos<br>2. <b>Ferramentas como Postman/cURL</b> para análise detalhada<br>3. <b>Verifique logs do servidor</b> para contexto adicional<br>4. <b>Revise código da aplicação</b> que pode implementar códigos personalizados<br>5. <b>Consulte documentação de API</b> se código vem de serviço terceiro<br><br>Para códigos não padronizados, lembre-se:<br>• Códigos 9xx são completamente não padronizados<br>• Códigos em intervalos padrão mas não registrados podem ser extensões de fornecedor<br>• Alguns serviços usam códigos padrão de forma não convencional<br><br>Nossa ferramenta ajuda com códigos padrão, mas para códigos verdadeiramente personalizados você precisará consultar documentação específica do serviço ou aplicação."
  },
  relatedTools: {
    title: "Explore mais ferramentas para desenvolvimento web",
    description: "Aprimore seu fluxo de trabalho com estas ferramentas complementares:",
    tool1: {
      name: "Verificador de Segurança de Cabeçalhos HTTP",
      url: "https://www.ufreetools.com/tool/http-header-security-checker",
      description: "Analisa e avalia cabeçalhos de resposta HTTP para segurança."
    },
    tool2: {
      name: "Detector de Proxy HTTP",
      url: "https://www.ufreetools.com/tool/http-proxy-detector",
      description: "Verifica se sua conexão utiliza proxy HTTP e analisa cabeçalhos relacionados."
    },
    tool3: {
      name: "Analisador de Parâmetros de URL",
      url: "https://www.ufreetools.com/tool/url-params-parser",
      description: "Extrai e analisa parâmetros e strings de consulta de URLs."
    },
    tool4: {
      name: "Formatador e Validador JSON",
      url: "https://www.ufreetools.com/tool/json-formatter",
      description: "Formata, valida e embeleza dados JSON para desenvolvimento de APIs."
    }
  },

  resources: {
    title: "Recursos oficiais sobre códigos HTTP",
    resource1: {
      name: "Referência MDN Web Docs sobre status HTTP",
      url: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status",
      description: "Documentação abrangente e atualizada sobre códigos de status HTTP com exemplos."
    },
    resource2: {
      name: "Registro oficial IANA de códigos HTTP",
      url: "https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml",
      description: "Fonte oficial mantida pela Internet Assigned Numbers Authority."
    },
    resource3: {
      name: "RFC 7231 - Semântica HTTP/1.1: Códigos de Status",
      url: "https://tools.ietf.org/html/rfc7231#section-6",
      description: "Especificação técnica que define os códigos de status HTTP padrão."
    }
  }
}
