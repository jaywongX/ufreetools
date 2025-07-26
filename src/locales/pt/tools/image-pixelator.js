export default {
  name: 'Pixelizador de Imagens',
  description: 'Transforme imagens em arte pixelada com resolução e efeitos personalizáveis',

  upload: {
    title: 'Carregar Imagem',
    dropzone: 'Arraste e solte a imagem aqui ou clique para navegar',
    maxSize: 'Tamanho máximo: 10MB',
    supportedFormats: 'Formatos suportados: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Configurações de Pixelização',
    pixelSize: 'Tamanho do Pixel',
    pixelShape: 'Formato do Pixel',
    shapes: {
      square: 'Quadrado',
      rounded: 'Arredondado',
      circle: 'Círculo',
      diamond: 'Losango',
      custom: 'Personalizado'
    },
    resolution: 'Resolução',
    width: 'Largura',
    height: 'Altura',
    preserveAspect: 'Manter proporção',
    colorReduction: 'Redução de Cores',
    colors: 'Número de Cores',
    dithering: 'Dithering',
    ditheringTypes: {
      none: 'Nenhum',
      floydSteinberg: 'Floyd-Steinberg',
      atkinson: 'Atkinson',
      ordered: 'Ordenado',
      bayer: 'Bayer'
    },
    palette: 'Paleta de Cores',
    palettes: {
      auto: 'Automático',
      grayscale: 'Escala de Cinza',
      gameboy: 'Game Boy',
      nes: 'NES',
      cpc: 'CPC',
      c64: 'C64',
      custom: 'Personalizado',
      normal: 'Normal',
      retro: 'Retrô',
      sepia: 'Sépia',
      bright: 'Brilhante',
      cool: 'Frio',
      warm: 'Quente',
      bw: 'Preto e Branco',
      invert: 'Inverter'
    },
    customPalette: 'Cores da Paleta Personalizada',
    small: 'Pequeno (Detalhado)',
    large: 'Grande (Grosseiro)',
    low: 'Baixo (Retrô)',
    high: 'Alto (Cores Vivas)',
  },

  effects: {
    title: 'Efeitos',
    brightness: 'Brilho',
    contrast: 'Contraste',
    saturation: 'Saturação',
    hue: 'Matiz',
    outline: 'Contorno',
    outlineColor: 'Cor do Contorno',
    noise: 'Ruído',
    posterize: 'Posterizar',
    invert: 'Inverter Cores',
    grayscale: 'Escala de Cinza',
    sepia: 'Sépia',
    vignette: 'Vignette'
  },

  animation: {
    title: 'Configurações de Animação',
    animated: 'Processar como Animação',
    frameRate: 'Taxa de Quadros',
    optimizeFrames: 'Otimizar Quadros',
    looping: 'Repetição',
    loopCount: 'Número de Repetições'
  },

  output: {
    title: 'Saída',
    preview: 'Pré-visualização',
    original: 'Original',
    pixelated: 'Pixelizado',
    comparison: 'Comparação',
    zoomIn: 'Ampliar',
    zoomOut: 'Reduzir',
    gridOverlay: 'Grade',
    downloadAs: 'Baixar como',
    png: 'PNG',
    jpg: 'JPG',
    gif: 'GIF',
    webp: 'WebP',
    spritesheet: 'Folha de Sprites',
    quality: 'Qualidade',
    scale: 'Escala',
    loading: 'Carregando...',
    noImage: 'Selecione uma imagem',
    processing: 'Processando...'
  },

  presets: {
    title: 'Predefinições',
    save: 'Salvar Configurações Atuais',
    load: 'Carregar Predefinição',
    delete: 'Excluir Predefinição',
    presetName: 'Nome da Predefinição',
    defaults: {
      lowRes: 'Baixa Resolução',
      highContrast: 'Alto Contraste',
      retro: 'Retrô',
      minimal: 'Mínimo',
      sketch: 'Esboço',
      blueprint: 'Diagrama'
    }
  },

  actions: {
    pixelate: 'Pixelizar Imagem',
    reset: 'Redefinir Configurações',
    applyChanges: 'Aplicar Alterações',
    undoChanges: 'Desfazer Alterações',
    downloadImage: 'Baixar Imagem',
    selectImage: 'Selecionar Imagem'
  },

  messages: {
    processing: 'Processando imagem...',
    success: 'Imagem pixelizada com sucesso',
    downloading: 'Preparando download...',
    presetSaved: 'Predefinição salva',
    presetLoaded: 'Predefinição carregada',
    presetDeleted: 'Predefinição excluída',
    error: 'Erro: {error}',
    fileSize: 'Tamanho do arquivo',
    pixels: 'Pixels',
    imageSize: 'Dimensões da Imagem',
    downloadSuccess: 'Imagem baixada',
    downloadFailed: 'Falha no download',
    resetSuccess: 'Redefinido',
    fileName: 'Nome do arquivo'
  }
};