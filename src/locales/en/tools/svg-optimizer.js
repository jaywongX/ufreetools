export default {
  name: 'SVG Optimizer',
  description: 'Optimize and clean up SVG files for better performance and file size',
  upload: {
    title: 'Upload SVG',
    dropzone: 'Drop SVG file here or click to browse',
    or: 'OR',
    pasteCode: 'Paste SVG code',
    maxSize: 'Maximum file size: 5MB',
    onlySvg: 'Only SVG files are supported'
  },
  input: {
    title: 'Input SVG',
    pasteHere: 'Paste SVG code here...',
    loadExample: 'Load Example',
    clear: 'Clear',
    validate: 'Validate SVG'
  },
  output: {
    title: 'Optimized SVG',
    copyToClipboard: 'Copy to Clipboard',
    download: 'Download SVG',
    beforeSize: 'Before Size',
    afterSize: 'After Size',
    reduction: 'Reduction'
  },
  options: {
    title: 'Optimization Options',
    preset: 'Preset',
    presets: {
      default: 'Default',
      light: 'Light',
      aggressive: 'Aggressive',
      custom: 'Custom'
    },
    removeComments: 'Remove Comments',
    removeHiddenElements: 'Remove Hidden Elements',
    removeEmptyContainers: 'Remove Empty Containers',
    removeUnusedDefs: 'Remove Unused Defs',
    removeViewBox: 'Remove viewBox',
    cleanupIDs: 'Clean up IDs',
    convertColors: 'Convert Colors to Hex',
    removeMetadata: 'Remove Metadata',
    removeDoctype: 'Remove Doctype',
    removeXMLProcInst: 'Remove XML Instructions',
    removeEditorsNS: 'Remove Editor Namespaces',
    collapseGroups: 'Collapse Groups',
    convertPathData: 'Optimize Path Data',
    convertTransforms: 'Optimize Transforms',
    removeUselessStrokeAndFill: 'Remove Useless Stroke & Fill',
    moveElemsAttrsToGroup: 'Move Elements Attributes to Group',
    mergePaths: 'Merge Paths',
    minifyStyles: 'Minify Styles',
    inlineStyles: 'Inline Styles',
    cleanupNumericValues: 'Round Numeric Values'
  },
  view: {
    title: 'Preview',
    original: 'Original',
    optimized: 'Optimized',
    showBorder: 'Show Border',
    backgroundColor: 'Background Color',
    grid: 'Show Grid',
    zoom: 'Zoom',
    toggleAnimation: 'Toggle Animation'
  },
  actions: {
    optimize: 'Optimize SVG',
    resetOptions: 'Reset Options',
    download: 'Download',
    copy: 'Copy Code',
    viewCode: 'View Code',
    viewPreview: 'View Preview'
  },
  messages: {
    optimizationSuccess: 'SVG optimized successfully',
    optimizationFailed: 'Failed to optimize SVG: {error}',
    invalidSvg: 'Invalid SVG file or code',
    copied: 'SVG code copied to clipboard',
    downloaded: 'Optimized SVG downloaded',
    emptyInput: 'Please provide SVG code or file to optimize'
  }
} 