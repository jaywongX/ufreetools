export default {
  name: 'Image to ASCII',
  description: 'Convert images into customizable ASCII art text',
  upload: {
    title: 'Upload Image',
    dropzone: 'Drag and drop your image here or click to browse',
    maxSize: 'Maximum file size: 5MB',
    supportedFormats: 'Supported formats: JPG, PNG, WEBP, GIF',
    pasteImage: 'Or paste an image from the clipboard'
  },
  options: {
    title: 'Conversion Options',
    width: 'Output Width',
    height: 'Output Height',
    preserveAspect: 'Preserve Aspect Ratio',
    colored: 'Colored Output',
    charSet: 'Character Set',
    charSets: {
      standard: 'Standard',
      simple: 'Simple',
      complex: 'Complex',
      blocks: 'Block Characters',
      custom: 'Custom'
    },
    customChars: 'Custom Characters',
    invert: 'Invert Colors',
    threshold: 'Brightness Threshold',
    brightness: 'Brightness',
    contrast: 'Contrast',
    fontFamily: 'Font Family',
    fontSize: 'Font Size',
    lineHeight: 'Line Height',
    backgroundColor: 'Background Color',
    textColor: 'Text Color'
  },
  output: {
    title: 'ASCII Output',
    preview: 'Preview',
    raw: 'Raw ASCII',
    html: 'HTML',
    copyToClipboard: 'Copy to Clipboard',
    downloadTxt: 'Download as TXT',
    downloadHtml: 'Download as HTML',
    downloadImage: 'Download as Image',
    stats: {
      title: 'Statistics',
      characters: 'Number of Characters',
      lines: 'Number of Lines',
      colors: 'Number of Colors',
      size: 'Text Size'
    }
  },
  presets: {
    title: 'Presets',
    save: 'Save Current Settings',
    load: 'Load Preset',
    delete: 'Delete Preset',
    presetName: 'Preset Name',
    default: 'Default',
    detailed: 'Detailed',
    minimalist: 'Minimalist',
    blocky: 'Blocky Style',
    small: 'Small',
    inverted: 'Inverted'
  },
  adjustment: {
    title: 'Image Adjustment',
    grayscale: 'Grayscale',
    negative: 'Negative',
    resize: 'Resize Before Conversion',
    crop: 'Crop Image',
    rotate: 'Rotate',
    flipH: 'Flip Horizontally',
    flipV: 'Flip Vertically'
  },
  animation: {
    title: 'Animation',
    animated: 'Process as Animation',
    frameDelay: 'Frame Delay',
    loop: 'Loop Animation',
    loopCount: 'Loop Count',
    extractFrame: 'Extract Current Frame'
  },
  actions: {
    convert: 'Convert to ASCII',
    resetOptions: 'Reset Options',
    refreshPreview: 'Refresh Preview',
    loadImage: 'Load New Image',
    applyChanges: 'Apply Changes',
    selectImage: 'Select Image',
    reset: 'Reset',
    processing: 'Processing...',
    generate: 'Generate ASCII',
    copy: 'Copy',
    download: 'Download'
  },
  messages: {
    converting: 'Converting image to ASCII...',
    conversionComplete: 'Conversion complete',
    conversionFailed: 'Image conversion failed: {error}',
    copied: 'ASCII copied to clipboard',
    downloadStarted: 'Download started',
    downloadComplete: 'ASCII downloaded',
    downloadFailed: 'Download failed',
    copyFailed: 'Copy failed',
    resetComplete: 'Settings have been reset',
    asciiGenerated: 'ASCII art has been generated',
    generationFailed: 'Failed to generate ASCII',
    presetSaved: 'Preset saved successfully',
    presetLoaded: 'Preset loaded',
    presetDeleted: 'Preset deleted',
    invalidImage: 'Invalid image format or corrupted file',
    imageTooBig: 'Image dimensions are too large to convert',
    selectOrLoad: 'Please select an image or load from a URL',
    asciiWillDisplay: 'The ASCII art will be displayed here',
    customCharsPlaceholder: 'Enter characters in order from darkest to lightest...',
    tip: 'Click the "Generate ASCII" button after adjusting settings to see the effect',
    drapPlaceHolder: 'Select or drag and drop an image here',
    noImage: 'Please select an image first',
    generateAscii: 'Click the "Generate ASCII" button to convert the image',
    tip2: 'Tip: Use the copy button to copy ASCII art to the clipboard, or use the download button to save it as a text file.'
  },
  charSets: {
    standard: 'Standard',
    simple: 'Simple',
    blocks: 'Blocks',
    custom: 'Custom'
  },
  settings: {
    title: 'ASCII Settings',
    customCharsetLabel: 'Custom Character Set (from darkest to lightest)',
    asciiWidth: 'ASCII Width',
    invert: 'Invert Colors',
    colored: 'Colored Output',
    fontSize: 'Font Size'
  },
  preview: {
    originalImage: 'Original Image',
    generatedAscii: 'Generated ASCII'
  },
  article: {
    title: "Image to ASCII Art Converter: Transform Pictures into Text Art",
    features: {
      title: "Understanding Image to ASCII Conversion",
      description: "The <strong>Image to ASCII converter</strong> is a specialized <strong>text art generator</strong> that transforms regular images into artistic text compositions using various ASCII characters. This <strong>ASCII art maker</strong> works by analyzing the brightness values of each pixel in your image and mapping them to corresponding ASCII characters based on their visual density.<br><br>Unlike basic <strong>text art creators</strong>, our tool offers comprehensive customization options including adjustable width, multiple character sets, color preservation, and inversion controls. The <strong>ASCII image converter</strong> supports various image formats such as JPG, PNG, and GIF, ensuring compatibility with most image sources. For digital artists, programmers, and creative content creators, this <strong>picture to text converter</strong> provides a unique way to represent visual content in text-based formats that can be easily shared, embedded in documents, or used in environments where images cannot be displayed.",
      useCases: {
        title: "Practical Applications for ASCII Art",
        items: [
          "<strong>Creative Messaging</strong>: Enhance email signatures, social media posts, or messaging app communications with distinctive <strong>ASCII pictures</strong> that stand out from regular text or images",
          "<strong>Programming Projects</strong>: Integrate ASCII art into command-line interfaces, terminal applications, or text-based games to add visual elements without requiring actual image rendering capabilities",
          "<strong>Educational Materials</strong>: Create accessible visual representations for educational content, particularly useful for teaching concepts in environments where standard images might not be supported",
          "<strong>Digital Art Projects</strong>: Develop unique artistic expressions by transforming photographs into <strong>text-based artwork</strong>, exploring the intersection between visual art and typography",
          "<strong>Legacy System Content</strong>: Generate visual content for older computer systems, text-only displays, or environments with limited graphical capabilities where standard images cannot be rendered",
          "<strong>ASCII Animation Creation</strong>: Convert video frames or sequential images into ASCII frames to create text-based animations for creative projects, websites, or terminal applications"
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about ASCII Art Conversion",
      items: [
        {
          question: "What is the best image type to convert to ASCII art?",
          answer: "Images with high contrast, clear subjects, and relatively simple compositions tend to produce the most effective ASCII art. Portrait photos with good lighting, silhouettes, and images with distinct outlines typically yield the best results when processed through our ASCII art generator. While the tool can handle any image format (JPG, PNG, GIF, WebP), the content characteristics matter more than the file format. Avoid images with very busy backgrounds, low contrast, or fine details that might get lost during the conversion process. For optimal text art conversion, consider preprocessing your images to enhance contrast and simplify complex areas before uploading them to the ASCII converter."
        },
        {
          question: "How can I control the level of detail in my ASCII art?",
          answer: "The detail level in your ASCII text art can be adjusted through several settings in our image to ASCII converter. The width parameter is the most important - higher width values (up to 200 characters) create more detailed ASCII images with finer precision, while lower values produce broader, less detailed representations. The character set selection also impacts detail - the 'standard' and 'blocks' sets provide more gradation and potentially better detail than the 'simple' set. For maximum control, use the custom character set option to define your own sequence of characters based on their visual density. Additionally, the invert option can sometimes improve detail for certain types of images by reversing the brightness mapping, while the font size setting affects how the final ASCII picture displays on screen."
        },
        {
          question: "Why does my ASCII art look distorted or stretched?",
          answer: "ASCII art can appear stretched because standard text characters are taller than they are wide, creating an aspect ratio imbalance when converting from square pixels. Our ASCII converter automatically applies a correction factor to compensate for this character aspect ratio difference, but some distortion may still be visible depending on the font used to display the result. If your ASCII image looks too compressed vertically or stretched horizontally, try adjusting the width setting or view the result using a monospace font (like Courier New, Consolas, or Monaco) where characters have more consistent dimensions. Using the 'blocks' character set can also help create more proportional output as these Unicode characters better preserve spatial relationships than standard ASCII characters."
        },
        {
          question: "Can I create colored ASCII art with this tool?",
          answer: "Yes, our image to ASCII converter offers a color output option that preserves the original colors from your image. When you enable the 'Colored Output' setting, the ASCII text generator will analyze both the brightness and the color information of each pixel, mapping them to ASCII characters while retaining the corresponding color values. This creates a vibrant, colored ASCII picture rather than monochrome text art. The colored output is generated as HTML with inline styling to preserve the color information, which means you can copy and use it in HTML documents, but for plain text applications, you'll want to use the standard non-colored output. Note that color preservation works best with images that have distinct color areas rather than subtle gradients."
        },
        {
          question: "How can I share or use my generated ASCII art?",
          answer: "After generating ASCII art with our text art maker, you have several options for sharing or using your creation. For plain text ASCII art, simply use the Copy button to copy the entire output to your clipboard, then paste it into emails, documents, social media posts, or any text field. For colored ASCII art, you'll need to use the Download option to save the result as an HTML file which can be viewed in any web browser or embedded in websites. You can also take a screenshot of the generated result for sharing as an image. For programming projects, copy the plain text output and integrate it as string constants in your code. Remember that monospace fonts will display your ASCII picture correctly, while proportional fonts may distort the alignment of characters and ruin the visual effect."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Creating ASCII Art from Images",
      steps: [
        "<strong>Select an Image</strong>: Click the 'Select Image' button at the top of the <strong>ASCII art generator</strong> interface. Choose a photo or graphic from your device that you'd like to convert. For best results, select an image with good contrast and a clear subject.",
        "<strong>Adjust the Width Setting</strong>: Use the slider in the settings panel to set your desired ASCII width. Remember that higher values (toward 200) will create more detailed but larger <strong>text pictures</strong>, while lower values produce simpler, more compact results.",
        "<strong>Choose a Character Set</strong>: Select from the available character set options (Standard, Simple, Blocks, or Custom). Each set produces a different style of <strong>ASCII image</strong>. If you select 'Custom', you can enter your own characters arranged from darkest to lightest.",
        "<strong>Configure Additional Options</strong>: Decide whether to invert the colors (which can sometimes improve readability on white backgrounds), enable colored output (to preserve the original image colors), and adjust the font size for display purposes.",
        "<strong>Generate the ASCII Art</strong>: Click the 'Generate ASCII' button to process your image through the <strong>text art converter</strong>. The algorithm will analyze your image and create a corresponding ASCII representation based on your settings.",
        "<strong>Preview and Refine</strong>: Review the generated <strong>ASCII artwork</strong> in the result panel. If you're not satisfied with the result, adjust your settings and generate again. Try different character sets or width values to achieve the desired level of detail.",
        "<strong>Save or Share Your Creation</strong>: Once you're happy with your <strong>ASCII picture</strong>, use the Copy button to copy it to your clipboard or the Download button to save it as a text file. For colored ASCII art, download it as an HTML file to preserve the color information."
      ]
    },
    conclusion: "The Image to ASCII converter transforms ordinary pictures into extraordinary text art, bridging the gap between visual and textual media. This powerful ASCII art maker offers not just a creative outlet, but practical applications across digital communication, programming, education, and art. By converting standard images into ASCII format, users can express visual concepts in environments where traditional images aren't supported or create unique artistic interpretations of photographic content. Whether you're looking to add character to your digital communications, solve compatibility challenges, or explore the artistic possibilities of text-based imagery, this ASCII picture generator provides the customization tools and output options you need. As digital communication continues to evolve, the ability to convert images to text art remains a valuable skill for both practical problem-solving and creative expression."
  }
}