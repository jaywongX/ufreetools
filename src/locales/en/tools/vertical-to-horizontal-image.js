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
  },

  article: {
    title: "Convert Vertical Images to Horizontal: Complete Guide",
    
    intro: {
      title: "Tool Features and Use Cases",
      content: `
        <p>Our <strong>Vertical to Horizontal Image Converter</strong> transforms portrait (vertical) images into landscape (horizontal) format while maintaining visual quality. This powerful tool offers multiple conversion methods including blurred backgrounds, solid color fills, dual-color gradients, edge stretching, and rotation adjustments.</p>
        
        <p>Key features:</p>
        <ul>
          <li><strong>Multiple conversion modes</strong> for different visual styles and purposes</li>
          <li><strong>Social media optimization</strong> with preset dimensions for various platforms</li>
          <li><strong>Professional customization</strong> with advanced settings like sharpening and watermarking</li>
          <li><strong>High-quality output</strong> in various formats (JPEG, PNG, WebP)</li>
        </ul>
        
        <h4>Common Use Cases:</h4>
        
        <p><strong>Social Media Content</strong>: Transform vertical smartphone photos into horizontal posts for Facebook, Twitter, LinkedIn, and YouTube where landscape formats perform better.</p>
        
        <p><strong>Website Banners</strong>: Create wide header images and banners from vertical product photos or portraits for e-commerce sites, blogs, and marketing materials.</p>
        
        <p><strong>Digital Marketing</strong>: Adapt vertical product images for horizontal ad formats across advertising platforms and email marketing campaigns.</p>
        
        <p><strong>Video Thumbnails</strong>: Convert vertical video stills into horizontal thumbnails for YouTube, Vimeo, and other video platforms.</p>
        
        <p><strong>Presentation Slides</strong>: Transform vertical images into horizontal formats suitable for PowerPoint, Google Slides, and other presentation software.</p>
      `
    },
    
    faq: {
      title: "Frequently Asked Questions",
      q1: "Why should I convert vertical images to horizontal format?",
      a1: "Horizontal images are preferred for many platforms including social media feeds, websites, presentations, and marketing materials. They typically receive higher engagement and better display across devices.",
      q2: "Will my vertical image lose quality when converted to horizontal?",
      a2: "No, our tool maintains image quality while converting. We use advanced techniques like blurring, color fills, and edge stretching rather than simple cropping to preserve your original image's content.",
      q3: "Which conversion mode should I choose for social media?",
      a3: "For social media, the blurred background mode usually works best as it keeps your subject centered while extending the image horizontally with an aesthetically pleasing blurred version of the original.",
      q4: "What are the optimal dimensions for horizontal images?",
      a4: "Common horizontal ratios include 16:9 (widescreen), 3:2 (standard landscape), and platform-specific ratios like 1200×630 pixels for Facebook or 1280×720 for YouTube. Our preset options handle these calculations for you.",
      q5: "Can I add watermarks to protect my converted images?",
      a5: "Yes, our tool includes a watermark feature in the advanced options. You can add custom text and adjust the color to help protect your intellectual property.",
      q6: "Does this tool work on mobile devices?",
      a6: "Absolutely! Our vertical to horizontal image converter is fully responsive and works on smartphones, tablets, and desktop computers with any modern browser."
    },
    
    tutorial: {
      title: "Step-by-Step Guide",
      step1: "Upload your vertical image by dragging and dropping it into the upload area or clicking the 'Select Image' button.",
      step2: "Choose a conversion mode: blur, fill, dual-color, stretch, or rotate based on your needs.",
      step3: "Adjust the mode-specific settings (blur amount, background color, etc.) to customize the appearance.",
      step4: "Select a size option: auto (recommended), preset dimensions for specific platforms, or custom dimensions.",
      step5: "For advanced needs, expand the Advanced Options section to access sharpening, aspect ratio controls, and watermarking.",
      step6: "Click 'Convert Image' to process your vertical image into horizontal format.",
      step7: "Preview the result and use the comparison view to see before/after changes.",
      step8: "If needed, adjust your settings and convert again until you're satisfied with the result.",
      step9: "Download your horizontal image in your preferred format (JPEG, PNG, or WebP)."
    }
  }
}
