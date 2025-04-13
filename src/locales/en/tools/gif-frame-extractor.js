export default {
  name: 'GIF Frame Extractor',
  description: 'Extract individual frames from GIF animations',
  uploadBtn: 'Select GIF',
  resetBtn: 'Reset',
  extractBtn: 'Extract Frames',
  extractingBtn: 'Extracting...',
  downloadAllBtn: 'Download All Frames',
  upload: {
    title: 'Upload GIF',
    dropzone: 'Drop your GIF file here or click to browse',
    maxSize: 'Maximum file size: 20MB',
    onlyGif: 'Only GIF files are supported',
    selectGif: 'Please select a GIF file'
  },
  analysis: {
    title: 'GIF Information',
    dimensions: 'Dimensions',
    frameCount: 'Frame Count',
    duration: 'Duration',
    fps: 'Frames Per Second',
    fileSize: 'File Size',
    loopCount: 'Loop Count',
    infinite: 'Infinite',
    fileName: 'File Name',
    size: 'Size',
    totalFrames: 'Total Frames',
    notExtracted: 'Not Extracted'
  },
  extraction: {
    title: 'Frame Extraction',
    selectFrames: 'Select Frames',
    allFrames: 'All Frames',
    rangeOfFrames: 'Frame Range',
    from: 'From',
    to: 'To',
    specificFrames: 'Specific Frames',
    frameNumbers: 'Frame Numbers (comma-separated)',
    everyNth: 'Every Nth Frame',
    nth: 'Every',
    frames: 'Frames',
    selectFirst: 'First Frame',
    selectLast: 'Last Frame',
    selectMiddle: 'Middle Frame',
    selectKeyFrames: 'Auto-detect Key Frames'
  },
  output: {
    title: 'Export Settings',
    format: 'Output Format',
    png: 'PNG',
    jpeg: 'JPEG',
    webp: 'WebP',
    scaling: 'Scaling',
    originalSize: 'Original Size',
    customSize: 'Custom Size',
    width: 'Width',
    height: 'Height',
    quality: 'Quality',
    qualityValue: 'Quality: {value}%',
    lowQuality: 'Low Quality (smaller file)',
    highQuality: 'High Quality (larger file)',
    naming: 'File Naming',
    pattern: 'Pattern',
    filename: 'Original Filename',
    framenumber: 'Frame Number',
    timestamp: 'Timestamp',
    preview: 'Preview',
    downloadOptions: 'Download Options',
    separateFiles: 'Separate Files',
    zipArchive: 'ZIP Archive',
    spritesheet: 'Spritesheet',
    gridSize: 'Grid Size',
    columns: 'Columns',
    animation: 'New Animation'
  },
  frames: {
    title: 'Extracted Frames',
    frameInfo: 'Frame {number} of {total}',
    frame: 'Frame',
    delay: 'Delay: {delay} ms',
    downloadFrame: 'Download',
    copyFrame: 'Copy',
    selectAll: 'Select All',
    unselectAll: 'Unselect All',
    invertSelection: 'Invert Selection',
    noFrames: 'No frames have been extracted yet',
    extractFirst: 'Please extract frames first'
  },
  actions: {
    extract: 'Extract Frames',
    preview: 'Preview',
    downloadSelected: 'Download Selected',
    downloadAll: 'Download All',
    createSpritesheet: 'Create Spritesheet',
    createNewGif: 'Create New GIF',
    cancel: 'Cancel',
    processing: 'Processing...'
  },
  messages: {
    extractionComplete: 'Frame extraction complete',
    extracting: 'Extracting frames...',
    noFramesSelected: 'No frames selected',
    processingGif: 'Processing GIF...',
    invalidGif: 'Invalid GIF file',
    framesCopied: 'Frames copied to clipboard',
    downloadStarted: 'Download started',
    spritesheetCreated: 'Spritesheet created successfully',
    frameDownloaded: 'Frame downloaded',
    preparingFrames: 'Preparing all frames, please wait...',
    allFramesDownloaded: 'All frames downloaded',
    downloadError: 'Failed to download all frames',
    resetComplete: 'Reset complete',
    fileEmpty: 'File data is empty'
  },
  article: {
    title: "GIF Frame Extractor: Analyze and Extract Animation Frames",
    features: {
      title: "Understanding GIF Frame Extraction",
      description: "The <strong>GIF Frame Extractor</strong> is a specialized tool designed to deconstruct animated GIF files into their individual frames. This powerful <strong>animation decomposer</strong> provides a comprehensive way to analyze and extract each static image that makes up a GIF, allowing you to isolate specific moments from any <strong>animated sequence</strong>.<br><br>Our <strong>GIF splitter</strong> offers multiple output format options (PNG, JPEG, WebP), quality settings for compression, and intuitive frame navigation. The tool automatically detects and displays essential <strong>GIF metadata</strong> including dimensions, frame count, file size, and individual frame delay times. Once extraction is complete, you can preview each <strong>frame image</strong>, download individual frames, or export all frames together in a ZIP archive for further editing or analysis.",
      useCases: {
        title: "Common Applications for GIF Frame Extraction",
        items: [
          "Graphic designers extracting specific frames from animated GIFs to modify and incorporate into new designs or presentations",
          "Web developers isolating frames from animations to create custom loading spinners, progress indicators, or sprite sheets",
          "Digital artists analyzing frame-by-frame animation techniques in existing GIFs to improve their own animation skills",
          "Content creators extracting key frames from animated reactions or memes to use as static images in social media posts",
          "Educators and technical writers capturing specific stages of an animated tutorial or demonstration for inclusion in teaching materials",
          "Motion analysts and researchers extracting sequential frames to study movement patterns, physics visualizations, or scientific animations"
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about GIF Frame Extraction",
      items: [
        {
          question: "What's the maximum size of GIF file this tool can process?",
          answer: "Our GIF Frame Extractor is designed to handle GIF files up to 20MB in size. This limit accommodates most animated GIFs found online while ensuring optimal performance. For larger GIFs, we recommend using video editing software or specialized animation tools. The extraction speed depends on both the file size and the number of frames in your GIF animation - larger files with many frames will naturally take longer to process than smaller animations with fewer frames."
        },
        {
          question: "Which output format should I choose for the extracted frames?",
          answer: "The best output format depends on your specific needs: PNG is ideal for maintaining maximum quality and supporting transparency, making it perfect for further editing or when you need to preserve alpha channels in your GIF frames. JPEG offers smaller file sizes but doesn't support transparency and may introduce compression artifacts, suitable for simple images or web publication where file size matters. WebP provides a good balance between quality and compression, supporting transparency while offering smaller file sizes than PNG, making it an excellent modern choice if your software supports this format."
        },
        {
          question: "How can I create a new animation from the extracted frames?",
          answer: "After extracting frames using our GIF Frame Extractor, you can create new animations through several methods: 1) Use animation software like Adobe Animate, After Effects, or the free alternative GIMP to import the extracted frames and export as a new GIF with custom timing. 2) Online animation tools such as EZGIF or Canva can import image sequences and convert them to GIFs with adjustable settings. 3) For developers, consider using CSS animations or JavaScript libraries like GSAP to create web animations from the frame images. You can modify individual frames before recombining them to create enhanced or edited versions of the original GIF."
        },
        {
          question: "Why do some extracted frames look different from what I see in the GIF?",
          answer: "Differences between extracted frames and what you see when viewing the GIF animation can occur for several reasons: 1) GIFs often use frame optimization techniques like transparent regions or disposal methods that only make sense in sequence. 2) Some frames may be displayed for very short durations in the animation, making them barely noticeable when played but visible when extracted. 3) Frame blending or interpolation might be applied by some GIF viewers to smooth animations. 4) The GIF might use local color tables that change the palette between frames. Our GIF Frame Extractor preserves the exact pixel data from each frame as stored in the GIF file, providing the most accurate representation of the original frames."
        },
        {
          question: "What information can I learn from the frame delay times?",
          answer: "Frame delay times in a GIF provide valuable insights into the animation's rhythm and pacing. Each frame's delay (measured in milliseconds) reveals: 1) The overall animation speed - shorter delays create faster animations while longer delays slow the motion. 2) Timing patterns that indicate emphasis points where the animation lingers on certain frames for effect. 3) Animation techniques like \"ease-in\" or \"ease-out\" effects where frame delays gradually change. 4) Potential optimization opportunities - frames with identical or very similar delay times might be candidates for standardization. Our GIF Frame Extractor displays these delay values for each extracted frame, helping you understand the timing structure of the original animation."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Using the GIF Frame Extractor",
      steps: [
        "Click the <strong>Select GIF</strong> button at the top of the tool interface and choose the animated GIF file you want to process from your device. The tool supports GIF files up to 20MB in size.",
        "After uploading, review the <strong>GIF Information</strong> panel that appears on the left side, showing details like dimensions, file size, and frame count to verify you've selected the correct file.",
        "Click the <strong>Extract Frames</strong> button in the top toolbar to begin the frame extraction process. A progress indicator will appear while the tool analyzes and extracts each frame from your GIF.",
        "Choose your preferred <strong>output format</strong> (PNG, JPEG, WebP) from the options in the left panel. If selecting JPEG or WebP, you can adjust the quality slider to balance between image quality and file size.",
        "Browse through the extracted frames displayed in the grid view on the right side of the tool. Each thumbnail shows the frame number and delay time (how long that frame appears in the animation).",
        "To save individual frames, hover over any frame thumbnail and click the download icon that appears. The frame will be saved to your device in your selected output format.",
        "To download all extracted frames at once, click the <strong>Download All Frames</strong> button in the toolbar. This will create a ZIP archive containing all frames in your chosen format for convenient storage and further editing."
      ]
    },
    conclusion: "The GIF Frame Extractor provides a comprehensive solution for deconstructing animated GIFs into their constituent frames. Whether you're a designer seeking specific images from an animation, a developer creating custom web animations, or an educator analyzing visual sequences, this tool offers precise frame-by-frame extraction with flexible output options. By converting temporal animations into static image sequences, you gain full control over GIF content, enabling advanced editing, analysis, and repurposing of animated content. As GIFs continue to be a popular medium for expressing ideas, reactions, and demonstrations across the web, the ability to extract and manipulate individual frames remains an essential capability for digital content creators and analysts."
  }
}