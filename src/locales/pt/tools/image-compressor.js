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
    },
    article: {
      title: 'Compressor de Imagens: Guia Completo para Otimização Online',
      
      introduction: {
        title: 'O que é um compressor de imagens?',
        p1: 'Nosso <strong>compressor de imagens</strong> é uma solução avançada para reduzir tamanhos de arquivo mantendo qualidade visual. Seja para <strong>comprimir para 50kb</strong>, <strong>reduzir para 20kb</strong> ou <strong>otimizar para 100kb</strong>, nossa ferramenta oferece flexibilidade total.',
        p2: 'Imagens grandes prejudicam performance de sites, consomem armazenamento e dificultam compartilhamento. Nosso <strong>compressor online</strong> aplica algoritmos inteligentes que preservam detalhes visuais enquanto eliminam dados desnecessários.',
        p3: 'Diferente de compressores básicos, nossa tecnologia analisa conteúdo para aplicar compressão seletiva - áreas menos importantes são mais comprimidas, mantendo clareza em elementos essenciais.'
      },
      
      applications: {
        title: 'Aplicações Práticas',
        scenario1: {
          title: 'Otimização Web',
          content: 'Velocidade impacta experiência do usuário e SEO. Nosso <strong>compressor online</strong> permite reduzir imagens de blogs (como <strong>comprimir para 30kb</strong>) mantendo atrativo visual com carregamento rápido. E-commerces se beneficiam especialmente com nosso <strong>compressor em lote</strong> para catálogos inteiros.'
        },
        scenario2: {
          title: 'Anexos de E-mail',
          content: 'Servidores de e-mail têm limites rígidos. Com <strong>compressão para 500kb</strong>, você envia fotos dentro dos limites mantendo detalhes essenciais. Ideal para profissionais que compartilham imagens técnicas ou imobiliárias.'
        },
        scenario3: {
          title: 'Redes Sociais',
          content: 'Cada plataforma tem requisitos específicos. Nosso <strong>redimensionador</strong> otimiza para Instagram (<strong>200kb</strong>), Facebook e outras redes, equilibrando qualidade e tamanho com precisão.'
        },
        scenario4: {
          title: 'Documentos Oficiais',
          content: 'Sistemas governamentais e aplicativos têm limites restritos. Use nosso <strong>compressor JPG</strong> para fotos 3x4 (<strong>50kb</strong>) ou documentos digitalizados, atendendo requisitos técnicos sem perder legibilidade.'
        },
        scenario5: {
          title: 'Aplicativos Móveis',
          content: 'Desenvolvedores usam nosso <strong>compressor</strong> para reduzir assets de apps, diminuindo tamanho de instalação. Pessoas também utilizam para liberar espaço, convertendo coleções para formatos mais eficientes com nosso <strong>conversor para JPEG</strong>.'
        }
      },
      
      guide: {
        title: 'Como Usar',
        step1: {
          title: 'Envio',
          content: 'Clique em enviar ou arraste imagens. Suportamos JPG, PNG, WebP e <strong>compressão em lote</strong> múltiplos arquivos.'
        },
        step2: {
          title: 'Configuração',
          content: 'Defina nível de compressão ou tamanho alvo (<strong>20kb</strong>, <strong>50kb</strong> etc.). Controle preciso via slider ou use predefinições.'
        },
        step3: {
          title: 'Pré-visualização',
          content: 'Compare original vs comprimido antes de aplicar. Nosso <strong>compressor online</strong> mostra diferenças em tempo real.'
        },
        step4: {
          title: 'Processamento',
          content: 'Clique "Comprimir" para aplicar configurações. Algoritmos avançados trabalham mantendo qualidade máxima possível para o tamanho escolhido.'
        },
        step5: {
          title: 'Download',
          content: 'Baixe individualmente ou em ZIP para <strong>lotes</strong>. Relatórios mostram economia de espaço alcançada (<strong>100kb</strong>, <strong>500kb</strong> etc).'
        }
      },
      
      faq: {
        title: 'Perguntas Frequentes',
        q1: 'Como a compressão mantém qualidade?',
        a1: 'Nosso <strong>compressor</strong> usa algoritmos que analisam conteúdo visual, comprimindo mais áreas menos perceptíveis. Técnicas de codificação avançada e otimização de paleta garantem resultados superiores.',
        
        q2: 'Posso definir tamanhos específicos como 50kb?',
        a2: 'Sim! Digite <strong>50kb</strong>, <strong>20kb</strong> ou qualquer valor. O algoritmo ajusta parâmetros automaticamente para atingir a meta com melhor qualidade possível.',
        
        q3: 'Diferença entre compressão lossy e lossless?',
        a3: '<strong>Lossless</strong> mantém 100% qualidade (redução moderada 20-30%). <strong>Lossy</strong> (nosso padrão) oferece maior compressão (<strong>30kb</strong>, <strong>200kb</strong>) descartando dados menos visuais de forma inteligente.',
        
        q4: 'Melhores formatos para compressão?',
        a4: '<strong>JPEG</strong>: ideal para fotos. <strong>PNG</strong>: texto/transparência. <strong>WebP</strong>: equilíbrio ideal web. Nosso <strong>conversor</strong> recomenda automaticamente o melhor formato.',
        
        q5: 'A imagem ficará pixelada?',
        a5: 'Depende do nível de compressão. Configurações extremas (<strong>20kb</strong>) podem causar artefatos, mas nossa pré-visualização permite ajustes. Para equilíbrio, recomendamos <strong>100-500kb</strong> dependendo do uso.'
      },
      
      relatedTools: {
        title: 'Ferramentas Relacionadas',
        tool1: '<a href="https://imagecompressor.com/" target="_blank">Compressor Online</a>',
        tool2: '<a href="https://imageresizer.com/image-compressor" target="_blank">Otimizador de Imagens</a>',
        tool3: '<a href="https://www.freeconvert.com/image-compressor" target="_blank">Conversor Gratuito</a>'
      },
      
      resources: {
        title: 'Recursos Técnicos',
        resource1: '<a href="https://developer.mozilla.org/pt-BR/docs/Web/Media/Formats/Image_types" target="_blank">MDN: Guia de Formatos</a>',
        resource2: '<a href="https://web.dev/fast/#optimize-your-images" target="_blank">Google: Otimização</a>',
        resource3: '<a href="https://www.w3.org/Graphics/JPEG/" target="_blank">Especificação JPEG</a>'
      },
      
      conclusion: {
        title: 'Conclusão',
        content: 'Em um mundo digital onde performance é crucial, nosso <strong>compressor de imagens</strong> oferece:<br><br>• Soluções precisas (<strong>20kb</strong>, <strong>50kb</strong>, <strong>100kb</strong>)<br>• Processamento em <strong>lote</strong> eficiente<br>• Conversão inteligente entre formatos<br>• Equilíbrio perfeito qualidade/tamanho<br><br>Comece hoje a otimizar suas imagens para web, e-mail, redes sociais ou armazenamento. Nossa ferramenta combina poder profissional com simplicidade, entregando resultados visíveis em poucos cliques.'
      }
    }
  }