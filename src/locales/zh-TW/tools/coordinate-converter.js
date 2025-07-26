export default {
  name: "座標系統轉換器",
  description: "在不同座標系統之間轉換地理座標，包括WGS-84、GCJ-02、BD-09、Web墨卡托和UTM",
  title: "座標系統轉換器 - 在WGS84、GCJ02、BD09等座標系之間轉換",
  metaDescription: "免費在線座標系統轉換器，可在WGS-84、GCJ-02（火星座標）、BD-09（百度座標）、Web墨卡托和UTM座標系統之間轉換座標。無需安裝。",

  seo: {
    title: "座標系轉換工具 | 地理座標系統互轉工具",
    description: "免費在線工具，可在WGS-84、GCJ-02（中國）、BD-09、Web墨卡托和UTM投影等不同地理座標系統之間進行轉換。"
  },

  labels: {
    sourceSystem: "源座標系統",
    targetSystem: "目標座標系統",
    latitude: "緯度",
    longitude: "經度",
    x: "X座標（東距）",
    y: "Y座標（北距）",
    results: "轉換結果",
    formatted: "格式化座標",
    mapPreview: "地圖預覽",
    batchConversion: "批量轉換",
    batchInput: "輸入座標（每行一對）",
    inputFormat: "輸入格式",
    batchResults: "轉換結果"
  },

  placeholders: {
    latitude: "輸入緯度（例如：39.909187）",
    longitude: "輸入經度（例如：116.397451）",
    x: "輸入X座標（例如：12959167.71）",
    y: "輸入Y座標（例如：4825908.23）",
    batchInput: "輸入座標，每行一對\n例如：\n39.909187, 116.397451\n31.230416, 121.473701"
  },

  buttons: {
    convert: "轉換座標",
    converting: "轉換中...",
    swap: "交換系統",
    reset: "重置",
    batchConvert: "批量轉換",
    batchConverting: "批量轉換中...",
    copyResults: "複製結果",
    exportCsv: "導出為CSV",
    loadExample: "加載示例",
    loadBatchExample: "加載批量示例"
  },

  formats: {
    latlon: "緯度 經度（空格分隔）",
    lonlat: "經度 緯度（空格分隔）",
    latlon_comma: "緯度, 經度（逗號分隔）",
    lonlat_comma: "經度, 緯度（逗號分隔）",
    latLng: "{lat}, {lng}",
    xy: "{x}, {y}"
  },

  messages: {
    copied: "已複製到剪貼板",
    noCoordinates: "請輸入要轉換的座標",
    batchSuccess: "所有座標轉換成功"
  },

  errors: {
    invalidCoordinates: "無效的座標值",
    conversionFailed: "轉換失敗",
    copyFailed: "複製到剪貼板失敗",
    invalidFormat: "無效的座標格式",
    batchFailed: "部分座標轉換失敗"
  },

  sections: {
    tips: {
      title: "轉換提示",
      item1: "WGS-84是GPS和中國境外Google地圖使用的全球標準",
      item2: "GCJ-02是中國大陸地圖法律要求使用的座標系",
      item3: "BD-09專門用於百度地圖服務",
      item4: "Web墨卡托被大多數網絡地圖應用使用"
    },
    about: {
      title: "關於座標系統",
      wgs84: "WGS-84（世界大地測量系統1984）是全球定位系統（GPS）使用的參考座標系統，是國際地圖和定位的標準。",
      gcj02: "GCJ-02是中國大陸法律要求使用的官方座標系統。它對WGS-84應用加密算法，出於安全原因導致位置偏移。",
      bd09: "BD-09是百度地圖和服務使用的座標系統，對GCJ-02座標應用額外的轉換以進一步加密。",
      webmercator: "Web墨卡托（EPSG:3857）是許多網絡地圖服務使用的圓柱投影。它將地球表示為平面，座標以米為單位，適合網絡可視化。",
      utm: "UTM（通用橫軸墨卡托）是將地球分為60個區域的全球基於網格的系統。座標以米為單位表示為相對於每個區域原點的東距和北距。",
      dms: "度分秒（DMS）是表示地理座標的傳統方式。它不使用十進制度數，而是將座標分為度（°）、分（′）和秒（″）。",
      epsg3857: "EPSG:3857是Web墨卡托投影的官方標識，被主要的網絡地圖應用使用。它將橢球形地球投影到平面上以便在屏幕上顯示。",
      amap: "高德座標系與GCJ-02相同，是中國政府要求的中國大陸地圖使用的座標系。它對WGS-84座標應用了複雜的加密算法進行偏移。",
      cgcs2000: "中國2000國家大地座標系（CGCS2000）是中國在2000年建立的國家座標系統。它與WGS-84非常接近，只有微小差異。",
      lambert: "蘭伯特等角圓錐投影保留了小區域的角度和形狀。它常用於中緯度地區的地圖，如國家、州或大陸。",
      miller: "米勒圓柱投影是墨卡托投影的一種修改，減少了高緯度地區的失真，適用於世界地圖。",
      polar: "極座標系將位置表示為相對於參考點（極點）的距離和相對於參考方向的角度。它對於極地區域的地圖製作很有用。",
      dkk: "德林凱特投影（DKK，德林哈-喀什-昆明）是中國特定的圓錐投影，用於某些全國性地圖製作，可以最大限度地減少全國範圍的失真。"
    }
  },

  export: {
    filename: "座標轉換",
    originalLat: "原始緯度",
    originalLng: "原始經度",
    convertedLat: "轉換後緯度",
    convertedLng: "轉換後經度"
  },

  systems: {
    wgs84: {
      name: "WGS-84 (GPS座標)",
      description: "世界大地測量系統1984，由GPS和大多數國際地圖應用使用"
    },
    gcj02: {
      name: "GCJ-02 (火星座標系)",
      description: "中國強制使用的座標系統。它對WGS-84座標應用加密算法，出於安全原因導致位置偏移。"
    },
    bd09: {
      name: "BD-09 (百度座標系)",
      description: "百度地圖和服務使用的系統，對GCJ-02座標應用額外的轉換以進一步加密。"
    },
    webmercator: {
      name: "Web墨卡托 (EPSG:3857)",
      description: "許多網絡地圖服務使用的圓柱投影。它將地球表示為平面，座標以米為單位，適合網絡可視化。"
    },
    utm: {
      name: "UTM (通用橫軸墨卡托)",
      description: "將地球分為60個區域的全球基於網格的系統。座標以米為單位表示為相對於每個區域原點的東距和北距。"
    },
    dms: {
      name: "度分秒 (DMS)"
    },
    epsg3857: {
      name: "EPSG:3857"
    },
    amap: {
      name: "高德座標系"
    },
    cgcs2000: {
      name: "CGCS2000國家大地座標系"
    },
    lambert: {
      name: "蘭伯特投影"
    },
    miller: {
      name: "米勒投影"
    },
    polar: {
      name: "極座標"
    },
    dkk: {
      name: "德林凱特投影"
    }
  }
};