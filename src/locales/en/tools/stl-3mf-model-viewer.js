export default {
    name: 'STL/3MF Model Viewer - Online 3D Model Viewer',
    description: 'Free online STL and 3MF model preview tool with drag-and-drop upload, 3D rotation viewing, model information display, wireframe mode, screenshot export, and more. No software installation required.',
    dragTip: 'Drag and drop STL/3MF files here or click to upload (batch supported)',
    supported: 'Supported formats: STL, 3MF',
    fileList: 'File List',
    clearAll: 'Clear All',
    noModel: 'No model yet, please upload STL or 3MF files',
    loading: 'Loading...',
    loadError: 'Loading failed, please check the file format',
    retry: 'Retry',
    retryInit: 'Retry Initialization',
    renderInitFailed: '3D rendering initialization failed',
    
    // Model Info
    modelInfo: 'Model Information',
    vertices: 'Vertices',
    faces: 'Faces',
    fileSize: 'File Size',
    dimensions: 'Dimensions',
    width: 'Width',
    height: 'Height',
    depth: 'Depth',
    unit: 'Unit',
    
    // View Controls
    viewControls: 'View Controls',
    resetView: 'Reset View',
    wireframe: 'Wireframe Mode',
    autoRotate: 'Auto Rotate',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit Fullscreen',
    fullscreenFailed: 'Fullscreen failed',
    
    // Render Settings
    renderSettings: 'Render Settings',
    backgroundColor: 'Background Color',
    materialColor: 'Material Color',
    showGrid: 'Show Grid',
    showAxes: 'Show Axes',
    ambientLight: 'Ambient Light Intensity',
    directionalLight: 'Directional Light Intensity',
    
    // Export
    export: 'Export',
    screenshot: 'Export Screenshot',
    screenshotFormat: 'Screenshot Format',
    transparentBg: 'Transparent Background',
    
    // Preset Materials
    presetMaterials: 'Preset Materials',
    materialPla: 'PLA Plastic',
    materialResin: 'Resin',
    materialMetal: 'Metal',
    materialDefault: 'Default',
    
    // Preset Backgrounds
    presetBackgrounds: 'Preset Backgrounds',
    bgChecker: 'Checker',
    bgWhite: 'White',
    bgBlack: 'Black',
    bgGradient: 'Gradient',
    
    // Tips
    tipsTitle: 'Tips',
    tipContent: 'Supports STL (binary and ASCII formats) and 3MF files. Left mouse button to rotate, right button to pan, scroll wheel to zoom. Double-click to center the model.',
    
    // Error Messages
    unsupportedFormat: 'Unsupported file format, please upload STL or 3MF files',
    parseError: 'Unable to parse file, please ensure the file format is correct',
    readError: 'Failed to read file, please try again',
    webglError: 'Your browser does not support WebGL, please try using another browser',
    unsupported3mf: '3MF format is not supported yet, please use STL format files',
};