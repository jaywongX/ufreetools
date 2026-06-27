export default {
    name: 'GCode查看器 - 在线3D打印预览工具',
    description: '免费在线GCode文件查看工具，支持拖拽上传、3D路径可视化、层控制、打印设置显示、截图导出等功能，无需安装任何软件。',
    dragTip: '拖放GCode文件到这里或点击上传（支持批量）',
    supported: '支持的格式: GCode',
    fileList: '文件列表',
    clearAll: '清除全部',
    noGcode: '暂无GCode文件，请上传GCode文件',
    loading: '加载中...',
    loadError: '加载失败，请检查文件格式',
    retry: '重试',
    retryInit: '重试初始化',
    renderInitFailed: '3D渲染初始化失败',
    
    // GCode信息
    gcodeInfo: 'GCode信息',
    totalLines: '总行数',
    totalCommands: '总命令数',
    fileSize: '文件大小',
    estimatedTime: '预计时间',
    dimensions: '打印尺寸',
    width: '宽',
    height: '长',
    depth: '高',
    printSettings: '打印设置',
    layerHeight: '层高',
    nozzleTemp: '喷嘴温度',
    bedTemp: '热床温度',
    
    // 视图控制
    viewControls: '视图控制',
    resetView: '重置视角',
    showTravel: '显示空驶路径',
    showRetraction: '显示回抽路径',
    autoRotate: '自动旋转',
    fullscreen: '全屏',
    exitFullscreen: '退出全屏',
    fullscreenFailed: '全屏失败',
    
    // 渲染设置
    renderSettings: '渲染设置',
    moveColor: '移动颜色',
    retractionColor: '回抽颜色',
    backgroundColor: '背景颜色',
    lineWidth: '线条粗细',
    showGrid: '显示网格',
    showAxes: '显示坐标轴',
    
    // 层控制
    layerControl: '层控制',
    currentLayer: '当前层',
    prevLayer: '上一层',
    nextLayer: '下一层',
    playAnimation: '播放动画',
    stopAnimation: '停止动画',
    
    // 导出功能
    export: '导出',
    screenshot: '截图导出',
    screenshotFormat: '截图格式',
    transparentBg: '透明背景',
    
    // 提示
    tipsTitle: '使用小贴士',
    tipContent: '支持GCode文件格式。鼠标左键拖动旋转，右键拖动平移，滚轮缩放。双击可自动居中。使用层控制查看每一层的打印路径。',
    
    // 错误信息
    unsupportedFormat: '不支持的文件格式，请上传GCode文件',
    parseError: '无法解析GCode文件，请确保文件格式正确',
    readError: '读取文件失败，请重试',
    webglError: '您的浏览器不支持WebGL，请尝试使用其他浏览器',
};