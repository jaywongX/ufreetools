export default {
    name: 'Ferramenta de Remoção de Duplicatas do Excel - Removedor de Dados Duplicados em Planilhas Online',
    description: 'Ferramenta online gratuita para remoção de duplicatas do Excel, suportando arquivos xlsx/xls/csv. Identifica inteligentemente dados duplicados, fornece múltiplas regras de remoção, suporta processamento em lote e exportação com um clique no formato Excel/CSV',
    inputTitle: 'Enviar Arquivo do Excel',
    outputTitle: 'Resultados da Remoção de Duplicatas',
    dragTip: 'Arraste e solte arquivos do Excel aqui ou clique para enviar',
    supported: 'Formatos suportados: XLSX, XLS, CSV',
    removeDuplicatesBtn: 'Iniciar Remoção de Duplicatas',
    downloadBtn: 'Baixar Resultados',
    noOutput: 'Nenhum resultado de remoção de duplicatas',
    loadSample: 'Carregar Dados de Exemplo',
    preview: 'Visualizar Dados',
    clearAll: 'Limpar Tudo',
    originalData: 'Dados Originais',
    deleteFile: 'Excluir Arquivo',
    batchDownload: 'Download em Lote (ZIP)',
    exportFormat: 'Formato de Exportação',
    dataQuality: 'Qualidade dos Dados',
    zoomIn: 'Ampliar',
    zoomOut: 'Reduzir',
    resetView: 'Redefinir Visualização',
    fullscreen: 'Visualização em Tela Cheia',
    
    // Configuração de regras de remoção de duplicatas
    duplicateRulesTitle: 'Configuração de Regras de Remoção de Duplicatas',
    ruleType: 'Tipo de Remoção de Duplicatas',
    ruleTypes: {
        fullRow: 'Remoção de Duplicatas de Linha Completa',
        singleColumn: 'Remoção de Duplicatas de Coluna Única',
        multiColumn: 'Remoção de Duplicatas de Combinação de Múltiplas Colunas'
    },
    selectedColumns: 'Selecionar Colunas',
    selectColumns: 'Por favor, selecione as colunas para remover duplicatas',
    caseSensitive: 'Diferenciar Maiúsculas/Minúsculas',
    trimSpaces: 'Remover Espaços Iniciais/Finais',
    ignoreEmpty: 'Ignorar Valores Vazios',
    fuzzyMatch: 'Correspondência Aproximada',
    similarityThreshold: 'Limite de Similaridade',
    
    // Estatísticas de dados
    statisticsTitle: 'Estatísticas de Dados',
    originalRows: 'Linhas Originais',
    duplicateRows: 'Linhas Duplicadas',
    uniqueRows: 'Linhas Após Remoção de Duplicatas',
    duplicateRate: 'Taxa de Duplicatas',
    
    // Tabela de visualização
    previewTitle: 'Visualização de Dados',
    showDuplicates: 'Mostrar Duplicatas',
    showUnique: 'Mostrar Itens Únicos',
    highlightDuplicates: 'Destacar Duplicatas',
    
    // Opções de exportação
    exportOptions: 'Opções de Exportação',
    includeHeaders: 'Incluir Cabeçalhos',
    encoding: 'Codificação do Arquivo',
    delimiter: 'Delimitador',
    
    // Botões de ação
    processBtn: 'Processar Dados',
    resetBtn: 'Redefinir',
    saveTemplate: 'Salvar Modelo',
    loadTemplate: 'Carregar Modelo',
    
    // Gerenciamento de modelos
    savedTemplates: 'Modelos Salvos',
    deleteTemplate: 'Excluir',
    templateNamePrompt: 'Por favor, digite o nome do modelo:',
    templateSaved: 'Modelo salvo com sucesso!',
    deleteTemplateConfirm: 'Tem certeza de que deseja excluir este modelo?',
    templateLoadError: 'Falha ao carregar o modelo:',
    
    // Dados de exemplo
    sampleHeaders: {
        name: 'Nome',
        email: 'E-mail',
        phone: 'Telefone',
        department: 'Departamento'
    },
    sampleData: {
        zhangsan: 'João Silva',
        lisi: 'Maria Santos',
        wangwu: 'Pedro Oliveira',
        zhaoliu: 'Ana Costa',
        techDept: 'Departamento de Tecnologia',
        salesDept: 'Departamento de Vendas',
        hrDept: 'Departamento de Recursos Humanos',
        financeDept: 'Departamento Financeiro'
    },
    
    // Relacionado à exportação
    exportSheetName: 'Resultados da Remoção de Duplicatas',
    exportFileName: 'Resultados da Remoção de Duplicatas',
    jsonMetadataTitle: 'Resultados da Remoção de Duplicatas do Excel',
    columnNumber: 'Coluna {number}',
    
    // Mensagens de erro
    processError: 'Erro ao processar o arquivo, por favor verifique o formato do arquivo'
};