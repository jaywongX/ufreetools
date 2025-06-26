export default {
    name: 'Analisador de Certificado X.509',
    description: 'Ferramenta online gratuita para analisar certificados SSL/TLS. Visualize detalhes, verifique validade, extraia chaves públicas e exporte relatórios.',
    
    instructions: {
      title: 'Analisador de Certificado',
      description: 'Carregue um arquivo de certificado ou cole um certificado no formato PEM para visualizar seus detalhes.'
    },
    
    dropzone: {
      title: 'Arraste e solte o arquivo aqui',
      formats: 'Formatos suportados: .crt, .cer, .pem, .der, .p12 e .pfx'
    },
    
    buttons: {
      browse: 'Procurar arquivo',
      decode: 'Analisar Certificado',
      loadSample: 'Carregar Exemplo',
      downloadPdf: 'Baixar PDF',
      downloadTxt: 'Baixar Texto',
      downloadHtml: 'Baixar HTML',
      downloadJson: 'Baixar JSON',
      copyBasic: 'Copiar Básico',
      copySubject: 'Copiar Emissor/Assunto',
      copyAll: 'Copiar Tudo',
      copyValue: 'Copiar Valor',
      downloadKey: 'Baixar Chave',
      exportPem: 'Exportar PEM',
      downloadCert: 'Baixar Certificado'
    },
    
    input: {
      paste: 'Ou cole os dados do certificado:',
      placeholder: 'Cole seu certificado em formato PEM (-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----)'
    },
    
    loading: 'Analisando certificado...',
    
    error: {
      title: 'Erro ao analisar certificado',
      invalidFormat: 'Formato de certificado inválido',
      invalidBase64: 'Certificado não está em Base64 válido',
      invalidStructure: 'Estrutura de certificado inválida',
      invalidDer: 'Formato DER inválido',
      invalidAsn1: 'Certificado inválido: falha ao analisar dados ASN.1',
      unsupportedType: 'Tipo de certificado não suportado',
      failedParse: 'Falha ao analisar certificado',
      invalidP12: 'Formato PKCS#12 inválido',
      invalidP12Password: 'Senha PKCS#12 incorreta',
      noCertificatesInP12: 'Nenhum certificado encontrado no arquivo PKCS#12',
      unableToProcessP12: 'Não foi possível processar arquivo PKCS#12'
    },
    
    guide: {
      title: 'Como usar esta ferramenta',
      step1: 'Carregue seu arquivo de certificado (.crt, .cer, .pem, .der, .p12 ou .pfx) ou cole os dados do certificado na caixa de texto.',
      step2: 'A ferramenta detectará automaticamente o formato (PEM, DER ou PKCS#12) e fará a decodificação.',
      step3: 'Visualize informações detalhadas incluindo emissor, assunto, validade, extensões e dados da chave pública.',
      step4: 'Use os botões na parte inferior para baixar relatórios em vários formatos ou copiar informações.'
    },
    
    tabs: {
      basic: 'Informações Básicas',
      subject: 'Assunto e Emissor',
      extensions: 'Extensões',
      publicKey: 'Chave Pública',
      fingerprints: 'Impressões Digitais',
      raw: 'Certificado Bruto'
    },
    
    results: {
      title: 'Detalhes do Certificado',
      serialNumber: 'Número de Série',
      version: 'Versão',
      sigAlg: 'Algoritmo de Assinatura',
      validFrom: 'Válido de',
      validTo: 'Válido até',
      subject: 'Assunto',
      issuer: 'Emissor',
      extensions: 'Extensões',
      publicKey: 'Chave Pública',
      algorithm: 'Algoritmo',
      keySize: 'Tamanho da Chave',
      keyValue: 'Valor da Chave',
      fingerprints: 'Impressões Digitais',
      rawCertificate: 'Certificado Original',
      field: 'Campo',
      value: 'Valor',
      critical: 'Crítico',
      noExtensions: 'Nenhuma extensão encontrada neste certificado.',
      validity: 'Validade do Certificado',
      expiresIn: 'Expira em {days} dias',
      visualization: 'Visualização do Certificado',
      daysRemaining: 'Dias Restantes',
      valid: 'Válido',
      expired: 'Expirado',
      expiringSoon: 'Perto de Expirar',
      fieldDescriptions: 'Descrições dos Campos',
      certificateUsage: 'Uso do Certificado',
      certificateChain: 'Cadeia de Certificados',
      signatureValue: 'Valor da Assinatura',
      notAvailable: 'Não Disponível',
      noSpecificUsage: 'Nenhum uso específico definido',
      signatureError: 'Erro ao analisar assinatura',
      keyDetails: 'Detalhes da Chave',
      enhancedView: 'Visualização Avançada',
      endEntity: 'Entidade Final',
      intermediate: 'Intermediário',
      rootCA: 'Autoridade Certificadora Raiz',
      endEntityCert: 'Certificado de Entidade Final',
      intermediateCert: 'Certificado Intermediário',
      rootCert: 'Autoridade Certificadora',
      issuedBy: 'Emitido por',
      unknownIssuer: 'Emissor Desconhecido',
      notYetValid: 'Ainda não válido'
    },
    
    report: {
      title: 'Relatório de Certificado X.509',
      generatedOn: 'Gerado em'
    },
    
    extensions: {
      subjectKeyIdentifier: 'Identificador de Chave do Assunto',
      keyUsage: 'Uso da Chave',
      subjectAltName: 'Nome Alternativo do Assunto',
      basicConstraints: 'Restrições Básicas',
      crlDistributionPoints: 'Pontos de Distribuição CRL',
      certificatePolicies: 'Políticas do Certificado',
      authorityKeyIdentifier: 'Identificador de Chave da Autoridade',
      extKeyUsage: 'Uso Estendido da Chave',
      authorityInfoAccess: 'Acesso a Informações da Autoridade',
      ctPrecertificateScts: 'CT Pré-certificado SCTs'
    },
    
    usage: {
      serverAuth: 'Autenticação de Servidor',
      clientAuth: 'Autenticação de Cliente',
      codeSigning: 'Assinatura de Código',
      emailProtection: 'Proteção de E-mail',
      timeStamping: 'Carimbo de Tempo',
      ocspSigning: 'Assinatura OCSP'
    },
    
    customOID: {
      title: 'Consulta de OID Personalizado',
      placeholder: 'Digite um OID, ex: 2.5.29.15',
      lookup: 'Consultar',
      result: 'Resultado',
      value: 'Valor',
      notFound: 'OID não encontrado',
      foundButComplex: 'OID encontrado mas com valor complexo',
      unknownName: 'OID com nome desconhecido',
      complexValue: 'Valor complexo, não pode ser exibido diretamente'
    },
    
    descriptions: {
      serialNumber: 'Número de série único atribuído pela autoridade certificadora',
      version: 'Versão do formato do certificado, normalmente V3',
      sigAlg: 'Algoritmo usado para gerar a assinatura do certificado',
      validFrom: 'Data e hora de início da validade do certificado',
      validTo: 'Data e hora de término da validade do certificado',
      subject: 'Informações de identidade do titular do certificado',
      issuer: 'Informações da autoridade certificadora que emitiu o certificado',
      publicKey: 'Informações da chave pública do titular',
      extensions: 'Campos de extensão contendo informações adicionais'
    },
    
    messages: {
      copiedToClipboard: 'Copiado para área de transferência',
      copyError: 'Falha ao copiar'
    },
    
    pkcs12: {
      passwordPrompt: 'Digite a senha do arquivo PKCS#12',
      noPassword: 'Sem senha'
    },
    
    keyUsages: {
      digitalSignature: 'Assinatura Digital',
      nonRepudiation: 'Não Repúdio',
      keyEncipherment: 'Criptografia de Chave',
      dataEncipherment: 'Criptografia de Dados',
      keyAgreement: 'Acordo de Chave',
      keyCertSign: 'Assinatura de Certificado',
      crlSign: 'Assinatura CRL',
      encipherOnly: 'Somente Criptografar',
      decipherOnly: 'Somente Decriptografar'
    },
    
    article: {
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
  }