export default {
    name: 'Gerador de Gradientes CSS',
    description: 'Crie e personalize belos gradientes CSS, visualize em tempo real e copie o código para seus projetos',
    
    gradientTypes: {
      title: 'Tipos de Gradiente',
      linear: 'Gradiente Linear',
      radial: 'Gradiente Radial',
      conic: 'Gradiente Cônico'
    },
    
    controls: {
      title: 'Controles de Cor',
      addColor: 'Adicionar Cor',
      color: 'Cor',
      position: 'Posição (%)',
      delete: 'Remover Cor',
      angle: 'Ângulo',
      degrees: 'graus',
      shape: 'Forma',
      circle: 'Círculo',
      ellipse: 'Elipse',
      positionX: 'Posição X (%)',
      positionY: 'Posição Y (%)',
      size: 'Tamanho',
      closestSide: 'Lado Mais Próximo',
      closestCorner: 'Canto Mais Próximo',
      farthestSide: 'Lado Mais Distante',
      farthestCorner: 'Canto Mais Distante',
      fromAngle: 'Ângulo Inicial'
    },
    
    output: {
      title: 'Código CSS',
      copyCode: 'Copiar Código',
      preview: 'Área de Visualização',
      copied: 'Código CSS copiado para a área de transferência!',
      download: 'Baixar PNG'
    },
    
    presets: {
      title: 'Predefinições',
      apply: 'Aplicar Predefinição',
      sunnyMorning: 'Manhã Ensolarada',
      winterNeva: 'Inverno em Neva',
      rareWind: 'Vento Raro',
      deepBlue: 'Azul Profundo',
      perfect: 'Branco Perfeito',
      cloudyKnoxville: 'Knoxville Nublado',
      greenBeach: 'Praia Verde',
      plumBath: 'Banho de Ameixa',
      everlasting: 'Céu Eterno'
    },
  
    accessibility: {
      colorPicker: 'Seletor de Cores',
      deleteSwatch: 'Remover Ponto de Cor',
      dragToReposition: 'Arraste para reposicionar ponto de cor'
    },
    
    actions: {
      reset: 'Reiniciar',
      generateCSS: 'Gerar CSS',
      clickToCopy: 'Clique para copiar código',
      completeEdit: 'Concluir Edição'
    },
    
    messages: {
      copied: 'Código CSS copiado para a área de transferência!',
      noColors: 'Adicione pelo menos duas cores para criar um gradiente',
      maxColors: 'Número máximo de pontos de cor atingido (10)',
      useKeyboard: 'Use a tecla Delete para remover o ponto de cor selecionado',
      invalidHex: 'Por favor insira um código de cor hexadecimal válido',
      downloadError: 'Falha ao baixar PNG, tente novamente mais tarde',
      preview: 'Visualização'
    },
    
    anglePresets: {
      top: 'Topo',
      topRight: 'Superior Direito',
      right: 'Direita',
      bottomRight: 'Inferior Direito',
      bottom: 'Base',
      bottomLeft: 'Inferior Esquerdo',
      left: 'Esquerda',
      topLeft: 'Superior Esquerdo'
    },
  
    radialShapes: {
      circle: 'Círculo',
      ellipse: 'Elipse'
    },
  
    radialSizes: {
      farthestCorner: 'Canto Mais Distante',
      closestCorner: 'Canto Mais Próximo',
      farthestSide: 'Lado Mais Distante',
      closestSide: 'Lado Mais Próximo',
    },
  
    article: {
      title: "Gerador de Gradientes CSS: O Guia Definitivo para Transições de Cores Belas",
      features: {
        title: "Entenda os Gradientes CSS e Seu Poder",
        description: "O <strong>Gerador de Gradientes CSS</strong> é uma ferramenta visual poderosa que permite criar transições suaves de cores (conhecidas como <strong>efeitos de gradiente</strong>) sem a necessidade de escrever código CSS complexo manualmente. A ferramenta suporta três tipos principais de gradientes: <strong>gradiente linear</strong> (cores fluindo em linha reta), <strong>gradiente radial</strong> (cores irradiando de um ponto central) e <strong>gradiente cônico</strong> (cores girando em torno de um ponto central).<br><br>Através de uma interface intuitiva, você pode facilmente adicionar múltiplos <strong>pontos de cor</strong>, ajustar suas posições, modificar ângulos ou formas do gradiente e visualizar imediatamente sua criação. A ferramenta gera automaticamente o código CSS correspondente, que você pode copiar diretamente para seus projetos web. Além disso, você pode exportar o gradiente como uma imagem PNG para uso em aplicativos de design gráfico ou compartilhar com outras pessoas. Seja você um desenvolvedor profissional ou um entusiasta de design, este <strong>criador de gradientes</strong> simplifica o processo de criar transições de cores visualmente atraentes para seus projetos digitais.",
        useCases: {
          title: "Casos de Uso Práticos para Gradientes CSS",
          items: [
            "<strong>Planos de fundo de sites</strong>: Crie planos de fundo de página inteira visualmente atraentes com transições entre cores complementares, adicionando profundidade e dimensão ao seu site sem usar imagens que consomem muitos recursos. Esses <strong>planos de fundo gradientes</strong> carregam mais rápido que imagens enquanto proporcionam uma aparência moderna e fluida.",
            "<strong>Estilização de botões e elementos de UI</strong>: Projete botões de chamada para ação atraentes usando <strong>efeitos de gradiente</strong> para guiar sutilmente a atenção do usuário e aumentar as taxas de conversão. A qualidade tridimensional dos gradientes pode fazer com que elementos de UI pareçam mais táteis e interativos.",
            "<strong>Separadores de conteúdo e cabeçalhos</strong>: Use <strong>gradientes lineares</strong> para criar separadores visuais marcantes entre blocos de conteúdo, ajudando a organizar informações e guiar o olhar do usuário através do layout da sua página, mantendo coerência visual.",
            "<strong>Elementos de design gráfico</strong>: Exporte seus gradientes como imagens PNG para uso em materiais de marketing digital, posts em mídias sociais ou slides de apresentação, criando uma identidade visual consistente em diferentes plataformas através de <strong>misturas de cores</strong> personalizadas.",
            "<strong>Visualização de dados</strong>: Aplique <strong>transições de cores</strong> em gráficos, tabelas e mapas para representar faixas de dados de forma mais intuitiva, ajudando visualizadores a entender imediatamente a distribuição de valores através da intensidade da cor ou progressão de tons.",
            "<strong>Animações modernas de carregamento</strong>: Projete gradientes animados que mudam de cor enquanto o usuário espera, para telas de carregamento ou indicadores de progresso, criando uma experiência mais engajante durante tempos de carregamento necessários através de <strong>animações gradientes</strong>."
          ]
        }
      },
      faq: {
        title: "Perguntas Frequentes sobre Gradientes CSS",
        items: [
          {
            question: "Qual a diferença entre gradiente linear, radial e cônico?",
            answer: "Estes três tipos de gradientes criam efeitos visuais distintos. Gradientes lineares fazem transição de cores ao longo de uma linha reta em uma direção especificada (definida por graus ou palavras-chave como 'para cima' ou 'para baixo à direita'). Eles são ideais para planos de fundo simples, botões e transições de cores horizontais ou verticais. Gradientes radiais começam em um ponto central e irradiam para fora em padrões circulares ou elípticos, criando efeitos de holofote ou desvanecimento, perfeitos para destacar conteúdo ou criar sensação de profundidade. Gradientes cônicos giram cores em movimento circular ao redor de um ponto central (como um círculo cromático), tornando-os ideais para gráficos de pizza, seletores de cores ou criar efeitos de nascer do sol. Nossa ferramenta suporta todos os três tipos e oferece controles visuais para ajudar você a alcançar a aparência exata necessária para seu projeto."
          },
          {
            question: "Como fazer meu gradiente parecer suave sem faixas de cores visíveis?",
            answer: "Para criar um gradiente suave sem faixas visíveis (degraus perceptíveis entre cores), tente estas técnicas: 1) Adicione mais pontos de cor entre as cores principais para criar transições mais graduais. Nossa ferramenta permite adicionar até 10 pontos de cor exatamente para este propósito. 2) Mantenha cores adjacentes no gradiente relativamente próximas em matiz e brilho, pois mudanças drásticas mostram faixas mais facilmente. 3) Adicione sobreposições de textura de ruído sutil com baixa opacidade (não diretamente nesta ferramenta, mas em seu CSS) para quebrar potenciais faixas. 4) Considere usar transparência leve nas cores do gradiente com valores rgba(). 5) Para áreas de gradiente muito grandes, tente aumentar o comprimento do gradiente em relação ao seu tamanho de exibição. Estas técnicas ajudam a criar transições de cores com aparência profissional, evitando efeitos de faixas que podem distrair e fazer o gradiente parecer não profissional."
          },
          {
            question: "Estes gradientes CSS funcionam em todos os navegadores?",
            answer: "Os gradientes lineares e radiais básicos gerados por nossa ferramenta têm excelente compatibilidade com navegadores, funcionando de forma confiável em todos os navegadores modernos (Chrome, Firefox, Safari, Edge) sem necessidade de prefixos. O suporte a gradientes cônicos é um pouco mais limitado, mas ainda funciona em todas as principais versões atuais de navegadores. Para navegadores mais antigos (especialmente versões mais velhas do Internet Explorer), você pode precisar adicionar prefixos de fornecedor ou soluções alternativas, embora estes navegadores representem hoje apenas uma pequena porcentagem de usuários. Nossa ferramenta gera CSS padrão seguindo as especificações W3C, garantindo a mais ampla compatibilidade. Para aplicações críticas direcionadas a navegadores mais antigos, você pode facilmente modificar o código gerado para adicionar prefixos ou criar planos de fundo alternativos simples para navegadores que não suportam certos tipos de gradiente."
          },
          {
            question: "Como usar o código de gradiente gerado em meu projeto?",
            answer: "Usar o código de gradiente gerado por nossa ferramenta é simples: 1) Use os controles visuais para criar e personalizar seu gradiente. 2) Clique no botão 'Copiar Código' para copiar o CSS gerado para a área de transferência. 3) Cole o código em seu arquivo CSS ou na seção de estilo de seu documento HTML. O código pode ser aplicado a qualquer propriedade CSS que aceite valores de imagem, mais comumente a propriedade 'background'. Você também pode modificar o código copiado para adicionar outras propriedades, alterar seletores ou combiná-lo com outras regras CSS. Se precisar do gradiente como imagem, use nossa função 'Baixar PNG' para salvá-lo como arquivo, que pode ser importado para qualquer aplicativo que aceite imagens PNG."
          },
          {
            question: "Posso criar gradientes transparentes com esta ferramenta?",
            answer: "Sim, você pode criar gradientes transparentes inserindo manualmente cores com transparência no campo de entrada de cor hexadecimal. Embora nosso seletor de cores não suporte diretamente canal alfa, você pode inserir valores rgba() (como rgba(255,0,0,0.5) para vermelho semitransparente) ou códigos hexadecimais de 8 dígitos (como #FF000080) no campo de entrada de cor após selecionar um ponto de cor. Isso permite criar efeitos de gradiente para transparente, especialmente úteis para sobreposições, sombras ou elementos que precisam mostrar parcialmente o conteúdo abaixo. Estes gradientes transparentes são perfeitos para criar efeitos de sobreposição sutis, vinhetas ao redor de imagens ou áreas de conteúdo que gradativamente se fundem com o plano de fundo. Ao usar gradientes transparentes sobre conteúdo, lembre-se de considerar o contraste e legibilidade de qualquer texto que possa aparecer dentro ou sob a área do gradiente."
          }
        ]
      },
      guide: {
        title: "Guia Passo a Passo para Usar o Gerador de Gradientes CSS",
        steps: [
          "<strong>Selecione o tipo de gradiente</strong>: Primeiro, escolha entre os tipos de gradiente linear, radial ou cônico na seção superior da ferramenta. Cada tipo cria efeitos diferentes, adequados para diferentes necessidades de design. Gradientes lineares são a escolha mais comum para planos de fundo, enquanto gradientes radiais e cônicos oferecem efeitos mais especializados.",
          "<strong>Personalize os pontos de cor</strong>: Gradientes são criados usando pontos de cor que definem pontos de transição. Clique nos marcadores de ponto de cor existentes na barra de cores para selecioná-los, então use o seletor de cores para alterar sua cor. Você também pode ajustar a posição arrastando o marcador ou usando o controle deslizante de posição abaixo do seletor de cores.",
          "<strong>Adicione mais pontos de cor</strong>: Clique no botão 'Adicionar Cor' para criar transições de cores adicionais no gradiente. Até 10 pontos de cor são suportados, permitindo efeitos multicoloridos complexos. Para remover um ponto de cor, selecione-o e clique no botão 'Remover' (mas lembre-se que você precisa de pelo menos duas cores para formar um gradiente).",
          "<strong>Ajuste a direção ou forma do gradiente</strong>: Para gradientes lineares, use o controle de ângulo para definir a direção do fluxo de cores (0-360 graus). Para gradientes radiais, escolha a forma (círculo ou elipse) e ajuste a posição central com os controles X e Y. Para gradientes cônicos, defina o ângulo inicial e posição central para controlar precisamente o efeito.",
          "<strong>Use opções predefinidas para ajustes finos</strong>: Experimente os botões de predefinições fornecidos para cada tipo de gradiente. Para gradientes lineares, tente direções comuns como topo, direita ou inferior esquerdo. Para gradientes radiais, teste diferentes configurações de tamanho como 'canto mais distante' ou 'lado mais próximo' para ver como afetam a difusão do gradiente.",
          "<strong>Visualize seu gradiente</strong>: Sua criação é exibida em tempo real na grande área de visualização. Clique nesta área para copiar imediatamente o código CSS para a área de transferência, para uso em seu projeto. Você pode continuar fazendo ajustes até ficar satisfeito com a aparência.",
          "<strong>Exporte ou compartilhe seu trabalho</strong>: Quando seu gradiente estiver perfeito, use o botão 'Copiar Código' para copiar o código CSS gerado, ou o botão 'Baixar PNG' para baixá-lo como imagem PNG. Você também pode navegar pelos gradientes predefinidos na parte inferior da ferramenta para inspiração rápida ou pontos de partida."
        ]
      },
      conclusion: "Gradientes CSS oferecem uma maneira poderosa de melhorar visualmente seus designs web com transições suaves de cores, mantendo seus projetos leves e de alto desempenho. Diferente de imagens, gradientes podem ser redimensionados perfeitamente para qualquer tamanho, carregam instantaneamente e podem ser facilmente modificados com algumas alterações de código. Com nosso Gerador de Gradientes CSS, você não precisa memorizar sintaxe complexa ou gastar tempo escrevendo código manualmente - basta criar intuitivamente, ajustar perfeitamente e implementar com uma única operação de copiar e colar. Seja você construindo sites profissionais, projetando componentes de UI ou criando arte digital, dominar o uso de gradientes melhorará significativamente o apelo visual de seu trabalho. Comece agora a experimentar diferentes combinações de cores e tipos de gradiente, explorando as infinitas possibilidades criativas oferecidas por esta ferramenta."
    }
  }