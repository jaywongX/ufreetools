export default {
    name: 'STL/3MF模型预览 - 在线3D模型查看器',
    description: '免费在线STL和3MF模型预览工具，支持拖拽上传、3D旋转查看、模型信息显示、线框模式、截图导出等功能，无需安装任何软件。',
    dragTip: '拖放STL/3MF文件到这里或点击上传（支持批量）',
    supported: '支持的格式: STL、3MF',
    fileList: '文件列表',
    clearAll: '清除全部',
    noModel: '暂无模型，请上传STL或3MF文件',
    loading: '加载中...',
    loadError: '加载失败，请检查文件格式',
    retry: '重试',
    retryInit: '重试初始化',
    renderInitFailed: '3D渲染初始化失败',
    
    // 模型信息
    modelInfo: '模型信息',
    vertices: '顶点数',
    faces: '面数',
    fileSize: '文件大小',
    dimensions: '尺寸',
    width: '宽',
    height: '高',
    depth: '深',
    unit: '单位',
    
    // 视图控制
    viewControls: '视图控制',
    resetView: '重置视角',
    wireframe: '线框模式',
    autoRotate: '自动旋转',
    fullscreen: '全屏',
    exitFullscreen: '退出全屏',
    fullscreenFailed: '全屏失败',
    
    // 渲染设置
    renderSettings: '渲染设置',
    backgroundColor: '背景颜色',
    materialColor: '材质颜色',
    showGrid: '显示网格',
    showAxes: '显示坐标轴',
    ambientLight: '环境光强度',
    directionalLight: '方向光强度',
    
    // 导出功能
    export: '导出',
    screenshot: '截图导出',
    screenshotFormat: '截图格式',
    transparentBg: '透明背景',
    
    // 预设材质
    presetMaterials: '预设材质',
    materialPla: 'PLA塑料',
    materialResin: '树脂质感',
    materialMetal: '金属质感',
    materialDefault: '默认',
    
    // 背景预设
    presetBackgrounds: '背景预设',
    bgChecker: '棋盘格',
    bgWhite: '纯白',
    bgBlack: '纯黑',
    bgGradient: '渐变',
    
    // 提示
    tipsTitle: '使用小贴士',
    tipContent: '支持STL（二进制和ASCII格式）和3MF文件。鼠标左键拖动旋转，右键拖动平移，滚轮缩放。双击模型可自动居中。',
    
    // 错误信息
    unsupportedFormat: '不支持的文件格式，请上传STL或3MF文件',
    parseError: '无法解析文件，请确保文件格式正确',
    readError: '读取文件失败，请重试',
    webglError: '您的浏览器不支持WebGL，请尝试使用其他浏览器',
    unsupported3mf: '3MF格式暂不支持，请使用STL格式文件',
};