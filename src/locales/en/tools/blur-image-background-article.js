export default {
  title: 'Background Blur Tool: Online Blur Image Background for Professional Depth of Field Effects',
  functionTitle: 'What is a Background Blur Tool and Its Uses?',
  intro: 'This tool is a pure front-end <strong>online background blur tool</strong> (Blur Image Background). It combines WebGL filters with human segmentation algorithms to achieve Gaussian blur, lens depth of field, motion blur, radial blur, and <b>professional camera-level background blur</b>. It supports batch processing and multi-format export, allowing you to quickly obtain photos with clean backgrounds and prominent subjects in your browser, suitable for e-commerce main images, ID photos, social media covers, and other scenarios.',
  useCasesTitle: 'Common Application Scenarios for Background Blur',
  useCases: [
    'E-commerce main images removing distracting backgrounds to highlight product subjects',
    'Portrait photos with background blur for professional depth of field effects',
    'ID photos or professional headshots, replaced with solid color or gradient backgrounds',
    'Quick beautification of social media covers and short video cover images',
    'Unified background processing for presentation slides and poster designs',
    'Tourist photo background blurring to protect privacy and enhance aesthetics',
    'Background blurring of group photos for batch export',
    'Rapid generation of soft focus and radial focus effects for UGC content'
  ],
  tipTitle: 'Professional Tip:',
  tipContent: 'When used for portrait subjects, please enable "Enable Foreground Segmentation" and appropriately increase "Edge Feathering" to significantly reduce hair edge jaggedness. For images with high quality requirements, prioritize exporting PNG or WebP formats.',
  conclusion: 'The <strong>background blur tool</strong> effectively solves the pain points of "cluttered backgrounds" and "unprominent subjects" through intelligent segmentation and multiple blur algorithms. Whether it\'s product photography, portrait photography, or social content creation, completing background blur online can significantly enhance visual focus and professionalism.',
  faqTitle: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'How does the online background blur tool achieve professional camera depth of field effects?',
      answer: 'This online background blur tool combines MediaPipe foreground segmentation with WebGL filters, applying Gaussian/lens/radial/motion blur to background areas to achieve depth of field transitions and soft focus effects similar to professional cameras.'
    },
    {
      question: 'What background replacement methods are supported (solid color/gradient/image)?',
      answer: 'The tool supports three modes: solid color background, linear gradient background, and image background, with adjustable background transparency and blend modes to meet requirements for e-commerce main images, ID photos, and brand-consistent styles.'
    },
    {
      question: 'How to ensure export quality and control file size?',
      answer: 'You can choose PNG/JPG/WebP formats and control export size through quality sliders and dimension presets. PNG and WebP are more suitable for background blur scenarios with high quality requirements.'
    },
    {
      question: 'How to use batch processing and page sorting?',
      answer: 'Multiple images can be imported at once, with range selection and checkbox controls for processing specific "pages", supporting move up/down sorting, and automatic filtering of invalid images with "Skip Blank Pages".'
    },
    {
      question: 'Do images need to be uploaded to the server, how is privacy protected?',
      answer: 'All background blur processing is completed locally in the browser and is not uploaded to any server, ensuring image privacy and security.'
    }
  ],
  tutorialTitle: 'How to Use the Background Blur Tool',
  steps: [
    {
      title: 'Upload or Import Images',
      description: 'Drag and drop or click to upload local images, or paste clipboard images, enable camera capture, or import network images via URL. Supports PNG, JPG, WEBP, BMP formats.',
      note: 'Multiple images can be imported at once for batch background blurring.'
    },
    {
      title: 'Select Blur Type and Parameters',
      description: 'Choose Gaussian, lens, motion, or radial blur in "Blur Type", and fine-tune effects through sliders for radius, angle, center point, and focus bandwidth.',
      note: 'Checking "Show Before/After Comparison" allows real-time comparison of before and after background blurring.'
    },
    {
      title: 'Enable Foreground Segmentation and Background Settings',
      description: 'Enable "Enable Foreground Segmentation" to improve subject edge quality, increase "Edge Feathering" for more natural transitions. In "Background Settings", choose solid color, gradient, or image background, and adjust transparency and blend modes when necessary.',
      note: 'When "Preserve Original Background" is selected, only the background area is blurred while the subject remains clear.'
    },
    {
      title: 'Dimensions and Quality',
      description: 'In "Output Size and Quality", choose social media presets or custom dimensions, set JPG/WebP quality and scale percentage. For printing, increase DPI and export higher pixels proportionally.',
      note: 'PNG and WebP are more suitable for background blur scenarios requiring detail preservation.'
    },
    {
      title: 'Export and Batch Download',
      description: 'Select export format for each image and click "Download" to save; multiple images can use "Batch Download (ZIP)" to export all background blur results at once.',
      note: 'All processing is completed locally in the browser, images are not uploaded to the server.'
    },
    {
      title: 'Page Control',
      description: 'Sort "pages" through checkboxes, range input, and move up/down, enable "Skip Blank Pages" to automatically filter invalid images with low brightness variance.',
      note: 'Range example: 1-3,5,7-9.'
    }
  ],
  successTitle: 'Congratulations!',
  successContent: 'You have learned to use our background blur tool to achieve professional camera-level depth of field and soft focus effects, suitable for various creative and business scenarios.',
  relatedToolsTitle: 'Related Tools You Might Be Interested In',
  relatedTools: [
    {
      name: 'Image Compressor',
      description: 'Reduce image file size without significant quality loss.',
      url: 'https://www.ufreetools.com/tool/image-compressor'
    },
    {
      name: 'Image Resizer',
      description: 'Resize images to specific dimensions or scale by percentage.',
      url: 'https://www.ufreetools.com/tool/image-batch-resizer'
    },
    {
      name: 'Seal Generator',
      description: 'Online creation of various seal images, generating company chops, personal seals, and other digital stamps.',
      url: 'https://www.ufreetools.com/tool/seal-generator'
    },
    {
      name: 'QR Code Generator',
      description: 'Create custom QR codes for URLs, text, contact information, and more.',
      url: 'https://www.ufreetools.com/tool/qr-code-generator'
    }
  ],
  referencesTitle: 'Reference Resources',
  references: [
    {
      name: 'MediaPipe Selfie Segmentation',
      description: 'Google\'s human foreground segmentation model and usage',
      url: 'https://github.com/google/mediapipe/blob/master/docs/solutions/selfie_segmentation.md'
    },
    {
      name: 'glfx.js',
      description: 'WebGL-based real-time image effects library',
      url: 'https://github.com/evanw/glfx.js'
    },
    {
      name: 'StackBlur',
      description: 'Fast and controllable canvas blur algorithm, suitable as a fallback solution and feathering processing',
      url: 'https://github.com/flozz/StackBlur'
    }
  ]
}