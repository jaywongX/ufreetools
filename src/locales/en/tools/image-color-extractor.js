export default {
  name: 'Image Color Extractor',
  description: 'Extract color palettes and dominant colors from images',
  input: {
    title: 'Upload Image',
    dropzone: 'Drop image here or click to upload',
    formats: 'Supported formats: JPG, PNG, GIF, WebP, SVG',
    browse: 'Browse Files',
    selectImage: 'Select Image',
    orText: 'or',
    pasteUrl: 'Paste image URL:',
    loadUrl: 'Load from URL',
    urlPlaceholder: 'https://example.com/image.jpg',
    unnamed: 'Unnamed Image'
  },
  options: {
    title: 'Extraction Options',
    extractSettings: 'Extraction Settings',
    colorCount: 'Number of Colors',
    paletteSize: 'Palette Size',
    paletteMin: 'Minimum (3)',
    paletteMax: 'Maximum (20)',
    colorSimilarity: 'Color Similarity',
    similiarityToggle: 'Allow similar colors',
    quality: 'Extraction Quality',
    colorModel: 'Color Model',
    colorSpace: 'Color Space',
    colorFormat: 'Color Format',
    sortBy: 'Sort Colors By',
    sortByPopularity: 'By Frequency of Appearance',
    sortByLuminance: 'By Luminance',
    sortByHue: 'By Hue',
    sortBySaturation: 'By Saturation',
    ignoreWhite: 'Ignore White',
    ignoreBlack: 'Ignore Black',
    threshold: 'Similarity Threshold'
  },
  colorModels: {
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB'
  },
  colorFormats: {
    hex: 'Hexadecimal (#RRGGBB)',
    rgb: 'RGB (0-255)',
    rgba: 'RGBA with Transparency',
    hsl: 'HSL',
    hsla: 'HSLA with Transparency',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },
  sortOptions: {
    prevalence: 'Frequency of Appearance',
    luminance: 'Luminance',
    hue: 'Hue',
    saturation: 'Saturation',
    original: 'Original Order'
  },
  colorSpaces: {
    srgb: 'sRGB',
    p3: 'Display P3',
    rec2020: 'Rec. 2020',
    prophoto: 'ProPhoto RGB'
  },
  results: {
    title: 'Extracted Colors',
    colorsFound: '{count} colors extracted',
    dominantColor: 'Dominant Color',
    mainColor: 'Main Color',
    complementary: 'Complementary Color',
    palette: 'Color Palette',
    colorPalette: 'Color Palette',
    palettePreview: 'Palette Preview',
    usage: 'Color Usage (%)',
    percentage: 'Percentage: {value}%',
    copyAll: 'Copy All Colors',
    clickToCopy: 'Click to copy color: {color}',
    downloading: 'Downloading palette...'
  },
  display: {
    originalImage: 'Original Image',
    colorPalette: 'Color Palette',
    uploadFirst: 'Please upload an image first',
    clickExtract: 'Click the \"Extract Colors\" button to get the image\'s color palette'
  },
  actions: {
    extract: 'Extract Colors',
    extracting: 'Processing...',
    download: 'Download Palette',
    copy: 'Copy',
    copyValue: 'Copy Value',
    reset: 'Reset',
    copyPalette: 'Copy Palette',
    exportJson: 'Export as JSON',
    exportCss: 'Export as CSS Variables',
    exportSass: 'Export as SASS Variables',
    exportSwatch: 'Export as ASE Swatch'
  },
  palette: {
    title: 'Named Palette',
    vibrant: 'Vibrant',
    muted: 'Muted',
    dark: 'Dark',
    light: 'Light',
    custom: 'Custom'
  },
  messages: {
    imageLoaded: 'Image loaded successfully',
    processingImage: 'Processing image...',
    extractionComplete: 'Color extraction complete',
    extractionFailed: 'Color extraction failed: {error}',
    copied: 'Copied to clipboard',
    copiedColor: 'Copied: {color}',
    copiedAll: 'All colors copied',
    copyFailed: 'Copy failed',
    resetDone: 'Reset complete',
    invalidImage: 'Invalid image file',
    noImageSelected: 'No image selected'
  },
  article: {
    title: "Image Color Extractor: Identify and Sample Colors from Any Image",
    features: {
      title: "Understanding Image Color Extraction and Its Applications",
      description: "The <strong>Image Color Extractor</strong> is a powerful online tool designed to analyze images and identify their key colors. This utility employs advanced <strong>color detection algorithms</strong> to scan your uploaded images, identifying both dominant colors that define the overall palette and accent colors that add visual interest.<br><br>Unlike basic eyedropper tools, our <strong>color palette generator</strong> intelligently clusters similar colors together, providing you with a cohesive and useful set of colors rather than simply sampling individual pixels. The tool supports various image formats including JPEG, PNG, GIF, and WebP, making it versatile for different use cases.<br><br>The extracted <strong>color schemes</strong> are instantly available in multiple formats including HEX, RGB, and HSL, allowing you to easily incorporate them into your design projects, code, or documentation without manual conversion.",
      useCases: {
        title: "Practical Applications for Image Color Extraction",
        items: [
          "<strong>Web Design and Development</strong>: Pull cohesive <strong>color palettes</strong> from client logos or reference images to ensure brand consistency across websites. The extracted colors can be directly used in CSS stylesheets, allowing designers to match exact colors from inspirational images or establish a consistent design system based on existing visual assets.",
          
          "<strong>Digital Marketing</strong>: Create visually harmonious social media campaigns by extracting and using a consistent <strong>color scheme</strong> from your product photography or brand images. Marketing professionals can ensure all promotional materials maintain color harmony by basing designs on extracted color data from key brand imagery.",
          
          "<strong>Brand Identity Development</strong>: Analyze competitors' <strong>brand colors</strong> or explore color options by extracting palettes from inspirational images. Brand strategists can use the tool to understand industry color trends, refine brand guidelines, or establish a distinctive visual identity that stands out from competition.",
          
          "<strong>UI/UX Design</strong>: Extract precise <strong>color values</strong> from mockups or inspiration images to implement in user interface designs. UI designers can ensure perfect color matching when transitioning from concept art to functional interfaces, maintaining the intended visual experience across all application screens.",
          
          "<strong>Print Design</strong>: Identify exact <strong>color codes</strong> from digital references to ensure accurate reproduction in print materials. Graphic designers working on print projects can extract the precise colors needed for accurate CMYK conversion, ensuring physical materials match digital designs.",
          
          "<strong>Art and Illustration</strong>: Build custom <strong>digital color palettes</strong> based on artwork or photographs that inspire you. Digital artists can analyze color relationships in masterpieces or reference photos, then apply similar color harmonies to their own work for greater visual impact."
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions About Image Color Extraction",
      items: [
        {
          question: "How accurate is the Image Color Extractor at identifying colors?",
          answer: "The <strong>Image Color Extractor</strong> offers high accuracy color identification through sophisticated algorithms that analyze pixel data and group similar colors. Key factors affecting accuracy include:<br><br>• Image quality and resolution - higher quality images provide more accurate color extraction<br>• Color space complexity - images with subtle gradients may have slight variations in identified colors<br>• Number of extracted colors - the algorithm prioritizes the most significant and dominant colors<br><br>For professional design work requiring exact color matching, the tool provides precise <strong>HEX, RGB, and HSL values</strong> that can be directly applied to design software or code. In most cases, users report that the extracted <strong>color palette</strong> accurately represents the essential colors of the analyzed image."
        },
        {
          question: "What image formats does the Color Extractor support?",
          answer: "Our <strong>Image Color Extractor</strong> supports all major image formats used across the web and design industries:<br><br>• JPEG/JPG - Ideal for photographs and complex images<br>• PNG - Perfect for graphics with transparency<br>• GIF - Supported for simple animations and graphics<br>• WebP - Modern format with excellent compression<br>• SVG - Vector graphics format (colors extracted from rendered view)<br><br>There's a maximum file size limit of 5MB per image to ensure optimal performance. For best results when extracting a <strong>color scheme</strong>, we recommend using clear, high-quality images with distinct color areas. The <strong>color detection</strong> performs optimally on images without excessive noise or compression artifacts."
        },
        {
          question: "How many colors will the tool extract from my image?",
          answer: "The <strong>Image Color Extractor</strong> provides flexible options for color extraction:<br><br>• By default, the tool extracts 5-10 dominant colors that best represent the image's <strong>color palette</strong><br>• You can customize the extraction to pull out as few as 1-2 key colors or as many as 20+ colors<br>• The algorithm intelligently balances between dominant colors (those covering large areas) and accent colors (visually important but less prevalent)<br><br>For design purposes, working with 5-7 extracted colors typically provides an optimal <strong>color scheme</strong> that captures the essence of the image while remaining manageable for application in design projects. When extracting colors for detailed analysis or complex designs, you can increase the number of colors to get a more comprehensive palette."
        },
        {
          question: "Can I save or export the extracted color palettes?",
          answer: "Yes, the <strong>Image Color Extractor</strong> offers multiple options for saving and exporting your extracted <strong>color palettes</strong>:<br><br>• <strong>Copy individual color codes</strong> in HEX, RGB, or HSL format with a single click<br>• <strong>Export the entire palette</strong> in various formats compatible with design software<br>• <strong>Save palettes</strong> to your browser's local storage for future reference<br>• <strong>Generate CSS variables</strong> for immediate use in web development<br><br>For design teams working across multiple projects, the ability to export <strong>color schemes</strong> ensures consistency and efficiency. Many professionals integrate these extracted palettes into their design systems or style guides to maintain visual coherence across all brand touchpoints."
        },
        {
          question: "How can I use the extracted colors in my design software?",
          answer: "The <strong>color values</strong> extracted by our tool can be easily transferred to any design software through several methods:<br><br>1. <strong>Direct copy-paste</strong> of HEX codes (e.g., #FF5733) into color input fields in Adobe Photoshop, Illustrator, Figma, Sketch, etc.<br>2. <strong>RGB values</strong> (e.g., rgb(255, 87, 51)) can be input into the RGB color pickers in design applications<br>3. <strong>HSL format</strong> is particularly useful for adjusting lightness or saturation while maintaining the same hue<br>4. Some design software allows <strong>importing color palettes</strong> in formats our tool can export<br><br>For web designers and developers, the extracted <strong>color scheme</strong> can be directly implemented in CSS, either as individual color properties or as a comprehensive set of CSS custom properties (variables) for a more systematic approach to color management."
        }
      ]
    },
    guide: {
      title: "How to Use the Image Color Extractor: Step-by-Step Guide",
      step1: "<strong>Upload your image</strong>: Click the 'Select Image' button or drag and drop your image onto the upload area. The <strong>color extractor</strong> accepts common image formats including JPEG, PNG, WebP, and GIF. For optimal results, choose images with clear, distinct colors and adequate resolution.",
      step2: "<strong>Adjust extraction settings</strong>: Before processing, you can customize the color extraction parameters. Set the number of colors you'd like to extract (typically 5-10 provides a balanced <strong>color palette</strong>), and choose whether to prioritize dominant colors or include accent colors. These settings help tailor the results to your specific needs.",
      step3: "<strong>Process the image</strong>: Click the 'Extract Colors' button to begin the analysis. The <strong>color detection algorithm</strong> will scan your image, identify key colors, and group similar shades together. This process typically takes just a few seconds, depending on the image size and complexity.",
      step4: "<strong>Review the extracted colors</strong>: After processing, the tool displays the extracted <strong>color scheme</strong> with precise color codes in your preferred format (HEX, RGB, or HSL). Each color is presented as a swatch with its corresponding code for easy reference. The colors are arranged from most dominant to accent colors, giving you a clear visual hierarchy.",
      step5: "<strong>Save and export your palette</strong>: Copy individual <strong>color codes</strong> by clicking on them, or export the entire palette using the export options. You can save the palette to your browser for future reference, download it in various formats compatible with design software, or generate CSS variables for immediate use in web development projects."
    },
    conclusion: "The Image Color Extractor serves as an invaluable tool for designers, marketers, developers, and artists who need to identify, capture, and implement specific colors from visual references. By bridging the gap between visual inspiration and practical application, this tool streamlines the color selection process and ensures consistency across digital and print projects. Whether you're developing brand guidelines, designing a website, or creating digital artwork, the ability to extract precise color palettes from images eliminates guesswork and enhances the quality of your creative output. As design continues to emphasize cohesive color systems, tools that help identify and implement color schemes with accuracy become essential resources for professionals across creative and technical fields."
  }
}