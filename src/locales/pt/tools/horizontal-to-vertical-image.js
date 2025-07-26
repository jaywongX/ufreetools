export default {
  name: 'Conversor de Imagem Horizontal para Vertical',
  description: 'Transforme imagens horizontais em formato vertical, perfeito para redes sociais, papéis de parede e stories',
  tags: ['imagem', 'conversão', 'celular', 'social', 'stories', 'vertical', 'retrato'],

  upload: {
    title: 'Conversor Horizontal para Vertical',
    dropzone: 'Arraste e solte sua imagem aqui',
    maxSize: 'Tamanho máximo: 10MB',
    supportedFormats: 'Formatos suportados: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Configurações',
    presets: 'Predefinições',
    conversionMode: 'Modo de conversão',
    modes: {
      crop: 'Recortar',
      fill: 'Preenchimento',
      blur: 'Desfoque',
      stretch: 'Esticar bordas',
      dualColor: 'Fundo bicolor'
    },
    cropPosition: 'Posição do recorte',
    positions: {
      left: 'Esquerda',
      center: 'Centro',
      right: 'Direita'
    },
    fillColor: 'Cor de preenchimento',
    blurRadius: 'Intensidade do desfoque',
    stretchFactor: 'Fator de esticamento',
    topColor: 'Cor superior',
    bottomColor: 'Cor inferior',
    sizeOption: 'Tamanho de saída',
    sizeModes: {
      auto: 'Automático',
      preset: 'Predefinido',
      custom: 'Personalizado'
    },
    sizePresets: 'Tamanhos predefinidos',
    outputSize: 'Tamanho personalizado',
    width: 'Largura',
    height: 'Altura',
    dimensionsHint: 'Dimensões em pixels',
    outputFormat: 'Formato de saída',
    quality: 'Qualidade',
    advancedOptions: 'Opções avançadas',
    preserveRatio: 'Manter proporção',
    sharpen: 'Nitidez',
    addWatermark: 'Adicionar marca d\'água',
    watermarkPlaceholder: 'Texto da marca d\'água',
    watermarkColor: 'Cor da marca d\'água'
  },

  output: {
    preview: 'Pré-visualização',
    before: 'Antes',
    after: 'Depois',
    dimensions: 'Dimensões'
  },

  actions: {
    selectImage: 'Selecionar imagem',
    convert: 'Converter para vertical',
    download: 'Baixar imagem',
    showSideBySide: 'Comparar',
    hideSideBySide: 'Ocultar comparação',
    hideComparison: 'Ocultar comparação'
  },

  messages: {
    convertPrompt: 'Envie uma imagem horizontal para converter',
    processing: 'Processando sua imagem...',
    imageOnly: 'Selecione apenas arquivos de imagem'
  },

  examples: {
    title: 'Exemplos de uso',
    social: 'Crie conteúdo vertical para Instagram, TikTok etc.',
    socialTip: 'Transforme fotos horizontais em conteúdo vertical atraente',
    mobile: 'Crie papéis de parede para celular',
    mobileTip: 'Otimize imagens para diferentes proporções de tela'
  }
};