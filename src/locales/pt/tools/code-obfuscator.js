export default {
  name: 'Obfuscador de Código',
  description: 'Realiza ofuscação de código JavaScript e CSS para melhorar a segurança e proteger propriedade intelectual',

  languages: {
    title: 'Selecionar Linguagem',
    javascript: 'JavaScript',
    css: 'CSS'
  },

  options: {
    title: 'Opções de Ofuscação',
    javascript: {
      compact: 'Saída compacta (remove espaços)',
      controlFlowFlattening: 'Nivelamento de fluxo de controle',
      deadCodeInjection: 'Injeção de código morto',
      debugProtection: 'Proteção contra depuração',
      selfDefending: 'Autodefesa (previne formatação)',
      stringArray: 'Conversão de strings para array',
      renameGlobals: 'Renomear variáveis globais',
      renameProperties: 'Renomear propriedades',
      mangle: 'Ofuscar nomes de variáveis',
      stringArrayEncoding: 'Codificação de array de strings',
      stringArrayThreshold: 'Limite de array de strings',
      unicodeEscapeSequence: 'Sequência de escape Unicode'
    },
    css: {
      compact: 'Saída compacta',
      renameSelectors: 'Renomear seletores',
      preserveImportant: 'Preservar !important',
      restructure: 'Reestruturar regras',
      keepVendorPrefixes: 'Manter prefixos de navegador',
      removeComments: 'Remover comentários'
    }
  },

  input: {
    title: 'Código de Entrada',
    placeholder: 'Insira o código para ofuscar aqui...',
    clear: 'Limpar',
    paste: 'Colar',
    upload: 'Carregar arquivo',
    inputObfuscatorCode: 'Por favor, insira o código para ofuscar',
  },

  output: {
    title: 'Resultado da Ofuscação',
    placeholder: 'O código ofuscado aparecerá aqui...',
    copy: 'Copiar',
    download: 'Baixar',
    stats: {
      original: 'Tamanho original',
      obfuscated: 'Tamanho ofuscado',
      ratio: 'Taxa de compressão'
    },
    increase: 'Aumento',
    decrease: 'Redução',
  },

  actions: {
    obfuscate: 'Ofuscar',
    clear: 'Limpar'
  },

  messages: {
    copied: 'Copiado para a área de transferência',
    copyFailed: 'Falha ao copiar, por favor copie manualmente',
    processing: 'Processando...',
    error: 'Erro no processo de ofuscação',
    invalidInput: 'Código de entrada inválido',
    uploadError: 'Falha ao carregar arquivo',
    fileTooLarge: 'Arquivo muito grande (máximo 2MB)'
  },

  tips: {
    title: 'Dicas de Uso',
    tip1: 'A ofuscação de código pode dificultar a engenharia reversa, mas não impede completamente a quebra do código',
    tip2: 'Habilitar mais opções de ofuscação aumentará o tamanho do código e o custo de execução',
    tip3: 'Algumas opções de ofuscação podem afetar a capacidade de depuração do código',
    tip4: 'Recomenda-se fazer backup do código original antes da ofuscação',
    tip5: 'Para projetos grandes, recomenda-se usar ferramentas profissionais de ofuscação'
  },

  demo: {
    title: 'Exemplos',
    function: 'Exemplo de função',
    class: 'Exemplo de classe',
    simple: 'Estilo simples',
    animation: 'Efeito de animação',
  }
};