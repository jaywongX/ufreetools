export default {
  name: 'Recortador de Imagens',
  description: 'Recorte, redimensione e rotacione imagens com precisão',

  upload: {
    title: 'Carregar Imagem',
    dropzone: 'Arraste e solte a imagem aqui ou clique para navegar',
    maxSize: 'Tamanho máximo: 10MB',
    supportedFormats: 'Formatos suportados: JPG, PNG, WEBP, GIF',
    select: 'Selecione uma imagem para começar a editar'
  },

  editor: {
    title: 'Editor de Imagem',
    zoom: 'Zoom',
    rotate: 'Rotacionar',
    flipHorizontal: 'Inverter horizontalmente',
    flipVertical: 'Inverter verticalmente',
    reset: 'Redefinir imagem',
    undo: 'Desfazer',
    redo: 'Refazer',
    dragMode: 'Modo arrastar',
    scaleMode: 'Modo escala'
  },

  crop: {
    title: 'Configurações de Recorte',
    aspectRatio: 'Proporção',
    freeform: 'Livre',
    square: 'Quadrado (1:1)',
    portrait: 'Retrato (3:4)',
    landscape: 'Paisagem (4:3)',
    widescreen: 'Widescreen (16:9)',
    panorama: 'Panorâmica (2:1)',
    custom: 'Personalizado',
    width: 'Largura',
    height: 'Altura',
    unit: 'Unidade',
    pixels: 'Pixels',
    percent: 'Porcentagem',
    lockAspectRatio: 'Travar proporção'
  },

  presets: {
    title: 'Predefinições de Tamanho',
    original: 'Tamanho original',
    social: 'Redes Sociais',
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    print: 'Tamanhos para impressão',
    fourBySix: '4×6 polegadas',
    fiveBySeven: '5×7 polegadas',
    eightByTen: '8×10 polegadas'
  },

  output: {
    title: 'Saída',
    preview: 'Pré-visualização',
    dimensions: 'Dimensões de saída',
    quality: 'Qualidade',
    format: 'Formato',
    fileName: 'Nome do arquivo',
    download: 'Baixar',
    saveAs: 'Salvar como',
    copy: 'Copiar para área de transferência'
  },

  actions: {
    crop: 'Recortar imagem',
    apply: 'Aplicar',
    cancel: 'Cancelar',
    save: 'Salvar imagem',
    download: 'Baixar',
    newImage: 'Nova imagem'
  },

  messages: {
    cropSuccess: 'Imagem recortada com sucesso',
    downloadReady: 'Sua imagem recortada está pronta para download',
    processing: 'Processando imagem...',
    copied: 'Imagem copiada para a área de transferência',
    invalidFile: 'Arquivo inválido. Por favor, carregue uma imagem válida.',
    fileTooLarge: 'Arquivo muito grande. Tamanho máximo: 10MB.'
  }
};