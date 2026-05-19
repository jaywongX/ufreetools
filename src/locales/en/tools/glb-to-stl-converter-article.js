export default {
    title: 'GLB to STL Tool: Online 3D Model Format Converter Usage Guide',
    functionTitle: 'What is the GLB to STL Tool and its uses?',
    intro: 'Our <strong>GLB to STL tool</strong> is a professional online 3D model format conversion application that can quickly convert GLB (Binary glTF) files to STL (Stereo Lithography) format. GLB is the binary version of glTF, an efficient 3D file format widely used in game development, AR/VR applications, web 3D display and more. STL is the most widely used file format in the 3D printing industry. Using our <strong>online GLB to STL converter</strong>, you can batch process multiple GLB files, set model units, choose output format (binary or ASCII), and complete format conversion without installing any software.',

    useCasesTitle: 'Common Use Cases for GLB to STL',
    useCases: [
        'Convert GLB format game models to STL format for 3D printing preparation',
        'Batch convert multiple GLB files to STL format to improve 3D printing workflow efficiency',
        'Convert GLB files to STL format for making physical models on 3D printers',
        'Extract geometric information from GLB files and convert to simple STL format',
        'Prepare standardized STL format files for 3D printing service providers',
        'Convert GLB models to STL format for easy data exchange between different systems',
        'Optimize 3D print file format, STL has the widest compatibility',
        'Prepare files for 3D printing, STL format supports all 3D printers'
    ],

    tipTitle: 'Professional Tip:',
    tipContent: 'GLB format supports rich information like materials, textures, and animations. When converting to STL, this information will be lost and only the geometric shape is preserved. If material information is important, consider using other formats. For 3D printing, millimeters are the recommended unit.',

    conclusion: 'The <strong>GLB to STL format conversion</strong> tool is particularly useful for 3D printing enthusiasts, game developers, designers, and users who need to materialize digital models. By using our online GLB to STL converter, you can quickly convert 3D models from games and AR/VR applications to 3D printing-specific formats. Our tool supports batch processing, provides format selection features, and all processing is done locally in your browser, ensuring your model data privacy and security.',

    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What GLB formats does the GLB to STL tool support?',
            answer: 'Our <strong>online GLB to STL converter</strong> supports the standard GLB (Binary glTF) file format, including glTF 1.0 and glTF 2.0 versions. The tool parses geometric data from GLB files, including vertices, normals, and face information, and converts it to STL format.'
        },
        {
            question: 'What advantages does STL format have over GLB?',
            answer: 'STL format advantages in 3D printing include: (1) Widest compatibility, supported by all 3D printers and slicing software; (2) Simple file structure with fast processing; (3) The traditional standard of the 3D printing industry; (4) Focuses on geometric information with no complex features. For 3D printing applications, STL is the preferred format.'
        },
        {
            question: 'What information will be lost during conversion?',
            answer: 'GLB format supports rich information like materials, textures, animations, and skeletons, while STL format only contains geometric information (vertices and faces). During conversion, material, texture, and animation information will be lost, only the model geometry is preserved. If this information is important, consider using other conversion methods.'
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
            answer: 'Completely secure! Our tool uses pure front-end technology, and all file processing is done locally in your browser. Your GLB files will not be uploaded to any server, ensuring privacy and data security. You can confidently process 3D model files containing trade secrets or personal designs.'
        },
        {
            question: 'Will the converted STL file size change?',
            answer: 'Usually it will change. GLB format uses binary encoding and compression technology, so file size is typically smaller than STL. After conversion to STL, file size depends on model complexity and triangle count. Binary STL is typically 30-50% smaller than ASCII STL.'
        }
    ],

    tutorialTitle: 'How to Use the GLB to STL Tool',
    steps: [
        {
            title: 'Upload GLB Files',
            description: 'First upload the GLB files you want to convert to STL format. You can <strong>drag and drop files</strong> to the upload area, or <strong>click browse</strong> to select files. Our tool supports standard GLB file format, and you can upload multiple files at once for batch processing.',
            note: 'Supports uploading multiple GLB files simultaneously, the tool will automatically parse and process them.'
        },
        {
            title: 'Set Conversion Parameters',
            description: 'In the left control panel, set the <strong>model name</strong> (optional) and <strong>output format</strong> (binary STL or ASCII STL). Binary format is recommended for smaller file size.',
            note: 'If unsure about format, binary STL is usually the safest choice.'
        },
        {
            title: 'Convert to STL Format',
            description: 'After settings are complete, click the <strong>"Convert to STL"</strong> button to start processing. The tool will process all uploaded GLB files sequentially, showing progress information during batch processing. The conversion process includes parsing GLB data, extracting geometric information, and generating STL file structure.',
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
    successContent: 'You have successfully learned how to use our GLB to STL tool. Now you can easily convert GLB format 3D game models to 3D printing-specific STL format, achieving the conversion from digital models to physical objects.',

    relatedToolsTitle: 'Related Tools You May Be Interested In',
    relatedTools: [
        {
            name: 'STL to GLB Tool',
            description: 'Convert STL files to GLB format, supports material color settings, suitable for game development and AR/VR applications.',
            url: 'https://www.ufreetools.com/tool/stl-to-glb-converter'
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
            name: 'glTF Format Official Specification',
            description: 'Understand the technical specification and file structure of glTF/GLB format',
            url: 'https://www.khronos.org/gltf/'
        },
        {
            name: 'STL File Format Description',
            description: 'Understand the history and file structure of STL format',
            url: 'https://en.wikipedia.org/wiki/STL_%28file_format%29'
        },
        {
            name: '3D File Format Comparison',
            description: 'Characteristics and applicable scenarios of STL, OBJ, glTF and other formats',
            url: 'https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/'
        }
    ]
}
