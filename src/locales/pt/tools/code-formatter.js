export default {
    name: 'Formatador de Código',
    description: 'Formata e embeleza código em várias linguagens',
    languages: {
      title: 'Linguagens',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      typescript: 'TypeScript',
      json: 'JSON',
      sql: 'SQL',
      xml: 'XML',
      markdown: 'Markdown'
    },
    options: {
      title: 'Opções',
      indent: 'Recuo',
      tabSize: 'Tamanho do tab',
      insertSpaces: 'Inserir espaços',
      formatSelection: 'Formatar seleção',
      formatOnType: 'Formatar ao digitar',
      removeComments: 'Remover comentários',
      mangle: 'Ofuscar nomes de variáveis',
      lineBreak: 'Estilo de quebra de linha'
    },
    actions: {
      beautify: 'Embelezar',
      minify: 'Minificar',
      format: 'Formatar',
      copy: 'Copiar resultado',
      clear: 'Limpar',
      download: 'Baixar',
      paste: 'Colar da área de transferência',
      loadSample: 'Carregar código de exemplo'
    },
    messages: {
      formatSuccess: 'Código formatado com sucesso',
      formatError: 'Erro ao formatar código',
      copied: 'Copiado para a área de transferência!',
      languageChangeWarning: 'Alterar linguagem resetará seu código. Continuar?'
    },
    errors: {
      emptyCode: 'Por favor, insira código para formatar',
      invalidJson: 'JSON inválido',
      jsCompressionError: 'Erro de compressão JavaScript'
    },
    input: 'Entrada',
    output: 'Saída',
    placeholders: {
      input: 'Cole seu código aqui...',
      output: 'O código formatado aparecerá aqui...'
    },
    characters: 'Caracteres',
    space: 'Espaço',
    spaces: 'Espaços',
    auto: 'Automático',
    tips: {
      title: 'Dicas de uso',
      selectLanguage: 'Para melhores resultados de formatação, selecione a linguagem adequada ao seu código.',
      beautifyMinify: 'Use "Embelezar" para melhorar legibilidade do código e "Minificar" para reduzir tamanho do arquivo.',
      customizeOptions: 'Use o painel de configurações abaixo para personalizar opções de formatação.',
      keyboard: 'Pressione Tab no editor para inserir recuo.'
    }
  }