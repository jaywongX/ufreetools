export default {
    name: 'Analisador de Complexidade de Código',
    description: 'Analisa métricas de complexidade de código como complexidade ciclomática e capacidade de manutenção',
    title: 'Análise de Complexidade de Código',
    subtitle: 'Analisa várias métricas de complexidade para código JavaScript, incluindo complexidade ciclomática, métricas Halstead e índice de manutenibilidade',
    input: {
        title: 'Insira código JavaScript',
        placeholder: 'Cole código JavaScript aqui...',
        loadExample: 'Carregar exemplo',
        clear: 'Limpar'
    },
    options: {
        title: 'Opções de análise',
        cyclomaticComplexity: 'Calcular complexidade ciclomática (complexidade McCabe)',
        halsteadMetrics: 'Calcular métricas Halstead (comprimento do programa, vocabulário, volume etc.)',
        maintainabilityIndex: 'Calcular índice de manutenibilidade (métrica de capacidade de manutenção do código)',
        functionDetails: 'Mostrar resultados de análise em nível de função'
    },
    languages: {
        title: 'Linguagens',
        javascript: 'JavaScript',
        typescript: 'TypeScript',
        python: 'Python',
        java: 'Java',
        csharp: 'C#',
        php: 'PHP',
        go: 'Go',
        ruby: 'Ruby'
    },
    metrics: {
        title: 'Métricas',
        cyclomaticComplexity: 'Complexidade ciclomática',
        maintainabilityIndex: 'Índice de manutenibilidade',
        halsteadVolume: 'Volume Halstead',
        halsteadDifficulty: 'Dificuldade Halstead',
        halsteadEffort: 'Esforço Halstead',
        halsteadTime: 'Tempo Halstead',
        halsteadBugs: 'Bugs Halstead',
        linesOfCode: 'Linhas de código',
        logicalLoc: 'Linhas lógicas de código',
        commentLines: 'Linhas de comentário',
        commentRatio: 'Proporção de comentários',
        operatorCount: 'Contagem de operadores',
        operandCount: 'Contagem de operandos',
        functionCount: 'Número de funções',
        maxNestingDepth: 'Profundidade máxima de aninhamento',
        averageDepth: 'Profundidade média',
        halstead: {
            title: 'Métricas Halstead',
            length: 'Comprimento do programa',
            vocabulary: 'Vocabulário',
            volume: 'Volume do programa',
            difficulty: 'Dificuldade'
        }
    },
    results: {
        title: 'Resultados da análise',
        file: 'Arquivo',
        method: 'Método',
        score: 'Pontuação',
        complexity: 'Complexidade',
        rating: 'Classificação',
        loc: 'Linhas',
        issues: 'Problemas',
        summary: 'Resumo geral do código',
        details: 'Detalhes',
        noResults: 'Nenhum resultado de análise ainda. Insira código e clique em "Analisar código" para ver métricas.',
        avgCyclomaticComplexity: 'Complexidade ciclomática média',
        maintainabilityIndex: 'Índice de manutenibilidade',
        linesOfCode: 'Linhas de código',
        functionDetails: 'Análise em nível de função',
        functionName: 'Nome da função',
        parameters: 'Número de parâmetros',
        anonymousFunction: '(função anônima)'
    },
    ratings: {
        excellent: 'Excelente',
        good: 'Bom',
        moderate: 'Moderado',
        poor: 'Ruim',
        veryPoor: 'Muito ruim'
    },
    complexity: {
        title: 'Explicação das métricas de complexidade:',
        low: 'Baixa complexidade - código simples e claro, fácil de entender e manter',
        medium: 'Complexidade média - código um pouco complexo, mas ainda aceitável',
        high: 'Alta complexidade - código excessivamente complexo, considere refatorar'
    },
    actions: {
        analyze: 'Analisar código',
        analyzing: 'Analisando...',
        clearCode: 'Limpar código',
        uploadFile: 'Carregar arquivo',
        copy: 'Copiar resultados',
        download: 'Baixar relatório',
        export: 'Exportar relatório (JSON)'
    },
    messages: {
        analyzing: 'Analisando código...',
        analysisComplete: 'Análise concluída',
        analysisError: 'Erro ao analisar código',
        analysisFailure: 'Falha ao analisar código: {error}',
        copied: 'Copiado para a área de transferência!',
        emptyCode: 'Por favor, insira código para analisar',
        fileTooBig: 'Arquivo muito grande (máximo 1MB)',
        invalidFile: 'Tipo de arquivo inválido ou não suportado',
        errorTitle: 'Erro de análise'
    },
    tips: {
        title: 'Dicas de uso',
        cyclomaticComplexity: 'A complexidade ciclomática mede o número de caminhos independentes no código-fonte.',
        maintainability: 'O índice de manutenibilidade indica a capacidade de manutenção do código, valores mais altos são melhores.',
        recommendations: 'Para melhor qualidade de código, tente manter baixa complexidade e alta pontuação de manutenibilidade.',
        refactoring: 'Considere refatorar funções com pontuação de complexidade acima de 10.'
    },
    article: {
        title: "Entendendo a Análise de Complexidade de Código para Melhorar a Qualidade do Desenvolvimento de Software",
        overview: {
            title: "O que é análise de complexidade de código?",
            content: "<strong>Análise de complexidade de código</strong> é uma ferramenta profissional que examina código-fonte e mede sua complexidade estrutural, capacidade de manutenção e fatores de risco potenciais. Esta poderosa ferramenta de desenvolvimento ajuda programadores a identificar seções de código excessivamente complexas que podem ser propensas a bugs, difíceis de manter ou desafiadoras para estender.<br><br>Ao usar métricas de software estabelecidas como complexidade ciclomática, métricas Halstead e índice de manutenibilidade para quantificar a complexidade, esta ferramenta fornece dados objetivos sobre qualidade de código, permitindo que equipes de desenvolvimento tomem decisões informadas sobre onde concentrar esforços de refatoração. A análise de complexidade de código é uma prática fundamental no desenvolvimento de software moderno, apoiando o gerenciamento de dívida técnica e iniciativas de melhoria de qualidade de código."
        },
        useCases: {
            title: "Casos de uso comuns para análise de complexidade de código",
            items: [
                {
                    title: "Gerenciamento de dívida técnica",
                    description: "Identificar áreas de código complexas que contribuem para dívida técnica, permitindo que equipes priorizem trabalhos de redução focando em seções de alto risco e alta complexidade."
                },
                {
                    title: "Aprimoramento de revisão de código",
                    description: "Aumentar revisões de código manuais com métricas objetivas de complexidade, ajudando revisores a detectar áreas potencialmente problemáticas que precisam de verificação adicional durante o processo de revisão."
                },
                {
                    title: "Determinação de prioridades de refatoração",
                    description: "Usar métricas de complexidade para decidir objetivamente quais seções de código devem ser refatoradas primeiro, garantindo que esforços de manutenção foquem nas áreas mais problemáticas."
                },
                {
                    title: "Aplicação de portões de qualidade",
                    description: "Estabelecer limiares de complexidade em pipelines de integração contínua para evitar que código excessivamente complexo seja mesclado no repositório principal e manter altos padrões de qualidade."
                },
                {
                    title: "Alocação de recursos de teste",
                    description: "Destinar mais recursos de teste para seções de código de alta complexidade que estatisticamente têm maior probabilidade de conter defeitos, otimizando esforços de garantia de qualidade."
                },
                {
                    title: "Integração de novos desenvolvedores",
                    description: "Ajudar novos membros da equipe a identificar partes simples da base de código para começar a trabalhar, gradualmente avançando para seções mais complexas conforme ganham familiaridade."
                },
                {
                    title: "Avaliação de código legado",
                    description: "Avaliar complexidade de sistemas legados para estimar custos de manutenção, esforço de refatoração ou riscos envolvidos em alterar código antigo."
                }
            ]
        },
        guide: {
            title: "Como usar o analisador de complexidade de código",
            intro: "Siga estas etapas para analisar efetivamente a complexidade do código e interpretar resultados:",
            steps: [
                {
                    title: "Prepare sua amostra de código",
                    description: "Primeiro determine qual código JavaScript você deseja analisar. Você pode usar um arquivo completo, ou focar em funções ou módulos específicos de interesse. Código limpo e bem formatado fornece os resultados de análise mais precisos."
                },
                {
                    title: "Insira seu código",
                    description: "Cole seu código JavaScript na área de texto de entrada. Para conveniência, se você é novo em análise de complexidade, pode usar o botão \"Carregar exemplo\" para ver como o analisador lida com código de exemplo."
                },
                {
                    title: "Selecione opções de análise",
                    description: "Escolha quais métricas de complexidade calcular marcando as opções correspondentes: complexidade ciclomática mede complexidade de caminhos de código, métricas Halstead avaliam volume e dificuldade do código, índice de manutenibilidade fornece uma pontuação geral de capacidade de manutenção, e detalhes de função mostram métricas para funções individuais."
                },
                {
                    title: "Analise seu código",
                    description: "Clique no botão \"Analisar código\" para processar sua entrada. A ferramenta analisará o código JavaScript, calculará as métricas de complexidade selecionadas e gerará um relatório abrangente."
                },
                {
                    title: "Veja o resumo geral",
                    description: "Verifique a seção de resumo, que fornece uma visão geral de alto nível da complexidade do código. Foque na complexidade ciclomática média, índice de manutenibilidade e métricas de linhas de código para entender a saúde geral do código."
                },
                {
                    title: "Verifique detalhes por função",
                    description: "Se você selecionou \"Mostrar análise em nível de função\", veja a tabela que mostra métricas para cada função. Procure funções com pontuações altas de complexidade (destacadas em amarelo ou vermelho), que são candidatas principais para refatoração."
                },
                {
                    title: "Exporte resultados quando necessário",
                    description: "Use o botão \"Exportar relatório\" para baixar resultados da análise em formato JSON para processamento adicional, documentação ou compartilhamento com a equipe. Isso é especialmente útil para acompanhar métricas de complexidade ao longo do tempo."
                }
            ]
        },
        metrics: {
            title: "Entendendo as métricas de complexidade de código",
            intro: "A análise de complexidade de código usa várias métricas estabelecidas para avaliar diferentes aspectos da qualidade e capacidade de manutenção do código:",
            items: [
                {
                    name: "Complexidade ciclomática",
                    description: "Mede o número de caminhos independentes no código-fonte, essencialmente quantificando a complexidade de decisão do código. Valores mais altos indicam código com mais ramificações, condições e caminhos de execução potenciais. Código com alta complexidade ciclomática é tipicamente mais difícil de entender, testar e manter. A maioria das funções deve ter como objetivo valores abaixo de 10."
                },
                {
                    name: "Métricas Halstead",
                    description: "Um conjunto de métricas que medem o tamanho e esforço do programa baseado na contagem de operadores e operandos no código. Isso inclui comprimento do programa, vocabulário, volume, dificuldade, esforço e erros estimados. As métricas Halstead fornecem insights sobre a carga cognitiva necessária para entender o código. Valores mais baixos de dificuldade e volume geralmente indicam código mais sustentável."
                },
                {
                    name: "Índice de manutenibilidade",
                    description: "Uma métrica composta que combina complexidade ciclomática, volume Halstead e linhas de código para dar uma indicação geral da capacidade de manutenção do código. A pontuação varia de 0 a 100, com valores mais altos indicando código mais sustentável. Pontuações acima de 70 são consideradas boas, enquanto abaixo de 20 indicam código que pode ser extremamente difícil de manter."
                },
                {
                    name: "Linhas de código (LOC)",
                    description: "Uma métrica simples mas efetiva do tamanho do código. Embora não seja diretamente uma métrica de complexidade, LOC frequentemente se correlaciona com complexidade e esforço de manutenção. Funções com muitas linhas (tipicamente acima de 100) podem se beneficiar de serem divididas em funções menores e mais focadas."
                },
                {
                    name: "Contagem de parâmetros",
                    description: "O número de parâmetros que uma função aceita. Funções com muitos parâmetros (tipicamente mais de 4) podem ser difíceis de entender e usar corretamente, frequentemente indicando um design que poderia ser melhorado com refatoração ou uso de objetos de parâmetro."
                }
            ]
        },
        faq: {
            title: "Perguntas frequentes sobre análise de complexidade de código",
            items: [
                {
                    question: "Por que a análise de complexidade de código é importante?",
                    answer: "A análise de complexidade de código ajuda a identificar código problemático antes que ele cause bugs, problemas de manutenção ou gargalos de desenvolvimento. Pesquisas mostram que código complexo é significativamente mais propenso a erros e mais caro para manter. Ao identificar e reduzir complexidade, equipes podem melhorar qualidade de software, reduzir custos de manutenção, acelerar desenvolvimento e aumentar produtividade e satisfação dos desenvolvedores."
                },
                {
                    question: "O que é uma boa pontuação de complexidade ciclomática?",
                    answer: "Geralmente, funções com complexidade ciclomática abaixo de 5 são consideradas simples e fáceis de manter. Pontuações entre 6-10 são de complexidade moderada e ainda aceitáveis. Qualquer valor acima de 10 é considerado complexo e pode precisar de refatoração, enquanto acima de 15 indica código altamente complexo que deve ser priorizado para simplificação. Diferentes organizações podem definir seus próprios limiares baseados em seus padrões de qualidade."
                },
                {
                    question: "Esta ferramenta funciona com linguagens além de JavaScript?",
                    answer: "A implementação atual é especializada em analisar código JavaScript. No entanto, as métricas básicas de complexidade e princípios se aplicam à maioria das linguagens de programação. Para analisar código em outras linguagens, você precisaria de ferramentas específicas para essas linguagens, pois a análise sintática é dependente da linguagem."
                },
                {
                    question: "Quão precisas são essas métricas de complexidade?",
                    answer: "Essas métricas fornecem medições objetivas baseadas em princípios estabelecidos de engenharia de software, mas não são perfeitas. Elas são boas em quantificar complexidade estrutural e identificar áreas potencialmente problemáticas, mas não capturam todos os aspectos da qualidade do código, como design arquitetural, adequação ao domínio ou fatores de legibilidade como convenções de nomenclatura. Para uma avaliação abrangente de qualidade, combine métricas de complexidade com outras práticas como revisão de código e análise estática."
                },
                {
                    question: "Posso integrar este analisador ao meu pipeline de CI/CD?",
                    answer: "Embora esta ferramenta baseada na web seja projetada para uso interativo, as mesmas métricas de complexidade podem ser implementadas em pipelines de CI/CD usando bibliotecas como 'complexity-report', 'eslint-plugin-complexity' ou 'SonarQube' para projetos JavaScript. Essas ferramentas podem impor limiares de complexidade para evitar que código excessivamente complexo seja mesclado e garantir monitoramento contínuo da qualidade do código."
                },
                {
                    question: "O que devo fazer se meu código tiver pontuações altas de complexidade?",
                    answer: "Pontuações altas de complexidade indicam que o código pode precisar de refatoração. Considere estas técnicas: dividir funções grandes em menores, reduzir níveis de aninhamento, usar cláusulas de guarda ou tabelas de pesquisa para simplificar lógica condicional, extrair cálculos complexos para funções auxiliares dedicadas, aplicar padrões de design para simplificar estrutura e, quando apropriado, substituir código complexo por funções de biblioteca. Primeiro foque nas funções mais frequentemente modificadas com maior complexidade."
                },
                {
                    question: "Pontuações mais baixas de complexidade sempre significam código melhor?",
                    answer: "Não necessariamente. Embora menor complexidade geralmente se correlacione com código mais sustentável, pode haver exceções. Às vezes soluções ligeiramente mais complexas podem ser mais eficientes, mais adequadas ao domínio ou realmente mais legíveis para especialistas no domínio. Métricas de complexidade devem informar sua decisão, não determiná-la. Equilibre considerações de complexidade com outros fatores como desempenho, adequação ao domínio e familiaridade da equipe."
                }
            ]
        },
        optimization: {
            title: "Estratégias de otimização de código baseadas em análise de complexidade",
            intro: "Quando sua análise de complexidade revela problemas, considere estas técnicas eficazes para reduzir complexidade e melhorar qualidade do código:",
            tips: [
                "Divida funções grandes em menores e mais focadas, cada uma executando uma única operação lógica",
                "Reduza níveis de aninhamento usando retornos antecipados, cláusulas de guarda ou extraindo código profundamente aninhado para funções separadas",
                "Simplifique condições booleanas complexas dividindo-as em variáveis nomeadas ou funções que expliquem seu propósito",
                "Substitua declarações switch complexas e cadeias if-else por padrões de estratégia ou tabelas de pesquisa",
                "Use técnicas de programação funcional como map, filter e reduce em vez de loops complexos com múltiplas condições",
                "Extraia padrões de código repetitivos em funções utilitárias ou métodos reutilizáveis",
                "Aplique o princípio da responsabilidade única para garantir que classes e funções tenham apenas um motivo para mudar",
                "Quando apropriado, substitua algoritmos personalizados complexos por funções de biblioteca bem testadas",
                "Simplifique complexidade de interface usando objetos de parâmetro em vez de longas listas de parâmetros",
                "Documente completamente código necessário mas complexo, explicando por que precisa ser complexo",
                "Adicione testes abrangentes para trechos de código complexos para garantir que funcionem como esperado e facilitar futuras refatorações",
                "Estabeleça limiares de complexidade para sua equipe e revise código que exceda esses limiares antes de mesclar"
            ]
        }
    }
}