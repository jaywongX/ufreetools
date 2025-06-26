export default {
    name: 'Marcador de Água para Imagens',
    description: 'Adicione marcas d\'água de texto ou imagem às suas fotos com configurações personalizáveis',
    upload: {
      title: 'Carregar Imagem',
      dropzone: 'Arraste e solte a imagem aqui ou clique para navegar',
      addMore: 'Adicionar mais imagens',
      clearAll: 'Limpar todas',
      maxFiles: 'Máximo de {count} imagens',
      maxSize: 'Tamanho máximo por imagem: {size}MB',
      supportedFormats: 'Formatos suportados: JPG, PNG, WEBP, GIF'
    },
    watermarkType: {
      title: 'Tipo de Marca d\'Água',
      text: 'Texto',
      image: 'Imagem',
      both: 'Texto e Imagem'
    },
    textWatermark: {
      title: 'Marca d\'Água de Texto',
      text: 'Texto',
      font: 'Fonte',
      size: 'Tamanho',
      color: 'Cor',
      opacity: 'Opacidade',
      rotation: 'Rotação',
      shadow: 'Sombra',
      background: 'Fundo',
      padding: 'Espaçamento',
      border: 'Borda',
      spacing: 'Espaçamento entre letras'
    },
    imageWatermark: {
      title: 'Marca d\'Água de Imagem',
      upload: 'Carregar imagem',
      selectLogo: 'Selecionar logo',
      presetLogos: 'Logos pré-definidos',
      size: 'Tamanho',
      opacity: 'Opacidade',
      rotation: 'Rotação',
      offset: 'Deslocamento'
    },
    positioning: {
      title: 'Posicionamento',
      position: 'Posição',
      custom: 'Personalizado',
      xPosition: 'Posição X',
      yPosition: 'Posição Y',
      tiled: 'Modo repetição',
      margin: 'Margem',
      scale: 'Escala automática'
    },
    positions: {
      topLeft: 'Superior esquerdo',
      topCenter: 'Superior centro',
      topRight: 'Superior direito',
      middleLeft: 'Meio esquerdo',
      middleCenter: 'Centro',
      middleRight: 'Meio direito',
      bottomLeft: 'Inferior esquerdo',
      bottomCenter: 'Inferior centro',
      bottomRight: 'Inferior direito',
      custom: 'Posição personalizada'
    },
    output: {
      title: 'Saída',
      quality: 'Qualidade',
      format: 'Formato',
      original: 'Igual à original',
      jpg: 'JPG',
      png: 'PNG',
      webp: 'WebP',
      preview: 'Pré-visualização',
      downloadIndividual: 'Baixar',
      downloadAll: 'Baixar todas',
      downloadAsZip: 'Baixar como ZIP'
    },
    presets: {
      title: 'Predefinições',
      save: 'Salvar configurações',
      load: 'Carregar predefinição',
      delete: 'Excluir predefinição',
      presetName: 'Nome da predefinição'
    },
    actions: {
      apply: 'Aplicar',
      applyToAll: 'Aplicar a todas',
      reset: 'Redefinir',
      preview: 'Pré-visualizar',
      undo: 'Desfazer',
      cancel: 'Cancelar'
    },
    messages: {
      processing: 'Processando...',
      success: 'Marca d\'água aplicada com sucesso',
      error: 'Erro: {error}',
      noImages: 'Adicione imagens primeiro',
      noWatermark: 'Adicione texto ou imagem como marca d\'água',
      presetSaved: 'Predefinição salva',
      presetLoaded: 'Predefinição carregada',
      presetDeleted: 'Predefinição excluída',
      watermarkApplied: 'Marca d\'água aplicada',
      watermarkImageLoadError: 'Falha ao carregar imagem da marca d\'água',
      imageLoadError: 'Falha ao carregar imagem',
      resetSuccess: 'Redefinido',
      downloadStarted: 'Download iniciado',
      downloadError: 'Falha ao baixar imagem',
      imageLoaded: 'Imagem carregada',
      canvasInitError: 'Falha ao inicializar canvas',
      tiledWatermarkError: 'Falha ao criar marca d\'água repetida'
    },
    article: {
      title: "Ferramenta de Marca d'Água: Proteja e marque seus conteúdos visuais",
      features: {
        title: "Tecnologia de marca d'água em imagens",
        description: "Esta <strong>ferramenta de marca d'água</strong> oferece uma solução completa para adicionar <strong>marcas de propriedade</strong> visíveis às suas <strong>imagens digitais</strong>. Nosso <strong>aplicador de marcas d'água online</strong> permite usar tanto <strong>texto</strong> quanto <strong>imagens</strong> para proteger sua propriedade intelectual e reforçar sua identidade visual.<br><br>Com opções avançadas de personalização incluindo controle de opacidade, posicionamento preciso, rotação e ajuste proporcional, você pode criar o <strong>efeito de marca d'água</strong> perfeito - desde um discreto <strong>copyright</strong> até uma <strong>logo destacada</strong> - tudo sem precisar de softwares complexos de edição.",
        useCases: {
          title: "Aplicações práticas de marcas d'água",
          items: [
            "Fotógrafos protegem seus portfolios com informações de copyright",
            "Empresas inserem logos em fotos de produtos para branding",
            "Corretores marcam imagens de imóveis para evitar uso não autorizado",
            "Designers protegem esboços compartilhados com clientes",
            "Criadores de conteúdo marcam posts para redes sociais",
            "Lojas online protegem fotos de produtos contra concorrentes"
          ]
        }
      },
      faq: {
        title: "Perguntas frequentes sobre marcas d'água",
        items: [
          {
            question: "Qual a diferença entre marcas de texto e imagem?",
            answer: "Marcas de texto usam frases personalizáveis como direitos autorais ou URLs, com diversos estilos de fonte, cores e efeitos. São ideais para informações de propriedade. Marcas de imagem usam gráficos como logos ou assinaturas, sendo melhores para identidade visual. Nossa ferramenta suporta ambos os tipos individualmente ou combinados para máxima proteção e branding."
          },
          {
            question: "Como criar uma marca visível mas discreta?",
            answer: "Para marcas eficazes porém sutis, ajuste a opacidade entre 30-50%. Posicione nos cantos ou bordas, evitando o assunto principal. Para texto, use cores contrastantes e considere o modo de repetição com espaçamento amplo. Essas técnicas garantem proteção sem comprometer a qualidade visual."
          },
          {
            question: "Marcas d'água podem ser totalmente removidas?",
            answer: "Nenhuma marca é 100% à prova de remoção, mas marcas bem projetadas dificultam significativamente o uso não autorizado. Marcas posicionadas estrategicamente, com opacidade equilibrada e padrões de repetição são especialmente difíceis de remover sem danos visíveis. Para máxima proteção, combine ambos os tipos e posicione sobre áreas importantes da imagem."
          },
          {
            question: "Quais formatos de imagem são suportados?",
            answer: "A ferramenta trabalha com todos os principais formatos - JPG, PNG, WEBP e GIF. A saída pode ser baixada no formato desejado: PNG para transparência e qualidade máxima, JPG para arquivos menores, ou WebP para equilíbrio entre qualidade e tamanho."
          },
          {
            question: "Posso processar várias imagens de uma vez?",
            answer: "Atualmente processamos uma imagem por vez para garantir precisão no posicionamento e customização. Isso permite ajustes individuais conforme necessário para cada composição. A interface intuitiva agiliza o processo, possibilitando resultados profissionais com poucos cliques."
          }
        ]
      },
      guide: {
        title: "Guia passo a passo para marcar imagens",
        steps: [
          "Clique em 'Carregar Imagem' e selecione a foto a ser marcada",
          "Escolha o tipo de marca: texto para direitos autorais ou imagem para logos",
          "Para texto: digite o conteúdo, selecione fonte, tamanho, cor e opacidade",
          "Para imagens: carregue seu logo e ajuste tamanho e transparência",
          "Use a grade de posicionamento (9 opções) ou defina coordenadas manuais",
          "Ajuste o ângulo de rotação para efeitos diagonais se necessário",
          "Visualize em tempo real e faça ajustes finos até ficar satisfeito",
          "Baixe a imagem marcada no formato desejado (JPG, PNG ou WebP)"
        ]
      },
      conclusion: "Adicionar marcas d'água profissionais é essencial para proteger seu conteúdo visual e fortalecer sua identidade na era digital. Esta ferramenta simplifica o processo, permitindo criar marcas personalizadas sem necessidade de habilidades avançadas ou softwares caros. Seja você fotógrafo, empresário ou criador de conteúdo, incorporar marcas d'água no seu fluxo de trabalho ajuda a salvaguardar sua propriedade intelectual enquanto aumenta o reconhecimento da sua marca quando suas imagens são compartilhadas online."
    }
  }