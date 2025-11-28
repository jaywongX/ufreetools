export default {
    name: '四参数转换器 - 平面相似与布尔莎简化模型批量转换',
    description: '专业级四参数转换器，支持平面相似变换、布尔莎简化模型、赫尔默特变换以及自定义参数模型。适配地方独立坐标系、工程坐标系与区域投影坐标，实现单点正反算、批量转换、残差分析与可视化评估。',
    inputTitle: '坐标输入与模型设置',
    outputTitle: '转换结果与精度分析',
    modelTitle: '四参数模型选择',
    modelOptions: {
        similarity: '平面相似变换',
        bursa: '布尔莎简化模型',
        helmert: '赫尔默特变换',
        custom: '自定义参数模型'
    },
    parameterTitle: '参数定义（单位标准化）',
    parameterFields: {
        dx: 'ΔX (m)',
        dy: 'ΔY (m)',
        rotation: '旋转θ (°)',
        scale: '尺度m (ppm)'
    },
    manualTitle: '单点输入',
    manualFields: {
        sourceX: '源X (m)',
        sourceY: '源Y (m)',
        targetX: '目标X(可选)',
        targetY: '目标Y(可选)',
        label: '点名'
    },
    appendPoint: '写入批量数据',
    delimiterLabel: '自定义分隔符',
    batchTitle: '批量文本输入',
    batchPlaceholder: '示例：\n378933.221,3412554.881,378935.102,3412556.412,CP01\n378943.114,3412541.552,378945.020,3412543.030,CP02',
    loadSample: '加载示例',
    clearAll: '清空输入',
    fileTitle: '拖拽CSV/TXT文件',
    dragTip: '拖拽或点击上传文件，实时解析平面坐标',
    supported: '支持CSV、TXT，默认逗号分隔，可自定义',
    solverTitle: '公共点解算参数',
    solverPlaceholder: '源X,源Y => 目标X,目标Y\n378933.221,3412554.881 => 378935.102,3412556.412',
    solveBtn: '平面相似平差',
    conversionBtn: '正算转换',
    inverseBtn: '反算转换',
    processTitle: '计算过程',
    processToggle: '展开 / 折叠',
    processCopy: '复制日志',
    progressLabel: '批量进度',
    statsTitle: '精度统计',
    statsFields: {
        rmse: 'RMSE (m)',
        meanResidual: '平均残差 (m)',
        maxResidual: '最大残差 (m)',
        ci95: '95%置信区间 (m)',
        count: '点数'
    },
    visualizationTitle: '坐标分布与残差图',
    scatterTitle: '控制点分布图',
    residualTitle: '残差直方图',
    heatTitle: '精度热力概览',
    exportBtn: '导出结果 (CSV)',
    outputSummary: '批量转换输出',
    noOutput: '暂无结果，请输入坐标并执行转换。',
    sampleLoaded: '已加载示例数据',
    solverNeedsPoints: '解算至少需要2个控制点',
    invalidInput: '无法解析输入，请检查分隔符或列顺序。',
    conversionDone: '转换完成，已更新输出与可视化。',
    copySuccess: '日志已复制',
    historyApplied: '已应用历史解算参数',
    precisionTitle: '精度控制',
    precisionFields: {
        decimal: '坐标小数位',
        histogramBins: '直方图分桶'
    }
}

