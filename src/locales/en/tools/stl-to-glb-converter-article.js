export default {
    title: 'STL to GLB Tool: Online 3D Model Format Converter Usage Guide',
    functionTitle: 'What is the STL to GLB Tool and its uses?',
    intro: 'Our <strong>STL to GLB tool</strong> is a professional online 3D model format conversion application that can quickly convert STL (Stereo Lithography) files to GLB (Binary glTF) format. GLB is the binary version of glTF, an efficient 3D file format widely used in game development, AR/VR applications, web 3D display and more. Using our <strong>online STL to GLB converter</strong>, you can batch process multiple STL files, set model units, adjust material colors, and complete format conversion without installing any software.',

    useCasesTitle: 'Common Use Cases for STL to GLB',
    useCases: [
        'Convert STL format 3D printing models to GLB format for game development or AR/VR applications',
        'Batch convert multiple STL files to GLB format to improve 3D content production efficiency',
        'Prepare GLB format model files for web 3D display',
        'Convert STL files to GLB format for use in game engines like Unity, Unreal Engine',
        'Prepare optimized 3D model resources for AR/VR applications',
        'Convert STL models to GLB format with material and texture support',
        'Prepare lightweight 3D model formats for mobile applications',
        'Migrate STL models to GLB format for easy sharing across different platforms'
    ],

    tipTitle: 'Professional Tip:',
    tipContent: 'GLB format supports rich information including materials, textures, and animations, with small file sizes and fast loading. STL files only contain geometric information, so material colors can be added when converting to GLB. For web applications, GLB is the preferred format.',

    conclusion: 'The <strong>STL to GLB format conversion</strong> tool is particularly useful for game developers, AR/VR designers, web developers, and users who need to process 3D models. By using our online STL to GLB converter, you can quickly convert 3D printing models to formats suitable for games and AR/VR applications, with material information support and file size optimization. Our tool supports batch processing, provides material color settings, and all processing is done locally in your browser, ensuring your model data privacy and security.',

    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What STL formats does the STL to GLB tool support?',
            answer: 'Our <strong>online STL to GLB converter</strong> supports both main STL file formats: binary STL and ASCII STL. The tool automatically detects the file format and processes accordingly. Whether STL files exported from CAD software or downloaded from 3D model libraries, they can be smoothly converted to GLB format.'
        },
        {
            question: 'What advantages does GLB format have over STL?',
            answer: 'GLB format has several advantages over STL: (1) Supports material, texture, and animation information; (2) Uses binary format with small file size; (3) Fast loading, suitable for real-time rendering; (4) Supported by mainstream game engines and AR/VR platforms; (5) Supports PBR (Physically Based Rendering) materials. For games and AR/VR applications, GLB is the more recommended format.'
        },
        {
            question: 'How to set material color during conversion?',
            answer: 'Our <strong>STL to GLB tool</strong> provides material color settings. You can choose preset colors or customize RGB color values. The set color will be applied to the entire model surface. If you need more complex material effects, you can use 3D software for further editing after importing the GLB file.'
        },
        {
            question: 'Which software can the converted GLB files be used in?',
            answer: 'GLB format is widely supported by mainstream game engines and 3D platforms, including Unity, Unreal Engine, Blender, Three.js, Babylon.js, and more. Converted GLB files can be directly imported into these software for further editing, rendering, or integration into games and AR/VR applications.'
        },
        {
            question: 'Is the conversion process secure? Will files be uploaded to servers?',
            answer: 'Completely secure! Our tool uses pure front-end technology, and all file processing is done locally in your browser. Your STL files will not be uploaded to any server, ensuring privacy and data security. You can confidently process 3D model files containing trade secrets or personal designs.'
        },
        {
            question: 'Will the converted GLB file size change?',
            answer: 'Usually it will change. GLB format uses binary encoding and compression technology, with file size typically smaller than STL. For simple models, GLB files may be slightly larger than binary STL (due to including material information); for complex models, GLB files are usually smaller. Specific size depends on model complexity and material settings.'
        },
        {
            question: 'What 3D features does GLB format support?',
            answer: 'GLB format supports many 3D features: geometric data, PBR materials, texture mapping, skeletal animation, morph targets, scene hierarchies, and more. Based on the glTF 2.0 standard, it is the recommended format for Web 3D and real-time rendering.'
        }
    ],

    tutorialTitle: 'How to Use the STL to GLB Tool',
    steps: [
        {
            title: 'Upload STL Files',
            description: 'First upload the STL files you want to convert to GLB format. You can <strong>drag and drop files</strong> to the upload area, or <strong>click browse</strong> to select files. Our tool supports both binary and ASCII STL formats, and you can upload multiple files at once for batch processing.',
            note: 'Supports uploading multiple STL files simultaneously, the tool will automatically recognize formats and process them.'
        },
        {
            title: 'Set Conversion Parameters',
            description: 'In the left control panel, set the <strong>model name</strong> (optional) and <strong>model unit</strong>. Choose the <strong>material color</strong>, you can use preset colors or customize RGB values. Choosing the correct unit is very important to ensure accurate model dimensions.',
            note: 'If unsure about units, selecting millimeters (mm) is usually the safest choice.'
        },
        {
            title: 'Convert to GLB Format',
            description: 'After settings are complete, click the <strong>"Convert to GLB"</strong> button to start processing. The tool will process all uploaded STL files sequentially, showing progress information during batch processing. The conversion process includes parsing STL data, calculating normals, and generating GLB binary data.',
            note: 'Please keep the page open during conversion. Large files may take a few seconds.'
        },
        {
            title: 'Preview Conversion Results',
            description: 'After conversion is complete, the right output area will display information for all converted GLB files. You can view detailed information including <strong>file size comparison</strong>, <strong>triangle count</strong>, and <strong>vertex count</strong>. This information helps confirm whether conversion results meet expectations.',
            note: 'GLB files are usually smaller than the original STL files, suitable for real-time rendering.'
        },
        {
            title: 'Download GLB Files',
            description: 'When satisfied with conversion results, you can click the <strong>"Download GLB"</strong> button below each file to save individually, or use the <strong>"Batch Download (ZIP)"</strong> button at the top of the output area to package all converted GLB files into a ZIP file for one-time download. Downloaded files can be directly imported into game engines or 3D software that supports GLB.',
            note: 'All processing is done locally in your browser, ensuring your 3D model data privacy and security.'
        }
    ],

    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our STL to GLB tool. Now you can easily convert STL format 3D printing models to GLB format suitable for game development and AR/VR applications, enjoying smaller file sizes and richer features.',

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
