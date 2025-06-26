export default {
    name: 'Calculadora de Hash Online | Suporta SHA-256, MD5, SHA-3, BLAKE3, SM3 e outros algoritmos',
    description: 'Calculadora de hash online gratuita que suporta vários algoritmos de criptografia e verificação como SHA-256, MD5, SHA-3, BLAKE3, SM3. Ideal para verificação de integridade de arquivos e processamento seguro de dados.',
    input: {
      title: 'Entrada',
      text: 'Texto',
      file: 'Arquivo',
      textPlaceholder: 'Digite o texto para calcular o hash...',
      fileSelect: 'Selecionar arquivo',
      fileDrop: 'Arraste e solte um arquivo aqui ou clique para enviar',
      fileSelected: 'Arquivo selecionado: {name}',
      fileSize: '{size}',
      removeFile: 'Remover arquivo',
      localProcessing: 'O arquivo será processado localmente, não será enviado ao servidor',
      encoding: 'Codificação',
      selectAlgorithm: 'Selecione o algoritmo de hash',
      utf8: 'UTF-8',
      ascii: 'ASCII',
      latin1: 'Latin1',
      calculate: 'Calcular Hash',
      calculating: 'Calculando...',
      clear: 'Limpar entrada',
      hashValue: 'Valor do Hash'
    },
    algorithms: {
      title: 'Algoritmos',
      selectAll: 'Selecionar todos',
      deselectAll: 'Desselecionar todos',
      md5: 'MD5',
      sha1: 'SHA-1',
      sha224: 'SHA-224',
      sha256: 'SHA-256',
      sha384: 'SHA-384',
      sha512: 'SHA-512',
      sha3_224: 'SHA3-224',
      sha3_256: 'SHA3-256',
      sha3_384: 'SHA3-384',
      sha3_512: 'SHA3-512',
      ripemd160: 'RIPEMD-160',
      blake2b: 'BLAKE2b',
      blake2s: 'BLAKE2s',
      blake3: 'BLAKE3',
      keccak224: 'Keccak-224',
      keccak256: 'Keccak-256',
      keccak384: 'Keccak-384',
      keccak512: 'Keccak-512',
      whirlpool: 'Whirlpool',
      crc32: 'CRC32',
      hmac: 'Opções HMAC',
      key: 'Chave HMAC',
      keyPlaceholder: 'Digite a chave HMAC'
    },
    results: {
      title: 'Resultados',
      algorithm: 'Algoritmo',
      digest: 'Resumo',
      noInput: 'Digite um texto ou selecione um arquivo para calcular o hash',
      calculating: 'Calculando...',
      copy: 'Copiar',
      copied: 'Copiado para a área de transferência',
      copyFailed: 'Falha ao copiar, copie manualmente',
      copyAll: 'Copiar todos',
      download: 'Baixar resultados',
      fileInfo: 'Informações do arquivo',
      fileName: 'Nome',
      fileSize: 'Tamanho',
      fileType: 'Tipo',
      lastModified: 'Última modificação',
      hexFormat: 'Formato hexadecimal',
      base64Format: 'Formato Base64',
      upperHexFormat: 'Hexadecimal maiúsculo',
      hashValue: 'Valor do Hash',
      allHashesTitle: 'Resultados de todos os algoritmos',
      export: 'Exportar CSV',
      copyToClipboard: 'Copiar para área de transferência',
      allHashesTitle: 'Valores de hash para todos os algoritmos',
    },
    verification: {
      title: 'Verificação de Hash',
      inputVerifyHash: 'Digite o hash para verificar',
      placeholder: 'Digite o hash para comparação...',
      paste: 'Colar hash para verificação',
      matches: 'Hash corresponde!',
      doesNotMatch: 'Hash não corresponde',
      notFound: 'Algoritmo não encontrado',
      verify: 'Verificar',
      autoDetect: 'Detectar algoritmo automaticamente',
      result: 'Resultado da verificação'
    },
    options: {
      title: 'Opções',
      uppercase: 'Saída em maiúsculas',
      showTiming: 'Mostrar tempo de cálculo',
      autoCalculate: 'Calcular automaticamente',
      formatOutput: 'Formatar saída longa',
      binaryOutput: 'Visualização binária (para arquivos não-texto)',
      compareHashes: 'Comparar hashes',
      hmacMode: 'Ativar modo HMAC',
      showAllHashes: 'Mostrar hashes de todos os algoritmos'
    },
    tools: {
      title: 'Ferramentas',
      batchProcessing: 'Processamento em lote',
      fileHashTool: 'Diretório de hash de arquivos',
      hashIdentifier: 'Identificador de tipo de hash',
      hmacGenerator: 'Gerador HMAC',
      checksumVerifier: 'Verificador de checksum',
      passwordHasher: 'Gerador de hash de senhas'
    },
    batchTool: {
      title: 'Processamento em lote',
      addFiles: 'Adicionar arquivos',
      processFiles: 'Processar arquivos',
      clearAll: 'Limpar tudo',
      fileName: 'Nome do arquivo',
      algorithm: 'Algoritmo',
      status: 'Status',
      actions: 'Ações',
      waiting: 'Aguardando',
      processing: 'Processando',
      complete: 'Concluído',
      failed: 'Falhou',
      remove: 'Remover',
      filesSelected: '{count} arquivo(s) selecionado(s)',
      exportResults: 'Exportar resultados',
      selectAlgorithm: 'Selecionar algoritmo para todos os arquivos'
    },
    messages: {
      fileTooBig: 'Arquivo muito grande. Tamanho máximo permitido: 100MB.',
      hashCalculated: 'Hash calculado com sucesso',
      invalidInput: 'Entrada inválida',
      readError: 'Não foi possível ler o arquivo',
      processingError: 'Erro ao processar arquivo: {error}',
      algorithmNotAvailable: 'Algoritmo não disponível. Instale a biblioteca necessária.',
      algorithmFallback: '{algorithm} não disponível, usando {fallback} como alternativa',
      moduleNotReady: 'Módulo {name} não está pronto',
      algorithmError: 'Erro {algorithm}: {error}'
    },
    security: {
      warning: 'Usar ferramentas de hash em conexões HTTP inseguras representa risco de segurança'
    },
    algorithmDetails: {
      title: 'Sobre algoritmos de hash',
      usage: 'Usos comuns',
      safe: 'Segurança',
      md2: {
        name: 'MD2 (128 bits)',
        description: 'MD2 é uma função hash amplamente usada que produz um valor hash de 128 bits (16 bytes), normalmente representado como 32 caracteres hexadecimais.',
        usage: 'Verificação de integridade de arquivos, armazenamento de senhas (inseguro)',
        security: 'Comprovadamente vulnerável a colisões; não deve ser usado em situações sensíveis à segurança.'
      },
      md4: {
        name: 'MD4 (128 bits)',
        description: 'MD4 é uma função hash amplamente usada que produz um valor hash de 128 bits (16 bytes), normalmente representado como 32 caracteres hexadecimais.',
        usage: 'Verificação de integridade de arquivos, armazenamento de senhas (inseguro)',
        security: 'Comprovadamente vulnerável a colisões; não deve ser usado em situações sensíveis à segurança.'
      },
      md5: {
        name: 'MD5 (128 bits)',
        description: 'MD5 é uma função hash amplamente usada que produz um valor hash de 128 bits (16 bytes), normalmente representado como 32 caracteres hexadecimais.',
        usage: 'Verificação de integridade de arquivos, armazenamento de senhas (inseguro)',
        security: 'Comprovadamente vulnerável a colisões; não deve ser usado em situações sensíveis à segurança.'
      },
      sha1: {
        name: 'SHA-1 (160 bits)',
        description: 'SHA-1 é uma função hash criptográfica que produz um valor hash de 160 bits (20 bytes), normalmente representado como 40 caracteres hexadecimais.',
        usage: 'Sistemas de controle de versão (como Git), verificação de integridade de arquivos',
        security: 'Vulnerável a ataques de colisão; não recomendado para aplicações críticas de segurança.'
      },
      sha224: {
        name: 'SHA-224 (224 bits)',
        description: 'SHA-224 faz parte da família SHA-2 e gera um hash de 224 bits (28 bytes).',
        usage: 'Aplicações com restrição de espaço que ainda requerem boa segurança',
        security: 'Oferece boa segurança, sendo uma versão truncada do SHA-256'
      },
      sha256: {
        name: 'SHA-256 (256 bits)',
        description: 'SHA-256 pertence à família SHA-2 e produz um valor hash de 256 bits (32 bytes), normalmente representado como 64 caracteres hexadecimais.',
        usage: 'Assinaturas digitais, certificados digitais, armazenamento de senhas, blockchain',
        security: 'Atualmente considerado seguro, amplamente usado em aplicações de alta segurança.'
      },
      dsha256: {
        name: 'Double SHA-256',
        description: 'Double SHA-256 é uma função hash criptográfica que executa SHA-256 duas vezes consecutivas, ou seja, SHA-256(SHA-256(x)).',
        usage: 'Usado em Bitcoin e outras criptomoedas para hashes de blocos, IDs de transação e geração de endereços',
        security: 'Oferece as mesmas garantias de segurança que o SHA-256 padrão, mas com uma camada adicional de segurança, tornando mais difícil reverter o cálculo original através de colisões.'
      },
      sha384: {
        name: 'SHA-384 (384 bits)',
        description: 'SHA-384 é uma versão truncada do SHA-512 que produz um valor hash de 384 bits (48 bytes).',
        usage: 'Aplicações que requerem segurança maior que SHA-256',
        security: 'Oferece segurança superior ao SHA-256, sem métodos de ataque conhecidos.'
      },
      sha512: {
        name: 'SHA-512 (512 bits)',
        description: 'SHA-512 é o algoritmo mais longo da família SHA-2, produzindo um valor hash de 512 bits (64 bytes).',
        usage: 'Aplicações que requerem o mais alto nível de segurança',
        security: 'Oferece o mais alto nível de segurança, sem ataques efetivos conhecidos.'
      },
      sha512_224: {
        name: 'SHA-512/224 (224 bits)',
        description: 'SHA-512/224 é uma variante do SHA-512 com saída truncada para 224 bits.',
        usage: 'Fornece hash com mesmo comprimento do SHA-224 mas baseado na estrutura interna do SHA-512',
        security: 'Melhor desempenho para dados longos, mantendo alta segurança'
      },
      sha512_256: {
        name: 'SHA-512/256 (256 bits)',
        description: 'SHA-512/256 é uma variante do SHA-512 com saída truncada para 256 bits.',
        usage: 'Oferece melhor desempenho que SHA-256 em sistemas de 64 bits',
        security: 'Segurança equivalente ao SHA-256, mas mais eficiente em certos hardwares'
      },
      sha3_224: {
        name: 'SHA3-224 (224 bits)',
        description: 'SHA3-224 faz parte do padrão SHA-3 e fornece saída de 224 bits.',
        usage: 'Aplicações que requerem segurança moderada resistente a computação quântica',
        security: 'Algoritmo de hash seguro certificado pelo NIST, oferece boas garantias de segurança'
      },
      sha3_256: {
        name: 'SHA3-256 (256 bits)',
        description: 'SHA3-256 faz parte do padrão SHA-3, com estrutura interna completamente diferente da família SHA-2.',
        usage: 'Aplicações de segurança de longo prazo resistentes a ameaças de computação quântica',
        security: 'Projetado para resistir a possíveis ataques futuros, incluindo ataques de computação quântica.'
      },
      sha3_384: {
        name: 'SHA3-384 (384 bits)',
        description: 'SHA3-384 faz parte do padrão SHA-3 e fornece saída de 384 bits.',
        usage: 'Aplicações que requerem alta segurança e resistência a computação quântica',
        security: 'Oferece segurança superior ao SHA3-256, ideal para aplicações com dados sensíveis'
      },
      sha3_512: {
        name: 'SHA3-512 (512 bits)',
        description: 'SHA3-512 é o algoritmo mais seguro da família SHA-3.',
        usage: 'Aplicações que requerem o mais alto nível de segurança e resistência a computação quântica',
        security: 'Oferece o mais alto nível de garantia de segurança, sendo o algoritmo mais seguro da família SHA-3.'
      },
      sm3: {
        name: 'SM3 (256 bits)',
        description: 'SM3 é um padrão de algoritmo hash criptográfico publicado pela Administração Nacional de Criptografia da China, produzindo saída de 256 bits.',
        usage: 'Aplicações comerciais de criptografia na China, certificados digitais e sistemas de governo eletrônico',
        security: 'Projetado similar ao SHA-2 mas com otimizações para resistência a ataques, amplamente usado na China'
      },
      ripemd160: {
        name: 'RIPEMD-160 (160 bits)',
        description: 'RIPEMD-160 é uma função hash desenvolvida pelo projeto europeu RIPE, produzindo um valor hash de 160 bits.',
        usage: 'Geração de endereços Bitcoin, aplicações blockchain',
        security: 'Mais seguro que SHA-1 de mesmo comprimento, mas menos usado.'
      },
      crc32: {
        name: 'CRC32 (32 bits)',
        description: 'CRC32 é uma função de verificação de redundância cíclica, comumente usada para detecção de erros.',
        usage: 'Verificação de integridade de dados, comunicação em rede, verificação de transferência de dados',
        security: 'Não adequado para cenários de segurança criptográfica, usado principalmente para detecção de erros'
      },
      murmur3_x86_32: {
        name: 'MurmurHash3 x86 (32 bits)',
        description: 'MurmurHash3 é uma função hash não criptográfica conhecida por alta performance e baixa taxa de colisão, versão de 32 bits é ideal para aplicações que requerem velocidade e eficiência de espaço.',
        usage: 'Tabelas hash, filtros Bloom, sistemas de cache, particionamento de dados',
        security: 'Não é um algoritmo criptográfico, não adequado para aplicações de segurança, mas excelente para cenários críticos de performance'
      },
      murmur3_x86_128: {
        name: 'MurmurHash3 x86 (128 bits)',
        description: 'Variante de 128 bits do MurmurHash3, oferece maior espaço de hash e menor probabilidade de colisão, adequado para grandes conjuntos de dados.',
        usage: 'Tabelas hash grandes, deduplicação de dados, hash consistente em sistemas distribuídos, armazenamento endereçável por conteúdo',
        security: 'Assim como a versão de 32 bits, não é criptográfico, mas com menor probabilidade de colisão, ideal para aplicações que requerem alta unicidade'
      },
      murmur3_x64_128: {
        name: 'MurmurHash3 x64 (128 bits)',
        description: 'Variante de 128 bits do MurmurHash3, oferece maior espaço de hash e menor probabilidade de colisão, adequado para grandes conjuntos de dados.',
        usage: 'Tabelas hash grandes, deduplicação de dados, hash consistente em sistemas distribuídos, armazenamento endereçável por conteúdo',
        security: 'Assim como a versão de 32 bits, não é criptográfico, mas com menor probabilidade de colisão, ideal para aplicações que requerem alta unicidade'
      },
      blake2b: {
        name: 'BLAKE2b (512 bits)',
        description: 'BLAKE2b é uma função hash rápida e segura, otimizada para arquiteturas modernas de CPU.',
        usage: 'Processamento de dados em larga escala, tabelas hash, comparação de strings',
        security: 'Projetado para velocidade e boa distribuição de hash, mas não garante segurança criptográfica'
      },
      blake2s: {
        name: 'BLAKE2s (256 bits)',
        description: 'BLAKE2s é uma função hash rápida e segura, otimizada para arquiteturas modernas de CPU.',
        usage: 'Processamento de dados em larga escala, tabelas hash, comparação de strings',
        security: 'Projetado para velocidade e boa distribuição de hash, mas não garante segurança criptográfica'
      },
      blake3: {
        name: 'BLAKE3 (256 bits)',
        description: 'BLAKE3 é uma função hash rápida e segura, otimizada para arquiteturas modernas de CPU.',
        usage: 'Processamento de dados em larga escala, tabelas hash, comparação de strings',
        security: 'Projetado para velocidade e boa distribuição de hash, mas não garante segurança criptográfica'
      },
      keccak224: {
        name: 'Keccak-224 (224 bits)',
        description: 'Keccak-224 é o algoritmo original SHA-3, produzindo um valor hash de 224 bits.',
        usage: 'Aplicações blockchain como Ethereum, sistemas criptográficos',
        security: 'Oferece forte segurança, sendo mais comumente usado em tecnologias blockchain que as variantes SHA-3 padronizadas'
      },
      keccak256: {
        name: 'Keccak-256 (256 bits)',
        description: 'Keccak-256 é a variante mais amplamente usada da família Keccak, produzindo um valor hash de 256 bits.',
        usage: 'Contratos inteligentes Ethereum, transações blockchain, assinaturas digitais',
        security: 'Amplamente confiável em aplicações blockchain, diferindo ligeiramente do SHA3-256 padronizado'
      },
      keccak384: {
        name: 'Keccak-384 (384 bits)',
        description: 'Keccak-384 é uma variante da família Keccak que produz um valor hash de 384 bits.',
        usage: 'Aplicações que requerem segurança maior que Keccak-256',
        security: 'Oferece garantias de segurança muito fortes, mas menos usado que Keccak-256'
      },
      keccak512: {
        name: 'Keccak-512 (512 bits)',
        description: 'Keccak-512 é o algoritmo mais longo da família Keccak, produzindo um valor hash de 512 bits.',
        usage: 'Aplicações de alta segurança que requerem máxima resistência a colisões',
        security: 'Oferece o mais alto nível de segurança na família Keccak, adequado para dados mais sensíveis'
      },
      shake128: {
        name: 'SHAKE128 (128 bits)',
        description: 'SHAKE128 faz parte da família SHA-3 e pode produzir saída de comprimento variável, gerando por padrão hash de 256 bits.',
        usage: 'Aplicações criptográficas que requerem saída de comprimento variável, funções de derivação de chave',
        security: 'Oferece boa segurança, sendo um algoritmo hash seguro certificado pelo NIST'
      },
      shake256: {
        name: 'SHAKE256 (256 bits)',
        description: 'SHAKE256 faz parte da família SHA-3 e pode produzir saída de comprimento variável, gerando por padrão hash de 512 bits.',
        usage: 'Aplicações de alta segurança que requerem hashes longos',
        security: 'Oferece garantias de segurança mais fortes que SHAKE128, adequado para dados sensíveis'
      },
      cshake128: {
        name: 'cSHAKE128 (saída de comprimento variável personalizável)',
        description: 'cSHAKE128 é uma versão personalizável do SHAKE128 que suporta strings e nomes de função personalizados, podendo produzir saída de comprimento variável.',
        usage: 'Cenários que requerem algoritmos hash com parâmetros personalizados, funções de derivação de chave padrão NIST, protocolos criptográficos',
        security: 'Oferece segurança equivalente ao SHAKE128, permitindo personalização em nível de aplicação'
      },
      cshake256: {
        name: 'cSHAKE256 (saída de comprimento variável personalizável)',
        description: 'cSHAKE256 é uma versão personalizável do SHAKE256 que suporta strings e nomes de função personalizados, podendo produzir saída de comprimento variável.',
        usage: 'Cenários de hash personalizado com altos requisitos de segurança, funções de derivação certificadas pelo NIST, protocolos criptográficos',
        security: 'Oferece as mesmas fortes garantias de segurança do SHAKE256, permitindo personalização em nível de aplicação'
      },
    },
    article: {
      title: "Calculadora de Hash: Gere e verifique resumos criptográficos",
      intro: "Nossa <strong>calculadora de hash online</strong> oferece uma maneira fácil de gerar hashes criptográficos para qualquer texto ou arquivo. Esta ferramenta gratuita suporta múltiplos algoritmos incluindo MD5, SHA-1, SHA-256, SHA-512, RIPEMD, BLAKE e outros.",
      features: {
        title: "Entenda funções hash e suas aplicações",
        description: "<strong>Funções hash</strong> são algoritmos matemáticos que transformam dados de qualquer tamanho em uma string de tamanho fixo. A <strong>calculadora de hash</strong> do UFreeTools ajuda você a calcular essas impressões digitais digitais instantaneamente, para verificação de segurança, checagem de integridade de dados ou aplicações blockchain.<br><br>Diferente de criptografia, funções hash são operações unidirecionais - elas convertem dados em um <strong>resumo hash</strong> único que não pode ser revertido para recuperar a entrada original. Uma característica chave de hashes criptográficos é que mesmo pequenas mudanças na entrada produzem saídas completamente diferentes, tornando esses <strong>algoritmos hash</strong> ideais para verificar integridade de dados e detectar modificações não autorizadas.",
        useCases: {
          title: "Aplicações práticas de funções hash",
          items: [
            "<strong>Verificação de integridade de arquivos</strong>: Antes de instalar software baixado, você pode usar nossa <strong>calculadora de checksum</strong> para verificar se o arquivo não foi adulterado, comparando seu hash com o valor fornecido pelo desenvolvedor. Isso garante que você está instalando exatamente o que foi pretendido, prevenindo injeção de malware.",
            "<strong>Deduplicação de dados</strong>: Sistemas de armazenamento usam <strong>valores hash</strong> para identificar arquivos duplicados comparando suas impressões digitais, independentemente do nome do arquivo. Nossa ferramenta ajuda você a calcular rapidamente esses identificadores para suas próprias necessidades de deduplicação.",
            "<strong>Segurança de senhas</strong>: Sistemas modernos de autenticação armazenam <strong>hashes de senha</strong> em vez das senhas reais. Embora nossa ferramenta ajude a entender esse processo, lembre-se que em ambientes de produção devem ser usadas funções especializadas de hash com salt.",
            "<strong>Computação forense</strong>: Investigadores usam <strong>calculadoras de hash</strong> para criar impressões digitais de arquivos, estabelecendo autenticidade de evidências. Valores hash provam que evidências digitais não foram modificadas durante a investigação.",
            "<strong>Aplicações blockchain</strong>: <strong>Hashes criptográficos</strong> formam a base da tecnologia blockchain, com algoritmos como SHA-256 e Keccak-256 (usados respectivamente em Bitcoin e Ethereum) protegendo registros de transações em cadeias à prova de adulteração. Você pode experimentar esses mesmos algoritmos com nossa ferramenta.",
            "<strong>Verificação de conteúdo</strong>: Autores e criadores de conteúdo podem publicar <strong>resumos hash</strong> de seus trabalhos originais, fornecendo uma maneira para outros verificarem que possuem a versão autêntica, não modificada."
          ]
        },
        toolAdvantages: {
          title: "Vantagens da nossa calculadora de hash",
          items: [
            "Suporte a mais de 30 algoritmos de hash, desde MD5 até opções avançadas como BLAKE3",
            "Processamento local garante que seus dados sensíveis nunca deixem seu dispositivo",
            "Verifique hashes contra valores esperados para confirmar integridade de dados",
            "Visualize resultados em múltiplos formatos (hexadecimal e Base64)",
            "Calcule hashes para entradas de texto e arquivos de até 100MB",
            "Compare resultados de múltiplos algoritmos simultaneamente"
          ]
        }
      },
      faq: {
        title: "Perguntas frequentes sobre funções hash",
        items: [
          {
            question: "Qual a diferença entre MD5, SHA-1 e SHA-256?",
            answer: "Estes são diferentes algoritmos de hash criptográficos, variando em segurança e tamanho de saída. <strong>MD5</strong> gera um hash de 128 bits (16 bytes), mas por ter colisões conhecidas, é considerado quebrado para fins criptográficos. <strong>SHA-1</strong> produz um hash de 160 bits (20 bytes) e, embora mais forte que MD5, também não é mais recomendado para aplicações críticas devido a ataques teóricos"
        },
        {
          question: "Quão seguras são as funções de hash criptográficas?",
          answer: "A segurança das funções hash depende de três características principais: resistência a colisões (dificuldade em encontrar duas entradas com o mesmo hash), resistência à pré-imagem (impossibilidade de determinar a entrada a partir do hash) e resistência à segunda pré-imagem (dificuldade em encontrar outra entrada com o mesmo hash de uma dada entrada). Algoritmos modernos como <strong>SHA-256</strong>, <strong>SHA-512</strong> e <strong>SHA3</strong> são considerados criptograficamente seguros, enquanto algoritmos mais antigos como MD5 e SHA-1 possuem vulnerabilidades conhecidas. Padrões de segurança evoluem com o aumento do poder computacional e novas técnicas de ataque. Para aplicações que exigem alta segurança, sempre use as funções hash mais recentes recomendadas (atualmente SHA-256 ou superior) e acompanhe os avanços em criptografia através de recursos como o <a href='https://www.schneier.com/blog/archives/2005/02/cryptanalysis_o.html' target='_blank' rel='noopener noreferrer'>blog de criptografia de Bruce Schneier</a>."
        },
        {
          question: "Posso usar a calculadora de hash para verificar a integridade de arquivos?",
          answer: "Sim, nossa <strong>calculadora de hash online</strong> é perfeita para verificação de integridade de arquivos. Ao baixar software, muitos fornecedores publicam os valores hash de seus arquivos. Para verificar a integridade: 1) Selecione o arquivo baixado em nossa ferramenta, 2) Escolha o mesmo algoritmo de hash usado pelo fornecedor (geralmente SHA-256), 3) Calcule o hash, 4) Compare com o valor publicado. Se forem idênticos, seu arquivo está intacto e não foi modificado. Este processo de verificação protege tanto contra corrupção acidental durante o download quanto contra possíveis adulterações maliciosas. A ferramenta processa arquivos localmente no navegador, mantendo sua privacidade e segurança, mesmo para arquivos grandes. Você pode verificar hashes de fontes como <a href='https://ubuntu.com/download/desktop/thank-you' target='_blank' rel='noopener noreferrer'>Ubuntu</a> ou <a href='https://www.python.org/downloads/' target='_blank' rel='noopener noreferrer'>Python</a>, que fornecem hashes de seus arquivos de instalação."
        },
        {
          question: "Esta calculadora de hash é adequada para hashing de senhas?",
          answer: "Embora nosso <strong>gerador de hash</strong> possa demonstrar como funciona o hashing de senhas, para implementações reais de armazenamento de senhas devem ser usadas funções especializadas como bcrypt, Argon2 ou PBKDF2, não funções hash simples. Esses algoritmos especializados incluem recursos de segurança críticos como salt (adição de dados aleatórios a cada senha antes do hashing) e key stretching (processo intencionalmente lento), que protegem contra ataques como rainbow tables e força bruta. Nossa ferramenta é excelente para fins educacionais ou testes de comportamento geral de hashing, mas sistemas de produção devem implementar bibliotecas especializadas com salts adequados, stretching e melhores práticas de segurança. Para mais informações sobre armazenamento seguro de senhas, consulte a <a href='https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html' target='_blank' rel='noopener noreferrer'>folha de dicas de armazenamento de senhas da OWASP</a>."
        },
        {
          question: "Como comparar ou verificar hashes em formatos diferentes?",
          answer: "Nosso <strong>verificador de hash</strong> facilita a comparação de hashes, independentemente de diferenças de formato. A ferramenta exibe resultados em múltiplos formatos, incluindo hexadecimal em minúsculas (o formato mais comum), hexadecimal em maiúsculas e codificação Base64. Para verificar um hash: 1) Calcule o hash dos seus dados, 2) Insira o hash de referência na seção de verificação, 3) A ferramenta comparará automaticamente os valores, lidando apropriadamente com diferenças de capitalização. Mesmo que seu hash de referência esteja em formato diferente (maiúsculas vs minúsculas), a verificação funcionará. Para comparação entre algoritmos diferentes, você precisará recalcular o hash usando o mesmo algoritmo do hash de referência, pois algoritmos diferentes produzem saídas completamente distintas mesmo para a mesma entrada."
        },
        {
          question: "Qual algoritmo de hash devo usar para uma necessidade específica?",
          answer: "O melhor algoritmo depende de seus requisitos específicos:<br><strong>Uso geral e alta segurança</strong>: SHA-256 oferece um bom equilíbrio entre segurança e desempenho.<br><strong>Aplicações blockchain</strong>: SHA-256 (Bitcoin) ou Keccak-256 (Ethereum) são padrões do setor.<br><strong>Dados extremamente sensíveis</strong>: SHA-512 ou SHA3-512 oferecem o mais alto nível de segurança.<br><strong>Aplicações críticas de desempenho</strong>: BLAKE2 ou BLAKE3 oferecem segurança com velocidade excepcional.<br><strong>Compatibilidade com sistemas legados</strong>: Pode ser necessário usar SHA-1 ou MD5, mas esteja ciente de suas limitações de segurança.<br><strong>Verificação de arquivos</strong>: CRC32 é rápido mas apenas para detecção de erros; para checksums seguros recomenda-se SHA-256.<br>Em caso de dúvida, SHA-256 é uma escolha segura para a maioria das aplicações modernas que exigem segurança. Experimente nossa <a href='https://www.ufreetools.com/tools/hash-calculator' target='_blank'>calculadora de hash</a> para testar diferentes algoritmos e comparar seus resultados."
        }
      ]
    },
    guide: {
      title: "Guia passo a passo para usar a calculadora de hash",
      intro: "Siga estas etapas simples para gerar e verificar hashes de texto ou arquivos:",
      step1: "<strong>Selecione o tipo de entrada</strong>: Escolha entre as opções \"Texto\" ou \"Arquivo\" dependendo do conteúdo que deseja processar. A entrada de texto é adequada para strings, senhas ou pequenos dados, enquanto a entrada de arquivo permite processar arquivos inteiros de qualquer tipo.",
      step2: "<strong>Selecione o algoritmo de hash</strong>: Escolha um <strong>algoritmo de hash</strong> apropriado no menu suspenso. Para uso geral e alta segurança, SHA-256 é recomendado. Para compatibilidade com sistemas específicos, pode ser necessário selecionar MD5, SHA-1 ou outros algoritmos.",
      step3: "<strong>Insira seus dados</strong>: Para entrada de texto, digite ou cole seu texto no campo de entrada. Para arquivos, clique na área de upload ou arraste e solte seu arquivo. A <strong>função hash</strong> processará essa entrada para gerar um resumo único.",
      step4: "<strong>Configure opções de codificação</strong>: Se usando entrada de texto, selecione a codificação de caracteres apropriada (UTF-8 é a mais comum e recomendada para a maioria dos textos). Isso garante que o texto seja interpretado corretamente antes do hashing.",
      step5: "<strong>Gere o hash</strong>: Clique no botão \"Calcular Hash\" para processar sua entrada e gerar o <strong>resumo hash</strong>. A ferramenta calculará o valor hash usando o algoritmo selecionado e exibirá o resultado.",
      step6: "<strong>Visualize e copie os resultados</strong>: O hash calculado será exibido em múltiplos formatos (hexadecimal e Base64). Use os botões de cópia ao lado de cada formato para copiar o valor hash para a área de transferência, para uso em outros aplicativos.",
      step7: "<strong>Verifique o hash (opcional)</strong>: Para comparar com um hash existente, insira o hash de referência na seção de verificação abaixo dos resultados. O sistema comparará automaticamente com seu hash calculado e indicará se há correspondência.",
      additionalTips: "Para arquivos grandes, o processamento pode levar algum tempo, dependendo do desempenho do seu dispositivo. Lembre-se que todo o processamento ocorre localmente no seu navegador, portanto seus dados nunca saem do seu computador."
    },
    relatedTools: {
      title: "Ferramentas relacionadas que podem ser úteis",
      tools: [
        {
          name: "Gerador de Senhas",
          description: "Crie senhas fortes e seguras para suas contas",
          url: "https://www.ufreetools.com/tools/password-generator"
        },
        {
          name: "Codificador/Decodificador de Texto",
          description: "Converta texto entre diferentes codificações como Base64, URL e HTML",
          url: "https://www.ufreetools.com/tools/text-encoder-decoder"
        },
        {
          name: "Conversor de Arquivos",
          description: "Converta arquivos entre diferentes formatos",
          url: "https://www.ufreetools.com/tools/file-converter"
        }
      ]
    },
    conclusion: "A calculadora de hash oferece uma maneira poderosa e fácil de usar funções de hash criptográficas para diversas aplicações, desde verificação básica de integridade de arquivos até implementações avançadas de segurança. Ao fornecer múltiplos algoritmos padrão do setor e uma interface amigável, esta ferramenta preenche a lacuna entre conceitos criptográficos complexos e aplicações práticas do dia a dia. Seja você um desenvolvedor implementando recursos de segurança, um profissional de TI verificando integridade de software, ou apenas alguém curioso sobre como funcionam as funções hash, esta calculadora permite acessar recursos criptográficos poderosos diretamente do seu navegador. Em um mundo digital onde integridade e segurança de dados são cada vez mais importantes, entender e utilizar funções hash torna-se uma habilidade essencial tanto no âmbito pessoal quanto profissional."
  },
  listGroups: {
    common: 'Algoritmos comuns',
    sha2: 'Família SHA-2',
    sha3: 'Família SHA-3',
    other: 'Outros algoritmos'
  },
  metaTitle: 'Calculadora de Hash Online - Gere e verifique hashes criptográficos',
  metaDescription: 'Ferramenta gratuita online para gerar e verificar hashes criptográficos de textos ou arquivos. Suporta múltiplos algoritmos incluindo {algorithms}.'
}