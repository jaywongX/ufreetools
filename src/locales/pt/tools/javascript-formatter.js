export default {
    name: 'Formatação JavaScript',
    description: 'Ferramenta online para formatar e validar JavaScript, com suporte a minificação e embelezamento',
    options: {
      indent: 'Recuo',
      quotes: 'Estilo de aspas',
      semicolons: 'Pontuação',
      trailingComma: 'Vírgula final'
    },
    actions: {
      format: 'Formatar JavaScript',
      minify: 'Minificar',
      beautify: 'Embelezar',
      clear: 'Limpar',
      copy: 'Copiar',
      download: 'Download'
    },
    messages: {
      copied: 'Copiado para a área de transferência!',
      formatSuccess: 'JavaScript formatado com sucesso',
      formatError: 'Erro ao formatar JavaScript'
    }
  }