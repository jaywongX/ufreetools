export default {
  name: 'Horizontal to Vertical Image',
  description: 'Convert horizontal images to vertical format for social media and mobile wallpapers',
  tags: ['image', 'conversion', 'social', 'mobile', 'portrait'],

  upload: {
    title: 'Convert Horizontal to Vertical Image',
    dropzone: 'Drag and drop your image here',
    maxSize: 'Maximum file size: 10MB',
    supportedFormats: 'Supported formats: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Conversion Settings',
    presets: 'Presets',
    conversionMode: 'Conversion Mode',
    modes: {
      crop: 'Crop',
      fill: 'Color Fill',
      blur: 'Blur Background',
      stretch: 'Stretch Edges',
      dualColor: 'Dual Color Background'
    },
    cropPosition: 'Crop Position',
    positions: {
      left: 'Left',
      center: 'Center',
      right: 'Right'
    },
    fillColor: 'Fill Color',
    blurRadius: 'Blur Radius',
    stretchFactor: 'Stretch Factor',
    topColor: 'Top Color',
    bottomColor: 'Bottom Color',
    sizeOption: 'Output Size',
    sizeModes: {
      auto: 'Auto',
      preset: 'Preset',
      custom: 'Custom'
    },
    sizePresets: 'Size Presets',
    outputSize: 'Custom Dimensions',
    width: 'Width',
    height: 'Height',
    dimensionsHint: 'Enter dimensions in pixels',
    outputFormat: 'Output Format',
    quality: 'Image Quality',
    advancedOptions: 'Advanced Options',
    preserveRatio: 'Preserve Aspect Ratio',
    sharpen: 'Sharpen',
    addWatermark: 'Add Watermark',
    watermarkPlaceholder: 'Enter watermark text',
    watermarkColor: 'Watermark Color'
  },

  output: {
    preview: 'Output Preview',
    before: 'Before',
    after: 'After',
    dimensions: 'Dimensions'
  },

  actions: {
    selectImage: 'Select Image',
    convert: 'Convert to Vertical',
    download: 'Download Image',
    showSideBySide: 'Show Comparison',
    hideSideBySide: 'Hide Comparison',
    hideComparison: 'Hide Comparison'
  },

  messages: {
    convertPrompt: 'Upload a horizontal image and convert it to vertical format',
    processing: 'Processing your image...',
    imageOnly: 'Please select an image file'
  },

  examples: {
    title: 'Usage Examples',
    social: 'Create vertical stories for Instagram, TikTok, and other social platforms',
    socialTip: 'Perfect for turning landscape photos into engaging stories',
    mobile: 'Create mobile wallpapers from landscape images',
    mobileTip: 'Optimize images for smartphone screens with various aspect ratios'
  }
};
