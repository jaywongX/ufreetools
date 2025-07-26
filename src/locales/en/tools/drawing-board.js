export default {
  name: 'Drawing Board',
  description: 'Online drawing tool with support for free drawing, color selection and brush size adjustment',

  // Toolbar
  tools: {
    brush: 'Brush',
    eraser: 'Eraser',
    clear: 'Clear Canvas',
    save: 'Save Image',
    undo: 'Undo',
    redo: 'Redo',
    apply: 'Apply'
  },

  // Settings
  settings: {
    brushSize: 'Brush Size',
    color: 'Color',
    opacity: 'Opacity',
    backgroundColor: 'Background Color'
  },

  // Color Picker
  colors: {
    black: 'Black',
    white: 'White',
    red: 'Red',
    green: 'Green',
    blue: 'Blue',
    yellow: 'Yellow',
    orange: 'Orange',
    purple: 'Purple',
    pink: 'Pink',
    brown: 'Brown',
    gray: 'Gray',
    custom: 'Custom Color'
  },

  // Canvas Settings
  canvas: {
    width: 'Width',
    height: 'Height',
    resize: 'Resize Canvas',
    orientation: 'Orientation',
    portrait: 'Portrait',
    landscape: 'Landscape',
    square: 'Square'
  },

  // Tips and Messages
  messages: {
    saveSuccess: 'Image saved',
    confirmClear: 'Are you sure you want to clear the canvas? All unsaved content will be lost.',
    unsupportedBrowser: 'Your browser does not support Canvas. Please use a modern browser.',
    fileNamePrompt: 'Enter file name',
    defaultFileName: 'My Artwork'
  },

  // Tool Introduction
  aboutTitle: 'About Drawing Board',

  aboutDescription: 'Drawing Board is an intuitive and easy-to-use online drawing tool that allows you to freely express your creativity. Whether you want to doodle, create simple illustrations, or jot down ideas visually, this tool has you covered.',
  featuresTitle: 'Key Features',
  feature1: 'Free drawing with various colors and brush sizes',
  feature2: 'Eraser tool for easy modifications',
  feature3: 'Undo and redo functionality to fix mistakes',
  feature4: 'Adjustable brush opacity for rich drawing effects',
  feature5: 'One-click canvas clearing to start fresh',
  feature6: 'Save your artwork as an image file',
  howToUseTitle: 'How to Use',
  howToUseStep1: '1. Select the brush tool and color to start drawing',
  howToUseStep2: '2. Use the sliders to adjust brush size and opacity',
  howToUseStep3: '3. Use the eraser tool to remove unwanted content',
  howToUseStep4: '4. You can undo or redo actions at any time',
  howToUseStep5: '5. When finished, click the save button to download your artwork',
  tipsTitle: 'Usage Tips',
  tip1: 'Use thin brushes for fine details and thick brushes for filling large areas',
  tip2: 'Lower opacity creates watercolor-like or translucent effects',
  tip3: 'Don\'t worry about mistakes - make good use of the undo feature',
  tip4: 'Start with the outline of your drawing before filling in details',
  tip5: 'Experiment with different color combinations for rich and vibrant artwork'
}; 