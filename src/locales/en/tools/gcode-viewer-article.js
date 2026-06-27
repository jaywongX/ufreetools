export default {
    title: 'GCode Viewer Tool: Online 3D Print Preview Guide',
    functionTitle: 'What is the GCode Viewer Tool and Its Uses?',
    intro: 'Our <strong>GCode Viewer</strong> is a professional online 3D print preview tool that can quickly load and preview GCode format 3D print files. No software installation required - just open in your browser to view 3D print paths from any angle. Using our <strong>online GCode viewer</strong>, you can rotate, zoom, and pan to view print paths, check print settings like layer height and temperature, view print process layer by layer, adjust display settings, and export high-resolution screenshots. It\'s an essential tool for 3D printing enthusiasts and designers.',

    useCasesTitle: 'Common Use Cases for GCode Viewer',
    useCases: [
        'Preview GCode files before 3D printing to check if print paths are correct and error-free',
        'Check print settings like layer height, temperature, and print speed to ensure they meet requirements',
        'View print process layer by layer to check path and infill for each layer',
        'Use path visualization to check travel moves and retraction settings are reasonable',
        'Take screenshots of 3D print paths for product showcases, social media sharing, or documentation',
        'Quickly view GCode files without installing slicing software',
        'Batch preview multiple GCode files to quickly filter needed print files',
        'Showcase 3D print path designs to clients or team members without professional software'
    ],

    tipTitle: 'Professional Tip:',
    tipContent: 'Use the left mouse button to rotate the view, right button to pan, and scroll wheel to zoom. Double-click to automatically center. Use the layer control slider to view print process layer by layer, and the play animation function to automatically display each layer\'s print path.',

    conclusion: 'The <strong>GCode Viewer</strong> tool is particularly useful for 3D printing enthusiasts, designers, engineers, and anyone who needs to view 3D print files. Using our online GCode viewer, you can view GCode format 3D print files anytime, anywhere, without installing any professional software. Our tool supports various view controls, rendering settings, and export functions. All processing is done locally in your browser to ensure your print data privacy and security.',

    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What file formats does the GCode Viewer support?',
            answer: 'Our <strong>online GCode viewer</strong> supports GCode format 3D print files. GCode is the standard instruction format used by 3D printers, containing G0, G1 movement commands and print setting information. The tool automatically parses GCode files to extract print paths and setting information.'
        },
        {
            question: 'How to rotate and zoom the 3D print path?',
            answer: 'Use the left mouse button to drag and rotate the view to see different angles of the print path. Use the scroll wheel to zoom in for details or zoom out for the overall view. Use the right mouse button to drag and pan the view. Double-click to automatically center the print path and reset the view. These operations allow you to view the 3D print path from all directions.'
        },
        {
            question: 'What information does the GCode information panel display?',
            answer: 'The GCode information panel displays the following key data: (1) Total Lines - total number of lines in the GCode file; (2) Total Commands - total number of parsed movement commands; (3) File Size - size of the original file; (4) Estimated Time - estimated print time calculated from the path; (5) Print Dimensions - XYZ axis print dimensions; (6) Print Settings - including layer height, nozzle temperature, bed temperature, etc. This information helps you understand the basic situation of the print file.'
        },
        {
            question: 'What is the layer control function? What is it used for?',
            answer: 'The layer control function allows you to view the print path layer by layer. Use the layer control slider to select displaying paths up to a certain layer, previous/next layer buttons to switch layer by layer, and the play animation function to automatically display each layer\'s print process. This is very useful for checking each layer\'s print path, infill situation, and support structure, helping you discover potential problems before printing.'
        },
        {
            question: 'Can I export screenshots of the 3D print path?',
            answer: 'Yes! Our tool supports one-click export of high-resolution screenshots from the current viewing angle. You can choose PNG or JPG format, and also select whether to export with a transparent background (convenient for PPT or documents). The screenshot function captures only the 3D view content without UI elements, perfect for product showcases or social media sharing.'
        },
        {
            question: 'Is the preview process secure? Will files be uploaded to servers?',
            answer: 'Completely secure! Our tool uses pure front-end technology, and all file processing is done locally in your browser. Your GCode files will not be uploaded to any server, ensuring privacy and data security. You can confidently preview 3D print files containing trade secrets or personal designs.'
        },
        {
            question: 'What size GCode files are supported?',
            answer: 'Our tool supports GCode files of various sizes, from small files of a few KB to large print files of hundreds of MB. For large files, the first load may take a few seconds because all print commands need to be parsed. The tool processes everything locally in the browser without consuming server resources.'
        }
    ],

    tutorialTitle: 'Usage Tutorial',
    steps: [
        {
            title: 'Upload GCode File',
            description: 'Click the upload area or directly drag and drop GCode files to the designated area. Supports batch uploading multiple files.',
            note: 'Supports standard GCode format files, including GCode files generated by various slicing software.'
        },
        {
            title: 'View Print Path',
            description: 'After upload, the 3D print path is automatically displayed. Use the left mouse button to drag and rotate the view, scroll wheel to zoom, right button to drag and pan.',
            note: 'Green lines indicate normal print paths, red lines indicate retraction paths.'
        },
        {
            title: 'View Print Information',
            description: 'View GCode information in the left panel, including print dimensions, layer height, temperature, and other settings.',
            note: 'This information helps confirm whether print parameters meet requirements.'
        },
        {
            title: 'View Layer by Layer',
            description: 'Use the layer control function to view the print process layer by layer. You can play animation to automatically display each layer.',
            note: 'Layer-by-layer viewing helps discover potential problems in each layer.'
        },
        {
            title: 'Adjust Settings and Export',
            description: 'Adjust display settings as needed, such as colors, line width, etc. Then click the screenshot button to export images.',
            note: 'You can choose PNG or JPG format, with support for transparent background export.'
        }
    ],

    successTitle: 'Success!',
    successContent: 'You have successfully mastered the use of the GCode Viewer. Now you can start using this tool to preview and analyze your 3D print files.',

    relatedToolsTitle: 'Related Tools',
    relatedTools: [
        {
            name: 'STL/3MF Model Viewer',
            description: 'Preview STL and 3MF format 3D model files online',
            url: '/tools/stl-3mf-model-viewer'
        },
        {
            name: 'STL to 3MF Converter',
            description: 'Convert STL files to 3MF format',
            url: '/tools/stl-to-3mf-converter'
        },
        {
            name: 'STL to OBJ Converter',
            description: 'Convert STL files to OBJ format',
            url: '/tools/stl-to-obj-converter'
        },
        {
            name: 'OBJ to STL Converter',
            description: 'Convert OBJ files to STL format',
            url: '/tools/obj-to-stl-converter'
        }
    ],

    referencesTitle: 'Reference Resources',
    references: [
        {
            name: 'GCode Basics Tutorial',
            description: 'Learn about GCode basic syntax and common commands',
            url: 'https://en.wikipedia.org/wiki/G-code'
        },
        {
            name: '3D Printing Slicing Software Comparison',
            description: 'Understand the features and usage of different slicing software',
            url: 'https://all3dp.com/1/best-3d-slicer-software/'
        },
        {
            name: '3D Printing Troubleshooting Guide',
            description: 'Solve common 3D printing problems',
            url: 'https://www.simplify3d.com/resources/print-quality-troubleshooting/'
        }
    ]
};