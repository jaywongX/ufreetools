export default {
    name: 'Algoritmos de Criptografia Simétrica',
    description: 'Implementa criptografia e descriptografia segura de texto e arquivos, suportando múltiplos algoritmos como AES, DES e o padrão chinês SM4',
    encryption: {
      title: 'Criptografar/Descriptografar',
      plaintext: 'Texto claro',
      plaintextPlaceholder: 'Insira o texto a ser criptografado',
      ciphertext: 'Texto cifrado',
      ciphertextPlaceholder: 'Os dados criptografados aparecerão aqui',
      encrypt: 'Criptografar',
      decrypt: 'Descriptografar',
      decrypted: 'Texto descriptografado',
      decryptedPlaceholder: 'Os dados descriptografados aparecerão aqui',
      encryptSuccess: 'Criptografia bem-sucedida',
      decryptSuccess: 'Descriptografia bem-sucedida',
      encryptError: 'Falha na criptografia: {error}',
      decryptError: 'Falha na descriptografia: {error}'
    },
    algorithm: {
      title: 'Selecione o algoritmo',
      aes: 'AES',
      des: 'DES',
      tripledes: '3DES (Triplo DES)',
      sm4: 'SM4 (Padrão Chinês)',
      "3des": '3DES (Triplo DES)'
    },
    mode: {
      title: 'Modo de operação',
      ecb: 'ECB - Modo Eletrônico de Codebook',
      cbc: 'CBC - Modo de Encadeamento de Blocos',
      cfb: 'CFB - Modo de Feedback de Texto Cifrado',
      ofb: 'OFB - Modo de Feedback de Saída',
      ctr: 'CTR - Modo Contador'
    },
    padding: {
      title: 'Preenchimento',
      pkcs7: 'PKCS7',
      zeroPadding: 'Preenchimento com zeros',
      zeropadding: 'Preenchimento com zeros'
    },
    operation: {
      title: 'Tipo de operação',
      encrypt: 'Criptografar',
      decrypt: 'Descriptografar'
    },
    key: {
      title: 'Chave',
      label: 'Chave',
      placeholder: 'Insira chave de {keySize}',
      placeholderString: 'Insira chave string de {keySize} (preenchimento automático)',
      placeholderHex: 'Insira chave hexadecimal de {keySize} (preenchimento automático)',
      placeholderBase64: 'Insira chave Base64 de {keySize} (preenchimento automático)',
      generateRandom: 'Gerar aleatoriamente',
      sizeHint: '{keySize}',
      autoFillHint: 'Chaves menores serão preenchidas com zeros, maiores serão truncadas'
    },
    iv: {
      title: 'Vetor de Inicialização (IV)',
      label: 'Vetor de Inicialização (IV)',
      placeholder: 'Insira IV de {blockSize}',
      placeholderString: 'Insira IV string de {blockSize} (preenchimento automático)',
      placeholderHex: 'Insira IV hexadecimal de {blockSize} (preenchimento automático)',
      placeholderBase64: 'Insira IV Base64 de {blockSize} (preenchimento automático)',
      generateRandom: 'Gerar aleatoriamente',
      sizeHint: '{blockSize}',
      autoFillHint: 'IVs menores serão preenchidos com zeros, maiores serão truncados'
    },
    input: {
      title: 'Conteúdo para criptografar',
      titleDecrypt: 'Conteúdo para descriptografar',
      clear: 'Limpar',
      placeholder: 'Insira texto para criptografar',
      placeholderDecrypt: 'Insira texto cifrado em formato {format} para descriptografar'
    },
    inputFormat: {
      title: 'Formato de entrada',
      string: 'String',
      hex: 'HEX',
      base64: 'Base64'
    },
    output: {
      title: 'Resultado da criptografia',
      titleDecrypt: 'Resultado da descriptografia',
      copyResult: 'Copiar resultado',
      copied: 'Copiado'
    },
    outputFormat: {
      title: 'Formato de saída',
      string: 'String',
      hex: 'HEX',
      base64: 'Base64'
    },
    error: {
      title: 'Erro',
      invalidHex: 'Chave deve estar em formato HEX',
      invalidIvHex: 'IV deve estar em formato HEX',
      invalidHexInput: 'Entrada HEX inválida',
      invalidBase64: 'Entrada Base64 inválida',
      unsupportedAlgorithm: 'Algoritmo não suportado',
      decryptionFailed: 'Falha na descriptografia: {message}',
      copyFailed: 'Falha ao copiar, copie manualmente',
      unknownError: 'Ocorreu um erro durante o processamento',
      invalidHexFormat: 'Formato HEX inválido',
      invalidBase64Format: 'Formato Base64 inválido',
      emptyBase64: 'Codificação Base64 vazia',
      decryptFailed: 'Falha na descriptografia:'
    },
    info: {
      title: 'Informações sobre algoritmos',
      algorithms: {
        aes: 'AES: Padrão Avançado de Criptografia, usando chaves de 128, 192 ou 256 bits',
        des: 'DES: Padrão de Criptografia de Dados, chave de 56 bits, segurança baixa',
        tripledes: '3DES: Triplo DES, usando três chaves DES de 56 bits, maior segurança',
        sm4: 'SM4: Padrão Chinês, algoritmo de bloco com chave de 128 bits',
        "3des": '3DES: Triplo DES, usando três chaves DES de 56 bits, maior segurança'
      },
      modes: {
        title: 'Explicação dos modos de operação',
        ecb: 'ECB: Modo Eletrônico de Codebook, blocos independentes, não recomendado',
        cbc: 'CBC: Modo de Encadeamento de Blocos, cada bloco depende do anterior, mais seguro',
        cfb: 'CFB: Modo de Feedback de Texto Cifrado, converte cifra de bloco em fluxo',
        ofb: 'OFB: Modo de Feedback de Saída, também cifra de fluxo, operações idênticas',
        ctr: 'CTR: Modo Contador, usa contador crescente, permite processamento paralelo'
      }
    },
    buttons: {
      process: 'Criptografar',
      processDecrypt: 'Descriptografar'
    },
    file: {
      title: 'Criptografia de arquivos',
      select: 'Selecionar arquivo',
      drop: 'Ou arraste e solte aqui',
      encrypt: 'Criptografar arquivo',
      decrypt: 'Descriptografar arquivo',
      download: 'Baixar resultado',
      selected: 'Selecionado: {name}',
      size: 'Tamanho: {size}',
      maxSize: 'Tamanho máximo: 100MB',
      encryptingFile: 'Criptografando arquivo...',
      decryptingFile: 'Descriptografando arquivo...',
      downloadReady: 'Pronto para download',
      fileTooBig: 'Arquivo muito grande. Tamanho máximo permitido: 100MB.'
    },
    options: {
      title: 'Opções',
      autoDecrypt: 'Descriptografar automaticamente após criptografar',
      includeMeta: 'Incluir metadados do algoritmo na saída',
      kdf: 'Função de Derivação de Chave',
      pbkdf2: 'PBKDF2',
      scrypt: 'scrypt',
      argon2: 'Argon2id',
      salt: 'Sal (para derivação de chave)',
      saltPlaceholder: 'Insira sal em HEX ou deixe em branco para gerar aleatoriamente',
      autoClear: 'Limpar dados sensíveis automaticamente',
      saveSettings: 'Salvar configurações'
    },
    security: {
      title: 'Informações de segurança',
      description: 'Sobre segurança na criptografia',
      warning: 'Aviso',
      ecbInsecure: 'Modo ECB não é recomendado para aplicações seguras.',
      useModern: 'Para dados sensíveis, use AES-256 com modo GCM ou CBC.',
      keyWarning: 'Proteja suas chaves de criptografia. Se perdidas, os dados serão irrecuperáveis.',
      browserWarning: 'Criptografia baseada em navegador é conveniente, mas pode não ser adequada para dados altamente sensíveis.',
      learnMore: 'Saiba mais sobre criptografia'
    },
    messages: {
      noAlgorithm: 'Selecione um algoritmo de criptografia',
      noKey: 'Insira uma chave ou senha de criptografia',
      invalidKeyLength: 'Tamanho de chave inválido para o algoritmo selecionado',
      invalidIv: 'Tamanho de IV inválido para o algoritmo e modo selecionados',
      noData: 'Insira dados para criptografar/descriptografar',
      padError: 'Erro de preenchimento - chave ou dados podem estar incorretos',
      fileSuccess: 'Arquivo processado com sucesso',
      fileError: 'Erro ao processar arquivo: {error}',
      clipboardError: 'Erro ao copiar para área de transferência: {error}',
      invalidFormat: 'Formato de entrada inválido'
    },
    article: {
      title: "Algoritmos de Criptografia Simétrica: Ferramenta Completa para Segurança de Dados",
      features: {
        title: "Funcionalidades da Criptografia Simétrica",
        description: "Esta <strong>ferramenta de criptografia</strong> implementa algoritmos simétricos padrão para proteção de dados sensíveis. Diferente da criptografia assimétrica que usa pares de chaves, a <strong>criptografia simétrica</strong> utiliza uma única chave secreta para ambos processos de cifragem e decifragem. O sistema suporta múltiplos algoritmos incluindo <strong>AES</strong> (padrão atual), <strong>DES</strong> (legado), <strong>3DES</strong> (versão reforçada) e <strong>SM4</strong> (padrão chinês).<br><br>Principais recursos incluem processamento de texto e arquivos, com configurações flexíveis como <strong>modos de operação</strong> (CBC, ECB, CFB, OFB, CTR), <strong>esquemas de preenchimento</strong> e suporte a múltiplos formatos de entrada/saída. Esta <strong>solução de criptografia</strong> oferece interface intuitiva que torna técnicas avançadas acessíveis sem exigir conhecimento profundo em criptografia, mantendo altos padrões de segurança.",
        useCases: {
          title: "Cenários Práticos de Aplicação",
          items: [
            "<strong>Compartilhamento seguro de arquivos</strong>: Proteja documentos, planilhas e mídias antes de enviar por canais potencialmente inseguros. O destinatário com a chave correta pode descriptografar e acessar o conteúdo original, garantindo confidencialidade na transmissão.",
            "<strong>Armazenamento de credenciais</strong>: Crie repositórios criptografados para senhas e informações de autenticação. Ao usar uma senha mestra para cifrar esses dados sensíveis, você mantém uma coleção segura de credenciais enquanto memoriza apenas uma chave forte.",
            "<strong>Autenticação em APIs</strong>: Gere e valide tokens criptografados para sistemas de autenticação. A criptografia simétrica oferece equilíbrio ideal entre segurança e desempenho para tokens em aplicações web e serviços.",
            "<strong>Criptografia de campos em bancos de dados</strong>: Proteja informações sensíveis em bancos de dados sem reconstruir todo o sistema. <strong>Algoritmos simétricos</strong> permitem cifrar seletivamente dados críticos como identificadores pessoais, informações financeiras ou dados privados de usuários.",
            "<strong>Segurança em configurações</strong>: Criptografe arquivos de configuração contendo credenciais sensíveis como senhas de banco de dados, chaves de API e tokens de serviço. Isso previne exposição acidental mesmo se os arquivos forem comprometidos.",
            "<strong>Canais de comunicação seguros</strong>: Estabeleça comunicação ponto-a-ponto criptografada gerando chaves simétricas por sessão. Essa abordagem permite troca de mensagens segura em tempo real mantendo desempenho adequado mesmo em aplicações com limitações de banda."
          ]
        }
      },
      faq: {
        title: "Perguntas Frequentes sobre Criptografia Simétrica",
        items: [
          {
            question: "Quais as diferenças entre AES, DES, 3DES e SM4?",
            answer: "Estes são diferentes <strong>algoritmos simétricos</strong> com níveis de segurança e características distintas. <strong>AES</strong> (Padrão Avançado) é o padrão global atual, oferecendo excelente segurança e desempenho com chaves de 128, 192 ou 256 bits. <strong>DES</strong> (Padrão de Criptografia de Dados) é um algoritmo antigo usando chave de 56 bits, agora considerado inseguro para aplicações críticas. <strong>3DES</strong> aplica o DES três vezes com chaves diferentes para maior segurança, porém com menor desempenho. <strong>SM4</strong> é um padrão chinês com chave de 128 bits, projetado como alternativa ao AES com segurança comparável. Para maioria das aplicações modernas, AES é recomendado por oferecer o melhor equilíbrio entre segurança e eficiência."
          },
          {
            question: "Qual modo de operação devo escolher?",
            answer: "O <strong>modo de operação</strong> determina como o algoritmo processa blocos de dados. <strong>ECB</strong> é o mais simples mas menos seguro, cifrando blocos idênticos de forma idêntica. <strong>CBC</strong> aumenta segurança fazendo cada bloco depender do anterior, requerendo vetor de inicialização (IV). <strong>CFB</strong>, <strong>OFB</strong> e <strong>CTR</strong> convertem cifras de bloco em fluxo com características distintas. Para dados sensíveis, CBC com IV aleatório oferece bom equilíbrio. CTR permite paralelização e evita necessidade de preenchimento. Sistemas modernos frequentemente preferem modos autenticados como GCM (não disponível nesta ferramenta) que combinam confidencialidade e integridade."
          },
          {
            question: "Esta ferramenta online é segura para dados sensíveis?",
            answer: "Este <strong>criptografador baseado em navegador</strong> processa todos dados localmente sem enviar informações a servidores externos, provendo nível básico de confidencialidade. Porém, para informações altamente sensíveis, considere: 1) Implementações JavaScript podem não oferecer mesmas garantias de segurança que soluções nativas auditadas; 2) Ambientes de navegador estão sujeitos a ameaças como extensões maliciosas; 3) Gerenciamento de chaves permanece crítico - chaves perdidas tornam dados irrecuperáveis. Para sistemas críticos, recomenda-se software dedicado com práticas adequadas de gerenciamento de chaves. Esta ferramenta é mais adequada para fins educacionais, uso ocasional ou proteção de dados de sensibilidade moderada."
          },
          {
            question: "Como compartilhar chaves de forma segura?",
            answer: "O <strong>gerenciamento seguro de chaves</strong> é essencial para manter a segurança criptográfica. Nunca compartilhe chaves pelos mesmos canais usados para dados cifrados. Em vez disso: 1) Use canais separados e seguros para troca de chaves; 2) Considere dividir a chave em partes enviadas por diferentes meios; 3) Prefira protocolos seguros de troca de chaves; 4) Para comunicação contínua, use criptografia assimétrica para negociar chaves simétricas; 5) Implemente rotatividade de chaves para segurança prolongada; 6) Armazene chaves com segurança, preferencialmente em sistemas dedicados de gerenciamento; 7) Para máxima segurança, considere módulos de hardware (HSM) ou serviços especializados. Lembre-se que a segurança dos dados cifrados depende diretamente das práticas de gerenciamento de chaves."
          },
          {
            question: "Como garantir integridade dos dados criptografados?",
            answer: "A <strong>criptografia simétrica</strong> padrão fornece confidencialidade mas não garante integridade. Para verificar se dados cifrados não foram alterados: 1) Prefira modos autenticados como AES-GCM quando disponíveis; 2) Implemente verificações adicionais calculando hashes criptográficos (ex: SHA-256) ou HMAC dos dados cifrados; 3) Para aplicações críticas, considere assinaturas digitais além da criptografia; 4) Sempre verifique estrutura e tamanho do texto cifrado antes de decifrar; 5) Inclua metadados de versão no esquema para prevenir ataques de downgrade. Estas medidas ajudam a assegurar tanto confidencialidade quanto integridade em ambientes potencialmente inseguros."
          }
        ]
      },
      guide: {
        title: "Guia Passo a Passo para Uso da Ferramenta",
        steps: [
          "<strong>Selecione algoritmo</strong>: Escolha entre AES (recomendado), DES, 3DES ou SM4 conforme requisitos de segurança e compatibilidade. AES oferece melhor equilíbrio para aplicações modernas.",
          "<strong>Escolha modo de operação</strong>: Selecione entre ECB, CBC, CFB, OFB ou CTR. Para segurança geral, CBC com IV aleatório é recomendado.",
          "<strong>Configure preenchimento</strong>: Para modos que requerem (CBC/ECB), escolha entre PKCS7 (padrão) ou preenchimento com zeros. Isso define como blocos incompletos são tratados.",
          "<strong>Insira ou gere chave</strong>: Digite chave personalizada ou use gerador para criar chave criptograficamente forte. Para AES, tamanhos são 16, 24 ou 32 bytes conforme segurança desejada.",
          "<strong>Forneça IV quando necessário</strong>: Para modos além de ECB, gere IV aleatório ou insira manualmente. IVs devem ser únicos por operação mas não necessariamente secretos.",
          "<strong>Insira dados</strong>: Digite ou cole texto para cifrar. Para descriptografar, forneça texto cifrado no formato original (geralmente HEX ou Base64).",
          "<strong>Processe e use resultados</strong>: Clique em 'Criptografar' ou 'Descriptografar'. Armazene chaves e IVs com segurança pois são necessários para decifragem. Use botão copiar para transferir resultados facilmente."
        ]
      },
      conclusion: "Esta ferramenta de criptografia simétrica oferece maneira poderosa e acessível de proteger informações sensíveis usando algoritmos padrão. Ao seguir boas práticas e entender as opções disponíveis, você pode implementar criptografia robusta para diversas aplicações, desde proteção de arquivos pessoais até sistemas de segurança mais complexos. Embora a conveniência da solução baseada em navegador seja valiosa para muitas necessidades, aplicações críticas podem requerer soluções dedicadas com infraestrutura adequada de gerenciamento de chaves. Seja para adicionar privacidade a dados pessoais ou explorar conceitos criptográficos, esta ferramenta proporciona introdução prática a técnicas fundamentais de segurança digital."
    }
  }