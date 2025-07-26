export default {
  name: 'Conversor Markdown para HTML',
  description: 'Converta texto Markdown para HTML com opções personalizáveis',

  input: {
    title: 'Entrada Markdown',
    placeholder: 'Digite ou cole seu texto Markdown aqui...',
    loadSample: 'Carregar exemplo',
    clearInput: 'Limpar',
    uploadFile: 'Enviar arquivo Markdown',
    paste: 'Colar da área de transferência',
    charCount: 'Contagem de caracteres',
    lineCount: 'Contagem de linhas'
  },

  output: {
    title: 'Saída HTML',
    copied: 'HTML copiado para área de transferência',
    download: 'Baixar HTML',
    copyOutput: 'Copiar HTML',
    clearOutput: 'Limpar saída',
    previewTab: 'Pré-visualização',
    htmlTab: 'Código HTML',
    previewMode: 'Modo de visualização',
    sourceMode: 'Código fonte HTML'
  },

  options: {
    title: 'Opções de conversão',
    headerIds: 'IDs automáticos para cabeçalhos',
    gfm: 'Markdown estilo GitHub',
    tables: 'Tabelas',
    breaks: 'Quebras de linha',
    smartLists: 'Listas inteligentes',
    smartypants: 'Pontuação inteligente',
    xhtml: 'XHTML',
    highlight: 'Destaque de sintaxe',
    sanitize: 'Sanitizar HTML',
    footnotes: 'Notas de rodapé',
    taskLists: 'Listas de tarefas',
    emoji: 'Suporte a emoji',
    includeStyle: 'Incluir CSS padrão',
    realtimePreview: 'Pré-visualização em tempo real',
    scrollSync: 'Sincronização de rolagem',
    htmlOptions: 'Opções HTML'
  },

  styles: {
    title: 'Opções de estilo',
    theme: 'Tema',
    codeTheme: 'Tema de código',
    customCSS: 'CSS personalizado',
    fontSize: 'Tamanho da fonte',
    lineHeight: 'Altura da linha',
    enableCustom: 'Ativar estilos personalizados'
  },

  themes: {
    default: 'Padrão',
    github: 'GitHub',
    bootstrap: 'Bootstrap',
    bulma: 'Bulma',
    medium: 'Medium',
    solarized: 'Solarized',
    dark: 'Modo escuro',
    custom: 'Personalizado'
  },

  codeThemes: {
    default: 'Padrão',
    github: 'GitHub',
    vscode: 'VS Code',
    atom: 'Atom',
    dracula: 'Dracula',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },

  actions: {
    convert: 'Converter para HTML',
    clearAll: 'Limpar tudo',
    copyHtml: 'Copiar HTML',
    saveAsHtml: 'Salvar como HTML',
    generateToc: 'Gerar sumário'
  },

  messages: {
    conversionSuccess: 'Conversão de Markdown concluída',
    conversionFailed: 'Falha na conversão: {error}',
    emptyInput: 'Insira Markdown para converter',
    copied: 'HTML copiado para área de transferência',
    tocGenerated: 'Sumário gerado'
  },

  alerts: {
    copied: 'Copiado para área de transferência',
    copyFailed: 'Falha ao copiar',
    pasteFailed: 'Falha ao colar',
    confirmClear: 'Confirmar limpeza do conteúdo?'
  },

  status: {
    lastConversion: 'Última conversão'
  },

  samples: {
    basic: 'Exemplo básico',
    extended: 'Exemplo estendido',
    article: 'Exemplo de artigo'
  },

  download: {
    title: 'Exportar Markdown para HTML'
  }
};