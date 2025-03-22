export default {
  name: 'Flowchart Generator',
  description: 'Create flowcharts and diagrams with simple text-based syntax',
  input: {
    title: 'Flowchart Definition',
    placeholder: 'Enter your flowchart definition here...',
    loadExample: 'Load Example',
    clear: 'Clear',
    uploadFile: 'Upload File'
  },
  output: {
    title: 'Generated Flowchart',
    downloadImage: 'Download Image',
    downloadSVG: 'Download SVG',
    copyImage: 'Copy Image',
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    fitView: 'Fit to View',
    resetView: 'Reset View'
  },
  options: {
    title: 'Options',
    theme: 'Theme',
    orientation: 'Orientation',
    nodeShape: 'Node Shape',
    arrowStyle: 'Arrow Style',
    lineStyle: 'Line Style',
    textPosition: 'Text Position',
    fontSize: 'Font Size',
    fontFamily: 'Font Family',
    showGrid: 'Show Grid',
    autoRender: 'Auto Render'
  },
  themes: {
    default: 'Default',
    simple: 'Simple',
    forest: 'Forest',
    neutral: 'Neutral',
    dark: 'Dark',
    business: 'Business',
    custom: 'Custom'
  },
  orientations: {
    topToBottom: 'Top to Bottom',
    bottomToTop: 'Bottom to Top',
    leftToRight: 'Left to Right',
    rightToLeft: 'Right to Left'
  },
  nodeShapes: {
    rectangle: 'Rectangle',
    roundedRectangle: 'Rounded Rectangle',
    circle: 'Circle',
    diamond: 'Diamond',
    hexagon: 'Hexagon',
    parallelogram: 'Parallelogram'
  },
  arrowStyles: {
    arrow: 'Arrow',
    open: 'Open',
    filled: 'Filled',
    diamond: 'Diamond',
    circle: 'Circle'
  },
  lineStyles: {
    solid: 'Solid',
    dashed: 'Dashed',
    dotted: 'Dotted',
    curved: 'Curved',
    straight: 'Straight',
    orthogonal: 'Orthogonal'
  },
  syntax: {
    title: 'Syntax Help',
    node: 'Node',
    edge: 'Edge',
    subgraph: 'Subgraph',
    comment: 'Comment',
    styling: 'Styling',
    showMore: 'Show More'
  },
  actions: {
    render: 'Render Flowchart',
    save: 'Save Diagram',
    export: 'Export',
    share: 'Share'
  },
  messages: {
    renderSuccess: 'Flowchart rendered successfully',
    renderError: 'Error rendering flowchart: {error}',
    syntaxError: 'Syntax error: {error}',
    saved: 'Diagram saved',
    copied: 'Copied to clipboard',
    exported: 'Flowchart exported'
  }
} 