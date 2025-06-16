export default {
  name: 'Gradient Color Generator',
  description: 'Create and customize beautiful CSS gradients with real-time preview and copy the code to your project',

  gradientTypes: {
    title: 'Gradient Type',
    linear: 'Linear Gradient',
    radial: 'Radial Gradient',
    conic: 'Conic Gradient'
  },

  controls: {
    title: 'Color Controls',
    addColor: 'Add Color',
    color: 'Color',
    position: 'Position (%)',
    delete: 'Delete Color',
    angle: 'Angle',
    degrees: 'Degrees',
    shape: 'Shape',
    circle: 'Circle',
    ellipse: 'Ellipse',
    positionX: 'Position X (%)',
    positionY: 'Position Y (%)',
    size: 'Size',
    closestSide: 'Closest Side',
    closestCorner: 'Closest Corner',
    farthestSide: 'Farthest Side',
    farthestCorner: 'Farthest Corner',
    fromAngle: 'Starting Angle'
  },

  output: {
    title: 'CSS Code',
    copyCode: 'Copy Code',
    preview: 'Preview Area',
    copied: 'CSS Code Copied to Clipboard!',
    download: 'Download PNG'
  },

  presets: {
    title: 'Gradient Presets',
    apply: 'Apply Preset',
    sunnyMorning: 'Sunny Morning',
    winterNeva: 'Winter in Neva',
    rareWind: 'Rare Wind',
    deepBlue: 'Deep Blue',
    perfect: 'Perfect White',
    cloudyKnoxville: 'Cloudy Knoxville',
    greenBeach: 'Green Beach',
    plumBath: 'Plum Bath',
    everlasting: 'Everlasting Sky'
  },

  accessibility: {
    colorPicker: 'Color Picker',
    deleteSwatch: 'Delete Color Stop',
    dragToReposition: 'Drag to Reposition Color Stop'
  },

  actions: {
    reset: 'Reset',
    generateCSS: 'Generate CSS',
    clickToCopy: 'Click to Copy Code',
    completeEdit: 'Complete Editing'
  },

  messages: {
    copied: 'CSS Code Copied to Clipboard!',
    noColors: 'Add at least two colors to create a gradient',
    maxColors: 'Maximum number of color stops reached (10)',
    useKeyboard: 'Use the Delete key to delete the selected color stop',
    invalidHex: 'Please enter a valid hexadecimal color code',
    downloadError: 'Failed to download PNG, please try again later',
    preview: 'Preview'
  },

  anglePresets: {
    top: 'Top',
    topRight: 'Top Right',
    right: 'Right',
    bottomRight: 'Bottom Right',
    bottom: 'Bottom',
    bottomLeft: 'Bottom Left',
    left: 'Left',
    topLeft: 'Top Left'
  },

  radialShapes: {
    circle: 'Circle',
    ellipse: 'Ellipse'
  },

  radialSizes: {
    farthestCorner: 'Farthest corne',
    closestCorner: 'Closest corner',
    farthestSide: 'Farthest side',
    closestSide: 'Closest side',
  },

  article: {
    title: "CSS Gradient Generator: Ultimate Guide to Beautiful Color Transitions",
    features: {
      title: "Understanding CSS Gradients and Their Powers",
      description: "The <strong>CSS Gradient Generator</strong> is a powerful visual tool that allows you to create smooth color transitions, known as <strong>gradients</strong>, without needing to write complex CSS code manually. This tool supports three core gradient types: <strong>linear gradients</strong> (colors flowing in a straight line), <strong>radial gradients</strong> (colors radiating from a central point), and <strong>conic gradients</strong> (colors rotating around a center point).<br><br>With an intuitive interface, you can easily add multiple <strong>color stops</strong>, adjust their positions, modify gradient angles or shapes, and instantly see your creation. The tool automatically generates the corresponding CSS code that you can copy directly into your web projects. Additionally, you can export your gradient as a PNG image for use in graphic design applications or download it to share with others. Whether you're a professional developer or a design enthusiast, this <strong>gradient maker</strong> simplifies the process of creating visually appealing color transitions for your digital projects.",
      useCases: {
        title: "Practical Applications for CSS Gradients",
        items: [
          "<strong>Website Backgrounds</strong>: Create visually engaging full-page backgrounds that transition between complementary colors, adding depth and dimension to your website without using resource-heavy images. These <strong>gradient backgrounds</strong> load faster than images while offering a modern, sleek appearance.",
          "<strong>Button and UI Element Styling</strong>: Design eye-catching call-to-action buttons with <strong>gradient effects</strong> that subtly direct user attention and increase conversion rates. The dimensional quality of gradients can make UI elements appear more tactile and interactive.",
          "<strong>Section Dividers and Headers</strong>: Generate striking visual separators between content sections using <strong>linear gradients</strong>, helping to organize information and guide the user's eye through your page layout while maintaining visual cohesion.",
          "<strong>Graphic Design Elements</strong>: Export your gradients as PNG images to use in digital marketing materials, social media posts, or presentation slides, creating a consistent visual identity across different platforms with custom <strong>color blends</strong>.",
          "<strong>Data Visualization</strong>: Apply <strong>color transitions</strong> to charts, graphs, and maps to represent data ranges more intuitively, helping viewers instantly understand value distributions through color intensity or hue progression.",
          "<strong>Modern Loading Animations</strong>: Design animated gradients for loading screens or progress indicators that shift colors as users wait, creating a more engaging experience during necessary loading times with <strong>gradient animations</strong>."
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about CSS Gradients",
      items: [
        {
          question: "What's the difference between linear, radial, and conic gradients?",
          answer: "These three gradient types create distinctly different visual effects. Linear gradients transition colors along a straight line in a specified direction (defined by degrees or keywords like 'to top' or 'to bottom right'). They're perfect for simple backgrounds, buttons, and horizontal or vertical color transitions. Radial gradients start from a central point and radiate outward in a circular or elliptical pattern, creating spotlight or fade effects ideal for highlighting content or creating depth. Conic gradients sweep colors around a center point in a circular motion (like a color wheel), making them excellent for pie charts, color pickers, or creating sunburst effects. Our tool supports all three types with visual controls to help you achieve exactly the look you want for your project."
        },
        {
          question: "How can I make my gradients look smooth without visible color banding?",
          answer: "To create smooth gradients without visible color banding (the jarring steps between colors), try these techniques: 1) Add more color stops between your main colors to create a more gradual transition. Our tool lets you add up to 10 color stops for precisely this purpose. 2) Keep adjacent colors in your gradient relatively close in hue and brightness, as dramatic shifts are more likely to show banding. 3) Add a subtle noise texture overlay (not directly in this tool, but in your CSS) with low opacity to break up potential banding. 4) Consider using slight transparency in your gradient colors by using rgba() values. 5) For very large gradient areas, try increasing the length of the gradient relative to its display size. These techniques help create professional-looking color transitions without the distracting banding effect that can make gradients look unprofessional."
        },
        {
          question: "Will these CSS gradients work in all browsers?",
          answer: "The basic linear and radial gradients generated by our tool have excellent browser compatibility and work reliably in all modern browsers (Chrome, Firefox, Safari, Edge) without prefixes. Conic gradients have slightly more limited support but still work in all major current browser versions. For legacy browsers (particularly older versions of Internet Explorer), you might need to add vendor prefixes or fallbacks, though these browsers represent a tiny percentage of users today. Our tool generates standard CSS that follows the W3C specifications, ensuring the widest possible compatibility. For mission-critical applications targeting older browsers, you can easily modify the generated code to add prefixes or create simple fallback backgrounds for browsers that don't support certain gradient types."
        },
        {
          question: "How can I use the generated gradient code in my project?",
          answer: "Using the gradient code from our tool is straightforward: 1) Create and customize your gradient using the visual controls. 2) Click the 'Copy Code' button to copy the generated CSS to your clipboard. 3) Paste the code into your CSS file or style section of your HTML document. The code can be applied to any CSS property that accepts image values, most commonly the 'background' property. You can also modify the copied code to add additional properties, change the selector, or combine it with other CSS rules. If you need the gradient as an image instead, use our 'Download PNG' feature to save it as a file that can be imported into any application that accepts PNG images."
        },
        {
          question: "Can I create transparent gradients with this tool?",
          answer: "Yes, you can create transparent gradients by using the hex color input field to manually enter colors with transparency. While our color picker doesn't directly support alpha channels, you can type rgba() values (like rgba(255,0,0,0.5) for semi-transparent red) or 8-digit hex codes (like #FF000080) in the color input field after selecting a color stop. This allows you to create gradients that fade to transparency, which is particularly useful for overlays, shadows, or elements that need to partially show content beneath them. These transparent gradients work perfectly for creating subtle overlay effects, vignettes around images, or fading content areas into the background. When using transparent gradients over content, remember to consider contrast and readability of any text that might appear within or beneath the gradient area."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Using the CSS Gradient Generator",
      steps: [
        "<strong>Select a gradient type</strong>: Start by choosing between Linear, Radial, or Conic gradient types from the top section of the tool. Each type creates a different effect and is suitable for different design needs. Linear gradients are the most common for backgrounds, while radial and conic gradients offer more specialized effects.",
        "<strong>Customize color stops</strong>: The gradient is created using color stops that define the transition points. Click on an existing color stop marker in the color bar to select it, then use the color picker to change its color. You can also adjust the position by dragging the marker or using the position slider below the color picker.",
        "<strong>Add more color stops</strong>: Click the 'Add Color' button to create additional color transitions in your gradient. Up to 10 color stops are supported, allowing for complex multi-color effects. To remove a color stop, select it and click the 'Delete' button (but remember you need at least two colors to form a gradient).",
        "<strong>Adjust the gradient direction or shape</strong>: For linear gradients, use the angle control to set the direction of the color flow (0-360 degrees). For radial gradients, select the shape (circle or ellipse) and adjust the center position with the X and Y controls. For conic gradients, set the starting angle and center position to precisely control the effect.",
        "<strong>Fine-tune with preset options</strong>: Experiment with the preset buttons provided for each gradient type. For linear gradients, try common directions like top, right, or bottom-left. For radial gradients, test different size settings like 'farthest corner' or 'closest side' to see how they affect the spread of the gradient.",
        "<strong>Preview your gradient</strong>: Your creation is displayed in real-time in the large preview area. Click on this area to instantly copy the CSS code to your clipboard for use in your projects. You can continue making adjustments until you're satisfied with the appearance.",
        "<strong>Export or share your work</strong>: Once your gradient looks perfect, either copy the generated CSS code using the 'Copy Code' button or download it as a PNG image with the 'Download PNG' button. You can also browse through the preset gradients at the bottom of the tool for quick inspiration or starting points."
      ]
    },
    conclusion: "CSS gradients offer a powerful way to enhance your web designs with smooth color transitions while keeping your projects lightweight and performant. Unlike images, gradients scale perfectly to any size, load instantly, and can be easily modified with a few code changes. With our CSS Gradient Generator, you don't need to memorize complex syntax or spend time writing code manually - simply create visually, tweak to perfection, and implement with a single copy-paste action. Whether you're building professional websites, designing UI components, or creating digital art, mastering the use of gradients will significantly elevate the visual appeal of your work. Start experimenting with different color combinations and gradient types today to discover the endless creative possibilities this tool offers."
  }
}