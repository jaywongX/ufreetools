export default {
  name: 'Gerador de QR Code',
  description: 'Crie QR Codes personalizáveis para URLs, textos e mais',

  // Opções de configuração
  options: {
    content: 'Conteúdo do QR Code',
    contentType: 'Tipo de conteúdo',
    errorCorrectionLevel: 'Nível de correção de erros',
    size: 'Tamanho',
    margin: 'Margem',
    foregroundColor: 'Cor principal',
    backgroundColor: 'Cor de fundo',
    logo: 'Adicionar Logo',
    logoSize: 'Tamanho do Logo',
    cornerRadius: 'Cantos arredondados'
  },

  // Tipos de conteúdo
  contentTypes: {
    url: 'URL',
    text: 'Texto simples',
    email: 'E-mail',
    phone: 'Telefone',
    sms: 'SMS',
    wifi: 'Rede Wi-Fi',
    vcard: 'Cartão de visita (vCard)',
    mecard: 'Cartão de visita (MeCard)'
  },

  // Níveis de correção
  errorLevels: {
    L: 'Baixo (7%)',
    M: 'Médio (15%)',
    Q: 'Alto (25%)',
    H: 'Máximo (30%)'
  },

  // Ações
  actions: {
    generate: 'Gerar QR Code',
    download: 'Baixar',
    downloadSVG: 'Baixar SVG',
    downloadPNG: 'Baixar PNG',
    copy: 'Copiar imagem',
    clear: 'Limpar',
    uploadLogo: 'Enviar Logo'
  },

  // Modelos pré-definidos
  templates: {
    title: 'Modelos rápidos',
    confirmReplace: 'Deseja substituir o conteúdo atual?',
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    url: {
      name: 'Link de site'
    },
    email: {
      name: 'Endereço de e-mail'
    },
    phone: {
      name: 'Número de telefone'
    },
    sms: {
      name: 'Mensagem SMS'
    },
    wifi: {
      name: 'Configuração Wi-Fi',
      example: {
        ssid: 'Nome da rede',
        password: 'Senha'
      }
    },
    geo: {
      name: 'Localização geográfica'
    }
  },

  // Aparência
  appearance: {
    title: 'Personalização'
  },

  // Visualização
  preview: {
    title: 'Pré-visualização',
    generating: 'Gerando...',
    clickGenerateButton: 'Clique em "Gerar QR Code"',
    clickToDownload: 'Clique para baixar'
  },

  // Dicas
  tips: {
    title: 'Dicas úteis',
    saveToPrint: 'Você pode salvar o QR Code como imagem para impressão ou compartilhamento.',
    errorCorrection: 'Níveis mais altos de correção permitem que o código seja lido mesmo com danos parciais.'
  },

  // Configurações Wi-Fi
  wifi: {
    ssid: 'Nome da rede (SSID)',
    password: 'Senha',
    encryption: 'Tipo de criptografia',
    hidden: 'Rede oculta'
  },

  // Placeholders
  placeholders: {
    content: 'Digite texto, link ou outro conteúdo...'
  },

  // Contagem de caracteres
  characters: 'caracteres',

  maxChars: 'Recomendado até 300 caracteres',

  // Mensagens
  messages: {
    copied: 'Copiado para a área de transferência!',
    generated: 'QR Code gerado com sucesso',
    contentRequired: 'Por favor, insira o conteúdo',
    downloaded: 'QR Code baixado',
    confirmReplace: 'Clique para confirmar a substituição',
    contentUpdated: 'Conteúdo atualizado',
    changesCancelled: 'Alterações canceladas',
    invalidUrl: 'URL inválida',
    invalidEmail: 'E-mail inválido',
    invalidPhone: 'Telefone inválido',
    logoTooBig: 'Logo muito grande (máx. 1MB)'
  },

  // Erros
  errors: {
    canvasNotReady: 'Elemento canvas não está pronto',
    generationError: 'Erro ao gerar QR Code',
    generationErrorWithMessage: 'Erro ao gerar QR Code: {message}',
    downloadError: 'Erro ao baixar QR Code: {message}'
  }
};