export default {
  name: 'Conversor de Imagem para ASCII',
  description: 'Transforme imagens em arte ASCII com opções personalizáveis',

  upload: {
    title: 'Carregar Imagem',
    dropzone: 'Arraste e solte a imagem aqui ou clique para navegar',
    maxSize: 'Tamanho máximo: 5MB',
    supportedFormats: 'Formatos suportados: JPG, PNG, WEBP, GIF',
    pasteImage: 'Ou cole imagem da área de transferência'
  },

  options: {
    title: 'Opções de Conversão',
    width: 'Largura da saída',
    height: 'Altura da saída',
    preserveAspect: 'Manter proporção',
    colored: 'Saída colorida',
    charSet: 'Conjunto de caracteres',
    charSets: {
      standard: 'Padrão',
      simple: 'Simples',
      complex: 'Complexo',
      blocks: 'Blocos',
      custom: 'Personalizado'
    },
    customChars: 'Caracteres personalizados',
    invert: 'Inverter cores',
    threshold: 'Limiar de brilho',
    brightness: 'Brilho',
    contrast: 'Contraste',
    fontFamily: 'Fonte',
    fontSize: 'Tamanho da fonte',
    lineHeight: 'Altura da linha',
    backgroundColor: 'Cor de fundo',
    textColor: 'Cor do texto'
  },

  output: {
    title: 'Saída ASCII',
    preview: 'Pré-visualização',
    raw: 'ASCII puro',
    html: 'HTML',
    copyToClipboard: 'Copiar para área de transferência',
    downloadTxt: 'Baixar como TXT',
    downloadHtml: 'Baixar como HTML',
    downloadImage: 'Baixar como imagem',
    stats: {
      title: 'Estatísticas',
      characters: 'Caracteres',
      lines: 'Linhas',
      colors: 'Cores',
      size: 'Tamanho do texto'
    }
  },

  presets: {
    title: 'Predefinições',
    save: 'Salvar configurações',
    load: 'Carregar predefinição',
    delete: 'Excluir predefinição',
    presetName: 'Nome da predefinição',
    default: 'Padrão',
    detailed: 'Detalhado',
    minimalist: 'Minimalista',
    blocky: 'Estilo bloco',
    small: 'Pequeno',
    inverted: 'Invertido'
  },

  adjustment: {
    title: 'Ajustes de Imagem',
    grayscale: 'Escala de cinza',
    negative: 'Negativo',
    resize: 'Redimensionar antes',
    crop: 'Recortar imagem',
    rotate: 'Rotacionar',
    flipH: 'Inverter horizontal',
    flipV: 'Inverter vertical'
  },

  animation: {
    title: 'Animação',
    animated: 'Processar como animação',
    frameDelay: 'Atraso entre quadros',
    loop: 'Repetir animação',
    loopCount: 'Número de repetições',
    extractFrame: 'Extrair quadro atual'
  },

  actions: {
    convert: 'Converter para ASCII',
    resetOptions: 'Redefinir opções',
    refreshPreview: 'Atualizar pré-visualização',
    loadImage: 'Carregar nova imagem',
    applyChanges: 'Aplicar alterações',
    selectImage: 'Selecionar imagem',
    reset: 'Redefinir',
    processing: 'Processando...',
    generate: 'Gerar ASCII',
    copy: 'Copiar',
    download: 'Baixar'
  },

  messages: {
    converting: 'Convertendo imagem para ASCII...',
    conversionComplete: 'Conversão concluída',
    conversionFailed: 'Falha na conversão: {error}',
    copied: 'ASCII copiado para área de transferência',
    downloadStarted: 'Download iniciado',
    downloadComplete: 'ASCII baixado',
    downloadFailed: 'Falha no download',
    copyFailed: 'Falha ao copiar',
    resetComplete: 'Redefinido',
    asciiGenerated: 'Arte ASCII gerada',
    generationFailed: 'Falha ao gerar ASCII',
    presetSaved: 'Predefinição salva',
    presetLoaded: 'Predefinição carregada',
    presetDeleted: 'Predefinição excluída',
    invalidImage: 'Formato inválido ou arquivo corrompido',
    imageTooBig: 'Imagem muito grande para conversão',
    selectOrLoad: 'Selecione uma imagem ou carregue de URL',
    asciiWillDisplay: 'ASCII será exibido aqui',
    customCharsPlaceholder: 'Digite caracteres (do mais escuro ao mais claro)...',
    tip: 'Ajuste as configurações e clique em "Gerar ASCII" para ver os efeitos',
    drapPlaceHolder: 'Selecione ou arraste uma imagem aqui',
    noImage: 'Selecione uma imagem primeiro',
    generateAscii: 'Clique em "Gerar ASCII" para converter',
    tip2: 'Dica: Use "Copiar" para levar sua arte ASCII para outros aplicativos ou "Baixar" para salvá-la.'
  },

  charSets: {
    standard: 'Padrão',
    simple: 'Simples',
    blocks: 'Blocos',
    custom: 'Personalizado'
  },

  settings: {
    title: 'Configurações ASCII',
    customCharsetLabel: 'Caracteres personalizados (escuro → claro)',
    asciiWidth: 'Largura ASCII',
    invert: 'Inverter cores',
    colored: 'Saída colorida',
    fontSize: 'Tamanho da fonte'
  },

  preview: {
    originalImage: 'Imagem original',
    generatedAscii: 'ASCII gerado'
  }
};