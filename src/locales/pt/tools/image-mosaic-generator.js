export default {
  name: 'Gerador de Mosaico de Imagens',
  description: 'Crie arte em mosaico combinando pequenas imagens em uma composição maior',

  upload: {
    title: 'Carregar Imagem Principal',
    dropzone: 'Arraste e solte a imagem principal aqui ou clique para navegar',
    maxSize: 'Tamanho máximo: 15MB',
    supportedFormats: 'Formatos suportados: JPG, PNG, WEBP'
  },

  tiles: {
    title: 'Imagens de Bloco',
    uploadTiles: 'Carregar Blocos',
    dropzoneTiles: 'Arraste e solte imagens de bloco aqui ou clique para navegar',
    maxTiles: 'Máximo de {count} imagens',
    useFolder: 'Carregar pasta de imagens',
    orUseSample: 'Ou usar galeria de exemplo',
    sampleSets: 'Conjuntos de Blocos Exemplo',
    nature: 'Natureza',
    people: 'Pessoas',
    art: 'Arte',
    abstract: 'Abstrato',
    animals: 'Animais',
    clearAll: 'Limpar Todos os Blocos'
  },

  settings: {
    title: 'Configurações do Mosaico',
    tileSize: 'Tamanho do Bloco',
    small: 'Pequeno (detalhado)',
    medium: 'Médio',
    large: 'Grande (grosseiro)',
    square: 'Quadrado',
    circle: 'Circular',
    applicationMode: 'Modo de Aplicação',
    all: 'Imagem Inteira',
    selectRegion: 'Selecionar Região',
    selectingRegion: 'Selecionando Região...',
    autoDetectFaces: 'Detectar Rostos Automaticamente',
    detectFaces: 'Detectar Rostos',
    detectFacesDescription: 'Identifica rostos na imagem e aplica mosaico automaticamente',
    edgeSmoothing: 'Suavização de Bordas',
    edgeSmoothingDescription: 'Suaviza bordas dos blocos para transições mais naturais',
    custom: 'Personalizado',
    width: 'Largura',
    height: 'Altura',
    tilesWide: 'Blocos na Largura',
    tilesHigh: 'Blocos na Altura',
    colorMatch: 'Correspondência de Cores',
    intensity: 'Intensidade',
    low: 'Baixa',
    high: 'Alta',
    reuseTiles: 'Reutilizar Blocos',
    allowDuplicates: 'Permitir Duplicatas',
    maxUses: 'Usos Máximos por Bloco',
    colorAdjustment: 'Ajuste de Cor',
    adjustTiles: 'Ajustar blocos para corresponder',
    blendOriginal: 'Misturar com Original',
    blendAmount: 'Quantidade de Mistura',
    random: 'Variação Aleatória',
    shuffle: 'Embaralhar Blocos'
  },

  advanced: {
    title: 'Opções Avançadas',
    algorithm: 'Algoritmo de Correspondência',
    algorithms: {
      average: 'Cor Média',
      dominant: 'Cor Dominante',
      histogram: 'Histograma de Cores',
      pattern: 'Correspondência de Padrão'
    },
    tileShape: 'Forma do Bloco',
    shapes: {
      square: 'Quadrado',
      circle: 'Círculo',
      hexagon: 'Hexágono',
      triangle: 'Triângulo',
      random: 'Aleatório'
    },
    tileGap: 'Espaço entre Blocos',
    borderColor: 'Cor da Borda',
    backgroundColor: 'Cor de Fundo'
  },

  output: {
    fileName: 'Nome do Arquivo',
    title: 'Saída',
    preview: 'Pré-visualização',
    original: 'Original',
    mosaic: 'Mosaico',
    sideBySide: 'Comparação',
    zoomIn: 'Ampliar',
    zoomOut: 'Reduzir',
    download: 'Baixar Mosaico',
    asJpg: 'Baixar como JPG',
    asPng: 'Baixar como PNG',
    highRes: 'Alta Resolução',
    resolution: 'Resolução de Saída',
    format: 'Formato',
    quality: 'Qualidade',
    size: 'Tamanho',
    pixel: 'Pixel',
    pleaseSelectImage: 'Selecione uma imagem',
    pleaseSelectImageAndAdjustSettings: 'Selecione uma imagem e ajuste as configurações'
  },

  actions: {
    generate: 'Gerar Mosaico',
    regenerate: 'Regenerar',
    cancel: 'Cancelar',
    reset: 'Redefinir',
    detectFaces: 'Detectar Rostos',
    saveSettings: 'Salvar Configurações',
    loadSettings: 'Carregar Configurações'
  },

  messages: {
    generating: 'Gerando mosaico... Isso pode levar algum tempo.',
    generationComplete: 'Mosaico gerado com sucesso!',
    notEnoughTiles: 'Blocos insuficientes. Carregue mais imagens.',
    tileProcessing: 'Processando blocos: {progress}%',
    downloadStarted: 'Download iniciado',
    settingsSaved: 'Configurações salvas',
    selecting: 'Selecionando região...',
    preview: 'Pré-visualização do mosaico será exibida aqui',
    faceDetected: 'Rosto detectado',
    facesDetected: '{count} rostos detectados',
    noFacesDetected: 'Nenhum rosto detectado',
    loadingModels: 'Carregando modelos de detecção...',
    faceDetectionFailed: 'Falha na detecção de rostos',
    reset: 'Redefinido',
    error: 'Erro: {message}'
  }
};