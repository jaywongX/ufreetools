export default {
  name: 'Gerador de Fórmulas LaTeX',
  description: 'Gere e exporte fórmulas matemáticas em LaTeX em tempo real',

  // Textos da interface
  input: 'Insira código LaTeX',

  output: 'Pré-visualização',
  renderButton: 'Renderizar fórmula',
  exportButton: 'Exportar como imagem',
  copyButton: 'Copiar código LaTeX',

  // Configurações
  settings: {
    title: 'Configurações',
    fontSize: 'Tamanho da fonte',
    textColor: 'Cor do texto',
    backgroundColor: 'Cor de fundo',
    displayMode: 'Modo de exibição',
    displayModeInline: 'Modo inline',
    displayModeBlock: 'Modo bloco'
  },

  // Exemplos
  examples: {
    title: 'Exemplos',
    basic: 'Fórmulas básicas',
    fraction: 'Frações',
    superscript: 'Sobrescrito/Subscrito',
    integral: 'Integrais',
    matrix: 'Matrizes',
    more: 'Mais exemplos'
  },

  // Mensagens
  copied: 'Copiado para área de transferência',

  errorTitle: 'Erro de renderização',
  errorMessage: 'Verifique sua sintaxe LaTeX'
};