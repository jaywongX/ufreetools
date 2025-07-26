export default {
  name: 'Conversor de Timestamp Unix',
  description: 'Converte entre timestamp Unix e datas legíveis, com suporte a múltiplos formatos e fusos horários',

  options: {
    inputType: 'Tipo de entrada',
    outputFormat: 'Formato de saída',
    timezone: 'Fuso horário',
    includeTime: 'Incluir horário',
    format: 'String de formatação'
  },

  inputTypes: {
    timestamp: 'Timestamp Unix (segundos)',
    milliseconds: 'Timestamp Unix (milissegundos)',
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    date: 'String de data'
  },

  formats: {
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    locale: 'Formato localizado',
    relative: 'Tempo relativo',
    custom: 'Formato personalizado'
  },

  actions: {
    convert: 'Converter',
    nowTimestamp: 'Timestamp atual',
    nowDate: 'Data atual',
    copy: 'Copiar',
    clear: 'Limpar',
    refresh: 'Atualizar',
    switch: 'Alternar'
  },

  messages: {
    copied: 'Copiado para área de transferência!',
    convertSuccess: 'Conversão bem-sucedida',
    convertError: 'Erro ao converter timestamp',
    invalidInput: 'Formato de entrada inválido',
    invalidFormat: 'String de formatação inválida'
  },

  timeUnits: {
    milliseconds: 'milissegundos',
    seconds: 'segundos',
    minutes: 'minutos',
    hours: 'horas',
    days: 'dias'
  },

  labels: {
    unixTimestamp: 'Timestamp Unix (segundos)',
    dateTime: 'Data e hora',
    inputValue: 'Valor de entrada',
    unitConversion: 'Conversão de unidades de tempo',
    timeUnitLabel: 'Unidade de tempo'
  },

  placeholders: {
    enterTimestamp: 'Insira um timestamp Unix',
    enterValue: 'Insira um valor numérico'
  },

  info: {
    aboutTimestamp: 'Sobre Timestamps Unix',
    timestampDescription: 'Um timestamp Unix representa o número de segundos desde 1º de Janeiro de 1970 00:00:00 UTC. É um formato amplamente utilizado em sistemas computacionais para representação de datas.',
    commonUsage: 'Usos comuns:',
    usages: {
      database: 'Registro temporal em bancos de dados',
      api: 'Representação de tempo em APIs',
      logging: 'Registro de logs',
      filesystem: 'Timestamps em sistemas de arquivos'
    }
  }
};