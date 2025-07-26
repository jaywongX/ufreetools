export default {
  name: 'Ferramenta de Depuração JWT',
  description: 'Ferramenta online para analisar, validar e depurar tokens JWT',

  sections: {
    encoded: 'Token JWT Codificado',
    decoded: 'Token JWT Decodificado',
    header: 'Cabeçalho',
    payload: 'Conteúdo',
    signature: 'Assinatura',
    verification: 'Validação'
  },

  actions: {
    decode: 'Decodificar',
    verify: 'Validar Assinatura',
    copy: 'Copiar',
    share: 'Compartilhar Token',
    generateToken: 'Gerar Token',
    generateRandomToken: 'Token Aleatório',
    clear: 'Limpar',
    generateRandomPayload: 'Gerar Conteúdo Aleatório',
    generateRandomKey: 'Gerar Chave Aleatória',
    generateKeyPair: 'Gerar Par de Chaves'
  },

  messages: {
    invalidToken: 'Formato de Token JWT inválido',
    copied: 'Copiado para a área de transferência!',
    copyFailed: 'Falha ao copiar - copie manualmente',
    verificationSuccess: 'Validação de assinatura bem-sucedida',
    verificationFailed: 'Falha na validação da assinatura',
    keyGenerated: 'Par de chaves gerado com sucesso',
    keyGenerationFailed: 'Falha ao gerar par de chaves',
    tokenGenerated: 'Token gerado com sucesso',
    tokenGenerationFailed: 'Falha ao gerar token',
    randomTokenGenerated: 'Token aleatório gerado e decodificado',
    certUploadSuccess: 'Certificado carregado com sucesso',
    certFormatInvalid: 'Formato de certificado inválido',
    certReadFailed: 'Falha ao ler certificado',
    tokenFormatError: 'Formato de token inválido - JWT deve ter 3 partes separadas por pontos',
    tokenHeaderMissingAlg: 'Cabeçalho do token não possui campo de algoritmo (alg)',
    tokenHeaderInvalid: 'Formato de cabeçalho inválido',
    tokenVerificationFailed: 'Falha na validação do formato do token',
    tokenExpired: 'Token expirado. Data de expiração: {time}',
    tokenNotEffective: 'Token ainda não válido. Data de ativação: {time}',
    tokenIssuedInFuture: 'Data de emissão inválida (no futuro). Emissão: {time}',
    algorithmNotSupported: 'Algoritmo não suportado',
    randomSecretGenerated: 'Chave secreta aleatória gerada',
    randomSecretGenerationFailed: 'Falha ao gerar chave aleatória',
    randomPayloadGenerated: 'Conteúdo aleatório gerado',
    randomPayloadGenerationFailed: 'Falha ao gerar conteúdo aleatório',
    contentCleared: 'Conteúdo limpo',
    tokenDecodeSuccess: 'Token decodificado com sucesso',
    tokenDecodeFailed: 'Falha ao decodificar token',
    pleaseInputKey: 'Insira a chave de validação',
    pleaseGenerateKeyPair: 'Gere primeiro o par de chaves {type}',
    pleaseInputVerificationKey: 'Insira a chave de validação',
    pleaseInputPublicKey: 'Insira a chave pública de validação',
    pleaseInputToken: 'Insira o token para validação',
    payloadFormatError: 'Erro no formato do conteúdo - verifique JSON',
    invalidTimestamp: 'Timestamp inválido'
  },

  placeholders: {
    secretKey: 'Insira a chave secreta',
    privateKey: 'Insira ou gere chave privada',
    publicKey: 'Insira ou gere chave pública',
    payload: 'Insira conteúdo em formato JSON',
    token: 'Insira ou gere token JWT',
    verificationSecretKey: 'Insira chave de validação',
    verificationPublicKey: 'Insira chave pública de validação'
  },

  labels: {
    algorithm: 'Algoritmo',
    secretKey: 'Chave Secreta',
    privateKey: 'Chave Privada',
    publicKey: 'Chave Pública',
    certificate: 'Certificado Digital (opcional)',
    payload: 'Conteúdo (Payload)',
    token: 'Token',
    verificationPublicKey: 'Chave Pública de Validação',
    tokenResult: 'Resultado da Análise',
    verifyToken: 'Validar Token',
    tokenDecoded: 'Token assinado com algoritmo {alg}',
    timestamp: 'Conversão de Timestamp',
    issuedAt: 'Data de Emissão (iat)',
    expiration: 'Data de Expiração (exp)',
    notBefore: 'Data de Ativação (nbf)',
    tokenFormat: 'Sem conteúdo',
    tokenFormatDesc: 'Resultados aparecerão aqui após inserir token',
    uploadCert: 'Arraste certificado ou clique para selecionar',
    certName: 'Nome do Certificado',
    sm3Fingerprint: 'Impressão Digital SM3 (x5t#sm3)',
    certUploadNote: 'Campo "x5t#sm3" será adicionado ao cabeçalho',
    secondsTimestamp: 'Timestamp em segundos',
    millisecondsTimestamp: 'Timestamp em milissegundos'
  },

  buttons: {
    cancel: 'Cancelar',
    verify: 'Validar',
    clearCert: 'Remover Certificado',
    generateToken: 'Gerar Token',
    decodeToken: 'Decodificar Token',
    verifyToken: 'Validar Token',
    close: 'Fechar'
  },

  verification: {
    success: 'Validação Bem-sucedida',
    failure: 'Falha na Validação',
    validMessage: 'Assinatura válida - token autêntico',
    invalidMessage: 'Assinatura inválida - token comprometido'
  },

  errors: {
    noToken: 'Insira um token para validação',
    invalidToken: 'Formato de token inválido',
    noSecretKey: 'Forneça chave de validação',
    noPublicKey: 'Forneça chave pública',
    invalidSignature: 'Assinatura inválida',
    verificationFailed: 'Falha na validação do token'
  }
};