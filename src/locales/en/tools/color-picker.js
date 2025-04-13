export default {
  name: 'Color Picker',
  description: 'Pick, convert and generate color schemes with advanced color tools',
  options: {
    colorSpace: 'Color Space',
    paletteType: 'Palette Type',
    includeAlpha: 'Include Alpha',
    colorNaming: 'Color Naming'
  },
  colorSpaces: {
    rgb: 'RGB',
    hex: 'HEX',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB',
    named: 'Named Colors'
  },
  palettes: {
    monochromatic: 'Monochromatic',
    complementary: 'Complementary',
    analogous: 'Analogous',
    triadic: 'Triadic',
    tetradic: 'Tetradic',
    split: 'Split Complementary'
  },
  actions: {
    pickColor: 'Pick Color',
    randomColor: 'Random Color',
    generatePalette: 'Generate Palette',
    convert: 'Convert',
    copy: 'Copy',
    copyAll: 'Copy All',
    save: 'Save Color',
    clear: 'Clear',
    copyColor: 'Copy Current Color',
    reset: 'Reset'
  },
  formats: {
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL'
  },
  colorSchemes: {
    title: 'Color Schemes',
    complementary: 'Complementary',
    triadic: 'Triadic',
    analogous: 'Analogous',
    monochromatic: 'Monochromatic',
    split: 'Split Complementary',
    double: 'Double Complementary',
    square: 'Square',
    compound: 'Compound'
  },
  colorAdjust: {
    title: 'Color Adjustment',
    hue: 'Hue',
    saturation: 'Saturation',
    lightness: 'Lightness',
    alpha: 'Alpha'
  },
  colorInfo: {
    title: 'Color Information',
    name: 'Color Name',
    format: 'Format',
    contrast: 'Contrast Ratio',
    accessibility: {
      title: 'Accessibility',
      pass: 'Passes WCAG',
      fail: 'Fails WCAG',
      normal: 'Normal Text',
      large: 'Large Text'
    }
  },
  messages: {
    copied: 'Color copied to clipboard',
    copyFailed: 'Failed to copy color',
    invalidColor: 'Invalid color format',
    contrastWarning: 'Poor contrast ratio',
    saved: 'Color saved',
    contrast: 'Contrast ratio: {ratio}',
    accessibility: {
      AAA: 'Excellent contrast (AAA)',
      AA: 'Good contrast (AA)',
      fail: 'Poor contrast - not accessible'
    },
    preview: 'Preview',
    colorValue: 'Color',
  },
  history: {
    title: 'Color History',
    empty: 'No colors in history',
    clear: 'Clear History'
  },
  colorPalette: {
    title: 'Color Palette',
    addToPalette: 'Add to Palette',
    removeFromPalette: 'Remove from Palette',
    exportPalette: 'Export Palette',
    importPalette: 'Import Palette',
    clearPalette: 'Clear Palette'
  },
  article: {
    title: "Advanced Color Picker: Select, Convert, and Create Perfect Color Schemes",
    features: {
      title: "Understanding the Color Picker Tool and Its Capabilities",
      description: "Our <strong>advanced color picker</strong> is a comprehensive online tool designed for precise color selection and manipulation. Unlike basic color selectors, this professional-grade <strong>color selection tool</strong> gives you complete control over the hue, saturation, lightness, and opacity of your colors, allowing for pixel-perfect design work.<br><br>The tool operates across multiple <strong>color spaces</strong> including RGB, HEX, HSL, HSV, and CMYK, automatically converting between formats while preserving exact color values. This eliminates the need for manual conversions or using multiple tools. Additionally, the <strong>color scheme generator</strong> feature uses color theory algorithms to create harmonious combinations that follow established design principles.<br><br>For design professionals and developers, the ability to save colors, create palettes, and export in various formats streamlines workflow and ensures color consistency across projects, making this <strong>web color picker</strong> an essential resource for digital creativity.",
      useCases: {
        title: "Practical Applications for the Color Picker Tool",
        items: [
          "<strong>Web Design and Development</strong>: Select precise <strong>HEX color codes</strong> and RGB values for CSS stylesheets and design elements. Front-end developers can ensure color consistency across frameworks like React, Vue, or Angular by using the same exact color values throughout their codebase, eliminating discrepancies that come from visual approximation.",
          
          "<strong>Graphic Design</strong>: Create cohesive <strong>color palettes</strong> for logos, marketing materials, and brand identity systems. Professional designers can experiment with color variations, examine color relationships, and fine-tune specific shades until they achieve the perfect visual impact for their design concepts.",
          
          "<strong>Digital Painting and Illustration</strong>: Choose and save custom <strong>color swatches</strong> for digital artwork, ensuring consistency across projects. Artists can create custom palettes that reflect their personal style or specific artistic requirements, then export these collections for use in software like Photoshop, Illustrator, or Procreate.",
          
          "<strong>UI/UX Design</strong>: Develop accessible <strong>color schemes</strong> that meet WCAG contrast requirements for better usability. Interface designers can test different color combinations against accessibility standards in real-time, ensuring their designs remain beautiful while being usable by people with visual impairments.",
          
          "<strong>Print Design</strong>: Convert between RGB and <strong>CMYK color values</strong> to ensure color accuracy in printed materials. Print specialists can predict how digital colors will translate to physical media, avoiding the common problem of colors appearing different in print than they do on screen.",
          
          "<strong>Brand Identity Development</strong>: Establish and maintain consistent <strong>brand colors</strong> across all digital and physical touchpoints. Marketing professionals can document exact color specifications for brand guidelines, ensuring that everyone working with the brand uses precisely the same colors across all materials."
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions About the Color Picker",
      items: [
        {
          question: "What's the difference between RGB, HEX, HSL, and other color formats?",
          answer: "Different <strong>color formats</strong> represent the same colors using different numerical systems and approaches:<br><br>• <strong>HEX codes</strong> (e.g., #FF5733) are six-digit hexadecimal values widely used in web design, representing red, green, and blue channels in a compact format<br><br>• <strong>RGB values</strong> (e.g., rgb(255, 87, 51)) specify exact amounts of red, green, and blue light (0-255), making them intuitive for digital design<br><br>• <strong>HSL</strong> (hue, saturation, lightness) is more aligned with how humans perceive color, making it easier to predict color relationships and make adjustments<br><br>• <strong>CMYK</strong> uses cyan, magenta, yellow, and black percentages, specifically designed for print production<br><br>Our <strong>color picker tool</strong> handles automatic conversion between these formats, allowing you to work in whichever system is most appropriate for your current project."
        },
        {
          question: "How do I create a harmonious color scheme for my project?",
          answer: "Creating harmonious <strong>color combinations</strong> is simplified with our tool through several approaches:<br><br>1. Use the <strong>color scheme generator</strong> feature to automatically create complementary, analogous, triadic, or monochromatic palettes based on your primary color<br><br>2. Apply established color theory principles through preset options like complementary (opposite colors on the wheel) or analogous (colors adjacent on the wheel)<br><br>3. Fine-tune schemes by adjusting saturation and lightness while maintaining the same hues to create varied but cohesive palettes<br><br>4. Test your <strong>color harmony</strong> in real-time, seeing how different colors interact before finalizing your selection<br><br>The tool's visual preview makes it easy to evaluate how colors work together, allowing even those without formal design training to create professional-looking <strong>color schemes</strong>."
        },
        {
          question: "Can I save my colors and palettes for later use?",
          answer: "Yes, our <strong>color picker</strong> offers multiple options for preserving your color work:<br><br>• <strong>Color history</strong> automatically tracks recently used colors for quick access<br>• Create and <strong>save custom palettes</strong> with descriptive names for different projects or clients<br>• <strong>Export color schemes</strong> in various formats compatible with design software (Adobe ASE, GIMP, etc.)<br>• Generate <strong>CSS color variables</strong> that can be directly copied into your stylesheets<br>• Share palette links with team members for collaborative design work<br><br>These saving and sharing features make our <strong>color selection tool</strong> valuable for maintaining consistency across complex projects and teams, ensuring that everyone uses the exact same <strong>color codes</strong> throughout the design and development process."
        },
        {
          question: "How do I ensure my selected colors are accessible for all users?",
          answer: "Our <strong>color picker</strong> includes accessibility features to help you create inclusive designs:<br><br>• <strong>Contrast ratio calculator</strong> that automatically evaluates text/background combinations against WCAG guidelines<br>• Visual indicators showing whether color combinations pass AA or AAA accessibility standards<br>• Suggestions for improving <strong>color contrast</strong> while maintaining your design aesthetic<br>• Simulation of different types of color vision deficiencies (protanopia, deuteranopia, etc.)<br><br>By using these features, you can ensure your <strong>color schemes</strong> not only look appealing but also provide adequate contrast for users with visual impairments. The tool helps you balance aesthetic preferences with accessibility requirements, creating designs that work for all users."
        },
        {
          question: "What's the best way to use color picker results in my design software?",
          answer: "Our <strong>color picker tool</strong> integrates seamlessly with popular design software through several methods:<br><br>1. <strong>Copy color codes</strong> directly in your preferred format (HEX, RGB, HSL) with a single click<br>2. Export <strong>color palettes</strong> in Adobe Swatch Exchange (.ase) format for direct import into Creative Cloud applications<br>3. Generate CSS variables or SCSS/LESS mixins for web development frameworks<br>4. Take screenshot references of complete <strong>color schemes</strong> with all values labeled<br><br>For optimal workflow, we recommend creating a complete palette in our tool first, then exporting it in the format most appropriate for your design software or coding environment. This approach ensures consistent <strong>color values</strong> throughout your project while minimizing manual data entry errors."
        }
      ]
    },
    guide: {
      title: "How to Use the Advanced Color Picker: Step-by-Step Guide",
      step1: "<strong>Select your base color</strong>: Start by choosing a color using one of several methods. You can click and drag in the large color field to adjust saturation and lightness, use the hue slider to change the base color, enter specific <strong>color codes</strong> in your preferred format (HEX, RGB, HSL), or select from your recently used colors in the history section. This flexibility allows you to start with an exact color specification or explore visually.",
      step2: "<strong>Fine-tune your selection</strong>: After selecting a base color, use the precision controls to make adjustments. The <strong>color picker's</strong> sliders allow you to modify individual components like hue (0-360°), saturation (0-100%), lightness (0-100%), and opacity (0-100%). These granular controls ensure you can achieve exactly the right shade, making subtle adjustments that might be difficult in other tools. Watch the preview area update in real-time as you make these changes.",
      step3: "<strong>Generate color schemes</strong>: Click on the color schemes section to automatically create harmonious <strong>color combinations</strong> based on your selected color. Choose from different scheme types including complementary (opposite on the color wheel), analogous (adjacent colors), triadic (three evenly spaced colors), or monochromatic (variations of the same hue). These algorithmically generated schemes follow color theory principles to ensure visually pleasing results.",
      step4: "<strong>Convert between formats</strong>: Toggle between different <strong>color formats</strong> using the format buttons. Your color will automatically convert between HEX (#FF5733), RGB (rgb(255, 87, 51)), HSL (hsl(14, 100%, 60%)), and more, while maintaining the exact same visual color. This makes it easy to get the code you need for your specific application, whether you're working on web design, digital art, or print materials.",
      step5: "<strong>Save and export your colors</strong>: Once you've perfected your color or palette, save it for future use. Click the copy button to copy the current <strong>color code</strong> to your clipboard, add it to your saved palette, or export the entire color scheme in various formats. For web developers, you can generate CSS variables or color sets that can be directly implemented in your stylesheets, ensuring consistent <strong>color values</strong> throughout your project."
    },
    conclusion: "The Advanced Color Picker represents an essential tool in the modern designer's and developer's toolkit, bridging the gap between artistic color selection and technical implementation. By providing precise control over color values, automatic format conversion, and intelligent scheme generation, it eliminates much of the guesswork and manual calculation previously required in digital color work. Whether you're creating a brand identity system, designing a website interface, or developing digital artwork, the ability to select, manipulate, and organize colors with scientific precision while still adhering to aesthetic principles gives you a significant advantage. As design continues to emphasize both visual appeal and technical consistency, tools that help translate creative vision into exact specifications become increasingly valuable across all creative and technical disciplines."
  }
} 