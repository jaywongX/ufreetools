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
}; 