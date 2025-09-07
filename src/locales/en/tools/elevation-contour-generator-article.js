export default {
    title: 'Elevation Query and Contour Generator: Online Terrain Analysis Tool Guide',
    functionTitle: 'What is the Elevation Query and Contour Generator and its uses?',
    intro: 'Our <strong>Elevation Query and Contour Generator</strong> is a powerful online terrain analysis tool that can instantly query elevation data for any location worldwide and generate precise contour maps. This tool is based on high-precision Digital Elevation Model (DEM) data and supports point queries, batch processing, contour generation, 3D terrain visualization, and elevation profile analysis. Whether you are conducting geographic research, engineering planning, outdoor activity preparation, or educational teaching, our <strong>online terrain analysis tool</strong> provides professional-grade terrain data analysis capabilities to help you better understand and utilize terrain information.',
    
    useCasesTitle: 'Common Application Scenarios for Elevation Query and Contour Generator',
    useCases: [
        'Terrain analysis and site assessment for engineering planning and construction projects',
        'Route planning and elevation change estimation for hiking, mountaineering, and other outdoor activities',
        'Hydrological analysis, watershed delineation, and flood risk assessment',
        'Geological research, landform analysis, and terrain evolution studies',
        'Geographic knowledge display and terrain feature explanation in educational teaching',
        'Terrain modeling and scene design in game development and virtual reality',
        'Agricultural planning, land use, and irrigation system design',
        'Environmental impact assessment and natural resource management'
    ],
    
    tipTitle: 'Professional Tip:',
    tipContent: 'When analyzing large areas, appropriately adjusting the contour interval can provide a clearer representation of the terrain. For flat areas, use smaller intervals (e.g., 5-10 meters); for mountainous regions, use larger intervals (e.g., 50-100 meters).',
    
    conclusion: 'The <strong>Elevation Query and Contour Generator</strong> tool provides convenient terrain analysis capabilities for professionals and enthusiasts across various industries. By using our tool, you can easily obtain precise elevation data, generate clear contour maps, perform 3D terrain visualization, and analyze terrain profile characteristics. These features make complex terrain analysis simple and efficient, without the need for specialized GIS software. Whether conducting professional research, engineering planning, or preparing for outdoor activities, our tool can meet your various terrain data needs.',
    
    faqTitle: 'Frequently Asked Questions',
    faqs: [
        {
            question: 'What is the data source for the elevation query tool? How accurate is the data?',
            answer: 'Our <strong>elevation query system</strong> primarily uses NASA\'s SRTM (Shuttle Radar Topography Mission) and ASTER GDEM (Advanced Spaceborne Thermal Emission and Reflection Radiometer Global Digital Elevation Model) data, as well as other open-source DEM datasets. Across global coverage, the data resolution is generally 30 meters, with some regions reaching 10-meter resolution. For most application scenarios, this accuracy is sufficient to provide accurate terrain analysis results. However, please note that data for polar regions and some oceanic areas may be missing or have lower accuracy.'
        },
        {
            question: 'How do I use the contour generation feature for terrain analysis?',
            answer: 'Using our <strong>contour map generator</strong> for terrain analysis is very simple. First, select your area of interest on the map, then adjust the contour parameters (such as interval, color, and smoothness). After clicking the "Generate Contours" button, the system will automatically process the DEM data and draw contour lines. The generated contour map can intuitively display terrain undulations, helping you identify ridges, valleys, steep slopes, and gentle areas. You can also enable the 3D view to observe terrain features from different angles, or draw profile lines to analyze elevation changes along specific paths.'
        },
        {
            question: 'Can I upload my own point data for batch elevation queries?',
            answer: 'Yes, our <strong>batch elevation query function</strong> supports uploading custom point data. You can prepare CSV, GeoJSON, or KML files containing latitude and longitude coordinates, then import these points through the upload function. The system will automatically query the elevation data for each point and provide statistical information (such as highest point, lowest point, average elevation, etc.). This is very useful for projects that need to analyze elevations at multiple locations, such as route planning, pipeline design, or land surveying. After uploading, you can also download these points with elevation data or visualize them on the map.'
        },
        {
            question: 'How does the elevation profile feature help plan hiking or cycling routes?',
            answer: 'Our <strong>elevation profile analysis tool</strong> is an ideal assistant for planning outdoor activity routes. By drawing your planned route on the map, the system will immediately generate an elevation profile along the route, intuitively displaying uphill, downhill, and flat sections. The profile shows key information such as total distance, cumulative ascent, highest and lowest points, and average slope. This data can help you assess route difficulty, reasonably arrange travel time, prepare appropriate equipment, and identify potential rest stops and viewpoints. For long-distance hiking or cycling, understanding elevation changes is crucial for energy distribution and safety planning.'
        },
        {
            question: 'What are the practical application scenarios for 3D terrain visualization?',
            answer: 'Our <strong>3D terrain visualization system</strong> has practical value in multiple fields. In education, it can vividly demonstrate geographic concepts and terrain features, helping students understand landforms such as mountains, canyons, and plateaus. In tourism planning, it can provide three-dimensional previews of destinations, helping tourists understand the terrain characteristics of scenic spots. For real estate development and engineering projects, 3D terrain can assist in site selection decisions, evaluating views, slopes, and drainage conditions. In environmental protection, it helps analyze the impact of terrain on ecosystems, such as water flow direction, sunlight exposure, and microclimate formation. Additionally, for photography enthusiasts, 3D terrain can help plan shooting angles and predict lighting effects at sunrise and sunset.'
        }
    ],
    
    tutorialTitle: 'How to Use the Elevation Query and Contour Generator',
    steps: [
        {
            title: 'Browse the Map and Locate Target Area',
            description: 'First, use the map navigation controls (zoom, pan) to browse to your area of interest. You can quickly locate by entering place names, coordinates, or addresses in the search box, or click the "Current Location" button to jump to your location. The map supports multiple basemap styles, which can be switched between satellite imagery or terrain maps as needed.',
            note: 'Use the mouse wheel or touchpad gestures to quickly zoom the map. Hold the Shift key while dragging the mouse to select an area for zooming.'
        },
        {
            title: 'Query Single Point Elevation Data',
            description: '<strong>Click any location</strong> on the map to query the precise elevation data for that point. The system will display the point\'s elevation (meters), latitude and longitude coordinates, and related terrain information. You can add markers to save important locations or copy coordinates for other uses.',
            note: 'When hovering the mouse over the map, it will display the elevation of the current position in real-time, making it convenient to quickly browse area elevation changes.'
        },
        {
            title: 'Upload Point Files for Batch Elevation Queries',
            description: 'If you need to query elevations for multiple points, you can prepare CSV, GeoJSON, or KML files containing latitude and longitude coordinates, then click the "Upload Point File" button to import. The system will automatically process the file and query the elevation for each point, while providing statistical analysis (highest point, lowest point, average elevation, etc.).',
            note: 'CSV files should include longitude and latitude columns (optional header row). GeoJSON and KML files need to contain point features. Ensure the coordinate system is WGS84 before uploading.'
        },
        {
            title: 'Generate Contour Maps',
            description: 'After selecting your area of interest, adjust parameters in the contour settings panel: contour interval (meters), color style, line width, and smoothness. Then click the <strong>"Generate Contours"</strong> button, and the system will process the DEM data in the area and draw contour lines. You can choose different color gradient schemes to enhance the visual representation of the terrain.',
            note: 'Smaller contour intervals can show more details but may result in overly complex images. It\'s recommended to adjust appropriate intervals based on the terrain undulation degree of the area.'
        },
        {
            title: 'Use 3D Terrain View',
            description: 'Click the "Enable 3D Terrain" button to switch the map to three-dimensional view mode. In 3D mode, you can rotate the perspective by dragging to observe the three-dimensional features of the terrain. Use the terrain exaggeration slider to enhance the visual effect of height differences, particularly suitable for displaying subtle terrain changes in relatively flat areas.',
            note: 'In 3D mode, hold the Ctrl key while dragging to adjust the perspective tilt; hold the Alt key while dragging to rotate the view direction.'
        },
        {
            title: 'Create Elevation Profiles',
            description: 'Click the "Draw Profile Line" button, then draw a path on the map (can be a straight line or multi-segment line). The system will automatically generate an <strong>elevation profile</strong> for that path, showing elevation changes along the way. The profile includes information such as distance, height, and slope, which can help you analyze terrain features or plan routes.',
            note: 'Moving the mouse on the profile will display a marker at the corresponding position on the map, helping you correlate points on the profile with actual geographic locations.'
        },
        {
            title: 'Export and Share Results',
            description: 'After completing the analysis, you can download the contour map (PNG, PDF formats), elevation data (CSV, GeoJSON formats), or profile chart (PNG, SVG formats). Click the "Share Map" button to generate a link containing the current view and analysis results, making it easy to share your findings or plans with others.',
            note: 'Exported contour maps include coordinate reference information and can be imported into other GIS software for further analysis or overlay with other data layers.'
        }
    ],
    
    successTitle: 'Congratulations!',
    successContent: 'You have successfully learned how to use our Elevation Query and Contour Generator tool. Now you can easily obtain precise elevation data, generate clear contour maps, perform 3D terrain visualization, and analyze terrain profile characteristics.',
    
    relatedToolsTitle: 'Related Tools You May Be Interested In',
    relatedTools: [
        {
            name: 'Coordinate Converter',
            description: 'Convert geographic coordinates between different coordinate systems, supporting WGS84, GCJ02, BD09, etc.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'GPS Track Replay',
            description: 'Visualize and replay GPS tracks from various file formats (GPX, KML, GeoJSON, CSV).',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Gaussian Projection Calculator',
            description: 'Tool for converting between Gaussian projection coordinates and geographic coordinates (latitude and longitude).',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'LIDAR Point Cloud Viewer',
            description: 'Free online LIDAR point cloud viewer supporting LAS, XYZ, PLY, PCD formats. Provides 3D visualization, multiple coloring modes, interactive navigation, and data analysis functions.',
            url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
        }
    ],
    
    referencesTitle: 'Reference Resources',
    references: [
        {
            name: 'Topographic Map Basics - Wikipedia',
            description: 'Detailed introduction to the components of topographic maps and how to interpret contour lines',
            url: 'https://en.wikipedia.org/wiki/Topographic_map'
        },
        {
            name: 'REI Map Navigation Tutorial',
            description: 'Professional outdoor education institution\'s guide to reading topographic maps and navigation techniques',
            url: 'https://www.rei.com/learn/expert-advice/navigation-basics.html'
        },
        {
            name: 'OpenTopography Learning Resources',
            description: 'Open terrain data platform providing terrain analysis methods and application cases',
            url: 'https://opentopography.org/learn'
        }
    ]
};