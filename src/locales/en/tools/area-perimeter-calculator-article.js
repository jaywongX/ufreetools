export default {
    title: 'Area and Perimeter Calculator User Guide - Online Polygon Area and Perimeter Measurement Tool',
    functionTitle: 'What is the Area and Perimeter Calculator and Its Uses?',
    intro: 'Our <strong>Area and Perimeter Calculator</strong> is a powerful online tool that allows you to draw polygons on a map and automatically calculate their area and perimeter. The tool supports multiple unit switching, including square meters, hectares, square kilometers, and mu, and provides an earth ellipsoidal calculation mode for more accurate results. You can also directly input coordinate points to calculate area and perimeter, and supports exporting in multiple formats including GeoJSON, KML, images, CSV, TXT, and PDF.',

    useCasesTitle: 'Common Application Scenarios for the Area and Perimeter Calculator',
    useCases: [
        'Land surveying and evaluation, calculating plot area and perimeter',
        'Urban planning and design, measuring building areas and public spaces',
        'Agricultural management, calculating farmland area and irrigation range',
        'Real estate evaluation, measuring property boundaries and usable area',
        'Environmental monitoring, calculating protected area and affected area range',
        'Engineering construction, measuring construction areas and material requirements'
    ],

    tipTitle: 'Professional Tips:',
    tipContent: 'When measuring large areas, it is recommended to use the ellipsoidal calculation mode to obtain more accurate results. You can directly input coordinate points to calculate the area and perimeter of complex areas, supporting multiple coordinate input formats. Switching between different units can help you display measurement results in the most suitable way.',

    conclusion: 'The <strong>Area and Perimeter Calculator</strong> is very useful for land surveyors, urban planners, agricultural managers, real estate appraisers, and anyone who needs accurate area measurement. By using our tool, you can save a lot of manual calculation time, avoid measurement errors, and better understand data through visualization features. Our tool makes the area and perimeter calculation process simple and efficient without installing any professional software.',

    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What calculation modes does the Area and Perimeter Calculator support?',
            answer: 'Our <strong>Area and Perimeter Calculator</strong> supports two calculation modes: planar calculation and ellipsoidal calculation. Planar calculation is suitable for small area measurements with fast calculation speed; ellipsoidal calculation considers the impact of earth curvature, suitable for large area measurements with more accurate results. You can choose the appropriate calculation mode according to specific needs.'
        },
        {
            question: 'How to draw polygons on the map for measurement?',
            answer: 'Using our <strong>online area measurement tool</strong>, you just need to select the polygon drawing tool in the left toolbox, then click on the map to determine the vertices of the polygon. Double-click the last vertex to complete the drawing, and the system will automatically calculate and display the area and perimeter. You can also use rectangle and circle tools to draw regular shapes for measurement.'
        },
        {
            question: 'What area and length units are supported?',
            answer: 'Our tool supports multiple commonly used area and length units. Area units include square meters, hectares, square kilometers, acres, and mu; length units include meters, kilometers, and miles. You can switch units at any time to adapt to different usage scenarios and regional habits, and measurement results will be updated in real-time.'
        },
        {
            question: 'How to use the coordinate input function?',
            answer: 'Our <strong>area calculator coordinate input</strong> function allows you to directly input coordinate points to calculate area and perimeter without manually drawing on the map. You can use multiple formats to input coordinates, including "longitude,latitude", "[longitude,latitude]" or "longitude latitude" format, with one point per line. After entering at least 3 points, click the "Calculate" button, and the system will automatically create a polygon and calculate its area and perimeter. This is particularly useful for area measurement with known coordinates.'
        },
        {
            question: 'How to export measurement results?',
            answer: 'After completing the measurement, you can export the results in multiple formats: GeoJSON and KML are standard geospatial data formats that can be imported into other GIS software; the image export function can save the current map view as a PNG image; CSV and TXT formats are convenient for opening and analyzing data in spreadsheet software like Excel; PDF format is suitable for generating formal reports and documents. Choose the most suitable export format according to your needs.'
        }
    ],

    tutorialTitle: 'How to Use the Area and Perimeter Calculator',
    steps: [
        {
            title: 'Select Drawing Tools and Calculation Mode',
            description: 'Before starting measurement, first select the appropriate drawing tool (polygon, rectangle, or circle) in the left toolbox. Then select the calculation mode, for large areas it is recommended to choose ellipsoidal calculation to obtain more accurate results.',
            note: 'Drawing tools and calculation mode can be switched at any time as needed.'
        },
        {
            title: 'Draw Measurement Area on Map',
            description: 'After activating the drawing tool, click on the map to determine the area boundary. For the polygon tool, click each vertex in sequence, and double-click the last vertex to complete the drawing. The area and perimeter of the current area will be displayed in real-time during the drawing process.',
            note: 'You can adjust the area shape by dragging vertices, and measurement results will be updated in real-time.'
        },
        {
            title: 'Use Coordinate Input Function',
            description: 'If you already have coordinate point data for the area, you can directly use the coordinate input function. In the coordinate input box, enter one coordinate point per line (format: longitude,latitude), then click the "Calculate" button, and the system will automatically create a polygon and calculate its area and perimeter.',
            note: 'Supports multiple coordinate input formats, including "longitude,latitude", "[longitude,latitude]" or "longitude latitude".'
        },
        {
            title: 'View and Manage Measurement Results',
            description: 'In the results list below the right map area, you can view the area and perimeter of all drawn areas. Each area has a corresponding type identifier and measurement data, making it convenient for you to compare and analyze.',
            note: 'The results list is updated in real-time, displaying the quantity and data of all current measurement areas.'
        },
        {
            title: 'Export Measurement Results',
            description: 'After completing the measurement, you can export the results in multiple formats, including GeoJSON, KML, images, CSV, TXT, and PDF. Click the export button in the toolbox and select the corresponding format to complete the export operation.',
            note: 'The exported file contains all measurement information, which can be used for other GIS software, data analysis, or sharing with others. CSV and TXT formats are convenient for opening in spreadsheet software, and PDF format is suitable for formal reports.'
        }
    ],

    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our area and perimeter calculator. Now you can easily draw areas on the map and calculate their area and perimeter, obtaining the best measurement experience through multiple units and view modes.',

    relatedToolsTitle: 'Related Tools You Might Be Interested In',
    relatedTools: [
        {
            name: 'Baseline Calculator',
            description: 'Input start and end coordinates to calculate baseline length and azimuth, supporting error propagation analysis.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        },
        {
            name: 'Map Sheet Division Calculator',
            description: 'Calculate the map sheet number based on longitude and latitude coordinates, supporting multiple scales.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Coordinate Converter',
            description: 'Convert longitude and latitude coordinates between different coordinate systems, supporting multiple projection systems.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'GNSS Time Converter',
            description: 'Convert between UTC time and GPS week seconds, BeiDou time.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        }
    ],

    referencesTitle: 'Reference Resources',
    references: [
        {
            name: 'GeographicLib Library',
            description: 'Open-source library focused on high-precision geospatial calculations',
            url: 'https://geographiclib.sourceforge.io/'
        },
        {
            name: 'Leaflet Map Library',
            description: 'Open-source interactive map JavaScript library',
            url: 'https://leafletjs.com/'
        },
        {
            name: 'Turf.js Spatial Analysis Library',
            description: 'JavaScript library for geospatial analysis',
            url: 'https://turfjs.org/'
        },
        {
            name: 'jsPDF Library',
            description: 'JavaScript library for generating PDF documents on the client side',
            url: 'https://github.com/parallax/jsPDF'
        }
    ]
}