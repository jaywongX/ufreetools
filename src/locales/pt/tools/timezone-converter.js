export default {
    name: 'Conversor de Fusos Horários',
    description: 'Ferramenta para comparar e converter horários em diferentes fusos horários ao redor do mundo',
    
    // Rótulos principais
    currentTime: 'Hora Atual',
    addTimezone: 'Adicionar Fuso',
    removeTimezone: 'Remover Fuso',
    convertTime: 'Converter Horário',
    compareTimezones: 'Comparar Fusos',
    
    // Configurações e opções
    settings: {
      date: 'Data',
      time: 'Hora',
      format: 'Formato',
      select24Hour: 'Formato 24h',
      select12Hour: 'Formato 12h',
      showSeconds: 'Mostrar segundos',
      hideSeconds: 'Ocultar segundos',
      showDate: 'Mostrar data',
      hideDate: 'Ocultar data',
    },
    
    // Fusos horários
    timezone: {
      title: 'Fuso Horário',
      search: 'Buscar fuso ou cidade...',
      yourLocal: 'Seu fuso local',
      popular: 'Fusos populares',
      allTimezones: 'Todos os fusos',
      utc: 'UTC (Tempo Universal Coordenado)',
      gmt: 'GMT (Meridiano de Greenwich)',
      est: 'Horário do Leste (EUA)',
      cst: 'Horário Padrão da China',
      jst: 'Horário Padrão do Japão',
      ist: 'Horário Padrão da Índia',
      cet: 'Horário da Europa Central',
      bst: 'Horário de Verão Britânico',
      aest: 'Horário Padrão do Leste Australiano',
      nzst: 'Horário Padrão da Nova Zelândia',
      custom: 'Fuso personalizado'
    },
    
    // Regiões e continentes
    regions: {
      africa: 'África',
      america: 'Américas',
      asia: 'Ásia',
      atlantic: 'Atlântico',
      australia: 'Austrália',
      europe: 'Europa',
      indian: 'Oceano Índico',
      pacific: 'Pacífico'
    },
    
    // Conversão
    conversion: {
      from: 'De',
      to: 'Para',
      convert: 'Converter',
      result: 'Resultado',
      timeIn: 'Horário em'
    },
    
    // Elementos da interface
    ui: {
      now: 'Agora',
      refresh: 'Atualizar',
      copy: 'Copiar',
      copied: 'Copiado',
      share: 'Compartilhar',
      reset: 'Resetar',
      empty: 'Sem resultados',
      offset: 'Diferença',
      add: 'Adicionar'
    },
    
    // Mensagens
    messages: {
      invalid: 'Horário inválido',
      copied: 'Copiado para área de transferência',
      removed: 'Fuso removido',
      added: 'Fuso adicionado',
      maxTimezones: 'Máximo de 10 fusos permitidos',
      selectTimezone: 'Selecione um fuso'
    },
    
    // Sobre a ferramenta
    aboutTitle: 'Sobre o Conversor',
    aboutDescription: 'O Conversor de Fusos Horários ajuda a visualizar e comparar horários em diferentes regiões do mundo, sendo útil para comunicação internacional, planejamento de viagens e agendamento de reuniões globais.',
    
    featuresTitle: 'Principais Funcionalidades',
    feature1: 'Mostra horário atual em cidades e fusos ao redor do mundo',
    feature2: 'Compara diferenças de horário entre múltiplos fusos',
    feature3: 'Converte horários entre quaisquer fusos',
    feature4: 'Suporte a formatos 12h e 24h',
    feature5: 'Visualiza sobreposição de horários comerciais',
    feature6: 'Busca por cidades ou países para encontrar fusos',
    
    useCasesTitle: 'Casos de Uso',
    useCase1: 'Agendar reuniões internacionais',
    useCase2: 'Planejar viagens e voos internacionais',
    useCase3: 'Manter contato com amigos/família no exterior',
    useCase4: 'Acompanhar eventos globais em tempo local',
    useCase5: 'Coordenar equipes remotas em diferentes fusos',
    
    howToUseTitle: 'Como Usar',
    howToUse1: 'Adicione múltiplos fusos para ver horários simultaneamente',
    howToUse2: 'Use a conversão para transformar horários entre fusos',
    howToUse3: 'Ajuste formatos de data/hora conforme preferência',
    howToUse4: 'Copie resultados ou compartilhe links',
    
    // Artigo
    article: {
      title: "Conversor de Fusos Horários: Simplificando o Gerenciamento de Tempo Global",
      features: {
        title: "Entendendo a Conversão de Fusos",
        description: "Este <strong>conversor de fusos horários</strong> é uma ferramenta abrangente para lidar com as complexidades das diferenças de horário globais. Como um <strong>calculador de tempo mundial</strong>, ele permite conversões precisas entre fusos horários, essencial para comunicação internacional, planejamento de viagens e coordenação empresarial.<br><br>Nosso <strong>relógio mundial</strong> mostra horários em tempo real, diferenças entre fusos e funcionalidades de comparação. Seja para agendar reuniões internacionais, coordenar equipes globais ou planejar viagens, este <strong>conversor internacional</strong> oferece precisão e flexibilidade para eliminar confusões com fusos horários.",
        useCases: {
          title: "Aplicações Práticas",
          items: [
            "Profissionais agendando <strong>conferências internacionais</strong> entre Nova York, Londres e Tóquio",
            "Gerentes coordenando <strong>equipes remotas</strong> em diferentes continentes",
            "Agentes de viagens calculando <strong>jet lag</strong> para voos internacionais",
            "Organizadores promovendo <strong>webinars globais</strong> com horários locais precisos",
            "Desenvolvedores agendando <strong>manutenções de sistemas</strong> com impacto global mínimo",
            "Famílias mantendo contato através de <strong>chamadas internacionais</strong> apesar das diferenças horárias"
          ]
        }
      },
      faq: {
        title: "Perguntas Frequentes",
        items: [
          {
            question: "Qual a diferença entre GMT e UTC?",
            answer: "GMT (Tempo Médio de Greenwich) e UTC (Tempo Universal Coordenado) são frequentemente usados como sinônimos, mas têm diferenças sutis. GMT é baseado na rotação da Terra, enquanto UTC usa relógios atômicos para maior precisão. Para fins práticos de conversão, podem ser considerados equivalentes (GMT/UTC+0)."
          },
          {
            question: "Como o horário de verão afeta as conversões?",
            answer: "O horário de verão (DST) adiciona complexidade às conversões, pois diferentes países adotam em datas distintas. Nosso conversor acompanha automaticamente essas regras, ajustando os cálculos conforme necessário para garantir precisão."
          },
          {
            question: "Por que alguns lugares têm diferenças de horário não inteiras?",
            answer: "Locais como Índia (UTC+5:30) e Nepal (UTC+5:45) usam diferenças fracionárias por razões geográficas ou históricas. Nosso conversor suporta essas variações, garantindo cálculos precisos para todos os fusos."
          },
          {
            question: "O conversor é preciso para datas históricas?",
            answer: "Para datas recentes e atuais oferecemos alta precisão. Para datas muito antigas (antes de 1970), a precisão pode ser limitada devido a mudanças nas regras de fusos horários ao longo dos anos."
          },
          {
            question: "Como a ferramenta lida com a Linha Internacional de Data?",
            answer: "O conversor gerencia automaticamente as diferenças de data ao cruzar a Linha Internacional de Data, mostrando claramente as datas corretas em cada localização para evitar erros de agendamento."
          }
        ]
      },
      guide: {
        title: "Guia Passo a Passo",
        steps: [
          "Selecione o <strong>fuso de origem</strong> - pode ser seu fuso local ou qualquer outro",
          "Defina a <strong>data e hora</strong> que deseja converter",
          "Escolha o <strong>fuso de destino</strong> na lista ou através da busca",
          "Clique em <strong>Converter</strong> para obter o horário equivalente",
          "Visualize o <strong>resultado</strong> com informações detalhadas",
          "Para <strong>comparar múltiplos fusos</strong>, use a função 'Adicionar Fuso'",
          "<strong>Personalize</strong> o formato de exibição conforme suas preferências"
        ]
      },
      conclusion: "O Conversor de Fusos Horários elimina as dores de cabeça comuns no gerenciamento de horários através de diferentes fusos. Seja para negócios internacionais, viagens ou contatos pessoais, esta ferramenta garante que diferenças de horário não resultem em falhas de comunicação. Com interface intuitiva e banco de dados abrangente, é um recurso essencial para qualquer atividade que envolva múltiplos fusos horários em nosso mundo cada vez mais conectado."
    }
  };