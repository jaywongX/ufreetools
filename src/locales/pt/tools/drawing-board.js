export default {
    name: 'Quadro de Desenho Simples',
    description: 'Ferramenta de desenho online com suporte a desenho livre, alteração de cores e tamanho do pincel',
  
    // Barra de ferramentas
    tools: {
      brush: 'Pincel',
      eraser: 'Borracha',
      clear: 'Limpar tela',
      save: 'Salvar imagem',
      undo: 'Desfazer',
      redo: 'Refazer',
      apply: 'Aplicar'
    },
  
    // Configurações
    settings: {
      brushSize: 'Tamanho do pincel',
      color: 'Cor',
      opacity: 'Opacidade',
      backgroundColor: 'Cor de fundo'
    },
  
    // Seletor de cores
    colors: {
      black: 'Preto',
      white: 'Branco',
      red: 'Vermelho',
      green: 'Verde',
      blue: 'Azul',
      yellow: 'Amarelo',
      orange: 'Laranja',
      purple: 'Roxo',
      pink: 'Rosa',
      brown: 'Marrom',
      gray: 'Cinza',
      custom: 'Cor personalizada'
    },
  
    // Configurações da tela
    canvas: {
      width: 'Largura',
      height: 'Altura',
      resize: 'Redimensionar tela',
      orientation: 'Orientação',
      portrait: 'Retrato',
      landscape: 'Paisagem',
      square: 'Quadrado'
    },
  
    // Mensagens e alertas
    messages: {
      saveSuccess: 'Imagem salva com sucesso',
      confirmClear: 'Tem certeza que deseja limpar a tela? Todo conteúdo não salvo será perdido.',
      unsupportedBrowser: 'Seu navegador não suporta Canvas. Por favor, use um navegador moderno.',
      fileNamePrompt: 'Digite um nome para o arquivo',
      defaultFileName: 'Meu desenho'
    },
  
    // Sobre o aplicativo
    aboutTitle: 'Sobre o Quadro de Desenho Simples',
    aboutDescription: 'O Quadro de Desenho Simples é uma ferramenta de desenho online intuitiva e fácil de usar, permitindo que você explore sua criatividade com pinturas e criações artísticas. Seja para rabiscos, ilustrações simples ou registro de ideias, esta ferramenta atenderá suas necessidades.',
  
    featuresTitle: 'Principais recursos',
    feature1: 'Desenho livre com múltiplas cores e tamanhos de pincel',
    feature2: 'Ferramenta borracha para correções fáceis',
    feature3: 'Funções desfazer e refazer para corrigir erros',
    feature4: 'Ajuste de opacidade para efeitos artísticos',
    feature5: 'Limpeza rápida da tela para recomeçar',
    feature6: 'Salve suas obras como imagens',
  
    howToUseTitle: 'Como usar',
    howToUseStep1: '1. Selecione o pincel e a cor para começar',
    howToUseStep2: '2. Ajuste o tamanho e opacidade do pincel',
    howToUseStep3: '3. Use a borracha para fazer correções',
    howToUseStep4: '4. Desfaça ou refaça ações quando necessário',
    howToUseStep5: '5. Clique em salvar para baixar sua criação',
  
    tipsTitle: 'Dicas úteis',
    tip1: 'Use pincéis finos para detalhes e grossos para preenchimentos',
    tip2: 'Opacidade baixa cria efeitos de aquarela',
    tip3: 'Não tema errar - use a função desfazer',
    tip4: 'Comece com contornos básicos antes dos detalhes',
    tip5: 'Experimente combinações de cores para obras vibrantes',
  
    // Conteúdo do artigo
    article: {
      title: "Quadro de Desenho Simples: Crie arte digital com uma tela online",
      features: {
        title: "O que é o Quadro de Desenho Simples?",
        description: "Este <strong>Quadro de Desenho Online</strong> é uma <strong>tela digital</strong> versátil projetada para criar ilustrações, esboços e ideias visuais diretamente no navegador. Esta <strong>ferramenta de desenho web</strong> combina funcionalidades intuitivas com recursos básicos de desenho, acessível para usuários de todos os níveis.<br><br>Nosso <strong>aplicativo gratuito de desenho</strong> inclui tamanho de pincel ajustável, múltiplas cores e controle de transparência, ferramenta de borracha e capacidade de salvar criações como imagens. Esta <strong>prancheta digital</strong> suporta mouse e toque, permitindo desenhar naturalmente em computadores, tablets ou smartphones. A ferramenta também possui funções de desfazer e refazer, permitindo experimentar sem medo de errar.",
        useCases: {
          title: "Aplicações práticas do desenho digital",
          items: [
            "<strong>Ilustrações educacionais</strong>: Professores podem criar diagramas rápidos e explicações visuais para complementar aulas, ajudando alunos a entender conceitos complexos através de <strong>ferramentas visuais</strong>",
            "<strong>Colaboração remota</strong>: Equipes podem esboçar ideias, criar fluxogramas simples ou anotar conceitos durante reuniões online, servindo como <strong>substituto para quadros brancos digitais</strong>",
            "<strong>Storyboards digitais</strong>: Criadores de conteúdo e cineastas podem rascunhar sequências visuais antes de iniciar produções mais detalhadas",
            "<strong>Visualização de conceitos</strong>: Designers podem transformar ideias em realidade através de esboços rápidos antes de usar softwares profissionais, utilizando esta ferramenta como <strong>plataforma de rascunho instantâneo</strong>",
            "<strong>Relaxamento criativo</strong>: Pessoas buscando expressão criativa podem usar desenhos livres como <strong>terapia artística</strong> para alívio de estresse",
            "<strong>Arte digital infantil</strong>: Crianças podem explorar criatividade sem bagunça, desenvolvendo habilidades motoras através desta <strong>ferramenta de desenho para iniciantes</strong>"
          ]
        }
      },
      faq: {
        title: "Perguntas frequentes sobre o Quadro de Desenho",
        items: [
          {
            question: "Posso usar o Quadro de Desenho em tablets ou smartphones?",
            answer: "Sim, nosso Quadro de Desenho é totalmente compatível com dispositivos touch. Esta ferramenta de desenho online é otimizada para mouse e toque, permitindo desenhar naturalmente em tablets e smartphones. O design responsivo se adapta a diferentes tamanhos de tela, embora telas maiores ofereçam mais espaço. Para melhor experiência em dispositivos móveis, use no modo paisagem para maximizar a área de desenho."
          },
          {
            question: "Como salvar meus desenhos?",
            answer: "Salvar suas obras de arte é simples. Clique no botão 'Salvar imagem' na barra de ferramentas e insira um nome para o arquivo. O desenho será salvo como arquivo PNG com fundo transparente (a menos que você defina uma cor de fundo específica). Este formato mantém a qualidade do esboço digital e pode ser aberto na maioria dos visualizadores de imagem. Suas obras podem ser compartilhadas por email, redes sociais ou incorporadas em documentos."
          },
          {
            question: "Qual a diferença entre opacidade e tamanho do pincel?",
            answer: "Em nossa ferramenta de desenho, o tamanho do pincel controla a largura do traço em pixels - valores maiores criam linhas mais grossas, menores criam linhas mais finas. A opacidade, medida em porcentagem, determina a transparência do traço. Com 100% de opacidade, seu pincel cria linhas totalmente sólidas. Com opacidade reduzida (50% ou 30%), seus traços ficam mais transparentes, permitindo ver cores e linhas subjacentes. Isso cria efeitos semelhantes a aquarela e permite técnicas de camadas."
          },
          {
            question: "Posso corrigir erros no Quadro de Desenho?",
            answer: "Sim, nossa ferramenta inclui funções robustas de desfazer e refazer. Clique em 'Desfazer' para reverter ações recentes - você pode clicar múltiplas vezes para voltar vários passos. Se voltar demais, 'Refazer' restaura ações desfeitas. Esta tela digital mantém histórico das últimas alterações (até 50 ações), permitindo experimentar sem medo de erros permanentes. Ideal para iniciantes explorando técnicas de arte digital."
          },
          {
            question: "Existe limite para o tamanho da tela?",
            answer: "Nossa ferramenta gratuita oferece três tamanhos pré-definidos: Paisagem (800×600 pixels), Retrato (600×800 pixels) e Quadrado (700×700 pixels). Esses tamanhos são otimizados para a maioria das necessidades e garantem bom desempenho em vários dispositivos. Atualmente não suportamos tamanhos personalizados além desses. A tela inicial é em modo paisagem, mas você pode mudar a orientação sem perder seu trabalho - a ferramenta ajusta automaticamente sua criação ao centro."
          }
        ]
      },
      guide: {
        title: "Guia passo a passo para usar o Quadro de Desenho",
        steps: [
          "Primeiro selecione sua <strong>ferramenta de desenho</strong> preferida na barra à esquerda - escolha o pincel para desenhar ou a borracha para remover partes",
          "Use o controle deslizante 'Tamanho do pincel' para personalizar a <strong>espessura do traço</strong> - mova para direita para linhas mais grossas (máx. 50px) ou esquerda para mais finas (mín. 1px)",
          "Ajuste o nível de <strong>transparência</strong> com o controle de opacidade - 100% cria linhas sólidas, enquanto porcentagens menores criam traços mais transparentes",
          "Selecione uma <strong>cor</strong> da paleta ou use o seletor para escolher qualquer cor personalizada do espectro",
          "Se desejar, defina uma <strong>cor de fundo</strong> selecionando uma cor e clicando em 'Aplicar' - isso muda o fundo branco padrão",
          "Comece a <strong>criar sua arte</strong> clicando e arrastando na tela - experimente combinações de tamanhos, cores e transparências para vários efeitos",
          "Se cometer erros, use os <strong>botões desfazer/refazer</strong> - a ferramenta lembra suas ações recentes"
        ]
      },
      conclusion: "O Quadro de Desenho Simples oferece uma maneira descomplicada de criar arte digital, sem a complexidade de softwares profissionais ou necessidade de instalação. Sua interface intuitiva torna o desenho digital acessível para todos - desde rabiscos casuais até ilustrações educacionais. Embora não substitua ferramentas profissionais, esta tela web se destaca na comunicação visual rápida, esboços criativos e exploração artística. Seja colaborando remotamente, ensinando crianças sobre arte digital ou apenas desfrutando de momentos criativos, este aplicativo fornece as ferramentas básicas para expressar ideias visuais e compartilhá-las facilmente."
    }
  };