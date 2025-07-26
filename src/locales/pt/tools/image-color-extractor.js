export default {
  name: 'Extrator de Cores de Imagem',
  description: 'Extrai paletas de cores e cores principais de imagens',

  input: {
    title: 'Carregar Imagem',
    dropzone: 'Arraste e solte a imagem aqui ou clique para carregar',
    formats: 'Formatos suportados: JPG, PNG, GIF, WebP, SVG',
    browse: 'Procurar arquivos',
    selectImage: 'Selecionar imagem',
    orText: 'ou',
    pasteUrl: 'Cole a URL da imagem:',
    loadUrl: 'Carregar da URL',
    urlPlaceholder: 'https://exemplo.com/imagem.jpg',
    unnamed: 'Imagem sem nome'
  },

  options: {
    title: 'Opções de Extração',
    extractSettings: 'Configurações de extração',
    colorCount: 'Quantidade de cores',
    paletteSize: 'Tamanho da paleta',
    paletteMin: 'Mínimo (3)',
    paletteMax: 'Máximo (20)',
    colorSimilarity: 'Similaridade de cores',
    similiarityToggle: 'Permitir cores similares',
    quality: 'Qualidade da extração',
    colorModel: 'Modelo de cor',
    colorSpace: 'Espaço de cor',
    colorFormat: 'Formato da cor',
    sortBy: 'Ordenar cores por',
    sortByPopularity: 'Por frequência de ocorrência',
    sortByLuminance: 'Por luminância',
    sortByHue: 'Por matiz',
    sortBySaturation: 'Por saturação',
    ignoreWhite: 'Ignorar branco',
    ignoreBlack: 'Ignorar preto',
    threshold: 'Limite de similaridade'
  },

  colorModels: {
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB'
  },

  colorFormats: {
    hex: 'Hexadecimal (#RRGGBB)',
    rgb: 'RGB (0-255)',
    rgba: 'RGBA com transparência',
    hsl: 'HSL',
    hsla: 'HSLA com transparência',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },

  sortOptions: {
    prevalence: 'Prevalência',
    luminance: 'Luminância',
    hue: 'Matiz',
    saturation: 'Saturação',
    original: 'Ordem original'
  },

  colorSpaces: {
    srgb: 'sRGB',
    p3: 'Display P3',
    rec2020: 'Rec. 2020',
    prophoto: 'ProPhoto RGB'
  },

  results: {
    title: 'Cores Extraídas',
    colorsFound: '{count} cores extraídas',
    dominantColor: 'Cor dominante',
    mainColor: 'Cor principal',
    complementary: 'Cor complementar',
    palette: 'Paleta de cores',
    colorPalette: 'Paleta de cores',
    palettePreview: 'Pré-visualização da paleta',
    usage: 'Uso da cor (%)',
    percentage: 'Proporção: {value}%',
    copyAll: 'Copiar todas as cores',
    clickToCopy: 'Clique para copiar: {color}',
    downloading: 'Baixando paleta...'
  },

  display: {
    originalImage: 'Imagem original',
    colorPalette: 'Paleta de cores',
    uploadFirst: 'Por favor, carregue uma imagem primeiro',
    clickExtract: 'Clique em "Extrair Cores" para obter a paleta da imagem',
  },

  actions: {
    extract: 'Extrair Cores',
    extracting: 'Processando...',
    download: 'Baixar Paleta',
    copy: 'Copiar',
    copyValue: 'Copiar valor',
    reset: 'Redefinir',
    copyPalette: 'Copiar Paleta',
    exportJson: 'Exportar como JSON',
    exportCss: 'Exportar como variáveis CSS',
    exportSass: 'Exportar como variáveis SASS',
    exportSwatch: 'Exportar como amostra ASE'
  },

  palette: {
    title: 'Paletas Nomeadas',
    vibrant: 'Vibrante',
    muted: 'Saturado',
    dark: 'Escuro',
    light: 'Claro',
    custom: 'Personalizado'
  },

  messages: {
    imageLoaded: 'Imagem carregada com sucesso',
    processingImage: 'Processando imagem...',
    extractionComplete: 'Extração de cores concluída',
    extractionFailed: 'Falha na extração: {error}',
    copied: 'Copiado para a área de transferência',
    copiedColor: 'Copiado: {color}',
    copiedAll: 'Todas as cores copiadas',
    copyFailed: 'Falha ao copiar',
    resetDone: 'Redefinido',
    invalidImage: 'Arquivo de imagem inválido',
    noImageSelected: 'Nenhuma imagem selecionada'
  }
};