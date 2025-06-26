export default {
    name: 'Temporizador Pomodoro',
    description: 'Aumente sua produtividade e concentração com a técnica Pomodoro',
    
    // Textos principais da interface
    start: 'Iniciar',
    pause: 'Pausar',
    reset: 'Reiniciar',
    skip: 'Pular',
    work: 'Trabalho',
    shortBreak: 'Pausa curta',
    longBreak: 'Pausa longa',
    settings: 'Configurações',
    stats: 'Estatísticas',
    
    // Configurações
    settingsTitle: 'Configurações do temporizador',
    workDuration: 'Duração do trabalho',
    shortBreakDuration: 'Duração da pausa curta',
    longBreakDuration: 'Duração da pausa longa',
    cyclesBeforeLongBreak: 'Ciclos antes da pausa longa',
    enableSound: 'Ativar som',
    autoStartBreaks: 'Iniciar pausas automaticamente',
    autoStartWork: 'Iniciar trabalho automaticamente',
    minutes: 'minutos',
    saveSettings: 'Salvar configurações',
    resetDefaults: 'Restaurar padrões',
    
    // Estatísticas
    statsTitle: 'Estatísticas de hoje',
    completedPomodoros: 'Pomodoros completados',
    totalWorkTime: 'Tempo total de trabalho',
    averageDailyPomodoros: 'Média diária de pomodoros',
    currentStreak: 'Dias consecutivos trabalhando',
    
    // Mensagens de status
    workStarted: 'Hora de trabalhar! Foque na tarefa atual.',
    shortBreakStarted: 'Pausa curta iniciada. Relaxe um pouco!',
    longBreakStarted: 'Pausa longa iniciada. Descanse bem!',
    pausedMessage: 'Temporizador pausado',
    resetMessage: 'Temporizador reiniciado',
    workCompleted: 'Período de trabalho concluído!',
    breakCompleted: 'Pausa terminada!',
    
    // Introdução à ferramenta
    aboutTitle: 'Sobre a Técnica Pomodoro',
    aboutDescription: 'A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. A técnica utiliza um temporizador para dividir o trabalho em intervalos, tradicionalmente de 25 minutos, separados por breves pausas. Esses intervalos são chamados de "pomodoros", derivados do temporizador de cozinha em forma de tomate que Cirillo usava originalmente.',
    
    howToUseTitle: 'Como usar',
    howToUseStep1: '1. Defina a tarefa a ser realizada',
    howToUseStep2: '2. Ajuste o pomodoro para 25 minutos (pode ser personalizado nas configurações)',
    howToUseStep3: '3. Trabalhe com foco até o temporizador tocar',
    howToUseStep4: '4. Faça uma pausa curta de 5 minutos',
    howToUseStep5: '5. A cada 4 pomodoros completados, faça uma pausa mais longa de 15-30 minutos',
    
    benefitsTitle: 'Benefícios da Técnica Pomodoro',
    benefit1: 'Melhora a atenção e concentração',
    benefit2: 'Reduz distrações e procrastinação',
    benefit3: 'Aumenta a motivação e persistência',
    benefit4: 'Melhora o equilíbrio entre trabalho e descanso',
    benefit5: 'Diminui o cansaço mental',
    
    tipsTitle: 'Dicas de uso',
    tip1: 'Escolha um ambiente tranquilo para minimizar distrações',
    tip2: 'Durante as pausas, desligue-se completamente do trabalho',
    tip3: 'Mantenha intervalos consistentes para criar um hábito',
    tip4: 'Use esta ferramenta para registrar e analisar seus padrões de trabalho',
    tip5: 'Combine com uma lista de tarefas, focando em uma tarefa por pomodoro',
    
    // Conteúdo do artigo
    article: {
      title: 'Temporizador Pomodoro: Maximizando a produtividade através da gestão do tempo',
      features: {
        title: 'Funcionalidades e casos de uso',
        description: 'O <strong>Temporizador Pomodoro</strong> é uma poderosa ferramenta de produtividade baseada na famosa Técnica Pomodoro, desenvolvida por Francesco Cirillo. Este método divide o trabalho em períodos focados, tradicionalmente de 25 minutos (chamados "pomodoros"), intercalados com breves intervalos. Nosso aplicativo aprimora essa abordagem com durações personalizáveis, notificações sonoras, transição automática entre sessões e estatísticas detalhadas de produtividade.',
        useCasesTitle: 'Aplicações práticas',
        useCases: {
          items: [
            '<strong>Sessões de estudo focadas</strong>: Estudantes podem usar o Pomodoro para manter a concentração durante os estudos, evitando esgotamento e maximizando a retenção de informações.',
            '<strong>Trabalho profundo para profissionais</strong>: Trabalhadores do conhecimento podem usar intervalos cronometrados para alcançar maior foco em tarefas complexas como programação, escrita ou análise de dados.',
            '<strong>Superando a procrastinação</strong>: O temporizador ajuda a dividir tarefas intimidantes em partes gerenciáveis, facilitando o início e a manutenção do momentum em projetos desafiadores.',
            '<strong>Gestão do trabalho remoto</strong>: Trabalhadores remotos podem estabelecer limites claros entre períodos de foco e descanso, mantendo a produtividade em ambientes potencialmente distrativos.',
            '<strong>Criação de conteúdo</strong>: Escritores, artistas e criadores podem usar sessões cronometradas para equilibrar produção criativa com descansos necessários, prevenindo a fadiga criativa.',
            '<strong>Controle de multitarefa</strong>: Profissionais com múltiplas responsabilidades podem alocar pomodoros específicos para diferentes projetos, garantindo progresso equilibrado em vários fluxos de trabalho.'
          ]
        }
      },
      faq: {
        title: 'Perguntas frequentes',
        items: [
          {
            question: 'Qual é a ciência por trás da Técnica Pomodoro?',
            answer: 'A Técnica Pomodoro aproveita vários princípios psicológicos: a capacidade do cérebro humano de manter foco por períodos limitados (tipicamente 25-45 minutos), a importância de pausas regulares para prevenir fadiga mental, e os benefícios motivacionais de limites de tempo. Pesquisas em psicologia cognitiva apoiam que alternar entre trabalho focado e breves descansos otimiza o desempenho mental e reduz o consumo de recursos cognitivos. A técnica também utiliza o Efeito Zeigarnik - a tendência de lembrar melhor de tarefas incompletas do que completadas - ao fornecer uma abordagem estruturada para conclusão de tarefas.'
          },
          {
            question: 'Como devo ajustar a duração dos pomodoros para diferentes tipos de trabalho?',
            answer: 'Diferentes tarefas se beneficiam de <strong>durações personalizadas</strong>:<br>- <strong>Trabalho analítico complexo</strong> (programação, escrita, pesquisa): considere pomodoros mais longos (30-45 minutos) para pensamento profundo.<br>- <strong>Tarefas administrativas ou rotineiras</strong>: intervalos padrão de 25 minutos geralmente funcionam bem.<br>- <strong>Trabalho criativo</strong>: alguns podem se beneficiar de sessões mais curtas (15-20 minutos) para manter a frescura criativa, ou sessões mais longas (até 50 minutos) em estado de fluxo.<br>- <strong>Aprendizado de novo material</strong>: sessões mais curtas (15-20 minutos) geralmente ajudam na retenção.<br>O segredo é experimentar - ajuste as configurações do seu <strong>Temporizador Pomodoro</strong> com base em seu nível de energia, complexidade da tarefa e quando notar retornos decrescentes.'
          },
          {
            question: 'A Técnica Pomodoro pode ajudar pessoas com TDAH ou dificuldades de atenção?',
            answer: 'Sim, muitas pessoas com TDAH ou transtornos de atenção acham a <strong>Técnica Pomodoro</strong> especialmente benéfica. Os blocos de tempo estruturados criam motivação externa e limites claros, enquanto as pausas frequentes acomodam períodos de atenção mais curtos. A técnica ajuda a construir gradualmente "músculos de foco" e fornece uma estrutura para gerenciar distrações. Algumas adaptações úteis incluem: começar com intervalos mais curtos (15-20 minutos), incluir atividade física nas pausas, usar temporizadores visuais e combinar com listas de tarefas escritas. Muitos coaches e especialistas em TDAH recomendam técnicas de trabalho cronometrado como o <strong>Temporizador Pomodoro</strong> como parte de uma estratégia abrangente de produtividade.'
          },
          {
            question: 'Como lidar com interrupções durante um pomodoro?',
            answer: 'Interrupções são inevitáveis, mas podem ser gerenciadas com estas estratégias do <strong>Temporizador Pomodoro</strong>:<br>1. <strong>Interrupções internas</strong> (seus próprios pensamentos): anote rapidamente no papel e retorne à tarefa.<br>2. <strong>Interrupções externas</strong> (colegas, notificações): escolha entre:<br>- <strong>Informar-Negociar-Agendar</strong>: informe brevemente que está em uma sessão focada, negocie quando atender à demanda e agende.<br>- <strong>Regra dos cinco minutos</strong>: se a interrupção levar menos de 5 minutos, resolva imediatamente e reinicie o pomodoro.<br>3. <strong>Interrupções urgentes</strong>: para emergências reais, pare o temporizador, resolva a situação e comece um novo pomodoro.<br>Lembre-se, pomodoros são indivisíveis - para interrupções substanciais, é melhor abandonar a sessão e começar uma nova, em vez de pausar o temporizador.'
          },
          {
            question: 'Como rastrear e melhorar minha produtividade com a Técnica Pomodoro?',
            answer: 'Nosso <strong>Temporizador Pomodoro</strong> inclui recursos estatísticos integrados para medir seu progresso. Para maximizar os benefícios:<br>1. <strong>Defina metas diárias</strong>: comece com objetivos realistas (ex: 6-8 pomodoros) e aumente gradualmente.<br>2. <strong>Acompanhe a taxa de conclusão</strong>: monitore quantos pomodoros planejados você realmente completa.<br>3. <strong>Analise padrões de interrupção</strong>: identifique o que normalmente distrai seu foco e desenvolva estratégias.<br>4. <strong>Revise tendências</strong>: as estatísticas mostram seus pomodoros diários/semanais, ajudando a identificar horários mais produtivos.<br>5. <strong>Experimente durações diferentes</strong>: teste vários tempos de trabalho/descanso para encontrar seu ciclo ideal.<br>6. <strong>Celebre sequências</strong>: o contador de dias consecutivos incentiva a consistência.<br>Esta abordagem baseada em dados ajuda a refinar seu método de gestão do tempo para máxima produtividade.'
          }
        ]
      },
      guide: {
        title: 'Como usar o Temporizador Pomodoro',
        step1: {
          title: 'Configure seu temporizador',
          description: 'Comece personalizando o <strong>Temporizador Pomodoro</strong> conforme suas preferências. No painel de configurações (à esquerda), ajuste a duração do trabalho (tradicionalmente 25 minutos), pausas curtas (normalmente 5 minutos), pausas longas (15-30 minutos) e ciclos antes da pausa longa (geralmente 4). Você também pode ativar notificações sonoras e transição automática entre períodos. Clique em "Salvar configurações" para aplicar. Essa personalização garante que o temporizador se adapte aos seus padrões de atenção e necessidades de trabalho.'
        },
        step2: {
          title: 'Planeje suas tarefas',
          description: 'Antes de iniciar o temporizador, identifique e priorize as tarefas específicas que abordará durante cada pomodoro. Para melhores resultados, divida projetos grandes em itens menores e acionáveis que possam ser razoavelmente avançados ou concluídos em um único pomodoro. Ter uma lista clara de tarefas evita perder tempo precioso decidindo o que fazer durante períodos de foco. A <strong>Técnica Pomodoro</strong> funciona melhor quando combinada com planejamento cuidadoso de tarefas.'
        },
        step3: {
          title: 'Inicie sua sessão de trabalho',
          description: 'Selecione o modo "Trabalho" (se não estiver já) e clique em "Iniciar" para começar o pomodoro. Comprometa-se a focar na tarefa planejada até o temporizador terminar. O display grande mostra o tempo restante. Durante este período, elimine distrações - silencie notificações, feche abas irrelevantes e, se possível, informe colegas que você está em uma sessão focada. O <strong>Temporizador Pomodoro</strong> cria um recipiente mental para trabalho profundo - respeite esse tempo com atenção total.'
        },
        step4: {
          title: 'Descanse entre sessões',
          description: 'Quando seu período de trabalho terminar, o temporizador alertará (se o som estiver ativado) e automaticamente mudará para o modo de descanso. Pausas curtas (normalmente 5 minutos) seguem a maioria dos pomodoros, com pausas mais longas (15-30 minutos) após completar um certo número de ciclos. Durante as pausas, afaste-se do trabalho - alongue-se, caminhe, descanse os olhos, hidrate-se ou faça uma breve prática de mindfulness. Evite checar e-mails ou redes sociais nas pausas curtas, pois essas atividades podem facilmente ultrapassar o tempo alocado. O <strong>sistema Pomodoro</strong> depende de descansos adequados para manter a frescura cognitiva e prevenir esgotamento.'
        },
        step5: {
          title: 'Acompanhe seu progresso',
          description: 'O <strong>Temporizador Pomodoro</strong> registra automaticamente suas sessões concluídas no painel de estatísticas (à direita). Aqui você pode monitorar seus pomodoros diários, tempo total de trabalho, médias e sequência atual de dias trabalhando. Use essas métricas para entender seus padrões de produtividade, estabelecer metas de melhoria e manter motivação através do progresso visível. Com o tempo, esses dados ajudarão a otimizar seus hábitos de trabalho e refinar sua abordagem de gestão do tempo para máxima eficiência e qualidade de produção.'
        }
      },
      conclusion: 'O <strong>Temporizador Pomodoro</strong> transforma sua forma de trabalhar ao estruturar seu tempo em períodos ideais de foco e descanso. Ao implementar este método cientificamente comprovado de gestão do tempo, você pode experimentar melhor concentração, menos procrastinação, maior produção de trabalho e redução da fadiga mental. Esta técnica é incrivelmente versátil, beneficiando estudantes, profissionais, criativos e qualquer pessoa buscando aumentar a produtividade enquanto mantém o bem-estar. À medida que você usa consistentemente a Técnica Pomodoro, desenvolverá maior consciência sobre como utiliza seu tempo e construirá habilidades de foco que se transferem para todas as áreas da vida.'
    }
  };