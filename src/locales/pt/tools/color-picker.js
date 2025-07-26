export default {
  name: 'Seletor de Cores',
  description: 'Use ferramentas avançadas de cor para selecionar, converter e gerar esquemas de cores',

  options: {
    colorSpace: 'Espaço de cor',
    paletteType: 'Tipo de paleta',
    includeAlpha: 'Incluir transparência',
    colorNaming: 'Nomeação de cores'
  },

  colorSpaces: {
    rgb: 'RGB',
    hex: 'HEX',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB',
    named: 'Cores nomeadas'
  },

  palettes: {
    monochromatic: 'Monocromático',
    complementary: 'Complementar',
    analogous: 'Análogo',
    triadic: 'Triádico',
    tetradic: 'Tetradico',
    split: 'Complementar dividido'
  },

  actions: {
    pickColor: 'Selecionar cor',
    randomColor: 'Cor aleatória',
    generatePalette: 'Gerar paleta',
    convert: 'Converter',
    copyColor: 'Copiar cor atual',
    copyAll: 'Copiar tudo',
    save: 'Salvar cor',
    reset: 'Redefinir',
    clear: 'Limpar'
  },

  formats: {
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL'
  },

  colorSchemes: {
    title: 'Esquemas de cores',
    complementary: 'Complementar',
    triadic: 'Triádico',
    analogous: 'Análogo',
    monochromatic: 'Monocromático',
    split: 'Complementar dividido',
    double: 'Duplo complementar',
    square: 'Quadrado',
    compound: 'Composto'
  },

  colorAdjust: {
    title: 'Ajuste de cor',
    hue: 'Matiz',
    saturation: 'Saturação',
    lightness: 'Luminosidade',
    alpha: 'Transparência'
  },

  colorInfo: {
    title: 'Informações da cor',
    name: 'Nome da cor',
    format: 'Formato',
    contrast: 'Contraste',
    accessibility: {
      title: 'Acessibilidade',
      pass: 'Atende aos padrões WCAG',
      fail: 'Não atende aos padrões WCAG',
      normal: 'Texto normal',
      large: 'Texto grande'
    }
  },

  messages: {
    copied: 'Cor copiada para a área de transferência',
    copyFailed: 'Falha ao copiar cor',
    invalidColor: 'Formato de cor inválido',
    contrastWarning: 'Contraste baixo',
    saved: 'Cor salva',
    contrast: 'Contraste: {ratio}',
    accessibility: {
      AAA: 'Contraste excelente (AAA)',
      AA: 'Bom contraste (AA)',
      fail: 'Contraste insuficiente - não atende aos padrões de acessibilidade'
    },
    preview: 'Visualização',
    colorValue: 'Valor da cor',
  },

  history: {
    title: 'Histórico de cores',
    empty: 'Nenhum histórico de cores',
    clear: 'Limpar histórico'
  },

  colorPalette: {
    title: 'Paleta de cores',
    addToPalette: 'Adicionar à paleta',
    removeFromPalette: 'Remover da paleta',
    exportPalette: 'Exportar paleta',
    importPalette: 'Importar paleta',
    clearPalette: 'Limpar paleta'
  }
};