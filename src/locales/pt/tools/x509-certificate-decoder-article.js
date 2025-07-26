export default {
  title: 'Analisador X.509: Inspecione e valide certificados SSL/TLS',
  introduction: {
    title: 'O que é um Analisador X.509?',
    p1: 'O <strong>Analisador de Certificado X.509</strong> é uma ferramenta essencial para profissionais de segurança, desenvolvedores web e administradores de TI que trabalham com certificados digitais. Nosso analisador gratuito fornece uma análise detalhada de componentes, status de validade e características de segurança sem necessidade de instalação.',
    p2: 'Certificados digitais são fundamentais para comunicações seguras na web, estabelecendo conexões confiáveis entre navegadores e servidores. Entender sua estrutura complexa é essencial para solucionar problemas. O analisador X.509 simplifica este processo convertendo dados brutos em informações legíveis.'
  },
  useCases: {
    title: 'Aplicações Práticas',
    case1: '<strong>Validação SSL/TLS</strong>: Verifique autenticidade antes da implantação.',
    case2: '<strong>Monitoramento de Validade</strong>: Evite interrupções checando datas de expiração.',
    case3: '<strong>Verificação de Cadeia</strong>: Confira relações de confiança entre certificados.',
    case4: '<strong>Solução de Problemas</strong>: Identifique erros de configuração que causam alertas.',
    case5: '<strong>Verificação de Assinaturas</strong>: Avalie algoritmos e parâmetros de segurança.'
  },
  faq: {
    title: 'Perguntas Frequentes',
    q1: 'Quais informações posso extrair?',
    a1: 'Nosso analisador extrai detalhes completos incluindo emissor, assunto, validade, chave pública, extensões, algoritmo de assinatura e impressões digitais, com indicadores visuais de status.',
    q2: 'Como verificar confiança do navegador?',
    a2: 'Certificados de autoridades certificadoras reconhecidas com cadeia válida são confiáveis. O analisador ajuda a verificar emissor, datas, restrições e usos de chave.',
    q3: 'Diferença entre PEM e DER?',
    a3: '<strong>PEM</strong> é texto Base64 (legível) começando com "-----BEGIN CERTIFICATE-----". <strong>DER</strong> é formato binário compacto. O analisador detecta automaticamente ambos.',
    q4: 'Como verificar suporte a TLS?',
    a4: 'Verifique extensões de uso de chave para "Autenticação de Servidor" (1.3.6.1.5.5.7.3.1) e algoritmos modernos como SHA-256 com RSA/ECDSA.',
    q5: 'O que fazer se o certificado vai expirar?',
    a5: 'Renove com seu provedor gerando novo CSR, completando verificações e instalando o novo certificado. Recomendamos iniciar 2-4 semanas antes da expiração.'
  },
  tutorial: {
    title: 'Guia Passo a Passo',
    step1: {
      title: 'Carregar Certificado',
      content: 'Envie arquivo (.crt, .cer, etc.) ou cole texto PEM. Use "Carregar Exemplo" para demonstração.'
    },
    step2: {
      title: 'Analisar',
      content: 'Clique "Analisar Certificado". O processamento ocorre localmente no navegador para segurança.'
    },
    step3: {
      title: 'Explorar Detalhes',
      content: 'Navegue por abas organizadas: informações básicas, emissor/assunto, extensões, chave pública e dados brutos.'
    },
    step4: {
      title: 'Exportar Resultados',
      content: 'Baixe relatórios em PDF, texto, HTML ou JSON, ou copie seções específicas para compartilhamento.'
    }
  },
  resources: {
    title: 'Recursos Adicionais',
    intro: 'Aprofunde seu conhecimento sobre certificados X.509:',
    relatedTools: 'Ferramentas Relacionadas',
    tool1: 'Gerador de Hash - Crie hashes criptográficos',
    tool2: 'Codificador Base64 - Converta entre formatos',
    tool3: 'Decodificador JWT - Analise tokens de autenticação',
    externalLinks: 'Referências Externas',
    external1: 'RFC 5280 - Padrão X.509',
    external2: 'Wikipedia - Visão Geral X.509',
    external3: 'SSL.com - O que são certificados X.509?'
  },
  conclusion: {
    title: 'Conclusão',
    content: 'O <strong>Analisador X.509</strong> é indispensável para quem trabalha com segurança digital. Seja para auditorias, desenvolvimento web ou administração de sistemas, esta ferramenta oferece insights claros sobre certificados, simplificando análises e fortalecendo práticas de segurança.'
  }
}
