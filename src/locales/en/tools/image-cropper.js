export default {
  name: 'Image Cropper',
  description: 'Precisely crop, resize, and rotate images',
  upload: {
    title: 'Upload Image',
    dropzone: 'Drag and drop your image here or click to browse',
    maxSize: 'Maximum file size: 10MB',
    supportedFormats: 'Supported formats: JPG, PNG, WEBP, GIF',
    select: 'Please select an image to start cropping and editing'
  },
  editor: {
    title: 'Image Editor',
    zoom: 'Zoom',
    rotate: 'Rotate',
    flipHorizontal: 'Flip Horizontal',
    flipVertical: 'Flip Vertical',
    reset: 'Reset Image',
    undo: 'Undo',
    redo: 'Redo',
    dragMode: 'Drag Mode',
    scaleMode: 'Scale Mode'
  },
  crop: {
    title: 'Crop Settings',
    aspectRatio: 'Aspect Ratio',
    freeform: 'Freeform',
    square: 'Square (1:1)',
    portrait: 'Portrait (3:4)',
    landscape: 'Landscape (4:3)',
    widescreen: 'Widescreen (16:9)',
    panorama: 'Panorama (2:1)',
    custom: 'Custom',
    width: 'Width',
    height: 'Height',
    unit: 'Unit',
    pixels: 'Pixels',
    percent: 'Percentage',
    lockAspectRatio: 'Lock Aspect Ratio'
  },
  presets: {
    title: 'Size Presets',
    original: 'Original Size',
    social: 'Social Media',
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    print: 'Print Sizes',
    fourBySix: '4×6 inches',
    fiveBySeven: '5×7 inches',
    eightByTen: '8×10 inches'
  },
  output: {
    title: 'Output',
    preview: 'Preview',
    dimensions: 'Output Dimensions',
    quality: 'Quality',
    format: 'Format',
    fileName: 'File Name',
    download: 'Download',
    saveAs: 'Save As',
    copy: 'Copy to Clipboard'
  },
  actions: {
    crop: 'Crop Image',
    apply: 'Apply',
    cancel: 'Cancel',
    save: 'Save Image',
    download: 'Download',
    newImage: 'New Image'
  },
  messages: {
    cropSuccess: 'Image cropped successfully',
    downloadReady: 'Your cropped image is ready to download',
    processing: 'Processing the image...',
    copied: 'Image has been copied to clipboard',
    invalidFile: 'Invalid file. Please upload a valid image.',
    fileTooLarge: 'File is too large. Maximum size is 10MB.'
  },
  article: {
    title: "Image Cropper: The Ultimate Tool for Precise Image Editing",
    introduction: {
      title: "What is an Image Cropper?",
      p1: "An <strong>image cropper</strong> is a specialized tool designed to help users select and extract portions of an image with precision. Unlike basic photo editors, our <strong>online image cropper and resizer</strong> offers advanced functionality that makes it ideal for both casual users and professionals seeking to perfect their visual content.",
      p2: "Whether you need a <strong>circle image cropper</strong> for profile pictures, a <strong>square image cropper</strong> for social media posts, or a <strong>freehand image cropper</strong> for custom selections, our tool provides versatile options to meet your exact requirements. The technology behind our <strong>image cropper</strong> ensures precision down to the pixel, allowing for <strong>image cropping by pixel</strong> with exceptional accuracy.",
      p3: "Modern web development frameworks like <strong>React</strong>, <strong>Angular</strong>, and <strong>Flutter</strong> have incorporated <strong>image cropper</strong> functionality through libraries such as <strong>react image cropper</strong>, <strong>ngx image cropper</strong>, and <strong>image cropper flutter</strong> components. Our online tool delivers the same professional quality without requiring any programming knowledge."
    },
    applications: {
      title: "Applications and Use Cases",
      item1: "<strong>Social Media Optimization</strong>: Create perfectly sized images for different platforms using our <strong>image size cropper</strong> with preset dimensions.",
      item2: "<strong>Profile Picture Creation</strong>: Use our <strong>image circle cropper</strong> or <strong>image round cropper</strong> to create perfect circular avatars.",
      item3: "<strong>E-commerce Product Photography</strong>: Clean up product images with our <strong>image shape cropper</strong> for consistent presentation.",
      item4: "<strong>Document Processing</strong>: Extract images from PDFs with our <strong>PDF image cropper online</strong> capabilities.",
      item5: "<strong>Batch Processing</strong>: Handle multiple images at once with our <strong>bulk image cropper</strong> feature for efficient workflows."
    },
    tutorial: {
      title: "How to Use Our Image Cropper",
      step1: {
        title: "Step 1: Upload Your Image",
        content: "Click the \"New Image\" button to select and upload the photo you want to crop. Our tool supports common image formats including JPG, PNG, and WEBP. For advanced users, our <strong>image auto cropper</strong> feature can detect and suggest optimal crop areas."
      },
      step2: {
        title: "Step 2: Select Crop Type and Ratio",
        content: "Choose your preferred crop type from the dropdown menu. Options include freeform (for <strong>free hand image cropper</strong> functionality), square (1:1), landscape (4:3), portrait (3:4), and widescreen (16:9). For dimensional precision, our tool functions as an <strong>image cropper in cm</strong> when needed."
      },
      step3: {
        title: "Step 3: Adjust and Fine-tune",
        content: "Use the crop handles to resize your selection. Take advantage of rotation and flip features to perfectly align your image. For precise control, our <strong>image cropper by pixel</strong> functionality allows you to make adjustments down to individual pixels."
      },
      step4: {
        title: "Step 4: Crop and Download",
        content: "Once you're satisfied with your selection, click the \"Crop Image\" button to generate your cropped image. Preview the result and click \"Download\" to save it to your device. Our <strong>image cropper and resizer</strong> maintains the highest possible quality throughout this process."
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "What image formats does the cropper support?",
      a1: "Our image cropper supports all common image formats including JPG, PNG, WEBP, and GIF. Simply upload your image using the 'New Image' button to get started.",
      
      q2: "How do I create a perfect square crop for social media?",
      a2: "Select the 'Square (1:1)' option from the aspect ratio dropdown menu. This will constrain your crop selection to a perfect square, ideal for profile pictures and many social media posts where uniform dimensions are required.",
      
      q3: "Can I rotate or flip my image before cropping?",
      a3: "Yes, our tool provides rotation and flip capabilities. Use the rotate buttons to turn your image 90 degrees in either direction, or use the horizontal and vertical flip buttons to mirror your image before making your crop selection.",
      
      q4: "How do I save my cropped image?",
      a4: "After making your crop selection, click the 'Crop Image' button to generate your cropped image. The result will appear in the preview panel on the right. Then click the 'Download' button to save the cropped image to your device.",
      
      q5: "What's the difference between the different aspect ratios?",
      a5: "Different aspect ratios serve different purposes: 'Square (1:1)' is perfect for profile pictures, 'Landscape (4:3)' works well for standard photos, 'Portrait (3:4)' is ideal for vertical displays, 'Widescreen (16:9)' matches video dimensions, and 'Free' allows you to crop without constraints."
    },
    relatedTools: {
      title: "Related Tools",
      description: "Enhance your image editing workflow with these complementary tools:",
      tool1: {
        name: "Image Batch Resizer",
        description: "Resize multiple images at once.",
        url: "https://www.ufreetools.com/tool/image-batch-resizer"
      },
      tool2: {
        name: "Image Compressor",
        description: "Compress and optimize images while maintaining quality.",
        url: "https://www.ufreetools.com/tool/image-compressor"
      },
      tool3: {
        name: "Image Watermark",
        description: "Add text or image watermarks to your photos with customizable settings.",
        url: "https://www.ufreetools.com/tool/image-watermark"
      },
      common: {
        tryNow: "Try Now"
      }
    },
    references: {
      title: "References and Resources",
      ref1: {
        name: "Cropper.js",
        description: "A powerful and simple image cropping tool that supports flexible configuration, suitable for mobile devices and modern browsers. The official documentation provides detailed usage methods and API descriptions.",
        url: "https://github.com/fengyuanchen/cropperjs"
      },
      ref2: {
        name: "ImageCut",
        description: "A simple and practical image cropping tool that supports intelligent cropping, setting image size, pixel range, and batch processing.",
        url: "https://soft.3dmgame.com/down/206119.html"
      },
      ref3: {
        name: "Vue-Cropper",
        description: "A Vue.js image cropping component that uses the Cropper.js library, supports cropping preview, zoom control, image rotation, and can be easily integrated into Vue.js projects.",
        url: "https://hu-snail.github.io/vue3-resource/platform/mobile/img.html"
      }
    }
  }
}