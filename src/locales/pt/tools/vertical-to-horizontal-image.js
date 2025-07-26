export default {
  name: 'Conversor de Retrato para Paisagem',
  description: 'Converte imagens verticais (retrato) para formato horizontal (paisagem) com múltiplas opções de conversão',

  upload: {
    title: 'Enviar imagem',
    dropzone: 'Arraste e solte a imagem aqui',
    maxSize: 'Tamanho máximo: 10MB',
    supportedFormats: 'Formatos suportados: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Configurações de conversão',
    presets: 'Predefinições rápidas',
    conversionMode: 'Modo de conversão',
    modes: {
      rotate: 'Rotação',
      fill: 'Preencher fundo',
      blur: 'Desfocar fundo',
      stretch: 'Esticar bordas',
      dualColor: 'Fundo bicolor'
    },
    rotationAngle: 'Ângulo de rotação',
    fillColor: 'Cor de fundo',
    blurRadius: 'Intensidade do desfoque',
    stretchEdges: 'Grau de esticamento',
    leftColor: 'Cor esquerda',
    rightColor: 'Cor direita',
    sizeOption: 'Configurações de tamanho',
    sizeModes: {
      auto: 'Tamanho automático',
      preset: 'Tamanhos pré-definidos',
      custom: 'Tamanho personalizado'
    },
    sizePresets: 'Predefinições de tamanho',
    outputSize: 'Tamanho de saída',
    width: 'Largura',
    height: 'Altura',
    dimensionsHint: 'Insira as dimensões em pixels',
    autoSize: 'Calcular tamanho automaticamente',
    outputFormat: 'Formato de saída',
    quality: 'Qualidade da imagem',
    advancedOptions: 'Opções avançadas',
    preserveRatio: 'Manter proporção',
    sharpen: 'Nitidez',
    addWatermark: 'Adicionar marca d\'água',
    watermarkPlaceholder: 'Texto da marca d\'água',
    watermarkColor: 'Cor da marca d\'água'
  },

  output: {
    preview: 'Pré-visualização',
    dimensions: 'Dimensões',
    before: 'Antes',
    after: 'Depois'
  },

  actions: {
    selectImage: 'Selecionar imagem',
    convert: 'Converter imagem',
    download: 'Baixar imagem',
    reset: 'Remover',
    showSideBySide: 'Mostrar comparação',
    hideComparison: 'Ocultar comparação',
    hideSideBySide: 'Fechar'
  },

  messages: {
    processing: 'Processando imagem...',
    convertPrompt: 'O resultado aparecerá aqui após a conversão',
    error: 'Ocorreu um erro ao processar a imagem',
    success: 'Conversão concluída com sucesso!'
  },

  examples: {
    title: 'Dicas de uso',
    social: 'Ideal para posts em redes sociais, onde imagens horizontais performam melhor',
    socialTip: 'Use o modo desfoque para melhores resultados em redes sociais',
    website: 'Crie banners para sites e blogs',
    websiteTip: 'O modo bicolor é perfeito para banners web'
  },

  help: {
    title: 'Como usar esta ferramenta',
    description: 'Esta ferramenta permite converter imagens verticais (retrato) para formato horizontal (paisagem) mantendo a qualidade visual.',
    example1: {
      title: 'Posts para redes sociais',
      description: 'Converta fotos retrato para formato horizontal com fundo desfocado'
    },
    example2: {
      title: 'Banners para sites',
      description: 'Crie cabeçalhos e banners usando preenchimento colorido'
    }
  }
};