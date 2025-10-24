export default {
    name: 'Excel去重工具 - 在线表格数据去重器',
    description: '免费在线Excel去重工具，支持xlsx/xls/csv文件去重。智能识别重复数据，提供多种去重规则，支持批量处理，一键导出Excel/CSV格式',
    inputTitle: '上传Excel文件',
    outputTitle: '去重结果',
    dragTip: '拖放Excel文件到这里或点击上传',
    supported: '支持的格式: XLSX, XLS, CSV',
    removeDuplicatesBtn: '开始去重',
    downloadBtn: '下载结果',
    noOutput: '暂无去重结果',
    loadSample: '加载示例数据',
    preview: '预览数据',
    clearAll: '清除全部',
    originalData: '原始数据',
    deleteFile: '删除文件',
    batchDownload: '批量下载 (ZIP)',
    exportFormat: '导出格式',
    dataQuality: '数据质量',
    zoomIn: '放大',
    zoomOut: '缩小',
    resetView: '重置视图',
    fullscreen: '全屏预览',
    
    // 去重规则配置
    duplicateRulesTitle: '去重规则配置',
    ruleType: '去重类型',
    ruleTypes: {
        fullRow: '整行去重',
        singleColumn: '单列去重',
        multiColumn: '多列组合去重'
    },
    selectedColumns: '选择列',
    selectColumns: '请选择要去重的列',
    caseSensitive: '区分大小写',
    trimSpaces: '去除首尾空格',
    ignoreEmpty: '忽略空值',
    fuzzyMatch: '模糊匹配',
    similarityThreshold: '相似度阈值',
    
    // 数据统计
    statisticsTitle: '数据统计',
    originalRows: '原始行数',
    duplicateRows: '重复行数',
    uniqueRows: '去重后行数',
    duplicateRate: '重复率',
    
    // 预览表格
    previewTitle: '数据预览',
    showDuplicates: '显示重复项',
    showUnique: '显示唯一项',
    highlightDuplicates: '高亮重复项',
    
    // 导出选项
    exportOptions: '导出选项',
    includeHeaders: '包含表头',
    encoding: '文件编码',
    delimiter: '分隔符',
    
    // 操作按钮
    processBtn: '处理数据',
    resetBtn: '重置',
    saveTemplate: '保存模板',
    loadTemplate: '加载模板',
    
    // 模板管理
    savedTemplates: '保存的模板',
    deleteTemplate: '删除',
    templateNamePrompt: '请输入模板名称:',
    templateSaved: '模板保存成功!',
    deleteTemplateConfirm: '确定要删除这个模板吗?',
    templateLoadError: '加载模板失败:',
    
    // 示例数据
    sampleHeaders: {
        name: '姓名',
        email: '邮箱',
        phone: '电话',
        department: '部门'
    },
    sampleData: {
        zhangsan: '张三',
        lisi: '李四',
        wangwu: '王五',
        zhaoliu: '赵六',
        techDept: '技术部',
        salesDept: '销售部',
        hrDept: '人事部',
        financeDept: '财务部'
    },
    
    // 导出相关
    exportSheetName: '去重结果',
    exportFileName: '去重结果',
    jsonMetadataTitle: 'Excel去重结果',
    columnNumber: '列 {number}',
    
    // 错误信息
    processError: '处理文件时出错，请检查文件格式'
};
