export default {
  name: 'Embaralhador de Texto',
  description: 'Reorganiza aleatoriamente palavras, frases ou linhas de texto mantendo a formatação',
  inputLabel: 'Texto de entrada',
  inputPlaceholder: 'Digite ou cole seu texto aqui para embaralhar...',
  outputLabel: 'Resultado',
  shuffleMode: 'Modo de embaralhamento',

  modes: {
    word: 'Palavras',
    sentence: 'Frases',
    line: 'Linhas'
  },

  preserveOptions: 'Opções de preservação',
  preserveCapitalization: 'Manter maiúsculas',
  preservePunctuation: 'Manter pontuação',
  shuffleButton: 'Embaralhar',
  copyButton: 'Copiar resultado',
  clearButton: 'Limpar tudo',
  copiedMessage: 'Copiado para área de transferência!',
  tagline: 'A ferramenta de randomização de texto mais avançada',
  wordCount: 'palavras',
  importButton: 'Importar arquivo',
  clearInputButton: 'Limpar entrada',
  clearOutputButton: 'Limpar saída',
  downloadButton: 'Baixar',
  useExampleButton: 'Usar exemplo',
  advancedOptions: 'Opções avançadas',
  delimiterOptions: 'Opções de delimitadores',
  wordDelimiters: 'Delimitadores de palavras',
  wordDelimitersHint: 'Caracteres que separam palavras',
  sentenceDelimiters: 'Delimitadores de frases',
  sentenceDelimitersHint: 'Caracteres que terminam frases',
  additionalOptions: 'Opções adicionais',
  repeatCount: 'Contagem de repetições',
  repeatCountHint: 'Gerar múltiplas versões embaralhadas',
  shuffleGroup: 'Tamanho do grupo',
  shuffleGroupHint: 'Embaralhar palavras em grupos do tamanho especificado',
  removeRepeatedWords: 'Remover palavras repetidas',
  preserveSpacing: 'Manter espaçamento',
  examplesTitle: 'Exemplos',
  useThisExample: 'Usar este exemplo',
  helpTitle: 'Ajuda e informações',
  whatIsTitle: 'O que é o Embaralhador?',
  whatIsDescription: 'O Embaralhador de Texto é uma ferramenta que reorganiza aleatoriamente palavras, frases, linhas, caracteres ou parágrafos. Utiliza algoritmos sofisticados para garantir resultados verdadeiramente aleatórios enquanto preserva opções de formatação como maiúsculas e pontuação.',
  howToUseTitle: 'Como usar esta ferramenta',
  tipsTitle: 'Dicas de uso',

  modes: {
    word: 'Palavras',
    sentence: 'Frases',
    line: 'Linhas',
    character: 'Caracteres',
    paragraph: 'Parágrafos'
  },

  howToUseSteps: [
    'Insira ou cole seu texto na caixa à esquerda.',
    'Selecione o modo de embaralhamento e opções desejadas abaixo.',
    'Clique em "Embaralhar" para gerar texto aleatório.',
    'O resultado aparecerá na caixa à direita.',
    'Use os botões copiar ou baixar para salvar.'
  ],

  tips: [
    'Para exercícios criativos, use modo palavras mantendo maiúsculas mas removendo pontuação.',
    'Para testes de layout, use modo frases com todas opções de preservação ativadas.',
    'O modo caracteres pode gerar senhas ou códigos seguros baseados em texto.',
    'Embaralhamento em grupos mantém palavras relacionadas juntas durante a randomização.',
    'Precisa de variações? Configure a contagem de repetições para gerar múltiplas versões de uma vez.'
  ],

  examples: {
    basic: {
      title: 'Embaralhamento básico',
      description: 'Reorganização simples de palavras mantendo pontuação e maiúsculas',
      input: 'A rápida raposa marrom salta sobre o cão preguiçoso. Todos os cinco boxeadores saltam rapidamente.',
      output: 'Marrom rápida a salta raposa preguiçoso cão sobre o. Saltam boxeadores cinco os todos rapidamente.'
    },
    sentence: {
      title: 'Embaralhamento de frases',
      description: 'Reordenação de sentenças completas',
      input: 'Esta é a primeira frase. Aqui está a segunda. Segue-se a terceira. Finalmente, a quarta.',
      output: 'Segue-se a terceira. Esta é a primeira frase. Finalmente, a quarta. Aqui está a segunda.'
    },
    creative: {
      title: 'Recombinação criativa',
      description: 'Geração de novo texto criativo embaralhando palavras sem restrições de formatação',
      input: 'A poesia é a criação rítmica da beleza em palavras. É a revelação de um sentimento que o poeta acredita ser interior e pessoal, mas que o leitor reconhece como seu.',
      output: 'Beleza rítmica é criação palavras poeta acredita revelação leitor reconhece como poesia a em de ser que mas que seu interior e pessoal sentimento um de é a.'
    }
  },

  stepLabel: 'Passo',
  emptyInputMessage: 'Por favor insira texto para embaralhar',
  errorMessage: 'Erro ao processar - tente um modo ou opções diferentes',
  downloadFileName: 'texto_embaralhado.txt',

  errorMessages: {
    shuffleError: 'Erro no embaralhamento:',
    sentenceError: 'Erro com frases:',
    copyError: 'Erro ao copiar:'
  }
};