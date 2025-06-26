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
    
    article: {
      title: "Embaralhador de Texto: Criando conteúdo aleatório com estrutura preservada",
      features: {
        title: "Entendendo o embaralhamento de texto",
        description: "O <strong>Embaralhador de Texto</strong> é uma <strong>ferramenta de processamento de texto</strong> versátil que permite reorganizar aleatoriamente palavras, frases ou linhas enquanto mantém elementos importantes de formatação. Este <strong>gerador de texto aleatório</strong> oferece múltiplos modos de embaralhamento para diferentes necessidades - seja para criar conteúdo de teste, gerar prompts de escrita criativa ou produzir textos com ordem alterada mantendo legibilidade.<br><br>Nosso <strong>embaralhador de palavras</strong> proporciona controle refinado através de opções para preservar maiúsculas e pontuação, garantindo que seu texto embaralhado mantenha formatação adequada. Seja trabalhando com parágrafos simples ou documentos complexos, esta ferramenta oferece um método eficiente para gerar permutações aleatórias que preservam elementos estruturais-chave."
      },
      primaryFeatures: [
        {
          title: "Múltiplos modos de embaralhamento",
          description: "Escolha entre embaralhar palavras, frases, linhas, caracteres ou parágrafos para atingir o nível desejado de aleatoriedade."
        },
        {
          title: "Preservação de formatação",
          description: "Mantém maiúsculas e pontuação mesmo após embaralhamento, deixando o texto com aparência natural e corretamente formatado."
        },
        {
          title: "Delimitadores personalizáveis",
          description: "Defina seus próprios separadores de palavras e frases para controlar precisamente como o texto é dividido antes do embaralhamento."
        },
        {
          title: "Embaralhamento em grupos",
          description: "Embaralhe palavras em grupos mantendo certas relações semânticas durante a randomização."
        }
      ],
      howToUse: {
        title: "Como usar o Embaralhador de Texto",
        steps: [
          "Insira ou cole seu texto na caixa de entrada à esquerda.",
          "Selecione o modo de embaralhamento desejado (palavras, frases, linhas, caracteres ou parágrafos).",
          "Configure opções avançadas como preservação e delimitadores, se necessário.",
          "Clique no botão \"Embaralhar\" para gerar conteúdo aleatório.",
          "Visualize o resultado na caixa de saída e use os botões de cópia ou download para salvar.",
          "Para múltiplas variações, ajuste a contagem de repetições e embaralhe novamente."
        ]
      },
      useCases: {
        title: "Aplicações práticas do embaralhamento de texto",
        examples: [
          {
            title: "Exercícios de escrita",
            description: "Gere prompts de escrita embaralhando textos existentes, criando novas combinações para oficinas criativas, poesia ou projetos pessoais."
          },
          {
            title: "Testes de interface",
            description: "Crie conteúdo aleatório para testar interfaces de usuário, verificando se lidam adequadamente com conteúdo variável. Ideal para desenvolvedores web validando layouts responsivos."
          },
          {
            title: "Atividades educacionais",
            description: "Desenvolva exercícios de linguagem onde alunos devem reordenar textos embaralhados, aprimorando compreensão e habilidades gramaticais."
          },
          {
            title: "Inspiração criativa",
            description: "Descubra novas perspectivas identificando combinações interessantes em textos reorganizados, ajudando escritores a superar bloqueios."
          },
          {
            title: "Anonimização de dados",
            description: "Embaralhe palavras em textos sensíveis para criar conteúdo realista mas anônimo em demonstrações e ambientes de teste."
          },
          {
            title: "Prática de apresentações",
            description: "Crie variações de discursos praticando com diferentes ordenações de palavras, melhorando adaptabilidade e reduzindo dependência de sequências memorizadas."
          }
        ]
      },
      faqs: {
        title: "Perguntas frequentes sobre o Embaralhador",
        questions: [
          {
            question: "O embaralhamento afeta minha formatação?",
            answer: "Com opções de preservação ativadas, o Embaralhador mantém maiúsculas e pontuação, garantindo resultados com formatação adequada. Letras maiúsculas no início de frases e pontuação final permanecem inalterados mesmo com palavras reorganizadas."
          },
          {
            question: "Posso embaralhar apenas partes do texto?",
            answer: "A ferramenta opera no texto inteiro, mas você pode processar seções menores separadamente e combiná-las com conteúdo não embaralhado. Para maior controle, use o modo parágrafos."
          },
          {
            question: "O embaralhamento é realmente aleatório?",
            answer: "Sim, utilizamos o algoritmo Fisher-Yates para garantir reorganização verdadeiramente aleatória. Cada clique no botão gera uma nova permutação única."
          },
          {
            question: "Quais as diferenças entre os modos?",
            answer: "Modo palavras: embaralha palavras individuais mantendo pontuação. Frases: mantém sentenças intactas mas reordena. Linhas: preserva linhas mas altera sua ordem no documento. Caracteres: randomiza caracteres individualmente. Parágrafos: mantém parágrafos completos mas reordena."
          },
          {
            question: "Posso customizar delimitadores?",
            answer: "Sim, o painel avançado permite definir separadores personalizados para palavras e frases, útil para conteúdo especializado ou idiomas com pontuação única."
          },
          {
            question: "Como remover palavras repetidas?",
            answer: "Ative \"Remover palavras duplicadas\" nas configurações avançadas para garantir que cada palavra apareça apenas uma vez no resultado."
          },
          {
            question: "Há limite de tamanho para o texto?",
            answer: "A ferramenta processa textos extensos, mas documentos muito grandes (acima de 100.000 caracteres) podem ter desempenho reduzido. Recomendamos dividir textos muito extensos."
          }
        ]
      },
      advancedTips: {
        title: "Dicas avançadas para dominar o embaralhamento",
        description: "Aproveite ao máximo o Embaralhador com estas técnicas especializadas para criar exatamente o tipo de texto aleatório que você precisa.",
        tips: [
          "Use \"Tamanho do grupo\" para manter pequenas frases juntas enquanto as reordena - ideal para preservar pares adjetivo-substantivo.",
          "Para escrita surrealista, passe o texto por múltiplos modos de embaralhamento combinando caracteres e palavras.",
          "Ajuste delimitadores para incluir/excluir certos sinais de pontuação, criando padrões de reorganização mais diversificados.",
          "Ao trabalhar com poesia, use o modo linhas para preservar versos enquanto explora diferentes arranjos de estrofes.",
          "Para testes, use a contagem de repetições para gerar múltiplas variações de uma vez.",
          "Mantenha maiúsculas mas remova pontuação para criar textos no estilo fluxo de consciência.",
          "Use o modo caracteres em frases para criar códigos ou senhas únicas baseadas em texto significativo.",
          "Importe textos de múltiplas fontes, embaralhe separadamente e combine os resultados para fusões criativas interessantes."
        ]
      }
    },
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
  }