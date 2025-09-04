export default {
  title: 'Coordinate Picker and Latitude Longitude Query Tool: Online Latitude Longitude Query and EPSG Projection Coordinate Conversion Tutorial',
  functionTitle: 'What is the Coordinate Picker and Latitude Longitude Query Tool? What are its core functions?',
  intro: 'Our <strong>Coordinate Picker and Latitude Longitude Query Tool</strong> integrates map click point picking, <strong>latitude longitude query</strong>, <strong>EPSG projection coordinate conversion</strong> and place name search positioning capabilities, aiming to quickly and accurately complete coordinate selection and coordinate format export. Through this online tool, you can complete conversions from place names to coordinates, from WGS84 to various EPSG projection coordinates in your browser, significantly improving surveying annotation, site analysis and mapping efficiency.',
  useCasesTitle: 'Typical Application Scenarios: How the Coordinate Picker and Latitude Longitude Query Tool Solves Problems',
  useCases: [
    'New media site selection and check-in point creation: Quickly pick latitude and longitude and export for map visualization',
    'GIS mapping and field data collection: Click to pick points then export as CSV/GeoJSON for easy ArcGIS/QGIS import',
    'Government and real estate site selection: Place name search → coordinates, one-click collection of candidate site locations',
    'Logistics and maintenance positioning: Record multiple device/work order coordinates and export centrally',
    'Education and research: Demonstrate differences and conversions between WGS84 and EPSG projection coordinates',
    'Tourism and outdoor navigation: Save latitude longitude and projection coordinates of attractions and campsites',
    'Development and testing: Precise latitude longitude samples needed for frontend/backend integration',
    'Multi-region content annotation: Unified format coordinate files for cross-regional data integration'
  ],
  tipTitle: 'Professional Tip:',
  tipContent: 'When exporting to CSV, it is recommended to include fields: name, lat, lon, epsg, x, y, time, for convenient batch processing and traceability in QGIS/Excel.',
  conclusion: 'This <strong>Coordinate Picker and Latitude Longitude Query Tool</strong> is designed for surveying, visualization, development and maintenance scenarios, supporting <strong>EPSG projection coordinate conversion</strong>, place name search and batch export. Completing latitude longitude queries and coordinate conversions online can significantly reduce software installation costs and improve collaboration efficiency.',
  faqTitle: 'Frequently Asked Questions (FAQ)',
  faqs: [
    {
      question: 'Which EPSG projection coordinate conversions does the Coordinate Picker and Latitude Longitude Query Tool support?',
      answer: 'The tool has built-in WGS84 (EPSG:4326), Web Mercator (EPSG:3857) and CGCS2000 (EPSG:4490) conversions, and supports inputting custom PROJ4 definitions. After clicking the map, it will simultaneously display latitude longitude and selected EPSG projection coordinates.'
    },
    {
      question: 'How to quickly convert place names to latitude longitude coordinates and mark them on the map?',
      answer: 'After entering a place name in the search box, use the place name search → coordinate function to retrieve Nominatim results, select a candidate to locate and add as a marker, then export CSV or GeoJSON.'
    },
    {
      question: 'How to copy latitude longitude query results or batch export coordinate files?',
      answer: 'The right result area supports one-click copying of all coordinate text, and can export files in CSV or GeoJSON format, compatible with most GIS/visualization platforms.'
    },
    {
      question: 'Does the coordinate picker tool support mobile and tablet devices?',
      answer: 'Yes, the interface uses responsive grid layout, <strong>latitude longitude query</strong>, marking and export operations are equally smooth on phones and tablets.'
    },
    {
      question: 'What should be noted when using EPSG projection coordinate conversion?',
      answer: 'Different EPSG datums and projections have differences. If the target coordinate system is not built-in, please provide the correct PROJ4 definition, and verify units before conversion (latitude longitude in degrees, projections often in meters).'
    }
  ],
  tutorialTitle: 'How to Use the Coordinate Picker and Latitude Longitude Query Tool: Detailed Operation Steps',
  steps: [
    {
      title: 'Open the tool and load the map',
      description: 'The map loads automatically after entering the tool page. If network is limited, please check external network access or change network environment to ensure base map and place name search are available.',
      note: 'The map default coordinate system is WGS84, latitude longitude units are degrees.'
    },
    {
      title: 'Search place names and locate',
      description: 'Enter a place name in the search box (supports multiple languages), click "Search", select the target location from candidates and locate to map center.',
      note: 'Candidates come from OpenStreetMap Nominatim.'
    },
    {
      title: 'Click map to pick latitude longitude',
      description: 'Click anywhere on the map to automatically record latitude longitude and selected EPSG projection coordinates, and display in the coordinate results list on the right.',
      note: 'Supports multiple clicks to mark multiple points.'
    },
    {
      title: 'Switch or customize EPSG projection',
      description: 'Select common coordinate systems (4326/3857/4490) on the left, or fill in custom PROJ4 definition, the tool will instantly convert projection coordinates for subsequent point picking.',
      note: 'Switching coordinate systems will not change existing point latitude longitude, only affects projection coordinate fields.'
    },
    {
      title: 'Copy or export coordinates',
      description: 'Select export format (CSV or GeoJSON), click "Copy All" or "Export File" to use coordinates for GIS/visualization/development processes.',
      note: 'CSV is suitable for Excel/QGIS batch processing, GeoJSON is convenient for web maps and API use.'
    },
    {
      title: 'Clear or continue marking',
      description: 'If you need to start over, click "Clear Markers". Then continue searching or picking points to gradually improve the coordinate list.',
      note: 'Remember to switch EPSG coordinate systems as needed to meet different project requirements.'
    }
  ],
  successTitle: 'Congratulations!',
  successContent: 'You have learned to use the Coordinate Picker and Latitude Longitude Query Tool to complete coordinate collection and EPSG projection coordinate conversion, and can now efficiently output standard data files for GIS and visualization.',
  relatedToolsTitle: 'Related Tools You Might Be Interested In',
  relatedTools: [
    {
      name: 'Coordinate System Converter',
      description: 'Convert geographic coordinates between different coordinate systems, including WGS-84, GCJ-02, BD-09, Web Mercator and UTM',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'GPS Track Replay',
      description: 'Visualize and replay GPS tracks from various file formats (GPX, KML, GeoJSON, CSV).',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: 'Gaussian Projection Forward and Inverse',
      description: 'Tool for mutual conversion between Gaussian projection coordinates and geographic coordinates (latitude longitude)',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    },
    {
      name: 'LIDAR Point Cloud Viewer',
      description: 'Free online LIDAR point cloud viewer supporting LAS, XYZ, PLY, PCD formats. Provides 3D visualization, multiple coloring modes, interactive navigation and data analysis functions',
      url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
    }
  ],
  referencesTitle: 'Reference Resources',
  references: [
    {
      name: 'OpenStreetMap Nominatim',
      description: 'Place name search and geocoding service',
      url: 'https://nominatim.org/'
    },
    {
      name: 'EPSG.io',
      description: 'Search EPSG coordinate reference systems and PROJ4 definitions',
      url: 'https://epsg.io/'
    },
    {
      name: 'Leaflet Documentation',
      description: 'Lightweight web mapping library',
      url: 'https://leafletjs.com/'
    },
    {
      name: 'Proj4 Documentation',
      description: 'Coordinate transformation library documentation',
      url: 'https://proj.org/apps/proj.html'
    }
  ]
}