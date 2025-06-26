export default {
    name: 'Verificador de Segurança de Cabeçalhos HTTP',
    description: 'Analisa e avalia a segurança dos cabeçalhos de resposta HTTP',
    title: 'Ferramenta de Verificação de Segurança de Cabeçalhos',
    intro: 'Analisa cabeçalhos HTTP de sites, verificando configurações como CSP, HSTS e fornece recomendações de melhorias',
    
    input: {
      title: 'Insira URL ou cabeçalhos',
      url: 'URL',
      urlPlaceholder: 'Digite a URL para verificação (ex: https://exemplo.com)',
      headers: 'Ou cole os cabeçalhos HTTP diretamente',
      headersPlaceholder: 'Cole os cabeçalhos HTTP brutos aqui...',
      options: 'Opções de verificação',
      followRedirects: 'Seguir redirecionamentos',
      includeSubresources: 'Verificar sub-recursos (CSS, JS, etc)',
      timeout: 'Tempo limite (segundos)',
      checkButton: 'Verificar Cabeçalhos',
      analyzing: 'Analisando...'
    },
  
    results: {
      title: 'Análise de Segurança de Cabeçalhos',
      overview: 'Visão Geral',
      score: 'Pontuação de Segurança',
      totalScore: 'Total 100',
      scanned: 'URL verificada',
      date: 'Data da verificação',
      
      headers: {
        title: 'Cabeçalhos Encontrados',
        name: 'Cabeçalho',
        value: 'Valor',
        status: 'Status'
      },
      
      allHeaders: {
        title: 'Todos os Cabeçalhos de Resposta',
        name: 'Nome',
        value: 'Valor',
        noData: 'Nenhum dado de cabeçalho encontrado'
      },
      
      missing: {
        title: 'Cabeçalhos de Segurança Ausentes',
        description: 'Estes cabeçalhos de segurança recomendados não foram encontrados:'
      },
      
      issues: {
        title: 'Problemas de Segurança',
        critical: 'Crítico',
        high: 'Alto',
        medium: 'Médio',
        low: 'Baixo',
        info: 'Informativo'
      },
      
      recommendations: {
        title: 'Recomendações',
        description: 'Considere adicionar estes cabeçalhos para melhorar a segurança:',
        example: 'Configuração de exemplo'
      },
      
      rating: {
        unknown: 'Desconhecido',
        excellent: 'Excelente',
        good: 'Bom',
        fair: 'Regular',
        poor: 'Ruim',
        high_risk: 'Alto Risco',
        descriptions: {
          unknown: 'Não foi possível obter informações de cabeçalhos de segurança do site',
          excellent: 'O site implementou todos os principais cabeçalhos de segurança',
          good: 'O site implementou a maioria dos cabeçalhos de segurança importantes',
          fair: 'O site está faltando alguns cabeçalhos de segurança importantes',
          poor: 'O site está faltando vários cabeçalhos de segurança críticos',
          high_risk: 'O site quase não possui medidas de proteção por cabeçalhos de segurança'
        }
      }
    },
  
    headers: {
      strictTransportSecurity: {
        name: 'Strict-Transport-Security',
        description: 'Força conexões HTTPS em vez de HTTP',
        recommendation: 'Adicione "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"',
        status: {
          good: 'Configurado corretamente',
          bad: 'Não configurado',
          warning: 'Configuração pode ser melhorada'
        },
        recommendationConfigured: 'Configuração existente implementada, certifique-se de incluir max-age longo e includeSubDomains',
        recommendationMissing: 'Recomenda-se ativar HSTS para garantir todas as comunicações via HTTPS'
      },
      
      xContentTypeOptions: {
        name: 'X-Content-Type-Options',
        description: 'Previne detecção de tipo MIME',
        recommendation: 'Adicione "X-Content-Type-Options: nosniff"',
        status: {
          good: 'Configurado corretamente',
          bad: 'Não configurado ou configurado incorretamente'
        },
        recommendationConfigured: 'Configuração correta, mantenha as configurações atuais',
        recommendationMissing: 'Recomenda-se definir este cabeçalho como "nosniff"'
      },
      
      xFrameOptions: {
        name: 'X-Frame-Options',
        description: 'Previne que o site seja incorporado em iframes, evitando ataques de clickjacking',
        recommendation: 'Adicione "X-Frame-Options: DENY" ou "SAMEORIGIN"',
        status: {
          good: 'Configurado',
          bad: 'Não configurado'
        },
        recommendationConfigured: 'Configuração existente implementada, recomenda-se usar DENY ou SAMEORIGIN',
        recommendationMissing: 'Recomenda-se configurar este cabeçalho como DENY ou SAMEORIGIN para prevenir clickjacking'
      },
      
      contentSecurityPolicy: {
        name: 'Content-Security-Policy',
        description: 'Controla quais recursos o user agent pode carregar',
        recommendation: 'Adicione cabeçalho Content-Security-Policy com diretivas apropriadas',
        status: {
          good: 'Configurado corretamente',
          bad: 'Não configurado',
          warning: 'Configuração pode ser melhorada'
        },
        recommendationConfigured: 'Configuração existente implementada, certifique-se de revisar e atualizar a política regularmente',
        recommendationMissing: 'Recomenda-se configurar CSP para limitar origens de recursos carregáveis, aumentando defesas contra ataques XSS'
      },
      
      xXssProtection: {
        name: 'X-XSS-Protection',
        description: 'Ativa filtro XSS em navegadores antigos. Em navegadores modernos, recomenda-se usar CSP no lugar.',
        recommendation: 'Embora substituído por CSP em navegadores modernos, ainda recomenda-se definir como "1; mode=block" para compatibilidade com navegadores antigos',
        status: {
          enabled: 'Ativado',
          disabled: 'Desativado',
          notConfigured: 'Não configurado (recomenda-se CSP para navegadores modernos)'
        }
      },
      
      referrerPolicy: {
        name: 'Referrer-Policy',
        description: 'Controla informações incluídas no cabeçalho Referer',
        recommendation: 'Adicione "Referrer-Policy: no-referrer-when-downgrade" ou política mais restritiva',
        status: {
          good: 'Configurado',
          bad: 'Não configurado'
        },
        recommendationConfigured: 'Configuração existente implementada, recomenda-se usar strict-origin ou strict-origin-when-cross-origin',
        recommendationMissing: 'Recomenda-se configurar este cabeçalho para controlar envio de informações de referência'
      },
      
      permissionsPolicy: {
        name: 'Permissions-Policy',
        description: 'Controla quais recursos e APIs do navegador podem ser usados',
        recommendation: 'Adicione cabeçalho Permissions-Policy com restrições apropriadas',
        status: {
          good: 'Configurado',
          bad: 'Não configurado'
        },
        recommendationConfigured: 'Configuração existente implementada, certifique-se de restringir recursos desnecessários',
        recommendationMissing: 'Recomenda-se configurar este cabeçalho para limitar recursos do navegador que o site pode usar'
      }
    },
  
    status: {
      good: 'Bom',
      warning: 'Aviso',
      bad: 'Ruim',
      info: 'Informação',
      notApplicable: 'Não aplicável'
    },
  
    actions: {
      export: 'Exportar Relatório',
      copyHeaders: 'Copiar Cabeçalhos',
      copyRecommendations: 'Copiar Recomendações',
      scan: 'Nova Verificação',
      share: 'Compartilhar Resultados',
      analyze: 'Analisar Cabeçalhos'
    },
  
    emptyState: {
      line1: 'Digite a URL de um site para analisar a configuração de segurança dos cabeçalhos HTTP',
      line2: 'Obtenha avaliação detalhada e recomendações para cabeçalhos como CSP, HSTS e outros'
    },
  
    messages: {
      scanning: 'Verificando {url}...',
      completed: 'Verificação concluída',
      error: 'Erro: {message}',
      timeout: 'Tempo limite excedido',
      invalidUrl: 'URL inválida',
      invalidUrlFormat: 'Por favor insira uma URL válida, começando com http:// ou https://',
      copied: 'Copiado para área de transferência',
      exportComplete: 'Relatório exportado com sucesso',
      httpWarning: 'Aviso: Usar HTTP pode não ser seguro',
      noHeaders: 'Nenhum cabeçalho encontrado',
      fetchError: 'Não foi possível obter cabeçalhos: {error}'
    },
  
    article: {
      title: "Verificador de Segurança de Cabeçalhos HTTP: Melhore a Postura de Segurança do Seu Site",
      features: {
        title: "Entendendo Segurança de Cabeçalhos HTTP",
        description: "O <strong>Verificador de Segurança de Cabeçalhos HTTP</strong> é uma ferramenta projetada especificamente para analisar e avaliar <strong>cabeçalhos de segurança</strong> de qualquer site. <strong>Cabeçalhos de segurança</strong> são cabeçalhos especiais de resposta HTTP que servidores podem configurar, fornecendo uma camada adicional de <strong>segurança</strong> ao ajudar a defender contra vulnerabilidades web comuns como cross-site scripting (XSS), clickjacking e outros ataques de injeção de código.<br><br>Nossa ferramenta verifica <strong>cabeçalhos de segurança</strong> críticos incluindo Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), X-Content-Type-Options, X-Frame-Options e outros. Ela avalia as <strong>configurações de cabeçalhos</strong> existentes, identifica <strong>cabeçalhos de segurança</strong> ausentes e fornece uma <strong>pontuação de segurança</strong> abrangente com recomendações acionáveis para melhorar a <strong>postura de segurança</strong> do seu site.",
        useCases: {
          title: "Casos de Uso Comuns do Verificador de Cabeçalhos HTTP",
          items: [
            "Desenvolvedores web auditando novos sites antes da implantação",
            "Profissionais de segurança realizando testes de penetração e avaliações de vulnerabilidade",
            "Administradores de sistemas verificando configurações de segurança em múltiplos domínios",
            "Equipes DevOps implementando monitoramento contínuo de segurança em pipelines CI/CD",
            "Proprietários de sites verificando postura de segurança após implementar cabeçalhos recomendados",
            "Consultores de segurança demonstrando necessidade de melhorias para clientes",
            "Responsáveis por conformidade garantindo que sites atendam padrões e regulamentos de segurança"
          ]
        }
      },
      faq: {
        title: "Perguntas Frequentes sobre Segurança de Cabeçalhos HTTP",
        items: [
          {
            question: "O que são cabeçalhos de segurança HTTP e por que são importantes?",
            answer: "Cabeçalhos de segurança HTTP são instruções especiais enviadas do servidor para o navegador que controlam como o navegador deve se comportar ao processar conteúdo do seu site. Eles são extremamente importantes por fornecerem uma camada adicional de segurança que pode defender contra vulnerabilidades web comuns como XSS, CSRF, clickjacking e ataques de injeção de código. Cabeçalhos de segurança corretamente configurados podem melhorar significativamente a postura de segurança do seu site com esforço mínimo."
          },
          {
            question: "Quais cabeçalhos de segurança todo site deveria implementar?",
            answer: "No mínimo, todo site moderno deveria implementar: Content Security Policy (CSP) para prevenir ataques XSS, HTTP Strict Transport Security (HSTS) para forçar uso de HTTPS, X-Content-Type-Options para prevenir detecção de tipo MIME, X-Frame-Options para prevenir clickjacking, e Referrer-Policy para controlar informações no cabeçalho Referer. Nosso verificador de cabeçalhos avalia automaticamente estes e outros cabeçalhos essenciais."
          },
          {
            question: "Como a pontuação de segurança é calculada?",
            answer: "A pontuação de segurança é baseada na presença e configuração correta de cabeçalhos de segurança críticos. Cabeçalhos principais como Content Security Policy e HSTS contribuem com até 20 pontos cada, enquanto outros como X-Content-Type-Options e X-Frame-Options contribuem com 10-15 pontos cada. Também avaliamos a qualidade da implementação, não apenas a presença dos cabeçalhos, com pontuação máxima de 100."
          },
          {
            question: "Posso usar esta ferramenta para verificar sites que não possuo?",
            answer: "Sim, você pode usar o Verificador de Segurança de Cabeçalhos HTTP para analisar qualquer site publicamente acessível. A ferramenta apenas verifica cabeçalhos de resposta HTTP, que são informações publicamente disponíveis enviadas pelo servidor web. Entretanto, recomendamos usar principalmente em sites que você possui ou tem permissão para testar."
          },
          {
            question: "Como implementar os cabeçalhos de segurança recomendados por esta ferramenta?",
            answer: "A implementação depende do seu servidor web ou plataforma. Para Apache, você pode adicionar cabeçalhos no arquivo .htaccess. Para Nginx, você pode adicioná-los na configuração do servidor. Muitos sistemas de gerenciamento de conteúdo possuem plugins para cabeçalhos de segurança. O Verificador de Segurança de Cabeçalhos HTTP fornece configurações de exemplo que você pode adaptar para seu ambiente específico."
          }
        ]
      },
      guide: {
        title: "Como Usar o Verificador de Segurança de Cabeçalhos HTTP",
        steps: [
          "Insira a URL completa do site que deseja verificar no campo de entrada (deve incluir http:// ou https://)",
          "Para verificações avançadas, considere habilitar opções como 'Seguir redirecionamentos' se o site usar redirecionamentos",
          "Clique no botão 'Verificar Cabeçalhos' para iniciar a análise de segurança",
          "Revise a pontuação de segurança e classificação geral na parte superior dos resultados",
          "Verifique a análise detalhada dos cabeçalhos de segurança detectados, cada um marcado com um indicador de status (Bom, Aviso ou Ruim)",
          "Clique em qualquer cabeçalho de segurança para expandir e ver detalhes incluindo seu valor atual, propósito e recomendações específicas",
          "Veja a lista completa de todos os cabeçalhos de resposta HTTP retornados pelo servidor na seção 'Todos os Cabeçalhos de Resposta'",
          "Implemente os cabeçalhos de segurança recomendados em seu servidor web com base nas recomendações fornecidas, então execute o verificador novamente para confirmar melhorias"
        ]
      },
      conclusion: "Verificar e atualizar regularmente os cabeçalhos de segurança do seu site é uma prática fundamental na manutenção da segurança web. Com o Verificador de Segurança de Cabeçalhos HTTP, você pode facilmente identificar fraquezas em suas configurações atuais e implementar melhorias necessárias para fortalecer defesas contra ataques web comuns. Lembre-se que cabeçalhos de segurança são apenas um aspecto de uma estratégia abrangente de segurança, mas eles fornecem proteção significativa com esforço de implementação relativamente pequeno."
    }
  }