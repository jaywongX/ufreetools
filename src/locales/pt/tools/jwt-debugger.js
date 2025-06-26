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
    },
    article: {
      title: "Ferramenta JWT: Analise e Valide Tokens de Autenticação",
      features: {
        title: "Funcionalidades da Ferramenta JWT",
        description: "Esta <strong>ferramenta de depuração JWT</strong> permite decodificar e validar tokens JSON Web Token (JWT) usados em sistemas de autenticação modernos. Com este <strong>decodificador JWT online</strong>, você pode visualizar o conteúdo do token, verificar sua assinatura e identificar problemas comuns.<br><br>O <strong>validador de tokens</strong> suporta todos os algoritmos padrão como HS256, RS256 e ES256, sendo essencial para desenvolvedores que trabalham com APIs RESTful, autenticação single sign-on (SSO) e sistemas de microserviços.",
        useCases: {
          title: "Aplicações Práticas",
          items: [
            "<strong>Depuração de APIs</strong>: Identifique problemas em tokens de autenticação que causam erros 401/403",
            "<strong>Integração com OAuth</strong>: Verifique tokens emitidos por provedores de identidade como Google, Auth0 e Azure AD",
            "<strong>Testes de Segurança</strong>: Analise tokens para garantir que seguem as melhores práticas de segurança",
            "<strong>Desenvolvimento</strong>: Gere tokens de teste para simular diferentes cenários de autenticação",
            "<strong>Educação</strong>: Aprenda sobre a estrutura e funcionamento dos tokens JWT",
            "<strong> autenticação de microserviços </strong> : a equipe que constroem a arquitetura de microserviços pode verificar se <strong> token de serviço </strong> se as informações de autorização corretas são transmitidas entre serviços e se os limites de segurança adequados são mantidos"
          ]
        }
      },
      faq: {
        title: "Perguntas Frequentes",
        items: [
          {
            question: "É seguro usar esta ferramenta com tokens reais?",
            answer: "Sim - todo o processamento ocorre no seu navegador. Seus tokens nunca são enviados para nossos servidores. Para máxima segurança, recomendamos usar tokens de teste em ambientes de produção."
          },
          {
            question: "Quais informações um token JWT contém?",
            answer: "Um JWT possui três partes: <strong>Cabeçalho</strong> (metadados e algoritmo), <strong>Conteúdo</strong> (dados do usuário e permissões) e <strong>Assinatura</strong> (garante autenticidade). Nosso <strong>analisador JWT</strong> exibe todas essas informações de forma organizada."
          },
          {
            question: "Como verificar se um token foi adulterado?",
            answer: "Use a função <strong>Validar Assinatura</strong> com a chave correta. Se a validação falhar, o token pode ter sido modificado ou está usando uma chave diferente."
          },
          {
            question: "Por que meu token válido está sendo rejeitado?",
            answer: "Verifique: <strong>Data de expiração</strong> (exp), <strong>Período de validade</strong> (nbf), <strong>Emissor</strong> (iss) e <strong>Audiência</strong> (aud). Nosso <strong>validador JWT</strong> destaca esses problemas comuns."
          },
          {
            question: "Posso gerar tokens para testes?",
            answer: "Sim - use <strong>Gerar Token</strong> para criar JWTs com conteúdo personalizado. Ideal para testar diferentes cenários de autenticação e autorização."
          }
        ]
      },
      guide: {
        title: "Como Usar a Ferramenta JWT",
        steps: [
          "<strong>Cole seu token JWT</strong> no campo superior",
          "<strong>Clique em Decodificar</strong> para visualizar cabeçalho e conteúdo",
          "<strong>Verifique datas</strong> de expiração (exp) e validade (nbf)",
          "<strong>Insira a chave</strong> apropriada para validar a assinatura",
          "<strong>Analise os resultados</strong> para identificar problemas",
          "<strong>Gere novos tokens</strong> para testes quando necessário",
          "Para <strong> gerar novo token </strong> clique na opção 'gerar token ', especifique a carga necessária no formato JSON, selecione o algoritmo, forneça a chave de assinatura (ou gere uma) e a ferramenta criará o JWT com o formato correto para você"
        ]
      },
      conclusion: "Esta ferramenta JWT é indispensável para desenvolvedores que trabalham com sistemas de autenticação modernos. Ao fornecer insights detalhados sobre tokens JWT, ela simplifica a depuração de problemas de autenticação e ajuda a garantir a segurança de suas aplicações."
    }
  }