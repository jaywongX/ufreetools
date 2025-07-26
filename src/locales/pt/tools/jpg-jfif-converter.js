export default {
  name: 'Conversor de JPG para JFIF',
  description: 'Converta imagens JPG para o formato JFIF online, com alta qualidade e diversas opções',
  tags: ['imagem', 'conversão', 'jpg', 'jfif', 'jpeg', 'formato', 'ferramenta'],

  meta: {
    title: 'Conversor de JPG para JFIF - Ferramenta online gratuita de conversão de imagens',
    description: 'Converta JPG para JFIF gratuitamente online. Conversão rápida e segura no navegador, com suporte a processamento em lote, pré-visualização comparativa e configurações avançadas de qualidade. Sem marcas d\'água, sem necessidade de registro.'
  },

  upload: {
    title: 'Conversor de JPG para JFIF',
    subtitle: 'Converta imagens JPG para o formato JFIF com qualidade perfeita',
    dropzone: 'Arraste e solte seus arquivos JPG aqui',
    dropzoneActive: 'Solte os arquivos para iniciar a conversão',
    maxSize: 'Tamanho máximo do arquivo: 50MB',
    supportedFormats: 'Formatos suportados: JPG, JPEG'
  },

  settings: {
    title: 'Configurações de conversão',
    advanced: 'Configurações avançadas',
    quality: {
      label: 'Qualidade da imagem',
      description: 'Qualidade maior resulta em arquivos maiores',
      auto: 'Otimização automática (recomendado)'
    },
    qualityLabels: {
      maximum: 'Qualidade máxima',
      high: 'Alta qualidade',
      good: 'Boa qualidade',
      medium: 'Qualidade média',
      low: 'Baixa qualidade',
      veryLow: 'Qualidade muito baixa'
    },
    metadata: {
      label: 'Metadados da imagem',
      preserve: 'Preservar todos os metadados (EXIF, GPS etc.)',
      strip: 'Remover todos os metadados (arquivos menores)',
      keepBasic: 'Manter apenas metadados básicos'
    },
    filenameOption: 'Nome do arquivo de saída',
    filenameOriginal: 'Original',
    filenameConverted: 'Adicionar prefixo',
    filenameCustom: 'Personalizado',
    filenameTemplatePlaceholder: 'Exemplo: convertido-{nome}',
    filenameTemplateHelp: 'Use {nome} para inserir o nome original do arquivo',
    preserveMetadata: 'Preservar metadados da imagem'
  },

  preview: {
    title: 'Pré-visualização da imagem',
    before: 'JPG original',
    after: 'Pré-visualização JFIF',
    noPreview: 'Nenhuma pré-visualização disponível',
    togglePreview: 'Mostrar/ocultar pré-visualização',
    imageDetails: 'Detalhes da imagem'
  },

  fileTable: {
    fileName: 'Nome do arquivo',
    type: 'Tipo',
    size: 'Tamanho',
    status: 'Status',
    preview: 'Pré-visualização',
    pending: 'Pendente',
    converting: 'Convertendo...',
    done: 'Concluído',
    error: 'Erro',
    progress: 'Progresso'
  },

  results: {
    title: 'Arquivos convertidos',
    summary: '{count} arquivos convertidos, economizando {saved} de espaço',
    originalName: 'Nome original',
    convertedName: 'Nome convertido',
    originalSize: 'Tamanho original',
    convertedSize: 'Novo tamanho',
    compressionRate: 'Taxa de compressão',
    actions: 'Ações',
    noResults: 'Nenhum resultado de conversão'
  },

  actions: {
    selectFile: 'Selecionar arquivo',
    addMore: 'Adicionar mais',
    clear: 'Limpar arquivos',
    convertAll: 'Converter todos os arquivos',
    converting: 'Convertendo...',
    download: 'Download',
    downloadAll: 'Baixar tudo',
    clearResults: 'Limpar resultados',
    viewDetails: 'Ver detalhes',
    compare: 'Comparar',
    retry: 'Tentar novamente',
    cancelAll: 'Cancelar tudo',
    optimizeAll: 'Otimizar automaticamente'
  },

  messages: {
    noValidFiles: 'Por favor, selecione arquivos JPG ou JPEG válidos.',
    conversionError: 'Erro ao converter arquivo. Por favor, tente novamente.',
    conversionSuccess: 'Todos os arquivos foram convertidos com sucesso!',
    partialSuccess: '{success} de {total} arquivos convertidos com sucesso.',
    downloadStarted: 'Download iniciado...',
    processingFiles: 'Processando seus arquivos...',
    dragActive: 'Arraste e solte arquivos aqui para upload',
    fileSizeExceeded: 'Tamanho do arquivo excede o limite de 50MB',
    unsupportedFormat: 'Formato de arquivo não suportado'
  },

  history: {
    title: 'Conversões recentes',
    empty: 'Nenhuma conversão recente',
    clear: 'Limpar histórico',
    restore: 'Restaurar arquivos'
  },

  info: {
    title: 'Sobre a conversão de JPG para JFIF',
    description: 'Nosso conversor de JPG para JFIF permite que você converta rapidamente e facilmente arquivos de imagem JPG para o formato JFIF, com todo o processamento feito com segurança no seu navegador.',
    
    whatIs: {
      title: 'O que é JFIF?',
      content: 'JFIF (JPEG File Interchange Format) é um padrão de formato de arquivo para arquivos JPEG. Ele fornece informações adicionais como resolução, proporção e outros metadados, ajudando a garantir que imagens JPEG sejam exibidas corretamente em diferentes dispositivos e plataformas. Embora JFIF e JPG sejam tecnicamente formatos relacionados, alguns softwares e dispositivos podem ter melhor compatibilidade com um ou outro.'
    },
    
    whyConvert: {
      title: 'Por que converter JPG para JFIF?',
      reason1: 'Alguns sistemas de software mais antigos exigem especificamente o formato JFIF',
      reason2: 'Alguns aplicativos profissionais podem ter melhor compatibilidade com JFIF',
      reason3: 'Padronizar sua coleção de imagens com extensões de arquivo consistentes',
      reason4: 'Garantir o processamento correto de metadados em fluxos de trabalho específicos de imagem'
    },
    
    howItWorks: {
      title: 'Como funciona',
      content: 'Nosso conversor processa arquivos JPG inteiramente no seu navegador. Suas imagens nunca são enviadas para nenhum servidor, garantindo total privacidade e segurança. A ferramenta lê os dados da imagem JPG, renderiza e salva no formato JFIF padrão com as configurações de qualidade escolhidas.'
    },
    
    tips: {
      title: 'Dicas para obter os melhores resultados',
      tip1: 'Use o controle deslizante de qualidade para equilibrar tamanho do arquivo e qualidade da imagem',
      tip2: 'Para imagens com texto ou detalhes nítidos, use configurações de qualidade mais altas',
      tip3: 'Converta vários arquivos em lote e baixe-os como um arquivo ZIP',
      tip4: 'Use "Otimização automática" para o melhor equilíbrio entre qualidade e tamanho do arquivo',
      tip5: 'Quando a privacidade é importante, remova metadados para obter arquivos menores'
    },
    
    privacy: {
      title: 'Privacidade e segurança',
      content: 'Levamos sua privacidade a sério. Todo o processamento é feito diretamente no seu navegador - seus arquivos nunca são enviados para nenhum servidor. Isso garante segurança e privacidade completas para suas imagens.'
    }
  }
};