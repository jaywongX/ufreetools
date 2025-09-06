export default {
    title: 'Online Geodetic Measurement Calculator: Precise Earth Surface Distance and Area Calculation',
    functionTitle: 'What is a Geodetic Measurement Calculator and Its Uses?',
    intro: 'Our <strong>Online Geodetic Measurement Calculator</strong> is a professional-grade geospatial calculation tool that precisely calculates distances, azimuths, and areas on the Earth\'s surface based on ellipsoidal models. Unlike simple planar calculations, geodetic measurements consider the Earth\'s curvature and ellipsoidal shape, providing high-precision geospatial measurement results for surveying, navigation, land planning, and scientific research. This <strong>geodetic measurement tool</strong> supports multiple international standard ellipsoid parameters (such as WGS84, CGCS2000, etc.) and provides intuitive map visualization, allowing you to clearly see your measurement results.',

    useCasesTitle: 'Common Applications of the Geodetic Measurement Calculator',
    useCases: [
        'Surveying and Geographic Information System (GIS) professionals performing precise geospatial analysis',
        'Land surveyors calculating plot areas and boundary lengths',
        'Maritime and aviation navigation planning, calculating great circle route distances and azimuths',
        'Geographic researchers conducting geospatial data analysis',
        'Engineers planning infrastructure spanning large distances (such as pipelines, cables, roads)',
        'Military and defense sectors for precise positioning and distance calculations',
        'Environmental and resource management professionals assessing protected area sizes',
        'Educators demonstrating the effect of Earth\'s curvature on distance calculations'
    ],

    tipTitle: 'Professional Tip:',
    tipContent: 'For long-distance calculations spanning continental scales, we recommend using the high-precision algorithm option, which employs a complete ellipsoidal model. While computationally slower, it provides more accurate results, especially in polar regions.',

    conclusion: '<strong>Geodetic measurement</strong> plays a crucial role in modern geospatial technology. By using our calculator, you can avoid errors introduced by planar calculations and obtain precise results that account for the Earth\'s curvature. Whether you\'re a professional surveyor, academic researcher, or enthusiast interested in geospatial calculations, this tool meets your precision requirements while providing intuitive visualization and detailed calculation process demonstrations.',

    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What\'s the difference between geodetic calculations and planar distance calculations?',
            answer: 'Geodetic calculations consider the Earth\'s curvature and ellipsoidal shape, while planar distance calculations treat the Earth\'s surface as flat. For short distances (a few kilometers), the difference is minimal, but as distance increases, the difference becomes significant. For example, over a 1000 km distance, planar calculations may result in errors of tens of kilometers. Our <strong>geodetic measurement calculator</strong> uses ellipsoidal models (such as WGS84) for calculations, providing more accurate Earth surface distances.'
        },
        {
            question: 'How do I choose the appropriate ellipsoid parameters?',
            answer: 'Ellipsoid parameter selection should be based on your geographic location and application needs. WGS84 is the standard used by the Global Positioning System (GPS) and is suitable for most global applications; CGCS2000 is China\'s national standard, suitable for measurements in China; other regions may have their own standards. For cases where you\'re working with specific maps or datasets, choose the same ellipsoid parameters used by that dataset to ensure consistency in calculation results.'
        },
        {
            question: 'What\'s the difference between great circle distance and geodesic distance?',
            answer: 'Great circle distance is the shortest distance between two points along a great circle (the largest circle on a sphere), while geodesic distance is the shortest distance on an ellipsoidal surface. Our <strong>high-precision geodetic measurement tool</strong> calculates geodesic distance, considering the Earth\'s ellipsoidal shape. In practical applications, for short to medium distances, the difference is small, but for long distances or applications requiring high precision, geodesic distance calculation is more accurate.'
        },
        {
            question: 'How do I calculate polygon area?',
            answer: 'To calculate polygon area, first add at least three points in the coordinate input area (in order to form a polygon), then select the "Area Calculation" mode. Our tool uses spherical polygon area calculation methods, considering Earth\'s curvature, which is more accurate than planar calculations. For high-precision needs, select the "High Precision Algorithm" option, which uses a complete ellipsoidal model for calculations. The results will display the polygon\'s area and perimeter, with visual representation on the map.'
        },
        {
            question: 'How accurate are the calculation results?',
            answer: 'Our <strong>geospatial measurement calculator</strong> offers two precision options: fast algorithm and high-precision algorithm. The fast algorithm is suitable for general purposes, typically accurate to within 0.1%; the high-precision algorithm uses a complete ellipsoidal model with iterative calculations, achieving accuracy up to 0.001% (centimeter-level), suitable for professional surveying and scientific research. Actual precision also depends on the accuracy of input coordinates and how well the selected ellipsoid parameters match the actual region.'
        }
    ],

    tutorialTitle: 'How to Use the Online Geodetic Measurement Calculator',
    steps: [
        {
            title: 'Enter Coordinate Points',
            description: 'In the coordinate input area, enter the latitude and longitude of the points you need to calculate. You can click the <strong>"Add Point"</strong> button to add more points. For distance calculations, at least two points are needed; for area calculations, at least three points are required.',
            note: 'Coordinates are in decimal degrees format (e.g., 39.9042, 116.4074), with positive values representing North latitude/East longitude and negative values representing South latitude/West longitude.'
        },
        {
            title: 'Select Ellipsoid Parameters',
            description: 'Choose the ellipsoid parameters that suit your needs from the dropdown menu. WGS84 is the standard used by global GPS systems and is suitable for most applications; CGCS2000 is China\'s national standard; other options are applicable for specific regions or historical data.',
            note: 'Selecting the same ellipsoid parameters used by your map data or GPS device ensures consistency in calculation results.'
        },
        {
            title: 'Set Calculation Mode and Precision',
            description: 'Select <strong>"Distance & Azimuth"</strong> mode to calculate the distance and azimuth between two points, or select <strong>"Area Calculation"</strong> mode to calculate polygon area. Then choose your desired precision level: fast algorithm or high-precision algorithm.',
            note: 'For short distances or general purposes, the fast algorithm is sufficiently accurate; for long distances or professional applications, the high-precision algorithm is recommended.'
        },
        {
            title: 'Configure Visualization Options',
            description: 'Check the <strong>"Show Calculation Formulas"</strong> and <strong>"Show Dynamic Demonstration"</strong> options as needed. The former displays the mathematical formulas and steps used in the calculation process, while the latter dynamically demonstrates the great circle path or polygon construction process on the map.',
            note: 'Showing calculation formulas is particularly useful for educational purposes or verifying the calculation process; dynamic demonstration helps intuitively understand Earth surface measurement principles.'
        },
        {
            title: 'Execute Calculation and View Results',
            description: 'Click the <strong>"Calculate"</strong> button to perform the calculation. The results area will display the calculated distance, azimuth, or area data, while the map will visually display the measurement results. You can adjust the units (such as kilometers, meters, miles, etc.) to view results in different units.',
            note: 'The map visualization automatically zooms to fit all input points; you can use the map controls to zoom, pan, or switch map types.'
        },
        {
            title: 'Export or Share Results',
            description: 'After calculation, you can use the <strong>"Export as PDF"</strong> or <strong>"Export as Excel"</strong> buttons to save the results. The exported file includes all input parameters, calculation results, and visualization charts, convenient for sharing or further analysis.',
            note: 'All calculations are performed in your browser and are not uploaded to any server, ensuring the security and privacy of your geographic data.'
        }
    ],

    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our Online Geodetic Measurement Calculator. Now you can perform precise Earth surface distance and area calculations for various professional and educational purposes.',

    relatedToolsTitle: 'Related Tools You May Be Interested In',
    relatedTools: [
        {
            name: 'Coordinate System Converter',
            description: 'Convert geographic coordinates between different coordinate systems, including WGS-84, GCJ-02, BD-09, Web Mercator, and UTM',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'GPS Track Replay',
            description: 'Visualize and replay GPS tracks from various file formats (GPX, KML, GeoJSON, CSV).',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Gauss Projection Calculator',
            description: 'Tool for converting between Gauss projection coordinates and geographic coordinates (latitude and longitude)',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'LIDAR Point Cloud Viewer',
            description: 'Free online LIDAR point cloud viewer supporting LAS, XYZ, PLY, PCD formats. Provides 3D visualization, multiple coloring modes, interactive navigation, and data analysis functions',
            url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
        }
    ],

    referencesTitle: 'Reference Resources',
    references: [
        {
            name: 'Fundamentals of Geodesy',
            description: 'Academic resources on ellipsoid parameters and geodetic calculation methods',
            url: 'https://en.wikipedia.org/wiki/Geodesy'
        },
        {
            name: 'International Earth Rotation and Reference Systems Service',
            description: 'Authoritative organization providing international terrestrial reference frames and ellipsoid parameters',
            url: 'https://www.iers.org/IERS/EN/Home/home_node.html'
        },
        {
            name: 'U.S. National Geodetic Survey Computation Tools',
            description: 'Reference materials for various geodetic calculation methods and algorithms',
            url: 'https://www.ngs.noaa.gov/TOOLS/'
        }
    ]
}