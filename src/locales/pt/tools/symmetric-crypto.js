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
  }
};