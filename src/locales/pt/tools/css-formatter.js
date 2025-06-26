export default {
    name: 'Formatação CSS',
    description: 'Formate e embeleze código CSS para melhorar a legibilidade',
    options: {
      indentSize: 'Tamanho do recuo',
      indentWithTabs: 'Usar tabulação para recuo',
      convertQuotes: 'Converter aspas',
      sortSelectors: 'Ordenar seletores',
      sortProperties: 'Ordenar propriedades',
      compressColors: 'Comprimir valores de cor',
      expandShorthand: 'Expandir propriedades abreviadas'
    },
    actions: {
      format: 'Formatar CSS',
      minify: 'Minificar',
      clear: 'Limpar',
      copy: 'Copiar',
      download: 'Baixar',
      upload: 'Enviar arquivo'
    },
    messages: {
      copied: 'Copiado para a área de transferência!',
      formatSuccess: 'CSS formatado com sucesso',
      formatError: 'Erro ao formatar CSS',
      invalidCss: 'Sintaxe CSS inválida'
    }
  }