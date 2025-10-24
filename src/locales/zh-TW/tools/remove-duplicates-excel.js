export default {
    name: 'Excel去重工具 - 線上表格資料去重器',
    description: '免費線上Excel去重工具，支援xlsx/xls/csv檔案去重。智慧識別重複資料，提供多種去重規則，支援批次處理，一鍵匯出Excel/CSV格式',
    inputTitle: '上傳Excel檔案',
    outputTitle: '去重結果',
    dragTip: '拖放Excel檔案到這裡或點擊上傳',
    supported: '支援的格式: XLSX, XLS, CSV',
    removeDuplicatesBtn: '開始去重',
    downloadBtn: '下載結果',
    noOutput: '暫無去重結果',
    loadSample: '載入範例資料',
    preview: '預覽資料',
    clearAll: '清除全部',
    originalData: '原始資料',
    deleteFile: '刪除檔案',
    batchDownload: '批次下載 (ZIP)',
    exportFormat: '匯出格式',
    dataQuality: '資料品質',
    zoomIn: '放大',
    zoomOut: '縮小',
    resetView: '重置視圖',
    fullscreen: '全螢幕預覽',
    
    // 去重規則配置
    duplicateRulesTitle: '去重規則配置',
    ruleType: '去重類型',
    ruleTypes: {
        fullRow: '整行去重',
        singleColumn: '單列去重',
        multiColumn: '多列組合去重'
    },
    selectedColumns: '選擇列',
    selectColumns: '請選擇要去重的列',
    caseSensitive: '區分大小寫',
    trimSpaces: '去除首尾空格',
    ignoreEmpty: '忽略空值',
    fuzzyMatch: '模糊匹配',
    similarityThreshold: '相似度閾值',
    
    // 資料統計
    statisticsTitle: '資料統計',
    originalRows: '原始行數',
    duplicateRows: '重複行數',
    uniqueRows: '去重後行數',
    duplicateRate: '重複率',
    
    // 預覽表格
    previewTitle: '資料預覽',
    showDuplicates: '顯示重複項',
    showUnique: '顯示唯一項',
    highlightDuplicates: '高亮重複項',
    
    // 匯出選項
    exportOptions: '匯出選項',
    includeHeaders: '包含表頭',
    encoding: '檔案編碼',
    delimiter: '分隔符',
    
    // 操作按鈕
    processBtn: '處理資料',
    resetBtn: '重置',
    saveTemplate: '儲存範本',
    loadTemplate: '載入範本',
    
    // 範本管理
    savedTemplates: '儲存的範本',
    deleteTemplate: '刪除',
    templateNamePrompt: '請輸入範本名稱:',
    templateSaved: '範本儲存成功!',
    deleteTemplateConfirm: '確定要刪除這個範本嗎?',
    templateLoadError: '載入範本失敗:',
    
    // 範例資料
    sampleHeaders: {
        name: '姓名',
        email: '郵箱',
        phone: '電話',
        department: '部門'
    },
    sampleData: {
        zhangsan: '張三',
        lisi: '李四',
        wangwu: '王五',
        zhaoliu: '趙六',
        techDept: '技術部',
        salesDept: '銷售部',
        hrDept: '人事部',
        financeDept: '財務部'
    },
    
    // 匯出相關
    exportSheetName: '去重結果',
    exportFileName: '去重結果',
    jsonMetadataTitle: 'Excel去重結果',
    columnNumber: '列 {number}',
    
    // 錯誤訊息
    processError: '處理檔案時出錯，請檢查檔案格式'
};