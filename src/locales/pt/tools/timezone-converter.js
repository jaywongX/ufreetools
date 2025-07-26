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
  howToUse4: 'Copie resultados ou compartilhe links'
};