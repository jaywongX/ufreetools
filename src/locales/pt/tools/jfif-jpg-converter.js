export default {
  name: 'Conversor JFIF para JPG',
  description: 'Converta imagens JFIF para formato JPG online com alta qualidade e múltiplas opções',
  tags: ['imagem', 'conversão', 'jpg', 'jfif', 'jpeg', 'formato', 'ferramenta'],

  meta: {
    title: 'Conversor JFIF para JPG - Ferramenta Online Gratuita',
    description: 'Converta JFIF para JPG gratuitamente. Conversão rápida e segura diretamente no navegador, suporte a processamento em lote, pré-visualização e configurações avançadas de qualidade. Sem marcas d\'água, sem necessidade de registro.'
  },

  upload: {
    title: 'Conversor JFIF para JPG',
    subtitle: 'Converta imagens JFIF para JPG com qualidade perfeita',
    dropzone: 'Arraste e solte seus arquivos JFIF aqui',
    dropzoneActive: 'Solte os arquivos para iniciar a conversão',
    maxSize: 'Tamanho máximo do arquivo: 50MB',
    supportedFormats: 'Formatos suportados: JFIF, JPEG, JPG'
  },

  settings: {
    title: 'Configurações de Conversão',
    advanced: 'Configurações Avançadas',
    quality: {
      label: 'Qualidade da Imagem',
      description: 'Qualidade maior resulta em arquivos maiores',
      auto: 'Otimização Automática (Recomendado)'
    },
    qualityLabels: {
      maximum: 'Qualidade Máxima',
      high: 'Alta Qualidade',
      good: 'Boa Qualidade',
      medium: 'Qualidade Média',
      low: 'Baixa Qualidade',
      veryLow: 'Qualidade Muito Baixa'
    },
    metadata: {
      label: 'Metadados da Imagem',
      preserve: 'Manter todos os metadados (EXIF, GPS etc.)',
      strip: 'Remover todos os metadados (arquivos menores)',
      keepBasic: 'Manter apenas metadados básicos'
    },
    filenameOption: 'Nome do Arquivo de Saída',
    filenameOriginal: 'Original',
    filenameConverted: 'Adicionar Prefixo',
    filenameCustom: 'Personalizado',
    filenameTemplatePlaceholder: 'Exemplo: convertido-{nome}',
    filenameTemplateHelp: 'Use {nome} para inserir o nome original',
    preserveMetadata: 'Preservar Metadados da Imagem'
  },

  preview: {
    title: 'Pré-visualização',
    before: 'JFIF Original',
    after: 'Pré-visualização JPG',
    noPreview: 'Nenhuma pré-visualização disponível',
    togglePreview: 'Mostrar/Ocultar Pré-visualização',
    imageDetails: 'Detalhes da Imagem'
  },

  fileTable: {
    fileName: 'Nome do Arquivo',
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
    title: 'Arquivos Convertidos',
    summary: '{count} arquivos convertidos, economizando {saved} de espaço',
    originalName: 'Nome Original',
    convertedName: 'Nome Convertido',
    originalSize: 'Tamanho Original',
    convertedSize: 'Novo Tamanho',
    compressionRate: 'Taxa de Compressão',
    actions: 'Ações',
    noResults: 'Nenhum resultado de conversão'
  },

  actions: {
    selectFile: 'Selecionar Arquivo',
    addMore: 'Adicionar Mais',
    clear: 'Limpar Arquivos',
    convertAll: 'Converter Todos',
    converting: 'Convertendo...',
    download: 'Baixar',
    downloadAll: 'Baixar Tudo',
    clearResults: 'Limpar Resultados',
    viewDetails: 'Ver Detalhes',
    compare: 'Comparar',
    retry: 'Tentar Novamente',
    cancelAll: 'Cancelar',
    optimizeAll: 'Otimizar Automaticamente'
  },

  messages: {
    noValidFiles: 'Selecione arquivos JFIF ou JPEG válidos.',
    conversionError: 'Erro ao converter arquivo. Tente novamente.',
    conversionSuccess: 'Todos os arquivos convertidos com sucesso!',
    partialSuccess: '{success} de {total} arquivos convertidos com sucesso.',
    downloadStarted: 'Download iniciado...',
    processingFiles: 'Processando seus arquivos...',
    dragActive: 'Arraste arquivos para aqui para enviar',
    fileSizeExceeded: 'Arquivo excede o limite de 50MB',
    unsupportedFormat: 'Formato de arquivo não suportado'
  },

  history: {
    title: 'Conversões Recentes',
    empty: 'Nenhuma conversão recente',
    clear: 'Limpar Histórico',
    restore: 'Restaurar Arquivos'
  },

  info: {
    title: 'Sobre Conversão JFIF para JPG',
    description: 'Nosso conversor permite converter rapidamente arquivos JFIF para o formato JPG mais amplamente compatível, com todo processamento feito diretamente no seu navegador.',
    
    whatIs: {
      title: 'O que é JFIF?',
      content: 'JFIF (JPEG File Interchange Format) é um padrão para arquivos JPEG. Ele inclui informações como resolução, proporção e outros metadados para garantir que imagens JPEG sejam exibidas corretamente em diferentes dispositivos. Embora JFIF e JPG sejam tecnicamente relacionados, alguns softwares podem ter melhor compatibilidade com um ou outro.'
    },
    
    whyConvert: {
      title: 'Por que converter JFIF para JPG?',
      reason1: 'Melhor compatibilidade com aplicativos e dispositivos',
      reason2: 'Facilidade para upload em sites que podem rejeitar JFIF',
      reason3: 'Padronizar sua coleção de imagens com extensões consistentes',
      reason4: 'Resolver problemas de abertura ou exibição em alguns programas'
    },
    
    howItWorks: {
      title: 'Como Funciona',
      content: 'Nosso conversor processa arquivos JFIF diretamente no seu navegador. Suas imagens nunca são enviadas para servidores, garantindo privacidade e segurança total. A ferramenta lê os dados da imagem JFIF, renderiza e salva no formato JPG padrão com as configurações de qualidade escolhidas.'
    },
    
    tips: {
      title: 'Dicas para Melhores Resultados',
      tip1: 'Use o controle deslizante para equilibrar tamanho e qualidade',
      tip2: 'Para imagens com texto ou detalhes nítidos, use qualidade mais alta',
      tip3: 'Converta vários arquivos de uma vez e baixe como ZIP',
      tip4: 'Use "Otimização Automática" para melhor equilíbrio',
      tip5: 'Remova metadados para arquivos menores quando privacidade for importante'
    },
    
    privacy: {
      title: 'Privacidade e Segurança',
      content: 'Levamos sua privacidade a sério. Todo processamento é feito no seu navegador - seus arquivos nunca são enviados para servidores. Isso garante segurança e privacidade totais para suas imagens.'
    }
  }
};