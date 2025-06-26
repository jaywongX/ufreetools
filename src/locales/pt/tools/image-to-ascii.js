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
    },
    article: {
      title: "Conversor de Imagem para ASCII: Transforme fotos em arte textual",
      features: {
        title: "Entenda a conversão para ASCII",
        description: "Este <strong>conversor de imagem para ASCII</strong> é um <strong>gerador de arte textual</strong> especializado que transforma imagens comuns em obras de arte usando caracteres ASCII. Nosso <strong>criador de arte ASCII</strong> analisa o brilho de cada pixel e mapeia para caracteres com densidade visual correspondente.<br><br>Diferente de <strong>geradores de texto artístico</strong> básicos, oferecemos opções avançadas como ajuste de largura, múltiplos conjuntos de caracteres, preservação de cores e controle de inversão. Este <strong>conversor ASCII</strong> suporta JPG, PNG e GIF, garantindo compatibilidade com diversas fontes de imagem. Para artistas digitais, programadores e criadores de conteúdo, esta <strong>ferramenta de texto visual</strong> oferece uma maneira única de representar conteúdo visual em formato textual que pode ser facilmente compartilhado ou usado em ambientes restritos.",
        useCases: {
          title: "Aplicações práticas da arte ASCII",
          items: [
            "<strong>Mensagens criativas</strong>: Enriqueça assinaturas de e-mail, posts em redes sociais ou mensagens com <strong>imagens ASCII</strong> únicas",
            "<strong>Projetos de programação</strong>: Integre arte ASCII em interfaces de linha de comando, aplicativos de terminal ou jogos baseados em texto",
            "<strong>Materiais educacionais</strong>: Crie representações visuais acessíveis para ensino em ambientes com limitações gráficas",
            "<strong>Projetos artísticos</strong>: Explore a interseção entre arte visual e tipografia transformando fotos em <strong>obras de arte textual</strong>",
            "<strong>Sistemas legados</strong>: Gere conteúdo visual para computadores antigos ou displays de texto puro",
            "<strong>Animações ASCII</strong>: Converta vídeos ou sequências de imagens em animações baseadas em texto"
          ]
        }
      },
      faq: {
        title: "Perguntas frequentes sobre conversão ASCII",
        items: [
          {
            question: "Que tipo de imagem funciona melhor para arte ASCII?",
            answer: "Imagens com alto contraste, assunto bem definido e composição simples produzem os melhores resultados. Retratos bem iluminados, silhuetas e imagens com contornos marcados são ideais. Evite fundos muito movimentados ou detalhes sutis que podem se perder na conversão."
          },
          {
            question: "Como controlar o nível de detalhe na arte ASCII?",
            answer: "Ajuste a largura (até 200 caracteres) para maior detalhamento. Conjuntos de caracteres 'Padrão' e 'Blocos' oferecem mais gradações. Para controle máximo, defina seus próprios caracteres na opção personalizada."
          },
          {
            question: "Por que minha arte ASCII parece distorcida?",
            answer: "Caracteres de texto são mais altos que largos, causando distorção na conversão de pixels quadrados. Use fontes monoespaçadas (como Courier New) para melhor visualização. O conjunto 'Blocos' também ajuda a manter proporções."
          },
          {
            question: "Posso criar arte ASCII colorida?",
            answer: "Sim! Ative 'Saída colorida' para preservar cores originais. O resultado é gerado em HTML com estilos inline, perfeito para uso na web. Para aplicações de texto puro, use o modo monocromático."
          },
          {
            question: "Como compartilhar minha arte ASCII?",
            answer: "Use 'Copiar' para texto puro (e-mails, documentos) ou 'Baixar como HTML' para versões coloridas. Para compartilhamento rápido, capture a tela do resultado. Programadores podem inserir diretamente em código como strings."
          }
        ]
      },
      guide: {
        title: "Guia passo a passo para criar arte ASCII",
        steps: [
          "<strong>Selecione uma imagem</strong>: Clique em 'Selecionar imagem' e escolha uma foto do seu dispositivo. Prefira imagens com bom contraste e assunto claro.",
          "<strong>Ajuste a largura</strong>: Defina a largura desejada (valores mais altos = mais detalhes). Comece com 100 caracteres e ajuste conforme necessário.",
          "<strong>Escolha caracteres</strong>: Selecione entre conjuntos pré-definidos ou crie seu próprio (digite caracteres do mais escuro ao mais claro).",
          "<strong>Configure opções</strong>: Ative 'Inverter cores' para fundos claros, 'Saída colorida' para manter cores e ajuste fonte/tamanho conforme necessário.",
          "<strong>Gere a arte</strong>: Clique em 'Gerar ASCII' para processar. O algoritmo analisará sua imagem e criará a representação ASCII.",
          "<strong>Ajuste fino</strong>: Compare com a original e refine configurações. Experimente diferentes conjuntos de caracteres para efeitos variados.",
          "<strong>Compartilhe</strong>: Use 'Copiar' para texto puro ou 'Baixar' para versões HTML/PNG. Para programação, cole diretamente no código como string."
        ]
      },
      conclusion: "O conversor de imagem para ASCII transforma fotos comuns em arte textual extraordinária, unindo mundos visual e textual. Esta ferramenta poderosa serve tanto para expressão criativa quanto aplicações práticas em comunicação digital, programação, educação e arte. Ao converter imagens para ASCII, usuários podem representar conceitos visuais em ambientes restritos ou criar interpretações artísticas únicas de conteúdo fotográfico. Seja para destacar comunicações, resolver desafios de compatibilidade ou explorar novas formas de expressão, este gerador de arte ASCII oferece os recursos necessários para transformar pixels em caracteres com precisão e estilo."
    }
  }