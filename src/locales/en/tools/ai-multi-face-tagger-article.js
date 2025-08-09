export default {
    title: 'AI Multi-Face Tagger: Identify and Label People in Photos',
    whatIsTitle: 'What is the AI Multi-Face Tagger?',
    intro: 'Our <strong>AI Multi-Face Tagger</strong> is a powerful online tool that uses advanced facial recognition technology to detect multiple faces in photos and allows you to add labels for each person. Whether you\'re organizing photo collections, creating classroom seating charts, or simply want to identify everyone in a group photo, this tool provides a quick and efficient way to tag faces without any technical expertise required.',
    
    howItWorksTitle: 'How Does It Work?',
    howItWorksContent: 'The AI Multi-Face Tagger uses face-api.js, a JavaScript API that implements convolutional neural networks to detect faces and analyze facial features. The tool first identifies all faces in your uploaded image, then allows you to add custom labels or names for each detected face. All processing happens directly in your browser, ensuring your photos remain private and are never uploaded to any server.',
    
    tipTitle: 'Pro Tip:',
    tipContent: 'For best results, upload photos with clear, well-lit faces that are facing the camera. The tool works best with portraits that are front-facing with minimal obstructions or extreme angles.',
    
    featuresTitle: 'Key Features',
    features: [
        'Accurate detection of multiple faces in a single image',
        'Custom labeling system to tag each detected face',
        'Support for batch processing of multiple photos',
        'Option to export images with visible face label overlays',
        'JSON export option for integration with photo management systems',
        'Privacy-centered design with all processing done locally in your browser'
    ],
    
    useCasesTitle: 'When to Use This Tool',
    useCase1Title: 'Photo Organization',
    useCase1Content: 'Quickly identify and tag people in photo collections to make them searchable and more organized.',
    
    useCase2Title: 'Classroom Management',
    useCase2Content: 'Teachers can use this tool to create labeled class photos to help remember student names or create seating charts.',
    
    useCase3Title: 'Event Photography',
    useCase3Content: 'Event photographers can tag participants in group photos for easier distribution and identification.',
    
    useCase4Title: 'Social Media Content',
    useCase4Content: 'Content creators can label collaborators or team members in promotional photos for proper attribution.',
    
    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'How accurate is the face detection?',
            answer: 'The AI provides generally accurate face detection in most cases. However, results may vary depending on factors such as lighting, image quality, facial angles, and occlusions. The tool typically achieves better accuracy with clear, front-facing portraits in good lighting conditions.'
        },
        {
            question: 'Is my data safe when using this tool?',
            answer: 'Yes, all processing is done locally in your browser. Your photos are never uploaded to any server, ensuring complete privacy. The tool uses client-side JavaScript to analyze images and doesn\'t store or transmit any data.'
        },
        {
            question: 'What happens if some faces aren\'t detected?',
            answer: 'Face detection depends on various factors including lighting, angles, and image quality. If some faces aren\'t detected, try uploading a different photo with better lighting and more direct facial angles. Very small faces or partially obscured faces may be difficult for the AI to detect.'
        },
        {
            question: 'Can I export the face tagging data for use in other applications?',
            answer: 'Yes, our tool provides a JSON export option that includes coordinates for each detected face along with your custom labels. This data can be imported into various photo management systems or used for custom applications. You can also download images with visible face label overlays.'
        }
    ],
    
    tutorialTitle: 'How to Use the AI Multi-Face Tagger',
    steps: [
        {
            title: 'Upload Your Photo',
            description: 'Start by uploading the photo you want to analyze. You can drag and drop files directly onto the upload area or click to browse your device. The tool supports common image formats including JPG, PNG, WEBP, and BMP.',
            note: 'You can upload multiple photos at once for batch processing.'
        },
        {
            title: 'Detect Faces',
            description: 'Click the "Detect Faces" button and wait a few seconds for our AI to identify all faces in the photo. Each detected face will be highlighted with a box and labeled with a number for easy reference.',
            note: 'Processing time depends on the number and size of photos, as well as your device\'s performance.'
        },
        {
            title: 'Add Labels',
            description: 'For each detected face, enter a name or label in the corresponding input field. As you type, the labels will automatically update on the image preview, letting you see what the final result will look like.',
            note: 'You can leave some faces untagged if you prefer, or clear labels by clicking the X button.'
        },
        {
            title: 'Export Your Results',
            description: 'Choose your preferred export format and options. You can include face label overlays directly on the image and/or export a JSON file containing all face coordinates and labels. Select your preferred image format and, for JPG files, adjust the quality as needed. Finally, download individual images or use the batch download option to get all processed photos as a ZIP file.',
            note: 'The JSON export is particularly useful if you plan to import the face data into other applications or photo management systems.'
        }
    ],
    
    successTitle: 'Ready to Try It?',
    successContent: 'Upload your photos now and see how our AI Multi-Face Tagger can help you identify and label people in your images!',
    
    relatedToolsTitle: 'Related Tools You Might Like',
    relatedTools: [
        {
            name: 'Imgly AI Background Remover',
            description: 'Intelligently remove image backgrounds using Imgly AI large model, with support for batch processing and multiple output formats.',
            url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
        },
        {
            name: 'AI Profile Photo Analyzer',
            description: 'Get AI-powered feedback on your personal and professional photos to improve your professional image.',
            url: 'https://www.ufreetools.com/tool/ai-profile-photo-analyzer'
        },
        {
            name: 'AI Age and Gender Estimator',
            description: 'Use AI technology to analyze faces in photos and estimate age and gender.',
            url: 'https://www.ufreetools.com/tool/ai-age-gender-estimator'
        },
    ],
    
    techDetailsTitle: 'Technical Details',
    techDetailsContent: 'The AI Multi-Face Tagger uses face-api.js, which implements TinyFaceDetector and FaceLandmark68 models to analyze facial features. These lightweight neural networks are designed to run efficiently in web browsers while providing reasonable accuracy.',
    privacyNote: 'We prioritize your privacy by processing all images locally in your browser. Your photos are never sent to any server for analysis, ensuring your personal data and images remain completely private. The tool runs entirely client-side, making it secure and responsive even without an internet connection after the page has loaded.'
};