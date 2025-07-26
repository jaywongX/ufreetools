export default {
  name: 'Codificador de Entidades HTML',
  description: 'Converta entre texto HTML e entidades codificadas',
  title: 'Codificador/Decodificador de Entidades HTML',
  intro: 'A codificação de entidades HTML converte caracteres especiais em formatos seguros para HTML, útil para prevenir ataques XSS ou exibir código-fonte HTML.',

  operation: {
    title: 'Tipo de Operação',
    encode: 'Codificar para Entidades HTML',
    decode: 'Decodificar Entidades HTML'
  },

  mode: {
    title: 'Modo de Codificação',
    named: 'Entidade Nomeada (&amp;lt;)',
    decimal: 'Entidade Decimal (&amp;#60;)',
    hex: 'Entidade Hexadecimal (&amp;#x3C;)',
    full: 'Codificação Completa (todos caracteres)'
  },

  input: {
    encodeTitle: 'Texto para Codificar',
    decodeTitle: 'Texto para Decodificar',
    encodePlaceholder: 'Digite o HTML ou texto a ser codificado...',
    decodePlaceholder: 'Digite o texto com entidades HTML a decodificar...',
    clear: 'Limpar'
  },

  output: {
    encodeTitle: 'Resultado da Codificação',
    decodeTitle: 'Resultado da Decodificação',
    copy: 'Copiar Resultado',
    copied: '(Copiado',
    preview: 'Visualizar',
    showSource: 'Mostrar Código-Fonte'
  },

  reference: {
    title: 'Referência de Entidades',
    commonReferenceTables: 'Tabela de Entidades HTML Comuns',
    show: 'Mostrar Tabela',
    hide: 'Ocultar Tabela',
    description: {
      named: 'Usa formato nomeado como &amp;lt; para &lt; (apenas para entidades HTML comuns)',
      decimal: 'Usa formato decimal como &amp;#60; para &lt;',
      hex: 'Usa formato hexadecimal como &amp;#x3C; para &lt;',
      full: 'Codifica todos caracteres não alfanuméricos, incluindo espaços e quebras de linha'
    },
    table: {
      char: 'Caractere',
      named: 'Entidade Nomeada',
      decimal: 'Entidade Decimal',
      description: 'Descrição'
    },
    entities: {
      lt: 'Sinal de menor que',
      gt: 'Sinal de maior que',
      amp: 'E comercial',
      quot: 'Aspas duplas',
      apos: 'Aspas simples',
      copy: 'Símbolo de copyright',
      reg: 'Marca registrada',
      trade: 'Símbolo de trademark',
      nbsp: 'Espaço sem quebra',
      cent: 'Símbolo de centavo',
      pound: 'Símbolo de libra',
      euro: 'Símbolo de euro',
      yen: 'Símbolo de yen/yuan',
      sect: 'Símbolo de seção',
      minus: 'Sinal de menos',
      times: 'Sinal de multiplicação',
      divide: 'Sinal de divisão',
      deg: 'Símbolo de grau',
      plusmn: 'Sinal de mais/menos',
      frac14: 'Um quarto'
    }
  },

  messages: {
    copySuccess: 'Copiado para área de transferência',
    copyError: 'Falha ao copiar - copie manualmente',
    encodeSuccess: 'Codificação concluída',
    decodeSuccess: 'Decodificação concluída',
    invalidInput: 'Texto de entrada inválido'
  }
};