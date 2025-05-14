export default {
  name: 'Gaussian Projection Calculator',
  title: 'Gaussian Projection Calculator',
  description: 'Convert between geographic coordinates (latitude/longitude) and Gaussian projection coordinates',
  calculationType: 'Calculation Type',
  forward: 'Forward (Lat/Lon → Gauss)',
  inverse: 'Inverse (Gauss → Lat/Lon)',
  ellipsoidParameters: 'Ellipsoid Parameters',
  ellipsoidType: 'Ellipsoid Type',
  centralMeridian: 'Central Meridian (°)',
  a: 'Semi-major Axis',
  f: 'Flattening',
  projectionParameters: 'Projection Parameters',
  projectionType: 'Projection Type',
  '3degree': '3-degree Zone',
  '6degree': '6-degree Zone',
  zoneNumber: 'Zone Number',
  forwardInput: 'Input Geographic Coordinates',
  latitude: 'Latitude',
  longitude: 'Longitude',
  inverseInput: 'Input Gaussian Coordinates',
  x: 'X Coordinate (Northing)',
  y: 'Y Coordinate (Easting)',
  calculate: 'Calculate',
  results: 'Results',
  dms: 'Degrees-Minutes-Seconds',
  batchProcessing: 'Batch Processing',
  inputFormat: 'Input Format',
  batchForwardFormat: 'One pair of coordinates per line, format: latitude,longitude',
  batchInverseFormat: 'One pair of coordinates per line, format: X,Y',
  processBatch: 'Process Batch',
  batchResults: 'Batch Results',
  copyAll: 'Copy All',
  downloadCSV: 'Download CSV',
  copySuccess: 'Copied to clipboard',
  copyFailed: 'Failed to copy',
  clear: 'Clear',
  formula: 'Formula',
  mapView: 'Map View',
  dmsInput: 'DMS Input',
  dmsInputPlaceholder: '40°26\'46"N 79°58\'56"W',
  parse: 'Parse',
  dmsParseError: 'Error parsing DMS format',
  invalidLatitude: 'Invalid latitude',
  invalidLongitude: 'Invalid longitude',
  invalidX: 'Invalid X coordinate',
  invalidY: 'Invalid Y coordinate',
  copyToClipboard: 'Copy to clipboard',
  autoCalculate: 'Auto calculate',
  formulaExplanation: 'Gaussian Projection Formula Explanation',
  uploadCSV: 'Upload CSV',
  exportResults: 'Export Results',
  exportAsGeoJSON: 'Export as GeoJSON',
  exportAsKML: 'Export as KML',
  exportAsTXT: 'Export as TXT',
  mapLayers: 'Map Layers',
  standard: 'Standard',
  satellite: 'Satellite',
  terrain: 'Terrain',
  pointsOnMap: 'Points on Map',
  clearPoints: 'Clear Points',
  unitSystem: 'Unit System',
  metric: 'Metric (meters)',
  imperial: 'Imperial (feet)',
  customEllipsoid: 'Custom Ellipsoid',
  saveCustomEllipsoid: 'Save Custom Ellipsoid',
  formulaContent: `
    <p>Gaussian Projection uses the following main formulas:</p>
    <h4>Forward Projection (Lat/Lon → X,Y)</h4>
    <p>To convert geographic coordinates to plane coordinates:</p>
    <ul>
      <li>X = m + correction terms</li>
      <li>Y = ν·cos(B)·l + correction terms</li>
    </ul>
    <h4>Inverse Projection (X,Y → Lat/Lon)</h4>
    <p>To convert plane coordinates to geographic coordinates:</p>
    <ul>
      <li>B = μ + correction terms</li>
      <li>L = L₀ + correction terms</li>
    </ul>
    <p>Where:</p>
    <ul>
      <li>B: latitude</li>
      <li>L: longitude</li>
      <li>L₀: central meridian</li>
      <li>m: meridian arc length</li>
      <li>ν: radius of curvature in the prime vertical</li>
    </ul>
  `,
  close: 'Close',
  
  ellipsoids: {
    WGS84: 'WGS84 Ellipsoid',
    Krasovsky: 'Krasovsky Ellipsoid',
    CGCS2000: 'CGCS2000 Ellipsoid',
    GRS80: 'GRS80 Ellipsoid',
    Beijing54: 'Beijing 1954 Ellipsoid',
    Xian80: 'Xian 1980 Ellipsoid',
    Custom: 'Custom Ellipsoid'
  },
  
  about: {
    title: 'About Gaussian Projection',
    description: 'Gaussian Projection (also known as Transverse Mercator projection) is a conformal map projection widely used in surveying and mapping. It projects points from the earth\'s ellipsoidal surface onto a plane and is commonly used for medium to large scale topographic maps.',
    forwardTitle: 'Forward Calculation (Lat/Lon → Gauss)',
    forwardDescription: 'The forward calculation converts geographic coordinates (latitude, longitude) to plane rectangular coordinates (X, Y). The X-axis points north, the Y-axis points east, and the origin is at the intersection of the central meridian and the equator.',
    inverseTitle: 'Inverse Calculation (Gauss → Lat/Lon)',
    inverseDescription: 'The inverse calculation converts plane rectangular coordinates (X, Y) back to geographic coordinates (latitude, longitude). It is the reverse process of the forward calculation.',
    parametersTitle: 'Parameter Explanation',
    ellipsoidParam: 'Ellipsoid Parameters',
    ellipsoidDescription: 'Mathematical models describing the shape of the Earth. Different geodetic systems use different ellipsoid parameters. Common ones include WGS84, Beijing 1954, Xian 1980, and CGCS2000.',
    projectionParam: 'Projection Parameters',
    projectionDescription: 'Gaussian projection is typically divided into 3-degree and 6-degree zones. 3-degree zones are used for large-scale topographic maps, while 6-degree zones are used for medium to small-scale maps. The zone number determines the position of the central meridian.'
  },
  loadExample: 'Load Example',
  customEllipsoidSaved: 'Custom ellipsoid saved successfully',
  
  guide: {
    title: 'Operation Guide',
    forwardTitle: 'Forward Calculation (Lat/Lon → Gauss)',
    step1: 'Select "Forward" calculation type at the top',
    step2: 'Choose appropriate ellipsoid parameters and projection zone',
    step3: 'Enter latitude and longitude values in decimal format (e.g., 39.9042, 116.4074) or use DMS input',
    step4: 'Results will update automatically, or click "Calculate" button to perform the calculation',
    
    inverseTitle: 'Inverse Calculation (Gauss → Lat/Lon)',
    step5: 'Select "Inverse" calculation type at the top',
    step6: 'Enter X and Y coordinates in meters',
    step7: 'View the resulting latitude and longitude in decimal degrees and DMS format',
    
    batchTitle: 'Batch Processing',
    step8: 'Enter multiple coordinate pairs in the batch processing section (one pair per line)',
    step9: 'Click "Process Batch" to calculate all coordinates at once',
    step10: 'Export the results as CSV or copy to clipboard',
    
    mapTitle: 'Map Interaction',
    step11: 'Click on the map to add points and automatically fill input values',
    step12: 'Switch between different map layers using the dropdown',
    step13: 'Export points as GeoJSON, KML, or TXT formats for use in other applications'
  },
  gaussianProjectionPoints: 'Gaussian Projection Points',
  point: 'Point',
  gaussianProjection: 'gaussian_projection',
  supportedFormats: 'Supported: CSV, TXT, Excel',
  excelExportNotice: 'Excel export prepared. This file can be opened directly in Excel.',
  excelProcessNotice: 'Excel processing is not fully supported. Please use CSV for best results.',
  excelExportSuccess: 'Excel file exported successfully',
  excelExportFailed: 'Excel export failed, falling back to CSV',
  excelImportSuccess: 'Excel file imported successfully',
  excelImportFailed: 'Excel import failed, please try CSV format',
  exportAsCSV: 'Export as CSV',
  exportAsExcel: 'Export as Excel',
  units: {
    metric: 'Meters (m)',
    km: 'Kilometers (km)',
    imperial: 'Feet (ft)',
    miles: 'Miles (mi)'
  },
  resetView: 'Reset Map View',
  pointsTotal: 'Points',
  currentPoint: 'Current Result',
  name: 'Name',
  article: {
    title: "Gaussian Projection Calculator: Convert Between Geographic and Plane Coordinates",
    introTitle: "What is Gaussian Projection and Why You Need This Tool",
    introPara1: "The <strong>Gaussian projection calculator</strong> (also known as Transverse Mercator projection) is an essential tool for surveyors, cartographers, GIS professionals, and anyone working with geographic information systems. This powerful coordinate conversion tool allows you to seamlessly transform between geographic coordinates (latitude and longitude) and plane rectangular coordinates (X and Y) using the Gaussian projection method.",
    introPara2: "Our <strong>Gaussian projection converter</strong> handles both forward calculation (geographic to plane coordinates) and inverse calculation (plane to geographic coordinates) with high precision. It supports multiple ellipsoid models including WGS84, CGCS2000, Krasovsky (Beijing 54), and more. The tool automatically applies the appropriate mathematical formulas and corrections to ensure accurate coordinate transformation for your surveying and mapping projects.",
    
    scenariosTitle: "Practical Applications of Gaussian Projection Calculation",
    scenario1: "<strong>Surveying and Land Management:</strong> Surveyors use Gaussian projection conversion to transform GPS coordinates into local plane coordinate systems for accurate land surveys, property boundary determination, and construction planning.",
    scenario2: "<strong>Topographic Mapping:</strong> Cartographers and mapping professionals rely on Gaussian projection to create precise topographic maps that maintain angular relationships and minimize distortion in specific regions.",
    scenario3: "<strong>GIS Data Integration:</strong> GIS analysts use Gaussian projection calculations to integrate data from different sources with varying coordinate systems into a unified reference frame for spatial analysis.",
    scenario4: "<strong>Engineering Projects:</strong> Civil engineers and construction teams employ Gaussian projection for infrastructure design, ensuring accurate positioning of roads, bridges, tunnels, and utilities in relation to existing features.",
    scenario5: "<strong>Military and Defense:</strong> Military operations utilize Gaussian projection coordinates for tactical planning, navigation, and target location with precise positioning requirements.",
    scenariosConclusion: "The versatility of <strong>Gaussian projection calculation</strong> makes it indispensable across numerous professional fields where accurate spatial positioning is critical. Our tool streamlines this complex mathematical process into a simple, intuitive interface accessible to both professionals and beginners.",
    
    faqTitle: "Frequently Asked Questions About Gaussian Projection",
    faq1q: "What is the difference between Gaussian projection and UTM?",
    faq1a: "Gaussian projection is the mathematical foundation upon which the Universal Transverse Mercator (UTM) system is built. The key differences include:<ul><li>UTM uses a standardized zone system with 6-degree zones and specific parameters worldwide</li><li>Gaussian projection is more flexible, allowing for custom central meridians and zone widths (3-degree or 6-degree)</li><li>UTM includes a standard false easting of 500,000 meters and scale factor of 0.9996</li><li>Our <strong>Gaussian projection calculator</strong> allows for more customization in ellipsoid parameters than typical UTM calculators</li></ul>",
    
    faq2q: "Which ellipsoid model should I choose for my Gaussian projection calculations?",
    faq2a: "The choice of ellipsoid depends on your geographic region and the coordinate system standards you're working with:<ul><li><strong>WGS84:</strong> Used globally with GPS systems and international mapping</li><li><strong>CGCS2000:</strong> China's official coordinate system since 2000</li><li><strong>Krasovsky/Beijing54:</strong> Used historically in China and parts of Eastern Europe</li><li><strong>Xian80:</strong> Chinese national standard used before CGCS2000</li></ul>For most modern applications, WGS84 or CGCS2000 are recommended unless you're specifically working with legacy data that requires a different ellipsoid. Our <strong>Gaussian projection conversion tool</strong> supports all these models and more.",
    
    faq3q: "How accurate is the Gaussian projection calculation provided by this tool?",
    faq3a: "Our <strong>Gaussian projection calculator</strong> implements the complete mathematical model with appropriate correction terms to ensure high accuracy. The tool achieves sub-millimeter precision for most practical applications, which exceeds the requirements for typical surveying and mapping projects. The accuracy depends on proper input of ellipsoid parameters and correct zone specification. For extremely high-precision geodetic work (sub-millimeter requirements), specialized software with additional correction terms may be necessary.",
    
    faq4q: "Can I perform batch processing of coordinates with this Gaussian projection tool?",
    faq4a: "Yes, our <strong>Gaussian projection converter</strong> includes full batch processing capabilities. You can:<ul><li>Input multiple coordinate pairs (latitude/longitude or X/Y)</li><li>Upload CSV, TXT, or Excel files containing coordinate data</li><li>Process hundreds or thousands of points simultaneously</li><li>Export results in various formats including CSV, Excel, GeoJSON, KML, and TXT</li></ul>This makes the tool ideal for projects involving large datasets that would be time-consuming to process individually.",
    
    faq5q: "What are 3-degree zones and 6-degree zones in Gaussian projection?",
    faq5a: "Gaussian projection divides the Earth into longitudinal zones to minimize distortion:<ul><li><strong>3-degree zones:</strong> Narrower zones that provide higher accuracy with less distortion, typically used for large-scale mapping and detailed surveys. The zone number ranges from 1 to 120.</li><li><strong>6-degree zones:</strong> Wider zones that cover larger areas with slightly more distortion at the edges, commonly used for regional mapping and UTM coordinates. The zone number ranges from 1 to 60.</li></ul>Our <strong>Gaussian projection calculation tool</strong> supports both zone systems and automatically calculates the central meridian based on your zone selection.",
    
    tutorialTitle: "Step-by-Step Guide to Using the Gaussian Projection Calculator",
    forwardCalcTitle: "Forward Calculation (Geographic to Gaussian Coordinates)",
    step1: "<strong>Select Calculation Type:</strong> Choose 'Forward' from the calculation type options at the top of the tool.",
    step2: "<strong>Choose Ellipsoid Parameters:</strong> Select the appropriate ellipsoid type from the dropdown menu (WGS84, CGCS2000, Beijing54, etc.) based on your coordinate system requirements.",
    step3: "<strong>Set Projection Parameters:</strong> Choose between 3-degree or 6-degree zone and enter the zone number. The central meridian will be calculated automatically, or you can enter it manually if needed.",
    step4: "<strong>Enter Geographic Coordinates:</strong> Input the latitude and longitude values in decimal degrees. You can also use the DMS (Degrees-Minutes-Seconds) input field for traditional notation.",
    
    inverseCalcTitle: "Inverse Calculation (Gaussian to Geographic Coordinates)",
    step5: "<strong>Select Calculation Type:</strong> Choose 'Inverse' from the calculation type options.",
    step6: "<strong>Configure Ellipsoid and Projection:</strong> Select the same ellipsoid parameters and projection settings that were used for the original coordinate system.",
    step7: "<strong>Enter Plane Coordinates:</strong> Input the X (northing) and Y (easting) values in meters.",
    step8: "<strong>View Results:</strong> The calculated latitude and longitude will appear in both decimal degrees and DMS formats for easy reference.",
    
    batchTitle: "Batch Processing Multiple Coordinates",
    step9: "<strong>Prepare Your Data:</strong> Format your coordinate pairs with one pair per line (latitude,longitude for forward or X,Y for inverse). You can also use the 'Upload CSV' button to import data from a file.",
    step10: "<strong>Process the Batch:</strong> Click the 'Process Batch' button to convert all coordinates at once.",
    step11: "<strong>Export Results:</strong> Use the 'Copy All' or 'Download CSV' buttons to save and use your processed coordinates in other applications.",
    
    tutorialConclusion: "With this <strong>Gaussian projection calculator</strong>, you can quickly convert coordinates between geographic and plane systems without the complexity of manual calculations. The tool's intuitive interface makes professional-grade coordinate transformation accessible to users of all experience levels.",
    
    relatedToolsTitle: "Related Coordinate Tools",
    relatedTool1: "Coordinate Converter",
    relatedTool1Desc: "Transform coordinates between different systems including UTM, MGRS, and various national grids.",
    relatedTool2: "GPS Track Replay",
    relatedTool2Desc: "Visualize and analyze GPS tracks with coordinate data on interactive maps.",
    
    referencesTitle: "Technical References and Resources",
    reference1: "World Geodetic System 1984 (WGS84) - National Geospatial-Intelligence Agency",
    reference2: "Transverse Mercator Projection - Wikipedia",
    reference3: "State Plane Coordinate System of 1983 - National Geodetic Survey"
  },
} 