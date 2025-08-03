export default {
    title: 'AI Age & Gender Estimator: Analyze Faces in Your Photos',
    intro: 'Our <strong>AI Age & Gender Estimator</strong> is a powerful online tool that uses advanced facial recognition technology to analyze faces in your photos and provide estimates of age and gender. Whether you\'re curious about how old you look in a particular photo or want to analyze multiple faces in a group picture, this tool offers quick and accurate results without requiring any technical expertise.',
    
    whatIsTitle: 'What is the AI Age & Gender Estimator?',
    howItWorksTitle: 'How Does It Work?',
    howItWorksContent: 'The AI Age & Gender Estimator uses face-api.js, a JavaScript API that implements convolutional neural networks to detect faces and analyze facial features. The tool first identifies faces in your uploaded images, then applies pre-trained machine learning models to estimate the age and gender of each detected face. All processing happens directly in your browser, ensuring your photos remain private and are never uploaded to any servers.',
    
    tipTitle: 'Pro Tip:',
    tipContent: 'For the most accurate results, upload photos with clear, well-lit faces looking directly at the camera. The tool works best with front-facing portraits that have minimal obstruction or extreme angles.',
    
    featuresTitle: 'Key Features',
    features: [
        'Accurate face detection across various lighting conditions and angles',
        'Reasonably accurate age estimation for most age groups',
        'Gender classification with confidence percentage',
        'Support for multiple faces in a single image',
        'Fun mode with cartoon-style visualizations and age-appropriate effects',
        'Batch processing to analyze multiple photos at once'
    ],
    
    useCasesTitle: 'When to Use This Tool',
    useCase1Title: 'Personal Curiosity',
    useCase1Content: 'Satisfy your curiosity about how old you look in different photos or how your appearance has changed over time.',
    
    useCase2Title: 'Content Creation',
    useCase2Content: 'Content creators can use this tool to understand the demographic perception of people featured in their visual content.',
    
    useCase3Title: 'Photography',
    useCase3Content: 'Photographers can analyze how lighting, angles, and post-processing affect the perceived age of their subjects.',
    
    useCase4Title: 'Entertainment and Fun',
    useCase4Content: 'Use the fun mode to create entertaining visuals for social media posts or family gatherings.',
    
    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'How accurate is the age and gender estimation?',
            answer: 'The AI provides estimates based on visual features and patterns it has learned from training data. While generally accurate, results may vary depending on factors such as lighting, image quality, facial expressions, makeup, and individual variations. The tool typically achieves better accuracy for adults than for very young children or elderly people.'
        },
        {
            question: 'Is my data safe when using this tool?',
            answer: 'Yes, all processing happens locally in your browser. Your photos are never uploaded to any server, ensuring complete privacy. The tool uses client-side JavaScript to analyze images, and no data is stored or transmitted elsewhere.'
        },
        {
            question: 'Why does the tool sometimes give different age estimates for the same person?',
            answer: 'Age estimation can vary based on factors like lighting, angle, facial expression, makeup, and image quality. Even small changes in these factors can affect how the AI interprets facial features. For the most consistent results, use photos with similar lighting and positioning.'
        },
        {
            question: 'What\'s the difference between Standard Mode and Fun Mode?',
            answer: 'Standard Mode provides straightforward analysis with clean visual indicators showing the estimated age and gender. Fun Mode adds cartoon-style effects and age-appropriate visual elements to make the results more entertaining and shareable on social media.'
        }
    ],
    
    tutorialTitle: 'How to Use the AI Age & Gender Estimator',
    steps: [
        {
            title: 'Upload Your Photos',
            description: 'Start by uploading the photos you want to analyze. You can drag and drop files directly to the upload area, or click to browse your device. The tool supports common image formats including JPG, PNG, WEBP, and BMP.',
            note: 'You can upload multiple photos at once for batch processing.'
        },
        {
            title: 'Select Analysis Mode',
            description: 'Choose between Standard Mode for straightforward analysis or Fun Mode for entertaining visualizations with cartoon-style effects.',
            note: 'Fun Mode is great for creating shareable content for social media.'
        },
        {
            title: 'Analyze Photos',
            description: 'Click the "Analyze Photos" button and wait a few seconds while our AI detects faces and estimates the age and gender of each person in your photos.',
            note: 'Processing time depends on the number and size of your photos, as well as your device\'s performance.'
        },
        {
            title: 'Review and Download Results',
            description: 'Examine the analysis results for each detected face, including estimated age, gender, and confidence level. You can zoom in/out and pan around the image to see details. Select your preferred export format and download individual images or all processed photos as a ZIP file.',
            note: 'For social media sharing, JPEG or WEBP formats with medium-high quality settings offer a good balance between quality and file size.'
        }
    ],
    
    successTitle: 'Ready to Try It?',
    successContent: 'Upload your photos now and see what our AI Age & Gender Estimator can reveal about the faces in your images!',
    
    relatedToolsTitle: 'Related Tools You Might Like',
    relatedTools: [
        {
            name: 'Imgly AI Background Remover',
            description: 'Intelligently remove image backgrounds using Imgly AI large model, with support for batch processing and multiple output formats.',
            url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
        },
        {
            name: 'AI Profile Photo Analyzer - Professional Headshot Assessment Tool',
            description: 'Free online tool that analyzes your personal photos and ID photos. Get AI-driven feedback on head posture, smile, eye contact, and lighting quality to improve your professional photos.',
            url: 'https://www.ufreetools.com/tool/ai-profile-photo-analyzer'
        }
    ],
    
    techPrivacyTitle: 'Technology and Privacy',
    techPrivacyContent1: 'The AI Age & Gender Estimator uses face-api.js, which implements TinyFaceDetector and AgeGenderNet models to analyze facial features. These lightweight neural networks are designed to run efficiently in web browsers while providing reasonable accuracy.',
    techPrivacyContent2: 'We prioritize your privacy by processing all images locally in your browser. Your photos are never sent to any server for analysis, ensuring your personal data and images remain completely private. The tool operates entirely client-side, making it secure and responsive even without an internet connection once the page has loaded.'
};