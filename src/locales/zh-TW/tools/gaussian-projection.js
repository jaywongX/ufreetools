export default {
  name: "高斯投影正反算",
  title: "高斯投影正反算",
  description: "高斯投影座標與地理座標（經緯度）之間的互相轉換工具",
  calculationType: "計算類型",
  forward: "正算（經緯度→高斯座標）",
  inverse: "反算（高斯座標→經緯度）",
  ellipsoidParameters: "橢球參數",
  ellipsoidType: "橢球體類型",
  centralMeridian: "中央子午線（度）",
  a: "長半軸",
  f: "扁率",
  projectionParameters: "投影帶參數",
  projectionType: "投影帶類型",
  "3degree": "3度帶",
  "6degree": "6度帶",
  zoneNumber: "帶號",
  forwardInput: "輸入經緯度",
  latitude: "緯度",
  longitude: "經度",
  inverseInput: "輸入高斯座標",
  x: "X座標（北向）",
  y: "Y座標（東向）",
  calculate: "計算",
  results: "計算結果",
  dms: "度分秒格式",
  batchProcessing: "批次處理",
  inputFormat: "輸入格式",
  batchForwardFormat: "每行一組經緯度，格式：緯度,經度",
  batchInverseFormat: "每行一組座標，格式：X座標,Y座標",
  processBatch: "批次計算",
  batchResults: "批次結果",
  copyAll: "複製全部",
  downloadCSV: "下載CSV",
  copySuccess: "複製成功",
  copyFailed: "複製失敗",
  clear: "清空",
  formula: "公式說明",
  mapView: "地圖視圖",
  dmsInput: "度分秒輸入",
  dmsInputPlaceholder: "40°26'46\"N 79°58'56\"W",
  parse: "解析",
  dmsParseError: "度分秒格式解析錯誤",
  invalidLatitude: "無效的緯度",
  invalidLongitude: "無效的經度",
  invalidX: "無效的X座標",
  invalidY: "無效的Y座標",
  copyToClipboard: "複製到剪貼簿",
  autoCalculate: "自動計算",
  formulaExplanation: "高斯投影公式說明",
  uploadCSV: "上傳CSV",
  exportResults: "導出結果",
  exportAsGeoJSON: "導出為GeoJSON",
  exportAsKML: "導出為KML",
  exportAsTXT: "導出為TXT",
  mapLayers: "地圖圖層",
  standard: "標準",
  satellite: "衛星",
  terrain: "地形",
  pointsOnMap: "地圖上的點",
  clearPoints: "清除所有點",
  unitSystem: "單位制",
  metric: "米 (m)",
  imperial: "英尺 (ft)",
  customEllipsoid: "自定義橢球體",
  saveCustomEllipsoid: "保存自定義橢球體",

  formulaContent: `
    <p>高斯投影使用以下主要公式：</p>
    <h4>正算（經緯度→高斯座標）</h4>
    <p>將地理座標轉換為平面直角座標：</p>
    <ul>
      <li>X = m + 修正項</li>
      <li>Y = ν·cos(B)·l + 修正項</li>
    </ul>
    <h4>反算（高斯座標→經緯度）</h4>
    <p>將平面直角座標轉換為地理座標：</p>
    <ul>
      <li>B = μ + 修正項</li>
      <li>L = L₀₀ + 修正項</li>
    </ul>
    <p>其中：</p>
    <ul>
      <li>B：緯度</li>
      <li>L：經度</li>
      <li>L₀₀：中央子午線</li>
      <li>m：子午線弧長</li>
      <li>ν：卯酉圈曲率半徑</li>
    </ul>
  `,

  close: "關閉",

  ellipsoids: {
    WGS84: "WGS84橢球體",
    Krasovsky: "克拉索夫斯基橢球體",
    CGCS2000: "CGCS2000橢球體",
    GRS80: "GRS80橢球體",
    Beijing54: "北京54橢球體",
    Xian80: "西安80橢球體",
    Custom: "自定義橢球體"
  },

  about: {
    title: "關於高斯投影",
    description: "高斯投影（Gauss Projection）是一種保角橫軸橢圓柱投影，廣泛應用於測量和地圖製作中。它將地球橢球面上的點投影到平面上，是大中比例尺地形圖的常用投影方式。",
    forwardTitle: "正算（經緯度→高斯座標）",
    forwardDescription: "正算是將地理座標（經度、緯度）轉換為平面直角座標（X、Y）的過程。X軸指向北，Y軸指向東，原點為中央子午線與赤道的交點。",
    inverseTitle: "反算（高斯座標→經緯度）",
    inverseDescription: "反算是將平面直角座標（X、Y）轉換回地理座標（經度、緯度）的過程，是正算的逆運算。",
    parametersTitle: "參數說明",
    ellipsoidParam: "橢球體參數",
    ellipsoidDescription: "描述地球形狀的數學模型，不同的大地測量系統採用不同的橢球體參數。常用的有WGS84、北京54、西安80、CGCS2000等。",
    projectionParam: "投影帶參數",
    projectionDescription: "高斯投影通常分為3度帶和6度帶。3度帶適用於大比例尺地形圖，6度帶適用於中小比例尺地形圖。帶號決定了中央子午線的位置。"
  },

  loadExample: "加載示例",
  customEllipsoidSaved: "自定義橢球體保存成功",

  guide: {
    title: "操作指南",
    forwardTitle: "正算（經緯度→高斯座標）",
    step1: "在頂部選擇\"正算\"計算類型",
    step2: "選擇合適的橢球參數和投影帶",
    step3: "輸入十進制格式的緯度和經度值（如 39.9042, 116.4074）或使用度分秒輸入",
    step4: "結果會自動更新，或點擊\"計算\"按鈕執行計算",
    
    inverseTitle: "反算（高斯座標→經緯度）",
    step5: "在頂部選擇\"反算\"計算類型",
    step6: "輸入X和Y座標（單位：米）",
    step7: "查看十進制度和度分秒格式的經緯度結果",
    
    batchTitle: "批次處理",
    step8: "在批次處理區域輸入多組座標（每行一組）",
    step9: "點擊\"批次計算\"一次性計算所有座標",
    step10: "將結果導出為CSV或複製到剪貼簿",
    
    mapTitle: "地圖交互",
    step11: "點擊地圖添加點位並自動填充輸入值",
    step12: "使用下拉菜單切換不同的地圖圖層",
    step13: "將點位導出為GeoJSON、KML或TXT格式，以便在其他應用中使用"
  },

  gaussianProjectionPoints: "高斯投影點位",
  point: "點",
  gaussianProjection: "高斯投影",
  supportedFormats: "支援：CSV、TXT、Excel",
  excelExportNotice: "Excel導出已準備，可直接在Excel中打開此文件。",
  excelProcessNotice: "暫不完全支援Excel處理，建議使用CSV格式獲得最佳效果。",
  exportAsCSV: "導出為CSV",
  exportAsExcel: "導出為Excel",
  excelExportSuccess: "Excel文件導出成功",
  excelExportFailed: "Excel導出失敗，已退回到CSV格式",
  excelImportSuccess: "Excel文件導入成功",
  excelImportFailed: "Excel導入失敗，請嘗試CSV格式",

  units: {
    metric: "米 (m)",
    km: "千米 (km)",
    imperial: "英尺 (ft)",
    miles: "英里 (mi)"
  },

  resetView: "重置地圖視角",
  pointsTotal: "個點",
  currentPoint: "當前結果"
};