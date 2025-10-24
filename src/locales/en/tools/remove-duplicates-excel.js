export default {
    name: 'Excel Duplicate Remover - Online Spreadsheet Deduplication Tool',
    description: 'Free online Excel duplicate removal tool, supporting xlsx/xls/csv file deduplication. Smartly identifies duplicate data, provides multiple deduplication rules, supports batch processing, and one-click export in Excel/CSV format',
    inputTitle: 'Upload Excel File',
    outputTitle: 'Deduplication Results',
    dragTip: 'Drag and drop Excel files here or click to upload',
    supported: 'Supported formats: XLSX, XLS, CSV',
    removeDuplicatesBtn: 'Start Deduplication',
    downloadBtn: 'Download Results',
    noOutput: 'No deduplication results',
    loadSample: 'Load Sample Data',
    preview: 'Preview Data',
    clearAll: 'Clear All',
    originalData: 'Original Data',
    deleteFile: 'Delete File',
    batchDownload: 'Batch Download (ZIP)',
    exportFormat: 'Export Format',
    dataQuality: 'Data Quality',
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    resetView: 'Reset View',
    fullscreen: 'Full Screen Preview',
    
    // Deduplication rule configuration
    duplicateRulesTitle: 'Deduplication Rule Configuration',
    ruleType: 'Deduplication Type',
    ruleTypes: {
        fullRow: 'Full Row Deduplication',
        singleColumn: 'Single Column Deduplication',
        multiColumn: 'Multi-Column Combination Deduplication'
    },
    selectedColumns: 'Select Columns',
    selectColumns: 'Please select columns to deduplicate',
    caseSensitive: 'Case Sensitive',
    trimSpaces: 'Trim Leading/Trailing Spaces',
    ignoreEmpty: 'Ignore Empty Values',
    fuzzyMatch: 'Fuzzy Matching',
    similarityThreshold: 'Similarity Threshold',
    
    // Data statistics
    statisticsTitle: 'Data Statistics',
    originalRows: 'Original Rows',
    duplicateRows: 'Duplicate Rows',
    uniqueRows: 'Rows After Deduplication',
    duplicateRate: 'Duplication Rate',
    
    // Preview table
    previewTitle: 'Data Preview',
    showDuplicates: 'Show Duplicates',
    showUnique: 'Show Unique Items',
    highlightDuplicates: 'Highlight Duplicates',
    
    // Export options
    exportOptions: 'Export Options',
    includeHeaders: 'Include Headers',
    encoding: 'File Encoding',
    delimiter: 'Delimiter',
    
    // Action buttons
    processBtn: 'Process Data',
    resetBtn: 'Reset',
    saveTemplate: 'Save Template',
    loadTemplate: 'Load Template',
    
    // Template management
    savedTemplates: 'Saved Templates',
    deleteTemplate: 'Delete',
    templateNamePrompt: 'Please enter template name:',
    templateSaved: 'Template saved successfully!',
    deleteTemplateConfirm: 'Are you sure you want to delete this template?',
    templateLoadError: 'Failed to load template:',
    
    // Sample data
    sampleHeaders: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        department: 'Department'
    },
    sampleData: {
        zhangsan: 'John Smith',
        lisi: 'Jane Doe',
        wangwu: 'Robert Johnson',
        zhaoliu: 'Emily Davis',
        techDept: 'Technology Department',
        salesDept: 'Sales Department',
        hrDept: 'Human Resources Department',
        financeDept: 'Finance Department'
    },
    
    // Export related
    exportSheetName: 'Deduplication Results',
    exportFileName: 'Deduplication Results',
    jsonMetadataTitle: 'Excel Deduplication Results',
    columnNumber: 'Column {number}',
    
    // Error messages
    processError: 'Error processing file, please check file format'
};