export default {
    name: 'Verificador de Força de Senha',
    description: 'Analise e verifique a força da sua senha com métricas de segurança detalhadas',
    input: {
      title: 'Insira sua senha para análise',
      placeholder: 'Digite sua senha aqui...',
      showPassword: 'Mostrar senha',
      hidePassword: 'Ocultar senha',
      clear: 'Limpar',
      generate: 'Gerar senha',
      check: 'Verificar força',
      empty: 'Digite uma senha para ver a avaliação',
      disclaimer: 'Analisamos a segurança da senha localmente. Sua senha não é armazenada ou enviada a servidores.'
    },
    results: {
      title: 'Análise de Segurança da Senha',
      strength: 'Força',
      score: 'Pontuação',
      entropy: 'Entropia',
      crackTime: 'Tempo estimado para quebra',
      very_weak: 'Muito fraca',
      weak: 'Fraca',
      fair: 'Média',
      good: 'Boa',
      strong: 'Forte',
      very_strong: 'Muito forte',
      feedback: 'Feedback',
      suggestions: 'Sugestões de melhoria',
      warnings: 'Problemas detectados',
      noWarnings: 'Nenhum problema encontrado',
      noSuggestions: 'Nenhuma sugestão disponível'
    },
    details: {
      title: 'Análise Detalhada',
      length: 'Comprimento',
      charset: 'Diversidade de caracteres',
      patterns: 'Padrões utilizados',
      uniqueChars: 'Caracteres únicos',
      uppercase: 'Letras maiúsculas',
      lowercase: 'Letras minúsculas',
      numbers: 'Números',
      symbols: 'Símbolos especiais',
      repetitions: 'Repetições',
      sequences: 'Sequências',
      dictionary: 'Palavras comuns',
      leaked: 'Vazamentos conhecidos',
      reused: 'Padrões reutilizados'
    },
    patterns: {
      dictionary: 'Palavra comum',
      sequence: 'Sequência de caracteres',
      repeat: 'Caracteres repetidos',
      spatial: 'Padrão espacial (teclado)',
      date: 'Data',
      year: 'Ano',
      common: 'Senha comum',
      name: 'Nome',
      reversal: 'Palavra invertida',
      leet: 'Substituições "leet"',
      predictable: 'Padrão previsível'
    },
    crackTimes: {
      instantly: 'Instantaneamente',
      seconds: 'Segundos',
      minutes: 'Minutos',
      hours: 'Horas',
      days: 'Dias',
      months: 'Meses',
      years: 'Anos',
      centuries: 'Séculos',
      forever: 'Praticamente nunca'
    },
    suggestions: {
      addWords: 'Adicione mais palavras ou caracteres',
      addSymbols: 'Inclua símbolos especiais',
      addNumbers: 'Adicione números',
      upperLower: 'Misture maiúsculas e minúsculas',
      avoidPatterns: 'Evite sequências ou repetições no teclado',
      avoidCommon: 'Evite senhas baseadas em dicionário, mesmo com substituições (como "3" no lugar de "e")',
      avoidPersonal: 'Evite informações pessoais',
      avoidDictionary: 'Evite palavras de dicionário',
      usePassphrase: 'Combine palavras aleatórias para criar senhas fortes e memoráveis',
      increaseLonger: 'Aumente o comprimento da senha',
      avoidSequence: 'Evite sequências',
      avoidRepeated: 'Evite caracteres repetidos',
      avoidDates: 'Evite datas e anos',
      addMoreChars: 'Use pelo menos 12 caracteres - cada caractere adicional aumenta exponencialmente a segurança',
      addTypes: 'Adicione {types} para aumentar a complexidade',
      useManager: 'Use um gerenciador de senhas para criar e armazenar senhas únicas para cada site'
    },
    generator: {
      title: 'Gerador de Senhas',
      length: 'Comprimento',
      options: 'Opções',
      uppercase: 'Incluir maiúsculas',
      lowercase: 'Incluir minúsculas',
      numbers: 'Incluir números',
      symbols: 'Incluir símbolos',
      excludeSimilar: 'Excluir caracteres similares',
      excludeAmbiguous: 'Excluir caracteres ambíguos',
      generate: 'Gerar senha',
      passphrase: 'Gerar frase-senha',
      wordCount: 'Número de palavras',
      separator: 'Separador',
      capitalize: 'Capitalizar palavras',
      includeNumber: 'Incluir número',
      includeSymbol: 'Incluir símbolo'
    },
    common: {
      copy: 'Copiar',
      save: 'Salvar histórico',
      clear: 'Limpar',
      refresh: 'Atualizar',
      copied: 'Copiado para área de transferência',
      saved: 'Salvo no histórico',
      history: 'Histórico',
      noHistory: 'Nenhum histórico disponível',
      common: 'Comum'
    },
    breach: {
      title: 'Verificação de vazamentos',
      description: 'Verifique se sua senha aparece em vazamentos de dados conhecidos',
      disclaimer: 'Sua senha nunca é enviada. Apenas um hash parcial é verificado.',
      checkButton: 'Verificar vazamentos',
      safe: 'Não encontrada em vazamentos conhecidos',
      found: 'Encontrada em {count} vazamentos!',
      warning: 'Esta senha foi exposta em vazamentos e não deve ser usada.',
      checking: 'Verificando vazamentos...'
    },
    settings: {
      title: 'Configurações',
      algorithm: 'Algoritmo de força',
      history: 'Salvar histórico',
      clearHistory: 'Limpar histórico',
      breachCheck: 'Verificar vazamentos',
      timeout: 'Limpar após timeout',
      timeoutDuration: 'Duração do timeout (segundos)',
      clipboard: 'Limpar área de transferência após copiar',
      language: 'Idioma'
    },
    score: {
      none: 'Sem pontuação'
    },
    descriptions: {
      none: 'Não foi possível avaliar a força da senha',
      veryWeak: 'Esta senha é extremamente fácil de adivinhar ou quebrar',
      weak: 'Esta senha tem baixa segurança e pode ser facilmente comprometida',
      fair: 'Esta senha tem segurança moderada, mas pode ser melhorada',
      good: 'Esta é uma senha segura, difícil de ser quebrada',
      veryStrong: 'Esta é uma senha muito segura, praticamente impossível de quebrar'
    },
    length: {
      none: 'Nenhuma',
      tooShort: 'Muito curta',
      acceptable: 'Aceitável',
      good: 'Boa',
      excellent: 'Excelente'
    },
    lengthMessage: {
      none: 'Nenhuma senha inserida',
      needMore: 'Mínimo de {min} caracteres necessário',
      better: '{min} ou mais caracteres aumentam a segurança',
      good: 'Ótimo! Senhas longas são mais seguras',
      excellent: 'Comprimento excelente!'
    },
    complexity: {
      none: 'Nenhuma',
      veryLow: 'Muito baixa',
      fair: 'Média',
      good: 'Boa',
      excellent: 'Excelente'
    },
    issues: {
      tooShort: 'Muito curta (menos de 8 caracteres)',
      noUppercase: 'Sem letras maiúsculas',
      noLowercase: 'Sem letras minúsculas',
      noNumbers: 'Sem números',
      noSymbols: 'Sem símbolos especiais',
      hasSequence: 'Contém sequências comuns (ex: "qwerty" ou "123456")',
      hasRepeated: 'Contém caracteres repetidos (ex: "aaa" ou "111")',
      commonPassword: 'Senha comum ou fácil de adivinhar'
    },
    characters: 'caracteres',
    tips: {
      title: 'Dicas de segurança para senhas',
      length: 'Use senhas com pelo menos 12 caracteres',
      mix: 'Misture maiúsculas, minúsculas, números e símbolos',
      avoid: 'Evite palavras comuns, frases ou informações pessoais',
      unique: 'Não reuse senhas em múltiplos sites',
      manager: 'Considere usar um gerenciador de senhas'
    },
    article: {
      title: "Verificador de Força de Senha: Avalie e melhore sua segurança online",
      features: {
        title: "Entendendo a análise de segurança de senhas",
        description: "Este <strong>verificador de força de senha</strong> é uma ferramenta abrangente que analisa múltiplos fatores de segurança, incluindo comprimento, diversidade de caracteres, padrões e similaridade com senhas comuns.<br><br>Nosso <strong>analisador de senhas</strong> fornece feedback detalhado sobre pontos fortes e fracos, gerando uma pontuação de segurança e recomendações específicas. Como <strong>detector de vulnerabilidades</strong>, ele identifica problemas potenciais sem armazenar ou transmitir sua senha, garantindo privacidade total.",
        useCases: {
          title: "Aplicações práticas do verificador de senhas",
          items: [
            "<strong>Criação de contas</strong>: Verifique senhas durante cadastros para garantir conformidade com padrões de segurança",
            "<strong>Auditoria de segurança</strong>: Revise periodicamente suas senhas existentes",
            "<strong>Políticas organizacionais</strong>: Empresas podem usar para educar funcionários sobre boas práticas",
            "<strong>Educação</strong>: Demonstre visualmente diferenças entre senhas fracas e fortes",
            "<strong>Pós-vazamentos</strong>: Verifique se senhas atuais atendem aos melhores padrões após incidentes",
            "<strong>Transição para gerenciadores</strong>: Avalie senhas existentes ao migrar para gerenciadores de senhas"
          ]
        }
      },
      faq: {
        title: "Perguntas frequentes sobre segurança de senhas",
        items: [
          {
            question: "Minha senha está segura ao usar esta ferramenta?",
            answer: "Sim, sua senha é processada apenas localmente no seu navegador, sem transmissão ou armazenamento em servidores."
          },
          {
            question: "O que torna uma senha realmente forte?",
            answer: "Comprimento adequado (12+ caracteres), diversidade de caracteres, imprevisibilidade e ausência de padrões comuns são essenciais."
          },
          {
            question: "Por que minha senha complexa foi marcada como fraca?",
            answer: "Padrões previsíveis, substituições comuns ou vazamentos conhecidos podem comprometer senhas aparentemente complexas."
          },
          {
            question: "Com que frequência devo atualizar minhas senhas?",
            answer: "A cada 3-6 meses para contas críticas, ou imediatamente após suspeitas de comprometimento."
          },
          {
            question: "O que é melhor: senha complexa e curta ou simples e longa?",
            answer: "Senhas longas geralmente oferecem melhor segurança, mas o ideal é combinar comprimento com diversidade de caracteres."
          }
        ]
      },
      guide: {
        title: "Guia passo a passo para usar o verificador",
        steps: [
            "Digite sua senha existente ou sugerida <strong> </strong> no campo de entrada segura. O design da ferramenta com foco na privacidade garante que suas senhas nunca sejam transmitidas ou armazenadas durante a análise de segurança ",
            "Veja a pontuação geral < forte > força </ forte > mostrada no medidor de cores, que fornece uma indicação intuitiva sobre o nível de segurança da sua senha de muito fraco (vermelho) a muito forte (verde) ",
            "Verifique a seção < forte > análise detalhada </ forte > para entender os aspectos específicos da força da senha que afetam sua classificação de segurança geral, incluindo a avaliação do comprimento e as métricas de diversidade de caracteres ",
            "Preste atenção a qualquer <strong> detected problem </strong> destacado na seção de aviso, que identifica vulnerabilidades específicas, como padrões comuns, caracteres repetidos ou componentes baseados em dicionário ",
            "Leia <strong> sugestões de melhoria </strong> adaptadas aos seus pontos fracos de senha, fornecendo conselhos práticos específicos sobre como fortalecer sua senha contra vários métodos de ataque ",
            "Aplique as alterações recomendadas para criar uma senha mais forte e, em seguida, < forte > teste novamente </ forte > para verificar a melhoria e continue a aperfeiçoar até atingir uma classificação de segurança satisfatória"
        ]
      },
      conclusion: "Este verificador é essencial para segurança digital. Senhas fortes, únicas e regularmente atualizadas são sua primeira linha de defesa. Combine com um gerenciador de senhas para máxima proteção."
    }
  }