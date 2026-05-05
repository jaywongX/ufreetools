export default {
    title: 'STL to 3MF Tool: Online 3D Printing Format Converter Guide',
    functionTitle: 'What is the STL to 3MF Tool and Its Uses?',
    intro: 'Our <strong>STL to 3MF tool</strong> is a professional online 3D printing format converter that quickly converts STL (Stereo Lithography) files to 3MF (3D Manufacturing Format). 3MF is a next-generation 3D printing file format developed by the 3MF Consortium. Compared to the traditional STL format, it supports color, material, and texture information, has smaller file sizes, and better data integrity. Using our <strong>online STL to 3MF converter</strong>, you can batch process multiple STL files, set model units, and even merge multiple models into a single 3MF file without installing any software.',

    useCasesTitle: 'Common Use Cases for STL to 3MF Conversion',
    useCases: [
        'Convert STL 3D printing models to 3MF format for better print compatibility',
        'Batch convert multiple STL files to 3MF format to improve 3D printing workflow efficiency',
        'Merge multiple STL models into a single 3MF file for unified management and printing',
        'Set correct units (millimeters, centimeters, inches, etc.) for 3D printing models to avoid size errors',
        'Convert STL files to 3MF format for use in 3MF-compatible slicing software',
        'Optimize 3D printing file size, as 3MF format is typically more compact than STL',
        'Prepare standardized 3MF format files for 3D printing service providers',
        'Migrate old STL models to the more modern 3MF format for long-term archiving and management'
    ],

    tipTitle: 'Professional Tip:',
    tipContent: '3MF format uses ZIP compression, with file sizes typically 30-50% smaller than STL. 3MF supports multiple unit systems - please ensure you select the correct unit during conversion to avoid printing size issues. For models requiring color and material information, 3MF is the better choice.',

    conclusion: 'The <strong>STL to 3MF format conversion</strong> tool is particularly useful for 3D printing enthusiasts, designers, engineers, and users who need to process large numbers of 3D models. By using our online STL to 3MF converter, you can quickly standardize 3D printing file formats, optimize file sizes, improve print compatibility, or meet specific 3D printing platform requirements. Our tool supports batch processing, provides unit settings and file merging capabilities, and all processing is done locally in your browser to ensure your model data privacy and security.',

    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What STL formats does the STL to 3MF tool support?',
            answer: 'Our <strong>online STL to 3MF converter</strong> supports two main STL file formats: Binary STL and ASCII STL. The tool automatically detects the file format and processes accordingly. Whether STL files exported from CAD software or downloaded from 3D model libraries, they can be smoothly converted to 3MF format.'
        },
        {
            question: 'What are the advantages of 3MF format over STL?',
            answer: '3MF format has several advantages over STL: (1) Supports color, material, and texture information; (2) Uses ZIP compression for smaller files; (3) Better data integrity without common STL mesh errors; (4) Supports multiple unit systems; (5) Can contain multiple objects and print parameters. For modern 3D printing workflows, 3MF is the recommended format.'
        },
        {
            question: 'How to choose the correct unit during conversion?',
            answer: 'Our <strong>STL to 3MF tool</strong> provides four common units: millimeters, centimeters, meters, and inches. STL files themselves do not contain unit information, so you need to select based on the original model\'s design unit. If unsure, millimeters is the most commonly used 3D printing unit. Selecting the wrong unit may cause printing size deviations.'
        },
        {
            question: 'Can multiple STL files be merged into one 3MF file?',
            answer: 'Yes! Our tool supports merging multiple STL files into a single 3MF file. Check the "Merge all STL files into a single 3MF file" option, and the tool will automatically merge all uploaded STL models into one 3MF file. Each model will be automatically offset to avoid overlap, making it convenient for unified processing in slicing software.'
        },
        {
            question: 'In which software can the converted 3MF files be used?',
            answer: '3MF format is widely supported by mainstream 3D printing slicing software, including Cura, PrusaSlicer, Simplify3D, 3D Builder (Windows), and more. The converted 3MF files can be directly imported into these software for slicing and print preparation. More and more 3D printing service providers are also supporting 3MF format.'
        },
        {
            question: 'Is the conversion process secure? Will files be uploaded to servers?',
            answer: 'Completely secure! Our tool uses pure front-end technology, and all file processing is done locally in your browser. Your STL files will not be uploaded to any server, ensuring privacy and data security. You can confidently process 3D model files containing trade secrets or personal designs.'
        },
        {
            question: 'Will the converted 3MF file size change?',
            answer: 'Usually yes. 3MF format uses ZIP compression, with file sizes typically 30-50% smaller than STL. For binary STL files, the compression effect may be more noticeable. For ASCII STL files, since they are text-based, the compression effect will be even more significant. The specific file size depends on the model complexity and triangle count.'
        }
    ],

    tutorialTitle: 'How to Use the STL to 3MF Tool',
    steps: [
        {
            title: 'Upload STL Files',
            description: 'First upload the STL files you want to convert to 3MF format. You can <strong>drag and drop files</strong> to the upload area, or <strong>click browse</strong> to select files. Our tool supports both Binary and ASCII STL formats, and you can upload multiple files at once for batch processing.',
            note: 'Supports uploading multiple STL files simultaneously, the tool will automatically detect format and process.'
        },
        {
            title: 'Set Conversion Parameters',
            description: 'In the left control panel, set the <strong>model name</strong> (optional) and <strong>model unit</strong>. If you need to merge multiple STLs into one 3MF file, check the "Merge all STL files into a single 3MF file" option. Selecting the correct unit is very important to ensure accurate print dimensions.',
            note: 'If unsure about the unit, selecting millimeters (mm) is usually the safest choice.'
        },
        {
            title: 'Convert to 3MF Format',
            description: 'After setting up, click the <strong>"Convert to 3MF"</strong> button to start processing. The tool will process all uploaded STL files in sequence, showing progress information during batch processing. The conversion includes parsing STL data, optimizing vertices, and generating the 3MF file structure.',
            note: 'Please keep the page open during conversion, large files may take a few seconds.'
        },
        {
            title: 'Preview Conversion Results',
            description: 'After conversion, the right output area will display all converted 3MF file information. You can view <strong>file size comparison</strong>, <strong>triangle count</strong>, and <strong>vertex count</strong> details. This information helps confirm whether the conversion results meet expectations.',
            note: '3MF files are typically smaller than original STL files due to ZIP compression.'
        },
        {
            title: 'Download 3MF Files',
            description: 'After reviewing the conversion results, you can click the <strong>"Download 3MF"</strong> button below each file to save individually, or use the <strong>"Batch Download (ZIP)"</strong> button at the top of the output area to package all converted 3MF files into a single ZIP file for one-time download. Downloaded files can be directly imported into 3MF-compatible slicing software.',
            note: 'All processing is done locally in your browser to ensure your 3D model data privacy and security.'
        }
    ],

    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our STL to 3MF tool. Now you can easily convert STL format 3D printing models to the more modern 3MF format, enjoying better print compatibility and smaller file sizes.',

    relatedToolsTitle: 'Related Tools You May Be Interested In',
    relatedTools: [
        {
            name: 'Image to PNG Tool',
            description: 'Convert JPG, WebP and other formats to PNG with transparent background and batch processing support.',
            url: 'https://www.ufreetools.com/tool/image-to-png'
        },
        {
            name: 'Image to JPG Tool',
            description: 'Convert PNG, WebP and other formats to JPG, suitable for photos and complex images.',
            url: 'https://www.ufreetools.com/tool/image-to-jpg'
        },
        {
            name: 'Image Compressor',
            description: 'Reduce image file size without noticeable quality loss, supports multiple formats.',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: 'Image Resizer',
            description: 'Resize images to specific dimensions or scale by percentage, supports batch processing.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        }
    ],

    referencesTitle: 'Reference Resources',
    references: [
        {
            name: '3MF Format Official Specification',
            description: 'Learn about the technical specification and file structure of the 3MF format',
            url: 'https://3mf.io/specification/'
        },
        {
            name: 'STL File Format Description',
            description: 'Learn about the history and file structure of the STL format',
            url: 'https://en.wikipedia.org/wiki/STL_%28file_format%29'
        },
        {
            name: '3D Printing File Format Comparison',
            description: 'Features and use cases of STL, 3MF, OBJ and other formats',
            url: 'https://www.hitem3d.ai/blog/en-3d-printing-file-formats-explained-stl-obj-3mf-and-more/'
        }
    ]
}
