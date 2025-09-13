export default {
    title: 'Coordinate Format Converter User Guide - Online Latitude and Longitude Conversion Tool',
    functionTitle: 'What is the Coordinate Format Converter and Its Uses?',
    intro: 'Our <strong>Coordinate Format Converter</strong> is a powerful online tool that enables precise conversion between Decimal Degrees, Degrees Minutes Seconds, and Degrees Minutes formats. The tool supports single and batch coordinate conversion, provides customizable decimal place settings, and allows real-time precision adjustment via a slider. Conversion results feature highlight animations, support one-click copying to clipboard, and batch export functionality. Using our <strong>latitude and longitude converter</strong>, you can easily handle various geographic coordinate formats to meet professional needs in surveying, navigation, GIS, and more.',

    useCasesTitle: 'Common Application Scenarios for the Coordinate Format Converter',
    useCases: [
        'GIS data processing, standardizing coordinate data from different formats',
        'GPS navigation device coordinate conversion, adapting to coordinate requirements of different map services',
        'Coordinate data organization in surveying projects, improving data processing efficiency',
        'Geographic research data standardization, ensuring data format consistency',
        'Outdoor exploration and marine navigation, quickly converting coordinate formats for different devices',
        'Map making and spatial analysis, processing coordinate data from various sources'
    ],

    tipTitle: 'Professional Tips:',
    tipContent: 'When performing batch coordinate conversion, it is recommended to first test the conversion results with sample data to ensure correct format settings. By adjusting the decimal places slider, you can view the impact of precision changes on results in real-time and select the most suitable precision setting for your application needs.',

    conclusion: 'The <strong>Coordinate Format Converter</strong> is very useful for surveying engineers, GIS professionals, navigation enthusiasts, and anyone working with geographic coordinate data. By using our latitude and longitude conversion tool, you can save significant manual calculation time, avoid format conversion errors, and dramatically improve work efficiency through batch processing capabilities. Our tool makes the coordinate conversion process simple and efficient without installing any professional software.',

    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What conversion modes does the Coordinate Format Converter support?',
            answer: 'Our <strong>online coordinate converter</strong> supports three main conversion modes: Decimal Degrees (DD), Degrees Minutes Seconds (DMS), and Degrees Minutes (DM). Decimal Degrees format like 40.7128, Degrees Minutes Seconds format like 40°42\'46.08"N, Degrees Minutes format like 40°42.768\'N. You can freely convert between these three formats to meet various application scenario requirements.'
        },
        {
            question: 'How to perform batch coordinate conversion?',
            answer: 'Using our <strong>latitude and longitude batch conversion tool</strong>, you simply enter multiple coordinate pairs line by line in the batch input area, separating latitude and longitude with commas. For example: 39.9042,116.4074. After clicking the convert button, the system will automatically process all coordinates and display the conversion results. The batch export function can save all results as a text file.'
        },
        {
            question: 'How does the decimal places setting affect conversion results?',
            answer: 'The decimal places setting controls the precision display of conversion results. By adjusting the decimal places slider, you can view the impact of precision changes on results in real-time. More decimal places mean higher precision but may also increase data redundancy. We recommend selecting appropriate precision based on actual application needs, with 6 decimal places typically sufficient for most geographic applications.'
        },
        {
            question: 'What is the purpose of the highlight animation in conversion results?',
            answer: 'Our <strong>coordinate conversion tool</strong> displays highlight animation effects after completing conversion or copy operations, helping users quickly locate the results they just operated on. This visual feedback mechanism improves user experience, especially when processing multiple coordinates, allowing you to clearly see which result has been selected or copied.'
        },
        {
            question: 'How to ensure coordinate conversion accuracy?',
            answer: 'Our tool automatically validates coordinate ranges (latitude -90° to 90°, longitude -180° to 180°) during conversion and performs precise mathematical calculations. To ensure accuracy, it is recommended to load sample data before use to check conversion results and confirm they meet expectations before processing actual data. The tool also supports one-click copying of all format conversion results for cross-validation.'
        }
    ],

    tutorialTitle: 'How to Use the Coordinate Format Converter',
    steps: [
        {
            title: 'Select Conversion Mode',
            description: 'At the top of the left input area, select the conversion mode you need: Decimal Degrees (DD), Degrees Minutes Seconds (DMS), or Degrees Minutes (DM). Different modes correspond to different input formats and interface layouts.',
            note: 'The conversion mode determines the type and number of input fields, please select the appropriate mode according to your data format.'
        },
        {
            title: 'Enter Coordinate Data',
            description: 'Based on the selected conversion mode, enter coordinate data in the corresponding input fields. You can enter single coordinates or multiple lines of coordinate data in the batch input area, with latitude and longitude separated by commas per line.',
            note: 'DMS and DM modes require separate input of degrees, minutes, seconds (or degrees, minutes) and direction (N/S/E/W).'
        },
        {
            title: 'Adjust Precision Settings',
            description: 'Use the decimal places slider to adjust the precision of conversion results. The slider range is 0-8 decimal places, and results update in real-time during adjustment, making it easy for you to select the most suitable precision.',
            note: 'Precision adjustment affects all conversion results, including currently displayed and batch conversion results.'
        },
        {
            title: 'Perform Conversion Operation',
            description: 'Click the "Convert Coordinates" button to perform the conversion operation. The tool will automatically calculate and display conversion results in all three formats based on your input data and selected mode.',
            note: 'After conversion is complete, the first result will display a highlight animation to help you locate it quickly.'
        },
        {
            title: 'Export or Copy Results',
            description: 'Click the copy button next to each result to copy all formats of that result to the clipboard. If there are multiple results, you can use the "Batch Export" button at the top to save all results as a text file.',
            note: 'Copy operations also trigger highlight animations, letting you clearly know which result has been copied.'
        }
    ],

    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our coordinate format converter. You can now easily convert between Decimal Degrees, Degrees Minutes Seconds, and Degrees Minutes formats, improving work efficiency through batch processing and precision adjustment features.',

    relatedToolsTitle: 'Related Tools You Might Be Interested In',
    relatedTools: [
        {
            name: 'Map Sheet Division Calculator',
            description: 'Calculate map sheet numbers based on latitude and longitude coordinates, supporting multiple scales.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'GNSS Time Converter',
            description: 'Tool for mutual conversion between GPS time, BeiDou time, and UTC time.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        {
            name: 'Area and Perimeter Calculator',
            description: 'Supports drawing polygons to automatically calculate area and perimeter, providing multiple unit switching.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        {
            name: 'Baseline Calculator',
            description: 'Input start and end coordinates to calculate baseline length and azimuth, supporting error propagation analysis.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    ],

    referencesTitle: 'Reference Resources',
    references: [
        {
            name: 'Geographic Coordinate System',
            description: 'Detailed introduction to geographic coordinate systems on Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Geographic_coordinate_system'
        },
        {
            name: 'Geodesy',
            description: 'Academic resources on coordinate systems and conversion',
            url: 'https://en.wikipedia.org/wiki/Geodesy'
        },
        {
            name: 'DMS Conversion Library',
            description: 'Open-source coordinate conversion JavaScript library on GitHub',
            url: 'https://github.com/gmaclennan/parse-dms'
        }
    ]
}