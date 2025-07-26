export default {
  name: 'Compressor de Imagens',
  description: 'Comprima e otimize imagens mantendo a qualidade',

  input: {
    dragDrop: 'Arraste e solte imagens aqui ou clique para enviar',
    supportedFormats: 'Formatos suportados: JPG, PNG, GIF, WEBP',
    selected: '{count} arquivo(s) selecionado(s)',
    changeFiles: 'Alterar arquivos',
    width: 'Largura',
    height: 'Altura',
    keepOriginal: 'Defina como 0 para manter dimensões originais',
  },

  results: {
    originalImage: 'Imagem original',
    compressedImage: 'Comprimida',
    filename: 'Arquivo:',
    dimensions: 'Dimensões:',
    fileSize: 'Tamanho:',
    compressionRatio: 'Taxa de compressão:',
    viewOriginal: 'Ver original',
  },

  about: {
    title: 'Sobre compressão de imagens',
    description: 'Esta ferramenta usa a Canvas API do navegador para compressão. Todo processamento ocorre localmente - suas imagens não são enviadas a servidores.',
    principlesTitle: 'Princípios da compressão:',
    principles: {
      resize: 'Redimensionar: dimensões menores significam menos dados',
      quality: 'Qualidade: reduzir parâmetros de qualidade diminui o arquivo',
      format: 'Conversão: formatos diferentes têm características distintas'
    },
    useCasesTitle: 'Casos de uso:',
    useCases: {
      web: 'Otimização para websites (carregamento mais rápido)',
      email: 'Reduzir anexos de e-mail',
      social: 'Compressão para redes sociais',
      storage: 'Otimização de armazenamento'
    }
  },

  options: {
    quality: 'Qualidade',
    qualityValue: 'Qualidade ({value}%)',
    lowQuality: 'Baixa qualidade/tamanho pequeno',
    highQuality: 'Alta qualidade/tamanho maior',
    format: 'Formato de saída',
    maxSize: 'Tamanho máximo ({width} × {height} px)',
    keepExif: 'Manter metadados EXIF',
    resizeImage: 'Redimensionar imagem',
    maxWidth: 'Largura máxima',
    maxHeight: 'Altura máxima',
    compressionLevel: 'Nível de compressão',
    maxFileSize: 'Tamanho alvo',
    optimizationLevel: 'Nível de otimização',
    convertTo: 'Converter para'
  },

  presets: {
    web: 'Otimizado para web',
    highQuality: 'Alta qualidade',
    balanced: 'Equilibrado',
    smallSize: 'Tamanho pequeno',
    custom: 'Personalizado'
  },

  formats: {
    original: 'Formato original',
    jpeg: 'JPEG',
    jpegDesc: 'Ideal para fotos (sem transparência)',
    png: 'PNG',
    pngDesc: 'Suporta transparência (ideal para ícones)',
    webp: 'WebP',
    webpDesc: 'Alta compressão (recomendado para web)',
    avif: 'AVIF',
    gif: 'GIF',
    bmp: 'BMP'
  },

  resizeOptions: {
    noResize: 'Não redimensionar',
    maxDimension: 'Dimensão máxima',
    exactDimensions: 'Dimensões exatas',
    percentage: 'Redimensionar por porcentagem'
  },

  actions: {
    upload: 'Enviar imagens',
    compress: 'Comprimir',
    processing: 'Processando...',
    download: 'Baixar',
    downloadAll: 'Baixar tudo',
    batchDownload: 'Download em lote',
    clear: 'Limpar',
    addMore: 'Adicionar mais',
    removeAll: 'Remover tudo',
    preview: 'Visualizar',
    delete: 'Excluir'
  },

  table: {
    filename: 'Arquivo',
    originalSize: 'Tamanho original',
    original: 'Original',
    compressedSize: 'Comprimido',
    compressed: 'Comprimido',
    savings: 'Economia',
    ratio: 'Taxa',
    quality: 'Qualidade',
    dimensions: 'Dimensões',
    originalDimensions: 'Dimensões originais',
    newDimensions: 'Novas dimensões',
    status: 'Status'
  },

  messages: {
    dropped: '{count} imagem(ns) adicionada(s)',
    uploading: 'Enviando imagens...',
    compressing: 'Comprimindo imagens...',
    compressed: 'Compressão concluída',
    downloadPreparing: 'Preparando download...',
    downloadReady: 'Pronto para baixar',
    cleared: 'Todas as imagens foram removidas',
    tooManyFiles: 'Muitos arquivos. Máximo: {max}',
    fileTooLarge: 'Arquivo muito grande. Máximo: {max}MB',
    unsupportedFormat: 'Formato não suportado: {format}',
    imageError: 'Erro ao processar: {error}',
    batchDownloadNotSupported: 'Download em lote requer biblioteca JSZip. Baixe individualmente ou adicione suporte a ZIP.',
    batchDownloadError: 'Erro no download em lote: {error}',
    invalidImage: 'Selecione uma imagem válida'
  }
};