export default {
  title: 'Online LIDAR Point Cloud Viewer - Free 3D Point Cloud Visualization Tool',
  functionTitle: 'Tool Features and Use Cases',
  intro:
    'Our <strong>Online LIDAR Point Cloud Viewer</strong> is a professional 3D point cloud visualization tool that supports online viewing and analysis of multiple point cloud formats. This <strong>free point cloud viewer</strong> is powered by WebGL, requiring no installation and delivering high-quality 3D point cloud rendering directly in your browser. Whether you are a surveying engineer, architect, or GIS specialist, this <strong>LIDAR data viewer</strong> meets your professional needs.',
  useCasesTitle: 'Main Use Cases',
  useCases: [
    'Surveying and mapping: View and analyze LiDAR scan data for terrain measurement and building surveys',
    'Architectural design: Visualize building point cloud data to support BIM workflows',
    'Urban planning: Analyze 3D city model data to support smart city planning and decision-making',
    'Forestry: Process forest point clouds for vegetation coverage and biomass assessment',
    'Archaeology: View 3D scan data of archaeological sites for conservation and research',
    'Geological exploration: Analyze geological structure point clouds for mineral exploration and hazard assessment',
    'Autonomous driving: View on-vehicle LiDAR data for path planning and obstacle detection',
    'Industrial inspection: Analyze 3D scans of equipment for quality control and defect detection'
  ],
  tipTitle: 'Pro Tip',
  tipContent:
    'Our viewer supports mainstream formats such as LAS, XYZ, PLY, and PCD, with multiple coloring modes and interactive controls to help you analyze point cloud data from different perspectives.',
  conclusion:
    'By using our <strong>online point cloud visualization tool</strong>, you can quickly preview and analyze various LIDAR datasets to boost productivity. This <strong>3D point cloud viewer</strong> is completely free and privacy-friendly; all processing happens locally in your browser.',
  faqTitle: 'Frequently Asked Questions (FAQ)',
  faqs: [
    {
      question: 'Which file formats does this LIDAR point cloud viewer support?',
      answer:
        'Our <strong>point cloud viewer</strong> supports multiple mainstream formats, including LAS (LIDAR standard format), XYZ (ASCII point cloud), PLY (Polygon File Format), PCD (Point Cloud Data), and TXT. These cover most <strong>LIDAR data processing</strong> and 3D scanning scenarios.'
    },
    {
      question: 'Is there a size limit for point cloud files?',
      answer:
        'To ensure good browser performance, we recommend <strong>point cloud files</strong> stay under 100MB. For large datasets, consider downsampling or tiling first. Our <strong>online point cloud viewer</strong> automatically optimizes rendering to keep the 3D visualization smooth.'
    },
    {
      question: 'How can I adjust the display of the point cloud?',
      answer:
        'Our <strong>3D point cloud visualization tool</strong> provides multiple display options: adjust point size, choose coloring modes (elevation, intensity, classification, RGB), control point density, and enable animation. These help you better analyze <strong>LIDAR scan data</strong>.'
    },
    {
      question: 'Is my point cloud data safe?',
      answer:
        'Absolutely. Our <strong>online LIDAR viewer</strong> processes everything locally—your <strong>point cloud data</strong> is never uploaded to any server. Parsing, rendering, and analysis all run in your browser to ensure data privacy and security, which is crucial for sensitive surveying and commercial projects.'
    },
    {
      question: 'Can I export images of the processed point cloud?',
      answer:
        'Yes. Our <strong>point cloud visualization tool</strong> can export the current view as a high-quality PNG image. Save screenshots at different angles and coloring modes for reports, presentations, or further <strong>point cloud data analysis</strong>.'
    }
  ],
  tutorialTitle: 'User Guide',
  steps: [
    {
      title: 'Choose a Point Cloud File',
      description:
        'Click “Select File” or drag and drop your <strong>LIDAR point cloud file</strong> into the upload area. Supported <strong>3D point cloud data</strong> formats include LAS, XYZ, PLY, PCD, and TXT.',
      note: 'We recommend files under 100MB for best performance'
    },
    {
      title: 'Wait for Parsing',
      description:
        'The system will parse your <strong>point cloud file</strong>, showing progress and file info. Once parsing completes, the point cloud loads automatically in the 3D viewer.',
      note: 'Parsing time depends on file size and complexity'
    },
    {
      title: '3D Navigation Controls',
      description:
        'Use the mouse for 3D navigation: <strong>Left-drag</strong> to rotate, <strong>right-drag</strong> to pan, and <strong>mouse wheel</strong> to zoom. These intuitive controls let you view the <strong>point cloud data</strong> from any angle.',
      note: 'Touch gestures are supported on mobile devices'
    },
    {
      title: 'Adjust Display Settings',
      description:
        'Use the right-hand control panel to adjust: coloring mode (elevation, intensity, classification, RGB), point size and density, and animation. These settings help analyze <strong>LIDAR data</strong> more effectively.',
      note: 'Different coloring modes suit different analysis needs'
    },
    {
      title: 'View Statistics',
      description:
        'Check detailed <strong>point cloud statistics</strong> in the info panel, including total points, coordinate range, and file format. These are important for <strong>point cloud data quality assessment</strong>.',
      note: 'Statistics update in real time'
    },
    {
      title: 'Export Results',
      description:
        'When satisfied, click “Export Image” to save the <strong>3D point cloud visualization</strong> as a PNG for reports or further analysis.',
      note: 'The exported image preserves the current view and display settings'
    }
  ],
  successTitle: 'All Set!',
  successContent:
    'Great job! You now know how to use the LIDAR Point Cloud Viewer for efficient 3D point cloud visualization and analysis.',
  relatedToolsTitle: 'Related Tools',
  relatedTools: [
    {
      name: 'Coordinate Converter',
      description:
        'Convert geographic coordinates between systems such as WGS-84, GCJ-02, BD-09, Web Mercator, and UTM',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'GPS Track Replay',
      description:
        'Visualize and replay GPS tracks from various file formats (GPX, KML, GeoJSON, CSV).',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: 'Gaussian Projection',
      description:
        'Convert between Gaussian projection coordinates and geographic coordinates (latitude/longitude)',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    }
  ],
  referencesTitle: 'References',
  references: [
    {
      name: 'ASPRS LAS Format Specification',
      description: 'Official LAS standard by the American Society for Photogrammetry and Remote Sensing',
      url: 'https://www.asprs.org/divisions-committees/lidar-division/laser-las-file-format-exchange-activities'
    },
    {
      name: 'WebGL Official Docs',
      description: 'Official documentation and best practices for the Web Graphics Library',
      url: 'https://www.khronos.org/webgl/'
    },
    {
      name: 'Point Cloud Library (PCL)',
      description: 'Official documentation and tutorials for the open-source point cloud processing library',
      url: 'https://pointclouds.org/'
    }
  ]
};