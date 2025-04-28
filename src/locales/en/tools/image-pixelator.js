export default {
  name: 'Image Pixelizer',
  description: 'Convert images into pixel art with customizable resolution and effects',
  upload: {
    title: 'Upload Image',
    dropzone: 'Drag and drop your image here or click to browse',
    maxSize: 'Maximum file size: 10MB',
    supportedFormats: 'Supported formats: JPG, PNG, WEBP, GIF'
  },
  settings: {
    title: 'Pixelization Settings',
    pixelSize: 'Pixel Size',
    pixelShape: 'Pixel Shape',
    shapes: {
      square: 'Square',
      rounded: 'Rounded',
      circle: 'Circle',
      diamond: 'Diamond',
      custom: 'Custom'
    },
    resolution: 'Resolution',
    width: 'Width',
    height: 'Height',
    preserveAspect: 'Preserve Aspect Ratio',
    colorReduction: 'Color Reduction',
    colors: 'Number of Colors',
    dithering: 'Dithering',
    ditheringTypes: {
      none: 'None',
      floydSteinberg: 'Floyd-Steinberg',
      atkinson: 'Atkinson',
      ordered: 'Ordered',
      bayer: 'Bayer'
    },
    palette: 'Color Palette',
    palettes: {
      auto: 'Auto',
      grayscale: 'Grayscale',
      gameboy: 'Game Boy',
      nes: 'NES',
      cpc: 'CPC',
      c64: 'C64',
      custom: 'Custom',
      normal: 'Normal',
      retro: 'Retro',
      sepia: 'Sepia',
      bright: 'Bright',
      cool: 'Cool',
      warm: 'Warm',
      bw: 'Black & White',
      invert: 'Inverted'
    },
    customPalette: 'Custom Palette Colors',
    small: 'Small (Fine)',
    large: 'Large (Coarse)',
    low: 'Low (Retro)',
    high: 'High (True Color)'
  },
  effects: {
    title: 'Effects',
    brightness: 'Brightness',
    contrast: 'Contrast',
    saturation: 'Saturation',
    hue: 'Hue',
    outline: 'Outline',
    outlineColor: 'Outline Color',
    noise: 'Noise',
    posterize: 'Posterize',
    invert: 'Invert Colors',
    grayscale: 'Grayscale',
    sepia: 'Sepia',
    vignette: 'Vignette'
  },
  animation: {
    title: 'Animation Settings',
    animated: 'Process as Animation',
    frameRate: 'Frame Rate',
    optimizeFrames: 'Optimize Frames',
    looping: 'Looping',
    loopCount: 'Loop Count'
  },
  output: {
    title: 'Output',
    preview: 'Preview',
    original: 'Original',
    pixelated: 'Pixelated',
    comparison: 'Comparison',
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    gridOverlay: 'Grid Overlay',
    downloadAs: 'Download As',
    png: 'PNG',
    jpg: 'JPG',
    gif: 'GIF',
    webp: 'WebP',
    spritesheet: 'Spritesheet',
    quality: 'Quality',
    scale: 'Scale',
    loading: 'Loading...',
    noImage: 'Please select an image',
    processing: 'Processing...'
  },
  presets: {
    title: 'Presets',
    save: 'Save Current Settings',
    load: 'Load Preset',
    delete: 'Delete Preset',
    presetName: 'Preset Name',
    defaults: {
      lowRes: 'Low Resolution',
      highContrast: 'High Contrast',
      retro: 'Retro',
      minimal: 'Minimal',
      sketch: 'Sketch',
      blueprint: 'Blueprint'
    }
  },
  actions: {
    pixelate: 'Pixelize Image',
    reset: 'Reset Settings',
    applyChanges: 'Apply Changes',
    undoChanges: 'Undo Changes',
    downloadImage: 'Download Image',
    selectImage: 'Select Image'
  },
  messages: {
    processing: 'Processing the image...',
    success: 'Image pixelization successful',
    downloading: 'Preparing for download...',
    presetSaved: 'Preset saved successfully',
    presetLoaded: 'Preset loaded',
    presetDeleted: 'Preset deleted',
    error: 'Error: {error}',
    fileSize: 'File Size',
    pixels: 'Pixels',
    imageSize: 'Image Dimensions',
    downloadSuccess: 'Image downloaded successfully',
    downloadFailed: 'Download failed',
    resetSuccess: 'Settings have been reset',
    fileName: 'File Name'
  },
  article: {
    title: "Complete Guide to Image Pixelation - Create Stunning Pixel Art from Photos",
    intro: {
      title: "What is an Image Pixelator and How Does It Transform Your Photos",
      p1: "<b>Online image pixelation tools</b> are specialized digital utilities that transform standard photographs into stylized pixel art by reducing image resolution and color depth in a controlled manner. Our free image pixelizer provides a comprehensive suite of customization options that allow users to convert any photo into authentic pixel art without requiring specialized software installation or technical expertise. Through careful manipulation of pixel size, shape selection, and color palette adjustments, the pixelator creates visually striking transformations that embrace the distinctive aesthetic of pixel-based imagery.",
      p2: "<b>The process of pixelating photos</b> has evolved significantly from simple downsampling to a sophisticated art form with numerous creative applications. Our browser-based pixel art generator bridges the gap between professional design capabilities and user-friendly functionality, enabling photographers, digital artists, game developers, and casual users to experiment with the distinctive pixelated look. The tool offers extensive customization options including variable pixel sizes, different pixel shapes (square, circle, diamond), color reduction controls, and special effects that enhance the final pixelated appearance.",
      p3: "<b>Converting regular images to pixel art</b> taps into the growing popularity of retro aesthetics while opening up practical applications across various creative fields. Whether you're designing game assets, creating nostalgic social media content, or simply exploring a new artistic medium, our pixelator provides an intuitive platform for transforming ordinary photographs into compelling pixel compositions. This comprehensive guide will walk you through everything you need to know about creating captivating pixel art using our innovative online tool."
    },
    useCases: {
      title: "Practical Applications of Image Pixelation",
      case1: "<b>Game Development and Pixel Art Creation</b>: Independent game developers utilize image pixelation tools to rapidly transform reference photographs into game-ready sprite assets. Character designers convert concept art or reference images into pixel-based character sprites with precise control over pixel size and color palette limitations that match their game engine requirements. Background artists create consistent environmental tiles by pixelating photographic textures and then refining the results. These pixelation workflows significantly accelerate the sprite creation process for retro-style games, mobile applications, and indie projects where authentic pixel aesthetics are desired but manual pixel-by-pixel creation would be prohibitively time-consuming.",
      case2: "<b>Social Media Content and Digital Marketing</b>: Creative professionals leverage pixelated imagery to develop distinctive visual content that stands out in crowded social feeds. Brand managers create recognizable pixelated versions of product images or logos that tap into retro gaming nostalgia while maintaining brand recognition. Content creators develop \"before and after\" pixelation transformations that drive engagement through the striking visual contrast. Marketing campaigns utilize the distinctive pixel aesthetic to create memorable visual hooks for products targeting millennials and Gen Z audiences who have strong associations with pixel art through gaming culture. These applications demonstrate how pixelation transcends simple visual effect to become a strategic tool for attention-grabbing digital content.",
      case3: "<b>Educational Projects and Teaching Visual Arts</b>: Educators employ pixelation tools to teach fundamental concepts about digital imaging in accessible, engaging ways. Art teachers use the process of pixelation to demonstrate principles of abstraction, color theory, and visual simplification in a format that resonates with digitally-native students. Computer science instructors utilize pixelated images to illustrate concepts like resolution, color depth, and image compression algorithms through visual examples rather than abstract explanations. Student projects involving pixelation serve as excellent introductions to digital art creation, encouraging creative expression while building understanding of the relationship between technical parameters and artistic outcomes in digital media.",
      case4: "<b>Privacy Protection and Identity Concealment</b>: Professional and personal users apply strategic pixelation to protect sensitive information or conceal identities in shared images. Photographers pixelate specific regions of images to protect the privacy of subjects in street photography or documentary work. Business users obscure confidential information in screenshots or presentations through targeted pixelation before sharing online. Parents pixelate children's faces in photographs intended for public sharing on social media platforms to protect their privacy while still sharing family moments. These privacy-focused applications demonstrate the practical utility of pixelation beyond purely aesthetic purposes, offering a straightforward solution for balancing visual communication with privacy concerns.",
      case5: "<b>Design and Artistic Experimentation</b>: Professional and amateur visual artists explore pixelation as a distinct creative medium with unique expressive possibilities. Digital artists create deliberate pixelation effects to evoke nostalgia, technological themes, or commentary on digital culture in their work. Designers apply pixelated elements to contemporary designs for websites, apparel, and physical products to create distinctive visual identities that stand out from photorealistic trends. Experimental artists combine pixelation with other techniques like glitch effects or color manipulation to develop new aesthetic directions that reflect on our relationship with digital media. These creative applications show how pixelation has evolved from a technical limitation into a deliberate stylistic choice with rich expressive potential across multiple artistic contexts."
    },
    tutorial: {
      title: "How to Create Pixel Art with Our Image Pixelator",
      intro: "Creating stunning pixel art from your photos is straightforward with our user-friendly tool. Follow these simple steps to transform your images into eye-catching pixelated compositions:",
      step1: {
        title: "Step 1: Upload Your Image",
        description: "Begin by clicking the <b>\"Select Image\"</b> button at the top of the tool interface. Choose any image file from your device, with support for common formats including JPG, PNG, WEBP, and GIF. For optimal results, select images with clear subjects and good contrast, as these characteristics translate well to the simplified pixel format. After uploading, your original image will appear in the preview panel on the left side of the interface. This will serve as your reference point throughout the pixelation process, allowing you to compare your original image with the pixelated result as you make adjustments."
      },
      step2: {
        title: "Step 2: Adjust Pixel Size and Shape",
        description: "Now it's time to set the fundamental parameters for your pixel art. Use the <b>\"Pixel Size\"</b> slider to control the level of detail in your creation. Moving the slider to the right increases pixel size, resulting in a more blocky, abstract look with fewer details. Moving it to the left decreases pixel size, preserving more details from the original image. Next, select your preferred <b>pixel shape</b> by clicking one of the shape options: Square (the classic pixel art look), Circle (for a softer, dotted appearance), or Diamond (for a distinctive geometric effect). These shape options create dramatically different aesthetic results while maintaining the essence of pixelation. Experiment with different combinations to find the style that best suits your artistic vision."
      },
      step3: {
        title: "Step 3: Fine-tune Color Settings and Effects",
        description: "With the basic structure of your pixel art established, now enhance its visual character through color adjustments. Use the <b>\"Color Reduction\"</b> slider to control the number of distinct colors in your pixelated image. Lower settings create a more retro look with limited color palettes, while higher settings preserve more of the original color gradients. Next, select a <b>color palette</b> style from options like Normal, Retro, Sepia, or Black & White to apply different color treatments to your pixel art. For additional artistic effects, adjust the <b>Edge Enhancement</b> slider to make pixel boundaries more prominent, or add a touch of <b>Noise</b> to create texture and character. Each adjustment updates in real-time, allowing you to experiment until you achieve your desired aesthetic."
      },
      step4: {
        title: "Step 4: Generate and Download Your Pixel Art",
        description: "Once you're satisfied with your settings, observe the pixelated result in the preview panel on the right side of the screen. Take time to compare it with your original image and make any final adjustments to achieve your desired look. When you're happy with the result, click the <b>\"Download Image\"</b> button to save your pixel art creation to your device. The downloaded image will preserve all your customizations in high quality, ready for use in games, social media, artwork, or any other application. If you'd like to try different pixelation styles with the same image, simply adjust the settings and the preview will update instantly, allowing for endless creative experimentation."
      }
    },
    pixelArtStyles: {
      title: "Understanding Different Pixel Art Styles and Techniques",
      intro: "Pixel art encompasses various stylistic approaches, each with distinct visual characteristics and technical requirements:",
      retro: {
        title: "Classic Retro Pixel Art",
        description: "<b>Classic retro pixel art</b> recreates the distinctive visual limitations of early computer and video game systems through careful adherence to technical constraints. This style typically features extremely limited color palettes (often 16-64 colors), deliberate use of pixel-perfect edges without anti-aliasing, and careful manual placement of individual pixels to create recognizable forms with minimal detail. When using our pixelator for retro-style results, select smaller color step values (8-32 colors) and apply the 'Retro' color palette option for authenticity. These settings help recreate the distinctive aesthetic of systems like the Nintendo Entertainment System, Commodore 64, or early PC graphics. The appeal of classic pixel art lies in its ability to convey recognizable imagery within strict limitations, requiring viewers to mentally \"fill in\" details and creating a distinctive nostalgic charm that resonates with audiences who grew up with early digital gaming."
      },
      modern: {
        title: "Modern High-Density Pixel Art",
        description: "<b>Modern high-density pixel art</b> maintains the pixel-based approach but embraces greater technical capabilities, allowing for more detailed compositions with expanded color palettes. Unlike classic pixel art's strict limitations, modern approaches often incorporate techniques like anti-aliasing, dithering, and subtle gradients to create smoother transitions between colors and more detailed illustrations. To achieve this style with our pixelator, select smaller pixel sizes combined with higher color depth settings (64-256 colors) and the 'Normal' or 'Bright' color palette. This combination preserves more detail from your original image while maintaining the distinctive pixelated structure. Modern pixel art finds applications in contemporary indie games, digital illustrations, and web design, offering a balance between the nostalgic appeal of visible pixels and the detailed rendering capabilities of current technology. This approach appeals to both pixel art purists and broader audiences looking for visually distinctive digital aesthetics."
      },
      isometric: {
        title: "Isometric and Specialized Pixel Styles",
        description: "<b>Isometric pixel art</b> represents a specialized approach that combines pixel-based imagery with three-dimensional spatial representation through an isometric projection (typically at a 2:1 ratio). This technique creates the illusion of depth while maintaining the characteristic pixel aesthetic. While our pixelator doesn't automatically create isometric projections, you can prepare isometric layouts to pixelate or apply the Diamond pixel shape option to enhance the angular aesthetic common in isometric art. Beyond isometric styles, experimental pixel art forms include techniques like pixel dithering (creating texture through patterns of alternating pixels), limited palette challenges (creating complex scenes with extremely restricted colors), and glitch aesthetics (deliberately incorporating digital artifacts). By combining various settings in our pixelator—particularly through creative use of the Edge Enhancement and Noise options—you can begin to explore these specialized pixel art directions and develop your own unique approach to the medium."
      }
    },
    faq: {
      title: "Frequently Asked Questions About Image Pixelation",
      q1: "What's the difference between pixelation and simply reducing image resolution?",
      a1: "<b>Image pixelation is a sophisticated process</b> that goes well beyond basic resolution reduction. While reducing resolution simply makes an image smaller, proper pixelation involves deliberate artistic choices about how that reduction occurs: Standard resolution reduction typically applies automatic interpolation and anti-aliasing to create smaller images that attempt to preserve the original appearance, often resulting in blurry details. In contrast, true pixel art creation—as facilitated by our pixelator tool—involves controlled block-based sampling, precise color quantization to reduce color depth, and careful consideration of pixel shapes and arrangements. Our tool maintains crisp pixel boundaries without blurring and offers artistic control over color palette limitations, creating authentic pixel art rather than simply smaller images. Additionally, professional pixelation incorporates stylistic considerations like consistent pixel size across the entire image, careful handling of pixel edges, and optional effects like dithering or noise that enhance the distinctive aesthetic of pixel art. These creative decisions transform pixelation from a technical reduction into an artistic interpretation of the original image.",
      
      q2: "How do I choose the optimal pixel size for my specific image?",
      a2: "<b>Selecting the ideal pixel size</b> depends on several factors including your image content, intended use, and preferred aesthetic style. For recognizable portraits or logos where maintaining identity is crucial, start with smaller pixel sizes (4-10px) to preserve more details from the original image. For abstract or artistic interpretations where impressionistic representation is sufficient, larger pixel sizes (12-20px) create bold, striking compositions with greater abstraction. Consider your output medium: smaller pixel sizes work better for small display contexts like avatars or icons, while larger pixel sizes create more impact in larger display formats like posters or social media headers. Different subject matter also responds differently to pixelation—landscapes with broad color areas often work well with larger pixels, while detailed subjects like faces generally benefit from smaller pixels to maintain recognizable features. The best approach is experimenting with our tool's real-time preview: start at a medium setting (around 8-12px) and adjust up or down while observing how different elements in your specific image respond to various pixel sizes.",
      
      q3: "Can pixelated images be properly printed, or are they only suitable for digital display?",
      a3: "<b>Pixelated images can absolutely be printed effectively</b>, but require specific considerations to ensure optimal results. When preparing pixelated images for print: Choose the right resolution setting when downloading—our tool offers high-resolution export options specifically designed for print quality. For most printing services, aim for 300 DPI (dots per inch) output to ensure crisp, clear pixel boundaries. Consider your viewing distance—larger prints viewed from greater distances can use larger pixel sizes while maintaining the desired visual effect. When determining print size, calculate based on your pixel dimensions to ensure individual pixels appear as intended—a 32x32 pixel art piece printed at 1 inch square will show crisp, visible pixels, while the same image printed at 10 inches square might appear blocky rather than intentionally pixelated. Many professional artists successfully exhibit and sell printed pixel art by carefully matching pixel dimensions to print size and resolution. For best results, discuss your specific requirements with your print service, specifying that you want precise reproduction of the pixelated aesthetic without additional smoothing or interpolation that might undermine the distinctive pixel art style.",
      
      q4: "What pixel shape works best for different types of images and artistic styles?",
      a4: "<b>Different pixel shapes create distinctive aesthetic effects</b> that complement particular subject matter and artistic intentions. Square pixels—the classic pixel art shape—provide the most authentic retro gaming aesthetic and work exceptionally well for architectural subjects, technical illustrations, and any image where you want to emphasize the digital, constructed nature of pixel art. Square pixels create strong horizontal and vertical lines that provide structure and clarity. Circular pixels offer a softer, more organic feel that often works beautifully for portraits, natural scenes, and subjects with flowing forms. The rounded edges create a distinct dotted appearance reminiscent of pointillism or halftone printing techniques, making this shape excellent for artistic interpretations where you want to acknowledge the pixel structure while softening the typically rigid pixel art aesthetic. Diamond pixels create dynamic diagonal emphasis and visual energy, making them particularly effective for action scenes, abstract compositions, or any subject matter where you want to introduce a sense of movement or energy. The diamond shape also creates interesting interlocking patterns that can enhance textile designs or pattern-based compositions. We recommend experimenting with all three shapes on your specific image—the subject matter, color distribution, and your artistic intention will guide you toward the most effective choice.",
      
      q5: "How can I create authentic retro gaming aesthetics with the pixelator tool?",
      a5: "<b>Creating authentic retro gaming visuals</b> requires attention to the specific technical limitations that defined different gaming eras. To recreate classic 8-bit aesthetics (like NES or Commodore 64): Set the color reduction to extremely limited palettes (16-32 colors maximum) to match the hardware constraints of early systems. Apply the 'Retro' color palette option which emphasizes the distinctive color ranges typical of these platforms. Choose square pixels at medium to large sizes (10-16px) to recreate the chunky resolution limitations of early displays. For 16-bit era aesthetics (SNES, Sega Genesis): Increase the color palette slightly (32-64 colors) while maintaining deliberate limitations. Maintain square pixels but reduce their size slightly (6-10px) to reflect the higher resolution capabilities of these systems. Consider adding minimal noise (5-10%) to simulate the subtle texture often present in 16-bit graphics. To enhance authenticity, pair these technical settings with compositional choices typical of the era—like character sprites with distinctive silhouettes, background elements arranged in tile-like patterns, and interface elements that mimic the HUD (heads-up display) conventions of retro games. These combined approaches create nostalgia-triggering visuals that feel authentically connected to gaming history rather than simply low-resolution modern images."
    },
    relatedTools: {
      title: "Explore Related Image Editing Tools",
      description: "Enhance your digital creativity with these complementary tools:",
      tool1: {
        name: "Image Filters",
        url: "https://www.ufreetools.com/tool/image-filters",
        description: "Apply artistic filters and effects to your images before or after pixelation for unique combined results."
      },
      tool2: {
        name: "Image Color Extractor",
        url: "https://www.ufreetools.com/tool/image-color-extractor",
        description: "Analyze and extract color palettes from images to create custom color schemes for your pixel art."
      },
      tool3: {
        name: "Image Mosaic Generator",
        url: "https://www.ufreetools.com/tool/image-mosaic-generator",
        description: "Create image mosaics where many small images combine to form a larger picture, another form of visual transformation."
      },
      tool4: {
        name: "Image Batch Resizer",
        url: "https://www.ufreetools.com/tool/image-batch-resizer",
        description: "Batch resize multiple images at once to save time and maintain consistent dimensions."
      }
    },
    resources: {
      title: "Authoritative Resources on Pixel Art and Digital Imaging",
      resource1: {
        name: "Pixel Art Academy - Comprehensive Guide to Pixel Art Techniques",
        url: "https://pixelart.academy/",
        description: "A detailed educational resource offering in-depth tutorials on pixel art fundamentals, advanced techniques, and historical context."
      },
      resource2: {
        name: "Lospec - Pixel Art Palette Database and Tools",
        url: "https://lospec.com/palette-list",
        description: "An extensive collection of historically accurate and artistically crafted color palettes specifically designed for pixel art creation."
      },
      resource3: {
        name: "Journal of Computer Graphics Techniques - Pixel Art Filtering",
        url: "http://jcgt.org/published/0008/03/01/",
        description: "Academic research on algorithms and techniques for pixel art scaling and transformation, exploring the technical foundations of pixel art aesthetics."
      }
    }
  }
}