export default {
    title: 'Map Sheet Calculator Guide - Online Map Sheet Number Query Tool',
    functionTitle: 'What is a Map Sheet Calculator and its Purpose?',
    intro: 'Our <strong>Map Sheet Calculator</strong> is a powerful online tool that quickly and accurately calculates map sheet numbers based on latitude and longitude coordinates. The tool supports multiple scales (including 1:500, 1:1000, 1:50000, etc.) and provides batch calculation and sheet grid visualization features. Using our <strong>map sheet number query tool</strong>, you can easily process large amounts of coordinate data and export results in Excel or PDF format.',

    useCasesTitle: 'Common Applications of the Map Sheet Calculator',
    useCases: [
        'Map sheet management and numbering in surveying and mapping projects',
        'Spatial data organization in Geographic Information System (GIS) projects',
        'Sheet division in land planning and urban design',
        'Work area division in geological exploration and resource surveys',
        'Military map production and combat area division',
        'Block processing of large-scale geographic data in research projects'
    ],

    tipTitle: 'Professional Tip:',
    tipContent: 'When dividing maps for large areas, it is recommended to use 3-degree zones for higher precision, while small areas can use 6-degree zones to simplify calculations.',

    conclusion: 'The <strong>Map Sheet Calculator</strong> is extremely useful for surveying engineers, GIS professionals, urban planners, and anyone who needs to process geospatial data. By using our tool, you can save significant time on manual calculations, avoid numbering errors, and improve work efficiency. Our tool makes the map sheet division process simple and efficient, without requiring any professional software installation.',

    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What scales does the Map Sheet Calculator support?',
            answer: 'Our <strong>online Map Sheet Calculator</strong> supports multiple common scales from 1:500 to 1:1000000, including 1:500, 1:1000, 1:2000, 1:5000, 1:10000, 1:25000, 1:50000, 1:100000, 1:250000, 1:500000, and 1:1000000. You can choose the appropriate scale according to your specific needs.'
        },
        {
            question: 'What are 3-degree zones and 6-degree zones?',
            answer: '3-degree zones and 6-degree zones are two zoning methods in Gauss-Krüger projection. 6-degree zones start from 0° East longitude, with each zone spanning 6°, dividing the globe into 60 zones. 3-degree zones start from 1.5° East longitude, with each zone spanning 3°, dividing the globe into 120 zones. 3-degree zones provide higher precision and are suitable for large-scale mapping; 6-degree zones cover wider areas and are suitable for small-scale mapping.'
        },
        {
            question: 'How do I calculate map sheet numbers for multiple coordinate points in batch?',
            answer: 'Using our <strong>batch sheet calculation feature</strong>, you can input multiple coordinate points in the batch input box, with each line in the format "latitude,longitude,description(optional)". For example: "39.9042,116.4074,Beijing Center". After input, click the "Calculate Sheet" button, and the system will automatically calculate the map sheet numbers for all coordinate points.'
        },
        {
            question: 'What formats can the calculation results be exported in?',
            answer: 'Our tool supports exporting calculation results in both Excel and PDF formats. Excel format is convenient for further data processing and analysis, while PDF format is suitable for printing and sharing. You can complete the export by clicking the "Export Excel" or "Export PDF" button at the top of the output area.'
        },
        {
            question: 'What is the purpose of the sheet grid visualization feature?',
            answer: 'The sheet grid visualization feature intuitively displays the positions and distribution of all calculated points on a map. By clicking on points in the grid, you can view detailed information about that point. The selected sheet will be highlighted, helping you better understand the spatial distribution characteristics of the data. This feature is particularly useful for verifying calculation results and conducting spatial analysis.'
        }
    ],

    tutorialTitle: 'How to Use the Map Sheet Calculator',
    steps: [
        {
            title: 'Input Coordinate Data',
            description: 'Enter the coordinate data you want to calculate in the input area on the left. You can input a single coordinate point (enter latitude and longitude in their respective input boxes) or batch input multiple coordinate points (enter in the batch input box, with each line in the format "latitude,longitude,description(optional)").',
            note: 'Coordinate format should be in decimal degrees, such as latitude 39.9042, longitude 116.4074.'
        },
        {
            title: 'Set Calculation Parameters',
            description: 'In the parameter settings area, select the appropriate scale and projection zone method. Common scales include 1:500, 1:1000, 1:50000, etc., and zone methods include 3-degree zones or 6-degree zones.',
            note: 'Large scales (such as 1:500, 1:1000) are recommended to use 3-degree zones for higher precision.'
        },
        {
            title: 'Execute Calculation',
            description: 'Click the <strong>"Calculate Sheet"</strong> button to start the calculation. The system will automatically calculate the map sheet number and related information for each point based on the coordinates and parameters you set.',
            note: 'The calculation process usually completes within seconds, even for large amounts of data.'
        },
        {
            title: 'View and Analyze Results',
            description: 'After calculation is complete, the results will be displayed in the output area on the right. You can view detailed information such as the map sheet number, coordinates, and scale for each point. The sheet grid visualization area will show the distribution of all points on the map.',
            note: 'Click on any result item or point in the grid to view detailed information and highlight it.'
        },
        {
            title: 'Export Results',
            description: 'If you need to save the results, you can click the <strong>"Export Excel"</strong> or <strong>"Export PDF"</strong> button at the top of the output area. Excel format is convenient for data processing, while PDF format is suitable for printing and sharing.',
            note: 'The exported file will contain complete information for all calculation results.'
        },
        {
            title: 'Use Advanced Features',
            description: 'You can use the "Load Sample Data" button to quickly experience the tool\'s functionality, or use the "Clear All" button to reset all inputs and results. By clicking on different result items, you can view their positions in the sheet grid.',
            note: 'The tool runs completely in the browser, and your data will not be uploaded to any server, ensuring privacy and security.'
        }
    ],

    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our Map Sheet Calculator. Now you can easily calculate map sheet numbers for any coordinate points, for use in surveying, GIS, urban planning, and various other application scenarios.',

    relatedToolsTitle: 'Related Tools You May Be Interested In',
    relatedTools: [
        {
            name: 'Coordinate Converter',
            description: 'Convert latitude and longitude coordinates between different coordinate systems, supporting multiple projection systems.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'GPS Track Replay',
            description: 'Upload and visualize GPS track data, supporting multiple file formats.',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Gaussian Projection Calculator',
            description: 'Perform Gauss-Krüger projection forward and inverse calculations, supporting 3-degree and 6-degree zones.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'Contour Line Generator',
            description: 'Generate contour line maps based on elevation data, supporting multiple output formats.',
            url: 'https://www.ufreetools.com/tool/elevation-contour-generator'
        }
    ],

    referencesTitle: 'Reference Resources',
    references: [
        {
            name: 'International Map Grid Systems',
            description: 'International standards for map grids and sheet numbering systems',
            url: 'https://www.icsm.gov.au/education/fundamentals-mapping/map-grids'
        },
        {
            name: 'Transverse Mercator Projection',
            description: 'Detailed explanation of the mathematical principles behind UTM/Gauss-Krüger projections',
            url: 'https://en.wikipedia.org/wiki/Transverse_Mercator_projection'
        },
        {
            name: 'Map Projections',
            description: 'Detailed guide to map projections and coordinate systems provided by Australian government agencies',
            url: 'https://www.icsm.gov.au/education/fundamentals-mapping/map-projections'
        }
    ]
}