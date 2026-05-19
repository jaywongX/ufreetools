export default {
    title: 'OBJ to STL Tool: Online 3D Printing Format Converter Usage Guide',
    functionTitle: 'What is OBJ to STL Tool and its uses?',
    intro: 'Our <strong>OBJ to STL tool</strong> is a professional online 3D printing format conversion application that can quickly convert OBJ (Wavefront Object) files to STL (Stereo Lithography) format. STL is the most widely used file format in the 3D printing industry, supported by almost all 3D printers and slicing software. Using our <strong>online OBJ to STL converter</strong>, you can batch process multiple OBJ files, set model units, choose output format (binary or ASCII), and complete format conversion without installing any software.',

    useCasesTitle: 'Common Use Cases for OBJ to STL',
    useCases: [
        'Convert OBJ format 3D models to STL format for 3D printing preparation',
        'Batch convert multiple OBJ files to STL format to improve 3D printing workflow efficiency',
        'Set correct units (millimeters, centimeters, inches, etc.) for 3D printing models to avoid size errors',
        'Convert OBJ files to STL format for use in slicing software that supports STL',
        'Optimize 3D print file format, STL has the widest compatibility',
        'Prepare standardized STL format files for 3D printing service providers',
        'Convert OBJ models to STL format for easy data exchange between different systems',
        'Prepare files for 3D printing, STL format supports all 3D printers'
    ],

    tipTitle: 'Professional Tip:',
    tipContent: 'STL format comes in binary and ASCII varieties. Binary STL files have smaller file sizes and are recommended for most cases. OBJ files contain vertex and normal information, which will be preserved when converting to STL. For 3D printing, millimeters are the recommended unit.',

    conclusion: '<strong>OBJ to STL format conversion</strong> tool is particularly useful for 3D printing enthusiasts, designers, engineers, and users who need to process large numbers of 3D models. By using our online OBJ to STL converter, you can quickly convert universal 3D model formats to 3D printing-specific formats, optimize file size, improve print compatibility, or meet specific 3D printing platform format requirements. Our tool supports batch processing, provides unit setting and format selection features, and all processing is done locally in your browser, ensuring your model data privacy and security.',

    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What OBJ formats does the OBJ to STL tool support?',
            answer: 'Our <strong>online OBJ to STL converter</strong> supports standard OBJ (Wavefront Object) file format. The tool automatically parses vertex, normal, and face data from OBJ files and converts them to STL format. Whether OBJ files exported from 3D modeling software like Blender, Maya, 3ds Max, or downloaded from 3D model libraries, can be smoothly converted to STL format.'
        },
        {
            question: 'What advantages does STL format have over OBJ?',
            answer: 'STL format has several advantages in the 3D printing field: (1) Widest compatibility, supported by all 3D printers and slicing software; (2) Simple file structure with fast processing speed; (3) Binary format has small file size; (4) Is the traditional standard of the 3D printing industry. For 3D printing applications, STL is the preferred format.'
        },
        {
            question: 'How to choose the correct unit when converting?',
            answer: 'Our <strong>OBJ to STL tool</strong> provides four common units: millimeters, centimeters, meters, and inches. OBJ files may contain unit information, but STL files do not contain unit information. We recommend selecting units based on your 3D printer requirements, with millimeters being the most common 3D printing unit. Choosing the wrong unit may cause print size deviations.'
        },
        {
            question: 'What is the difference between binary STL and ASCII STL?',
            answer: 'Binary STL uses binary encoding with small file size and fast processing speed, making it the preferred format for 3D printing. ASCII STL uses text format with larger file size but is easier for humans to read and edit. Our tool supports generating both formats, and we recommend choosing binary STL for most cases for better performance.'
        },
        {
            question: 'Where can converted STL files be used?',
            answer: 'STL format is widely supported by mainstream 3D printing slicing software, including Cura, PrusaSlicer, Simplify3D, 3D Builder (Windows), and more. Converted STL files can be directly imported into these software for slicing and print preparation. STL is the most universal format in the 3D printing industry.'
        },
        {
            question: 'Is the conversion process secure? Will files be uploaded to servers?',
            answer: 'Completely secure! Our tool uses pure front-end technology, and all file processing is done locally in your browser. Your OBJ files will not be uploaded to any server, ensuring privacy and data security. You can confidently process 3D model files containing trade secrets or personal designs.'
        },
        {
            question: 'Will the converted STL file size change?',
            answer: 'Usually it will change. STL format uses simple triangle mesh representation, and file size depends on triangle count. For complex models, STL files may be slightly larger than OBJ; for simple models, STL files may be smaller. Binary STL is typically 30-50% smaller than ASCII STL.'
        }
    ],

    tutorialTitle: 'How to Use OBJ to STL Tool',
    steps: [
        {
            title: 'Upload OBJ Files',
            description: 'First upload the OBJ files you want to convert to STL format. You can <strong>drag and drop files</strong> to the upload area, or <strong>click browse</strong> to select files. Our tool supports standard OBJ file format, and you can upload multiple files at once for batch processing.',
            note: 'Supports uploading multiple OBJ files simultaneously, the tool will automatically parse and process them.'
        },
        {
            title: 'Set Conversion Parameters',
            description: 'In the left control panel, set the <strong>model name</strong> (optional) and <strong>model unit</strong>. Select the <strong>output format</strong> (binary STL or ASCII STL), with binary format recommended for smaller file size. Choosing the correct unit is very important to ensure accurate print dimensions.',
            note: 'If unsure about units, usually selecting millimeters (mm) is the safest choice.'
        },
        {
            title: 'Convert to STL Format',
            description: 'After settings are complete, click the <strong>"Convert to STL"</strong> button to start processing. The tool will process all uploaded OBJ files sequentially, showing progress information during batch processing. The conversion process includes parsing OBJ data, processing vertices and normals, and generating STL file structure.',
            note: 'Please keep the page open during conversion, large files may take a few seconds.'
        },
        {
            title: 'Preview Conversion Results',
            description: 'After conversion is complete, the right output area will display information for all converted STL files. You can view detailed information including <strong>file size comparison</strong>, <strong>triangle count</strong>, and <strong>vertex count</strong>. This information helps confirm whether conversion results meet expectations.',
            note: 'STL files use triangle mesh to represent models, suitable for 3D printing.'
        },
        {
            title: 'Download STL Files',
            description: 'When satisfied with conversion results, you can click the <strong>"Download STL"</strong> button below each file to save individually, or use the <strong>"Batch Download (ZIP)"</strong> button at the top of the output area to package all converted STL files into a ZIP file for one-time download. Downloaded files can be directly imported into slicing software that supports STL.',
            note: 'All processing is done locally in your browser, ensuring your 3D model data privacy and security.'
        }
    ],

    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our OBJ to STL tool. Now you can easily convert OBJ format 3D models to 3D printing-specific STL format, enjoying wider 3D printer compatibility and optimized file size.',

    relatedToolsTitle: 'Related Tools You May Be Interested In',
    relatedTools: [
        {
            name: 'STL to OBJ Tool',
            description: 'Convert STL files to OBJ format, supports normal calculation and texture coordinates, suitable for game development and complex modeling.',
            url: 'https://www.ufreetools.com/tool/stl-to-obj-converter'
        },
        {
            name: 'STL to 3MF Tool',
            description: 'Convert STL files to 3MF format, supports color, material and other rich information, suitable for modern 3D printing.',
            url: 'https://www.ufreetools.com/tool/stl-to-3mf-converter'
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
            name: 'OBJ File Format Specification',
            description: 'Understand the technical specification and file structure of OBJ format',
            url: 'https://en.wikipedia.org/wiki/Wavefront_.obj_file'
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