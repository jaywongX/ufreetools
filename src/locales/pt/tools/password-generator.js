export default {
  name: 'Gerador de Senhas',
  description: 'Gere senhas seguras e aleatórias com opções personalizáveis',

  options: {
    length: 'Comprimento da senha',
    quantity: 'Quantidade de senhas',
    includeLowercase: 'Letras minúsculas (a-z)',
    includeUppercase: 'Letras maiúsculas (A-Z)',
    includeNumbers: 'Números (0-9)',
    includeSymbols: 'Símbolos (!@#$%)',
    excludeSimilar: 'Excluir caracteres similares (i, l, 1, L, o, 0, O)',
    excludeAmbiguous: 'Excluir símbolos ambíguos ({}<>[]()\'"`\\)',
    requireAll: 'Exigir todos os tipos de caracteres',
    noConsecutive: 'Sem caracteres similares consecutivos',
    advancedOptions: 'Opções avançadas',
    characterTypes: 'Tipos de caracteres'
  },

  presets: {
    standard: 'Padrão',
    strong: 'Forte',
    memorable: 'Memorável',
    pin: 'PIN',
    pronounceable: 'Pronunciável',
    custom: 'Personalizado',
    easyToRemember: 'Fácil de lembrar',
    balanced: 'Balanceado',
    secure: 'Seguro'
  },

  strength: {
    title: 'Força da senha',
    veryWeak: 'Muito fraca',
    weak: 'Fraca', 
    medium: 'Média',
    strong: 'Forte',
    veryStrong: 'Muito forte',
    unknown: 'Desconhecida'
  },

  actions: {
    generate: 'Gerar senhas',
    regenerate: 'Gerar novamente',
    copy: 'Copiar',
    copyAll: 'Copiar todas',
    clear: 'Limpar',
    expand: 'Expandir',
    collapse: 'Recolher'
  },

  messages: {
    copied: 'Copiado para a área de transferência!',
    allCopied: 'Todas as senhas foram copiadas!',
    generated: 'Senhas geradas com sucesso',
    invalidOptions: 'Selecione pelo menos um tipo de caractere',
    tooManyPasswords: 'O número máximo de senhas é 100',
    clickToGenerate: 'Clique no botão acima para gerar senhas'
  },

  errors: {
    copyFailed: 'Falha ao copiar senha: ',
    copyFailedManual: 'Falha ao copiar, copie manualmente'
  },

  results: {
    title: 'Senhas geradas'
  },

  units: {
    passwords: 'senhas'
  },

  tips: {
    title: 'Dicas de segurança para senhas',
    useLength: 'Use senhas longas (pelo menos 12 caracteres) para maior segurança',
    useDifferent: 'Use senhas diferentes para cada site ou serviço',
    changeRegularly: 'Altere senhas importantes regularmente',
    useManager: 'Considere usar um gerenciador de senhas para armazenar senhas complexas',
    use2FA: 'Ative autenticação em dois fatores para proteção extra'
  }
};