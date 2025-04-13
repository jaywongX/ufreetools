export default {
  name: 'Bulk Image Resizer',
  description: 'Adjust, convert, and optimize multiple images at once',
  input: {
    title: 'Input Images',
    dropzone: 'Drop images here or click to browse',
    addMore: 'Add more images',
    selectImages: 'Select Images',
    clearAll: 'Clear All',
    maxFiles: 'Up to {count} images',
    maxSize: 'Maximum size per image: {size}MB',
    supportedFormats: 'Supported formats: {formats}'
  },
  options: {
    title: 'Resize Options',
    settingsTitle: 'Adjustment Settings',
    resizeMode: 'Resize Mode',
    resizeMethod: 'Resize Method',
    pixelMode: 'Pixel',
    percentageMode: 'Percentage',
    maxDimensionMode: 'Max Dimensions',
    outputFormat: 'Output Format',
    quality: 'Quality',
    width: 'Width',
    height: 'Height',
    maintainAspectRatio: 'Maintain Aspect Ratio',
    maxWidth: 'Max Width',
    maxHeight: 'Max Height',
    percentage: 'Percentage',
    backgroundColor: 'Background Color',
    naming: 'Output Naming',
    filenamePrefix: 'Filename Prefix',
    filenameSuffix: 'Filename Suffix',
    applyToAllImages: 'Apply to all images',
    applyToAll: 'Apply to all images'
  },
  resizeModes: {
    exact: 'Exact Dimensions',
    maxDimensions: 'Max Dimensions',
    percentage: 'Percentage Scaling',
    fit: 'Fit Inside',
    cover: 'Cover',
    crop: 'Crop'
  },
  formats: {
    original: 'Same as Source',
    jpg: 'JPG/JPEG',
    png: 'PNG',
    webp: 'WebP',
    gif: 'GIF',
    bmp: 'BMP',
    tiff: 'TIFF',
    svg: 'SVG',
    ico: 'ICO'
  },
  namingOptions: {
    original: 'Original Filename',
    dimensions: 'Original + Dimensions',
    format: 'Original + Format',
    custom: 'Custom Pattern',
    random: 'Random String'
  },
  output: {
    title: 'Resized Images',
    downloadAll: 'Download All',
    downloadAsZip: 'Download as ZIP',
    processingStatus: 'Processing: {processed}/{total}',
    originalSize: 'Original Size',
    newSize: 'New Size',
    reduction: 'Reduction',
    individualDownload: 'Download'
  },
  batch: {
    title: 'Batch Processing',
    process: 'Process All Images',
    cancel: 'Cancel Processing',
    selectPreset: 'Select Preset',
    savePreset: 'Save Current Settings',
    progress: 'Processing Progress'
  },
  watermark: {
    title: 'Watermark',
    enable: 'Add Watermark',
    text: 'Watermark Text',
    image: 'Watermark Image',
    position: 'Position',
    opacity: 'Opacity',
    rotation: 'Rotation',
    size: 'Size',
    padding: 'Padding'
  },
  positions: {
    topLeft: 'Top Left',
    topCenter: 'Top Center',
    topRight: 'Top Right',
    middleLeft: 'Middle Left',
    middleCenter: 'Center',
    middleRight: 'Middle Right',
    bottomLeft: 'Bottom Left',
    bottomCenter: 'Bottom Center',
    bottomRight: 'Bottom Right'
  },
  actions: {
    resize: 'Resize',
    preview: 'Preview',
    processing: 'Processing...',
    reset: 'Reset',
    applySettings: 'Apply Settings',
    resetSettings: 'Reset Settings',
    cancel: 'Cancel'
  },
  messages: {
    resizeSuccess: 'Image resizing successful',
    resizeFailed: 'Image resizing failed: {error}',
    invalidDimensions: 'Please enter valid dimensions',
    invalidWidthHeight: 'Please enter valid width and height',
    noImages: 'Please add images to resize',
    noImagesToDownload: 'No images available to download',
    processing: 'Processing images...',
    processingComplete: 'Processing complete',
    processingError: 'An error occurred while processing images',
    waitingForProcess: 'Waiting for processing',
    downloadStarted: 'Download started',
    allDownloaded: 'All images have been downloaded',
    presetSaved: 'Preset saved',
    presetLoaded: 'Preset loaded',
    zipCreated: 'A zip file containing {count} images has been created',
    zipError: 'An error occurred while creating the zip file'
  },
  preview: {
    title: 'Image Preview ({count} images)',
    selectImage: 'Select an image',
    batchSupport: 'Supports batch selection of multiple images for one-time processing',
    download: 'Download',
    delete: 'Delete'
  },
  qualityOptions: {
    fast: 'Fast Processing',
    medium: 'Medium Quality',
    high: 'High Quality (Recommended)',
    best: 'Best Quality (Slower)'
  },
  article: {
    title: "Bulk Image Resizer: Efficiently Process Multiple Images at Once",
    features: {
      title: "Understanding Batch Image Processing and Its Benefits",
      description: "The <strong>Bulk Image Resizer</strong> is a powerful online tool designed to simplify the process of resizing, converting, and optimizing multiple images simultaneously. Instead of processing images one by one in traditional editing software, this <strong>batch image processor</strong> allows you to apply the same adjustments to dozens or even hundreds of images with just a few clicks.<br><br>Our tool offers comprehensive options for <strong>image dimension adjustment</strong>, format conversion, and quality optimization, all while preserving the visual integrity of your pictures. Whether you need to reduce file sizes for web use, prepare images for specific platforms, or maintain consistent dimensions across an image collection, the <strong>batch resizer</strong> handles these tasks efficiently in your browser without requiring any software installation or technical expertise.",
      useCases: {
        title: "Practical Applications for Bulk Image Resizing",
        items: [
          "<strong>Website Optimization</strong>: Web developers and content managers can use the <strong>mass image resizer</strong> to quickly prepare image assets for websites. By reducing dimensions and file sizes, you can significantly improve page loading speeds, which is crucial for user experience and SEO rankings. The tool's ability to batch convert images to optimized formats like WebP further enhances website performance.",
          
          "<strong>E-commerce Product Photography</strong>: Online sellers dealing with large product catalogs can save hours of work by using our <strong>bulk photo resizer</strong> to standardize all product images to specific dimensions required by marketplaces like Amazon, eBay, or Shopify. This ensures a consistent, professional look across all listings while meeting platform requirements.",
          
          "<strong>Social Media Content Creation</strong>: Social media managers handling content across multiple platforms can resize images in batch to meet the specific dimension requirements of different networks. Whether it's Instagram posts, Facebook covers, Twitter cards, or Pinterest pins, our <strong>image batch processor</strong> helps maintain optimal visual quality across all platforms.",
          
          "<strong>Photography Portfolio Preparation</strong>: Professional photographers can quickly prepare images for portfolio websites, client delivery, or print services. The <strong>multiple image resizer</strong> allows for maintaining aspect ratios while adjusting to specific dimensions, ensuring consistency across an entire photo collection without time-consuming individual edits.",
          
          "<strong>Educational Material Development</strong>: Teachers and educational content creators can resize sets of diagrams, charts, or photographs to uniform dimensions for inclusion in learning materials, presentations, or online courses. The batch processing capability makes it practical to maintain visual consistency across extensive educational resources.",
          
          "<strong>App Development Asset Preparation</strong>: Mobile app developers can use the tool to generate multiple versions of the same images at different resolutions (like 1x, 2x, 3x) for various device displays. The <strong>batch image converter</strong> streamlines this process, ensuring app assets look crisp on all device types while maintaining manageable file sizes."
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions About Bulk Image Resizing",
      items: [
        {
          question: "Will image quality be degraded when using the Bulk Image Resizer?",
          answer: "Image quality is carefully preserved with our <strong>batch image processor</strong>, though some considerations apply:<br><br>• Our tool uses high-quality algorithms specifically designed to maintain image fidelity during resizing<br>• You have control over quality settings, particularly when converting to formats like JPEG or WebP<br>• Downscaling (making images smaller) generally preserves quality better than upscaling<br>• The higher quality setting you choose, the better the results, though files will be larger<br>• When batch processing, a quality setting of 80-90% offers an excellent balance for most usage scenarios<br><br>For professional work requiring maximum quality, we recommend using the 'High Quality' or 'Best Quality' setting in the processor options. The <strong>bulk photo resizer</strong> previews let you examine results before downloading, ensuring they meet your quality standards."
        },
        {
          question: "What image formats does the Bulk Image Resizer support?",
          answer: "Our <strong>batch image converter</strong> supports a comprehensive range of image formats:<br><br><strong>Input formats:</strong><br>• JPEG/JPG - Common format for photographs<br>• PNG - Ideal for graphics with transparency<br>• WebP - Modern format with excellent compression<br>• GIF - Suitable for simple animations<br>• BMP - Uncompressed bitmap format<br>• TIFF - High-quality format often used in photography<br><br><strong>Output formats:</strong><br>• JPEG/JPG - Best for photographs and general web use<br>• PNG - Preserves transparency and is lossless<br>• WebP - Provides superior compression while maintaining quality<br><br>The <strong>multiple image resizer</strong> can convert between these formats during the batch process, allowing you to standardize your image collection to a single format or choose the most appropriate format for each usage scenario."
        },
        {
          question: "How many images can I process at once with the Bulk Image Resizer?",
          answer: "The <strong>mass image resizer</strong> is designed to handle large batches efficiently:<br><br>• You can process dozens of images in a single batch (typical limit is around 100 images per batch)<br>• Individual image file size is limited to 5MB per image for optimal performance<br>• The total batch processing time depends on several factors, including:<br>  - The number and size of input images<br>  - The complexity of the resizing operations<br>  - Your device's processing power<br>  - Your internet connection speed<br><br>The <strong>batch image processor</strong> uses client-side processing, meaning the images never leave your computer, enhancing both speed and privacy. For very large collections (hundreds or thousands of images), we recommend processing them in smaller batches of 20-50 images for the best experience."
        },
        {
          question: "Can I maintain the aspect ratio when resizing images in bulk?",
          answer: "Yes, preserving aspect ratio is a key feature of our <strong>bulk image resizer</strong>:<br><br>• The 'Maintain Aspect Ratio' option ensures images won't be stretched or distorted<br>• When enabled, you only need to specify either width or height, and the other dimension will be calculated automatically<br>• For exact dimensions (like social media requirements), you can disable this option<br>• The 'Max Dimensions' resize method is particularly useful for maintaining aspect ratios while ensuring no image exceeds specified dimensions<br>• 'Percentage Scaling' uniformly resizes all images while perfectly preserving their original proportions<br><br>The <strong>batch photo resizer</strong> provides a preview of each image, allowing you to confirm that aspect ratios are preserved correctly before downloading the processed images."
        },
        {
          question: "How do I download all processed images after batch resizing?",
          answer: "The <strong>multiple image resizer</strong> offers convenient options for retrieving your processed images:<br><br>1. <strong>Batch Download as ZIP</strong>: After processing, click the 'Download All' button to get all resized images in a single ZIP archive<br><br>2. <strong>Individual Downloads</strong>: Each processed image has its own download button if you only need specific images<br><br>3. <strong>Automatic File Naming</strong>: Processed images maintain their original filenames with additions that indicate they've been resized<br><br>4. <strong>Format Preservation</strong>: If you selected 'Same as Source' in the output format, each image maintains its original format; otherwise, all images are converted to your selected format<br><br>The <strong>batch image converter</strong> stores all processed images temporarily in your browser, so we recommend downloading your results before closing the browser tab."
        }
      ]
    },
    guide: {
      title: "How to Use the Bulk Image Resizer: Step-by-Step Guide",
      step1: "<strong>Upload your images</strong>: Click the 'Select Images' button or drag and drop your files onto the upload area. The <strong>batch image processor</strong> accepts common image formats including JPEG, PNG, WebP, GIF, and others. You can add multiple images at once or add more images after the initial selection.",
      step2: "<strong>Choose your resize method</strong>: Select from three powerful resizing approaches: <ul class='ml-5 list-disc'><li>'Pixel' mode lets you specify exact dimensions in pixels</li><li>'Percentage' mode resizes images relative to their original dimensions</li><li>'Max Dimension' mode ensures no image exceeds a specified size while maintaining proportion</li></ul> This flexibility makes our <strong>bulk photo resizer</strong> suitable for virtually any image processing need.",
      step3: "<strong>Set your dimensions</strong>: Enter your desired width and/or height values based on the selected resize method. If you've enabled 'Maintain Aspect Ratio' (recommended for most cases), you only need to specify one dimension and the <strong>mass image resizer</strong> will calculate the other automatically to prevent distortion.",
      step4: "<strong>Configure output options</strong>: Choose your preferred output format (JPEG, PNG, or WebP) and adjust quality settings as needed. The <strong>batch image converter</strong> allows you to balance between image quality and file size. For JPEG and WebP formats, you can adjust the quality percentage, with higher values producing better-looking images at larger file sizes.",
      step5: "<strong>Process your images</strong>: Click the 'Apply to all images' button to start batch processing. The <strong>multiple image resizer</strong> will display a progress indicator as it works through your files. Each image is processed using high-quality algorithms that preserve visual fidelity while achieving your specified dimensions.",
      step6: "<strong>Review the results</strong>: After processing completes, examine the preview of each image to ensure the results meet your expectations. The <strong>bulk image resizer</strong> displays useful information including the original and new dimensions, allowing you to confirm that the resizing was performed correctly.",
      step7: "<strong>Download your processed images</strong>: Click 'Download All' to receive a ZIP file containing all your resized images, or download individual images as needed. The <strong>batch image processor</strong> preserves your original files and provides the processed versions with appropriate naming to distinguish them from the originals."
    },
    conclusion: "The Bulk Image Resizer offers a practical solution to a common challenge faced by web developers, photographers, marketers, and content creators: efficiently processing multiple images while maintaining quality and consistency. By eliminating the need for expensive desktop software or time-consuming individual edits, this tool streamlines workflows and helps maintain visual standards across digital assets. Whether you're preparing product photos for an e-commerce platform, optimizing images for a responsive website, or standardizing visual content for social media, the batch processing capabilities save valuable time and ensure consistent results. As digital content continues to emphasize visual elements, tools that help manage and optimize images at scale become essential resources for professionals across industries."
  }
}