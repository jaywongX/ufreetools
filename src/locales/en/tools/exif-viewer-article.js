export default {
    title: 'Online EXIF Viewer Guide: Image Metadata Extraction Tool',
    imageAlt: 'Online EXIF Viewer - Image Metadata Extraction Tool',
    functionTitle: 'What is Online EXIF Viewer and Its Uses?',
    intro: 'Our <strong>Online EXIF Viewer</strong> is a powerful image metadata extraction tool that can quickly read and analyze EXIF (Exchangeable Image File Format) information embedded in images. EXIF data contains rich metadata such as shooting parameters, camera information, GPS location, etc., which is valuable for photographers, designers, researchers, and general users. With our <strong>EXIF Information Viewer</strong>, you can view complete metadata information of images directly in your browser without installing any software. All processing is done locally, ensuring your privacy and security.',
    
    useCasesTitle: 'Common Application Scenarios of EXIF Viewer',
    useCases: [
        'Photographers view and analyze shooting parameters to learn excellent photo techniques',
        'Verify authenticity and source of images, check shooting time and location information',
        'Organize and archive photos, automatically categorize and organize based on EXIF information',
        'Geotagging and location tracking, view GPS coordinates and shooting locations of photos',
        'Camera and lens performance analysis, compare shooting effects of different devices',
        'Copyright protection and evidence collection, extract original shooting information of images',
        'Reference for post-processing photos, understand original shooting parameters for precise adjustment',
        'Travel records and memory organization, review shooting locations through GPS information'
    ],
    
    tipTitle: 'Professional Tip:',
    tipContent: 'Most social media platforms (such as WeChat, Weibo) automatically delete EXIF data when uploading images to protect privacy. If you need to view complete EXIF information, please use the original unprocessed image files.',
    
    conclusion: '<strong>EXIF Metadata Viewing</strong> tool is particularly useful for photographers, designers, researchers, and anyone who needs to understand detailed image information. By using our EXIF viewer, you can gain deep insights into the shooting background of images, verify authenticity, or simply satisfy your curiosity about image information. Our tool supports multiple image formats, including JPEG, HEIC, WebP, PNG, and some RAW and TIFF formats, making this process simple and efficient without installing any software.',
    
    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What is EXIF data?',
            answer: 'EXIF (Exchangeable Image File Format) is a standard for storing metadata information of digital photos. This information includes shooting time, camera model, lens information, aperture, shutter speed, ISO sensitivity, GPS location, etc. When you take photos with a digital camera or mobile phone, this information is automatically embedded in the image file. Using our <strong>Online EXIF Data Viewer</strong>, you can easily read and analyze this information.'
        },
        {
            question: 'Will viewing EXIF information leak my privacy?',
            answer: 'No. Our tool runs entirely locally in your browser. All image processing is performed on your device and is not uploaded to any server. This means your images and EXIF data never leave your device, ensuring complete privacy and security.'
        },
        {
            question: 'Why do some images have no EXIF information?',
            answer: 'Reasons why some images may not have EXIF data include: EXIF information deleted after processing with editing software, images from social media platforms (these platforms usually delete EXIF data), image formats that do not support EXIF (such as certain PNG files), or images obtained from web screenshots. Using our <strong>EXIF Metadata Extraction Tool</strong> can quickly check if images contain EXIF information.'
        },
        {
            question: 'Which image formats are supported?',
            answer: 'Our tool supports multiple image formats, including JPEG (most complete EXIF support), HEIC (iPhone photo format), WebP, PNG (limited support), TIFF, and some RAW formats (such as CR2, NEF, ARW, etc.). For RAW formats, the level of support depends on the specific format and browser compatibility.'
        },
        {
            question: 'How is GPS information displayed?',
            answer: 'If the image contains GPS coordinate information, our tool will display latitude and longitude coordinates (supporting degree-minute-second format and decimal degree format) and show the shooting location on an integrated map. You can also use the reverse geocoding function to convert GPS coordinates into actual geographic location names (such as city, street, etc.).'
        },
        {
            question: 'Can multiple images be processed in batches?',
            answer: 'Yes, our tool supports batch processing. You can upload multiple images at once, and the EXIF information of each image will be displayed separately. You can also use the batch export function to export all images\' EXIF information in JSON or CSV format for subsequent analysis and processing.'
        },
        {
            question: 'What data formats are supported for export?',
            answer: 'We support multiple export formats: JSON format (complete structured data suitable for program processing), CSV format (tabular form suitable for opening in Excel and other software), summary report (concise text report suitable for reading), and visualization charts (display key parameters in chart form suitable for analysis).'
        }
    ],
    
    tutorialTitle: 'How to Use Online EXIF Viewer',
    steps: [
        {
            title: 'Upload Your Images',
            description: 'First, upload the images whose EXIF information you want to view. You can directly <strong>drag and drop</strong> files into the upload area, or click browse and select files from your device. Our tool supports multiple formats including JPEG, HEIC, WebP, PNG, RAW, and TIFF.',
            note: 'You can upload multiple images at once for batch processing.'
        },
        {
            title: 'View EXIF Information',
            description: 'After uploading, the tool will automatically read the EXIF data of the images. If the images contain EXIF information, you will see detailed metadata, including basic shooting information (camera brand/model, shooting time, file size, etc.), shooting parameters (aperture, shutter, ISO, etc.), GPS location, and advanced metadata.',
            note: 'If the images do not contain EXIF data, the tool will display the corresponding prompt information.'
        },
        {
            title: 'View GPS Location',
            description: 'If the images contain GPS coordinate information, you can see latitude and longitude coordinates (displayed in degree-minute-second format) in the GPS information section and view the shooting location on an integrated map. Click the "Reverse Geocoding" button to convert GPS coordinates into actual geographic location names.',
            note: 'Map display requires an internet connection, and the first load may take some time.'
        },
        {
            title: 'Export EXIF Data',
            description: 'You can choose multiple ways to export EXIF information: click the "Export JSON" button to download complete structured data; click the "Export CSV" button to download tabular data; click the "Export Summary Report" to get a concise text report; or click "Export Visualization Charts" to view parameter visualization.',
            note: 'For batch processing of images, you can use the "Batch Download" function to export all data at once.'
        },
        {
            title: 'Analyze Shooting Parameters',
            description: 'In the shooting parameters section, you can view information such as aperture value, shutter speed (human-readable display, such as 1/125 sec), ISO sensitivity, focal length, etc. These parameters are very useful for learning photography skills, analyzing photo quality, or verifying shooting conditions.',
            note: 'The tool will automatically convert shutter speed to an easy-to-read format, such as "1/125 sec" instead of decimal form.'
        },
        {
            title: 'Save and Manage Results',
            description: 'After processing is complete, you can download the EXIF information of each image individually, or use the batch download function to package and download all data. All exported files are saved locally on your device, ensuring data security.',
            note: 'It is recommended to regularly clean the browser cache to free up storage space.'
        }
    ],
    
    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our online EXIF viewer. Now you can easily view and analyze metadata information of images, gaining deep insights into the shooting background and parameter settings of each photo.',
    
    relatedToolsTitle: 'Related Tools You Might Be Interested In',
    relatedTools: [
        {
            name: 'Image Compressor',
            description: 'Reduce image file size without significant loss of quality.',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: 'Image Resizer',
            description: 'Resize images to specific dimensions or scale by percentage.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: 'Image Color Inverter',
            description: 'Online tool to invert image colors and create negative effects.',
            url: 'https://www.ufreetools.com/tool/invert-image-colors'
        },
        {
            name: 'QR Code Generator',
            description: 'Create custom QR codes for URLs, text, contact information, etc.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],
    
    referencesTitle: 'Reference Resources',
    references: [
        {
            name: 'EXIF Standard Specification',
            description: 'Learn about the official standards and technical specifications of EXIF data format',
            url: 'https://en.wikipedia.org/wiki/Exif'
        },
        {
            name: 'Digital Image Metadata',
            description: 'Detailed explanation of image metadata and EXIF information',
            url: 'https://en.wikipedia.org/wiki/Exif'
        },
        {
            name: 'GPS Coordinate System',
            description: 'Learn about GPS coordinate systems and geolocation technology',
            url: 'https://en.wikipedia.org/wiki/Global_Positioning_System'
        }
    ]
}