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
  }
};