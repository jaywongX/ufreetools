export default {
    name: 'Formatador SQL',
    description: 'Ferramenta online para formatar e validar SQL, com suporte a minificação e embelezamento',
    options: {
      language: 'Dialeto SQL',
      indent: 'Tipo de indentação',
      spaceCount: 'Número de espaços',
      keywordCase: 'Caixa das palavras-chave',
      uppercase: 'Maiúsculas',
      lineBreak: 'Estilo de quebra de linha',
      tabSize: 'Tamanho do tab'
    },
    languages: {
      standard: 'SQL padrão',
      mysql: 'MySQL',
      postgresql: 'PostgreSQL',
      sqlite: 'SQLite',
      tsql: 'T-SQL (SQL Server)',
      oracle: 'Oracle PL/SQL'
    },
    indentOptions: {
      spaces: 'Espaços',
      tabs: 'Tabulação'
    },
    spaceOptions: {
      two: '2 espaços',
      four: '4 espaços'
    },
    caseOptions: {
      preserve: 'Manter original',
      upper: 'Maiúsculas',
      lower: 'Minúsculas'
    },
    actions: {
      format: 'Formatar SQL',
      minify: 'Minificar SQL',
      clear: 'Limpar',
      copy: 'Copiar',
      download: 'Baixar',
    },
    messages: {
      copied: 'Copiado para área de transferência!',
      formatSuccess: 'SQL formatado com sucesso',
      formatError: 'Erro ao formatar SQL'
    },
    placeholders: {
      input: 'Insira sua consulta SQL aqui...',
      output: 'SQL formatado aparecerá aqui...'
    },
    output: 'Resultado da formatação',
    tips: {
      title: 'Dicas de uso',
      dialect: 'Selecione o dialeto SQL apropriado para obter resultados de formatação precisos.',
      formatting: 'Personalize o estilo de indentação e número de espaços para corresponder ao seu estilo de codificação preferido.',
      keywords: 'Escolha se deseja preservar, colocar em maiúsculas ou minúsculas as palavras-chave SQL.',
      copy: 'Use o botão copiar para rapidamente colocar o SQL formatado na área de transferência.'
    }
  }