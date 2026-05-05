export default {
    title: 'STL to OBJ Tool: Online 3D Printing Format Converter Guide',
    functionTitle: 'What is the STL to OBJ Tool and What is it Used For?',
    intro: 'Our <strong>STL to OBJ Tool</strong> is a professional online 3D printing format conversion application that can quickly convert STL (Stereo Lithography) files to OBJ (Wavefront Object) format. OBJ is a widely used 3D model file format that supports rich information such as vertices, normals, and texture coordinates, and is supported by most 3D modeling software and game engines. Using our <strong>online STL to OBJ converter</strong>, you can batch process multiple STL files, set model units, calculate normal vectors, and complete format conversion without installing any software.',

    useCasesTitle: 'Common Use Cases for STL to OBJ Conversion',
    useCases: [
        'Convert 3D printing models from STL format to OBJ format for broader software compatibility',
        'Batch convert multiple STL files to OBJ format to improve 3D modeling workflow efficiency',
        'Set correct units (millimeters, centimeters, inches, etc.) for 3D printing models to avoid size errors',
        'Convert STL files to OBJ format for use in game engines (Unity, Unreal, etc.)',
        'Calculate model normal vectors to improve rendering quality and lighting effects',
        'Prepare standardized OBJ format files for 3D modeling software',
        'Migrate STL models to OBJ format for easier data exchange between different software',
        'Prepare OBJ format 3D model resources for VR/AR applications'
    ],

    tipTitle: 'Pro Tip:',
    tipContent: 'OBJ format supports normal and texture coordinate information. It is recommended to enable normal calculation during conversion for better rendering results. OBJ files are typically slightly larger than STL files, but offer wider compatibility. For models requiring texture mapping, OBJ is the better choice.',

    conclusion: 'The <strong>STL to OBJ format conversion</strong> tool is particularly useful for 3D printing enthusiasts, game developers, designers, engineers, and anyone who needs to process large volumes of 3D models. By using our online STL to OBJ converter, you can quickly unify 3D model file formats, improve software compatibility, or meet specific platform file format requirements. Our tool supports batch processing, provides unit settings and normal calculation features, and all processing is done locally in your browser to ensure the privacy and security of your model data.',

    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'Which STL formats does the STL to OBJ tool support?',
            answer: 'Our <strong>online STL to OBJ converter</strong> supports two main STL file formats: Binary STL and ASCII STL. The tool automatically detects the file format and processes it accordingly. Whether the STL files are exported from CAD software or downloaded from 3D model libraries, they can be smoothly converted to OBJ format.'
        },
        {
            question: 'What advantages does OBJ format have over STL?',
            answer: 'OBJ format has several advantages over STL: (1) Supports normal and texture coordinate information; (2) Supported by virtually all 3D software and game engines; (3) Supports polygonal faces, not limited to triangles; (4) Can include material and texture references; (5) Text format, easy to edit and debug. For game development and complex modeling, OBJ is the more recommended format.'
        },
        {
            question: 'How do I choose the correct unit during conversion?',
            answer: 'Our <strong>STL to OBJ tool</strong> provides four commonly used units: millimeters, centimeters, meters, and inches. STL files themselves do not contain unit information, so you need to select based on the original model\'s design unit. If unsure, millimeters is the most commonly used unit for 3D printing. Choosing the wrong unit may result in model size deviations.'
        },
        {
            question: 'What is normal calculation and why is it needed?',
            answer: 'Normals are vectors perpendicular to the model surface, used for calculating lighting and rendering effects. STL files typically do not contain normal information, while OBJ format supports normal data. After enabling normal calculation, the tool automatically calculates smooth normals for each vertex, giving the model better lighting performance and a more natural appearance during rendering.'
        },
        {
            question: 'In which software can the converted OBJ files be used?',
            answer: 'OBJ format is widely supported by mainstream 3D software, including Blender, Maya, 3ds Max, ZBrush, Unity, Unreal Engine, and more. The converted OBJ files can be directly imported into these software for further editing, rendering, or game development. OBJ is one of the most versatile 3D model exchange formats.'
        },
        {
            question: 'Is the conversion process secure? Will files be uploaded to a server?',
            answer: 'Completely secure! Our tool uses pure front-end technology, and all file processing is done locally in your browser. Your STL files will not be uploaded to any server, ensuring privacy and data security. You can confidently process 3D model files containing trade secrets or personal designs.'
        },
        {
            question: 'Will the converted OBJ file size change?',
            answer: 'Usually there will be slight changes. OBJ is a text format, and file size depends on model complexity. For simple models, OBJ files may be slightly larger than binary STL; for complex models, due to OBJ\'s more efficient data organization, file sizes may be similar. Enabling normal calculation will increase file size but significantly improve rendering quality.'
        }
    ],

    tutorialTitle: 'How to Use the STL to OBJ Tool',
    steps: [
        {
            title: 'Upload STL Files',
            description: 'First, upload the STL files you want to convert to OBJ format. You can <strong>drag and drop files</strong> to the upload area, or <strong>click to browse</strong> and select files. Our tool supports both Binary and ASCII STL formats, and you can upload multiple files at once for batch processing.',
            note: 'Multiple STL files can be uploaded simultaneously. The tool automatically detects the format and processes them.'
        },
        {
            title: 'Set Conversion Parameters',
            description: 'In the left control panel, set the <strong>Model Name</strong> (optional) and <strong>Model Unit</strong>. It is recommended to enable the <strong>"Calculate Normals"</strong> option for better rendering results. Choosing the correct unit is very important to ensure accurate model dimensions.',
            note: 'If unsure about the unit, millimeters (mm) is usually the safest choice.'
        },
        {
            title: 'Convert to OBJ Format',
            description: 'After setting up, click the <strong>"Convert to OBJ"</strong> button to start processing. The tool will process all uploaded STL files sequentially, and progress information will be displayed during batch processing. The conversion process includes parsing STL data, calculating normals, and generating the OBJ file structure.',
            note: 'Please keep the page open during conversion. Large files may take a few seconds to process.'
        },
        {
            title: 'Preview Conversion Results',
            description: 'After conversion is complete, the right output area will display information for all converted OBJ files. You can view <strong>file size comparison</strong>, <strong>triangle count</strong>, <strong>vertex count</strong>, and other detailed information. This information helps confirm whether the conversion results meet expectations.',
            note: 'OBJ files contain detailed geometric information for easy subsequent editing and processing.'
        },
        {
            title: 'Download OBJ Files',
            description: 'Once satisfied with the conversion results, you can click the <strong>"Download OBJ"</strong> button below each file to save individually, or use the <strong>"Batch Download (ZIP)"</strong> button at the top of the output area to package all converted OBJ files into a single ZIP file for one-time download. Downloaded files can be directly imported into 3D software that supports OBJ.',
            note: 'All processing is done locally in your browser to ensure the privacy and security of your 3D model data.'
        }
    ],

    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our STL to OBJ tool. Now you can easily convert STL format 3D printing models to the universal OBJ format, enjoying broader software compatibility and better rendering results.',

    relatedToolsTitle: 'Related Tools You May Be Interested In',
    relatedTools: [
        {
            name: 'STL to 3MF Tool',
            description: 'Convert STL files to 3MF format with support for color, materials, and more, ideal for modern 3D printing.',
            url: 'https://www.ufreetools.com/tool/stl-to-3mf-converter'
        },
        {
            name: 'Image to PNG Tool',
            description: 'Convert JPG, WebP, and other formats to PNG with support for transparent backgrounds and batch processing.',
            url: 'https://www.ufreetools.com/tool/image-to-png'
        },
        {
            name: 'Image to JPG Tool',
            description: 'Convert PNG, WebP, and other formats to JPG, ideal for photos and complex images.',
            url: 'https://www.ufreetools.com/tool/image-to-jpg'
        },
        {
            name: 'Image Compressor',
            description: 'Reduce image file size without noticeable quality loss, supporting multiple formats.',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        }
    ],

    referencesTitle: 'Reference Resources',
    references: [
        {
            name: 'OBJ File Format Specification',
            description: 'Learn about the technical specification and file structure of the OBJ format',
            url: 'https://en.wikipedia.org/wiki/Wavefront_.obj_file'
        },
        {
            name: 'STL File Format Description',
            description: 'Learn about the history and file structure of the STL format',
            url: 'https://en.wikipedia.org/wiki/STL_%28file_format%29'
        },
        {
            name: '3D Printing File Format Comparison',
            description: 'Features and use cases of STL, OBJ, 3MF, and other formats',
            url: 'https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/'
        }
    ]
}