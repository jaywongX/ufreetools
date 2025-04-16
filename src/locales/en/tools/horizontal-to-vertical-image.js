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
  },

  article: {
    title: "Horizontal to Vertical Image Converter: Optimize Photos for Social Media",
    intro: {
      title: "What is the Horizontal to Vertical Image Converter?",
      content: `<p>The <strong>Horizontal to Vertical Image Converter</strong> is a powerful online tool that transforms landscape (horizontal) images into portrait (vertical) format, optimized for mobile devices and social media platforms. Unlike basic cropping tools, this converter offers multiple sophisticated conversion methods to preserve your image's key content while adapting it to vertical formats.</p>
      <p>With five different conversion modes (Crop, Color Fill, Blur Background, Stretch Edges, and Dual Color Background), this horizontal to vertical image tool gives you complete control over how your horizontal images are converted to vertical format. Whether you're preparing content for Instagram Stories, TikTok, Pinterest, or creating the perfect mobile wallpaper, this converter handles the technical aspects so you can focus on creativity.</p>`
    },
    useCases: {
      title: "When to Use the Horizontal to Vertical Image Converter",
      case1: "Creating <strong>Instagram Stories</strong> and <strong>Reels</strong> from landscape photos without awkward cropping",
      case2: "Converting horizontal photos to <strong>vertical format</strong> for <strong>TikTok</strong> videos and content",
      case3: "Transforming landscape images into <strong>Pinterest pins</strong> with perfect proportions",
      case4: "Creating <strong>mobile wallpapers</strong> from horizontal desktop wallpapers",
      case5: "Preparing promotional images for <strong>vertical digital displays</strong> and kiosks"
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "How does the Horizontal to Vertical Image Converter preserve image quality?",
      a1: "Our horizontal to vertical image converter maintains image quality by using advanced rendering techniques. You can select output formats (JPEG, PNG, WEBP) and adjust quality settings. For maximum quality, choose PNG format or set JPEG/WEBP quality to 100%.",
      
      q2: "Which conversion mode is best for social media stories?",
      a2: "For social media stories (Instagram, Facebook, TikTok), the 'Blur Background' mode typically works best. This horizontal to vertical image conversion preserves your entire photo while filling the vertical space with a blurred version of itself, creating a professional, polished look perfect for stories.",
      
      q3: "Can I customize the output dimensions for specific platforms?",
      a3: "Yes! The horizontal to vertical image converter includes presets for popular platforms (Instagram Stories: 1080×1920, TikTok: 1080×1920, Pinterest: 1000×1500) or you can set custom dimensions. The tool automatically handles the aspect ratio conversion for your specific needs.",
      
      q4: "Will my original image file be stored on your servers?",
      a4: "No. The horizontal to vertical image conversion happens entirely in your browser. Your original image is never uploaded to our servers, ensuring your privacy and data security.",
      
      q5: "How can I achieve the best results when converting horizontal images to vertical format?",
      a5: "For optimal horizontal to vertical image conversion results: 1) Choose the appropriate conversion mode for your content type, 2) Use the preview to check how your image appears, 3) Try different modes to see which preserves the important elements of your image, and 4) Adjust advanced settings like sharpening for fine-tuning."
    },
    tutorial: {
      title: "How to Convert Horizontal Images to Vertical Format",
      step1: "Upload your horizontal image by dragging and dropping it onto the upload area or clicking the 'Select Image' button.",
      step2: "Choose a conversion mode from the five available options (Crop, Color Fill, Blur Background, Stretch Edges, or Dual Color Background).",
      step3: "Adjust the mode-specific settings that appear based on your selection. For example, if you choose 'Blur Background', adjust the blur radius slider.",
      step4: "Select your preferred output size: Auto (automatically calculated), Preset (pre-defined dimensions for platforms like Instagram or TikTok), or Custom (your own width and height).",
      step5: "Choose your preferred output format (JPEG, PNG, or WEBP) and adjust quality settings if applicable.",
      step6: "For advanced options, click the 'Advanced Options' dropdown to access settings like preserving aspect ratio, sharpening, and adding watermarks.",
      step7: "Click the 'Convert to Vertical' button to transform your horizontal image to vertical format.",
      step8: "Preview the result and download your vertical image using the 'Download Image' button."
    },
    conclusion: {
      title: "Transform Your Horizontal Photos into Perfect Vertical Content",
      content: "The Horizontal to Vertical Image Converter makes it easy to adapt your landscape photos for today's vertical-first platforms. With multiple conversion modes and customization options, you can ensure your images look their best in any vertical format. Try different settings to find the perfect conversion for your specific images and platform requirements. Start converting your horizontal images to vertical format today and optimize your visual content for mobile devices and social media!"
    }
  }
};
