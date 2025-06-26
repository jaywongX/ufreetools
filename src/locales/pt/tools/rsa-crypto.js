export default {
    name: 'Ferramenta de Criptografia RSA',
    description: 'Gerar pares de chaves RSA, criptografar/descriptografar dados, criar/verificar assinaturas digitais',
    tabs: {
      title: 'Seleção de Função',
      keyGeneration: 'Geração de Chaves',
      encryptDecrypt: 'Criptografia/Descriptografia',
      signVerify: 'Assinatura/Verificação'
    },
    keyGeneration: {
      title: 'Geração de Par de Chaves RSA',
      keyLength: 'Comprimento da Chave',
      keySizes: {
        size512: '512 bits (não recomendado para cenários seguros)',
        size1024: '1024 bits (segurança básica)',
        size2048: '2048 bits (recomendado)',
        size4096: '4096 bits (alta segurança)'
      },
      generateButton: 'Gerar Par de Chaves',
      generating: 'Gerando...',
      publicKey: 'Chave Pública',
      privateKey: 'Chave Privada',
      exportPublicKey: 'Exportar Chave Pública',
      exportPrivateKey: 'Exportar Chave Privada',
      copy: 'Copiar',
      info: {
        title: 'Sobre Pares de Chaves RSA',
        description: 'RSA é um algoritmo de criptografia assimétrica que usa um par de chaves:',
        points: {
          0: 'Chave pública: pode ser compartilhada com qualquer pessoa, usada para criptografar dados ou verificar assinaturas.',
          1: 'Chave privada: deve ser guardada com segurança, não pode ser divulgada, usada para descriptografar dados ou criar assinaturas.'
        },
        keyLengthTitle: 'O comprimento da chave determina o nível de segurança:',
        keyLengthPoints: {
          0: '512 bits - Não é mais seguro, apenas para testes',
          1: '1024 bits - Fraco, não recomendado para dados sensíveis',
          2: '2048 bits - Atualmente o padrão recomendado',
          3: '4096 bits - Oferece maior segurança, mas é mais lento'
        }
      }
    },
    encryptDecrypt: {
      title: 'Criptografia e Descriptografia',
      encryptMode: 'Modo Criptografia',
      decryptMode: 'Modo Descriptografia',
      encryptDescription: 'Use a chave pública para criptografar dados, apenas quem possui a chave privada correspondente pode descriptografar.',
      decryptDescription: 'Use a chave privada para descriptografar dados previamente criptografados com a chave pública.',
      keyLabel: {
        encrypt: 'Chave Pública',
        decrypt: 'Chave Privada'
      },
      dataLabel: {
        encrypt: 'Dados para criptografar',
        decrypt: 'Dados para descriptografar'
      },
      keyPlaceholder: 'Cole a chave RSA aqui',
      dataPlaceholder: {
        encrypt: 'Digite o texto a ser criptografado',
        decrypt: 'Digite os dados a serem descriptografados (formato Base64)'
      },
      processButton: {
        encrypt: 'Criptografar Dados',
        decrypt: 'Descriptografar Dados'
      },
      processing: 'Processando...',
      resultLabel: {
        encrypt: 'Resultado da Criptografia',
        decrypt: 'Resultado da Descriptografia'
      },
      info: {
        title: 'Sobre Criptografia e Descriptografia RSA',
        description: 'RSA é um algoritmo de criptografia assimétrica que funciona da seguinte forma:',
        points: {
          0: 'Criptografia: use a chave pública do destinatário para criptografar dados, garantindo que apenas quem possui a chave privada correspondente possa descriptografar.',
          1: 'Descriptografia: o destinatário usa sua chave privada para descriptografar os dados.',
          2: 'A criptografia RSA tem limitações de tamanho de dados, geralmente não é adequada para criptografar arquivos grandes diretamente.',
          3: 'Para grandes quantidades de dados, normalmente usa-se criptografia simétrica (como AES) para os dados e RSA para a chave simétrica.'
        }
      },
      encrypt: 'Criptografar',
      decrypt: 'Descriptografar'
    },
    signVerify: {
      title: 'Assinatura e Verificação',
      signMode: 'Modo Assinatura',
      verifyMode: 'Modo Verificação',
      signDescription: 'Use a chave privada para assinar dados, provando autenticidade e integridade da origem.',
      verifyDescription: 'Use a chave pública para verificar a assinatura, confirmando que os dados não foram alterados e vieram do remetente esperado.',
      keyLabel: {
        sign: 'Chave Privada',
        verify: 'Chave Pública'
      },
      dataLabel: 'Dados',
      hashAlgorithm: 'Algoritmo de Hash',
      hashOptions: {
        sha1: 'SHA-1 (não recomendado para cenários seguros)',
        sha256: 'SHA-256 (recomendado)',
        sha512: 'SHA-512 (alta segurança)',
        md5: 'MD5 (apenas para testes, inseguro)'
      },
      signatureLabel: 'Assinatura (formato Base64)',
      signaturePlaceholder: 'Digite os dados de assinatura aqui',
      processButton: {
        sign: 'Gerar Assinatura',
        verify: 'Verificar Assinatura'
      },
      processing: 'Processando...',
      signatureResult: 'Resultado da Assinatura (formato Base64)',
      verificationSuccess: 'Verificação de Assinatura Bem-sucedida',
      verificationFailure: 'Falha na Verificação de Assinatura',
      verificationSuccessMessage: 'Os dados não foram alterados e vieram do remetente esperado.',
      verificationFailureMessage: 'Os dados podem ter sido alterados ou a assinatura não foi criada com a chave privada correspondente.',
      info: {
        title: 'Sobre Assinatura e Verificação RSA',
        description: 'A assinatura RSA é uma técnica de assinatura digital usada para verificar a autenticidade e integridade de mensagens:',
        points: {
          0: 'Processo de assinatura: use a chave privada do remetente para criptografar o hash da mensagem, gerando uma assinatura digital.',
          1: 'Processo de verificação: o destinatário usa a chave pública do remetente para descriptografar a assinatura e comparar com o hash da mensagem.',
          2: 'Se a verificação for bem-sucedida, indica que a mensagem foi enviada por quem possui a chave privada e o conteúdo não foi alterado.',
          3: 'A assinatura não criptografa a mensagem, apenas verifica sua origem e integridade. Para proteger o conteúdo, é necessário criptografia adicional.'
        }
      },
      sign: 'Assinar',
      verify: 'Verificar Assinatura',
      signatureValue: 'Valor da Assinatura',
      verificationResult: {
        success: 'Verificação bem-sucedida! Assinatura válida, dados íntegros e origem confiável.',
        failed: 'Falha na verificação! Assinatura inválida, dados possivelmente alterados ou origem não confiável.'
      },
      dataPlaceholder: 'Digite os dados para assinar ou verificar',
      keyPlaceholder: 'Cole a chave RSA aqui'
    },
    messages: {
      copied: 'Copiado para a área de transferência',
      copyFailed: 'Falha ao copiar, copie manualmente',
      keygenError: 'Erro ao gerar par de chaves: {error}',
      encryptError: 'Falha na criptografia, verifique sua chave pública e dados de entrada. A criptografia RSA tem limitações de tamanho de dados.',
      decryptError: 'Falha na descriptografia, certifique-se de que a chave privada está correta e os dados de entrada são texto criptografado válido.',
      signError: 'Falha ao gerar assinatura, verifique sua chave privada e dados de entrada.',
      verifyError: 'Falha na verificação, verifique suas chaves e dados de entrada.',
      processingError: 'Falha na operação. Verifique suas chaves e dados de entrada.'
    }
  }