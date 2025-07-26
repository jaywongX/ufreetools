export default {
  name: 'Testador de Expressões Regulares',
  description: 'Teste e depure expressões regulares com realce em tempo real e explicações',

  actions: {
    test: 'Testar',
    clear: 'Limpar',
    showExamples: 'Mostrar exemplos',
    hideExamples: 'Ocultar exemplos',
    copy: 'Copiar'
  },

  sections: {
    examples: 'Exemplos comuns de regex',
    pattern: 'Padrão da expressão regular',
    input: 'Texto de teste',
    results: 'Resultados da correspondência',
    flags: 'Flags'
  },

  flags: {
    g: 'Correspondência global (g)',
    i: 'Ignorar maiúsculas/minúsculas (i)',
    m: 'Modo multilinha (m)',
    s: 'Ponto corresponde a tudo (s)',
    u: 'Modo Unicode (u)',
    y: 'Correspondência aderente (y)'
  },

  errors: {
    emptyRegex: 'Insira uma expressão regular',
    emptyTestString: 'Insira um texto para testar',
    invalidRegex: 'Expressão regular inválida'
  },

  messages: {
    matchesFound: '{count} correspondências encontradas',
    noMatches: 'Nenhuma correspondência encontrada',
    copied: 'Copiado para a área de transferência!'
  },

  placeholders: {
    pattern: 'Digite o padrão da expressão regular',
    testString: 'Digite o texto para testar'
  },

  options: {
    flags: 'Flags',
    global: 'Correspondência global (g)',
    caseInsensitive: 'Ignorar maiúsculas/minúsculas (i)',
    multiline: 'Modo multilinha (m)',
    dotAll: 'Ponto corresponde a tudo (s)',
    unicode: 'Modo Unicode (u)',
    sticky: 'Correspondência aderente (y)'
  },

  labels: {
    pattern: 'Expressão Regular',
    testString: 'Texto de Teste',
    matches: 'Correspondências',
    groups: 'Grupos',
    noMatches: 'Nenhuma correspondência'
  },

  tips: {
    title: 'Dicas de uso',
    pattern: 'Não inclua barras ao redor do padrão da expressão regular.',
    flags: 'Use flags para modificar o comportamento da correspondência (g: global, i: ignorar maiúsculas/minúsculas, m: multilinha).',
    examples: 'Clique em "Mostrar exemplos" para ver padrões comuns de expressões regulares.',
    testing: 'Após inserir o padrão e o texto de teste, clique em "Testar" para ver os resultados.'
  },

  match: 'Correspondência',
  position: 'Posição',
  group: 'Grupo',
  resultsWillAppearHere: 'Os resultados da correspondência aparecerão aqui...',
  regexError: 'Erro na expressão regular: {message}',
  emailAddress: 'Email',
  phoneNumber: 'Telefone (Brasil)',
  ipAddress: 'Endereço IP',
  dateFormat: 'Data (dd/mm/aaaa)',
  chineseCharacters: 'Caracteres chineses',
  phoneNumberExample: 'Contato: (11) 98765-4321\nWhatsApp: (21) 91234-5678\nFixo: 4003-1234',
  urlExample: 'Acesse https://exemplo.com.br\nou http://www.dominio.org/caminho?busca=valor',
  ipAddressExample: 'Servidor: 192.168.1.1\nDNS: 8.8.8.8, 1.1.1.1',
  dateFormatExample: 'Data inicial: 15/01/2023\nData final: 28/02/2023\nData inválida: 31/02/2023',
  chineseCharactersExample: 'Olá mundo! 你好，世界!'
};