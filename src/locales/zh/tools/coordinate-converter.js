export default {
  name: '坐标系统转换器',
  description: '在不同坐标系统之间转换地理坐标，包括WGS-84、GCJ-02、BD-09、Web墨卡托和UTM',
  title: '坐标系统转换器 - 在WGS84、GCJ02、BD09等坐标系之间转换',
  metaDescription: '免费在线坐标系统转换器，可在WGS-84、GCJ-02（火星坐标）、BD-09（百度坐标）、Web墨卡托和UTM坐标系统之间转换坐标。无需安装。',

  seo: {
    title: '坐标系转换工具 | 地理坐标系统互转工具',
    description: '免费在线工具，可在WGS-84、GCJ-02（中国）、BD-09、Web墨卡托和UTM投影等不同地理坐标系统之间进行转换。'
  },

  labels: {
    sourceSystem: '源坐标系统',
    targetSystem: '目标坐标系统',
    latitude: '纬度',
    longitude: '经度',
    x: 'X坐标（东距）',
    y: 'Y坐标（北距）',
    results: '转换结果',
    formatted: '格式化坐标',
    mapPreview: '地图预览',
    batchConversion: '批量转换',
    batchInput: '输入坐标（每行一对）',
    inputFormat: '输入格式',
    batchResults: '转换结果'
  },

  placeholders: {
    latitude: '输入纬度（例如：39.909187）',
    longitude: '输入经度（例如：116.397451）',
    x: '输入X坐标（例如：12959167.71）',
    y: '输入Y坐标（例如：4825908.23）',
    batchInput: '输入坐标，每行一对\n例如：\n39.909187, 116.397451\n31.230416, 121.473701'
  },

  buttons: {
    convert: '转换坐标',
    converting: '转换中...',
    swap: '交换系统',
    reset: '重置',
    batchConvert: '批量转换',
    batchConverting: '批量转换中...',
    copyResults: '复制结果',
    exportCsv: '导出为CSV',
    loadExample: '加载示例',
    loadBatchExample: '加载批量示例'
  },

  formats: {
    latlon: '纬度 经度（空格分隔）',
    lonlat: '经度 纬度（空格分隔）',
    latlon_comma: '纬度, 经度（逗号分隔）',
    lonlat_comma: '经度, 纬度（逗号分隔）',
    latLng: '{lat}, {lng}',
    xy: '{x}, {y}'
  },

  messages: {
    copied: '已复制到剪贴板',
    noCoordinates: '请输入要转换的坐标',
    batchSuccess: '所有坐标转换成功'
  },

  errors: {
    invalidCoordinates: '无效的坐标值',
    conversionFailed: '转换失败',
    copyFailed: '复制到剪贴板失败',
    invalidFormat: '无效的坐标格式',
    batchFailed: '部分坐标转换失败'
  },

  sections: {
    tips: {
      title: '转换提示',
      item1: 'WGS-84是GPS和中国境外Google地图使用的全球标准',
      item2: 'GCJ-02是中国大陆地图法律要求使用的坐标系',
      item3: 'BD-09专门用于百度地图服务',
      item4: 'Web墨卡托被大多数网络地图应用使用'
    },
    about: {
      title: '关于坐标系统',
      wgs84: 'WGS-84（世界大地测量系统1984）是全球定位系统（GPS）使用的参考坐标系统，是国际地图和定位的标准。',
      gcj02: 'GCJ-02是中国大陆法律要求使用的官方坐标系统。它对WGS-84应用加密算法，出于安全原因导致位置偏移。',
      bd09: 'BD-09是百度地图和服务使用的坐标系统，对GCJ-02坐标应用额外的转换以进一步加密。',
      webmercator: 'Web墨卡托（EPSG:3857）是许多网络地图服务使用的圆柱投影。它将地球表示为平面，坐标以米为单位，适合网络可视化。',
      utm: 'UTM（通用横轴墨卡托）是将地球分为60个区域的全球基于网格的系统。坐标以米为单位表示为相对于每个区域原点的东距和北距。',
      dms: '度分秒（DMS）是表示地理坐标的传统方式。它不使用十进制度数，而是将坐标分为度（°）、分（′）和秒（″）。',
      epsg3857: 'EPSG:3857是Web墨卡托投影的官方标识，被主要的网络地图应用使用。它将椭球形地球投影到平面上以便在屏幕上显示。',
      amap: '高德坐标系与GCJ-02相同，是中国政府要求的中国大陆地图使用的坐标系。它对WGS-84坐标应用了复杂的加密算法进行偏移。',
      cgcs2000: '中国2000国家大地坐标系（CGCS2000）是中国在2000年建立的国家坐标系统。它与WGS-84非常接近，只有微小差异。',
      lambert: '兰伯特等角圆锥投影保留了小区域的角度和形状。它常用于中纬度地区的地图，如国家、州或大陆。',
      miller: '米勒圆柱投影是墨卡托投影的一种修改，减少了高纬度地区的失真，适用于世界地图。',
      polar: '极坐标系将位置表示为相对于参考点（极点）的距离和相对于参考方向的角度。它对于极地区域的地图制作很有用。',
      dkk: '德林凯特投影（DKK，德林哈-喀什-昆明）是中国特定的圆锥投影，用于某些全国性地图制作，可以最大限度地减少全国范围的失真。'
    },
  },

  export: {
    filename: '坐标转换',
    originalLat: '原始纬度',
    originalLng: '原始经度',
    convertedLat: '转换后纬度',
    convertedLng: '转换后经度'
  },

  systems: {
    wgs84: {
      name: 'WGS-84 (GPS坐标)',
      description: '世界大地测量系统1984，由GPS和大多数国际地图应用使用'
    },
    gcj02: {
      name: 'GCJ-02 (火星坐标系)',
      description: '中国强制使用的坐标系统。它对WGS-84坐标应用加密算法，出于安全原因导致位置偏移。'
    },
    bd09: {
      name: 'BD-09 (百度坐标系)',
      description: '百度地图和服务使用的系统，对GCJ-02坐标应用额外的转换以进一步加密。'
    },
    webmercator: {
      name: 'Web墨卡托 (EPSG:3857)',
      description: '许多网络地图服务使用的圆柱投影。它将地球表示为平面，坐标以米为单位，适合网络可视化。'
    },
    utm: {
      name: 'UTM (通用横轴墨卡托)',
      description: '将地球分为60个区域的全球基于网格的系统。坐标以米为单位表示为相对于每个区域原点的东距和北距。'
    },
    dms: {
      name: '度分秒 (DMS)',
    },
    epsg3857: {
      name: 'EPSG:3857',
    },
    amap: {
      name: '高德坐标系',
    },
    cgcs2000: {
      name: 'CGCS2000国家大地坐标系',
    },
    lambert: {
      name: '兰伯特投影',
    },
    miller: {
      name: '米勒投影',
    },
    polar: {
      name: '极坐标',
    },
    dkk: {
      name: '德林凯特投影',
    }
  }
}; 