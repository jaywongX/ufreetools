export default {
    name: 'Obfuscador JavaScript',
    description: 'Proteja seu código JavaScript com várias técnicas de ofuscação',
    input: {
      title: 'Entrada JavaScript',
      placeholder: 'Digite ou cole seu código JavaScript aqui',
      loadSample: 'Carregar exemplo',
      clearInput: 'Limpar entrada',
      uploadFile: 'Enviar arquivo JS'
    },
    output: {
      title: 'Código ofuscado',
      copied: 'Código copiado para a área de transferência',
      download: 'Baixar código ofuscado',
      copyOutput: 'Copiar código',
      clearOutput: 'Limpar saída'
    },
    options: {
      title: 'Opções de ofuscação',
      compact: 'Compactar código',
      selfDefending: 'Autodefesa',
      controlFlowFlattening: 'Achatamento de fluxo de controle',
      controlFlowFlatteningThreshold: 'Limite de achatamento de fluxo de controle',
      deadCodeInjection: 'Injeção de código morto',
      deadCodeInjectionThreshold: 'Limite de injeção de código morto',
      debugProtection: 'Proteção contra depuração',
      debugProtectionInterval: 'Intervalo de proteção contra depuração',
      disableConsoleOutput: 'Desativar saída do console',
      domainLock: 'Bloqueio de domínio',
      domainLockRedirectUrl: 'URL de redirecionamento para bloqueio de domínio',
      identifierNamesGenerator: 'Gerador de nomes de identificadores',
      identifiersPrefix: 'Prefixo de identificadores',
      renameGlobals: 'Renomear variáveis globais',
      reservedNames: 'Nomes reservados',
      reservedStrings: 'Strings reservadas',
      rotateStringArray: 'Rotacionar array de strings',
      seed: 'Semente',
      shuffleStringArray: 'Embaralhar array de strings',
      sourceMap: 'Mapa de origem',
      sourceMapBaseUrl: 'URL base do mapa de origem',
      sourceMapFileName: 'Nome do arquivo do mapa de origem',
      splitStrings: 'Dividir strings',
      splitStringsChunkLength: 'Comprimento do bloco de strings divididas',
      stringArray: 'Array de strings',
      stringArrayEncoding: 'Codificação do array de strings',
      stringArrayThreshold: 'Limite do array de strings',
      target: 'Alvo',
      transformObjectKeys: 'Transformar chaves de objeto',
      unicodeEscapeSequence: 'Sequência de escape Unicode'
    },
    presets: {
      title: 'Predefinições',
      low: 'Obfuscação baixa',
      medium: 'Obfuscação média',
      high: 'Obfuscação alta',
      custom: 'Personalizado'
    },
    actions: {
      obfuscate: 'Ofuscar',
      reset: 'Redefinir opções',
      savePreset: 'Salvar predefinição',
      loadPreset: 'Carregar predefinição'
    },
    messages: {
      obfuscationSuccess: 'Código ofuscado com sucesso',
      obfuscationFailed: 'Falha na ofuscação: {error}',
      emptyCode: 'Por favor, insira o código JavaScript para ofuscar',
      uploadSuccess: 'Arquivo enviado com sucesso',
      presetSaved: 'Predefinição salva',
      presetLoaded: 'Predefinição carregada'
    },
    help: {
      title: 'Ajuda sobre opções',
      stringArrayDesc: 'Move literais de string para um array especial e substitui referências por chamadas de array',
      controlFlowDesc: 'Ativa o achatamento do fluxo de controle para tornar a lógica mais difícil de entender',
      deadCodeDesc: 'Injeta código morto aleatório para confundir atacantes',
      selfDefendingDesc: 'Torna a saída resistente a modificações de formatação'
    }
  }