export default {
    title: 'STL/3MF Model Viewer Tool: Online 3D Model Viewer Guide',
    functionTitle: 'What is the STL/3MF Model Viewer Tool and Its Uses?',
    intro: 'Our <strong>STL/3MF Model Viewer</strong> is a professional online 3D model viewer that can quickly load and preview STL (Stereo Lithography) and 3MF (3D Manufacturing Format) 3D model files. No software installation required - just open in your browser to view 3D models from any angle. Using our <strong>online 3D model viewer</strong>, you can rotate, zoom, and pan models, view detailed information such as vertex count, face count, and dimensions. You can also switch to wireframe mode, adjust material colors, and export high-resolution screenshots. It\'s an essential tool for 3D printing enthusiasts and designers.',

    useCasesTitle: 'Common Use Cases for STL/3MF Model Preview',
    useCases: [
        'Preview STL models before 3D printing to check if the model is complete and free of errors',
        'View color, material, and other rich information in 3MF models to confirm print results',
        'Quickly check 3D model dimensions and proportions to ensure they meet printing requirements',
        'Use wireframe mode to inspect model mesh topology and identify potential issues',
        'Take screenshots of 3D models for product showcases, social media sharing, or documentation',
        'Quickly view model files without installing 3D modeling software',
        'Batch preview multiple 3D model files to quickly filter needed models',
        'Showcase 3D model designs to clients or team members without professional software'
    ],

    tipTitle: 'Professional Tip:',
    tipContent: 'Use the left mouse button to rotate the model, right button to pan the view, and scroll wheel to zoom. Double-click the model to automatically center it. For large model files, the first load may take a few seconds.',

    conclusion: 'The <strong>STL/3MF Model Viewer</strong> tool is particularly useful for 3D printing enthusiasts, designers, engineers, and anyone who needs to view 3D models. Using our online 3D model viewer, you can view STL and 3MF format 3D models anytime, anywhere, without installing any professional software. Our tool supports various view controls, rendering settings, and export functions. All processing is done locally in your browser to ensure your model data privacy and security.',

    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What file formats does the STL/3MF Model Viewer support?',
            answer: 'Our <strong>online 3D model viewer</strong> supports two main 3D printing file formats: STL (including binary and ASCII formats) and 3MF format. STL is the most commonly used 3D printing format, while 3MF is a next-generation format that supports color, material, and other rich information. The tool automatically detects the file format and processes accordingly.'
        },
        {
            question: 'How to rotate and zoom the 3D model?',
            answer: 'Use the left mouse button to drag and rotate the model to view different angles. Use the scroll wheel to zoom in for details or zoom out for the overall view. Use the right mouse button to drag and pan the view. Double-click the model to automatically center it and reset the view. These operations allow you to view the 3D model from all directions.'
        },
        {
            question: 'What information does the model information panel display?',
            answer: 'The model information panel displays the following key data: (1) Vertices - total number of model vertices; (2) Faces/Triangles - number of triangular faces; (3) File Size - size of the original file; (4) Physical Dimensions - model length, width, and height (XYZ axes). This information helps you understand the model complexity and dimensions.'
        },
        {
            question: 'What is wireframe mode? What is it used for?',
            answer: 'Wireframe mode displays the mesh wireframe structure of the model without showing solid surfaces. This is very useful for inspecting the model\'s topology, helping you discover potential issues such as broken faces, overlapping faces, or holes. Using wireframe mode to check models before 3D printing can prevent print failures or quality issues.'
        },
        {
            question: 'Can I export screenshots of the 3D model?',
            answer: 'Yes! Our tool supports one-click export of high-resolution screenshots from the current viewing angle. You can choose PNG or JPG format, and also select whether to export with a transparent background (convenient for PPT or documents). The screenshot function captures only the 3D view content without UI elements, perfect for product showcases or social media sharing.'
        },
        {
            question: 'Is the preview process secure? Will files be uploaded to servers?',
            answer: 'Completely secure! Our tool uses pure front-end technology, and all file processing is done locally in your browser. Your STL and 3MF files will not be uploaded to any server, ensuring privacy and data security. You can confidently preview 3D model files containing trade secrets or personal designs.'
        },
        {
            question: 'What size 3D model files are supported?',
            answer: 'File size limits mainly depend on your device performance and browser memory. Generally, our tool can handle STL files of tens of MB and larger 3MF files. For very large model files (over 100MB), loading times may be longer. We recommend using devices with better performance. If you encounter loading issues, try refreshing the page or using smaller files.'
        }
    ],

    tutorialTitle: 'How to Use the STL/3MF Model Viewer',
    steps: [
        {
            title: 'Upload 3D Model Files',
            description: 'First upload the STL or 3MF files you want to preview. You can <strong>drag and drop files</strong> to the upload area, or <strong>click browse</strong> to select files. Our tool supports both binary and ASCII STL formats, as well as 3MF format. You can upload multiple files at once for batch preview.',
            note: 'Supports uploading multiple files simultaneously, the tool will automatically detect format and load.'
        },
        {
            title: 'View 3D Model',
            description: 'After uploading, the 3D view will automatically load and display the model. Use <strong>left mouse button to drag</strong> and rotate, <strong>scroll wheel</strong> to zoom, <strong>right mouse button to drag</strong> and pan. <strong>Double-click the model</strong> to automatically center it. The model will automatically calculate its bounding box and center display.',
            note: 'First load of large models may take a few seconds, please be patient.'
        },
        {
            title: 'View Model Information',
            description: 'The right panel displays detailed model information, including <strong>vertex count</strong>, <strong>face count</strong>, <strong>file size</strong>, and <strong>physical dimensions</strong>. This information helps you understand the model complexity and dimensions, confirming whether it meets 3D printing requirements.',
            note: 'For 3MF files, additional information such as colors and materials will also be displayed.'
        },
        {
            title: 'Adjust View and Render Settings',
            description: 'Use the control options in the right panel to adjust view effects. You can enable <strong>wireframe mode</strong> to inspect mesh structure, enable <strong>auto-rotate</strong> to showcase the model, adjust <strong>background color</strong> and <strong>material color</strong>, and display <strong>grid</strong> and <strong>axes</strong> for reference.',
            note: 'Wireframe mode is particularly useful for checking if the model has broken faces or topology issues.'
        },
        {
            title: 'Export Screenshot',
            description: 'After adjusting the viewing angle, click the <strong>"Export Screenshot"</strong> button to save a high-resolution screenshot of the current view. You can choose PNG or JPG format, and also select <strong>transparent background</strong> export (convenient for PPT or documents). The screenshot only includes the 3D view content without UI elements.',
            note: 'The screenshot function is perfect for product showcases, social media sharing, or documentation.'
        }
    ],

    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our STL/3MF Model Viewer. Now you can view 3D models online anytime, anywhere, without installing any professional software.',

    relatedToolsTitle: 'Related Tools You May Be Interested In',
    relatedTools: [
        {
            name: 'STL to 3MF Tool',
            description: 'Convert STL files to 3MF format with color, material, and other rich information for modern 3D printing.',
            url: 'https://www.ufreetools.com/tool/stl-to-3mf-converter'
        },
        {
            name: 'STL to OBJ Tool',
            description: 'Convert STL files to OBJ format with normal calculation support, suitable for game development and 3D modeling.',
            url: 'https://www.ufreetools.com/tool/stl-to-obj-converter'
        },
        {
            name: 'Image to PNG Tool',
            description: 'Convert JPG, WebP and other formats to PNG with transparent background and batch processing support.',
            url: 'https://www.ufreetools.com/tool/image-to-png'
        },
        {
            name: 'Image Compressor',
            description: 'Reduce image file size without noticeable quality loss, supports multiple formats.',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        }
    ],

    referencesTitle: 'Reference Resources',
    references: [
        {
            name: 'STL File Format Description',
            description: 'Learn about the history and file structure of the STL format',
            url: 'https://en.wikipedia.org/wiki/STL_%28file_format%29'
        },
        {
            name: '3MF Format Official Specification',
            description: 'Learn about the technical specification and file structure of the 3MF format',
            url: 'https://3mf.io/specification/'
        },
        {
            name: 'Three.js Official Documentation',
            description: 'Learn about the technical details of the 3D rendering engine',
            url: 'https://threejs.org/docs/'
        }
    ]
}