export default {
    title: 'OBJ to 3MF Tool: Online 3D Printing Format Converter Usage Guide',
    functionTitle: 'What is the OBJ to 3MF Tool and its uses?',
    intro: 'Our <strong>OBJ to 3MF tool</strong> is a professional online 3D printing format conversion application that can quickly convert OBJ (Wavefront Object) files to 3MF (3D Manufacturing Format) format. 3MF is the next-generation 3D printing file format developed by the 3MF Consortium. Compared to the traditional OBJ format, it supports rich information like color, material, and texture, with smaller file size and better data integrity. Using our <strong>online OBJ to 3MF converter</strong>, you can batch process multiple OBJ files, set model units, even merge multiple models into a single 3MF file, and complete format conversion without installing any software.',

    useCasesTitle: 'Common Use Cases for OBJ to 3MF',
    useCases: [
        'Convert OBJ format 3D models to 3MF format for better print compatibility',
        'Batch convert multiple OBJ files to 3MF format to improve 3D printing workflow efficiency',
        'Merge multiple OBJ models into a single 3MF file for unified management and printing',
        'Set correct units (millimeters, centimeters, inches, etc.) for 3D printing models to avoid size errors',
        'Convert OBJ files to 3MF format for use in slicing software that supports 3MF',
        'Optimize 3D print file size, 3MF format is usually more compact than OBJ',
        'Prepare standardized 3MF format files for 3D printing service providers',
        'Migrate OBJ models to the more modern 3MF format for long-term archiving and management'
    ],

    tipTitle: 'Professional Tip:',
    tipContent: '3MF format uses ZIP compression, so file size is typically 30-50% smaller than OBJ. 3MF supports multiple unit systems; please ensure the correct unit is selected during conversion to avoid print size issues. For models that need color and material information, 3MF is the better choice.',

    conclusion: 'The <strong>OBJ to 3MF format conversion</strong> tool is particularly useful for 3D printing enthusiasts, designers, engineers, and users who need to process large numbers of 3D models. By using our online OBJ to 3MF converter, you can quickly unify 3D printing file formats, optimize file sizes, improve print compatibility, or meet specific 3D printing platform format requirements. Our tool supports batch processing, provides unit setting and file merging features, and all processing is done locally in your browser, ensuring your model data privacy and security.',

    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What OBJ formats does the OBJ to 3MF tool support?',
            answer: 'Our <strong>online OBJ to 3MF converter</strong> supports the standard OBJ (Wavefront Object) file format. The tool automatically parses vertex, normal, and face data from OBJ files and converts them to 3MF format. Whether OBJ files exported from 3D modeling software like Blender, Maya, 3ds Max, or downloaded from 3D model libraries, can be smoothly converted to 3MF format.'
        },
        {
            question: 'What advantages does 3MF format have over OBJ?',
            answer: '3MF format has several advantages over OBJ: (1) Supports color, material, and texture information; (2) Uses ZIP compression for smaller file size; (3) Better data integrity with no mesh errors; (4) Supports multiple unit systems; (5) Can contain multiple objects and print parameters. For modern 3D printing workflows, 3MF is the more recommended format.'
        },
        {
            question: 'How to choose the correct unit during conversion?',
            answer: 'Our <strong>OBJ to 3MF tool</strong> provides four common units: millimeters, centimeters, meters, and inches. OBJ files themselves may contain unit information, but 3MF files require explicit unit specification. We recommend choosing units based on your 3D printer requirements, with millimeters being the most common 3D printing unit. Choosing the wrong unit may cause print size deviations.'
        },
        {
            question: 'Can multiple OBJ files be merged into one 3MF file?',
            answer: 'Yes! Our tool supports merging multiple OBJ files into a single 3MF file. After checking the "Merge all OBJ into a single 3MF file" option, the tool automatically merges all uploaded OBJ models into one 3MF file. Each model is automatically offset to avoid overlap, making unified processing in slicing software convenient.'
        },
        {
            question: 'Which software can the converted 3MF files be used in?',
            answer: '3MF format is widely supported by mainstream 3D printing slicing software, including Cura, PrusaSlicer, Simplify3D, 3D Builder (Windows), and more. Converted 3MF files can be directly imported into these software for slicing and print preparation. More and more 3D printing service providers are also starting to support 3MF format.'
        },
        {
            question: 'Is the conversion process secure? Will files be uploaded to servers?',
            answer: 'Completely secure! Our tool uses pure front-end technology, and all file processing is done locally in your browser. Your OBJ files will not be uploaded to any server, ensuring privacy and data security. You can confidently process 3D model files containing trade secrets or personal designs.'
        },
        {
            question: 'Will the converted 3MF file size change?',
            answer: 'Usually it will change. 3MF format uses ZIP compression, so file size is typically 30-50% smaller than OBJ. For text-format OBJ files, compression effect is more significant. Specific file size depends on model complexity and triangle count.'
        }
    ],

    tutorialTitle: 'How to Use the OBJ to 3MF Tool',
    steps: [
        {
            title: 'Upload OBJ Files',
            description: 'First upload the OBJ files you want to convert to 3MF format. You can <strong>drag and drop files</strong> to the upload area, or <strong>click browse</strong> to select files. Our tool supports standard OBJ file format, and you can upload multiple files at once for batch processing.',
            note: 'Supports uploading multiple OBJ files simultaneously, the tool will automatically parse and process them.'
        },
        {
            title: 'Set Conversion Parameters',
            description: 'In the left control panel, set the <strong>model name</strong> (optional) and <strong>model unit</strong>. If you need to merge multiple OBJ files into one 3MF file, check the "Merge all OBJ into a single 3MF file" option. Choosing the correct unit is very important to ensure accurate print dimensions.',
            note: 'If unsure about units, selecting millimeters (mm) is usually the safest choice.'
        },
        {
            title: 'Convert to 3MF Format',
            description: 'After settings are complete, click the <strong>"Convert to 3MF"</strong> button to start processing. The tool will process all uploaded OBJ files sequentially, showing progress information during batch processing. The conversion process includes parsing OBJ data, optimizing vertices, and generating 3MF file structure.',
            note: 'Please keep the page open during conversion. Large files may take a few seconds.'
        },
        {
            title: 'Preview Conversion Results',
            description: 'After conversion is complete, the right output area will display information for all converted 3MF files. You can view detailed information including <strong>file size comparison</strong>, <strong>triangle count</strong>, and <strong>vertex count</strong>. This information helps confirm whether conversion results meet expectations.',
            note: '3MF files are usually smaller than the original OBJ files due to ZIP compression.'
        },
        {
            title: 'Download 3MF Files',
            description: 'When satisfied with conversion results, you can click the <strong>"Download 3MF"</strong> button below each file to save individually, or use the <strong>"Batch Download (ZIP)"</strong> button at the top of the output area to package all converted 3MF files into a ZIP file for one-time download. Downloaded files can be directly imported into slicing software that supports 3MF.',
            note: 'All processing is done locally in your browser, ensuring your 3D model data privacy and security.'
        }
    ],

    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our OBJ to 3MF tool. Now you can easily convert OBJ format 3D models to the more modern 3MF format, enjoying better print compatibility and smaller file sizes.',

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
            name: 'OBJ File Format Specification',
            description: 'Understand the technical specification and file structure of OBJ format',
            url: 'https://en.wikipedia.org/wiki/Wavefront_.obj_file'
        },
        {
            name: '3D Printing File Format Comparison',
            description: 'Characteristics and applicable scenarios of STL, OBJ, 3MF and other formats',
            url: 'https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/'
        }
    ]
}
