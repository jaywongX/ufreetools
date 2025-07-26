export default {
  name: 'Filtros de Imagem',
  description: 'Aplique diversos filtros e efeitos em imagens com visualização em tempo real',

  upload: {
    title: 'Carregar Imagem',
    dropzone: 'Arraste e solte a imagem aqui ou clique para navegar',
    maxSize: 'Tamanho máximo: 10MB',
    supportedFormats: 'Formatos suportados: JPG, PNG, WEBP, GIF'
  },

  editor: {
    title: 'Editor de Filtros',
    original: 'Original',
    filtered: 'Com Filtro',
    reset: 'Redefinir Tudo',
    undo: 'Desfazer',
    redo: 'Refazer',
    zoomIn: 'Ampliar',
    zoomOut: 'Reduzir',
    fitToScreen: 'Ajustar à Tela',
    showOriginal: 'Mostrar Original'
  },

  filters: {
    title: 'Filtros',
    basic: 'Ajustes Básicos',
    brightness: 'Brilho',
    contrast: 'Contraste',
    saturation: 'Saturação',
    hue: 'Matiz',
    exposure: 'Exposição',
    vibrance: 'Vibração',
    temperature: 'Temperatura',
    gamma: 'Gama',
    clarity: 'Nitidez',
    effects: 'Efeitos',
    grayscale: 'Escala de Cinza',
    sepia: 'Sépia',
    vintage: 'Vintage',
    polaroid: 'Polaroid',
    duotone: 'Duotone',
    noise: 'Ruído',
    pixelate: 'Pixelizar',
    blur: 'Desfoque',
    sharpen: 'Nitidez',
    vignette: 'Vignette',
    color: 'Cor',
    colorOverlay: 'Sobreposição de Cor',
    colorize: 'Colorizar',
    gradientMap: 'Mapa de Gradiente',
    replaceColor: 'Substituir Cor',
    advanced: 'Avançado',
    levels: 'Níveis',
    curves: 'Curvas',
    shadows: 'Sombras',
    highlights: 'Realces',
    blacks: 'Pretos',
    whites: 'Brancos',
    channels: 'Canais RGB'
  },

  presets: {
    title: 'Predefinições',
    custom: 'Personalizado',
    blackAndWhite: 'Preto e Branco',
    highContrast: 'Alto Contraste',
    normal: 'Normal',
    cinematic: 'Cinematográfico',
    warm: 'Quente',
    cool: 'Frio',
    sunset: 'Pôr do Sol',
    vintage: 'Vintage',
    invert: 'Inverter Cores',
    cross: 'Cruzado',
    matte: 'Fosco',
    flat: 'Plano',
    portrait: 'Retrato',
    landscape: 'Paisagem',
    vivid: 'Vívido',
    moody: 'Melancólico',
    savePreset: 'Salvar como Predefinição',
    deletePreset: 'Excluir Predefinição',
    presetName: 'Nome da Predefinição'
  },

  output: {
    title: 'Saída',
    fileName: 'Nome do Arquivo',
    format: 'Formato',
    quality: 'Qualidade',
    width: 'Largura',
    height: 'Altura',
    download: 'Baixar Imagem',
    saveOnline: 'Salvar Online',
    share: 'Compartilhar',
    applyToNew: 'Aplicar em Nova Imagem'
  },

  history: {
    title: 'Histórico',
    revert: 'Reverter para Esta Etapa',
    clear: 'Limpar Histórico'
  },

  actions: {
    apply: 'Aplicar Filtro',
    download: 'Baixar',
    save: 'Salvar',
    reset: 'Redefinir',
    cancel: 'Cancelar'
  },

  messages: {
    imageLoaded: 'Imagem carregada com sucesso',
    filterApplied: 'Filtro aplicado com sucesso',
    filtersReset: 'Filtros redefinidos para padrão',
    downloadStarted: 'Download iniciado',
    presetSaved: 'Predefinição salva com sucesso',
    presetDeleted: 'Predefinição excluída',
    invalidFile: 'Arquivo inválido. Por favor, carregue uma imagem válida.',
    fileTooLarge: 'Arquivo muito grande. Tamanho máximo: 10MB.'
  }
};