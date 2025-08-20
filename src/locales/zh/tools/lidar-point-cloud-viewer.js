export default {
    name: 'LIDAR点云查看器 - 在线三维点云数据可视化工具',
    description: '免费在线LIDAR点云查看器，支持LAS、XYZ、PLY、PCD格式。提供三维可视化、多种着色模式、交互式导航和数据分析功能',
    inputTitle: '输入点云文件',
    outputTitle: '三维点云视图',
    dragTip: '拖放点云文件到这里或点击上传',
    supported: '支持的格式: LAS, XYZ, PLY, PCD, TXT',
    loadFromUrl: '从URL加载',
    load: '加载',
    loadSample: '加载示例数据',
    coloringMode: '着色模式',
    elevation: '高程着色',
    intensity: '强度着色',
    classification: '分类着色',
    rgb: 'RGB着色',
    pointSize: '点大小',
    pointDensity: '点密度',
    enableAnimation: '启用动画',
    showTrajectory: '显示轨迹线',
    showSensorData: '显示传感器数据',
    fileInfo: '文件信息',
    fileName: '文件名',
    pointCount: '点数量',
    fileSize: '文件大小',
    bounds: '边界范围',
    resetView: '重置视图',
    exportImage: '导出图像',
    loading: '加载中...',
    noData: '请上传点云文件或加载示例数据',
    controls: {
        rotate: '鼠标拖拽: 旋转视图',
        zoom: '滚轮: 缩放视图',
        pan: 'Shift+拖拽: 平移视图'
    },
    stats: {
        visible: '可见点数',
        total: '总点数',
        points: '个点'
    },
    metadata: {
        title: 'LAS元数据',
        systemId: '系统标识符',
        software: '生成软件',
        version: 'LAS版本',
        creationDate: '创建日期',
        pointFormat: '点数据格式',
        vlrCount: 'VLR数量',
        returnStats: '各次回波统计',
        extent: '空间范围'
    },
    error: {
        loadFailed: '加载点云文件失败，请检查文件格式是否正确',
        urlLoadFailed: '从URL加载文件失败，请检查网址是否正确'
    },
    disclaimer: {
        title: '技术说明',
        content: '本工具使用WebGL技术在浏览器中实现三维点云可视化，所有数据处理均在本地完成，确保数据安全。',
        formats: '支持格式：LAS (激光雷达标准格式)、XYZ (ASCII点云)、PLY (多边形文件格式)、PCD (点云数据格式)',
        performance: '性能提示：大型点云文件可能需要较长加载时间，建议使用现代浏览器以获得最佳性能。'
    }
};
