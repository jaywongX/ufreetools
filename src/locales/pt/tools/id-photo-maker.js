export default {
    name: 'Criador de Foto para Documentos',
    description: 'Crie fotos profissionais para documentos com fundo e tamanhos personalizáveis',
    upload: {
      title: 'Enviar Imagem',
      dropzone: 'Arraste e solte a imagem aqui ou clique para navegar',
      or: 'ou',
      camera: 'Tirar foto com a câmera',
      constraints: 'Tamanho máximo: 10MB. Formatos: JPG, PNG, WEBP',
      takePicture: 'Tirar foto',
      retake: 'Tirar novamente'
    },
    editing: {
      title: 'Editar Foto',
      faceDetection: 'Detecção facial',
      autoDetect: 'Detecção automática de rosto',
      manualMode: 'Ajuste manual',
      zoom: 'Zoom',
      rotate: 'Rotacionar',
      brightness: 'Brilho',
      contrast: 'Contraste',
      saturation: 'Saturação',
      filters: 'Filtros'
    },
    background: {
      title: 'Fundo',
      original: 'Original',
      white: 'Branco',
      blue: 'Azul',
      red: 'Vermelho',
      custom: 'Cor personalizada',
      transparent: 'Transparente'
    },
    size: {
      title: 'Tamanho da Foto',
      presets: 'Tamanhos predefinidos',
      custom: 'Tamanho personalizado',
      width: 'Largura',
      height: 'Altura',
      unit: 'Unidade',
      mm: 'Milímetros',
      inches: 'Polegadas',
      pixels: 'Pixels'
    },
    presets: {
      passport: 'Passaporte (35×45 mm)',
      visa: 'Visto (2×2 polegadas)',
      drivingLicense: 'Carteira de motorista (2.5×3 polegadas)',
      idCard: 'Carteira de identidade (25×35 mm)',
      linkedin: 'LinkedIn (400×400 pixels)',
      schengen: 'Visto Schengen (35×45 mm)',
      chinese: 'Visto chinês (33×48 mm)',
      indian: 'Visto indiano (2×2 polegadas)'
    },
    output: {
      title: 'Saída',
      preview: 'Pré-visualização',
      grid: 'Várias fotos',
      columns: 'Colunas',
      rows: 'Linhas',
      spacing: 'Espaçamento',
      background: 'Fundo da página',
      paperSize: 'Tamanho do papel',
      download: 'Baixar',
      print: 'Imprimir',
      downloadAs: 'Baixar como',
      jpg: 'Imagem JPG',
      png: 'Imagem PNG',
      pdf: 'Documento PDF'
    },
    actions: {
      apply: 'Aplicar',
      reset: 'Redefinir',
      undo: 'Desfazer',
      redo: 'Refazer',
      save: 'Salvar foto',
      share: 'Compartilhar'
    },
    messages: {
      noFaceDetected: 'Nenhum rosto detectado. Tente ajustar manualmente ou usar uma foto diferente.',
      multipleFacesDetected: 'Múltiplos rostos detectados. Usando o maior rosto.',
      processing: 'Processando sua foto...',
      downloadReady: 'Sua foto está pronta para download',
      photoSaved: 'Foto salva com sucesso'
    }
  }