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
  }
};