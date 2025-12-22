export default {
    title: 'Image Base64 Converter: Online Image Encoding Decoding Tool Guide',
    functionTitle: 'What is an Image Base64 Converter and Its Uses?',
    intro: 'Our <strong>Image Base64 Converter</strong> is a powerful pure frontend online tool that easily implements bidirectional conversion between images and Base64 encoding. This tool supports multiple image formats including PNG, JPEG, WebP, GIF, and SVG, with quality control and batch processing capabilities. Using our <strong>online image to Base64 tool</strong>, you can quickly convert images to Base64 encoding for web embedding, API transmission, or data storage, and also restore Base64 encoding to image files. All processing is completed locally in the browser without uploading to servers, ensuring your privacy and data security.',
    
    useCasesTitle: 'Common Application Scenarios for Image Base64 Conversion',
    useCases: [
        'Embed small icons and images directly in HTML or CSS in web development to reduce HTTP requests',
        'Use Base64 encoded images for storage and transmission in mobile app development',
        'Pass image data in API interfaces to avoid the complexity of file uploads',
        'Embed images in email templates to ensure proper display',
        'Convert images to text format for storage in data storage systems',
        'Use Base64 encoded image data in frontend caching strategies',
        'Process image data in Web Workers to improve performance',
        'Preload and store image resources in offline applications'
    ],
    
    tipTitle: 'Professional Tip:',
    tipContent: 'For images that require transparent backgrounds, it is recommended to use PNG format and maintain original quality. For photo-like images, you can use JPEG format and appropriately adjust quality to reduce file size. Base64 encoded data is approximately 133% of the original file size, so please control file size to avoid performance issues.',
    
    conclusion: '<strong>Image Base64 conversion</strong> tool is particularly useful for frontend developers, mobile app developers, API developers, and any users who need to process image data. By using our Base64 converter, you can quickly implement conversion between images and text encoding, simplify development processes, and improve work efficiency. Our tool makes this process simple and efficient, requiring no software installation and running entirely in the browser.',
    
    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What is Base64 encoding? Why do I need to convert images to Base64?',
            answer: 'Base64 is an encoding method that converts binary data into ASCII characters. After converting images to Base64 encoding, they can be embedded as text strings in HTML, CSS, JSON and other text formats without separate file requests. This is very useful for small icons, inline images, API data transmission and other scenarios. Our <strong>image to Base64 tool</strong> can quickly complete this conversion process.'
        },
        {
            question: 'Will Base64 encoding affect image quality?',
            answer: 'Base64 encoding itself does not affect image quality; it only changes the data representation. However, if lower quality settings are selected during the conversion process (only applicable to JPEG format), it may affect image quality. Our tool allows you to adjust quality parameters to find a balance between file size and image quality. For PNG, WebP and other formats, the conversion process is lossless.'
        },
        {
            question: 'What image formats can I process?',
            answer: 'Our <strong>Base64 image converter</strong> supports multiple common image formats, including PNG (supports transparent background), JPEG/JPG (adjustable quality), WebP (modern format optimization), GIF (including animations) and SVG (vector graphics). You can convert these format images to Base64 encoding, and also restore Base64 encoding to these format images.'
        },
        {
            question: 'How do I batch process multiple images at once?',
            answer: 'Our tool supports batch processing functionality. In image to Base64 mode, you can simultaneously drag and drop multiple images or use the file selector to select multiple files. After uploading, click the "Start Conversion" button to process all images simultaneously. After conversion is complete, you can use the "Batch Download" function to package all Base64 encodings into a ZIP file for download.'
        },
        {
            question: 'How much will the data size increase after Base64 encoding?',
            answer: 'Base64 encoding converts original binary data into text format, and the encoded data size is approximately 133% of the original file (i.e., an increase of about 33%). This is because Base64 uses 4 ASCII characters to represent 3 bytes of original data. Our tool will display original size and compression ratio information to help you understand the conversion effect.'
        },
        {
            question: 'Can I convert Base64 encoding back to images?',
            answer: 'Yes, our tool supports bidirectional conversion. In Base64 to image mode, you can paste Base64 encoded strings (with or without data:image prefix), and the tool will automatically recognize the format and generate images. You can also select output format (PNG, JPEG or WebP), even if the original format is different.'
        },
        {
            question: 'Will there be performance issues when processing large files?',
            answer: 'Our tool processes all data locally in your browser and can quickly process most common-sized images (within a few MB). For very large images, we provide maximum file size limit and quality adjustment features to help control processing time and memory usage. If you encounter performance issues, it is recommended to appropriately reduce image quality or use image compression tools for preprocessing.'
        },
        {
            question: 'Will my image data be uploaded to the server?',
            answer: 'No. Our <strong>pure frontend Base64 conversion tool</strong> runs entirely in your browser, and all image processing and conversion are completed locally without uploading any data to the server. This ensures your privacy and data security, especially suitable for processing sensitive or private images.'
        }
    ],
    
    tutorialTitle: 'How to Use the Image Base64 Converter',
    steps: [
        {
            title: 'Select Conversion Direction',
            description: 'First select the conversion direction you need: <strong>Image to Base64</strong> or <strong>Base64 to Image</strong>. Click the corresponding radio button according to your needs.',
            note: 'Image to Base64 is suitable for converting image files to encoded strings, Base64 to Image is suitable for restoring encoded strings to image files.'
        },
        {
            title: 'Upload Images or Input Base64 Encoding',
            description: 'If you select Image to Base64, you can <strong>drag and drop images</strong> to the upload area or click the area to select files from your device. Supports selecting multiple files simultaneously for batch processing. If you select Base64 to Image, please paste the Base64 encoded string in the text box.',
            note: 'Base64 encoding can include data:image prefix, the tool will automatically recognize and process.'
        },
        {
            title: 'Adjust Conversion Parameters (Optional)',
            description: 'In Image to Base64 mode, you can adjust the <strong>Image Quality</strong> slider (1%-100%) to control output quality, and also set <strong>Max File Size</strong> limit. The tool will automatically optimize to ensure results meet your requirements.',
            note: 'Quality settings mainly affect JPEG format, PNG and WebP formats usually maintain original quality.'
        },
        {
            title: 'Execute Conversion',
            description: 'Click the <strong>"Start Conversion"</strong> button to start processing. For Image to Base64, the tool will convert each image to Base64 encoded string. For Base64 to Image, the tool will decode the string and generate image preview.',
            note: 'Processing time depends on the number and size of images, most conversions complete immediately.'
        },
        {
            title: 'View Conversion Results',
            description: 'After conversion is complete, you can view the results in the output area. For Image to Base64, it will display image preview, Base64 encoded text, encoding length, original size and compression ratio information. For Base64 to Image, it will display the generated image preview, image dimensions and detected format.',
            note: 'You can click the "Copy Base64" button to quickly copy the encoded string, or click the "Download" button to save the image file.'
        },
        {
            title: 'Download or Use Results',
            description: 'For Image to Base64 results, click <strong>"Copy Base64"</strong> button to copy the encoding to clipboard, then you can directly use it in code. If there are multiple results, you can use the <strong>"Batch Download"</strong> function to package and download all Base64 texts. For Base64 to Image results, click the "Download" button to save the image file.',
            note: 'All processing is done in your browser, ensuring data security and privacy protection.'
        }
    ],
    
    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our Image Base64 Converter. Now you can easily implement conversion between images and Base64 encoding, improve development efficiency, and simplify workflows.',
    
    relatedToolsTitle: 'Related Tools You May Be Interested In',
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
            name: 'Invert Image Colors',
            description: 'Online tool to invert image colors and create negative effects.',
            url: 'https://www.ufreetools.com/tool/invert-image-colors'
        },
        {
            name: 'QR Code Generator',
            description: 'Create custom QR codes for URLs, text, contact information and more.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],
    
    referencesTitle: 'Reference Resources',
    references: [
        {
            name: 'Base64 Encoding Standard (RFC 4648)',
            description: 'Learn about the official specification and implementation details of Base64 encoding',
            url: 'https://datatracker.ietf.org/doc/html/rfc4648'
        },
        {
            name: 'Web Image Format Guide',
            description: 'Technical documentation about PNG, JPEG, WebP and other image formats',
            url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types'
        },
        {
            name: 'Data URL Specification',
            description: 'Standard for data: URL format and Base64 inline images',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs'
        }
    ]
}