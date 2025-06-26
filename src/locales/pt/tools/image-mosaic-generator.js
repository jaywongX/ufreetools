export default {
    name: 'Gerador de Mosaico de Imagens',
    description: 'Crie arte em mosaico combinando pequenas imagens em uma composição maior',
    upload: {
      title: 'Carregar Imagem Principal',
      dropzone: 'Arraste e solte a imagem principal aqui ou clique para navegar',
      maxSize: 'Tamanho máximo: 15MB',
      supportedFormats: 'Formatos suportados: JPG, PNG, WEBP'
    },
    tiles: {
      title: 'Imagens de Bloco',
      uploadTiles: 'Carregar Blocos',
      dropzoneTiles: 'Arraste e solte imagens de bloco aqui ou clique para navegar',
      maxTiles: 'Máximo de {count} imagens',
      useFolder: 'Carregar pasta de imagens',
      orUseSample: 'Ou usar galeria de exemplo',
      sampleSets: 'Conjuntos de Blocos Exemplo',
      nature: 'Natureza',
      people: 'Pessoas',
      art: 'Arte',
      abstract: 'Abstrato',
      animals: 'Animais',
      clearAll: 'Limpar Todos os Blocos'
    },
    settings: {
      title: 'Configurações do Mosaico',
      tileSize: 'Tamanho do Bloco',
      small: 'Pequeno (detalhado)',
      medium: 'Médio',
      large: 'Grande (grosseiro)',
      square: 'Quadrado',
      circle: 'Circular',
      applicationMode: 'Modo de Aplicação',
      all: 'Imagem Inteira',
      selectRegion: 'Selecionar Região',
      selectingRegion: 'Selecionando Região...',
      autoDetectFaces: 'Detectar Rostos Automaticamente',
      detectFaces: 'Detectar Rostos',
      detectFacesDescription: 'Identifica rostos na imagem e aplica mosaico automaticamente',
      edgeSmoothing: 'Suavização de Bordas',
      edgeSmoothingDescription: 'Suaviza bordas dos blocos para transições mais naturais',
      custom: 'Personalizado',
      width: 'Largura',
      height: 'Altura',
      tilesWide: 'Blocos na Largura',
      tilesHigh: 'Blocos na Altura',
      colorMatch: 'Correspondência de Cores',
      intensity: 'Intensidade',
      low: 'Baixa',
      high: 'Alta',
      reuseTiles: 'Reutilizar Blocos',
      allowDuplicates: 'Permitir Duplicatas',
      maxUses: 'Usos Máximos por Bloco',
      colorAdjustment: 'Ajuste de Cor',
      adjustTiles: 'Ajustar blocos para corresponder',
      blendOriginal: 'Misturar com Original',
      blendAmount: 'Quantidade de Mistura',
      random: 'Variação Aleatória',
      shuffle: 'Embaralhar Blocos'
    },
    advanced: {
      title: 'Opções Avançadas',
      algorithm: 'Algoritmo de Correspondência',
      algorithms: {
        average: 'Cor Média',
        dominant: 'Cor Dominante',
        histogram: 'Histograma de Cores',
        pattern: 'Correspondência de Padrão'
      },
      tileShape: 'Forma do Bloco',
      shapes: {
        square: 'Quadrado',
        circle: 'Círculo',
        hexagon: 'Hexágono',
        triangle: 'Triângulo',
        random: 'Aleatório'
      },
      tileGap: 'Espaço entre Blocos',
      borderColor: 'Cor da Borda',
      backgroundColor: 'Cor de Fundo'
    },
    output: {
      fileName: 'Nome do Arquivo',
      title: 'Saída',
      preview: 'Pré-visualização',
      original: 'Original',
      mosaic: 'Mosaico',
      sideBySide: 'Comparação',
      zoomIn: 'Ampliar',
      zoomOut: 'Reduzir',
      download: 'Baixar Mosaico',
      asJpg: 'Baixar como JPG',
      asPng: 'Baixar como PNG',
      highRes: 'Alta Resolução',
      resolution: 'Resolução de Saída',
      format: 'Formato',
      quality: 'Qualidade',
      size: 'Tamanho',
      pixel: 'Pixel',
      pleaseSelectImage: 'Selecione uma imagem',
      pleaseSelectImageAndAdjustSettings: 'Selecione uma imagem e ajuste as configurações'
    },
    actions: {
      generate: 'Gerar Mosaico',
      regenerate: 'Regenerar',
      cancel: 'Cancelar',
      reset: 'Redefinir',
      detectFaces: 'Detectar Rostos',
      saveSettings: 'Salvar Configurações',
      loadSettings: 'Carregar Configurações'
    },
    messages: {
      generating: 'Gerando mosaico... Isso pode levar algum tempo.',
      generationComplete: 'Mosaico gerado com sucesso!',
      notEnoughTiles: 'Blocos insuficientes. Carregue mais imagens.',
      tileProcessing: 'Processando blocos: {progress}%',
      downloadStarted: 'Download iniciado',
      settingsSaved: 'Configurações salvas',
      selecting: 'Selecionando região...',
      preview: 'Pré-visualização do mosaico será exibida aqui',
      faceDetected: 'Rosto detectado',
      facesDetected: '{count} rostos detectados',
      noFacesDetected: 'Nenhum rosto detectado',
      loadingModels: 'Carregando modelos de detecção...',
      faceDetectionFailed: 'Falha na detecção de rostos',
      reset: 'Redefinido',
      error: 'Erro: {message}'
    },
    article: {
      title: "Guia Completo do Gerador de Mosaicos - Crie Arte Impressionante",
      intro: {
        title: "O Que É um Gerador de Mosaico e Por Que Você Precisa",
        p1: "<b>Geradores de mosaico de imagens</b> são ferramentas digitais poderosas que transformam fotos comuns em obras de arte extraordinárias, combinando múltiplas imagens pequenas em uma composição maior. Nosso criador de mosaico online gratuito permite que usuários criem mosaicos visuais impressionantes sem necessidade de software profissional ou conhecimento técnico avançado.",
        p2: "<b>Criar arte em mosaico fotográfico</b> tradicionalmente exigia habilidades avançadas de design gráfico ou software especializado caro. Nossa ferramenta baseada na web democratiza essa forma de arte, permitindo que fotógrafos, artistas digitais, educadores e usuários comuns transformem suas imagens em mosaicos cativantes com apenas alguns cliques.",
        p3: "<b>Geradores de mosaico online</b> estão revolucionando a forma como as pessoas abordam a criatividade visual, transformando fotos comuns em obras de arte que geram conversas. Seja para criar presentes únicos, desenvolver materiais de marketing impactantes ou simplesmente explorar novas mídias artísticas, nosso gerador oferece o equilíbrio perfeito entre poder e facilidade de uso."
      },
      useCases: {
        title: "Aplicações Práticas do Gerador de Mosaico",
        case1: "<b>Criação de Presentes Personalizados</b>: Transforme fotos significativas em presentes emocionantes com camadas de memórias.",
        case2: "<b>Materiais de Marketing</b>: Empresas criam conteúdo visual impactante que engaja audiências em múltiplos pontos de contato.",
        case3: "<b>Projetos Educacionais</b>: Professores utilizam mosaicos para criar experiências de aprendizagem envolventes em diversas disciplinas.",
        case4: "<b>Instalações Artísticas</b>: Artistas criam obras em grande escala que convidam à interação em diferentes distâncias de visualização.",
        case5: "<b>Conteúdo para Mídias Sociais</b>: Criadores desenvolvem posts visualmente únicos que se destacam em feeds lotados."
      },
      tutorial: {
        title: "Como Criar Mosaicos com Nossa Ferramenta",
        intro: "Siga estes passos simples para transformar suas imagens em mosaicos impressionantes:",
        step1: {
          title: "Passo 1: Carregue Sua Imagem Principal",
          description: "Selecione a imagem que servirá como base para seu mosaico. Formatos suportados incluem JPG, PNG e WEBP."
        },
        step2: {
          title: "Passo 2: Adicione Imagens de Bloco",
          description: "Forneça as imagens que comporão o mosaico. Use nossa galeria de exemplos ou carregue suas próprias fotos."
        },
        step3: {
          title: "Passo 3: Ajuste as Configurações",
          description: "Personalize tamanho, forma e aplicação dos blocos para alcançar o efeito desejado."
        },
        step4: {
          title: "Passo 4: Gere e Baixe Seu Mosaico",
          description: "Processe e salve sua criação para compartilhamento ou impressão."
        }
      },
      mosaicTypes: {
        title: "Tipos de Mosaicos de Imagem",
        intro: "Explore diferentes estilos de mosaicos para diversos efeitos artísticos:",
        photomosaic: {
          title: "Fotomosaico",
          description: "O estilo clássico onde pequenas fotos formam uma imagem maior quando vistas à distância."
        },
        pixelated: {
          title: "Mosaico Pixelizado",
          description: "Efeito retrô que transforma imagens em composições baseadas em blocos coloridos."
        },
        geometric: {
          title: "Mosaico Geométrico",
          description: "Abordagem moderna usando formas diversas para criar padrões artísticos."
        }
      },
      faq: {
        title: "Perguntas Frequentes",
        q1: "Quantas imagens de bloco são necessárias?",
        a1: "Recomendamos 100-200 imagens para mosaicos detalhados, mas você pode começar com menos.",
        
        q2: "Que tipo de imagem funciona melhor?",
        a2: "Imagens com bom contraste e elementos reconhecíveis produzem os melhores resultados.",
        
        q3: "Como criar mosaicos temáticos?",
        a3: "Use imagens de bloco relacionadas ao tema da imagem principal para conexões visuais significativas.",
        
        q4: "Qual algoritmo de correspondência devo usar?",
        a4: "Experimente diferentes opções para encontrar o que melhor se adapta ao seu projeto.",
        
        q5: "Posso imprimir mosaicos em grande formato?",
        a5: "Sim, nossa ferramenta oferece opções de alta resolução adequadas para impressão profissional."
      },
      relatedTools: {
        title: "Ferramentas Relacionadas",
        description: "Complemente seu fluxo de trabalho criativo:",
        tool1: {
          name: "Filtros de Imagem",
          url: "https://www.ufreetools.com/tool/image-filters",
          description: "Aplique efeitos artísticos antes de criar mosaicos."
        },
        tool2: {
          name: "Visualizador EXIF",
          url: "https://www.ufreetools.com/tool/image-exif-viewer",
          description: "Analise metadados de suas fotos."
        },
        tool3: {
          name: "Redimensionador em Lote",
          url: "https://www.ufreetools.com/tool/image-batch-resizer",
          description: "Prepare múltiplas imagens simultaneamente."
        },
        tool4: {
          name: "Extrator de Cores",
          url: "https://www.ufreetools.com/tool/image-color-extractor",
          description: "Analise paletas de cores para melhor correspondência."
        }
      },
      resources: {
        title: "Recursos Profissionais",
        resource1: {
          name: "História da Arte em Mosaico",
          url: "https://www.artehistoria.com",
          description: "Explore as origens e evolução desta forma artística."
        },
        resource2: {
          name: "Técnicas de Mosaico Digital",
          url: "http://www.digitalart.com",
          description: "Aprenda métodos avançados para criação de mosaicos."
        },
        resource3: {
          name: "Revista de Arte Digital",
          url: "https://www.digitalartmag.com",
          description: "Mantenha-se atualizado com as últimas tendências em arte digital."
        }
      }
    }
  }