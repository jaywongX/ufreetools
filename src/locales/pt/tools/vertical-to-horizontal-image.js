export default {
    name: 'Conversor de Retrato para Paisagem',
    description: 'Converte imagens verticais (retrato) para formato horizontal (paisagem) com múltiplas opções de conversão',
    
    upload: {
      title: 'Enviar imagem',
      dropzone: 'Arraste e solte a imagem aqui',
      maxSize: 'Tamanho máximo: 10MB',
      supportedFormats: 'Formatos suportados: JPG, PNG, WEBP, GIF'
    },
    
    settings: {
      title: 'Configurações de conversão',
      presets: 'Predefinições rápidas',
      conversionMode: 'Modo de conversão',
      modes: {
        rotate: 'Rotação',
        fill: 'Preencher fundo',
        blur: 'Desfocar fundo',
        stretch: 'Esticar bordas',
        dualColor: 'Fundo bicolor'
      },
      rotationAngle: 'Ângulo de rotação',
      fillColor: 'Cor de fundo',
      blurRadius: 'Intensidade do desfoque',
      stretchEdges: 'Grau de esticamento',
      leftColor: 'Cor esquerda',
      rightColor: 'Cor direita',
      sizeOption: 'Configurações de tamanho',
      sizeModes: {
        auto: 'Tamanho automático',
        preset: 'Tamanhos pré-definidos',
        custom: 'Tamanho personalizado'
      },
      sizePresets: 'Predefinições de tamanho',
      outputSize: 'Tamanho de saída',
      width: 'Largura',
      height: 'Altura',
      dimensionsHint: 'Insira as dimensões em pixels',
      autoSize: 'Calcular tamanho automaticamente',
      outputFormat: 'Formato de saída',
      quality: 'Qualidade da imagem',
      advancedOptions: 'Opções avançadas',
      preserveRatio: 'Manter proporção',
      sharpen: 'Nitidez',
      addWatermark: 'Adicionar marca d\'água',
      watermarkPlaceholder: 'Texto da marca d\'água',
      watermarkColor: 'Cor da marca d\'água'
    },
    
    output: {
      preview: 'Pré-visualização',
      dimensions: 'Dimensões',
      before: 'Antes',
      after: 'Depois'
    },
    
    actions: {
      selectImage: 'Selecionar imagem',
      convert: 'Converter imagem',
      download: 'Baixar imagem',
      reset: 'Remover',
      showSideBySide: 'Mostrar comparação',
      hideComparison: 'Ocultar comparação',
      hideSideBySide: 'Fechar'
    },
    
    messages: {
      processing: 'Processando imagem...',
      convertPrompt: 'O resultado aparecerá aqui após a conversão',
      error: 'Ocorreu um erro ao processar a imagem',
      success: 'Conversão concluída com sucesso!'
    },
  
    examples: {
      title: 'Dicas de uso',
      social: 'Ideal para posts em redes sociais, onde imagens horizontais performam melhor',
      socialTip: 'Use o modo desfoque para melhores resultados em redes sociais',
      website: 'Crie banners para sites e blogs',
      websiteTip: 'O modo bicolor é perfeito para banners web'
    },
  
    help: {
      title: 'Como usar esta ferramenta',
      description: 'Esta ferramenta permite converter imagens verticais (retrato) para formato horizontal (paisagem) mantendo a qualidade visual.',
      example1: {
        title: 'Posts para redes sociais',
        description: 'Converta fotos retrato para formato horizontal com fundo desfocado'
      },
      example2: {
        title: 'Banners para sites',
        description: 'Crie cabeçalhos e banners usando preenchimento colorido'
      }
    },
  
    article: {
      title: "Conversão de Retrato para Paisagem: Guia Completo",
      
      intro: {
        title: "Funcionalidades e aplicações",
        content: `
          <p>Nossa <strong>ferramenta de conversão</strong> transforma imagens verticais em formato horizontal mantendo a qualidade visual. Oferece múltiplos métodos incluindo desfoque de fundo, preenchimento sólido, gradiente bicolor, esticamento de bordas e ajuste de rotação.</p>
          
          <p>Principais recursos:</p>
          <ul>
            <li><strong>Múltiplos modos</strong> para diferentes estilos visuais</li>
            <li><strong>Otimização</strong> para redes sociais com tamanhos pré-definidos</li>
            <li><strong>Opções avançadas</strong> como nitidez e marca d\'água</li>
            <li><strong>Alta qualidade</strong> com suporte a vários formatos</li>
          </ul>
          
          <h4>Aplicações comuns:</h4>
          
          <p><strong>Redes sociais</strong>: Converter fotos verticais para posts horizontais em plataformas como Facebook e YouTube.</p>
          
          <p><strong>Banners web</strong>: Criar cabeçalhos a partir de fotos de produtos ou retratos.</p>
          
          <p><strong>Marketing digital</strong>: Ajustar imagens para formatos publicitários.</p>
          
          <p><strong>Miniaturas de vídeo</strong>: Converter capturas verticais para miniaturas horizontais.</p>
          
          <p><strong>Apresentações</strong>: Adaptar imagens para slides em PowerPoint e similares.</p>
        `
      },
      
      faq: {
        title: "Perguntas frequentes",
        q1: "Por que converter retrato para paisagem?",
        a1: "Imagens horizontais performam melhor em redes sociais, sites e materiais de marketing, com maior engajamento.",
        q2: "Há perda de qualidade na conversão?",
        a2: "Não, nossa ferramenta mantém a qualidade usando técnicas avançadas como desfoque e preenchimento.",
        q3: "Qual modo usar para redes sociais?",
        a3: "O modo de fundo desfocado geralmente funciona melhor, mantendo o foco no assunto principal.",
        q4: "Quais são os tamanhos ideais?",
        a4: "Proporções comuns incluem 16:9 (widescreen) e tamanhos específicos como 1200×630 para Facebook.",
        q5: "Posso adicionar marca d\'água?",
        a5: "Sim, a ferramenta inclui opção de marca d\'água personalizável.",
        q6: "Funciona em dispositivos móveis?",
        a6: "Sim, a ferramenta é totalmente responsiva e funciona em smartphones e tablets."
      },
      
      tutorial: {
        title: "Guia passo a passo",
        step1: "Envie sua imagem arrastando para a área de upload ou clicando em \"Selecionar imagem\".",
        step2: "Escolha o modo de conversão: desfoque, preenchimento, bicolor, esticar ou rotacionar.",
        step3: "Ajuste as configurações específicas de cada modo.",
        step4: "Selecione o tamanho: automático, predefinições ou personalizado.",
        step5: "Para necessidades avançadas, acesse opções como nitidez e controle de proporção.",
        step6: "Clique em \"Converter imagem\" para processar.",
        step7: "Visualize o resultado e compare antes/depois.",
        step8: "Ajuste configurações e reconverta se necessário.",
        step9: "Baixe a imagem no formato desejado (JPEG, PNG ou WebP)."
      }
    }
  }