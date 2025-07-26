export default {
  name: 'Marcador de Água para Imagens',
  description: 'Adicione marcas d\'água de texto ou imagem às suas fotos com configurações personalizáveis',

  upload: {
    title: 'Carregar Imagem',
    dropzone: 'Arraste e solte a imagem aqui ou clique para navegar',
    addMore: 'Adicionar mais imagens',
    clearAll: 'Limpar todas',
    maxFiles: 'Máximo de {count} imagens',
    maxSize: 'Tamanho máximo por imagem: {size}MB',
    supportedFormats: 'Formatos suportados: JPG, PNG, WEBP, GIF'
  },

  watermarkType: {
    title: 'Tipo de Marca d\'Água',
    text: 'Texto',
    image: 'Imagem',
    both: 'Texto e Imagem'
  },

  textWatermark: {
    title: 'Marca d\'Água de Texto',
    text: 'Texto',
    font: 'Fonte',
    size: 'Tamanho',
    color: 'Cor',
    opacity: 'Opacidade',
    rotation: 'Rotação',
    shadow: 'Sombra',
    background: 'Fundo',
    padding: 'Espaçamento',
    border: 'Borda',
    spacing: 'Espaçamento entre letras'
  },

  imageWatermark: {
    title: 'Marca d\'Água de Imagem',
    upload: 'Carregar imagem',
    selectLogo: 'Selecionar logo',
    presetLogos: 'Logos pré-definidos',
    size: 'Tamanho',
    opacity: 'Opacidade',
    rotation: 'Rotação',
    offset: 'Deslocamento'
  },

  positioning: {
    title: 'Posicionamento',
    position: 'Posição',
    custom: 'Personalizado',
    xPosition: 'Posição X',
    yPosition: 'Posição Y',
    tiled: 'Modo repetição',
    margin: 'Margem',
    scale: 'Escala automática'
  },

  positions: {
    topLeft: 'Superior esquerdo',
    topCenter: 'Superior centro',
    topRight: 'Superior direito',
    middleLeft: 'Meio esquerdo',
    middleCenter: 'Centro',
    middleRight: 'Meio direito',
    bottomLeft: 'Inferior esquerdo',
    bottomCenter: 'Inferior centro',
    bottomRight: 'Inferior direito',
    custom: 'Posição personalizada'
  },

  output: {
    title: 'Saída',
    quality: 'Qualidade',
    format: 'Formato',
    original: 'Igual à original',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    preview: 'Pré-visualização',
    downloadIndividual: 'Baixar',
    downloadAll: 'Baixar todas',
    downloadAsZip: 'Baixar como ZIP'
  },

  presets: {
    title: 'Predefinições',
    save: 'Salvar configurações',
    load: 'Carregar predefinição',
    delete: 'Excluir predefinição',
    presetName: 'Nome da predefinição'
  },

  actions: {
    apply: 'Aplicar',
    applyToAll: 'Aplicar a todas',
    reset: 'Redefinir',
    preview: 'Pré-visualizar',
    undo: 'Desfazer',
    cancel: 'Cancelar'
  },

  messages: {
    processing: 'Processando...',
    success: 'Marca d\'água aplicada com sucesso',
    error: 'Erro: {error}',
    noImages: 'Adicione imagens primeiro',
    noWatermark: 'Adicione texto ou imagem como marca d\'água',
    presetSaved: 'Predefinição salva',
    presetLoaded: 'Predefinição carregada',
    presetDeleted: 'Predefinição excluída',
    watermarkApplied: 'Marca d\'água aplicada',
    watermarkImageLoadError: 'Falha ao carregar imagem da marca d\'água',
    imageLoadError: 'Falha ao carregar imagem',
    resetSuccess: 'Redefinido',
    downloadStarted: 'Download iniciado',
    downloadError: 'Falha ao baixar imagem',
    imageLoaded: 'Imagem carregada',
    canvasInitError: 'Falha ao inicializar canvas',
    tiledWatermarkError: 'Falha ao criar marca d\'água repetida'
  }
};