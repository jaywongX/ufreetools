export default {
  name: 'Vertical to Horizontal Image',
  description: 'Convert vertical portrait images to horizontal landscape format with multiple transformation options',

  upload: {
    title: 'Upload Image',
    dropzone: 'Drag & drop your image here',
    maxSize: 'Max file size: 10MB',
    supportedFormats: 'Supported formats: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Conversion Settings',
    presets: 'Quick Presets',
    conversionMode: 'Conversion Mode',
    modes: {
      rotate: 'Rotate',
      fill: 'Fill Background',
      blur: 'Blurred Background',
      stretch: 'Stretch Edges',
      dualColor: 'Dual Color Background'
    },
    rotationAngle: 'Rotation Angle',
    fillColor: 'Background Color',
    blurRadius: 'Blur Amount',
    stretchEdges: 'Stretch Amount',
    leftColor: 'Left Color',
    rightColor: 'Right Color',
    sizeOption: 'Size Setting',
    sizeModes: {
      auto: 'Auto Size',
      preset: 'Common Sizes',
      custom: 'Custom Size'
    },
    sizePresets: 'Size Presets',
    outputSize: 'Output Size',
    width: 'Width',
    height: 'Height',
    dimensionsHint: 'Enter dimensions in pixels',
    autoSize: 'Automatically calculate size',
    outputFormat: 'Output Format',
    quality: 'Image Quality',
    advancedOptions: 'Advanced Options',
    preserveRatio: 'Preserve aspect ratio',
    sharpen: 'Sharpen',
    addWatermark: 'Add watermark',
    watermarkPlaceholder: 'Enter watermark text',
    watermarkColor: 'Watermark color'
  },

  output: {
    preview: 'Result Preview',
    dimensions: 'Dimensions',
    before: 'Before',
    after: 'After'
  },

  actions: {
    selectImage: 'Select Image',
    convert: 'Convert Image',
    download: 'Download Image',
    reset: 'Remove',
    showSideBySide: 'Show Comparison',
    hideComparison: 'Hide Comparison',
    hideSideBySide: 'Close'
  },

  messages: {
    processing: 'Processing image...',
    convertPrompt: 'Convert your image to see preview here',
    error: 'An error occurred while processing the image',
    success: 'Conversion completed successfully!'
  },

  examples: {
    title: 'Usage Tips',
    social: 'Perfect for social media posts where horizontal images perform better',
    socialTip: 'Use blur mode for the best social media results',
    website: 'Create banner images for websites and blogs',
    websiteTip: 'Dual color mode works great for web banners'
  },

  help: {
    title: 'How to Use This Tool',
    description: 'This tool lets you convert vertical (portrait) images to horizontal (landscape) format using various methods to maintain visual quality and impact.',
    example1: {
      title: 'Social Media Posts',
      description: 'Convert portrait photos to social media friendly landscape format with blurred background'
    },
    example2: {
      title: 'Website Banners',
      description: 'Create website headers and banners from vertical images with color fill backgrounds'
    }
  }
};
