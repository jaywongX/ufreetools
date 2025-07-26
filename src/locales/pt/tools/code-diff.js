export default {
  name: 'Comparador de Diferenças de Código',
  description: 'Compara dois trechos de código e destaca as diferenças',

  options: {
    title: 'Opções',
    ignoreCase: 'Ignorar maiúsculas/minúsculas',
    ignoreWhitespace: 'Ignorar espaços em branco',
    trimWhitespace: 'Remover espaços em branco',
    diffMode: 'Modo de diferença',
    diffModes: {
      chars: 'Caracteres',
      words: 'Palavras',
      lines: 'Linhas',
      sentences: 'Sentenças',
      json: 'JSON'
    },
    diffStyle: 'Estilo de exibição',
    diffStyles: {
      split: 'Visualização dividida',
      inline: 'Visualização em linha'
    },
    context: 'Linhas de contexto',
    wrap: 'Quebra de linha automática',
    languages: {
      plaintext: 'Texto simples',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      json: 'JSON'
    }
  },

  inputs: {
    original: 'Código original',
    modified: 'Código modificado',
    placeholderOriginal: 'Insira o código original aqui...',
    placeholderModified: 'Insira o código modificado aqui...'
  },

  actions: {
    compare: 'Comparar',
    clear: 'Limpar',
    swap: 'Trocar',
    copy: 'Copiar diferenças',
    download: 'Baixar diferenças',
    upload: 'Carregar arquivo'
  },

  results: {
    title: 'Resultados da diferença',
    changes: 'Alterações',
    additions: 'Adições',
    deletions: 'Exclusões',
    unchanged: 'Inalterado',
    noChanges: 'Nenhuma diferença encontrada - os textos são idênticos',
    loading: 'Gerando diferenças...'
  },

  upload: {
    originalFile: 'Arquivo original',
    modifiedFile: 'Arquivo modificado',
    dropOriginal: 'Arraste o arquivo original aqui ou clique para procurar',
    dropModified: 'Arraste o arquivo modificado aqui ou clique para procurar'
  },

  messages: {
    copied: 'Copiado para a área de transferência!',
    inputRequired: 'Por favor, insira texto em ambos os campos',
    diffGenerated: 'Diferenças geradas com sucesso',
    error: 'Erro ao gerar diferenças',
    fileError: 'Erro ao ler o arquivo'
  },

  tips: {
    title: 'Dicas de uso',
    compareOptions: 'Ajuste as opções de comparação conforme necessário - ignorar espaços é útil para comparação de código.',
    diffModes: 'Diferentes modos de diferença oferecem níveis variados de detalhes na comparação.',
    largeFiles: 'Para arquivos grandes, a comparação por linhas é mais eficiente.',
    jsonMode: 'Use o modo JSON para comparar dados estruturados - ele normaliza e compara a estrutura de objetos.'
  }
};