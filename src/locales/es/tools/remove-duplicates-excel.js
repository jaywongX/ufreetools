export default {
    name: 'Herramienta para Eliminar Duplicados de Excel - Eliminador de Datos Duplicados en Hojas de Cálculo en Línea',
    description: 'Herramienta gratuita en línea para eliminar duplicados de Excel, compatible con archivos xlsx/xls/csv. Identifica inteligentemente datos duplicados, proporciona múltiples reglas de eliminación, admite procesamiento por lotes y exportación con un solo clic en formato Excel/CSV',
    inputTitle: 'Subir Archivo de Excel',
    outputTitle: 'Resultados de Eliminación',
    dragTip: 'Arrastre y suelte archivos de Excel aquí o haga clic para subir',
    supported: 'Formatos compatibles: XLSX, XLS, CSV',
    removeDuplicatesBtn: 'Comenzar Eliminación',
    downloadBtn: 'Descargar Resultados',
    noOutput: 'Sin resultados de eliminación',
    loadSample: 'Cargar Datos de Ejemplo',
    preview: 'Vista Previa de Datos',
    clearAll: 'Limpiar Todo',
    originalData: 'Datos Originales',
    deleteFile: 'Eliminar Archivo',
    batchDownload: 'Descarga por Lotes (ZIP)',
    exportFormat: 'Formato de Exportación',
    dataQuality: 'Calidad de Datos',
    zoomIn: 'Acercar',
    zoomOut: 'Alejar',
    resetView: 'Restablecer Vista',
    fullscreen: 'Vista Previa en Pantalla Completa',
    
    // Configuración de reglas de eliminación
    duplicateRulesTitle: 'Configuración de Reglas de Eliminación',
    ruleType: 'Tipo de Eliminación',
    ruleTypes: {
        fullRow: 'Eliminación de Fila Completa',
        singleColumn: 'Eliminación de Columna Única',
        multiColumn: 'Eliminación de Combinación de Múltiples Columnas'
    },
    selectedColumns: 'Seleccionar Columnas',
    selectColumns: 'Por favor seleccione las columnas para eliminar duplicados',
    caseSensitive: 'Distinguir Mayúsculas/Minúsculas',
    trimSpaces: 'Eliminar Espacios Iniciales/Finales',
    ignoreEmpty: 'Ignorar Valores Vacíos',
    fuzzyMatch: 'Coincidencia Aproximada',
    similarityThreshold: 'Umbral de Similitud',
    
    // Estadísticas de datos
    statisticsTitle: 'Estadísticas de Datos',
    originalRows: 'Filas Originales',
    duplicateRows: 'Filas Duplicadas',
    uniqueRows: 'Filas Después de Eliminación',
    duplicateRate: 'Tasa de Duplicación',
    
    // Tabla de vista previa
    previewTitle: 'Vista Previa de Datos',
    showDuplicates: 'Mostrar Duplicados',
    showUnique: 'Mostrar Elementos Únicos',
    highlightDuplicates: 'Resaltar Duplicados',
    
    // Opciones de exportación
    exportOptions: 'Opciones de Exportación',
    includeHeaders: 'Incluir Encabezados',
    encoding: 'Codificación del Archivo',
    delimiter: 'Delimitador',
    
    // Botones de acción
    processBtn: 'Procesar Datos',
    resetBtn: 'Restablecer',
    saveTemplate: 'Guardar Plantilla',
    loadTemplate: 'Cargar Plantilla',
    
    // Gestión de plantillas
    savedTemplates: 'Plantillas Guardadas',
    deleteTemplate: 'Eliminar',
    templateNamePrompt: 'Por favor ingrese el nombre de la plantilla:',
    templateSaved: '¡Plantilla guardada exitosamente!',
    deleteTemplateConfirm: '¿Está seguro de que desea eliminar esta plantilla?',
    templateLoadError: 'Error al cargar la plantilla:',
    
    // Datos de ejemplo
    sampleHeaders: {
        name: 'Nombre',
        email: 'Correo Electrónico',
        phone: 'Teléfono',
        department: 'Departamento'
    },
    sampleData: {
        zhangsan: 'Juan Pérez',
        lisi: 'María García',
        wangwu: 'Carlos López',
        zhaoliu: 'Ana Martínez',
        techDept: 'Departamento de Tecnología',
        salesDept: 'Departamento de Ventas',
        hrDept: 'Departamento de Recursos Humanos',
        financeDept: 'Departamento de Finanzas'
    },
    
    // Relacionado con exportación
    exportSheetName: 'Resultados de Eliminación',
    exportFileName: 'Resultados de Eliminación',
    jsonMetadataTitle: 'Resultados de Eliminación de Excel',
    columnNumber: 'Columna {number}',
    
    // Mensajes de error
    processError: 'Error al procesar el archivo, por favor verifique el formato del archivo'
};