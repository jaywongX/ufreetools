export default {
    name: 'Coordinate Converter Tool',
    description: 'Convert geographic coordinates between different coordinate systems including WGS-84, GCJ-02, BD-09, Web Mercator, and UTM',
    title: 'Coordinate System Conversion Tool - Convert Between WGS84, GCJ02, BD09, and More',
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
    },
    
    article: {
      title: "Coordinate Converter Tool: Transform Between Different Coordinate Systems",
      introduction: "The Coordinate Converter Tool is a versatile online utility designed to transform geographic coordinates between different coordinate systems. Whether you're a GIS professional, developer, or geographic data analyst, this tool simplifies the complex process of converting coordinates between WGS-84 (GPS standard), GCJ-02 (Chinese standard), BD-09 (Baidu Maps), Web Mercator, and UTM coordinate systems.",
      
      whyNeeded: {
        title: "Why Convert Between Different Coordinate Systems?",
        p1: "Coordinate system conversion is essential when working with geospatial data from different sources or regions. Different countries and mapping services use different coordinate systems for legal, historical, or security reasons. For instance, maps in mainland China legally require the use of GCJ-02 coordinates rather than the global WGS-84 standard, while Baidu Maps uses its own BD-09 system.",
        p2: "Without proper conversion, maps and location data can show significant positional errors - sometimes up to several hundred meters. This discrepancy can cause serious problems in applications ranging from navigation to urban planning and emergency services."
      },
      
      systems: {
        title: "Understanding Different Coordinate Systems",
        
        wgs84: {
          title: "WGS-84 (World Geodetic System)",
          description: "WGS-84 (World Geodetic System 1984) is the reference coordinate system used by GPS satellites and serves as the international standard for maps and positioning. It's used by Google Maps outside China, OpenStreetMap, and most international mapping applications. Coordinates are typically expressed as latitude and longitude in decimal degrees."
        },
        
        gcj02: {
          title: "GCJ-02 (China's Official System)",
          description: "GCJ-02, colloquially known as 'Mars Coordinates', is the mandatory coordinate system for maps in mainland China as required by government regulations. It applies a proprietary encryption algorithm to WGS-84 coordinates, creating positional offsets that vary across locations. This system is used by AutoNavi (Gaode) Maps, Google Maps China, Apple Maps in China, and many Chinese applications."
        },
        
        bd09: {
          title: "BD-09 (Baidu Coordinate System)",
          description: "BD-09 is Baidu's proprietary coordinate system used exclusively for Baidu Maps and related services. It applies an additional transformation on top of GCJ-02 coordinates for further encryption. Any application interfacing with Baidu Maps services must use this coordinate system for accurate positioning."
        },
        
        webmercator: {
          title: "Web Mercator (EPSG:3857)",
          description: "Web Mercator, officially EPSG:3857, is a cylindrical map projection commonly used for web mapping applications like Google Maps and OpenStreetMap. It represents the Earth as a flat plane with coordinates measured in meters rather than degrees. This projection is optimized for web visualization but introduces significant distortion at higher latitudes."
        },
        
        utm: {
          title: "UTM (Universal Transverse Mercator)",
          description: "UTM is a grid-based system that divides the world into 60 zones, each 6 degrees of longitude wide. Coordinates are expressed as 'easting' and 'northing' in meters, relative to each zone's origin. It's commonly used in surveying, military applications, and GIS where metric measurements are preferred."
        }
      },
      
      useCases: {
        title: "Common Applications of Coordinate Conversion",
        
        case1: {
          title: "Mobile App Development",
          description: "When developing location-based applications that may be used across different countries, developers need to account for regional coordinate system requirements. For instance, a navigation app that works in both China and international markets needs to convert between WGS-84 and GCJ-02 coordinates to display accurate positions on the respective maps."
        },
        
        case2: {
          title: "GIS Data Integration",
          description: "Geographic Information System (GIS) projects often require combining data from multiple sources with different coordinate systems. For example, integrating satellite imagery (typically in WGS-84) with urban planning data from Chinese sources (in GCJ-02) requires coordinate conversion to ensure proper spatial alignment."
        },
        
        case3: {
          title: "Cross-border Navigation",
          description: "Transportation and logistics companies operating across borders, particularly around China, need to convert coordinates when vehicles or assets cross between regions using different mapping standards. This ensures continuous and accurate tracking regardless of location."
        },
        
        case4: {
          title: "Map Data Visualization",
          description: "Researchers and analysts working with global datasets often need to convert coordinates to ensure proper visualization on various mapping platforms. For example, plotting research data on a Baidu Map requires converting WGS-84 coordinates to BD-09, while visualizing the same data on Google Maps requires using the original WGS-84 coordinates."
        }
      },
      
      howToUse: {
        title: "How to Use the Coordinate Converter Tool",
        introduction: "Our coordinate converter tool makes it easy to transform coordinates between different systems. Here's a step-by-step guide to using this tool effectively:",
        
        step1: {
          title: "Select Your Coordinate Systems",
          description: "First, choose the source coordinate system (the system your coordinates are currently in) and the target coordinate system (the system you want to convert to) from the dropdown menus."
        },
        
        step2: {
          title: "Enter Your Coordinates",
          description: "Input your coordinates in the appropriate fields. For latitude/longitude systems (WGS-84, GCJ-02, BD-09), enter decimal degrees. For projected systems (Web Mercator, UTM), enter values in meters."
        },
        
        step3: {
          title: "Convert Your Coordinates",
          description: "Click the \"Convert Coordinates\" button to perform the conversion. The results will be displayed below, showing both the individual coordinate values and a formatted coordinate string that you can copy with a single click."
        },
        
        step4: {
          title: "Batch Conversion (Optional)",
          description: "For multiple coordinate pairs, use the batch conversion section. Enter your coordinates (one pair per line), select the input format, and click \"Convert All\" to process them simultaneously. You can then export the results as a CSV file."
        },
        
        example: {
          title: "Conversion Example",
          description: "Converting the coordinates of Beijing's Forbidden City:\n\n• WGS-84: 39.916345, 116.397155\n• When converted to GCJ-02: 39.91748, 116.40382\n• When converted to BD-09: 39.92373, 116.41029\n\nNotice how the coordinates shift by several hundred meters between systems, highlighting the importance of using the correct coordinate system for your specific application."
        }
      },
      
      tips: {
        title: "Best Practices for Coordinate Conversion",
        tip1: "Always verify the source coordinate system of your data before conversion to ensure accuracy.",
        tip2: "For applications used in mainland China, remember that using WGS-84 coordinates directly on maps without conversion may result in positional errors of 100-500 meters.",
        tip3: "When working with data near borders (e.g., Hong Kong/Mainland China), be particularly cautious about which coordinate system to use.",
        tip4: "For high-precision applications, consider using more sophisticated conversion libraries that account for local variations and geodetic parameters."
      },
      
      faq: {
        title: "Frequently Asked Questions",
        q1: "Why do my GPS coordinates not match Chinese maps?",
        a1: "GPS devices provide coordinates in the WGS-84 system, while Chinese maps legally must use the GCJ-02 system with deliberate offset. This creates a discrepancy of typically 100-500 meters. Using this conversion tool can help align your GPS data with Chinese maps.",
        
        q2: "Is this conversion reversible and lossless?",
        a2: "Conversions between WGS-84 and GCJ-02 or BD-09 are not perfectly reversible due to the nature of the encryption algorithms. However, this tool implements the most accurate algorithms available to minimize errors, typically keeping them under 1-2 meters for reversible operations.",
        
        q3: "Which coordinate system should I use for my application?",
        a3: "It depends on your mapping provider and region: use WGS-84 for global applications and services like Google Maps (outside China); use GCJ-02 for AutoNavi/Gaode Maps and Google Maps China; use BD-09 for Baidu Maps; use Web Mercator for web mapping libraries like Leaflet or OpenLayers; and use UTM for applications requiring measurements in meters within specific zones.",
        
        q4: "How accurate are these conversions?",
        a4: "The conversions implemented in this tool are based on the best available public algorithms and are accurate to within 1-2 meters in most cases. However, the original encryption algorithms for GCJ-02 and BD-09 are proprietary, so small discrepancies may exist compared to official conversions."
      },
      
      conclusion: {
        title: "Simplify Your Geospatial Work with Our Coordinate Converter",
        text: "Coordinate system conversion is a critical but often overlooked aspect of working with geospatial data. Our free online Coordinate Converter Tool removes the complexity from this process, allowing you to quickly and accurately transform coordinates between WGS-84, GCJ-02, BD-09, Web Mercator, and UTM systems. Whether you're developing mapping applications, analyzing geographic data, or simply need to plot accurate points on different maps, this tool provides a straightforward solution to coordinate system challenges."
      },
      
      relatedTools: {
        title: "Related Geospatial Tools",
        tools: [
          {
            name: "GeoJSON Viewer",
            description: "Visualize and edit GeoJSON files with our interactive mapping tool.",
            url: "https://www.ufreetools.com/tools/geojson-viewer"
          },
          {
            name: "IP Geolocation",
            description: "Find the geographic location of IP addresses with our IP lookup tool.",
            url: "https://www.ufreetools.com/tools/ip-lookup"
          }
        ]
      },
      
      externalLinks: {
        intro: "Learn more about coordinate systems from these authoritative sources:",
        wikipedia: "Wikipedia: Geographic Coordinate Systems",
        epsg: "EPSG.io Coordinate System Database"
      }
    }
};