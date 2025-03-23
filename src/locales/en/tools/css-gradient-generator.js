export default {
  name: 'Gradient Color Generator',
  description: 'Create and customize beautiful CSS gradients with real-time preview and copy the code to your project',

  gradientTypes: {
    title: 'Gradient Type',
    linear: 'Linear Gradient',
    radial: 'Radial Gradient',
    conic: 'Conic Gradient'
  },

  controls: {
    title: 'Color Controls',
    addColor: 'Add Color',
    color: 'Color',
    position: 'Position (%)',
    delete: 'Delete Color',
    angle: 'Angle',
    degrees: 'Degrees',
    shape: 'Shape',
    circle: 'Circle',
    ellipse: 'Ellipse',
    positionX: 'Position X (%)',
    positionY: 'Position Y (%)',
    size: 'Size',
    closestSide: 'Closest Side',
    closestCorner: 'Closest Corner',
    farthestSide: 'Farthest Side',
    farthestCorner: 'Farthest Corner',
    fromAngle: 'Starting Angle'
  },

  output: {
    title: 'CSS Code',
    copyCode: 'Copy Code',
    preview: 'Preview Area',
    copied: 'CSS Code Copied to Clipboard!',
    download: 'Download PNG'
  },

  presets: {
    title: 'Gradient Presets',
    apply: 'Apply Preset',
    sunnyMorning: 'Sunny Morning',
    winterNeva: 'Winter in Neva',
    rareWind: 'Rare Wind',
    deepBlue: 'Deep Blue',
    perfect: 'Perfect White',
    cloudyKnoxville: 'Cloudy Knoxville',
    greenBeach: 'Green Beach',
    plumBath: 'Plum Bath',
    everlasting: 'Everlasting Sky'
  },

  accessibility: {
    colorPicker: 'Color Picker',
    deleteSwatch: 'Delete Color Stop',
    dragToReposition: 'Drag to Reposition Color Stop'
  },

  actions: {
    reset: 'Reset',
    generateCSS: 'Generate CSS',
    clickToCopy: 'Click to Copy Code',
    completeEdit: 'Complete Editing'
  },

  messages: {
    copied: 'CSS Code Copied to Clipboard!',
    noColors: 'Add at least two colors to create a gradient',
    maxColors: 'Maximum number of color stops reached (10)',
    useKeyboard: 'Use the Delete key to delete the selected color stop',
    invalidHex: 'Please enter a valid hexadecimal color code',
    downloadError: 'Failed to download PNG, please try again later',
    preview: 'Preview'
  },

  anglePresets: {
    top: 'Top',
    topRight: 'Top Right',
    right: 'Right',
    bottomRight: 'Bottom Right',
    bottom: 'Bottom',
    bottomLeft: 'Bottom Left',
    left: 'Left',
    topLeft: 'Top Left'
  },

  radialShapes: {
    circle: 'Circle',
    ellipse: 'Ellipse'
  },

  radialSizes: {
    farthestCorner: 'Farthest corne',
    closestCorner: 'Closest corner',
    farthestSide: 'Farthest side',
    closestSide: 'Closest side',
  },
}