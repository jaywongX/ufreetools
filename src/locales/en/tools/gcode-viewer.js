export default {
    name: 'GCode Viewer - Online 3D Print Preview Tool',
    description: 'Free online GCode file viewing tool with drag-and-drop upload, 3D path visualization, layer control, print settings display, screenshot export, and more. No software installation required.',
    dragTip: 'Drag and drop GCode files here or click to upload (batch supported)',
    supported: 'Supported formats: GCode',
    fileList: 'File List',
    clearAll: 'Clear All',
    noGcode: 'No GCode file yet, please upload GCode files',
    loading: 'Loading...',
    loadError: 'Loading failed, please check the file format',
    retry: 'Retry',
    retryInit: 'Retry Initialization',
    renderInitFailed: '3D rendering initialization failed',
    
    // GCode Info
    gcodeInfo: 'GCode Information',
    totalLines: 'Total Lines',
    totalCommands: 'Total Commands',
    fileSize: 'File Size',
    estimatedTime: 'Estimated Time',
    dimensions: 'Print Dimensions',
    width: 'Width',
    height: 'Length',
    depth: 'Height',
    printSettings: 'Print Settings',
    layerHeight: 'Layer Height',
    nozzleTemp: 'Nozzle Temperature',
    bedTemp: 'Bed Temperature',
    
    // View Controls
    viewControls: 'View Controls',
    resetView: 'Reset View',
    showTravel: 'Show Travel Moves',
    showRetraction: 'Show Retraction',
    autoRotate: 'Auto Rotate',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit Fullscreen',
    fullscreenFailed: 'Fullscreen failed',
    
    // Render Settings
    renderSettings: 'Render Settings',
    moveColor: 'Move Color',
    retractionColor: 'Retraction Color',
    backgroundColor: 'Background Color',
    lineWidth: 'Line Width',
    showGrid: 'Show Grid',
    showAxes: 'Show Axes',
    
    // Layer Control
    layerControl: 'Layer Control',
    currentLayer: 'Current Layer',
    prevLayer: 'Previous Layer',
    nextLayer: 'Next Layer',
    playAnimation: 'Play Animation',
    stopAnimation: 'Stop Animation',
    
    // Export
    export: 'Export',
    screenshot: 'Export Screenshot',
    screenshotFormat: 'Screenshot Format',
    transparentBg: 'Transparent Background',
    
    // Tips
    tipsTitle: 'Tips',
    tipContent: 'Supports GCode file format. Left mouse button to rotate, right button to pan, scroll wheel to zoom. Double-click to center. Use layer control to view print path for each layer.',
    
    // Error Messages
    unsupportedFormat: 'Unsupported file format, please upload GCode files',
    parseError: 'Unable to parse GCode file, please ensure the file format is correct',
    readError: 'Failed to read file, please try again',
    webglError: 'Your browser does not support WebGL, please try using another browser',
};