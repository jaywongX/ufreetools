export default {
  name: 'Coordinate System Converter',
  description: 'Convert geographic coordinates between different coordinate systems including WGS-84, GCJ-02, BD-09, Web Mercator, and UTM',
  title: 'Coordinate System Converter - Convert Between WGS84, GCJ02, BD09, and More',
  metaDescription: 'Free online coordinate converter tool to transform coordinates between WGS-84, GCJ-02 (Mars), BD-09 (Baidu), Web Mercator, and UTM coordinate systems. No installation required.',

  seo: {
    title: 'Coordinate Converter | Geographic Coordinate System Conversion Tool',
    description: 'Free online tool to convert coordinates between different geographic coordinate systems including WGS-84, GCJ-02 (China), BD-09, Web Mercator, and UTM projections.'
  },

  labels: {
    sourceSystem: 'Source Coordinate System',
    targetSystem: 'Target Coordinate System',
    latitude: 'Latitude',
    longitude: 'Longitude',
    x: 'X (Easting)',
    y: 'Y (Northing)',
    results: 'Conversion Results',
    formatted: 'Formatted Coordinate',
    mapPreview: 'Map Preview',
    batchConversion: 'Batch Conversion',
    batchInput: 'Input Coordinates (one per line)',
    inputFormat: 'Input Format',
    batchResults: 'Conversion Results'
  },

  placeholders: {
    latitude: 'Enter latitude (e.g., 39.909187)',
    longitude: 'Enter longitude (e.g., 116.397451)',
    x: 'Enter X coordinate (e.g., 12959167.71)',
    y: 'Enter Y coordinate (e.g., 4825908.23)',
    batchInput: 'Enter coordinates, one pair per line\ne.g.:\n39.909187, 116.397451\n31.230416, 121.473701'
  },

  buttons: {
    convert: 'Convert Coordinates',
    converting: 'Converting...',
    swap: 'Swap Systems',
    reset: 'Reset',
    batchConvert: 'Convert All',
    batchConverting: 'Converting Batch...',
    copyResults: 'Copy Results',
    exportCsv: 'Export as CSV',
    loadExample: 'Load Example',
    loadBatchExample: 'Load Examples'
  },

  formats: {
    latlon: 'Latitude Longitude (space separated)',
    lonlat: 'Longitude Latitude (space separated)',
    latlon_comma: 'Latitude, Longitude (comma separated)',
    lonlat_comma: 'Longitude, Latitude (comma separated)',
    latLng: '{lat}, {lng}',
    xy: '{x}, {y}'
  },

  messages: {
    copied: 'Copied to clipboard',
    noCoordinates: 'Please enter coordinates to convert',
    batchSuccess: 'All coordinates converted successfully'
  },

  errors: {
    invalidCoordinates: 'Invalid coordinate values',
    conversionFailed: 'Conversion failed',
    copyFailed: 'Failed to copy to clipboard',
    invalidFormat: 'Invalid coordinate format',
    batchFailed: 'Some coordinates failed to convert'
  },

  sections: {
    tips: {
      title: 'Conversion Tips',
      item1: 'WGS-84 is the global standard used by GPS and Google Maps outside China',
      item2: 'GCJ-02 is required for maps in mainland China',
      item3: 'BD-09 is specifically for Baidu Maps services',
      item4: 'Web Mercator is used by most web mapping applications'
    },
    about: {
      title: 'About Coordinate Systems',
      wgs84: 'The WGS-84 (World Geodetic System 1984) is the reference coordinate system used by the Global Positioning System (GPS) and is the standard for international maps and positioning.',
      gcj02: 'GCJ-02 is the official coordinate system used in mainland China for legal compliance. It applies an encryption algorithm to WGS-84 that creates a positional offset for security reasons.',
      bd09: 'BD-09 is the coordinate system used by Baidu Maps and services, which applies an additional transformation to GCJ-02 coordinates for further encryption.',
      webmercator: 'Web Mercator (EPSG:3857) is a cylindrical projection used by many web mapping services. It represents the Earth as a flat plane with coordinates in meters, suitable for web visualization.',
      utm: 'UTM (Universal Transverse Mercator) is a global grid-based system that divides the Earth into 60 zones. Coordinates are expressed in meters as eastings and northings relative to each zone origin.',
      dms: 'Degrees Minutes Seconds (DMS) is a traditional way to express geographic coordinates. Instead of decimal degrees, coordinates are divided into degrees (°), minutes (′), and seconds (″).',
      epsg3857: 'EPSG:3857 is the official designation for Web Mercator projection, used in major web mapping applications. It projects the ellipsoidal Earth onto a plane for display on screens.',
      amap: 'AMap (Gaode) coordinate system is the same as GCJ-02, which is mandated by the Chinese government for maps in mainland China. It applies a complex encryption algorithm to shift WGS-84 coordinates.',
      cgcs2000: 'China Geodetic Coordinate System 2000 (CGCS2000) is China\'s national coordinate system established in 2000. It is very close to WGS-84 with only minor differences.',
      lambert: 'Lambert Conformal Conic projection preserves angles and shapes of small areas. It is commonly used for mapping regions in the mid-latitudes like countries, states, or continents.',
      miller: 'Miller Cylindrical projection is a modification of the Mercator projection that reduces the distortion at high latitudes, making it suitable for world maps.',
      polar: 'Polar coordinate system expresses positions as distance from a reference point (pole) and angle from a reference direction. It is useful for mapping polar regions.',
      dkk: 'DKK (Delingha-Kashi-Kunming) projection is a specific conic projection used in China for certain cartographic purposes that minimizes distortion across the country.'
    },
  },

  export: {
    filename: 'coordinate_conversion',
    originalLat: 'Original_Latitude',
    originalLng: 'Original_Longitude',
    convertedLat: 'Converted_Latitude',
    convertedLng: 'Converted_Longitude'
  },

  systems: {
    wgs84: {
      name: 'WGS-84 (GPS)',
      description: 'World Geodetic System 1984, used by GPS and most international mapping applications'
    },
    gcj02: {
      name: 'GCJ-02 (Mars)',
      description: 'China\'s mandatory coordinate system with encryption algorithm applied to WGS-84'
    },
    bd09: {
      name: 'BD-09 (Baidu)',
      description: 'Baidu Maps coordinate system with additional transformation applied to GCJ-02'
    },
    webmercator: {
      name: 'Web Mercator (EPSG:3857)',
      description: 'Projection used by most web mapping applications, coordinates in meters'
    },
    utm: {
      name: 'UTM',
      description: 'Universal Transverse Mercator grid system with coordinates in meters'
    },
    dms: {
      name: 'DMS (Degrees Minutes Seconds)',
    },
    epsg3857: {
      name: 'EPSG:3857',
    },
    amap: {
      name: 'AMap (Gaode)',
    },
    cgcs2000: {
      name: 'CGCS2000',
    },
    lambert: {
      name: 'Lambert Projection',
    },
    miller: {
      name: 'Miller Projection',
    },
    polar: {
      name: 'Polar Coordinates',
    },
    dkk: {
      name: 'DKK Projection',
    }
  }
};