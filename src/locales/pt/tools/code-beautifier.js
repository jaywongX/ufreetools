export default {
    name: 'Embelezador de Código',
    description: 'Formata e embeleza código com destaque de sintaxe e indentação',
    languages: {
      title: 'Linguagens',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      json: 'JSON',
      sql: 'SQL',
      xml: 'XML',
      markdown: 'Markdown',
      php: 'PHP',
      python: 'Python',
      ruby: 'Ruby',
      java: 'Java',
      csharp: 'C#',
      cpp: 'C++',
      typescript: 'TypeScript'
    },
    actions: {
      beautify: 'Embelezar',
      minify: 'Minificar',
      clear: 'Limpar',
      copy: 'Copiar',
      download: 'Baixar',
      upload: 'Enviar arquivo'
    },
    options: {
      title: 'Opções',
      indentSize: 'Tamanho da indentação',
      indentWith: 'Tipo de indentação',
      spaces: 'Espaços',
      tabs: 'Tabuladores',
      lineBreaks: 'Estilo de quebra de linha',
      quoteStyle: 'Estilo de aspas',
      bracketStyle: 'Estilo de colchetes',
      preserveNewlines: 'Preservar quebras de linha',
      endWithNewline: 'Terminar com quebra de linha',
      removeComments: 'Remover comentários',
      wrapLineLength: 'Comprimento da linha',
      lineNumbers: 'Números de linha',
      showLineNumbers: 'Mostrar números de linha',
      wrapLines: 'Quebra automática de linha',
      theme: 'Tema',
      autoDetect: 'Detecção automática',
      tryAutoDetect: 'Tentar detectar linguagem automaticamente'
    },
    input: {
      title: 'Entrada',
      placeholder: 'Cole seu código aqui...'
    },
    output: {
      title: 'Saída',
      placeholder: 'O código embelezado aparecerá aqui...'
    },
    messages: {
      copied: 'Copiado para a área de transferência!',
      beautifySuccess: 'Código embelezado com sucesso',
      minifySuccess: 'Código minificado com sucesso',
      beautifyError: 'Erro ao embelezar código',
      minifyError: 'Erro ao minificar código',
      emptyCode: 'Por favor, insira o código para embelezar',
      fileTooBig: 'Arquivo muito grande (máximo 2MB)',
      invalidFile: 'Tipo de arquivo inválido ou não suportado',
      preview: 'Pré-visualização',
      HTMLCode: 'Código HTML',
    },
    stats: {
      original: 'Original',
      beautified: 'Embelezado',
      minified: 'Minificado',
      size: 'Tamanho',
      characters: 'Caracteres',
      lines: 'Linhas'
    },
    tips: {
      title: 'Dicas de uso',
      tip1: 'Selecione a linguagem de programação adequada para melhor destaque de sintaxe',
      tip2: 'Escolha diferentes temas para combinar com o estilo do seu site',
      tip3: 'Copie o código HTML gerado para colar diretamente em editores ou sites que suportam HTML',
      tip4: 'O código destacado suporta modo escuro e adaptável',
      tip5: 'Adicionar números de linha melhora a legibilidade e facilita referências'
    }
  }