export default {
    name: 'Extrator de Quadros GIF',
    description: 'Extrai quadros individuais de animações GIF',
    uploadBtn: 'Selecionar GIF',
    resetBtn: 'Redefinir',
    extractBtn: 'Extrair Quadros',
    extractingBtn: 'Extraindo...',
    downloadAllBtn: 'Baixar Todos os Quadros',
    upload: {
      title: 'Carregar GIF',
      dropzone: 'Arraste e solte um arquivo GIF aqui ou clique para navegar',
      maxSize: 'Tamanho máximo: 20MB',
      onlyGif: 'Apenas arquivos GIF',
      selectGif: 'Selecione um arquivo GIF'
    },
    analysis: {
      title: 'Informações do GIF',
      dimensions: 'Dimensões',
      frameCount: 'Número de quadros',
      duration: 'Duração',
      fps: 'Quadros por segundo',
      fileSize: 'Tamanho do arquivo',
      loopCount: 'Número de loops',
      infinite: 'Infinito',
      fileName: 'Nome do arquivo',
      size: 'Tamanho',
      totalFrames: 'Total de quadros',
      notExtracted: 'Não extraídos'
    },
    extraction: {
      title: 'Extração de Quadros',
      selectFrames: 'Selecionar quadros',
      allFrames: 'Todos os quadros',
      rangeOfFrames: 'Intervalo de quadros',
      from: 'De',
      to: 'Até',
      specificFrames: 'Quadros específicos',
      frameNumbers: 'Números dos quadros (separados por vírgula)',
      everyNth: 'A cada N quadros',
      nth: 'A cada',
      frames: 'quadros',
      selectFirst: 'Primeiro quadro',
      selectLast: 'Último quadro',
      selectMiddle: 'Quadro do meio',
      selectKeyFrames: 'Detectar quadros-chave automaticamente'
    },
    output: {
      title: 'Configurações de Exportação',
      format: 'Formato de saída',
      png: 'PNG',
      jpeg: 'JPEG',
      webp: 'WebP',
      scaling: 'Escala',
      originalSize: 'Tamanho original',
      customSize: 'Tamanho personalizado',
      width: 'Largura',
      height: 'Altura',
      quality: 'Qualidade',
      qualityValue: 'Qualidade: {value}%',
      lowQuality: 'Baixa qualidade (arquivos menores)',
      highQuality: 'Alta qualidade (arquivos maiores)',
      naming: 'Nomeação de arquivos',
      pattern: 'Padrão',
      filename: 'Nome original',
      framenumber: 'Número do quadro',
      timestamp: 'Timestamp',
      preview: 'Pré-visualização',
      downloadOptions: 'Opções de download',
      separateFiles: 'Arquivos separados',
      zipArchive: 'Arquivo ZIP',
      spritesheet: 'Spritesheet',
      gridSize: 'Tamanho da grade',
      columns: 'Colunas',
      animation: 'Nova animação'
    },
    frames: {
      title: 'Quadros Extraídos',
      frameInfo: 'Quadro {number} de {total}',
      frame: 'Quadro',
      delay: 'Atraso: {delay}ms',
      downloadFrame: 'Baixar',
      copyFrame: 'Copiar',
      selectAll: 'Selecionar todos',
      unselectAll: 'Desselecionar todos',
      invertSelection: 'Inverter seleção',
      noFrames: 'Nenhum quadro extraído',
      extractFirst: 'Extraia os quadros primeiro'
    },
    actions: {
      extract: 'Extrair Quadros',
      preview: 'Pré-visualizar',
      downloadSelected: 'Baixar selecionados',
      downloadAll: 'Baixar todos',
      createSpritesheet: 'Criar Spritesheet',
      createNewGif: 'Criar novo GIF',
      cancel: 'Cancelar',
      processing: 'Processando...'
    },
    messages: {
      extractionComplete: 'Extração de quadros concluída',
      extracting: 'Extraindo quadros...',
      noFramesSelected: 'Nenhum quadro selecionado',
      processingGif: 'Processando GIF...',
      invalidGif: 'Arquivo GIF inválido',
      framesCopied: 'Quadros copiados para a área de transferência',
      downloadStarted: 'Download iniciado',
      spritesheetCreated: 'Spritesheet criada com sucesso',
      frameDownloaded: 'Quadro baixado',
      preparingFrames: 'Preparando todos os quadros, aguarde...',
      allFramesDownloaded: 'Todos os quadros baixados',
      downloadError: 'Falha ao baixar todos os quadros',
      resetComplete: 'Redefinição concluída',
      fileEmpty: 'Arquivo vazio',
    },
    article: {
      title: "Extrator de Quadros GIF: Analise e extraia quadros de animações",
      features: {
        title: "Entendendo a extração de quadros GIF",
        description: "O <strong>Extrator de Quadros GIF</strong> é uma ferramenta profissional projetada para decompor arquivos GIF animados em quadros individuais. Este poderoso <strong>decompressor de animações</strong> oferece métodos abrangentes para analisar e extrair cada imagem estática que compõe um GIF, permitindo que você isole momentos específicos de qualquer <strong>sequência animada</strong>.<br><br>Nosso <strong>separador GIF</strong> oferece múltiplas opções de formato de saída (PNG, JPEG, WebP), configurações de qualidade de compressão e navegação intuitiva por quadros. A ferramenta detecta automaticamente e exibe <strong>metadados básicos do GIF</strong>, incluindo dimensões, número de quadros, tamanho do arquivo e tempo de exibição de cada quadro. Após a extração, você pode visualizar cada <strong>imagem do quadro</strong>, baixar quadros individuais ou exportar todos os quadros juntos em um arquivo ZIP para edição ou análise posterior.",
        useCases: {
          title: "Cenários comuns de uso da extração de quadros GIF",
          items: [
            "Designers gráficos extraindo quadros específicos de GIFs animados para modificação e integração em novos designs ou apresentações",
            "Desenvolvedores web separando quadros de animações para criar spinners de carregamento personalizados, indicadores de progresso ou spritesheets",
            "Artistas digitais analisando técnicas de animação quadro a quadro em GIFs existentes para aprimorar suas próprias habilidades de animação",
            "Criadores de conteúdo extraindo quadros-chave de reações animadas ou memes para usar como imagens estáticas em posts de mídia social",
            "Educadores e redatores técnicos capturando estágios específicos de tutoriais animados ou demonstrações para inclusão em materiais instrucionais",
            "Analistas de movimento e pesquisadores extraindo quadros sequenciais para estudar padrões de movimento, visualizações físicas ou animações científicas"
          ]
        }
      },
      faq: {
        title: "Perguntas frequentes sobre extração de quadros GIF",
        items: [
          {
            question: "Qual é o tamanho máximo de arquivo GIF que esta ferramenta pode processar?",
            answer: "Nosso Extrator de Quadros GIF foi projetado para processar arquivos GIF de até 20MB. Esse limite acomoda a maioria dos GIFs animados encontrados na web, garantindo desempenho ideal. Para GIFs maiores, recomendamos usar software de edição de vídeo ou ferramentas profissionais de animação. A velocidade de extração depende do tamanho do arquivo e do número de quadros na animação - arquivos grandes com muitos quadros naturalmente exigem mais tempo de processamento do que animações menores com menos quadros."
          },
          {
            question: "Qual formato de saída devo escolher para os quadros extraídos?",
            answer: "O melhor formato de saída depende de suas necessidades específicas: PNG é ideal para manter a mais alta qualidade e suporte a transparência, perfeito quando você precisa preservar canais alfa em quadros GIF ou fazer edições posteriores. JPEG oferece arquivos menores mas não suporta transparência e pode introduzir artefatos de compressão, sendo adequado para imagens simples ou quando o tamanho do arquivo é crucial para publicação web. WebP oferece um bom equilíbrio entre qualidade e compressão, suportando transparência com arquivos menores que PNG, sendo uma excelente escolha moderna se seu software suportar este formato."
          },
          {
            question: "Como criar uma nova animação a partir dos quadros extraídos?",
            answer: "Após extrair quadros com nosso Extrator de Quadros GIF, você pode criar novas animações de várias maneiras: 1) Usando software de animação como Adobe Animate, After Effects ou alternativas gratuitas como GIMP para importar os quadros extraídos e exportar como novo GIF com temporização personalizada. 2) Ferramentas online como EZGIF ou Canva podem importar sequências de imagens e convertê-las em GIFs com configurações ajustáveis. 3) Para desenvolvedores, considere usar animações CSS ou bibliotecas JavaScript como GSAP para criar animações web a partir das imagens dos quadros. Você pode modificar quadros individuais antes de recombiná-los, criando versões aprimoradas ou editadas do GIF original."
          },
          {
            question: "Por que alguns quadros extraídos parecem diferentes do que vejo no GIF?",
            answer: "Diferenças entre quadros extraídos e o que você vê ao reproduzir um GIF animado podem ter várias causas: 1) GIFs frequentemente usam técnicas de otimização como áreas transparentes ou tratamento que só faz sentido na sequência. 2) Alguns quadros podem ser exibidos por tempo muito curto na animação, sendo quase invisíveis durante a reprodução mas visíveis quando extraídos. 3) Alguns visualizadores de GIF podem aplicar mistura de quadros ou interpolação para suavizar a animação. 4) O GIF pode usar tabelas de cores locais, alterando a paleta entre quadros. Nosso Extrator de Quadros GIF preserva os dados exatos de pixels armazenados no arquivo GIF para cada quadro, fornecendo a representação mais precisa dos quadros originais."
          },
          {
            question: "O que podemos aprender com os tempos de atraso dos quadros?",
            answer: "Os tempos de atraso em GIFs fornecem insights valiosos sobre o ritmo e cadência da animação. O atraso de cada quadro (em milissegundos) revela: 1) A velocidade geral da animação - atrasos curtos criam animações mais rápidas, enquanto atrasos longos desaceleram a ação. 2) Padrões temporais que enfatizam pontos, onde a animação pausa em certos quadros para efeito. 3) Técnicas de animação como 'ease-in' ou 'ease-out', onde os atrasos dos quadros mudam gradualmente. 4) Oportunidades potenciais de otimização - quadros com atrasos idênticos ou muito similares podem ser candidatos à padronização. Nosso Extrator de Quadros GIF exibe esses valores de atraso para cada quadro extraído, ajudando você a entender a estrutura temporal da animação original."
          }
        ]
      },
      guide: {
        title: "Guia passo a passo para usar o Extrator de Quadros GIF",
        steps: [
          "Clique no botão <strong>Selecionar GIF</strong> no topo da interface da ferramenta para escolher o arquivo GIF animado que deseja processar em seu dispositivo. A ferramenta suporta arquivos GIF de até 20MB.",
          "Após o upload, verifique o painel <strong>Informações do GIF</strong> que aparece à esquerda, mostrando detalhes como dimensões, tamanho do arquivo e número de quadros para confirmar que selecionou o arquivo correto.",
          "Clique no botão <strong>Extrair Quadros</strong> na barra de ferramentas superior para iniciar o processo de extração. Um indicador de progresso será exibido enquanto a ferramenta analisa e extrai cada quadro do GIF.",
          "Selecione seu <strong>formato de saída</strong> preferido (PNG, JPEG, WebP) nas opções do painel esquerdo. Se escolher JPEG ou WebP, você pode ajustar o controle deslizante de qualidade para equilibrar qualidade da imagem e tamanho do arquivo.",
          "Navegue pelos quadros extraídos exibidos na visualização em grade no lado direito da ferramenta. Cada miniatura mostra o número do quadro e seu tempo de atraso (quanto tempo o quadro é exibido na animação).",
          "Para salvar um quadro individual, passe o mouse sobre qualquer miniatura e clique no ícone de download que aparece. O quadro será salvo em seu dispositivo no formato de saída selecionado.",
          "Para baixar todos os quadros extraídos de uma vez, clique no botão <strong>Baixar Todos os Quadros</strong> na barra de ferramentas. Isso criará um arquivo ZIP contendo todos os quadros no formato selecionado, facilitando o armazenamento e edição posterior."
        ]
      },
      conclusion: "O Extrator de Quadros GIF fornece uma solução abrangente para decompor GIFs animados em seus quadros constituintes. Seja você um designer buscando imagens específicas de uma animação, um desenvolvedor criando animações web personalizadas, ou um educador analisando sequências visuais, esta ferramenta oferece extração precisa quadro a quadro e opções flexíveis de saída. Ao converter animações temporizadas em sequências de imagens estáticas, você ganha controle total sobre o conteúdo do GIF, permitindo edição avançada, análise e reutilização do material animado. Como os GIFs continuam sendo um meio popular para expressar ideias, reações e demonstrações na web, a capacidade de extrair e manipular quadros individuais permanece uma habilidade essencial para criadores de conteúdo digital e analistas."
    }
  }