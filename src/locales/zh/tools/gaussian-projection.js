export default {
  name: '高斯投影正反算',
  title: '高斯投影正反算',
  description: '高斯投影坐标与地理坐标（经纬度）之间的互相转换工具',
  calculationType: '计算类型',
  forward: '正算（经纬度→高斯坐标）',
  inverse: '反算（高斯坐标→经纬度）',
  ellipsoidParameters: '椭球参数',
  ellipsoidType: '椭球体类型',
  centralMeridian: '中央子午线（度）',
  a: '长半轴',
  f: '扁率',
  projectionParameters: '投影带参数',
  projectionType: '投影带类型',
  '3degree': '3度带',
  '6degree': '6度带',
  zoneNumber: '带号',
  forwardInput: '输入经纬度',
  latitude: '纬度',
  longitude: '经度',
  inverseInput: '输入高斯坐标',
  x: 'X坐标（北向）',
  y: 'Y坐标（东向）',
  calculate: '计算',
  results: '计算结果',
  dms: '度分秒格式',
  batchProcessing: '批量处理',
  inputFormat: '输入格式',
  batchForwardFormat: '每行一组经纬度，格式：纬度,经度',
  batchInverseFormat: '每行一组坐标，格式：X坐标,Y坐标',
  processBatch: '批量计算',
  batchResults: '批量结果',
  copyAll: '复制全部',
  downloadCSV: '下载CSV',
  copySuccess: '复制成功',
  copyFailed: '复制失败',
  clear: '清空',
  formula: '公式说明',
  mapView: '地图视图',
  dmsInput: '度分秒输入',
  dmsInputPlaceholder: '40°26\'46"N 79°58\'56"W',
  parse: '解析',
  dmsParseError: '度分秒格式解析错误',
  invalidLatitude: '无效的纬度',
  invalidLongitude: '无效的经度',
  invalidX: '无效的X坐标',
  invalidY: '无效的Y坐标',
  copyToClipboard: '复制到剪贴板',
  autoCalculate: '自动计算',
  formulaExplanation: '高斯投影公式说明',
  uploadCSV: '上传CSV',
  exportResults: '导出结果',
  exportAsGeoJSON: '导出为GeoJSON',
  exportAsKML: '导出为KML',
  exportAsTXT: '导出为TXT',
  mapLayers: '地图图层',
  standard: '标准',
  satellite: '卫星',
  terrain: '地形',
  pointsOnMap: '地图上的点',
  clearPoints: '清除所有点',
  unitSystem: '单位制',
  metric: '米 (m)',
  imperial: '英尺 (ft)',
  customEllipsoid: '自定义椭球体',
  saveCustomEllipsoid: '保存自定义椭球体',

  formulaContent: `
    <p>高斯投影使用以下主要公式：</p>
    <h4>正算（经纬度→高斯坐标）</h4>
    <p>将地理坐标转换为平面直角坐标：</p>
    <ul>
      <li>X = m + 修正项</li>
      <li>Y = ν·cos(B)·l + 修正项</li>
    </ul>
    <h4>反算（高斯坐标→经纬度）</h4>
    <p>将平面直角坐标转换为地理坐标：</p>
    <ul>
      <li>B = μ + 修正项</li>
      <li>L = L₀ + 修正项</li>
    </ul>
    <p>其中：</p>
    <ul>
      <li>B：纬度</li>
      <li>L：经度</li>
      <li>L₀：中央子午线</li>
      <li>m：子午线弧长</li>
      <li>ν：卯酉圈曲率半径</li>
    </ul>
  `,

  close: '关闭',

  ellipsoids: {
    WGS84: 'WGS84椭球体',
    Krasovsky: '克拉索夫斯基椭球体',
    CGCS2000: 'CGCS2000椭球体',
    GRS80: 'GRS80椭球体',
    Beijing54: '北京54椭球体',
    Xian80: '西安80椭球体',
    Custom: '自定义椭球体'
  },

  about: {
    title: '关于高斯投影',
    description: '高斯投影（Gauss Projection）是一种保角横轴椭圆柱投影，广泛应用于测量和地图制作中。它将地球椭球面上的点投影到平面上，是大中比例尺地形图的常用投影方式。',
    forwardTitle: '正算（经纬度→高斯坐标）',
    forwardDescription: '正算是将地理坐标（经度、纬度）转换为平面直角坐标（X、Y）的过程。X轴指向北，Y轴指向东，原点为中央子午线与赤道的交点。',
    inverseTitle: '反算（高斯坐标→经纬度）',
    inverseDescription: '反算是将平面直角坐标（X、Y）转换回地理坐标（经度、纬度）的过程，是正算的逆运算。',
    parametersTitle: '参数说明',
    ellipsoidParam: '椭球体参数',
    ellipsoidDescription: '描述地球形状的数学模型，不同的大地测量系统采用不同的椭球体参数。常用的有WGS84、北京54、西安80、CGCS2000等。',
    projectionParam: '投影带参数',
    projectionDescription: '高斯投影通常分为3度带和6度带。3度带适用于大比例尺地形图，6度带适用于中小比例尺地形图。带号决定了中央子午线的位置。'
  },

  loadExample: '加载示例',
  customEllipsoidSaved: '自定义椭球体保存成功',

  guide: {
    title: '操作指南',
    forwardTitle: '正算（经纬度→高斯坐标）',
    step1: '在顶部选择"正算"计算类型',
    step2: '选择合适的椭球参数和投影带',
    step3: '输入十进制格式的纬度和经度值（如 39.9042, 116.4074）或使用度分秒输入',
    step4: '结果会自动更新，或点击"计算"按钮执行计算',
    
    inverseTitle: '反算（高斯坐标→经纬度）',
    step5: '在顶部选择"反算"计算类型',
    step6: '输入X和Y坐标（单位：米）',
    step7: '查看十进制度和度分秒格式的经纬度结果',
    
    batchTitle: '批量处理',
    step8: '在批量处理区域输入多组坐标（每行一组）',
    step9: '点击"批量计算"一次性计算所有坐标',
    step10: '将结果导出为CSV或复制到剪贴板',
    
    mapTitle: '地图交互',
    step11: '点击地图添加点位并自动填充输入值',
    step12: '使用下拉菜单切换不同的地图图层',
    step13: '将点位导出为GeoJSON、KML或TXT格式，以便在其他应用中使用'
  },

  gaussianProjectionPoints: '高斯投影点位',
  point: '点',
  gaussianProjection: '高斯投影',
  supportedFormats: '支持：CSV、TXT、Excel',
  excelExportNotice: 'Excel导出已准备，可直接在Excel中打开此文件。',
  excelProcessNotice: '暂不完全支持Excel处理，建议使用CSV格式获得最佳效果。',
  exportAsCSV: '导出为CSV',
  exportAsExcel: '导出为Excel',
  excelExportSuccess: 'Excel文件导出成功',
  excelExportFailed: 'Excel导出失败，已退回到CSV格式',
  excelImportSuccess: 'Excel文件导入成功',
  excelImportFailed: 'Excel导入失败，请尝试CSV格式',

  units: {
    metric: '米 (m)',
    km: '千米 (km)',
    imperial: '英尺 (ft)',
    miles: '英里 (mi)'
  },

  resetView: '重置地图视角',
  pointsTotal: '个点',
  currentPoint: '当前结果'
};