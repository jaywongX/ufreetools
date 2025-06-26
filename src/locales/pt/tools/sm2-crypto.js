export default {
    name: 'Ferramenta de Criptografia SM2',
    description: 'Gera pares de chaves, criptografa/descriptografa dados e cria/verifica assinaturas digitais usando o algoritmo SM2',
    tabs: {
      title: 'Seleção de Função',
      keyGeneration: 'Geração de Chaves',
      encryptDecrypt: 'Criptografia/Descriptografia',
      signVerify: 'Assinatura/Verificação'
    },
    keyGeneration: {
      title: 'Geração de Par de Chaves SM2',
      generateButton: 'Gerar Par de Chaves',
      generating: 'Gerando...',
      publicKey: 'Chave Pública',
      privateKey: 'Chave Privada',
      exportPublicKey: 'Exportar Chave Pública',
      exportPrivateKey: 'Exportar Chave Privada',
      copy: 'Copiar',
      info: {
        title: 'Sobre Pares de Chaves SM2',
        description: 'SM2 é um algoritmo de criptografia de curva elíptica publicado pela Administração Estatal de Criptografia da China, sendo um algoritmo assimétrico:',
        points: [
          'Chave Pública: Pode ser compartilhada para criptografar dados ou verificar assinaturas',
          'Chave Privada: Deve ser armazenada com segurança, usada para descriptografar dados ou criar assinaturas'
        ],
        features: 'Características do algoritmo SM2:',
        featuresList: [
          'Baseado em curva elíptica de 256 bits, segurança equivalente a RSA 3072 bits',
          'Execução rápida, chaves curtas',
          'Padrão chinês (GB/T 32918), adequado para cenários comerciais domésticos',
          'Integra funções de criptografia, assinatura e troca de chaves'
        ],
        securityTip: 'Dica de segurança: Nunca compartilhe sua chave privada, armazene seu par de chaves com cuidado.'
      }
    },
    encryptDecrypt: {
      title: 'Tipo de Operação',
      encrypt: 'Criptografar',
      decrypt: 'Descriptografar',
      keyLabel: {
        encrypt: 'Chave Pública',
        decrypt: 'Chave Privada'
      },
      dataLabel: {
        encrypt: 'Dados para criptografar',
        decrypt: 'Dados para descriptografar'
      },
      keyPlaceholder: 'Cole a chave SM2 aqui',
      dataPlaceholder: {
        encrypt: 'Insira o texto para criptografar',
        decrypt: 'Insira o texto cifrado para descriptografar'
      },
      processButton: {
        encrypt: 'Criptografar',
        decrypt: 'Descriptografar'
      },
      processing: 'Processando...',
      resultLabel: {
        encrypt: 'Resultado da Criptografia',
        decrypt: 'Resultado da Descriptografia'
      },
      info: {
        title: 'Instruções de Criptografia/Descriptografia SM2',
        usage: 'Como usar:',
        points: [
          'Criptografia: Use a chave pública do destinatário, apenas quem tem a chave privada pode descriptografar',
          'Descriptografia: Use sua chave privada para descriptografar dados criptografados com sua chave pública'
        ],
        limitations: 'Limitações:',
        limitationsList: [
          'SM2 tem limite de tamanho para texto claro, ideal para mensagens curtas ou dados sensíveis',
          'Para textos longos, recomenda-se criptografia simétrica (como SM4) primeiro, depois criptografar a chave com SM2'
        ],
        note: 'Observação: O formato de dados SM2 não é compatível com RSA, certifique-se que o destinatário suporta SM2.'
      }
    },
    signVerify: {
      title: 'Tipo de Operação',
      sign: 'Assinar',
      verify: 'Verificar',
      keyLabel: {
        sign: 'Chave Privada',
        verify: 'Chave Pública'
      },
      dataLabel: 'Dados para {operation}',
      signatureLabel: 'Valor da Assinatura',
      signatureValue: 'Assinatura Gerada',
      keyPlaceholder: 'Cole a chave SM2 aqui',
      dataPlaceholder: 'Insira o texto original',
      signaturePlaceholder: 'Insira a assinatura para verificação',
      processButton: {
        sign: 'Gerar Assinatura',
        verify: 'Verificar Assinatura'
      },
      processing: 'Processando...',
      verificationSuccess: 'Assinatura verificada com sucesso! Dados íntegros e não alterados.',
      verificationFailed: 'Falha na verificação! Os dados podem ter sido alterados ou a assinatura está incorreta.',
      info: {
        title: 'Instruções de Assinatura/Verificação SM2',
        mainUses: 'Principais usos:',
        usesList: [
          'Integridade de dados: Garante que os dados não foram alterados',
          'Autenticação: Prova a origem dos dados',
          'Não repúdio: O remetente não pode negar o envio'
        ],
        usage: 'Como usar:',
        usageList: [
          'Assinatura: Use sua chave privada para gerar assinaturas',
          'Verificação: Use a chave pública do remetente para verificar'
        ],
        note: 'Observação: Assinaturas SM2 usam padrão chinês e não são compatíveis com algoritmos internacionais.'
      }
    },
    messages: {
      copied: 'Copiado para a área de transferência',
      copyFailed: 'Falha ao copiar, copie manualmente',
      keygenError: 'Erro ao gerar chaves: {error}',
      processError: 'Operação falhou. Verifique suas chaves e dados de entrada.',
      emptyKey: 'Insira uma chave',
      emptyData: 'Insira dados para processar'
    }
  }