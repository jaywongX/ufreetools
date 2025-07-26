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
    }
};