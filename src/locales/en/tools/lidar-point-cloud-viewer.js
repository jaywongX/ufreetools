export default {
  name: 'LIDAR Point Cloud Viewer - Online 3D Point Cloud Visualization Tool',
  description:
    'Free online LIDAR point cloud viewer supporting LAS, XYZ, PLY, PCD formats. Provides 3D visualization, multiple coloring modes, interactive navigation, and data analysis features',
  inputTitle: 'Input Point Cloud File',
  outputTitle: '3D Point Cloud View',
  dragTip: 'Drag and drop a point cloud file here or click to upload',
  supported: 'Supported formats: LAS, XYZ, PLY, PCD, TXT',
  loadFromUrl: 'Load from URL',
  load: 'Load',
  loadSample: 'Load Sample Data',
  coloringMode: 'Coloring Mode',
  elevation: 'Elevation Coloring',
  intensity: 'Intensity Coloring',
  classification: 'Classification Coloring',
  rgb: 'RGB Coloring',
  pointSize: 'Point Size',
  pointDensity: 'Point Density',
  enableAnimation: 'Enable Animation',
  showTrajectory: 'Show Trajectory',
  showSensorData: 'Show Sensor Data',
  fileInfo: 'File Info',
  fileName: 'File Name',
  pointCount: 'Point Count',
  fileSize: 'File Size',
  bounds: 'Bounds',
  resetView: 'Reset View',
  exportImage: 'Export Image',
  loading: 'Loading...',
  noData: 'Please upload a point cloud file or load sample data',
  controls: {
    rotate: 'Mouse drag: Rotate view',
    zoom: 'Mouse wheel: Zoom view',
    pan: 'Shift+drag: Pan view'
  },
  stats: {
    visible: 'Visible Points',
    total: 'Total Points',
    points: 'points'
  },
  metadata: {
    title: 'LAS Metadata',
    systemId: 'System Identifier',
    software: 'Generating Software',
    version: 'LAS Version',
    creationDate: 'Creation Date',
    pointFormat: 'Point Data Format',
    vlrCount: 'VLR Count',
    returnStats: 'Return Statistics',
    extent: 'Spatial Extent'
  },
  error: {
    loadFailed: 'Failed to load point cloud file, please check if the file format is correct',
    urlLoadFailed: 'Failed to load file from URL, please check the URL'
  },
  disclaimer: {
    title: 'Technical Notes',
    content:
      'This tool uses WebGL to implement 3D point cloud visualization in the browser. All data processing is performed locally to ensure data security.',
    formats:
      'Supported formats: LAS (LIDAR standard format), XYZ (ASCII point cloud), PLY (Polygon File Format), PCD (Point Cloud Data format)',
    performance:
      'Performance tip: Large point cloud files may require longer loading times. It is recommended to use a modern browser for the best performance.'
  }
};