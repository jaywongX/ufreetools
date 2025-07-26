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

  listGroups: {
    common: 'Algoritmos comuns',
    sha2: 'Família SHA-2',
    sha3: 'Família SHA-3',
    other: 'Outros algoritmos'
  },

  metaTitle: 'Calculadora de Hash Online - Gere e verifique hashes criptográficos',
  metaDescription: 'Ferramenta gratuita online para gerar e verificar hashes criptográficos de textos ou arquivos. Suporta múltiplos algoritmos incluindo {algorithms}.'
};