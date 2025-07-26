export default {
  name: 'Analisador de User Agent',
  description: 'Analisa e decodifica strings de User-Agent para identificar navegador, sistema operacional e informações do dispositivo',

  input: {
    label: 'String User-Agent',
    placeholder: 'Cole ou digite uma string User-Agent...'
  },

  actions: {
    parse: 'Analisar',
    detect: 'Detectar navegador atual',
    clear: 'Limpar'
  },

  results: {
    title: 'Resultados da Análise',
    summary: 'Resumo',
    details: 'Detalhes',
    originalUA: 'String User-Agent original'
  },

  sections: {
    browser: 'Navegador',
    os: 'Sistema Operacional',
    device: 'Dispositivo',
    other: 'Outras Informações'
  },

  deviceTypes: {
    mobile: 'Dispositivo móvel',
    tablet: 'Tablet',
    desktop: 'Computador'
  },

  fields: {
    name: 'Nome',
    version: 'Versão',
    engine: 'Motor',
    platform: 'Plataforma',
    type: 'Tipo',
    vendor: 'Fabricante',
    model: 'Modelo',
    isMobile: 'É móvel',
    isTablet: 'É tablet',
    isDesktop: 'É desktop'
  },

  messages: {
    parsingError: 'Erro ao analisar a string User-Agent',
    emptyInput: 'Insira uma string User-Agent',
    unknown: 'Desconhecido',
    yes: 'Sim',
    no: 'Não'
  },

  tips: {
    description: 'User-Agent é a string de identificação que navegadores enviam aos servidores, contendo informações sobre navegador, sistema operacional e dispositivo.',
    useCases: 'Usado em análise de sites, tratamento de compatibilidade e adaptação a dispositivos.'
  }
};