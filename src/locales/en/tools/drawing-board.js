export default {
  name: 'Drawing Board',
  description: 'Online drawing tool with support for free drawing, color selection and brush size adjustment',

  // Toolbar
  tools: {
    brush: 'Brush',
    eraser: 'Eraser',
    clear: 'Clear Canvas',
    save: 'Save Image',
    undo: 'Undo',
    redo: 'Redo',
    apply: 'Apply'
  },

  // Settings
  settings: {
    brushSize: 'Brush Size',
    color: 'Color',
    opacity: 'Opacity',
    backgroundColor: 'Background Color'
  },

  // Color Picker
  colors: {
    black: 'Black',
    white: 'White',
    red: 'Red',
    green: 'Green',
    blue: 'Blue',
    yellow: 'Yellow',
    orange: 'Orange',
    purple: 'Purple',
    pink: 'Pink',
    brown: 'Brown',
    gray: 'Gray',
    custom: 'Custom Color'
  },

  // Canvas Settings
  canvas: {
    width: 'Width',
    height: 'Height',
    resize: 'Resize Canvas',
    orientation: 'Orientation',
    portrait: 'Portrait',
    landscape: 'Landscape',
    square: 'Square'
  },

  // Tips and Messages
  messages: {
    saveSuccess: 'Image saved',
    confirmClear: 'Are you sure you want to clear the canvas? All unsaved content will be lost.',
    unsupportedBrowser: 'Your browser does not support Canvas. Please use a modern browser.',
    fileNamePrompt: 'Enter file name',
    defaultFileName: 'My Artwork'
  },

  // Tool Introduction
  aboutTitle: 'About Drawing Board',
  aboutDescription: 'Drawing Board is an intuitive and easy-to-use online drawing tool that allows you to freely express your creativity. Whether you want to doodle, create simple illustrations, or jot down ideas visually, this tool has you covered.',

  featuresTitle: 'Key Features',
  feature1: 'Free drawing with various colors and brush sizes',
  feature2: 'Eraser tool for easy modifications',
  feature3: 'Undo and redo functionality to fix mistakes',
  feature4: 'Adjustable brush opacity for rich drawing effects',
  feature5: 'One-click canvas clearing to start fresh',
  feature6: 'Save your artwork as an image file',

  howToUseTitle: 'How to Use',
  howToUseStep1: '1. Select the brush tool and color to start drawing',
  howToUseStep2: '2. Use the sliders to adjust brush size and opacity',
  howToUseStep3: '3. Use the eraser tool to remove unwanted content',
  howToUseStep4: '4. You can undo or redo actions at any time',
  howToUseStep5: '5. When finished, click the save button to download your artwork',

  tipsTitle: 'Usage Tips',
  tip1: 'Use thin brushes for fine details and thick brushes for filling large areas',
  tip2: 'Lower opacity creates watercolor-like or translucent effects',
  tip3: 'Don\'t worry about mistakes - make good use of the undo feature',
  tip4: 'Start with the outline of your drawing before filling in details',
  tip5: 'Experiment with different color combinations for rich and vibrant artwork',

  // 添加文章内容
  article: {
    title: "Drawing Board: Create Digital Art with a Simple Online Canvas",
    features: {
      title: "What is the Online Drawing Board?",
      description: "The <strong>online drawing board</strong> is a versatile <strong>digital canvas</strong> designed for creating illustrations, sketches, and visual ideas directly in your browser. This <strong>web-based painting tool</strong> combines intuitive functionality with essential drawing features, making it accessible to users of all skill levels.<br><br>Our <strong>free drawing application</strong> includes adjustable brush sizes, multiple colors with opacity control, an eraser tool, and the ability to save your creations as images. The <strong>digital sketch pad</strong> supports both mouse and touch input, allowing you to draw naturally whether you're using a desktop computer, tablet, or smartphone. The tool also includes undo and redo functionality to help you experiment freely without worrying about mistakes.",
      useCases: {
        title: "Practical Applications for Digital Drawing",
        items: [
          "<strong>Educational Illustrations</strong>: Teachers can create quick diagrams and visual explanations to supplement their lessons, helping students understand complex concepts through <strong>visual learning tools</strong>",
          "<strong>Remote Collaboration</strong>: Team members can sketch ideas, create simple flowcharts, or annotate concepts and share them instantly during online meetings as <strong>digital whiteboard alternatives</strong>",
          "<strong>Digital Storyboarding</strong>: Content creators and filmmakers can draft quick visual sequences and scene layouts before committing to more detailed production work",
          "<strong>Concept Visualization</strong>: Designers can quickly bring ideas to life through rough sketches before investing time in professional design software, using the tool as an <strong>instant sketch platform</strong>",
          "<strong>Creative Relaxation</strong>: Individuals seeking a creative outlet can engage in digital doodling and free-form drawing as a mindfulness activity and <strong>stress-relief art therapy</strong>",
          "<strong>Children's Digital Art</strong>: Kids can explore creativity in a mess-free environment, developing fine motor skills and artistic expression through <strong>beginner-friendly drawing tools</strong>"
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about the Drawing Board",
      items: [
        {
          question: "Can I use the drawing board on my tablet or smartphone?",
          answer: "Yes, our drawing board fully supports touch-enabled devices. The online sketching tool is optimized for both mouse and touch inputs, allowing you to draw naturally on tablets and smartphones. The responsive design adjusts to different screen sizes, though larger screens provide more drawing space. For the best mobile drawing experience, use your device in landscape orientation to maximize the canvas area. Touch pressure sensitivity may be supported on devices that have this capability, though the level of precision will depend on your specific device's touch technology."
        },
        {
          question: "How do I save my drawings?",
          answer: "Saving your artwork is simple with our digital canvas tool. Click the 'Save Image' button in the toolbar, and you'll be prompted to enter a filename for your creation. The drawing will be saved as a PNG image file with transparent background (unless you've set a specific background color). This file format preserves the quality of your digital sketch and can be opened by virtually any image viewer or editor. Your saved artwork can be easily shared via email, social media, or incorporated into documents and presentations. For additional editing options, you can import the saved PNG into professional graphics software."
        },
        {
          question: "What's the difference between brush opacity and brush size?",
          answer: "In our web-based drawing application, brush size controls the width of your drawing stroke measured in pixels—larger numbers create thicker lines, smaller numbers create finer lines. Brush opacity, measured as a percentage, determines the transparency of your strokes. At 100% opacity, your brush creates fully solid, opaque lines. As you decrease opacity (e.g., to 50% or 30%), your strokes become increasingly transparent, allowing underlying colors and lines to show through. This creates watercolor-like effects and enables layering techniques in your online artwork. Combining different brush sizes with varying opacity levels gives you extensive control over your drawing style."
        },
        {
          question: "Can I undo mistakes on the drawing board?",
          answer: "Yes, our online sketchpad includes robust undo and redo functionality to help you recover from mistakes. Click the 'Undo' button to reverse your most recent action, and you can continue clicking to step back through multiple previous actions. If you go too far back, the 'Redo' button restores actions you've undone. The digital drawing canvas maintains a history of your recent changes (up to 50 steps), allowing you significant freedom to experiment without fear of permanent mistakes. This feature is particularly helpful for beginners exploring digital art techniques who may need multiple attempts to achieve their desired results."
        },
        {
          question: "Is there a limit to the canvas size for my drawings?",
          answer: "Our free drawing tool offers three preset canvas sizes: landscape (800×600 pixels), portrait (600×800 pixels), and square (700×700 pixels). These dimensions are optimized for most web-based drawing needs and ensure good performance across devices. Currently, the browser-based painting application doesn't support custom canvas dimensions beyond these presets. The initial canvas is set to landscape mode, but you can change this anytime during your drawing session without losing your work. The digital sketch tool automatically adjusts and centers your existing artwork when switching between canvas orientations to preserve as much of your creation as possible."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Using the Drawing Board",
      steps: [
        "Begin by selecting your preferred <strong>drawing tool</strong> from the left toolbar - choose the brush tool for drawing or the eraser tool for removing portions of your work",
        "Customize your <strong>brush size</strong> using the slider under 'Brush Size' - move it to the right for thicker lines (up to 50px) or to the left for finer lines (as small as 1px)",
        "Adjust the <strong>opacity level</strong> with the 'Opacity' slider - 100% creates solid lines while lower percentages create increasingly transparent strokes",
        "Select a <strong>color</strong> for your drawing from the color palette provided, or click the color picker tool to choose any custom color from the spectrum",
        "If desired, set a <strong>background color</strong> by selecting a color and clicking the 'Apply' button - this changes your canvas from white to your chosen color",
        "Start <strong>creating your artwork</strong> by clicking and dragging on the canvas - use different combinations of brush sizes, colors, and opacity for varied effects",
        "Use the <strong>undo and redo buttons</strong> if you make a mistake or want to revert a change - the tool remembers your recent actions"
      ]
    },
    conclusion: "The Drawing Board offers a streamlined way to create digital art without the complexity of professional software or the need for installation. Its intuitive interface makes digital drawing accessible to everyone from casual doodlers to teachers creating visual explanations. While it doesn't replace professional illustration tools, this web-based canvas excels at quick visual communication, idea sketching, and creative exploration. Whether you're collaborating remotely with colleagues, helping children explore digital art, or simply enjoying a creative moment, this drawing application provides the essential tools to express your visual ideas immediately and share them easily."
  }
}; 