export default {
  name: 'Calculadora HMAC',
  description: 'Calcula HMAC (Hash-based Message Authentication Code) para dados',
  title: 'Ferramenta de Cálculo de Código de Autenticação de Mensagem HMAC',
  intro: 'Gera códigos de autenticação de mensagem usando chaves secretas, com suporte a múltiplos algoritmos de hash e formatos de saída',

  input: {
    title: 'Entrada',
    message: 'Mensagem',
    messagePlaceholder: 'Digite a mensagem a ser autenticada',
    key: 'Chave',
    keyLabel: 'Chave Secreta',
    keyPlaceholder: 'Insira a chave HMAC',
    messageLabel: 'Mensagem',
    messageLongPlaceholder: 'Digite a mensagem para cálculo do HMAC',
    file: 'Arquivo',
    text: 'Texto',
    fileSelect: 'Selecionar arquivo',
    fileDrop: 'Ou arraste e solte um arquivo aqui',
    fileSelected: 'Arquivo selecionado: {name}',
    clearFile: 'Remover arquivo',
    encoding: 'Codificação da entrada',
    keyEncoding: 'Codificação da chave',
    outputFormat: 'Formato de saída',
    inputType: 'Tipo de entrada',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    base64: 'Base64',
    hex: 'Hexadecimal',
    binary: 'Binário',
    calculate: 'Calcular HMAC',
    calculating: 'Calculando...',
    clear: 'Limpar tudo'
  },

  algorithms: {
    title: 'Algoritmos',
    label: 'Algoritmo de Hash',
    hmacMd5: 'HMAC-MD5',
    hmacSha1: 'HMAC-SHA1',
    hmacSha224: 'HMAC-SHA224',
    hmacSha256: 'HMAC-SHA256',
    hmacSha384: 'HMAC-SHA384',
    hmacSha512: 'HMAC-SHA512',
    hmacRipemd160: 'HMAC-RIPEMD160',
    hmacSm3: 'HMAC-SM3'
  },

  result: {
    title: 'Resultado HMAC',
    digest: 'Resumo HMAC',
    outputLabel: 'Resultado HMAC',
    copy: 'Copiar',
    copied: 'Copiado!',
    noResult: 'Digite uma mensagem e chave para calcular o HMAC',
    calculating: 'Calculando...',
    placeholder: 'O resultado HMAC será exibido aqui',
    useExample: 'Usar exemplo',
    jsExample: 'Exemplo JavaScript:'
  },

  validation: {
    title: 'Validação HMAC',
    hmacToVerify: 'HMAC para verificar',
    verifyPlaceholder: 'Digite o HMAC para verificação',
    verify: 'Verificar HMAC',
    valid: 'HMAC válido',
    invalid: 'HMAC inválido',
    verifying: 'Verificando...'
  },

  options: {
    title: 'Opções',
    uppercase: 'Saída em maiúsculas',
    showDetails: 'Mostrar detalhes técnicos',
    autoUpdate: 'Atualização automática',
    truncate: 'Truncar saída',
    truncateLength: 'Comprimento do truncamento'
  },

  details: {
    title: 'Detalhes Técnicos',
    algorithm: 'Algoritmo',
    keyLength: 'Tamanho da chave',
    blockSize: 'Tamanho do bloco',
    outputLength: 'Tamanho da saída',
    execution: 'Tempo de execução',
    ms: 'milissegundos'
  },

  messages: {
    noMessage: 'Por favor, digite uma mensagem',
    noKey: 'Por favor, digite uma chave',
    invalidEncoding: 'Formato de codificação inválido',
    processingError: 'Erro no processamento: {error}',
    success: 'Cálculo HMAC concluído com sucesso',
    invalidKey: 'Formato de chave inválido para a codificação selecionada',
    fileTooBig: 'Arquivo muito grande. Tamanho máximo: 5MB',
    copied: 'Copiado para a área de transferência',
    copyFailed: 'Falha ao copiar, copie manualmente',
    invalidHex: 'A chave não está em formato hexadecimal válido',
    invalidBase64: 'A chave não está em formato Base64 válido'
  },

  security: {
    title: 'Notas de Segurança',
    keyStorage: 'Nunca compartilhe sua chave secreta',
    keyStrength: 'Use chaves fortes e únicas para cada aplicação',
    recommendation: 'Para aplicações críticas de segurança, use pelo menos HMAC-SHA256',
    warning: 'HMAC-MD5 e HMAC-SHA1 podem não ser adequados para aplicações de alta segurança'
  }
};