export default {
  name: 'Redimensionador de Imagens em Lote',
  description: 'Ajuste, converta e otimize várias imagens de uma só vez',

  input: {
    title: 'Imagens de Entrada',
    dropzone: 'Arraste e solte imagens aqui ou clique para navegar',
    addMore: 'Adicionar mais imagens',
    selectImages: 'Selecionar imagens',
    clearAll: 'Limpar tudo',
    maxFiles: 'Máximo de {count} imagens',
    maxSize: 'Tamanho máximo por imagem: {size}MB',
    supportedFormats: 'Formatos suportados: {formats}'
  },

  options: {
    title: 'Opções de Redimensionamento',
    settingsTitle: 'Configurações de Ajuste',
    resizeMode: 'Modo de Redimensionamento',
    resizeMethod: 'Método de Redimensionamento',
    pixelMode: 'Pixel',
    percentageMode: 'Porcentagem',
    maxDimensionMode: 'Dimensão Máxima',
    outputFormat: 'Formato de Saída',
    quality: 'Qualidade',
    width: 'Largura',
    height: 'Altura',
    maintainAspectRatio: 'Manter proporção',
    maxWidth: 'Largura máxima',
    maxHeight: 'Altura máxima',
    percentage: 'Porcentagem',
    backgroundColor: 'Cor de fundo',
    naming: 'Nomeação de Saída',
    filenamePrefix: 'Prefixo do nome do arquivo',
    filenameSuffix: 'Sufixo do nome do arquivo',
    applyToAllImages: 'Aplicar a todas as imagens',
    applyToAll: 'Aplicar a todas'
  },

  resizeModes: {
    exact: 'Dimensões exatas',
    maxDimensions: 'Dimensões máximas',
    percentage: 'Redimensionar por porcentagem',
    fit: 'Ajustar internamente',
    cover: 'Cobrir',
    crop: 'Recortar'
  },

  formats: {
    original: 'Igual à origem',
    jpg: 'JPG/JPEG',
    png: 'PNG',
    webp: 'WebP',
    gif: 'GIF',
    bmp: 'BMP',
    tiff: 'TIFF',
    svg: 'SVG',
    ico: 'ICO'
  },

  namingOptions: {
    original: 'Nome original',
    dimensions: 'Original + dimensões',
    format: 'Original + formato',
    custom: 'Padrão personalizado',
    random: 'String aleatória'
  },

  output: {
    title: 'Imagens Redimensionadas',
    downloadAll: 'Baixar tudo',
    downloadAsZip: 'Baixar como ZIP',
    processingStatus: 'Processando: {processed}/{total}',
    originalSize: 'Tamanho original',
    newSize: 'Novo tamanho',
    reduction: 'Redução',
    individualDownload: 'Baixar'
  },

  batch: {
    title: 'Processamento em Lote',
    process: 'Processar todas as imagens',
    cancel: 'Cancelar processamento',
    selectPreset: 'Selecionar predefinição',
    savePreset: 'Salvar configurações atuais',
    progress: 'Progresso do processamento'
  },

  watermark: {
    title: 'Marca d\'água',
    enable: 'Adicionar marca d\'água',
    text: 'Texto da marca d\'água',
    image: 'Imagem da marca d\'água',
    position: 'Posição',
    opacity: 'Opacidade',
    rotation: 'Rotação',
    size: 'Tamanho',
    padding: 'Preenchimento'
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
    bottomRight: 'Inferior direito'
  },

  actions: {
    resize: 'Redimensionar',
    preview: 'Pré-visualizar',
    processing: 'Processando...',
    reset: 'Redefinir',
    applySettings: 'Aplicar configurações',
    resetSettings: 'Redefinir configurações',
    cancel: 'Cancelar'
  },

  messages: {
    resizeSuccess: 'Redimensionamento da imagem bem-sucedido',
    resizeFailed: 'Falha ao redimensionar imagem: {error}',
    invalidDimensions: 'Por favor, insira dimensões válidas',
    invalidWidthHeight: 'Por favor, insira largura e altura válidas',
    noImages: 'Por favor, adicione imagens para redimensionar',
    noImagesToDownload: 'Nenhuma imagem para baixar',
    processing: 'Processando imagens...',
    processingComplete: 'Processamento concluído',
    processingError: 'Erro ao processar imagem',
    waitingForProcess: 'Aguardando processamento',
    downloadStarted: 'Download iniciado',
    allDownloaded: 'Todas as imagens foram baixadas',
    presetSaved: 'Predefinição salva',
    presetLoaded: 'Predefinição carregada',
    zipCreated: 'Pacote ZIP criado com {count} imagens',
    zipError: 'Erro ao criar pacote ZIP'
  },

  preview: {
    title: 'Pré-visualização de Imagem ({count})',
    selectImage: 'Selecione uma imagem',
    batchSupport: 'Suporte para seleção múltipla de imagens para processamento em lote',
    download: 'Baixar',
    delete: 'Excluir'
  },

  qualityOptions: {
    fast: 'Processamento rápido',
    medium: 'Qualidade média',
    high: 'Alta qualidade (recomendado)',
    best: 'Melhor qualidade (mais lento)'
  }
};