export default {
  name: 'Visualizador de EXIF',
  description: 'Visualize e analise metadados EXIF de fotos',

  upload: {
    title: 'Carregar Imagem',
    dropzone: 'Arraste e solte a imagem aqui ou clique para navegar',
    maxSize: 'Tamanho máximo: 15MB',
    supportedFormats: 'Formatos suportados: JPG, TIFF, HEIC, PNG',
    anyImageFile: 'Qualquer arquivo de imagem contendo dados EXIF'
  },

  display: {
    title: 'Informações da Imagem',
    noExif: 'Nenhum dado EXIF encontrado nesta imagem',
    basicInfo: 'Informações Básicas',
    camera: 'Informações da Câmera',
    exposure: 'Configurações de Exposição',
    location: 'Dados de Localização',
    dates: 'Informações de Data',
    advanced: 'Metadados Avançados',
    thumbnail: 'Miniatura EXIF'
  },

  exif: {
    fileName: 'Nome do Arquivo',
    fileSize: 'Tamanho do Arquivo',
    fileType: 'Tipo de Arquivo',
    dimensions: 'Dimensões',
    make: 'Fabricante',
    model: 'Modelo da Câmera',
    lens: 'Lente',
    focalLength: 'Distância Focal',
    focalLength35: 'Distância Focal (35mm)',
    aperture: 'Abertura',
    fNumber: 'Número F',
    exposureTime: 'Tempo de Exposição',
    shutterSpeed: 'Velocidade do Obturador',
    iso: 'ISO',
    exposureMode: 'Modo de Exposição',
    exposureProgram: 'Programa de Exposição',
    meteringMode: 'Modo de Medição',
    flash: 'Flash',
    flashMode: 'Modo do Flash',
    whiteBalance: 'Balanço de Branco',
    exposureBias: 'Compensação de Exposição',
    latitude: 'Latitude',
    longitude: 'Longitude',
    altitude: 'Altitude',
    locationName: 'Nome do Local',
    dateOriginal: 'Data de Captura',
    dateDigitized: 'Data de Digitalização',
    dateModified: 'Data de Modificação',
    software: 'Software',
    artist: 'Autor',
    copyright: 'Direitos Autorais',
    resolution: 'Resolução',
    colorSpace: 'Espaço de Cor',
    orientation: 'Orientação',
    compression: 'Compressão',
    bitsPerSample: 'Bits por Amostra',
    maxAperture: 'Abertura Máxima',
    contrast: 'Contraste',
    saturation: 'Saturação',
    sharpness: 'Nitidez',
    brightness: 'Brilho',
    sceneCaptureType: 'Tipo de Cena',
    gainControl: 'Controle de Ganho',
    serialNumber: 'Número de Série',
    width: 'Largura',
    height: 'Altura',
  },

  map: {
    title: 'Localização da Foto',
    show: 'Mostrar no Mapa',
    noLocation: 'Sem dados de localização',
    directions: 'Obter Direções',
    copy: 'Copiar Coordenadas',
    warning: 'Aviso: Esta imagem contém dados de localização. Tenha cuidado ao compartilhar.'
  },

  actions: {
    showAll: 'Mostrar Todos',
    hideAll: 'Ocultar Todos',
    copyAll: 'Copiar Tudo',
    save: 'Salvar como JSON',
    removeMeta: 'Remover Metadados',
    download: 'Baixar sem Metadados',
    viewFullSize: 'Ver em Tamanho Real',
    refresh: 'Recarregar Dados'
  },

  settings: {
    title: 'Configurações',
    showGroups: 'Agrupar Metadados',
    showRaw: 'Mostrar Valores Brutos',
    showTechnical: 'Mostrar Dados Técnicos',
    showFiltered: 'Ocultar Campos Vazios',
    darkMode: 'Modo Escuro',
    mapProvider: 'Provedor de Mapa'
  },

  tips: {
    privacy: 'Dica de Privacidade: Fotos podem conter dados pessoais como localização e informações do dispositivo.',
    noExif: 'Não vê dados EXIF? Algumas redes sociais e editores removem metadados.',
    rawView: 'Use "Visualização Bruta" para ver todos os metadados disponíveis.'
  },

  messages: {
    copied: 'Metadados copiados',
    saved: 'Metadados salvos como JSON',
    noExif: 'Nenhum dado EXIF encontrado',
    metadataRemoved: 'Metadados removidos com sucesso',
    imageLoaded: 'Imagem carregada',
    notUse: 'Não usado',
    use: 'Usado',
    auto: 'Automático',
    manual: 'Manual',
    reset: 'Redefinido',
    exifExtracted: 'EXIF extraído',
  },

  error: {
    copyFailed: 'Falha ao copiar',
    exportFailed: 'Falha ao exportar',
    exifExtractionFailed: 'Falha ao extrair EXIF',
    imageLoadFailed: 'Falha ao carregar imagem',
  },

  orientation: {
    normal: 'Normal',
    horizontalFlip: 'Inverter Horizontal',
    rotate180: 'Rotacionar 180°',
    verticalFlip: 'Inverter Vertical',
    rotate90VerticalFlip: 'Rotacionar 90° e Inverter Vertical',
    rotate90: 'Rotacionar 90°',
    rotate90HorizontalFlip: 'Rotacionar 90° e Inverter Horizontal',
    rotate270: 'Rotacionar 270°'
  }
};