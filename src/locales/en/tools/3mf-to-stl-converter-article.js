export default {
    title: '3MF to STL Tool: Online 3D Printing Format Converter Usage Guide',
    functionTitle: 'What is the 3MF to STL Tool and its uses?',
    intro: 'Our <strong>3MF to STL tool</strong> is a professional online 3D printing format conversion application that can quickly convert 3MF (3D Manufacturing Format) files to STL (Stereo Lithography) format. While 3MF is the more modern format, STL is still the most widely used file format in the 3D printing industry, supported by almost all 3D printers and slicing software. Using our <strong>online 3MF to STL converter</strong>, you can batch process multiple 3MF files, set model units, choose output format (binary or ASCII), and complete format conversion without installing any software.',

    useCasesTitle: 'Common Use Cases for 3MF to STL',
    useCases: [
        'Convert 3MF format 3D printing models to STL format for wider device compatibility',
        'Batch convert multiple 3MF files to STL format to improve 3D printing workflow efficiency',
        'Convert 3MF files to STL format for use with older 3D printers or slicing software',
        'Extract geometric information from 3MF files and convert to simple STL format',
        'Prepare files for 3D printing devices that do not support 3MF format',
        'Convert 3MF models to STL format for easy data exchange between different systems',
        'Optimize 3D print file format, STL has the widest compatibility',
        'Prepare standardized STL format files for 3D printing service providers'
    ],

    tipTitle: 'Professional Tip:',
    tipContent: '3MF format supports rich information like color and material, which will be lost when converting to STL. If you need to preserve color information, consider using other formats. For 3D printing, millimeters are the recommended unit.',

    conclusion: 'The <strong>3MF to STL format conversion</strong> tool is particularly useful for 3D printing enthusiasts, designers, engineers, and users who need to process large numbers of 3D models. By using our online 3MF to STL converter, you can quickly convert modern 3D printing formats to a universal format, ensuring compatibility with various 3D printing devices and software. Our tool supports batch processing, provides format selection features, and all processing is done locally in your browser, ensuring your model data privacy and security.',

    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What 3MF formats does the 3MF to STL tool support?',
            answer: 'Our <strong>online 3MF to STL converter</strong> supports the standard 3MF (3D Manufacturing Format) file format. 3MF is a ZIP-based XML format that contains model geometry, color, material and other information. Our tool parses 3MF files, extracts geometric data, and converts it to STL format.'
        },
        {
            question: 'What advantages does STL format have over 3MF?',
            answer: 'STL format advantages in 3D printing include: (1) Widest compatibility, supported by all 3D printers and slicing software; (2) Simple file structure with fast processing; (3) The traditional standard of the 3D printing industry; (4) Small binary file size. Although 3MF has richer features, STL has better compatibility.'
        },
        {
            question: 'What information will be lost during conversion?',
            answer: '3MF format supports rich information like color, material, texture, and print parameters, while STL format only contains geometric information (vertices and faces). During conversion, color, material and other information will be lost, only the model geometry is preserved. If this information is important, consider using other conversion methods.'
        },
        {
            question: 'What is the difference between binary STL and ASCII STL?',
            answer: 'Binary STL uses binary encoding with smaller file size and faster processing, making it the preferred format for 3D printing. ASCII STL uses text format with larger file size but easier for humans to read and edit. Our tool supports generating both formats, and we recommend choosing binary STL for most cases for better performance.'
        },
        {
            question: 'Which software can the converted STL files be used in?',
            answer: 'STL format is widely supported by mainstream 3D printing slicing software, including Cura, PrusaSlicer, Simplify3D, 3D Builder (Windows), and more. Converted STL files can be directly imported into these software for slicing and print preparation. STL is the most universal format in the 3D printing industry.'
        },
        {
            question: 'Is the conversion process secure? Will files be uploaded to servers?',
            answer: 'Completely secure! Our tool uses pure front-end technology, and all file processing is done locally in your browser. Your 3MF files will not be uploaded to any server, ensuring privacy and data security. You can confidently process 3D model files containing trade secrets or personal designs.'
        },
        {
            question: 'Will the converted STL file size change?',
            answer: 'Usually it will change. 3MF format uses ZIP compression, so files are typically smaller than STL. After conversion to STL, file size depends on model complexity and triangle count. Binary STL is typically 30-50% smaller than ASCII STL.'
        }
    ],

    tutorialTitle: 'How to Use the 3MF to STL Tool',
    steps: [
        {
            title: 'Upload 3MF Files',
            description: 'First upload the 3MF files you want to convert to STL format. You can <strong>drag and drop files</strong> to the upload area, or <strong>click browse</strong> to select files. Our tool supports standard 3MF file format, and you can upload multiple files at once for batch processing.',
            note: 'Supports uploading multiple 3MF files simultaneously, the tool will automatically parse and process them.'
        },
        {
            title: 'Set Conversion Parameters',
            description: 'In the left control panel, set the <strong>model name</strong> (optional) and <strong>output format</strong> (binary STL or ASCII STL). Binary format is recommended for smaller file size.',
            note: 'If unsure about format, binary STL is usually the safest choice.'
        },
        {
            title: 'Convert to STL Format',
            description: 'After settings are complete, click the <strong>"Convert to STL"</strong> button to start processing. The tool will process all uploaded 3MF files sequentially, showing progress information during batch processing. The conversion process includes parsing 3MF data, extracting geometric information, and generating STL file structure.',
            note: 'Please keep the page open during conversion. Large files may take a few seconds.'
        },
        {
            title: 'Preview Conversion Results',
            description: 'After conversion is complete, the right output area will display information for all converted STL files. You can view detailed information including <strong>file size comparison</strong>, <strong>triangle count</strong>, and <strong>vertex count</strong>. This information helps confirm whether conversion results meet expectations.',
            note: 'STL files use triangle meshes to represent models, suitable for 3D printing.'
        },
        {
            title: 'Download STL Files',
            description: 'When satisfied with conversion results, you can click the <strong>"Download STL"</strong> button below each file to save individually, or use the <strong>"Batch Download (ZIP)"</strong> button at the top of the output area to package all converted STL files into a ZIP file for one-time download. Downloaded files can be directly imported into slicing software that supports STL.',
            note: 'All processing is done locally in your browser, ensuring your 3D model data privacy and security.'
        }
    ],

    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our 3MF to STL tool. Now you can easily convert 3MF format 3D printing models to the universal STL format, enjoying wider 3D printer compatibility.',

    relatedToolsTitle: 'Related Tools You May Be Interested In',
    relatedTools: [
        {
            name: 'STL to 3MF Tool',
            description: 'Convert STL files to 3MF format, supports color, material and other rich information, suitable for modern 3D printing.',
            url: 'https://www.ufreetools.com/tool/stl-to-3mf-converter'
        },
        {
            name: 'STL to OBJ Tool',
            description: 'Convert STL files to OBJ format, supports normal calculation and texture coordinates, suitable for game development and complex modeling.',
            url: 'https://www.ufreetools.com/tool/stl-to-obj-converter'
        },
        {
            name: 'Image to PNG Tool',
            description: 'Convert JPG, WebP and other formats to PNG format, supports transparent backgrounds and batch processing.',
            url: 'https://www.ufreetools.com/tool/image-to-png'
        },
        {
            name: 'Image to JPG Tool',
            description: 'Convert PNG, WebP and other formats to JPG format, suitable for photos and complex images.',
            url: 'https://www.ufreetools.com/tool/image-to-jpg'
        }
    ],

    referencesTitle: 'Reference Resources',
    references: [
        {
            name: '3MF Format Official Specification',
            description: 'Understand the technical specification and file structure of 3MF format',
            url: 'https://3mf.io/specification/'
        },
        {
            name: 'STL File Format Description',
            description: 'Understand the history and file structure of STL format',
            url: 'https://en.wikipedia.org/wiki/STL_%28file_format%29'
        },
        {
            name: '3D Printing File Format Comparison',
            description: 'Characteristics and applicable scenarios of STL, OBJ, 3MF and other formats',
            url: 'https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/'
        }
    ]
}
