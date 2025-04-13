export default {
  name: 'Image Watermark',
  description: 'Add text or image watermarks to your photos with customizable settings',
  upload: {
    title: 'Upload Images',
    dropzone: 'Drop images here or click to browse',
    addMore: 'Add More Images',
    clearAll: 'Clear All',
    maxFiles: 'Maximum {count} images',
    maxSize: 'Maximum size: {size}MB per image',
    supportedFormats: 'Supported formats: JPG, PNG, WEBP, GIF'
  },
  watermarkType: {
    title: 'Watermark Type',
    text: 'Text Watermark',
    image: 'Image Watermark',
    both: 'Text & Image'
  },
  textWatermark: {
    title: 'Text Watermark',
    text: 'Watermark Text',
    font: 'Font',
    size: 'Size',
    color: 'Color',
    opacity: 'Opacity',
    rotation: 'Rotation',
    shadow: 'Text Shadow',
    background: 'Text Background',
    padding: 'Padding',
    border: 'Border',
    spacing: 'Letter Spacing'
  },
  imageWatermark: {
    title: 'Image Watermark',
    upload: 'Upload Watermark Image',
    selectLogo: 'Select Logo',
    presetLogos: 'Preset Logos',
    size: 'Size',
    opacity: 'Opacity',
    rotation: 'Rotation',
    offset: 'Offset'
  },
  positioning: {
    title: 'Positioning',
    position: 'Position',
    custom: 'Custom Position',
    xPosition: 'X Position',
    yPosition: 'Y Position',
    tiled: 'Tiled Pattern',
    margin: 'Margin',
    scale: 'Scale with Image'
  },
  positions: {
    topLeft: 'Top Left',
    topCenter: 'Top Center',
    topRight: 'Top Right',
    middleLeft: 'Middle Left',
    middleCenter: 'Middle Center',
    middleRight: 'Middle Right',
    bottomLeft: 'Bottom Left',
    bottomCenter: 'Bottom Center',
    bottomRight: 'Bottom Right',
    custom: 'Custom Position'
  },
  output: {
    title: 'Output',
    quality: 'Output Quality',
    format: 'Output Format',
    original: 'Same as Original',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    preview: 'Preview',
    downloadIndividual: 'Download',
    downloadAll: 'Download All',
    downloadAsZip: 'Download as ZIP'
  },
  presets: {
    title: 'Presets',
    save: 'Save Current Settings',
    load: 'Load Preset',
    delete: 'Delete Preset',
    presetName: 'Preset Name'
  },
  actions: {
    apply: 'Apply Watermark',
    applyToAll: 'Apply to All',
    reset: 'Reset',
    preview: 'Preview',
    undo: 'Undo',
    cancel: 'Cancel Processing'
  },
  messages: {
    processing: 'Processing...',
    success: 'Watermark applied successfully',
    error: 'Error: {error}',
    noImages: 'Please add images first',
    noWatermark: 'Please add text or image watermark',
    presetSaved: 'Preset saved successfully',
    presetLoaded: 'Preset loaded successfully',
    presetDeleted: 'Preset deleted',
    watermarkApplied: 'Watermark applied',
    watermarkImageLoadError: 'Failed to load watermark image',
    imageLoadError: 'Failed to load image',
    resetSuccess: 'Reset successful',
    downloadStarted: 'Download started',
    downloadError: 'Failed to download image',
    imageLoaded: 'Image loaded successfully',
    canvasInitError: 'Failed to initialize canvas',
    tiledWatermarkError: 'Failed to create tiled watermark'
  },
  article: {
    title: "Image Watermark Tool: Protect and Brand Your Visual Content",
    features: {
      title: "Understanding Image Watermarking",
      description: "The <strong>Image Watermark</strong> tool is a powerful solution for adding visible ownership marks to your <strong>digital images</strong>. This online <strong>watermarking tool</strong> enables you to apply both <strong>text watermarks</strong> and <strong>image watermarks</strong> to protect your intellectual property and strengthen your brand presence.<br><br>Our <strong>photo watermark</strong> tool offers extensive customization options including opacity control, positioning, rotation, and scale adjustment to create the perfect <strong>watermark effect</strong>. Whether you need a subtle <strong>copyright watermark</strong> or a prominent <strong>logo overlay</strong>, this tool provides the flexibility to achieve professional results without requiring complex <strong>image editing software</strong>.",
      useCases: {
        title: "Common Applications for Image Watermarking",
        items: [
          "Photographers adding copyright information to prevent unauthorized use of their portfolio images",
          "Businesses and marketers embedding logos on product photos to reinforce brand identity",
          "Real estate professionals adding watermarks to property images to prevent unauthorized listings",
          "Graphic designers protecting draft designs shared with clients during the approval process",
          "Social media creators branding their visual content to increase recognition when images are shared",
          "E-commerce sellers adding watermarks to product photos to discourage competitors from using their images"
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about Image Watermarking",
      items: [
        {
          question: "What's the difference between text and image watermarks?",
          answer: "Text watermarks use custom text like copyright notices or website URLs and can be styled with different fonts, colors, and effects. They're ideal for displaying ownership information. Image watermarks use graphics like logos or signatures overlaid on your photos, which help with brand recognition. Our watermark tool supports both types, allowing you to choose the most appropriate option for your specific needs or combine them for maximum protection and branding."
        },
        {
          question: "How do I create a watermark that's visible but doesn't distract from my image?",
          answer: "To create an effective but unobtrusive watermark, adjust the opacity setting to between 30-50% to make it semi-transparent. Position the watermark in a corner or along an edge rather than over the main subject. For text watermarks, choose a color that contrasts with your image, and consider enabling the tiled watermark pattern with increased spacing for a subtle repeated effect. These techniques ensure your watermark is visible for protection while maintaining the visual impact of your original image."
        },
        {
          question: "Can watermarks be completely removed from images?",
          answer: "While no watermark is 100% removal-proof, a well-designed watermark significantly deters unauthorized use. Professional watermarks applied with our tool—especially those using strategic placement, appropriate opacity, and tiled patterns—are difficult to remove without degrading image quality or requiring advanced technical skills. For maximum protection, consider using a combination of text and image watermarks and placing them over important areas of your images where removal attempts would be more noticeable."
        },
        {
          question: "What image formats work with the watermark tool?",
          answer: "Our image watermark tool supports all major image formats including JPG, PNG, WEBP, and GIF files. The watermarked output can be downloaded in your choice of format, with PNG recommended when you need transparency preservation or maximum quality, and JPG suitable for most general purposes with a smaller file size. The tool preserves the original image dimensions while adding your customized watermark, ensuring consistent results across your visual content."
        },
        {
          question: "Can I create a batch of watermarked images at once?",
          answer: "Currently, our watermark tool processes one image at a time to ensure precise watermark placement and customization. This approach allows you to preview and adjust your watermark settings for each image individually, ensuring optimal results for different compositions and color schemes. The tool's intuitive interface makes the process quick and efficient, allowing you to create professionally watermarked images with just a few clicks."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Using the Image Watermark Tool",
      steps: [
        "Click the 'Upload Image' button at the top of the tool and select the photo you want to watermark from your device",
        "Choose your watermark type: select 'Text Watermark' to add custom text or 'Image Watermark' to use a logo or other graphic",
        "For text watermarks, enter your desired text, select font style, adjust size, color, and opacity settings in the left panel",
        "For image watermarks, upload your logo or graphic using the upload button, then adjust scale and opacity as needed",
        "Select the watermark position using the positioning grid (9 positions available) or enable the 'Tiled Pattern' option to create a repeating watermark across the entire image",
        "Adjust the rotation angle using the slider to create a diagonal watermark effect if desired",
        "Preview your changes in real-time in the right panel, and continue making adjustments until satisfied with the appearance",
        "Click the 'Download' button to save your watermarked image to your device in your preferred format"
      ]
    },
    conclusion: "Adding professional watermarks to your images is an essential practice for protecting your visual content and reinforcing your brand identity in today's digital landscape. The Image Watermark tool makes this process simple and accessible, allowing you to create customized watermarks without requiring advanced design skills or expensive software. Whether you're a photographer, business owner, or content creator, incorporating watermarks into your workflow helps secure your intellectual property while enhancing recognition of your work as it circulates online."
  }
} 