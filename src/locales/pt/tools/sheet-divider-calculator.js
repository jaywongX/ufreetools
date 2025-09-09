export default {
    name: 'Calculadora de Divisão de Folhas de Mapa - Ferramenta Online de Consulta de Números de Folhas',
    description: 'Calcular números de folhas de mapa com base em coordenadas, suporte a múltiplas escalas e métodos de projeção',
    icon: 'map',
    tags: ['mapa', 'divisão', 'coordenadas', 'escala', 'projeção'],
    
    // Interface do usuário
    ui: {
        title: 'Calculadora de Divisão de Folhas de Mapa',
        subtitle: 'Calcular números de folhas de mapa com base em coordenadas',
        inputTitle: 'Entrada de Coordenadas',
        outputTitle: 'Resultados do Cálculo',
        
        // Entrada de coordenadas
        latitudePlaceholder: 'Latitude (ex: 39.9042)',
        longitudePlaceholder: 'Longitude (ex: 116.4074)',
        batchInputPlaceholder: 'Entrada em lote: latitude,longitude,descrição (opcional)\nExemplo: 39.9042,116.4074,Pequim\n40.7128,-74.0060,Nova York',
        
        // Botões
        calculateButton: 'Calcular Folha',
        clearButton: 'Limpar Tudo',
        loadSampleButton: 'Carregar Dados de Exemplo',
        exportExcelButton: 'Exportar para Excel',
        exportPDFButton: 'Exportar para PDF',
        
        // Configurações de parâmetros
        parameterSettings: 'Configurações de Parâmetros',
        scaleLabel: 'Escala',
        zoneMethodLabel: 'Método de Zona',
        threeDegreeZone: 'Zona de 3 graus',
        sixDegreeZone: 'Zona de 6 graus',
        
        // Exibição de resultados
        resultColumns: {
            sheetNumber: 'Número da Folha',
            latitude: 'Latitude',
            longitude: 'Longitude',
            scale: 'Escala',
            zone: 'Zona',
            centralMeridian: 'Meridiano Central',
            description: 'Descrição'
        },
        
        // Grade do mapa
        gridTitle: 'Grade do Mapa',
        noResults: 'Sem resultados para exibir',
        
        // Mensagens
        invalidCoordinates: 'Coordenadas inválidas, por favor verifique suas entradas',
        calculationSuccess: 'Folha de mapa calculada com sucesso',
        excelExportSuccess: 'Dados exportados com sucesso para Excel',
        pdfExportSuccess: 'Dados exportados com sucesso para PDF',
        exportFailed: 'Falha na exportação, por favor tente novamente',
        noDataToExport: 'Sem dados para exportar',
        
        // Descrições
        singlePointDesc: 'Ponto único',
        batchPointDesc: 'Ponto em lote',
        
        // Títulos de exportação
        exportFileName: 'Resultados_Cálculo_Folha_Mapa',
        exportTitle: 'Resultados do Cálculo de Folha de Mapa'
    }
}