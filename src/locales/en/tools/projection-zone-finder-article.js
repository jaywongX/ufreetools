export default {
    title: 'Projection Zone Finder User Guide - Online UTM Projection Zone Calculator',
    functionTitle: 'What is the Projection Zone Finder and Its Uses?',
    intro: 'Our <strong>Projection Zone Finder</strong> is a powerful online tool that automatically calculates UTM 3° zone and 6° zone numbers based on input latitude and longitude coordinates. The tool supports single and batch coordinate input, provides map zone grid display functionality, and shows real-time projection zone information as you move your mouse over the map. Through dynamic highlighting of zone areas, you can intuitively understand the relationship between coordinates and projection zones. Using our <strong>UTM Projection Zone Calculator</strong>, you can easily obtain the corresponding projection zone numbers for coordinate points, with one-click copy and batch export functions to meet professional surveying and GIS needs.',

    useCasesTitle: 'Common Application Scenarios for the Projection Zone Finder',
    useCases: [
        'GIS data processing, determining UTM projection zone numbers for coordinate points',
        'Remote sensing image processing, selecting correct projection parameters for satellite imagery',
        'Projection parameter setting in surveying projects, ensuring coordinate system consistency of data',
        'Map making and spatial analysis, selecting appropriate projection coordinate systems',
        'Standardization of geographic research data, unifying projection zone numbers for data integration',
        'Navigation and positioning applications, setting correct UTM projection parameters for GPS devices'
    ],

    tipTitle: 'Professional Tips:',
    tipContent: 'When processing batch coordinates, it is recommended to first test the projection zone calculation results with sample data to ensure the selected projection type (3° zone or 6° zone) meets your project requirements. By moving your mouse over the map, you can intuitively view the distribution of projection zones in different areas, helping you better understand the UTM projection zone principle.',

    conclusion: 'The <strong>Projection Zone Finder</strong> is very useful for surveying engineers, GIS professionals, remote sensing data processors, and anyone who needs to use UTM projection coordinates. By using our UTM Projection Zone Calculator, you can save a lot of manual calculation time, avoid projection zone selection errors, and better understand the relationship between coordinates and projection zones through visualization features. Our tool makes the projection parameter setting process simple and efficient without installing any professional software.',

    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What projection types does the Projection Zone Finder support?',
            answer: 'Our <strong>online Projection Zone Finder</strong> supports two main UTM projection types: 6° zones and 3° zones. The 6° zone is the standard zone division method for UTM projection, with 60 projection zones globally, each 6° longitude wide; the 3° zone is a more refined division method, with 120 projection zones globally, each 3° longitude wide. You can choose the appropriate projection type for calculation based on your project requirements.'
        },
        {
            question: 'How to perform batch coordinate projection zone queries?',
            answer: 'Using our <strong>UTM Projection Zone Calculator</strong>, you simply enter multiple coordinate pairs line by line in the batch input area, separating longitude and latitude with commas. For example: 116.3975,39.9085. After clicking the calculate button, the system will automatically calculate the corresponding projection zone numbers for all coordinate points, displaying zone number, hemisphere, and central meridian information. The batch export function can save all results as a text file.'
        },
        {
            question: 'How is the zone grid displayed on the map?',
            answer: 'Our <strong>Projection Zone Finder tool</strong> displays the UTM projection zone grid in the right map area. When you move your mouse over the map, it will show the projection zone number of the current position in real-time. This visualization feature helps you intuitively understand the distribution pattern of UTM projection zones and better grasp the relationship between coordinates and projection zones.'
        },
        {
            question: 'How is the accuracy of projection zone calculation ensured?',
            answer: 'Our tool uses standard UTM projection zone calculation formulas to ensure the accuracy of calculation results. For 6° zones, the zone number calculation formula is: Math.floor((longitude + 180) / 6) + 1; for 3° zones, the zone number calculation formula is: Math.floor((longitude + 180) / 3) + 1. The tool also validates the validity of input coordinates (longitude -180° to 180°, latitude -90° to 90°) to ensure the reliability of calculation results.'
        },
        {
            question: 'How to use the query results?',
            answer: 'The calculated projection zone numbers can be used for parameter settings in various GIS software and surveying equipment. You can copy individual results with one click, or use the batch export function to save all results as a text file. The results include longitude, latitude, zone number, hemisphere, and central meridian information, providing complete reference for your projection coordinate system setup.'
        }
    ],

    tutorialTitle: 'How to Use the Projection Zone Finder',
    steps: [
        {
            title: 'Select Projection Type',
            description: 'At the top of the left input area, select the projection type you need: UTM 6° zone or UTM 3° zone. The 6° zone is suitable for most standard map projection needs, while the 3° zone is suitable for surveying projects requiring higher precision.',
            note: 'The projection type determines the zone density and calculation method. Please choose the appropriate type according to your project requirements.'
        },
        {
            title: 'Enter Coordinate Data',
            description: 'When entering a single coordinate, input values in the longitude and latitude input boxes respectively; for batch input, enter multiple coordinate pairs line by line in the text area, separating longitude and latitude with commas per line. For example: 116.3975,39.9085.',
            note: 'Longitude range is -180° to 180°, latitude range is -90° to 90°. Coordinates outside these ranges will be ignored.'
        },
        {
            title: 'Perform Calculation Operation',
            description: 'Click the "Calculate Zone" button to perform the calculation operation. The tool will automatically calculate and display the corresponding projection zone number, hemisphere, and central meridian for each coordinate point based on your input coordinates and selected projection type.',
            note: 'After calculation is complete, the first result will show a highlight effect to help you locate it quickly.'
        },
        {
            title: 'View Map Zones',
            description: 'In the right map area, you can view projection zone numbers at different locations by moving your mouse. The map will show zone number information of the mouse position in real-time, helping you intuitively understand the distribution of UTM projection zones.',
            note: 'The zone grid on the map will dynamically display according to your selected projection type (3° zone or 6° zone).'
        },
        {
            title: 'Export or Copy Results',
            description: 'Click the copy button next to each result to copy that result to the clipboard. If there are multiple results, you can use the "Batch Export" button at the top to save all results as a text file.',
            note: 'Copy operations also trigger highlight animations, letting you clearly know which result has been copied.'
        }
    ],

    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our Projection Zone Finder. Now you can easily calculate UTM projection zone numbers for any coordinate point, improving work efficiency through batch processing and visualization features.',

    relatedToolsTitle: 'Related Tools You Might Be Interested In',
    relatedTools: [
        {
            name: 'Coordinate Format Converter',
            description: 'Supports conversion between decimal degrees, degrees minutes seconds, and degrees minutes formats, providing batch conversion and export functions.',
            url: 'https://www.ufreetools.com/tool/coordinate-format-converter'
        },
        {
            name: 'Map Sheet Division Calculator',
            description: 'Calculates map sheet numbers based on latitude and longitude coordinates, supporting multiple scales.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
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
            name: 'Universal Transverse Mercator Coordinate System',
            description: 'Detailed introduction to the Universal Transverse Mercator projection on Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system'
        },
        {
            name: 'Map Projection',
            description: 'Academic resources on map projection methods and applications',
            url: 'https://en.wikipedia.org/wiki/Map_projection'
        },
        {
            name: 'Gauss-Krüger Coordinate System',
            description: 'Introduction to commonly used map projection methods in China',
            url: 'https://en.wikipedia.org/wiki/Transverse_Mercator_projection#Variants'
        }
    ]
}