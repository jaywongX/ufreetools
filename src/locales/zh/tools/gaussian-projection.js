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
    currentPoint: '当前结果',
    article: {
      title: "高斯投影计算器：地理坐标与平面坐标互转工具",
      introTitle: "什么是高斯投影及为何需要此工具",
      introPara1: "<strong>高斯投影计算器</strong>（又称横轴墨卡托投影）是测量工程师、制图专家、GIS专业人员以及任何使用地理信息系统工作的人的必备工具。这款强大的坐标转换工具允许您使用高斯投影方法在地理坐标（纬度和经度）与平面直角坐标（X和Y）之间无缝转换。",
      introPara2: "我们的<strong>高斯投影转换工具</strong>可以高精度处理正算（地理坐标转平面坐标）和反算（平面坐标转地理坐标）计算。它支持多种椭球模型，包括WGS84、CGCS2000、克拉索夫斯基（北京54）等。该工具自动应用适当的数学公式和校正项，确保您的测量和制图项目获得准确的坐标转换。",
      
      scenariosTitle: "高斯投影计算的实际应用场景",
      scenario1: "<strong>测量与土地管理：</strong>测量师使用高斯投影转换将GPS坐标转换为当地平面坐标系统，用于准确的土地测量、财产边界确定和建设规划。",
      scenario2: "<strong>地形图绘制：</strong>制图师和地图专业人员依靠高斯投影创建精确的地形图，保持角度关系并最小化特定区域的变形。",
      scenario3: "<strong>GIS数据整合：</strong>GIS分析师使用高斯投影计算将来自不同源且具有不同坐标系统的数据整合到统一的参考框架中进行空间分析。",
      scenario4: "<strong>工程项目：</strong>土木工程师和建设团队采用高斯投影进行基础设施设计，确保道路、桥梁、隧道和公用设施相对于现有特征的精确定位。",
      scenario5: "<strong>军事与国防：</strong>军事行动利用高斯投影坐标进行战术规划、导航和目标定位，满足精确定位需求。",
      scenariosConclusion: "<strong>高斯投影计算</strong>的多功能性使其在众多需要精确空间定位的专业领域中不可或缺。我们的工具将这一复杂的数学过程简化为简单、直观的界面，既适合专业人士使用，也适合初学者。",
      
      faqTitle: "关于高斯投影的常见问题",
      faq1q: "高斯投影和UTM有什么区别？",
      faq1a: "高斯投影是通用横轴墨卡托（UTM）系统建立的数学基础。主要区别包括：<ul><li>UTM使用标准化分带系统，全球采用6度带和特定参数</li><li>高斯投影更灵活，允许自定义中央子午线和带宽（3度带或6度带）</li><li>UTM包括标准的500,000米假东偏移和0.9996比例因子</li><li>我们的<strong>高斯投影计算器</strong>在椭球参数方面允许比典型UTM计算器更多的自定义选项</li></ul>",
      
      faq2q: "我应该为高斯投影计算选择哪种椭球模型？",
      faq2a: "椭球体的选择取决于您的地理区域和使用的坐标系统标准：<ul><li><strong>WGS84：</strong>与GPS系统和国际测绘全球通用</li><li><strong>CGCS2000：</strong>中国自2000年以来的官方坐标系统</li><li><strong>克拉索夫斯基/北京54：</strong>历史上在中国和东欧部分地区使用</li><li><strong>西安80：</strong>CGCS2000之前使用的中国国家标准</li></ul>对于大多数现代应用，推荐使用WGS84或CGCS2000，除非您专门处理需要不同椭球体的遗留数据。我们的<strong>高斯投影转换工具</strong>支持所有这些模型及更多。",
      
      faq3q: "该工具提供的高斯投影计算精度如何？",
      faq3a: "我们的<strong>高斯投影计算器</strong>实现了完整的数学模型并包含适当的校正项，以确保高精度。对于大多数实际应用，该工具达到亚毫米精度，超过了典型测量和制图项目的要求。精度取决于椭球参数的正确输入和正确的分带指定。对于极高精度的大地测量工作（亚毫米要求），可能需要具有额外校正项的专业软件。",
      
      faq4q: "我可以使用这个高斯投影工具进行批量坐标处理吗？",
      faq4a: "是的，我们的<strong>高斯投影转换器</strong>包含完整的批处理功能。您可以：<ul><li>输入多组坐标对（纬度/经度或X/Y）</li><li>上传包含坐标数据的CSV、TXT或Excel文件</li><li>同时处理数百或数千个点</li><li>以各种格式导出结果，包括CSV、Excel、GeoJSON、KML和TXT</li></ul>这使得该工具非常适合处理大型数据集的项目，单独处理这些数据会非常耗时。",
      
      faq5q: "高斯投影中的3度带和6度带是什么？",
      faq5a: "高斯投影将地球分成经度带以最小化变形：<ul><li><strong>3度带：</strong>较窄的分带提供更高的精度和更少的变形，通常用于大比例尺地图绘制和详细测量。带号范围从1到120。</li><li><strong>6度带：</strong>较宽的分带覆盖更大的区域，边缘处的变形稍大，常用于区域地图绘制和UTM坐标。带号范围从1到60。</li></ul>我们的<strong>高斯投影计算工具</strong>支持这两种分带系统，并根据您的分带选择自动计算中央子午线。",
      
      tutorialTitle: "使用高斯投影计算器的分步指南",
      forwardCalcTitle: "正算（地理坐标转高斯坐标）",
      step1: "<strong>选择计算类型：</strong>在工具顶部的计算类型选项中选择\"正算\"。",
      step2: "<strong>选择椭球参数：</strong>根据您的坐标系统要求，从下拉菜单中选择适当的椭球体类型（WGS84、CGCS2000、北京54等）。",
      step3: "<strong>设置投影参数：</strong>选择3度带或6度带，并输入带号。中央子午线将自动计算，或者您可以根据需要手动输入。",
      step4: "<strong>输入地理坐标：</strong>以十进制度输入纬度和经度值。您还可以使用DMS（度分秒）输入字段输入传统表示法。",
      
      inverseCalcTitle: "反算（高斯坐标转地理坐标）",
      step5: "<strong>选择计算类型：</strong>选择\"反算\"计算类型。",
      step6: "<strong>配置椭球和投影：</strong>选择与原始坐标系统相同的椭球参数和投影设置。",
      step7: "<strong>输入平面坐标：</strong>以米为单位输入X（北向）和Y（东向）值。",
      step8: "<strong>查看结果：</strong>计算出的纬度和经度将以十进制度和DMS格式显示，便于参考。",
      
      batchTitle: "批量处理多组坐标",
      step9: "<strong>准备数据：</strong>格式化坐标对，每行一对（正算时为纬度,经度；反算时为X,Y）。您还可以使用\"上传CSV\"按钮从文件导入数据。",
      step10: "<strong>处理批量数据：</strong>点击\"批量计算\"按钮一次性转换所有坐标。",
      step11: "<strong>导出结果：</strong>使用\"复制全部\"或\"下载CSV\"按钮保存转换结果，以便在其他应用程序中使用。",
      
      tutorialConclusion: "使用这款<strong>高斯投影计算器</strong>，您可以在地理坐标和平面坐标系统之间快速转换坐标，无需进行复杂的手动计算。该工具直观的界面使专业级坐标转换对各层次的用户都易于使用。",
      
      relatedToolsTitle: "相关坐标工具",
      relatedTool1: "坐标转换器",
      relatedTool1Desc: "在不同坐标系统之间转换坐标，包括UTM、MGRS和各种国家网格。",
      relatedTool2: "GPS轨迹回放",
      relatedTool2Desc: "在交互式地图上可视化和分析带有坐标数据的GPS轨迹。",
      
      referencesTitle: "技术参考与资源",
      reference1: "世界大地测量系统1984 (WGS84) - 国家地理空间情报局",
      reference2: "横轴墨卡托投影 - 维基百科",
      reference3: "1983年平面坐标系统 - 国家大地测量局"
    },
}